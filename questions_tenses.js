// questions_tenses.js
// 200 tense questions for CSE Reviewer Hub
// Levels: beginner, intermediate, advanced, super (50 each)

const TENSE_QUESTIONS = {
  beginner: [
    // 1
    {
      question: "What is the tense of this sentence? 'She walks to school every day.'",
      choices: ["Simple present", "Simple past", "Present continuous", "Simple future"],
      correctIndex: 0,
      explanation:
        "The phrase 'every day' indicates a habit or routine. The Simple Present tense is used for habitual actions. Since the subject 'She' is singular, we use the verb form 'walks'."
    },
    // 2
    {
      question: "What is the tense of this sentence? 'They played basketball yesterday.'",
      choices: ["Simple present", "Simple past", "Present perfect", "Future tense"],
      correctIndex: 1,
      explanation:
        "The word 'yesterday' is a specific time marker for the past. Therefore, the sentence is in the Simple Past tense. 'Played' is the regular past form of the verb 'play'."
    },
    // 3
    {
      question: "Choose the correct tense: 'I ___ my homework now.'",
      choices: ["do", "did", "am doing", "will do"],
      correctIndex: 2,
      explanation:
        "The time marker 'now' suggests an action that is currently in progress. For actions happening at the moment of speaking, we use the Present Continuous tense (am/is/are + verb-ing). Thus, 'am doing' is correct."
    },
    // 4
    {
      question: "Choose the correct verb form: 'We ___ dinner at 7 p.m. every night.'",
      choices: ["are eating", "eat", "ate", "have eaten"],
      correctIndex: 1,
      explanation:
        "The phrase 'every night' indicates a repetitive habit. We use the Simple Present tense for routines. Since the subject is 'We' (plural), we use the base form of the verb 'eat'."
    },
    // 5
    {
      question: "What is the tense of this sentence? 'I will call you later.'",
      choices: ["Simple present", "Simple past", "Simple future", "Present continuous"],
      correctIndex: 2,
      explanation:
        "The auxiliary verb 'will' followed by the base verb 'call' is the standard structure for the Simple Future tense, which expresses a decision or promise to do something later."
    },
    // 6
    {
      question: "Choose the correct tense: 'She ___ to the office yesterday.'",
      choices: ["goes", "go", "went", "is going"],
      correctIndex: 2,
      explanation:
        "The keyword 'yesterday' indicates a completed action in the past. 'Went' is the irregular Simple Past form of the verb 'go'."
    },
    // 7
    {
      question: "Choose the correct form: 'They ___ TV at the moment.'",
      choices: ["watch", "watched", "are watching", "have watched"],
      correctIndex: 2,
      explanation:
        "The phrase 'at the moment' means right now. This requires the Present Continuous tense (are + watching) to show an action currently happening."
    },
    // 8
    {
      question: "What is the tense of this sentence? 'He is studying for the exam.'",
      choices: ["Simple present", "Present continuous", "Simple past", "Present perfect"],
      correctIndex: 1,
      explanation:
        "The structure 'is + studying' (be verb + -ing) identifies this as the Present Continuous tense, used for actions happening now or temporary situations."
    },
    // 9
    {
      question: "Choose the correct verb: 'We ___ to the beach tomorrow.'",
      choices: ["go", "are going", "went", "have gone"],
      correctIndex: 1,
      explanation:
        "While 'tomorrow' usually suggests future tense, the Present Continuous ('are going') is frequently used to talk about fixed future plans or arrangements."
    },
    // 10
    {
      question: "Which sentence is in the simple past tense?",
      choices: [
        "She is cooking dinner.",
        "She cooks dinner every day.",
        "She cooked dinner last night.",
        "She will cook dinner later."
      ],
      correctIndex: 2,
      explanation:
        "The verb 'cooked' (verb + -ed) and the time marker 'last night' indicate an action that started and finished in the past. This is the Simple Past tense."
    },
    // 11
    {
      question: "Choose the correct form: 'Right now, they ___ soccer.'",
      choices: ["play", "plays", "are playing", "played"],
      correctIndex: 2,
      explanation:
        "The phrase 'Right now' indicates an action in progress. We must use the Present Continuous tense: 'are playing'."
    },
    // 12
    {
      question: "Which sentence is in the simple present tense?",
      choices: [
        "They are working now.",
        "They will work tomorrow.",
        "They worked yesterday.",
        "They work every Monday."
      ],
      correctIndex: 3,
      explanation:
        "The phrase 'every Monday' shows a repeating schedule or habit. 'They work' is the Simple Present form used for such facts."
    },
    // 13
    {
      question: "Choose the correct verb form: 'Yesterday, I ___ to bed late.'",
      choices: ["go", "goes", "went", "am going"],
      correctIndex: 2,
      explanation:
        "Because the sentence specifies 'Yesterday,' we need the Simple Past tense. 'Went' is the past form of 'go'."
    },
    // 14
    {
      question: "What is the tense of this sentence? 'They have finished their homework.'",
      choices: ["Simple past", "Present perfect", "Past continuous", "Simple present"],
      correctIndex: 1,
      explanation:
        "The structure 'have + past participle (finished)' forms the Present Perfect tense. It is used for actions that happened at an unspecified time in the past or have relevance to the present."
    },
    // 15
    {
      question: "Choose the correct tense: 'I ___ here since 2019.'",
      choices: ["live", "lived", "have lived", "am living"],
      correctIndex: 2,
      explanation:
        "The word 'since' followed by a specific year (2019) indicates an action that began in the past and continues to the present. The Present Perfect tense ('have lived') is required here."
    },
    // 16
    {
      question: "Which sentence is in the past continuous tense?",
      choices: [
        "I was cooking when he arrived.",
        "I cooked when he arrived.",
        "I am cooking when he arrives.",
        "I have cooked when he arrived."
      ],
      correctIndex: 0,
      explanation:
        "The phrase 'was cooking' is in the Past Continuous tense (was/were + -ing). It describes a longer action in the past that was interrupted by a shorter action ('arrived')."
    },
    // 17
    {
      question: "Choose the correct form: 'They ___ in the office when I arrived.'",
      choices: ["were working", "worked", "are working", "have worked"],
      correctIndex: 0,
      explanation:
        "Since 'arrived' is in the past, the action happening *at the same time* needs to be Past Continuous. 'Were working' shows they were in the middle of working when I arrived."
    },
    // 18
    {
      question: "What is the tense of this sentence? 'By tomorrow, we will have finished the task.'",
      choices: ["Future continuous", "Future perfect", "Simple future", "Present perfect"],
      correctIndex: 1,
      explanation:
        "The structure 'will have + past participle (finished)' is the Future Perfect tense. The phrase 'By tomorrow' is a common marker for this tense, indicating an action will be completed before a specific future time."
    },
    // 19
    {
      question: "Choose the correct tense: 'At 8 p.m. tonight, I ___ TV.'",
      choices: ["will watch", "will be watching", "watch", "watched"],
      correctIndex: 1,
      explanation:
        "We use the Future Continuous tense ('will be watching') to describe an action that will be in progress at a specific moment in the future (8 p.m. tonight)."
    },
    // 20
    {
      question: "Which sentence is in the present perfect tense?",
      choices: [
        "I am reading the book.",
        "I read the book yesterday.",
        "I have read the book.",
        "I will read the book."
      ],
      correctIndex: 2,
      explanation:
        "'Have read' follows the formula have/has + past participle, which defines the Present Perfect tense."
    },
    // 21
    {
      question: "Choose the correct form: 'We ___ already eaten dinner.'",
      choices: ["have", "had", "has", "are"],
      correctIndex: 0,
      explanation:
        "The subject is 'We' (plural), so we use the auxiliary verb 'have' for the Present Perfect tense. The sentence becomes: 'We have already eaten dinner.'"
    },
    // 22
    {
      question: "Which sentence uses the correct tense for a routine?",
      choices: [
        "She is going to work every day.",
        "She goes to work every day.",
        "She went to work every day.",
        "She has gone to work every day."
      ],
      correctIndex: 1,
      explanation:
        "Routines and habits (indicated by 'every day') require the Simple Present tense. 'She goes' is the correct singular form."
    },
    // 23
    {
      question: "Choose the correct tense: 'Look! It ___.'",
      choices: ["rains", "was raining", "is raining", "rained"],
      correctIndex: 2,
      explanation:
        "The command 'Look!' draws attention to something happening right now. Therefore, we use the Present Continuous tense: 'is raining'."
    },
    // 24
    {
      question: "What is the tense of this sentence? 'They were sleeping when I called.'",
      choices: ["Simple past", "Past continuous", "Present perfect", "Present continuous"],
      correctIndex: 1,
      explanation:
        "The structure 'were + sleeping' (be verb + -ing) in the past context identifies this as the Past Continuous tense."
    },
    // 25
    {
      question: "Choose the correct form: 'She ___ to Manila next week.'",
      choices: ["go", "is going", "went", "has gone"],
      correctIndex: 1,
      explanation:
        "The Present Continuous tense ('is going') is often used to talk about personal arrangements and fixed plans in the near future."
    },
    // 26
    {
      question: "Which sentence is in the present continuous tense?",
      choices: [
        "They play basketball every Sunday.",
        "They played basketball last Sunday.",
        "They are playing basketball now.",
        "They will play basketball tomorrow."
      ],
      correctIndex: 2,
      explanation:
        "'Are playing' describes an action happening currently ('now'), which is the function of the Present Continuous tense."
    },
    // 27
    {
      question: "Choose the correct tense: 'I ___ a new phone last month.'",
      choices: ["buy", "buys", "bought", "have bought"],
      correctIndex: 2,
      explanation:
        "'Last month' defines a specific time in the past that is over. We must use the Simple Past tense. 'Bought' is the past form of 'buy'."
    },
    // 28
    {
      question: "What is the tense of this sentence? 'We will be staying at a hotel.'",
      choices: ["Simple future", "Future continuous", "Present continuous", "Present perfect"],
      correctIndex: 1,
      explanation:
        "The structure 'will be + verb-ing (staying)' is the Future Continuous tense, used to describe an ongoing action in the future."
    },
    // 29
    {
      question: "Choose the correct form: 'They ___ here for two hours already.'",
      choices: ["are waiting", "have been waiting", "waited", "had waited"],
      correctIndex: 1,
      explanation:
        "The phrase 'for two hours already' implies the action started in the past and is still happening now. This requires the Present Perfect Continuous tense: 'have been waiting'."
    },
    // 30
    {
      question: "Which sentence is in the simple future tense?",
      choices: [
        "She will start her new job next week.",
        "She is starting her new job now.",
        "She started her new job last week.",
        "She has started her new job."
      ],
      correctIndex: 0,
      explanation:
        "'Will start' uses the modal 'will' followed by the base verb, which is the standard form for Simple Future."
    },
    // 31
    {
      question: "Choose the correct tense: 'He ___ the report before the deadline yesterday.'",
      choices: ["finishes", "finished", "was finishing", "will finish"],
      correctIndex: 1,
      explanation:
        "The time marker 'yesterday' makes this a past event. Since it was a single completed action, Simple Past 'finished' is the best choice."
    },
    // 32
    {
      question: "Which sentence is in the past perfect tense?",
      choices: [
        "I finished my work before 5 p.m.",
        "I had finished my work before 5 p.m.",
        "I have finished my work before 5 p.m.",
        "I will finish my work before 5 p.m."
      ],
      correctIndex: 1,
      explanation:
        "The form 'had + past participle (finished)' is the Past Perfect tense. It is often used to show an action was completed before another time in the past."
    },
    // 33
    {
      question: "Choose the correct form: 'They ___ already left when we arrived.'",
      choices: ["have", "had", "were", "are"],
      correctIndex: 1,
      explanation:
        "We have two past actions: 'left' and 'arrived'. Since they left *before* we arrived, we use the Past Perfect tense for the earlier action: 'had left'."
    },
    // 34
    {
      question: "What is the tense of this sentence? 'I have been working here for three years.'",
      choices: [
        "Present perfect",
        "Present continuous",
        "Present perfect continuous",
        "Simple present"
      ],
      correctIndex: 2,
      explanation:
        "The structure 'have been + verb-ing (working)' is the Present Perfect Continuous tense, emphasizing the duration of an action from the past until now."
    },
    // 35
    {
      question: "Choose the correct tense: 'At this time yesterday, I ___ TV.'",
      choices: ["watched", "have watched", "was watching", "am watching"],
      correctIndex: 2,
      explanation:
        "The phrase 'At this time yesterday' points to a specific moment in the past where an action was ongoing. This requires the Past Continuous: 'was watching'."
    },
    // 36
    {
      question: "Which sentence is in the future perfect tense?",
      choices: [
        "I will finish the report tomorrow.",
        "I will have finished the report by tomorrow.",
        "I am finishing the report tomorrow.",
        "I finished the report yesterday."
      ],
      correctIndex: 1,
      explanation:
        "'Will have finished' is the Future Perfect tense, indicating that an action will be totally complete by a certain future time."
    },
    // 37
    {
      question: "Choose the correct form: 'He ___ lunch when I saw him.'",
      choices: ["has", "had", "was having", "is having"],
      correctIndex: 2,
      explanation:
        "He was in the middle of eating when I saw him (past). The ongoing background action uses Past Continuous: 'was having'."
    },
    // 38
    {
      question: "Which sentence uses present perfect correctly?",
      choices: [
        "I have seen that movie yesterday.",
        "I have seen that movie already.",
        "I seen that movie already.",
        "I seeing that movie already."
      ],
      correctIndex: 1,
      explanation:
        "Present Perfect is used for indefinite past times. 'Already' fits perfectly. We cannot use Present Perfect with specific past times like 'yesterday'."
    },
    // 39
    {
      question: "Choose the correct tense: 'They ___ in this office since last year.'",
      choices: ["worked", "have worked", "are working", "had worked"],
      correctIndex: 1,
      explanation:
        "The word 'since' indicates the action started in the past (last year) and continues to the present. Present Perfect ('have worked') is the correct tense."
    },
    // 40
    {
      question: "Which sentence is in the simple present tense?",
      choices: [
        "He is talking to his friend.",
        "He talks to his friend every week.",
        "He talked to his friend yesterday.",
        "He will talk to his friend later."
      ],
      correctIndex: 1,
      explanation:
        "'Talks' is the Simple Present form. The phrase 'every week' confirms this is a habitual action."
    },
    // 41
    {
      question: "Choose the correct form: 'I ___ to Cebu next month.'",
      choices: ["went", "am going", "have gone", "had gone"],
      correctIndex: 1,
      explanation:
        "For confirmed future plans (like travel), the Present Continuous 'am going' is grammatically correct and very common."
    },
    // 42
    {
      question: "What is the tense of this sentence? 'They have been waiting for you since 3 p.m.'",
      choices: [
        "Present perfect continuous",
        "Present continuous",
        "Simple present",
        "Past continuous"
      ],
      correctIndex: 0,
      explanation:
        "'Have been waiting' is the Present Perfect Continuous form. It highlights the length of time (since 3 p.m.) the action has been happening up to now."
    },
    // 43
    {
      question: "Choose the correct tense: 'When the teacher came in, the students ___.'" ,
      choices: ["talked", "were talking", "have talked", "will talk"],
      correctIndex: 1,
      explanation:
        "The students were in the middle of an action when the teacher arrived. The ongoing action in the past requires Past Continuous: 'were talking'."
    },
    // 44
    {
      question: "Which sentence correctly shows a future plan?",
      choices: [
        "We are going to have a meeting tomorrow.",
        "We had a meeting tomorrow.",
        "We have a meeting yesterday.",
        "We are having a meeting yesterday."
      ],
      correctIndex: 0,
      explanation:
        "The structure 'be going to' is used to express plans or intentions for the future. 'Are going to have' correctly fits with the future time 'tomorrow'."
    },
    // 45
    {
      question: "Choose the correct form: 'By this time next year, I ___ college.'",
      choices: ["finish", "will finish", "will have finished", "have finished"],
      correctIndex: 2,
      explanation:
        "The phrase 'By this time next year' implies looking back from a future point at a completed action. This requires the Future Perfect tense: 'will have finished'."
    },
    // 46
    {
      question: "Which sentence is in the present simple and expresses a fact?",
      choices: [
        "The Earth revolves around the sun.",
        "The Earth is revolving around the sun now.",
        "The Earth revolved around the sun yesterday.",
        "The Earth will revolve around the sun tomorrow."
      ],
      correctIndex: 0,
      explanation:
        "General truths and scientific facts use the Simple Present tense. 'Revolves' is the correct form."
    },
    // 47
    {
      question: "Choose the correct tense: 'She ___ dinner before she watched TV.'",
      choices: ["has eaten", "had eaten", "was eating", "eats"],
      correctIndex: 1,
      explanation:
        "Two past actions happened here: eating and watching TV. Eating happened *first* (before watching). The earlier of two past actions takes the Past Perfect: 'had eaten'."
    },
    // 48
    {
      question: "Which sentence is in the past perfect continuous tense?",
      choices: [
        "She was working all day.",
        "She had worked all day.",
        "She had been working all day.",
        "She has been working all day."
      ],
      correctIndex: 2,
      explanation:
        "The structure 'had been + verb-ing' defines the Past Perfect Continuous tense. It describes an action that was ongoing up until another point in the past."
    },
    // 49
    {
      question: "Choose the correct form: 'I ___ this book for two hours.'",
      choices: ["read", "am reading", "have been reading", "had read"],
      correctIndex: 2,
      explanation:
        "Because the action implies duration leading up to the present ('for two hours'), the Present Perfect Continuous 'have been reading' is the most appropriate choice."
    },
    // 50
    {
      question: "Which sentence is in the future continuous tense?",
      choices: [
        "I will study tonight.",
        "I will be studying tonight.",
        "I am studying tonight.",
        "I studied last night."
      ],
      correctIndex: 1,
      explanation:
        "'Will be studying' (will be + -ing) is the Future Continuous tense, indicating an action that will be in progress at a future time."
    }
  ],

  intermediate: [
    // 1
    {
      question: "Which sentence correctly uses the simple past with a specific time?",
      choices: [
        "I have seen him last week.",
        "I saw him last week.",
        "I am seeing him last week.",
        "I had seen him last week."
      ],
      correctIndex: 1,
      explanation:
        "The phrase 'last week' is a finished time period. We cannot use Present Perfect with finished time markers. We must use Simple Past: 'I saw him'."
    },
    // 2
    {
      question: "Choose the correct tense: 'I ___ this movie three times.'",
      choices: ["saw", "have seen", "had seen", "was seeing"],
      correctIndex: 1,
      explanation:
        "When talking about life experiences without specifying exactly when they happened, we use the Present Perfect tense: 'have seen'."
    },
    // 3
    {
      question: "Which sentence uses the present perfect with since correctly?",
      choices: [
        "He has worked here since two years.",
        "He has worked here since 2020.",
        "He worked here since 2020.",
        "He is working here since 2020."
      ],
      correctIndex: 1,
      explanation:
        "'Since' is used with a starting point in time (e.g., 2020). 'For' is used with a duration (e.g., two years). Therefore, 'since 2020' with the Present Perfect 'has worked' is correct."
    },
    // 4
    {
      question: "Choose the best tense: 'They ___ in that house for ten years.'",
      choices: ["live", "lived", "have lived", "are living"],
      correctIndex: 2,
      explanation:
        "The preposition 'for' indicates duration from the past until now. This requires the Present Perfect tense: 'have lived'."
    },
    // 5
    {
      question: "Which sentence shows an action that was in progress when another action happened?",
      choices: [
        "They worked when the manager arrived.",
        "They have worked when the manager arrived.",
        "They were working when the manager arrived.",
        "They had worked when the manager arrived."
      ],
      correctIndex: 2,
      explanation:
        "To show an action was already happening when it was interrupted, we use the Past Continuous ('were working') alongside the Simple Past ('arrived')."
    },
    // 6
    {
      question: "Choose the correct form: 'While I ___ dinner, the doorbell rang.'",
      choices: ["cooked", "was cooking", "have cooked", "am cooking"],
      correctIndex: 1,
      explanation:
        "The word 'While' usually introduces a continuous action. Since the doorbell rang (past), the continuous action must be Past Continuous: 'was cooking'."
    },
    // 7
    {
      question: "Which sentence correctly uses future continuous?",
      choices: [
        "Tomorrow at 8, I will take the exam.",
        "Tomorrow at 8, I will be taking the exam.",
        "Tomorrow at 8, I am taking the exam.",
        "Tomorrow at 8, I was taking the exam."
      ],
      correctIndex: 1,
      explanation:
        "At a specific moment in the future ('Tomorrow at 8'), an action will be in progress. The Future Continuous 'will be taking' expresses this best."
    },
    // 8
    {
      question: "Choose the correct tense: 'By next year, she ___ her degree.'",
      choices: ["will finish", "is finishing", "will have finished", "has finished"],
      correctIndex: 2,
      explanation:
        "The marker 'By next year' suggests completion before that future date. The Future Perfect tense ('will have finished') is required."
    },
    // 9
    {
      question: "Which sentence correctly uses present perfect continuous?",
      choices: [
        "He has been work here since May.",
        "He has been working here since May.",
        "He is been working here since May.",
        "He had been working here since May."
      ],
      correctIndex: 1,
      explanation:
        "The correct grammar for Present Perfect Continuous is 'has/have + been + verb-ing'. Thus, 'has been working' is correct."
    },
    // 10
    {
      question: "Choose the best option: 'She ___ for the exam all week.'",
      choices: ["studied", "has studied", "has been studying", "is studying"],
      correctIndex: 2,
      explanation:
        "The phrase 'all week' emphasizes the duration and continuity of the action leading up to the present. The Present Perfect Continuous 'has been studying' fits best."
    },
    // 11
    {
      question: "Which sentence is correct in reported speech?",
      choices: [
        "He said that he is tired.",
        "He said that he was tired.",
        "He says that he was tired.",
        "He say that he is tired."
      ],
      correctIndex: 1,
      explanation:
        "In reported speech, if the reporting verb is in the past ('said'), the verb in the reported clause usually shifts back one tense. Present 'is' becomes past 'was'."
    },
    // 12
    {
      question: "Choose the correct tense: 'He said he ___ the documents already.'",
      choices: ["sends", "sent", "had sent", "has sent"],
      correctIndex: 2,
      explanation:
        "The sending happened *before* he said it. Since 'said' is past, the action before it must be Past Perfect: 'had sent'."
    },
    // 13
    {
      question: "Which sentence correctly uses the first conditional?",
      choices: [
        "If it will rain, we will stay at home.",
        "If it rains, we will stay at home.",
        "If it rained, we will stay at home.",
        "If it is rains, we will stay at home."
      ],
      correctIndex: 1,
      explanation:
        "The First Conditional follows the structure: 'If + Simple Present, ... Will + Base Verb'. Therefore, 'If it rains' is the correct condition."
    },
    // 14
    {
      question: "Choose the correct tense pattern: 'If I ___ time, I will help you.'",
      choices: ["have", "had", "will have", "am having"],
      correctIndex: 0,
      explanation:
        "This is a First Conditional sentence (real possibility). The 'If' clause takes the Simple Present tense: 'If I have time'."
    },
    // 15
    {
      question: "Which sentence is an example of the second conditional?",
      choices: [
        "If he studies, he will pass.",
        "If he studied, he would pass.",
        "If he had studied, he would have passed.",
        "If he is studying, he will pass."
      ],
      correctIndex: 1,
      explanation:
        "The Second Conditional is used for hypothetical or unlikely present situations. Structure: 'If + Past Simple, ... Would + Base Verb'. Example: 'If he studied, he would pass'."
    },
    // 16
    {
      question: "Choose the correct tense: 'If I ___ you, I would apologize.'",
      choices: ["am", "was", "were", "will be"],
      correctIndex: 2,
      explanation:
        "In the Second Conditional, when using the verb 'to be', we use 'were' for all subjects (I, he, she, it) in formal English. 'If I were you' is the standard phrase."
    },
    // 17
    {
      question: "Which sentence correctly uses the third conditional?",
      choices: [
        "If she had studied, she would pass.",
        "If she studied, she would have passed.",
        "If she had studied, she would have passed.",
        "If she studies, she would have passed."
      ],
      correctIndex: 2,
      explanation:
        "The Third Conditional is for unreal past situations (regrets). Structure: 'If + Past Perfect, ... Would Have + Past Participle'. Example: 'If she had studied, she would have passed'."
    },
    // 18
    {
      question: "Choose the correct tense: 'By the time we arrived, the movie ___.'",
      choices: ["has started", "had started", "started", "was starting"],
      correctIndex: 1,
      explanation:
        "The movie started *before* we arrived. To show the earlier of two past events, we use the Past Perfect tense: 'had started'."
    },
    // 19
    {
      question: "Which sentence is correct?",
      choices: [
        "I am knowing him for many years.",
        "I know him for many years.",
        "I have known him for many years.",
        "I have been know him for many years."
      ],
      correctIndex: 2,
      explanation:
        "'Know' is a stative verb (a verb of state, not action) and is generally not used in continuous tenses. We use Present Perfect ('have known') to show duration."
    },
    // 20
    {
      question: "Choose the correct tense: 'She ___ her report when the power went out.'",
      choices: ["has typed", "typed", "was typing", "had typed"],
      correctIndex: 2,
      explanation:
        "She was in the middle of typing when the power went out. The interrupted action uses Past Continuous: 'was typing'."
    },
    // 21
    {
      question: "Which sentence correctly uses future perfect?",
      choices: [
        "By 5 p.m., I will finish my work.",
        "By 5 p.m., I will have finished my work.",
        "By 5 p.m., I finish my work.",
        "By 5 p.m., I finished my work."
      ],
      correctIndex: 1,
      explanation:
        "The marker 'By 5 p.m.' sets a deadline. To say the action will be complete by that time, we use the Future Perfect: 'will have finished'."
    },
    // 22
    {
      question: "Choose the correct tense: 'We ___ for two hours before the bus arrived.'",
      choices: ["waited", "have waited", "had waited", "were waiting"],
      correctIndex: 2,
      explanation:
        "We waited for two hours *before* the past event of the bus arriving. The Past Perfect 'had waited' emphasizes the completion of that period before the bus came."
    },
    // 23
    {
      question: "Which sentence correctly shows future plans using present continuous?",
      choices: [
        "We are meeting the client tomorrow.",
        "We meet the client tomorrow.",
        "We will are meeting the client tomorrow.",
        "We were meeting the client tomorrow."
      ],
      correctIndex: 0,
      explanation:
        "Present Continuous ('are meeting') is commonly used for fixed arrangements in the future, especially when a time ('tomorrow') is given."
    },
    // 24
    {
      question: "Choose the correct tense: 'She ___ her keys again. She is always losing them.'",
      choices: ["loses", "lost", "has lost", "had lost"],
      correctIndex: 2,
      explanation:
        "'Has lost' (Present Perfect) is used here because the result is important now (she doesn't have her keys). The simple past 'lost' would focus only on the past event."
    },
    // 25
    {
      question: "Which sentence uses present perfect with already correctly?",
      choices: [
        "I already have finished my work.",
        "I have already finished my work.",
        "I have finished already my work.",
        "I finished already my work."
      ],
      correctIndex: 1,
      explanation:
        "The adverb 'already' is typically placed between the auxiliary verb 'have' and the main verb (past participle). Correct: 'I have already finished'."
    },
    // 26
    {
      question: "Choose the correct tense: 'They ___ lunch when we arrived, so we joined them.'",
      choices: ["had", "had had", "were having", "have had"],
      correctIndex: 2,
      explanation:
        "Since we joined them, their lunch was still in progress when we arrived. We use Past Continuous: 'were having'."
    },
    // 27
    {
      question: "Which sentence correctly uses past perfect continuous?",
      choices: [
        "She had been working for hours when she finally rested.",
        "She has been working for hours when she finally rested.",
        "She was been working for hours when she finally rested.",
        "She had worked for hours when she finally rested."
      ],
      correctIndex: 0,
      explanation:
        "The sentence emphasizes the duration ('for hours') of an action leading up to a past event ('rested'). This requires Past Perfect Continuous: 'had been working'."
    },
    // 28
    {
      question: "Choose the correct tense: 'I ___ in Manila for five years before I moved to Cebu.'",
      choices: ["have lived", "had lived", "was living", "lived"],
      correctIndex: 1,
      explanation:
        "Living in Manila happened *before* moving to Cebu. The earlier period is described using Past Perfect: 'had lived'."
    },
    // 29
    {
      question: "Which sentence is correct for a scheduled future event?",
      choices: [
        "The train leaves at 6 a.m. tomorrow.",
        "The train is leave at 6 a.m. tomorrow.",
        "The train will leaves at 6 a.m. tomorrow.",
        "The train leaving at 6 a.m. tomorrow."
      ],
      correctIndex: 0,
      explanation:
        "For timetables and official schedules (trains, flights, classes), we use the Simple Present tense ('The train leaves') even for future times."
    },
    // 30
    {
      question: "Choose the correct tense: 'Right now, the team ___ their presentation.'",
      choices: ["prepares", "prepared", "is preparing", "was preparing"],
      correctIndex: 2,
      explanation:
        "'Right now' indicates a current action. Present Continuous ('is preparing') is the required tense."
    },
    // 31
    {
      question: "Which sentence correctly uses a time clause with future meaning?",
      choices: [
        "When he will arrive, we will start the meeting.",
        "When he arrives, we will start the meeting.",
        "When he arrive, we will start the meeting.",
        "When he arriving, we will start the meeting."
      ],
      correctIndex: 1,
      explanation:
        "In future time clauses starting with 'when', 'after', 'before', etc., we use the Simple Present tense ('When he arrives'), not 'will'."
    },
    // 32
    {
      question: "Choose the correct tense: 'After she ___ her work, she went home.'",
      choices: ["has finished", "finished", "had finished", "was finishing"],
      correctIndex: 2,
      explanation:
        "She finished work *before* she went home. The first of two past actions is Past Perfect: 'had finished'."
    },
    // 33
    {
      question: "Which sentence is grammatically correct?",
      choices: [
        "I was knowing the answer, but I was nervous.",
        "I knew the answer, but I was nervous.",
        "I have knew the answer, but I was nervous.",
        "I am knowing the answer, but I was nervous."
      ],
      correctIndex: 1,
      explanation:
        "'Know' is a stative verb and shouldn't be used in continuous forms ('was knowing'). The correct Past Simple form is 'knew'."
    },
    // 34
    {
      question: "Choose the correct tense: 'He ___ his lunch by the time the meeting started.'",
      choices: ["has finished", "had finished", "was finishing", "finished"],
      correctIndex: 1,
      explanation:
        "The phrase 'by the time' implies completion before that moment. Since the meeting started in the past, we use Past Perfect: 'had finished'."
    },
    // 35
    {
      question: "Which sentence correctly uses present perfect with ever?",
      choices: [
        "Did you ever visited Baguio?",
        "Have you ever visited Baguio?",
        "Have you ever visit Baguio?",
        "Are you ever visited Baguio?"
      ],
      correctIndex: 1,
      explanation:
        "For questions about life experiences, we use Present Perfect with 'ever'. The correct structure is 'Have you ever + past participle (visited)?'"
    },
    // 36
    {
      question: "Choose the correct tense: 'I ___ to call you all day, but you were busy.'",
      choices: ["tried", "have tried", "had tried", "was trying"],
      correctIndex: 3,
      explanation:
        "'Was trying' (Past Continuous) emphasizes that the attempt was ongoing or repeated over a period ('all day') in the past."
    },
    // 37
    {
      question: "Which sentence is correct?",
      choices: [
        "She will be finished the report by tomorrow.",
        "She will have finished the report by tomorrow.",
        "She will has finished the report by tomorrow.",
        "She will has finish the report by tomorrow."
      ],
      correctIndex: 1,
      explanation:
        "To express completion by a future time ('by tomorrow'), we use the Future Perfect: 'will have finished'."
    },
    // 38
    {
      question: "Choose the correct tense: 'They ___ when the manager walked in.'",
      choices: ["have discussed", "had discussed", "were discussing", "discussed"],
      correctIndex: 2,
      explanation:
        "The discussion was in progress when the manager entered. We use Past Continuous: 'were discussing'."
    },
    // 39
    {
      question: "Which sentence correctly uses present perfect to show recent completion?",
      choices: [
        "I just finish my work.",
        "I have just finished my work.",
        "I had just finished my work now.",
        "I am just finished my work."
      ],
      correctIndex: 1,
      explanation:
        "To show an action finished very recently, we use Present Perfect with 'just'. Correct: 'I have just finished'."
    },
    // 40
    {
      question: "Choose the correct tense: 'She ___ in the bank before she became a teacher.'",
      choices: ["works", "worked", "had worked", "has worked"],
      correctIndex: 2,
      explanation:
        "Working in the bank happened *before* the past event of becoming a teacher. The earlier past period is Past Perfect: 'had worked'."
    },
    // 41
    {
      question: "Which sentence is correct?",
      choices: [
        "He is always complaining about the traffic.",
        "He always is complaining about the traffic.",
        "He has always complaining about the traffic.",
        "He was always complain about the traffic."
      ],
      correctIndex: 0,
      explanation:
        "We can use Present Continuous with 'always' to describe a repetitive, often annoying, habit. Correct: 'He is always complaining'."
    },
    // 42
    {
      question: "Choose the correct tense: 'They ___ the documents by the time you arrive.'",
      choices: ["have prepared", "will have prepared", "will prepared", "had prepared"],
      correctIndex: 1,
      explanation:
        "'By the time you arrive' sets a future deadline. The action will be complete before then, so we use Future Perfect: 'will have prepared'."
    },
    // 43
    {
      question: "Which sentence correctly uses past perfect for a cause?",
      choices: [
        "He was tired because he worked all night.",
        "He was tired because he had worked all night.",
        "He is tired because he had worked all night.",
        "He had tired because he worked all night."
      ],
      correctIndex: 1,
      explanation:
        "He was tired (past result) because of an action that happened *before* that. We use Past Perfect ('had worked') to show the cause of a past state."
    },
    // 44
    {
      question: "Choose the correct tense: 'I ___ here for an hour before anyone helped me.'",
      choices: ["have waited", "waited", "was waiting", "had been waiting"],
      correctIndex: 3,
      explanation:
        "This emphasizes the duration of waiting *before* a past event ('helped'). Past Perfect Continuous ('had been waiting') is the precise tense."
    },
    // 45
    {
      question: "Which sentence uses future continuous correctly?",
      choices: [
        "Next week, I will be taking my vacation.",
        "Next week, I will taking my vacation.",
        "Next week, I am be taking my vacation.",
        "Next week, I will have taking my vacation."
      ],
      correctIndex: 0,
      explanation:
        "Future Continuous uses 'will be + verb-ing'. 'Will be taking' correctly describes an ongoing event in the future."
    },
    // 46
    {
      question: "Choose the correct tense: 'By the time you get home, I ___ dinner.'",
      choices: ["will cook", "will be cooking", "will have cooked", "have cooked"],
      correctIndex: 2,
      explanation:
        "Since the cooking will be finished when you arrive, we need the Future Perfect: 'will have cooked'."
    },
    // 47
    {
      question: "Which sentence correctly uses a time clause in the past?",
      choices: [
        "When I was a child, I have played outside every day.",
        "When I was a child, I played outside every day.",
        "When I am a child, I played outside every day.",
        "When I was a child, I am playing outside every day."
      ],
      correctIndex: 1,
      explanation:
        "Both parts of the sentence refer to the past. 'When I was a child' (past state) matches with 'I played' (past habit)."
    },
    // 48
    {
      question: "Choose the correct tense: 'We ___ our guests at 7 p.m. tomorrow.'",
      choices: ["will be meeting", "are meeting", "meet", "all of the above can be correct"],
      correctIndex: 3,
      explanation:
        "All options are grammatically possible depending on context: 'meet' (schedule), 'are meeting' (fixed plan), and 'will be meeting' (action in progress or polite future). Option 3 is the most inclusive answer."
    },
    // 49
    {
      question: "Which sentence correctly uses present perfect with for?",
      choices: [
        "I have been here for two hours.",
        "I am here for two hours.",
        "I was here for two hours.",
        "I had been here for two hours now."
      ],
      correctIndex: 0,
      explanation:
        "'Have been here' implies I arrived two hours ago and I am still here. Present Perfect connects the past to the present."
    },
    // 50
    {
      question: "Choose the correct tense: 'He ___ from a cold lately.'",
      choices: ["suffers", "suffered", "has been suffering", "was suffering"],
      correctIndex: 2,
      explanation:
        "The adverb 'lately' implies a recent, continuous or repeated situation. Present Perfect Continuous ('has been suffering') is the best fit."
    }
  ],

  advanced: [
    // 1
    {
      question: "Identify the error in tense: 'I have finished the report yesterday.'",
      choices: [
        "have finished",
        "the report",
        "yesterday",
        "no error"
      ],
      correctIndex: 0,
      explanation:
        "The Present Perfect tense ('have finished') cannot be used with specific past time markers like 'yesterday'. It should be changed to Simple Past: 'I finished'."
    },
    // 2
    {
      question: "Choose the best correction: 'When I was young, I have gone to that park every day.'",
      choices: [
        "When I was young, I went to that park every day.",
        "When I was young, I have been going to that park every day.",
        "When I was young, I had gone to that park every day.",
        "When I was young, I go to that park every day."
      ],
      correctIndex: 0,
      explanation:
        "The sentence refers to a past habit that is no longer true. Simple Past ('went') or 'used to go' are correct. Present Perfect ('have gone') is incorrect because the time period 'When I was young' is finished."
    },
    // 3
    {
      question: "Which sentence maintains correct tense consistency?",
      choices: [
        "She opened the email and is reading the message.",
        "She opens the email and read the message.",
        "She opened the email and read the message.",
        "She was opening the email and reads the message."
      ],
      correctIndex: 2,
      explanation:
        "The sentence describes a sequence of past events. Both verbs should be in the Simple Past tense: 'opened' and 'read' (pronounced /red/)."
    },
    // 4
    {
      question: "Choose the correct verb form: 'By the time you arrived, we ___ our lunch.'",
      choices: ["finished", "have finished", "had finished", "were finishing"],
      correctIndex: 2,
      explanation:
        "The lunch was completed *before* you arrived. To show the sequence of two past events, the earlier one takes the Past Perfect: 'had finished'."
    },
    // 5
    {
      question: "Which sentence correctly uses present perfect to link past and present?",
      choices: [
        "She is working here since 2018.",
        "She was working here since 2018.",
        "She has worked here since 2018.",
        "She had worked here since 2018."
      ],
      correctIndex: 2,
      explanation:
        "The Present Perfect ('has worked') correctly links a past starting point (2018) to the current moment."
    },
    // 6
    {
      question: "Choose the best revision: 'I am living in Cebu for five years now.'",
      choices: [
        "I live in Cebu for five years now.",
        "I lived in Cebu for five years now.",
        "I have lived in Cebu for five years now.",
        "I have been live in Cebu for five years now."
      ],
      correctIndex: 2,
      explanation:
        "Present Continuous ('am living') is incorrect with duration phrases like 'for five years'. We must use Present Perfect ('have lived') or Present Perfect Continuous ('have been living')."
    },
    // 7
    {
      question: "Which sentence correctly uses past perfect continuous?",
      choices: [
        "They had been working for hours when the power went off.",
        "They have been working for hours when the power went off.",
        "They were working for hours when the power had gone off.",
        "They had worked for hours when the power had gone off."
      ],
      correctIndex: 0,
      explanation:
        "'Had been working' explains how long an activity had been going on before a sudden past event ('the power went off')."
    },
    // 8
    {
      question: "Choose the correct tense: 'He said he ___ the documents.'",
      choices: ["already sends", "already sent", "had already sent", "has already sent"],
      correctIndex: 2,
      explanation:
        "This is reported speech. The original action ('sent') happened before he spoke. When backshifting from past to earlier past, we use the Past Perfect: 'had already sent'."
    },
    // 9
    {
      question: "Which sentence correctly expresses an unreal present condition?",
      choices: [
        "If I know the answer, I would tell you.",
        "If I knew the answer, I will tell you.",
        "If I knew the answer, I would tell you.",
        "If I had known the answer, I would tell you."
      ],
      correctIndex: 2,
      explanation:
        "This is a Second Conditional sentence (unreal present). Structure: 'If + Past Simple (knew), ... Would + Base Verb (tell)'."
    },
    // 10
    {
      question: "Choose the correct tense pattern: 'If they had left earlier, they ___ the bus.'",
      choices: ["would catch", "would have caught", "would caught", "will have caught"],
      correctIndex: 1,
      explanation:
        "This is a Third Conditional sentence (unreal past). The result clause must be 'would have + past participle': 'would have caught'."
    },
    // 11
    {
      question: "Which sentence correctly uses future perfect continuous?",
      choices: [
        "By next month, I will working here for a year.",
        "By next month, I will have working here for a year.",
        "By next month, I will have been working here for a year.",
        "By next month, I have been working here for a year."
      ],
      correctIndex: 2,
      explanation:
        "Future Perfect Continuous ('will have been working') is used to project duration up to a specific point in the future ('By next month')."
    },
    // 12
    {
      question: "Choose the best correction: 'When I will see him, I will tell him the news.'",
      choices: [
        "When I see him, I will tell him the news.",
        "When I will be seeing him, I will tell him the news.",
        "When I saw him, I will tell him the news.",
        "When I see him, I tell him the news."
      ],
      correctIndex: 0,
      explanation:
        "We do not use 'will' in time clauses (clauses starting with when, after, before, as soon as). We use the Simple Present tense: 'When I see him'."
    },
    // 13
    {
      question: "Which sentence avoids a faulty tense shift?",
      choices: [
        "She was walking to work and suddenly meets an old friend.",
        "She walks to work and suddenly met an old friend.",
        "She was walking to work and suddenly met an old friend.",
        "She walked to work and suddenly meets an old friend."
      ],
      correctIndex: 2,
      explanation:
        "The sentence correctly sequences a background action ('was walking', Past Continuous) interrupted by a specific event ('met', Simple Past). Tenses remain logically in the past."
    },
    // 14
    {
      question: "Choose the correct tense: 'I wish I ___ more time to study.'",
      choices: ["have", "had", "will have", "am having"],
      correctIndex: 1,
      explanation:
        "We use 'I wish' + Simple Past to express a desire for a present situation to be different. 'I wish I had' means I don't have enough time now, but I want it."
    },
    // 15
    {
      question: "Which sentence correctly uses the perfect infinitive?",
      choices: [
        "She claims to have finished the report.",
        "She claims to have finish the report.",
        "She claims to had finished the report.",
        "She claims having finished the report."
      ],
      correctIndex: 0,
      explanation:
        "The perfect infinitive is 'to have + past participle' (to have finished). It shows that the action happened before the verb 'claims'."
    },
    // 16
    {
      question: "Choose the correct tense: 'He looked as if he ___ all night.'",
      choices: ["works", "worked", "had worked", "has worked"],
      correctIndex: 2,
      explanation:
        "'Looked' is in the past. 'As if' implies an assumption about a *previous* action. Therefore, we need the Past Perfect: 'had worked'."
    },
    // 17
    {
      question: "Which sentence correctly uses reported speech in the past?",
      choices: [
        "She said she has finished the task.",
        "She said she had finished the task.",
        "She said she finishes the task.",
        "She said she will finish the task."
      ],
      correctIndex: 1,
      explanation:
        "The reporting verb 'said' is past. The original action (finishing) occurred before she said it. Thus, we backshift to Past Perfect: 'had finished'."
    },
    // 18
    {
      question: "Choose the correct tense: 'No sooner ___ the words than she regretted them.'",
      choices: ["she said", "had she said", "she had said", "she has said"],
      correctIndex: 1,
      explanation:
        "The phrase 'No sooner' requires inversion of the subject and auxiliary verb. Since it refers to the past, we use 'had she said' (Past Perfect inversion)."
    },
    // 19
    {
      question: "Which sentence correctly uses a mixed conditional (past condition, present result)?",
      choices: [
        "If I had saved more money, I will be more secure now.",
        "If I saved more money, I would be more secure now.",
        "If I had saved more money, I would be more secure now.",
        "If I save more money, I would be more secure now."
      ],
      correctIndex: 2,
      explanation:
        "Condition: Past (If I had saved...). Result: Present (I would be...). This is a mixed conditional combining 3rd conditional start and 2nd conditional end."
    },
    // 20
    {
      question: "Choose the best correction: 'He said that he will call me later.'",
      choices: [
        "He said that he would call me later.",
        "He said that he will called me later.",
        "He said that he would called me later.",
        "He said that he calling me later."
      ],
      correctIndex: 0,
      explanation:
        "In reported speech, 'will' usually changes to 'would' when the main verb is in the past ('said')."
    },
    // 21
    {
      question: "Which sentence correctly uses present perfect for unfinished time?",
      choices: [
        "I have eaten breakfast this morning (but morning is already over).",
        "I ate breakfast this morning (and morning is over).",
        "I have eaten breakfast this morning (and morning is not over yet).",
        "I am eating breakfast this morning."
      ],
      correctIndex: 2,
      explanation:
        "We can use Present Perfect with time periods that are not yet finished (like 'this morning' if it is still morning). If the period is over, we must use Simple Past."
    },
    // 22
    {
      question: "Choose the correct tense: 'By 2019, he ___ in that company for ten years.'",
      choices: ["worked", "had worked", "has worked", "was working"],
      correctIndex: 1,
      explanation:
        "'By 2019' looks back from a past date. To show duration up to a specific point in the past, we use Past Perfect (or Past Perfect Continuous): 'had worked'."
    },
    // 23
    {
      question: "Which sentence correctly avoids unnecessary past perfect?",
      choices: [
        "When I had arrived, she greeted me.",
        "When I arrived, she greeted me.",
        "When I had arrived, she had greeted me.",
        "When I was arrived, she greeted me."
      ],
      correctIndex: 1,
      explanation:
        "When a sequence of events is clear and follows a natural time order, Simple Past for both is sufficient and preferred: 'When I arrived, she greeted me'."
    },
    // 24
    {
      question: "Choose the correct tense: 'She ___ never seen snow before that trip.'",
      choices: ["has", "had", "have", "was"],
      correctIndex: 1,
      explanation:
        "The trip is in the past. Not seeing snow happened *before* that past trip. We need Past Perfect: 'had never seen'."
    },
    // 25
    {
      question: "Which sentence correctly uses future perfect to emphasize completion?",
      choices: [
        "By December, we will finish the construction.",
        "By December, we will be finishing the construction.",
        "By December, we will have finished the construction.",
        "By December, we have finished the construction."
      ],
      correctIndex: 2,
      explanation:
        "The construction 'will have finished' (Future Perfect) emphasizes that the job will be entirely done *before* or *at* the deadline (December)."
    },
    // 26
    {
      question: "Choose the correct tense: 'He ___ for the bus for thirty minutes when it finally arrived.'",
      choices: ["was waiting", "had waited", "had been waiting", "has been waiting"],
      correctIndex: 2,
      explanation:
        "He waited for a period of time ('thirty minutes') *before* a past event ('arrived'). This duration before the past requires Past Perfect Continuous: 'had been waiting'."
    },
    // 27
    {
      question: "Which sentence correctly uses a reduced time clause?",
      choices: [
        "After he has finished his work, he went home.",
        "After finishing his work, he went home.",
        "After finished his work, he went home.",
        "After he finished his work, he had went home."
      ],
      correctIndex: 1,
      explanation:
        "'After finishing his work' is a participle phrase. It means the same as 'After he finished his work' but is more concise. This reduction is grammatically correct."
    },
    // 28
    {
      question: "Choose the correct tense: 'Scarcely ___ arrived when the meeting began.'",
      choices: ["we had", "had we", "we have", "we were"],
      correctIndex: 1,
      explanation:
        "Negative adverbs like 'Scarcely' at the start of a sentence force inversion (Auxiliary + Subject). Correct: 'Scarcely had we arrived'."
    },
    // 29
    {
      question: "Which sentence correctly uses present perfect continuous for recent activity?",
      choices: [
        "I am working on this project for two hours now.",
        "I have been working on this project for two hours now.",
        "I had been working on this project for two hours now.",
        "I worked on this project for two hours now."
      ],
      correctIndex: 1,
      explanation:
        "To indicate an activity started in the past and is still continuing now ('for two hours now'), we use Present Perfect Continuous: 'have been working'."
    },
    // 30
    {
      question: "Choose the correct tense: 'She ___ in the library when I saw her yesterday.'",
      choices: ["studies", "has studied", "was studying", "had studied"],
      correctIndex: 2,
      explanation:
        "Seeing her interrupted or occurred during her study session. We use Past Continuous ('was studying') for the ongoing background action."
    },
    // 31
    {
      question: "Which sentence correctly expresses a future plan decided before speaking?",
      choices: [
        "I will go to the dentist tomorrow. I just decided now.",
        "I am going to the dentist tomorrow. I made the appointment last week.",
        "I go to the dentist tomorrow.",
        "I will be going to the dentist tomorrow because it is scheduled."
      ],
      correctIndex: 1,
      explanation:
        "'Am going to' or Present Continuous is used for plans made *before* the moment of speaking. Since the appointment was made last week, 'am going' is correct."
    },
    // 32
    {
      question: "Choose the correct tense: 'He ___ a lot of progress lately.'",
      choices: ["makes", "made", "has been making", "had made"],
      correctIndex: 2,
      explanation:
        "The word 'lately' usually triggers the Present Perfect or Present Perfect Continuous ('has been making') because it refers to the recent past continuing to the present."
    },
    // 33
    {
      question: "Which sentence correctly uses past perfect for an earlier past action?",
      choices: [
        "Before he arrived, I finished my work.",
        "Before he had arrived, I finished my work.",
        "Before he arrived, I had finished my work.",
        "Before he had arrived, I had finished my work."
      ],
      correctIndex: 2,
      explanation:
        "Finishing work happened first; arriving happened second. The first action takes Past Perfect: 'had finished'."
    },
    // 34
    {
      question: "Choose the correct tense: 'They ___ here long before you joined the company.'",
      choices: ["worked", "have worked", "had worked", "were working"],
      correctIndex: 2,
      explanation:
        "Joining the company is in the past. Working there happened *before* that past event. Thus, we use Past Perfect: 'had worked'."
    },
    // 35
    {
      question: "Which sentence correctly uses present perfect for an unspecified time?",
      choices: [
        "He has visited Baguio last year.",
        "He visited Baguio.",
        "He has visited Baguio several times.",
        "He is visiting Baguio last year."
      ],
      correctIndex: 2,
      explanation:
        "'Several times' implies repeated experience at indefinite times. This is a core use of the Present Perfect tense ('has visited')."
    },
    // 36
    {
      question: "Choose the correct tense: 'As soon as he ___, we will start the meeting.'",
      choices: ["will arrive", "arrives", "arrived", "is arriving"],
      correctIndex: 1,
      explanation:
        "We use Simple Present ('arrives') in time clauses referring to the future, not 'will'."
    },
    // 37
    {
      question: "Which sentence correctly uses the future perfect continuous to emphasize duration?",
      choices: [
        "By June, she will work here for six months.",
        "By June, she will have worked here for six months.",
        "By June, she will have been working here for six months.",
        "By June, she has been working here for six months."
      ],
      correctIndex: 2,
      explanation:
        "'Will have been working' emphasizes the *duration* (six months) of an action up to a specific future point (June)."
    },
    // 38
    {
      question: "Choose the correct tense: 'He said he ___ there since 2010.'",
      choices: ["lived", "has lived", "had lived", "was living"],
      correctIndex: 2,
      explanation:
        "In reported speech with a past reporting verb ('said'), the Present Perfect ('has lived') backshifts to Past Perfect ('had lived')."
    },
    // 39
    {
      question: "Which sentence correctly balances past continuous and simple past?",
      choices: [
        "I was walking to work when I met an old friend.",
        "I walked to work when I met an old friend.",
        "I had walked to work when I met an old friend.",
        "I was walked to work when I met an old friend."
      ],
      correctIndex: 0,
      explanation:
        "The structure 'Was walking (continuous) ... when I met (interruption)' correctly shows an ongoing action interrupted by a single event."
    },
    // 40
    {
      question: "Choose the correct tense: 'By the time the seminar ends, we ___ for three hours.'",
      choices: ["will listen", "will have listened", "will have been listening", "have been listening"],
      correctIndex: 2,
      explanation:
        "'Will have been listening' (Future Perfect Continuous) is best here because it emphasizes the *duration* of the activity at a future point."
    },
    // 41
    {
      question: "Which sentence correctly uses a reduced clause of reason?",
      choices: [
        "Having been late, the meeting was missed by him.",
        "Being late, he missed the meeting.",
        "Being late, the meeting was missed.",
        "Having late, he missed the meeting."
      ],
      correctIndex: 1,
      explanation:
        "The subject of the main clause must match the implied subject of the reduced clause ('Being late'). 'He' was late, so 'He' must be the subject: 'Being late, he missed...'"
    },
    // 42
    {
      question: "Choose the correct tense: 'I ___ that report before the boss asked for it.'",
      choices: ["finish", "have finished", "had finished", "was finishing"],
      correctIndex: 2,
      explanation:
        "The report was done *before* the past action of asking. The earlier past action requires Past Perfect: 'had finished'."
    },
    // 43
    {
      question: "Which sentence correctly uses a time marker with present perfect?",
      choices: [
        "I have known her for many years.",
        "I have known her since many years.",
        "I knew her for many years.",
        "I know her since many years."
      ],
      correctIndex: 0,
      explanation:
        "We use 'for' with a length of time ('many years'). 'Since' is used with a specific point in time (e.g., 'Since 1990'). Present Perfect 'have known' fits the duration."
    },
    // 44
    {
      question: "Choose the correct tense: 'They ___ discussions by the time I arrived.'",
      choices: ["have already started", "had already started", "already started", "were already starting"],
      correctIndex: 1,
      explanation:
        "The starting happened before I arrived. 'Had already started' (Past Perfect) correctly sequences the events."
    },
    // 45
    {
      question: "Which sentence correctly expresses regret about a past action using wish?",
      choices: [
        "I wish I did not spend so much money yesterday.",
        "I wish I had not spent so much money yesterday.",
        "I wish I do not spend so much money yesterday.",
        "I wish I have not spent so much money yesterday."
      ],
      correctIndex: 1,
      explanation:
        "Regret about the past is expressed using 'I wish' + Past Perfect. 'I wish I had not spent' means I did spend it, and I regret it."
    },
    // 46
    {
      question: "Choose the correct tense: 'He ___ always forgetting his keys lately.'",
      choices: ["was", "has", "is", "has been"],
      correctIndex: 3,
      explanation:
        "'Lately' implies a recent, repeated behavior. 'Has been forgetting' (Present Perfect Continuous) implies this is a new or temporary repeated habit."
    },
    // 47
    {
      question: "Which sentence correctly uses the structure 'used to' for past habits?",
      choices: [
        "I was used to play outside when I was a child.",
        "I used to play outside when I was a child.",
        "I used play outside when I was a child.",
        "I am used to played outside when I was a child."
      ],
      correctIndex: 1,
      explanation:
        "'Used to + base verb' (used to play) indicates a habit that existed in the past but does not exist now."
    },
    // 48
    {
      question: "Choose the correct tense: 'He ___ in the office when his boss walked in.'",
      choices: ["worked", "was worked", "was working", "had working"],
      correctIndex: 2,
      explanation:
        "'Was working' (Past Continuous) sets the background scene that was in progress when the specific event ('walked in') occurred."
    },
    // 49
    {
      question: "Which sentence correctly uses future perfect to show a deadline?",
      choices: [
        "By next Friday, I will submit the report.",
        "By next Friday, I will have submitted the report.",
        "By next Friday, I will submitted the report.",
        "By next Friday, I have submitted the report."
      ],
      correctIndex: 1,
      explanation:
        "The preposition 'By' combined with a future time suggests the action will be completed *before* that time. This requires Future Perfect: 'will have submitted'."
    },
    // 50
    {
      question: "Choose the correct tense: 'He said that by 2020, he ___ here for ten years.'",
      choices: ["will work", "has worked", "had worked", "would have worked"],
      correctIndex: 3,
      explanation:
        "This is 'Future Perfect in the Past'. Originally: 'I will have worked'. In reported speech after a past verb ('said'), 'will' changes to 'would'. Thus: 'would have worked'."
    }
  ],

  super: [
    // 1
    {
      question: "Identify the error in tense sequence: 'If I knew about the meeting, I would have attended yesterday.'",
      choices: [
        "If I knew",
        "would have attended",
        "yesterday",
        "no error"
      ],
      correctIndex: 0,
      explanation:
        "This is a Third Conditional sentence referring to the past ('yesterday'). The 'if' clause requires Past Perfect ('If I had known'), not Simple Past ('If I knew')."
    },
    // 2
    {
      question: "Choose the best revision: 'Had I know about the delay, I would not have rushed.'",
      choices: [
        "Had I knew about the delay, I would not have rushed.",
        "Had I knew about the delay, I would not rush.",
        "Had I known about the delay, I would not have rushed.",
        "Had I knowing about the delay, I would not have rushed."
      ],
      correctIndex: 2,
      explanation:
        "This sentence uses Inversion to replace 'If I had known'. The correct structure is 'Had + Subject + Past Participle'. Therefore, 'Had I known' is correct."
    },
    // 3
    {
      question: "Which sentence correctly uses a mixed conditional (present result of past action)?",
      choices: [
        "If I had studied harder, I would be more confident now.",
        "If I studied harder, I would be more confident now.",
        "If I had studied harder, I would have been more confident now.",
        "If I studied harder, I would have been more confident now."
      ],
      correctIndex: 0,
      explanation:
        "The condition is in the past (If I had studied... uses Past Perfect), but the result is in the present (I would be... uses Conditional Present). This creates a valid Mixed Conditional."
    },
    // 4
    {
      question: "Choose the correct tense: 'I would rather you ___ this matter with the manager yourself.'",
      choices: ["discuss", "discussed", "will discuss", "have discussed"],
      correctIndex: 1,
      explanation:
        "When 'would rather' is followed by a different subject ('you'), we use the Past Subjunctive (which looks like Simple Past) to talk about the present/future. Correct: 'discussed'."
    },
    // 5
    {
      question: "Which sentence correctly uses 'It is high time'?",
      choices: [
        "It is high time we start the project.",
        "It is high time we started the project.",
        "It is high time we will start the project.",
        "It is high time we had started the project."
      ],
      correctIndex: 1,
      explanation:
        "The expression 'It is high time' is always followed by the Past Simple (subjunctive sense) to indicate that something should have been done already. Correct: 'started'."
    },
    // 6
    {
      question: "Choose the correct tense: 'He speaks as if he ___ all the answers.'",
      choices: ["knows", "knew", "had known", "has known"],
      correctIndex: 1,
      explanation:
        "'As if' is followed by the Past Simple ('knew') to indicate that the situation is unreal or improbable (he acts like he knows, but he probably doesn't)."
    },
    // 7
    {
      question: "Which sentence correctly uses the subjunctive after 'insist'?",
      choices: [
        "They insist that he arrives on time.",
        "They insist that he arrive on time.",
        "They insist that he arrived on time.",
        "They insist that he is arriving on time."
      ],
      correctIndex: 1,
      explanation:
        "Verbs of demand/suggestion like 'insist' are followed by the Subjunctive Mood: 'that + subject + base verb'. Therefore, 'that he arrive' is correct (not 'arrives')."
    },
    // 8
    {
      question: "Choose the correct verb form: 'The board recommended that the policy ___ immediately.'",
      choices: ["implements", "implemented", "be implemented", "is implemented"],
      correctIndex: 2,
      explanation:
        "This is the Passive Subjunctive. 'Recommended that' requires the base form 'be' + past participle. Correct: 'be implemented'."
    },
    // 9
    {
      question: "Which sentence correctly uses inversion with a negative adverbial?",
      choices: [
        "Under no circumstances we will reveal the source.",
        "Under no circumstances will we reveal the source.",
        "Under no circumstances reveal we the source.",
        "Under no circumstances we reveal the source."
      ],
      correctIndex: 1,
      explanation:
        "When a sentence starts with a negative phrase like 'Under no circumstances', the subject and auxiliary verb must be inverted. Correct: 'will we reveal'."
    },
    // 10
    {
      question: "Choose the correct tense: 'Rarely ___ such dedication seen in a new employee.'",
      choices: ["has", "have", "is", "was"],
      correctIndex: 0,
      explanation:
        "Inversion with 'Rarely' requires 'has' (auxiliary) + 'dedication' (subject). 'Has been seen' is the implied passive structure. Correct: 'Rarely has such dedication [been] seen'."
    },
    // 11
    {
      question: "Which sentence correctly uses the future perfect for an earlier future action?",
      choices: [
        "By the time you arrive, we will eat.",
        "By the time you arrive, we will have eaten.",
        "By the time you will arrive, we will have eaten.",
        "By the time you will arrive, we will ate."
      ],
      correctIndex: 1,
      explanation:
        "Eating will be finished *before* the arrival. Future Perfect ('will have eaten') is required. Also, the time clause ('By the time you arrive') uses Present Simple."
    },
    // 12
    {
      question: "Choose the correct tense: 'Scarcely ___ we finished the work when the deadline was extended.'",
      choices: ["had", "have", "has", "having"],
      correctIndex: 0,
      explanation:
        "'Scarcely... when' is a structure used to show one thing happened immediately after another. It triggers past perfect inversion: 'Scarcely had we finished'."
    },
    // 13
    {
      question: "Which sentence correctly avoids a dangling modifier?",
      choices: [
        "Walking down the street, the noise of the cars bothered me.",
        "Walking down the street, I was bothered by the noise of the cars.",
        "Walking down the street, the cars were noisy.",
        "Walking down the street, the loud cars bothered."
      ],
      correctIndex: 1,
      explanation:
        "The modifier 'Walking down the street' implies a person is walking. The subject of the main clause must be that person ('I'). In the other options, the subject is 'noise' or 'cars', which cannot walk."
    },
    // 14
    {
      question: "Choose the correct tense: 'Despite ___ exhausted, she continued working.'",
      choices: ["to be", "been", "being", "be"],
      correctIndex: 2,
      explanation:
        "'Despite' is a preposition, and prepositions are followed by noun phrases or gerunds (verb-ing). Correct: 'being'."
    },
    // 15
    {
      question: "Which sentence correctly uses 'used to' versus 'be used to'?",
      choices: [
        "I used to the noise in the city.",
        "I am used to the noise in the city.",
        "I am use to the noise in the city.",
        "I used to the noise in the city now."
      ],
      correctIndex: 1,
      explanation:
        "'Be used to' means 'to be accustomed to'. It is followed by a noun or gerund. 'I am used to the noise' is correct. 'Used to' (without 'be') refers to past habits."
    },
    // 16
    {
      question: "Choose the correct tense: 'By the end of this year, I ___ here for fifteen years.'",
      choices: ["will work", "will have worked", "will have been working", "have been working"],
      correctIndex: 2,
      explanation:
        "'Will have been working' (Future Perfect Continuous) is appropriate because it emphasizes the continuity and duration of the action up to a specific future point."
    },
    // 17
    {
      question: "Which sentence correctly uses a reduced relative clause in the present?",
      choices: [
        "The man who is standing at the door is my uncle.",
        "The man standing at the door is my uncle.",
        "The man stand at the door is my uncle.",
        "The man who standing at the door is my uncle."
      ],
      correctIndex: 1,
      explanation:
        "We can reduce 'who is standing' to simply 'standing' (present participle). This is a grammatically correct reduced relative clause."
    },
    // 18
    {
      question: "Choose the correct tense: 'He appears ___ the requirements already.'",
      choices: ["to meet", "to have met", "meeting", "to has met"],
      correctIndex: 1,
      explanation:
        "He appears (present) to have done something in the past. We use the Perfect Infinitive ('to have met') to show the action happened before the appearance."
    },
    // 19
    {
      question: "Which sentence correctly uses the passive infinitive?",
      choices: [
        "The report is yet to be approve.",
        "The report is yet to approve.",
        "The report is yet to be approved.",
        "The report is yet to be approving."
      ],
      correctIndex: 2,
      explanation:
        "The structure for passive infinitive is 'to be + past participle'. Therefore, 'to be approved' is the correct form."
    },
    // 20
    {
      question: "Choose the correct tense: 'If it were not for her guidance, I ___ lost.'",
      choices: ["will be", "would be", "am", "was"],
      correctIndex: 1,
      explanation:
        "'If it were not for...' introduces a hypothetical present situation (Second Conditional). The result clause requires 'would + base verb': 'would be'."
    },
    // 21
    {
      question: "Which sentence correctly uses 'had better'?",
      choices: [
        "You had better to leave now.",
        "You had better leave now.",
        "You better had leave now.",
        "You had leave better now."
      ],
      correctIndex: 1,
      explanation:
        "'Had better' acts like a modal verb (similar to 'should') and is always followed by the bare infinitive (verb without 'to'). Correct: 'had better leave'."
    },
    // 22
    {
      question: "Choose the correct tense: 'No sooner ___ the announcement made than the phones started ringing.'",
      choices: ["was", "has", "had", "being"],
      correctIndex: 2,
      explanation:
        "'No sooner' triggers inversion with Past Perfect. The passive structure is 'No sooner had [subject] been made'. In this condensed form, 'had the announcement [been] made' is implied."
    },
    // 23
    {
      question: "Which sentence correctly uses future in the past?",
      choices: [
        "He said he will meet us at 5 p.m.",
        "He said he would meet us at 5 p.m.",
        "He said he would met us at 5 p.m.",
        "He said he will met us at 5 p.m."
      ],
      correctIndex: 1,
      explanation:
        "When speaking about the future from a past perspective (Future in the Past), 'will' becomes 'would'. Correct: 'He said he would meet us'."
    },
    // 24
    {
      question: "Choose the correct tense: 'By this time tomorrow, we ___ the results.'",
      choices: ["will be knowing", "will know", "will have known", "have known"],
      correctIndex: 1,
      explanation:
        "While 'will have known' is technically Future Perfect, 'know' is a stative verb. In many contexts, Simple Future 'will know' is preferred to indicate we will possess the knowledge by then."
    },
    // 25
    {
      question: "Which sentence correctly uses 'would rather' with the past perfect?",
      choices: [
        "I would rather you had told me the truth earlier.",
        "I would rather you have told me the truth earlier.",
        "I would rather you tell me the truth earlier.",
        "I would rather you told me the truth earlier (past)."
      ],
      correctIndex: 0,
      explanation:
        "To express regret about the past using 'would rather' + a different subject, we use the Past Perfect. 'I would rather you had told me' means 'I wish you had told me'."
    },
    // 26
    {
      question: "Choose the correct tense: 'Hardly ___ we reached the terminal when the bus left.'",
      choices: ["had", "have", "has", "being"],
      correctIndex: 0,
      explanation:
        "Similar to 'No sooner', 'Hardly' triggers inversion with Past Perfect. Correct: 'Hardly had we reached'."
    },
    // 27
    {
      question: "Which sentence correctly uses the structure 'be about to'?",
      choices: [
        "I am about leaving when he called.",
        "I am about to leave when he called.",
        "I was about to leave when he called.",
        "I was about to leaving when he called."
      ],
      correctIndex: 2,
      explanation:
        "'Was about to leave' expresses the immediate future from a past perspective (I was on the verge of leaving when interruption happened)."
    },
    // 28
    {
      question: "Choose the correct tense: 'She denied ___ anything wrong.'",
      choices: ["to do", "doing", "to have done", "have done"],
      correctIndex: 1,
      explanation:
        "The verb 'deny' is followed by a gerund (verb-ing). Correct: 'denied doing'."
    },
    // 29
    {
      question: "Which sentence correctly uses the future perfect in a formal notice?",
      choices: [
        "All applications will have been received by 5 p.m. on Friday.",
        "All applications will be received by 5 p.m. on Friday.",
        "All applications have been received by 5 p.m. on Friday.",
        "All applications will received by 5 p.m. on Friday."
      ],
      correctIndex: 0,
      explanation:
        "Ideally, this should be 'must be received', but among the choices, 'will have been received' (Future Perfect Passive) implies the deadline will have passed and the action completed."
    },
    // 30
    {
      question: "Choose the correct tense: 'He regretted ___ the deadline.'",
      choices: ["to miss", "missing", "to have missing", "to have missed"],
      correctIndex: 3,
      explanation:
        "While 'regretted missing' is common, 'regretted to have missed' (Perfect Infinitive) is a formal option showing the action clearly preceded the regret. (Note: 'Missing' is more common, but 'to have missed' is the 'super/advanced' grammar option here)."
    },
    // 31
    {
      question: "Which sentence correctly uses 'be to' for official arrangements?",
      choices: [
        "The chairman is to address the assembly at 9 a.m.",
        "The chairman is addressing the assembly at 9 a.m. (officially).",
        "The chairman will to address the assembly at 9 a.m.",
        "The chairman is being address the assembly at 9 a.m."
      ],
      correctIndex: 0,
      explanation:
        "The structure 'be + to + infinitive' (is to address) is used for formal schedules, official plans, or instructions."
    },
    // 32
    {
      question: "Choose the correct tense: 'He treats me as though I ___ his assistant.'",
      choices: ["am", "was", "were", "had been"],
      correctIndex: 2,
      explanation:
        "'As though' implies unreality. Even though the verb is present ('treats'), the clause following it requires Past Subjunctive ('were') to show I am *not* actually his assistant."
    },
    // 33
    {
      question: "Which sentence correctly uses a reduced adverbial clause of time?",
      choices: [
        "While he was driving to work, he received a call.",
        "While driving to work, he received a call.",
        "While drive to work, he received a call.",
        "While he driving to work, he received a call."
      ],
      correctIndex: 1,
      explanation:
        "If the subject is the same in both clauses, we can omit the subject and 'be' verb in the time clause. 'While he was driving' reduces to 'While driving'."
    },
    // 34
    {
      question: "Choose the correct tense: 'By the time you read this letter, I ___ abroad.'",
      choices: ["will have gone", "will be gone", "have gone", "am gone"],
      correctIndex: 0,
      explanation:
        "Looking forward to the moment the letter is read, the act of going abroad will be finished. Future Perfect ('will have gone') is the grammatically precise tense."
    },
    // 35
    {
      question: "Which sentence correctly uses a mixed conditional (present condition, past result)?",
      choices: [
        "If I were more careful, I would not have made that mistake.",
        "If I was more careful, I would not make that mistake.",
        "If I had been more careful, I would not make that mistake.",
        "If I am more careful, I would not have made that mistake."
      ],
      correctIndex: 0,
      explanation:
        "Present Condition: 'If I were more careful' (meaning: I am generally not careful). Past Result: 'would not have made' (meaning: I did make the mistake). This is a mixed conditional."
    },
    // 36
    {
      question: "Choose the correct tense: 'Seldom ___ such commitment seen among new staff.'",
      choices: ["has", "have", "is", "was"],
      correctIndex: 0,
      explanation:
        "'Seldom' is a negative adverb triggering inversion. 'Seldom has... been seen'. 'Has' is the correct auxiliary for the singular subject 'commitment'."
    },
    // 37
    {
      question: "Which sentence correctly expresses a wish about the present using 'would'?",
      choices: [
        "I wish he would stop interrupting the meeting.",
        "I wish he would stopped interrupting the meeting.",
        "I wish he would have stopped interrupting the meeting.",
        "I wish he will stop interrupting the meeting."
      ],
      correctIndex: 0,
      explanation:
        "When we are annoyed by a present habit and want it to change, we use 'I wish + subject + would + base verb'. Correct: 'I wish he would stop'."
    },
    // 38
    {
      question: "Choose the correct tense: 'By next June, I ___ my Master's degree.'",
      choices: ["will complete", "will have completed", "will be completing", "have completed"],
      correctIndex: 1,
      explanation:
        "The deadline 'By next June' requires Future Perfect to show the degree will be finished by then. Correct: 'will have completed'."
    },
    // 39
    {
      question: "Which sentence correctly uses 'be used to' with a gerund?",
      choices: [
        "She is used to wake up early.",
        "She is used to waking up early.",
        "She used to waking up early.",
        "She used to wakes up early."
      ],
      correctIndex: 1,
      explanation:
        "'Be used to' (accustomed to) requires a gerund (-ing form). Correct: 'is used to waking up'."
    },
    // 40
    {
      question: "Choose the correct tense: 'If it had not been for his help, we ___ the project on time.'",
      choices: ["did not finish", "would not finish", "would not have finished", "had not finished"],
      correctIndex: 2,
      explanation:
        "This is a Third Conditional sentence (unreal past). 'If it had not been for...' is a fixed phrase for 'If he hadn't helped'. The result must be 'would not have finished'."
    },
    // 41
    {
      question: "Which sentence correctly uses 'was/were to have' to express an unreal plan?",
      choices: [
        "He was to have meet them at noon, but he got sick.",
        "He was to met them at noon, but he got sick.",
        "He was to have met them at noon, but he got sick.",
        "He were to have met them at noon, but he got sick."
      ],
      correctIndex: 2,
      explanation:
        "'Was to have met' is a sophisticated structure used to describe a plan in the past that was *not* fulfilled."
    },
    // 42
    {
      question: "Choose the correct tense: 'No sooner ___ the speech finished than the audience applauded.'",
      choices: ["has", "had", "was", "were"],
      correctIndex: 1,
      explanation:
        "Inversion with 'No sooner' uses the Past Perfect. Correct: 'No sooner had the speech finished'."
    },
    // 43
    {
      question: "Which sentence correctly uses 'have' in a perfect conditional?",
      choices: [
        "If she had left earlier, she would catch the train.",
        "If she had left earlier, she would have caught the train.",
        "If she left earlier, she would have catch the train.",
        "If she would have left earlier, she would have caught the train."
      ],
      correctIndex: 1,
      explanation:
        "Standard Third Conditional: If + Past Perfect ('had left'), ... Would + Have + Past Participle ('would have caught')."
    },
    // 44
    {
      question: "Choose the correct tense: 'The document is believed ___ lost.'",
      choices: ["to be", "to have been", "being", "to having been"],
      correctIndex: 1,
      explanation:
        "We use the Perfect Passive Infinitive ('to have been lost') to show that the document was lost in the past, relative to the current belief ('is believed')."
    },
    // 45
    {
      question: "Which sentence correctly uses 'as though' with a past perfect to refer to an unreal past?",
      choices: [
        "He speaks as though he has never made a mistake.",
        "He spoke as though he has never made a mistake.",
        "He spoke as though he had never made a mistake.",
        "He speaks as though he had never make a mistake."
      ],
      correctIndex: 2,
      explanation:
        "Since the main verb 'spoke' is past, and the 'mistake' situation is unreal/hypothetical in the *earlier* past, we use Past Perfect ('had never made')."
    },
    // 46
    {
      question: "Choose the correct tense: 'At this rate, we ___ the project by the original deadline.'",
      choices: ["will not meet", "would not meet", "would not have met", "did not meet"],
      correctIndex: 0,
      explanation:
        "The phrase 'At this rate' suggests a real prediction about the future based on current evidence. Simple Future 'will not meet' is correct."
    },
    // 47
    {
      question: "Which sentence correctly uses inversion after 'little'?",
      choices: [
        "Little he knew that the plan would fail.",
        "Little did he know that the plan would fail.",
        "Little he did know that the plan would fail.",
        "Little knew he that the plan would fail."
      ],
      correctIndex: 1,
      explanation:
        "The negative adverbial 'Little' triggers inversion of the auxiliary 'did' and the subject 'he'. Correct: 'Little did he know'."
    },
    // 48
    {
      question: "Choose the correct tense: 'Had it not been for the traffic, we ___ on time.'",
      choices: ["would arrive", "would have arrived", "arrived", "had arrived"],
      correctIndex: 1,
      explanation:
        "'Had it not been for...' is a Third Conditional structure. The result clause must be 'would have + past participle': 'would have arrived'."
    },
    // 49
    {
      question: "Which sentence correctly mixes conditionals to show a present condition and a future result?",
      choices: [
        "If he works harder, he would get promoted next year.",
        "If he worked harder, he will get promoted next year.",
        "If he works harder, he will get promoted next year.",
        "If he worked harder, he would have gotten promoted next year."
      ],
      correctIndex: 2,
      explanation:
        "This is actually a standard First Conditional (Real Possibility). Present condition ('works') leads to a Future result ('will get'). Mixed conditionals usually involve unreal situations."
    },
    // 50
    {
      question: "Choose the correct tense: 'Were he to ask for help, we ___ willing to support him.'",
      choices: ["will be", "would be", "were", "are"],
      correctIndex: 1,
      explanation:
        "'Were he to ask' is a formal inversion of 'If he asked' (Second Conditional/Unreal). The result clause requires 'would + base verb': 'would be'."
    }
  ]
};
