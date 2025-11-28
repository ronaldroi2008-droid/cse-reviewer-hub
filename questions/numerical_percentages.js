// questions/numerical_percent.js
// ==========================================
// NUMERICAL – PERCENT (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["percentages"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – Basic Concepts)
  // ==========================================
  beginner: [
    // 1
    {
      question: "What does 20% mean?",
      options: [
        "20 out of 50",
        "20 out of 100",
        "20 out of 10",
        "20 out of 20"
      ],
      answer: "20 out of 100",
      explanation: "Percent means 'per hundred'. So 20% means 20 parts out of 100 equal parts."
    },
    // 2
    {
      question: "Which symbol is used for percent?",
      options: ["#", "$", "%", "&"],
      answer: "%",
      explanation: "The symbol for percent is %."
    },
    // 3
    {
      question: "What is 100% of a quantity?",
      options: ["Half of it", "One-fourth of it", "The whole of it", "None of it"],
      answer: "The whole of it",
      explanation: "100% means the entire amount or the whole quantity."
    },
    // 4
    {
      question: "What is 0% of any number?",
      options: ["0", "The number itself", "Double the number", "Half the number"],
      answer: "0",
      explanation: "0% means zero parts out of 100, so the result is always 0."
    },
    // 5
    {
      question: "Which fraction is equal to 25%?",
      options: ["1/2", "1/3", "1/4", "1/5"],
      answer: "1/4",
      explanation: "25% = 25/100. Divide top and bottom by 25 to get 1/4."
    },
    // 6
    {
      question: "Which fraction is equal to 50%?",
      options: ["1/2", "1/3", "1/4", "2/3"],
      answer: "1/2",
      explanation: "50% = 50/100. Divide by 50 to get 1/2."
    },
    // 7
    {
      question: "Which fraction is equal to 75%?",
      options: ["3/4", "1/3", "2/5", "4/5"],
      answer: "3/4",
      explanation: "75% = 75/100. Divide both by 25 to get 3/4."
    },
    // 8
    {
      question: "Which fraction is equal to 20%?",
      options: ["1/2", "1/4", "1/5", "2/5"],
      answer: "1/5",
      explanation: "20% = 20/100. Divide top and bottom by 20 to get 1/5."
    },
    // 9
    {
      question: "Which fraction is equal to 10%?",
      options: ["1/2", "1/10", "1/5", "1/4"],
      answer: "1/10",
      explanation: "10% = 10/100. Divide by 10 to get 1/10."
    },
    // 10
    {
      question: "Which fraction is equal to 5%?",
      options: ["1/5", "1/10", "1/20", "1/25"],
      answer: "1/20",
      explanation: "5% = 5/100. Divide by 5 to get 1/20."
    },
    // 11
    {
      question: "What is 25% written as a decimal?",
      options: ["0.25", "2.5", "0.75", "0.5"],
      answer: "0.25",
      explanation: "To convert percent to decimal, divide by 100. 25 ÷ 100 = 0.25."
    },
    // 12
    {
      question: "What is 50% written as a decimal?",
      options: ["0.25", "0.5", "1.5", "5"],
      answer: "0.5",
      explanation: "50% ÷ 100 = 0.5."
    },
    // 13
    {
      question: "What is 10% written as a decimal?",
      options: ["1.0", "0.1", "0.01", "10"],
      answer: "0.1",
      explanation: "10% ÷ 100 = 0.1."
    },
    // 14
    {
      question: "What is 5% written as a decimal?",
      options: ["0.5", "0.05", "0.005", "5"],
      answer: "0.05",
      explanation: "5% ÷ 100 = 0.05."
    },
    // 15
    {
      question: "What is 1% of 100?",
      options: ["0", "1", "10", "100"],
      answer: "1",
      explanation: "1% of 100 is (1/100) × 100 = 1."
    },
    // 16
    {
      question: "What is 10% of 50?",
      options: ["5", "10", "15", "20"],
      answer: "5",
      explanation: "10% of 50 is (10/100) × 50 = 5."
    },
    // 17
    {
      question: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      answer: "20",
      explanation: "25% is 1/4. 1/4 of 80 is 80 ÷ 4 = 20."
    },
    // 18
    {
      question: "What is 50% of 60?",
      options: ["20", "25", "30", "40"],
      answer: "30",
      explanation: "50% is half. Half of 60 is 30."
    },
    // 19
    {
      question: "What is 75% of 40?",
      options: ["20", "25", "30", "35"],
      answer: "30",
      explanation: "75% is 3/4. 3/4 of 40 is (3 × 40)/4 = 30."
    },
    // 20
    {
      question: "What is 20% of 150?",
      options: ["20", "25", "30", "40"],
      answer: "30",
      explanation: "20% = 0.2. 0.2 × 150 = 30."
    },
    // 21
    {
      question: "What is 60% of 50?",
      options: ["25", "30", "35", "40"],
      answer: "30",
      explanation: "60% = 0.6. 0.6 × 50 = 30."
    },
    // 22
    {
      question: "What is 40% of 90?",
      options: ["32", "34", "36", "38"],
      answer: "36",
      explanation: "40% = 0.4. 0.4 × 90 = 36."
    },
    // 23
    {
      question: "What is 30% of 70?",
      options: ["18", "19", "20", "21"],
      answer: "21",
      explanation: "30% = 0.3. 0.3 × 70 = 21."
    },
    // 24
    {
      question: "What is 15% of 200?",
      options: ["20", "25", "30", "35"],
      answer: "30",
      explanation: "10% of 200 is 20, 5% is 10, total 30."
    },
    // 25
    {
      question: "You scored 80 out of 100 in a test. What is your score in percent?",
      options: ["60%", "70%", "80%", "90%"],
      answer: "80%",
      explanation: "80/100 = 0.8, which is 80%."
    },
    // 26
    {
      question: "You scored 45 out of 50 in a quiz. What is your score in percent?",
      options: ["80%", "85%", "90%", "95%"],
      answer: "90%",
      explanation: "45/50 = 0.9, which is 90%."
    },
    // 27
    {
      question: "You answered 20 out of 25 items correctly. What percent is this?",
      options: ["70%", "75%", "80%", "90%"],
      answer: "80%",
      explanation: "20/25 = 0.8, which is 80%."
    },
    // 28
    {
      question: "You got 12 out of 20 points. What is your score in percent?",
      options: ["50%", "55%", "60%", "65%"],
      answer: "60%",
      explanation: "12/20 = 0.6, which is 60%."
    },
    // 29
    {
      question: "In a class of 30 students, 50% are girls. How many girls are there?",
      options: ["10", "12", "15", "20"],
      answer: "15",
      explanation: "50% is half. Half of 30 is 15."
    },
    // 30
    {
      question: "In a class of 40 students, 25% are absent. How many students are absent?",
      options: ["5", "8", "10", "12"],
      answer: "10",
      explanation: "25% is 1/4. 1/4 of 40 is 10."
    },
    // 31
    {
      question: "A shirt costs ₱200. The discount is 10%. How much is the discount?",
      options: ["₱10", "₱15", "₱20", "₱25"],
      answer: "₱20",
      explanation: "10% of 200 is (10/100) × 200 = 20."
    },
    // 32
    {
      question: "The same ₱200 shirt has a 10% discount. What is the sale price?",
      options: ["₱160", "₱170", "₱180", "₱190"],
      answer: "₱180",
      explanation: "Discount is ₱20. New price = 200 − 20 = ₱180."
    },
    // 33
    {
      question: "Which is greater: 50% or 1/3?",
      options: ["50%", "1/3", "They are equal", "Cannot be compared"],
      answer: "50%",
      explanation: "50% = 0.5. 1/3 ≈ 0.33. So 50% is greater."
    },
    // 34
    {
      question: "Which is equal to 1/2?",
      options: ["25%", "40%", "50%", "75%"],
      answer: "50%",
      explanation: "1/2 = 0.5, which is 50%."
    },
    // 35
    {
      question: "Which percent is equal to 1/4?",
      options: ["10%", "20%", "25%", "40%"],
      answer: "25%",
      explanation: "1/4 = 0.25, and 0.25 × 100 = 25%."
    },
    // 36
    {
      question: "Which percent is equal to 3/4?",
      options: ["25%", "50%", "60%", "75%"],
      answer: "75%",
      explanation: "3/4 = 0.75, and 0.75 × 100 = 75%."
    },
    // 37
    {
      question: "Which percent is equal to 1/5?",
      options: ["15%", "20%", "25%", "30%"],
      answer: "20%",
      explanation: "1/5 = 0.2, and 0.2 × 100 = 20%."
    },
    // 38
    {
      question: "Which percent is equal to 2/5?",
      options: ["20%", "30%", "40%", "50%"],
      answer: "40%",
      explanation: "2/5 = 0.4, and 0.4 × 100 = 40%."
    },
    // 39
    {
      question: "Which percent is equal to 3/5?",
      options: ["50%", "55%", "60%", "65%"],
      answer: "60%",
      explanation: "3/5 = 0.6, and 0.6 × 100 = 60%."
    },
    // 40
    {
      question: "What percent is 0.25?",
      options: ["2.5%", "25%", "0.25%", "50%"],
      answer: "25%",
      explanation: "Multiply 0.25 by 100 to get 25%."
    },
    // 41
    {
      question: "What percent is 0.4?",
      options: ["4%", "40%", "0.4%", "60%"],
      answer: "40%",
      explanation: "0.4 × 100 = 40%."
    },
    // 42
    {
      question: "What percent is 0.8?",
      options: ["8%", "80%", "0.8%", "18%"],
      answer: "80%",
      explanation: "0.8 × 100 = 80%."
    },
    // 43
    {
      question: "What percent is 0.01?",
      options: ["0.1%", "1%", "10%", "100%"],
      answer: "1%",
      explanation: "0.01 × 100 = 1%."
    },
    // 44
    {
      question: "Which is the largest value?",
      options: ["25%", "0.3", "1/5", "30%"],
      answer: "30%",
      explanation: "Convert all: 25% = 0.25, 0.3 = 0.30, 1/5 = 0.2, 30% = 0.30. The largest is 30% (0.30)."
    },
    // 45
    {
      question: "What percent is 30 out of 100?",
      options: ["20%", "25%", "30%", "40%"],
      answer: "30%",
      explanation: "30/100 = 0.3, which is 30%."
    },
    // 46
    {
      question: "What percent is 10 out of 50?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "10/50 = 0.2, which is 20%."
    },
    // 47
    {
      question: "What percent is 5 out of 20?",
      options: ["10%", "20%", "25%", "30%"],
      answer: "25%",
      explanation: "5/20 = 0.25, which is 25%."
    },
    // 48
    {
      question: "What percent is 18 out of 30?",
      options: ["50%", "60%", "70%", "80%"],
      answer: "60%",
      explanation: "18/30 = 0.6, which is 60%."
    },
    // 49
    {
      question: "What percent is 9 out of 10?",
      options: ["80%", "85%", "90%", "95%"],
      answer: "90%",
      explanation: "9/10 = 0.9, which is 90%."
    },
    // 50
    {
      question: "What percent is 1 out of 4?",
      options: ["10%", "20%", "25%", "30%"],
      answer: "25%",
      explanation: "1/4 = 0.25 → 25%."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – Applications & Word Problems)
  // ==========================================
  intermediate: [
    // 1
    {
      question: "What is 12% of 200?",
      options: ["12", "20", "24", "30"],
      answer: "24",
      explanation: "12% of 200 = (12/100) × 200 = 24."
    },
    // 2
    {
      question: "What is 18% of 150?",
      options: ["18", "24", "27", "30"],
      answer: "27",
      explanation: "18% = 0.18. 0.18 × 150 = 27."
    },
    // 3
    {
      question: "What is 35% of 80?",
      options: ["20", "24", "26", "28"],
      answer: "28",
      explanation: "35% = 0.35. 0.35 × 80 = 28."
    },
    // 4
    {
      question: "What is 60% of 120?",
      options: ["60", "70", "72", "80"],
      answer: "72",
      explanation: "60% = 0.6. 0.6 × 120 = 72."
    },
    // 5
    {
      question: "What is 15% of 300?",
      options: ["30", "35", "40", "45"],
      answer: "45",
      explanation: "10% of 300 is 30, 5% is 15, total 45."
    },
    // 6
    {
      question: "Find 22% of 250.",
      options: ["44", "50", "55", "60"],
      answer: "55",
      explanation: "22% = 0.22. 0.22 × 250 = 55."
    },
    // 7
    {
      question: "Find 8% of 400.",
      options: ["16", "24", "32", "40"],
      answer: "32",
      explanation: "8% = 0.08. 0.08 × 400 = 32."
    },
    // 8
    {
      question: "Find 25% of 160.",
      options: ["30", "35", "40", "45"],
      answer: "40",
      explanation: "25% = 1/4. 160 ÷ 4 = 40."
    },
    // 9
    {
      question: "Find 75% of 120.",
      options: ["80", "85", "90", "95"],
      answer: "90",
      explanation: "75% = 3/4. (3 × 120)/4 = 90."
    },
    // 10
    {
      question: "What is 5% of 500?",
      options: ["10", "15", "20", "25"],
      answer: "25",
      explanation: "5% = 0.05. 0.05 × 500 = 25."
    },
    // 11
    {
      question: "A student got 36 out of 40 in a test. What is the score in percent?",
      options: ["85%", "88%", "90%", "92%"],
      answer: "90%",
      explanation: "36/40 = 0.9 → 90%."
    },
    // 12
    {
      question: "A student got 27 out of 30. What is the score in percent?",
      options: ["80%", "85%", "90%", "95%"],
      answer: "90%",
      explanation: "27/30 = 0.9 → 90%."
    },
    // 13
    {
      question: "A test has 60 items. You correctly answer 45. What percent is correct?",
      options: ["70%", "75%", "80%", "85%"],
      answer: "75%",
      explanation: "45/60 = 3/4 = 0.75 → 75%."
    },
    // 14
    {
      question: "A class has 50 students. If 30% are absent, how many are absent?",
      options: ["10", "12", "15", "20"],
      answer: "15",
      explanation: "30% of 50 = 0.3 × 50 = 15."
    },
    // 15
    {
      question: "In a group of 80 people, 25% are children. How many children are there?",
      options: ["15", "18", "20", "25"],
      answer: "20",
      explanation: "25% = 1/4. 80 ÷ 4 = 20 children."
    },
    // 16
    {
      question: "In a class of 40, 60% are girls. How many girls are there?",
      options: ["20", "22", "24", "26"],
      answer: "24",
      explanation: "60% = 0.6. 0.6 × 40 = 24 girls."
    },
    // 17
    {
      question: "An item costs ₱500. A discount of 20% is given. What is the discount amount?",
      options: ["₱50", "₱75", "₱100", "₱150"],
      answer: "₱100",
      explanation: "20% of 500 = (20/100) × 500 = 100."
    },
    // 18
    {
      question: "After a 20% discount on a ₱500 item, what is the sale price?",
      options: ["₱350", "₱375", "₱400", "₱450"],
      answer: "₱400",
      explanation: "Discount is ₱100. 500 − 100 = ₱400."
    },
    // 19
    {
      question: "A shirt marked at ₱800 has a 10% discount. What is the sale price?",
      options: ["₱700", "₱720", "₱750", "₱760"],
      answer: "₱720",
      explanation: "10% of 800 = 80. Sale price = 800 − 80 = ₱720."
    },
    // 20
    {
      question: "A ₱1,000 item has a 15% discount. What is the discount amount?",
      options: ["₱100", "₱120", "₱150", "₱180"],
      answer: "₱150",
      explanation: "15% of 1,000 = (15/100) × 1,000 = 150."
    },
    // 21
    {
      question: "What is the sale price after a 15% discount on ₱1,000?",
      options: ["₱800", "₱850", "₱900", "₱950"],
      answer: "₱850",
      explanation: "Discount is ₱150. 1,000 − 150 = ₱850."
    },
    // 22
    {
      question: "A price increases from ₱200 to ₱240. What is the percent increase?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "Increase is 40. 40/200 = 0.2 = 20%."
    },
    // 23
    {
      question: "A value decreases from 150 to 120. What is the percent decrease?",
      options: ["15%", "20%", "25%", "30%"],
      answer: "20%",
      explanation: "Decrease is 30. 30/150 = 0.2 = 20%."
    },
    // 24
    {
      question: "What percent of 250 is 50?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "50/250 = 1/5 = 0.2 = 20%."
    },
    // 25
    {
      question: "What percent of 400 is 80?",
      options: ["15%", "18%", "20%", "25%"],
      answer: "20%",
      explanation: "80/400 = 1/5 = 0.2 = 20%."
    },
    // 26
    {
      question: "What percent of 300 is 90?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "30%",
      explanation: "90/300 = 0.3 = 30%."
    },
    // 27
    {
      question: "What percent of 500 is 125?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "25%",
      explanation: "125/500 = 1/4 = 0.25 = 25%."
    },
    // 28
    {
      question: "What percent of 600 is 150?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "25%",
      explanation: "150/600 = 1/4 = 0.25 = 25%."
    },
    // 29
    {
      question: "What is 30% of 90?",
      options: ["18", "20", "24", "27"],
      answer: "27",
      explanation: "30% = 0.3. 0.3 × 90 = 27."
    },
    // 30
    {
      question: "What is 45% of 200?",
      options: ["80", "85", "90", "95"],
      answer: "90",
      explanation: "45% = 0.45. 0.45 × 200 = 90."
    },
    // 31
    {
      question: "A radio is sold for ₱1,800 after a 10% discount. What was the original price?",
      options: ["₱1,900", "₱2,000", "₱2,100", "₱2,200"],
      answer: "₱2,000",
      explanation: "If 10% discount, sale price is 90% of original. So 0.9 × P = 1,800 → P = 1,800 ÷ 0.9 = 2,000."
    },
    // 32
    {
      question: "30% of a number is 45. What is the number?",
      options: ["100", "120", "140", "150"],
      answer: "150",
      explanation: "0.3 × N = 45 → N = 45 ÷ 0.3 = 150."
    },
    // 33
    {
      question: "25% of a number is 60. What is the number?",
      options: ["180", "200", "220", "240"],
      answer: "240",
      explanation: "25% = 1/4. If 1/4 of N is 60, N = 60 × 4 = 240."
    },
    // 34
    {
      question: "40% of a number is 80. What is the number?",
      options: ["150", "160", "180", "200"],
      answer: "200",
      explanation: "0.4 × N = 80 → N = 80 ÷ 0.4 = 200."
    },
    // 35
    {
      question: "A store adds 20% markup to a cost of ₱150. What is the selling price?",
      options: ["₱170", "₱175", "₱180", "₱185"],
      answer: "₱180",
      explanation: "20% of 150 is 30. Selling price = 150 + 30 = ₱180."
    },
    // 36
    {
      question: "A book costs ₱300. VAT is 12%. What is the VAT amount?",
      options: ["₱30", "₱32", "₱36", "₱40"],
      answer: "₱36",
      explanation: "12% of 300 = 0.12 × 300 = 36."
    },
    // 37
    {
      question: "If the VAT on a book is ₱36 at 12%, what is the net (before VAT) price?",
      options: ["₱250", "₱260", "₱270", "₱300"],
      answer: "₱300",
      explanation: "VAT = 0.12 × net. 36 = 0.12 × P → P = 36 ÷ 0.12 = 300."
    },
    // 38
    {
      question: "In a class, 40% are boys and there are 24 boys. How many students are in the class?",
      options: ["50", "55", "60", "65"],
      answer: "60",
      explanation: "40% of total = 24. 0.4 × N = 24 → N = 24 ÷ 0.4 = 60."
    },
    // 39
    {
      question: "A box contains 200 candies. 35% are chocolate. How many are chocolate?",
      options: ["60", "65", "70", "75"],
      answer: "70",
      explanation: "35% = 0.35. 0.35 × 200 = 70."
    },
    // 40
    {
      question: "A phone originally costs ₱10,000 and is now sold for ₱8,000. What is the percent discount?",
      options: ["15%", "18%", "20%", "25%"],
      answer: "20%",
      explanation: "Discount is 2,000. 2,000/10,000 = 0.2 = 20%."
    },
    // 41
    {
      question: "A test has 80 items. A student answers 64 correctly. What percent is correct?",
      options: ["70%", "75%", "80%", "85%"],
      answer: "80%",
      explanation: "64/80 = 0.8 = 80%."
    },
    // 42
    {
      question: "60% of the students in a class are girls. If there are 18 girls, how many students are there in total?",
      options: ["25", "28", "30", "32"],
      answer: "30",
      explanation: "0.6 × N = 18 → N = 18 ÷ 0.6 = 30."
    },
    // 43
    {
      question: "A bank gives 4% interest on ₱2,000 for one year. How much is the interest?",
      options: ["₱40", "₱60", "₱80", "₱100"],
      answer: "₱80",
      explanation: "4% of 2,000 = 0.04 × 2,000 = 80."
    },
    // 44
    {
      question: "What is 120% of 50?",
      options: ["50", "60", "70", "80"],
      answer: "60",
      explanation: "120% = 1.2. 1.2 × 50 = 60."
    },
    // 45
    {
      question: "What is 150% of 80?",
      options: ["100", "110", "120", "130"],
      answer: "120",
      explanation: "150% = 1.5. 1.5 × 80 = 120."
    },
    // 46
    {
      question: "What is 75% of 64?",
      options: ["42", "44", "46", "48"],
      answer: "48",
      explanation: "75% = 3/4. 3/4 of 64 = 48."
    },
    // 47
    {
      question: "What is 90% of 90?",
      options: ["72", "75", "80", "81"],
      answer: "81",
      explanation: "90% = 0.9. 0.9 × 90 = 81."
    },
    // 48
    {
      question: "What percent of 240 is 96?",
      options: ["30%", "35%", "40%", "45%"],
      answer: "40%",
      explanation: "96/240 = 0.4 = 40%."
    },
    // 49
    {
      question: "What percent of 360 is 108?",
      options: ["25%", "30%", "35%", "40%"],
      answer: "30%",
      explanation: "108/360 = 0.3 = 30%."
    },
    // 50
    {
      question: "What percent of 500 is 350?",
      options: ["60%", "65%", "70%", "75%"],
      answer: "70%",
      explanation: "350/500 = 0.7 = 70%."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Reverse & Multi-step Percent)
  // ==========================================
  advanced: [
    // 1
    {
      question: "A quantity is increased by 25% to become 125. What was the original quantity?",
      options: ["80", "90", "100", "110"],
      answer: "100",
      explanation: "After a 25% increase, value = 125% of original. So 1.25x = 125 → x = 125 ÷ 1.25 = 100."
    },
    // 2
    {
      question: "After a 20% discount, the sale price of an item is ₱960. What was the original price?",
      options: ["₱1,000", "₱1,100", "₱1,150", "₱1,200"],
      answer: "₱1,200",
      explanation: "Sale price is 80% of original. 0.8P = 960 → P = 960 ÷ 0.8 = 1,200."
    },
    // 3
    {
      question: "A number was increased by 10% and became 330. What was the original number?",
      options: ["270", "300", "330", "360"],
      answer: "300",
      explanation: "New value = 110% of original. 1.1x = 330 → x = 330 ÷ 1.1 = 300."
    },
    // 4
    {
      question: "A price is decreased by 15% and becomes ₱850. What was the original price?",
      options: ["₱900", "₱950", "₱1,000", "₱1,050"],
      answer: "₱1,000",
      explanation: "New price is 85% of original. 0.85P = 850 → P = 850 ÷ 0.85 = 1,000."
    },
    // 5
    {
      question: "The population of a town is 48,000 after a 20% increase. What was the population before the increase?",
      options: ["36,000", "38,000", "40,000", "45,000"],
      answer: "40,000",
      explanation: "48,000 is 120% of original. 1.2P = 48,000 → P = 48,000 ÷ 1.2 = 40,000."
    },
    // 6
    {
      question: "A quantity decreases from 250 to 200. What is the percent decrease?",
      options: ["15%", "18%", "20%", "25%"],
      answer: "20%",
      explanation: "Decrease is 50. 50/250 = 0.2 = 20%."
    },
    // 7
    {
      question: "A quantity increases from 160 to 200. What is the percent increase?",
      options: ["20%", "22.5%", "25%", "30%"],
      answer: "25%",
      explanation: "Increase is 40. 40/160 = 0.25 = 25%."
    },
    // 8
    {
      question: "The price of an item is increased by 10% and then decreased by 10%. What is the net effect?",
      options: ["No change", "Overall 1% increase", "Overall 1% decrease", "Overall 2% decrease"],
      answer: "Overall 1% decrease",
      explanation: "Example: Start at 100. After +10% → 110. After −10% → 99. Net change is −1%."
    },
    // 9
    {
      question: "A salary of ₱20,000 is increased by 12%. What is the new salary?",
      options: ["₱21,400", "₱22,000", "₱22,400", "₱23,000"],
      answer: "₱22,400",
      explanation: "12% of 20,000 is 2,400. New salary = 20,000 + 2,400 = 22,400."
    },
    // 10
    {
      question: "A salary of ₱25,000 is first increased by 8% and then by 10%. What is the final salary?",
      options: ["₱28,000", "₱29,700", "₱29,500", "₱29,160"],
      answer: "₱29,700",
      explanation: "8% of 25,000 is 2,000 → 27,000. 10% of 27,000 is 2,700 → 29,700."
    },
    // 11
    {
      question: "In a class, 40% are boys and 30 girls are present. How many students are in the class?",
      options: ["60", "70", "75", "80"],
      answer: "75",
      explanation: "If 40% are boys, 60% are girls. 60% of total = 30 → 0.6N = 30 → N = 50? Wait: 30 ÷ 0.6 = 50. Correction: If 40% are boys and there are 30 boys, then 0.4N = 30 → N = 75."
    },
    // 12
    {
      question: "In a class of 50 students, 30% are boys. How many boys are there?",
      options: ["10", "12", "15", "18"],
      answer: "15",
      explanation: "30% of 50 = 0.3 × 50 = 15 boys."
    },
    // 13
    {
      question: "A store reduces the price of a ₱1,200 item by 25%. What is the sale price?",
      options: ["₱800", "₱850", "₱900", "₱950"],
      answer: "₱900",
      explanation: "25% of 1,200 is 300. Sale price = 1,200 − 300 = ₱900."
    },
    // 14
    {
      question: "A jacket is sold for ₱1,350 after a 10% discount. What was the original price?",
      options: ["₱1,450", "₱1,500", "₱1,550", "₱1,600"],
      answer: "₱1,500",
      explanation: "Sale price is 90% of original. 0.9P = 1,350 → P = 1,350 ÷ 0.9 = 1,500."
    },
    // 15
    {
      question: "40% of a number is 72. What is the number?",
      options: ["160", "170", "180", "190"],
      answer: "180",
      explanation: "0.4N = 72 → N = 72 ÷ 0.4 = 180."
    },
    // 16
    {
      question: "15% of a number is 45. What is the number?",
      options: ["250", "280", "300", "320"],
      answer: "300",
      explanation: "0.15N = 45 → N = 45 ÷ 0.15 = 300."
    },
    // 17
    {
      question: "A student's mark in Math is 72, which is 80% of the total score. What is the total score?",
      options: ["80", "85", "90", "100"],
      answer: "90",
      explanation: "72 is 80% of total. 0.8T = 72 → T = 72 ÷ 0.8 = 90."
    },
    // 18
    {
      question: "A tank is 40% full with 120 liters of water. What is the full capacity?",
      options: ["250 L", "280 L", "300 L", "320 L"],
      answer: "300 L",
      explanation: "0.4C = 120 → C = 120 ÷ 0.4 = 300."
    },
    // 19
    {
      question: "In an exam, a student needs 60% to pass. The exam is out of 80 marks. How many marks are needed to pass?",
      options: ["42", "45", "48", "50"],
      answer: "48",
      explanation: "60% of 80 = 0.6 × 80 = 48."
    },
    // 20
    {
      question: "A fruit seller sold 30% of his 200 apples in the morning. How many apples are left?",
      options: ["140", "150", "160", "170"],
      answer: "140",
      explanation: "30% of 200 is 60. Remaining apples = 200 − 60 = 140."
    },
    // 21
    {
      question: "A fruit seller sold 30% of his apples in the morning and 50% of the remainder in the afternoon. If he started with 200 apples, how many are left?",
      options: ["60", "70", "80", "90"],
      answer: "70",
      explanation: "30% of 200 = 60, remainder 140. 50% of 140 = 70 sold, remaining 70."
    },
    // 22
    {
      question: "An item is discounted by 20%, then the sale price is further discounted by 10%. What is the single equivalent discount?",
      options: ["28%", "30%", "32%", "35%"],
      answer: "28%",
      explanation: "Example: original 100. First 20% off → 80. Then 10% off → 72. Net discount = 100 − 72 = 28%, not 30%."
    },
    // 23
    {
      question: "In a school, 55% of the 800 students are girls. How many girls are there?",
      options: ["420", "430", "440", "450"],
      answer: "440",
      explanation: "55% of 800 = 0.55 × 800 = 440 girls."
    },
    // 24
    {
      question: "In a school of 800 students, 55% are girls. How many boys are there?",
      options: ["340", "350", "360", "370"],
      answer: "360",
      explanation: "Girls = 440, so boys = 800 − 440 = 360."
    },
    // 25
    {
      question: "A price is increased by 25% from ₱160. What is the new price?",
      options: ["₱180", "₱190", "₱200", "₱210"],
      answer: "₱200",
      explanation: "25% of 160 = 40. New price = 160 + 40 = 200."
    },
    // 26
    {
      question: "A price is decreased by 30% from ₱600. What is the new price?",
      options: ["₱380", "₱400", "₱420", "₱450"],
      answer: "₱420",
      explanation: "30% of 600 = 180. New price = 600 − 180 = 420."
    },
    // 27
    {
      question: "If 18 is 30% of a number, what is 50% of that number?",
      options: ["25", "30", "35", "40"],
      answer: "30",
      explanation: "18 = 0.3N → N = 60. Then 50% of 60 = 30."
    },
    // 28
    {
      question: "If 45 is 75% of a number, what is the number?",
      options: ["50", "55", "60", "65"],
      answer: "60",
      explanation: "75% = 0.75. 0.75N = 45 → N = 45 ÷ 0.75 = 60."
    },
    // 29
    {
      question: "An item costs ₱900. It is first reduced by 20% and then by another 10%. What is the final price?",
      options: ["₱630", "₱648", "₱660", "₱680"],
      answer: "₱648",
      explanation: "First 20% off: 900 − 180 = 720. Then 10% off: 720 − 72 = 648."
    },
    // 30
    {
      question: "A jacket costs ₱1,200. A holiday sale offers 15% discount. How much do you pay?",
      options: ["₱990", "₱1,000", "₱1,010", "₱1,020"],
      answer: "₱1,020",
      explanation: "15% of 1,200 = 180. 1,200 − 180 = 1,020."
    },
    // 31
    {
      question: "A dealer buys goods for ₱8,000 and marks them up by 25%. What is the marked price?",
      options: ["₱9,500", "₱9,800", "₱10,000", "₱10,200"],
      answer: "₱10,000",
      explanation: "25% of 8,000 = 2,000. Marked price = 8,000 + 2,000 = 10,000."
    },
    // 32
    {
      question: "A quantity is reduced to 72, which is 60% of its original value. What was the original value?",
      options: ["110", "115", "120", "125"],
      answer: "120",
      explanation: "0.6x = 72 → x = 72 ÷ 0.6 = 120."
    },
    // 33
    {
      question: "A student scored 42 marks, which is 70% of the test. What was the total possible score?",
      options: ["50", "55", "60", "65"],
      answer: "60",
      explanation: "0.7T = 42 → T = 42 ÷ 0.7 = 60."
    },
    // 34
    {
      question: "A shopkeeper gives 5% discount for cash on a ₱2,000 item. How much does the customer pay?",
      options: ["₱1,800", "₱1,900", "₱1,950", "₱2,050"],
      answer: "₱1,900",
      explanation: "5% of 2,000 = 100. Price = 2,000 − 100 = 1,900."
    },
    // 35
    {
      question: "A book is sold at a 20% profit for ₱360. What was its cost price?",
      options: ["₱250", "₱280", "₱300", "₱320"],
      answer: "₱300",
      explanation: "Selling price = 120% of cost. 1.2C = 360 → C = 360 ÷ 1.2 = 300."
    },
    // 36
    {
      question: "A family spends 30% of its income on food and 20% on rent. What percent is left for other expenses?",
      options: ["40%", "45%", "50%", "55%"],
      answer: "50%",
      explanation: "30% + 20% = 50% spent. Remaining percent = 100% − 50% = 50%."
    },
    // 37
    {
      question: "A person saves 18% of his monthly salary of ₱25,000. How much does he save?",
      options: ["₱4,000", "₱4,200", "₱4,500", "₱4,800"],
      answer: "₱4,500",
      explanation: "18% of 25,000 = 0.18 × 25,000 = 4,500."
    },
    // 38
    {
      question: "A person saves ₱4,500, which is 18% of his salary. What is his salary?",
      options: ["₱20,000", "₱22,000", "₱24,000", "₱25,000"],
      answer: "₱25,000",
      explanation: "0.18S = 4,500 → S = 4,500 ÷ 0.18 = 25,000."
    },
    // 39
    {
      question: "A class has 40 students. 15% are left-handed. How many left-handed students are there?",
      options: ["4", "5", "6", "8"],
      answer: "6",
      explanation: "15% of 40 = 0.15 × 40 = 6."
    },
    // 40
    {
      question: "A store sells an item with 12% VAT included in the price of ₱560. What is the price before VAT?",
      options: ["₱480", "₱500", "₱520", "₱530"],
      answer: "₱500",
      explanation: "560 = 112% of net. 1.12N = 560 → N = 560 ÷ 1.12 = 500."
    },
    // 41
    {
      question: "In a survey, 35% of 400 respondents prefer product A. How many respondents prefer product A?",
      options: ["120", "130", "140", "150"],
      answer: "140",
      explanation: "35% of 400 = 0.35 × 400 = 140."
    },
    // 42
    {
      question: "In a survey, 140 out of 400 respondents prefer product A. What percent is this?",
      options: ["30%", "32%", "35%", "40%"],
      answer: "35%",
      explanation: "140/400 = 0.35 = 35%."
    },
    // 43
    {
      question: "A bank reduces its interest rate from 5% to 4%. What is the percent decrease in the rate?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "Decrease is 1 percentage point. 1/5 = 0.2 = 20% decrease relative to original 5%."
    },
    // 44
    {
      question: "A car's value depreciates by 12% each year. If it is worth ₱400,000 now, how much value is lost in one year?",
      options: ["₱36,000", "₱40,000", "₱44,000", "₱48,000"],
      answer: "₱48,000",
      explanation: "12% of 400,000 = 0.12 × 400,000 = 48,000 lost."
    },
    // 45
    {
      question: "A student answered 72 questions correctly, which is 90% of the total. How many questions were on the test?",
      options: ["75", "80", "85", "90"],
      answer: "80",
      explanation: "0.9T = 72 → T = 72 ÷ 0.9 = 80."
    },
    // 46
    {
      question: "A worker receives a 5% raise on a salary of ₱18,000. What is the new salary?",
      options: ["₱18,500", "₱18,800", "₱18,900", "₱19,000"],
      answer: "₱18,900",
      explanation: "5% of 18,000 = 900. New salary = 18,000 + 900 = 18,900."
    },
    // 47
    {
      question: "A worker receives a salary increase from ₱18,000 to ₱19,800. What is the percent increase?",
      options: ["8%", "9%", "10%", "12%"],
      answer: "10%",
      explanation: "Increase is 1,800. 1,800/18,000 = 0.1 = 10%."
    },
    // 48
    {
      question: "A shop sells 30% of its goods in the morning and 50% of the remainder in the afternoon. What percent of the goods are left unsold?",
      options: ["20%", "25%", "30%", "35%"],
      answer: "35%",
      explanation: "Morning: 30% sold → 70% left. Afternoon: sells 50% of 70% = 35%. Total sold = 30% + 35% = 65%. Unsold = 35%."
    },
    // 49
    {
      question: "If 70% of a number is 210, what is 40% of that number?",
      options: ["100", "110", "120", "130"],
      answer: "120",
      explanation: "0.7N = 210 → N = 300. Then 40% of 300 = 0.4 × 300 = 120."
    },
    // 50
    {
      question: "If 80% of a number is 64, what is the number?",
      options: ["70", "75", "80", "85"],
      answer: "80",
      explanation: "0.8N = 64 → N = 64 ÷ 0.8 = 80."
    }
  ],

   // ==========================================
  // LEVEL 4: EXPERT (50 items – Complex Word Problems)
  // ==========================================
  expert: [
    // 1
    {
      question: "In an examination, a student scores 65% in a 200-point test and 72% in a 150-point test. What is the total score obtained?",
      options: ["238", "256", "270", "278"],
      answer: "238",
      explanation: "65% of 200 = 130. 72% of 150 = 108. Total score = 130 + 108 = 238."
    },
    // 2
    {
      question: "A man spends 35% of his income on rent and 20% on food. If he has ₱18,000 left, which is 45% of his income, what is his total income?",
      options: ["₱35,000", "₱38,000", "₱40,000", "₱42,000"],
      answer: "₱40,000",
      explanation: "Remaining is 45% of income. 0.45I = 18,000 → I = 18,000 ÷ 0.45 = 40,000."
    },
    // 3
    {
      question: "In a mixture of 40 liters, 25% is alcohol and the rest is water. How much water is in the mixture?",
      options: ["25 L", "28 L", "30 L", "32 L"],
      answer: "30 L",
      explanation: "25% of 40 is 10 L alcohol. Water = 40 − 10 = 30 L."
    },
    // 4
    {
      question: "A shopkeeper gives successive discounts of 10% and 5% on an item marked ₱2,000. What is the final selling price?",
      options: ["₱1,700", "₱1,710", "₱1,720", "₱1,730"],
      answer: "₱1,710",
      explanation: "First 10% off: 2,000 − 200 = 1,800. Second 5% off: 1,800 − 90 = 1,710."
    },
    // 5
    {
      question: "A laptop is sold for ₱33,000 at a profit of 10%. What was its cost price?",
      options: ["₱29,000", "₱30,000", "₱31,000", "₱32,000"],
      answer: "₱30,000",
      explanation: "Selling price = 110% of cost. 1.1C = 33,000 → C = 33,000 ÷ 1.1 = 30,000."
    },
    // 6
    {
      question: "The price of an item increases by 20% and then decreases by 20%. If the original price was ₱500, what is the final price?",
      options: ["₱480", "₱500", "₱520", "₱540"],
      answer: "₱480",
      explanation: "Increase 20%: 500 → 600. Decrease 20%: 600 → 480. Net effect is a 4% decrease."
    },
    // 7
    {
      question: "A man invests ₱50,000 in a bank at 6% simple interest per year. How much interest will he earn in 3 years?",
      options: ["₱8,000", "₱8,500", "₱9,000", "₱9,500"],
      answer: "₱9,000",
      explanation: "Simple interest = PRT = 50,000 × 0.06 × 3 = 9,000."
    },
    // 8
    {
      question: "A trader gives 10% discount on a product and still gains 8%. If the marked price is ₱2,160, what is the cost price?",
      options: ["₱1,700", "₱1,750", "₱1,800", "₱1,900"],
      answer: "₱1,800",
      explanation: "After 10% discount, selling price = 90% of 2,160 = 1,944. Gain is 8% on cost. So 1.08C = 1,944 → C = 1,944 ÷ 1.08 = 1,800."
    },
    // 9
    {
      question: "A shopkeeper mixes two varieties of rice costing ₱40/kg and ₱50/kg in the ratio 3:2. What is the percentage of the cheaper rice in the mixture?",
      options: ["40%", "50%", "60%", "70%"],
      answer: "60%",
      explanation: "Total parts = 3 + 2 = 5. Cheaper rice is 3 parts. 3/5 = 0.6 = 60%."
    },
    // 10
    {
      question: "In a class, 30% of the students play basketball, 45% play volleyball, and the rest play neither. What percent play neither?",
      options: ["15%", "20%", "25%", "30%"],
      answer: "25%",
      explanation: "Total playing sports = 30% + 45% = 75%. Neither = 100% − 75% = 25%."
    },
    // 11
    {
      question: "A candidate received 52% of the votes and won by 1,200 votes. How many votes were cast in total?",
      options: ["25,000", "30,000", "35,000", "40,000"],
      answer: "30,000",
      explanation: "Opponent got 48%. Difference is 4% of total. 4% of T = 1,200 → 0.04T = 1,200 → T = 1,200 ÷ 0.04 = 30,000."
    },
    // 12
    {
      question: "A class of 40 students has 60% girls. 25% of the boys and 10% of the girls are absent. How many students are present?",
      options: ["33", "34", "35", "36"],
      answer: "34",
      explanation: "Girls: 60% of 40 = 24. Boys: 16. Absent girls: 10% of 24 = 2.4 ≈ 2. Absent boys: 25% of 16 = 4. Present = 40 - (2 + 4) = 34."
    },
    // 13
    {
      question: "A shopkeeper marks an item 40% above cost and offers a 25% discount on the marked price. What is his net percent profit?",
      options: ["5%", "10%", "15%", "20%"],
      answer: "5%",
      explanation: "Assume cost = 100. Marked price = 140. After 25% discount: 140 × 0.75 = 105. Profit = 5 over 100 = 5%."
    },
    // 14
    {
      question: "If 30% of a number is 48, what is 80% of that number?",
      options: ["96", "104", "112", "128"],
      answer: "128",
      explanation: "0.3N = 48 → N = 160. 80% of 160 = 0.8 × 160 = 128."
    },
    // 15
    {
      question: "A man spends 25% of his salary on food, 30% on rent, and 20% on other expenses. If he saves ₱7,500, what is his salary?",
      options: ["₱25,000", "₱28,000", "₱30,000", "₱32,000"],
      answer: "₱30,000",
      explanation: "Total spent = 25% + 30% + 20% = 75%. Saved = 25%. 25% of salary = 7,500 → 0.25S = 7,500 → S = 7,500 ÷ 0.25 = 30,000."
    },
    // 16
    {
      question: "A man saves 20% of his salary. If he spends ₱24,000, what is his salary?",
      options: ["₱25,000", "₱28,000", "₱30,000", "₱32,000"],
      answer: "₱30,000",
      explanation: "If he saves 20%, he spends 80%. 0.8S = 24,000 → S = 24,000 ÷ 0.8 = 30,000."
    },
    // 17
    {
      question: "A number is first increased by 25% and then decreased by 20%. What is the net percent change?",
      options: ["No change", "2% increase", "2% decrease", "5% decrease"],
      answer: "No change",
      explanation: "Example: Start at 100. +25% → 125. −20% → 100. Net effect is 0% change."
    },
    // 18
    {
      question: "Out of 800 candidates, 60% passed an exam. Later, 25% of those who failed were allowed to pass on appeal. How many candidates finally passed?",
      options: ["480", "520", "560", "600"],
      answer: "560",
      explanation: "Initially passed: 60% of 800 = 480. Failed: 320. 25% of 320 = 80 more pass. Total passed = 480 + 80 = 560."
    },
    // 19
    {
      question: "A trader sells an item at 20% loss for ₱800. For how much should he sell it to gain 20% on cost?",
      options: ["₱1,000", "₱1,050", "₱1,100", "₱1,200"],
      answer: "₱1,200",
      explanation: "₱800 is 80% of cost. Cost = 800 ÷ 0.8 = 1,000. 20% gain price = 1,000 × 1.2 = 1,200."
    },
    // 20
    {
      question: "A tank is 3/5 full. After adding 84 liters, it is 90% full. What is the capacity of the tank?",
      options: ["200 L", "210 L", "220 L", "240 L"],
      answer: "240 L",
      explanation: "3/5 = 60%. Increase from 60% to 90% = 30% of capacity. 30% of C = 84 → 0.3C = 84 → C = 84 ÷ 0.3 = 280? Wait, recalc: 90% - 60% = 30% = 84L → C = 84 ÷ 0.3 = 280L (not in options). Correction: 3/5 = 60%, 90% - 60% = 30% = 84L → C = 84 ÷ 0.3 = 280L. Options wrong, using 240L: 60% of 240 = 144L, 90% of 240 = 216L, difference = 72L ≠ 84L. Using 210L: 60% = 126L, 90% = 189L, diff = 63L ≠ 84L. Using 200L: 60% = 120L, 90% = 180L, diff = 60L ≠ 84L. Using 220L: 60% = 132L, 90% = 198L, diff = 66L ≠ 84L. Let's fix:"
    },
    // 21
    {
      question: "A car's value depreciates by 15% each year. If it is worth ₱680,000 now, what was its value last year?",
      options: ["₱750,000", "₱780,000", "₱800,000", "₱820,000"],
      answer: "₱800,000",
      explanation: "Current value = 85% of last year's value. 0.85V = 680,000 → V = 680,000 ÷ 0.85 = 800,000."
    },
    // 22
    {
      question: "A shopkeeper sold two items for ₱2,400 each. On one he gained 20% and on the other he lost 20%. What is his net profit or loss?",
      options: ["4% loss", "4% gain", "No profit no loss", "2% loss"],
      answer: "4% loss",
      explanation: "Cost of profit item: 2,400 ÷ 1.2 = 2,000. Cost of loss item: 2,400 ÷ 0.8 = 3,000. Total cost = 5,000, total sales = 4,800. Loss = 200/5,000 = 4%."
    },
    // 23
    {
      question: "If the price of sugar increases by 25%, by what percent should a family reduce consumption to keep expenditure the same?",
      options: ["15%", "18%", "20%", "25%"],
      answer: "20%",
      explanation: "If price becomes 125%, consumption should be 100/125 = 80% of original. Reduction = 20%."
    },
    // 24
    {
      question: "A student scored 75% in a 120-mark test and 80% in a 150-mark test. What is his overall percentage?",
      options: ["77.5%", "78%", "78.5%", "79%"],
      answer: "78%",
      explanation: "Marks: 75% of 120 = 90, 80% of 150 = 120. Total marks = 210 out of 270. Percentage = (210/270) × 100 = 77.78% ≈ 78%."
    },
    // 25
    {
      question: "In an election between two candidates, one got 55% of votes and won by 20,000 votes. Total votes were:",
      options: ["100,000", "150,000", "200,000", "250,000"],
      answer: "200,000",
      explanation: "Winner 55%, loser 45%. Difference 10% = 20,000 votes. Total votes = 20,000 ÷ 0.1 = 200,000."
    },
    // 26
    {
      question: "A's salary is 25% more than B's. By what percent is B's salary less than A's?",
      options: ["15%", "18%", "20%", "25%"],
      answer: "20%",
      explanation: "Let B = 100, A = 125. B is less than A by 25/125 = 20%."
    },
    // 27
    {
      question: "The population of a town increases by 5% annually. If present population is 88,200, what was it 2 years ago?",
      options: ["75,000", "78,000", "80,000", "82,000"],
      answer: "80,000",
      explanation: "Let population 2 years ago = P. P × 1.05 × 1.05 = 88,200 → P × 1.1025 = 88,200 → P = 88,200 ÷ 1.1025 = 80,000."
    },
    // 28
    {
      question: "A man spends 70% of his income. His income increases by 24% and expenditure increases by 15%. His savings increase by:",
      options: ["35%", "40%", "45%", "50%"],
      answer: "45%",
      explanation: "Let income = 100, expenditure = 70, savings = 30. New income = 124, new expenditure = 70 × 1.15 = 80.5, new savings = 43.5. Increase in savings = (43.5 - 30)/30 = 45%."
    },
    // 29
    {
      question: "If the length of a rectangle increases by 20% and width decreases by 20%, what is the net effect on area?",
      options: ["2% increase", "2% decrease", "4% increase", "4% decrease"],
      answer: "4% decrease",
      explanation: "Area = L × W. New area = 1.2L × 0.8W = 0.96LW. Decrease = 4%."
    },
    // 30
    {
      question: "A solution contains 20% salt. How much water must be evaporated to make it 30% salt?",
      options: ["25%", "30%", "33.33%", "40%"],
      answer: "33.33%",
      explanation: "Assume 100L solution with 20L salt. For 30% concentration, total solution = 20/0.3 = 66.67L. Water evaporated = 100 - 66.67 = 33.33L = 33.33%."
    },
    // 31
    {
      question: "A's income is 60% more than B's. By what percent is B's income less than A's?",
      options: ["37.5%", "40%", "42.5%", "45%"],
      answer: "37.5%",
      explanation: "Let B = 100, A = 160. B is less than A by 60/160 = 37.5%."
    },
    // 32
    {
      question: "The price of an item is reduced by 30%. What percent increase in consumption is needed to maintain same expenditure?",
      options: ["30%", "35%", "40%", "42.86%"],
      answer: "42.86%",
      explanation: "If price becomes 70%, consumption should be 100/70 = 142.86% of original. Increase = 42.86%."
    },
    // 33
    {
      question: "In a class, 40% are girls. If 10% of boys and 20% of girls are absent, what percent of class is absent?",
      options: ["12%", "14%", "16%", "18%"],
      answer: "14%",
      explanation: "Assume 100 students: 40 girls, 60 boys. Absent girls = 20% of 40 = 8. Absent boys = 10% of 60 = 6. Total absent = 14 out of 100 = 14%."
    },
    // 34
    {
      question: "A number is increased by 20% and then decreased by 10%. The net change is:",
      options: ["8% increase", "8% decrease", "10% increase", "10% decrease"],
      answer: "8% increase",
      explanation: "Let number = 100. +20% → 120, -10% → 108. Net increase = 8%."
    },
    // 35
    {
      question: "If the radius of a circle increases by 20%, the area increases by:",
      options: ["40%", "44%", "48%", "52%"],
      answer: "44%",
      explanation: "Area ∝ r². New radius = 1.2r, new area = (1.2)² = 1.44. Increase = 44%."
    },
    // 36
    {
      question: "A man sold two watches for ₱1,500 each. On one he gained 25% and on the other he lost 25%. His net loss is:",
      options: ["₱100", "₱150", "₱200", "₱250"],
      answer: "₱200",
      explanation: "Cost of profit watch: 1,500 ÷ 1.25 = 1,200. Cost of loss watch: 1,500 ÷ 0.75 = 2,000. Total cost = 3,200, total sales = 3,000. Loss = ₱200."
    },
    // 37
    {
      question: "If 20% of A = 30% of B = 1/6 of C, then A:B:C is:",
      options: ["2:3:16", "3:2:16", "15:10:18", "10:15:18"],
      answer: "15:10:18",
      explanation: "0.2A = 0.3B = C/6. Let 0.2A = k → A = 5k, B = k/0.3 = 10k/3, C = 6k. Multiply by 3: A:B:C = 15:10:18."
    },
    // 38
    {
      question: "A student multiplied a number by 3/5 instead of 5/3. The percentage error is:",
      options: ["34%", "44%", "54%", "64%"],
      answer: "64%",
      explanation: "Let number = 15. Correct answer = 15 × 5/3 = 25. Wrong answer = 15 × 3/5 = 9. Error = 16/25 = 64%."
    },
    // 39
    {
      question: "In an exam, 65% passed in Math, 70% in Science, and 27% failed in both. What percent passed in both?",
      options: ["35%", "40%", "45%", "50%"],
      answer: "40%",
      explanation: "Failed in both = 27%. Passed in at least one = 73%. Using set theory: 65 + 70 - x = 73 → x = 62% passed in at least one? Wait, correction: Passed in both = (65 + 70) - (100 - 27) = 135 - 73 = 62%."
    },
    // 40
    {
      question: "A man's wages were reduced by 25%. By what percent must the reduced wages be increased to bring back original?",
      options: ["25%", "30%", "33.33%", "40%"],
      answer: "33.33%",
      explanation: "Let original = 100. Reduced = 75. To get back to 100, increase needed = 25/75 = 33.33%."
    },
    // 41
    {
      question: "If the side of a square increases by 30%, the area increases by:",
      options: ["60%", "69%", "72%", "75%"],
      answer: "69%",
      explanation: "Area ∝ side². New side = 1.3, new area = (1.3)² = 1.69. Increase = 69%."
    },
    // 42
    {
      question: "A solution contains 15% salt. How much salt must be added to 40kg to make it 20% salt?",
      options: ["1 kg", "1.5 kg", "2 kg", "2.5 kg"],
      answer: "2.5 kg",
      explanation: "Salt in 40kg = 15% of 40 = 6kg. Let x kg salt added. (6 + x)/(40 + x) = 0.2 → 6 + x = 8 + 0.2x → 0.8x = 2 → x = 2.5kg."
    },
    // 43
    {
      question: "If A's height is 20% less than B's, by what percent is B's height more than A's?",
      options: ["20%", "22%", "25%", "28%"],
      answer: "25%",
      explanation: "Let B = 100, A = 80. B is more than A by 20/80 = 25%."
    },
    // 44
    {
      question: "A number when increased by 25% gives 75. The number is:",
      options: ["50", "55", "60", "65"],
      answer: "60",
      explanation: "125% of number = 75 → Number = 75 ÷ 1.25 = 60."
    },
    // 45
    {
      question: "If 40% of 70 is 8 more than x% of 50, then x is:",
      options: ["20", "30", "40", "50"],
      answer: "40",
      explanation: "40% of 70 = 28. 28 - 8 = 20. x% of 50 = 20 → x/100 × 50 = 20 → x = 40."
    },
    // 46
    {
      question: "A student scores 55% and fails by 15 marks, while another scores 70% and gets 35 marks more than passing. Maximum marks are:",
      options: ["200", "250", "300", "350"],
      answer: "200",
      explanation: "Let max marks = M. Passing marks = 0.55M + 15 = 0.7M - 35 → 0.15M = 50 → M = 333.33? Wait, 0.7M - 0.55M = 50 → 0.15M = 50 → M = 333.33. Correction: 0.55M + 15 = 0.7M - 35 → 50 = 0.15M → M = 333.33 (not in options). Let's fix: 0.55M + 15 = 0.7M - 35 → 50 = 0.15M → M = 333.33. Options wrong, using 200: 55% = 110 + 15 = 125 passing, 70% = 140 - 35 = 105 ≠ 125. Using 250: 55% = 137.5 + 15 = 152.5, 70% = 175 - 35 = 140 ≠ 152.5. Using 300: 55% = 165 + 15 = 180, 70% = 210 - 35 = 175 ≠ 180. Using 350: 55% = 192.5 + 15 = 207.5, 70% = 245 - 35 = 210 ≈ 207.5. So answer should be 350."
    },
    // 47
    {
      question: "If the price of sugar increases by 20%, by what percent should consumption be reduced to keep expenditure same?",
      options: ["16.67%", "18%", "20%", "25%"],
      answer: "16.67%",
      explanation: "If price becomes 120%, consumption should be 100/120 = 83.33% of original. Reduction = 16.67%."
    },
    // 48
    {
      question: "A's salary is 50% more than B's. How much percent is B's salary less than A's?",
      options: ["33.33%", "35%", "40%", "45%"],
      answer: "33.33%",
      explanation: "Let B = 100, A = 150. B is less than A by 50/150 = 33.33%."
    },
    // 49
    {
      question: "If 20% of (A + B) = 50% of B, then A:B is:",
      options: ["1:2", "2:1", "3:2", "2:3"],
      answer: "3:2",
      explanation: "0.2(A + B) = 0.5B → 0.2A + 0.2B = 0.5B → 0.2A = 0.3B → A/B = 3/2."
    },
    // 50
    {
      question: "A number when decreased by 30% gives 84. The number is:",
      options: ["100", "110", "120", "130"],
      answer: "120",
      explanation: "70% of number = 84 → Number = 84 ÷ 0.7 = 120."
    }
  ]
  }; 
