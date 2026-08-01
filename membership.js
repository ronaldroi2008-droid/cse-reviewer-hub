console.log("membership.js loaded");

// ==========================================
// GLOBAL STATE
// ==========================================

let sessionValidationTimer = null;
let isLoggingOut = false;

// ==========================================
// MEMBERSHIP SYSTEM
// ==========================================

function updateMembershipUI() {
    if (!currentProfile) return;

    const statusBox = document.getElementById("licenseStatusBox");
    const practiceBtn = document.getElementById("practiceModeBtn");
    const mockBtn = document.getElementById("mockExamBtn");

    if (currentProfile.is_pro) {

        // --------------------------
        // PRO USER
        // --------------------------

        if (statusBox) {
            statusBox.innerHTML = `
                <span class="pill pill-pro">
                    🟢 PRO MEMBER
                </span>
            `;
        }

        // Unlock UI
        unlockButton(practiceBtn, "🎯 Practice Mode (Quick Drills)");
        unlockButton(mockBtn, "🏆 Full Mock Exam (170 Items)");

        // Redirect to actual pages
        if (practiceBtn) {
            practiceBtn.href = "practice.html";
        }

        if (mockBtn) {
            mockBtn.href = "mock_exam.html";
        }

    } else {

        // --------------------------
        // FREE USER
        // --------------------------

        if (statusBox) {
            statusBox.innerHTML = `
                <span class="pill pill-free">
                    🔓 FREE PLAN
                </span>
            `;
        }

        // Lock UI
        lockButton(practiceBtn, "🎯 Practice Mode (Quick Drills)");
        lockButton(mockBtn, "🏆 Full Mock Exam (170 Items)");

        // Redirect to Upgrade Page
        if (practiceBtn) {
            practiceBtn.href = "license.html";
        }

        if (mockBtn) {
            mockBtn.href = "license.html";
        }

    }
}

// ==========================================
// BUTTON HELPERS
// ==========================================

function lockButton(button, text) {
    if (!button) return;

    const subject = button.querySelector(".subject-name");
    if (!subject) return;

    subject.innerHTML = `
        ${text}
        <span class="badge-locked">
            🔒 LOCKED
        </span>
    `;
}

function unlockButton(button, text) {
    if (!button) return;

    const subject = button.querySelector(".subject-name");
    if (!subject) return;

    subject.innerHTML = `
        ${text}
        <span style="
            margin-left:8px;
            font-size:.7rem;
            background:#10b98122;
            color:#86efac;
            padding:2px 8px;
            border-radius:30px;
        ">
            UNLOCKED
        </span>
    `;
}

// ==========================================
// AUTHORIZATION
// ==========================================

function isProUser() {
    return currentProfile && currentProfile.is_pro === true;
}

// ==========================================
// LOAD MEMBERSHIP FROM SUPABASE
// ==========================================

async function loadMembership() {

    try {
        const {
            data: { session }
        } = await supabaseClient.auth.getSession();

        if (!session) {
            window.currentProfile = {
                is_pro: false
            };
            console.log("📝 No session - set as FREE user");
            updateMembershipUI();
            return;
        }

        const { data, error } = await supabaseClient
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single();

        if (error || !data) {
            console.error("❌ Error loading profile:", error);
            window.currentProfile = {
                is_pro: false
            };
            updateMembershipUI();
            return;
        }

        window.currentProfile = data;
        console.log("✅ Profile loaded:", data);
        console.log("👤 User type:", data.is_pro ? "PRO" : "FREE");
        console.log("🆔 User ID:", data.id);

        updateMembershipUI();

    } catch (err) {
        console.error("❌ Load membership error:", err);
        window.currentProfile = {
            is_pro: false
        };
        updateMembershipUI();
    }

}

// ==========================================
// SESSION VALIDATION
// ==========================================

