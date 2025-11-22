const ADVERB_QUESTIONS = {
  beginner: [
    // 1-10: Identification
    { question: "In 'He runs quickly', identify the adverb.", choices: ["He", "runs", "quickly", "is"], correctIndex: 2, explanation: "'Quickly' modifies the verb 'runs'." },
    { question: "In 'She sings loudly', identify the adverb.", choices: ["She", "sings", "loudly", "song"], correctIndex: 2, explanation: "'Loudly' describes how she sings." },
    { question: "In 'They played happily', identify the adverb.", choices: ["They", "played", "happily", "game"], correctIndex: 2, explanation: "'Happily' describes how they played." },
    { question: "In 'Go inside now', identify the adverb.", choices: ["Go", "inside", "now", "Both B and C"], correctIndex: 3, explanation: "Both 'inside' (Place) and 'now' (Time) are adverbs." },
    { question: "In 'He never lies', identify the adverb.", choices: ["He", "never", "lies", "is"], correctIndex: 1, explanation: "'Never' is an adverb of frequency." },
    { question: "In 'It is very cold', identify the adverb.", choices: ["It", "is", "very", "cold"], correctIndex: 2, explanation: "'Very' modifies the adjective 'cold'." },
    { question: "In 'She eats slowly', identify the adverb.", choices: ["She", "eats", "slowly", "food"], correctIndex: 2, explanation: "'Slowly' tells how she eats." },
    { question: "In 'We met yesterday', identify the adverb.", choices: ["We", "met", "yesterday", "us"], correctIndex: 2, explanation: "'Yesterday' tells when we met." },
    { question: "In 'Look up', identify the adverb.", choices: ["Look", "up", "you", "none"], correctIndex: 1, explanation: "'Up' indicates direction/place." },
    { question: "In 'I am fully prepared', identify the adverb.", choices: ["I", "am", "fully", "prepared"], correctIndex: 2, explanation: "'Fully' modifies the adjective 'prepared'." },

    // 11-20: Classification
    { question: "What type of adverb is 'tomorrow'?", choices: ["Manner", "Time", "Place", "Degree"], correctIndex: 1, explanation: "It answers the question 'When?'." },
    { question: "What type of adverb is 'here'?", choices: ["Manner", "Time", "Place", "Frequency"], correctIndex: 2, explanation: "It answers the question 'Where?'." },
    { question: "What type of adverb is 'beautifully'?", choices: ["Manner", "Time", "Place", "Degree"], correctIndex: 0, explanation: "It answers the question 'How?'." },
    { question: "What type of adverb is 'always'?", choices: ["Manner", "Time", "Frequency", "Degree"], correctIndex: 2, explanation: "It tells how often something happens." },
    { question: "What type of adverb is 'outside'?", choices: ["Manner", "Time", "Place", "Degree"], correctIndex: 2, explanation: "It indicates location." },
    { question: "What type of adverb is 'carefully'?", choices: ["Manner", "Time", "Place", "Frequency"], correctIndex: 0, explanation: "It describes the manner of action." },
    { question: "What type of adverb is 'soon'?", choices: ["Manner", "Time", "Place", "Degree"], correctIndex: 1, explanation: "It indicates a time in the near future." },
    { question: "What type of adverb is 'everywhere'?", choices: ["Manner", "Time", "Place", "Frequency"], correctIndex: 2, explanation: "It indicates location." },
    { question: "What type of adverb is 'rarely'?", choices: ["Manner", "Time", "Frequency", "Place"], correctIndex: 2, explanation: "It indicates frequency." },
    { question: "What type of adverb is 'quite'?", choices: ["Manner", "Time", "Place", "Degree"], correctIndex: 3, explanation: "It indicates intensity or degree." },

    // 21-30: Fill in the blank
    { question: "She walked ______ down the street.", choices: ["slow", "slowly", "slower", "slowest"], correctIndex: 1, explanation: "Use the adverb 'slowly' to modify the verb 'walked'." },
    { question: "He speaks English ______.", choices: ["fluent", "fluently", "fluency", "most fluent"], correctIndex: 1, explanation: "Use 'fluently' to modify 'speaks'." },
    { question: "The dog barked ______.", choices: ["loud", "loudly", "loudness", "louder"], correctIndex: 1, explanation: "Use 'loudly' to describe the barking." },
    { question: "Please hold the glass ______.", choices: ["careful", "carefully", "care", "caring"], correctIndex: 1, explanation: "Use 'carefully' to modify 'hold'." },
    { question: "She answered ______.", choices: ["correct", "correctly", "correction", "corrects"], correctIndex: 1, explanation: "Use 'correctly' to modify 'answered'." },
    { question: "The sun shines ______.", choices: ["bright", "brightly", "brightness", "brighter"], correctIndex: 1, explanation: "Use 'brightly' to modify 'shines'." },
    { question: "He waited ______ for his turn.", choices: ["patient", "patiently", "patience", "patients"], correctIndex: 1, explanation: "Use 'patiently' to modify 'waited'." },
    { question: "The rain fell ______.", choices: ["heavy", "heavily", "heavier", "heaviest"], correctIndex: 1, explanation: "Change y to i + ly -> heavily." },
    { question: "They lived ______ ever after.", choices: ["happy", "happily", "happiness", "happier"], correctIndex: 1, explanation: "Change y to i + ly -> happily." },
    { question: "Drive ______!", choices: ["safe", "safely", "safety", "saver"], correctIndex: 1, explanation: "Use 'safely' to modify the verb 'drive'." },

    // 31-40: Adjective vs Adverb
    { question: "He is a ______ driver.", choices: ["careful", "carefully"], correctIndex: 0, explanation: "'Driver' is a noun, so use the adjective 'careful'." },
    { question: "He drives ______.", choices: ["careful", "carefully"], correctIndex: 1, explanation: "'Drives' is a verb, so use the adverb 'carefully'." },
    { question: "She has a ______ voice.", choices: ["loud", "loudly"], correctIndex: 0, explanation: "'Voice' is a noun, so use the adjective 'loud'." },
    { question: "She speaks ______.", choices: ["loud", "loudly"], correctIndex: 1, explanation: "'Speaks' is a verb, so use the adverb 'loudly'." },
    { question: "This math problem is ______.", choices: ["easy", "easily"], correctIndex: 0, explanation: "'Is' acts as a linking verb describing the noun 'problem'." },
    { question: "I can solve it ______.", choices: ["easy", "easily"], correctIndex: 1, explanation: "'Solve' is an action verb, use 'easily'." },
    { question: "Be ______.", choices: ["quiet", "quietly"], correctIndex: 0, explanation: "After 'be', use an adjective." },
    { question: "Work ______.", choices: ["quiet", "quietly"], correctIndex: 1, explanation: "Modifying the verb 'work', use 'quietly'." },
    { question: "The test was ______.", choices: ["bad", "badly"], correctIndex: 0, explanation: "Linking verb 'was' connects to adjective 'bad'." },
    { question: "The team played ______.", choices: ["bad", "badly"], correctIndex: 1, explanation: "Action verb 'played' needs adverb 'badly'." },

    // 41-50: Spelling & Formation
    { question: "Adverb form of 'happy'?", choices: ["happyly", "happily", "happely", "happly"], correctIndex: 1, explanation: "Change y to i and add ly." },
    { question: "Adverb form of 'terrible'?", choices: ["terribly", "terriblely", "terriby", "terriblly"], correctIndex: 0, explanation: "Drop the 'e' and add 'y'." },
    { question: "Adverb form of 'gentle'?", choices: ["gently", "gentlely", "gentlyly", "gentily"], correctIndex: 0, explanation: "Drop the 'e' and add 'y'." },
    { question: "Adverb form of 'basic'?", choices: ["basicly", "basically", "basicaly", "basiclly"], correctIndex: 1, explanation: "Add -ally to words ending in -ic." },
    { question: "Adverb form of 'tragic'?", choices: ["tragicly", "tragically", "tragicaly", "tragicy"], correctIndex: 1, explanation: "Add -ally to words ending in -ic." },
    { question: "Adverb form of 'full'?", choices: ["fully", "fuly", "fullly", "fullley"], correctIndex: 0, explanation: "Just add 'y' to full." },
    { question: "Adverb form of 'angry'?", choices: ["angryly", "angrily", "angrely", "angry"], correctIndex: 1, explanation: "Change y to i + ly." },
    { question: "Adverb form of 'fast'?", choices: ["fast", "fastly", "faster", "fastest"], correctIndex: 0, explanation: "'Fastly' is not a word. The adverb is 'fast'." },
    { question: "Adverb form of 'good'?", choices: ["goodly", "well", "good", "goodest"], correctIndex: 1, explanation: "The adverb of good is 'well'." },
    { question: "Adverb form of 'hard' (meaning 'with effort')?", choices: ["hard", "hardly", "harder", "hardest"], correctIndex: 0, explanation: "'Hardly' means barely. 'Hard' is the adverb for effort." }
  ],

  intermediate: [
    // 51-60: Good vs Well
    { question: "She plays the piano ______.", choices: ["good", "well", "better", "best"], correctIndex: 1, explanation: "Use 'well' to modify the verb 'plays'." },
    { question: "Her piano playing is ______.", choices: ["good", "well", "better", "best"], correctIndex: 0, explanation: "Use 'good' to describe the noun phrase 'piano playing'." },
    { question: "I don't feel ______ today.", choices: ["good", "well", "nice", "fine"], correctIndex: 1, explanation: "When referring to health, 'well' is used as an adjective." },
    { question: "He did a ______ job.", choices: ["good", "well"], correctIndex: 0, explanation: "Adjective 'good' modifies noun 'job'." },
    { question: "The team played ______ yesterday.", choices: ["good", "well"], correctIndex: 1, explanation: "Adverb 'well' modifies verb 'played'." },
    { question: "It looks ______.", choices: ["good", "well"], correctIndex: 0, explanation: "'Looks' is a linking verb here, use adjective 'good'." },
    { question: "She speaks English ______.", choices: ["good", "well"], correctIndex: 1, explanation: "Modify 'speaks' with 'well'." },
    { question: "He is a ______ student.", choices: ["good", "well"], correctIndex: 0, explanation: "Modify 'student' with 'good'." },
    { question: "Did you sleep ______?", choices: ["good", "well"], correctIndex: 1, explanation: "Modify 'sleep' with 'well'." },
    { question: "The food tastes ______.", choices: ["good", "well"], correctIndex: 0, explanation: "Linking verb 'tastes' needs adjective 'good'." },

    // 61-70: Comparison
    { question: "He runs ______ than me.", choices: ["fast", "faster", "fastly", "more fast"], correctIndex: 1, explanation: "Comparative form of fast is 'faster'." },
    { question: "She works ______ than her brother.", choices: ["hard", "harder", "hardly", "more hard"], correctIndex: 1, explanation: "Comparative form of hard is 'harder'." },
    { question: "Please speak ______.", choices: ["more clearly", "clearlier", "most clearly", "clear"], correctIndex: 0, explanation: "Adverbs ending in -ly usually take 'more'." },
    { question: "He arrived ______ than expected.", choices: ["early", "earlier", "more early", "earliest"], correctIndex: 1, explanation: "Comparative of early is 'earlier'." },
    { question: "Of all the runners, he ran ______.", choices: ["fastest", "faster", "most fast", "fastly"], correctIndex: 0, explanation: "Superlative form is 'fastest'." },
    { question: "She sings ______ of all.", choices: ["beautifully", "more beautifully", "most beautifully", "beauty"], correctIndex: 2, explanation: "Superlative for -ly adverbs uses 'most'." },
    { question: "He drives ______ than his father.", choices: ["carefully", "more carefully", "most carefully", "carefuller"], correctIndex: 1, explanation: "Comparative for carefully is 'more carefully'." },
    { question: "Who woke up ______?", choices: ["earlier", "earliest", "early", "more early"], correctIndex: 1, explanation: "Implies comparison among a group, so 'earliest' (or earlier if two)." },
    { question: "I did ______ on the test than I thought.", choices: ["badly", "worse", "worst", "badder"], correctIndex: 1, explanation: "Comparative of badly is 'worse'." },
    { question: "He treats her ______ than anyone else.", choices: ["better", "best", "gooder", "well"], correctIndex: 0, explanation: "Comparative of well is 'better'." },

    // 71-80: Placement
    { question: "Choose the correct order:", choices: ["I always am late.", "I am always late.", "Always I am late.", "I am late always."], correctIndex: 1, explanation: "Frequency adverbs come AFTER 'to be'." },
    { question: "Choose the correct order:", choices: ["He often plays tennis.", "He plays often tennis.", "He plays tennis often.", "Often he plays tennis."], correctIndex: 0, explanation: "Frequency adverbs usually come BEFORE the main verb." },
    { question: "Choose the correct order:", choices: ["We usually go to the park.", "We go usually to the park.", "We go to the park usually.", "Usually we go to the park."], correctIndex: 0, explanation: "Best placement is before the main verb." },
    { question: "Choose the correct order:", choices: ["She doesn't always eat breakfast.", "She always doesn't eat breakfast.", "She doesn't eat always breakfast.", "She eats always breakfast."], correctIndex: 0, explanation: "In negatives, 'always' comes after the auxiliary 'doesn't'." },
    { question: "Choose the correct order:", choices: ["I have never been to Japan.", "I never have been to Japan.", "I have been never to Japan.", "I have been to Japan never."], correctIndex: 0, explanation: "Place 'never' between auxiliary 'have' and main verb 'been'." },
    { question: "Choose the correct order:", choices: ["They rarely watch TV.", "They watch rarely TV.", "Rarely they watch TV.", "They watch TV rarely."], correctIndex: 0, explanation: "Before the main verb 'watch'." },
    { question: "Choose the correct order:", choices: ["He is seldom angry.", "He seldom is angry.", "He is angry seldom.", "Seldom he is angry."], correctIndex: 0, explanation: "After the verb 'is'." },
    { question: "Choose the correct order:", choices: ["Do you often visit?", "Do often you visit?", "You do visit often?", "Visit you often?"], correctIndex: 0, explanation: "In questions: Aux + Subject + Adverb + Verb." },
    { question: "Choose the correct order:", choices: ["She sometimes cooks.", "She cooks sometimes.", "Sometimes she cooks.", "All are acceptable."], correctIndex: 3, explanation: "'Sometimes' is flexible and can go in front, middle, or end." },
    { question: "Choose the correct order:", choices: ["My dad usually works late.", "My dad works usually late.", "Usually works my dad late.", "My dad works late usually."], correctIndex: 0, explanation: "Before the main verb 'works'." },

    // 81-90: Hard vs Hardly, Late vs Lately
    { question: "He works ______.", choices: ["hard", "hardly"], correctIndex: 0, explanation: "'Hard' means with effort." },
    { question: "He ______ works.", choices: ["hard", "hardly"], correctIndex: 1, explanation: "'Hardly' means almost not at all." },
    { question: "I haven't seen him ______.", choices: ["late", "lately"], correctIndex: 1, explanation: "'Lately' means recently." },
    { question: "The bus arrived ______.", choices: ["late", "lately"], correctIndex: 0, explanation: "'Late' means not on time." },
    { question: "She can ______ see without her glasses.", choices: ["hard", "hardly"], correctIndex: 1, explanation: "Means 'barely' see." },
    { question: "He hit the ball ______.", choices: ["hard", "hardly"], correctIndex: 0, explanation: "With force/effort." },
    { question: "Have you been busy ______?", choices: ["late", "lately"], correctIndex: 1, explanation: "Meaning 'recently'." },
    { question: "He stayed up ______.", choices: ["late", "lately"], correctIndex: 0, explanation: "Far into the night." },
    { question: "There is ______ any food left.", choices: ["hard", "hardly"], correctIndex: 1, explanation: "'Hardly any' means almost none." },
    { question: "She tries ______ to succeed.", choices: ["hard", "hardly"], correctIndex: 0, explanation: "With great effort." },

    // 91-100: Intensifiers
    { question: "The soup is ______ hot to eat.", choices: ["very", "too", "enough", "much"], correctIndex: 1, explanation: "'Too' implies a negative excess (cannot eat it)." },
    { question: "He is strong ______ to lift it.", choices: ["very", "too", "enough", "so"], correctIndex: 2, explanation: "'Enough' comes AFTER the adjective." },
    { question: "She is ______ tired.", choices: ["very", "enough", "much", "many"], correctIndex: 0, explanation: "'Very' adds intensity." },
    { question: "It is ______ cold today.", choices: ["very", "enough", "much", "many"], correctIndex: 0, explanation: "'Very' modifies the adjective 'cold'." },
    { question: "He is not old ______ to drive.", choices: ["very", "too", "enough", "much"], correctIndex: 2, explanation: "Adjective + 'enough'." },
    { question: "The box is ______ heavy for me to lift.", choices: ["very", "too", "enough", "so"], correctIndex: 1, explanation: "'Too' + adj + for/to infinitive structure." },
    { question: "He ran fast ______ to win.", choices: ["very", "too", "enough", "so"], correctIndex: 2, explanation: "Adverb + 'enough'." },
    { question: "I am ______ happy for you.", choices: ["so", "too", "enough", "such"], correctIndex: 0, explanation: "'So' or 'very' works here for emphasis." },
    { question: "It was ______ a good movie.", choices: ["so", "such", "very", "too"], correctIndex: 1, explanation: "'Such' is used before a noun phrase (a good movie)." },
    { question: "The tea is ______ sweet.", choices: ["very", "enough", "much", "many"], correctIndex: 0, explanation: "Simple intensifier." }
  
    
  advanced: [
    // 101-110: Inversion
    { question: "______ have I seen such a mess.", choices: ["Never", "Always", "Often", "Usually"], correctIndex: 0, explanation: "Negative adverbs at the start trigger inversion (Verb before Subject)." },
    { question: "Rarely ______ to the cinema.", choices: ["we go", "do we go", "we do go", "go we"], correctIndex: 1, explanation: "Inversion required: 'Rarely do we go'." },
    { question: "Seldom ______ such talent.", choices: ["one sees", "does one see", "sees one", "one does see"], correctIndex: 1, explanation: "Inversion required: 'Seldom does one see'." },
    { question: "Hardly ______ arrived when it rained.", choices: ["had I", "I had", "have I", "I have"], correctIndex: 0, explanation: "Structure: 'Hardly had I... when...'." },
    { question: "Little ______ that he was watching.", choices: ["did she know", "she knew", "she did know", "knew she"], correctIndex: 0, explanation: "Inversion with 'Little' (meaning 'not much')." },
    { question: "Nowhere ______ find a better offer.", choices: ["you will", "will you", "you can", "can"], correctIndex: 1, explanation: "Inversion with 'Nowhere'." },
    { question: "On no account ______ be opened.", choices: ["should this door", "this door should", "this door", "door should"], correctIndex: 0, explanation: "Inversion required after 'On no account'." },
    { question: "Not only ______ sing, but he also dances.", choices: ["he does", "does he", "he can", "he is"], correctIndex: 1, explanation: "Inversion after 'Not only'." },
    { question: "Scarcely ______ down when the phone rang.", choices: ["I sat", "did I sit", "had I sat", "was I sitting"], correctIndex: 2, explanation: "Scarcely + had + Subject + Past Participle." },
    { question: "Under no circumstances ______ leave.", choices: ["you should", "should you", "you must", "are you"], correctIndex: 1, explanation: "Inversion required after 'Under no circumstances'." },

    // 111-120: Placement of "Only"
    { question: "Meaning: 'No one else but John went.'", choices: ["Only John went.", "John went only.", "John only went.", "John went."], correctIndex: 0, explanation: "'Only' modifies 'John'." },
    { question: "Meaning: 'I merely looked at him (didn't talk).'", choices: ["Only I looked at him.", "I only looked at him.", "I looked at him only.", "I looked only at him."], correctIndex: 1, explanation: "'Only' modifies the verb 'looked'." },
    { question: "Meaning: 'She eats nothing but vegetables.'", choices: ["She only eats vegetables.", "She eats only vegetables.", "Only she eats vegetables.", "She eats vegetables only."], correctIndex: 1, explanation: "'Only' modifies 'vegetables'." },
    { question: "Place 'only' correctly: 'He lent me five pesos.' (Meaning: No more than 5).", choices: ["Only he lent me five pesos.", "He lent me only five pesos.", "He only lent me five pesos.", "He lent me five pesos only."], correctIndex: 1, explanation: "Modifying the amount 'five pesos'." },
    { question: "Meaning: 'It happens on Sundays and no other day.'", choices: ["It only happens on Sundays.", "It happens only on Sundays.", "Only it happens on Sundays.", "It happens on Sundays only."], correctIndex: 1, explanation: "Modifying 'on Sundays'." },
    { question: "The meeting lasted ______ an hour.", choices: ["only", "alone", "single", "justly"], correctIndex: 0, explanation: "'Only' fits best for duration." },
    { question: "______ three students passed.", choices: ["Only", "Justly", "Merely", "Alone"], correctIndex: 0, explanation: "Modifying the number 'three'." },
    { question: "I have ______ two hands.", choices: ["only", "alone", "merely", "single"], correctIndex: 0, explanation: "Limiting the quantity." },
    { question: "She is the ______ one who knows.", choices: ["only", "alone", "lonely", "solely"], correctIndex: 0, explanation: "'Only' acts as an adjective here." },
    { question: "He did it ______ for the money.", choices: ["only", "alone", "lonely", "solitary"], correctIndex: 0, explanation: "Meaning 'exclusively'." },

    // 121-130: Conjunctive Adverbs
    { question: "It rained hard; ______, we played soccer.", choices: ["however", "therefore", "moreover", "consequently"], correctIndex: 0, explanation: "Contrast logic." },
    { question: "He didn't study; ______, he failed.", choices: ["however", "therefore", "nevertheless", "otherwise"], correctIndex: 1, explanation: "Cause and effect." },
    { question: "The rent is high; ______, the location is bad.", choices: ["therefore", "moreover", "consequently", "thus"], correctIndex: 1, explanation: "Adding another negative point." },
    { question: "Run fast; ______, you will be late.", choices: ["otherwise", "therefore", "however", "besides"], correctIndex: 0, explanation: "Condition/Warning." },
    { question: "I love milk; ______, I am allergic to it.", choices: ["consequently", "however", "therefore", "moreover"], correctIndex: 1, explanation: "Contrast." },
    { question: "Select correct punctuation:", choices: ["He is sick, therefore he is absent.", "He is sick; therefore, he is absent.", "He is sick therefore, he is absent.", "He is sick; therefore he is absent."], correctIndex: 1, explanation: "Semicolon before, comma after." },
    { question: "Select correct punctuation:", choices: ["I tried hard; however, I failed.", "I tried hard, however I failed.", "I tried hard however, I failed.", "I tried hard; however I failed."], correctIndex: 0, explanation: "Semicolon before, comma after." },
    { question: "He is rich; ______, he is unhappy.", choices: ["nevertheless", "consequently", "therefore", "additionally"], correctIndex: 0, explanation: "Contrast/Unexpected result." },
    { question: "We have no money; ______, we can't buy it.", choices: ["however", "consequently", "nevertheless", "otherwise"], correctIndex: 1, explanation: "Result." },
    { question: "It was cold; ______, we went swimming.", choices: ["therefore", "besides", "nonetheless", "consequently"], correctIndex: 2, explanation: "Contrast (Synonym for nevertheless)." },

    // 131-140: Degree (Intensity)
    { question: "I ______ agree with you.", choices: ["completely", "very", "too", "much"], correctIndex: 0, explanation: "Modifying 'agree'." },
    { question: "It was ______ ridiculous.", choices: ["utterly", "very", "much", "many"], correctIndex: 0, explanation: "Strong intensifier for 'ridiculous'." },
    { question: "She is ______ prettier than her sister.", choices: ["much", "very", "too", "so"], correctIndex: 0, explanation: "Use 'much' with comparatives (much prettier)." },
    { question: "He is ______ the best player.", choices: ["by far", "very", "too", "so"], correctIndex: 0, explanation: "'By far' is used with superlatives." },
    { question: "I am ______ sorry.", choices: ["terribly", "terrible", "much", "many"], correctIndex: 0, explanation: "Intensifier for 'sorry'." },
    { question: "It is ______ freezing outside.", choices: ["absolutely", "very", "too", "fairly"], correctIndex: 0, explanation: "'Freezing' is an extreme adjective, use 'absolutely' not 'very'." },
    { question: "The movie was ______ hilarious.", choices: ["absolutely", "very", "slightly", "fairly"], correctIndex: 0, explanation: "'Hilarious' is extreme, use 'absolutely'." },
    { question: "I was ______ exhausted.", choices: ["totally", "very", "quite", "fairly"], correctIndex: 0, explanation: "'Exhausted' is extreme, use 'totally'." },
    { question: "It is ______ hot (meaning 'a little').", choices: ["rather", "too", "utterly", "completely"], correctIndex: 0, explanation: "'Rather' or 'fairly' means moderately." },
    { question: "She is ______ shorter than him.", choices: ["slightly", "very", "too", "quite"], correctIndex: 0, explanation: "Small degree of difference." },

    // 141-150: Viewpoint
    { question: "______, he didn't get the job.", choices: ["Unfortunately", "Unfortunate", "Happy", "Badly"], correctIndex: 0, explanation: "Comment on the whole sentence." },
    { question: "______, it will rain today.", choices: ["Presumably", "Presume", "Sure", "Definite"], correctIndex: 0, explanation: "Based on probability." },
    { question: "______, I don't care.", choices: ["Frankly", "Frank", "Honest", "True"], correctIndex: 0, explanation: "Meaning 'to be honest'." },
    { question: "______, he arrived on time.", choices: ["Surprisingly", "Surprising", "Surprise", "Shock"], correctIndex: 0, explanation: "Comment adverb." },
    { question: "______, there are no free seats.", choices: ["Regrettably", "Regret", "Sorry", "Sad"], correctIndex: 0, explanation: "Formal comment adverb." },
    { question: "______, she is the best candidate.", choices: ["Undoubtedly", "Doubt", "Sure", "Uncertain"], correctIndex: 0, explanation: "Expressing certainty." },
    { question: "______, we need to cut costs.", choices: ["Basically", "Basic", "Base", "Basis"], correctIndex: 0, explanation: "Summarizing." },
    { question: "______, I prefer tea.", choices: ["Personally", "Person", "Private", "Self"], correctIndex: 0, explanation: "Expressing personal opinion." },
    { question: "______, he is right.", choices: ["Technically", "Technical", "Technique", "Tech"], correctIndex: 0, explanation: "According to the rules." },
    { question: "______, it was a disaster.", choices: ["Essentially", "Essential", "Essence", "Real"], correctIndex: 0, explanation: "Summarizing the nature of it." }
  ],

  super: [
    // 151-160: Flat Adverbs & Tricky Pairs
    { question: "He threw the ball ______.", choices: ["high", "highly"], correctIndex: 0, explanation: "'High' refers to physical height." },
    { question: "He is ______ respected.", choices: ["high", "highly"], correctIndex: 1, explanation: "'Highly' means 'very' or figurative." },
    { question: "I dove ______ into the ocean.", choices: ["deep", "deeply"], correctIndex: 0, explanation: "'Deep' refers to physical depth." },
    { question: "I was ______ moved by the movie.", choices: ["deep", "deeply"], correctIndex: 1, explanation: "'Deeply' refers to emotion." },
    { question: "The bird flew ______.", choices: ["low", "lowly"], correctIndex: 0, explanation: "'Low' is the adverb for height." },
    { question: "He bowed ______.", choices: ["low", "lowly"], correctIndex: 0, explanation: "Physical action uses 'low'." },
    { question: "She arrived ______.", choices: ["late", "lately"], correctIndex: 0, explanation: "Not on time." },
    { question: "I haven't eaten ______.", choices: ["late", "lately"], correctIndex: 1, explanation: "Recently." },
    { question: "Stand ______.", choices: ["clear", "clearly"], correctIndex: 0, explanation: "Meaning 'away from'." },
    { question: "Speak ______.", choices: ["clear", "clearly"], correctIndex: 1, explanation: "Meaning 'audibly/understandably'." },

    // 161-170: Meaning Shift with -ly
    { question: "He works ______.", choices: ["hard", "hardly"], correctIndex: 0, explanation: "Effort." },
    { question: "He ______ works.", choices: ["hardly", "hard"], correctIndex: 0, explanation: "Scarcely." },
    { question: "The eagle flies ______.", choices: ["high", "highly"], correctIndex: 0, explanation: "Altitude." },
    { question: "It is ______ probable.", choices: ["high", "highly"], correctIndex: 1, explanation: "Degree." },
    { question: "He sat ______ to me.", choices: ["close", "closely"], correctIndex: 0, explanation: "Distance." },
    { question: "Listen ______.", choices: ["close", "closely"], correctIndex: 1, explanation: "Attention." },
    { question: "The door was ______ open.", choices: ["wide", "widely"], correctIndex: 0, explanation: "Physical width." },
    { question: "He is ______ known.", choices: ["wide", "widely"], correctIndex: 1, explanation: "Extent/Fame." },
    { question: "You are ______ right.", choices: ["dead", "deadly"], correctIndex: 0, explanation: "'Dead' means completely (dead right)." },
    { question: "It is a ______ weapon.", choices: ["dead", "deadly"], correctIndex: 1, explanation: "'Deadly' means lethal (adjective)." },

    // 171-180: Imposter Adjectives
    { question: "She is a ______ person.", choices: ["lovely", "lovelily"], correctIndex: 0, explanation: "'Lovely' is an adjective." },
    { question: "He behaved in a ______ manner.", choices: ["friendly", "friendlily"], correctIndex: 0, explanation: "'Friendlily' is awkward/rare. Use 'friendly manner'." },
    { question: "I feel ______.", choices: ["lonely", "lone"], correctIndex: 0, explanation: "'Lonely' is an adjective describing feeling." },
    { question: "It was a ______ meeting.", choices: ["timely", "timelily"], correctIndex: 0, explanation: "'Timely' is an adjective." },
    { question: "That looks ______.", choices: ["ugly", "uglily"], correctIndex: 0, explanation: "'Ugly' is an adjective." },
    { question: "He is a ______ man.", choices: ["kindly", "kindlily"], correctIndex: 0, explanation: "'Kindly' can be an adjective." },
    { question: "It was a ______ error.", choices: ["costly", "costlily"], correctIndex: 0, explanation: "'Costly' is an adjective." },
    { question: "Daily is an ______.", choices: ["Adjective only", "Adverb only", "Both"], correctIndex: 2, explanation: "Daily newspaper (Adj), I run daily (Adv)." },
    { question: "Early is an ______.", choices: ["Adjective only", "Adverb only", "Both"], correctIndex: 2, explanation: "Early bird (Adj), Arrived early (Adv)." },
    { question: "Fast is an ______.", choices: ["Adjective only", "Adverb only", "Both"], correctIndex: 2, explanation: "Fast car (Adj), Drive fast (Adv)." },

    // 181-190: Adverbial Objectives & Nouns as Adverbs
    { question: "Let's go ______.", choices: ["home", "to home"], correctIndex: 0, explanation: "'Home' acts as an adverb here." },
    { question: "I waited ______.", choices: ["two hours", "for two hours", "Both are correct"], correctIndex: 2, explanation: "Duration can be expressed with or without 'for'." },
    { question: "He ran ______.", choices: ["three miles", "for three miles", "Both are correct"], correctIndex: 2, explanation: "Distance." },
    { question: "See you ______.", choices: ["next week", "on next week"], correctIndex: 0, explanation: "Do not use 'on' before 'next'." },
    { question: "We met ______.", choices: ["last night", "on last night"], correctIndex: 0, explanation: "Do not use 'on' before 'last'." },
    { question: "Do it ______.", choices: ["this way", "on this way"], correctIndex: 0, explanation: "'This way' acts as an adverbial phrase." },
    { question: "They went ______.", choices: ["abroad", "to abroad"], correctIndex: 0, explanation: "'Abroad' is an adverb, no preposition needed." },
    { question: "Go ______.", choices: ["upstairs", "to upstairs"], correctIndex: 0, explanation: "'Upstairs' is an adverb." },
    { question: "Come ______.", choices: ["inside", "to inside"], correctIndex: 0, explanation: "'Inside' is an adverb here." },
    { question: "He went ______.", choices: ["downtown", "to downtown"], correctIndex: 0, explanation: "'Downtown' is an adverb." },

    // 191-200: Double Negatives & Redundancy
    { question: "I can't see ______.", choices: ["nothing", "anything"], correctIndex: 1, explanation: "Avoid double negative (can't + nothing)." },
    { question: "He hardly ______ speaks.", choices: ["never", "ever"], correctIndex: 1, explanation: "'Hardly' is negative, so use 'ever'." },
    { question: "I rarely ______ eat there.", choices: ["don't", "ever"], correctIndex: 1, explanation: "'Rarely' is negative. Don't use 'don't'." },
    { question: "Return back is ______.", choices: ["correct", "redundant"], correctIndex: 1, explanation: "'Return' means go back. 'Back' is redundant." },
    { question: "Repeat again is ______.", choices: ["correct", "redundant"], correctIndex: 1, explanation: "'Repeat' means say again." },
    { question: "Proceed forward is ______.", choices: ["correct", "redundant"], correctIndex: 1, explanation: "'Proceed' means move forward." },
    { question: "Revert back is ______.", choices: ["correct", "redundant"], correctIndex: 1, explanation: "Common error. Just use 'revert'." },
    { question: "Sufficient enough is ______.", choices: ["correct", "redundant"], correctIndex: 1, explanation: "Choose one: Sufficient OR Enough." },
    { question: "Scarcely ______ (meaning 'almost no one').", choices: ["anyone", "no one"], correctIndex: 0, explanation: "'Scarcely' is negative, use 'anyone'." },
    { question: "Barely ______ (meaning 'almost nothing').", choices: ["anything", "nothing"], correctIndex: 0, explanation: "'Barely' is negative, use 'anything'." }
  ]
};
