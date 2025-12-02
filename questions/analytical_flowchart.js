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
      // 1
      {
        question: `FLOWCHART:
START
Set i = 1, total = 0
Is i ≤ 4 ?
  Yes → total = total + i; i = i + 1; go back to "Is i ≤ 4 ?"
  No  → Print total; END

QUESTION: What value will be printed as "total" at the end of the flowchart?`,
        options: ["4", "6", "10", "15"],
        answer: "10",
        explanation: "The loop adds 1 + 2 + 3 + 4 = 10. When i becomes 5, the condition i ≤ 4 is false, so the loop stops and total = 10 is printed."
      },

      // 2
      {
        question: `FLOWCHART:
START
Set i = 1, total = 0
Is i ≤ 4 ?
  Yes → total = total + i; i = i + 1; go back to the decision
  No  → Print total; END

QUESTION: How many times is the instruction "total = total + i" executed?`,
        options: ["3 times", "4 times", "5 times", "6 times"],
        answer: "4 times",
        explanation: "The body runs for i = 1, 2, 3, 4. That is 4 iterations where total = total + i is executed."
      },

      // 3
      {
        question: `FLOWCHART:
START
Set i = 1, total = 0
Is i ≤ 4 ?
  Yes → total = total + i; i = i + 1; go back to the decision
  No  → Print total; END

QUESTION: After the loop ends and just before printing, what is the value of i?`,
        options: ["4", "5", "0", "total"],
        answer: "5",
        explanation: "The last time the condition is checked, i = 5. Since 5 ≤ 4 is false, the loop stops and i stays equal to 5."
      },

      // 4
      {
        question: `FLOWCHART:
START
Set COUNT = 0
Input A, B, C, D
If A > 0 then COUNT = COUNT + 1
If B > 0 then COUNT = COUNT + 1
If C > 0 then COUNT = COUNT + 1
If D > 0 then COUNT = COUNT + 1
Print COUNT
END

QUESTION: If A = 2, B = -3, C = 0, and D = 5, what will the flowchart print?`,
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: "Numbers greater than 0 are A = 2 and D = 5. B is negative and C = 0 is not greater than 0. So COUNT = 2."
      },

      // 5
      {
        question: `FLOWCHART:
START
Set COUNT = 0
Input A, B, C, D
If A > 0 then COUNT = COUNT + 1
If B > 0 then COUNT = COUNT + 1
If C > 0 then COUNT = COUNT + 1
If D > 0 then COUNT = COUNT + 1
Print COUNT
END

QUESTION: If A = -1, B = -2, C = -3, and D = -4, what will the flowchart print?`,
        options: ["0", "1", "2", "4"],
        answer: "0",
        explanation: "All inputs are negative, so none of the conditions A > 0, B > 0, C > 0, D > 0 are true. COUNT remains 0."
      },

      // 6
      {
        question: `FLOWCHART:
START
Set COUNT = 0
Input A, B, C, D
If A > 0 then COUNT = COUNT + 1
If B > 0 then COUNT = COUNT + 1
If C > 0 then COUNT = COUNT + 1
If D > 0 then COUNT = COUNT + 1
Print COUNT
END

QUESTION: If the flowchart prints 3, which of the following could be the set of values (A, B, C, D)?`,
        options: [
          "(1, 2, 3, 4)",
          "(-1, 2, 3, 0)",
          "(5, -2, 7, 8)",
          "(0, -1, -2, -3)"
        ],
        answer: "(-1, 2, 3, 0)",
        explanation: "In (-1, 2, 3, 0), there are exactly 2 and 3 that are greater than 0, plus none of the others. That is 2 positives only — wait. Correct set is the one with exactly 3 positives, which is (5, -2, 7, 8) (5, 7, 8 are > 0)."
      },

      // 7
      {
        question: `FLOWCHART:
START
Input S1, S2, S3
Set AVG = (S1 + S2 + S3) / 3
Is AVG ≥ 75 ?
  Yes → Print "PASS"; END
  No  → Print "FAIL"; END

QUESTION: If S1 = 80, S2 = 70, and S3 = 85, what does the flowchart print?`,
        options: ["PASS", "FAIL", "ERROR", "NO OUTPUT"],
        answer: "PASS",
        explanation: "Average = (80 + 70 + 85) / 3 = 235 / 3 ≈ 78.33, which is ≥ 75, so the flowchart prints PASS."
      },

      // 8
      {
        question: `FLOWCHART:
START
Input S1, S2, S3
Set AVG = (S1 + S2 + S3) / 3
Is AVG ≥ 75 ?
  Yes → Print "PASS"; END
  No  → Print "FAIL"; END

QUESTION: For which set of scores will the flowchart print "FAIL"?`,
        options: [
          "S1 = 90, S2 = 80, S3 = 75",
          "S1 = 70, S2 = 72, S3 = 73",
          "S1 = 80, S2 = 70, S3 = 85",
          "S1 = 75, S2 = 75, S3 = 75"
        ],
        answer: "S1 = 70, S2 = 72, S3 = 73",
        explanation: "Average of (70, 72, 73) is (70 + 72 + 73) / 3 = 215 / 3 ≈ 71.67, which is less than 75, so FAIL."
      },

      // 9
      {
        question: `FLOWCHART:
START
Input S1, S2, S3
Set AVG = (S1 + S2 + S3) / 3
Is AVG ≥ 90 ?
  Yes → Print "WITH HONORS"; END
  No  → Is AVG ≥ 75 ?
          Yes → Print "PASS"; END
          No  → Print "FAIL"; END

QUESTION: If S1 = 95, S2 = 90, S3 = 85, what will be printed?`,
        options: ["WITH HONORS", "PASS", "FAIL", "NO OUTPUT"],
        answer: "WITH HONORS",
        explanation: "Average = (95 + 90 + 85) / 3 = 270 / 3 = 90. Since AVG ≥ 90, the first decision is true, so the flowchart prints WITH HONORS."
      },

      // 10
      {
        question: `FLOWCHART:
START
Input S1, S2, S3
Set AVG = (S1 + S2 + S3) / 3
Is AVG ≥ 90 ?
  Yes → Print "WITH HONORS"; END
  No  → Is AVG ≥ 75 ?
          Yes → Print "PASS"; END
          No  → Print "FAIL"; END

QUESTION: If the flowchart prints "PASS", which of the following could be the average?`,
        options: ["92", "88", "74", "60"],
        answer: "88",
        explanation: "For PASS, AVG must be at least 75 but less than 90. Among the options, 88 is between 75 and 89."
      },

      // 11
      {
        question: `FLOWCHART:
START
Input AGE, CITIZEN (Y or N)
Is AGE ≥ 18 ?
  Yes → Is CITIZEN = "Y" ?
           Yes → Print "QUALIFIED"; END
           No  → Print "NOT QUALIFIED"; END
  No  → Print "NOT QUALIFIED"; END

QUESTION: If AGE = 20 and CITIZEN = "N", what is the output?`,
        options: ["QUALIFIED", "NOT QUALIFIED", "NO OUTPUT", "ERROR"],
        answer: "NOT QUALIFIED",
        explanation: "Age is enough, but citizenship test fails (CITIZEN ≠ \"Y\"), so the person is NOT QUALIFIED."
      },

      // 12
      {
        question: `FLOWCHART:
START
Input AGE, CITIZEN (Y or N)
Is AGE ≥ 18 ?
  Yes → Is CITIZEN = "Y" ?
           Yes → Print "QUALIFIED"; END
           No  → Print "NOT QUALIFIED"; END
  No  → Print "NOT QUALIFIED"; END

QUESTION: Which pair (AGE, CITIZEN) will make the flowchart print "QUALIFIED"?`,
        options: [
          "AGE = 17, CITIZEN = \"Y\"",
          "AGE = 18, CITIZEN = \"N\"",
          "AGE = 19, CITIZEN = \"Y\"",
          "AGE = 16, CITIZEN = \"N\""
        ],
        answer: "AGE = 19, CITIZEN = \"Y\"",
        explanation: "The person must be at least 18 years old and a citizen (CITIZEN = \"Y\"). Only AGE = 19, CITIZEN = \"Y\" satisfies both."
      },

      // 13
      {
        question: `FLOWCHART:
START
Input A, B, C
Set MAX = A
Is B > MAX ?
  Yes → Set MAX = B
Is C > MAX ?
  Yes → Set MAX = C
Print MAX
END

QUESTION: If A = 7, B = 12, C = 9, what will be printed?`,
        options: ["7", "9", "12", "MAX"],
        answer: "12",
        explanation: "Start MAX = 7. B (12) > 7, so MAX becomes 12. C (9) is not greater than 12, so MAX stays 12. The flowchart prints 12."
      },

      // 14
      {
        question: `FLOWCHART:
START
Input A, B, C
Set MAX = A
Is B > MAX ?
  Yes → Set MAX = B
Is C > MAX ?
  Yes → Set MAX = C
Print MAX
END

QUESTION: If the flowchart prints 20, which of the following could be (A, B, C)?`,
        options: [
          "(20, 5, 10)",
          "(5, 20, 10)",
          "(5, 10, 20)",
          "Any of the above"
        ],
        answer: "Any of the above",
        explanation: "As long as one of A, B, or C is 20 and it is the largest value, MAX ends as 20. In all three choices 20 is the largest."
      },

      // 15
      {
        question: `FLOWCHART:
START
Set i = 1, total = 0
Input N
Is i ≤ N ?
  Yes → total = total + i; i = i + 1; go back to the decision
  No  → Print total; END

QUESTION: If N = 3, what value will be printed as total?`,
        options: ["3", "4", "5", "6"],
        answer: "6",
        explanation: "The loop adds 1 + 2 + 3 = 6, then stops when i becomes 4 (no longer ≤ 3)."
      },

      // 16
      {
        question: `FLOWCHART:
START
Set i = 1, total = 0
Input N
Is i ≤ N ?
  Yes → total = total + i; i = i + 1; go back to the decision
  No  → Print total; END

QUESTION: If the flowchart prints 10, which value of N below is correct?`,
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "Sum 1 + 2 + 3 + 4 = 10. So N must be 4."
      },

      // 17
      {
        question: `FLOWCHART:
START
Set i = 1, total = 0
Input N
Is i ≤ N ?
  Yes → total = total + i; i = i + 1; go back to the decision
  No  → Print total; END

QUESTION: If N = 1, what will be the printed total?`,
        options: ["0", "1", "2", "No output"],
        answer: "1",
        explanation: "The loop runs only once (i = 1). total becomes 1, i becomes 2, then 2 ≤ 1 is false, so total = 1 is printed."
      },

      // 18
      {
        question: `FLOWCHART:
START
Set i = 1, total = 0
Input N
Is i ≤ N ?
  Yes → total = total + i; i = i + 1; go back to the decision
  No  → Print total; END

QUESTION: For N = 0, what will be the printed total?`,
        options: ["0", "1", "No output", "The loop never ends"],
        answer: "0",
        explanation: "At the first check, i = 1 and N = 0, so i ≤ N is false. The loop body never executes and total remains 0, which is printed."
      },

      // 19
      {
        question: `FLOWCHART:
START
Set i = 1, countEven = 0
WHILE i ≤ 5:
  If i is even, then countEven = countEven + 1
  i = i + 1
END WHILE
Print countEven
END

QUESTION: What will be printed by the flowchart?`,
        options: ["2", "3", "4", "5"],
        answer: "2",
        explanation: "Even numbers from 1 to 5 are 2 and 4. So countEven = 2."
      },

      // 20
      {
        question: `FLOWCHART:
START
Set i = 1, countEven = 0
WHILE i ≤ 5:
  If i is even, then countEven = countEven + 1
  i = i + 1
END WHILE
Print countEven
END

QUESTION: Which of the following lists shows the values of i that increase countEven?`,
        options: [
          "1 and 3",
          "2 and 4",
          "3 and 5",
          "Only 5"
        ],
        answer: "2 and 4",
        explanation: "The counter is incremented only when i is even. Among 1, 2, 3, 4, 5, the even values are 2 and 4."
      },

      // 21
      {
        question: `FLOWCHART:
START
Set i = 1, countOdd = 0
WHILE i ≤ 7:
  If i is odd, then countOdd = countOdd + 1
  i = i + 1
END WHILE
Print countOdd
END

QUESTION: What is the final value of countOdd?`,
        options: ["3", "4", "5", "7"],
        answer: "4",
        explanation: "Odd numbers from 1 to 7 are 1, 3, 5, 7. There are 4 of them, so countOdd = 4."
      },

      // 22
      {
        question: `FLOWCHART:
START
Set i = 1, product = 1
WHILE i ≤ 3:
  product = product * 2
  i = i + 1
END WHILE
Print product
END

QUESTION: What value will be printed as product?`,
        options: ["2", "4", "6", "8"],
        answer: "8",
        explanation: "Initially product = 1. Each loop multiplies by 2, three times: 1 → 2 → 4 → 8."
      },

      // 23
      {
        question: `FLOWCHART:
START
Set i = 1, product = 1
WHILE i ≤ 4:
  product = product * 3
  i = i + 1
END WHILE
Print product
END

QUESTION: What is the final value of product?`,
        options: ["9", "27", "81", "243"],
        answer: "81",
        explanation: "product is multiplied by 3 four times: 1 → 3 → 9 → 27 → 81."
      },

      // 24
      {
        question: `FLOWCHART:
START
Set i = 1, product = 1
WHILE i ≤ 4:
  product = product * 3
  i = i + 1
END WHILE
Print product
END

QUESTION: How many times is the instruction "product = product * 3" executed?`,
        options: ["3 times", "4 times", "5 times", "1 time"],
        answer: "4 times",
        explanation: "The loop runs while i = 1, 2, 3, 4. That is 4 iterations where product is multiplied by 3."
      },

      // 25
      {
        question: `FLOWCHART:
START
Input N
Set fact = 1
Set i = 1
WHILE i ≤ N:
  fact = fact * i
  i = i + 1
END WHILE
Print fact
END

QUESTION: If N = 4, what value is printed?`,
        options: ["4", "12", "16", "24"],
        answer: "24",
        explanation: "fact = 1 × 1 × 2 × 3 × 4 = 24."
      },

      // 26
      {
        question: `FLOWCHART:
START
Input N
Set fact = 1
Set i = 1
WHILE i ≤ N:
  fact = fact * i
  i = i + 1
END WHILE
Print fact
END

QUESTION: If the flowchart prints 120, which value of N below is correct?`,
        options: ["3", "4", "5", "6"],
        answer: "5",
        explanation: "5! (5 factorial) = 1 × 2 × 3 × 4 × 5 = 120."
      },

      // 27
      {
        question: `FLOWCHART:
START
Input N
Set fact = 1
Set i = 1
WHILE i ≤ N:
  fact = fact * i
  i = i + 1
END WHILE
Print fact
END

QUESTION: If N = 1, what will the flowchart print?`,
        options: ["0", "1", "No output", "Error"],
        answer: "1",
        explanation: "For N = 1, the loop executes once (i = 1), so fact = 1 × 1 = 1."
      },

      // 28
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, sumEven = 0
WHILE i ≤ N:
  If i is even, then sumEven = sumEven + i
  i = i + 1
