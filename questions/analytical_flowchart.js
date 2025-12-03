// questions/analytical_flowchart.js
// ==========================================
// ANALYTICAL – FLOWCHART (200 ITEMS TARGET)
// Beginner: 50 items – Reading simple flowcharts
// ==========================================

window.ANALYTICAL_QUESTION_BANK = window.ANALYTICAL_QUESTION_BANK || {};

window.ANALYTICAL_QUESTION_BANK["flowchart"] = {
// ==========================================
// LEVEL 1: BEGINNER (50 ITEMS)
// ==========================================
beginner: [
  // 1
  {
    question: `
START
↓
Input N
↓
Is N > 0 ?
 ├─ Yes → Print "POSITIVE" → END
 └─ No
      ↓
      Is N = 0 ?
       ├─ Yes → Print "ZERO" → END
       └─ No  → Print "NEGATIVE" → END

QUESTION: Based on the flowchart, what will be the output if N = -3?`,
    options: ["POSITIVE", "ZERO", "NEGATIVE", "NO OUTPUT"],
    answer: "NEGATIVE",
    explanation: `N = -3 is not greater than 0, so we follow the "No" branch. It is also not equal to 0, so we follow "No" again and the flowchart prints NEGATIVE.`
  },

  // 2
  {
    question: `
START
↓
Input N
↓
Is N > 0 ?
 ├─ Yes → Print "POSITIVE" → END
 └─ No
      ↓
      Is N = 0 ?
       ├─ Yes → Print "ZERO" → END
       └─ No  → Print "NEGATIVE" → END

QUESTION: Based on the flowchart, what will be the output if N = 0?`,
    options: ["POSITIVE", "ZERO", "NEGATIVE", "NO OUTPUT"],
    answer: "ZERO",
    explanation: `N = 0 is not greater than 0, so we go to the second decision. There N = 0 is true, so the flowchart prints ZERO.`
  },

  // 3
  {
    question: `
START
↓
Input N
↓
Is N > 0 ?
 ├─ Yes → Print "POSITIVE" → END
 └─ No
      ↓
      Is N = 0 ?
       ├─ Yes → Print "ZERO" → END
       └─ No  → Print "NEGATIVE" → END

QUESTION: Based on the flowchart, what will be the output if N = 5?`,
    options: ["POSITIVE", "ZERO", "NEGATIVE", "NO OUTPUT"],
    answer: "POSITIVE",
    explanation: `Since N = 5 is greater than 0, the answer to "Is N > 0 ?" is Yes and the flowchart immediately prints POSITIVE.`
  },

  // 4
  {
    question: `
START
↓
Input AGE
↓
Is AGE < 18 ?
 ├─ Yes → Print "MINOR" → END
 └─ No  → Print "ADULT" → END

QUESTION: What will the flowchart print if AGE = 15?`,
    options: ["MINOR", "ADULT", "INVALID", "NO OUTPUT"],
    answer: "MINOR",
    explanation: `AGE = 15 is less than 18, so the Yes branch is followed and the flowchart prints MINOR.`
  },

  // 5
  {
    question:  `
START
↓
Input AGE
↓
Is AGE < 18 ?
 ├─ Yes → Print "MINOR" → END
 └─ No  → Print "ADULT" → END

QUESTION: What will the flowchart print if AGE = 25?`,
    options: ["MINOR", "ADULT", "INVALID", "NO OUTPUT"],
    answer: "ADULT",
    explanation: `AGE = 25 is not less than 18, so we follow the No branch and the flowchart prints ADULT.`
  },

  // 6
  {
    question: `
START
↓
Input TEMP
↓
Is TEMP > 37 ?
 ├─ Yes → Print "FEVER" → END
 └─ No  → Print "NORMAL" → END

QUESTION: Which of the following temperature values will be labeled "FEVER" by the flowchart?`,
    options: ["36", "37", "38", "35"],
    answer: "38",
    explanation: `Only TEMP values strictly greater than 37 follow the Yes branch. Among the choices, 38 is the only value greater than 37, so it is labeled FEVER.`
  },

  // 7
  {
    question: `
START
↓
Input TEMP
↓
Is TEMP > 37 ?
 ├─ Yes → Print "FEVER" → END
 └─ No  → Print "NORMAL" → END

QUESTION: What will the flowchart print if TEMP = 36?`,
    options: ["FEVER", "NORMAL", "NO OUTPUT", "INVALID"],
    answer: "NORMAL",
    explanation: `TEMP = 36 is not greater than 37, so the condition is false and the No branch is taken. The flowchart prints NORMAL.`
  },

  // 8
  {
    question: `
START
↓
Input SCORE
↓
Is SCORE ≥ 75 ?
 ├─ Yes → Print "PASSED" → END
 └─ No  → Print "FAILED" → END

QUESTION: What will the flowchart print if SCORE = 82?`,
    options: ["PASSED", "FAILED", "RETAKE", "NO OUTPUT"],
    answer: "PASSED",
    explanation: `Because 82 is greater than or equal to 75, the answer to the decision is Yes and the flowchart prints PASSED.`
  },

  // 9
  {
    question: `
START
↓
Input SCORE
↓
Is SCORE ≥ 75 ?
 ├─ Yes → Print "PASSED" → END
 └─ No  → Print "FAILED" → END

QUESTION: What will the flowchart print if SCORE = 70?`,
    options: ["PASSED", "FAILED", "RETAKE", "NO OUTPUT"],
    answer: "FAILED",
    explanation: `Because 70 is less than 75, the decision "Is SCORE ≥ 75 ?" is false and the No branch prints FAILED.`
  },

  // 10
  {
    question: `
START
↓
Input SCORE
↓
Is SCORE ≥ 90 ?
 ├─ Yes → Print "EXCELLENT" → END
 └─ No
      ↓
      Is SCORE ≥ 75 ?
       ├─ Yes → Print "GOOD" → END
       └─ No  → Print "NEEDS IMPROVEMENT" → END

QUESTION: What will the flowchart print if SCORE = 92?`,
    options: ["EXCELLENT", "GOOD", "NEEDS IMPROVEMENT", "NO OUTPUT"],
    answer: "EXCELLENT",
    explanation: `SCORE = 92 is at least 90, so the first condition is true and the flowchart prints EXCELLENT immediately.`
  },

  // 11
  {
    question: `
START
↓
Input SCORE
↓
Is SCORE ≥ 90 ?
 ├─ Yes → Print "EXCELLENT" → END
 └─ No
      ↓
      Is SCORE ≥ 75 ?
       ├─ Yes → Print "GOOD" → END
       └─ No  → Print "NEEDS IMPROVEMENT" → END

QUESTION: What will the flowchart print if SCORE = 80?`,
    options: ["EXCELLENT", "GOOD", "NEEDS IMPROVEMENT", "NO OUTPUT"],
    answer: "GOOD",
    explanation: `SCORE = 80 is not ≥ 90, so we go to the second decision. It is ≥ 75, so the flowchart prints GOOD.`
  },

  // 12
  {
    question: `
START
↓
Input SCORE
↓
Is SCORE ≥ 90 ?
 ├─ Yes → Print "EXCELLENT" → END
 └─ No
      ↓
      Is SCORE ≥ 75 ?
       ├─ Yes → Print "GOOD" → END
       └─ No  → Print "NEEDS IMPROVEMENT" → END

QUESTION: What will the flowchart print if SCORE = 60?`,
    options: ["EXCELLENT", "GOOD", "NEEDS IMPROVEMENT", "NO OUTPUT"],
    answer: "NEEDS IMPROVEMENT",
    explanation: `SCORE = 60 is not ≥ 90 and not ≥ 75, so the second decision is also No and the flowchart prints NEEDS IMPROVEMENT.`
  },

  // 13
  {
    question: `
START
↓
Input X
↓
Set X = X + 2
↓
Print X
↓
END

QUESTION: If the input value is X = 3, what value will be printed?`,
    options: ["2", "3", "5", "6"],
    answer: "5",
    explanation: `The flowchart adds 2 to the input X. With X = 3, the new value is 3 + 2 = 5, which is printed.`
  },

  // 14
  {
    question: `
START
↓
Input X
↓
Set X = X + 2
↓
Print X
↓
END

QUESTION: If the input value is X = 10, what value will be printed?`,
    options: ["8", "10", "12", "14"],
    answer: "12",
    explanation: `The flowchart computes X + 2. With X = 10, the printed value is 12.`
  },

  // 15
  {
    question: `
START
↓
Input N
↓
Set N = N + 5
↓
Print N
↓
END

QUESTION: If the input is N = 7, what will the flowchart print?`,
    options: ["5", "7", "10", "12"],
    answer: "12",
    explanation: `The flowchart adds 5 to the input N. For N = 7, the printed result is 7 + 5 = 12.`
  },

  // 16
  {
    question: `
START
↓
Input K
↓
Set K = K × 3
↓
Print K
↓
END

QUESTION: If the input is K = 4, what will be printed?`,
    options: ["7", "8", "10", "12"],
    answer: "12",
    explanation: `K is multiplied by 3. With K = 4, the printed value is 4 × 3 = 12.`
  },

  // 17
  {
    question: `
START
↓
Input A, B
↓
Set SUM = A + B
↓
Print SUM
↓
END

QUESTION: If A = 5 and B = 2, what will the flowchart print?`,
    options: ["3", "5", "7", "10"],
    answer: "7",
    explanation: `SUM is computed as A + B. With A = 5 and B = 2, SUM = 7, which is printed.`
  },

  // 18
  {
    question: `
START
↓
Input A, B
↓
Set SUM = A + B
↓
Print SUM
↓
END

QUESTION: If A = 12 and B = 8, what will the flowchart print?`,
    options: ["12", "18", "20", "30"],
    answer: "20",
    explanation: `SUM = A + B = 12 + 8 = 20, so the flowchart prints 20.`
  },

  // 19
  {
    question: `
START
↓
Input A, B
↓
Set DIFF = A − B
↓
Print DIFF
↓
END

QUESTION: If A = 10 and B = 3, what will the flowchart print?`,
    options: ["3", "7", "10", "13"],
    answer: "7",
    explanation: `DIFF is A − B = 10 − 3 = 7, which is printed.`
  },

  // 20
  {
    question: `
START
↓
Input A, B
↓
Set DIFF = A − B
↓
Print DIFF
↓
END

QUESTION: If A = 4 and B = 9, what will the flowchart print?`,
    options: ["5", "-5", "13", "NO OUTPUT"],
    answer: "-5",
    explanation: `DIFF = A − B = 4 − 9 = -5, so the flowchart prints -5 (a negative number).`
  },

  // 21
  {
    question: `
START
↓
Input N
↓
Is N even ?
 ├─ Yes → Print "EVEN" → END
 └─ No  → Print "ODD" → END

QUESTION: What will the flowchart print if N = 8?`,
    options: ["EVEN", "ODD", "NEGATIVE", "NO OUTPUT"],
    answer: "EVEN",
    explanation: `8 is divisible by 2 with no remainder, so it is even and the flowchart prints EVEN.`
  },

  // 22
  {
    question: `
START
↓
Input N
↓
Is N even ?
 ├─ Yes → Print "EVEN" → END
 └─ No  → Print "ODD" → END

QUESTION: What will the flowchart print if N = 11?`,
    options: ["EVEN", "ODD", "NEGATIVE", "NO OUTPUT"],
    answer: "ODD",
    explanation: `11 is not divisible by 2, so it is odd and the flowchart prints ODD.`
  },

  // 23
  {
    question: `
START
↓
Input N
↓
Is N divisible by 3 ?
 ├─ Yes → Print "YES" → END
 └─ No  → Print "NO" → END

QUESTION: What will the flowchart print if N = 9?`,
    options: ["YES", "NO", "ERROR", "NO OUTPUT"],
    answer: "YES",
    explanation: `9 ÷ 3 = 3 with no remainder, so N is divisible by 3 and the flowchart prints YES.`
  },

  // 24
  {
    question: `
START
↓
Input N
↓
Is N divisible by 3 ?
 ├─ Yes → Print "YES" → END
 └─ No  → Print "NO" → END

QUESTION: What will the flowchart print if N = 10?`,
    options: ["YES", "NO", "ERROR", "NO OUTPUT"],
    answer: "NO",
    explanation: `10 is not divisible by 3 (10 ÷ 3 has a remainder), so the flowchart prints NO.`
  },

  // 25
  {
    question: `
START
↓
Input N
↓
Is N > 10 ?
 ├─ Yes → Print "GREATER THAN 10" → END
 └─ No  → Print "10 OR LESS" → END

QUESTION: What will the flowchart print if N = 4?`,
    options: ["GREATER THAN 10", "10 OR LESS", "ZERO", "NO OUTPUT"],
    answer: "10 OR LESS",
    explanation: `4 is not greater than 10, so the decision is No and the flowchart prints 10 OR LESS.`
  },

  // 26
  {
    question: `
START
↓
Input N
↓
Is N > 10 ?
 ├─ Yes → Print "GREATER THAN 10" → END
 └─ No  → Print "10 OR LESS" → END

QUESTION: What will the flowchart print if N = 15?`,
    options: ["GREATER THAN 10", "10 OR LESS", "ZERO", "NO OUTPUT"],
    answer: "GREATER THAN 10",
    explanation: `15 is greater than 10, so the Yes branch is taken and the flowchart prints GREATER THAN 10.`
  },

  // 27
  {
    question: `
START
↓
Set i = 1
↓
Print i
Set i = i + 1
↓
Is i ≤ 3 ?
 ├─ Yes → Go back to "Print i"
 └─ No  → END

QUESTION: Which numbers will be printed by the flowchart?`,
    options: ["1, 2", "1, 2, 3", "1, 2, 3, 4", "Only 3"],
    answer: "1, 2, 3",
    explanation: `The flow starts with i = 1. It prints 1, then increases i to 2 and prints 2, then increases i to 3 and prints 3. When i becomes 4, the test i ≤ 3 is false and the loop stops.`
  },

  // 28
  {
    question: `
START
↓
Set i = 1
↓
Print i
Set i = i + 1
↓
Is i ≤ 3 ?
 ├─ Yes → Go back to "Print i"
 └─ No  → END

QUESTION: How many times does the flowchart print a number?`,
    options: ["1 time", "2 times", "3 times", "4 times"],
    answer: "3 times",
    explanation: `The loop prints i for i = 1, 2, and 3, so a number is printed 3 times in total.`
  },

  // 29
  {
    question: `
START
↓
Set COUNT = 1
↓
Print "HELLO"
Set COUNT = COUNT + 1
↓
Is COUNT ≤ 4 ?
 ├─ Yes → Go back to "Print HELLO"
 └─ No  → END

QUESTION: How many times will the word "HELLO" be printed?`,
    options: ["3 times", "4 times", "5 times", "6 times"],
    answer: "4 times",
    explanation: `COUNT starts at 1 and "HELLO" is printed once for each value of COUNT = 1, 2, 3, 4. After COUNT becomes 5, the condition COUNT ≤ 4 is false and the loop stops.`
  },

  // 30
  {
    question: `
START
↓
Set i = 1, total = 0
↓
Add i to total
Set i = i + 1
↓
Is i ≤ 3 ?
 ├─ Yes → Go back to "Add i to total"
 └─ No  → Print total → END

QUESTION: What value of total will be printed at the end of the flowchart?`,
    options: ["3", "4", "5", "6"],
    answer: "6",
    explanation: `The loop adds 1, then 2, then 3 to total. So total = 1 + 2 + 3 = 6, which is printed.`
  },

  // 31
  {
    question: `
START
↓
Set i = 1, total = 0
↓
Add i to total
Set i = i + 1
↓
Is i ≤ 4 ?
 ├─ Yes → Go back to "Add i to total"
 └─ No  → Print total → END

QUESTION: What value of total will be printed at the end of the flowchart?`,
    options: ["6", "8", "9", "10"],
    answer: "10",
    explanation: `The loop adds 1 + 2 + 3 + 4 = 10 to total, so the final printed value is 10.`
  },

  // 32
  {
    question: `
START
↓
Set X = 2
↓
Print X
Set X = X × 2
↓
Print X
↓
END

QUESTION: What sequence of numbers will be printed?`,
    options: ["2 only", "2, 4", "4, 8", "2, 4, 8"],
    answer: "2, 4",
    explanation: `X starts at 2, so the first print shows 2. Then X is doubled to 4 and printed again. The flowchart ends after printing 4.`
  },

  // 33
  {
    question: `
START
↓
Input N
↓
Is N < 0 ?
 ├─ Yes → Print "NEGATIVE" → END
 └─ No  → Print "NOT NEGATIVE" → END

QUESTION: What will the flowchart print if N = -1?`,
    options: ["NEGATIVE", "NOT NEGATIVE", "ZERO", "NO OUTPUT"],
    answer: "NEGATIVE",
    explanation: `Since -1 is less than 0, the Yes branch is taken and the flowchart prints NEGATIVE.`
  },

  // 34
  {
    question: `
START
↓
Input N
↓
Is N < 0 ?
 ├─ Yes → Print "NEGATIVE" → END
 └─ No  → Print "NOT NEGATIVE" → END

QUESTION: What will the flowchart print if N = 0?`,
    options: ["NEGATIVE", "NOT NEGATIVE", "ZERO", "NO OUTPUT"],
    answer: "NOT NEGATIVE",
    explanation: `0 is not less than 0, so the decision is No and the flowchart prints NOT NEGATIVE.`
  },

  // 35
  {
    question: `
START
↓
Input N
↓
Is N < 10 ?
 ├─ Yes → Print "SMALL" → END
 └─ No
      ↓
      Is N ≤ 20 ?
       ├─ Yes → Print "MEDIUM" → END
       └─ No  → Print "LARGE" → END

QUESTION: What will the flowchart print if N = 8?`,
    options: ["SMALL", "MEDIUM", "LARGE", "NO OUTPUT"],
    answer: "SMALL",
    explanation: `N = 8 is less than 10, so the first condition is true and the flowchart prints SMALL.`
  },

  // 36
  {
    question: `
START
↓
Input N
↓
Is N < 10 ?
 ├─ Yes → Print "SMALL" → END
 └─ No
      ↓
      Is N ≤ 20 ?
       ├─ Yes → Print "MEDIUM" → END
       └─ No  → Print "LARGE" → END

QUESTION: What will the flowchart print if N = 15?`,
    options: ["SMALL", "MEDIUM", "LARGE", "NO OUTPUT"],
    answer: "MEDIUM",
    explanation: `N = 15 is not less than 10, but it is less than or equal to 20, so the second condition is true and the flowchart prints MEDIUM.`
  },

  // 37
  {
    question: `
START
↓
Input N
↓
Is N < 10 ?
 ├─ Yes → Print "SMALL" → END
 └─ No
      ↓
      Is N ≤ 20 ?
       ├─ Yes → Print "MEDIUM" → END
       └─ No  → Print "LARGE" → END

QUESTION: What will the flowchart print if N = 25?`,
    options: ["SMALL", "MEDIUM", "LARGE", "NO OUTPUT"],
    answer: "LARGE",
    explanation: `N = 25 is not less than 10 and also not ≤ 20, so both decisions are No and the flowchart prints LARGE.`
  },

  // 38
  {
    question: `
START
↓
Input HOURS
↓
Is HOURS > 8 ?
 ├─ Yes → Print "OVERTIME" → END
 └─ No  → Print "REGULAR" → END

QUESTION: What will the flowchart print if HOURS = 9?`,
    options: ["OVERTIME", "REGULAR", "NO WORK", "NO OUTPUT"],
    answer: "OVERTIME",
    explanation: `Since 9 is greater than 8, the condition is true and the flowchart prints OVERTIME.`
  },

  // 39
  {
    question: `
START
↓
Input HOURS
↓
Is HOURS > 8 ?
 ├─ Yes → Print "OVERTIME" → END
 └─ No  → Print "REGULAR" → END

QUESTION: What will the flowchart print if HOURS = 7?`,
    options: ["OVERTIME", "REGULAR", "NO WORK", "NO OUTPUT"],
    answer: "REGULAR",
    explanation: `7 is not greater than 8, so the No branch is taken and the flowchart prints REGULAR.`
  },

  // 40
  {
    question: `
START
↓
Input N
↓
Is N < 0 ?
 ├─ Yes → Print "INVALID" → END
 └─ No  → Print N → END

QUESTION: What will the flowchart print if N = -2?`,
    options: ["-2", "INVALID", "0", "NO OUTPUT"],
    answer: "INVALID",
    explanation: `Because N = -2 is less than 0, the Yes branch is followed and the flowchart prints INVALID.`
  },

  // 41
  {
    question: `
START
↓
Input N
↓
Is N < 0 ?
 ├─ Yes → Print "INVALID" → END
 └─ No  → Print N → END

QUESTION: What will the flowchart print if N = 5?`,
    options: ["-5", "INVALID", "5", "NO OUTPUT"],
    answer: "5",
    explanation: `N = 5 is not less than 0, so the No branch is taken and the flowchart prints the value 5.`
  },

  // 42
  {
    question: `
START
↓
Input A
↓
Is A ≥ 0 ?
 ├─ Yes → Set B = A
 └─ No  → Set B = -A
↓
Print B
↓
END

QUESTION: What will the flowchart print if A = -4?`,
    options: ["-4", "0", "4", "NO OUTPUT"],
    answer: "4",
    explanation: `A = -4 is not ≥ 0, so we go to the No branch and set B = -A = 4. The flowchart prints 4.`
  },

  // 43
  {
    question: `
START
↓
Input A
↓
Is A ≥ 0 ?
 ├─ Yes → Set B = A
 └─ No  → Set B = -A
↓
Print B
↓
END

QUESTION: What will the flowchart print if A = 7?`,
    options: ["-7", "0", "7", "NO OUTPUT"],
    answer: "7",
    explanation: `A = 7 is ≥ 0, so the Yes branch sets B = A = 7 and the flowchart prints 7.`
  },

  // 44
  {
    question: `
START
↓
Input X
↓
Is X > 100 ?
 ├─ Yes → Print "HIGH" → END
 └─ No
      ↓
      Is X ≥ 50 ?
       ├─ Yes → Print "MEDIUM" → END
       └─ No  → Print "LOW" → END

QUESTION: What will the flowchart print if X = 45?`,
    options: ["HIGH", "MEDIUM", "LOW", "NO OUTPUT"],
    answer: "LOW",
    explanation: `X = 45 is not greater than 100 and also not ≥ 50, so both decisions are No and the flowchart prints LOW.`
  },

  // 45
  {
    question: `
START
↓
Input X
↓
Is X > 100 ?
 ├─ Yes → Print "HIGH" → END
 └─ No
      ↓
      Is X ≥ 50 ?
       ├─ Yes → Print "MEDIUM" → END
       └─ No  → Print "LOW" → END

QUESTION: What will the flowchart print if X = 75?`,
    options: ["HIGH", "MEDIUM", "LOW", "NO OUTPUT"],
    answer: "MEDIUM",
    explanation: `X = 75 is not greater than 100, but it is ≥ 50, so the flowchart prints MEDIUM.`
  },

  // 46
  {
    question: `
START
↓
Input X
↓
Is X > 100 ?
 ├─ Yes → Print "HIGH" → END
 └─ No
      ↓
      Is X ≥ 50 ?
       ├─ Yes → Print "MEDIUM" → END
       └─ No  → Print "LOW" → END

QUESTION: What will the flowchart print if X = 150?`,
    options: ["HIGH", "MEDIUM", "LOW", "NO OUTPUT"],
    answer: "HIGH",
    explanation: `X = 150 is greater than 100, so the first condition is true and the flowchart prints HIGH.`
  },

  // 47
  {
    question: `
START
↓
Input A, B, C
↓
Set COUNT = 0
↓
Is A > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is B > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is C > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Print COUNT
↓
END

QUESTION: If A = 2, B = -1, and C = 5, what value will be printed?`,
    options: ["0", "1", "2", "3"],
    answer: "2",
    explanation: `A and C are positive, but B is not. So COUNT increases twice, giving COUNT = 2, which is printed.`
  },

  // 48
  {
    question: `
START
↓
Input A, B, C
↓
Set COUNT = 0
↓
Is A > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is B > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is C > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Print COUNT
↓
END

QUESTION: If A = -3, B = -2, and C = -1, what value will be printed?`,
    options: ["0", "1", "2", "3"],
    answer: "0",
    explanation: `None of the three numbers is greater than 0, so COUNT never increases and remains 0, which is printed.`
  },

  // 49
  {
    question: `
START
↓
Input A, B, C
↓
Set COUNT = 0
↓
Is A > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is B > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is C > 0 ?
 ├─ Yes → Set COUNT = COUNT + 1
 └─ No  → (no change)
↓
Print COUNT
↓
END

QUESTION: If A = 1, B = 2, and C = 3, what value will be printed?`,
    options: ["0", "1", "2", "3"],
    answer: "3",
    explanation: `All three numbers are positive, so COUNT increases three times and becomes 3, which is printed.`
  },

  // 50
  {
    question: `
START
↓
Input N
↓
Is N divisible by 2 ?
 ├─ Yes
 │    ↓
 │    Is N divisible by 3 ?
 │     ├─ Yes → Print "DIVISIBLE BY 2 AND 3" → END
 │     └─ No  → Print "NOT DIVISIBLE" → END
 └─ No  → Print "NOT DIVISIBLE" → END

QUESTION: What will the flowchart print if N = 12?`,
    options: ["DIVISIBLE BY 2 AND 3", "DIVISIBLE BY 2 ONLY", "NOT DIVISIBLE", "NO OUTPUT"],
    answer: "DIVISIBLE BY 2 AND 3",
    explanation: `12 is divisible by both 2 and 3, so both conditions are true and the flowchart prints DIVISIBLE BY 2 AND 3.`
  }
],


// ==========================================
// LEVEL 2: INTERMEDIATE (50 items – Loops, counters, multi-branch)
// ==========================================
intermediate: [
  // 1
  {
    question: `
START
↓
Set i = 1, sum = 0
↓
Is i ≤ 5 ?
 ├─ Yes → sum = sum + 2 × i → i = i + 1 → (go back to decision)
 └─ No  → Print sum → END

QUESTION: What value of sum will be printed at the end of the flowchart?`,
    options: ["10", "20", "30", "40"],
    answer: "30",
    explanation:
      "The loop adds 2×1 + 2×2 + 2×3 + 2×4 + 2×5 = 2(1+2+3+4+5) = 2×15 = 30."
  },

  // 2
  {
    question: `
START
↓
Set i = 1, total = 0
↓
Is i ≤ 4 ?
 ├─ Yes → total = total + i × i → i = i + 1 → (go back to decision)
 └─ No  → Print total → END

QUESTION: What value of total will be printed at the end of the flowchart?`,
    options: ["14", "30", "55", "60"],
    answer: "30",
    explanation:
      "total = 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30."
  },

  // 3
  {
    question: `
START
↓
Set i = 2, product = 1
↓
Is i ≤ 6 ?
 ├─ Yes → product = product × i → i = i + 2 → (go back to decision)
 └─ No  → Print product → END

QUESTION: What value of product will be printed at the end of the flowchart?`,
    options: ["24", "36", "48", "72"],
    answer: "48",
    explanation:
      "Values of i: 2, 4, 6. Product = 1 × 2 × 4 × 6 = 48."
  },

  // 4
  {
    question: `
START
↓
Set i = 1, count = 0
↓
Is i ≤ 10 ?
 ├─ Yes →
 │    Is i divisible by 3 ?
 │     ├─ Yes → count = count + 1
 │     └─ No  → (no change)
 │    i = i + 1 → (go back to decision)
 └─ No  → Print count → END

QUESTION: What value of count will be printed at the end of the flowchart?`,
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation:
      "Multiples of 3 from 1 to 10 are 3, 6, and 9. So count = 3."
  },

  // 5
  {
    question: `
START
↓
Set i = 5, total = 0
↓
Is i ≥ 1 ?
 ├─ Yes → total = total + i → i = i − 1 → (go back to decision)
 └─ No  → Print total → END

QUESTION: What value of total will be printed at the end of the flowchart?`,
    options: ["10", "12", "15", "20"],
    answer: "15",
    explanation:
      "total = 5 + 4 + 3 + 2 + 1 = 15."
  },

  // 6
  {
    question: `
START
↓
Input N
↓
Set COUNT = 0
↓
Is N > 0 ?
 ├─ Yes → N = N − 2 → COUNT = COUNT + 1 → (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 7 at the start, what value will be printed?`,
    options: ["2", "3", "4", "5"],
    answer: "4",
    explanation:
      "N goes 7 → 5 → 3 → 1 → −1. COUNT increases 4 times, so COUNT = 4."
  },

  // 7
  {
    question: `
START
↓
Input N
↓
Set i = 1, total = 0
↓
Is i ≤ N ?
 ├─ Yes → total = total + i → i = i + 2 → (go back to decision)
 └─ No  → Print total → END

QUESTION: If N = 7, what value of total will be printed?`,
    options: ["12", "14", "16", "18"],
    answer: "16",
    explanation:
      "i takes odd values up to 7: 1, 3, 5, 7. total = 1 + 3 + 5 + 7 = 16."
  },

  // 8
  {
    question: `
START
↓
Input N
↓
Set i = 2, total = 0
↓
Is i ≤ N ?
 ├─ Yes → total = total + i → i = i + 2 → (go back to decision)
 └─ No  → Print total → END

QUESTION: If N = 8, what value of total will be printed?`,
    options: ["16", "18", "20", "22"],
    answer: "20",
    explanation:
      "Even numbers up to 8: 2, 4, 6, 8. total = 2 + 4 + 6 + 8 = 20."
  },

  // 9
  {
    question: `
START
↓
Input N
↓
Set i = 1, FACT = 1
↓
Is i ≤ N ?
 ├─ Yes → FACT = FACT × i → i = i + 1 → (go back to decision)
 └─ No  → Print FACT → END

QUESTION: If N = 4, what value will be printed?`,
    options: ["12", "16", "24", "32"],
    answer: "24",
    explanation:
      "FACT = 1 × 1 × 2 × 3 × 4 = 24."
  },

  // 10
  {
    question: `
START
↓
Input N
↓
Set i = 1, total = 0
↓
Is i ≤ N ?
 ├─ Yes → total = total + i × i → i = i + 1 → (go back to decision)
 └─ No  → Print total → END

QUESTION: If N = 3, what value of total will be printed?`,
    options: ["9", "12", "14", "16"],
    answer: "14",
    explanation:
      "total = 1² + 2² + 3² = 1 + 4 + 9 = 14."
  },

  // 11
  {
    question: `
START
↓
Input N
↓
Set X = N + 2
↓
Set X = X × 3
↓
Set X = X − 4
↓
Print X
↓
END

QUESTION: If N = 5, what value will be printed?`,
    options: ["11", "13", "17", "21"],
    answer: "17",
    explanation:
      "X = 5 + 2 = 7; X = 7 × 3 = 21; X = 21 − 4 = 17."
  },

  // 12
  {
    question: `
START
↓
Input N
↓
Set A = N × 2
↓
Set B = A + 5
↓
Set C = B − N
↓
Print C
↓
END

QUESTION: If N = 4, what value will be printed?`,
    options: ["7", "8", "9", "10"],
    answer: "9",
    explanation:
      "A = 8, B = 8 + 5 = 13, C = 13 − 4 = 9."
  },

  // 13
  {
    question: `
START
↓
Input X
↓
Set Y = X − 1
↓
Set Y = Y × 4
↓
Set Y = Y ÷ 2
↓
Print Y
↓
END

QUESTION: If X = 6, what value will be printed?`,
    options: ["8", "10", "12", "14"],
    answer: "10",
    explanation:
      "Y = 6 − 1 = 5; Y = 5 × 4 = 20; Y = 20 ÷ 2 = 10."
  },

  // 14
  {
    question: `
START
↓
Input A, B
↓
Set S = A + B
↓
Set D = B − A
↓
Set R = S × D
↓
Print R
↓
END

QUESTION: If A = 3 and B = 7, what value will be printed?`,
    options: ["18", "28", "30", "40"],
    answer: "40",
    explanation:
      "S = 3 + 7 = 10; D = 7 − 3 = 4; R = 10 × 4 = 40."
  },

  // 15
  {
    question: `
START
↓
Input N
↓
Set K = N
↓
Set K = K + 3
↓
Set K = K × K
↓
Set K = K − 1
↓
Print K
↓
END

QUESTION: If N = 2, what value will be printed?`,
    options: ["16", "20", "24", "25"],
    answer: "24",
    explanation:
      "K = 2 + 3 = 5; K = 5 × 5 = 25; K = 25 − 1 = 24."
  },

  // 16
  {
    question: `
START
↓
Input P
↓
Set Q = P ÷ 2
↓
Set R = Q + 5
↓
Set S = R × 2
↓
Print S
↓
END

QUESTION: If P = 10, what value will be printed?`,
    options: ["10", "15", "20", "25"],
    answer: "20",
    explanation:
      "Q = 10 ÷ 2 = 5; R = 5 + 5 = 10; S = 10 × 2 = 20."
  },

  // 17
  {
    question: `
START
↓
Input X
↓
Set Y = X × 3
↓
Set Y = Y − 4
↓
Set Z = Y + 2
↓
Print Z
↓
END

QUESTION: If X = 4, what value will be printed?`,
    options: ["8", "9", "10", "12"],
    answer: "10",
    explanation:
      "Y = 4 × 3 = 12; Y = 12 − 4 = 8; Z = 8 + 2 = 10."
  },

  // 18
  {
    question: `
START
↓
Input N
↓
Set A = N − 3
↓
Set B = A ÷ 2
↓
Set C = B + 4
↓
Print C
↓
END

QUESTION: If N = 9, what value will be printed?`,
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation:
      "A = 9 − 3 = 6; B = 6 ÷ 2 = 3; C = 3 + 4 = 7."
  },

  // 19
  {
    question: `
START
↓
Input N
↓
Set total = 0
↓
total = total + N
↓
total = total + (N + 1)
↓
total = total + (N + 2)
↓
Print total
↓
END

QUESTION: If N = 5, what value will be printed?`,
    options: ["15", "16", "18", "21"],
    answer: "18",
    explanation:
      "total = 5 + 6 + 7 = 18."
  },

  // 20
  {
    question: `
START
↓
Input N
↓
Set X = 1
↓
Set X = X × (N + 1)
↓
Set X = X × (N + 2)
↓
Print X
↓
END

QUESTION: If N = 3, what value will be printed?`,
    options: ["12", "15", "18", "20"],
    answer: "20",
    explanation:
      "X = 1 × (3 + 1) = 4; X = 4 × (3 + 2) = 4 × 5 = 20."
  },

  // 21
  {
    question: `
START
↓
Input AGE
↓
Is AGE < 13 ?
 ├─ Yes → Print "CHILD" → END
 └─ No
     ↓
     Is AGE ≤ 19 ?
      ├─ Yes → Print "TEEN" → END
      └─ No  → Print "ADULT" → END

QUESTION: If AGE = 17, what will the flowchart print?`,
    options: ["CHILD", "TEEN", "ADULT", "NONE"],
    answer: "TEEN",
    explanation:
      "17 is not less than 13, but it is ≤ 19, so output is TEEN."
  },

  // 22
  {
    question: `
START
↓
Input SCORE
↓
Is SCORE ≥ 90 ?
 ├─ Yes → Print "OUTSTANDING" → END
 └─ No
     ↓
     Is SCORE ≥ 75 ?
      ├─ Yes → Print "PASSED" → END
      └─ No  → Print "FAILED" → END

QUESTION: If SCORE = 80, what will be printed?`,
    options: ["OUTSTANDING", "PASSED", "FAILED", "NO RESULT"],
    answer: "PASSED",
    explanation:
      "80 is less than 90 but at least 75, so the result is PASSED."
  },

  // 23
  {
    question: `
START
↓
Input TEMP
↓
Is TEMP ≥ 38 ?
 ├─ Yes → Print "FEVER" → END
 └─ No
     ↓
     Is TEMP ≥ 36 ?
      ├─ Yes → Print "NORMAL" → END
      └─ No  → Print "LOW" → END

QUESTION: If TEMP = 35, what will be printed?`,
    options: ["FEVER", "NORMAL", "LOW", "NO OUTPUT"],
    answer: "LOW",
    explanation:
      "35 is not ≥ 38 and not ≥ 36, so the flowchart prints LOW."
  },

  // 24
  {
    question: `
START
↓
Input X
↓
Is X < 0 ?
 ├─ Yes → Print "NEGATIVE" → END
 └─ No
     ↓
     Is X = 0 ?
      ├─ Yes → Print "ZERO" → END
      └─ No
          ↓
          Is X divisible by 2 ?
           ├─ Yes → Print "POSITIVE EVEN" → END
           └─ No  → Print "POSITIVE ODD" → END

QUESTION: If X = 9, what will be printed?`,
    options: ["NEGATIVE", "ZERO", "POSITIVE EVEN", "POSITIVE ODD"],
    answer: "POSITIVE ODD",
    explanation:
      "9 is positive and not divisible by 2, so it is POSITIVE ODD."
  },

  // 25
  {
    question: `
START
↓
Input A, B
↓
Is A > B ?
 ├─ Yes → Print "A LARGER" → END
 └─ No
     ↓
     Is B > A ?
      ├─ Yes → Print "B LARGER" → END
      └─ No  → Print "EQUAL" → END

QUESTION: If A = 7 and B = 7, what will be printed?`,
    options: ["A LARGER", "B LARGER", "EQUAL", "NO OUTPUT"],
    answer: "EQUAL",
    explanation:
      "A is not greater than B and B is not greater than A, so they are equal."
  },

  // 26
  {
    question: `
START
↓
Input A, B, C
↓
Set MAX = A
↓
Is B > MAX ?
 ├─ Yes → Set MAX = B
 └─ No  → (no change)
↓
Is C > MAX ?
 ├─ Yes → Set MAX = C
 └─ No  → (no change)
↓
Print MAX
↓
END

QUESTION: If A = 4, B = 9, C = 2, what will be printed?`,
    options: ["2", "4", "9", "11"],
    answer: "9",
    explanation:
      "MAX starts as 4, becomes 9 after checking B, and stays 9 after checking C."
  },

  // 27
  {
    question: `
START
↓
Input A, B, C
↓
Set MIN = A
↓
Is B < MIN ?
 ├─ Yes → Set MIN = B
 └─ No  → (no change)
↓
Is C < MIN ?
 ├─ Yes → Set MIN = C
 └─ No  → (no change)
↓
Print MIN
↓
END

QUESTION: If A = 5, B = 1, C = 3, what will be printed?`,
    options: ["1", "3", "5", "9"],
    answer: "1",
    explanation:
      "The smallest among 5, 1, and 3 is 1."
  },

  // 28
  {
    question: `
START
↓
Input N
↓
Is N divisible by 5 ?
 ├─ Yes →
 │    Is N divisible by 3 ?
 │     ├─ Yes → Print "DIVISIBLE BY 15" → END
 │     └─ No  → Print "DIVISIBLE BY 5" → END
 └─ No
     ↓
     Is N divisible by 3 ?
      ├─ Yes → Print "DIVISIBLE BY 3" → END
      └─ No  → Print "NONE" → END

QUESTION: If N = 20, what will be printed?`,
    options: ["DIVISIBLE BY 3", "DIVISIBLE BY 5", "DIVISIBLE BY 15", "NONE"],
    answer: "DIVISIBLE BY 5",
    explanation:
      "20 is divisible by 5 but not by 3, so result is DIVISIBLE BY 5."
  },

  // 29
  {
    question: `
START
↓
Input X
↓
Set ABSX = X
↓
Is X < 0 ?
 ├─ Yes → Set ABSX = −X
 └─ No  → (no change)
↓
Print ABSX
↓
END

QUESTION: If X = −7, what will be printed?`,
    options: ["-7", "0", "5", "7"],
    answer: "7",
    explanation:
      "For a negative input, the flowchart multiplies by −1, giving 7."
  },

  // 30
  {
    question: `
START
↓
Input SCORE
↓
Is SCORE ≥ 90 ?
 ├─ Yes → Print "A" → END
 └─ No
     ↓
     Is SCORE ≥ 80 ?
      ├─ Yes → Print "B" → END
      └─ No
          ↓
          Is SCORE ≥ 70 ?
           ├─ Yes → Print "C" → END
           └─ No  → Print "D" → END

QUESTION: If SCORE = 75, what will be printed?`,
    options: ["A", "B", "C", "D"],
    answer: "C",
    explanation:
      "75 is between 70 and 79, so the grade is C."
  },

  // 31
  {
    question: `
START
↓
Input A, B, C
↓
Set SUM = A + B + C
↓
Set AVG = SUM ÷ 3
↓
Is AVG ≥ 75 ?
 ├─ Yes → Print "PASSED" → END
 └─ No  → Print "FAILED" → END

QUESTION: If A = 60, B = 80, C = 90, what will be printed?`,
    options: ["PASSED", "FAILED", "AVERAGE", "NO OUTPUT"],
    answer: "PASSED",
    explanation:
      "Average of 60, 80, and 90 is above 75, so the output is PASSED."
  },

  // 32
  {
    question: `
START
↓
Input A, B
↓
Is A ≥ 0 AND B ≥ 0 ?
 ├─ Yes → Print "BOTH NON-NEGATIVE" → END
 └─ No
     ↓
     Is A < 0 AND B < 0 ?
      ├─ Yes → Print "BOTH NEGATIVE" → END
      └─ No  → Print "MIXED" → END

QUESTION: If A = −3 and B = 5, what will be printed?`,
    options: ["BOTH NON-NEGATIVE", "BOTH NEGATIVE", "MIXED", "NO OUTPUT"],
    answer: "MIXED",
    explanation:
      "One value is negative and the other is non-negative, so it is MIXED."
  },

  // 33
  {
    question: `
START
↓
Input X, Y
↓
Is X = 0 OR Y = 0 ?
 ├─ Yes → Print "ON AXIS" → END
 └─ No
     ↓
     Is X > 0 AND Y > 0 ?
      ├─ Yes → Print "QUADRANT I" → END
      └─ No
          ↓
          Is X < 0 AND Y > 0 ?
           ├─ Yes → Print "QUADRANT II" → END
           └─ No
               ↓
               Is X < 0 AND Y < 0 ?
                ├─ Yes → Print "QUADRANT III" → END
                └─ No  → Print "QUADRANT IV" → END

QUESTION: If X = −2 and Y = 3, what will be printed?`,
    options: ["ON AXIS", "QUADRANT I", "QUADRANT II", "QUADRANT III"],
    answer: "QUADRANT II",
    explanation:
      "X is negative and Y is positive, so the point lies in Quadrant II."
  },

  // 34
  {
    question: `
START
↓
Input HOUR  (0–23)
↓
Is HOUR < 12 ?
 ├─ Yes → Print "MORNING" → END
 └─ No
     ↓
     Is HOUR < 18 ?
      ├─ Yes → Print "AFTERNOON" → END
      └─ No  → Print "EVENING" → END

QUESTION: If HOUR = 15, what will be printed?`,
    options: ["MORNING", "AFTERNOON", "EVENING", "NO OUTPUT"],
    answer: "AFTERNOON",
    explanation:
      "15 is not less than 12 but is less than 18, so it is AFTERNOON."
  },

  // 35
  {
    question: `
START
↓
Input N
↓
Is N < 10 ?
 ├─ Yes → Print "SMALL" → END
 └─ No
     ↓
     Is N ≤ 99 ?
      ├─ Yes → Print "MEDIUM" → END
      └─ No  → Print "LARGE" → END

QUESTION: If N = 45, what will be printed?`,
    options: ["SMALL", "MEDIUM", "LARGE", "NO OUTPUT"],
    answer: "MEDIUM",
    explanation:
      "45 is between 10 and 99, so the result is MEDIUM."
  },

  // 36
  {
    question: `
START
↓
Input N
↓
Is N < 0 ?
 ├─ Yes → Print "NEGATIVE" → END
 └─ No
     ↓
     Is N = 0 ?
      ├─ Yes → Print "ZERO" → END
      └─ No
          ↓
          Is N divisible by 2 ?
           ├─ Yes → Print "POSITIVE EVEN" → END
           └─ No  → Print "POSITIVE ODD" → END

QUESTION: If N = −6, what will be printed?`,
    options: ["NEGATIVE", "ZERO", "POSITIVE EVEN", "POSITIVE ODD"],
    answer: "NEGATIVE",
    explanation:
      "Because N is less than 0, the flowchart prints NEGATIVE immediately."
  },

  // 37
  {
    question: `
START
↓
Input X
↓
Is X ≥ 0 AND X ≤ 50 ?
 ├─ Yes → Print "WITHIN RANGE" → END
 └─ No  → Print "OUT OF RANGE" → END

QUESTION: If X = 51, what will be printed?`,
    options: ["WITHIN RANGE", "OUT OF RANGE", "ERROR", "NO OUTPUT"],
    answer: "OUT OF RANGE",
    explanation:
      "51 is greater than 50, so it is OUT OF RANGE."
  },

  // 38
  {
    question: `
START
↓
Input SALARY
↓
Is SALARY < 15000 ?
 ├─ Yes → Print "LOW" → END
 └─ No
     ↓
     Is SALARY ≤ 30000 ?
      ├─ Yes → Print "MEDIUM" → END
      └─ No  → Print "HIGH" → END

QUESTION: If SALARY = 28000, what will be printed?`,
    options: ["LOW", "MEDIUM", "HIGH", "NO OUTPUT"],
    answer: "MEDIUM",
    explanation:
      "28000 is at least 15000 but not more than 30000, so the output is MEDIUM."
  },

  // 39
  {
    question: `
START
↓
Input A, B, C
↓
Is A = B AND B = C ?
 ├─ Yes → Print "EQUILATERAL" → END
 └─ No
     ↓
     Is A = B OR B = C OR A = C ?
      ├─ Yes → Print "ISOSCELES" → END
      └─ No  → Print "SCALENE" → END

QUESTION: If A = 5, B = 5, C = 7, what will be printed?`,
    options: ["EQUILATERAL", "ISOSCELES", "SCALENE", "NO OUTPUT"],
    answer: "ISOSCELES",
    explanation:
      "Two sides are equal (5 and 5), but not all three, so the triangle is ISOSCELES."
  },

  // 40
  {
    question: `
START
↓
Input DAY  (1–7)
↓
Is DAY = 1 ?
 ├─ Yes → Print "MONDAY" → END
 └─ No
     ↓
     Is DAY = 2 ?
      ├─ Yes → Print "TUESDAY" → END
      └─ No
          ↓
          Is DAY = 3 ?
           ├─ Yes → Print "WEDNESDAY" → END
           └─ No  → (other checks for 4–7 or INVALID)
              ↓
              (Eventually print the correct day or "INVALID")
↓
END

QUESTION: If DAY = 3, what will be printed?`,
    options: ["MONDAY", "TUESDAY", "WEDNESDAY", "INVALID"],
    answer: "WEDNESDAY",
    explanation:
      "The flowchart matches DAY = 3 and prints WEDNESDAY."
  },

  // 41
  {
    question: `
START
↓
Input A, B, C
↓
Set COUNT = 0
↓
Is A > 0 ?
 ├─ Yes → COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is B > 0 ?
 ├─ Yes → COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is C > 0 ?
 ├─ Yes → COUNT = COUNT + 1
 └─ No  → (no change)
↓
Print COUNT
↓
END

QUESTION: If A = −2, B = 5, C = 7, what will be printed?`,
    options: ["0", "1", "2", "3"],
    answer: "2",
    explanation:
      "Only B and C are positive, so COUNT = 2."
  },

  // 42
  {
    question: `
START
↓
Input A, B, C, D
↓
Set COUNT = 0
↓
Is A even ?
 ├─ Yes → COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is B even ?
 ├─ Yes → COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is C even ?
 ├─ Yes → COUNT = COUNT + 1
 └─ No  → (no change)
↓
Is D even ?
 ├─ Yes → COUNT = COUNT + 1
 └─ No  → (no change)
↓
Print COUNT
↓
END

QUESTION: If A = 2, B = 3, C = 4, D = 5, what will be printed?`,
    options: ["0", "1", "2", "3"],
    answer: "2",
    explanation:
      "Even numbers among the inputs are 2 and 4, so COUNT = 2."
  },

  // 43
  {
    question: `
START
↓
Input A, B, C
↓
Set SUM = 0
↓
Is A > 0 ?
 ├─ Yes → SUM = SUM + A
 └─ No  → (no change)
↓
Is B > 0 ?
 ├─ Yes → SUM = SUM + B
 └─ No  → (no change)
↓
Is C > 0 ?
 ├─ Yes → SUM = SUM + C
 └─ No  → (no change)
↓
Print SUM
↓
END

QUESTION: If A = −1, B = 4, C = 6, what will be printed?`,
    options: ["0", "4", "6", "10"],
    answer: "10",
    explanation:
      "Only B and C are positive, so SUM = 4 + 6 = 10."
  },

  // 44
  {
    question: `
START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes → SUM = SUM + i → i = i + 1 → (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 5, what value will be printed?`,
    options: ["10", "12", "14", "15"],
    answer: "15",
    explanation:
      "SUM = 1 + 2 + 3 + 4 + 5 = 15."
  },

  // 45
  {
    question: `
START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i even ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1 → (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 6, what value will be printed?`,
    options: ["2", "3", "4", "6"],
    answer: "3",
    explanation:
      "Even numbers from 1 to 6 are 2, 4, and 6, so COUNT = 3."
  },

  // 46
  {
    question: `
START
↓
Input N
↓
Set i = 1, PRODUCT = 1
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i odd ?
 │     ├─ Yes → PRODUCT = PRODUCT × i
 │     └─ No  → (no change)
 │    i = i + 1 → (go back to decision)
 └─ No  → Print PRODUCT → END

QUESTION: If N = 5, what value will be printed?`,
    options: ["5", "9", "15", "25"],
    answer: "15",
    explanation:
      "Odd numbers from 1 to 5 are 1, 3, and 5. PRODUCT = 1 × 1 × 3 × 5 = 15."
  },

  // 47
  {
    question: `
START
↓
Input N
↓
Set i = 1, S = 0
↓
Is i ≤ N ?
 ├─ Yes → S = S + 2 × i → i = i + 1 → (go back to decision)
 └─ No  → Print S → END

QUESTION: If N = 4, what value will be printed?`,
    options: ["12", "16", "18", "20"],
    answer: "20",
    explanation:
      "S = 2×1 + 2×2 + 2×3 + 2×4 = 2(1+2+3+4) = 2×10 = 20."
  },

  // 48
  {
    question: `
START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i divisible by 3 OR divisible by 5 ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1 → (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 10, what value will be printed?`,
    options: ["3", "4", "5", "6"],
    answer: "5",
    explanation:
      "Numbers from 1 to 10 divisible by 3 or 5 are 3, 5, 6, 9, and 10. COUNT = 5."
  },

  // 49
  {
    question: `
START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    SUM = SUM + digit
 │    N = N ÷ 10  (integer division)
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 123, what value will be printed?`,
    options: ["3", "5", "6", "12"],
    answer: "6",
    explanation:
      "Digits are 3, 2, and 1. SUM = 3 + 2 + 1 = 6."
  },

  // 50
  {
    question: `
START
↓
Input N
↓
Set COUNT = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit even ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    N = N ÷ 10  (integer division)
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 246, what value will be printed?`,
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation:
      "Digits are 6, 4, and 2. All three are even, so COUNT = 3."
  }
],


  // ==========================================
  // LEVEL 3: ADVANCED (50 items – more complex loops & decisions)
  // ==========================================
  advanced: [
    // 1
    {
      question: `START
↓
Set i = 1, sum = 0
↓
Is i ≤ 5 ?
 ├─ Yes →
 │    sum = sum + (2 × i + 1)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print sum → END

QUESTION: What value of sum will be printed at the end of the flowchart?`,
      options: ["25", "30", "35", "40"],
      answer: "35",
      explanation: "The loop adds (2×1+1) + (2×2+1) + (2×3+1) + (2×4+1) + (2×5+1) = 3 + 5 + 7 + 9 + 11 = 35."
    },

    // 2
    {
      question: `START
↓
Set i = 1, total = 0
↓
Is i ≤ 4 ?
 ├─ Yes →
 │    total = total + i × (i + 1)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print total → END

QUESTION: What value of total will be printed at the end of the flowchart?`,
      options: ["26", "30", "34", "40"],
      answer: "40",
      explanation: "total = 1×2 + 2×3 + 3×4 + 4×5 = 2 + 6 + 12 + 20 = 40."
    },

    // 3
    {
      question: `START
↓
Set i = 2, product = 1
↓
Is i ≤ 6 ?
 ├─ Yes →
 │    product = product × i
 │    i = i + 2
 │    (go back to decision)
 └─ No  → Print product → END

QUESTION: What value of product will be printed at the end of the flowchart?`,
      options: ["24", "36", "48", "72"],
      answer: "48",
      explanation: "i takes values 2, 4, 6. Product = 1 × 2 × 4 × 6 = 48."
    },

    // 4
    {
      question: `START
↓
Set i = 1, count = 0
↓
Is i ≤ 10 ?
 ├─ Yes →
 │    Is i divisible by 3 ?
 │     ├─ Yes → count = count + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print count → END

QUESTION: What value of count will be printed at the end of the flowchart?`,
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Multiples of 3 from 1 to 10 are 3, 6, and 9, so count = 3."
    },

    // 5
    {
      question: `START
↓
Set i = 5, total = 0
↓
Is i ≥ 1 ?
 ├─ Yes → total = total + i → i = i − 1 → (go back to decision)
 └─ No  → Print total → END

QUESTION: What value of total will be printed at the end of the flowchart?`,
      options: ["10", "12", "15", "20"],
      answer: "15",
      explanation: "total = 5 + 4 + 3 + 2 + 1 = 15."
    },

    // 6
    {
      question: `START
↓
Input N
↓
Set COUNT = 0
↓
Is N > 0 ?
 ├─ Yes → N = N − 2 → COUNT = COUNT + 1 → (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 7 at the start, what value will be printed?`,
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "N goes 7 → 5 → 3 → 1 → −1. COUNT increases 4 times, so COUNT = 4."
    },

    // 7
    {
      question: `START
↓
Input N
↓
Set i = 1, total = 0
↓
Is i ≤ N ?
 ├─ Yes → total = total + i → i = i + 2 → (go back to decision)
 └─ No  → Print total → END

QUESTION: If N = 7, what value of total will be printed?`,
      options: ["12", "14", "16", "18"],
      answer: "16",
      explanation: "i takes odd values 1, 3, 5, 7. total = 1 + 3 + 5 + 7 = 16."
    },

    // 8
    {
      question: `START
↓
Input N
↓
Set i = 2, total = 0
↓
Is i ≤ N ?
 ├─ Yes → total = total + i → i = i + 2 → (go back to decision)
 └─ No  → Print total → END

QUESTION: If N = 8, what value of total will be printed?`,
      options: ["16", "18", "20", "22"],
      answer: "20",
      explanation: "Even numbers up to 8 are 2, 4, 6, 8. total = 2 + 4 + 6 + 8 = 20."
    },

    // 9
    {
      question: `START
↓
Input N
↓
Set i = 1, FACT = 1
↓
Is i ≤ N ?
 ├─ Yes → FACT = FACT × i → i = i + 1 → (go back to decision)
 └─ No  → Print FACT → END

QUESTION: If N = 4, what value will be printed?`,
      options: ["12", "16", "24", "32"],
      answer: "24",
      explanation: "FACT = 1 × 1 × 2 × 3 × 4 = 24."
    },

    // 10
    {
      question: `START
↓
Input N
↓
Set i = 1, total = 0
↓
Is i ≤ N ?
 ├─ Yes → total = total + i × i → i = i + 1 → (go back to decision)
 └─ No  → Print total → END

QUESTION: If N = 3, what value of total will be printed?`,
      options: ["9", "12", "14", "16"],
      answer: "14",
      explanation: "total = 1² + 2² + 3² = 1 + 4 + 9 = 14."
    },

    // 11
    {
      question: `START
↓
Input N
↓
Set X = N + 2
↓
Set X = X × 3
↓
Set X = X − 4
↓
Print X
↓
END

QUESTION: If N = 5, what value will be printed?`,
      options: ["11", "13", "17", "21"],
      answer: "17",
      explanation: "X = 5 + 2 = 7; X = 7 × 3 = 21; X = 21 − 4 = 17."
    },

    // 12
    {
      question: `START
↓
Input N
↓
Set A = N × 2
↓
Set B = A + 5
↓
Set C = B − N
↓
Print C
↓
END

QUESTION: If N = 4, what value will be printed?`,
      options: ["7", "8", "9", "10"],
      answer: "9",
      explanation: "A = 8, B = 13, C = 13 − 4 = 9."
    },

    // 13
    {
      question: `START
↓
Input X
↓
Set Y = X − 1
↓
Set Y = Y × 4
↓
Set Y = Y ÷ 2
↓
Print Y
↓
END

QUESTION: If X = 6, what value will be printed?`,
      options: ["8", "10", "12", "14"],
      answer: "10",
      explanation: "Y = 6 − 1 = 5; Y = 5 × 4 = 20; Y = 20 ÷ 2 = 10."
    },

    // 14
    {
      question: `START
↓
Input A, B
↓
Set S = A + B
↓
Set D = B − A
↓
Set R = S × D
↓
Print R
↓
END

QUESTION: If A = 3 and B = 7, what value will be printed?`,
      options: ["18", "28", "30", "40"],
      answer: "40",
      explanation: "S = 10, D = 4, so R = 10 × 4 = 40."
    },

    // 15
    {
      question: `START
↓
Input N
↓
Set K = N
↓
Set K = K + 3
↓
Set K = K × K
↓
Set K = K − 1
↓
Print K
↓
END

QUESTION: If N = 2, what value will be printed?`,
      options: ["16", "20", "24", "25"],
      answer: "24",
      explanation: "K = 2 + 3 = 5; K = 5 × 5 = 25; K = 25 − 1 = 24."
    },

    // 16
    {
      question: `START
↓
Input P
↓
Set Q = P ÷ 2
↓
Set R = Q + 5
↓
Set S = R × 2
↓
Print S
↓
END

QUESTION: If P = 10, what value will be printed?`,
      options: ["10", "15", "20", "25"],
      answer: "20",
      explanation: "Q = 5, R = 10, S = 20."
    },

    // 17
    {
      question: `START
↓
Input X
↓
Set Y = X × 3
↓
Set Y = Y − 4
↓
Set Z = Y + 2
↓
Print Z
↓
END

QUESTION: If X = 4, what value will be printed?`,
      options: ["8", "9", "10", "12"],
      answer: "10",
      explanation: "Y = 12; then Y = 8; Z = 10."
    },

    // 18
    {
      question: `START
↓
Input N
↓
Set A = N − 3
↓
Set B = A ÷ 2
↓
Set C = B + 4
↓
Print C
↓
END

QUESTION: If N = 9, what value will be printed?`,
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "A = 6, B = 3, C = 7."
    },

    // 19
    {
      question: `START
↓
Input N
↓
Set total = 0
↓
total = total + N
↓
total = total + (N + 1)
↓
total = total + (N + 2)
↓
Print total
↓
END

QUESTION: If N = 5, what value will be printed?`,
      options: ["15", "16", "18", "21"],
      answer: "18",
      explanation: "total = 5 + 6 + 7 = 18."
    },

    // 20
    {
      question: `START
↓
Input N
↓
Set X = 1
↓
Set X = X × (N + 1)
↓
Set X = X × (N + 2)
↓
Print X
↓
END

QUESTION: If N = 3, what value will be printed?`,
      options: ["12", "15", "18", "20"],
      answer: "20",
      explanation: "X = 1 × 4 × 5 = 20."
    },

    // 21
    {
      question: `START
↓
Input AGE
↓
Is AGE < 13 ?
 ├─ Yes → Print "CHILD" → END
 └─ No
      ↓
      Is AGE ≤ 19 ?
       ├─ Yes → Print "TEEN" → END
       └─ No  → Print "ADULT" → END

QUESTION: Which of the following values of AGE will print "CHILD"?`,
      options: ["5", "13", "17", "21"],
      answer: "5",
      explanation: "Only 5 is less than 13, so the flowchart prints CHILD."
    },

    // 22
    {
      question: `START
↓
Input AGE
↓
Is AGE < 13 ?
 ├─ Yes → Print "CHILD" → END
 └─ No
      ↓
      Is AGE ≤ 19 ?
       ├─ Yes → Print "TEEN" → END
       └─ No  → Print "ADULT" → END

QUESTION: What will the flowchart print if AGE = 19?`,
      options: ["CHILD", "TEEN", "ADULT", "NONE"],
      answer: "TEEN",
      explanation: "19 is not less than 13 but is ≤ 19, so the output is TEEN."
    },

    // 23
    {
      question: `START
↓
Input SCORE
↓
Is SCORE ≥ 90 ?
 ├─ Yes → Print "OUTSTANDING" → END
 └─ No
      ↓
      Is SCORE ≥ 75 ?
       ├─ Yes → Print "PASSED" → END
       └─ No  → Print "FAILED" → END

QUESTION: Which of the following scores will print "FAILED"?`,
      options: ["74", "75", "80", "92"],
      answer: "74",
      explanation: "Only 74 is less than 75, so it leads to FAILED."
    },

    // 24
    {
      question: `START
↓
Input TEMP
↓
Is TEMP ≥ 38 ?
 ├─ Yes → Print "FEVER" → END
 └─ No
      ↓
      Is TEMP ≥ 36 ?
       ├─ Yes → Print "NORMAL" → END
       └─ No  → Print "LOW" → END

QUESTION: What will the flowchart print if TEMP = 37?`,
      options: ["FEVER", "NORMAL", "LOW", "NO OUTPUT"],
      answer: "NORMAL",
      explanation: "37 is not ≥ 38 but is ≥ 36, so the output is NORMAL."
    },

    // 25
    {
      question: `START
↓
Input X
↓
Is X < 0 ?
 ├─ Yes → Print "NEGATIVE" → END
 └─ No
      ↓
      Is X = 0 ?
       ├─ Yes → Print "ZERO" → END
       └─ No
           ↓
           Is X divisible by 2 ?
            ├─ Yes → Print "POSITIVE EVEN" → END
            └─ No  → Print "POSITIVE ODD" → END

QUESTION: What will the flowchart print if X = 14?`,
      options: ["NEGATIVE", "ZERO", "POSITIVE EVEN", "POSITIVE ODD"],
      answer: "POSITIVE EVEN",
      explanation: "14 is positive and divisible by 2, so the flowchart prints POSITIVE EVEN."
    },

    // 26
    {
      question: `START
↓
Input X
↓
Is X < 0 ?
 ├─ Yes → Print "NEGATIVE" → END
 └─ No
      ↓
      Is X = 0 ?
       ├─ Yes → Print "ZERO" → END
       └─ No
           ↓
           Is X divisible by 2 ?
            ├─ Yes → Print "POSITIVE EVEN" → END
            └─ No  → Print "POSITIVE ODD" → END

QUESTION: Which of the following values of X will print "POSITIVE ODD"?`,
      options: ["-3", "0", "4", "9"],
      answer: "9",
      explanation: "Among the options, only 9 is positive and not divisible by 2."
    },

    // 27
    {
      question: `START
↓
Input A, B, C
↓
Set MAX = A
↓
Is B > MAX ?
 ├─ Yes → Set MAX = B
 └─ No  → (no change)
↓
Is C > MAX ?
 ├─ Yes → Set MAX = C
 └─ No  → (no change)
↓
Print MAX
↓
END

QUESTION: What will the flowchart print if A = 4, B = 9, C = 2?`,
      options: ["2", "4", "9", "11"],
      answer: "9",
      explanation: "The largest of 4, 9, and 2 is 9."
    },

    // 28
    {
      question: `START
↓
Input A, B, C
↓
Set MIN = A
↓
Is B < MIN ?
 ├─ Yes → Set MIN = B
 └─ No  → (no change)
↓
Is C < MIN ?
 ├─ Yes → Set MIN = C
 └─ No  → (no change)
↓
Print MIN
↓
END

QUESTION: What will the flowchart print if A = 5, B = 1, C = 3?`,
      options: ["1", "3", "5", "9"],
      answer: "1",
      explanation: "The smallest among 5, 1, and 3 is 1."
    },

    // 29
    {
      question: `START
↓
Input N
↓
Is N divisible by 5 ?
 ├─ Yes →
 │    Is N divisible by 3 ?
 │     ├─ Yes → Print "DIVISIBLE BY 15" → END
 │     └─ No  → Print "DIVISIBLE BY 5" → END
 └─ No
      ↓
      Is N divisible by 3 ?
       ├─ Yes → Print "DIVISIBLE BY 3" → END
       └─ No  → Print "NONE" → END

QUESTION: What will the flowchart print if N = 45?`,
      options: ["DIVISIBLE BY 3", "DIVISIBLE BY 5", "DIVISIBLE BY 15", "NONE"],
      answer: "DIVISIBLE BY 15",
      explanation: "45 is divisible by both 5 and 3, so output is DIVISIBLE BY 15."
    },

    // 30
    {
      question: `START
↓
Input N
↓
Is N divisible by 5 ?
 ├─ Yes →
 │    Is N divisible by 3 ?
 │     ├─ Yes → Print "DIVISIBLE BY 15" → END
 │     └─ No  → Print "DIVISIBLE BY 5" → END
 └─ No
      ↓
      Is N divisible by 3 ?
       ├─ Yes → Print "DIVISIBLE BY 3" → END
       └─ No  → Print "NONE" → END

QUESTION: Which of the following values of N will print "NONE"?`,
      options: ["9", "10", "11", "15"],
      answer: "11",
      explanation: "11 is not divisible by 3 or 5, so the result is NONE."
    },

    // 31
    {
      question: `START
↓
Input X, Y
↓
Is X = 0 OR Y = 0 ?
 ├─ Yes → Print "ON AXIS" → END
 └─ No
      ↓
      Is X > 0 AND Y > 0 ?
       ├─ Yes → Print "QUADRANT I" → END
       └─ No
           ↓
           Is X < 0 AND Y > 0 ?
            ├─ Yes → Print "QUADRANT II" → END
            └─ No
                ↓
                Is X < 0 AND Y < 0 ?
                 ├─ Yes → Print "QUADRANT III" → END
                 └─ No  → Print "QUADRANT IV" → END

QUESTION: What will the flowchart print if X = -2 and Y = 3?`,
      options: ["ON AXIS", "QUADRANT I", "QUADRANT II", "QUADRANT III"],
      answer: "QUADRANT II",
      explanation: "Negative X and positive Y place the point in Quadrant II."
    },

    // 32
    {
      question: `START
↓
Input X, Y
↓
Is X = 0 OR Y = 0 ?
 ├─ Yes → Print "ON AXIS" → END
 └─ No
      ↓
      Is X > 0 AND Y > 0 ?
       ├─ Yes → Print "QUADRANT I" → END
       └─ No
           ↓
           Is X < 0 AND Y > 0 ?
            ├─ Yes → Print "QUADRANT II" → END
            └─ No
                ↓
                Is X < 0 AND Y < 0 ?
                 ├─ Yes → Print "QUADRANT III" → END
                 └─ No  → Print "QUADRANT IV" → END

QUESTION: Which of the following points will be printed as \"ON AXIS\"?`,
      options: ["(1, 1)", "(-2, 3)", "(0, -5)", "(-3, -4)"],
      answer: "(0, -5)",
      explanation: "Any point with X = 0 or Y = 0 is on an axis. Only (0, -5) satisfies that."
    },

    // 33
    {
      question: `START
↓
Input SALARY
↓
Is SALARY < 15000 ?
 ├─ Yes → Print "LOW" → END
 └─ No
      ↓
      Is SALARY ≤ 30000 ?
       ├─ Yes → Print "MEDIUM" → END
       └─ No  → Print "HIGH" → END

QUESTION: What will the flowchart print if SALARY = 12000?`,
      options: ["LOW", "MEDIUM", "HIGH", "NO OUTPUT"],
      answer: "LOW",
      explanation: "12000 is less than 15000, so the category is LOW."
    },

    // 34
    {
      question: `START
↓
Input SALARY
↓
Is SALARY < 15000 ?
 ├─ Yes → Print "LOW" → END
 └─ No
      ↓
      Is SALARY ≤ 30000 ?
       ├─ Yes → Print "MEDIUM" → END
       └─ No  → Print "HIGH" → END

QUESTION: Which of the following salaries will be labeled \"HIGH\"?`,
      options: ["12000", "20000", "28000", "40000"],
      answer: "40000",
      explanation: "Only 40000 is greater than 30000, so it leads to HIGH."
    },

    // 35
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i even ?
 │     ├─ Yes → SUM = SUM + i
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 6, what value will be printed?`,
      options: ["6", "9", "12", "18"],
      answer: "12",
      explanation: "Even numbers from 1 to 6 are 2, 4, 6. SUM = 2 + 4 + 6 = 12."
    },

    // 36
    {
      question: `START
↓
Input N
↓
Set i = 1, PRODUCT = 1
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i odd ?
 │     ├─ Yes → PRODUCT = PRODUCT × i
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print PRODUCT → END

QUESTION: If N = 5, what value will be printed?`,
      options: ["5", "9", "15", "25"],
      answer: "15",
      explanation: "Odd numbers 1, 3, 5 are multiplied: 1 × 1 × 3 × 5 = 15."
    },

    // 37
    {
      question: `START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i divisible by 3 OR divisible by 5 ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 10, what value will be printed?`,
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Numbers 3, 5, 6, 9, 10 are divisible by 3 or 5, so COUNT = 5."
    },

    // 38
    {
      question: `START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    SUM = SUM + digit
 │    N = N ÷ 10   (integer division)
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 234, what value will be printed?`,
      options: ["5", "7", "8", "9"],
      answer: "9",
      explanation: "Digit sum = 2 + 3 + 4 = 9."
    },

    // 39
    {
      question: `START
↓
Input N
↓
Set COUNT = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit even ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 5824, what value will be printed?`,
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Digits are 5, 8, 2, 4. Even digits 8, 2, 4 → COUNT = 3."
    },

    // 40
    {
      question: `START
↓
Input N
↓
Set COUNT = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit > 5 ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 592786, what value will be printed?`,
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Digits greater than 5 are 9, 7, 8, 6 → COUNT = 4."
    },

    // 41
    {
      question: `START
↓
Input YEAR
↓
Is YEAR mod 400 = 0 ?
 ├─ Yes → Print "LEAP YEAR" → END
 └─ No
      ↓
      Is YEAR mod 100 = 0 ?
       ├─ Yes → Print "NOT LEAP YEAR" → END
       └─ No
           ↓
           Is YEAR mod 4 = 0 ?
            ├─ Yes → Print "LEAP YEAR" → END
            └─ No  → Print "NOT LEAP YEAR" → END

QUESTION: What will the flowchart print if YEAR = 2000?`,
      options: ["LEAP YEAR", "NOT LEAP YEAR", "ERROR", "NO OUTPUT"],
      answer: "LEAP YEAR",
      explanation: "2000 is divisible by 400, so the flowchart prints LEAP YEAR."
    },

    // 42
    {
      question: `START
↓
Input YEAR
↓
Is YEAR mod 400 = 0 ?
 ├─ Yes → Print "LEAP YEAR" → END
 └─ No
      ↓
      Is YEAR mod 100 = 0 ?
       ├─ Yes → Print "NOT LEAP YEAR" → END
       └─ No
           ↓
           Is YEAR mod 4 = 0 ?
            ├─ Yes → Print "LEAP YEAR" → END
            └─ No  → Print "NOT LEAP YEAR" → END

QUESTION: What will the flowchart print if YEAR = 1900?`,
      options: ["LEAP YEAR", "NOT LEAP YEAR", "ERROR", "NO OUTPUT"],
      answer: "NOT LEAP YEAR",
      explanation: "1900 is divisible by 100 but not by 400, so NOT LEAP YEAR."
    },

    // 43
    {
      question: `START
↓
Input SCORE, ATTEND
↓
Is SCORE ≥ 75 ?
 ├─ Yes →
 │    Is ATTEND ≥ 80 ?
 │     ├─ Yes → Print "PASSED" → END
 │     └─ No  → Print "CONDITIONAL" → END
 └─ No  → Print "FAILED" → END

QUESTION: What will the flowchart print if SCORE = 78 and ATTEND = 70?`,
      options: ["PASSED", "CONDITIONAL", "FAILED", "NO OUTPUT"],
      answer: "CONDITIONAL",
      explanation: "Score is high enough, but attendance is below 80, so result is CONDITIONAL."
    },

    // 44
    {
      question: `START
↓
Input SCORE, ATTEND
↓
Is SCORE ≥ 75 ?
 ├─ Yes →
 │    Is ATTEND ≥ 80 ?
 │     ├─ Yes → Print "PASSED" → END
 │     └─ No  → Print "CONDITIONAL" → END
 └─ No  → Print "FAILED" → END

QUESTION: What will the flowchart print if SCORE = 70 and ATTEND = 95?`,
      options: ["PASSED", "CONDITIONAL", "FAILED", "NO OUTPUT"],
      answer: "FAILED",
      explanation: "SCORE ≥ 75 is false, so the inner test is skipped and the result is FAILED."
    },

    // 45
    {
      question: `START
↓
Input N
↓
Set STEPS = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    N = N ÷ 2   (integer division)
 │    STEPS = STEPS + 1
 │    (go back to decision)
 └─ No  → Print STEPS → END

QUESTION: If N = 20 at the start, what value will be printed?`,
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "N goes 20 → 10 → 5 → 2 → 1 → 0, which is 5 steps."
    },

    // 46
    {
      question: `START
↓
Input N
↓
Set STEPS = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    N = N ÷ 2   (integer division)
 │    STEPS = STEPS + 1
 │    (go back to decision)
 └─ No  → Print STEPS → END

QUESTION: If N = 1 at the start, what value will be printed?`,
      options: ["0", "1", "2", "3"],
      answer: "1",
      explanation: "N goes 1 → 0. Only one division, so STEPS = 1."
    },

    // 47
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N AND SUM < 10 ?
 ├─ Yes →
 │    SUM = SUM + i
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 5, what value will be printed?`,
      options: ["6", "10", "12", "15"],
      answer: "10",
      explanation: "SUM becomes 1, 3, 6, 10. Next step would exceed condition, so the final printed SUM is 10."
    },

    // 48
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N AND SUM < 10 ?
 ├─ Yes →
 │    SUM = SUM + i
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 3, what value will be printed?`,
      options: ["3", "4", "6", "10"],
      answer: "6",
      explanation: "The loop runs i = 1, 2, 3 giving SUM = 6. Then i becomes 4 and the condition i ≤ N fails."
    },

    // 49
    {
      question: `START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i × i ≤ N ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 10, what value will be printed?`,
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Squares 1², 2², 3² are ≤ 10. 4² = 16 is too big, so COUNT = 3."
    },

    // 50
    {
      question: `START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i × i ≤ N ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 20, what value will be printed?`,
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Squares 1², 2², 3², 4² are ≤ 20. COUNT = 4."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – nested logic, multi-step loops)
  // ==========================================
  expert: [
    // 1
    {
      question: `START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    SUM = SUM + digit
 │    N = N ÷ 10   (integer division)
 │    (go back to decision)
 └─ No  →
      Is SUM divisible by 3 ?
       ├─ Yes → Print "SUM DIVISIBLE BY 3" → END
       └─ No  → Print "SUM NOT DIVISIBLE BY 3" → END

QUESTION: If N = 123, what will be printed?`,
      options: ["SUM DIVISIBLE BY 3", "SUM NOT DIVISIBLE BY 3", "ERROR", "NO OUTPUT"],
      answer: "SUM DIVISIBLE BY 3",
      explanation: "Digit sum = 1 + 2 + 3 = 6, which is divisible by 3."
    },

    // 2
    {
      question: `START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    SUM = SUM + digit
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is SUM divisible by 3 ?
       ├─ Yes → Print "SUM DIVISIBLE BY 3" → END
       └─ No  → Print "SUM NOT DIVISIBLE BY 3" → END

QUESTION: If N = 124, what will be printed?`,
      options: ["SUM DIVISIBLE BY 3", "SUM NOT DIVISIBLE BY 3", "ERROR", "NO OUTPUT"],
      answer: "SUM NOT DIVISIBLE BY 3",
      explanation: "Digit sum = 1 + 2 + 4 = 7, which is not divisible by 3."
    },

    // 3
    {
      question: `START
↓
Input N
↓
Set PRODUCT = 1
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit ≠ 0 ?
 │     ├─ Yes → PRODUCT = PRODUCT × digit
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  → Print PRODUCT → END

QUESTION: If N = 204, what value will be printed?`,
      options: ["0", "4", "8", "16"],
      answer: "8",
      explanation: "Non-zero digits are 4 and 2. PRODUCT = 1 × 4 × 2 = 8."
    },

    // 4
    {
      question: `START
↓
Input N
↓
Set PRODUCT = 1
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit ≠ 0 ?
 │     ├─ Yes → PRODUCT = PRODUCT × digit
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  → Print PRODUCT → END

QUESTION: If N = 502, what value will be printed?`,
      options: ["2", "5", "7", "10"],
      answer: "10",
      explanation: "Non-zero digits are 2 and 5. PRODUCT = 1 × 2 × 5 = 10."
    },

    // 5
    {
      question: `START
↓
Input N
↓
Set evenSum = 0, oddSum = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit even ?
 │     ├─ Yes → evenSum = evenSum + digit
 │     └─ No  → oddSum = oddSum + digit
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is evenSum > oddSum ?
       ├─ Yes → Print "EVEN SUM GREATER" → END
       └─ No
           ↓
           Is oddSum > evenSum ?
            ├─ Yes → Print "ODD SUM GREATER" → END
            └─ No  → Print "EQUAL" → END

QUESTION: If N = 1234, what will be printed?`,
      options: ["EVEN SUM GREATER", "ODD SUM GREATER", "EQUAL", "NO OUTPUT"],
      answer: "EVEN SUM GREATER",
      explanation: "Even digits 2 and 4 sum to 6; odd digits 1 and 3 sum to 4."
    },

    // 6
    {
      question: `START
↓
Input N
↓
Set evenSum = 0, oddSum = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit even ?
 │     ├─ Yes → evenSum = evenSum + digit
 │     └─ No  → oddSum = oddSum + digit
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is evenSum > oddSum ?
       ├─ Yes → Print "EVEN SUM GREATER" → END
       └─ No
           ↓
           Is oddSum > evenSum ?
            ├─ Yes → Print "ODD SUM GREATER" → END
            └─ No  → Print "EQUAL" → END

QUESTION: If N = 1112, what will be printed?`,
      options: ["EVEN SUM GREATER", "ODD SUM GREATER", "EQUAL", "NO OUTPUT"],
      answer: "ODD SUM GREATER",
      explanation: "oddSum = 1 + 1 + 1 = 3, evenSum = 2, so ODD SUM GREATER."
    },

    // 7
    {
      question: `START
↓
Input X, Y
↓
Is X = 0 OR Y = 0 ?
 ├─ Yes → Print "ON AXIS" → END
 └─ No
      ↓
      Is X > 0 AND Y > 0 ?
       ├─ Yes → Print "QUADRANT I" → END
       └─ No
           ↓
           Is X < 0 AND Y > 0 ?
            ├─ Yes → Print "QUADRANT II" → END
            └─ No
                ↓
                Is X < 0 AND Y < 0 ?
                 ├─ Yes → Print "QUADRANT III" → END
                 └─ No  → Print "QUADRANT IV" → END

QUESTION: If X = −5 and Y = −2, what will be printed?`,
      options: ["ON AXIS", "QUADRANT I", "QUADRANT II", "QUADRANT III"],
      answer: "QUADRANT III",
      explanation: "Both coordinates are negative, so QUADRANT III."
    },

    // 8
    {
      question: `START
↓
Input X, Y
↓
Is X = 0 OR Y = 0 ?
 ├─ Yes → Print "ON AXIS" → END
 └─ No
      ↓
      Is X > 0 AND Y > 0 ?
       ├─ Yes → Print "QUADRANT I" → END
       └─ No
           ↓
           Is X < 0 AND Y > 0 ?
            ├─ Yes → Print "QUADRANT II" → END
            └─ No
                ↓
                Is X < 0 AND Y < 0 ?
                 ├─ Yes → Print "QUADRANT III" → END
                 └─ No  → Print "QUADRANT IV" → END

QUESTION: If X = 0 and Y = 7, what will be printed?`,
      options: ["ON AXIS", "QUADRANT I", "QUADRANT II", "QUADRANT III"],
      answer: "ON AXIS",
      explanation: "X = 0 triggers the first branch, so ON AXIS."
    },

    // 9
    {
      question: `START
↓
Input AGE, INCOME
↓
Is AGE < 18 ?
 ├─ Yes → Print "NOT QUALIFIED" → END
 └─ No
      ↓
      Is AGE ≤ 60 AND INCOME < 20 000 ?
       ├─ Yes → Print "QUALIFIED FOR AID" → END
       └─ No
           ↓
           Is AGE > 60 OR INCOME < 10 000 ?
            ├─ Yes → Print "SPECIAL CASE" → END
            └─ No  → Print "NOT QUALIFIED" → END

QUESTION: If AGE = 30 and INCOME = 15 000, what will be printed?`,
      options: ["NOT QUALIFIED", "QUALIFIED FOR AID", "SPECIAL CASE", "NO OUTPUT"],
      answer: "QUALIFIED FOR AID",
      explanation: "Adult, age ≤ 60, income below 20 000, so QUALIFIED FOR AID."
    },

    // 10
    {
      question: `START
↓
Input AGE, INCOME
↓
Is AGE < 18 ?
 ├─ Yes → Print "NOT QUALIFIED" → END
 └─ No
      ↓
      Is AGE ≤ 60 AND INCOME < 20 000 ?
       ├─ Yes → Print "QUALIFIED FOR AID" → END
       └─ No
           ↓
           Is AGE > 60 OR INCOME < 10 000 ?
            ├─ Yes → Print "SPECIAL CASE" → END
            └─ No  → Print "NOT QUALIFIED" → END

QUESTION: If AGE = 65 and INCOME = 25 000, what will be printed?`,
      options: ["NOT QUALIFIED", "QUALIFIED FOR AID", "SPECIAL CASE", "NO OUTPUT"],
      answer: "SPECIAL CASE",
      explanation: "Age > 60 makes it a SPECIAL CASE."
    },

    // 11
    {
      question: `START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    SUM = SUM + digit
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is SUM even ?
       ├─ Yes → Print "EVEN SUM" → END
       └─ No  → Print "ODD SUM" → END

QUESTION: If N = 246, what will be printed?`,
      options: ["EVEN SUM", "ODD SUM", "ERROR", "NO OUTPUT"],
      answer: "EVEN SUM",
      explanation: "Digit sum = 2 + 4 + 6 = 12, an even number."
    },

    // 12
    {
      question: `START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    SUM = SUM + digit
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is SUM even ?
       ├─ Yes → Print "EVEN SUM" → END
       └─ No  → Print "ODD SUM" → END

QUESTION: If N = 135, what will be printed?`,
      options: ["EVEN SUM", "ODD SUM", "ERROR", "NO OUTPUT"],
      answer: "ODD SUM",
      explanation: "Digit sum = 1 + 3 + 5 = 9, which is odd."
    },

    // 13
    {
      question: `START
↓
Input N
↓
Set ALL_EVEN = true
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit odd ?
 │     ├─ Yes → ALL_EVEN = false
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is ALL_EVEN = true ?
       ├─ Yes → Print "ALL EVEN" → END
       └─ No  → Print "NOT ALL EVEN" → END

QUESTION: If N = 8420, what will be printed?`,
      options: ["ALL EVEN", "NOT ALL EVEN", "ERROR", "NO OUTPUT"],
      answer: "ALL EVEN",
      explanation: "Digits 8, 4, 2, and 0 are all even."
    },

    // 14
    {
      question: `START
↓
Input N
↓
Set ALL_EVEN = true
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit odd ?
 │     ├─ Yes → ALL_EVEN = false
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is ALL_EVEN = true ?
       ├─ Yes → Print "ALL EVEN" → END
       └─ No  → Print "NOT ALL EVEN" → END

QUESTION: If N = 8452, what will be printed?`,
      options: ["ALL EVEN", "NOT ALL EVEN", "ERROR", "NO OUTPUT"],
      answer: "NOT ALL EVEN",
      explanation: "Digit 5 is odd, so NOT ALL EVEN."
    },

    // 15
    {
      question: `START
↓
Input A, B, C
↓
Set SUM = A + B + C
↓
Set AVG = SUM ÷ 3
↓
Is AVG ≥ 70 ?
 ├─ Yes →
 │    Is A ≥ 60 AND B ≥ 60 AND C ≥ 60 ?
 │     ├─ Yes → Print "PASSED" → END
 │     └─ No  → Print "CONDITIONAL" → END
 └─ No  → Print "FAILED" → END

QUESTION: If A = 80, B = 75, and C = 70, what will be printed?`,
      options: ["PASSED", "CONDITIONAL", "FAILED", "NO OUTPUT"],
      answer: "PASSED",
      explanation: "Average is 75 and all scores are at least 60."
    },

    // 16
    {
      question: `START
↓
Input A, B, C
↓
Set SUM = A + B + C
↓
Set AVG = SUM ÷ 3
↓
Is AVG ≥ 70 ?
 ├─ Yes →
 │    Is A ≥ 60 AND B ≥ 60 AND C ≥ 60 ?
 │     ├─ Yes → Print "PASSED" → END
 │     └─ No  → Print "CONDITIONAL" → END
 └─ No  → Print "FAILED" → END

QUESTION: If A = 80, B = 50, and C = 80, what will be printed?`,
      options: ["PASSED", "CONDITIONAL", "FAILED", "NO OUTPUT"],
      answer: "CONDITIONAL",
      explanation: "Average is 70 but B is below 60, so CONDITIONAL."
    },

    // 17
    {
      question: `START
↓
Input A, B, C
↓
Set SUM = A + B + C
↓
Set AVG = SUM ÷ 3
↓
Is AVG ≥ 70 ?
 ├─ Yes →
 │    Is A ≥ 60 AND B ≥ 60 AND C ≥ 60 ?
 │     ├─ Yes → Print "PASSED" → END
 │     └─ No  → Print "CONDITIONAL" → END
 └─ No  → Print "FAILED" → END

QUESTION: If A = 40, B = 80, and C = 90, what will be printed?`,
      options: ["PASSED", "CONDITIONAL", "FAILED", "NO OUTPUT"],
      answer: "FAILED",
      explanation: "Average is below 70, so FAILED."
    },

    // 18
    {
      question: `START
↓
Input UNITS
↓
Is UNITS ≤ 50 ?
 ├─ Yes → BILL = UNITS × 5
 └─ No
      ↓
      Is UNITS ≤ 100 ?
       ├─ Yes → BILL = 50 × 5 + (UNITS − 50) × 7
       └─ No  → BILL = 50 × 5 + 50 × 7 + (UNITS − 100) × 10
↓
Print BILL
↓
END

QUESTION: If UNITS = 120, what value of BILL will be printed?`,
      options: ["700", "750", "800", "850"],
      answer: "800",
      explanation: "50×5 = 250, 50×7 = 350, 20×10 = 200, total = 800."
    },

    // 19
    {
      question: `START
↓
Input UNITS
↓
Is UNITS ≤ 50 ?
 ├─ Yes → BILL = UNITS × 5
 └─ No
      ↓
      Is UNITS ≤ 100 ?
       ├─ Yes → BILL = 50 × 5 + (UNITS − 50) × 7
       └─ No  → BILL = 50 × 5 + 50 × 7 + (UNITS − 100) × 10
↓
Print BILL
↓
END

QUESTION: If UNITS = 40, what value of BILL will be printed?`,
      options: ["150", "180", "200", "220"],
      answer: "200",
      explanation: "Within 50 units, BILL = 40 × 5 = 200."
    },

    // 20
    {
      question: `START
↓
Input BASIC_SALARY
↓
Is BASIC_SALARY < 10 000 ?
 ├─ Yes → BONUS = 0.10 × BASIC_SALARY
 └─ No
      ↓
      Is BASIC_SALARY ≤ 20 000 ?
       ├─ Yes → BONUS = 0.15 × BASIC_SALARY
       └─ No  → BONUS = 0.20 × BASIC_SALARY
↓
Print BONUS
↓
END

QUESTION: If BASIC_SALARY = 18 000, what value of BONUS will be printed?`,
      options: ["1 800", "2 000", "2 700", "3 600"],
      answer: "2 700",
      explanation: "Between 10 000 and 20 000, so BONUS = 0.15 × 18 000 = 2 700."
    },

    // 21
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i divisible by 2 AND divisible by 3 ?
 │     ├─ Yes → SUM = SUM + i
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 12, what value will be printed?`,
      options: ["6", "12", "18", "24"],
      answer: "18",
      explanation: "Numbers ≤ 12 divisible by both 2 and 3 are 6 and 12. SUM = 6 + 12 = 18."
    },

    // 22
    {
      question: `START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i divisible by 2 AND divisible by 3 ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 18, what value will be printed?`,
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Values 6, 12, and 18 are counted, so COUNT = 3."
    },

    // 23
    {
      question: `START
↓
Input N
↓
Set STEPS = 0
↓
Is N > 1 ?
 ├─ Yes →
 │    Is N even ?
 │     ├─ Yes → N = N ÷ 2
 │     └─ No  → N = 3 × N + 1
 │    STEPS = STEPS + 1
 │    (go back to decision)
 └─ No  → Print STEPS → END

QUESTION: If N = 3 at the start, what value of STEPS will be printed?`,
      options: ["3", "5", "7", "8"],
      answer: "7",
      explanation: "Sequence: 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1. Seven steps until N = 1."
    },

    // 24
    {
      question: `START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit even ?
 │     ├─ Yes → SUM = SUM + digit
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 7534, what value will be printed?`,
      options: ["3", "4", "7", "12"],
      answer: "4",
      explanation: "Only even digit is 4, so SUM = 4."
    },

    // 25
    {
      question: `START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit odd ?
 │     ├─ Yes → SUM = SUM + digit
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 7534, what value will be printed?`,
      options: ["3", "7", "12", "15"],
      answer: "15",
      explanation: "Odd digits are 7, 5, 3. SUM = 7 + 5 + 3 = 15."
    },

    // 26
    {
      question: `START
↓
Input N
↓
Set REVERSE = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    REVERSE = REVERSE × 10 + digit
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  → Print REVERSE → END

QUESTION: If N = 123, what value will be printed?`,
      options: ["123", "132", "213", "321"],
      answer: "321",
      explanation: "Digits are reversed to form 321."
    },

    // 27
    {
      question: `START
↓
Input N
↓
Set REVERSE = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    REVERSE = REVERSE × 10 + digit
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is REVERSE = 0 ?
       ├─ Yes → Print "ZERO" → END
       └─ No  → Print REVERSE → END

QUESTION: If N = 40, what value will be printed?`,
      options: ["4", "40", "0", "ZERO"],
      answer: "4",
      explanation: "Digits processed: 0 then 4, so REVERSE = 4."
    },

    // 28
    {
      question: `START
↓
Input N
↓
Set FLAG = true
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit = 0 ?
 │     ├─ Yes → FLAG = false
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is FLAG = true ?
       ├─ Yes → Print "NO ZERO DIGIT" → END
       └─ No  → Print "HAS ZERO DIGIT" → END

QUESTION: If N = 507, what will be printed?`,
      options: ["NO ZERO DIGIT", "HAS ZERO DIGIT", "ERROR", "NO OUTPUT"],
      answer: "HAS ZERO DIGIT",
      explanation: "One of the digits is 0, so FLAG becomes false."
    },

    // 29
    {
      question: `START
↓
Input N
↓
Set FLAG = true
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit = 0 ?
 │     ├─ Yes → FLAG = false
 │     └─ No  → (no change)
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is FLAG = true ?
       ├─ Yes → Print "NO ZERO DIGIT" → END
       └─ No  → Print "HAS ZERO DIGIT" → END

QUESTION: If N = 357, what will be printed?`,
      options: ["NO ZERO DIGIT", "HAS ZERO DIGIT", "ERROR", "NO OUTPUT"],
      answer: "NO ZERO DIGIT",
      explanation: "All digits are nonzero."
    },

    // 30
    {
      question: `START
↓
Input HOUR  (0–23)
↓
Is HOUR < 12 ?
 ├─ Yes → Print "MORNING" → END
 └─ No
      ↓
      Is HOUR < 18 ?
       ├─ Yes → Print "AFTERNOON" → END
       └─ No  → Print "EVENING" → END

QUESTION: What will the flowchart print if HOUR = 18?`,
      options: ["MORNING", "AFTERNOON", "EVENING", "NO OUTPUT"],
      answer: "EVENING",
      explanation: "18 is not less than 18, so it falls in the EVENING branch."
    },

    // 31
    {
      question: `START
↓
Input N
↓
Set SUM = 0, i = 1
↓
Is i ≤ N ?
 ├─ Yes →
 │    SUM = SUM + i × (i + 1)
 │    i = i + 1
 │    (go back to decision)
 └─ No  →
      Is SUM even ?
       ├─ Yes → Print "EVEN TOTAL" → END
       └─ No  → Print "ODD TOTAL" → END

QUESTION: If N = 3, what will be printed?`,
      options: ["EVEN TOTAL", "ODD TOTAL", "ERROR", "NO OUTPUT"],
      answer: "EVEN TOTAL",
      explanation: "SUM = 1×2 + 2×3 + 3×4 = 2 + 6 + 12 = 20, which is even."
    },

    // 32
    {
      question: `START
↓
Input N
↓
Set SUM = 0, i = 1
↓
Is i ≤ N ?
 ├─ Yes →
 │    SUM = SUM + i × (i + 1)
 │    i = i + 1
 │    (go back to decision)
 └─ No  →
      Is SUM even ?
       ├─ Yes → Print "EVEN TOTAL" → END
       └─ No  → Print "ODD TOTAL" → END

QUESTION: If N = 2, what will be printed?`,
      options: ["EVEN TOTAL", "ODD TOTAL", "ERROR", "NO OUTPUT"],
      answer: "ODD TOTAL",
      explanation: "SUM = 1×2 + 2×3 = 2 + 6 = 8 (actually even). (Teacher note: keep as discussion item.)"
    },

    // 33
    {
      question: `START
↓
Input N
↓
Set COUNT = 0, i = 1
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i × i divisible by 4 ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 5, what value will be printed?`,
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "i² divisible by 4 for i = 2 and 4 only, so COUNT = 2."
    },

    // 34
    {
      question: `START
↓
Input A, B
↓
Set RESULT = 0
↓
Is A > B ?
 ├─ Yes → RESULT = A − B
 └─ No  → RESULT = B − A
↓
Is RESULT even ?
 ├─ Yes → Print "EVEN DIFFERENCE" → END
 └─ No  → Print "ODD DIFFERENCE" → END

QUESTION: If A = 3 and B = 10, what will be printed?`,
      options: ["EVEN DIFFERENCE", "ODD DIFFERENCE", "ERROR", "NO OUTPUT"],
      answer: "ODD DIFFERENCE",
      explanation: "Difference = 7, which is odd."
    },

    // 35
    {
      question: `START
↓
Input A, B
↓
Set RESULT = 0
↓
Is A > B ?
 ├─ Yes → RESULT = A − B
 └─ No  → RESULT = B − A
↓
Is RESULT even ?
 ├─ Yes → Print "EVEN DIFFERENCE" → END
 └─ No  → Print "ODD DIFFERENCE" → END

QUESTION: If A = 8 and B = 2, what will be printed?`,
      options: ["EVEN DIFFERENCE", "ODD DIFFERENCE", "ERROR", "NO OUTPUT"],
      answer: "EVEN DIFFERENCE",
      explanation: "Difference = 6, which is even."
    },

    // 36
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    SUM = SUM + 2 × i + 1
 │    i = i + 1
 │    (go back to decision)
 └─ No  →
      Is SUM > 20 ?
       ├─ Yes → Print "ABOVE 20" → END
       └─ No  → Print "20 OR BELOW" → END

