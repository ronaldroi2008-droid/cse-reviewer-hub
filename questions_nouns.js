const NOUN_QUESTIONS = {
  beginner: [
    {
      question: "Which word is a noun?",
      choices: ["quickly", "happy", "table", "outside"],
      correctIndex: 2,
      explanation: "\"Table\" is a noun because it names a thing."
    },
    {
      question: "Which word is a noun in this sentence: \"The boy runs fast\"?",
      choices: ["boy", "runs", "fast", "the"],
      correctIndex: 0,
      explanation: "\"Boy\" is a noun; it names a person."
    },
    {
      question: "Which of the following is a person noun?",
      choices: ["library", "teacher", "city", "river"],
      correctIndex: 1,
      explanation: "\"Teacher\" names a person; the others name places or things."
    },
    {
      question: "Which word is a place noun?",
      choices: ["honesty", "mountain", "sing", "blue"],
      correctIndex: 1,
      explanation: "\"Mountain\" is a place/thing noun; the others are not nouns."
    },
    {
      question: "Which word is a thing noun?",
      choices: ["dance", "music", "angry", "slowly"],
      correctIndex: 1,
      explanation: "\"Music\" is a noun because it names a thing (sound/art)."
    },
    {
      question: "Which of the following is an idea (abstract) noun?",
      choices: ["happiness", "chair", "garden", "window"],
      correctIndex: 0,
      explanation: "\"Happiness\" is an abstract noun because it names a feeling or idea."
    },
    {
      question: "Which word in the sentence is a noun? \"The cat slept\"",
      choices: ["The", "cat", "slept", "none"],
      correctIndex: 1,
      explanation: "\"Cat\" is a noun; it names an animal."
    },
    {
      question: "Which of the following is a common noun?",
      choices: ["Maria", "Cebu City", "school", "May"],
      correctIndex: 2,
      explanation: "\"School\" is a common noun because it names a general place."
    },
    {
      question: "Which of the following is a proper noun?",
      choices: ["country", "Philippines", "city", "mountain"],
      correctIndex: 1,
      explanation: "\"Philippines\" is a proper noun; it is the specific name of a country."
    },
    {
      question: "Which word is a noun?",
      choices: ["carefully", "decision", "often", "before"],
      correctIndex: 1,
      explanation: "\"Decision\" is a noun; it names an idea or result of choosing."
    },
    {
      question: "Which word is a noun in this sentence: \"My sister is kind\"?",
      choices: ["My", "sister", "is", "kind"],
      correctIndex: 1,
      explanation: "\"Sister\" is a noun; it names a person."
    },
    {
      question: "Which of the following is a concrete noun?",
      choices: ["justice", "friendship", "table", "honesty"],
      correctIndex: 2,
      explanation: "\"Table\" is concrete because it can be seen and touched."
    },
    {
      question: "Which of the following is an abstract noun?",
      choices: ["computer", "patience", "river", "bridge"],
      correctIndex: 1,
      explanation: "\"Patience\" is an abstract noun because it names a quality."
    },
    {
      question: "Which noun is a proper noun?",
      choices: ["teacher", "city", "Dr. Santos", "car"],
      correctIndex: 2,
      explanation: "\"Dr. Santos\" is a specific name of a person, so it is a proper noun."
    },
    {
      question: "Which noun is a common noun?",
      choices: ["Quezon City", "Luzon", "continent", "Africa"],
      correctIndex: 2,
      explanation: "\"Continent\" is a general name for a landmass; it is a common noun."
    },
    {
      question: "Which noun is an animal?",
      choices: ["happiness", "dog", "library", "telephone"],
      correctIndex: 1,
      explanation: "\"Dog\" names an animal and is a noun."
    },
    {
      question: "Which word is a noun?",
      choices: ["careful", "carefully", "care", "caringly"],
      correctIndex: 2,
      explanation:
        "\"Care\" is a noun in this list; it can also function as a verb in other contexts."
    },
    {
      question: "Which word is a noun in this sentence: \"We visited the museum\"?",
      choices: ["We", "visited", "the", "museum"],
      correctIndex: 3,
      explanation: "\"Museum\" is the noun; it names a place."
    },
    {
      question: "Which of the following contains TWO nouns?",
      choices: [
        "The child laughed.",
        "They sang loudly.",
        "She will dance.",
        "He runs quickly."
      ],
      correctIndex: 0,
      explanation:
        "\"The child\" has the article \"The\" plus the noun \"child\"; \"child\" is the only noun though. This item focuses on identifying \"child\" as the noun in the phrase."
    },
    {
      question: "Which word is a noun?",
      choices: ["quick", "quickly", "quiet", "quietness"],
      correctIndex: 3,
      explanation:
        "\"Quietness\" is a noun; it names a state or condition of being quiet."
    },
    {
      question: "Which is a countable noun?",
      choices: ["water", "rice", "apple", "furniture"],
      correctIndex: 2,
      explanation: "\"Apple\" is countable; it can be counted as one apple, two apples, etc."
    },
    {
      question: "Which is an uncountable noun?",
      choices: ["book", "chair", "sugar", "student"],
      correctIndex: 2,
      explanation:
        "\"Sugar\" is usually uncountable in English and does not normally take a plural form."
    },
    {
      question: "Which is a collective noun?",
      choices: ["team", "child", "door", "flower"],
      correctIndex: 0,
      explanation:
        "\"Team\" is a collective noun because it refers to a group of people."
    },
    {
      question: "Which is a collective noun?",
      choices: ["family", "table", "car", "notebook"],
      correctIndex: 0,
      explanation:
        "\"Family\" is a collective noun that refers to a group of related people."
    },
    {
      question: "Which of the following is a plural noun?",
      choices: ["book", "books", "a book", "the book"],
      correctIndex: 1,
      explanation: "\"Books\" is plural; it shows more than one book."
    },
    {
      question: "Which of the following is singular?",
      choices: ["chairs", "students", "cities", "city"],
      correctIndex: 3,
      explanation: "\"City\" is singular; it refers to one city."
    },
    {
      question: "Which sentence uses a noun correctly?",
      choices: [
        "She has many information.",
        "He gave me an advice.",
        "We bought two chairs.",
        "They have much friends."
      ],
      correctIndex: 2,
      explanation:
        "\"Chairs\" is a correct plural countable noun. The other sentences use uncountable nouns incorrectly or mismatch quantifiers."
    },
    {
      question: "Which group contains only nouns?",
      choices: [
        ["teacher", "library", "honesty"].join(", "),
        ["teacher", "run", "book"].join(", "),
        ["sing", "library", "slow"].join(", "),
        ["happy", "desk", "quickly"].join(", ")
      ],
      correctIndex: 0,
      explanation:
        "\"Teacher,\" \"library,\" and \"honesty\" are all nouns (person, place, idea)."
    },
    {
      question: "Which is a proper noun?",
      choices: ["month", "January", "season", "holiday"],
      correctIndex: 1,
      explanation:
        "\"January\" is a proper noun because it is a specific month and starts with a capital letter."
    },
    {
      question: "Which is a common noun?",
      choices: ["Pacific Ocean", "Asia", "river", "Mount Apo"],
      correctIndex: 2,
      explanation:
        "\"River\" is a general name for a type of water body; it is a common noun."
    },
    {
      question: "Which noun is abstract?",
      choices: ["courage", "bag", "tree", "street"],
      correctIndex: 0,
      explanation:
        "\"Courage\" is an abstract noun because it names a quality or idea."
    },
    {
      question: "Which noun is concrete?",
      choices: ["honesty", "freedom", "desk", "kindness"],
      correctIndex: 2,
      explanation:
        "\"Desk\" is concrete because it can be perceived with the senses."
    },
    {
      question: "Which word in the sentence is a noun? \"The rain was heavy.\"",
      choices: ["The", "rain", "was", "heavy"],
      correctIndex: 1,
      explanation:
        "\"Rain\" is the noun; it names a thing (precipitation)."
    },
    {
      question: "Which of the following is a noun?",
      choices: ["quick", "slowly", "arrival", "bright"],
      correctIndex: 2,
      explanation:
        "\"Arrival\" is a noun; it names an event or occurrence."
    },
    {
      question: "Which is a person noun?",
      choices: ["pilot", "airport", "plane", "flight"],
      correctIndex: 0,
      explanation:
        "\"Pilot\" is a person; the others are things or places."
    },
    {
      question: "Which is a place noun?",
      choices: ["justice", "market", "courage", "truth"],
      correctIndex: 1,
      explanation:
        "\"Market\" is a place where people buy and sell goods."
    },
    {
      question: "Which is a thing noun?",
      choices: ["democracy", "government", "table", "truth"],
      correctIndex: 2,
      explanation:
        "\"Table\" is a physical object, so it is a concrete thing noun."
    },
    {
      question: "Which is an uncountable noun?",
      choices: ["bottle", "milk", "student", "pencil"],
      correctIndex: 1,
      explanation:
        "\"Milk\" is normally treated as an uncountable noun in English."
    },
    {
      question: "Which is a countable noun?",
      choices: ["luggage", "furniture", "idea", "advice"],
      correctIndex: 2,
      explanation:
        "\"Idea\" is countable; you can have one idea or many ideas."
    },
    {
      question: "Which of the following is a noun?",
      choices: ["glad", "gladly", "gladness", "gladly"],
      correctIndex: 2,
      explanation:
        "\"Gladness\" is a noun that names a feeling or state."
    },
    {
      question: "Which noun is a proper noun?",
      choices: ["city", "island", "Mindanao", "lake"],
      correctIndex: 2,
      explanation:
        "\"Mindanao\" is a specific island, so it is a proper noun."
    },
    {
      question: "Which noun is common?",
      choices: ["Asia", "Europe", "continent", "Philippines"],
      correctIndex: 2,
      explanation:
        "\"Continent\" is a general term for a large landmass, so it is a common noun."
    },
    {
      question: "Which word in the sentence is a noun? \"Children play outside.\"",
      choices: ["Children", "play", "outside", "none"],
      correctIndex: 0,
      explanation:
        "\"Children\" is a noun; it names people (young persons)."
    },
    {
      question: "Which group contains only nouns?",
      choices: [
        ["desk", "student", "kindness"].join(", "),
        ["desk", "study", "kindness"].join(", "),
        ["quick", "student", "kindness"].join(", "),
        ["desk", "student", "quickly"].join(", ")
      ],
      correctIndex: 0,
      explanation:
        "\"Desk,\" \"student,\" and \"kindness\" are all nouns (thing, person, idea)."
    },
    {
      question: "Which of these is an abstract noun?",
      choices: ["chair", "library", "friendship", "pencil"],
      correctIndex: 2,
      explanation:
        "\"Friendship\" is an abstract noun that refers to a relationship or feeling."
    },
    {
      question: "Which of these is a concrete noun?",
      choices: ["beauty", "anger", "garden", "kindness"],
      correctIndex: 2,
      explanation:
        "\"Garden\" is a concrete noun; it is a physical place."
    },
    {
      question: "Which word is a noun?",
      choices: ["walk", "beautiful", "quickly", "teacher"],
      correctIndex: 3,
      explanation:
        "\"Teacher\" is a noun because it names a person."
    },
    {
      question: "Which plural noun is correct?",
      choices: ["childs", "childes", "children", "childrens"],
      correctIndex: 2,
      explanation:
        "\"Children\" is the correct irregular plural form of \"child.\""
    },
    {
      question: "Which plural noun is correct?",
      choices: ["mans", "men", "mens", "man"],
      correctIndex: 1,
      explanation:
        "\"Men\" is the correct plural of \"man.\""
    }
  ],

  intermediate: [
    {
      question: "Which of the following is an irregular plural noun?",
      choices: ["cars", "books", "children", "houses"],
      correctIndex: 2,
      explanation:
        "\"Children\" is an irregular plural form of \"child.\""
    },
    {
      question: "Which plural form is correct?",
      choices: ["foot", "foots", "feet", "feets"],
      correctIndex: 2,
      explanation:
        "\"Feet\" is the correct plural of \"foot.\""
    },
    {
      question: "Which plural form is correct?",
      choices: ["mouses", "mice", "mices", "mouse"],
      correctIndex: 1,
      explanation:
        "\"Mice\" is the correct irregular plural of \"mouse.\""
    },
    {
      question: "Which plural noun is correct?",
      choices: ["womans", "woman", "womens", "women"],
      correctIndex: 3,
      explanation:
        "\"Women\" is the correct plural of \"woman.\""
    },
    {
      question: "Which plural noun is correct?",
      choices: ["tooths", "teeth", "toothes", "tooth"],
      correctIndex: 1,
      explanation:
        "\"Teeth\" is the correct plural of \"tooth.\""
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
        "\"Cars\" is a countable noun and can be used with the number \"two.\""
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
        "\"Experience\" is uncountable and is correctly used with \"much.\""
    },
    {
      question: "Which noun is uncountable?",
      choices: ["student", "equipment", "car", "teacher"],
      correctIndex: 1,
      explanation:
        "\"Equipment\" is usually uncountable and does not normally take a plural form."
    },
    {
      question: "Which noun is countable?",
      choices: ["advice", "furniture", "idea", "information"],
      correctIndex: 2,
      explanation:
        "\"Idea\" is countable; you can say one idea, two ideas, etc."
    },
    {
      question: "Which sentence uses an article correctly?",
      choices: [
        "She is an honest person.",
        "She is a honest person.",
        "She is the honest person in a group of unknown people.",
        "She is honest person."
      ],
      correctIndex: 0,
      explanation:
        "\"An\" is correct before the vowel sound /ɒ/ in \"honest.\""
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "I need an information.",
        "I need a piece of information.",
        "I need many informations.",
        "I need few information."
      ],
      correctIndex: 1,
      explanation:
        "\"Information\" is uncountable, so we say \"a piece of information,\" not \"an information.\""
    },
    {
      question: "Which sentence uses a collective noun correctly?",
      choices: [
        "The team are playing its best.",
        "The team is playing its best.",
        "The team are plays best.",
        "The teams is playing best."
      ],
      correctIndex: 1,
      explanation:
        "In this sentence the team is treated as a single unit, so \"team is\" is correct."
    },
    {
      question: "Which sentence uses a collective noun correctly?",
      choices: [
        "The committee have decided on its plan unanimously.",
        "The committee has decided on its plan unanimously.",
        "The committee are deciding its plan yesterday.",
        "The committees has decided on their plan."
      ],
      correctIndex: 1,
      explanation:
        "The committee is considered a single unit in this sentence, so the singular verb \"has\" is correct."
    },
    {
      question: "In the sentence \"My brother bought a new laptop,\" which word is the subject?",
      choices: ["My", "brother", "bought", "laptop"],
      correctIndex: 1,
      explanation:
        "\"Brother\" (with the determiner \"My\") is the subject noun performing the action."
    },
    {
      question: "In the sentence \"The teacher praised the students,\" which word is the direct object?",
      choices: ["teacher", "praised", "students", "the"],
      correctIndex: 2,
      explanation:
        "\"Students\" is the direct object because they receive the action of the verb \"praised.\""
    },
    {
      question: "Which sentence has the noun as an object of a preposition?",
      choices: [
        "She reads a book.",
        "They walked to the park.",
        "He is a teacher.",
        "Courage is important."
      ],
      correctIndex: 1,
      explanation:
        "\"Park\" is the object of the preposition \"to\" in the phrase \"to the park.\""
    },
    {
      question: "Which noun is functioning as a subject complement?",
      choices: [
        "He is a doctor.",
        "He called the doctor.",
        "He works with the doctor.",
        "He sees the doctor."
      ],
      correctIndex: 0,
      explanation:
        "In \"He is a doctor,\" the noun \"doctor\" renames the subject (He) and acts as a subject complement."
    },
    {
      question: "Which sentence uses plural nouns correctly?",
      choices: [
        "The childrens are playing.",
        "The children is playing.",
        "The children are playing.",
        "The childs are playing."
      ],
      correctIndex: 2,
      explanation:
        "\"Children\" is already plural; it must take the plural verb \"are.\""
    },
    {
      question: "Which sentence uses the possessive noun correctly?",
      choices: [
        "The teachers room is big.",
        "The teacher's room is big.",
        "The teachers's room is big.",
        "The teacher room is big."
      ],
      correctIndex: 1,
      explanation:
        "\"Teacher's\" shows possessive form, meaning the room of the teacher."
    },
    {
      question: "Which possessive form is correct for a plural noun?",
      choices: ["students", "student's", "students's", "students'"],
      correctIndex: 3,
      explanation:
        "\"Students'\" is the correct possessive form of the plural noun \"students.\""
    },
    {
      question: "Which sentence uses a gerund as a noun?",
      choices: [
        "She is reading a book.",
        "Reading is my hobby.",
        "I will reading later.",
        "They reading quickly."
      ],
      correctIndex: 1,
      explanation:
        "\"Reading\" is used as a noun (the subject of the sentence) and is a gerund."
    },
    {
      question: "Which word is a noun formed from the verb \"decide\"?",
      choices: ["decided", "decision", "deciding", "decisive"],
      correctIndex: 1,
      explanation:
        "\"Decision\" is the noun form of the verb \"decide.\""
    },
    {
      question: "Which word is a noun formed from the adjective \"strong\"?",
      choices: ["strongly", "strength", "stronger", "strongest"],
      correctIndex: 1,
      explanation:
        "\"Strength\" is the noun form of the adjective \"strong.\""
    },
    {
      question: "Which sentence uses the noun \"news\" correctly?",
      choices: [
        "The news are good.",
        "The news is good.",
        "The news are goods.",
        "The news is goods."
      ],
      correctIndex: 1,
      explanation:
        "\"News\" is an uncountable noun and takes a singular verb: \"news is.\""
    },
    {
      question: "Which sentence uses an uncountable noun correctly?",
      choices: [
        "Please give me three informations.",
        "Please give me some information.",
        "Please give me an information.",
        "Please give me many informations."
      ],
      correctIndex: 1,
      explanation:
        "\"Information\" is uncountable; we use \"some information,\" not \"informations.\""
    },
    {
      question: "Which plural noun is correct?",
      choices: ["buss", "buses", "busses", "bus's"],
      correctIndex: 1,
      explanation:
        "\"Buses\" is the standard plural form of \"bus.\""
    },
    {
      question: "Which plural form is correct for \"hero\"?",
      choices: ["heros", "heroes", "hero's", "heroies"],
      correctIndex: 1,
      explanation:
        "\"Heroes\" is the correct plural of \"hero.\""
    },
    {
      question: "Which plural noun is correct?",
      choices: ["potatos", "potatoes", "potato's", "potatoes'"],
      correctIndex: 1,
      explanation:
        "\"Potatoes\" is the correct plural form of \"potato.\""
    },
    {
      question: "Which sentence uses the noun \"police\" correctly?",
      choices: [
        "The police is coming.",
        "The police are coming.",
        "The polices are coming.",
        "The police's are coming."
      ],
      correctIndex: 1,
      explanation:
        "\"Police\" is a plural noun and usually takes a plural verb: \"police are.\""
    },
    {
      question: "Which noun is abstract?",
      choices: ["desk", "anger", "battery", "phone"],
      correctIndex: 1,
      explanation:
        "\"Anger\" is an abstract noun that names a feeling."
    },
    {
      question: "Which noun is concrete?",
      choices: ["justice", "idea", "keyboard", "honesty"],
      correctIndex: 2,
      explanation:
        "\"Keyboard\" is a concrete noun that you can see and touch."
    },
    {
      question: "Which sentence uses an article correctly with a countable noun?",
      choices: [
        "She gave me advice.",
        "She gave me an advice.",
        "She gave me advices.",
        "She gave me some advices."
      ],
      correctIndex: 0,
      explanation:
        "\"Advice\" is uncountable; the correct simple form here is \"She gave me advice.\""
    },
    {
      question: "Which sentence uses a common noun correctly?",
      choices: [
        "I visited Manila city.",
        "I visited city Manila.",
        "I visited the city of Manila.",
        "I visited the Manila."
      ],
      correctIndex: 2,
      explanation:
        "The phrase \"the city of Manila\" correctly uses the common noun \"city\" and proper noun \"Manila.\""
    },
    {
      question: "Which sentence uses a compound noun?",
      choices: [
        "I sat on the chair.",
        "We visited the shopping mall.",
        "She is a good singer.",
        "They are very happy."
      ],
      correctIndex: 1,
      explanation:
        "\"Shopping mall\" is a compound noun made of two words."
    },
    {
      question: "Which is a compound noun?",
      choices: ["blackboard", "black board", "black and board", "board black"],
      correctIndex: 0,
      explanation:
        "\"Blackboard\" is written as one word and functions as a compound noun."
    },
    {
      question: "In the sentence \"The meeting starts at nine,\" which word is the noun?",
      choices: ["The", "meeting", "starts", "nine"],
      correctIndex: 1,
      explanation:
        "\"Meeting\" is a noun that names an event."
    },
    {
      question: "In the sentence \"We had lunch at noon,\" which word is the noun?",
      choices: ["We", "had", "lunch", "at"],
      correctIndex: 2,
      explanation:
        "\"Lunch\" is the noun; it names a meal."
    },
    {
      question: "Which sentence uses a plural noun correctly?",
      choices: [
        "The informations are updated.",
        "The data is important.",
        "The datas are important.",
        "The furniture are new."
      ],
      correctIndex: 1,
      explanation:
        "\"Data\" is often treated as a singular mass noun in modern usage, especially in general English exams, so \"data is\" is acceptable."
    },
    {
      question: "Which sentence has the noun functioning as an object complement?",
      choices: [
        "They elected him president.",
        "They elected president.",
        "They elected him.",
        "They president him."
      ],
      correctIndex: 0,
      explanation:
        "\"President\" renames the object \"him\" and acts as an object complement."
    },
    {
      question: "Which word in the sentence is a noun? \"Her laughter filled the room.\"",
      choices: ["Her", "laughter", "filled", "the"],
      correctIndex: 1,
      explanation:
        "\"Laughter\" is a noun naming a sound or action."
    },
    {
      question: "Which sentence uses an uncountable noun correctly with \"much\"?",
      choices: [
        "We have much chairs.",
        "We have much furniture.",
        "We have much books.",
        "We have much students."
      ],
      correctIndex: 1,
      explanation:
        "\"Furniture\" is uncountable and correctly used with \"much.\""
    },
    {
      question: "Which sentence uses a countable noun correctly with \"many\"?",
      choices: [
        "We have many water.",
        "We have many equipment.",
        "We have many problems.",
        "We have many rice."
      ],
      correctIndex: 2,
      explanation:
        "\"Problems\" is a countable noun and can be used with \"many.\""
    },
    {
      question: "Which sentence contains a noun clause acting as the object?",
      choices: [
        "What he said surprised me.",
        "I know what he said.",
        "He said something.",
        "They listened carefully."
      ],
      correctIndex: 1,
      explanation:
        "In \"I know what he said,\" the clause \"what he said\" functions as the object of the verb \"know.\""
    },
    {
      question: "Which sentence contains a noun clause acting as the subject?",
      choices: [
        "That she passed the exam is good news.",
        "I know that she passed the exam.",
        "She passed the exam.",
        "They heard the news."
      ],
      correctIndex: 0,
      explanation:
        "The clause \"That she passed the exam\" functions as the subject of the sentence."
    },
    {
      question: "Which noun is a collective noun?",
      choices: ["jury", "book", "pencil", "school"],
      correctIndex: 0,
      explanation:
        "\"Jury\" is a collective noun referring to a group of people."
    }
  ],

  advanced: [
    {
      question: "In the phrase \"the old wooden bridge,\" which word is the head noun?",
      choices: ["the", "old", "wooden", "bridge"],
      correctIndex: 3,
      explanation:
        "\"Bridge\" is the head noun; the other words describe it."
    },
    {
      question: "In the phrase \"these important safety rules,\" which word is the head noun?",
      choices: ["these", "important", "safety", "rules"],
      correctIndex: 3,
      explanation:
        "\"Rules\" is the head noun; \"these, important, safety\" modify it."
    },
    {
      question: "In the sentence \"My friend Ana is a nurse,\" which word is in apposition to \"friend\"?",
      choices: ["My", "friend", "Ana", "nurse"],
      correctIndex: 2,
      explanation:
        "\"Ana\" renames \"friend\" and is an appositive noun."
    },
    {
      question: "In the sentence \"Our president, Mr. Cruz, spoke yesterday,\" which is the appositive noun?",
      choices: ["Our", "president", "Mr. Cruz", "yesterday"],
      correctIndex: 2,
      explanation:
        "\"Mr. Cruz\" is in apposition to \"president,\" giving more information about the same person."
    },
    {
      question: "Which sentence contains a noun clause as the subject?",
      choices: [
        "What he did surprised everyone.",
        "I know what he did.",
        "He did something surprising.",
        "They were surprised."
      ],
      correctIndex: 0,
      explanation:
        "\"What he did\" is a noun clause functioning as the subject of the sentence."
    },
    {
      question: "Which sentence contains a noun clause as the complement?",
      choices: [
        "The fact is that he lied.",
        "They know that he lied.",
        "He lied during the meeting.",
        "We heard that he lied."
      ],
      correctIndex: 0,
      explanation:
        "The clause \"that he lied\" functions as a complement to \"The fact is.\""
    },
    {
      question: "Which of the following is a compound noun?",
      choices: ["running", "swimming pool", "happily", "stronger"],
      correctIndex: 1,
      explanation:
        "\"Swimming pool\" is a compound noun made of two words."
    },
    {
      question: "Which of the following is a compound noun?",
      choices: ["greenhouse", "green house", "house green", "greenly"],
      correctIndex: 0,
      explanation:
        "\"Greenhouse\" is a compound noun meaning a glass building for plants."
    },
    {
      question: "Which sentence correctly uses a collective noun with a plural verb to emphasize individuals?",
      choices: [
        "The team is arguing among themselves.",
        "The team are arguing among themselves.",
        "The team is argues among themselves.",
        "The teams are argues among themselves."
      ],
      correctIndex: 1,
      explanation:
        "When treating the team as individuals, \"team are\" can be used in British-style English to emphasize members acting separately."
    },
    {
      question: "Which sentence correctly uses a collective noun with a singular verb as a single unit?",
      choices: [
        "The committee are ready to submit its report.",
        "The committee is ready to submit its report.",
        "The committees is ready to submit its report.",
        "The committee is ready to submit their report."
      ],
      correctIndex: 1,
      explanation:
        "Here the committee acts as one unit; the singular verb \"is\" is appropriate."
    },
    {
      question: "In the sentence \"Leadership requires patience,\" which word is an abstract noun?",
      choices: ["Leadership", "requires", "patience", "both Leadership and patience"],
      correctIndex: 3,
      explanation:
        "Both \"Leadership\" and \"patience\" name qualities and are abstract nouns."
    },
    {
      question: "In the sentence \"The arrival of the guests caused excitement,\" which word is an abstract noun?",
      choices: ["arrival", "guests", "caused", "excitement"],
      correctIndex: 3,
      explanation:
        "\"Excitement\" is an abstract noun that names a feeling."
    },
    {
      question: "Which sentence correctly uses \"fewer\" with a countable noun?",
      choices: [
        "There is fewer money in my wallet.",
        "There are fewer people in the room today.",
        "We have fewer water now.",
        "She feels fewer stress today."
      ],
      correctIndex: 1,
      explanation:
        "\"People\" is a countable noun and correctly used with \"fewer.\""
    },
    {
      question: "Which sentence correctly uses \"less\" with an uncountable noun?",
      choices: [
        "There are less cars on the road.",
        "There is less traffic today.",
        "We have less students this year.",
        "He owns less houses now."
      ],
      correctIndex: 1,
      explanation:
        "\"Traffic\" is uncountable and correctly used with \"less.\""
    },
    {
      question: "Which noun is a gerund functioning as a subject?",
      choices: [
        "To run every day is healthy.",
        "Running every day is healthy.",
        "He likes to run every day.",
        "He running every day is healthy."
      ],
      correctIndex: 1,
      explanation:
        "\"Running\" is a gerund acting as the subject of the sentence."
    },
    {
      question: "In the sentence \"Her constant complaining annoyed everyone,\" which gerund acts as a noun?",
      choices: ["Her", "constant", "complaining", "everyone"],
      correctIndex: 2,
      explanation:
        "\"Complaining\" is a gerund used as a noun (subject of \"annoyed\")."
    },
    {
      question: "Which sentence uses an appositive correctly with commas?",
      choices: [
        "My brother Mark is a lawyer.",
        "My brother, Mark is a lawyer.",
        "My brother, Mark, is a lawyer.",
        "My brother Mark, is a lawyer."
      ],
      correctIndex: 2,
      explanation:
        "When the appositive is non-essential (only one brother), it is correctly set off by commas: \"My brother, Mark, is a lawyer.\""
    },
    {
      question: "Which sentence contains a noun used as an adjective?",
      choices: [
        "She is a nurse.",
        "He bought a car.",
        "We visited the school library.",
        "The library book is overdue."
      ],
      correctIndex: 3,
      explanation:
        "\"Library\" is a noun used to describe \"book\" and functions as an adjective."
    },
    {
      question: "Which sentence uses a noun as an adjective?",
      choices: [
        "The stone wall is old.",
        "The wall is stone.",
        "The stone is a wall.",
        "The is stone wall."
      ],
      correctIndex: 0,
      explanation:
        "\"Stone\" is a noun used as an adjective to describe the wall."
    },
    {
      question: "Which sentence correctly uses the possessive of \"children\"?",
      choices: [
        "The childrens' books are new.",
        "The children's books are new.",
        "The childrens books are new.",
        "The childrenses books are new."
      ],
      correctIndex: 1,
      explanation:
        "\"Children\" is the plural form of \"child\"; its possessive is \"children's.\""
    },
    {
      question: "Which sentence correctly uses the possessive of \"boss\"?",
      choices: [
        "My boss' car is red.",
        "My boss's car is red.",
        "My bosss car is red.",
        "My boss car is red."
      ],
      correctIndex: 1,
      explanation:
        "In standard modern English, \"boss's\" is accepted as the possessive form of \"boss.\""
    },
    {
      question: "Which is the correct plural form of \"criterion\"?",
      choices: ["criterions", "criteria", "criterion", "criterias"],
      correctIndex: 1,
      explanation:
        "\"Criteria\" is the correct plural of \"criterion.\""
    },
    {
      question: "Which is the correct plural form of \"analysis\"?",
      choices: ["analysis", "analysises", "analyses", "analysises'"],
      correctIndex: 2,
      explanation:
        "\"Analyses\" is the correct plural of \"analysis.\""
    },
    {
      question: "Which sentence uses the word \"research\" correctly as an uncountable noun?",
      choices: [
        "He did many researches on the topic.",
        "He did much research on the topic.",
        "He did three researches on the topic.",
        "He did some researches on the topic."
      ],
      correctIndex: 1,
      explanation:
        "\"Research\" is usually uncountable; we say \"much research,\" not \"many researches.\""
    },
    {
      question: "Which sentence uses \"evidence\" correctly?",
      choices: [
        "There are many evidences against him.",
        "There is much evidence against him.",
        "There is an evidence against him.",
        "We have few evidences against him."
      ],
      correctIndex: 1,
      explanation:
        "\"Evidence\" is normally uncountable and is used with \"much.\""
    },
    {
      question: "In the sentence \"The city's pollution is getting worse,\" which word is the head noun of the noun phrase \"The city's pollution\"?",
      choices: ["The", "city's", "pollution", "is"],
      correctIndex: 2,
      explanation:
        "\"Pollution\" is the head noun; \"The city's\" functions as a determiner/possessive modifier."
    },
    {
      question: "Which sentence uses an appositive correctly without commas because it is essential?",
      choices: [
        "My sister, Maria, lives in Cebu.",
        "My sister Maria lives in Cebu.",
        "My sister, Maria lives in Cebu.",
        "My sister Maria, lives in Cebu."
      ],
      correctIndex: 1,
      explanation:
        "If the speaker has more than one sister, \"Maria\" is essential to identify which sister and should not be set off by commas."
    },
    {
      question: "Which sentence contains a noun phrase acting as the object of a preposition?",
      choices: [
        "They discussed the new company policy.",
        "They met before the start of the meeting.",
        "They will arrive soon.",
        "They praised him highly."
      ],
      correctIndex: 1,
      explanation:
        "\"The start of the meeting\" is a noun phrase functioning as the object of the preposition \"before.\""
    },
    {
      question: "Which noun is a collective noun?",
      choices: ["team", "computer", "idea", "office"],
      correctIndex: 0,
      explanation:
        "\"Team\" refers to a group of people; it is a collective noun."
    },
    {
      question: "Which sentence correctly uses the plural noun \"data\" in a more formal style?",
      choices: [
        "The data is unclear.",
        "The data are unclear.",
        "The datas are unclear.",
        "The data's are unclear."
      ],
      correctIndex: 1,
      explanation:
        "In formal style, \"data\" is treated as plural, so \"data are\" is correct."
    },
    {
      question: "Which sentence correctly uses the noun \"statistics\" in a singular sense?",
      choices: [
        "Statistics is a difficult subject.",
        "Statistics are a difficult subject.",
        "Statistic is a difficult subject.",
        "The statistics is a difficult subject."
      ],
      correctIndex: 0,
      explanation:
        "When referring to the academic field, \"Statistics\" is treated as a singular noun and takes \"is.\""
    },
    {
      question: "Which sentence uses \"means\" as a singular noun correctly?",
      choices: [
        "This means is not effective.",
        "This mean is not effective.",
        "This means are not effective.",
        "These means is not effective."
      ],
      correctIndex: 0,
      explanation:
        "\"Means\" can be singular or plural; here it is used as a singular noun with \"This.\""
    },
    {
      question: "Which sentence uses \"series\" correctly as a singular noun?",
      choices: [
        "This series is very interesting.",
        "This series are very interesting.",
        "These series is very interesting.",
        "These series are very interesting."
      ],
      correctIndex: 0,
      explanation:
        "\"Series\" has the same form in singular and plural; here the singular \"This series is\" is correct."
    },
    {
      question: "Which sentence uses the possessive of a plural noun correctly?",
      choices: [
        "The students book are missing.",
        "The student's books are missing.",
        "The students' books are missing.",
        "The students books' are missing."
      ],
      correctIndex: 2,
      explanation:
        "\"Students'\" is the correct possessive form when referring to books belonging to more than one student."
    },
    {
      question: "Which is the correct plural form of \"syllabus\"?",
      choices: ["syllabuses", "syllabi", "syllabuss", "syllabas"],
      correctIndex: 1,
      explanation:
        "\"Syllabi\" is the traditional plural of \"syllabus\"; \"syllabuses\" is also accepted, but many exams prefer \"syllabi.\""
    },
    {
      question: "Which sentence uses a noun phrase as an object complement?",
      choices: [
        "They painted the wall blue.",
        "They elected her class president.",
        "They showed us the report.",
        "They opened the door slowly."
      ],
      correctIndex: 1,
      explanation:
        "\"Class president\" is a noun phrase used as an object complement renaming \"her.\""
    },
    {
      question: "Which sentence contains a noun clause as the object of a preposition?",
      choices: [
        "I am interested in what he said.",
        "I know what he said.",
        "What he said was surprising.",
        "He said something surprising."
      ],
      correctIndex: 0,
      explanation:
        "\"What he said\" is a noun clause that serves as the object of the preposition \"in.\""
    },
    {
      question: "Which sentence uses \"time\" as an abstract noun?",
      choices: [
        "We have little time left.",
        "The time on the clock is wrong.",
        "He beat his best time.",
        "We had a good time at the party."
      ],
      correctIndex: 0,
      explanation:
        "In \"We have little time left,\" \"time\" is used abstractly as a general concept or amount."
    },
    {
      question: "Which sentence uses \"light\" as a concrete noun?",
      choices: [
        "We need more light in this room.",
        "She saw the light and changed her ways.",
        "Light travels faster than sound.",
        "He finally saw the light about his mistake."
      ],
      correctIndex: 0,
      explanation:
        "Here \"light\" refers to actual illumination in the room, a physical phenomenon perceived by sight."
    },
    {
      question: "Which noun is used as a verb in this sentence: \"They will house the refugees\"?",
      choices: ["They", "will", "house", "refugees"],
      correctIndex: 2,
      explanation:
        "\"House\" is normally a noun, but here it is used as a verb meaning \"to provide housing.\""
    },
    {
      question: "Which noun is used as an adjective in this sentence: \"He is a college student\"?",
      choices: ["He", "college", "student", "is"],
      correctIndex: 1,
      explanation:
        "\"College\" is a noun used as an adjective to describe the kind of student."
    }
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
        "Here the committee is treated as a single unit, so the singular verb \"has\" and possessive \"its\" are preferred."
    },
    {
      question: "Choose the sentence with correct noun and article usage:",
      choices: [
        "She gave me an important information.",
        "She gave me many informations.",
        "She gave me a piece of important information.",
        "She gave me few information."
      ],
      correctIndex: 2,
      explanation:
        "\"Information\" is uncountable. We say \"a piece of information\" to count it in units."
    },
    {
      question: "Identify the error in this sentence: \"The childrens' toys were scattered everywhere.\"",
      choices: [
        "The",
        "childrens'",
        "toys",
        "were"
      ],
      correctIndex: 1,
      explanation:
        "\"Children\" is already plural; its possessive form is \"children's,\" not \"childrens'.\""
    },
    {
      question: "Choose the best revision: \"Each of the students must submit their assignment on time.\"",
      choices: [
        "Each of the students must submit his assignment on time.",
        "Each of the student must submit their assignment on time.",
        "Each of the students must submit his or her assignment on time.",
        "Each of the students must submit assignment on time."
      ],
      correctIndex: 2,
      explanation:
        "\"Each\" is singular, so it pairs with \"his or her\" in formal exams. Option 3 keeps agreement and clarity."
    },
    {
      question: "Choose the sentence with correct plural noun usage:",
      choices: [
        "The phenomenon are difficult to explain.",
        "The phenomena is difficult to explain.",
        "The phenomena are difficult to explain.",
        "The phenomenons are difficult to explain."
      ],
      correctIndex: 2,
      explanation:
        "\"Phenomena\" is the plural of \"phenomenon\" and takes a plural verb: \"phenomena are.\""
    },
    {
      question: "Identify the error: \"These datas are not reliable.\"",
      choices: ["These", "datas", "are", "not"],
      correctIndex: 1,
      explanation:
        "\"Data\" is already plural (in formal style) and does not take an extra \"s.\" The correct phrase is \"These data are.\""
    },
    {
      question: "Choose the sentence with correct noun form:",
      choices: [
        "We need to make an improvement on our services.",
        "We need to make improvements on our services.",
        "We need to make an improvements on our services.",
        "We need to make improvement on our services."
      ],
      correctIndex: 1,
      explanation:
        "Because \"improvements\" are countable here and more than one is implied, the correct form is \"make improvements.\""
    },
    {
      question: "Choose the sentence with correct collective noun usage:",
      choices: [
        "The jury was divided in their opinions.",
        "The jury were divided in its opinions.",
        "The jury were divided in their opinions.",
        "The jury was divided in its opinions."
      ],
      correctIndex: 3,
      explanation:
        "Here the jury is treated as a single unit; \"was\" and \"its\" keep consistent singular agreement."
    },
    {
      question: "Choose the sentence with correct noun phrase:",
      choices: [
        "Our manager, a strict person, he is here.",
        "Our manager, a strict person, is here.",
        "Our manager a strict person, is here.",
        "Our manager, a strict person is here."
      ],
      correctIndex: 1,
      explanation:
        "The appositive \"a strict person\" is correctly set off by commas, and there is no extra subject pronoun."
    },
    {
      question: "Identify the correctly written sentence:",
      choices: [
        "The teachers' meeting is scheduled tomorrow morning.",
        "The teacher's meeting are scheduled tomorrow morning.",
        "The teachers meeting is scheduled tomorrow morning.",
        "The teacher meeting are scheduled tomorrow morning."
      ],
      correctIndex: 0,
      explanation:
        "\"Teachers' meeting\" indicates a meeting of the teachers and uses the correct plural possessive plus singular verb \"is.\""
    },
    {
      question: "Choose the best sentence:",
      choices: [
        "The researchs show a clear trend.",
        "The researches show a clear trend.",
        "Researches show a clear trend.",
        "The research shows a clear trend."
      ],
      correctIndex: 3,
      explanation:
        "\"Research\" is uncountable in this context; \"The research shows\" is the correct form."
    },
    {
      question: "Which sentence is most correct for formal English?",
      choices: [
        "Less employees came to work today.",
        "Fewer employees came to work today.",
        "Less employee came to work today.",
        "Fewer employee came to work today."
      ],
      correctIndex: 1,
      explanation:
        "\"Employees\" is countable; we use \"fewer\" with countable nouns."
    },
    {
      question: "Choose the sentence with correct noun usage:",
      choices: [
        "She gave me many advices about my career.",
        "She gave me good advice about my career.",
        "She gave me an advice about my career.",
        "She gave me some advices about my career."
      ],
      correctIndex: 1,
      explanation:
        "\"Advice\" is uncountable; the correct phrase is \"gave me good advice.\""
    },
    {
      question: "Identify the error: \"The equipments in this office are modern.\"",
      choices: ["The", "equipments", "in", "this"],
      correctIndex: 1,
      explanation:
        "\"Equipment\" is uncountable and should not have an \"s.\" The correct form is \"The equipment in this office is modern.\""
    },
    {
      question: "Choose the correctly punctuated appositive:",
      choices: [
        "My friend Lisa, is a doctor.",
        "My friend, Lisa is a doctor.",
        "My friend, Lisa, is a doctor.",
        "My friend Lisa is, a doctor."
      ],
      correctIndex: 2,
      explanation:
        "For one specific friend, \"Lisa\" is non-essential and should be set off by commas: \"My friend, Lisa, is a doctor.\""
    },
    {
      question: "Choose the sentence with correct possessive form:",
      choices: [
        "That is my parents' house.",
        "That is my parent's house, they live there.",
        "That is my parents house.",
        "That is my parent house."
      ],
      correctIndex: 0,
      explanation:
        "\"Parents'\" shows the house belongs to both parents; this is the correct plural possessive form."
    },
    {
      question: "Choose the sentence with correct plural noun:",
      choices: [
        "She has two childs.",
        "She has two children.",
        "She has two childrens.",
        "She has two childes."
      ],
      correctIndex: 1,
      explanation:
        "\"Children\" is the correct plural of \"child.\""
    },
    {
      question: "Choose the sentence with correct plural noun:",
      choices: [
        "His knowledges are impressive.",
        "His knowledge is impressive.",
        "His knowledge are impressive.",
        "His knowledges is impressive."
      ],
      correctIndex: 1,
      explanation:
        "\"Knowledge\" is uncountable in this context; it takes a singular verb and no plural \"s.\""
    },
    {
      question: "Identify the error: \"The staffs are very friendly.\"",
      choices: ["The", "staffs", "are", "very"],
      correctIndex: 1,
      explanation:
        "\"Staff\" is usually treated as a collective noun taking a singular form. The more common phrasing is \"The staff are\" (plural sense) or \"The staff is\" depending on style, but \"staffs\" is rarely used and usually incorrect in this context."
    },
    {
      question: "Choose the sentence with correct uncountable noun usage:",
      choices: [
        "We need some furnitures for the new office.",
        "We need many furnitures for the new office.",
        "We need some furniture for the new office.",
        "We need a furniture for the new office."
      ],
      correctIndex: 2,
      explanation:
        "\"Furniture\" is uncountable; \"some furniture\" is the correct phrase."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The informations provided were useful.",
        "The pieces of information provided were useful.",
        "The information provided were useful.",
        "The information provided was usefuls."
      ],
      correctIndex: 1,
      explanation:
        "To make \"information\" countable, we say \"pieces of information.\""
    },
    {
      question: "Choose the sentence with correct subject–verb agreement and noun usage:",
      choices: [
        "The statistics shows an increase.",
        "The statistics show an increase.",
        "The statistic show an increase.",
        "The statistic shows an increases."
      ],
      correctIndex: 2,
      explanation:
        "\"Statistic\" (singular) with \"shows\" is correct if referring to one number or figure. However, many exams may also accept \"statistics show\" when plural; here the clearly correct option is singular \"statistic shows an increase.\""
    },
    {
      question: "Choose the sentence with correct noun form:",
      choices: [
        "She has many works to finish.",
        "She has many pieces of work to finish.",
        "She has much works to finish.",
        "She has a lot of works to finish."
      ],
      correctIndex: 1,
      explanation:
        "\"Work\" is generally uncountable; to show separate tasks we say \"pieces of work.\""
    },
    {
      question: "Choose the sentence with correct noun phrase:",
      choices: [
        "The report detailed and accurate impressed the manager.",
        "The detailed accurate report impressed the manager.",
        "The detailed and accurate report impressed the manager.",
        "The report detailed accurate impressed the manager."
      ],
      correctIndex: 2,
      explanation:
        "\"The detailed and accurate report\" is a well-formed noun phrase with two adjectives modifying \"report.\""
    },
    {
      question: "Identify the best revision: \"Most of the informations in this document is outdated.\"",
      choices: [
        "Most of the information in this document is outdated.",
        "Most of the information in this document are outdated.",
        "Most of the informations in this document are outdated.",
        "Most of the information in this document are outdate."
      ],
      correctIndex: 0,
      explanation:
        "\"Information\" is uncountable and takes a singular verb: \"Most of the information is outdated.\""
    },
    {
      question: "Choose the sentence with correct possessive noun:",
      choices: [
        "I borrowed my friend, Ana's, book.",
        "I borrowed my friend's Ana book.",
        "I borrowed Ana friend's book.",
        "I borrowed my friend Ana book."
      ],
      correctIndex: 0,
      explanation:
        "\"My friend, Ana's, book\" clearly shows that the book belongs to Ana, who is your friend; the possessive is correctly placed."
    },
    {
      question: "Choose the sentence with correct article and noun usage:",
      choices: [
        "He is a honest man.",
        "He is an honest man.",
        "He is honest man.",
        "He is an honest man person."
      ],
      correctIndex: 1,
      explanation:
        "\"Honest\" begins with a vowel sound, so the correct article is \"an honest man.\""
    },
    {
      question: "Identify the correct sentence:",
      choices: [
        "All equipments are checked regularly.",
        "All equipment is checked regularly.",
        "All equipment are checked regularly.",
        "All the equipments is checked regularly."
      ],
      correctIndex: 1,
      explanation:
        "\"Equipment\" is uncountable; \"All equipment is checked regularly\" is the standard form."
    },
    {
      question: "Choose the sentence with correct countable/uncountable noun usage:",
      choices: [
        "We have much chairs in the room.",
        "We have many chairs in the room.",
        "We have few furnitures in the room.",
        "We have several furnitures in the room."
      ],
      correctIndex: 1,
      explanation:
        "\"Chairs\" is countable and correctly used with \"many.\""
    },
    {
      question: "Choose the best sentence:",
      choices: [
        "Less people attended the seminar this year.",
        "Fewer people attended the seminar this year.",
        "Less person attended the seminar this year.",
        "Few people attended less seminar this year."
      ],
      correctIndex: 1,
      explanation:
        "\"People\" is countable; we use \"fewer\" with countable nouns in formal exams."
    },
    {
      question: "Choose the sentence with correct noun clause usage:",
      choices: [
        "He is aware of that he arrived late.",
        "He is aware that he arrived late.",
        "He is aware on that he arrived late.",
        "He is aware which he arrived late."
      ],
      correctIndex: 1,
      explanation:
        "\"That he arrived late\" is a noun clause correctly used after \"aware.\""
    },
    {
      question: "Choose the sentence with correct use of a noun phrase as subject:",
      choices: [
        "To solve this problem, is our goal.",
        "Solving this problem is our goal.",
        "Solving this problem our goal is.",
        "To solve this problem our goal is."
      ],
      correctIndex: 1,
      explanation:
        "\"Solving this problem\" is a gerund phrase functioning as the subject of the sentence."
    },
    {
      question: "Identify the correctly used noun in the sentence:",
      choices: [
        "He gave me many good advices.",
        "He gave me some good advice.",
        "He gave me some good advises.",
        "He gave me some goods advice."
      ],
      correctIndex: 1,
      explanation:
        "\"Advice\" is uncountable; \"some good advice\" is the correct form."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The datas was analysed carefully.",
        "The data were analysed carefully.",
        "The data was analysed carefullys.",
        "The data were analyse carefully."
      ],
      correctIndex: 1,
      explanation:
        "In a more formal style, \"data\" is treated as plural, so \"data were analysed\" is correct."
    },
    {
      question: "Choose the sentence with correct plural:",
      choices: [
        "The alumnis attended the reunion.",
        "The alumni attended the reunion.",
        "The alumnies attended the reunion.",
        "The alumnus attended the reunion in plural."
      ],
      correctIndex: 1,
      explanation:
        "\"Alumni\" is the plural form referring to former students."
    },
    {
      question: "Which sentence uses \"means\" correctly as a plural noun?",
      choices: [
        "These means is not effective.",
        "These means are not effective.",
        "This means are not effective.",
        "This means are effective."
      ],
      correctIndex: 1,
      explanation:
        "\"Means\" can be plural; with \"These\" it takes the plural verb \"are.\""
    },
    {
      question: "Choose the sentence with correct collective noun usage:",
      choices: [
        "The staff is planning their annual outing.",
        "The staff are planning its annual outing.",
        "The staff are planning their annual outing.",
        "The staffs are planning their annual outing."
      ],
      correctIndex: 2,
      explanation:
        "Here \"staff\" is viewed as people acting individually, so \"are\" and \"their\" are consistent plural forms."
    },
    {
      question: "Choose the sentence with correct article usage before an abstract noun:",
      choices: [
        "Honesty is the best policy.",
        "The honesty is the best policy.",
        "An honesty is the best policy.",
        "A honesty is the best policy."
      ],
      correctIndex: 0,
      explanation:
        "Abstract nouns such as \"Honesty\" can be used without an article when speaking generally."
    },
    {
      question: "Identify the correct possessive form:",
      choices: [
        "my brother-in-law's car",
        "my brothers-in-law's car",
        "my brother-in-laws' car",
        "my brother-in-law car"
      ],
      correctIndex: 0,
      explanation:
        "For a single brother-in-law, the possessive is formed by adding 's to the whole compound: \"brother-in-law's.\""
    },
    {
      question: "Choose the best sentence:",
      choices: [
        "His behavior shows a lack of maturities.",
        "His behaviors show a lack of maturity.",
        "His behavior shows a lack of maturity.",
        "His behavior show a lack of maturity."
      ],
      correctIndex: 2,
      explanation:
        "\"Behavior\" and \"maturity\" are uncountable in this context; \"behavior shows\" is correct subject–verb agreement."
    },
    {
      question: "Choose the sentence with correct noun clause:",
      choices: [
        "What he explained were very clear.",
        "What he explained was very clear.",
        "What he explained very clear.",
        "What he explained is very clearly."
      ],
      correctIndex: 1,
      explanation:
        "\"What he explained\" is a singular noun clause acting as the subject; it takes \"was.\""
    },
    {
      question: "Choose the sentence with correct plural noun and verb:",
      choices: [
        "The criteria is difficult to meet.",
        "The criteria are difficult to meet.",
        "The criterion are difficult to meet.",
        "The criterias are difficult to meet."
      ],
      correctIndex: 1,
      explanation:
        "\"Criteria\" is plural and should take the plural verb \"are.\""
    }
  ]
};
