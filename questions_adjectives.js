const ADJECTIVE_QUESTIONS = {
  beginner: [
    // 1
    {
      question: "Which word is the adjective in the sentence: 'She has a red bag'?",
      choices: ["she", "has", "red", "bag"],
      correctIndex: 2,
      explanation: "Red describes the noun bag, so it is the adjective."
    },
    // 2
    {
      question: "Which sentence uses an adjective correctly?",
      choices: [
        "He runs fastly.",
        "He is a fast runner.",
        "He runs very careful.",
        "He sings beautiful."
      ],
      correctIndex: 1,
      explanation: "Fast describes the noun runner and is used correctly as an adjective."
    },
    // 3
    {
      question: "Which word is a descriptive adjective?",
      choices: ["quickly", "slowly", "happy", "softly"],
      correctIndex: 2,
      explanation: "Happy describes a noun (a happy child) and is a descriptive adjective."
    },
    // 4
    {
      question: "In 'three books', what kind of adjective is 'three'?",
      choices: ["descriptive", "numeral", "demonstrative", "interrogative"],
      correctIndex: 1,
      explanation: "Three shows exact number, so it is a numeral adjective."
    },
    // 5
    {
      question: "Which sentence contains a demonstrative adjective?",
      choices: [
        "Those are mine.",
        "I saw them.",
        "Those students are noisy.",
        "They are those."
      ],
      correctIndex: 2,
      explanation: "Those describes the noun students, so here it is a demonstrative adjective."
    },
    // 6
    {
      question: "Which is a possessive adjective?",
      choices: ["mine", "hers", "our", "us"],
      correctIndex: 2,
      explanation: "Our comes before a noun (our house) and functions as a possessive adjective."
    },
    // 7
    {
      question: "Choose the sentence where the adjective comes before the noun.",
      choices: [
        "The sky is blue.",
        "The tall building collapsed.",
        "The food smells good.",
        "He became tired."
      ],
      correctIndex: 1,
      explanation: "Tall appears before the noun building and describes it."
    },
    // 8
    {
      question: "Which word in the sentence is an adjective: 'The noisy children ran outside'?",
      choices: ["noisy", "children", "ran", "outside"],
      correctIndex: 0,
      explanation: "Noisy describes children, so it is an adjective."
    },
    // 9
    {
      question: "Which sentence uses an interrogative adjective?",
      choices: [
        "Which is yours?",
        "Which book is yours?",
        "Whose is this?",
        "What is it?"
      ],
      correctIndex: 1,
      explanation: "Which modifies the noun book, so it is an interrogative adjective."
    },
    // 10
    {
      question: "In 'Filipino culture', 'Filipino' is what kind of adjective?",
      choices: ["descriptive", "proper", "numeral", "demonstrative"],
      correctIndex: 1,
      explanation: "Filipino comes from a proper noun and is a proper adjective."
    },
    // 11
    {
      question: "Which sentence uses the adjective in the predicate?",
      choices: [
        "The small cat slept.",
        "The cat is small.",
        "The cat small slept.",
        "Small the cat is."
      ],
      correctIndex: 1,
      explanation: "Small comes after the linking verb is and describes the subject cat."
    },
    // 12
    {
      question: "Which word is the adjective: 'We watched an exciting movie'?",
      choices: ["we", "watched", "exciting", "movie"],
      correctIndex: 2,
      explanation: "Exciting describes the noun movie, so it is an adjective."
    },
    // 13
    {
      question: "Which sentence uses a quantitative adjective?",
      choices: [
        "I drank cold water.",
        "I have little money left.",
        "I saw a tall man.",
        "He is a kind teacher."
      ],
      correctIndex: 1,
      explanation: "Little shows amount of money, so it is a quantitative adjective."
    },
    // 14
    {
      question: "Which word is NOT an adjective?",
      choices: ["happy", "careful", "quick", "quickly"],
      correctIndex: 3,
      explanation: "Quickly is an adverb, the others are adjectives."
    },
    // 15
    {
      question: "Which sentence uses a numeral adjective?",
      choices: [
        "We had enough food.",
        "We had three visitors.",
        "We had little food.",
        "We had some time."
      ],
      correctIndex: 1,
      explanation: "Three tells exactly how many visitors, so it is a numeral adjective."
    },
    // 16
    {
      question: "Which sentence uses a possessive adjective correctly?",
      choices: [
        "That book is mine.",
        "That is my book.",
        "That is me book.",
        "That book is I."
      ],
      correctIndex: 1,
      explanation: "My comes before the noun book and shows ownership."
    },
    // 17
    {
      question: "In 'a big, blue umbrella', how many adjectives are used?",
      choices: ["one", "two", "three", "none"],
      correctIndex: 1,
      explanation: "Big and blue both describe umbrella, so there are two adjectives."
    },
    // 18
    {
      question: "Which sentence uses an adjective formed from a proper noun?",
      choices: [
        "He bought a Japanese car.",
        "He bought a fast car.",
        "He bought an old car.",
        "He bought a cheap car."
      ],
      correctIndex: 0,
      explanation: "Japanese comes from the proper noun Japan and is a proper adjective."
    },
    // 19
    {
      question: "Which word is the adjective: 'The exam was difficult'?",
      choices: ["exam", "was", "difficult", "the"],
      correctIndex: 2,
      explanation: "Difficult describes exam, so it is an adjective."
    },
    // 20
    {
      question: "Which sentence contains an adjective of opinion?",
      choices: [
        "He wore a red shirt.",
        "He wore a cotton shirt.",
        "He wore an expensive shirt.",
        "He wore a short shirt."
      ],
      correctIndex: 2,
      explanation: "Expensive expresses an opinion or judgment about the shirt."
    },
    // 21
    {
      question: "Which is an adjective of quantity?",
      choices: ["many", "walked", "slow", "teacher"],
      correctIndex: 0,
      explanation: "Many tells how many or how much and is a quantitative adjective."
    },
    // 22
    {
      question: "Which sentence uses an adjective correctly with a linking verb?",
      choices: [
        "The soup smells delicious.",
        "The soup smells deliciously.",
        "The soup smells quick.",
        "The soup smells slowly."
      ],
      correctIndex: 0,
      explanation: "Delicious is an adjective describing soup after the linking verb smells."
    },
    // 23
    {
      question: "In 'those old documents', which word is a demonstrative adjective?",
      choices: ["those", "old", "documents", "none"],
      correctIndex: 0,
      explanation: "Those points to specific documents and modifies the noun."
    },
    // 24
    {
      question: "Which sentence uses an interrogative adjective?",
      choices: [
        "Whose bag is this?",
        "Whose is this?",
        "Who is that?",
        "Whom did you call?"
      ],
      correctIndex: 0,
      explanation: "Whose modifies the noun bag, so it functions as an interrogative adjective."
    },
    // 25
    {
      question: "Which word is an adjective in the sentence: 'They live in a quiet neighborhood'?",
      choices: ["live", "in", "quiet", "neighborhood"],
      correctIndex: 2,
      explanation: "Quiet describes the noun neighborhood, so it is an adjective."
    }
  ],

  intermediate: [
    // 1
    {
      question: "Which sentence correctly uses an adjective rather than an adverb?",
      choices: [
        "She feels happily today.",
        "She feels happy today.",
        "She feels happily about it.",
        "She feels gladly today."
      ],
      correctIndex: 1,
      explanation: "Feels is a linking verb, so it should be followed by the adjective happy."
    },
    // 2
    {
      question: "Choose the correct comparative form: 'This task is ___ than the last one.'",
      choices: ["difficult", "more difficult", "most difficult", "difficultest"],
      correctIndex: 1,
      explanation: "We compare two things, so we use the comparative more difficult."
    },
    // 3
    {
      question: "Which sentence correctly uses the superlative degree?",
      choices: [
        "She is the more intelligent in the group.",
        "She is the most intelligent in the group.",
        "She is more intelligent of all.",
        "She is intelligentest in the group."
      ],
      correctIndex: 1,
      explanation: "Most intelligent is the correct superlative form with the."
    },
    // 4
    {
      question: "Which is the correct comparative of 'happy'?",
      choices: ["more happy", "happier", "happyest", "most happy"],
      correctIndex: 1,
      explanation: "Happy changes to happier in the comparative degree."
    },
    // 5
    {
      question: "Select the sentence with the correct superlative form.",
      choices: [
        "This is the most easiest part.",
        "This is the easier part.",
        "This is the easiest part.",
        "This is the most easier part."
      ],
      correctIndex: 2,
      explanation: "Easiest is the correct superlative; we do not use most with it."
    },
    // 6
    {
      question: "Which sentence uses 'good' and 'well' correctly?",
      choices: [
        "She is a well singer and sings good.",
        "She is a good singer and sings well.",
        "She is a good singer and sings good.",
        "She is a well singer and sings well."
      ],
      correctIndex: 1,
      explanation: "Good is an adjective for singer; well is an adverb describing sings."
    },
    // 7
    {
      question: "Choose the correct form: 'This is the ___ option among the three.'",
      choices: ["better", "more better", "best", "most better"],
      correctIndex: 2,
      explanation: "With three items, we use the superlative best."
    },
    // 8
    {
      question: "Which sentence uses the comparative correctly?",
      choices: [
        "She is more kinder than before.",
        "She is kinder than before.",
        "She is most kinder than before.",
        "She is kind than before."
      ],
      correctIndex: 1,
      explanation: "Kinder is the correct comparative; more kinder is a double comparative."
    },
    // 9
    {
      question: "Which is the correct order of adjectives?",
      choices: [
        "She bought a red small beautiful dress.",
        "She bought a beautiful small red dress.",
        "She bought a small beautiful red dress.",
        "She bought a red beautiful small dress."
      ],
      correctIndex: 1,
      explanation: "Opinion (beautiful) – Size (small) – Color (red) – Noun (dress) is the natural order."
    },
    // 10
    {
      question: "Which sentence correctly uses a quantitative adjective?",
      choices: [
        "He has much friends.",
        "He has many friends.",
        "He has a lot friend.",
        "He has few money."
      ],
      correctIndex: 1,
      explanation: "Many is used with countable nouns like friends."
    },
    // 11
    {
      question: "Choose the correct pair of adjectives: 'It was a ___ and ___ morning.'",
      choices: [
        "cold, foggy",
        "coldly, foggy",
        "cold, foggily",
        "coldly, foggily"
      ],
      correctIndex: 0,
      explanation: "Cold and foggy both describe the noun morning as adjectives."
    },
    // 12
    {
      question: "Which sentence uses an adjective after a linking verb correctly?",
      choices: [
        "The plan sounds good.",
        "The plan sounds well.",
        "The plan sounds clearly.",
        "The plan sounds fastly."
      ],
      correctIndex: 0,
      explanation: "Sounds is a linking verb; it should be followed by the adjective good."
    },
    // 13
    {
      question: "Which sentence shows the correct use of 'less' and 'fewer'?",
      choices: [
        "We have fewer water today.",
        "We have less bottles today.",
        "We have fewer bottles and less water today.",
        "We have less bottles and fewer water today."
      ],
      correctIndex: 2,
      explanation: "Fewer is used with countable bottles; less is used with uncountable water."
    },
    // 14
    {
      question: "Choose the correct comparative sentence.",
      choices: [
        "This road is more narrow than that one.",
        "This road is narrow than that one.",
        "This road is narrowest than that one.",
        "This road is most narrow than that one."
      ],
      correctIndex: 0,
      explanation: "More narrow is an acceptable comparative form for narrow."
    },
    // 15
    {
      question: "Which is the correct superlative of 'bad'?",
      choices: ["badder", "worser", "worst", "most bad"],
      correctIndex: 2,
      explanation: "Bad has the irregular forms: bad, worse, worst."
    },
    // 16
    {
      question: "Which sentence contains a proper adjective?",
      choices: [
        "He loves spicy food.",
        "He loves Italian food.",
        "He loves delicious food.",
        "He loves cheap food."
      ],
      correctIndex: 1,
      explanation: "Italian comes from the proper noun Italy and is a proper adjective."
    },
    // 17
    {
      question: "Choose the correct sentence:",
      choices: [
        "She looks happily in her new dress.",
        "She looks happy in her new dress.",
        "She looks happyly in her new dress.",
        "She looks happyly with her dress."
      ],
      correctIndex: 1,
      explanation: "Looks is a linking verb; it should be followed by the adjective happy."
    },
    // 18
    {
      question: "Which sentence uses an adjective of opinion?",
      choices: [
        "It is a wooden table.",
        "It is a round table.",
        "It is a comfortable table.",
        "It is a large table."
      ],
      correctIndex: 2,
      explanation: "Comfortable expresses an opinion about the table."
    },
    // 19
    {
      question: "Select the correct comparative form: 'This road is ___ than the other one.'",
      choices: ["more wide", "wider", "widest", "most wide"],
      correctIndex: 1,
      explanation: "Wide forms the comparative as wider."
    },
    // 20
    {
      question: "Which sentence uses 'far' in the correct comparative form?",
      choices: [
        "His office is more far than mine.",
        "His office is farest than mine.",
        "His office is farther than mine.",
        "His office is farer than mine."
      ],
      correctIndex: 2,
      explanation: "Farther is the usual comparative form when talking about physical distance."
    },
    // 21
    {
      question: "Which sentence uses 'little' in the correct comparative form?",
      choices: [
        "We have littler time than yesterday.",
        "We have less time than yesterday.",
        "We have more little time than yesterday.",
        "We have lesser time than yesterday."
      ],
      correctIndex: 1,
      explanation: "Less is the correct comparative of little when talking about uncountable nouns like time."
    },
    // 22
    {
      question: "Which sentence correctly compares three items?",
      choices: [
        "Of the three options, this is the better.",
        "Of the three options, this is better.",
        "Of the three options, this is the best.",
        "Of the three options, this is more better."
      ],
      correctIndex: 2,
      explanation: "With three options we use the superlative best."
    },
    // 23
    {
      question: "Choose the correct order of adjectives: opinion, size, age, color.",
      choices: [
        "a red old small car",
        "an old small red car",
        "a small red old car",
        "a beautiful small old red car"
      ],
      correctIndex: 3,
      explanation: "Beautiful (opinion), small (size), old (age), red (color) is correct order."
    },
    // 24
    {
      question: "Which sentence uses an adjective instead of an adverb by mistake?",
      choices: [
        "She sings beautifully.",
        "She speaks clearly.",
        "She drives careful.",
        "She works hard."
      ],
      correctIndex: 2,
      explanation: "Careful is an adjective; it should be the adverb carefully with drives."
    },
    // 25
    {
      question: "Which sentence uses the adjective 'late' correctly?",
      choices: [
        "We had a late meeting last night.",
        "We met lately for the meeting.",
        "We arrived latey to the meeting.",
        "We had a lately meeting last night."
      ],
      correctIndex: 0,
      explanation: "Late describes the noun meeting as an adjective."
    }
  ],

  advanced: [
    // 1
    {
      question: "Which sentence has the most natural adjective order?",
      choices: [
        "She adopted a brown small cute dog.",
        "She adopted a cute small brown dog.",
        "She adopted a small brown cute dog.",
        "She adopted a brown cute small dog."
      ],
      correctIndex: 1,
      explanation: "Opinion (cute), size (small), color (brown), followed by noun."
    },
    // 2
    {
      question: "Identify the error: 'This is the most cheapest package available.'",
      choices: [
        "most cheapest",
        "this is",
        "package",
        "available"
      ],
      correctIndex: 0,
      explanation: "Cheapest is already superlative; adding most is a double superlative."
    },
    // 3
    {
      question: "Which sentence uses 'good' in the correct degree?",
      choices: [
        "She is the most best singer in the choir.",
        "She is the better singer in the choir.",
        "She is the best singer in the choir.",
        "She is more better than the others."
      ],
      correctIndex: 2,
      explanation: "Best is the correct superlative form of good."
    },
    // 4
    {
      question: "Choose the sentence with correct adjective order.",
      choices: [
        "He bought a new small red sports car.",
        "He bought a small red new sports car.",
        "He bought a red new small sports car.",
        "He bought a sports red small new car."
      ],
      correctIndex: 0,
      explanation: "New (age), small (size), red (color), sports (purpose) before car."
    },
    // 5
    {
      question: "Which sentence uses 'less' and 'fewer' correctly?",
      choices: [
        "There are less cars on the road today.",
        "There is fewer traffic today.",
        "We made fewer mistakes and used less paper.",
        "We made less mistakes and used fewer paper."
      ],
      correctIndex: 2,
      explanation: "Fewer with countable mistakes; less with uncountable paper."
    },
    // 6
    {
      question: "Identify the correct sentence using an adjective with a linking verb.",
      choices: [
        "The soup tasted wonderfully.",
        "The soup tasted wonderful.",
        "The soup tasted quick.",
        "The soup tasted softly."
      ],
      correctIndex: 1,
      explanation: "Tasted is a linking verb; it should be followed by the adjective wonderful."
    },
    // 7
    {
      question: "Which sentence contains a logical comparison?",
      choices: [
        "Our office is bigger than any office in the building.",
        "Our office is bigger than any other office in the building.",
        "Our office is bigger than any offices in the building.",
        "Our office is biggest than any office in the building."
      ],
      correctIndex: 1,
      explanation: "Any other office excludes the office itself from the comparison."
    },
    // 8
    {
      question: "Which sentence uses 'elder' or 'older' correctly?",
      choices: [
        "My elder brother is a teacher.",
        "My older brother sister is a teacher.",
        "My elder than brother is a teacher.",
        "My more elder brother is a teacher."
      ],
      correctIndex: 0,
      explanation: "Elder is normally used before a noun referring to family members."
    },
    // 9
    {
      question: "Which sentence correctly uses an adjective of quantity?",
      choices: [
        "He has little friends in the city.",
        "He has few money in his wallet.",
        "He has few friends but little money.",
        "He has many money and much friends."
      ],
      correctIndex: 2,
      explanation: "Few with countable friends; little with uncountable money."
    },
    // 10
    {
      question: "Which is the correct comparative form in context?",
      choices: [
        "She is more senior than me in the company.",
        "She is seniorer than me in the company.",
        "She is more seniorer than me in the company.",
        "She is most senior than me in the company."
      ],
      correctIndex: 0,
      explanation: "More senior is the accepted comparative form."
    },
    // 11
    {
      question: "Identify the error: 'He is the most tallest player on the team.'",
      choices: [
        "most tallest",
        "he is",
        "player",
        "on the team"
      ],
      correctIndex: 0,
      explanation: "Tallest is already superlative; most is unnecessary."
    },
    // 12
    {
      question: "Which sentence uses the adjective 'hard' correctly?",
      choices: [
        "It was a hard exam, but she worked hardly.",
        "It was a hard exam, but she worked hard.",
        "It was hardly exam, but she worked hard.",
        "It was hard exam, but she worked hardly."
      ],
      correctIndex: 1,
      explanation: "Hard describes the noun exam as an adjective; hard is also a correct adverb for worked."
    },
    // 13
    {
      question: "Which sentence has correct adjective order for 'a chair'?",
      choices: [
        "a wooden old comfortable chair",
        "a comfortable old wooden chair",
        "a old comfortable wooden chair",
        "a wooden comfortable old chair"
      ],
      correctIndex: 1,
      explanation: "Opinion (comfortable), age (old), material (wooden), then noun."
    },
    // 14
    {
      question: "Choose the sentence with correct degree of comparison.",
      choices: [
        "This is the less expensive among the four phones.",
        "This is the least expensive among the four phones.",
        "This is the lesser expensive among the four phones.",
        "This is the much least expensive among the four phones."
      ],
      correctIndex: 1,
      explanation: "Least is the superlative form used with three or more items."
    },
    // 15
    {
      question: "Which sentence uses 'such' and 'so' correctly?",
      choices: [
        "It was so a difficult exam.",
        "It was such difficult exam.",
        "It was such a difficult exam.",
        "It was such difficult an exam."
      ],
      correctIndex: 2,
      explanation: "Such a difficult exam is the correct structure with an adjective and noun."
    },
    // 16
    {
      question: "Identify the correct sentence with 'enough'.",
      choices: [
        "He is enough tall to reach the shelf.",
        "He is tall enough to reach the shelf.",
        "He enough tall is to reach the shelf.",
        "He is tall to reach the shelf enough."
      ],
      correctIndex: 1,
      explanation: "Enough follows the adjective: tall enough."
    },
    // 17
    {
      question: "Which sentence uses 'quite' correctly with an adjective?",
      choices: [
        "The task is quite difficult.",
        "The task is difficult quite.",
        "The task quite is difficult.",
        "Quite the task is difficult."
      ],
      correctIndex: 0,
      explanation: "Quite comes before the adjective difficult."
    },
    // 18
    {
      question: "Which sentence avoids an illogical comparison?",
      choices: [
        "My salary is higher than any employee in my department.",
        "My salary is higher than any other employee in my department.",
        "My salary is higher than the employees in my department.",
        "My salary is more higher than any employee in my department."
      ],
      correctIndex: 1,
      explanation: "Any other employee avoids comparing the salary with the person."
    },
    // 19
    {
      question: "Choose the sentence with the correct irregular comparison.",
      choices: [
        "His behavior is badder than before.",
        "His behavior is worse than before.",
        "His behavior is more worse than before.",
        "His behavior is worst than before."
      ],
      correctIndex: 1,
      explanation: "Worse is the correct comparative form of bad."
    },
    // 20
    {
      question: "Which sentence correctly uses 'the same' in comparison?",
      choices: [
        "My result is same as yours.",
        "My result is the same as yours.",
        "My result is same than yours.",
        "My result is the same than yours."
      ],
      correctIndex: 1,
      explanation: "We say the same as when comparing equality."
    },
    // 21
    {
      question: "Identify the correct sentence with multiple adjectives.",
      choices: [
        "She wore a silk beautiful red dress.",
        "She wore a beautiful red silk dress.",
        "She wore a red silk beautiful dress.",
        "She wore a red beautiful silk dress."
      ],
      correctIndex: 1,
      explanation: "Opinion (beautiful), color (red), material (silk), then noun."
    },
    // 22
    {
      question: "Which sentence contains a subtle adjective error?",
      choices: [
        "The exam was too difficult for most candidates.",
        "The exam was very difficult for most candidates.",
        "The exam was enough difficult for most candidates.",
        "The exam was quite difficult for most candidates."
      ],
      correctIndex: 2,
      explanation: "Enough difficult is incorrect; enough should follow the adjective or modify a noun."
    },
    // 23
    {
      question: "Choose the sentence that uses 'few' and 'a few' correctly.",
      choices: [
        "He has a few money left.",
        "He has few friends to help him.",
        "He has a few friends to help him.",
        "He has few breads on the table."
      ],
      correctIndex: 2,
      explanation: "A few friends suggests some friends; few is negative in tone and here not needed."
    },
    // 24
    {
      question: "Which sentence correctly uses the expression 'as...as'?",
      choices: [
        "This road is as more wide as that one.",
        "This road is wide as that one.",
        "This road is as wide as that one.",
        "This road is as widest as that one."
      ],
      correctIndex: 2,
      explanation: "As wide as is the correct correlative comparison structure."
    },
    // 25
    {
      question: "Which sentence is the best for formal written English?",
      choices: [
        "The project is super important.",
        "The project is very much important.",
        "The project is extremely important.",
        "The project is so very important."
      ],
      correctIndex: 2,
      explanation: "Extremely important is formal and precise in written English."
    }
  ],

  exam_mode: [
    // 1
    {
      question: "Identify the error: 'The newly hired staff are very competence and friendly.'",
      choices: ["newly hired", "staff", "competence", "friendly"],
      correctIndex: 2,
      explanation: "Competence should be the adjective competent."
    },
    // 2
    {
      question: "Choose the sentence with correct adjective usage.",
      choices: [
        "The report is purely factual and objective.",
        "The report is pure factual and objective.",
        "The report is factual pure and objective.",
        "The report is factual and objectival."
      ],
      correctIndex: 0,
      explanation: "Purely is the correct adverb; factual and objective are adjectives."
    },
    // 3
    {
      question: "Which sentence is grammatically correct?",
      choices: [
        "He gave me a very useful and practical advice.",
        "He gave me very useful and practical advices.",
        "He gave me some very useful and practical advice.",
        "He gave me a very useful and practical advices."
      ],
      correctIndex: 2,
      explanation: "Advice is uncountable; some very useful and practical advice is correct."
    },
    // 4
    {
      question: "Identify the sentence with correct adjective order.",
      choices: [
        "They moved into a small old yellow house.",
        "They moved into an old small yellow house.",
        "They moved into a yellow small old house.",
        "They moved into an old yellow small house."
      ],
      correctIndex: 0,
      explanation: "Size (small), age (old), color (yellow), then noun."
    },
    // 5
    {
      question: "Which sentence correctly uses an adjective after a linking verb?",
      choices: [
        "The results appear accurate.",
        "The results appear accurately.",
        "The results appear accuracy.",
        "The results appear accurateness."
      ],
      correctIndex: 0,
      explanation: "Appear is a linking verb and should be followed by an adjective."
    },
    // 6
    {
      question: "Choose the correct sentence:",
      choices: [
        "The policy is more strict than the previous one.",
        "The policy is stricter than the previous one.",
        "The policy is most strict than the previous one.",
        "The policy is more stricter than the previous one."
      ],
      correctIndex: 1,
      explanation: "Stricter is the standard comparative form of strict."
    },
    // 7
    {
      question: "Identify the error: 'This is the lesser important of the two proposals.'",
      choices: ["this is", "lesser", "important", "proposals"],
      correctIndex: 1,
      explanation: "Less important is used when comparing two; lesser is rarely used in this way."
    },
    // 8
    {
      question: "Which sentence avoids a double comparative?",
      choices: [
        "This route is more safer than that one.",
        "This route is safer than that one.",
        "This route is most safer than that one.",
        "This route is more safe than that one."
      ],
      correctIndex: 1,
      explanation: "Safer is the correct comparative; more safer is a double comparative."
    },
    // 9
    {
      question: "Choose the best revision: 'The manager gave a more clearer explanation.'",
      choices: [
        "The manager gave a clearer explanation.",
        "The manager gave a more clear explanation.",
        "The manager gave a clearer more explanation.",
        "The manager gave the most clearer explanation."
      ],
      correctIndex: 0,
      explanation: "Clearer is already comparative; more is unnecessary."
    },
    // 10
    {
      question: "Which sentence uses 'quite' and 'rather' appropriately?",
      choices: [
        "The meeting was quite exhausting but rather productive.",
        "The meeting was quite productive but rather exhausting.",
        "The meeting was quite and rather productive.",
        "The meeting was rather quite exhausting."
      ],
      correctIndex: 0,
      explanation: "Quite exhausting and rather productive is natural in context."
    },
    // 11
    {
      question: "Select the sentence with correct adjective form.",
      choices: [
        "The most part of the report is accurate.",
        "The majority part of the report is accurate.",
        "Most of the report is accurate.",
        "Mostly of the report is accurate."
      ],
      correctIndex: 2,
      explanation: "Most of the report is the correct structure; mostly is an adverb."
    },
    // 12
    {
      question: "Identify the error: 'He gave us an extremely detail explanation.'",
      choices: ["gave", "extremely", "detail", "explanation"],
      correctIndex: 2,
      explanation: "Detail should be the adjective detailed."
    },
    // 13
    {
      question: "Which sentence uses 'only' in the correct position?",
      choices: [
        "He only submitted the final report yesterday.",
        "He submitted only the final report yesterday.",
        "He submitted the only final report yesterday.",
        "He submitted the final report only yesterday."
      ],
      correctIndex: 1,
      explanation: "Only modifies the noun phrase the final report in a clear way."
    },
    // 14
    {
      question: "Choose the sentence with correct degree of comparison.",
      choices: [
        "This is the least worst outcome.",
        "This is the less bad outcome.",
        "This is the least bad outcome.",
        "This is the most worse outcome."
      ],
      correctIndex: 2,
      explanation: "Least bad is a standard way to express the 'least negative' option."
    },
    // 15
    {
      question: "Select the sentence that is BEST in formal writing.",
      choices: [
        "The results are kind of surprising.",
        "The results are somewhat surprising.",
        "The results are super surprising.",
        "The results are pretty surprising."
      ],
      correctIndex: 1,
      explanation: "Somewhat surprising is neutral and appropriate in formal writing."
    },
    // 16
    {
      question: "Identify the correct sentence:",
      choices: [
        "Our performance this quarter is more good than last quarter.",
        "Our performance this quarter is better than last quarter.",
        "Our performance this quarter is best than last quarter.",
        "Our performance this quarter is more better than last quarter."
      ],
      correctIndex: 1,
      explanation: "Better is the correct comparative of good."
    },
    // 17
    {
      question: "Which sentence uses adjective order correctly for 'document'?",
      choices: [
        "a confidential detailed long document",
        "a long detailed confidential document",
        "a detailed long confidential document",
        "a confidential long detailed document"
      ],
      correctIndex: 3,
      explanation: "Opinion (confidential), size/length (long), detail (detailed), then noun."
    },
    // 18
    {
      question: "Choose the correct sentence:",
      choices: [
        "The committee found the proposal too much risky.",
        "The committee found the proposal too risky.",
        "The committee found the proposal very too risky.",
        "The committee found the proposal risky too much."
      ],
      correctIndex: 1,
      explanation: "Too risky is the natural adjective phrase."
    },
    // 19
    {
      question: "Identify the error: 'They provided us with an adequate enough explanation.'",
      choices: ["they", "provided", "adequate enough", "explanation"],
      correctIndex: 2,
      explanation: "Adequate and enough have similar meanings; using both is redundant."
    },
    // 20
    {
      question: "Which sentence avoids redundancy with adjectives?",
      choices: [
        "We must cooperate together to finish the task.",
        "We must return back the unused funds.",
        "We must plan ahead for the busy months.",
        "We must repeat again the same process."
      ],
      correctIndex: 2,
      explanation: "Plan ahead is acceptable; cooperate together and repeat again are redundant."
    },
    // 21
    {
      question: "Select the sentence with the correct superlative structure.",
      choices: [
        "Of all the candidates, she is the most qualified.",
        "Of all the candidates, she is more qualified.",
        "Of all the candidates, she is the more qualified.",
        "Of all the candidates, she is most qualified than others."
      ],
      correctIndex: 0,
      explanation: "The most qualified is the proper superlative form."
    },
    // 22
    {
      question: "Which sentence correctly uses 'fair' and 'fairly'?",
      choices: [
        "The instructions are fairly clear.",
        "The instructions are fair clear.",
        "The instructions fairly clear.",
        "The instructions are fairlier clear."
      ],
      correctIndex: 0,
      explanation: "Fairly modifies the adjective clear and forms a natural phrase."
    },
    // 23
    {
      question: "Choose the sentence with correct adjective usage in a comparison.",
      choices: [
        "This form is more simple than the other one.",
        "This form is simpler than the other one.",
        "This form is simplest than the other one.",
        "This form is most simpler than the other one."
      ],
      correctIndex: 1,
      explanation: "Simpler is the standard comparative; more simpler is a double comparative."
    },
    // 24
    {
      question: "Identify the error: 'The building is more old than the one beside it.'",
      choices: ["the building", "is", "more old", "beside it"],
      correctIndex: 2,
      explanation: "Older is the correct comparative form, not more old."
    },
    // 25
    {
      question: "Which sentence is most appropriate for a formal report?",
      choices: [
        "The results are kind of disappointing.",
        "The results are a bit disappointing.",
        "The results are somewhat disappointing.",
        "The results are super disappointing."
      ],
      correctIndex: 2,
      explanation: "Somewhat disappointing is clear, neutral, and suitable for formal tone."
    }
  ]
};
