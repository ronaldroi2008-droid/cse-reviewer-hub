// questions/numerical_fractions.js
// ==========================================
// NUMERICAL – FRACTIONS & OPERATIONS (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["fractions"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items - Basic Concepts)
  // ==========================================
  beginner: [
    {
    question: "In the fraction 3/5, what is the numerator?",
    options: ["3", "5", "8", "1"],
    answer: "3",
    explanation: "The numerator is the top number of the fraction. In 3/5, the top number is 3."
  },
  {
    question: "In the fraction 7/9, what is the denominator?",
    options: ["7", "9", "16", "2"],
    answer: "9",
    explanation: "The denominator is the bottom number of the fraction. In 7/9, the bottom number is 9."
  },
  {
    question: "Which fraction represents 'three-fourths'?",
    options: ["1/3", "2/3", "3/4", "4/3"],
    answer: "3/4",
    explanation: "Three-fourths means 3 parts out of 4 equal parts, written as 3/4."
  },

    {
      question: "Which fraction represents 'three out of four equal parts'?",
      options: ["3/4", "4/3", "1/4", "2/3"],
      answer: "3/4",
      explanation: "Three parts taken out of four equal parts is written as 3/4."
    },
    {
      question: "Which of the following is a proper fraction?",
      options: ["5/3", "7/7", "2/5", "9/2"],
      answer: "2/5",
      explanation: "A proper fraction has a numerator smaller than the denominator. Only 2/5 satisfies this."
    },
    {
      question: "Which of the following is an improper fraction?",
      options: ["1/4", "3/8", "9/4", "2/7"],
      answer: "9/4",
      explanation: "An improper fraction has a numerator greater than or equal to the denominator. 9/4 is improper."
    },
    {
      question: "Which of the following is a mixed number?",
      options: ["7/2", "3 1/2", "5/6", "9/9"],
      answer: "3 1/2",
      explanation: "A mixed number has a whole number and a fraction part, like 3 1/2."
    },
    {
      question: "Which fraction is equal to 1 whole?",
      options: ["1/2", "2/2", "3/4", "5/6"],
      answer: "2/2",
      explanation: "Any fraction with the same numerator and denominator, like 2/2, is equal to 1."
    },
    {
      question: "If a pizza is cut into 8 equal slices and you take 3 slices, what fraction of the pizza do you have?",
      options: ["3/8", "5/8", "3/5", "8/3"],
      answer: "3/8",
      explanation: "You took 3 out of 8 equal slices, so the fraction is 3/8."
    },
    {
      question: "If a chocolate bar is divided into 6 equal parts and you eat 1 part, what fraction did you eat?",
      options: ["1/6", "1/5", "1/3", "1/2"],
      answer: "1/6",
      explanation: "You ate 1 out of 6 equal parts, so it is 1/6."
    },
    {
      question: "Which fraction shows 'two out of three'?",
      options: ["3/2", "2/3", "2/5", "3/5"],
      answer: "2/3",
      explanation: "Two parts out of three equal parts is written as 2/3."
    },
    {
      question: "Which fraction shows 'five out of eight'?",
      options: ["5/8", "8/5", "3/8", "5/3"],
      answer: "5/8",
      explanation: "Five parts out of eight equal parts is 5/8."
    },
    {
      question: "Which of the following fractions is equivalent to 1/2?",
      options: ["2/3", "3/6", "2/5", "1/3"],
      answer: "3/6",
      explanation: "3/6 simplifies to 1/2 because both 3 and 6 can be divided by 3."
    },
    {
      question: "Which of the following fractions is equivalent to 2/4?",
      options: ["1/2", "1/4", "2/8", "3/4"],
      answer: "1/2",
      explanation: "2/4 simplifies to 1/2 when you divide numerator and denominator by 2."
    },
    {
      question: "Which of these fractions is equal to 3/5?",
      options: ["6/10", "9/20", "3/10", "2/5"],
      answer: "6/10",
      explanation: "Multiplying numerator and denominator of 3/5 by 2 gives 6/10, an equivalent fraction."
    },
    {
      question: "Which of these fractions is equal to 1/3?",
      options: ["2/6", "3/9", "4/9", "1/6"],
      answer: "2/6",
      explanation: "2/6 simplifies to 1/3 by dividing numerator and denominator by 2."
    },
    {
      question: "Which is larger: 1/4 or 1/2?",
      options: ["1/4", "1/2", "They are equal", "Cannot be compared"],
      answer: "1/2",
      explanation: "One-half is larger than one-fourth because 1/2 represents a bigger part of the whole."
    },
    {
      question: "Which is smaller: 3/4 or 2/4?",
      options: ["3/4", "2/4", "They are equal", "Cannot be compared"],
      answer: "2/4",
      explanation: "With the same denominator, the smaller numerator gives the smaller fraction. So 2/4 < 3/4."
    },
    {
      question: "Which fraction is greater: 5/8 or 3/8?",
      options: ["5/8", "3/8", "They are equal", "Cannot be compared"],
      answer: "5/8",
      explanation: "Same denominator 8, so compare numerators: 5 is greater than 3."
    },
    {
      question: "Which fraction is less: 2/5 or 4/5?",
      options: ["2/5", "4/5", "They are equal", "Cannot be compared"],
      answer: "2/5",
      explanation: "Same denominator 5, compare numerators 2 and 4; 2 is smaller, so 2/5 is less."
    },
    {
      question: "Which fraction is equal to 4/8?",
      options: ["1/2", "1/4", "3/8", "2/3"],
      answer: "1/2",
      explanation: "4/8 simplifies to 1/2 when you divide top and bottom by 4."
    },
    {
      question: "Which fraction is equal to 5/10?",
      options: ["1/5", "1/2", "3/5", "2/5"],
      answer: "1/2",
      explanation: "5/10 simplifies to 1/2 when you divide numerator and denominator by 5."
    },
    {
      question: "Arrange in ascending order: 1/4, 3/4, 2/4.",
      options: ["1/4, 2/4, 3/4", "3/4, 2/4, 1/4", "2/4, 1/4, 3/4", "1/4, 3/4, 2/4"],
      answer: "1/4, 2/4, 3/4",
      explanation: "All have denominator 4. Order the numerators: 1, 2, 3."
    },
    {
      question: "Arrange in descending order: 1/6, 5/6, 3/6.",
      options: ["5/6, 3/6, 1/6", "1/6, 3/6, 5/6", "3/6, 5/6, 1/6", "5/6, 1/6, 3/6"],
      answer: "5/6, 3/6, 1/6",
      explanation: "All have denominator 6. From greatest to least: 5, 3, 1."
    },
    {
      question: "What is 1/8 + 2/8?",
      options: ["3/8", "3/16", "1/4", "2/16"],
      answer: "3/8",
      explanation: "Same denominator 8, add numerators: 1 + 2 = 3, so 3/8."
    },
    {
      question: "What is 1/5 + 3/5?",
      options: ["3/10", "4/10", "4/5", "1/8"],
      answer: "4/5",
      explanation: "Same denominator 5, add numerators: 1 + 3 = 4, giving 4/5."
    },
    {
      question: "What is 3/7 − 1/7?",
      options: ["2/7", "2/14", "4/7", "1/6"],
      answer: "2/7",
      explanation: "Same denominator 7, subtract numerators: 3 − 1 = 2, so 2/7."
    },
    {
      question: "What is 5/9 − 2/9?",
      options: ["3/9", "7/9", "3/18", "1/9"],
      answer: "3/9",
      explanation: "Same denominator 9, 5 − 2 = 3, so 3/9 (which simplifies to 1/3)."
    },
    {
      question: "What is 2/3 + 1/3?",
      options: ["3/3", "2/6", "1/3", "3/6"],
      answer: "3/3",
      explanation: "2/3 + 1/3 = 3/3, which is equal to 1 whole."
    },
    {
      question: "What is 4/10 in simplest form?",
      options: ["2/5", "1/2", "4/5", "1/5"],
      answer: "2/5",
      explanation: "Divide numerator and denominator by 2: 4/10 = 2/5."
    },
    {
      question: "What is 6/12 in simplest form?",
      options: ["1/2", "2/3", "3/4", "1/3"],
      answer: "1/2",
      explanation: "Divide top and bottom by 6: 6/12 = 1/2."
    },
    {
      question: "Which fraction is equal to 0.5?",
      options: ["1/3", "1/2", "2/3", "2/5"],
      answer: "1/2",
      explanation: "0.5 represents one-half, which is 1/2."
    },
    {
      question: "Which fraction is equal to 0.25?",
      options: ["1/2", "1/3", "1/4", "2/5"],
      answer: "1/4",
      explanation: "0.25 means one-fourth, or 1/4."
    },
    {
      question: "If a class has 20 students and 5 are absent, what fraction of the class is absent?",
      options: ["5/20", "1/4", "1/3", "5/15"],
      answer: "1/4",
      explanation: "5 out of 20 is 5/20, which simplifies to 1/4."
    },
    {
      question: "A cake is cut into 10 equal slices. If you eat 4 slices, what fraction of the cake is left?",
      options: ["6/10", "4/10", "2/5", "3/10"],
      answer: "6/10",
      explanation: "You ate 4, so 6 are left: 6/10, which can simplify to 3/5."
    },
    {
      question: "Which fraction shows 'one out of five'?",
      options: ["1/5", "1/4", "1/3", "1/2"],
      answer: "1/5",
      explanation: "One part out of five equal parts is written 1/5."
    },
    {
      question: "Which fraction shows 'three out of ten'?",
      options: ["3/10", "3/5", "3/8", "3/4"],
      answer: "3/10",
      explanation: "Three parts out of ten equal parts is 3/10."
    },
    {
      question: "Which of these is the largest fraction?",
      options: ["1/8", "1/4", "1/2", "1/3"],
      answer: "1/2",
      explanation: "Among unit fractions, the smaller the denominator, the larger the fraction. 1/2 is the greatest here."
    },
    {
      question: "Which of these is the smallest fraction?",
      options: ["3/4", "2/3", "1/2", "1/4"],
      answer: "1/4",
      explanation: "1/4 is the smallest because it represents the smallest part of the whole among the choices."
    },
    {
      question: "What is 2/8 in simplest form?",
      options: ["1/4", "1/2", "1/8", "2/4"],
      answer: "1/4",
      explanation: "Divide numerator and denominator by 2: 2/8 = 1/4."
    },
    {
      question: "What is 9/12 in simplest form?",
      options: ["3/4", "2/3", "1/3", "1/4"],
      answer: "3/4",
      explanation: "Divide numerator and denominator by 3: 9/12 = 3/4."
    },
    {
      question: "Which fraction is greater: 2/3 or 3/5?",
      options: ["2/3", "3/5", "They are equal", "Cannot be compared"],
      answer: "2/3",
      explanation: "2/3 is approximately 0.67, while 3/5 = 0.6, so 2/3 is greater."
    },
    {
      question: "Which fraction is less: 4/7 or 5/7?",
      options: ["4/7", "5/7", "They are equal", "Cannot be compared"],
      answer: "4/7",
      explanation: "Same denominator 7; the smaller numerator 4 means 4/7 is less."
    },
    {
      question: "A bottle is filled to 3/5 of its capacity. How much of the bottle is empty?",
      options: ["2/5", "1/5", "1/2", "3/5"],
      answer: "2/5",
      explanation: "The whole is 1. 1 − 3/5 = 2/5 is still empty."
    },
    {
      question: "If you shade 2 parts of a shape divided into 6 equal parts, what fraction is shaded?",
      options: ["2/3", "1/3", "2/6", "1/6"],
      answer: "2/6",
      explanation: "You shaded 2 out of 6 parts, so the fraction is 2/6 (which simplifies to 1/3)."
    },
    {
      question: "If you shade 4 parts of a rectangle divided into 8 equal parts, what fraction is shaded?",
      options: ["4/8", "1/2", "2/4", "All of the above"],
      answer: "All of the above",
      explanation: "4/8, 1/2, and 2/4 are all equivalent fractions representing half the rectangle."
    },
    {
      question: "What fraction of an hour is 30 minutes?",
      options: ["1/2", "1/3", "1/4", "3/4"],
      answer: "1/2",
      explanation: "30 minutes is half of 60 minutes, so it is 1/2 hour."
    },
    {
      question: "What fraction of an hour is 15 minutes?",
      options: ["1/2", "1/3", "1/4", "1/5"],
      answer: "1/4",
      explanation: "15 minutes is 1/4 of 60 minutes."
    },
    {
      question: "What fraction of a day is 12 hours?",
      options: ["1/2", "1/3", "1/4", "2/3"],
      answer: "1/2",
      explanation: "A day has 24 hours. 12/24 = 1/2."
    },
    {
      question: "What fraction of a dozen eggs is 3 eggs?",
      options: ["1/2", "1/3", "1/4", "3/12"],
      answer: "1/4",
      explanation: "A dozen is 12 eggs. 3/12 simplifies to 1/4."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items - Basic Operations)
  // ==========================================
  intermediate: [
    {
      question: "What is 1/4 + 1/4?",
      options: ["1/2", "1/8", "2/8", "2/4"],
      answer: "1/2",
      explanation: "1/4 + 1/4 = 2/4, and 2/4 simplifies to 1/2."
    },
    {
      question: "What is 2/5 + 1/5?",
      options: ["2/10", "3/5", "3/10", "1/2"],
      answer: "3/5",
      explanation: "Same denominator 5, 2 + 1 = 3, so 3/5."
    },
    {
      question: "What is 3/8 + 2/8?",
      options: ["5/16", "5/8", "1/2", "3/16"],
      answer: "5/8",
      explanation: "Same denominator 8, 3 + 2 = 5, so 5/8."
    },
    {
      question: "What is 5/6 − 1/6?",
      options: ["4/6", "5/5", "1/5", "4/3"],
      answer: "4/6",
      explanation: "Same denominator 6, 5 − 1 = 4, so 4/6, which simplifies to 2/3."
    },
    {
      question: "What is 7/9 − 2/9?",
      options: ["5/9", "9/7", "2/7", "7/7"],
      answer: "5/9",
      explanation: "Same denominator 9, 7 − 2 = 5, giving 5/9."
    },
    {
      question: "What is 1/2 + 1/3?",
      options: ["2/5", "5/6", "3/5", "1/5"],
      answer: "5/6",
      explanation: "LCM of 2 and 3 is 6. 1/2 = 3/6 and 1/3 = 2/6. 3/6 + 2/6 = 5/6."
    },
    {
      question: "What is 1/4 + 1/3?",
      options: ["2/7", "3/7", "7/12", "1/7"],
      answer: "7/12",
      explanation: "LCM of 4 and 3 is 12. 1/4 = 3/12 and 1/3 = 4/12. 3/12 + 4/12 = 7/12."
    },
    {
      question: "What is 3/5 + 1/10?",
      options: ["4/15", "7/10", "2/5", "1/2"],
      answer: "7/10",
      explanation: "LCM of 5 and 10 is 10. 3/5 = 6/10, 1/10 stays 1/10. 6/10 + 1/10 = 7/10."
    },
    {
      question: "What is 2/3 + 1/6?",
      options: ["3/6", "4/6", "5/6", "1/2"],
      answer: "5/6",
      explanation: "LCM of 3 and 6 is 6. 2/3 = 4/6, 1/6 stays 1/6. 4/6 + 1/6 = 5/6."
    },
    {
      question: "What is 3/4 − 1/8?",
      options: ["2/8", "5/8", "1/2", "3/8"],
      answer: "5/8",
      explanation: "LCM of 4 and 8 is 8. 3/4 = 6/8. 6/8 − 1/8 = 5/8."
    },
    {
      question: "What is 5/6 − 1/3?",
      options: ["4/6", "3/6", "1/2", "2/3"],
      answer: "1/2",
      explanation: "1/3 = 2/6, 5/6 − 2/6 = 3/6, which simplifies to 1/2."
    },
    {
      question: "What is 7/10 − 1/5?",
      options: ["6/10", "5/10", "3/10", "2/5"],
      answer: "5/10",
      explanation: "1/5 = 2/10, 7/10 − 2/10 = 5/10, which simplifies to 1/2."
    },
    {
      question: "What is 2/3 of 9?",
      options: ["3", "4", "5", "6"],
      answer: "6",
      explanation: "2/3 of 9 means (2/3) × 9 = 18/3 = 6."
    },
    {
      question: "What is 3/4 of 12?",
      options: ["6", "8", "9", "10"],
      answer: "9",
      explanation: "3/4 of 12 = (3/4) × 12 = 36/4 = 9."
    },
    {
      question: "What is 1/5 of 25?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "1/5 of 25 = 25 ÷ 5 = 5."
    },
    {
      question: "What is 2/7 of 21?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "2/7 of 21 = (2/7) × 21 = 42/7 = 6."
    },
    {
      question: "What is 1/2 × 1/3?",
      options: ["1/5", "1/6", "2/5", "2/3"],
      answer: "1/6",
      explanation: "Multiply numerators: 1 × 1 = 1. Multiply denominators: 2 × 3 = 6. So 1/6."
    },
    {
      question: "What is 2/5 × 3/4?",
      options: ["6/9", "5/9", "6/20", "3/10"],
      answer: "3/10",
      explanation: "Multiply numerators: 2 × 3 = 6, denominators: 5 × 4 = 20. 6/20 simplifies to 3/10."
    },
    {
      question: "What is 3/8 × 2/3?",
      options: ["5/8", "1/4", "1/2", "3/11"],
      answer: "1/4",
      explanation: "3/8 × 2/3 = (3×2)/(8×3) = 6/24, which simplifies to 1/4."
    },
    {
      question: "What is 4/9 × 3/4?",
      options: ["1/3", "1/2", "7/9", "4/12"],
      answer: "1/3",
      explanation: "4/9 × 3/4 = (4×3)/(9×4) = 12/36, which simplifies to 1/3."
    },
    {
      question: "What is 1/2 ÷ 1/4?",
      options: ["1/8", "1/2", "2", "4"],
      answer: "2",
      explanation: "Dividing by 1/4 is the same as multiplying by 4. 1/2 × 4 = 2."
    },
    {
      question: "What is 3/5 ÷ 1/5?",
      options: ["3", "1", "5", "2"],
      answer: "3",
      explanation: "3/5 ÷ 1/5 = (3/5) × (5/1) = 15/5 = 3."
    },
    {
      question: "What is 2/3 ÷ 1/6?",
      options: ["1/9", "4", "6", "1/4"],
      answer: "4",
      explanation: "2/3 ÷ 1/6 = (2/3) × (6/1) = 12/3 = 4."
    },
    {
      question: "What is 3/4 ÷ 1/2?",
      options: ["1/8", "3/8", "1 1/2", "3/2"],
      answer: "3/2",
      explanation: "3/4 ÷ 1/2 = (3/4) × (2/1) = 6/4, which simplifies to 3/2."
    },
    {
      question: "Simplify 6/15.",
      options: ["2/5", "3/5", "1/3", "5/6"],
      answer: "2/5",
      explanation: "Divide numerator and denominator by 3: 6/15 = 2/5."
    },
    {
      question: "Simplify 9/21.",
      options: ["3/7", "3/5", "2/7", "7/9"],
      answer: "3/7",
      explanation: "Divide numerator and denominator by 3: 9/21 = 3/7."
    },
    {
      question: "Simplify 12/18.",
      options: ["2/3", "3/2", "4/6", "6/9"],
      answer: "2/3",
      explanation: "Divide numerator and denominator by 6: 12/18 = 2/3."
    },
    {
      question: "Simplify 10/25.",
      options: ["2/5", "5/2", "1/5", "3/5"],
      answer: "2/5",
      explanation: "Divide numerator and denominator by 5: 10/25 = 2/5."
    },
    {
      question: "What is 2/9 + 4/9?",
      options: ["6/9", "2/3", "4/9", "8/9"],
      answer: "6/9",
      explanation: "2/9 + 4/9 = 6/9, which simplifies to 2/3."
    },
    {
      question: "What is 5/8 − 1/8?",
      options: ["4/8", "1/4", "3/8", "6/8"],
      answer: "4/8",
      explanation: "5/8 − 1/8 = 4/8, which simplifies to 1/2."
    },
    {
      question: "What is 1/3 + 1/6?",
      options: ["1/2", "2/9", "1/9", "5/6"],
      answer: "1/2",
      explanation: "1/3 = 2/6, so 2/6 + 1/6 = 3/6, which simplifies to 1/2."
    },
    {
      question: "What is 3/4 − 1/3?",
      options: ["5/12", "1/12", "7/12", "2/3"],
      answer: "5/12",
      explanation: "LCM of 4 and 3 is 12. 3/4 = 9/12, 1/3 = 4/12. 9/12 − 4/12 = 5/12."
    },
    {
      question: "What is 2/5 of 30?",
      options: ["8", "10", "12", "15"],
      answer: "12",
      explanation: "2/5 of 30 = (2 × 30) ÷ 5 = 60 ÷ 5 = 12."
    },
    {
      question: "What is 3/8 of 32?",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "3/8 of 32 = (3 × 32) ÷ 8 = 96 ÷ 8 = 12."
    },
    {
      question: "A recipe needs 3/4 cup of sugar. If you make half the recipe, how much sugar do you need?",
      options: ["1/4 cup", "3/8 cup", "1/2 cup", "2/3 cup"],
      answer: "3/8 cup",
      explanation: "Half of 3/4 is (1/2) × 3/4 = 3/8."
    },
    {
      question: "A ribbon is 5/6 meter long. If you cut off 1/6 meter, how much is left?",
      options: ["2/6 m", "4/6 m", "5/6 m", "1/3 m"],
      answer: "4/6 m",
      explanation: "5/6 − 1/6 = 4/6, which simplifies to 2/3 meter."
    },
    {
      question: "What is 4/5 × 10?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "4/5 of 10 = (4 × 10) ÷ 5 = 40 ÷ 5 = 8."
    },
    {
      question: "What is 2/3 × 15?",
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: "2/3 of 15 = (2 × 15) ÷ 3 = 30 ÷ 3 = 10."
    },
    {
      question: "What is 1/2 ÷ 1/8?",
      options: ["4", "6", "8", "2"],
      answer: "4",
      explanation: "1/2 ÷ 1/8 = (1/2) × (8/1) = 8/2 = 4."
    },
    {
      question: "What is 3/4 ÷ 3?",
      options: ["1/4", "1/3", "1/2", "3/7"],
      answer: "1/4",
      explanation: "Dividing by 3 is like multiplying by 1/3. (3/4) × (1/3) = 3/12 = 1/4."
    },
    {
      question: "A student answered 12 out of 20 questions correctly. What fraction of the test was correct in simplest form?",
      options: ["12/20", "3/5", "4/5", "2/5"],
      answer: "3/5",
      explanation: "12/20 simplifies to 3/5 by dividing by 4."
    },
    {
      question: "In a class, 9 out of 15 students passed a quiz. What fraction passed in simplest form?",
      options: ["9/15", "3/5", "2/3", "1/3"],
      answer: "3/5",
      explanation: "9/15 simplifies to 3/5 by dividing by 3."
    },
    {
      question: "What is the reciprocal of 3/5?",
      options: ["5/3", "3/5", "2/5", "5/8"],
      answer: "5/3",
      explanation: "The reciprocal of a/b is b/a. So the reciprocal of 3/5 is 5/3."
    },
    {
      question: "What is the reciprocal of 4/7?",
      options: ["7/4", "4/7", "3/7", "7/3"],
      answer: "7/4",
      explanation: "Switch numerator and denominator. 4/7 becomes 7/4."
    },
    {
      question: "What is 5/9 + 1/3?",
      options: ["6/12", "8/9", "2/3", "7/9"],
      answer: "8/9",
      explanation: "1/3 = 3/9. 5/9 + 3/9 = 8/9."
    },
    {
      question: "What is 7/8 − 1/4?",
      options: ["5/8", "3/8", "6/8", "1/2"],
      answer: "5/8",
      explanation: "1/4 = 2/8. 7/8 − 2/8 = 5/8."
    },
    {
      question: "What is 2/3 of 27?",
      options: ["16", "17", "18", "20"],
      answer: "18",
      explanation: "2/3 of 27 = (2 × 27) ÷ 3 = 54 ÷ 3 = 18."
    },
    {
      question: "What is 3/5 of 40?",
      options: ["20", "22", "24", "30"],
      answer: "24",
      explanation: "3/5 of 40 = (3 × 40) ÷ 5 = 120 ÷ 5 = 24."
    },
    {
      question: "A tank is 3/4 full and holds 40 liters when full. How many liters of water are in the tank?",
      options: ["25 L", "30 L", "35 L", "20 L"],
      answer: "30 L",
      explanation: "3/4 of 40 = (3 × 40) ÷ 4 = 120 ÷ 4 = 30 liters."
    },
    {
      question: "A basket contains 24 fruits, and 2/3 of them are mangoes. How many mangoes are there?",
      options: ["12", "14", "15", "16"],
      answer: "16",
      explanation: "2/3 of 24 = (2 × 24) ÷ 3 = 48 ÷ 3 = 16 mangoes."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items - Mixed Numbers & Complex Operations)
  // ==========================================
  advanced: [
            {
      question: "A tank contains 2 1/2 liters of water, which is 5/8 of its full capacity. What is the full capacity of the tank?",
      options: ["3 liters", "4 liters", "5 liters", "6 liters"],
      answer: "4 liters",
      explanation: "Let the full capacity be C. Given 5/8 of C = 2 1/2 liters. Convert 2 1/2 to an improper fraction: 2 1/2 = 5/2. So 5/8 · C = 5/2. Solve for C: C = (5/2) ÷ (5/8) = (5/2) × (8/5) = 40/10 = 4 liters."
    },
    {
      question: "Evaluate: (1 2/3 + 3/4) × 3/5.",
      options: ["1 1/4", "1 3/10", "1 9/20", "1 1/2"],
      answer: "1 9/20",
      explanation: "Convert 1 2/3 to 5/3. Add 5/3 and 3/4. The LCD of 3 and 4 is 12, so 5/3 = 20/12 and 3/4 = 9/12. Sum = 29/12. Now multiply by 3/5: (29/12) × (3/5) = 87/60 = 29/20 = 1 9/20."
    },
    {
      question: "Convert the improper fraction 9/4 to a mixed number.",
      options: ["2 1/4", "2 2/4", "1 3/4", "3 1/4"],
      answer: "2 1/4",
      explanation: "9 ÷ 4 = 2 with remainder 1, so 9/4 = 2 1/4."
    },
    {
      question: "Convert the improper fraction 11/3 to a mixed number.",
      options: ["3 1/3", "3 2/3", "4 1/3", "2 2/3"],
      answer: "3 2/3",
      explanation: "11 ÷ 3 = 3 with remainder 2, so 11/3 = 3 2/3."
    },
    {
      question: "Convert 2 3/5 to an improper fraction.",
      options: ["7/5", "8/5", "13/5", "11/5"],
      answer: "13/5",
      explanation: "2 3/5 = (2×5 + 3)/5 = 13/5."
    },
    {
      question: "Convert 4 1/2 to an improper fraction.",
      options: ["7/2", "8/2", "9/2", "5/2"],
      answer: "9/2",
      explanation: "4 1/2 = (4×2 + 1)/2 = 9/2."
    },
    {
      question: "What is 1 1/2 + 2 1/2?",
      options: ["3", "4", "4 1/2", "3 1/2"],
      answer: "4",
      explanation: "1 1/2 + 2 1/2 = (1+2) + (1/2+1/2) = 3 + 1 = 4."
    },
    {
      question: "What is 3 1/4 + 2 3/4?",
      options: ["5 1/2", "6", "6 1/4", "5 3/4"],
      answer: "6",
      explanation: "Add whole parts: 3 + 2 = 5; add fractions: 1/4 + 3/4 = 1. Total is 6."
    },
    {
      question: "What is 4 2/3 + 1 1/3?",
      options: ["5", "5 1/3", "6", "6 1/3"],
      answer: "6",
      explanation: "4 2/3 + 1 1/3 = (4+1) + (2/3+1/3) = 5 + 1 = 6."
    },
    {
      question: "What is 5 1/4 − 2 3/4?",
      options: ["2 1/2", "2 3/4", "3 1/2", "1 1/2"],
      answer: "2 1/2",
      explanation: "Convert to improper or subtract: 5 1/4 − 2 3/4 = 5.25 − 2.75 = 2.5 = 2 1/2."
    },
    {
      question: "What is 6 1/3 − 2 2/3?",
      options: ["3 2/3", "3 1/2", "3 1/3", "4"],
      answer: "3 2/3",
      explanation: "6 1/3 − 2 2/3 = (19/3 − 8/3) = 11/3 = 3 2/3."
    },
    {
      question: "What is 7 1/2 − 3 3/4?",
      options: ["3 3/4", "3 1/2", "3 2/3", "4"],
      answer: "3 3/4",
      explanation: "7.5 − 3.75 = 3.75, which is 3 3/4."
    },
    {
      question: "What is 2/3 + 3/4?",
      options: ["17/12", "13/12", "5/7", "1 1/2"],
      answer: "17/12",
      explanation: "LCM of 3 and 4 is 12. 2/3 = 8/12, 3/4 = 9/12. Sum = 17/12 = 1 5/12."
    },
    {
      question: "What is 5/6 + 7/8?",
      options: ["1 19/24", "1 11/24", "1 7/8", "2"],
      answer: "1 19/24",
      explanation: "LCM of 6 and 8 is 24. 5/6 = 20/24, 7/8 = 21/24. Sum = 41/24 = 1 17/24."
    },
    {
      question: "What is 2/3 of (4 1/2 − 1 3/4)?",
      options: ["1 1/3", "1 5/6", "2", "2 1/6"],
      answer: "1 5/6",
      explanation: "4 1/2 = 9/2 and 1 3/4 = 7/4. LCD is 4. 9/2 = 18/4. Difference: 18/4 − 7/4 = 11/4. Now take 2/3 of 11/4: 2/3 × 11/4 = 22/12 = 11/6 = 1 5/6."
    },
    {
      question: "What is 3/4 of 2 2/3?",
      options: ["1 1/3", "2", "2 1/4", "2 1/2"],
      answer: "2",
      explanation: "Convert 2 2/3 to an improper fraction: 2 2/3 = 8/3. Multiply: 3/4 × 8/3 = 24/12 = 2."
    },
    {
      question: "What is 2/3 of 4 1/2?",
      options: ["2", "2 1/2", "3", "3 1/2"],
      answer: "3",
      explanation: "4 1/2 = 9/2. Multiply: 2/3 × 9/2 = 18/6 = 3."
    },
    {
      question: "What is 3/5 of 2/3 of 45?",
      options: ["12", "15", "18", "20"],
      answer: "18",
      explanation: "First, 2/3 of 45 is 30. Then 3/5 of 30 is (3/5) × 30 = 90/5 = 18."
    },
    {
      question: "Find the sum: 2 3/4 + 5/6.",
      options: ["3 5/12", "3 7/12", "3 9/12", "4 1/12"],
      answer: "3 7/12",
      explanation: "2 3/4 = 11/4. LCD of 4 and 6 is 12. 11/4 = 33/12 and 5/6 = 10/12. Sum: 33/12 + 10/12 = 43/12 = 3 7/12."
    },
    {
      question: "Find the difference: 5 1/3 − 2 5/6.",
      options: ["2 1/2", "2 2/3", "3 1/2", "3 2/3"],
      answer: "2 1/2",
      explanation: "5 1/3 = 16/3 and 2 5/6 = 17/6. LCD is 6. 16/3 = 32/6. Subtract: 32/6 − 17/6 = 15/6 = 5/2 = 2 1/2."
    },
    {
      question: "Find the product: 3/4 × 2 2/5.",
      options: ["1 4/5", "1 3/5", "2 1/5", "2 2/5"],
      answer: "1 4/5",
      explanation: "2 2/5 = 12/5. Multiply: 3/4 × 12/5 = 36/20 = 9/5 = 1 4/5."
    },
    {
      question: "Find the quotient: 5 1/2 ÷ 1 3/4.",
      options: ["2 7/10", "3", "3 1/7", "3 1/4"],
      answer: "3 1/7",
      explanation: "5 1/2 = 11/2 and 1 3/4 = 7/4. 11/2 ÷ 7/4 = 11/2 × 4/7 = 44/14 = 22/7 = 3 1/7."
    },
    {
      question: "Find the quotient: 2/3 ÷ 5/6.",
      options: ["2/5", "4/5", "1 1/5", "1 2/3"],
      answer: "4/5",
      explanation: "2/3 ÷ 5/6 = 2/3 × 6/5 = 12/15 = 4/5 after simplifying by 3."
    },
    {
      question: "Evaluate: (3/4 + 5/6) − 1/2.",
      options: ["11/12", "1 1/12", "1 1/6", "1 5/12"],
      answer: "1 1/12",
      explanation: "3/4 = 9/12, 5/6 = 10/12, so 3/4 + 5/6 = 19/12. Subtract 1/2 = 6/12. 19/12 − 6/12 = 13/12 = 1 1/12."
    },
    {
      question: "Evaluate: (5/8 + 2/3) ÷ 1/2.",
      options: ["2 3/8", "2 5/12", "2 7/12", "3 1/12"],
      answer: "2 7/12",
      explanation: "5/8 = 15/24 and 2/3 = 16/24, so sum = 31/24. Dividing by 1/2 is the same as multiplying by 2. 31/24 × 2 = 62/24 = 31/12 = 2 7/12."
    },
    {
      question: "Evaluate: 1 1/2 × (4/5 + 3/10).",
      options: ["1 1/2", "1 7/10", "1 13/20", "2 1/20"],
      answer: "1 13/20",
      explanation: "4/5 = 8/10, so 4/5 + 3/10 = 11/10. 1 1/2 = 3/2. Multiply: 3/2 × 11/10 = 33/20 = 1 13/20."
    },
    {
      question: "Evaluate: (2 1/4 + 1 2/3) ÷ 3.",
      options: ["1 1/6", "1 1/12", "1 11/36", "1 13/36"],
      answer: "1 11/36",
      explanation: "2 1/4 = 9/4 and 1 2/3 = 5/3. LCD is 12. 9/4 = 27/12 and 5/3 = 20/12. Sum = 47/12. Divide by 3: 47/12 × 1/3 = 47/36 = 1 11/36."
    },
    {
      question: "A ribbon is 3 3/4 meters long. If each piece is 3/8 meter, how many pieces can be cut?",
      options: ["8", "9", "10", "12"],
      answer: "10",
      explanation: "3 3/4 = 15/4. Divide: 15/4 ÷ 3/8 = 15/4 × 8/3 = 120/12 = 10 pieces."
    },
    {
      question: "A container holds 5 1/2 liters of juice. Each glass holds 3/8 liter. How many full glasses can be filled?",
      options: ["13", "14", "15", "16"],
      answer: "14",
      explanation: "5 1/2 = 11/2. 11/2 ÷ 3/8 = 11/2 × 8/3 = 88/6 = 44/3 ≈ 14.67. You can fill 14 full glasses."
    },
    {
      question: "A recipe uses 2 1/4 cups of flour and 1 2/3 cups of sugar. How many cups are used in total?",
      options: ["3 5/6", "3 11/12", "4", "4 1/12"],
      answer: "3 11/12",
      explanation: "2 1/4 = 9/4 and 1 2/3 = 5/3. LCD is 12. 9/4 = 27/12 and 5/3 = 20/12. Sum = 47/12 = 3 11/12."
    },
    {
      question: "The average of 3/5 and 4/5 is:",
      options: ["7/10", "3/5", "4/5", "1"],
      answer: "7/10",
      explanation: "Add the fractions and divide by 2. (3/5 + 4/5) = 7/5. Then 7/5 ÷ 2 = 7/5 × 1/2 = 7/10."
    },
    {
      question: "Jessa walked 2 1/3 km in the morning and 3/4 of that distance in the evening. How far did she walk in the evening?",
      options: ["1 1/2 km", "1 3/4 km", "2 km", "2 1/4 km"],
      answer: "1 3/4 km",
      explanation: "2 1/3 = 7/3. Evening distance is 3/4 of 7/3: 3/4 × 7/3 = 21/12 = 7/4 = 1 3/4 km."
    },
    {
      question: "What fraction of a day is 9 hours?",
      options: ["1/2", "3/8", "3/4", "5/12"],
      answer: "3/8",
      explanation: "There are 24 hours in a day. 9/24 simplifies by dividing top and bottom by 3: 9/24 = 3/8."
    },
    {
      question: "You spend 2/5 of your money on food and 1/4 on transport. What fraction of your money is left?",
      options: ["7/20", "9/20", "11/20", "13/20"],
      answer: "7/20",
      explanation: "Total spent = 2/5 + 1/4. LCD is 20. 2/5 = 8/20, 1/4 = 5/20. Sum = 13/20. Leftover = 1 − 13/20 = 7/20."
    },
    {
      question: "In a class of 40 students, 3/8 are boys. How many boys are there?",
      options: ["12", "14", "15", "18"],
      answer: "15",
      explanation: "3/8 of 40 is (3 × 40)/8 = 120/8 = 15 boys."
    },
    {
      question: "A water tank is 3/5 full. Then 1/4 of the tank is added. What fraction of the tank is full now?",
      options: ["7/10", "17/20", "4/5", "9/10"],
      answer: "17/20",
      explanation: "Current amount = 3/5 + 1/4. LCD is 20. 3/5 = 12/20 and 1/4 = 5/20. Sum = 17/20."
    },
    {
      question: "The sum of two fractions is 11/12. If one fraction is 2/3, what is the other?",
      options: ["1/3", "1/4", "5/12", "7/12"],
      answer: "1/4",
      explanation: "2/3 = 8/12. The other is 11/12 − 8/12 = 3/12 = 1/4."
    },
    {
      question: "One number is 3/4 of another. If the larger number is 24, what is the smaller number?",
      options: ["16", "17", "18", "20"],
      answer: "18",
      explanation: "Let the smaller number be x. Then (3/4)x = 24. Multiply both sides by 4/3: x = 24 × 4/3 = 96/3 = 32? Wait, check: 24 × 3/4 = 18, so smaller is 18. Reverse thinking: if smaller is 18, 3/4 of 24 is 18, so 18 is the smaller number."
    },
    {
      question: "Simplify: (2/3 of 27) ÷ 5/6.",
      options: ["7 1/5", "8 2/5", "9 1/5", "10 1/5"],
      answer: "8 3/5",
      explanation: "2/3 of 27 is 18. Then 18 ÷ 5/6 = 18 × 6/5 = 108/5 = 21 3/5."
    },
    {
      question: "What is 5/8 of 2 2/5?",
      options: ["1 1/4", "1 1/2", "1 3/5", "1 3/4"],
      answer: "1 1/2",
      explanation: "2 2/5 = 12/5. Multiply 5/8 × 12/5. The fives cancel, leaving 12/8 = 3/2 = 1 1/2."
    },
    {
      question: "If 3/7 of a number is 18, what is the number?",
      options: ["30", "36", "40", "42"],
      answer: "42",
      explanation: "Let the number be n. 3/7 of n is 18: (3/7)n = 18. Multiply both sides by 7/3: n = 18 × 7/3 = 6 × 7 = 42."
    },
    {
      question: "A recipe uses 2/3 cup of sugar per serving. How many servings can be made from 4 cups of sugar?",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "Number of servings = 4 ÷ 2/3 = 4 × 3/2 = 12/2 = 6."
    },
    {
      question: "A farmer harvests 3 1/2 sacks of rice from one field and 4 3/4 sacks from another. How many sacks in total?",
      options: ["7 1/4", "8 1/4", "8 1/2", "8 3/4"],
      answer: "8 1/4",
      explanation: "3 1/2 = 7/2 and 4 3/4 = 19/4. LCD is 4. 7/2 = 14/4. Sum: 14/4 + 19/4 = 33/4 = 8 1/4."
    },
    {
      question: "A car uses 3/5 of a tank on trip A and 1/10 of a tank on trip B. What fraction of the tank is used in total?",
      options: ["2/3", "3/4", "7/10", "4/5"],
      answer: "7/10",
      explanation: "3/5 = 6/10. Total used = 6/10 + 1/10 = 7/10."
    },
    {
      question: "From the previous question, what fraction of the tank is left?",
      options: ["1/10", "2/10", "3/10", "4/10"],
      answer: "3/10",
      explanation: "The whole tank is 1. Remaining fraction = 1 − 7/10 = 3/10."
    },
    {
      question: "A number is increased by 2/5 of itself to become 35. What was the original number?",
      options: ["20", "21", "25", "28"],
      answer: "25",
      explanation: "Let the original number be n. Then n + 2/5 n = 35. This is (7/5)n = 35. Multiply both sides by 5/7: n = 35 × 5/7 = 25."
    },
    {
      question: "The sum of two numbers is 5 1/4. If one number is 2 2/3, what is the other?",
      options: ["2 1/2", "2 7/12", "2 5/6", "3"],
      answer: "2 7/12",
      explanation: "5 1/4 = 21/4 and 2 2/3 = 8/3. LCD is 12. 21/4 = 63/12 and 8/3 = 32/12. Difference: 63/12 − 32/12 = 31/12 = 2 7/12."
    },
    {
      question: "₱180 is shared among three people in the ratio 2/5, 1/4, and the rest. How much does the third person receive?",
      options: ["₱45", "₱54", "₱63", "₱72"],
      answer: "₱63",
      explanation: "First person gets 2/5 of 180 = 72. Second gets 1/4 of 180 = 45. Total given = 72 + 45 = 117. Remaining: 180 − 117 = 63, which goes to the third person."
    },
    {
      question: "A rectangular garden is 4 1/2 m long and 3 2/3 m wide. What is its area?",
      options: ["14 1/2 m²", "15 m²", "16 1/2 m²", "17 m²"],
      answer: "16 1/2 m²",
      explanation: "4 1/2 = 9/2 and 3 2/3 = 11/3. Area = 9/2 × 11/3 = 99/6 = 33/2 = 16 1/2 m²."
    },
    {
      question: "A bottle contains 1 1/4 liters of juice. If each serving is 3/10 liter, how many full servings can be made?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "1 1/4 = 5/4. Servings = 5/4 ÷ 3/10 = 5/4 × 10/3 = 50/12 = 25/6 ≈ 4.16. You can pour 4 full servings."
    }
  ],
 // ==========================================
  // LEVEL 4: EXPERT (50 Items)
  // ==========================================
  expert: [
    {
      question: "Evaluate: (3 1/2 + 2 2/3) × 4/5.",
      options: ["4 2/3", "4 3/4", "4 14/15", "5 1/5"],
      answer: "4 14/15",
      explanation: "3 1/2 = 7/2 and 2 2/3 = 8/3. LCD is 6. 7/2 = 21/6 and 8/3 = 16/6. Sum = 37/6. Multiply: 37/6 × 4/5 = 148/30 = 74/15 = 4 14/15."
    },
    {
      question: "Evaluate: (5 3/4 − 2 5/6) ÷ 7/9.",
      options: ["3", "3 1/4", "3 1/2", "3 3/4"],
      answer: "3 3/4",
      explanation: "5 3/4 = 23/4 and 2 5/6 = 17/6. LCD is 12. 23/4 = 69/12 and 17/6 = 34/12. Difference: 69/12 − 34/12 = 35/12. Divide: 35/12 ÷ 7/9 = 35/12 × 9/7 = 315/84 = 15/4 = 3 3/4."
    },
    {
      question: "Evaluate: 1 1/2 + (3/4 ÷ 2/5).",
      options: ["2 7/8", "3 1/8", "3 3/8", "3 1/2"],
      answer: "3 3/8",
      explanation: "3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8. 1 1/2 = 3/2 = 12/8. Sum: 12/8 + 15/8 = 27/8 = 3 3/8."
    },
    {
      question: "Evaluate: (7/8 × 4/5) + (2/3 × 3/10).",
      options: ["4/5", "9/10", "1", "11/10"],
      answer: "9/10",
      explanation: "7/8 × 4/5 = 28/40 = 7/10. 2/3 × 3/10 = 6/30 = 1/5. Sum: 7/10 + 1/5 = 7/10 + 2/10 = 9/10."
    },
    {
      question: "Find 2/3 of (4 1/2 − 1 3/4).",
      options: ["1 1/3", "1 5/6", "2", "2 1/6"],
      answer: "1 5/6",
      explanation: "4 1/2 = 9/2 and 1 3/4 = 7/4. LCD is 4. 9/2 = 18/4. Difference: 18/4 − 7/4 = 11/4. Now take 2/3 of 11/4: 2/3 × 11/4 = 22/12 = 11/6 = 1 5/6."
    },
    {
      question: "A pizza is cut into 12 equal slices. You eat 3/4 of the pizza. How many slices do you eat?",
      options: ["6", "8", "9", "10"],
      answer: "9",
      explanation: "3/4 of 12 slices is 3/4 × 12 = 36/4 = 9 slices."
    },
    {
      question: "A tank is 5/8 full. After using 1/6 of the full tank, what fraction of the tank remains?",
      options: ["11/24", "13/24", "7/12", "3/4"],
      answer: "11/24",
      explanation: "Start with 5/8. Subtract 1/6. LCD of 8 and 6 is 24. 5/8 = 15/24 and 1/6 = 4/24. 15/24 − 4/24 = 11/24."
    },
    {
      question: "A student studies 3/5 hour on Monday, 4/3 hours on Tuesday, and 5/6 hour on Wednesday. How many hours in total?",
      options: ["2 1/2", "2 2/3", "2 23/30", "3"],
      answer: "2 23/30",
      explanation: "LCD of 5, 3, and 6 is 30. 3/5 = 18/30, 4/3 = 40/30, 5/6 = 25/30. Sum: (18 + 40 + 25)/30 = 83/30 = 2 23/30."
    },
    {
      question: "A recipe needs 2 1/4 cups of flour for one cake. How much flour is needed for 3 1/2 cakes?",
      options: ["7 1/2 cups", "7 5/8 cups", "7 7/8 cups", "8 cups"],
      answer: "7 7/8 cups",
      explanation: "2 1/4 = 9/4 and 3 1/2 = 7/2. Multiply: 9/4 × 7/2 = 63/8 = 7 7/8 cups."
    },
    {
      question: "A pipe fills 2/7 of a tank in 3 hours. At this rate, how many hours are needed to fill the entire tank?",
      options: ["7", "9", "10 1/2", "12"],
      answer: "10 1/2",
      explanation: "In 3 hours, 2/7 of the tank is filled. Time for full tank = 3 ÷ (2/7) = 3 × 7/2 = 21/2 = 10 1/2 hours."
    },
    {
      question: "Pipe A fills 1/4 of a tank per hour and Pipe B fills 1/6 per hour. How long will they take to fill the tank together?",
      options: ["1 1/2 hours", "2 hours", "2 2/5 hours", "3 hours"],
      answer: "2 2/5 hours",
      explanation: "Combined rate = 1/4 + 1/6. LCD is 12. 1/4 = 3/12 and 1/6 = 2/12, so total = 5/12. Time = 1 ÷ (5/12) = 12/5 = 2 2/5 hours."
    },
    {
      question: "In a class, 3/8 of the students are absent and 25 are present. How many students are in the class?",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "If 3/8 are absent, 5/8 are present. 5/8 of total = 25. Total = 25 ÷ (5/8) = 25 × 8/5 = 40."
    },
    {
      question: "In a survey, 5/12 prefer A, 1/3 prefer B, and the rest prefer C. What fraction prefer C?",
      options: ["1/4", "5/12", "7/12", "3/8"],
      answer: "1/4",
      explanation: "1/3 = 4/12. Total for A and B is 5/12 + 4/12 = 9/12 = 3/4. The rest is 1 − 3/4 = 1/4."
    },
    {
      question: "A product costs ₱480. The store offers a discount of 1/5 of the price. What is the sale price?",
      options: ["₱360", "₱376", "₱384", "₱400"],
      answer: "₱384",
      explanation: "Discount = 1/5 of 480 = 480 ÷ 5 = 96. Sale price = 480 − 96 = 384."
    },
    {
      question: "A number is decreased by 1/4 of itself and the result is 36. What is the original number?",
      options: ["40", "44", "48", "52"],
      answer: "48",
      explanation: "Let the number be n. Then n − 1/4 n = 36. That is 3/4 n = 36. Multiply both sides by 4/3: n = 36 × 4/3 = 48."
    },
    {
      question: "Three objects weigh 2 1/2 kg, 3 3/4 kg, and 4 1/4 kg. What is their average weight?",
      options: ["3 kg", "3 1/4 kg", "3 1/2 kg", "3 3/4 kg"],
      answer: "3 1/2 kg",
      explanation: "Convert to improper fractions: 2 1/2 = 5/2, 3 3/4 = 15/4, 4 1/4 = 17/4. Sum: 5/2 + 15/4 + 17/4 = 10/4 + 15/4 + 17/4 = 42/4 = 21/2 = 10 1/2. Average = 10 1/2 ÷ 3 = 10 1/2 × 1/3 = 3 1/2."
    },
    {
      question: "A jogger runs 3 1/4 km each day for 6 days. How far does he run in total?",
      options: ["18 km", "18 1/2 km", "19 1/2 km", "20 km"],
      answer: "19 1/2 km",
      explanation: "3 1/4 = 13/4. Multiply: 13/4 × 6 = 78/4 = 39/2 = 19 1/2 km."
    },
    {
      question: "A rope 10 1/2 meters long is cut into pieces each 1 3/4 meters long. How many pieces can be cut?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "10 1/2 = 21/2 and 1 3/4 = 7/4. 21/2 ÷ 7/4 = 21/2 × 4/7 = 84/14 = 6 pieces."
    },
    {
      question: "Two workers together finish 3/4 of a job in one day. At this rate, how many days to finish the whole job?",
      options: ["1", "1 1/3", "1 1/2", "2"],
      answer: "1 1/3",
      explanation: "Work done per day = 3/4 of the job. Time to finish 1 job = 1 ÷ (3/4) = 4/3 = 1 1/3 days."
    },
    {
      question: "A car travels 5 1/2 km on 3/4 liter of gasoline. How far does it travel per liter?",
      options: ["6 km", "7 km", "7 1/3 km", "8 km"],
      answer: "7 1/3 km",
      explanation: "5 1/2 = 11/2. Distance per liter = (11/2) ÷ (3/4) = 11/2 × 4/3 = 44/6 = 22/3 = 7 1/3 km."
    },
    {
      question: "A machine produces 2 1/2 dozen parts per hour. How many parts will it produce in 3 1/2 hours?",
      options: ["90", "96", "102", "105"],
      answer: "105",
      explanation: "2 1/2 dozen = 5/2 dozen. 3 1/2 hours = 7/2 hours. Total dozens = 5/2 × 7/2 = 35/4 dozen = 8.75 dozen. In pieces: 8.75 × 12 = 105 parts."
    },
    {
      question: "A line segment is 7 1/2 cm long. If 2/5 is red and 1/3 is blue, how many centimeters are uncolored?",
      options: ["1 cm", "1 1/2 cm", "2 cm", "2 1/2 cm"],
      answer: "2 cm",
      explanation: "Fraction uncolored = 1 − 2/5 − 1/3. LCD is 15. 2/5 = 6/15 and 1/3 = 5/15. Sum = 11/15. Uncolored = 4/15. 4/15 of 7 1/2 (15/2) is 4/15 × 15/2 = 4/2 = 2 cm."
    },
    {
      question: "A box is 3/5 full of apples. After selling 24 apples, it is 1/3 full. How many apples can the box hold when full?",
      options: ["60", "75", "90", "105"],
      answer: "90",
      explanation: "Let full capacity be C. Apples removed = 3/5C − 1/3C. LCD is 15. 3/5 = 9/15 and 1/3 = 5/15. Difference = 4/15C. This equals 24. So C = 24 ÷ (4/15) = 24 × 15/4 = 90."
    },
    {
      question: "Lina ran 2 2/3 km, which is 2/5 of the entire course. How long is the full course?",
      options: ["5 km", "6 2/3 km", "6 km", "7 1/2 km"],
      answer: "6 2/3 km",
      explanation: "2 2/3 = 8/3. Let course length be L. 2/5 of L = 8/3. So L = 8/3 ÷ 2/5 = 8/3 × 5/2 = 40/6 = 20/3 = 6 2/3 km."
    },
    {
      question: "A bucket is 7/8 full. After removing 3/10 of its capacity, what fraction of the bucket is still filled?",
      options: ["23/40", "29/40", "3/4", "4/5"],
      answer: "23/40",
      explanation: "Starts 7/8 full. Removing 3/10 of the full capacity, remaining fraction = 7/8 − 3/10. LCD is 40. 7/8 = 35/40 and 3/10 = 12/40. 35/40 − 12/40 = 23/40."
    },
    {
      question: "Three friends share a cake. A gets 3/10, B gets 1/4, and C gets the rest. What fraction does C receive?",
      options: ["2/5", "9/20", "7/20", "3/10"],
      answer: "9/20",
      explanation: "Total given to A and B is 3/10 + 1/4. LCD is 20. 3/10 = 6/20 and 1/4 = 5/20, sum = 11/20. C gets 1 − 11/20 = 9/20."
    },
    {
      question: "An exam has 80 items. A student answers 5/8 correctly and 3/20 incorrectly. How many items are left unanswered?",
      options: ["10", "14", "16", "18"],
      answer: "18",
      explanation: "Correct: 5/8 of 80 = 50. Incorrect: 3/20 of 80 = 12. Total answered = 50 + 12 = 62. Unanswered: 80 − 62 = 18."
    },
    {
      question: "In a box, 1/4 of the marbles are red, 2/5 are blue, and the rest are green. If there are 42 green marbles, how many marbles are there in total?",
      options: ["90", "100", "110", "120"],
      answer: "120",
      explanation: "Red + blue = 1/4 + 2/5. LCD is 20. 1/4 = 5/20 and 2/5 = 8/20, sum = 13/20. Green fraction = 1 − 13/20 = 7/20. 7/20 of total = 42, so total = 42 ÷ (7/20) = 42 × 20/7 = 120."
    },
    {
      question: "A recipe for 5 people uses 3/4 kg of meat. How much meat is needed per person?",
      options: ["1/5 kg", "3/20 kg", "2/5 kg", "3/10 kg"],
      answer: "3/20 kg",
      explanation: "Per person: (3/4) ÷ 5 = 3/4 × 1/5 = 3/20 kg."
    },
    {
      question: "To paint a wall, Worker A alone takes 6 hours and Worker B alone takes 4 hours. What fraction of the wall do they paint together in one hour?",
      options: ["1/2", "3/5", "5/12", "7/12"],
      answer: "5/12",
      explanation: "A paints 1/6 per hour, B paints 1/4 per hour. Together: 1/6 + 1/4 = 2/12 + 3/12 = 5/12."
    },
    {
      question: "From the previous problem, how many hours will they take to paint the entire wall together?",
      options: ["1 1/2 hours", "2 hours", "2 2/5 hours", "3 hours"],
      answer: "2 2/5 hours",
      explanation: "They complete 5/12 of the wall per hour. Time to finish 1 wall = 1 ÷ (5/12) = 12/5 = 2 2/5 hours."
    },
    {
      question: "Find the missing term in the sequence: 1/2, 5/6, 7/6, __, 11/6.",
      options: ["3/2", "4/3", "5/3", "7/4"],
      answer: "3/2",
      explanation: "The difference between each consecutive term is 1/3. 1/2 + 1/3 = 5/6, 5/6 + 1/3 = 7/6. Next term is 7/6 + 1/3 = 7/6 + 2/6 = 9/6 = 3/2."
    },
    {
      question: "Find the average of 1/2, 2/3, 3/4, and 4/5.",
      options: ["151/240", "157/240", "163/240", "169/240"],
      answer: "163/240",
      explanation: "LCD is 240. 1/2 = 120/240, 2/3 = 160/240, 3/4 = 180/240, 4/5 = 192/240. Sum = (120 + 160 + 180 + 192) = 652. Average = 652/240 ÷ 4 = 652/960 = 163/240."
    },
    {
      question: "A bag of nuts contains 2/7 almonds, 3/7 cashews, and the rest peanuts. If there are 18 peanuts, how many nuts are in the bag?",
      options: ["42", "49", "56", "63"],
      answer: "63",
      explanation: "Almonds + cashews = 2/7 + 3/7 = 5/7. Peanuts = 2/7 of the bag. 2/7 of total = 18, so total = 18 ÷ (2/7) = 18 × 7/2 = 63."
    },
    {
      question: "A student answered 3/4 of the 120-item test correctly. How many items did the student answer correctly?",
      options: ["80", "85", "90", "95"],
      answer: "90",
      explanation: "Correct items = 3/4 of 120 = (3 × 120)/4 = 360/4 = 90."
    },
    {
      question: "An alloy contains 3/10 copper and 2/5 zinc, with the rest tin. If there are 24 kg of tin, what is the total weight of the alloy?",
      options: ["60 kg", "70 kg", "80 kg", "90 kg"],
      answer: "80 kg",
      explanation: "2/5 = 4/10, so copper + zinc = 3/10 + 4/10 = 7/10. Tin = 3/10. 3/10 of total = 24, so total = 24 ÷ (3/10) = 24 × 10/3 = 80 kg."
    },
    {
      question: "A rectangular garden is 4 1/2 m long and 3 2/3 m wide. What is its area?",
      options: ["14 1/2 m²", "15 m²", "16 1/2 m²", "17 m²"],
      answer: "16 1/2 m²",
      explanation: "4 1/2 = 9/2 and 3 2/3 = 11/3. Area = 9/2 × 11/3 = 99/6 = 33/2 = 16 1/2 m²."
    },
    {
      question: "A bottle contains 1 1/4 liters of juice. If each serving is 3/10 liter, how many full servings can be made?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "1 1/4 = 5/4. Servings = 5/4 ÷ 3/10 = 5/4 × 10/3 = 50/12 = 25/6 ≈ 4.16. You can pour 4 full servings."
    },
    {
      question: "A shopkeeper mixes 3/5 kg of nuts costing ₱200 per kg with 2/5 kg costing ₱300 per kg. What is the total cost of the mixture?",
      options: ["₱220", "₱230", "₱240", "₱250"],
      answer: "₱240",
      explanation: "First part: 3/5 × 200 = 600/5 = ₱120. Second part: 2/5 × 300 = 600/5 = ₱120. Total cost = 120 + 120 = ₱240."
    },
    {
      question: "A school spends 2/7 of its budget on salaries and 1/3 on equipment. What fraction of the budget is left for other expenses?",
      options: ["4/21", "5/21", "8/21", "11/21"],
      answer: "8/21",
      explanation: "LCD of 7 and 3 is 21. 2/7 = 6/21 and 1/3 = 7/21. Total spent = 13/21. Leftover = 1 − 13/21 = 8/21."
    },
    {
      question: "Mary spends 3/8 of her salary on rent, 1/4 on food, and 1/10 on transport. What fraction of her salary does she save?",
      options: ["7/40", "9/40", "11/40", "13/40"],
      answer: "11/40",
      explanation: "LCD of 8, 4, and 10 is 40. 3/8 = 15/40, 1/4 = 10/40, 1/10 = 4/40. Total spent = 29/40. Saved = 1 − 29/40 = 11/40."
    },
    {
      question: "Tap A fills a tank in 5 hours. Tap B fills 2/3 of the tank in 4 hours. If both are opened together on an empty tank, how many hours to fill it?",
      options: ["2", "2 3/4", "2 8/11", "3"],
      answer: "2 8/11",
      explanation: "Tap A rate: 1/5 tank per hour. Tap B rate: (2/3) ÷ 4 = 2/12 = 1/6 tank per hour. Combined rate = 1/5 + 1/6 = 11/30. Time = 1 ÷ (11/30) = 30/11 = 2 8/11 hours."
    },
    {
      question: "A trader buys goods for ₱3 1/2 million and sells them at a profit of 1/7 of the cost. What is the selling price?",
      options: ["₱3.75 million", "₱3.9 million", "₱4 million", "₱4.25 million"],
      answer: "₱4 million",
      explanation: "3 1/2 = 7/2 million. Profit = 1/7 of 7/2 = 1/2 million. Selling price = 7/2 + 1/2 = 8/2 = 4 million."
    },
    {
      question: "A recipe uses 2/3 cup of milk for 4 pancakes. How many cups of milk are needed for 10 pancakes?",
      options: ["1 cup", "1 1/3 cups", "1 2/3 cups", "2 cups"],
      answer: "1 2/3 cups",
      explanation: "Milk per pancake = (2/3) ÷ 4 = 2/3 × 1/4 = 2/12 = 1/6 cup. For 10 pancakes: 10 × 1/6 = 10/6 = 5/3 = 1 2/3 cups."
    },
    {
      question: "What is 3/5 of 7/8 of ₱320?",
      options: ["₱112", "₱128", "₱160", "₱168"],
      answer: "₱168",
      explanation: "3/5 of 7/8 is (3/5 × 7/8) = 21/40. 21/40 of 320 = 320 × 21/40 = 8 × 21 = ₱168."
    },
    {
      question: "A pole stands so that 2/5 of its length is above water and 3/10 is buried in the mud. What fraction of the pole is under water but not in the mud?",
      options: ["1/5", "1/4", "3/10", "2/5"],
      answer: "3/10",
      explanation: "Total above or in mud = 2/5 + 3/10. 2/5 = 4/10. Sum = 4/10 + 3/10 = 7/10. The part in water (not mud) = 1 − 7/10 = 3/10."
    },
    {
      question: "A sack of rice is 3/4 full and weighs 36 kg. What is the weight of the sack when full?",
      options: ["42 kg", "44 kg", "46 kg", "48 kg"],
      answer: "48 kg",
      explanation: "3/4 of full weight = 36 kg. Full weight = 36 ÷ (3/4) = 36 × 4/3 = 48 kg."
    },
    {
      question: "A man spends 2/5 of his salary on rent and 1/3 on food. If he spends ₱22,000 on rent and food together, what is his monthly salary?",
      options: ["₱28,000", "₱30,000", "₱32,000", "₱35,000"],
      answer: "₱30,000",
      explanation: "Total fraction spent = 2/5 + 1/3. LCD is 15. 2/5 = 6/15 and 1/3 = 5/15, so total = 11/15. 11/15 of salary = 22,000. Salary = 22,000 ÷ (11/15) = 22,000 × 15/11 = 30,000."
    },
    {
      question: "A container holds 6 liters of juice. If 3/8 of it is poured out, how many liters remain?",
      options: ["3 1/2 L", "3 3/4 L", "4 L", "4 1/2 L"],
      answer: "3 3/4 L",
      explanation: "Poured out = 3/8 of 6 = 18/8 = 9/4 = 2 1/4 L. Remaining = 6 − 2 1/4 = 3 3/4 L."
    },
    {
      question: "A car completes a 180 km trip using 3 3/4 tanks of fuel. How many kilometers does it travel per tank of fuel?",
      options: ["40 km", "45 km", "48 km", "50 km"],
      answer: "48 km",
      explanation: "3 3/4 = 15/4 tanks. Distance per tank = 180 ÷ (15/4) = 180 × 4/15 = 720/15 = 48 km."
    }
  ]
};
