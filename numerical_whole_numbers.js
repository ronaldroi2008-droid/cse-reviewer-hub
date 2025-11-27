// questions/numerical_whole_numbers.js

// Make sure the global object exists
window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

// WHOLE NUMBERS & OPERATIONS
window.NUMERICAL_QUESTION_BANK["whole_numbers"] = {
  beginner: [
    {
      question: "What is 37 + 25?",
      options: ["52", "60", "62", "63"],
      answer: "62",
      explanation:
        "Add the ones first: 7 + 5 = 12 (write 2, carry 1). Then add the tens: 3 + 2 + 1 = 6, so the sum is 62."
    },
    {
      question: "What is 64 − 19?",
      options: ["45", "46", "47", "54"],
      answer: "45",
      explanation:
        "Borrow from the tens: 64 − 19 → (5 tens, 14 ones). Then 14 − 9 = 5 and 5 − 1 = 4, so the answer is 45."
    },
    {
      question: "Which number is an even number?",
      options: ["39", "47", "52", "75"],
      answer: "52",
      explanation:
        "Even numbers end in 0, 2, 4, 6, or 8. Only 52 ends with 2."
    },
    {
      question: "What is 9 × 7?",
      options: ["54", "56", "63", "72"],
      answer: "63",
      explanation:
        "Think of 7 groups of 9 or 9 groups of 7. 7 × 9 = 63."
    },
    {
      question: "Which symbol makes the statement true: 45 __ 39?",
      options: [">", "<", "=", "≤"],
      answer: ">",
      explanation:
        "45 is greater than 39, so we use the symbol >."
    }
  ],

  intermediate: [
    {
      question: "Evaluate: 15 × 4 + 8.",
      options: ["68", "72", "80", "92"],
      answer: "68",
      explanation:
        "Follow order of operations: multiply first → 15 × 4 = 60, then add 8 → 60 + 8 = 68."
    },
    {
      question: "What is 420 ÷ 7?",
      options: ["50", "55", "60", "65"],
      answer: "60",
      explanation:
        "42 ÷ 7 = 6, then add one zero → 60."
    },
    {
      question: "Which of the following is a multiple of both 3 and 4?",
      options: ["10", "12", "18", "24"],
      answer: "12",
      explanation:
        "Multiples of 3: 3, 6, 9, 12... Multiples of 4: 4, 8, 12... The first common multiple in the choices is 12."
    }
  ],

  advanced: [
    {
      question: "Evaluate: 120 − 3 × 16.",
      options: ["72", "80", "120", "168"],
      answer: "72",
      explanation:
        "Multiply first: 3 × 16 = 48. Then subtract: 120 − 48 = 72."
    },
    {
      question: "Evaluate: (45 + 35) ÷ 5.",
      options: ["12", "14", "15", "16"],
      answer: "16",
      explanation:
        "Add inside the parentheses first: 45 + 35 = 80. Then divide: 80 ÷ 5 = 16."
    },
    {
      question: "The product of two numbers is 96 and one factor is 12. What is the other factor?",
      options: ["6", "8", "10", "12"],
      answer: "8",
      explanation:
        "Use division: other factor = 96 ÷ 12 = 8."
    }
  ],

  expert: [
    {
      question: "A number is 9 more than twice 14. What is the number?",
      options: ["23", "28", "37", "41"],
      answer: "37",
      explanation:
        "Twice 14 is 28. Then add 9: 28 + 9 = 37."
    },
    {
      question: "The sum of three consecutive whole numbers is 48. What is the middle number?",
      options: ["15", "16", "17", "18"],
      answer: "16",
      explanation:
        "Let the three numbers be n − 1, n, n + 1. Their sum is 3n. So 3n = 48 → n = 16. The middle number is 16."
    },
    {
      question: "A farmer packs eggs in trays of 12. If he has 278 eggs, how many full trays can he make?",
      options: ["21", "22", "23", "24"],
      answer: "23",
      explanation:
        "Divide 278 by 12 → 12 × 23 = 276, remainder 2. So he can make 23 full trays."
    }
  ]
};
