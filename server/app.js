import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PAYMONGO_SECRET = process.env.PAYMONGO_SECRET_KEY;

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

        const response = await axios.post(

            "https://api.paymongo.com/v1/checkout_sessions",

            {
                data: {

                    attributes: {

                        billing: {

                            name: "CSE Reviewer User"

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

                        success_url:
                            "http://localhost:5500/payment-success.html",

                        cancel_url:
                            "http://localhost:5500/license.html"

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

    console.log("Webhook received.");

    res.sendStatus(200);

});

// ------------------------------------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(

        `Server running on port ${PORT}`

    );

});