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


    // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Mixed Perimeter, Area, Volume)
  // ==========================================
  intermediate: [
    // 1
    {
      question: "A rectangle has a length of 16 cm and a perimeter of 54 cm. What is the width of the rectangle?",
      options: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      explanation: `STEP 1: Formula: P = 2(L + W).\nSTEP 2: 54 = 2(16 + W) → 27 = 16 + W.\nSTEP 3: W = 27 − 16 = 11 cm.`
    },

    // 2
    {
      question: "A square garden has an area of 225 m². What is its perimeter?",
      options: ["45 m", "50 m", "60 m", "75 m"],
      answer: "60 m",
      explanation: `STEP 1: For a square, A = s².\nSTEP 2: s = √225 = 15 m.\nSTEP 3: Perimeter = 4s = 4 × 15 = 60 m.`
    },

    // 3
    {
      question: "A rectangular floor has an area of 180 m² and a length of 15 m. What is its width?",
      options: ["10 m", "11 m", "12 m", "13 m"],
      answer: "12 m",
      explanation: `STEP 1: A = L × W.\nSTEP 2: 180 = 15 × W.\nSTEP 3: W = 180 ÷ 15 = 12 m.`
    },

    // 4
    {
      question: "The perimeter of a rectangle is 60 cm. Its length is twice its width. What is the width?",
      options: ["8 cm", "10 cm", "12 cm", "14 cm"],
      answer: "10 cm",
      explanation: `STEP 1: Let width = W. Then length = 2W.\nSTEP 2: P = 2(L + W) = 2(2W + W) = 6W.\nSTEP 3: 60 = 6W → W = 60 ÷ 6 = 10 cm.`
    },

    // 5
    {
      question: "A rectangular room measures 4 m by 3 m. Square tiles of side 0.5 m are used to cover the floor. How many tiles are needed?",
      options: ["24", "30", "36", "48"],
      answer: "48",
      explanation: `STEP 1: Room area = 4 × 3 = 12 m².\nSTEP 2: Tile area = 0.5 × 0.5 = 0.25 m².\nSTEP 3: Number of tiles = 12 ÷ 0.25 = 48 tiles.`
    },

    // 6
    {
      question: "A rectangular garden is 18 m long and 12 m wide. A 1 m wide path is built all around inside the garden. What is the area of the path?",
      options: ["40 m²", "44 m²", "52 m²", "56 m²"],
      answer: "56 m²",
      explanation: `STEP 1: Outer area = 18 × 12 = 216 m².\nSTEP 2: Inner rectangle = (18 − 2) × (12 − 2) = 16 × 10 = 160 m².\nSTEP 3: Path area = 216 − 160 = 56 m².`
    },

    // 7
    {
      question: "A parallelogram has a base of 14 cm and a height of 9 cm. What is its area?",
      options: ["112 cm²", "118 cm²", "126 cm²", "132 cm²"],
      answer: "126 cm²",
      explanation: `STEP 1: A = base × height.\nSTEP 2: A = 14 × 9 = 126 cm².\nSTEP 3: So the area is 126 cm².`
    },

    // 8
    {
      question: "A triangle has a base of 16 cm and a height of 7 cm. What is its area?",
      options: ["48 cm²", "52 cm²", "56 cm²", "64 cm²"],
      answer: "56 cm²",
      explanation: `STEP 1: A = ½ × base × height.\nSTEP 2: A = ½ × 16 × 7 = 8 × 7 = 56 cm².\nSTEP 3: So the area is 56 cm².`
    },

    // 9
    {
      question: "The area of a triangle is 90 cm² and its base is 15 cm. What is its height?",
      options: ["10 cm", "11 cm", "12 cm", "13 cm"],
      answer: "12 cm",
      explanation: `STEP 1: A = ½ × base × height.\nSTEP 2: 90 = ½ × 15 × h → 90 = 7.5h.\nSTEP 3: h = 90 ÷ 7.5 = 12 cm.`
    },

    // 10
    {
      question: "A right triangle has legs 9 cm and 12 cm. What is the length of the hypotenuse?",
      options: ["13 cm", "14 cm", "15 cm", "16 cm"],
      answer: "15 cm",
      explanation: `STEP 1: Use Pythagorean theorem: c² = a² + b².\nSTEP 2: c² = 9² + 12² = 81 + 144 = 225.\nSTEP 3: c = √225 = 15 cm.`
    },

    // 11
    {
      question: "In a right triangle, the hypotenuse is 25 cm and one leg is 7 cm. What is the length of the other leg?",
      options: ["20 cm", "21 cm", "23 cm", "24 cm"],
      answer: "24 cm",
      explanation: `STEP 1: c² = a² + b² → 25² = 7² + x².\nSTEP 2: 625 = 49 + x² → x² = 625 − 49 = 576.\nSTEP 3: x = √576 = 24 cm.`
    },

    // 12
    {
      question: "A rectangular screen is 9 inches wide and 12 inches high. What is the length of its diagonal?",
      options: ["13 inches", "14 inches", "15 inches", "16 inches"],
      answer: "15 inches",
      explanation: `STEP 1: Diagonal forms a right triangle with sides 9 and 12.\nSTEP 2: d² = 9² + 12² = 81 + 144 = 225.\nSTEP 3: d = √225 = 15 inches.`
    },

    // 13
    {
      question: "A 10 m ladder leans against a wall. The foot of the ladder is 6 m from the wall. How high up the wall does the ladder reach?",
      options: ["6 m", "7 m", "8 m", "9 m"],
      answer: "8 m",
      explanation: `STEP 1: Ladder, wall, and ground form a right triangle.\nSTEP 2: h² + 6² = 10² → h² + 36 = 100.\nSTEP 3: h² = 64 → h = 8 m.`
    },

    // 14
    {
      question: "An isosceles triangle has two equal sides of 13 cm each and a perimeter of 34 cm. What is the length of the base?",
      options: ["6 cm", "8 cm", "10 cm", "12 cm"],
      answer: "8 cm",
      explanation: `STEP 1: Perimeter = 13 + 13 + base = 34.\nSTEP 2: 26 + base = 34.\nSTEP 3: base = 34 − 26 = 8 cm.`
    },

    // 15
    {
      question: "An equilateral triangle has a side length of 9 cm. What is its perimeter?",
      options: ["18 cm", "24 cm", "27 cm", "30 cm"],
      answer: "27 cm",
      explanation: `STEP 1: All sides are equal in an equilateral triangle.\nSTEP 2: Perimeter = 3 × side.\nSTEP 3: P = 3 × 9 = 27 cm.`
    },

    // 16
    {
      question: "A trapezoid has bases 8 cm and 14 cm, and the two non-parallel sides are each 5 cm. What is its perimeter?",
      options: ["28 cm", "30 cm", "32 cm", "34 cm"],
      answer: "32 cm",
      explanation: `STEP 1: Perimeter = sum of all sides.\nSTEP 2: P = 8 + 14 + 5 + 5.\nSTEP 3: P = 32 cm.`
    },

    // 17
    {
      question: "A trapezoid has bases 10 cm and 16 cm and a height of 7 cm. What is its area?",
      options: ["84 cm²", "91 cm²", "105 cm²", "112 cm²"],
      answer: "91 cm²",
      explanation: `STEP 1: A = ½(b₁ + b₂)h.\nSTEP 2: A = ½(10 + 16) × 7 = ½(26) × 7.\nSTEP 3: A = 13 × 7 = 91 cm².`
    },

    // 18
    {
      question: "A right triangle has a base of 20 cm and a hypotenuse of 29 cm. What is the height?",
      options: ["19 cm", "20 cm", "21 cm", "22 cm"],
      answer: "21 cm",
      explanation: `STEP 1: c² = a² + b² → 29² = 20² + h².\nSTEP 2: 841 = 400 + h² → h² = 441.\nSTEP 3: h = √441 = 21 cm.`
    },

    // 19
    {
      question: "What is the circumference of a circle with radius 7 cm? (Use π = 3.14)",
      options: ["38.48 cm", "43.96 cm", "44.00 cm", "46.50 cm"],
      answer: "43.96 cm",
      explanation: `STEP 1: C = 2πr.\nSTEP 2: C = 2 × 3.14 × 7 = 43.96.\nSTEP 3: So the circumference is 43.96 cm.`
    },

    // 20
    {
      question: "What is the area of a circle with radius 7 cm? (Use π = 3.14)",
      options: ["128.50 cm²", "140.00 cm²", "153.86 cm²", "160.00 cm²"],
      answer: "153.86 cm²",
      explanation: `STEP 1: A = πr².\nSTEP 2: A = 3.14 × 7² = 3.14 × 49 = 153.86.\nSTEP 3: So the area is 153.86 cm².`
    },

    // 21
    {
      question: "A circle has a diameter of 10 cm. What is its circumference? (Use π = 3.14)",
      options: ["25.12 cm", "28.26 cm", "31.40 cm", "34.20 cm"],
      answer: "31.40 cm",
      explanation: `STEP 1: C = πd.\nSTEP 2: C = 3.14 × 10 = 31.40 cm.\nSTEP 3: So the circumference is 31.40 cm.`
    },

    // 22
    {
      question: "A circular ring has an outer radius of 8 cm and an inner radius of 5 cm. What is the area of the ring? (Use π = 3.14)",
      options: ["96.24 cm²", "110.00 cm²", "122.46 cm²", "130.50 cm²"],
      answer: "122.46 cm²",
      explanation: `STEP 1: Area of ring = π(R² − r²).\nSTEP 2: = 3.14(8² − 5²) = 3.14(64 − 25) = 3.14 × 39.\nSTEP 3: Area ≈ 122.46 cm².`
    },

    // 23
    {
      question: "A circle has a circumference of 31.4 cm. What is its area? (Use π = 3.14)",
      options: ["62.80 cm²", "70.00 cm²", "78.50 cm²", "90.00 cm²"],
      answer: "78.50 cm²",
      explanation: `STEP 1: C = 2πr → 31.4 = 2 × 3.14 × r.\nSTEP 2: r = 31.4 ÷ 6.28 = 5 cm.\nSTEP 3: Area = πr² = 3.14 × 5² = 3.14 × 25 = 78.50 cm².`
    },

    // 24
    {
      question: "What is the area of a semicircle with radius 6 cm? (Use π = 3.14)",
      options: ["47.12 cm²", "56.52 cm²", "62.80 cm²", "75.36 cm²"],
      answer: "56.52 cm²",
      explanation: `STEP 1: Area of full circle = πr² = 3.14 × 6² = 3.14 × 36 = 113.04.\nSTEP 2: Semicircle area = ½ × 113.04.\nSTEP 3: Area = 56.52 cm².`
    },

    // 25
    {
      question: "What is the perimeter of a semicircle with radius 4 cm, including the diameter? (Use π = 3.14)",
      options: ["16.00 cm", "18.28 cm", "20.56 cm", "22.00 cm"],
      answer: "20.56 cm",
      explanation: `STEP 1: Curved part = πr = 3.14 × 4 = 12.56 cm.\nSTEP 2: Add diameter = 2r = 8 cm.\nSTEP 3: Perimeter = 12.56 + 8 = 20.56 cm.`
    },

    // 26
    {
      question: "A wheel has a radius of 0.5 m. If it makes 50 complete revolutions, how far does it travel? (Use π = 3.14)",
      options: ["78.5 m", "100 m", "157 m", "200 m"],
      answer: "157 m",
      explanation: `STEP 1: Circumference = 2πr = 2 × 3.14 × 0.5 = 3.14 m.\nSTEP 2: Distance = 50 × 3.14 = 157 m.\nSTEP 3: So the wheel travels 157 m.`
    },

    // 27
    {
      question: "A circular garden has a radius of 9 m. Fencing costs ₱200 per meter. How much will it cost to fence the garden? (Use π = 3.14)",
      options: ["₱10,000", "₱11,304", "₱12,000", "₱13,000"],
      answer: "₱11,304",
      explanation: `STEP 1: Circumference = 2πr = 2 × 3.14 × 9 = 56.52 m.\nSTEP 2: Cost = 56.52 × 200.\nSTEP 3: Cost = ₱11,304.`
    },

    // 28
    {
      question: "What is the area of a circle with radius 9 cm? (Use π = 3.14)",
      options: ["200.00 cm²", "225.00 cm²", "254.34 cm²", "260.00 cm²"],
      answer: "254.34 cm²",
      explanation: `STEP 1: A = πr².\nSTEP 2: A = 3.14 × 9² = 3.14 × 81.\nSTEP 3: Area ≈ 254.34 cm².`
    },

    // 29
    {
      question: "A rectangular prism has a length of 5 cm, width of 4 cm, and height of 3 cm. What is its volume?",
      options: ["40 cm³", "50 cm³", "60 cm³", "70 cm³"],
      answer: "60 cm³",
      explanation: `STEP 1: V = L × W × H.\nSTEP 2: V = 5 × 4 × 3.\nSTEP 3: V = 60 cm³.`
    },

    // 30
    {
      question: "A shipping box measures 10 cm by 8 cm by 5 cm. What is its volume?",
      options: ["300 cm³", "350 cm³", "400 cm³", "450 cm³"],
      answer: "400 cm³",
      explanation: `STEP 1: V = L × W × H.\nSTEP 2: V = 10 × 8 × 5.\nSTEP 3: V = 400 cm³.`
    },

    // 31
    {
      question: "A cube has an edge length of 6 cm. What is its volume?",
      options: ["96 cm³", "156 cm³", "196 cm³", "216 cm³"],
      answer: "216 cm³",
      explanation: `STEP 1: V = s³.\nSTEP 2: V = 6³ = 6 × 6 × 6.\nSTEP 3: V = 216 cm³.`
    },

    // 32
    {
      question: "A cube has a volume of 343 cm³. What is the length of each edge?",
      options: ["5 cm", "6 cm", "7 cm", "8 cm"],
      answer: "7 cm",
      explanation: `STEP 1: V = s³ = 343.\nSTEP 2: s = ³√343.\nSTEP 3: Since 7 × 7 × 7 = 343, s = 7 cm.`
    },

    // 33
    {
      question: "A cylindrical container has a radius of 3 cm and a height of 10 cm. What is its volume? (Use π = 3.14)",
      options: ["248.5 cm³", "282.6 cm³", "300.0 cm³", "314.0 cm³"],
      answer: "282.6 cm³",
      explanation: `STEP 1: V = πr²h.\nSTEP 2: V = 3.14 × 3² × 10 = 3.14 × 9 × 10.\nSTEP 3: V = 3.14 × 90 = 282.6 cm³.`
    },

    // 34
    {
      question: "A cylinder has a radius of 4 cm and a height of 8 cm. What is its volume? (Use π = 3.14)",
      options: ["320.00 cm³", "350.50 cm³", "401.92 cm³", "420.00 cm³"],
      answer: "401.92 cm³",
      explanation: `STEP 1: V = πr²h.\nSTEP 2: V = 3.14 × 4² × 8 = 3.14 × 16 × 8.\nSTEP 3: V = 3.14 × 128 = 401.92 cm³.`
    },

    // 35
    {
      question: "A cylindrical water tank has a radius of 5 m and a height of 7 m. What is its volume? (Use π = 3.14)",
      options: ["450.00 m³", "500.00 m³", "549.50 m³", "600.00 m³"],
      answer: "549.50 m³",
      explanation: `STEP 1: V = πr²h.\nSTEP 2: V = 3.14 × 5² × 7 = 3.14 × 25 × 7.\nSTEP 3: V = 3.14 × 175 = 549.50 m³.`
    },

    // 36
    {
      question: "A rectangular water tank measures 4 m by 3 m by 2 m. How many liters of water can it hold? (1 m³ = 1000 L)",
      options: ["12,000 L", "18,000 L", "20,000 L", "24,000 L"],
      answer: "24,000 L",
      explanation: `STEP 1: Volume = 4 × 3 × 2 = 24 m³.\nSTEP 2: 1 m³ = 1000 L.\nSTEP 3: Capacity = 24 × 1000 = 24,000 L.`
    },

    // 37
    {
      question: "A solid cube has an edge length of 4 m. What is the total surface area that must be painted?",
      options: ["64 m²", "80 m²", "96 m²", "100 m²"],
      answer: "96 m²",
      explanation: `STEP 1: Surface area of a cube = 6s².\nSTEP 2: SA = 6 × 4² = 6 × 16.\nSTEP 3: SA = 96 m².`
    },

    // 38
    {
      question: "A rectangular prism measures 10 cm by 6 cm by 4 cm. What is its total surface area?",
      options: ["196 cm²", "212 cm²", "224 cm²", "248 cm²"],
      answer: "248 cm²",
      explanation: `STEP 1: SA = 2(lw + lh + wh).\nSTEP 2: lw = 10 × 6 = 60, lh = 10 × 4 = 40, wh = 6 × 4 = 24.\nSTEP 3: SA = 2(60 + 40 + 24) = 2 × 124 = 248 cm².`
    },

    // 39
    {
      question: "A hall measures 6 m by 4.5 m. It is to be tiled with square tiles of side 30 cm. How many tiles are needed? (1 m = 100 cm)",
      options: ["150", "200", "250", "300"],
      answer: "300",
      explanation: `STEP 1: Convert dimensions: 6 m = 600 cm, 4.5 m = 450 cm.\nSTEP 2: Hall area = 600 × 450 = 270,000 cm².\nSTEP 3: Tile area = 30 × 30 = 900 cm², tiles = 270,000 ÷ 900 = 300.`
    },

    // 40
    {
      question: "A wooden beam has a rectangular cross-section 8 cm by 12 cm and is 3 m long. What is its volume in cubic centimeters? (1 m = 100 cm)",
      options: ["24,000 cm³", "26,400 cm³", "28,800 cm³", "32,000 cm³"],
      answer: "28,800 cm³",
      explanation: `STEP 1: Length = 3 m = 300 cm.\nSTEP 2: Volume = 8 × 12 × 300.\nSTEP 3: V = 96 × 300 = 28,800 cm³.`
    },

    // 41
    {
      question: "Rectangle A measures 4 cm by 6 cm. A similar rectangle B has a length of 10 cm. What is the area of rectangle B?",
      options: ["100 cm²", "120 cm²", "140 cm²", "150 cm²"],
      answer: "150 cm²",
      explanation: `STEP 1: Scale factor = 10 ÷ 4 = 2.5.\nSTEP 2: Width of B = 6 × 2.5 = 15 cm.\nSTEP 3: Area of B = 10 × 15 = 150 cm².`
    },

    // 42
    {
      question: "Two identical square tiles each have a side length of 6 cm. They are placed side by side to form a rectangle. What is the area of the rectangle?",
      options: ["60 cm²", "66 cm²", "72 cm²", "84 cm²"],
      answer: "72 cm²",
      explanation: `STEP 1: Each square area = 6 × 6 = 36 cm².\nSTEP 2: Total area = 36 + 36 = 72 cm².\nSTEP 3: So the rectangle’s area is 72 cm².`
    },

    // 43
    {
      question: "A rectangular field measures 50 m by 30 m. A river runs along one of the 50 m sides, so fencing is needed only for the other three sides. How many meters of fencing are required?",
      options: ["80 m", "90 m", "100 m", "110 m"],
      answer: "110 m",
      explanation: `STEP 1: Fence the opposite 50 m side and the two 30 m sides.\nSTEP 2: Total length = 50 + 30 + 30.\nSTEP 3: Fencing needed = 110 m.`
    },

    // 44
    {
      question: "A regular pentagon has a side length of 8 cm. What is its perimeter?",
      options: ["32 cm", "36 cm", "40 cm", "48 cm"],
      answer: "40 cm",
      explanation: `STEP 1: A regular pentagon has 5 equal sides.\nSTEP 2: Perimeter = 5 × side.\nSTEP 3: P = 5 × 8 = 40 cm.`
    },

    // 45
    {
      question: "A rectangular field measures 40 m by 20 m. It is divided into two equal smaller rectangles by a fence parallel to the 40 m side. What is the length of the fence inside?",
      options: ["20 m", "30 m", "40 m", "60 m"],
      answer: "40 m",
      explanation: `STEP 1: The fence is parallel to the 40 m side.\nSTEP 2: So the dividing fence has length 40 m.\nSTEP 3: Fence length = 40 m.`
    },

    // 46
    {
      question: "The side of a square lot increases from 5 m to 8 m. By how many square meters does its area increase?",
      options: ["21 m²", "30 m²", "39 m²", "45 m²"],
      answer: "39 m²",
      explanation: `STEP 1: Original area = 5 × 5 = 25 m².\nSTEP 2: New area = 8 × 8 = 64 m².\nSTEP 3: Increase = 64 − 25 = 39 m².`
    },

    // 47
    {
      question: "A right triangle has legs of 8 cm and 15 cm. What is its area?",
      options: ["50 cm²", "56 cm²", "60 cm²", "64 cm²"],
      answer: "60 cm²",
      explanation: `STEP 1: A = ½ × base × height.\nSTEP 2: A = ½ × 8 × 15 = 4 × 15.\nSTEP 3: Area = 60 cm².`
    },

    // 48
    {
      question: "A rectangle has a perimeter of 48 cm and a width of 10 cm. What is its area?",
      options: ["120 cm²", "130 cm²", "140 cm²", "150 cm²"],
      answer: "140 cm²",
      explanation: `STEP 1: P = 2(L + W) → 48 = 2(L + 10).\nSTEP 2: 24 = L + 10 → L = 14 cm.\nSTEP 3: Area = L × W = 14 × 10 = 140 cm².`
    },

    // 49
    {
      question: "A cylinder has a radius of 3 cm and a volume of 141.3 cm³. What is its height? (Use π = 3.14)",
      options: ["3 cm", "4 cm", "5 cm", "6 cm"],
      answer: "5 cm",
      explanation: `STEP 1: V = πr²h → 141.3 = 3.14 × 3² × h.\nSTEP 2: 3² = 9, so 141.3 = 3.14 × 9 × h = 28.26h.\nSTEP 3: h = 141.3 ÷ 28.26 = 5 cm.`
    },

    // 50
    {
      question: "A rectangle has a diagonal of 25 cm and a width of 7 cm. What is its length?",
      options: ["20 cm", "21 cm", "23 cm", "24 cm"],
      answer: "24 cm",
      explanation: `STEP 1: Diagonal, length, and width form a right triangle.\nSTEP 2: 25² = L² + 7² → 625 = L² + 49.\nSTEP 3: L² = 576 → L = √576 = 24 cm.`
    }
  ],

