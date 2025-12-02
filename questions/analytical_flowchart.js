// questions/analytical_flowchart.js
// ==========================================
// ANALYTICAL – FLOWCHART (10 items muna, Beginner)
// Later: pwede dagdagan up to 200 items
// ==========================================

window.ANALYTICAL_QUESTION_BANK = window.ANALYTICAL_QUESTION_BANK || {};

window.ANALYTICAL_QUESTION_BANK["flowchart"] = {
  // ==========================================
  // LEVEL 1: BEGINNER (sample 10 items)
  // ==========================================
  beginner: [
    // 1
    {
      question: `FLOWCHART:

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
        └─ No  → Print "NOT POSITIVE" → END

QUESTION: Based on the flowchart, what will be the output if N = -3?`,
      options: ["POSITIVE", "ZERO", "NOT POSITIVE", "NO OUTPUT"],
      answer: "NOT POSITIVE",
      explanation:
        "N = -3 is not greater than 0 and not equal to 0, so the last branch executes and prints NOT POSITIVE."
    },

    // 2
    {
      question: `FLOWCHART:

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
        └─ No  → Print "NOT POSITIVE" → END

QUESTION: Based on the flowchart, what will be the output if N = 0?`,
      options: ["POSITIVE", "ZERO", "NOT POSITIVE", "NO OUTPUT"],
      answer: "ZERO",
      explanation:
        "N is not greater than 0, so we go to the second decision. Since N = 0, the flowchart prints ZERO."
    },

    // 3
    {
      question: `FLOWCHART:

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
        └─ No  → Print "NOT POSITIVE" → END

QUESTION: Based on the flowchart, what will be the output if N = 5?`,
      options: ["POSITIVE", "ZERO", "NOT POSITIVE", "NO OUTPUT"],
      answer: "POSITIVE",
      explanation:
        "Since N = 5 is greater than 0, the YES branch is taken and the flowchart prints POSITIVE."
    },

    // 4
    {
      question: `FLOWCHART:

START
  ↓
Input X
  ↓
Is X divisible by 2 ?
  ├─ Yes → Print "EVEN" → END
  └─ No  → Print "ODD"  → END

QUESTION: Based on the flowchart, what will be the output if X = 7?`,
      options: ["EVEN", "ODD", "ZERO", "NO OUTPUT"],
      answer: "ODD",
      explanation:
        "7 is not divisible by 2, so the NO branch executes and the flowchart prints ODD."
    },

    // 5
    {
      question: `FLOWCHART:

START
  ↓
Input X
  ↓
Is X divisible by 2 ?
  ├─ Yes → Print "EVEN" → END
  └─ No  → Print "ODD"  → END

QUESTION: Based on the flowchart, what will be the output if X = 12?`,
      options: ["EVEN", "ODD", "ZERO", "NO OUTPUT"],
      answer: "EVEN",
      explanation:
        "12 is divisible by 2, so the YES branch runs and the flowchart prints EVEN."
    },

    // 6
    {
      question: `FLOWCHART:

START
  ↓
Input TEMP
  ↓
Is TEMP > 37 ?
  ├─ Yes → Print "FEVER"  → END
  └─ No  → Print "NORMAL" → END

QUESTION: Which of the following temperature values will be labeled "NORMAL" by the flowchart?`,
      options: ["38.5°C", "39.0°C", "36.5°C", "40.2°C"],
      answer: "36.5°C",
      explanation:
        "Only temperatures greater than 37 are labeled FEVER. 36.5°C is not greater than 37, so it is labeled NORMAL."
    },

    // 7
    {
      question: `FLOWCHART:

START
  ↓
Set i = 1
Set total = 0
  ↓
Add i to total   (total = total + i)
  ↓
Increase i by 1 (i = i + 1)
  ↓
Is i ≤ 3 ?
  ├─ Yes → Go back to "Add i to total"
  └─ No  → Print total → END

QUESTION: What value of total will be printed at the end of the flowchart?`,
      options: ["3", "4", "6", "9"],
      answer: "6",
      explanation:
        "Trace: i=1, total=0 → total=1; i=2 → total=3; i=3 → total=6; i=4 → condition fails. Final total printed is 6."
    },

    // 8
    {
      question: `FLOWCHART:

START
  ↓
Input N
  ↓
Is N < 0 ?
  ├─ Yes → N = -1 * N
  └─ No  (do nothing)
  ↓
Print N
  ↓
END

QUESTION: Based on the flowchart, what will be printed if N = -4?`,
      options: ["-4", "0", "4", "NO OUTPUT"],
      answer: "4",
      explanation:
        "Since N is negative, it is multiplied by -1, making N = 4, which is then printed."
    },

    // 9
    {
      question: `FLOWCHART:

START
  ↓
Input GRADE
  ↓
Is GRADE ≥ 75 ?
  ├─ Yes → Print "PASS" → END
  └─ No  → Print "FAIL" → END

QUESTION: Based on the flowchart, what will be the output if GRADE = 80?`,
      options: ["PASS", "FAIL", "INCOMPLETE", "NO OUTPUT"],
      answer: "PASS",
      explanation:
        "Since 80 is greater than or equal to 75, the YES branch executes and the flowchart prints PASS."
    },

    // 10
    {
      question: `FLOWCHART:

START
  ↓
Input AMOUNT
  ↓
Is AMOUNT ≥ 1000 ?
  ├─ Yes → Print "WITH DISCOUNT"  → END
  └─ No  → Print "NO DISCOUNT"    → END

QUESTION: Based on the flowchart, what will be the output if AMOUNT = 800?`,
      options: ["WITH DISCOUNT", "NO DISCOUNT", "INVALID", "NO OUTPUT"],
      answer: "NO DISCOUNT",
      explanation:
        "AMOUNT = 800 is less than 1000, so the NO branch is followed and the flowchart prints NO DISCOUNT."
    }
  ],

  // Placeholder arrays for other levels (para hindi mag-crash)
  intermediate: [],
  advanced: [],
  expert: []
};