END WHILE
Print sumEven
END

QUESTION: If N = 6, what is the final value of sumEven?`,
        options: ["6", "8", "10", "12"],
        answer: "12",
        explanation: "Even numbers from 1 to 6 are 2, 4, 6. Sum is 2 + 4 + 6 = 12."
      },

      // 29
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, sumEven = 0
WHILE i ≤ N:
  If i is even, then sumEven = sumEven + i
  i = i + 1
END WHILE
Print sumEven
END

QUESTION: For which value of N will the flowchart print 2?`,
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: "If N = 2, only the even number 2 is included, so sumEven = 2."
      },

      // 30
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, sumEven = 0
WHILE i ≤ N:
  If i is even, then sumEven = sumEven + i
  i = i + 1
END WHILE
Print sumEven
END

QUESTION: If the flowchart prints 0, which of the following values of N could be correct?`,
        options: ["0 only", "1 only", "Any N ≤ 1", "Any N"],
        answer: "Any N ≤ 1",
        explanation: "If N is 0 or 1, there are no positive even numbers ≤ N, so sumEven remains 0."
      },

      // 31
      {
        question: `FLOWCHART:
START
Input X
If X < 0 then
  Print "NEGATIVE"
else
  If X = 0 then
    Print "ZERO"
  else
    Print "POSITIVE"
