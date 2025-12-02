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
      question: `FLOWCHART 1:
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
      question: `FLOWCHART 1:
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
      question: `FLOWCHART 1:
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
      question: `FLOWCHART 2:
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
      question: `FLOWCHART 2:
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
      question: `FLOWCHART 3:
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
      question: `FLOWCHART 3:
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
      question: `FLOWCHART 4:
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
      question: `FLOWCHART 4:
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
      question: `FLOWCHART 5:
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
      question: `FLOWCHART 5:
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
      question: `FLOWCHART 5:
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
      question: `FLOWCHART 6:
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
      question: `FLOWCHART 6:
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
      question: `FLOWCHART 7:
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
      question: `FLOWCHART 8:
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
      question: `FLOWCHART 9:
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
      question: `FLOWCHART 9:
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
      question: `FLOWCHART 10:
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
      question: `FLOWCHART 10:
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
      question: `FLOWCHART 11:
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
      question: `FLOWCHART 11:
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
      question: `FLOWCHART 12:
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
      question: `FLOWCHART 12:
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
      question: `FLOWCHART 13:
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
      question: `FLOWCHART 13:
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
      question: `FLOWCHART 14:
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
      question: `FLOWCHART 14:
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
      question: `FLOWCHART 15:
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
      question: `FLOWCHART 16:
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
      question: `FLOWCHART 17:
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
      question: `FLOWCHART 18:
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
      question: `FLOWCHART 19:
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
      question: `FLOWCHART 19:
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
      question: `FLOWCHART 20:
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
      question: `FLOWCHART 20:
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
      question: `FLOWCHART 20:
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
      question: `FLOWCHART 21:
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
      question: `FLOWCHART 21:
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
      question: `FLOWCHART 22:
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
      question: `FLOWCHART 22:
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
      question: `FLOWCHART 23:
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
      question: `FLOWCHART 23:
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
      question: `FLOWCHART 24:
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
      question: `FLOWCHART 24:
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
      question: `FLOWCHART 24:
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
      question: `FLOWCHART 25:
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
      question: `FLOWCHART 25:
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
      question: `FLOWCHART 25:
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
      question: `FLOWCHART 26:
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
     {
    question: `FLOWCHART 1:
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
    question: `FLOWCHART 2:
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
    question: `FLOWCHART 3:
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
    question: `FLOWCHART 4:
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
    question: `FLOWCHART 5:
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
    question: `FLOWCHART 6:
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
    question: `FLOWCHART 7:
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
    question: `FLOWCHART 8:
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
    question: `FLOWCHART 9:
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
    question: `FLOWCHART 10:
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
    question: `FLOWCHART 11:
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
    question: `FLOWCHART 12:
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
    question: `FLOWCHART 13:
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
    question: `FLOWCHART 14:
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
    question: `FLOWCHART 15:
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
    question: `FLOWCHART 16:
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
    question: `FLOWCHART 17:
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
    question: `FLOWCHART 18:
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
    question: `FLOWCHART 19:
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
    question: `FLOWCHART 20:
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
    question: `FLOWCHART 21:
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
    question: `FLOWCHART 22:
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
    question: `FLOWCHART 23:
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
    question: `FLOWCHART 24:
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
    question: `FLOWCHART 25:
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
    question: `FLOWCHART 26:
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
    question: `FLOWCHART 27:
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
    question: `FLOWCHART 28:
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
    question: `FLOWCHART 29:
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
    question: `FLOWCHART 30:
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
    question: `FLOWCHART 31:
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
    question: `FLOWCHART 32:
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
    question: `FLOWCHART 33:
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
    question: `FLOWCHART 34:
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
    question: `FLOWCHART 35:
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
    question: `FLOWCHART 36:
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
    question: `FLOWCHART 37:
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
    question: `FLOWCHART 38:
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
    question: `FLOWCHART 39:
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
    question: `FLOWCHART 40:
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
    question: `FLOWCHART 41:
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
    question: `FLOWCHART 42:
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
    question: `FLOWCHART 43:
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
    question: `FLOWCHART 44:
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
    question: `FLOWCHART 45:
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
    question: `FLOWCHART 46:
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
    question: `FLOWCHART 47:
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
    question: `FLOWCHART 48:
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
    question: `FLOWCHART 49:
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
  // 50
  {
    question: `FLOWCHART 50:
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
// LEVEL 3: ADVANCED (10 items for now – more complex loops & decisions)
// ==========================================
window.ANALYTICAL_QUESTION_BANK["flowchart"].advanced = [
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
    explanation:
      "The loop adds the values (2×1+1), (2×2+1), (2×3+1), (2×4+1), (2×5+1) = 3 + 5 + 7 + 9 + 11 = 35."
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
    explanation:
      "total = 1×2 + 2×3 + 3×4 + 4×5 = 2 + 6 + 12 + 20 = 40."
  },

  // 3
  {
    question: `START
↓
Input N
↓
Set i = 1, COUNT = 0
↓
Is i ≤ N ?
 ├─ Yes →
 │    Is i divisible by 4 ?
 │     ├─ Yes →
 │     │    Is i divisible by 6 ?
 │     │     ├─ Yes → (no change)
 │     │     └─ No  → COUNT = COUNT + 1
 │     └─ No  → (no change)
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 24, what value of COUNT will be printed?`,
    options: ["2", "3", "4", "5"],
    answer: "4",
    explanation:
      "Numbers from 1 to 24 divisible by 4 but NOT by 6 are 4, 8, 16, and 20, so COUNT = 4."
  },

  // 4
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
 │    N = N ÷ 10   (integer division)
 │    (go back to decision)
 └─ No  → Set result = evenSum − oddSum
          Print result → END

QUESTION: If N = 7534, what value will be printed?`,
    options: ["-11", "-7", "4", "11"],
    answer: "-11",
    explanation:
      "Digits are 7, 5, 3, 4. evenSum = 4; oddSum = 7 + 5 + 3 = 15. result = 4 − 15 = -11."
  },

  // 5
  {
    question: `START
↓
Input BASIC_SALARY
↓
Is BASIC_SALARY < 10000 ?
 ├─ Yes → BONUS = 0.10 × BASIC_SALARY
 └─ No
      ↓
      Is BASIC_SALARY ≤ 20000 ?
       ├─ Yes → BONUS = 0.15 × BASIC_SALARY
       └─ No  → BONUS = 0.20 × BASIC_SALARY
↓
Print BONUS
↓
END

QUESTION: If BASIC_SALARY = 18 000, what value of BONUS will be printed?`,
    options: ["1 800", "2 000", "2 700", "3 600"],
    answer: "2 700",
    explanation:
      "18 000 is between 10 000 and 20 000, so BONUS = 0.15 × 18 000 = 2 700."
  },

  // 6
  {
    question: `START
↓
Input N
↓
Set i = 1, product = 1
↓
Is i ≤ N AND product < 50 ?
 ├─ Yes →
 │    product = product × 3
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print product → END

QUESTION: If N = 5, what value of product will be printed?`,
    options: ["27", "54", "81", "243"],
    answer: "81",
    explanation:
      "Iterations: product = 3, 9, 27, 81. On the next check, product is no longer < 50, so the loop stops and prints 81."
  },

  // 7
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
 │    N = N ÷ 10   (integer division)
 │    (go back to decision)
 └─ No  → Print COUNT → END

QUESTION: If N = 592786, what value of COUNT will be printed?`,
    options: ["2", "3", "4", "5"],
    answer: "4",
    explanation:
      "Digits are 5, 9, 2, 7, 8, 6. Digits greater than 5 are 9, 7, 8, 6 → COUNT = 4."
  },

  // 8
  {
    question: `START
↓
Input FIRST, DIFF, N
↓
Set term = FIRST
Set i = 1
↓
Is i < N ?
 ├─ Yes →
 │    term = term + DIFF
 │    i = i + 1
 │    (go back to decision)
 └─ No  → Print term → END

QUESTION: If FIRST = 4, DIFF = 3, and N = 5, what value will be printed?`,
    options: ["13", "16", "17", "19"],
    answer: "16",
    explanation:
      "Sequence terms: 4, 7, 10, 13, 16. The 5th term is 16."
  },

  // 9
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

QUESTION: If N = 20 at the start, what value of STEPS will be printed?`,
    options: ["3", "4", "5", "6"],
    answer: "5",
    explanation:
      "N goes 20 → 10 → 5 → 2 → 1 → 0. This is 5 divisions by 2 before N becomes 0, so STEPS = 5."
  },

  // 10
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
    explanation:
      "For 120 units: first 50 at 5 (250), next 50 at 7 (350), remaining 20 at 10 (200). Total BILL = 250 + 350 + 200 = 800."
    }
  ]
  
};
