// Question bank for "Gender of Nouns"
// Each item:
// { question: string, choices: [..], correctIndex: number, explanation: string }

const GENDER_QUESTIONS = {
  beginner: [
    {
      question: "Which noun is masculine gender?",
      choices: ["Aunt", "Bride", "Brother", "Niece"],
      correctIndex: 2,
      explanation:
        '"Brother" is masculine. "Aunt", "Bride", and "Niece" are feminine.'
    },
    {
      question: "Which noun is feminine gender?",
      choices: ["Uncle", "Waiter", "Queen", "Prince"],
      correctIndex: 2,
      explanation:
        '"Queen" is feminine. "Uncle", "Waiter", and "Prince" are masculine.'
    },
    {
      question: "Which noun is neuter gender?",
      choices: ["Actor", "Desk", "Widow", "Father"],
      correctIndex: 1,
      explanation:
        '"Desk" is an object and has neuter gender. The others refer to people.'
    },
    {
      question: "Which noun is common gender?",
      choices: ["King", "Mother", "Teacher", "Bride"],
      correctIndex: 2,
      explanation:
        '"Teacher" can refer to either a male or a female, so it is common gender.'
    },
    {
      question:
        'Which of the following is the best classification for the noun "child"?',
      choices: ["Masculine", "Feminine", "Common", "Neuter"],
      correctIndex: 2,
      explanation:
        '"Child" can be male or female, so it is a common gender noun.'
    }

    // 👉 DITO MO I-PASTE LAHAT NG IBA MO PANG BEGINNER QUESTIONS
    // (hanggang umabot ng 50 kung yan ang target mo)
  ],

  intermediate: [
    {
      question:
        "The nurse said that ____ would return later to check the patient's blood pressure.",
      choices: ["he", "she", "he or she", "they"],
      correctIndex: 3,
      explanation:
        'Modern English often uses singular "they" as a gender-neutral pronoun when gender is not specified.'
    },
    {
      question:
        "Every student must submit ____ final project before the deadline.",
      choices: ["his", "her", "his or her", "their"],
      correctIndex: 3,
      explanation:
        '"Their" is widely used as a singular, gender-neutral pronoun in modern English.'
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
        '"Police officer" is gender-neutral. The other terms are traditionally male-oriented.'
    },
    {
      question:
        "Which noun pair shows masculine and feminine forms of the same word?",
      choices: ["Prince – Princess", "Boy – Woman", "Actor – Widow", "Father – Aunt"],
      correctIndex: 0,
      explanation:
        '"Prince" is masculine and "Princess" is the feminine counterpart.'
    },
    {
      question:
        'Which pronoun correctly completes the sentence: "If a person wants to pass the exam, ____ must review consistently."',
      choices: ["he", "she", "he or she", "it"],
      correctIndex: 2,
      explanation:
        '"He or she" is the traditional gender-balanced form for formal exams.'
    }

    // 👉 PASTE DITO LAHAT NG IBANG INTERMEDIATE QUESTIONS MO
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
        '"His or her" is often considered the safest choice in formal exams.'
    },
    {
      question:
        'Identify the problem in this sentence: "When a student is late, he should apologize to the class."',
      choices: [
        "The pronoun is plural.",
        "The gender of the pronoun may not match the noun.",
        "The noun is not clear.",
        "There is no grammatical problem."
      ],
      correctIndex: 1,
      explanation:
        '"Student" may refer to both male and female, but the sentence only uses "he", which may be considered gender-biased.'
    }

    // 👉 PASTE DITO LAHAT NG ADVANCED QUESTIONS MO
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
        '"He or she" is the safest choice in many formal exams because it is clearly gender-balanced and singular.'
    },
    {
      question:
        'In the sentence, "The committee decided that they would postpone its decision," what is the main issue?',
      choices: [
        "The noun and pronoun disagree in number.",
        "The gender of the pronoun is incorrect.",
        "The tense of the verb is wrong.",
        "There is no problem with the sentence."
      ],
      correctIndex: 0,
      explanation:
        '"Committee" is singular, but "they" is plural while "its" is singular. The pronoun reference is inconsistent.'
    }

    // 👉 PASTE DITO LAHAT NG SUPER LEVEL QUESTIONS MO
  ]
};

