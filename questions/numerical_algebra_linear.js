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
      explanation: "Think of this as a balanced scale. On the left we have x plus 5, on the right we have 12. To find x, we need to remove 5 from both sides to keep it balanced. So, x + 5 - 5 = 12 - 5, which gives us x = 7."
    },
    {
      question: "Solve for x: x − 7 = 10",
      options: ["3", "10", "17", "27"],
      answer: "17",
      explanation: "Here we need to isolate x. The equation shows x minus 7 equals 10. To get x alone, we do the opposite operation - we add 7 to both sides. So, x - 7 + 7 = 10 + 7, which simplifies to x = 17."
    },
    {
      question: "Solve for x: 3x = 27",
      options: ["3", "6", "9", "12"],
      answer: "9",
      explanation: "The equation 3x = 27 means 3 times x equals 27. To find x, we need to undo the multiplication by dividing both sides by 3. So, 3x ÷ 3 = 27 ÷ 3, which gives x = 9."
    },
    {
      question: "Solve for x: x ÷ 4 = 6",
      options: ["12", "18", "24", "30"],
      answer: "24",
      explanation: "Here x is being divided by 4. To solve for x, we do the opposite operation - we multiply both sides by 4. So, (x ÷ 4) × 4 = 6 × 4, which simplifies to x = 24."
    },
    {
      question: "Solve for x: 2x + 3 = 11",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "This is a two-step equation. First, we get rid of the +3 by subtracting 3 from both sides: 2x + 3 - 3 = 11 - 3, so 2x = 8. Then, to find x, we divide both sides by 2: 2x ÷ 2 = 8 ÷ 2, giving x = 4."
    },
    {
      question: "Solve for x: 5x − 2 = 13",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "First, we remove the -2 by adding 2 to both sides: 5x - 2 + 2 = 13 + 2, so 5x = 15. Then we divide both sides by 5 to find x: 5x ÷ 5 = 15 ÷ 5, so x = 3."
    },
    {
      question: "Solve for x: x + 9 = 4",
      options: ["-5", "-4", "4", "5"],
      answer: "-5",
      explanation: "Subtract 9 from both sides to isolate x: x + 9 - 9 = 4 - 9, which simplifies to x = -5. Notice that when we subtract a larger number (9) from a smaller number (4), we get a negative result."
    },
    {
      question: "Solve for x: 7x = 0",
      options: ["-7", "0", "1", "7"],
      answer: "0",
      explanation: "When 7 times a number equals 0, the number must be 0. We can see this by dividing both sides by 7: 7x ÷ 7 = 0 ÷ 7, so x = 0. Zero times any number is always zero."
    },
    {
      question: "Solve for x: x/5 + 2 = 6",
      options: ["4", "10", "15", "20"],
      answer: "20",
      explanation: "First, subtract 2 from both sides: x/5 + 2 - 2 = 6 - 2, so x/5 = 4. Then multiply both sides by 5 to solve for x: (x/5) × 5 = 4 × 5, giving x = 20."
    },
    {
      question: "Solve for x: 4x − 8 = 0",
      options: ["0", "1", "2", "4"],
      answer: "2",
      explanation: "First, add 8 to both sides: 4x - 8 + 8 = 0 + 8, so 4x = 8. Then divide both sides by 4: 4x ÷ 4 = 8 ÷ 4, giving x = 2."
    },
    {
      question: "Solve for x: x − 3 = −10",
      options: ["-13", "-7", "7", "13"],
      answer: "-7",
      explanation: "Add 3 to both sides to isolate x: x - 3 + 3 = -10 + 3, which simplifies to x = -7. When adding a positive number to a negative number, we move toward zero."
    },
    {
      question: "Solve for x: 6x + 2 = 20",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Subtract 2 from both sides: 6x + 2 - 2 = 20 - 2, so 6x = 18. Then divide both sides by 6: 6x ÷ 6 = 18 ÷ 6, giving x = 3."
    },
    {
      question: "Solve for x: x + x = 10",
      options: ["2", "3", "4", "5"],
      answer: "5",
      explanation: "First, combine like terms: x + x = 2x, so we have 2x = 10. Then divide both sides by 2: 2x ÷ 2 = 10 ÷ 2, so x = 5."
    },
    {
      question: "Solve for x: 9x = 72",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Divide both sides by 9 to isolate x: 9x ÷ 9 = 72 ÷ 9. Since 9 × 8 = 72, we get x = 8."
    },
    {
      question: "Solve for x: x/3 = −4",
      options: ["-4", "-12", "4", "12"],
      answer: "-12",
      explanation: "Multiply both sides by 3 to solve for x: (x/3) × 3 = -4 × 3, which gives x = -12. Remember that a negative divided by a positive gives a negative result."
    },
    {
      question: "Solve for x: 2x − 5 = 1",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Add 5 to both sides: 2x - 5 + 5 = 1 + 5, so 2x = 6. Then divide by 2: 2x ÷ 2 = 6 ÷ 2, giving x = 3."
    },
    {
      question: "Solve for x: 3x + 4 = 16",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Subtract 4 from both sides: 3x + 4 - 4 = 16 - 4, so 3x = 12. Then divide by 3: 3x ÷ 3 = 12 ÷ 3, giving x = 4."
    },
    {
      question: "Solve for x: x − 8 = −2",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "Add 8 to both sides: x - 8 + 8 = -2 + 8, which simplifies to x = 6. Notice that -2 + 8 = 6."
    },
    {
      question: "Solve for x: 5x + 10 = 0",
      options: ["-4", "-2", "0", "2"],
      answer: "-2",
      explanation: "Subtract 10 from both sides: 5x + 10 - 10 = 0 - 10, so 5x = -10. Then divide by 5: 5x ÷ 5 = -10 ÷ 5, giving x = -2."
    },
    {
      question: "Solve for x: 4x − 3 = 13",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Add 3 to both sides: 4x - 3 + 3 = 13 + 3, so 4x = 16. Then divide by 4: 4x ÷ 4 = 16 ÷ 4, giving x = 4."
    },
    {
      question: "Solve for x: x/2 + 5 = 9",
      options: ["6", "8", "9", "10"],
      answer: "8",
      explanation: "Subtract 5 from both sides: x/2 + 5 - 5 = 9 - 5, so x/2 = 4. Then multiply both sides by 2: (x/2) × 2 = 4 × 2, giving x = 8."
    },
    {
      question: "Solve for x: 7x − 7 = 0",
      options: ["0", "1", "7", "14"],
      answer: "1",
      explanation: "Add 7 to both sides: 7x - 7 + 7 = 0 + 7, so 7x = 7. Then divide by 7: 7x ÷ 7 = 7 ÷ 7, giving x = 1."
    },
    {
      question: "Solve for x: 10x = 90",
      options: ["8", "9", "10", "11"],
      answer: "9",
      explanation: "Divide both sides by 10: 10x ÷ 10 = 90 ÷ 10. Since 10 × 9 = 90, we get x = 9."
    },
    {
      question: "Solve for x: x + 12 = 7",
      options: ["-7", "-5", "5", "7"],
      answer: "-5",
      explanation: "Subtract 12 from both sides: x + 12 - 12 = 7 - 12, which gives x = -5. When we subtract 12 from 7, we get a negative number."
    },
    {
      question: "Solve for x: 2x + 10 = 0",
      options: ["-10", "-5", "0", "5"],
      answer: "-5",
      explanation: "Subtract 10 from both sides: 2x + 10 - 10 = 0 - 10, so 2x = -10. Then divide by 2: 2x ÷ 2 = -10 ÷ 2, giving x = -5."
    },
    {
      question: "Solve for x: 3x − 9 = 0",
      options: ["1", "2", "3", "9"],
      answer: "3",
      explanation: "Add 9 to both sides: 3x - 9 + 9 = 0 + 9, so 3x = 9. Then divide by 3: 3x ÷ 3 = 9 ÷ 3, giving x = 3."
    },
    {
      question: "Solve for x: x/6 = 3",
      options: ["6", "12", "18", "24"],
      answer: "18",
      explanation: "Multiply both sides by 6: (x/6) × 6 = 3 × 6, which gives x = 18."
    },
    {
      question: "Solve for x: x − 15 = 5",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "Add 15 to both sides: x - 15 + 15 = 5 + 15, which simplifies to x = 20."
    },
    {
      question: "Solve for x: 8x = −24",
      options: ["-6", "-3", "3", "6"],
      answer: "-3",
      explanation: "Divide both sides by 8: 8x ÷ 8 = -24 ÷ 8. Since 8 × (-3) = -24, we get x = -3."
    },
    {
      question: "Solve for x: x/4 − 1 = 2",
      options: ["8", "10", "12", "16"],
      answer: "12",
      explanation: "Add 1 to both sides: x/4 - 1 + 1 = 2 + 1, so x/4 = 3. Then multiply by 4: (x/4) × 4 = 3 × 4, giving x = 12."
    },
    {
      question: "A number plus 5 equals 12. What is the number?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Let's translate the words into an equation: 'a number' means x, 'plus 5' means +5, 'equals 12' means = 12. So we have x + 5 = 12. Subtract 5 from both sides: x = 12 - 5 = 7."
    },
    {
      question: "Twice a number is 18. What is the number?",
      options: ["6", "8", "9", "10"],
      answer: "9",
      explanation: "'Twice a number' means 2 × x or 2x, 'is 18' means = 18. So 2x = 18. Divide both sides by 2: x = 18 ÷ 2 = 9."
    },
    {
      question: "A number minus 7 is 3. What is the number?",
      options: ["3", "7", "10", "13"],
      answer: "10",
      explanation: "'A number minus 7' means x - 7, 'is 3' means = 3. So x - 7 = 3. Add 7 to both sides: x = 3 + 7 = 10."
    },
    {
      question: "Three times a number equals 21. What is the number?",
      options: ["5", "6", "7", "9"],
      answer: "7",
      explanation: "'Three times a number' means 3x, 'equals 21' means = 21. So 3x = 21. Divide both sides by 3: x = 21 ÷ 3 = 7."
    },
    {
      question: "A number divided by 4 is 5. What is the number?",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "'A number divided by 4' means x/4, 'is 5' means = 5. So x/4 = 5. Multiply both sides by 4: x = 5 × 4 = 20."
    },
    {
      question: "Solve for x: x + 5 = 2x − 3",
      options: ["4", "6", "8", "10"],
      answer: "8",
      explanation: "First, get all x terms on one side by subtracting x from both sides: x + 5 - x = 2x - 3 - x, which simplifies to 5 = x - 3. Then add 3 to both sides: 5 + 3 = x - 3 + 3, so x = 8."
    },
    {
      question: "Solve for x: 4x + 2 = 3x + 5",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Subtract 3x from both sides to get x terms together: 4x + 2 - 3x = 3x + 5 - 3x, which gives x + 2 = 5. Then subtract 2 from both sides: x + 2 - 2 = 5 - 2, so x = 3."
    },
    {
      question: "Solve for x: 5x − 4 = 2x + 2",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Subtract 2x from both sides: 5x - 4 - 2x = 2x + 2 - 2x, so 3x - 4 = 2. Add 4 to both sides: 3x - 4 + 4 = 2 + 4, so 3x = 6. Divide by 3: x = 6 ÷ 3 = 2."
    },
    {
      question: "Solve for x: 7x + 1 = 1",
      options: ["-1", "0", "1", "7"],
      answer: "0",
      explanation: "Subtract 1 from both sides: 7x + 1 - 1 = 1 - 1, so 7x = 0. Divide by 7: x = 0 ÷ 7 = 0."
    },
    {
      question: "Solve for x: 9x − 5 = 4x + 10",
      options: ["1", "2", "3", "5"],
      answer: "3",
      explanation: "Subtract 4x from both sides: 9x - 5 - 4x = 4x + 10 - 4x, so 5x - 5 = 10. Add 5 to both sides: 5x - 5 + 5 = 10 + 5, so 5x = 15. Divide by 5: x = 15 ÷ 5 = 3."
    },
    {
      question: "Solve for x: 6x + 3 = 3x + 15",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Subtract 3x from both sides: 6x + 3 - 3x = 3x + 15 - 3x, so 3x + 3 = 15. Subtract 3 from both sides: 3x + 3 - 3 = 15 - 3, so 3x = 12. Divide by 3: x = 12 ÷ 3 = 4."
    },
    {
      question: "Solve for x: 2x − 7 = x + 1",
      options: ["4", "6", "8", "10"],
      answer: "8",
      explanation: "Subtract x from both sides: 2x - 7 - x = x + 1 - x, so x - 7 = 1. Add 7 to both sides: x - 7 + 7 = 1 + 7, so x = 8."
    },
    {
      question: "Solve for x: x/3 + 2 = 5",
      options: ["3", "6", "9", "12"],
      answer: "9",
      explanation: "Subtract 2 from both sides: x/3 + 2 - 2 = 5 - 2, so x/3 = 3. Multiply both sides by 3: (x/3) × 3 = 3 × 3, giving x = 9."
    },
    {
      question: "Solve for x: x/2 − 4 = 2",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "Add 4 to both sides: x/2 - 4 + 4 = 2 + 4, so x/2 = 6. Multiply both sides by 2: (x/2) × 2 = 6 × 2, giving x = 12."
    },
    {
      question: "Solve for x: 2x − 10 = x − 4",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Subtract x from both sides: 2x - 10 - x = x - 4 - x, so x - 10 = -4. Add 10 to both sides: x - 10 + 10 = -4 + 10, so x = 6."
    },
    {
      question: "Solve for x: 5x + 5 = 0",
      options: ["-5", "-1", "0", "1"],
      answer: "-1",
      explanation: "Subtract 5 from both sides: 5x + 5 - 5 = 0 - 5, so 5x = -5. Divide by 5: x = -5 ÷ 5 = -1."
    },
    {
      question: "Solve for x: 3x − 2 = 13",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Add 2 to both sides: 3x - 2 + 2 = 13 + 2, so 3x = 15. Divide by 3: x = 15 ÷ 3 = 5."
    },
    {
      question: "Solve for x: x/5 + x/5 = 8",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "Combine the fractions: x/5 + x/5 = 2x/5. So we have 2x/5 = 8. Multiply both sides by 5: 2x = 40. Divide by 2: x = 40 ÷ 2 = 20."
    },
    {
      question: "Solve for x: x/2 + 3 = x",
      options: ["3", "4", "5", "6"],
      answer: "6",
      explanation: "Subtract x/2 from both sides: x/2 + 3 - x/2 = x - x/2, so 3 = x/2. Multiply both sides by 2: 3 × 2 = (x/2) × 2, giving 6 = x or x = 6."
    },
    {
      question: "Solve for x: 4x − x = 9",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Combine like terms: 4x - x = 3x. So we have 3x = 9. Divide both sides by 3: x = 9 ÷ 3 = 3."
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
      explanation: "First, distribute the 2: 2 × x + 2 × 3 = 2x + 6. So we have 2x + 6 = 18. Subtract 6 from both sides: 2x = 12. Divide by 2: x = 6."
    },
    {
      question: "Solve for x: 3(x − 4) = 9",
      options: ["3", "5", "7", "9"],
      answer: "7",
      explanation: "Distribute the 3: 3 × x - 3 × 4 = 3x - 12. So 3x - 12 = 9. Add 12 to both sides: 3x = 21. Divide by 3: x = 7."
    },
    {
      question: "Solve for x: 4(x + 5) = 2x + 18",
      options: ["-1", "0", "1", "2"],
      answer: "-1",
      explanation: "First distribute: 4x + 20 = 2x + 18. Subtract 2x from both sides: 4x - 2x + 20 = 18, so 2x + 20 = 18. Subtract 20: 2x = -2. Divide by 2: x = -1."
    },
    {
      question: "Solve for x: 5x − 7 = 3x + 9",
      options: ["5", "6", "7", "8"],
      answer: "8",
      explanation: "Get x terms on one side by subtracting 3x: 5x - 3x - 7 = 9, so 2x - 7 = 9. Add 7: 2x = 16. Divide by 2: x = 8."
    },
    {
      question: "Solve for x: x/2 + 5 = 11",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "Subtract 5: x/2 = 6. Multiply by 2: x = 12."
    },
    {
      question: "Solve for x: (3x)/4 − 2 = 4",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Add 2: 3x/4 = 6. Multiply by 4: 3x = 24. Divide by 3: x = 8."
    },
    {
      question: "Solve for x: (x − 3)/5 = 4",
      options: ["18", "20", "22", "23"],
      answer: "23",
      explanation: "Multiply both sides by 5: x - 3 = 20. Add 3: x = 23."
    },
    {
      question: "Solve for x: (2x + 1)/3 = 5",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Multiply by 3: 2x + 1 = 15. Subtract 1: 2x = 14. Divide by 2: x = 7."
    },
    {
      question: "Solve for x: 5(x − 2) = 3x + 4",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Distribute: 5x - 10 = 3x + 4. Subtract 3x: 2x - 10 = 4. Add 10: 2x = 14. Divide by 2: x = 7."
    },
    {
      question: "Solve for x: 4(x + 1) − 2x = 10",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Distribute: 4x + 4 - 2x = 10. Combine like terms: 2x + 4 = 10. Subtract 4: 2x = 6. Divide by 2: x = 3."
    },
    {
      question: "Solve for x: 3(x + 2) + 4 = 2x + 15",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Distribute: 3x + 6 + 4 = 2x + 15. Combine: 3x + 10 = 2x + 15. Subtract 2x: x + 10 = 15. Subtract 10: x = 5."
    },
    {
      question: "Solve for x: 6x − (x + 5) = 15",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Distribute negative: 6x - x - 5 = 15. Combine: 5x - 5 = 15. Add 5: 5x = 20. Divide by 5: x = 4."
    },
    {
      question: "Solve for x: (x + 4)/2 + 3 = 10",
      options: ["6", "8", "10", "12"],
      answer: "10",
      explanation: "Subtract 3: (x + 4)/2 = 7. Multiply by 2: x + 4 = 14. Subtract 4: x = 10."
    },
    {
      question: "Solve for x: (2x − 1)/5 = 3",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Multiply by 5: 2x - 1 = 15. Add 1: 2x = 16. Divide by 2: x = 8."
    },
    {
      question: "Solve for x: 0.5x + 3 = 11",
      options: ["12", "14", "16", "18"],
      answer: "16",
      explanation: "Subtract 3: 0.5x = 8. Divide by 0.5 (or multiply by 2): x = 16."
    },
    {
      question: "Solve for x: 1.2x = 9.6",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Divide both sides by 1.2: x = 9.6 ÷ 1.2 = 8."
    },
    {
      question: "Solve for x: 4x − 0.5x = 7",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Combine like terms: 4x - 0.5x = 3.5x. So 3.5x = 7. Divide by 3.5: x = 7 ÷ 3.5 = 2."
    },
    {
      question: "Solve for x: 3(2x − 1) = 5x + 7",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "Distribute: 6x - 3 = 5x + 7. Subtract 5x: x - 3 = 7. Add 3: x = 10."
    },
    {
      question: "Solve for x: x/3 + x/6 = 6",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "Find common denominator (6): 2x/6 + x/6 = 3x/6 = x/2. So x/2 = 6. Multiply by 2: x = 12."
    },
    {
      question: "Solve for x: x/4 − x/8 = 3",
      options: ["12", "18", "24", "30"],
      answer: "24",
      explanation: "Common denominator (8): 2x/8 - x/8 = x/8. So x/8 = 3. Multiply by 8: x = 24."
    },
    {
      question: "Solve for x: 2x/3 + 4 = 10",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "Subtract 4: 2x/3 = 6. Multiply by 3: 2x = 18. Divide by 2: x = 9."
    },
    {
      question: "Solve for x: 5x/2 − 3 = 12",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Add 3: 5x/2 = 15. Multiply by 2: 5x = 30. Divide by 5: x = 6."
    },
    {
      question: "Solve for x: (x − 2)/4 + (x + 2)/4 = 5",
      options: ["6", "8", "10", "12"],
      answer: "10",
      explanation: "Combine fractions: (x - 2 + x + 2)/4 = (2x)/4 = x/2. So x/2 = 5. Multiply by 2: x = 10."
    },
    {
      question: "Solve for x: (3x + 2)/5 − 1 = 3",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Add 1: (3x + 2)/5 = 4. Multiply by 5: 3x + 2 = 20. Subtract 2: 3x = 18. Divide by 3: x = 6."
    },
    {
      question: "Solve for x: 2(x + 5) = 3(x − 1)",
      options: ["9", "11", "13", "15"],
      answer: "13",
      explanation: "Distribute: 2x + 10 = 3x - 3. Subtract 2x: 10 = x - 3. Add 3: x = 13."
    },
    {
      question: "Solve for x: 5(x − 3) = 2(x + 6)",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "Distribute: 5x - 15 = 2x + 12. Subtract 2x: 3x - 15 = 12. Add 15: 3x = 27. Divide by 3: x = 9."
    },
    {
      question: "Solve for x: 7(x + 1) − 3x = 27",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Distribute: 7x + 7 - 3x = 27. Combine: 4x + 7 = 27. Subtract 7: 4x = 20. Divide by 4: x = 5."
    },
    {
      question: "Solve for x: 9x − 4(2x − 3) = 10",
      options: ["-2", "-1", "0", "1"],
      answer: "-2",
      explanation: "Distribute: 9x - 8x + 12 = 10. Combine: x + 12 = 10. Subtract 12: x = -2."
    },
    {
      question: "Solve for x: 3(2x + 1) − (x − 5) = 23",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Distribute: 6x + 3 - x + 5 = 23. Combine: 5x + 8 = 23. Subtract 8: 5x = 15. Divide by 5: x = 3."
    },
    {
      question: "Solve for x: 4(x − 2) + 3(x + 1) = 9",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Distribute: 4x - 8 + 3x + 3 = 9. Combine: 7x - 5 = 9. Add 5: 7x = 14. Divide by 7: x = 2."
    },
    {
      question: "If 3 more than twice a number is 17, what is the number?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Let the number be x. 'Twice a number' is 2x, '3 more than' means +3, 'is 17' means = 17. So: 2x + 3 = 17. Subtract 3: 2x = 14. Divide by 2: x = 7."
    },
    {
      question: "If 5 less than three times a number is 13, what is the number?",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation: "Let the number be x. 'Three times a number' is 3x, '5 less than' means -5, 'is 13' means = 13. So: 3x - 5 = 13. Add 5: 3x = 18. Divide by 3: x = 6."
    },
    {
      question: "A number divided by 3 then increased by 4 equals 10. What is the number?",
      options: ["12", "15", "18", "21"],
      answer: "18",
      explanation: "Let the number be x. 'Divided by 3' means x/3, 'increased by 4' means +4, 'equals 10' means = 10. So: x/3 + 4 = 10. Subtract 4: x/3 = 6. Multiply by 3: x = 18."
    },
    {
      question: "The sum of a number and 4 is equal to twice the number minus 2. What is the number?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Let the number be x. 'Sum of a number and 4' means x + 4, 'is equal to' means =, 'twice the number minus 2' means 2x - 2. So: x + 4 = 2x - 2. Subtract x: 4 = x - 2. Add 2: x = 6."
    },
    {
      question: "Six more than a number is equal to three times the number. What is the number?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Let the number be x. 'Six more than a number' means x + 6, 'is equal to three times the number' means = 3x. So: x + 6 = 3x. Subtract x: 6 = 2x. Divide by 2: x = 3."
    },
    {
      question: "Three times a number decreased by 4 equals 2 more than the number. What is the number?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Let the number be x. 'Three times a number decreased by 4' means 3x - 4, 'equals' means =, '2 more than the number' means x + 2. So: 3x - 4 = x + 2. Subtract x: 2x - 4 = 2. Add 4: 2x = 6. Divide by 2: x = 3."
    },
    {
      question: "When 8 is added to a number, the result is 5 less than twice the number. What is the number?",
      options: ["10", "11", "12", "13"],
      answer: "13",
      explanation: "Let the number be x. '8 added to a number' means x + 8, 'result is' means =, '5 less than twice the number' means 2x - 5. So: x + 8 = 2x - 5. Subtract x: 8 = x - 5. Add 5: x = 13."
    },
    {
      question: "Solve for x: 0.4x + 3 = 0.1x + 6",
      options: ["5", "8", "9", "10"],
      answer: "10",
      explanation: "Subtract 0.1x: 0.4x - 0.1x + 3 = 6, so 0.3x + 3 = 6. Subtract 3: 0.3x = 3. Divide by 0.3 (or multiply by 10/3): x = 10."
    },
    {
      question: "Solve for x: 0.2x − 1 = 0.1x + 2",
      options: ["20", "25", "30", "35"],
      answer: "30",
      explanation: "Subtract 0.1x: 0.2x - 0.1x - 1 = 2, so 0.1x - 1 = 2. Add 1: 0.1x = 3. Divide by 0.1 (or multiply by 10): x = 30."
    },
    {
      question: "Solve for x: x/2 + x/3 = 10",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "Common denominator (6): 3x/6 + 2x/6 = 5x/6. So 5x/6 = 10. Multiply by 6: 5x = 60. Divide by 5: x = 12."
    },
    {
      question: "Solve for x: x/5 − x/10 = 3",
      options: ["15", "20", "25", "30"],
      answer: "30",
      explanation: "Common denominator (10): 2x/10 - x/10 = x/10. So x/10 = 3. Multiply by 10: x = 30."
    },
    {
      question: "Solve for x: (x + 1)/2 + (x − 1)/3 = 7",
      options: ["6", "7", "8.2", "9"],
      answer: "8.2",
      explanation: "Common denominator (6): 3(x+1)/6 + 2(x-1)/6 = 7. Combine: (3x+3+2x-2)/6 = 7, so (5x+1)/6 = 7. Multiply by 6: 5x + 1 = 42. Subtract 1: 5x = 41. Divide by 5: x = 8.2."
    },
    {
      question: "Solve for x: (3x − 2)/4 = (x + 1)/2",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Cross-multiply: 2(3x - 2) = 4(x + 1). So 6x - 4 = 4x + 4. Subtract 4x: 2x - 4 = 4. Add 4: 2x = 8. Divide by 2: x = 4."
    },
    {
      question: "Solve for x: (5x + 3)/2 = 3x − 1",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Multiply by 2: 5x + 3 = 2(3x - 1) = 6x - 2. Subtract 5x: 3 = x - 2. Add 2: x = 5."
    },
    {
      question: "Solve for x: 4(x − 1) = 3(x + 5) − 2",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "Distribute left: 4x - 4. Distribute right: 3x + 15 - 2 = 3x + 13. So: 4x - 4 = 3x + 13. Subtract 3x: x - 4 = 13. Add 4: x = 17."
    },
    {
      question: "Solve for x: 2(x + 4) − 3 = x + 9",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Distribute: 2x + 8 - 3 = x + 9. Simplify: 2x + 5 = x + 9. Subtract x: x + 5 = 9. Subtract 5: x = 4."
    },
    {
      question: "Solve for x: 3(x − 2) + 2 = 2(x + 1) + 5",
      options: ["9", "10", "11", "12"],
      answer: "11",
      explanation: "Distribute left: 3x - 6 + 2 = 3x - 4. Distribute right: 2x + 2 + 5 = 2x + 7. So: 3x - 4 = 2x + 7. Subtract 2x: x - 4 = 7. Add 4: x = 11."
    },
    {
      question: "Solve for x: (x − 4)/3 + 2 = (x + 5)/6",
      options: ["-1", "0", "1", "2"],
      answer: "1",
      explanation: "Multiply all terms by 6: 2(x - 4) + 12 = x + 5. So: 2x - 8 + 12 = x + 5 → 2x + 4 = x + 5. Subtract x: x + 4 = 5. Subtract 4: x = 1."
    },
    {
      question: "Solve for x: (2x + 5)/3 − (x − 1)/2 = 4",
      options: ["9", "10", "11", "12"],
      answer: "11",
      explanation: "Multiply all by 6: 2(2x + 5) - 3(x - 1) = 24. So: 4x + 10 - 3x + 3 = 24 → x + 13 = 24. Subtract 13: x = 11."
    },
    {
      question: "Solve for x: 7(x − 3) + 2 = 3(x + 1) + 10",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Distribute left: 7x - 21 + 2 = 7x - 19. Distribute right: 3x + 3 + 10 = 3x + 13. So: 7x - 19 = 3x + 13. Subtract 3x: 4x - 19 = 13. Add 19: 4x = 32. Divide by 4: x = 8."
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
      explanation: "Let the three consecutive integers be x, x+1, and x+2. Their sum: x + (x+1) + (x+2) = 3x + 3 = 54. Subtract 3: 3x = 51. Divide by 3: x = 17. The middle integer is x+1 = 18."
    },
    {
      question: "The sum of three consecutive even integers is 72. What is the smallest integer?",
      options: ["20", "22", "24", "26"],
      answer: "22",
      explanation: "Let the three consecutive even integers be x, x+2, and x+4. Their sum: x + (x+2) + (x+4) = 3x + 6 = 72. Subtract 6: 3x = 66. Divide by 3: x = 22."
    },
    {
      question: "The sum of two numbers is 35 and their difference is 9. What is the larger number?",
      options: ["13", "22", "24", "26"],
      answer: "22",
      explanation: "Let the larger number be L and smaller be S. L + S = 35 and L - S = 9. Add the two equations: (L+S) + (L-S) = 35 + 9 → 2L = 44 → L = 22."
    },
    {
      question: "The sum of two numbers is 50 and one number is 6 more than the other. What is the larger number?",
      options: ["22", "24", "26", "28"],
      answer: "28",
      explanation: "Let smaller = x, larger = x+6. Then x + (x+6) = 50 → 2x + 6 = 50 → 2x = 44 → x = 22. Larger = 22 + 6 = 28."
    },
    {
      question: "The sum of three consecutive odd integers is 75. What is the largest integer?",
      options: ["23", "25", "27", "29"],
      answer: "27",
      explanation: "Let the odd integers be x, x+2, x+4. Their sum: 3x + 6 = 75 → 3x = 69 → x = 23. Largest = 23 + 4 = 27."
    },
    {
      question: "Solve for x: x + 4 = 3x − 10",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Subtract x: 4 = 2x - 10. Add 10: 14 = 2x. Divide by 2: x = 7."
    },
    {
      question: "Solve for x: 5x − 7 = 3x + 1",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Subtract 3x: 2x - 7 = 1. Add 7: 2x = 8. Divide by 2: x = 4."
    },
    {
      question: "Solve for x: 4x + 9 = 2x + 21",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Subtract 2x: 2x + 9 = 21. Subtract 9: 2x = 12. Divide by 2: x = 6."
    },
    {
      question: "Solve for x: 7x − 5 = 2x + 20",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Subtract 2x: 5x - 5 = 20. Add 5: 5x = 25. Divide by 5: x = 5."
    },
    {
      question: "Solve for x: 9x + 3 = 4x + 28",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Subtract 4x: 5x + 3 = 28. Subtract 3: 5x = 25. Divide by 5: x = 5."
    },
    {
      question: "Solve for x: 6(x − 2) = 3(x + 6)",
      options: ["6", "8", "9", "10"],
      answer: "10",
      explanation: "Distribute: 6x - 12 = 3x + 18. Subtract 3x: 3x - 12 = 18. Add 12: 3x = 30. Divide by 3: x = 10."
    },
    {
      question: "Solve for x: 4(x + 3) − 5 = 3(x + 7)",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "Distribute left: 4x + 12 - 5 = 4x + 7. Distribute right: 3x + 21. So: 4x + 7 = 3x + 21. Subtract 3x: x + 7 = 21. Subtract 7: x = 14."
    },
    {
      question: "Solve for x: 3(2x − 1) = 5(x − 2)",
      options: ["−5", "−7", "−9", "−11"],
      answer: "−7",
      explanation: "Distribute: 6x - 3 = 5x - 10. Subtract 5x: x - 3 = -10. Add 3: x = -7."
    },
    {
      question: "Solve for x: 5(x + 1) − 2(x − 3) = 4x + 20",
      options: ["−11", "−9", "−7", "−5"],
      answer: "−9",
      explanation: "Distribute: 5x + 5 - 2x + 6 = 4x + 20 → 3x + 11 = 4x + 20. Subtract 3x: 11 = x + 20. Subtract 20: x = -9."
    },
    {
      question: "Solve for x: 7(x − 2) + 4 = 3(x + 6)",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Distribute left: 7x - 14 + 4 = 7x - 10. Distribute right: 3x + 18. So: 7x - 10 = 3x + 18. Subtract 3x: 4x - 10 = 18. Add 10: 4x = 28. Divide by 4: x = 7."
    },
    {
      question: "Solve for x: x/3 + 5 = 11",
      options: ["12", "15", "18", "21"],
      answer: "18",
      explanation: "Subtract 5: x/3 = 6. Multiply by 3: x = 18."
    },
    {
      question: "Solve for x: x/4 − 2 = 3",
      options: ["12", "16", "20", "24"],
      answer: "20",
      explanation: "Add 2: x/4 = 5. Multiply by 4: x = 20."
    },
    {
      question: "Solve for x: (x + 3)/5 = 4",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "Multiply by 5: x + 3 = 20. Subtract 3: x = 17."
    },
    {
      question: "Solve for x: (2x − 1)/3 = 5",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Multiply by 3: 2x - 1 = 15. Add 1: 2x = 16. Divide by 2: x = 8."
    },
    {
      question: "Solve for x: (3x + 4)/2 = 13",
      options: ["6", "7", "22/3", "10"],
      answer: "22/3",
      explanation: "Multiply by 2: 3x + 4 = 26. Subtract 4: 3x = 22. Divide by 3: x = 22/3 ≈ 7.33."
    },
    {
      question: "Solve for x: (5x − 2)/4 = 7",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "Multiply by 4: 5x - 2 = 28. Add 2: 5x = 30. Divide by 5: x = 6."
    },
    {
      question: "Solve for x: (x − 5)/6 + 2 = 5",
      options: ["17", "19", "21", "23"],
      answer: "23",
      explanation: "Subtract 2: (x - 5)/6 = 3. Multiply by 6: x - 5 = 18. Add 5: x = 23."
    },
    {
      question: "Solve for x: (x + 2)/3 − 1 = 4",
      options: ["11", "12", "13", "14"],
      answer: "13",
      explanation: "Add 1: (x + 2)/3 = 5. Multiply by 3: x + 2 = 15. Subtract 2: x = 13."
    },
    {
      question: "Solve for x: 2 − (x − 1)/4 = 1",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Subtract 2: -(x - 1)/4 = -1. Multiply by -1: (x - 1)/4 = 1. Multiply by 4: x - 1 = 4. Add 1: x = 5."
    },
    {
      question: "Solve for x: x/2 + x/3 = 10",
      options: ["6", "8", "10", "12"],
      answer: "12",
      explanation: "Common denominator (6): 3x/6 + 2x/6 = 5x/6. So 5x/6 = 10. Multiply by 6: 5x = 60. Divide by 5: x = 12."
    },
    {
      question: "Solve for x: 5 − 2x = 11",
      options: ["−5", "−4", "−3", "−2"],
      answer: "−3",
      explanation: "Subtract 5: -2x = 6. Divide by -2: x = -3."
    },
    {
      question: "Solve for x: 3 − 4x = 19",
      options: ["−6", "−5", "−4", "−3"],
      answer: "−4",
      explanation: "Subtract 3: -4x = 16. Divide by -4: x = -4."
    },
    {
      question: "Solve for x: 7x + 12 = 4 − x",
      options: ["−2", "−1", "0", "1"],
      answer: "−1",
      explanation: "Add x: 8x + 12 = 4. Subtract 12: 8x = -8. Divide by 8: x = -1."
    },
    {
      question: "Solve for x: 9 − 3x = 2(x + 1)",
      options: ["7/5", "6/5", "5/4", "4/5"],
      answer: "7/5",
      explanation: "Distribute right: 9 - 3x = 2x + 2. Add 3x: 9 = 5x + 2. Subtract 2: 7 = 5x. Divide by 5: x = 7/5 = 1.4."
    },
    {
      question: "Solve for x: 2(3x − 5) = x + 7",
      options: ["17/5", "14/5", "11/5", "8/5"],
      answer: "17/5",
      explanation: "Distribute: 6x - 10 = x + 7. Subtract x: 5x - 10 = 7. Add 10: 5x = 17. Divide by 5: x = 17/5 = 3.4."
    },
    {
      question: "Solve for x: 4(2x + 1) − 3(x − 2) = 5",
      options: ["−2", "−1", "0", "1"],
      answer: "−1",
      explanation: "Distribute: 8x + 4 - 3x + 6 = 5 → 5x + 10 = 5. Subtract 10: 5x = -5. Divide by 5: x = -1."
    },
    {
      question: "Solve for x: 3(x − 4) + 2(x + 1) = 4",
      options: ["14/5", "11/5", "9/5", "7/5"],
      answer: "14/5",
      explanation: "Distribute: 3x - 12 + 2x + 2 = 4 → 5x - 10 = 4. Add 10: 5x = 14. Divide by 5: x = 14/5 = 2.8."
    },
    {
      question: "Solve for x: (x − 2)/5 = (x + 1)/10",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Cross-multiply: 10(x - 2) = 5(x + 1) → 10x - 20 = 5x + 5. Subtract 5x: 5x - 20 = 5. Add 20: 5x = 25. Divide by 5: x = 5."
    },
    {
      question: "Solve for x: (2x + 3)/3 = (x − 1)/2",
      options: ["−11", "−9", "−7", "−5"],
      answer: "−9",
      explanation: "Cross-multiply: 2(2x + 3) = 3(x - 1) → 4x + 6 = 3x - 3. Subtract 3x: x + 6 = -3. Subtract 6: x = -9."
    },
    {
      question: "Solve for x: (x + 5)/2 + (x − 1)/4 = 7",
      options: ["17/3", "19/3", "21/3", "23/3"],
      answer: "19/3",
      explanation: "Multiply all by 4: 2(x + 5) + (x - 1) = 28 → 2x + 10 + x - 1 = 28 → 3x + 9 = 28. Subtract 9: 3x = 19. Divide by 3: x = 19/3 ≈ 6.33."
    },
    {
      question: "The perimeter of a rectangle is 50 cm. Its length is 5 cm more than its width. What is the length?",
      options: ["10 cm", "12 cm", "15 cm", "20 cm"],
      answer: "15 cm",
      explanation: "Let width = w, length = w + 5. Perimeter = 2(length + width) = 2(w + w + 5) = 2(2w + 5) = 4w + 10 = 50. Subtract 10: 4w = 40. Divide by 4: w = 10. Length = 10 + 5 = 15 cm."
    },
    {
      question: "The perimeter of a square is 64 cm. What is the length of one side?",
      options: ["14 cm", "15 cm", "16 cm", "18 cm"],
      answer: "16 cm",
      explanation: "Perimeter of square = 4 × side. So 4s = 64. Divide by 4: s = 16 cm."
    },
    {
      question: "A number increased by 25% becomes 45. What is the original number?",
      options: ["30", "32", "34", "36"],
      answer: "36",
      explanation: "Let original number = x. Increased by 25% means 1.25x. So 1.25x = 45. Divide by 1.25: x = 45 ÷ 1.25 = 36."
    },
    {
      question: "When 12 is subtracted from twice a number, the result is 20. What is the number?",
      options: ["14", "15", "16", "18"],
      answer: "16",
      explanation: "Let number = x. Twice the number minus 12: 2x - 12 = 20. Add 12: 2x = 32. Divide by 2: x = 16."
    },
    {
      question: "If 5 is added to three times a number, the result is 26. What is the number?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Let number = x. 3x + 5 = 26. Subtract 5: 3x = 21. Divide by 3: x = 7."
    },
    {
      question: "The sum of a number and its half is 18. What is the number?",
      options: ["10", "12", "15", "18"],
      answer: "12",
      explanation: "Let number = x. x + x/2 = 18 → (3x/2) = 18. Multiply by 2: 3x = 36. Divide by 3: x = 12."
    },
    {
      question: "The sum of a number and its third is 16. What is the number?",
      options: ["9", "10", "11", "12"],
      answer: "12",
      explanation: "Let number = x. x + x/3 = 16 → (4x/3) = 16. Multiply by 3: 4x = 48. Divide by 4: x = 12."
    },
    {
      question: "A number minus its quarter equals 21. What is the number?",
      options: ["24", "26", "28", "30"],
      answer: "28",
      explanation: "Let number = x. x - x/4 = 21 → (3x/4) = 21. Multiply by 4: 3x = 84. Divide by 3: x = 28."
    },
    {
      question: "Twice a number plus its third equals 22. What is the number?",
      options: ["66/7", "22/3", "20/3", "18/5"],
      answer: "66/7",
      explanation: "Let number = x. 2x + x/3 = 22 → (6x/3 + x/3) = 7x/3 = 22. Multiply by 3: 7x = 66. Divide by 7: x = 66/7 ≈ 9.43."
    },
    {
      question: "If 4 is subtracted from a number and the result is divided by 3, the answer is 5. What is the number?",
      options: ["15", "17", "19", "21"],
      answer: "19",
      explanation: "Let number = x. (x - 4)/3 = 5. Multiply by 3: x - 4 = 15. Add 4: x = 19."
    },
    {
      question: "Solve for x: 0.5x + 7 = 17",
      options: ["14", "16", "18", "20"],
      answer: "20",
      explanation: "Subtract 7: 0.5x = 10. Divide by 0.5 (or multiply by 2): x = 20."
    },
    {
      question: "Solve for x: 1.2x − 4.8 = 7.2",
      options: ["8", "9", "10", "12"],
      answer: "10",
      explanation: "Add 4.8: 1.2x = 12. Divide by 1.2: x = 10."
    },
    {
      question: "Solve for x: 0.8x + 3.6 = 7.2",
      options: ["3.5", "4", "4.5", "5"],
      answer: "4.5",
      explanation: "Subtract 3.6: 0.8x = 3.6. Divide by 0.8: x = 4.5."
    },
    {
      question: "Solve for x: 2.5x = 17.5",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "Divide by 2.5: x = 17.5 ÷ 2.5 = 7."
    },
    {
      question: "Solve for x: 3.6x − 1.8 = 16.2",
      options: ["4", "4.5", "5", "5.5"],
      answer: "5",
      explanation: "Add 1.8: 3.6x = 18. Divide by 3.6: x = 5."
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
      explanation: "Add the two equations to eliminate y: (x+y) + (x-y) = 12 + 4 → 2x = 16 → x = 8. Substitute x=8 into first equation: 8 + y = 12 → y = 4. Solution: (8, 4)."
    },
    {
      question: "Solve the system: 2x + y = 11 and x + y = 8. What is (x, y)?",
      options: ["(3, 5)", "(4, 4)", "(5, 3)", "(2, 6)"],
      answer: "(3, 5)",
      explanation: "Subtract second equation from first: (2x+y) - (x+y) = 11 - 8 → x = 3. Substitute x=3 into x+y=8: 3 + y = 8 → y = 5. Solution: (3, 5)."
    },
    {
      question: "Solve the system: 3x − y = 7 and x + y = 5. What is (x, y)?",
      options: ["(2, 3)", "(3, 2)", "(4, 1)", "(1, 4)"],
      answer: "(3, 2)",
      explanation: "From second equation: y = 5 - x. Substitute into first: 3x - (5 - x) = 7 → 3x - 5 + x = 7 → 4x = 12 → x = 3. Then y = 5 - 3 = 2. Solution: (3, 2)."
    },
    {
      question: "Solve the system: 4x + 3y = 25 and x + y = 7. What is (x, y)?",
      options: ["(3, 4)", "(4, 3)", "(5, 2)", "(2, 5)"],
      answer: "(4, 3)",
      explanation: "From second equation: x = 7 - y. Substitute into first: 4(7-y) + 3y = 25 → 28 - 4y + 3y = 25 → -y = -3 → y = 3. Then x = 7 - 3 = 4. Solution: (4, 3)."
    },
    {
      question: "Solve the system: 2x − 3y = 1 and x + 2y = 11. What is (x, y)?",
      options: ["(5, 3)", "(4, 3)", "(5, 2)", "(6, 1)"],
      answer: "(5, 3)",
      explanation: "From second equation: x = 11 - 2y. Substitute into first: 2(11-2y) - 3y = 1 → 22 - 4y - 3y = 1 → -7y = -21 → y = 3. Then x = 11 - 2(3) = 5. Solution: (5, 3)."
    },
    {
      question: "Solve the system: 3x + 4y = 18 and 2x − y = 1. What is (x, y)?",
      options: ["(2, 3)", "(3, 2)", "(4, 1)", "(1, 4)"],
      answer: "(2, 3)",
      explanation: "From second equation: y = 2x - 1. Substitute into first: 3x + 4(2x-1) = 18 → 3x + 8x - 4 = 18 → 11x = 22 → x = 2. Then y = 2(2) - 1 = 3. Solution: (2, 3)."
    },
    {
      question: "Solve the system: x − 3y = −5 and 2x + y = 11. What is (x, y)?",
      options: ["(3, 4)", "(4, 3)", "(5, 2)", "(6, 1)"],
      answer: "(4, 3)",
      explanation: "From first equation: x = 3y - 5. Substitute into second: 2(3y-5) + y = 11 → 6y - 10 + y = 11 → 7y = 21 → y = 3. Then x = 3(3) - 5 = 4. Solution: (4, 3)."
    },
    {
      question: "Solve the system: 5x − 2y = 11 and 3x + y = 11. What is (x, y)?",
      options: ["(2, 3)", "(3, 2)", "(4, 1)", "(1, 4)"],
      answer: "(3, 2)",
      explanation: "From second equation: y = 11 - 3x. Substitute into first: 5x - 2(11-3x) = 11 → 5x - 22 + 6x = 11 → 11x = 33 → x = 3. Then y = 11 - 3(3) = 2. Solution: (3, 2)."
    },
    {
      question: "Solve the system: 4x + y = 13 and x + 2y = 12. What is (x, y)?",
      options: ["(2, 5)", "(5, 2)", "(3, 4)", "(4, 3)"],
      answer: "(2, 5)",
      explanation: "From first equation: y = 13 - 4x. Substitute into second: x + 2(13-4x) = 12 → x + 26 - 8x = 12 → -7x = -14 → x = 2. Then y = 13 - 4(2) = 5. Solution: (2, 5)."
    },
    {
      question: "Solve the system: x + 4y = 10 and 2x − y = 11. What is (x, y)?",
      options: ["(4, 1)", "(5, 2)", "(6, 1)", "(7, 0)"],
      answer: "(6, 1)",
      explanation: "From first equation: x = 10 - 4y. Substitute into second: 2(10-4y) - y = 11 → 20 - 8y - y = 11 → -9y = -9 → y = 1. Then x = 10 - 4(1) = 6. Solution: (6, 1)."
    },
    {
      question: "Solve the system: x + y = 9 and 3x − y = 19. What is (x, y)?",
      options: ["(7, 2)", "(6, 3)", "(5, 4)", "(8, 1)"],
      answer: "(7, 2)",
      explanation: "Add the two equations: (x+y) + (3x-y) = 9 + 19 → 4x = 28 → x = 7. Substitute into first: 7 + y = 9 → y = 2. Solution: (7, 2)."
    },
    {
      question: "Solve the system: 2x + 3y = 29 and x − y = −3. What is (x, y)?",
      options: ["(3, 8)", "(4, 7)", "(5, 6)", "(6, 5)"],
      answer: "(4, 7)",
      explanation: "From second equation: x = y - 3. Substitute into first: 2(y-3) + 3y = 29 → 2y - 6 + 3y = 29 → 5y = 35 → y = 7. Then x = 7 - 3 = 4. Solution: (4, 7)."
    },
    {
      question: "Solve the system: x + y = 11 and 4x − y = 14. What is (x, y)?",
      options: ["(4, 7)", "(5, 6)", "(6, 5)", "(7, 4)"],
      answer: "(5, 6)",
      explanation: "Add the two equations: (x+y) + (4x-y) = 11 + 14 → 5x = 25 → x = 5. Substitute into first: 5 + y = 11 → y = 6. Solution: (5, 6)."
    },
    {
      question: "Solve the system: 3x + 2y = 11 and x + 3y = 13. What is (x, y)?",
      options: ["(1, 4)", "(2, 3)", "(3, 2)", "(4, 1)"],
      answer: "(1, 4)",
      explanation: "From second equation: x = 13 - 3y. Substitute into first: 3(13-3y) + 2y = 11 → 39 - 9y + 2y = 11 → -7y = -28 → y = 4. Then x = 13 - 3(4) = 1. Solution: (1, 4)."
    },
    {
      question: "Solve the system: x + y = 8 and 2x − 3y = 21. What is (x, y)?",
      options: ["(7, 1)", "(8, 0)", "(9, −1)", "(10, −2)"],
      answer: "(9, −1)",
      explanation: "From first equation: y = 8 - x. Substitute into second: 2x - 3(8-x) = 21 → 2x - 24 + 3x = 21 → 5x = 45 → x = 9. Then y = 8 - 9 = -1. Solution: (9, -1)."
    },
    {
      question: "Child tickets cost ₱4 and adult tickets cost ₱6. A total of 40 tickets were sold for ₱220. How many adult tickets were sold?",
      options: ["20", "22", "25", "30"],
      answer: "30",
      explanation: "Let a = adult tickets, c = child tickets. a + c = 40 and 6a + 4c = 220. From first: c = 40 - a. Substitute into second: 6a + 4(40-a) = 220 → 6a + 160 - 4a = 220 → 2a = 60 → a = 30 adult tickets."
    },
    {
      question: "Regular tickets cost ₱150 and VIP tickets cost ₱250. A total of 80 tickets were sold for ₱16,000. How many VIP tickets were sold?",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "Let v = VIP tickets, r = regular tickets. r + v = 80 and 150r + 250v = 16,000. From first: r = 80 - v. Substitute: 150(80-v) + 250v = 16,000 → 12,000 - 150v + 250v = 16,000 → 100v = 4,000 → v = 40 VIP tickets."
    },
    {
      question: "Apples cost ₱10 each and bananas cost ₱6 each. A customer buys 18 fruits for ₱148. How many apples did the customer buy?",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "Let a = apples, b = bananas. a + b = 18 and 10a + 6b = 148. From first: b = 18 - a. Substitute: 10a + 6(18-a) = 148 → 10a + 108 - 6a = 148 → 4a = 40 → a = 10 apples."
    },
    {
      question: "Notebooks cost ₱25 and pens cost ₱15. A student buys 14 items and pays ₱290. How many notebooks did the student buy?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Let n = notebooks, p = pens. n + p = 14 and 25n + 15p = 290. From first: p = 14 - n. Substitute: 25n + 15(14-n) = 290 → 25n + 210 - 15n = 290 → 10n = 80 → n = 8 notebooks."
    },
    {
      question: "For a field trip, elementary students pay ₱200 each and high school students pay ₱300 each. There are 22 students and the total collected is ₱5,600. How many high school students joined?",
      options: ["10", "11", "12", "14"],
      answer: "12",
      explanation: "Let h = high school, e = elementary. e + h = 22 and 200e + 300h = 5,600. From first: e = 22 - h. Substitute: 200(22-h) + 300h = 5,600 → 4,400 - 200h + 300h = 5,600 → 100h = 1,200 → h = 12 high school students."
    },
    {
      question: "A farmer sold 50 animals, some chickens and some goats. Chickens have 2 legs and goats have 4 legs. There are 156 legs in total. How many goats were sold?",
      options: ["20", "24", "26", "28"],
      answer: "28",
      explanation: "Let c = chickens, g = goats. c + g = 50 and 2c + 4g = 156. From first: c = 50 - g. Substitute: 2(50-g) + 4g = 156 → 100 - 2g + 4g = 156 → 2g = 56 → g = 28 goats."
    },
    {
      question: "In a class of 32 students, the number of girls is 4 more than the number of boys. How many girls are there?",
      options: ["14", "16", "18", "20"],
      answer: "18",
      explanation: "Let b = boys, g = girls. b + g = 32 and g = b + 4. Substitute: b + (b+4) = 32 → 2b + 4 = 32 → 2b = 28 → b = 14. Then g = 14 + 4 = 18 girls."
    },
    {
      question: "A box contains 80 coins, some ₱5 coins and some ₱10 coins. The total value is ₱600. How many ₱10 coins are there?",
      options: ["20", "25", "30", "40"],
      answer: "40",
      explanation: "Let t = ₱10 coins, f = ₱5 coins. f + t = 80 and 5f + 10t = 600. From first: f = 80 - t. Substitute: 5(80-t) + 10t = 600 → 400 - 5t + 10t = 600 → 5t = 200 → t = 40 ₱10 coins."
    },
    {
      question: "A purse contains 30 coins in ₱1 and ₱5 denominations. The total value is ₱70. How many ₱5 coins are there?",
      options: ["6", "8", "10", "12"],
      answer: "10",
      explanation: "Let x = ₱5 coins, y = ₱1 coins. x + y = 30 and 5x + y = 70. Subtract first from second: (5x+y) - (x+y) = 70 - 30 → 4x = 40 → x = 10 ₱5 coins."
    },
    {
      question: "In a classroom there are 26 chairs and benches together. Each chair seats 1 student and each bench seats 2 students. If 40 students can sit, how many benches are there?",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "Let c = chairs, b = benches. c + b = 26 and c + 2b = 40. Subtract first from second: (c+2b) - (c+b) = 40 - 26 → b = 14 benches."
    },
    {
      question: "Ana is 8 years older than Bea. The sum of their ages is 44. How old is Ana?",
      options: ["22", "24", "26", "28"],
      answer: "26",
      explanation: "Let b = Bea's age, a = Ana's age = b + 8. a + b = 44 → (b+8) + b = 44 → 2b + 8 = 44 → 2b = 36 → b = 18. Then a = 18 + 8 = 26 years old."
    },
    {
      question: "The sum of the ages of a mother and her daughter is 44. In 8 years, the mother will be twice as old as her daughter. How old is the daughter now?",
      options: ["10", "12", "14", "16"],
      answer: "12",
      explanation: "Let m = mother's age now, d = daughter's age now. m + d = 44. In 8 years: mother = m+8, daughter = d+8. m+8 = 2(d+8). From first: m = 44-d. Substitute: 44-d+8 = 2d+16 → 52-d = 2d+16 → 3d = 36 → d = 12 years old."
    },
    {
      question: "A father is three times as old as his son. In 10 years, he will be twice as old as his son. How old is the father now?",
      options: ["20", "25", "30", "35"],
      answer: "30",
      explanation: "Let f = father's age now, s = son's age now. f = 3s. In 10 years: f+10 = 2(s+10). Substitute f=3s: 3s+10 = 2s+20 → s = 10. Then f = 3(10) = 30 years old."
    },
    {
      question: "The difference between the ages of two siblings is 4 years and their sum is 30 years. How old is the younger sibling?",
      options: ["11", "13", "15", "17"],
      answer: "13",
      explanation: "Let O = older sibling, Y = younger sibling. O - Y = 4 and O + Y = 30. Add the two equations: 2O = 34 → O = 17. Then Y = 17 - 4 = 13 years old."
    },
    {
      question: "The sum of three consecutive integers is 96. What is the middle integer?",
      options: ["30", "31", "32", "33"],
      answer: "32",
      explanation: "Let integers be x, x+1, x+2. Their sum: 3x + 3 = 96 → 3x = 93 → x = 31. Middle integer = x+1 = 32."
    },
    {
      question: "The sum of three consecutive even integers is 108. What is the largest integer?",
      options: ["34", "36", "38", "40"],
      answer: "38",
      explanation: "Let even integers be x, x+2, x+4. Their sum: 3x + 6 = 108 → 3x = 102 → x = 34. Largest = x+4 = 38."
    },
    {
      question: "The sum of two numbers is 50. Three times the smaller minus the larger is −10. What is the larger number?",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "Let s = smaller, L = larger. s + L = 50 and 3s - L = -10. Add the equations: 4s = 40 → s = 10. Then L = 50 - 10 = 40."
    },
    {
      question: "The sum of two numbers is 23. Twice the first is 6 more than three times the second. What is the first number?",
      options: ["11", "13", "15", "17"],
      answer: "15",
      explanation: "Let x = first, y = second. x + y = 23 and 2x = 3y + 6. From first: y = 23-x. Substitute: 2x = 3(23-x) + 6 → 2x = 69 - 3x + 6 → 5x = 75 → x = 15."
    },
    {
      question: "The sum of two numbers is 30. Three times the first plus twice the second is 74. What is the second number?",
      options: ["12", "14", "16", "18"],
      answer: "16",
      explanation: "Let x = first, y = second. x + y = 30 and 3x + 2y = 74. From first: x = 30-y. Substitute: 3(30-y) + 2y = 74 → 90 - 3y + 2y = 74 → -y = -16 → y = 16."
    },
    {
      question: "Twice a number plus three times another number is 30. The first number is 5 greater than the second. What is the smaller number?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Let x = first number, y = second number. 2x + 3y = 30 and x = y + 5. Substitute: 2(y+5) + 3y = 30 → 2y+10+3y=30 → 5y=20 → y=4 (smaller number)."
    },
    {
      question: "A 30-liter solution is 40% alcohol. How many liters of water must be added to make it 30% alcohol?",
      options: ["6 L", "8 L", "10 L", "12 L"],
      answer: "10 L",
      explanation: "Original alcohol = 40% of 30 = 0.4×30 = 12 L. Let x = liters of water added. Total new solution = 30+x L. Alcohol percentage = 12/(30+x) = 0.3. Cross-multiply: 12 = 0.3(30+x) → 12 = 9 + 0.3x → 0.3x = 3 → x = 10 L."
    },
    {
      question: "A chemist has a 20% alcohol solution and a 50% alcohol solution. She wants 30 liters of a 40% solution. How many liters of the 50% solution should she use?",
      options: ["10 L", "12 L", "18 L", "20 L"],
      answer: "20 L",
      explanation: "Let x = liters of 20% solution, y = liters of 50% solution. x + y = 30 and 0.2x + 0.5y = 0.4(30) = 12. From first: x = 30-y. Substitute: 0.2(30-y) + 0.5y = 12 → 6 - 0.2y + 0.5y = 12 → 0.3y = 6 → y = 20 L of 50% solution."
    },
    {
      question: "A car travels 180 km in 3 hours at a constant speed. What is its speed?",
      options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
      answer: "60 km/h",
      explanation: "Speed = distance ÷ time = 180 km ÷ 3 hours = 60 km/h."
    },
    {
      question: "A bicycle travels 90 km in 5 hours at a constant speed. How many hours will it take to travel 54 km at the same speed?",
      options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
      answer: "3 hours",
      explanation: "First find speed: 90 km ÷ 5 hours = 18 km/h. Time for 54 km = distance ÷ speed = 54 km ÷ 18 km/h = 3 hours."
    },
    {
      question: "A printer can print 600 pages in 8 minutes. At the same rate, how many pages can it print in 15 minutes?",
      options: ["900", "1,000", "1,125", "1,200"],
      answer: "1,125",
      explanation: "Printing rate = 600 pages ÷ 8 minutes = 75 pages/minute. In 15 minutes: 75 pages/minute × 15 minutes = 1,125 pages."
    },
    {
      question: "A worker earns ₱2,400 for 8 days of work at a constant daily rate. How much will the worker earn in 15 days?",
      options: ["₱4,000", "₱4,200", "₱4,500", "₱4,800"],
      answer: "₱4,500",
      explanation: "Daily rate = ₱2,400 ÷ 8 days = ₱300/day. In 15 days: ₱300/day × 15 days = ₱4,500."
    },
    {
      question: "You save ₱150 each week. How many weeks will it take to save ₱3,600?",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "Let w = number of weeks. 150w = 3600 → w = 3600 ÷ 150 = 24 weeks."
    },
    {
      question: "In an arithmetic sequence, the nth term is given by aₙ = 3n + 2. What is the 10th term?",
      options: ["28", "30", "32", "34"],
      answer: "32",
      explanation: "Substitute n=10: a₁₀ = 3(10) + 2 = 30 + 2 = 32."
    },
    {
      question: "A rectangle has a perimeter of 52 cm. Its length is 4 cm more than its width. What is the width?",
      options: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      explanation: "Let width = w, length = w+4. Perimeter = 2(length+width) = 2(w+4+w) = 2(2w+4) = 4w+8 = 52. Subtract 8: 4w = 44. Divide by 4: w = 11 cm."
    },
    {
      question: "A rectangle has a perimeter of 60 cm. Its length is twice its width. What is the length?",
      options: ["10 cm", "15 cm", "20 cm", "25 cm"],
      answer: "20 cm",
      explanation: "Let width = w, length = 2w. Perimeter = 2(2w+w) = 2(3w) = 6w = 60. Divide by 6: w = 10 cm. Length = 2w = 20 cm."
    },
    {
      question: "A taxi charges a base fare of ₱40 plus ₱15 per kilometer. If a trip costs ₱190, how many kilometers was the trip?",
      options: ["8 km", "9 km", "10 km", "12 km"],
      answer: "10 km",
      explanation: "Let k = kilometers. Total cost = 40 + 15k = 190. Subtract 40: 15k = 150. Divide by 15: k = 10 km."
    },
    {
      question: "A taxi charges a base fare of ₱50 plus ₱12 per kilometer. If a passenger pays ₱146, how many kilometers did they travel?",
      options: ["6 km", "7 km", "8 km", "9 km"],
      answer: "8 km",
      explanation: "Let k = kilometers. Total cost = 50 + 12k = 146. Subtract 50: 12k = 96. Divide by 12: k = 8 km."
    },
    {
      question: "A phone plan costs ₱500 plus ₱2 per text message. If a customer's bill is ₱900, how many text messages did they send?",
      options: ["100", "150", "200", "250"],
      answer: "200",
      explanation: "Let p = number of text messages. Total bill = 500 + 2p = 900. Subtract 500: 2p = 400. Divide by 2: p = 200 text messages."
    },
    {
      question: "For the linear function y = 3x − 4, what is the value of x if y = 11?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Substitute y=11: 11 = 3x - 4. Add 4: 15 = 3x. Divide by 3: x = 5."
    },
    {
      question: "For the linear function y = 3x − 4, what is the value of y when x = −2?",
      options: ["−8", "−7", "−10", "−4"],
      answer: "−10",
      explanation: "Substitute x=-2: y = 3(-2) - 4 = -6 - 4 = -10."
    }
  ]

};