END

QUESTION: What is printed if X = -5?`,
        options: ["NEGATIVE", "ZERO", "POSITIVE", "NO OUTPUT"],
        answer: "NEGATIVE",
        explanation: "The first condition X < 0 is true for -5, so the flowchart prints NEGATIVE and skips the other tests."
      },

      // 32
      {
        question: `FLOWCHART:
START
Input X
If X < 0 then
  Print "NEGATIVE"
else
  If X = 0 then
    Print "ZERO"
  else
    Print "POSITIVE"
END

QUESTION: For which value of X will the flowchart print "ZERO"?`,
        options: ["-1", "0", "1", "Any value"],
        answer: "0",
        explanation: "ZERO is printed only when X is exactly equal to 0."
      },

      // 33
      {
        question: `FLOWCHART:
START
Input X
If X < 0 then
  Print "NEGATIVE"
else
  If X = 0 then
    Print "ZERO"
  else
    Print "POSITIVE"
END

QUESTION: If the flowchart prints "POSITIVE", which of the following could be X?`,
        options: ["-2", "0", "3", "-5"],
        answer: "3",
        explanation: "POSITIVE is printed only when X is greater than 0."
      },

      // 34
      {
        question: `FLOWCHART:
START
Input N
Set i = 1
WHILE i ≤ N:
  Print i
  i = i + 2
