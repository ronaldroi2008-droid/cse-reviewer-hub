// ==========================================
// NUMERICAL – DIVISIBILITY RULES (200 ITEMS) - FIXED
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["divisibility_rules"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – basic rules) — FIXED
  // ==========================================
  beginner: [
    // 1
    {
      question: "Which of the following numbers is divisible by 2?",
      options: ["137", "245", "382", "579"],
      answer: "382",
      explanation: `STEP 1: A number is divisible by 2 if its last digit is even (0, 2, 4, 6, 8).\nSTEP 2: Only 382 ends in 2, an even digit.\nSTEP 3: Therefore, 382 is divisible by 2.`
    },
    // 2
    {
      question: "Which of the following numbers is divisible by 5?",
      options: ["142", "233", "415", "782"],
      answer: "415",
      explanation: `STEP 1: A number is divisible by 5 if its last digit is 0 or 5.\nSTEP 2: Only 415 ends in 5.\nSTEP 3: So 415 is divisible by 5.`
    },
    // 3
    {
      question: "Which of the following numbers is divisible by 10?",
      options: ["145", "320", "451", "789"],
      answer: "320",
      explanation: `STEP 1: A number is divisible by 10 if its last digit is 0.\nSTEP 2: Only 320 ends in 0.\nSTEP 3: Therefore, 320 is divisible by 10.`
    },
    // 4
    {
      question: "Which number is divisible by 2?",
      options: ["357", "481", "624", "715"],
      answer: "624",
      explanation: `STEP 1: Check last digit.\nSTEP 2: 624 ends in 4, which is even.\nSTEP 3: So 624 is divisible by 2.`
    },
    // 5
    {
      question: "Which of these is divisible by 5?",
      options: ["402", "617", "930", "844"],
      answer: "930",
      explanation: `STEP 1: Divisible by 5 → last digit is 0 or 5.\nSTEP 2: 930 ends in 0.\nSTEP 3: Thus, 930 is divisible by 5.`
    },
    // 6
    {
      question: "Which number is divisible by 10?",
      options: ["247", "580", "693", "741"],
      answer: "580",
      explanation: `STEP 1: Divisible by 10 → last digit must be 0.\nSTEP 2: Only 580 ends in 0.\nSTEP 3: So 580 is divisible by 10.`
    },
    // 7
    {
      question: "Which of the following numbers is divisible by 3?",
      options: ["211", "324", "407", "518"],
      answer: "324",
      explanation: `STEP 1: A number is divisible by 3 if the sum of its digits is divisible by 3.\nSTEP 2: 3 + 2 + 4 = 9, and 9 is divisible by 3.\nSTEP 3: So 324 is divisible by 3.`
    },
    // 8
    {
      question: "Which number is divisible by 3?",
      options: ["145", "256", "372", "481"],
      answer: "372",
      explanation: `STEP 1: Sum of digits of 372 = 3 + 7 + 2 = 12.\nSTEP 2: 12 is divisible by 3.\nSTEP 3: Therefore, 372 is divisible by 3.`
    },
    // 9
    {
      question: "Which of the following is divisible by 9?",
      options: ["235", "468", "572", "683"],
      answer: "468",
      explanation: `STEP 1: A number is divisible by 9 if the sum of its digits is divisible by 9.\nSTEP 2: 4 + 6 + 8 = 18, and 18 is divisible by 9.\nSTEP 3: So 468 is divisible by 9.`
    },
    // 10
    {
      question: "Which number is divisible by 9?",
      options: ["324", "415", "502", "617"],
      answer: "324",
      explanation: `STEP 1: Sum of digits of 324 = 3 + 2 + 4 = 9.\nSTEP 2: 9 is divisible by 9.\nSTEP 3: So 324 is divisible by 9.`
    },
    // 11
    {
      question: "Which number is divisible by 4?",
      options: ["218", "324", "457", "589"],
      answer: "324",
      explanation: `STEP 1: A number is divisible by 4 if its last two digits form a number divisible by 4.\nSTEP 2: Last two digits of 324 are 24, and 24 ÷ 4 = 6.\nSTEP 3: Therefore, 324 is divisible by 4.`
    },
    // 12
    {
      question: "Which of these is divisible by 4?",
      options: ["326", "412", "537", "681"],
      answer: "412",
      explanation: `STEP 1: Check last two digits.\nSTEP 2: 12 ÷ 4 = 3, so 412 is divisible by 4.\nSTEP 3: The others have last two digits not divisible by 4.`
    },
    // 13
    {
      question: "Which number is divisible by 6?",
      options: ["126", "145", "152", "171"],
      answer: "126",
      explanation: `STEP 1: A number is divisible by 6 if it is divisible by both 2 and 3.\nSTEP 2: 126 is even (last digit 6) and 1+2+6=9, divisible by 3.\nSTEP 3: So 126 is divisible by 6.`
    },
    // 14
    {
      question: "Which number is divisible by both 2 and 5?",
      options: ["245", "360", "517", "689"],
      answer: "360",
      explanation: `STEP 1: Divisible by 2 → even last digit.\nSTEP 2: Divisible by 5 → last digit 0 or 5.\nSTEP 3: 360 ends in 0 (even and also 0), so it is divisible by both 2 and 5.`
    },
    // 15
    {
      question: "Which number is divisible by both 3 and 5?",
      options: ["135", "142", "253", "421"],
      answer: "135",
      explanation: `STEP 1: Divisible by 5 → last digit 0 or 5 (135 ends in 5).\nSTEP 2: Sum of digits: 1+3+5=9, divisible by 3.\nSTEP 3: So 135 is divisible by both 3 and 5.`
    },
    // 16
    {
      question: "Which of the following is divisible by 8?",
      options: ["216", "324", "430", "567"],
      answer: "216",
      explanation: `STEP 1: A number is divisible by 8 if its last three digits form a number divisible by 8.\nSTEP 2: 216 ÷ 8 = 27.\nSTEP 3: So 216 is divisible by 8.`
    },
    // 17
    {
      question: "Which number is divisible by 8?",
      options: ["312", "450", "527", "639"],
      answer: "312",
      explanation: `STEP 1: Consider last three digits: 312.\nSTEP 2: 312 ÷ 8 = 39.\nSTEP 3: Thus, 312 is divisible by 8.`
    },
    // 18 -- FIXED: removed second correct option
    {
      question: "Which number is divisible by 11?",
      options: ["242", "351", "475", "584"],
      answer: "242",
      explanation: `STEP 1: For 11, find (sum of digits in odd positions) − (sum of digits in even positions).\nSTEP 2: For 242: (2 + 2) − 4 = 0, which is a multiple of 11.\nSTEP 3: Therefore, 242 is divisible by 11.`
    },
    // 19
    {
      question: "Which of the following is divisible by 3?",
      options: ["251", "370", "481", "555"],
      answer: "555",
      explanation: `STEP 1: Sum of digits of 555 = 5+5+5 = 15.\nSTEP 2: 15 is divisible by 3.\nSTEP 3: So 555 is divisible by 3.`
    },
    // 20
    {
      question: "Which number is divisible by 9?",
      options: ["459", "527", "638", "742"],
      answer: "459",
      explanation: `STEP 1: Sum of digits of 459 = 4+5+9 = 18.\nSTEP 2: 18 is divisible by 9.\nSTEP 3: So 459 is divisible by 9.`
    },
    // 21
    {
      question: "Which number is divisible by 2 but NOT by 5?",
      options: ["140", "224", "350", "495"],
      answer: "224",
      explanation: `STEP 1: Divisible by 2 → last digit even.\nSTEP 2: Divisible by 5 → last digit 0 or 5.\nSTEP 3: 224 ends in 4 (even, not 0 or 5), so it is divisible by 2 but not by 5.`
    },
    // 22
    {
      question: "Which number is divisible by 5 but NOT by 2?",
      options: ["250", "315", "420", "640"],
      answer: "315",
      explanation: `STEP 1: Divisible by 5 → last digit 0 or 5.\nSTEP 2: NOT divisible by 2 → last digit must be odd.\nSTEP 3: 315 ends in 5 (odd), so divisible by 5 but not by 2.`
    },
    // 23
    {
      question: "Which number is divisible by both 2 and 3 (therefore by 6)?",
      options: ["144", "155", "213", "425"],
      answer: "144",
      explanation: `STEP 1: 144 is even, so divisible by 2.\nSTEP 2: Sum of digits: 1+4+4=9, divisible by 3.\nSTEP 3: So 144 is divisible by 6.`
    },
    // 24
    {
      question: "Which of these numbers is divisible by 4?",
      options: ["318", "420", "531", "647"],
      answer: "420",
      explanation: `STEP 1: Check last two digits: 20.\nSTEP 2: 20 ÷ 4 = 5, so 420 is divisible by 4.\nSTEP 3: Others have last two digits not divisible by 4.`
    },
    // 25
    {
      question: "Which number is divisible by 10?",
      options: ["321", "454", "670", "985"],
      answer: "670",
      explanation: `STEP 1: Divisible by 10 → last digit 0.\nSTEP 2: Only 670 ends with 0.\nSTEP 3: Therefore, 670 is divisible by 10.`
    },
    // 26
    {
      question: "Which number is divisible by 3?",
      options: ["218", "364", "427", "732"],
      answer: "732",
      explanation: `STEP 1: Sum of digits: 7+3+2=12.\nSTEP 2: 12 is divisible by 3.\nSTEP 3: So 732 is divisible by 3.`
    },
    // 27
    {
      question: "Which number is divisible by 9?",
      options: ["345", "513", "622", "734"],
      answer: "513",
      explanation: `STEP 1: Sum of digits: 5+1+3=9.\nSTEP 2: 9 is divisible by 9.\nSTEP 3: So 513 is divisible by 9.`
    },
    // 28
    {
      question: "Which number is divisible by 5?",
      options: ["441", "562", "675", "794"],
      answer: "675",
      explanation: `STEP 1: Last digit is 5 or 0 for divisibility by 5.\nSTEP 2: 675 ends in 5.\nSTEP 3: Therefore, 675 is divisible by 5.`
    },
    // 29
    {
      question: "Which number is divisible by 2?",
      options: ["507", "613", "728", "955"],
      answer: "728",
      explanation: `STEP 1: Divisible by 2 → last digit even.\nSTEP 2: 728 ends in 8, an even number.\nSTEP 3: So 728 is divisible by 2.`
    },
    // 30
    {
      question: "Which number is divisible by 4?",
      options: ["506", "612", "735", "849"],
      answer: "612",
      explanation: `STEP 1: Check last two digits: 12.\nSTEP 2: 12 ÷ 4 = 3, so 612 is divisible by 4.\nSTEP 3: Others are not.`
    },
    // 31
    {
      question: "Which number is divisible by both 2 and 3?",
      options: ["246", "255", "317", "509"],
      answer: "246",
      explanation: `STEP 1: 246 is even → divisible by 2.\nSTEP 2: 2+4+6 = 12, divisible by 3.\nSTEP 3: So 246 is divisible by 6.`
    },
    // 32
    {
      question: "Which number is divisible by 8?",
      options: ["432", "515", "627", "741"],
      answer: "432",
      explanation: `STEP 1: Last three digits are 432.\nSTEP 2: 432 ÷ 8 = 54.\nSTEP 3: So 432 is divisible by 8.`
    },
  // 33 -- FIXED: make only 462 correct
{
  question: "Which number is divisible by 11?",
  options: ["274", "342", "452", "462"],
  answer: "462",
  explanation: `STEP 1: For 462, (4 + 2) − 6 = 0.\nSTEP 2: Result 0 is a multiple of 11.\nSTEP 3: So 462 is divisible by 11.`
},

   // 34
{
  question: "Which of the following is divisible by 9?",
  options: ["343", "459", "517", "683"],
  answer: "459",
  explanation: `STEP 1: Sum of digits of 459 = 4+5+9 = 18.\nSTEP 2: 18 is divisible by 9.\nSTEP 3: So 459 is divisible by 9.`
},

    // 35
    {
      question: "Which of these is divisible by 3?",
      options: ["701", "712", "724", "735"],
      answer: "735",
      explanation: `STEP 1: Sum of digits of 735 = 7+3+5 = 15.\nSTEP 2: 15 is divisible by 3.\nSTEP 3: Therefore, 735 is divisible by 3.`
    },
    // 36
    {
      question: "Which number is divisible by 5?",
      options: ["612", "734", "845", "979"],
      answer: "845",
      explanation: `STEP 1: Last digit 0 or 5 → divisible by 5.\nSTEP 2: 845 ends in 5.\nSTEP 3: So 845 is divisible by 5.`
    },
    // 37
    {
      question: "Which number is divisible by 10?",
      options: ["813", "920", "647", "759"],
      answer: "920",
      explanation: `STEP 1: Divisible by 10 → last digit 0.\nSTEP 2: Only 920 ends in 0.\nSTEP 3: So 920 is divisible by 10.`
    },
    // 38 -- FIXED: only 322 fits
    {
      question: "Which number is divisible by 2 but not by 4?",
      options: ["322", "440", "508", "615"],
      answer: "322",
      explanation: `STEP 1: Divisible by 2 → even last digit.\nSTEP 2: For 4, last two digits must be divisible by 4.\nSTEP 3: 22 is not divisible by 4, so 322 is divisible by 2 but not by 4.`
    },
    // 39
    {
      question: "Which number is divisible by 4 but not by 8?",
      options: ["216", "324", "440", "552"],
      answer: "324",
      explanation: `STEP 1: Last two digits 24 → 24 ÷ 4 = 6, divisible by 4.\nSTEP 2: For 8, last three digits must be divisible by 8. 324 ÷ 8 = 40.5, not an integer.\nSTEP 3: So 324 is divisible by 4 but not by 8.`
    },
    // 40
    {
      question: "Which number is divisible by 6?",
      options: ["252", "315", "407", "589"],
      answer: "252",
      explanation: `STEP 1: 252 is even → divisible by 2.\nSTEP 2: 2+5+2=9, divisible by 3.\nSTEP 3: So 252 is divisible by 6.`
    },
    // 41 -- FIXED: ensure only 612 is correct
    {
      question: "Which number is divisible by 9?",
      options: ["612", "703", "827", "946"],
      answer: "612",
      explanation: `STEP 1: Sum of digits of 612 = 6+1+2 = 9.\nSTEP 2: 9 is divisible by 9.\nSTEP 3: So 612 is divisible by 9.`
    },
    // 42
    {
      question: "Which number is divisible by 3 but NOT by 9?",
      options: ["243", "327", "441", "702"],
      answer: "327",
      explanation: `STEP 1: 3+2+7 = 12, divisible by 3.\nSTEP 2: 12 is not divisible by 9.\nSTEP 3: So 327 is divisible by 3 but not by 9.`
    },
    // 43
  // 43
{
  question: "Which number is divisible by 5 and 10?",
  options: ["150", "275", "345", "461"],
  answer: "150",
  explanation: `STEP 1: Divisible by 10 → last digit 0.\nSTEP 2: 150 ends in 0 and is also divisible by 5.\nSTEP 3: So 150 is divisible by both 5 and 10.`
},

    // 44
    {
      question: "Which number is divisible by 8?",
      options: ["504", "615", "722", "839"],
      answer: "504",
      explanation: `STEP 1: Last three digits: 504.\nSTEP 2: 504 ÷ 8 = 63.\nSTEP 3: So 504 is divisible by 8.`
    },

  // 45
{
  question: "Which number is divisible by 11?",
  options: ["375", "419", "507", "594"],
  answer: "594",
  explanation: `STEP 1: For 594: (5 + 4) − 9 = 0.\nSTEP 2: 0 is a multiple of 11.\nSTEP 3: So 594 is divisible by 11.`
},

    // 46
    {
      question: "Which number is divisible by 2?",
      options: ["901", "913", "924", "937"],
      answer: "924",
      explanation: `STEP 1: Check last digit.\nSTEP 2: 924 ends in 4, an even digit.\nSTEP 3: So 924 is divisible by 2.`
    },
    // 47
{
  question: "Which number is divisible by 3?",
  options: ["619", "724", "815", "927"],
  answer: "927",
  explanation: `STEP 1: Sum of digits: 9+2+7=18\nSTEP 2: 18 is divisible by 3\nSTEP 3: So 927 is divisible by 3.`
},

    // 48
    {
      question: "Which number is divisible by 9?",
      options: ["702", "713", "724", "735"],
      answer: "702",
      explanation: `STEP 1: Sum of digits: 7+0+2=9.\nSTEP 2: 9 is divisible by 9.\nSTEP 3: So 702 is divisible by 9.`
    },
    // 49
    {
      question: "Which number is divisible by 4?",
      options: ["832", "917", "945", "973"],
      answer: "832",
      explanation: `STEP 1: Last two digits are 32.\nSTEP 2: 32 ÷ 4 = 8, so 832 is divisible by 4.\nSTEP 3: Others are not.`
    },
    // 50
    {
      question: "Which number is divisible by 5?",
      options: ["962", "973", "985", "997"],
      answer: "985",
      explanation: `STEP 1: Divisible by 5 → last digit is 0 or 5.\nSTEP 2: 985 ends in 5.\nSTEP 3: Therefore, 985 is divisible by 5.`
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – mix of rules) — FIXED
  // ==========================================
  intermediate: [
    // 1
    {
      question: "Which of the following numbers is divisible by both 2 and 3?",
      options: ["132", "145", "217", "355"],
      answer: "132",
      explanation: `STEP 1: 132 is even → divisible by 2.\nSTEP 2: 1+3+2=6, divisible by 3.\nSTEP 3: So 132 is divisible by 6.`
    },
    // 2
    {
      question: "Which number is divisible by 4 and 5 (therefore by 20)?",
      options: ["220", "245", "311", "457"],
      answer: "220",
      explanation: `STEP 1: Divisible by 5 → last digit 0 or 5 (220 ends in 0).\nSTEP 2: Last two digits 20 → 20 ÷ 4 = 5, so divisible by 4.\nSTEP 3: Thus, 220 is divisible by 20.`
    },
    // 3
    {
      question: "Which number is divisible by 12?",
      options: ["180", "196", "211", "259"],
      answer: "180",
      explanation: `STEP 1: A number is divisible by 12 if it is divisible by both 3 and 4.\nSTEP 2: 180: 1+8+0=9 (divisible by 3); last two digits 80 (80 ÷ 4 = 20).\nSTEP 3: So 180 is divisible by 12.`
    },
    // 4
    {
      question: "Which of these is divisible by both 3 and 4?",
      options: ["144", "152", "178", "190"],
      answer: "144",
      explanation: `STEP 1: 1+4+4=9, divisible by 3.\nSTEP 2: Last two digits 44 → 44 ÷ 4 = 11.\nSTEP 3: So 144 is divisible by 12.`
    },
    // 5
{
  question: "Which number is divisible by 8 but not by 16?",
  options: ["200", "128", "192", "260"],
  answer: "200",
  explanation: `STEP 1: Last three digits 200 → 200 ÷ 8 = 25, so divisible by 8.\nSTEP 2: 200 ÷ 16 = 12.5, not an integer.\nSTEP 3: Thus, 200 is divisible by 8 but not by 16.`
},

    // 6 -- FIXED: only 270 is correct (others changed)
    {
      question: "Which number is divisible by 9 and 5?",
      options: ["271", "134", "270", "301"],
      answer: "270",
      explanation: `STEP 1: Divisible by 5 → last digit 0 or 5 (270 ends in 0).\nSTEP 2: Sum of digits 2+7+0=9, divisible by 9.\nSTEP 3: So 270 is divisible by both 9 and 5.`
    },
// 7
{
  question: "Which of the following is divisible by 11?",
  options: ["373", "429", "507", "618"],
  answer: "429",
  explanation: `STEP 1: For 429: (4 + 9) − 2 = 11.\nSTEP 2: 11 is a multiple of 11.\nSTEP 3: So 429 is divisible by 11.`
},

    // 8
    {
      question: "Which number is divisible by 3 but not by 5?",
      options: ["150", "162", "195", "211"],
      answer: "162",
      explanation: `STEP 1: 1+6+2=9, divisible by 3.\nSTEP 2: Last digit is 2 → not divisible by 5.\nSTEP 3: So 162 is divisible by 3 but not by 5.`
    },
    // 9
    {
      question: "Which number is divisible by 4 but NOT by 2? (check carefully)",
      options: ["108", "212", "316", "None of these"],
      answer: "None of these",
      explanation: `STEP 1: Any number divisible by 4 is automatically divisible by 2.\nSTEP 2: So it is impossible to be divisible by 4 but not by 2.\nSTEP 3: Therefore, 'None of these' is correct.`
    },
    // 10 -- FIXED: only 108 is kept as multiple of 18
    {
      question: "Which of these numbers is divisible by 6 and 9? (thus by 18)",
      options: ["108", "125", "143", "157"],
      answer: "108",
      explanation: `STEP 1: Divisible by 6 → divisible by 2 and 3.\nSTEP 2: Divisible by 9 → sum of digits divisible by 9.\nSTEP 3: For 108: even, and 1+0+8=9, divisible by 9.\nSTEP 4: So 108 is divisible by 18.`
    },
    // 11 -- FIXED: only 147 is the 7-multiple kept
    {
      question: "Which number is divisible by 7?",
      options: ["147", "158", "169", "180"],
      answer: "147",
      explanation: `STEP 1: 147 ÷ 7 = 21.\nSTEP 2: So 147 is divisible by 7.`
    },
 // 12 -- FIXED: only 225 is the 25-multiple kept
{
  question: "Which of these numbers is divisible by 25?",
  options: ["226", "176", "225", "241"],
  answer: "225",
  explanation: `STEP 1: Divisible by 25 → last two digits are 00, 25, 50, or 75.\nSTEP 2: 225 ends in 25.\nSTEP 3: So 225 is divisible by 25.`
},

    // 13
    {
      question: "Which number is divisible by both 2 and 9?",
      options: ["162", "189", "225", "243"],
      answer: "162",
      explanation: `STEP 1: 162 is even → divisible by 2.\nSTEP 2: 1+6+2=9, divisible by 9.\nSTEP 3: So 162 is divisible by 18.`
    },
   // 14
{
  question: "Which number is divisible by 15?",
  options: ["124", "137", "150", "167"],
  answer: "150",
  explanation: `STEP 1: A number is divisible by 15 if it is divisible by both 3 and 5.\nSTEP 2: 150 ends in 0 (divisible by 5) and 1+5+0=6 (divisible by 3).\nSTEP 3: So 150 is divisible by 15.`
},

    // 15 -- FIXED: only 160 is the 40-multiple kept
    {
      question: "Which number is divisible by 8 and 5? (thus by 40)",
      options: ["160", "202", "181", "199"],
      answer: "160",
      explanation: `STEP 1: For 5 → last digit 0 or 5.\nSTEP 2: For 8 → last three digits divisible by 8.\nSTEP 3: 160 ends in 0 and 160 ÷ 8 = 20.\nSTEP 4: So 160 is divisible by 40.`
    },
    // 16 -- FIXED: only 144 kept as 36-multiple
    {
      question: "Which number is divisible by 4 and 9? (thus by 36)",
      options: ["144", "155", "169", "173"],
      answer: "144",
      explanation: `STEP 1: 1+4+4=9 → divisible by 9.\nSTEP 2: Last two digits 44 → 44 ÷ 4 = 11.\nSTEP 3: So 144 is divisible by 36.`
    },
    // 17 -- FIXED: only 484 kept as 11-multiple
    {
      question: "Which of these is divisible by 11?",
      options: ["484", "491", "503", "517"],
      answer: "484",
      explanation: `STEP 1: For 484: (4+4) − 8 = 0.\nSTEP 2: 0 is a multiple of 11.\nSTEP 3: So 484 is divisible by 11.`
    },
    // 18 -- FIXED: only 192 kept as 24-multiple
    {
      question: "Which number is divisible by 24?",
      options: ["192", "130", "158", "179"],
      answer: "192",
      explanation: `STEP 1: Divisible by 24 → divisible by 3 and 8.\nSTEP 2: For 192: 1+9+2=12 (divisible by 3); 192 ÷ 8 = 24.\nSTEP 3: So 192 is divisible by 24.`
    },
    // 19
    {
      question: "Which number is divisible by 5 but not by 10?",
      options: ["150", "165", "190", "200"],
      answer: "165",
      explanation: `STEP 1: Divisible by 5 → last digit 0 or 5 (165 ends in 5).\nSTEP 2: Divisible by 10 → last digit 0 (165 ends in 5, so not divisible by 10).\nSTEP 3: So 165 is divisible by 5 only.`
    },
    // 20
    {
      question: "Which number is divisible by 9 but not by 3? (think!)",
      options: ["81", "45", "27", "None of these"],
      answer: "None of these",
      explanation: `STEP 1: Any number divisible by 9 is automatically divisible by 3.\nSTEP 2: So such a number does not exist.\nSTEP 3: Therefore, 'None of these' is correct.`
    },
    // 21 -- FIXED: only 150 kept as multiple of 30
    {
      question: "Which number is divisible by 6 and 5? (therefore by 30)",
      options: ["150", "121", "163", "187"],
      answer: "150",
      explanation: `STEP 1: Divisible by 6 → divisible by 2 and 3.\nSTEP 2: Divisible by 5 → last digit 0 or 5.\nSTEP 3: 150 is even, 1+5+0=6 (divisible by 3), and ends in 0.\nSTEP 4: So 150 is divisible by 30.`
    },
    // 22
    {
      question: "Which number is divisible by 7?",
      options: ["196", "205", "214", "230"],
      answer: "196",
      explanation: `STEP 1: 196 ÷ 7 = 28.\nSTEP 2: So 196 is divisible by 7.\nSTEP 3: Others are not exact multiples of 7.`
    },
  // 23 -- FIXED: only 572 kept as 11-multiple
{
  question: "Which number is divisible by 11?",
  options: ["572", "584", "586", "607"],
  answer: "572",
  explanation: `STEP 1: For 572: (5+2) − 7 = 0.\nSTEP 2: 0 is a multiple of 11.\nSTEP 3: So 572 is divisible by 11.`
},

    // 24 -- FIXED: only 156 kept as 12-multiple
    {
      question: "Which number is divisible by 4 and 6? (thus by 12)",
      options: ["156", "131", "137", "149"],
      answer: "156",
      explanation: `STEP 1: Divisible by 4 → last two digits divisible by 4 (56 ÷ 4 = 14).\nSTEP 2: Divisible by 6 → even and sum of digits divisible by 3 (1+5+6=12).\nSTEP 3: So 156 is divisible by 12.`
    },
    // 25 -- FIXED: only 210 kept as 30-multiple
    {
      question: "Which number is divisible by 2, 3, and 5? (thus by 30)",
      options: ["210", "221", "233", "247"],
      answer: "210",
      explanation: `STEP 1: 210 is even → divisible by 2.\nSTEP 2: Sum of digits: 2+1+0=3 → divisible by 3.\nSTEP 3: Last digit 0 → divisible by 5.\nSTEP 4: So 210 is divisible by 30.`
    },
    // 26
    {
      question: "Which of these is divisible by 8?",
      options: ["264", "270", "276", "282"],
      answer: "264",
      explanation: `STEP 1: 264 ÷ 8 = 33.\nSTEP 2: So 264 is divisible by 8.\nSTEP 3: Others are not exact multiples of 8.`
    },
    // 27 -- FIXED: only 288 kept as 36-multiple
    {
      question: "Which number is divisible by both 4 and 9?",
      options: ["288", "289", "293", "301"],
      answer: "288",
      explanation: `STEP 1: 2+8+8=18 → divisible by 9.\nSTEP 2: Last two digits 88 → 88 ÷ 4 = 22.\nSTEP 3: So 288 is divisible by 36.`
    },
    // 28
    {
      question: "Which number is divisible by 25 and 4? (thus by 100)",
      options: ["200", "225", "250", "275"],
      answer: "200",
      explanation: `STEP 1: Last two digits 00 → divisible by 25 and 4.\nSTEP 2: 200 ÷ 100 = 2.\nSTEP 3: So 200 is divisible by 100.`
    },
    // 29 -- FIXED: only 147 kept as 21-multiple
    {
      question: "Which number is divisible by 3 and 7? (thus by 21)",
      options: ["147", "148", "149", "151"],
      answer: "147",
      explanation: `STEP 1: 147 ÷ 7 = 21.\nSTEP 2: 1+4+7=12, divisible by 3.\nSTEP 3: So 147 is divisible by 21.`
    },
    // 30 -- FIXED: only 162 kept as 18-multiple
    {
      question: "Which of the following numbers is divisible by 18?",
      options: ["162", "145", "151", "163"],
      answer: "162",
      explanation: `STEP 1: Divisible by 18 → divisible by 2 and 9.\nSTEP 2: 162 is even and 1+6+2=9, divisible by 9.\nSTEP 3: So 162 is divisible by 18.`
    },
    // 31 -- FIXED: only 616 kept as 11-multiple
    {
      question: "Which number is divisible by 11?",
      options: ["616", "617", "618", "619"],
      answer: "616",
      explanation: `STEP 1: (6+6) − 1 = 11.\nSTEP 2: 11 is a multiple of 11.\nSTEP 3: So 616 is divisible by 11.`
    },
    // 32 -- FIXED: only 450 kept as 9-and-5 multiple
    {
      question: "Which number is divisible by 9 and 5?",
      options: ["451", "362", "450", "419"],
      answer: "450",
      explanation: `STEP 1: Last digit 0 → divisible by 5.\nSTEP 2: Sum of digits: 4+5+0=9, divisible by 9.\nSTEP 3: So 450 is divisible by 45.`
    },
    // 33 -- FIXED: only 242 kept as 2-and-11 multiple
    {
      question: "Which number is divisible by 2 and 11?",
      options: ["242", "243", "244", "245"],
      answer: "242",
      explanation: `STEP 1: 242 is even → divisible by 2.\nSTEP 2: (2+2) − 4 = 0, so divisible by 11.\nSTEP 3: Thus, 242 is divisible by 22.`
    },
    // 34
    {
      question: "Which number is divisible by 3 and 4 but not by 5?",
      options: ["120", "132", "180", "240"],
      answer: "132",
      explanation: `STEP 1: 1+3+2=6 → divisible by 3.\nSTEP 2: Last two digits 32 → 32 ÷ 4 = 8.\nSTEP 3: Ends in 2 → not divisible by 5.\nSTEP 4: So 132 fits the condition.`
    },
    // 35 -- FIXED: only 175 kept as 35-multiple
    {
      question: "Which number is divisible by 7 and 5? (thus by 35)",
      options: ["175", "176", "177", "178"],
      answer: "175",
      explanation: `STEP 1: 175 ÷ 7 = 25.\nSTEP 2: Ends in 5 → divisible by 5.\nSTEP 3: So 175 is divisible by 35.`
    },
    // 36 -- FIXED: only 192 kept as 16-multiple
    {
      question: "Which number is divisible by 16?",
      options: ["192", "193", "194", "195"],
      answer: "192",
      explanation: `STEP 1: 192 ÷ 16 = 12.\nSTEP 2: So 192 is divisible by 16.`
    },
    // 37 -- FIXED: only 168 kept as 24-multiple
    {
      question: "Which number is divisible by 6 and 8? (thus by 24)",
      options: ["168", "169", "170", "171"],
      answer: "168",
      explanation: `STEP 1: 168 is even and 1+6+8=15 (divisible by 3) → divisible by 6.\nSTEP 2: 168 ÷ 8 = 21.\nSTEP 3: So 168 is divisible by 24.`
    },
    // 38 -- FIXED: only 120 kept as 60-multiple
    {
      question: "Which number is divisible by 4, 5, and 6? (thus by 60)",
      options: ["120", "121", "122", "123"],
      answer: "120",
      explanation: `STEP 1: 120 is even and 1+2+0=3 → divisible by 3.\nSTEP 2: Last digit 0 → divisible by 5.\nSTEP 3: Last two digits 20 → 20 ÷ 4 = 5.\nSTEP 4: So 120 is divisible by 60.`
    },
    // 39 -- FIXED: make only 117 correct (changed other option 135 to non-satisfying)
    {
      question: "Which number is divisible by 9 but not by 6?",
      options: ["117", "126", "134", "144"],
      answer: "117",
      explanation: `STEP 1: 1+1+7=9 → divisible by 9.\nSTEP 2: 117 is odd, so not divisible by 2 → not divisible by 6.\nSTEP 3: So 117 fits the condition.`
    },
    // 40 -- FIXED: only 198 kept as 33-multiple
    {
      question: "Which number is divisible by 11 and 3? (thus by 33)",
      options: ["198", "199", "200", "201"],
      answer: "198",
      explanation: `STEP 1: 1+9+8=18 → divisible by 3.\nSTEP 2: (1+8) − 9 = 0 → divisible by 11.\nSTEP 3: So 198 is divisible by 33.`
    },
    // 41 -- FIXED: only 210 kept as 7-multiple
    {
      question: "Which of these is divisible by 7?",
      options: ["210", "211", "212", "213"],
      answer: "210",
      explanation: `STEP 1: 210 ÷ 7 = 30.\nSTEP 2: So 210 is divisible by 7.`
    },
    // 42 -- FIXED: only 216 kept as 3-and-8 multiple
    {
      question: "Which number is divisible by 3 and 8?",
      options: ["216", "217", "218", "219"],
      answer: "216",
      explanation: `STEP 1: 2+1+6=9 → divisible by 3.\nSTEP 2: 216 ÷ 8 = 27.\nSTEP 3: So 216 is divisible by both 3 and 8.`
    },
    // 43 -- FIXED: only 225 kept as 75-multiple
    {
      question: "Which number is divisible by 25 and 3? (thus by 75)",
      options: ["225", "226", "227", "228"],
      answer: "225",
      explanation: `STEP 1: Ends in 25 → divisible by 25.\nSTEP 2: 2+2+5=9 → divisible by 3.\nSTEP 3: So 225 is divisible by 75.`
    },
    // 44
    {
      question: "Which number is divisible by 11 but not by 2?",
      options: ["231", "242", "264", "286"],
      answer: "231",
      explanation: `STEP 1: (2+1) − 3 = 0 → divisible by 11.\nSTEP 2: 231 is odd → not divisible by 2.\nSTEP 3: So 231 fits the condition.`
    },
    // 45 -- FIXED: only 210 kept as 6-and-5 multiple
    {
      question: "Which number is divisible by 6 and 5?",
      options: ["210", "211", "212", "213"],
      answer: "210",
      explanation: `STEP 1: 210 is even and 2+1+0=3 → divisible by 6.\nSTEP 2: Ends in 0 → divisible by 5.\nSTEP 3: So 210 is divisible by 30.`
    },
    // 46 -- FIXED: only 189 kept as 63-multiple
    {
      question: "Which number is divisible by 7 and 9? (thus by 63)",
      options: ["189", "190", "191", "192"],
      answer: "189",
      explanation: `STEP 1: 189 ÷ 9 = 21.\nSTEP 2: 189 ÷ 7 = 27.\nSTEP 3: So 189 is divisible by 63.`
    },
    // 47
    {
      question: "Which number is divisible by 8 but not by 4? (check logic!)",
      options: ["128", "192", "256", "None of these"],
      answer: "None of these",
      explanation: `STEP 1: Any number divisible by 8 is automatically divisible by 4.\nSTEP 2: So such a number cannot exist.\nSTEP 3: 'None of these' is correct.`
    },
    // 48 -- FIXED: only 216 kept as 36-multiple
    {
      question: "Which number is divisible by 4, 6, and 9? (thus by 36)",
      options: ["216", "217", "218", "219"],
      answer: "216",
      explanation: `STEP 1: 2+1+6=9 → divisible by 9.\nSTEP 2: 216 is even and sum of digits divisible by 3 → divisible by 6.\nSTEP 3: Last two digits 16 → divisible by 4.\nSTEP 4: So 216 is divisible by 36.`
    },
    // 49 -- FIXED: only 315 kept as 105-multiple
    {
      question: "Which number is divisible by 5, 7, and 3? (thus by 105)",
      options: ["315", "316", "317", "318"],
      answer: "315",
      explanation: `STEP 1: 315 ÷ 5 = 63.\nSTEP 2: 315 ÷ 7 = 45.\nSTEP 3: 3+1+5=9 → divisible by 3.\nSTEP 4: So 315 is divisible by 105.`
    },
    // 50 -- FIXED: only 275 kept as 55-multiple
    {
      question: "Which number is divisible by 11 and 5? (thus by 55)",
      options: ["275", "276", "277", "278"],
      answer: "275",
      explanation: `STEP 1: Ends in 5 → divisible by 5.\nSTEP 2: (2+5) − 7 = 0 → divisible by 11.\nSTEP 3: So 275 is divisible by 55.`
    }
  ],

 


  // ==========================================
  // LEVEL 3: ADVANCED (50 items – Mixed challenging applications)
  // ==========================================
  advanced: [
    // 1
    {
      question: "Which value of □ makes 5□6 divisible by 9?",
      options: ["3", "5", "7", "9"],
      answer: "7",
      explanation: `
        STEP 1: For divisibility by 9, the sum of the digits must be a multiple of 9.
        STEP 2: Sum of digits = 5 + □ + 6 = 11 + □.
        STEP 3: Nearest multiple of 9 is 18, so 11 + □ = 18 → □ = 7.
      `
    },

    // 2
    {
      question: "Which value of □ makes 7□2 divisible by 4?",
      options: ["1", "4", "6", "8"],
      answer: "1",
      explanation: `
        STEP 1: For divisibility by 4, the last two digits must form a number divisible by 4.
        STEP 2: Last two digits are □2. Try options:
          - 12 ÷ 4 = 3 ✔
          - 42 ÷ 4 = 10.5 ✘
          - 62 ÷ 4 = 15.5 ✘
          - 82 ÷ 4 = 20.5 ✘
        STEP 3: Only 12 is divisible by 4, so □ = 1.
      `
    },

    // 3
    {
      question: "Which value of □ makes 8□5 divisible by 15?",
      options: ["1", "2", "4", "7"],
      answer: "2",
      explanation: `
        STEP 1: A number divisible by 15 must be divisible by 3 and 5.
        STEP 2: Last digit is 5 → already divisible by 5.
        STEP 3: Sum of digits for divisibility by 3:
          8 + □ + 5 = 13 + □ must be a multiple of 3.
        STEP 4: 13 + 2 = 15 (multiple of 3). Other options do not give a multiple of 3.
        STEP 5: So □ = 2.
      `
    },

    // 4
    {
      question: "Which value of □ makes 9□4 divisible by 8?",
      options: ["0", "3", "5", "7"],
      answer: "0",
      explanation: `
        STEP 1: For divisibility by 8, the last three digits must form a number divisible by 8.
        STEP 2: Last three digits are 9□4.
        STEP 3: Test 904: 904 ÷ 8 = 113 ✔
        STEP 4: With □ = 3, 934 ÷ 8 is not an integer; other options also fail.
        STEP 5: So □ must be 0.
      `
    },

    // 5
    {
      question: "Which value of □ makes 4□8 divisible by both 3 and 8?",
      options: ["0", "2", "4", "6"],
      answer: "0",
      explanation: `
        STEP 1: Divisible by 8 → last three digits (4□8) must form a multiple of 8.
        STEP 2: 408, 448, and 488 are multiples of 8. So □ could be 0, 4, or 8.
        STEP 3: Check divisibility by 3 (sum of digits must be a multiple of 3):
          - For 408: 4 + 0 + 8 = 12 ✔
          - For 448: 4 + 4 + 8 = 16 ✘
          - For 488: 4 + 8 + 8 = 20 ✘
        STEP 4: Only 408 works, so □ = 0.
      `
    },

    // 6
    {
      question: "Which value of □ makes 7□6 divisible by 11?",
      options: ["1", "2", "4", "6"],
      answer: "2",
      explanation: `
        STEP 1: Rule for 11: (sum of digits in odd positions) – (sum of digits in even positions)
                must be 0 or a multiple of 11.
        STEP 2: Number 7□6: odd positions = 7 + 6 = 13; even positions = □.
        STEP 3: 13 − □ must be 0 or 11.
        STEP 4: 13 − 2 = 11, which is a multiple of 11.
        STEP 5: So □ = 2.
      `
    },

    // 7
    {
      question: "Which value of □ makes 2□4 divisible by 18?",
      options: ["1", "3", "5", "7"],
      answer: "3",
      explanation: `
        STEP 1: 18 = 2 × 9, so the number must be even and divisible by 9.
        STEP 2: Last digit is 4 → number is even ✔.
        STEP 3: Sum of digits = 2 + □ + 4 = 6 + □ must be a multiple of 9.
        STEP 4: 6 + 3 = 9, which is a multiple of 9.
        STEP 5: So □ = 3.
      `
    },

    // 8
    {
      question: "Which value of □ makes 6□5 divisible by 45?",
      options: ["3", "5", "7", "9"],
      answer: "7",
      explanation: `
        STEP 1: 45 = 5 × 9, so the number must be divisible by 5 and 9.
        STEP 2: Last digit is 5 → divisible by 5 ✔.
        STEP 3: Sum of digits = 6 + □ + 5 = 11 + □ must be a multiple of 9.
        STEP 4: 11 + 7 = 18, which is a multiple of 9.
        STEP 5: So □ = 7.
      `
    },

    // 9
    {
      question: "Which value of □ makes 8□2 divisible by 6 but NOT by 9?",
      options: ["1", "2", "4", "7"],
      answer: "2",
      explanation: `
        STEP 1: Divisible by 6 → divisible by 2 and 3.
        STEP 2: Last digit is 2 → number is even ✔.
        STEP 3: Sum of digits = 8 + □ + 2 = 10 + □ must be a multiple of 3.
        STEP 4: Try options:
          - □ = 2 → sum = 12 (multiple of 3) ✔
          - □ = 1, 4, 7 → sums are not multiples of 3 ✘
        STEP 5: Also check NOT divisible by 9:
          - For □ = 2 → sum = 12, not a multiple of 9 ✔
        STEP 6: So □ = 2.
      `
    },

    // 10
    {
      question: "Which value of □ makes 7□6 divisible by 12?",
      options: ["2", "4", "5", "8"],
      answer: "5",
      explanation: `
        STEP 1: 12 = 3 × 4, so number must be divisible by 3 and 4.
        STEP 2: Divisible by 4 → last two digits (□6) must form a multiple of 4.
                Possible tens digits: 1, 3, 5, 7, 9 (16, 36, 56, 76, 96).
        STEP 3: Sum of digits for divisibility by 3: 7 + □ + 6 = 13 + □.
        STEP 4: 13 + □ must be a multiple of 3:
          - 13 + 2 = 15 ✔
          - 13 + 5 = 18 ✔
          - 13 + 8 = 21 ✔
        STEP 5: Among the options with valid last two digits and sum:
          - Only □ = 5 gives both conditions and is in the options.
        STEP 6: So □ = 5.
      `
    },

    // 11
    {
      question: "What is the smallest number that must be added to 437 so that it becomes divisible by 9?",
      options: ["1", "2", "4", "5"],
      answer: "4",
      explanation: `
        STEP 1: Sum of digits of 437 = 4 + 3 + 7 = 14.
        STEP 2: Next multiple of 9 after 14 is 18.
        STEP 3: 18 − 14 = 4, so add 4 to reach a sum of 18.
        STEP 4: Therefore, 437 + 4 = 441, which is divisible by 9.
      `
    },

    // 12
    {
      question: "What is the smallest number that must be subtracted from 437 so that it becomes divisible by 9?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: `
        STEP 1: Sum of digits of 437 = 14.
        STEP 2: Nearest lower multiple of 9 is 9.
        STEP 3: 14 − 9 = 5 → subtract 5 from the number.
        STEP 4: 437 − 5 = 432, and 4 + 3 + 2 = 9 → divisible by 9.
      `
    },

    // 13
    {
      question: "What is the smallest number that must be added to 729 to make it divisible by 11?",
      options: ["2", "4", "6", "8"],
      answer: "8",
      explanation: `
        STEP 1: Find nearest multiples of 11 around 729.
        STEP 2: 11 × 66 = 726; 11 × 67 = 737.
        STEP 3: 729 is between 726 and 737. To reach 737, add 737 − 729 = 8.
        STEP 4: So adding 8 makes the number divisible by 11.
      `
    },

    // 14
    {
      question: "What is the smallest number that must be subtracted from 1000 so that it becomes divisible by 18?",
      options: ["4", "6", "8", "10"],
      answer: "10",
      explanation: `
        STEP 1: Divide 1000 by 18: 18 × 55 = 990, remainder 10.
        STEP 2: To reach the lower multiple (990), subtract 10.
        STEP 3: 1000 − 10 = 990, which is divisible by 18.
      `
    },

    // 15
    {
      question: "What is the smallest number that must be added to 250 to make it divisible by 6?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: `
        STEP 1: 250 ÷ 6 = 41 remainder 4.
        STEP 2: To reach the next multiple of 6, add 2 (because 4 + 2 = 6).
        STEP 3: 250 + 2 = 252, which is divisible by 6.
      `
    },

    // 16
    {
      question: "What is the smallest number that must be added to 583 so that it becomes divisible by 8?",
      options: ["1", "3", "5", "7"],
      answer: "1",
      explanation: `
        STEP 1: Check multiples of 8 near 583.
        STEP 2: 8 × 72 = 576; 8 × 73 = 584.
        STEP 3: 584 − 583 = 1, so adding 1 makes it divisible by 8.
      `
    },

    // 17
    {
      question: "What is the smallest number that must be subtracted from 1001 so that it becomes divisible by 9?",
      options: ["1", "2", "4", "5"],
      answer: "2",
      explanation: `
        STEP 1: Sum of digits of 1001 = 1 + 0 + 0 + 1 = 2.
        STEP 2: Nearest lower multiple of 9 is 0.
        STEP 3: 2 − 0 = 2 → subtract 2 from the number.
        STEP 4: 1001 − 2 = 999, and 9 + 9 + 9 = 27 (multiple of 9).
      `
    },

    // 18
    {
      question: "What is the smallest number that must be added to 1001 so that it becomes divisible by 11?",
      options: ["0", "1", "2", "4"],
      answer: "0",
      explanation: `
        STEP 1: Check 1001 ÷ 11.
        STEP 2: 11 × 91 = 1001, so 1001 is already divisible by 11.
        STEP 3: Smallest number to add is 0.
      `
    },

    // 19
    {
      question: "What is the least number that must be added to 697 so that the result is divisible by both 5 and 7?",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: `
        STEP 1: LCM of 5 and 7 is 35.
        STEP 2: 697 ÷ 35 = 19 remainder 32.
        STEP 3: Next multiple of 35 is 35 × 20 = 700.
        STEP 4: 700 − 697 = 3, so add 3.
      `
    },

    // 20
    {
      question: "What is the smallest number that must be subtracted from 523 so that the result is divisible by 36?",
      options: ["11", "13", "17", "19"],
      answer: "19",
      explanation: `
        STEP 1: 36 × 14 = 504; 36 × 15 = 540.
        STEP 2: 523 is between 504 and 540.
        STEP 3: 523 − 504 = 19.
        STEP 4: 504 is divisible by 36, so subtract 19.
      `
    },

    // 21
    {
      question: "How many integers between 100 and 500 (inclusive) are divisible by 15?",
      options: ["25", "26", "27", "28"],
      answer: "27",
      explanation: `
        STEP 1: Numbers divisible by 15 are multiples of 15.
        STEP 2: Smallest ≥ 100: 15 × 7 = 105.
        STEP 3: Largest ≤ 500: 15 × 33 = 495.
        STEP 4: Count = 33 − 7 + 1 = 27.
      `
    },

    // 22
    {
      question: "How many 3-digit numbers are divisible by 8?",
      options: ["110", "112", "115", "120"],
      answer: "112",
      explanation: `
        STEP 1: Smallest 3-digit number divisible by 8: 104 (8 × 13).
        STEP 2: Largest 3-digit number divisible by 8: 992 (8 × 124).
        STEP 3: Count of terms = 124 − 13 + 1 = 112.
      `
    },

    // 23
    {
      question: "How many 3-digit numbers are divisible by both 3 and 4?",
      options: ["72", "73", "74", "75"],
      answer: "75",
      explanation: `
        STEP 1: Divisible by both 3 and 4 → divisible by 12.
        STEP 2: Smallest 3-digit multiple of 12: 108 (12 × 9).
        STEP 3: Largest 3-digit multiple of 12: 996 (12 × 83).
        STEP 4: Count = 83 − 9 + 1 = 75.
      `
    },

    // 24
    {
      question: "How many integers from 1 to 1000 are divisible by 5 but NOT by 10?",
      options: ["90", "95", "100", "105"],
      answer: "100",
      explanation: `
        STEP 1: Numbers divisible by 5: 1000 ÷ 5 = 200.
        STEP 2: Numbers divisible by 10: 1000 ÷ 10 = 100.
        STEP 3: Divisible by 5 but not by 10: 200 − 100 = 100.
      `
    },

    // 25
    {
      question: "How many integers from 1 to 500 are divisible by 7?",
      options: ["68", "69", "70", "71"],
      answer: "71",
      explanation: `
        STEP 1: Count = floor(500 ÷ 7).
        STEP 2: 7 × 71 = 497, so there are 71 multiples.
      `
    },

    // 26
    {
      question: "How many integers from 1 to 500 are divisible by both 3 and 5 but NOT by 4?",
      options: ["23", "24", "25", "26"],
      answer: "25",
      explanation: `
        STEP 1: Divisible by both 3 and 5 → divisible by 15.
        STEP 2: Multiples of 15 up to 500: floor(500 ÷ 15) = 33.
        STEP 3: Numbers divisible by 15 and 4 → divisible by LCM(15, 4) = 60.
        STEP 4: Multiples of 60 up to 500: floor(500 ÷ 60) = 8.
        STEP 5: Divisible by 15 but NOT by 4: 33 − 8 = 25.
      `
    },

    // 27
    {
      question: "How many 2-digit numbers are divisible by 7?",
      options: ["12", "13", "14", "15"],
      answer: "13",
      explanation: `
        STEP 1: Smallest 2-digit multiple of 7: 14 (7 × 2).
        STEP 2: Largest 2-digit multiple of 7: 98 (7 × 14).
        STEP 3: Count = 14 − 2 + 1 = 13.
      `
    },

    // 28
    {
      question: "How many integers from 1 to 100 are divisible by 2 or 3?",
      options: ["65", "66", "67", "68"],
      answer: "67",
      explanation: `
        STEP 1: Multiples of 2: floor(100 ÷ 2) = 50.
        STEP 2: Multiples of 3: floor(100 ÷ 3) = 33.
        STEP 3: Multiples of 6 (common) = floor(100 ÷ 6) = 16.
        STEP 4: Using inclusion-exclusion:
                50 + 33 − 16 = 67.
      `
    },

    // 29
    {
      question: "How many integers from 1 to 100 are NOT divisible by 2, 3, or 5?",
      options: ["24", "25", "26", "27"],
      answer: "26",
      explanation: `
        STEP 1: Let N = numbers from 1 to 100 → 100 numbers.
        STEP 2: Multiples of 2 = 50; of 3 = 33; of 5 = 20.
        STEP 3: Common multiples:
          - of 2 and 3 (6): 16
          - of 2 and 5 (10): 10
          - of 3 and 5 (15): 6
          - of 2,3,5 (30): 3
        STEP 4: Numbers divisible by at least one of 2,3,5:
                50 + 33 + 20 − 16 − 10 − 6 + 3 = 74.
        STEP 5: Not divisible by any of them: 100 − 74 = 26.
      `
    },

    // 30
    {
      question: "How many 3-digit numbers are divisible by 9 but NOT by 5?",
      options: ["78", "79", "80", "81"],
      answer: "80",
      explanation: `
        STEP 1: 3-digit multiples of 9: from 108 (9 × 12) to 999 (9 × 111).
        STEP 2: Count = 111 − 12 + 1 = 100.
        STEP 3: Numbers divisible by both 9 and 5 → divisible by 45.
        STEP 4: 3-digit multiples of 45: from 135 (45 × 3) to 990 (45 × 22) → 22 − 3 + 1 = 20.
        STEP 5: Divisible by 9 but NOT by 5: 100 − 20 = 80.
      `
    },

    // 31
    {
      question: "What is the smallest 3-digit number that is a multiple of 12?",
      options: ["100", "104", "108", "112"],
      answer: "108",
      explanation: `
        STEP 1: 12 × 8 = 96 (2-digit); 12 × 9 = 108 (3-digit).
        STEP 2: So 108 is the smallest 3-digit multiple of 12.
      `
    },

    // 32
    {
      question: "What is the largest 3-digit number that is a multiple of 27?",
      options: ["972", "981", "990", "999"],
      answer: "999",
      explanation: `
        STEP 1: 27 × 37 = 999.
        STEP 2: 27 × 38 = 1026 (4-digit).
        STEP 3: So 999 is the largest 3-digit multiple of 27.
      `
    },

    // 33
    {
      question: "What is the smallest positive integer that is divisible by 6, 8, and 15?",
      options: ["60", "90", "120", "240"],
      answer: "120",
      explanation: `
        STEP 1: Find LCM of 6, 8, and 15.
          - 6 = 2 × 3
          - 8 = 2³
          - 15 = 3 × 5
        STEP 2: LCM = 2³ × 3 × 5 = 8 × 3 × 5 = 120.
      `
    },

    // 34
    {
      question: "Which of the following numbers is divisible by 132?",
      options: ["220", "242", "264", "286"],
      answer: "264",
      explanation: `
        STEP 1: 132 × 2 = 264.
        STEP 2: 220, 242, and 286 are not multiples of 132.
        STEP 3: So 264 is the only option divisible by 132.
      `
    },

    // 35
    {
      question: "Which of the following numbers is divisible by 99?",
      options: ["272", "297", "308", "325"],
      answer: "297",
      explanation: `
        STEP 1: 99 × 3 = 297.
        STEP 2: Other options are not multiples of 99.
      `
    },

    // 36
    {
      question: "If a whole number is divisible by 72, which statement is ALWAYS true?",
      options: [
        "It is divisible by 8 and 9.",
        "It is divisible by 6 and 10.",
        "It is divisible by 9 but not by 8.",
        "It is divisible by 12 but not by 9."
      ],
      answer: "It is divisible by 8 and 9.",
      explanation: `
        STEP 1: 72 = 8 × 9, and 8 and 9 are relatively prime.
        STEP 2: So a number divisible by 72 must be divisible by both 8 and 9.
      `
    },

    // 37
    {
      question: "If a number is divisible by both 12 and 15, what is the least positive integer it must be divisible by?",
      options: ["20", "30", "60", "180"],
      answer: "60",
      explanation: `
        STEP 1: Find LCM of 12 and 15.
          - 12 = 2² × 3
          - 15 = 3 × 5
        STEP 2: LCM = 2² × 3 × 5 = 60.
        STEP 3: So the number must be divisible by 60.
      `
    },

    // 38
    {
      question: "The least number which, when divided by 8, 9, and 12, leaves a remainder of 5 in each case is:",
      options: ["65", "71", "77", "81"],
      answer: "77",
      explanation: `
        STEP 1: Let N be the number. Then N − 5 is divisible by 8, 9, and 12.
        STEP 2: LCM(8, 9, 12) = 72.
        STEP 3: So N − 5 is a multiple of 72 → N = 72k + 5.
        STEP 4: Smallest such N larger than 5 is 72 × 1 + 5 = 77.
      `
    },

    // 39
    {
      question: "A number is divisible by both 4 and 6 but NOT by 8. Which of the following could be the number?",
      options: ["36", "48", "72", "96"],
      answer: "36",
      explanation: `
        STEP 1: Divisible by 4 and 6 → divisible by LCM(4, 6) = 12.
        STEP 2: Check each option:
          - 36: divisible by 4 (36 ÷ 4 = 9) and 6 (36 ÷ 6 = 6), but 36 ÷ 8 = 4.5 ✘ for 8 → OK.
          - 48, 72, 96 are all divisible by 8 → not allowed.
        STEP 3: So 36 is the correct choice.
      `
    },

    // 40
    {
      question: "A number leaves a remainder of 2 when divided by 5 and a remainder of 1 when divided by 3. Which of the following could be the number?",
      options: ["16", "22", "34", "46"],
      answer: "22",
      explanation: `
        STEP 1: Check each option:
          - 22 ÷ 5 = 4 remainder 2 ✔ and 22 ÷ 3 = 7 remainder 1 ✔
        STEP 2: The other options do not satisfy both conditions.
      `
    },

    // 41
    {
      question: "For any integer n, which of the following expressions is ALWAYS divisible by 3?",
      options: ["3n + 2", "3n + 1", "6n", "9n + 1"],
      answer: "6n",
      explanation: `
        STEP 1: 6n = 3 × (2n), which is always a multiple of 3.
        STEP 2: The other expressions are not guaranteed to be multiples of 3 for all integers n.
      `
    },

    // 42
    {
      question: "A 3-digit number has a sum of digits equal to 21. Which statement must be true?",
      options: [
        "It is divisible by 9.",
        "It is divisible by 3.",
        "It is divisible by 7.",
        "It is divisible by 11."
      ],
      answer: "It is divisible by 3.",
      explanation: `
        STEP 1: If the sum of the digits is a multiple of 3, the number is divisible by 3.
        STEP 2: 21 is a multiple of 3, so the number is divisible by 3.
        STEP 3: 21 is not necessarily a multiple of 9, 7, or 11, so those are not guaranteed.
      `
    },

    // 43
    {
      question: "Which of the following statements is TRUE?",
      options: [
        "Every even number is divisible by 4.",
        "Every number divisible by 6 is divisible by 3.",
        "Every multiple of 5 is even.",
        "Every multiple of 10 is odd."
      ],
      answer: "Every number divisible by 6 is divisible by 3.",
      explanation: `
        STEP 1: 6 = 2 × 3. So any multiple of 6 is also a multiple of 3.
        STEP 2: The other statements are false.
      `
    },

    // 44
    {
      question: "Which of the following is a correct divisibility rule for 11?",
      options: [
        "A number is divisible by 11 if the sum of its digits is a multiple of 11.",
        "A number is divisible by 11 if it ends in 0 or 1.",
        "A number is divisible by 11 if the difference between the sum of digits in odd positions and even positions is a multiple of 11.",
        "A number is divisible by 11 if its last two digits form a number divisible by 11."
      ],
      answer: "A number is divisible by 11 if the difference between the sum of digits in odd positions and even positions is a multiple of 11.",
      explanation: `
        STEP 1: This is the standard divisibility rule for 11.
        STEP 2: The other options describe incorrect or incomplete rules.
      `
    },

    // 45
    {
      question: "Which of the following is a correct divisibility rule for 8?",
      options: [
        "A number is divisible by 8 if its last digit is even.",
        "A number is divisible by 8 if the sum of its digits is divisible by 8.",
        "A number is divisible by 8 if its last three digits form a number divisible by 8.",
        "A number is divisible by 8 if its last two digits are 00."
      ],
      answer: "A number is divisible by 8 if its last three digits form a number divisible by 8.",
      explanation: `
        STEP 1: That is the correct test for divisibility by 8.
        STEP 2: The other rules either apply to other divisibility tests or are incorrect.
      `
    },

    // 46
    {
      question: "Which of the following numbers is divisible by 9?",
      options: ["2345", "3456", "4567", "5678"],
      answer: "3456",
      explanation: `
        STEP 1: Use the digit sum test for 9:
          - 2 + 3 + 4 + 5 = 14 ✘
          - 3 + 4 + 5 + 6 = 18 ✔ (multiple of 9)
          - 4 + 5 + 6 + 7 = 22 ✘
          - 5 + 6 + 7 + 8 = 26 ✘
        STEP 2: So only 3456 is divisible by 9.
      `
    },

    // 47
    {
      question: "Which of the following numbers is divisible by 72?",
      options: ["1218", "1224", "1236", "1248"],
      answer: "1224",
      explanation: `
        STEP 1: 72 = 8 × 9, so a multiple of 72 must be divisible by 8 and 9.
        STEP 2: 1224 ÷ 72 = 17 exactly.
        STEP 3: The other options are not exact multiples of 72.
      `
    },

    // 48
    {
      question: "A number leaves a remainder of 3 when divided by 4 and a remainder of 1 when divided by 5. Which of the following could be the number?",
      options: ["31", "34", "39", "44"],
      answer: "31",
      explanation: `
        STEP 1: Check 31:
          - 31 ÷ 4 = 7 remainder 3 ✔
          - 31 ÷ 5 = 6 remainder 1 ✔
        STEP 2: The other options do not satisfy both conditions.
      `
    },

    // 49
    {
      question: "Which of the following numbers is divisible by both 5 and 9?",
      options: ["225", "235", "245", "255"],
      answer: "225",
      explanation: `
        STEP 1: Divisible by 5 → last digit must be 0 or 5 (all options pass this).
        STEP 2: Divisible by 9 → sum of digits must be a multiple of 9.
          - 2 + 2 + 5 = 9 ✔
          - 2 + 3 + 5 = 10 ✘
          - 2 + 4 + 5 = 11 ✘
          - 2 + 5 + 5 = 12 ✘
        STEP 3: So only 225 is divisible by both 5 and 9.
      `
    },

    // 50
    {
      question: "Which of the following numbers is divisible by 4 but leaves a remainder of 2 when divided by 6?",
      options: ["52", "56", "66", "70"],
      answer: "56",
      explanation: `
        STEP 1: Check divisibility by 4 (last two digits divisible by 4):
          - 56 ÷ 4 = 14 ✔
        STEP 2: Check remainder when divided by 6:
          - 56 ÷ 6 = 9 remainder 2 ✔
        STEP 3: Other options do not satisfy both conditions.
      `
    }
  ],
// ==========================================
  // LEVEL 4: EXPERT (50 items – Challenging Multi-Step Divisibility Problems)
  // ==========================================
  expert: [
    // 1
    {
      question: "Which of the following numbers is divisible by 6, 8, and 9?",
      options: ["1,728", "1,848", "1,968", "2,052"],
      answer: "1,728",
      explanation: `STEP 1: A number divisible by 6, 8, and 9 must be divisible by their LCM.\nSTEP 2: LCM(6, 8, 9) = 72.\nSTEP 3: Check options:\n- 1,728 ÷ 72 = 24 (Exact)\n- 1,848 ÷ 72 = 25.6...\n- 1,968 ÷ 72 = 27.3...\n- 2,052 ÷ 72 = 28.5\nSTEP 4: Only 1,728 is divisible by 72.`
    },
    // 2
    {
      question: "The 5-digit number 7A43B is divisible by 9 and by 5. What is the smallest possible value of A + B?",
      options: ["4", "5", "6", "7"],
      answer: "4",
      explanation: `STEP 1: Divisible by 5 ⇒ B is 0 or 5.\nSTEP 2: Divisible by 9 ⇒ Sum of digits (7+A+4+3+B) is a multiple of 9.\nSTEP 3: If B=0: 14+A = 18 ⇒ A=4. (A+B = 4)\nSTEP 4: If B=5: 19+A = 27 ⇒ A=8. (A+B = 13)\nSTEP 5: The smallest value is 4.`
    },
    // 3
    {
      question: "The 5-digit number 63A9B is divisible by 4 and by 9. What is the value of A + B?",
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: `STEP 1: Divisible by 4 ⇒ Last two digits (9B) are divisible by 4. B must be 2 or 6 (since 92 and 96 are divisible by 4).\nSTEP 2: Divisible by 9 ⇒ Sum (6+3+A+9+B) = 18+A+B is a multiple of 9.\nSTEP 3: If B=2: 20+A=27 ⇒ A=7. (A+B=9)\nSTEP 4: If B=6: 24+A=27 ⇒ A=3. (A+B=9)\nSTEP 5: In either case, A+B is 9.`
    },
    // 4
    {
      question: "Which of the following numbers is divisible by 11 but NOT by 3?",
      options: ["858", "924", "1,034", "1,122"],
      answer: "1,034",
      explanation: `STEP 1: Check divisibility by 3 (Sum of digits).\n- 858: Sum=21 (Divisible by 3)\n- 924: Sum=15 (Divisible by 3)\n- 1,034: Sum=8 (NOT divisible by 3)\n- 1,122: Sum=6 (Divisible by 3)\nSTEP 2: Check 1,034 for 11: (1+3) - (0+4) = 0 (Divisible by 11).\nSTEP 3: 1,034 fits the criteria.`
    },
    // 5
    {
      question: "What is the smallest 4-digit number that is divisible by both 7 and 9?",
      options: ["1,008", "1,015", "1,071", "1,134"],
      answer: "1,008",
      explanation: `STEP 1: LCM(7, 9) = 63.\nSTEP 2: Smallest 4-digit number is 1,000.\nSTEP 3: 1,000 ÷ 63 = 15.87...\nSTEP 4: Next integer is 16. 16 × 63 = 1,008.`
    },
    // 6
    {
      question: "Which of the following numbers is divisible by 72?",
      options: ["650", "756", "864", "992"],
      answer: "864",
      explanation: `STEP 1: 72 = 8 × 9. Needs to be divisible by 8 and 9.\nSTEP 2: Check 864:\n- Sum: 8+6+4=18 (Divisible by 9)\n- Last 3 digits: 864 ÷ 8 = 108 (Divisible by 8)\nSTEP 3: 650 is not divisible by 8. 756 (sum 18) not divisible by 8. 992 (sum 20) not divisible by 9.`
    },
    // 7
    {
      question: "A certain number leaves a remainder of 5 when divided by 8. What remainder will the same number leave when divided by 4?",
      options: ["0", "1", "2", "3"],
      answer: "1",
      explanation: `STEP 1: Number N = 8k + 5.\nSTEP 2: Divide by 4: 8k is divisible by 4. Focus on the 5.\nSTEP 3: 5 ÷ 4 = 1 remainder 1.\nSTEP 4: The remainder is 1.`
    },
    // 8
    {
      question: "A number leaves a remainder of 2 when divided by 5 and a remainder of 3 when divided by 7. Which of the following could be the number?",
      options: ["17", "23", "38", "53"],
      answer: "17",
      explanation: `STEP 1: Test options for Remainder 2 when ÷ 5.\n- 17 (2), 23 (3), 38 (3), 53 (3).\nSTEP 2: Only 17 fits the first condition.\nSTEP 3: Check second condition for 17: 17 ÷ 7 = 2 remainder 3.\nSTEP 4: 17 is the correct number.`
    },
    // 9
    {
      question: "How many integers between 100 and 999 are divisible by 9?",
      options: ["99", "100", "101", "102"],
      answer: "100",
      explanation: `STEP 1: First 3-digit multiple: 108 (9×12).\nSTEP 2: Last 3-digit multiple: 999 (9×111).\nSTEP 3: Count = 111 - 12 + 1 = 100.`
    },
    // 10
    {
      question: "How many integers from 1 to 1,000 are divisible by both 4 and 5?",
      options: ["40", "45", "50", "55"],
      answer: "50",
      explanation: `STEP 1: LCM(4, 5) = 20.\nSTEP 2: 1,000 ÷ 20 = 50.\nSTEP 3: There are 50 integers.`
    },
    // 11
    {
      question: "How many integers from 1 to 600 are divisible by 6 but NOT by 9?",
      options: ["66", "67", "68", "69"],
      answer: "67",
      explanation: `STEP 1: Multiples of 6: 600 ÷ 6 = 100.\nSTEP 2: Multiples of LCM(6, 9) = 18: 600 ÷ 18 = 33.\nSTEP 3: 100 - 33 = 67.`
    },
    // 12
    {
      question: "Which of the following is the smallest positive integer divisible by 8, 9, and 15?",
      options: ["120", "180", "360", "720"],
      answer: "360",
      explanation: `STEP 1: LCM(8, 9, 15).\n- 8 = 2³\n- 9 = 3²\n- 15 = 3 × 5\nSTEP 2: LCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360.`
    },
    // 13
    {
      question: "A 4-digit number is divisible by 9 and ends in 0. Which of the following could be the number?",
      options: ["2,340", "2,560", "3,470", "4,280"],
      answer: "2,340",
      explanation: `STEP 1: Sum of digits must be divisible by 9.\n- 2,340: 2+3+4+0 = 9 (Yes)\n- 2,560: Sum=13 (No)\n- 3,470: Sum=14 (No)\n- 4,280: Sum=14 (No)\nSTEP 2: Only 2,340 works.`
    },
    // 14
    {
      question: "A box contains N marbles (N > 30). When divided equally among 6 children, 4 marbles are left over. When divided equally among 8 children, 4 marbles are left over. What is the smallest possible value of N?",
      options: ["36", "48", "52", "60"],
      answer: "52",
      explanation: `STEP 1: Remainder is 4 for both. N = LCM(6, 8) × k + 4.\nSTEP 2: LCM(6, 8) = 24.\nSTEP 3: Sequence: 28, 52, 76...\nSTEP 4: Since N > 30, the smallest value is 52.`
    },
    // 15
    {
      question: "Which of the following numbers is divisible by 7?",
      options: ["302", "329", "372", "414"],
      answer: "329",
      explanation: `STEP 1: Check options.\n- 302 ÷ 7 = 43.1 (No)\n- 329 ÷ 7 = 47 (Yes)\n- 372 ÷ 7 = 53.1 (No)\n- 414 ÷ 7 = 59.1 (No)\nSTEP 2: 329 is divisible by 7.`
    },
    // 16
    {
      question: "A number leaves a remainder of 4 when divided by 7. Which of the following could be the remainder when the same number is divided by 21?",
      options: ["4", "5", "6", "12"],
      answer: "4",
      explanation: `STEP 1: N = 7k + 4.\nSTEP 2: Test k values:\n- k=0, N=4. 4÷21 rem 4.\n- k=1, N=11. 11÷21 rem 11.\n- k=2, N=18. 18÷21 rem 18.\nSTEP 3: Among options, 4 is the valid remainder.`
    },
    // 17 (Cleaned)
    {
      question: "How many integers from 1 to 500 are divisible by 3 OR 5?",
      options: ["200", "233", "266", "300"],
      answer: "233",
      explanation: `STEP 1: Divisible by 3: floor(500/3) = 166.\nSTEP 2: Divisible by 5: floor(500/5) = 100.\nSTEP 3: Divisible by 15: floor(500/15) = 33.\nSTEP 4: Total = 166 + 100 - 33 = 233.`
    },
    // 18
    {
      question: "How many integers from 1 to 1,000 are divisible by 4, 6, and 10 at the same time?",
      options: ["8", "12", "16", "24"],
      answer: "16",
      explanation: `STEP 1: LCM(4, 6, 10) = 60.\nSTEP 2: 1,000 ÷ 60 = 16.66...\nSTEP 3: There are 16 such integers.`
    },
    // 19
    {
      question: "Which of the following is the least common multiple (LCM) of 18, 24, and 30?",
      options: ["180", "360", "720", "1,080"],
      answer: "360",
      explanation: `STEP 1: 18=2×3², 24=2³×3, 30=2×3×5.\nSTEP 2: LCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360.`
    },
    // 20
    {
      question: "Which of the following statements is TRUE?",
      options: [
        "If a number is divisible by 6 and 15, it is divisible by 90.",
        "If a number is divisible by 6 and 15, it is divisible by 30.",
        "If a number is divisible by 6 and 10, it is divisible by 60.",
        "If a number is divisible by 4 and 6, it is divisible by 24."
      ],
      answer: "If a number is divisible by 6 and 15, it is divisible by 30.",
      explanation: `STEP 1: LCM(6, 15) = 30. Any common multiple is divisible by 30.\nSTEP 2: The other statements use numbers larger than the LCM, which is not guaranteed.`
    },
    // 21
    {
      question: "A 5-digit number has digits that sum to 27 and ends in 5. Which of the following could be that number?",
      options: ["59,994", "63,855", "72,315", "81,225"],
      answer: "63,855",
      explanation: `STEP 1: Must end in 5.\nSTEP 2: Sum must be 27.\n- 63,855: 6+3+8+5+5 = 27 (Yes)\n- 72,315: Sum = 18 (No)\n- 81,225: Sum = 18 (No)\nSTEP 3: 63,855 is the correct answer.`
    },
    // 22
    {
      question: "What is the largest 3-digit number divisible by 7?",
      options: ["994", "997", "999", "1,001"],
      answer: "994",
      explanation: `STEP 1: Largest 3-digit is 999.\nSTEP 2: 999 ÷ 7 = 142 remainder 5.\nSTEP 3: 999 - 5 = 994.`
    },
    // 23
    {
      question: "Which of the following numbers is divisible by both 11 and 3?",
      options: ["298", "331", "396", "430"],
      answer: "396",
      explanation: `STEP 1: Check 396.\n- Sum: 3+9+6=18 (Divisible by 3)\n- Alt Sum: 3-9+6=0 (Divisible by 11)\nSTEP 2: 396 fits both.\nSTEP 3: The others fail one or both tests.`
    },
    // 24
    {
      question: "A number N is divisible by 8 and 15. Which of the following must be a factor of N?",
      options: ["24", "30", "40", "120"],
      answer: "120",
      explanation: `STEP 1: N is divisible by LCM(8, 15).\nSTEP 2: LCM(8, 15) = 120.\nSTEP 3: So 120 must be a factor.`
    },
    // 25
    {
      question: "Which of the following is the greatest common divisor (GCD) of 96 and 132?",
      options: ["12", "24", "36", "48"],
      answer: "12",
      explanation: `STEP 1: 96 = 12 × 8; 132 = 12 × 11.\nSTEP 2: 8 and 11 are coprime.\nSTEP 3: GCD is 12.`
    },
    // 26
    {
      question: "A 4-digit number is divisible by 3 and 11. Which of the following CANNOT be such a number?",
      options: ["1,023", "1,122", "2,046", "3,200"],
      answer: "3,200",
      explanation: `STEP 1: Check divisibility.\n- 3,200: Sum = 5 (Not divisible by 3).\nSTEP 2: Since it fails the rule for 3, it cannot be the number.\nSTEP 3: The others pass both rules.`
    },
    // 27
    {
      question: "A teacher wants to divide 420 pencils equally among groups of students. Which group size will NOT divide the pencils evenly?",
      options: ["6", "7", "8", "10"],
      answer: "8",
      explanation: `STEP 1: Check divisibility.\n- 420 ÷ 6 = 70\n- 420 ÷ 7 = 60\n- 420 ÷ 10 = 42\n- 420 ÷ 8 = 52.5 (Not an integer)\nSTEP 2: 8 does not work.`
    },
    // 28
    {
      question: "Which of the following numbers is divisible by 25?",
      options: ["1,135", "1,230", "1,375", "1,560"],
      answer: "1,375",
      explanation: `STEP 1: Divisibility by 25 ends in 00, 25, 50, 75.\nSTEP 2: 1,375 ends in 75.\nSTEP 3: The others do not match the pattern.`
    },
    // 29
    {
      question: "A 4-digit number is divisible by both 12 and 15. Which of the following must also divide the number?",
      options: ["20", "30", "36", "60"],
      answer: "60",
      explanation: `STEP 1: LCM(12, 15) = 60.\nSTEP 2: Any number divisible by 12 and 15 is divisible by 60.`
    },
    // 30
    {
      question: "If a number N is divisible by 9 and 10, which of the following statements is TRUE?",
      options: [
        "N must be divisible by 18.",
        "N must be divisible by 45.",
        "N must be divisible by 90.",
        "All of the above."
      ],
      answer: "All of the above.",
      explanation: `STEP 1: LCM(9, 10) = 90.\nSTEP 2: If N is divisible by 90, it is also divisible by all factors of 90, which include 18 and 45.\nSTEP 3: Therefore, all statements are true.`
    },
    // 31
    {
      question: "How many integers from 1 to 1,000 are divisible by 4 but NOT by 8?",
      options: ["125", "187", "250", "375"],
      answer: "125",
      explanation: `STEP 1: Divisible by 4: 1000÷4 = 250.\nSTEP 2: Divisible by 8: 1000÷8 = 125.\nSTEP 3: 250 - 125 = 125.`
    },
    // 32
    {
      question: "How many integers from 1 to 1,000 are divisible by 3, 5, and 7 at the same time?",
      options: ["8", "9", "10", "11"],
      answer: "9",
      explanation: `STEP 1: LCM(3, 5, 7) = 105.\nSTEP 2: 1,000 ÷ 105 = 9.52...\nSTEP 3: There are 9 such integers.`
    },
    // 33
    {
      question: "If a number is divisible by 8 and 9, which of the following must it also be divisible by?",
      options: ["16", "18", "24", "72"],
      answer: "72",
      explanation: `STEP 1: LCM(8, 9) = 72.\nSTEP 2: The number must be divisible by 72.`
    },
    // 34
    {
      question: "A number leaves a remainder of 3 when divided by 4 and a remainder of 5 when divided by 7. Which of the following could be the number?",
      options: ["11", "19", "27", "46"],
      answer: "19",
      explanation: `STEP 1: Check 19:\n- 19 ÷ 4 = 4 remainder 3 (Yes)\n- 19 ÷ 7 = 2 remainder 5 (Yes)\nSTEP 2: 19 works.`
    },
   // 35
{
  question: "Which of the following is the least common multiple (LCM) of 12, 18, and 20?",
  options: ["60", "90", "180", "360"],
  answer: "180",
  explanation: `
        STEP 1: Prime factorization:
          - 12 = 2² × 3
          - 18 = 2 × 3²
          - 20 = 2² × 5
        STEP 2: LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180.
        STEP 3: So 180 is the least common multiple. 60 and 90 are too small, and 360 is just a larger common multiple.
      `
},

    // 36
    {
      question: "A certain 4-digit number is divisible by 9 and 11. Which of the following is definitely true?",
      options: [
        "Its digits must sum to 18.",
        "Its digits must sum to a multiple of 99.",
        "Its digits must sum to a multiple of 9.",
        "Its digits must all be even."
      ],
      answer: "Its digits must sum to a multiple of 9.",
      explanation: `STEP 1: Divisibility by 9 requires the digit sum to be a multiple of 9.\nSTEP 2: The other conditions are not required by the rules.`
    },
    // 37
    {
      question: "How many integers between 1 and 500 are divisible by 7 but NOT by 3?",
      options: ["47", "48", "49", "50"],
      answer: "48",
      explanation: `STEP 1: Divisible by 7: 500÷7 = 71.\nSTEP 2: Divisible by 21 (LCM 7&3): 500÷21 = 23.\nSTEP 3: 71 - 23 = 48.`
    },
    // 38
    {
      question: "A number is divisible by 2, 3, and 7. Which of the following is the smallest possible value of the number?",
      options: ["12", "18", "28", "42"],
      answer: "42",
      explanation: `STEP 1: LCM(2, 3, 7) = 42.\nSTEP 2: The smallest value is 42.`
    },
    // 39
    {
      question: "If a number is divisible by 4 and 6, which of the following must it be divisible by?",
      options: ["8", "10", "12", "24"],
      answer: "12",
      explanation: `STEP 1: LCM(4, 6) = 12.\nSTEP 2: It must be divisible by 12.`
    },
    // 40
    {
      question: "A number N gives a remainder of 1 when divided by 2, 3, and 5. Which of the following could be N?",
      options: ["16", "31", "46", "62"],
      answer: "31",
      explanation: `STEP 1: LCM(2, 3, 5) = 30.\nSTEP 2: N = 30k + 1.\nSTEP 3: If k=1, N=31.\nSTEP 4: 31 fits the description.`
    },
    // 41 (Cleaned)
    {
      question: "How many integers from 1 to 1,000 are divisible by exactly one of 4 or 6 (but not both)?",
      options: ["167", "250", "333", "416"],
      answer: "250",
      explanation: `STEP 1: Count(4) = 250. Count(6) = 166. Count(12) = 83.\nSTEP 2: Only 4 = 250 - 83 = 167.\nSTEP 3: Only 6 = 166 - 83 = 83.\nSTEP 4: Total = 167 + 83 = 250.`
    },
    // 42
    {
      question: "A number is divisible by 9 and by 5. Which of the following could NOT be the units digit of the number?",
      options: ["0", "5", "9", "All can be units digits"],
      answer: "9",
      explanation: `STEP 1: Divisibility by 5 requires last digit 0 or 5.\nSTEP 2: Therefore, 9 cannot be the units digit.`
    },
    // 43
    {
      question: "A 6-digit number is divisible by 9 and 11. Which of the following conditions is sufficient to guarantee this?",
      options: [
        "Its digits sum to 27 and the alternating sum of digits is 0.",
        "Its digits sum to 11 and the alternating sum of digits is 27.",
        "Its digits are all the same.",
        "It ends in 00."
      ],
      answer: "Its digits sum to 27 and the alternating sum of digits is 0.",
      explanation: `STEP 1: Sum 27 ⇒ Divisible by 9.\nSTEP 2: Alt Sum 0 ⇒ Divisible by 11.\nSTEP 3: This guarantees divisibility by both.`
    },
    // 44
    {
      question: "Which of the following pairs (a, b) makes the 3-digit number 7ab divisible by 9?",
      options: ["(1, 2)", "(2, 4)", "(3, 5)", "(4, 7)"],
      answer: "(4, 7)",
      explanation: `STEP 1: Sum of digits must be multiple of 9.\nSTEP 2: 7 + 4 + 7 = 18 (Divisible by 9).\nSTEP 3: The other pairs do not sum to a multiple of 9.`
    },
    // 45
    {
      question: "How many integers between 100 and 999 are divisible by 5 but NOT by 2?",
      options: ["90", "100", "180", "450"],
      answer: "90",
      explanation: `STEP 1: Must end in 5 (divisible by 5, odd).\nSTEP 2: Numbers are 105, 115, ... 995.\nSTEP 3: This is an AP with difference 10.\nSTEP 4: Count = (995-105)/10 + 1 = 89 + 1 = 90.`
    },
    // 46
    {
      question: "A 3-digit number is divisible by 3 and 11. Which of the following could it be?",
      options: ["232", "297", "430", "500"],
      answer: "297",
      explanation: `STEP 1: Check 297.\n- Sum: 18 (Divisible by 3)\n- Alt Sum: 2-9+7=0 (Divisible by 11)\nSTEP 2: 297 is correct.`
    },
    // 47
    {
      question: "If a number has 3 as a factor and its last two digits are 24, which of the following must be true?",
      options: [
        "The number is divisible by 6.",
        "The number is divisible by 8.",
        "The number is divisible by 9.",
        "The number is divisible by 24."
      ],
      answer: "The number is divisible by 6.",
      explanation: `STEP 1: Ends in 24 ⇒ Divisible by 4 (and thus 2).\nSTEP 2: Factor of 3 is given.\nSTEP 3: Divisible by 2 and 3 ⇒ Divisible by 6.\nSTEP 4: Divisibility by 8 or 9 is not guaranteed.`
    },
    // 48
    {
      question: "How many integers from 1 to 1000 are divisible by 6 or 10 but NOT by 15?",
      options: ["199", "200", "212", "233"],
      answer: "200",
      explanation: `STEP 1: LCM(6,10)=30. Count(6)=166, Count(10)=100, Count(30)=33.\nSTEP 2: Union(6,10) = 166+100-33 = 233.\nSTEP 3: Remove numbers divisible by 15. Since 15 divides 30, any number in the intersection (30) is divisible by 15. Also check logic: We want (A U B) - C. \n- Divisible by 6 or 10 includes multiples of 30.\n- Multiples of 30 are also multiples of 15.\n- So we subtract the intersection Count(30) = 33.\nSTEP 4: 233 - 33 = 200.`
    },
    // 49
    {
      question: "How many integers from 1 to 999 are divisible by 3 but NOT by 9?",
      options: ["222", "333", "444", "555"],
      answer: "222",
      explanation: `STEP 1: Divisible by 3: 999÷3 = 333.\nSTEP 2: Divisible by 9: 999÷9 = 111.\nSTEP 3: 333 - 111 = 222.`
    },
    // 50
    {
      question: "A number leaves a remainder of 2 when divided by 3 and a remainder of 3 when divided by 4. Which of the following could be the number?",
      options: ["5", "11", "14", "17"],
      answer: "11",
      explanation: `STEP 1: Check 11.\n- 11 ÷ 3 = 3 remainder 2 (Yes)\n- 11 ÷ 4 = 2 remainder 3 (Yes)\nSTEP 2: 11 is the correct number.`
    }
  ]
}; // end of main object
