const SUBJECT_VERB_AGREEMENT_QUESTIONS = {
  beginner: [
    // 1-10: Basic Singular Subjects (He/She/It/Names)
    { question: "She ____ to the store every day.", choices: ["walk", "walks", "walking", "walked"], correctIndex: 1, explanation: "The subject 'She' is singular (one person). In the present tense, singular subjects take an 's' on the verb. She walks." },
    { question: "The dog ____ loudly.", choices: ["bark", "barks", "barking", "barked"], correctIndex: 1, explanation: "The subject 'dog' is singular (it). Therefore, the verb must have an 's'. The dog barks." },
    { question: "My brother ____ a new car.", choices: ["have", "has", "having", "had"], correctIndex: 1, explanation: "'My brother' is singular (He). 'He' uses 'has', while 'I/You/We/They' use 'have'." },
    { question: "John ____ playing soccer.", choices: ["like", "likes", "liking", "liked"], correctIndex: 1, explanation: "John is one person (He). Singular subjects need the verb with 's'. John likes." },
    { question: "The cat ____ on the sofa.", choices: ["sleep", "sleeps", "sleeping", "slept"], correctIndex: 1, explanation: "Singular subject 'cat' requires the singular verb 'sleeps'." },
    { question: "It ____ raining outside.", choices: ["is", "are", "am", "be"], correctIndex: 0, explanation: "The subject 'It' always pairs with 'is'. We say 'It is', not 'It are'." },
    { question: "He ____ very tall.", choices: ["is", "are", "am", "be"], correctIndex: 0, explanation: "Subject 'He' takes 'is'." },
    { question: "The teacher ____ on the board.", choices: ["write", "writes", "writing", "written"], correctIndex: 1, explanation: "The teacher (one person) writes." },
    { question: "My mother ____ delicious food.", choices: ["cook", "cooks", "cooking", "cooked"], correctIndex: 1, explanation: "Subject 'My mother' is singular. She cooks." },
    { question: "The sun ____ in the east.", choices: ["rise", "rises", "rising", "rose"], correctIndex: 1, explanation: "The sun (it) is singular. It rises." },

    // 11-20: Basic Plural Subjects (We/They/Plural Nouns)
    { question: "They ____ ready to leave.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "The subject 'They' is plural. Plural subjects take 'are'." },
    { question: "The birds ____ in the sky.", choices: ["fly", "flies", "flying", "flew"], correctIndex: 0, explanation: "The subject 'birds' is plural. Plural nouns take the base form of the verb (no 's'). The birds fly." },
    { question: "We ____ help with our homework.", choices: ["need", "needs", "needing", "needed"], correctIndex: 0, explanation: "'We' is plural. We do NOT add 's' to the verb. We need." },
    { question: "The cars ____ fast.", choices: ["go", "goes", "going", "gone"], correctIndex: 0, explanation: "Subject 'cars' is plural. They go." },
    { question: "My friends ____ here.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "Subject 'friends' is plural. They are here." },
    { question: "Dogs ____ bones.", choices: ["love", "loves", "loving", "loved"], correctIndex: 0, explanation: "Plural subject 'Dogs' takes the plural verb 'love' (no 's')." },
    { question: "The students ____ hard.", choices: ["study", "studies", "studying", "studied"], correctIndex: 0, explanation: "Plural subject 'students'. They study." },
    { question: "Parents ____ the best for their children.", choices: ["want", "wants", "wanting", "wanted"], correctIndex: 0, explanation: "Plural subject 'Parents'. They want." },
    { question: "Stars ____ at night.", choices: ["shine", "shines", "shining", "shone"], correctIndex: 0, explanation: "Plural subject 'Stars'. They shine." },
    { question: "Apples ____ healthy.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "Plural subject 'Apples'. They are." },

    // 21-30: 'I' and 'You' Rules
    { question: "I ____ a student.", choices: ["is", "are", "am", "be"], correctIndex: 2, explanation: "The subject 'I' is special. It is the only subject that takes 'am'." },
    { question: "You ____ my best friend.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "The subject 'You' ALWAYS takes the plural verb 'are', even if you are talking to just one person." },
    { question: "I ____ to read books.", choices: ["like", "likes", "liking", "liked"], correctIndex: 0, explanation: "Although 'I' is one person, grammatically it follows the plural rule for action verbs. I like (not likes)." },
    { question: "You ____ beautiful.", choices: ["look", "looks", "looking", "looked"], correctIndex: 0, explanation: "'You' follows the plural rule. You look (not looks)." },
    { question: "I ____ breakfast every morning.", choices: ["eat", "eats", "eating", "ate"], correctIndex: 0, explanation: "I eat." },
    { question: "Do you ____ coffee?", choices: ["drink", "drinks", "drinking", "drank"], correctIndex: 0, explanation: "You drink." },
    { question: "I ____ have any money.", choices: ["doesn't", "don't", "not", "no"], correctIndex: 1, explanation: "'I' uses 'do not' (don't). 'He/She/It' uses 'does not'." },
    { question: "You ____ late.", choices: ["was", "were", "is", "am"], correctIndex: 1, explanation: "'You' always takes the plural form, even in the past tense. You were." },
    { question: "I ____ happy yesterday.", choices: ["was", "were", "is", "are"], correctIndex: 0, explanation: "In the past tense, 'I' takes the singular 'was'." },
    { question: "You ____ perform well.", choices: ["does", "do", "doing", "done"], correctIndex: 1, explanation: "You do." },

    // 31-40: Do/Does and Has/Have
    { question: "He ____ not know the answer.", choices: ["do", "does", "doing", "done"], correctIndex: 1, explanation: "Singular 'He' uses 'does'." },
    { question: "They ____ not care.", choices: ["do", "does", "doing", "done"], correctIndex: 0, explanation: "Plural 'They' uses 'do'." },
    { question: "She ____ a lot of homework.", choices: ["have", "has", "having", "had"], correctIndex: 1, explanation: "Singular 'She' uses 'has'." },
    { question: "We ____ a meeting today.", choices: ["have", "has", "having", "had"], correctIndex: 0, explanation: "Plural 'We' uses 'have'." },
    { question: "It ____ not matter.", choices: ["do", "does", "doing", "done"], correctIndex: 1, explanation: "Singular 'It' uses 'does'." },
    { question: "____ you have a pen?", choices: ["Do", "Does", "Doing", "Done"], correctIndex: 0, explanation: "Subject 'you' uses 'Do'." },
    { question: "____ she live here?", choices: ["Do", "Does", "Doing", "Done"], correctIndex: 1, explanation: "Subject 'she' uses 'Does'." },
    { question: "The car ____ not start.", choices: ["do", "does", "doing", "done"], correctIndex: 1, explanation: "The car (it) does not start." },
    { question: "We ____ done our work.", choices: ["has", "have", "having", "had"], correctIndex: 1, explanation: "We have." },
    { question: "John ____ a question.", choices: ["has", "have", "having", "had"], correctIndex: 0, explanation: "John (he) has." },

    // 41-50: Identifying Subject-Verb Pairs
    { question: "The boys in the room ____.", choices: ["plays", "play", "playing", "played"], correctIndex: 1, explanation: "The subject is 'boys' (plural), not 'room'. So, the boys play." },
    { question: "The flower in the pot ____.", choices: ["grow", "grows", "growing", "grew"], correctIndex: 1, explanation: "The subject is 'flower' (singular). The flower grows." },
    { question: "My sisters ____ tall.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "Subject 'sisters' is plural. They are." },
    { question: "The baby ____.", choices: ["cry", "cries", "crying", "cried"], correctIndex: 1, explanation: "Subject 'baby' is singular. The baby cries." },
    { question: "The computer ____ working.", choices: ["is", "are", "am", "be"], correctIndex: 0, explanation: "Subject 'computer' is singular. Is." },
    { question: "The keys ____ on the table.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "Subject 'keys' is plural. Are." },
    { question: "A banana ____ yellow.", choices: ["is", "are", "am", "be"], correctIndex: 0, explanation: "One banana. Is." },
    { question: "Bananas ____ sweet.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "Plural bananas. Are." },
    { question: "The water ____ cold.", choices: ["is", "are", "am", "be"], correctIndex: 0, explanation: "Water is uncountable (singular). It is cold." },
    { question: "The door ____ open.", choices: ["is", "are", "am", "be"], correctIndex: 0, explanation: "One door. Is." }
  ],

  intermediate: [
    // 1-10: Compound Subjects (And)
    { question: "John and Mary ____ coming to dinner.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "When two subjects are connected by 'and' (John + Mary = They), the subject becomes plural. We use 'are'." },
    { question: "The dog and the cat ____ fighting.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Dog + Cat = Plural. They are fighting." },
    { question: "Bread and butter ____ my favorite breakfast.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Exception! 'Bread and butter' is considered a single dish/unit, so it takes the singular verb 'is'." },
    { question: "The teacher and the student ____ talking.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Two people = Plural. Are." },
    { question: "Pen and paper ____ needed for the exam.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Two separate items = Plural. Are." },
    { question: "My brother and I ____ twins.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "My brother + I = We. 'We' takes 'are'." },
    { question: "Gold and silver ____ precious metals.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Two different things = Plural. Are." },
    { question: "Fish and chips ____ a popular meal.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Exception! Like bread and butter, 'Fish and chips' is considered one meal. Is." },
    { question: "Fire and water ____ not mix.", choices: ["do", "does", "doing", "done"], correctIndex: 0, explanation: "Two things. They do not mix." },
    { question: "The sun and the moon ____ bright.", choices: ["shine", "shines", "shining", "shone"], correctIndex: 0, explanation: "Plural subject. They shine." },

    // 11-20: Intervening Phrases (Prepositional Phrases)
    { question: "The box of chocolates ____ on the table.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Ignore the phrase 'of chocolates'. The true subject is 'The box' (singular). The box is." },
    { question: "The players on the team ____ tired.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Ignore 'on the team'. The subject is 'players' (plural). The players are." },
    { question: "The man with the dogs ____ walking.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Ignore 'with the dogs'. The subject is 'The man' (singular). The man is." },
    { question: "The colors of the rainbow ____ beautiful.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Subject is 'colors' (plural). The colors are." },
    { question: "One of the boys ____ missing.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "The subject is 'One' (singular). Ignore 'of the boys'. One is missing." },
    { question: "The paintings in the museum ____ old.", choices: ["look", "looks", "looking", "looked"], correctIndex: 0, explanation: "Subject is 'paintings' (plural). They look." },
    { question: "The bag of apples ____ heavy.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject is 'bag' (singular). The bag is." },
    { question: "The windows in the house ____ dirty.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Subject is 'windows' (plural). They are." },
    { question: "The leader of the wolves ____ howling.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject is 'leader' (singular). The leader is." },
    { question: "The books on the shelf ____ dusty.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Subject is 'books' (plural). They are." },

    // 21-30: Indefinite Pronouns (Singular)
    { question: "Everyone ____ here.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Everyone' sounds like a lot of people, but grammatically it is SINGULAR. Everyone is." },
    { question: "Someone ____ knocking at the door.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Someone' is singular. Someone is." },
    { question: "Nobody ____ the answer.", choices: ["know", "knows", "knowing", "known"], correctIndex: 1, explanation: "'Nobody' is singular. Nobody knows." },
    { question: "Each of the students ____ a book.", choices: ["have", "has", "having", "had"], correctIndex: 1, explanation: "'Each' is singular. Each has." },
    { question: "Either of the plans ____ fine.", choices: ["work", "works", "working", "worked"], correctIndex: 1, explanation: "'Either' (when acting as a subject) is singular. Either works." },
    { question: "Neither of them ____ to go.", choices: ["want", "wants", "wanting", "wanted"], correctIndex: 1, explanation: "'Neither' (as a subject) is singular. Neither wants." },
    { question: "Something ____ wrong.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Something' is singular. Something is." },
    { question: "Everything ____ ready.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Everything' is singular. Everything is." },
    { question: "Anyone ____ welcome to join.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Anyone' is singular. Anyone is." },
    { question: "Each child ____ a gift.", choices: ["get", "gets", "getting", "got"], correctIndex: 1, explanation: "'Each' is singular. Each gets." },

    // 31-40: Indefinite Pronouns (Plural/Variable)
    { question: "Few ____ passed the exam.", choices: ["has", "have", "having", "had"], correctIndex: 1, explanation: "'Few' is plural (meaning not many, but some). Few have." },
    { question: "Many ____ called, but few are chosen.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Many' is plural. Many are." },
    { question: "Several ____ waiting outside.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Several' is plural. Several are." },
    { question: "Both ____ happy with the result.", choices: ["seem", "seems", "seeming", "seemed"], correctIndex: 0, explanation: "'Both' refers to two, so it is plural. Both seem." },
    { question: "All of the cake ____ gone.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Variable! 'All' depends on what it refers to. Here, 'cake' is singular/uncountable. So, All is." },
    { question: "All of the cookies ____ gone.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Here, 'All' refers to 'cookies' (plural). So, All are." },
    { question: "Some of the water ____ spilled.", choices: ["was", "were", "are", "be"], correctIndex: 0, explanation: "'Water' is uncountable. Some was." },
    { question: "Some of the students ____ absent.", choices: ["was", "were", "is", "am"], correctIndex: 1, explanation: "'Students' is plural. Some were." },
    { question: "Most of the work ____ done.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Work' is uncountable. Most is." },
    { question: "Most of the people ____ agree.", choices: ["doesn't", "don't", "not", "no"], correctIndex: 1, explanation: "'People' is plural. Most don't." },

    // 41-50: Here and There
    { question: "There ____ a dog in the garden.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "In 'There' sentences, the subject comes AFTER the verb. Subject is 'dog' (singular). There is." },
    { question: "There ____ two cats on the roof.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Subject is 'two cats' (plural). There are." },
    { question: "Here ____ the bus.", choices: ["come", "comes", "coming", "came"], correctIndex: 1, explanation: "Subject is 'the bus' (singular). Here comes the bus." },
    { question: "Here ____ your keys.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Subject is 'keys' (plural). Here are." },
    { question: "There ____ many reasons to stay.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Subject is 'reasons' (plural). There are." },
    { question: "There ____ no water left.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject is 'water' (uncountable/singular). There is." },
    { question: "Here ____ the list of names.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject is 'list' (singular), not 'names'. Here is the list." },
    { question: "There ____ been a mistake.", choices: ["has", "have", "having", "had"], correctIndex: 0, explanation: "Subject is 'mistake' (singular). There has been." },
    { question: "There ____ a lot of people here.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Subject is 'people' (plural). There are." },
    { question: "Here ____ the documents you asked for.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Subject is 'documents' (plural). Here are." }
  ],

  advanced: [
    // 1-10: Collective Nouns (Singular vs Plural context)
    { question: "The team ____ winning the game.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "When the group acts as one single unit, we use a singular verb. The team is." },
    { question: "The team ____ arguing among themselves.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Because they are arguing 'among themselves', they are acting as individuals, not a unit. We use the plural. The team are." },
    { question: "The family ____ on vacation.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Acting as one unit. The family is." },
    { question: "The jury ____ reached a verdict.", choices: ["has", "have", "having", "had"], correctIndex: 0, explanation: "Acting as one unit to give one verdict. The jury has." },
    { question: "The jury ____ divided in their opinions.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "They are divided (individuals thinking differently). The jury are." },
    { question: "The crowd ____ shouting loudly.", choices: ["was", "were", "are", "be"], correctIndex: 0, explanation: "Acting as one big entity. The crowd was." },
    { question: "The staff ____ in a meeting.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Standard American usage treats 'staff' as singular when acting as a body. The staff is." },
    { question: "The class ____ listening to the teacher.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Acting as a unit. The class is." },
    { question: "A flock of birds ____ flying south.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject is 'flock' (singular), not 'birds'. The flock is." },
    { question: "The committee ____ decided to proceed.", choices: ["has", "have", "having", "had"], correctIndex: 0, explanation: "Acting as one body. The committee has." },

    // 11-20: 'Or', 'Nor', 'Neither/Nor', 'Either/Or' (Proximity Rule)
    { question: "Neither John nor his friends ____ going.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Rule of Proximity: Look at the subject CLOSER to the verb. 'Friends' is plural. So, are." },
    { question: "Neither his friends nor John ____ going.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Rule of Proximity: 'John' is closer to the verb and is singular. So, is." },
    { question: "Either the teacher or the students ____ to blame.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Students' is closer. Are." },
    { question: "Either the students or the teacher ____ to blame.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Teacher' is closer. Is." },
    { question: "My mom or my dad ____ picking me up.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Dad' is closer (Singular). Is." },
    { question: "The cat or the dogs ____ making noise.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Dogs' is closer. Are." },
    { question: "Neither the plates nor the bowl ____ clean.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Bowl' is closer (Singular). Is." },
    { question: "Neither the bowl nor the plates ____ clean.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Plates' is closer (Plural). Are." },
    { question: "Not only the students but also the teacher ____ excited.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Same rule applies to 'Not only... but also'. 'Teacher' is closer. Is." },
    { question: "Not only the teacher but also the students ____ excited.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Students' is closer. Are." },

    // 21-30: Amounts, Distances, Time, Money (Singular Rule)
    { question: "Ten dollars ____ a high price to pay.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Money, even if plural dollars, is treated as a single amount/unit. Is." },
    { question: "Five miles ____ a long way to walk.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Distance is treated as a single unit of measurement. Is." },
    { question: "Three hours ____ enough time.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Time periods are singular. Is." },
    { question: "Fifty percent of the pie ____ missing.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Pie is singular. Half of it is still singular. Is." },
    { question: "Fifty percent of the pies ____ missing.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Pies are plural. Half of them are plural. Are." },
    { question: "Two weeks ____ not enough vacation.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Time period = Singular. Is." },
    { question: "Seven years ____ a long time.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Time period = Singular. Is." },
    { question: "One hundred pesos ____ on the table.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Amount of money = Singular. Is." },
    { question: "Three kilometers ____ the distance to the school.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Distance = Singular. Is." },
    { question: "Four liters of water ____ required.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Volume/Measurement = Singular. Is." },

    // 31-40: Relative Pronouns (Who/Which/That)
    { question: "The student who ____ hard succeeds.", choices: ["work", "works", "working", "worked"], correctIndex: 1, explanation: "'Who' refers to 'student' (singular). So the verb must be singular. Works." },
    { question: "The students who ____ hard succeed.", choices: ["work", "works", "working", "worked"], correctIndex: 0, explanation: "'Who' refers to 'students' (plural). So the verb must be plural. Work." },
    { question: "He is one of the men who ____ here.", choices: ["work", "works", "working", "worked"], correctIndex: 0, explanation: "Tricky! 'Who' refers to 'men' (plural). He is one of the [men who work]. Work." },
    { question: "The book that ____ on the table is mine.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'That' refers to 'book' (singular). Is." },
    { question: "The books that ____ on the table are mine.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'That' refers to 'books' (plural). Are." },
    { question: "It is I who ____ to blame.", choices: ["is", "are", "am", "be"], correctIndex: 2, explanation: "Very formal but correct. 'Who' refers to 'I'. 'I' takes 'am'. It is I who am..." },
    { question: "It is you who ____ right.", choices: ["is", "are", "am", "be"], correctIndex: 1, explanation: "'Who' refers to 'you'. 'You' takes 'are'." },
    { question: "The dog which ____ barking is mine.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Which' refers to 'dog'. Is." },
    { question: "The dogs which ____ barking are mine.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Which' refers to 'dogs'. Are." },
    { question: "She is the only one of the girls who ____ Spanish.", choices: ["speak", "speaks", "speaking", "spoken"], correctIndex: 1, explanation: "Exception! 'THE only one'. This specifies her specifically, not the group. Speaks." },

    // 41-50: Titles and Gerunds
    { question: "'Romeo and Juliet' ____ a famous play.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Titles of books/movies are singular, even if they contain plural words. Is." },
    { question: "'Star Wars' ____ my favorite movie.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Title = Singular. Is." },
    { question: "Reading books ____ fun.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "The subject is 'Reading' (Gerund/Activity), which is singular. Is." },
    { question: "Playing video games ____ time.", choices: ["take", "takes", "taking", "took"], correctIndex: 1, explanation: "Subject is 'Playing' (Singular). Takes." },
    { question: "Swimming and running ____ good exercises.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Two different activities joined by 'and'. Are." },
    { question: "'The Avengers' ____ an action movie.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Title = Singular. Is." },
    { question: "Eating vegetables ____ healthy.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject is 'Eating'. Is." },
    { question: "Waiting for buses ____ annoying.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject is 'Waiting'. Is." },
    { question: "'A Tale of Two Cities' ____ a classic.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Titles of books are treated as singular, so we say: 'A Tale of Two Cities is a classic.'"},
    { question: "Listening to music ____ me relax.", choices: ["help", "helps", "helping", "helped"], correctIndex: 1, explanation: "Subject is 'Listening'. Helps." }
  ],

  super: [
    // 1-10: Tricky Singular Nouns ending in 'S'
    { question: "Physics ____ a difficult subject.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Nouns like Physics, Mathematics, Economics end in 's' but are Singular. Is." },
    { question: "Mathematics ____ my favorite class.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject = Singular. Is." },
    { question: "The news ____ shocking.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'News' is always singular. Is." },
    { question: "Measles ____ a contagious disease.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Diseases ending in 's' are singular. Is." },
    { question: "Gymnastics ____ require strength.", choices: ["do", "does", "doing", "done"], correctIndex: 1, explanation: "Activity/Sport = Singular. Does." },
    { question: "Politics ____ a dirty game.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Field of study/concept = Singular. Is." },
    { question: "Diabetes ____ common.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Disease = Singular. Is." },
    { question: "Economics ____ interesting.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Subject = Singular. Is." },
    { question: "Billiards ____ played on a table.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Game = Singular. Is." },
    { question: "The United States ____ a large country.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Country name = Singular. Is." },

    // 11-20: Tricky Plural Nouns (Always Plural)
    { question: "The scissors ____ sharp.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Tools with two parts (scissors, pliers) are always plural. Are." },
    { question: "My trousers ____ torn.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Clothing with two legs (pants, trousers, jeans) are plural. Are." },
    { question: "The police ____ coming.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Police' is a collective noun that is always treated as plural. Are." },
    { question: "Her glasses ____ broken.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Eyeglasses = Plural. Are." },
    { question: "The cattle ____ grazing.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Cattle' is always plural. Are." },
    { question: "The goods ____ being shipped.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Goods' (merchandise) is plural. Are." },
    { question: "Where ____ my pliers?", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Tool with two parts = Plural. Are." },
    { question: "My jeans ____ blue.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Jeans = Plural. Are." },
    { question: "The binoculars ____ expensive.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Two lenses = Plural. Are." },
    { question: "Thanks ____ due to him.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Thanks' is treated as a plural noun here. Are." },

    // 21-30: 'The Number' vs 'A Number' & Adjectives as Nouns
    { question: "A number of students ____ absent.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Rule: 'A number of' = Many (Plural). Are." },
    { question: "The number of students ____ increasing.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "Rule: 'The number of' = The specific count (Singular). Is." },
    { question: "The rich ____ not always happy.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "When using 'The + Adjective' to mean a group of people, it is plural. The rich (people) are." },
    { question: "The poor ____ in need of help.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "The phrase 'the poor' refers to poor people (plural), so we say: 'The poor are in need of help.'"},
    { question: "The injured ____ taken to the hospital.", choices: ["was", "were", "is", "am"], correctIndex: 1, explanation: "The injured (people) were." },
    { question: "The blind ____ Braille.", choices: ["use", "uses", "using", "used"], correctIndex: 0, explanation: "The blind (people) use." },
    { question: "A number of cars ____ parked outside.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'A number of' = Plural. Are." },
    { question: "The number of cars ____ small.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'The number' = Singular. Is." },
    { question: "The young ____ the future.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "The young (people) are." },
    { question: "The elderly ____ respect.", choices: ["need", "needs", "needing", "needed"], correctIndex: 0, explanation: "The elderly (people) need." },

    // 31-40: Foreign Plurals and Oddities
    { question: "The data ____ accurate.", choices: ["is", "are", "was", "am"], correctIndex: 1, explanation: "Strictly speaking, 'Data' is the plural of 'Datum'. In academic tests, 'Data are' is often required." },
    { question: "The criteria ____ strict.", choices: ["is", "are", "was", "am"], correctIndex: 1, explanation: "'Criteria' is plural (Singular: Criterion). Are." },
    { question: "The alumni ____ meeting here.", choices: ["is", "are", "was", "am"], correctIndex: 1, explanation: "'Alumni' is plural (graduates). Are." },
    { question: "The fungi ____ growing.", choices: ["is", "are", "was", "am"], correctIndex: 1, explanation: "'Fungi' is plural (Singular: Fungus). Are." },
    { question: "The media ____ covering the event.", choices: ["is", "are", "was", "am"], correctIndex: 1, explanation: "'Media' is the plural of 'Medium'. Are." },
    { question: "The phenomenon ____ rare.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Phenomenon' is singular. Is." },
    { question: "The phenomena ____ rare.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Phenomena' is the plural of Phenomenon. Are." },
    { question: "The bacteria ____ harmful.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Bacteria' is plural (Singular: Bacterium). Are." },
    { question: "The analysis ____ complete.", choices: ["is", "are", "were", "be"], correctIndex: 0, explanation: "'Analysis' is singular. Is." },
    { question: "The analyses ____ complete.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "'Analyses' (pronounced -seez) is plural. Are." },

    // 41-50: Subjunctive Mood and Inverted Sentences
    { question: "I wish I ____ richer.", choices: ["was", "were", "is", "am"], correctIndex: 1, explanation: "Subjunctive Mood: When wishing for something untrue, use 'were' instead of 'was', even for 'I'." },
    { question: "If he ____ here, he would help.", choices: ["was", "were", "is", "am"], correctIndex: 1, explanation: "Subjunctive: Hypothetical situation. Were." },
    { question: "I suggest that he ____ early.", choices: ["leave", "leaves", "leaving", "left"], correctIndex: 0, explanation: "Subjunctive (Command/Suggestion): Use the base form. That he leave." },
    { question: "It is important that she ____ present.", choices: ["be", "is", "are", "was"], correctIndex: 0, explanation: "Subjunctive: Use base form 'be'." },
    { question: "She requested that John ____ the meeting.", choices: ["attend", "attends", "attending", "attended"], correctIndex: 0, explanation: "Subjunctive: Base form 'attend'." },
    { question: "Behind the house ____ two trees.", choices: ["stand", "stands", "standing", "stood"], correctIndex: 0, explanation: "Inverted sentence! The subject is 'two trees' (plural), not 'house'. The trees stand." },
    { question: "Under the bed ____ a monster.", choices: ["live", "lives", "living", "lived"], correctIndex: 1, explanation: "Inverted: Subject is 'monster' (singular). Lives." },
    { question: "Never ____ I seen such a thing.", choices: ["has", "have", "having", "had"], correctIndex: 1, explanation: "Inverted: Subject is 'I'. Have." },
    { question: "Beside the river ____ three large rocks.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: "Inverted: Subject is 'rocks' (plural). Are." },
    { question: "Into the room ____ the teacher.", choices: ["walk", "walks", "walking", "walked"], correctIndex: 1, explanation: "Inverted: Subject is 'teacher' (singular). Walks." }
  ]
};
