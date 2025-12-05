// questions/nouns.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data for "nouns"
window.VERBAL_QUESTION_BANK["nouns"] = {

  beginner: [
    // 1-10: Identifying Nouns (Person)
    {
      question: "Which word is a noun?",
      options: ["quickly", "happy", "table", "outside"],
      answer: "table",
      explanation: '"Table" is a noun because it names a thing.'
    },
    {
      question: 'Which word is a noun in this sentence: "The boy runs fast"?',
      options: ["boy", "runs", "fast", "the"],
      answer: "boy",
      explanation: '"Boy" is a noun; it names a person.'
    },
    {
      question: "Which of the following is a person noun?",
      options: ["library", "teacher", "city", "river"],
      answer: "teacher",
      explanation: '"Teacher" names a person.'
    },
    {
      question: "Find the noun: 'The baby sleeps.'",
      options: ["The", "baby", "sleeps", "quietly"],
      answer: "baby",
      explanation: '"Baby" is the person in the sentence.'
    },
    {
      question: "Which word names a person?",
      options: ["sister", "blue", "jump", "under"],
      answer: "sister",
      explanation: '"Sister" is a person.'
    },
    {
      question: "Select the noun: 'My doctor is kind.'",
      options: ["My", "doctor", "is", "kind"],
      answer: "doctor",
      explanation: '"Doctor" names a person.'
    },
    {
      question: "Which is a noun?",
      options: ["sing", "loudly", "uncle", "soft"],
      answer: "uncle",
      explanation: '"Uncle" is a noun (person).'
    },
    {
      question: "Identify the noun: 'A driver drives the bus.'",
      options: ["driver", "drives", "the", "fast"],
      answer: "driver",
      explanation: '"Driver" is a person noun.'
    },
    {
      question: "Which word is a noun?",
      options: ["friend", "play", "funny", "always"],
      answer: "friend",
      explanation: '"Friend" is a noun.'
    },
    {
      question: "Find the noun: 'The king sat down.'",
      options: ["sat", "king", "down", "The"],
      answer: "king",
      explanation: '"King" is a person noun.'
    },

    // 11-20: Identifying Nouns (Place)
    {
      question: "Which word is a place noun?",
      options: ["honesty", "mountain", "sing", "blue"],
      answer: "mountain",
      explanation: '"Mountain" names a place.'
    },
    {
      question: "Find the place noun: 'We went to the park.'",
      options: ["We", "went", "park", "to"],
      answer: "park",
      explanation: '"Park" is a place.'
    },
    {
      question: "Which is a place?",
      options: ["apple", "school", "run", "red"],
      answer: "school",
      explanation: '"School" is a place.'
    },
    {
      question: "Select the noun: 'The city is big.'",
      options: ["The", "city", "is", "big"],
      answer: "city",
      explanation: '"City" is a place noun.'
    },
    {
      question: "Which word names a place?",
      options: ["kitchen", "jump", "happy", "spoon"],
      answer: "kitchen",
      explanation: '"Kitchen" is a room/place.'
    },
    {
      question: "Identify the place: 'Let's go to the beach.'",
      options: ["Let's", "go", "beach", "the"],
      answer: "beach",
      explanation: '"Beach" is a place.'
    },
    {
      question: "Which is a noun?",
      options: ["garden", "swim", "slowly", "sad"],
      answer: "garden",
      explanation: '"Garden" is a place noun.'
    },
    {
      question: "Find the noun: 'The library is quiet.'",
      options: ["library", "quiet", "is", "The"],
      answer: "library",
      explanation: '"Library" is a place.'
    },
    {
      question: "Which word is a place?",
      options: ["store", "run", "eat", "hot"],
      answer: "store",
      explanation: '"Store" is a place.'
    },
    {
      question: "Identify the noun: 'My house is white.'",
      options: ["My", "house", "is", "white"],
      answer: "house",
      explanation: '"House" is a place noun.'
    },

    // 21-30: Identifying Nouns (Thing)
    {
      question: "Which word names a thing?",
      options: ["run", "pencil", "happy", "slow"],
      answer: "pencil",
      explanation: '"Pencil" is a thing.'
    },
    {
      question: "Find the noun: 'The car is red.'",
      options: ["The", "car", "is", "red"],
      answer: "car",
      explanation: '"Car" is a thing.'
    },
    {
      question: "Which is a thing?",
      options: ["eat", "sleep", "ball", "walk"],
      answer: "ball",
      explanation: '"Ball" is a thing.'
    },
    {
      question: "Select the noun: 'I have a new phone.'",
      options: ["I", "have", "new", "phone"],
      answer: "phone",
      explanation: '"Phone" is a thing.'
    },
    {
      question: "Which word is a noun?",
      options: ["apple", "jump", "green", "under"],
      answer: "apple",
      explanation: '"Apple" is a thing.'
    },
    {
      question: "Identify the thing: 'The chair is hard.'",
      options: ["The", "chair", "is", "hard"],
      answer: "chair",
      explanation: '"Chair" is a thing.'
    },
    {
      question: "Which is a noun?",
      options: ["shoe", "go", "fast", "up"],
      answer: "shoe",
      explanation: '"Shoe" is a thing.'
    },
    {
      question: "Find the noun: 'Read the book.'",
      options: ["Read", "the", "book", "loudly"],
      answer: "book",
      explanation: '"Book" is a thing.'
    },
    {
      question: "Which word names a thing?",
      options: ["cup", "sing", "nice", "they"],
      answer: "cup",
      explanation: '"Cup" is a thing.'
    },
    {
      question: "Select the noun: 'The computer is on.'",
      options: ["The", "computer", "is", "on"],
      answer: "computer",
      explanation: '"Computer" is a thing.'
    },

    // 31-40: Identifying Nouns (Idea/Abstract - Basic)
    {
      question: "Which of the following is an idea (abstract) noun?",
      options: ["happiness", "chair", "garden", "window"],
      answer: "happiness",
      explanation: '"Happiness" is a feeling/idea.'
    },
    {
      question: "Find the abstract noun: 'Love is important.'",
      options: ["Love", "is", "important", "very"],
      answer: "Love",
      explanation: '"Love" is an idea or feeling.'
    },
    {
      question: "Which is an idea?",
      options: ["table", "freedom", "pen", "dog"],
      answer: "freedom",
      explanation: '"Freedom" is an idea.'
    },
    {
      question: "Select the noun: 'Her beauty is famous.'",
      options: ["Her", "beauty", "is", "famous"],
      answer: "beauty",
      explanation: '"Beauty" is an abstract noun.'
    },
    {
      question: "Which word is an abstract noun?",
      options: ["hope", "door", "cat", "tree"],
      answer: "hope",
      explanation: '"Hope" is a feeling/idea.'
    },
    {
      question: "Find the noun: 'We want peace.'",
      options: ["We", "want", "peace", "now"],
      answer: "peace",
      explanation: '"Peace" is an abstract noun.'
    },
    {
      question: "Which is a noun?",
      options: ["anger", "angry", "angrily", "red"],
      answer: "anger",
      explanation: '"Anger" is the name of the feeling (noun).'
    },
    {
      question: "Identify the abstract noun: 'Time flies fast.'",
      options: ["Time", "flies", "fast", "very"],
      answer: "Time",
      explanation: '"Time" is an abstract concept.'
    },
    {
      question: "Which word is a noun?",
      options: ["bravery", "brave", "bravely", "strong"],
      answer: "bravery",
      explanation: '"Bravery" is a quality/noun.'
    },
    {
      question: "Find the noun: 'It gives me joy.'",
      options: ["It", "gives", "me", "joy"],
      answer: "joy",
      explanation: '"Joy" is a feeling/noun.'
    },

    // 41-50: Proper vs Common & Simple Plurals
    {
      question: "Which is a Proper Noun (specific name)?",
      options: ["city", "London", "town", "village"],
      answer: "London",
      explanation: '"London" is the specific name of a city.'
    },
    {
      question: "Which is a Common Noun?",
      options: ["Superman", "Batman", "hero", "Spiderman"],
      answer: "hero",
      explanation: '"Hero" is a general term, not a specific name.'
    },
    {
      question: "Select the Proper Noun:",
      options: ["man", "boy", "John", "guy"],
      answer: "John",
      explanation: '"John" is a specific name.'
    },
    {
      question: "Which needs a capital letter?",
      options: ["river", "nile", "water", "lake"],
      answer: "nile",
      explanation: '"Nile" is a proper noun (Name of a river).'
    },
    {
      question: "What is the plural of 'cat'?",
      options: ["cat", "cats", "cates", "catss"],
      answer: "cats",
      explanation: 'Add "s" to make "cat" plural.'
    },
    {
      question: "What is the plural of 'dog'?",
      options: ["dogs", "doges", "dog", "doggies"],
      answer: "dogs",
      explanation: 'Add "s" to make "dog" plural.'
    },
    {
      question: "What is the plural of 'box'?",
      options: ["boxs", "boxes", "boxies", "box"],
      answer: "boxes",
      explanation: 'Add "es" to words ending in x.'
    },
    {
      question: "What is the plural of 'bus'?",
      options: ["buss", "buses", "busses", "busies"],
      answer: "buses",
      explanation: 'Add "es" to words ending in s.'
    },
    {
      question: "What is the plural of 'baby'?",
      options: ["babys", "babyes", "babies", "babe"],
      answer: "babies",
      explanation: 'Change "y" to "i" and add "es".'
    },
    {
      question: "Which is singular?",
      options: ["cups", "cup", "cuppes", "caps"],
      answer: "cup",
      explanation: '"Cup" is one item.'
    }
  ],

  intermediate: [
    // 1-15: Irregular Plurals
    {
      question: "Which of the following is an irregular plural noun?",
      options: ["cars", "books", "children", "houses"],
      answer: "children",
      explanation: '"Children" is the irregular plural of "child".'
    },
    {
      question: "Which plural form is correct?",
      options: ["foot", "foots", "feet", "feets"],
      answer: "feet",
      explanation: '"Feet" is the plural of "foot".'
    },
    {
      question: "Which plural noun is correct?",
      options: ["womans", "woman", "womens", "women"],
      answer: "women",
      explanation: '"Women" is the plural of "woman".'
    },
    {
      question: "What is the plural of 'tooth'?",
      options: ["tooths", "teeth", "toothes", "teeths"],
      answer: "teeth",
      explanation: '"Teeth" is the plural of "tooth".'
    },
    {
      question: "What is the plural of 'mouse'?",
      options: ["mouses", "mices", "mice", "mouse"],
      answer: "mice",
      explanation: '"Mice" is the plural of "mouse".'
    },
    {
      question: "What is the plural of 'person'?",
      options: ["persons", "people", "peoples", "persones"],
      answer: "people",
      explanation: '"People" is the most common plural of "person".'
    },
    {
      question: "What is the plural of 'leaf'?",
      options: ["leafs", "leaves", "leafes", "leave"],
      answer: "leaves",
      explanation: 'Nouns ending in "f" often change to "ves".'
    },
    {
      question: "What is the plural of 'knife'?",
      options: ["knifes", "knives", "knive", "knifves"],
      answer: "knives",
      explanation: 'Change "fe" to "ves".'
    },
    {
      question: "What is the plural of 'sheep'?",
      options: ["sheeps", "sheep", "shoop", "sheepes"],
      answer: "sheep",
      explanation: '"Sheep" stays the same in plural.'
    },
    {
      question: "What is the plural of 'fish'?",
      options: ["fishs", "fish", "fishes", "fishies"],
      answer: "fish",
      explanation: '"Fish" usually stays the same (unless talking about species).'
    },
    {
      question: "What is the plural of 'goose'?",
      options: ["gooses", "geese", "geeses", "goose"],
      answer: "geese",
      explanation: '"Geese" is the plural of "goose".'
    },
    {
      question: "What is the plural of 'ox'?",
      options: ["oxes", "oxs", "oxen", "oxens"],
      answer: "oxen",
      explanation: '"Oxen" is the plural of "ox".'
    },
    {
      question: "What is the plural of 'cactus'?",
      options: ["cactuses", "cacti", "cactus", "cactii"],
      answer: "cacti",
      explanation: '"Cacti" is the plural of "cactus".'
    },
    {
      question: "What is the plural of 'child'?",
      options: ["childs", "children", "childes", "childrens"],
      answer: "children",
      explanation: '"Children" is correct.'
    },
    {
      question: "What is the plural of 'life'?",
      options: ["lifes", "lives", "live", "liffes"],
      answer: "lives",
      explanation: 'Change "fe" to "ves".'
    },

    // 16-30: Countable vs Uncountable Nouns
    {
      question: "Which sentence uses a countable noun correctly?",
      options: ["He gave me three advice.", "She bought two breads.", "I have two cars.", "We have many furniture."],
      answer: "I have two cars.",
      explanation: '"Cars" is countable.'
    },
    {
      question: "Which sentence uses an uncountable noun correctly?",
      options: ["She has many money.", "He has much experience.", "We bought three rice.", "They gave me two information."],
      answer: "He has much experience.",
      explanation: '"Experience" (as knowledge) is uncountable; use "much".'
    },
    {
      question: "Which word is an uncountable noun?",
      options: ["apple", "water", "bottle", "cup"],
      answer: "water",
      explanation: '"Water" is a liquid and uncountable.'
    },
    {
      question: "Which word is a countable noun?",
      options: ["rice", "sugar", "orange", "milk"],
      answer: "orange",
      explanation: '"Orange" can be counted (one orange, two oranges).'
    },
    {
      question: "Select the correct phrase:",
      options: ["many waters", "much water", "many water", "much waters"],
      answer: "much water",
      explanation: 'Use "much" with uncountable nouns like "water".'
    },
    {
      question: "Select the correct phrase:",
      options: ["few information", "little information", "an information", "two informations"],
      answer: "little information",
      explanation: 'Use "little" with uncountable nouns.'
    },
    {
      question: "Which noun is uncountable?",
      options: ["chair", "table", "furniture", "desk"],
      answer: "furniture",
      explanation: '"Furniture" is a collective uncountable noun.'
    },
    {
      question: "Which noun is uncountable?",
      options: ["suitcase", "bag", "luggage", "box"],
      answer: "luggage",
      explanation: '"Luggage" is uncountable.'
    },
    {
      question: "Correct usage:",
      options: ["I have a news.", "I have some news.", "I have two news.", "I have many news."],
      answer: "I have some news.",
      explanation: '"News" is uncountable; use "some".'
    },
    {
      question: "Which is correct?",
      options: ["How many money do you have?", "How much money do you have?", "How many moneys?", "How much moneys?"],
      answer: "How much money do you have?",
      explanation: '"Money" is uncountable, so use "How much".'
    },
    {
      question: "Identify the countable noun:",
      options: ["bread", "flour", "bun", "dough"],
      answer: "bun",
      explanation: '"Bun" is countable.'
    },
    {
      question: "Identify the uncountable noun:",
      options: ["cloud", "rain", "puddle", "drop"],
      answer: "rain",
      explanation: '"Rain" is uncountable.'
    },
    {
      question: "Choose the correct quantifier for 'rice':",
      options: ["many", "a few", "a little", "an"],
      answer: "a little",
      explanation: '"Rice" is uncountable, use "a little".'
    },
    {
      question: "Choose the correct quantifier for 'friends':",
      options: ["much", "a little", "a lot of", "less"],
      answer: "a lot of",
      explanation: '"Friends" is countable, "a lot of" works (or many).'
    },
    {
      question: "Which is uncountable?",
      options: ["gold", "ring", "necklace", "jewel"],
      answer: "gold",
      explanation: '"Gold" is a material/uncountable.'
    },

    // 31-40: Possessive Nouns
    {
      question: "Which shows correct possession?",
      options: ["The boys bike", "The boy's bike", "The boys's bike", "The boies bike"],
      answer: "The boy's bike",
      explanation: '"Boy" is singular, so add apostrophe + s.'
    },
    {
      question: "Which shows possession for plural 'dogs'?",
      options: ["The dogs's bone", "The dog's bone", "The dogs' bone", "The dog bone"],
      answer: "The dogs' bone",
      explanation: 'For plural ending in s, just add apostrophe.'
    },
    {
      question: "Correct possession for 'children':",
      options: ["The childrens' toys", "The children' toys", "The children's toys", "The childs' toys"],
      answer: "The children's toys",
      explanation: '"Children" is plural but no "s", so add apostrophe + s.'
    },
    {
      question: "Whose car is it? It is ___ car.",
      options: ["James'", "James's", "Jame's", "Both A and B are accepted"],
      answer: "Both A and B are accepted",
      explanation: 'For names ending in s, both "James\'" and "James\'s" are often accepted.'
    },
    {
      question: "The ___ room is clean. (Plural)",
      options: ["teacher's", "teachers'", "teachers's", "teacher"],
      answer: "teachers'",
      explanation: 'Plural "teachers" + apostrophe.'
    },
    {
      question: "This is my ___ house.",
      options: ["parents'", "parent's", "parents's", "parents"],
      answer: "parents'",
      explanation: 'Usually refers to two parents, so plural possessive.'
    },
    {
      question: "The ___ tail is long.",
      options: ["cat", "cats", "cat's", "cats'"],
      answer: "cat's",
      explanation: 'One cat owning a tail.'
    },
    {
      question: "The ___ bag is blue.",
      options: ["man's", "mans'", "mens'", "mens"],
      answer: "man's",
      explanation: 'Singular man + \'s.'
    },
    {
      question: "The ___ restroom. (Plural)",
      options: ["mens'", "mans'", "men's", "mens"],
      answer: "men's",
      explanation: 'Irregular plural "men" + \'s.'
    },
    {
      question: "My ___ name is Sarah.",
      options: ["sisters", "sister's", "sisters'", "sister"],
      answer: "sister's",
      explanation: 'One sister + \'s.'
    },

    // 41-50: Gender & Context
    {
      question: "What is the feminine noun for 'Prince'?",
      options: ["Queen", "Lady", "Princess", "Duchess"],
      answer: "Princess",
      explanation: '"Princess" is the female equivalent.'
    },
    {
      question: "What is the masculine noun for 'Niece'?",
      options: ["Nephew", "Uncle", "Brother", "Cousin"],
      answer: "Nephew",
      explanation: '"Nephew" is the male equivalent.'
    },
    {
      question: "What is the feminine noun for 'Bull'?",
      options: ["Horse", "Cow", "Ewe", "Mare"],
      answer: "Cow",
      explanation: '"Cow" is the female of "Bull".'
    },
    {
      question: "What is the masculine noun for 'Hen'?",
      options: ["Duck", "Rooster", "Drake", "Gander"],
      answer: "Rooster",
      explanation: '"Rooster" is the male of "Hen".'
    },
    {
      question: "The word 'Doctor' is a:",
      options: ["Masculine noun", "Feminine noun", "Common gender noun", "Neuter noun"],
      answer: "Common gender noun",
      explanation: 'Doctors can be male or female.'
    },
    {
      question: "The word 'Table' is a:",
      options: ["Masculine noun", "Feminine noun", "Common gender noun", "Neuter noun"],
      answer: "Neuter noun",
      explanation: 'In English, objects are neuter.'
    },
    {
      question: "What is the feminine of 'Waiter'?",
      options: ["Waitress", "Waiting", "Lady waiter", "Waiteress"],
      answer: "Waitress",
      explanation: '"Waitress" is the traditional feminine form.'
    },
    {
      question: "What is the masculine of 'Aunt'?",
      options: ["Father", "Uncle", "Grandpa", "Nephew"],
      answer: "Uncle",
      explanation: '"Uncle" corresponds to "Aunt".'
    },
    {
      question: "What is the feminine of 'Lion'?",
      options: ["Tiger", "Lioness", "Leopard", "Liona"],
      answer: "Lioness",
      explanation: '"Lioness" is the female lion.'
    },
    {
      question: "Which word can refer to both male and female?",
      options: ["King", "Sister", "Student", "Father"],
      answer: "Student",
      explanation: '"Student" is a common gender noun.'
    }
  ],

advanced: [
    // 1-10: Collective Nouns
    {
      question: "Which word is a collective noun?",
      options: ["flock", "chair", "boy", "river"],
      answer: "flock",
      explanation: '"Flock" refers to a group of birds or animals.'
    },
    {
      question: "Which is a collective noun?",
      options: ["family", "mother", "child", "aunt"],
      answer: "family",
      explanation: '"Family" names a group of related people.'
    },
    {
      question: 'In the sentence "The jury reached a decision", which word is a collective noun?',
      options: ["jury", "reached", "decision", "a"],
      answer: "jury",
      explanation: '"Jury" names a group acting as one body.'
    },
    {
      question: "Which sentence uses a collective noun correctly?",
      options: [
        "The flock of birds was flying overhead.",
        "The flock of bird was flying overhead.",
        "The bird of flock was flying overhead.",
        "Birds was flying flock."
      ],
      answer: "The flock of birds was flying overhead.",
      explanation: '"Flock" is a collective noun and matches the sentence structure.'
    },
    {
      question: "Which pair shows a collective noun and its members?",
      options: [
        "team - players",
        "pen - ink",
        "door - house",
        "tree - leaves"
      ],
      answer: "team - players",
      explanation: "A team is made up of players."
    },
    {
      question: 'Which word is a collective noun in: "Our choir sings every Sunday"?',
      options: ["Our", "choir", "sings", "Sunday"],
      answer: "choir",
      explanation: '"Choir" names a group of singers.'
    },
    {
      question: 'In the sentence "The audience clapped loudly", "audience" is:',
      options: ["a collective noun", "an abstract noun", "a proper noun", "a material noun"],
      answer: "a collective noun",
      explanation: '"Audience" refers to a group of people watching something.'
    },
    {
      question: "Which of the following is NOT a collective noun?",
      options: ["committee", "class", "bunch", "candle"],
      answer: "candle",
      explanation: '"Candle" names one thing, not a group.'
    },
    {
      question: "Which collective noun best completes the sentence? 'A ___ of ships sailed into the harbor.'",
      options: ["flock", "pack", "fleet", "herd"],
      answer: "fleet",
            explanation: '"Fleet" is the collective noun for ships.'

    },
    {
      question: "Which collective noun best completes the sentence? 'He found a ___ of keys on the table.'",
      options: ["herd", "bunch", "swarm", "gang"],
      answer: "bunch",
      explanation: '"Bunch" is commonly used for a group of keys.'

    },

    // 11-20: Concrete, Abstract, and Material Nouns
    {
      question: "Which is a material noun?",
      options: ["silver", "happiness", "teacher", "country"],
      answer: "silver",
      explanation: '"Silver" names a substance or material.'
    },
    {
      question: "Which word is a concrete noun?",
      options: ["childhood", "fear", "music", "table"],
      answer: "table",
      explanation: "A table can be seen and touched, so it is concrete."
    },
    {
      question: "Which is an abstract noun?",
      options: ["truth", "stone", "bottle", "sand"],
      answer: "truth",
      explanation: '"Truth" is an idea and cannot be touched.'
    },
    {
      question: 'In "Patience is important", which word is an abstract noun?',
      options: ["Patience", "is", "important", "none"],
      answer: "Patience",
      explanation: '"Patience" is a quality or idea.'
    },
    {
      question: "Which pair shows a concrete noun followed by an abstract noun?",
      options: [
        "chair - comfort",
        "anger - joy",
        "beauty - love",
        "kindness - honesty"
      ],
      answer: "chair - comfort",
      explanation: '"Chair" is concrete, "comfort" is abstract.'
    },
    {
      question: "Which sentence uses a material noun?",
      options: [
        "The gold ring was expensive.",
        "Her kindness is known.",
        "They showed courage.",
        "Honesty matters."
      ],
      answer: "The gold ring was expensive.",
      explanation: '"Gold" names a metal, a material noun.'
    },
    {
      question: "Which of the following is NOT a material noun?",
      options: ["iron", "cotton", "water", "friendship"],
      answer: "friendship",
      explanation: '"Friendship" is an abstract noun, not a substance.'
    },
    {
      question: "Choose the abstract noun formed from the verb 'decide'.",
      options: ["decision", "deciding", "decided", "decisive"],
      answer: "decision",
      explanation: '"Decision" is the noun form of "decide".'
    },
    {
      question: "Choose the abstract noun formed from the adjective 'wise'.",
      options: ["wisely", "wisdom", "wiser", "wise"],
      answer: "wisdom",
      explanation: '"Wisdom" is the noun form of "wise".'
    },
    {
      question: "Choose the abstract noun formed from the adjective 'free'.",
      options: ["freely", "freedom", "freeing", "freed"],
      answer: "freedom",
      explanation: '"Freedom" is the noun form of "free".'
    },

    // 21-30: Proper Nouns & Capitalization (Advanced)
    {
      question: "Which is correctly capitalized?",
      options: ["the pacific ocean", "Pacific ocean", "Pacific Ocean", "pacific Ocean"],
      answer: "Pacific Ocean",
      explanation: "Each important word in a proper name is capitalized."
    },
    {
      question: "Which should NOT be capitalized?",
      options: ["Monday", "January", "river", "Filipino"],
      answer: "river",
      explanation: "Common nouns like 'river' are not capitalized by themselves."
    },
    {
      question: "Which option corrects the capitalization?",
      options: [
        "Manila, Philippines",
        "manila, philippines",
        "Manila, philippines",
        "manila, Philippines"
      ],
      answer: "Manila, Philippines",
      explanation: "Both the city and country names are proper nouns."
    },
    {
      question: "Which is a Proper Noun?",
      options: ["country", "Asia", "city", "mountain"],
      answer: "Asia",
      explanation: '"Asia" is the specific name of a continent.'
    },
    {
      question: 'Which part of the sentence is a Proper Noun: "We visited Rizal Park last year"?',
      options: ["We visited", "Rizal Park", "last year", "visited Park"],
      answer: "Rizal Park",
      explanation: '"Rizal Park" is the full proper name of a place.'
    },
    {
      question: "Which sentence uses capital letters correctly?",
      options: [
        "I speak English and Filipino.",
        "I speak english and filipino.",
        "I speak English and filipino.",
        "i speak English and Filipino."
      ],
      answer: "I speak English and Filipino.",
      explanation: "Languages always begin with capital letters."
    },
    {
      question: "Which sentence uses a title correctly?",
      options: [
        "My uncle is doctor Cruz.",
        "My uncle is Doctor Cruz.",
        "My Uncle is Doctor Cruz.",
        "my uncle is doctor cruz."
      ],
      answer: "My uncle is Doctor Cruz.",
      explanation: 'The title "Doctor" is capitalized before a name.'
    },
    {
      question: "Which word should be written with a capital letter?",
      options: ["library", "school", "christmas", "street"],
      answer: "christmas",
      explanation: "Names of holidays like Christmas are capitalized."
    },
    {
      question: "Which is a proper noun for a brand?",
      options: ["phone", "store", "Samsung", "laptop"],
      answer: "Samsung",
      explanation: '"Samsung" is a specific brand name.'
    },
    {
      question: "Which sentence has NO capitalization error?",
      options: [
        "We will travel to Baguio in April.",
        "We will travel to baguio in April.",
        "We will travel to Baguio in april.",
        "we will travel to Baguio in April."
      ],
      answer: "We will travel to Baguio in April.",
      explanation: "City names and months begin with capital letters."
    },

    // 31-40: Partitives & Quantifiers with Nouns
    {
      question: "Which phrase is correct for the uncountable noun 'advice'?",
      options: ["an advice", "a piece of advice", "two advices", "many advices"],
      answer: "a piece of advice",
      explanation: 'Use "a piece of" with uncountable nouns like "advice".'
    },
    {
      question: "Which is correct for 'bread'?",
      options: ["a bread", "two breads", "two loaves of bread", "a breades"],
      answer: "two loaves of bread",
      explanation: "We count loaves, not bread itself."
    },
    {
      question: "Which is a correct phrase?",
      options: ["a furniture", "a piece of furniture", "many furnitures", "two furniture"],
      answer: "a piece of furniture",
      explanation: '"Furniture" is uncountable; use "a piece of furniture".'
    },
    {
      question: "Which expression is correct?",
      options: ["a news", "a piece of news", "many newses", "two news"],
      answer: "a piece of news",
      explanation: '"News" is uncountable; use "a piece of news".'
    },
    {
      question: "Which quantifier works with 'information'?",
      options: ["many informations", "a lot of information", "two informations", "an information"],
      answer: "a lot of information",
      explanation: '"Information" is uncountable; use "a lot of information".'
    },
    {
      question: "Which is correct?",
      options: ["three luggages", "much luggage", "many luggage", "a luggage"],
      answer: "much luggage",
      explanation: '"Luggage" is uncountable; use "much luggage".'
    },
    {
      question: 'Complete the sentence: "She drank a ___ of water."',
      options: ["glass", "grain", "sheet", "slice"],
      answer: "glass",
      explanation: "We usually say a glass of water."
    },
    {
      question: 'Complete the sentence: "He bought two ___ of paper."',
      options: ["bottles", "sheets", "drops", "cups"],
      answer: "sheets",
      explanation: "Paper is counted in sheets."
    },
    {
      question: 'Complete the sentence: "I need three ___ of chalk for the board."',
      options: ["sticks", "loaves", "cups", "bags"],
      answer: "sticks",
      explanation: "Chalk is often counted in sticks."
    },
    {
      question: "Which phrase is acceptable English?",
      options: [
        "a bar of chocolate",
        "a chocolate of bar",
        "a bar chocolate",
        "bar of a chocolate"
      ],
      answer: "a bar of chocolate",
      explanation: "We say a bar of chocolate."
    },

    // 41-50: Nouns Used as Adjectives
    {
      question: 'In the phrase "chicken soup", the word "chicken" is:',
      options: ["a verb", "a noun used as an adjective", "an adverb", "a pronoun"],
      answer: "a noun used as an adjective",
      explanation: '"Chicken" describes the kind of soup.'
    },
    {
      question: 'In "school bus", the word "school" is:',
      options: ["a verb", "a noun used as an adjective", "an adverb", "a preposition"],
      answer: "a noun used as an adjective",
      explanation: '"School" describes the type of bus.'
    },
    {
      question: "Which phrase shows a noun used as an adjective?",
      options: ["blue sky", "history book", "quickly ran", "very tall"],
      answer: "history book",
      explanation: '"History" is a noun describing the kind of book.'
    },
    {
      question: 'In "police station", the word "police" describes:',
      options: ["station", "police", "both", "neither"],
      answer: "station",
      explanation: '"Police" tells what kind of station it is.'
    },
    {
      question: "Which is the best way to join these nouns?",
      options: ["car sports", "sports car", "sport car", "cars sports"],
      answer: "sports car",
          explanation: '"Sports car" is the correct noun + noun phrase.'

    },
    {
      question: "Which phrase is correctly written?",
      options: [
        "a ten-minute break",
        "a ten-minutes break",
        "a ten minute's break",
        "a ten-minutes's break"
      ],
      answer: "a ten-minute break",
      explanation: "When a noun shows measurement before another noun, it is usually singular."
    },
    {
      question: 'In "power failure", the word "power" is:',
      options: ["an adjective", "a noun used as an adjective", "a verb", "an adverb"],
      answer: "a noun used as an adjective",
      explanation: '"Power" describes the type of failure.'
    },
    {
      question: "Which phrase does NOT use a noun as an adjective?",
      options: ["chocolate cake", "river bank", "garden chair", "very quickly"],
      answer: "very quickly",
      explanation: '"Very quickly" has no noun; both are adverb and adverb marker.'
    },
    {
      question: 'In "office worker", the word "worker" is:',
      options: ["a noun", "a verb", "an adjective", "an adverb"],
      answer: "a noun",
      explanation: '"Worker" is the main noun; "office" describes it.'
    },
    {
      question: "Which sentence uses a noun correctly as an adjective?",
      options: [
        "I bought a shoes sports.",
        "I bought sports shoes.",
        "I bought sport's shoes.",
        "I bought sport shoeses."
      ],
      answer: "I bought sports shoes.",
      explanation: '"Sports" is a noun used to describe the kind of shoes.'
      }
  ],

  


  
  expert: [
    // 1-10: Noun Functions
    {
      question: 'In the phrase "the old wooden bridge", which word is the head noun?',
      options: ["the", "old", "wooden", "bridge"],
      answer: "bridge",
      explanation: '"Bridge" is the head noun; the others describe it.'
    },
    {
      question: 'Identify the function of "cake" in: "She baked a cake."',
      options: ["Subject", "Direct Object", "Indirect Object", "Predicate Nominative"],
      answer: "Direct Object",
      explanation: 'It receives the action of baking directly.'
    },
    {
      question: 'Identify the function of "teacher" in: "He is a teacher."',
      options: ["Subject", "Direct Object", "Indirect Object", "Predicate Nominative"],
      answer: "Predicate Nominative",
      explanation: 'It follows a linking verb (is) and renames the subject.'
    },
    {
      question: 'Identify the function of "John" in: "She gave John a book."',
      options: ["Subject", "Direct Object", "Indirect Object", "Object of Preposition"],
      answer: "Indirect Object",
      explanation: 'John is the recipient of the direct object (book).'
    },
    {
      question: 'In "The dog in the yard barked", "yard" is the:',
      options: ["Subject", "Direct Object", "Object of the Preposition", "Appositive"],
      answer: "Object of the Preposition",
      explanation: 'It follows the preposition "in".'
    },
    {
      question: 'Identify the Subject: "Under the bridge lived a troll."',
      options: ["Under", "bridge", "lived", "troll"],
      answer: "troll",
      explanation: 'The sentence is inverted. The troll is the one living.'
    },
    {
      question: 'Identify the Direct Object: "The committee elected him chairman."',
      options: ["committee", "elected", "him", "chairman"],
      answer: "him",
      explanation: '"Him" receives the action of electing.'
    },
    {
      question: 'In "They elected him chairman", "chairman" is the:',
      options: ["Direct Object", "Indirect Object", "Object Complement", "Subject"],
      answer: "Object Complement",
      explanation: '"Chairman" renames or describes the direct object "him".'
    },
    {
      question: 'Identify the Predicate Nominative: "My favorite sport is swimming."',
      options: ["My", "favorite", "sport", "swimming"],
      answer: "swimming",
      explanation: 'It renames the subject after a linking verb.'
    },
    {
      question: 'Identify the Indirect Object: "Throw me the ball."',
      options: ["Throw", "me", "the", "ball"],
      answer: "me",
      explanation: '"Me" is the one receiving the ball.'
    },

    // 11-20: Gerunds
    {
      question: "Which word is a Gerund acting as a noun?",
      options: ["running (verb)", "run", "Running (is fun)", "ran"],
      answer: "Running (is fun)",
      explanation: 'In "Running is fun", running acts as the subject.'
    },
    {
      question: 'Identify the gerund: "I enjoy reading."',
      options: ["I", "enjoy", "reading", "none"],
      answer: "reading",
      explanation: '"Reading" is a noun form derived from a verb.'
    },
    {
      question: 'In "Swimming is good exercise", "Swimming" functions as:',
      options: ["Verb", "Adjective", "Noun (Subject)", "Adverb"],
      answer: "Noun (Subject)",
      explanation: 'It is the subject of the sentence.'
    },
    {
      question: 'Identify the Gerund Phrase: "Eating vegetables is healthy."',
      options: ["Eating", "Eating vegetables", "is healthy", "vegetables"],
      answer: "Eating vegetables",
      explanation: 'The whole phrase acts as the subject.'
    },
    {
      question: "Which sentence contains a gerund?",
      options: ["He is sleeping.", "Sleeping is vital.", "He sleeps well.", "I will sleep."],
      answer: "Sleeping is vital.",
      explanation: '"Sleeping" is the subject (noun).'
    },
    {
      question: 'Function of the gerund in: "He hates waiting."',
      options: ["Subject", "Direct Object", "Predicate Nominative", "Appositive"],
      answer: "Direct Object",
      explanation: 'It receives the action of hating.'
    },
    {
      question: 'Function of the gerund in: "Her passion is dancing."',
      options: ["Subject", "Direct Object", "Predicate Nominative", "Object of Preposition"],
      answer: "Predicate Nominative",
      explanation: 'Renames the subject "passion".'
    },
    {
      question: 'Function of the gerund in: "He is afraid of flying."',
      options: ["Subject", "Direct Object", "Object of Preposition", "Indirect Object"],
      answer: "Object of Preposition",
      explanation: 'Follows the preposition "of".'
    },
    {
      question: "Which word is NOT a noun?",
      options: ["Freedom", "Flying (in 'Flying is safe')", "Quickly", "Decision"],
      answer: "Quickly",
      explanation: '"Quickly" is an adverb.'
    },
    {
      question: "Is 'Walking' a noun in: 'The walking dead'?",
      options: ["Yes", "No, it's an adjective (participle)", "No, it's a verb", "Maybe"],
      answer: "No, it's an adjective (participle)",
      explanation: 'Here it describes the dead, so it acts as an adjective.'
    },

    // 21-30: Compound Nouns
    {
      question: "Which is a closed compound noun?",
      options: ["ice cream", "mother-in-law", "toothpaste", "post office"],
      answer: "toothpaste",
      explanation: 'Written as one word.'
    },
    {
      question: "Which is a hyphenated compound noun?",
      options: ["basketball", "full moon", "check-in", "swimming pool"],
      answer: "check-in",
      explanation: 'Uses a hyphen.'
    },
    {
      question: "Which is an open compound noun?",
      options: ["firefly", "bus stop", "dry-cleaning", "bedroom"],
      answer: "bus stop",
      explanation: 'Written as two separate words.'
    },
    {
      question: "Plural of 'mother-in-law':",
      options: ["mother-in-laws", "mothers-in-law", "mothers-in-laws", "mother-in-law"],
      answer: "mothers-in-law",
      explanation: 'Pluralize the main noun (mother).'
    },
    {
      question: "Plural of 'passer-by':",
      options: ["passer-bys", "passers-by", "passers-bys", "passer-bies"],
      answer: "passers-by",
      explanation: 'Pluralize the main person (passer).'
    },
    {
      question: "Plural of 'spoonful':",
      options: ["spoonsful", "spoonfuls", "spoons-ful", "spoonsfuls"],
      answer: "spoonfuls",
      explanation: 'For measurement amounts ending in -ful, add s at the end.'
    },
    {
      question: "Plural of 'attorney-at-law':",
      options: ["attorney-at-laws", "attorneys-at-law", "attorneys-at-laws", "attorney-at-law"],
      answer: "attorneys-at-law",
      explanation: 'Pluralize the main noun (attorney).'
    },
    {
      question: "Plural of 'chief of staff':",
      options: ["chief of staffs", "chiefs of staff", "chiefs of staffs", "chieves of staff"],
      answer: "chiefs of staff",
      explanation: 'Pluralize the head (chief).'
    },
    {
      question: "Which is a compound noun?",
      options: ["sun", "flower", "sunflower", "sunny"],
      answer: "sunflower",
      explanation: 'Combination of sun + flower.'
    },
    {
      question: "Plural of 'merry-go-round':",
      options: ["merries-go-round", "merry-go-rounds", "merry-goes-round", "merry-go-round"],
      answer: "merry-go-rounds",
      explanation: 'No clear main noun, so pluralize the end.'
    },

    // 31-40: Appositives
    {
      question: 'Identify the appositive: "My brother, David, is here."',
      options: ["My", "brother", "David", "here"],
      answer: "David",
      explanation: '"David" renames "brother".'
    },
    {
      question: 'In "The book, a bestseller, is sold out," the phrase "a bestseller" is an:',
      options: ["Adjective Clause", "Appositive Phrase", "Adverbial Phrase", "Infinitive"],
      answer: "Appositive Phrase",
      explanation: 'It renames the noun "book".'
    },
    {
      question: 'Which sentence uses an appositive correctly?',
      options: ["Mr. Smith, the teacher, is nice.", "Mr. Smith the teacher is nice.", "Mr. Smith, is nice.", "The teacher, is Mr. Smith."],
      answer: "Mr. Smith, the teacher, is nice.",
      explanation: 'Non-essential appositives need commas.'
    },
    {
      question: 'Identify the appositive: "Edison, the inventor, was smart."',
      options: ["Edison", "inventor", "smart", "was"],
      answer: "inventor",
      explanation: '"The inventor" renames Edison.'
    },
    {
      question: 'Function of the appositive noun:',
      options: ["To express action", "To rename another noun", "To show possession", "To connect clauses"],
      answer: "To rename another noun",
      explanation: 'Appositives rename or identify nearby nouns.'
    },
    {
      question: "Appositives are usually separated by:",
      options: ["Periods", "Commas", "Semicolons", "Colons"],
      answer: "Commas",
      explanation: 'Commas set off non-essential appositives.'
    },
    {
      question: "Find the appositive: 'We visited Paris, the capital of France.'",
      options: ["We", "visited", "Paris", "the capital of France"],
      answer: "the capital of France",
      explanation: 'Renames Paris.'
    },
    {
      question: "Is the appositive essential? 'My friend John is here.' (I have many friends)",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: 'Essential (no commas) because it specifies WHICH friend.'
    },
    {
      question: "Is the appositive essential? 'My husband, Mark, is here.' (I have one husband)",
      options: ["Yes", "No"],
      answer: "No",
      explanation: 'Non-essential (uses commas) because the name isn\'t needed to identify him.'
    },
    {
      question: 'In "The insect, a cockroach, crawled away," "cockroach" is:',
      options: ["Subject", "Object", "Appositive", "Verb"],
      answer: "Appositive",
      explanation: 'An Appositive stands next to a noun to explain it. Here, "cockroach" identifies exactly what the "insect" is.'
    },

    // 41-50: Noun Clauses
    {
      question: 'Identify the noun clause: "I know what you did."',
      options: ["I know", "what you did", "you did", "know what"],
      answer: "what you did",
      explanation: 'The clause acts as the direct object.'
    },
    {
      question: 'Function of the noun clause in: "What you said is true."',
      options: ["Subject", "Object", "Adjective", "Adverb"],
      answer: "Subject",
      explanation: 'The whole clause is the subject.'
    },
    {
      question: 'Identify the noun clause: "Give it to whoever wants it."',
      options: ["Give it", "to whoever", "whoever wants it", "wants it"],
      answer: "whoever wants it",
      explanation: 'Acts as the object of the preposition "to".'
    },
    {
      question: 'Noun clauses often start with:',
      options: ["If, because, since", "Who, what, that, how", "And, but, or", "In, on, at"],
      answer: "Who, what, that, how",
      explanation: 'Relative pronouns/adverbs start noun clauses.'
    },
    {
      question: 'Replace the noun clause with a pronoun: "I know [where he lives]."',
      options: ["I know him.", "I know it.", "I know that.", "I know there."],
      answer: "I know it.",
      explanation: 'Noun clauses function like nouns/pronouns.'
    },
    {
      question: 'Function of the clause in: "My hope is that we win."',
      options: ["Subject", "Direct Object", "Predicate Nominative", "Appositive"],
      answer: "Predicate Nominative",
      explanation: 'Follows linking verb "is".'
    },
    {
      question: "Is this a noun clause? 'The man [who called] is angry.'",
      options: ["Yes", "No, it's an Adjective clause", "No, it's an Adverb clause", "No, it's a Verb"],
      answer: "No, it's an Adjective clause",
      explanation: 'It describes "the man", so it is an adjective clause.'
    },
    {
      question: 'In "I wonder how he did it," the clause is the:',
      options: ["Subject", "Direct Object", "Indirect Object", "Predicate Nominative"],
      answer: "Direct Object",
      explanation: 'Receives the action of wondering.'
    },
    {
      question: 'The word "that" usually introduces a noun clause when it follows a:',
      options: ["Noun", "Verb (mental action)", "Preposition", "Adjective"],
      answer: "Verb (mental action)",
      explanation: 'E.g., I think that..., I believe that...'
    },
    {
      question: 'Analyze: "Whoever wins gets the prize."',
      options: ["'Whoever' is the subject", "'Whoever wins' is the subject", "'Prize' is the subject", "'Gets' is the subject"],
      answer: "'Whoever wins' is the subject",
      explanation: 'The entire clause is the subject.'
    }
  ]
};