async function validateSession() {

    try {
        const {
            data: { session }
        } = await supabaseClient.auth.getSession();

        // Skip if no active session
        if (!session) {
            console.log("📝 No active session - validation skipped");
            return;
        }

        const { data, error } = await supabaseClient
            .from("profiles")
            .select("session_id, is_pro")
            .eq("id", session.user.id)
            .single();

        // Skip if error or no profile data
        if (error || !data) {
            console.error("❌ Error fetching profile for validation:", error);
            return;
        }

        // 🔓 FREE users - skip session validation
        if (!data.is_pro) {
            console.log("🆓 Free user - session validation skipped");
            return;
        }

        // 🟢 PRO users - validate session
        const localSession = localStorage.getItem("session_id");

        // Skip if no local session (maybe first login)
        if (!localSession) {
            console.log("⚠️ No local session found for PRO user");
            return;
        }

        // Check if session matches
        if (data.session_id !== localSession) {

            // Prevent multiple alerts and logout attempts
            if (isLoggingOut) return;

            isLoggingOut = true;

            console.warn("🔒 Session mismatch - possible multiple device login");
            console.warn("Database session_id:", data.session_id);
            console.warn("Local session_id:", localSession);

            alert(
                "⚠️ Your account was signed in on another device.\n\n" +
                "For your security, this session has been ended."
            );

            // Clear session and logout
            await supabaseClient.auth.signOut();
            localStorage.removeItem("session_id");
            
            // Redirect to login
            window.location.href = "login.html";

        } else {
            console.log("✅ Session validated successfully for PRO user");
            
            // Reset logout flag if session is valid
            isLoggingOut = false;
        }

    } catch (err) {
        console.error("❌ Session validation error:", err);
    }

}

// ==========================================
// LOGOUT FUNCTION
// ==========================================

async function logoutUser() {
    try {
        console.log("🔓 Logging out user...");
        
        const { data: { session } } = await supabaseClient.auth.getSession();
        
        if (session) {
            // I-clear ang session_id sa database
            const { error } = await supabaseClient
                .from("profiles")
                .update({ session_id: null })
                .eq("id", session.user.id);
            
            if (error) {
                console.error("❌ Error clearing session_id:", error);
            } else {
                console.log("✅ Session_id cleared from database");
            }
        }
        
        // Mag-sign out
        await supabaseClient.auth.signOut();
        
        // I-clear ang local storage
        localStorage.removeItem("session_id");
        
        // I-clear ang global state
        window.currentProfile = null;
        if (sessionValidationTimer) {
            clearInterval(sessionValidationTimer);
            sessionValidationTimer = null;
        }
        isLoggingOut = false;
        
        console.log("✅ User logged out successfully");
        
        // Mag-redirect sa index (homepage)
        window.location.href = "index.html";
        
    } catch (error) {
        console.error("❌ Logout error:", error);
        alert("An error occurred during logout. Please try again.");
    }
}

// ==========================================
// LOGIN FUNCTION WITH SESSION CREATION
// ==========================================

async function loginUser(email, password) {
    try {
        console.log("🔐 Logging in user...");
        
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });
        
        if (error) {
            console.error("❌ Login error:", error);
            alert("Invalid email or password. Please try again.");
            return;
        }
        
        if (data.session) {
            // Gumawa ng unique session ID
            const sessionId = crypto.randomUUID();
            console.log("🆕 New session ID generated:", sessionId);
            
            // I-save sa database
            const { error: updateError } = await supabaseClient
                .from("profiles")
                .update({ session_id: sessionId })
                .eq("id", data.session.user.id);
            
            if (updateError) {
                console.error("❌ Error saving session_id:", updateError);
            } else {
                console.log("✅ Session_id saved to database");
            }
            
            // I-save sa localStorage
            localStorage.setItem("session_id", sessionId);
            console.log("✅ Session_id saved to localStorage");
        }
        
        // I-load ang membership data
        await loadMembership();
        
        console.log("✅ User logged in successfully");
        
        // Mag-redirect sa index (homepage)
        window.location.href = "index.html";
        
    } catch (error) {
        console.error("❌ Login error:", error);
        alert("An error occurred during login. Please try again.");
    }
}

