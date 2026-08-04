import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PAYMONGO_SECRET = process.env.PAYMONGO_SECRET_KEY;

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

// ------------------------------------
// HEALTH CHECK
// ------------------------------------

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CSE Reviewer API is running."
    });
});

// ------------------------------------
// CREATE CHECKOUT
// ------------------------------------

app.post("/api/create-checkout", async (req, res) => {
    try {
        const { user_id, email } = req.body;

        if (!user_id) {
            return res.status(400).json({
                error: "Missing user_id."
            });
        }

        const response = await axios.post(
            "https://api.paymongo.com/v1/checkout_sessions",
            {
                data: {
                    attributes: {
                        billing: {
                            name: "CSE Reviewer User",
                            email: email
                        },
                        send_email_receipt: false,
                        show_description: true,
                        show_line_items: true,
                        line_items: [
                            {
                                currency: "PHP",
                                amount: 29900,
                                name: "CSE Reviewer PRO Lifetime",
                                quantity: 1
                            }
                        ],
                        payment_method_types: [
                            "gcash",
                            "paymaya",
                            "card"
                        ],
                        metadata: {
                            user_id: user_id,
                            email: email
                        },
                        success_url:
                            "https://cse-reviewer-hub-2.onrender.com/payment-success.html",
                        cancel_url:
                            "https://cse-reviewer-hub-2.onrender.com/license.html"
                    }
                }
            },
            {
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                    authorization:
                        "Basic " +
                        Buffer.from(
                            PAYMONGO_SECRET + ":"
                        ).toString("base64")
                }
            }
        );

        // Insert pending payment record
        const { error: insertError } = await supabase
            .from("payments")
            .insert({
                user_id: user_id,
                checkout_id: response.data.data.id,
                amount: 10,
                status: "pending"
            });

        if (insertError) {
            console.error("Supabase insert failed:", insertError);
        }

        res.json({
            checkout_url:
                response.data.data.attributes.checkout_url
        });
    }
    catch (err) {
        console.error(
            err.response?.data || err.message
        );

        res.status(500).json({
            error: "Unable to create checkout."
        });
    }
});

// ------------------------------------
// WEBHOOK
// ------------------------------------

app.post("/api/paymongo-webhook", async (req, res) => {

    try {

        const checkout = req.body.data.attributes.data;

        const metadata = checkout.attributes.metadata;

        const user_id = metadata.user_id;

        const payment =
            checkout.attributes.payments[0].attributes;

        const paymentIntent =
            payment.payment_intent_id;

        const checkoutId =
            checkout.id;

        // Activate PRO
        const { error: profileError } = await supabase
            .from("profiles")
            .update({
                is_pro: true,
                plan: "PRO",
                updated_at: new Date().toISOString()
            })
            .eq("id", user_id);

        if (profileError) {
            console.error("Profile update error:", profileError);
        }

        // Update payment
        const { error: paymentError } = await supabase
            .from("payments")
            .update({
                status: "paid",
                payment_intent_id: paymentIntent,
                updated_at: new Date().toISOString()
            })
            .eq("checkout_id", checkoutId);

        if (paymentError) {
            console.error("Payment update error:", paymentError);
        }

        console.log("PRO Activated:", user_id);

        res.sendStatus(200);

    } catch (err) {

        console.error("Webhook error:", err);

        res.sendStatus(200);

    }

});

// ------------------------------------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});