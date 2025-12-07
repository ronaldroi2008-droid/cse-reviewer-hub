// questions/articles.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["articles"] = {

  beginner: [
    // 1-10: Basic 'A' vs 'An'
    {
      question: "I saw ___ cat in the street.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'cat' starts with a consonant sound (C) and we are talking about one generic cat."
    },
    {
      question: "She is eating ___ apple.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'apple' starts with a vowel sound (A)."
    },
    {
      question: "He is ___ engineer.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'engineer' starts with a vowel sound (E)."
    },
    {
      question: "I need ___ new phone.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'new' starts with a consonant sound (N)."
    },
    {
      question: "It is ___ orange.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'orange' starts with a vowel sound (O)."
    },
    {
      question: "Do you have ___ umbrella?",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'umbrella' starts with a vowel sound (U - 'uh')."
    },
    {
      question: "He works in ___ bank.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'bank' starts with a consonant sound (B)."
    },
    {
      question: "She wants to buy ___ car.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'car' starts with a consonant sound (C)."
    },
    {
      question: "There is ___ elephant in the zoo.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'elephant' starts with a vowel sound (E)."
    },
    {
      question: "I have ___ dog.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'dog' starts with a consonant sound (D)."
    },

    // 11-20: Tricky 'A' vs 'An'
    {
      question: "He will arrive in ___ hour.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'hour' starts with a silent 'H'. It sounds like 'our' (vowel sound)."
    },
    {
      question: "It is ___ honor to meet you.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because the 'H' in 'honor' is silent. It starts with an 'O' sound."
    },
    {
      question: "She goes to ___ university.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'university' starts with a 'Y' sound ('yoo-niversity'), which is a consonant sound."
    },
    {
      question: "He wears ___ uniform.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'uniform' starts with a 'Y' sound ('yoo-niform')."
    },
    {
      question: "This is ___ useful book.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'useful' starts with a 'Y' sound ('yoo-seful')."
    },
    {
      question: "He is ___ honest man.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because the 'H' in 'honest' is silent."
    },
    {
      question: "I saw ___ unicorn in the movie.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'unicorn' starts with a 'Y' sound ('yoo-nicorn')."
    },
    {
      question: "She is ___ European girl.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'European' starts with a 'Y' sound ('yoo-ropean')."
    },
    {
      question: "It was ___ one-way street.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'one' starts with a 'W' sound ('won'), which is a consonant sound."
    },
    {
      question: "I have ___ MBA degree.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because the letter 'M' is pronounced 'em', starting with a vowel sound."
    },

    // 21-30: Basic 'The'
    {
      question: "Look at ___ moon!",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' because there is only one moon relative to Earth (Unique)."
    },
    {
      question: "___ sun is hot today.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' because there is only one sun in our solar system."
    },
    {
      question: "___ sky is blue.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' because the sky is a unique environment."
    },
    {
      question: "The bird flew across ___ world.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' because there is only one world we live in."
    },
    {
      question: "He serves in ___ army.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We usually use 'the' with organized services like the army, the police, or the navy."
    },
    {
      question: "I want to speak to ___ manager.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' because we imply a specific person (the manager of this specific place)."
    },
    {
      question: "Please close ___ door.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' because both the speaker and listener know which specific door is being referred to."
    },
    {
      question: "Can you pass ___ salt, please?",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' because we are talking about the specific salt on the table."
    },
    {
      question: "___ President will speak tonight.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' for unique titles within a country (The President, The Prime Minister)."
    },
    {
      question: "Turn off ___ light.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' because we are referring to the specific light in the room."
    },

    // 31-40: Basic Plurals & Uncountables
    {
      question: "I love ___ cats.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article (Zero Article) when talking about plural nouns in general."
    },
    {
      question: "___ water is essential for life.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article for general uncountable nouns like water."
    },
    {
      question: "___ dogs are loyal animals.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article because we are generalizing about all dogs."
    },
    {
      question: "Do you like ___ music?",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article for abstract, uncountable nouns like music in general."
    },
    {
      question: "She drinks ___ milk every day.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article because 'milk' is uncountable and we aren't specifying which milk."
    },
    {
      question: "___ gold is expensive.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article for materials and substances in general."
    },
    {
      question: "I hate ___ spiders.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article for plural nouns when talking about the whole category."
    },
    {
      question: "___ birds can fly.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article for general statements about plural nouns."
    },
    {
      question: "He collects ___ stamps.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article for plural objects in general."
    },
    {
      question: "___ sugar is sweet.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article for general uncountable substances."
    },

    // 41-50: Jobs and Professions
    {
      question: "My mother is ___ teacher.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' when stating someone's profession."
    },
    {
      question: "He wants to be ___ artist.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'artist' starts with a vowel sound."
    },
    {
      question: "Are you ___ student?",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' for singular professions/roles."
    },
    {
      question: "He is ___ doctor.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' for professions."
    },
    {
      question: "She works as ___ accountant.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'accountant' starts with a vowel."
    },
    {
      question: "John is ___ waiter.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "Standard use of 'a' for jobs."
    },
    {
      question: "I am ___ architect.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "Standard use of 'an' for vowel-starting jobs."
    },
    {
      question: "He is ___ famous actor.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "We use 'a' because 'famous' starts with a consonant."
    },
    {
      question: "She is ___ honest lawyer.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "We use 'an' because 'honest' starts with a vowel sound."
    },
    {
      question: "They are ___ engineers.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use NO article because 'engineers' is plural. 'A/An' is only for singular nouns."
    }
  ],

  intermediate: [
    // 1-10: First Mention vs Second Mention
    {
      question: "I bought a shirt. ___ shirt is blue.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "We use 'The' because we mentioned the shirt in the previous sentence. It is now specific."
    },
    {
      question: "I saw a dog. ___ dog was barking.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Second mention rule: When we talk about it again, it becomes 'The'."
    },
    {
      question: "She has a son and a daughter. ___ daughter is a doctor.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "We use 'The' because we are referring to the specific daughter mentioned before."
    },
    {
      question: "There is an apple on the desk. ___ apple is for you.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "We identify the specific apple mentioned in the first sentence."
    },
    {
      question: "I went to a restaurant. ___ restaurant was very expensive.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Second mention makes the noun specific."
    },
    {
      question: "He planted a tree. ___ tree grew very tall.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Referring back to the specific tree planted."
    },
    {
      question: "I read a book. ___ book was boring.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Referring back to the specific book."
    },
    {
      question: "We stayed in a hotel. ___ hotel had a pool.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Referring back to the specific hotel."
    },
    {
      question: "I found a coin. ___ coin was old.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Referring back to the specific coin."
    },
    {
      question: "She baked a cake. ___ cake tasted delicious.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Referring back to the specific cake."
    },

    // 11-20: Specific vs General
    {
      question: "___ sugar in this coffee is too much.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "We use 'The' because we are talking about specific sugar (the sugar *in this coffee*), not sugar in general."
    },
    {
      question: "___ milk is good for your bones.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article because we are talking about milk in general."
    },
    {
      question: "___ children in that park are playing.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "We use 'The' because we are specifying *which* children (the ones in that park)."
    },
    {
      question: "___ children love toys.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article because we are making a general statement about all children."
    },
    {
      question: "___ life is beautiful.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "We use no article for abstract concepts like 'Life' in general."
    },
    {
      question: "___ life of Shakespeare was fascinating.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "We use 'The' because it is specific: the life *of Shakespeare*."
    },
    {
      question: "I like ___ coffee.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "General preference for the substance."
    },
    {
      question: "___ coffee I drank this morning was cold.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Specific coffee (the one I drank)."
    },
    {
      question: "___ history is interesting.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "General subject."
    },
    {
      question: "___ history of the Philippines is complex.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Specific history (of a specific place)."
    },

    // 21-30: Instruments vs Sports
    {
      question: "Can you play ___ guitar?",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' with musical instruments."
    },
    {
      question: "I love playing ___ football.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We do NOT use articles with sports or games."
    },
    {
      question: "She plays ___ piano very well.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Musical instruments take 'the'."
    },
    {
      question: "Let's play ___ chess.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "No article for board games or sports."
    },
    {
      question: "He is learning ___ violin.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Instrument = 'the'."
    },
    {
      question: "Do you play ___ tennis?",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Sport = No article."
    },
    {
      question: "He plays ___ drums.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Instrument = 'the'."
    },
    {
      question: "They play ___ basketball every Sunday.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Sport = No article."
    },
    {
      question: "She wants to learn ___ flute.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Instrument = 'the'."
    },
    {
      question: "We play ___ poker on Fridays.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Game = No article."
    },

    // 31-40: Time Expressions & Directions
    {
      question: "I work in ___ morning.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Standard expression: 'In the morning' (also 'in the afternoon', 'in the evening')."
    },
    {
      question: "She sleeps at ___ night.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Exception! We say 'At night' without 'the'."
    },
    {
      question: "The sun rises in ___ East.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' with cardinal points (North, South, East, West)."
    },
    {
      question: "My house is on ___ left.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We use 'the' with directions like 'the left' or 'the right'."
    },
    {
      question: "See you in ___ afternoon.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Standard expression: 'In the afternoon'."
    },
    {
      question: "We travel to ___ North.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Cardinal point = 'the'."
    },
    {
      question: "At ___ noon, we eat lunch.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We say 'At noon' or 'At midnight' without an article."
    },
    {
      question: "In ___ evening, I watch TV.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Standard expression: 'In the evening'."
    },
    {
      question: "Look to ___ right.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Direction = 'the'."
    },
    {
      question: "By ___ sunset, we must be home.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Expressions like 'by sunset', 'at sunrise', 'at dawn' usually take no article."
    },

    // 41-50: School/Home/Work
    {
      question: "I am going to ___ home.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "We do not use an article with 'home' when used with verbs of movement (go home, come home)."
    },
    {
      question: "He is at ___ work.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Standard expression: 'At work' takes no article."
    },
    {
      question: "Students go to ___ school to learn.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "When we go for the *primary purpose* (learning), we use no article."
    },
    {
      question: "Her mother went to ___ school to meet the teacher.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Here, the mother is visiting the *specific building*, not studying there, so we use 'the'."
    },
    {
      question: "He is in ___ bed (sleeping).",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "When used for its purpose (sleeping), we say 'in bed'."
    },
    {
      question: "The cat is on ___ bed.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Here we refer to the specific furniture item, so we use 'the'."
    },
    {
      question: "They go to ___ church on Sundays.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "For religious worship, we say 'go to church'."
    },
    {
      question: "The tourists visited ___ church.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "They are visiting the building for sightseeing, not worship, so we use 'the'."
    },
    {
      question: "He is in ___ class.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Meaning he is studying/attending a lesson."
    },
    {
      question: "I left my bag in ___ class.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Referring to the specific room."
    }
  ],

  advanced: [
    // 1-10: Geographical Names
    {
      question: "We visited ___ France.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Most countries (singular names) do NOT take an article."
    },
    {
      question: "She lives in ___ Philippines.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Countries with plural names (islands, states) take 'The' (The Philippines, The Netherlands)."
    },
    {
      question: "He is from ___ USA.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Countries with words like 'United', 'Republic', or 'Kingdom' take 'The'."
    },
    {
      question: "They went to ___ Paris.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Cities generally do NOT take an article."
    },
    {
      question: "___ United Kingdom is in Europe.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "We use 'The' because of the word 'Kingdom'."
    },
    {
      question: "___ Mount Everest is the highest peak.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "Individual mountains do NOT take 'the'. (But mountain ranges do!)."
    },
    {
      question: "They crossed ___ Atlantic Ocean.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Oceans and seas always take 'The'."
    },
    {
      question: "___ Lake Taal is beautiful.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "Individual lakes do NOT take 'the'."
    },
    {
      question: "___ Nile River is long.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Rivers always take 'The'."
    },
    {
      question: "___ Alps are in Europe.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Mountain *ranges* (plural) take 'The'."
    },

    // 11-20: Geographical Names Part 2
    {
      question: "She lives in ___ New York.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Cities and states usually take zero article."
    },
    {
      question: "We went to ___ Sahara Desert.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Deserts take 'The'."
    },
    {
      question: "___ Republic of China.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Includes the word 'Republic', so it takes 'The'."
    },
    {
      question: "___ Asia is a large continent.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "Continents do NOT take an article."
    },
    {
      question: "___ Bahamas is a popular destination.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Plural island group name, so it takes 'The'."
    },
    {
      question: "___ Madagascar is an island.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "Singular islands do NOT take 'the'."
    },
    {
      question: "___ Pacific Ocean.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Oceans take 'The'."
    },
    {
      question: "___ Mount Fuji.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "Individual mountain = No article."
    },
    {
      question: "___ Andes Mountains.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Mountain range = 'The'."
    },
    {
      question: "___ South Africa.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "Country name = No article."
    },

    // 21-30: Superlatives & Ordinals
    {
      question: "He is ___ best student.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Superlative adjectives (best, tallest, fastest) always take 'The'."
    },
    {
      question: "This is ___ most expensive car.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Superlative 'most' requires 'The'."
    },
    {
      question: "I live on ___ second floor.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Ordinal numbers (first, second, third) usually take 'The'."
    },
    {
      question: "Who was ___ first person to land on the moon?",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Ordinal number 'first' takes 'The'."
    },
    {
      question: "She is ___ tallest girl in class.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Superlative 'tallest' takes 'The'."
    },
    {
      question: "Monday is ___ first day of the week.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Ordinal number = 'The'."
    },
    {
      question: "That was ___ worst movie ever.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Superlative 'worst' takes 'The'."
    },
    {
      question: "He is ___ only child.",
      options: ["a", "an", "the", "-"],
      answer: "an",
      explanation: "Trick! Here 'only' starts with a vowel, and we are describing him as 'an only child' (a category). However, if saying 'The only one', it changes."
    },
    {
      question: "You are ___ only person I know here.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "When 'only' implies uniqueness in a specific group, we use 'The'."
    },
    {
      question: "It is ___ most interesting book.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Superlative = 'The'."
    },

    // 31-40: "The" with Adjectives
    {
      question: "___ rich should help ___ poor.",
      options: ["The / the", "A / a", "- / -", "The / -"],
      answer: "The / the",
      explanation: "When we use an adjective to represent a whole group of people (The rich people), we use 'The' + Adjective."
    },
    {
      question: "___ elderly need respect.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "'The elderly' refers to all elderly people as a group."
    },
    {
      question: "The government should help ___ unemployed.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "'The unemployed' refers to the group of all unemployed people."
    },
    {
      question: "___ French are famous for their food.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "When referring to the nationality as a whole people, we use 'The'."
    },
    {
      question: "___ blind communicate using Braille.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Refers to all blind people as a group."
    },
    {
      question: "___ injured were taken to the hospital.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Refers to the specific group of injured people."
    },
    {
      question: "___ young have a lot of energy.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Refers to young people collectively."
    },
    {
      question: "___ homeless need shelter.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Refers to homeless people collectively."
    },
    {
      question: "___ Japanese are very polite.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Refers to the Japanese people as a nation."
    },
    {
      question: "He is ___ Japanese.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Trick! Here 'Japanese' is an adjective describing 'He'. We don't say 'He is a Japanese' (usually rude/incorrect). We say 'He is Japanese' (Adjective) or 'He is a Japanese person'."
    },

    // 41-50: Materials vs Specific Items
    {
      question: "This table is made of ___ wood.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Materials (wood, plastic, metal) take no article."
    },
    {
      question: "___ wood in this table is expensive.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "We use 'The' because we are talking about the specific wood used in *this* table."
    },
    {
      question: "She likes wearing ___ silk.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Material in general."
    },
    {
      question: "___ silk she bought is soft.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Specific silk she bought."
    },
    {
      question: "___ paper is made from trees.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "General material."
    },
    {
      question: "I need ___ paper to write on.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "Here 'a paper' can mean 'a newspaper' or 'a document'. If meaning a sheet, usually 'a piece of paper'."
    },
    {
      question: "___ glass is fragile.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "General material."
    },
    {
      question: "He broke ___ glass.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "Here 'a glass' refers to the drinking vessel (countable object), not the material."
    },
    {
      question: "Do you like ___ iron?",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Referring to the metal/element."
    },
    {
      question: "I have ___ iron at home.",
      options: ["an", "a", "the", "-"],
      answer: "an",
      explanation: "Referring to the tool for pressing clothes (Countable)."
    }
  ],

 

  expert: [
    // 1-10: Nuances of Abstract Nouns & Generalizations
    {
      question: "___ nature looks beautiful in autumn.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "When 'nature' refers to the physical world (plants, animals), we use no article."
    },
    {
      question: "___ nature of this problem is complex.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Here 'nature' means 'the essential quality' or 'character' of something specific, so we use 'the'."
    },
    {
      question: "___ society must protect its children.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "When referring to society as a general concept/civilization, we use no article."
    },
    {
      question: "He joined ___ society for animal welfare.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "Here 'society' refers to a specific organization or club, so we use 'a'."
    },
    {
      question: "___ space is endless.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "When referring to the universe, 'space' takes no article."
    },
    {
      question: "I tried to park, but ___ space was too small.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Referring to a specific area/spot."
    },
    {
      question: "___ history repeats itself.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "General abstract concept."
    },
    {
      question: "He wrote a book on ___ history of Magic.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Specific history of a specific subject."
    },
    {
      question: "___ man cannot live by bread alone.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "When 'Man' implies 'Mankind' or the human race, we use no article."
    },
    {
      question: "___ woman was elected as chairperson.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "Unlike 'Man', 'Woman' usually follows standard article rules (A woman/The woman). Use 'a' for singular generic here."
    },

    // 11-20: Tricky Geographical & Place Names
    {
      question: "We stayed at ___ Hilton Hotel.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Hotels, theaters, and museums usually take 'The'."
    },
    {
      question: "They visited ___ British Museum.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Museums usually take 'The'."
    },
    {
      question: "I met him at ___ Kennedy Airport.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Airports, stations, and bridges usually take NO article (e.g., Heathrow Airport, Waterloo Station)."
    },
    {
      question: "We walked across ___ Tower Bridge.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Most bridges (named after places/people) use zero article."
    },
    {
      question: "___ Golden Gate Bridge is in San Francisco.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Exception! Major famous bridges often keep 'The' if the name feels descriptive, but local bridges usually don't."
    },
    {
      question: "___ Hyde Park is famous.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "Parks usually take NO article (Central Park, Rizal Park)."
    },
    {
      question: "She studies at ___ Oxford University.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Name + University = No Article."
    },
    {
      question: "She studies at ___ University of Oxford.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "The University of + Name = 'The'."
    },
    {
      question: "___ Mount Olympus.",
      options: ["A", "An", "The", "- (No article)"],
      answer: "- (No article)",
      explanation: "Individual mountain = No article."
    },
    {
      question: "___ Matterhorn.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "Exception! Some famous peaks (especially in the Alps) take 'The' (The Matterhorn, The Eiger)."
    },

    // 21-30: Parallel Structures & Comparatives
    {
      question: "___ sooner, ___ better.",
      options: ["The / the", "A / a", "- / -", "The / -"],
      answer: "The / the",
      explanation: "Double Comparative structure: 'The [comparative], the [comparative]'."
    },
    {
      question: "___ more you learn, ___ more you know.",
      options: ["The / the", "A / a", "- / -", "The / -"],
      answer: "The / the",
      explanation: "Double Comparative rule."
    },
    {
      question: "He walked from ___ top to ___ bottom.",
      options: ["the / the", "- / -", "a / a", "the / -"],
      answer: "- / -",
      explanation: "Idiom: 'From top to bottom' usually takes zero articles in this parallel structure."
    },
    {
      question: "They fought ___ face to ___ face.",
      options: ["the / the", "a / a", "- / -", "the / a"],
      answer: "- / -",
      explanation: "Idiom: 'Face to face' takes no articles."
    },
    {
      question: "They go to school by ___ day and sleep by ___ night.",
      options: ["the / the", "- / -", "a / a", "the / a"],
      answer: "- / -",
      explanation: "Time idioms with 'by' (by day, by night) take no article."
    },
    {
      question: "___ pen is mightier than ___ sword.",
      options: ["The / the", "A / a", "- / -", "The / a"],
      answer: "The / the",
      explanation: "Proverbial usage: referring to the concepts/inventions of 'The Pen' and 'The Sword'."
    },
    {
      question: "___ arm in ___ arm.",
      options: ["The / the", "An / an", "- / -", "The / -"],
      answer: "- / -",
      explanation: "Idiom: 'Arm in arm' (linked arms) takes no article."
    },
    {
      question: "___ father and ___ son were reunited.",
      options: ["The / the", "- / -", "A / a", "The / -"],
      answer: "- / -",
      explanation: "In parallel pairs describing relationships, articles are often omitted: 'Father and son', 'Husband and wife'."
    },
    {
      question: "___ owl is a nocturnal bird.",
      options: ["The", "A", "An", "All of the above"],
      answer: "All of the above",
      explanation: "Expert nuance: You can say 'The owl' (species), 'An owl' (any owl), or 'Owls' (plural). All act as valid generalizations."
    },
    {
      question: "___ telephone was invented by Bell.",
      options: ["A", "An", "The", "-"],
      answer: "The",
      explanation: "When referring to an invention as a class/system, use 'The'."
    },

    // 31-40: Body Parts & Physical Actions
    {
      question: "He hit me in ___ face.",
      options: ["a", "an", "the", "my"],
      answer: "the",
      explanation: "English Idiom: We usually use 'the' + body part after a verb of contact (hit in the face, pat on the back), rather than possessive 'my'."
    },
    {
      question: "She patted him on ___ back.",
      options: ["a", "an", "the", "his"],
      answer: "the",
      explanation: "Verb of contact + preposition + 'the' + body part."
    },
    {
      question: "He took her by ___ hand.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Standard idiom: 'By the hand'."
    },
    {
      question: "Look me in ___ eye.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Standard idiom: 'In the eye'."
    },
    {
      question: "He has ___ broad shoulders.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Plural body parts described with adjectives usually take no article."
    },
    {
      question: "She has ___ broken leg.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "Specific medical injury = 'a'."
    },
    {
      question: "My brother is ___ sea captain.",
      options: ["a", "an", "the", "-"],
      answer: "a",
      explanation: "Profession = 'a'."
    },
    {
      question: "He is at ___ sea (sailing).",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Idiom: 'At sea' means on a voyage. 'At the sea' means at the coast/beach."
    },
    {
      question: "The sailor went to ___ sea.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Idiom: 'Go to sea' means to become a sailor or start a voyage."
    },
    {
      question: "We went to ___ sea to swim.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Referring to the ocean/beach location."
    },

    // 41-50: Rare & Complex Idioms
    {
      question: "He was taken into ___ custody.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Legal idiom: 'Into custody' takes no article."
    },
    {
      question: "The two countries are at ___ war.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "State of conflict: 'At war' takes no article."
    },
    {
      question: "During ___ war (WWII), life was hard.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Referring to a specific historical period."
    },
    {
      question: "I am in ___ trouble.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Idiom: 'In trouble' takes no article."
    },
    {
      question: "It is out of ___ question.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Idiom: 'Out of the question' (impossible) always takes 'the'."
    },
    {
      question: "He took ___ office (power) in January.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Idiom: 'Take office' (assume power) uses zero article."
    },
    {
      question: "She works at ___ post office.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "We usually say 'the post office', 'the bank', 'the doctor' even if not specifying which one specifically."
    },
    {
      question: "To be in ___ debt.",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Idiom: 'In debt' uses zero article."
    },
    {
      question: "On ___ whole, the movie was good.",
      options: ["a", "an", "the", "-"],
      answer: "the",
      explanation: "Idiom: 'On the whole'."
    },
    {
      question: "In ___ conclusion, I would like to say...",
      options: ["a", "an", "the", "- (No article)"],
      answer: "- (No article)",
      explanation: "Idiom: 'In conclusion' uses zero article."
    }
  ]

  
};
