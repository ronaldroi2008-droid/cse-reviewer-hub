// questions/numerical_averages.js
// ==========================================
// NUMERICAL – AVERAGES (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["averages"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Basic Averages)
  // ==========================================
  beginner: [
    // 1
    {
      question: "What does the average (arithmetic mean) of a set of numbers represent?",
      options: [
        "The smallest number in the set",
        "The largest number in the set",
        "The middle value when arranged",
        "The total divided by how many numbers there are"
      ],
      answer: "The total divided by how many numbers there are",
      explanation: "The arithmetic mean is found by adding all the values and dividing the sum by the number of values."
    },
    // 2
    {
      question: "Find the average of 4 and 8.",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation: "Add 4 and 8 to get 12, then divide by 2: 12 ÷ 2 = 6."
    },
    // 3
    {
      question: "Find the average of 10 and 14.",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "Add 10 and 14 to get 24, then divide by 2: 24 ÷ 2 = 12."
    },
    // 4
    {
      question: "Find the average of 3, 5, and 7.",
      options: ["4", "5", "6", "7"],
      answer: "5",
      explanation: "3 + 5 + 7 = 15, and 15 ÷ 3 = 5."
    },
    // 5
    {
      question: "Find the average of 6, 8, and 10.",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "6 + 8 + 10 = 24, and 24 ÷ 3 = 8."
    },
    // 6
    {
      question: "Find the average of 2, 4, 6, and 8.",
      options: ["4", "5", "6", "7"],
      answer: "5",
      explanation: "2 + 4 + 6 + 8 = 20, and 20 ÷ 4 = 5."
    },
    // 7
    {
      question: "Find the average of 5, 5, and 5.",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "All numbers are 5, so the average is also 5."
    },
    // 8
    {
      question: "Find the average of 9 and 15.",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "9 + 15 = 24, and 24 ÷ 2 = 12."
    },
    // 9
    {
      question: "Find the average of 12, 18, and 24.",
      options: ["16", "17", "18", "19"],
      answer: "18",
      explanation: "12 + 18 + 24 = 54, and 54 ÷ 3 = 18."
    },
    // 10
    {
      question: "Find the average of 1, 2, 3, and 4.",
      options: ["2", "2.5", "3", "3.5"],
      answer: "2.5",
      explanation: "1 + 2 + 3 + 4 = 10, and 10 ÷ 4 = 2.5."
    },
    // 11
    {
      question: "Find the average of 7, 9, and 11.",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "7 + 9 + 11 = 27, and 27 ÷ 3 = 9."
    },
    // 12
    {
      question: "Find the average of 20 and 30.",
      options: ["22", "24", "25", "26"],
      answer: "25",
      explanation: "20 + 30 = 50, and 50 ÷ 2 = 25."
    },
    // 13
    {
      question: "Find the average of 0, 4, and 8.",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "0 + 4 + 8 = 12, and 12 ÷ 3 = 4."
    },
    // 14
    {
      question: "Find the average of 2, 2, 6, and 10.",
      options: ["4", "5", "6", "7"],
      answer: "5",
      explanation: "2 + 2 + 6 + 10 = 20, and 20 ÷ 4 = 5."
    },
    // 15
    {
      question: "Find the average of 8, 12, and 20.",
      options: ["10", "12", "13.33", "16"],
      answer: "13.33",
      explanation: "8 + 12 + 20 = 40, and 40 ÷ 3 ≈ 13.33."
    },
    // 16
    {
      question: "Find the average of 4, 6, 10, and 10.",
      options: ["7.5", "8", "8.5", "9"],
      answer: "7.5",
      explanation: "4 + 6 + 10 + 10 = 30, and 30 ÷ 4 = 7.5."
    },
    // 17
    {
      question: "Find the average of 9 and 3.",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "9 + 3 = 12, and 12 ÷ 2 = 6."
    },
    // 18
    {
      question: "Find the average of 10, 10, 10, and 10.",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "All numbers are the same, so the average is 10."
    },
    // 19
    {
      question: "Find the average of 15 and 21.",
      options: ["16", "17", "18", "19"],
      answer: "18",
      explanation: "15 + 21 = 36, and 36 ÷ 2 = 18."
    },
    // 20
    {
      question: "Find the average of 5, 10, 15, and 20.",
      options: ["10", "11", "12.5", "13"],
      answer: "12.5",
      explanation: "5 + 10 + 15 + 20 = 50, and 50 ÷ 4 = 12.5."
    },
    // 21
    {
      question: "Find the average of 1, 3, 5, and 7.",
      options: ["3", "4", "4.5", "5"],
      answer: "4",
      explanation: "1 + 3 + 5 + 7 = 16, and 16 ÷ 4 = 4."
    },
    // 22
    {
      question: "Find the average of 6 and 16.",
      options: ["9", "10", "11", "12"],
      answer: "11",
      explanation: "6 + 16 = 22, and 22 ÷ 2 = 11."
    },
    // 23
    {
      question: "Find the average of 2, 8, and 14.",
      options: ["6", "8", "9", "10"],
      answer: "8",
      explanation: "2 + 8 + 14 = 24, and 24 ÷ 3 = 8."
    },
    // 24
    {
      question: "Find the average of 3, 6, 9, and 12.",
      options: ["6", "7.5", "8", "9"],
      answer: "7.5",
      explanation: "3 + 6 + 9 + 12 = 30, and 30 ÷ 4 = 7.5."
    },
    // 25
    {
      question: "Find the average of 11 and 13.",
      options: ["11.5", "12", "12.5", "13"],
      answer: "12",
      explanation: "11 + 13 = 24, and 24 ÷ 2 = 12."
    },
    // 26
    {
      question: "Find the average of 0 and 10.",
      options: ["4", "5", "6", "7"],
      answer: "5",
      explanation: "0 + 10 = 10, and 10 ÷ 2 = 5."
    },
    // 27
    {
      question: "Find the average of 2, 4, 6, 8, and 10.",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation: "2 + 4 + 6 + 8 + 10 = 30, and 30 ÷ 5 = 6."
    },
    // 28
    {
      question: "Find the average of 5, 7, and 9.",
      options: ["6", "7", "7.5", "8"],
      answer: "7",
      explanation: "5 + 7 + 9 = 21, and 21 ÷ 3 = 7."
    },
    // 29
    {
      question: "Find the average of 18 and 22.",
      options: ["18", "19", "20", "21"],
      answer: "20",
      explanation: "18 + 22 = 40, and 40 ÷ 2 = 20."
    },
    // 30
    {
      question: "Find the average of 6, 6, 8, and 10.",
      options: ["7", "7.5", "8", "8.5"],
      answer: "7.5",
      explanation: "6 + 6 + 8 + 10 = 30, and 30 ÷ 4 = 7.5."
    },
    // 31
    {
      question: "Find the average of 25 and 35.",
      options: ["28", "29", "30", "31"],
      answer: "30",
      explanation: "25 + 35 = 60, and 60 ÷ 2 = 30."
    },
    // 32
    {
      question: "Find the average of 3, 3, 3, 3, and 3.",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "All numbers are 3, so the average is 3."
    },
    // 33
    {
      question: "Find the average of 7, 14, and 21.",
      options: ["12", "13", "14", "15"],
      answer: "14",
      explanation: "7 + 14 + 21 = 42, and 42 ÷ 3 = 14."
    },
    // 34
    {
      question: "Find the average of 2, 3, 4, and 5.",
      options: ["3", "3.5", "4", "4.5"],
      answer: "3.5",
      explanation: "2 + 3 + 4 + 5 = 14, and 14 ÷ 4 = 3.5."
    },
    // 35
    {
      question: "Find the average of 16 and 24.",
      options: ["18", "19", "20", "21"],
      answer: "20",
      explanation: "16 + 24 = 40, and 40 ÷ 2 = 20."
    },
    // 36
    {
      question: "Find the average of 5, 15, and 25.",
      options: ["10", "12", "15", "20"],
      answer: "15",
      explanation: "5 + 15 + 25 = 45, and 45 ÷ 3 = 15."
    },
    // 37
    {
      question: "Find the average of 4, 4, 6, 8, and 8.",
      options: ["5.5", "6", "6.5", "7"],
      answer: "6",
      explanation: "4 + 4 + 6 + 8 + 8 = 30, and 30 ÷ 5 = 6."
    },
    // 38
    {
      question: "Find the average of 1 and 9.",
      options: ["4", "5", "6", "7"],
      answer: "5",
      explanation: "1 + 9 = 10, and 10 ÷ 2 = 5."
    },
    // 39
    {
      question: "Find the average of 12, 14, 16, and 18.",
      options: ["14", "15", "15.5", "16"],
      answer: "15",
      explanation: "12 + 14 + 16 + 18 = 60, and 60 ÷ 4 = 15."
    },
    // 40
    {
      question: "Find the average of 3, 9, and 12.",
      options: ["7", "8", "8.5", "9"],
      answer: "8",
      explanation: "3 + 9 + 12 = 24, and 24 ÷ 3 = 8."
    },
    // 41
    {
      question: "If three numbers have an average of 10, what is their total sum?",
      options: ["20", "25", "30", "40"],
      answer: "30",
      explanation: "Average = sum ÷ count, so sum = average × count = 10 × 3 = 30."
    },
    // 42
    {
      question: "If four numbers have an average of 5, what is their total sum?",
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "Sum = 5 × 4 = 20."
    },
    // 43
    {
      question: "The average of two equal numbers is 7. What is each number?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "If two numbers are equal, their average is that same number, so each is 7."
    },
    // 44
    {
      question: "The average of 4, 6, and a third number is 8. What is the sum of all three numbers?",
      options: ["18", "20", "22", "24"],
      answer: "24",
      explanation: "Sum = average × count = 8 × 3 = 24."
    },
    // 45
    {
      question: "What happens to the average if you add the same number to every value in a set?",
      options: [
        "The average stays the same",
        "The average increases by that number",
        "The average decreases by that number",
        "The average becomes zero"
      ],
      answer: "The average increases by that number",
      explanation: "Adding the same number to all values shifts the entire set upward by that amount, including the average."
    },
    // 46
    {
      question: "What happens to the average if you multiply every value in a set by 2?",
      options: [
        "The average is divided by 2",
        "The average remains the same",
        "The average is multiplied by 2",
        "The average becomes zero"
      ],
      answer: "The average is multiplied by 2",
      explanation: "Multiplying each value by 2 multiplies their sum by 2, so the average also doubles."
    },
    // 47
    {
      question: "The average of 5 and x is 9. What is the sum of 5 and x?",
      options: ["9", "14", "18", "20"],
      answer: "18",
      explanation: "Average = sum ÷ 2, so 9 = sum ÷ 2, giving sum = 18."
    },
    // 48
    {
      question: "If the average of three numbers is 12, which equation is correct?",
      options: [
        "Sum = 12 ÷ 3",
        "Sum = 12 × 3",
        "Sum = 12 + 3",
        "Sum = 12 − 3"
      ],
      answer: "Sum = 12 × 3",
      explanation: "Average = sum ÷ count, so sum = average × count = 12 × 3."
    },
    // 49
    {
      question: "Find the average of 2, 8, 10, and 0.",
      options: ["4", "4.5", "5", "5.5"],
      answer: "5",
      explanation: "2 + 8 + 10 + 0 = 20, and 20 ÷ 4 = 5."
    },
    // 50
    {
      question: "Find the average of 1, 5, 9, and 13.",
      options: ["6", "7", "7.5", "8"],
      answer: "7",
      explanation: "1 + 5 + 9 + 13 = 28, and 28 ÷ 4 = 7."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Word Problems & Missing Terms)
  // ==========================================
  intermediate: [
    // 1
    {
      question: "The average of three numbers is 9. If two of the numbers are 8 and 10, what is the third number?",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "Sum = 9 × 3 = 27. The third number = 27 − (8 + 10) = 27 − 18 = 9."
    },
    // 2
    {
      question: "The average of four numbers is 6. If three of the numbers are 4, 6, and 8, what is the fourth number?",
      options: ["4", "6", "8", "10"],
      answer: "6",
      explanation: "Sum = 6 × 4 = 24. The fourth number = 24 − (4 + 6 + 8) = 24 − 18 = 6."
    },
    // 3
    {
      question: "The average of five numbers is 10. What is their total sum?",
      options: ["30", "40", "50", "60"],
      answer: "50",
      explanation: "Sum = average × count = 10 × 5 = 50."
    },
    // 4
    {
      question: "The average of 7, 11, and x is 10. What is the value of x?",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "Sum = 10 × 3 = 30. x = 30 − (7 + 11) = 30 − 18 = 12."
    },
    // 5
    {
      question: "The average of 12, 15, 18, and x is 16. Find x.",
      options: ["18", "19", "20", "21"],
      answer: "19",
      explanation: "Sum = 16 × 4 = 64. x = 64 − (12 + 15 + 18) = 64 − 45 = 19."
    },
    // 6
    {
      question: "The average of four numbers is 20. Three of them are 15, 20, and 25. What is the fourth number?",
      options: ["15", "20", "25", "30"],
      answer: "20",
      explanation: "Sum = 20 × 4 = 80. Fourth number = 80 − (15 + 20 + 25) = 80 − 60 = 20."
    },
    // 7
    {
      question: "The average score of 5 tests is 72. If the first four scores are 70, 75, 68, and 73, what is the fifth score?",
      options: ["70", "72", "74", "76"],
      answer: "74",
      explanation: "Sum = 72 × 5 = 360. Fifth score = 360 − (70 + 75 + 68 + 73) = 360 − 286 = 74."
    },
    // 8
    {
      question: "The average of three consecutive integers is 14. What is the largest integer?",
      options: ["13", "14", "15", "16"],
      answer: "15",
      explanation: "For three consecutive integers, the middle one is the average. So the integers are 13, 14, and 15; largest is 15."
    },
    // 9
    {
      question: "The average of three consecutive even integers is 20. What is the smallest integer?",
      options: ["16", "18", "20", "22"],
      answer: "18",
      explanation: "For three consecutive even integers, the middle one is the average, which is 20. So they are 18, 20, and 22; smallest is 18."
    },
    // 10
    {
      question: "The average of four consecutive odd integers is 21. What is the smallest integer?",
      options: ["15", "17", "19", "21"],
      answer: "19",
      explanation: "For four consecutive odd integers, the average is the mean of the two middle numbers. Those are 21 − 1 and 21 + 1, so the set is 19, 21, 23, 25; smallest is 19."
    },
    // 11
    {
      question: "The average weight of 6 students is 50 kg. What is their total weight?",
      options: ["250 kg", "300 kg", "350 kg", "400 kg"],
      answer: "300 kg",
      explanation: "Total weight = 50 × 6 = 300 kg."
    },
    // 12
    {
      question: "The average of 9, 12, 15, and x is 13. What is x?",
      options: ["14", "15", "16", "17"],
      answer: "16",
      explanation: "Sum = 13 × 4 = 52. x = 52 − (9 + 12 + 15) = 52 − 36 = 16."
    },
    // 13
    {
      question: "The average mark of a student in 3 subjects is 80. If two of the marks are 78 and 82, what is the third mark?",
      options: ["80", "81", "82", "83"],
      answer: "80",
      explanation: "Sum = 80 × 3 = 240. Third mark = 240 − (78 + 82) = 240 − 160 = 80."
    },
    // 14 - CORRECTED
    {
      question: "The average of 5 numbers is 12. If one of the numbers is 22, what is the average of the other four numbers?",
      options: ["9.5", "10", "11", "12"],
      answer: "9.5",
      explanation: "Total sum = 12 × 5 = 60. Remaining four sum = 60 − 22 = 38. Average of the four = 38 ÷ 4 = 9.5."
    },
    // 15
    {
      question: "The average of 6 numbers is 9. If one of the numbers is 3, what is the sum of the other five numbers?",
      options: ["48", "50", "51", "54"],
      answer: "51",
      explanation: "Total sum = 9 × 6 = 54. Sum of other five = 54 − 3 = 51."
    },
    // 16
    {
      question: "The average of 4 numbers is 18. If three of them are 16, 18, and 22, find the fourth number.",
      options: ["16", "18", "20", "22"],
      answer: "16",
      explanation: "Sum = 18 × 4 = 72. Fourth number = 72 − (16 + 18 + 22) = 72 − 56 = 16."
    },
    // 17
    {
      question: "The average of 10 numbers is 7. What is their total sum?",
      options: ["50", "60", "70", "80"],
      answer: "70",
      explanation: "Total sum = 7 × 10 = 70."
    },
    // 18
    {
      question: "The average of three numbers is 15. If one of the numbers is 9, the sum of the other two numbers is:",
      options: ["21", "27", "36", "45"],
      answer: "36",
      explanation: "Total sum = 15 × 3 = 45. Sum of the other two = 45 − 9 = 36."
    },
    // 19
    {
      question: "A student scored 60, 70, and 80 in three tests. What is the average score?",
      options: ["65", "68", "70", "72"],
      answer: "70",
      explanation: "60 + 70 + 80 = 210, and 210 ÷ 3 = 70."
    },
    // 20
    {
      question: "A student scored 50, 65, 75, and 80 in four tests. What is the average score?",
      options: ["65", "67.5", "70", "72.5"],
      answer: "67.5",
      explanation: "50 + 65 + 75 + 80 = 270, and 270 ÷ 4 = 67.5."
    },
    // 21
    {
      question: "The average of 4, 10, 16, and x is 12. What is x?",
      options: ["16", "18", "20", "22"],
      answer: "18",
      explanation: "Sum = 12 × 4 = 48. x = 48 − (4 + 10 + 16) = 48 − 30 = 18."
    },
    // 22
    {
      question: "The average of three numbers is 20. If two numbers are 18 and 22, the third number is:",
      options: ["18", "20", "22", "24"],
      answer: "20",
      explanation: "Sum = 20 × 3 = 60. Third number = 60 − (18 + 22) = 60 − 40 = 20."
    },
    // 23
    {
      question: "The average height of 5 students is 150 cm. If the total height of four of them is 600 cm, what is the height of the fifth student?",
      options: ["140 cm", "145 cm", "150 cm", "160 cm"],
      answer: "150 cm",
      explanation: "Total height = 150 × 5 = 750 cm. Fifth student height = 750 − 600 = 150 cm."
    },
    // 24
    {
      question: "The average of seven numbers is 11. If the sum of six of them is 60, what is the seventh number?",
      options: ["9", "10", "11", "17"],
      answer: "17",
      explanation: "Total sum = 11 × 7 = 77. Seventh number = 77 − 60 = 17."
    },
    // 25
    {
      question: "The average of three numbers is 25. The first number is 30 and the second is 20. What is the third number?",
      options: ["20", "25", "30", "35"],
      answer: "25",
      explanation: "Total sum = 25 × 3 = 75. Third number = 75 − (30 + 20) = 75 − 50 = 25."
    },
    // 26
    {
      question: "The average of 10, 20, 30, and x is 25. What is the value of x?",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "Total sum = 25 × 4 = 100. x = 100 − (10 + 20 + 30) = 100 − 60 = 40."
    },
    // 27
    {
      question: "The average of four numbers is 13. If three numbers are 10, 12, and 16, what is the fourth number?",
      options: ["12", "13", "14", "15"],
      answer: "14",
      explanation: "Total sum = 13 × 4 = 52. Fourth number = 52 − (10 + 12 + 16) = 52 − 38 = 14."
    },
    // 28
    {
      question: "The average of three numbers is 18. Two of the numbers are 12 and 24. What is the third number?",
      options: ["12", "18", "24", "30"],
      answer: "18",
      explanation: "Total sum = 18 × 3 = 54. Third number = 54 − (12 + 24) = 54 − 36 = 18."
    },
    // 29
    {
      question: "The average of 20 and x is 26. What is x?",
      options: ["26", "28", "30", "32"],
      answer: "32",
      explanation: "Average of two numbers: (20 + x) ÷ 2 = 26, so 20 + x = 52, giving x = 32."
    },
    // 30
    {
      question: "The average of 8, 12, 16, and y is 14. What is y?",
      options: ["16", "18", "20", "22"],
      answer: "20",
      explanation: "Total sum = 14 × 4 = 56. y = 56 − (8 + 12 + 16) = 56 − 36 = 20."
    },
    // 31
    {
      question: "A person scored 40, 50, 60, and 80 in four tests. What is the average score?",
      options: ["55", "57.5", "60", "62.5"],
      answer: "57.5",
      explanation: "40 + 50 + 60 + 80 = 230, and 230 ÷ 4 = 57.5."
    },
    // 32
    {
      question: "A shop sold 10, 15, 20, and 25 items in four days. What is the average number of items sold per day?",
      options: ["15", "17.5", "20", "22.5"],
      answer: "17.5",
      explanation: "10 + 15 + 20 + 25 = 70, and 70 ÷ 4 = 17.5."
    },
    // 33
    {
      question: "The average of 6 numbers is 12. If one number 18 is removed, what is the sum of the remaining five numbers?",
      options: ["42", "48", "54", "60"],
      answer: "54",
      explanation: "Total sum = 12 × 6 = 72. Remaining sum = 72 − 18 = 54."
    },
    // 34
    {
      question: "The average of 5 numbers is 9. If one number is 4, what is the sum of the other four numbers?",
      options: ["36", "37", "38", "41"],
      answer: "41",
      explanation: "Total sum = 9 × 5 = 45. Remaining sum = 45 − 4 = 41."
    },
    // 35
    {
      question: "The average of 3, 7, 11, and x is 9. What is x?",
      options: ["13", "14", "15", "16"],
      answer: "15",
      explanation: "Total sum = 9 × 4 = 36. x = 36 − (3 + 7 + 11) = 36 − 21 = 15."
    },
    // 36
    {
      question: "The average of four numbers is 19. If three numbers are 15, 18, and 22, what is the fourth number?",
      options: ["19", "20", "21", "22"],
      answer: "21",
      explanation: "Total sum = 19 × 4 = 76. Fourth number = 76 − (15 + 18 + 22) = 76 − 55 = 21."
    },
    // 37
    {
      question: "The average age of 5 children is 9 years. What is their total age?",
      options: ["35 years", "40 years", "45 years", "50 years"],
      answer: "45 years",
      explanation: "Total age = 9 × 5 = 45 years."
    },
    // 38
    {
      question: "The average of two numbers is 13. One number is 9. What is the other number?",
      options: ["13", "15", "17", "19"],
      answer: "17",
      explanation: "Sum = 13 × 2 = 26. Other number = 26 − 9 = 17."
    },
    // 39
    {
      question: "The average of 4, 8, x, and 12 is 10. What is x?",
      options: ["10", "12", "14", "16"],
      answer: "16",
      explanation: "Total sum = 10 × 4 = 40. x = 40 − (4 + 8 + 12) = 40 − 24 = 16."
    },
    // 40
    {
      question: "The average of three numbers is 22. If two of them are 20 and 26, what is the third number?",
      options: ["18", "20", "22", "24"],
      answer: "20",
      explanation: "Total sum = 22 × 3 = 66. Third number = 66 − (20 + 26) = 66 − 46 = 20."
    },
    // 41 - CORRECTED
    {
      question: "The average of 5 numbers is 14. One of the numbers is 24. What is the average of the other four numbers?",
      options: ["9.5", "10", "11.5", "12"],
      answer: "11.5",
      explanation: "Total sum = 14 × 5 = 70. Remaining sum = 70 − 24 = 46. Average of four = 46 ÷ 4 = 11.5."
    },
    // 42
    {
      question: "The average of 6, 10, 14, and x is 12. What is x?",
      options: ["16", "18", "20", "22"],
      answer: "18",
      explanation: "Total sum = 12 × 4 = 48. x = 48 − (6 + 10 + 14) = 48 − 30 = 18."
    },
    // 43
    {
      question: "The average of three numbers is 30. Two of them are 25 and 35. What is the third number?",
      options: ["25", "30", "35", "40"],
      answer: "30",
      explanation: "Total sum = 30 × 3 = 90. Third number = 90 − (25 + 35) = 90 − 60 = 30."
    },
    // 44
    {
      question: "The average of 8 numbers is 5. If the sum of 7 of them is 30, what is the eighth number?",
      options: ["4", "5", "6", "10"],
      answer: "10",
      explanation: "Total sum = 5 × 8 = 40. Eighth number = 40 − 30 = 10."
    },
    // 45
    {
      question: "The average of four numbers is 50. If three of them are 40, 50, and 60, what is the fourth number?",
      options: ["40", "50", "60", "70"],
      answer: "50",
      explanation: "Total sum = 50 × 4 = 200. Fourth number = 200 − (40 + 50 + 60) = 200 − 150 = 50."
    },
    // 46
    {
      question: "The average of three numbers is 12. If one number is increased by 3, what happens to the new average?",
      options: [
        "Increases by 1",
        "Increases by 3",
        "Decreases by 1",
        "Remains the same"
      ],
      answer: "Increases by 1",
      explanation: "Adding 3 to one of three numbers increases the total sum by 3, so the average increases by 3 ÷ 3 = 1."
    },
    // 47
    {
      question: "The average of four numbers is 15. If one number is reduced by 4, by how much does the new average change?",
      options: ["Decreases by 1", "Decreases by 2", "Decreases by 3", "Decreases by 4"],
      answer: "Decreases by 1",
      explanation: "Reducing one number by 4 decreases the total sum by 4, so the average decreases by 4 ÷ 4 = 1."
    },
    // 48
    {
      question: "The average of 5 numbers is 18. If all numbers are increased by 2, what is the new average?",
      options: ["18", "19", "20", "22"],
      answer: "20",
      explanation: "Adding 2 to each of 5 numbers adds 10 to the sum, so the average increases by 2, making it 20."
    },
    // 49
    {
      question: "The average of 2, 4, 6, x, and 10 is 6. What is x?",
      options: ["6", "8", "10", "12"],
      answer: "8",
      explanation: "Total sum = 6 × 5 = 30. x = 30 − (2 + 4 + 6 + 10) = 30 − 22 = 8."
    },
    // 50
    {
      question: "The average of 3, 9, 15, and y is 11. What is y?",
      options: ["11", "12", "13", "17"],
      answer: "17",
      explanation: "Total sum = 11 × 4 = 44. y = 44 − (3 + 9 + 15) = 44 − 27 = 17."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Groups & Weighted Averages)
  // ==========================================
  advanced: [
    // 1
    {
      question: "The average of 4 numbers is 25. The average of another 4 numbers is 35. What is the average of all 8 numbers?",
      options: ["28", "29", "30", "31"],
      answer: "30",
      explanation: "First group sum = 25 × 4 = 100. Second group sum = 35 × 4 = 140. Combined sum = 240. Average = 240 ÷ 8 = 30."
    },
    // 2
    {
      question: "The average of 5 numbers is 12. The average of 7 different numbers is 18. What is the combined average of all 12 numbers?",
      options: ["14", "15", "15.5", "17"],
      answer: "15.5",
      explanation: "First sum = 12 × 5 = 60. Second sum = 18 × 7 = 126. Total sum = 186. Average = 186 ÷ 12 = 15.5."
    },
    // 3 - CORRECTED
    {
      question: "The average of 6 numbers is 10. If a new number 16 is added, what is the new average of the 7 numbers?",
      options: ["10", "10.86", "11", "11.5"],
      answer: "10.86",
      explanation: "Original sum = 10 × 6 = 60. New sum = 60 + 16 = 76. Average = 76 ÷ 7 ≈ 10.86."
    },
    // 4 
  
{
  question: "The average of 8 numbers is 14. If one more number x is added, the new average becomes 15. Find x.",
  options: ["21", "22", "23", "28"],
  answer: "23",
  explanation: "Old sum = 14 × 8 = 112. New sum = 15 × 9 = 135. Added number x = 135 − 112 = 23."
},

    // 5
    {
      question: "The average of 10 numbers is 30. When one number is removed, the new average becomes 29. What number was removed?",
      options: ["29", "30", "39", "40"],
      answer: "39",
      explanation: "Original sum = 30 × 10 = 300. New sum = 29 × 9 = 261. Removed number = 300 − 261 = 39."
    },
    // 6
    {
      question: "The average of 7 numbers is 18. When one number 24 is added, the new average becomes:",
      options: ["18", "18.75", "19", "21"],
      answer: "18.75",
      explanation: "Original sum = 18 × 7 = 126. New sum = 126 + 24 = 150. New average = 150 ÷ 8 = 18.75."
    },
    // 7
    {
      question: "The average of 5 numbers is 40. If one number 50 is added, what is the new average?",
      options: ["40", "41.67", "42", "43"],
      answer: "41.67",
      explanation: "Original sum = 40 × 5 = 200. New sum = 200 + 50 = 250. New average = 250 ÷ 6 ≈ 41.67."
    },
    // 8
  // 8
{
  question: "The average weight of 4 men is 70 kg. Another man joins the group and the new average becomes 72 kg. What is the weight of the new man?",
  options: ["75 kg", "78 kg", "80 kg", "82 kg"],
  answer: "80 kg",
  explanation: "Old sum = 70 × 4 = 280 kg. New sum = 72 × 5 = 360 kg. New man's weight = 360 − 280 = 80 kg."
},

    // 9
    {
      question: "The average of 3 numbers is 15. If a fourth number is added and the average becomes 16, what is the fourth number?",
      options: ["18", "19", "20", "21"],
      answer: "19",
      explanation: "Original sum = 15 × 3 = 45. New sum = 16 × 4 = 64. Fourth number = 64 − 45 = 19."
    },
    // 10
    {
      question: "The average age of 3 brothers is 18 years. If a new baby is born, what happens to the average age?",
      options: [
        "It increases",
        "It decreases",
        "It stays the same",
        "It becomes zero"
      ],
      answer: "It decreases",
      explanation: "The new baby has an age less than 18, so the total age divided by 4 gives a smaller average."
    },
    // 11
    {
      question: "In a class of 20 students, the average score is 75. The top student scored 95. What is the sum of the scores of the other 19 students?",
      options: ["1400", "1405", "1450", "1500"],
      answer: "1405",
      explanation: "Total sum = 75 × 20 = 1500. Sum of other students = 1500 − 95 = 1405."
    },
    // 12
    {
      question: "The average of 6 numbers is 32. If one number is 20, what is the average of the other 5 numbers?",
      options: ["32", "33", "34.4", "35"],
      answer: "34.4",
      explanation: "Total sum = 32 × 6 = 192. Remaining sum = 192 − 20 = 172. New average = 172 ÷ 5 = 34.4."
    },
    // 13
    {
      question: "The average of 3 numbers is 24. The smallest number is 18 and the largest is 30. What is the middle number?",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "Total sum = 24 × 3 = 72. Middle number = 72 − (18 + 30) = 72 − 48 = 24."
    },
    // 14
    {
      question: "A student has scores of 70, 80, and 90. What score must be obtained on the fourth test to have an average of 85?",
      options: ["90", "95", "100", "105"],
      answer: "100",
      explanation: "Required total sum = 85 × 4 = 340. Current sum = 70 + 80 + 90 = 240. Needed score = 340 − 240 = 100."
    },
    // 15
    {
      question: "The average of 50, 60, and x is 70. What is x?",
      options: ["80", "90", "100", "110"],
      answer: "100",
      explanation: "Total sum = 70 × 3 = 210. x = 210 − (50 + 60) = 210 − 110 = 100."
    },
    // 16
    {
      question: "The average of 4 numbers is 18. If one number is 10, what is the average of the remaining three numbers?",
      options: ["18", "19", "20.67", "21"],
      answer: "20.67",
      explanation: "Total sum = 18 × 4 = 72. Remaining sum = 72 − 10 = 62. Average = 62 ÷ 3 ≈ 20.67."
    },
    // 17
    {
      question: "The average of 5 numbers is 28. If one number is increased by 7, what happens to the average?",
      options: [
        "It increases by 1",
        "It increases by 1.4",
        "It increases by 7",
        "It does not change"
      ],
      answer: "It increases by 1.4",
      explanation: "Increasing one number by 7 adds 7 to the total sum. New average increase = 7 ÷ 5 = 1.4."
    },
    // 18 - CORRECTED
    {
      question: "The average of 4, 8, 12, 16, and y is 14. What is y?",
      options: ["18", "20", "22", "30"],
      answer: "30",
      explanation: "Total sum = 14 × 5 = 70. y = 70 − (4 + 8 + 12 + 16) = 70 − 40 = 30."
    },
    // 19
    {
      question: "The average score of 30 students in an exam is 60. The sum of scores of 10 boys is 650. What is the average score of the remaining 20 students?",
      options: ["55", "57.5", "60", "62.5"],
      answer: "57.5",
      explanation: "Total sum = 60 × 30 = 1800. Remaining students sum = 1800 − 650 = 1150. Average = 1150 ÷ 20 = 57.5."
    },
    // 20 - CORRECTED
    {
      question: "The average of 12 numbers is 15. If one number 27 is added, what is the new average of 13 numbers?",
      options: ["15", "15.92", "16", "17"],
      answer: "15.92",
      explanation: "Original sum = 15 × 12 = 180. New sum = 180 + 27 = 207. New average = 207 ÷ 13 ≈ 15.92."
    },
    // 21
    {
      question: "The average of 5 numbers is 19. If one number is 24, what is the sum of the other four numbers?",
      options: ["60", "65", "71", "75"],
      answer: "71",
      explanation: "Total sum = 19 × 5 = 95. Remaining sum = 95 − 24 = 71."
    },
    // 22
    {
      question: "The average of 4, 10, 14, and 22 is:",
      options: ["10", "12.5", "13", "15"],
      answer: "12.5",
      explanation: "4 + 10 + 14 + 22 = 50. Average = 50 ÷ 4 = 12.5."
    },
    // 23
    {
      question: "The average of two groups of numbers is 20 and 30 respectively. If there are 3 numbers in the first group and 2 in the second group, what is the combined average?",
      options: ["24", "25", "26", "27"],
      answer: "24",
      explanation: "First group sum = 20 × 3 = 60. Second group sum = 30 × 2 = 60. Combined sum = 120. Average = 120 ÷ 5 = 24."
    },
    // 24
    {
      question: "The average of 5 numbers is 10. If one more number 20 is added, what is the new average?",
      options: ["10", "11.67", "12", "13"],
      answer: "11.67",
      explanation: "Original sum = 10 × 5 = 50. New sum = 50 + 20 = 70. New average = 70 ÷ 6 ≈ 11.67."
    },
    // 25
    {
      question: "The average of 9 numbers is 14. If the sum of 8 of them is 104, what is the ninth number?",
      options: ["14", "16", "18", "22"],
      answer: "22",
      explanation: "Total sum = 14 × 9 = 126. Ninth number = 126 − 104 = 22."
    },
    // 26
    {
      question: "The average of 7 numbers is 11. If one number is 20, what is the average of the remaining six numbers?",
      options: ["9", "9.5", "10", "11"],
      answer: "9.5",
      explanation: "Total sum = 11 × 7 = 77. Remaining sum = 77 − 20 = 57. Average = 57 ÷ 6 = 9.5."
    },
    // 27
    {
      question: "The average of 3 numbers is 40. The difference between the largest and smallest is 20, and the middle one equals the average. What are the three numbers?",
      options: ["20, 40, 60", "25, 40, 55", "30, 40, 50", "35, 40, 55"],
      answer: "30, 40, 50",
      explanation: "Middle number = average = 40. Difference between largest and smallest is 20. So they are 30, 40, and 50."
    },
    // 28 - CORRECTED
    {
      question: "A cricketer scores 40 runs in each of the first 4 matches. How many runs must be scored in the fifth match to have an average of 50 runs?",
      options: ["70", "80", "90", "100"],
      answer: "90",
      explanation: "Required total sum = 50 × 5 = 250. Current sum = 40 × 4 = 160. Needed runs = 250 − 160 = 90."
    },
    // 29
    {
      question: "The average of 4 numbers is 26. If the sum of the first three numbers is 69, what is the fourth number?",
      options: ["20", "21", "22", "35"],
      answer: "35",
      explanation: "Total sum = 26 × 4 = 104. Fourth number = 104 − 69 = 35."
    },
    // 30
    {
      question: "The average of 10 numbers is 14. If each number is increased by 2, what is the new average?",
      options: ["14", "15", "16", "17"],
      answer: "16",
      explanation: "Adding 2 to each of 10 numbers adds 20 to the sum, raising the average by 2, so new average = 16."
    },
    // 31
    {
      question: "The average of 8 numbers is 32. If one number 40 is removed, what is the average of the remaining seven numbers?",
      options: ["30", "30.86", "31", "33"],
      answer: "30.86",
      explanation: "Total sum = 32 × 8 = 256. Remaining sum = 256 − 40 = 216. New average = 216 ÷ 7 ≈ 30.86."
    },
    // 32
    {
      question: "The average of 4 numbers is 50. If a fifth number is added and the new average becomes 52, what is the fifth number?",
      options: ["56", "58", "60", "62"],
      answer: "60",
      explanation: "Old sum = 50 × 4 = 200. New sum = 52 × 5 = 260. Fifth number = 260 − 200 = 60."
    },
    // 33
    {
      question: "The average of 3, 5, 7, and x is 8. What is x?",
      options: ["12", "13", "14", "17"],
      answer: "17",
      explanation: "Total sum = 8 × 4 = 32. x = 32 − (3 + 5 + 7) = 32 − 15 = 17."
    },
    // 34
    {
      question: "The average of 6 numbers is 16. If one number 10 is replaced by 22, what is the new average?",
      options: ["17", "18", "19", "20"],
      answer: "18",
      explanation: "Original sum = 16 × 6 = 96. New sum = 96 − 10 + 22 = 108. New average = 108 ÷ 6 = 18."
    },
    // 35
    {
      question: "The average of 9, 12, 15, 18, and 21 is:",
      options: ["13", "14", "15", "16"],
      answer: "15",
      explanation: "Sum = 9 + 12 + 15 + 18 + 21 = 75. Average = 75 ÷ 5 = 15."
    },
    // 36
    {
      question: "The average of 4, 6, 10, 14, and 16 is:",
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: "Sum = 4 + 6 + 10 + 14 + 16 = 50. Average = 50 ÷ 5 = 10."
    },
    // 37
    {
      question: "The average of m and 10 is 8. What is the value of m?",
      options: ["4", "6", "8", "10"],
      answer: "6",
      explanation: "(m + 10) ÷ 2 = 8, so m + 10 = 16, giving m = 6."
    },
    // 38
    {
      question: "The average of 3 numbers is A. If each number is multiplied by 4, what is the new average?",
      options: ["A", "2A", "3A", "4A"],
      answer: "4A",
      explanation: "Multiplying each number by 4 multiplies the total sum by 4, so the average is also multiplied by 4."
    },
    // 39
    {
      question: "The average of 10, 20, 30, 40, and 50 is:",
      options: ["25", "30", "35", "40"],
      answer: "30",
      explanation: "Sum = 10 + 20 + 30 + 40 + 50 = 150. Average = 150 ÷ 5 = 30."
    },
    // 40
    {
      question: "The average of 5 numbers is 22. If one number 30 is removed, what is the average of the remaining four numbers?",
      options: ["20", "21", "22", "23"],
      answer: "20",
      explanation: "Total sum = 22 × 5 = 110. Remaining sum = 110 − 30 = 80. New average = 80 ÷ 4 = 20."
    },
    // 41
    {
      question: "The average of 4 numbers is 9. If a fifth number is added and the new average is 10, what is the fifth number?",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "Original sum = 9 × 4 = 36. New sum = 10 × 5 = 50. Fifth number = 50 − 36 = 14."
    },
    // 42
    {
      question: "The average of three numbers is 50. If one number is 60 and another is 40, what is the third number?",
      options: ["40", "50", "60", "70"],
      answer: "50",
      explanation: "Total sum = 50 × 3 = 150. Third number = 150 − (60 + 40) = 150 − 100 = 50."
    },
    // 43
    {
      question: "In a company, the average salary of 8 employees is 25 thousand pesos. What is the total salary paid to them?",
      options: ["150 thousand", "175 thousand", "200 thousand", "225 thousand"],
      answer: "200 thousand",
      explanation: "Total salary = 25 × 8 = 200 thousand pesos."
    },
    // 44
    {
      question: "The average of four numbers is 31. If three of them are 25, 30, and 40, what is the fourth number?",
      options: ["25", "28", "29", "30"],
      answer: "29",
      explanation: "Total sum = 31 × 4 = 124. Fourth number = 124 − (25 + 30 + 40) = 124 − 95 = 29."
    },
    // 45
    {
      question: "The average of 6 consecutive integers is 15.5. What is the smallest integer?",
      options: ["12", "13", "14", "15"],
      answer: "13",
      explanation: "For an even number of consecutive integers, the average is the mean of the two middle numbers. Here the middle two are 15 and 16, so the set is 13, 14, 15, 16, 17, 18. Smallest is 13."
    },
    // 46
    {
      question: "The average of 7 consecutive integers is 20. What is the largest integer?",
      options: ["22", "23", "24", "25"],
      answer: "23",
      explanation: "With 7 consecutive integers, the middle one is the average: 20. So the set is 17, 18, 19, 20, 21, 22, 23. Largest is 23."
    },
    // 47
    {
      question: "The average of 8 numbers is 11. If two of the numbers are 5 and 7, what is the average of the remaining six numbers?",
      options: ["11", "12.67", "13", "14"],
      answer: "12.67",
      explanation: "Total sum = 11 × 8 = 88. Remaining sum = 88 − (5 + 7) = 76. Average = 76 ÷ 6 ≈ 12.67."
    },
    // 48
    {
      question: "The average of 5, 15, 25, 35, and 45 is:",
      options: ["20", "25", "30", "35"],
      answer: "25",
      explanation: "Sum = 5 + 15 + 25 + 35 + 45 = 125. Average = 125 ÷ 5 = 25."
    },
    // 49
    {
      question: "The average of 12, 14, 18, and 26 is:",
      options: ["15", "17.5", "18", "19.5"],
      answer: "17.5",
      explanation: "Sum = 12 + 14 + 18 + 26 = 70. Average = 70 ÷ 4 = 17.5."
    },
    // 50
    {
      question: "The average of 3 numbers is 27. If two of them are 24 and 30, what is the third number?",
      options: ["24", "27", "30", "33"],
      answer: "27",
      explanation: "Total sum = 27 × 3 = 81. Third number = 81 − (24 + 30) = 81 − 54 = 27."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – Tricky & Exam-Style)
  // ==========================================
  expert: [
    // 1
    {
      question: "The average of 20 numbers is 15. If two numbers 5 and 25 are removed, what is the average of the remaining 18 numbers?",
      options: ["14", "15", "16", "17"],
      answer: "15",
      explanation: "Total sum = 15 × 20 = 300. Removed sum = 5 + 25 = 30. Remaining sum = 300 − 30 = 270. New average = 270 ÷ 18 = 15."
    },
    // 2
    {
      question: "The average of 10 numbers is 12. If each number is decreased by 2, what is the new average?",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "Decreasing each of 10 numbers by 2 decreases the average by 2. So new average = 12 − 2 = 10."
    },
    // 3 - CORRECTED
    {
      question: "The average of 8 numbers is 19. If one more number is added and the new average becomes 20, what is the value of the added number?",
      options: ["26", "27", "28", "29"],
      answer: "28",
      explanation: "Old sum = 19 × 8 = 152. New sum = 20 × 9 = 180. Added number = 180 − 152 = 28."
    },
    // 4
    {
      question: "The average of 4 numbers is 45. The first three are 40, 50, and 60. What must the fourth number be?",
      options: ["20", "30", "40", "50"],
      answer: "30",
      explanation: "Total sum = 45 × 4 = 180. Fourth number = 180 − (40 + 50 + 60) = 180 − 150 = 30."
    },
    // 5
    {
      question: "The average of 5 numbers is 32. One new number is added and the average becomes 34. What is the new number?",
      options: ["40", "42", "44", "46"],
      answer: "44",
      explanation: "Old sum = 32 × 5 = 160. New sum = 34 × 6 = 204. New number = 204 − 160 = 44."
    },
    // 6
    {
      question: "The average of 3 numbers is x. If each number is increased by k, what is the new average?",
      options: ["x", "x + k", "x + 3k", "k"],
      answer: "x + k",
      explanation: "Adding k to each of 3 numbers adds 3k to the total sum. Dividing by 3 adds k to the average."
    },
    // 7
    {
      question: "The average of 15 numbers is 18. One number is wrongly recorded as 10 instead of 22. What is the correct average?",
      options: ["18", "18.8", "19", "19.2"],
      answer: "18.8",
      explanation: "Error difference = 22 − 10 = 12. Correct total sum = 18 × 15 + 12 = 270 + 12 = 282. Correct average = 282 ÷ 15 = 18.8."
    },
    // 8
    {
      question: "The average of 12 numbers is 21. If one number 33 is removed, what is the average of the remaining 11 numbers?",
      options: ["19.91", "20", "20.5", "21"],
      answer: "19.91",
      explanation: "Total sum = 21 × 12 = 252. Remaining sum = 252 − 33 = 219. New average = 219 ÷ 11 ≈ 19.91."
    },
    // 9
    {
      question: "The average of 7 numbers is 16. The average of another 3 numbers is 22. What is the combined average of all 10 numbers?",
      options: ["17.8", "18.2", "18.6", "19"],
      answer: "17.8",
      explanation: "First sum = 16 × 7 = 112. Second sum = 22 × 3 = 66. Total sum = 178. Average = 178 ÷ 10 = 17.8."
    },
    // 10
    {
      question: "The average of first 5 multiples of 6 is:",
      options: ["9", "12", "15", "18"],
      answer: "18",
      explanation: "Multiples: 6, 12, 18, 24, 30. Sum = 90. Average = 90 ÷ 5 = 18."
    },
    // 11
    {
      question: "The average of first n natural numbers is:",
      options: ["n", "n + 1", "(n + 1) ÷ 2", "n ÷ 2"],
      answer: "(n + 1) ÷ 2",
      explanation: "Sum of first n natural numbers is n(n + 1) ÷ 2. Dividing by n gives average = (n + 1) ÷ 2."
    },
    // 12
    {
      question: "The average of 10, 20, 30, ..., 100 (all multiples of 10 up to 100) is:",
      options: ["45", "50", "55", "60"],
      answer: "55",
      explanation: "There are 10 terms from 10 to 100. Average of an arithmetic sequence = (first + last) ÷ 2 = (10 + 100) ÷ 2 = 55."
    },
    // 13
    {
      question: "Five numbers have an average of 18. If each number is multiplied by 2 and 4 is added to each new number, what is the new average?",
      options: ["36", "38", "40", "42"],
      answer: "40",
      explanation: "After multiplying by 2, average becomes 36. Adding 4 to each of 5 numbers adds 4 to the average, giving 40."
    },
    // 14
    {
      question: "The average of 50 numbers is 20. If two numbers 10 and 30 are added, what is the new average of 52 numbers?",
      options: ["20", "20.5", "21", "21.5"],
      answer: "20",
      explanation: "Original sum = 20 × 50 = 1000. New sum = 1000 + 10 + 30 = 1040. New average = 1040 ÷ 52 = 20."
    },
    // 15 - CORRECTED
    {
      question: "A batsman has an average of 40 runs after 9 innings. How many runs must be scored in the 10th innings to raise the average to 42?",
      options: ["60", "62", "64", "68"],
      answer: "60",
      explanation: "Required total sum = 42 × 10 = 420. Current sum = 40 × 9 = 360. Needed runs = 420 − 360 = 60."
    },
    // 16
    {
      question: "The average age of a family of 5 members is 30 years. A baby is born. What is the new average age immediately after birth?",
      options: ["25", "26", "27", "30"],
      answer: "25",
      explanation: "Original total age = 30 × 5 = 150. Adding a newborn (0 years) keeps total at 150. New average = 150 ÷ 6 = 25."
    },
    // 17
    {
      question: "The average of 3x, 5x, and 7x is:",
      options: ["3x", "5x", "7x", "5x + 2"],
      answer: "5x",
      explanation: "Sum = 3x + 5x + 7x = 15x. Average = 15x ÷ 3 = 5x."
    },
    // 18
    {
      question: "The average rainfall of a town for 7 months is 12 cm. The total rainfall of the first 6 months is 66 cm. What is the rainfall in the 7th month?",
      options: ["10 cm", "12 cm", "16 cm", "18 cm"],
      answer: "18 cm",
      explanation: "Total for 7 months = 12 × 7 = 84 cm. 7th month = 84 − 66 = 18 cm."
    },
    // 19 - REPLACED with better question
    {
      question: "The average of 4 numbers is 8. If three numbers are 6, 8, and 10, what is the fourth number?",
      options: ["4", "6", "8", "10"],
      answer: "8",
      explanation: "Total sum = 8 × 4 = 32. Fourth number = 32 − (6 + 8 + 10) = 32 − 24 = 8."
    },
    // 20 - CORRECTED
    {
      question: "The average of 8 numbers is 45. If the average of the first four is 40 and the average of the last three is 50, what is the eighth number?",
      options: ["40", "45", "50", "55"],
      answer: "50",
      explanation: "Total sum = 45 × 8 = 360. First four sum = 40 × 4 = 160. Last three sum = 50 × 3 = 150. Eighth number = 360 − (160 + 150) = 50."
    },
    // 21
    {
      question: "The average of 3 numbers is 14. When a fourth number is added, the average becomes 15. If the fifth number equal to the average of the four is added, what is the final average of the five numbers?",
      options: ["15", "15.2", "15.4", "16"],
      answer: "15",
      explanation: "First 3 sum = 14 × 3 = 42. With 4th, average 15 means sum = 15 × 4 = 60, so 4th = 18. The 5th number is also 15 (the new average). Final sum = 60 + 15 = 75. Final average = 75 ÷ 5 = 15."
    },
    // 22
    {
      question: "The average of 9 numbers is 8. If each number is increased by 3 and then divided by 2, what is the new average?",
      options: ["5.5", "6", "7", "8"],
      answer: "5.5",
      explanation: "Original average = 8. After adding 3, average becomes 11. After dividing by 2, new average = 11 ÷ 2 = 5.5."
    },
    // 23 - REPLACED with better question
    {
      question: "The average of 4 numbers is 20. If three numbers are 15, 20, and 25, what is the fourth number?",
      options: ["15", "20", "25", "30"],
      answer: "20",
      explanation: "Total sum = 20 × 4 = 80. Fourth number = 80 − (15 + 20 + 25) = 80 − 60 = 20."
    },
    // 24 - REPLACED with better question
    {
      question: "The average of 11 numbers is 15. If the average of the first six is 12 and that of the last six is 18, what is the sixth number?",
      options: ["13", "14", "15", "16"],
      answer: "15",
      explanation: "First six sum = 12 × 6 = 72. Last six sum = 18 × 6 = 108. Total of all 11 = first five + sixth + last five = (72 − sixth) + sixth + (108 − sixth) = 180 − sixth. But overall average 15 means total = 15 × 11 = 165, so 180 − sixth = 165, giving sixth = 15."
    },
    // 25
    {
      question: "The average of 5 consecutive even numbers is 24. What is the smallest of these numbers?",
      options: ["16", "18", "20", "22"],
      answer: "20",
      explanation: "For 5 consecutive even numbers, the middle one is the average. So numbers are 20, 22, 24, 26, 28. Smallest is 20."
    },
    // 26
    {
      question: "The average of 5 consecutive odd numbers is 31. What is the largest of these numbers?",
      options: ["33", "35", "37", "39"],
      answer: "35",
      explanation: "For 5 consecutive odd numbers, the middle one is the average: 31. Numbers are 27, 29, 31, 33, 35. Largest is 35."
    },
    // 27 
{
  question: "The average salary of 6 employees is 25 thousand pesos. An employee with 31 thousand pesos salary leaves and a new employee joins. The new average becomes 24 thousand pesos. What is the salary of the new employee?",
  options: ["17 thousand", "18 thousand", "19 thousand", "25 thousand"],
  answer: "25 thousand",
  explanation: "Original sum = 25 × 6 = 150. After one leaves, sum = 150 − 31 = 119. New sum = 24 × 6 = 144. New employee salary = 144 − 119 = 25 thousand."
},

    // 28
    {
      question: "The average of 4 numbers is 15. If one number is 9, what is the average of the other three numbers?",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "Total sum = 15 × 4 = 60. Remaining sum = 60 − 9 = 51. New average = 51 ÷ 3 = 17."
    },
    // 29
    {
      question: "The average age of 4 men is 30 years. One of them is 24 years old. What is the average age of the remaining three men?",
      options: ["30", "31", "32", "33"],
      answer: "32",
      explanation: "Total age = 30 × 4 = 120. Remaining sum = 120 − 24 = 96. Average = 96 ÷ 3 = 32."
    },
    // 30
    {
      question: "The average score of 6 students in a test is 68. If the total of the scores of 5 students is 330, what is the score of the sixth student?",
      options: ["50", "60", "70", "78"],
      answer: "78",
      explanation: "Total sum = 68 × 6 = 408. Sixth student score = 408 − 330 = 78."
    },
    // 31
    {
      question: "The average of 4 numbers is 10. The sum of the first three numbers is 21. What is the fourth number?",
      options: ["9", "10", "11", "19"],
      answer: "19",
      explanation: "Total sum = 10 × 4 = 40. Fourth number = 40 − 21 = 19."
    },
    // 32
    {
      question: "The average of 3 numbers is 19. If one number is 15, the average of the other two is:",
      options: ["19", "20", "21", "22"],
      answer: "21",
      explanation: "Total sum = 19 × 3 = 57. Sum of the other two = 57 − 15 = 42. Average = 42 ÷ 2 = 21."
    },
    // 33
    {
      question: "The average of 9, 11, 15, and x is 14. What is x?",
      options: ["15", "16", "17", "21"],
      answer: "21",
      explanation: "Total sum = 14 × 4 = 56. x = 56 − (9 + 11 + 15) = 56 − 35 = 21."
    },
    // 34
    {
      question: "The average of 8 numbers is 13. If the sum of two of them is 20, what is the average of the remaining six numbers?",
      options: ["13", "14", "15", "16"],
      answer: "14",
      explanation: "Total sum = 13 × 8 = 104. Remaining sum = 104 − 20 = 84. New average = 84 ÷ 6 = 14."
    },
    // 35
    {
      question: "The average of 3 numbers is 21. If one of the numbers is 27 and the other two are equal, what is each of the other two numbers?",
      options: ["18", "19", "20", "21"],
      answer: "18",
      explanation: "Total sum = 21 × 3 = 63. Remaining two sum = 63 − 27 = 36. Since they are equal, each is 18."
    },
    // 36
    {
      question: "The average of 10 numbers is 40. If each number is reduced by 5, what is the new average?",
      options: ["30", "32", "34", "35"],
      answer: "35",
      explanation: "Reducing each number by 5 reduces the average by 5, giving 40 − 5 = 35."
    },
    // 37
    {
      question: "The average of 6 numbers is 27. If one number is 33, what is the average of the remaining five numbers?",
      options: ["25.8", "26", "27", "29"],
      answer: "25.8",
      explanation: "Total sum = 27 × 6 = 162. Remaining sum = 162 − 33 = 129. New average = 129 ÷ 5 = 25.8."
    },
    // 38
    {
      question: "The average of 5 numbers is 14. If two numbers are 10 and 12, the average of the remaining three numbers is:",
      options: ["14", "15", "16", "17"],
      answer: "16",
      explanation: "Total sum = 14 × 5 = 70. Remaining sum = 70 − (10 + 12) = 70 − 22 = 48. Average = 48 ÷ 3 = 16."
    },
    // 39 - CORRECTED
    {
      question: "The average of 4, 8, 12, 16, and x is 13. What is x?",
      options: ["16", "18", "20", "25"],
      answer: "25",
      explanation: "Total sum = 13 × 5 = 65. x = 65 − (4 + 8 + 12 + 16) = 65 − 40 = 25."
    },
    // 40 - REPLACED with better question
    {
      question: "The average of 3 numbers is A. If one number is removed, the average of the remaining two is A − 2. What is the removed number?",
      options: ["A + 2", "A + 4", "A + 6", "A − 4"],
      answer: "A + 4",
      explanation: "Let numbers be a, b, c with average A. Suppose c is removed. We have (a + b + c) ÷ 3 = A and (a + b) ÷ 2 = A − 2. From first: a + b + c = 3A. From second: a + b = 2A − 4. Substituting: (2A − 4) + c = 3A, so c = A + 4."
    },
    // 41
    {
      question: "The average of 9, 7, 5, 3, and x is 7. What is x?",
      options: ["10", "11", "12", "13"],
      answer: "11",
      explanation: "Total sum = 7 × 5 = 35. Known sum = 9 + 7 + 5 + 3 = 24. x = 35 − 24 = 11."
    },
    // 42
    {
      question: "The average of 4 distinct numbers is 18. The smallest is 10 and the largest is 26. The average of the two middle numbers is:",
      options: ["16", "18", "20", "22"],
      answer: "18",
      explanation: "Total sum = 18 × 4 = 72. Middle two sum = 72 − (10 + 26) = 72 − 36 = 36. Their average = 36 ÷ 2 = 18."
    },
    // 43
    {
      question: "The average of 7 numbers is 13. If the average of the first three is 11 and the average of the last three is 15, what is the middle number?",
      options: ["11", "13", "15", "17"],
      answer: "13",
      explanation: "Total sum = 13 × 7 = 91. First three sum = 11 × 3 = 33. Last three sum = 15 × 3 = 45. Middle number = 91 − (33 + 45) = 91 − 78 = 13."
    },
    // 44
    {
      question: "The average of m and n is p. What is the sum of m and n in terms of p?",
      options: ["p", "2p", "p ÷ 2", "p + 2"],
      answer: "2p",
      explanation: "Average = (m + n) ÷ 2 = p, so m + n = 2p."
    },
    // 45
    {
      question: "The average of 4 numbers is 30. If one number is 40 and the rest are equal, what is each of the remaining three numbers?",
      options: ["25", "26.67", "27", "28"],
      answer: "26.67",
      explanation: "Total sum = 30 × 4 = 120. Remaining three sum = 120 − 40 = 80. Each = 80 ÷ 3 ≈ 26.67."
    },
    // 46
    {
      question: "The average of 3 numbers is 10. If 2 is added to each number, what is the new average?",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "Adding 2 to each of three numbers increases the average by 2, so new average = 10 + 2 = 12."
    },
    // 47
    {
      question: "The average of 5 numbers is 8. If one number 3 is replaced by 13, what is the new average?",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "Original sum = 8 × 5 = 40. New sum = 40 − 3 + 13 = 50. New average = 50 ÷ 5 = 10."
    },
    // 48
    {
      question: "The average of 12 numbers is 25. If each number is increased by 3, what is the new average?",
      options: ["25", "26", "27", "28"],
      answer: "28",
      explanation: "Increasing each by 3 increases the average by 3, so new average = 25 + 3 = 28."
    },
    // 49
    {
      question: "The average of 4, 8, 12, 16, and 20 is increased by adding another number 24. What is the new average?",
      options: ["12", "13", "14", "15"],
      answer: "14",
      explanation: "Original sum = 4 + 8 + 12 + 16 + 20 = 60. New sum = 60 + 24 = 84. New average = 84 ÷ 6 = 14."
    },
    // 50
    {
      question: "The average of 5 numbers is 36. If a new number is added and the new average becomes 40, what is the new number?",
      options: ["50", "55", "60", "65"],
      answer: "60",
      explanation: "Original sum = 36 × 5 = 180. New sum = 40 × 6 = 240. New number = 240 − 180 = 60."
    }
  ]

};
