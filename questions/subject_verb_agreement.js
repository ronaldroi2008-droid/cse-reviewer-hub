// questions/subject_verb_agreement.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["subject_verb_agreement"] = {

  beginner: [
    // 1-10: Basic Singular Subjects
    {
      question: "She ____ to the store every day.",
      options: ["walk", "walks", "walking", "walked"],
      answer: "walks",
      explanation: "The subject 'She' is singular (one person). In the present tense, singular subjects take an 's' on the verb. She walks."
    },
    {
      question: "The dog ____ loudly.",
      options: ["bark", "barks", "barking", "barked"],
      answer: "barks",
      explanation: "The subject 'dog' is singular (it). Therefore, the verb must have an 's'. The dog barks."
    },
    {
      question: "My brother ____ a new car.",
      options: ["have", "has", "having", "had"],
      answer: "has",
      explanation: "'My brother' is singular (He). 'He' uses 'has', while 'I/You/We/They' use 'have'."
    },
    {
      question: "John ____ playing soccer.",
      options: ["like", "likes", "liking", "liked"],
      answer: "likes",
      explanation: "John is one person (He). Singular subjects need the verb with 's'. John likes."
    },
    {
      question: "The cat ____ on the sofa.",
      options: ["sleep", "sleeps", "sleeping", "slept"],
      answer: "sleeps",
      explanation: "Singular subject 'cat' requires the singular verb 'sleeps'."
    },
    {
      question: "It ____ raining outside.",
      options: ["is", "are", "am", "be"],
      answer: "is",
      explanation: "The subject 'It' always pairs with 'is'. We say 'It is', not 'It are'."
    },
    {
      question: "He ____ very tall.",
      options: ["is", "are", "am", "be"],
      answer: "is",
      explanation: "Subject 'He' takes 'is'."
    },
    {
      question: "The teacher ____ on the board.",
      options: ["write", "writes", "writing", "written"],
      answer: "writes",
      explanation: "The teacher (one person) writes."
    },
    {
      question: "My mother ____ delicious food.",
      options: ["cook", "cooks", "cooking", "cooked"],
      answer: "cooks",
      explanation: "Subject 'My mother' is singular. She cooks."
    },
    {
      question: "The sun ____ in the east.",
      options: ["rise", "rises", "rising", "rose"],
      answer: "rises",
      explanation: "The sun (it) is singular. It rises."
    },

    // 11-20: Basic Plural Subjects
    {
      question: "They ____ ready to leave.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "The subject 'They' is plural. Plural subjects take 'are'."
    },
    {
      question: "The birds ____ in the sky.",
      options: ["fly", "flies", "flying", "flew"],
      answer: "fly",
      explanation: "The subject 'birds' is plural. Plural nouns take the base form of the verb (no 's'). The birds fly."
    },
    {
      question: "We ____ help with our homework.",
      options: ["need", "needs", "needing", "needed"],
      answer: "need",
      explanation: "'We' is plural. We do NOT add 's' to the verb. We need."
    },
    {
      question: "The cars ____ fast.",
      options: ["go", "goes", "going", "gone"],
      answer: "go",
      explanation: "Subject 'cars' is plural. They go."
    },
    {
      question: "My friends ____ here.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "Subject 'friends' is plural. They are here."
    },
    {
      question: "Dogs ____ bones.",
      options: ["love", "loves", "loving", "loved"],
      answer: "love",
      explanation: "Plural subject 'Dogs' takes the plural verb 'love' (no 's')."
    },
    {
      question: "The students ____ hard.",
      options: ["study", "studies", "studying", "studied"],
      answer: "study",
      explanation: "Plural subject 'students'. They study."
    },
    {
      question: "Parents ____ the best for their children.",
      options: ["want", "wants", "wanting", "wanted"],
      answer: "want",
      explanation: "Plural subject 'Parents'. They want."
    },
    {
      question: "Stars ____ at night.",
      options: ["shine", "shines", "shining", "shone"],
      answer: "shine",
      explanation: "Plural subject 'Stars'. They shine."
    },
    {
      question: "Apples ____ healthy.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "Plural subject 'Apples'. They are."
    },

    // 21-30: 'I' and 'You' Rules
    {
      question: "I ____ a student.",
      options: ["is", "are", "am", "be"],
      answer: "am",
      explanation: "The subject 'I' is special. It is the only subject that takes 'am'."
    },
    {
      question: "You ____ my best friend.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "The subject 'You' ALWAYS takes the plural verb 'are', even if you are talking to just one person."
    },
    {
      question: "I ____ to read books.",
      options: ["like", "likes", "liking", "liked"],
      answer: "like",
      explanation: "Although 'I' is one person, grammatically it follows the plural rule for action verbs. I like (not likes)."
    },
    {
      question: "You ____ beautiful.",
      options: ["look", "looks", "looking", "looked"],
      answer: "look",
      explanation: "'You' follows the plural rule. You look (not looks)."
    },
    {
      question: "I ____ breakfast every morning.",
      options: ["eat", "eats", "eating", "ate"],
      answer: "eat",
      explanation: "I eat."
    },
    {
      question: "Do you ____ coffee?",
      options: ["drink", "drinks", "drinking", "drank"],
      answer: "drink",
      explanation: "You drink."
    },
    {
      question: "I ____ have any money.",
      options: ["doesn't", "don't", "not", "no"],
      answer: "don't",
      explanation: "'I' uses 'do not' (don't). 'He/She/It' uses 'does not'."
    },
    {
      question: "You ____ late.",
      options: ["was", "were", "is", "am"],
      answer: "were",
      explanation: "'You' always takes the plural form, even in the past tense. You were."
    },
    {
      question: "I ____ happy yesterday.",
      options: ["was", "were", "is", "are"],
      answer: "was",
      explanation: "In the past tense, 'I' takes the singular 'was'."
    },
    {
      question: "You ____ perform well.",
      options: ["does", "do", "doing", "done"],
      answer: "do",
      explanation: "You do."
    },

    // 31-40: Do/Does and Has/Have
    {
      question: "He ____ not know the answer.",
      options: ["do", "does", "doing", "done"],
      answer: "does",
      explanation: "Singular 'He' uses 'does'."
    },
    {
      question: "They ____ not care.",
      options: ["do", "does", "doing", "done"],
      answer: "do",
      explanation: "Plural 'They' uses 'do'."
    },
    {
      question: "She ____ a lot of homework.",
      options: ["have", "has", "having", "had"],
      answer: "has",
      explanation: "Singular 'She' uses 'has'."
    },
    {
      question: "We ____ a meeting today.",
      options: ["have", "has", "having", "had"],
      answer: "have",
      explanation: "Plural 'We' uses 'have'."
    },
    {
      question: "It ____ not matter.",
      options: ["do", "does", "doing", "done"],
      answer: "does",
      explanation: "Singular 'It' uses 'does'."
    },
    {
      question: "____ you have a pen?",
      options: ["Do", "Does", "Doing", "Done"],
      answer: "Do",
      explanation: "Subject 'you' uses 'Do'."
    },
    {
      question: "____ she live here?",
      options: ["Do", "Does", "Doing", "Done"],
      answer: "Does",
      explanation: "Subject 'she' uses 'Does'."
    },
    {
      question: "The car ____ not start.",
      options: ["do", "does", "doing", "done"],
      answer: "does",
      explanation: "The car (it) does not start."
    },
    {
      question: "We ____ done our work.",
      options: ["has", "have", "having", "had"],
      answer: "have",
      explanation: "We have."
    },
    {
      question: "John ____ a question.",
      options: ["has", "have", "having", "had"],
      answer: "has",
      explanation: "John (he) has."
    },

    // 41-50: Identifying Subject-Verb Pairs
    {
      question: "The boys in the room ____.",
      options: ["plays", "play", "playing", "played"],
      answer: "play",
      explanation: "The subject is 'boys' (plural), not 'room'. So, the boys play."
    },
    {
      question: "The flower in the pot ____.",
      options: ["grow", "grows", "growing", "grew"],
      answer: "grows",
      explanation: "The subject is 'flower' (singular). The flower grows."
    },
    {
      question: "My sisters ____ tall.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "Subject 'sisters' is plural. They are."
    },
    {
      question: "The baby ____.",
      options: ["cry", "cries", "crying", "cried"],
      answer: "cries",
      explanation: "Subject 'baby' is singular. The baby cries."
    },
    {
      question: "The computer ____ working.",
      options: ["is", "are", "am", "be"],
      answer: "is",
      explanation: "Subject 'computer' is singular. Is."
    },
    {
      question: "The keys ____ on the table.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "Subject 'keys' is plural. Are."
    },
    {
      question: "A banana ____ yellow.",
      options: ["is", "are", "am", "be"],
      answer: "is",
      explanation: "One banana. Is."
    },
    {
      question: "Bananas ____ sweet.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "Plural bananas. Are."
    },
    {
      question: "The water ____ cold.",
      options: ["is", "are", "am", "be"],
      answer: "is",
      explanation: "Water is uncountable (singular). It is cold."
    },
    {
      question: "The door ____ open.",
      options: ["is", "are", "am", "be"],
      answer: "is",
      explanation: "One door. Is."
    }
  ],

  intermediate: [
    // 1-10: Compound Subjects (And)
    {
      question: "John and Mary ____ coming to dinner.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "When two subjects are connected by 'and' (John + Mary = They), the subject becomes plural. We use 'are'."
    },
    {
      question: "The dog and the cat ____ fighting.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Dog + Cat = Plural. They are fighting."
    },
    {
      question: "Bread and butter ____ my favorite breakfast.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Exception! 'Bread and butter' is considered a single dish/unit, so it takes the singular verb 'is'."
    },
    {
      question: "The teacher and the student ____ talking.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Two people = Plural. Are."
    },
    {
      question: "Pen and paper ____ needed for the exam.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Two separate items = Plural. Are."
    },
    {
      question: "My brother and I ____ twins.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "My brother + I = We. 'We' takes 'are'."
    },
    {
      question: "Gold and silver ____ precious metals.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Two different things = Plural. Are."
    },
    {
      question: "Fish and chips ____ a popular meal.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Exception! Like bread and butter, 'Fish and chips' is considered one meal. Is."
    },
    {
      question: "Fire and water ____ not mix.",
      options: ["do", "does", "doing", "done"],
      answer: "do",
      explanation: "Two things. They do not mix."
    },
    {
      question: "The sun and the moon ____ bright.",
      options: ["shine", "shines", "shining", "shone"],
      answer: "shine",
      explanation: "Plural subject. They shine."
    },

    // 11-20: Intervening Phrases
    {
      question: "The box of chocolates ____ on the table.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Ignore the phrase 'of chocolates'. The true subject is 'The box' (singular). The box is."
    },
    {
      question: "The players on the team ____ tired.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Ignore 'on the team'. The subject is 'players' (plural). The players are."
    },
    {
      question: "The man with the dogs ____ walking.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Ignore 'with the dogs'. The subject is 'The man' (singular). The man is."
    },
    {
      question: "The colors of the rainbow ____ beautiful.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Subject is 'colors' (plural). The colors are."
    },
    {
      question: "One of the boys ____ missing.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "The subject is 'One' (singular). Ignore 'of the boys'. One is missing."
    },
    {
      question: "The paintings in the museum ____ old.",
      options: ["look", "looks", "looking", "looked"],
      answer: "look",
      explanation: "Subject is 'paintings' (plural). They look."
    },
    {
      question: "The bag of apples ____ heavy.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject is 'bag' (singular). The bag is."
    },
    {
      question: "The windows in the house ____ dirty.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Subject is 'windows' (plural). They are."
    },
    {
      question: "The leader of the wolves ____ howling.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject is 'leader' (singular). The leader is."
    },
    {
      question: "The books on the shelf ____ dusty.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Subject is 'books' (plural). They are."
    },

    // 21-30: Indefinite Pronouns (Singular)
    {
      question: "Everyone ____ here.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Everyone' sounds like a lot of people, but grammatically it is SINGULAR. Everyone is."
    },
    {
      question: "Someone ____ knocking at the door.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Someone' is singular. Someone is."
    },
    {
      question: "Nobody ____ the answer.",
      options: ["know", "knows", "knowing", "known"],
      answer: "knows",
      explanation: "'Nobody' is singular. Nobody knows."
    },
    {
      question: "Each of the students ____ a book.",
      options: ["have", "has", "having", "had"],
      answer: "has",
      explanation: "'Each' is singular. Each has."
    },
    {
      question: "Either of the plans ____ fine.",
      options: ["work", "works", "working", "worked"],
      answer: "works",
      explanation: "'Either' (when acting as a subject) is singular. Either works."
    },
    {
      question: "Neither of them ____ to go.",
      options: ["want", "wants", "wanting", "wanted"],
      answer: "wants",
      explanation: "'Neither' (as a subject) is singular. Neither wants."
    },
    {
      question: "Something ____ wrong.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Something' is singular. Something is."
    },
    {
      question: "Everything ____ ready.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Everything' is singular. Everything is."
    },
    {
      question: "Anyone ____ welcome to join.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Anyone' is singular. Anyone is."
    },
    {
      question: "Each child ____ a gift.",
      options: ["get", "gets", "getting", "got"],
      answer: "gets",
      explanation: "'Each' is singular. Each gets."
    },

    // 31-40: Indefinite Pronouns (Plural/Variable)
    {
      question: "Few ____ passed the exam.",
      options: ["has", "have", "having", "had"],
      answer: "have",
      explanation: "'Few' is plural (meaning not many, but some). Few have."
    },
    {
      question: "Many ____ called, but few are chosen.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Many' is plural. Many are."
    },
    {
      question: "Several ____ waiting outside.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Several' is plural. Several are."
    },
    {
      question: "Both ____ happy with the result.",
      options: ["seem", "seems", "seeming", "seemed"],
      answer: "seem",
      explanation: "'Both' refers to two, so it is plural. Both seem."
    },
    {
      question: "All of the cake ____ gone.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Variable! 'All' depends on what it refers to. Here, 'cake' is singular/uncountable. So, All is."
    },
    {
      question: "All of the cookies ____ gone.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Here, 'All' refers to 'cookies' (plural). So, All are."
    },
    {
      question: "Some of the water ____ spilled.",
      options: ["was", "were", "are", "be"],
      answer: "was",
      explanation: "'Water' is uncountable. Some was."
    },
    {
      question: "Some of the students ____ absent.",
      options: ["was", "were", "is", "am"],
      answer: "were",
      explanation: "'Students' is plural. Some were."
    },
    {
      question: "Most of the work ____ done.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Work' is uncountable. Most is."
    },
    {
      question: "Most of the people ____ agree.",
      options: ["doesn't", "don't", "not", "no"],
      answer: "don't",
      explanation: "'People' is plural. Most don't."
    },

    // 41-50: Here and There
    {
      question: "There ____ a dog in the garden.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "In 'There' sentences, the subject comes AFTER the verb. Subject is 'dog' (singular). There is."
    },
    {
      question: "There ____ two cats on the roof.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Subject is 'two cats' (plural). There are."
    },
    {
      question: "Here ____ the bus.",
      options: ["come", "comes", "coming", "came"],
      answer: "comes",
      explanation: "Subject is 'the bus' (singular). Here comes the bus."
    },
    {
      question: "Here ____ your keys.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Subject is 'keys' (plural). Here are."
    },
    {
      question: "There ____ many reasons to stay.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Subject is 'reasons' (plural). There are."
    },
    {
      question: "There ____ no water left.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject is 'water' (uncountable/singular). There is."
    },
    {
      question: "Here ____ the list of names.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject is 'list' (singular), not 'names'. Here is the list."
    },
    {
      question: "There ____ been a mistake.",
      options: ["has", "have", "having", "had"],
      answer: "has",
      explanation: "Subject is 'mistake' (singular). There has been."
    },
    {
      question: "There ____ a lot of people here.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Subject is 'people' (plural). There are."
    },
    {
      question: "Here ____ the documents you asked for.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Subject is 'documents' (plural). Here are."
    }
  ],

  advanced: [
    // 1-10: Collective Nouns
    {
      question: "The team ____ winning the game.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "When the group acts as one single unit, we use a singular verb. The team is."
    },
    {
      question: "The team ____ arguing among themselves.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Because they are arguing 'among themselves', they are acting as individuals, not a unit. We use the plural. The team are."
    },
    {
      question: "The family ____ on vacation.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Acting as one unit. The family is."
    },
    {
      question: "The jury ____ reached a verdict.",
      options: ["has", "have", "having", "had"],
      answer: "has",
      explanation: "Acting as one unit to give one verdict. The jury has."
    },
    {
      question: "The jury ____ divided in their opinions.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "They are divided (individuals thinking differently). The jury are."
    },
    {
      question: "The crowd ____ shouting loudly.",
      options: ["was", "were", "are", "be"],
      answer: "was",
      explanation: "Acting as one big entity. The crowd was."
    },
    {
      question: "The staff ____ in a meeting.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Standard American usage treats 'staff' as singular when acting as a body. The staff is."
    },
    {
      question: "The class ____ listening to the teacher.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Acting as a unit. The class is."
    },
    {
      question: "A flock of birds ____ flying south.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject is 'flock' (singular), not 'birds'. The flock is."
    },
    {
      question: "The committee ____ decided to proceed.",
      options: ["has", "have", "having", "had"],
      answer: "has",
      explanation: "Acting as one body. The committee has."
    },

    // 11-20: 'Or', 'Nor', 'Neither/Nor' (Proximity Rule)
    {
      question: "Neither John nor his friends ____ going.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Rule of Proximity: Look at the subject CLOSER to the verb. 'Friends' is plural. So, are."
    },
    {
      question: "Neither his friends nor John ____ going.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Rule of Proximity: 'John' is closer to the verb and is singular. So, is."
    },
    {
      question: "Either the teacher or the students ____ to blame.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Students' is closer. Are."
    },
    {
      question: "Either the students or the teacher ____ to blame.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Teacher' is closer. Is."
    },
    {
      question: "My mom or my dad ____ picking me up.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Dad' is closer (Singular). Is."
    },
    {
      question: "The cat or the dogs ____ making noise.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Dogs' is closer. Are."
    },
    {
      question: "Neither the plates nor the bowl ____ clean.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Bowl' is closer (Singular). Is."
    },
    {
      question: "Neither the bowl nor the plates ____ clean.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Plates' is closer (Plural). Are."
    },
    {
      question: "Not only the students but also the teacher ____ excited.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Same rule applies to 'Not only... but also'. 'Teacher' is closer. Is."
    },
    {
      question: "Not only the teacher but also the students ____ excited.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Students' is closer. Are."
    },

    // 21-30: Amounts, Distances, Time, Money
    {
      question: "Ten dollars ____ a high price to pay.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Money, even if plural dollars, is treated as a single amount/unit. Is."
    },
    {
      question: "Five miles ____ a long way to walk.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Distance is treated as a single unit of measurement. Is."
    },
    {
      question: "Three hours ____ enough time.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Time periods are singular. Is."
    },
    {
      question: "Fifty percent of the pie ____ missing.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Pie is singular. Half of it is still singular. Is."
    },
    {
      question: "Fifty percent of the pies ____ missing.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Pies are plural. Half of them are plural. Are."
    },
    {
      question: "Two weeks ____ not enough vacation.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Time period = Singular. Is."
    },
    {
      question: "Seven years ____ a long time.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Time period = Singular. Is."
    },
    {
      question: "One hundred pesos ____ on the table.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Amount of money = Singular. Is."
    },
    {
      question: "Three kilometers ____ the distance to the school.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Distance = Singular. Is."
    },
    {
      question: "Four liters of water ____ required.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Volume/Measurement = Singular. Is."
    },

    // 31-40: Relative Pronouns (Who/Which/That)
    {
      question: "The student who ____ hard succeeds.",
      options: ["work", "works", "working", "worked"],
      answer: "works",
      explanation: "'Who' refers to 'student' (singular). So the verb must be singular. Works."
    },
    {
      question: "The students who ____ hard succeed.",
      options: ["work", "works", "working", "worked"],
      answer: "work",
      explanation: "'Who' refers to 'students' (plural). So the verb must be plural. Work."
    },
    {
      question: "He is one of the men who ____ here.",
      options: ["work", "works", "working", "worked"],
      answer: "work",
      explanation: "Tricky! 'Who' refers to 'men' (plural). He is one of the [men who work]. Work."
    },
    {
      question: "The book that ____ on the table is mine.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'That' refers to 'book' (singular). Is."
    },
    {
      question: "The books that ____ on the table are mine.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'That' refers to 'books' (plural). Are."
    },
    {
      question: "It is I who ____ to blame.",
      options: ["is", "are", "am", "be"],
      answer: "am",
      explanation: "Very formal but correct. 'Who' refers to 'I'. 'I' takes 'am'. It is I who am..."
    },
    {
      question: "It is you who ____ right.",
      options: ["is", "are", "am", "be"],
      answer: "are",
      explanation: "'Who' refers to 'you'. 'You' takes 'are'."
    },
    {
      question: "The dog which ____ barking is mine.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Which' refers to 'dog'. Is."
    },
    {
      question: "The dogs which ____ barking are mine.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Which' refers to 'dogs'. Are."
    },
    {
      question: "She is the only one of the girls who ____ Spanish.",
      options: ["speak", "speaks", "speaking", "spoken"],
      answer: "speaks",
      explanation: "Exception! 'THE only one'. This specifies her specifically, not the group. Speaks."
    },

    // 41-50: Titles and Gerunds
    {
      question: "'Romeo and Juliet' ____ a famous play.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Titles of books/movies are singular, even if they contain plural words. Is."
    },
    {
      question: "'Star Wars' ____ my favorite movie.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Title = Singular. Is."
    },
    {
      question: "Reading books ____ fun.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "The subject is 'Reading' (Gerund/Activity), which is singular. Is."
    },
    {
      question: "Playing video games ____ time.",
      options: ["take", "takes", "taking", "took"],
      answer: "takes",
      explanation: "Subject is 'Playing' (Singular). Takes."
    },
    {
      question: "Swimming and running ____ good exercises.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Two different activities joined by 'and'. Are."
    },
    {
      question: "'The Avengers' ____ an action movie.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Title = Singular. Is."
    },
    {
      question: "Eating vegetables ____ healthy.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject is 'Eating'. Is."
    },
    {
      question: "Waiting for buses ____ annoying.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject is 'Waiting'. Is."
    },
    {
      question: "'A Tale of Two Cities' ____ a classic.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Titles of books are treated as singular."
    },
    {
      question: "Listening to music ____ me relax.",
      options: ["help", "helps", "helping", "helped"],
      answer: "helps",
      explanation: "Subject is 'Listening'. Helps."
    }
  ],

  expert: [
    // 1-10: Tricky Singular Nouns ending in 'S'
    {
      question: "Physics ____ a difficult subject.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Nouns like Physics, Mathematics, Economics end in 's' but are Singular. Is."
    },
    {
      question: "Mathematics ____ my favorite class.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject = Singular. Is."
    },
    {
      question: "The news ____ shocking.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'News' is always singular. Is."
    },
    {
      question: "Measles ____ a contagious disease.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Diseases ending in 's' are singular. Is."
    },
    {
      question: "Gymnastics ____ require strength.",
      options: ["do", "does", "doing", "done"],
      answer: "does",
      explanation: "Activity/Sport = Singular. Does."
    },
    {
      question: "Politics ____ a dirty game.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Field of study/concept = Singular. Is."
    },
    {
      question: "Diabetes ____ common.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Disease = Singular. Is."
    },
    {
      question: "Economics ____ interesting.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Subject = Singular. Is."
    },
    {
      question: "Billiards ____ played on a table.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Game = Singular. Is."
    },
    {
      question: "The United States ____ a large country.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Country name = Singular. Is."
    },

    // 11-20: Tricky Plural Nouns (Always Plural)
    {
      question: "The scissors ____ sharp.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Tools with two parts (scissors, pliers) are always plural. Are."
    },
    {
      question: "My trousers ____ torn.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Clothing with two legs (pants, trousers, jeans) are plural. Are."
    },
    {
      question: "The police ____ coming.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Police' is a collective noun that is always treated as plural. Are."
    },
    {
      question: "Her glasses ____ broken.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Eyeglasses = Plural. Are."
    },
    {
      question: "The cattle ____ grazing.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Cattle' is always plural. Are."
    },
    {
      question: "The goods ____ being shipped.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Goods' (merchandise) is plural. Are."
    },
    {
      question: "Where ____ my pliers?",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Tool with two parts = Plural. Are."
    },
    {
      question: "My jeans ____ blue.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Jeans = Plural. Are."
    },
    {
      question: "The binoculars ____ expensive.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Two lenses = Plural. Are."
    },
    {
      question: "Thanks ____ due to him.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Thanks' is treated as a plural noun here. Are."
    },

    // 21-30: 'The Number' vs 'A Number' & Adjectives as Nouns
    {
      question: "A number of students ____ absent.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Rule: 'A number of' = Many (Plural). Are."
    },
    {
      question: "The number of students ____ increasing.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "Rule: 'The number of' = The specific count (Singular). Is."
    },
    {
      question: "The rich ____ not always happy.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "When using 'The + Adjective' to mean a group of people, it is plural. The rich (people) are."
    },
    {
      question: "The poor ____ in need of help.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "The poor (people) are."
    },
    {
      question: "The injured ____ taken to the hospital.",
      options: ["was", "were", "is", "am"],
      answer: "were",
      explanation: "The injured (people) were."
    },
    {
      question: "The blind ____ Braille.",
      options: ["use", "uses", "using", "used"],
      answer: "use",
      explanation: "The blind (people) use."
    },
    {
      question: "A number of cars ____ parked outside.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'A number of' = Plural. Are."
    },
    {
      question: "The number of cars ____ small.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'The number' = Singular. Is."
    },
    {
      question: "The young ____ the future.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "The young (people) are."
    },
    {
      question: "The elderly ____ respect.",
      options: ["need", "needs", "needing", "needed"],
      answer: "need",
      explanation: "The elderly (people) need."
    },

    // 31-40: Foreign Plurals and Oddities
    {
      question: "The data ____ accurate.",
      options: ["is", "are", "was", "am"],
      answer: "are",
      explanation: "Strictly speaking, 'Data' is the plural of 'Datum'. In academic tests, 'Data are' is often required."
    },
    {
      question: "The criteria ____ strict.",
      options: ["is", "are", "was", "am"],
      answer: "are",
      explanation: "'Criteria' is plural (Singular: Criterion). Are."
    },
    {
      question: "The alumni ____ meeting here.",
      options: ["is", "are", "was", "am"],
      answer: "are",
      explanation: "'Alumni' is plural (graduates). Are."
    },
    {
      question: "The fungi ____ growing.",
      options: ["is", "are", "was", "am"],
      answer: "are",
      explanation: "'Fungi' is plural (Singular: Fungus). Are."
    },
    {
      question: "The media ____ covering the event.",
      options: ["is", "are", "was", "am"],
      answer: "are",
      explanation: "'Media' is the plural of 'Medium'. Are."
    },
    {
      question: "The phenomenon ____ rare.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Phenomenon' is singular. Is."
    },
    {
      question: "The phenomena ____ rare.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Phenomena' is the plural of Phenomenon. Are."
    },
    {
      question: "The bacteria ____ harmful.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Bacteria' is plural (Singular: Bacterium). Are."
    },
    {
      question: "The analysis ____ complete.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Analysis' is singular. Is."
    },
    {
      question: "The analyses ____ complete.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "'Analyses' (pronounced -seez) is plural. Are."
    },

    // 41-50: Subjunctive Mood and Inverted Sentences
    {
      question: "I wish I ____ richer.",
      options: ["was", "were", "is", "am"],
      answer: "were",
      explanation: "Subjunctive Mood: When wishing for something untrue, use 'were' instead of 'was', even for 'I'."
    },
    {
      question: "If he ____ here, he would help.",
      options: ["was", "were", "is", "am"],
      answer: "were",
      explanation: "Subjunctive: Hypothetical situation. Were."
    },
    {
      question: "I suggest that he ____ early.",
      options: ["leave", "leaves", "leaving", "left"],
      answer: "leave",
      explanation: "Subjunctive (Command/Suggestion): Use the base form. That he leave."
    },
    {
      question: "It is important that she ____ present.",
      options: ["be", "is", "are", "was"],
      answer: "be",
      explanation: "Subjunctive: Use base form 'be'."
    },
    {
      question: "She requested that John ____ the meeting.",
      options: ["attend", "attends", "attending", "attended"],
      answer: "attend",
      explanation: "Subjunctive: Base form 'attend'."
    },
    {
      question: "Behind the house ____ two trees.",
      options: ["stand", "stands", "standing", "stood"],
      answer: "stand",
      explanation: "Inverted sentence! The subject is 'two trees' (plural), not 'house'. The trees stand."
    },
    {
      question: "Under the bed ____ a monster.",
      options: ["live", "lives", "living", "lived"],
      answer: "lives",
      explanation: "Inverted: Subject is 'monster' (singular). Lives."
    },
    {
      question: "Never ____ I seen such a thing.",
      options: ["has", "have", "having", "had"],
      answer: "have",
      explanation: "Inverted: Subject is 'I'. Have."
    },
    {
      question: "Beside the river ____ three large rocks.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Inverted: Subject is 'rocks' (plural). Are."
    },
    {
      question: "Into the room ____ the teacher.",
      options: ["walk", "walks", "walking", "walked"],
      answer: "walks",
      explanation: "Inverted: Subject is 'teacher' (singular). Walks."
    }
  ]
};
