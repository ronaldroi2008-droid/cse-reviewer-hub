// questions/numerical_whole_numbers.js

// Make sure the global container exists
window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

// ==========================================
// WHOLE NUMBERS – SAMPLE QUESTIONS
// ==========================================
window.NUMERICAL_QUESTION_BANK["whole_numbers"] = {
  beginner: [
    {
      question: "What is 37 + 25?",
      options: ["52", "60", "62", "63"],
      answer: "62",
      explanation:
        "Add the ones first: 7 + 5 = 12 (write 2, carry 1). Then add the tens: 3 + 2 + 1 (carried) = 6, so the sum is 62."
    },
    {
      question: "What is 120 − 45?",
      options: ["65", "70", "75", "85"],
      answer: "75",
      explanation:
        "Line up the numbers: 120 − 45. Borrow to make 10 − 5 = 5 in the ones, then 11 − 4 = 7 in the tens. The answer is 75."
    },
    {
      question: "Which of the following is a whole number?",
      options: ["-3", "0", "2.5", "1/2"],
      answer: "0",
      explanation:
        "Whole numbers are 0, 1, 2, 3, ... They do not include negatives, fractions, or decimals. Among the choices, only 0 is a whole number."
    }
  ],

  intermediate: [
    {
      question: "What is 245 + 378?",
      options: ["513", "623", "633", "643"],
      answer: "623",
      explanation:
        "Add ones: 5 + 8 = 13 (write 3, carry 1). Add tens: 4 + 7 + 1 = 12 (write 2, carry 1). Add hundreds: 2 + 3 + 1 = 6. Answer: 623."
    }
  ],

  advanced: [],

  expert: []
};

// ==========================================
// FRACTIONS & DECIMALS – (EMPTY FOR NOW)
// (Just so the key exists; we’ll fill later.)
// ==========================================
window.NUMERICAL_QUESTION_BANK["fractions_decimals"] = {
  beginner: [],
  intermediate: [],
  advanced: [],
  expert: []
};

// Later: add percentages, ratio_proportion, etc.
// window.NUMERICAL_QUESTION_BANK["percentages"] = { ... };