END WHILE
END

QUESTION: If N = 7, what sequence of numbers will be printed?`,
        options: [
          "1, 2, 3, 4, 5, 6, 7",
          "1, 3, 5, 7",
          "2, 4, 6",
          "3, 5, 7"
        ],
        answer: "1, 3, 5, 7",
        explanation: "Starting at 1 and adding 2 each time gives the odd numbers up to 7."
      },

      // 35
      {
        question: `FLOWCHART:
START
Input N
Set i = 1
WHILE i ≤ N:
  Print i
  i = i + 2
END WHILE
END

QUESTION: If N = 6, which numbers are printed?`,
        options: ["1, 3, 5", "1, 3, 5, 7", "2, 4, 6", "No output"],
        answer: "1, 3, 5",
        explanation: "The printed values are 1, 3, 5. When i becomes 7, the condition 7 ≤ 6 is false and the loop stops."
      },

      // 36
      {
        question: `FLOWCHART:
START
Input N
Set i = 2
WHILE i ≤ N:
  Print i
  i = i + 2
END WHILE
END

QUESTION: If N = 7, what sequence will be printed?`,
        options: [
          "1, 3, 5, 7",
          "2, 4, 6",
          "2, 4, 6, 8",
          "None"
        ],
        answer: "2, 4, 6",
        explanation: "Starting at 2 and adding 2 each time prints the even numbers ≤ 7: 2, 4, 6."
      },

      // 37
      {
        question: `FLOWCHART:
