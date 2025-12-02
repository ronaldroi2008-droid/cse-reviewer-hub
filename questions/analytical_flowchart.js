window.ANALYTICAL_QUESTION_BANK = window.ANALYTICAL_QUESTION_BANK || {};

window.ANALYTICAL_QUESTION_BANK["flowchart"] = {
beginner: [
  {
    question: `
FLOWCHART:

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

QUESTION: Based on the flowchart, what will be the output if N = -3?
`,
    options: ["POSITIVE", "NOT POSITIVE", "ZERO", "NO OUTPUT"],
    answer: "NOT POSITIVE",
    explanation: `For N = -3, N > 0 is false, N = 0 is also false, so the flowchart prints "NOT POSITIVE".`
  }
]

};
