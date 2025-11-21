// Question bank for "Nouns"
// Levels: beginner, intermediate, advanced, super

const NOUN_QUESTIONS = {
  beginner: [
    {
      question: "Which word is a noun?",
      choices: ["quickly", "happy", "table", "outside"],
      correctIndex: 2,
      explanation: '"Table" is a noun because it names a thing.'
    },
    {
      question:
        'Which word is a noun in this sentence: "The boy runs fast"?',
      choices: ["boy", "runs", "fast", "the"],
      correctIndex: 0,
      explanation: '"Boy" is a noun; it names a person.'
    },
    {
      question: "Which of the following is a person noun?",
      choices: ["library", "teacher", "city", "river"],
      correctIndex: 1,
      explanation: '"Teacher" names a person; the others name places or things.'
    },
    {
      question: "Which word is a place noun?",
      choices: ["honesty", "mountain", "sing", "blue"],
      correctIndex: 1,
      explanation:
        '"Mountain" is a noun that names a place or thing in nature.'
    },
    {
      question: "Which of the following is an idea (abstract) noun?",
      choices: ["happiness", "chair", "garden", "window"],
      correctIndex: 0,
      explanation:
        '"Happiness" is an abstract noun because it names a feeling or idea.'
    }

    // 👉 PASTE DITO LAHAT NG IBA MO PANG BEGINNER NOUNS QUESTIONS
    // (hanggang 50 kung gusto mo)
  ],

  intermediate: [
    {
      question: "Which of the following is an irregular plural noun?",
      choices: ["cars", "books", "children", "houses"],
      correctIndex: 2,
      explanation: '"Children" is the irregular plural of "child".'
    },
    {
      question: "Which plural form is correct?",
      choices: ["foot", "foots", "feet", "feets"],
      correctIndex: 2,
      explanation: '"Feet" is the correct plural of "foot".'
    },
    {
      question: "Which plural noun is correct?",
      choices: ["womans", "woman", "womens", "women"],
      correctIndex: 3,
      explanation: '"Women" is the correct plural of "woman".'
    },
    {
      question: "Which sentence uses a countable noun correctly?",
      choices: [
        "He gave me three advice.",
        "She bought two breads.",
        "I have two cars.",
        "We have many furniture."
      ],
      correctIndex: 2,
      explanation:
        '"Cars" is a countable noun and can be used with the number "two".'
    },
    {
      question: "Which sentence uses an uncountable noun correctly?",
      choices: [
        "She has many money.",
        "He has much experience.",
        "We bought three rice.",
        "They gave me two information."
      ],
      correctIndex: 1,
      explanation:
        '"Experience" is uncountable and is correctly used with "much".'
    }

    // 👉 PASTE DITO LAHAT NG INTERMEDIATE QUESTIONS MO
  ],

  advanced: [
    {
      question:
        'In the phrase "the old wooden bridge", which word is the head noun?',
      choices: ["the", "old", "wooden", "bridge"],
      correctIndex: 3,
      explanation:
        '"Bridge" is the head noun; the other words describe it.'
    },
    {
      question:
        'In the phrase "these important safety rules", which word is the head noun?',
      choices: ["these", "important", "safety", "rules"],
      correctIndex: 3,
      explanation:
        '"Rules" is the head noun; "these, important, safety" are modifiers.'
    }

    // 👉 PASTE DITO ANG ADVANCED NOUNS QUESTIONS MO
  ],

  super: [
    {
      question: "Choose the sentence with correct noun usage:",
      choices: [
        "The committee have submitted its report.",
        "The committee has submitted its report.",
        "The committee have submitted their report it.",
        "The committee has submitted their report."
      ],
      correctIndex: 1,
      explanation:
        'Here the committee is treated as a single unit, so the singular verb "has" and possessive "its" are preferred.'
    }

    // 👉 PASTE DITO ANG SUPER LEVEL NOUNS QUESTIONS MO
  ]
};

