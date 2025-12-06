// questions/numerical_solving_math_expressions.js
// ==========================================
// NUMERICAL – Solving Mathematical Expressions / Order of Operations (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["solving_math_expressions"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Basic Expressions)
  // ==========================================
  beginner: [
    {
      question: "Solve: 17 + 8 - 9",
      options: ["16", "15", "17", "18"],
      answer: "16",
      explanation: "Add first: 17 + 8 = 25. Then subtract: 25 - 9 = 16. For addition and subtraction only, we work from left to right."
    },
    {
      question: "Solve: 13 + 6 - 4",
      options: ["15", "14", "16", "17"],
      answer: "15",
      explanation: "Left to right: 13 + 6 = 19, then 19 - 4 = 15."
    },
    {
      question: "Solve: 2 + 10 - 8",
      options: ["9", "4", "2", "10"],
      answer: "4",
      explanation: "First, 2 + 10 = 12. Then subtract 8: 12 - 8 = 4."
    },
    {
      question: "Solve: 7 + 6 - 3",
      options: ["10", "11", "12", "8"],
      answer: "10",
      explanation: "Start from the left: 7 + 6 = 13. Then subtract 3: 13 - 3 = 10."
    },
    {
      question: "Solve: 4 + 14 - 9",
      options: ["7", "8", "9", "11"],
      answer: "9",
      explanation: "4 + 14 = 18, then 18 - 9 = 9."
    },
    {
      question: "Solve: 15 + 3 - 7",
      options: ["9", "11", "7", "13"],
      answer: "11",
      explanation: "15 + 3 = 18, then 18 - 7 = 11."
    },
    {
      question: "Solve: 9 + 8 - 5",
      options: ["12", "11", "13", "8"],
      answer: "12",
      explanation: "9 + 8 = 17, then 17 - 5 = 12."
    },
    {
      question: "Solve: 6 + 11 - 4",
      options: ["12", "13", "10", "15"],
      answer: "13",
      explanation: "6 + 11 = 17, then 17 - 4 = 13."
    },
    {
      question: "Solve: 18 + 5 - 6",
      options: ["17", "15", "13", "16"],
      answer: "17",
      explanation: "18 + 5 = 23, then 23 - 6 = 17."
    },
    {
      question: "Solve: 11 + 7 - 9",
      options: ["8", "9", "11", "10"],
      answer: "9",
      explanation: "11 + 7 = 18, then 18 - 9 = 9."
    },
    {
      question: "Solve: 13 + 9 - 4",
      options: ["18", "16", "19", "20"],
      answer: "18",
      explanation: "13 + 9 = 22, then 22 - 4 = 18."
    },
    {
      question: "Solve: 10 + 12 - 7",
      options: ["13", "15", "16", "12"],
      answer: "15",
      explanation: "10 + 12 = 22, then 22 - 7 = 15."
    },
    {
      question: "Solve: 5 + 3 × 4",
      options: ["17", "12", "19", "21"],
      answer: "17",
      explanation: "Multiplication first: 3 × 4 = 12, then 5 + 12 = 17."
    },
    {
      question: "Solve: 2 + 6 × 3",
      options: ["20", "16", "21", "14"],
      answer: "20",
      explanation: "6 × 3 = 18, then 2 + 18 = 20."
    },
    {
      question: "Solve: 4 + 7 × 2",
      options: ["18", "20", "14", "12"],
      answer: "18",
      explanation: "7 × 2 = 14, then 4 + 14 = 18."
    },
    {
      question: "Solve: 3 + 5 × 5",
      options: ["25", "28", "30", "29"],
      answer: "28",
      explanation: "5 × 5 = 25, then 3 + 25 = 28."
    },
    {
      question: "Solve: 7 + 4 × 6",
      options: ["31", "33", "29", "25"],
      answer: "31",
      explanation: "4 × 6 = 24, then 7 + 24 = 31."
    },
    {
      question: "Solve: 6 + 8 × 3",
      options: ["30", "34", "28", "32"],
      answer: "30",
      explanation: "8 × 3 = 24, then 6 + 24 = 30."
    },
    {
      question: "Solve: 9 + 2 × 9",
      options: ["27", "28", "30", "31"],
      answer: "27",
      explanation: "2 × 9 = 18, then 9 + 18 = 27."
    },
    {
      question: "Solve: 8 + 3 × 7",
      options: ["29", "27", "31", "30"],
      answer: "29",
      explanation: "3 × 7 = 21, then 8 + 21 = 29."
    },
    {
      question: "Solve: 10 + 4 × 5",
      options: ["30", "35", "32", "28"],
      answer: "30",
      explanation: "4 × 5 = 20, then 10 + 20 = 30."
    },
    {
      question: "Solve: 3 + 9 × 4",
      options: ["39", "40", "36", "30"],
      answer: "39",
      explanation: "9 × 4 = 36, then 3 + 36 = 39."
    },
    {
      question: "Solve: (3 + 4) × 2",
      options: ["14", "16", "12", "18"],
      answer: "14",
      explanation: "Parentheses first: 3 + 4 = 7, then 7 × 2 = 14."
    },
    {
      question: "Solve: (5 + 2) × 3",
      options: ["21", "18", "19", "23"],
      answer: "21",
      explanation: "5 + 2 = 7, then 7 × 3 = 21."
    },
    {
      question: "Solve: (4 + 6) × 3",
      options: ["30", "33", "27", "24"],
      answer: "30",
      explanation: "4 + 6 = 10, then 10 × 3 = 30."
    },
    {
      question: "Solve: (8 + 5) × 2",
      options: ["26", "30", "24", "28"],
      answer: "26",
      explanation: "8 + 5 = 13, then 13 × 2 = 26."
    },
    {
      question: "Solve: (7 + 9) × 2",
      options: ["30", "32", "28", "34"],
      answer: "32",
      explanation: "7 + 9 = 16, then 16 × 2 = 32."
    },
    {
      question: "Solve: (6 + 3) × 4",
      options: ["36", "40", "30", "32"],
      answer: "36",
      explanation: "6 + 3 = 9, then 9 × 4 = 36."
    },
    {
      question: "Solve: (2 + 9) × 3",
      options: ["33", "27", "30", "24"],
      answer: "33",
      explanation: "2 + 9 = 11, then 11 × 3 = 33."
    },
    {
      question: "Solve: (5 + 11) × 2",
      options: ["30", "32", "34", "28"],
      answer: "32",
      explanation: "5 + 11 = 16, then 16 × 2 = 32."
    },
    {
      question: "Solve: (4 + 7) × 3",
      options: ["33", "36", "30", "27"],
      answer: "33",
      explanation: "4 + 7 = 11, then 11 × 3 = 33."
    },
    {
      question: "Solve: (9 + 6) × 2",
      options: ["28", "30", "32", "36"],
      answer: "30",
      explanation: "9 + 6 = 15, then 15 × 2 = 30."
    },
    {
      question: "Solve: 5 + 12 ÷ 3",
      options: ["9", "11", "7", "13"],
      answer: "9",
      explanation: "Division first: 12 ÷ 3 = 4, then 5 + 4 = 9."
    },
    {
      question: "Solve: 7 + 16 ÷ 4",
      options: ["13", "11", "12", "15"],
      answer: "11",
      explanation: "16 ÷ 4 = 4, then 7 + 4 = 11."
    },
    {
      question: "Solve: 9 + 18 ÷ 6",
      options: ["12", "13", "11", "10"],
      answer: "12",
      explanation: "18 ÷ 6 = 3, then 9 + 3 = 12."
    },
    {
      question: "Solve: 4 + 20 ÷ 5",
      options: ["8", "10", "7", "6"],
      answer: "8",
      explanation: "20 ÷ 5 = 4, then 4 + 4 = 8."
    },
    {
      question: "Solve: 6 + 21 ÷ 7",
      options: ["9", "7", "10", "8"],
      answer: "9",
      explanation: "21 ÷ 7 = 3, then 6 + 3 = 9."
    },
    {
      question: "Solve: 8 + 24 ÷ 4",
      options: ["14", "12", "16", "13"],
      answer: "14",
      explanation: "24 ÷ 4 = 6, then 8 + 6 = 14."
    },
    {
      question: "Solve: 10 + 15 ÷ 5",
      options: ["13", "14", "15", "11"],
      answer: "13",
      explanation: "15 ÷ 5 = 3, then 10 + 3 = 13."
    },
    {
      question: "Solve: 3 + 14 ÷ 2",
      options: ["10", "9", "12", "8"],
      answer: "10",
      explanation: "14 ÷ 2 = 7, then 3 + 7 = 10."
    },
    {
      question: "Solve: 11 + 18 ÷ 3",
      options: ["19", "17", "15", "20"],
      answer: "17",
      explanation: "18 ÷ 3 = 6, then 11 + 6 = 17."
    },
    {
      question: "Solve: 12 + 16 ÷ 4",
      options: ["18", "17", "16", "15"],
      answer: "16",
      explanation: "16 ÷ 4 = 4, then 12 + 4 = 16."
    },
    {
      question: "Solve: 14 + 9 - 6",
      options: ["19", "17", "16", "15"],
      answer: "17",
      explanation: "14 + 9 = 23, then 23 - 6 = 17."
    },
    {
      question: "Solve: 16 + 5 - 7",
      options: ["14", "15", "12", "13"],
      answer: "14",
      explanation: "16 + 5 = 21, then 21 - 7 = 14."
    },
    {
      question: "Solve: 18 + 4 - 9",
      options: ["15", "14", "11", "13"],
      answer: "13",
      explanation: "18 + 4 = 22, then 22 - 9 = 13."
    },
    {
      question: "Solve: 20 + 7 - 5",
      options: ["22", "24", "21", "23"],
      answer: "22",
      explanation: "20 + 7 = 27, then 27 - 5 = 22."
    },
    {
      question: "Solve: 9 + 5 × 2",
      options: ["19", "20", "17", "15"],
      answer: "19",
      explanation: "5 × 2 = 10, then 9 + 10 = 19."
    },
    {
      question: "Solve: 7 + 4 × 5",
      options: ["27", "26", "25", "29"],
      answer: "27",
      explanation: "4 × 5 = 20, then 7 + 20 = 27."
    },
    {
      question: "Solve: (2 + 8) × 3",
      options: ["27", "30", "24", "26"],
      answer: "30",
      explanation: "2 + 8 = 10, then 10 × 3 = 30."
    },
    {
      question: "Solve: (3 + 9) × 2",
      options: ["22", "24", "20", "26"],
      answer: "24",
      explanation: "3 + 9 = 12, then 12 × 2 = 24."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Multi-step Expressions)
  // ==========================================
  intermediate: [
    {
      question: "Solve: 20 + 4 × 3 - 5",
      options: ["27", "28", "29", "30"],
      answer: "27",
      explanation: "4 × 3 = 12, 20 + 12 = 32, 32 - 5 = 27."
    },
    {
      question: "Solve: 29 + 5 × 4 - 8",
      options: ["35", "46", "41", "43"],
      answer: "41",
      explanation: "5 × 4 = 20, 29 + 20 = 49, 49 - 8 = 41."
    },
    {
      question: "Solve: 34 + 3 × 6 - 5",
      options: ["44", "47", "45", "49"],
      answer: "47",
      explanation: "3 × 6 = 18, 34 + 18 = 52, 52 - 5 = 47."
    },
    {
      question: "Solve: 21 + 4 × 5 - 7",
      options: ["34", "40", "34", "37"],
      answer: "34",
      explanation: "4 × 5 = 20, 21 + 20 = 41, 41 - 7 = 34."
    },
    {
      question: "Solve: 18 + 7 × 3 - 9",
      options: ["30", "24", "28", "32"],
      answer: "30",
      explanation: "7 × 3 = 21, 18 + 21 = 39, 39 - 9 = 30."
    },
    {
      question: "Solve: 25 + 6 × 2 - 4",
      options: ["33", "31", "35", "29"],
      answer: "33",
      explanation: "6 × 2 = 12, 25 + 12 = 37, 37 - 4 = 33."
    },
    {
      question: "Solve: 30 + 2 × 7 - 6",
      options: ["38", "40", "34", "32"],
      answer: "38",
      explanation: "2 × 7 = 14, 30 + 14 = 44, 44 - 6 = 38."
    },
    {
      question: "Solve: 27 + 8 × 2 - 5",
      options: ["38", "35", "39", "37"],
      answer: "38",
      explanation: "8 × 2 = 16, 27 + 16 = 43, 43 - 5 = 38."
    },
    {
      question: "Solve: 19 + 9 × 3 - 8",
      options: ["38", "40", "43", "38"],
      answer: "38",
      explanation: "9 × 3 = 27, 19 + 27 = 46, 46 - 8 = 38."
    },
    {
      question: "Solve: 32 + 4 × 3 - 7",
      options: ["37", "41", "39", "35"],
      answer: "37",
      explanation: "4 × 3 = 12, 32 + 12 = 44, 44 - 7 = 37."
    },
    {
      question: "Solve: 26 + 5 × 5 - 9",
      options: ["42", "39", "44", "38"],
      answer: "42",
      explanation: "5 × 5 = 25, 26 + 25 = 51, 51 - 9 = 42."
    },
    {
      question: "Solve: 43 - 3 × 7",
      options: ["22", "21", "24", "25"],
      answer: "22",
      explanation: "3 × 7 = 21, 43 - 21 = 22."
    },
    {
      question: "Solve: 38 - 4 × 6",
      options: ["14", "16", "18", "12"],
      answer: "14",
      explanation: "4 × 6 = 24, 38 - 24 = 14."
    },
    {
      question: "Solve: 50 - 5 × 8",
      options: ["10", "12", "8", "15"],
      answer: "10",
      explanation: "5 × 8 = 40, 50 - 40 = 10."
    },
    {
      question: "Solve: 44 - 7 × 4",
      options: ["16", "18", "20", "14"],
      answer: "16",
      explanation: "7 × 4 = 28, 44 - 28 = 16."
    },
    {
      question: "Solve: 36 - 6 × 3",
      options: ["18", "19", "20", "21"],
      answer: "18",
      explanation: "6 × 3 = 18, 36 - 18 = 18."
    },
    {
      question: "Solve: 42 - 2 × 9",
      options: ["24", "26", "20", "22"],
      answer: "24",
      explanation: "2 × 9 = 18, 42 - 18 = 24."
    },
    {
      question: "Solve: 39 - 3 × 9",
      options: ["12", "15", "18", "10"],
      answer: "12",
      explanation: "3 × 9 = 27, 39 - 27 = 12."
    },
    {
      question: "Solve: 48 - 4 × 9",
      options: ["12", "14", "10", "16"],
      answer: "12",
      explanation: "4 × 9 = 36, 48 - 36 = 12."
    },
    {
      question: "Solve: 33 - 5 × 5",
      options: ["8", "9", "7", "10"],
      answer: "8",
      explanation: "5 × 5 = 25, 33 - 25 = 8."
    },
    {
      question: "Solve: 41 - 2 × 11",
      options: ["17", "19", "21", "15"],
      answer: "19",
      explanation: "2 × 11 = 22, 41 - 22 = 19."
    },
    {
      question: "Solve: (27 - 5) × 3",
      options: ["66", "72", "70", "69"],
      answer: "66",
      explanation: "27 - 5 = 22, 22 × 3 = 66."
    },
    {
      question: "Solve: (30 - 8) × 2",
      options: ["44", "40", "42", "46"],
      answer: "44",
      explanation: "30 - 8 = 22, 22 × 2 = 44."
    },
    {
      question: "Solve: (35 - 9) × 4",
      options: ["104", "100", "96", "108"],
      answer: "104",
      explanation: "35 - 9 = 26, 26 × 4 = 104."
    },
    {
      question: "Solve: (23 - 7) × 5",
      options: ["80", "75", "85", "70"],
      answer: "80",
      explanation: "23 - 7 = 16, 16 × 5 = 80."
    },
    {
      question: "Solve: (28 - 6) × 3",
      options: ["66", "72", "60", "54"],
      answer: "66",
      explanation: "28 - 6 = 22, 22 × 3 = 66."
    },
    {
      question: "Solve: (32 - 9) × 2",
      options: ["46", "44", "40", "48"],
      answer: "46",
      explanation: "32 - 9 = 23, 23 × 2 = 46."
    },
    {
      question: "Solve: (26 - 4) × 3",
      options: ["66", "72", "60", "54"],
      answer: "66",
      explanation: "26 - 4 = 22, 22 × 3 = 66."
    },
    {
      question: "Solve: (29 - 5) × 4",
      options: ["96", "92", "88", "100"],
      answer: "96",
      explanation: "29 - 5 = 24, 24 × 4 = 96."
    },
    {
      question: "Solve: (31 - 7) × 3",
      options: ["72", "71", "69", "76"],
      answer: "72",
      explanation: "31 - 7 = 24, 24 × 3 = 72."
    },
    {
      question: "Solve: (24 - 6) × 5",
      options: ["90", "85", "95", "100"],
      answer: "90",
      explanation: "24 - 6 = 18, 18 × 5 = 90."
    },
    {
      question: "Solve: 18 × 4 - 7",
      options: ["65", "64", "70", "59"],
      answer: "65",
      explanation: "18 × 4 = 72, 72 - 7 = 65."
    },
    {
      question: "Solve: 16 × 3 - 5",
      options: ["43", "44", "45", "41"],
      answer: "43",
      explanation: "16 × 3 = 48, 48 - 5 = 43."
    },
    {
      question: "Solve: 21 × 2 - 9",
      options: ["33", "32", "35", "31"],
      answer: "33",
      explanation: "21 × 2 = 42, 42 - 9 = 33."
    },
    {
      question: "Solve: 17 × 3 - 8",
      options: ["43", "44", "45", "41"],
      answer: "43",
      explanation: "17 × 3 = 51, 51 - 8 = 43."
    },
    {
      question: "Solve: 22 × 2 - 6",
      options: ["38", "40", "44", "36"],
      answer: "38",
      explanation: "22 × 2 = 44, 44 - 6 = 38."
    },
    {
      question: "Solve: 19 × 4 - 5",
      options: ["71", "72", "69", "73"],
      answer: "71",
      explanation: "19 × 4 = 76, 76 - 5 = 71."
    },
    {
      question: "Solve: 24 × 3 - 10",
      options: ["62", "60", "64", "58"],
      answer: "62",
      explanation: "24 × 3 = 72, 72 - 10 = 62."
    },
    {
      question: "Solve: 20 × 5 - 12",
      options: ["88", "90", "92", "86"],
      answer: "88",
      explanation: "20 × 5 = 100, 100 - 12 = 88."
    },
    {
      question: "Solve: 23 × 3 - 11",
      options: ["58", "59", "60", "55"],
      answer: "58",
      explanation: "23 × 3 = 69, 69 - 11 = 58."
    },
    {
      question: "Solve: 28 × 2 - 13",
      options: ["43", "41", "45", "39"],
      answer: "43",
      explanation: "28 × 2 = 56, 56 - 13 = 43."
    },
    {
      question: "Solve: 18 + 6 × 4 - 10",
      options: ["32", "34", "36", "30"],
      answer: "32",
      explanation: "6 × 4 = 24, 18 + 24 = 42, 42 - 10 = 32."
    },
    {
      question: "Solve: 22 + 7 × 3 - 9",
      options: ["34", "35", "36", "32"],
      answer: "34",
      explanation: "7 × 3 = 21, 22 + 21 = 43, 43 - 9 = 34."
    },
    {
      question: "Solve: 15 + 4 × 5 - 6",
      options: ["29", "31", "33", "27"],
      answer: "29",
      explanation: "4 × 5 = 20, 15 + 20 = 35, 35 - 6 = 29."
    },
    {
      question: "Solve: 19 + 3 × 8 - 7",
      options: ["36", "38", "40", "34"],
      answer: "36",
      explanation: "3 × 8 = 24, 19 + 24 = 43, 43 - 7 = 36."
    },
    {
      question: "Solve: 25 + 2 × 9 - 8",
      options: ["35", "41", "43", "37"],
      answer: "35",
      explanation: "2 × 9 = 18, 25 + 18 = 43, 43 - 8 = 35."
    },
    {
      question: "Solve: 14 + 5 × 6 - 12",
      options: ["32", "34", "36", "30"],
      answer: "32",
      explanation: "5 × 6 = 30, 14 + 30 = 44, 44 - 12 = 32."
    },
    {
      question: "Solve: 27 + 3 × 7 - 15",
      options: ["33", "35", "37", "39"],
      answer: "33",
      explanation: "3 × 7 = 21, 27 + 21 = 48, 48 - 15 = 33."
    },
    {
      question: "Solve: 31 + 4 × 5 - 18",
      options: ["33", "35", "37", "39"],
      answer: "33",
      explanation: "4 × 5 = 20, 31 + 20 = 51, 51 - 18 = 33."
    },
    {
      question: "Solve: 16 + 6 × 4 - 11",
      options: ["29", "31", "33", "35"],
      answer: "29",
      explanation: "6 × 4 = 24, 16 + 24 = 40, 40 - 11 = 29."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Exponents & Grouping)
  // ==========================================
  advanced: [
    {
      question: "Solve: (3 + 7)^2 - 42",
      options: ["58", "54", "55", "62"],
      answer: "58",
      explanation: "3 + 7 = 10, 10^2 = 100, 100 - 42 = 58."
    },
    {
      question: "Solve: 4^2 + 5 × 6",
      options: ["46", "44", "42", "48"],
      answer: "46",
      explanation: "4^2 = 16, 5 × 6 = 30, 16 + 30 = 46."
    },
    {
      question: "Solve: 5^2 - 3 × 4",
      options: ["13", "11", "17", "19"],
      answer: "13",
      explanation: "5^2 = 25, 3 × 4 = 12, 25 - 12 = 13."
    },
    {
      question: "Solve: 6^2 + 2 × 7",
      options: ["50", "52", "48", "54"],
      answer: "50",
      explanation: "6^2 = 36, 2 × 7 = 14, 36 + 14 = 50."
    },
    {
      question: "Solve: 7^2 - 4 × 5",
      options: ["29", "31", "33", "27"],
      answer: "29",
      explanation: "7^2 = 49, 4 × 5 = 20, 49 - 20 = 29."
    },
    {
      question: "Solve: 3^2 + 8 × 2",
      options: ["25", "20", "24", "18"],
      answer: "25",
      explanation: "3^2 = 9, 8 × 2 = 16, 9 + 16 = 25."
    },
    {
      question: "Solve: 8^2 - 3 × 7",
      options: ["43", "55", "59", "61"],
      answer: "43",
      explanation: "8^2 = 64, 3 × 7 = 21, 64 - 21 = 43."
    },
    {
      question: "Solve: 9^2 + 2 × 5",
      options: ["89", "81", "83", "91"],
      answer: "91",
      explanation: "9^2 = 81, 2 × 5 = 10, 81 + 10 = 91."
    },
    {
      question: "Solve: (4 + 3)^2 - 20",
      options: ["29", "30", "31", "27"],
      answer: "29",
      explanation: "4 + 3 = 7, 7^2 = 49, 49 - 20 = 29."
    },
    {
      question: "Solve: (2 + 5)^2 - 25",
      options: ["24", "23", "22", "21"],
      answer: "24",
      explanation: "2 + 5 = 7, 7^2 = 49, 49 - 25 = 24."
    },
    {
      question: "Solve: 2^3 × 4 + 6",
      options: ["38", "36", "34", "40"],
      answer: "38",
      explanation: "2^3 = 8, 8 × 4 = 32, 32 + 6 = 38."
    },
    {
      question: "Solve: 5^2 × 2 - 15",
      options: ["35", "37", "39", "41"],
      answer: "35",
      explanation: "5^2 = 25, 25 × 2 = 50, 50 - 15 = 35."
    },
    {
      question: "Solve: 3^3 + 4 × 5",
      options: ["47", "45", "43", "49"],
      answer: "47",
      explanation: "3^3 = 27, 4 × 5 = 20, 27 + 20 = 47."
    },
    {
      question: "Solve: 6^2 - 2^3 × 2",
      options: ["20", "28", "30", "32"],
      answer: "20",
      explanation: "6^2 = 36, 2^3 = 8, 8 × 2 = 16, 36 - 16 = 20."
    },
    {
      question: "Solve: (8 - 3)^2 + 10",
      options: ["35", "37", "39", "41"],
      answer: "35",
      explanation: "8 - 3 = 5, 5^2 = 25, 25 + 10 = 35."
    },
    {
      question: "Solve: 4^2 × 3 - 5^2",
      options: ["23", "25", "27", "29"],
      answer: "23",
      explanation: "4^2 = 16, 16 × 3 = 48, 5^2 = 25, 48 - 25 = 23."
    },
    {
      question: "Solve: 2^4 + 3^2 × 2",
      options: ["34", "36", "38", "40"],
      answer: "34",
      explanation: "2^4 = 16, 3^2 = 9, 9 × 2 = 18, 16 + 18 = 34."
    },
    {
      question: "Solve: (10 - 4)^2 ÷ 4",
      options: ["9", "10", "11", "12"],
      answer: "9",
      explanation: "10 - 4 = 6, 6^2 = 36, 36 ÷ 4 = 9."
    },
    {
      question: "Solve: 7^2 - 3^2 × 2",
      options: ["31", "33", "35", "37"],
      answer: "31",
      explanation: "7^2 = 49, 3^2 = 9, 9 × 2 = 18, 49 - 18 = 31."
    },
    {
      question: "Solve: 5^3 ÷ 5 + 10",
      options: ["35", "37", "39", "41"],
      answer: "35",
      explanation: "5^3 = 125, 125 ÷ 5 = 25, 25 + 10 = 35."
    },
    {
      question: "Solve: (12 ÷ 4)^2 × 3",
      options: ["27", "29", "31", "33"],
      answer: "27",
      explanation: "12 ÷ 4 = 3, 3^2 = 9, 9 × 3 = 27."
    },
    {
      question: "Solve: 2^5 - 4^2 + 8",
      options: ["24", "26", "28", "30"],
      answer: "24",
      explanation: "2^5 = 32, 4^2 = 16, 32 - 16 = 16, 16 + 8 = 24."
    },
    {
      question: "Solve: 6^2 ÷ 4 + 3^2",
      options: ["18", "20", "22", "24"],
      answer: "18",
      explanation: "6^2 = 36, 36 ÷ 4 = 9, 3^2 = 9, 9 + 9 = 18."
    },
    {
      question: "Solve: (5 × 2)^2 - 30",
      options: ["70", "72", "74", "76"],
      answer: "70",
      explanation: "5 × 2 = 10, 10^2 = 100, 100 - 30 = 70."
    },
    {
      question: "Solve: 8^2 ÷ 2^3 + 5",
      options: ["13", "15", "17", "19"],
      answer: "13",
      explanation: "8^2 = 64, 2^3 = 8, 64 ÷ 8 = 8, 8 + 5 = 13."
    },
    {
      question: "Solve: 3^4 - 5^2 × 2",
      options: ["31", "33", "35", "37"],
      answer: "31",
      explanation: "3^4 = 81, 5^2 = 25, 25 × 2 = 50, 81 - 50 = 31."
    },
    {
      question: "Solve: (9 - 2)^2 ÷ 7",
      options: ["7", "8", "9", "10"],
      answer: "7",
      explanation: "9 - 2 = 7, 7^2 = 49, 49 ÷ 7 = 7."
    },
    {
      question: "Solve: 4^3 ÷ 8 + 6^2",
      options: ["44", "46", "48", "50"],
      answer: "44",
      explanation: "4^3 = 64, 64 ÷ 8 = 8, 6^2 = 36, 8 + 36 = 44."
    },
    {
      question: "Solve: 10^2 - (3 × 4)^2",
      options: ["-36", "-40", "-44", "-48"],
      answer: "-44",
      explanation: "3 × 4 = 12, 10^2 = 100, 12^2 = 144, 100 - 144 = -44."
    },
    {
      question: "Solve: 2^6 ÷ 4^2 + 10",
      options: ["14", "16", "18", "20"],
      answer: "14",
      explanation: "2^6 = 64, 4^2 = 16, 64 ÷ 16 = 4, 4 + 10 = 14."
    },
    {
      question: "Solve: (7 + 2)^2 - 5^2",
      options: ["56", "58", "60", "62"],
      answer: "56",
      explanation: "7 + 2 = 9, 9^2 = 81, 5^2 = 25, 81 - 25 = 56."
    },
    {
      question: "Solve: 3^2 × 2^2 + 8",
      options: ["44", "46", "48", "50"],
      answer: "44",
      explanation: "3^2 = 9, 2^2 = 4, 9 × 4 = 36, 36 + 8 = 44."
    },
    {
      question: "Solve: 12^2 ÷ 6^2 × 3",
      options: ["12", "14", "16", "18"],
      answer: "12",
      explanation: "12^2 = 144, 6^2 = 36, 144 ÷ 36 = 4, 4 × 3 = 12."
    },
    {
      question: "Solve: (8 ÷ 2)^3 - 20",
      options: ["44", "46", "48", "50"],
      answer: "44",
      explanation: "8 ÷ 2 = 4, 4^3 = 64, 64 - 20 = 44."
    },
    {
      question: "Solve: 5^2 + 4^2 × 2",
      options: ["57", "59", "61", "63"],
      answer: "57",
      explanation: "5^2 = 25, 4^2 = 16, 16 × 2 = 32, 25 + 32 = 57."
    },
    {
      question: "Solve: 6^3 ÷ 2^3 + 15",
      options: ["42", "44", "46", "48"],
      answer: "42",
      explanation: "6^3 = 216, 2^3 = 8, 216 ÷ 8 = 27, 27 + 15 = 42."
    },
    {
      question: "Solve: (10 - 3)^2 + 4^2",
      options: ["65", "67", "69", "71"],
      answer: "65",
      explanation: "10 - 3 = 7, 7^2 = 49, 4^2 = 16, 49 + 16 = 65."
    },
    {
      question: "Solve: 9^2 - 3^3 × 2",
      options: ["27", "29", "31", "33"],
      answer: "27",
      explanation: "9^2 = 81, 3^3 = 27, 27 × 2 = 54, 81 - 54 = 27."
    },
    {
      question: "Solve: 2^4 × 3^2 ÷ 6",
      options: ["24", "26", "28", "30"],
      answer: "24",
      explanation: "2^4 = 16, 3^2 = 9, 16 × 9 = 144, 144 ÷ 6 = 24."
    },
    {
      question: "Solve: (5 + 4)^2 - 7^2",
      options: ["32", "34", "36", "38"],
      answer: "32",
      explanation: "5 + 4 = 9, 9^2 = 81, 7^2 = 49, 81 - 49 = 32."
    },
    {
      question: "Solve: 8^2 + 6^2 ÷ 4",
      options: ["73", "75", "77", "79"],
      answer: "73",
      explanation: "8^2 = 64, 6^2 = 36, 36 ÷ 4 = 9, 64 + 9 = 73."
    },
    {
      question: "Solve: 4^3 - 2^5 + 10",
      options: ["42", "44", "46", "48"],
      answer: "42",
      explanation: "4^3 = 64, 2^5 = 32, 64 - 32 = 32, 32 + 10 = 42."
    },
    {
      question: "Solve: (6 × 2)^2 ÷ 3^2",
      options: ["16", "18", "20", "22"],
      answer: "16",
      explanation: "6 × 2 = 12, 12^2 = 144, 3^2 = 9, 144 ÷ 9 = 16."
    },
    {
      question: "Solve: 7^2 + 5^2 × 2",
      options: ["99", "101", "103", "105"],
      answer: "99",
      explanation: "7^2 = 49, 5^2 = 25, 25 × 2 = 50, 49 + 50 = 99."
    },
    {
      question: "Solve: 10^2 ÷ 5^2 + 3^3",
      options: ["31", "33", "35", "37"],
      answer: "31",
      explanation: "10^2 = 100, 5^2 = 25, 100 ÷ 25 = 4, 3^3 = 27, 4 + 27 = 31."
    },
    {
      question: "Solve: (9 - 4)^3 ÷ 25",
      options: ["5", "6", "7", "8"],
      answer: "5",
      explanation: "9 - 4 = 5, 5^3 = 125, 125 ÷ 25 = 5."
    },
    {
      question: "Solve: 2^5 + 3^4 - 50",
      options: ["57", "59", "61", "63"],
      answer: "63",
      explanation: "2^5 = 32, 3^4 = 81, 32 + 81 = 113, 113 - 50 = 63."
    },
    {
      question: "Solve: 6^2 × 2 - 4^2",
      options: ["56", "58", "60", "62"],
      answer: "56",
      explanation: "6^2 = 36, 36 × 2 = 72, 4^2 = 16, 72 - 16 = 56."
    },
    {
      question: "Solve: (8 + 2)^2 ÷ 10",
      options: ["10", "12", "14", "16"],
      answer: "10",
      explanation: "8 + 2 = 10, 10^2 = 100, 100 ÷ 10 = 10."
    },
    {
      question: "Solve: 3^3 + 2^4 × 3",
      options: ["75", "77", "79", "81"],
      answer: "75",
      explanation: "3^3 = 27, 2^4 = 16, 16 × 3 = 48, 27 + 48 = 75."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – Complex Multi-step Expressions)
  // ==========================================
  expert: [
    {
      question: "Solve: 6 × (3^2 - 14)",
      options: ["-30", "-20", "-21", "-23"],
      answer: "-30",
      explanation: "3^2 = 9, 9 - 14 = -5, 6 × (-5) = -30."
    },
    {
      question: "Solve: (5 + 7) × (9 - 4)",
      options: ["60", "55", "65", "70"],
      answer: "60",
      explanation: "5 + 7 = 12, 9 - 4 = 5, 12 × 5 = 60."
    },
    {
      question: "Solve: (4^2 + 3^2) ÷ 5",
      options: ["5", "6", "7", "4"],
      answer: "5",
      explanation: "4^2 = 16, 3^2 = 9, 16 + 9 = 25, 25 ÷ 5 = 5."
    },
    {
      question: "Solve: 5^2 + 3 × (10 - 6)",
      options: ["37", "39", "41", "35"],
      answer: "37",
      explanation: "5^2 = 25, 10 - 6 = 4, 3 × 4 = 12, 25 + 12 = 37."
    },
    {
      question: "Solve: (7 + 5) × (8 - 3)",
      options: ["60", "50", "55", "65"],
      answer: "60",
      explanation: "7 + 5 = 12, 8 - 3 = 5, 12 × 5 = 60."
    },
    {
      question: "Solve: 18 ÷ (3^2 - 3) + 7",
      options: ["10", "11", "12", "13"],
      answer: "10",
      explanation: "3^2 = 9, 9 - 3 = 6, 18 ÷ 6 = 3, 3 + 7 = 10."
    },
    {
      question: "Solve: (6 × 4 - 8) ÷ 2^2",
      options: ["4", "5", "6", "7"],
      answer: "4",
      explanation: "6 × 4 = 24, 24 - 8 = 16, 2^2 = 4, 16 ÷ 4 = 4."
    },
    {
      question: "Solve: 5 × (8 - 3^2) + 12",
      options: ["5", "7", "9", "11"],
      answer: "7",
      explanation: "3^2 = 9, 8 - 9 = -1, 5 × (-1) = -5, -5 + 12 = 7."
    },
    {
      question: "Solve: (10^2 - 6^2) ÷ (4 + 4)",
      options: ["8", "9", "10", "11"],
      answer: "8",
      explanation: "10^2 = 100, 6^2 = 36, 100 - 36 = 64, 4 + 4 = 8, 64 ÷ 8 = 8."
    },
    {
      question: "Solve: 3 × (4^2 - 10) + 5^2",
      options: ["43", "45", "47", "49"],
      answer: "43",
      explanation: "4^2 = 16, 16 - 10 = 6, 3 × 6 = 18, 5^2 = 25, 18 + 25 = 43."
    },
    {
      question: "Solve: (12 ÷ 4)^2 × (5 - 2)",
      options: ["27", "29", "31", "33"],
      answer: "27",
      explanation: "12 ÷ 4 = 3, 3^2 = 9, 5 - 2 = 3, 9 × 3 = 27."
    },
    {
      question: "Solve: 8^2 ÷ (3^2 - 1) + 6",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "8^2 = 64, 3^2 = 9, 9 - 1 = 8, 64 ÷ 8 = 8, 8 + 6 = 14."
    },
    {
      question: "Solve: (7 × 3 - 5) ÷ 2^3",
      options: ["2", "3", "4", "5"],
      answer: "2",
      explanation: "7 × 3 = 21, 21 - 5 = 16, 2^3 = 8, 16 ÷ 8 = 2."
    },
    {
      question: "Solve: 4 × (5^2 ÷ 5) + 18",
      options: ["38", "40", "42", "44"],
      answer: "38",
      explanation: "5^2 = 25, 25 ÷ 5 = 5, 4 × 5 = 20, 20 + 18 = 38."
    },
    {
      question: "Solve: (9 - 4)^2 × (6 ÷ 3)",
      options: ["50", "52", "54", "56"],
      answer: "50",
      explanation: "9 - 4 = 5, 5^2 = 25, 6 ÷ 3 = 2, 25 × 2 = 50."
    },
    {
      question: "Solve: 6^2 ÷ (2 × 3) + 4^2",
      options: ["22", "24", "26", "28"],
      answer: "22",
      explanation: "6^2 = 36, 2 × 3 = 6, 36 ÷ 6 = 6, 4^2 = 16, 6 + 16 = 22."
    },
    {
      question: "Solve: (8 + 2^3) × (10 ÷ 5)",
      options: ["32", "34", "36", "38"],
      answer: "32",
      explanation: "2^3 = 8, 8 + 8 = 16, 10 ÷ 5 = 2, 16 × 2 = 32."
    },
    {
      question: "Solve: 5 × (3^2 + 4) - 20",
      options: ["45", "47", "49", "51"],
      answer: "45",
      explanation: "3^2 = 9, 9 + 4 = 13, 5 × 13 = 65, 65 - 20 = 45."
    },
    {
      question: "Solve: (12 - 3^2) × (4 + 2)",
      options: ["18", "20", "22", "24"],
      answer: "18",
      explanation: "3^2 = 9, 12 - 9 = 3, 4 + 2 = 6, 3 × 6 = 18."
    },
    {
      question: "Solve: 7^2 ÷ (5 - 2^2) + 10",
      options: ["59", "61", "63", "65"],
      answer: "59",
      explanation: "7^2 = 49, 2^2 = 4, 5 - 4 = 1, 49 ÷ 1 = 49, 49 + 10 = 59."
    },
    {
      question: "Solve: (6 × 4) ÷ (2^2) + 3^2",
      options: ["15", "17", "19", "21"],
      answer: "15",
      explanation: "6 × 4 = 24, 2^2 = 4, 24 ÷ 4 = 6, 3^2 = 9, 6 + 9 = 15."
    },
    {
      question: "Solve: 8 × (5 - 2^2) + 12",
      options: ["20", "22", "24", "26"],
      answer: "20",
      explanation: "2^2 = 4, 5 - 4 = 1, 8 × 1 = 8, 8 + 12 = 20."
    },
    {
      question: "Solve: (9^2 - 7^2) ÷ (3 + 1)",
      options: ["8", "9", "10", "11"],
      answer: "8",
      explanation: "9^2 = 81, 7^2 = 49, 81 - 49 = 32, 3 + 1 = 4, 32 ÷ 4 = 8."
    },
    {
      question: "Solve: 4^2 × (6 ÷ 2) - 3^3",
      options: ["21", "23", "25", "27"],
      answer: "21",
      explanation: "4^2 = 16, 6 ÷ 2 = 3, 16 × 3 = 48, 3^3 = 27, 48 - 27 = 21."
    },
    {
      question: "Solve: (10 + 2^3) ÷ (4 - 1)",
      options: ["6", "7", "8", "9"],
      answer: "6",
      explanation: "2^3 = 8, 10 + 8 = 18, 4 - 1 = 3, 18 ÷ 3 = 6."
    },
    {
      question: "Solve: 5 × (3^3 ÷ 9) + 16",
      options: ["31", "33", "35", "37"],
      answer: "31",
      explanation: "3^3 = 27, 27 ÷ 9 = 3, 5 × 3 = 15, 15 + 16 = 31."
    },
    {
      question: "Solve: (8 - 2)^2 ÷ (2 × 3)",
      options: ["6", "7", "8", "9"],
      answer: "6",
      explanation: "8 - 2 = 6, 6^2 = 36, 2 × 3 = 6, 36 ÷ 6 = 6."
    },
    {
      question: "Solve: 6^2 + (4 × 5) ÷ 2",
      options: ["46", "48", "50", "52"],
      answer: "46",
      explanation: "6^2 = 36, 4 × 5 = 20, 20 ÷ 2 = 10, 36 + 10 = 46."
    },
    {
      question: "Solve: (7^2 - 5^2) × (6 ÷ 3)",
      options: ["48", "50", "52", "54"],
      answer: "48",
      explanation: "7^2 = 49, 5^2 = 25, 49 - 25 = 24, 6 ÷ 3 = 2, 24 × 2 = 48."
    },
    {
      question: "Solve: 9 × (4^2 ÷ 8) + 15",
      options: ["33", "35", "37", "39"],
      answer: "33",
      explanation: "4^2 = 16, 16 ÷ 8 = 2, 9 × 2 = 18, 18 + 15 = 33."
    },
    {
      question: "Solve: (10 - 3)^2 ÷ (2 + 5)",
      options: ["7", "8", "9", "10"],
      answer: "7",
      explanation: "10 - 3 = 7, 7^2 = 49, 2 + 5 = 7, 49 ÷ 7 = 7."
    },
    {
      question: "Solve: 8^2 ÷ (4 × 2) + 4^2",
      options: ["24", "26", "28", "30"],
      answer: "24",
      explanation: "8^2 = 64, 4 × 2 = 8, 64 ÷ 8 = 8, 4^2 = 16, 8 + 16 = 24."
    },
    {
      question: "Solve: 5 × (6^2 ÷ 9) - 10",
      options: ["10", "12", "14", "16"],
      answer: "10",
      explanation: "6^2 = 36, 36 ÷ 9 = 4, 5 × 4 = 20, 20 - 10 = 10."
    },
    {
      question: "Solve: (12 ÷ 3)^2 × (7 - 4)",
      options: ["48", "50", "52", "54"],
      answer: "48",
      explanation: "12 ÷ 3 = 4, 4^2 = 16, 7 - 4 = 3, 16 × 3 = 48."
    },
    {
      question: "Solve: 7^2 - (4 × 5) ÷ 2",
      options: ["39", "41", "43", "45"],
      answer: "39",
      explanation: "7^2 = 49, 4 × 5 = 20, 20 ÷ 2 = 10, 49 - 10 = 39."
    },
    {
      question: "Solve: (9 + 3^2) ÷ (5 - 2)",
      options: ["6", "7", "8", "9"],
      answer: "6",
      explanation: "3^2 = 9, 9 + 9 = 18, 5 - 2 = 3, 18 ÷ 3 = 6."
    },
    {
      question: "Solve: 6 × (5^2 - 20) + 8",
      options: ["38", "40", "42", "44"],
      answer: "38",
      explanation: "5^2 = 25, 25 - 20 = 5, 6 × 5 = 30, 30 + 8 = 38."
    },
    {
      question: "Solve: (8^2 ÷ 4) × (6 ÷ 3)",
      options: ["32", "34", "36", "38"],
      answer: "32",
      explanation: "8^2 = 64, 64 ÷ 4 = 16, 6 ÷ 3 = 2, 16 × 2 = 32."
    },
    {
      question: "Solve: 4^3 ÷ (2 × 4) + 5^2",
      options: ["33", "35", "37", "39"],
      answer: "33",
      explanation: "4^3 = 64, 2 × 4 = 8, 64 ÷ 8 = 8, 5^2 = 25, 8 + 25 = 33."
    },
    {
      question: "Solve: (9 - 1)^2 ÷ (4 × 2)",
      options: ["8", "9", "10", "11"],
      answer: "8",
      explanation: "9 - 1 = 8, 8^2 = 64, 4 × 2 = 8, 64 ÷ 8 = 8."
    },
    {
      question: "Solve: 9 × (7 - 3^2) + 15",
      options: ["-3", "3", "9", "15"],
      answer: "-3",
      explanation: "3^2 = 9, 7 - 9 = -2, 9 × (-2) = -18, -18 + 15 = -3."
    },
    {
      question: "Solve: (5^2 + 5^2) ÷ (5 × 2)",
      options: ["5", "6", "7", "8"],
      answer: "5",
      explanation: "5^2 = 25, so 25 + 25 = 50, 5 × 2 = 10, 50 ÷ 10 = 5."
    },
    {
      question: "Solve: 8 × (5^2 ÷ 5) - 12",
      options: ["28", "30", "32", "34"],
      answer: "28",
      explanation: "5^2 = 25, 25 ÷ 5 = 5, 8 × 5 = 40, 40 - 12 = 28."
    },
    {
      question: "Solve: (12 - 4)^2 ÷ (2^3)",
      options: ["8", "9", "10", "11"],
      answer: "8",
      explanation: "12 - 4 = 8, 8^2 = 64, 2^3 = 8, 64 ÷ 8 = 8."
    },
    {
      question: "Solve: 7^2 + (6 × 3) ÷ 2",
      options: ["58", "60", "62", "64"],
      answer: "58",
      explanation: "7^2 = 49, 6 × 3 = 18, 18 ÷ 2 = 9, 49 + 9 = 58."
    },
    {
      question: "Solve: (9^2 - 5^2) ÷ (4 × 2)",
      options: ["7", "8", "9", "10"],
      answer: "7",
      explanation: "9^2 = 81, 5^2 = 25, 81 - 25 = 56, 4 × 2 = 8, 56 ÷ 8 = 7."
    },
    {
      question: "Solve: 5 × (4^3 ÷ 16) + 20",
      options: ["38", "40", "42", "44"],
      answer: "40",
      explanation: "4^3 = 64, 64 ÷ 16 = 4, 5 × 4 = 20, 20 + 20 = 40."
    },
    {
      question: "Solve: (8 + 2^2) × (12 ÷ 4)",
      options: ["36", "38", "40", "42"],
      answer: "36",
      explanation: "2^2 = 4, 8 + 4 = 12, 12 ÷ 4 = 3, 12 × 3 = 36."
    },
    {
      question: "Solve: 6^2 ÷ (3 × 2) + 4^2",
      options: ["22", "24", "26", "28"],
      answer: "22",
      explanation: "6^2 = 36, 3 × 2 = 6, 36 ÷ 6 = 6, 4^2 = 16, 6 + 16 = 22."
    },
    {
      question: "Solve: (10 - 2)^2 ÷ (4 × 2)",
      options: ["8", "9", "10", "11"],
      answer: "8",
      explanation: "10 - 2 = 8, 8^2 = 64, 4 × 2 = 8, 64 ÷ 8 = 8."
    },
    {
      question: "Solve: 9 × (6^2 ÷ 12) + 15",
      options: ["42", "44", "46", "48"],
      answer: "42",
      explanation: "6^2 = 36, 36 ÷ 12 = 3, 9 × 3 = 27, 27 + 15 = 42."
    },
    {
      question: "Solve: (7^2 + 1^2) ÷ (5 × 2)",
      options: ["5", "6", "7", "8"],
      answer: "5",
      explanation: "7^2 = 49, 1^2 = 1, 49 + 1 = 50, 5 × 2 = 10, 50 ÷ 10 = 5."
    },
    {
      question: "Solve: 8 × (5 - 2^2) + 20",
      options: ["28", "30", "32", "34"],
      answer: "28",
      explanation: "2^2 = 4, 5 - 4 = 1, 8 × 1 = 8, 8 + 20 = 28."
    },
    {
      question: "Solve: (12 ÷ 3)^2 × (9 - 5)",
      options: ["64", "66", "68", "70"],
      answer: "64",
      explanation: "12 ÷ 3 = 4, 4^2 = 16, 9 - 5 = 4, 16 × 4 = 64."
    },
    {
      question: "Solve: 7^2 - (6 × 3) ÷ 2",
      options: ["40", "42", "44", "46"],
      answer: "40",
      explanation: "7^2 = 49, 6 × 3 = 18, 18 ÷ 2 = 9, 49 - 9 = 40."
    }
  ]
};