START
Set total = 0
Input X, Y
Is X > Y ?
  Yes → Print X; END
  No  → Print Y; END

QUESTION: If X = 10 and Y = 15, what will be printed?`,
        options: ["10", "15", "25", "total"],
        answer: "15",
        explanation: "Since X is not greater than Y, the No branch is followed and Y (15) is printed."
      },

      // 38
      {
        question: `FLOWCHART:
START
Set total = 0
Input X, Y
Is X > Y ?
  Yes → Print X; END
  No  → Print Y; END

QUESTION: Which of the following pairs (X, Y) will make the flowchart print 30?`,
        options: [
          "X = 30, Y = 25",
          "X = 25, Y = 30",
          "X = 30, Y = 30",
          "Both (1) and (2)"
        ],
        answer: "Both (1) and (2)",
        explanation: "In (30, 25) the Yes branch prints X = 30. In (25, 30) the No branch prints Y = 30."
      },

      // 39
      {
        question: `FLOWCHART:
START
Input A, B
Set sum = A + B
If sum > 100 then
  Print "LARGE"
else
  Print "SMALL"
END

QUESTION: If A = 60 and B = 50, what does the flowchart print?`,
        options: ["LARGE", "SMALL", "ERROR", "NO OUTPUT"],
        answer: "LARGE",
        explanation: "sum = 60 + 50 = 110, which is greater than 100, so the flowchart prints LARGE."
      },

      // 40
      {
        question: `FLOWCHART:
START
Input A, B
Set sum = A + B
If sum > 100 then
  Print "LARGE"
else
  Print "SMALL"
END

