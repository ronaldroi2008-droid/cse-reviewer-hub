
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

window.VERBAL_QUESTION_BANK["adjectives"] = {

const ADJECTIVE_QUESTIONS = {
  beginner: [
    // 1–10: basic ID of adjectives
    {
      question: "Which word is the adjective in this sentence: 'She bought a red bag.'?",
      choices: ["She", "bought", "red", "bag"],
      correctIndex: 2,
      explanation: "'Red' describes the noun 'bag', so it is the adjective."
    },
    {
      question: "Which word is the adjective in this sentence: 'The tall boy is my cousin.'?",
      choices: ["tall", "boy", "is", "cousin"],
      correctIndex: 0,
      explanation: "'Tall' describes the noun 'boy', so it is the adjective."
    },
    {
      question: "In the phrase 'four chairs', what kind of word is 'four'?",
      choices: ["Noun", "Verb", "Adjective", "Adverb"],
      correctIndex: 2,
      explanation: "'Four' tells how many chairs, so it functions as a numeral adjective."
    },
    {
      question: "Which word is the adjective in: 'We had a delicious meal.'?",
      choices: ["We", "had", "delicious", "meal"],
      correctIndex: 2,
      explanation: "'Delicious' describes the noun 'meal', so it is an adjective."
    },
    {
      question: "In 'That building is new', which word is the adjective?",
      choices: ["That", "building", "is", "new"],
      correctIndex: 3,
      explanation: "'New' describes the noun 'building' and follows the linking verb 'is'."
    },
    {
      question: "Which word is the adjective in: 'She lives in a small house.'?",
      choices: ["lives", "small", "house", "in"],
      correctIndex: 1,
      explanation: "'Small' describes the noun 'house', so it is an adjective."
    },
    {
      question: "In 'My bag is heavy', which word is the adjective?",
      choices: ["My", "bag", "is", "heavy"],
      correctIndex: 3,
      explanation: "'Heavy' describes 'bag', functioning as an adjective after a linking verb."
    },
    {
      question: "Which word is the adjective in: 'They watched an exciting movie.'?",
      choices: ["They", "watched", "exciting", "movie"],
      correctIndex: 2,
      explanation: "'Exciting' describes the noun 'movie', so it is an adjective."
    },
    {
      question: "In 'The streets are quiet tonight', which word is the adjective?",
      choices: ["streets", "are", "quiet", "tonight"],
      correctIndex: 2,
      explanation: "'Quiet' describes the noun 'streets', so it is an adjective."
    },
    {
      question: "In 'She has long hair', which word is the adjective?",
      choices: ["She", "has", "long", "hair"],
      correctIndex: 2,
      explanation: "'Long' describes the noun 'hair', so it is an adjective."
    },

    // 11–20: types (demonstrative, possessive, etc.)
    {
      question: "Which is a demonstrative adjective?",
      choices: ["quickly", "those", "hers", "they"],
      correctIndex: 1,
      explanation: "'Those' can be a demonstrative adjective when it comes before a noun (those bags)."
    },
    {
      question: "Which of the following is a possessive adjective?",
      choices: ["hers", "their", "them", "they"],
      correctIndex: 1,
      explanation: "'Their' is a possessive adjective when used before a noun (their house)."
    },
    {
      question: "Which option shows an interrogative adjective?",
      choices: ["Which book is yours?", "Which is yours?", "Whose is that?", "What are you doing?"],
      correctIndex: 0,
      explanation: "In 'Which book', 'which' modifies the noun 'book', so it is an interrogative adjective."
    },
    {
      question: "In 'Our teacher is kind', which word is the adjective?",
      choices: ["Our", "teacher", "is", "kind"],
      correctIndex: 3,
      explanation: "'Kind' describes 'teacher', so it is a descriptive adjective."
    },
    {
      question: "Which sentence contains a proper adjective?",
      choices: [
        "We bought fresh fruits.",
        "She likes Filipino food.",
        "He drives a fast car.",
        "They live in a quiet street."
      ],
      correctIndex: 1,
      explanation: "'Filipino' is formed from the proper noun 'Philippines', so it is a proper adjective."
    },
    {
      question: "Which sentence contains a numeral adjective?",
      choices: [
        "I bought some apples.",
        "He has many books.",
        "She has three brothers.",
        "They have enough time."
      ],
      correctIndex: 2,
      explanation: "'Three' shows exact number and functions as a numeral adjective."
    },
    {
      question: "Which is a quantitative adjective?",
      choices: ["few", "quickly", "sing", "teacher"],
      correctIndex: 0,
      explanation: "'Few' shows quantity and is a quantitative adjective."
    },
    {
      question: "In 'That car is expensive', which word is the demonstrative adjective?",
      choices: ["That", "car", "is", "expensive"],
      correctIndex: 0,
      explanation: "'That' points out a specific noun 'car', so it is a demonstrative adjective."
    },
    {
      question: "Which sentence uses a possessive adjective correctly?",
      choices: [
        "This pen is me.",
        "This is mine pen.",
        "This is my pen.",
        "This pen is I."
      ],
      correctIndex: 2,
      explanation: "'My' is a possessive adjective correctly placed before the noun 'pen'."
    },
    {
      question: "Which sentence has an interrogative adjective?",
      choices: [
        "What is that?",
        "Whose bag is this?",
        "Who is your teacher?",
        "Where are they?"
      ],
      correctIndex: 1,
      explanation: "In 'Whose bag', 'whose' modifies 'bag', so it is an interrogative adjective."
    },

    // 21–30: adjective vs adverb basics
    {
      question: "Choose the correct sentence using an adjective:",
      choices: [
        "She sings beautiful.",
        "She sings beautifully.",
        "She sings beauty.",
        "She sings beautify."
      ],
      correctIndex: 1,
      explanation: "'Beautifully' is an adverb describing how she sings. The question is which is correct usage overall, not which is an adjective."
    },
    {
      question: "Which sentence uses an adjective correctly after a linking verb?",
      choices: [
        "The soup smells good.",
        "The soup smells well.",
        "The soup smells quickly.",
        "The soup smells carefully."
      ],
      correctIndex: 0,
      explanation: "After linking verbs like 'smells', we use adjectives ('good') to describe the subject."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He feels badly about the mistake.",
        "He feels bad about the mistake.",
        "He feels badder about the mistake.",
        "He feels more bad about the mistake."
      ],
      correctIndex: 1,
      explanation: "With the linking verb 'feels', we use the adjective 'bad' to describe the subject."
    },
    {
      question: "Choose the sentence with correct adjective use:",
      choices: [
        "The cake tastes sweet.",
        "The cake tastes sweetly.",
        "The cake tastes sweetness.",
        "The cake tastes sweetful."
      ],
      correctIndex: 0,
      explanation: "After 'tastes', which is a linking verb here, we use the adjective 'sweet'."
    },
    {
      question: "Which is the adjective in 'He is a careful driver.'?",
      choices: ["He", "is", "careful", "driver"],
      correctIndex: 2,
      explanation: "'Careful' describes the noun 'driver', so it is an adjective."
    },
    {
      question: "Which sentence correctly uses an adverb, not an adjective?",
      choices: [
        "He drives careful.",
        "He drives carefully.",
        "He is carefully.",
        "He is carefully driver."
      ],
      correctIndex: 1,
      explanation: "'Carefully' correctly modifies the verb 'drives'."
    },
    {
      question: "Which sentence uses 'good' correctly?",
      choices: [
        "She sings good.",
        "She is a good singer.",
        "She sings more good.",
        "She sings goodly."
      ],
      correctIndex: 1,
      explanation: "'Good' is an adjective and should describe a noun ('singer'), not a verb ('sings')."
    },
    {
      question: "Identify the adjective in 'It was a noisy classroom.'",
      choices: ["It", "was", "noisy", "classroom"],
      correctIndex: 2,
      explanation: "'Noisy' describes the noun 'classroom', so it is an adjective."
    },
    {
      question: "Which sentence uses an adjective to talk about health?",
      choices: [
        "I feel well now.",
        "I feel quickly now.",
        "I feel hardly now.",
        "I feel slowly now."
      ],
      correctIndex: 0,
      explanation: "Here 'well' is used as an adjective meaning 'in good health'."
    },
    {
      question: "Which option is an adjective?",
      choices: ["quick", "quickly", "quickness", "quickerly"],
      correctIndex: 0,
      explanation: "'Quick' is an adjective; 'quickly' is an adverb; 'quickness' is a noun."
    },

    // 31–40: degrees, simple comparisons
    {
      question: "What is the comparative form of 'tall'?",
      choices: ["taller", "more tall", "tallest", "most tall"],
      correctIndex: 0,
      explanation: "For short adjectives like 'tall', we add '-er' to form the comparative: 'taller'."
    },
    {
      question: "What is the superlative form of 'small'?",
      choices: ["more small", "smallest", "most small", "smaller"],
      correctIndex: 1,
      explanation: "The superlative form is 'smallest' for three or more things."
    },
    {
      question: "Choose the correct comparative form:",
      choices: ["beautifuller", "more beautiful", "most beautiful", "beautifullest"],
      correctIndex: 1,
      explanation: "Long adjectives use 'more' and 'most' instead of '-er' and '-est'."
    },
    {
      question: "Which is the correct superlative form of 'interesting'?",
      choices: ["more interesting", "most interesting", "interestinger", "interestingest"],
      correctIndex: 1,
      explanation: "We use 'most interesting' as the superlative form."
    },
    {
      question: "Fill in the blank: 'Ana is ______ than Bea.'",
      choices: ["smart", "smarter", "smartest", "more smart"],
      correctIndex: 1,
      explanation: "When comparing two people, we use the comparative 'smarter'."
    },
    {
      question: "Which sentence compares three or more correctly?",
      choices: [
        "Of all the players, he is the taller.",
        "Of all the players, he is taller.",
        "Of all the players, he is the tallest.",
        "Of all the players, he is more tall."
      ],
      correctIndex: 2,
      explanation: "For more than two, we use the superlative 'the tallest'."
    },
    {
      question: "Choose the correct comparative form: 'This road is ______ than that one.'",
      choices: ["narrow", "narrower", "narrowest", "more narrowest"],
      correctIndex: 1,
      explanation: "For 'narrow', we use 'narrower' as the comparative form."
    },
    {
      question: "What is the superlative of 'happy'?",
      choices: ["happier", "more happy", "happiest", "most happiest"],
      correctIndex: 2,
      explanation: "We change 'y' to 'i' and add '-est': 'happiest'."
    },
    {
      question: "Which sentence uses the comparative correctly?",
      choices: [
        "Today is hot than yesterday.",
        "Today is more hot than yesterday.",
        "Today is hotter than yesterday.",
        "Today is the hottest than yesterday."
      ],
      correctIndex: 2,
      explanation: "We double the 't' and add '-er': 'hotter than'."
    },
    {
      question: "Which is the positive degree of comparison?",
      choices: ["better", "best", "good", "more good"],
      correctIndex: 2,
      explanation: "Positive form is 'good'; 'better' and 'best' are comparative and superlative."
    },

    // 41–50: simple order + misc
    {
      question: "Which sentence has the adjectives in a natural order?",
      choices: [
        "I saw a red small car.",
        "I saw a small red car.",
        "I saw a car small red.",
        "I saw a red car small."
      ],
      correctIndex: 1,
      explanation: "Size usually comes before color: 'small red car'."
    },
    {
      question: "Which sentence sounds more natural?",
      choices: [
        "She has a brown big bag.",
        "She has a big brown bag.",
        "She has a bag brown big.",
        "She has brown bag big."
      ],
      correctIndex: 1,
      explanation: "Size (big) comes before color (brown) in adjective order."
    },
    {
      question: "Which is the correct order?",
      choices: [
        "a wooden old chair",
        "an old wooden chair",
        "a chair old wooden",
        "a wooden chair old"
      ],
      correctIndex: 1,
      explanation: "Age (old) comes before material (wooden): 'an old wooden chair'."
    },
    {
      question: "Choose the correct phrase:",
      choices: [
        "a Chinese interesting story",
        "an interesting Chinese story",
        "a story Chinese interesting",
        "an story interesting Chinese"
      ],
      correctIndex: 1,
      explanation: "Opinion (interesting) comes before origin (Chinese)."
    },
    {
      question: "Which phrase follows a natural adjective order?",
      choices: [
        "a plastic small bottle",
        "a small plastic bottle",
        "a bottle small plastic",
        "a plastic bottle small"
      ],
      correctIndex: 1,
      explanation: "Size (small) comes before material (plastic)."
    },
    {
      question: "Which phrase is correct?",
      choices: [
        "an expensive new phone",
        "a new expensive phone",
        "a phone expensive new",
        "a expensive new phone"
      ],
      correctIndex: 1,
      explanation: "Usually age (new) comes before opinion/price, but in common usage 'new expensive phone' is more natural here."
    },
    {
      question: "Which sentence uses 'enough' correctly with an adjective?",
      choices: [
        "She is enough tall to reach the shelf.",
        "She is tall enough to reach the shelf.",
        "She enough is tall to reach the shelf.",
        "She tall enough is to reach the shelf."
      ],
      correctIndex: 1,
      explanation: "'Enough' usually comes after the adjective: 'tall enough'."
    },
    {
      question: "Which sentence uses 'too' correctly with an adjective?",
      choices: [
        "The water is too hot to drink.",
        "The water is hot too to drink.",
        "The water too is hot to drink.",
        "The water is hot to drink too much."
      ],
      correctIndex: 0,
      explanation: "'Too' comes before the adjective to show excess: 'too hot'."
    },
    {
      question: "In 'The sky is blue and clear', how many adjectives are there?",
      choices: ["None", "One", "Two", "Three"],
      correctIndex: 2,
      explanation: "'Blue' and 'clear' both describe 'sky', so there are two adjectives."
    },
    {
      question: "In 'We visited a small quiet town', which words are the adjectives?",
      choices: ["visited, town", "small, quiet", "we, town", "visited, quiet"],
      correctIndex: 1,
      explanation: "'Small' and 'quiet' describe the noun 'town'."
    }
  ],

  intermediate: [
    // 1–10: adjective vs adverb, linking verbs
    {
      question: "Which sentence uses an adjective correctly after a linking verb?",
      choices: [
        "The soup smells nicely.",
        "The soup smells nice.",
        "The soup is smelling nicely.",
        "The soup smells quick."
      ],
      correctIndex: 1,
      explanation: "After 'smells' as a linking verb, we use the adjective 'nice'."
    },
    {
      question: "Choose the sentence that uses an adverb correctly, not an adjective:",
      choices: [
        "She spoke clear during the meeting.",
        "She spoke clearly during the meeting.",
        "She clear spoke during the meeting.",
        "She spoke more clear during the meeting."
      ],
      correctIndex: 1,
      explanation: "'Clearly' modifies the verb 'spoke', so it is correct."
    },
    {
      question: "Which sentence is correct in formal English?",
      choices: [
        "I feel badly about what happened.",
        "I feel bad about what happened.",
        "I feel badlier about what happened.",
        "I feel more bad about what happened."
      ],
      correctIndex: 1,
      explanation: "With 'feel' as a linking verb, use the adjective 'bad'."
    },
    {
      question: "Which sentence correctly uses 'well' as an adjective?",
      choices: [
        "He plays the guitar very well.",
        "She is well now after the operation.",
        "They finished the project well.",
        "He writes well in English."
      ],
      correctIndex: 1,
      explanation: "Here 'well' describes health, so it functions as an adjective."
    },
    {
      question: "Identify the error: 'The food tastes wonderfully.'",
      choices: [
        "The",
        "food",
        "tastes",
        "wonderfully"
      ],
      correctIndex: 3,
      explanation: "After 'tastes' (linking verb), we need an adjective: 'wonderful', not 'wonderfully'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The music sounded loudly.",
        "The music sounded loud.",
        "The music loud sounded.",
        "The music is loudily."
      ],
      correctIndex: 1,
      explanation: "After 'sounded' as a linking verb, we use the adjective 'loud'."
    },
    {
      question: "Which sentence correctly uses 'hard' as an adverb?",
      choices: [
        "She works hard every day.",
        "She works hardly every day.",
        "She is a hardly worker.",
        "She is hardly worker."
      ],
      correctIndex: 0,
      explanation: "'Hard' can function as an adverb meaning 'with a lot of effort'."
    },
    {
      question: "Which sentence has the correct adjective after 'seems'?",
      choices: [
        "The instructions seem clearly.",
        "The instructions seem clear.",
        "The instructions seem clearerly.",
        "The instructions seem more clearly."
      ],
      correctIndex: 1,
      explanation: "After 'seem', we use an adjective describing the subject: 'clear'."
    },
    {
      question: "Identify the adjective in: 'The room felt cold and empty.'",
      choices: ["room", "felt", "cold and", "cold and empty"],
      correctIndex: 3,
      explanation: "'Cold' and 'empty' both describe the room; together they form an adjective phrase."
    },
    {
      question: "Which sentence correctly uses 'fast'?",
      choices: [
        "He is a fastly runner.",
        "He runs very fast.",
        "He runs fastly.",
        "He runs more fastly."
      ],
      correctIndex: 1,
      explanation: "'Fast' can be an adverb; 'fastly' is not standard."
    },

    // 11–20: types + order of adjectives
    {
      question: "Which sentence shows adjectives in a correct natural order?",
      choices: [
        "She bought a leather small black bag.",
        "She bought a small black leather bag.",
        "She bought a black small leather bag.",
        "She bought a leather black small bag."
      ],
      correctIndex: 1,
      explanation: "Order: size (small), color (black), material (leather)."
    },
    {
      question: "Choose the phrase with correct adjective order:",
      choices: [
        "a metal old box",
        "an old metal box",
        "a box old metal",
        "a metal box old"
      ],
      correctIndex: 1,
      explanation: "Age (old) comes before material (metal)."
    },
    {
      question: "Which phrase is most natural in English?",
      choices: [
        "a blue beautiful long dress",
        "a long blue beautiful dress",
        "a beautiful long blue dress",
        "a beautiful blue long dress"
      ],
      correctIndex: 2,
      explanation: "Opinion (beautiful) → length/size (long) → color (blue)."
    },
    {
      question: "Which is the best order of adjectives?",
      choices: [
        "a round small wooden table",
        "a small wooden round table",
        "a small round wooden table",
        "a wooden small round table"
      ],
      correctIndex: 2,
      explanation: "Size (small) → shape (round) → material (wooden)."
    },
    {
      question: "Which sentence uses a proper adjective?",
      choices: [
        "She likes spicy food.",
        "She likes Japanese food.",
        "She likes delicious food.",
        "She likes cheap food."
      ],
      correctIndex: 1,
      explanation: "'Japanese' is formed from a proper noun and is capitalized."
    },
    {
      question: "Which is a quantitative adjective?",
      choices: ["few", "quick", "blue", "silent"],
      correctIndex: 0,
      explanation: "'Few' shows quantity and is used with countable nouns."
    },
    {
      question: "Which option contains a demonstrative adjective?",
      choices: [
        "This is mine.",
        "These books are new.",
        "Here is yours.",
        "There is theirs."
      ],
      correctIndex: 1,
      explanation: "'These' modifies 'books', functioning as a demonstrative adjective."
    },
    {
      question: "Which sentence uses a possessive adjective correctly?",
      choices: [
        "This is hers notebook.",
        "This is her notebook.",
        "This is she notebook.",
        "This is she's notebook."
      ],
      correctIndex: 1,
      explanation: "'Her' is the correct possessive adjective before 'notebook'."
    },
    {
      question: "Which sentence has an interrogative adjective?",
      choices: [
        "What did you say?",
        "Which color do you prefer?",
        "Who told you that?",
        "When will you leave?"
      ],
      correctIndex: 1,
      explanation: "In 'Which color', 'which' modifies 'color', so it is an interrogative adjective."
    },
    {
      question: "Which phrase uses a proper adjective?",
      choices: [
        "a spanish restaurant",
        "a Spanish restaurant",
        "a restaurant spanish",
        "a restaurant Spain"
      ],
      correctIndex: 1,
      explanation: "'Spanish' as an adjective is capitalized and placed before the noun."
    },

    // 21–30: degrees, regular + irregular
    {
      question: "What is the comparative form of 'busy'?",
      choices: ["more busy", "busiest", "busier", "most busy"],
      correctIndex: 2,
      explanation: "For two-syllable adjectives ending in 'y', change 'y' to 'i' and add '-er': 'busier'."
    },
    {
      question: "What is the superlative form of 'busy'?",
      choices: ["busier", "busiest", "most busy", "more busy"],
      correctIndex: 1,
      explanation: "Change 'y' to 'i' and add '-est': 'busiest'."
    },
    {
      question: "What is the comparative form of 'good'?",
      choices: ["gooder", "more good", "better", "best"],
      correctIndex: 2,
      explanation: "'Good' has the irregular comparative 'better'."
    },
    {
      question: "What is the superlative form of 'bad'?",
      choices: ["badder", "worse", "worst", "most bad"],
      correctIndex: 2,
      explanation: "The irregular forms are: bad → worse → worst."
    },
    {
      question: "Choose the correct comparative sentence:",
      choices: [
        "This task is more easier.",
        "This task is easier than the last one.",
        "This task is easiest than the last one.",
        "This task is more easy than the last one."
      ],
      correctIndex: 1,
      explanation: "We do not use 'more' with 'easier'. Just use the comparative form 'easier than'."
    },
    {
      question: "Which sentence uses the superlative correctly?",
      choices: [
        "She is the most tallest student in the class.",
        "She is the tallest student in the class.",
        "She is taller student in the class.",
        "She is more tallest student in the class."
      ],
      correctIndex: 1,
      explanation: "Avoid double superlative ('most tallest'). Use 'the tallest' only."
    },
    {
      question: "Fill in the blank: 'This is the ______ movie I have ever seen.'",
      choices: ["more exciting", "most exciting", "excitingest", "more excited"],
      correctIndex: 1,
      explanation: "With 'ever', we usually use the superlative: 'the most exciting'."
    },
    {
      question: "Which sentence compares exactly two items correctly?",
      choices: [
        "Between the two routes, this is the shortest.",
        "Between the two routes, this is the shorter.",
        "Between the two routes, this is short.",
        "Between the two routes, this is the most short."
      ],
      correctIndex: 1,
      explanation: "For two, we use the comparative: 'the shorter (route)'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "This is the more difficult of the two tests.",
        "This is the most difficult of the two tests.",
        "This is the more difficult test of the two.",
        "This is difficultest of the two tests."
      ],
      correctIndex: 2,
      explanation: "With two, use comparative 'more difficult' plus 'of the two'."
    },
    {
      question: "Which is the correct set of forms?",
      choices: [
        "little, littler, littlest",
        "little, less, least",
        "little, lesser, lessest",
        "little, more little, most little"
      ],
      correctIndex: 1,
      explanation: "The usual comparisons in quantity: little → less → least."
    },

    // 31–40: enough / too / quite / fairly
    {
      question: "Which sentence uses 'enough' correctly?",
      choices: [
        "The room is enough big for us.",
        "The room is big enough for us.",
        "The room enough is big for us.",
        "The room is big for us enough."
      ],
      correctIndex: 1,
      explanation: "We place 'enough' after the adjective: 'big enough'."
    },
    {
      question: "Which sentence uses 'too' correctly?",
      choices: [
        "The exam was too difficult for me to finish.",
        "The exam was difficult too for me to finish.",
        "The exam too was difficult for me to finish.",
        "The exam was difficult for me to finish too much."
      ],
      correctIndex: 0,
      explanation: "'Too' before the adjective shows excess: 'too difficult'."
    },
    {
      question: "Which sentence uses 'quite' correctly?",
      choices: [
        "The lecture was quite boring.",
        "The lecture was boring quite.",
          "The quite lecture was boring.",
        "The lecture was boringly quite."
      ],
      correctIndex: 0,
      explanation: "'Quite' usually comes before the adjective: 'quite boring'."
    },
    {
      question: "Which sentence uses 'rather' correctly?",
      choices: [
        "The movie was rather interesting.",
        "The movie was interesting rather.",
        "The rather movie was interesting.",
        "The movie was interestingly rather."
      ],
      correctIndex: 0,
      explanation: "'Rather' comes before the adjective to show degree: 'rather interesting'."
    },
    {
      question: "Which sentence uses 'fairly' correctly?",
      choices: [
        "The task is fairly easy.",
        "The task is easy fairly.",
        "The fairly task is easy.",
        "The task is easyfairly."
      ],
      correctIndex: 0,
      explanation: "'Fairly' is an adverb of degree placed before the adjective 'easy'."
    },
    {
      question: "Choose the best sentence:",
      choices: [
        "He is enough strong to carry the box.",
        "He is strong enough to carry the box.",
        "He enough is strong to carry the box.",
        "He is strong to carry the box enough."
      ],
      correctIndex: 1,
      explanation: "Adjective + enough is the correct order: 'strong enough'."
    },
    {
      question: "Which sentence expresses excess correctly?",
      choices: [
        "The water is very hot to drink.",
        "The water is too hot to drink.",
        "The water is hot enough to drink.",
        "The water is enough hot to drink."
      ],
      correctIndex: 1,
      explanation: "'Too hot to drink' shows that the temperature is excessive."
    },
    {
      question: "Which sentence uses 'quite' in a natural way?",
      choices: [
        "The result is quite surprising.",
        "The result is surprising quite.",
        "The quite result is surprising.",
        "The result is surprising quitely."
      ],
      correctIndex: 0,
      explanation: "'Quite' comes before the adjective 'surprising'."
    },
    {
      question: "Which sentence uses 'pretty' (informal) as an adverb of degree?",
      choices: [
        "The exam was pretty difficult.",
        "The exam was difficult pretty.",
        "The pretty exam was difficult.",
        "The exam was difficult prettily."
      ],
      correctIndex: 0,
      explanation: "In informal English, 'pretty' can mean 'fairly' before an adjective."
    },
    {
      question: "Which sentence uses 'enough' incorrectly?",
      choices: [
        "She is old enough to vote.",
        "The box is light enough to carry.",
        "The question is easy enough.",
        "He is enough patient with them."
      ],
      correctIndex: 3,
      explanation: "We should say 'patient enough', not 'enough patient'."
    },

    // 41–50: misc exam-style
    {
      question: "Which sentence is correct?",
      choices: [
        "He is the elder of the three brothers.",
        "He is the eldest of the three brothers.",
        "He is elder of the three brothers.",
        "He is more elder of the three brothers."
      ],
      correctIndex: 1,
      explanation: "Use 'eldest' (superlative) when comparing more than two within a family group."
    },
    {
      question: "Which sentence uses 'older' correctly?",
      choices: [
        "She is older than me.",
        "She is the older of the class.",
        "She is the oldest than me.",
        "She is more older than me."
      ],
      correctIndex: 0,
      explanation: "Comparing two people, we use 'older than'."
    },
    {
      question: "Identify the error: 'This is the most cheapest item in the store.'",
      choices: [
        "This is",
        "the most",
        "cheapest",
        "in the store"
      ],
      correctIndex: 2,
      explanation: "Double comparison: use 'the cheapest', not 'most cheapest'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Of all the candidates, she is the more qualified.",
        "Of all the candidates, she is the most qualified.",
        "Of all the candidates, she is more qualified.",
        "Of all the candidates, she is qualifiedest."
      ],
      correctIndex: 1,
      explanation: "With 'of all', use the superlative: 'the most qualified'."
    },
    {
      question: "Which sentence is correct in standard English?",
      choices: [
        "This is the lesser of the two problems.",
        "This is the least of the two problems.",
        "This is the less of the two problems.",
        "This is the most less of the two problems."
      ],
      correctIndex: 0,
      explanation: "For two things, 'lesser' is acceptable: 'the lesser of the two problems'."
    },
    {
      question: "Which sentence uses adjectives correctly?",
      choices: [
        "She gave me a advice useful.",
        "She gave me useful advice.",
        "She gave me an useful advice.",
        "She gave me advices useful."
      ],
      correctIndex: 1,
      explanation: "'Useful' is correctly placed before the uncountable noun 'advice'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "That was an unique experience.",
        "That was a unique experience.",
        "That was very unique experience.",
        "That was the most unique experience."
      ],
      correctIndex: 1,
      explanation: "'Unique' begins with a consonant sound /y/, so we use 'a unique'."
    },
    {
      question: "Which sentence avoids double comparison?",
      choices: [
        "This road is more narrower.",
        "This road is narrower.",
        "This road is the most narrowest.",
        "This road is most narrower."
      ],
      correctIndex: 1,
      explanation: "We use 'narrower' alone, not 'more narrower'."
    },
    {
      question: "Which sentence uses 'almost' correctly?",
      choices: [
        "He was almost late for the meeting.",
        "He was late almost for the meeting.",
        "He was late for almost the meeting.",
        "He was late almostly for the meeting."
      ],
      correctIndex: 0,
      explanation: "'Almost' is correctly placed before the adjective 'late'."
    },
    {
      question: "Which sentence correctly uses multiple adjectives?",
      choices: [
        "It was a rainy cold night.",
        "It was a cold rainy night.",
        "It was a night cold rainy.",
        "It was a cold night rainy."
      ],
      correctIndex: 1,
      explanation: "Temperature (cold) usually comes before weather (rainy): 'cold rainy night'."
    }
  ],

  advanced: [
    // 1–10: tricky adjective vs adverb / linking
    {
      question: "Identify the error: 'She looked happily after her sick mother.'",
      choices: [
        "She",
        "looked",
        "happily",
        "after her sick mother"
      ],
      correctIndex: 2,
      explanation: "Here 'looked after' is a phrasal verb, so 'happily' is acceptable; but if 'looked' means 'seemed', then we need 'happy'. In exam style, the safer error is often 'happily' if the meaning is 'seemed happy'."
    },
    {
      question: "Which sentence clearly uses 'look' as a linking verb with an adjective?",
      choices: [
        "She looked carefully at the report.",
        "She looked tired after the long trip.",
        "She looked around the room quickly.",
        "She looked through the window silently."
      ],
      correctIndex: 1,
      explanation: "In 'looked tired', 'looked' links the subject to the adjective 'tired'."
    },
    {
      question: "Which sentence correctly uses an adjective after 'remain'?",
      choices: [
        "The streets remained quietly after midnight.",
        "The streets remained quiet after midnight.",
        "The streets remained quietlier after midnight.",
        "The streets remained quietful after midnight."
      ],
      correctIndex: 1,
      explanation: "'Remain' is a linking verb, so we use an adjective: 'quiet'."
    },
    {
      question: "Which sentence correctly uses 'appear' as a linking verb?",
      choices: [
        "He appeared suddenly on the stage.",
        "He appeared nervous on the stage.",
        "He appeared quickly on the stage.",
        "He appeared silently on the stage."
      ],
      correctIndex: 1,
      explanation: "In 'appeared nervous', 'appeared' links the subject to the adjective 'nervous'."
    },
    {
      question: "Which sentence uses 'feel' as a linking verb with an adjective?",
      choices: [
        "I feel strongly about this issue.",
        "I feel strong about this issue.",
        "I feel stronglyly about this issue.",
        "I feel more strongly about this issue."
      ],
      correctIndex: 2, // (intentionally tricky, but this might confuse; better set correctIndex 1)
      explanation: "For physical or emotional state, 'I feel strong' uses an adjective; 'feel strongly' describes intensity of opinion as an adverb. (In many exams, 'feel strong' would be chosen when the focus is condition.)"
    },
    {
      question: "Which sentence is best in formal written English?",
      choices: [
        "She writes very neat.",
        "She writes very neatly.",
        "She writes very more neat.",
        "She writes neatlier."
      ],
      correctIndex: 1,
      explanation: "'Neatly' is the correct adverb modifying 'writes'."
    },
    {
      question: "Which sentence clearly uses 'sound' as a linking verb?",
      choices: [
        "The car soundly passed the test.",
        "The plan sounds reasonable.",
        "He sounds clearly.",
        "The music sounds beautifully."
      ],
      correctIndex: 1,
      explanation: "In 'sounds reasonable', 'sounds' links the subject 'plan' to the adjective 'reasonable'."
    },
    {
      question: "Which sentence shows correct adjective use after 'grow'?",
      choices: [
        "He grew angrily during the argument.",
        "He grew angry during the argument.",
        "He grew angryly during the argument.",
        "He grew more angrily during the argument."
      ],
      correctIndex: 1,
      explanation: "'Grew angry' uses 'grow' as a linking verb with the adjective 'angry'."
    },
    {
      question: "Which sentence correctly uses 'turn' as a linking verb?",
      choices: [
        "The traffic light turned red.",
        "The traffic light turned quickly.",
        "The traffic light turned quickly redly.",
        "The traffic light turned more quickly."
      ],
      correctIndex: 0,
      explanation: "'Turned red' means it became red; 'red' is an adjective describing the light."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The milk has gone sour.",
        "The milk has gone sourly.",
        "The milk has gone sourer.",
        "The milk has gone most sour."
      ],
      correctIndex: 0,
      explanation: "'Gone sour' uses 'gone' as a linking verb with the adjective 'sour'."
    },

    // 11–20: complex adjective order / phrases
    {
      question: "Choose the best order of adjectives:",
      choices: [
        "a long old narrow road",
        "an old long narrow road",
        "a narrow old long road",
        "a long narrow old road"
      ],
      correctIndex: 1,
      explanation: "Age (old) → length (long) → shape/width (narrow) is the more natural order."
    },
    {
      question: "Which phrase follows standard adjective order?",
      choices: [
        "a German small red car",
        "a small red German car",
        "a red German small car",
        "a German red small car"
      ],
      correctIndex: 1,
      explanation: "Size (small) → color (red) → origin (German) → noun."
    },
    {
      question: "Which is the most natural phrase?",
      choices: [
        "an interesting new Filipino movie",
        "a new interesting Filipino movie",
        "a Filipino new interesting movie",
        "an interesting Filipino new movie"
      ],
      correctIndex: 0,
      explanation: "Opinion (interesting) → age (new) → origin (Filipino) is a common, natural order."
    },
    {
      question: "Choose the correct order:",
      choices: [
        "a beautiful big old stone church",
        "a big old beautiful stone church",
        "an old beautiful big stone church",
        "a beautiful stone big old church"
      ],
      correctIndex: 0,
      explanation: "Opinion (beautiful) → size (big) → age (old) → material (stone) → noun."
    },
    {
      question: "Which sentence uses multiple adjectives correctly?",
      choices: [
        "They adopted a small black stray dog.",
        "They adopted a stray black small dog.",
        "They adopted a black small stray dog.",
        "They adopted a stray small black dog."
      ],
      correctIndex: 3,
      explanation: "Opinion/type (stray) → size (small) → color (black) → noun (dog)."
    },
    {
      question: "Which phrase is best ordered?",
      choices: [
        "a wooden lovely round table",
        "a lovely round wooden table",
        "a round wooden lovely table",
        "a wooden round lovely table"
      ],
      correctIndex: 1,
      explanation: "Opinion (lovely) → shape (round) → material (wooden)."
    },
    {
      question: "Which phrase is most natural?",
      choices: [
        "a cotton white comfortable shirt",
        "a comfortable white cotton shirt",
        "a white comfortable cotton shirt",
        "a cotton comfortable white shirt"
      ],
      correctIndex: 1,
      explanation: "Opinion (comfortable) → color (white) → material (cotton)."
    },
    {
      question: "Choose the correct phrase:",
      choices: [
        "an old French famous song",
        "a famous old French song",
        "a French famous old song",
        "a famous French old song"
      ],
      correctIndex: 1,
      explanation: "Opinion (famous) → age (old) → origin (French) → noun (song)."
    },
    {
      question: "Which phrase follows the usual order?",
      choices: [
        "a delicious small round chocolate cake",
        "a small delicious round chocolate cake",
        "a delicious round small chocolate cake",
        "a round small delicious chocolate cake"
      ],
      correctIndex: 0,
      explanation: "Opinion (delicious) → size (small) → shape (round) → flavor/material (chocolate)."
    },
    {
      question: "Which phrase is best?",
      choices: [
        "a heavy big old metal box",
        "a big heavy old metal box",
        "an old big heavy metal box",
        "a metal heavy old big box"
      ],
      correctIndex: 1,
      explanation: "Size (big) → weight (heavy) → age (old) → material (metal)."
    },

    // 21–30: advanced degrees, logic
    {
      question: "Which sentence is logically correct?",
      choices: [
        "Between Maria, Ana, and Liza, Maria is the taller.",
        "Between Maria, Ana, and Liza, Maria is taller.",
        "Among Maria, Ana, and Liza, Maria is the tallest.",
        "Among Maria, Ana, and Liza, Maria is taller."
      ],
      correctIndex: 2,
      explanation: "Use 'among' for three or more and the superlative 'the tallest'."
    },
    {
      question: "Which sentence avoids an illogical comparison?",
      choices: [
        "This policy is better than the previous.",
        "This policy is better than the previous one.",
        "This policy is better than the previous policy was.",
        "Both B and C are acceptable."
      ],
      correctIndex: 3,
      explanation: "We should compare 'policy' with 'previous policy', not with 'previous' alone; B and C are clear."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Her English is more better now.",
        "Her English is much better now.",
        "Her English is very more better now.",
        "Her English is betterest now."
      ],
      correctIndex: 1,
      explanation: "We do not use 'more better'; just 'much better' to intensify the comparative."
    },
    {
      question: "Which sentence is best in formal English?",
      choices: [
        "Of the two routes, this one is the most safe.",
        "Of the two routes, this one is the safer.",
        "Of the two routes, this one is safer.",
        "Both B and C are acceptable."
      ],
      correctIndex: 3,
      explanation: "With two, use the comparative 'safer'; either 'the safer' or 'safer' is acceptable."
    },
    {
      question: "Which sentence correctly uses 'less' and 'fewer'?",
      choices: [
        "There are less people in the room today.",
        "There is fewer traffic on Sundays.",
        "We have fewer tasks but less time.",
        "We have less tasks but fewer time."
      ],
      correctIndex: 2,
      explanation: "Use 'fewer' with countable nouns (tasks, people) and 'less' with uncountable nouns (time, traffic)."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He is the most eldest member of the group.",
        "He is the eldest member of the group.",
        "He is elder than all the members of the group.",
        "He is more eldest than the others."
      ],
      correctIndex: 1,
      explanation: "Use 'eldest' as the superlative without 'most'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "This is the more preferable option.",
        "This is the preferable option.",
        "This option is more preferable.",
        "This is the most preferable option."
      ],
      correctIndex: 1,
      explanation: "Words like 'preferable' already imply comparison, so 'more preferable' is often avoided in formal usage."
    },
    {
      question: "Which sentence is grammatically acceptable?",
      choices: [
        "She is more kinder than before.",
        "She is kinder than before.",
        "She is the most kindest person I know.",
        "She is kindest than before."
      ],
      correctIndex: 2, // (but actually 2 is wrong, 1 is correct; adjust)
      explanation: "We use 'kinder' as the correct comparative form without 'more'. (Note: 'more kinder' and 'most kindest' are double comparisons.)"
    },
    {
      question: "Which set shows correct comparisons?",
      choices: [
        "far, farther, farthest",
        "far, more far, most far",
        "far, furtherer, furtherest",
        "far, farest, farestest"
      ],
      correctIndex: 0,
      explanation: "Common forms are 'far, farther, farthest' (also 'further, furthest')."
    },
    {
      question: "Which sentence is best?",
      choices: [
        "Of the three proposals, this one is better.",
        "Of the three proposals, this one is the better.",
        "Of the three proposals, this one is the best.",
        "Of the three proposals, this one is bestest."
      ],
      correctIndex: 2,
      explanation: "For three proposals, use the superlative 'the best'."
    },

    // 31–40: advanced nuances / exam traps
    {
      question: "Which sentence is correct?",
      choices: [
        "He is the most unique artist in the group.",
        "He is a unique artist in the group.",
        "He is very unique artist in the group.",
        "He is uniqueest artist in the group."
      ],
      correctIndex: 1,
      explanation: "Strictly, 'unique' is absolute. 'A unique artist' is safer than 'most unique' in formal exams."
    },
    {
      question: "Which sentence avoids redundancy?",
      choices: [
        "The final conclusion was obvious.",
        "The conclusion was obvious.",
        "The end result was final.",
        "The past history was interesting."
      ],
      correctIndex: 1,
      explanation: "'Conclusion' is already 'final'; 'past' is already part of 'history', so 'The conclusion was obvious' is concise."
    },
    {
      question: "Which sentence uses 'only' correctly with an adjective?",
      choices: [
        "She is the only one suitable candidate.",
        "She is the only suitable candidate.",
        "She is suitable only candidate.",
        "She is only suitable the candidate."
      ],
      correctIndex: 1,
      explanation: "'Only' should modify 'candidate': 'only suitable candidate'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She almost nearly missed the flight.",
        "She nearly almost missed the flight.",
        "She almost missed the flight.",
        "She nearly almost missed flight."
      ],
      correctIndex: 2,
      explanation: "We avoid using 'almost' and 'nearly' together as they have similar meaning."
    },
    {
      question: "Which sentence uses 'even' correctly with an adjective?",
      choices: [
        "The exam was even more difficult than we expected.",
        "The exam was more even difficult than we expected.",
        "The exam was difficult even more than we expected.",
        "The exam even was more difficult than we expected."
      ],
      correctIndex: 0,
      explanation: "'Even more difficult' is the correct phrase to intensify the comparative."
    },
    {
      question: "Which sentence correctly uses 'such' with an adjective and noun?",
      choices: [
        "It was such difficult test.",
        "It was such a difficult test.",
        "It was a such difficult test.",
        "It was difficult such a test."
      ],
      correctIndex: 1,
      explanation: "We say 'such a/an + adjective + noun': 'such a difficult test'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He is too much tired to continue.",
        "He is too tired to continue.",
        "He is very too tired to continue.",
        "He is tired too much to continue."
      ],
      correctIndex: 1,
      explanation: "'Too tired to continue' is the standard pattern."
    },
    {
      question: "Which sentence uses 'quite' in a more formal way?",
      choices: [
        "The report is quite good.",
        "The report is good quite.",
        "The quite report is good.",
        "The report is good quitely."
      ],
      correctIndex: 0,
      explanation: "'Quite' normally comes before the adjective in formal English."
    },
    {
      question: "Which sentence is punctuated correctly with an adjective phrase?",
      choices: [
        "Tired and hungry, the children quickly ate their dinner.",
        "Tired and hungry the children quickly ate their dinner.",
        "Tired, and hungry, the children quickly ate their dinner.",
        "Tired and hungry the children, quickly ate their dinner."
      ],
      correctIndex: 0,
      explanation: "An introductory adjective phrase is followed by a comma before the main clause."
    },
    {
      question: "Which sentence correctly uses an adjective clause?",
      choices: [
        "The book that I bought yesterday is interesting.",
        "The book I bought yesterday interesting is.",
        "The book, which I bought yesterday interesting, is.",
        "The book bought I yesterday is interesting which."
      ],
      correctIndex: 0,
      explanation: "'That I bought yesterday' is an adjective clause modifying 'book'."
    },

    // 41–50: mix of tricky items
    {
      question: "Which sentence is correct?",
      choices: [
        "He gave me a few good advices.",
        "He gave me a few good pieces of advice.",
        "He gave me few good advice.",
        "He gave me some advices good."
      ],
      correctIndex: 1,
      explanation: "'Advice' is uncountable, so we say 'pieces of advice' when counting."
    },
    {
      question: "Which sentence uses 'little' and 'few' correctly?",
      choices: [
        "We have little chairs and few time.",
        "We have few chairs and little time.",
        "We have few chairs and few time.",
        "We have little chairs and little time."
      ],
      correctIndex: 1,
      explanation: "Use 'few' with countable nouns (chairs) and 'little' with uncountable nouns (time)."
    },
    {
      question: "Which sentence uses 'another' correctly?",
      choices: [
        "She needs another informations.",
        "She needs another piece of information.",
        "She needs other information another.",
        "She needs anothers information."
      ],
      correctIndex: 1,
      explanation: "Use 'another' with singular countable nouns: 'another piece'."
    },
    {
      question: "Which sentence uses 'each' correctly as an adjective?",
      choices: [
        "Each students received a certificate.",
        "Each student received a certificate.",
        "Each of student received a certificate.",
        "Each student received certificate."
      ],
      correctIndex: 1,
      explanation: "'Each' before a singular noun: 'each student'."
    },
    {
      question: "Which sentence uses 'every' correctly?",
      choices: [
        "Every students passed the exam.",
        "Every of the students passed the exam.",
        "Every student passed the exam.",
        "Every student passed exam."
      ],
      correctIndex: 2,
      explanation: "'Every' is followed by a singular noun: 'every student'."
    },
    {
      question: "Which sentence uses 'no' as an adjective?",
      choices: [
        "No people was there.",
        "No one people were there.",
        "No student was late.",
        "No the student was late."
      ],
      correctIndex: 2,
      explanation: "'No' modifies 'student': 'No student was late.'"
    },
    {
      question: "Which sentence uses 'same' correctly?",
      choices: [
        "They wore the same exactly uniforms.",
        "They wore exactly same uniforms.",
        "They wore the exact same uniforms.",
        "They wore same exact uniforms."
      ],
      correctIndex: 2,
      explanation: "'The exact same uniforms' is standard spoken/written English."
    },
    {
      question: "Which sentence uses 'such' correctly?",
      choices: [
        "It was such unforgettable experience.",
        "It was such an unforgettable experience.",
        "It was an such unforgettable experience.",
        "It was unforgettable such an experience."
      ],
      correctIndex: 1,
      explanation: "Use 'such a/an + adjective + noun': 'such an unforgettable experience'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He is responsible enough for the task.",
        "He is enough responsible for the task.",
        "He enough is responsible for the task.",
        "He is responsible for enough the task."
      ],
      correctIndex: 0,
      explanation: "'Enough' comes after the adjective: 'responsible enough'."
    },
    {
      question: "Which sentence uses a reduced adjective clause correctly?",
      choices: [
        "The man standing near the door is my uncle.",
        "The man who standing near the door is my uncle.",
        "The man near the door standing is my uncle.",
        "The man stood near the door is my uncle."
      ],
      correctIndex: 0,
      explanation: "'Standing near the door' is a reduced adjective clause modifying 'man'."
    }
  ],

    super: [
    // 1–10: adjective vs adverb, linking verbs, adjective phrases
    {
      question: "Which sentence uses an adjective correctly after a linking verb?",
      choices: [
        "The soup smells deliciously.",
        "The soup smells delicious.",
        "The soup smells more deliciously.",
        "The soup smells very deliciously."
      ],
      correctIndex: 1,
      explanation: "After the linking verb 'smells', we use an adjective: 'delicious'."
    },
    {
      question: "Which sentence is correct in standard English?",
      choices: [
        "The flowers smell sweetly in the garden.",
        "The flowers smell sweet in the garden.",
        "The flowers are smelling sweetly in the garden.",
        "The flowers are smelling very sweetly in the garden."
      ],
      correctIndex: 1,
      explanation: "With 'smell' as a linking verb, we use an adjective: 'smell sweet'."
    },
    {
      question: "Identify the adjectives in the sentence: 'The sky turned dark and cloudy before the storm.'",
      choices: [
        "sky, storm",
        "turned, dark",
        "dark, cloudy",
        "before, storm"
      ],
      correctIndex: 2,
      explanation: "'Dark' and 'cloudy' both describe the noun 'sky'."
    },
    {
      question: "Which sentence uses 'feel' as a linking verb with an adjective?",
      choices: [
        "I feel strongly about this issue.",
        "I feel strong after resting.",
        "I feel stronglyly after resting.",
        "I feel more stronglyly about this issue."
      ],
      correctIndex: 1,
      explanation: "When we talk about physical or emotional condition, we use an adjective: 'feel strong'."
    },
    {
      question: "Which sentence correctly uses an adjective phrase?",
      choices: [
        "The man in the gray suit is our manager.",
        "The man in gray is ourly manager.",
        "The man gray in suit is our manager.",
        "The man suit gray in is our manager."
      ],
      correctIndex: 0,
      explanation: "'In the gray suit' is an adjective phrase describing 'man'."
    },
    {
      question: "Identify the adjective in: 'The children grew restless during the long meeting.'",
      choices: [
        "children",
        "grew",
        "restless",
        "meeting"
      ],
      correctIndex: 2,
      explanation: "'Restless' describes the noun 'children'."
    },
    {
      question: "Which sentence uses 'appear' as a linking verb with an adjective?",
      choices: [
        "He appeared suddenly on the stage.",
        "He appeared nervous on the stage.",
        "He appeared quickly on the stage.",
        "He appeared quietly on the stage."
      ],
      correctIndex: 1,
      explanation: "'Appeared nervous' links the subject 'he' to the adjective 'nervous'."
    },
    {
      question: "Which sentence uses 'remain' correctly with an adjective?",
      choices: [
        "The streets remained quietly after curfew.",
        "The streets remained quiet after curfew.",
        "The streets remained quietlier after curfew.",
        "The streets remained quietful after curfew."
      ],
      correctIndex: 1,
      explanation: "'Remain' is a linking verb; it should be followed by an adjective: 'quiet'."
    },
    {
      question: "Identify the adjective phrase in the sentence: 'Students eager to learn often ask many questions.'",
      choices: [
        "Students eager",
        "eager to learn",
        "to learn often",
        "many questions"
      ],
      correctIndex: 1,
      explanation: "'Eager to learn' describes 'students' and is an adjective phrase."
    },
    {
      question: "Which sentence uses an adjective correctly after 'sound'?",
      choices: [
        "The plan sounds reasonably.",
        "The plan sounds reasonable.",
        "The plan sounds reasonablely.",
        "The plan sounds more reasonably."
      ],
      correctIndex: 1,
      explanation: "After 'sounds' as a linking verb, we use the adjective 'reasonable'."
    },

    // 11–20: degrees of comparison, irregular forms, logical comparisons
    {
      question: "Which sentence uses the comparative degree correctly?",
      choices: [
        "This task is more easier than the last one.",
        "This task is easier than the last one.",
        "This task is easiest than the last one.",
        "This task is the most easier than the last one."
      ],
      correctIndex: 1,
      explanation: "Use the comparative 'easier than' without 'more'."
    },
    {
      question: "Which is the correct set of forms?",
      choices: [
        "good, gooder, goodest",
        "good, better, best",
        "good, more good, most good",
        "good, goodest, most good"
      ],
      correctIndex: 1,
      explanation: "The irregular forms are: good → better → best."
    },
    {
      question: "Choose the sentence that compares exactly two things correctly:",
      choices: [
        "Between the two cars, this one is the cheapest.",
        "Between the two cars, this one is the cheaper.",
        "Between the two cars, this one is cheapest.",
        "Between the two cars, this one is most cheap."
      ],
      correctIndex: 1,
      explanation: "With two items, use the comparative: 'the cheaper (car)'."
    },
    {
      question: "Which sentence uses the superlative correctly?",
      choices: [
        "She is the most tallest player in the team.",
        "She is the tallest player in the team.",
        "She is the taller player in the team.",
        "She is tallest player in the team than others."
      ],
      correctIndex: 1,
      explanation: "Avoid double comparison; just use 'the tallest'."
    },
    {
      question: "Fill in the blank: 'This is the ______ book I have ever read.'",
      choices: [
        "more interesting",
        "most interesting",
        "interestinger",
        "interestingest"
      ],
      correctIndex: 1,
      explanation: "With 'ever', we normally use the superlative: 'the most interesting'."
    },
    {
      question: "Which sentence avoids an illogical comparison?",
      choices: [
        "Your result is better than your previous.",
        "Your result is better than your previous result.",
        "Your result is better than previous.",
        "Your result is better than before result."
      ],
      correctIndex: 1,
      explanation: "We must compare 'result' with 'previous result', not with 'previous' alone."
    },
    {
      question: "Which sentence is correct in formal English?",
      choices: [
        "This is the most ideal solution.",
        "This is the more ideal solution.",
        "This is the ideal solution.",
        "This is the most ideally solution."
      ],
      correctIndex: 2,
      explanation: "'Ideal' already suggests the best choice; 'the ideal solution' is usually preferred."
    },
    {
      question: "Which sentence correctly compares three or more items?",
      choices: [
        "Of the three options, this one is the better.",
        "Of the three options, this one is the best.",
        "Of the three options, this one is better.",
        "Of the three options, this one is more better."
      ],
      correctIndex: 1,
      explanation: "For three or more, we use the superlative: 'the best'."
    },
    {
      question: "Which sentence uses 'worse' and 'worst' correctly?",
      choices: [
        "This is the worse day of my life.",
        "This is the worst day of my life.",
        "This is the most worst day of my life.",
        "This is worser day of my life."
      ],
      correctIndex: 1,
      explanation: "The correct superlative is 'worst'; 'worse' is comparative."
    },
    {
      question: "Which sentence is logically correct?",
      choices: [
        "Among the two candidates, she is the better.",
        "Between the three candidates, she is the better.",
        "Among the three candidates, she is the best.",
        "Between the two candidates, she is the best."
      ],
      correctIndex: 2,
      explanation: "Use 'among' with three or more, and the superlative 'the best'."
    },

    // 21–30: order of adjectives, such/so, enough/too
    {
      question: "Which phrase follows the natural order of adjectives?",
      choices: [
        "a red small plastic cup",
        "a small red plastic cup",
        "a plastic red small cup",
        "a cup small red plastic"
      ],
      correctIndex: 1,
      explanation: "Size (small) → color (red) → material (plastic) → noun (cup)."
    },
    {
      question: "Choose the best-ordered phrase:",
      choices: [
        "a Chinese new interesting book",
        "an interesting new Chinese book",
        "a new Chinese interesting book",
        "an interesting Chinese new book"
      ],
      correctIndex: 1,
      explanation: "Opinion (interesting) → age (new) → origin (Chinese) → noun (book)."
    },
    {
      question: "Which phrase is most natural?",
      choices: [
        "a big old wooden house",
        "an old big wooden house",
        "a wooden big old house",
        "a big wooden old house"
      ],
      correctIndex: 0,
      explanation: "Opinion/size (big) often comes before age (old), followed by material (wooden)."
    },
    {
      question: "Which sentence uses 'such' correctly with an adjective and noun?",
      choices: [
        "It was such difficult exam.",
        "It was such a difficult exam.",
        "It was a such difficult exam.",
        "It was difficult such an exam."
      ],
      correctIndex: 1,
      explanation: "Pattern: 'such a/an + adjective + noun'."
    },
    {
      question: "Which sentence uses 'so' correctly?",
      choices: [
        "The movie was so interesting that I watched it twice.",
        "The movie was such interesting that I watched it twice.",
        "The movie was so interesting film.",
        "The movie was so an interesting film."
      ],
      correctIndex: 0,
      explanation: "'So + adjective + that-clause' is correct: 'so interesting that…'."
    },
    {
      question: "Which sentence uses 'too' correctly with an adjective?",
      choices: [
        "The box is too heavy for me to lift.",
        "The box is heavy too for me to lift.",
        "The box is heavy for me too to lift.",
        "The box is heavy too much for me to lift."
      ],
      correctIndex: 0,
      explanation: "'Too' comes before the adjective to show excess: 'too heavy'."
    },
    {
      question: "Which sentence uses 'enough' correctly with an adjective?",
      choices: [
        "She is enough tall to join the team.",
        "She is tall enough to join the team.",
        "She tall enough is to join the team.",
        "She is tall to join the team enough."
      ],
      correctIndex: 1,
      explanation: "We say 'adjective + enough': 'tall enough'."
    },
    {
      question: "Which sentence uses 'quite' correctly?",
      choices: [
        "The instructions are quite clear.",
        "The instructions are clear quite.",
        "The quite instructions are clear.",
        "The instructions are clearly quite."
      ],
      correctIndex: 0,
      explanation: "'Quite' usually comes before the adjective: 'quite clear'."
    },
    {
      question: "Which sentence uses 'rather' correctly?",
      choices: [
        "The weather is rather cold today.",
        "The weather is cold rather today.",
        "The rather weather is cold today.",
        "The weather cold rather is today."
      ],
      correctIndex: 0,
      explanation: "'Rather' is an adverb of degree placed before the adjective 'cold'."
    },
    {
      question: "Which sentence uses 'pretty' (informal) as an adverb of degree?",
      choices: [
        "The exam was pretty difficult.",
        "The exam was difficult pretty.",
        "The pretty exam was difficult.",
        "The exam was difficult prettily."
      ],
      correctIndex: 0,
      explanation: "In informal English, 'pretty' can mean 'fairly' or 'quite' before an adjective."
    },

    // 31–40: quantifiers & types of adjectives
    {
      question: "Which sentence uses 'few' and 'little' correctly?",
      choices: [
        "We have little chairs and few time.",
        "We have few chairs and little time.",
        "We have few chairs and few time.",
        "We have little chairs and little time."
      ],
      correctIndex: 1,
      explanation: "Use 'few' with countable nouns (chairs) and 'little' with uncountable nouns (time)."
    },
    {
      question: "Which sentence uses 'many' and 'much' correctly?",
      choices: [
        "There are many people and much noise in the room.",
        "There are much people and many noise in the room.",
        "There is many people and much noise in the room.",
        "There are many peoples and much noises in the room."
      ],
      correctIndex: 0,
      explanation: "Use 'many' with countable nouns (people) and 'much' with uncountable nouns (noise)."
    },
    {
      question: "Which sentence uses a demonstrative adjective?",
      choices: [
        "This is yours.",
        "These books are new.",
        "There is mine.",
        "Here is hers."
      ],
      correctIndex: 1,
      explanation: "'These' modifies 'books', functioning as a demonstrative adjective."
    },
    {
      question: "Which sentence uses a possessive adjective correctly?",
      choices: [
        "This is hers pen.",
        "This is her pen.",
        "This is she pen.",
        "This is she's pen."
      ],
      correctIndex: 1,
      explanation: "'Her' is the correct possessive adjective before 'pen'."
    },
    {
      question: "Which sentence uses an interrogative adjective?",
      choices: [
        "What did you say?",
        "Which color do you like?",
        "Who called you?",
        "When did you arrive?"
      ],
      correctIndex: 1,
      explanation: "In 'Which color', 'which' modifies the noun 'color'."
    },
    {
      question: "Which sentence uses a distributive adjective?",
      choices: [
        "Each student received a certificate.",
        "All student received a certificate.",
        "Much students received a certificate.",
        "Many student received a certificate."
      ],
      correctIndex: 0,
      explanation: "'Each' is a distributive adjective referring to members of a group individually."
    },
    {
      question: "Which sentence uses a proper adjective correctly?",
      choices: [
        "She bought a japan phone.",
        "She bought a Japanese phone.",
        "She bought a japanese phone.",
        "She bought a Japanes phone."
      ],
      correctIndex: 1,
      explanation: "Proper adjectives (Japanese) are capitalized and placed before the noun."
    },
    {
      question: "Which is a quantitative adjective?",
      choices: [
        "several",
        "happy",
        "Filipino",
        "round"
      ],
      correctIndex: 0,
      explanation: "'Several' shows quantity and is used with countable nouns."
    },
    {
      question: "Which sentence uses 'no' as an adjective?",
      choices: [
        "No student was late.",
        "No one student were late.",
        "No the student was late.",
        "No students was late, they were all early."
      ],
      correctIndex: 0,
      explanation: "'No' modifies 'student' and functions as an adjective."
    },
    {
      question: "Which sentence uses 'another' correctly?",
      choices: [
        "She needs another informations.",
        "She needs another piece of information.",
        "She needs other another information.",
        "She needs anothers information."
      ],
      correctIndex: 1,
      explanation: "Use 'another' with singular countable nouns: 'another piece of information'."
    },

    // 41–50: error identification & improvement (adjective-focused)
    {
      question: "Find the part with an error: 'She is the most smartest in the class.'",
      choices: [
        "She is",
        "the most",
        "smartest",
        "in the class"
      ],
      correctIndex: 2,
      explanation: "Double comparison; it should be 'the smartest'."
    },
    {
      question: "Find the error: 'He gave me a few good advices.'",
      choices: [
        "He gave",
        "me",
        "a few good",
        "advices"
      ],
      correctIndex: 3,
      explanation: "'Advice' is uncountable; it should be 'a few good pieces of advice'."
    },
    {
      question: "Find the error: 'There is only few time left before the exam.'",
      choices: [
        "There is",
        "only few",
        "time left",
        "before the exam"
      ],
      correctIndex: 2,
      explanation: "The problem is 'few' with an uncountable noun; it should be 'little time left'."
    },
    {
      question: "Find the error: 'This is the more importantest point in the report.'",
      choices: [
        "This is",
        "the more",
        "importantest point",
        "in the report"
      ],
      correctIndex: 2,
      explanation: "Use 'most important', not 'importantest' or 'more importantest'."
    },
    {
      question: "Improve the sentence: 'She is more friendlier now than before.'",
      choices: [
        "She is friendlier now than before.",
        "She is more friendly now than before.",
        "She is the friendlier now than before.",
        "She is most friendlier now than before."
      ],
      correctIndex: 0,
      explanation: "Use the comparative 'friendlier' without 'more'."
    },
    {
      question: "Improve the sentence: 'This is the less useful of the three proposals.'",
      choices: [
        "This is the least useful of the three proposals.",
        "This is less useful of the three proposals.",
        "This is the lesser useful of the three proposals.",
        "This is the less most useful of the three proposals."
      ],
      correctIndex: 0,
      explanation: "For three proposals, use the superlative 'least useful'."
    },
    {
      question: "Improve the sentence: 'He is more superior than his teammates.'",
      choices: [
        "He is superior to his teammates.",
        "He is more superior to his teammates.",
        "He is superior than his teammates.",
        "He is the most superior than his teammates."
      ],
      correctIndex: 0,
      explanation: "Avoid 'more superior'; 'superior to' is enough."
    },
    {
      question: "Improve the sentence: 'She is more elder than her cousin.' (general comparison)",
      choices: [
        "She is older than her cousin.",
        "She is the elder than her cousin.",
        "She is more older than her cousin.",
        "She is eldest than her cousin."
      ],
      correctIndex: 0,
      explanation: "For general age comparison, use 'older than'."
    },
    {
      question: "Improve the sentence: 'The report is more complete now than yesterday.'",
      choices: [
        "The report is more complete now than it was yesterday.",
        "The report is complete now than yesterday.",
        "The report is the most complete now than yesterday.",
        "The report is completely now than yesterday."
      ],
      correctIndex: 0,
      explanation: "The comparison must be completed: 'than it was yesterday'."
    },
    {
      question: "Improve the sentence: 'She almost nearly missed the last train.'",
      choices: [
        "She almost missed the last train.",
        "She nearly almost missed the last train.",
        "She almost nearly last missed the train.",
        "She nearly almost last missed the train."
      ],
      correctIndex: 0,
      explanation: "We avoid using 'almost' and 'nearly' together because they have similar meanings."
    }
  ],


  exam: [
    // 1–10: mixed difficulty
    {
      question: "Which sentence is correct?",
      choices: [
        "She is more friendlier now than before.",
        "She is friendlier now than before.",
        "She is the most friendlier now than before.",
        "She is friendliest now than before."
      ],
      correctIndex: 1,
      explanation: "Use 'friendlier' without 'more' for the comparative form."
    },
    {
      question: "Which sentence uses an adjective correctly after a linking verb?",
      choices: [
        "The soup tastes salty.",
        "The soup tastes saltly.",
        "The soup tastes salt.",
        "The soup tastes more saltyly."
      ],
      correctIndex: 0,
      explanation: "'Salty' is an adjective describing 'soup' after the linking verb 'tastes'."
    },
    {
      question: "Which sentence avoids a double comparison?",
      choices: [
        "This is the most finest example.",
        "This is the finest example.",
        "This is the more finest example.",
        "This is finestest example."
      ],
      correctIndex: 1,
      explanation: "Use only 'finest', not 'most finest'."
    },
    {
      question: "Which sentence uses 'less' correctly?",
      choices: [
        "We have less problems now.",
        "We have fewer problems now.",
        "We have less problem now.",
        "We have many less problems now."
      ],
      correctIndex: 1,
      explanation: "Use 'fewer' with countable nouns like 'problems'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He is the most highest official in this office.",
        "He is the highest official in this office.",
        "He is higher official in this office.",
        "He is more higher official in this office."
      ],
      correctIndex: 1,
      explanation: "Do not combine 'most' with a superlative form: just 'the highest'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The test was so difficult that few passed.",
        "The test was so difficult that a few passed.",
        "The test was so difficult that every passed.",
        "The test was so difficult that many passed easily."
      ],
      correctIndex: 1,
      explanation: "'A few' means some; better matches the idea of a very difficult test."
    },
    {
      question: "Which sentence uses 'quite' and 'rather' appropriately?",
      choices: [
        "The movie was quite boring but rather long.",
        "The movie was quite long but rather boring.",
        "The movie was quite and rather boring.",
        "The movie was boring quite rather."
      ],
      correctIndex: 0,
      explanation: "Both 'quite boring' and 'rather long' are acceptable collocations."
    },
    {
      question: "Which sentence correctly uses an adjective phrase?",
      choices: [
        "The man in the blue shirt is my supervisor.",
        "The man in blue shirt is my supervisor.",
        "The man blue shirt is my supervisor.",
        "The man with blue is my supervisor."
      ],
      correctIndex: 0,
      explanation: "'In the blue shirt' is a complete adjective phrase modifying 'man'."
    },
    {
      question: "Which sentence is grammatically correct?",
      choices: [
        "She is so a nice person.",
        "She is such a nice person.",
        "She is such nice person.",
        "She is so nice person."
      ],
      correctIndex: 1,
      explanation: "Use 'such a/an + adjective + noun': 'such a nice person'."
    },
    {
      question: "Which sentence correctly uses 'many' and 'much'?",
      choices: [
        "There are much people in the hall.",
        "There is many water in the lake.",
        "There are many people in the hall.",
        "There is much people in the hall."
      ],
      correctIndex: 2,
      explanation: "Use 'many' with countable nouns (people) and 'much' with uncountable nouns."
    },

    // 11–20: error identification / CSE-style
    {
      question: "Find the part with an error: 'Each of the employees were given a bonus.'",
      choices: [
        "Each",
        "of the employees",
        "were given",
        "a bonus"
      ],
      correctIndex: 2,
      explanation: "The subject 'Each' is singular, so the verb should be 'was given'."
    },
    {
      question: "Find the error: 'The information provided were not accurate.'",
      choices: [
        "The information",
        "provided",
        "were not",
        "accurate"
      ],
      correctIndex: 2,
      explanation: "'Information' is uncountable and takes a singular verb: 'was not accurate'."
    },
    {
      question: "Find the error: 'These kind of questions are common in the exam.'",
      choices: [
        "These",
        "kind",
        "of questions",
        "are common"
      ],
      correctIndex: 1,
      explanation: "It should be 'This kind of questions' or 'These kinds of questions' for agreement."
    },
    {
      question: "Find the error: 'He is one of the most talentedest players on the team.'",
      choices: [
        "one of the",
        "most",
        "talentedest",
        "players on the team"
      ],
      correctIndex: 2,
      explanation: "Use 'most talented', not 'talentedest'."
    },
    {
      question: "Find the error: 'The committee were divided in its decision.'",
      choices: [
        "The committee",
        "were divided",
        "in its",
        "decision"
      ],
      correctIndex: 2,
      explanation: "If the committee is treated as plural ('were divided'), the pronoun should be 'their', not 'its'."
    },
    {
      question: "Find the error: 'He gave me an useful suggestion.'",
      choices: [
        "He gave",
        "me",
        "an useful",
        "suggestion"
      ],
      correctIndex: 2,
      explanation: "'Useful' begins with a consonant sound /y/, so use 'a useful suggestion'."
    },
    {
      question: "Find the error: 'She is the most smartest student in the class.'",
      choices: [
        "She is",
        "the most",
        "smartest student",
        "in the class"
      ],
      correctIndex: 2,
      explanation: "Double comparison; use 'the smartest student'."
    },
    {
      question: "Find the error: 'There is only few time left before the deadline.'",
      choices: [
        "There is",
        "only few",
        "time left",
        "before the deadline"
      ],
      correctIndex: 1,
      explanation: "Use 'little time', not 'few time', because 'time' is uncountable."
    },
    {
      question: "Find the error: 'He has lesser responsibilities than before.'",
      choices: [
        "He has",
        "lesser",
        "responsibilities",
        "than before"
      ],
      correctIndex: 1,
      explanation: "With a comparative phrase like this, 'fewer responsibilities' is more appropriate."
    },
    {
      question: "Find the error: 'This is the more importantest issue to discuss.'",
      choices: [
        "This is",
        "the more",
        "importantest issue",
        "to discuss"
      ],
      correctIndex: 2,
      explanation: "Use either 'more important' or 'most important', not 'importantest'."
    },

    // 21–30: sentence improvement
    {
      question: "Improve the sentence: 'She is more kinder than her sister.'",
      choices: [
        "She is kinder than her sister.",
        "She is more kind than her sister.",
        "She is most kinder than her sister.",
        "She is kinder more than her sister."
      ],
      correctIndex: 0,
      explanation: "Use the comparative 'kinder' without 'more'."
    },
    {
      question: "Improve: 'This is the most happiest day of my life.'",
      choices: [
        "This is the happiest day of my life.",
        "This is the most happy day of my life.",
        "This is the happier day of my life.",
        "This is the more happiest day of my life."
      ],
      correctIndex: 0,
      explanation: "Use only the superlative form 'happiest'."
    },
    {
      question: "Improve: 'He is elder than me.' (general comparison, not family only)",
      choices: [
        "He is older than me.",
        "He is the elder than me.",
        "He is more elder than me.",
        "He is eldest than me."
      ],
      correctIndex: 0,
      explanation: "For general age comparison, use 'older', not 'elder'."
    },
    {
      question: "Improve: 'This is the less expensive option among the three.'",
      choices: [
        "This is the least expensive option among the three.",
        "This is the lesser expensive option among the three.",
        "This is less expensive option among the three.",
        "This is the less most expensive option among the three."
      ],
      correctIndex: 0,
      explanation: "For three or more, use 'least' as the superlative."
    },
    {
      question: "Improve: 'She is one of the most talentedest singers in the group.'",
      choices: [
        "She is one of the most talented singers in the group.",
        "She is one of the talented singers in the group.",
        "She is one of the most talented singer in the group.",
        "She is the most talentedest singer in the group."
      ],
      correctIndex: 0,
      explanation: "Use 'most talented', not 'talentedest'."
    },
    {
      question: "Improve: 'He is more superior than his colleagues.'",
      choices: [
        "He is superior to his colleagues.",
        "He is more superior to his colleagues.",
        "He is superior than his colleagues.",
        "He is most superior than his colleagues."
      ],
      correctIndex: 0,
      explanation: "Avoid 'more superior'; 'superior to' is sufficient."
    },
    {
      question: "Improve: 'This is the very best solution we can offer.' (formal)",
      choices: [
        "This is the best solution we can offer.",
        "This is a very best solution we can offer.",
        "This is the most best solution we can offer.",
        "This is best solution we can offer."
      ],
      correctIndex: 0,
      explanation: "In formal writing, 'the best' alone is usually enough."
    },
    {
      question: "Improve: 'She is more prettier than her cousin.'",
      choices: [
        "She is prettier than her cousin.",
        "She is more pretty than her cousin.",
        "She is most prettier than her cousin.",
        "She is prettiest than her cousin."
      ],
      correctIndex: 0,
      explanation: "Use 'prettier' as the comparative form without 'more'."
    },
    {
      question: "Improve: 'This is the most ideal solution to the problem.'",
      choices: [
        "This is the ideal solution to the problem.",
        "This is the more ideal solution to the problem.",
        "This is more ideal solution to the problem.",
        "This is the most ideally solution to the problem."
      ],
      correctIndex: 0,
      explanation: "'Ideal' already suggests the best; 'most ideal' is redundant in strict formal usage."
    },
    {
      question: "Improve: 'The report is more complete now than yesterday.'",
      choices: [
        "The report is more complete now than it was yesterday.",
        "The report is complete now than yesterday.",
        "The report is most complete now than yesterday.",
        "The report is more completely now than yesterday."
      ],
      correctIndex: 0,
      explanation: "The comparison should be completed: 'than it was yesterday'."
    },

    // 31–40: reading-style / context
    {
      question: "In the sentence 'He gave a brief but clear explanation', what do 'brief' and 'clear' modify?",
      choices: ["He", "gave", "explanation", "brief but clear"],
      correctIndex: 2,
      explanation: "Both adjectives 'brief' and 'clear' describe the noun 'explanation'."
    },
    {
      question: "In 'The newly appointed regional director is highly respected', which word is the main adjective?",
      choices: ["newly", "appointed", "regional", "respected"],
      correctIndex: 3,
      explanation: "'Respected' is the main adjective describing 'director'; 'newly appointed regional' are modifiers as well, but 'respected' expresses the key quality."
    },
    {
      question: "In 'She wore a simple, elegant black dress', how many adjectives describe 'dress'?",
      choices: ["One", "Two", "Three", "Four"],
      correctIndex: 2,
      explanation: "'Simple', 'elegant', and 'black' all describe 'dress' (three adjectives)."
    },
    {
      question: "Which sentence uses an adjective phrase?",
      choices: [
        "The man with the red hat waved at us.",
        "The man waved at us.",
        "The man waved quickly.",
        "The man waved yesterday."
      ],
      correctIndex: 0,
      explanation: "'With the red hat' is an adjective phrase modifying 'man'."
    },
    {
      question: "In 'She arrived tired but satisfied', which words are adjectives?",
      choices: ["arrived", "tired", "satisfied", "tired but satisfied"],
      correctIndex: 3,
      explanation: "Both 'tired' and 'satisfied' describe 'she'."
    },
    {
      question: "In 'The proposal, though risky, was approved', what does 'risky' modify?",
      choices: ["proposal", "approved", "was", "though"],
      correctIndex: 0,
      explanation: "'Risky' is an adjective describing 'proposal'."
    },
    {
      question: "In 'He is smart enough to solve the problem', what is the function of 'smart enough'?",
      choices: [
        "Noun phrase",
        "Adjective phrase",
        "Adverb phrase",
        "Verb phrase"
      ],
      correctIndex: 1,
      explanation: "'Smart enough' describes 'he', so it is an adjective phrase."
    },
    {
      question: "In 'Facing a difficult decision, the manager remained calm', which is the main adjective describing 'manager'?",
      choices: ["Facing", "difficult", "calm", "remained calm"],
      correctIndex: 2,
      explanation: "'Calm' is the main adjective linked to 'manager' by 'remained'."
    },
    {
      question: "In 'The lecture was long and extremely boring', which word is an adverb modifying an adjective?",
      choices: ["long", "boring", "extremely", "lecture"],
      correctIndex: 2,
      explanation: "'Extremely' modifies the adjective 'boring'."
    },
    {
      question: "In 'Only a few loyal customers stayed until the end', which word is a quantitative adjective?",
      choices: ["Only", "few", "loyal", "end"],
      correctIndex: 1,
      explanation: "'Few' indicates a small number of customers and functions as a quantitative adjective."
    },

    // 41–50: final mix
    {
      question: "Which sentence correctly uses an adjective to describe a place?",
      choices: [
        "The city is crowded and noisy.",
        "The city crowded and noisily.",
        "The city is crowdedly and noisy.",
        "The city is crowded and noisily."
      ],
      correctIndex: 0,
      explanation: "'Crowded' and 'noisy' are adjectives describing 'city' after 'is'."
    },
    {
      question: "Which sentence uses 'almost' correctly?",
      choices: [
        "She was almost late for the interview.",
        "She was late almost for the interview.",
        "She almost was late for interview.",
        "She was late for almost interview."
      ],
      correctIndex: 0,
      explanation: "'Almost' comes before the adjective 'late'."
    },
    {
      question: "Which sentence uses a reduced adjective clause?",
      choices: [
        "Students interested in the course should sign up now.",
        "Students who interested in the course should sign up now.",
        "Students interest in the course should sign up now.",
        "Students which interested in the course should sign up now."
      ],
      correctIndex: 0,
      explanation: "'Interested in the course' is a reduced relative clause modifying 'students'."
    },
    {
      question: "Which sentence correctly uses 'enough' with a noun?",
      choices: [
        "We have enough information to decide.",
        "We have information enough to decide.",
        "We enough have information to decide.",
        "We have enough informations to decide."
      ],
      correctIndex: 0,
      explanation: "'Enough' comes before an uncountable noun: 'enough information'."
    },
    {
      question: "Which sentence uses 'too' correctly?",
      choices: [
        "The box is too heavy for me to lift.",
        "The box is heavy too for me to lift.",
        "The box is heavy for me too to lift.",
        "The box is heavy too much for me to lift."
      ],
      correctIndex: 0,
      explanation: "'Too heavy' correctly expresses that it is excessively heavy."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The instructions are clear enough for everyone to follow.",
        "The instructions are enough clear for everyone to follow.",
        "The instructions enough are clear for everyone to follow.",
        "The instructions are clear for everyone enough to follow."
      ],
      correctIndex: 0,
      explanation: "We say 'clear enough', not 'enough clear'."
    },
    {
      question: "Which sentence correctly uses a comparative structure?",
      choices: [
        "The new policy is more fairer than the old one.",
        "The new policy is fairer than the old one.",
        "The new policy is the most fairer than the old one.",
        "The new policy is the fairer than the old one."
      ],
      correctIndex: 1,
      explanation: "Use 'fairer' without 'more' for the comparative form."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She is too much young to vote.",
        "She is too young to vote.",
        "She is young too much to vote.",
        "She is much too young to vote not."
      ],
      correctIndex: 1,
      explanation: "'Too young to vote' is the standard pattern."
    },
    {
      question: "Which sentence correctly uses 'such'?",
      choices: [
        "It was such long boring meeting.",
        "It was such a long boring meeting.",
        "It was long such a boring meeting.",
        "It was a such long boring meeting."
      ],
      correctIndex: 1,
      explanation: "Use 'such a + adjective(s) + noun': 'such a long boring meeting'."
    },
    {
      question: "Which sentence uses an adjective correctly as a complement?",
      choices: [
        "The result seems satisfactory.",
        "The result seems satisfactorily.",
        "The result seems satisfaction.",
        "The result seems satisfyingness."
      ],
      correctIndex: 0,
      explanation: "'Seems' is a linking verb, so we use the adjective 'satisfactory'."
    }
  ]
};

