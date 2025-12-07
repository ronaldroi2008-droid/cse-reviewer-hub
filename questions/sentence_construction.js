// questions/sentence_construction.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data - USE UNDERSCORE TO MATCH FILENAME
window.VERBAL_QUESTION_BANK["sentence_construction"] = {
  beginner: [
    // 1-10: Basic Word Order (S-V-O Rule)
    {
      question: "Choose the correct sentence structure:",
      options: ["The cat sat on the mat.", "Sat the cat on the mat.", "On the mat sat cat the.", "The cat on the mat sat."],
      answer: "The cat sat on the mat.",
      explanation: "Rule: English follows the S-V-O (Subject-Verb-Object) word order. Subject (The cat) + Verb (sat) + Prepositional Phrase (on the mat)."
    },
    {
      question: "Which sentence is correct?",
      options: ["She eats usually breakfast.", "She usually eats breakfast.", "Usually she breakfast eats.", "She eats breakfast usually."],
      answer: "She usually eats breakfast.",
      explanation: "Rule: Adverb Placement. Adverbs of frequency (like 'usually', 'always', 'never') go BEFORE the main verb."
    },
    {
      question: "Arrange the words: (is / name / My / John).",
      options: ["My name is John.", "Name my is John.", "Is John name my.", "John is name my."],
      answer: "My name is John.",
      explanation: "Rule: Simple Sentence Structure. Possessive Adjective (My) + Subject (name) + Verb (is) + Complement (John)."
    },
    {
      question: "Which is correct?",
      options: ["I like very much apples.", "I very like apples.", "I like apples very much.", "I apples like very much."],
      answer: "I like apples very much.",
      explanation: "Rule: Adverbial phrases like 'very much' normally go at the end of the sentence, after the object. 'I like apples very much.' is the natural order."
    },
    {
      question: "Choose the correct question format:",
      options: ["Where you live?", "Where do you live?", "Where live you?", "Where you do live?"],
      answer: "Where do you live?",
      explanation: "Rule: Wh-Questions. Structure: Wh-Word (Where) + Auxiliary (do) + Subject (you) + Main Verb (live)."
    },
    {
      question: "Which sentence is correct?",
      options: ["He plays tennis every Sunday.", "He plays every Sunday tennis.", "Every Sunday tennis he plays.", "He tennis plays every Sunday."],
      answer: "He plays tennis every Sunday.",
      explanation: "Rule: Time Expressions. Phrases indicating time (like 'every Sunday') usually go at the very end of the sentence."
    },
    {
      question: "Arrange: (beautiful / has / She / eyes).",
      options: ["She has eyes beautiful.", "She has beautiful eyes.", "Has she beautiful eyes.", "Beautiful eyes she has."],
      answer: "She has beautiful eyes.",
      explanation: "Rule: Adjective Position. Adjectives (beautiful) must appear BEFORE the noun they describe (eyes)."
    },
    {
      question: "Which is correct?",
      options: ["I am reading a book now.", "I am a book reading now.", "Now a book I am reading.", "I reading a book am now."],
      answer: "I am reading a book now.",
      explanation: "Rule: Present Continuous Tense. Subject (I) + Auxiliary (am) + Verb-ing (reading) + Object (a book) + Time (now)."
    },
    {
      question: "Choose the correct negative sentence:",
      options: ["I no like pizza.", "I don't like pizza.", "I not like pizza.", "I like not pizza."],
      answer: "I don't like pizza.",
      explanation: "Rule: Simple Present Negation. We must use the auxiliary 'do' + 'not' (don't) before the main verb 'like'."
    },
    {
      question: "Arrange: (friends / best / We / are).",
      options: ["We best friends are.", "We are friends best.", "We are best friends.", "Friends best are we."],
      answer: "We are best friends.",
      explanation: "Rule: Sentence Structure. Subject (We) + Verb (are) + Adjective (best) + Noun (friends)."
    },

    // 11-20: Adjective Order (OSASCOMP Rule)
    {
      question: "Which is the correct order?",
      options: ["A red big car", "A car big red", "A big red car", "Red a big car"],
      answer: "A big red car",
      explanation: "Rule: Adjective Order. Size ('big') comes before Color ('red')."
    },
    {
      question: "Choose the correct sentence:",
      options: ["He bought a new nice house.", "He bought a nice new house.", "He bought house nice new.", "He bought a nice house new."],
      answer: "He bought a nice new house.",
      explanation: "Rule: Adjective Order. Opinion ('nice') comes before Age ('new')."
    },
    {
      question: "Arrange: (table / wooden / old / an).",
      options: ["An old wooden table.", "A wooden old table.", "An wooden old table.", "A table old wooden."],
      answer: "An old wooden table.",
      explanation: "Rule: Adjective Order. Age ('old') comes before Material ('wooden'). Note: Use 'An' because 'old' starts with a vowel."
    },
    {
      question: "Which is correct?",
      options: ["She is a smart young lady.", "She is a young smart lady.", "She is a lady smart young.", "She is smart young a lady."],
      answer: "She is a smart young lady.",
      explanation: "Rule: Adjective Order. Opinion ('smart') comes before Age ('young')."
    },
    {
      question: "Choose the correct phrase:",
      options: ["Italian delicious pizza", "Delicious Italian pizza", "Pizza delicious Italian", "Italian pizza delicious"],
      answer: "Delicious Italian pizza",
      explanation: "Rule: Adjective Order. Opinion ('delicious') comes before Origin ('Italian')."
    },
    {
      question: "Arrange: (long / hair / black).",
      options: ["Black long hair", "Long black hair", "Hair long black", "Long hair black"],
      answer: "Long black hair",
      explanation: "Rule: Adjective Order. Size/Length ('long') comes before Color ('black')."
    },
    {
      question: "Which is correct?",
      options: ["Three small puppies", "Small three puppies", "Puppies three small", "Small puppies three"],
      answer: "Three small puppies",
      explanation: "Rule: Determiners. Quantities/Numbers ('three') always come before descriptive adjectives ('small')."
    },
    {
      question: "Choose the correct sentence:",
      options: ["It is a rainy dark day.", "It is a dark rainy day.", "It is a day dark rainy.", "It is dark rainy a day."],
      answer: "It is a dark rainy day.",
      explanation: "Rule: Adjective Order. General quality ('dark') typically precedes specific type ('rainy')."
    },
    {
      question: "Arrange: (box / square / small).",
      options: ["Small square box", "Square small box", "Box small square", "Small box square"],
      answer: "Small square box",
      explanation: "Rule: Adjective Order. Size ('small') comes before Shape ('square')."
    },
    {
      question: "Which is correct?",
      options: ["A plastic blue spoon", "A blue plastic spoon", "A spoon blue plastic", "A plastic spoon blue"],
      answer: "A blue plastic spoon",
      explanation: "Rule: Adjective Order. Color ('blue') comes before Material ('plastic')."
    },

    // 21-30: Simple Conjunctions (And, But, Or, So)
    {
      question: "Combine: 'I was tired.' 'I went to sleep.'",
      options: ["I was tired because I went to sleep.", "I was tired so I went to sleep.", "I was tired but I went to sleep.", "I was tired or I went to sleep."],
      answer: "I was tired so I went to sleep.",
      explanation: "Rule: Result Conjunctions. Use 'so' to show the result or consequence of the first clause."
    },
    {
      question: "Combine: 'He is rich.' 'He is unhappy.'",
      options: ["He is rich and unhappy.", "He is rich so unhappy.", "He is rich but unhappy.", "He is rich because unhappy."],
      answer: "He is rich but unhappy.",
      explanation: "Rule: Contrast Conjunctions. Use 'but' to join two contrasting or opposite ideas."
    },
    {
      question: "Choose the correct sentence:",
      options: ["Because it was raining, we stayed home.", "Because it was raining, so we stayed home.", "It was raining, because we stayed home.", "We stayed home so it was raining."],
      answer: "Because it was raining, we stayed home.",
      explanation: "Rule: Redundancy. If you start a sentence with 'Because', do NOT use 'so' in the second part."
    },
    {
      question: "Which sentence correctly joins two independent clauses with a comma and 'and'?",
      options: ["I like coffee and I like tea.", "I like coffee, and I like tea.", "I like coffee I like tea.", "I like coffee or I like tea."],
      answer: "I like coffee, and I like tea.",
      explanation: "Both 1 and 2 are grammatically acceptable, but in exams we usually show a clear compound sentence with a comma before 'and' when joining two independent clauses. That is why option 2 is the best choice."
    },
    {
      question: "Combine: 'Do you want tea?' 'Do you want coffee?'",
      options: ["Do you want tea and coffee?", "Do you want tea or coffee?", "Do you want tea but coffee?", "Do you want tea so coffee?"],
      answer: "Do you want tea or coffee?",
      explanation: "Rule: Choice Conjunctions. Use 'or' when presenting alternatives or choices."
    },
    {
      question: "Which sentence makes sense?",
      options: ["I studied hard, yet I failed.", "I studied hard, or I failed.", "I studied hard, so I failed.", "I studied hard, because I failed."],
      answer: "I studied hard, yet I failed.",
      explanation: "Rule: Contrast Conjunctions. 'Yet' functions like 'but', introducing an unexpected outcome."
    },
    {
      question: "Combine: 'She was sick.' 'She went to the doctor.'",
      options: ["She was sick, for she went to the doctor.", "She went to the doctor because she was sick.", "She was sick because she went to the doctor.", "She went to the doctor but she was sick."],
      answer: "She went to the doctor because she was sick.",
      explanation: "Rule: Reason Conjunctions. Use 'because' to introduce the reason for an action."
    },
    {
      question: "Which is correct?",
      options: ["I cannot go I have no money.", "I cannot go; I have no money.", "I cannot go, I have no money.", "I cannot go but I have no money."],
      answer: "I cannot go; I have no money.",
      explanation: "Rule: Semicolons. You can use a semicolon (;) to connect two related independent clauses without a conjunction. Using just a comma is a 'Comma Splice' error."
    },
    {
      question: "Choose the correct structure:",
      options: ["Although it was cold, but we went out.", "Although it was cold, we went out.", "It was cold, although we went out.", "Although it was cold, and we went out."],
      answer: "Although it was cold, we went out.",
      explanation: "Rule: Subordinating Conjunctions. Do not use 'but' in the same sentence as 'although'. Use a comma to separate the clauses."
    },
    {
      question: "Which is correct?",
      options: ["He is neither tall nor short.", "He is neither tall or short.", "He is neither tall and short.", "He is either tall nor short."],
      answer: "He is neither tall nor short.",
      explanation: "Rule: Correlative Conjunctions. The pair is always 'Neither... nor'."
    },

    // 31-40: Questions and Auxiliaries
    {
      question: "Form a question: (you / happy / Are)?",
      options: ["Are you happy?", "You are happy?", "Do you happy?", "Happy are you?"],
      answer: "Are you happy?",
      explanation: "Rule: Question Inversion (To Be). With the verb 'be', swap the Subject and Verb. (You are -> Are you)."
    },
    {
      question: "Form a question: (She / live / where / does)?",
      options: ["Where she does live?", "Where does she live?", "Does where she live?", "She lives where?"],
      answer: "Where does she live?",
      explanation: "Rule: Wh-Questions. Order: Wh-Word + Auxiliary (does) + Subject (she) + Main Verb (live)."
    },
    {
      question: "Which is the correct question tag? 'You are a student, ___?'",
      options: ["aren't you", "are you", "don't you", "do you"],
      answer: "aren't you",
      explanation: "Rule: Question Tags. A positive statement requires a negative tag (aren't you)."
    },
    {
      question: "Which is correct?",
      options: ["Did you went to school?", "Did you go to school?", "Do you went to school?", "Did you going to school?"],
      answer: "Did you go to school?",
      explanation: "Rule: Past Simple Questions. After the auxiliary 'Did', the main verb must be in the BASE form (go), not past tense (went)."
    },
    {
      question: "How do you ask about quantity?",
      options: ["How much apples do you have?", "How many apples do you have?", "How many apples you have?", "How much apples have you?"],
      answer: "How many apples do you have?",
      explanation: "Rule: Countable Nouns. 'Apples' are countable, so use 'How many'. Also, include the auxiliary 'do'."
    },
    {
      question: "Form a question: (Who / the / door / opened)?",
      options: ["Who opened the door?", "Who did open the door?", "Who the door opened?", "Did who open the door?"],
      answer: "Who opened the door?",
      explanation: "Rule: Subject Questions. When 'Who' is the subject of the question, do NOT use 'did'. Just use the past verb."
    },
    {
      question: "Which question is correct?",
      options: ["What time the train leaves?", "What time does the train leave?", "What time leaves the train?", "What time does the train leaves?"],
      answer: "What time does the train leave?",
      explanation: "Rule: Wh-Questions. Wh-Phrase + Auxiliary (does) + Subject + Base Verb."
    },
    {
      question: "Correct question for: 'He can swim.'",
      options: ["Does he can swim?", "Can he swim?", "Can he swims?", "Do he can swim?"],
      answer: "Can he swim?",
      explanation: "Rule: Modal Verbs. In questions, move the modal (Can) to the front. Do not use 'do/does'."
    },
    {
      question: "Which is correct?",
      options: ["Why you are crying?", "Why are you crying?", "Why crying you are?", "Why do you crying?"],
      answer: "Why are you crying?",
      explanation: "Rule: Present Continuous Questions. Invert the auxiliary 'are' and the subject 'you'."
    },
    {
      question: "Form a question: (movie / was / How / the)?",
      options: ["How was the movie?", "How the movie was?", "Was how the movie?", "The movie was how?"],
      answer: "How was the movie?",
      explanation: "Rule: How Questions. Order: How + Verb (was) + Subject (the movie)."
    },

    // 41-50: Prepositions of Time and Place
    {
      question: "He was born ___ 1990.",
      options: ["at", "on", "in", "to"],
      answer: "in",
      explanation: "Rule: Prepositions of Time. Use 'in' for years, months, and centuries."
    },
    {
      question: "See you ___ Monday.",
      options: ["in", "at", "on", "by"],
      answer: "on",
      explanation: "Rule: Prepositions of Time. Use 'on' for specific days and dates."
    },
    {
      question: "The meeting is ___ 5:00 PM.",
      options: ["on", "in", "at", "to"],
      answer: "at",
      explanation: "Rule: Prepositions of Time. Use 'at' for specific clock times."
    },
    {
      question: "The cat is ___ the table.",
      options: ["under", "in", "at", "into"],
      answer: "under",
      explanation: "Rule: Prepositions of Place. 'Under' describes position vertically below something."
    },
    {
      question: "He walked ___ the room.",
      options: ["in", "into", "at", "on"],
      answer: "into",
      explanation: "Rule: Prepositions of Movement. Use 'into' to show movement from outside to inside."
    },
    {
      question: "I live ___ New York.",
      options: ["at", "on", "in", "to"],
      answer: "in",
      explanation: "Rule: Prepositions of Place. Use 'in' for cities, countries, and large areas."
    },
    {
      question: "My birthday is ___ July.",
      options: ["on", "at", "in", "of"],
      answer: "in",
      explanation: "Rule: Prepositions of Time. Use 'in' for months."
    },
    {
      question: "My birthday is ___ July 1st.",
      options: ["in", "on", "at", "of"],
      answer: "on",
      explanation: "Rule: Prepositions of Time. Use 'on' when the specific date (day + month) is given."
    },
    {
      question: "She is sitting ___ the bus.",
      options: ["on", "in", "at", "to"],
      answer: "on",
      explanation: "Rule: Transport Prepositions. Use 'on' for large public transport vehicles where you can walk (bus, train, plane)."
    },
    {
      question: "He is waiting ___ the bus stop.",
      options: ["in", "on", "at", "to"],
      answer: "at",
      explanation: "Rule: Prepositions of Place. Use 'at' for a specific point or location."
    }
  ],

  intermediate: [
    // 51-60: Relative Clauses (Who, Which, That, Whose)
    {
      question: "The man ____ called yesterday is my uncle.",
      options: ["which", "who", "whose", "whom"],
      answer: "who",
      explanation: "Rule: Relative Pronouns. Use 'who' when referring to people acting as the subject."
    },
    {
      question: "The car ____ I bought is red.",
      options: ["who", "which", "whose", "what"],
      answer: "which",
      explanation: "Rule: Relative Pronouns. Use 'which' (or 'that') when referring to things or animals."
    },
    {
      question: "I know a girl ____ brother is famous.",
      options: ["who", "which", "whose", "that"],
      answer: "whose",
      explanation: "Rule: Relative Pronouns. Use 'whose' to indicate possession (her brother)."
    },
    {
      question: "This is the house ____ I was born.",
      options: ["which", "where", "that", "who"],
      answer: "where",
      explanation: "Rule: Relative Adverbs. Use 'where' to refer to places."
    },
    {
      question: "The book, ____ is on the table, is mine.",
      options: ["that", "which", "who", "whose"],
      answer: "which",
      explanation: "Rule: Non-Defining Clauses. Use commas and 'which' for extra information. You cannot use 'that' after a comma."
    },
    {
      question: "He is the person to ____ I spoke.",
      options: ["who", "whom", "that", "which"],
      answer: "whom",
      explanation: "Rule: Formal Relative Pronouns. Use 'whom' after a preposition (to whom)."
    },
    {
      question: "The day ____ we met was rainy.",
      options: ["where", "which", "when", "who"],
      answer: "when",
      explanation: "Rule: Relative Adverbs. Use 'when' to refer to time."
    },
    {
      question: "The painting ____ you like is expensive.",
      options: ["who", "whose", "that", "where"],
      answer: "that",
      explanation: "Rule: Defining Clauses. 'That' is commonly used for objects in essential clauses (no commas)."
    },
    {
      question: "She is the woman ____ husband is a doctor.",
      options: ["who", "whom", "whose", "which"],
      answer: "whose",
      explanation: "Rule: Possession. 'Whose' replaces 'her'."
    },
    {
      question: "I have a friend ____ lives in London.",
      options: ["which", "who", "whom", "whose"],
      answer: "who",
      explanation: "Rule: Relative Pronouns. 'Who' refers to the person (friend) who is the subject of the verb (lives)."
    },

    // 61-70: Direct and Indirect Objects
    {
      question: "Which sentence is correct?",
      options: ["She gave him a gift.", "She gave to him a gift.", "She gave a gift him.", "She gave him to a gift."],
      answer: "She gave him a gift.",
      explanation: "Rule: Object Placement. Structure 1: Subject + Verb + Indirect Object (him) + Direct Object (a gift). No preposition needed."
    },
    {
      question: "Which is correct?",
      options: ["He bought for her a flower.", "He bought a flower for her.", "He bought her to a flower.", "He bought a flower her."],
      answer: "He bought a flower for her.",
      explanation: "Rule: Object Placement. Structure 2: Subject + Verb + Direct Object (a flower) + Preposition (for) + Indirect Object (her)."
    },
    {
      question: "Choose the correct structure:",
      options: ["Show me your passport.", "Show to me your passport.", "Show your passport me.", "Show me to your passport."],
      answer: "Show me your passport.",
      explanation: "Rule: Double Objects. If the person (Indirect Object) comes first, omit the preposition."
    },
    {
      question: "Which is correct?",
      options: ["I sent a letter to John.", "I sent John to a letter.", "I sent to John a letter.", "I sent a letter John."],
      answer: "I sent a letter to John.",
      explanation: "Rule: Double Objects. If the thing (Direct Object) comes first, use 'to' + person."
    },
    {
      question: "Arrange: (made / cake / us / She / a).",
      options: ["She made a cake us.", "She made us a cake.", "She made to us a cake.", "She made a cake for us to."],
      answer: "She made us a cake.",
      explanation: "Rule: Double Objects. Subject + Verb + Indirect Object + Direct Object."
    },
    {
      question: "Which is correct?",
      options: ["Can you lend me some money?", "Can you lend to me some money?", "Can you lend some money me?", "Can you lend me with some money?"],
      answer: "Can you lend me some money?",
      explanation: "Rule: Verb patterns. 'Lend' takes two objects. Lend [person] [money]."
    },
    {
      question: "Correct this: 'Explain me the rule.'",
      options: ["Explain the rule me.", "Explain the rule to me.", "Explain to me the rule.", "Explain me to the rule."],
      answer: "Explain the rule to me.",
      explanation: "Rule: Exception Verbs. 'Explain' does NOT allow the 'Explain me' structure. You must always use 'Explain [something] TO [someone]'."
    },
    {
      question: "Which is correct?",
      options: ["She told me a story.", "She told to me a story.", "She said me a story.", "She told a story me."],
      answer: "She told me a story.",
      explanation: "Rule: Verb patterns. 'Tell' takes a direct person object (Tell me). 'Say' does not (Say to me)."
    },
    {
      question: "Which is correct?",
      options: ["He offered them a drink.", "He offered to them a drink.", "He offered a drink them.", "He offered them with a drink."],
      answer: "He offered them a drink.",
      explanation: "Rule: Verb patterns. Offer + Person + Thing."
    },
    {
      question: "Which is correct?",
      options: ["Give it to me.", "Give me it.", "Give to me it.", "Give it me."],
      answer: "Give it to me.",
      explanation: "Rule: Pronoun Objects. When the direct object is a pronoun (it/them), we prefer the structure 'Give it to me' rather than 'Give me it'."
    },

    // 71-80: Active and Passive Voice Basics
    {
      question: "Active: 'The chef cooks the food.' Passive:",
      options: ["The food is cooked by the chef.", "The food was cooked by the chef.", "The food cooks the chef.", "The food is being cooked by the chef."],
      answer: "The food is cooked by the chef.",
      explanation: "Rule: Passive Voice. Present Simple Active (cooks) becomes Present Simple Passive (is + past participle)."
    },
    {
      question: "Passive: 'The car was washed by him.' Active:",
      options: ["He washes the car.", "He washed the car.", "He is washing the car.", "He has washed the car."],
      answer: "He washed the car.",
      explanation: "Rule: Passive to Active. Past Simple Passive (was washed) corresponds to Past Simple Active (washed)."
    },
    {
      question: "Which sentence is Passive?",
      options: ["The dog bit the man.", "The man was bitten by the dog.", "The man bit the dog.", "The dog is biting the man."],
      answer: "The man was bitten by the dog.",
      explanation: "Rule: Identifying Passive. Look for the 'be' verb + Past Participle (was bitten)."
    },
    {
      question: "Change to Passive: 'Someone stole my bag.'",
      options: ["My bag was stolen.", "My bag is stolen.", "My bag has been stolen.", "My bag stole someone."],
      answer: "My bag was stolen.",
      explanation: "Rule: Unknown Agents. When the subject is 'Someone', we often omit the 'by...' phrase in passive voice."
    },
    {
      question: "Change to Active: 'The house is being built by workers.'",
      options: ["Workers build the house.", "Workers are building the house.", "Workers built the house.", "Workers have built the house."],
      answer: "Workers are building the house.",
      explanation: "Rule: Continuous Tenses. 'Is being built' is Present Continuous Passive. The Active form is 'Are building'."
    },
    {
      question: "Which is correct?",
      options: ["This cake was made by my mom.", "This cake made my mom.", "This cake was make by my mom.", "This cake made by my mom."],
      answer: "This cake was made by my mom.",
      explanation: "Rule: Passive Formation. Subject + Be (was) + Past Participle (made)."
    },
    {
      question: "Active: 'They will finish the project.' Passive:",
      options: ["The project will be finished.", "The project is finished.", "The project will finish.", "The project will be finish."],
      answer: "The project will be finished.",
      explanation: "Rule: Future Passive. Will + Verb -> Will + Be + Past Participle."
    },
    {
      question: "Change to Passive: 'Who wrote this book?'",
      options: ["By whom was this book written?", "Who was this book written?", "By who this book written?", "Who written this book?"],
      answer: "By whom was this book written?",
      explanation: "Rule: Passive Questions. 'Who' changes to 'By whom' and word order inverts."
    },
    {
      question: "Which is correct?",
      options: ["I was born in 1990.", "I born in 1990.", "I am born in 1990.", "I was borne in 1990."],
      answer: "I was born in 1990.",
      explanation: "Rule: Birth. We always use the Past Passive form 'was born' for birth dates."
    },
    {
      question: "Active: 'He has fixed the car.' Passive:",
      options: ["The car was fixed.", "The car has been fixed.", "The car is fixed.", "The car had been fixed."],
      answer: "The car has been fixed.",
      explanation: "Rule: Perfect Tenses. Present Perfect Active (has fixed) becomes Present Perfect Passive (has + been + fixed)."
    },

    // 81-90: Conditionals (Zero, First, Second, Third)
    {
      question: "Zero Conditional: If you heat ice, it ____.",
      options: ["melts", "melted", "will melt", "would melt"],
      answer: "melts",
      explanation: "Rule: Zero Conditional (Facts). Structure: If + Present Simple, + Present Simple."
    },
    {
      question: "First Conditional: If it rains, I ____ at home.",
      options: ["stay", "stayed", "will stay", "would stay"],
      answer: "will stay",
      explanation: "Rule: First Conditional (Real Future). Structure: If + Present Simple, + Will + Verb."
    },
    {
      question: "Second Conditional: If I ____ rich, I would travel the world.",
      options: ["am", "was", "were", "will be"],
      answer: "were",
      explanation: "Rule: Second Conditional (Hypothetical). Structure: If + Past Simple (use 'were'), + Would + Verb."
    },
    {
      question: "Third Conditional: If I had known, I ____ gone.",
      options: ["would have", "will have", "would had", "had have"],
      answer: "would have",
      explanation: "Rule: Third Conditional (Past Regret). Structure: If + Past Perfect, + Would have + Past Participle."
    },
    {
      question: "Choose the correct sentence:",
      options: ["If I will see him, I will tell him.", "If I see him, I will tell him.", "If I see him, I tell him.", "If I saw him, I will tell him."],
      answer: "If I see him, I will tell him.",
      explanation: "Rule: Future Clauses. Never use 'will' in the 'If' clause. Use Present Simple."
    },
    {
      question: "Complete: 'I would buy a car if I ____ money.'",
      options: ["have", "had", "have had", "will have"],
      answer: "had",
      explanation: "Rule: Second Conditional. Since the result has 'would', the condition must use Past Simple 'had'."
    },
    {
      question: "Complete: 'Unless you ____, you will fail.'",
      options: ["study", "don't study", "will study", "studied"],
      answer: "study",
      explanation: "Rule: Unless. 'Unless' means 'If not'. Do not use a double negative (don't study). 'Unless you study' means 'If you don't study'."
    },
    {
      question: "Which is correct?",
      options: ["If I were you, I would accept.", "If I was you, I will accept.", "If I am you, I accept.", "If I were you, I will accept."],
      answer: "If I were you, I would accept.",
      explanation: "Rule: Second Conditional Advice. 'If I were you' is the standard phrase for giving advice."
    },
    {
      question: "Mixed Conditional: 'If I had eaten lunch, I ____ hungry now.'",
      options: ["wouldn't be", "wouldn't have been", "won't be", "am not"],
      answer: "wouldn't be",
      explanation: "Rule: Mixed Conditional. Past Condition (had eaten) affecting Present Result (wouldn't be)."
    },
    {
      question: "Complete: 'Had I known you were coming, I ____ a cake.'",
      options: ["would bake", "will bake", "would have baked", "baked"],
      answer: "would have baked",
      explanation: "Rule: Inverted Third Conditional. 'Had I known' = 'If I had known'. The result requires 'would have baked'."
    },

    // 91-100: Basic Parallelism
    {
      question: "She likes swimming, hiking, and ____.",
      options: ["to run", "run", "running", "ran"],
      answer: "running",
      explanation: "Rule: Parallelism. All items in a list must follow the same grammatical form (Gerunds: swimming, hiking, running)."
    },
    {
      question: "He is smart, funny, and ____.",
      options: ["kindness", "kind", "kindly", "a kind person"],
      answer: "kind",
      explanation: "Rule: Parallelism. Adjective, Adjective, and Adjective."
    },
    {
      question: "The movie was both exciting and ____.",
      options: ["scare", "scared", "scary", "scarily"],
      answer: "scary",
      explanation: "Rule: Parallelism with Correlatives. 'Exciting' is an adjective, so 'scary' (adjective) is required."
    },
    {
      question: "He decided to stop smoking and ____.",
      options: ["drinking", "to drink", "drink", "drank"],
      answer: "drinking",
      explanation: "Rule: Parallelism. Stop [Verb-ing] and [Verb-ing]. (Stop smoking and drinking)."
    },
    {
      question: "I want to learn to dance and ____.",
      options: ["sing", "singing", "sang", "to singing"],
      answer: "sing",
      explanation: "Rule: Parallelism. To learn [infinitive] and [infinitive]. 'To' can be implied for the second verb."
    },
    {
      question: "Which sentence has parallel structure?",
      options: ["She likes to cook, jog, and reading.", "She likes to cook, to jog, and to read.", "She likes cooking, jogging, and to read.", "She likes to cook, jogging, and read."],
      answer: "She likes to cook, to jog, and to read.",
      explanation: "Rule: Parallelism. Consistent use of infinitives (to cook, to jog, to read)."
    },
    {
      question: "Not only is he rich, but also ____.",
      options: ["generous", "generosity", "generously", "he generous"],
      answer: "generous",
      explanation: "Rule: Parallelism. 'Rich' is an adjective, so the following word must be an adjective (generous)."
    },
    {
      question: "The process involves planning, organizing, and ____.",
      options: ["execute", "execution", "executing", "to execute"],
      answer: "executing",
      explanation: "Rule: Parallelism. Gerunds list: planning, organizing, executing."
    },
    {
      question: "He asked me where I was going and ____.",
      options: ["what I was doing", "what was I doing", "what doing", "what am I doing"],
      answer: "what I was doing",
      explanation: "Rule: Parallel Clauses. Keep the word order of indirect questions consistent (Subject + Verb)."
    },
    {
      question: "It is better to give than ____.",
      options: ["receiving", "to receive", "receive", "received"],
      answer: "to receive",
      explanation: "Rule: Parallelism. 'To give' matches 'to receive'."
    }
  ],

  advanced: [
    // 101-110: Misplaced and Dangling Modifiers
    {
      question: "Which sentence is correct?",
      options: ["Walking down the street, the trees looked beautiful.", "Walking down the street, I saw beautiful trees.", "The trees looked beautiful walking down the street.", "Walking down the street, trees were beautiful."],
      answer: "Walking down the street, I saw beautiful trees.",
      explanation: "Rule: Dangling Modifiers. The subject of the introductory phrase ('Walking') must be the subject of the sentence ('I'). Trees cannot walk."
    },
    {
      question: "Correct this: 'Hungry, the sandwich was eaten.'",
      options: ["Hungry, I ate the sandwich.", "The sandwich was eaten, hungry.", "Hungry, the sandwich ate me.", "The sandwich, hungry, was eaten."],
      answer: "Hungry, I ate the sandwich.",
      explanation: "Rule: Dangling Modifiers. The modifier 'Hungry' describes a person, so the subject 'I' must immediately follow the comma."
    },
    {
      question: "Which sentence implies the man is in pyjamas?",
      options: ["I shot an elephant in my pyjamas.", "In my pyjamas, I shot an elephant.", "I shot an elephant wearing my pyjamas.", "Pyjamas on, I shot an elephant."],
      answer: "In my pyjamas, I shot an elephant.",
      explanation: "Rule: Misplaced Modifiers. Placing 'In my pyjamas' at the start unambiguously modifies the subject 'I'. The other options could imply the elephant was wearing them."
    },
    {
      question: "Correct this: 'To get a good job, the interview is important.'",
      options: ["To get a good job, you must do well in the interview.", "The interview is important to get a good job.", "To get a good job, interviews matter.", "For getting a good job, the interview is important."],
      answer: "To get a good job, you must do well in the interview.",
      explanation: "Rule: Dangling Modifiers. 'To get a job' is an action; the subject doing the action (you) must follow the clause."
    },
    {
      question: "Which is correct?",
      options: ["She served sandwiches to the children on paper plates.", "She served sandwiches on paper plates to the children.", "On paper plates, she served children sandwiches.", "She served children on paper plates sandwiches."],
      answer: "She served sandwiches on paper plates to the children.",
      explanation: "Rule: Misplaced Modifiers. Place 'on paper plates' next to 'sandwiches'. Option A implies the children are sitting on paper plates."
    },
    {
      question: "Correct this: 'Barking loudly, John yelled at the dog.'",
      options: ["John yelled at the barking dog.", "Barking loudly, the dog was yelled at by John.", "John, barking loudly, yelled at the dog.", "The dog barked and John yelled."],
      answer: "John yelled at the barking dog.",
      explanation: "Rule: Misplaced Modifiers. The original implies John is barking. Move the modifier to describe the dog."
    },
    {
      question: "Which is correct?",
      options: ["I nearly earned a hundred dollars.", "I earned nearly a hundred dollars.", "I earned a hundred nearly dollars.", "Nearly I earned a hundred dollars."],
      answer: "I earned nearly a hundred dollars.",
      explanation: "Rule: Limiting Modifiers. 'Nearly' modifies the amount ($100). 'Nearly earned' would mean you didn't earn it at all."
    },
    {
      question: "Correct: 'Covered in cheese, I ate the pizza.'",
      options: ["I ate the pizza covered in cheese.", "Covered in cheese, the pizza was eaten.", "I ate the pizza, covered in cheese.", "The pizza covered in cheese I ate."],
      answer: "I ate the pizza covered in cheese.",
      explanation: "Rule: Dangling Modifiers. 'Covered in cheese' describes the pizza, so place it next to 'pizza'."
    },
    {
      question: "Which is correct?",
      options: ["She almost drove for six hours.", "She drove for almost six hours.", "She drove almost for six hours.", "Almost she drove for six hours."],
      answer: "She drove for almost six hours.",
      explanation: "Rule: Limiting Modifiers. 'Drove for almost six hours' describes the duration. 'Almost drove' means she decided not to drive."
    },
    {
      question: "Correct: 'After rotting in the cellar, my mother threw out the apples.'",
      options: ["My mother threw out the apples after they had rotted in the cellar.", "After rotting in the cellar, the apples were thrown out by my mother.", "My mother threw out the rotting apples from the cellar.", "All of the above are better than the original."],
      answer: "All of the above are better than the original.",
      explanation: "Rule: Dangling Modifiers. The original implies the mother was rotting."
    },

    // 111-120: Inversion (Negative Adverbials)
    {
      question: "Which is correct?",
      options: ["Never I have seen such a thing.", "Never have I seen such a thing.", "I have seen never such a thing.", "Never saw I such a thing."],
      answer: "Never have I seen such a thing.",
      explanation: "Rule: Negative Inversion. When a sentence starts with 'Never', invert the Auxiliary and Subject (Have I)."
    },
    {
      question: "Choose the correct sentence:",
      options: ["Rarely do we go out.", "Rarely we do go out.", "Rarely go we out.", "We go rarely out."],
      answer: "Rarely do we go out.",
      explanation: "Rule: Negative Inversion. Structure: Negative Adverb (Rarely) + Auxiliary (Do) + Subject (we) + Verb."
    },
    {
      question: "Correct: 'Not only he is rich, but he is also famous.'",
      options: ["Not only is he rich, but he is also famous.", "Not only he rich, but he is also famous.", "Not only rich is he, but he is also famous.", "He is rich not only, but famous also."],
      answer: "Not only is he rich, but he is also famous.",
      explanation: "Rule: Negative Inversion. Structure: Not only + Auxiliary (is) + Subject (he)."
    },
    {
      question: "Complete: 'Under no circumstances ____ open this door.'",
      options: ["you should", "should you", "you must", "must open you"],
      answer: "should you",
      explanation: "Rule: Negative Inversion. 'Under no circumstances' triggers inversion: Should you."
    },
    {
      question: "Which is correct?",
      options: ["Seldom she cooks dinner.", "Seldom does she cook dinner.", "Seldom cooks she dinner.", "She seldom does cook dinner."],
      answer: "Seldom does she cook dinner.",
      explanation: "Rule: Negative Inversion. Seldom + Auxiliary (does) + Subject (she) + Verb (cook)."
    },
    {
      question: "Complete: 'Hardly had I arrived ____ the phone rang.'",
      options: ["than", "when", "then", "after"],
      answer: "when",
      explanation: "Rule: Correlative Time Pairs. The correct pair is 'Hardly... when'. (For 'No sooner', use 'than')."
    },
    {
      question: "Which is correct?",
      options: ["Little did he know the truth.", "Little he knew the truth.", "Little knew he the truth.", "He little known the truth."],
      answer: "Little did he know the truth.",
      explanation: "Rule: Negative Inversion. Little + Auxiliary (Did) + Subject (He) + Verb (Know)."
    },
    {
      question: "Complete: 'No sooner had we left ____ it started raining.'",
      options: ["when", "that", "than", "then"],
      answer: "than",
      explanation: "Rule: Correlative Time Pairs. The correct pair is 'No sooner... than'."
    },
    {
      question: "Choose the correct sentence:",
      options: ["Only then did I understand.", "Only then I understood.", "Only then I did understand.", "Only then understood I."],
      answer: "Only then did I understand.",
      explanation: "Rule: Inversion with 'Only'. Time phrase 'Only then' triggers inversion: Did I understand."
    },
    {
      question: "Correct: 'In no way I am responsible.'",
      options: ["In no way am I responsible.", "In no way I responsible.", "I am responsible in no way.", "Am I responsible in no way."],
      answer: "In no way am I responsible.",
      explanation: "Rule: Negative Inversion. 'In no way' is a negative phrase -> Am I responsible."
    },

    // 121-130: Reported Speech (Indirect Speech)
    {
      question: "Direct: 'I am happy.' Indirect: He said that ____.",
      options: ["he is happy", "he was happy", "I am happy", "he has been happy"],
      answer: "he was happy",
      explanation: "Rule: Backshift. Present Simple (am) shifts to Past Simple (was)."
    },
    {
      question: "Direct: 'I will call you.' Indirect: She said she ____.",
      options: ["will call me", "would call me", "called me", "would have called me"],
      answer: "would call me",
      explanation: "Rule: Backshift. Future 'Will' shifts to Conditional 'Would'."
    },
    {
      question: "Direct: 'Did you finish?' Indirect: He asked if I ____.",
      options: ["did finish", "finished", "had finished", "have finished"],
      answer: "had finished",
      explanation: "Rule: Backshift. Past Simple (did finish) shifts to Past Perfect (had finished)."
    },
    {
      question: "Direct: 'Where do you live?' Indirect: He asked me ____.",
      options: ["where do I live", "where did I live", "where I lived", "where I live"],
      answer: "where I lived",
      explanation: "Rule: Reported Questions. The word order reverts to statement form (Subject + Verb), and the tense backshifts."
    },
    {
      question: "Direct: 'Don't shout.' Indirect: He told me ____.",
      options: ["to not shout", "not to shout", "don't shout", "no shouting"],
      answer: "not to shout",
      explanation: "Rule: Reported Imperatives. Negative commands become 'not to' + infinitive."
    },
    {
      question: "Direct: 'I have seen it.' Indirect: She said she ____.",
      options: ["has seen it", "had seen it", "saw it", "was seeing it"],
      answer: "had seen it",
      explanation: "Rule: Backshift. Present Perfect (have seen) shifts to Past Perfect (had seen)."
    },
    {
      question: "Direct: 'I am working.' Indirect: He said he ____.",
      options: ["is working", "was working", "worked", "had worked"],
      answer: "was working",
      explanation: "Rule: Backshift. Present Continuous (am working) shifts to Past Continuous (was working)."
    },
    {
      question: "Direct: 'I must go.' Indirect: He said he ____.",
      options: ["must go", "had to go", "has to go", "should go"],
      answer: "had to go",
      explanation: "Rule: Modals. 'Must' usually shifts to 'had to' in reported speech."
    },
    {
      question: "Direct: 'Are you busy?' Indirect: He asked ____.",
      options: ["if I was busy", "if was I busy", "that I was busy", "if I am busy"],
      answer: "if I was busy",
      explanation: "Rule: Yes/No Questions. Use 'if' or 'whether', and change question order to statement order (Subject + Verb)."
    },
    {
      question: "Direct: 'I can swim.' Indirect: He said he ____.",
      options: ["can swim", "could swim", "could swam", "can swam"],
      answer: "could swim",
      explanation: "Rule: Backshift. Modal 'Can' shifts to 'Could'."
    },

    // 131-140: Participles and Absolutes
    {
      question: "Combine: 'He felt tired. He went to bed.'",
      options: ["Feeling tired, he went to bed.", "Felt tired, he went to bed.", "He went to bed, feeling tired.", "Both A and C"],
      answer: "Both A and C",
      explanation: "Rule: Participle Clauses. Use the Present Participle (Feeling) to show cause or simultaneous action. Both placements are correct."
    },
    {
      question: "Combine: 'The car was repaired. It looked new.'",
      options: ["Repaired, the car looked new.", "Repairing the car, it looked new.", "Having repaired, the car looked new.", "Having been repaired, the car looked new."],
      answer: "Having been repaired, the car looked new.",
      explanation: "Rule: Perfect Passive Participle. 'Having been repaired' shows that the passive action was completed before the main verb."
    },
    {
      question: "Which is correct?",
      options: ["The weather being fine, we went for a walk.", "Being the weather fine, we went for a walk.", "The weather was fine, we went for a walk.", "We went for a walk, the weather being fine."],
      answer: "The weather being fine, we went for a walk.",
      explanation: "Rule: Absolute Phrases. Structure: Noun (The weather) + Participle (being fine). It modifies the whole sentence."
    },
    {
      question: "Correct: 'Seen from the tower, the tourists took photos.'",
      options: ["Seen from the tower, the city looked small.", "The tourists took photos seen from the tower.", "Seeing from the tower, photos were taken.", "Seen from the tower, I saw the city."],
      answer: "Seen from the tower, the city looked small.",
      explanation: "Rule: Participle Logic. The modifier 'Seen from the tower' must describe the subject. The *city* is seen, not the tourists."
    },
    {
      question: "Choose the correct sentence:",
      options: ["Having finished his work, John went home.", "Finished his work, John went home.", "Finishing his work, John went home.", "John went home, finished his work."],
      answer: "Having finished his work, John went home.",
      explanation: "Rule: Perfect Participle. 'Having finished' emphasizes that the first action was fully completed before the second began."
    },
    {
      question: "Which is correct?",
      options: ["Not knowing the way, I asked a policeman.", "Not knew the way, I asked a policeman.", "Did not know the way, I asked a policeman.", "Known not the way, I asked a policeman."],
      answer: "Not knowing the way, I asked a policeman.",
      explanation: "Rule: Negative Participles. Place 'Not' before the participle (Not knowing)."
    },
    {
      question: "Combine: 'She was shocked by the news. She started crying.'",
      options: ["Shocking by the news, she started crying.", "Shocked by the news, she started crying.", "She started crying, shocked by the news.", "Both B and C"],
      answer: "Both B and C",
      explanation: "Rule: Past Participles. 'Shocked' describes the passive state of the subject."
    },
    {
      question: "Identify the Absolute Phrase:",
      options: ["God willing, we shall meet again.", "I hope we meet again.", "We will meet again soon.", "If God wills, we meet."],
      answer: "God willing, we shall meet again.",
      explanation: "Rule: Absolute Phrases. 'God willing' is an independent phrase (Noun + Participle) that acts as an adverbial modifier."
    },
    {
      question: "Which is correct?",
      options: ["Looked at from a distance, the painting seems realistic.", "Looking at from a distance, the painting seems realistic.", "The painting looking realistic from a distance.", "Looked at from a distance, I like the painting."],
      answer: "Looked at from a distance, the painting seems realistic.",
      explanation: "Rule: Passive Participle. The painting is the object being looked at, so we use the passive form 'Looked at'."
    },
    {
      question: "Which sentence uses 'Considering' correctly?",
      options: ["Considering the weather, we stayed home.", "Considering the weather, the picnic was cancelled.", "Considering the weather, we expected rain.", "All are correct."],
      answer: "All are correct.",
      explanation: "Rule: 'Considering' often works like a preposition (similar to 'in view of'), so all three sentences use it naturally to add background information."
    },

    // 141-150: Advanced Parallelism
    {
      question: "He is not only a talented singer but also ____.",
      options: ["plays the guitar well", "a skilled guitarist", "he plays guitar", "skilled at guitar"],
      answer: "a skilled guitarist",
      explanation: "Rule: Parallelism. Noun Phrase (a talented singer) matches Noun Phrase (a skilled guitarist)."
    },
    {
      question: "She prefers reading to ____.",
      options: ["write", "writing", "write books", "have written"],
      answer: "writing",
      explanation: "Rule: Verb Patterns. 'Prefer X to Y' requires matching forms. Reading (Gerund) matches Writing (Gerund)."
    },
    {
      question: "The report was detailed, accurate, and ____.",
      options: ["it was timely", "timely", "on time", "time"],
      answer: "timely",
      explanation: "Rule: Parallelism. Adjective, Adjective, and Adjective (Timely)."
    },
    {
      question: "His goals are to make money, to travel, and ____.",
      options: ["retiring early", "to retire early", "retire early", "retirement"],
      answer: "to retire early",
      explanation: "Rule: Parallelism. Infinitive list: To make, to travel, to retire."
    },
    {
      question: "The teacher told the students to sit down, to open their books, and ____.",
      options: ["listen", "to listen", "listening", "that they should listen"],
      answer: "to listen",
      explanation: "Rule: Parallelism. Maintain the infinitive structure 'to listen' for strict accuracy."
    },
    {
      question: "The room was neither clean nor ____.",
      options: ["with fresh air", "comfortable", "it had comfort", "comfort"],
      answer: "comfortable",
      explanation: "Rule: Parallelism. Adjective matches Adjective (Clean... Comfortable)."
    },
    {
      question: "We can go either by bus or ____.",
      options: ["take a train", "by train", "train", "on a train"],
      answer: "by train",
      explanation: "Rule: Parallelism with Prepositions. By bus... By train."
    },
    {
      question: "Doing is better than ____.",
      options: ["to say", "saying", "say", "said"],
      answer: "saying",
      explanation: "Rule: Parallelism. Gerund (Doing) matches Gerund (Saying)."
    },
    {
      question: "He spoke clearly, eloquently, and ____.",
      options: ["with passion", "passionately", "passion", "passionate"],
      answer: "passionately",
      explanation: "Rule: Parallelism. Adverb, Adverb, Adverb."
    },
    {
      question: "She is responsible for organizing the event and ____.",
      options: ["to supervise the staff", "supervising the staff", "supervision of staff", "supervise"],
      answer: "supervising the staff",
      explanation: "Rule: Parallelism with Prepositions. 'Responsible FOR' governs both gerunds: organizing and supervising."
    }
  ],

    expert: [
    // 151-160: Sentence Improvement – Choose the best version
    {
      question: "Which sentence is the best and most correct?",
      options: [
        "Because of the heavy rain, so the game was cancelled.",
        "Because it was heavy raining, the game was cancelled.",
        "Because of the heavy rain, the game was cancelled.",
        "Because the heavy rain, the game was cancelled."
      ],
      answer: "Because of the heavy rain, the game was cancelled.",
      explanation: "Use 'Because of' + noun phrase (the heavy rain). Do not add 'so' in the result clause and avoid 'heavy raining'."
    },
    {
      question: "Choose the sentence with correct structure.",
      options: [
        "He not only passed the exam but also he got a medal.",
        "He not only passed the exam but also got a medal.",
        "He not only passed the exam but got also a medal.",
        "He passed not only the exam but also he got a medal."
      ],
      answer: "He not only passed the exam but also got a medal.",
      explanation: "In 'not only... but also' structures, keep the verb pattern parallel: 'passed' and 'got'. Do not repeat 'he' after 'but also'."
    },
    {
      question: "Which sentence has correct subject-verb agreement?",
      options: [
        "The list of names are on the table.",
        "The list of names is on the table.",
        "The lists of names is on the table.",
        "The list of names are in the table."
      ],
      answer: "The list of names is on the table.",
      explanation: "The true subject is 'list', which is singular, so we use the singular verb 'is'."
    },
    {
      question: "Combine the ideas correctly: She studied hard. She failed the test.",
      options: [
        "She studied hard, so she failed the test.",
        "She studied hard, yet she failed the test.",
        "She studied hard, because she failed the test.",
        "She studied hard, for she failed the test."
      ],
      answer: "She studied hard, yet she failed the test.",
      explanation: "'Yet' shows contrast: it is surprising that she failed even though she studied hard."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "All of the boys must bring his own lunch.",
        "All of the boys must bring their own lunch.",
        "All of the boys must brings their own lunch.",
        "All of the boys must brought their own lunch."
      ],
      answer: "All of the boys must bring their own lunch.",
      explanation: "The subject 'boys' is plural, so we use the plural pronoun 'their' and the base form 'bring' after 'must'."
    },
    {
      question: "Choose the sentence without a double negative.",
      options: [
        "I don't need no help.",
        "I don't need any help.",
        "I don't need no any help.",
        "I no need any help."
      ],
      answer: "I don't need any help.",
      explanation: "In standard English, avoid double negatives. Use 'don't' with 'any', not with 'no'."
    },
    {
      question: "Complete the sentence correctly: 'By the time we arrived, the show ____.'",
      options: [
        "finished",
        "had finished",
        "has finished",
        "was finish"
      ],
      answer: "had finished",
      explanation: "Use the past perfect 'had finished' to show an action completed before another past action."
    },
    {
      question: "Which sentence shows good parallel structure?",
      options: [
        "The job requires attention to detail, patience, and working fast.",
        "The job requires to pay attention to detail, patience, and working fast.",
        "The job requires attention to detail, patience, and the ability to work fast.",
        "The job requires attention to detail, to be patient, and working fast."
      ],
      answer: "The job requires attention to detail, patience, and the ability to work fast.",
      explanation: "All items in the list should be noun phrases: 'attention', 'patience', 'the ability'. This keeps the structure parallel."
    },
    {
      question: "Choose the correct conditional sentence.",
      options: [
        "If I will have enough money, I would buy that laptop.",
        "If I have enough money, I would buy that laptop.",
        "If I had enough money, I would buy that laptop.",
        "If I would have enough money, I buy that laptop."
      ],
      answer: "If I had enough money, I would buy that laptop.",
      explanation: "Second conditional for unreal present situations: 'If' + past simple, 'would' + base verb."
    },
    {
      question: "Which sentence uses the tenses correctly?",
      options: [
        "When I was a child, I use to walk to school.",
        "When I was a child, I used to walk to school.",
        "When I was a child, I was used to walk to school.",
        "When I was a child, I am used to walk to school."
      ],
      answer: "When I was a child, I used to walk to school.",
      explanation: "'Used to' + base verb shows a past habit that no longer happens."
    },

    // 161-170: Common error recognition (choose the correct sentence)
    {
      question: "Which sentence has no error?",
      options: [
        "She is married with a doctor.",
        "She is married to a doctor.",
        "She is marry to a doctor.",
        "She is marrying with a doctor."
      ],
      answer: "She is married to a doctor.",
      explanation: "We say 'married to someone', not 'married with someone'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I look forward to meet you.",
        "I am looking forward to meet you.",
        "I look forward to meeting you.",
        "I am looking forward meeting you."
      ],
      answer: "I look forward to meeting you.",
      explanation: "After 'look forward to', use a gerund: 'to meeting', not the base form."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He insisted to pay the bill.",
        "He insisted on paying the bill.",
        "He insisted for paying the bill.",
        "He insisted that to pay the bill."
      ],
      answer: "He insisted on paying the bill.",
      explanation: "'Insist on' is followed by a gerund: 'insisted on paying'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She said me the answer.",
        "She told to me the answer.",
        "She told me the answer.",
        "She said me the answer to."
      ],
      answer: "She told me the answer.",
      explanation: "Use 'tell someone something' or 'say something to someone'. 'Told me the answer' is correct."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I prefer coffee than tea.",
        "I prefer coffee to tea.",
        "I prefer coffee over than tea.",
        "I prefer coffee instead tea."
      ],
      answer: "I prefer coffee to tea.",
      explanation: "After 'prefer', use 'to': 'prefer A to B'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Despite of the rain, we went out.",
        "In spite the rain, we went out.",
        "Despite the rain, we went out.",
        "Despite the rain, but we went out."
      ],
      answer: "Despite the rain, we went out.",
      explanation: "Use 'Despite' + noun ('the rain') without 'of'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She is good in math.",
        "She is good on math.",
        "She is good at math.",
        "She is good with math at."
      ],
      answer: "She is good at math.",
      explanation: "The correct preposition is 'good at' for abilities."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We discussed about the problem.",
        "We discussed the problem.",
        "We discussed on the problem.",
        "We discussed for the problem."
      ],
      answer: "We discussed the problem.",
      explanation: "'Discuss' is a transitive verb; do not use 'about' after it."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He is used to get up early.",
        "He used to getting up early.",
        "He is used to getting up early.",
        "He used to getting up early now."
      ],
      answer: "He is used to getting up early.",
      explanation: "'Be used to' is followed by a noun or gerund: 'used to getting up early'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He denied to steal the money.",
        "He denied stealing the money.",
        "He denied for stealing the money.",
        "He denied that to steal the money."
      ],
      answer: "He denied stealing the money.",
      explanation: "After 'deny', use a gerund: 'denied stealing'."
    },

    // 171-180: Combining and transforming sentences
    {
      question: "Join the ideas correctly: It was raining. We went to the park.",
      options: [
        "Although it was raining, we went to the park.",
        "Because it was raining, we went to the park.",
        "It was raining so we went to the park.",
        "It was raining and we went not to the park."
      ],
      answer: "Although it was raining, we went to the park.",
      explanation: "'Although' shows contrast: we still went to the park even though it was raining."
    },
    {
      question: "Join the ideas using 'in order to': She studied hard. She wanted to pass the exam.",
      options: [
        "She studied hard in order to pass the exam.",
        "She studied hard in order pass the exam.",
        "She studied hard in order that pass the exam.",
        "She studied hard in order passing the exam."
      ],
      answer: "She studied hard in order to pass the exam.",
      explanation: "Use 'in order to' + base verb to show purpose."
    },
    {
      question: "Combine correctly using 'because': We stayed at home. It was raining.",
      options: [
        "We stayed at home because it was raining.",
        "Because was raining, we stayed at home.",
        "We stayed at home because was raining.",
        "Because it was raining so we stayed at home."
      ],
      answer: "We stayed at home because it was raining.",
      explanation: "Keep a full clause after 'because': 'because it was raining'. Do not add 'so' in the second clause."
    },
    {
      question: "Join the ideas correctly: He left early. He wanted to catch the bus.",
      options: [
        "He left early so that he could catch the bus.",
        "He left early so he can catch the bus.",
        "He left early in order that he catch the bus.",
        "He left early and he catch the bus."
      ],
      answer: "He left early so that he could catch the bus.",
      explanation: "'So that' + 'could' shows purpose in the past."
    },
    {
      question: "Combine using a relative clause: The man lives next door. He is a doctor.",
      options: [
        "The man who lives next door is a doctor.",
        "The man which lives next door is a doctor.",
        "The man where lives next door is a doctor.",
        "The man lives next door who is a doctor."
      ],
      answer: "The man who lives next door is a doctor.",
      explanation: "Use 'who' for people and place the clause directly after the noun it describes."
    },
    {
      question: "Combine using a relative clause: I bought a watch. It was very expensive.",
      options: [
        "I bought a watch who was very expensive.",
        "I bought a watch which was very expensive.",
        "I bought a watch where was very expensive.",
        "I bought a watch it was very expensive."
      ],
      answer: "I bought a watch which was very expensive.",
      explanation: "Use 'which' or 'that' for things; 'which was very expensive' describes the watch."
    },
    {
      question: "Join the ideas using 'while': I was cooking. My brother was washing the dishes.",
      options: [
        "While I was cooking, my brother was washing the dishes.",
        "While I was cooking, my brother washing the dishes.",
        "While cooking, my brother was washing the dishes.",
        "While my brother was washing the dishes, I cooking."
      ],
      answer: "While I was cooking, my brother was washing the dishes.",
      explanation: "Use 'while' + past continuous for two actions happening at the same time."
    },
    {
      question: "Change to passive voice: 'They built the bridge in 2010.'",
      options: [
        "The bridge is built in 2010.",
        "The bridge was built in 2010.",
        "The bridge has built in 2010.",
        "The bridge was build in 2010."
      ],
      answer: "The bridge was built in 2010.",
      explanation: "Past simple active becomes past simple passive: 'was built'."
    },
    {
      question: "Change to active voice: 'The letter was sent by Maria.'",
      options: [
        "Maria sends the letter.",
        "Maria is sending the letter.",
        "Maria sent the letter.",
        "Maria has sent the letter."
      ],
      answer: "Maria sent the letter.",
      explanation: "Past simple passive ('was sent') becomes past simple active ('sent')."
    },
    {
      question: "Choose the correct first conditional sentence.",
      options: [
        "If you will work hard, you will succeed.",
        "If you work hard, you will succeed.",
        "If you worked hard, you will succeed.",
        "If you work hard, you would succeed."
      ],
      answer: "If you work hard, you will succeed.",
      explanation: "First conditional: 'If' + present simple, 'will' + base verb."
    },

    // 181-190: Pronoun reference, agreement, and clarity
    {
      question: "Which sentence is clearest?",
      options: [
        "When Anna met Lisa, she smiled.",
        "When she met Lisa, Anna smiled.",
        "When Anna met Lisa, Anna smiled politely.",
        "When Anna met her, she smiled."
      ],
      answer: "When Anna met Lisa, Anna smiled politely.",
      explanation: "Repeating 'Anna' removes pronoun ambiguity and makes the sentence clear."
    },
    {
      question: "Which sentence uses the reflexive pronoun correctly?",
      options: [
        "He hurt itself while playing basketball.",
        "He hurt himself while playing basketball.",
        "He hurt hisself while playing basketball.",
        "He hurt him while playing basketball."
      ],
      answer: "He hurt himself while playing basketball.",
      explanation: "Use 'himself' as the reflexive form of 'he'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "The teacher which taught us English has retired.",
        "The teacher who taught us English has retired.",
        "The teacher whom taught us English has retired.",
        "The teacher whose taught us English has retired."
      ],
      answer: "The teacher who taught us English has retired.",
      explanation: "Use 'who' as the subject pronoun referring to a person."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Between you and I, this is a secret.",
        "Between you and me, this is a secret.",
        "Between I and you, this is a secret.",
        "Between me and you, this is a secret are."
      ],
      answer: "Between you and me, this is a secret.",
      explanation: "After a preposition like 'between', use object pronouns: 'you and me'."
    },
    {
      question: "Which sentence keeps the same point of view?",
      options: [
        "If one wants to succeed, you must work hard.",
        "If you want to succeed, one must work hard.",
        "If you want to succeed, you must work hard.",
        "If one wants to succeed, you must working hard."
      ],
      answer: "If you want to succeed, you must work hard.",
      explanation: "Do not mix 'one' and 'you' in the same sentence; keep the pronoun consistent."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "This is the book who I told you about.",
        "This is the book which I told you about.",
        "This is the book that I told you about.",
        "This is the book where I told you about."
      ],
      answer: "This is the book that I told you about.",
      explanation: "Use 'that' or 'which' for things. In exams, 'that' is commonly used in defining relative clauses."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Please give this form to whoever is in charge.",
        "Please give this form to whomever is in charge.",
        "Please give this form to who is in charge.",
        "Please give this form to whom is in charge."
      ],
      answer: "Please give this form to whoever is in charge.",
      explanation: "'Whoever' is the subject of 'is in charge', so the subject form is correct."
    },
    {
      question: "Which sentence has correct subject-verb agreement?",
      options: [
        "None of the chairs are broken.",
        "None of the chairs is broken.",
        "None of the chair are broken.",
        "None of the chair is broken."
      ],
      answer: "None of the chairs is broken.",
      explanation: "In formal exams, 'none' is often treated as singular: 'none is'. The noun after 'of' is plural: 'chairs'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Either of these roads lead to town.",
        "Either of these roads leads to town.",
        "Either of these road leads to town.",
        "Either of these road lead to town."
      ],
      answer: "Either of these roads leads to town.",
      explanation: "'Either' is singular, so use the singular verb 'leads'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Everyone in the class were given a copy.",
        "Everyone in the class was given a copy.",
        "Everyone in the class are given a copy.",
        "Everyone in the class have given a copy."
      ],
      answer: "Everyone in the class was given a copy.",
      explanation: "'Everyone' is singular, so we use the singular verb 'was'."
    },

    // 191-200: Mixed grammar (tenses, prepositions, connectors)
    {
      question: "Which sentence is correct?",
      options: [
        "By next year, she will work here for ten years.",
        "By next year, she will have worked here for ten years.",
        "By next year, she has worked here for ten years.",
        "By next year, she is working here for ten years."
      ],
      answer: "By next year, she will have worked here for ten years.",
      explanation: "Use future perfect ('will have worked') to show an action that will be completed by a future time."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I live in this town since 2010.",
        "I am living in this town since 2010.",
        "I have lived in this town since 2010.",
        "I have been live in this town since 2010."
      ],
      answer: "I have lived in this town since 2010.",
      explanation: "Use present perfect with 'since' to show an action that started in the past and continues to the present."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We have been waiting since an hour.",
        "We were waiting for an hour now.",
        "We have waited since one hour.",
        "We have been waiting for an hour."
      ],
      answer: "We have been waiting for an hour.",
      explanation: "Use 'for' with a period of time. Present perfect continuous shows that the action started in the past and is still happening."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She just has finished her homework.",
        "She has just finished her homework.",
        "She has finished just her homework.",
        "She has finished her homework just."
      ],
      answer: "She has just finished her homework.",
      explanation: "In present perfect, place 'just' between 'has' and the past participle."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We are interested on buying a house.",
        "We are interested to buy a house.",
        "We are interested in buying a house.",
        "We are interested for buying a house."
      ],
      answer: "We are interested in buying a house.",
      explanation: "The correct pattern is 'interested in' + gerund."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He is responsible of organizing the meeting.",
        "He is responsible for organizing the meeting.",
        "He is responsible to organizing the meeting.",
        "He is responsible on organizing the meeting."
      ],
      answer: "He is responsible for organizing the meeting.",
      explanation: "Use 'responsible for' + gerund or noun."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She arrived to the airport on time.",
        "She arrived at the airport on time.",
        "She arrived in the airport on time.",
        "She arrived on the airport at time."
      ],
      answer: "She arrived at the airport on time.",
      explanation: "Use 'arrive at' for small places like stations or airports, and 'on time' for punctuality."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We will go to the beach if it will not rain.",
        "We will go to the beach if it does not rain.",
        "We go to the beach if it will not rain.",
        "We go to the beach if it does not raining."
      ],
      answer: "We will go to the beach if it does not rain.",
      explanation: "In first conditional, use present simple ('does not rain') in the 'if' clause and 'will' in the main clause."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I would have called you if I would know your number.",
        "I would call you if I had known your number.",
        "I would have called you if I had known your number.",
        "I will have called you if I had known your number."
      ],
      answer: "I would have called you if I had known your number.",
      explanation: "Third conditional: 'would have' + past participle with 'if' + past perfect."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "As soon we reached the station, the train left.",
        "As soon as we reached the station, the train left.",
        "As soon as we reach the station, the train left.",
        "As soon as we reached the station, the train had left."
      ],
      answer: "As soon as we reached the station, the train left.",
      explanation: "Use 'as soon as' + past simple for two quick past actions happening one after the other."
  expert: [
    // 151-160: Sentence Improvement – Choose the best version
    {
      question: "Which sentence is the best and most correct?",
      options: [
        "Because of the heavy rain, so the game was cancelled.",
        "Because it was heavy raining, the game was cancelled.",
        "Because of the heavy rain, the game was cancelled.",
        "Because the heavy rain, the game was cancelled."
      ],
      answer: "Because of the heavy rain, the game was cancelled.",
      explanation: "Use 'Because of' + noun phrase (the heavy rain). Do not add 'so' in the result clause and avoid 'heavy raining'."
    },
    {
      question: "Choose the sentence with correct structure.",
      options: [
        "He not only passed the exam but also he got a medal.",
        "He not only passed the exam but also got a medal.",
        "He not only passed the exam but got also a medal.",
        "He passed not only the exam but also he got a medal."
      ],
      answer: "He not only passed the exam but also got a medal.",
      explanation: "In 'not only... but also' structures, keep the verb pattern parallel: 'passed' and 'got'. Do not repeat 'he' after 'but also'."
    },
    {
      question: "Which sentence has correct subject-verb agreement?",
      options: [
        "The list of names are on the table.",
        "The list of names is on the table.",
        "The lists of names is on the table.",
        "The list of names are in the table."
      ],
      answer: "The list of names is on the table.",
      explanation: "The true subject is 'list', which is singular, so we use the singular verb 'is'."
    },
    {
      question: "Combine the ideas correctly: She studied hard. She failed the test.",
      options: [
        "She studied hard, so she failed the test.",
        "She studied hard, yet she failed the test.",
        "She studied hard, because she failed the test.",
        "She studied hard, for she failed the test."
      ],
      answer: "She studied hard, yet she failed the test.",
      explanation: "'Yet' shows contrast: it is surprising that she failed even though she studied hard."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "All of the boys must bring his own lunch.",
        "All of the boys must bring their own lunch.",
        "All of the boys must brings their own lunch.",
        "All of the boys must brought their own lunch."
      ],
      answer: "All of the boys must bring their own lunch.",
      explanation: "The subject 'boys' is plural, so we use the plural pronoun 'their' and the base form 'bring' after 'must'."
    },
    {
      question: "Choose the sentence without a double negative.",
      options: [
        "I don't need no help.",
        "I don't need any help.",
        "I don't need no any help.",
        "I no need any help."
      ],
      answer: "I don't need any help.",
      explanation: "In standard English, avoid double negatives. Use 'don't' with 'any', not with 'no'."
    },
    {
      question: "Complete the sentence correctly: 'By the time we arrived, the show ____.'",
      options: [
        "finished",
        "had finished",
        "has finished",
        "was finish"
      ],
      answer: "had finished",
      explanation: "Use the past perfect 'had finished' to show an action completed before another past action."
    },
    {
      question: "Which sentence shows good parallel structure?",
      options: [
        "The job requires attention to detail, patience, and working fast.",
        "The job requires to pay attention to detail, patience, and working fast.",
        "The job requires attention to detail, patience, and the ability to work fast.",
        "The job requires attention to detail, to be patient, and working fast."
      ],
      answer: "The job requires attention to detail, patience, and the ability to work fast.",
      explanation: "All items in the list should be noun phrases: 'attention', 'patience', 'the ability'. This keeps the structure parallel."
    },
    {
      question: "Choose the correct conditional sentence.",
      options: [
        "If I will have enough money, I would buy that laptop.",
        "If I have enough money, I would buy that laptop.",
        "If I had enough money, I would buy that laptop.",
        "If I would have enough money, I buy that laptop."
      ],
      answer: "If I had enough money, I would buy that laptop.",
      explanation: "Second conditional for unreal present situations: 'If' + past simple, 'would' + base verb."
    },
    {
      question: "Which sentence uses the tenses correctly?",
      options: [
        "When I was a child, I use to walk to school.",
        "When I was a child, I used to walk to school.",
        "When I was a child, I was used to walk to school.",
        "When I was a child, I am used to walk to school."
      ],
      answer: "When I was a child, I used to walk to school.",
      explanation: "'Used to' + base verb shows a past habit that no longer happens."
    },

    // 161-170: Common error recognition (choose the correct sentence)
    {
      question: "Which sentence has no error?",
      options: [
        "She is married with a doctor.",
        "She is married to a doctor.",
        "She is marry to a doctor.",
        "She is marrying with a doctor."
      ],
      answer: "She is married to a doctor.",
      explanation: "We say 'married to someone', not 'married with someone'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I look forward to meet you.",
        "I am looking forward to meet you.",
        "I look forward to meeting you.",
        "I am looking forward meeting you."
      ],
      answer: "I look forward to meeting you.",
      explanation: "After 'look forward to', use a gerund: 'to meeting', not the base form."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He insisted to pay the bill.",
        "He insisted on paying the bill.",
        "He insisted for paying the bill.",
        "He insisted that to pay the bill."
      ],
      answer: "He insisted on paying the bill.",
      explanation: "'Insist on' is followed by a gerund: 'insisted on paying'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She said me the answer.",
        "She told to me the answer.",
        "She told me the answer.",
        "She said me the answer to."
      ],
      answer: "She told me the answer.",
      explanation: "Use 'tell someone something' or 'say something to someone'. 'Told me the answer' is correct."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I prefer coffee than tea.",
        "I prefer coffee to tea.",
        "I prefer coffee over than tea.",
        "I prefer coffee instead tea."
      ],
      answer: "I prefer coffee to tea.",
      explanation: "After 'prefer', use 'to': 'prefer A to B'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Despite of the rain, we went out.",
        "In spite the rain, we went out.",
        "Despite the rain, we went out.",
        "Despite the rain, but we went out."
      ],
      answer: "Despite the rain, we went out.",
      explanation: "Use 'Despite' + noun ('the rain') without 'of'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She is good in math.",
        "She is good on math.",
        "She is good at math.",
        "She is good with math at."
      ],
      answer: "She is good at math.",
      explanation: "The correct preposition is 'good at' for abilities."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We discussed about the problem.",
        "We discussed the problem.",
        "We discussed on the problem.",
        "We discussed for the problem."
      ],
      answer: "We discussed the problem.",
      explanation: "'Discuss' is a transitive verb; do not use 'about' after it."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He is used to get up early.",
        "He used to getting up early.",
        "He is used to getting up early.",
        "He used to getting up early now."
      ],
      answer: "He is used to getting up early.",
      explanation: "'Be used to' is followed by a noun or gerund: 'used to getting up early'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He denied to steal the money.",
        "He denied stealing the money.",
        "He denied for stealing the money.",
        "He denied that to steal the money."
      ],
      answer: "He denied stealing the money.",
      explanation: "After 'deny', use a gerund: 'denied stealing'."
    },

    // 171-180: Combining and transforming sentences
    {
      question: "Join the ideas correctly: It was raining. We went to the park.",
      options: [
        "Although it was raining, we went to the park.",
        "Because it was raining, we went to the park.",
        "It was raining so we went to the park.",
        "It was raining and we went not to the park."
      ],
      answer: "Although it was raining, we went to the park.",
      explanation: "'Although' shows contrast: we still went to the park even though it was raining."
    },
    {
      question: "Join the ideas using 'in order to': She studied hard. She wanted to pass the exam.",
      options: [
        "She studied hard in order to pass the exam.",
        "She studied hard in order pass the exam.",
        "She studied hard in order that pass the exam.",
        "She studied hard in order passing the exam."
      ],
      answer: "She studied hard in order to pass the exam.",
      explanation: "Use 'in order to' + base verb to show purpose."
    },
    {
      question: "Combine correctly using 'because': We stayed at home. It was raining.",
      options: [
        "We stayed at home because it was raining.",
        "Because was raining, we stayed at home.",
        "We stayed at home because was raining.",
        "Because it was raining so we stayed at home."
      ],
      answer: "We stayed at home because it was raining.",
      explanation: "Keep a full clause after 'because': 'because it was raining'. Do not add 'so' in the second clause."
    },
    {
      question: "Join the ideas correctly: He left early. He wanted to catch the bus.",
      options: [
        "He left early so that he could catch the bus.",
        "He left early so he can catch the bus.",
        "He left early in order that he catch the bus.",
        "He left early and he catch the bus."
      ],
      answer: "He left early so that he could catch the bus.",
      explanation: "'So that' + 'could' shows purpose in the past."
    },
    {
      question: "Combine using a relative clause: The man lives next door. He is a doctor.",
      options: [
        "The man who lives next door is a doctor.",
        "The man which lives next door is a doctor.",
        "The man where lives next door is a doctor.",
        "The man lives next door who is a doctor."
      ],
      answer: "The man who lives next door is a doctor.",
      explanation: "Use 'who' for people and place the clause directly after the noun it describes."
    },
    {
      question: "Combine using a relative clause: I bought a watch. It was very expensive.",
      options: [
        "I bought a watch who was very expensive.",
        "I bought a watch which was very expensive.",
        "I bought a watch where was very expensive.",
        "I bought a watch it was very expensive."
      ],
      answer: "I bought a watch which was very expensive.",
      explanation: "Use 'which' or 'that' for things; 'which was very expensive' describes the watch."
    },
    {
      question: "Join the ideas using 'while': I was cooking. My brother was washing the dishes.",
      options: [
        "While I was cooking, my brother was washing the dishes.",
        "While I was cooking, my brother washing the dishes.",
        "While cooking, my brother was washing the dishes.",
        "While my brother was washing the dishes, I cooking."
      ],
      answer: "While I was cooking, my brother was washing the dishes.",
      explanation: "Use 'while' + past continuous for two actions happening at the same time."
    },
    {
      question: "Change to passive voice: 'They built the bridge in 2010.'",
      options: [
        "The bridge is built in 2010.",
        "The bridge was built in 2010.",
        "The bridge has built in 2010.",
        "The bridge was build in 2010."
      ],
      answer: "The bridge was built in 2010.",
      explanation: "Past simple active becomes past simple passive: 'was built'."
    },
    {
      question: "Change to active voice: 'The letter was sent by Maria.'",
      options: [
        "Maria sends the letter.",
        "Maria is sending the letter.",
        "Maria sent the letter.",
        "Maria has sent the letter."
      ],
      answer: "Maria sent the letter.",
      explanation: "Past simple passive ('was sent') becomes past simple active ('sent')."
    },
    {
      question: "Choose the correct first conditional sentence.",
      options: [
        "If you will work hard, you will succeed.",
        "If you work hard, you will succeed.",
        "If you worked hard, you will succeed.",
        "If you work hard, you would succeed."
      ],
      answer: "If you work hard, you will succeed.",
      explanation: "First conditional: 'If' + present simple, 'will' + base verb."
    },

    // 181-190: Pronoun reference, agreement, and clarity
    {
      question: "Which sentence is clearest?",
      options: [
        "When Anna met Lisa, she smiled.",
        "When she met Lisa, Anna smiled.",
        "When Anna met Lisa, Anna smiled politely.",
        "When Anna met her, she smiled."
      ],
      answer: "When Anna met Lisa, Anna smiled politely.",
      explanation: "Repeating 'Anna' removes pronoun ambiguity and makes the sentence clear."
    },
    {
      question: "Which sentence uses the reflexive pronoun correctly?",
      options: [
        "He hurt itself while playing basketball.",
        "He hurt himself while playing basketball.",
        "He hurt hisself while playing basketball.",
        "He hurt him while playing basketball."
      ],
      answer: "He hurt himself while playing basketball.",
      explanation: "Use 'himself' as the reflexive form of 'he'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "The teacher which taught us English has retired.",
        "The teacher who taught us English has retired.",
        "The teacher whom taught us English has retired.",
        "The teacher whose taught us English has retired."
      ],
      answer: "The teacher who taught us English has retired.",
      explanation: "Use 'who' as the subject pronoun referring to a person."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Between you and I, this is a secret.",
        "Between you and me, this is a secret.",
        "Between I and you, this is a secret.",
        "Between me and you, this is a secret are."
      ],
      answer: "Between you and me, this is a secret.",
      explanation: "After a preposition like 'between', use object pronouns: 'you and me'."
    },
    {
      question: "Which sentence keeps the same point of view?",
      options: [
        "If one wants to succeed, you must work hard.",
        "If you want to succeed, one must work hard.",
        "If you want to succeed, you must work hard.",
        "If one wants to succeed, you must working hard."
      ],
      answer: "If you want to succeed, you must work hard.",
      explanation: "Do not mix 'one' and 'you' in the same sentence; keep the pronoun consistent."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "This is the book who I told you about.",
        "This is the book which I told you about.",
        "This is the book that I told you about.",
        "This is the book where I told you about."
      ],
      answer: "This is the book that I told you about.",
      explanation: "Use 'that' or 'which' for things. In exams, 'that' is commonly used in defining relative clauses."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Please give this form to whoever is in charge.",
        "Please give this form to whomever is in charge.",
        "Please give this form to who is in charge.",
        "Please give this form to whom is in charge."
      ],
      answer: "Please give this form to whoever is in charge.",
      explanation: "'Whoever' is the subject of 'is in charge', so the subject form is correct."
    },
    {
      question: "Which sentence has correct subject-verb agreement?",
      options: [
        "None of the chairs are broken.",
        "None of the chairs is broken.",
        "None of the chair are broken.",
        "None of the chair is broken."
      ],
      answer: "None of the chairs is broken.",
      explanation: "In formal exams, 'none' is often treated as singular: 'none is'. The noun after 'of' is plural: 'chairs'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Either of these roads lead to town.",
        "Either of these roads leads to town.",
        "Either of these road leads to town.",
        "Either of these road lead to town."
      ],
      answer: "Either of these roads leads to town.",
      explanation: "'Either' is singular, so use the singular verb 'leads'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Everyone in the class were given a copy.",
        "Everyone in the class was given a copy.",
        "Everyone in the class are given a copy.",
        "Everyone in the class have given a copy."
      ],
      answer: "Everyone in the class was given a copy.",
      explanation: "'Everyone' is singular, so we use the singular verb 'was'."
    },

    // 191-200: Mixed grammar (tenses, prepositions, connectors)
    {
      question: "Which sentence is correct?",
      options: [
        "By next year, she will work here for ten years.",
        "By next year, she will have worked here for ten years.",
        "By next year, she has worked here for ten years.",
        "By next year, she is working here for ten years."
      ],
      answer: "By next year, she will have worked here for ten years.",
      explanation: "Use future perfect ('will have worked') to show an action that will be completed by a future time."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I live in this town since 2010.",
        "I am living in this town since 2010.",
        "I have lived in this town since 2010.",
        "I have been live in this town since 2010."
      ],
      answer: "I have lived in this town since 2010.",
      explanation: "Use present perfect with 'since' to show an action that started in the past and continues to the present."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We have been waiting since an hour.",
        "We were waiting for an hour now.",
        "We have waited since one hour.",
        "We have been waiting for an hour."
      ],
      answer: "We have been waiting for an hour.",
      explanation: "Use 'for' with a period of time. Present perfect continuous shows that the action started in the past and is still happening."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She just has finished her homework.",
        "She has just finished her homework.",
        "She has finished just her homework.",
        "She has finished her homework just."
      ],
      answer: "She has just finished her homework.",
      explanation: "In present perfect, place 'just' between 'has' and the past participle."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We are interested on buying a house.",
        "We are interested to buy a house.",
        "We are interested in buying a house.",
        "We are interested for buying a house."
      ],
      answer: "We are interested in buying a house.",
      explanation: "The correct pattern is 'interested in' + gerund."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He is responsible of organizing the meeting.",
        "He is responsible for organizing the meeting.",
        "He is responsible to organizing the meeting.",
        "He is responsible on organizing the meeting."
      ],
      answer: "He is responsible for organizing the meeting.",
      explanation: "Use 'responsible for' + gerund or noun."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She arrived to the airport on time.",
        "She arrived at the airport on time.",
        "She arrived in the airport on time.",
        "She arrived on the airport at time."
      ],
      answer: "She arrived at the airport on time.",
      explanation: "Use 'arrive at' for small places like stations or airports, and 'on time' for punctuality."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We will go to the beach if it will not rain.",
        "We will go to the beach if it does not rain.",
        "We go to the beach if it will not rain.",
        "We go to the beach if it does not raining."
      ],
      answer: "We will go to the beach if it does not rain.",
      explanation: "In first conditional, use present simple ('does not rain') in the 'if' clause and 'will' in the main clause."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I would have called you if I would know your number.",
        "I would call you if I had known your number.",
        "I would have called you if I had known your number.",
        "I will have called you if I had known your number."
      ],
      answer: "I would have called you if I had known your number.",
      explanation: "Third conditional: 'would have' + past participle with 'if' + past perfect."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "As soon we reached the station, the train left.",
        "As soon as we reached the station, the train left.",
        "As soon as we reach the station, the train left.",
        "As soon as we reached the station, the train had left."
      ],
      answer: "As soon as we reached the station, the train left.",
      explanation: "Use 'as soon as' + past simple for two quick past actions happening one after the other."
    }
  ]
};