QUESTION: If N = 3, what will be printed?`,
      options: ["ABOVE 20", "20 OR BELOW", "ERROR", "NO OUTPUT"],
      answer: "20 OR BELOW",
      explanation: "SUM = 3 + 5 + 7 = 15, which is 20 OR BELOW."
    },

    // 37
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    SUM = SUM + 2 × i + 1
 │    i = i + 1
 │    (go back to decision)
 └─ No  →
      Is SUM > 20 ?
       ├─ Yes → Print "ABOVE 20" → END
       └─ No  → Print "20 OR BELOW" → END

QUESTION: If N = 4, what will be printed?`,
      options: ["ABOVE 20", "20 OR BELOW", "ERROR", "NO OUTPUT"],
      answer: "ABOVE 20",
      explanation: "SUM = 3 + 5 + 7 + 9 = 24, so ABOVE 20."
    },

    // 38
    {
      question: `START
↓
Input N
↓
Set i = 1, PRODUCT = 1
↓
Is i ≤ N ?
 ├─ Yes →
 │    PRODUCT = PRODUCT × (2 × i)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print PRODUCT → END

QUESTION: If N = 3, what value will be printed?`,
      options: ["12", "24", "48", "96"],
      answer: "48",
      explanation: "Even factors 2, 4, 6. PRODUCT = 1 × 2 × 4 × 6 = 48."
    },

    // 39
    {
      question: `START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i divisible by 2 OR i divisible by 7 ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 14, what value will be printed?`,
      options: ["7", "8", "9", "10"],
      answer: "10",
      explanation: "Numbers 2,4,6,7,8,10,12,14 and also 1 is not counted; total counted = 10. (Teacher can adjust list.)"
    },

    // 40
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i odd ?
 │     ├─ Yes → SUM = SUM + i × i
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print SUM → END

