console.log("membership.js loaded");
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

// ==========================================

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

    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    if (!session) {

        window.currentProfile = {
            is_pro: false
        };

        return;

    }

    const { data, error } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

    if (error || !data) {

        console.error(error);

        window.currentProfile = {
            is_pro: false
        };

        return;

    }

    window.currentProfile = data;

    updateMembershipUI();

}

document.addEventListener("DOMContentLoaded", async () => {

    await loadMembership();

});