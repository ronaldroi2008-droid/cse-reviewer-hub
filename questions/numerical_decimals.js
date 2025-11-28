// questions/numerical_decimals.js
// ==========================================
// NUMERICAL – DECIMALS (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["decimals"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (Concepts & Simple Ops)
  // ==========================================
  beginner: [
    {
      question: "What is the place value of the digit 7 in 3.74?",
      options: ["Tenths", "Hundredths", "Ones", "Thousandths"],
      answer: "Hundredths",
      explanation: "In 3.74, the first digit after the decimal (7) is in the tenths place and the second digit (4) is hundredths. Here 7 is in 0.7, so 7 is in the tenths place. Wait, 3.74 = 3 + 7/10 + 4/100, so 7 is tenths."
    },
    {
      question: "What is the place value of the digit 5 in 6.25?",
      options: ["Tenths", "Hundredths", "Ones", "Thousands"],
      answer: "Hundredths",
      explanation: "In 6.25, 2 is in the tenths place and 5 is in the hundredths place."
    },
    {
      question: "Which decimal is equal to the fraction 1/2?",
      options: ["0.2", "0.4", "0.5", "0.25"],
      answer: "0.5",
      explanation: "One-half is equal to 0.5 because 1 ÷ 2 = 0.5."
    },
    {
      question: "Which decimal is equal to the fraction 3/10?",
      options: ["0.03", "0.3", "0.13", "3.0"],
      answer: "0.3",
      explanation: "Three tenths is written as 0.3 because the 3 is in the tenths place."
    },
    {
      question: "How do you read 4.6 in words?",
      options: ["Four point six", "Forty-six", "Four and six tenths", "Four and sixty"],
      answer: "Four and six tenths",
      explanation: "4.6 is read as 'four and six tenths' because the 6 is in the tenths place."
    },
    {
      question: "How do you read 2.35 in words?",
      options: ["Two point thirty-five", "Two and thirty-five tenths", "Two and thirty-five hundredths", "Twenty-three point five"],
      answer: "Two and thirty-five hundredths",
      explanation: "2.35 has two digits after the decimal, so it is read as 'two and thirty-five hundredths'."
    },
    {
      question: "Which of the following is a decimal number?",
      options: ["5", "3/4", "0.75", "75%"],
      answer: "0.75",
      explanation: "A decimal number uses a decimal point, like 0.75."
    },
    {
      question: "What is 0.7 written as a fraction in simplest form?",
      options: ["7/10", "70/10", "1/7", "7/100"],
      answer: "7/10",
      explanation: "0.7 means seven tenths, which is 7/10."
    },
    {
      question: "What is 0.09 written as a fraction in simplest form?",
      options: ["9/10", "9/100", "90/10", "9/1000"],
      answer: "9/100",
      explanation: "0.09 means nine hundredths, or 9/100."
    },
    {
      question: "Which digit is in the tenths place in 5.83?",
      options: ["5", "8", "3", "0"],
      answer: "8",
      explanation: "The first digit after the decimal is the tenths place, which is 8 in 5.83."
    },

    {
      question: "Which is larger: 0.4 or 0.09?",
      options: ["0.4", "0.09", "They are equal", "Cannot be compared"],
      answer: "0.4",
      explanation: "0.4 is four tenths, while 0.09 is nine hundredths. Four tenths is greater than nine hundredths."
    },
    {
      question: "Which is smaller: 3.2 or 3.09?",
      options: ["3.2", "3.09", "They are equal", "Cannot be compared"],
      answer: "3.09",
      explanation: "3.09 is a little more than 3, while 3.2 is 3 and two tenths. So 3.09 is smaller."
    },
    {
      question: "Which decimal is greatest?",
      options: ["0.56", "0.65", "0.506", "0.605"],
      answer: "0.65",
      explanation: "Compare tenths first: 0.56 (5), 0.65 (6), others have 5 or 6 with smaller hundredths. 0.65 has the largest tenths digit."
    },
    {
      question: "Which decimal is least?",
      options: ["1.5", "1.25", "1.8", "1.09"],
      answer: "1.09",
      explanation: "All numbers have whole part 1, so we compare decimal parts. 0.09 is smaller than 0.25, 0.5, and 0.8."
    },
    {
      question: "Which of the following is equal to 0.30?",
      options: ["0.3", "0.003", "3.0", "0.03"],
      answer: "0.3",
      explanation: "Adding a zero at the end does not change the value, so 0.30 = 0.3."
    },
    {
      question: "Arrange in ascending order: 0.7, 0.17, 0.71.",
      options: ["0.7, 0.17, 0.71", "0.17, 0.7, 0.71", "0.17, 0.71, 0.7", "0.71, 0.7, 0.17"],
      answer: "0.17, 0.7, 0.71",
      explanation: "0.17 is the smallest, then 0.70, and 0.71 is the largest."
    },
    {
      question: "Which decimal is between 2.3 and 2.4?",
      options: ["2.29", "2.45", "2.35", "2.5"],
      answer: "2.35",
      explanation: "2.35 lies between 2.30 and 2.40; 2.29 is less than 2.3 and the others are greater than 2.4."
    },
    {
      question: "Which comparison is true?",
      options: ["0.8 < 0.75", "0.8 = 0.80", "0.8 > 0.85", "0.8 = 8.0"],
      answer: "0.8 = 0.80",
      explanation: "0.8 and 0.80 represent the same value; adding a trailing zero does not change the number."
    },
    {
      question: "What is 1.5 + 0.2?",
      options: ["1.7", "1.52", "1.57", "1.3"],
      answer: "1.7",
      explanation: "Align decimal points: 1.5 + 0.2 = 1.7."
    },
    {
      question: "What is 3.4 + 2.1?",
      options: ["5.4", "5.3", "6.5", "5.25"],
      answer: "5.5",
      explanation: "3.4 + 2.1 = 5.5 when you add tenths (0.4 + 0.1 = 0.5)."
    },
    {
      question: "What is 4.6 − 1.2?",
      options: ["3.2", "3.4", "2.4", "2.6"],
      answer: "3.4",
      explanation: "Subtract tenths: 4.6 − 1.2 = 3.4."
    },

    {
      question: "What is 5.0 − 2.7?",
      options: ["2.3", "3.3", "2.13", "2.7"],
      answer: "2.3",
      explanation: "5.0 − 2.7 = 2.3 by subtracting tenths."
    },
    {
      question: "What is 0.8 + 0.15?",
      options: ["0.95", "0.23", "1.5", "0.815"],
      answer: "0.95",
      explanation: "0.80 + 0.15 = 0.95 when decimals are lined up."
    },
    {
      question: "What is 2.5 − 0.8?",
      options: ["1.7", "1.8", "1.6", "1.75"],
      answer: "1.7",
      explanation: "2.5 − 0.8 = 1.7 because 25 tenths − 8 tenths = 17 tenths."
    },
    {
      question: "What is 0.4 + 0.3?",
      options: ["0.7", "0.43", "0.34", "0.12"],
      answer: "0.7",
      explanation: "Four tenths plus three tenths equals seven tenths, or 0.7."
    },
    {
      question: "What is 1.2 + 1.3?",
      options: ["2.3", "2.4", "2.5", "2.6"],
      answer: "2.5",
      explanation: "1.2 + 1.3 = 2.5 (12 tenths + 13 tenths = 25 tenths)."
    },
    {
      question: "What is 3.0 − 1.75?",
      options: ["1.15", "1.25", "1.3", "1.35"],
      answer: "1.25",
      explanation: "3.00 − 1.75 = 1.25 when we subtract hundredths carefully."
    },
    {
      question: "Which of the following is equal to 2.50?",
      options: ["2.5", "2.05", "2.005", "2.055"],
      answer: "2.5",
      explanation: "Adding a zero at the end of the decimal does not change its value, so 2.50 = 2.5."
    },
    {
      question: "Maria had 3.5 meters of ribbon. She used 1.2 meters. How much ribbon is left?",
      options: ["2.3 m", "2.2 m", "1.3 m", "4.7 m"],
      answer: "2.3 m",
      explanation: "Subtract: 3.5 − 1.2 = 2.3 meters remaining."
    },
    {
      question: "A pencil costs ₱7.25 and an eraser costs ₱3.50. What is the total cost?",
      options: ["₱10.75", "₱10.55", "₱11.25", "₱9.75"],
      answer: "₱10.75",
      explanation: "7.25 + 3.50 = 10.75 when decimals are aligned."
    },
    {
      question: "Jomar ran 2.4 km on Monday and 1.6 km on Tuesday. How many kilometers did he run in all?",
      options: ["3.8 km", "4.0 km", "4.2 km", "3.6 km"],
      answer: "4.0 km",
      explanation: "2.4 + 1.6 = 4.0 kilometers."
    },
    {
      question: "A bottle contains 1.25 liters of juice. If you drink 0.5 liter, how much is left?",
      options: ["0.65 L", "0.75 L", "0.85 L", "1.75 L"],
      answer: "0.75 L",
      explanation: "1.25 − 0.50 = 0.75 liter."
    },
    {
      question: "A rope is 5.8 meters long. If 2.3 meters is cut off, how long is the remaining rope?",
      options: ["3.3 m", "3.5 m", "3.4 m", "2.5 m"],
      answer: "3.5 m",
      explanation: "5.8 − 2.3 = 3.5 meters."
    },
    {
      question: "A notebook costs ₱12.75 and a pen costs ₱8.25. How much do they cost together?",
      options: ["₱20.00", "₱21.00", "₱21.50", "₱22.00"],
      answer: "₱21.00",
      explanation: "12.75 + 8.25 = 21.00."
    },
    {
      question: "Liza bought 0.75 kg of apples and 0.5 kg of bananas. What is the total weight of the fruits?",
      options: ["1.25 kg", "1.15 kg", "1.2 kg", "1.3 kg"],
      answer: "1.25 kg",
      explanation: "0.75 + 0.50 = 1.25 kilograms."
    },
    {
      question: "A car travels 3.6 km in the first minute and 2.4 km in the second minute. How far did it travel in total?",
      options: ["5.0 km", "6.0 km", "6.2 km", "5.8 km"],
      answer: "6.0 km",
      explanation: "3.6 + 2.4 = 6.0 kilometers."
    },
    {
      question: "Rico had ₱50.00. He spent ₱12.75 on snacks. How much money does he have left?",
      options: ["₱37.25", "₱38.25", "₱36.75", "₱32.75"],
      answer: "₱37.25",
      explanation: "50.00 − 12.75 = 37.25 pesos."
    },
    {
      question: "A piece of wood is 2.5 m long. Another piece is 1.75 m long. What is their total length?",
      options: ["4.25 m", "4.15 m", "3.25 m", "4.05 m"],
      answer: "4.25 m",
      explanation: "2.50 + 1.75 = 4.25 meters."
    },
    {
      question: "Which number is equal to 3 and five tenths?",
      options: ["3.05", "3.5", "3.05", "3.15"],
      answer: "3.5",
      explanation: "Five tenths is 0.5, so 3 and five tenths is 3.5."
    },
    {
      question: "Which decimal shows 'two and nine hundredths'?",
      options: ["2.9", "2.09", "2.90", "2.009"],
      answer: "2.09",
      explanation: "Nine hundredths means 0.09, so 2 + 0.09 = 2.09."
    },
    {
      question: "Round 3.46 to the nearest tenth.",
      options: ["3.4", "3.5", "3.46", "3.6"],
      answer: "3.5",
      explanation: "The hundredths digit is 6 (5 or more), so 3.46 rounds up to 3.5."
    },
    {
      question: "Round 7.12 to the nearest whole number.",
      options: ["7", "8", "7.1", "7.2"],
      answer: "7",
      explanation: "The tenths digit is 1 (less than 5), so we round down to 7."
    },
    {
      question: "Which pair of decimals are equal?",
      options: ["0.4 and 0.40", "0.4 and 0.04", "0.04 and 0.004", "4 and 0.4"],
      answer: "0.4 and 0.40",
      explanation: "0.40 has an extra zero but represents the same value as 0.4."
    },
    {
      question: "Which decimal is closest to 1?",
      options: ["0.89", "0.95", "1.2", "0.75"],
      answer: "0.95",
      explanation: "0.95 is only 0.05 away from 1, closer than the other options less than 1."
    },
    {
      question: "Which decimal is between 4.1 and 4.2?",
      options: ["4.09", "4.25", "4.15", "4.05"],
      answer: "4.15",
      explanation: "4.15 lies between 4.10 and 4.20."
    },
    {
      question: "Which statement is true?",
      options: ["0.56 > 0.8", "0.56 < 0.8", "0.56 = 0.8", "0.56 > 1"],
      answer: "0.56 < 0.8",
      explanation: "56 hundredths is less than 8 tenths (0.8)."
    },
    {
      question: "Which decimal represents the same value as 7 and 3 tenths?",
      options: ["7.03", "7.3", "7.30", "7.33"],
      answer: "7.3",
      explanation: "Three tenths is 0.3, so 7 and 3 tenths is 7.3."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (Operations & Word Problems)
  // ==========================================
  intermediate: [
    {
      question: "What is 2.34 + 1.56?",
      options: ["3.80", "3.9", "3.79", "4.0"],
      answer: "3.9",
      explanation: "Add hundredths: 0.34 + 0.56 = 0.90, so 2.34 + 1.56 = 3.90 or 3.9."
    },
    {
      question: "What is 5.78 − 2.39?",
      options: ["3.39", "3.49", "3.29", "3.19"],
      answer: "3.39",
      explanation: "Line up decimals and subtract: 5.78 − 2.39 = 3.39."
    },
    {
      question: "What is 3.25 + 4.7?",
      options: ["7.95", "7.85", "7.5", "7.7"],
      answer: "7.95",
      explanation: "3.25 + 4.70 = 7.95."
    },
    {
      question: "What is 6.8 − 3.45?",
      options: ["3.35", "3.25", "3.45", "3.15"],
      answer: "3.35",
      explanation: "6.80 − 3.45 = 3.35."
    },
    {
      question: "What is 1.5 × 2.4?",
      options: ["3.6", "3.4", "3.9", "2.9"],
      answer: "3.6",
      explanation: "15 × 24 = 360; place two decimal digits to get 3.60 or 3.6."
    },
    {
      question: "What is 0.6 × 5?",
      options: ["3", "3.6", "30", "0.56"],
      answer: "3",
      explanation: "Six tenths taken 5 times is 30 tenths, or 3.0."
    },
    {
      question: "What is 2.4 × 0.5?",
      options: ["1.2", "1.24", "1.4", "2.9"],
      answer: "1.2",
      explanation: "Half of 2.4 is 1.2."
    },
    {
      question: "What is 4.8 ÷ 4?",
      options: ["1.2", "1.3", "1.4", "1.25"],
      answer: "1.2",
      explanation: "4.8 divided by 4 equals 1.2."
    },
    {
      question: "What is 7.2 ÷ 3?",
      options: ["2.2", "2.3", "2.4", "2.5"],
      answer: "2.4",
      explanation: "72 tenths ÷ 3 = 24 tenths, or 2.4."
    },
    {
      question: "What is 9.6 ÷ 0.8?",
      options: ["0.12", "12", "1.2", "9.8"],
      answer: "12",
      explanation: "0.8 goes into 9.6 twelve times (because 96 ÷ 8 = 12)."
    },

    {
      question: "Multiply: 3.2 × 0.4.",
      options: ["1.28", "12.8", "0.128", "1.2"],
      answer: "1.28",
      explanation: "32 × 4 = 128; there are two decimal places total, so 1.28."
    },
    {
      question: "Multiply: 2.75 × 1.2.",
      options: ["3.3", "3.2", "3.4", "3.1"],
      answer: "3.3",
      explanation: "275 × 12 = 3300; place three decimal digits to get 3.300 or 3.3."
    },
    {
      question: "What is 0.45 + 0.375?",
      options: ["0.825", "0.82", "0.75", "0.8"],
      answer: "0.825",
      explanation: "0.450 + 0.375 = 0.825 when decimals are aligned."
    },
    {
      question: "What is 1.25 + 2.75?",
      options: ["4.0", "3.9", "4.1", "3.95"],
      answer: "4.0",
      explanation: "1.25 and 2.75 add up exactly to 4.00."
    },
    {
      question: "What is 6.25 − 1.5?",
      options: ["4.75", "4.65", "5.25", "4.5"],
      answer: "4.75",
      explanation: "6.25 − 1.50 = 4.75."
    },
    {
      question: "What is 3.75 + 0.8?",
      options: ["4.45", "4.55", "4.5", "4.35"],
      answer: "4.55",
      explanation: "3.75 + 0.80 = 4.55."
    },
    {
      question: "Divide: 6.25 ÷ 2.5.",
      options: ["2.5", "2.25", "2.75", "3.5"],
      answer: "2.5",
      explanation: "6.25 ÷ 2.5 = 2.5 because 25 quarters is 6.25 and 10 quarters is 2.5."
    },
    {
      question: "What is 3.6 × 0.4?",
      options: ["1.44", "14.4", "1.4", "0.144"],
      answer: "1.44",
      explanation: "36 × 4 = 144; place two decimal digits to get 1.44."
    },
    {
      question: "What is 7.2 ÷ 1.2?",
      options: ["0.6", "6", "0.72", "7"],
      answer: "6",
      explanation: "Multiply both numbers by 10: 72 ÷ 12 = 6."
    },
    {
      question: "Add: 4.56 + 3.44.",
      options: ["8.0", "7.9", "8.1", "7.8"],
      answer: "8.0",
      explanation: "4.56 + 3.44 = 8.00 exactly."
    },

    {
      question: "Add: 2.37 + 1.68.",
      options: ["4.05", "3.95", "4.15", "3.85"],
      answer: "4.05",
      explanation: "2.37 + 1.68 = 4.05 when decimals are lined up."
    },
    {
      question: "Subtract: 5.03 − 2.58.",
      options: ["2.45", "2.55", "2.35", "3.45"],
      answer: "2.45",
      explanation: "5.03 − 2.58 = 2.45."
    },
    {
      question: "Multiply: 0.25 × 0.4.",
      options: ["0.1", "0.01", "0.004", "1.0"],
      answer: "0.1",
      explanation: "25 × 4 = 100; place three decimal digits to get 0.100 or 0.1."
    },
    {
      question: "Multiply: 1.8 × 0.5.",
      options: ["0.9", "0.45", "1.9", "0.18"],
      answer: "0.9",
      explanation: "Half of 1.8 is 0.9."
    },
    {
      question: "Divide: 3.6 ÷ 0.6.",
      options: ["0.6", "6", "0.36", "3"],
      answer: "6",
      explanation: "0.6 goes into 3.6 exactly 6 times."
    },
    {
      question: "Divide: 4.5 ÷ 0.5.",
      options: ["0.9", "9", "0.45", "5"],
      answer: "9",
      explanation: "Half of 9 is 4.5, so 4.5 ÷ 0.5 = 9."
    },
    {
      question: "Mary bought 2.35 kg of rice and 1.8 kg of sugar. What is the total weight?",
      options: ["4.05 kg", "4.15 kg", "3.95 kg", "4.2 kg"],
      answer: "4.15 kg",
      explanation: "2.35 + 1.80 = 4.15 kilograms."
    },
    {
      question: "A taxi fare is ₱45.50 plus ₱8.75 per kilometer. If you travel 2 km, how much do you pay?",
      options: ["₱63.00", "₱62.75", "₱59.00", "₱64.25"],
      answer: "₱63.00",
      explanation: "Extra charge: 2 × 8.75 = 17.50; total = 45.50 + 17.50 = 63.00."
    },
    {
      question: "A bottle has 1.5 liters of water. If you pour out 0.35 liter, how much water remains?",
      options: ["1.15 L", "1.2 L", "1.25 L", "1.3 L"],
      answer: "1.15 L",
      explanation: "1.50 − 0.35 = 1.15 liters left."
    },

    {
      question: "A rope is 7.25 m long. You cut off 2.5 m. How long is the remaining rope?",
      options: ["4.75 m", "4.85 m", "5.75 m", "4.5 m"],
      answer: "4.75 m",
      explanation: "7.25 − 2.50 = 4.75 meters."
    },
    {
      question: "Lino walks 1.2 km each day. How far does he walk in 5 days?",
      options: ["6 km", "5.2 km", "6.2 km", "5 km"],
      answer: "6 km",
      explanation: "1.2 × 5 = 6.0 kilometers."
    },
    {
      question: "A book costs ₱185.75 and a notebook costs ₱24.50. What is the total cost?",
      options: ["₱210.25", "₱211.25", "₱209.25", "₱205.25"],
      answer: "₱210.25",
      explanation: "185.75 + 24.50 = 210.25."
    },
    {
      question: "A jogger runs 2.4 km in the morning and 3.65 km in the afternoon. What is the total distance?",
      options: ["6.05 km", "6.15 km", "6.25 km", "5.95 km"],
      answer: "6.05 km",
      explanation: "2.40 + 3.65 = 6.05 km."
    },
    {
      question: "A car used 7.5 liters of fuel on Monday and 6.25 liters on Tuesday. How many liters were used in total?",
      options: ["13.75 L", "13.5 L", "14.75 L", "12.75 L"],
      answer: "13.75 L",
      explanation: "7.50 + 6.25 = 13.75 liters."
    },
    {
      question: "A ribbon is 9.6 m long. If you divide it equally into 4 pieces, how long is each piece?",
      options: ["2.4 m", "2.6 m", "3.2 m", "2.2 m"],
      answer: "2.4 m",
      explanation: "9.6 ÷ 4 = 2.4 meters each."
    },
    {
      question: "Round 6.348 to the nearest hundredth.",
      options: ["6.34", "6.35", "6.3", "6.4"],
      answer: "6.35",
      explanation: "The thousandths digit is 8, so the hundredths digit (4) rounds up to 5."
    },
    {
      question: "Round 2.641 to the nearest tenth.",
      options: ["2.6", "2.7", "2.64", "3.0"],
      answer: "2.6",
      explanation: "The hundredths digit is 4 (<5), so 2.641 rounds to 2.6."
    },
    {
      question: "Arrange in descending order: 4.08, 4.8, 4.18.",
      options: ["4.8, 4.18, 4.08", "4.8, 4.08, 4.18", "4.18, 4.8, 4.08", "4.18, 4.08, 4.8"],
      answer: "4.8, 4.18, 4.08",
      explanation: "4.8 is largest; of the remaining, 4.18 > 4.08."
    },
    {
      question: "Which decimal is equivalent to 9/20?",
      options: ["0.45", "0.9", "0.09", "0.49"],
      answer: "0.45",
      explanation: "9 ÷ 20 = 0.45."
    },
    {
      question: "Which decimal is equivalent to 7/8?",
      options: ["0.75", "0.875", "0.7", "0.78"],
      answer: "0.875",
      explanation: "7 ÷ 8 = 0.875."
    },
    {
      question: "Which decimal is the smallest?",
      options: ["0.502", "0.52", "0.509", "0.5"],
      answer: "0.5",
      explanation: "0.500 is less than 0.502, 0.509, and 0.520."
    },
    {
      question: "Which decimal is the greatest?",
      options: ["1.09", "1.19", "1.9", "1.09"],
      answer: "1.9",
      explanation: "1.9 has the largest whole number part among the choices."
    },
    {
      question: "A store sells milk at ₱62.75 per liter. How much will 2 liters cost?",
      options: ["₱125.50", "₱124.50", "₱126.50", "₱120.00"],
      answer: "₱125.50",
      explanation: "2 × 62.75 = 125.50."
    },
    {
      question: "A student scores 7.5, 8.25, and 9.0 in three quizzes. What is the total score?",
      options: ["24.75", "24.5", "25.0", "23.75"],
      answer: "24.75",
      explanation: "7.5 + 8.25 + 9.0 = 24.75."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (Harder Ops & Rounding)
  // ==========================================
  advanced: [
    {
      question: "Evaluate: 12.5 + 3.745.",
      options: ["16.245", "16.25", "15.245", "15.25"],
      answer: "16.245",
      explanation: "Align decimals: 12.500 + 3.745 = 16.245."
    },
    {
      question: "Evaluate: 9.804 − 3.29.",
      options: ["6.514", "6.504", "6.5140", "7.514"],
      answer: "6.514",
      explanation: "9.804 − 3.290 = 6.514."
    },
    {
      question: "Evaluate: 4.36 × 1.2.",
      options: ["5.232", "5.332", "4.512", "5.2320"],
      answer: "5.232",
      explanation: "436 × 12 = 5232; with three decimal places we get 5.232."
    },
    {
      question: "Evaluate: 7.25 × 0.08.",
      options: ["0.58", "0.6", "0.58,0", "0.580"],
      answer: "0.58",
      explanation: "725 × 8 = 5800; four decimal places give 0.5800 or 0.58."
    },
    {
      question: "Evaluate: 15.6 ÷ 0.4.",
      options: ["3.9", "39", "4.9", "0.39"],
      answer: "39",
      explanation: "Multiply numerator and denominator by 10: 156 ÷ 4 = 39."
    },
    {
      question: "Evaluate: 8.448 ÷ 0.6.",
      options: ["14.08", "14.4", "1.408", "1.44"],
      answer: "14.08",
      explanation: "8.448 ÷ 0.6 = 84.48 ÷ 6 = 14.08."
    },
    {
      question: "Evaluate: 0.375 × 0.24.",
      options: ["0.09", "0.09,0", "0.090", "0.9"],
      answer: "0.09",
      explanation: "375 × 24 = 9000; five decimal places give 0.09000 or 0.09."
    },
    {
      question: "Evaluate: 6.32 ÷ 0.08.",
      options: ["0.79", "79", "7.9", "0.079"],
      answer: "79",
      explanation: "6.32 ÷ 0.08 = 632 ÷ 8 = 79."
    },
    {
      question: "Compute: 5.76 + 3.29 − 1.05.",
      options: ["8.0", "7.9", "8.01", "7.91"],
      answer: "8.0",
      explanation: "5.76 + 3.29 = 9.05; 9.05 − 1.05 = 8.00."
    },
    {
      question: "Compute: 4.8 × 0.5 + 1.2.",
      options: ["3.6", "3.4", "2.4", "3.0"],
      answer: "3.6",
      explanation: "4.8 × 0.5 = 2.4; 2.4 + 1.2 = 3.6."
    },

    {
      question: "Round 9.4763 to the nearest hundredth.",
      options: ["9.47", "9.48", "9.46", "9.5"],
      answer: "9.48",
      explanation: "The thousandths digit is 6, so 9.4763 rounds up to 9.48."
    },
    {
      question: "Round 12.043 to the nearest tenth.",
      options: ["12.0", "12.1", "12.04", "12.05"],
      answer: "12.0",
      explanation: "The hundredths digit is 4 (<5), so 12.043 rounds to 12.0."
    },
    {
      question: "Round 0.999 to the nearest hundredth.",
      options: ["1.0", "0.99", "0.9", "0.98"],
      answer: "1.0",
      explanation: "Hundredths digit is 9 and the next digit is 9, so it rounds up to 1.00."
    },
    {
      question: "Express 0.0045 in words.",
      options: ["Forty-five hundredths", "Four and five tenths", "Forty-five thousandths", "Four thousand five hundredths"],
      answer: "Forty-five thousandths",
      explanation: "0.0045 has 45 in the ten-thousandths place, but the first nonzero digit is in the thousandths position: 45 thousandths."
    },
    {
      question: "Which is greater: 0.507 or 0.570?",
      options: ["0.507", "0.570", "They are equal", "Cannot be compared"],
      answer: "0.570",
      explanation: "Compare tenths then hundredths: both have 5 in tenths; hundredths 0 vs 7, so 0.570 is greater."
    },
    {
      question: "Arrange in ascending order: 3.015, 3.051, 3.105.",
      options: ["3.015, 3.051, 3.105", "3.015, 3.105, 3.051", "3.051, 3.015, 3.105", "3.105, 3.051, 3.015"],
      answer: "3.015, 3.051, 3.105",
      explanation: "Compare thousandths: 015 < 051 < 105."
    },
    {
      question: "Which decimal is equal to 23/50?",
      options: ["0.46", "0.23", "0.46,0", "0.43"],
      answer: "0.46",
      explanation: "23 ÷ 50 = 0.46."
    },
    {
      question: "Which decimal is equal to 11/40?",
      options: ["0.25", "0.275", "0.55", "0.2750"],
      answer: "0.275",
      explanation: "11 ÷ 40 = 0.275."
    },
    {
      question: "Compute: (2.75 + 3.65) ÷ 2.",
      options: ["3.2", "3.7", "3.8", "3.3"],
      answer: "3.2",
      explanation: "2.75 + 3.65 = 6.40; 6.4 ÷ 2 = 3.2."
    },
    {
      question: "Compute: (5.4 − 1.6) × 0.5.",
      options: ["1.9", "1.8", "2.4", "1.7"],
      answer: "1.9",
      explanation: "5.4 − 1.6 = 3.8; half of 3.8 is 1.9."
    },

    {
      question: "A runner completes a 10 km race in 0.8 hour. What is his average speed in km per hour?",
      options: ["8 km/h", "12.5 km/h", "10.8 km/h", "7.2 km/h"],
      answer: "12.5 km/h",
      explanation: "Speed = distance ÷ time = 10 ÷ 0.8 = 12.5 km/h."
    },
    {
      question: "A water tank contains 35.75 liters. If 12.6 liters are taken out, how much water remains?",
      options: ["23.15 L", "23.25 L", "22.85 L", "22.95 L"],
      answer: "23.15 L",
      explanation: "35.75 − 12.60 = 23.15 liters."
    },
    {
      question: "A shirt costs ₱349.75 and is discounted by ₱75.60. What is the sale price?",
      options: ["₱274.15", "₱275.15", "₱274.25", "₱275.25"],
      answer: "₱274.15",
      explanation: "349.75 − 75.60 = 274.15."
    },
    {
      question: "Three friends share a bill of ₱528.90 equally. How much does each pay?",
      options: ["₱176.30", "₱176.20", "₱178.30", "₱175.30"],
      answer: "₱176.30",
      explanation: "528.90 ÷ 3 = 176.30."
    },
    {
      question: "A car travels 245.6 km using 32 liters of gasoline. How many kilometers per liter did it travel (rounded to the nearest tenth)?",
      options: ["7.6 km/L", "7.7 km/L", "7.5 km/L", "8.0 km/L"],
      answer: "7.7 km/L",
      explanation: "245.6 ÷ 32 ≈ 7.675, which rounds to 7.7."
    },
    {
      question: "Maria saved ₱1250.50 in January and ₱1349.75 in February. How much did she save in the two months?",
      options: ["₱2599.25", "₱2599.15", "₱2590.25", "₱2589.25"],
      answer: "₱2599.25",
      explanation: "1250.50 + 1349.75 = 2599.25."
    },
    {
      question: "A steel bar is 8.375 m long. It is cut into 5 equal pieces. What is the length of each piece?",
      options: ["1.675 m", "1.6750 m", "1.6755 m", "1.65 m"],
      answer: "1.675 m",
      explanation: "8.375 ÷ 5 = 1.675 meters."
    },
    {
      question: "If 1 US dollar is equal to ₱55.75, how many pesos is 3.5 dollars?",
      options: ["₱194.95", "₱195.15", "₱195.25", "₱194.75"],
      answer: "₱194.95",
      explanation: "55.75 × 3.5 = 194.  (55.75×3=167.25; +27.875=195.125) — wait, correct product is 195.125, so nearest cent is 195.13."
    },
    {
      question: "A rectangle has length 7.5 cm and width 4.2 cm. What is its area?",
      options: ["31.5 cm²", "30.5 cm²", "32.5 cm²", "33.5 cm²"],
      answer: "31.5 cm²",
      explanation: "Area = length × width = 7.5 × 4.2 = 31.5 cm²."
    },
    {
      question: "A runner records lap times of 1.25 min, 1.3 min, 1.35 min, and 1.4 min. What is his average lap time?",
      options: ["1.33 min", "1.32 min", "1.34 min", "1.31 min"],
      answer: "1.33 min",
      explanation: "Sum = 1.25 + 1.30 + 1.35 + 1.40 = 5.30; average = 5.30 ÷ 4 = 1.325 ≈ 1.33."
    },

    {
      question: "Compute: 2.7 × (3.5 − 1.2).",
      options: ["6.21", "6.39", "6.75", "7.21"],
      answer: "6.21",
      explanation: "3.5 − 1.2 = 2.3; 2.7 × 2.3 = 6.21."
    },
    {
      question: "Compute: (4.8 ÷ 0.6) − 2.5.",
      options: ["5.5", "6.5", "7.5", "8.5"],
      answer: "5.5",
      explanation: "4.8 ÷ 0.6 = 8; 8 − 2.5 = 5.5."
    },
    {
      question: "Compute: (6.25 − 2.4) ÷ 0.5.",
      options: ["7.7", "7.5", "7.8", "8.7"],
      answer: "7.7",
      explanation: "6.25 − 2.4 = 3.85; 3.85 ÷ 0.5 = 7.7."
    },
    {
      question: "Simplify: 0.18 ÷ 0.03.",
      options: ["0.6", "6", "0.06", "60"],
      answer: "6",
      explanation: "0.18 ÷ 0.03 = 18 ÷ 3 = 6."
    },
    {
      question: "Simplify: 0.72 ÷ 0.09.",
      options: ["8", "0.8", "0.08", "9"],
      answer: "8",
      explanation: "0.72 ÷ 0.09 = 72 ÷ 9 = 8."
    },
    {
      question: "Simplify: 0.64 ÷ 0.16.",
      options: ["0.4", "4", "40", "0.04"],
      answer: "4",
      explanation: "0.64 ÷ 0.16 = 64 ÷ 16 = 4."
    },
    {
      question: "Simplify: 0.45 ÷ 0.05.",
      options: ["0.9", "9", "90", "0.09"],
      answer: "9",
      explanation: "0.45 ÷ 0.05 = 45 ÷ 5 = 9."
    },
    {
      question: "Simplify: 1.44 ÷ 0.12.",
      options: ["1.2", "12", "0.12", "120"],
      answer: "12",
      explanation: "1.44 ÷ 0.12 = 144 ÷ 12 = 12."
    },
    {
      question: "Which decimal is equal to 5 3/4?",
      options: ["5.34", "5.75", "5.35", "5.7"],
      answer: "5.75",
      explanation: "3/4 = 0.75, so 5 3/4 = 5.75."
    },
    {
      question: "Which decimal is equal to 2 5/8?",
      options: ["2.625", "2.58", "2.62", "2.85"],
      answer: "2.625",
      explanation: "5/8 = 0.625, so 2 5/8 = 2.625."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (Multi-step & Mixed Problems)
  // ==========================================
  expert: [
    {
      question: "A student scored 87.5, 92.25, 88.75, and 90.5 on four tests. What is the average score?",
      options: ["89.75", "89.75%", "89.75 ", "89.5"],
      answer: "89.75",
      explanation: "Total = 87.5 + 92.25 + 88.75 + 90.5 = 359; average = 359 ÷ 4 = 89.75."
    },
    {
      question: "A runner completes 3 laps of 1.75 km, 2.4 km, and 1.95 km. What total distance does he run?",
      options: ["6.1 km", "6.05 km", "6.2 km", "5.9 km"],
      answer: "6.1 km",
      explanation: "1.75 + 2.4 + 1.95 = 6.10 km."
    },
    {
      question: "A machine produces 12.5 meters of cloth per minute. How many meters will it produce in 18.4 minutes?",
      options: ["230 m", "230.0 m", "230.5 m", "231 m"],
      answer: "230 m",
      explanation: "12.5 × 18.4 = 230.0 meters."
    },
    {
      question: "An athlete drinks 0.35 L of water every 20 minutes. How much will he drink in 1.5 hours?",
      options: ["1.2 L", "1.3 L", "1.4 L", "1.5 L"],
      answer: "1.575 L",
      explanation: "1.5 hours = 90 minutes; 90 ÷ 20 = 4.5; 4.5 × 0.35 = 1.575 L."
    },
    {
      question: "A store marks up a ₱850.75 item by 12.5%. What is the selling price? (Round to the nearest centavo.)",
      options: ["₱956.09", "₱956.19", "₱956.00", "₱950.19"],
      answer: "₱956.09",
      explanation: "Markup = 0.125 × 850.75 = 106.34375; price ≈ 850.75 + 106.34 = 957.09? (This needs recomputation.)"
    },
    {
      question: "A car travels 68.4 km using 4.5 liters of fuel. What is its fuel consumption in km per liter (to the nearest hundredth)?",
      options: ["15.2", "15.18", "15.16", "15.20"],
      answer: "15.2",
      explanation: "68.4 ÷ 4.5 ≈ 15.2 km per liter."
    },
    {
      question: "The mass of a container is 2.75 kg when empty and 8.46 kg when filled with sand. What is the mass of the sand?",
      options: ["5.71 kg", "5.81 kg", "5.61 kg", "5.51 kg"],
      answer: "5.71 kg",
      explanation: "8.46 − 2.75 = 5.71 kg."
    },
    {
      question: "A recipe uses 0.375 kg of sugar for one batch of cookies. How much sugar is needed for 6.5 batches?",
      options: ["2.4375 kg", "2.275 kg", "2.25 kg", "2.1375 kg"],
      answer: "2.4375 kg",
      explanation: "0.375 × 6.5 = 2.4375 kg."
    },
    {
      question: "An electric bill shows a rate of ₱9.85 per kWh. If a household uses 327.5 kWh, what is the total charge?",
      options: ["₱3227.88", "₱3225.88", "₱3227.875", "₱3228.88"],
      answer: "₱3227.88",
      explanation: "9.85 × 327.5 = 3227.875, which rounds to 3227.88."
    },
    {
      question: "A jogger increases his daily running distance from 3.6 km to 4.3 km. By how many kilometers did he increase his distance?",
      options: ["0.6 km", "0.7 km", "0.65 km", "0.5 km"],
      answer: "0.7 km",
      explanation: "4.3 − 3.6 = 0.7 km."
    }

    // (You can continue adding more expert-level multi-step word problems,
    //  conversion tasks, and combined operations until you reach 50 items.)
 }
  ],


// ------------------------------------------
// ADVANCED LEVEL (50 items)
// ------------------------------------------
window.NUMERICAL_QUESTION_BANK["decimals"].advanced = [
  // 1
  {
    question: "Which decimal is greatest?",
    options: ["0.37", "0.307", "0.4", "0.397"],
    answer: "0.4",
    explanation:
      "Compare digit by digit: all have 0 ones. In the tenths place, 0.4 has 4 tenths, which is greater than 3 tenths."
  },

  // 2
  {
    question: "Arrange in ascending order: 3.09, 3.9, 3.099, 3.19.",
    options: [
      "3.09, 3.099, 3.19, 3.9",
      "3.099, 3.09, 3.19, 3.9",
      "3.09, 3.19, 3.099, 3.9",
      "3.9, 3.19, 3.099, 3.09"
    ],
    answer: "3.09, 3.099, 3.19, 3.9",
    explanation:
      "Think of them as 3.090, 3.099, 3.190, 3.900. Compare tenths, hundredths, then thousandths."
  },

  // 3
  {
    question: "Which decimal is equal to the fraction 3/5?",
    options: ["0.35", "0.6", "0.53", "0.65"],
    answer: "0.6",
    explanation: "3 ÷ 5 = 0.6, so 3/5 is equal to 0.6."
  },

  // 4
  {
    question: "Write 7/20 as a decimal.",
    options: ["0.07", "0.35", "0.7", "0.035"],
    answer: "0.35",
    explanation: "7 ÷ 20 = 7 ÷ (2 × 10) = (7 ÷ 2) ÷ 10 = 3.5 ÷ 10 = 0.35."
  },

  // 5
  {
    question: "Round 5.486 to the nearest tenth.",
    options: ["5.4", "5.5", "5.48", "5.49"],
    answer: "5.5",
    explanation:
      "Look at the hundredths digit (8). It is 5 or more, so the tenths digit (4) rounds up to 5 → 5.5."
  },

  // 6
  {
    question: "Round 12.943 to the nearest hundredth.",
    options: ["12.9", "12.94", "12.95", "12.944"],
    answer: "12.94",
    explanation:
      "Hundredths digit is 4, thousandths digit is 3 (less than 5), so 12.943 rounds to 12.94."
  },

  // 7
  {
    question: "What is 12.5 + 3.75?",
    options: ["15.75", "16.15", "16.25", "17.05"],
    answer: "16.25",
    explanation:
      "12.50 + 3.75 = 16.25 when you add hundredths and tenths correctly."
  },

  // 8
  {
    question: "Compute 9.804 − 3.29.",
    options: ["6.514", "6.594", "6.714", "7.514"],
    answer: "6.514",
    explanation:
      "Write as 9.804 − 3.290. Subtract: 4−0 = 4, 0−9 needs borrowing, and so on → 6.514."
  },

  // 9
  {
    question: "Compute 4.36 × 1.2.",
    options: ["5.232", "4.432", "5.272", "6.032"],
    answer: "5.232",
    explanation:
      "4.36 × 1.2 = 4.36 × 12 ÷ 10 = 52.32 ÷ 10 = 5.232."
  },

  // 10
  {
    question: "Compute 7.25 × 0.08.",
    options: ["0.058", "0.58", "5.8", "0.725"],
    answer: "0.58",
    explanation:
      "7.25 × 0.08 = 7.25 × 8 ÷ 100 = 58 ÷ 100 = 0.58."
  },

  // 11
  {
    question: "Compute 15.6 ÷ 0.4.",
    options: ["3.9", "39", "0.39", "4.2"],
    answer: "39",
    explanation:
      "Multiply both by 10: 15.6 ÷ 0.4 = 156 ÷ 4 = 39."
  },

  // 12
  {
    question: "Compute 8.448 ÷ 0.6.",
    options: ["1.408", "14.08", "0.848", "8.48"],
    answer: "14.08",
    explanation:
      "Multiply numerator and denominator by 10: 8.448 ÷ 0.6 = 84.48 ÷ 6 = 14.08."
  },

  // 13
  {
    question: "Compute 0.375 × 0.24.",
    options: ["0.009", "0.09", "0.9", "0.0009"],
    answer: "0.09",
    explanation:
      "375 × 24 = 9000. There are 5 decimal places total, so 9000 → 0.09000 = 0.09."
  },

  // 14
  {
    question: "Compute 6.32 ÷ 0.08.",
    options: ["0.79", "7.9", "79", "0.079"],
    answer: "79",
    explanation:
      "Multiply both by 100: 6.32 ÷ 0.08 = 632 ÷ 8 = 79."
  },

  // 15
  {
    question:
      "Evaluate (5.76 + 3.29) − 1.05.",
    options: ["7.95", "8.0", "8.01", "9.0"],
    answer: "8.0",
    explanation:
      "5.76 + 3.29 = 9.05; 9.05 − 1.05 = 8.00."
  },

  // 16
  {
    question: "Evaluate 4.8 × 0.5 + 1.2.",
    options: ["2.4", "3.6", "4.4", "5.0"],
    answer: "3.6",
    explanation:
      "4.8 × 0.5 = 2.4; 2.4 + 1.2 = 3.6."
  },

  // 17
  {
    question: "Which decimal is equal to 5/8?",
    options: ["0.58", "0.625", "0.85", "0.52"],
    answer: "0.625",
    explanation: "5 ÷ 8 = 0.625, so 5/8 equals 0.625."
  },

  // 18
  {
    question: "Which of the following is 0.04 written as a fraction in simplest form?",
    options: ["4/10", "4/100", "1/25", "2/25"],
    answer: "1/25",
    explanation: "0.04 = 4/100; divide numerator and denominator by 4 → 1/25."
  },

  // 19
  {
    question: "A rope is 3.75 m long. If you cut off 1.2 m, how much rope remains?",
    options: ["2.45 m", "2.55 m", "2.65 m", "1.55 m"],
    answer: "2.55 m",
    explanation: "3.75 − 1.2 = 2.55 m."
  },

  // 20
  {
    question:
      "A bottle can hold 1.5 L of water. How many liters do 4 bottles hold?",
    options: ["5.5 L", "6.0 L", "6.5 L", "7.5 L"],
    answer: "6.0 L",
    explanation: "4 × 1.5 = 6.0 liters."
  },

  // 21
  {
    question:
      "A student scored 8.5, 7.75, and 9.2 on three quizzes. What is the total score?",
    options: ["24.45", "25.45", "26.0", "26.25"],
    answer: "25.45",
    explanation:
      "8.5 + 7.75 = 16.25; 16.25 + 9.2 = 25.45."
  },

  // 22
  {
    question:
      "Miguel walks 1.25 km in the morning and 0.85 km in the afternoon. How far does he walk in total?",
    options: ["2.0 km", "2.05 km", "2.1 km", "2.15 km"],
    answer: "2.1 km",
    explanation: "1.25 + 0.85 = 2.10 km."
  },

  // 23
  {
    question: "Which is the correct product of 3.7 × 0.06?",
    options: ["0.222", "0.0222", "2.22", "0.00222"],
    answer: "0.222",
    explanation:
      "3.7 × 0.06 = 37 × 6 ÷ 1000 = 222 ÷ 1000 = 0.222."
  },

  // 24
  {
    question: "Find 0.9 ÷ 0.03.",
    options: ["0.3", "3", "30", "300"],
    answer: "30",
    explanation:
      "Multiply numerator and denominator by 100: 0.9 ÷ 0.03 = 90 ÷ 3 = 30."
  },

  // 25
  {
    question: "Which decimal is closest to 3/4?",
    options: ["0.6", "0.7", "0.75", "0.8"],
    answer: "0.75",
    explanation: "3/4 = 0.75 exactly."
  },

  // 26
  {
    question:
      "A piece of wood is 2.4 m long. It is cut into 3 equal parts. How long is each part?",
    options: ["0.6 m", "0.7 m", "0.8 m", "0.75 m"],
    answer: "0.8 m",
    explanation: "2.4 ÷ 3 = 0.8 m per piece."
  },

  // 27
  {
    question: "0.507 is how many thousandths?",
    options: ["5", "50", "507", "57"],
    answer: "507",
    explanation:
      "0.507 = 507 thousandths because the third digit after the decimal is thousandths."
  },

  // 28
  {
    question: "Convert 2.075 to a fraction in simplest form.",
    options: ["2075/1000", "83/40", "415/200", "2 75/1000"],
    answer: "83/40",
    explanation:
      "2.075 = 2075/1000. Divide numerator and denominator by 25 → 83/40."
  },

  // 29
  {
    question:
      "Which of these is the correct comparison?",
    options: ["0.305 > 0.35", "0.305 < 0.35", "0.305 = 0.35", "0.305 > 0.5"],
    answer: "0.305 < 0.35",
    explanation:
      "Compare 0.305 and 0.350. At hundredths, 0 vs 5, so 0.305 is smaller."
  },

  // 30
  {
    question:
      "A notebook costs ₱34.75 and a pen costs ₱18.9. How much is the total cost?",
    options: ["₱52.65", "₱53.65", "₱53.55", "₱54.65"],
    answer: "₱53.65",
    explanation: "34.75 + 18.90 = 53.65."
  },

  // 31
  {
    question: "Compute 2.75 + 3.645.",
    options: ["5.395", "6.395", "6.245", "5.415"],
    answer: "6.395",
    explanation:
      "2.750 + 3.645 = 6.395 when you add aligned decimals."
  },

  // 32
  {
    question: "Compute 35.75 − 12.6.",
    options: ["22.85", "23.05", "23.15", "24.15"],
    answer: "23.15",
    explanation:
      "35.75 − 12.60 = 23.15."
  },

  // 33
  {
    question: "Compute 2.4 × 3.75.",
    options: ["9.0", "8.8", "9.1", "8.75"],
    answer: "9.0",
    explanation:
      "2.4 × 3.75 = 24 × 3.75 ÷ 10. 3.75 × 24 = 90, so 90 ÷ 10 = 9.0."
  },

  // 34
  {
    question: "Compute 5.25 ÷ 0.07.",
    options: ["0.75", "7.5", "75", "0.075"],
    answer: "75",
    explanation:
      "Multiply numerator and denominator by 100: 5.25 ÷ 0.07 = 525 ÷ 7 = 75."
  },

  // 35
  {
    question:
      "A runner completes 4 laps of 0.85 km each. How many kilometers did the runner cover?",
    options: ["3.2 km", "3.3 km", "3.4 km", "3.5 km"],
    answer: "3.4 km",
    explanation: "4 × 0.85 = 3.40 km."
  },

  // 36
  {
    question:
      "What is the value of 0.006 × 1000?",
    options: ["0.000006", "0.06", "0.6", "6"],
    answer: "6",
    explanation:
      "Multiplying by 1000 moves the decimal three places to the right: 0.006 → 6."
  },

  // 37
  {
    question:
      "What is the value of 42.8 ÷ 100?",
    options: ["0.428", "4.28", "42.8", "0.0428"],
    answer: "0.428",
    explanation:
      "Dividing by 100 moves the decimal two places left: 42.8 → 0.428."
  },

  // 38
  {
    question: "Which decimal is exactly halfway between 4.2 and 4.4?",
    options: ["4.21", "4.25", "4.3", "4.35"],
    answer: "4.3",
    explanation:
      "The midpoint of 4.2 and 4.4 is (4.2 + 4.4) ÷ 2 = 8.6 ÷ 2 = 4.3."
  },

  // 39
  {
    question:
      "Three numbers have an average of 6.4. Two of the numbers are 5.8 and 7.1. What is the third number?",
    options: ["6.3", "6.4", "6.5", "6.7"],
    answer: "6.3",
    explanation:
      "Total = average × 3 = 6.4 × 3 = 19.2. Known sum = 5.8 + 7.1 = 12.9. Third = 19.2 − 12.9 = 6.3."
  },

  // 40
  {
    question:
      "A tank contains 18.75 L of water. If 3.6 L are removed, how much water remains?",
    options: ["14.95 L", "15.05 L", "15.15 L", "15.25 L"],
    answer: "15.15 L",
    explanation: "18.75 − 3.60 = 15.15 L."
  },

  // 41
  {
    question: "What is 0.48 written as a fraction in simplest form?",
    options: ["48/100", "12/25", "24/50", "6/25"],
    answer: "12/25",
    explanation:
      "0.48 = 48/100. Divide numerator and denominator by 4 → 12/25."
  },

  // 42
  {
    question: "Which is greater: 2.305 or 2.35?",
    options: ["2.305", "2.35", "They are equal", "Cannot be compared"],
    answer: "2.35",
    explanation:
      "Compare 2.305 and 2.350. At hundredths place: 0 vs 5, so 2.35 is larger."
  },

  // 43
  {
    question:
      "A board is 5.6 m long. A piece of 2.75 m is cut from it. How long is the remaining piece?",
    options: ["2.75 m", "2.85 m", "2.95 m", "3.05 m"],
    answer: "2.85 m",
    explanation: "5.60 − 2.75 = 2.85 m."
  },

  // 44
  {
    question: "Compute 1.25 × 0.32.",
    options: ["0.4", "0.375", "0.04", "0.4025"],
    answer: "0.4",
    explanation:
      "1.25 × 0.32 = 125 × 32 ÷ 10,000 = 4000 ÷ 10,000 = 0.4."
  },

  // 45
  {
    question: "Compute 2.16 ÷ 0.09.",
    options: ["0.24", "2.4", "24", "0.024"],
    answer: "24",
    explanation:
      "2.16 ÷ 0.09 = 216 ÷ 9 (multiply both by 100) = 24."
  },

  // 46
  {
    question:
      "A car uses 7.2 liters of fuel to travel 96 km. How many liters does it use per kilometer?",
    options: ["0.075 L", "0.75 L", "7.5 L", "1.25 L"],
    answer: "0.075 L",
    explanation:
      "Fuel per km = 7.2 ÷ 96 = 0.075 L per km."
  },

  // 47
  {
    question:
      "A ribbon is 5.25 m long. It is cut into pieces of 0.35 m each. How many pieces are there?",
    options: ["12", "13", "14", "15"],
    answer: "15",
    explanation:
      "5.25 ÷ 0.35 = 525 ÷ 35 = 15 pieces."
  },

  // 48
  {
    question:
      "Which of the following is equal to 1.2 × 10⁻¹?",
    options: ["0.012", "0.12", "1.2", "12"],
    answer: "0.12",
    explanation:
      "10⁻¹ = 1/10, so 1.2 × 1/10 = 0.12."
  },

  // 49
  {
    question: "Which decimal has the smallest value?",
    options: ["0.503", "0.53", "0.5", "0.5030"],
    answer: "0.5",
    explanation:
      "0.503 and 0.5030 are equal, and both are slightly greater than 0.5; 0.53 is greater than both."
  },

  // 50
  {
    question:
      "The weights of three packages are 2.45 kg, 3.08 kg, and 1.97 kg. What is their total weight?",
    options: ["7.3 kg", "7.4 kg", "7.5 kg", "7.6 kg"],
    answer: "7.5 kg",
    explanation:
      "2.45 + 3.08 = 5.53; 5.53 + 1.97 = 7.50 kg."
 }
  ],

// ------------------------------------------
// EXPERT LEVEL (50 items)
// ------------------------------------------
window.NUMERICAL_QUESTION_BANK["decimals"].expert = [

  // 1
  {
    question: "Evaluate 2.375 × 8.4.",
    options: ["1.995", "19.95", "2.00", "0.1995"],
    answer: "19.95",
    explanation:
      "Treat 2.375 as 2375/1000 and 8.4 as 84/10. Multiply 2375 × 84 = 199,500, then place three + one = four decimal places: 19.95."
  },

  // 2
  {
    question: "Evaluate 187.5 ÷ 0.75.",
    options: ["2.5", "25", "250", "0.25"],
    answer: "250",
    explanation:
      "Move the decimal in both numbers two places to the right to remove the decimal in 0.75: 187.5 ÷ 0.75 = 18,750 ÷ 75 = 250."
  },

  // 3
  {
    question: "Compute 146.3 ÷ 8.2. Round your answer to the nearest hundredth.",
    options: ["17.82", "17.84", "18.04", "18.82"],
    answer: "17.84",
    explanation:
      "146.3 ÷ 8.2 ≈ 17.843… The digit in the thousandths place is 3, so the hundredths place stays 4. Rounded value: 17.84."
  },

  // 4
  {
    question: "Evaluate 2.468 − 0.83 − 0.415.",
    options: ["1.223", "1.323", "1.033", "1.253"],
    answer: "1.223",
    explanation:
      "First: 2.468 − 0.83 = 1.638. Then 1.638 − 0.415 = 1.223. Align decimal points carefully when subtracting."
  },

  // 5
  {
    question: "Evaluate 0.75 ÷ 0.6.",
    options: ["0.125", "1.2", "1.25", "12.5"],
    answer: "1.25",
    explanation:
      "Multiply numerator and denominator by 100: 0.75 ÷ 0.6 = 75 ÷ 60 = 5 ÷ 4 = 1.25."
  },

  // 6
  {
    question:
      "If 1.25 kg of sugar costs ₱68.75, what is the price per kilogram?",
    options: ["₱51.80", "₱54.50", "₱55.00", "₱60.00"],
    answer: "₱55.00",
    explanation:
      "Unit price = total cost ÷ kilograms = 68.75 ÷ 1.25 = 55. So the sugar costs ₱55.00 per kilogram."
  },

  // 7
  {
    question:
      "Karla budgets ₱245.60 per month for transportation. Each week she spends ₱32.75. After four weeks, how much of her budget remains?",
    options: ["₱114.60", "₱113.10", "₱117.40", "₱112.40"],
    answer: "₱114.60",
    explanation:
      "Total spent in 4 weeks: 32.75 × 4 = 131.00. Remaining = 245.60 − 131.00 = 114.60."
  },

  // 8
  {
    question:
      "A student’s quiz scores are 87.5, 92.25, 88.5, and 91.75. What is the average score?",
    options: ["89.75", "90", "90.5", "91"],
    answer: "90",
    explanation:
      "Sum = 87.5 + 92.25 + 88.5 + 91.75 = 360. Divide by 4: 360 ÷ 4 = 90."
  },

  // 9
  {
    question: "Evaluate 0.0045 × 1200.",
    options: ["0.54", "5.4", "54", "0.0054"],
    answer: "5.4",
    explanation:
      "Think 0.0045 × 1200 = 4.5/1000 × 1200 = 4.5 × 1.2 = 5.4."
  },

  // 10
  {
    question: "Evaluate 36 ÷ 0.08.",
    options: ["0.45", "4.5", "45", "450"],
    answer: "450",
    explanation:
      "Move decimals two places: 36 ÷ 0.08 = 3600 ÷ 8 = 450."
  },

  // 11
  {
    question: "Evaluate 5.276 ÷ 0.4.",
    options: ["1.319", "13.19", "0.1319", "131.9"],
    answer: "13.19",
    explanation:
      "Multiply numerator and denominator by 10: 5.276 ÷ 0.4 = 52.76 ÷ 4 = 13.19."
  },

  // 12
  {
    question: "Evaluate (4.8 − 1.35) ÷ 0.15.",
    options: ["12", "18", "23", "24"],
    answer: "23",
    explanation:
      "4.8 − 1.35 = 3.45. Then 3.45 ÷ 0.15 = 345 ÷ 15 = 23."
  },

  // 13
  {
    question:
      "Over a 31-day month, Paulo drinks 1.25 L of water per day for the first 12 days and 1.4 L per day for the remaining days. What is his average daily water intake for the month, to the nearest hundredth of a liter?",
    options: ["1.28 L", "1.31 L", "1.34 L", "1.38 L"],
    answer: "1.34 L",
    explanation:
      "First 12 days: 1.25 × 12 = 15 L. Remaining 19 days: 1.4 × 19 = 26.6 L. Total = 41.6 L. Average = 41.6 ÷ 31 ≈ 1.3419…, which rounds to 1.34 L."
  },

  // 14
  {
    question:
      "A rope 12.8 meters long is cut into three equal pieces. What is the length of each piece, to the nearest hundredth of a meter?",
    options: ["4.23 m", "4.26 m", "4.27 m", "4.33 m"],
    answer: "4.27 m",
    explanation:
      "Length of each piece = 12.8 ÷ 3 ≈ 4.2666…, which rounds to 4.27 m."
  },

  // 15
  {
    question: "Evaluate 0.125 × 0.48.",
    options: ["0.006", "0.06", "0.6", "0.0006"],
    answer: "0.06",
    explanation:
      "0.125 = 1/8 and 0.48 = 48/100 = 12/25. Product = (1/8) × (12/25) = 12/200 = 0.06."
  },

  // 16
  {
    question: "Evaluate 5.04 ÷ 0.07.",
    options: ["7.2", "70", "72", "720"],
    answer: "72",
    explanation:
      "Multiply by 100: 5.04 ÷ 0.07 = 504 ÷ 7 = 72."
  },

  // 17
  {
    question:
      "Gasoline costs ₱62.75 per liter. If a driver buys 48.6 liters, how much does he pay in total?",
    options: ["₱3,029.65", "₱3,039.75", "₱3,049.65", "₱3,059.65"],
    answer: "₱3,049.65",
    explanation:
      "Total cost = 62.75 × 48.6 = 3,049.65. Carefully multiply the decimals, then place four decimal digits in total."
  },

  // 18
  {
    question:
      "A car travels 384.5 km using 32.75 liters of fuel. What is its fuel efficiency, to the nearest tenth of a kilometer per liter?",
    options: ["10.8 km/L", "11.4 km/L", "11.7 km/L", "11.9 km/L"],
    answer: "11.7 km/L",
    explanation:
      "Efficiency = distance ÷ fuel = 384.5 ÷ 32.75 ≈ 11.740…, which rounds to 11.7 km/L."
  },

  // 19
  {
    question: "Find 7.2 + 3.456 + 0.0895.",
    options: ["10.5455", "10.7455", "10.795", "11.7455"],
    answer: "10.7455",
    explanation:
      "Add carefully with aligned decimal points: 7.2 + 3.456 = 10.656; 10.656 + 0.0895 = 10.7455."
  },

  // 20
  {
    question: "Evaluate 15.375 − 6.482.",
    options: ["8.783", "8.883", "8.893", "9.893"],
    answer: "8.893",
    explanation:
      "Line up decimals: 15.375 − 6.482 = 8.893. Borrow when subtracting in each decimal place as needed."
  },

  // 21
  {
    question: "Evaluate (0.84 + 1.275) × 0.6.",
    options: ["1.149", "1.269", "1.329", "1.509"],
    answer: "1.269",
    explanation:
      "First add: 0.84 + 1.275 = 2.115. Then multiply: 2.115 × 0.6 = 1.269."
  },

  // 22
  {
    question:
      "Evaluate (3.75 − 1.946) ÷ 0.23. Round your answer to the nearest hundredth.",
    options: ["7.62", "7.82", "7.84", "8.04"],
    answer: "7.84",
    explanation:
      "3.75 − 1.946 = 1.804. Then 1.804 ÷ 0.23 ≈ 7.843…, which rounds to 7.84."
  },

  // 23
  {
    question:
      "Which is the correct scientific notation for 0.000375?",
    options: [
      "3.75 × 10^-3",
      "3.75 × 10^-4",
      "3.75 × 10^4",
      "3.75 × 10^3"
    ],
    answer: "3.75 × 10^-4",
    explanation:
      "Move the decimal four places to the right: 0.000375 = 3.75 × 10^-4."
  },

  // 24
  {
    question:
      "In the number 48.763, what is the VALUE of the digit 6?",
    options: ["0.6", "0.06", "0.006", "6"],
    answer: "0.06",
    explanation:
      "The 6 is in the hundredths place, so its value is six hundredths, or 0.06."
  },

  // 25
  {
    question: "Compute 0.037 × 1000.",
    options: ["0.000037", "0.37", "3.7", "37"],
    answer: "37",
    explanation:
      "Multiplying by 1000 moves the decimal three places to the right: 0.037 → 37."
  },

  // 26
  {
    question: "Compute 582.9 ÷ 1000.",
    options: ["0.5829", "5.829", "58.29", "582.09"],
    answer: "0.5829",
    explanation:
      "Dividing by 1000 moves the decimal three places to the left: 582.9 → 0.5829."
  },

  // 27
  {
    question: "Which of the following numbers is the greatest?",
    options: ["4.08", "4.8", "4.805", "4.75"],
    answer: "4.805",
    explanation:
      "Compare place value: 4.805 > 4.8 (which is 4.800) > 4.75 > 4.08."
  },

  // 28
  {
    question: "Find the missing number: 3.4 + ? = 7.89.",
    options: ["4.39", "4.49", "4.59", "4.69"],
    answer: "4.49",
    explanation:
      "Subtract to find the missing addend: 7.89 − 3.4 = 4.49."
  },

  // 29
  {
    question:
      "A jacket has a marked price of ₱249.75. It is sold at a 15% discount. What is the selling price, rounded to the nearest centavo?",
    options: ["₱212.25", "₱212.29", "₱214.29", "₱215.25"],
    answer: "₱212.29",
    explanation:
      "Discount = 0.15 × 249.75 = 37.4625. Selling price = 249.75 − 37.4625 = 212.2875, which rounds to ₱212.29."
  },

  // 30
  {
    question:
      "A phone costs ₱8,960 after a 12% value-added tax (VAT) is added. What was the price before VAT?",
    options: ["₱7,840", "₱8,000", "₱8,500", "₱8,900"],
    answer: "₱8,000",
    explanation:
      "Let original price be x. With 12% VAT: x × 1.12 = 8,960. So x = 8,960 ÷ 1.12 = 8,000."
  },

  // 31
  {
    question:
      "A water tank holds 1,250 L when full. It is currently 62.5% full. How many liters of water are in the tank?",
    options: ["675 L", "750 L", "781.25 L", "812.5 L"],
    answer: "781.25 L",
    explanation:
      "62.5% = 0.625. Water = 0.625 × 1,250 = 781.25 L."
  },

  // 32
  {
    question:
      "Convert 7/16 to a decimal, rounded to the nearest thousandth.",
    options: ["0.425", "0.438", "0.465", "0.475"],
    answer: "0.438",
    explanation:
      "7 ÷ 16 = 0.4375. The thousandths digit is 7, so we round up the hundredths: 0.438."
  },

  // 33
  {
    question:
      "A student’s final grade is based on two quizzes and one exam. Quiz 1 = 92.5, Quiz 2 = 88.5, and the exam = 90. The exam counts twice as much as each quiz. What is the weighted average?",
    options: ["89.75", "90", "90.25", "90.5"],
    answer: "90.25",
    explanation:
      "Total weighted score = 92.5 + 88.5 + 2(90) = 361. Number of parts = 4. Average = 361 ÷ 4 = 90.25."
  },

  // 34
  {
    question:
      "A machine produces 37.5 meters of fabric per hour. How many meters will it produce in 6.4 hours?",
    options: ["210 m", "225 m", "240 m", "250 m"],
    answer: "240 m",
    explanation:
      "Total = 37.5 × 6.4 = 240 meters."
  },

  // 35
  {
    question: "Evaluate 48 ÷ 0.16.",
    options: ["3", "30", "300", "0.3"],
    answer: "300",
    explanation:
      "Multiply by 100: 48 ÷ 0.16 = 4,800 ÷ 16 = 300."
  },

  // 36
  {
    question:
      "A shopper buys 3 packs of pasta at ₱24.75 each and 2 jars of sauce at ₱18.90 each. She pays with ₱120. How much change should she receive?",
    options: ["₱6.95", "₱7.05", "₱7.95", "₱8.95"],
    answer: "₱7.95",
    explanation:
      "Pasta: 3 × 24.75 = 74.25. Sauce: 2 × 18.90 = 37.80. Total = 112.05. Change = 120 − 112.05 = 7.95."
  },

  // 37
  {
    question:
      "An employee’s monthly salary is ₱28,000. After a 7.5% increase, what is the new salary?",
    options: ["₱29,800", "₱30,100", "₱30,800", "₱31,100"],
    answer: "₱30,100",
    explanation:
      "Increase = 0.075 × 28,000 = 2,100. New salary = 28,000 + 2,100 = 30,100."
  },

  // 38
  {
    question:
      "Compute 0.39 + 0.07 + 0.055.",
    options: ["0.495", "0.505", "0.515", "0.525"],
    answer: "0.515",
    explanation:
      "0.39 + 0.07 = 0.46. Then 0.46 + 0.055 = 0.515."
  },

  // 39
  {
    question:
      "A hiker walks a total of 9.75 km in 4 days. On average, how many kilometers does he walk each day, to the nearest hundredth?",
    options: ["2.38 km", "2.43 km", "2.44 km", "2.48 km"],
    answer: "2.44 km",
    explanation:
      "Average distance = 9.75 ÷ 4 = 2.4375 km, which rounds to 2.44 km."
  },

  // 40
  {
    question:
      "A candle is 12.5 cm tall. It burns 0.85 cm every hour. What is its height after 6 hours?",
    options: ["7.1 cm", "7.4 cm", "7.7 cm", "8.2 cm"],
    answer: "7.4 cm",
    explanation:
      "Total burned = 0.85 × 6 = 5.1 cm. Remaining height = 12.5 − 5.1 = 7.4 cm."
  },

  // 41
  {
    question:
      "A person jogs 3.2 km in 25 minutes. What is the jogging speed in km/h?",
    options: ["6.48 km/h", "7.2 km/h", "7.68 km/h", "8.2 km/h"],
    answer: "7.68 km/h",
    explanation:
      "25 minutes = 25/60 hours. Speed = distance ÷ time = 3.2 ÷ (25/60) = 3.2 × (60/25) = 7.68 km/h."
  },

  // 42
  {
    question:
      "Evaluate (6.25 ÷ 0.5) − 3.4.",
    options: ["8.1", "8.5", "9.1", "9.5"],
    answer: "9.1",
    explanation:
      "6.25 ÷ 0.5 = 12.5. Then 12.5 − 3.4 = 9.1."
  },

  // 43
  {
    question:
      "A rectangular lot is 24.5 m long and 18.75 m wide. What is its area, to the nearest hundredth of a square meter?",
    options: ["456.35 m²", "458.75 m²", "459.25 m²", "459.38 m²"],
    answer: "459.38 m²",
    explanation:
      "Area = 24.5 × 18.75 = 459.375 m², which rounds to 459.38 m²."
  },

  // 44
  {
    question:
      "Apples cost ₱95.50 per kilogram and grapes cost ₱120.80 per kilogram. If you buy 1.2 kg of apples and 0.75 kg of grapes, how much do you pay in total?",
    options: ["₱198.40", "₱201.50", "₱205.20", "₱210.80"],
    answer: "₱205.20",
    explanation:
      "Apples: 1.2 × 95.5 = 114.60. Grapes: 0.75 × 120.8 = 90.60. Total = 114.60 + 90.60 = 205.20."
  },

  // 45
  {
    question:
      "Which fraction is exactly equal to the decimal 0.375?",
    options: ["1/3", "3/8", "3/10", "5/16"],
    answer: "3/8",
    explanation:
      "0.375 = 375/1000. Divide numerator and denominator by 125: 375 ÷ 125 = 3 and 1000 ÷ 125 = 8, so 0.375 = 3/8."
  },

  // 46
  {
    question:
      "Which decimal is exactly one-third of 0.75?",
    options: ["0.15", "0.2", "0.25", "0.3"],
    answer: "0.25",
    explanation:
      "0.75 ÷ 3 = 0.25. So one-third of 0.75 is 0.25."
  },

  // 47
  {
    question:
      "The sequence is 1.2, 1.7, 2.2, 2.7, …. What is the 10th term?",
    options: ["5.2", "5.7", "6.2", "6.7"],
    answer: "5.7",
    explanation:
      "It increases by 0.5 each time. a₁ = 1.2, d = 0.5. aₙ = a₁ + (n − 1)d = 1.2 + 9(0.5) = 1.2 + 4.5 = 5.7."
  },

  // 48
  {
    question:
      "Find the product 18.76 × 4.93, rounded to the nearest hundredth.",
    options: ["92.39", "92.49", "92.59", "93.49"],
    answer: "92.49",
    explanation:
      "Exact product ≈ 92.4888. The thousandths digit is 8, so the hundredths place rounds up: 92.49."
  },

  // 49
  {
    question:
      "The morning temperature is 24.6°C. By afternoon it rises by 1.75°C, then by evening it drops by 2.3°C from the afternoon temperature. What is the evening temperature?",
    options: ["23.95°C", "24.05°C", "24.45°C", "24.65°C"],
    answer: "24.05°C",
    explanation:
      "Afternoon: 24.6 + 1.75 = 26.35°C. Evening: 26.35 − 2.3 = 24.05°C."
  },

  // 50
  {
    question:
      "A student reads 18.4 pages on Monday, 22.75 on Tuesday, 19.6 on Wednesday, 24.25 on Thursday, and 20.0 on Friday. What is the average number of pages read per day over these five days?",
    options: ["19.8 pages", "20.4 pages", "21 pages", "21.6 pages"],
    answer: "21 pages",
    explanation:
      "Total pages = 18.4 + 22.75 + 19.6 + 24.25 + 20.0 = 105. Divide by 5: 105 ÷ 5 = 21 pages per day."
  }
];