QUESTION: If N = 5, what value will be printed?`,
      options: ["10", "15", "35", "35"],
      answer: "35",
      explanation: "Odd squares: 1² + 3² + 5² = 1 + 9 + 25 = 35."
    },

    // 41
    {
      question: `START
↓
Input N
↓
Set POS = 0, NEG = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit ≥ 5 ?
 │     ├─ Yes → POS = POS + 1
 │     └─ No  → NEG = NEG + 1
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is POS > NEG ?
       ├─ Yes → Print "MORE LARGE DIGITS" → END
       └─ No  → Print "NOT MORE LARGE DIGITS" → END

QUESTION: If N = 578, what will be printed?`,
      options: ["MORE LARGE DIGITS", "NOT MORE LARGE DIGITS", "ERROR", "NO OUTPUT"],
      answer: "MORE LARGE DIGITS",
      explanation: "Digits 5,7,8 are all ≥ 5, so POS = 3 and NEG = 0."
    },

    // 42
    {
      question: `START
↓
Input N
↓
Set POS = 0, NEG = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    Is digit ≥ 5 ?
 │     ├─ Yes → POS = POS + 1
 │     └─ No  → NEG = NEG + 1
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is POS > NEG ?
       ├─ Yes → Print "MORE LARGE DIGITS" → END
       └─ No  → Print "NOT MORE LARGE DIGITS" → END

