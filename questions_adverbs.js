const ADVERB_QUESTIONS = {
  beginner: [
    // --- 1-10: Identification (Finding the Adverb) ---
    { 
      question: "In 'He runs quickly', identify the adverb.", 
      choices: ["He", "runs", "quickly", "is"], 
      correctIndex: 2, 
      explanation: "The intended meaning is to describe how the action is done. The word 'quickly' tells how he runs and modifies the verb 'runs'. Words that describe how an action happens are adverbs. The other choices are a subject, a verb, and a linking verb."
    },
    { 
      question: "In 'She sings loudly', identify the adverb.", 
      choices: ["She", "sings", "loudly", "song"], 
      correctIndex: 2, 
      explanation: "The sentence describes the manner of singing. 'Loudly' answers the question 'How does she sing?' and modifies the verb 'sings'. Therefore, 'loudly' is the adverb."
    },
    { 
      question: "In 'They played happily', identify the adverb.", 
      choices: ["They", "played", "happily", "game"], 
      correctIndex: 2, 
      explanation: "The meaning focuses on how the action was done. 'Happily' modifies the verb 'played' by describing the manner or feeling of the action. Adverbs describe verbs, not nouns."
    },
    { 
      question: "In 'Go inside now', identify the adverb.", 
      choices: ["Go", "inside", "now", "Both B and C"], 
      correctIndex: 3, 
      explanation: "The sentence contains two words that modify the verb 'go'. 'Inside' tells where to go (adverb of place), and 'now' tells when to go (adverb of time). Since both modify the verb, both are adverbs."
    },
    { 
      question: "In 'He never lies', identify the adverb.", 
      choices: ["He", "never", "lies", "is"], 
      correctIndex: 1, 
      explanation: "The sentence expresses how often the action happens. 'Never' modifies the verb 'lies' by showing frequency (at no time). Words that answer 'how often' are adverbs of frequency."
    },
    { 
      question: "In 'It is very cold', identify the adverb.", 
      choices: ["It", "is", "very", "cold"], 
      correctIndex: 2, 
      explanation: "The adjective 'cold' describes the subject. The word 'very' modifies the adjective 'cold' by showing degree or intensity. Adverbs can modify adjectives, so 'very' is the adverb."
    },
    { 
      question: "In 'She eats slowly', identify the adverb.", 
      choices: ["She", "eats", "slowly", "food"], 
      correctIndex: 2, 
      explanation: "The sentence describes how the action is performed. 'Slowly' modifies the verb 'eats' by describing the manner of eating. Therefore, it is the adverb."
    },
    { 
      question: "In 'We met yesterday', identify the adverb.", 
      choices: ["We", "met", "yesterday", "us"], 
      correctIndex: 2, 
      explanation: "The word 'yesterday' tells when the action happened. It modifies the verb 'met' by expressing time. Words that answer 'when' are adverbs of time."
    },
    { 
      question: "In 'Look up', identify the adverb.", 
      choices: ["Look", "up", "you", "none"], 
      correctIndex: 1, 
      explanation: "The verb 'look' needs direction. The word 'up' tells where to look and modifies the verb. In this sentence, 'up' functions as an adverb of direction."
    },
    { 
      question: "In 'I am fully prepared', identify the adverb.", 
      choices: ["I", "am", "fully", "prepared"], 
      correctIndex: 2, 
      explanation: "The word 'prepared' describes a state, functioning like an adjective. 'Fully' modifies 'prepared' by showing degree or completeness. Adverbs can modify adjectives, so 'fully' is the adverb."
    },

    // --- 11-20: Classification (Types of Adverbs) ---
    { 
      question: "What type of adverb is 'tomorrow'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 1, 
      explanation: "'Tomorrow' answers the question 'When does the action happen?' Words that express time are classified as adverbs of time."
    },
    { 
      question: "What type of adverb is 'here'?", 
      choices: ["Manner", "Time", "Place", "Frequency"], 
      correctIndex: 2, 
      explanation: "'Here' answers the question 'Where?' It indicates location, so it is an adverb of place."
    },
    { 
      question: "What type of adverb is 'beautifully'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 0, 
      explanation: "'Beautifully' describes how an action is done. Words that answer 'how' describe manner, making it an adverb of manner."
    },
    { 
      question: "What type of adverb is 'always'?", 
      choices: ["Manner", "Time", "Frequency", "Degree"], 
      correctIndex: 2, 
      explanation: "'Always' tells how often an action happens. Words that show repetition or regularity are adverbs of frequency."
    },
    { 
      question: "What type of adverb is 'outside'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 2, 
      explanation: "'Outside' tells where an action takes place. It answers the question 'Where?' and is therefore an adverb of place."
    },
    { 
      question: "What type of adverb is 'carefully'?", 
      choices: ["Manner", "Time", "Place", "Frequency"], 
      correctIndex: 0, 
      explanation: "'Carefully' explains how an action is performed. Words that describe how something is done are adverbs of manner."
    },
    { 
      question: "What type of adverb is 'soon'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 1, 
      explanation: "'Soon' refers to a point in time in the near future. Words that answer 'when' are adverbs of time."
    },
    { 
      question: "What type of adverb is 'everywhere'?", 
      choices: ["Manner", "Time", "Place", "Frequency"], 
      correctIndex: 2, 
      explanation: "'Everywhere' refers to all locations. It answers 'where' and is classified as an adverb of place."
    },
    { 
      question: "What type of adverb is 'rarely'?", 
      choices: ["Manner", "Time", "Frequency", "Place"], 
      correctIndex: 2, 
      explanation: "'Rarely' shows how often something happens. It expresses frequency, so it is an adverb of frequency."
    },
    { 
      question: "What type of adverb is 'quite'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 3, 
      explanation: "'Quite' modifies an adjective or another adverb by showing intensity. Words that show degree or extent are adverbs of degree."
    },

    // --- 21-30: Fill in the blank (Basic Forms) ---
    { 
      question: "She walked ______ down the street.", 
      choices: ["slow", "slowly", "slower", "slowest"], 
      correctIndex: 1, 
      explanation: "The sentence describes how the action 'walked' was done. Words that describe how a verb is performed must be adverbs. 'Slowly' modifies the verb 'walked'. The other choices are adjective or comparative/superlative forms that do not fit."
    },
    { 
      question: "He speaks English ______.", 
      choices: ["fluent", "fluently", "fluency", "most fluent"], 
      correctIndex: 1, 
      explanation: "The word must describe the action 'speaks'. 'Fluently' is the adverb form that modifies the verb. 'Fluent' is an adjective, and 'fluency' is a noun."
    },
    { 
      question: "The dog barked ______.", 
      choices: ["loud", "loudly", "loudness", "louder"], 
      correctIndex: 1, 
      explanation: "The sentence focuses on how the barking happened. 'Loudly' modifies the verb 'barked' and describes manner. The other choices are an adjective, a noun, and a comparative form."
    },
    { 
      question: "Please hold the glass ______.", 
      choices: ["careful", "carefully", "care", "caring"], 
      correctIndex: 1, 
      explanation: "The command tells how the action 'hold' should be done. 'Carefully' modifies the verb and shows manner. 'Careful' is an adjective and cannot modify a verb directly."
    },
    { 
      question: "She answered ______.", 
      choices: ["correct", "correctly", "correction", "corrects"], 
      correctIndex: 1, 
      explanation: "The sentence describes how she answered. 'Correctly' modifies the verb 'answered'. The other choices are an adjective, a noun, and a verb."
    },
    { 
      question: "The sun shines ______.", 
      choices: ["bright", "brightly", "brightness", "brighter"], 
      correctIndex: 1, 
      explanation: "Here, 'shines' is an action verb. 'Brightly' modifies the verb by describing how the sun shines. 'Bright' would describe a noun, not the action."
    },
    { 
      question: "He waited ______ for his turn.", 
      choices: ["patient", "patiently", "patience", "patients"], 
      correctIndex: 1, 
      explanation: "The word must describe how he waited. 'Patiently' modifies the verb 'waited'. The other options are an adjective, a noun, and a plural noun."
    },
    { 
      question: "The rain fell ______.", 
      choices: ["heavy", "heavily", "heavier", "heaviest"], 
      correctIndex: 1, 
      explanation: "The sentence describes the manner of falling. 'Heavily' modifies the verb 'fell'. 'Heavy' is an adjective and cannot directly modify a verb."
    },
    { 
      question: "They lived ______ ever after.", 
      choices: ["happy", "happily", "happiness", "happier"], 
      correctIndex: 1, 
      explanation: "The sentence describes how they lived. 'Happily' modifies the verb 'lived'. The adjective 'happy' describes nouns, not actions."
    },
    { 
      question: "Drive ______!", 
      choices: ["safe", "safely", "safety", "saver"], 
      correctIndex: 1, 
      explanation: "This is a command describing how to drive. 'Safely' modifies the verb 'drive'. 'Safe' is an adjective and cannot modify a verb directly."
    },

    // --- 31-40: Adjective vs Adverb Distinction ---
    { 
      question: "He is a ______ driver.", 
      choices: ["careful", "carefully"], 
      correctIndex: 0, 
      explanation: "The word describes the noun 'driver'. Adjectives describe nouns, so 'careful' is correct. 'Carefully' is an adverb and cannot describe a noun."
    },
    { 
      question: "He drives ______.", 
      choices: ["careful", "carefully"], 
      correctIndex: 1, 
      explanation: "The word describes the action 'drives'. Adverbs describe verbs, so 'carefully' is correct."
    },
    { 
      question: "She has a ______ voice.", 
      choices: ["loud", "loudly"], 
      correctIndex: 0, 
      explanation: "The word describes the noun 'voice'. Adjectives describe nouns, so 'loud' is correct."
    },
    { 
      question: "She speaks ______.", 
      choices: ["loud", "loudly"], 
      correctIndex: 1, 
      explanation: "The sentence describes how she speaks. 'Loudly' modifies the verb 'speaks' and shows manner."
    },
    { 
      question: "This math problem is ______.", 
      choices: ["easy", "easily"], 
      correctIndex: 0, 
      explanation: "'Is' is a linking verb connecting the subject to a description. Linking verbs are followed by adjectives, so 'easy' is correct."
    },
    { 
      question: "I can solve it ______.", 
      choices: ["easy", "easily"], 
      correctIndex: 1, 
      explanation: "The word describes how the action 'solve' is done. 'Easily' modifies the verb and is the correct adverb form."
    },
    { 
      question: "Be ______.", 
      choices: ["quiet", "quietly"], 
      correctIndex: 0, 
      explanation: "After the linking verb 'be', we describe the subject. 'Quiet' is an adjective describing the person."
    },
    { 
      question: "Work ______.", 
      choices: ["quiet", "quietly"], 
      correctIndex: 1, 
      explanation: "The word describes how the action 'work' is done. 'Quietly' modifies the verb and shows manner."
    },
    { 
      question: "The test was ______.", 
      choices: ["bad", "badly"], 
      correctIndex: 0, 
      explanation: "'Was' is a linking verb. Linking verbs take adjectives, not adverbs. 'Bad' describes the test."
    },
    { 
      question: "The team played ______.", 
      choices: ["bad", "badly"], 
      correctIndex: 1, 
      explanation: "The word describes how the team played. 'Badly' modifies the verb 'played' and shows manner."
    },

    // --- 41-50: Spelling & Formation ---
    { 
      question: "Adverb form of 'happy'?", 
      choices: ["happyly", "happily", "happely", "happly"], 
      correctIndex: 1, 
      explanation: "When an adjective ends in 'y', change 'y' to 'i' and add 'ly'. Happy → happily. The other spellings are incorrect."
    },
    { 
      question: "Adverb form of 'terrible'?", 
      choices: ["terribly", "terriblely", "terriby", "terriblly"], 
      correctIndex: 0, 
      explanation: "For adjectives ending in 'le', drop the 'e' and add 'y'. Terrible → terribly."
    },
    { 
      question: "Adverb form of 'gentle'?", 
      choices: ["gently", "gentlely", "gentlyly", "gentily"], 
      correctIndex: 0, 
      explanation: "Adjectives ending in 'le' form adverbs by dropping 'e' and adding 'y'. Gentle → gently."
    },
    { 
      question: "Adverb form of 'basic'?", 
      choices: ["basicly", "basically", "basicaly", "basiclly"], 
      correctIndex: 1, 
      explanation: "Adjectives ending in 'ic' usually add '-ally'. Basic → basically."
    },
    { 
      question: "Adverb form of 'tragic'?", 
      choices: ["tragicly", "tragically", "tragicaly", "tragicy"], 
      correctIndex: 1, 
      explanation: "Adjectives ending in 'ic' take '-ally' to form adverbs. Tragic → tragically."
    },
    { 
      question: "Adverb form of 'full'?", 
      choices: ["fully", "fuly", "fullly", "fullley"], 
      correctIndex: 0, 
      explanation: "The correct spelling drops one 'l' before adding 'y'. Full → fully."
    },
    { 
      question: "Adverb form of 'angry'?", 
      choices: ["angryly", "angrily", "angrely", "angry"], 
      correctIndex: 1, 
      explanation: "Adjectives ending in 'y' change 'y' to 'i' before adding 'ly'. Angry → angrily."
    },
    { 
      question: "Adverb form of 'fast'?", 
      choices: ["fast", "fastly", "faster", "fastest"], 
      correctIndex: 0, 
      explanation: "'Fast' is an irregular (flat) adverb. It has the same form as the adjective. 'Fastly' is incorrect."
    },
    { 
      question: "Adverb form of 'good'?", 
      choices: ["goodly", "well", "good", "goodest"], 
      correctIndex: 1, 
      explanation: "'Good' is an adjective. Its adverb form is irregular: good → well."
    },
    { 
      question: "Adverb form of 'hard' (meaning 'with effort')?", 
      choices: ["hard", "hardly", "harder", "hardest"], 
      correctIndex: 0, 
      explanation: "'Hard' means 'with effort' and functions as an adverb without -ly. 'Hardly' has a different meaning ('almost not'), so it is incorrect here."
    }
  ],

  intermediate: [
    // --- 51-60: Good vs Well (Common Confusion) ---
    { 
      question: "She plays the piano ______.", 
      choices: ["good", "well", "better", "best"], 
      correctIndex: 1, 
      explanation: "The sentence describes how the action 'plays' is performed. Words that describe verbs must be adverbs. 'Well' is the adverb form of 'good'. 'Good' is an adjective and cannot modify a verb."
    },
    { 
      question: "Her piano playing is ______.", 
      choices: ["good", "well", "better", "best"], 
      correctIndex: 0, 
      explanation: "The word describes the noun phrase 'piano playing'. After the linking verb 'is', we use an adjective. 'Good' is the correct adjective. 'Well' is usually an adverb, except when referring to health."
    },
    { 
      question: "I don't feel ______ today.", 
      choices: ["good", "well", "nice", "fine"], 
      correctIndex: 1, 
      explanation: "When talking about health or physical condition, 'well' functions as an adjective. 'I don't feel well' means I am not healthy."
    },
    { 
      question: "He did a ______ job.", 
      choices: ["good", "well"], 
      correctIndex: 0, 
      explanation: "The word describes the noun 'job'. Adjectives describe nouns, so 'good job' is correct. 'Well' cannot describe a noun in this context."
    },
    { 
      question: "The team played ______ yesterday.", 
      choices: ["good", "well"], 
      correctIndex: 1, 
      explanation: "The sentence describes how the team played. Since 'played' is a verb, it must be modified by an adverb. 'Well' is the correct adverb."
    },
    { 
      question: "It looks ______.", 
      choices: ["good", "well"], 
      correctIndex: 0, 
      explanation: "'Looks' is a linking verb referring to appearance. Linking verbs are followed by adjectives, so 'good' is correct."
    },
    { 
      question: "She speaks English ______.", 
      choices: ["good", "well"], 
      correctIndex: 1, 
      explanation: "The sentence describes how she speaks. 'Well' modifies the verb 'speaks'. 'Good' is an adjective and cannot modify a verb."
    },
    { 
      question: "He is a ______ student.", 
      choices: ["good", "well"], 
      correctIndex: 0, 
      explanation: "The word describes the noun 'student'. Adjectives describe nouns, so 'good' is correct."
    },
    { 
      question: "Did you sleep ______?", 
      choices: ["good", "well"], 
      correctIndex: 1, 
      explanation: "The sentence asks about how the action 'sleep' happened. 'Well' is the adverb that modifies the verb."
    },
    { 
      question: "The food tastes ______.", 
      choices: ["good", "well"], 
      correctIndex: 0, 
      explanation: "'Tastes' is a linking verb that describes the food. Linking verbs take adjectives, so 'good' is correct."
    },

    // --- 61-70: Comparison of Adverbs ---
    { 
      question: "He runs ______ than me.", 
      choices: ["fast", "faster", "fastly", "more fast"], 
      correctIndex: 1, 
      explanation: "The sentence compares two actions. 'Fast' is a short (one-syllable) adverb, so its comparative form is made by adding '-er'. 'Faster' is correct. 'Fastly' is not a word."
    },
    { 
      question: "She works ______ than her brother.", 
      choices: ["hard", "harder", "hardly", "more hard"], 
      correctIndex: 1, 
      explanation: "'Hard' is a one-syllable adverb. To compare two actions, add '-er'. 'Harder' is correct. 'Hardly' changes the meaning to 'almost not'."
    },
    { 
      question: "Please speak ______.", 
      choices: ["more clearly", "clearlier", "most clearly", "clear"], 
      correctIndex: 0, 
      explanation: "'Clearly' ends in '-ly'. Adverbs ending in '-ly' form comparatives using 'more', not '-er'. Therefore, 'more clearly' is correct."
    },
    { 
      question: "He arrived ______ than expected.", 
      choices: ["early", "earlier", "more early", "earliest"], 
      correctIndex: 1, 
      explanation: "The sentence compares two times. 'Early' ends in 'y', so the comparative form changes 'y' to 'i' and adds '-er': earlier."
    },
    { 
      question: "Of all the runners, he ran ______.", 
      choices: ["fastest", "faster", "most fast", "fastly"], 
      correctIndex: 0, 
      explanation: "'Of all' shows comparison among more than two people. This requires the superlative form. 'Fastest' is the correct superlative of 'fast'."
    },
    { 
      question: "She sings ______ of all.", 
      choices: ["beautifully", "more beautifully", "most beautifully", "beauty"], 
      correctIndex: 2, 
      explanation: "The sentence compares her with everyone else. For '-ly' adverbs, the superlative form uses 'most'. Therefore, 'most beautifully' is correct."
    },
    { 
      question: "He drives ______ than his father.", 
      choices: ["carefully", "more carefully", "most carefully", "carefuller"], 
      correctIndex: 1, 
      explanation: "The sentence compares two people. 'Carefully' ends in '-ly', so the comparative form uses 'more'. 'More carefully' is correct."
    },
    { 
      question: "Among all the students, who woke up ______?", 
      choices: ["early", "earlier", "earliest", "more early"], 
      correctIndex: 2, 
      explanation: "'Among all' signals comparison of more than two people. The superlative form must be used. The correct answer is 'earliest'."
    },
    { 
      question: "I did ______ on the test than I thought.", 
      choices: ["badly", "worse", "worst", "badder"], 
      correctIndex: 1, 
      explanation: "'Badly' has an irregular comparative form. Badly → worse → worst. Because 'than' is used, the comparative 'worse' is required."
    },
    { 
      question: "He treats her ______ than anyone else.", 
      choices: ["better", "best", "gooder", "well"], 
      correctIndex: 0, 
      explanation: "'Well' has an irregular comparative form: well → better → best. Since the sentence compares two behaviors, 'better' is correct."
    },

    // --- 71-80: Placement (Where to put the adverb) ---
    { 
      question: "Choose the best sentence:", 
      choices: ["I always am late.", "I am always late.", "Always I am late.", "I am late always."], 
      correctIndex: 1, 
      explanation: "Frequency adverbs usually come after the verb 'be'. 'Always' modifies the state 'am late', so the correct placement is: I am always late."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["He often plays tennis.", "He plays often tennis.", "He often plays tennis often.", "He plays tennis often often."], 
      correctIndex: 0, 
      explanation: "Frequency adverbs normally come before the main verb. 'Often' modifies 'plays', so 'He often plays tennis' is the correct standard form."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["We usually go to the park.", "We go usually to the park.", "We go to the park usually.", "We go to usually the park."], 
      correctIndex: 0, 
      explanation: "'Usually' modifies the verb 'go'. The standard placement for frequency adverbs is before the main verb."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["She doesn't always eat breakfast.", "She always doesn't eat breakfast.", "She doesn't eat always breakfast.", "She eats always breakfast."], 
      correctIndex: 0, 
      explanation: "In negative sentences, the frequency adverb is placed between the auxiliary and the main verb. does not + always + eat."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["I have never been to Japan.", "I never have been to Japan.", "I have been never to Japan.", "I have been to Japan never."], 
      correctIndex: 0, 
      explanation: "In perfect tenses, the adverb comes between the auxiliary 'have' and the past participle. have + never + been."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["They rarely watch TV.", "They watch rarely TV.", "They rarely watch TV on weekdays.", "They watch TV rarely on weekdays rarely."], 
      correctIndex: 0, 
      explanation: "'Rarely' modifies the verb 'watch'. The standard position is before the main verb."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["He is seldom angry.", "He seldom is angry.", "He is angry seldom.", "Seldom he is angry."], 
      correctIndex: 0, 
      explanation: "With the verb 'be', frequency adverbs usually come after it. 'Seldom' modifies the state 'is angry'."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["Do you often visit?", "Do often you visit?", "You do visit often?", "Visit you often?"], 
      correctIndex: 0, 
      explanation: "In questions, the order is auxiliary + subject + adverb + main verb. Do + you + often + visit."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["She sometimes cooks.", "She cooks sometimes sometimes.", "Sometimes cooks she.", "She cooks sometimes always."], 
      correctIndex: 0, 
      explanation: "'Sometimes' modifies the verb 'cooks'. The middle position before the main verb is the standard and clearest form."
    },
    { 
      question: "Choose the best sentence:", 
      choices: ["My dad usually works late.", "My dad works usually late.", "Usually works my dad late.", "My dad works late usually usually."], 
      correctIndex: 0, 
      explanation: "'Usually' modifies the verb 'works'. The standard position is before the main verb."
    },

    // --- 81-90: Hard vs Hardly, Late vs Lately (Tricky Pairs) ---
    { 
      question: "He works ______.", 
      choices: ["hard", "hardly"], 
      correctIndex: 0, 
      explanation: "The intended meaning is that he works with effort. 'Hard' modifies the verb 'works' and means 'with effort'. 'Hardly' means 'almost not', which changes the meaning."
    },
    { 
      question: "He ______ works.", 
      choices: ["hard", "hardly"], 
      correctIndex: 1, 
      explanation: "The meaning is negative: he almost does not work. 'Hardly' is a negative adverb meaning 'almost not' and modifies the verb 'works'. Using 'hard' would mean he works with effort, which is the opposite meaning."
    },
    { 
      question: "I haven't seen him ______.", 
      choices: ["late", "lately"], 
      correctIndex: 1, 
      explanation: "The sentence means 'I have not seen him recently'. 'Lately' modifies the verb phrase and means 'recently'. 'Late' means 'not on time', which does not fit the meaning."
    },
    { 
      question: "The bus arrived ______.", 
      choices: ["late", "lately"], 
      correctIndex: 0, 
      explanation: "The meaning is 'not on time'. 'Late' modifies the verb 'arrived' and expresses delay. 'Lately' means 'recently' and does not describe punctuality."
    },
    { 
      question: "She can ______ see without her glasses.", 
      choices: ["hard", "hardly"], 
      correctIndex: 1, 
      explanation: "The sentence means she almost cannot see. 'Hardly' expresses near-negation and modifies the verb 'see'. 'Hard' would mean 'with effort', which is not the intended meaning."
    },
    { 
      question: "He hit the ball ______.", 
      choices: ["hard", "hardly"], 
      correctIndex: 0, 
      explanation: "The meaning is that he used force. 'Hard' modifies the verb 'hit' and means 'with force'. 'Hardly' would mean 'almost not hit', which is incorrect."
    },
    { 
      question: "Have you been busy ______?", 
      choices: ["late", "lately"], 
      correctIndex: 1, 
      explanation: "The question asks about recent time. 'Lately' modifies the verb phrase and means 'recently'. 'Late' refers to being not on time, which does not fit."
    },
    { 
      question: "He stayed up ______.", 
      choices: ["late", "lately"], 
      correctIndex: 0, 
      explanation: "The sentence describes time of night. 'Late' modifies the verb phrase 'stayed up' and means until a late hour. 'Lately' means 'recently' and changes the meaning."
    },
    { 
      question: "There is ______ any food left.", 
      choices: ["hard", "hardly"], 
      correctIndex: 1, 
      explanation: "'Hardly' is a negative adverb meaning 'almost none'. It modifies the quantity implied by 'any food'. 'Hard' does not express quantity or negation."
    },
    { 
      question: "She tries ______ to succeed.", 
      choices: ["hard", "hardly"], 
      correctIndex: 0, 
      explanation: "The meaning is that she makes strong effort. 'Hard' modifies the verb 'tries' and means 'with effort'. 'Hardly' would mean 'almost does not try', which is incorrect."
    },

    // --- 91-100: Intensifiers (Very, Too, Enough) ---
    { 
      question: "The soup is ______ hot to eat.", 
      choices: ["very", "too", "enough", "much"], 
      correctIndex: 1, 
      explanation: "The meaning is that the heat prevents eating. 'Too' expresses excess beyond what is acceptable. 'Very hot' does not automatically mean impossible to eat."
    },
    { 
      question: "He is strong ______ to lift it.", 
      choices: ["very", "too", "enough", "so"], 
      correctIndex: 2, 
      explanation: "'Enough' expresses sufficiency and comes after the adjective it modifies. 'Strong enough' means his strength is sufficient to lift it."
    },
    { 
      question: "She is ______ tired.", 
      choices: ["very", "enough", "much", "many"], 
      correctIndex: 0, 
      explanation: "'Very' intensifies the adjective 'tired'. 'Enough' would require a following purpose, and 'much/many' do not modify adjectives this way."
    },
    { 
      question: "It is ______ cold today.", 
      choices: ["very", "enough", "much", "many"], 
      correctIndex: 0, 
      explanation: "'Very' modifies base adjectives like 'cold'. 'Much' is normally used with comparatives (much colder), not with base adjectives."
    },
    { 
      question: "He is not old ______ to drive.", 
      choices: ["very", "too", "enough", "much"], 
      correctIndex: 2, 
      explanation: "The structure is adjective + enough + infinitive. 'Old enough to drive' expresses sufficient age. The other options do not fit this pattern."
    },
    { 
      question: "The box is ______ heavy for me to lift.", 
      choices: ["very", "too", "enough", "so"], 
      correctIndex: 1, 
      explanation: "'Too + adjective + for/to' expresses excess that makes an action impossible. 'Too heavy for me to lift' matches the meaning."
    },
    { 
      question: "He ran fast ______ to win.", 
      choices: ["very", "too", "enough", "so"], 
      correctIndex: 2, 
      explanation: "'Enough' follows the adverb it modifies. 'Fast enough' means sufficiently fast to achieve the result."
    },
    { 
      question: "I am ______ happy for you.", 
      choices: ["so", "too", "enough", "such"], 
      correctIndex: 0, 
      explanation: "'So' intensifies an adjective without adding a negative meaning. 'Too happy' would suggest excess, which is not intended here."
    },
    { 
      question: "It was ______ a good movie.", 
      choices: ["so", "such", "very", "too"], 
      correctIndex: 1, 
      explanation: "'Such' is used before 'a/an + adjective + noun'. 'Such a good movie' is the correct structure."
    },
    { 
      question: "The tea is ______ sweet.", 
      choices: ["very", "enough", "much", "many"], 
      correctIndex: 0, 
      explanation: "'Very' modifies adjectives directly. 'Enough' would need a following purpose, and 'much/many' do not modify adjectives in this way."
    }
  ],

  advanced: [
    // --- 101-110: Inversion (Advanced Grammar) ---
    { 
      question: "______ have I seen such a mess.", 
      choices: ["Never", "Always", "Often", "Usually"], 
      correctIndex: 0, 
      explanation: "The intended meaning is that at no time has this happened. When a negative adverb (never) begins a sentence, subject–auxiliary inversion is required. 'Never have I seen…' follows this rule. The other choices are not negative and do not trigger inversion."
    },
    { 
      question: "Rarely ______ to the cinema.", 
      choices: ["we go", "do we go", "we do go", "go we"], 
      correctIndex: 1, 
      explanation: "'Rarely' is a negative adverb. When it starts the sentence, the auxiliary 'do' must come before the subject. 'Rarely do we go…' is the correct inverted form."
    },
    { 
      question: "Seldom ______ such talent.", 
      choices: ["one sees", "does one see", "sees one", "one does see"], 
      correctIndex: 1, 
      explanation: "'Seldom' has a negative meaning. Sentence-initial negative adverbs require inversion using an auxiliary. 'Does one see' is the correct structure."
    },
    { 
      question: "Hardly ______ arrived when it rained.", 
      choices: ["had I", "I had", "have I", "I have"], 
      correctIndex: 0, 
      explanation: "The pattern is 'Hardly + had + subject + past participle'. This structure shows that one action happened immediately before another. 'Hardly had I arrived…' follows the required form."
    },
    { 
      question: "Little ______ that he was watching.", 
      choices: ["did she know", "she knew", "she did know", "knew she"], 
      correctIndex: 0, 
      explanation: "'Little' here means 'not at all'. As a negative adverb at the beginning, it triggers inversion. 'Did she know' correctly places the auxiliary before the subject."
    },
    { 
      question: "Nowhere ______ find a better offer.", 
      choices: ["you will", "will you", "you can", "can"], 
      correctIndex: 1, 
      explanation: "'Nowhere' is a negative adverb of place. When it begins a sentence, inversion is required. 'Will you find…' is the correct inverted form."
    },
    { 
      question: "On no account ______ be opened.", 
      choices: ["should this door", "this door should", "this door", "door should"], 
      correctIndex: 0, 
      explanation: "'On no account' is a strong negative expression. It requires inversion with a modal auxiliary. 'Should this door be opened' follows the rule."
    },
    { 
      question: "Not only ______ sing, but he also dances.", 
      choices: ["he does", "does he", "he can", "he is"], 
      correctIndex: 1, 
      explanation: "'Not only' at the beginning triggers inversion in the first clause. The auxiliary 'does' must come before the subject: 'Not only does he sing…'."
    },
    { 
      question: "Scarcely ______ down when the phone rang.", 
      choices: ["I sat", "did I sit", "had I sat", "was I sitting"], 
      correctIndex: 2, 
      explanation: "'Scarcely' is similar to 'hardly' and uses the inverted past perfect pattern. 'Scarcely had I sat down…' is the correct structure."
    },
    { 
      question: "Under no circumstances ______ leave.", 
      choices: ["you should", "should you", "you must", "are you"], 
      correctIndex: 1, 
      explanation: "'Under no circumstances' is a negative condition. It requires inversion with a modal auxiliary. 'Should you leave' follows the rule."
    },

    // --- 111-120: Placement of "Only" (Logic/Meaning) ---
    { 
      question: "Meaning: 'No one else but John went.'", 
      choices: ["Only John went.", "John went only.", "John only went.", "John went."], 
      correctIndex: 0, 
      explanation: "The meaning limits the subject. 'Only' must be placed directly before 'John' to show that no one else went. Other placements limit the action or add ambiguity."
    },
    { 
      question: "Meaning: 'I merely looked at him (didn't talk).'", 
      choices: ["Only I looked at him.", "I only looked at him.", "I looked at him only.", "I looked only at him."], 
      correctIndex: 1, 
      explanation: "The meaning limits the action itself. 'Only' is placed before the verb 'looked' to show that no other action (like speaking) happened."
    },
    { 
      question: "Meaning: 'She eats nothing but vegetables.'", 
      choices: ["She only eats vegetables.", "She eats only vegetables.", "Only she eats vegetables.", "She eats vegetables only."], 
      correctIndex: 1, 
      explanation: "The meaning limits the object of eating. 'Only' must be placed directly before 'vegetables' to show exclusivity of food."
    },
    { 
      question: "Place 'only' correctly: 'He lent me five pesos.' (Meaning: no more than five.)", 
      choices: ["Only he lent me five pesos.", "He lent me only five pesos.", "He only lent me five pesos.", "He lent me five pesos only."], 
      correctIndex: 1, 
      explanation: "The meaning limits the amount. 'Only' must be placed before 'five pesos'. Other placements limit the subject or the action instead."
    },
    { 
      question: "Meaning: 'It happens on Sundays and no other day.'", 
      choices: ["It only happens on Sundays.", "It happens only on Sundays.", "Only it happens on Sundays.", "It happens on Sundays only."], 
      correctIndex: 1, 
      explanation: "The meaning limits the time. 'Only' must be placed directly before the time expression 'on Sundays'. Other placements change what is being limited."
    },
    { 
      question: "The meeting lasted ______ an hour.", 
      choices: ["only", "alone", "single", "justly"], 
      correctIndex: 0, 
      explanation: "'Only' limits duration and means 'no more than'. The other words do not express limitation of time."
    },
    { 
      question: "______ three students passed.", 
      choices: ["Only", "Justly", "Merely", "Alone"], 
      correctIndex: 0, 
      explanation: "'Only' correctly limits the number. 'Merely' could work stylistically, but 'only' is the standard exam-safe choice."
    },
    { 
      question: "I have ______ two hands.", 
      choices: ["only", "alone", "merely", "single"], 
      correctIndex: 0, 
      explanation: "'Only' limits quantity. 'Alone' describes isolation, not number."
    },
    { 
      question: "She is the ______ one who knows.", 
      choices: ["only", "alone", "lonely", "solely"], 
      correctIndex: 0, 
      explanation: "'Only' functions as an adjective meaning 'sole'. The other options do not correctly describe uniqueness in this structure."
    },
    { 
      question: "He did it ______ for the money.", 
      choices: ["only", "alone", "lonely", "solitary"], 
      correctIndex: 0, 
      explanation: "'Only' limits the reason. It shows there was no other motivation."
    },

    // --- 121-130: Conjunctive Adverbs (Connectors) ---
    { 
      question: "It rained hard; ______, we played soccer.", 
      choices: ["however", "therefore", "moreover", "consequently"], 
      correctIndex: 0, 
      explanation: "'However' shows contrast between expectation and result. Rain usually stops play, but the opposite happened."
    },
    { 
      question: "He didn't study; ______, he failed.", 
      choices: ["however", "therefore", "nevertheless", "otherwise"], 
      correctIndex: 1, 
      explanation: "'Therefore' shows cause and effect. Not studying directly caused failure."
    },
    { 
      question: "The rent is high; ______, the location is bad.", 
      choices: ["therefore", "moreover", "consequently", "thus"], 
      correctIndex: 1, 
      explanation: "'Moreover' adds another point of the same type. Both facts are negative and cumulative."
    },
    { 
      question: "Run fast; ______, you will be late.", 
      choices: ["otherwise", "therefore", "however", "besides"], 
      correctIndex: 0, 
      explanation: "'Otherwise' means 'if not'. It warns of a consequence if the instruction is not followed."
    },
    { 
      question: "I love milk; ______, I am allergic to it.", 
      choices: ["consequently", "however", "therefore", "moreover"], 
      correctIndex: 1, 
      explanation: "'However' introduces a contrast between liking milk and being unable to consume it."
    },
    { 
      question: "Select the correct punctuation:", 
      choices: ["He is sick, therefore he is absent.", "He is sick; therefore, he is absent.", "He is sick therefore, he is absent.", "He is sick; therefore he is absent."], 
      correctIndex: 1, 
      explanation: "When joining two independent clauses with a conjunctive adverb, use a semicolon before it and a comma after it."
    },
    { 
      question: "Select the correct punctuation:", 
      choices: ["I tried hard; however, I failed.", "I tried hard, however I failed.", "I tried hard however, I failed.", "I tried hard; however I failed."], 
      correctIndex: 0, 
      explanation: "A semicolon is required before 'however' to link independent clauses, and a comma follows the conjunctive adverb."
    },
    { 
      question: "He is rich; ______, he is unhappy.", 
      choices: ["nevertheless", "consequently", "therefore", "additionally"], 
      correctIndex: 0, 
      explanation: "'Nevertheless' shows contrast and unexpected outcome despite the first clause."
    },
    { 
      question: "We have no money; ______, we can't buy it.", 
      choices: ["however", "consequently", "nevertheless", "otherwise"], 
      correctIndex: 1, 
      explanation: "'Consequently' expresses result. Having no money leads directly to inability to buy."
    },
    { 
      question: "It was cold; ______, we went swimming.", 
      choices: ["therefore", "besides", "nonetheless", "consequently"], 
      correctIndex: 2, 
      explanation: "'Nonetheless' shows that the action happened despite the condition."
    },

    // --- 131-140: Degree (Intensity) ---
    { 
      question: "I ______ agree with you.", 
      choices: ["completely", "very", "too", "much"], 
      correctIndex: 0, 
      explanation: "'Agree' is a verb that takes degree adverbs like 'completely' or 'fully'. 'Very' does not normally modify verbs directly."
    },
    { 
      question: "It was ______ ridiculous.", 
      choices: ["utterly", "very", "much", "many"], 
      correctIndex: 0, 
      explanation: "'Ridiculous' is an extreme adjective. Extreme adjectives take adverbs like 'utterly' or 'absolutely', not 'very'."
    },
    { 
      question: "She is ______ prettier than her sister.", 
      choices: ["much", "very", "too", "so"], 
      correctIndex: 0, 
      explanation: "Comparatives are intensified by 'much', 'far', or 'a lot'. 'Very' does not modify comparative forms."
    },
    { 
      question: "He is ______ the best player.", 
      choices: ["by far", "very", "too", "so"], 
      correctIndex: 0, 
      explanation: "Superlatives are intensified by expressions like 'by far'. 'Very' is not used with superlatives."
    },
    { 
      question: "I am ______ sorry.", 
      choices: ["terribly", "terrible", "much", "many"], 
      correctIndex: 0, 
      explanation: "'Terribly' is a common collocation meaning 'very'. It correctly modifies the adjective 'sorry'."
    },
    { 
      question: "It is ______ freezing outside.", 
      choices: ["absolutely", "very", "too", "fairly"], 
      correctIndex: 0, 
      explanation: "'Freezing' is an extreme adjective. It requires an intensifier like 'absolutely', not 'very'."
    },
    { 
      question: "The movie was ______ hilarious.", 
      choices: ["absolutely", "very", "slightly", "fairly"], 
      correctIndex: 0, 
      explanation: "'Hilarious' is an extreme adjective. 'Absolutely' correctly intensifies it."
    },
    { 
      question: "I was ______ exhausted.", 
      choices: ["totally", "very", "quite", "fairly"], 
      correctIndex: 0, 
      explanation: "'Exhausted' is an extreme adjective. 'Totally' correctly expresses full degree."
    },
    { 
      question: "It is ______ hot (meaning 'a little').", 
      choices: ["rather", "too", "utterly", "completely"], 
      correctIndex: 0, 
      explanation: "'Rather' expresses a moderate degree. The other choices express excess or completeness."
    },
    { 
      question: "She is ______ shorter than him.", 
      choices: ["slightly", "very", "too", "quite"], 
      correctIndex: 0, 
      explanation: "'Slightly' correctly modifies a comparative adjective to show small difference."
    },

    // --- 141-150: Viewpoint & Comment Adverbs ---
    { 
      question: "______, he didn't get the job.", 
      choices: ["Unfortunately", "Unfortunate", "Happy", "Badly"], 
      correctIndex: 0, 
      explanation: "'Unfortunately' comments on the entire situation and expresses the speaker's judgment. Comment adverbs modify whole sentences."
    },
    { 
      question: "______, it will rain today.", 
      choices: ["Presumably", "Presume", "Sure", "Definite"], 
      correctIndex: 0, 
      explanation: "'Presumably' expresses assumption about the whole statement. The other options are not adverbs."
    },
    { 
      question: "______, I don't care.", 
      choices: ["Frankly", "Frank", "Honest", "True"], 
      correctIndex: 0, 
      explanation: "'Frankly' introduces the speaker's attitude toward the statement. It modifies the entire sentence."
    },
    { 
      question: "______, he arrived on time.", 
      choices: ["Surprisingly", "Surprising", "Surprise", "Shock"], 
      correctIndex: 0, 
      explanation: "'Surprisingly' comments on the unexpected nature of the event."
    },
    { 
      question: "______, there are no free seats.", 
      choices: ["Regrettably", "Regret", "Sorry", "Sad"], 
      correctIndex: 0, 
      explanation: "'Regrettably' is a formal comment adverb expressing negative evaluation of the situation."
    },
    { 
      question: "______, she is the best candidate.", 
      choices: ["Undoubtedly", "Doubt", "Sure", "Uncertain"], 
      correctIndex: 0, 
      explanation: "'Undoubtedly' expresses certainty about the whole statement."
    },
    { 
      question: "______, we need to cut costs.", 
      choices: ["Basically", "Basic", "Base", "Basis"], 
      correctIndex: 0, 
      explanation: "'Basically' summarizes the core idea of the statement."
    },
    { 
      question: "______, I prefer tea.", 
      choices: ["Personally", "Person", "Private", "Self"], 
      correctIndex: 0, 
      explanation: "'Personally' signals that the statement is the speaker's own viewpoint."
    },
    { 
      question: "______, he is right.", 
      choices: ["Technically", "Technical", "Technique", "Tech"], 
      correctIndex: 0, 
      explanation: "'Technically' shows correctness according to strict rules, even if contextually debatable."
    },
    { 
      question: "______, it was a disaster.", 
      choices: ["Essentially", "Essential", "Essence", "Real"], 
      correctIndex: 0, 
      explanation: "'Essentially' summarizes the true nature of the situation."
    }
  ],

  super: [
    // --- 151-160: Flat Adverbs & Tricky Pairs (Deep vs Deeply) ---
    { 
      question: "He threw the ball ______.", 
      choices: ["high", "highly"], 
      correctIndex: 0, 
      explanation: "The meaning refers to physical height or distance. 'High' modifies the verb 'threw' to show direction or height. 'Highly' is used for degree or figurative meaning, not physical height."
    },
    { 
      question: "He is ______ respected.", 
      choices: ["high", "highly"], 
      correctIndex: 1, 
      explanation: "The meaning is figurative, not physical. 'Highly' modifies the adjective 'respected' and means 'very'. 'High' cannot express degree."
    },
    { 
      question: "I dove ______ into the ocean.", 
      choices: ["deep", "deeply"], 
      correctIndex: 0, 
      explanation: "The meaning refers to physical depth. 'Deep' modifies the verb 'dove' to show distance downward. 'Deeply' is used for emotions or abstract meanings."
    },
    { 
      question: "I was ______ moved by the movie.", 
      choices: ["deep", "deeply"], 
      correctIndex: 1, 
      explanation: "The sentence describes emotional intensity. 'Deeply' modifies the verb phrase and expresses degree. 'Deep' is used only for physical depth."
    },
    { 
      question: "The bird flew ______.", 
      choices: ["low", "lowly"], 
      correctIndex: 0, 
      explanation: "The meaning is physical height. 'Low' modifies the verb 'flew'. 'Lowly' is an adjective meaning humble or of low status."
    },
    { 
      question: "He bowed ______.", 
      choices: ["low", "lowly"], 
      correctIndex: 0, 
      explanation: "The meaning refers to physical movement downward. 'Low' modifies the verb 'bowed'. 'Lowly' does not describe physical motion."
    },
    { 
      question: "She arrived ______.", 
      choices: ["late", "lately"], 
      correctIndex: 0, 
      explanation: "The meaning is 'not on time'. 'Late' modifies the verb 'arrived'. 'Lately' means 'recently' and changes the meaning."
    },
    { 
      question: "I haven't eaten ______.", 
      choices: ["late", "lately"], 
      correctIndex: 1, 
      explanation: "The meaning is 'recently'. 'Lately' modifies the verb phrase to express recent time. 'Late' refers to punctuality."
    },
    { 
      question: "Stand ______.", 
      choices: ["clear", "clearly"], 
      correctIndex: 0, 
      explanation: "'Clear' is a flat adverb meaning 'away from'. It modifies the verb 'stand'. 'Clearly' means 'in an understandable way', which is not intended."
    },
    { 
      question: "Speak ______.", 
      choices: ["clear", "clearly"], 
      correctIndex: 1, 
      explanation: "The sentence describes manner of speaking. 'Clearly' modifies the verb 'speak' and means 'in a way that can be understood'."
    },

    // --- 161-170: Meaning Shift with -ly ---
    { 
      question: "He works ______.", 
      choices: ["hard", "hardly"], 
      correctIndex: 0, 
      explanation: "The meaning is that he works with effort. 'Hard' modifies the verb 'works'. 'Hardly' means 'almost not', which changes the meaning."
    },
    { 
      question: "He ______ works.", 
      choices: ["hardly", "hard"], 
      correctIndex: 0, 
      explanation: "The meaning is near-negation. 'Hardly' means 'almost not' and modifies the verb 'works'. 'Hard' would mean 'with effort'."
    },
    { 
      question: "The eagle flies ______.", 
      choices: ["high", "highly"], 
      correctIndex: 0, 
      explanation: "The meaning refers to altitude. 'High' modifies the verb 'flies'. 'Highly' expresses degree, not physical height."
    },
    { 
      question: "It is ______ probable.", 
      choices: ["high", "highly"], 
      correctIndex: 1, 
      explanation: "The meaning expresses degree of probability. 'Highly' modifies the adjective 'probable'. 'High' cannot modify adjectives this way."
    },
    { 
      question: "He sat ______ to me.", 
      choices: ["close", "closely"], 
      correctIndex: 0, 
      explanation: "The meaning refers to physical distance. 'Close' modifies the verb 'sat'. 'Closely' means 'carefully' or 'attentively'."
    },
    { 
      question: "Listen ______.", 
      choices: ["close", "closely"], 
      correctIndex: 1, 
      explanation: "The meaning is 'pay careful attention'. 'Closely' modifies the verb 'listen' and expresses manner."
    },
    { 
      question: "The door was ______ open.", 
      choices: ["wide", "widely"], 
      correctIndex: 0, 
      explanation: "The meaning refers to physical extent. 'Wide' modifies the adjective 'open'. 'Widely' is used for distribution or figurative meaning."
    },
    { 
      question: "He is ______ known.", 
      choices: ["wide", "widely"], 
      correctIndex: 1, 
      explanation: "The meaning refers to how many people know him. 'Widely' modifies the adjective 'known' to show extent."
    },
    { 
      question: "You are ______ right.", 
      choices: ["dead", "deadly"], 
      correctIndex: 0, 
      explanation: "'Dead' is an idiomatic flat adverb meaning 'completely'. 'Deadly' is an adjective meaning 'causing death'."
    },
    { 
      question: "It is a ______ weapon.", 
      choices: ["dead", "deadly"], 
      correctIndex: 1, 
      explanation: "The word describes the noun 'weapon'. 'Deadly' is an adjective meaning 'capable of causing death'."
    },

    // --- 171-180: Imposter Adjectives (Ending in -ly) ---
    { 
      question: "She is a ______ person.", 
      choices: ["lovely", "lovelily"], 
      correctIndex: 0, 
      explanation: "'Lovely' is an adjective describing the noun 'person'. 'Lovelily' is not standard English."
    },
    { 
      question: "He behaved in a ______ manner.", 
      choices: ["friendly", "friendlily"], 
      correctIndex: 0, 
      explanation: "'Friendly' is an adjective. When no natural adverb exists, English uses 'in a + adjective + manner'."
    },
    { 
      question: "I feel ______.", 
      choices: ["lonely", "lone"], 
      correctIndex: 0, 
      explanation: "'Lonely' is an adjective describing emotional state. 'Lone' describes physical singularity, not feeling."
    },
    { 
      question: "It was a ______ meeting.", 
      choices: ["timely", "timelily"], 
      correctIndex: 0, 
      explanation: "'Timely' is an adjective meaning 'at the right time'. 'Timelily' is not a standard word."
    },
    { 
      question: "That looks ______.", 
      choices: ["ugly", "uglily"], 
      correctIndex: 0, 
      explanation: "'Looks' is a linking verb. Linking verbs are followed by adjectives, not adverbs."
    },
    { 
      question: "He is a ______ man.", 
      choices: ["kindly", "kindlily"], 
      correctIndex: 0, 
      explanation: "'Kindly' is an adjective here meaning kind or gentle. 'Kindlily' is not used in modern English."
    },
    { 
      question: "It was a ______ error.", 
      choices: ["costly", "costlily"], 
      correctIndex: 0, 
      explanation: "'Costly' is an adjective meaning expensive. 'Costlily' is not standard English."
    },
    { 
      question: "Daily is an ______.", 
      choices: ["Adjective only", "Adverb only", "Both"], 
      correctIndex: 2, 
      explanation: "'Daily' can describe a noun (a daily routine) or modify a verb (I exercise daily)."
    },
    { 
      question: "Early is an ______.", 
      choices: ["Adjective only", "Adverb only", "Both"], 
      correctIndex: 2, 
      explanation: "'Early' functions as both an adjective and an adverb depending on use."
    },
    { 
      question: "Fast is an ______.", 
      choices: ["Adjective only", "Adverb only", "Both"], 
      correctIndex: 2, 
      explanation: "'Fast' is a flat form used as both adjective and adverb. 'Fastly' is incorrect."
    },

    // --- 181-190: Adverbial Objectives & Nouns as Adverbs ---
    { 
      question: "Let's go ______.", 
      choices: ["home", "to home"], 
      correctIndex: 0, 
      explanation: "'Home' functions as an adverb with verbs of motion. Adding 'to' is incorrect."
    },
    { 
      question: "I waited ______.", 
      choices: ["two hours", "for two hours", "Both are correct"], 
      correctIndex: 2, 
      explanation: "Time duration can be expressed with or without 'for'. Both forms are grammatically correct."
    },
    { 
      question: "He ran ______.", 
      choices: ["three miles", "for three miles", "Both are correct"], 
      correctIndex: 2, 
      explanation: "Distance expressions can function directly as adverbial phrases with or without 'for'."
    },
    { 
      question: "See you ______.", 
      choices: ["next week", "on next week"], 
      correctIndex: 0, 
      explanation: "Prepositions are not used before 'next', 'last', 'this', or 'every' in time expressions."
    },
    { 
      question: "We met ______.", 
      choices: ["last night", "on last night"], 
      correctIndex: 0, 
      explanation: "'Last night' functions as an adverbial time expression without a preposition."
    },
    { 
      question: "Do it ______.", 
      choices: ["this way", "on this way"], 
      correctIndex: 0, 
      explanation: "'This way' is an adverbial phrase indicating manner. No preposition is needed."
    },
    { 
      question: "They went ______.", 
      choices: ["abroad", "to abroad"], 
      correctIndex: 0, 
      explanation: "'Abroad' is an adverb of place and does not take a preposition."
    },
    { 
      question: "Go ______.", 
      choices: ["upstairs", "to upstairs"], 
      correctIndex: 0, 
      explanation: "'Upstairs' functions as an adverb of place and does not require 'to'."
    },
    { 
      question: "Come ______.", 
      choices: ["inside", "to inside"], 
      correctIndex: 0, 
      explanation: "'Inside' is an adverb of place here and does not need a preposition."
    },
    { 
      question: "He went ______.", 
      choices: ["downtown", "to downtown"], 
      correctIndex: 0, 
      explanation: "'Downtown' functions as an adverb of place. Adding 'to' is incorrect."
    },

    // --- 191-200: Double Negatives & Redundancy ---
    { 
      question: "I can't see ______.", 
      choices: ["nothing", "anything"], 
      correctIndex: 1, 
      explanation: "'Can't' is already negative. Using 'nothing' would create a double negative. 'Anything' avoids this."
    },
    { 
      question: "He hardly ______ speaks.", 
      choices: ["never", "ever"], 
      correctIndex: 1, 
      explanation: "'Hardly' already expresses negation. 'Ever' is used to avoid a double negative."
    },
    { 
      question: "I rarely ______ eat there.", 
      choices: ["don't", "ever"], 
      correctIndex: 1, 
      explanation: "'Rarely' is negative in meaning. Adding 'don't' would be a double negative."
    },
    { 
      question: "Return back is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "'Return' already means 'go back'. Adding 'back' repeats the meaning."
    },
    { 
      question: "Repeat again is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "'Repeat' already means 'do again'. Adding 'again' is unnecessary."
    },
    { 
      question: "Proceed forward is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "'Proceed' already implies forward movement."
    },
    { 
      question: "Revert back is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "'Revert' means to return to a previous state. 'Back' repeats the meaning."
    },
    { 
      question: "Sufficient enough is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "'Sufficient' and 'enough' express the same idea. Using both is repetitive."
    },
    { 
      question: "Scarcely ______ (meaning 'almost no one').", 
      choices: ["anyone", "no one"], 
      correctIndex: 0, 
      explanation: "'Scarcely' is already negative. Using 'no one' would create a double negative."
    },
    { 
      question: "Barely ______ (meaning 'almost nothing').", 
      choices: ["anything", "nothing"], 
      correctIndex: 0, 
      explanation: "'Barely' expresses near-negation. 'Anything' avoids a double negative."
    }
  ]
};