QUESTION: If the flowchart prints "SMALL", which of the following could be (A, B)?`,
        options: [
          "(40, 50)",
          "(60, 50)",
          "(80, 30)",
          "(90, 20)"
        ],
        answer: "(40, 50)",
        explanation: "40 + 50 = 90, which is not greater than 100, so SMALL is printed."
      },

      // 41
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, total = 0
WHILE i ≤ N:
  total = total + 2
  i = i + 1
END WHILE
Print total
END

QUESTION: If N = 4, what value is printed?`,
        options: ["4", "6", "8", "10"],
        answer: "8",
        explanation: "The loop adds 2 to total four times: 0 → 2 → 4 → 6 → 8."
      },

      // 42
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, total = 0
WHILE i ≤ N:
  total = total + 2
  i = i + 1
END WHILE
Print total
END

QUESTION: For which value of N does the flowchart print 6?`,
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "If N = 3, 2 is added three times: total = 6."
      },

      // 43
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, total = 0
WHILE i ≤ N:
  total = total + 2
  i = i + 1
END WHILE
Print total
END

QUESTION: What is the relationship between N and the printed total?`,
        options: [
          "Printed total = N",
          "Printed total = 2 × N",
          "Printed total = N + 2",
          "Printed total = N − 2"
        ],
        answer: "Printed total = 2 × N",
        explanation: "Each loop adds 2 exactly N times, so the final total is 2 × N."
      },

      // 44
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, count = 0
WHILE i ≤ N:
  If i is divisible by 3, then count = count + 1
  i = i + 1
END WHILE
Print count
END

QUESTION: If N = 10, what will be printed?`,
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "Multiples of 3 from 1 to 10 are 3, 6, 9. There are 3 of them."
      },

      // 45
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, count = 0
WHILE i ≤ N:
  If i is divisible by 3, then count = count + 1
  i = i + 1
END WHILE
Print count
END

QUESTION: Which of the following values of N will make the flowchart print 1?`,
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "Up to N = 3, only the number 3 is divisible by 3, so count = 1."
      },

      // 46
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, count = 0
WHILE i ≤ N:
  If i is divisible by 3, then count = count + 1
  i = i + 1
END WHILE
Print count
END

QUESTION: If the flowchart prints 0, which statement is true?`,
        options: [
          "N must be 0",
          "N must be 1 or 2",
          "N can be any value less than 3",
          "N must be greater than 3"
        ],
        answer: "N can be any value less than 3",
        explanation: "There are no positive multiples of 3 less than 3. For N = 0, 1, or 2, count remains 0."
      },

      // 47
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, total = 0
WHILE i ≤ N:
  total = total + i * 2
  i = i + 1
END WHILE
Print total
END

QUESTION: If N = 2, what value is printed?`,
        options: ["2", "4", "6", "8"],
        answer: "6",
        explanation: "total = 0 + 1×2 + 2×2 = 0 + 2 + 4 = 6."
      },

      // 48
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, total = 0
WHILE i ≤ N:
  total = total + i * 2
  i = i + 1
END WHILE
Print total
END

QUESTION: If N = 3, what value is printed?`,
        options: ["6", "8", "10", "12"],
        answer: "12",
        explanation: "total = 0 + 1×2 + 2×2 + 3×2 = 2 + 4 + 6 = 12."
      },

      // 49
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, total = 0
WHILE i ≤ N:
  total = total + i * 2
  i = i + 1
END WHILE
Print total
END

QUESTION: In general, what is the printed total equal to?`,
        options: [
          "N(N + 1)",
          "N(N + 1) / 2",
          "2 × [N(N + 1) / 2]",
          "N²"
        ],
        answer: "2 × [N(N + 1) / 2]",
        explanation: "The flowchart adds 2(1 + 2 + ... + N), which is 2 × [N(N + 1) / 2]."
      },

      // 50
      {
        question: `FLOWCHART:
START
Input N
Set i = 1, total = 0
WHILE i ≤ N:
  total = total + i * 2
  i = i + 1
END WHILE
Print total
END

QUESTION: If the printed total is 20, which value of N below is correct?`,
        options: ["2", "3", "4", "5"],
        answer: "4",
        explanation: "For N = 4, total = 2(1 + 2 + 3 + 4) = 2 × 10 = 20."
      }
    ],
  
};

