// questions/numerical_multiples_factors.js
// ==========================================
// NUMERICAL – MULTIPLES AND FACTORS (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["multiples_factors"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Definitions, Basic ID)
  // ==========================================
  beginner: [
    // 1-10: Identifying Factors
    {
      question: "Which of the following is a factor of 12?",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation: "STEP 1: A factor divides the number evenly.\nSTEP 2: 12 ÷ 6 = 2 (No remainder).\nSTEP 3: 5, 7, and 8 leave remainders."
    },
    {
      question: "Which of the following is NOT a factor of 20?",
      options: ["2", "4", "6", "10"],
      answer: "6",
      explanation: "STEP 1: Factors of 20 are 1, 2, 4, 5, 10, 20.\nSTEP 2: 20 ÷ 6 = 3 remainder 2.\nSTEP 3: So 6 is not a factor."
    },
    {
      question: "What are all the factors of 6?",
      options: ["1, 6", "2, 3", "1, 2, 3, 6", "1, 2, 3"],
      answer: "1, 2, 3, 6",
      explanation: "STEP 1: Find pairs that multiply to 6.\nSTEP 2: 1×6=6 and 2×3=6.\nSTEP 3: The complete list is 1, 2, 3, 6."
    },
    {
      question: "Which number is a factor of 15?",
      options: ["2", "3", "4", "6"],
      answer: "3",
      explanation: "STEP 1: 15 ÷ 3 = 5.\nSTEP 2: 3 is a factor."
    },
    {
      question: "Which of these is a factor of 50?",
      options: ["10", "15", "20", "30"],
      answer: "10",
      explanation: "STEP 1: 50 ÷ 10 = 5.\nSTEP 2: 10 is a factor."
    },
    {
      question: "Which of the following is a common factor of 8 and 12?",
      options: ["3", "4", "6", "8"],
      answer: "4",
      explanation: "STEP 1: Factors of 8: 1, 2, 4, 8.\nSTEP 2: Factors of 12: 1, 2, 3, 4, 6, 12.\nSTEP 3: Common factors are 1, 2, 4. 4 is in the options."
    },
    {
      question: "1 is a factor of:",
      options: ["Only odd numbers", "Only even numbers", "Only prime numbers", "Every number"],
      answer: "Every number",
      explanation: "STEP 1: By definition, 1 divides every integer exactly.\nSTEP 2: It is a factor of every number."
    },
    {
      question: "Which is a factor of 25?",
      options: ["2", "5", "10", "15"],
      answer: "5",
      explanation: "STEP 1: 25 ÷ 5 = 5.\nSTEP 2: 5 is a factor."
    },
    {
      question: "Which of these numbers has only two factors (1 and itself)?",
      options: ["4", "7", "9", "12"],
      answer: "7",
      explanation: "STEP 1: A number with only two factors is Prime.\nSTEP 2: 4(1,2,4), 9(1,3,9), 12(1,2,3,4,6,12) are composite.\nSTEP 3: 7 is prime."
    },
    {
      question: "Which of these is a factor of 100?",
      options: ["3", "25", "30", "40"],
      answer: "25",
      explanation: "STEP 1: 100 ÷ 25 = 4.\nSTEP 2: 25 is a factor."
    },
    // 11-20: Identifying Multiples
    {
      question: "Which of the following is a multiple of 5?",
      options: ["12", "23", "35", "41"],
      answer: "35",
      explanation: "STEP 1: Multiples of 5 end in 0 or 5.\nSTEP 2: 35 ends in 5."
    },
    {
      question: "Which number is a multiple of 7?",
      options: ["15", "20", "28", "30"],
      answer: "28",
      explanation: "STEP 1: 7 × 4 = 28.\nSTEP 2: So 28 is a multiple of 7."
    },
    {
      question: "What is the first multiple of any number?",
      options: ["0", "1", "The number itself", "Cannot be determined"],
      answer: "The number itself",
      explanation: "STEP 1: The first positive multiple of n is n × 1 = n."
    },
    {
      question: "Which of these is NOT a multiple of 4?",
      options: ["8", "12", "18", "24"],
      answer: "18",
      explanation: "STEP 1: 18 ÷ 4 = 4.5.\nSTEP 2: 18 is not evenly divisible by 4."
    },
    {
      question: "Which of the following is a multiple of 9?",
      options: ["27", "28", "29", "30"],
      answer: "27",
      explanation: "STEP 1: 9 × 3 = 27."
    },
    {
      question: "The numbers 5, 10, 15, 20 are multiples of:",
      options: ["2", "5", "10", "15"],
      answer: "5",
      explanation: "STEP 1: All these numbers are divisible by 5."
    },
    {
      question: "Which number is a multiple of 8?",
      options: ["20", "24", "28", "30"],
      answer: "24",
      explanation: "STEP 1: 8 × 3 = 24."
    },
    {
      question: "Which is a multiple of 6?",
      options: ["10", "16", "18", "22"],
      answer: "18",
      explanation: "STEP 1: 6 × 3 = 18."
    },
    {
      question: "Is 45 a multiple of 9?",
      options: ["Yes", "No", "Maybe", "Only on Sundays"],
      answer: "Yes",
      explanation: "STEP 1: 45 ÷ 9 = 5.\nSTEP 2: It is a multiple."
    },
    {
      question: "Which of the following is a common multiple of 2 and 3?",
      options: ["4", "9", "12", "14"],
      answer: "12",
      explanation: "STEP 1: Multiples of 2: 2, 4, 6, 8, 10, 12...\nSTEP 2: Multiples of 3: 3, 6, 9, 12...\nSTEP 3: 12 is in both lists."
    },
    // 21-30: Prime vs Composite
    {
      question: "Which of the following is a prime number?",
      options: ["9", "11", "15", "21"],
      answer: "11",
      explanation: "STEP 1: 9 (3×3), 15 (3×5), 21 (3×7) are composite.\nSTEP 2: 11 has only factors 1 and 11."
    },
    {
      question: "Which is the only even prime number?",
      options: ["2", "4", "6", "8"],
      answer: "2",
      explanation: "STEP 1: All other even numbers are divisible by 2, making them composite.\nSTEP 2: 2 is the only even prime."
    },
    {
      question: "Which of the following is a composite number?",
      options: ["3", "5", "7", "9"],
      answer: "9",
      explanation: "STEP 1: 3, 5, 7 are prime.\nSTEP 2: 9 = 3 × 3, so it is composite."
    },
    {
      question: "How many factors does a prime number have?",
      options: ["0", "1", "2", "Many"],
      answer: "2",
      explanation: "STEP 1: A prime number has exactly two distinct factors: 1 and itself."
    },
    {
      question: "Is 1 a prime number?",
      options: ["Yes", "No", "Sometimes", "Unknown"],
      answer: "No",
      explanation: "STEP 1: Prime numbers must have exactly two factors.\nSTEP 2: 1 has only one factor (itself).\nSTEP 3: 1 is neither prime nor composite."
    },
    {
      question: "Which is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2",
      explanation: "STEP 1: 0 and 1 are not prime.\nSTEP 2: 2 is the first and smallest prime."
    },
    {
      question: "Which of these is NOT prime?",
      options: ["13", "17", "19", "21"],
      answer: "21",
      explanation: "STEP 1: 21 = 3 × 7.\nSTEP 2: It is composite."
    },
    {
      question: "A number greater than 1 with more than two factors is called:",
      options: ["Prime", "Composite", "Odd", "Even"],
      answer: "Composite",
      explanation: "STEP 1: This is the definition of a composite number."
    },
    {
      question: "Which number is prime?",
      options: ["27", "29", "33", "39"],
      answer: "29",
      explanation: "STEP 1: 27=3×9, 33=3×11, 39=3×13.\nSTEP 2: 29 has no factors other than 1 and 29."
    },
    {
      question: "Are all odd numbers prime?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "STEP 1: 9 is odd but composite (3×3).\nSTEP 2: 15 is odd but composite (3×5)."
    },
    // 31-40: Basic GCD/LCM (Visual/Simple)
    {
      question: "What is the Greatest Common Factor (GCF) of 4 and 8?",
      options: ["2", "4", "8", "12"],
      answer: "4",
      explanation: "STEP 1: Factors of 4: 1, 2, 4.\nSTEP 2: Factors of 8: 1, 2, 4, 8.\nSTEP 3: Largest common is 4."
    },
    {
      question: "What is the Least Common Multiple (LCM) of 2 and 3?",
      options: ["2", "3", "5", "6"],
      answer: "6",
      explanation: "STEP 1: Multiples of 2: 2, 4, 6...\nSTEP 2: Multiples of 3: 3, 6...\nSTEP 3: First match is 6."
    },
    {
      question: "What is the GCF of 10 and 15?",
      options: ["5", "10", "15", "30"],
      answer: "5",
      explanation: "STEP 1: Factors 10: 1, 2, 5, 10.\nSTEP 2: Factors 15: 1, 3, 5, 15.\nSTEP 3: GCF is 5."
    },
    {
      question: "What is the LCM of 4 and 5?",
      options: ["9", "10", "20", "40"],
      answer: "20",
      explanation: "STEP 1: Since 4 and 5 share no factors, LCM = 4×5 = 20."
    },
    {
      question: "Find the GCF of 6 and 12.",
      options: ["3", "6", "9", "12"],
      answer: "6",
      explanation: "STEP 1: 6 is a factor of 12.\nSTEP 2: Therefore, 6 is the GCF."
    },
    {
      question: "Find the LCM of 3 and 6.",
      options: ["3", "6", "9", "18"],
      answer: "6",
      explanation: "STEP 1: 6 is a multiple of 3.\nSTEP 2: Therefore, 6 is the LCM."
    },
    {
      question: "What is the GCF of 7 and 14?",
      options: ["1", "7", "14", "21"],
      answer: "7",
      explanation: "STEP 1: 7 divides 14 evenly.\nSTEP 2: GCF is 7."
    },
    {
      question: "What is the LCM of 2 and 5?",
      options: ["5", "7", "10", "15"],
      answer: "10",
      explanation: "STEP 1: Prime numbers.\nSTEP 2: LCM = 2 × 5 = 10."
    },
    {
      question: "Which pair of numbers has a GCF of 1?",
      options: ["2 and 4", "3 and 6", "5 and 7", "4 and 8"],
      answer: "5 and 7",
      explanation: "STEP 1: 5 and 7 are distinct prime numbers.\nSTEP 2: They share no factors other than 1."
    },
    {
      question: "The LCM of a number and 1 is:",
      options: ["1", "The number itself", "0", "Cannot be determined"],
      answer: "The number itself",
      explanation: "STEP 1: Multiples of 1 are 1, 2, 3, ..., N.\nSTEP 2: First multiple of N is N."
    },
    // 41-50: Mixed Basic Concepts
    {
      question: "If a number is divisible by 2, it is a multiple of:",
      options: ["2", "3", "5", "7"],
      answer: "2",
      explanation: "STEP 1: Definition of divisibility."
    },
    {
      question: "Which number is a factor of every even number?",
      options: ["2", "3", "4", "6"],
      answer: "2",
      explanation: "STEP 1: Even numbers are defined as integers divisible by 2."
    },
    {
      question: "Which of these is a multiple of 10?",
      options: ["5", "15", "55", "60"],
      answer: "60",
      explanation: "STEP 1: Multiples of 10 end in 0."
    },
    {
      question: "Factors of 9 are:",
      options: ["1, 9", "1, 3, 9", "3, 9", "1, 2, 3, 9"],
      answer: "1, 3, 9",
      explanation: "STEP 1: 1×9 and 3×3."
    },
    {
      question: "The product of two factors is always equal to:",
      options: ["Their sum", "Their difference", "The multiple", "1"],
      answer: "The multiple",
      explanation: "STEP 1: Example 2 × 3 = 6. 2 and 3 are factors, 6 is the multiple."
    },
    {
      question: "Is 0 a factor of any number?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "STEP 1: Division by zero is undefined.\nSTEP 2: You cannot multiply something by 0 to get a non-zero number."
    },
    {
      question: "Which is a factor of 36?",
      options: ["5", "7", "8", "9"],
      answer: "9",
      explanation: "STEP 1: 36 ÷ 9 = 4."
    },
    {
      question: "Which is a multiple of 12?",
      options: ["2", "6", "24", "30"],
      answer: "24",
      explanation: "STEP 1: 12 × 2 = 24."
    },
    {
      question: "What is the smallest positive factor of 100?",
      options: ["1", "2", "5", "10"],
      answer: "1",
      explanation: "STEP 1: 1 is the smallest positive factor of every number."
    },
    {
      question: "What is the largest factor of 50?",
      options: ["25", "50", "100", "500"],
      answer: "50",
      explanation: "STEP 1: The largest factor of any number is the number itself."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Calculations, LCM/GCF)
  // ==========================================
  intermediate: [
    // 1-10: Calculating LCM
    {
      question: "Find the LCM of 12 and 18.",
      options: ["24", "36", "48", "72"],
      answer: "36",
      explanation: "STEP 1: Multiples of 12: 12, 24, 36, 48...\nSTEP 2: Multiples of 18: 18, 36...\nSTEP 3: LCM is 36."
    },
    {
      question: "Find the LCM of 8 and 12.",
      options: ["16", "24", "32", "48"],
      answer: "24",
      explanation: "STEP 1: Multiples of 8: 8, 16, 24...\nSTEP 2: Multiples of 12: 12, 24...\nSTEP 3: LCM is 24."
    },
    {
      question: "What is the LCM of 6 and 9?",
      options: ["12", "18", "24", "36"],
      answer: "18",
      explanation: "STEP 1: Multiples of 6: 6, 12, 18...\nSTEP 2: Multiples of 9: 9, 18...\nSTEP 3: LCM is 18."
    },
    {
      question: "What is the LCM of 10 and 25?",
      options: ["25", "50", "75", "100"],
      answer: "50",
      explanation: "STEP 1: Multiples of 25: 25, 50...\nSTEP 2: 50 is divisible by 10.\nSTEP 3: LCM is 50."
    },
    {
      question: "Find the LCM of 15 and 20.",
      options: ["30", "45", "60", "90"],
      answer: "60",
      explanation: "STEP 1: Multiples of 20: 20, 40, 60...\nSTEP 2: 60 is divisible by 15 (15×4).\nSTEP 3: LCM is 60."
    },
    {
      question: "Find the LCM of 3, 4, and 6.",
      options: ["12", "18", "24", "36"],
      answer: "12",
      explanation: "STEP 1: Multiples of 6: 6, 12...\nSTEP 2: 12 is divisible by 3 and 4.\nSTEP 3: LCM is 12."
    },
    {
      question: "LCM of 5 and 7 is:",
      options: ["12", "25", "35", "70"],
      answer: "35",
      explanation: "STEP 1: Both are prime.\nSTEP 2: LCM = 5 × 7 = 35."
    },
    {
      question: "What is the LCM of 4 and 10?",
      options: ["10", "20", "30", "40"],
      answer: "20",
      explanation: "STEP 1: Multiples of 10: 10, 20...\nSTEP 2: 20 is divisible by 4."
    },
    {
      question: "Find the LCM of 9 and 12.",
      options: ["18", "24", "36", "72"],
      answer: "36",
      explanation: "STEP 1: Multiples of 12: 12, 24, 36...\nSTEP 2: 36 is divisible by 9."
    },
    {
      question: "LCM of 8 and 10 is:",
      options: ["20", "40", "60", "80"],
      answer: "40",
      explanation: "STEP 1: Multiples of 10: 10, 20, 30, 40...\nSTEP 2: 40 is divisible by 8."
    },
    // 11-20: Calculating GCF
    {
      question: "Find the GCF of 24 and 36.",
      options: ["6", "12", "18", "24"],
      answer: "12",
      explanation: "STEP 1: Factors of 24: ...6, 8, 12, 24.\nSTEP 2: Factors of 36: ...6, 9, 12, 18, 36.\nSTEP 3: Largest common is 12."
    },
    {
      question: "What is the GCF of 18 and 27?",
      options: ["3", "6", "9", "18"],
      answer: "9",
      explanation: "STEP 1: 18 = 9×2, 27 = 9×3.\nSTEP 2: GCF is 9."
    },
    {
      question: "Find the GCF of 30 and 45.",
      options: ["5", "10", "15", "30"],
      answer: "15",
      explanation: "STEP 1: 30 = 15×2, 45 = 15×3.\nSTEP 2: GCF is 15."
    },
    {
      question: "What is the GCF of 16 and 24?",
      options: ["4", "8", "12", "16"],
      answer: "8",
      explanation: "STEP 1: 16 = 8×2, 24 = 8×3.\nSTEP 2: GCF is 8."
    },
    {
      question: "GCF of 14 and 21 is:",
      options: ["1", "7", "14", "21"],
      answer: "7",
      explanation: "STEP 1: 7 divides both.\nSTEP 2: Next multiple of 7 is 14 (divides 14 not 21).\nSTEP 3: GCF is 7."
    },
    {
      question: "Find the GCF of 40 and 50.",
      options: ["5", "10", "20", "25"],
      answer: "10",
      explanation: "STEP 1: Both end in 0, so 10 is a factor.\nSTEP 2: 40/10=4, 50/10=5 (coprime).\nSTEP 3: GCF is 10."
    },
    {
      question: "GCF of 12, 18, and 30 is:",
      options: ["3", "6", "9", "12"],
      answer: "6",
      explanation: "STEP 1: All divisible by 6.\nSTEP 2: 12/6=2, 18/6=3, 30/6=5. No common factors left.\nSTEP 3: GCF is 6."
    },
    {
      question: "What is the GCF of 15 and 28?",
      options: ["1", "3", "5", "7"],
      answer: "1",
      explanation: "STEP 1: Factors of 15: 1, 3, 5, 15.\nSTEP 2: Factors of 28: 1, 2, 4, 7, 14, 28.\nSTEP 3: Only common factor is 1."
    },
    {
      question: "Find the GCF of 36 and 60.",
      options: ["6", "12", "18", "24"],
      answer: "12",
      explanation: "STEP 1: 36 = 12×3, 60 = 12×5.\nSTEP 2: GCF is 12."
    },
    {
      question: "GCF of 42 and 56 is:",
      options: ["7", "14", "21", "28"],
      answer: "14",
      explanation: "STEP 1: 42 = 14×3, 56 = 14×4.\nSTEP 2: GCF is 14."
    },
    // 21-30: Prime Factorization
    {
      question: "What is the prime factorization of 12?",
      options: ["2 × 6", "3 × 4", "2 × 2 × 3", "2 × 3 × 3"],
      answer: "2 × 2 × 3",
      explanation: "STEP 1: 12 = 4 × 3.\nSTEP 2: 4 = 2 × 2.\nSTEP 3: So, 2 × 2 × 3."
    },
    {
      question: "Prime factorization of 20 is:",
      options: ["2 × 10", "4 × 5", "2 × 2 × 5", "2 × 5 × 5"],
      answer: "2 × 2 × 5",
      explanation: "STEP 1: 20 = 4 × 5.\nSTEP 2: 4 = 2 × 2.\nSTEP 3: 2 × 2 × 5."
    },
    {
      question: "What is the prime factorization of 30?",
      options: ["3 × 10", "2 × 3 × 5", "5 × 6", "2 × 2 × 7"],
      answer: "2 × 3 × 5",
      explanation: "STEP 1: 30 = 6 × 5.\nSTEP 2: 6 = 2 × 3.\nSTEP 3: 2 × 3 × 5."
    },
    {
      question: "Which number has the prime factorization 2 × 3 × 3?",
      options: ["12", "18", "24", "27"],
      answer: "18",
      explanation: "STEP 1: 2 × 3 = 6.\nSTEP 2: 6 × 3 = 18."
    },
    {
      question: "Prime factorization of 36 is:",
      options: ["4 × 9", "2 × 3 × 6", "2 × 2 × 3 × 3", "2 × 2 × 9"],
      answer: "2 × 2 × 3 × 3",
      explanation: "STEP 1: 36 = 6 × 6.\nSTEP 2: 2×3 × 2×3 = 2^2 × 3^2."
    },
    {
      question: "What is the prime factorization of 50?",
      options: ["2 × 25", "5 × 10", "2 × 5 × 5", "2 × 2 × 5"],
      answer: "2 × 5 × 5",
      explanation: "STEP 1: 50 = 2 × 25.\nSTEP 2: 25 = 5 × 5.\nSTEP 3: 2 × 5 × 5."
    },
    {
      question: "Prime factorization of 100:",
      options: ["10 × 10", "2 × 2 × 5 × 5", "2 × 5 × 10", "4 × 25"],
      answer: "2 × 2 × 5 × 5",
      explanation: "STEP 1: 100 = 10 × 10.\nSTEP 2: 10 = 2 × 5.\nSTEP 3: (2×5) × (2×5) = 2^2 × 5^2."
    },
    {
      question: "Which number is 2³?",
      options: ["6", "8", "9", "12"],
      answer: "8",
      explanation: "STEP 1: 2 × 2 × 2 = 8."
    },
    {
      question: "What is the prime factorization of 75?",
      options: ["3 × 25", "3 × 5 × 5", "5 × 15", "3 × 3 × 5"],
      answer: "3 × 5 × 5",
      explanation: "STEP 1: 75 = 3 × 25.\nSTEP 2: 25 = 5 × 5.\nSTEP 3: 3 × 5 × 5."
    },
    {
      question: "Which number has the prime factorization 2 × 2 × 2 × 3?",
      options: ["12", "18", "24", "36"],
      answer: "24",
      explanation: "STEP 1: 2 × 2 × 2 = 8.\nSTEP 2: 8 × 3 = 24."
    },
    // 31-40: Intermediate Word Problems
    {
      question: "Two bells ring at intervals of 3 and 4 minutes. If they ring together now, in how many minutes will they ring together again?",
      options: ["7", "12", "24", "10"],
      answer: "12",
      explanation: "STEP 1: Find the LCM of 3 and 4.\nSTEP 2: LCM(3,4) = 12."
    },
    {
      question: "Pencils come in packs of 10 and erasers in packs of 12. What is the least number of packs of each you need to buy to have the same number of pencils and erasers?",
      options: ["60 packs", "10 and 12", "Buy until you have 60 units of each", "120 units"],
      answer: "Buy until you have 60 units of each",
      explanation: "STEP 1: Find LCM of 10 and 12.\nSTEP 2: LCM is 60. You need 60 pencils and 60 erasers."
    },
    {
      question: "What is the smallest number of candies that can be divided equally among 4, 6, or 8 children?",
      options: ["12", "16", "24", "48"],
      answer: "24",
      explanation: "STEP 1: Find LCM(4, 6, 8).\nSTEP 2: Multiples of 8: 8, 16, 24.\nSTEP 3: 24 is divisible by 4 and 6."
    },
    {
      question: "A number is a multiple of 9 and 12. Which of the following could it be?",
      options: ["18", "24", "36", "45"],
      answer: "36",
      explanation: "STEP 1: Find common multiples.\nSTEP 2: LCM(9,12) = 36."
    },
    {
      question: "Find the smallest number greater than 100 that is divisible by 5 and 6.",
      options: ["105", "110", "120", "130"],
      answer: "120",
      explanation: "STEP 1: LCM(5,6) = 30.\nSTEP 2: Multiples of 30: 30, 60, 90, 120...\nSTEP 3: First one > 100 is 120."
    },
    {
      question: "What is the largest number that divides both 48 and 72?",
      options: ["12", "16", "24", "36"],
      answer: "24",
      explanation: "STEP 1: Keyword 'Largest number that divides' = GCF.\nSTEP 2: GCF(48, 72) = 24."
    },
    {
      question: "Two buses leave a station. Bus A leaves every 15 mins, Bus B every 20 mins. When will they leave together again?",
      options: ["30 mins", "45 mins", "60 mins", "75 mins"],
      answer: "60 mins",
      explanation: "STEP 1: LCM(15, 20).\nSTEP 2: Multiples of 20: 20, 40, 60.\nSTEP 3: 60 is divisible by 15. LCM = 60."
    },
    {
      question: "Find the smallest square number divisible by 2 and 3.",
      options: ["4", "9", "36", "16"],
      answer: "36",
      explanation: "STEP 1: LCM(2,3) = 6.\nSTEP 2: Multiples of 6: 6, 12, 18, 24, 30, 36.\nSTEP 3: 36 is the first square number."
    },
    {
      question: "Which of the following is divisible by both 8 and 6?",
      options: ["16", "18", "24", "32"],
      answer: "24",
      explanation: "STEP 1: Look for common multiples (LCM is 24)."
    },
    {
      question: "Determine the GCF of 16, 24, and 40.",
      options: ["4", "8", "16", "24"],
      answer: "8",
      explanation: "STEP 1: 8 divides 16, 24, and 40.\nSTEP 2: 16 does not divide 24. So 8 is the GCF."
    },
    // 41-50: Properties & Logic
    {
      question: "If GCF(a, b) = 1, then a and b are called:",
      options: ["Twin primes", "Relatively prime", "Composite", "Equal"],
      answer: "Relatively prime",
      explanation: "STEP 1: Definition of Relatively Prime (or Coprime)."
    },
    {
      question: "Which is a common factor of 100 and 150?",
      options: ["20", "25", "30", "40"],
      answer: "25",
      explanation: "STEP 1: 100/25=4, 150/25=6."
    },
    {
      question: "Which number is a multiple of every integer?",
      options: ["0", "1", "10", "100"],
      answer: "0",
      explanation: "STEP 1: 0 = n × 0 for any integer n."
    },
    {
      question: "The LCM of two prime numbers is:",
      options: ["Their sum", "Their difference", "Their product", "1"],
      answer: "Their product",
      explanation: "STEP 1: Since they share no factors, you must multiply them."
    },
    {
      question: "The GCF of two prime numbers is:",
      options: ["0", "1", "The smaller number", "The larger number"],
      answer: "1",
      explanation: "STEP 1: They have no common factors other than 1."
    },
    {
      question: "If X is a multiple of Y, then the LCM of X and Y is:",
      options: ["X", "Y", "X × Y", "1"],
      answer: "X",
      explanation: "STEP 1: Example 12 and 4. LCM is 12 (X)."
    },
    {
      question: "If X is a multiple of Y, then the GCF of X and Y is:",
      options: ["X", "Y", "X × Y", "1"],
      answer: "Y",
      explanation: "STEP 1: Example 12 and 4. GCF is 4 (Y)."
    },
    {
      question: "Can the GCF of two numbers be greater than the numbers themselves?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "STEP 1: Factors are always less than or equal to the number."
    },
    {
      question: "Can the LCM of two numbers be less than the numbers themselves?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "STEP 1: Multiples are always greater than or equal to the number."
    },
    {
      question: "What is the GCF of n and n+1?",
      options: ["1", "n", "n+1", "2"],
      answer: "1",
      explanation: "STEP 1: Consecutive integers are always coprime."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Application, Formula, Counting)
  // ==========================================
  advanced: [
    // 1-10: LCM x GCF Formula
    {
      question: "The LCM of two numbers is 24 and their GCF is 4. If one number is 8, what is the other?",
      options: ["10", "12", "16", "20"],
      answer: "12",
      explanation: "STEP 1: Formula: LCM × GCF = Product of numbers.\nSTEP 2: 24 × 4 = 96.\nSTEP 3: 96 ÷ 8 = 12."
    },
    {
      question: "Product of two numbers is 100. If their GCF is 5, what is their LCM?",
      options: ["10", "20", "25", "50"],
      answer: "20",
      explanation: "STEP 1: Product = LCM × GCF.\nSTEP 2: 100 = LCM × 5.\nSTEP 3: LCM = 20."
    },
    {
      question: "LCM of two numbers is 60 and product is 180. Find the GCF.",
      options: ["3", "6", "9", "12"],
      answer: "3",
      explanation: "STEP 1: Product ÷ LCM = GCF.\nSTEP 2: 180 ÷ 60 = 3."
    },
    {
      question: "If LCM(x, 10) = 30 and GCF(x, 10) = 2, find x.",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "STEP 1: x × 10 = 30 × 2 = 60.\nSTEP 2: x = 60 ÷ 10 = 6."
    },
    {
      question: "Two numbers have GCF 6 and LCM 72. If one number is 18, the other is:",
      options: ["12", "24", "30", "36"],
      answer: "24",
      explanation: "STEP 1: 6 × 72 = 432.\nSTEP 2: 432 ÷ 18 = 24."
    },
    {
      question: "The product of two co-prime numbers is 117. Their LCM should be:",
      options: ["1", "9", "13", "117"],
      answer: "117",
      explanation: "STEP 1: For coprime numbers, GCF=1.\nSTEP 2: LCM × 1 = Product.\nSTEP 3: LCM = 117."
    },
    {
      question: "The GCF of two numbers is 12 and their ratio is 3:4. The numbers are:",
      options: ["24, 32", "36, 48", "12, 16", "48, 64"],
      answer: "36, 48",
      explanation: "STEP 1: Numbers are 3x and 4x.\nSTEP 2: GCF is x (since 3,4 are coprime). So x=12.\nSTEP 3: Numbers are 3(12)=36 and 4(12)=48."
    },
    {
      question: "Product = 1500, LCM = 300. GCF = ?",
      options: ["3", "5", "10", "15"],
      answer: "5",
      explanation: "STEP 1: 1500 ÷ 300 = 5."
    },
    {
      question: "Can two numbers have GCF=12 and LCM=50?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "STEP 1: LCM must be divisible by GCF.\nSTEP 2: 50 is not divisible by 12."
    },
    {
      question: "The LCM of 12 and x is 48. The GCF is 4. What is x?",
      options: ["8", "12", "16", "24"],
      answer: "16",
      explanation: "STEP 1: 12x = 48 × 4 = 192.\nSTEP 2: x = 192 ÷ 12 = 16."
    },
    // 11-20: Word Problems (Remainders & Grouping)
    {
      question: "Find the smallest number which leaves a remainder of 2 when divided by 5, 6, and 8.",
      options: ["118", "122", "242", "120"],
      answer: "122",
      explanation: "STEP 1: Find LCM(5, 6, 8).\nSTEP 2: LCM = 120.\nSTEP 3: Add the remainder: 120 + 2 = 122."
    },
    {
      question: "What is the smallest number that is exactly divisible by 12, 15, and 20?",
      options: ["30", "45", "60", "90"],
      answer: "60",
      explanation: "STEP 1: Find LCM(12, 15, 20).\nSTEP 2: 60."
    },
    {
      question: "Find the greatest number that divides 30, 45, and 75 exactly.",
      options: ["5", "10", "15", "25"],
      answer: "15",
      explanation: "STEP 1: Find GCF(30, 45, 75).\nSTEP 2: 15."
    },
    {
      question: "A number lies between 100 and 150. It is a multiple of 8 and 12. What is the number?",
      options: ["108", "120", "132", "140"],
      answer: "120",
      explanation: "STEP 1: LCM(8, 12) = 24.\nSTEP 2: Multiples of 24: 96, 120, 144.\nSTEP 3: Both 120 and 144 are in range, but 120 is the smallest."
    },
    {
      question: "What is the smallest number divisible by 8, 9, 12?",
      options: ["36", "72", "144", "24"],
      answer: "72",
      explanation: "STEP 1: LCM(8, 9, 12).\nSTEP 2: LCM(8,12)=24. LCM(24,9)=72."
    },
    {
      question: "Three lights flash every 10s, 15s, and 20s. They flash together at 8:00 AM. When do they flash together next?",
      options: ["8:00:30", "8:01:00", "8:01:30", "8:02:00"],
      answer: "8:01:00",
      explanation: "STEP 1: LCM(10, 15, 20) = 60 seconds.\nSTEP 2: 60s = 1 minute.\nSTEP 3: 8:01:00 AM."
    },
    {
      question: "Find the greatest number which divides 25 and 38 leaving remainders 1 and 2 respectively.",
      options: ["6", "12", "18", "24"],
      answer: "12",
      explanation: "STEP 1: 25-1=24, 38-2=36.\nSTEP 2: GCF(24,36) = 12."
    },
    {
      question: "What is the smallest 3-digit number divisible by 6, 8, and 12?",
      options: ["100", "104", "120", "144"],
      answer: "120",
      explanation: "STEP 1: LCM(6,8,12) = 24.\nSTEP 2: Multiples of 24: 24, 48, 72, 96, 120.\nSTEP 3: 120 is the first 3-digit multiple."
    },
    {
      question: "Find the largest 2-digit number divisible by 3 and 5.",
      options: ["90", "95", "99", "85"],
      answer: "90",
      explanation: "STEP 1: LCM(3,5) = 15.\nSTEP 2: Multiples: 15... 75, 90, 105.\nSTEP 3: 90 is largest 2-digit."
    },
    {
      question: "Which is divisible by 15: 140, 225, 310, 400?",
      options: ["140", "225", "310", "400"],
      answer: "225",
      explanation: "STEP 1: Must be divisible by 5 (ends in 0 or 5) and 3 (sum of digits).\nSTEP 2: 225: 2+2+5=9 (Yes)."
    },
    // 21-30: Counting Factors
    {
      question: "How many factors does 12 have?",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "STEP 1: 1, 2, 3, 4, 6, 12."
    },
    {
      question: "How many factors does 24 have?",
      options: ["6", "8", "10", "12"],
      answer: "8",
      explanation: "STEP 1: 1, 2, 3, 4, 6, 8, 12, 24."
    },
    {
      question: "How many factors does 36 have?",
      options: ["8", "9", "10", "12"],
      answer: "9",
      explanation: "STEP 1: 1, 2, 3, 4, 6, 9, 12, 18, 36.\nSTEP 2: Odd number of factors because it's a perfect square."
    },
    {
      question: "How many factors does 72 have?",
      options: ["10", "12", "14", "16"],
      answer: "12",
      explanation: "STEP 1: 72 = 2^3 × 3^2.\nSTEP 2: (3+1)(2+1) = 4 × 3 = 12."
    },
    {
      question: "A number has exactly 3 factors. It must be:",
      options: ["Prime", "Square of a prime", "Composite odd", "Cube of a prime"],
      answer: "Square of a prime",
      explanation: "STEP 1: Examples: 4 (1,2,4), 9 (1,3,9), 25 (1,5,25).\nSTEP 2: Prime squares have 3 factors."
    },
    {
      question: "How many distinct prime factors does 60 have?",
      options: ["3", "4", "5", "6"],
      answer: "3",
      explanation: "STEP 1: 60 = 2 × 2 × 3 × 5.\nSTEP 2: Distinct prime factors are 2, 3, 5."
    },
    {
      question: "Find the number of factors of 100.",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "STEP 1: 100 = 2^2 × 5^2.\nSTEP 2: (2+1)(2+1) = 3 × 3 = 9."
    },
    {
      question: "How many factors does 48 have?",
      options: ["8", "10", "12", "14"],
      answer: "10",
      explanation: "STEP 1: 48 = 16 × 3 = 2^4 × 3^1.\nSTEP 2: (4+1)(1+1) = 5 × 2 = 10."
    },
    {
      question: "Which of these numbers has an odd number of factors?",
      options: ["40", "48", "64", "72"],
      answer: "64",
      explanation: "STEP 1: Perfect squares have an odd number of factors.\nSTEP 2: 64 = 8^2."
    },
    {
      question: "The sum of the factors of 6 is:",
      options: ["6", "10", "12", "15"],
      answer: "12",
      explanation: "STEP 1: Factors: 1, 2, 3, 6.\nSTEP 2: 1+2+3+6 = 12."
    },
    // 31-40: Divisibility Rules Application
    {
      question: "If a number is divisible by 9, it must also be divisible by:",
      options: ["3", "6", "18", "27"],
      answer: "3",
      explanation: "STEP 1: 9 is a multiple of 3."
    },
    {
      question: "Which number is divisible by 4?",
      options: ["114", "218", "324", "442"],
      answer: "324",
      explanation: "STEP 1: Check last two digits. 24 is divisible by 4."
    },
    {
      question: "If 3x2 is divisible by 3, what is a possible value for x?",
      options: ["1", "2", "3", "5"],
      answer: "1",
      explanation: "STEP 1: 3 + x + 2 = 5 + x must be divisible by 3.\nSTEP 2: 5+1=6 (Yes). 5+2=7(No). 5+3=8(No). 5+5=10(No)."
    },
    {
      question: "Which is a multiple of 11?",
      options: ["122", "132", "142", "152"],
      answer: "132",
      explanation: "STEP 1: 132: 1-3+2 = 0. Divisible."
    },
    {
      question: "A number is divisible by 18 if it is divisible by:",
      options: ["2 and 9", "3 and 6", "2 and 6", "3 and 9"],
      answer: "2 and 9",
      explanation: "STEP 1: 2 and 9 are coprime factors of 18."
    },
    {
      question: "Which number is divisible by 8?",
      options: ["124", "130", "144", "150"],
      answer: "144",
      explanation: "STEP 1: 144 ÷ 8 = 18."
    },
    {
      question: "Which number is divisible by 2, 3, and 5?",
      options: ["20", "30", "45", "50"],
      answer: "30",
      explanation: "STEP 1: LCM(2,3,5) = 30."
    },
    {
      question: "Is 1001 divisible by 7?",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: "STEP 1: 1001 ÷ 7 = 143."
    },
    {
      question: "Smallest number to add to 1000 to make it divisible by 3?",
      options: ["1", "2", "3", "0"],
      answer: "2",
      explanation: "STEP 1: Sum of digits 1000 is 1.\nSTEP 2: Next sum divisible by 3 is 3.\nSTEP 3: Need to add 2."
    },
    {
      question: "Find the GCF of 108 and 144.",
      options: ["12", "18", "24", "36"],
      answer: "36",
      explanation: "STEP 1: Both divisible by 12? Yes. 9 and 12.\nSTEP 2: GCF(9,12) = 3.\nSTEP 3: 12 × 3 = 36."
    },
    // 41-50: Logic/Sets
    {
      question: "Which set contains only multiples of 4?",
      options: ["4, 6, 8", "8, 12, 18", "4, 8, 16", "12, 16, 18"],
      answer: "4, 8, 16",
      explanation: "STEP 1: Check elements.\nSTEP 2: 6 and 18 are not multiples of 4."
    },
    {
      question: "Which set contains only factors of 20?",
      options: ["1, 2, 4, 8", "2, 4, 5, 10", "1, 3, 5, 20", "2, 4, 6, 10"],
      answer: "2, 4, 5, 10",
      explanation: "STEP 1: 8, 3, 6 are not factors of 20."
    },
    {
      question: "The sum of the first 3 multiples of 4 is:",
      options: ["12", "20", "24", "30"],
      answer: "24",
      explanation: "STEP 1: 4, 8, 12.\nSTEP 2: 4+8+12 = 24."
    },
    {
      question: "LCM of two coprime numbers a and b is:",
      options: ["a+b", "a-b", "ab", "1"],
      answer: "ab",
      explanation: "STEP 1: Property of coprime LCM."
    },
    {
      question: "If GCF(a,b) = a, then:",
      options: ["a is multiple of b", "b is multiple of a", "a = b", "a > b"],
      answer: "b is multiple of a",
      explanation: "STEP 1: The factor is the smaller number, so b divides by a."
    },
    {
      question: "Common multiples of 3 and 4 less than 30 are:",
      options: ["12, 24", "12, 18", "12, 24, 36", "6, 12"],
      answer: "12, 24",
      explanation: "STEP 1: LCM is 12.\nSTEP 2: Multiples: 12, 24, 36...\nSTEP 3: Less than 30: 12, 24."
    },
    {
      question: "The GCF of a number and 1 is:",
      options: ["0", "1", "The number", "Undefined"],
      answer: "1",
      explanation: "STEP 1: 1 divides everything, but is the max factor of itself."
    },
    {
      question: "Sum of distinct prime factors of 12 is:",
      options: ["5", "7", "12", "10"],
      answer: "5",
      explanation: "STEP 1: 12 = 2 × 2 × 3.\nSTEP 2: Sum of distinct primes = 2 + 3 = 5."
    },
    {
      question: "Number of common factors of 12 and 18:",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "STEP 1: Common factors: 1, 2, 3, 6.\nSTEP 2: Total 4 common factors."
    },
    {
      question: "Smallest composite number is:",
      options: ["1", "2", "4", "6"],
      answer: "4",
      explanation: "STEP 1: 1 not composite, 2 prime, 3 prime, 4 composite."
    }
  ],

    // ==========================================
  // LEVEL 4: EXPERT (50 items – Advanced Logic, Optimization, Large #s)
  // ==========================================
  expert: [
    // 1-10: Reverse Engineering LCM/GCF
    {
      question: "The LCM of two numbers is 120 and their GCF is 10. Which of the following CAN be the sum of the two numbers?",
      options: ["40", "70", "80", "90"],
      answer: "70",
      explanation: "STEP 1: Let the numbers be 10a and 10b so that their GCF is 10.\nSTEP 2: Then LCM(10a, 10b) = 10ab. We know 10ab = 120, so ab = 12.\nSTEP 3: The coprime factor pairs of 12 are (1, 12) and (3, 4).\nSTEP 4: So the numbers can be (10, 120) with sum 130, or (30, 40) with sum 70.\nSTEP 5: Among the choices, only 70 can be the sum."
    },
    {
      question: "The GCF of two numbers is 13 and their product is 2028. How many such pairs exist?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "STEP 1: Let the numbers be 13a and 13b.\nSTEP 2: 13a × 13b = 2028 → 169ab = 2028 → ab = 12.\nSTEP 3: The coprime factor pairs of 12 are (1, 12) and (3, 4).\nSTEP 4: So there are 2 such pairs."
    },
    {
      question: "Three numbers have ratios 3:4:5 and their LCM is 2400. Their GCF is:",
      options: ["20", "40", "60", "80"],
      answer: "40",
      explanation: "STEP 1: Let the numbers be 3x, 4x, and 5x.\nSTEP 2: LCM(3, 4, 5) × x = 60x.\nSTEP 3: 60x = 2400 → x = 40.\nSTEP 4: The GCF is x = 40."
    },
    {
      question: "Find the smallest number which leaves remainder 3 when divided by 12 and remainder 7 when divided by 16.",
      options: ["39", "43", "51", "55"],
      answer: "39",
      explanation: "STEP 1: Let the number be N.\nSTEP 2: N = 12a + 3 = 16b + 7.\nSTEP 3: 12a + 3 = 16b + 7 → 12a - 16b = 4 → 3a - 4b = 1.\nSTEP 4: Try a = 3, b = 2: 3(3) - 4(2) = 9 - 8 = 1.\nSTEP 5: N = 12×3 + 3 = 39 and 16×2 + 7 = 39, so 39 works."
    },
    {
      question: "What is the smallest number divisible by 6, 8, and 12 that is also a multiple of 7?",
      options: ["72", "168", "252", "336"],
      answer: "168",
      explanation: "STEP 1: LCM(6, 8, 12) = 24.\nSTEP 2: We need the smallest multiple of 24 that is also divisible by 7.\nSTEP 3: LCM(24, 7) = 168.\nSTEP 4: So 168 is the smallest such number."
    },
    {
      question: "Number of ordered pairs of positive integers (x, y) such that LCM(x, y) = 20?",
      options: ["8", "10", "14", "15"],
      answer: "15",
      explanation: "STEP 1: 20 = 2² × 5¹.\nSTEP 2: For LCM(x, y) = 2² × 5¹, the exponents for each prime in x and y range from 0 up to the LCM's exponent, but at least one must have the maximum for each prime.\nSTEP 3: The total number of ordered pairs is (2e₁ + 1)(2e₂ + 1) = (2×2 + 1)(2×1 + 1) = 5 × 3 = 15."
    },
    {
      question: "Find the largest number that divides 62, 132, and 237 leaving the same remainder in each case.",
      options: ["15", "35", "25", "45"],
      answer: "35",
      explanation: "STEP 1: If the same remainder is left, then the differences are multiples of the required number.\nSTEP 2: Differences: 132 − 62 = 70, 237 − 132 = 105, 237 − 62 = 175.\nSTEP 3: GCF(70, 105, 175) = 35.\nSTEP 4: So 35 is the largest such number."
    },
    {
      question: "Which is the smallest 5-digit number divisible by 12, 15, and 18?",
      options: ["10000", "10020", "10080", "10100"],
      answer: "10080",
      explanation: "STEP 1: Find LCM(12, 15, 18).\nSTEP 2: 12 = 2² × 3, 15 = 3 × 5, 18 = 2 × 3².\nSTEP 3: LCM = 2² × 3² × 5 = 180.\nSTEP 4: 10000 ÷ 180 ≈ 55.55, so take 56.\nSTEP 5: 56 × 180 = 10080, the smallest 5-digit multiple."
    },
    {
      question: "How many factors of 2⁴ × 3³ × 5² are perfect squares?",
      options: ["6", "8", "12", "16"],
      answer: "12",
      explanation: "STEP 1: Perfect squares have even exponents.\nSTEP 2: Exponents options: for 2⁴ → 0, 2, 4 (3 choices); for 3³ → 0, 2 (2 choices); for 5² → 0, 2 (2 choices).\nSTEP 3: Total perfect square factors: 3 × 2 × 2 = 12."
    },
    {
      question: "Sum of even factors of 24:",
      options: ["48", "56", "60", "36"],
      answer: "56",
      explanation: "STEP 1: Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.\nSTEP 2: Even factors: 2, 4, 6, 8, 12, 24.\nSTEP 3: Sum = 2 + 4 + 6 + 8 + 12 + 24 = 56."
    },

    // 11-20: Complex Word Problems
    {
      question: "A gardener has 44 apple trees, 66 banana trees, and 110 mango trees. He wants equal trees per row of same type. Minimum rows?",
      options: ["10", "11", "22", "20"],
      answer: "10",
      explanation: "STEP 1: Find GCF(44, 66, 110) to maximize trees per row.\nSTEP 2: GCF = 22 trees per row.\nSTEP 3: Number of rows: 44/22 + 66/22 + 110/22 = 2 + 3 + 5 = 10."
    },
    {
      question: "What is the least multiple of 7 which, when divided by 6, 9, 15, and 18, leaves a remainder of 4?",
      options: ["364", "454", "74", "94"],
      answer: "364",
      explanation: "STEP 1: The number leaves remainder 4, so it is of the form 90k + 4 where 90 = LCM(6, 9, 15, 18).\nSTEP 2: We need 90k + 4 to be divisible by 7.\nSTEP 3: Try k = 4: 90×4 + 4 = 364.\nSTEP 4: 364 ÷ 7 = 52, so 364 works."
    },
    {
      question: "The product of two numbers is 24 and their difference is 2. The numbers are:",
      options: ["4, 6", "2, 12", "8, 10", "6, 8"],
      answer: "4, 6",
      explanation: "STEP 1: Let the two numbers be x and y.\nSTEP 2: We are told that xy = 24 and |x − y| = 2.\nSTEP 3: Test factor pairs of 24: (1, 24), (2, 12), (3, 8), (4, 6).\nSTEP 4: Only 4 and 6 differ by 2, and 4 × 6 = 24.\nSTEP 5: Therefore, the numbers are 4 and 6."
    },
    {
      question: "Find the number of zeros at the end of 25!",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "STEP 1: Number of zeros depends on number of factors of 10.\nSTEP 2: 10 = 2 × 5, and there are more 2s than 5s.\nSTEP 3: Count factors of 5: ⌊25/5⌋ = 5, ⌊25/25⌋ = 1.\nSTEP 4: Total zeros = 5 + 1 = 6."
    },
    {
      question: "Which of these is NOT a factor of 12! (12 factorial)?",
      options: ["13", "14", "100", "12"],
      answer: "13",
      explanation: "STEP 1: 12! is the product of all integers from 1 to 12.\nSTEP 2: Any integer ≤ 12 is a factor of 12!.\nSTEP 3: 13 is greater than 12, so it cannot be a factor of 12!."
    },
    {
      question: "If n is an integer, n(n+1)(n+2) is always divisible by:",
      options: ["4", "6", "8", "12"],
      answer: "6",
      explanation: "STEP 1: Any three consecutive integers include a multiple of 2 and a multiple of 3.\nSTEP 2: Therefore, their product is divisible by 2 × 3 = 6."
    },
    {
      question: "Find n if GCF(n, 45) = 15 and LCM(n, 45) = 90.",
      options: ["15", "30", "60", "75"],
      answer: "30",
      explanation: "STEP 1: Use the identity: n × 45 = GCF × LCM = 15 × 90.\nSTEP 2: 45n = 1350 → n = 1350 ÷ 45 = 30.\nSTEP 3: Check: GCF(30, 45) = 15 and LCM(30, 45) = 90."
    },
    {
      question: "What is the smallest number to subtract from 3000 to make it divisible by 19?",
      options: ["11", "17", "9", "5"],
      answer: "17",
      explanation: "STEP 1: Divide 3000 by 19.\nSTEP 2: 19 × 157 = 2983, remainder 17.\nSTEP 3: Subtract the remainder: 3000 − 17 = 2983, which is divisible by 19."
    },
    {
      question: "Six bells toll at intervals of 2, 4, 6, 8, 10, and 12 seconds. If they all toll together now, how many times will they toll together in 30 minutes?",
      options: ["15", "16", "20", "21"],
      answer: "16",
      explanation: "STEP 1: Find LCM(2, 4, 6, 8, 10, 12).\nSTEP 2: LCM = 120 seconds = 2 minutes.\nSTEP 3: In 30 minutes, they coincide every 2 minutes.\nSTEP 4: Number of coincidences: 30/2 + 1 = 15 + 1 = 16 (including the start)."
    },
    {
      question: "Which number is a factor of 1000000007?",
      options: ["3", "9", "1", "5"],
      answer: "1",
      explanation: "STEP 1: 1 is a factor of every integer.\nSTEP 2: So 1 is certainly a factor of 1000000007."
    },

    // 21-30: Factors Logic
    {
      question: "Total number of factors of 10800?",
      options: ["48", "60", "72", "64"],
      answer: "60",
      explanation: "STEP 1: 10800 = 2⁴ × 3³ × 5².\nSTEP 2: Number of factors = (4+1)(3+1)(2+1) = 5 × 4 × 3 = 60."
    },
    {
      question: "The sum of digits of the smallest positive number divisible by 9 and 11:",
      options: ["9", "11", "18", "2"],
      answer: "18",
      explanation: "STEP 1: LCM(9, 11) = 99.\nSTEP 2: 99 is the smallest positive number divisible by both.\nSTEP 3: Sum of digits = 9 + 9 = 18."
    },
    {
      question: "If x is prime, how many factors does x² have?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "STEP 1: Let x be prime.\nSTEP 2: Factors of x² are: 1, x, x².\nSTEP 3: So there are 3 factors."
    },
    {
      question: "Product of all factors of 12 is:",
      options: ["144", "1728", "12³", "12⁶"],
      answer: "1728",
      explanation: "STEP 1: Factors of 12: 1, 2, 3, 4, 6, 12 (6 factors).\nSTEP 2: For a number with d factors, the product of factors is n^(d/2).\nSTEP 3: So product = 12^(6/2) = 12³ = 1728."
    },
    {
      question: "Smallest number with exactly 5 factors?",
      options: ["16", "36", "10", "6"],
      answer: "16",
      explanation: "STEP 1: A number with exactly 5 factors must be of the form p⁴ where p is prime.\nSTEP 2: Smallest such number: 2⁴ = 16.\nSTEP 3: Factors of 16: 1, 2, 4, 8, 16 (5 factors)."
    },
    {
      question: "How many multiples of 5 are there between 10 and 100 inclusive?",
      options: ["18", "19", "20", "21"],
      answer: "19",
      explanation: "STEP 1: Sequence: 10, 15, ..., 100.\nSTEP 2: Use formula for number of terms: ((last − first)/step) + 1.\nSTEP 3: ((100 − 10)/5) + 1 = 90/5 + 1 = 18 + 1 = 19."
    },
    {
      question: "The GCF of two consecutive even numbers is always:",
      options: ["1", "2", "4", "Depends"],
      answer: "2",
      explanation: "STEP 1: Let the numbers be 2n and 2n+2.\nSTEP 2: Factor out 2: 2n and 2(n+1).\nSTEP 3: n and n+1 are consecutive integers, hence coprime.\nSTEP 4: So the GCF is 2."
    },
    {
      question: "If a number is divisible by 8, the remainder when it is divided by 4 is:",
      options: ["0", "2", "4", "Unknown"],
      answer: "0",
      explanation: "STEP 1: If a number is divisible by 8, it can be written as 8k.\nSTEP 2: 8k ÷ 4 = 2k with no remainder.\nSTEP 3: So the remainder is 0."
    },
    {
      question: "Largest 3-digit number divisible by 16?",
      options: ["992", "996", "998", "990"],
      answer: "992",
      explanation: "STEP 1: Largest 3-digit number is 999.\nSTEP 2: 999 ÷ 16 ≈ 62.43, so take 62.\nSTEP 3: 62 × 16 = 992, the largest 3-digit multiple of 16."
    },
    {
      question: "The number 111111 is divisible by:",
      options: ["3, 7, 11, 13, 37", "3, 5, 9", "2, 11", "17"],
      answer: "3, 7, 11, 13, 37",
      explanation: "STEP 1: 111111 = 111 × 1001.\nSTEP 2: 111 = 3 × 37 and 1001 = 7 × 11 × 13.\nSTEP 3: So 111111 is divisible by 3, 7, 11, 13, and 37."
    },

    // 31-40: Number Theory
    {
      question: "If GCF of x and y is 15, which CANNOT be their LCM?",
      options: ["45", "60", "150", "100"],
      answer: "100",
      explanation: "STEP 1: The LCM must be a multiple of the GCF.\nSTEP 2: 45, 60, and 150 are all multiples of 15.\nSTEP 3: 100 is not a multiple of 15.\nSTEP 4: Therefore, 100 cannot be their LCM."
    },
    {
      question: "A number has prime factors 2, 3, and 5. Which is NOT guaranteed to be a factor?",
      options: ["6", "10", "15", "20"],
      answer: "20",
      explanation: "STEP 1: If the prime factors are 2, 3, and 5, the number is of the form 2ᵃ × 3ᵇ × 5ᶜ with a, b, c ≥ 1.\nSTEP 2: 6 = 2 × 3, 10 = 2 × 5, 15 = 3 × 5 will always divide such a number.\nSTEP 3: 20 = 2² × 5 requires at least two factors of 2, which is not guaranteed.\nSTEP 4: So 20 is not guaranteed to be a factor."
    },
    {
      question: "Find the sum of all factors of 20.",
      options: ["40", "42", "36", "20"],
      answer: "42",
      explanation: "STEP 1: Factors of 20: 1, 2, 4, 5, 10, 20.\nSTEP 2: Sum = 1 + 2 + 4 + 5 + 10 + 20 = 42."
    },
    {
      question: "Total number of prime factors (counting multiplicity) in 6¹⁰ × 7¹⁷ × 11²⁷?",
      options: ["3", "54", "64", "2"],
      answer: "64",
      explanation: "STEP 1: 6¹⁰ = (2 × 3)¹⁰ = 2¹⁰ × 3¹⁰.\nSTEP 2: So the product is 2¹⁰ × 3¹⁰ × 7¹⁷ × 11²⁷.\nSTEP 3: Total prime factors with multiplicity = 10 + 10 + 17 + 27 = 64."
    },
    {
      question: "If N is a perfect number, the sum of all its factors including N is:",
      options: ["N", "2N", "N+1", "3N"],
      answer: "2N",
      explanation: "STEP 1: By definition, for a perfect number N, the sum of its proper divisors (excluding N) equals N.\nSTEP 2: Sum of all factors including N = N + N = 2N."
    },
    {
      question: "Smallest number to divide 3600 to make it a perfect cube?",
      options: ["9", "50", "300", "450"],
      answer: "450",
      explanation: "STEP 1: 3600 = 2⁴ × 3² × 5².\nSTEP 2: For a perfect cube, exponents must be multiples of 3.\nSTEP 3: Reduce exponents to nearest multiple of 3 below: 4 → 3 (subtract 1); 2 → 0 (subtract 2) for both 3 and 5.\nSTEP 4: Divide by 2¹ × 3² × 5² = 2 × 9 × 25 = 450."
    },
    {
      question: "What is the least perfect square that is divisible by 10, 15, and 20?",
      options: ["900", "400", "1600", "3600"],
      answer: "900",
      explanation: "STEP 1: Find the LCM of 10, 15, and 20.\n- 10 = 2 × 5\n- 15 = 3 × 5\n- 20 = 2² × 5\nSo LCM = 2² × 3 × 5 = 60.\nSTEP 2: For a perfect square, all exponents in the prime factorization must be even.\nSTEP 3: 60 = 2² × 3 × 5. Multiply by 3 × 5 to make the exponents of 3 and 5 even: 60 × 15 = 900.\nSTEP 4: 900 = 30², so it is the least perfect square divisible by 10, 15, and 20."
    },
    {
      question: "If a number is divisible by both 12 and 21, it must be divisible by:",
      options: ["252", "84", "42", "36"],
      answer: "84",
      explanation: "STEP 1: We need LCM(12, 21).\nSTEP 2: 12 = 2² × 3, 21 = 3 × 7.\nSTEP 3: LCM = 2² × 3 × 7 = 84.\nSTEP 4: So the number must be divisible by 84."
    },
    {
      question: "How many multiples of 7 are there between 100 and 200?",
      options: ["14", "15", "13", "16"],
      answer: "14",
      explanation: "STEP 1: First multiple of 7 ≥ 100 is 105.\nSTEP 2: Last multiple of 7 ≤ 200 is 196.\nSTEP 3: Number of terms = ((196 − 105)/7) + 1 = 91/7 + 1 = 13 + 1 = 14."
    },
    {
      question: "If LCM(a, b) = r and GCF(a, b) = s, then LCM(r, s) is:",
      options: ["r", "s", "rs", "1"],
      answer: "r",
      explanation: "STEP 1: For any two numbers a and b, GCF(a, b) divides LCM(a, b).\nSTEP 2: So s divides r.\nSTEP 3: LCM of a number and its factor is the larger number, so LCM(r, s) = r."
    },

    // 41-50: Final Challenges
    {
      question: "Sum of distinct prime factors of 2310:",
      options: ["20", "25", "28", "30"],
      answer: "28",
      explanation: "STEP 1: 2310 = 2 × 3 × 5 × 7 × 11.\nSTEP 2: Sum = 2 + 3 + 5 + 7 + 11 = 28."
    },
    {
      question: "Which number has the most factors?",
      options: ["72", "120", "100", "24"],
      answer: "120",
      explanation: "STEP 1: 72 = 2³ × 3² → (3+1)(2+1) = 12 factors.\nSTEP 2: 120 = 2³ × 3 × 5 → (3+1)(1+1)(1+1) = 16 factors.\nSTEP 3: 100 = 2² × 5² → 9 factors. 24 = 2³ × 3 → 8 factors.\nSTEP 4: 120 has the most factors."
    },
    {
      question: "Least multiple of 13 leaving remainder 2 when divided by 4, 5, 6, 7, and 8:",
      options: ["2522", "842", "2520", "840"],
      answer: "2522",
      explanation: "STEP 1: The number leaves remainder 2 when divided by 4, 5, 6, 7, and 8, so it is of the form 840k + 2, where 840 = LCM(4, 5, 6, 7, 8).\nSTEP 2: We need 840k + 2 to be divisible by 13.\nSTEP 3: Try k = 3: 840×3 + 2 = 2522.\nSTEP 4: 2522 ÷ 13 = 194, so it works."
    },
    {
      question: "GCF of 2¹⁰⁰ − 1 and 2¹²⁰ − 1 is:",
      options: ["2¹⁰ − 1", "2²⁰ − 1", "2⁵ − 1", "1"],
      answer: "2²⁰ − 1",
      explanation: "STEP 1: Use the identity GCF(aᵐ − 1, aⁿ − 1) = a^GCF(m, n) − 1.\nSTEP 2: GCF(100, 120) = 20.\nSTEP 3: So GCF(2¹⁰⁰ − 1, 2¹²⁰ − 1) = 2²⁰ − 1."
    },
    {
      question: "Number of factors of 3600 that are multiples of 12:",
      options: ["20", "24", "18", "15"],
      answer: "18",
      explanation: "STEP 1: Let the factor be 12k. For 12k to divide 3600, k must divide 3600 ÷ 12 = 300.\nSTEP 2: 300 = 2² × 3 × 5².\nSTEP 3: Number of factors of 300 = (2+1)(1+1)(2+1) = 3 × 2 × 3 = 18."
    },
    {
      question: "Find x if LCM(x, 18) = 36 and GCF(x, 18) = 2.",
      options: ["2", "4", "6", "8"],
      answer: "4",
      explanation: "STEP 1: Use the formula x × 18 = LCM × GCF = 36 × 2.\nSTEP 2: x × 18 = 72 → x = 72 ÷ 18 = 4.\nSTEP 3: Check: GCF(4, 18) = 2, LCM(4, 18) = 36."
    },
    {
      question: "The numbers 112, 133, and 135 are:",
      options: ["All prime", "All composite", "Coprime", "None"],
      answer: "All composite",
      explanation: "STEP 1: 112 is even so composite.\nSTEP 2: 133 = 7 × 19, composite.\nSTEP 3: 135 ends in 5 and equals 5 × 27, so composite.\nSTEP 4: All three numbers are composite."
    },
    {
      question: "Difference between LCM and GCF of 10 and 15?",
      options: ["20", "25", "30", "15"],
      answer: "25",
      explanation: "STEP 1: GCF(10, 15) = 5.\nSTEP 2: LCM(10, 15) = 30.\nSTEP 3: Difference = 30 − 5 = 25."
    },
    {
      question: "If A = 2³ × 3¹⁰ × 5 and B = 2⁵ × 3 × 7, GCF(A, B) is:",
      options: ["2³ × 3", "2⁵ × 3¹⁰", "2³ × 3 × 5 × 7", "6"],
      answer: "2³ × 3",
      explanation: "STEP 1: Take the minimum exponents of common primes.\nSTEP 2: For 2: min(3, 5) = 3. For 3: min(10, 1) = 1.\nSTEP 3: 5 and 7 are not common.\nSTEP 4: So GCF(A, B) = 2³ × 3."
    },
    {
      question: "Find the largest number which divides 200 and 300 leaving remainders 8 and 12 respectively.",
      options: ["24", "48", "72", "96"], // Updated options to include 96
      answer: "96",
      explanation: "STEP 1: Subtract the remainders: 200 − 8 = 192 and 300 − 12 = 288.\nSTEP 2: The required number must divide both 192 and 288.\nSTEP 3: GCF(192, 288) = 96, since 192 = 96 × 2 and 288 = 96 × 3.\nSTEP 4: Therefore, 96 is the largest such number."
    }
  ]
};
