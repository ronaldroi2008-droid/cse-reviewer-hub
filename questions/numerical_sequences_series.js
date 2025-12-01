// questions/sequences_series.js
// ==========================================
// NUMERICAL – SEQUENCES & SERIES (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
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
      explanation: "Terms are squares of integers (1^2, 2^2, ...)."
    },
    {
      question: "Identify the sequence: 1, 8, 27, 64, ...",
      options: ["Arithmetic", "Geometric", "Square Numbers", "Cube Numbers"],
      answer: "Cube Numbers",
      explanation: "Terms are cubes of integers (1^3, 2^3, ...)."
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
      explanation: "Add 3: 14 + 3 = 17."
    },
    {
      question: "Find the next term: 3, 9, 27, ...",
      options: ["54", "81", "30", "243"],
      answer: "81",
      explanation: "Multiply by 3: 27 * 3 = 81."
    },
    {
      question: "Find the next term: 20, 15, 10, ...",
      options: ["0", "5", "-5", "2"],
      answer: "5",
      explanation: "Subtract 5: 10 - 5 = 5."
    },
    {
      question: "Find the next term: 1, -1, 1, -1, ...",
      options: ["0", "1", "-1", "2"],
      answer: "1",
      explanation: "Pattern oscillates. Next is 1."
    },
    {
      question: "Find the next term: 2, 4, 8, 16, ...",
      options: ["20", "24", "30", "32"],
      answer: "32",
      explanation: "Multiply by 2: 16 * 2 = 32."
    },
    {
      question: "Find the next term: 100, 50, 25, ...",
      options: ["10", "12.5", "15", "5"],
      answer: "12.5",
      explanation: "Divide by 2: 25 / 2 = 12.5."
    },
    {
      question: "Find the next term: 1, 3, 6, 10, ... (Triangular numbers)",
      options: ["12", "14", "15", "16"],
      answer: "15",
      explanation: "Add increasing integers: +2, +3, +4. Next is +5. 10+5=15."
    },
    {
      question: "Find the next term: 11, 22, 33, ...",
      options: ["40", "44", "45", "55"],
      answer: "44",
      explanation: "Add 11: 33 + 11 = 44."
    },
    {
      question: "Find the next term: 0, 3, 8, 15, ...",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "Sequence is n^2 - 1. 5^2 - 1 = 24."
    },
    {
      question: "Find the next term: 1/2, 1/3, 1/4, ...",
      options: ["1/5", "1/6", "1/8", "1/2"],
      answer: "1/5",
      explanation: "Denominator increases by 1."
    },

    // 21-30: Common Difference and Ratio
    {
      question: "Find the common difference (d): 3, 7, 11, 15",
      options: ["3", "4", "5", "7"],
      answer: "4",
      explanation: "7 - 3 = 4."
    },
    {
      question: "Find the common difference (d): 10, 8, 6, 4",
      options: ["2", "-2", "4", "-4"],
      answer: "-2",
      explanation: "8 - 10 = -2."
    },
    {
      question: "Find the common difference (d): -5, 0, 5, 10",
      options: ["5", "-5", "0", "10"],
      answer: "5",
      explanation: "0 - (-5) = 5."
    },
    {
      question: "Find the common ratio (r): 2, 6, 18, 54",
      options: ["2", "3", "4", "6"],
      answer: "3",
      explanation: "6 / 2 = 3."
    },
    {
      question: "Find the common ratio (r): 100, 10, 1, 0.1",
      options: ["10", "1", "0.1", "-0.1"],
      answer: "0.1",
      explanation: "10 / 100 = 0.1."
    },
    {
      question: "Find the common ratio (r): 4, -8, 16, -32",
      options: ["2", "-2", "4", "-4"],
      answer: "-2",
      explanation: "-8 / 4 = -2."
    },
    {
      question: "Find 'd' if a1=5 and a2=12.",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "12 - 5 = 7."
    },
    {
      question: "Find 'r' if a1=3 and a2=12.",
      options: ["3", "4", "6", "9"],
      answer: "4",
      explanation: "12 / 3 = 4."
    },
    {
      question: "In sequence 7, 7, 7, 7... what is d?",
      options: ["0", "1", "7", "Undefined"],
      answer: "0",
      explanation: "Terms do not change, difference is 0."
    },
    {
      question: "In sequence 5, 5, 5, 5... what is r?",
      options: ["0", "1", "5", "Undefined"],
      answer: "1",
      explanation: "5 / 5 = 1."
    },

    // 31-40: Basic Formulas (Plug and Play)
    {
      question: "Formula for nth term of Arithmetic Sequence?",
      options: ["an = a1 + (n-1)d", "an = a1 * r^(n-1)", "an = a1 + nd", "an = n/2(a1+an)"],
      answer: "an = a1 + (n-1)d",
      explanation: "Standard arithmetic sequence formula."
    },
    {
      question: "Formula for nth term of Geometric Sequence?",
      options: ["an = a1 + (n-1)d", "an = a1 * r^(n-1)", "an = a1 * r^n", "an = a1 / r"],
      answer: "an = a1 * r^(n-1)",
      explanation: "Standard geometric sequence formula."
    },
    {
      question: "Find the 5th term: 2, 4, 6... (Arithmetic)",
      options: ["8", "10", "12", "14"],
      answer: "10",
      explanation: "2, 4, 6, 8, 10."
    },
    {
      question: "Find the 4th term: 3, 6, 12... (Geometric)",
      options: ["18", "24", "30", "36"],
      answer: "24",
      explanation: "3, 6, 12, 24."
    },
    {
      question: "Calculate a5 if a1=1, d=2.",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "1 + 4(2) = 9."
    },
    {
      question: "Calculate a4 if a1=2, r=3.",
      options: ["18", "27", "54", "6"],
      answer: "54",
      explanation: "2 * 3^3 = 2 * 27 = 54."
    },
    {
      question: "If a1=10 and d=5, what is a3?",
      options: ["15", "20", "25", "30"],
      answer: "20",
      explanation: "10, 15, 20."
    },
    {
      question: "If a1=100 and d=-10, what is a3?",
      options: ["80", "90", "70", "60"],
      answer: "80",
      explanation: "100, 90, 80."
    },
    {
      question: "Find the 3rd term of a sequence where an = 2n + 1.",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "2(3) + 1 = 7."
    },
    {
      question: "Find the 2nd term where an = n^2.",
      options: ["1", "2", "4", "8"],
      answer: "4",
      explanation: "2^2 = 4."
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
      explanation: "A series is the indicated sum of a sequence."
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
      explanation: "Cells usually double, representing a ratio."
    },
    {
      question: "What is 'n' in the formula?",
      options: ["First term", "Common difference", "Position of the term", "Sum"],
      answer: "Position of the term",
      explanation: "n represents the index or position."
    },
    {
      question: "If terms increase, d must be:",
      options: ["Positive", "Negative", "Zero", "Undefined"],
      answer: "Positive",
      explanation: "Adding a positive number increases the value."
    },
    {
      question: "If terms oscillate positive/negative, r is:",
      options: ["Positive", "Negative", "Zero", "Undefined"],
      answer: "Negative",
      explanation: "Multiplying by a negative number flips the sign."
    },
    {
      question: "The first term is denoted by:",
      options: ["d", "n", "r", "a1"],
      answer: "a1",
      explanation: "Standard notation for the first term."
    },
    {
      question: "The greek letter Sigma (Σ) stands for:",
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
      explanation: "a10 = 3 + (9)(2) = 3 + 18 = 21."
    },
    {
      question: "Find the 20th term of: 2, 5, 8, ...",
      options: ["58", "59", "60", "62"],
      answer: "59",
      explanation: "a20 = 2 + (19)(3) = 2 + 57 = 59."
    },
    {
      question: "Find the 15th term of: 50, 45, 40, ...",
      options: ["-10", "-15", "-20", "-25"],
      answer: "-20",
      explanation: "a15 = 50 + (14)(-5) = 50 - 70 = -20."
    },
    {
      question: "Find the 8th term of geometric: 2, 4, 8, ...",
      options: ["128", "256", "512", "64"],
      answer: "256",
      explanation: "a8 = 2 * 2^7 = 2 * 128 = 256."
    },
    {
      question: "Find the 6th term of geometric: 3, -6, 12, ...",
      options: ["-96", "96", "-192", "192"],
      answer: "-96",
      explanation: "a6 = 3 * (-2)^5 = 3 * (-32) = -96."
    },
    {
      question: "Find the 10th term of: 1/2, 1, 3/2, 2, ...",
      options: ["4", "4.5", "5", "5.5"],
      answer: "5",
      explanation: "d = 0.5. a10 = 0.5 + 9(0.5) = 5."
    },
    {
      question: "Find a11 if a1 = 7 and d = 4.",
      options: ["43", "45", "47", "49"],
      answer: "47",
      explanation: "7 + 10(4) = 47."
    },
    {
      question: "Find a7 if a1 = 100 and r = 0.5.",
      options: ["1.5625", "3.125", "6.25", "12.5"],
      answer: "1.5625",
      explanation: "100 * (0.5)^6 = 100/64 = 1.5625."
    },
    {
      question: "Find the 101st term of 5, 6, 7...",
      options: ["104", "105", "106", "100"],
      answer: "105",
      explanation: "a101 = 5 + 100(1) = 105."
    },
    {
      question: "Find the 5th term of 0.1, 0.01, 0.001...",
      options: ["0.0001", "0.00001", "0.000001", "0.01"],
      answer: "0.00001",
      explanation: "Power of 10 decreases. 5th term is 10^-5."
    },

    // 11-20: Finding Sum (Sn) - Arithmetic
    {
      question: "Sum of first 10 terms: 1, 2, 3...10",
      options: ["45", "50", "55", "60"],
      answer: "55",
      explanation: "S = n/2(a1+an) = 10/2(1+10) = 5(11) = 55."
    },
    {
      question: "Sum of first 20 terms of 2, 4, 6...",
      options: ["400", "410", "420", "440"],
      answer: "420",
      explanation: "S = 20/2(2*2 + 19*2) = 10(4+38) = 420."
    },
    {
      question: "Find S10 for 5, 10, 15...",
      options: ["250", "275", "300", "325"],
      answer: "275",
      explanation: "S = 10/2(2*5 + 9*5) = 5(10+45) = 5(55) = 275."
    },
    {
      question: "Sum of integers from 1 to 100.",
      options: ["5000", "5050", "5100", "5150"],
      answer: "5050",
      explanation: "100/2(1+100) = 50(101) = 5050."
    },
    {
      question: "Sum of first 5 terms: 10, 7, 4...",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "10+7+4+1+(-2) = 20."
    },
    {
      question: "S10 where a1=3, a10=39.",
      options: ["200", "210", "220", "230"],
      answer: "210",
      explanation: "10/2(3+39) = 5(42) = 210."
    },
    {
      question: "Find sum of first 8 multiples of 3.",
      options: ["100", "108", "112", "120"],
      answer: "108",
      explanation: "3, 6... 24. S = 8/2(3+24) = 4(27) = 108."
    },
    {
      question: "Sum of first 5 odd numbers (1, 3, 5, 7, 9).",
      options: ["20", "25", "30", "35"],
      answer: "25",
      explanation: "Formula n^2. 5^2 = 25."
    },
    {
      question: "Sum of 10 + 10 + 10 ... (15 times).",
      options: ["100", "150", "200", "1500"],
      answer: "150",
      explanation: "10 * 15 = 150."
    },
    {
      question: "S12 for -5, -1, 3...",
      options: ["200", "204", "210", "216"],
      answer: "204",
      explanation: "d=4. S=12/2(2(-5)+11(4)) = 6(-10+44) = 6(34) = 204."
    },

    // 21-30: Finding Sum (Sn) - Geometric
    {
      question: "Sum of first 5 terms: 1, 2, 4, 8, 16",
      options: ["30", "31", "32", "33"],
      answer: "31",
      explanation: "Sum = 1+2+4+8+16 = 31."
    },
    {
      question: "S4 for 3, 9, 27...",
      options: ["100", "110", "120", "121"],
      answer: "120",
      explanation: "3 + 9 + 27 + 81 = 120."
    },
    {
      question: "Formula for Geometric Sum (finite)?",
      options: ["a1(1-r^n)/(1-r)", "a1/(1-r)", "n/2(a1+an)", "a1*r^n"],
      answer: "a1(1-r^n)/(1-r)",
      explanation: "Standard finite geometric series formula."
    },
    {
      question: "S6 for sequence with r=2, a1=1.",
      options: ["63", "64", "65", "127"],
      answer: "63",
      explanation: "1(1-2^6)/(1-2) = (1-64)/(-1) = 63."
    },
    {
      question: "Sum of 10, 5, 2.5 (3 terms).",
      options: ["15", "17.5", "20", "22.5"],
      answer: "17.5",
      explanation: "10 + 5 + 2.5 = 17.5."
    },
    {
      question: "S5 for 1, -1, 1, -1, 1.",
      options: ["0", "1", "-1", "5"],
      answer: "1",
      explanation: "Terms cancel out leaving the first term."
    },
    {
      question: "S3 for 100, 10, 1.",
      options: ["110", "111", "101", "111.1"],
      answer: "111",
      explanation: "Direct addition."
    },
    {
      question: "Find S4: 2, -4, 8, -16.",
      options: ["-10", "10", "-30", "30"],
      answer: "-10",
      explanation: "2 - 4 + 8 - 16 = -10."
    },
    {
      question: "Sum of powers of 2 from 2^1 to 2^5.",
      options: ["60", "62", "64", "30"],
      answer: "62",
      explanation: "2+4+8+16+32 = 62."
    },
    {
      question: "S4 for 4, 2, 1, 0.5.",
      options: ["7", "7.5", "8", "8.5"],
      answer: "7.5",
      explanation: "4 + 2 + 1 + 0.5 = 7.5."
    },

    // 31-40: Means (Arithmetic/Geometric)
    {
      question: "Arithmetic Mean of 4 and 10.",
      options: ["6", "7", "8", "14"],
      answer: "7",
      explanation: "(4+10)/2 = 7."
    },
    {
      question: "Arithmetic Mean of 20 and 30.",
      options: ["22", "25", "28", "26"],
      answer: "25",
      explanation: "(20+30)/2 = 25."
    },
    {
      question: "Geometric Mean of 4 and 16.",
      options: ["8", "10", "12", "6"],
      answer: "8",
      explanation: "Sqrt(4 * 16) = Sqrt(64) = 8."
    },
    {
      question: "Geometric Mean of 2 and 50.",
      options: ["10", "25", "20", "100"],
      answer: "10",
      explanation: "Sqrt(2 * 50) = Sqrt(100) = 10."
    },
    {
      question: "Insert 1 arithmetic mean between 10 and 20.",
      options: ["12", "14", "15", "16"],
      answer: "15",
      explanation: "Midpoint is 15."
    },
    {
      question: "Insert 1 geometric mean between 3 and 27.",
      options: ["6", "9", "12", "15"],
      answer: "9",
      explanation: "Sqrt(3*27) = Sqrt(81) = 9."
    },
    {
      question: "AM of 5, 10, 15.",
      options: ["5", "10", "12", "15"],
      answer: "10",
      explanation: "Middle term of arithmetic sequence."
    },
    {
      question: "Geometric Mean of 1 and 9.",
      options: ["3", "4.5", "5", "6"],
      answer: "3",
      explanation: "Sqrt(9) = 3."
    },
    {
      question: "If AM is 10 and one number is 8, find the other.",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "(8+x)/2 = 10 -> 8+x=20 -> x=12."
    },
    {
      question: "If GM is 6 and one number is 4, find the other.",
      options: ["8", "9", "10", "12"],
      answer: "9",
      explanation: "Sqrt(4x) = 6 -> 4x = 36 -> x = 9."
    },

    // 41-50: Finding n (number of terms)
    {
      question: "How many terms in 2, 4, ... 20?",
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: "20 = 2 + (n-1)2 -> 18 = 2(n-1) -> 9 = n-1 -> n=10."
    },
    {
      question: "How many terms in 5, 10, ... 50?",
      options: ["9", "10", "11", "5"],
      answer: "10",
      explanation: "50/5 = 10."
    },
    {
      question: "How many terms in 1, 3, 5, ... 19?",
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: "19 = 1 + (n-1)2 -> 18 = 2(n-1) -> n=10."
    },
    {
      question: "How many terms in 100, 99, ... 1?",
      options: ["99", "100", "101", "102"],
      answer: "100",
      explanation: "It's simply counting 1 to 100."
    },
    {
      question: "Find n if an=25, a1=1, d=2.",
      options: ["12", "13", "14", "15"],
      answer: "13",
      explanation: "25 = 1 + 2(n-1) -> 24 = 2(n-1) -> 12 = n-1 -> n=13."
    },
    {
      question: "Find n if an=81, a1=1, r=3.",
      options: ["4", "5", "6", "3"],
      answer: "5",
      explanation: "81 = 1 * 3^(n-1) -> 3^4 = 3^(n-1) -> n-1=4 -> n=5."
    },
    {
      question: "How many even numbers between 1 and 21?",
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: "2, 4, ... 20. 10 terms."
    },
    {
      question: "Number of terms in geometric: 2, 4, ... 64.",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation: "64 = 2 * 2^(n-1) -> 32 = 2^(n-1) -> 2^5 = 2^(n-1) -> n=6."
    },
    {
      question: "Which term of 3, 7, 11... is 43?",
      options: ["10th", "11th", "12th", "13th"],
      answer: "11th",
      explanation: "43 = 3 + 4(n-1) -> 40 = 4(n-1) -> 10 = n-1 -> n=11."
    },
    {
      question: "Which term of 2, 6, 18... is 162?",
      options: ["4th", "5th", "6th", "7th"],
      answer: "5th",
      explanation: "162 = 2 * 3^(n-1) -> 81 = 3^(n-1) -> 3^4 = 3^(n-1) -> n=5."
    }
  ],

 // ==========================================