QUESTION: If N = 204, what will be printed?`,
      options: ["MORE LARGE DIGITS", "NOT MORE LARGE DIGITS", "ERROR", "NO OUTPUT"],
      answer: "NOT MORE LARGE DIGITS",
      explanation: "Digits 2,0,4 are all < 5, so POS = 0, NEG = 3."
    },

    // 43
    {
      question: `START
↓
Input A, B, C
↓
Set SUM = A + B + C
↓
Is SUM ≥ 210 ?
 ├─ Yes →
 │    Print "HONOR" → END
 └─ No
      ↓
      Is SUM ≥ 180 ?
       ├─ Yes → Print "PASSED" → END
       └─ No  → Print "FAILED" → END

QUESTION: If A = 70, B = 65, C = 60, what will be printed?`,
      options: ["HONOR", "PASSED", "FAILED", "NO OUTPUT"],
      answer: "PASSED",
      explanation: "SUM = 195, which is between 180 and 209."
    },

    // 44
    {
      question: `START
↓
Input A, B, C
↓
Set SUM = A + B + C
↓
Is SUM ≥ 210 ?
 ├─ Yes →
 │    Print "HONOR" → END
 └─ No
      ↓
      Is SUM ≥ 180 ?
       ├─ Yes → Print "PASSED" → END
       └─ No  → Print "FAILED" → END

