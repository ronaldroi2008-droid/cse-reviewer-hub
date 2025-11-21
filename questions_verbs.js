// questions_verbs.js
// Question bank for VERBS topic
// Structure must match app.js expectations:
// VERB_QUESTIONS = { beginner: [...], intermediate: [...], advanced: [...], super: [...] }

const VERB_QUESTIONS = {
  beginner: [
    {
      question: "Which word is the verb in the sentence: 'The boy runs fast.'?",
      choices: ["boy", "runs", "fast", "the"],
      correctIndex: 1,
      explanation:
        "\"Runs\" is the verb because it shows the action of the subject (boy)."
    },
    {
      question: "Which sentence uses the correct form of the verb be?",
      choices: [
        "They is happy.",
        "He are happy.",
        "They are happy.",
        "She are happy."
      ],
      correctIndex: 2,
      explanation:
        "The plural subject \"They\" takes the plural verb \"are\": They are happy."
    },
    {
      question: "Choose the sentence with correct subject–verb agreement.",
      choices: [
        "She walk to school every day.",
        "She walks to school every day.",
        "She walking to school every day.",
        "She walked to school every day."
      ],
      correctIndex: 1,
      explanation:
        "For he/she/it in the simple present, the verb usually takes -s: She walks."
    },
    {
      question: "What is the correct past tense of the verb \"play\"?",
      choices: ["plays", "playing", "played", "play"],
      correctIndex: 2,
      explanation:
        "\"Play\" is a regular verb; we form its past tense by adding -ed: played."
    },
    {
      question: "Which sentence uses a linking verb?",
      choices: [
        "The soup tastes salty.",
        "The chef tastes the soup.",
        "The boy tastes quickly.",
        "The soup tastes slowly."
      ],
      correctIndex: 0,
      explanation:
        "In \"The soup tastes salty,\" \"tastes\" links the subject (soup) to the adjective (salty)."
    },
    {
      question:
        "In the sentence \"The children laughed loudly,\" what is the verb?",
      choices: ["children", "laughed", "loudly", "the"],
      correctIndex: 1,
      explanation:
        "\"Laughed\" is the verb; it shows the action done by the children."
    },
    {
      question: "Which sentence has a verb in the simple present tense?",
      choices: [
        "She will go to Manila.",
        "She went to Manila.",
        "She is going to Manila.",
        "She goes to Manila every month."
      ],
      correctIndex: 3,
      explanation:
        "\"Goes\" is in the simple present tense and shows a regular action."
    },
    {
      question:
        "Which sentence uses the helping verb correctly in the present continuous tense?",
      choices: [
        "She are cooking dinner.",
        "She is cooking dinner.",
        "She am cooking dinner.",
        "She be cooking dinner."
      ],
      correctIndex: 1,
      explanation:
        "For she/he/it in the present continuous, we use \"is\" + verb-ing: She is cooking."
    },
    {
      question:
        "In the sentence \"They will travel tomorrow,\" which word is the main verb?",
      choices: ["They", "will", "travel", "tomorrow"],
      correctIndex: 2,
      explanation:
        "\"Will\" is the helping verb; \"travel\" is the main verb showing the action."
    },
    {
      question: "Which sentence has a correct verb?",
      choices: [
        "He don’t like coffee.",
        "He doesn’t like coffee.",
        "He didn’t likes coffee.",
        "He not likes coffee."
      ],
      correctIndex: 1,
      explanation:
        "We use \"doesn't\" with he/she/it and the base form of the verb: He doesn’t like."
    }
  ],

  intermediate: [
    {
      question:
        "Which sentence uses the correct form of the irregular verb \"go\" in the present perfect tense?",
      choices: [
        "She has went to the office.",
        "She have gone to the office.",
        "She has gone to the office.",
        "She had went to the office."
      ],
      correctIndex: 2,
      explanation:
        "\"Gone\" is the past participle of \"go.\" With the singular subject \"She,\" we use \"has gone.\""
    },
    {
      question:
        "Which sentence shows correct subject–verb agreement with a compound subject?",
      choices: [
        "Maria and Ana goes to the market every Saturday.",
        "Maria and Ana go to the market every Saturday.",
        "Maria and Ana going to the market every Saturday.",
        "Maria and Ana is going to the market every Saturday."
      ],
      correctIndex: 1,
      explanation:
        "A compound subject joined by \"and\" is plural, so we use the plural verb \"go.\""
    },
    {
      question:
        "Which sentence uses the modal verb correctly to express ability?",
      choices: [
        "He can to swim very well.",
        "He can swim very well.",
        "He can swims very well.",
        "He cans swim very well."
      ],
      correctIndex: 1,
      explanation:
        "After a modal (can), we use the base form of the verb: can swim."
    },
    {
      question:
        "Which sentence correctly uses the simple past tense of an irregular verb?",
      choices: [
        "They buyed new uniforms.",
        "They bought new uniforms.",
        "They have buy new uniforms.",
        "They are bought new uniforms."
      ],
      correctIndex: 1,
      explanation:
        "\"Bought\" is the correct simple past form of the verb \"buy.\""
    },
    {
      question:
        "Which sentence correctly uses the past continuous tense?",
      choices: [
        "They was playing basketball when it rained.",
        "They were playing basketball when it rained.",
        "They are playing basketball when it rained.",
        "They have playing basketball when it rained."
      ],
      correctIndex: 1,
      explanation:
        "\"Were playing\" is the correct past continuous form for the plural subject \"They.\""
    },
    {
      question:
        "In the sentence \"The teacher explained the lesson clearly,\" what kind of verb is \"explained\"?",
      choices: ["Linking verb", "Helping verb", "Action verb", "Modal verb"],
      correctIndex: 2,
      explanation:
        "\"Explained\" is an action verb because it shows what the teacher did."
    },
    {
      question:
        "Which sentence uses a transitive verb with a direct object?",
      choices: [
        "The baby slept peacefully.",
        "The students discussed the project.",
        "The birds flew away.",
        "The audience laughed loudly."
      ],
      correctIndex: 1,
      explanation:
        "\"Discussed\" is transitive here because it has a direct object: \"the project.\""
    },
    {
      question:
        "Which sentence uses the correct form of \"be\" in the past tense?",
      choices: [
        "They was late for the meeting.",
        "They were late for the meeting.",
        "They are late for the meeting yesterday.",
        "They be late for the meeting."
      ],
      correctIndex: 1,
      explanation:
        "For the plural subject \"They\" in the past tense, we use \"were\": They were late."
    },
    {
      question:
        "Which sentence uses the perfect tense correctly to show a completed action?",
      choices: [
        "She have finish her report.",
        "She has finished her report.",
        "She had finish her report.",
        "She has finishing her report."
      ],
      correctIndex: 1,
      explanation:
        "Present perfect uses has/have + past participle: has finished."
    },
    {
      question:
        "Which sentence is correct?",
      choices: [
        "He did not went to work yesterday.",
        "He did not go to work yesterday.",
        "He does not went to work yesterday.",
        "He not go to work yesterday."
      ],
      correctIndex: 1,
      explanation:
        "With \"did not,\" we always use the base form of the verb: did not go."
    }
  ],

  advanced: [
    {
      question:
        "Which sentence maintains consistent verb tense?",
      choices: [
        "Last night, we watch a movie and enjoyed it.",
        "Last night, we watched a movie and enjoy it.",
        "Last night, we watched a movie and enjoyed it.",
        "Last night, we are watching a movie and enjoyed it."
      ],
      correctIndex: 2,
      explanation:
        "The time marker \"Last night\" requires past tense for both actions: watched and enjoyed."
    },
    {
      question:
        "Which sentence is written in the passive voice?",
      choices: [
        "The committee approved the proposal.",
        "The proposal was approved by the committee.",
        "The committee will approve the proposal.",
        "The proposal approves the committee."
      ],
      correctIndex: 1,
      explanation:
        "Passive voice: form of \"be\" + past participle + \"by\"-phrase: was approved by the committee."
    },
    {
      question:
        "Which sentence correctly uses the present perfect tense?",
      choices: [
        "I have finish my assignment.",
        "I have finished my assignment.",
        "I has finished my assignment.",
        "I had finished my assignment tomorrow."
      ],
      correctIndex: 1,
      explanation:
        "Present perfect: have/has + past participle. For \"I,\" the correct form is have finished."
    },
    {
      question:
        "Which sentence correctly uses a phrasal verb?",
      choices: [
        "She will look the matter.",
        "She will look into the matter.",
        "She will look in the matter.",
        "She will look of the matter."
      ],
      correctIndex: 1,
      explanation:
        "\"Look into\" is a phrasal verb meaning to investigate or examine."
    },
    {
      question:
        "Which sentence correctly uses \"had\" to form the past perfect tense?",
      choices: [
        "By the time we arrived, the movie had started.",
        "By the time we arrived, the movie has started.",
        "By the time we arrived, the movie have started.",
        "By the time we arrived, the movie starting."
      ],
      correctIndex: 0,
      explanation:
        "Past perfect: had + past participle. It shows an action completed before another past action."
    },
    {
      question:
        "Which sentence correctly uses a modal of obligation?",
      choices: [
        "You must to submit the form today.",
        "You must submit the form today.",
        "You must submitting the form today.",
        "You must submitted the form today."
      ],
      correctIndex: 1,
      explanation:
        "After a modal like \"must,\" we use the base form of the verb: must submit."
    },
    {
      question:
        "Which sentence is correct?",
      choices: [
        "Each of the participants have signed the attendance sheet.",
        "Each of the participants has signed the attendance sheet.",
        "Each of the participant have signed the attendance sheet.",
        "Each of the participant are signed the attendance sheet."
      ],
      correctIndex: 1,
      explanation:
        "\"Each\" is grammatically singular and takes a singular verb: has signed."
    },
    {
      question:
        "Which sentence uses the correct verb to complete the conditional statement?",
      choices: [
        "If she studied harder, she will pass the exam.",
        "If she studied harder, she would pass the exam.",
        "If she studies harder, she would pass the exam.",
        "If she studies harder, she would passed the exam."
      ],
      correctIndex: 1,
      explanation:
        "Second conditional: If + past tense, would + base verb → If she studied harder, she would pass."
    },
    {
      question:
        "Which sentence uses the correct verb in reported speech?",
      choices: [
        "He said that he is tired yesterday.",
        "He said that he was tired yesterday.",
        "He said that he will be tired yesterday.",
        "He said that he be tired yesterday."
      ],
      correctIndex: 1,
      explanation:
        "In reported speech with a past reporting verb (said), the verb usually shifts to past: was tired."
    },
    {
      question:
        "Which sentence uses the infinitive correctly?",
      choices: [
        "She wants that to join the club.",
        "She wants joining the club.",
        "She wants to join the club.",
        "She wants join the club."
      ],
      correctIndex: 2,
      explanation:
        "After \"wants,\" we often use the infinitive: wants to join."
    }
  ],

  super: [
    {
      question:
        "Which sentence is grammatically correct and maintains appropriate tense?",
      choices: [
        "While he was cooking, the guests arrive suddenly.",
        "While he cooks, the guests arrived suddenly.",
        "While he was cooking, the guests arrived suddenly.",
        "While he is cooking, the guests arrived suddenly."
      ],
      correctIndex: 2,
      explanation:
        "Both actions are in the past: past continuous (was cooking) and simple past (arrived)."
    },
    {
      question:
        "Which sentence avoids a faulty tense shift?",
      choices: [
        "She prepares the documents and then submitted them.",
        "She prepared the documents and then submits them.",
        "She prepares the documents and then submits them.",
        "She is preparing the documents and then submitted them."
      ],
      correctIndex: 2,
      explanation:
        "\"Prepares\" and \"submits\" are both in the simple present, so the tense is consistent."
    },
    {
      question:
        "Which sentence uses the subjunctive mood correctly?",
      choices: [
        "If I was you, I will apply for the position.",
        "If I were you, I would apply for the position.",
        "If I am you, I would apply for the position.",
        "If I were you, I will apply for the position."
      ],
      correctIndex: 1,
      explanation:
        "In hypothetical situations, we use \"If I were you\" and \"would\" to express advice."
    },
    {
      question:
        "Which sentence is correct?",
      choices: [
        "The data was analyzed and were reported accurately.",
        "The data were analyzed and reported accurately.",
        "The data was analyze and reported accurately.",
        "The data were analyze and was reported accurately."
      ],
      correctIndex: 1,
      explanation:
        "\"Data\" is often treated as plural in formal English: \"were analyzed and reported\" (parallel past participles)."
    },
    {
      question:
        "Which sentence correctly uses a causative verb?",
      choices: [
        "The manager made the staff to stay late.",
        "The manager made the staff stayed late.",
        "The manager made the staff stay late.",
        "The manager made the staff staying late."
      ],
      correctIndex: 2,
      explanation:
        "With causative \"make,\" we use make + object + base form of the verb: made the staff stay."
    },
    {
      question:
        "Which sentence uses the correct sequence of tenses in reported speech?",
      choices: [
        "She said that she will finish the report the next day.",
        "She said that she would finish the report the next day.",
        "She says that she would finish the report the next day.",
        "She says that she will finished the report the next day."
      ],
      correctIndex: 1,
      explanation:
        "With a past reporting verb (said), \"will\" usually changes to \"would\": would finish."
    },
    {
      question:
        "Which sentence correctly uses a modal of deduction about the present?",
      choices: [
        "She must to be at work now.",
        "She must being at work now.",
        "She must be at work now.",
        "She must been at work now."
      ],
      correctIndex: 2,
      explanation:
        "For deduction about the present, we use must + be + complement: She must be at work now."
    },
    {
      question:
        "Which sentence correctly uses a reduced relative clause with a present participle?",
      choices: [
        "The man who is standing near the door is my uncle.",
        "The man standing near the door is my uncle.",
        "The man stand near the door is my uncle.",
        "The man stood near the door is my uncle."
      ],
      correctIndex: 1,
      explanation:
        "\"The man standing near the door\" is the reduced form of \"The man who is standing near the door.\""
    },
    {
      question:
        "Which sentence is correct and uses a passive infinitive?",
      choices: [
        "The report needs to be submit today.",
        "The report needs to be submitted today.",
        "The report need to be submitted today.",
        "The report needs being submitted today."
      ],
      correctIndex: 1,
      explanation:
        "Passive infinitive: to be + past participle → to be submitted."
    },
    {
      question:
        "Which sentence uses a perfect infinitive correctly after a modal?",
      choices: [
        "She must have finish the task by now.",
        "She must had finished the task by now.",
        "She must have finished the task by now.",
        "She must have finishing the task by now."
      ],
      correctIndex: 2,
      explanation:
        "Perfect infinitive: have + past participle. After \"must\" we say: must have finished."
    }
  ]
};

