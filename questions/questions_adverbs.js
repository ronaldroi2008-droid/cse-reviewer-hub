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
    "question": "Complete the statement with the proper modifier: 'During the physical team building event, the participant threw the ball ______ into the air.'",
    "options": ["high", "highly"],
    "answer": "high",
    "explanation": "The sentence requires a flat adverb to modify the action verb 'threw'. The word 'high' is used when describing literal, physical elevation or measurable vertical distance."
  },
  {
    "question": "Complete the statement with the proper modifier: 'The senior operations officer is ______ respected throughout the regional terminal.'",
    "options": ["high", "highly"],
    "answer": "highly",
    "explanation": "The modifier describes an abstract or figurative degree of respect. In non-physical, qualitative, or evaluative contexts, the form ending in '-ly' ('highly') is structurally mandatory."
  },
  {
    "question": "Complete the statement with the proper modifier: 'To check the structural integrity of the underwater columns, the inspector dove ______ into the water.'",
    "options": ["deep", "deeply"],
    "answer": "deep",
    "explanation": "The verb 'dove' describes literal, physical downward movement. The flat adverb 'deep' is correct because it specifies concrete, geographical, or spatial depth."
  },
  {
    "question": "Complete the statement with the proper modifier: 'The audience members were ______ moved by the documentary regarding urban poverty.'",
    "options": ["deep", "deeply"],
    "answer": "deeply",
    "explanation": "The context targets a profound emotional, psychological, or internal state. When intensifying feelings or abstract conditions, the proper adverbial choice is 'deeply'."
  },
  {
    "question": "Complete the statement with the proper modifier: 'The drone flew ______ over the commercial facility to capture the perimeter mapping.'",
    "options": ["low", "lowly"],
    "answer": "low",
    "explanation": "The sentence tracks a literal spatial altitude. The word 'low' acts as a flat adverb modifying 'flew' to represent a physical position close to the ground."
  },
  {
    "question": "Complete the statement with the proper modifier: 'Before receiving his official corporate assignment, the apprentice bowed ______ out of respect.'",
    "options": ["low", "lowly"],
    "answer": "low",
    "explanation": "The act of bowing involves a direct, physical downward motion of the body. This concrete spatial action requires the flat adverb 'low' rather than its figurative counterpart."
  },
  {
    "question": "Complete the statement with the proper modifier: 'Due to unexpected logistical delays along the main highway, the delivery driver arrived ______.'",
    "options": ["late", "lately"],
    "answer": "late",
    "explanation": "The sentence evaluates punctuality relative to a specific schedule. The flat adverb 'late' means past the designated time, whereas 'lately' refers strictly to recent time frames."
  },
  {
    "question": "Complete the statement with the proper modifier: 'I have been managing consecutive field audits, so I haven't eaten regular meals ______.'",
    "options": ["late", "lately"],
    "answer": "lately",
    "explanation": "The temporal context implies a generalized modern span of time extending into the present. The adverb 'lately' accurately means 'recently' or 'in recent days'."
  },
  {
    "question": "Complete the emergency instruction: 'Please stand ______ of the automated sliding warehouse doors while they are in motion.'",
    "options": ["clear", "clearly"],
    "answer": "clear",
    "explanation": "In safety directives, 'clear' functions idiomatically as a flat adverb meaning 'completely away' or 'at a safe distance'. It modifies the posture 'stand' regarding physical proximity."
  },
  {
    "question": "Complete the corporate communication directive: 'When conducting virtual briefings, it is crucial that you speak ______.'",
    "options": ["clear", "clearly"],
    "answer": "clearly",
    "explanation": "The modifier describes the qualitative manner of communication. To indicate that an action must be performed in an intelligible, articulate, or understandable way, use 'clearly'."
  },
  {
    "question": "Analyze the meaning shift: 'The dedicated administrative assistant works ______ to meet the quarterly deadlines.'",
    "options": ["hard", "hardly"],
    "answer": "hard",
    "explanation": "To demonstrate that a subject exerts massive energy, diligence, and industrious effort, the flat adverb 'hard' must post-modify the active verb 'works'."
  },
  {
    "question": "Analyze the meaning shift: 'He exhibits severe performance issues and ______ works during his designated shift.'",
    "options": ["hardly", "hard"],
    "answer": "hardly",
    "explanation": "The syntax demands a near-negative adverb of degree. 'Hardly' means 'scarcely' or 'almost not at all', completely reversing the sentence meaning when placed before the verb."
  },
  {
    "question": "Analyze the meaning shift: 'The majestic eagle flies ______ above the mountain peaks.'",
    "options": ["high", "highly"],
    "answer": "high",
    "explanation": "Because the sentence involves a literal physical altitude or geographic elevation, the flat adverb 'high' is the grammatically accurate modifier for the verb 'flies'."
  },
  {
    "question": "Analyze the meaning shift: 'Given the positive initial metrics, it is ______ probable that the franchise will generate a profit.'",
    "options": ["high", "highly"],
    "answer": "highly",
    "explanation": "The adjective 'probable' requires an adverb of degree to quantify likelihood. The figurative form 'highly' is used here to mean 'extremely' or 'to a superior degree'."
  },
  {
    "question": "Analyze the meaning shift: 'During the formal corporate seminar, the new team leader sat ______ to the regional director.'",
    "options": ["close", "closely"],
    "answer": "close",
    "explanation": "The objective is to define immediate physical proximity or literal spatial distance. The flat adverb 'close' means near in space and correctly modifies the position 'sat'."
  },
  {
    "question": "Analyze the meaning shift: 'The safety inspector advised everyone to listen ______ to the emergency evacuation guidelines.'",
    "options": ["close", "closely"],
    "answer": "closely",
    "explanation": "The context implies giving intense, meticulous, and careful mental focus. The adverb 'closely' is chosen here to denote rigorous attention to detail."
  },
  {
    "question": "Analyze the meaning shift: 'When the delivery crew arrived, they noticed that the main warehouse door was ______ open.'",
    "options": ["wide", "widely"],
    "answer": "wide",
    "explanation": "The sentence highlights the literal, physical extent of a structural opening. The flat adverb 'wide' modifies the predicate adjective 'open' to show complete physical expansion."
  },
  {
    "question": "Analyze the meaning shift: 'The specialty food brand's unique signature recipes are ______ known across the country.'",
    "options": ["wide", "widely"],
    "answer": "widely",
    "explanation": "The sentence references an abstract distribution of public awareness or reputation. The form 'widely' is an adverb of degree meaning 'by a vast number of people or over a massive range'."
  },
  {
    "question": "Analyze the meaning shift: 'The data analyst confirmed that your calculations on the financial report are ______ right.'",
    "options": ["dead", "deadly"],
    "answer": "dead",
    "explanation": "In formal idiomatic English, 'dead' can act as an emphatic flat adverb meaning 'absolutely', 'entirely', or 'completely' when modifying specific adjectives like 'right' or 'center'."
  },
  {
    "question": "Analyze the meaning shift: 'The security team discovered that the intruder was carrying a ______ weapon.'",
    "options": ["dead", "deadly"],
    "answer": "deadly",
    "explanation": "The slot modifies the common noun 'weapon'. The word 'deadly' is an adjective meaning 'lethal' or 'capable of causing death'; it is not operating as an adverb in this structure."
  },
  {
    "question": "Identify the correct word class: 'The new administrative receptionist is a genuinely ______ person.'",
    "options": ["lovely", "lovelily"],
    "answer": "lovely",
    "explanation": "The word 'lovely' is an imposter adjective ending in '-ly'. Because it directly describes the inherent qualities of the common noun 'person', the adjective form is correct."
  },
  {
    "question": "Identify the proper structure: 'The customer service representative behaved in a highly ______ manner.'",
    "options": ["friendly", "friendlily"],
    "answer": "friendly",
    "explanation": "'Friendly' is an adjective, not an adverb. To express a friendly manner of action, English relies on the syntactic phrasal formula: 'in a' + adjective + 'manner/way'."
  },
  {
    "question": "Identify the proper structure: 'Working in a remote field station far from family can make an employee feel ______.'",
    "options": ["lonely", "lone"],
    "answer": "lonely",
    "explanation": "The word 'feel' serves here as a linking verb expressing an internal emotional state. Linking verbs must be resolved with a predicate adjective; 'lonely' is the correct descriptive adjective."
  },
  {
    "question": "Identify the correct word class: 'The branch manager's intervention was a ______ action that saved the procurement contract.'",
    "options": ["timely", "timelily"],
    "answer": "timely",
    "explanation": "Despite its terminal '-ly' pattern, 'timely' is an adjective that means 'occurring at an opportune or appropriate moment'. It correctly modifies the noun 'action'."
  },
  {
    "question": "Identify the proper structure: 'If the structural layout of the facility dashboard is disorganized, it looks ______.'",
    "options": ["ugly", "uglily"],
    "answer": "ugly",
    "explanation": "The verb 'looks' functions as a sensory linking verb regarding aesthetic appearance. Linking verbs require a following adjective ('ugly') rather than an adverb to modify the subject."
  },
  {
    "question": "Identify the correct word class: 'The retired construction foreman was a ______ man who guided the apprentices.'",
    "options": ["kindly", "kindlily"],
    "answer": "kindly",
    "explanation": "In this specific syntactic frame, 'kindly' serves as an attributive adjective meaning 'benevolent', 'gentle', or 'warm-hearted', which perfectly modifies the singular noun 'man'."
  },
  {
    "question": "Identify the correct word class: 'Failing to execute the standard warehouse inventory checks was a ______ error.'",
    "options": ["costly", "costlily"],
    "answer": "costly",
    "explanation": "The word 'costly' is a descriptive adjective meaning 'expensive' or 'resulting in catastrophic loss'. It directly qualifies the noun 'error'."
  },
  {
    "question": "Determine the syntactic versatility of the word 'Daily':",
    "options": ["Adjective only", "Adverb only", "Both adjective and adverb"],
    "answer": "Both adjective and adverb",
    "explanation": "The word 'daily' changes its grammatical classification depending on placement. It is an adjective in 'a daily audit' (modifying a noun) and an adverb in 'we audit daily' (modifying a verb)."
  },
  {
    "question": "Determine the syntactic versatility of the word 'Early':",
    "options": ["Adjective only", "Adverb only", "Both adjective and adverb"],
    "answer": "Both adjective and adverb",
    "explanation": "'Early' shifts fluidly between word classes without changing spelling. It acts as an adjective in 'an early shift' and functions as an adverb in 'he arrived early'."
  },
  {
    "question": "Determine the syntactic versatility of the word 'Fast':",
    "options": ["Adjective only", "Adverb only", "Both adjective and adverb"],
    "answer": "Both adjective and adverb",
    "explanation": "'Fast' is a standard flat modifier. It handles adjective responsibilities in 'a fast delivery vehicle' and operates as an adverb of manner in 'the vehicle drives fast'. There is no word form 'fastly'."
  },
  {
    "question": "Identify the correct adverbial expression of place: 'After completing the logistical orientation, the trainees were told to go ______.'",
    "options": ["home", "to home"],
    "answer": "home",
    "explanation": "When combined with active verbs of motion or direction (such as 'go', 'walk', 'travel'), the noun 'home' functions directly as an adverb of place, eliminating the need for a preposition."
  },
  {
    "question": "Identify the correct adverbial expression of duration: 'The operations team waited ______ at the terminal for the supply shipment.'",
    "options": ["two hours", "for two hours", "Both are correct"],
    "answer": "Both are correct",
    "explanation": "In formal English syntax, expressions highlighting a specific duration of time can operate with or without the preposition 'for'. Both choices yield flawless grammar."
  },
  {
    "question": "Identify the correct adverbial expression of distance: 'To verify the perimeter perimeter fence, the security detail ran ______.'",
    "options": ["three miles", "for three miles", "Both are correct"],
    "answer": "Both are correct",
    "explanation": "Nouns quantifying spatial measurement or distance can function natively as adverbial objectives. They effectively modify verbs of motion either directly or when introduced by 'for'."
  },
  {
    "question": "Identify the correct temporal syntax: 'The regional director scheduled the warehouse inspection ______.'",
    "options": ["next week", "on next week"],
    "answer": "next week",
    "explanation": "When a time expression is preceded by demonstrative, limiting, or deictic modifiers such as 'next', 'last', 'this', or 'every', prepending a preposition like 'on' or 'in' is ungrammatical."
  },
  {
    "question": "Identify the correct temporal syntax: 'The franchise auditing team finalized the accounting reports ______.'",
    "options": ["last night", "on last night"],
    "answer": "last night",
    "explanation": "The phrasal modifier 'last night' operates as a self-contained adverbial objective of time. Introducing it with a preposition is a structural error in formal English."
  },
  {
    "question": "Identify the correct expression of manner: 'To maximize structural efficiency, please assemble the commercial kiosk ______.'",
    "options": ["this way", "on this way"],
    "answer": "this way",
    "explanation": "The demonstrative phrase 'this way' serves natively as an adverbial phrase of manner indicating 'in this specific mode'. It does not accept introductory prepositions."
  },
  {
    "question": "Identify the correct directional syntax: 'The expansion manager traveled ______ to study international retail station setups.'",
    "options": ["abroad", "to abroad"],
    "answer": "abroad",
    "explanation": "The word 'abroad' functions intrinsically as a spatial adverb of place. Because directional movement is already built into its definition, using the directional preposition 'to' is redundant."
  },
  {
    "question": "Identify the correct directional syntax: 'Please take these finalized operational manuals ______ to the manager\\'s archive office.'",
    "options": ["upstairs", "to upstairs"],
    "answer": "upstairs",
    "explanation": "'Upstairs' is a locational adverb that means 'to or on a higher floor'. It inherently handles direction, rendering the preposition 'to' syntactically incorrect."
  },
  {
    "question": "Identify the correct directional syntax: 'The storm began to intensify, forcing the construction crew to move ______.'",
    "options": ["inside", "to inside"],
    "answer": "inside",
    "explanation": "In this context, 'inside' functions as a standalone adverb of place denoting destination or position. Incorporating a preposition before it is a stylistic violation."
  },
  {
    "question": "Identify the correct directional syntax: 'The delivery truck driver headed ______ to deliver the specialty food products.'",
    "options": ["downtown", "to downtown"],
    "answer": "downtown",
    "explanation": "'Downtown' functions natively as an adverb of place indicating a specific urban sector. Verbs of motion link to it directly without any intermediary spatial prepositions."
  },
  {
    "question": "Identify the proper sentence to avoid a double negative: 'The visibility inside the storage unit was so poor that I can\\'t see ______.'",
    "options": ["nothing", "anything"],
    "answer": "anything",
    "explanation": "The auxiliary verb contraction 'can't' already introduces a negative value to the clause. Pairing it with the negative pronoun 'nothing' creates an ungrammatical double negative."
  },
  {
    "question": "Identify the proper sentence to avoid a double negative: 'Because of his intense shyness, the trainee hardly ______ speaks during meetings.'",
    "options": ["never", "ever"],
    "answer": "ever",
    "explanation": "The restrictive adverb 'hardly' possesses an inherent negative force. To maintain logical syntax, it must be paired with the affirmative element 'ever' to mean 'almost never'."
  },
  {
    "question": "Identify the proper sentence to avoid a double negative: 'The operations supervisor rarely ______ eats at the facility cafeteria.'",
    "options": ["don\\'t", "ever"],
    "answer": "ever",
    "explanation": "The frequency adverb 'rarely' is functionally negative. Adding the negative auxiliary 'don't' would result in a double negative, destroying the logical coherence of the clause."
  },
  {
    "question": "Analyze the phrase for structural redundancy: 'The delivery rider promised to return back to the retail station immediately.'",
    "options": ["correct", "redundant"],
    "answer": "redundant",
    "explanation": "The verb 'return' structurally means 'to go or come back'. Appending the adverb 'back' directly after 'return' creates a tautology or redundant phrasing."
  },
  {
    "question": "Analyze the phrase for structural redundancy: 'Please repeat again the specific instructions for the franchise audit dashboard.'",
    "options": ["correct", "redundant"],
    "answer": "redundant",
    "explanation": "The definition of 'repeat' is 'to say or do something again'. Consequently, utilizing the modifier 'again' alongside 'repeat' introduces unnecessary lexical repetition."
  },
  {
    "question": "Analyze the phrase for structural redundancy: 'The construction foreman ordered the heavy machinery operators to proceed forward.'",
    "options": ["correct", "redundant"],
    "answer": "redundant",
    "explanation": "The active verb 'proceed' inherently means 'to move forward or carry on an action'. Including the directional adverb 'forward' duplicates the spatial data redundantly."
  },
  {
    "question": "Analyze the phrase for structural redundancy: 'If the system crashes, the system database will revert back to its default settings.'",
    "options": ["correct", "redundant"],
    "answer": "redundant",
    "explanation": "The word 'revert' means 'to return to a previous state, condition, or practice'. Adding 'back' is a common but incorrect pleonasm that repeats the concept of return."
  },
  {
    "question": "Analyze the phrase for structural redundancy: 'The current warehouse inventory supplies are sufficient enough to last the month.'",
    "options": ["correct", "redundant"],
    "answer": "redundant",
    "explanation": "'Sufficient' and 'enough' are absolute synonyms expressing adequacy. Merging them into a single phrase ('sufficient enough') creates an obvious error of redundancy."
  },
  {
    "question": "Identify the proper sentence to avoid a double negative: 'Due to the heavy rain, there was scarcely ______ present at the construction site.'",
    "options": ["anyone", "no one"],
    "answer": "anyone",
    "explanation": "The adverb 'scarcely' implies near-total absence or negation. It requires the non-assertive pronoun 'anyone' to form a grammatically acceptable, non-redundant statement."
  },
  {
    "question": "Identify the proper sentence to avoid a double negative: 'The warehouse cleanup crew found barely ______ usable after the facility flood.'",
    "options": ["anything", "nothing"],
    "answer": "anything",
    "explanation": "The word 'barely' acts as a minimizing adverb with an implicit negative polarity. To prevent a double negative structure, it must be resolved using the open-ended pronoun 'anything'."
  }
]
};
