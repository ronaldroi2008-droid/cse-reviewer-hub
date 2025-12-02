// questions/analytical_flowchart.js (Beginner #1 example)

window.ANALYTICAL_QUESTION_BANK = window.ANALYTICAL_QUESTION_BANK || {};

window.ANALYTICAL_QUESTION_BANK["flowchart"] = {
  beginner: [
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
      options: ["POSITIVE", "NOT POSITIVE", "ZERO", "NO OUTPUT"],
      answer: "NOT POSITIVE",
      explanation: `N = -3 is not greater than 0 and not equal to 0,
so the flowchart follows the "No" branch of both tests and prints "NOT POSITIVE".`
    }

    // … other beginner questions dito …
  ]
};
