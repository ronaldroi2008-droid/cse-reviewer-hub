<!-- plan.js -->
<script>
(function () {
  const PLAN_KEY = "CSE_USER_PLAN";

  function getPlan() {
    try {
      const val = localStorage.getItem(PLAN_KEY);
      return val === "pro" ? "pro" : "free";
    } catch (e) {
      console.warn("Unable to read plan from localStorage", e);
      return "free";
    }
  }

  function setPlan(plan) {
    const normalized = plan === "pro" ? "pro" : "free";
    try {
      localStorage.setItem(PLAN_KEY, normalized);
    } catch (e) {
      console.warn("Unable to save plan to localStorage", e);
    }
  }

  window.CSE_PLAN = {
    get: getPlan,
    set: setPlan,
    isPro: function () {
      return getPlan() === "pro";
    }
  };
})();
</script>