// ==========================================
// REGISTER FUNCTION WITH SESSION CREATION
// ==========================================

async function registerUser(email, password, fullName) {
    try {
        console.log("📝 Registering new user...");
        
        // Mag-register ng bagong user
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: fullName
                }
            }
        });
        
        if (error) {
            console.error("❌ Registration error:", error);
            alert(error.message);
            return;
        }
        
        if (data.user) {
            // Gumawa ng unique session ID
            const sessionId = crypto.randomUUID();
            console.log("🆕 New session ID generated:", sessionId);
            
            // I-save ang session_id sa profile
            const { error: updateError } = await supabaseClient
                .from("profiles")
                .update({ 
                    session_id: sessionId,
                    is_pro: false,
                    full_name: fullName
                })
                .eq("id", data.user.id);
            
            if (updateError) {
                console.error("❌ Error saving session_id:", updateError);
            } else {
                console.log("✅ Session_id saved to database");
            }
            
            // I-save sa localStorage
            localStorage.setItem("session_id", sessionId);
            console.log("✅ Session_id saved to localStorage");
        }
        
        console.log("✅ User registered successfully");
        
        // Mag-redirect sa index (homepage)
        window.location.href = "index.html";
        
    } catch (error) {
        console.error("❌ Registration error:", error);
        alert("An error occurred during registration. Please try again.");
    }
}

// ==========================================
// UPGRADE TO PRO FUNCTION
// ==========================================

async function upgradeToPro(paymentMethod = "stripe") {
    try {
        console.log("💳 Upgrading to PRO...");
        
        const { data: { session } } = await supabaseClient.auth.getSession();
        
        if (!session) {
            alert("Please login first to upgrade to PRO.");
            window.location.href = "login.html";
            return;
        }
        
        // Dito ilalagay ang payment processing
        // Halimbawa: Stripe, PayPal, etc.
        
        // Simulate payment processing
        console.log("💳 Processing payment via", paymentMethod);
        
        // Pagkatapos ng successful payment:
        // For LIFETIME PRO, set pro_expiry to NULL
        const { error } = await supabaseClient
            .from("profiles")
            .update({ 
                is_pro: true,
                pro_expiry: null  // NULL means lifetime
            })
            .eq("id", session.user.id);
        
        if (error) {
            console.error("❌ Error upgrading to PRO:", error);
            alert("Failed to upgrade to PRO. Please try again.");
            return;
        }
        
        console.log("✅ User upgraded to PRO successfully (Lifetime)");
        
        // I-reload ang membership
        await loadMembership();
        
        alert("🎉 Welcome to PRO Lifetime! Your account has been upgraded successfully.");
        
    } catch (error) {
        console.error("❌ Upgrade error:", error);
        alert("An error occurred during upgrade. Please try again.");
    }
}

// ==========================================
// CHECK PRO EXPIRY FUNCTION
// ==========================================

async function checkProExpiry() {
    try {
        if (!currentProfile || !currentProfile.is_pro) {
            console.log("📝 Not a PRO user - expiry check skipped");
            return;
        }
        
        // Skip expiry check for lifetime PRO (no expiry date)
        if (!currentProfile.pro_expiry) {
            console.log("👑 Lifetime PRO - expiry check skipped");
            return;
        }
        
        const expiryDate = new Date(currentProfile.pro_expiry);
        const now = new Date();
        
        console.log("📅 PRO expiry date:", expiryDate);
        console.log("📅 Current date:", now);
        
        // Check if expired
        if (now > expiryDate) {
            console.warn("⏰ PRO membership expired!");
            
            // Expired na ang PRO - downgrade to FREE
            const { data: { session } } = await supabaseClient.auth.getSession();
            
            if (session) {
                const { error } = await supabaseClient
                    .from("profiles")
                    .update({ 
                        is_pro: false,
                        pro_expiry: null
                    })
                    .eq("id", session.user.id);
                
                if (error) {
                    console.error("❌ Error downgrading user:", error);
                    return;
                }
                
                console.log("🔄 User downgraded to FREE due to expiry");
                
                // I-reload ang membership
                await loadMembership();
                
                alert("Your PRO membership has expired. Please renew to continue using PRO features.");
            }
        } else {
            // Calculate days remaining
            const daysRemaining = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
            console.log(`✅ PRO membership valid - ${daysRemaining} days remaining`);
            
            // Notify user if expiry is near (7 days or less)
            if (daysRemaining <= 7) {
                console.warn("⚠️ PRO membership expiring soon!");
                // Optional: Show a notification or banner
                // displayExpiryWarning(daysRemaining);
            }
        }
        
    } catch (error) {
        console.error("❌ Error checking PRO expiry:", error);
    }
}