// LEVEL 3: ADVANCED (50 items – Infinite Series, Word Problems, Harmonic)
// ==========================================
advanced: [
  // 1-10: Infinite Geometric Series
  {
    question: "Find the sum to infinity: 1, 1/2, 1/4...",
    options: ["1.5", "2", "2.5", "Infinite"],
    answer: "2",
    explanation: "S = a1/(1-r) = 1/(1-0.5) = 2."
  },
  {
    question: "Sum to infinity: 10, 5, 2.5...",
    options: ["15", "20", "25", "30"],
    answer: "20",
    explanation: "10/(1-0.5) = 20."
  },
  {
    question: "Sum to infinity: 9, 3, 1...",
    options: ["12", "13", "13.5", "14"],
    answer: "13.5",
    explanation: "9/(1-1/3) = 9/(2/3) = 27/2 = 13.5."
  },
  {
    question: "Sum to infinity: 4, -2, 1...",
    options: ["2", "2.67", "3", "8/3"],
    answer: "8/3",
    explanation: "4/(1 - (-0.5)) = 4/1.5 = 4/(3/2) = 8/3."
  },
  {
    question: "When does an infinite geometric sum exist?",
    options: ["When r > 1", "When |r| < 1", "When r = 1", "Always"],
    answer: "When |r| < 1",
    explanation: "The series must converge, which requires -1 < r < 1."
  },
  {
    question: "Sum to infinity: 100, 10, 1...",
    options: ["110", "111", "111.11...", "112"],
    answer: "111.11...",
    explanation: "100/(1-0.1) = 100/0.9 = 1000/9 = 111.11..."
  },
  {
    question: "Find S_inf of 1/3, 1/9, 1/27...",
    options: ["1/3", "1/2", "1", "2/3"],
    answer: "1/2",
    explanation: "(1/3) / (1 - 1/3) = (1/3) / (2/3) = 1/2."
  },
  {
    question: "Does 2, 4, 8... have an infinite sum?",
    options: ["Yes", "No"],
    answer: "No",
    explanation: "r=2, which is > 1. It diverges."
  },
  {
    question: "Sum to infinity: 5, -2.5, 1.25...",
    options: ["3.33", "5", "10/3", "2.5"],
    answer: "10/3",
    explanation: "5 / (1 - (-0.5)) = 5 / 1.5 = 10/3."
  },
  {
    question: "Convert 0.333... to a fraction using series.",
    options: ["1/3", "3/10", "33/100", "1/2"],
    answer: "1/3",
    explanation: "3/10 + 3/100... S = (3/10)/(1-0.1) = (3/10)/(0.9) = 1/3."
  },

  // 11-20: Harmonic Sequences
  {
    question: "The reciprocals of an Arithmetic sequence form a:",
    options: ["Geometric Sequence", "Harmonic Sequence", "Fibonacci Sequence", "Series"],
    answer: "Harmonic Sequence",
    explanation: "Definition of Harmonic Sequence."
  },
  {
    question: "Find the 3rd term of Harmonic if Arith is 2, 4, 6...",
    options: ["1/4", "1/6", "1/8", "6"],
    answer: "1/6",
    explanation: "Corresponding arithmetic term is 6. Harmonic is 1/6."
  },
  {
    question: "If 1/2, 1/5, 1/8... is Harmonic, what is the next term?",
    options: ["1/10", "1/11", "1/12", "1/9"],
    answer: "1/11",
    explanation: "Arith: 2, 5, 8. d=3. Next is 11. Harmonic is 1/11."
  },
  {
    question: "Is there a general formula for Sn of Harmonic Sequence?",
    options: ["Yes, simple", "No, complex", "Same as Arithmetic", "Same as Geometric"],
    answer: "No, complex",
    explanation: "No simple closed form like Arithmetic or Geometric exists."
  },
  {
    question: "Find harmonic mean of 3 and 6.",
    options: ["4", "4.5", "5", "5.5"],
    answer: "4",
    explanation: "HM = 2ab/(a+b) = 2(18)/9 = 4."
  },
  {
    question: "Find harmonic mean of 2 and 4.",
    options: ["2.67", "3", "3.5", "2.5"],
    answer: "2.67",
    explanation: "2(8)/6 = 16/6 = 8/3 = 2.67."
  },
  {
    question: "Sequence 1, 1/2, 1/3, 1/4 is:",
    options: ["Arithmetic", "Geometric", "Harmonic", "Random"],
    answer: "Harmonic",
    explanation: "Reciprocals 1, 2, 3, 4 are arithmetic."
  },
  {
    question: "In Harmonic seq, if a1=1/2, a2=1/4, find a3.",
    options: ["1/6", "1/8", "1/5", "1/7"],
    answer: "1/6",
    explanation: "Arith: 2, 4. Next 6. Harmonic 1/6."
  },
  {
    question: "HM of a and b is:",
    options: ["(a+b)/2", "sqrt(ab)", "2ab/(a+b)", "ab/(a+b)"],
    answer: "2ab/(a+b)",
    explanation: "Standard formula for Harmonic Mean."
  },
  {
    question: "What comes next: 1/10, 1/13, 1/16...",
    options: ["1/18", "1/19", "1/20", "1/21"],
    answer: "1/19",
    explanation: "Arith: 10, 13, 16 (+3). Next 19. Harm 1/19."
  },

  // 21-30: Word Problems (Growth/Decay/Motion)
  {
    question: "A ball drops 10m and rebounds half the height. Total distance?",
    options: ["20m", "30m", "40m", "15m"],
    answer: "30m",
    explanation: "Down 10. Up 5, Down 5. Up 2.5... S = 10 + 2(5 + 2.5 + ...). S_inf of 5, 2.5 = 10. Total = 10 + 2(10) = 30."
  },
  {
    question: "Bacteria doubles every hour. Starts with 5. After 4 hours?",
    options: ["40", "80", "160", "320"],
    answer: "80",
    explanation: "5, 10, 20, 40, 80. (At t=0, 5. t=1, 10... t=4, 5*2^4 = 80)."
  },
  {
    question: "Car value depreciates 10% per year. Value after 2 years if start 100k.",
    options: ["80k", "81k", "90k", "85k"],
    answer: "81k",
    explanation: "100 * 0.9 * 0.9 = 81."
  },
  {
    question: "Stack of logs: 20 in bottom, 19 in next... 10 in top. Total logs?",
    options: ["155", "160", "165", "170"],
    answer: "165",
    explanation: "Arith Seq: 20...10. n=11. S = 11/2(20+10) = 5.5(30) = 165."
  },
  {
    question: "Salary 20k, increases 1k/year. Total earnings in 10 years?",
    options: ["240k", "245k", "250k", "255k"],
    answer: "245k",
    explanation: "S10 = 10/2(2*20 + 9*1) = 5(40+9) = 245."
  },
  {
    question: "A pendulum swings 10cm, then 90% of previous. Total distance until stop?",
    options: ["90cm", "100cm", "110cm", "50cm"],
    answer: "100cm",
    explanation: "Sum to infinity: 10 / (1 - 0.9) = 10 / 0.1 = 100."
  },
  {
    question: "Auditorium has 20 seats row 1, 22 row 2, etc. Row 10 seats?",
    options: ["36", "38", "40", "42"],
    answer: "38",
    explanation: "20 + 9(2) = 38."
  },
  {
    question: "Chain email: Send to 3 people. They send to 3 each. Round 4 emails?",
    options: ["27", "81", "243", "9"],
    answer: "81",
    explanation: "1, 3, 9, 27, 81. (Round 1 is 3. Round 4 is 3^4 = 81)."
  },
  {
    question: "Saver puts ₱1 day 1, ₱2 day 2, ₱3 day 3... in 30 days?",
    options: ["465", "450", "435", "500"],
    answer: "465",
    explanation: "30/2(1+30) = 15(31) = 465."
  },
  {
    question: "Runner runs half distance remaining. Will he finish?",
    options: ["Yes", "No", "In infinite time", "Depends on speed"],
    answer: "In infinite time",
    explanation: "Zeno's paradox. The sum approaches distance but theoretically needs infinite steps."
  },

  // 31-40: Finding parameters from non-consecutive terms
  {
    question: "Arith Seq: a3=10, a7=26. Find d.",
    options: ["3", "4", "5", "6"],
    answer: "4",
    explanation: "a7 = a3 + 4d -> 26 = 10 + 4d -> 16=4d -> d=4."
  },
  {
    question: "Geo Seq: a2=10, a5=80. Find r.",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "a5 = a2 * r^3 -> 80 = 10r^3 -> 8=r^3 -> r=2."
  },
  {
    question: "Arith: a4=15, a9=35. Find a1.",
    options: ["1", "3", "5", "7"],
    answer: "3",
    explanation: "35-15 = 20. 5d=20 -> d=4. a1 = 15 - 3(4) = 3."
  },
  {
    question: "Geo: a3=18, a5=162. Find positive r.",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "162/18 = 9 = r^2 -> r=3."
  },
  {
    question: "If x, x+3, x+8 are geometric, find x.",
    options: ["3", "4", "4.5", "6"],
    answer: "4.5",
    explanation: "(x+3)/x = (x+8)/(x+3) -> (x+3)^2 = x(x+8) -> x^2+6x+9 = x^2+8x -> 9=2x -> x=4.5."
  },
  {
    question: "If 2x, 5x+2, 10x-2 are arithmetic, find x.",
    options: ["2", "3", "4", "6"],
    answer: "3",
    explanation: "For AP, common difference is constant: (5x+2) - 2x = (10x-2) - (5x+2). Simplifying: 3x+2 = 5x-4 -> 6 = 2x -> x = 3."
  },
  {
    question: "Sum of first n odd integers is:",
    options: ["n", "2n", "n^2", "n^3"],
    answer: "n^2",
    explanation: "Standard property."
  },
  {
    question: "Sum of first n even integers is:",
    options: ["n(n+1)", "n^2", "n(n-1)", "2n"],
    answer: "n(n+1)",
    explanation: "2 + 4 + ... = 2(1+2+...). = 2 * n(n+1)/2 = n(n+1)."
  },
  {
    question: "Identify: 1, 3, 4, 7, 11...",
    options: ["Arithmetic", "Lucas Sequence", "Geometric", "Harmonic"],
    answer: "Lucas Sequence",
    explanation: "Like Fibonacci but starts with different numbers (adding previous two)."
  },
  {
    question: "Three numbers in AP sum to 15. Middle number is?",
    options: ["3", "5", "7", "Cannot be determined"],
    answer: "5",
    explanation: "(a-d) + a + (a+d) = 3a = 15 -> a=5."
  },

  // 41-50: Misc Advanced Calculations (FIXED ITEMS)
  {
    question: "Find x if 2, x, 32 is geometric.",
    options: ["4", "8", "16", "10"],
    answer: "8",
    explanation: "x = sqrt(2*32) = sqrt(64) = 8."
  },
  {
    question: "Find x if 2, x, 32 is arithmetic.",
    options: ["15", "16", "17", "18"],
    answer: "17",
    explanation: "(2+32)/2 = 17."
  },
  {
    question: "Sum of infinite geometric series is 6, first term is 3. Find r.",
    options: ["1/3", "1/2", "2/3", "1/4"],
    answer: "1/2",
    explanation: "6 = 3/(1-r) -> 1-r = 0.5 -> r = 0.5."
  },
  {
    question: "Which term of 2, 9, 16... exceeds 100?",
    options: ["14th", "15th", "16th", "17th"],
    answer: "16th",
    explanation: "2 + 7(n-1) > 100 -> 7(n-1) > 98 -> n-1 > 14 -> n > 15. So 16th."
  },
  {
    question: "Find sum of all multiples of 5 between 1 and 100 (inclusive).",
    options: ["1000", "1050", "950", "1100"],
    answer: "1050",
    explanation: "5, 10... 100. 20 terms. S=20/2(5+100) = 10(105) = 1050."
  },
  {
    question: "Find sum of integers 1 to 50 not divisible by 2.",
    options: ["600", "625", "650", "700"],
    answer: "625",
    explanation: "Sum of odds. 25 odds. 25^2 = 625."
  },
  {
    question: "Common ratio of 1, -1, 1, -1...",
    options: ["1", "-1", "0", "Undefined"],
    answer: "-1",
    explanation: "-1/1 = -1."
  },
  {
    question: "Sum of 1 - 1/2 + 1/4 - 1/8...",
    options: ["1/2", "2/3", "3/4", "1"],
    answer: "2/3",
    explanation: "a1=1, r=-0.5. S = 1/(1-(-0.5)) = 1/1.5 = 2/3."
  },
  {
    question: "A clock strikes the hour number. Total strikes in 12 hours?",
    options: ["70", "72", "78", "80"],
    answer: "78",
    explanation: "1+2+3...12 = 78."
  },
  {
    question: "Total strikes in 24 hours?",
    options: ["78", "156", "100", "144"],
    answer: "156",
    explanation: "78 * 2 = 156."
  }
],

