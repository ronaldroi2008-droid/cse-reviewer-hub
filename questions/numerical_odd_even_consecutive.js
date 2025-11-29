// questions/numerical_odd_even_consecutive.js
// ==========================================
// NUMERICAL – ODD, EVEN, AND CONSECUTIVE INTEGERS (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["odd_even_consecutive"] = {

  // ==========================================
  // LEVEL 1: Beginner (50 items – Odd/Even Basics & Simple Consecutive)
  // ==========================================
  beginner: [
    // 1
    {
      question: "Is 7 an odd number or an even number?",
      options: ["Odd", "Even", "Neither", "Both"],
      answer: "Odd",
      explanation: "Odd numbers are not divisible by 2. Since 7 ÷ 2 does not give a whole number, 7 is odd."
    },
    // 2
    {
      question: "Is 18 an odd number or an even number?",
      options: ["Odd", "Even", "Prime", "Neither"],
      answer: "Even",
      explanation: "Even numbers are divisible by 2. Since 18 ÷ 2 = 9, 18 is an even number."
    },
    // 3
    {
      question: "Which of the following numbers is even?",
      options: ["11", "13", "15", "18"],
      answer: "18",
      explanation: "Even numbers end in 0, 2, 4, 6, or 8. Among the choices, only 18 ends with 8."
    },
    // 4
    {
      question: "Which of the following numbers is odd?",
      options: ["12", "24", "31", "40"],
      answer: "31",
      explanation: "Odd numbers end in 1, 3, 5, 7, or 9. Among the choices, only 31 ends with 1."
    },
    // 5
    {
      question: "What is the next even number after 10?",
      options: ["11", "12", "13", "14"],
      answer: "12",
      explanation: "Even numbers increase by 2: 10, 12, 14, ... So the next even number after 10 is 12."
    },
    // 6
    {
      question: "What is the next odd number after 21?",
      options: ["22", "23", "24", "25"],
      answer: "23",
      explanation: "Odd numbers increase by 2: 21, 23, 25, ... So the next odd number after 21 is 23."
    },
    // 7
    {
      question: "What is the previous even number before 20?",
      options: ["18", "19", "21", "17"],
      answer: "18",
      explanation: "Even numbers go 16, 18, 20, 22, ... So the even number before 20 is 18."
    },
    // 8
    {
      question: "What is the previous odd number before 30?",
      options: ["27", "29", "31", "33"],
      answer: "29",
      explanation: "Odd numbers go 27, 29, 31, ... The odd number just before 30 is 29."
    },
    // 9
    {
      question: "Which list contains only even numbers?",
      options: ["2, 5, 8", "4, 6, 10", "3, 6, 9", "5, 7, 11"],
      answer: "4, 6, 10",
      explanation: "2, 4, 6, 8, 10, ... are even. Only 4, 6, 10 are all even numbers."
    },
    // 10
    {
      question: "Which list contains only odd numbers?",
      options: ["1, 3, 5", "2, 3, 4", "4, 5, 6", "6, 8, 10"],
      answer: "1, 3, 5",
      explanation: "Odd numbers are 1, 3, 5, 7, ... Only the list 1, 3, 5 contains all odd numbers."
    },
    // 11
    {
      question: "How many even numbers are there in the set {3, 6, 8, 10}?",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "6, 8, and 10 are even, while 3 is odd. So there are 3 even numbers."
    },
    // 12
    {
      question: "How many odd numbers are there in the set {5, 9, 12, 17}?",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "5, 9, and 17 are odd. Only 12 is even, so there are 3 odd numbers."
    },
    // 13
    {
      question: "Which pair shows consecutive integers?",
      options: ["4 and 5", "6 and 8", "10 and 12", "13 and 15"],
      answer: "4 and 5",
      explanation: "Consecutive integers differ by 1. Only 4 and 5 have a difference of 1."
    },
    // 14
    {
      question: "Which pair shows consecutive odd integers?",
      options: ["3 and 5", "6 and 8", "8 and 9", "10 and 11"],
      answer: "3 and 5",
      explanation: "Consecutive odd integers differ by 2 and are both odd. 3 and 5 are odd and differ by 2."
    },
    // 15
    {
      question: "Which pair shows consecutive even integers?",
      options: ["2 and 4", "3 and 4", "5 and 8", "7 and 9"],
      answer: "2 and 4",
      explanation: "Consecutive even integers differ by 2 and are both even. 2 and 4 fit this rule."
    },
    // 16
    {
      question: "The numbers 9 and 10 are:",
      options: ["Both odd", "Both even", "Consecutive integers", "Not integers"],
      answer: "Consecutive integers",
      explanation: "9 and 10 differ by 1, so they are consecutive integers."
    },
    // 17
    {
      question: "The numbers 14 and 16 are:",
      options: ["Consecutive integers", "Both odd", "Consecutive even integers", "One odd and one even"],
      answer: "Consecutive even integers",
      explanation: "14 and 16 are both even and differ by 2, so they are consecutive even integers."
    },
    // 18
    {
      question: "The numbers 21 and 23 are:",
      options: ["Consecutive integers", "Consecutive odd integers", "Consecutive even integers", "Both even"],
      answer: "Consecutive odd integers",
      explanation: "21 and 23 are both odd and differ by 2, so they are consecutive odd integers."
    },
    // 19
    {
      question: "Which of the following is an odd integer?",
      options: ["0", "2", "7", "10"],
      answer: "7",
      explanation: "Odd integers are not divisible by 2. Among the choices, only 7 is odd."
    },
    // 20
    {
      question: "Which of the following is an even integer?",
      options: ["3", "5", "9", "12"],
      answer: "12",
      explanation: "Even integers are divisible by 2. Among the choices, only 12 is even."
    },
    // 21
    {
      question: "Which of the following is NOT an integer?",
      options: ["-3", "0", "4.5", "12"],
      answer: "4.5",
      explanation: "Integers are whole numbers (negative, zero, or positive). 4.5 is not a whole number."
    },
    // 22
    {
      question: "Which of the following is an even integer?",
      options: ["-5", "-4", "-3", "-1"],
      answer: "-4",
      explanation: "Even integers can be negative. -4 is divisible by 2, so it is even."
    },
    // 23
    {
      question: "Which of the following is an odd integer?",
      options: ["-8", "-6", "-2", "-1"],
      answer: "-1",
      explanation: "Odd integers are not divisible by 2. -1 is not divisible by 2, so it is odd."
    },
    // 24
    {
      question: "If a number ends in 5, it is always:",
      options: ["Even", "Odd", "Prime", "Negative"],
      answer: "Odd",
      explanation: "Numbers ending in 1, 3, 5, 7, or 9 are always odd. So any number ending in 5 is odd."
    },
    // 25
    {
      question: "If a number ends in 0, 2, 4, 6, or 8, it is:",
      options: ["Odd", "Even", "Prime", "Negative"],
      answer: "Even",
      explanation: "Any number whose last digit is 0, 2, 4, 6, or 8 is an even number."
    },
    // 26
    {
      question: "What is the smallest positive even integer?",
      options: ["0", "1", "2", "3"],
      answer: "2",
      explanation: "0 is even but not positive. The smallest positive even integer is 2."
    },
    // 27
    {
      question: "What is the smallest positive odd integer?",
      options: ["0", "1", "2", "3"],
      answer: "1",
      explanation: "Positive odd integers start at 1, then 3, 5, 7, and so on."
    },
    // 28
    {
      question: "What is the next odd number after 30?",
      options: ["31", "32", "33", "29"],
      answer: "31",
      explanation: "Odd numbers alternate with even numbers. The next odd number after 30 is 31."
    },
    // 29
    {
      question: "What is the next even number after 27?",
      options: ["28", "29", "30", "31"],
      answer: "28",
      explanation: "After odd number 27, the next even number is 28."
    },
    // 30
    {
      question: "What are the next two odd integers after 11?",
      options: ["12 and 13", "13 and 15", "15 and 17", "10 and 12"],
      answer: "13 and 15",
      explanation: "Odd numbers after 11 are 13, 15, 17, ... so the next two are 13 and 15."
    },
    // 31
    {
      question: "What are the next two even integers after 8?",
      options: ["9 and 11", "10 and 12", "11 and 13", "12 and 14"],
      answer: "10 and 12",
      explanation: "Even numbers after 8 are 10, 12, 14, ... so the next two are 10 and 12."
    },
    // 32
    {
      question: "Which of the following are consecutive integers?",
      options: ["5 and 7", "8 and 9", "10 and 12", "14 and 17"],
      answer: "8 and 9",
      explanation: "Consecutive integers differ by 1. Only 8 and 9 differ by 1."
    },
    // 33
    {
      question: "Which of the following are consecutive odd integers?",
      options: ["7 and 9", "8 and 10", "9 and 11", "10 and 12"],
      answer: "7 and 9",
      explanation: "Consecutive odd integers are odd and differ by 2. 7 and 9 fit this description."
    },
    // 34
    {
      question: "Which of the following are consecutive even integers?",
      options: ["10 and 12", "11 and 13", "9 and 11", "7 and 10"],
      answer: "10 and 12",
      explanation: "Consecutive even integers are even and differ by 2. 10 and 12 fit this description."
    },
    // 35
    {
      question: "Among the numbers 4, 9, 12, 15, how many are odd?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "9 and 15 are odd. 4 and 12 are even. So there are 2 odd numbers."
    },
    // 36
    {
      question: "Among the numbers 7, 10, 13, 16, how many are even?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "10 and 16 are even. 7 and 13 are odd. So there are 2 even numbers."
    },
    // 37
    {
      question: "Which of the following numbers is between 7 and 9 and is an integer?",
      options: ["6", "7.5", "8", "10"],
      answer: "8",
      explanation: "The integer between 7 and 9 is 8. 7.5 is not an integer."
    },
    // 38
    {
      question: "If you start at 5 and move to the next consecutive integer, where will you land?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Consecutive integers differ by 1. The integer after 5 is 6."
    },
    // 39
    {
      question: "If you start at 12 and move to the previous consecutive integer, where will you land?",
      options: ["10", "11", "13", "14"],
      answer: "11",
      explanation: "The previous consecutive integer before 12 is 11 because 12 - 1 = 11."
    },
    // 40
    {
      question: "Which of the following describes 13 correctly?",
      options: ["Even integer", "Odd integer", "Multiple of 4", "Negative integer"],
      answer: "Odd integer",
      explanation: "13 is not divisible by 2 and is positive, so it is an odd integer."
    },
    // 41
    {
      question: "Which of the following describes 24 correctly?",
      options: ["Odd integer", "Even integer", "Prime number", "Negative integer"],
      answer: "Even integer",
      explanation: "24 is divisible by 2, so it is an even integer."
    },
    // 42
    {
      question: "Which of these pairs are NOT consecutive integers?",
      options: ["2 and 3", "5 and 6", "8 and 10", "11 and 12"],
      answer: "8 and 10",
      explanation: "Consecutive integers differ by 1. 8 and 10 differ by 2, so they are not consecutive."
    },
    // 43
    {
      question: "Which of these pairs are NOT consecutive odd integers?",
      options: ["3 and 5", "5 and 7", "7 and 9", "9 and 12"],
      answer: "9 and 12",
      explanation: "Consecutive odd integers must both be odd and differ by 2. 12 is even, so 9 and 12 are not consecutive odd integers."
    },
    // 44
    {
      question: "Which of these pairs are NOT consecutive even integers?",
      options: ["4 and 6", "6 and 8", "8 and 9", "10 and 12"],
      answer: "8 and 9",
      explanation: "Consecutive even integers must both be even and differ by 2. 9 is odd, so 8 and 9 do not qualify."
    },
    // 45
    {
      question: "Which of the following numbers is both even and an integer?",
      options: ["3.5", "4", "5.2", "7.7"],
      answer: "4",
      explanation: "4 is a whole number and divisible by 2, making it an even integer."
    },
    // 46
    {
      question: "Which of the following numbers is both odd and an integer?",
      options: ["2", "4", "6", "9"],
      answer: "9",
      explanation: "9 is a whole number and not divisible by 2, making it an odd integer."
    },
    // 47
    {
      question: "Which statement is TRUE?",
      options: ["All even numbers are odd", "All odd numbers are even", "Every integer is either odd or even", "Some integers are neither odd nor even"],
      answer: "Every integer is either odd or even",
      explanation: "By definition, every integer is classified as either odd or even."
    },
    // 48
    {
      question: "Which statement is TRUE about consecutive integers?",
      options: ["They differ by 2", "They differ by 1", "They are always even", "They are always odd"],
      answer: "They differ by 1",
      explanation: "Consecutive integers follow one another with a difference of exactly 1."
    },
    // 49
    {
      question: "Which statement is TRUE about consecutive even integers?",
      options: ["They differ by 1", "They differ by 2", "They are always odd", "They are always negative"],
      answer: "They differ by 2",
      explanation: "Even numbers are 2 units apart, so consecutive even integers differ by 2."
    },
    // 50
    {
      question: "Which statement is TRUE about consecutive odd integers?",
      options: ["They differ by 1", "They differ by 2", "They are always even", "They are not integers"],
      answer: "They differ by 2",
      explanation: "Odd numbers are 2 units apart, so consecutive odd integers differ by 2."
    }
  ],

  // ==========================================
  // LEVEL 2: Intermediate (50 items – Sums, Differences, Basic Word Problems)
  // ==========================================
  intermediate: [
    // 1
    {
      question: "The sum of two consecutive integers is 29. What is the larger integer?",
      options: ["13", "14", "15", "16"],
      answer: "15",
      explanation: "Let the integers be x and x + 1. Then x + (x + 1) = 29 → 2x + 1 = 29 → 2x = 28 → x = 14. The larger is 15."
    },
    // 2
    {
      question: "The sum of two consecutive integers is 55. What is the smaller integer?",
      options: ["26", "27", "28", "29"],
      answer: "27",
      explanation: "Let the integers be x and x + 1. Then 2x + 1 = 55 → 2x = 54 → x = 27, the smaller integer."
    },
    // 3
    {
      question: "The sum of two consecutive even integers is 46. What is the larger integer?",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "Let the even integers be x and x + 2. Then x + (x + 2) = 46 → 2x + 2 = 46 → 2x = 44 → x = 22. The larger is 24."
    },
    // 4
    {
      question: "The sum of two consecutive even integers is 74. What is the smaller integer?",
      options: ["32", "34", "36", "38"],
      answer: "36",
      explanation: "Let the even integers be x and x + 2. Then 2x + 2 = 74 → 2x = 72 → x = 36, the smaller integer."
    },
    // 5
    {
      question: "The sum of two consecutive odd integers is 68. What is the smaller integer?",
      options: ["31", "33", "35", "37"],
      answer: "33",
      explanation: "Let the odd integers be x and x + 2. Then 2x + 2 = 68 → 2x = 66 → x = 33, the smaller odd integer."
    },
    // 6
    {
      question: "The sum of two consecutive odd integers is 88. What is the larger integer?",
      options: ["41", "43", "45", "47"],
      answer: "45",
      explanation: "Let the odd integers be x and x + 2. Then 2x + 2 = 88 → 2x = 86 → x = 43. The larger odd integer is 45."
    },
    // 7
    {
      question: "The sum of two consecutive integers is 101. What is the larger integer?",
      options: ["49", "50", "51", "52"],
      answer: "51",
      explanation: "Let the integers be x and x + 1. Then 2x + 1 = 101 → 2x = 100 → x = 50. The larger is 51."
    },
    // 8
    {
      question: "The sum of two consecutive even integers is 90. What is the larger integer?",
      options: ["42", "44", "46", "48"],
      answer: "46",
      explanation: "Let the even integers be x and x + 2. Then 2x + 2 = 90 → 2x = 88 → x = 44. The larger is 46."
    },
    // 9
    {
      question: "The sum of two consecutive odd integers is 72. What is the smaller integer?",
      options: ["33", "35", "37", "39"],
      answer: "35",
      explanation: "Let the odd integers be x and x + 2. Then 2x + 2 = 72 → 2x = 70 → x = 35, the smaller odd integer."
    },
    // 10
    {
      question: "The sum of two consecutive integers is 43. What is the smaller integer?",
      options: ["20", "21", "22", "23"],
      answer: "21",
      explanation: "Let the integers be x and x + 1. Then 2x + 1 = 43 → 2x = 42 → x = 21."
    },
    // 11
    {
      question: "The sum of two consecutive integers is -5. What is the larger integer?",
      options: ["-4", "-3", "-2", "-1"],
      answer: "-2",
      explanation: "Let the integers be x and x + 1. Then 2x + 1 = -5 → 2x = -6 → x = -3. The larger is -2."
    },
    // 12
    {
      question: "The sum of two consecutive even integers is -26. What is the smaller integer?",
      options: ["-18", "-16", "-14", "-12"],
      answer: "-14",
      explanation: "Let the even integers be x and x + 2. Then 2x + 2 = -26 → 2x = -28 → x = -14."
    },
    // 13
    {
      question: "The sum of two consecutive odd integers is -32. What is the larger integer?",
      options: ["-19", "-17", "-15", "-13"],
      answer: "-15",
      explanation: "Let the odd integers be x and x + 2. Then 2x + 2 = -32 → 2x = -34 → x = -17. The larger is -15."
    },
    // 14
    {
      question: "What is the difference between two consecutive integers?",
      options: ["0", "1", "2", "3"],
      answer: "1",
      explanation: "Consecutive integers follow one another, so they always differ by 1."
    },
    // 15
    {
      question: "What is the difference between two consecutive even integers?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Even numbers are 2 units apart: 2, 4, 6, 8, ..."
    },
    // 16
    {
      question: "What is the difference between two consecutive odd integers?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Odd numbers are 2 units apart: 1, 3, 5, 7, ..."
    },
    // 17
    {
      question: "The sum of two odd integers is always:",
      options: ["Odd", "Even", "Prime", "Negative"],
      answer: "Even",
      explanation: "Odd + odd = even. Example: 3 + 5 = 8."
    },
    // 18
    {
      question: "The sum of two even integers is always:",
      options: ["Odd", "Even", "Prime", "Zero"],
      answer: "Even",
      explanation: "Even + even = even. Example: 4 + 6 = 10."
    },
    // 19
    {
      question: "The sum of an odd integer and an even integer is always:",
      options: ["Odd", "Even", "Prime", "Negative"],
      answer: "Odd",
      explanation: "Odd + even = odd. Example: 3 + 4 = 7."
    },
    // 20
    {
      question: "The product of an odd integer and an even integer is always:",
      options: ["Odd", "Even", "Prime", "Negative"],
      answer: "Even",
      explanation: "Any product with an even factor is even."
    },
    // 21
    {
      question: "The sum of three consecutive integers is 48. What is the middle integer?",
      options: ["14", "15", "16", "17"],
      answer: "16",
      explanation: "Let the integers be x - 1, x, x + 1. Their sum is 3x = 48 → x = 16, the middle integer."
    },
    // 22
    {
      question: "The sum of three consecutive integers is 75. What is the middle integer?",
      options: ["23", "24", "25", "26"],
      answer: "25",
      explanation: "3x = 75 → x = 25, so the integers are 24, 25, 26. The middle is 25."
    },
    // 23
    {
      question: "The sum of three consecutive even integers is 72. What is the middle integer?",
      options: ["22", "24", "26", "28"],
      answer: "24",
      explanation: "Let them be x - 2, x, x + 2. Then 3x = 72 → x = 24, the middle even integer."
    },
    // 24
    {
      question: "The sum of three consecutive odd integers is 81. What is the smallest integer?",
      options: ["23", "25", "27", "29"],
      answer: "25",
      explanation: "Let them be x - 2, x, x + 2. Then 3x = 81 → x = 27, so the integers are 25, 27, 29. The smallest is 25."
    },
    // 25
    {
      question: "The sum of three consecutive even integers is 90. What is the smallest integer?",
      options: ["26", "28", "30", "32"],
      answer: "28",
      explanation: "3x = 90 → x = 30, so the integers are 28, 30, 32. The smallest is 28."
    },
    // 26
    {
      question: "The sum of three consecutive odd integers is 69. What is the largest integer?",
      options: ["21", "23", "25", "27"],
      answer: "25",
      explanation: "3x = 69 → x = 23, so the integers are 21, 23, 25. The largest is 25."
    },
    // 27
    {
      question: "The average of three consecutive integers is 20. What is the largest integer?",
      options: ["19", "20", "21", "22"],
      answer: "21",
      explanation: "For three consecutive integers, the average is the middle. So the integers are 19, 20, 21. Largest is 21."
    },
    // 28
    {
      question: "The average of three consecutive even integers is 26. What is the smallest integer?",
      options: ["22", "24", "26", "28"],
      answer: "24",
      explanation: "Middle even integer is 26, so the three are 24, 26, 28. The smallest is 24."
    },
    // 29
    {
      question: "The average of three consecutive odd integers is 17. What is the smallest integer?",
      options: ["13", "15", "17", "19"],
      answer: "15",
      explanation: "Middle odd integer is 17, so the three are 15, 17, 19. The smallest is 15."
    },
    // 30
    {
      question: "Four consecutive integers have a sum of 50. What is the smallest integer?",
      options: ["10", "11", "12", "13"],
      answer: "11",
      explanation: "Let them be x, x + 1, x + 2, x + 3. Then 4x + 6 = 50 → 4x = 44 → x = 11."
    },
    // 31
    {
      question: "Four consecutive even integers have a sum of 68. What is the largest integer?",
      options: ["18", "20", "22", "24"],
      answer: "20",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 68 → 4x = 56 → x = 14. Largest is 20."
    },
    // 32
    {
      question: "Four consecutive odd integers have a sum of 72. What is the smallest integer?",
      options: ["13", "15", "17", "19"],
      answer: "15",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 72 → 4x = 60 → x = 15."
    },
    // 33
    {
      question: "If n is an odd integer, what can be said about n + 2?",
      options: ["It is odd", "It is even", "It is prime", "It is negative"],
      answer: "It is odd",
      explanation: "Odd + 2 is still odd. Example: 5 + 2 = 7."
    },
    // 34
    {
      question: "If n is an even integer, what can be said about n + 2?",
      options: ["It is odd", "It is even", "It is zero", "It is negative"],
      answer: "It is even",
      explanation: "Even + 2 is still even. Example: 8 + 2 = 10."
    },
    // 35
    {
      question: "If n is any integer, which of the following is always even?",
      options: ["n + 1", "2n", "2n + 1", "n^2 + 1"],
      answer: "2n",
      explanation: "2n is divisible by 2 for any integer n, so it is always even."
    },
    // 36
    {
      question: "If n is any integer, which of the following is always odd?",
      options: ["2n", "2n + 1", "n^2", "n + 2"],
      answer: "2n + 1",
      explanation: "2n is even, so 2n + 1 is always one more than an even number, making it odd."
    },
    // 37
    {
      question: "A number is even. Its previous and next consecutive integers are:",
      options: ["Both odd", "Both even", "One odd and one even", "Both zero"],
      answer: "Both odd",
      explanation: "If n is even, then n - 1 and n + 1 are both odd."
    },
    // 38
    {
      question: "A number is odd. Its previous and next consecutive integers are:",
      options: ["Both odd", "Both even", "One odd and one even", "Both zero"],
      answer: "Both even",
      explanation: "If n is odd, then n - 1 and n + 1 are both even."
    },
    // 39
    {
      question: "Two consecutive integers have a product of 90. What is the larger integer?",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "Let the integers be x and x + 1. Then x(x + 1) = 90 → x^2 + x - 90 = 0 → (x + 10)(x - 9) = 0, so x = 9. Larger is 10."
    },
    // 40
    {
      question: "Two consecutive even integers have a product of 168. What is the smaller integer?",
      options: ["10", "12", "14", "16"],
      answer: "12",
      explanation: "Let them be x and x + 2. Then x(x + 2) = 168 → x^2 + 2x - 168 = 0 → (x - 12)(x + 14) = 0, so x = 12."
    },
    // 41
    {
      question: "Two consecutive odd integers have a product of 99. What is the larger integer?",
      options: ["9", "11", "13", "15"],
      answer: "11",
      explanation: "Try odd pairs: 9 × 11 = 99, so the integers are 9 and 11. The larger is 11."
    },
    // 42
    {
      question: "Which of the following sets shows four consecutive integers?",
      options: ["10, 11, 12, 13", "10, 12, 14, 16", "3, 5, 7, 9", "20, 22, 24, 26"],
      answer: "10, 11, 12, 13",
      explanation: "Consecutive integers differ by 1. Only 10, 11, 12, 13 follow this pattern."
    },
    // 43
    {
      question: "Which of the following sets shows four consecutive odd integers?",
      options: ["5, 7, 9, 11", "6, 8, 10, 12", "7, 9, 12, 14", "10, 12, 14, 16"],
      answer: "5, 7, 9, 11",
      explanation: "Consecutive odd integers are odd and differ by 2. 5, 7, 9, 11 fit this rule."
    },
    // 44
    {
      question: "Which of the following sets shows four consecutive even integers?",
      options: ["9, 11, 13, 15", "10, 12, 14, 16", "3, 5, 7, 9", "11, 13, 15, 17"],
      answer: "10, 12, 14, 16",
      explanation: "Consecutive even integers are even and differ by 2."
    },
    // 45
    {
      question: "Three consecutive integers have a sum of 45. How many of them are even?",
      options: ["0", "1", "2", "3"],
      answer: "2",
      explanation: "The integers are 14, 15, 16. Two of them (14 and 16) are even."
    },
    // 46
    {
      question: "Three consecutive integers have a sum of 60. How many of them are odd?",
      options: ["0", "1", "2", "3"],
      answer: "2",
      explanation: "The integers are 19, 20, 21. Two of them (19 and 21) are odd."
    },
    // 47
    {
      question: "Three consecutive even integers have a sum of 66. How many of them are odd?",
      options: ["0", "1", "2", "3"],
      answer: "0",
      explanation: "The integers are 20, 22, 24, which are all even."
    },
    // 48
    {
      question: "Three consecutive odd integers have a sum of 81. How many of them are even?",
      options: ["0", "1", "2", "3"],
      answer: "0",
      explanation: "The integers are 25, 27, 29, which are all odd."
    },
    // 49
    {
      question: "Between 10 and 20 (inclusive), how many odd integers are there?",
      options: ["4", "5", "6", "7"],
      answer: "5",
      explanation: "Odd integers from 10 to 20 are 11, 13, 15, 17, 19. That is 5 numbers."
    },
    // 50
    {
      question: "Between 10 and 20 (inclusive), how many even integers are there?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Even integers from 10 to 20 are 10, 12, 14, 16, 18, 20. That is 6 numbers."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Harder sums & word problems)
  // ==========================================
  advanced: [
    // 1
    {
      question: "The sum of three consecutive even integers is 84. What is the largest integer?",
      options: ["24", "26", "28", "30"],
      answer: "30",
      explanation: "Let the integers be x, x + 2, x + 4. Then 3x + 6 = 84 ⇒ 3x = 78 ⇒ x = 26. The largest is 26 + 4 = 30."
    },
    // 2
    {
      question: "The sum of three consecutive odd integers is 105. What is the smallest integer?",
      options: ["31", "33", "35", "37"],
      answer: "33",
      explanation: "Let the integers be x, x + 2, x + 4. Then 3x + 6 = 105 ⇒ 3x = 99 ⇒ x = 33."
    },
    // 3
    {
      question: "The sum of four consecutive integers is 62. What is the second integer?",
      options: ["14", "15", "16", "17"],
      answer: "15",
      explanation: "Let the integers be x, x + 1, x + 2, x + 3. Then 4x + 6 = 62 ⇒ 4x = 56 ⇒ x = 14. The second integer is 14 + 1 = 15."
    },
    // 4
    {
      question: "Four consecutive odd integers have a sum of 80. What is the largest integer?",
      options: ["19", "21", "23", "25"],
      answer: "23",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 80 ⇒ 4x = 68 ⇒ x = 17. The largest is 17 + 6 = 23."
    },
    // 5
    {
      question: "Five consecutive integers have a sum of 135. What is the middle integer?",
      options: ["25", "26", "27", "28"],
      answer: "27",
      explanation: "Let the middle integer be m. The five numbers are m − 2, m − 1, m, m + 1, m + 2, so 5m = 135 ⇒ m = 27."
    },
    // 6
    {
      question: "Three consecutive even integers have a sum of 90. What is the smallest integer?",
      options: ["26", "28", "30", "32"],
      answer: "28",
      explanation: "Let the integers be x, x + 2, x + 4. Then 3x + 6 = 90 ⇒ 3x = 84 ⇒ x = 28."
    },
    // 7
    {
      question: "Four consecutive even integers have a sum of 220. What is the second integer?",
      options: ["52", "54", "56", "58"],
      answer: "54",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 220 ⇒ 4x = 208 ⇒ x = 52. The second is 52 + 2 = 54."
    },
    // 8
    {
      question: "Five consecutive odd integers have a sum of 175. What is the second largest integer?",
      options: ["35", "37", "39", "41"],
      answer: "37",
      explanation: "Let them be x, x + 2, x + 4, x + 6, x + 8. Then 5x + 20 = 175 ⇒ 5x = 155 ⇒ x = 31. Numbers: 31, 33, 35, 37, 39; second largest is 37."
    },
    // 9
    {
      question: "The sum of three consecutive integers is 3 less than six times the smallest integer. What is the largest integer?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Let the integers be x, x + 1, x + 2. Then x + (x + 1) + (x + 2) = 6x − 3 ⇒ 3x + 3 = 6x − 3 ⇒ 3x = 6 ⇒ x = 2. Largest is 4."
    },
    // 10
    {
      question: "The sum of three consecutive odd integers is 24 more than the smallest integer. What is the largest integer?",
      options: ["9", "11", "13", "15"],
      answer: "13",
      explanation: "Let them be x, x + 2, x + 4. Then 3x + 6 = x + 24 ⇒ 2x = 18 ⇒ x = 9. Largest is 9 + 4 = 13."
    },
    // 11
    {
      question: "Three consecutive integers add up to 51. What is the middle integer?",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "Let the middle be m. Then (m − 1) + m + (m + 1) = 51 ⇒ 3m = 51 ⇒ m = 17."
    },
    // 12
    {
      question: "The sum of three consecutive even integers is 18 more than the largest integer. What is the smallest integer?",
      options: ["6", "8", "10", "12"],
      answer: "8",
      explanation: "Let them be x, x + 2, x + 4. Then 3x + 6 = (x + 4) + 18 ⇒ 3x + 6 = x + 22 ⇒ 2x = 16 ⇒ x = 8."
    },
    // 13
    {
      question: "The sum of four consecutive integers is 6 less than three times the smallest integer. What is the largest integer?",
      options: ["-12", "-10", "-9", "-8"],
      answer: "-9",
      explanation: "Let them be x, x + 1, x + 2, x + 3. Then 4x + 6 = 3x − 6 ⇒ x = −12. Largest is −12 + 3 = −9."
    },
    // 14
    {
      question: "The sum of three consecutive odd integers is −9. What is the largest integer?",
      options: ["-5", "-3", "-1", "1"],
      answer: "-1",
      explanation: "Let them be x, x + 2, x + 4. Then 3x + 6 = −9 ⇒ 3x = −15 ⇒ x = −5. Largest is −1."
    },
    // 15
    {
      question: "The sum of five consecutive integers is −25. What is the smallest integer?",
      options: ["-9", "-7", "-5", "-3"],
      answer: "-7",
      explanation: "Let the middle be m. Then 5m = −25 ⇒ m = −5. Numbers: −7, −6, −5, −4, −3; smallest is −7."
    },
    // 16
    {
      question: "Three consecutive even integers add up to 18. What is the middle integer?",
      options: ["4", "6", "8", "10"],
      answer: "6",
      explanation: "Let the middle be m. Then (m − 2) + m + (m + 2) = 18 ⇒ 3m = 18 ⇒ m = 6."
    },
    // 17
    {
      question: "Four consecutive odd integers add up to 40. What is the second smallest integer?",
      options: ["7", "9", "11", "13"],
      answer: "9",
      explanation: "Let the smallest be x. Then x + (x + 2) + (x + 4) + (x + 6) = 40 ⇒ 4x + 12 = 40 ⇒ x = 7. Second smallest is 9."
    },
    // 18
    {
      question: "Three consecutive integers add up to 12. What is the largest integer?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Let the middle be m. Then 3m = 12 ⇒ m = 4. Integers: 3, 4, 5; largest is 5."
    },
    // 19
    {
      question: "The sum of five consecutive even integers is 260. What is the middle integer?",
      options: ["50", "52", "54", "56"],
      answer: "52",
      explanation: "Let the middle be m. Then m − 4, m − 2, m, m + 2, m + 4 sum to 5m = 260 ⇒ m = 52."
    },
    // 20
    {
      question: "The sum of six consecutive integers is 57. What is the smallest integer?",
      options: ["6", "7", "8", "9"],
      answer: "7",
      explanation: "Let them be x, x + 1, …, x + 5. Then 6x + 15 = 57 ⇒ 6x = 42 ⇒ x = 7."
    },
    // 21
    {
      question: "The sum of six consecutive odd integers is 192. What is the largest integer?",
      options: ["33", "35", "37", "39"],
      answer: "37",
      explanation: "Let the smallest be x. Then 6x + 30 = 192 ⇒ 6x = 162 ⇒ x = 27. Largest: 27 + 10 = 37."
    },
    // 22
    {
      question: "The difference between the largest and smallest of three consecutive integers is 10 less than their sum. What is the middle integer?",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Let them be x, x + 1, x + 2. Difference = 2. Sum = 3x + 3. So 2 = (3x + 3) − 10 ⇒ 3x = 9 ⇒ x = 3. Middle is 4."
    },
    // 23
    {
      question: "The sum of three consecutive integers is equal to four times the smallest integer minus 3. What is the largest integer?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "Let them be x, x + 1, x + 2. Then 3x + 3 = 4x − 3 ⇒ x = 6. Largest is 8."
    },
    // 24
    {
      question: "The sum of three consecutive odd integers is equal to five times the smallest integer minus 8. What is the smallest integer?",
      options: ["5", "7", "9", "11"],
      answer: "7",
      explanation: "Let them be x, x + 2, x + 4. Then 3x + 6 = 5x − 8 ⇒ −2x = −14 ⇒ x = 7."
    },
    // 25
    {
      question: "The sum of four consecutive even integers is 20 more than twice the largest integer. What is the smallest integer?",
      options: ["8", "10", "12", "14"],
      answer: "10",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 2(x + 6) + 20 ⇒ 4x + 12 = 2x + 32 ⇒ 2x = 20 ⇒ x = 10."
    },
    // 26
    {
      question: "Three consecutive integers represent the ages of three siblings. Their ages sum to 75. What is the age of the youngest sibling?",
      options: ["23", "24", "25", "26"],
      answer: "24",
      explanation: "Let them be x, x + 1, x + 2. Then 3x + 3 = 75 ⇒ 3x = 72 ⇒ x = 24."
    },
    // 27
    {
      question: "The sum of three consecutive even page numbers in a book is 366. What is the middle page number?",
      options: ["120", "122", "124", "126"],
      answer: "122",
      explanation: "Let the middle be m. Then (m − 2) + m + (m + 2) = 366 ⇒ 3m = 366 ⇒ m = 122."
    },
    // 28
    {
      question: "The sides of a triangle are three consecutive integers and the perimeter is 57 cm. What is the longest side?",
      options: ["18", "19", "20", "21"],
      answer: "20",
      explanation: "Let the sides be x, x + 1, x + 2. Then 3x + 3 = 57 ⇒ 3x = 54 ⇒ x = 18. Longest side is 20."
    },
    // 29
    {
      question: "Three adjacent angles on a straight line measure three consecutive integers in degrees. What is the largest angle?",
      options: ["59°", "60°", "61°", "62°"],
      answer: "61°",
      explanation: "Let them be x, x + 1, x + 2. Sum is 180° ⇒ 3x + 3 = 180 ⇒ x = 59. Largest is 61°."
    },
    // 30
    {
      question: "Three consecutive odd integers have a sum that is 9 less than four times the largest integer. What is the smallest integer?",
      options: ["-3", "-1", "1", "3"],
      answer: "-1",
      explanation: "Let them be x, x + 2, x + 4. Then 3x + 6 = 4(x + 4) − 9 ⇒ 3x + 6 = 4x + 7 ⇒ x = −1."
    },
    // 31
    {
      question: "Four consecutive integers add up to 2 less than five times the smallest integer. What is the largest integer?",
      options: ["9", "10", "11", "12"],
      answer: "11",
      explanation: "Let them be x, x + 1, x + 2, x + 3. 4x + 6 = 5x − 2 ⇒ x = 8. Largest is 11."
    },
    // 32
    {
      question: "Four consecutive odd integers have a sum of 136. What is the second largest integer?",
      options: ["31", "33", "35", "37"],
      answer: "35",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 136 ⇒ x = 31. Second largest is 31 + 4 = 35."
    },
    // 33
    {
      question: "Five consecutive integers have a sum which is 5 more than twice the largest integer. What is the smallest integer?",
      options: ["1", "2", "3", "4"],
      answer: "1",
      explanation: "Let them be x, x + 1, x + 2, x + 3, x + 4. Sum = 5x + 10. Twice the largest plus 5 is 2(x + 4) + 5 = 2x + 13. So 5x + 10 = 2x + 13 ⇒ 3x = 3 ⇒ x = 1."
    },
    // 34
    {
      question: "Three consecutive odd integers have a sum that is 5 more than twice the largest integer. What is the smallest integer?",
      options: ["5", "7", "9", "11"],
      answer: "7",
      explanation: "Let them be x, x + 2, x + 4. Then 3x + 6 = 2(x + 4) + 5 ⇒ 3x + 6 = 2x + 13 ⇒ x = 7."
    },
    // 35
    {
      question: "Three consecutive even integers have a sum equal to four times the middle integer minus 4. What is the largest integer?",
      options: ["2", "4", "6", "8"],
      answer: "6",
      explanation: "Let the middle be m. Then (m − 2) + m + (m + 2) = 3m. Given 3m = 4m − 4 ⇒ m = 4. Largest is 6."
    },
    // 36
    {
      question: "The sum of five consecutive odd integers is 2 less than seven times the smallest integer. What is the smallest integer?",
      options: ["9", "11", "13", "15"],
      answer: "11",
      explanation: "Let them be x, x + 2, x + 4, x + 6, x + 8. Sum = 5x + 20. Given 5x + 20 = 7x − 2 ⇒ 2x = 22 ⇒ x = 11."
    },
    // 37
    {
      question: "Four consecutive integers have a sum equal to 10 more than twice the largest integer. What is the smallest integer?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Let them be x, x + 1, x + 2, x + 3. Then 4x + 6 = 2(x + 3) + 10 ⇒ 4x + 6 = 2x + 16 ⇒ x = 5."
    },
    // 38
    {
      question: "Three consecutive odd integers have a sum of 141. What is the largest integer?",
      options: ["45", "47", "49", "51"],
      answer: "49",
      explanation: "Let the middle be m. Then 3m = 141 ⇒ m = 47. Integers: 45, 47, 49; largest is 49."
    },
    // 39
    {
      question: "Four consecutive odd integers have a sum of 176. What is the smallest integer?",
      options: ["39", "41", "43", "45"],
      answer: "41",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 176 ⇒ 4x = 164 ⇒ x = 41."
    },
    // 40
    {
      question: "Six consecutive integers have a sum of 279. What is the largest integer?",
      options: ["45", "47", "49", "51"],
      answer: "49",
      explanation: "Let them be x, x + 1, …, x + 5. Then 6x + 15 = 279 ⇒ 6x = 264 ⇒ x = 44. Largest is 49."
    },
    // 41
    {
      question: "Three consecutive even integers have a sum that is 24 less than eight times the smallest integer. What is the middle integer?",
      options: ["6", "8", "10", "12"],
      answer: "8",
      explanation: "Let them be x, x + 2, x + 4. Sum: 3x + 6. Given 3x + 6 = 8x − 24 ⇒ 5x = 30 ⇒ x = 6, so middle is 8."
    },
    // 42
    {
      question: "Three consecutive integers have a sum equal to twice the largest integer plus 3. What is the smallest integer?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Let them be x, x + 1, x + 2. Then 3x + 3 = 2(x + 2) + 3 ⇒ 3x + 3 = 2x + 7 ⇒ x = 4."
    },
    // 43
    {
      question: "Four consecutive even integers have a sum of 132. What is the third integer?",
      options: ["30", "32", "34", "36"],
      answer: "34",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 132 ⇒ x = 30. Third integer is 34."
    },
    // 44
    {
      question: "Five consecutive integers have a sum equal to seven times the smallest integer. What is the largest integer?",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "Let them be x, x + 1, x + 2, x + 3, x + 4. Sum = 5x + 10 = 7x ⇒ 2x = 10 ⇒ x = 5. Largest is 9."
    },
    // 45
    {
      question: "Four consecutive odd integers have a sum that is 23 more than three times the smallest integer. What is the smallest integer?",
      options: ["9", "11", "13", "15"],
      answer: "11",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 3x + 23 ⇒ x = 11."
    },
    // 46
    {
      question: "Six consecutive even integers have a sum of 222. What is the smallest integer?",
      options: ["30", "32", "34", "36"],
      answer: "32",
      explanation: "Let them be x, x + 2, …, x + 10. Then 6x + 30 = 222 ⇒ 6x = 192 ⇒ x = 32."
    },
    // 47
    {
      question: "Six consecutive odd integers have a sum of 264. What is the largest integer?",
      options: ["45", "47", "49", "51"],
      answer: "49",
      explanation: "Let them be x, x + 2, …, x + 10. Then 6x + 30 = 264 ⇒ 6x = 234 ⇒ x = 39. Largest is 49."
    },
    // 48
    {
      question: "Three consecutive integers have a sum that is 9 more than the largest integer. What is the smallest integer?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Let them be x, x + 1, x + 2. Then 3x + 3 = (x + 2) + 9 ⇒ 3x + 3 = x + 11 ⇒ 2x = 8 ⇒ x = 4."
    },
    // 49
    {
      question: "The sum of three consecutive even integers is 150. What is the middle integer?",
      options: ["48", "50", "52", "54"],
      answer: "50",
      explanation: "Let the middle be m. Then 3m = 150 ⇒ m = 50. Integers: 48, 50, 52."
    },
    // 50
    {
      question: "The sum of three consecutive odd integers is 9. What is the middle integer?",
      options: ["1", "3", "5", "7"],
      answer: "3",
      explanation: "Let the middle be m. Then 3m = 9 ⇒ m = 3. Integers: 1, 3, 5."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – Multi-step relationships & mixed contexts)
  // ==========================================
  expert: [
    // 1
    {
      question: "Three consecutive even integers have the property that when 4 is subtracted from the smallest and 2 is added to the largest, the sum of these two new numbers is 22. What is the middle integer?",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "Let the integers be x, x + 2, x + 4. Then (x − 4) + (x + 4 + 2) = 22 ⇒ 2x + 2 = 22 ⇒ x = 10. Middle is 12."
    },
    // 2
    {
      question: "Three consecutive odd integers have the property that the sum of the smallest integer and twice the largest integer is 47. What is the largest integer?",
      options: ["15", "17", "19", "21"],
      answer: "17",
      explanation: "Let them be x, x + 2, x + 4. Then x + 2(x + 4) = 47 ⇒ 3x + 8 = 47 ⇒ 3x = 39 ⇒ x = 13. Largest is 17."
    },
    // 3
    {
      question: "Three consecutive integers have the property that twice the smallest integer plus the largest integer is 26. What is the largest integer?",
      options: ["8", "9", "10", "11"],
      answer: "10",
      explanation: "Let them be x, x + 1, x + 2. Then 2x + (x + 2) = 26 ⇒ 3x + 2 = 26 ⇒ 3x = 24 ⇒ x = 8. Largest is 10."
    },
    // 4
    {
      question: "Four consecutive integers have the property that the sum of the first and fourth is 25. What is the third integer?",
      options: ["11", "12", "13", "14"],
      answer: "13",
      explanation: "Let them be x, x + 1, x + 2, x + 3. Then x + (x + 3) = 25 ⇒ 2x + 3 = 25 ⇒ 2x = 22 ⇒ x = 11. Third is 13."
    },
    // 5
    {
      question: "The average of three consecutive even integers is 34. What is the smallest integer?",
      options: ["30", "32", "34", "36"],
      answer: "32",
      explanation: "Three consecutive even integers can be written as 32, 34, 36. Their average is (32 + 34 + 36) ÷ 3 = 34, so the smallest is 32."
    },
    // 6
    {
      question: "The average of four consecutive odd integers is 20. What is the largest integer?",
      options: ["21", "22", "23", "24"],
      answer: "23",
      explanation: "Let them be 17, 19, 21, 23. Their sum is 80, and 80 ÷ 4 = 20, so the largest integer is 23."
    },
    // 7
    {
      question: "Three consecutive even integers have a sum that is 10 less than four times the smallest integer. What is the largest integer?",
      options: ["16", "18", "20", "22"],
      answer: "20",
      explanation: "Let them be x, x + 2, x + 4. Then x + (x + 2) + (x + 4) = 4x − 10 ⇒ 3x + 6 = 4x − 10 ⇒ x = 16. Largest is 20."
    },
    // 8
    {
      question: "Three consecutive odd integers have the property that five times the smallest integer is 3 less than twice the sum of the other two integers. What is the largest integer?",
      options: ["9", "11", "13", "15"],
      answer: "13",
      explanation: "Let them be x, x + 2, x + 4. Then 5x = 2[(x + 2) + (x + 4)] − 3 ⇒ 5x = 4x + 12 − 3 ⇒ x = 9. Largest is 13."
    },
    // 9
    {
      question: "Three consecutive integers have a sum of 3. What is the smallest integer?",
      options: ["-1", "0", "1", "2"],
      answer: "0",
      explanation: "Let them be x, x + 1, x + 2. Then 3x + 3 = 3 ⇒ 3x = 0 ⇒ x = 0."
    },
    // 10
    {
      question: "Three consecutive even integers have a sum of −42. What is the largest integer?",
      options: ["-16", "-14", "-12", "-10"],
      answer: "-12",
      explanation: "Let the middle be m. Then (m − 2) + m + (m + 2) = 3m = −42 ⇒ m = −14. Largest is −12."
    },
    // 11
    {
      question: "Four consecutive integers have a sum of −10. What is the second integer?",
      options: ["-4", "-3", "-2", "-1"],
      answer: "-3",
      explanation: "Let them be x, x + 1, x + 2, x + 3. Then 4x + 6 = −10 ⇒ 4x = −16 ⇒ x = −4. Second is −3."
    },
    // 12
    {
      question: "Five consecutive odd integers have a sum of 95. What is the largest integer?",
      options: ["19", "21", "23", "25"],
      answer: "23",
      explanation: "Let the middle be m. Then 5m = 95 ⇒ m = 19. Integers: 15, 17, 19, 21, 23; largest is 23."
    },
    // 13
    {
      question: "Five consecutive even integers have a sum of 0. What is the middle integer?",
      options: ["-2", "0", "2", "4"],
      answer: "0",
      explanation: "Let the middle be m. Then 5m = 0 ⇒ m = 0. Integers: −4, −2, 0, 2, 4."
    },
    // 14
    {
      question: "Three consecutive odd integers have a sum that is 3 less than four times the smallest integer. What is the largest integer?",
      options: ["9", "11", "13", "15"],
      answer: "13",
      explanation: "Let them be x, x + 2, x + 4. Then x + (x + 2) + (x + 4) = 4x − 3 ⇒ 3x + 6 = 4x − 3 ⇒ x = 9. Largest is 13."
    },
    // 15
    {
      question: "Four consecutive even integers have a sum that is 8 more than five times the smallest integer. What is the smallest integer?",
      options: ["2", "4", "6", "8"],
      answer: "4",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 5x + 8 ⇒ x = 4."
    },
    // 16
    {
      question: "Four consecutive odd integers have a sum of 200. What is the smallest integer?",
      options: ["45", "47", "49", "51"],
      answer: "47",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 200 ⇒ 4x = 188 ⇒ x = 47."
    },
    // 17
    {
      question: "Six consecutive integers have a sum that is 6 more than seven times the smallest integer. What is the largest integer?",
      options: ["12", "13", "14", "15"],
      answer: "14",
      explanation: "Let them be x, x + 1, …, x + 5. Then 6x + 15 = 7x + 6 ⇒ x = 9. Largest is 14."
    },
    // 18
    {
      question: "Six consecutive odd integers have a sum of 324. What is the third integer?",
      options: ["51", "53", "55", "57"],
      answer: "53",
      explanation: "Let the smallest be x. Then 6x + 30 = 324 ⇒ 6x = 294 ⇒ x = 49. Integers: 49, 51, 53, 55, 57, 59; third is 53."
    },
    // 19
    {
      question: "Six consecutive even integers have a sum that is 54 greater than four times the smallest integer. What is the largest integer?",
      options: ["18", "20", "22", "24"],
      answer: "22",
      explanation: "Let them be x, x + 2, …, x + 10. Then 6x + 30 = 4x + 54 ⇒ 2x = 24 ⇒ x = 12. Largest is 22."
    },
    // 20
    {
      question: "Three consecutive integers have a sum that is equal to twice the smallest integer plus 12. What is the largest integer?",
      options: ["9", "10", "11", "12"],
      answer: "11",
      explanation: "Let them be x, x + 1, x + 2. Then 3x + 3 = 2x + 12 ⇒ x = 9. Largest is 11."
    },
    // 21
    {
      question: "Three consecutive odd integers have a sum of 63. What is the middle integer?",
      options: ["19", "21", "23", "25"],
      answer: "21",
      explanation: "Let the middle be m. Then 3m = 63 ⇒ m = 21."
    },
    // 22
    {
      question: "Three consecutive even integers have a sum that is 88 less than seven times the middle integer. What is the smallest integer?",
      options: ["18", "20", "22", "24"],
      answer: "20",
      explanation: "Let the middle be m. Then (m − 2) + m + (m + 2) = 3m. Given 3m = 7m − 88 ⇒ 4m = 88 ⇒ m = 22, so smallest is 20."
    },
    // 23
    {
      question: "Four consecutive integers have a sum of 4 less than nine times the smallest integer. What is the smallest integer?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Let them be x, x + 1, x + 2, x + 3. Then 4x + 6 = 9x − 4 ⇒ 5x = 10 ⇒ x = 2."
    },
    // 24
    {
      question: "Four consecutive odd integers have a sum that is 22 more than twice the largest integer. What is the smallest integer?",
      options: ["9", "11", "13", "15"],
      answer: "11",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 2(x + 6) + 22 ⇒ 4x + 12 = 2x + 34 ⇒ 2x = 22 ⇒ x = 11."
    },
    // 25
    {
      question: "Six consecutive integers have an average of 14.5. What is the largest integer?",
      options: ["15", "16", "17", "18"],
      answer: "17",
      explanation: "Let the smallest be x. Then average = (6x + 15) ÷ 6 = 14.5 ⇒ 6x + 15 = 87 ⇒ x = 12. Largest is 17."
    },
    // 26
    {
      question: "Six consecutive even integers have a sum of 486. What is the third integer?",
      options: ["78", "80", "82", "84"],
      answer: "80",
      explanation: "Let them be x, x + 2, …, x + 10. Then 6x + 30 = 486 ⇒ 6x = 456 ⇒ x = 76. Third integer is 80."
    },
    // 27
    {
      question: "Five consecutive odd integers have a sum that is 8 less than nine times the smallest integer. What is the second largest integer?",
      options: ["11", "13", "15", "17"],
      answer: "13",
      explanation: "Let them be x, x + 2, x + 4, x + 6, x + 8. Sum = 5x + 20. Given 5x + 20 = 9x − 8 ⇒ 4x = 28 ⇒ x = 7. Second largest is 13."
    },
    // 28
    {
      question: "Three consecutive integers have a sum of 99. What is the smallest integer?",
      options: ["31", "32", "33", "34"],
      answer: "32",
      explanation: "Let the middle be m. Then 3m = 99 ⇒ m = 33. Integers: 32, 33, 34; smallest is 32."
    },
    // 29
    {
      question: "Three consecutive even integers have a sum of 132. What is the smallest integer?",
      options: ["40", "42", "44", "46"],
      answer: "42",
      explanation: "Let the middle be m. Then 3m = 132 ⇒ m = 44. Integers: 42, 44, 46."
    },
    // 30
    {
      question: "Three consecutive odd integers have a sum of 171. What is the middle integer?",
      options: ["55", "57", "59", "61"],
      answer: "57",
      explanation: "Let the middle be m. Then 3m = 171 ⇒ m = 57."
    },
    // 31
    {
      question: "Four consecutive integers have a sum that is 2 more than six times the second integer. What is the smallest integer?",
      options: ["-2", "-1", "0", "1"],
      answer: "-1",
      explanation: "Let them be x, x + 1, x + 2, x + 3. Then 4x + 6 = 6(x + 1) + 2 ⇒ 4x + 6 = 6x + 8 ⇒ 2x = -2 ⇒ x = -1."
    },
    // 32
    {
      question: "Four consecutive even integers have a sum of 68. What is the second integer?",
      options: ["14", "16", "18", "20"],
      answer: "16",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 68 ⇒ 4x = 56 ⇒ x = 14. Second is 16."
    },
    // 33
    {
      question: "Four consecutive odd integers have a sum of 184. What is the largest integer?",
      options: ["45", "47", "49", "51"],
      answer: "49",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 184 ⇒ 4x = 172 ⇒ x = 43. Largest is 49."
    },
    // 34
    {
      question: "Five consecutive integers have a sum of −5. What is the middle integer?",
      options: ["-3", "-2", "-1", "0"],
      answer: "-1",
      explanation: "Let the middle be m. Then 5m = −5 ⇒ m = −1. Integers: −3, −2, −1, 0, 1."
    },
    // 35
    {
      question: "Five consecutive even integers have a sum of 310. What is the largest integer?",
      options: ["62", "64", "66", "68"],
      answer: "66",
      explanation: "Let the middle be m. Then 5m = 310 ⇒ m = 62. Integers: 58, 60, 62, 64, 66; largest is 66."
    },
    // 36
    {
      question: "Five consecutive odd integers have a sum of −25. What is the smallest integer?",
      options: ["-11", "-9", "-7", "-5"],
      answer: "-9",
      explanation: "Let the middle be m. Then 5m = −25 ⇒ m = −5. Integers: −9, −7, −5, −3, −1; smallest is −9."
    },
    // 37
    {
      question: "Seven consecutive integers have a sum of 77. What is the smallest integer?",
      options: ["7", "8", "9", "10"],
      answer: "8",
      explanation: "Let the middle be m. Then 7m = 77 ⇒ m = 11. Integers: 8, 9, 10, 11, 12, 13, 14."
    },
    // 38
    {
      question: "Seven consecutive odd integers have a sum of 343. What is the middle integer?",
      options: ["45", "47", "49", "51"],
      answer: "49",
      explanation: "Let the middle be m. Then 7m = 343 ⇒ m = 49."
    },
    // 39
    {
      question: "Seven consecutive even integers have a sum of 0. What is the largest integer?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "Let the middle be m. Then 7m = 0 ⇒ m = 0. Integers: −6, −4, −2, 0, 2, 4, 6; largest is 6."
    },
    // 40
    {
      question: "Three consecutive integers have a sum that is 5 less than four times the largest integer. What is the smallest integer?",
      options: ["-1", "0", "1", "2"],
      answer: "0",
      explanation: "Let them be x, x + 1, x + 2. Then 3x + 3 = 4(x + 2) − 5 ⇒ 3x + 3 = 4x + 3 ⇒ x = 0."
    },
    // 41
    {
      question: "Three consecutive even integers have a sum of −18. What is the largest integer?",
      options: ["-8", "-6", "-4", "-2"],
      answer: "-4",
      explanation: "Let the middle be m. Then 3m = −18 ⇒ m = −6. Integers: −8, −6, −4; largest is −4."
    },
    // 42
    {
      question: "Three consecutive odd integers have a sum that is 42 less than seven times the largest integer. What is the middle integer?",
      options: ["5", "7", "9", "11"],
      answer: "7",
      explanation: "Let them be x, x + 2, x + 4. Then 3x + 6 = 7(x + 4) − 42 ⇒ 3x + 6 = 7x − 14 ⇒ 4x = 20 ⇒ x = 5. Middle is 7."
    },
    // 43
    {
      question: "Four consecutive integers have a sum that is 10 more than three times the largest integer. What is the smallest integer?",
      options: ["12", "13", "14", "15"],
      answer: "13",
      explanation: "Let them be x, x + 1, x + 2, x + 3. Then 4x + 6 = 3(x + 3) + 10 ⇒ 4x + 6 = 3x + 19 ⇒ x = 13."
    },
    // 44
    {
      question: "Four consecutive even integers have a sum that is 36 less than ten times the smallest integer. What is the largest integer?",
      options: ["12", "14", "16", "18"],
      answer: "14",
      explanation: "Let them be x, x + 2, x + 4, x + 6. Then 4x + 12 = 10x − 36 ⇒ 6x = 48 ⇒ x = 8. Largest is 14."
    },
    // 45
    {
      question: "Five consecutive integers have a sum that is equal to three times the third integer. What is the third integer?",
      options: ["-2", "-1", "0", "1"],
      answer: "0",
      explanation: "Let the third be m. Then the integers are m − 2, m − 1, m, m + 1, m + 2, so sum = 5m. Given 5m = 3m ⇒ 2m = 0 ⇒ m = 0."
    },
    // 46
    {
      question: "Five consecutive odd integers have a sum that is 15 more than four times the middle integer. What is the smallest integer?",
      options: ["11", "13", "15", "17"],
      answer: "11",
      explanation: "Let the middle be m. Then sum = 5m and 5m = 4m + 15 ⇒ m = 15. Integers: 11, 13, 15, 17, 19; smallest is 11."
    },
    // 47
    {
      question: "Five consecutive even integers have a sum that is 10 less than six times the largest integer. What is the largest integer?",
      options: ["-14", "-12", "-10", "-8"],
      answer: "-10",
      explanation: "Let them be x, x + 2, x + 4, x + 6, x + 8. Then 5x + 20 = 6(x + 8) − 10 ⇒ 5x + 20 = 6x + 38 ⇒ x = −18. Largest is −10."
    },
    // 48
    {
      question: "Six consecutive integers have a sum that is 3 less than five times the third integer. What is the smallest integer?",
      options: ["-10", "-9", "-8", "-7"],
      answer: "-8",
      explanation: "Let them be x, x + 1, x + 2, x + 3, x + 4, x + 5; third is x + 2. Then 6x + 15 = 5(x + 2) − 3 ⇒ 6x + 15 = 5x + 7 ⇒ x = −8."
    },
    // 49
    {
      question: "Six consecutive even integers have a sum that is 24 more than seven times the smallest integer. What is the largest integer?",
      options: ["14", "16", "18", "20"],
      answer: "16",
      explanation: "Let them be x, x + 2, …, x + 10. Then 6x + 30 = 7x + 24 ⇒ x = 6. Largest is 16."
    },
    // 50
    {
      question: "Six consecutive odd integers have a sum that is 17 more than five times the third integer. What is the smallest integer?",
      options: ["5", "7", "9", "11"],
      answer: "7",
      explanation: "Let them be x, x + 2, x + 4, x + 6, x + 8, x + 10. The third is x + 4. Sum: 6x + 30. Given 6x + 30 = 5(x + 4) + 17 ⇒ 6x + 30 = 5x + 37 ⇒ x = 7."
    }
  ]
};

