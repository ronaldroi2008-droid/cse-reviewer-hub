// questions/adjectives.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["adjectives"] = {

  // ============================================================
  // LEVEL 1: BEGINNER (50 Items) - Identification & Basic Types
  // ============================================================
  beginner: [
     {
    "question": "Which word is the adjective? 'She bought a red bag.'",
    "options": ["She", "bought", "red", "bag"],
    "answer": "red",
    "explanation": "In this sentence, the word 'red' is the adjective because it modifies or describes the noun 'bag' by telling us its color. 'She' is a pronoun, 'bought' is a verb, and 'bag' is the object noun."
  },
  {
    "question": "Which word is the adjective? 'The tall boy is my cousin.'",
    "options": ["tall", "boy", "is", "cousin"],
    "answer": "tall",
    "explanation": "The word 'tall' functions as the adjective because it directly describes the physical characteristic of the noun 'boy'. It answers the question 'which boy?' or 'what kind of boy?'."
  },
  {
    "question": "In 'four chairs', 'four' is a:",
    "options": ["Noun", "Verb", "Adjective", "Adverb"],
    "answer": "Adjective",
    "explanation": "The word 'four' is a numeral adjective (specifically a cardinal number). Instead of describing a quality, it quantifies the noun 'chairs' by stating exactly how many units are present."
  },
  {
    "question": "Adjective in: 'We had a delicious meal.'",
    "options": ["We", "had", "delicious", "meal"],
    "answer": "delicious",
    "explanation": "The word 'delicious' is the adjective because it describes the quality or taste of the noun 'meal'. It provides sensory information about the food that was eaten."
  },
  {
    "question": "Adjective in: 'That building is new.'",
    "options": ["That", "building", "is", "new"],
    "answer": "new",
    "explanation": "The word 'new' is a predicate adjective. Even though it comes after the linking verb 'is', it still functions to describe the state or age of the subject noun 'building'."
  },
  {
    "question": "Adjective in: 'She lives in a small house.'",
    "options": ["lives", "small", "house", "in"],
    "answer": "small",
    "explanation": "The word 'small' is an adjective of size. It is placed directly before the noun 'house' to modify it by giving us an idea of its physical scale or dimensions."
  },
  {
    "question": "Adjective in: 'My bag is heavy.'",
    "options": ["My", "bag", "is", "heavy"],
    "answer": "heavy",
    "explanation": "The word 'heavy' serves as a predicate adjective in this sentence. It follows the linking verb 'is' and describes a specific physical property or weight of the subject noun 'bag'."
  },
  {
    "question": "Adjective in: 'They watched an exciting movie.'",
    "options": ["They", "watched", "exciting", "movie"],
    "answer": "exciting",
    "explanation": "The word 'exciting' is a descriptive adjective derived from a participle. It is positioned right before the noun 'movie' to explain the kind of emotional response or quality the movie possessed."
  },
  {
    "question": "Adjective in: 'The streets are quiet tonight.'",
    "options": ["streets", "are", "quiet", "tonight"],
    "answer": "quiet",
    "explanation": "The word 'quiet' acts as a predicate adjective following the plural linking verb 'are'. It describes the peaceful condition or atmosphere of the subject noun 'streets'."
  },
  {
    "question": "Adjective in: 'She has long hair.'",
    "options": ["She", "has", "long", "hair"],
    "answer": "long",
    "explanation": "The word 'long' is the descriptive adjective here. It is paired with the noun 'hair' to specify its measurement or physical extent from root to tip."
  },
  {
    "question": "Which is a demonstrative adjective?",
    "options": ["quickly", "those", "hers", "they"],
    "answer": "those",
    "explanation": "The word 'those' is a demonstrative adjective because it is used to point out specific plural nouns that are relatively far from the speaker (e.g., 'those books'). 'Quickly' is an adverb, 'hers' is a possessive pronoun, and 'they' is a subject pronoun."
  },
  {
    "question": "Which is a possessive adjective?",
    "options": ["hers", "their", "them", "they"],
    "answer": "their",
    "explanation": "The word 'their' is a possessive adjective because it must be placed directly before a noun to show ownership or association (e.g., 'their house'). 'Hers' is a standalone possessive pronoun, while 'them' and 'they' are personal pronouns."
  },
  {
    "question": "Identify the interrogative adjective:",
    "options": ["Which book?", "Which is it?", "Whose is that?", "What?"],
    "answer": "Which book?",
    "explanation": "In the phrase 'Which book?', the word 'Which' acts as an interrogative adjective because it directly modifies and precedes the noun 'book' to ask a specific question. In the other options, the words stand alone as interrogative pronouns."
  },
  {
    "question": "Adjective in: 'Our teacher is kind.'",
    "options": ["Our", "teacher", "is", "kind"],
    "answer": "kind",
    "explanation": "While 'Our' is technically a possessive adjective modifying 'teacher', the clear descriptive adjective focusing on personality or trait here is 'kind', which acts as a predicate adjective describing the subject."
  },
  {
    "question": "Which has a proper adjective?",
    "options": ["fresh fruit", "Filipino food", "fast car", "quiet street"],
    "answer": "Filipino food",
    "explanation": "The phrase 'Filipino food' contains a proper adjective. 'Filipino' is derived from the proper noun 'Philippines' and must always be capitalized because it refers to a specific nationality, culture, or origin modifying the noun 'food'."
  },
  {
    "question": "Which has a numeral adjective?",
    "options": ["some apples", "many books", "three brothers", "enough time"],
    "answer": "three brothers",
    "explanation": "The phrase 'three brothers' contains a numeral adjective ('three') because it expresses a definite, exact countable number. The other choices ('some', 'many', 'enough') are indefinite quantitative adjectives that do not give an exact count."
  },
  {
    "question": "Which is a quantitative adjective?",
    "options": ["few", "quickly", "sing", "teacher"],
    "answer": "few",
    "explanation": "The word 'few' is an indefinite quantitative adjective because it indicates an approximate amount or volume of something without providing a precise number. 'Quickly' is an adverb, 'sing' is a verb, and 'teacher' is a noun."
  },
  {
    "question": "Demonstrative adjective in: 'That car is expensive.'",
    "options": ["That", "car", "is", "expensive"],
    "answer": "That",
    "explanation": "The word 'That' functions as a demonstrative adjective because it modifies the noun 'car' by pointing out a specific singular object located at a distance from the speaker. 'Expensive' is a descriptive predicate adjective."
  },
  {
    "question": "Correct possessive adjective usage:",
    "options": ["This is me pen", "This is mine pen", "This is my pen", "This is I pen"],
    "answer": "This is my pen",
    "explanation": "The word 'my' is the correct singular possessive adjective that must immediately precede and modify the noun 'pen'. 'Mine' is a possessive pronoun used without a noun, 'me' is an object pronoun, and 'I' is a subject pronoun."
  },
  {
    "question": "Sentence with interrogative adjective:",
    "options": ["What is that?", "Whose bag is this?", "Who is he?", "Where are they?"],
    "answer": "Whose bag is this?",
    "explanation": "In 'Whose bag is this?', the word 'Whose' is an interrogative adjective because it is placed directly next to the noun 'bag' to ask about ownership. In 'What is that?', 'What' stands alone as an interrogative pronoun."
  },
  {
    "question": "Choose correct usage:",
    "options": ["She sings beautiful", "She sings beautifully", "She sings beauty", "She sings beautify"],
    "answer": "She sings beautifully",
    "explanation": "The action verb 'sings' requires the adverb 'beautifully' to describe *how* the action is performed. Adjectives like 'beautiful' cannot modify active verbs; they can only modify nouns or follow linking verbs."
  },
  {
    "question": "Correct usage after linking verb 'smells':",
    "options": ["smells good", "smells well", "smells quickly", "smells carefully"],
    "answer": "smells good",
    "explanation": "'Smells' functions here as a sensory linking verb, not an action verb. In English grammar, linking verbs must be followed by a predicate adjective ('good') to describe the subject, rather than an adverb ('well')."
  },
  {
    "question": "Which is correct?",
    "options": ["He feels badly", "He feels bad", "He feels badder", "He feels more bad"],
    "answer": "He feels bad",
    "explanation": "The verb 'feels' is a linking verb that connects the subject to an emotional or physical state. Therefore, it requires the adjective form 'bad' instead of the adverb 'badly'. Forms like 'badder' and 'more bad' are grammatically incorrect."
  },
  {
    "question": "Correct usage:",
    "options": ["tastes sweet", "tastes sweetly", "tastes sweetness", "tastes sweetful"],
    "answer": "tastes sweet",
    "explanation": "The word 'tastes' is a sensory linking verb that describes the property of a food item. It must be paired with the descriptive adjective 'sweet' rather than an adverb or noun to express its flavor profile."
  },
  {
    "question": "Adjective in: 'He is a careful driver.'",
    "options": ["He", "is", "careful", "driver"],
    "answer": "careful",
    "explanation": "The word 'careful' is an adjective because it is positioned directly before the noun 'driver' to modify it, telling us what kind of habits or characteristics the driver has."
  },
  {
    "question": "Sentence using adverb correctly:",
    "options": ["He drives careful", "He drives carefully", "He is carefully", "He is carefully driver"],
    "answer": "He drives carefully",
    "explanation": "In this sentence, 'drives' is an action verb, so it must be modified by the adverb 'carefully' to explain the manner of driving. Adjectives like 'careful' are incorrect when modifying actions."
  },
  {
    "question": "Correct usage of 'good':",
    "options": ["sings good", "is a good singer", "sings more good", "sings goodly"],
    "answer": "is a good singer",
    "explanation": "The word 'good' is strictly an adjective and must modify a noun like 'singer'. To modify an action verb like 'sings', you would need to use the adverb 'well'. Thus, 'is a good singer' is perfectly grammatical."
  },
  {
    "question": "Adjective in: 'It was a noisy classroom.'",
    "options": ["It", "was", "noisy", "classroom"],
    "answer": "noisy",
    "explanation": "The word 'noisy' is the adjective because it modifies the common noun 'classroom', describing the loud auditory environment or sound level inside the room."
  },
  {
    "question": "Usage of 'well' as adjective (health):",
    "options": ["I feel well", "I feel quickly", "I feel hardly", "I feel slowly"],
    "answer": "I feel well",
    "explanation": "While 'well' is usually an adverb, it functions as a valid predicate adjective when it refers specifically to a person's physical health or lack of illness after linking verbs like 'feel' or 'am'."
  },
  {
    "question": "Which is an adjective?",
    "options": ["quick", "quickly", "quickness", "quickerly"],
    "answer": "quick",
    "explanation": "The word 'quick' is the base, simple form of the adjective. 'Quickly' is an adverb ending in '-ly', 'quickness' is an abstract noun ending in the suffix '-ness', and 'quickerly' is an ungrammatical invented word."
  },
  {
    "question": "Comparative of 'tall':",
    "options": ["taller", "more tall", "tallest", "most tall"],
    "answer": "taller",
    "explanation": "For short, one-syllable adjectives like 'tall', the standard rule to form the comparative degree (comparing two things) is to append the suffix '-er' to the end of the base word, resulting in 'taller'."
  },
  {
    "question": "Superlative of 'small':",
    "options": ["more small", "smallest", "most small", "smaller"],
    "answer": "smallest",
    "explanation": "For short, single-syllable adjectives like 'small', the superlative degree (comparing three or more things) is achieved by attaching the suffix '-est' to the end of the base form, giving us 'smallest'."
  },
  {
    "question": "Comparative of 'beautiful':",
    "options": ["beautifuller", "more beautiful", "most beautiful", "beautifullest"],
    "answer": "more beautiful",
    "explanation": "Adjectives with three or more syllables, such as 'beau-ti-ful', cannot accept the comparative suffix '-er'. Instead, they form the comparative degree by placing the independent modifier word 'more' in front of them."
  },
  {
    "question": "Superlative of 'interesting':",
    "options": ["more interesting", "most interesting", "interestinger", "interestingest"],
    "answer": "most interesting",
    "explanation": "Because 'in-ter-est-ing' is a multi-syllable adjective, it requires the periphrastic word 'most' placed before its base form to establish the superlative degree. Suffixes like '-est' are not used for long adjectives."
  },
  {
    "question": "Ana is ___ than Bea.",
    "options": ["smart", "smarter", "smartest", "more smart"],
    "answer": "smarter",
    "explanation": "The sentence introduces a direct comparison between exactly two individuals ('Ana' and 'Bea') and features the keyword 'than'. This context mandates the comparative degree form 'smarter'."
  },
  {
    "question": "Comparing 3+ players:",
    "options": ["he is the taller", "he is taller", "he is the tallest", "he is more tall"],
    "answer": "he is the tallest",
    "explanation": "When evaluating or comparing a group consisting of three or more entities, you must apply the superlative degree accompanied by the definite article, which makes 'the tallest' the correct choice."
  },
  {
    "question": "Comparative of 'narrow':",
    "options": ["narrow", "narrower", "narrowest", "more narrowest"],
    "answer": "narrower",
    "explanation": "Many two-syllable adjectives ending in unstressed sounds or '-ow' follow the rules of single-syllable adjectives. Therefore, 'narrow' takes the comparative suffix '-er' to become 'narrower'."
  },
  {
    "question": "Superlative of 'happy':",
    "options": ["happier", "more happy", "happiest", "most happiest"],
    "answer": "happiest",
    "explanation": "For two-syllable adjectives that terminate with a consonant followed by the letter '-y', the spelling rule requires you to change the '-y' to an '-i' before adding the superlative suffix '-est', creating 'happiest'."
  },
  {
    "question": "Comparative of 'hot':",
    "options": ["hot", "more hot", "hotter", "hottest"],
    "answer": "hotter",
    "explanation": "The word 'hot' is a short adjective ending in a single vowel followed by a single consonant (CVC pattern). The spelling rule states you must double the final consonant ('t') before adding the comparative suffix '-er'."
  },
  {
    "question": "Positive degree:",
    "options": ["better", "best", "good", "more good"],
    "answer": "good",
    "explanation": "The positive degree refers to the basic, un-inflected form of an adjective without any comparison taking place. 'Good' is the positive base form, 'better' is the comparative, and 'best' is the superlative."
  },
  {
    "question": "Natural order:",
    "options": ["red small car", "small red car", "car small red", "red car small"],
    "answer": "small red car",
    "explanation": "According to the conventional order of cumulative adjectives in English, modifiers indicating physical Size ('small') must always precede modifiers indicating Color ('red') before reaching the head noun."
  },
  {
    "question": "Natural order:",
    "options": ["brown big bag", "big brown bag", "bag brown big", "brown bag big"],
    "answer": "big brown bag",
    "explanation": "Following the royal order of adjectives, an adjective describing physical Size ('big') must be placed ahead of an adjective specifying Color ('brown') to create a natural-sounding English phrase."
  },
  {
    "question": "Correct order:",
    "options": ["wooden old chair", "old wooden chair", "chair old wooden", "wooden chair old"],
    "answer": "old wooden chair",
    "explanation": "Standard English grammar dictates that adjectives concerning Age ('old') must appear before adjectives concerning the Material or composition ('wooden') from which the object is manufactured."
  },
  {
    "question": "Correct phrase:",
    "options": ["Chinese interesting story", "interesting Chinese story", "story Chinese interesting", "story interesting Chinese"],
    "answer": "interesting Chinese story",
    "explanation": "A subjective Opinion adjective ('interesting') represents how someone perceives something and must always precede objective classification adjectives such as Origin or nationality ('Chinese')."
  },
  {
    "question": "Natural order:",
    "options": ["plastic small bottle", "small plastic bottle", "bottle small plastic", "plastic bottle small"],
    "answer": "small plastic bottle",
    "explanation": "In the standard adjective sequence hierarchy, physical dimensions or Size ('small') take priority in placement over the specific substance or Material ('plastic') making up the object."
  },
  {
    "question": "Correct phrase:",
    "options": ["expensive new phone", "new expensive phone", "phone expensive new", "expensive phone new"],
    "answer": "expensive new phone",
    "explanation": "An adjective detailing personal value or Opinion ('expensive') is highly subjective and must be positioned prior to an objective descriptor tracking Age ('new') in a descriptive sequence."
  },
  {
    "question": "Usage of 'enough':",
    "options": ["enough tall", "tall enough", "enough is tall", "tall is enough"],
    "answer": "tall enough",
    "explanation": "When the modifier 'enough' is used to specify sufficiency in relation to an adjective, the strict word order rule requires 'enough' to follow immediately *after* the adjective (Adjective + Enough)."
  },
  {
    "question": "Usage of 'too':",
    "options": ["too hot", "hot too", "too is hot", "hot too much"],
    "answer": "too hot",
    "explanation": "The intensifying adverb 'too', which signals an excessive degree, operates under the opposite rule of 'enough' and must be positioned directly *before* the adjective it modifies (Too + Adjective)."
  },
  {
    "question": "Adjectives in 'The sky is blue and clear':",
    "options": ["None", "One", "Two", "Three"],
    "answer": "Two",
    "explanation": "There are exactly two predicate adjectives in this sentence connected by the conjunction 'and'. Both 'blue' (color) and 'clear' (condition) work together to describe the state of the subject noun 'sky'."
  },
  {
    "question": "Adjectives in 'small quiet town':",
    "options": ["visited, town", "small, quiet", "we, town"],
    "answer": "small, quiet",
    "explanation": "The words 'small' (size) and 'quiet' (atmosphere) are both functioning as descriptive adjectives that modify and provide details about the central noun 'town'."
  }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Comparisons & Order
  // ============================================================
  intermediate: [
    { question: "Correct after linking verb 'smells':", options: ["smells nicely", "smells nice", "is smelling nicely", "smells quick"], answer: "smells nice", explanation: "Adj describes subject." },
    { question: "Correct adverb usage:", options: ["spoke clear", "spoke clearly", "clear spoke", "spoke more clear"], answer: "spoke clearly", explanation: "Modifies verb." },
    { question: "Formal English:", options: ["feel badly", "feel bad", "feel badlier", "feel more bad"], answer: "feel bad", explanation: "Linking verb 'feel'." },
    { question: "Usage of 'well' as adjective:", options: ["plays well", "is well (healthy)", "finished well", "writes well"], answer: "is well (healthy)", explanation: "Well = healthy (Adj)." },
    { question: "Error ID: 'The food tastes wonderfully.'", options: ["The", "food", "tastes", "wonderfully"], answer: "wonderfully", explanation: "Should be 'wonderful'." },
    { question: "Correct sentence:", options: ["sounded loudly", "sounded loud", "loud sounded", "is loudily"], answer: "sounded loud", explanation: "Linking verb." },
    { question: "Hard as adverb:", options: ["works hard", "works hardly", "is a hardly worker", "is hardly worker"], answer: "works hard", explanation: "Hard = with effort." },
    { question: "After 'seem':", options: ["seem clearly", "seem clear", "seem clearerly", "seem more clearly"], answer: "seem clear", explanation: "Linking verb." },
    { question: "Adjectives in 'cold and empty room':", options: ["room", "felt", "cold", "cold and empty"], answer: "cold and empty", explanation: "Compound adjective." },
    { question: "Correct use of 'fast':", options: ["fastly runner", "runs fast", "runs fastly", "runs more fastly"], answer: "runs fast", explanation: "Fast is both adj and adv." },
    { question: "Natural order:", options: ["leather small black bag", "small black leather bag", "black small leather bag", "leather black small bag"], answer: "small black leather bag", explanation: "Size-Color-Material." },
    { question: "Correct order:", options: ["metal old box", "old metal box", "box old metal", "metal box old"], answer: "old metal box", explanation: "Age-Material." },
    { question: "Natural phrase:", options: ["blue beautiful long dress", "long blue beautiful dress", "beautiful long blue dress", "beautiful blue long dress"], answer: "beautiful long blue dress", explanation: "Opinion-Size-Color." },
    { question: "Best order:", options: ["round small wooden table", "small wooden round table", "small round wooden table", "wooden small round table"], answer: "small round wooden table", explanation: "Size-Shape-Material." },
    { question: "Proper adjective usage:", options: ["spicy food", "Japanese food", "delicious food", "cheap food"], answer: "Japanese food", explanation: "Capitalized origin." },
    { question: "Quantitative adjective:", options: ["few", "quick", "blue", "silent"], answer: "few", explanation: "Describes amount." },
    { question: "Demonstrative adjective:", options: ["This is yours", "These books", "There is mine", "Here is hers"], answer: "These books", explanation: "Modifies 'books'." },
    { question: "Possessive adjective:", options: ["hers notebook", "her notebook", "she notebook", "she's notebook"], answer: "her notebook", explanation: "Her + Noun." },
    { question: "Interrogative adjective:", options: ["What did you say?", "Which color?", "Who called?", "When arrived?"], answer: "Which color?", explanation: "Modifies noun." },
    { question: "Proper adjective phrase:", options: ["spanish restaurant", "Spanish restaurant", "restaurant spanish", "restaurant Spain"], answer: "Spanish restaurant", explanation: "Capitalized." },
    { question: "Comparative of 'busy':", options: ["more busy", "busiest", "busier", "most busy"], answer: "busier", explanation: "y -> ier." },
    { question: "Superlative of 'busy':", options: ["busier", "busiest", "most busy", "more busy"], answer: "busiest", explanation: "y -> iest." },
    { question: "Comparative of 'good':", options: ["gooder", "more good", "better", "best"], answer: "better", explanation: "Irregular." },
    { question: "Superlative of 'bad':", options: ["badder", "worse", "worst", "most bad"], answer: "worst", explanation: "Irregular." },
    { question: "Correct comparative:", options: ["more easier", "easier than", "easiest than", "more easy than"], answer: "easier than", explanation: "No 'more'." },
    { question: "Correct superlative:", options: ["most tallest", "tallest", "taller", "more tallest"], answer: "tallest", explanation: "No 'most'." },
    { question: "With 'ever seen':", options: ["more exciting", "most exciting", "excitingest", "more excited"], answer: "most exciting", explanation: "Superlative." },
    { question: "Comparing two:", options: ["the shortest", "the shorter", "short", "most short"], answer: "the shorter", explanation: "Two items = Comparative." },
    { question: "Correct sentence:", options: ["more difficult of the two", "most difficult of the two", "more difficult test of the two", "difficultest"], answer: "more difficult test of the two", explanation: "Comparative for two." },
    { question: "Degrees of 'little':", options: ["little, littler, littlest", "little, less, least", "little, lesser, lessest", "little, more little, most little"], answer: "little, less, least", explanation: "Irregular." },
    { question: "Usage of 'enough':", options: ["enough big", "big enough", "enough is big", "big enough is"], answer: "big enough", explanation: "Adj + enough." },
    { question: "Usage of 'too':", options: ["too difficult", "difficult too", "too is difficult", "difficult too much"], answer: "too difficult", explanation: "Too + Adj." },
    { question: "Usage of 'quite':", options: ["quite boring", "boring quite", "quite lecture", "boringly quite"], answer: "quite boring", explanation: "Quite + Adj." },
    { question: "Usage of 'rather':", options: ["rather interesting", "interesting rather", "rather movie", "interestingly rather"], answer: "rather interesting", explanation: "Rather + Adj." },
    { question: "Usage of 'fairly':", options: ["fairly easy", "easy fairly", "fairly task", "easyfairly"], answer: "fairly easy", explanation: "Fairly + Adj." },
    { question: "Best sentence:", options: ["enough strong", "strong enough", "enough is strong", "strong enough is"], answer: "strong enough", explanation: "Adj + enough." },
    { question: "Expressing excess:", options: ["very hot", "too hot", "hot enough", "enough hot"], answer: "too hot", explanation: "Excessive." },
    { question: "Natural 'quite':", options: ["quite surprising", "surprising quite", "quite result", "surprising quitely"], answer: "quite surprising", explanation: "Quite + Adj." },
    { question: "Informal 'pretty':", options: ["pretty difficult", "difficult pretty", "pretty exam", "difficult prettily"], answer: "pretty difficult", explanation: "Means 'fairly'." },
    { question: "Incorrect 'enough':", options: ["old enough", "light enough", "easy enough", "enough patient"], answer: "enough patient", explanation: "Should be 'patient enough'." },
    { question: "Correct comparison:", options: ["elder of the three", "eldest of the three", "elder of three", "more elder"], answer: "eldest of the three", explanation: "Superlative for 3+." },
    { question: "Correct usage:", options: ["older than me", "older of the class", "oldest than me", "more older"], answer: "older than me", explanation: "Comparative." },
    { question: "Find error: 'most cheapest'", options: ["This is", "the most", "cheapest", "in store"], answer: "cheapest", explanation: "Double superlative." },
    { question: "Correct usage:", options: ["more qualified", "most qualified", "more qualifieder", "qualifiedest"], answer: "most qualified", explanation: "Superlative." },
    { question: "Standard English:", options: ["lesser of two", "least of two", "less of two", "most less"], answer: "lesser of two", explanation: "Adjective form." },
    { question: "Correct usage:", options: ["advice useful", "useful advice", "an useful advice", "advices useful"], answer: "useful advice", explanation: "Adj + Uncountable Noun." },
    { question: "Correct article:", options: ["an unique", "a unique", "very unique", "most unique"], answer: "a unique", explanation: "Consonant sound /y/." },
    { question: "Avoid double comparison:", options: ["more narrower", "narrower", "most narrowest", "most narrower"], answer: "narrower", explanation: "Single comparative." },
    { question: "Placement of 'almost':", options: ["almost late", "late almost", "almost was", "late for"], answer: "almost late", explanation: "Before adjective." },
    { question: "Multiple adjectives:", options: ["rainy cold night", "cold rainy night", "night cold rainy", "cold night rainy"], answer: "cold rainy night", explanation: "Temp before Weather." }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Nuances & Context
  // ============================================================
  advanced: [
    {
      question: "Find the error: 'The flowers (A) / smelled (B) / sweetly (C) / in the garden (D).'",
      options: ["The flowers", "smelled", "sweetly", "in the garden"],
      answer: "sweetly",
      explanation: "With sense verbs like 'smelled' as linking verbs, use an adjective: 'smelled sweet'."
    },
    { question: "Linking verb 'look':", options: ["looked carefully", "looked tired", "looked around", "looked through"], answer: "looked tired", explanation: "Links to adjective." },
    { question: "After 'remain':", options: ["remained quietly", "remained quiet", "remained quietlier", "remained quietful"], answer: "remained quiet", explanation: "Linking verb." },
    { question: "After 'appear':", options: ["appeared suddenly", "appeared nervous", "appeared quickly", "appeared quietly"], answer: "appeared nervous", explanation: "Links to adjective." },
    { question: "After 'feel':", options: ["feel strongly", "feel strong", "feel stronglyly", "feel more strongly"], answer: "feel strong", explanation: "Physical state." },
    { question: "Formal English:", options: ["writes neat", "writes neatly", "writes more neat", "writes neatlier"], answer: "writes neatly", explanation: "Adverb modifying verb." },
    { question: "Linking verb 'sound':", options: ["soundly passed", "sounds reasonable", "sounds clearly", "sounds beautifully"], answer: "sounds reasonable", explanation: "Adj after sound." },
    { question: "After 'grow':", options: ["grew angrily", "grew angry", "grew angryly", "grew more angrily"], answer: "grew angry", explanation: "Became angry." },
    { question: "After 'turn':", options: ["turned red", "turned quickly", "turned redly", "turned more quickly"], answer: "turned red", explanation: "Became red." },
    { question: "Correct sentence:", options: ["gone sour", "gone sourly", "gone sourer", "gone most sour"], answer: "gone sour", explanation: "Linking verb." },
    {
      question: "Best order:",
      options: ["long old narrow road", "old long narrow road", "narrow old long road", "long narrow old road"],
      answer: "long narrow old road",
      explanation: "Dimension (long, narrow) usually comes before age (old)."
    },
    { question: "Standard order:", options: ["German small red car", "small red German car", "red German small car", "German red small car"], answer: "small red German car", explanation: "Size-Color-Origin." },
    { question: "Natural phrase:", options: ["interesting new Filipino movie", "new interesting Filipino movie", "Filipino new interesting movie", "interesting Filipino new movie"], answer: "interesting new Filipino movie", explanation: "Opinion-Age-Origin." },
    { question: "Correct order:", options: ["beautiful big old stone church", "big old beautiful stone church", "old beautiful big stone church", "beautiful stone big old church"], answer: "beautiful big old stone church", explanation: "Opinion-Size-Age-Material." },
    {
      question: "Multiple adjectives:",
      options: ["small black stray dog", "stray black small dog", "black small stray dog", "stray small black dog"],
      answer: "small black stray dog",
      explanation: "Size (small) + Color (black) + Type (stray)."
    },
    { question: "Best order:", options: ["wooden lovely round table", "lovely round wooden table", "round wooden lovely table", "wooden round lovely table"], answer: "lovely round wooden table", explanation: "Opinion-Shape-Material." },
    { question: "Natural phrase:", options: ["cotton white comfortable shirt", "comfortable white cotton shirt", "white comfortable cotton shirt", "cotton comfortable white shirt"], answer: "comfortable white cotton shirt", explanation: "Opinion-Color-Material." },
    { question: "Correct phrase:", options: ["old French famous song", "famous old French song", "French famous old song", "famous French old song"], answer: "famous old French song", explanation: "Opinion-Age-Origin." },
    { question: "Usual order:", options: ["delicious small round cake", "small delicious round cake", "delicious round small cake", "round small delicious cake"], answer: "delicious small round cake", explanation: "Opinion-Size-Shape." },
    { question: "Best phrase:", options: ["heavy big old metal box", "big heavy old metal box", "old big heavy metal box", "metal heavy old big box"], answer: "big heavy old metal box", explanation: "Size-Weight-Age-Material." },
    { question: "Logically correct:", options: ["Between Maria, Ana, Liza, Maria is taller", "Between Maria, Ana, Liza, Maria is taller", "Among Maria, Ana, Liza, Maria is the tallest", "Among Maria, Ana, Liza, Maria is taller"], answer: "Among Maria, Ana, Liza, Maria is the tallest", explanation: "3+ items." },
    {
      question: "Illogical comparison:",
      options: ["better than previous", "better than previous one", "better than previous policy", "Both B and C"],
      answer: "better than previous",
      explanation: "Option A is incomplete. We must compare noun to noun (e.g., 'better than the previous one' or 'better than the previous policy')."
    },
    { question: "Correct sentence:", options: ["more better", "much better", "very more better", "betterest"], answer: "much better", explanation: "Intensifier." },
    { question: "Formal English:", options: ["most safe", "safer", "more safe", "safe"], answer: "safer", explanation: "Standard comparative." },
    { question: "Less vs Fewer:", options: ["less people", "fewer traffic", "fewer tasks", "less tasks"], answer: "fewer tasks", explanation: "Countable." },
    { question: "Correct sentence:", options: ["most eldest", "eldest", "elder than all", "more eldest"], answer: "eldest", explanation: "Superlative." },
    { question: "Correct sentence:", options: ["more preferable", "preferable", "more preferable", "most preferable"], answer: "preferable", explanation: "Absolute." },
    { question: "Grammatically acceptable:", options: ["more kinder", "kinder", "most kindest", "kindest than"], answer: "kinder", explanation: "Standard." },
    { question: "Correct forms:", options: ["far, farther, farthest", "far, more far, most far", "far, furtherer, furtherest", "far, farest, farestest"], answer: "far, farther, farthest", explanation: "Standard." },
    { question: "Best sentence:", options: ["better of three", "the better of three", "the best of three", "bestest"], answer: "the best of three", explanation: "Superlative." },
    { question: "Correct sentence:", options: ["most unique", "a unique", "very unique", "uniqueest"], answer: "a unique", explanation: "Absolute." },
    { question: "Redundancy check:", options: ["final conclusion", "conclusion", "end result", "past history"], answer: "conclusion", explanation: "Others are redundant." },
    { question: "Placement of 'only':", options: ["only one suitable", "only suitable candidate", "suitable only", "only suitable the"], answer: "only suitable candidate", explanation: "Modifier placement." },
    { question: "Correct sentence:", options: ["almost nearly missed", "nearly almost missed", "almost missed", "nearly almost last"], answer: "almost missed", explanation: "Redundant." },
    { question: "Usage of 'even':", options: ["even more difficult", "more even difficult", "difficult even more", "even was more"], answer: "even more difficult", explanation: "Intensifier." },
    { question: "Usage of 'such':", options: ["such difficult", "such a difficult", "a such difficult", "difficult such"], answer: "such a difficult", explanation: "Pattern." },
    { question: "Correct sentence:", options: ["too much tired", "too tired", "very too tired", "tired too much"], answer: "too tired", explanation: "Standard." },
    { question: "Formal 'quite':", options: ["quite good", "good quite", "quite report", "good quitely"], answer: "quite good", explanation: "Degree." },
    { question: "Punctuation:", options: ["Tired and hungry, the", "Tired and hungry the", "Tired, and hungry, the", "Tired and hungry the,"], answer: "Tired and hungry, the", explanation: "Intro phrase." },
    { question: "Adjective clause:", options: ["book that I bought", "book I bought interesting", "book which bought", "book bought I"], answer: "book that I bought", explanation: "Clause." },
    { question: "Correct sentence:", options: ["few good advices", "few good pieces of advice", "few good advice", "some advices"], answer: "few good pieces of advice", explanation: "Countable phrase." },
    { question: "Little vs Few:", options: ["little chairs", "few chairs", "few time", "little chairs time"], answer: "few chairs", explanation: "Countable." },
    { question: "Another:", options: ["another informations", "another piece of information", "other another", "anothers"], answer: "another piece of information", explanation: "Singular." },
    { question: "Each:", options: ["Each students", "Each student", "Each of student", "Each student received"], answer: "Each student", explanation: "Singular." },
    { question: "Every:", options: ["Every students", "Every of students", "Every student", "Every student passed"], answer: "Every student", explanation: "Singular." },
    { question: "No as adjective:", options: ["No people was", "No one people", "No student was", "No the student"], answer: "No student was", explanation: "Singular." },
    { question: "Same:", options: ["same exactly", "exactly same", "exact same", "same exact"], answer: "exact same", explanation: "Idiomatic." },
    { question: "Such:", options: ["such unforgettable", "such an unforgettable", "an such", "unforgettable such"], answer: "such an unforgettable", explanation: "Pattern." },
    { question: "Correct sentence:", options: ["responsible enough", "enough responsible", "enough is responsible", "responsible for enough"], answer: "responsible enough", explanation: "Post-position." },
    { question: "Reduced clause:", options: ["man standing", "man who standing", "man near standing", "man stood"], answer: "man standing", explanation: "Participle." }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (55 Items) - Error ID & Improvement
  // ============================================================
  expert: [
    // 1-15: Error Identification (Segmented)
    { 
      question: "Find the error: 'The CEO is (A) / the most smartest (B) / leader in (C) / the industry (D).'", 
      options: ["The CEO is", "the most smartest", "leader in", "the industry"], 
      answer: "the most smartest", 
      explanation: "Double superlative. Use 'the smartest' or 'the most smart'." 
    },
    { 
      question: "Find the error: 'The teacher (A) / gave him (B) / a few good (C) / advices (D).'", 
      options: ["The teacher", "gave him", "a few good", "advices"], 
      answer: "advices", 
      explanation: "'Advice' is uncountable. Use 'pieces of advice'." 
    },
    { 
      question: "Find the error: 'There is (A) / only few (B) / time left (C) / before the deadline (D).'", 
      options: ["There is", "only few", "time left", "before the deadline"], 
      answer: "only few", 
      explanation: "'Time' is uncountable. Use 'little', not 'few'." 
    },
    { 
      question: "Find the error: 'This is (A) / the more (B) / importantest point (C) / in the report (D).'", 
      options: ["This is", "the more", "importantest point", "in the report"], 
      answer: "importantest point", 
      explanation: "Use 'most important'. 'Importantest' is incorrect." 
    },
    { 
      question: "Find the error: 'She is (A) / more friendlier (B) / than (C) / her sister (D).'", 
      options: ["She is", "more friendlier", "than", "her sister"], 
      answer: "more friendlier", 
      explanation: "Redundancy. 'Friendlier' is already comparative. Remove 'more'." 
    },
    { 
      question: "Find the error: 'This is (A) / the less (B) / useful of (C) / the three tools (D).'", 
      options: ["This is", "the less", "useful of", "the three tools"], 
      answer: "the less", 
      explanation: "Comparing three or more requires the superlative 'least'." 
    },
    { 
      question: "Find the error: 'His score (A) / was (B) / more superior than (C) / the others (D).'", 
      options: ["His score", "was", "more superior than", "the others"], 
      answer: "more superior than", 
      explanation: "'Superior' is already comparative and takes 'to', not 'than'." 
    },
    { 
      question: "Find the error: 'She is (A) / the more (B) / elder of (C) / the three sisters (D).'", 
      options: ["She is", "the more", "elder of", "the three sisters"], 
      answer: "the more", 
      explanation: "Remove 'more'. Also, 'eldest' is preferred for three." 
    },
    { 
      question: "Find the error: 'That design (A) / is (B) / more unique (C) / than this one (D).'", 
      options: ["That design", "is", "more unique", "than this one"], 
      answer: "more unique", 
      explanation: "'Unique' is absolute. Something cannot be 'more' unique." 
    },
    { 
      question: "Find the error: 'She (A) / almost nearly (B) / missed (C) / the flight (D).'", 
      options: ["She", "almost nearly", "missed", "the flight"], 
      answer: "almost nearly", 
      explanation: "Redundancy. 'Almost' and 'nearly' mean the same thing." 
    },
    { 
      question: "Find the error: 'He (A) / is (B) / enough old (C) / to drive (D).'", 
      options: ["He", "is", "enough old", "to drive"], 
      answer: "enough old", 
      explanation: "Adjectives come before enough: 'old enough'." 
    },
    { 
      question: "Find the error: 'It (A) / was (B) / a so (C) / long day (D).'", 
      options: ["It", "was", "a so", "long day"], 
      answer: "a so", 
      explanation: "With a noun phrase, use 'such a': 'such a long day'." 
    },
    { 
      question: "Find the error: 'Please (A) / drive (B) / more slower (C) / here (D).'", 
      options: ["Please", "drive", "more slower", "here"], 
      answer: "more slower", 
      explanation: "Double comparative. Use 'slower' or 'more slowly'." 
    },
    { 
      question: "Find the error: 'She (A) / sings (B) / real (C) / good (D).'", 
      options: ["She", "sings", "real", "good"], 
      answer: "good", 
      explanation: "Use the adverb 'well' to modify 'sings'." 
    },
    { 
      question: "Find the error: 'The (A) / soup (B) / tastes (C) / badly (D).'", 
      options: ["The", "soup", "tastes", "badly"], 
      answer: "badly", 
      explanation: "Linking verb 'tastes' requires adjective 'bad'." 
    },

    // Sentence Improvement
    { question: "Improve: 'She is more kinder than her sister.'", options: ["kinder", "more kind", "most kinder", "kindest"], answer: "kinder", explanation: "Standard comparative." },
    { question: "Improve: 'This is the most happiest day.'", options: ["happiest", "most happy", "happier", "more happiest"], answer: "happiest", explanation: "Standard superlative." },
    { question: "Improve: 'He is elder than me.'", options: ["older than me", "elder than", "more elder", "eldest"], answer: "older than me", explanation: "General age comparison uses 'older'." },
    { question: "Improve: 'This is the less expensive of the three.'", options: ["least expensive", "lesser expensive", "less expensive", "less most"], answer: "least expensive", explanation: "Superlative for 3+." },
    { question: "Improve: 'She is the most talentedest.'", options: ["most talented", "talentedest", "most talented singer", "talentedest singer"], answer: "most talented", explanation: "Standard." },
    { question: "Improve: 'He is more superior than others.'", options: ["superior to", "more superior to", "superior than", "most superior"], answer: "superior to", explanation: "Standard form." },
    { question: "Improve: 'This is the very best solution.'", options: ["the best", "very best", "most best", "best"], answer: "the best", explanation: "Formal standard." },
    { question: "Improve: 'She is more prettier.'", options: ["prettier", "more pretty", "most prettier", "prettiest"], answer: "prettier", explanation: "Standard comparative." },
    { question: "Improve: 'This is the most ideal choice.'", options: ["ideal", "more ideal", "idealest", "most ideally"], answer: "ideal", explanation: "Absolute adjective." },
    { question: "Improve: 'The report is more complete now.'", options: ["complete", "most complete", "completer", "completely"], answer: "complete", explanation: "Absolute adjective." },

    // Reading Context
    { question: "Modify 'explanation': 'brief but clear'", options: ["He", "gave", "explanation", "brief but clear"], answer: "brief but clear", explanation: "Adjectives modifying explanation." },
    { question: "Main adjective: 'newly appointed regional director'", options: ["newly", "appointed", "regional", "director"], answer: "appointed", explanation: "Participle adj." },
    { question: "Count adjectives: 'simple, elegant black dress'", options: ["One", "Two", "Three", "Four"], answer: "Three", explanation: "Simple, elegant, black." },
    { question: "Adjective phrase: 'man with red hat'", options: ["with red hat", "man", "waved", "yesterday"], answer: "with red hat", explanation: "Describes the man." },
    { question: "Adjectives: 'tired but satisfied'", options: ["arrived", "tired", "satisfied", "tired but satisfied"], answer: "tired but satisfied", explanation: "Subject complement." },
    { question: "Modify 'proposal': 'risky'", options: ["proposal", "approved", "was", "though"], answer: "proposal", explanation: "Adjective." },
    { question: "Phrase type: 'smart enough'", options: ["Noun", "Adjective", "Adverb", "Verb"], answer: "Adjective", explanation: "Describes subject." },
    { question: "Main adjective: 'remained calm'", options: ["Facing", "difficult", "calm", "remained"], answer: "calm", explanation: "Predicate adjective." },
    { question: "Adverb modifying adj: 'extremely boring'", options: ["long", "boring", "extremely", "lecture"], answer: "extremely", explanation: "Degree." },
    { question: "Quantitative adj: 'few loyal'", options: ["Only", "few", "loyal", "end"], answer: "few", explanation: "Amount." },

    // Logic & Nuance
    { question: "Place description: 'crowded and noisy'", options: ["crowded and noisy", "crowded and noisily", "crowdedly and noisy", "crowded noisily"], answer: "crowded and noisy", explanation: "Adjectives describing a place." },
    { question: "Placement: 'almost late'", options: ["almost late", "late almost", "almost was", "late for"], answer: "almost late", explanation: "Before the adjective." },
    { question: "Reduced clause: 'interested in'", options: ["Students interested", "Students who interested", "Students interest", "Students which"], answer: "Students interested", explanation: "Passive participle." },
    { question: "Usage: 'enough information'", options: ["enough information", "information enough", "enough have", "enough informations"], answer: "enough information", explanation: "Before the noun." },
    { question: "Usage: 'too heavy'", options: ["too heavy", "heavy too", "heavy for too", "heavy too much"], answer: "too heavy", explanation: "Excessive." },
    { question: "Usage: 'clear enough'", options: ["clear enough", "enough clear", "enough are", "clear for"], answer: "clear enough", explanation: "After the adjective." },
    { question: "Comparative: 'fairer'", options: ["more fairer", "fairer", "most fairer", "the fairer"], answer: "fairer", explanation: "Standard." },
    { question: "Usage: 'too young'", options: ["too much young", "too young", "young too much", "much too young not"], answer: "too young", explanation: "Standard pattern." },
    { question: "Usage: 'such a'", options: ["such long", "such a long", "long such", "a such"], answer: "such a long", explanation: "Pattern: such a + adj + noun." },
    { question: "Complement: 'satisfactory'", options: ["satisfactory", "satisfactorily", "satisfaction", "satisfyingness"], answer: "satisfactory", explanation: "Adjective." },

    // Mixed Final
    { question: "Correct sentence: 'more friendlier'", options: ["more friendlier", "friendlier", "most friendlier", "friendliest"], answer: "friendlier", explanation: "Standard comparative." },
    { question: "Linking verb: 'tastes salty'", options: ["salty", "saltly", "salt", "saltyly"], answer: "salty", explanation: "Adjective." },
    { question: "Avoid double: 'finest'", options: ["most finest", "finest", "more finest", "finestest"], answer: "finest", explanation: "Superlative." },
    { question: "Use 'fewer':", options: ["less problems", "fewer problems", "less problem", "many less"], answer: "fewer problems", explanation: "Countable noun." },
    { question: "Correct: 'highest'", options: ["most highest", "highest", "higher", "more higher"], answer: "highest", explanation: "Superlative." },
    { question: "Correct: 'a few'", options: ["few passed", "a few passed", "every passed", "many passed"], answer: "a few passed", explanation: "Positive quantity." },
    { question: "Collocation: 'quite boring'", options: ["quite boring", "quite long", "quite and rather", "boring quite"], answer: "quite boring", explanation: "Standard." },
    {
      question: "Adjective phrase: 'in a blue shirt'",
      options: ["in a blue shirt", "in blue", "blue shirt", "with blue"],
      answer: "in a blue shirt",
      explanation: "Prepositional phrase functioning as an adjective."
    },
    { question: "Correct: 'such a nice'", options: ["so a nice", "such a nice", "such nice", "so nice"], answer: "such a nice", explanation: "Pattern: such a + adj." },
    { question: "Correct: 'many people'", options: ["much people", "many water", "many people", "much people"], answer: "many people", explanation: "Countable." }
  ]
};

