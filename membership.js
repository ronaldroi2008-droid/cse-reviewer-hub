
/* CSE Reviewer Hub - Free Guest Access
   No Supabase, Login, Register, or Membership
*/

console.log("Guest membership system loaded");

// Guest profile for compatibility with existing pages
window.currentProfile = {
  id: "guest",
  full_name: "Guest",
  email: null,
  is_pro: true,
  pro_expiry: null
};

// Unlock reviewer buttons
function unlockButton(button, text) {
  if (!button) return;

  const subject = button.querySelector(".subject-name");

  if (subject) {
    subject.textContent = text;
  }

  button.classList.remove("locked", "disabled");
  button.removeAttribute("disabled");
  button.removeAttribute("aria-disabled");

  button.style.pointerEvents = "auto";
  button.style.opacity = "1";
}

// Update guest interface
function updateMembershipUI() {
  const statusBox = document.getElementById("licenseStatusBox");
  const practiceBtn = document.getElementById("practiceModeBtn");
  const mockBtn = document.getElementById("mockExamBtn");

  if (statusBox) {
    statusBox.textContent = "FREE ACCESS";
  }

  unlockButton(practiceBtn, "🎯 Practice Mode (Quick Drills)");
  unlockButton(mockBtn, "🏆 Full Mock Exam (170 Items)");

  if (practiceBtn) {
    practiceBtn.href = "practice.html";
  }

  if (mockBtn) {
    mockBtn.href = "mock_exam.html";
  }

  // Hide account-related controls
  [
    "authLinks",
    "logoutContainer",
    "upgradeBanner"
  ].forEach(function(id) {
    const element = document.getElementById(id);
    if (element) element.style.display = "none";
  });
}

// Compatibility with old PRO checks
function isProUser() {
  return true;
}

async function loadMembership() {
  updateMembershipUI();
  return window.currentProfile;
}

async function validateSession() {
  return true;
}

async function checkProExpiry() {
  return;
}

function getProStatus() {
  return {
    isPro: true,
    status: "Free Access",
    daysRemaining: -1,
    isLifetime: true
  };
}

function getSessionInfo() {
  return {
    hasLocalSession: true,
    sessionId: "guest",
    isPro: true,
    userId: "guest",
    userEmail: null
  };
}

// Old account functions are disabled
async function logoutUser() {
  window.location.href = "index.html";
}

async function loginUser() {
  console.warn("Login is disabled.");
}

async function registerUser() {
  console.warn("Registration is disabled.");
}

async function upgradeToPro() {
  console.warn("All reviewer features are free.");
}

// Export functions globally
window.updateMembershipUI = updateMembershipUI;
window.unlockButton = unlockButton;
window.isProUser = isProUser;
window.loadMembership = loadMembership;
window.validateSession = validateSession;
window.checkProExpiry = checkProExpiry;
window.getProStatus = getProStatus;
window.getSessionInfo = getSessionInfo;
window.logoutUser = logoutUser;
window.loginUser = loginUser;
window.registerUser = registerUser;
window.upgradeToPro = upgradeToPro;

// Initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadMembership);
} else {
  loadMembership();
}
