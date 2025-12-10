// questions/tenses.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["tenses"] = {

  // ============================================================
  // LEVEL 1: BEGINNER (50 Items) - Basic Tense Identification
  // ============================================================
  beginner: [
    {
      question: "What is the tense of this sentence? 'She walks to school every day.'",
      options: ["Simple present", "Simple past", "Present continuous", "Simple future"],
      answer: "Simple present",
      explanation: "It describes a habitual action, so it is in the simple present tense."
    },
    {
      question: "What is the tense of this sentence? 'They played basketball yesterday.'",
      options: ["Simple present", "Simple past", "Present perfect", "Future tense"],
      answer: "Simple past",
      explanation: "The verb 'played' shows a completed action in the past with the time marker 'yesterday'."
    },
    {
      question: "Choose the correct tense: 'I ___ my homework now.'",
      options: ["do", "did", "am doing", "will do"],
      answer: "am doing",
      explanation: "The action is happening right now, so we use the present continuous: 'am doing'."
    },
    {
      question: "Choose the correct verb form: 'We ___ dinner at 7 p.m. every night.'",
      options: ["are eating", "eat", "ate", "have eaten"],
      answer: "eat",
      explanation: "The sentence shows a routine/habit, so we use the simple present: 'eat'."
    },
    {
      question: "What is the tense of this sentence? 'I will call you later.'",
      options: ["Simple present", "Simple past", "Simple future", "Present continuous"],
      answer: "Simple future",
      explanation: "Using 'will' + base verb shows a decision or promise about the future."
    },
    {
      question: "Choose the correct tense: 'She ___ to the office yesterday.'",
      options: ["goes", "go", "went", "is going"],
      answer: "went",
      explanation: "'Yesterday' indicates past time, so we use the simple past form 'went'."
    },
    {
      question: "Choose the correct form: 'They ___ TV at the moment.'",
      options: ["watch", "watched", "are watching", "have watched"],
      answer: "are watching",
      explanation: "The phrase 'at the moment' indicates present continuous."
    },
    {
      question: "What is the tense of this sentence? 'He is studying for the exam.'",
      options: ["Simple present", "Present continuous", "Simple past", "Present perfect"],
      answer: "Present continuous",
      explanation: "We use 'is' + verb-ing to show an action happening now."
    },
    {
      question: "Choose the correct verb: 'We ___ to the beach tomorrow.'",
      options: ["go", "are going", "went", "have gone"],
      answer: "are going",
      explanation: "A planned future arrangement is often expressed with the present continuous."
    },
    {
      question: "Which sentence is in the simple past tense?",
      options: [
        "She is cooking dinner.",
        "She cooks dinner every day.",
        "She cooked dinner last night.",
        "She will cook dinner later."
      ],
      answer: "She cooked dinner last night.",
      explanation: "The verb 'cooked' shows a completed action in the past."
    },
    {
      question: "Choose the correct form: 'Right now, they ___ soccer.'",
      options: ["play", "plays", "are playing", "played"],
      answer: "are playing",
      explanation: "'Right now' points to present continuous: 'are playing'."
    },
    {
      question: "Which sentence is in the simple present tense?",
      options: [
        "They are working now.",
        "They will work tomorrow.",
        "They worked yesterday.",
        "They work every Monday."
      ],
      answer: "They work every Monday.",
      explanation: "It shows a repeated habit, expressed with the simple present."
    },
    {
      question: "Choose the correct verb form: 'Yesterday, I ___ to bed late.'",
      options: ["go", "goes", "went", "am going"],
      answer: "went",
      explanation: "The time word 'yesterday' calls for the simple past: 'went'."
    },
    {
      question: "What is the tense of this sentence? 'They have finished their homework.'",
      options: ["Simple past", "Present perfect", "Past continuous", "Simple present"],
      answer: "Present perfect",
      explanation: "'Have finished' shows a completed action with a present result."
    },
    {
      question: "Choose the correct tense: 'I ___ here since 2019.'",
      options: ["live", "lived", "have lived", "am living"],
      answer: "have lived",
      explanation: "We use present perfect to show an action that started in the past and continues to now."
    },
    {
      question: "Which sentence is in the past continuous tense?",
      options: [
        "I was cooking when he arrived.",
        "I cooked when he arrived.",
        "I am cooking when he arrives.",
        "I have cooked when he arrived."
      ],
      answer: "I was cooking when he arrived.",
      explanation: "'Was cooking' shows an ongoing past action interrupted by another action."
    },
    {
      question: "Choose the correct form: 'They ___ in the office when I arrived.'",
      options: ["were working", "worked", "are working", "have worked"],
      answer: "were working",
      explanation: "The action was in progress in the past, so we use 'were working'."
    },
    {
      question: "What is the tense of this sentence? 'By tomorrow, we will have finished the task.'",
      options: ["Future continuous", "Future perfect", "Simple future", "Present perfect"],
      answer: "Future perfect",
      explanation: "We use 'will have' + past participle for an action completed by a future time."
    },
    {
      question: "Choose the correct tense: 'At 8 p.m. tonight, I ___ TV.'",
      options: ["will watch", "will be watching", "watch", "watched"],
      answer: "will be watching",
      explanation: "Future continuous shows an action that will be in progress at a specific future time."
    },
    {
      question: "Which sentence is in the present perfect tense?",
      options: [
        "I am reading the book.",
        "I read the book yesterday.",
        "I have read the book.",
        "I will read the book."
      ],
      answer: "I have read the book.",
      explanation: "Present perfect uses 'have' + past participle."
    },
    {
      question: "Choose the correct form: 'We ___ already eaten dinner.'",
      options: ["have", "had", "has", "are"],
      answer: "have",
      explanation: "With subject 'we', the auxiliary is 'have'."
    },
    {
      question: "Which sentence uses the correct tense for a routine?",
      options: [
        "She is going to work every day.",
        "She goes to work every day.",
        "She went to work every day.",
        "She has gone to work every day."
      ],
      answer: "She goes to work every day.",
      explanation: "Simple present is used to show habits and routines."
    },
    {
      question: "Choose the correct tense: 'Look! It ___.'",
      options: ["rains", "was raining", "is raining", "rained"],
      answer: "is raining",
      explanation: "An action happening right now is in the present continuous tense."
    },
    {
      question: "What is the tense of this sentence? 'They were sleeping when I called.'",
      options: ["Simple past", "Past continuous", "Present perfect", "Present continuous"],
      answer: "Past continuous",
      explanation: "'Were sleeping' shows an ongoing past action."
    },
    {
      question: "Choose the correct form: 'She ___ to Manila next week.'",
      options: ["go", "is going", "went", "has gone"],
      answer: "is going",
      explanation: "A fixed future plan can be expressed using the present continuous."
    },
    {
      question: "Which sentence is in the present continuous tense?",
      options: [
        "They play basketball every Sunday.",
        "They played basketball last Sunday.",
        "They are playing basketball now.",
        "They will play basketball tomorrow."
      ],
      answer: "They are playing basketball now.",
      explanation: "'Are playing' is present continuous."
    },
    {
      question: "Choose the correct tense: 'I ___ a new phone last month.'",
      options: ["buy", "buys", "bought", "have bought"],
      answer: "bought",
      explanation: "A completed action at a specific time in the past takes the simple past."
    },
    {
      question: "What is the tense of this sentence? 'We will be staying at a hotel.'",
      options: ["Simple future", "Future continuous", "Present continuous", "Present perfect"],
      answer: "Future continuous",
      explanation: "'Will be staying' is future continuous."
    },
    {
      question: "Choose the correct form: 'They ___ here for two hours already.'",
      options: ["are waiting", "have been waiting", "waited", "had waited"],
      answer: "have been waiting",
      explanation: "Present perfect continuous shows duration from the past up to now."
    },
    {
      question: "Which sentence is in the simple future tense?",
      options: [
        "She will start her new job next week.",
        "She is starting her new job now.",
        "She started her new job last week.",
        "She has started her new job."
      ],
      answer: "She will start her new job next week.",
      explanation: "'Will start' expresses a future action."
    },
    {
      question: "Choose the correct tense: 'He ___ the report before the deadline yesterday.'",
      options: ["finishes", "finished", "was finishing", "will finish"],
      answer: "finished",
      explanation: "The action is completed in the past, so we use simple past."
    },
    {
      question: "Which sentence is in the past perfect tense?",
      options: [
        "I finished my work before 5 p.m.",
        "I had finished my work before 5 p.m.",
        "I have finished my work before 5 p.m.",
        "I will finish my work before 5 p.m."
      ],
      answer: "I had finished my work before 5 p.m.",
      explanation: "Past perfect uses 'had' + past participle."
    },
    {
      question: "Choose the correct form: 'They ___ already left when we arrived.'",
      options: ["have", "had", "were", "are"],
      answer: "had",
      explanation: "Past perfect is used for the earlier of two past actions."
    },
    {
      question: "What is the tense of this sentence? 'I have been working here for three years.'",
      options: ["Present perfect", "Present continuous", "Present perfect continuous", "Simple present"],
      answer: "Present perfect continuous",
      explanation: "We use 'have been' + verb-ing for actions continuing from past to present."
    },
    {
      question: "Choose the correct tense: 'At this time yesterday, I ___ TV.'",
      options: ["watched", "have watched", "was watching", "am watching"],
      answer: "was watching",
      explanation: "Specific past time + ongoing action = past continuous."
    },
    {
      question: "Which sentence is in the future perfect tense?",
      options: [
        "I will finish the report tomorrow.",
        "I will have finished the report by tomorrow.",
        "I am finishing the report tomorrow.",
        "I finished the report yesterday."
      ],
      answer: "I will have finished the report by tomorrow.",
      explanation: "Future perfect is 'will have' + past participle."
    },
    {
      question: "Choose the correct form: 'He ___ lunch when I saw him.'",
      options: ["has", "had", "was having", "is having"],
      answer: "was having",
      explanation: "An interrupted action in the past uses past continuous."
    },
    {
      question: "Which sentence uses present perfect correctly?",
      options: [
        "I have seen that movie yesterday.",
        "I have seen that movie already.",
        "I seen that movie already.",
        "I seeing that movie already."
      ],
      answer: "I have seen that movie already.",
      explanation: "Present perfect is used for life experience without a specific past time."
    },
    {
      question: "Choose the correct tense: 'They ___ in this office since last year.'",
      options: ["worked", "have worked", "are working", "had worked"],
      answer: "have worked",
      explanation: "Use present perfect with 'since' + point in time."
    },
    {
      question: "Which sentence is in the simple present tense?",
      options: [
        "He is talking to his friend.",
        "He talks to his friend every week.",
        "He talked to his friend yesterday.",
        "He will talk to his friend later."
      ],
      answer: "He talks to his friend every week.",
      explanation: "It describes a habitual action (simple present)."
    },
    {
      question: "Choose the correct form: 'I ___ to Cebu next month.'",
      options: ["went", "am going", "have gone", "had gone"],
      answer: "am going",
      explanation: "A planned future trip can be expressed with present continuous."
    },
    {
      question: "What is the tense of this sentence? 'They have been waiting for you since 3 p.m.'",
      options: ["Present perfect continuous", "Present continuous", "Simple present", "Past continuous"],
      answer: "Present perfect continuous",
      explanation: "Shows an action that started in the past and is still continuing."
    },
    {
      question: "Choose the correct tense: 'When the teacher came in, the students ___.'",
      options: ["talked", "were talking", "have talked", "will talk"],
      answer: "were talking",
      explanation: "Background/ongoing action in the past uses past continuous."
    },
    {
      question: "Which sentence correctly shows a future plan?",
      options: [
        "We are going to have a meeting tomorrow.",
        "We had a meeting tomorrow.",
        "We have a meeting yesterday.",
        "We are having a meeting yesterday."
      ],
      answer: "We are going to have a meeting tomorrow.",
      explanation: "'Going to' is used for planned future events."
    },
    {
      question: "Choose the correct form: 'By this time next year, I ___ college.'",
      options: ["finish", "will finish", "will have finished", "have finished"],
      answer: "will have finished",
      explanation: "Future perfect shows an action completed by a certain future time."
    },
    {
      question: "Which sentence is in the present simple and expresses a fact?",
      options: [
        "The Earth revolves around the sun.",
        "The Earth is revolving around the sun now.",
        "The Earth revolved around the sun yesterday.",
        "The Earth will revolve around the sun tomorrow."
      ],
      answer: "The Earth revolves around the sun.",
      explanation: "General truths use the simple present."
    },
    {
      question: "Choose the correct tense: 'She ___ dinner before she watched TV.'",
      options: ["has eaten", "had eaten", "was eating", "eats"],
      answer: "had eaten",
      explanation: "Past perfect shows the earlier of two past actions."
    },
    {
      question: "Which sentence is in the past perfect continuous tense?",
      options: [
        "She was working all day.",
        "She had worked all day.",
        "She had been working all day.",
        "She has been working all day."
      ],
      answer: "She had been working all day.",
      explanation: "Past perfect continuous is 'had been' + verb-ing."
    },
    {
      question: "Choose the correct form: 'I ___ this book for two hours.'",
      options: ["read", "am reading", "have been reading", "had read"],
      answer: "have been reading",
      explanation: "Shows ongoing activity that started in the past and continues up to now."
    },
    {
      question: "Which sentence is in the future continuous tense?",
      options: [
        "I will study tonight.",
        "I will be studying tonight.",
        "I am studying tonight.",
        "I studied last night."
      ],
      answer: "I will be studying tonight.",
      explanation: "'Will be studying' indicates an action in progress at a future time."
    }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Tense Usage & Markers
  // ============================================================
  intermediate: [
    {
      question: "Which sentence correctly uses the simple past with a specific time?",
      options: [
        "I have seen him last week.",
        "I saw him last week.",
        "I am seeing him last week.",
        "I had seen him last week."
      ],
      answer: "I saw him last week.",
      explanation: "A specific finished time in the past uses the simple past."
    },
    {
      question: "Choose the correct tense: 'I ___ this movie three times.'",
      options: ["saw", "have seen", "had seen", "was seeing"],
      answer: "have seen",
      explanation: "Present perfect is used for experiences without specifying when."
    },
    {
      question: "Which sentence uses the present perfect with 'since' correctly?",
      options: [
        "He has worked here since two years.",
        "He has worked here since 2020.",
        "He worked here since 2020.",
        "He is working here since 2020."
      ],
      answer: "He has worked here since 2020.",
      explanation: "Use 'since' + specific starting point with the present perfect."
    },
    {
      question: "Choose the best tense: 'They ___ in that house for ten years.'",
      options: ["live", "lived", "have lived", "are living"],
      answer: "have lived",
      explanation: "We use present perfect with 'for' + duration."
    },
    {
      question: "Which sentence shows an action that was in progress when another action happened?",
      options: [
        "They worked when the manager arrived.",
        "They have worked when the manager arrived.",
        "They were working when the manager arrived.",
        "They had worked when the manager arrived."
      ],
      answer: "They were working when the manager arrived.",
      explanation: "Past continuous + simple past shows an ongoing action interrupted by another."
    },
    {
      question: "Choose the correct form: 'While I ___ dinner, the doorbell rang.'",
      options: ["cooked", "was cooking", "have cooked", "am cooking"],
      answer: "was cooking",
      explanation: "We use past continuous after 'while' for an action in progress."
    },
    {
      question: "Which sentence correctly uses future continuous?",
      options: [
        "Tomorrow at 8, I will take the exam.",
        "Tomorrow at 8, I will be taking the exam.",
        "Tomorrow at 8, I am taking the exam.",
        "Tomorrow at 8, I was taking the exam."
      ],
      answer: "Tomorrow at 8, I will be taking the exam.",
      explanation: "Future continuous shows an action in progress at a specified future time."
    },
    {
      question: "Choose the correct tense: 'By next year, she ___ her degree.'",
      options: ["will finish", "is finishing", "will have finished", "has finished"],
      answer: "will have finished",
      explanation: "Future perfect is used with 'by' + future time."
    },
    {
      question: "Which sentence correctly uses present perfect continuous?",
      options: [
        "He has been work here since May.",
        "He has been working here since May.",
        "He is been working here since May.",
        "He had been working here since May."
      ],
      answer: "He has been working here since May.",
      explanation: "Correct structure: 'has been' + verb-ing."
    },
    {
      question: "Choose the best option: 'She ___ for the exam all week.'",
      options: ["studied", "has studied", "has been studying", "is studying"],
      answer: "has been studying",
      explanation: "Present perfect continuous expresses an activity that started in the past and continues until now."
    },
    {
      question: "Which sentence is correct in reported speech?",
      options: [
        "He said that he is tired.",
        "He said that he was tired.",
        "He says that he was tired.",
        "He say that he is tired."
      ],
      answer: "He said that he was tired.",
      explanation: "After a past reporting verb 'said', we usually backshift the tense."
    },
    {
      question: "Choose the correct tense: 'He said he ___ the documents already.'",
      options: ["sends", "sent", "had sent", "has sent"],
      answer: "had sent",
      explanation: "The earlier action in the past uses the past perfect."
    },
    {
      question: "Which sentence correctly uses the first conditional?",
      options: [
        "If it will rain, we will stay at home.",
        "If it rains, we will stay at home.",
        "If it rained, we will stay at home.",
        "If it is rains, we will stay at home."
      ],
      answer: "If it rains, we will stay at home.",
      explanation: "First conditional: If + present simple, will + base form."
    },
    {
      question: "Choose the correct tense pattern: 'If I ___ time, I will help you.'",
      options: ["have", "had", "will have", "am having"],
      answer: "have",
      explanation: "We use the present simple after 'if' in the first conditional."
    },
    {
      question: "Which sentence is an example of the second conditional?",
      options: [
        "If he studies, he will pass.",
        "If he studied, he would pass.",
        "If he had studied, he would have passed.",
        "If he is studying, he will pass."
      ],
      answer: "If he studied, he would pass.",
      explanation: "Second conditional is used for unreal or unlikely present/future situations."
    },
    {
      question: "Choose the correct tense: 'If I ___ you, I would apologize.'",
      options: ["am", "was", "were", "will be"],
      answer: "were",
      explanation: "In formal English, we use 'were' with 'I' in unreal conditionals."
    },
    {
      question: "Which sentence correctly uses the third conditional?",
      options: [
        "If she had studied, she would pass.",
        "If she studied, she would have passed.",
        "If she had studied, she would have passed.",
        "If she studies, she would have passed."
      ],
      answer: "If she had studied, she would have passed.",
      explanation: "Third conditional: If + past perfect, would have + past participle."
    },
    {
      question: "Choose the correct tense: 'By the time we arrived, the movie ___.'",
      options: ["has started", "had started", "started", "was starting"],
      answer: "had started",
      explanation: "The movie started before we arrived, so we use past perfect."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I am knowing him for many years.",
        "I know him for many years.",
        "I have known him for many years.",
        "I have been know him for many years."
      ],
      answer: "I have known him for many years.",
      explanation: "We use present perfect with stative verbs like 'know'."
    },
    {
      question: "Choose the correct tense: 'She ___ her report when the power went out.'",
      options: ["has typed", "typed", "was typing", "had typed"],
      answer: "was typing",
      explanation: "An action in progress in the past is described by the past continuous."
    },
    {
      question: "Which sentence correctly uses future perfect?",
      options: [
        "By 5 p.m., I will finish my work.",
        "By 5 p.m., I will have finished my work.",
        "By 5 p.m., I finish my work.",
        "By 5 p.m., I finished my work."
      ],
      answer: "By 5 p.m., I will have finished my work.",
      explanation: "Future perfect indicates completion before a specific future time."
    },
    {
      question: "Choose the correct tense: 'We ___ for two hours before the bus arrived.'",
      options: ["waited", "have waited", "had waited", "were waiting"],
      answer: "had waited",
      explanation: "Past perfect is used to show duration before another past event."
    },
    {
      question: "Which sentence correctly shows future plans using present continuous?",
      options: [
        "We are meeting the client tomorrow.",
        "We meet the client tomorrow.",
        "We will are meeting the client tomorrow.",
        "We were meeting the client tomorrow."
      ],
      answer: "We are meeting the client tomorrow.",
      explanation: "Present continuous can be used for fixed future arrangements."
    },
    {
      question: "Choose the correct tense: 'She ___ her keys again. She is always losing them.'",
      options: ["loses", "lost", "has lost", "had lost"],
      answer: "has lost",
      explanation: "Present perfect is used because the result is relevant now."
    },
    {
      question: "Which sentence uses present perfect with 'already' correctly?",
      options: [
        "I already have finished my work.",
        "I have already finished my work.",
        "I have finished already my work.",
        "I finished already my work."
      ],
      answer: "I have already finished my work.",
      explanation: "The adverb 'already' is placed between 'have' and the past participle."
    },
    {
      question: "Choose the correct tense: 'They ___ lunch when we arrived, so we joined them.'",
      options: ["had", "had had", "were having", "have had"],
      answer: "were having",
      explanation: "The action was in progress in the past, so use past continuous."
    },
    {
      question: "Which sentence correctly uses past perfect continuous?",
      options: [
        "She had been working for hours when she finally rested.",
        "She has been working for hours when she finally rested.",
        "She was been working for hours when she finally rested.",
        "She had worked for hours when she finally rested."
      ],
      answer: "She had been working for hours when she finally rested.",
      explanation: "Past perfect continuous shows duration before another past action."
    },
    {
      question: "Choose the correct tense: 'I ___ in Manila for five years before I moved to Cebu.'",
      options: ["have lived", "had lived", "was living", "lived"],
      answer: "had lived",
      explanation: "Past perfect is used for the earlier situation before another past event."
    },
    {
      question: "Which sentence is correct for a scheduled future event?",
      options: [
        "The train leaves at 6 a.m. tomorrow.",
        "The train is leave at 6 a.m. tomorrow.",
        "The train will leaves at 6 a.m. tomorrow.",
        "The train leaving at 6 a.m. tomorrow."
      ],
      answer: "The train leaves at 6 a.m. tomorrow.",
      explanation: "We use simple present for timetables and schedules."
    },
    {
      question: "Choose the correct tense: 'Right now, the team ___ their presentation.'",
      options: ["prepares", "prepared", "is preparing", "was preparing"],
      answer: "is preparing",
      explanation: "The phrase 'Right now' requires present continuous."
    },
    {
      question: "Which sentence correctly uses a time clause with future meaning?",
      options: [
        "When he will arrive, we will start the meeting.",
        "When he arrives, we will start the meeting.",
        "When he arrive, we will start the meeting.",
        "When he arriving, we will start the meeting."
      ],
      answer: "When he arrives, we will start the meeting.",
      explanation: "Time clauses use present simple to refer to the future."
    },
    {
      question: "Choose the correct tense: 'After she ___ her work, she went home.'",
      options: ["has finished", "finished", "had finished", "was finishing"],
      answer: "had finished",
      explanation: "Past perfect is used for the earlier action before 'went home'."
    },
    {
      question: "Which sentence is grammatically correct?",
      options: [
        "I was knowing the answer, but I was nervous.",
        "I knew the answer, but I was nervous.",
        "I have knew the answer, but I was nervous.",
        "I am knowing the answer, but I was nervous."
      ],
      answer: "I knew the answer, but I was nervous.",
      explanation: "The verb 'know' is stative, so we use simple past here."
    },
    {
      question: "Choose the correct tense: 'He ___ his lunch by the time the meeting started.'",
      options: ["has finished", "had finished", "was finishing", "finished"],
      answer: "had finished",
      explanation: "We use past perfect for the action completed before another past event."
    },
    {
      question: "Which sentence correctly uses present perfect with 'ever'?",
      options: [
        "Did you ever visited Baguio?",
        "Have you ever visited Baguio?",
        "Have you ever visit Baguio?",
        "Are you ever visited Baguio?"
      ],
      answer: "Have you ever visited Baguio?",
      explanation: "Present perfect + 'ever' shows life experience."
    },
    {
      question: "Choose the correct tense: 'I ___ to call you all day, but you were busy.'",
      options: ["tried", "have tried", "had tried", "was trying"],
      answer: "was trying",
      explanation: "Continuous past effort is expressed with 'was trying'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She will be finished the report by tomorrow.",
        "She will have finished the report by tomorrow.",
        "She will has finished the report by tomorrow.",
        "She will has finish the report by tomorrow."
      ],
      answer: "She will have finished the report by tomorrow.",
      explanation: "Future perfect: 'will have' + past participle."
    },
    {
      question: "Choose the correct tense: 'They ___ when the manager walked in.'",
      options: ["have discussed", "had discussed", "were discussing", "discussed"],
      answer: "were discussing",
      explanation: "Past continuous is used for an action in progress when another action occurred."
    },
    {
      question: "Which sentence correctly uses present perfect to show recent completion?",
      options: [
        "I just finish my work.",
        "I have just finished my work.",
        "I had just finished my work now.",
        "I am just finished my work."
      ],
      answer: "I have just finished my work.",
      explanation: "Present perfect + 'just' indicates recent completion."
    },
    {
      question: "Choose the correct tense: 'She ___ in the bank before she became a teacher.'",
      options: ["works", "worked", "had worked", "has worked"],
      answer: "had worked",
      explanation: "We use past perfect for the earlier job before she became a teacher."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He is always complaining about the traffic.",
        "He always is complaining about the traffic.",
        "He has always complaining about the traffic.",
        "He was always complain about the traffic."
      ],
      answer: "He is always complaining about the traffic.",
      explanation: "Present continuous + 'always' can show an annoying habit."
    },
    {
      question: "Choose the correct tense: 'They ___ the documents by the time you arrive.'",
      options: ["have prepared", "will have prepared", "will prepared", "had prepared"],
      answer: "will have prepared",
      explanation: "Future perfect shows completion before a future time."
    },
    {
      question: "Which sentence correctly uses past perfect for a cause?",
      options: [
        "He was tired because he worked all night.",
        "He was tired because he had worked all night.",
        "He is tired because he had worked all night.",
        "He had tired because he worked all night."
      ],
      answer: "He was tired because he had worked all night.",
      explanation: "Past perfect explains the cause of his tiredness in the past."
    },
    {
      question: "Choose the correct tense: 'I ___ here for an hour before anyone helped me.'",
      options: ["have waited", "waited", "was waiting", "had been waiting"],
      answer: "had been waiting",
      explanation: "Past perfect continuous shows duration before another past action."
    },
    {
      question: "Which sentence uses future continuous correctly?",
      options: [
        "Next week, I will be taking my vacation.",
        "Next week, I will taking my vacation.",
        "Next week, I am be taking my vacation.",
        "Next week, I will have taking my vacation."
      ],
      answer: "Next week, I will be taking my vacation.",
      explanation: "Future continuous: 'will be' + verb-ing."
    },
    {
      question: "Choose the correct tense: 'By the time you get home, I ___ dinner.'",
      options: ["will cook", "will be cooking", "will have cooked", "have cooked"],
      answer: "will have cooked",
      explanation: "Future perfect: the cooking will be finished before you get home."
    },
    {
      question: "Which sentence correctly uses a time clause in the past?",
      options: [
        "When I was a child, I have played outside every day.",
        "When I was a child, I played outside every day.",
        "When I am a child, I played outside every day.",
        "When I was a child, I am playing outside every day."
      ],
      answer: "When I was a child, I played outside every day.",
      explanation: "Past habit is expressed with the simple past."
    },
    {
      question: "Choose the correct tense: 'We ___ our guests at 7 p.m. tomorrow.'",
      options: ["will be meeting", "are meeting", "meet", "all of the above can be correct"],
      answer: "all of the above can be correct",
      explanation: "All forms can refer to a future arrangement depending on context."
    },
    {
      question: "Which sentence correctly uses present perfect with 'for'?",
      options: [
        "I have been here for two hours.",
        "I am here for two hours.",
        "I was here for two hours.",
        "I had been here for two hours now."
      ],
      answer: "I have been here for two hours.",
      explanation: "Present perfect is used with 'for' + duration up to now."
    },
    {
      question: "Choose the correct tense: 'He ___ from a cold lately.'",
      options: ["suffers", "suffered", "has been suffering", "was suffering"],
      answer: "has been suffering",
      explanation: "Present perfect continuous shows a recent ongoing problem."
    }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Complex Structures
  // ============================================================
  advanced: [
    {
      question: "Identify the error in verb tense or form: 'She has went to the office already.'",
      options: ["has", "went", "to the office", "already"],
      answer: "went",
      explanation: "The past participle of 'go' is 'gone', so it should be 'has gone'."
    },
    {
      question: "Choose the best revision: 'The report was submit by the assistant yesterday.'",
      options: [
        "The report was submitted by the assistant yesterday.",
        "The report is submitted by the assistant yesterday.",
        "The report has submitted by the assistant yesterday.",
        "The report submitted by the assistant yesterday."
      ],
      answer: "The report was submitted by the assistant yesterday.",
      explanation: "We need the past participle 'submitted' in the passive voice."
    },
    {
      question: "Which sentence uses parallel verb forms correctly?",
      options: [
        "He likes to read, writing, and to jog.",
        "He likes reading, to write, and jogging.",
        "He likes reading, writing, and jogging.",
        "He likes to read, to writing, and to jog."
      ],
      answer: "He likes reading, writing, and jogging.",
      explanation: "All items in the list use the -ing form, so the structure is parallel."
    },
    {
      question: "Choose the correct verb form: 'If she ___ the exam, she would be very happy.'",
      options: ["passes", "passed", "had passed", "pass"],
      answer: "passed",
      explanation: "Second conditional: If + past simple, would + base verb."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "If they had arrive earlier, they will catch the bus.",
        "If they arrived earlier, they would have caught the bus.",
        "If they had arrived earlier, they would have caught the bus.",
        "If they arrive earlier, they would have caught the bus."
      ],
      answer: "If they had arrived earlier, they would have caught the bus.",
      explanation: "Third conditional: If + past perfect, would have + past participle."
    },
    {
      question: "Choose the correct verb: 'He insisted that she ___ the meeting.'",
      options: ["attends", "attended", "attend", "will attend"],
      answer: "attend",
      explanation: "After 'insist that', we often use the subjunctive base form of the verb."
    },
    {
      question: "Which sentence maintains correct tense sequence?",
      options: [
        "She said she will finish the work yesterday.",
        "She said she would finish the work today.",
        "She says she would finish the work today.",
        "She says she will finished the work today."
      ],
      answer: "She said she would finish the work today.",
      explanation: "After a past reporting verb, 'will' usually changes to 'would'."
    },
    {
      question: "Choose the correct verb form: 'By the time the train arrived, we ___ for an hour.'",
      options: ["waited", "had been waiting", "have waited", "were waiting"],
      answer: "had been waiting",
      explanation: "Past perfect continuous is used for duration before a past event."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She suggested that he goes to the doctor.",
        "She suggested that he go to the doctor.",
        "She suggested that he went to the doctor.",
        "She suggested that he going to the doctor."
      ],
      answer: "She suggested that he go to the doctor.",
      explanation: "The subjunctive uses the base form 'go' after 'suggest that'."
    },
    {
      question: "Choose the correct verb: 'Hardly ___ the meeting started when the lights went out.'",
      options: ["had", "has", "have", "having"],
      answer: "had",
      explanation: "Inversion with 'hardly' uses 'had' before the subject in the past perfect."
    },
    {
      question: "Which sentence uses the passive correctly?",
      options: [
        "The proposal was review by the committee.",
        "The proposal reviewed by the committee.",
        "The proposal was reviewed by the committee.",
        "The proposal is reviewing by the committee."
      ],
      answer: "The proposal was reviewed by the committee.",
      explanation: "Passive form: 'was' + past participle 'reviewed'."
    },
    {
      question: "Choose the correct verb form: 'He would rather ___ at home than go out tonight.'",
      options: ["stay", "stays", "stayed", "staying"],
      answer: "stay",
      explanation: "We use the base form of the verb after 'would rather'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She could have went with us.",
        "She could have gone with us.",
        "She could had gone with us.",
        "She could gone with us."
      ],
      answer: "She could have gone with us.",
      explanation: "Modal + have + past participle: 'could have gone'."
    },
    {
      question: "Choose the correct verb: 'The results ___ announced once the panel has decided.'",
      options: ["will be", "are", "were", "have been"],
      answer: "will be",
      explanation: "Future passive: 'will be' + past participle."
    },
    {
      question: "Which sentence avoids a faulty tense shift?",
      options: [
        "Maria was walking to work and suddenly meets her old friend.",
        "Maria walked to work and suddenly meets her old friend.",
        "Maria was walking to work when she suddenly met her old friend.",
        "Maria is walking to work and suddenly met her old friend."
      ],
      answer: "Maria was walking to work when she suddenly met her old friend.",
      explanation: "The sentence consistently uses past tenses in a narrative."
    },
    {
      question: "Choose the correct verb form: 'At this time tomorrow, we ___ our exam.'",
      options: ["take", "will take", "will be taking", "have taken"],
      answer: "will be taking",
      explanation: "Future continuous: an action in progress at a future time."
    },
    {
      question: "Which sentence is grammatically correct?",
      options: [
        "Being late, the meeting was missed by him.",
        "Being late, he missed the meeting.",
        "He missed the meeting, being late.",
        "He being late, missed the meeting."
      ],
      answer: "Being late, he missed the meeting.",
      explanation: "The -ing clause must logically refer to the subject."
    },
    {
      question: "Choose the correct verb: 'No sooner ___ the alarm rang than everyone rushed outside.'",
      options: ["had", "has", "have", "having"],
      answer: "had",
      explanation: "Inversion with 'No sooner' uses 'had' before the subject in the past perfect."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "The data was analyzed by the team.",
        "The data were analyzed by the team.",
        "The data are analyze by the team.",
        "The data is analyzing by the team."
      ],
      answer: "The data were analyzed by the team.",
      explanation: "In formal English, 'data' is treated as plural."
    },
    {
      question: "I wish I ___ the courage to speak up earlier.",
      options: ["have", "had", "will have", "having"],
      answer: "had",
      explanation: "We use 'wish' + past simple to talk about a regret or unreal situation in the past."
    },
    {
      question: "Which sentence correctly uses the perfect infinitive?",
      options: [
        "He pretended to have saw the movie.",
        "He pretended to have seen the movie.",
        "He pretended to had seen the movie.",
        "He pretended having seen the movie."
      ],
      answer: "He pretended to have seen the movie.",
      explanation: "Perfect infinitive: 'to have' + past participle."
    },
    {
      question: "Choose the correct verb: 'If only he ___ more careful, the accident could have been avoided.'",
      options: ["is", "was", "had been", "has been"],
      answer: "had been",
      explanation: "We use 'If only' + past perfect to express regret about the past."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He denied that he has taken the money.",
        "He denied that he had taken the money.",
        "He denies that he had taken the money.",
        "He deny that he has taken the money."
      ],
      answer: "He denied that he had taken the money.",
      explanation: "Past reporting verb + past perfect for the earlier action."
    },
    {
      question: "Choose the correct verb form: 'They claimed that they ___ the documents already.'",
      options: ["sent", "had sent", "have sent", "send"],
      answer: "have sent",
      explanation: "Present perfect shows a recently completed action relevant now."
    },
    {
      question: "Which sentence uses the causative correctly?",
      options: [
        "She made him to clean the room.",
        "She had him cleaned the room.",
        "She had him clean the room.",
        "She made him cleaning the room."
      ],
      answer: "She had him clean the room.",
      explanation: "Causative structure: 'have' + person + base verb."
    },
    {
      question: "Choose the correct verb: 'He apologized for not ___ the deadline.'",
      options: ["meet", "meets", "meeting", "met"],
      answer: "meeting",
      explanation: "After prepositions like 'for', we use the -ing form."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Having finish the work, they went home.",
        "Having finished the work, they went home.",
        "Having finished the work, the home was gone by them.",
        "Having finishing the work, they went home."
      ],
      answer: "Having finished the work, they went home.",
      explanation: "Perfect participle: 'having' + past participle."
    },
    {
      question: "Choose the correct verb form: 'By 2025, the project ___ for three years.'",
      options: ["will be running", "will have run", "will have been running", "has been running"],
      answer: "will have been running",
      explanation: "Future perfect continuous shows duration up to a future point."
    },
    {
      question: "Which sentence has correct subject–verb agreement and tense?",
      options: [
        "A series of lectures are scheduled next month.",
        "A series of lectures is scheduled next month.",
        "A series of lectures was schedule next month.",
        "A series of lectures were schedule next month."
      ],
      answer: "A series of lectures is scheduled next month.",
      explanation: "The subject 'series' is singular, so we use 'is scheduled'."
    },
    {
      question: "Choose the correct verb: 'Scarcely ___ we started the test when the bell rang.'",
      options: ["had", "have", "has", "having"],
      answer: "had",
      explanation: "Scarcely + past perfect uses 'had' before the subject."
    },
    {
      question: "Which sentence correctly uses a reduced relative clause?",
      options: [
        "The man who is standing outside is my uncle.",
        "The man standing outside is my uncle.",
        "The man stand outside is my uncle.",
        "The man who standing outside is my uncle."
      ],
      answer: "The man standing outside is my uncle.",
      explanation: "We can reduce 'who is standing' to 'standing'."
    },
    {
      question: "Choose the correct verb form: 'He admitted ___ the mistake.'",
      options: ["to make", "to making", "to have make", "to have making"],
      answer: "to making",
      explanation: "We use 'admit to' + -ing form."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "They had been knew each other for years.",
        "They have been knowing each other for years.",
        "They had known each other for years.",
        "They have knew each other for years."
      ],
      answer: "They had known each other for years.",
      explanation: "We use past perfect with stative verbs like 'know'."
    },
    {
      question: "Choose the correct verb: 'The manager would prefer that the report ___ by Friday.'",
      options: ["submits", "submitted", "be submitted", "is submitted"],
      answer: "be submitted",
      explanation: "Subjunctive passive: 'be' + past participle."
    },
    {
      question: "Which sentence maintains correct aspect?",
      options: [
        "I have worked here since two years.",
        "I am working here since two years.",
        "I had worked here since two years.",
        "I have been working here for two years."
      ],
      answer: "I have been working here for two years.",
      explanation: "Present perfect continuous is correct with 'for two years'."
    },
    {
      question: "Choose the correct verb form: 'He stopped ___ when he saw the sign.'",
      options: ["to talk", "talking", "to talking", "talked"],
      answer: "to talk",
      explanation: "Here 'to talk' shows purpose (why he stopped)."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Not only he was late, but he also forgot the files.",
        "Not only was he late, but he also forgot the files.",
        "Not only he late, but he also forgot the files.",
        "Not only was he late, but also forgot the files."
      ],
      answer: "Not only was he late, but he also forgot the files.",
      explanation: "Inversion is required after 'Not only' at the beginning."
    },
    {
      question: "Choose the correct verb: 'The supervisor demanded that the forms ___ immediately.'",
      options: ["are submitted", "be submitted", "submitted", "submits"],
      answer: "be submitted",
      explanation: "Subjunctive: base form 'be' + past participle."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He seems to knowing the answer.",
        "He seems know the answer.",
        "He seems to know the answer.",
        "He seem to know the answer."
      ],
      answer: "He seems to know the answer.",
      explanation: "We use 'seems to know' with the infinitive."
    },
    {
      question: "Choose the correct verb form: 'Having ___ my work, I went out for a walk.'",
      options: ["finish", "finished", "finishing", "to finish"],
      answer: "finished",
      explanation: "Perfect participle: 'having finished'."
    },
    {
      question: "Which sentence uses the future perfect correctly?",
      options: [
        "By next week, I will finish the project.",
        "By next week, I finish the project.",
        "By next week, I will have finished the project.",
        "By next week, I am finishing the project."
      ],
      answer: "By next week, I will have finished the project.",
      explanation: "Future perfect shows completion by a future time."
    },
    {
      question: "Choose the correct verb: 'I would have helped you if I ___ about it.'",
      options: ["knew", "had knew", "had known", "know"],
      answer: "had known",
      explanation: "Third conditional: If + past perfect, would have + past participle."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He apologized that he was late.",
        "He apologized for being late.",
        "He apologized to be late.",
        "He apologized of being late."
      ],
      answer: "He apologized for being late.",
      explanation: "After 'apologize for', we use the -ing form."
    },
    {
      question: "Choose the correct verb form: 'The documents, together with the envelope, ___ missing.'",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "The main subject is 'documents' (plural), so we use 'are'."
    },
    {
      question: "Choose the correct verb: 'If he ___ harder, he might have passed the exam.'",
      options: ["had studied", "has studied", "studied", "would study"],
      answer: "had studied",
      explanation: "This is a third conditional referring to a past situation."
    },
    {
      question: "Which sentence uses the future perfect correctly?",
      options: [
        "By the end of this month, she will work here for five years.",
        "By the end of this month, she will have worked here for five years.",
        "By the end of this month, she has worked here for five years.",
        "By the end of this month, she will be work here for five years."
      ],
      answer: "By the end of this month, she will have worked here for five years.",
      explanation: "Future perfect expresses a completed duration by a future time."
    },
    {
      question: "Choose the correct verb form: 'No matter how hard he ___, he couldn't solve the puzzle.'",
      options: ["tries", "tried", "had tried", "has tried"],
      answer: "tried",
      explanation: "We use the simple past because the situation is in the past."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He acts as if he know everything.",
        "He acts as if he knew everything.",
        "He acts as if he had knew everything.",
        "He acts as if he knows everything (impossible)."
      ],
      answer: "He acts as if he knew everything.",
      explanation: "We use a past tense after 'as if' to show an unreal situation."
    },
    {
      question: "Choose the correct verb: 'She was supposed ___ at 8 a.m., but she arrived late.'",
      options: ["to arrive", "arrive", "arriving", "to arriving"],
      answer: "to arrive",
      explanation: "We use 'supposed to' + base form."
    },
    {
      question: "Which sentence correctly completes the idea? 'He apologized for ___ the deadline several times.'",
      options: ["misses", "missing", "to miss", "have missed"],
      answer: "missing",
      explanation: "After 'for', we use the -ing form."
    }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (50 Items) - Error Identification
  // ============================================================
  expert: [
    {
      question: "Find the error: 'Had I know about the traffic, I would have left earlier.'",
      options: ["Had I", "know", "about the traffic", "I would have left earlier"],
      answer: "know",
      explanation: "It should be 'known' (past participle) after 'had I'."
    },
    {
      question: "Find the error: 'The guidelines was implemented strictly last year.'",
      options: ["The guidelines", "was", "implemented strictly", "last year"],
      answer: "was",
      explanation: "'Guidelines' is plural, so it should be 'were'."
    },
    {
      question: "Find the error: 'Walking down the street, the cars seemed noisy.'",
      options: ["Walking", "down the street", "the cars", "seemed noisy"],
      answer: "the cars",
      explanation: "Dangling modifier: the subject should be the person walking, not 'the cars'."
    },
    {
      question: "Find the error: 'I would rather you discuss this in private.'",
      options: ["I would rather", "you", "discuss", "this in private"],
      answer: "discuss",
      explanation: "After 'would rather you', we usually use a past form: 'discussed'."
    },
    {
      question: "Find the error: 'It is high time we call for reforms.'",
      options: ["It is high time", "we", "call", "for reforms"],
      answer: "call",
      explanation: "We use the past simple after 'It is high time': 'we called'."
    },
    {
      question: "Find the error: 'He acted as though he knows everything.'",
      options: ["He acted", "as though", "he", "knows everything"],
      answer: "knows everything",
      explanation: "In this unreal context, it should be 'knew' instead of 'knows'."
    },
    {
      question: "Find the error: 'If I was in your position, I would resign.'",
      options: ["If I", "was", "in your position", "I would resign"],
      answer: "was",
      explanation: "Formal English uses 'were' instead of 'was' in this unreal conditional."
    },
    {
      question: "Find the error: 'I insist that the report is accurate.'",
      options: ["I insist", "that the report", "is", "accurate"],
      answer: "is",
      explanation: "Subjunctive is preferred: 'that the report be accurate'."
    },
    {
      question: "Find the error: 'He recommended that she takes a break.'",
      options: ["He recommended", "that she", "takes", "a break"],
      answer: "takes",
      explanation: "Subjunctive form should be 'take' (base form) after 'recommended that'."
    },
    {
      question: "Find the error: 'No sooner has the storm started than the power went out.'",
      options: ["No sooner", "has", "the storm started", "than the power went out"],
      answer: "has",
      explanation: "For a past event, use 'had': 'No sooner had the storm started...'."
    },
    {
      question: "Find the error: 'By the time we arrive, they leave.'",
      options: ["By the time", "we arrive", "they", "leave"],
      answer: "leave",
      explanation: "It should be future perfect: 'they will have left'."
    },
    {
      question: "Find the error: 'He was reported to seen the documents.'",
      options: ["He was reported", "to", "seen", "the documents"],
      answer: "seen",
      explanation: "We use the perfect infinitive 'to have seen'."
    },
    {
      question: "Find the error: 'Having finish the work, they went home.'",
      options: ["Having", "finish", "the work", "they went home"],
      answer: "finish",
      explanation: "The past participle 'finished' is needed: 'Having finished the work...'."
    },
    {
      question: "Find the error: 'The findings as well as the recommendation is presented tomorrow.'",
      options: ["The findings", "as well as the recommendation", "is", "presented tomorrow"],
      answer: "is",
      explanation: "The main subject 'findings' is plural, so the verb should be 'are'."
    },
    {
      question: "Find the error: 'It was the director who approve the plan.'",
      options: ["It was", "the director", "who", "approve the plan"],
      answer: "approve the plan",
      explanation: "Past context requires 'approved the plan'."
    },
    {
      question: "Find the error: 'Scarcely have we entered when the phone rang.'",
      options: ["Scarcely", "have", "we entered", "when the phone rang"],
      answer: "have",
      explanation: "For a past action with 'scarcely', we should use 'had'."
    },
    {
      question: "Find the error: 'He would rather that you leave now.'",
      options: ["He would rather", "that", "you", "leave now"],
      answer: "leave now",
      explanation: "After 'would rather', the verb usually appears in the past form: 'left'."
    },
    {
      question: "Find the error: 'If only she has arrived on time.'",
      options: ["If only", "she", "has arrived", "on time"],
      answer: "has arrived",
      explanation: "A past regret calls for 'had arrived'."
    },
    {
      question: "Find the error: 'He has been work here since May.'",
      options: ["He", "has been", "work here", "since May"],
      answer: "work here",
      explanation: "Present perfect continuous requires verb-ing: 'working here'."
    },
    {
      question: "Find the error: 'The board decreed that the policy is effective immediately.'",
      options: ["The board decreed", "that the policy", "is", "effective immediately"],
      answer: "is",
      explanation: "Subjunctive is preferred after such verbs: 'be effective immediately'."
    },
    {
      question: "Find the error: 'After have finished the work, they went home.'",
      options: ["After", "have finished", "the work", "they went home"],
      answer: "have finished",
      explanation: "We should say 'having finished' or 'finishing'."
    },
    {
      question: "Find the error: 'She denied to ignore the instructions.'",
      options: ["She denied", "to", "ignore", "the instructions"],
      answer: "to",
      explanation: "'Deny' is followed by a gerund: 'denied ignoring the instructions'."
    },
    {
      question: "Find the error: 'The committee decide that the event be postponed.'",
      options: ["The committee", "decide", "that the event", "be postponed"],
      answer: "decide",
      explanation: "The verb should be in the correct tense: 'decides' or 'decided'."
    },
    {
      question: "Find the error: 'By the time you read this, I already took my flight.'",
      options: ["By the time", "you read this", "I", "already took my flight"],
      answer: "already took my flight",
      explanation: "Future perfect is needed: 'I will have taken my flight'."
    },
    {
      question: "Find the error: 'He likes to jog, swimming, and to read.'",
      options: ["He likes", "to jog", "swimming", "and to read"],
      answer: "swimming",
      explanation: "We need parallel structure: 'to jog, to swim, and to read'."
    },
    {
      question: "Find the error: 'Rarely we see such dedication.'",
      options: ["Rarely", "we see", "such dedication", "no error"],
      answer: "we see",
      explanation: "Inversion is required: 'Rarely do we see such dedication.'"
    },
    {
      question: "Find the error: 'He came to the office without having finish his report.'",
      options: ["He came", "to the office", "without", "having finish his report"],
      answer: "having finish his report",
      explanation: "It should be 'having finished his report'."
    },
    {
      question: "Find the error: 'They appear to has studied the problem.'",
      options: ["They appear", "to", "has studied", "the problem"],
      answer: "has studied",
      explanation: "Infinitive requires 'have studied', not 'has studied'."
    },
    {
      question: "Find the error: 'Next month I will be working here for a year.'",
      options: ["Next month", "I will", "be working here", "for a year"],
      answer: "be working here",
      explanation: "Duration up to a future point needs 'will have been working'."
    },
    {
      question: "Find the error: 'Seldom has we faced such a situation.'",
      options: ["Seldom", "has", "we faced", "such a situation"],
      answer: "has",
      explanation: "The subject 'we' requires 'have': 'Seldom have we faced...'."
    },
    {
      question: "Find the error: 'He regrets not to have spoken up earlier.'",
      options: ["He regrets", "not", "to have spoken", "up earlier"],
      answer: "to have spoken",
      explanation: "After 'regret', we usually use a gerund: 'not having spoken up earlier'."
    },
    {
      question: "Find the error: 'The instructions state that the form is to fill in black ink.'",
      options: ["The instructions state", "that the form", "is to fill", "in black ink"],
      answer: "is to fill",
      explanation: "It should be passive: 'is to be filled in black ink'."
    },
    {
      question: "Find the error: 'He expects to promoted soon.'",
      options: ["He expects", "to", "promoted", "soon"],
      answer: "promoted",
      explanation: "It should be 'to be promoted' (passive infinitive)."
    },
    {
      question: "Find the error: 'I would sooner you tell me the truth.'",
      options: ["I would sooner", "you", "tell", "me the truth"],
      answer: "tell",
      explanation: "After 'would sooner/sooner', we usually use a past form: 'told'."
    },
    {
      question: "Find the error: 'He appears to had forgotten the instructions.'",
      options: ["He appears", "to", "had forgotten", "the instructions"],
      answer: "had forgotten",
      explanation: "It should be 'to have forgotten' (perfect infinitive)."
    },
    {
      question: "Find the error: 'If it were not for his help, we are lost.'",
      options: ["If it", "were not", "for his help", "we are lost"],
      answer: "we are lost",
      explanation: "The result clause in an unreal situation uses 'would be lost'."
    },
    {
      question: "Find the error: 'Under no circumstances we will reveal the source.'",
      options: ["Under no circumstances", "we will", "reveal", "the source"],
      answer: "we will",
      explanation: "Inversion is needed: 'Under no circumstances will we reveal the source.'"
    },
    {
      question: "Find the error: 'Despite to be exhausted, she continued.'",
      options: ["Despite", "to be", "exhausted", "she continued"],
      answer: "to be",
      explanation: "'Despite' is followed by a noun or gerund: 'being exhausted'."
    },
    {
      question: "Find the error: 'He had hardly finish speaking when they left.'",
      options: ["He had hardly", "finish", "speaking", "when they left"],
      answer: "finish",
      explanation: "Past participle needed: 'finished'."
    },
    {
      question: "Find the error: 'The project is believed be a success by everyone.'",
      options: ["The project is believed", "be", "a success", "by everyone"],
      answer: "be",
      explanation: "It should be 'to be': 'is believed to be a success'."
    },
    {
      question: "Find the error: 'If I studied harder, I would have a better job now.'",
      options: ["If I", "studied harder", "I would have", "a better job now"],
      answer: "studied harder",
      explanation: "For a present result with a past cause, use 'had studied'."
    },
    {
      question: "Find the error: 'He seems to be meet the requirements.'",
      options: ["He seems", "to be", "meet", "the requirements"],
      answer: "meet",
      explanation: "We either say 'to meet' or 'to be meeting'; 'to be meet' is incorrect."
    },
    {
      question: "Find the error: 'Were he to arrive now, we will still accept him.'",
      options: ["Were he", "to arrive now", "we will", "still accept him"],
      answer: "we will",
      explanation: "In this hypothetical structure, we use 'would': 'we would still accept him'."
    },
    {
      question: "Find the error: 'Not until later we realized how serious it was.'",
      options: ["Not until later", "we realized", "how serious", "it was"],
      answer: "we realized",
      explanation: "Inversion: 'Not until later did we realize...'."
    },
    {
      question: "Find the error: 'If he followed the instructions, he wouldn't be in trouble.'",
      options: ["If he", "followed", "the instructions", "he wouldn't be in trouble"],
      answer: "followed",
      explanation: "To refer to a past situation causing a present result, use 'had followed'."
    },
    {
      question: "Find the error: 'Only after the meeting we learned the truth about the merger.'",
      options: ["Only after the meeting", "we learned", "the truth", "about the merger"],
      answer: "we learned",
      explanation: "We need inversion: 'Only after the meeting did we learn the truth...'."
    },
    {
      question: "Find the error: 'So difficult the exam was that few passed.'",
      options: ["So difficult", "the exam was", "that", "few passed"],
      answer: "the exam was",
      explanation: "Inversion is required: 'So difficult was the exam that...'."
    },
    {
      question: "Find the error: 'If it wasn't for your help, I would have failed.'",
      options: ["If it", "wasn't", "for your help", "I would have failed"],
      answer: "wasn't",
      explanation: "For an unreal past condition, use 'hadn't been' instead of 'wasn't'."
    },
    {
      question: "Find the error: 'Little we knew about the plan.'",
      options: ["Little", "we knew", "about", "the plan"],
      answer: "we knew",
      explanation: "Inversion again: 'Little did we know about the plan.'"
    },
    {
      question: "Find the error: 'Should you having any questions, call me.'",
      options: ["Should you", "having", "any questions", "call me"],
      answer: "having",
      explanation: "After 'should you', we use the base verb: 'have any questions'."
    }
  ]
};