// ==========================================
// GET PRO STATUS FUNCTION (UPDATED FOR LIFETIME)
// ==========================================

function getProStatus() {
    if (!currentProfile) {
        return {
            isPro: false,
            status: "Not logged in",
            daysRemaining: 0,
            isLifetime: false
        };
    }
    
    const isPro = currentProfile.is_pro === true;
    
    // Check if lifetime PRO (walang pro_expiry o pro_expiry ay null)
    const isLifetime = isPro && (!currentProfile.pro_expiry || currentProfile.pro_expiry === null);
    
    let status = "Free";
    let daysRemaining = 0;
    
    if (isPro) {
        if (isLifetime) {
            status = "Lifetime";
            daysRemaining = -1; // -1 means lifetime
        } else if (currentProfile.pro_expiry) {
            const expiryDate = new Date(currentProfile.pro_expiry);
            const now = new Date();
            daysRemaining = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
            
            if (daysRemaining <= 0) {
                status = "Expired";
                daysRemaining = 0;
            } else if (daysRemaining <= 7) {
                status = "Expiring Soon";
            } else {
                status = "Active";
            }
        } else {
            status = "Lifetime";
            daysRemaining = -1;
        }
    }
    
    return {
        isPro: isPro,
        status: status,
        daysRemaining: daysRemaining,
        expiryDate: currentProfile.pro_expiry,
        isLifetime: isLifetime
    };
}

// ==========================================
// GET SESSION INFORMATION
// ==========================================

function getSessionInfo() {
    const sessionId = localStorage.getItem("session_id");
    return {
        hasLocalSession: !!sessionId,
        sessionId: sessionId,
        isPro: currentProfile?.is_pro || false,
        userId: currentProfile?.id || null,
        userEmail: currentProfile?.email || null
    };
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {

    console.log("🚀 Initializing membership system...");

    // Load membership first
    await loadMembership();

    // Validate immediately
    await validateSession();

    // Check PRO expiry
    await checkProExpiry();

    // Prevent duplicate timers
    if (sessionValidationTimer) {
        clearInterval(sessionValidationTimer);
    }

    sessionValidationTimer = setInterval(validateSession, 30000);

    // Also check expiry every hour
    setInterval(checkProExpiry, 3600000); // 1 hour

    console.log("✅ Membership system initialized");

});

// ==========================================
// CLEANUP ON PAGE UNLOAD
// ==========================================

window.addEventListener("beforeunload", function() {
    // Clear the interval when leaving the page
    if (sessionValidationTimer) {
        clearInterval(sessionValidationTimer);
        sessionValidationTimer = null;
    }
    
    // Reset logout flag
    isLoggingOut = false;
});

// ==========================================
// EXPORT FUNCTIONS FOR GLOBAL USE
// ==========================================

// Make functions available globally
window.logoutUser = logoutUser;
window.loginUser = loginUser;
window.registerUser = registerUser;
window.upgradeToPro = upgradeToPro;
window.checkProExpiry = checkProExpiry;
window.getProStatus = getProStatus;
window.getSessionInfo = getSessionInfo;
window.isProUser = isProUser;
window.loadMembership = loadMembership;
window.validateSession = validateSession;