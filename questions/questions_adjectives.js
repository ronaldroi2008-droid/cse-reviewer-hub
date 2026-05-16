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
    {
    "question": "Which of the following correctly uses a modifier after the linking verb 'smells'?",
    "options": ["The flower smells nicely.", "The flower smells nice.", "The flower is smelling nicely.", "The flower smells quick."],
    "answer": "The flower smells nice.",
    "explanation": "In this context, 'smells' functions as a sensory linking verb rather than an action verb. Linking verbs connect the subject to a state of being or description, which requires a predicate adjective ('nice') to modify the subject noun, not an adverb ('nicely')."
  },
  {
    "question": "Identify the sentence that shows correct adverbial modifier usage:",
    "options": ["He spoke clear during the meeting.", "He spoke clearly during the meeting.", "He clear spoke during the meeting.", "He spoke more clear during the meeting."],
    "answer": "He spoke clearly during the meeting.",
    "explanation": "The word 'spoke' is an action verb. Action verbs describe what the subject is doing and must be modified by an adverb ('clearly') to show the manner of the action, instead of a plain adjective ('clear')."
  },
  {
    "question": "Which sentence follows formal English standards when using a linking verb to express an emotional or physical state?",
    "options": ["I feel badly about the mistake.", "I feel bad about the mistake.", "I feel badlier about the mistake.", "I feel more bad about the mistake."],
    "answer": "I feel bad about the mistake.",
    "explanation": "'Feel' operates as a linking verb when describing a person's internal state or emotions. Grammatically, linking verbs must be followed by an adjective ('bad'). Using the adverb 'badly' after 'feel' is a common error; 'badly' would mean your physical sense of touch is impaired."
  },
  {
    "question": "In which sentence is the word 'well' functioning strictly as a predicate adjective?",
    "options": ["She plays the piano well.", "The patient is now well.", "He finished the project well.", "The author writes well."],
    "answer": "The patient is now well.",
    "explanation": "While 'well' is typically used as an adverb to modify action verbs (as seen in 'plays well' or 'writes well'), it functions as an adjective only when it refers specifically to someone's health or wellness after a linking verb like 'is'."
  },
  {
    "question": "Identify the grammatical error in this sentence: 'The chef prepared a soup that tastes wonderfully.'",
    "options": ["prepared", "that", "tastes", "wonderfully"],
    "answer": "wonderfully",
    "explanation": "The verb 'tastes' is a sensory linking verb that connects the subject ('soup') to its quality. It must be followed by the predicate adjective 'wonderful' instead of the adverb 'wonderfully', because the soup itself is not actively performing the action of tasting."
  },
  {
    "question": "Which sentence correctly pairs the linking verb 'sounded' with its proper modifier?",
    "options": ["The alarm sounded loudly.", "The idea sounded loud.", "The proposal sounded loudily.", "The alarm was sound loudly."],
    "answer": "The idea sounded loud.",
    "explanation": "When 'sound' is used to express an impression or opinion (e.g., an idea), it functions as a linking verb and requires an adjective ('loud'). Note: If 'sounded' refers to the physical production of noise by an object, 'sounded loudly' can be used as an action-adverb pair, but as a strict linking structure, 'sounded loud' is the core adjective pattern."
  },
  {
    "question": "In which sentence is the word 'hard' functioning as an adverb modifying an action?",
    "options": ["She works hard to support her family.", "She hardly works during the weekend.", "She is a hardly worker in the office.", "She is a hard worker."],
    "answer": "She works hard to support her family.",
    "explanation": "The word 'hard' is flat modifier—it can be both an adjective and an adverb without changing its form. In 'works hard', it is an adverb modifying the action verb 'works'. The word 'hardly' is a completely different adverb that means 'scarcely' or 'almost not'."
  },
  {
    "question": "Choose the option that correctly completes the sentence following the linking verb 'seem': 'The instructions ________.'",
    "options": ["seem clearly", "seem clear", "seem clearerly", "seem more clearly"],
    "answer": "seem clear",
    "explanation": "The verb 'seem' is a pure linking verb that indicates an appearance or impression. It cannot take an adverbial modifier; instead, it must be paired with a predicate adjective ('clear') to describe the condition of the subject 'instructions'."
  },
  {
    "question": "In the sentence 'The cold and empty room felt intimidating,' what grammatical feature is represented by 'cold and empty'?",
    "options": ["A singular adverb phrase", "A compound predicate verb", "A compound adjective modifier", "A dangling participle clause"],
    "answer": "A compound adjective modifier",
    "explanation": "The words 'cold' and 'empty' are two distinct adjectives joined by the coordinating conjunction 'and'. Together, they form a compound adjective phrase that modifies the single noun 'room'."
  },
  {
    "question": "Which sentence demonstrates the correct adverbial form of the word 'fast'?",
    "options": ["He is a fastly runner.", "The athlete runs fast.", "The athlete runs fastly.", "He runs more fastly than others."],
    "answer": "The athlete runs fast.",
    "explanation": "The word 'fast' is an irregular modifier that shares the exact same form for both its adjective and adverb duties. The word 'fastly' does not exist in standard English. Therefore, when modifying the action verb 'runs', the correct form remains 'fast'."
  },
  {
    "question": "Which phrase demonstrates the correct standard order of cumulative adjectives?",
    "options": ["a leather small black bag", "a small black leather bag", "a black small leather bag", "a leather black small bag"],
    "answer": "a small black leather bag",
    "explanation": "The Royal Order of Adjectives in English dictates that cumulative modifiers must follow a specific sequence before the noun: Size ('small') comes first, followed by Color ('black'), and finally Material ('leather')."
  },
  {
    "question": "Arrange the modifiers in the correct sequence: 'They found an _______ in the attic.'",
    "options": ["metal old box", "old metal box", "box old metal", "metal box old"],
    "answer": "old metal box",
    "explanation": "When using multiple adjectives, an adjective describing Age ('old') must always precede an adjective that describes the composition or Material ('metal') of the object noun."
  },
  {
    "question": "Select the option that follows the natural order of adjectives: 'She wore a _______.'",
    "options": ["blue beautiful long dress", "long blue beautiful dress", "beautiful long blue dress", "beautiful blue long dress"],
    "answer": "beautiful long blue dress",
    "explanation": "The natural sequence of adjectives requires a subjective Opinion ('beautiful') to be placed before physical properties. For the physical properties, Size ('long') always comes before Color ('blue')."
  },
  {
    "question": "What is the most grammatically natural adjective order for describing a table?",
    "options": ["a round small wooden table", "a small wooden round table", "a small round wooden table", "a wooden small round table"],
    "answer": "a small round wooden table",
    "explanation": "Following the standard order of adjectives, physical measurements like Size ('small') must come before Shape ('round'), which in turn must be placed before the Material ('wooden')."
  },
  {
    "question": "Which of the following sentences contains a proper adjective that requires capitalization?",
    "options": ["We ordered some highly spicy food.", "We thoroughly enjoyed the Japanese food.", "They served us some delicious food.", "The restaurant offered cheap food."],
    "answer": "We thoroughly enjoyed the Japanese food.",
    "explanation": "A proper adjective is an adjective derived from a proper noun. The word 'Japanese' is derived from the proper noun 'Japan' (a specific country) and must always be capitalized when modifying a common noun like 'food'."
  },
  {
    "question": "Which word functions as an indefinite quantitative adjective in the sentence: 'We have few options left.'?",
    "options": ["few", "options", "left", "have"],
    "answer": "few",
    "explanation": "The word 'few' is an indefinite quantitative adjective because it tells us the general amount or quantity of the noun 'options' without giving an exact numerical value."
  },
  {
    "question": "Identify the sentence where the underlined word is functioning as a demonstrative adjective rather than a pronoun:",
    "options": ["This is yours.", "These books belong to me.", "There is mine over the counter.", "Here is hers."],
    "answer": "These books belong to me.",
    "explanation": "For a word to be a demonstrative adjective, it must directly precede and modify a noun (e.g., 'These books'). If it stands alone without a noun following it immediately (e.g., 'This is yours'), it functions as a demonstrative pronoun."
  },
  {
    "question": "Which phrase correctly uses a possessive adjective to show ownership of a notebook?",
    "options": ["hers notebook", "her notebook", "she notebook", "she's notebook"],
    "answer": "her notebook",
    "explanation": "The word 'her' is the correct singular possessive adjective used to modify a noun ('notebook'). 'Hers' is a possessive pronoun that stands alone, 'she' is a subject pronoun, and 'she's' is a contraction for 'she is'."
  },
  {
    "question": "Identify the sentence that utilizes an interrogative adjective:",
    "options": ["What did you say about the project?", "Which color do you prefer for the walls?", "Who called you so early this morning?", "When arrived the package at the station?"],
    "answer": "Which color do you prefer for the walls?",
    "explanation": "The word 'Which' acts as an interrogative adjective here because it is placed directly before the noun 'color' to modify it within a question. In 'What did you say?', 'What' stands alone as an interrogative pronoun."
  },
  {
    "question": "Which phrase demonstrates the correct capitalization and structure for a proper adjective phrase?",
    "options": ["We went to a spanish restaurant.", "We went to a Spanish restaurant.", "We went to a restaurant spanish.", "We went to a restaurant Spain."],
    "answer": "We went to a Spanish restaurant.",
    "explanation": "Proper adjectives derived from countries ('Spain') must maintain capitalization ('Spanish') and follow standard English syntax by being placed *before* the noun they modify ('restaurant')."
  },
  {
    "question": "What is the correct comparative degree form of the adjective 'busy' when comparing two entities?",
    "options": ["more busy", "busiest", "busier", "most busy"],
    "answer": "busier",
    "explanation": "For two-syllable adjectives that end in a consonant followed by the letter '-y', the grammatical rule for the comparative degree requires you to change the '-y' to an '-i' and add the suffix '-er' ('busier')."
  },
  {
    "question": "What is the correct superlative degree form of the adjective 'busy' when evaluating three or more entities?",
    "options": ["busier", "busiest", "most busy", "more busy"],
    "answer": "busiest",
    "explanation": "To form the superlative degree of a two-syllable adjective ending in '-y', drop the '-y', replace it with an '-i', and add the suffix '-est'. This results in 'busiest'."
  },
  {
    "question": "Which word represents the irregular comparative form of the positive adjective 'good'?",
    "options": ["gooder", "more good", "better", "best"],
    "answer": "better",
    "explanation": "The adjective 'good' is completely irregular and does not follow the standard rules of adding suffixes like '-er' or modifiers like 'more'. Its comparative form shifts entirely to the word 'better'."
  },
  {
    "question": "Which word represents the irregular superlative form of the positive adjective 'bad'?",
    "options": ["badder", "worse", "worst", "most bad"],
    "answer": "worst",
    "explanation": "The adjective 'bad' undergoes an irregular base change across its degrees of comparison. Its positive form is 'bad', its comparative form is 'worse', and its superlative form is 'worst'."
  },
  {
    "question": "Identify the option that avoids redundancy in a comparative sentence structure:",
    "options": ["This task is more easier than the last one.", "This task is easier than the last one.", "This task is easiest than the last one.", "This task is more easy than the last one."],
    "answer": "This task is easier than the last one.",
    "explanation": "The word 'easier' is already a fully inflected comparative adjective. Adding the modifier 'more' in front of it creates a double comparative error, which is redundant and ungrammatical."
  },
  {
    "question": "Which option demonstrates a correct superlative phrase without structural redundancy?",
    "options": ["He is the most tallest player on the team.", "He is the tallest player on the team.", "He is the taller player on the team.", "He is the more tallest player on the team."],
    "answer": "He is the tallest player on the team.",
    "explanation": "The suffix '-est' already establishes the superlative degree for the short adjective 'tall'. Combining it with the word 'most' results in a double superlative error. 'Most' must be omitted."
  },
  {
    "question": "Choose the correct modifier to complete a superlative sentence tracking an lifetime event: 'That was the ________ movie I have ever seen.'",
    "options": ["more exciting", "most exciting", "excitingest", "more excited"],
    "answer": "most exciting",
    "explanation": "The phrase 'I have ever seen' implies a comparison across all movies ever viewed (three or more entities). Because 'exciting' is a multi-syllable adjective, it must use the periphrastic superlative modifier 'most'."
  },
  {
    "question": "When directly comparing exactly two items or people, which form is grammatically required?",
    "options": ["the shortest", "the shorter", "short", "most short"],
    "answer": "the shorter",
    "explanation": "A strict rule in formal English dictates that when comparing exactly two entities, the comparative degree ('-er' or 'more') must be used alongside a definite article. The superlative degree is reserved for three or more items."
  },
  {
    "question": "Select the sentence that correctly applies the rule of comparing exactly two tests:",
    "options": ["This exam was the more difficult of the two.", "This exam was the most difficult of the two.", "This exam was the more difficult test of the two.", "This exam was the difficultest of the two."],
    "answer": "This exam was the more difficult of the two.",
    "explanation": "Because the sentence explicitly limits the comparison scope to exactly 'the two', using the superlative 'most difficult' is incorrect. The comparative structure 'more difficult' is required."
  },
  {
    "question": "What is the correct sequence of irregular degrees of comparison for the quantitative adjective 'little' (amount)?",
    "options": ["little, littler, littlest", "little, less, least", "little, lesser, lessest", "little, more little, most little"],
    "answer": "little, less, less",
    "explanation": "When referring to an uncountable amount or quantity, the adjective 'little' follows an irregular comparison path: its positive base is 'little', its comparative is 'less', and its superlative is 'least'."
  },
  {
    "question": "Which option shows the correct structural placement of the modifier 'enough' when paired with an adjective?",
    "options": ["The room is enough big for the gathering.", "The room is big enough for the gathering.", "The room is enough is big for the gathering.", "The room is big enough is for the gathering."],
    "answer": "The room is big enough for the gathering.",
    "explanation": "Unlike other intensifying adverbs, the rule for 'enough' dictates that it must be placed immediately *after* the adjective or adverb it modifies (Adjective + Enough)."
  },
  {
    "question": "Which option shows the correct structural placement of the intensifying adverb 'too'?",
    "options": ["The exam was too difficult for the students.", "The exam was difficult too for the students.", "The exam was too is difficult for the students.", "The exam was difficult too much for the students."],
    "answer": "The exam was too difficult for the students.",
    "explanation": "The adverb 'too' indicates an excessive degree and follows standard modifier syntax, meaning it must be placed directly *before* the adjective it intends to modify (Too + Adjective)."
  },
  {
    "question": "Select the correct pattern for using the moderating adverb 'quite':",
    "options": ["The lecture was quite boring.", "The lecture was boring quite.", "It was a quite lecture.", "The lecture was boringly quite."],
    "answer": "The lecture was quite boring.",
    "explanation": "The sub-modifier or adverb of degree 'quite' must precede the predicate adjective ('boring') it is evaluating within a standard predicate structure."
  },
  {
    "question": "Choose the correct sentence using the degree modifier 'rather':",
    "options": ["The findings were rather interesting.", "The findings were interesting rather.", "It was a rather movie.", "The findings were interestingly rather."],
    "answer": "The findings were rather interesting.",
    "explanation": "The word 'rather' acts as an adverb of degree that softens or intensifies an adjective. It must be positioned right before the adjective 'interesting' to modify it correctly."
  },
  {
    "question": "Which sentence demonstrates the proper syntax for the adverb of degree 'fairly'?",
    "options": ["The assignment was fairly easy.", "The assignment was easy fairly.", "It was a fairly task.", "The assignment was easyfairly."],
    "answer": "The assignment was fairly easy.",
    "explanation": "The modifier 'fairly' functions as an adverb of degree meaning 'moderately'. It must follow standard syntax by sitting directly in front of the adjective 'easy' it qualifies."
  },
  {
    "question": "Which of the following options displays the correct structure for indicating sufficient physical capability?",
    "options": ["He is enough strong to lift the crate.", "He is strong enough to lift the crate.", "He is enough is strong to lift the crate.", "He is strong enough is to lift the crate."],
    "answer": "He is strong enough to lift the crate.",
    "explanation": "This reinforces the 'Adjective + Enough' rule. 'Enough' must trail the adjective 'strong' to be grammatically acceptable when acting as an adverbial modifier."
  },
  {
    "question": "If you want to express an unbearable or problematic excess of temperature, which modifier phrase is appropriate?",
    "options": ["The tea is very hot.", "The tea is too hot.", "The tea is hot enough.", "The tea is enough hot."],
    "answer": "The tea is too hot.",
    "explanation": "While 'very' simply intensifies a condition, 'too' carries a negative connotation of excess that creates an obstacle or problem (e.g., it cannot be drunk yet). Therefore, 'too hot' expresses excess."
  },
  {
    "question": "Identify the natural phrasing for utilizing 'quite' in an attributive or predicate style:",
    "options": ["The results were quite surprising.", "The results were surprising quite.", "It was a quite result.", "The results were surprising quitely."],
    "answer": "The results were quite surprising.",
    "explanation": "The modifier 'quite' is placed immediately before the adjective 'surprising' to indicate a significant but indefinite degree of that quality."
  },
  {
    "question": "When used informally as an adverb of degree meaning 'fairly' or 'moderately', how should 'pretty' be positioned?",
    "options": ["The examination was pretty difficult.", "The examination was difficult pretty.", "It was a pretty exam.", "The examination was difficult prettily."],
    "answer": "The examination was pretty difficult.",
    "explanation": "In casual or colloquial English, 'pretty' serves as a degree modifier equivalent to 'rather'. It must be positioned directly preceding the adjective 'difficult'."
  },
  {
    "question": "Identify the option that contains an incorrect word order involving 'enough':",
    "options": ["He is old enough to vote.", "The light is bright enough.", "The pattern is easy enough.", "She is enough patient with the children."],
    "answer": "She is enough patient with the children.",
    "explanation": "The phrase 'enough patient' violates the positional rules of the language. Because 'patient' is an adjective, 'enough' must follow it, making the correct form 'patient enough'."
  },
  {
    "question": "When comparing the ages of exactly three siblings, which term is grammatically required?",
    "options": ["He is the elder of the three.", "He is the eldest of the three.", "He is the elder of three.", "He is the more elder."],
    "answer": "He is the eldest of the three.",
    "explanation": "The terms 'elder' and 'eldest' are specialized age descriptors. 'Elder' is a comparative form restricted to comparing exactly two family members. For three or more family members, the superlative form 'eldest' must be used."
  },
  {
    "options": ["She is older than me.", "She is older of the class.", "She is oldest than me.", "She is more older."],
    "question": "Which sentence demonstrates standard comparative usage involving the word 'older'?",
    "answer": "She is older than me.",
    "explanation": "The standard comparative adjective 'older' must be followed by the conjunction 'than' to connect the two entities being compared. Note: While 'older than I (am)' is preferred in formal writing, 'older than me' is universally recognized in standard objective comparison patterns."
  },
  {
    "question": "Identify the word that creates a double superlative error in this sentence: 'This is the most cheapest item in the entire store.'",
    "options": ["This is", "the most", "cheapest", "in store"],
    "answer": "the most",
    "explanation": "The adjective 'cheap' forms its superlative degree naturally by adding the suffix '-est' ('cheapest'). Placing 'most' in front of an already inflected superlative word creates an ungrammatical double superlative error."
  },
  {
    "question": "Choose the correct superlative form for a long adjective: 'She is the ________ candidate for the position.'",
    "options": ["more qualified", "most qualified", "more qualifieder", "qualifiedest"],
    "answer": "most qualified",
    "explanation": "The adjective 'qualified' has three syllables. Multi-syllable adjectives do not accept comparative or superlative suffixes; instead, they require the standalone word 'most' to form the superlative degree."
  },
  {
    "question": "Which idiomatic phrase is correct when referring to an option or choice between exactly two things?",
    "options": ["It was the lesser of the two evils.", "It was the least of the two evils.", "It was the less of the two evils.", "It was the most less of the two evils."],
    "answer": "It was the lesser of the two evils.",
    "explanation": "The phrase 'lesser of the two' is a fixed English idiom that correctly uses the comparative adjective form 'lesser' when evaluating a choice limited to exactly two items."
  },
  {
    "question": "Which option displays the correct pairing of an adjective with an uncountable abstract noun?",
    "options": ["He gave me some advice useful.", "He gave me some useful advice.", "He gave me an useful advice.", "He gave me some useful advices."],
    "answer": "He gave me some useful advice.",
    "explanation": "Adjectives must precede the nouns they modify ('useful advice'). Furthermore, because 'advice' is an uncountable noun, it cannot take the indefinite article 'an' or be pluralized into 'advices'."
  },
  {
    "question": "Which option pairs the correct indefinite article with the absolute adjective 'unique'?",
    "options": ["an unique opportunity", "a unique opportunity", "very unique opportunity", "most unique opportunity"],
    "answer": "a unique opportunity",
    "explanation": "The choice between the articles 'a' and 'an' depends on the initial sound of the following word, not the letter. The word 'unique' begins with a consonant sound (/yoo/), which requires the indefinite article 'a'."
  },
  {
    "question": "Identify the option that successfully avoids a double comparison defect:",
    "options": ["The passage became more narrower.", "The passage became narrower.", "The passage became most narrowest.", "The passage became most narrower."],
    "answer": "The passage became narrower.",
    "explanation": "The word 'narrower' is the correct singular comparative form. Combining it with 'more' or 'most' introduces a structural redundancy that violates standard English comparison principles."
  },
  {
    "question": "What is the correct placement for the limiting adverb 'almost' when modifying a predicate adjective clause?",
    "options": ["We were almost late for the flight.", "We were late almost for the flight.", "We almost was late for the flight.", "We were late for almost the flight."],
    "answer": "We were almost late for the flight.",
    "explanation": "Limiting adverbs or adverbs of degree like 'almost' must be positioned directly in front of the specific adjective ('late') that they are qualifying or limiting."
  },
  {
    "question": "Choose the sentence that follows the correct standard adjective order regarding weather conditions:",
    "options": ["It was a rainy cold night.", "It was a cold rainy night.", "It was a night cold rainy.", "It was a cold night rainy."],
    "answer": "It was a cold rainy night.",
    "explanation": "In standard English modifier grouping, general physical sensations or temperature descriptions ('cold') are systematically placed before specific weather states or environmental conditions ('rainy')."
  }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Nuances & Context
  // ============================================================
  advanced: [
   {
    "question": "Identify the section that contains a grammatical error: 'The colorful flowers (A) / smelled (B) / sweetly (C) / in the morning garden (D).'",
    "options": ["The colorful flowers", "smelled", "sweetly", "in the morning garden"],
    "answer": "sweetly",
    "explanation": "The verb 'smelled' functions here as a sensory linking verb that connects the subject ('flowers') to its state or description. Linking verbs must be modified by a predicate adjective ('sweet') instead of an adverb ('sweetly'), because the flowers are not actively performing the action of smelling with nose receptors."
  },
  {
    "question": "Which of the following sentences correctly utilizes the verb 'look' as a linking verb?",
    "options": ["The supervisor looked carefully at the official ledger.", "The applicant looked tired after the long examination.", "The security guards looked around for any signs of intrusion.", "The auditor looked through the submitted financial reports."],
    "answer": "The applicant looked tired after the long examination.",
    "explanation": "When 'look' is used to indicate an appearance or state of being, it functions as a linking verb and requires a predicate adjective ('tired') to describe the subject. In the other choices, 'look' acts as an action verb (meaning to direct one's gaze), which properly requires adverbial modifiers or prepositions."
  },
  {
    "question": "Complete the sentence with the correct modifier following the linking verb 'remain': 'Despite the chaos, the classroom _______.'",
    "options": ["remained quietly", "remained quiet", "remained quietlier", "remained quietful"],
    "answer": "remained quiet",
    "explanation": "The word 'remain' functions as a status or copular linking verb meaning 'to continue to be'. It must connect the subject directly to a predicate adjective ('quiet') rather than an adverb ('quietly') to accurately describe the ongoing condition of the subject."
  },
  {
    "question": "Choose the option where 'appear' functions strictly as a linking verb connected to a property of the subject:",
    "options": ["A sudden witness appeared suddenly before the court panel.", "The corporate manager appeared nervous during the presentation.", "The missing documents appeared quickly on the working desk.", "The laboratory technician appeared quietly in the room."],
    "answer": "The corporate manager appeared nervous during the presentation.",
    "explanation": "When 'appear' means 'to seem to be', it serves as a linking verb and demands a predicate adjective ('nervous') to modify the subject. In the other options, 'appear' means 'to come into view or arrive', which describes an action modified by adverbs."
  },
  {
    "question": "Which construction is grammatically correct when using 'feel' to express a physical or structural state?",
    "options": ["The concrete columns feel strongly and durable.", "The steel beams feel strong enough for the foundation.", "The support structures feel stronglyly built.", "The old wooden beams feel more strongly than before."],
    "answer": "The steel beams feel strong enough for the foundation.",
    "explanation": "The verb 'feel' acts as a sensory linking verb when describing an objective physical characteristic or texture. It requires the base adjective 'strong' to modify the subject 'beams'. The adverb 'strongly' is only appropriate when modifying actions or expressing an intense internal conviction (e.g., 'I feel strongly about this policy')."
  },
  {
    "question": "Select the sentence that conforms to formal English criteria by correctly modifying an active performance verb:",
    "options": ["The secretary writes neat when documenting the minutes.", "The secretary writes neatly when documenting the minutes.", "The secretary writes more neat during fast dictations.", "The secretary writes neatlier than the office assistant."],
    "answer": "The secretary writes neatly when documenting the minutes.",
    "explanation": "In this context, 'writes' is an active performance verb describing how an physical operation is executed. Therefore, it requires the standard adverb form 'neatly' (ending in '-ly') to show the manner of writing. The adjective 'neat' cannot modify an action verb directly."
  },
  {
    "question": "Which clause correctly utilizes a predicate adjective after the linking verb 'sound'?",
    "options": ["The legal measure was soundly passed by the board.", "The legal compromise sounds reasonable under the circumstances.", "The proposed argument sounds clearly to the audience.", "The classical piece sounds beautifully in the hall."],
    "answer": "The legal compromise sounds reasonable under the circumstances.",
    "explanation": "When 'sound' is used to express an impression or evaluation of an abstract concept (like a compromise or idea), it acts as a linking verb. It must take a predicate adjective ('reasonable') to describe the subject, rather than adverbs like 'clearly' or 'beautifully'."
  },
  {
    "question": "Complete the sentence following the dynamic linking verb 'grow' (meaning 'to become'): 'The tenant _______ when the rent increased.'",
    "options": ["grew angrily", "grew angry", "grew angryly", "grew more angrily"],
    "answer": "grew angry",
    "explanation": "The verb 'grow' is a copular verb of change when it means 'to change or transform into a specific state'. It connects the subject to a state of mind, which requires the adjective 'angry'. If you use 'grew angrily', it would incorrectly imply that the tenant was performing physical growth in a furious manner."
  },
  {
    "question": "Choose the option that uses correct adjective syntax after the verb of transformation 'turn':",
    "options": ["The litmus paper turned red when exposed to acid.", "The vehicle turned quickly at the intersection.", "The autumn leaves turned redly in October.", "The operator turned more quickly to prevent the spill."],
    "answer": "The litmus paper turned red when exposed to acid.",
    "explanation": "When 'turn' signifies a mutation or change in state, appearance, or color, it operates as a linking verb and takes a predicate adjective ('red'). When it signifies a literal change in physical direction or movement, it acts as an action verb modified by an adverb ('turned quickly')."
  },
  {
    "question": "Which idiomatic combination shows correct linking verb agreement with the past participle 'gone'?",
    "options": ["The milk stored outside the refrigerator has gone sour.", "The milk stored outside the refrigerator has gone sourly.", "The milk stored outside the refrigerator has gone sourer.", "The milk stored outside the refrigerator has gone most sour."],
    "answer": "The milk stored outside the refrigerator has gone sour.",
    "explanation": "The verb phrase 'has gone' functions as a copular verb of change when describing spoilage, decay, or transformation. It connects the subject ('milk') to its altered property, which requires the predicate adjective 'sour'. 'Sourly' is an adverb and is incorrect here."
  },
  {
    "question": "Select the phrase that demonstrates the correct sequence of dimensional and age-related adjectives:",
    "options": ["They walked down a long old narrow road.", "They walked down an old long narrow road.", "They walked down a narrow old long road.", "They walked down a long narrow old road."],
    "answer": "They walked down a long narrow old road.",
    "explanation": "According to the natural hierarchy of cumulative adjectives in English syntax, primary physical dimensions or measurements like length ('long') and width ('narrow') must precede classifications of age ('old') before reaching the head noun."
  },
  {
    "question": "What is the most grammatically natural adjective sequence for describing a vehicle?",
    "options": ["They bought a German small red car.", "They bought a small red German car.", "They bought a red German small car.", "They bought a German red small car."],
    "answer": "They bought a small red German car.",
    "explanation": "The Royal Order of Adjectives requires physical dimensions or Size ('small') to come first, followed by a physical attribute like Color ('red'), and ending with the proper adjective denoting Origin or nationality ('German') immediately preceding the noun."
  },
  {
    "question": "Select the option that strictly adheres to the standard order of subjective opinion and objective fact modifiers:",
    "options": ["We watched an interesting new Filipino movie.", "We watched a new interesting Filipino movie.", "We watched a Filipino new interesting movie.", "We watched an interesting Filipino new movie."],
    "answer": "We watched an interesting new Filipino movie.",
    "explanation": "Subjective Evaluation or Opinion adjectives ('interesting') must always lead a modifier string. They are followed by chronological descriptors of Age ('new'), which are then followed by cultural or national Origin ('Filipino')."
  },
  {
    "question": "Identify the option that displays the perfect hierarchical arrangement of four distinct cumulative modifiers:",
    "options": ["They visited a beautiful big old stone church.", "They visited a big old beautiful stone church.", "They visited an old beautiful big stone church.", "They visited a beautiful stone big old church."],
    "answer": "They visited a beautiful big old stone church.",
    "explanation": "The established sequence for multiple adjectives is: Opinion ('beautiful') ➔ Size ('big') ➔ Age ('old') ➔ Material ('stone'). Deviating from this order sounds unnatural to a native speaker and violates structural patterns tested in formal exams."
  },
  {
    "question": "Which combination follows the correct order of modifiers when incorporating physical characteristics and behavioral categories?",
    "options": ["They rescued a small black stray dog.", "They rescued a stray black small dog.", "They rescued a black small stray dog.", "They rescued a stray small black dog."],
    "answer": "They rescued a small black stray dog.",
    "explanation": "Physical traits must be positioned before behavioral types or absolute classifications. Therefore, Size ('small') and Color ('black') must come before the Type/Purpose descriptor ('stray'), which is acting as a classifying adjective right next to 'dog'."
  },
  {
    "question": "What is the correct structural positioning of shape, material, and qualitative value modifiers?",
    "options": ["They bought a wooden lovely round table.", "They bought a lovely round wooden table.", "They bought a round wooden lovely table.", "They bought a wooden round lovely table."],
    "answer": "They bought a lovely round wooden table.",
    "explanation": "A personal Opinion modifier ('lovely') must occupy the initial position. It is followed by the geometric property of Shape ('round'), which takes priority over the compositional substance or Material ('wooden') of the object."
  },
  {
    "question": "Choose the phrase that exhibits a natural and standard grammatical arrangement of attributes for an article of clothing:",
    "options": ["He wore a cotton white comfortable shirt.", "He wore a comfortable white cotton shirt.", "He wore a white comfortable cotton shirt.", "He wore a cotton comfortable white shirt."],
    "answer": "He wore a comfortable white cotton shirt.",
    "explanation": "Following standard adjective ordering, the subjective attribute of Opinion/Comfort ('comfortable') must precede the objective attribute of Color ('white'), which must then precede the raw Material ('cotton') from which the shirt is woven."
  },
  {
    "question": "Select the sentence containing the most natural and standard sequence of descriptive modifiers:",
    "options": ["They performed an old French famous song.", "They performed a famous old French song.", "They performed a French famous old song.", "They performed a famous French old song."],
    "answer": "They performed a famous old French song.",
    "explanation": "The proper syntax sequence requires a broad value descriptor or Opinion ('famous') to be placed first, followed by a chronological indicator of Age ('old'), and concluding with an ethnical or regional Origin descriptor ('French')."
  },
  {
    "question": "What is the standard order of modifiers for describing a culinary item with multiple physical dimensions?",
    "options": ["They served a delicious small round cake.", "They served a small delicious round cake.", "They served a delicious round small cake.", "They served a round small delicious cake."],
    "answer": "They served a delicious small round cake.",
    "explanation": "An adjective evaluating sensory quality or Opinion ('delicious') must always sit at the front of the sequence. For physical dimensions, absolute scale or Size ('small') must precede geometric layout or Shape ('round')."
  },
  {
    "question": "Identify the option that aligns perfectly with the standard cumulative adjective sequence involving weight and material:",
    "options": ["They carried a heavy big old metal box.", "They carried a big heavy old metal box.", "They carried an old big heavy metal box.", "They carried a metal heavy old big box."],
    "answer": "They carried a big heavy old metal box.",
    "explanation": "When sizing parameters conflict, absolute spatial Dimension or Size ('big') generally takes priority over specific internal properties like Weight ('heavy'). These are followed by Age ('old'), and finally the structural Material ('metal') immediately before the noun."
  },
  {
    "question": "Which of the following demonstrates logical and grammatical correctness when singling out an individual from a defined plural group?",
    "options": ["Between Maria, Ana, and Liza, Maria is taller.", "Between Maria, Ana, and Liza, Maria is the taller one.", "Among Maria, Ana, and Liza, Maria is the tallest.", "Among Maria, Ana, and Liza, Maria is taller."],
    "answer": "Among Maria, Ana, and Liza, Maria is the tallest.",
    "explanation": "The preposition 'among' is required when referring to a collective group of three or more entities (Maria, Ana, Liza), while 'between' is restricted to exactly two. Furthermore, comparing three entities mandates the use of the superlative degree ('the tallest') instead of the comparative degree."
  },
  {
    "question": "Identify why the statement 'The economic outcome of this strategy is better than the previous' contains an illogical comparison fault:",
    "options": ["Because 'better' should be changed to 'more better' to match formal registers.", "Because it compares an economic outcome directly to a strategy instead of another outcome.", "Because it leaves the comparison incomplete by failing to specify a parallel noun or pronoun.", "Both B and C are valid structural criticisms of this sentence form."],
    "answer": "Because it leaves the comparison incomplete by failing to specify a parallel noun or pronoun.",
    "explanation": "A formal comparison must always contrast parallel elements (noun-to-noun or attribute-to-attribute). Saying 'better than the previous' is incorrect because 'previous' is acting as a bare adjective. It must be paired with a pronoun ('the previous one') or a noun ('the previous policy') to maintain structural logic."
  },
  {
    "question": "Which of the following options correctly enhances the comparative degree of an adjective using an intensifying adverb?",
    "options": ["The situation is now more better than it was yesterday.", "The situation is now much better than it was yesterday.", "The situation is now very more better than it was yesterday.", "The situation is now betterest than it was yesterday."],
    "answer": "The situation is now much better than it was yesterday.",
    "explanation": "The word 'better' is already an irregular comparative adjective. To intensify it, you must use the adverb 'much'. Using 'more' alongside an already inflected comparative adjective creates an ungrammatical 'double comparative' error, while 'very' cannot directly modify comparative forms."
  },
  {
    "question": "Which option demonstrates formal standard English when expressing the comparative form of the single-syllable adjective 'safe'?",
    "options": ["This route is considered the most safe option during floods.", "This route is considered a safer choice under current conditions.", "This route is considered more safe than the highway.", "This route is considered safe than the other option."],
    "answer": "This route is considered a safer choice under current conditions.",
    "explanation": "Short, single-syllable adjectives form their comparative degree synthetically by adding the suffix '-er' ('safer'). Analytical forms using 'more safe' or 'most safe' are considered non-standard or structurally deficient in formal registers."
  },
  {
    "question": "Choose the phrase that demonstrates a flawless command over the quantitative modifiers 'less' and 'fewer':",
    "options": ["There are less people attending the seminar today.", "We encountered fewer traffic on the alternative route.", "The project manager assigned fewer tasks to the team.", "The department has less tasks to complete this week."],
    "answer": "The project manager assigned fewer tasks to the team.",
    "explanation": "The modifier 'fewer' is strictly reserved for plural countable nouns (such as 'tasks' or 'people'). The modifier 'less' must be used exclusively for uncountable mass nouns (such as 'traffic' or 'time'). Therefore, 'fewer tasks' is correct, while 'less people' and 'fewer traffic' are grammatical errors."
  },
  {
    "question": "Which sentence is structurally correct and completely free of redundant modifiers?",
    "options": ["She is recognized as the most eldest member of the council.", "She is recognized as the eldest member of the council.", "She is recognized as the elder than all members of the council.", "She is recognized as the more eldest member of the council."],
    "answer": "She is recognized as the eldest member of the council.",
    "explanation": "The word 'eldest' is already a fully formed superlative adjective indicating the highest seniority within a group. Adding 'most' or 'more' creates a double superlative error, which introduces a severe grammatical redundancy."
  },
  {
    "question": "Select the option that handles the absolute semantic nature of the adjective 'preferable' correctly:",
    "options": ["Having a backup strategy is more preferable than proceeding blindly.", "Having a backup strategy is preferable to proceeding blindly.", "Having a backup strategy is much more preferable than proceeding blindly.", "Having a backup strategy is most preferable among all choices."],
    "answer": "Having a backup strategy is preferable to proceeding blindly.",
    "explanation": "The adjective 'preferable' is an absolute modifier that inherently means 'more desirable'. Because it already contains a comparative meaning, it cannot be modified by 'more' or 'most'. Additionally, the adjective 'preferable' idiomatically takes the preposition 'to' rather than the conjunction 'than'."
  },
  {
    "question": "Which option represents a grammatically acceptable comparative structure?",
    "options": ["The newly appointed officer proved to be more kinder.", "The newly appointed officer proved to be kinder than expected.", "The newly appointed officer proved to be most kindest.", "The newly appointed officer proved to be kindest than others."],
    "answer": "The newly appointed officer proved to be kinder than expected.",
    "explanation": "The short adjective 'kind' forms its comparative degree by adding the suffix '-er' ('kinder'), which is then paired with 'than'. Combining it with 'more' or 'most' is ungrammatical because it results in a double comparison defect."
  },
  {
    "question": "What is the correct paradigm of irregular comparison for the spatial/physical adjective 'far' when tracking concrete distance?",
    "options": ["far, farther, farthest", "far, more far, most far", "far, furtherer, furtherest", "far, farest, farestest"],
    "answer": "far, farther, farthest",
    "explanation": "In formal English geography and spatial measurements, physical linear distance uses the irregular paradigm 'far ➔ farther ➔ farthest'. The parallel form 'further/furthest' is preferred for abstract extensions, degrees, or figurative depth (e.g., 'further research')."
  },
  {
    "question": "Identify the most optimal and grammatically sound sentence when evaluating a class of exactly three options:",
    "options": ["This model is considered the better of three alternatives.", "This model is considered the better of the three alternatives.", "This model is considered the best of the three alternatives.", "This model is considered the bestest of all three alternatives."],
    "answer": "This model is considered the best of the three alternatives.",
    "explanation": "When comparing three or more distinct items, the superlative degree ('the best') is required. The comparative form 'the better of the two' is strictly capped at a population size of exactly two."
  },
  {
    "question": "Which phrase correctly matches the indefinite article with an absolute adjective without creating a modifier contradiction?",
    "options": ["This artifact represents a most unique discovery.", "This artifact represents a unique discovery.", "This artifact represents a very unique discovery.", "This artifact represents the uniqueest discovery."],
    "answer": "This artifact represents a unique discovery.",
    "explanation": "The word 'unique' is an absolute adjective meaning 'being the only one of its kind'. Logically, something cannot be 'very unique' or 'most unique' because uniqueness does not have varying degrees. It requires the basic indefinite article 'a' without intensifying modifiers."
  },
  {
    "question": "Identify the option that avoids semantic redundancy (pleonasm) in its modifier-noun pairing:",
    "options": ["The committee reached a final conclusion after the audit.", "The committee reached a conclusion after the audit.", "The team evaluated the end result of the operation.", "The historian cataloged the past history of the municipality."],
    "answer": "The committee reached a conclusion after the audit.",
    "explanation": "A 'conclusion' is inherently final, a 'result' occurs at the end, and 'history' is always in the past. Therefore, phrases like 'final conclusion', 'end result', and 'past history' contain logical redundancies. 'Conclusion' on its own is the cleanest and most accurate choice."
  },
  {
    "question": "Which sentence demonstrates the correct placement of the limiting adjective 'only' to show that no other candidate fits the profile?",
    "options": ["He is the only one suitable candidate for the executive role.", "He is the only suitable candidate for the executive role.", "He is the candidate suitable only for the executive role.", "He is the only suitable the candidate for the executive role."],
    "answer": "He is the only suitable candidate for the executive role.",
    "explanation": "The limiting modifier 'only' must be placed directly before the adjective-noun cluster it intends to qualify ('only suitable candidate') to clearly show that he is the sole individual who meets the requirements."
  },
  {
    "question": "Choose the sentence that successfully avoids using redundant degree or limiting modifiers together:",
    "options": ["The vehicle almost nearly missed the oncoming truck.", "The vehicle nearly almost missed the oncoming truck.", "The vehicle almost missed the oncoming truck.", "The vehicle was nearly almost last at the finish line."],
    "answer": "The vehicle almost missed the oncoming truck.",
    "explanation": "The words 'almost' and 'nearly' are synonyms that express identical degrees of proximity. Combining them together within a single clause ('almost nearly') creates a structural redundancy that should be avoided in formal English."
  },
  {
    "question": "Select the correct pattern for incorporating the intensive adverb 'even' with a comparative adjective structure:",
    "options": ["The second phase of the examination proved to be even more difficult.", "The second phase of the examination proved to be more even difficult.", "The second phase of the examination proved to be difficult even more.", "The second phase of the examination even was more difficult."],
    "answer": "The second phase of the examination proved to be even more difficult.",
    "explanation": "The intensifier 'even' must always be positioned directly *before* the comparative modifier cluster ('even more difficult') to modify it correctly."
  },
  {
    "question": "Which construction illustrates the correct syntax pattern for the pre-determiner modifier 'such'?",
    "options": ["It was such difficult assignment that many failed.", "It was such a difficult assignment that many failed.", "It was a such difficult assignment that many failed.", "It was an assignment such difficult that many failed."],
    "answer": "It was such a difficult assignment that many failed.",
    "explanation": "The correct structural idiom for using 'such' with a singular countable noun requires the pattern: `Such + Indefinite Article (a/an) + Adjective + Noun`. This makes 'such a difficult assignment' the only grammatically correct option."
  },
  {
    "question": "Identify the option that represents standard modifier usage without introducing ungrammatical degree inflation:",
    "options": ["The employee was too much tired to continue the late shift.", "The employee was too tired to continue the late shift.", "The employee was very too tired to continue the late shift.", "The employee was tired too much to continue the late shift."],
    "answer": "The employee was too tired to continue the late shift.",
    "explanation": "The adverb of degree 'too' can directly modify the predicate adjective 'tired' on its own (`Too + Adjective`). Inserting 'much' between them is ungrammatical and redundant unless 'too much' is modifying a noun or a verb."
  },
  {
    "question": "What is the correct positioning of the adverb of degree 'quite' within a standard predicate framework?",
    "options": ["The submitted evaluation report was quite good.", "The submitted evaluation report was good quite.", "It was a quite report submitted by the committee.", "The submitted evaluation report was good quitely."],
    "answer": "The submitted evaluation report was quite good.",
    "explanation": "The degree modifier 'quite' must be placed directly before the adjective 'good' to show a moderate to high degree of quality. Placing it after the adjective or using the non-existent word 'quitely' is ungrammatical."
  },
  {
    "question": "Which option displays the correct punctuation pattern for an introductory adjectival phrase?",
    "options": ["Tired and hungry, the stranded motorists waited for assistance.", "Tired and hungry the stranded motorists waited for assistance.", "Tired, and hungry, the stranded motorists waited for assistance.", "Tired and hungry the stranded motorists, waited for assistance."],
    "answer": "Tired and hungry, the stranded motorists waited for assistance.",
    "explanation": "When a coordinate or compound adjectival phrase ('Tired and hungry') is placed at the very beginning of a sentence to modify the subject ('motorists'), it functions as an introductory element that must be separated from the main clause by a comma."
  },
  {
    "question": "Identify the option that correctly implements a relative adjective clause to modify a target noun:",
    "options": ["The reference book that I bought yesterday contains vital formulas.", "The reference book I bought interesting contains vital formulas.", "The reference book which bought yesterday contains vital formulas.", "The reference book bought I yesterday contains vital formulas."],
    "answer": "The reference book that I bought yesterday contains vital formulas.",
    "explanation": "The clause 'that I bought yesterday' is a restrictive adjective clause (relative clause) that correctly uses the relative pronoun 'that' to modify the noun 'book'. Option C is missing a subject inside the clause, while options B and D violate standard English syntax."
  },
  {
    "question": "Choose the option that correctly pairs a modifier with the uncountable abstract noun 'advice':",
    "options": ["The consultant provided me with a few good advices.", "The consultant provided me with a few good pieces of advice.", "The consultant provided me with few good advice.", "The consultant provided me with some helpful advices."],
    "answer": "The consultant provided me with a few good pieces of advice.",
    "explanation": "The noun 'advice' is strictly an uncountable (mass) noun in English grammar. It can never be pluralized into 'advices' and cannot be modified directly by countable determiners like 'a few'. To make it countable, you must introduce a counter phrase like 'pieces of advice'."
  },
  {
    "question": "Which sentence demonstrates proper grammatical alignment using the quantifiers 'little' and 'few'?",
    "options": ["We need to arrange a little chairs in the conference hall.", "We need to arrange a few chairs in the conference hall.", "There is a few time remaining before the board meeting.", "We have a little chairs and time remaining for the setups."],
    "answer": "We need to arrange a few chairs in the conference hall.",
    "explanation": "The word 'chairs' is a plural countable noun, so it must be paired with the countable quantifier 'few'. The quantifier 'little' is reserved exclusively for uncountable mass nouns like 'time'."
  },
  {
    "question": "Which combination correctly handles the modern singular limiting framework for the mass noun 'information'?",
    "options": ["The system downloaded another informations onto the drive.", "The system downloaded another piece of information onto the drive.", "The system downloaded other another information onto the drive.", "The system downloaded anothers information onto the drive."],
    "answer": "The system downloaded another piece of information onto the drive.",
    "explanation": "Because 'information' is an uncountable noun, it cannot be directly pluralized or modified by 'another' (which combines 'an' + 'other'). To isolate a single unit, you must use a partial counter phrase like 'another piece of information'."
  },
  {
    "question": "Identify the sentence that conforms to standard noun-modifier agreement when using the distributive adjective 'each':",
    "options": ["Each students must present a valid identification card.", "Each student must present a valid identification card.", "Each of student must present a valid identification card.", "Each student received must present a valid identification card."],
    "answer": "Each student must present a valid identification card.",
    "explanation": "The distributive adjective 'each' describes members of a group individually. It must always be followed immediately by a singular countable noun ('student') and a singular verb, rather than a plural noun ('students')."
  },
  {
    "question": "Identify the option that demonstrates correct syntax using the distributive adjective 'every':",
    "options": ["Every students in the department passed the assessment.", "Every of students in the department passed the assessment.", "Every student in the department passed the assessment.", "Every student passed in the department passed the assessment."],
    "answer": "Every student in the department passed the assessment.",
    "explanation": "Similar to 'each', the distributive modifier 'every' considers a group as a collection of individuals and must be paired directly with a singular countable noun ('student') followed by a singular verb form."
  },
  {
    "question": "Which option displays the correct structural pairing of the negative adjective 'no' with a singular subject?",
    "options": ["No people was permitted to enter the secure vault area.", "No one people was permitted to enter the secure vault area.", "No student was permitted to enter the secure vault area.", "No the student was permitted to enter the secure vault area."],
    "answer": "No student was permitted to enter the secure vault area.",
    "explanation": "The word 'no' can act as an adjective that means 'not any'. It can be paired directly with a singular countable noun ('student') and a singular verb ('was'). Placing an article right after it (like 'no the student') is a severe syntax error."
  },
  {
    "question": "Select the option that shows the correct idiomatic ordering of intensifiers when using the adjective 'same':",
    "options": ["They made the same exactly errors as the previous team.", "They made the exactly same errors as the previous team.", "They made the exact same errors as the previous team.", "They made the same exact errors as the previous team."],
    "answer": "They made the exact same errors as the previous team.",
    "explanation": "The phrase 'exact same' is an established English idiom where the adjective 'exact' acts as an emphasis modifier right before the primary adjective 'same'. Reversing them or using adverbs like 'exactly' changes the required structural pattern."
  },
  {
    "question": "Which phrase correctly integrates the pre-determiner 'such' with an adjective starting with a vowel sound?",
    "options": ["It was such unforgettable experience for the entire family.", "It was such an unforgettable experience for the entire family.", "It was an such unforgettable experience for the entire family.", "It was an experience such unforgettable for the entire family."],
    "answer": "It was such an unforgettable experience for the entire family.",
    "explanation": "This follows the `Such + Indefinite Article + Adjective + Noun` pattern. Because the adjective 'unforgettable' begins with a vowel sound (/u/), it requires the indefinite article 'an' instead of 'a', resulting in 'such an unforgettable experience'."
  },
  {
    "question": "Choose the option that shows the correct post-positional modifier structure for the word 'enough':",
    "options": ["The officer in charge was deemed responsible enough to manage the fund.", "The officer in charge was deemed enough responsible to manage the fund.", "The officer in charge was deemed enough is responsible to manage the fund.", "The officer in charge was deemed responsible for enough to manage the fund."],
    "answer": "The officer in charge was deemed responsible enough to manage the fund.",
    "explanation": "When the word 'enough' functions as an adverb of degree modifying an adjective, it must always be placed immediately *after* the adjective it qualifies ('responsible enough'). Placing it before the adjective is a common syntax error."
  },
  {
    "question": "Which option features a correctly reduced relative clause functioning as a post-positive participle adjective?",
    "options": ["The man standing by the entrance ledger is the head registrar.", "The man who standing by the entrance ledger is the head registrar.", "The man near standing by the entrance ledger is the head registrar.", "The man stood by the entrance ledger is the head registrar."],
    "answer": "The man standing by the entrance ledger is the head registrar.",
    "explanation": "The phrase 'standing by the entrance ledger' is a reduced relative clause (shortened from 'who is standing'). The present participle 'standing' functions perfectly as a post-positive adjective that directly modifies the noun 'man' from behind."
  }
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