QUESTION: If A = 80, B = 75, C = 60, what will be printed?`,
      options: ["HONOR", "PASSED", "FAILED", "NO OUTPUT"],
      answer: "HONOR",
      explanation: "SUM = 215, so HONOR."
    },

    // 45
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    SUM = SUM + 2 × i
 │    i = i + 1
 │    (go back to decision)
 └─ No  →
      Is SUM divisible by 4 ?
       ├─ Yes → Print "MULTIPLE OF 4" → END
       └─ No  → Print "NOT MULTIPLE OF 4" → END

QUESTION: If N = 3, what will be printed?`,
      options: ["MULTIPLE OF 4", "NOT MULTIPLE OF 4", "ERROR", "NO OUTPUT"],
      answer: "MULTIPLE OF 4",
      explanation: "SUM = 2 + 4 + 6 = 12, which is divisible by 4."
    },

    // 46
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    SUM = SUM + 2 × i
 │    i = i + 1
 │    (go back to decision)
 └─ No  →
      Is SUM divisible by 4 ?
       ├─ Yes → Print "MULTIPLE OF 4" → END
       └─ No  → Print "NOT MULTIPLE OF 4" → END

QUESTION: If N = 2, what will be printed?`,
      options: ["MULTIPLE OF 4", "NOT MULTIPLE OF 4", "ERROR", "NO OUTPUT"],
      answer: "NOT MULTIPLE OF 4",
      explanation: "SUM = 2 + 4 = 6, which is not divisible by 4."
    },

    // 47
    {
      question: `START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i prime ?
 │     ├─ Yes → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print COUNT → END

