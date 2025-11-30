// questions/numerical_geometry_problems.js
// ==========================================
// NUMERICAL – GEOMETRY PROBLEMS (200 ITEMS TARGET)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["geometry_problems"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Basic Perimeter & Area)
  // ==========================================
  beginner: [
    // 1
    {
      question: "Find the perimeter of a rectangle with length 8 cm and width 5 cm.",
      options: ["18 cm", "22 cm", "26 cm", "30 cm"],
      answer: "26 cm",
      explanation: `STEP 1: Formula for perimeter of a rectangle: P = 2 × (L + W)
STEP 2: Substitute values: P = 2 × (8 + 5) = 2 × 13
STEP 3: P = 26 cm`
    },

    // 2
    {
      question: "Find the area of a rectangle with length 7 m and width 4 m.",
      options: ["11 m²", "21 m²", "24 m²", "28 m²"],
      answer: "28 m²",
      explanation: `STEP 1: Formula for area of a rectangle: A = L × W
STEP 2: A = 7 × 4
STEP 3: A = 28 m²`
    },

    // 3
    {
      question: "A square has a side length of 6 m. What is its perimeter?",
      options: ["12 m", "18 m", "24 m", "30 m"],
      answer: "24 m",
      explanation: `STEP 1: Perimeter of a square: P = 4 × side
STEP 2: P = 4 × 6
STEP 3: P = 24 m`
    },

    // 4
    {
      question: "A square has a side length of 9 cm. What is its area?",
      options: ["18 cm²", "36 cm²", "72 cm²", "81 cm²"],
      answer: "81 cm²",
      explanation: `STEP 1: Area of a square: A = side²
STEP 2: A = 9 × 9
STEP 3: A = 81 cm²`
    },

    // 5
    {
      question: "Find the area of a triangle with base 10 m and height 6 m.",
      options: ["20 m²", "25 m²", "30 m²", "60 m²"],
      answer: "30 m²",
      explanation: `STEP 1: Area of a triangle: A = ½ × base × height
STEP 2: A = ½ × 10 × 6
STEP 3: A = 30 m²`
    },

    // 6
    {
      question: "A circle has radius 7 cm. Using π = 3.14, find its circumference.",
      options: ["38 cm", "44 cm", "50 cm", "56 cm"],
      answer: "44 cm",
      explanation: `STEP 1: Circumference: C = 2πr
STEP 2: C = 2 × 3.14 × 7 = 43.96
STEP 3: ≈ 44 cm`
    },

    // 7
    {
      question: "A circle has radius 7 cm. Using π = 3.14, find its area.",
      options: ["120 cm²", "140 cm²", "154 cm²", "160 cm²"],
      answer: "154 cm²",
      explanation: `STEP 1: Area: A = πr²
STEP 2: A = 3.14 × 7² = 3.14 × 49 = 153.86
STEP 3: ≈ 154 cm²`
    },

    // 8
    {
      question: "Find the area of a rectangle with length 12 cm and width 5 cm.",
      options: ["17 cm²", "40 cm²", "60 cm²", "120 cm²"],
      answer: "60 cm²",
      explanation: `STEP 1: A = L × W
STEP 2: A = 12 × 5
STEP 3: A = 60 cm²`
    },

    // 9
    {
      question: "A rectangle has an area of 48 m² and width 6 m. What is its length?",
      options: ["6 m", "7 m", "8 m", "9 m"],
      answer: "8 m",
      explanation: `STEP 1: A = L × W ⇒ 48 = L × 6
STEP 2: L = 48 ÷ 6
STEP 3: L = 8 m`
    },

    // 10
    {
      question: "A square has a perimeter of 32 m. What is the length of one side?",
      options: ["6 m", "7 m", "8 m", "9 m"],
      answer: "8 m",
      explanation: `STEP 1: P = 4 × side ⇒ 32 = 4 × side
STEP 2: side = 32 ÷ 4
STEP 3: side = 8 m`
    },

    // 11
    {
      question: "A square has an area of 100 cm². What is the length of one side?",
      options: ["5 cm", "8 cm", "10 cm", "12 cm"],
      answer: "10 cm",
      explanation: `STEP 1: A = side² ⇒ 100 = side²
STEP 2: side = √100
STEP 3: side = 10 cm`
    },

    // 12
    {
      question: "A rectangle has a perimeter of 30 cm and length 9 cm. What is its width?",
      options: ["3 cm", "6 cm", "9 cm", "12 cm"],
      answer: "6 cm",
      explanation: `STEP 1: P = 2(L + W) ⇒ 30 = 2(9 + W)
STEP 2: 15 = 9 + W ⇒ W = 15 − 9
STEP 3: W = 6 cm`
    },

    // 13
    {
      question: "A rectangular room is 5 m long and 3 m wide. What is the area of the floor?",
      options: ["8 m²", "10 m²", "15 m²", "20 m²"],
      answer: "15 m²",
      explanation: `STEP 1: A = L × W
STEP 2: A = 5 × 3
STEP 3: A = 15 m²`
    },

    // 14
    {
      question: "A square garden has a side of 15 m. How many meters of fencing are needed around it?",
      options: ["45 m", "50 m", "60 m", "75 m"],
      answer: "60 m",
      explanation: `STEP 1: Perimeter of square: P = 4 × side
STEP 2: P = 4 × 15
STEP 3: P = 60 m`
    },

    // 15
    {
      question: "A circle has a diameter of 10 m. Using π = 3.14, find its circumference.",
      options: ["25.7 m", "28.6 m", "31.4 m", "34.1 m"],
      answer: "31.4 m",
      explanation: `STEP 1: Circumference: C = πd
STEP 2: C = 3.14 × 10
STEP 3: C = 31.4 m`
    },

    // 16
    {
      question: "A circle has a diameter of 14 cm. What is its radius?",
      options: ["3 cm", "5 cm", "7 cm", "14 cm"],
      answer: "7 cm",
      explanation: `STEP 1: Radius = diameter ÷ 2
STEP 2: r = 14 ÷ 2 = 7 cm`
    },

    // 17
    {
      question: "In a right triangle, the legs are 3 m and 4 m. What is the length of the hypotenuse?",
      options: ["4 m", "5 m", "6 m", "7 m"],
      answer: "5 m",
      explanation: `STEP 1: Use Pythagorean theorem: c² = a² + b²
STEP 2: c² = 3² + 4² = 9 + 16 = 25
STEP 3: c = √25 = 5 m`
    },

    // 18
    {
      question: "A triangle has side lengths 5 m, 7 m, and 8 m. Find its perimeter.",
      options: ["18 m", "19 m", "20 m", "21 m"],
      answer: "20 m",
      explanation: `STEP 1: Perimeter = sum of all sides
STEP 2: P = 5 + 7 + 8
STEP 3: P = 20 m`
    },

    // 19
    {
      question: "Find the perimeter of a rectangle with length 9 cm and width 2 cm.",
      options: ["18 cm", "20 cm", "22 cm", "24 cm"],
      answer: "22 cm",
      explanation: `STEP 1: P = 2(L + W)
STEP 2: P = 2(9 + 2) = 2 × 11
STEP 3: P = 22 cm`
    },

    // 20
    {
      question: "A square has a perimeter of 20 m. What is its area?",
      options: ["20 m²", "25 m²", "30 m²", "40 m²"],
      answer: "25 m²",
      explanation: `STEP 1: P = 4 × side ⇒ 20 = 4 × side
STEP 2: side = 20 ÷ 4 = 5 m
STEP 3: Area = side² = 5 × 5 = 25 m²`
    },

    // 21
    {
      question: "A circle has radius 3 m. Using π = 3.14, find its area.",
      options: ["18.84 m²", "25.12 m²", "28.26 m²", "30.14 m²"],
      answer: "28.26 m²",
      explanation: `STEP 1: A = πr²
STEP 2: A = 3.14 × 3² = 3.14 × 9 = 28.26
STEP 3: A = 28.26 m²`
    },

    // 22
    {
      question: "A circle has radius 5 cm. Using π = 3.14, find its circumference.",
      options: ["25 cm", "28 cm", "31.4 cm", "34.5 cm"],
      answer: "31.4 cm",
      explanation: `STEP 1: C = 2πr
STEP 2: C = 2 × 3.14 × 5 = 31.4
STEP 3: C = 31.4 cm`
    },

    // 23
    {
      question: "An equilateral triangle has side length 6 cm. What is its perimeter?",
      options: ["12 cm", "16 cm", "18 cm", "20 cm"],
      answer: "18 cm",
      explanation: `STEP 1: All sides equal, so P = 3 × side
STEP 2: P = 3 × 6 = 18 cm`
    },

    // 24
    {
      question: "A triangle has base 8 cm and height 5 cm. Find its area.",
      options: ["16 cm²", "20 cm²", "30 cm²", "40 cm²"],
      answer: "20 cm²",
      explanation: `STEP 1: A = ½ × base × height
STEP 2: A = ½ × 8 × 5 = 4 × 5
STEP 3: A = 20 cm²`
    },

    // 25
    {
      question: "The area of a rectangle is 63 m² and its length is 9 m. Find its width.",
      options: ["5 m", "6 m", "7 m", "8 m"],
      answer: "7 m",
      explanation: `STEP 1: A = L × W ⇒ 63 = 9 × W
STEP 2: W = 63 ÷ 9
STEP 3: W = 7 m`
    },

    // 26
    {
      question: "A rectangular lot has a perimeter of 50 m and width 8 m. What is its length?",
      options: ["9 m", "12 m", "17 m", "25 m"],
      answer: "17 m",
      explanation: `STEP 1: P = 2(L + W) ⇒ 50 = 2(L + 8)
STEP 2: 25 = L + 8 ⇒ L = 25 − 8
STEP 3: L = 17 m`
    },

    // 27
    {
      question: "A square tile has side 30 cm. What is its area?",
      options: ["60 cm²", "90 cm²", "300 cm²", "900 cm²"],
      answer: "900 cm²",
      explanation: `STEP 1: A = side²
STEP 2: A = 30 × 30
STEP 3: A = 900 cm²`
    },

    // 28
    {
      question: "A rectangle is 10 m long and 7 m wide. What is its perimeter?",
      options: ["24 m", "27 m", "30 m", "34 m"],
      answer: "34 m",
      explanation: `STEP 1: P = 2(L + W)
STEP 2: P = 2(10 + 7) = 2 × 17
STEP 3: P = 34 m`
    },

    // 29
    {
      question: "A circle has a diameter of 16 cm. Using π = 3.14, find its area.",
      options: ["100.48 cm²", "150.72 cm²", "200.96 cm²", "256.00 cm²"],
      answer: "200.96 cm²",
      explanation: `STEP 1: Radius r = d ÷ 2 = 16 ÷ 2 = 8 cm
STEP 2: A = πr² = 3.14 × 8² = 3.14 × 64
STEP 3: A = 200.96 cm²`
    },

    // 30
    {
      question: "A square has area 64 m². What is its perimeter?",
      options: ["16 m", "24 m", "28 m", "32 m"],
      answer: "32 m",
      explanation: `STEP 1: A = side² ⇒ side = √64 = 8 m
STEP 2: P = 4 × side = 4 × 8
STEP 3: P = 32 m`
    },

    // 31
    {
      question: "A triangle has sides 4 cm, 6 cm, and 9 cm. What is its perimeter?",
      options: ["17 cm", "18 cm", "19 cm", "20 cm"],
      answer: "19 cm",
      explanation: `STEP 1: P = 4 + 6 + 9
STEP 2: P = 19 cm`
    },

    // 32
    {
      question: "A rectangle has length 11 cm and width 3 cm. Find its area.",
      options: ["14 cm²", "22 cm²", "33 cm²", "44 cm²"],
      answer: "33 cm²",
      explanation: `STEP 1: A = L × W
STEP 2: A = 11 × 3
STEP 3: A = 33 cm²`
    },

    // 33
    {
      question: "Find the circumference of a circle with radius 4 cm (π = 3.14).",
      options: ["12.56 cm", "18.84 cm", "25.12 cm", "31.40 cm"],
      answer: "25.12 cm",
      explanation: `STEP 1: C = 2πr
STEP 2: C = 2 × 3.14 × 4 = 25.12
STEP 3: C = 25.12 cm`
    },

    // 34
    {
      question: "A right triangle has legs 5 cm and 12 cm. What is the hypotenuse?",
      options: ["10 cm", "11 cm", "12 cm", "13 cm"],
      answer: "13 cm",
      explanation: `STEP 1: c² = a² + b² = 5² + 12² = 25 + 144 = 169
STEP 2: c = √169 = 13 cm`
    },

    // 35
    {
      question: "A square has side 4.5 m. Find its area.",
      options: ["18.25 m²", "19.5 m²", "20.25 m²", "21.5 m²"],
      answer: "20.25 m²",
      explanation: `STEP 1: A = side²
STEP 2: A = 4.5 × 4.5 = 20.25
STEP 3: A = 20.25 m²`
    },

    // 36
    {
      question: "A rectangle has area 72 cm² and length 12 cm. Find its width.",
      options: ["4 cm", "5 cm", "6 cm", "8 cm"],
      answer: "6 cm",
      explanation: `STEP 1: A = L × W ⇒ 72 = 12 × W
STEP 2: W = 72 ÷ 12
STEP 3: W = 6 cm`
    },

    // 37
    {
      question: "A circle has radius 6 cm. Using π = 3.14, find its area.",
      options: ["90.24 cm²", "100.48 cm²", "113.04 cm²", "120.56 cm²"],
      answer: "113.04 cm²",
      explanation: `STEP 1: A = πr²
STEP 2: A = 3.14 × 6² = 3.14 × 36
STEP 3: A = 113.04 cm²`
    },

    // 38
    {
      question: "A rectangle has perimeter 40 m and length 12 m. Find its width.",
      options: ["4 m", "6 m", "8 m", "10 m"],
      answer: "8 m",
      explanation: `STEP 1: P = 2(L + W) ⇒ 40 = 2(12 + W)
STEP 2: 20 = 12 + W ⇒ W = 20 − 12
STEP 3: W = 8 m`
    },

    // 39
    {
      question: "A square playground has side 25 m. What is its perimeter?",
      options: ["50 m", "75 m", "90 m", "100 m"],
      answer: "100 m",
      explanation: `STEP 1: P = 4 × side
STEP 2: P = 4 × 25
STEP 3: P = 100 m`
    },

    // 40
    {
      question: "A circle has diameter 12 cm. Using π = 3.14, find its circumference.",
      options: ["24.5 cm", "31.4 cm", "37.68 cm", "40.12 cm"],
      answer: "37.68 cm",
      explanation: `STEP 1: C = πd
STEP 2: C = 3.14 × 12
STEP 3: C = 37.68 cm`
    },

    // 41
    {
      question: "A triangle has base 9 cm and height 4 cm. Find its area.",
      options: ["14 cm²", "16 cm²", "18 cm²", "20 cm²"],
      answer: "18 cm²",
      explanation: `STEP 1: A = ½ × base × height
STEP 2: A = ½ × 9 × 4 = 4.5 × 4
STEP 3: A = 18 cm²`
    },

    // 42
    {
      question: "An equilateral triangle has perimeter 24 cm. What is the length of each side?",
      options: ["4 cm", "6 cm", "8 cm", "10 cm"],
      answer: "8 cm",
      explanation: `STEP 1: P = 3 × side ⇒ 24 = 3 × side
STEP 2: side = 24 ÷ 3
STEP 3: side = 8 cm`
    },

    // 43
    {
      question: "A rectangle has length 14 m and width 5 m. What is its area?",
      options: ["45 m²", "60 m²", "70 m²", "75 m²"],
      answer: "70 m²",
      explanation: `STEP 1: A = L × W
STEP 2: A = 14 × 5
STEP 3: A = 70 m²`
    },

    // 44
    {
      question: "A circle has radius 2.5 cm. Using π = 3.14, find its circumference.",
      options: ["10.5 cm", "14.5 cm", "15.7 cm", "18.2 cm"],
      answer: "15.7 cm",
      explanation: `STEP 1: C = 2πr
STEP 2: C = 2 × 3.14 × 2.5 = 15.7
STEP 3: C = 15.7 cm`
    },

    // 45
    {
      question: "A square has side 11 cm. What is its perimeter?",
      options: ["22 cm", "33 cm", "44 cm", "55 cm"],
      answer: "44 cm",
      explanation: `STEP 1: P = 4 × side
STEP 2: P = 4 × 11
STEP 3: P = 44 cm`
    },

    // 46
    {
      question: "A rectangle has area 96 m² and width 12 m. What is its length?",
      options: ["6 m", "7 m", "8 m", "9 m"],
      answer: "8 m",
      explanation: `STEP 1: A = L × W ⇒ 96 = L × 12
STEP 2: L = 96 ÷ 12
STEP 3: L = 8 m`
    },

    // 47
    {
      question: "A circle has diameter 6 cm. Using π = 3.14, find its area.",
      options: ["18.84 cm²", "25.12 cm²", "28.26 cm²", "31.40 cm²"],
      answer: "28.26 cm²",
      explanation: `STEP 1: Radius r = d ÷ 2 = 6 ÷ 2 = 3 cm
STEP 2: A = πr² = 3.14 × 3² = 3.14 × 9
STEP 3: A = 28.26 cm²`
    },

    // 48
    {
      question: "A right triangle has hypotenuse 10 cm and one leg 6 cm. Find the other leg.",
      options: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: "8 cm",
      explanation: `STEP 1: c² = a² + b² ⇒ 10² = 6² + x²
STEP 2: 100 = 36 + x² ⇒ x² = 64
STEP 3: x = √64 = 8 cm`
    },

    // 49
    {
      question: "A square has area 49 m². Find its perimeter.",
      options: ["21 m", "24 m", "28 m", "30 m"],
      answer: "28 m",
      explanation: `STEP 1: side = √49 = 7 m
STEP 2: P = 4 × side = 4 × 7
STEP 3: P = 28 m`
    },

    // 50
    {
      question: "A rectangle has length 15 cm and width 4 cm. Find its perimeter.",
      options: ["30 cm", "34 cm", "38 cm", "40 cm"],
      answer: "38 cm",
      explanation: `STEP 1: P = 2(L + W)
STEP 2: P = 2(15 + 4) = 2 × 19
STEP 3: P = 38 cm`
    }
  ],
