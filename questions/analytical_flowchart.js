// questions/analytical_flowchart.js
// ==========================================
// ANALYTICAL – FLOWCHART INTERPRETATION
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.ANALYTICAL_QUESTION_BANK = window.ANALYTICAL_QUESTION_BANK || {};

window.ANALYTICAL_QUESTION_BANK["flowchart"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (10 sample items – basic reading of flowcharts)
  // ==========================================
  beginner: [
    // 1
    {
      question: `FLOWCHART 1:

START
  |
  v
[Input N]
  |
  v
Is N > 0 ?
  | Yes                | No
  v                    v
Print "POSITIVE"   Print "NOT POSITIVE"
  |
  v
 END

QUESTION: Based on the flowchart, what will be the output if N = -3?`,
      options: ["POSITIVE", "NOT POSITIVE", "ZERO", "NO OUTPUT"],
      answer: "NOT POSITIVE",
      explanation: `STEP 1: The flowchart checks the condition N > 0.
STEP 2: For N = -3, the condition N > 0 is FALSE, so the flow follows the "No" branch.
STEP 3: The "No" branch prints "NOT POSITIVE".`
    },

    // 2
    {
      question: `FLOWCHART 2:

START
  |
  v
[Input AGE]
  |
  v
Is AGE >= 18 ?
  | Yes                     | No
  v                         v
Print "CAN VOTE"       Print "CANNOT VOTE"
  |
  v
 END

QUESTION: According to the flowchart, what will be the output if AGE = 18?`,
      options: ["CAN VOTE", "CANNOT VOTE", "NO OUTPUT", "ERROR"],
      answer: "CAN VOTE",
      explanation: `STEP 1: The decision box checks if AGE >= 18.
STEP 2: For AGE = 18, the condition is TRUE.
STEP 3: The flow follows the "Yes" branch and prints "CAN VOTE".`
    },

    // 3
    {
      question: `FLOWCHART 3:

START
  |
  v
Set X = 0
  |
  v
X = X + 2
  |
  v
X = X + 3
  |
  v
Print X
  |
  v
 END

QUESTION: What value of X will be printed when this flowchart is executed?`,
      options: ["0", "2", "3", "5"],
      answer: "5",
      explanation: `STEP 1: X starts at 0.
STEP 2: X = X + 2 → X = 0 + 2 = 2.
STEP 3: X = X + 3 → X = 2 + 3 = 5.
STEP 4: The flowchart prints X, so the output is 5.`
    },

    // 4
    {
      question: `FLOWCHART 4:

START
  |
  v
[Input N]
  |
  v
Is N even ?
  | Yes               | No
  v                   v
Print "EVEN"      Print "ODD"
  |
  v
 END

QUESTION: Which of the following values of N will make the flowchart print "ODD"?`,
      options: ["8", "10", "13", "20"],
      answer: "13",
      explanation: `STEP 1: The flowchart prints "ODD" when N is NOT even.
STEP 2: 8, 10, and 20 are even numbers.
STEP 3: 13 is the only odd number in the choices, so it will follow the "No" branch and print "ODD".`
    },

    // 5
    {
      question: `FLOWCHART 5:

START
  |
  v
[Input SCORE]
  |
  v
Is SCORE >= 75 ?
  | Yes              | No
  v                  v
Print "PASS"    Print "FAIL"
  |
  v
 END

QUESTION: If the output of the flowchart is "FAIL", which of the following could be the value of SCORE?`,
      options: ["60", "75", "80", "90"],
      answer: "60",
      explanation: `STEP 1: The flowchart prints "FAIL" when SCORE >= 75 is FALSE.
STEP 2: This means SCORE must be less than 75.
STEP 3: Among the choices, only 60 is less than 75, so SCORE = 60 will produce "FAIL".`
    },

    // 6
    {
      question: `FLOWCHART 6:

START
  |
  v
[Input TEMP]
  |
  v
Is TEMP > 37 ?
  | Yes              | No
  v                  v
Print "FEVER"   Print "NORMAL"
  |
  v
 END

QUESTION: Which of the following temperature values will be labeled "NORMAL" by the flowchart?`,
      options: ["38.0", "37.5", "37.0", "39.2"],
      answer: "37.0",
      explanation: `STEP 1: The flowchart checks if TEMP > 37.
STEP 2: TEMP is "NORMAL" only when TEMP > 37 is FALSE (that is, TEMP <= 37).
STEP 3: Among the options, 37.0 is the only value not greater than 37, so it will produce "NORMAL".`
    },

    // 7
    {
      question: `FLOWCHART 7:

START
  |
  v
[Input N]
  |
  v
Is N >= 1 ?
  | Yes                    | No
  v                        v
Is N <= 10 ?           Print "OUT OF RANGE"
  | Yes        | No
  v            v
Print "WITHIN RANGE"
              |
              v
       Print "OUT OF RANGE"
              |
              v
             END

QUESTION: Based on the flowchart, what will be the output if N = 0?`,
      options: ["WITHIN RANGE", "OUT OF RANGE", "NO OUTPUT", "ERROR"],
      answer: "OUT OF RANGE",
      explanation: `STEP 1: For N = 0, the first test is N >= 1. This is FALSE.
STEP 2: Because the answer is "No", the flow goes directly to Print "OUT OF RANGE".
STEP 3: Therefore, the output is "OUT OF RANGE".`
    },

    // 8
    {
      question: `FLOWCHART 8:

START
  |
  v
Set COUNTER = 1
  |
  v
Is COUNTER <= 3 ?
  | Yes                      | No
  v                          v
Print "HELLO"             END
  |
  v
COUNTER = COUNTER + 1
  |
  v
(Go back to the decision)

QUESTION: How many times will the word "HELLO" be printed when this flowchart runs?`,
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: `STEP 1: COUNTER starts at 1.
STEP 2: While COUNTER <= 3, the flowchart prints "HELLO" and then adds 1 to COUNTER.
- When COUNTER = 1 → print "HELLO" (1st time), COUNTER becomes 2.
- When COUNTER = 2 → print "HELLO" (2nd time), COUNTER becomes 3.
- When COUNTER = 3 → print "HELLO" (3rd time), COUNTER becomes 4.
STEP 3: When COUNTER = 4, the condition COUNTER <= 3 is FALSE, so the loop stops.
STEP 4: Thus, "HELLO" is printed exactly 3 times.`
    },

    // 9
    {
      question: `FLOWCHART 9:

START
  |
  v
[Input N]
  |
  v
Is N = 0 ?
  | Yes                  | No
  v                      v
Print "ZERO"        Is N > 0 ?
                      | Yes            | No
                      v                v
                Print "POSITIVE"   Print "NEGATIVE"
                      |
                      v
                     END

QUESTION: According to the flowchart, what will be the output if N = -4?`,
      options: ["ZERO", "POSITIVE", "NEGATIVE", "NO OUTPUT"],
      answer: "NEGATIVE",
      explanation: `STEP 1: First decision: Is N = 0?
For N = -4, this is FALSE, so go to the second decision.
STEP 2: Second decision: Is N > 0?
For N = -4, this is also FALSE.
STEP 3: The "No" branch of the second decision prints "NEGATIVE".
So the output is "NEGATIVE".`
    },

    // 10
    {
      question: `FLOWCHART 10:

START
  |
  v
[Input AGE]
  |
  v
Is AGE < 13 ?
  | Yes                  | No
  v                      v
Print "CHILD"        Is AGE < 20 ?
                        | Yes              | No
                        v                  v
                  Print "TEENAGER"    Print "ADULT"
                        |
                        v
                       END

QUESTION: Based on the flowchart, what will be the output if AGE = 19?`,
      options: ["CHILD", "TEENAGER", "ADULT", "NO OUTPUT"],
      answer: "TEENAGER",
      explanation: `STEP 1: Check if AGE < 13.
For AGE = 19, this is FALSE, so go to the next decision.
STEP 2: Check if AGE < 20.
For AGE = 19, this is TRUE.
STEP 3: The "Yes" branch prints "TEENAGER". Therefore, the output is "TEENAGER".`
    }
  ],

  // For now, empty placeholders para hindi mag-error
  intermediate: [],
  advanced: [],
  expert: []
};
