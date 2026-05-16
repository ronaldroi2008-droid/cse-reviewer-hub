// questions/adverb.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["adverbs"] = {
  // ============================================================
  // LEVEL 1: BEGINNER (50 Items) - Basic Identification & Types
  // ============================================================
  beginner: [
    // 1-10: Identification (Finding the Adverb)
 {
    "question": "In the sentence, 'The operations clerk runs quickly to deliver the documents,' identify the word functioning as the adverb.",
    "options": ["clerk", "runs", "quickly", "deliver"],
    "answer": "quickly",
    "explanation": "The word 'quickly' describes the manner in which the action is performed, thereby modifying the active verb 'runs'. Words that explain how an action happens are classified as adverbs of manner."
  },
  {
    "question": "In the sentence, 'She sings loudly during the local terminal assembly,' identify the word functioning as the adverb.",
    "options": ["She", "sings", "loudly", "assembly"],
    "answer": "loudly",
    "explanation": "The word 'loudly' directly answers the question 'How does she sing?' and serves to modify the active verb 'sings' by indicating the volume or manner of the action."
  },
  {
    "question": "In the sentence, 'The field workers played happily after completing their shift tasks,' identify the word functioning as the adverb.",
    "options": ["workers", "played", "happily", "tasks"],
    "answer": "happily",
    "explanation": "The word 'happily' modifies the verb 'played' by describing the emotional manner or state accompanying the structural action."
  },
  {
    "question": "In the sentence, 'The supervisor ordered the staff to go inside now,' identify the accurate adverbial assignment.",
    "options": ["go", "inside", "now", "Both 'inside' and 'now'"],
    "answer": "Both 'inside' and 'now'",
    "explanation": "In this instruction, 'inside' functions as an adverb of place answering 'where', while 'now' functions as an adverb of time answering 'when'. Both words simultaneously modify the verb phrase 'to go'."
  },
  {
    "question": "In the sentence, 'He never lies when submitting his formal operational reports,' identify the word functioning as the adverb.",
    "options": ["He", "never", "lies", "reports"],
    "answer": "never",
    "explanation": "The word 'never' modifies the active verb 'lies' by indicating frequency. Adverbs of frequency express how often an action occurs, ranging from 'always' to 'never'."
  },
  {
    "question": "In the sentence, 'The storage room is very cold during the winter season,' identify the word functioning as the adverb.",
    "options": ["storage", "is", "very", "cold"],
    "answer": "very",
    "explanation": "The word 'very' functions as an adverb of degree. It modifies the descriptive adjective 'cold' by intensifying its meaning. Remember that adverbs can modify verbs, adjectives, or other adverbs."
  },
  {
    "question": "In the sentence, 'She eats slowly during her designated lunch break,' identify the word functioning as the adverb.",
    "options": ["She", "eats", "slowly", "break"],
    "answer": "slowly",
    "explanation": "The word 'slowly' modifies the active verb 'eats' by detailing the speed or manner in which the subject performs the action."
  },
  {
    "question": "In the sentence, 'We met yesterday to finalize the franchise dashboard layout,' identify the word functioning as the adverb.",
    "options": ["We", "met", "yesterday", "layout"],
    "answer": "yesterday",
    "explanation": "The word 'yesterday' expresses the specific timeframe of the action, modifying the verb 'met' as a definitive adverb of time."
  },
  {
    "question": "In the mandatory directive, 'Look up when the machinery is actively operating,' identify the word functioning as the adverb.",
    "options": ["Look", "up", "when", "operating"],
    "answer": "up",
    "explanation": "The word 'up' indicates the physical direction or location of the action, modifying the imperative verb 'Look' as an adverb of place."
  },
  {
    "question": "In the sentence, 'I am fully prepared for the upcoming management evaluation,' identify the word functioning as the adverb.",
    "options": ["I", "am", "fully", "prepared"],
    "answer": "fully",
    "explanation": "The word 'fully' modifies the participial adjective 'prepared' by expressing the exact extent, degree, or completeness of the state."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'tomorrow'?",
    "options": ["Manner", "Time", "Place", "Degree"],
    "answer": "Time",
    "explanation": "The word 'tomorrow' designates a temporal point in the future, answering the foundational question 'When?' with respect to an action."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'here'?",
    "options": ["Manner", "Time", "Place", "Frequency"],
    "answer": "Place",
    "explanation": "The word 'here' identifies a specific location or spatial point relative to the speaker, categorizing it as an adverb of place."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'beautifully'?",
    "options": ["Manner", "Time", "Place", "Degree"],
    "answer": "Manner",
    "explanation": "The word 'beautifully' outlines the specific quality or manner in which an action is executed, answering the question 'How?'."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'always'?",
    "options": ["Manner", "Time", "Frequency", "Degree"],
    "answer": "Frequency",
    "explanation": "The word 'always' indicates that an action occurs at all times or without exception, classifying it as an adverb of frequency."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'outside'?",
    "options": ["Manner", "Time", "Place", "Degree"],
    "answer": "Place",
    "explanation": "The word 'outside' establishes an external physical location or boundary for an event, making it an adverb of place."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'carefully'?",
    "options": ["Manner", "Time", "Place", "Frequency"],
    "answer": "Manner",
    "explanation": "The word 'carefully' describes a state of caution or attentiveness applied during an action, identifying it as an adverb of manner."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'soon'?",
    "options": ["Manner", "Time", "Place", "Degree"],
    "answer": "Time",
    "explanation": "The word 'soon' indicates that an event will take place within a short period from the present moment, classifying it as an adverb of time."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'everywhere'?",
    "options": ["Manner", "Time", "Place", "Frequency"],
    "answer": "Place",
    "explanation": "The word 'everywhere' refers to an omnipresent or universal distribution across all locations, classifying it as an adverb of place."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'rarely'?",
    "options": ["Manner", "Time", "Frequency", "Place"],
    "answer": "Frequency",
    "explanation": "The word 'rarely' signifies that an action has a very low repetition rate or seldom occurs, classifying it as an adverb of frequency."
  },
  {
    "question": "What functional grammatical type of adverb is the word 'quite'?",
    "options": ["Manner", "Time", "Place", "Degree"],
    "answer": "Degree",
    "explanation": "The word 'quite' measures the intensity or extent of an adjective or another adverb, defining it structurally as an adverb of degree."
  },
  {
    "question": "Complete the statement using the correct word form: 'She walked ______ down the street to observe the station layout.'",
    "options": ["slow", "slowly", "slower", "slowest"],
    "answer": "slowly",
    "explanation": "To modify the action verb 'walked' by describing its manner, the adverbial form ending in '-ly' ('slowly') must be used instead of the adjective form 'slow'."
  },
  {
    "question": "Complete the statement using the correct word form: 'The international representative speaks English ______.'",
    "options": ["fluent", "fluently", "fluency", "most fluent"],
    "answer": "fluently",
    "explanation": "The word 'fluently' is the correct adverbial form required to modify the active communication verb 'speaks'."
  },
  {
    "question": "Complete the statement using the correct word form: 'The security guard's dog barked ______ at the intruder.'",
    "options": ["loud", "loudly", "loudness", "louder"],
    "answer": "loudly",
    "explanation": "The modifier describes how the dog barked. Therefore, the standard adverb of manner 'loudly' is required to qualify the verb 'barked'."
  },
  {
    "question": "Complete the statement using the correct word form: 'Please hold the fragile laboratory glass ______.'",
    "options": ["careful", "carefully", "care", "caring"],
    "answer": "carefully",
    "explanation": "The sentence requires an adverb of manner to specify how the action 'hold' should be executed safely; 'carefully' is the correct choice."
  },
  {
    "question": "Complete the statement using the correct word form: 'She answered all the audit verification questions ______.'",
    "options": ["correct", "correctly", "correction", "corrects"],
    "answer": "correctly",
    "explanation": "The word 'correctly' functions as an adverb of manner that modifies the active past-tense verb 'answered'."
  },
  {
    "question": "Complete the statement using the correct word form: 'The afternoon sun shines ______ across the newly painted platform.'",
    "options": ["bright", "brightly", "brightness", "brighter"],
    "answer": "brightly",
    "explanation": "The verb 'shines' is an active action verb in this context, demanding the adverbial modifier 'brightly' to express manner."
  },
  {
    "question": "Complete the statement using the correct word form: 'He waited ______ for his turn to present the quarterly strategy.'",
    "options": ["patient", "patiently", "patience", "patients"],
    "answer": "patiently",
    "explanation": "The term 'patiently' is the adverb of manner needed to describe how the subject sustained the state of waiting ('waited')."
  },
  {
    "question": "Complete the statement using the correct word form: 'The tropical rain fell ______ upon the construction site.'",
    "options": ["heavy", "heavily", "heavier", "heaviest"],
    "answer": "heavily",
    "explanation": "When an adjective ends in an consonant followed by '-y' (heavy), the adverb form drops the '-y', introduces an '-i', and appends '-ly' (heavily) to properly modify the verb 'fell'."
  },
  {
    "question": "Complete the statement using the correct word form: 'According to the story, they lived ______ ever after.'",
    "options": ["happy", "happily", "happiness", "happier"],
    "answer": "happily",
    "explanation": "The word modifies the verb 'lived'. Following standard spelling adjustments for terms ending in '-y', 'happily' is the correct adverbial choice."
  },
  {
    "question": "Complete the statement using the correct word form: 'To prevent workplace injuries, always drive ______!'",
    "options": ["safe", "safely", "safety", "saver"],
    "answer": "safely",
    "explanation": "The imperative command 'drive' requires an adverb of manner ('safely') to describe the correct execution of the action."
  },
  {
    "question": "Choose the correct word to complete the description: 'He is recognized by the company as a ______ driver.'",
    "options": ["careful", "carefully"],
    "answer": "careful",
    "explanation": "The word modifies the noun 'driver'. Under formal syntax rules, adjectives modify nouns, making 'careful' the correct grammatical choice."
  },
  {
    "question": "Choose the correct word to complete the description: 'He navigates the delivery routes and drives ______.'",
    "options": ["careful", "carefully"],
    "answer": "carefully",
    "explanation": "The word modifies the active action verb 'drives'. Adverbs are required to modify verbs, making 'carefully' the correct choice."
  },
  {
    "question": "Choose the correct word to complete the description: 'The customer service representative possesses a ______ voice.'",
    "options": ["loud", "loudly"],
    "answer": "loud",
    "explanation": "The word functions as a modifier for the common noun 'voice'. Because nouns are qualified by adjectives, 'loud' must be selected."
  },
  {
    "question": "Choose the correct word to complete the description: 'When addressing the crowded hall, she speaks ______.'",
    "options": ["loud", "loudly"],
    "answer": "loudly",
    "explanation": "The word modifies the communication verb 'speaks', which necessitates the use of the adverb of manner 'loudly'."
  },
  {
    "question": "Choose the correct word to complete the statement: 'The operational team noted that this math problem is ______.'",
    "options": ["easy", "easily"],
    "answer": "easy",
    "explanation": "The word 'is' functions as a static linking verb. Linking verbs connect the subject to a predicate adjective that describes the subject, rather than an adverb."
  },
  {
    "question": "Choose the correct word to complete the statement: 'The task is simple, and I can solve it ______.'",
    "options": ["easy", "easily"],
    "answer": "easily",
    "explanation": "The word modifies the transitive verb 'solve', requiring the adverb form 'easily' to denote the manner of resolution."
  },
  {
    "question": "Choose the correct word to complete the instruction: 'While inside the corporate archives, please be ______.'",
    "options": ["quiet", "quietly"],
    "answer": "quiet",
    "explanation": "The command relies on the linking verb 'be'. Linking verbs require a predicate adjective ('quiet') to describe the state of the implied subject."
  },
  {
    "question": "Choose the correct word to complete the instruction: 'To meet the project deadline, we must work ______.'",
    "options": ["quiet", "quietly"],
    "answer": "quietly",
    "explanation": "The modifier target is the active verb 'work'. Therefore, the adverb 'quietly' is the correct syntactical choice."
  },
  {
    "question": "Choose the correct word to complete the statement: 'The quality of the initial software test was ______.'",
    "options": ["bad", "badly"],
    "answer": "bad",
    "explanation": "The past-tense linking verb 'was' demands a predicate adjective to describe the subject ('test'). The adjective 'bad' is grammatically correct in this position."
  },
  {
    "question": "Choose the correct word to complete the statement: 'Despite practicing for weeks, the team played ______.'",
    "options": ["bad", "badly"],
    "answer": "badly",
    "explanation": "The modifier targets the action verb 'played', which strictly demands the adverb of manner 'badly' to show poor performance."
  },
  {
    "question": "Identify the correct spelling for the adverb form of the adjective 'happy':",
    "options": ["happyly", "happily", "happely", "happly"],
    "answer": "happily",
    "explanation": "For adjectives that end in a consonant followed by '-y', formal orthography rules dictate changing the '-y' to an '-i' before appending the '-ly' suffix."
  },
  {
    "question": "Identify the correct spelling for the adverb form of the adjective 'terrible':",
    "options": ["terribly", "terriblely", "terriby", "terriblly"],
    "answer": "terribly",
    "explanation": "When forming adverbs from adjectives that end in a consonant followed by '-le', you drop the final silent '-e' and substitute it with '-y'."
  },
  {
    "question": "Identify the correct spelling for the adverb form of the adjective 'gentle':",
    "options": ["gently", "gentlely", "gentlyly", "gentily"],
    "answer": "gently",
    "explanation": "Adjectives ending in a structural '-le' drop the final '-e' and directly absorb a '-y' to create the standard adverb form (gently)."
  },
  {
    "question": "Identify the correct spelling for the adverb form of the adjective 'basic':",
    "options": ["basicly", "basically", "basicaly", "basiclly"],
    "answer": "basically",
    "explanation": "Adjectives that terminate with the suffix '-ic' generally require the addition of '-ally' to form their corresponding adverbial structure."
  },
  {
    "question": "Identify the correct spelling for the adverb form of the adjective 'tragic':",
    "options": ["tragicly", "tragically", "tragicaly", "tragicy"],
    "answer": "tragically",
    "explanation": "Following the rule for '-ic' ending adjectives, the word 'tragic' must expand into 'tragically' to establish its proper adverbial form."
  },
  {
    "question": "Identify the correct spelling for the adverb form of the adjective 'full':",
    "options": ["fully", "fuly", "fullly", "fullley"],
    "answer": "fully",
    "explanation": "When an adjective already ends in a double 'l' ('full'), the standard adverbial transformation simplifies the junction by adding only a single '-y' to produce 'fully'."
  },
  {
    "question": "Identify the correct spelling for the adverb form of the adjective 'angry':",
    "options": ["angryly", "angrily", "angrely", "angry"],
    "answer": "angrily",
    "explanation": "The base adjective 'angry' features a terminal '-y' following a consonant. The orthographic rule requires changing the '-y' to '-i' and adding '-ly'."
  },
  {
    "question": "Identify the correct adverb form of the adjective 'fast':",
    "options": ["fast", "fastly", "faster", "fastest"],
    "answer": "fast",
    "explanation": "The word 'fast' is classified as a 'flat adverb' or irregular adverb. It maintains the exact same morphological spelling in both its adjectival and adverbial states; 'fastly' is not a recognized word in standard English."
  },
  {
    "question": "Identify the correct adverb form of the adjective 'good':",
    "options": ["goodly", "well", "good", "goodest"],
    "answer": "well",
    "explanation": "The adjective 'good' undergoes an irregular mutation when transitioning into an adverb, completely changing its root form to 'well'."
  },
  {
    "question": "Identify the correct adverb form of the adjective 'hard' when it is used to mean 'with great effort or intensity':",
    "options": ["hard", "hardly", "harder", "hardest"],
    "answer": "hard",
    "explanation": "The word 'hard' functions natively as both an adjective and an adverb. While 'hardly' exists, it is an adverb of degree that carries an entirely separate meaning: 'scarcely' or 'almost not at all'."
  }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Usage & Comparison
  // ============================================================
  intermediate: [
    // 51-60: Good vs Well (Common Confusion)
  {
    "question": "Complete the statement with the correct modifier: 'She plays the piano ______ during the company's annual recital.'",
    "options": ["good", "well", "better", "best"],
    "answer": "well",
    "explanation": "The word modifies the active verb phrase 'plays the piano'. Since adverbs are required to modify actions, 'well' (the irregular adverb form of 'good') is the correct choice."
  },
  {
    "question": "Complete the statement with the correct modifier: 'The music instructor noted that her piano playing is ______.'",
    "options": ["good", "well", "better", "best"],
    "answer": "good",
    "explanation": "The word follows the static linking verb 'is' and modifies the noun phrase 'piano playing'. Linking verbs require a predicate adjective rather than an adverb to describe the subject."
  },
  {
    "question": "Complete the statement with the correct modifier: 'I don't feel ______ today, so I may request a sick leave.'",
    "options": ["good", "well", "nice", "fine"],
    "answer": "well",
    "explanation": "When referring specifically to health, physical well-being, or medical condition after a linking verb like 'feel', standard formal English uses 'well' as a predicate adjective."
  },
  {
    "question": "Complete the statement with the correct modifier: 'The operations supervisor did a ______ job organizing the facility warehouse.'",
    "options": ["good", "well"],
    "answer": "good",
    "explanation": "The modifier directly precedes and describes the common noun 'job'. Under standard syntax rules, adjectives modify nouns, making 'good' the correct selection."
  },
  {
    "question": "Complete the statement with the correct modifier: 'The retail station team played ______ during yesterday's corporate sports fest.'",
    "options": ["good", "well"],
    "answer": "well",
    "explanation": "The modifier qualifies the active past-tense verb 'played'. An adverb of manner is required to describe how an action was performed, which dictates the use of 'well'."
  },
  {
    "question": "Complete the statement with the correct modifier: 'The newly updated franchise audit dashboard looks ______.'",
    "options": ["good", "well"],
    "answer": "good",
    "explanation": "The word 'looks' functions here as a sensory linking verb regarding appearance. Linking verbs must be followed by a predicate adjective ('good') to modify the subject."
  },
  {
    "question": "Complete the statement with the correct modifier: 'She speaks English ______ when communicating with international vendors.'",
    "options": ["good", "well"],
    "answer": "well",
    "explanation": "The word modifies the action verb 'speaks'. Because it describes the manner of speaking, the adverb 'well' is grammatically mandatory."
  },
  {
    "question": "Complete the statement with the correct modifier: 'He is recognized as a ______ student in the administrative training program.'",
    "options": ["good", "well"],
    "answer": "good",
    "explanation": "The word serves as an attributive modifier for the class noun 'student'. Adjectives are structurally required to qualify nouns, making 'good' correct."
  },
  {
    "question": "Complete the statement with the correct modifier: 'Did you sleep ______ before taking the mock examination?'",
    "options": ["good", "well"],
    "answer": "well",
    "explanation": "The question asks about the quality of the action 'sleep'. Because 'sleep' is an active verb, it must be modified by the adverb 'well'."
  },
  {
    "question": "Complete the statement with the correct modifier: 'The specialty food brand item tastes ______.'",
    "options": ["good", "well"],
    "answer": "good",
    "explanation": "In this context, 'tastes' functions as a sensory linking verb describing the state of the food. Linking verbs link the subject to an adjective ('good') rather than an adverb."
  },
  {
    "question": "Complete the comparison: 'The new delivery courier runs ______ than the previous one.'",
    "options": ["fast", "faster", "fastly", "more fast"],
    "answer": "faster",
    "explanation": "The word 'fast' is a short, single-syllable adverb. To form the comparative degree when comparing two actions, append the suffix '-er' directly to the root word."
  },
  {
    "question": "Complete the comparison: 'She works ______ than her brother to meet the store quotas.'",
    "options": ["hard", "harder", "hardly", "more hard"],
    "answer": "harder",
    "explanation": "The word 'hard' functions as a one-syllable adverb of manner. The comparative degree for single-syllable modifiers is formed by adding the suffix '-er'."
  },
  {
    "question": "Complete the comparison: 'To ensure accuracy in the minutes, please speak ______.'",
    "options": ["more clearly", "clearlier", "most clearly", "clear"],
    "answer": "more clearly",
    "explanation": "Adverbs that are formed by adding the '-ly' suffix to an adjective create their comparative form by placing the word 'more' before the adverb."
  },
  {
    "question": "Complete the comparison: 'The site inspector arrived ______ than expected this morning.'",
    "options": ["early", "earlier", "more early", "earliest"],
    "answer": "earlier",
    "explanation": "The adverb 'early' concludes with a '-y'. To form its comparative degree, change the terminal '-y' to an '-i' and add the suffix '-er'."
  },
  {
    "question": "Complete the comparison: 'Of all the regional runners who competed, he ran ______.'",
    "options": ["fastest", "faster", "most fast", "fastly"],
    "answer": "fastest",
    "explanation": "The phrase 'Of all' indicates a comparison involving more than two entities. This environment demands the superlative degree, which for the short adverb 'fast' is 'fastest'."
  },
  {
    "question": "Complete the comparison: 'She sings ______ of all the participants in the cultural exhibition.'",
    "options": ["beautifully", "more beautifully", "most beautifully", "beauty"],
    "answer": "most beautifully",
    "explanation": "When using a multi-syllable adverb ending in '-ly' in a superlative context (comparing more than two actions), place the modifier 'most' before the adverb."
  },
  {
    "question": "Complete the comparison: 'He drives ______ than his father when traversing the construction zones.'",
    "options": ["carefully", "more carefully", "most carefully", "carefuller"],
    "answer": "more carefully",
    "explanation": "To compare the driving actions of two distinct individuals using the '-ly' adverb 'carefully', the comparative word 'more' must precede it."
  },
  {
    "question": "Complete the comparison: 'Among all the trainees at the station, who woke up ______?'",
    "options": ["early", "earlier", "earliest", "more early"],
    "answer": "earliest",
    "explanation": "The prepositional phrase 'Among all' indicates a superlative comparison of three or more subjects. The superlative form of 'early' shifts the '-y' to '-i' and appends '-est' to form 'earliest'."
  },
  {
    "question": "Complete the comparison: 'Due to minor oversights, I did ______ on the diagnostic test than I thought.'",
    "options": ["badly", "worse", "worst", "badder"],
    "answer": "worse",
    "explanation": "The adverb 'badly' possesses an irregular comparative structure. The levels shift from the positive 'badly' to the comparative 'worse', and finally to the superlative 'worst'."
  },
  {
    "question": "Complete the comparison: 'Because of his leadership style, he treats her ______ than anyone else on the team.'",
    "options": ["better", "best", "gooder", "well"],
    "answer": "better",
    "explanation": "The irregular adverb 'well' forms its comparative degree using 'better' when evaluating and comparing two operational methods or actions."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["I always am late.", "I am always late.", "Always I am late.", "I am late always."],
    "answer": "I am always late.",
    "explanation": "Adverbs of frequency (such as 'always', 'never', 'seldom') occupy a highly specific structural position: they must be placed directly after the principal verb 'be' (am, is, are, was, were)."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["He often plays tennis.", "He plays often tennis.", "He often plays tennis often.", "He plays tennis often often."],
    "answer": "He often plays tennis.",
    "explanation": "Adverbs of frequency are conventionally positioned directly before the main action verb ('plays') and should never separate a transitive verb from its direct object ('tennis')."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["We usually go to the park.", "We go usually to the park.", "We go to the park usually.", "We go to usually the park."],
    "answer": "We usually go to the park.",
    "explanation": "The frequency modifier 'usually' alters the action verb 'go'. Standard syntactic placement requires the frequency adverb to rest immediately prior to the main action verb."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["She doesn't always eat breakfast.", "She always doesn't eat breakfast.", "She doesn't eat always breakfast.", "She eats always breakfast."],
    "answer": "She doesn't always eat breakfast.",
    "explanation": "In a negative sentence structure, the adverb of frequency must sit directly between the negative auxiliary contraction ('doesn't') and the principal action verb ('eat')."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["I have never been to Japan.", "I never have been to Japan.", "I have been never to Japan.", "I have been to Japan never."],
    "answer": "I have never been to Japan.",
    "explanation": "When dealing with compound or perfect tenses, the adverb should be nestled in the middle position, separating the auxiliary verb ('have') from the past participle ('been')."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["They rarely watch TV.", "They watch rarely TV.", "They rarely watch TV on weekdays.", "They watch TV rarely on weekdays rarely."],
    "answer": "They rarely watch TV.",
    "explanation": "The frequency adverb 'rarely' modifies the active verb 'watch'. Syntactic principles dictate that it should be placed right before the main action verb."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["He is seldom angry.", "He seldom is angry.", "He is angry seldom.", "Seldom he is angry."],
    "answer": "He is seldom angry.",
    "explanation": "When modifying a sentence where the primary verb is a form of 'be' ('is'), the adverb of frequency must be placed directly after that verb."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax in an interrogative form:",
    "options": ["Do you often visit?", "Do often you visit?", "You do visit often?", "Visit you often?"],
    "answer": "Do you often visit?",
    "explanation": "For interrogative structures (questions), the correct word order formula is: Auxiliary Verb ('Do') + Subject Pronoun ('you') + Adverb of Frequency ('often') + Main Action Verb ('visit')."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["She sometimes cooks.", "She cooks sometimes sometimes.", "Sometimes cooks she.", "She cooks sometimes always."],
    "answer": "She sometimes cooks.",
    "explanation": "The adverb 'sometimes' modifies 'cooks'. Placing it in the mid-position directly before the single main action verb represents standard, flawless syntax."
  },
  {
    "question": "Select the sentence that reflects correct grammatical word order and syntax:",
    "options": ["My dad usually works late.", "My dad works usually late.", "Usually works my dad late.", "My dad works late usually usually."],
    "answer": "My dad usually works late.",
    "explanation": "The frequency adverb 'usually' modifies the main action verb 'works'. It is properly positioned immediately preceding that verb."
  },
  {
    "question": "Choose the proper term based on context: 'He is dedicated to his role and works ______.'",
    "options": ["hard", "hardly"],
    "answer": "hard",
    "explanation": "The sentence indicates that the subject exerts significant effort. The adverb 'hard' directly modifies 'works' to mean 'with diligence'."
  },
  {
    "question": "Choose the proper term based on context: 'He has absenteeism issues and ______ works.'",
    "options": ["hard", "hardly"],
    "answer": "hardly",
    "explanation": "The adverb 'hardly' is a negative modifier that means 'scarcely' or 'almost not at all'. Placing it before 'works' indicates he almost never performs his duties."
  },
  {
    "question": "Choose the proper term based on context: 'I am out of touch with the project team; I haven't seen him ______.'",
    "options": ["late", "lately"],
    "answer": "lately",
    "explanation": "The sentence refers to a recent span of time. The adverb 'lately' explicitly means 'recently' or 'in the near past'."
  },
  {
    "question": "Choose the proper term based on context: 'Due to severe traffic along the delivery route, the bus arrived ______.'",
    "options": ["late", "lately"],
    "answer": "late",
    "explanation": "The sentence indicates missing the scheduled timeline. The adverb 'late' modifies 'arrived' to mean 'past the designated or expected time'."
  },
  {
    "question": "Choose the proper term based on context: 'The lighting is poor, so she can ______ see without her glasses.'",
    "options": ["hard", "hardly"],
    "answer": "hardly",
    "explanation": "The contextual intent is near-negation, implying she is almost unable to see. 'Hardly' is the correct adverb used to convey 'barely' or 'scarcely'."
  },
  {
    "question": "Choose the proper term based on context: 'With great physical momentum, he hit the ball ______.'",
    "options": ["hard", "hardly"],
    "answer": "hard",
    "explanation": "The sentence details an action executed with substantial physical power or force, which requires the adverb 'hard'."
  },
  {
    "question": "Choose the proper term based on context: 'Have you been busy ______ with the franchise audit rollout?'",
    "options": ["late", "lately"],
    "answer": "lately",
    "explanation": "The query investigates activities occurring within a recent timeframe. The adverb 'lately' accurately translates to 'recently'."
  },
  {
    "question": "Choose the proper term based on context: 'To complete the financial statements, he stayed up ______.'",
    "options": ["late", "lately"],
    "answer": "late",
    "explanation": "The statement describes remaining awake into the advanced hours of the night or morning, which is expressed by the adverb 'late'."
  },
  {
    "question": "Choose the proper term based on context: 'We need to replenish the warehouse pantry because there is ______ any food left.'",
    "options": ["hard", "hardly"],
    "answer": "hardly",
    "explanation": "The phrase 'hardly any' is a standard idiom in English meaning 'almost none' or an extremely scarce amount."
  },
  {
    "question": "Choose the proper term based on context: 'She wants a management promotion, so she tries ______ to succeed.'",
    "options": ["hard", "hardly"],
    "answer": "hard",
    "explanation": "The context implies making a strong, concentrated effort. The adverb 'hard' is used here to modify the verb 'tries' to mean 'with great energy'."
  },
  {
    "question": "Select the correct intensifier: 'The supervisor warned that the soup is ______ hot to eat safely right now.'",
    "options": ["very", "too", "enough", "much"],
    "answer": "too",
    "explanation": "The word 'too' is an adverb of degree that explicitly denotes excess or a negative extremity, indicating that the heat surpasses a manageable or functional limit."
  },
  {
    "question": "Select the correct intensifier: 'The warehouse specialist is strong ______ to lift the heavy machinery crate.'",
    "options": ["very", "too", "enough", "so"],
    "answer": "enough",
    "explanation": "The adverb 'enough' denotes sufficiency to satisfy a requirement. Unlike other intensifiers, 'enough' must be placed directly *after* the adjective ('strong') it modifies."
  },
  {
    "question": "Select the correct intensifier: 'After managing a double shift, she is ______ tired.'",
    "options": ["very", "enough", "much", "many"],
    "answer": "very",
    "explanation": "The adverb of degree 'very' is the standard modifier used to heighten or intensify a base adjective like 'tired' without introducing negative structural limitations."
  },
  {
    "question": "Select the correct intensifier: 'Ensure you wear a heavy jacket because it is ______ cold today.'",
    "options": ["very", "enough", "much", "many"],
    "answer": "very",
    "explanation": "The word 'very' acts as a direct intensifier for the non-comparative adjective 'cold' to show a high degree of intensity."
  },
  {
    "question": "Select the correct intensifier: 'According to traffic regulations, he is not old ______ to drive a commercial vehicle.'",
    "options": ["very", "too", "enough", "much"],
    "answer": "enough",
    "explanation": "In negative sentences expressing a lack of required capacity, the structural formula demands: Adjective ('old') + Adverb of Degree ('enough') + Infinitival Phrase ('to drive')."
  },
  {
    "question": "Select the correct intensifier: 'The shipping box is ______ heavy for me to lift without a forklift.'",
    "options": ["very", "too", "enough", "so"],
    "answer": "too",
    "explanation": "The correlative structure 'too + adjective + for someone to do something' signals an excessive state that produces an impossible or restrictive outcome."
  },
  {
    "question": "Select the correct intensifier: 'He maintained his stamina and ran fast ______ to win the field track event.'",
    "options": ["very", "too", "enough", "so"],
    "answer": "enough",
    "explanation": "The adverb 'enough' signifies a sufficient level of capability. It must follow the adverb of manner ('fast') that it is modifying."
  },
  {
    "question": "Select the correct intensifier: 'I received your excellent evaluation scores, and I am ______ happy for you.'",
    "options": ["so", "too", "enough", "such"],
    "answer": "so",
    "explanation": "The intensifier 'so' increases the emotional emphasis of the adjective 'happy' in an affirmative manner without implying any obstructive excess."
  },
  {
    "question": "Select the correct modifier: 'The training coordinator remarked that it was ______ a good movie.'",
    "options": ["so", "such", "very", "too"],
    "answer": "such",
    "explanation": "The pre-determiner 'such' is uniquely used to add emphasis before a noun phrase that follows the construction: 'such + a/an + adjective + singular countable noun'."
  },
  {
    "question": "Select the correct intensifier: 'The quality control inspector noted that the tea is ______ sweet.'",
    "options": ["very", "enough", "much", "many"],
    "answer": "very",
    "explanation": "The adverb 'very' is positioned immediately before the descriptive adjective 'sweet' to intensify its baseline property directly."
  }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Complex Structures
  // ============================================================
  advanced: [
    // 101-110: Inversion (Advanced Grammar)
     {
    "question": "Complete the inversion structure: '______ have I seen such an disorganized warehouse operation.'",
    "options": ["Never", "Always", "Often", "Usually"],
    "answer": "Never",
    "explanation": "When a negative adverb or restrictive modifier like 'Never' is placed at the absolute beginning of a sentence for emphatic effect, it triggers mandatory subject-auxiliary inversion. Therefore, the auxiliary verb 'have' must precede the subject pronoun 'I'."
  },
  {
    "question": "Complete the inversion structure: 'Rarely ______ to the regional terminal during the off-peak hours.'",
    "options": ["we go", "do we go", "we do go", "go we"],
    "answer": "do we go",
    "explanation": "Starting a sentence with the restrictive frequency adverb 'Rarely' requires subject-auxiliary inversion. For present simple actions, the auxiliary verb 'do' must step forward to precede the plural subject pronoun 'we'."
  },
  {
    "question": "Complete the inversion structure: 'Seldom ______ such exceptional administrative talent in an entry-level applicant.'",
    "options": ["one sees", "does one see", "sees one", "one does see"],
    "answer": "does one see",
    "explanation": "The term 'Seldom' is a negative frequency adverb. When positioned at the start of an independent clause, it triggers a grammatical inversion, forcing the singular auxiliary 'does' to stand in front of the formal subject pronoun 'one'."
  },
  {
    "question": "Complete the inversion structure: 'Hardly ______ arrived at the construction site when the flash flood triggered an evacuation.'",
    "options": ["had I", "I had", "have I", "I have"],
    "answer": "had I",
    "explanation": "This sentence employs a classic literary time restriction layout. The formal adverbial structure demands the specific formula: 'Hardly' + past perfect auxiliary ('had') + Subject ('I') + past participle ('arrived'), followed by a clause introduced by 'when'."
  },
  {
    "question": "Complete the inversion structure: 'Little ______ that the regional director was actively monitoring the dashboard.'",
    "options": ["did she know", "she knew", "she did know", "knew she"],
    "answer": "did she know",
    "explanation": "When the restrictive modifier 'Little' is placed at the front of a sentence to express a complete lack of awareness, it requires past tense inversion: auxiliary 'did' + subject 'she' + base form verb 'know'."
  },
  {
    "question": "Complete the inversion structure: 'Nowhere else ______ find a more competitive franchise procurement offer.'",
    "options": ["you will", "will you", "you can", "can"],
    "answer": "will you",
    "explanation": "'Nowhere' is a definitive negative adverb of place. When initiating a clause, it commands a structural inversion, requiring the modal or future auxiliary 'will' to advance ahead of the subject 'you'."
  },
  {
    "question": "Complete the inversion structure: 'On no account ______ this secure document archive room be opened without a supervisor present.'",
    "options": ["should this door", "this door should", "this door", "door should"],
    "answer": "should this door",
    "explanation": "The phrase 'On no account' functions as a complex negative prepositional phrase. Placed initial in a clause, it requires subject-auxiliary inversion, placing the modal auxiliary 'should' before the complete noun subject 'this door'."
  },
  {
    "question": "Complete the inversion structure: 'Not only ______ manage the logistical supply chain, but he also oversees financial reports.'",
    "options": ["he does", "does he", "he can", "he is"],
    "answer": "does he",
    "explanation": "When the correlative conjunction phrase 'Not only' leads a sentence, the first independent clause must undergo subject-auxiliary inversion, using the singular auxiliary 'does' before the pronoun 'he'."
  },
  {
    "question": "Complete the inversion structure: 'Scarcely ______ down at my desk to review the audit when the fire alarm rang.'",
    "options": ["I sat", "did I sit", "had I sat", "was I sitting"],
    "answer": "had I sat",
    "explanation": "'Scarcely' is a restrictive time modifier that operates under the exact same inversion principles as 'hardly'. It mandates a past perfect inverted sequence: 'Scarcely' + auxiliary 'had' + subject 'I' + past participle 'sat'."
  },
  {
    "question": "Complete the inversion structure: 'Under no circumstances ______ leave the premises before submitting your end-of-shift data.'",
    "options": ["you should", "should you", "you must", "are you"],
    "answer": "should you",
    "explanation": "The restrictive expression 'Under no circumstances' commands absolute compliance. When leading a sentence, it necessitates immediate inversion, positioning the modal operator 'should' before the subject 'you'."
  },
  {
    "question": "Identify the proper sentence based on the specific contextual meaning: 'No one else but John went to the corporate meeting.'",
    "options": ["Only John went.", "John went only.", "John only went.", "John went."],
    "answer": "Only John went.",
    "explanation": "The adverb 'only' is a highly sensitive limiting modifier. To specify that a restriction applies strictly to the identity of the subject and no one else, 'only' must immediately precede the specific noun 'John'."
  },
  {
    "question": "Identify the proper sentence based on the specific contextual meaning: 'I merely looked at the contract (I did not sign or edit it).'",
    "options": ["Only I looked at him.", "I only looked at him.", "I looked at him only.", "I looked only at him."],
    "answer": "I only looked at him.",
    "explanation": "To demonstrate that an exclusive limitation applies directly to the action itself rather than the people involved, 'only' must be placed immediately before the main verb 'looked'."
  },
  {
    "question": "Identify the proper sentence based on the specific contextual meaning: 'She eats vegetables and absolutely nothing else.'",
    "options": ["She only eats vegetables.", "She eats only vegetables.", "Only she eats vegetables.", "She eats vegetables only."],
    "answer": "She eats only vegetables.",
    "explanation": "To convey precise exclusivity regarding a direct object noun phrase, 'only' should be placed right before 'vegetables'. This explicitly isolates the noun as the single item consumed."
  },
  {
    "question": "Position the modifier 'only' to reflect the exact intended logical meaning: 'He lent me five pesos (and not a single peso more).'",
    "options": ["Only he lent me five pesos.", "He lent me only five pesos.", "He only lent me five pesos.", "He lent me five pesos only."],
    "answer": "He lent me only five pesos.",
    "explanation": "Because the exact contextual constraint targets the quantitative numerical value ('five pesos'), the adverb 'only' must rest directly before the cardinal number to show a strict fiscal ceiling."
  },
  {
    "question": "Identify the proper sentence based on the specific contextual meaning: 'The event occurs on Sundays and on no other day of the week.'",
    "options": ["It only happens on Sundays.", "It happens only on Sundays.", "Only it happens on Sundays.", "It happens on Sundays only."],
    "answer": "It happens only on Sundays.",
    "explanation": "To restrict an operational event strictly to a specific timeframe or prepositional phrase of time, 'only' must be placed directly preceding 'on Sundays'."
  },
  {
    "question": "Complete the statement with the proper logical modifier: 'The emergency evaluation meeting lasted ______ an hour before adjournment.'",
    "options": ["only", "alone", "single", "justly"],
    "answer": "only",
    "explanation": "The word 'only' serves here as a limiting adverb of degree meaning 'no more than', which is used to modify the duration or quantity specified by 'an hour'."
  },
  {
    "question": "Complete the statement with the proper logical modifier: 'Out of fifty applicants, ______ three trainees passed the rigorous operational exam.'",
    "options": ["Only", "Justly", "Merely", "Alone"],
    "answer": "Only",
    "explanation": "The sentence requires a restrictive pre-modifier to draw attention to an unexpectedly low number. 'Only' perfectly limits the numerical subject 'three trainees'."
  },
  {
    "question": "Complete the statement with the proper logical modifier: 'As a human being, I have ______ two hands to handle these multiple tasks.'",
    "options": ["only", "alone", "merely", "single"],
    "answer": "only",
    "explanation": "The modifier restricts the noun phrase 'two hands'. Placing 'only' before the number emphasizes physical limitation and scarcity within standard English syntax."
  },
  {
    "question": "Complete the statement with the proper logical modifier: 'The branch manager confirmed that she is the ______ person who holds the vault combination.'",
    "options": ["only", "alone", "lonely", "solely"],
    "answer": "only",
    "explanation": "In this specific syntax, 'only' functions exceptionally as an attributive adjective meaning 'sole' or 'exclusive', directly qualifying the singular countable noun 'person'."
  },
  {
    "question": "Complete the statement with the proper logical modifier: 'The supervisor admitted that he accepted the high-risk assignment ______ for the additional compensation.'",
    "options": ["only", "alone", "lonely", "solitary"],
    "answer": "only",
    "explanation": "The adverb 'only' is used here to isolate a single reason or motivation, indicating that no other factors or incentives influenced the decision."
  },
  {
    "question": "Select the correct conjunctive adverb based on contextual logic: 'It rained heavily at the construction site; ______, the crew managed to finish the foundation.'",
    "options": ["however", "therefore", "moreover", "consequently"],
    "answer": "however",
    "explanation": "The two clauses present a sharp conflict between an unfavorable condition (heavy rain) and an unexpected success. The conjunctive adverb 'however' is required to establish this contrast."
  },
  {
    "question": "Select the correct conjunctive adverb based on contextual logic: 'The trainee failed to study the standard operating procedures; ______, he did poorly on the evaluation.'",
    "options": ["however", "therefore", "nevertheless", "otherwise"],
    "answer": "therefore",
    "explanation": "The second clause represents a direct logical outcome or consequence of the first clause. The conjunctive adverb 'therefore' is used to demonstrate cause-and-effect transitions."
  },
  {
    "question": "Select the correct conjunctive adverb based on contextual logic: 'The monthly lease for the store branch is exceptionally high; ______, the foot traffic is poorly distributed.'",
    "options": ["therefore", "moreover", "consequently", "thus"],
    "answer": "moreover",
    "explanation": "Both clauses discuss negative attributes of the branch location. The conjunctive adverb 'moreover' is selected to introduce an additional, reinforcing point of the same nature."
  },
  {
    "question": "Select the correct conjunctive adverb based on contextual logic: 'You must maintain a rapid pace while cross-checking data; ______, you will miss the project deadline.'",
    "options": ["otherwise", "therefore", "however", "besides"],
    "answer": "otherwise",
    "explanation": "The conjunctive adverb 'otherwise' introduces a negative consequence or alternative reality that will transpire if the conditional command in the first clause is ignored."
  },
  {
    "question": "Select the correct conjunctive adverb based on contextual logic: 'I highly enjoy consuming the brand's signature milk tea; ______, I am medically lactose intolerant.'",
    "options": ["consequently", "however", "therefore", "moreover"],
    "answer": "however",
    "explanation": "The sentence requires a transitional connector that demonstrates an adversarial or contrasting relationship between personal preference and a physiological limitation."
  },
  {
    "question": "Select the option that reflects flawless punctuation and syntax when using a conjunctive adverb:",
    "options": ["He is sick, therefore he is absent.", "He is sick; therefore, he is absent.", "He is sick therefore, he is absent.", "He is sick; therefore he is absent."],
    "answer": "He is sick; therefore, he is absent.",
    "explanation": "When coordinating two complete independent clauses using a conjunctive adverb ('therefore'), structural rules dictate placing a semicolon immediately prior to the adverb and a comma directly following it."
  },
  {
    "question": "Select the option that reflects flawless punctuation and syntax when using a conjunctive adverb:",
    "options": ["I tried hard; however, I failed.", "I tried hard, however I failed.", "I tried hard however, I failed.", "I tried hard; however I failed."],
    "answer": "I tried hard; however, I failed.",
    "explanation": "Conjunctive adverbs cannot link independent clauses using a mere comma (which creates a comma splice). A semicolon must separate the clauses, and a comma must isolate 'however' from the second clause."
  },
  {
    "question": "Select the correct conjunctive adverb based on contextual logic: 'The corporate investor is incredibly wealthy; ______, he appears constantly stressed and unhappy.'",
    "options": ["nevertheless", "consequently", "therefore", "additionally"],
    "answer": "nevertheless",
    "explanation": "The term 'nevertheless' is a concessive conjunctive adverb used to introduce a fact or situation that occurs in spite of or despite what was stated in the preceding clause."
  },
  {
    "question": "Select the correct conjunctive adverb based on contextual logic: 'Our department has depleted its quarterly operational budget; ______, we cannot procure new office hardware.'",
    "options": ["however", "consequently", "nevertheless", "otherwise"],
    "answer": "consequently",
    "explanation": "The second clause is a direct situational result of the financial deficit explained in the first clause. 'Consequently' is the most accurate adverbial connector to show this result."
  },
  {
    "question": "Select the correct conjunctive adverb based on contextual logic: 'The atmospheric temperature inside the facility was freezing; ______, the audit team proceeded with the physical inventory.'",
    "options": ["therefore", "besides", "nonetheless", "consequently"],
    "answer": "nonetheless",
    "explanation": "The conjunctive adverb 'nonetheless' signals that the action in the second independent clause occurred regardless of the obstacle or condition mentioned in the first clause."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'After careful consideration of the operational data, I ______ agree with your proposal.'",
    "options": ["completely", "very", "too", "much"],
    "answer": "completely",
    "explanation": "The word 'agree' is a non-gradable action verb. It cannot be modified by 'very'. Instead, it requires a maximizing adverb of degree such as 'completely' or 'fully'."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'The supervisor's sudden emotional outburst during the briefing was ______ ridiculous.'",
    "options": ["utterly", "very", "much", "many"],
    "answer": "utterly",
    "explanation": "The term 'ridiculous' functions as an ungradable or extreme adjective. Standard grammar rules dictate modifying extreme adjectives with absolute adverbs of degree like 'utterly' or 'absolutely' rather than 'very'."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'The newly constructed commercial kiosk is ______ prettier than the older model.'",
    "options": ["much", "very", "too", "so"],
    "answer": "much",
    "explanation": "The modifier precedes the comparative adjective 'prettier'. Under formal syntax constraints, 'very' can never modify a comparative form; intensifiers like 'much', 'far', or 'significantly' must be used."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'He proved during the tournament that he is ______ the best player on the team.'",
    "options": ["by far", "very", "too", "so"],
    "answer": "by far",
    "explanation": "The target of modification is the superlative phrase 'the best'. Superlative structures are intensified by idiomatic adverbial expressions such as 'by far' or 'easily' to denote an undisputed status."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'Please accept our apologies, as we are ______ sorry for the delivery delays.'",
    "options": ["terribly", "terrible", "much", "many"],
    "answer": "terribly",
    "explanation": "The word 'terribly' acts as a highly common, idiomatic adverb of degree that collocates perfectly with adjectives like 'sorry' or 'disappointed' to mean 'extremely'."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'Ensure you activate the warehouse heating units because it is ______ freezing outside.'",
    "options": ["absolutely", "very", "too", "fairly"],
    "answer": "absolutely",
    "explanation": "'Freezing' is a limit or extreme adjective representing the absolute end of a scale. It must be paired with an absolute intensifier like 'absolutely' or 'completely', not a gradable one like 'very'."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'The promotional marketing video we reviewed was ______ hilarious.'",
    "options": ["absolutely", "very", "slightly", "fairly"],
    "answer": "absolutely",
    "explanation": "Because 'hilarious' inherently means 'extremely funny', it is classified as an ungradable adjective. It cannot be paired with 'very' or 'fairly'. It requires the absolute adverb 'absolutely'."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'After working consecutive night shifts, the entire warehouse crew was ______ exhausted.'",
    "options": ["totally", "very", "quite", "fairly"],
    "answer": "totally",
    "explanation": "The modifier targets 'exhausted', which is an extreme adjective meaning 'completely tired'. It must be intensified using total adverbs of degree such as 'totally' or 'completely'."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'The regional office is ______ hot, but it remains manageable if we open the windows.'",
    "options": ["rather", "too", "utterly", "completely"],
    "answer": "rather",
    "explanation": "The context implies a moderate, noticebly negative, but ultimately tolerable level of heat. The adverb of degree 'rather' is used to express a moderate or surprising degree of a quality."
  },
  {
    "question": "Complete the statement with the proper intensifier: 'The administrative assistant is ______ shorter than the supervisor.'",
    "options": ["slightly", "very", "too", "quite"],
    "answer": "slightly",
    "explanation": "To describe a minute, measurable difference using a comparative adjective ('shorter'), the correct modifying adverb of degree to select is 'slightly'."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, despite demonstrating excellent qualifications, he didn't get the position.'",
    "options": ["Unfortunately", "Unfortunate", "Happy", "Badly"],
    "answer": "Unfortunately",
    "explanation": "The sentence requires a comment or viewpoint adverb that modifies the entire clause. 'Unfortunately' expresses the speaker's negative judgment or evaluation of the outcome."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, given the dense cloud formations, it will rain across the site today.'",
    "options": ["Presumably", "Presume", "Sure", "Definite"],
    "answer": "Presumably",
    "explanation": "'Presumably' functions as an epistemic comment adverb placed at the start of a sentence to show that the speaker is making an educated assumption based on available evidence."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, I do not appreciate how the franchise audit was handled.'",
    "options": ["Frankly", "Frank", "Honest", "True"],
    "answer": "Frankly",
    "explanation": "The word 'Frankly' serves as a disjunct or viewpoint adverb. It is used to introduce a statement by signaling that the speaker is expressing their candid, unreserved, or honest perspective."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, despite his previous history of tardiness, he arrived on time today.'",
    "options": ["Surprisingly", "Surprising", "Surprise", "Shock"],
    "answer": "Surprisingly",
    "explanation": "The sentence initialization demands an adverb that comments on the unexpected nature of the entire event. 'Surprisingly' modifies the full clause that follows it."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, there are no remaining free slots for the operations seminar.'",
    "options": ["Regrettably", "Regret", "Sorry", "Sad"],
    "answer": "Regrettably",
    "explanation": "'Regrettably' is a formal sentence adverb that introduces an unfortunate piece of information, framing the clause with a tone of disappointment or official regret."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, based on her flawless performance metrics, she is the best candidate.'",
    "options": ["Undoubtedly", "Doubt", "Sure", "Uncertain"],
    "answer": "Undoubtedly",
    "explanation": "The adverb 'Undoubtedly' acts as a sentence modifier that signals absolute certainty on the part of the speaker regarding the validity of the statement."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, what the corporation needs to do right now is drastically cut waste.'",
    "options": ["Basically", "Basic", "Base", "Basis"],
    "answer": "Basically",
    "explanation": "'Basically' functions as a viewpoint adverb used to strip away unnecessary details and summarize the absolute core, fundamental truth of an assertion."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, I prefer managing logistics through a centralized software dashboard.'",
    "options": ["Personally", "Person", "Private", "Self"],
    "answer": "Personally",
    "explanation": "The word 'Personally' is an introductory disjunct used to clarify that the statement reflects the speaker's own individual opinion, taste, or viewpoint."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, according to the strict wording of the contract, he is in the right.'",
    "options": ["Technically", "Technical", "Technique", "Tech"],
    "answer": "Technically",
    "explanation": "'Technically' is a domain-specific viewpoint adverb used to indicate that a statement is strictly accurate when evaluated under formal rules or precise definitions."
  },
  {
    "question": "Select the correct sentence-level comment adverb: '______, despite all our structural preparation, the rollout was a complete disaster.'",
    "options": ["Essentially", "Essential", "Essence", "Real"],
    "answer": "Essentially",
    "explanation": "The word 'Essentially' acts as an adverbial modifier that assesses the situation as a whole, highlighting the true, core nature or summary of what occurred."
  }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (50 Items) - Nuanced Usage & Special Cases
  // ============================================================
  expert: [
    // 151-160: Flat Adverbs & Tricky Pairs (Deep vs Deeply)
    {
      question: "He threw the ball ______.",
      options: ["high", "highly"],
      answer: "high",
      explanation: "'High' modifies the verb 'threw' to show physical height or distance."
    },
    {
      question: "He is ______ respected.",
      options: ["high", "highly"],
      answer: "highly",
      explanation: "'Highly' is used for degree or figurative meaning, not physical height."
    },
    {
      question: "I dove ______ into the ocean.",
      options: ["deep", "deeply"],
      answer: "deep",
      explanation: "'Deep' modifies the verb 'dove' to show physical depth."
    },
    {
      question: "I was ______ moved by the movie.",
      options: ["deep", "deeply"],
      answer: "deeply",
      explanation: "'Deeply' expresses emotional intensity."
    },
    {
      question: "The bird flew ______.",
      options: ["low", "lowly"],
      answer: "low",
      explanation: "'Low' modifies the verb 'flew' to show physical height."
    },
    {
      question: "He bowed ______.",
      options: ["low", "lowly"],
      answer: "low",
      explanation: "'Low' modifies the verb 'bowed' to show physical movement downward."
    },
    {
      question: "She arrived ______.",
      options: ["late", "lately"],
      answer: "late",
      explanation: "'Late' modifies the verb 'arrived' to mean 'not on time'."
    },
    {
      question: "I haven't eaten ______.",
      options: ["late", "lately"],
      answer: "lately",
      explanation: "'Lately' means 'recently'."
    },
    {
      question: "Stand ______.",
      options: ["clear", "clearly"],
      answer: "clear",
      explanation: "'Clear' is a flat adverb meaning 'away from'."
    },
    {
      question: "Speak ______.",
      options: ["clear", "clearly"],
      answer: "clearly",
      explanation: "'Clearly' means 'in a way that can be understood'."
    },

    // 161-170: Meaning Shift with -ly
    {
      question: "He works ______.",
      options: ["hard", "hardly"],
      answer: "hard",
      explanation: "The meaning is that he works with effort."
    },
    {
      question: "He ______ works.",
      options: ["hardly", "hard"],
      answer: "hardly",
      explanation: "The meaning is near-negation. 'Hardly' means 'almost not'."
    },
    {
      question: "The eagle flies ______.",
      options: ["high", "highly"],
      answer: "high",
      explanation: "The meaning refers to altitude."
    },
    {
      question: "It is ______ probable.",
      options: ["high", "highly"],
      answer: "highly",
      explanation: "The meaning expresses degree of probability."
    },
    {
      question: "He sat ______ to me.",
      options: ["close", "closely"],
      answer: "close",
      explanation: "The meaning refers to physical distance."
    },
    {
      question: "Listen ______.",
      options: ["close", "closely"],
      answer: "closely",
      explanation: "The meaning is 'pay careful attention'."
    },
    {
      question: "The door was ______ open.",
      options: ["wide", "widely"],
      answer: "wide",
      explanation: "The meaning refers to physical extent."
    },
    {
      question: "He is ______ known.",
      options: ["wide", "widely"],
      answer: "widely",
      explanation: "The meaning refers to how many people know him."
    },
    {
      question: "You are ______ right.",
      options: ["dead", "deadly"],
      answer: "dead",
      explanation: "'Dead' is an idiomatic flat adverb meaning 'completely'."
    },
    {
      question: "It is a ______ weapon.",
      options: ["dead", "deadly"],
      answer: "deadly",
      explanation: "'Deadly' is an adjective meaning 'capable of causing death'."
    },

    // 171-180: Imposter Adjectives (Ending in -ly)
    {
      question: "She is a ______ person.",
      options: ["lovely", "lovelily"],
      answer: "lovely",
      explanation: "'Lovely' is an adjective describing the noun 'person'."
    },
    {
      question: "He behaved in a ______ manner.",
      options: ["friendly", "friendlily"],
      answer: "friendly",
      explanation: "'Friendly' is an adjective. English uses 'in a + adjective + manner' when no natural adverb exists."
    },
    {
      question: "I feel ______.",
      options: ["lonely", "lone"],
      answer: "lonely",
      explanation: "'Lonely' is an adjective describing emotional state."
    },
    {
      question: "It was a ______ meeting.",
      options: ["timely", "timelily"],
      answer: "timely",
      explanation: "'Timely' is an adjective meaning 'at the right time'."
    },
    {
      question: "That looks ______.",
      options: ["ugly", "uglily"],
      answer: "ugly",
      explanation: "'Looks' is a linking verb followed by adjectives."
    },
    {
      question: "He is a ______ man.",
      options: ["kindly", "kindlily"],
      answer: "kindly",
      explanation: "'Kindly' is an adjective here meaning kind or gentle."
    },
    {
      question: "It was a ______ error.",
      options: ["costly", "costlily"],
      answer: "costly",
      explanation: "'Costly' is an adjective meaning expensive."
    },
    {
      question: "'Daily' is:",
      options: ["Adjective only", "Adverb only", "Both adjective and adverb"],
      answer: "Both adjective and adverb",
      explanation: "'Daily' can describe a noun (a daily routine) or modify a verb (I exercise daily)."
    },
    {
      question: "'Early' is:",
      options: ["Adjective only", "Adverb only", "Both adjective and adverb"],
      answer: "Both adjective and adverb",
      explanation: "'Early' functions as both an adjective and an adverb."
    },
    {
      question: "'Fast' is:",
      options: ["Adjective only", "Adverb only", "Both adjective and adverb"],
      answer: "Both adjective and adverb",
      explanation: "'Fast' is a flat form used as both adjective and adverb."
    },

    // 181-190: Adverbial Objectives & Nouns as Adverbs
    {
      question: "Let's go ______.",
      options: ["home", "to home"],
      answer: "home",
      explanation: "'Home' functions as an adverb with verbs of motion."
    },
    {
      question: "I waited ______.",
      options: ["two hours", "for two hours", "Both are correct"],
      answer: "Both are correct",
      explanation: "Time duration can be expressed with or without 'for'."
    },
    {
      question: "He ran ______.",
      options: ["three miles", "for three miles", "Both are correct"],
      answer: "Both are correct",
      explanation: "Distance expressions can function directly as adverbial phrases."
    },
    {
      question: "See you ______.",
      options: ["next week", "on next week"],
      answer: "next week",
      explanation: "Prepositions are not used before 'next', 'last', 'this', or 'every' in time expressions."
    },
    {
      question: "We met ______.",
      options: ["last night", "on last night"],
      answer: "last night",
      explanation: "'Last night' functions as an adverbial time expression without a preposition."
    },
    {
      question: "Do it ______.",
      options: ["this way", "on this way"],
      answer: "this way",
      explanation: "'This way' is an adverbial phrase indicating manner."
    },
    {
      question: "They went ______.",
      options: ["abroad", "to abroad"],
      answer: "abroad",
      explanation: "'Abroad' is an adverb of place and does not take a preposition."
    },
    {
      question: "Go ______.",
      options: ["upstairs", "to upstairs"],
      answer: "upstairs",
      explanation: "'Upstairs' functions as an adverb of place."
    },
    {
      question: "Come ______.",
      options: ["inside", "to inside"],
      answer: "inside",
      explanation: "'Inside' is an adverb of place here."
    },
    {
      question: "He went ______.",
      options: ["downtown", "to downtown"],
      answer: "downtown",
      explanation: "'Downtown' functions as an adverb of place."
    },

    // 191-200: Double Negatives & Redundancy
    {
      question: "I can't see ______.",
      options: ["nothing", "anything"],
      answer: "anything",
      explanation: "'Can't' is already negative. Using 'nothing' would create a double negative."
    },
    {
      question: "He hardly ______ speaks.",
      options: ["never", "ever"],
      answer: "ever",
      explanation: "'Hardly' already expresses negation. 'Ever' avoids a double negative."
    },
    {
      question: "I rarely ______ eat there.",
      options: ["don't", "ever"],
      answer: "ever",
      explanation: "'Rarely' is negative in meaning. Adding 'don't' would be a double negative."
    },
    {
      question: "'Return back' is:",
      options: ["correct", "redundant"],
      answer: "redundant",
      explanation: "'Return' already means 'go back'. Adding 'back' repeats the meaning."
    },
    {
      question: "'Repeat again' is:",
      options: ["correct", "redundant"],
      answer: "redundant",
      explanation: "'Repeat' already means 'do again'. Adding 'again' is unnecessary."
    },
    {
      question: "'Proceed forward' is:",
      options: ["correct", "redundant"],
      answer: "redundant",
      explanation: "'Proceed' already implies forward movement."
    },
    {
      question: "'Revert back' is:",
      options: ["correct", "redundant"],
      answer: "redundant",
      explanation: "'Revert' means to return to a previous state. 'Back' repeats the meaning."
    },
    {
      question: "'Sufficient enough' is:",
      options: ["correct", "redundant"],
      answer: "redundant",
      explanation: "'Sufficient' and 'enough' express the same idea."
    },
    {
      question: "Scarcely ______ (meaning 'almost no one').",
      options: ["anyone", "no one"],
      answer: "anyone",
      explanation: "'Scarcely' is already negative. Using 'no one' would create a double negative."
    },
    {
      question: "Barely ______ (meaning 'almost nothing').",
      options: ["anything", "nothing"],
      answer: "anything",
      explanation: "'Barely' expresses near-negation. 'Anything' avoids a double negative."
    }
  ]
};