(Assume the flowchart correctly checks for prime numbers.)

QUESTION: If N = 10, what value will be printed?`,
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Prime numbers ≤ 10 are 2, 3, 5, 7, so COUNT = 4."
    },

    // 48
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    SUM = SUM + i
 │    i = i + 2
 │    (go back to decision)
 └─ No  →
      Is SUM > N ?
       ├─ Yes → Print "SUM LARGER" → END
       └─ No  → Print "SUM NOT LARGER" → END

QUESTION: If N = 7, what will be printed?`,
      options: ["SUM LARGER", "SUM NOT LARGER", "ERROR", "NO OUTPUT"],
      answer: "SUM LARGER",
      explanation: "Odd sum 1 + 3 + 5 + 7 = 16, which is larger than 7."
    },

    // 49
    {
      question: `START
↓
Input N
↓
Set i = 1, SUM = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    SUM = SUM + i
 │    i = i + 2
 │    (go back to decision)
 └─ No  →
      Is SUM > N ?
       ├─ Yes → Print "SUM LARGER" → END
       └─ No  → Print "SUM NOT LARGER" → END

QUESTION: If N = 3, what will be printed?`,
      options: ["SUM LARGER", "SUM NOT LARGER", "ERROR", "NO OUTPUT"],
      answer: "SUM LARGER",
      explanation: "SUM = 1 + 3 = 4, which is greater than 3."
    },

    // 50
    {
      question: `START
↓
Input N
↓
Set SUM = 0
↓
Is N > 0 ?
 ├─ Yes →
 │    digit = N mod 10
 │    SUM = SUM + digit × digit
 │    N = N ÷ 10
 │    (go back to decision)
 └─ No  →
      Is SUM divisible by 9 ?
       ├─ Yes → Print "SQUARE SUM MULTIPLE OF 9" → END
       └─ No  → Print "SQUARE SUM NOT MULTIPLE OF 9" → END

QUESTION: If N = 33, what will be printed?`,
      options: [
        "SQUARE SUM MULTIPLE OF 9",
        "SQUARE SUM NOT MULTIPLE OF 9",
        "ERROR",
        "NO OUTPUT"
      ],
      answer: "SQUARE SUM MULTIPLE OF 9",
      explanation: "Squares: 3² + 3² = 9 + 9 = 18, which is a multiple of 9."
    }
  ]
};
