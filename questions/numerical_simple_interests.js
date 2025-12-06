// questions/numerical_simple_interest.js
// ==========================================
// NUMERICAL – SIMPLE INTEREST (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// Formula: I = Prt, A = P + I
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["simple_interest"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Direct Formula I=Prt, Definitions)
  // ==========================================
  beginner: [
    {
      question: "What is the formula for Simple Interest?",
      options: ["I = P + r + t", "I = P × r × t", "I = P / (r × t)", "I = (P × r) / t"],
      answer: "I = P × r × t",
      explanation: "STEP 1: The standard formula for simple interest is Interest = Principal × Rate × Time."
    },
    {
      question: "In the formula I = Prt, what does 'P' stand for?",
      options: ["Percentage", "Principal", "Payment", "Period"],
      answer: "Principal",
      explanation: "STEP 1: 'P' stands for Principal, which is the original amount of money invested or borrowed."
    },
    {
      question: "In the formula I = Prt, what unit must 't' (time) usually be in?",
      options: ["Days", "Months", "Years", "Weeks"],
      answer: "Years",
      explanation: "STEP 1: In the standard simple interest formula, time (t) is expressed in years."
    },
    {
      question: "Calculate the interest: P = 100, r = 5%, t = 1 year.",
      options: ["5", "50", "105", "500"],
      answer: "5",
      explanation: "STEP 1: I = Prt\nSTEP 2: I = 100 × 0.05 × 1\nSTEP 3: I = 5"
    },
    {
      question: "Calculate the interest: P = 500, r = 10%, t = 1 year.",
      options: ["5", "50", "500", "550"],
      answer: "50",
      explanation: "STEP 1: I = Prt\nSTEP 2: I = 500 × 0.10 × 1\nSTEP 3: I = 50"
    },
    {
      question: "Calculate the interest: P = 200, r = 2%, t = 2 years.",
      options: ["4", "8", "40", "80"],
      answer: "8",
      explanation: "STEP 1: I = Prt\nSTEP 2: I = 200 × 0.02 × 2\nSTEP 3: I = 8"
    },
    {
      question: "Calculate the interest: P = 1000, r = 3%, t = 1 year.",
      options: ["3", "30", "300", "330"],
      answer: "30",
      explanation: "STEP 1: I = 1000 × 0.03 × 1 = 30."
    },
    {
      question: "Find the interest if P = 50, r = 10%, t = 2 years.",
      options: ["5", "10", "15", "20"],
      answer: "10",
      explanation: "STEP 1: I = 50 × 0.10 × 2 = 10."
    },
    {
      question: "What is 10% of 200 (Interest for 1 year)?",
      options: ["10", "20", "30", "40"],
      answer: "20",
      explanation: "STEP 1: 200 × 0.10 = 20."
    },
    {
      question: "If the principal is 300 and the interest is 30, what is the total amount?",
      options: ["270", "300", "330", "360"],
      answer: "330",
      explanation: "STEP 1: Amount = Principal + Interest\nSTEP 2: A = 300 + 30 = 330."
    },
    {
      question: "Calculate the interest: P = 400, r = 5%, t = 1 year.",
      options: ["20", "25", "40", "45"],
      answer: "20",
      explanation: "STEP 1: I = 400 × 0.05 × 1 = 20."
    },
    {
      question: "Calculate the interest: P = 600, r = 1%, t = 5 years.",
      options: ["6", "12", "30", "60"],
      answer: "30",
      explanation: "STEP 1: I = 600 × 0.01 × 5 = 30."
    },
    {
      question: "Convert 5% to decimal form.",
      options: ["0.5", "0.05", "5.0", "0.005"],
      answer: "0.05",
      explanation: "STEP 1: Divide percentage by 100. 5 ÷ 100 = 0.05."
    },
    {
      question: "Convert 12% to decimal form.",
      options: ["0.12", "1.2", "0.012", "12.0"],
      answer: "0.12",
      explanation: "STEP 1: 12 ÷ 100 = 0.12."
    },
    {
      question: "Convert 2.5% to decimal form.",
      options: ["0.25", "2.5", "0.025", "0.0025"],
      answer: "0.025",
      explanation: "STEP 1: 2.5 ÷ 100 = 0.025."
    },
    {
      question: "Calculate the interest: P = 1000, r = 0.05, t = 2 years.",
      options: ["10", "50", "100", "200"],
      answer: "100",
      explanation: "STEP 1: I = 1000 × 0.05 × 2 = 100."
    },
    {
      question: "Calculate the interest: P = 2000, r = 4%, t = 1 year.",
      options: ["40", "60", "80", "100"],
      answer: "80",
      explanation: "STEP 1: I = 2000 × 0.04 × 1 = 80."
    },
    {
      question: "Calculate the interest: P = 500, r = 20%, t = 1 year.",
      options: ["50", "100", "150", "200"],
      answer: "100",
      explanation: "STEP 1: I = 500 × 0.20 × 1 = 100."
    },
    {
      question: "If you borrow 100 and pay back 110, what is the interest?",
      options: ["5", "10", "15", "100"],
      answer: "10",
      explanation: "STEP 1: Interest = Repayment − Principal.\nSTEP 2: 110 − 100 = 10."
    },
    {
      question: "Find the simple interest on 1500 at 2% for 1 year.",
      options: ["15", "30", "45", "60"],
      answer: "30",
      explanation: "STEP 1: I = 1500 × 0.02 × 1 = 30."
    },
    {
      question: "Find the interest: P = 300, r = 3%, t = 3 years.",
      options: ["9", "18", "27", "30"],
      answer: "27",
      explanation: "STEP 1: I = 300 × 0.03 × 3 = 27."
    },
    {
      question: "If P = 1000 and r = 50% for 1 year, what is the interest?",
      options: ["100", "250", "500", "1000"],
      answer: "500",
      explanation: "STEP 1: I = 1000 × 0.50 × 1 = 500."
    },
    {
      question: "What refers to the percentage of the principal charged by the lender?",
      options: ["Time", "Interest", "Rate", "Amount"],
      answer: "Rate",
      explanation: "STEP 1: Rate is the percentage charged on the principal."
    },
    {
      question: "If P = 250, r = 4%, t = 1 year, what is the interest?",
      options: ["10", "20", "25", "40"],
      answer: "10",
      explanation: "STEP 1: I = 250 × 0.04 × 1 = 10."
    },
    {
      question: "If P = 100, r = 10%, t = 3 years, what is the interest?",
      options: ["10", "20", "30", "40"],
      answer: "30",
      explanation: "STEP 1: I = 100 × 0.10 × 3 = 30."
    },
    {
      question: "Which formula is used to find the time in simple interest?",
      options: ["t = I / (P × r)", "t = P × I × r", "t = P / I", "t = I × P × r"],
      answer: "t = I / (P × r)",
      explanation: "STEP 1: Derive from I = Prt by dividing both sides by Pr."
    },
    {
      question: "Which formula is used to find the principal in simple interest?",
      options: ["P = I / (r × t)", "P = I × r × t", "P = r / (I × t)", "P = I + r + t"],
      answer: "P = I / (r × t)",
      explanation: "STEP 1: Derive from I = Prt by dividing both sides by rt."
    },
    {
      question: "If P = 800, r = 5%, t = 1 year, what is the interest?",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "STEP 1: I = 800 × 0.05 × 1 = 40."
    },
    {
      question: "Find the interest: P = 200, r = 6%, t = 2 years.",
      options: ["12", "18", "24", "30"],
      answer: "24",
      explanation: "STEP 1: I = 200 × 0.06 × 2 = 24."
    },
    {
      question: "Find the interest: P = 1200, r = 10%, t = 1 year.",
      options: ["12", "100", "120", "1200"],
      answer: "120",
      explanation: "STEP 1: I = 1200 × 0.10 × 1 = 120."
    },
    {
      question: "Find the interest: P = 50, r = 2%, t = 10 years.",
      options: ["1", "5", "10", "20"],
      answer: "10",
      explanation: "STEP 1: I = 50 × 0.02 × 10 = 10."
    },
    {
      question: "Simple interest is calculated on the:",
      options: ["Principal only", "Principal + Previous Interest", "Amount", "Rate"],
      answer: "Principal only",
      explanation: "STEP 1: Simple interest is calculated only on the original principal, unlike compound interest."
    },
    {
      question: "Find the interest: P = 3000, r = 1%, t = 1 year.",
      options: ["3", "30", "300", "3000"],
      answer: "30",
      explanation: "STEP 1: I = 3000 × 0.01 × 1 = 30."
    },
    {
      question: "Find the interest: P = 400, r = 25%, t = 1 year.",
      options: ["25", "50", "75", "100"],
      answer: "100",
      explanation: "STEP 1: I = 400 × 0.25 × 1 = 100."
    },
    {
      question: "Find the interest: P = 5000, r = 2%, t = 2 years.",
      options: ["100", "200", "300", "400"],
      answer: "200",
      explanation: "STEP 1: I = 5000 × 0.02 × 2 = 200."
    },
    {
      question: "Calculate the interest on 600 at 5% for 2 years.",
      options: ["30", "60", "90", "120"],
      answer: "60",
      explanation: "STEP 1: I = 600 × 0.05 × 2 = 60."
    },
    {
      question: "Find the interest: P = 700, r = 10%, t = 3 years.",
      options: ["70", "140", "210", "280"],
      answer: "210",
      explanation: "STEP 1: I = 700 × 0.10 × 3 = 210."
    },
    {
      question: "Find the interest: P = 900, r = 1%, t = 1 year.",
      options: ["9", "90", "900", "0.9"],
      answer: "9",
      explanation: "STEP 1: I = 900 × 0.01 × 1 = 9."
    },
    {
      question: "Find the interest: P = 10, r = 5%, t = 2 years.",
      options: ["0.1", "0.5", "1", "2"],
      answer: "1",
      explanation: "STEP 1: I = 10 × 0.05 × 2 = 1."
    },
    {
      question: "Find the interest: P = 200, r = 50%, t = 2 years.",
      options: ["100", "150", "200", "250"],
      answer: "200",
      explanation: "STEP 1: I = 200 × 0.50 × 2 = 200."
    },
    {
      question: "Find the interest: P = 100, r = 1%, t = 100 years.",
      options: ["1", "10", "100", "1000"],
      answer: "100",
      explanation: "STEP 1: I = 100 × 0.01 × 100 = 100."
    },
    {
      question: "Calculate the interest: P = 150, r = 10%, t = 1 year.",
      options: ["10", "15", "20", "25"],
      answer: "15",
      explanation: "STEP 1: I = 150 × 0.10 × 1 = 15."
    },
    {
      question: "Calculate the interest: P = 1000, r = 7%, t = 1 year.",
      options: ["7", "70", "700", "7000"],
      answer: "70",
      explanation: "STEP 1: I = 1000 × 0.07 × 1 = 70."
    },
    {
      question: "Find the interest: P = 500, r = 3%, t = 1 year.",
      options: ["15", "30", "45", "60"],
      answer: "15",
      explanation: "STEP 1: I = 500 × 0.03 × 1 = 15."
    },
    {
      question: "Find the interest: P = 800, r = 2%, t = 1 year.",
      options: ["8", "16", "24", "32"],
      answer: "16",
      explanation: "STEP 1: I = 800 × 0.02 × 1 = 16."
    },
    {
      question: "Find the interest: P = 1000, r = 10%, t = 5 years.",
      options: ["100", "200", "500", "1000"],
      answer: "500",
      explanation: "STEP 1: I = 1000 × 0.10 × 5 = 500."
    },
    {
      question: "Find the interest: P = 2000, r = 1%, t = 3 years.",
      options: ["20", "40", "60", "80"],
      answer: "60",
      explanation: "STEP 1: I = 2000 × 0.01 × 3 = 60."
    },
    {
      question: "Find the interest: P = 100, r = 100%, t = 1 year.",
      options: ["1", "10", "100", "200"],
      answer: "100",
      explanation: "STEP 1: I = 100 × 1.00 × 1 = 100."
    },
    {
      question: "Which produces more interest: 100 at 5% for 2 years OR 100 at 2% for 5 years?",
      options: ["First option", "Second option", "They are equal", "Cannot be determined"],
      answer: "They are equal",
      explanation: "STEP 1: Option 1: 100 × 0.05 × 2 = 10.\nSTEP 2: Option 2: 100 × 0.02 × 5 = 10.\nSTEP 3: They are equal."
    },
    {
      question: "Calculate the interest: P = 50, r = 4%, t = 2 years.",
      options: ["2", "4", "6", "8"],
      answer: "4",
      explanation: "STEP 1: I = 50 × 0.04 × 2 = 4."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Time Conversions, Solving for P, R, T)
  // ==========================================
  intermediate: [
    {
      question: "Find the interest: P = 1000, r = 6%, t = 6 months.",
      options: ["30", "60", "300", "600"],
      answer: "30",
      explanation: "STEP 1: Convert months to years: 6 months = 6/12 = 0.5 year.\nSTEP 2: I = 1000 × 0.06 × 0.5 = 30."
    },
    {
      question: "If I = 50, r = 5%, t = 1 year, find the principal P.",
      options: ["500", "1000", "1500", "2000"],
      answer: "1000",
      explanation: "STEP 1: P = I / (rt).\nSTEP 2: P = 50 / (0.05 × 1).\nSTEP 3: P = 50 / 0.05 = 1000."
    },
    {
      question: "If I = 20, P = 200, t = 1 year, find the rate r.",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: r = I / (Pt).\nSTEP 2: r = 20 / (200 × 1) = 0.10.\nSTEP 3: 0.10 = 10%."
    },
    {
      question: "If I = 40, P = 400, r = 5%, find the time t (in years).",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "STEP 1: t = I / (Pr).\nSTEP 2: t = 40 / (400 × 0.05).\nSTEP 3: t = 40 / 20 = 2 years."
    },
    {
      question: "Calculate the interest: P = 2000, r = 3%, t = 18 months.",
      options: ["60", "90", "120", "150"],
      answer: "90",
      explanation: "STEP 1: t = 18/12 = 1.5 years.\nSTEP 2: I = 2000 × 0.03 × 1.5 = 90."
    },
    {
      question: "How many months are in 0.25 years?",
      options: ["2", "3", "4", "6"],
      answer: "3",
      explanation: "STEP 1: 0.25 × 12 months = 3 months."
    },
    {
      question: "Find the maturity value (amount) if P = 500 and I = 50.",
      options: ["450", "500", "550", "600"],
      answer: "550",
      explanation: "STEP 1: A = P + I = 500 + 50 = 550."
    },
    {
      question: "Find the amount A if P = 1000, r = 5%, t = 2 years.",
      options: ["1050", "1100", "1150", "1200"],
      answer: "1100",
      explanation: "STEP 1: I = 1000 × 0.05 × 2 = 100.\nSTEP 2: A = 1000 + 100 = 1100."
    },
    {
      question: "If I = 300, r = 10%, t = 3 years, find the principal P.",
      options: ["500", "1000", "1500", "3000"],
      answer: "1000",
      explanation: "STEP 1: P = 300 / (0.10 × 3) = 300 / 0.30 = 1000."
    },
    {
      question: "Calculate the interest: P = 800, r = 4.5%, t = 1 year.",
      options: ["32", "34", "36", "38"],
      answer: "36",
      explanation: "STEP 1: I = 800 × 0.045 = 36."
    },
    {
      question: "If P = 100, A = 120, t = 1 year, what is the rate r?",
      options: ["10%", "20%", "15%", "25%"],
      answer: "20%",
      explanation: "STEP 1: I = A − P = 20.\nSTEP 2: r = 20 / (100 × 1) = 0.20 = 20%."
    },
    {
      question: "How long will it take for 500 to earn 50 interest at 2% rate?",
      options: ["2 years", "4 years", "5 years", "10 years"],
      answer: "5 years",
      explanation: "STEP 1: t = I / (Pr) = 50 / (500 × 0.02) = 50 / 10 = 5 years."
    },
    {
      question: "Find the interest: P = 1200, r = 5%, t = 3 months.",
      options: ["15", "30", "60", "120"],
      answer: "15",
      explanation: "STEP 1: t = 3/12 = 0.25 year.\nSTEP 2: I = 1200 × 0.05 × 0.25 = 15."
    },
    {
      question: "Find the principal if the interest is 240, the rate is 6%, and the time is 2 years.",
      options: ["1000", "2000", "3000", "4000"],
      answer: "2000",
      explanation: "STEP 1: P = 240 / (0.06 × 2) = 240 / 0.12 = 2000."
    },
    {
      question: "Calculate the interest: P = 5000, r = 8%, t = 0.5 year.",
      options: ["100", "200", "300", "400"],
      answer: "200",
      explanation: "STEP 1: I = 5000 × 0.08 × 0.5 = 200."
    },
    {
      question: "What is 1.5 years in months?",
      options: ["12", "15", "18", "24"],
      answer: "18",
      explanation: "STEP 1: 1.5 × 12 = 18 months."
    },
    {
      question: "If P = 2000 and A = 2200 after 1 year, what is the rate?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: I = 2200 − 2000 = 200.\nSTEP 2: r = 200 / (2000 × 1) = 0.10 = 10%."
    },
    {
      question: "Find the interest: P = 360, r = 5%, t = 4 months.",
      options: ["4", "5", "6", "12"],
      answer: "6",
      explanation: "STEP 1: t = 4/12 = 1/3 year.\nSTEP 2: I = 360 × 0.05 × (1/3) = 6."
    },
    {
      question: "If P = 1500, r = 4%, t = 2.5 years, find the interest.",
      options: ["100", "125", "150", "175"],
      answer: "150",
      explanation: "STEP 1: I = 1500 × 0.04 × 2.5 = 150."
    },
    {
      question: "Find the rate if I = 75, P = 500, t = 3 years.",
      options: ["3%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: r = 75 / (500 × 3) = 75 / 1500 = 0.05 = 5%."
    },
    {
      question: "Find the time if I = 100, P = 1000, r = 5%.",
      options: ["1 year", "2 years", "3 years", "4 years"],
      answer: "2 years",
      explanation: "STEP 1: t = 100 / (1000 × 0.05) = 100 / 50 = 2 years."
    },
    {
      question: "A loan of 5000 earns 250 in 6 months. What is the annual rate?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: t = 0.5 year.\nSTEP 2: r = 250 / (5000 × 0.5) = 250 / 2500 = 0.10 = 10%."
    },
    {
      question: "If P = 600 and the amount A = 672 after 2 years, find the rate r.",
      options: ["4%", "5%", "6%", "7%"],
      answer: "6%",
      explanation: "STEP 1: I = 672 − 600 = 72.\nSTEP 2: r = 72 / (600 × 2) = 72 / 1200 = 0.06 = 6%."
    },
    {
      question: "Calculate the interest: P = 2500, r = 10%, t = 9 months.",
      options: ["150", "175", "187.5", "200"],
      answer: "187.5",
      explanation: "STEP 1: t = 9/12 = 0.75 year.\nSTEP 2: I = 2500 × 0.10 × 0.75 = 187.5."
    },
    {
      question: "Find the principal: I = 120, r = 4%, t = 3 years.",
      options: ["500", "800", "1000", "1200"],
      answer: "1000",
      explanation: "STEP 1: P = 120 / (0.04 × 3) = 120 / 0.12 = 1000."
    },
    {
      question: "If I = 15, r = 5%, t = 1 year, find the principal P.",
      options: ["150", "200", "300", "350"],
      answer: "300",
      explanation: "STEP 1: P = 15 / 0.05 = 300."
    },
    {
      question: "Find the amount A if P = 200, r = 7%, t = 5 years.",
      options: ["250", "260", "270", "280"],
      answer: "270",
      explanation: "STEP 1: I = 200 × 0.07 × 5 = 70.\nSTEP 2: A = 200 + 70 = 270."
    },
    {
      question: "What is 4 months in decimal years?",
      options: ["0.25", "0.33", "0.4", "0.5"],
      answer: "0.33",
      explanation: "STEP 1: 4/12 = 1/3 ≈ 0.33 year."
    },
    {
      question: "Find the time t if I = 36, P = 300, r = 4%.",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "STEP 1: t = 36 / (300 × 0.04) = 36 / 12 = 3 years."
    },
    {
      question: "Find the interest: P = 8000, r = 12.5%, t = 1 year.",
      options: ["800", "900", "1000", "1200"],
      answer: "1000",
      explanation: "STEP 1: 12.5% = 0.125.\nSTEP 2: I = 8000 × 0.125 = 1000."
    },
  {
  question: "If P = 1000 and r = 5%, how much is the interest per month (assuming simple interest)?",
  options: ["4.17", "5", "50", "41.67"],
  answer: "4.17",
  explanation: "STEP 1: Yearly interest = 1000 × 0.05 = 50.\nSTEP 2: Monthly interest = 50 ÷ 12 ≈ 4.17 (rounded to two decimal places)."
},

    {
      question: "Which investments give 120 interest: 1000 at 12% for 1 year OR 2000 at 6% for 1 year?",
      options: ["First investment only", "Second investment only", "Both investments", "Neither"],
      answer: "Both investments",
      explanation: "STEP 1: 1000 × 0.12 = 120.\nSTEP 2: 2000 × 0.06 = 120.\nSTEP 3: Both give 120 interest."
    },
    {
      question: "Find the principal if the amount is 1100 and the interest is 100.",
      options: ["900", "1000", "1200", "100"],
      answer: "1000",
      explanation: "STEP 1: P = A − I = 1100 − 100 = 1000."
    },
    {
      question: "Calculate the interest: P = 450, r = 2%, t = 2 years.",
      options: ["9", "18", "27", "36"],
      answer: "18",
      explanation: "STEP 1: I = 450 × 0.02 × 2 = 18."
    },
    {
      question: "Find the rate: I = 90, P = 600, t = 3 years.",
      options: ["3%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: r = 90 / (600 × 3) = 90 / 1800 = 0.05 = 5%."
    },
    {
      question: "Calculate the interest: P = 2400, r = 5%, t = 30 months.",
      options: ["200", "250", "300", "350"],
      answer: "300",
      explanation: "STEP 1: t = 30/12 = 2.5 years.\nSTEP 2: I = 2400 × 0.05 × 2.5 = 300."
    },
    {
      question: "If I = 1, P = 100, t = 1 year, find the rate r.",
      options: ["0.1%", "1%", "10%", "100%"],
      answer: "1%",
      explanation: "STEP 1: r = I / (Pt) = 1 / (100 × 1) = 0.01 = 1%."
    },
    {
      question: "Find the time t if I = 200, P = 2000, r = 5%.",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "STEP 1: t = 200 / (2000 × 0.05) = 200 / 100 = 2 years."
    },
    {
      question: "Find the amount: P = 5000, r = 6%, t = 3 years.",
      options: ["900", "5900", "6000", "6900"],
      answer: "5900",
      explanation: "STEP 1: I = 5000 × 0.06 × 3 = 900.\nSTEP 2: A = 5000 + 900 = 5900."
    },
    {
      question: "If I = 500, t = 2 years, r = 10%, find the principal P.",
      options: ["2000", "2500", "3000", "3500"],
      answer: "2500",
      explanation: "STEP 1: P = 500 / (2 × 0.10) = 500 / 0.20 = 2500."
    },
    {
      question: "Calculate the interest (approximate): P = 3300, r = 3.3%, t = 1 year.",
      options: ["100", "108.9", "110", "120"],
      answer: "108.9",
      explanation: "STEP 1: I = 3300 × 0.033 = 108.9."
    },
    {
      question: "Find the rate: P = 100, I = 10, t = 0.5 year (6 months).",
      options: ["10%", "20%", "5%", "15%"],
      answer: "20%",
      explanation: "STEP 1: r = 10 / (100 × 0.5) = 10 / 50 = 0.20 = 20%."
    },
    {
      question: "If P = 1250, r = 8%, t = 1.5 years, find the interest.",
      options: ["100", "125", "150", "175"],
      answer: "150",
      explanation: "STEP 1: I = 1250 × 0.08 × 1.5 = 150."
    },
    {
      question: "Find the principal: I = 2, r = 1%, t = 2 years.",
      options: ["50", "100", "150", "200"],
      answer: "100",
      explanation: "STEP 1: P = 2 / (0.01 × 2) = 2 / 0.02 = 100."
    },
    {
      question: "What is the simple interest on 5000 at 8% for 3 years?",
      options: ["400", "800", "1200", "1600"],
      answer: "1200",
      explanation: "STEP 1: I = 5000 × 0.08 × 3 = 1200."
    },
    {
      question: "Calculate the interest: P = 640, r = 2.5%, t = 2 years.",
      options: ["16", "32", "48", "64"],
      answer: "32",
      explanation: "STEP 1: I = 640 × 0.025 × 2 = 32."
    },
    {
      question: "Find the amount: P = 800, r = 5%, t = 2.5 years.",
      options: ["100", "850", "900", "950"],
      answer: "900",
      explanation: "STEP 1: I = 800 × 0.05 × 2.5 = 100.\nSTEP 2: A = 800 + 100 = 900."
    },
    {
      question: "If r = 10% and t = 5 years, what fraction of P is the interest?",
      options: ["1/5", "1/2", "1/10", "1/4"],
      answer: "1/2",
      explanation: "STEP 1: I = P × 0.10 × 5 = 0.50P.\nSTEP 2: 0.50 is 1/2 of P."
    },
    {
      question: "Find the interest: P = 10000, r = 7.5%, t = 1 year.",
      options: ["75", "750", "7500", "7.5"],
      answer: "750",
      explanation: "STEP 1: I = 10000 × 0.075 = 750."
    },
    {
      question: "If P = 500 and Amount = 600 after 4 years, find the rate r.",
      options: ["3%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: I = 600 − 500 = 100.\nSTEP 2: r = 100 / (500 × 4) = 100 / 2000 = 0.05 = 5%."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Exact/Ordinary Interest, Days, Algebra)
  // ==========================================
  advanced: [
    {
      question: "What is 'Ordinary Interest' based on in terms of days per year?",
      options: ["360 days", "365 days", "366 days", "300 days"],
      answer: "360 days",
      explanation: "STEP 1: Ordinary interest uses the banker’s rule of 360 days per year."
    },
    {
      question: "What is 'Exact Interest' based on in terms of days per year?",
      options: ["360 days", "365 days", "30 days/month", "12 months"],
      answer: "365 days",
      explanation: "STEP 1: Exact interest uses 365 days per year (or 366 in leap years)."
    },
    {
      question: "Find the ordinary interest for P = 1000, r = 10%, t = 72 days.",
      options: ["20", "25", "50", "72"],
      answer: "20",
      explanation: "STEP 1: Convert days to years under ordinary interest: t = 72/360 = 0.2 year.\nSTEP 2: I = 1000 × 0.10 × 0.2 = 20."
    },
    {
      question: "Find the exact interest: P = 3650, r = 10%, t = 10 days.",
      options: ["10", "20", "36.5", "100"],
      answer: "10",
      explanation: "STEP 1: t = 10/365 year.\nSTEP 2: I = 3650 × 0.10 × (10/365) = 365 × (10/365) = 10."
    },
    {
      question: "At what rate will a sum of money double itself in 10 years under simple interest?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: To double, I = P.\nSTEP 2: P = P × r × 10 → 1 = 10r → r = 1/10 = 10%."
    },
    {
      question: "At what rate will a sum of money double itself in 20 years under simple interest?",
      options: ["2%", "4%", "5%", "8%"],
      answer: "5%",
      explanation: "STEP 1: To double, I = P.\nSTEP 2: P = P × r × 20 → 1 = 20r → r = 1/20 = 0.05 = 5%."
    },
    {
      question: "How many years are required for money to triple at 10% simple interest per annum?",
      options: ["10", "20", "30", "40"],
      answer: "20",
      explanation: "STEP 1: Tripling means A = 3P, so I = 2P.\nSTEP 2: 2P = P × 0.10 × t → 2 = 0.10t → t = 20 years."
    },
    {
      question: "Find the ordinary interest: P = 3600, r = 5%, t = 60 days.",
      options: ["10", "20", "30", "40"],
      answer: "30",
      explanation: "STEP 1: t = 60/360 = 1/6 year.\nSTEP 2: I = 3600 × 0.05 × (1/6) = 180 × (1/6) = 30."
    },
    {
      question: "A principal earns one-fourth (1/4) of itself in 5 years. Find the rate.",
      options: ["2%", "4%", "5%", "20%"],
      answer: "5%",
      explanation: "STEP 1: I = (1/4)P = 0.25P.\nSTEP 2: 0.25P = P × r × 5 → 0.25 = 5r → r = 0.05 = 5%."
    },
    {
      question: "Which yields more interest: 6% exact interest or 6% ordinary interest (same principal and time)?",
      options: ["Exact interest", "Ordinary interest", "They are equal", "Depends on principal"],
      answer: "Ordinary interest",
      explanation: "STEP 1: Ordinary interest uses 360 days, exact uses 365 days.\nSTEP 2: Dividing by the smaller number (360) gives a slightly larger interest."
    },
    {
      question: "If P = 1000 and r = 6%, find the interest for 1 month (simple interest).",
      options: ["5", "6", "10", "60"],
      answer: "5",
      explanation: "STEP 1: Yearly interest = 1000 × 0.06 = 60.\nSTEP 2: Monthly interest ≈ 60 / 12 = 5."
    },
    {
      question: "A certain sum amounts to 500 in 2 years and 600 in 4 years at simple interest. What is the annual interest?",
      options: ["25", "50", "75", "100"],
      answer: "50",
      explanation: "STEP 1: Difference in time = 2 years. Difference in amount = 600 − 500 = 100.\nSTEP 2: Interest for 2 years = 100.\nSTEP 3: Annual interest = 100 ÷ 2 = 50."
    },
    {
      question: "A certain sum amounts to 500 in 2 years and 600 in 4 years at simple interest. What is the principal?",
      options: ["300", "400", "450", "500"],
      answer: "400",
      explanation: "STEP 1: From the previous reasoning, annual interest = 50, so for 2 years interest = 100.\nSTEP 2: P = Amount after 2 years − Interest for 2 years = 500 − 100 = 400."
    },
    {
      question: "Find the ordinary interest: P = 5000, r = 9%, t = 120 days.",
      options: ["100", "125", "150", "175"],
      answer: "150",
      explanation: "STEP 1: t = 120/360 = 1/3 year.\nSTEP 2: I = 5000 × 0.09 × (1/3) = 150."
    },
    {
      question: "If the rate increases from 4% to 5%, how much more interest is earned on 1000 for 1 year?",
      options: ["5", "10", "15", "20"],
      answer: "10",
      explanation: "STEP 1: Difference in rate = 1% = 0.01.\nSTEP 2: Extra interest = 1000 × 0.01 × 1 = 10."
    },
    {
      question: "Find the time in days (ordinary interest) if I = 10, P = 3600, r = 10%.",
      options: ["1", "5", "10", "15"],
      answer: "10",
      explanation: "STEP 1: I = Pr(d/360) → 10 = 3600 × 0.10 × (d/360).\nSTEP 2: 10 = 360 × (d/360) = d.\nSTEP 3: d = 10 days."
    },
    {
      question: "Find the exact interest: P = 1460, r = 10%, t = 100 days.",
      options: ["40", "50", "400", "500"],
      answer: "40",
      explanation: "STEP 1: t = 100/365 year.\nSTEP 2: I = 1460 × 0.10 × (100/365).\nSTEP 3: 1460/365 = 4, so I = 4 × 0.10 × 100 = 40."
    },
    {
      question: "How much must be invested today at 5% simple interest to have 1100 in 2 years?",
      options: ["900", "950", "1000", "1050"],
      answer: "1000",
      explanation: "STEP 1: A = P(1 + rt) → 1100 = P(1 + 0.05 × 2) = P(1.10).\nSTEP 2: P = 1100 / 1.10 = 1000."
    },
    {
      question: "At what rate will a sum triple in 25 years under simple interest?",
      options: ["4%", "6%", "8%", "10%"],
      answer: "8%",
      explanation: "STEP 1: Tripling means A = 3P, so I = 2P.\nSTEP 2: 2P = P × r × 25 → 2 = 25r → r = 2/25 = 0.08 = 8%."
    },
    {
      question: "Calculate the number of days between January 1, 2023 and January 31, 2023 (exact number of days).",
      options: ["29", "30", "31", "32"],
      answer: "30",
      explanation: "STEP 1: From Jan 1 to Jan 31 (exclusive of Jan 1) is 30 days."
    },
    {
      question: "Approximate the time from January 1 to March 1 using 30 days per month.",
      options: ["58", "59", "60", "62"],
      answer: "60",
      explanation: "STEP 1: From Jan 1 to March 1 spans two full months.\nSTEP 2: Approximate days = 2 × 30 = 60."
    },
    {
      question: "If a principal earns 40% of itself as interest in 4 years, what is the rate?",
      options: ["8%", "10%", "12%", "15%"],
      answer: "10%",
      explanation: "STEP 1: I = 0.40P.\nSTEP 2: 0.40P = P × r × 4 → 0.40 = 4r → r = 0.10 = 10%."
    },
    {
      question: "Find the interest for P = 2000, r = 4.5%, t = 8 months.",
      options: ["40", "50", "60", "70"],
      answer: "60",
      explanation: "STEP 1: t = 8/12 = 2/3 year.\nSTEP 2: I = 2000 × 0.045 × (2/3) = 90 × (2/3) = 60."
    },
    {
      question: "Find the present value of 1300 due in 1 year at 30% simple interest.",
      options: ["1000", "1100", "1200", "900"],
      answer: "1000",
      explanation: "STEP 1: A = P(1 + rt) → 1300 = P(1 + 0.30 × 1) = 1.3P.\nSTEP 2: P = 1300 / 1.3 = 1000."
    },
    {
      question: "Find the exact interest on 1000 for 146 days at 5% per annum.",
      options: ["10", "20", "30", "40"],
      answer: "20",
      explanation: "STEP 1: t = 146/365 = 0.4 year.\nSTEP 2: I = 1000 × 0.05 × 0.4 = 20."
    },
    {
      question: "What principal will yield 50 interest in 6 months at 5% simple interest?",
      options: ["1000", "2000", "3000", "4000"],
      answer: "2000",
      explanation: "STEP 1: 50 = P × 0.05 × 0.5.\nSTEP 2: 50 = P × 0.025 → P = 50 / 0.025 = 2000."
    },
    {
      question: "At what rate will a sum quadruple itself in 30 years under simple interest?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: Quadruple means A = 4P, so I = 3P.\nSTEP 2: 3P = P × r × 30 → 3 = 30r → r = 3/30 = 0.10 = 10%."
    },
    {
      question: "Two investments: 1000 at 5% and 2000 at x%. The total interest in 1 year is 150. Find x.",
      options: ["3%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: I₁ = 1000 × 0.05 = 50.\nSTEP 2: Total interest = 150, so I₂ = 100.\nSTEP 3: 100 = 2000 × x → x = 100/2000 = 0.05 = 5%."
    },
    {
      question: "Find the difference between ordinary and exact interest on 7300 at 5% for 100 days.",
      options: ["1", "1.37", "5", "10"],
      answer: "1.37",
      explanation: "STEP 1: Ordinary: I₁ = 7300 × 0.05 × (100/360) ≈ 101.38.\nSTEP 2: Exact: I₂ = 7300 × 0.05 × (100/365) = 100.\nSTEP 3: Difference ≈ 101.38 − 100 ≈ 1.38 (about 1.37 in exact math)."
    },
    {
      question: "The simple interest on a sum for 5 years is one-fifth of the sum. What is the rate?",
      options: ["2%", "4%", "5%", "10%"],
      answer: "4%",
      explanation: "STEP 1: I = (1/5)P = 0.2P.\nSTEP 2: 0.2P = P × r × 5 → 0.2 = 5r → r = 0.04 = 4%."
    },
    {
      question: "The amount after 5 years is 5200. The principal is 4000. Find the rate.",
      options: ["4%", "5%", "6%", "7%"],
      answer: "6%",
      explanation: "STEP 1: I = 5200 − 4000 = 1200.\nSTEP 2: 1200 = 4000 × r × 5 → 1200 = 20000r → r = 0.06 = 6%."
    },
    {
      question: "Find the exact interest on 7300 at 10% for 1 day.",
      options: ["1", "2", "5", "10"],
      answer: "2",
      explanation: "STEP 1: I = 7300 × 0.10 × (1/365) = 730 / 365 = 2."
    },
    {
      question: "If P = 10000 and r = 12%, what is the daily interest using ordinary interest (360 days)?",
      options: ["3.33", "3.66", "4.00", "4.33"],
      answer: "3.33",
      explanation: "STEP 1: Yearly interest = 10000 × 0.12 = 1200.\nSTEP 2: Daily interest (ordinary) = 1200 / 360 = 3.33."
    },
    {
      question: "A sum at 10% amounts to 3000 in 5 years. Find the original sum.",
      options: ["1500", "2000", "2500", "1000"],
      answer: "2000",
      explanation: "STEP 1: A = P(1 + rt) = P(1 + 0.10 × 5) = P(1.5).\nSTEP 2: 3000 = 1.5P → P = 3000 / 1.5 = 2000."
    },
    {
      question: "How many days (ordinary interest) are required for 1000 to earn 20 at 6%?",
      options: ["60", "90", "120", "150"],
      answer: "120",
      explanation: "STEP 1: 20 = 1000 × 0.06 × (d/360).\nSTEP 2: 20 = 60 × (d/360) → 20 = d/6 → d = 120 days."
    },
    {
      question: "Find the interest: P = 1200, r = 5/2%, t = 4 years.",
      options: ["60", "100", "120", "240"],
      answer: "120",
      explanation: "STEP 1: r = 5/2% = 2.5% = 0.025.\nSTEP 2: I = 1200 × 0.025 × 4 = 1200 × 0.1 = 120."
    },
    {
      question: "Which principal produces 100 interest per year at 2% simple interest?",
      options: ["2000", "3000", "4000", "5000"],
      answer: "5000",
      explanation: "STEP 1: 100 = P × 0.02.\nSTEP 2: P = 100 / 0.02 = 5000."
    },
    {
      question: "Find the exact interest: P = 21900, r = 5%, t = 10 days.",
      options: ["10", "20", "30", "40"],
      answer: "30",
      explanation: "STEP 1: t = 10/365 year.\nSTEP 2: I = 21900 × 0.05 × (10/365).\nSTEP 3: 21900 × 0.05 = 1095.\nSTEP 4: 1095 × 10 / 365 = 30."
    },
    {
      question: "A sum of money becomes 3 times itself in 20 years under simple interest. Find the rate.",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: Tripling means A = 3P → I = 2P.\nSTEP 2: 2P = P × r × 20 → 2 = 20r → r = 0.10 = 10%."
    },
    {
      question: "Find the interest: P = 1500, r = 4%, t = 146 days (exact).",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "STEP 1: t = 146/365 = 0.4 year.\nSTEP 2: I = 1500 × 0.04 × 0.4 = 24."
    },
    {
      question: "Find the amount: P = 2500, r = 6%, t = 8 months.",
      options: ["2550", "2600", "2650", "2700"],
      answer: "2600",
      explanation: "STEP 1: t = 8/12 = 2/3 year.\nSTEP 2: I = 2500 × 0.06 × 2/3 = 100.\nSTEP 3: A = 2500 + 100 = 2600."
    },
    {
      question: "If P = 1000, I = 100, t = 2 years, find the rate.",
      options: ["2%", "5%", "10%", "20%"],
      answer: "5%",
      explanation: "STEP 1: 100 = 1000 × r × 2 = 2000r.\nSTEP 2: r = 100 / 2000 = 0.05 = 5%."
    },
    {
      question: "If Amount = 1320, P = 1200, t = 2 years, find the rate.",
      options: ["2%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: I = 1320 − 1200 = 120.\nSTEP 2: 120 = 1200 × r × 2 = 2400r.\nSTEP 3: r = 120 / 2400 = 0.05 = 5%."
    },
    {
      question: "Find the interest: P = 5000, r = 12%, t = 73 days (exact).",
      options: ["60", "120", "150", "200"],
      answer: "120",
      explanation: "STEP 1: t = 73/365 = 0.2 year.\nSTEP 2: I = 5000 × 0.12 × 0.2 = 120."
    },
    {
      question: "Find the ordinary interest on 1000 for 180 days at 4% per annum.",
      options: ["10", "20", "30", "40"],
      answer: "20",
      explanation: "STEP 1: t = 180/360 = 0.5 year.\nSTEP 2: I = 1000 × 0.04 × 0.5 = 20."
    },
    {
      question: "If a sum doubles in 5 years, in how many years will it become 4 times under simple interest?",
      options: ["10", "15", "20", "25"],
      answer: "15",
      explanation: "STEP 1: Doubling in 5 years means I = P in 5 years → r = 1/5 = 20%.\nSTEP 2: To quadruple: I = 3P.\nSTEP 3: 3P = P × 0.20 × t → 3 = 0.20t → t = 15 years."
    },
    {
      question: "What is 7.5% written in decimal form?",
      options: ["0.75", "0.075", "7.5", "0.0075"],
      answer: "0.075",
      explanation: "STEP 1: 7.5 ÷ 100 = 0.075."
    },
    {
      question: "Find the principal if I = 150, r = 5%, t = 0.5 year.",
      options: ["3000", "4500", "6000", "7500"],
      answer: "6000",
      explanation: "STEP 1: P = 150 / (0.05 × 0.5) = 150 / 0.025 = 6000."
    },
    {
      question: "How long will it take for 800 to become 880 at 5% simple interest?",
      options: ["1 year", "2 years", "3 years", "4 years"],
      answer: "2 years",
      explanation: "STEP 1: Interest needed = 880 − 800 = 80.\nSTEP 2: 80 = 800 × 0.05 × t = 40t.\nSTEP 3: t = 80 / 40 = 2 years."
    },
    {
      question: "A sum amounts to 1200 in 2 years at 10% simple interest. What is the principal?",
      options: ["1000", "1100", "1200", "900"],
      answer: "1000",
      explanation: "STEP 1: A = P(1 + rt). 1200 = P(1 + 0.10 × 2) = 1.2P.\nSTEP 2: P = 1200 / 1.2 = 1000."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – Multi-step, Comparisons, Logic Puzzles)
  // ==========================================
  expert: [
    {
      question: "A sum amounts to 2400 in 3 years and 3000 in 5 years at simple interest. Find the principal.",
      options: ["1000", "1500", "1800", "2000"],
      answer: "1500",
      explanation: "STEP 1: Difference in time = 2 years. Difference in amount = 3000 − 2400 = 600.\nSTEP 2: Interest for 2 years = 600 → annual interest = 300.\nSTEP 3: In 3 years, total interest = 3 × 300 = 900.\nSTEP 4: Principal = 2400 − 900 = 1500."
    },
    {
      question: "For the same sum that amounts to 2400 in 3 years and 3000 in 5 years, what is the rate of interest per annum?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "STEP 1: From the previous item, principal P = 1500 and annual interest = 300.\nSTEP 2: r = 300 / 1500 = 0.20 = 20%."
    },
    {
      question: "A sum was invested at simple interest at a certain rate for 3 years. Had it been invested at 2% higher rate, it would have fetched 360 more. Find the sum.",
      options: ["4000", "5000", "6000", "7000"],
      answer: "6000",
      explanation: "STEP 1: Extra interest = P × (extra rate) × time.\nSTEP 2: 360 = P × 0.02 × 3 = 0.06P.\nSTEP 3: P = 360 / 0.06 = 6000."
    },
    {
      question: "If A invests 2000 at 5% and B invests 1000 at 10% (both for the same time), who earns more interest in 10 years?",
      options: ["A", "B", "They earn equal interest", "Cannot be determined"],
      answer: "They earn equal interest",
      explanation: "STEP 1: A’s interest: 2000 × 0.05 × 10 = 1000.\nSTEP 2: B’s interest: 1000 × 0.10 × 10 = 1000.\nSTEP 3: Both earn equal interest."
    },
    {
      question: "A father left 100,000 to be divided between two sons aged 12 and 14 so that they will receive equal amounts at age 18 if the money is invested at 5% simple interest. How much is the older son's share?",
      options: ["48000", "50000", "52000", "54000"],
      answer: "52000",
      explanation: "STEP 1: Let x be the younger son’s share (12 years old), invested for 6 years.\nSTEP 2: Let y be the older son’s share (14 years old), invested for 4 years.\nSTEP 3: Younger’s amount at 18: x(1 + 0.05 × 6) = 1.30x.\nSTEP 4: Older’s amount at 18: y(1 + 0.05 × 4) = 1.20y.\nSTEP 5: Condition: 1.30x = 1.20y and x + y = 100,000.\nSTEP 6: From 1.30x = 1.20y → y = (13/12)x.\nSTEP 7: Substitute: x + (13/12)x = 100,000 → (25/12)x = 100,000 → x = 48,000.\nSTEP 8: y = 100,000 − 48,000 = 52,000."
    },
    {
      question: "At what rate percent per annum will a sum of money double in 16 years under simple interest?",
      options: ["6%", "6.25%", "6.5%", "7%"],
      answer: "6.25%",
      explanation: "STEP 1: Doubling means I = P.\nSTEP 2: P = P × r × 16 → 1 = 16r → r = 1/16 = 0.0625 = 6.25%."
    },
    {
      question: "The simple interest on a sum for 8 years is 40% of the sum. What is the rate?",
      options: ["4%", "5%", "6%", "8%"],
      answer: "5%",
      explanation: "STEP 1: I = 0.40P.\nSTEP 2: 0.40 = r × 8 → r = 0.40 / 8 = 0.05 = 5%."
    },
    {
      question: "A principal P amounts to 708 in 3 years and 764 in 4 years. Find the principal P.",
      options: ["500", "540", "600", "640"],
      answer: "540",
      explanation: "STEP 1: Interest for 1 year = 764 − 708 = 56.\nSTEP 2: Interest for 3 years = 3 × 56 = 168.\nSTEP 3: P = 708 − 168 = 540."
    },
    {
      question: "In how many years will the simple interest on a sum be equal to the principal at 12.5% per annum?",
      options: ["6", "7", "8", "10"],
      answer: "8",
      explanation: "STEP 1: I = P.\nSTEP 2: P = P × 0.125 × t → 1 = 0.125t → t = 1 / 0.125 = 8 years."
    },
    {
      question: "A sum of 12,500 amounts to 15,500 in 4 years at simple interest. What is the rate?",
      options: ["3%", "4%", "5%", "6%"],
      answer: "6%",
      explanation: "STEP 1: I = 15,500 − 12,500 = 3,000.\nSTEP 2: 3,000 = 12,500 × r × 4 = 50,000r.\nSTEP 3: r = 3,000 / 50,000 = 0.06 = 6%."
    },
    {
      question: "If P = 8500, r = 4.5%, t = 6 months, what is the amount A?",
      options: ["8691.25", "8700", "8550", "8650"],
      answer: "8691.25",
      explanation: "STEP 1: t = 6/12 = 0.5 year.\nSTEP 2: I = 8500 × 0.045 × 0.5 = 191.25.\nSTEP 3: A = 8500 + 191.25 = 8691.25."
    },
    {
      question: "Two equal sums are lent at 8% and 4% respectively. The first is recovered 2 years earlier than the second, but the amounts at the time of repayment are equal. Find the time for the second sum.",
      options: ["4", "5", "6", "8"],
      answer: "4",
      explanation: "STEP 1: Let P be each sum and t be time for the second sum.\nSTEP 2: First sum: P(1 + 0.08(t − 2)). Second sum: P(1 + 0.04t).\nSTEP 3: Set equal: 1 + 0.08(t − 2) = 1 + 0.04t.\nSTEP 4: 0.08t − 0.16 = 0.04t → 0.04t = 0.16 → t = 4 years."
    },
    {
      question: "The rate is 10% for the first 2 years and 15% for the next 3 years. If the principal is 1000, what is the total interest for 5 years?",
      options: ["500", "650", "700", "750"],
      answer: "650",
      explanation: "STEP 1: First part: 1000 × 0.10 × 2 = 200.\nSTEP 2: Second part: 1000 × 0.15 × 3 = 450.\nSTEP 3: Total interest = 200 + 450 = 650."
    },
    {
      question: "What equal annual payment will discharge a debt of 6450 due in 4 years at 5% simple interest? (Assume each payment is invested at 5% until the due date.)",
      options: ["1000", "1500", "1600", "1800"],
      answer: "1500",
      explanation: "STEP 1: Let each annual payment be x.\nSTEP 2: Value at end of 4 years:\nYear 1 payment: x(1 + 0.05 × 3)\nYear 2 payment: x(1 + 0.05 × 2)\nYear 3 payment: x(1 + 0.05 × 1)\nYear 4 payment: x\nSTEP 3: Total = x(1.15 + 1.10 + 1.05 + 1) = x(4.30).\nSTEP 4: 4.30x = 6450 → x = 6450 / 4.3 = 1500."
    },
    {
      question: "A sum P is invested at r% for 2 years. If it had been invested at (r + 3)% for 2 years, it would earn 72 more interest. Find P.",
      options: ["800", "1000", "1200", "1500"],
      answer: "1200",
      explanation: "STEP 1: Difference in rate = 3% = 0.03.\nSTEP 2: Extra interest = P × 0.03 × 2 = 0.06P.\nSTEP 3: 0.06P = 72 → P = 72 / 0.06 = 1200."
    },
    {
      question: "One-third of a sum is invested at 3%, one-sixth at 6%, and the rest at 8%. The total simple interest for 2 years is 600. Find the total sum.",
      options: ["4000", "5000", "6000", "10000"],
      answer: "5000",
      explanation: "STEP 1: Let the sum be P.\nSTEP 2: Fractions: 1/3 at 3%, 1/6 at 6%, remaining = 1 − 1/3 − 1/6 = 1/2 at 8%.\nSTEP 3: Total interest for 2 years: P[(1/3 × 0.03 + 1/6 × 0.06 + 1/2 × 0.08) × 2].\nSTEP 4: Inside: (0.01 + 0.01 + 0.04) = 0.06; times 2 → 0.12P.\nSTEP 5: 0.12P = 600 → P = 600 / 0.12 = 5000."
    },
    {
      question: "A total of 4000 is split into two parts: one at 8% and the other at 10%. The total interest in 1 year is 352. How much is invested at 8%?",
      options: ["2000", "2200", "2400", "2600"],
      answer: "2400",
      explanation: "STEP 1: Let x be the part at 8%; then (4000 − x) is at 10%.\nSTEP 2: Interest: 0.08x + 0.10(4000 − x) = 352.\nSTEP 3: 0.08x + 400 − 0.10x = 352 → −0.02x = −48 → x = 2400."
    },
    {
      question: "How many years are required for a sum to become 5 times itself at 16% simple interest?",
      options: ["20", "25", "30", "15"],
      answer: "25",
      explanation: "STEP 1: 5 times means A = 5P → I = 4P.\nSTEP 2: 4P = P × 0.16 × t → 4 = 0.16t → t = 4 / 0.16 = 25 years."
    },
    {
      question: "If x is the interest on y and y is the interest on z (for the same rate and time), what is the relation among x, y, and z?",
      options: ["x² = yz", "y² = xz", "z² = xy", "x = y = z"],
      answer: "y² = xz",
      explanation: "STEP 1: x = yrt and y = zrt.\nSTEP 2: x/y = rt and y/z = rt.\nSTEP 3: x/y = y/z → y² = xz."
    },
    {
      question: "Find the amount of a 5000 investment after 6 months at 24% simple interest per annum.",
      options: ["5200", "5400", "5600", "6000"],
      answer: "5600",
      explanation: "STEP 1: t = 6/12 = 0.5 year.\nSTEP 2: I = 5000 × 0.24 × 0.5 = 600.\nSTEP 3: A = 5000 + 600 = 5600."
    },
    {
      question: "A moneylender lends at 5% but pays 2% on his capital kept in a savings account. If his capital equals his savings and he gains 1500 in a year, what is his capital?",
      options: ["25000", "50000", "75000", "30000"],
      answer: "50000",
      explanation: "STEP 1: Net gain rate = 5% − 2% = 3%.\nSTEP 2: 0.03C = 1500 → C = 1500 / 0.03 = 50,000."
    },
    {
      question: "If 400 amounts to 480 in 4 years, what will it amount to in 4 years if the rate is increased by 2%?",
      options: ["500", "512", "520", "550"],
      answer: "512",
      explanation: "STEP 1: Old interest: 480 − 400 = 80.\nSTEP 2: 80 = 400 × r × 4 → 80 = 1600r → r = 5%.\nSTEP 3: New rate = 7%. New interest: 400 × 0.07 × 4 = 112.\nSTEP 4: Amount = 400 + 112 = 512."
    },
    {
      question: "The interest on 800 for 3 years is the same as on 600 for x years at the same rate. Find x.",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "STEP 1: 800 × 3 × r = 600 × x × r.\nSTEP 2: 2400 = 600x → x = 4 years."
    },
    {
      question: "A sum doubles in 8 years. In how many years will it become 4 times itself under simple interest?",
      options: ["16", "24", "32", "12"],
      answer: "24",
      explanation: "STEP 1: Doubling in 8 years → I = P in 8 years → r = 1/8 = 12.5%.\nSTEP 2: To become 4 times, I = 3P.\nSTEP 3: 3P = P × 0.125 × t → 3 = 0.125t → t = 24 years."
    },
    {
      question: "Find the principal if the interest is 1 for 1 day at 5% ordinary interest.",
      options: ["7200", "7300", "3600", "3650"],
      answer: "7200",
      explanation: "STEP 1: I = P × r × (d/360).\nSTEP 2: 1 = P × 0.05 × (1/360) → 1 = P × (0.05/360).\nSTEP 3: P = 1 ÷ (0.05/360) = 1 × (360/0.05) = 7200."
    },
    {
      question: "Find the amount of 2000 at 5% for 73 days using exact interest.",
      options: ["2010", "2020", "2030", "2040"],
      answer: "2020",
      explanation: "STEP 1: t = 73/365 = 0.2 year.\nSTEP 2: I = 2000 × 0.05 × 0.2 = 20.\nSTEP 3: A = 2000 + 20 = 2020."
    },
    {
      question: "A sum P earns interest equal to P in 10 years. What is the rate?",
      options: ["5%", "10%", "15%", "100%"],
      answer: "10%",
      explanation: "STEP 1: I = P.\nSTEP 2: P = P × r × 10 → 1 = 10r → r = 0.10 = 10%."
    },
    {
      question: "The interest on P at r% for 2 years is I. What is the interest on 2P at the same rate r for 1 year?",
      options: ["I", "2I", "I/2", "I²"],
      answer: "I",
      explanation: "STEP 1: Old: I = P × r × 2 = 2Pr.\nSTEP 2: New: Interest = 2P × r × 1 = 2Pr = I."
    },
    {
      question: "If 2000 amounts to 2600 in 5 years at simple interest, what is the rate?",
      options: ["4%", "5%", "6%", "7%"],
      answer: "6%",
      explanation: "STEP 1: I = 2600 − 2000 = 600.\nSTEP 2: 600 = 2000 × r × 5 = 10000r.\nSTEP 3: r = 600 / 10000 = 0.06 = 6%."
    },
    {
      question: "Divide 1500 into two parts such that simple interest on one part at 10% for 5 years equals that on the other part at 12.5% for 4 years.",
      options: ["1000:500", "750:750", "800:700", "900:600"],
      answer: "750:750",
      explanation: "STEP 1: Let x be the first part, so 1500 − x is the second part.\nSTEP 2: Interest1 = x × 0.10 × 5 = 0.5x.\nSTEP 3: Interest2 = (1500 − x) × 0.125 × 4 = 0.5(1500 − x).\nSTEP 4: 0.5x = 0.5(1500 − x) → x = 1500 − x → 2x = 1500 → x = 750."
    },
    {
      question: "Find the rate which yields 72 interest on 800 in 2 years.",
      options: ["3%", "4.5%", "5%", "6%"],
      answer: "4.5%",
      explanation: "STEP 1: 72 = 800 × r × 2 = 1600r.\nSTEP 2: r = 72 / 1600 = 0.045 = 4.5%."
    },
    {
      question: "A sum becomes 1.5 times itself in 5 years. Find the rate under simple interest.",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: A = 1.5P → I = 0.5P.\nSTEP 2: 0.5P = P × r × 5 → 0.5 = 5r → r = 0.10 = 10%."
    },
    {
      question: "What sum will give 1 peso interest per day at 5% ordinary interest?",
      options: ["7200", "7300", "3600", "3650"],
      answer: "7200",
      explanation: "STEP 1: From a previous item, 1 peso per day at 5% ordinary interest corresponds to P = 7200."
    },
    {
      question: "The ratio of principal to amount is 4:5 in 2 years under simple interest. Find the rate.",
      options: ["10%", "12.5%", "15%", "20%"],
      answer: "12.5%",
      explanation: "STEP 1: Let P = 4k, A = 5k, so I = A − P = k.\nSTEP 2: I = k in 2 years on P = 4k.\nSTEP 3: k = 4k × r × 2 → 1 = 8r → r = 1/8 = 0.125 = 12.5%."
    },
    {
      question: "Which term is NOT constant in simple interest calculations over time?",
      options: ["Principal", "Accumulated interest", "Rate", "Initial amount"],
      answer: "Accumulated interest",
      explanation: "STEP 1: Principal and rate are fixed.\nSTEP 2: Interest accumulates linearly over time, so it changes."
    },
    {
      question: "If interest is calculated using 365 days in the numerator but 360 in the denominator, the interest is:",
      options: ["Banker's Rule", "Underestimated", "Overestimated", "Exact"],
      answer: "Overestimated",
      explanation: "STEP 1: Using 360 in the denominator makes the fraction of the year larger.\nSTEP 2: A larger fraction of a year yields more interest, so it is overestimated."
    },
    {
      question: "If P = 500 and r = 6%, how many years will it take to earn 150 interest?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "STEP 1: 150 = 500 × 0.06 × t = 30t.\nSTEP 2: t = 150 / 30 = 5 years."
    },
    {
      question: "The value of an investment after 1 year is 1100 and after 2 years is 1200 under simple interest. Find the principal.",
      options: ["900", "1000", "1050", "800"],
      answer: "1000",
      explanation: "STEP 1: Interest from year 1 to year 2 is 1200 − 1100 = 100 (this is annual interest).\nSTEP 2: Amount after 1 year = P + 100 = 1100 → P = 1000."
    },
    {
      question: "If 1000 amounts to 1100 at r% in 1 year, what will 2000 amount to at the same rate in 1 year?",
      options: ["2100", "2200", "2300", "2400"],
      answer: "2200",
      explanation: "STEP 1: Interest on 1000 is 100 → r = 10%.\nSTEP 2: Amount on 2000 = 2000 × (1 + 0.10) = 2200."
    },
    {
      question: "A borrowed 800 at 6% and B borrowed 600 at 10%. After how many years will their debts (amounts owed) be equal?",
      options: ["10", "15", "16 2/3", "20"],
      answer: "16 2/3",
      explanation: "STEP 1: A’s amount: 800 + 800 × 0.06 × t = 800 + 48t.\nSTEP 2: B’s amount: 600 + 600 × 0.10 × t = 600 + 60t.\nSTEP 3: 800 + 48t = 600 + 60t → 200 = 12t → t = 200/12 = 16 2/3 years."
    },
    {
      question: "The effective rate of interest equivalent to a nominal 12% simple interest rate is:",
      options: ["12%", "12.36%", "Depends on compounding", "Same as nominal for SI"],
      answer: "Same as nominal for SI",
      explanation: "STEP 1: In simple interest, there is no compounding.\nSTEP 2: The effective rate is the same as the nominal rate."
    },
    {
      question: "If P = 1200, A = 1800, r = 5%, find the time t.",
      options: ["5", "8", "10", "12"],
      answer: "10",
      explanation: "STEP 1: I = 1800 − 1200 = 600.\nSTEP 2: 600 = 1200 × 0.05 × t = 60t.\nSTEP 3: t = 600 / 60 = 10 years."
    },
    {
      question: "In financial formulas, which quantity is usually represented by the letter 'A'?",
      options: ["Area", "Amount", "Annual", "Asset"],
      answer: "Amount",
      explanation: "STEP 1: A commonly denotes the final amount or maturity value in interest problems."
    },
    {
      question: "Find the interest: P = 3000, r = 4%, t = 200 days (ordinary interest).",
      options: ["60", "66.67", "70", "80"],
      answer: "66.67",
      explanation: "STEP 1: t = 200/360 ≈ 0.5556 year.\nSTEP 2: I = 3000 × 0.04 × (200/360) ≈ 120 × 0.5556 ≈ 66.67."
    },
    {
      question: "If P = 1, r = 100%, t = 1 year, what is the amount A?",
      options: ["1", "2", "3", "0"],
      answer: "2",
      explanation: "STEP 1: I = Prt = 1 × 1 × 1 = 1.\nSTEP 2: A = P + I = 1 + 1 = 2."
    },
    {
      question: "Find the principal if I = 250, r = 10%, t = 2.5 years.",
      options: ["500", "750", "1000", "1250"],
      answer: "1000",
      explanation: "STEP 1: P = 250 / (0.10 × 2.5) = 250 / 0.25 = 1000."
    },
    {
      question: "In simple interest, if time is given in weeks, you divide by which number to convert to years?",
      options: ["4", "12", "52", "365"],
      answer: "52",
      explanation: "STEP 1: There are 52 weeks in a year, so t (in years) = weeks/52."
    },
    {
      question: "If P = 1000, r = 5%, t = 10 weeks, what is the interest?",
      options: ["9.6", "10", "50", "5"],
      answer: "9.6",
      explanation: "STEP 1: t = 10/52 year.\nSTEP 2: I = 1000 × 0.05 × (10/52) = 50 × (10/52) = 500/52 ≈ 9.62 (≈ 9.6)."
    },
    {
      question: "A sum amounts to 400 in 3 years and 500 in 5 years at simple interest. Find the rate.",
      options: ["10%", "20%", "25%", "30%"],
      answer: "20%",
      explanation: "STEP 1: Difference in amount over 2 years = 500 − 400 = 100.\nSTEP 2: Annual interest = 100/2 = 50.\nSTEP 3: Interest in 3 years = 3 × 50 = 150.\nSTEP 4: P = 400 − 150 = 250.\nSTEP 5: r = 50 / 250 = 0.20 = 20%."
    },
    {
      question: "True or False: Simple interest grows exponentially over time.",
      options: ["True", "False"],
      answer: "False",
      explanation: "STEP 1: Under simple interest, the interest grows linearly with time, not exponentially."
    }
  ]
};
