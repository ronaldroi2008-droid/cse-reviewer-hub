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

  // ==========================================
// LEVEL 3: ADVANCED (50 items – Composite & 3D Geometry)
// ==========================================
advanced: [
  {
    question: "A rectangular garden is 18 m long and 12 m wide. A path 1.5 m wide is built all around the inside of the garden. What is the area of the path?",
    options: ["72 m²", "81 m²", "90 m²", "96 m²"],
    answer: "81 m²",
    explanation: "STEP 1: Outer area = 18 m × 12 m = 216 m².\nSTEP 2: Inner dimensions = (18 − 2×1.5) m by (12 − 2×1.5) m = 15 m × 9 m.\nSTEP 3: Inner area = 15 m × 9 m = 135 m².\nSTEP 4: Area of path = Outer area − Inner area = 216 − 135 = 81 m²."
  },
  {
    question: "A right triangle has legs 9 cm and 12 cm. What is its perimeter?",
    options: ["30 cm", "32 cm", "34 cm", "36 cm"],
    answer: "36 cm",
    explanation: "STEP 1: Use Pythagorean theorem to find the hypotenuse.\nHypotenuse² = 9² + 12² = 81 + 144 = 225.\nSTEP 2: Hypotenuse = √225 = 15 cm.\nSTEP 3: Perimeter = 9 + 12 + 15 = 36 cm."
  },
  {
    question: "The diagonal of a rectangle is 10 cm and one side is 6 cm. What is the area of the rectangle?",
    options: ["36 cm²", "40 cm²", "48 cm²", "56 cm²"],
    answer: "48 cm²",
    explanation: "STEP 1: Let the unknown side be x.\nSTEP 2: By Pythagorean theorem: 6² + x² = 10² ⇒ 36 + x² = 100.\nSTEP 3: x² = 64 ⇒ x = 8 cm.\nSTEP 4: Area = 6 cm × 8 cm = 48 cm²."
  },
  {
    question: "Two squares have areas 49 cm² and 121 cm². What is the difference between their perimeters?",
    options: ["12 cm", "14 cm", "16 cm", "18 cm"],
    answer: "16 cm",
    explanation: "STEP 1: Side of first square = √49 = 7 cm; perimeter = 4×7 = 28 cm.\nSTEP 2: Side of second square = √121 = 11 cm; perimeter = 4×11 = 44 cm.\nSTEP 3: Difference = 44 − 28 = 16 cm."
  },
  {
    question: "An equilateral triangle has side length 8 cm. Using √3 ≈ 1.73, what is its area?",
    options: ["24.0 cm²", "26.5 cm²", "27.7 cm²", "30.0 cm²"],
    answer: "27.7 cm²",
    explanation: "STEP 1: Area of an equilateral triangle = (√3 / 4) a².\nSTEP 2: a = 8 cm ⇒ a² = 64.\nSTEP 3: Area ≈ (1.73 / 4) × 64 = 1.73 × 16 ≈ 27.7 cm²."
  },
  {
    question: "The area of a parallelogram is 180 cm² and its height is 12 cm. What is the length of its base?",
    options: ["10 cm", "12 cm", "15 cm", "18 cm"],
    answer: "15 cm",
    explanation: "STEP 1: Area of a parallelogram = base × height.\nSTEP 2: 180 = base × 12 ⇒ base = 180 ÷ 12 = 15 cm."
  },
  {
    question: "The base of a triangle is 16 cm and its area is 96 cm². What is the height of the triangle?",
    options: ["10 cm", "11 cm", "12 cm", "13 cm"],
    answer: "12 cm",
    explanation: "STEP 1: Area of a triangle = ½ × base × height.\nSTEP 2: 96 = ½ × 16 × height ⇒ 96 = 8 × height.\nSTEP 3: Height = 96 ÷ 8 = 12 cm."
  },
  {
    question: "The diagonal of a square is 10√2 cm. What is the area of the square?",
    options: ["50 cm²", "75 cm²", "100 cm²", "125 cm²"],
    answer: "100 cm²",
    explanation: "STEP 1: For a square, diagonal d and side s are related by d = s√2.\nSTEP 2: 10√2 = s√2 ⇒ s = 10 cm.\nSTEP 3: Area = s² = 10² = 100 cm²."
  },
  {
    question: "A rhombus has diagonals measuring 10 cm and 24 cm. What is its area?",
    options: ["100 cm²", "110 cm²", "120 cm²", "130 cm²"],
    answer: "120 cm²",
    explanation: "STEP 1: Area of a rhombus = ½ × d₁ × d₂.\nSTEP 2: Area = ½ × 10 × 24 = 5 × 24 = 120 cm²."
  },
  {
    question: "An isosceles triangle has a base of 10 cm and equal sides of 13 cm each. What is its area?",
    options: ["48 cm²", "52 cm²", "60 cm²", "65 cm²"],
    answer: "60 cm²",
    explanation: "STEP 1: Draw a height from the vertex to the base; it bisects the base.\nSTEP 2: Each half of the base = 10 ÷ 2 = 5 cm.\nSTEP 3: Use Pythagorean theorem for the right triangle: height² = 13² − 5² = 169 − 25 = 144.\nSTEP 4: Height = √144 = 12 cm.\nSTEP 5: Area = ½ × base × height = ½ × 10 × 12 = 60 cm²."
  },
  {
    question: "A circle has a radius of 7 cm. Using π = 22/7, what is its circumference?",
    options: ["38 cm", "40 cm", "42 cm", "44 cm"],
    answer: "44 cm",
    explanation: "STEP 1: Circumference of a circle = 2πr.\nSTEP 2: Using π = 22/7 and r = 7 cm:\nCircumference = 2 × (22/7) × 7 = 2 × 22 = 44 cm."
  },
  {
    question: "Using π = 22/7, what is the area of a circle with radius 7 cm?",
    options: ["132 cm²", "144 cm²", "154 cm²", "176 cm²"],
    answer: "154 cm²",
    explanation: "STEP 1: Area of a circle = πr².\nSTEP 2: r = 7 cm ⇒ r² = 49.\nSTEP 3: Area = (22/7) × 49 = 22 × 7 = 154 cm²."
  },
  {
    question: "A circular ring (annulus) has an outer radius of 14 cm and an inner radius of 7 cm. Using π = 22/7, what is the area of the ring?",
    options: ["308 cm²", "420 cm²", "462 cm²", "528 cm²"],
    answer: "462 cm²",
    explanation: "STEP 1: Area of ring = π(R² − r²).\nSTEP 2: R = 14 cm, r = 7 cm ⇒ R² − r² = 196 − 49 = 147.\nSTEP 3: Area = (22/7) × 147 = 22 × 21 = 462 cm²."
  },
  {
    question: "A sector of a circle has radius 7 cm and central angle 90°. Using π = 22/7, what is the area of the sector?",
    options: ["28.5 cm²", "35.0 cm²", "38.5 cm²", "42.0 cm²"],
    answer: "38.5 cm²",
    explanation: "STEP 1: Area of a sector = (θ / 360°) × πr².\nSTEP 2: θ = 90°, r = 7 ⇒ (90/360) = 1/4.\nSTEP 3: Area = ¼ × (22/7) × 49 = ¼ × 154 = 38.5 cm²."
  },
  {
    question: "Using π = 22/7, what is the length of the arc of a sector with radius 7 cm and central angle 90°?",
    options: ["9.5 cm", "10.5 cm", "11.0 cm", "12.5 cm"],
    answer: "11.0 cm",
    explanation: "STEP 1: Arc length = (θ / 360°) × 2πr.\nSTEP 2: θ = 90°, r = 7 ⇒ fraction = 1/4.\nSTEP 3: Arc length = ¼ × 2 × (22/7) × 7 = ¼ × 44 = 11.0 cm."
  },
  {
    question: "A semicircle has radius 21 cm. Using π = 22/7, what is its area?",
    options: ["588 cm²", "630 cm²", "693 cm²", "726 cm²"],
    answer: "693 cm²",
    explanation: "STEP 1: Area of a semicircle = ½ × πr².\nSTEP 2: r = 21 cm ⇒ r² = 441.\nSTEP 3: πr² = (22/7) × 441 = 22 × 63 = 1386.\nSTEP 4: Semicircle area = ½ × 1386 = 693 cm²."
  },
  {
    question: "A quarter circle has radius 14 cm. Using π = 22/7, what is its area?",
    options: ["132 cm²", "140 cm²", "154 cm²", "176 cm²"],
    answer: "154 cm²",
    explanation: "STEP 1: Area of a quarter circle = ¼ × πr².\nSTEP 2: r = 14 cm ⇒ r² = 196.\nSTEP 3: Area = ¼ × (22/7) × 196 = ¼ × 616 = 154 cm²."
  },
  {
    question: "A circle is inscribed in a square of side 14 cm. Using π = 22/7, what is the area of the shaded region between the square and the circle?",
    options: ["28 cm²", "36 cm²", "42 cm²", "48 cm²"],
    answer: "42 cm²",
    explanation: "STEP 1: Area of the square = 14 × 14 = 196 cm².\nSTEP 2: Radius of the inscribed circle = 14 ÷ 2 = 7 cm.\nSTEP 3: Area of circle = (22/7) × 49 = 154 cm².\nSTEP 4: Shaded area = 196 − 154 = 42 cm²."
  },
  {
    question: "Two circles have radii 7 cm and 14 cm. What is the ratio of their areas?",
    options: ["1 : 2", "1 : 3", "1 : 4", "1 : 5"],
    answer: "1 : 4",
    explanation: "STEP 1: Area of a circle is proportional to the square of its radius.\nSTEP 2: Radii are 7 and 14 ⇒ ratio of radii = 1 : 2.\nSTEP 3: Ratio of areas = 1² : 2² = 1 : 4."
  },
  {
    question: "A circular track has an outer radius of 21 m and an inner radius of 14 m. Using π = 22/7, what is the area of the track?",
    options: ["660 m²", "704 m²", "770 m²", "840 m²"],
    answer: "770 m²",
    explanation: "STEP 1: Area of track = π(R² − r²).\nSTEP 2: R = 21 m, r = 14 m ⇒ R² − r² = 441 − 196 = 245.\nSTEP 3: Area = (22/7) × 245 = 22 × 35 = 770 m²."
  },
  {
    question: "A rectangular prism (box) has length 8 cm, width 5 cm, and height 10 cm. What is its total surface area?",
    options: ["300 cm²", "320 cm²", "340 cm²", "360 cm²"],
    answer: "340 cm²",
    explanation: "STEP 1: Surface area of a rectangular prism = 2(lw + lh + wh).\nSTEP 2: lw = 8×5 = 40, lh = 8×10 = 80, wh = 5×10 = 50.\nSTEP 3: Sum = 40 + 80 + 50 = 170.\nSTEP 4: Surface area = 2 × 170 = 340 cm²."
  },
  {
    question: "A cube has side length 6 cm. What is its volume?",
    options: ["126 cm³", "180 cm³", "216 cm³", "256 cm³"],
    answer: "216 cm³",
    explanation: "STEP 1: Volume of a cube = s³.\nSTEP 2: s = 6 cm ⇒ Volume = 6³ = 216 cm³."
  },
  {
    question: "A cylinder has radius 7 cm and height 10 cm. Using π = 22/7, what is its volume?",
    options: ["1320 cm³", "1430 cm³", "1540 cm³", "1650 cm³"],
    answer: "1540 cm³",
    explanation: "STEP 1: Volume of a cylinder = πr²h.\nSTEP 2: r = 7 cm ⇒ r² = 49; h = 10 cm.\nSTEP 3: Volume = (22/7) × 49 × 10 = 22 × 70 = 1540 cm³."
  },
  {
    question: "Using π = 22/7, what is the curved surface area of a cylinder with radius 7 cm and height 10 cm?",
    options: ["380 cm²", "400 cm²", "420 cm²", "440 cm²"],
    answer: "440 cm²",
    explanation: "STEP 1: Curved surface area of a cylinder = 2πrh.\nSTEP 2: r = 7 cm, h = 10 cm.\nSTEP 3: CSA = 2 × (22/7) × 7 × 10 = 2 × 22 × 10 = 440 cm²."
  },
  {
    question: "A right circular cone has radius 7 cm and height 24 cm. Using π = 22/7, what is its curved surface area?",
    options: ["450 cm²", "500 cm²", "520 cm²", "550 cm²"],
    answer: "550 cm²",
    explanation: "STEP 1: Curved surface area = πrl, where l is the slant height.\nSTEP 2: l = √(r² + h²) = √(7² + 24²) = √(49 + 576) = √625 = 25 cm.\nSTEP 3: CSA = (22/7) × 7 × 25 = 22 × 25 = 550 cm²."
  },
  {
    question: "Using π = 22/7, what is the volume of a right circular cone with radius 7 cm and height 24 cm?",
    options: ["1024 cm³", "1120 cm³", "1232 cm³", "1320 cm³"],
    answer: "1232 cm³",
    explanation: "STEP 1: Volume of a cone = ⅓πr²h.\nSTEP 2: r = 7 cm ⇒ r² = 49; h = 24 cm.\nSTEP 3: Volume = ⅓ × (22/7) × 49 × 24 = 1232 cm³."
  },
  {
    question: "A sphere has radius 3 cm. Using π = 22/7, what is its volume (rounded to one decimal place)?",
    options: ["98.2 cm³", "104.5 cm³", "113.1 cm³", "120.0 cm³"],
    answer: "113.1 cm³",
    explanation: "STEP 1: Volume of a sphere = ⁴⁄₃πr³.\nSTEP 2: r = 3 cm ⇒ r³ = 27.\nSTEP 3: Volume ≈ ⁴⁄₃ × (22/7) × 27 ≈ 113.1 cm³ (to one decimal place)."
  },
  {
    question: "A solid figure is made of a cylinder of radius 7 cm and height 10 cm with a hemisphere of the same radius on top. Using π = 22/7, what is the total volume of the solid (rounded to one decimal place)?",
    options: ["2050.3 cm³", "2145.6 cm³", "2258.7 cm³", "2330.5 cm³"],
    answer: "2258.7 cm³",
    explanation: "STEP 1: Volume of solid = Volume of cylinder + Volume of hemisphere.\nSTEP 2: Cylinder volume = (22/7) × 7² × 10 = 1540 cm³.\nSTEP 3: Hemisphere volume = ½ × ⁴⁄₃πr³ = ⅔πr³ ≈ ⅔ × (22/7) × 7³ ≈ 718.7 cm³.\nSTEP 4: Total volume ≈ 1540 + 718.7 = 2258.7 cm³ (rounded to one decimal place)."
  },
  {
    question: "Two cylinders have equal heights, but the radius of the second is three times the radius of the first. What is the ratio of their volumes?",
    options: ["1 : 2", "1 : 3", "1 : 6", "1 : 9"],
    answer: "1 : 9",
    explanation: "STEP 1: Volume of a cylinder is proportional to r²h.\nSTEP 2: If radii are r and 3r and heights are equal, volume ratio = r² : (3r)² = r² : 9r².\nSTEP 3: Simplified ratio = 1 : 9."
  },
  {
    question: "A cylindrical water tank has radius 4 m and height 10 m. If the water level is only 6 m high, and using π = 3.14, what is the volume of water in the tank?",
    options: ["251.2 m³", "301.4 m³", "314.0 m³", "340.5 m³"],
    answer: "301.4 m³",
    explanation: "STEP 1: Volume of water = πr²h, where h = 6 m.\nSTEP 2: r = 4 m ⇒ r² = 16.\nSTEP 3: Volume ≈ 3.14 × 16 × 6 = 3.14 × 96 ≈ 301.4 m³."
  },
  {
    question: "Two right triangles are similar. The smaller triangle has legs 6 cm and 8 cm. The larger triangle has the shorter leg 9 cm. What is the length of the longer leg of the larger triangle?",
    options: ["10 cm", "11 cm", "12 cm", "13 cm"],
    answer: "12 cm",
    explanation: "STEP 1: For the smaller triangle, legs are 6 cm and 8 cm.\nSTEP 2: Scale factor from smaller to larger = 9 ÷ 6 = 1.5.\nSTEP 3: Longer leg of larger triangle = 8 × 1.5 = 12 cm."
  },
  {
    question: "The sides of two similar triangles are in the ratio 2 : 5. What is the ratio of their areas?",
    options: ["2 : 5", "4 : 10", "4 : 25", "5 : 12"],
    answer: "4 : 25",
    explanation: "STEP 1: For similar figures, ratio of areas = (ratio of corresponding sides)².\nSTEP 2: (2 : 5)² = 2² : 5² = 4 : 25."
  },
  {
    question: "Two similar rectangles have a scale factor of 3 : 2 (larger to smaller). If the area of the smaller rectangle is 40 cm², what is the area of the larger rectangle?",
    options: ["60 cm²", "80 cm²", "90 cm²", "100 cm²"],
    answer: "90 cm²",
    explanation: "STEP 1: Scale factor of sides (larger : smaller) = 3 : 2.\nSTEP 2: Scale factor of areas = (3 : 2)² = 9 : 4.\nSTEP 3: If smaller area is 40 cm², larger area = 40 × (9/4) = 40 × 2.25 = 90 cm²."
  },
  {
    question: "On a map, the scale is 1 : 50,000. If the distance between two towns on the map is 3.2 cm, what is the actual distance between them in kilometers?",
    options: ["0.16 km", "1.6 km", "16 km", "160 km"],
    answer: "1.6 km",
    explanation: "STEP 1: Scale 1 : 50,000 means 1 cm on the map = 50,000 cm in reality.\nSTEP 2: Actual distance = 3.2 × 50,000 = 160,000 cm.\nSTEP 3: Convert to meters: 160,000 cm ÷ 100 = 1,600 m.\nSTEP 4: Convert to kilometers: 1,600 m ÷ 1,000 = 1.6 km."
  },
  {
    question: "A triangle has base 18 cm and height 9 cm. A second triangle is similar to the first and has a base of 12 cm. What is the area of the smaller triangle?",
    options: ["30 cm²", "36 cm²", "40 cm²", "45 cm²"],
    answer: "36 cm²",
    explanation: "STEP 1: Area of the first triangle = ½ × 18 × 9 = 81 cm².\nSTEP 2: Scale factor of bases (smaller : larger) = 12 : 18 = 2 : 3.\nSTEP 3: Scale factor of areas = (2 : 3)² = 4 : 9.\nSTEP 4: Smaller area = 81 × (4/9) = 81 × (4 ÷ 9) = 9 × 4 = 36 cm²."
  },
  {
    question: "In the coordinate plane, a triangle has vertices A(0, 0), B(4, 0), and C(4, 3). What is the area of the triangle?",
    options: ["4 cm²", "5 cm²", "6 cm²", "7 cm²"],
    answer: "6 cm²",
    explanation: "STEP 1: The triangle is right-angled at B.\nSTEP 2: Base AB = 4 units; height from C to AB = 3 units.\nSTEP 3: Area = ½ × base × height = ½ × 4 × 3 = 6 square units."
  },
  {
    question: "In the coordinate plane, what is the distance between the points P(2, 3) and Q(8, 12)? (Round to one decimal place.)",
    options: ["9.2 units", "10.0 units", "10.8 units", "11.5 units"],
    answer: "10.8 units",
    explanation: "STEP 1: Use the distance formula: d = √[(x₂ − x₁)² + (y₂ − y₁)²].\nSTEP 2: d = √[(8 − 2)² + (12 − 3)²] = √[6² + 9²] = √[36 + 81] = √117.\nSTEP 3: √117 ≈ 10.8 units (to one decimal place)."
  },
  {
    question: "What is the slope of the line passing through the points (1, 2) and (5, 10)?",
    options: ["1", "1.5", "2", "2.5"],
    answer: "2",
    explanation: "STEP 1: Slope m = (y₂ − y₁) ÷ (x₂ − x₁).\nSTEP 2: m = (10 − 2) ÷ (5 − 1) = 8 ÷ 4 = 2."
  },
  {
    question: "The perimeter of a rectangle is 38 m. The length is 3 m more than the width. What is the area of the rectangle?",
    options: ["72 m²", "80 m²", "88 m²", "96 m²"],
    answer: "88 m²",
    explanation: "STEP 1: Let the width be x m; then length = x + 3 m.\nSTEP 2: Perimeter = 2(length + width) = 2[(x + 3) + x] = 38.\nSTEP 3: Simplify: 2(2x + 3) = 38 ⇒ 2x + 3 = 19 ⇒ 2x = 16 ⇒ x = 8.\nSTEP 4: Width = 8 m, length = 11 m.\nSTEP 5: Area = 8 × 11 = 88 m²."
  },
  {
    question: "The three interior angles of a triangle are in the ratio 2 : 3 : 4. What is the measure of the largest angle?",
    options: ["60°", "70°", "80°", "90°"],
    answer: "80°",
    explanation: "STEP 1: Let the angles be 2k, 3k, and 4k.\nSTEP 2: Sum of angles in a triangle = 180°.\nSTEP 3: 2k + 3k + 4k = 9k = 180° ⇒ k = 20°.\nSTEP 4: Largest angle = 4k = 4 × 20° = 80°."
  },
  {
    question: "The exterior angle of a triangle is 120°. The two remote interior angles are x° and (x + 20)°. What is the value of x?",
    options: ["40°", "45°", "50°", "55°"],
    answer: "50°",
    explanation: "STEP 1: An exterior angle of a triangle equals the sum of the two remote interior angles.\nSTEP 2: 120° = x + (x + 20°) = 2x + 20°.\nSTEP 3: 2x + 20° = 120° ⇒ 2x = 100° ⇒ x = 50°."
  },
  {
    question: "Each interior angle of a regular polygon measures 150°. How many sides does the polygon have?",
    options: ["10", "11", "12", "13"],
    answer: "12",
    explanation: "STEP 1: For a regular n-sided polygon, each interior angle = [(n − 2) × 180°] ÷ n.\nSTEP 2: 150° = [(n − 2) × 180°] ÷ n.\nSTEP 3: 150n = 180n − 360 ⇒ 30n = 360 ⇒ n = 12.\nSTEP 4: The polygon has 12 sides."
  },
  {
    question: "The sum of the interior angles of a polygon is 1,980°. How many sides does the polygon have?",
    options: ["11", "12", "13", "14"],
    answer: "13",
    explanation: "STEP 1: Sum of interior angles of an n-sided polygon = (n − 2) × 180°.\nSTEP 2: (n − 2) × 180° = 1,980°.\nSTEP 3: n − 2 = 1,980° ÷ 180° = 11 ⇒ n = 11 + 2 = 13.\nSTEP 4: The polygon has 13 sides."
  },
  {
    question: "Each exterior angle of a regular polygon measures 24°. How many sides does the polygon have?",
    options: ["12", "14", "15", "18"],
    answer: "15",
    explanation: "STEP 1: Sum of all exterior angles of any convex polygon is 360°.\nSTEP 2: For a regular polygon, each exterior angle = 360° ÷ n.\nSTEP 3: 24° = 360° ÷ n ⇒ n = 360° ÷ 24° = 15.\nSTEP 4: The polygon has 15 sides."
  },
  {
    question: "A trapezoid has bases of 10 cm and 16 cm and a height of 7 cm. What is its area?",
    options: ["84 cm²", "88 cm²", "91 cm²", "96 cm²"],
    answer: "91 cm²",
    explanation: "STEP 1: Area of a trapezoid = ½ × (sum of bases) × height.\nSTEP 2: Sum of bases = 10 + 16 = 26 cm.\nSTEP 3: Area = ½ × 26 × 7 = 13 × 7 = 91 cm²."
  },
  {
    question: "In the trapezoid from the previous question (bases 10 cm and 16 cm), what is the length of the median (segment joining the midpoints of the legs)?",
    options: ["11 cm", "12 cm", "13 cm", "14 cm"],
    answer: "13 cm",
    explanation: "STEP 1: The median of a trapezoid has length equal to the average of the two bases.\nSTEP 2: Median = (10 + 16) ÷ 2 = 26 ÷ 2 = 13 cm."
  },
  {
    question: "A rhombus has side length 13 cm and one diagonal of length 10 cm. What is the length of the other diagonal?",
    options: ["20 cm", "22 cm", "24 cm", "26 cm"],
    answer: "24 cm",
    explanation: "STEP 1: Diagonals of a rhombus are perpendicular bisectors of each other.\nSTEP 2: Half of the known diagonal = 10 ÷ 2 = 5 cm.\nSTEP 3: Each side of the rhombus forms a right triangle with half of each diagonal as legs.\nSTEP 4: Let half of the unknown diagonal be x.\nThen: x² + 5² = 13² ⇒ x² + 25 = 169 ⇒ x² = 144 ⇒ x = 12 cm.\nSTEP 5: Full diagonal = 2x = 2 × 12 = 24 cm."
  },
  {
    question: "A rectangle has one side measuring 7 cm and a diagonal measuring 25 cm. What is the area of the rectangle?",
    options: ["140 cm²", "154 cm²", "160 cm²", "168 cm²"],
    answer: "168 cm²",
    explanation: "STEP 1: Let the unknown side be x.\nSTEP 2: By Pythagorean theorem: 7² + x² = 25² ⇒ 49 + x² = 625.\nSTEP 3: x² = 576 ⇒ x = 24 cm.\nSTEP 4: Area = 7 × 24 = 168 cm²."
  },
  {
    question: "A rectangular floor measures 8 m by 6 m. It is to be covered with square tiles, each of side 0.4 m. How many tiles are needed to cover the floor (without gaps or overlaps)?",
    options: ["240", "260", "280", "300"],
    answer: "300",
    explanation: "STEP 1: Area of the floor = 8 × 6 = 48 m².\nSTEP 2: Area of one tile = 0.4 × 0.4 = 0.16 m².\nSTEP 3: Number of tiles = Floor area ÷ Tile area = 48 ÷ 0.16 = 300."
  },
  {
    question: "The four walls of a rectangular room are to be painted. The room is 5 m long, 4 m wide, and 3 m high. A door of 2 m by 1 m and a window of 1.5 m by 1.2 m will not be painted. What is the total area to be painted on the walls?",
    options: ["46.2 m²", "48.5 m²", "50.2 m²", "52.0 m²"],
    answer: "50.2 m²",
    explanation: "STEP 1: Total area of four walls = Perimeter of room × height.\nSTEP 2: Perimeter = 2(5 + 4) = 18 m; height = 3 m.\nSTEP 3: Wall area = 18 × 3 = 54 m².\nSTEP 4: Area of door = 2 × 1 = 2 m²; area of window = 1.5 × 1.2 = 1.8 m².\nSTEP 5: Total area not painted = 2 + 1.8 = 3.8 m².\nSTEP 6: Area to be painted = 54 − 3.8 = 50.2 m²."
  }
],


