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

  // placeholders for now
  intermediate: [],
  advanced: [],
  expert: []
};

