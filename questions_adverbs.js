const ADVERB_QUESTIONS{
  beginner: [
    // --- 1-10: Identification (Finding the Adverb) ---
    { 
      question: "In 'He runs quickly', identify the adverb.", 
      choices: ["He", "runs", "quickly", "is"], 
      correctIndex: 2, 
      explanation: "The word 'quickly' describes **how** the action happens. It modifies the verb 'runs'. Words that answer 'how' and end in -ly are usually adverbs." 
    },
    { 
      question: "In 'She sings loudly', identify the adverb.", 
      choices: ["She", "sings", "loudly", "song"], 
      correctIndex: 2, 
      explanation: "'Loudly' is the adverb because it describes the verb 'sings'. It answers the question: 'How does she sing?'" 
    },
    { 
      question: "In 'They played happily', identify the adverb.", 
      choices: ["They", "played", "happily", "game"], 
      correctIndex: 2, 
      explanation: "'Happily' describes the manner/feeling of the action 'played'. Adjectives describe nouns (happy kids), but adverbs describe verbs (played happily)." 
    },
    { 
      question: "In 'Go inside now', identify the adverb.", 
      choices: ["Go", "inside", "now", "Both B and C"], 
      correctIndex: 3, 
      explanation: "This sentence has two adverbs. 'Inside' is an adverb of **Place** (Where?), and 'now' is an adverb of **Time** (When?)." 
    },
    { 
      question: "In 'He never lies', identify the adverb.", 
      choices: ["He", "never", "lies", "is"], 
      correctIndex: 1, 
      explanation: "'Never' is an adverb of **Frequency**. It tells us **how often** he lies (which is at no time)." 
    },
    { 
      question: "In 'It is very cold', identify the adverb.", 
      choices: ["It", "is", "very", "cold"], 
      correctIndex: 2, 
      explanation: "Here, 'cold' is an adjective. The word 'very' describes **how cold** it is. Adverbs can modify adjectives to show intensity." 
    },
    { 
      question: "In 'She eats slowly', identify the adverb.", 
      choices: ["She", "eats", "slowly", "food"], 
      correctIndex: 2, 
      explanation: "'Slowly' describes the action 'eats'. It tells us the manner in which she is eating." 
    },
    { 
      question: "In 'We met yesterday', identify the adverb.", 
      choices: ["We", "met", "yesterday", "us"], 
      correctIndex: 2, 
      explanation: "'Yesterday' is an adverb of **Time**. It answers the question: 'When did we meet?'" 
    },
    { 
      question: "In 'Look up', identify the adverb.", 
      choices: ["Look", "up", "you", "none"], 
      correctIndex: 1, 
      explanation: "'Up' is an adverb of **Place/Direction**. It tells you **where** to look." 
    },
    { 
      question: "In 'I am fully prepared', identify the adverb.", 
      choices: ["I", "am", "fully", "prepared"], 
      correctIndex: 2, 
      explanation: "'Prepared' is an adjective describing 'I'. 'Fully' is an adverb that tells us **to what extent** I am prepared (100%)." 
    },

    // --- 11-20: Classification (Types of Adverbs) ---
    { 
      question: "What type of adverb is 'tomorrow'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 1, 
      explanation: "'Tomorrow' answers the question **'When?'**, so it is an Adverb of Time." 
    },
    { 
      question: "What type of adverb is 'here'?", 
      choices: ["Manner", "Time", "Place", "Frequency"], 
      correctIndex: 2, 
      explanation: "'Here' answers the question **'Where?'**, so it is an Adverb of Place." 
    },
    { 
      question: "What type of adverb is 'beautifully'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 0, 
      explanation: "'Beautifully' answers the question **'How?'** (in what way), so it is an Adverb of Manner." 
    },
    { 
      question: "What type of adverb is 'always'?", 
      choices: ["Manner", "Time", "Frequency", "Degree"], 
      correctIndex: 2, 
      explanation: "'Always' answers the question **'How often?'**, so it is an Adverb of Frequency." 
    },
    { 
      question: "What type of adverb is 'outside'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 2, 
      explanation: "'Outside' tells us the location or **where** an action is happening, making it an Adverb of Place." 
    },
    { 
      question: "What type of adverb is 'carefully'?", 
      choices: ["Manner", "Time", "Place", "Frequency"], 
      correctIndex: 0, 
      explanation: "'Carefully' describes the manner **(how)** something is done, so it is an Adverb of Manner." 
    },
    { 
      question: "What type of adverb is 'soon'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 1, 
      explanation: "'Soon' indicates a time in the near future (answering **'When?'**), so it is an Adverb of Time." 
    },
    { 
      question: "What type of adverb is 'everywhere'?", 
      choices: ["Manner", "Time", "Place", "Frequency"], 
      correctIndex: 2, 
      explanation: "'Everywhere' refers to all locations (answering **'Where?'**), so it is an Adverb of Place." 
    },
    { 
      question: "What type of adverb is 'rarely'?", 
      choices: ["Manner", "Time", "Frequency", "Place"], 
      correctIndex: 2, 
      explanation: "'Rarely' means 'not often'. It answers **'How often?'**, so it is an Adverb of Frequency." 
    },
    { 
      question: "What type of adverb is 'quite'?", 
      choices: ["Manner", "Time", "Place", "Degree"], 
      correctIndex: 3, 
      explanation: "'Quite' shows intensity or **how much** (e.g., quite good). This makes it an Adverb of Degree." 
    },

    // --- 21-30: Fill in the blank (Basic Forms) ---
    { 
      question: "She walked ______ down the street.", 
      choices: ["slow", "slowly", "slower", "slowest"], 
      correctIndex: 1, 
      explanation: "We need to modify the verb 'walked'. Adjectives (slow) describe nouns. Adverbs (slowly) describe verbs. **How did she walk? Slowly.**" 
    },
    { 
      question: "He speaks English ______.", 
      choices: ["fluent", "fluently", "fluency", "most fluent"], 
      correctIndex: 1, 
      explanation: "We are describing the action 'speaks'. Therefore, we need the adverb form 'fluently', not the adjective 'fluent'." 
    },
    { 
      question: "The dog barked ______.", 
      choices: ["loud", "loudly", "loudness", "louder"], 
      correctIndex: 1, 
      explanation: "The word must describe the verb 'barked'. Adverbs of manner usually end in -ly, so 'loudly' is correct." 
    },
    { 
      question: "Please hold the glass ______.", 
      choices: ["careful", "carefully", "care", "caring"], 
      correctIndex: 1, 
      explanation: "You are modifying the action 'hold'. How should you hold it? 'Carefully' (Adverb)." 
    },
    { 
      question: "She answered ______.", 
      choices: ["correct", "correctly", "correction", "corrects"], 
      correctIndex: 1, 
      explanation: "We need an adverb to describe 'answered'. 'Correctly' tells us she answered in a correct manner." 
    },
    { 
      question: "The sun shines ______.", 
      choices: ["bright", "brightly", "brightness", "brighter"], 
      correctIndex: 1, 
      explanation: "Since 'shines' is a verb of action here, we use the adverb 'brightly' to describe how it shines." 
    },
    { 
      question: "He waited ______ for his turn.", 
      choices: ["patient", "patiently", "patience", "patients"], 
      correctIndex: 1, 
      explanation: "He is performing the action of 'waiting'. We need the adverb 'patiently' to describe his behavior." 
    },
    { 
      question: "The rain fell ______.", 
      choices: ["heavy", "heavily", "heavier", "heaviest"], 
      correctIndex: 1, 
      explanation: "We are describing 'fell'. The adjective is 'heavy' (ends in y). To make it an adverb, change 'y' to 'i' and add 'ly' = **heavily**." 
    },
    { 
      question: "They lived ______ ever after.", 
      choices: ["happy", "happily", "happiness", "happier"], 
      correctIndex: 1, 
      explanation: "Describes how they 'lived'. Happy (adj) -> Happily (adv). Change y to i + ly." 
    },
    { 
      question: "Drive ______!", 
      choices: ["safe", "safely", "safety", "saver"], 
      correctIndex: 1, 
      explanation: "This is a command to perform the action 'drive' in a specific way. We use the adverb 'safely'." 
    },

    // --- 31-40: Adjective vs Adverb Distinction ---
    { 
      question: "He is a ______ driver.", 
      choices: ["careful", "carefully"], 
      correctIndex: 0, 
      explanation: "Here, we are describing the noun 'driver'. Adjectives describe nouns. So, we use the adjective 'careful'." 
    },
    { 
      question: "He drives ______.", 
      choices: ["careful", "carefully"], 
      correctIndex: 1, 
      explanation: "Here, we are describing the verb 'drives'. Adverbs describe verbs. So, we use the adverb 'carefully'." 
    },
    { 
      question: "She has a ______ voice.", 
      choices: ["loud", "loudly"], 
      correctIndex: 0, 
      explanation: "'Voice' is a noun. We use the adjective 'loud' to describe a noun." 
    },
    { 
      question: "She speaks ______.", 
      choices: ["loud", "loudly"], 
      correctIndex: 1, 
      explanation: "'Speaks' is an action verb. We use the adverb 'loudly' to describe how she speaks." 
    },
    { 
      question: "This math problem is ______.", 
      choices: ["easy", "easily"], 
      correctIndex: 0, 
      explanation: "The verb 'is' acts as a linking verb here, connecting the subject 'problem' to its description. We use the adjective 'easy'." 
    },
    { 
      question: "I can solve it ______.", 
      choices: ["easy", "easily"], 
      correctIndex: 1, 
      explanation: "'Solve' is an action verb. To describe how you solve something, use the adverb 'easily'." 
    },
    { 
      question: "Be ______.", 
      choices: ["quiet", "quietly"], 
      correctIndex: 0, 
      explanation: "After the verb 'be', we describe the subject (you). Therefore, use the adjective 'quiet'." 
    },
    { 
      question: "Work ______.", 
      choices: ["quiet", "quietly"], 
      correctIndex: 1, 
      explanation: "'Work' is an action. To describe how to work, use the adverb 'quietly'." 
    },
    { 
      question: "The test was ______.", 
      choices: ["bad", "badly"], 
      correctIndex: 0, 
      explanation: "'Was' is a linking verb. It links 'test' to an adjective. 'Bad' is the adjective. (Note: 'Badly' is an adverb)." 
    },
    { 
      question: "The team played ______.", 
      choices: ["bad", "badly"], 
      correctIndex: 1, 
      explanation: "'Played' is an action. We need an adverb to say they played poorly. The adverb form is 'badly'." 
    },

    // --- 41-50: Spelling & Formation ---
    { 
      question: "Adverb form of 'happy'?", 
      choices: ["happyly", "happily", "happely", "happly"], 
      correctIndex: 1, 
      explanation: "Spelling Rule: If an adjective ends in 'y', change the 'y' to 'i' before adding 'ly'. Happy -> Happily." 
    },
    { 
      question: "Adverb form of 'terrible'?", 
      choices: ["terribly", "terriblely", "terriby", "terriblly"], 
      correctIndex: 0, 
      explanation: "Spelling Rule: If an adjective ends in 'le' (terrible), drop the 'e' and add 'y'. Terrible -> Terribly." 
    },
    { 
      question: "Adverb form of 'gentle'?", 
      choices: ["gently", "gentlely", "gentlyly", "gentily"], 
      correctIndex: 0, 
      explanation: "Spelling Rule: Ends in 'le' (gentle). Drop the 'e' and add 'y'. Gentle -> Gently." 
    },
    { 
      question: "Adverb form of 'basic'?", 
      choices: ["basicly", "basically", "basicaly", "basiclly"], 
      correctIndex: 1, 
      explanation: "Spelling Rule: If an adjective ends in 'ic', add '-ally'. Basic -> Basically." 
    },
    { 
      question: "Adverb form of 'tragic'?", 
      choices: ["tragicly", "tragically", "tragicaly", "tragicy"], 
      correctIndex: 1, 
      explanation: "Spelling Rule: Ends in 'ic'. Add '-ally'. Tragic -> Tragically." 
    },
    { 
      question: "Adverb form of 'full'?", 
      choices: ["fully", "fuly", "fullly", "fullley"], 
      correctIndex: 0, 
      explanation: "Spelling Rule: Even though 'full' ends in 'l', we usually just add 'y' or 'ly' depending on the root. Correct spelling is 'fully'." 
    },
    { 
      question: "Adverb form of 'angry'?", 
      choices: ["angryly", "angrily", "angrely", "angry"], 
      correctIndex: 1, 
      explanation: "Ends in 'y'. Change 'y' to 'i' + 'ly'. Angry -> Angrily." 
    },
    { 
      question: "Adverb form of 'fast'?", 
      choices: ["fast", "fastly", "faster", "fastest"], 
      correctIndex: 0, 
      explanation: "Irregular Adverb! 'Fast' describes both the noun and the verb. **There is no such word as 'fastly'.** He runs fast." 
    },
    { 
      question: "Adverb form of 'good'?", 
      choices: ["goodly", "well", "good", "goodest"], 
      correctIndex: 1, 
      explanation: "Irregular Adverb! The adjective is 'good'. The adverb is 'well'. (e.g., You did a good job / You did well)." 
    },
    { 
      question: "Adverb form of 'hard' (meaning 'with effort')?", 
      choices: ["hard", "hardly", "harder", "hardest"], 
      correctIndex: 0, 
      explanation: "Irregular! 'Hard' means with effort. 'Hardly' means 'almost not'. If you work with effort, you work **hard**." 
    }
  ],

  intermediate: [
    // --- 51-60: Good vs Well (Common Confusion) ---
    { 
      question: "She plays the piano ______.", 
      choices: ["good", "well", "better", "best"], 
      correctIndex: 1, 
      explanation: "We describe the action 'plays'. Since it's a verb, we use the adverb 'well'. ('Good' is an adjective)." 
    },
    { 
      question: "Her piano playing is ______.", 
      choices: ["good", "well", "better", "best"], 
      correctIndex: 0, 
      explanation: "Here we describe the noun phrase 'piano playing' using the linking verb 'is'. Adjectives describe nouns, so use 'good'." 
    },
    { 
      question: "I don't feel ______ today.", 
      choices: ["good", "well", "nice", "fine"], 
      correctIndex: 1, 
      explanation: "Special Rule: When talking about **health**, 'well' is used as an adjective. 'I don't feel well' means I am not healthy." 
    },
    { 
      question: "He did a ______ job.", 
      choices: ["good", "well"], 
      correctIndex: 0, 
      explanation: "'Job' is a noun. Adjectives describe nouns. So, 'good job' is correct." 
    },
    { 
      question: "The team played ______ yesterday.", 
      choices: ["good", "well"], 
      correctIndex: 1, 
      explanation: "'Played' is an action verb. Adverbs describe verbs. So, 'played well' is correct." 
    },
    { 
      question: "It looks ______.", 
      choices: ["good", "well"], 
      correctIndex: 0, 
      explanation: "'Looks' is a linking verb referring to appearance. We use the adjective 'good' (e.g., That looks good/tasty)." 
    },
    { 
      question: "She speaks English ______.", 
      choices: ["good", "well"], 
      correctIndex: 1, 
      explanation: "We are modifying the verb 'speaks'. How does she speak? She speaks **well**." 
    },
    { 
      question: "He is a ______ student.", 
      choices: ["good", "well"], 
      correctIndex: 0, 
      explanation: "'Student' is a noun. Use the adjective 'good' to describe him." 
    },
    { 
      question: "Did you sleep ______?", 
      choices: ["good", "well"], 
      correctIndex: 1, 
      explanation: "We are modifying the action 'sleep'. Use the adverb 'well'. (Sleep well)." 
    },
    { 
      question: "The food tastes ______.", 
      choices: ["good", "well"], 
      correctIndex: 0, 
      explanation: "'Tastes' is a linking verb describing the food. Use the adjective 'good'." 
    },

    // --- 61-70: Comparison of Adverbs ---
    { 
      question: "He runs ______ than me.", 
      choices: ["fast", "faster", "fastly", "more fast"], 
      correctIndex: 1, 
      explanation: "When comparing two actions with short adverbs (like fast), add '-er'. **Faster** is correct. (Fastly does not exist)." 
    },
    { 
      question: "She works ______ than her brother.", 
      choices: ["hard", "harder", "hardly", "more hard"], 
      correctIndex: 1, 
      explanation: "For one-syllable adverbs like 'hard', add '-er' to make the comparative form: **harder**." 
    },
    { 
      question: "Please speak ______.", 
      choices: ["more clearly", "clearlier", "most clearly", "clear"], 
      correctIndex: 0, 
      explanation: "For adverbs ending in '-ly', we usually use **more** to compare. 'More clearly' is the correct form." 
    },
    { 
      question: "He arrived ______ than expected.", 
      choices: ["early", "earlier", "more early", "earliest"], 
      correctIndex: 1, 
      explanation: "Early ends in 'y'. Change 'y' to 'i' and add 'er'. **Earlier** is the comparative form." 
    },
    { 
      question: "Of all the runners, he ran ______.", 
      choices: ["fastest", "faster", "most fast", "fastly"], 
      correctIndex: 0, 
      explanation: "This compares more than two people ('of all'). We use the **superlative** form. Fast -> **Fastest**." 
    },
    { 
      question: "She sings ______ of all.", 
      choices: ["beautifully", "more beautifully", "most beautifully", "beauty"], 
      correctIndex: 2, 
      explanation: "Superlative for -ly adverbs uses 'most'. Since we are comparing her to 'all', she sings **most beautifully**." 
    },
    { 
      question: "He drives ______ than his father.", 
      choices: ["carefully", "more carefully", "most carefully", "carefuller"], 
      correctIndex: 1, 
      explanation: "Comparing two people (him vs father). For 'carefully', we use **more carefully**." 
    },
    { 
      question: "Who woke up ______?", 
      choices: ["earlier", "earliest", "early", "more early"], 
      correctIndex: 1, 
      explanation: "Usually, 'Who woke up earliest?' implies looking for the #1 person in a group. If comparing only two, 'earlier' is used." 
    },
    { 
      question: "I did ______ on the test than I thought.", 
      choices: ["badly", "worse", "worst", "badder"], 
      correctIndex: 1, 
      explanation: "The adverb 'badly' has an irregular comparative form. Badly -> **Worse** -> Worst. Since we use 'than', it is comparative." 
    },
    { 
      question: "He treats her ______ than anyone else.", 
      choices: ["better", "best", "gooder", "well"], 
      correctIndex: 0, 
      explanation: "The adverb 'well' has an irregular comparative form. Well -> **Better** -> Best." 
    },

    // --- 71-80: Placement (Where to put the adverb) ---
    { 
      question: "Choose the correct order:", 
      choices: ["I always am late.", "I am always late.", "Always I am late.", "I am late always."], 
      correctIndex: 1, 
      explanation: "Rule: Frequency adverbs (always, never, usually) come **AFTER** the verb 'to be' (am, is, are, was, were)." 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["He often plays tennis.", "He plays often tennis.", "He plays tennis often.", "Often he plays tennis."], 
      correctIndex: 0, 
      explanation: "Rule: Frequency adverbs come **BEFORE** main action verbs (like 'plays', 'eats', 'runs')." 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["We usually go to the park.", "We go usually to the park.", "We go to the park usually.", "Usually we go to the park."], 
      correctIndex: 0, 
      explanation: "The most natural position is before the main verb 'go'. 'We usually go...'" 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["She doesn't always eat breakfast.", "She always doesn't eat breakfast.", "She doesn't eat always breakfast.", "She eats always breakfast."], 
      correctIndex: 0, 
      explanation: "In negative sentences, the adverb goes between the auxiliary ('doesn't') and the main verb ('eat')." 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["I have never been to Japan.", "I never have been to Japan.", "I have been never to Japan.", "I have been to Japan never."], 
      correctIndex: 0, 
      explanation: "Rule: In 'have + past participle' (perfect tenses), the adverb goes in the middle. 'I have **never** been...'" 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["They rarely watch TV.", "They watch rarely TV.", "Rarely they watch TV.", "They watch TV rarely."], 
      correctIndex: 0, 
      explanation: "Standard rule: Adverb ('rarely') before the main verb ('watch')." 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["He is seldom angry.", "He seldom is angry.", "He is angry seldom.", "Seldom he is angry."], 
      correctIndex: 0, 
      explanation: "Remember the 'to be' rule? The adverb 'seldom' comes **AFTER** 'is'." 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["Do you often visit?", "Do often you visit?", "You do visit often?", "Visit you often?"], 
      correctIndex: 0, 
      explanation: "In questions, the order is: Auxiliary (Do) + Subject (you) + Adverb (often) + Verb (visit)." 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["She sometimes cooks.", "She cooks sometimes.", "Sometimes she cooks.", "All are acceptable."], 
      correctIndex: 3, 
      explanation: "'Sometimes' is a flexible adverb. It can go at the beginning, middle, or end of a sentence comfortably." 
    },
    { 
      question: "Choose the correct order:", 
      choices: ["My dad usually works late.", "My dad works usually late.", "Usually works my dad late.", "My dad works late usually."], 
      correctIndex: 0, 
      explanation: "Best placement is before the main verb 'works'." 
    },

    // --- 81-90: Hard vs Hardly, Late vs Lately (Tricky Pairs) ---
    { 
      question: "He works ______.", 
      choices: ["hard", "hardly"], 
      correctIndex: 0, 
      explanation: "'Hard' means with effort or energy. 'Hardly' means 'almost not'. He works **hard** (with effort)." 
    },
    { 
      question: "He ______ works.", 
      choices: ["hard", "hardly"], 
      correctIndex: 1, 
      explanation: "Here, the meaning is negative. 'He **hardly** works' means he is lazy or does almost no work." 
    },
    { 
      question: "I haven't seen him ______.", 
      choices: ["late", "lately"], 
      correctIndex: 1, 
      explanation: "'Lately' means **recently**. 'Late' means not on time. The sentence means 'I haven't seen him recently'." 
    },
    { 
      question: "The bus arrived ______.", 
      choices: ["late", "lately"], 
      correctIndex: 0, 
      explanation: "We mean 'not on time'. The correct adverb is **late**. (e.g., better late than never)." 
    },
    { 
      question: "She can ______ see without her glasses.", 
      choices: ["hard", "hardly"], 
      correctIndex: 1, 
      explanation: "She can 'almost not' see. We use **hardly**. 'She can hardly see' = Her vision is very bad." 
    },
    { 
      question: "He hit the ball ______.", 
      choices: ["hard", "hardly"], 
      correctIndex: 0, 
      explanation: "He used force. We use **hard**." 
    },
    { 
      question: "Have you been busy ______?", 
      choices: ["late", "lately"], 
      correctIndex: 1, 
      explanation: "Meaning: Have you been busy **recently**? Use **lately**." 
    },
    { 
      question: "He stayed up ______.", 
      choices: ["late", "lately"], 
      correctIndex: 0, 
      explanation: "He stayed up until a time far into the night. We use **late**." 
    },
    { 
      question: "There is ______ any food left.", 
      choices: ["hard", "hardly"], 
      correctIndex: 1, 
      explanation: "'Hardly any' is a common phrase meaning 'very little' or 'almost none'." 
    },
    { 
      question: "She tries ______ to succeed.", 
      choices: ["hard", "hardly"], 
      correctIndex: 0, 
      explanation: "She tries with effort. She tries **hard**." 
    },

    // --- 91-100: Intensifiers (Very, Too, Enough) ---
    { 
      question: "The soup is ______ hot to eat.", 
      choices: ["very", "too", "enough", "much"], 
      correctIndex: 1, 
      explanation: "'Too' has a negative meaning. It means 'excessive' or 'more than wanted'. It's so hot that you cannot eat it." 
    },
    { 
      question: "He is strong ______ to lift it.", 
      choices: ["very", "too", "enough", "so"], 
      correctIndex: 2, 
      explanation: "Rule: 'Enough' comes **AFTER** the adjective. Strong enough, good enough, old enough." 
    },
    { 
      question: "She is ______ tired.", 
      choices: ["very", "enough", "much", "many"], 
      correctIndex: 0, 
      explanation: "'Very' is a standard intensifier before an adjective to mean 'a high degree'." 
    },
    { 
      question: "It is ______ cold today.", 
      choices: ["very", "enough", "much", "many"], 
      correctIndex: 0, 
      explanation: "'Very' modifies the adjective 'cold'. 'Much' is usually used with comparatives (much colder), not base adjectives." 
    },
    { 
      question: "He is not old ______ to drive.", 
      choices: ["very", "too", "enough", "much"], 
      correctIndex: 2, 
      explanation: "Again, the rule is Adjective + Enough. 'Old enough'." 
    },
    { 
      question: "The box is ______ heavy for me to lift.", 
      choices: ["very", "too", "enough", "so"], 
      correctIndex: 1, 
      explanation: "Pattern: 'Too' + Adjective + 'for/to'. It means it is impossible to lift because of the weight." 
    },
    { 
      question: "He ran fast ______ to win.", 
      choices: ["very", "too", "enough", "so"], 
      correctIndex: 2, 
      explanation: "Adverb + Enough. 'Fast enough' means sufficiently fast to achieve the goal." 
    },
    { 
      question: "I am ______ happy for you.", 
      choices: ["so", "too", "enough", "such"], 
      correctIndex: 0, 
      explanation: "'So' is used to emphasize an adjective. 'I am so happy' is natural. 'Such' needs a noun (such a happy day)." 
    },
    { 
      question: "It was ______ a good movie.", 
      choices: ["so", "such", "very", "too"], 
      correctIndex: 1, 
      explanation: "Rule: Use **Such** before 'a/an + Adjective + Noun'. Such a good movie. (Use 'So' if there is no noun: The movie was so good)." 
    },
    { 
      question: "The tea is ______ sweet.", 
      choices: ["very", "enough", "much", "many"], 
      correctIndex: 0, 
      explanation: "Simple intensifier. 'Very sweet' means it has a lot of sugar." 
    }
  ]
};


  advanced: [
    // --- 101-110: Inversion (Advanced Grammar) ---
    { 
      question: "______ have I seen such a mess.", 
      choices: ["Never", "Always", "Often", "Usually"], 
      correctIndex: 0, 
      explanation: "This is called **Negative Inversion**. When a sentence starts with a negative adverb (Never, Rarely), the verb comes before the subject. 'Never have I...'" 
    },
    { 
      question: "Rarely ______ to the cinema.", 
      choices: ["we go", "do we go", "we do go", "go we"], 
      correctIndex: 1, 
      explanation: "'Rarely' is negative. It triggers inversion. We need an auxiliary verb (do) before the subject. Correct: 'Rarely **do we** go'." 
    },
    { 
      question: "Seldom ______ such talent.", 
      choices: ["one sees", "does one see", "sees one", "one does see"], 
      correctIndex: 1, 
      explanation: "'Seldom' (meaning almost never) requires inversion at the start of a sentence. 'Seldom **does one** see'." 
    },
    { 
      question: "Hardly ______ arrived when it rained.", 
      choices: ["had I", "I had", "have I", "I have"], 
      correctIndex: 0, 
      explanation: "Pattern: 'Hardly + had + Subject + Past Participle'. This means one event happened immediately after another. 'Hardly **had I** arrived...'" 
    },
    { 
      question: "Little ______ that he was watching.", 
      choices: ["did she know", "she knew", "she did know", "knew she"], 
      correctIndex: 0, 
      explanation: "'Little' here acts as a negative adverb meaning 'she didn't know'. It forces inversion: 'Little **did she** know'." 
    },
    { 
      question: "Nowhere ______ find a better offer.", 
      choices: ["you will", "will you", "you can", "can"], 
      correctIndex: 1, 
      explanation: "'Nowhere' is a negative location adverb. When starting a sentence, use inversion: 'Nowhere **will you** find...'." 
    },
    { 
      question: "On no account ______ be opened.", 
      choices: ["should this door", "this door should", "this door", "door should"], 
      correctIndex: 0, 
      explanation: "'On no account' is a strong negative phrase. It requires the verb 'should' to come before the subject 'this door'." 
    },
    { 
      question: "Not only ______ sing, but he also dances.", 
      choices: ["he does", "does he", "he can", "he is"], 
      correctIndex: 1, 
      explanation: "Pattern: 'Not only + Auxiliary + Subject'. Correct: 'Not only **does he** sing...'." 
    },
    { 
      question: "Scarcely ______ down when the phone rang.", 
      choices: ["I sat", "did I sit", "had I sat", "was I sitting"], 
      correctIndex: 2, 
      explanation: "Similar to 'Hardly', 'Scarcely' uses the Past Perfect tense inverted. 'Scarcely **had I** sat...'." 
    },
    { 
      question: "Under no circumstances ______ leave.", 
      choices: ["you should", "should you", "you must", "are you"], 
      correctIndex: 1, 
      explanation: "'Under no circumstances' is a negative condition. It triggers inversion: 'should you'." 
    },

    // --- 111-120: Placement of "Only" (Logic/Meaning) ---
    { 
      question: "Meaning: 'No one else but John went.'", 
      choices: ["Only John went.", "John went only.", "John only went.", "John went."], 
      correctIndex: 0, 
      explanation: "Placement matters! 'Only' limits the word directly after it. To say 'No one else', we place it before 'John'. **Only John**." 
    },
    { 
      question: "Meaning: 'I merely looked at him (didn't talk).'", 
      choices: ["Only I looked at him.", "I only looked at him.", "I looked at him only.", "I looked only at him."], 
      correctIndex: 1, 
      explanation: "We want to limit the action 'looked'. So we put 'only' before the verb. 'I **only looked** at him'." 
    },
    { 
      question: "Meaning: 'She eats nothing but vegetables.'", 
      choices: ["She only eats vegetables.", "She eats only vegetables.", "Only she eats vegetables.", "She eats vegetables only."], 
      correctIndex: 1, 
      explanation: "She eats [vegetables and nothing else]. 'Only' should be close to 'vegetables'. 'She eats **only vegetables**'." 
    },
    { 
      question: "Place 'only' correctly: 'He lent me five pesos.' (Meaning: No more than 5).", 
      choices: ["Only he lent me five pesos.", "He lent me only five pesos.", "He only lent me five pesos.", "He lent me five pesos only."], 
      correctIndex: 1, 
      explanation: "We are limiting the amount. 'Only' goes before 'five pesos'. 'He lent me **only five pesos**'." 
    },
    { 
      question: "Meaning: 'It happens on Sundays and no other day.'", 
      choices: ["It only happens on Sundays.", "It happens only on Sundays.", "Only it happens on Sundays.", "It happens on Sundays only."], 
      correctIndex: 1, 
      explanation: "We are strictly limiting the day. 'It happens **only on Sundays**'." 
    },
    { 
      question: "The meeting lasted ______ an hour.", 
      choices: ["only", "alone", "single", "justly"], 
      correctIndex: 0, 
      explanation: "'Only' is used to show that an amount or time is small or limited. 'Only an hour'." 
    },
    { 
      question: "______ three students passed.", 
      choices: ["Only", "Justly", "Merely", "Alone"], 
      correctIndex: 0, 
      explanation: "We use 'Only' to indicate a small number. 'Only three students'." 
    },
    { 
      question: "I have ______ two hands.", 
      choices: ["only", "alone", "merely", "single"], 
      correctIndex: 0, 
      explanation: "Used to state a fact about quantity limitation. 'I have only two hands'." 
    },
    { 
      question: "She is the ______ one who knows.", 
      choices: ["only", "alone", "lonely", "solely"], 
      correctIndex: 0, 
      explanation: "Here, 'only' acts as an adjective meaning 'sole' or 'single'. 'The **only** one'." 
    },
    { 
      question: "He did it ______ for the money.", 
      choices: ["only", "alone", "lonely", "solitary"], 
      correctIndex: 0, 
      explanation: "Meaning he had no other reason. 'Only for the money'." 
    },

    // --- 121-130: Conjunctive Adverbs (Connectors) ---
    { 
      question: "It rained hard; ______, we played soccer.", 
      choices: ["however", "therefore", "moreover", "consequently"], 
      correctIndex: 0, 
      explanation: "'However' shows contrast. Raining usually stops soccer, but **however**, we played anyway." 
    },
    { 
      question: "He didn't study; ______, he failed.", 
      choices: ["however", "therefore", "nevertheless", "otherwise"], 
      correctIndex: 1, 
      explanation: "'Therefore' shows result/effect. He didn't study -> Result: He failed." 
    },
    { 
      question: "The rent is high; ______, the location is bad.", 
      choices: ["therefore", "moreover", "consequently", "thus"], 
      correctIndex: 1, 
      explanation: "'Moreover' adds another point (usually another negative point here). High rent + Bad location." 
    },
    { 
      question: "Run fast; ______, you will be late.", 
      choices: ["otherwise", "therefore", "however", "besides"], 
      correctIndex: 0, 
      explanation: "'Otherwise' means 'if not' or 'or else'. Run fast, or else you will be late." 
    },
    { 
      question: "I love milk; ______, I am allergic to it.", 
      choices: ["consequently", "however", "therefore", "moreover"], 
      correctIndex: 1, 
      explanation: "Contrast logic. I love it, BUT (however) I can't drink it." 
    },
    { 
      question: "Select correct punctuation:", 
      choices: ["He is sick, therefore he is absent.", "He is sick; therefore, he is absent.", "He is sick therefore, he is absent.", "He is sick; therefore he is absent."], 
      correctIndex: 1, 
      explanation: "Punctuation Rule: Semicolon (;) before the connector, and Comma (,) after it. **; therefore,**" 
    },
    { 
      question: "Select correct punctuation:", 
      choices: ["I tried hard; however, I failed.", "I tried hard, however I failed.", "I tried hard however, I failed.", "I tried hard; however I failed."], 
      correctIndex: 0, 
      explanation: "Punctuation Rule: Use a semicolon before 'however' and a comma after it when connecting two independent sentences." 
    },
    { 
      question: "He is rich; ______, he is unhappy.", 
      choices: ["nevertheless", "consequently", "therefore", "additionally"], 
      correctIndex: 0, 
      explanation: "'Nevertheless' means 'in spite of that'. He is rich, but despite that, he is unhappy." 
    },
    { 
      question: "We have no money; ______, we can't buy it.", 
      choices: ["however", "consequently", "nevertheless", "otherwise"], 
      correctIndex: 1, 
      explanation: "'Consequently' means 'as a result'. No money -> Result: Can't buy." 
    },
    { 
      question: "It was cold; ______, we went swimming.", 
      choices: ["therefore", "besides", "nonetheless", "consequently"], 
      correctIndex: 2, 
      explanation: "'Nonetheless' is a synonym for 'nevertheless' or 'even so'. It shows unexpected action despite the cold." 
    },

    // --- 131-140: Degree (Intensity) ---
    { 
      question: "I ______ agree with you.", 
      choices: ["completely", "very", "too", "much"], 
      correctIndex: 0, 
      explanation: "We use 'completely' or 'totally' with the verb 'agree'. We don't usually say 'very agree'." 
    },
    { 
      question: "It was ______ ridiculous.", 
      choices: ["utterly", "very", "much", "many"], 
      correctIndex: 0, 
      explanation: "'Ridiculous' is already a strong word (extreme adjective). With extreme words, we use 'utterly' or 'absolutely', not 'very'." 
    },
    { 
      question: "She is ______ prettier than her sister.", 
      choices: ["much", "very", "too", "so"], 
      correctIndex: 0, 
      explanation: "When modifying a comparative adjective (prettier), we use **much**, **far**, or **a lot**. 'Much prettier'." 
    },
    { 
      question: "He is ______ the best player.", 
      choices: ["by far", "very", "too", "so"], 
      correctIndex: 0, 
      explanation: "With superlatives (the best), we use **by far**. 'By far the best'." 
    },
    { 
      question: "I am ______ sorry.", 
      choices: ["terribly", "terrible", "much", "many"], 
      correctIndex: 0, 
      explanation: "Collocation (words that go together). We say 'terribly sorry' to mean 'very sorry'." 
    },
    { 
      question: "It is ______ freezing outside.", 
      choices: ["absolutely", "very", "too", "fairly"], 
      correctIndex: 0, 
      explanation: "'Freezing' is an ungradable/extreme adjective. You cannot be 'a little bit freezing'. Use **absolutely**." 
    },
    { 
      question: "The movie was ______ hilarious.", 
      choices: ["absolutely", "very", "slightly", "fairly"], 
      correctIndex: 0, 
      explanation: "'Hilarious' means very funny. It is extreme. Use **absolutely** hilarious." 
    },
    { 
      question: "I was ______ exhausted.", 
      choices: ["totally", "very", "quite", "fairly"], 
      correctIndex: 0, 
      explanation: "'Exhausted' means very tired. Use **totally** or **completely**." 
    },
    { 
      question: "It is ______ hot (meaning 'a little').", 
      choices: ["rather", "too", "utterly", "completely"], 
      correctIndex: 0, 
      explanation: "'Rather' or 'fairly' indicates a moderate degree. It's hotter than usual, but not extreme." 
    },
    { 
      question: "She is ______ shorter than him.", 
      choices: ["slightly", "very", "too", "quite"], 
      correctIndex: 0, 
      explanation: "'Slightly' means a small amount. It modifies the comparative 'shorter'." 
    },

    // --- 141-150: Viewpoint & Comment Adverbs ---
    { 
      question: "______, he didn't get the job.", 
      choices: ["Unfortunately", "Unfortunate", "Happy", "Badly"], 
      correctIndex: 0, 
      explanation: "This is a Comment Adverb. It gives the speaker's opinion on the whole sentence. It was unlucky/sad that he didn't get it." 
    },
    { 
      question: "______, it will rain today.", 
      choices: ["Presumably", "Presume", "Sure", "Definite"], 
      correctIndex: 0, 
      explanation: "'Presumably' means 'it is likely' or 'I assume'. Use the adverb form to modify the whole sentence." 
    },
    { 
      question: "______, I don't care.", 
      choices: ["Frankly", "Frank", "Honest", "True"], 
      correctIndex: 0, 
      explanation: "'Frankly' means 'to be honest'. It introduces a blunt statement." 
    },
    { 
      question: "______, he arrived on time.", 
      choices: ["Surprisingly", "Surprising", "Surprise", "Shock"], 
      correctIndex: 0, 
      explanation: "It was a surprise to the speaker. 'Surprisingly' modifies the event." 
    },
    { 
      question: "______, there are no free seats.", 
      choices: ["Regrettably", "Regret", "Sorry", "Sad"], 
      correctIndex: 0, 
      explanation: "'Regrettably' is a formal way to say 'Unfortunately' or 'I am sorry to say'." 
    },
    { 
      question: "______, she is the best candidate.", 
      choices: ["Undoubtedly", "Doubt", "Sure", "Uncertain"], 
      correctIndex: 0, 
      explanation: "'Undoubtedly' means 'without a doubt'. It shows certainty." 
    },
    { 
      question: "______, we need to cut costs.", 
      choices: ["Basically", "Basic", "Base", "Basis"], 
      correctIndex: 0, 
      explanation: "'Basically' is used to summarize the most important point." 
    },
    { 
      question: "______, I prefer tea.", 
      choices: ["Personally", "Person", "Private", "Self"], 
      correctIndex: 0, 
      explanation: "'Personally' indicates that this is just the speaker's own opinion." 
    },
    { 
      question: "______, he is right.", 
      choices: ["Technically", "Technical", "Technique", "Tech"], 
      correctIndex: 0, 
      explanation: "'Technically' means according to the strict facts or rules, even if it feels wrong generally." 
    },
    { 
      question: "______, it was a disaster.", 
      choices: ["Essentially", "Essential", "Essence", "Real"], 
      correctIndex: 0, 
      explanation: "'Essentially' means 'basically' or 'at its core'." 
    }
  ],

  super: [
    // --- 151-160: Flat Adverbs & Tricky Pairs (Deep vs Deeply) ---
    { 
      question: "He threw the ball ______.", 
      choices: ["high", "highly"], 
      correctIndex: 0, 
      explanation: "Use **high** when talking about physical height/distance. 'He jumped high'." 
    },
    { 
      question: "He is ______ respected.", 
      choices: ["high", "highly"], 
      correctIndex: 1, 
      explanation: "Use **highly** to mean 'very' or in a figurative sense. 'Highly recommended'." 
    },
    { 
      question: "I dove ______ into the ocean.", 
      choices: ["deep", "deeply"], 
      correctIndex: 0, 
      explanation: "Use **deep** for physical distance downwards. 'Dig deep'." 
    },
    { 
      question: "I was ______ moved by the movie.", 
      choices: ["deep", "deeply"], 
      correctIndex: 1, 
      explanation: "Use **deeply** for emotions or abstract concepts. 'Deeply in love'." 
    },
    { 
      question: "The bird flew ______.", 
      choices: ["low", "lowly"], 
      correctIndex: 0, 
      explanation: "Use **low** for physical height. 'Lowly' means humble or low status." 
    },
    { 
      question: "He bowed ______.", 
      choices: ["low", "lowly"], 
      correctIndex: 0, 
      explanation: "Physical action. He bent his body down low." 
    },
    { 
      question: "She arrived ______.", 
      choices: ["late", "lately"], 
      correctIndex: 0, 
      explanation: "Not on time = **late**." 
    },
    { 
      question: "I haven't eaten ______.", 
      choices: ["late", "lately"], 
      correctIndex: 1, 
      explanation: "Recently = **lately**." 
    },
    { 
      question: "Stand ______.", 
      choices: ["clear", "clearly"], 
      correctIndex: 0, 
      explanation: "Here, 'clear' means 'away from'. Stand clear of the doors." 
    },
    { 
      question: "Speak ______.", 
      choices: ["clear", "clearly"], 
      correctIndex: 1, 
      explanation: "Means 'in a clear manner'. Speak **clearly**." 
    },

    // --- 161-170: Meaning Shift with -ly ---
    { 
      question: "He works ______.", 
      choices: ["hard", "hardly"], 
      correctIndex: 0, 
      explanation: "Means 'with effort'. He works **hard**." 
    },
    { 
      question: "He ______ works.", 
      choices: ["hardly", "hard"], 
      correctIndex: 0, 
      explanation: "Means 'almost never'. He **hardly** works." 
    },
    { 
      question: "The eagle flies ______.", 
      choices: ["high", "highly"], 
      correctIndex: 0, 
      explanation: "Physical altitude = **high**." 
    },
    { 
      question: "It is ______ probable.", 
      choices: ["high", "highly"], 
      correctIndex: 1, 
      explanation: "Means 'very probable'. Use **highly**." 
    },
    { 
      question: "He sat ______ to me.", 
      choices: ["close", "closely"], 
      correctIndex: 0, 
      explanation: "Physical distance (near). He sat **close**." 
    },
    { 
      question: "Listen ______.", 
      choices: ["close", "closely"], 
      correctIndex: 1, 
      explanation: "Pay attention carefully. Listen **closely**." 
    },
    { 
      question: "The door was ______ open.", 
      choices: ["wide", "widely"], 
      correctIndex: 0, 
      explanation: "Physical extent. **Wide** open." 
    },
    { 
      question: "He is ______ known.", 
      choices: ["wide", "widely"], 
      correctIndex: 1, 
      explanation: "Known by many people (extent/range). **Widely** known." 
    },
    { 
      question: "You are ______ right.", 
      choices: ["dead", "deadly"], 
      correctIndex: 0, 
      explanation: "'Dead' can mean 'completely' in informal English. 'Dead right' or 'Dead wrong'." 
    },
    { 
      question: "It is a ______ weapon.", 
      choices: ["dead", "deadly"], 
      correctIndex: 1, 
      explanation: "'Deadly' is an adjective meaning 'lethal' or 'causing death'." 
    },

    // --- 171-180: Imposter Adjectives (Ending in -ly) ---
    { 
      question: "She is a ______ person.", 
      choices: ["lovely", "lovelily"], 
      correctIndex: 0, 
      explanation: "'Lovely' ends in -ly but it is an **Adjective**. It describes the noun 'person'." 
    },
    { 
      question: "He behaved in a ______ manner.", 
      choices: ["friendly", "friendlily"], 
      correctIndex: 0, 
      explanation: "'Friendly' is an adjective. To use it as an adverb, we often say 'in a friendly manner' because 'friendlily' sounds awkward." 
    },
    { 
      question: "I feel ______.", 
      choices: ["lonely", "lone"], 
      correctIndex: 0, 
      explanation: "'Lonely' is an adjective describing a feeling." 
    },
    { 
      question: "It was a ______ meeting.", 
      choices: ["timely", "timelily"], 
      correctIndex: 0, 
      explanation: "'Timely' is an adjective meaning 'happening at the right time'." 
    },
    { 
      question: "That looks ______.", 
      choices: ["ugly", "uglily"], 
      correctIndex: 0, 
      explanation: "'Ugly' is an adjective describing the noun." 
    },
    { 
      question: "He is a ______ man.", 
      choices: ["kindly", "kindlily"], 
      correctIndex: 0, 
      explanation: "'Kindly' is an adjective meaning kind and warm-hearted." 
    },
    { 
      question: "It was a ______ error.", 
      choices: ["costly", "costlily"], 
      correctIndex: 0, 
      explanation: "'Costly' is an adjective meaning expensive." 
    },
    { 
      question: "Daily is an ______.", 
      choices: ["Adjective only", "Adverb only", "Both"], 
      correctIndex: 2, 
      explanation: "It can be both. 'A daily paper' (Adj) and 'I exercise daily' (Adv)." 
    },
    { 
      question: "Early is an ______.", 
      choices: ["Adjective only", "Adverb only", "Both"], 
      correctIndex: 2, 
      explanation: "Both. 'Early bird' (Adj) and 'Arrived early' (Adv)." 
    },
    { 
      question: "Fast is an ______.", 
      choices: ["Adjective only", "Adverb only", "Both"], 
      correctIndex: 2, 
      explanation: "Both. 'Fast car' (Adj) and 'Run fast' (Adv)." 
    },

    // --- 181-190: Adverbial Objectives & Nouns as Adverbs ---
    { 
      question: "Let's go ______.", 
      choices: ["home", "to home"], 
      correctIndex: 0, 
      explanation: "'Home' acts as an adverb of place here. We do not use the preposition 'to' before home." 
    },
    { 
      question: "I waited ______.", 
      choices: ["two hours", "for two hours", "Both are correct"], 
      correctIndex: 2, 
      explanation: "Nouns of time can act as adverbs. 'I waited two hours' is correct. 'For two hours' is also correct." 
    },
    { 
      question: "He ran ______.", 
      choices: ["three miles", "for three miles", "Both are correct"], 
      correctIndex: 2, 
      explanation: "Distance phrases can act as adverbs. Both are acceptable." 
    },
    { 
      question: "See you ______.", 
      choices: ["next week", "on next week"], 
      correctIndex: 0, 
      explanation: "Rule: Do not use 'on', 'in', or 'at' before 'next' or 'last' in time expressions." 
    },
    { 
      question: "We met ______.", 
      choices: ["last night", "on last night"], 
      correctIndex: 0, 
      explanation: "Correct: 'Last night'. Incorrect: 'On last night'." 
    },
    { 
      question: "Do it ______.", 
      choices: ["this way", "on this way"], 
      correctIndex: 0, 
      explanation: "'This way' is an adverbial phrase of manner. No preposition needed." 
    },
    { 
      question: "They went ______.", 
      choices: ["abroad", "to abroad"], 
      correctIndex: 0, 
      explanation: "'Abroad' is an adverb. Never use 'to' before abroad." 
    },
    { 
      question: "Go ______.", 
      choices: ["upstairs", "to upstairs"], 
      correctIndex: 0, 
      explanation: "'Upstairs' is an adverb of place. No 'to' needed." 
    },
    { 
      question: "Come ______.", 
      choices: ["inside", "to inside"], 
      correctIndex: 0, 
      explanation: "'Inside' functions as an adverb here." 
    },
    { 
      question: "He went ______.", 
      choices: ["downtown", "to downtown"], 
      correctIndex: 0, 
      explanation: "'Downtown' is an adverb of place. We go downtown (no 'to')." 
    },

    // --- 191-200: Double Negatives & Redundancy ---
    { 
      question: "I can't see ______.", 
      choices: ["nothing", "anything"], 
      correctIndex: 1, 
      explanation: "**Double Negative Rule:** 'Can't' is already negative. 'Nothing' is negative. You cannot have two negatives. Use 'anything'." 
    },
    { 
      question: "He hardly ______ speaks.", 
      choices: ["never", "ever"], 
      correctIndex: 1, 
      explanation: "'Hardly' is negative (meaning almost not). Do not use 'never' with it. Use 'ever'." 
    },
    { 
      question: "I rarely ______ eat there.", 
      choices: ["don't", "ever"], 
      correctIndex: 1, 
      explanation: "'Rarely' is already negative. Saying 'rarely don't' is a double negative. Correct: 'I rarely ever eat there'." 
    },
    { 
      question: "Return back is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "**Redundancy:** 'Return' already means 'go back'. Adding 'back' repeats the meaning unnecessarily." 
    },
    { 
      question: "Repeat again is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "'Repeat' means 'say/do again'. Adding 'again' is redundant." 
    },
    { 
      question: "Proceed forward is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "'Proceed' means to move forward. 'Forward' is redundant." 
    },
    { 
      question: "Revert back is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "A common error in emails. 'Revert' means to go back to a previous state. 'Back' is redundant." 
    },
    { 
      question: "Sufficient enough is ______.", 
      choices: ["correct", "redundant"], 
      correctIndex: 1, 
      explanation: "Choose one. Something is either 'sufficient' or 'enough'. Using both is repetitive." 
    },
    { 
      question: "Scarcely ______ (meaning 'almost no one').", 
      choices: ["anyone", "no one"], 
      correctIndex: 0, 
      explanation: "'Scarcely' is negative. Using 'no one' creates a double negative. Use 'anyone'." 
    },
    { 
      question: "Barely ______ (meaning 'almost nothing').", 
      choices: ["anything", "nothing"], 
      correctIndex: 0, 
      explanation: "'Barely' is negative. Use 'anything' to avoid a double negative." 
    }
  ]
};
