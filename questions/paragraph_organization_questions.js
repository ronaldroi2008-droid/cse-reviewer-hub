// ==========================================
// ADVERBS QUESTIONS
// Levels: Beginner, Intermediate, Advanced, Expert
// Total: 200 Items (50 per level)
// ==========================================

window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

window.VERBAL_QUESTION_BANK["adverbs"] = {

  // ============================================================
  // LEVEL 1: BEGINNER (50 Items) - Identification & Types
  // ============================================================
  beginner: [
    // --- 1-10: Identification ---
    { question: "In 'He runs quickly', identify the adverb.", options: ["He", "runs", "quickly", "is"], answer: "quickly", explanation: "'Quickly' modifies 'runs' (how)." },
    { question: "In 'She sings loudly', identify the adverb.", options: ["She", "sings", "loudly", "song"], answer: "loudly", explanation: "'Loudly' describes 'sings' (how)." },
    { question: "In 'They played happily', identify the adverb.", options: ["They", "played", "happily", "game"], answer: "happily", explanation: "'Happily' describes 'played' (manner)." },
    { question: "In 'Go inside now', identify the adverb.", options: ["Go", "inside", "now", "Both B and C"], answer: "Both B and C", explanation: "'Inside' (place) and 'now' (time) are both adverbs." },
    { question: "In 'He never lies', identify the adverb.", options: ["He", "never", "lies", "is"], answer: "never", explanation: "'Never' is an adverb of frequency." },
    { question: "In 'It is very cold', identify the adverb.", options: ["It", "is", "very", "cold"], answer: "very", explanation: "'Very' modifies the adjective 'cold'." },
    { question: "In 'She eats slowly', identify the adverb.", options: ["She", "eats", "slowly", "food"], answer: "slowly", explanation: "'Slowly' describes the action 'eats'." },
    { question: "In 'We met yesterday', identify the adverb.", options: ["We", "met", "yesterday", "us"], answer: "yesterday", explanation: "'Yesterday' answers 'when' (time)." },
    { question: "In 'Look up', identify the adverb.", options: ["Look", "up", "you", "none"], answer: "up", explanation: "'Up' answers 'where' (place/direction)." },
    { question: "In 'I am fully prepared', identify the adverb.", options: ["I", "am", "fully", "prepared"], answer: "fully", explanation: "'Fully' modifies 'prepared' (degree)." },

    // --- 11-20: Classification ---
    { question: "What type of adverb is 'tomorrow'?", options: ["Manner", "Time", "Place", "Degree"], answer: "Time", explanation: "Answers 'when'." },
    { question: "What type of adverb is 'here'?", options: ["Manner", "Time", "Place", "Frequency"], answer: "Place", explanation: "Answers 'where'." },
    { question: "What type of adverb is 'beautifully'?", options: ["Manner", "Time", "Place", "Degree"], answer: "Manner", explanation: "Answers 'how'." },
    { question: "What type of adverb is 'always'?", options: ["Manner", "Time", "Frequency", "Degree"], answer: "Frequency", explanation: "Answers 'how often'." },
    { question: "What type of adverb is 'outside'?", options: ["Manner", "Time", "Place", "Degree"], answer: "Place", explanation: "Answers 'where'." },
    { question: "What type of adverb is 'carefully'?", options: ["Manner", "Time", "Place", "Frequency"], answer: "Manner", explanation: "Answers 'how'." },
    { question: "What type of adverb is 'soon'?", options: ["Manner", "Time", "Place", "Degree"], answer: "Time", explanation: "Answers 'when'." },
    { question: "What type of adverb is 'everywhere'?", options: ["Manner", "Time", "Place", "Frequency"], answer: "Place", explanation: "Answers 'where'." },
    { question: "What type of adverb is 'rarely'?", options: ["Manner", "Time", "Frequency", "Place"], answer: "Frequency", explanation: "Answers 'how often'." },
    { question: "What type of adverb is 'quite'?", options: ["Manner", "Time", "Place", "Degree"], answer: "Degree", explanation: "Answers 'to what extent'." },

    // --- 21-30: Fill in the blank (Basic Forms) ---
    { question: "She walked ______ down the street.", options: ["slow", "slowly", "slower", "slowest"], answer: "slowly", explanation: "Describes 'walked' (verb)." },
    { question: "He speaks English ______.", options: ["fluent", "fluently", "fluency", "most fluent"], answer: "fluently", explanation: "Describes 'speaks' (verb)." },
    { question: "The dog barked ______.", options: ["loud", "loudly", "loudness", "louder"], answer: "loudly", explanation: "Describes 'barked' (verb)." },
    { question: "Please hold the glass ______.", options: ["careful", "carefully", "care", "caring"], answer: "carefully", explanation: "Describes 'hold' (verb)." },
    { question: "She answered ______.", options: ["correct", "correctly", "correction", "corrects"], answer: "correctly", explanation: "Describes 'answered' (verb)." },
    { question: "The sun shines ______.", options: ["bright", "brightly", "brightness", "brighter"], answer: "brightly", explanation: "Describes 'shines' (verb)." },
    { question: "He waited ______ for his turn.", options: ["patient", "patiently", "patience", "patients"], answer: "patiently", explanation: "Describes 'waited' (verb)." },
    { question: "The rain fell ______.", options: ["heavy", "heavily", "heavier", "heaviest"], answer: "heavily", explanation: "Describes 'fell' (verb)." },
    { question: "They lived ______ ever after.", options: ["happy", "happily", "happiness", "happier"], answer: "happily", explanation: "Describes 'lived' (verb)." },
    { question: "Drive ______!", options: ["safe", "safely", "safety", "saver"], answer: "safely", explanation: "Describes 'drive' (verb)." },

    // --- 31-40: Adj vs Adv Distinction ---
    { question: "He is a ______ driver.", options: ["careful", "carefully"], answer: "careful", explanation: "Describes noun 'driver' -> Adjective." },
    { question: "He drives ______.", options: ["careful", "carefully"], answer: "carefully", explanation: "Describes verb 'drives' -> Adverb." },
    { question: "She has a ______ voice.", options: ["loud", "loudly"], answer: "loud", explanation: "Describes noun 'voice' -> Adjective." },
    { question: "She speaks ______.", options: ["loud", "loudly"], answer: "loudly", explanation: "Describes verb 'speaks' -> Adverb." },
    { question: "This math problem is ______.", options: ["easy", "easily"], answer: "easy", explanation: "Linking verb 'is' -> Adjective." },
    { question: "I can solve it ______.", options: ["easy", "easily"], answer: "easily", explanation: "Describes verb 'solve' -> Adverb." },
    { question: "Be ______.", options: ["quiet", "quietly"], answer: "quiet", explanation: "Describes subject 'you' -> Adjective." },
    { question: "Work ______.", options: ["quiet", "quietly"], answer: "quietly", explanation: "Describes verb 'work' -> Adverb." },
    { question: "The test was ______.", options: ["bad", "badly"], answer: "bad", explanation: "Linking verb 'was' -> Adjective." },
    { question: "The team played ______.", options: ["bad", "badly"], answer: "badly", explanation: "Describes verb 'played' -> Adverb." },

    // --- 41-50: Spelling & Formation ---
    { question: "Adverb form of 'happy'?", options: ["happyly", "happily", "happely", "happly"], answer: "happily", explanation: "y -> i + ly." },
    { question: "Adverb form of 'terrible'?", options: ["terribly", "terriblely", "terriby", "terriblly"], answer: "terribly", explanation: "Drop e + y." },
    { question: "Adverb form of 'gentle'?", options: ["gently", "gentlely", "gentlyly", "gentily"], answer: "gently", explanation: "Drop e + y." },
    { question: "Adverb form of 'basic'?", options: ["basicly", "basically", "basicaly", "basiclly"], answer: "basically", explanation: "Add -ally." },
    { question: "Adverb form of 'tragic'?", options: ["tragicly", "tragically", "tragicaly", "tragicy"], answer: "tragically", explanation: "Add -ally." },
    { question: "Adverb form of 'full'?", options: ["fully", "fuly", "fullly", "fullley"], answer: "fully", explanation: "Standard spelling." },
    { question: "Adverb form of 'angry'?", options: ["angryly", "angrily", "angrely", "angry"], answer: "angrily", explanation: "y -> i + ly." },
    { question: "Adverb form of 'fast'?", options: ["fast", "fastly", "faster", "fastest"], answer: "fast", explanation: "Irregular: Fast is both adj and adv." },
    { question: "Adverb form of 'good'?", options: ["goodly", "well", "good", "goodest"], answer: "well", explanation: "Irregular: Good -> Well." },
    { question: "Adverb form of 'hard' (meaning 'with effort')?", options: ["hard", "hardly", "harder", "hardest"], answer: "hard", explanation: "Irregular: 'Hard' is the adverb. 'Hardly' means 'almost not'." }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Irregular & Comparison
  // ============================================================
  intermediate: [
    // --- 51-60: Good vs Well ---
    { question: "She plays the piano ______.", options: ["good", "well", "better", "best"], answer: "well", explanation: "Modifies 'plays' (verb)." },
    { question: "Her piano playing is ______.", options: ["good", "well", "better", "best"], answer: "good", explanation: "Modifies 'playing' (noun phrase) via linking verb." },
    { question: "I don't feel ______ today.", options: ["good", "well", "nice", "fine"], answer: "well", explanation: "Well as adjective for health." },
    { question: "He did a ______ job.", options: ["good", "well"], answer: "good", explanation: "Modifies 'job' (noun)." },
    { question: "The team played ______ yesterday.", options: ["good", "well"], answer: "well", explanation: "Modifies 'played' (verb)." },
    { question: "It looks ______.", options: ["good", "well"], answer: "good", explanation: "Linking verb 'looks' -> Adjective." },
    { question: "She speaks English ______.", options: ["good", "well"], answer: "well", explanation: "Modifies 'speaks' (verb)." },
    { question: "He is a ______ student.", options: ["good", "well"], answer: "good", explanation: "Modifies 'student' (noun)." },
    { question: "Did you sleep ______?", options: ["good", "well"], answer: "well", explanation: "Modifies 'sleep' (verb)." },
    { question: "The food tastes ______.", options: ["good", "well"], answer: "good", explanation: "Linking verb 'tastes' -> Adjective." },

    // --- 61-70: Comparison ---
    { question: "He runs ______ than me.", options: ["fast", "faster", "fastly", "more fast"], answer: "faster", explanation: "Comparative of fast." },
    { question: "She works ______ than her brother.", options: ["hard", "harder", "hardly", "more hard"], answer: "harder", explanation: "Comparative of hard." },
    { question: "Please speak ______.", options: ["more clearly", "clearlier", "most clearly", "clear"], answer: "more clearly", explanation: "Comparative of -ly adverb." },
    { question: "He arrived ______ than expected.", options: ["early", "earlier", "more early", "earliest"], answer: "earlier", explanation: "Comparative of early." },
    { question: "Of all the runners, he ran ______.", options: ["fastest", "faster", "most fast", "fastly"], answer: "fastest", explanation: "Superlative." },
    { question: "She sings ______ of all.", options: ["beautifully", "more beautifully", "most beautifully", "beauty"], answer: "most beautifully", explanation: "Superlative of -ly adverb." },
    { question: "He drives ______ than his father.", options: ["carefully", "more carefully", "most carefully", "carefuller"], answer: "more carefully", explanation: "Comparative." },
    { question: "Who woke up ______?", options: ["earlier", "earliest", "early", "more early"], answer: "earlier", explanation: "Comparing (implied context usually 2, or simple comparative)." },
    { question: "I did ______ on the test than I thought.", options: ["badly", "worse", "worst", "badder"], answer: "worse", explanation: "Irregular comparative of badly." },
    { question: "He treats her ______ than anyone else.", options: ["better", "best", "gooder", "well"], answer: "better", explanation: "Irregular comparative of well." },

    // --- 71-80: Placement ---
    { question: "Choose the correct order:", options: ["I always am late.", "I am always late.", "Always I am late.", "I am late always."], answer: "I am always late.", explanation: "After 'to be'." },
    { question: "Choose the correct order:", options: ["He often plays tennis.", "He plays often tennis.", "He plays tennis often.", "Often he plays tennis."], answer: "He often plays tennis.", explanation: "Before main verb." },
    { question: "Choose the correct order:", options: ["We usually go to the park.", "We go usually to the park.", "We go to the park usually.", "Usually we go to the park."], answer: "We usually go to the park.", explanation: "Before main verb." },
    { question: "Choose the correct order:", options: ["She doesn't always eat breakfast.", "She always doesn't eat breakfast.", "She doesn't eat always breakfast.", "She eats always breakfast."], answer: "She doesn't always eat breakfast.", explanation: "Between aux and verb." },
    { question: "Choose the correct order:", options: ["I have never been to Japan.", "I never have been to Japan.", "I have been never to Japan.", "I have been to Japan never."], answer: "I have never been to Japan.", explanation: "After first auxiliary 'have'." },
    { question: "Choose the correct order:", options: ["They rarely watch TV.", "They watch rarely TV.", "Rarely they watch TV.", "They watch TV rarely."], answer: "They rarely watch TV.", explanation: "Before main verb." },
    { question: "Choose the correct order:", options: ["He is seldom angry.", "He seldom is angry.", "He is angry seldom.", "Seldom he is angry."], answer: "He is seldom angry.", explanation: "After 'is'." },
    { question: "Choose the correct order:", options: ["Do you often visit?", "Do often you visit?", "You do visit often?", "Visit you often?"], answer: "Do you often visit?", explanation: "Subject + Adverb + Verb." },
    { question: "Choose the correct order:", options: ["She sometimes cooks.", "She cooks sometimes.", "Sometimes she cooks.", "All are acceptable."], answer: "All are acceptable.", explanation: "'Sometimes' is flexible." },
    { question: "Choose the correct order:", options: ["My dad usually works late.", "My dad works usually late.", "Usually works my dad late.", "My dad works late usually."], answer: "My dad usually works late.", explanation: "Before main verb." },

    // --- 81-90: Hard vs Hardly, Late vs Lately ---
    { question: "He works ______.", options: ["hard", "hardly"], answer: "hard", explanation: "With effort." },
    { question: "He ______ works.", options: ["hard", "hardly"], answer: "hardly", explanation: "Almost not (lazy)." },
    { question: "I haven't seen him ______.", options: ["late", "lately"], answer: "lately", explanation: "Recently." },
    { question: "The bus arrived ______.", options: ["late", "lately"], answer: "late", explanation: "Not on time." },
    { question: "She can ______ see without her glasses.", options: ["hard", "hardly"], answer: "hardly", explanation: "Almost not." },
    { question: "He hit the ball ______.", options: ["hard", "hardly"], answer: "hard", explanation: "With force." },
    { question: "Have you been busy ______?", options: ["late", "lately"], answer: "lately", explanation: "Recently." },
    { question: "He stayed up ______.", options: ["late", "lately"], answer: "late", explanation: "Until late time." },
    { question: "There is ______ any food left.", options: ["hard", "hardly"], answer: "hardly", explanation: "Almost none." },
    { question: "She tries ______ to succeed.", options: ["hard", "hardly"], answer: "hard", explanation: "With effort." },

    // --- 91-100: Intensifiers ---
    { question: "The soup is ______ hot to eat.", options: ["very", "too", "enough", "much"], answer: "too", explanation: "Negative excess." },
    { question: "He is strong ______ to lift it.", options: ["very", "too", "enough", "so"], answer: "enough", explanation: "Adj + Enough." },
    { question: "She is ______ tired.", options: ["very", "enough", "much", "many"], answer: "very", explanation: "High degree." },
    { question: "It is ______ cold today.", options: ["very", "enough", "much", "many"], answer: "very", explanation: "Modifies adjective." },
    { question: "He is not old ______ to drive.", options: ["very", "too", "enough", "much"], answer: "enough", explanation: "Adj + Enough." },
    { question: "The box is ______ heavy for me to lift.", options: ["very", "too", "enough", "so"], answer: "too", explanation: "Excess." },
    { question: "He ran fast ______ to win.", options: ["very", "too", "enough", "so"], answer: "enough", explanation: "Adv + Enough." },
    { question: "I am ______ happy for you.", options: ["so", "too", "enough", "such"], answer: "so", explanation: "Emphasize adj." },
    { question: "It was ______ a good movie.", options: ["so", "such", "very", "too"], answer: "such", explanation: "Such + a/an + Adj + Noun." },
    { question: "The tea is ______ sweet.", options: ["very", "enough", "much", "many"], answer: "very", explanation: "High degree." }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Inversion & Connectors
  // ============================================================
  advanced: [
    // --- 101-110: Inversion ---
    { question: "______ have I seen such a mess.", options: ["Never", "Always", "Often", "Usually"], answer: "Never", explanation: "Negative inversion." },
    { question: "Rarely ______ to the cinema.", options: ["we go", "do we go", "we do go", "go we"], answer: "do we go", explanation: "Inversion with 'Rarely'." },
    { question: "Seldom ______ such talent.", options: ["one sees", "does one see", "sees one", "one does see"], answer: "does one see", explanation: "Inversion with 'Seldom'." },
    { question: "Hardly ______ arrived when it rained.", options: ["had I", "I had", "have I", "I have"], answer: "had I", explanation: "Inversion with 'Hardly'." },
    { question: "Little ______ that he was watching.", options: ["did she know", "she knew", "she did know", "knew she"], answer: "did she know", explanation: "Inversion with 'Little'." },
    { question: "Nowhere ______ find a better offer.", options: ["you will", "will you", "you can", "can"], answer: "will you", explanation: "Inversion with 'Nowhere'." },
    { question: "On no account ______ be opened.", options: ["should this door", "this door should", "this door", "door should"], answer: "should this door", explanation: "Inversion with 'On no account'." },
    { question: "Not only ______ sing, but he also dances.", options: ["he does", "does he", "he can", "he is"], answer: "does he", explanation: "Inversion with 'Not only'." },
    { question: "Scarcely ______ down when the phone rang.", options: ["I sat", "did I sit", "had I sat", "was I sitting"], answer: "had I sat", explanation: "Inversion with 'Scarcely' (Past Perfect)." },
    { question: "Under no circumstances ______ leave.", options: ["you should", "should you", "you must", "are you"], answer: "should you", explanation: "Inversion with 'Under no circumstances'." },

    // --- 111-120: Placement of "Only" ---
    { question: "Meaning: 'No one else but John went.'", options: ["Only John went.", "John went only.", "John only went.", "John went."], answer: "Only John went.", explanation: "Modifies subject 'John'." },
    { question: "Meaning: 'I merely looked at him (didn't talk).'", options: ["Only I looked at him.", "I only looked at him.", "I looked at him only.", "I looked only at him."], answer: "I only looked at him.", explanation: "Modifies verb 'looked'." },
    { question: "Meaning: 'She eats nothing but vegetables.'", options: ["She only eats vegetables.", "She eats only vegetables.", "Only she eats vegetables.", "She eats vegetables only."], answer: "She eats only vegetables.", explanation: "Modifies 'vegetables'." },
    { question: "Place 'only' correctly: 'He lent me five pesos.' (Meaning: No more than 5).", options: ["Only he lent me five pesos.", "He lent me only five pesos.", "He only lent me five pesos.", "He lent me five pesos only."], answer: "He lent me only five pesos.", explanation: "Modifies 'five pesos'." },
    { question: "Meaning: 'It happens on Sundays and no other day.'", options: ["It only happens on Sundays.", "It happens only on Sundays.", "Only it happens on Sundays.", "It happens on Sundays only."], answer: "It happens only on Sundays.", explanation: "Modifies 'on Sundays'." },
    { question: "The meeting lasted ______ an hour.", options: ["only", "alone", "single", "justly"], answer: "only", explanation: "Limiter." },
    { question: "______ three students passed.", options: ["Only", "Justly", "Merely", "Alone"], answer: "Only", explanation: "Limiter." },
    { question: "I have ______ two hands.", options: ["only", "alone", "merely", "single"], answer: "only", explanation: "Limiter." },
    { question: "She is the ______ one who knows.", options: ["only", "alone", "lonely", "solely"], answer: "only", explanation: "Adjective meaning 'sole'." },
    { question: "He did it ______ for the money.", options: ["only", "alone", "lonely", "solitary"], answer: "only", explanation: "Limiter." },

    // --- 121-130: Connectors ---
    { question: "It rained hard; ______, we played soccer.", options: ["however", "therefore", "moreover", "consequently"], answer: "however", explanation: "Contrast." },
    { question: "He didn't study; ______, he failed.", options: ["however", "therefore", "nevertheless", "otherwise"], answer: "therefore", explanation: "Result." },
    { question: "The rent is high; ______, the location is bad.", options: ["therefore", "moreover", "consequently", "thus"], answer: "moreover", explanation: "Addition (negative + negative)." },
    { question: "Run fast; ______, you will be late.", options: ["otherwise", "therefore", "however", "besides"], answer: "otherwise", explanation: "Condition/Else." },
    { question: "I love milk; ______, I am allergic to it.", options: ["consequently", "however", "therefore", "moreover"], answer: "however", explanation: "Contrast." },
    { question: "Select correct punctuation:", options: ["He is sick, therefore he is absent.", "He is sick; therefore, he is absent.", "He is sick therefore, he is absent.", "He is sick; therefore he is absent."], answer: "He is sick; therefore, he is absent.", explanation: "Semicolon + connector + comma." },
    { question: "Select correct punctuation:", options: ["I tried hard; however, I failed.", "I tried hard, however I failed.", "I tried hard however, I failed.", "I tried hard; however I failed."], answer: "I tried hard; however, I failed.", explanation: "Semicolon + connector + comma." },
    { question: "He is rich; ______, he is unhappy.", options: ["nevertheless", "consequently", "therefore", "additionally"], answer: "nevertheless", explanation: "Contrast/In spite of." },
    { question: "We have no money; ______, we can't buy it.", options: ["however", "consequently", "nevertheless", "otherwise"], answer: "consequently", explanation: "Result." },
    { question: "It was cold; ______, we went swimming.", options: ["therefore", "besides", "nonetheless", "consequently"], answer: "nonetheless", explanation: "Contrast/Even so." },

    // --- 131-140: Intensity ---
    { question: "I ______ agree with you.", options: ["completely", "very", "too", "much"], answer: "completely", explanation: "Strong agreement." },
    { question: "It was ______ ridiculous.", options: ["utterly", "very", "much", "many"], answer: "utterly", explanation: "Extreme adjective modifier." },
    { question: "She is ______ prettier than her sister.", options: ["much", "very", "too", "so"], answer: "much", explanation: "Modifier for comparative." },
    { question: "He is ______ the best player.", options: ["by far", "very", "too", "so"], answer: "by far", explanation: "Modifier for superlative." },
    { question: "I am ______ sorry.", options: ["terribly", "terrible", "much", "many"], answer: "terribly", explanation: "Collocation." },
    { question: "It is ______ freezing outside.", options: ["absolutely", "very", "too", "fairly"], answer: "absolutely", explanation: "Extreme adjective modifier." },
    { question: "The movie was ______ hilarious.", options: ["absolutely", "very", "slightly", "fairly"], answer: "absolutely", explanation: "Extreme adjective modifier." },
    { question: "I was ______ exhausted.", options: ["totally", "very", "quite", "fairly"], answer: "totally", explanation: "Extreme adjective modifier." },
    { question: "It is ______ hot (meaning 'a little').", options: ["rather", "too", "utterly", "completely"], answer: "rather", explanation: "Moderate degree." },
    { question: "She is ______ shorter than him.", options: ["slightly", "very", "too", "quite"], answer: "slightly", explanation: "Small degree." },

    // --- 141-150: Viewpoint ---
    { question: "______, he didn't get the job.", options: ["Unfortunately", "Unfortunate", "Happy", "Badly"], answer: "Unfortunately", explanation: "Comment adverb." },
    { question: "______, it will rain today.", options: ["Presumably", "Presume", "Sure", "Definite"], answer: "Presumably", explanation: "Comment adverb." },
    { question: "______, I don't care.", options: ["Frankly", "Frank", "Honest", "True"], answer: "Frankly", explanation: "Comment adverb." },
    { question: "______, he arrived on time.", options: ["Surprisingly", "Surprising", "Surprise", "Shock"], answer: "Surprisingly", explanation: "Comment adverb." },
    { question: "______, there are no free seats.", options: ["Regrettably", "Regret", "Sorry", "Sad"], answer: "Regrettably", explanation: "Comment adverb." },
    { question: "______, she is the best candidate.", options: ["Undoubtedly", "Doubt", "Sure", "Uncertain"], answer: "Undoubtedly", explanation: "Comment adverb." },
    { question: "______, we need to cut costs.", options: ["Basically", "Basic", "Base", "Basis"], answer: "Basically", explanation: "Comment adverb." },
    { question: "______, I prefer tea.", options: ["Personally", "Person", "Private", "Self"], answer: "Personally", explanation: "Comment adverb." },
    { question: "______, he is right.", options: ["Technically", "Technical", "Technique", "Tech"], answer: "Technically", explanation: "Comment adverb." },
    { question: "______, it was a disaster.", options: ["Essentially", "Essential", "Essence", "Real"], answer: "Essentially", explanation: "Comment adverb." }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (50 Items) - Tricky Pairs & Redundancy
  // ============================================================
  expert: [
    // --- 151-160: Deep vs Deeply etc. ---
    { question: "He threw the ball ______.", options: ["high", "highly"], answer: "high", explanation: "Physical height." },
    { question: "He is ______ respected.", options: ["high", "highly"], answer: "highly", explanation: "Figurative degree." },
    { question: "I dove ______ into the ocean.", options: ["deep", "deeply"], answer: "deep", explanation: "Physical depth." },
    { question: "I was ______ moved by the movie.", options: ["deep", "deeply"], answer: "deeply", explanation: "Emotional degree." },
    { question: "The bird flew ______.", options: ["low", "lowly"], answer: "low", explanation: "Physical height." },
    { question: "He bowed ______.", options: ["low", "lowly"], answer: "low", explanation: "Physical action." },
    { question: "She arrived ______.", options: ["late", "lately"], answer: "late", explanation: "Not on time." },
    { question: "I haven't eaten ______.", options: ["late", "lately"], answer: "lately", explanation: "Recently." },
    { question: "Stand ______.", options: ["clear", "clearly"], answer: "clear", explanation: "Away from." },
    { question: "Speak ______.", options: ["clear", "clearly"], answer: "clearly", explanation: "Understandably." },

    // --- 161-170: Meaning Shift ---
    { question: "He works ______.", options: ["hard", "hardly"], answer: "hard", explanation: "With effort." },
    { question: "He ______ works.", options: ["hardly", "hard"], answer: "hardly", explanation: "Almost not." },
    { question: "The eagle flies ______.", options: ["high", "highly"], answer: "high", explanation: "Physical." },
    { question: "It is ______ probable.", options: ["high", "highly"], answer: "highly", explanation: "Degree." },
    { question: "He sat ______ to me.", options: ["close", "closely"], answer: "close", explanation: "Distance." },
    { question: "Listen ______.", options: ["close", "closely"], answer: "closely", explanation: "Attention." },
    { question: "The door was ______ open.", options: ["wide", "widely"], answer: "wide", explanation: "Physical extent." },
    { question: "He is ______ known.", options: ["wide", "widely"], answer: "widely", explanation: "Range/Degree." },
    { question: "You are ______ right.", options: ["dead", "deadly"], answer: "dead", explanation: "Idiom: Completely." },
    { question: "It is a ______ weapon.", options: ["dead", "deadly"], answer: "deadly", explanation: "Lethal (Adjective)." },

    // --- 171-180: Imposter Adjectives ---
    { question: "She is a ______ person.", options: ["lovely", "lovelily"], answer: "lovely", explanation: "Adjective." },
    { question: "He behaved in a ______ manner.", options: ["friendly", "friendlily"], answer: "friendly", explanation: "Adjective used in phrase." },
    { question: "I feel ______.", options: ["lonely", "lone"], answer: "lonely", explanation: "Adjective." },
    { question: "It was a ______ meeting.", options: ["timely", "timelily"], answer: "timely", explanation: "Adjective." },
    { question: "That looks ______.", options: ["ugly", "uglily"], answer: "ugly", explanation: "Adjective." },
    { question: "He is a ______ man.", options: ["kindly", "kindlily"], answer: "kindly", explanation: "Adjective." },
    { question: "It was a ______ error.", options: ["costly", "costlily"], answer: "costly", explanation: "Adjective." },
    { question: "Daily is an ______.", options: ["Adjective only", "Adverb only", "Both"], answer: "Both", explanation: "Can be both." },
    { question: "Early is an ______.", options: ["Adjective only", "Adverb only", "Both"], answer: "Both", explanation: "Can be both." },
    { question: "Fast is an ______.", options: ["Adjective only", "Adverb only", "Both"], answer: "Both", explanation: "Can be both." },

    // --- 181-190: Adverbial Objectives ---
    { question: "Let's go ______.", options: ["home", "to home"], answer: "home", explanation: "Adverb of place." },
    { question: "I waited ______.", options: ["two hours", "for two hours", "Both are correct"], answer: "Both are correct", explanation: "Duration." },
    { question: "He ran ______.", options: ["three miles", "for three miles", "Both are correct"], answer: "Both are correct", explanation: "Distance." },
    { question: "See you ______.", options: ["next week", "on next week"], answer: "next week", explanation: "No prep before 'next'." },
    { question: "We met ______.", options: ["last night", "on last night"], answer: "last night", explanation: "No prep before 'last'." },
    { question: "Do it ______.", options: ["this way", "on this way"], answer: "this way", explanation: "Manner." },
    { question: "They went ______.", options: ["abroad", "to abroad"], answer: "abroad", explanation: "Adverb of place." },
    { question: "Go ______.", options: ["upstairs", "to upstairs"], answer: "upstairs", explanation: "Adverb of place." },
    { question: "Come ______.", options: ["inside", "to inside"], answer: "inside", explanation: "Adverb of place." },
    { question: "He went ______.", options: ["downtown", "to downtown"], answer: "downtown", explanation: "Adverb of place." },

    // --- 191-200: Redundancy ---
    { question: "I can't see ______.", options: ["nothing", "anything"], answer: "anything", explanation: "Avoid double negative." },
    { question: "He hardly ______ speaks.", options: ["never", "ever"], answer: "ever", explanation: "Avoid double negative." },
    { question: "I rarely ______ eat there.", options: ["don't", "ever"], answer: "ever", explanation: "Avoid double negative." },
    { question: "Return back is ______.", options: ["correct", "redundant"], answer: "redundant", explanation: "Return means go back." },
    { question: "Repeat again is ______.", options: ["correct", "redundant"], answer: "redundant", explanation: "Repeat means do again." },
    { question: "Proceed forward is ______.", options: ["correct", "redundant"], answer: "redundant", explanation: "Proceed means move forward." },
    { question: "Revert back is ______.", options: ["correct", "redundant"], answer: "redundant", explanation: "Revert means go back." },
    { question: "Sufficient enough is ______.", options: ["correct", "redundant"], answer: "redundant", explanation: "Mean the same thing." },
    { question: "Scarcely ______ (meaning 'almost no one').", options: ["anyone", "no one"], answer: "anyone", explanation: "Avoid double negative." },
    { question: "Barely ______ (meaning 'almost nothing').", options: ["anything", "nothing"], answer: "anything", explanation: "Avoid double negative." }
  ]
};

// Optional: also expose a direct constant if your code uses it
const ADVERBS_QUESTIONS = window.VERBAL_QUESTION_BANK["adverbs"];
