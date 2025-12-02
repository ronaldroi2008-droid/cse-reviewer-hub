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
      question: "Find I if P = 50, r = 10%, t = 2 years.",
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
      question: "If Principal is 300 and Interest is 30, what is the Total Amount?",
      options: ["270", "300", "330", "360"],
      answer: "330",
      explanation: "STEP 1: Amount = Principal + Interest\nSTEP 2: A = 300 + 30 = 330."
    },
    {
      question: "Calculate I: P=400, r=5%, t=1.",
      options: ["20", "25", "40", "45"],
      answer: "20",
      explanation: "STEP 1: I = 400 × 0.05 × 1 = 20."
    },
    {
      question: "Calculate I: P=600, r=1%, t=5.",
      options: ["6", "12", "30", "60"],
      answer: "30",
      explanation: "STEP 1: I = 600 × 0.01 × 5 = 30."
    },
    {
      question: "Convert 5% to decimal.",
      options: ["0.5", "0.05", "5.0", "0.005"],
      answer: "0.05",
      explanation: "STEP 1: Divide percentage by 100. 5 ÷ 100 = 0.05."
    },
    {
      question: "Convert 12% to decimal.",
      options: ["0.12", "1.2", "0.012", "12.0"],
      answer: "0.12",
      explanation: "STEP 1: 12 ÷ 100 = 0.12."
    },
    {
      question: "Convert 2.5% to decimal.",
      options: ["0.25", "2.5", "0.025", "0.0025"],
      answer: "0.025",
      explanation: "STEP 1: 2.5 ÷ 100 = 0.025."
    },
    {
      question: "Calculate I: P=1000, r=0.05, t=2.",
      options: ["10", "50", "100", "200"],
      answer: "100",
      explanation: "STEP 1: I = 1000 × 0.05 × 2 = 100."
    },
    {
      question: "Calculate I: P=2000, r=4%, t=1.",
      options: ["40", "60", "80", "100"],
      answer: "80",
      explanation: "STEP 1: I = 2000 × 0.04 × 1 = 80."
    },
    {
      question: "Calculate I: P=500, r=20%, t=1.",
      options: ["50", "100", "150", "200"],
      answer: "100",
      explanation: "STEP 1: I = 500 × 0.20 × 1 = 100."
    },
    {
      question: "If you borrow 100 and pay back 110, what is the interest?",
      options: ["5", "10", "15", "100"],
      answer: "10",
      explanation: "STEP 1: Interest = Repayment - Principal.\nSTEP 2: 110 - 100 = 10."
    },
    {
      question: "Find the simple interest on 1500 at 2% for 1 year.",
      options: ["15", "30", "45", "60"],
      answer: "30",
      explanation: "STEP 1: 1500 × 0.02 × 1 = 30."
    },
    {
      question: "Find I: P=300, r=3%, t=3.",
      options: ["9", "18", "27", "30"],
      answer: "27",
      explanation: "STEP 1: 300 × 0.03 × 3 = 27."
    },
    {
      question: "P=1000, r=50%, t=1. Find I.",
      options: ["100", "250", "500", "1000"],
      answer: "500",
      explanation: "STEP 1: 1000 × 0.50 × 1 = 500."
    },
    {
      question: "What refers to the percentage of the principal charged by the lender?",
      options: ["Time", "Interest", "Rate", "Amount"],
      answer: "Rate",
      explanation: "STEP 1: Rate is the percentage charged."
    },
    {
      question: "P=250, r=4%, t=1. I=?",
      options: ["10", "20", "25", "40"],
      answer: "10",
      explanation: "STEP 1: 250 × 0.04 = 10."
    },
    {
      question: "P=100, r=10%, t=3. I=?",
      options: ["10", "20", "30", "40"],
      answer: "30",
      explanation: "STEP 1: 100 × 0.10 × 3 = 30."
    },
    {
      question: "Which formula finds the Time?",
      options: ["t = I / (P × r)", "t = P × I × r", "t = P / I", "t = I × P × r"],
      answer: "t = I / (P × r)",
      explanation: "STEP 1: Derive from I = Prt. Divide both sides by Pr."
    },
    {
      question: "Which formula finds the Principal?",
      options: ["P = I / (r × t)", "P = I × r × t", "P = r / (I × t)", "P = I + r + t"],
      answer: "P = I / (r × t)",
      explanation: "STEP 1: Derive from I = Prt. Divide both sides by rt."
    },
    {
      question: "P=800, r=5%, t=1. Find I.",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "STEP 1: 800 × 0.05 = 40."
    },
    {
      question: "P=200, r=6%, t=2. Find I.",
      options: ["12", "18", "24", "30"],
      answer: "24",
      explanation: "STEP 1: 200 × 0.06 × 2 = 24."
    },
    {
      question: "Find I: P=1200, r=10%, t=1.",
      options: ["12", "100", "120", "1200"],
      answer: "120",
      explanation: "STEP 1: 1200 × 0.10 = 120."
    },
    {
      question: "P=50, r=2%, t=10. Find I.",
      options: ["1", "5", "10", "20"],
      answer: "10",
      explanation: "STEP 1: 50 × 0.02 × 10 = 10."
    },
    {
      question: "Simple interest is calculated on the:",
      options: ["Principal only", "Principal + Previous Interest", "Amount", "Rate"],
      answer: "Principal only",
      explanation: "STEP 1: Simple interest is only calculated on the original principal, unlike compound interest."
    },
    {
      question: "P=3000, r=1%, t=1. Find I.",
      options: ["3", "30", "300", "3000"],
      answer: "30",
      explanation: "STEP 1: 3000 × 0.01 = 30."
    },
    {
      question: "P=400, r=25%, t=1. Find I.",
      options: ["25", "50", "75", "100"],
      answer: "100",
      explanation: "STEP 1: 400 × 0.25 = 100."
    },
    {
      question: "P=5000, r=2%, t=2. Find I.",
      options: ["100", "200", "300", "400"],
      answer: "200",
      explanation: "STEP 1: 5000 × 0.02 × 2 = 200."
    },
    {
      question: "Calculate interest on 600 at 5% for 2 years.",
      options: ["30", "60", "90", "120"],
      answer: "60",
      explanation: "STEP 1: 600 × 0.05 × 2 = 60."
    },
    {
      question: "P=700, r=10%, t=3. Find I.",
      options: ["70", "140", "210", "280"],
      answer: "210",
      explanation: "STEP 1: 700 × 0.10 × 3 = 210."
    },
    {
      question: "P=900, r=1%, t=1. Find I.",
      options: ["9", "90", "900", "0.9"],
      answer: "9",
      explanation: "STEP 1: 900 × 0.01 = 9."
    },
    {
      question: "P=10, r=5%, t=2. Find I.",
      options: ["0.1", "0.5", "1", "2"],
      answer: "1",
      explanation: "STEP 1: 10 × 0.05 × 2 = 1."
    },
    {
      question: "P=200, r=50%, t=2. Find I.",
      options: ["100", "150", "200", "250"],
      answer: "200",
      explanation: "STEP 1: 200 × 0.50 × 2 = 200."
    },
    {
      question: "P=100, r=1%, t=100. Find I.",
      options: ["1", "10", "100", "1000"],
      answer: "100",
      explanation: "STEP 1: 100 × 0.01 × 100 = 100."
    },
    {
      question: "Calculate I: P=150, r=10%, t=1.",
      options: ["10", "15", "20", "25"],
      answer: "15",
      explanation: "STEP 1: 150 × 0.10 = 15."
    },
    {
      question: "Calculate I: P=1000, r=7%, t=1.",
      options: ["7", "70", "700", "7000"],
      answer: "70",
      explanation: "STEP 1: 1000 × 0.07 = 70."
    },
    {
      question: "P=500, r=3%, t=1. Find I.",
      options: ["15", "30", "45", "60"],
      answer: "15",
      explanation: "STEP 1: 500 × 0.03 = 15."
    },
    {
      question: "P=800, r=2%, t=1. Find I.",
      options: ["8", "16", "24", "32"],
      answer: "16",
      explanation: "STEP 1: 800 × 0.02 = 16."
    },
    {
      question: "P=1000, r=10%, t=5. Find I.",
      options: ["100", "200", "500", "1000"],
      answer: "500",
      explanation: "STEP 1: 1000 × 0.10 × 5 = 500."
    },
    {
      question: "P=2000, r=1%, t=3. Find I.",
      options: ["20", "40", "60", "80"],
      answer: "60",
      explanation: "STEP 1: 2000 × 0.01 × 3 = 60."
    },
    {
      question: "P=100, r=100%, t=1. Find I.",
      options: ["1", "10", "100", "200"],
      answer: "100",
      explanation: "STEP 1: 100 × 1.0 × 1 = 100."
    },
    {
      question: "Which produces more interest: 100 at 5% for 2 years OR 100 at 2% for 5 years?",
      options: ["First option", "Second option", "They are equal", "Cannot be determined"],
      answer: "They are equal",
      explanation: "STEP 1: Option 1: 100 × 0.05 × 2 = 10.\nSTEP 2: Option 2: 100 × 0.02 × 5 = 10.\nSTEP 3: They are equal."
    },
    {
      question: "Calculate I: P=50, r=4%, t=2.",
      options: ["2", "4", "6", "8"],
      answer: "4",
      explanation: "STEP 1: 50 × 0.04 × 2 = 4."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Time Conversions, Solving for P, R, T)
  // ==========================================
  intermediate: [
    {
      question: "Find the Interest: P = 1000, r = 6%, t = 6 months.",
      options: ["30", "60", "300", "600"],
      answer: "30",
      explanation: "STEP 1: Convert months to years: 6 months = 6/12 = 0.5 years.\nSTEP 2: I = 1000 × 0.06 × 0.5 = 30."
    },
    {
      question: "If I = 50, r = 5%, t = 1 year, find P.",
      options: ["500", "1000", "1500", "2000"],
      answer: "1000",
      explanation: "STEP 1: P = I / (rt)\nSTEP 2: P = 50 / (0.05 × 1)\nSTEP 3: P = 50 / 0.05 = 1000."
    },
    {
      question: "If I = 20, P = 200, t = 1 year, find r.",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: r = I / (Pt)\nSTEP 2: r = 20 / (200 × 1) = 0.10\nSTEP 3: 0.10 = 10%."
    },
    {
      question: "If I = 40, P = 400, r = 5%, find t (in years).",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "STEP 1: t = I / (Pr)\nSTEP 2: t = 40 / (400 × 0.05)\nSTEP 3: t = 40 / 20 = 2 years."
    },
    {
      question: "Calculate I: P=2000, r=3%, t=18 months.",
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
      question: "Find the Maturity Value (Amount) if P=500, I=50.",
      options: ["450", "500", "550", "600"],
      answer: "550",
      explanation: "STEP 1: A = P + I = 500 + 50 = 550."
    },
    {
      question: "Find A: P=1000, r=5%, t=2.",
      options: ["1050", "1100", "1150", "1200"],
      answer: "1100",
      explanation: "STEP 1: I = 1000 × 0.05 × 2 = 100.\nSTEP 2: A = 1000 + 100 = 1100."
    },
    {
      question: "I=300, r=10%, t=3. Find P.",
      options: ["500", "1000", "1500", "3000"],
      answer: "1000",
      explanation: "STEP 1: P = 300 / (0.10 × 3) = 300 / 0.3 = 1000."
    },
    {
      question: "Calculate I: P=800, r=4.5%, t=1.",
      options: ["32", "34", "36", "38"],
      answer: "36",
      explanation: "STEP 1: 800 × 0.045 = 36."
    },
    {
      question: "If P=100, A=120, t=1, what is r?",
      options: ["10%", "20%", "15%", "25%"],
      answer: "20%",
      explanation: "STEP 1: I = A - P = 20.\nSTEP 2: r = 20 / (100 × 1) = 0.20 = 20%."
    },
    {
      question: "How long will it take for 500 to earn 50 interest at 2% rate?",
      options: ["2 years", "4 years", "5 years", "10 years"],
      answer: "5 years",
      explanation: "STEP 1: t = I / (Pr) = 50 / (500 × 0.02) = 50 / 10 = 5."
    },
    {
      question: "Find I: P=1200, r=5%, t=3 months.",
      options: ["15", "30", "60", "120"],
      answer: "15",
      explanation: "STEP 1: t = 3/12 = 0.25.\nSTEP 2: I = 1200 × 0.05 × 0.25 = 15."
    },
    {
      question: "Find the principal if the interest is 240, rate is 6%, and time is 2 years.",
      options: ["1000", "2000", "3000", "4000"],
      answer: "2000",
      explanation: "STEP 1: P = 240 / (0.06 × 2) = 240 / 0.12 = 2000."
    },
    {
      question: "Calculate I: P=5000, r=8%, t=0.5 years.",
      options: ["100", "200", "300", "400"],
      answer: "200",
      explanation: "STEP 1: 5000 × 0.08 × 0.5 = 200."
    },
    {
      question: "What is 1.5 years in months?",
      options: ["12", "15", "18", "24"],
      answer: "18",
      explanation: "STEP 1: 1.5 × 12 = 18."
    },
    {
      question: "If P=2000 and A=2200 after 1 year, what is r?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: I = 200.\nSTEP 2: r = 200 / (2000 × 1) = 0.10."
    },
    {
      question: "Find I: P=360, r=5%, t=4 months.",
      options: ["4", "5", "6", "12"],
      answer: "6",
      explanation: "STEP 1: t = 4/12 = 1/3.\nSTEP 2: I = 360 × 0.05 × (1/3) = 6."
    },
    {
      question: "P=1500, r=4%, t=2.5 years. Find I.",
      options: ["100", "125", "150", "175"],
      answer: "150",
      explanation: "STEP 1: 1500 × 0.04 × 2.5 = 150."
    },
    {
      question: "Find r: I=75, P=500, t=3.",
      options: ["3%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: r = 75 / (500 × 3) = 75 / 1500 = 0.05."
    },
    {
      question: "Find t: I=100, P=1000, r=5%.",
      options: ["1 year", "2 years", "3 years", "4 years"],
      answer: "2 years",
      explanation: "STEP 1: t = 100 / (1000 × 0.05) = 100 / 50 = 2."
    },
    {
      question: "A loan of 5000 earns 250 in 6 months. What is the annual rate?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: t = 0.5.\nSTEP 2: r = 250 / (5000 × 0.5) = 250 / 2500 = 0.10."
    },
    {
      question: "If P=600 and the amount A=672 after 2 years, find r.",
      options: ["4%", "5%", "6%", "7%"],
      answer: "6%",
      explanation: "STEP 1: I = 72.\nSTEP 2: r = 72 / (600 × 2) = 72 / 1200 = 0.06."
    },
    {
      question: "Calculate I: P=2500, r=10%, t=9 months.",
      options: ["150", "175", "187.5", "200"],
      answer: "187.5",
      explanation: "STEP 1: t = 9/12 = 0.75.\nSTEP 2: I = 2500 × 0.10 × 0.75 = 187.5."
    },
    {
      question: "Find P: I=120, r=4%, t=3.",
      options: ["500", "800", "1000", "1200"],
      answer: "1000",
      explanation: "STEP 1: P = 120 / (0.04 × 3) = 120 / 0.12 = 1000."
    },
    {
      question: "If I=15, r=5%, t=1, find P.",
      options: ["150", "200", "300", "350"],
      answer: "300",
      explanation: "STEP 1: P = 15 / 0.05 = 300."
    },
    {
      question: "Find the amount A: P=200, r=7%, t=5.",
      options: ["250", "260", "270", "280"],
      answer: "270",
      explanation: "STEP 1: I = 200 × 0.07 × 5 = 70.\nSTEP 2: A = 270."
    },
    {
      question: "What is 4 months in decimal years?",
      options: ["0.25", "0.33", "0.4", "0.5"],
      answer: "0.33",
      explanation: "STEP 1: 4/12 = 1/3 = approx 0.33."
    },
    {
      question: "Find t: I=36, P=300, r=4%.",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "STEP 1: t = 36 / (300 × 0.04) = 36 / 12 = 3."
    },
    {
      question: "Find I: P=8000, r=12.5%, t=1.",
      options: ["800", "900", "1000", "1200"],
      answer: "1000",
      explanation: "STEP 1: 12.5% = 0.125.\nSTEP 2: 8000 × 0.125 = 1000."
    },
    {
      question: "If P=1000 and r=5%, how much is the interest per month?",
      options: ["4.16", "5", "50", "41.6"],
      answer: "4.16",
      explanation: "STEP 1: Yearly interest = 50.\nSTEP 2: Monthly = 50 / 12 = 4.166..."
    },
    {
      question: "Which gives 120 interest: 1000 at 12% for 1 year OR 2000 at 6% for 1 year?",
      options: ["First", "Second", "Both", "Neither"],
      answer: "Both",
      explanation: "STEP 1: 1000×0.12 = 120.\nSTEP 2: 2000×0.06 = 120."
    },
    {
      question: "Find P if Amount=1100, Interest=100.",
      options: ["900", "1000", "1200", "100"],
      answer: "1000",
      explanation: "STEP 1: P = A - I = 1100 - 100 = 1000."
    },
    {
      question: "Calculate I: P=450, r=2%, t=2.",
      options: ["9", "18", "27", "36"],
      answer: "18",
      explanation: "STEP 1: 450 × 0.02 × 2 = 18."
    },
    {
      question: "Find r: I=90, P=600, t=3.",
      options: ["3%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: r = 90 / (600 × 3) = 90 / 1800 = 0.05."
    },
    {
      question: "Calculate I: P=2400, r=5%, t=30 months.",
      options: ["200", "250", "300", "350"],
      answer: "300",
      explanation: "STEP 1: t = 30/12 = 2.5.\nSTEP 2: I = 2400 × 0.05 × 2.5 = 300."
    },
    {
      question: "If I=1, P=100, t=1, find r.",
      options: ["0.1%", "1%", "10%", "100%"],
      answer: "1%",
      explanation: "STEP 1: r = 1 / 100 = 0.01."
    },
    {
      question: "Find t: I=200, P=2000, r=5%.",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "STEP 1: t = 200 / (2000 × 0.05) = 200 / 100 = 2."
    },
    {
      question: "Find Amount: P=5000, r=6%, t=3.",
      options: ["900", "5900", "6000", "6900"],
      answer: "5900",
      explanation: "STEP 1: I = 5000 × 0.06 × 3 = 900.\nSTEP 2: A = 5900."
    },
    {
      question: "If I=500, t=2, r=10%, find P.",
      options: ["2000", "2500", "3000", "3500"],
      answer: "2500",
      explanation: "STEP 1: P = 500 / (2 × 0.10) = 500 / 0.2 = 2500."
    },
    {
      question: "Calculate I: P=3300, r=3.3%, t=1. (Approx)",
      options: ["100", "108.9", "110", "120"],
      answer: "108.9",
      explanation: "STEP 1: 3300 × 0.033 = 108.9."
    },
    {
      question: "Find r: P=100, I=10, t=0.5 (6 months).",
      options: ["10%", "20%", "5%", "15%"],
      answer: "20%",
      explanation: "STEP 1: r = 10 / (100 × 0.5) = 10 / 50 = 0.20."
    },
    {
      question: "P=1250, r=8%, t=1.5. Find I.",
      options: ["100", "125", "150", "175"],
      answer: "150",
      explanation: "STEP 1: 1250 × 0.08 × 1.5 = 150."
    },
    {
      question: "Find P: I=2, r=1%, t=2.",
      options: ["50", "100", "150", "200"],
      answer: "100",
      explanation: "STEP 1: P = 2 / (0.01 × 2) = 2 / 0.02 = 100."
    },
    {
      question: "What is 8% of 5000 for 3 years?",
      options: ["400", "800", "1200", "1600"],
      answer: "1200",
      explanation: "STEP 1: 5000 × 0.08 × 3 = 1200."
    },
    {
      question: "Calculate I: P=640, r=2.5%, t=2.",
      options: ["16", "32", "48", "64"],
      answer: "32",
      explanation: "STEP 1: 640 × 0.025 × 2 = 32."
    },
    {
      question: "Find Amount: P=800, r=5%, t=2.5.",
      options: ["100", "850", "900", "950"],
      answer: "900",
      explanation: "STEP 1: I = 800 × 0.05 × 2.5 = 100.\nSTEP 2: A = 800 + 100 = 900."
    },
    {
      question: "If r=10% and t=5, what fraction of P is the Interest?",
      options: ["1/5", "1/2", "1/10", "1/4"],
      answer: "1/2",
      explanation: "STEP 1: I = P × 0.10 × 5 = 0.50P.\nSTEP 2: 0.50 is 1/2."
    },
    {
      question: "Find I: P=10000, r=7.5%, t=1.",
      options: ["75", "750", "7500", "7.5"],
      answer: "750",
      explanation: "STEP 1: 10000 × 0.075 = 750."
    },
    {
      question: "If P=500 and Amount=600 after 4 years, find r.",
      options: ["3%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: I = 100.\nSTEP 2: r = 100 / (500 × 4) = 100 / 2000 = 0.05."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Exact/Ordinary Interest, Days, Algebra)
  // ==========================================
  advanced: [
    {
      question: "What is 'Ordinary Interest' based on in terms of days?",
      options: ["360 days", "365 days", "366 days", "300 days"],
      answer: "360 days",
      explanation: "STEP 1: Ordinary interest uses the Banker's Rule of 360 days per year."
    },
    {
      question: "What is 'Exact Interest' based on?",
      options: ["360 days", "365 days", "30 days/month", "12 months"],
      answer: "365 days",
      explanation: "STEP 1: Exact interest uses the exact number of days in a year (365 usually)."
    },
    {
      question: "Find Ordinary Interest: P=1000, r=10%, t=72 days.",
      options: ["20", "25", "50", "72"],
      answer: "20",
      explanation: "STEP 1: t = 72/360 = 0.2.\nSTEP 2: I = 1000 × 0.10 × 0.2 = 20."
    },
    {
      question: "Find Exact Interest: P=3650, r=10%, t=10 days.",
      options: ["10", "20", "36.5", "100"],
      answer: "10",
      explanation: "STEP 1: t = 10/365.\nSTEP 2: I = 3650 × 0.10 × (10/365) = 365 × (10/365) = 10."
    },
    {
      question: "At what rate will a sum of money double itself in 10 years?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: For money to double, Interest (I) must equal Principal (P).\nSTEP 2: P = P × r × 10\nSTEP 3: 1 = 10r → r = 1/10 = 10%."
    },
    {
      question: "At what rate will a sum double in 20 years?",
      options: ["2%", "4%", "5%", "8%"],
      answer: "5%",
      explanation: "STEP 1: I = P.\nSTEP 2: P = P × r × 20 → 1 = 20r → r = 1/20 = 0.05."
    },
    {
      question: "How many years for money to triple at 10%?",
      options: ["10", "20", "30", "40"],
      answer: "20",
      explanation: "STEP 1: For money to triple, A = 3P, so I = 2P.\nSTEP 2: 2P = P × 0.10 × t\nSTEP 3: 2 = 0.10t → t = 20."
    },
    {
      question: "Find Ordinary Interest: P=3600, r=5%, t=60 days.",
      options: ["10", "20", "30", "40"],
      answer: "30",
      explanation: "STEP 1: t = 60/360 = 1/6.\nSTEP 2: I = 3600 × 0.05 × (1/6) = 180 × (1/6) = 30."
    },
    {
      question: "A principal earns 1/4 of itself in 5 years. Find r.",
      options: ["2%", "4%", "5%", "20%"],
      answer: "5%",
      explanation: "STEP 1: I = 0.25P.\nSTEP 2: 0.25P = P × r × 5\nSTEP 3: 0.25 = 5r → r = 0.05."
    },
    {
      question: "Which yields more: 6% exact interest or 6% ordinary interest?",
      options: ["Exact", "Ordinary", "Same", "Depends on P"],
      answer: "Ordinary",
      explanation: "STEP 1: Ordinary divides by 360, Exact by 365.\nSTEP 2: Dividing by a smaller number (360) yields a larger result."
    },
    {
      question: "P=1000, r=6%. Find interest for 1 month.",
      options: ["5", "6", "10", "60"],
      answer: "5",
      explanation: "STEP 1: Yearly I = 60.\nSTEP 2: Monthly = 60/12 = 5."
    },
    {
      question: "A certain sum becomes 500 in 2 years and 600 in 4 years. What is the annual interest?",
      options: ["25", "50", "75", "100"],
      answer: "50",
      explanation: "STEP 1: Diff in years = 2. Diff in Amount = 100.\nSTEP 2: Interest for 2 years = 100.\nSTEP 3: Annual Interest = 50."
    },
    {
      question: "Using the previous data (500 in 2 yrs, 600 in 4 yrs), what is the Principal?",
      options: ["300", "400", "450", "500"],
      answer: "400",
      explanation: "STEP 1: Annual I = 50. I for 2 years = 100.\nSTEP 2: P = Amount(2yrs) - I(2yrs) = 500 - 100 = 400."
    },
    {
      question: "Find Ordinary Interest: P=5000, r=9%, t=120 days.",
      options: ["100", "125", "150", "175"],
      answer: "150",
      explanation: "STEP 1: t = 120/360 = 1/3.\nSTEP 2: I = 5000 × 0.09 × 1/3 = 150."
    },
    {
      question: "If r increases from 4% to 5%, how much more interest on 1000 for 1 year?",
      options: ["5", "10", "15", "20"],
      answer: "10",
      explanation: "STEP 1: Diff in rate = 1%.\nSTEP 2: 1000 × 0.01 = 10."
    },
    {
      question: "Find t in days (Ordinary) if I=10, P=3600, r=10%.",
      options: ["1", "5", "10", "15"],
      answer: "10",
      explanation: "STEP 1: I = Pr(days/360) → 10 = 3600 × 0.10 × (d/360).\nSTEP 2: 10 = 360 × (d/360) → 10 = d."
    },
    {
      question: "Find I: P=1460, r=10%, t=100 days (Exact Interest).",
      options: ["40", "50", "400", "500"],
      answer: "40",
      explanation: "STEP 1: I = 1460 × 0.10 × (100/365).\nSTEP 2: 1460/365 = 4.\nSTEP 3: 4 × 0.10 × 100 = 40."
    },
    {
      question: "How much must be invested today at 5% to have 1100 in 2 years?",
      options: ["900", "950", "1000", "1050"],
      answer: "1000",
      explanation: "STEP 1: A = P(1 + rt)\nSTEP 2: 1100 = P(1 + 0.05×2) = P(1.10)\nSTEP 3: P = 1100 / 1.1 = 1000."
    },
    {
      question: "Find r: P triples in 25 years.",
      options: ["4%", "6%", "8%", "10%"],
      answer: "8%",
      explanation: "STEP 1: I = 2P (tripled means A=3P).\nSTEP 2: 2P = P × r × 25 → 2 = 25r\nSTEP 3: r = 2/25 = 0.08."
    },
    {
      question: "Calculate the exact number of days from Jan 1, 2023 to Jan 31, 2023.",
      options: ["29", "30", "31", "32"],
      answer: "30",
      explanation: "STEP 1: 31 - 1 = 30 days."
    },
    {
      question: "Approximate time (30 days/month) from Jan 1 to March 1.",
      options: ["58", "59", "60", "62"],
      answer: "60",
      explanation: "STEP 1: 2 full months (Jan to Feb, Feb to March) × 30 = 60."
    },
    {
      question: "If P earns 40% interest in 4 years, what is the rate?",
      options: ["8%", "10%", "12%", "15%"],
      answer: "10%",
      explanation: "STEP 1: I = 0.40P.\nSTEP 2: 0.40 = r × 4 → r = 0.10."
    },
    {
      question: "P=2000, r=4.5%, t=8 months.",
      options: ["40", "50", "60", "70"],
      answer: "60",
      explanation: "STEP 1: t = 8/12 = 2/3.\nSTEP 2: 2000 × 0.045 × 2/3 = 90 × 2/3 = 60."
    },
    {
      question: "Find the present value of 1300 due in 1 year at 30% simple interest.",
      options: ["1000", "1100", "1200", "900"],
      answer: "1000",
      explanation: "STEP 1: A = P(1+rt) → 1300 = P(1 + 0.30×1).\nSTEP 2: P = 1300 / 1.3 = 1000."
    },
    {
      question: "Interest on 1000 for 146 days at 5% (Exact).",
      options: ["10", "20", "30", "40"],
      answer: "20",
      explanation: "STEP 1: t = 146/365 = 0.4.\nSTEP 2: 1000 × 0.05 × 0.4 = 20."
    },
    {
      question: "What principal yields 50 interest in 6 months at 5%?",
      options: ["1000", "2000", "3000", "4000"],
      answer: "2000",
      explanation: "STEP 1: 50 = P × 0.05 × 0.5\nSTEP 2: 50 = P × 0.025\nSTEP 3: P = 50 / 0.025 = 2000."
    },
    {
      question: "Rate for P to quadruple in 30 years?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: Quadruple means A=4P, so I=3P.\nSTEP 2: 3 = r × 30 → r = 3/30 = 0.10."
    },
    {
      question: "Two investments: 1000 at 5% and 2000 at x%. Total interest is 150 in 1 year. Find x.",
      options: ["3%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: I1 = 1000×0.05 = 50.\nSTEP 2: Total I = 150, so I2 = 100.\nSTEP 3: 100 = 2000 × x → x = 100/2000 = 0.05."
    },
    {
      question: "Difference between Ordinary and Exact interest on 7300 at 5% for 100 days.",
      options: ["1", "1.37", "5", "10"],
      answer: "1.37",
      explanation: "STEP 1: Ordinary: 7300×0.05×(100/360) = 101.38.\nSTEP 2: Exact: 7300×0.05×(100/365) = 100.\nSTEP 3: Diff = 1.38 (approx 1.37 in exact math)."
    },
    {
      question: "Simple interest on a sum for 5 years is 1/5 of the sum. The rate is:",
      options: ["2%", "4%", "5%", "10%"],
      answer: "4%",
      explanation: "STEP 1: I = 0.2P.\nSTEP 2: 0.2 = r × 5 → r = 0.2/5 = 0.04."
    },
    {
      question: "Amount after 5 years is 5200. P=4000. Find r.",
      options: ["4%", "5%", "6%", "7%"],
      answer: "6%",
      explanation: "STEP 1: I = 1200.\nSTEP 2: 1200 = 4000 × r × 5\nSTEP 3: 1200 = 20000r → r = 0.06."
    },
    {
      question: "P=7300, r=10%, t=1 day (Exact).",
      options: ["1", "2", "5", "10"],
      answer: "2",
      explanation: "STEP 1: 7300 × 0.10 × (1/365) = 730 / 365 = 2."
    },
    {
      question: "If P=10000, r=12%, what is the daily interest using ordinary interest?",
      options: ["3.33", "3.66", "4.00", "4.33"],
      answer: "3.33",
      explanation: "STEP 1: 10000 × 0.12 / 360 = 1200 / 360 = 3.33."
    },
    {
      question: "A sum at 10% amounts to 3000 in 5 years. Find Sum.",
      options: ["1500", "2000", "2500", "1000"],
      answer: "2000",
      explanation: "STEP 1: 3000 = P(1 + 0.10×5) = P(1.5).\nSTEP 2: P = 3000 / 1.5 = 2000."
    },
    {
      question: "How many days (Ordinary) for 1000 to earn 20 at 6%?",
      options: ["60", "90", "120", "150"],
      answer: "120",
      explanation: "STEP 1: 20 = 1000 × 0.06 × (d/360).\nSTEP 2: 20 = 60 × d/360 → 20 = d/6 → d = 120."
    },
    {
      question: "P=1200, r=5/2 %, t=4. Find I.",
      options: ["60", "100", "120", "240"],
      answer: "120",
      explanation: "STEP 1: r = 2.5% = 0.025.\nSTEP 2: 1200 × 0.025 × 4 = 1200 × 0.1 = 120."
    },
    {
      question: "Which P produces 100 interest/year at 2%?",
      options: ["2000", "3000", "4000", "5000"],
      answer: "5000",
      explanation: "STEP 1: 100 = P × 0.02.\nSTEP 2: P = 100 / 0.02 = 5000."
    },
    {
      question: "P=21900, r=5%, t=10 days (Exact).",
      options: ["10", "20", "30", "40"],
      answer: "30",
      explanation: "STEP 1: 21900 × 0.05 × (10/365) = 1095 × 10 / 365 = 30."
    },
    {
      question: "Sum of money becomes 3 times itself in 20 years. Find rate.",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: I = 2P.\nSTEP 2: 2 = r × 20 → r = 0.10."
    },
    {
      question: "Calculate I: P=1500, r=4%, t=146 days (Exact).",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "STEP 1: t = 146/365 = 0.4.\nSTEP 2: 1500 × 0.04 × 0.4 = 24."
    },
    {
      question: "Find A: P=2500, r=6%, t=8 months.",
      options: ["2550", "2600", "2650", "2700"],
      answer: "2600",
      explanation: "STEP 1: I = 2500 × 0.06 × 8/12 = 100.\nSTEP 2: A = 2600."
    },
    {
      question: "P=1000, I=100, t=2. Rate = ?",
      options: ["2%", "5%", "10%", "20%"],
      answer: "5%",
      explanation: "STEP 1: 100 = 1000 × r × 2 = 2000r.\nSTEP 2: r = 100/2000 = 0.05."
    },
    {
      question: "Amount=1320, P=1200, t=2. Find r.",
      options: ["2%", "4%", "5%", "6%"],
      answer: "5%",
      explanation: "STEP 1: I = 120.\nSTEP 2: 120 = 1200 × r × 2 = 2400r.\nSTEP 3: r = 0.05."
    },
    {
      question: "P=5000, r=12%, t=73 days (Exact).",
      options: ["60", "120", "150", "200"],
      answer: "120",
      explanation: "STEP 1: t = 73/365 = 0.2.\nSTEP 2: 5000 × 0.12 × 0.2 = 120."
    },
    {
      question: "Interest on 1000 for 180 days at 4% (Ordinary).",
      options: ["10", "20", "30", "40"],
      answer: "20",
      explanation: "STEP 1: t = 180/360 = 0.5.\nSTEP 2: 1000 × 0.04 × 0.5 = 20."
    },
    {
      question: "If P doubles in 5 years, how many years to quadruple?",
      options: ["10", "15", "20", "25"],
      answer: "15",
      explanation: "STEP 1: Rate to double: 1 = 5r → r=20%.\nSTEP 2: To quadruple (I=3P): 3 = 0.20t → t = 15."
    },
    {
      question: "What is 7.5% in decimal form?",
      options: ["0.75", "0.075", "7.5", "0.0075"],
      answer: "0.075",
      explanation: "STEP 1: 7.5 / 100 = 0.075."
    },
    {
      question: "Find P if I=150, r=5%, t=0.5 years.",
      options: ["3000", "4500", "6000", "7500"],
      answer: "6000",
      explanation: "STEP 1: P = 150 / (0.05 × 0.5) = 150 / 0.025 = 6000."
    },
    {
      question: "How long for 800 to become 880 at 5%?",
      options: ["1 year", "2 years", "3 years", "4 years"],
      answer: "2 years",
      explanation: "STEP 1: I = 80.\nSTEP 2: 80 = 800 × 0.05 × t = 40t.\nSTEP 3: t = 2."
    },
    {
  question: "A sum amounts to 1200 in 2 years at 10%. Principal?",
  options: ["1000", "1100", "1200", "900"],
  answer: "1000",
  explanation: "STEP 1: A = P(1 + rt). 1200 = P(1 + 0.10×2) = 1.2P.\nSTEP 2: P = 1200 / 1.2 = 1000."
}
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – Multi-step, Comparisons, Logic Puzzles)
  // ==========================================
  expert: [
    {
      question: "A sum amounts to 2400 in 3 years and 3000 in 5 years. Find the Principal.",
      options: ["1000", "1500", "1800", "2000"],
      answer: "1500",
      explanation: "STEP 1: Difference in time = 2 years. Difference in amount = 600.\nSTEP 2: Interest for 2 years = 600. I/year = 300.\nSTEP 3: In 3 years, I = 900.\nSTEP 4: P = 2400 - 900 = 1500."
    },
    {
      question: "Using the previous data (Amount 2400 in 3yrs, 3000 in 5yrs), find the Rate.",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "STEP 1: P = 1500. Annual I = 300.\nSTEP 2: r = 300 / 1500 = 0.20 = 20%."
    },
    {
      question: "A sum was put at simple interest at a certain rate for 3 years. Had it been put at 2% higher rate, it would have fetched 360 more. Find the sum.",
      options: ["4000", "5000", "6000", "7000"],
      answer: "6000",
      explanation: "STEP 1: Extra Interest = P × (Extra Rate) × Time.\nSTEP 2: 360 = P × 0.02 × 3 = P × 0.06.\nSTEP 3: P = 360 / 0.06 = 6000."
    },
    {
      question: "If A invests 2000 at 5% and B invests 1000 at 10%, who earns more interest in 10 years?",
      options: ["A", "B", "Equal", "Cannot Determine"],
      answer: "Equal",
      explanation: "STEP 1: A: 2000×0.05×10 = 1000.\nSTEP 2: B: 1000×0.10×10 = 1000."
    },
    {
      question: "A father left a will of 100,000 between two sons aged 12 and 14 so that they will receive equal amounts at age 18 if invested at 5% simple interest. How much is the share of the older son?",
      options: ["48000", "50000", "52000", "54000"],
      answer: "52000",
      explanation: "STEP 1: Let x be the share of the younger son (12 years old). His money will earn interest for 6 years.\nSTEP 2: Let y be the share of the older son (14 years old). His money will earn interest for 4 years.\nSTEP 3: At age 18, younger's amount: x(1 + 0.05×6) = 1.30x.\nSTEP 4: Older’s amount: y(1 + 0.05×4) = 1.20y.\nSTEP 5: Condition: 1.30x = 1.20y and x + y = 100000.\nSTEP 6: From 1.30x = 1.20y → y = (13/12)x.\nSTEP 7: Substitute: x + (13/12)x = 100000 → (25/12)x = 100000 → x = 48000.\nSTEP 8: Then y = 100000 − 48000 = 52000. So the older son’s share is 52,000."
    },

    {
      question: "At what rate percent per annum will a sum of money double in 16 years?",
      options: ["6%", "6.25%", "6.5%", "7%"],
      answer: "6.25%",
      explanation: "STEP 1: 1 = 16r.\nSTEP 2: r = 1/16 = 0.0625."
    },
    {
      question: "The simple interest on a sum for 8 years is 40% of the sum. The rate is:",
      options: ["4%", "5%", "6%", "8%"],
      answer: "5%",
      explanation: "STEP 1: 0.40P = P × r × 8.\nSTEP 2: 0.40 = 8r → r = 0.05."
    },
    {
      question: "P amounts to 708 in 3 years and 764 in 4 years. P = ?",
      options: ["500", "540", "600", "640"],
      answer: "540",
      explanation: "STEP 1: 1 yr Interest = 764 - 708 = 56.\nSTEP 2: 3 yrs Interest = 168.\nSTEP 3: P = 708 - 168 = 540."
    },
    {
      question: "In how many years will the simple interest on a sum be equal to the principal at 12.5%?",
      options: ["6", "7", "8", "10"],
      answer: "8",
      explanation: "STEP 1: I = P. Rate = 0.125.\nSTEP 2: 1 = 0.125t → t = 1 / 0.125 = 8."
    },
    {
      question: "A sum of 12,500 amounts to 15,500 in 4 years. The rate is:",
      options: ["3%", "4%", "5%", "6%"],
      answer: "6%",
      explanation: "STEP 1: I = 3000.\nSTEP 2: 3000 = 12500 × r × 4 = 50000r.\nSTEP 3: r = 3000/50000 = 0.06."
    },
    {
      question: "P=8500, r=4.5%, t=6 months. A=?",
      options: ["8691.25", "8700", "8550", "8650"],
      answer: "8691.25",
      explanation: "STEP 1: I = 8500 × 0.045 × 0.5 = 191.25.\nSTEP 2: A = 8691.25."
    },
    {
      question: "Two equal sums are lent at 8% and 4% respectively. The first is recovered 2 years earlier than the second and amounts are equal. Find time for second sum.",
      options: ["4", "5", "6", "8"],
      answer: "4",
      explanation: "STEP 1: P(1 + 0.08(t-2)) = P(1 + 0.04t).\nSTEP 2: 1 + 0.08t - 0.16 = 1 + 0.04t.\nSTEP 3: 0.04t = 0.16 → t = 4."
    },
    {
      question: "Rate is 10% for first 2 years, 15% for next 3 years. If interest on 1000 is calculated, what is Total Interest?",
      options: ["500", "650", "700", "750"],
      answer: "650",
      explanation: "STEP 1: First part: 1000×0.10×2 = 200.\nSTEP 2: Second part: 1000×0.15×3 = 450.\nSTEP 3: Total = 650."
    },
    {
      question: "What annual payment will discharge a debt of 6450 due in 4 years at 5% simple interest? (Annuity logic applied to SI loans - simplified: Sum of Amounts).",
      options: ["1000", "1500", "1600", "1800"],
      answer: "1500",
      explanation: "STEP 1: Let installment be x. Amounts at end: x + (x + x*0.05*1) + (x + x*0.05*2) + (x + x*0.05*3) = 6450. \nSTEP 2: 4x + x*0.05(6) = 6450. \nSTEP 3: 4.3x = 6450 → x = 1500."
    },
    {
      question: "Sum P invested at r% for 2 years. If invested at (r+3)%, it earns 72 more. Find P.",
      options: ["800", "1000", "1200", "1500"],
      answer: "1200",
      explanation: "STEP 1: Diff in I = P × 0.03 × 2 = 72.\nSTEP 2: P × 0.06 = 72.\nSTEP 3: P = 1200."
    },
    {
      question: "1/3 of a sum at 3%, 1/6 at 6% and rest at 8%. Total interest for 2 years is 600. Find sum.",
      options: ["4000", "5000", "6000", "10000"],
      answer: "5000",
      explanation: "STEP 1: Rest = 1 - 1/3 - 1/6 = 1/2.\nSTEP 2: P[(1/3*0.03 + 1/6*0.06 + 1/2*0.08) * 2] = 600.\nSTEP 3: P[0.01 + 0.01 + 0.04] * 2 = 600 -> P(0.12) = 600 -> P=5000."
    },
    {
      question: "P=4000. Part at 8%, part at 10%. Total interest in 1 yr is 352. Amount at 8%?",
      options: ["2000", "2200", "2400", "2600"],
      answer: "2400",
      explanation: "STEP 1: Let x at 8%. (4000-x) at 10%.\nSTEP 2: 0.08x + 0.10(4000-x) = 352.\nSTEP 3: 0.08x + 400 - 0.10x = 352 -> -0.02x = -48 -> x = 2400."
    },
    {
      question: "Time required for a sum to become 5 times itself at 16%?",
      options: ["20", "25", "30", "15"],
      answer: "25",
      explanation: "STEP 1: I = 4P.\nSTEP 2: 4 = 0.16t → t = 4/0.16 = 25."
    },
    {
      question: "If x is interest on y and y is interest on z (same r and t). Then relation is:",
      options: ["x² = yz", "y² = xz", "z² = xy", "x=y=z"],
      answer: "y² = xz",
      explanation: "STEP 1: x = yrt, y = zrt.\nSTEP 2: x/y = rt, y/z = rt.\nSTEP 3: x/y = y/z -> y² = xz."
    },
    {
      question: "Amount of 5000 in 6 months at 24% annual rate.",
      options: ["5200", "5400", "5600", "6000"],
      answer: "5600",
      explanation: "STEP 1: I = 5000 × 0.24 × 0.5 = 600.\nSTEP 2: A = 5600."
    },
    {
      question: "A money lender lends at 5% but pays 2% on savings. He gains 1500 in a year. If Capital = Savings, what is his Capital?",
      options: ["25000", "50000", "75000", "30000"],
      answer: "50000",
      explanation: "STEP 1: Gain = 5% - 2% = 3%.\nSTEP 2: 0.03C = 1500.\nSTEP 3: C = 50000."
    },
    {
      question: "If 400 amounts to 480 in 4 years, what will it amount to if rate is increased by 2%?",
      options: ["500", "512", "520", "550"],
      answer: "512",
      explanation: "STEP 1: Old Rate: I=80, 80=1600r -> r=5%.\nSTEP 2: New Rate: 7%. I = 400*0.07*4 = 112.\nSTEP 3: A = 512."
    },
    {
      question: "Interest on 800 for 3 years is same as on 600 for x years at same rate. Find x.",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "STEP 1: 800*3 = 600*x.\nSTEP 2: 2400 = 600x -> x=4."
    },
    {
      question: "A sum doubles in 8 years. When will it become 4 times?",
      options: ["16", "24", "32", "12"],
      answer: "24",
      explanation: "STEP 1: Double: I=P in 8 yrs. Rate = 12.5%.\nSTEP 2: Quadruple: I=3P. 3 = 0.125t -> t = 24."
    },
    {
      question: "Find P if I=1 and t=1 day (Ordinary) at 5%.",
      options: ["7200", "7300", "3600", "3650"],
      answer: "7200",
      explanation: "STEP 1: 1 = P × 0.05 × (1/360).\nSTEP 2: P = 1 / (0.05/360) = 7200."
    },
    {
      question: "Amount of 2000 at 5% for 73 days (Exact).",
      options: ["2010", "2020", "2030", "2040"],
      answer: "2020",
      explanation: "STEP 1: I = 2000 × 0.05 × 0.2 = 20.\nSTEP 2: A = 2020."
    },
    {
      question: "Sum P earns interest equal to P in 10 years. Rate?",
      options: ["5%", "10%", "15%", "100%"],
      answer: "10%",
      explanation: "STEP 1: I=P means double. 10 years -> 10%."
    },
    {
      question: "Interest on P at r% for 2 years is I. Interest on 2P at r% for 1 year is?",
      options: ["I", "2I", "I/2", "I^2"],
      answer: "I",
      explanation: "STEP 1: Old: P*2*r = I.\nSTEP 2: New: 2P*1*r = 2Pr = I."
    },
    {
      question: "If 2000 amounts to 2600 in 5 years, rate?",
      options: ["4%", "5%", "6%", "7%"],
      answer: "6%",
      explanation: "STEP 1: I=600.\nSTEP 2: 600 = 2000 × r × 5 = 10000r -> r=0.06."
    },
    {
      question: "Divide 1500 into two parts such that simple interest on one at 10% for 5 years equals that on other at 12.5% for 4 years.",
      options: ["1000:500", "750:750", "800:700", "900:600"],
      answer: "750:750",
      explanation: "STEP 1: x(0.10)(5) = (1500-x)(0.125)(4).\nSTEP 2: 0.5x = (1500-x)(0.5).\nSTEP 3: x = 1500-x -> 2x=1500 -> x=750."
    },
    {
      question: "Rate which yields 72 interest on 800 in 2 years.",
      options: ["3%", "4.5%", "5%", "6%"],
      answer: "4.5%",
      explanation: "STEP 1: 72 = 800 × r × 2 = 1600r.\nSTEP 2: r = 72/1600 = 0.045."
    },
    {
      question: "A sum becomes 1.5 times itself in 5 years. Rate?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "10%",
      explanation: "STEP 1: A=1.5P, I=0.5P.\nSTEP 2: 0.5 = 5r -> r=0.10."
    },
    {
      question: "What sum will give 1 peso interest per day at 5% (Ordinary)?",
      options: ["7200", "7300", "3600", "3650"],
      answer: "7200",
      explanation: "STEP 1: Annual I = 360.\nSTEP 2: 360 = P × 0.05 -> P = 7200."
    },
    {
      question: "Ratio of Principal to Amount is 4:5 in 2 years. Rate?",
      options: ["10%", "12.5%", "15%", "20%"],
      answer: "12.5%",
      explanation: "STEP 1: Let P=4, A=5. I=1.\nSTEP 2: 1 = 4 × r × 2 = 8r.\nSTEP 3: r = 1/8 = 0.125."
    },
    {
      question: "Which term is NOT constant in Simple Interest calculations?",
      options: ["Principal", "Accumulated Interest", "Rate", "Initial Amount"],
      answer: "Accumulated Interest",
      explanation: "STEP 1: P, r are constant parameters. Total interest grows with time."
    },
    {
      question: "If interest is calculated on 365 days but denominator used is 360, the interest is:",
      options: ["Banker's Rule", "Underestimated", "Overestimated", "Exact"],
      answer: "Overestimated",
      explanation: "STEP 1: Dividing by 360 (smaller) gives a larger interest value."
    },
    {
      question: "P=500, r=6%. Find time to earn 150.",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "STEP 1: 150 = 500 × 0.06 × t = 30t -> t=5."
    },
    {
      question: "Value of investment after 1 year is 1100. After 2 years is 1200. P?",
      options: ["900", "1000", "1050", "800"],
      answer: "1000",
      explanation: "STEP 1: I for 1 year = 100.\nSTEP 2: P = 1100 - 100 = 1000."
    },
    {
      question: "If 1000 amounts to 1100 at r% in 1 year, what will 2000 amount to at same rate in 1 year?",
      options: ["2100", "2200", "2300", "2400"],
      answer: "2200",
      explanation: "STEP 1: r = 10%.\nSTEP 2: 2000 × 1.10 = 2200."
    },
    {
      question: "A borrowed 800 at 6% and B borrowed 600 at 10%. In how many years will they have equal debts (Amounts)?",
      options: ["10", "15", "16 2/3", "20"],
      answer: "16 2/3",
      explanation: "STEP 1: 800 + 48t = 600 + 60t.\nSTEP 2: 200 = 12t -> t = 16.66."
    },
    {
      question: "Effective rate of interest equivalent to 12% nominal?",
      options: ["12%", "12.36%", "Depends on compound", "Same for SI"],
      answer: "Same for SI",
      explanation: "STEP 1: For Simple Interest, effective rate is the same as nominal rate."
    },
    {
      question: "P=1200, A=1800, r=5%. Find t.",
      options: ["5", "8", "10", "12"],
      answer: "10",
      explanation: "STEP 1: I=600.\nSTEP 2: 600 = 1200 × 0.05 × t = 60t -> t=10."
    },
    {
      question: "Which variable is represented by 'A' in financial formulas?",
      options: ["Area", "Amount", "Annual", "Asset"],
      answer: "Amount",
      explanation: "STEP 1: A stands for Final Amount or Maturity Value."
    },
    {
      question: "P=3000, r=4%, t=200 days (Ordinary).",
      options: ["60", "66.67", "70", "80"],
      answer: "66.67",
      explanation: "STEP 1: 3000 × 0.04 × 200/360 = 120 × 0.555 = 66.67."
    },
    {
      question: "If P=1, r=100%, t=1, A=?",
      options: ["1", "2", "3", "0"],
      answer: "2",
      explanation: "STEP 1: I = 1×1×1 = 1.\nSTEP 2: A = 1+1 = 2."
    },
    {
      question: "Find P if I=250, r=10%, t=2.5.",
      options: ["500", "750", "1000", "1250"],
      answer: "1000",
      explanation: "STEP 1: P = 250 / (0.10 × 2.5) = 250 / 0.25 = 1000."
    },
    {
      question: "In simple interest, if time is given in weeks, divide by:",
      options: ["4", "12", "52", "365"],
      answer: "52",
      explanation: "STEP 1: There are 52 weeks in a year."
    },
    {
      question: "P=1000, r=5%, t=10 weeks. I=?",
      options: ["9.6", "10", "50", "5"],
      answer: "9.6",
      explanation: "STEP 1: 1000 × 0.05 × 10/52 = 50 / 5.2 = 9.61 approx."
    },
    {
      question: "A sum amounts to 400 in 3 years and 500 in 5 years. Rate?",
      options: ["10%", "20%", "25%", "30%"],
      answer: "20%",
      explanation: "STEP 1: Diff 2 yrs = 100. I/yr = 50.\nSTEP 2: P = 400 - 150 = 250.\nSTEP 3: r = 50/250 = 0.20."
    },
    {
      question: "True or False: Simple Interest grows exponentially.",
      options: ["True", "False"],
      answer: "False",
      explanation: "STEP 1: Simple interest grows linearly (arithmetic progression)."
    }
  ]
};
