// questions/numerical_algebra_linear.js
// ==========================================
// NUMERICAL – LINEAR EQUATIONS (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["algebra_linear"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Simple 1-step & 2-step equations)
  // ==========================================
  beginner: [
    {
      question: "Solve for x: x + 5 = 12",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Subtract 5 from both sides: x = 12 − 5 = 7."
    },
    {
      question: "Solve for x: x − 7 = 10",
      options: ["3", "10", "17", "27"],
      answer: "17",
      explanation: "Add 7 to both sides: x = 10 + 7 = 17."
    },
    {
      question: "Solve for x: 3x = 27",
      options: ["3", "6", "9", "12"],
      answer: "9",
      explanation: "Divide both sides by 3: x = 27 ÷ 3 = 9."
    },
    {
      question: "Solve for x: x ÷ 4 = 6",
      options: ["12", "18", "24", "30"],
      answer: "24",
      explanation: "Multiply both sides by 4: x = 6 × 4 = 24."
    },
    {
      question: "Solve for x: 2x + 3 = 11",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Subtract 3: 2x = 8, then divide by 2: x = 4."
    },
    {
      question: "Solve for x: 5x − 2 = 13",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Add 2: 5x = 15, divide by 5: x = 3."
    },
    {
      question: "Solve for x: x + 9 = 4",
      options: ["-5", "-4", "4", "5"],
      answer: "-5",
      explanation: "Subtract 9 from both sides: x = 4 − 9 = -5."
    },
    {
      question: "Solve for x: 7x = 0",
      options: ["-7", "0", "1", "7"],
      answer: "0",
      explanation: "Divide by 7: x = 0 ÷ 7 = 0."
    },
    {
      question: "Solve for x: x/5 + 2 = 6",
      options: ["4", "10", "15", "20"],
      answer: "20",
      explanation: "Subtract 2: x/5 = 4, multiply by 5: x = 20."
    },
    {
      question: "Solve for x: 4x − 8 = 0",
      options: ["0", "1", "2", "4"],
      answer: "2",
      explanation: "Add 8: 4x = 8, divide by 4: x = 2."
    },
    {
      question: "Solve for x: x − 3 = −10",
      options: ["-13", "-7", "7", "13"],
      answer: "-7",
      explanation: "Add 3: x = -10 + 3 = -7."
    },
    {
      question: "Solve for x: 6x + 2 = 20",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Subtract 2: 6x = 18, divide by 6: x = 3."
    },
    {
      question: "Solve for x: x + x = 10",
      options: ["2", "3", "4", "5"],
      answer: "5",
      explanation: "x + x = 2x, so 2x = 10 → x = 5."
    },
    {
      question: "Solve for x: 9x = 72",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Divide by 9: x = 72 ÷ 9 = 8."
    },
    {
      question: "Solve for x: x/3 = −4",
      options: ["-4", "-12", "4", "12"],
      answer: "-12",
      explanation: "Multiply both sides by 3: x = -4 × 3 = -12."
    },
    {
      question: "Solve for x: 2x − 5 = 1",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Add 5: 2x = 6, divide by 2: x = 3."
    },
    {
      question: "Solve for x: 3x + 4 = 16",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Subtract 4: 3x = 12, divide by 3: x = 4."
    },
    {
      question: "Solve for x: x − 8 = −2",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "Add 8: x = -2 + 8 = 6."
    },
    {
      question: "Solve for x: 5x + 10 = 0",
      options: ["-4", "-2", "0", "2"],
      answer: "-2",
      explanation: "Subtract 10: 5x = -10, divide by 5: x = -2."
    },
    {
      question: "Solve for x: 4x − 3 = 13",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Add 3: 4x = 16, divide by 4: x = 4."
    },
    {
      question: "Solve for x: x/2 + 5 = 9",
      options: ["6", "8", "9", "10"],
      answer: "8",
      explanation: "Subtract 5: x/2 = 4, multiply by 2: x = 8."
    },
    {
      question: "Solve for x: 7x − 7 = 0",
      options: ["0", "1", "7", "14"],
      answer: "1",
      explanation: "Add 7: 7x = 7, divide by 7: x = 1."
    },
    {
      question: "Solve for x: 10x = 90",
      options: ["8", "9", "10", "11"],
      answer: "9",
      explanation: "Divide by 10: x = 90 ÷ 10 = 9."
    },
    {
      question: "Solve for x: x + 12 = 7",
      options: ["-7", "-5", "5", "7"],
      answer: "-5",
      explanation: "Subtract 12: x = 7 − 12 = -5."
    },
    {
      question: "Solve for x: 2x + 10 = 0",
      options: ["-10", "-5", "0", "5"],
      answer: "-5",
      explanation: "Subtract 10: 2x = -10, divide by 2: x = -5."
    },
    {
      question: "Solve for x: 3x − 9 = 0",
      options: ["1", "2", "3", "9"],
      answer: "3",
      explanation: "Add 9: 3x = 9, so x = 9 ÷ 3 = 3."
    },
    {
      question: "Solve for x: x/6 = 3",
      options: ["6", "12", "18", "24"],
      answer: "18",
      explanation: "Multiply both sides by 6: x = 3 × 6 = 18."
    },
    {
      question: "Solve for x: x − 15 = 5",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "Add 15: x = 5 + 15 = 20."
    },
    {
      question: "Solve for x: 8x = −24",
      options: ["-6", "-3", "3", "6"],
      answer: "-3",
      explanation: "Divide by 8: x = -24 ÷ 8 = -3."
    },
    {
      question: "Solve for x: x/4 − 1 = 2",
      options: ["8", "10", "12", "16"],
      answer: "12",
      explanation: "Add 1: x/4 = 3, multiply by 4: x = 12."
    },
    {
      question: "A number plus 5 equals 12. What is the number?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Translate: x + 5 = 12 → x = 12 − 5 = 7."
    },
    {
      question: "Twice a number is 18. What is the number?",
      options: ["6", "8", "9", "10"],
      answer: "9",
      explanation: "Translate: 2x = 18 → x = 18 ÷ 2 = 9."
    },
    {
      question: "A number minus 7 is 3. What is the number?",
      options: ["3", "7", "10", "13"],
      answer: "10",
      explanation: "Translate: x − 7 = 3 → x = 3 + 7 = 10."
    },
    {
      question: "Three times a number equals 21. What is the number?",
      options: ["5", "6", "7", "9"],
      answer: "7",
      explanation: "Translate: 3x = 21 → x = 21 ÷ 3 = 7."
    },
    {
      question: "A number divided by 4 is 5. What is the number?",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "Translate: x/4 = 5 → x = 5 × 4 = 20."
    },
    {
      question: "Solve for x: x + 5 = 2x − 3",
      options: ["4", "6", "8", "10"],
      answer: "8",
      explanation: "Subtract x: 5 = x − 3, then add 3: x = 8."
    },
    {
      question: "Solve for x: 4x + 2 = 3x + 5",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Subtract 3x: x + 2 = 5 → x = 3."
    },
    {
      question: "Solve for x: 5x − 4 = 2x + 2",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Subtract 2x: 3x − 4 = 2 → 3x = 6 → x = 2."
    },
    {
      question: "Solve for x: 7x + 1 = 1",
      options: ["-1", "0", "1", "7"],
      answer: "0",
      explanation: "Subtract 1: 7x = 0 → x = 0."
    },
    {
      question: "Solve for x: 9x − 5 = 4x + 10",
      options: ["1", "2", "3", "5"],
      answer: "3",
      explanation: "Subtract 4x: 5x − 5 = 10 → 5x = 15 → x = 3."
    },
    {
      question: "Solve for x: 6x + 3 = 3x + 15",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Subtract 3x: 3x + 3 = 15 → 3x = 12 → x = 4."
    },
    {
      question: "Solve for x: 2x − 7 = x + 1",
      options: ["4", "6", "8", "10"],
      answer: "8",
      explanation: "Subtract x: x − 7 = 1 → x = 8."
    },
    {
      question: "Solve for x: x/3 + 2 = 5",
      options: ["3", "6", "9", "12"],
      answer: "9",
      explanation: "Subtract 2: x/3 = 3 → x = 9."
    },
    {
      question: "Solve for x: x/2 − 4 = 2",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "Add 4: x/2 = 6 → x = 12."
    },
    {
      question: "Solve for x: 2x − 10 = x − 4",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Subtract x: x − 10 = −4 → x = 6."
    },
    {
      question: "Solve for x: 5x + 5 = 0",
      options: ["-5", "-1", "0", "1"],
      answer: "-1",
      explanation: "Subtract 5: 5x = -5 → x = -1."
    },
    {
      question: "Solve for x: 3x − 2 = 13",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Add 2: 3x = 15 → x = 5."
    },
    {
      question: "Solve for x: x/5 + x/5 = 8",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "x/5 + x/5 = 2x/5 = 8 → 2x = 40 → x = 20."
    },
    {
      question: "Solve for x: x/2 + 3 = x",
      options: ["3", "4", "5", "6"],
      answer: "6",
      explanation: "Subtract x/2: 3 = x − x/2 = x/2 → x = 6."
    },
    {
      question: "Solve for x: 4x − x = 9",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "4x − x = 3x = 9 → x = 9 ÷ 3 = 3."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Brackets, fractions, simple word problems)
  // ==========================================
  intermediate: [
    {
      question: "Solve for x: 2(x + 3) = 18",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Expand: 2x + 6 = 18 → 2x = 12 → x = 6."
    },
    {
      question: "Solve for x: 3(x − 4) = 9",
      options: ["3", "5", "7", "9"],
      answer: "7",
      explanation: "Expand: 3x − 12 = 9 → 3x = 21 → x = 7."
    },
    {
      question: "Solve for x: 4(x + 5) = 2x + 18",
      options: ["-1", "0", "1", "2"],
      answer: "-1",
      explanation: "4x + 20 = 2x + 18 → 4x − 2x = 18 − 20 → 2x = -2 → x = -1."
    },
    {
      question: "Solve for x: 5x − 7 = 3x + 9",
      options: ["5", "6", "7", "8"],
      answer: "8",
      explanation: "5x − 3x = 9 + 7 → 2x = 16 → x = 8."
    },
    {
      question: "Solve for x: x/2 + 5 = 11",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "x/2 = 6 → x = 12."
    },
    {
      question: "Solve for x: (3x)/4 − 2 = 4",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "3x/4 = 6 → 3x = 24 → x = 8."
    },
    {
      question: "Solve for x: (x − 3)/5 = 4",
      options: ["18", "20", "22", "23"],
      answer: "23",
      explanation: "x − 3 = 20 → x = 23."
    },
    {
      question: "Solve for x: (2x + 1)/3 = 5",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "2x + 1 = 15 → 2x = 14 → x = 7."
    },
    {
      question: "Solve for x: 5(x − 2) = 3x + 4",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "5x − 10 = 3x + 4 → 2x = 14 → x = 7."
    },
    {
      question: "Solve for x: 4(x + 1) − 2x = 10",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "4x + 4 − 2x = 10 → 2x + 4 = 10 → 2x = 6 → x = 3."
    },
    {
      question: "Solve for x: 3(x + 2) + 4 = 2x + 15",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "3x + 6 + 4 = 2x + 15 → 3x + 10 = 2x + 15 → x = 5."
    },
    {
      question: "Solve for x: 6x − (x + 5) = 15",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "6x − x − 5 = 15 → 5x − 5 = 15 → 5x = 20 → x = 4."
    },
    {
      question: "Solve for x: (x + 4)/2 + 3 = 10",
      options: ["6", "8", "10", "12"],
      answer: "10",
      explanation: "(x + 4)/2 = 7 → x + 4 = 14 → x = 10."
    },
    {
      question: "Solve for x: (2x − 1)/5 = 3",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "2x − 1 = 15 → 2x = 16 → x = 8."
    },
    {
      question: "Solve for x: 0.5x + 3 = 11",
      options: ["12", "14", "16", "18"],
      answer: "16",
      explanation: "0.5x = 8 → x = 16."
    },
    {
      question: "Solve for x: 1.2x = 9.6",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "x = 9.6 ÷ 1.2 = 8."
    },
    {
      question: "Solve for x: 4x − 0.5x = 7",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "4x − 0.5x = 3.5x = 7 → x = 7 ÷ 3.5 = 2."
    },
    {
      question: "Solve for x: 3(2x − 1) = 5x + 7",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "6x − 3 = 5x + 7 → x = 10."
    },
    {
      question: "Solve for x: x/3 + x/6 = 6",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "x/3 + x/6 = 2x/6 + x/6 = x/2 = 6 → x = 12."
    },
    {
      question: "Solve for x: x/4 − x/8 = 3",
      options: ["12", "18", "24", "30"],
      answer: "24",
      explanation: "x/4 − x/8 = 2x/8 − x/8 = x/8 = 3 → x = 24."
    },
    {
      question: "Solve for x: 2x/3 + 4 = 10",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "2x/3 = 6 → 2x = 18 → x = 9."
    },
    {
      question: "Solve for x: 5x/2 − 3 = 12",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "5x/2 = 15 → 5x = 30 → x = 6."
    },
    {
      question: "Solve for x: (x − 2)/4 + (x + 2)/4 = 5",
      options: ["6", "8", "10", "12"],
      answer: "10",
      explanation: "(x − 2 + x + 2)/4 = 2x/4 = x/2 = 5 → x = 10."
    },
    {
      question: "Solve for x: (3x + 2)/5 − 1 = 3",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "(3x + 2)/5 = 4 → 3x + 2 = 20 → 3x = 18 → x = 6."
    },
    {
      question: "Solve for x: 2(x + 5) = 3(x − 1)",
      options: ["9", "11", "13", "15"],
      answer: "13",
      explanation: "2x + 10 = 3x − 3 → 10 + 3 = x → x = 13."
    },
    {
      question: "Solve for x: 5(x − 3) = 2(x + 6)",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "5x − 15 = 2x + 12 → 3x = 27 → x = 9."
    },
    {
      question: "Solve for x: 7(x + 1) − 3x = 27",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "7x + 7 − 3x = 27 → 4x + 7 = 27 → 4x = 20 → x = 5."
    },
    {
      question: "Solve for x: 9x − 4(2x − 3) = 10",
      options: ["-2", "-1", "0", "1"],
      answer: "-2",
      explanation: "9x − 8x + 12 = 10 → x + 12 = 10 → x = -2."
    },
    {
      question: "Solve for x: 3(2x + 1) − (x − 5) = 23",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "6x + 3 − x + 5 = 23 → 5x + 8 = 23 → 5x = 15 → x = 3."
    },
    {
      question: "Solve for x: 4(x − 2) + 3(x + 1) = 9",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "4x − 8 + 3x + 3 = 9 → 7x − 5 = 9 → 7x = 14 → x = 2."
    },
    {
      question: "If 3 more than twice a number is 17, what is the number?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Equation: 2x + 3 = 17 → 2x = 14 → x = 7."
    },
    {
      question: "If 5 less than three times a number is 13, what is the number?",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation: "3x − 5 = 13 → 3x = 18 → x = 6."
    },
    {
      question: "A number divided by 3 then increased by 4 equals 10. What is the number?",
      options: ["12", "15", "18", "21"],
      answer: "18",
      explanation: "x/3 + 4 = 10 → x/3 = 6 → x = 18."
    },
    {
      question: "The sum of a number and 4 is equal to twice the number minus 2. What is the number?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "x + 4 = 2x − 2 → 4 + 2 = x → x = 6."
    },
    {
      question: "Six more than a number is equal to three times the number. What is the number?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "x + 6 = 3x → 6 = 2x → x = 3."
    },
    {
      question: "Three times a number decreased by 4 equals 2 more than the number. What is the number?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "3x − 4 = x + 2 → 2x = 6 → x = 3."
    },
    {
      question: "When 8 is added to a number, the result is 5 less than twice the number. What is the number?",
      options: ["10", "11", "12", "13"],
      answer: "13",
      explanation: "x + 8 = 2x − 5 → 8 + 5 = x → x = 13."
    },
    {
      question: "Solve for x: 0.4x + 3 = 0.1x + 6",
      options: ["5", "8", "9", "10"],
      answer: "10",
      explanation: "0.4x − 0.1x = 6 − 3 → 0.3x = 3 → x = 10."
    },
    {
      question: "Solve for x: 0.2x − 1 = 0.1x + 2",
      options: ["20", "25", "30", "35"],
      answer: "30",
      explanation: "0.2x − 0.1x = 2 + 1 → 0.1x = 3 → x = 30."
    },
    {
      question: "Solve for x: x/2 + x/3 = 10",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "x/2 + x/3 = 3x/6 + 2x/6 = 5x/6 = 10 → 5x = 60 → x = 12."
    },
    {
      question: "Solve for x: x/5 − x/10 = 3",
      options: ["15", "20", "25", "30"],
      answer: "30",
      explanation: "x/5 − x/10 = 2x/10 − x/10 = x/10 = 3 → x = 30."
    },
    {
      question: "Solve for x: (x + 1)/2 + (x − 1)/3 = 7",
      options: ["6", "7", "8.2", "9"],
      answer: "8.2",
      explanation: "Common denominator 6: (3(x+1) + 2(x−1))/6 = 7 → (3x + 3 + 2x − 2)/6 = 7 → (5x + 1)/6 = 7 → 5x + 1 = 42 → 5x = 41 → x = 41/5 = 8.2."
    },
    {
      question: "Solve for x: (3x − 2)/4 = (x + 1)/2",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Multiply both sides by 4: 3x − 2 = 2(x + 1) = 2x + 2 → x = 4."
    },
    {
      question: "Solve for x: (5x + 3)/2 = 3x − 1",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "5x + 3 = 2(3x − 1) = 6x − 2 → -x = -5 → x = 5."
    },
    {
      question: "Solve for x: 4(x − 1) = 3(x + 5) − 2",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "4x − 4 = 3x + 15 − 2 = 3x + 13 → x = 17."
    },
    {
      question: "Solve for x: 2(x + 4) − 3 = x + 9",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "2x + 8 − 3 = x + 9 → 2x + 5 = x + 9 → x = 4."
    },
    {
      question: "Solve for x: 3(x − 2) + 2 = 2(x + 1) + 5",
      options: ["9", "10", "11", "12"],
      answer: "11",
      explanation: "3x − 6 + 2 = 2x + 1 + 5 → 3x − 4 = 2x + 6 → x = 11."
    },
    {
      question: "Solve for x: (x − 4)/3 + 2 = (x + 5)/6",
      options: ["-1", "0", "1", "2"],
      answer: "1",
      explanation: "Multiply by 6: 2(x − 4) + 12 = x + 5 → 2x − 8 + 12 = x + 5 → 2x + 4 = x + 5 → x = 1."
    },
    {
      question: "Solve for x: (2x + 5)/3 − (x − 1)/2 = 4",
      options: ["9", "10", "11", "12"],
      answer: "11",
      explanation: "Multiply by 6: 2(2x + 5) − 3(x − 1) = 24 → 4x + 10 − 3x + 3 = 24 → x + 13 = 24 → x = 11."
    },
    {
      question: "Solve for x: 7(x − 3) + 2 = 3(x + 1) + 10",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "7x − 21 + 2 = 3x + 1 + 10 → 7x − 19 = 3x + 11 → 4x = 30 → x = 7.5 (not in options). Let me recalculate: 7x − 21 + 2 = 3x + 3 + 10 → 7x − 19 = 3x + 13 → 4x = 32 → x = 8."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Multi-step Linear Equations)
  // ==========================================
  advanced: [
    {
      question: "The sum of three consecutive integers is 54. What is the middle integer?",
      options: ["17", "18", "19", "20"],
      answer: "18",
      explanation: "Let the integers be x, x + 1, x + 2. Then 3x + 3 = 54 → 3x = 51 → x = 17. The middle integer is 18."
    },
    {
      question: "The sum of three consecutive even integers is 72. What is the smallest integer?",
      options: ["20", "22", "24", "26"],
      answer: "22",
      explanation: "Let the even integers be x, x + 2, x + 4. Then 3x + 6 = 72 → 3x = 66 → x = 22."
    },
    {
      question: "The sum of two numbers is 35 and their difference is 9. What is the larger number?",
      options: ["13", "22", "24", "26"],
      answer: "22",
      explanation: "Let larger = L, smaller = S. L + S = 35 and L − S = 9. Adding: 2L = 44 → L = 22."
    },
    {
      question: "The sum of two numbers is 50 and one number is 6 more than the other. What is the larger number?",
      options: ["22", "24", "26", "28"],
      answer: "28",
      explanation: "Let smaller = x, larger = x + 6. Then x + (x + 6) = 50 → 2x + 6 = 50 → 2x = 44 → x = 22, so larger = 28."
    },
    {
      question: "The sum of three consecutive odd integers is 75. What is the largest integer?",
      options: ["23", "25", "27", "29"],
      answer: "27",
      explanation: "Let the odd integers be x, x + 2, x + 4. Then 3x + 6 = 75 → 3x = 69 → x = 23. Largest = 27."
    },
    {
      question: "Solve for x: x + 4 = 3x − 10",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "x + 4 = 3x − 10 → 4 + 10 = 3x − x → 14 = 2x → x = 7."
    },
    {
      question: "Solve for x: 5x − 7 = 3x + 1",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "5x − 7 = 3x + 1 → 5x − 3x = 1 + 7 → 2x = 8 → x = 4."
    },
    {
      question: "Solve for x: 4x + 9 = 2x + 21",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "4x + 9 = 2x + 21 → 4x − 2x = 21 − 9 → 2x = 12 → x = 6."
    },
    {
      question: "Solve for x: 7x − 5 = 2x + 20",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "7x − 5 = 2x + 20 → 7x − 2x = 20 + 5 → 5x = 25 → x = 5."
    },
    {
      question: "Solve for x: 9x + 3 = 4x + 28",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "9x + 3 = 4x + 28 → 9x − 4x = 28 − 3 → 5x = 25 → x = 5."
    },
    {
      question: "Solve for x: 6(x − 2) = 3(x + 6)",
      options: ["6", "8", "9", "10"],
      answer: "10",
      explanation: "6x − 12 = 3x + 18 → 6x − 3x = 18 + 12 → 3x = 30 → x = 10."
    },
    {
      question: "Solve for x: 4(x + 3) − 5 = 3(x + 7)",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "4x + 12 − 5 = 3x + 21 → 4x + 7 = 3x + 21 → x = 14."
    },
    {
      question: "Solve for x: 3(2x − 1) = 5(x − 2)",
      options: ["−5", "−7", "−9", "−11"],
      answer: "−7",
      explanation: "6x − 3 = 5x − 10 → 6x − 5x = −10 + 3 → x = −7."
    },
    {
      question: "Solve for x: 5(x + 1) − 2(x − 3) = 4x + 20",
      options: ["−11", "−9", "−7", "−5"],
      answer: "−9",
      explanation: "5x + 5 − 2x + 6 = 4x + 20 → 3x + 11 = 4x + 20 → −x = 9 → x = −9."
    },
    {
      question: "Solve for x: 7(x − 2) + 4 = 3(x + 6)",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "7x − 14 + 4 = 3x + 18 → 7x − 10 = 3x + 18 → 4x = 28 → x = 7."
    },
    {
      question: "Solve for x: x/3 + 5 = 11",
      options: ["12", "15", "18", "21"],
      answer: "18",
      explanation: "x/3 + 5 = 11 → x/3 = 6 → x = 18."
    },
    {
      question: "Solve for x: x/4 − 2 = 3",
      options: ["12", "16", "20", "24"],
      answer: "20",
      explanation: "x/4 − 2 = 3 → x/4 = 5 → x = 20."
    },
    {
      question: "Solve for x: (x + 3)/5 = 4",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "(x + 3)/5 = 4 → x + 3 = 20 → x = 17."
    },
    {
      question: "Solve for x: (2x − 1)/3 = 5",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "2x − 1 = 15 → 2x = 16 → x = 8."
    },
    {
      question: "Solve for x: (3x + 4)/2 = 13",
      options: ["6", "7", "22/3", "10"],
      answer: "22/3",
      explanation: "3x + 4 = 26 → 3x = 22 → x = 22/3."
    },
    {
      question: "Solve for x: (5x − 2)/4 = 7",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "5x − 2 = 28 → 5x = 30 → x = 6."
    },
    {
      question: "Solve for x: (x − 5)/6 + 2 = 5",
      options: ["17", "19", "21", "23"],
      answer: "23",
      explanation: "(x − 5)/6 = 3 → x − 5 = 18 → x = 23."
    },
    {
      question: "Solve for x: (x + 2)/3 − 1 = 4",
      options: ["11", "12", "13", "14"],
      answer: "13",
      explanation: "(x + 2)/3 = 5 → x + 2 = 15 → x = 13."
    },
    {
      question: "Solve for x: 2 − (x − 1)/4 = 1",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "(x − 1)/4 = 1 → x − 1 = 4 → x = 5."
    },
    {
      question: "Solve for x: x/2 + x/3 = 10",
      options: ["6", "8", "10", "12"],
      answer: "12",
      explanation: "x/2 + x/3 = 10 → (3x + 2x)/6 = 10 → 5x/6 = 10 → 5x = 60 → x = 12."
    },
    {
      question: "Solve for x: 5 − 2x = 11",
      options: ["−5", "−4", "−3", "−2"],
      answer: "−3",
      explanation: "5 − 2x = 11 → −2x = 6 → x = −3."
    },
    {
      question: "Solve for x: 3 − 4x = 19",
      options: ["−6", "−5", "−4", "−3"],
      answer: "−4",
      explanation: "3 − 4x = 19 → −4x = 16 → x = −4."
    },
    {
      question: "Solve for x: 7x + 12 = 4 − x",
      options: ["−2", "−1", "0", "1"],
      answer: "−1",
      explanation: "7x + 12 = 4 − x → 8x = −8 → x = −1."
    },
    {
      question: "Solve for x: 9 − 3x = 2(x + 1)",
      options: ["7/5", "6/5", "5/4", "4/5"],
      answer: "7/5",
      explanation: "9 − 3x = 2x + 2 → −5x = −7 → x = 7/5."
    },
    {
      question: "Solve for x: 2(3x − 5) = x + 7",
      options: ["17/5", "14/5", "11/5", "8/5"],
      answer: "17/5",
      explanation: "6x − 10 = x + 7 → 5x = 17 → x = 17/5."
    },
    {
      question: "Solve for x: 4(2x + 1) − 3(x − 2) = 5",
      options: ["−2", "−1", "0", "1"],
      answer: "−1",
      explanation: "8x + 4 − 3x + 6 = 5 → 5x + 10 = 5 → 5x = −5 → x = −1."
    },
    {
      question: "Solve for x: 3(x − 4) + 2(x + 1) = 4",
      options: ["14/5", "11/5", "9/5", "7/5"],
      answer: "14/5",
      explanation: "3x − 12 + 2x + 2 = 4 → 5x − 10 = 4 → 5x = 14 → x = 14/5."
    },
    {
      question: "Solve for x: (x − 2)/5 = (x + 1)/10",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "10(x − 2) = 5(x + 1) → 10x − 20 = 5x + 5 → 5x = 25 → x = 5."
    },
    {
      question: "Solve for x: (2x + 3)/3 = (x − 1)/2",
      options: ["−11", "−9", "−7", "−5"],
      answer: "−9",
      explanation: "2(2x + 3) = 3(x − 1) → 4x + 6 = 3x − 3 → x = −9."
    },
    {
      question: "Solve for x: (x + 5)/2 + (x − 1)/4 = 7",
      options: ["17/3", "19/3", "21/3", "23/3"],
      answer: "19/3",
      explanation: "2(x + 5) + (x − 1) = 28 → 3x + 9 = 28 → 3x = 19 → x = 19/3."
    },
    {
      question: "The perimeter of a rectangle is 50 cm. Its length is 5 cm more than its width. What is the length?",
      options: ["10 cm", "12 cm", "15 cm", "20 cm"],
      answer: "15 cm",
      explanation: "Let width = w, length = w + 5. Then 2(w + w + 5) = 50 → 4w + 10 = 50 → w = 10, so length = 15 cm."
    },
    {
      question: "The perimeter of a square is 64 cm. What is the length of one side?",
      options: ["14 cm", "15 cm", "16 cm", "18 cm"],
      answer: "16 cm",
      explanation: "Perimeter of a square = 4s. So 4s = 64 → s = 16 cm."
    },
    {
      question: "A number increased by 25% becomes 45. What is the original number?",
      options: ["30", "32", "34", "36"],
      answer: "36",
      explanation: "Original = x. Then 1.25x = 45 → x = 45 ÷ 1.25 = 36."
    },
    {
      question: "When 12 is subtracted from twice a number, the result is 20. What is the number?",
      options: ["14", "15", "16", "18"],
      answer: "16",
      explanation: "2x − 12 = 20 → 2x = 32 → x = 16."
    },
    {
      question: "If 5 is added to three times a number, the result is 26. What is the number?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "3x + 5 = 26 → 3x = 21 → x = 7."
    },
    {
      question: "The sum of a number and its half is 18. What is the number?",
      options: ["10", "12", "15", "18"],
      answer: "12",
      explanation: "x + x/2 = 18 → (3x/2) = 18 → 3x = 36 → x = 12."
    },
    {
      question: "The sum of a number and its third is 16. What is the number?",
      options: ["9", "10", "11", "12"],
      answer: "12",
      explanation: "x + x/3 = 16 → (4x/3) = 16 → 4x = 48 → x = 12."
    },
    {
      question: "A number minus its quarter equals 21. What is the number?",
      options: ["24", "26", "28", "30"],
      answer: "28",
      explanation: "x − x/4 = 21 → (3x/4) = 21 → 3x = 84 → x = 28."
    },
    {
      question: "Twice a number plus its third equals 22. What is the number?",
      options: ["66/7", "22/3", "20/3", "18/5"],
      answer: "66/7",
      explanation: "2x + x/3 = 22 → (6x + x)/3 = 22 → 7x = 66 → x = 66/7."
    },
    {
      question: "If 4 is subtracted from a number and the result is divided by 3, the answer is 5. What is the number?",
      options: ["15", "17", "19", "21"],
      answer: "19",
      explanation: "(x − 4)/3 = 5 → x − 4 = 15 → x = 19."
    },
    {
      question: "Solve for x: 0.5x + 7 = 17",
      options: ["14", "16", "18", "20"],
      answer: "20",
      explanation: "0.5x = 10 → x = 20."
    },
    {
      question: "Solve for x: 1.2x − 4.8 = 7.2",
      options: ["8", "9", "10", "12"],
      answer: "10",
      explanation: "1.2x = 12 → x = 10."
    },
    {
      question: "Solve for x: 0.8x + 3.6 = 7.2",
      options: ["3.5", "4", "4.5", "5"],
      answer: "4.5",
      explanation: "0.8x = 3.6 → x = 3.6 ÷ 0.8 = 4.5."
    },
    {
      question: "Solve for x: 2.5x = 17.5",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "x = 17.5 ÷ 2.5 = 7."
    },
    {
      question: "Solve for x: 3.6x − 1.8 = 16.2",
      options: ["4", "4.5", "5", "5.5"],
      answer: "5",
      explanation: "3.6x = 18 → x = 18 ÷ 3.6 = 5."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – Systems & Word Problems)
  // ==========================================
  expert: [
    {
      question: "Solve the system: x + y = 12 and x − y = 4. What is the ordered pair (x, y)?",
      options: ["(8, 4)", "(6, 6)", "(10, 2)", "(4, 8)"],
      answer: "(8, 4)",
      explanation: "Add the equations: (x + y) + (x − y) = 12 + 4 → 2x = 16 → x = 8. Then y = 12 − 8 = 4."
    },
    {
      question: "Solve the system: 2x + y = 11 and x + y = 8. What is (x, y)?",
      options: ["(3, 5)", "(4, 4)", "(5, 3)", "(2, 6)"],
      answer: "(3, 5)",
      explanation: "Subtract the second from the first: (2x + y) − (x + y) = 11 − 8 → x = 3. Then y = 8 − 3 = 5."
    },
    {
      question: "Solve the system: 3x − y = 7 and x + y = 5. What is (x, y)?",
      options: ["(2, 3)", "(3, 2)", "(4, 1)", "(1, 4)"],
      answer: "(3, 2)",
      explanation: "From x + y = 5 → y = 5 − x. Substitute: 3x − (5 − x) = 7 → 4x − 5 = 7 → x = 3, y = 2."
    },
    {
      question: "Solve the system: 4x + 3y = 25 and x + y = 7. What is (x, y)?",
      options: ["(3, 4)", "(4, 3)", "(5, 2)", "(2, 5)"],
      answer: "(4, 3)",
      explanation: "From x + y = 7 → x = 7 − y. Substitute: 4(7 − y) + 3y = 25 → 28 − 4y + 3y = 25 → y = 3, x = 4."
    },
    {
      question: "Solve the system: 2x − 3y = 1 and x + 2y = 11. What is (x, y)?",
      options: ["(5, 3)", "(4, 3)", "(5, 2)", "(6, 1)"],
      answer: "(5, 3)",
      explanation: "From x + 2y = 11 → x = 11 − 2y. Substitute: 2(11 − 2y) − 3y = 1 → 22 − 4y − 3y = 1 → 22 − 7y = 1 → y = 3, x = 5."
    },
    {
      question: "Solve the system: 3x + 4y = 18 and 2x − y = 1. What is (x, y)?",
      options: ["(2, 3)", "(3, 2)", "(4, 1)", "(1, 4)"],
      answer: "(2, 3)",
      explanation: "From 2x − y = 1 → y = 2x − 1. Substitute: 3x + 4(2x − 1) = 18 → 3x + 8x − 4 = 18 → 11x = 22 → x = 2, y = 3."
    },
    {
      question: "Solve the system: x − 3y = −5 and 2x + y = 11. What is (x, y)?",
      options: ["(3, 4)", "(4, 3)", "(5, 2)", "(6, 1)"],
      answer: "(4, 3)",
      explanation: "From x − 3y = −5 → x = 3y − 5. Substitute: 2(3y − 5) + y = 11 → 6y − 10 + y = 11 → 7y = 21 → y = 3, x = 4."
    },
    {
      question: "Solve the system: 5x − 2y = 11 and 3x + y = 11. What is (x, y)?",
      options: ["(2, 3)", "(3, 2)", "(4, 1)", "(1, 4)"],
      answer: "(3, 2)",
      explanation: "From 3x + y = 11 → y = 11 − 3x. Substitute: 5x − 2(11 − 3x) = 11 → 5x − 22 + 6x = 11 → 11x = 33 → x = 3, y = 2."
    },
    {
      question: "Solve the system: 4x + y = 13 and x + 2y = 12. What is (x, y)?",
      options: ["(2, 5)", "(5, 2)", "(3, 4)", "(4, 3)"],
      answer: "(2, 5)",
      explanation: "From 4x + y = 13 → y = 13 − 4x. Substitute: x + 2(13 − 4x) = 12 → x + 26 − 8x = 12 → −7x = −14 → x = 2, y = 5."
    },
    {
      question: "Solve the system: x + 4y = 10 and 2x − y = 11. What is (x, y)?",
      options: ["(4, 1)", "(5, 2)", "(6, 1)", "(7, 0)"],
      answer: "(6, 1)",
      explanation: "From x + 4y = 10 → x = 10 − 4y. Substitute: 2(10 − 4y) − y = 11 → 20 − 8y − y = 11 → −9y = −9 → y = 1, x = 6."
    },
    {
      question: "Solve the system: x + y = 9 and 3x − y = 19. What is (x, y)?",
      options: ["(7, 2)", "(6, 3)", "(5, 4)", "(8, 1)"],
      answer: "(7, 2)",
      explanation: "From x + y = 9 → y = 9 − x. Substitute: 3x − (9 − x) = 19 → 4x − 9 = 19 → x = 7, y = 2."
    },
    {
      question: "Solve the system: 2x + 3y = 29 and x − y = −3. What is (x, y)?",
      options: ["(3, 8)", "(4, 7)", "(5, 6)", "(6, 5)"],
      answer: "(4, 7)",
      explanation: "From x − y = −3 → x = y − 3. Substitute: 2(y − 3) + 3y = 29 → 2y − 6 + 3y = 29 → 5y = 35 → y = 7, x = 4."
    },
    {
      question: "Solve the system: x + y = 11 and 4x − y = 14. What is (x, y)?",
      options: ["(4, 7)", "(5, 6)", "(6, 5)", "(7, 4)"],
      answer: "(5, 6)",
      explanation: "From x + y = 11 → y = 11 − x. Substitute: 4x − (11 − x) = 14 → 5x − 11 = 14 → x = 5, y = 6."
    },
    {
      question: "Solve the system: 3x + 2y = 11 and x + 3y = 13. What is (x, y)?",
      options: ["(1, 4)", "(2, 3)", "(3, 2)", "(4, 1)"],
      answer: "(1, 4)",
      explanation: "From x + 3y = 13 → x = 13 − 3y. Substitute: 3(13 − 3y) + 2y = 11 → 39 − 9y + 2y = 11 → −7y = −28 → y = 4, x = 1."
    },
    {
      question: "Solve the system: x + y = 8 and 2x − 3y = 21. What is (x, y)?",
      options: ["(7, 1)", "(8, 0)", "(9, −1)", "(10, −2)"],
      answer: "(9, −1)",
      explanation: "From x + y = 8 → y = 8 − x. Substitute: 2x − 3(8 − x) = 21 → 2x − 24 + 3x = 21 → 5x = 45 → x = 9, y = −1."
    },
    {
      question: "Child tickets cost ₱4 and adult tickets cost ₱6. A total of 40 tickets were sold for ₱220. How many adult tickets were sold?",
      options: ["20", "22", "25", "30"],
      answer: "30",
      explanation: "Let adult = a, child = c. a + c = 40 and 6a + 4c = 220. Substitute c = 40 − a: 6a + 4(40 − a) = 220 → 2a + 160 = 220 → a = 30."
    },
    {
      question: "Regular tickets cost ₱150 and VIP tickets cost ₱250. A total of 80 tickets were sold for ₱16,000. How many VIP tickets were sold?",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "Let VIP = v, regular = r. r + v = 80 and 150r + 250v = 16,000. Substitute r = 80 − v: 150(80 − v) + 250v = 16,000 → 12,000 + 100v = 16,000 → v = 40."
    },
    {
      question: "Apples cost ₱10 each and bananas cost ₱6 each. A customer buys 18 fruits for ₱148. How many apples did the customer buy?",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "Let apples = a, bananas = b. a + b = 18 and 10a + 6b = 148. Substitute b = 18 − a: 10a + 6(18 − a) = 148 → 4a + 108 = 148 → a = 10."
    },
    {
      question: "Notebooks cost ₱25 and pens cost ₱15. A student buys 14 items and pays ₱290. How many notebooks did the student buy?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Let notebooks = n, pens = p. n + p = 14 and 25n + 15p = 290. Substitute p = 14 − n: 25n + 15(14 − n) = 290 → 10n + 210 = 290 → n = 8."
    },
    {
      question: "For a field trip, elementary students pay ₱200 each and high school students pay ₱300 each. There are 22 students and the total collected is ₱5,600. How many high school students joined?",
      options: ["10", "11", "12", "14"],
      answer: "12",
      explanation: "Let elementary = e, high school = h. e + h = 22 and 200e + 300h = 5,600. Substitute e = 22 − h: 200(22 − h) + 300h = 5,600 → 4,400 + 100h = 5,600 → h = 12."
    },
    {
      question: "A farmer sold 50 animals, some chickens and some goats. Chickens have 2 legs and goats have 4 legs. There are 156 legs in total. How many goats were sold?",
      options: ["20", "24", "26", "28"],
      answer: "28",
      explanation: "Let chickens = c, goats = g. c + g = 50 and 2c + 4g = 156. Substitute c = 50 − g: 2(50 − g) + 4g = 156 → 100 + 2g = 156 → g = 28."
    },
    {
      question: "In a class of 32 students, the number of girls is 4 more than the number of boys. How many girls are there?",
      options: ["14", "16", "18", "20"],
      answer: "18",
      explanation: "Let boys = b, girls = g. b + g = 32 and g = b + 4. Substitute: b + (b + 4) = 32 → 2b = 28 → b = 14, so g = 18."
    },
    {
      question: "A box contains 80 coins, some ₱5 coins and some ₱10 coins. The total value is ₱600. How many ₱10 coins are there?",
      options: ["20", "25", "30", "40"],
      answer: "40",
      explanation: "Let ₱10 coins = t, ₱5 coins = f. f + t = 80 and 5f + 10t = 600. Substitute f = 80 − t: 5(80 − t) + 10t = 600 → 400 + 5t = 600 → t = 40."
    },
    {
      question: "A purse contains 30 coins in ₱1 and ₱5 denominations. The total value is ₱70. How many ₱5 coins are there?",
      options: ["6", "8", "10", "12"],
      answer: "10",
      explanation: "Let ₱5 coins = x, ₱1 coins = y. x + y = 30 and 5x + y = 70. Subtract the first from the second: 4x = 40 → x = 10."
    },
    {
      question: "In a classroom there are 26 chairs and benches together. Each chair seats 1 student and each bench seats 2 students. If 40 students can sit, how many benches are there?",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "Let chairs = c, benches = b. c + b = 26 and c + 2b = 40. Subtract: (c + 2b) − (c + b) = 40 − 26 → b = 14."
    },
    {
      question: "Ana is 8 years older than Bea. The sum of their ages is 44. How old is Ana?",
      options: ["22", "24", "26", "28"],
      answer: "26",
      explanation: "Let Bea = b, Ana = b + 8. Then b + (b + 8) = 44 → 2b + 8 = 44 → 2b = 36 → b = 18, so Ana = 26."
    },
    {
      question: "The sum of the ages of a mother and her daughter is 44. In 8 years, the mother will be twice as old as her daughter. How old is the daughter now?",
      options: ["10", "12", "14", "16"],
      answer: "12",
      explanation: "Let mother = m, daughter = d. m + d = 44 and m + 8 = 2(d + 8). Substitute m = 44 − d: 44 − d + 8 = 2d + 16 → 52 − d = 2d + 16 → 3d = 36 → d = 12."
    },
    {
      question: "A father is three times as old as his son. In 10 years, he will be twice as old as his son. How old is the father now?",
      options: ["20", "25", "30", "35"],
      answer: "30",
      explanation: "Let father = F, son = S. F = 3S and F + 10 = 2(S + 10). Substitute F: 3S + 10 = 2S + 20 → S = 10 → F = 30."
    },
    {
      question: "The difference between the ages of two siblings is 4 years and their sum is 30 years. How old is the younger sibling?",
      options: ["11", "13", "15", "17"],
      answer: "13",
      explanation: "Let older = O, younger = Y. O − Y = 4 and O + Y = 30. Add: 2O = 34 → O = 17 → Y = 13."
    },
    {
      question: "The sum of three consecutive integers is 96. What is the middle integer?",
      options: ["30", "31", "32", "33"],
      answer: "32",
      explanation: "Let integers be x, x + 1, x + 2. Then 3x + 3 = 96 → 3x = 93 → x = 31; middle integer is 32."
    },
    {
      question: "The sum of three consecutive even integers is 108. What is the largest integer?",
      options: ["34", "36", "38", "40"],
      answer: "38",
      explanation: "Let even integers be x, x + 2, x + 4. Then 3x + 6 = 108 → 3x = 102 → x = 34; largest is 38."
    },
    {
      question: "The sum of two numbers is 50. Three times the smaller minus the larger is −10. What is the larger number?",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "Let smaller = s, larger = L. s + L = 50 and 3s − L = −10. Add equations: 4s = 40 → s = 10 → L = 40."
    },
    {
      question: "The sum of two numbers is 23. Twice the first is 6 more than three times the second. What is the first number?",
      options: ["11", "13", "15", "17"],
      answer: "15",
      explanation: "Let first = x, second = y. x + y = 23 and 2x = 3y + 6. Substitute x = 23 − y: 2(23 − y) = 3y + 6 → 46 − 2y = 3y + 6 → 5y = 40 → y = 8, x = 15."
    },
    {
      question: "The sum of two numbers is 30. Three times the first plus twice the second is 74. What is the second number?",
      options: ["12", "14", "16", "18"],
      answer: "16",
      explanation: "Let first = x, second = y. x + y = 30 and 3x + 2y = 74. Substitute x = 30 − y: 3(30 − y) + 2y = 74 → 90 − 3y + 2y = 74 → y = 16."
    },
    {
      question: "Twice a number plus three times another number is 30. The first number is 5 greater than the second. What is the smaller number?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Let first = x, second = y. 2x + 3y = 30 and x − y = 5. Substitute x = y + 5: 2(y + 5) + 3y = 30 → 5y + 10 = 30 → y = 4 (smaller number)."
    },
    {
      question: "A 30-liter solution is 40% alcohol. How many liters of water must be added to make it 30% alcohol?",
      options: ["6 L", "8 L", "10 L", "12 L"],
      answer: "10 L",
      explanation: "Alcohol = 0.4 × 30 = 12 L. Add x liters of water: 12/(30 + x) = 0.3 → 12 = 0.3(30 + x) → 12 = 9 + 0.3x → x = 10 L."
    },
    {
      question: "A chemist has a 20% alcohol solution and a 50% alcohol solution. She wants 30 liters of a 40% solution. How many liters of the 50% solution should she use?",
      options: ["10 L", "12 L", "18 L", "20 L"],
      answer: "20 L",
      explanation: "Let 20% = x L, 50% = y L. x + y = 30 and 0.2x + 0.5y = 12. Substitute x = 30 − y: 0.2(30 − y) + 0.5y = 12 → 6 − 0.2y + 0.5y = 12 → 0.3y = 6 → y = 20 L."
    },
    {
      question: "A car travels 180 km in 3 hours at a constant speed. What is its speed?",
      options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
      answer: "60 km/h",
      explanation: "Speed = distance ÷ time = 180 ÷ 3 = 60 km/h."
    },
    {
      question: "A bicycle travels 90 km in 5 hours at a constant speed. How many hours will it take to travel 54 km at the same speed?",
      options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
      answer: "3 hours",
      explanation: "Speed = 90 ÷ 5 = 18 km/h. Time = 54 ÷ 18 = 3 hours."
    },
    {
      question: "A printer can print 600 pages in 8 minutes. At the same rate, how many pages can it print in 15 minutes?",
      options: ["900", "1,000", "1,125", "1,200"],
      answer: "1,125",
      explanation: "Rate = 600 ÷ 8 = 75 pages/min. In 15 minutes: 75 × 15 = 1,125 pages."
    },
    {
      question: "A worker earns ₱2,400 for 8 days of work at a constant daily rate. How much will the worker earn in 15 days?",
      options: ["₱4,000", "₱4,200", "₱4,500", "₱4,800"],
      answer: "₱4,500",
      explanation: "Daily rate = 2,400 ÷ 8 = ₱300. In 15 days: 300 × 15 = ₱4,500."
    },
    {
      question: "You save ₱150 each week. How many weeks will it take to save ₱3,600?",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "Let weeks = w. Then 150w = 3,600 → w = 3,600 ÷ 150 = 24."
    },
    {
      question: "In an arithmetic sequence, the nth term is given by aₙ = 3n + 2. What is the 10th term?",
      options: ["28", "30", "32", "34"],
      answer: "32",
      explanation: "a₁₀ = 3(10) + 2 = 32."
    },
    {
      question: "A rectangle has a perimeter of 52 cm. Its length is 4 cm more than its width. What is the width?",
      options: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      explanation: "Let width = w, length = w + 4. Perimeter: 2(w + w + 4) = 52 → 4w + 8 = 52 → 4w = 44 → w = 11 cm."
    },
    {
      question: "A rectangle has a perimeter of 60 cm. Its length is twice its width. What is the length?",
      options: ["10 cm", "15 cm", "20 cm", "25 cm"],
      answer: "20 cm",
      explanation: "Let width = w, length = 2w. Perimeter: 2(2w + w) = 60 → 6w = 60 → w = 10, so length = 20 cm."
    },
    {
      question: "A taxi charges a base fare of ₱40 plus ₱15 per kilometer. If a trip costs ₱190, how many kilometers was the trip?",
      options: ["8 km", "9 km", "10 km", "12 km"],
      answer: "10 km",
      explanation: "Total cost: 40 + 15k = 190 → 15k = 150 → k = 10 km."
    },
    {
      question: "A taxi charges a base fare of ₱50 plus ₱12 per kilometer. If a passenger pays ₱146, how many kilometers did they travel?",
      options: ["6 km", "7 km", "8 km", "9 km"],
      answer: "8 km",
      explanation: "50 + 12k = 146 → 12k = 96 → k = 8 km."
    },
    {
      question: "A phone plan costs ₱500 plus ₱2 per text message. If a customer's bill is ₱900, how many text messages did they send?",
      options: ["100", "150", "200", "250"],
      answer: "200",
      explanation: "500 + 2p = 900 → 2p = 400 → p = 200 texts."
    },
    {
      question: "For the linear function y = 3x − 4, what is the value of x if y = 11?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "3x − 4 = 11 → 3x = 15 → x = 5."
    },
    {
      question: "For the linear function y = 3x − 4, what is the value of y when x = −2?",
      options: ["−8", "−7", "−10", "−4"],
      answer: "−10",
      explanation: "y = 3(−2) − 4 = −6 − 4 = −10."
    }
  ]

};
