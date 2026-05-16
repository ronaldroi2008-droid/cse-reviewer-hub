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
      question: "She plays the piano ______.",
      options: ["good", "well", "better", "best"],
      answer: "well",
      explanation: "Words that describe verbs must be adverbs. 'Well' is the adverb form of 'good'."
    },
    {
      question: "Her piano playing is ______.",
      options: ["good", "well", "better", "best"],
      answer: "good",
      explanation: "The word describes the noun phrase 'piano playing'. After linking verb 'is', we use an adjective."
    },
    {
      question: "I don't feel ______ today.",
      options: ["good", "well", "nice", "fine"],
      answer: "well",
      explanation: "When talking about health or physical condition, 'well' functions as an adjective."
    },
    {
      question: "He did a ______ job.",
      options: ["good", "well"],
      answer: "good",
      explanation: "The word describes the noun 'job'. Adjectives describe nouns."
    },
    {
      question: "The team played ______ yesterday.",
      options: ["good", "well"],
      answer: "well",
      explanation: "'Played' is a verb, so it must be modified by an adverb."
    },
    {
      question: "It looks ______.",
      options: ["good", "well"],
      answer: "good",
      explanation: "'Looks' is a linking verb referring to appearance. Linking verbs are followed by adjectives."
    },
    {
      question: "She speaks English ______.",
      options: ["good", "well"],
      answer: "well",
      explanation: "'Well' modifies the verb 'speaks'."
    },
    {
      question: "He is a ______ student.",
      options: ["good", "well"],
      answer: "good",
      explanation: "The word describes the noun 'student'. Adjectives describe nouns."
    },
    {
      question: "Did you sleep ______?",
      options: ["good", "well"],
      answer: "well",
      explanation: "'Well' is the adverb that modifies the verb 'sleep'."
    },
    {
      question: "The food tastes ______.",
      options: ["good", "well"],
      answer: "good",
      explanation: "'Tastes' is a linking verb that describes the food. Linking verbs take adjectives."
    },

    // 61-70: Comparison of Adverbs
    {
      question: "He runs ______ than me.",
      options: ["fast", "faster", "fastly", "more fast"],
      answer: "faster",
      explanation: "'Fast' is a short adverb, so its comparative form is made by adding '-er'."
    },
    {
      question: "She works ______ than her brother.",
      options: ["hard", "harder", "hardly", "more hard"],
      answer: "harder",
      explanation: "'Hard' is a one-syllable adverb. To compare two actions, add '-er'."
    },
    {
      question: "Please speak ______.",
      options: ["more clearly", "clearlier", "most clearly", "clear"],
      answer: "more clearly",
      explanation: "Adverbs ending in '-ly' form comparatives using 'more', not '-er'."
    },
    {
      question: "He arrived ______ than expected.",
      options: ["early", "earlier", "more early", "earliest"],
      answer: "earlier",
      explanation: "'Early' ends in 'y', so the comparative form changes 'y' to 'i' and adds '-er'."
    },
    {
      question: "Of all the runners, he ran ______.",
      options: ["fastest", "faster", "most fast", "fastly"],
      answer: "fastest",
      explanation: "'Of all' shows comparison among more than two people. This requires the superlative form."
    },
    {
      question: "She sings ______ of all.",
      options: ["beautifully", "more beautifully", "most beautifully", "beauty"],
      answer: "most beautifully",
      explanation: "For '-ly' adverbs, the superlative form uses 'most'."
    },
    {
      question: "He drives ______ than his father.",
      options: ["carefully", "more carefully", "most carefully", "carefuller"],
      answer: "more carefully",
      explanation: "'Carefully' ends in '-ly', so the comparative form uses 'more'."
    },
    {
      question: "Among all the students, who woke up ______?",
      options: ["early", "earlier", "earliest", "more early"],
      answer: "earliest",
      explanation: "'Among all' signals comparison of more than two people. The superlative form must be used."
    },
    {
      question: "I did ______ on the test than I thought.",
      options: ["badly", "worse", "worst", "badder"],
      answer: "worse",
      explanation: "'Badly' has an irregular comparative form. Badly → worse → worst."
    },
    {
      question: "He treats her ______ than anyone else.",
      options: ["better", "best", "gooder", "well"],
      answer: "better",
      explanation: "'Well' has an irregular comparative form: well → better → best."
    },

    // 71-80: Placement (Where to put the adverb)
    {
      question: "Choose the best sentence:",
      options: ["I always am late.", "I am always late.", "Always I am late.", "I am late always."],
      answer: "I am always late.",
      explanation: "Frequency adverbs usually come after the verb 'be'."
    },
    {
      question: "Choose the best sentence:",
      options: ["He often plays tennis.", "He plays often tennis.", "He often plays tennis often.", "He plays tennis often often."],
      answer: "He often plays tennis.",
      explanation: "Frequency adverbs normally come before the main verb."
    },
    {
      question: "Choose the best sentence:",
      options: ["We usually go to the park.", "We go usually to the park.", "We go to the park usually.", "We go to usually the park."],
      answer: "We usually go to the park.",
      explanation: "'Usually' modifies the verb 'go'. The standard placement for frequency adverbs is before the main verb."
    },
    {
      question: "Choose the best sentence:",
      options: ["She doesn't always eat breakfast.", "She always doesn't eat breakfast.", "She doesn't eat always breakfast.", "She eats always breakfast."],
      answer: "She doesn't always eat breakfast.",
      explanation: "In negative sentences, the frequency adverb is placed between the auxiliary and the main verb."
    },
    {
      question: "Choose the best sentence:",
      options: ["I have never been to Japan.", "I never have been to Japan.", "I have been never to Japan.", "I have been to Japan never."],
      answer: "I have never been to Japan.",
      explanation: "In perfect tenses, the adverb comes between the auxiliary 'have' and the past participle."
    },
    {
      question: "Choose the best sentence:",
      options: ["They rarely watch TV.", "They watch rarely TV.", "They rarely watch TV on weekdays.", "They watch TV rarely on weekdays rarely."],
      answer: "They rarely watch TV.",
      explanation: "'Rarely' modifies the verb 'watch'. The standard position is before the main verb."
    },
    {
      question: "Choose the best sentence:",
      options: ["He is seldom angry.", "He seldom is angry.", "He is angry seldom.", "Seldom he is angry."],
      answer: "He is seldom angry.",
      explanation: "With the verb 'be', frequency adverbs usually come after it."
    },
    {
      question: "Choose the best sentence:",
      options: ["Do you often visit?", "Do often you visit?", "You do visit often?", "Visit you often?"],
      answer: "Do you often visit?",
      explanation: "In questions, the order is auxiliary + subject + adverb + main verb."
    },
    {
      question: "Choose the best sentence:",
      options: ["She sometimes cooks.", "She cooks sometimes sometimes.", "Sometimes cooks she.", "She cooks sometimes always."],
      answer: "She sometimes cooks.",
      explanation: "'Sometimes' modifies the verb 'cooks'. The middle position before the main verb is standard."
    },
    {
      question: "Choose the best sentence:",
      options: ["My dad usually works late.", "My dad works usually late.", "Usually works my dad late.", "My dad works late usually usually."],
      answer: "My dad usually works late.",
      explanation: "'Usually' modifies the verb 'works'. The standard position is before the main verb."
    },

    // 81-90: Hard vs Hardly, Late vs Lately (Tricky Pairs)
    {
      question: "He works ______.",
      options: ["hard", "hardly"],
      answer: "hard",
      explanation: "The intended meaning is that he works with effort. 'Hard' modifies the verb 'works'."
    },
    {
      question: "He ______ works.",
      options: ["hard", "hardly"],
      answer: "hardly",
      explanation: "The meaning is negative: he almost does not work. 'Hardly' means 'almost not'."
    },
    {
      question: "I haven't seen him ______.",
      options: ["late", "lately"],
      answer: "lately",
      explanation: "The sentence means 'I have not seen him recently'. 'Lately' means 'recently'."
    },
    {
      question: "The bus arrived ______.",
      options: ["late", "lately"],
      answer: "late",
      explanation: "The meaning is 'not on time'. 'Late' modifies the verb 'arrived'."
    },
    {
      question: "She can ______ see without her glasses.",
      options: ["hard", "hardly"],
      answer: "hardly",
      explanation: "The sentence means she almost cannot see. 'Hardly' expresses near-negation."
    },
    {
      question: "He hit the ball ______.",
      options: ["hard", "hardly"],
      answer: "hard",
      explanation: "The meaning is that he used force. 'Hard' modifies the verb 'hit'."
    },
    {
      question: "Have you been busy ______?",
      options: ["late", "lately"],
      answer: "lately",
      explanation: "The question asks about recent time. 'Lately' means 'recently'."
    },
    {
      question: "He stayed up ______.",
      options: ["late", "lately"],
      answer: "late",
      explanation: "The sentence describes time of night. 'Late' means until a late hour."
    },
    {
      question: "There is ______ any food left.",
      options: ["hard", "hardly"],
      answer: "hardly",
      explanation: "'Hardly' is a negative adverb meaning 'almost none'."
    },
    {
      question: "She tries ______ to succeed.",
      options: ["hard", "hardly"],
      answer: "hard",
      explanation: "The meaning is that she makes strong effort. 'Hard' means 'with effort'."
    },

    // 91-100: Intensifiers (Very, Too, Enough)
    {
      question: "The soup is ______ hot to eat.",
      options: ["very", "too", "enough", "much"],
      answer: "too",
      explanation: "'Too' expresses excess beyond what is acceptable."
    },
    {
      question: "He is strong ______ to lift it.",
      options: ["very", "too", "enough", "so"],
      answer: "enough",
      explanation: "'Enough' expresses sufficiency and comes after the adjective it modifies."
    },
    {
      question: "She is ______ tired.",
      options: ["very", "enough", "much", "many"],
      answer: "very",
      explanation: "'Very' intensifies the adjective 'tired'."
    },
    {
      question: "It is ______ cold today.",
      options: ["very", "enough", "much", "many"],
      answer: "very",
      explanation: "'Very' modifies base adjectives like 'cold'."
    },
    {
      question: "He is not old ______ to drive.",
      options: ["very", "too", "enough", "much"],
      answer: "enough",
      explanation: "The structure is adjective + enough + infinitive."
    },
    {
      question: "The box is ______ heavy for me to lift.",
      options: ["very", "too", "enough", "so"],
      answer: "too",
      explanation: "'Too + adjective + for/to' expresses excess that makes an action impossible."
    },
    {
      question: "He ran fast ______ to win.",
      options: ["very", "too", "enough", "so"],
      answer: "enough",
      explanation: "'Enough' follows the adverb it modifies."
    },
    {
      question: "I am ______ happy for you.",
      options: ["so", "too", "enough", "such"],
      answer: "so",
      explanation: "'So' intensifies an adjective without adding a negative meaning."
    },
    {
      question: "It was ______ a good movie.",
      options: ["so", "such", "very", "too"],
      answer: "such",
      explanation: "'Such' is used before 'a/an + adjective + noun'."
    },
    {
      question: "The tea is ______ sweet.",
      options: ["very", "enough", "much", "many"],
      answer: "very",
      explanation: "'Very' modifies adjectives directly."
    }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Complex Structures
  // ============================================================
  advanced: [
    // 101-110: Inversion (Advanced Grammar)
    {
      question: "______ have I seen such a mess.",
      options: ["Never", "Always", "Often", "Usually"],
      answer: "Never",
      explanation: "When a negative adverb (never) begins a sentence, subject–auxiliary inversion is required."
    },
    {
      question: "Rarely ______ to the cinema.",
      options: ["we go", "do we go", "we do go", "go we"],
      answer: "do we go",
      explanation: "When 'rarely' starts the sentence, the auxiliary 'do' must come before the subject."
    },
    {
      question: "Seldom ______ such talent.",
      options: ["one sees", "does one see", "sees one", "one does see"],
      answer: "does one see",
      explanation: "Sentence-initial negative adverbs require inversion using an auxiliary."
    },
    {
      question: "Hardly ______ arrived when it rained.",
      options: ["had I", "I had", "have I", "I have"],
      answer: "had I",
      explanation: "The pattern is 'Hardly + had + subject + past participle'."
    },
    {
      question: "Little ______ that he was watching.",
      options: ["did she know", "she knew", "she did know", "knew she"],
      answer: "did she know",
      explanation: "As a negative adverb at the beginning, 'little' triggers inversion."
    },
    {
      question: "Nowhere ______ find a better offer.",
      options: ["you will", "will you", "you can", "can"],
      answer: "will you",
      explanation: "'Nowhere' is a negative adverb of place. When it begins a sentence, inversion is required."
    },
    {
      question: "On no account ______ be opened.",
      options: ["should this door", "this door should", "this door", "door should"],
      answer: "should this door",
      explanation: "'On no account' is a strong negative expression that requires inversion."
    },
    {
      question: "Not only ______ sing, but he also dances.",
      options: ["he does", "does he", "he can", "he is"],
      answer: "does he",
      explanation: "'Not only' at the beginning triggers inversion in the first clause."
    },
    {
      question: "Scarcely ______ down when the phone rang.",
      options: ["I sat", "did I sit", "had I sat", "was I sitting"],
      answer: "had I sat",
      explanation: "'Scarcely' uses the inverted past perfect pattern."
    },
    {
      question: "Under no circumstances ______ leave.",
      options: ["you should", "should you", "you must", "are you"],
      answer: "should you",
      explanation: "'Under no circumstances' requires inversion with a modal auxiliary."
    },

    // 111-120: Placement of "Only" (Logic/Meaning)
    {
      question: "Meaning: 'No one else but John went.'",
      options: ["Only John went.", "John went only.", "John only went.", "John went."],
      answer: "Only John went.",
      explanation: "'Only' must be placed directly before 'John' to show that no one else went."
    },
    {
      question: "Meaning: 'I merely looked at him (didn't talk).'",
      options: ["Only I looked at him.", "I only looked at him.", "I looked at him only.", "I looked only at him."],
      answer: "I only looked at him.",
      explanation: "'Only' is placed before the verb 'looked' to show that no other action happened."
    },
    {
      question: "Meaning: 'She eats nothing but vegetables.'",
      options: ["She only eats vegetables.", "She eats only vegetables.", "Only she eats vegetables.", "She eats vegetables only."],
      answer: "She eats only vegetables.",
      explanation: "'Only' must be placed directly before 'vegetables' to show exclusivity of food."
    },
    {
      question: "Place 'only' correctly: 'He lent me five pesos.' (Meaning: no more than five.)",
      options: ["Only he lent me five pesos.", "He lent me only five pesos.", "He only lent me five pesos.", "He lent me five pesos only."],
      answer: "He lent me only five pesos.",
      explanation: "The meaning limits the amount. 'Only' must be placed before 'five pesos'."
    },
    {
      question: "Meaning: 'It happens on Sundays and no other day.'",
      options: ["It only happens on Sundays.", "It happens only on Sundays.", "Only it happens on Sundays.", "It happens on Sundays only."],
      answer: "It happens only on Sundays.",
      explanation: "'Only' must be placed directly before the time expression 'on Sundays'."
    },
    {
      question: "The meeting lasted ______ an hour.",
      options: ["only", "alone", "single", "justly"],
      answer: "only",
      explanation: "'Only' limits duration and means 'no more than'."
    },
    {
      question: "______ three students passed.",
      options: ["Only", "Justly", "Merely", "Alone"],
      answer: "Only",
      explanation: "'Only' correctly limits the number."
    },
    {
      question: "I have ______ two hands.",
      options: ["only", "alone", "merely", "single"],
      answer: "only",
      explanation: "'Only' limits quantity."
    },
    {
      question: "She is the ______ one who knows.",
      options: ["only", "alone", "lonely", "solely"],
      answer: "only",
      explanation: "'Only' functions as an adjective meaning 'sole'."
    },
    {
      question: "He did it ______ for the money.",
      options: ["only", "alone", "lonely", "solitary"],
      answer: "only",
      explanation: "'Only' limits the reason. It shows there was no other motivation."
    },

    // 121-130: Conjunctive Adverbs (Connectors)
    {
      question: "It rained hard; ______, we played soccer.",
      options: ["however", "therefore", "moreover", "consequently"],
      answer: "however",
      explanation: "'However' shows contrast between expectation and result."
    },
    {
      question: "He didn't study; ______, he failed.",
      options: ["however", "therefore", "nevertheless", "otherwise"],
      answer: "therefore",
      explanation: "'Therefore' shows cause and effect."
    },
    {
      question: "The rent is high; ______, the location is bad.",
      options: ["therefore", "moreover", "consequently", "thus"],
      answer: "moreover",
      explanation: "'Moreover' adds another point of the same type."
    },
    {
      question: "Run fast; ______, you will be late.",
      options: ["otherwise", "therefore", "however", "besides"],
      answer: "otherwise",
      explanation: "'Otherwise' means 'if not'. It warns of a consequence if the instruction is not followed."
    },
    {
      question: "I love milk; ______, I am allergic to it.",
      options: ["consequently", "however", "therefore", "moreover"],
      answer: "however",
      explanation: "'However' introduces a contrast between liking milk and being unable to consume it."
    },
    {
      question: "Select the correct punctuation:",
      options: ["He is sick, therefore he is absent.", "He is sick; therefore, he is absent.", "He is sick therefore, he is absent.", "He is sick; therefore he is absent."],
      answer: "He is sick; therefore, he is absent.",
      explanation: "When joining two independent clauses with a conjunctive adverb, use a semicolon before it and a comma after it."
    },
    {
      question: "Select the correct punctuation:",
      options: ["I tried hard; however, I failed.", "I tried hard, however I failed.", "I tried hard however, I failed.", "I tried hard; however I failed."],
      answer: "I tried hard; however, I failed.",
      explanation: "A semicolon is required before 'however' to link independent clauses, and a comma follows the conjunctive adverb."
    },
    {
      question: "He is rich; ______, he is unhappy.",
      options: ["nevertheless", "consequently", "therefore", "additionally"],
      answer: "nevertheless",
      explanation: "'Nevertheless' shows contrast and unexpected outcome despite the first clause."
    },
    {
      question: "We have no money; ______, we can't buy it.",
      options: ["however", "consequently", "nevertheless", "otherwise"],
      answer: "consequently",
      explanation: "'Consequently' expresses result."
    },
    {
      question: "It was cold; ______, we went swimming.",
      options: ["therefore", "besides", "nonetheless", "consequently"],
      answer: "nonetheless",
      explanation: "'Nonetheless' shows that the action happened despite the condition."
    },

    // 131-140: Degree (Intensity)
    {
      question: "I ______ agree with you.",
      options: ["completely", "very", "too", "much"],
      answer: "completely",
      explanation: "'Agree' is a verb that takes degree adverbs like 'completely' or 'fully'."
    },
    {
      question: "It was ______ ridiculous.",
      options: ["utterly", "very", "much", "many"],
      answer: "utterly",
      explanation: "'Ridiculous' is an extreme adjective. Extreme adjectives take adverbs like 'utterly' or 'absolutely'."
    },
    {
      question: "She is ______ prettier than her sister.",
      options: ["much", "very", "too", "so"],
      answer: "much",
      explanation: "Comparatives are intensified by 'much', 'far', or 'a lot'."
    },
    {
      question: "He is ______ the best player.",
      options: ["by far", "very", "too", "so"],
      answer: "by far",
      explanation: "Superlatives are intensified by expressions like 'by far'."
    },
    {
      question: "I am ______ sorry.",
      options: ["terribly", "terrible", "much", "many"],
      answer: "terribly",
      explanation: "'Terribly' is a common collocation meaning 'very'."
    },
    {
      question: "It is ______ freezing outside.",
      options: ["absolutely", "very", "too", "fairly"],
      answer: "absolutely",
      explanation: "'Freezing' is an extreme adjective. It requires an intensifier like 'absolutely'."
    },
    {
      question: "The movie was ______ hilarious.",
      options: ["absolutely", "very", "slightly", "fairly"],
      answer: "absolutely",
      explanation: "'Hilarious' is an extreme adjective. 'Absolutely' correctly intensifies it."
    },
    {
      question: "I was ______ exhausted.",
      options: ["totally", "very", "quite", "fairly"],
      answer: "totally",
      explanation: "'Exhausted' is an extreme adjective. 'Totally' correctly expresses full degree."
    },
    {
      question: "It is ______ hot (meaning 'a little').",
      options: ["rather", "too", "utterly", "completely"],
      answer: "rather",
      explanation: "'Rather' expresses a moderate degree."
    },
    {
      question: "She is ______ shorter than him.",
      options: ["slightly", "very", "too", "quite"],
      answer: "slightly",
      explanation: "'Slightly' correctly modifies a comparative adjective to show small difference."
    },

    // 141-150: Viewpoint & Comment Adverbs
    {
      question: "______, he didn't get the job.",
      options: ["Unfortunately", "Unfortunate", "Happy", "Badly"],
      answer: "Unfortunately",
      explanation: "'Unfortunately' comments on the entire situation and expresses the speaker's judgment."
    },
    {
      question: "______, it will rain today.",
      options: ["Presumably", "Presume", "Sure", "Definite"],
      answer: "Presumably",
      explanation: "'Presumably' expresses assumption about the whole statement."
    },
    {
      question: "______, I don't care.",
      options: ["Frankly", "Frank", "Honest", "True"],
      answer: "Frankly",
      explanation: "'Frankly' introduces the speaker's attitude toward the statement."
    },
    {
      question: "______, he arrived on time.",
      options: ["Surprisingly", "Surprising", "Surprise", "Shock"],
      answer: "Surprisingly",
      explanation: "'Surprisingly' comments on the unexpected nature of the event."
    },
    {
      question: "______, there are no free seats.",
      options: ["Regrettably", "Regret", "Sorry", "Sad"],
      answer: "Regrettably",
      explanation: "'Regrettably' is a formal comment adverb expressing negative evaluation."
    },
    {
      question: "______, she is the best candidate.",
      options: ["Undoubtedly", "Doubt", "Sure", "Uncertain"],
      answer: "Undoubtedly",
      explanation: "'Undoubtedly' expresses certainty about the whole statement."
    },
    {
      question: "______, we need to cut costs.",
      options: ["Basically", "Basic", "Base", "Basis"],
      answer: "Basically",
      explanation: "'Basically' summarizes the core idea of the statement."
    },
    {
      question: "______, I prefer tea.",
      options: ["Personally", "Person", "Private", "Self"],
      answer: "Personally",
      explanation: "'Personally' signals that the statement is the speaker's own viewpoint."
    },
    {
      question: "______, he is right.",
      options: ["Technically", "Technical", "Technique", "Tech"],
      answer: "Technically",
      explanation: "'Technically' shows correctness according to strict rules."
    },
    {
      question: "______, it was a disaster.",
      options: ["Essentially", "Essential", "Essence", "Real"],
      answer: "Essentially",
      explanation: "'Essentially' summarizes the true nature of the situation."
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
