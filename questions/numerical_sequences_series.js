// questions/sequences_series.js
// ==========================================
// NUMERICAL – SEQUENCES & SERIES (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// Focus: Civil Service Exam–style questions only
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["sequences_series"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Definitions, Next Terms, Basic Types)
  // ==========================================
  beginner: [
    // 1-10: Identify the Type of Sequence
    {
      question: "Identify the sequence: 2, 4, 6, 8, ...",
      options: ["Arithmetic", "Geometric", "Harmonic", "Fibonacci"],
      answer: "Arithmetic",
      explanation: "There is a common difference of 2."
    },
    {
      question: "Identify the sequence: 3, 6, 12, 24, ...",
      options: ["Arithmetic", "Geometric", "Harmonic", "Fibonacci"],
      answer: "Geometric",
      explanation: "There is a common ratio of 2."
    },
    {
      question: "Identify the sequence: 1, 1, 2, 3, 5, 8, ...",
      options: ["Arithmetic", "Geometric", "Harmonic", "Fibonacci"],
      answer: "Fibonacci",
      explanation: "Each term is the sum of the two preceding terms."
    },
    {
      question: "Identify the sequence: 1/2, 1/4, 1/6, 1/8, ...",
      options: ["Arithmetic", "Geometric", "Harmonic", "Fibonacci"],
      answer: "Harmonic",
      explanation: "The reciprocals (2, 4, 6, 8) form an arithmetic sequence."
    },
    {
      question: "Identify the sequence: 5, 10, 15, 20, ...",
      options: ["Arithmetic", "Geometric", "Harmonic", "Infinite"],
      answer: "Arithmetic",
      explanation: "Common difference is 5."
    },
    {
      question: "Identify the sequence: 10, 5, 2.5, 1.25, ...",
      options: ["Arithmetic", "Geometric", "Harmonic", "Fibonacci"],
      answer: "Geometric",
      explanation: "Common ratio is 0.5."
    },
    {
      question: "Identify the sequence: 1, 4, 9, 16, 25, ...",
      options: ["Arithmetic", "Geometric", "Square Numbers", "Cube Numbers"],
      answer: "Square Numbers",
      explanation: "Terms are squares of integers (1², 2², 3², ...)."
    },
    {
      question: "Identify the sequence: 1, 8, 27, 64, ...",
      options: ["Arithmetic", "Geometric", "Square Numbers", "Cube Numbers"],
      answer: "Cube Numbers",
      explanation: "Terms are cubes of integers (1³, 2³, 3³, ...)."
    },
    {
      question: "Identify the sequence: 5, 5, 5, 5, ...",
      options: ["Arithmetic only", "Geometric only", "Both Arithmetic and Geometric", "Neither"],
      answer: "Both Arithmetic and Geometric",
      explanation: "It has a common difference of 0 and a common ratio of 1."
    },
    {
      question: "Identify the sequence: 100, 90, 80, 70, ...",
      options: ["Arithmetic", "Geometric", "Harmonic", "Fibonacci"],
      answer: "Arithmetic",
      explanation: "Common difference is -10."
    },

    // 11-20: Find the Next Term (Simple)
    {
      question: "Find the next term: 5, 8, 11, 14, ...",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "Add 3 each time: 14 + 3 = 17."
    },
    {
      question: "Find the next term: 3, 9, 27, ...",
      options: ["54", "81", "30", "243"],
      answer: "81",
      explanation: "Multiply by 3: 27 × 3 = 81."
    },
    {
      question: "Find the next term: 20, 15, 10, ...",
      options: ["0", "5", "-5", "2"],
      answer: "5",
      explanation: "Subtract 5: 10 − 5 = 5."
    },
    {
      question: "Find the next term: 1, -1, 1, -1, ...",
      options: ["0", "1", "-1", "2"],
      answer: "1",
      explanation: "Pattern oscillates: +1, -1, +1, -1. Next is 1."
    },
    {
      question: "Find the next term: 2, 4, 8, 16, ...",
      options: ["20", "24", "30", "32"],
      answer: "32",
      explanation: "Multiply by 2: 16 × 2 = 32."
    },
    {
      question: "Find the next term: 100, 50, 25, ...",
      options: ["10", "12.5", "15", "5"],
      answer: "12.5",
      explanation: "Divide by 2: 25 ÷ 2 = 12.5."
    },
    {
      question: "Find the next term: 1, 3, 6, 10, ... (Triangular numbers)",
      options: ["12", "14", "15", "16"],
      answer: "15",
      explanation: "Add 2, 3, 4, then 5: 10 + 5 = 15."
    },
    {
      question: "Find the next term: 11, 22, 33, ...",
      options: ["40", "44", "45", "55"],
      answer: "44",
      explanation: "Add 11 each time: 33 + 11 = 44."
    },
    {
      question: "Find the next term: 0, 3, 8, 15, ...",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "Pattern is n² − 1: for n = 5, 5² − 1 = 24."
    },
    {
      question: "Find the next term: 1/2, 1/3, 1/4, ...",
      options: ["1/5", "1/6", "1/8", "1/2"],
      answer: "1/5",
      explanation: "Denominator increases by 1 each term."
    },

    // 21-30: Common Difference and Ratio
    {
      question: "Find the common difference (d): 3, 7, 11, 15",
      options: ["3", "4", "5", "7"],
      answer: "4",
      explanation: "7 − 3 = 4."
    },
    {
      question: "Find the common difference (d): 10, 8, 6, 4",
      options: ["2", "-2", "4", "-4"],
      answer: "-2",
      explanation: "8 − 10 = -2."
    },
    {
      question: "Find the common difference (d): -5, 0, 5, 10",
      options: ["5", "-5", "0", "10"],
      answer: "5",
      explanation: "0 − (-5) = 5."
    },
    {
      question: "Find the common ratio (r): 2, 6, 18, 54",
      options: ["2", "3", "4", "6"],
      answer: "3",
      explanation: "6 ÷ 2 = 3."
    },
    {
      question: "Find the common ratio (r): 100, 10, 1, 0.1",
      options: ["10", "1", "0.1", "-0.1"],
      answer: "0.1",
      explanation: "10 ÷ 100 = 0.1."
    },
    {
      question: "Find the common ratio (r): 4, -8, 16, -32",
      options: ["2", "-2", "4", "-4"],
      answer: "-2",
      explanation: "-8 ÷ 4 = -2."
    },
    {
      question: "Find d if a₁ = 5 and a₂ = 12.",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "d = 12 − 5 = 7."
    },
    {
      question: "Find r if a₁ = 3 and a₂ = 12.",
      options: ["3", "4", "6", "9"],
      answer: "4",
      explanation: "r = 12 ÷ 3 = 4."
    },
    {
      question: "In sequence 7, 7, 7, 7... what is d?",
      options: ["0", "1", "7", "Undefined"],
      answer: "0",
      explanation: "Terms do not change, so d = 0."
    },
    {
      question: "In sequence 5, 5, 5, 5... what is r?",
      options: ["0", "1", "5", "Undefined"],
      answer: "1",
      explanation: "Each term ÷ previous term = 1."
    },

    // 31-40: Basic Formulas (Plug and Play)
    {
      question: "Formula for nth term of an Arithmetic Sequence?",
      options: ["aₙ = a₁ + (n-1)d", "aₙ = a₁ × r^(n-1)", "aₙ = a₁ + nd", "aₙ = n/2(a₁+aₙ)"],
      answer: "aₙ = a₁ + (n-1)d",
      explanation: "Standard arithmetic nth term formula."
    },
    {
      question: "Formula for nth term of a Geometric Sequence?",
      options: ["aₙ = a₁ + (n-1)d", "aₙ = a₁ × r^(n-1)", "aₙ = a₁ × r^n", "aₙ = a₁ / r"],
      answer: "aₙ = a₁ × r^(n-1)",
      explanation: "Standard geometric nth term formula."
    },
    {
      question: "Find the 5th term: 2, 4, 6... (Arithmetic)",
      options: ["8", "10", "12", "14"],
      answer: "10",
      explanation: "Sequence: 2, 4, 6, 8, 10."
    },
    {
      question: "Find the 4th term: 3, 6, 12... (Geometric)",
      options: ["18", "24", "30", "36"],
      answer: "24",
      explanation: "Sequence: 3, 6, 12, 24."
    },
    {
      question: "Calculate a₅ if a₁ = 1, d = 2.",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "a₅ = 1 + 4(2) = 9."
    },
    {
      question: "Calculate a₄ if a₁ = 2, r = 3.",
      options: ["18", "27", "54", "6"],
      answer: "54",
      explanation: "a₄ = 2 × 3³ = 54."
    },
    {
      question: "If a₁ = 10 and d = 5, what is a₃?",
      options: ["15", "20", "25", "30"],
      answer: "20",
      explanation: "Sequence: 10, 15, 20."
    },
    {
      question: "If a₁ = 100 and d = -10, what is a₃?",
      options: ["80", "90", "70", "60"],
      answer: "80",
      explanation: "Sequence: 100, 90, 80."
    },
    {
      question: "Find the 3rd term of a sequence where aₙ = 2n + 1.",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "a₃ = 2(3) + 1 = 7."
    },
    {
      question: "Find the 2nd term where aₙ = n².",
      options: ["1", "2", "4", "8"],
      answer: "4",
      explanation: "a₂ = 2² = 4."
    },

    // 41-50: Simple Word/Logic
    {
      question: "A sequence that has a last term is called:",
      options: ["Infinite", "Finite", "Series", "Limit"],
      answer: "Finite",
      explanation: "It ends, so it is finite."
    },
    {
      question: "A sequence that continues forever is called:",
      options: ["Infinite", "Finite", "Convergent", "Divergent"],
      answer: "Infinite",
      explanation: "It has no last term."
    },
    {
      question: "The sum of the terms of a sequence is called a:",
      options: ["Sequence", "Series", "Mean", "Ratio"],
      answer: "Series",
      explanation: "A series is the sum of the terms of a sequence."
    },
    {
      question: "Which represents an arithmetic sequence?",
      options: ["Growth of bacteria", "Compounding interest", "Stacking blocks in rows", "Half-life"],
      answer: "Stacking blocks in rows",
      explanation: "Usually involves adding a fixed number (e.g., 1 more block per row)."
    },
    {
      question: "Which represents a geometric sequence?",
      options: ["Walking at steady speed", "Cell division", "Adding coins to a jar", "Linear depreciation"],
      answer: "Cell division",
      explanation: "Cells often double, representing a constant ratio."
    },
    {
      question: "What is 'n' in the formula for aₙ?",
      options: ["First term", "Common difference", "Position of the term", "Sum"],
      answer: "Position of the term",
      explanation: "n represents the index or position of the term."
    },
    {
      question: "If terms in an arithmetic sequence increase, d must be:",
      options: ["Positive", "Negative", "Zero", "Undefined"],
      answer: "Positive",
      explanation: "Adding a positive number increases the value."
    },
    {
      question: "If terms in a geometric sequence alternate sign, r is:",
      options: ["Positive", "Negative", "Zero", "Undefined"],
      answer: "Negative",
      explanation: "Multiplying by a negative number flips the sign."
    },
    {
      question: "The first term is usually denoted by:",
      options: ["d", "n", "r", "a₁"],
      answer: "a₁",
      explanation: "Standard notation for the first term."
    },
    {
      question: "The Greek letter Sigma (Σ) stands for:",
      options: ["Difference", "Sum", "Product", "Ratio"],
      answer: "Sum",
      explanation: "Sigma notation indicates summation."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Calculations, Sums, Means)
  // ==========================================
  intermediate: [
    // 1-10: Finding nth Term (Calculation)
    {
      question: "Find the 10th term of: 3, 5, 7, ...",
      options: ["19", "21", "23", "25"],
      answer: "21",
      explanation: "a₁ = 3, d = 2. a₁₀ = 3 + 9(2) = 21."
    },
    {
      question: "Find the 20th term of: 2, 5, 8, ...",
      options: ["58", "59", "60", "62"],
      answer: "59",
      explanation: "a₁ = 2, d = 3. a₂₀ = 2 + 19(3) = 59."
    },
    {
      question: "Find the 15th term of: 50, 45, 40, ...",
      options: ["-10", "-15", "-20", "-25"],
      answer: "-20",
      explanation: "a₁ = 50, d = -5. a₁₅ = 50 + 14(-5) = -20."
    },
    {
      question: "Find the 8th term of geometric: 2, 4, 8, ...",
      options: ["128", "256", "512", "64"],
      answer: "256",
      explanation: "a₈ = 2 × 2⁷ = 256."
    },
    {
      question: "Find the 6th term of geometric: 3, -6, 12, ...",
      options: ["-96", "96", "-192", "192"],
      answer: "-96",
      explanation: "a₁ = 3, r = -2. a₆ = 3 × (-2)⁵ = -96."
    },
    {
      question: "Find the 10th term of: 1/2, 1, 3/2, 2, ...",
      options: ["4", "4.5", "5", "5.5"],
      answer: "5",
      explanation: "Arithmetic with d = 0.5. a₁₀ = 0.5 + 9(0.5) = 5."
    },
    {
      question: "Find a₁₁ if a₁ = 7 and d = 4.",
      options: ["43", "45", "47", "49"],
      answer: "47",
      explanation: "a₁₁ = 7 + 10(4) = 47."
    },
    {
      question: "Find a₇ if a₁ = 100 and r = 0.5.",
      options: ["1.5625", "3.125", "6.25", "12.5"],
      answer: "1.5625",
      explanation: "a₇ = 100 × (0.5)⁶ = 100/64 = 1.5625."
    },
    {
      question: "Find the 101st term of 5, 6, 7, ...",
      options: ["104", "105", "106", "100"],
      answer: "105",
      explanation: "a₁ = 5, d = 1. a₁₀₁ = 5 + 100 = 105."
    },
    {
      question: "Find the 5th term of 0.1, 0.01, 0.001, ...",
      options: ["0.0001", "0.00001", "0.000001", "0.01"],
      answer: "0.00001",
      explanation: "Pattern is powers of 10. 5th term is 10⁻⁵."
    },

    // 11-20: Finding Sum (Sₙ) – Arithmetic
    {
      question: "Sum of first 10 terms: 1, 2, 3, ..., 10",
      options: ["45", "50", "55", "60"],
      answer: "55",
      explanation: "S = n/2(a₁ + aₙ) = 10/2(1 + 10) = 55."
    },
    {
      question: "Sum of first 20 terms of 2, 4, 6, ...",
      options: ["400", "410", "420", "440"],
      answer: "420",
      explanation: "a₁ = 2, d = 2. a₂₀ = 40. S = 20/2(2 + 40) = 420."
    },
    {
      question: "Find S₁₀ for 5, 10, 15, ...",
      options: ["250", "275", "300", "325"],
      answer: "275",
      explanation: "a₁ = 5, d = 5. a₁₀ = 50. S = 10/2(5 + 50) = 275."
    },
    {
      question: "Sum of integers from 1 to 100.",
      options: ["5000", "5050", "5100", "5150"],
      answer: "5050",
      explanation: "S = 100/2(1+100) = 5050."
    },
    {
      question: "Sum of first 5 terms: 10, 7, 4, ...",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "Terms: 10 + 7 + 4 + 1 + (-2) = 20."
    },
    {
      question: "S₁₀ where a₁ = 3, a₁₀ = 39.",
      options: ["200", "210", "220", "230"],
      answer: "210",
      explanation: "S = 10/2(3 + 39) = 210."
    },
    {
      question: "Find sum of first 8 multiples of 3.",
      options: ["100", "108", "112", "120"],
      answer: "108",
      explanation: "3, 6, ..., 24. S = 8/2(3 + 24) = 108."
    },
    {
      question: "Sum of first 5 odd numbers (1, 3, 5, 7, 9).",
      options: ["20", "25", "30", "35"],
      answer: "25",
      explanation: "Formula for sum of first n odd numbers is n². 5² = 25."
    },
    {
      question: "Sum of 10 + 10 + 10 + ... (15 times).",
      options: ["100", "150", "200", "1500"],
      answer: "150",
      explanation: "Repeated addition: 10 × 15 = 150."
    },
    {
      question: "S₁₂ for -5, -1, 3, ...",
      options: ["200", "204", "210", "216"],
      answer: "204",
      explanation: "a₁ = -5, d = 4. a₁₂ = 39. S = 12/2(-5 + 39) = 204."
    },

    // 21-30: Finding Sum (Sₙ) – Geometric
    {
      question: "Sum of first 5 terms: 1, 2, 4, 8, 16",
      options: ["30", "31", "32", "33"],
      answer: "31",
      explanation: "Direct sum: 1 + 2 + 4 + 8 + 16 = 31."
    },
    {
      question: "S₄ for 3, 9, 27, ...",
      options: ["100", "110", "120", "121"],
      answer: "120",
      explanation: "3 + 9 + 27 + 81 = 120."
    },
    {
      question: "Formula for finite geometric sum Sₙ?",
      options: ["a₁(1-rⁿ)/(1-r)", "a₁/(1-r)", "n/2(a₁+aₙ)", "a₁rⁿ"],
      answer: "a₁(1-rⁿ)/(1-r)",
      explanation: "Standard finite geometric series formula."
    },
    {
      question: "S₆ for sequence with a₁ = 1, r = 2.",
      options: ["63", "64", "65", "127"],
      answer: "63",
      explanation: "S₆ = 1(1-2⁶)/(1-2) = 63."
    },
    {
      question: "Sum of 10, 5, 2.5 (3 terms).",
      options: ["15", "17.5", "20", "22.5"],
      answer: "17.5",
      explanation: "10 + 5 + 2.5 = 17.5."
    },
    {
      question: "S₅ for 1, -1, 1, -1, 1.",
      options: ["0", "1", "-1", "5"],
      answer: "1",
      explanation: "Pairs cancel: (1-1)+(1-1)+1 = 1."
    },
    {
      question: "S₃ for 100, 10, 1.",
      options: ["110", "111", "101", "111.1"],
      answer: "111",
      explanation: "100 + 10 + 1 = 111."
    },
    {
      question: "Find S₄: 2, -4, 8, -16.",
      options: ["-10", "10", "-30", "30"],
      answer: "-10",
      explanation: "2 - 4 + 8 - 16 = -10."
    },
    {
      question: "Sum of 2¹ + 2² + 2³ + 2⁴ + 2⁵.",
      options: ["60", "62", "64", "30"],
      answer: "62",
      explanation: "2 + 4 + 8 + 16 + 32 = 62."
    },
    {
      question: "S₄ for 4, 2, 1, 0.5.",
      options: ["7", "7.5", "8", "8.5"],
      answer: "7.5",
      explanation: "4 + 2 + 1 + 0.5 = 7.5."
    },

    // 31-40: Means (Arithmetic/Geometric)
    {
      question: "Arithmetic Mean (AM) of 4 and 10.",
      options: ["6", "7", "8", "14"],
      answer: "7",
      explanation: "AM = (4 + 10) / 2 = 7."
    },
    {
      question: "Arithmetic Mean (AM) of 20 and 30.",
      options: ["22", "25", "28", "26"],
      answer: "25",
      explanation: "AM = (20 + 30) / 2 = 25."
    },
    {
      question: "Geometric Mean (GM) of 4 and 16.",
      options: ["8", "10", "12", "6"],
      answer: "8",
      explanation: "GM = √(4 × 16) = 8."
    },
    {
      question: "Geometric Mean (GM) of 2 and 50.",
      options: ["10", "25", "20", "100"],
      answer: "10",
      explanation: "GM = √(2 × 50) = √100 = 10."
    },
    {
      question: "Insert 1 arithmetic mean between 10 and 20.",
      options: ["12", "14", "15", "16"],
      answer: "15",
      explanation: "Midpoint: (10 + 20)/2 = 15."
    },
    {
      question: "Insert 1 geometric mean between 3 and 27.",
      options: ["6", "9", "12", "15"],
      answer: "9",
      explanation: "GM = √(3 × 27) = √81 = 9."
    },
    {
      question: "AM of 5, 10, 15.",
      options: ["5", "10", "12", "15"],
      answer: "10",
      explanation: "Average = (5 + 10 + 15)/3 = 10."
    },
    {
      question: "Geometric Mean of 1 and 9.",
      options: ["3", "4.5", "5", "6"],
      answer: "3",
      explanation: "GM = √(1 × 9) = 3."
    },
    {
      question: "If AM is 10 and one number is 8, find the other.",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "(8 + x)/2 = 10 → x = 12."
    },
    {
      question: "If GM is 6 and one number is 4, find the other.",
      options: ["8", "9", "10", "12"],
      answer: "9",
      explanation: "√(4x) = 6 → 4x = 36 → x = 9."
    },

    // 41-50: Finding n (number of terms)
    {
      question: "How many terms in 2, 4, ..., 20?",
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: "20 = 2 + (n-1)2 → n = 10."
    },
    {
      question: "How many terms in 5, 10, ..., 50?",
      options: ["9", "10", "11", "5"],
      answer: "10",
      explanation: "50 ÷ 5 = 10 terms."
    },
    {
      question: "How many terms in 1, 3, 5, ..., 19?",
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: "19 = 1 + (n-1)2 → n = 10."
    },
    {
      question: "How many terms in 100, 99, ..., 1?",
      options: ["99", "100", "101", "102"],
      answer: "100",
      explanation: "Counting from 1 to 100 gives 100 terms."
    },
    {
      question: "Find n if aₙ = 25, a₁ = 1, d = 2.",
      options: ["12", "13", "14", "15"],
      answer: "13",
      explanation: "25 = 1 + 2(n−1) → n = 13."
    },
    {
      question: "Find n if aₙ = 81, a₁ = 1, r = 3.",
      options: ["4", "5", "6", "3"],
      answer: "5",
      explanation: "81 = 1 × 3^(n−1) → 3^(n−1) = 81 = 3⁴ → n = 5."
    },
    {
      question: "How many even numbers between 1 and 21?",
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: "Even numbers: 2 to 20 → 10 terms."
    },
    {
      question: "Number of terms in geometric: 2, 4, ..., 64.",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation: "64 = 2 × 2^(n−1) → 2^(n−1) = 32 = 2⁵ → n = 6."
    },
    {
      question: "Which term of 3, 7, 11, ... is 43?",
      options: ["10th", "11th", "12th", "13th"],
      answer: "11th",
      explanation: "43 = 3 + 4(n−1) → n = 11."
    },
    {
      question: "Which term of 2, 6, 18, ... is 162?",
      options: ["4th", "5th", "6th", "7th"],
      answer: "5th",
      explanation: "162 = 2 × 3^(n−1) → 3^(n−1) = 81 = 3⁴ → n = 5."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Infinite Series, Word Problems, AP/GP Skills)
  // ==========================================
  advanced: [
    // 1-10: Infinite Geometric Series (CSE-level)
    {
      question: "Find the sum to infinity of 1, 1/2, 1/4, 1/8, ...",
      options: ["1.5", "2", "2.5", "Infinite"],
      answer: "2",
      explanation: "a₁ = 1, r = 1/2. S∞ = a₁ / (1 − r) = 1 / (1 − 0.5) = 2."
    },
    {
      question: "Find the sum to infinity of 10, 5, 2.5, ...",
      options: ["15", "20", "25", "30"],
      answer: "20",
      explanation: "a₁ = 10, r = 0.5. S∞ = 10 / (1 − 0.5) = 20."
    },
    {
      question: "Find the sum to infinity of 9, 3, 1, ...",
      options: ["12", "13", "13.5", "14"],
      answer: "13.5",
      explanation: "a₁ = 9, r = 1/3. S∞ = 9 / (1 − 1/3) = 9 / (2/3) = 27/2."
    },
    {
      question: "Find the sum to infinity of 4, -2, 1, -1/2, ...",
      options: ["2", "8/3", "3", "4"],
      answer: "8/3",
      explanation: "a₁ = 4, r = -1/2. S∞ = 4 / (1 − (−1/2)) = 4 / 1.5 = 8/3."
    },
    {
      question: "When does an infinite geometric sum have a finite value?",
      options: ["When r > 1", "When |r| < 1", "When r = 1", "Always"],
      answer: "When |r| < 1",
      explanation: "The series converges only if −1 < r < 1."
    },
    {
      question: "Find the sum to infinity: 100, 10, 1, 0.1, ...",
      options: ["110", "111", "111.11...", "120"],
      answer: "111.11...",
      explanation: "a₁ = 100, r = 0.1. S∞ = 100 / (1 − 0.1) = 100/0.9 ≈ 111.11..."
    },
    {
      question: "Find S∞ of 1/3, 1/9, 1/27, ...",
      options: ["1/3", "1/2", "1", "2/3"],
      answer: "1/2",
      explanation: "a₁ = 1/3, r = 1/3. S∞ = (1/3) / (1 − 1/3) = 1/2."
    },
    {
      question: "Does 2, 4, 8, 16, ... have a finite infinite sum?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "r = 2 (>1), so the series diverges."
    },
    {
      question: "Find the sum to infinity: 5, -2.5, 1.25, ...",
      options: ["2", "10/3", "5", "7.5"],
      answer: "10/3",
      explanation: "a₁ = 5, r = -1/2. S∞ = 5 / (1 − (−1/2)) = 5 / 1.5 = 10/3."
    },
    {
      question: "Convert 0.333... to a fraction using geometric series.",
      options: ["1/3", "3/10", "33/100", "1/2"],
      answer: "1/3",
      explanation: "0.333... = 3/10 + 3/100 + ... with a₁ = 3/10, r = 0.1 → S∞ = (3/10)/(1−0.1) = 1/3."
    },

    // 11-20: Word Problems (AP/GP, CSE-style)
    {
      question: "A ball is dropped from 10 m and rebounds to half its height each time. What is the total distance traveled until it stops bouncing?",
      options: ["20 m", "25 m", "30 m", "40 m"],
      answer: "30 m",
      explanation: "Down 10; then up and down 5, 2.5, ... Additional = 2(5 + 2.5 + ...) = 20. Total = 10 + 20 = 30."
    },
    {
      question: "Bacteria double every hour. If there are 5 bacteria at the start, how many after 4 hours?",
      options: ["40", "80", "160", "320"],
      answer: "80",
      explanation: "Sequence: 5, 10, 20, 40, 80 (4 hours later)."
    },
    {
      question: "A car is worth ₱100,000 and depreciates 10% per year. Its value after 2 years is:",
      options: ["₱80,000", "₱81,000", "₱90,000", "₱85,000"],
      answer: "₱81,000",
      explanation: "100,000 × 0.9 × 0.9 = 81,000."
    },
    {
      question: "Logs are stacked: bottom row 20 logs, next row 19, and so on until 10 logs on top. How many logs are there in total?",
      options: ["155", "160", "165", "170"],
      answer: "165",
      explanation: "AP: a₁ = 20, aₙ = 10, d = -1. n = 11. S = 11/2(20+10) = 165."
    },
    {
      question: "A salary starts at ₱20,000 and increases by ₱1,000 each year. What is the total salary over the first 10 years?",
      options: ["₱240,000", "₱245,000", "₱250,000", "₱255,000"],
      answer: "₱245,000",
      explanation: "AP: a₁ = 20, a₁₀ = 29. S₁₀ = 10/2(20+29) = 245."
    },
    {
      question: "A pendulum swings 10 cm on the first swing and 90% of the previous distance each time. What total distance does it travel?",
      options: ["90 cm", "100 cm", "110 cm", "120 cm"],
      answer: "100 cm",
      explanation: "This is a geometric series with a₁ = 10, r = 0.9. S∞ = 10 / (1 − 0.9) = 100."
    },
    {
      question: "An auditorium has 20 seats in row 1, 22 in row 2, 24 in row 3, and so on. How many seats are in row 10?",
      options: ["36", "38", "40", "42"],
      answer: "38",
      explanation: "AP: a₁ = 20, d = 2. a₁₀ = 20 + 9(2) = 38."
    },
    {
      question: "Chain messages: You send a message to 3 people. Each person forwards it to 3 more people. How many people receive it in the 4th round?",
      options: ["27", "81", "243", "9"],
      answer: "81",
      explanation: "Number each round: 3, 9, 27, 81 (3⁴)."
    },
    {
      question: "A saver puts ₱1 on day 1, ₱2 on day 2, ₱3 on day 3, and so on. How much after 30 days?",
      options: ["₱435", "₱450", "₱465", "₱500"],
      answer: "₱465",
      explanation: "Sum of 1 to 30: S = 30/2(1+30) = 465."
    },
    {
      question: "An employee receives a starting bonus of ₱2,000, then increases by ₱500 each year for 6 years. What is the total bonus received?",
      options: ["₱14,500", "₱16,500", "₱19,500", "₱20,000"],
      answer: "₱19,500",
      explanation: "AP: a₁ = 2000, d = 500, n = 6. S = 6/2[2(2000) + 5(500)] = 19,500."
    },

    // 21-30: Parameters from Non-Consecutive Terms
    {
      question: "In an arithmetic sequence, a₃ = 10 and a₇ = 26. Find d.",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "a₇ = a₃ + 4d → 26 = 10 + 4d → d = 4."
    },
    {
      question: "In a geometric sequence, a₂ = 10 and a₅ = 80. Find r.",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "a₅ = a₂r³ → 80 = 10r³ → r³ = 8 → r = 2."
    },
    {
      question: "In an arithmetic sequence, a₄ = 15 and a₉ = 35. Find a₁.",
      options: ["1", "3", "5", "7"],
      answer: "3",
      explanation: "35 − 15 = 20 = 5d → d = 4. Then a₁ = 15 − 3(4) = 3."
    },
    {
      question: "In a geometric sequence, a₃ = 18 and a₅ = 162. Find the (positive) common ratio.",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "a₅ / a₃ = r² = 162/18 = 9 → r = 3."
    },
    {
      question: "If x, x + 3, x + 8 form a geometric sequence, find x.",
      options: ["3", "4", "4.5", "6"],
      answer: "4.5",
      explanation: "(x+3)/x = (x+8)/(x+3) → (x+3)² = x(x+8) → x = 4.5."
    },
    {
      question: "If 2x, 5x + 2, 10x − 2 form an arithmetic sequence, find x.",
      options: ["2", "3", "4", "6"],
      answer: "3",
      explanation: "Equal differences: (5x+2 − 2x) = (10x−2 − (5x+2)) → 3x+2 = 5x−4 → x = 3."
    },
    {
      question: "The sum of the first n odd numbers (1, 3, 5, ...) is:",
      options: ["n", "2n", "n²", "n³"],
      answer: "n²",
      explanation: "Standard result: 1 + 3 + ... + (2n−1) = n²."
    },
    {
      question: "The sum of the first n even numbers (2, 4, 6, ...) is:",
      options: ["n(n+1)", "n²", "n(n−1)", "2n"],
      answer: "n(n+1)",
      explanation: "2 + 4 + ... + 2n = 2(1+2+...+n) = n(n+1)."
    },
    {
      question: "What is the next term of the sequence 1, 3, 4, 7, 11, ...?",
      options: ["15", "16", "17", "18"],
      answer: "18",
      explanation: "Each term after the first two is the sum of the previous two: 4+7=11, 7+11=18."
    },
    {
      question: "Three numbers in arithmetic progression sum to 15. What is the middle number?",
      options: ["3", "5", "7", "9"],
      answer: "5",
      explanation: "(a−d) + a + (a+d) = 3a = 15 → a = 5."
    },

    // 31-40: Mixed Advanced Calculations
    {
      question: "Find x if 2, x, 32 form a geometric sequence.",
      options: ["4", "8", "16", "10"],
      answer: "8",
      explanation: "x is geometric mean: x² = 2 × 32 = 64 → x = 8."
    },
    {
      question: "Find x if 2, x, 32 form an arithmetic sequence.",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "x = (2 + 32)/2 = 17."
    },
    {
      question: "The sum of an infinite geometric sequence is 6 and the first term is 3. Find r.",
      options: ["1/3", "1/2", "2/3", "1/4"],
      answer: "1/2",
      explanation: "S∞ = a₁/(1−r) → 6 = 3/(1−r) → r = 1/2."
    },
    {
      question: "Which is the first term of 2, 9, 16, ... that exceeds 100?",
      options: ["14th", "15th", "16th", "17th"],
      answer: "16th",
      explanation: "AP: aₙ = 2 + 7(n−1) > 100 → n > 15 → 16th term."
    },
    {
      question: "Find the sum of all multiples of 5 between 1 and 100 (inclusive).",
      options: ["1000", "1050", "950", "1100"],
      answer: "1050",
      explanation: "Sequence: 5, 10, ..., 100. n = 20. S = 20/2(5+100) = 1050."
    },
    {
      question: "Find the sum of all odd integers from 1 to 49.",
      options: ["600", "625", "650", "700"],
      answer: "625",
      explanation: "There are 25 odd numbers; sum = 25² = 625."
    },
    {
      question: "What is the common ratio of 1, -1, 1, -1, ...?",
      options: ["1", "-1", "0", "Undefined"],
      answer: "-1",
      explanation: "Each term is multiplied by -1 to get the next."
    },
    {
      question: "Find the sum of 1 − 1/2 + 1/4 − 1/8 + ... to infinity.",
      options: ["1/2", "2/3", "3/4", "1"],
      answer: "2/3",
      explanation: "a₁ = 1, r = -1/2. S∞ = 1 / (1 − (−1/2)) = 2/3."
    },
    {
      question: "A clock strikes 1 time at 1 o'clock, 2 times at 2 o'clock, ..., 12 times at 12 o'clock. How many total strikes in 12 hours?",
      options: ["70", "72", "78", "80"],
      answer: "78",
      explanation: "1 + 2 + ... + 12 = 78."
    },
    {
      question: "How many total strikes in 24 hours for the same clock?",
      options: ["78", "144", "156", "200"],
      answer: "156",
      explanation: "There are two 12-hour cycles: 2 × 78 = 156."
    },

    // 41-50: Additional Advanced AP/GP & n/Sₙ Problems
    {
      question: "How many terms are there in 3, 6, 9, ..., 120?",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "AP: a₁ = 3, d = 3. n = (120 − 3)/3 + 1 = 40."
    },
    {
      question: "How many terms are there in 15, 12, 9, ..., -9?",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "AP: a₁ = 15, d = −3. n = (-9 − 15)/(−3) + 1 = 9."
    },
    {
      question: "The sum of the first n positive integers is 378. Find n.",
      options: ["24", "25", "26", "27"],
      answer: "27",
      explanation: "n(n+1)/2 = 378 → n(n+1) = 756 → n = 27."
    },
    {
      question: "How many terms are in the geometric sequence 3, 6, 12, ..., 384?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "3 × 2^(n−1) = 384 → 2^(n−1) = 128 = 2⁷ → n = 8."
    },
    {
      question: "In 5, 10, 15, ..., the sum of the first n terms is 180. Find n.",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "AP with a₁ = 5, d = 5. Sₙ = 5n(n+1)/2 = 180 → n = 8."
    },
    {
      question: "In an arithmetic sequence, a₁ = 4 and a₁₂ = 37. Find d.",
      options: ["2", "2.5", "3", "3.5"],
      answer: "3",
      explanation: "37 = 4 + 11d → d = 3."
    },
    {
      question: "In a geometric sequence 81, 27, 9, ..., what is the 6th term?",
      options: ["1/3", "1", "3", "9"],
      answer: "1/3",
      explanation: "a₆ = 81 × (1/3)⁵ = 1/3."
    },
    {
      question: "In a geometric sequence 2, 6, 18, ..., what is the sum of the first 5 terms?",
      options: ["200", "210", "220", "242"],
      answer: "242",
      explanation: "Terms: 2 + 6 + 18 + 54 + 162 = 242."
    },
    {
      question: "In an arithmetic sequence a₁ = 12 and d = -2, what is the smallest positive term?",
      options: ["2", "4", "6", "8"],
      answer: "2",
      explanation: "Sequence: 12, 10, 8, 6, 4, 2, 0, ... The last positive term is 2."
    },
    {
      question: "A machine produces 40 items on day 1 and 3 more items each day. How many items are produced in the first 10 days?",
      options: ["500", "515", "525", "535"],
      answer: "535",
      explanation: "AP: a₁ = 40, d = 3, n = 10. S = 10/2(40 + 67) = 535."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – Harder AP/GP, Sigma, Patterns, Word Problems)
  // ==========================================
  expert: [
    // 1-10: nth Term and Position Problems
    {
      question: "An arithmetic sequence has 5th term 19 and 12th term 40. What is the common difference?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "a₅ = a₁ + 4d = 19, a₁₂ = a₁ + 11d = 40 → 7d = 21 → d = 3."
    },
    {
      question: "In an arithmetic sequence, the 5th term is 19 and the common difference is 3. What is the first term?",
      options: ["5", "7", "9", "11"],
      answer: "7",
      explanation: "a₅ = a₁ + 4d → 19 = a₁ + 12 → a₁ = 7."
    },
    {
      question: "An arithmetic sequence has a₁ = 9 and d = 4. Which term is 105?",
      options: ["20th", "22nd", "25th", "30th"],
      answer: "25th",
      explanation: "105 = 9 + (n−1)4 → 4(n−1) = 96 → n−1 = 24 → n = 25."
    },
    {
      question: "Consider 60, 58, 56, ... Which term is the first term less than 40?",
      options: ["10th", "11th", "12th", "13th"],
      answer: "12th",
      explanation: "aₙ = 60 + (n−1)(−2). Solve 60 − 2(n−1) < 40 → n > 11 → 12th term."
    },
    {
      question: "In a geometric sequence, a₁ = 2 and r = 4. What is the 5th term?",
      options: ["128", "256", "512", "1024"],
      answer: "512",
      explanation: "a₅ = 2 × 4⁴ = 2 × 256 = 512."
    },
    {
      question: "In a geometric sequence, a₁ = 243 and r = 1/3. What is the 6th term?",
      options: ["3", "1", "1/3", "0"],
      answer: "1",
      explanation: "a₆ = 243 × (1/3)⁵ = 1."
    },
    {
      question: "How many terms are in the geometric sequence 3, 6, 12, ..., 192?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "3 × 2^(n−1) = 192 → 2^(n−1) = 64 = 2⁶ → n = 7."
    },
    {
      question: "In a geometric sequence, a₁ = 1/8 and r = 2. Which term is 8?",
      options: ["5th", "6th", "7th", "8th"],
      answer: "7th",
      explanation: "1/8 × 2^(n−1) = 8 → 2^(n−1) = 64 = 2⁶ → n = 7."
    },
    {
      question: "For a sequence defined by aₙ = 4n − 3, what is a₁₅?",
      options: ["53", "55", "57", "59"],
      answer: "57",
      explanation: "a₁₅ = 4(15) − 3 = 57."
    },
    {
      question: "For a sequence defined by aₙ = 2n², what is the difference a₄ − a₃?",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "a₄ = 32, a₃ = 18, a₄ − a₃ = 14."
    },

    // 11-20: Sums and Sₙ Applications
    {
      question: "Find the sum of the first 15 terms of 4, 7, 10, ...",
      options: ["345", "360", "375", "390"],
      answer: "375",
      explanation: "a₁ = 4, d = 3, n = 15. S = 15/2(4 + 46) = 375."
    },
    {
      question: "In an arithmetic sequence, a₁ = 12 and d = 5. What is S₁₀?",
      options: ["320", "335", "345", "350"],
      answer: "345",
      explanation: "a₁₀ = 12 + 9(5) = 57. S = 10/2(12 + 57) = 345."
    },
    {
      question: "In the sequence 7, 10, 13, ..., the sum of the first n terms is 140. Find n.",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "a₁ = 7, d = 3. Sₙ = n/2[2(7) + (n−1)3] = 140 → n = 8."
    },
    {
      question: "Find the sum of the first 20 even numbers.",
      options: ["400", "410", "420", "440"],
      answer: "420",
      explanation: "Even numbers: 2 to 40. S = 20/2(2 + 40) = 420."
    },
    {
      question: "Find the sum of integers from 1 to 50.",
      options: ["1225", "1250", "1275", "1300"],
      answer: "1275",
      explanation: "S = 50/2(1 + 50) = 1275."
    },
    {
      question: "Find the sum of integers from 30 to 80 inclusive.",
      options: ["2700", "2750", "2805", "2850"],
      answer: "2805",
      explanation: "AP: a₁ = 30, aₙ = 80, n = 51. S = 51/2(30 + 80) = 2805."
    },
    {
      question: "A geometric sequence has a₁ = 5 and r = 2. Find the sum of the first 6 terms.",
      options: ["300", "305", "310", "315"],
      answer: "315",
      explanation: "S₆ = 5(1 − 2⁶)/(1 − 2) = 5(63) = 315."
    },
    {
      question: "In the geometric sequence 16, 8, 4, 2, 1, find the sum of the first 5 terms.",
      options: ["30", "31", "32", "33"],
      answer: "31",
      explanation: "16 + 8 + 4 + 2 + 1 = 31."
    },
    {
      question: "The sum of the first n natural numbers is 210. Find n.",
      options: ["14", "18", "20", "21"],
      answer: "20",
      explanation: "n(n+1)/2 = 210 → n(n+1) = 420 → n = 20."
    },
    {
      question: "An arithmetic sequence has 10 terms, first term 8, and sum 260. What is the last term?",
      options: ["40", "42", "44", "46"],
      answer: "44",
      explanation: "260 = 10(a₁ + aₙ)/2 → a₁ + aₙ = 52 → aₙ = 44."
    },

    // 21-30: Sigma (Summation) Basics
    {
      question: "Evaluate Σ (k + 2) for k = 1 to 4.",
      options: ["14", "16", "18", "20"],
      answer: "18",
      explanation: "Terms: 3 + 4 + 5 + 6 = 18."
    },
    {
      question: "Evaluate Σ 3n for n = 1 to 6.",
      options: ["54", "60", "63", "66"],
      answer: "63",
      explanation: "3(1 + 2 + ... + 6) = 3(21) = 63."
    },
    {
      question: "Evaluate Σ n² for n = 1 to 4.",
      options: ["26", "28", "30", "32"],
      answer: "30",
      explanation: "1 + 4 + 9 + 16 = 30."
    },
    {
      question: "Evaluate Σ n for n = 2 to 5.",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "2 + 3 + 4 + 5 = 14."
    },
    {
      question: "Evaluate Σ (2n² + 1) for n = 1 to 3.",
      options: ["25", "27", "29", "31"],
      answer: "31",
      explanation: "For n = 1,2,3: 3 + 9 + 19 = 31."
    },
    {
      question: "Which expression equals Σ i for i = 1 to 5?",
      options: ["1+2+3+4+5", "5i", "5²", "1+5"],
      answer: "1+2+3+4+5",
      explanation: "Expanded form of the summation."
    },
    {
      question: "The symbol Σ is used to represent:",
      options: ["Product", "Difference", "Sum of terms", "Square root"],
      answer: "Sum of terms",
      explanation: "Sigma notation is used for summation."
    },
    {
      question: "If Σ k for k = 1 to n is 45, what is n?",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "n(n+1)/2 = 45 → n = 9."
    },
    {
      question: "Evaluate Σ 5 for n = 1 to 4.",
      options: ["5", "10", "15", "20"],
      answer: "20",
      explanation: "Constant term: 5 × 4 = 20."
    },
    {
      question: "Evaluate Σ (n + 4) for n = 1 to 3.",
      options: ["15", "16", "18", "20"],
      answer: "18",
      explanation: "Terms: 5 + 6 + 7 = 18."
    },

    // 31-40: Pattern Recognition
    {
      question: "Find the next term: 2, 5, 10, 17, 26, ...",
      options: ["34", "35", "37", "39"],
      answer: "37",
      explanation: "Differences: 3, 5, 7, 9 → next difference = 11 → 26 + 11 = 37."
    },
    {
      question: "Find the next term: 1, 4, 9, 16, 25, ...",
      options: ["30", "32", "34", "36"],
      answer: "36",
      explanation: "Perfect squares: 1², 2², 3², 4², 5², next is 6² = 36."
    },
    {
      question: "Find the next term: 2, 6, 12, 20, 30, ...",
      options: ["38", "40", "42", "44"],
      answer: "42",
      explanation: "Differences: 4, 6, 8, 10 → next difference = 12 → 30 + 12 = 42."
    },
    {
      question: "Find the next term: 3, 9, 27, 81, ...",
      options: ["162", "180", "243", "300"],
      answer: "243",
      explanation: "Geometric with r = 3. 81 × 3 = 243."
    },
    {
      question: "Find the next term: 1, 2, 4, 7, 11, ...",
      options: ["14", "15", "16", "17"],
      answer: "16",
      explanation: "Differences: 1, 2, 3, 4 → next difference = 5 → 11 + 5 = 16."
    },
    {
      question: "Find the next term: 5, 10, 20, 40, ...",
      options: ["60", "70", "80", "100"],
      answer: "80",
      explanation: "Each term is multiplied by 2."
    },
    {
      question: "In 100, 90, 81, 72.9, ... each term is obtained by multiplying the previous by:",
      options: ["0.1", "0.9", "1.1", "9"],
      answer: "0.9",
      explanation: "90 = 100 × 0.9, 81 = 90 × 0.9, etc."
    },
    {
      question: "What is the 7th term of 2, 4, 8, 16, ...?",
      options: ["64", "96", "128", "256"],
      answer: "128",
      explanation: "a₁ = 2, r = 2. a₇ = 2 × 2⁶ = 128."
    },
    {
      question: "What is the common difference in 10, 7, 4, 1, ...?",
      options: ["3", "-3", "-1", "-2"],
      answer: "-3",
      explanation: "7 − 10 = -3."
    },
    {
      question: "The sequence 1, 3, 6, 10, 15, ... is known as:",
      options: ["Prime numbers", "Square numbers", "Triangular numbers", "Fibonacci numbers"],
      answer: "Triangular numbers",
      explanation: "These are sums of consecutive integers: 1, 1+2, 1+2+3, etc."
    },

    // 41-50: Mixed Word Problems (Advanced but CSE-level)
    {
      question: "Cards are arranged in piles. The first pile has 4 cards, the second has 7, the third has 10, and so on, increasing by 3. How many cards in the 10th pile?",
      options: ["27", "28", "31", "34"],
      answer: "31",
      explanation: "AP: a₁ = 4, d = 3. a₁₀ = 4 + 9(3) = 31."
    },
    {
      question: "A person walks 2 km on day 1, 3 km on day 2, 4 km on day 3, increasing by 1 km each day. How far in total after 12 days?",
      options: ["72 km", "78 km", "84 km", "90 km"],
      answer: "90 km",
      explanation: "AP: a₁ = 2, a₁₂ = 13. S = 12/2(2 + 13) = 90."
    },
    {
      question: "A product costs ₱120 in January and increases by ₱5 each month. What is the price in June?",
      options: ["₱135", "₱140", "₱145", "₱150"],
      answer: "₱145",
      explanation: "June is the 6th month: price = 120 + 5(5) = 145."
    },
    {
      question: "A student reads 6 pages on Monday, 10 on Tuesday, 14 on Wednesday, increasing by 4 pages each day. How many pages does the student read on the 7th day?",
      options: ["22", "26", "30", "34"],
      answer: "30",
      explanation: "AP: a₁ = 6, d = 4. a₇ = 6 + 6(4) = 30."
    },
    {
      question: "Rows of chairs: row 1 has 8 chairs, row 2 has 11, row 3 has 14, increasing by 3. How many chairs in row 15?",
      options: ["44", "47", "50", "53"],
      answer: "50",
      explanation: "AP: a₁ = 8, d = 3. a₁₅ = 8 + 14(3) = 50."
    },
    {
      question: "The sum of three consecutive terms in an arithmetic sequence is 48. What is the middle term?",
      options: ["12", "14", "16", "18"],
      answer: "16",
      explanation: "(a−d)+a+(a+d) = 3a = 48 → a = 16."
    },
    {
      question: "Three consecutive terms in a geometric sequence are 3, x, 27. Find x.",
      options: ["6", "9", "12", "18"],
      answer: "9",
      explanation: "x/3 = 27/x → x² = 81 → x = 9 (positive)."
    },
    {
      question: "In an arithmetic sequence, a₁ = 2 and a₈ = 30. What is the sum of the first 8 terms?",
      options: ["112", "120", "124", "128"],
      answer: "128",
      explanation: "S₈ = 8(a₁ + a₈)/2 = 4(32) = 128."
    },
    {
      question: "In a geometric sequence, a₁ = 10 and r = 0.8. What is the approximate sum of the first 4 terms?",
      options: ["26.0", "27.5", "29.5", "32.0"],
      answer: "29.5",
      explanation: "Terms: 10, 8, 6.4, 5.12 → sum ≈ 29.52 ≈ 29.5."
    },
    {
      question: "A review center charges ₱500 in the first month, ₱550 in the second, ₱600 in the third, increasing by ₱50 monthly. How much is paid in total for the first 6 months?",
      options: ["₱3,250", "₱3,500", "₱3,750", "₱4,000"],
      answer: "₱3,750",
      explanation: "AP: a₁ = 500, d = 50, n = 6. S = 6/2(500 + 750) = 3(1,250) = 3,750."
    }
  ]
};