// ==========================================
// LEVEL 4: EXPERT (50 items – Sigma, Special Series, Complex Problems)
// ==========================================
expert: [
  // 1-10: Sigma Notation
  {
    question: "Evaluate Σ n (from n=1 to 5)",
    options: ["10", "15", "20", "25"],
    answer: "15",
    explanation: "1+2+3+4+5 = 15."
  },
  {
    question: "Evaluate Σ 2n (from n=1 to 4)",
    options: ["10", "15", "20", "25"],
    answer: "20",
    explanation: "2(1+2+3+4) = 2(10) = 20."
  },
  {
    question: "Evaluate Σ n^2 (from n=1 to 3)",
    options: ["12", "13", "14", "15"],
    answer: "14",
    explanation: "1+4+9 = 14."
  },
  {
    question: "Evaluate Σ (2n-1) (from n=1 to 4)",
    options: ["15", "16", "17", "18"],
    answer: "16",
    explanation: "1+3+5+7 = 16 (or 4^2)."
  },
  {
    question: "Evaluate Σ 3 (from n=1 to 5)",
    options: ["3", "15", "8", "12"],
    answer: "15",
    explanation: "Constant term. 3*5 = 15."
  },
  {
    question: "Expand Σ a_i (from i=1 to 3)",
    options: ["a1+a2+a3", "a1*a2*a3", "a3", "3a"],
    answer: "a1+a2+a3",
    explanation: "Definition of summation."
  },
  {
    question: "Evaluate Σ (k+1) from k=0 to 3",
    options: ["6", "10", "9", "12"],
    answer: "10",
    explanation: "1+2+3+4 = 10."
  },
  {
    question: "Sum of Σ (1/2)^n from n=1 to infinity",
    options: ["0.5", "1", "1.5", "2"],
    answer: "1",
    explanation: "Geometric series a1=0.5, r=0.5. S = 0.5/0.5 = 1."
  },
  {
    question: "Evaluate Σ (i^2 + 1) for i=1 to 3",
    options: ["15", "16", "17", "18"],
    answer: "17",
    explanation: "(1+1) + (4+1) + (9+1) = 2+5+10 = 17."
  },
  {
    question: "Linearity property: Σ (an + bn) equals?",
    options: ["Σ an + Σ bn", "Σ an * Σ bn", "Σ an / Σ bn", "0"],
    answer: "Σ an + Σ bn",
    explanation: "Summation is linear."
  },

  // 11-20: Telescoping & Special Series
  {
    question: "Sum of 1/(1*2) + 1/(2*3) + ... + 1/(9*10)",
    options: ["0.5", "0.9", "0.99", "1"],
    answer: "0.9",
    explanation: "Telescoping: (1-1/2) + (1/2-1/3)... = 1 - 1/10 = 0.9."
  },
  {
    question: "Sum of 1/(1*2) + ... to infinity",
    options: ["1", "2", "0.5", "Infinity"],
    answer: "1",
    explanation: "Converges to 1 - 0 = 1."
  },
  {
    question: "1^3 + 2^3 + 3^3 + ... + n^3 equals?",
    options: ["n^2", "(Sum of n)^2", "Sum of n", "n^4"],
    answer: "(Sum of n)^2",
    explanation: "Identity: Sum of cubes = (n(n+1)/2)^2."
  },
  {
    question: "Sum of first n squares (1^2 + ... n^2)",
    options: ["n(n+1)/2", "n^2", "n(n+1)(2n+1)/6", "n^3/3"],
    answer: "n(n+1)(2n+1)/6",
    explanation: "Standard formula for sum of squares."
  },
  {
    question: "Evaluate 1^3 + 2^3 + 3^3",
    options: ["30", "36", "42", "27"],
    answer: "36",
    explanation: "1+8+27 = 36. (Also (1+2+3)^2 = 6^2 = 36)."
  },
  {
    question: "Sum of infinite series: 0.9 + 0.09 + 0.009...",
    options: ["0.99", "1", "1.1", "0.999"],
    answer: "1",
    explanation: "This is the decimal expansion of 1."
  },
  {
    question: "Fibonacci: F1=1, F2=1. Find F6.",
    options: ["5", "8", "13", "21"],
    answer: "8",
    explanation: "1, 1, 2, 3, 5, 8."
  },
  {
    question: "Limit of ratio F(n+1)/F(n) in Fibonacci approaches:",
    options: ["Pi", "Golden Ratio (Phi)", "e", "2"],
    answer: "Golden Ratio (Phi)",
    explanation: "Approx 1.618."
  },
  {
    question: "Sum of infinite series 1/2 + 1/4 + 1/8 + ... + 1/2^n...",
    options: ["1", "2", "0.5", "Infinite"],
    answer: "1",
    explanation: "Standard geometric series summing to 1."
  },
  {
    question: "Find the 5th Pentagonal number.",
    options: ["25", "30", "35", "40"],
    answer: "35",
    explanation: "Formula n(3n-1)/2. 5(14)/2 = 35."
  },

  // 21-30: AM-GM-HM Inequality & Relations
  {
    question: "Relationship between AM and GM (for positive numbers).",
    options: ["AM > GM", "AM < GM", "AM >= GM", "AM = GM"],
    answer: "AM >= GM",
    explanation: "AM is always greater than or equal to GM."
  },
  {
    question: "When is AM = GM?",
    options: ["Always", "Never", "When all numbers are equal", "When numbers are distinct"],
    answer: "When all numbers are equal",
    explanation: "Equality holds only if a = b."
  },
  {
    question: "Product of two numbers is 100. Minimum sum?",
    options: ["10", "20", "25", "50"],
    answer: "20",
    explanation: "Min sum when numbers are equal. 10+10=20."
  },
  {
    question: "Sum of two numbers is 20. Maximum product?",
    options: ["50", "75", "100", "400"],
    answer: "100",
    explanation: "Max product when equal. 10*10=100."
  },
  {
    question: "Relation between AM, GM, HM.",
    options: ["GM^2 = AM * HM", "AM^2 = GM * HM", "HM^2 = AM * GM", "No relation"],
    answer: "GM^2 = AM * HM",
    explanation: "This is a key geometric property."
  },
  {
    question: "If AM=5 and GM=4, find HM.",
    options: ["3", "3.2", "3.5", "3.6"],
    answer: "3.2",
    explanation: "GM² = AM * HM → 16 = 5 * HM → HM = 16/5 = 3.2."
  },
  {
    question: "If AM=10 and HM=6.4, find GM.",
    options: ["7", "8", "8.5", "9"],
    answer: "8",
    explanation: "GM = sqrt(10 * 6.4) = sqrt(64) = 8."
  },
  {
    question: "AM of reciprocals of x and y is equivalent to:",
    options: ["Reciprocal of AM", "Reciprocal of GM", "Reciprocal of HM", "GM"],
    answer: "Reciprocal of HM",
    explanation: "1/HM = (1/x + 1/y)/2."
  },
  {
    question: "For x, y > 0, (x+y)(1/x+1/y) is always >= ?",
    options: ["1", "2", "4", "8"],
    answer: "4",
    explanation: "By AM-GM or expansion: 1 + x/y + y/x + 1 = 2 + (x/y+y/x). Min x/y+y/x is 2. So >= 4."
  },
  {
    question: "Which grows fastest?",
    options: ["n", "n^2", "2^n", "n!"],
    answer: "n!",
    explanation: "Factorial grows faster than exponential."
  },

  // 31-40: Complex Word Problems (FIXED ITEMS)
  {
    question: "Side of square is 10. Midpoints join to form new square. Repeat. Sum of areas?",
    options: ["100", "150", "200", "300"],
    answer: "200",
    explanation: "Areas: 100, 50, 25... S = 100/(1-0.5) = 200."
  },
  {
    question: "Same problem, sum of perimeters?",
    options: ["40 + 20√2...", "40(2+√2)", "80", "100"],
    answer: "40(2+√2)",
    explanation: "First perimeter = 40, ratio = 1/√2. S = 40 / (1 - 1/√2) = 40(2+√2)."
  },
  {
    question: "Bouncing ball theoretical distance vs time.",
    options: ["Distance finite, Time finite", "Distance finite, Time infinite", "Both infinite", "Distance infinite"],
    answer: "Distance finite, Time finite",
    explanation: "Geometric series converges for both distance and time with constant time intervals."
  },
  {
    question: "Man saves half his salary. Salary doubles every month. Finite savings?",
    options: ["Yes", "No", "Depends", "Constant"],
    answer: "No",
    explanation: "Terms increase (doubling). Divergent series."
  },
  {
    question: "Three numbers in GP sum to 26. Middle term is:",
    options: ["2", "6", "18", "8"],
    answer: "6",
    explanation: "Numbers 2, 6, 18 are in GP with r=3, sum=26."
  },
  {
    question: "Find x so that x, x+2, x+6 are in Geometric Progression.",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "If x=2: 2, 4, 8. Common ratio = 2. ✓"
  },
  {
    question: "Sum of 0.2 + 0.22 + 0.222 + ... to n terms.",
    options: ["2/9(10^n - 1)/9 - n/9", "n", "n/2", "0.2n"],
    answer: "2/9(10^n - 1)/9 - n/9",
    explanation: "Complex formula derived from 2/9[(10^n - 1)/9 - n]."
  },
  {
    question: "Insert 3 geometric means between 1 and 16.",
    options: ["2, 4, 8", "3, 6, 9", "4, 8, 12", "2, 5, 10"],
    answer: "2, 4, 8",
    explanation: "1, 2, 4, 8, 16. r=2."
  },
  {
    question: "Find the next term in: 2, 3, 5, 9, 17, ...",
    options: ["25", "31", "33", "35"],
    answer: "33",
    explanation: "Pattern: multiply by 2 and subtract 1. 17*2-1=33."
  },
  {
    question: "Sum of infinite series: 1/2 + 2/4 + 3/8 + 4/16 + ...",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "AGP with a=1/2, d=1/2, r=1/2. S = (1/2)/(1-1/2) + (1/2)/(1-1/2)^2 = 2."
  },

  // 41-50: Final Expert Challenge
  {
    question: "Sum of infinite series: 1 - 1/3 + 1/5 - 1/7...",
    options: ["Pi", "Pi/2", "Pi/4", "1"],
    answer: "Pi/4",
    explanation: "Leibniz series for Pi."
  },
  {
    question: "Sum of 1/1² + 1/2² + 1/3² ... (Basel Problem)",
    options: ["Pi²/6", "Pi²/4", "Pi/6", "1.5"],
    answer: "Pi²/6",
    explanation: "Famous result by Euler."
  },
  {
    question: "The sequence 1, 11, 21, 1211, 111221... is:",
    options: ["Look-and-say sequence", "Prime sequence", "Fibonacci", "Geometric"],
    answer: "Look-and-say sequence",
    explanation: "Each term describes the digits of the previous term."
  },
  {
    question: "Does the harmonic series 1 + 1/2 + 1/3... converge?",
    options: ["Yes", "No", "To 0", "To 2"],
    answer: "No",
    explanation: "It diverges to infinity (slowly)."
  },
  {
    question: "Sequence defined by a_n = a_{n-1} + a_{n-2}. If a1=1, a2=3 (Lucas). a5?",
    options: ["7", "11", "18", "29"],
    answer: "11",
    explanation: "1, 3, 4, 7, 11."
  },
  {
    question: "S = 1 + 2x + 3x² + 4x³... is what type?",
    options: ["Arithmetic", "Geometric", "Arithmetico-Geometric", "Harmonic"],
    answer: "Arithmetico-Geometric",
    explanation: "Coefficients are arithmetic, powers are geometric."
  },
  {
    question: "Sum of AGP 1 + 2x + 3x²... to infinity (|x|<1).",
    options: ["1/(1-x)²", "1/(1-x)", "x/(1-x)", "1/x"],
    answer: "1/(1-x)²",
    explanation: "Derivative of geometric series sum 1/(1-x)."
  },
  {
    question: "In a GP, product of first 5 terms is 32. Third term is?",
    options: ["1", "2", "4", "8"],
    answer: "2",
    explanation: "Let terms be a/r², a/r, a, ar, ar². Product = a⁵ = 32 → a=2."
  },
  {
    question: "If a, b, c are Arithmetic, then e^a, e^b, e^c are:",
    options: ["Arithmetic", "Geometric", "Harmonic", "Random"],
    answer: "Geometric",
    explanation: "e^b / e^a = e^(b-a) = e^d. Constant ratio."
  },
  {
    question: "If a, b, c are Geometric, then log a, log b, log c are:",
    options: ["Arithmetic", "Geometric", "Harmonic", "Random"],
    answer: "Arithmetic",
    explanation: "log b - log a = log(b/a) = log(r). Constant difference."
}
  ] // end of the last level array
};
