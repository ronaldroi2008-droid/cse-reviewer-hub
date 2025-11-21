// Question bank for "Gender of Nouns"
// Each question has:
// - question: string
// - choices: array of strings
// - correctIndex: 0-based index of correct choice
// - explanation: string

const GENDER_QUESTIONS = {
  beginner: [
    {
      question: "Which noun is masculine gender?",
      choices: ["Aunt", "Bride", "Brother", "Niece"],
      correctIndex: 2,
      explanation:
        "\"Brother\" is masculine. \"Aunt\", \"Bride\", and \"Niece\" are feminine."
    },
    {
      question: "Which noun is feminine gender?",
      choices: ["Uncle", "Waiter", "Queen", "Prince"],
      correctIndex: 2,
      explanation:
        "\"Queen\" is feminine. \"Uncle\", \"Waiter\", and \"Prince\" are masculine."
    },
    {
      question: "Which noun is neuter gender?",
      choices: ["Actor", "Desk", "Widow", "Father"],
      correctIndex: 1,
      explanation:
        "\"Desk\" is an object and has neuter gender. The others refer to people with masculine or feminine gender."
    },
    {
      question: "Which noun is common gender?",
      choices: ["King", "Mother", "Teacher", "Bride"],
      correctIndex: 2,
      explanation:
        "\"Teacher\" can refer to either a male or a female, so it is common gender."
    },
    {
      question:
        "Which of the following is the best classification for the noun \"child\"?",
      choices: ["Masculine", "Feminine", "Common", "Neuter"],
      correctIndex: 2,
      explanation:
        "\"Child\" can be male or female, so it is a common gender noun."
    }
  ],

  intermediate: [
    {
      question:
        "The nurse said that ____ would return later to check the patient's blood pressure.",
      choices: ["he", "she", "he or she", "they"],
      correctIndex: 3,
      explanation:
        "Modern English often uses singular \"they\" as a gender-neutral pronoun, especially if the gender is not specified."
    },
    {
      question:
        "Every student must submit ____ final project before the deadline.",
      choices: ["his", "her", "his or her", "their"],
      correctIndex: 3,
      explanation:
        "\"Their\" is widely used as a singular, gender-neutral pronoun in modern English. In more traditional style, \"his or her\" may be preferred."
    },
    {
      question:
        "Which sentence uses a gender-neutral expression for a person in a profession?",
      choices: [
        "The chairman gave his decision.",
        "The salesman explained his product.",
        "The police officer finished the report.",
        "The fireman rescued the boy."
      ],
      correctIndex: 2,
      explanation:
        "\"Police officer\" is gender-neutral. \"Chairman\", \"salesman\", and \"fireman\" are traditionally male-oriented terms."
    },
    {
      question:
        "Which noun pair shows masculine and feminine forms of the same word?",
      choices: [
        "Prince – Princess",
        "Boy – Woman",
        "Actor – Widow",
        "Father – Aunt"
      ],
      correctIndex: 0,
      explanation:
        "\"Prince\" is masculine and \"Princess\" is the feminine counterpart. The other pairs do not match correctly."
    },
    {
      question:
        "Which pronoun correctly completes the sentence?\n\n\"If a person wants to pass the exam, ____ must review consistently.\"",
      choices: ["he", "she", "he or she", "it"],
      correctIndex: 2,
      explanation:
        "\"He or she\" is the traditional gender-balanced form. \"It\" is incorrect for people."
    }
  ],

  advanced: [
    {
      question:
        "Which sentence is most appropriate in formal, gender-neutral English?",
      choices: [
        "Each secretary must bring her own laptop.",
        "Each secretary must bring his own laptop.",
        "Each secretary must bring his or her own laptop.",
        "Each secretary must bring their own laptop."
      ],
      correctIndex: 2,
      explanation:
        "In many exams, \"his or her\" is still considered the safest formal choice. \"Their\" is common in actual usage but sometimes questioned in tests."
    },
    {
      question:
        "Identify the problem in this sentence:\n\n\"When a student is late, he should apologize to the class.\"",
      choices: [
        "The pronoun is plural.",
        "The gender of the pronoun may not match the noun.",
        "The noun is not clear.",
        "There is no grammatical problem."
      ],
      correctIndex: 1,
      explanation:
        "\"Student\" may refer to a male or female, but the sentence uses \"he\" only, which may be considered gender-biased."
    },
    {
      question:
        "Which revision best improves gender fairness?\n\n\"Every engineer must keep his license valid.\"",
      choices: [
        "Every engineer must keep his license valid at all times.",
        "Every engineer must keep her license valid.",
        "All engineers must keep their licenses valid.",
        "Every engineer must keep his or her license valid."
      ],
      correctIndex: 3,
      explanation:
        "\"Every engineer must keep his or her license valid\" keeps the singular structure and is gender-balanced. \"All engineers...their\" is also acceptable but changes the structure."
    },
    {
      question:
        "Which noun is LEAST likely to carry a natural gender (masculine or feminine)?",
      choices: ["Bride", "Widower", "Colleague", "Husband"],
      correctIndex: 2,
      explanation:
        "\"Colleague\" can refer to a male or female and is usually treated as common gender. The others have clear masculine or feminine meaning."
    }
  ],

  super: [
    {
      question:
        "Which sentence shows the BEST balance between formality and gender fairness for exam purposes?",
      choices: [
        "If an employee is absent, he must file a leave form.",
        "If an employee is absent, he or she must file a leave form.",
        "If an employee is absent, they must file a leave form.",
        "If an employee is absent, it must file a leave form."
      ],
      correctIndex: 1,
      explanation:
        "\"He or she\" is the safest choice in many formal exams because it is clearly gender-balanced and grammatically singular."
    },
    {
      question:
        "In the sentence, \"The committee decided that they would postpone its decision,\" what is the main issue?",
      choices: [
        "The noun and pronoun disagree in number.",
        "The gender of the pronoun is incorrect.",
        "The tense of the verb is wrong.",
        "There is no problem with the sentence."
      ],
      correctIndex: 0,
      explanation:
        "\"Committee\" is singular, but \"they\" is plural while \"its\" is singular. The pronoun reference is inconsistent."
    },
    {
      question:
        "Which option correctly classifies the noun and suggests the most natural pronoun?\n\n\"The doctor said that ____ would arrive soon.\"",
      choices: [
        "Masculine noun; use \"he\" only.",
        "Feminine noun; use \"she\" only.",
        "Common gender noun; use \"he or she\".",
        "Neuter noun; use \"it\"."
      ],
      correctIndex: 2,
      explanation:
        "\"Doctor\" is a common gender noun; in formal test style, \"he or she\" is usually preferred if the gender is not specified."
    }
  ]
};

// NOTE: You can add more items up to 50 per level if needed.