// ==========================================
// LEVEL 3: ADVANCED (50 items – Composite & 3D Geometry)
// ==========================================
advanced: [
  {
    question: "A rectangular garden is 18 m long and 12 m wide. A path 1.5 m wide is built all around the inside of the garden. What is the area of the path?",
    options: ["72 m²", "81 m²", "90 m²", "96 m²"],
    answer: "81 m²",
    explanation: "STEP 1: Outer area = 18 m × 12 m = 216 m².\nSTEP 2: Inner dimensions = (18 − 2×1.5) m by (12 − 2×1.5) m = 15 m × 9 m.\nSTEP 3: Inner area = 15 m × 9 m = 135 m².\nSTEP 4: Area of path = Outer area − Inner area = 216 − 135 = 81 m²."
  },
  {
    question: "A right triangle has legs 9 cm and 12 cm. What is its perimeter?",
    options: ["30 cm", "32 cm", "34 cm", "36 cm"],
    answer: "36 cm",
    explanation: "STEP 1: Use Pythagorean theorem to find the hypotenuse.\nHypotenuse² = 9² + 12² = 81 + 144 = 225.\nSTEP 2: Hypotenuse = √225 = 15 cm.\nSTEP 3: Perimeter = 9 + 12 + 15 = 36 cm."
  },
  {
    question: "The diagonal of a rectangle is 10 cm and one side is 6 cm. What is the area of the rectangle?",
    options: ["36 cm²", "40 cm²", "48 cm²", "56 cm²"],
    answer: "48 cm²",
    explanation: "STEP 1: Let the unknown side be x.\nSTEP 2: By Pythagorean theorem: 6² + x² = 10² ⇒ 36 + x² = 100.\nSTEP 3: x² = 64 ⇒ x = 8 cm.\nSTEP 4: Area = 6 cm × 8 cm = 48 cm²."
  },
  {
    question: "Two squares have areas 49 cm² and 121 cm². What is the difference between their perimeters?",
    options: ["12 cm", "14 cm", "16 cm", "18 cm"],
    answer: "16 cm",
    explanation: "STEP 1: Side of first square = √49 = 7 cm; perimeter = 4×7 = 28 cm.\nSTEP 2: Side of second square = √121 = 11 cm; perimeter = 4×11 = 44 cm.\nSTEP 3: Difference = 44 − 28 = 16 cm."
  },
  {
    question: "An equilateral triangle has side length 8 cm. Using √3 ≈ 1.73, what is its area?",
    options: ["24.0 cm²", "26.5 cm²", "27.7 cm²", "30.0 cm²"],
    answer: "27.7 cm²",
    explanation: "STEP 1: Area of an equilateral triangle = (√3 / 4) a².\nSTEP 2: a = 8 cm ⇒ a² = 64.\nSTEP 3: Area ≈ (1.73 / 4) × 64 = 1.73 × 16 ≈ 27.7 cm²."
  },
  {
    question: "The area of a parallelogram is 180 cm² and its height is 12 cm. What is the length of its base?",
    options: ["10 cm", "12 cm", "15 cm", "18 cm"],
    answer: "15 cm",
    explanation: "STEP 1: Area of a parallelogram = base × height.\nSTEP 2: 180 = base × 12 ⇒ base = 180 ÷ 12 = 15 cm."
  },
  {
    question: "The base of a triangle is 16 cm and its area is 96 cm². What is the height of the triangle?",
    options: ["10 cm", "11 cm", "12 cm", "13 cm"],
    answer: "12 cm",
    explanation: "STEP 1: Area of a triangle = ½ × base × height.\nSTEP 2: 96 = ½ × 16 × height ⇒ 96 = 8 × height.\nSTEP 3: Height = 96 ÷ 8 = 12 cm."
  },
  {
    question: "The diagonal of a square is 10√2 cm. What is the area of the square?",
    options: ["50 cm²", "75 cm²", "100 cm²", "125 cm²"],
    answer: "100 cm²",
    explanation: "STEP 1: For a square, diagonal d and side s are related by d = s√2.\nSTEP 2: 10√2 = s√2 ⇒ s = 10 cm.\nSTEP 3: Area = s² = 10² = 100 cm²."
  },
  {
    question: "A rhombus has diagonals measuring 10 cm and 24 cm. What is its area?",
    options: ["100 cm²", "110 cm²", "120 cm²", "130 cm²"],
    answer: "120 cm²",
    explanation: "STEP 1: Area of a rhombus = ½ × d₁ × d₂.\nSTEP 2: Area = ½ × 10 × 24 = 5 × 24 = 120 cm²."
  },
  {
    question: "An isosceles triangle has a base of 10 cm and equal sides of 13 cm each. What is its area?",
    options: ["48 cm²", "52 cm²", "60 cm²", "65 cm²"],
    answer: "60 cm²",
    explanation: "STEP 1: Draw a height from the vertex to the base; it bisects the base.\nSTEP 2: Each half of the base = 10 ÷ 2 = 5 cm.\nSTEP 3: Use Pythagorean theorem for the right triangle: height² = 13² − 5² = 169 − 25 = 144.\nSTEP 4: Height = √144 = 12 cm.\nSTEP 5: Area = ½ × base × height = ½ × 10 × 12 = 60 cm²."
  },
  {
    question: "A circle has a radius of 7 cm. Using π = 22/7, what is its circumference?",
    options: ["38 cm", "40 cm", "42 cm", "44 cm"],
    answer: "44 cm",
    explanation: "STEP 1: Circumference of a circle = 2πr.\nSTEP 2: Using π = 22/7 and r = 7 cm:\nCircumference = 2 × (22/7) × 7 = 2 × 22 = 44 cm."
  },
  {
    question: "Using π = 22/7, what is the area of a circle with radius 7 cm?",
    options: ["132 cm²", "144 cm²", "154 cm²", "176 cm²"],
    answer: "154 cm²",
    explanation: "STEP 1: Area of a circle = πr².\nSTEP 2: r = 7 cm ⇒ r² = 49.\nSTEP 3: Area = (22/7) × 49 = 22 × 7 = 154 cm²."
  },
  {
    question: "A circular ring (annulus) has an outer radius of 14 cm and an inner radius of 7 cm. Using π = 22/7, what is the area of the ring?",
    options: ["308 cm²", "420 cm²", "462 cm²", "528 cm²"],
    answer: "462 cm²",
    explanation: "STEP 1: Area of ring = π(R² − r²).\nSTEP 2: R = 14 cm, r = 7 cm ⇒ R² − r² = 196 − 49 = 147.\nSTEP 3: Area = (22/7) × 147 = 22 × 21 = 462 cm²."
  },
  {
    question: "A sector of a circle has radius 7 cm and central angle 90°. Using π = 22/7, what is the area of the sector?",
    options: ["28.5 cm²", "35.0 cm²", "38.5 cm²", "42.0 cm²"],
    answer: "38.5 cm²",
    explanation: "STEP 1: Area of a sector = (θ / 360°) × πr².\nSTEP 2: θ = 90°, r = 7 ⇒ (90/360) = 1/4.\nSTEP 3: Area = ¼ × (22/7) × 49 = ¼ × 154 = 38.5 cm²."
  },
  {
    question: "Using π = 22/7, what is the length of the arc of a sector with radius 7 cm and central angle 90°?",
    options: ["9.5 cm", "10.5 cm", "11.0 cm", "12.5 cm"],
    answer: "11.0 cm",
    explanation: "STEP 1: Arc length = (θ / 360°) × 2πr.\nSTEP 2: θ = 90°, r = 7 ⇒ fraction = 1/4.\nSTEP 3: Arc length = ¼ × 2 × (22/7) × 7 = ¼ × 44 = 11.0 cm."
  },
  {
    question: "A semicircle has radius 21 cm. Using π = 22/7, what is its area?",
    options: ["588 cm²", "630 cm²", "693 cm²", "726 cm²"],
    answer: "693 cm²",
    explanation: "STEP 1: Area of a semicircle = ½ × πr².\nSTEP 2: r = 21 cm ⇒ r² = 441.\nSTEP 3: πr² = (22/7) × 441 = 22 × 63 = 1386.\nSTEP 4: Semicircle area = ½ × 1386 = 693 cm²."
  },
  {
    question: "A quarter circle has radius 14 cm. Using π = 22/7, what is its area?",
    options: ["132 cm²", "140 cm²", "154 cm²", "176 cm²"],
    answer: "154 cm²",
    explanation: "STEP 1: Area of a quarter circle = ¼ × πr².\nSTEP 2: r = 14 cm ⇒ r² = 196.\nSTEP 3: Area = ¼ × (22/7) × 196 = ¼ × 616 = 154 cm²."
  },
  {
    question: "A circle is inscribed in a square of side 14 cm. Using π = 22/7, what is the area of the shaded region between the square and the circle?",
    options: ["28 cm²", "36 cm²", "42 cm²", "48 cm²"],
    answer: "42 cm²",
    explanation: "STEP 1: Area of the square = 14 × 14 = 196 cm².\nSTEP 2: Radius of the inscribed circle = 14 ÷ 2 = 7 cm.\nSTEP 3: Area of circle = (22/7) × 49 = 154 cm².\nSTEP 4: Shaded area = 196 − 154 = 42 cm²."
  },
  {
    question: "Two circles have radii 7 cm and 14 cm. What is the ratio of their areas?",
    options: ["1 : 2", "1 : 3", "1 : 4", "1 : 5"],
    answer: "1 : 4",
    explanation: "STEP 1: Area of a circle is proportional to the square of its radius.\nSTEP 2: Radii are 7 and 14 ⇒ ratio of radii = 1 : 2.\nSTEP 3: Ratio of areas = 1² : 2² = 1 : 4."
  },
  {
    question: "A circular track has an outer radius of 21 m and an inner radius of 14 m. Using π = 22/7, what is the area of the track?",
    options: ["660 m²", "704 m²", "770 m²", "840 m²"],
    answer: "770 m²",
    explanation: "STEP 1: Area of track = π(R² − r²).\nSTEP 2: R = 21 m, r = 14 m ⇒ R² − r² = 441 − 196 = 245.\nSTEP 3: Area = (22/7) × 245 = 22 × 35 = 770 m²."
  },
  {
    question: "A rectangular prism (box) has length 8 cm, width 5 cm, and height 10 cm. What is its total surface area?",
    options: ["300 cm²", "320 cm²", "340 cm²", "360 cm²"],
    answer: "340 cm²",
    explanation: "STEP 1: Surface area of a rectangular prism = 2(lw + lh + wh).\nSTEP 2: lw = 8×5 = 40, lh = 8×10 = 80, wh = 5×10 = 50.\nSTEP 3: Sum = 40 + 80 + 50 = 170.\nSTEP 4: Surface area = 2 × 170 = 340 cm²."
  },
  {
    question: "A cube has side length 6 cm. What is its volume?",
    options: ["126 cm³", "180 cm³", "216 cm³", "256 cm³"],
    answer: "216 cm³",
    explanation: "STEP 1: Volume of a cube = s³.\nSTEP 2: s = 6 cm ⇒ Volume = 6³ = 216 cm³."
  },
  {
    question: "A cylinder has radius 7 cm and height 10 cm. Using π = 22/7, what is its volume?",
    options: ["1320 cm³", "1430 cm³", "1540 cm³", "1650 cm³"],
    answer: "1540 cm³",
    explanation: "STEP 1: Volume of a cylinder = πr²h.\nSTEP 2: r = 7 cm ⇒ r² = 49; h = 10 cm.\nSTEP 3: Volume = (22/7) × 49 × 10 = 22 × 70 = 1540 cm³."
  },
  {
    question: "Using π = 22/7, what is the curved surface area of a cylinder with radius 7 cm and height 10 cm?",
    options: ["380 cm²", "400 cm²", "420 cm²", "440 cm²"],
    answer: "440 cm²",
    explanation: "STEP 1: Curved surface area of a cylinder = 2πrh.\nSTEP 2: r = 7 cm, h = 10 cm.\nSTEP 3: CSA = 2 × (22/7) × 7 × 10 = 2 × 22 × 10 = 440 cm²."
  },
  {
    question: "A right circular cone has radius 7 cm and height 24 cm. Using π = 22/7, what is its curved surface area?",
    options: ["450 cm²", "500 cm²", "520 cm²", "550 cm²"],
    answer: "550 cm²",
    explanation: "STEP 1: Curved surface area = πrl, where l is the slant height.\nSTEP 2: l = √(r² + h²) = √(7² + 24²) = √(49 + 576) = √625 = 25 cm.\nSTEP 3: CSA = (22/7) × 7 × 25 = 22 × 25 = 550 cm²."
  },
  {
    question: "Using π = 22/7, what is the volume of a right circular cone with radius 7 cm and height 24 cm?",
    options: ["1024 cm³", "1120 cm³", "1232 cm³", "1320 cm³"],
    answer: "1232 cm³",
    explanation: "STEP 1: Volume of a cone = ⅓πr²h.\nSTEP 2: r = 7 cm ⇒ r² = 49; h = 24 cm.\nSTEP 3: Volume = ⅓ × (22/7) × 49 × 24 = 1232 cm³."
  },
  {
    question: "A sphere has radius 3 cm. Using π = 22/7, what is its volume (rounded to one decimal place)?",
    options: ["98.2 cm³", "104.5 cm³", "113.1 cm³", "120.0 cm³"],
    answer: "113.1 cm³",
    explanation: "STEP 1: Volume of a sphere = ⁴⁄₃πr³.\nSTEP 2: r = 3 cm ⇒ r³ = 27.\nSTEP 3: Volume ≈ ⁴⁄₃ × (22/7) × 27 ≈ 113.1 cm³ (to one decimal place)."
  },
  {
    question: "A solid figure is made of a cylinder of radius 7 cm and height 10 cm with a hemisphere of the same radius on top. Using π = 22/7, what is the total volume of the solid (rounded to one decimal place)?",
    options: ["2050.3 cm³", "2145.6 cm³", "2258.7 cm³", "2330.5 cm³"],
    answer: "2258.7 cm³",
    explanation: "STEP 1: Volume of solid = Volume of cylinder + Volume of hemisphere.\nSTEP 2: Cylinder volume = (22/7) × 7² × 10 = 1540 cm³.\nSTEP 3: Hemisphere volume = ½ × ⁴⁄₃πr³ = ⅔πr³ ≈ ⅔ × (22/7) × 7³ ≈ 718.7 cm³.\nSTEP 4: Total volume ≈ 1540 + 718.7 = 2258.7 cm³ (rounded to one decimal place)."
  },
  {
    question: "Two cylinders have equal heights, but the radius of the second is three times the radius of the first. What is the ratio of their volumes?",
    options: ["1 : 2", "1 : 3", "1 : 6", "1 : 9"],
    answer: "1 : 9",
    explanation: "STEP 1: Volume of a cylinder is proportional to r²h.\nSTEP 2: If radii are r and 3r and heights are equal, volume ratio = r² : (3r)² = r² : 9r².\nSTEP 3: Simplified ratio = 1 : 9."
  },
  {
    question: "A cylindrical water tank has radius 4 m and height 10 m. If the water level is only 6 m high, and using π = 3.14, what is the volume of water in the tank?",
    options: ["251.2 m³", "301.4 m³", "314.0 m³", "340.5 m³"],
    answer: "301.4 m³",
    explanation: "STEP 1: Volume of water = πr²h, where h = 6 m.\nSTEP 2: r = 4 m ⇒ r² = 16.\nSTEP 3: Volume ≈ 3.14 × 16 × 6 = 3.14 × 96 ≈ 301.4 m³."
  },
  {
    question: "Two right triangles are similar. The smaller triangle has legs 6 cm and 8 cm. The larger triangle has the shorter leg 9 cm. What is the length of the longer leg of the larger triangle?",
    options: ["10 cm", "11 cm", "12 cm", "13 cm"],
    answer: "12 cm",
    explanation: "STEP 1: For the smaller triangle, legs are 6 cm and 8 cm.\nSTEP 2: Scale factor from smaller to larger = 9 ÷ 6 = 1.5.\nSTEP 3: Longer leg of larger triangle = 8 × 1.5 = 12 cm."
  },
  {
    question: "The sides of two similar triangles are in the ratio 2 : 5. What is the ratio of their areas?",
    options: ["2 : 5", "4 : 10", "4 : 25", "5 : 12"],
    answer: "4 : 25",
    explanation: "STEP 1: For similar figures, ratio of areas = (ratio of corresponding sides)².\nSTEP 2: (2 : 5)² = 2² : 5² = 4 : 25."
  },
  {
    question: "Two similar rectangles have a scale factor of 3 : 2 (larger to smaller). If the area of the smaller rectangle is 40 cm², what is the area of the larger rectangle?",
    options: ["60 cm²", "80 cm²", "90 cm²", "100 cm²"],
    answer: "90 cm²",
    explanation: "STEP 1: Scale factor of sides (larger : smaller) = 3 : 2.\nSTEP 2: Scale factor of areas = (3 : 2)² = 9 : 4.\nSTEP 3: If smaller area is 40 cm², larger area = 40 × (9/4) = 40 × 2.25 = 90 cm²."
  },
  {
    question: "On a map, the scale is 1 : 50,000. If the distance between two towns on the map is 3.2 cm, what is the actual distance between them in kilometers?",
    options: ["0.16 km", "1.6 km", "16 km", "160 km"],
    answer: "1.6 km",
    explanation: "STEP 1: Scale 1 : 50,000 means 1 cm on the map = 50,000 cm in reality.\nSTEP 2: Actual distance = 3.2 × 50,000 = 160,000 cm.\nSTEP 3: Convert to meters: 160,000 cm ÷ 100 = 1,600 m.\nSTEP 4: Convert to kilometers: 1,600 m ÷ 1,000 = 1.6 km."
  },
  {
    question: "A triangle has base 18 cm and height 9 cm. A second triangle is similar to the first and has a base of 12 cm. What is the area of the smaller triangle?",
    options: ["30 cm²", "36 cm²", "40 cm²", "45 cm²"],
    answer: "36 cm²",
    explanation: "STEP 1: Area of the first triangle = ½ × 18 × 9 = 81 cm².\nSTEP 2: Scale factor of bases (smaller : larger) = 12 : 18 = 2 : 3.\nSTEP 3: Scale factor of areas = (2 : 3)² = 4 : 9.\nSTEP 4: Smaller area = 81 × (4/9) = 81 × (4 ÷ 9) = 9 × 4 = 36 cm²."
  },
  {
    question: "In the coordinate plane, a triangle has vertices A(0, 0), B(4, 0), and C(4, 3). What is the area of the triangle?",
    options: ["4 cm²", "5 cm²", "6 cm²", "7 cm²"],
    answer: "6 cm²",
    explanation: "STEP 1: The triangle is right-angled at B.\nSTEP 2: Base AB = 4 units; height from C to AB = 3 units.\nSTEP 3: Area = ½ × base × height = ½ × 4 × 3 = 6 square units."
  },
  {
    question: "In the coordinate plane, what is the distance between the points P(2, 3) and Q(8, 12)? (Round to one decimal place.)",
    options: ["9.2 units", "10.0 units", "10.8 units", "11.5 units"],
    answer: "10.8 units",
    explanation: "STEP 1: Use the distance formula: d = √[(x₂ − x₁)² + (y₂ − y₁)²].\nSTEP 2: d = √[(8 − 2)² + (12 − 3)²] = √[6² + 9²] = √[36 + 81] = √117.\nSTEP 3: √117 ≈ 10.8 units (to one decimal place)."
  },
  {
    question: "What is the slope of the line passing through the points (1, 2) and (5, 10)?",
    options: ["1", "1.5", "2", "2.5"],
    answer: "2",
    explanation: "STEP 1: Slope m = (y₂ − y₁) ÷ (x₂ − x₁).\nSTEP 2: m = (10 − 2) ÷ (5 − 1) = 8 ÷ 4 = 2."
  },
  {
    question: "The perimeter of a rectangle is 38 m. The length is 3 m more than the width. What is the area of the rectangle?",
    options: ["72 m²", "80 m²", "88 m²", "96 m²"],
    answer: "88 m²",
    explanation: "STEP 1: Let the width be x m; then length = x + 3 m.\nSTEP 2: Perimeter = 2(length + width) = 2[(x + 3) + x] = 38.\nSTEP 3: Simplify: 2(2x + 3) = 38 ⇒ 2x + 3 = 19 ⇒ 2x = 16 ⇒ x = 8.\nSTEP 4: Width = 8 m, length = 11 m.\nSTEP 5: Area = 8 × 11 = 88 m²."
  },
  {
    question: "The three interior angles of a triangle are in the ratio 2 : 3 : 4. What is the measure of the largest angle?",
    options: ["60°", "70°", "80°", "90°"],
    answer: "80°",
    explanation: "STEP 1: Let the angles be 2k, 3k, and 4k.\nSTEP 2: Sum of angles in a triangle = 180°.\nSTEP 3: 2k + 3k + 4k = 9k = 180° ⇒ k = 20°.\nSTEP 4: Largest angle = 4k = 4 × 20° = 80°."
  },
  {
    question: "The exterior angle of a triangle is 120°. The two remote interior angles are x° and (x + 20)°. What is the value of x?",
    options: ["40°", "45°", "50°", "55°"],
    answer: "50°",
    explanation: "STEP 1: An exterior angle of a triangle equals the sum of the two remote interior angles.\nSTEP 2: 120° = x + (x + 20°) = 2x + 20°.\nSTEP 3: 2x + 20° = 120° ⇒ 2x = 100° ⇒ x = 50°."
  },
  {
    question: "Each interior angle of a regular polygon measures 150°. How many sides does the polygon have?",
    options: ["10", "11", "12", "13"],
    answer: "12",
    explanation: "STEP 1: For a regular n-sided polygon, each interior angle = [(n − 2) × 180°] ÷ n.\nSTEP 2: 150° = [(n − 2) × 180°] ÷ n.\nSTEP 3: 150n = 180n − 360 ⇒ 30n = 360 ⇒ n = 12.\nSTEP 4: The polygon has 12 sides."
  },
  {
    question: "The sum of the interior angles of a polygon is 1,980°. How many sides does the polygon have?",
    options: ["11", "12", "13", "14"],
    answer: "13",
    explanation: "STEP 1: Sum of interior angles of an n-sided polygon = (n − 2) × 180°.\nSTEP 2: (n − 2) × 180° = 1,980°.\nSTEP 3: n − 2 = 1,980° ÷ 180° = 11 ⇒ n = 11 + 2 = 13.\nSTEP 4: The polygon has 13 sides."
  },
  {
    question: "Each exterior angle of a regular polygon measures 24°. How many sides does the polygon have?",
    options: ["12", "14", "15", "18"],
    answer: "15",
    explanation: "STEP 1: Sum of all exterior angles of any convex polygon is 360°.\nSTEP 2: For a regular polygon, each exterior angle = 360° ÷ n.\nSTEP 3: 24° = 360° ÷ n ⇒ n = 360° ÷ 24° = 15.\nSTEP 4: The polygon has 15 sides."
  },
  {
    question: "A trapezoid has bases of 10 cm and 16 cm and a height of 7 cm. What is its area?",
    options: ["84 cm²", "88 cm²", "91 cm²", "96 cm²"],
    answer: "91 cm²",
    explanation: "STEP 1: Area of a trapezoid = ½ × (sum of bases) × height.\nSTEP 2: Sum of bases = 10 + 16 = 26 cm.\nSTEP 3: Area = ½ × 26 × 7 = 13 × 7 = 91 cm²."
  },
  {
    question: "In the trapezoid from the previous question (bases 10 cm and 16 cm), what is the length of the median (segment joining the midpoints of the legs)?",
    options: ["11 cm", "12 cm", "13 cm", "14 cm"],
    answer: "13 cm",
    explanation: "STEP 1: The median of a trapezoid has length equal to the average of the two bases.\nSTEP 2: Median = (10 + 16) ÷ 2 = 26 ÷ 2 = 13 cm."
  },
  {
    question: "A rhombus has side length 13 cm and one diagonal of length 10 cm. What is the length of the other diagonal?",
    options: ["20 cm", "22 cm", "24 cm", "26 cm"],
    answer: "24 cm",
    explanation: "STEP 1: Diagonals of a rhombus are perpendicular bisectors of each other.\nSTEP 2: Half of the known diagonal = 10 ÷ 2 = 5 cm.\nSTEP 3: Each side of the rhombus forms a right triangle with half of each diagonal as legs.\nSTEP 4: Let half of the unknown diagonal be x.\nThen: x² + 5² = 13² ⇒ x² + 25 = 169 ⇒ x² = 144 ⇒ x = 12 cm.\nSTEP 5: Full diagonal = 2x = 2 × 12 = 24 cm."
  },
  {
    question: "A rectangle has one side measuring 7 cm and a diagonal measuring 25 cm. What is the area of the rectangle?",
    options: ["140 cm²", "154 cm²", "160 cm²", "168 cm²"],
    answer: "168 cm²",
    explanation: "STEP 1: Let the unknown side be x.\nSTEP 2: By Pythagorean theorem: 7² + x² = 25² ⇒ 49 + x² = 625.\nSTEP 3: x² = 576 ⇒ x = 24 cm.\nSTEP 4: Area = 7 × 24 = 168 cm²."
  },
  {
    question: "A rectangular floor measures 8 m by 6 m. It is to be covered with square tiles, each of side 0.4 m. How many tiles are needed to cover the floor (without gaps or overlaps)?",
    options: ["240", "260", "280", "300"],
    answer: "300",
    explanation: "STEP 1: Area of the floor = 8 × 6 = 48 m².\nSTEP 2: Area of one tile = 0.4 × 0.4 = 0.16 m².\nSTEP 3: Number of tiles = Floor area ÷ Tile area = 48 ÷ 0.16 = 300."
  },
  {
    question: "The four walls of a rectangular room are to be painted. The room is 5 m long, 4 m wide, and 3 m high. A door of 2 m by 1 m and a window of 1.5 m by 1.2 m will not be painted. What is the total area to be painted on the walls?",
    options: ["46.2 m²", "48.5 m²", "50.2 m²", "52.0 m²"],
    answer: "50.2 m²",
    explanation: "STEP 1: Total area of four walls = Perimeter of room × height.\nSTEP 2: Perimeter = 2(5 + 4) = 18 m; height = 3 m.\nSTEP 3: Wall area = 18 × 3 = 54 m².\nSTEP 4: Area of door = 2 × 1 = 2 m²; area of window = 1.5 × 1.2 = 1.8 m².\nSTEP 5: Total area not painted = 2 + 1.8 = 3.8 m².\nSTEP 6: Area to be painted = 54 − 3.8 = 50.2 m²."
  }
  ] // end of expert
};

