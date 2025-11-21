const GRAMMATICAL_NUMBER_QUESTIONS = {
  beginner: [
    // 1–10: Singular vs Plural – basic recognition
    {
      question: "Which word is a plural noun?",
      choices: ["cat", "cats", "book", "child"],
      correctIndex: 1,
      explanation: '"Cats" refers to more than one cat, so it is plural.'
    },
    {
      question: "Which noun is singular?",
      choices: ["dogs", "chairs", "house", "cars"],
      correctIndex: 2,
      explanation: '"House" refers to one house and is singular.'
    },
    {
      question: "Which word is plural?",
      choices: ["student", "students", "school", "teacher"],
      correctIndex: 1,
      explanation: '"Students" refers to more than one student.'
    },
    {
      question: "Which word is singular?",
      choices: ["tables", "cities", "country", "books"],
      correctIndex: 2,
      explanation: '"Country" is singular; it names one country.'
    },
    {
      question: "Which is a plural noun?",
      choices: ["pen", "pens", "pencil", "paper"],
      correctIndex: 1,
      explanation: '"Pens" is plural; it refers to more than one pen.'
    },
    {
      question: "Which noun is singular?",
      choices: ["boys", "girls", "boy", "cars"],
      correctIndex: 2,
      explanation: '"Boy" refers to one boy and is singular.'
    },
    {
      question: "Which word is plural?",
      choices: ["child", "children", "man", "woman"],
      correctIndex: 1,
      explanation: '"Children" is the plural of child.'
    },
    {
      question: "Which noun is plural?",
      choices: ["leaf", "mouse", "geese", "foot"],
      correctIndex: 2,
      explanation: '"Geese" is the plural form of goose.'
    },
    {
      question: "Which word is singular?",
      choices: ["men", "women", "person", "people"],
      correctIndex: 2,
      explanation: '"Person" is the singular; people is plural.'
    },
    {
      question: "Which noun is plural?",
      choices: ["tooth", "teeth", "life", "child"],
      correctIndex: 1,
      explanation: '"Teeth" is the plural of tooth.'
    },

    // 11–20: Forming regular plurals
    {
      question: "What is the plural of 'book'?",
      choices: ["books", "bookes", "bookies", "book"],
      correctIndex: 0,
      explanation: "Most nouns form the plural by simply adding -s: book → books."
    },
    {
      question: "What is the plural of 'car'?",
      choices: ["cars", "cares", "caries", "car"],
      correctIndex: 0,
      explanation: "Add -s to make car plural: cars."
    },
    {
      question: "What is the plural of 'bus'?",
      choices: ["buss", "buses", "busies", "bus"],
      correctIndex: 1,
      explanation: "Nouns ending in -s usually add -es: bus → buses."
    },
    {
      question: "What is the plural of 'box'?",
      choices: ["boxs", "boxes", "boxies", "box"],
      correctIndex: 1,
      explanation: "Add -es to words ending in x: box → boxes."
    },
    {
      question: "What is the plural of 'church'?",
      choices: ["churches", "churchs", "churchies", "church"],
      correctIndex: 0,
      explanation: "Add -es to nouns ending in ch: church → churches."
    },
    {
      question: "What is the plural of 'dish'?",
      choices: ["dishs", "dishies", "dishes", "dish"],
      correctIndex: 2,
      explanation: "Add -es to nouns ending in sh: dish → dishes."
    },
    {
      question: "What is the plural of 'hero'?",
      choices: ["heros", "heroes", "heroe", "heroeses"],
      correctIndex: 1,
      explanation: "Many nouns ending in -o take -es: hero → heroes."
    },
    {
      question: "What is the plural of 'day'?",
      choices: ["daies", "days", "dayes", "day"],
      correctIndex: 1,
      explanation: "Nouns ending in vowel + y usually just add -s: day → days."
    },
    {
      question: "What is the plural of 'boy'?",
      choices: ["boyes", "boys", "boies", "boy"],
      correctIndex: 1,
      explanation: "Vowel + y: add -s only: boy → boys."
    },
    {
      question: "What is the plural of 'toy'?",
      choices: ["toies", "toys", "toyies", "toy"],
      correctIndex: 1,
      explanation: "Toy ends in vowel + y, so plural is toys."
    },

    // 21–30: y → ies / f → ves basics
    {
      question: "What is the plural of 'baby'?",
      choices: ["babys", "babies", "babyies", "babyes"],
      correctIndex: 1,
      explanation: "Consonant + y: change y to i and add -es: baby → babies."
    },
    {
      question: "What is the plural of 'city'?",
      choices: ["citys", "cities", "cityes", "citi"],
      correctIndex: 1,
      explanation: "City → cities (y to i + es)."
    },
    {
      question: "What is the plural of 'lady'?",
      choices: ["ladies", "ladys", "ladyes", "ladi"],
      correctIndex: 0,
      explanation: "Consonant + y becomes -ies: lady → ladies."
    },
    {
      question: "What is the plural of 'leaf'?",
      choices: ["leafs", "leaves", "leafes", "leave"],
      correctIndex: 1,
      explanation: "Many nouns ending in f change to -ves: leaf → leaves."
    },
    {
      question: "What is the plural of 'knife'?",
      choices: ["knifes", "knives", "knifees", "knive"],
      correctIndex: 1,
      explanation: "knife → knives (fe to ves)."
    },
    {
      question: "What is the plural of 'life'?",
      choices: ["lifes", "lives", "lifees", "livies"],
      correctIndex: 1,
      explanation: "life → lives (fe to ves)."
    },
    {
      question: "What is the plural of 'wife'?",
      choices: ["wifes", "wives", "wivies", "wife"],
      correctIndex: 1,
      explanation: "wife → wives."
    },
    {
      question: "What is the plural of 'toy'?",
      choices: ["toy", "toies", "toys", "toyes"],
      correctIndex: 2,
      explanation: "Toy ends in vowel + y, so just add -s."
    },
    {
      question: "What is the plural of 'story'?",
      choices: ["storys", "stories", "storyes", "stori"],
      correctIndex: 1,
      explanation: "Consonant + y: story → stories."
    },
    {
      question: "What is the plural of 'thief'?",
      choices: ["thiefs", "thieves", "thieveses", "thief"],
      correctIndex: 1,
      explanation: "thief → thieves (f to ves)."
    },

    // 31–40: Countable vs uncountable (basic)
    {
      question: "Which noun is countable?",
      choices: ["water", "rice", "sugar", "apple"],
      correctIndex: 3,
      explanation: '"Apple" can be counted (one apple, two apples).'
    },
    {
      question: "Which noun is uncountable?",
      choices: ["chair", "book", "milk", "student"],
      correctIndex: 2,
      explanation: '"Milk" is a liquid and treated as uncountable.'
    },
    {
      question: "Which noun is uncountable?",
      choices: ["car", "idea", "information", "bag"],
      correctIndex: 2,
      explanation: '"Information" is uncountable in standard English.'
    },
    {
      question: "Which noun is countable?",
      choices: ["news", "furniture", "friend", "traffic"],
      correctIndex: 2,
      explanation: '"Friend" can be counted: one friend, two friends.'
    },
    {
      question: "Which noun is uncountable?",
      choices: ["advice", "teacher", "pencil", "door"],
      correctIndex: 0,
      explanation: '"Advice" is uncountable; we do not say advices.'
    },
    {
      question: "Which noun is countable?",
      choices: ["water", "money", "bottle", "sand"],
      correctIndex: 2,
      explanation: '"Bottle" can be counted (one bottle, two bottles).'
    },
    {
      question: "Which noun is uncountable?",
      choices: ["student", "bag", "knowledge", "desk"],
      correctIndex: 2,
      explanation: '"Knowledge" is uncountable.'
    },
    {
      question: "Which noun is countable?",
      choices: ["rice", "chair", "sugar", "oil"],
      correctIndex: 1,
      explanation: '"Chair" is countable.'
    },
    {
      question: "Which noun is uncountable?",
      choices: ["luggage", "suitcase", "box", "ticket"],
      correctIndex: 0,
      explanation: '"Luggage" is uncountable; we do not say luggages.'
    },
    {
      question: "Which noun is countable?",
      choices: ["equipment", "tool", "traffic", "heat"],
      correctIndex: 1,
      explanation: '"Tool" is countable; the others are usually uncountable.'
    },

    // 41–50: Very basic subject–verb agreement & quantifiers
    {
      question: "Choose the correct verb: 'The boy ____ playing.'",
      choices: ["is", "are", "am", "be"],
      correctIndex: 0,
      explanation: '"Boy" is singular, so we use the singular verb "is".'
    },
    {
      question: "Choose the correct verb: 'The boys ____ playing.'",
      choices: ["is", "are", "am", "be"],
      correctIndex: 1,
      explanation: '"Boys" is plural, so we use the plural verb "are".'
    },
    {
      question: "Choose the correct verb: 'My friends ____ here.'",
      choices: ["is", "are", "am", "was"],
      correctIndex: 1,
      explanation: '"Friends" is plural; the correct verb is "are".'
    },
    {
      question: "Choose the correct verb: 'My friend ____ here.'",
      choices: ["is", "are", "am", "were"],
      correctIndex: 0,
      explanation: '"Friend" is singular; use "is".'
    },
    {
      question: "Choose the correct phrase: 'I have ____ books.'",
      choices: ["many", "much", "little", "a little"],
      correctIndex: 0,
      explanation: "Books are countable, so we use 'many'."
    },
    {
      question: "Choose the correct phrase: 'There is ____ water in the glass.'",
      choices: ["few", "many", "much", "several"],
      correctIndex: 2,
      explanation: "Water is uncountable, so we use 'much' (or 'a little')."
    },
    {
      question: "Choose the correct phrase: 'She has ____ friends.'",
      choices: ["a little", "little", "a few", "much"],
      correctIndex: 2,
      explanation: "Friends are countable; 'a few' is correct."
    },
    {
      question: "Choose the correct phrase: 'We have ____ time left.'",
      choices: ["many", "few", "much", "several"],
      correctIndex: 2,
      explanation: "Time is uncountable; we use 'much' (or 'little')."
    },
    {
      question: "Choose the correct verb: 'The cat and the dog ____ hungry.'",
      choices: ["is", "are", "was", "am"],
      correctIndex: 1,
      explanation: "Two subjects (cat and dog) make the subject plural; use 'are'."
    },
    {
      question: "Choose the correct verb: 'My family ____ small.'",
      choices: ["is", "are", "were", "be"],
      correctIndex: 0,
      explanation: "Here, 'family' is treated as a single unit, so we use 'is'."
    }
  ],

  intermediate: [
    // 1–10: Irregular plurals
    {
      question: "What is the plural of 'man'?",
      choices: ["mans", "mens", "men", "man's"],
      correctIndex: 2,
      explanation: "The irregular plural of man is men."
    },
    {
      question: "What is the plural of 'woman'?",
      choices: ["womans", "womens", "women", "woman"],
      correctIndex: 2,
      explanation: "The irregular plural of woman is women."
    },
    {
      question: "What is the plural of 'child'?",
      choices: ["childs", "children", "childes", "childrens"],
      correctIndex: 1,
      explanation: "Child → children is an irregular plural."
    },
    {
      question: "What is the plural of 'tooth'?",
      choices: ["tooths", "teeth", "toothes", "teeths"],
      correctIndex: 1,
      explanation: "Tooth becomes teeth in the plural."
    },
    {
      question: "What is the plural of 'foot'?",
      choices: ["foots", "feet", "feets", "foot"],
      correctIndex: 1,
      explanation: "Foot → feet is irregular."
    },
    {
      question: "What is the plural of 'mouse'?",
      choices: ["mouses", "mice", "mices", "mouse"],
      correctIndex: 1,
      explanation: "Mouse → mice is an irregular plural."
    },
    {
      question: "What is the plural of 'goose'?",
      choices: ["gooses", "geese", "geeses", "goose"],
      correctIndex: 1,
      explanation: "Goose → geese."
    },
    {
      question: "What is the plural of 'person'?",
      choices: ["persons", "people", "peoples", "persones"],
      correctIndex: 1,
      explanation: "The usual plural of person is people."
    },
    {
      question: "Which word has the same form in singular and plural?",
      choices: ["deer", "dog", "cat", "book"],
      correctIndex: 0,
      explanation: "Deer can be both singular and plural."
    },
    {
      question: "Which word has the same singular and plural form?",
      choices: ["sheep", "horse", "table", "child"],
      correctIndex: 0,
      explanation: "Sheep is the same in singular and plural."
    },

    // 11–20: Same form singular/plural & tricky plurals
    {
      question: "Which noun is both singular and plural?",
      choices: ["series", "student", "car", "box"],
      correctIndex: 0,
      explanation: "Series can be singular or plural; context shows the number."
    },
    {
      question: "Which noun is both singular and plural?",
      choices: ["species", "apple", "teacher", "door"],
      correctIndex: 0,
      explanation: "Species has the same form for singular and plural."
    },
    {
      question: "Which plural form is correct?",
      choices: ["childrens", "childs", "children", "childes"],
      correctIndex: 2,
      explanation: "Children is the only correct plural of child."
    },
    {
      question: "Which plural form is correct?",
      choices: ["womans", "women", "womens", "womanes"],
      correctIndex: 1,
      explanation: "Women is the correct plural of woman."
    },
    {
      question: "Which plural form is correct?",
      choices: ["gooses", "geeses", "geese", "goos"],
      correctIndex: 2,
      explanation: "Geese is the plural of goose."
    },
    {
      question: "Which plural form is correct?",
      choices: ["sheeps", "sheep", "sheepen", "sheeves"],
      correctIndex: 1,
      explanation: "Sheep remains sheep in plural."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Many deers were in the forest.",
        "Many deer were in the forest.",
        "Many deers was in the forest.",
        "Many deer was in the forest."
      ],
      correctIndex: 1,
      explanation: "Deer is used for both singular and plural; the plural verb 'were' matches 'many deer'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Two sheeps were lost.",
        "Two sheep were lost.",
        "Two sheeps was lost.",
        "Two sheep was lost."
      ],
      correctIndex: 1,
      explanation: "Sheep is the plural, and 'were' agrees with the plural subject."
    },
    {
      question: "Which sentence uses the plural of 'person' correctly?",
      choices: [
        "There were many persons there.",
        "There were many people there.",
        "There was many people there.",
        "There was many peoples there."
      ],
      correctIndex: 1,
      explanation: "People is the usual plural of person, and 'were' agrees with many people."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The childrens are playing.",
        "The children is playing.",
        "The child are playing.",
        "The children are playing."
      ],
      correctIndex: 3,
      explanation: "'Children' is plural, so the verb must be 'are'."
    },

    // 21–30: Countable/uncountable & quantifiers
    {
      question: "Which sentence is correct?",
      choices: [
        "I have much books.",
        "I have many books.",
        "I have a little books.",
        "I have few money."
      ],
      correctIndex: 1,
      explanation: "Books are countable, so we use many."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She has many money.",
        "She has much money.",
        "She has few money.",
        "She has many moneys."
      ],
      correctIndex: 1,
      explanation: "Money is uncountable, so we say much money."
    },
    {
      question: "Which is the correct phrase?",
      choices: [
        "a few rice",
        "a little rice",
        "many rice",
        "few rice"
      ],
      correctIndex: 1,
      explanation: "Rice is uncountable; we use a little rice."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He gave me an information.",
        "He gave me much informations.",
        "He gave me some information.",
        "He gave me two informations."
      ],
      correctIndex: 2,
      explanation: "Information is uncountable; we use some information, not informations."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She gave me an advice.",
        "She gave me a piece of advice.",
        "She gave me many advices.",
        "She gave me two advices."
      ],
      correctIndex: 1,
      explanation: "Advice is uncountable; we say a piece of advice."
    },
    {
      question: "Choose the correct option:",
      choices: [
        "There is many traffic today.",
        "There are much traffic today.",
        "There is a lot of traffic today.",
        "There are a lot of traffics today."
      ],
      correctIndex: 2,
      explanation: "Traffic is uncountable; we say 'a lot of traffic' with singular verb is."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She has little friends.",
        "She has a little friends.",
        "She has few friends.",
        "She has much friends."
      ],
      correctIndex: 2,
      explanation: "Friends are countable; 'few friends' is correct."
    },
    {
      question: "Which phrase is correct for an uncountable noun?",
      choices: [
        "many furniture",
        "a few furniture",
        "a piece of furniture",
        "two furnitures"
      ],
      correctIndex: 2,
      explanation: "Furniture is uncountable; we say a piece of furniture."
    },
    {
      question: "Which phrase is correct?",
      choices: [
        "many pieces of equipment",
        "many equipments",
        "much equipments",
        "few equipments"
      ],
      correctIndex: 0,
      explanation: "Equipment is uncountable; we can say many pieces of equipment."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "News are good today.",
        "The news is good today.",
        "The news are good today.",
        "A news is good today."
      ],
      correctIndex: 1,
      explanation: "News is uncountable and takes a singular verb: The news is good."
    },

    // 31–40: Subject–verb agreement with phrases
    {
      question: "Choose the correct verb: 'The box of pens ____ on the table.'",
      choices: ["is", "are", "were", "be"],
      correctIndex: 0,
      explanation: "The subject is box (singular), so we use is."
    },
    {
      question: "Choose the correct verb: 'The boxes of pens ____ on the table.'",
      choices: ["is", "are", "was", "be"],
      correctIndex: 1,
      explanation: "The subject is boxes (plural), so we use are."
    },
    {
      question: "Choose the correct verb: 'Each of the students ____ a book.'",
      choices: ["have", "has", "having", "had"],
      correctIndex: 1,
      explanation: "Each is singular and takes a singular verb: has."
    },
    {
      question: "Choose the correct verb: 'Every student ____ present.'",
      choices: ["are", "is", "were", "be"],
      correctIndex: 1,
      explanation: "Every student is singular; use is."
    },
    {
      question: "Choose the correct verb: 'None of the money ____ missing.'",
      choices: ["are", "is", "were", "be"],
      correctIndex: 1,
      explanation: "Money is uncountable; we treat it as singular and use is."
    },
    {
      question: "Choose the correct verb: 'Half of the students ____ gone home.'",
      choices: ["has", "have", "is", "was"],
      correctIndex: 1,
      explanation: "Students is plural; Half of the students have gone home."
    },
    {
      question: "Choose the correct verb: 'Half of the cake ____ left.'",
      choices: ["is", "are", "have", "were"],
      correctIndex: 0,
      explanation: "Cake is singular (uncountable mass here); use is."
    },
    {
      question: "Choose the correct verb: 'A number of problems ____ appeared.'",
      choices: ["has", "have", "is", "was"],
      correctIndex: 1,
      explanation: "A number of + plural noun takes a plural verb: have appeared."
    },
    {
      question: "Choose the correct verb: 'The number of problems ____ increasing.'",
      choices: ["are", "is", "have", "were"],
      correctIndex: 1,
      explanation: "The number (singular) takes a singular verb: is increasing."
    },
    {
      question: "Choose the correct verb: 'Either the teacher or the students ____ wrong.'",
      choices: ["is", "are", "was", "be"],
      correctIndex: 1,
      explanation: "When subjects are joined by or/nor, the verb agrees with the nearer subject: students → are."
    },

    // 41–50: Error identification / correct sentence
    {
      question: "Which sentence is correct?",
      choices: [
        "The team are winning its games.",
        "The team is winning its games.",
        "The team are winning their games.",
        "The team is winning their games."
      ],
      correctIndex: 1,
      explanation: "Team is treated as one unit here, so singular verb is and singular pronoun its."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "My family are happy with their new house.",
        "My family is happy with their new house.",
        "My family are happy with its new house.",
        "My family is happy with its new house."
      ],
      correctIndex: 1,
      explanation: "In standard usage, family as a unit takes is; their is common when referring to members collectively."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Ten kilometers are a long walk.",
        "Ten kilometers is a long walk.",
        "Ten kilometer is a long walk.",
        "Ten kilometers be a long walk."
      ],
      correctIndex: 1,
      explanation: "When talking about a single distance, we treat it as a singular amount: Ten kilometers is a long walk."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Physics are difficult for some students.",
        "Physics is difficult for some students.",
        "The physics are difficult for some students.",
        "The physics is difficults for some students."
      ],
      correctIndex: 1,
      explanation: "Physics (subject) is treated as singular: Physics is difficult."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The police is coming.",
        "The police are coming.",
        "The polices are coming.",
        "A police are coming."
      ],
      correctIndex: 1,
      explanation: "Police is a plural noun in English; we use are."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The data is inaccurate.",
        "The data are inaccurate.",
        "The data is inaccurates.",
        "The datas are inaccurate."
      ],
      correctIndex: 1,
      explanation: "In careful English, data is treated as plural: the data are inaccurate."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "These kind of problems is common.",
        "This kind of problems are common.",
        "These kinds of problems are common.",
        "This kinds of problem are common."
      ],
      correctIndex: 2,
      explanation: "Kinds and problems are both plural; use These kinds of problems are common."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "There is many reasons for this.",
        "There are many reasons for this.",
        "There is many reason for this.",
        "There are much reasons for this."
      ],
      correctIndex: 1,
      explanation: "Reasons is plural, so we use there are."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Here is the books you ordered.",
        "Here are the book you ordered.",
        "Here are the books you ordered.",
        "Here is the books you order."
      ],
      correctIndex: 2,
      explanation: "Books is plural, so use are."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "One of the boys are late.",
        "One of the boys is late.",
        "One of the boy is late.",
        "One of the boys be late."
      ],
      correctIndex: 1,
      explanation: "The subject is one (singular), so we use is."
    }
  ],

  advanced: [
    // 1–10: Collective nouns, formal vs notional agreement
    {
      question: "Choose the correct sentence:",
      choices: [
        "The committee has finished their report.",
        "The committee have finished its report.",
        "The committee has finished its report.",
        "The committee have finished their report it."
      ],
      correctIndex: 2,
      explanation: "Committee is treated as a single unit; use has and its."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The committee is arguing among themselves.",
        "The committee are arguing among themselves.",
        "The committee is arguing among itself.",
        "The committees is arguing among themselves."
      ],
      correctIndex: 1,
      explanation: "When the members act individually (arguing), a plural verb and pronoun (are, themselves) are used."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The team was divided in its opinions.",
        "The team were divided in its opinions.",
        "The team were divided in their opinions.",
        "The team was divided in their opinions."
      ],
      correctIndex: 2,
      explanation: "Notional agreement: when focusing on individual members, we use were and their."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The staff is in a meeting.",
        "The staff are in a meeting.",
        "The staffs are in a meeting.",
        "The staff be in a meeting."
      ],
      correctIndex: 0,
      explanation: "Staff as a unit is usually treated as singular: is."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The staff is disagreeing with each other.",
        "The staff are disagreeing with each other.",
        "The staffs is disagreeing with each other.",
        "The staff are disagreeing with itself."
      ],
      correctIndex: 1,
      explanation: "When emphasizing individuals, staff takes a plural verb: are disagreeing."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The audience was clapping their hands.",
        "The audience were clapping its hands.",
        "The audiences was clapping their hands.",
        "The audience is clapping their hands."
      ],
      correctIndex: 0,
      explanation: "Standard usage: audience was clapping their hands; singular verb with a plural pronoun is common in modern English."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The jury has given its verdict.",
        "The jury have given its verdict.",
        "The jury have given their verdict it.",
        "The juries has given its verdict."
      ],
      correctIndex: 0,
      explanation: "As a unit, jury takes has and its."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The jury were divided in their opinions.",
        "The jury was divided in its opinions.",
        "Both A and B can be correct in different styles.",
        "Neither A nor B is ever correct."
      ],
      correctIndex: 2,
      explanation: "Formal English often prefers singular; notional agreement allows plural when emphasizing individuals."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The family has decided to sell their house.",
        "The family have decided to sell its house.",
        "The families has decided to sell their house.",
        "The family have decided to sell house."
      ],
      correctIndex: 0,
      explanation: "Family as a unit with a singular verb; their house is natural when referring to the members."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The band is playing their new song.",
        "The band are playing its new song.",
        "The bands is playing their new song.",
        "The band are playing new song."
      ],
      correctIndex: 0,
      explanation: "In many modern varieties, a singular band with plural pronoun their is common."
    },

    // 11–20: Pronoun–antecedent agreement (number)
    {
      question: "Choose the best completion: 'Every student must bring ____ ID.'",
      choices: ["his", "her", "his or her", "their"],
      correctIndex: 2,
      explanation: "Formally, Every student is singular, so 'his or her' is the most precise singular form."
    },
    {
      question: "Choose the best completion (modern usage): 'If anyone calls, tell ____ I am busy.'",
      choices: ["him", "her", "him or her", "them"],
      correctIndex: 3,
      explanation: "Modern English commonly uses singular 'they/them' for unknown gender."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Each of the workers cleaned their own tools.",
        "Each of the workers cleaned his or her own tools.",
        "Each of the workers cleaned its own tools.",
        "Each of the workers cleaned themselves."
      ],
      correctIndex: 1,
      explanation: "Formally, Each is singular and takes his or her; 'their' is common in modern informal English."
    },
    {
      question: "Choose the correct pronoun: 'Neither John nor Mark remembered ____ password.'",
      choices: ["his", "their", "its", "our"],
      correctIndex: 0,
      explanation: "Two male individuals; we use his (implied for each)."
    },
    {
      question: "Choose the correct pronoun: 'Neither the teachers nor the principal brought ____ laptop.'",
      choices: ["their", "his or her", "its", "our"],
      correctIndex: 1,
      explanation: "The verb and pronoun agree with the nearer noun principal (singular), so his or her is best."
    },
    {
      question: "Choose the correct pronoun: 'Somebody left ____ umbrella here.'",
      choices: ["his", "her", "his or her", "their"],
      correctIndex: 3,
      explanation: "Singular they (their) is standard for unknown gender."
    },
    {
      question: "Choose the correct completion: 'No one should lose ____ hope.'",
      choices: ["his", "her", "his or her", "their"],
      correctIndex: 3,
      explanation: "Again, singular they is widely used in modern English."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The team changed its uniforms before the match.",
        "The team changed their uniform before the match.",
        "The team changed its uniform before the match.",
        "The team changed itself uniforms before the match."
      ],
      correctIndex: 0,
      explanation: "As a unit, the team takes its; uniforms matches the plural pieces of clothing."
    },
    {
      question: "Choose the correct pronoun: 'A person should always do ____ best.'",
      choices: ["his", "her", "his or her", "their"],
      correctIndex: 2,
      explanation: "Formal: A person (singular) → his or her best."
    },
    {
      question: "Choose the sentence with correct pronoun–antecedent agreement:",
      choices: [
        "Everyone must submit their papers on time.",
        "Everyone must submit his or her paper on time.",
        "Everyone must submit its paper on time.",
        "Everyone must submit our paper on time."
      ],
      correctIndex: 1,
      explanation: "Formally, Everyone is singular; his or her matches in number."
    },

    // 21–30: Quantifiers & tricky structures
    {
      question: "Choose the correct phrase:",
      choices: [
        "few information",
        "a few informations",
        "little information",
        "many informations"
      ],
      correctIndex: 2,
      explanation: "Information is uncountable; we use little information."
    },
    {
      question: "Choose the correct phrase:",
      choices: [
        "many pieces of advice",
        "many advices",
        "much advices",
        "few advices"
      ],
      correctIndex: 0,
      explanation: "Advice is uncountable; we say many pieces of advice."
    },
    {
      question: "Choose the correct completion: 'Only a small ____ of progress was made.'",
      choices: ["number", "amount", "many", "few"],
      correctIndex: 1,
      explanation: "Progress is uncountable; we use a small amount of progress."
    },
    {
      question: "Choose the correct completion: 'A large ____ of people were waiting.'",
      choices: ["number", "amount", "little", "piece"],
      correctIndex: 0,
      explanation: "People is countable; we use a large number of people."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "A number of students is absent.",
        "A number of students are absent.",
        "The number of students are absent.",
        "The numbers of student is absent."
      ],
      correctIndex: 1,
      explanation: "A number of + plural noun takes a plural verb: are absent."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The amount of mistakes are surprising.",
        "The number of mistakes are surprising.",
        "The amount of mistakes is surprising.",
        "The number of mistakes is surprising."
      ],
      correctIndex: 3,
      explanation: "The number (singular) of mistakes is surprising."
    },
    {
      question: "Choose the correct phrase:",
      choices: [
        "many homework",
        "much homeworks",
        "much homework",
        "many homeworks"
      ],
      correctIndex: 2,
      explanation: "Homework is uncountable; we say much homework (or a lot of homework)."
    },
    {
      question: "Choose the correct phrase:",
      choices: [
        "two luggages",
        "two pieces of luggage",
        "two luggage",
        "two luggageses"
      ],
      correctIndex: 1,
      explanation: "Luggage is uncountable; we use pieces of luggage."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "There is a lot of people in the room.",
        "There are a lot of people in the room.",
        "There is many people in the room.",
        "There are much people in the room."
      ],
      correctIndex: 1,
      explanation: "People is plural; we use there are a lot of people."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "There is some chairs in the hall.",
        "There are some chair in the hall.",
        "There are some chairs in the hall.",
        "There is some chair in the hall."
      ],
      correctIndex: 2,
      explanation: "Chairs is plural, so use are and the plural noun."
    },

    // 31–40: Latin/Greek plurals & special cases
    {
      question: "What is the plural of 'criterion'?",
      choices: ["criterions", "criteria", "criterias", "criterion"],
      correctIndex: 1,
      explanation: "Criterion → criteria is the standard plural."
    },
    {
      question: "What is the plural of 'phenomenon'?",
      choices: ["phenomenons", "phenomena", "phenomenas", "phenomeni"],
      correctIndex: 1,
      explanation: "Phenomenon → phenomena."
    },
    {
      question: "What is the plural of 'analysis'?",
      choices: ["analysises", "analysis", "analyses", "analysi"],
      correctIndex: 2,
      explanation: "Words ending in -is often change to -es: analysis → analyses."
    },
    {
      question: "What is the plural of 'basis'?",
      choices: ["basises", "bases", "basisses", "basis"],
      correctIndex: 1,
      explanation: "Basis → bases."
    },
    {
      question: "What is the plural of 'thesis'?",
      choices: ["thesises", "theses", "thesis", "thesi"],
      correctIndex: 1,
      explanation: "Thesis → theses."
    },
    {
      question: "What is the plural of 'index' in mathematical contexts?",
      choices: ["indexes", "indices", "indexs", "indeces"],
      correctIndex: 1,
      explanation: "In mathematics, index → indices is common."
    },
    {
      question: "What is the plural of 'medium' (as in media)?",
      choices: ["mediums", "media", "medias", "medium"],
      correctIndex: 1,
      explanation: "Medium → media is the Latin-based plural."
    },
    {
      question: "What is the singular of 'data' in formal usage?",
      choices: ["datum", "datas", "date", "datus"],
      correctIndex: 0,
      explanation: "Datum is the singular of data."
    },
    {
      question: "What is the plural of 'syllabus'?",
      choices: ["syllabuses", "syllabi", "Both A and B", "syllab"],
      correctIndex: 2,
      explanation: "English allows both syllabuses and syllabi."
    },
    {
      question: "What is the plural of 'alumnus' (male graduate)?",
      choices: ["alumnas", "alumni", "alumnae", "alumnuses"],
      correctIndex: 1,
      explanation: "Alumnus → alumni for male or mixed group."
    },

    // 41–50: Complex agreement (there is/are, fractions, percentages)
    {
      question: "Choose the correct sentence:",
      choices: [
        "There is two problems with your answer.",
        "There are two problems with your answer.",
        "There is two problem with your answers.",
        "There are two problem with your answer."
      ],
      correctIndex: 1,
      explanation: "Two problems is plural; we use there are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "There is a number of issues to discuss.",
        "There are a number of issues to discuss.",
        "There is the number of issues to discuss.",
        "There are the number of issue to discuss."
      ],
      correctIndex: 1,
      explanation: "A number of + plural noun takes a plural verb: are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "There is a lot of work to do.",
        "There are a lot of work to do.",
        "There is a lot of works to do.",
        "There are a lot of works to do."
      ],
      correctIndex: 0,
      explanation: "Work is uncountable here; use there is."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Sixty percent of the students is present.",
        "Sixty percent of the students are present.",
        "Sixty percent of the student are present.",
        "Sixty percent of students is present."
      ],
      correctIndex: 1,
      explanation: "When followed by a plural noun (students), the verb is plural: are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Half of the water have spilled.",
        "Half of the water has spilled.",
        "Half of the waters have spilled.",
        "Half of the water spill."
      ],
      correctIndex: 1,
      explanation: "Water is uncountable; we treat it as singular for agreement: has spilled."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "One third of the cake have been eaten.",
        "One third of the cakes has been eaten.",
        "One third of the cake has been eaten.",
        "One thirds of the cake has been eaten."
      ],
      correctIndex: 2,
      explanation: "Cake is singular mass; One third of the cake has been eaten."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "More than one student are late.",
        "More than one student is late.",
        "More than one students are late.",
        "More than one students is late."
      ],
      correctIndex: 1,
      explanation: "The idiom more than one is treated as singular: is."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "More than two student is late.",
        "More than two students is late.",
        "More than two students are late.",
        "More than two student are late."
      ],
      correctIndex: 2,
      explanation: "More than two students is definitely plural; use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "A pair of shoes are on the floor.",
        "A pair of shoes is on the floor.",
        "A pairs of shoes is on the floor.",
        "A pairs of shoes are on the floor."
      ],
      correctIndex: 1,
      explanation: "The subject is pair (singular), so we use is."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Five dollars are too much for this item.",
        "Five dollars is too much for this item.",
        "Five dollar are too much for this item.",
        "Five dollar is too muchs for this item."
      ],
      correctIndex: 1,
      explanation: "When referring to a single amount of money, the verb is singular: Five dollars is too much."
    }
  ],

  super: [
    // 1–15: Very tricky S–V with long subjects, either/or, neither/nor
    {
      question: "Choose the correct sentence:",
      choices: [
        "Either the teacher or the students is responsible for the decorations.",
        "Either the teacher or the students are responsible for the decorations.",
        "Either the teacher or the students be responsible for the decorations.",
        "Either the teachers or the student are responsible for the decorations."
      ],
      correctIndex: 1,
      explanation: "With either/or, the verb agrees with the nearer subject. Here, students (plural) → are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Neither the manager nor his assistants is available.",
        "Neither the manager nor his assistants are available.",
        "Neither the managers nor his assistants is available.",
        "Neither the manager nor his assistant are available."
      ],
      correctIndex: 1,
      explanation: "The nearer subject assistants is plural, so we use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Either the books or the pen are on the table.",
        "Either the books or the pen is on the table.",
        "Either the book or the pens is on the table.",
        "Either the book or the pens am on the table."
      ],
      correctIndex: 1,
      explanation: "The nearer subject pen is singular; we use is."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Neither the students nor the teacher are ready.",
        "Neither the students nor the teacher is ready.",
        "Neither the student nor the teachers is ready.",
        "Neither the student nor the teachers am ready."
      ],
      correctIndex: 1,
      explanation: "The nearer subject teacher is singular, so the verb is is."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Either my brothers or my sister are coming.",
        "Either my brothers or my sister is coming.",
        "Either my brother or my sisters is coming.",
        "Either my brother or my sisters am coming."
      ],
      correctIndex: 1,
      explanation: "The nearer subject sister is singular; use is."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Neither my friend nor my parents knows the answer.",
        "Neither my friend nor my parents know the answer.",
        "Neither my friends nor my parent know the answer.",
        "Neither my friends nor my parent knows the answer."
      ],
      correctIndex: 1,
      explanation: "The nearer subject parents is plural; we use know."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "A bouquet of roses were on the table.",
        "A bouquet of roses was on the table.",
        "Bouquet of roses was on the tables.",
        "A bouquet of rose were on the table."
      ],
      correctIndex: 1,
      explanation: "The subject bouquet is singular; we use was."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "A list of names are attached.",
        "A list of names is attached.",
        "A lists of names is attached.",
        "A list of name are attached."
      ],
      correctIndex: 1,
      explanation: "The subject is list (singular), so we use is attached."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The quality of the products are improving.",
        "The quality of the products is improving.",
        "The qualities of the product is improving.",
        "The qualities of the product are improving it."
      ],
      correctIndex: 1,
      explanation: "The subject is quality (singular); use is improving."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "A series of lectures is scheduled for next week.",
        "A series of lectures are scheduled for next week.",
        "Series of lectures are scheduled for next week.",
        "Series of lectures is scheduled for next week."
      ],
      correctIndex: 0,
      explanation: "Here, series is singular and functions as the subject; is scheduled is correct."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The number of unemployed have increased.",
        "The number of unemployed has increased.",
        "The numbers of unemployed has increased.",
        "The numbers of unemployed have increased."
      ],
      correctIndex: 1,
      explanation: "The subject is the number (singular); has increased is correct."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "There is three cars in the garage.",
        "There are three cars in the garage.",
        "There is three car in the garage.",
        "There are three car in the garage."
      ],
      correctIndex: 1,
      explanation: "Three cars is plural; we use there are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Here is the keys you wanted.",
        "Here are the keys you wanted.",
        "Here are the key you wanted.",
        "Here is the keys you want."
      ],
      correctIndex: 1,
      explanation: "Keys is plural; we use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "On the table lies the books.",
        "On the table lie the books.",
        "On the tables lies the book.",
        "On the tables lie the book."
      ],
      correctIndex: 1,
      explanation: "Books is plural; the verb must be lie."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Under the bed was hiding three cats.",
        "Under the bed were hiding three cats.",
        "Under the bed hiding three cats were.",
        "Under the bed hiding was three cats."
      ],
      correctIndex: 1,
      explanation: "Three cats is plural and the real subject; were hiding matches the plural subject."
    },

    // 16–30: Advanced collective & plural-only nouns
    {
      question: "Which noun is always treated as plural?",
      choices: ["news", "mathematics", "scissors", "physics"],
      correctIndex: 2,
      explanation: "Scissors refers to a two-part object and is treated as plural."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The scissors is on the table.",
        "The scissors are on the table.",
        "The scissor are on the table.",
        "The scissor is on the table."
      ],
      correctIndex: 1,
      explanation: "Scissors is a plural-only noun; use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "A pair of trousers are in the closet.",
        "A pair of trousers is in the closet.",
        "A pairs of trousers is in the closet.",
        "A pair of trouser are in the closet."
      ],
      correctIndex: 1,
      explanation: "A pair (singular) takes a singular verb: is in the closet."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The goods is damaged.",
        "The goods are damaged.",
        "The good are damaged.",
        "The good is damaged."
      ],
      correctIndex: 1,
      explanation: "Goods is a plural-only noun; use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The police has arrived.",
        "The police have arrived.",
        "The polices have arrived.",
        "The police is arrived."
      ],
      correctIndex: 1,
      explanation: "Police is plural in form and meaning; use have."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The cattle is grazing in the field.",
        "The cattle are grazing in the field.",
        "The cattles are grazing in the field.",
        "The cattle grazing in the field is."
      ],
      correctIndex: 1,
      explanation: "Cattle is treated as a plural noun; use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The premises is large.",
        "The premises are large.",
        "The premise are large.",
        "The premise is large."
      ],
      correctIndex: 1,
      explanation: "Premises (building/land) is plural in form; we use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The measles are spreading quickly.",
        "The measles is spreading quickly.",
        "Measles are spreading quickly.",
        "Measles is spreading quickly."
      ],
      correctIndex: 1,
      explanation: "Measles is a disease name ending in s but is grammatically singular: is spreading."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Mathematics are my favorite subject.",
        "Mathematics is my favorite subject.",
        "The mathematics are difficult.",
        "The mathematic is difficult."
      ],
      correctIndex: 1,
      explanation: "Mathematics is treated as singular; is is correct."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Economics are interesting to me.",
        "Economics is interesting to me.",
        "Economic are interesting to me.",
        "Economic is interesting to me."
      ],
      correctIndex: 1,
      explanation: "Economics, the field of study, is singular: is interesting."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The stairs is too steep.",
        "The stairs are too steep.",
        "The stair are too steep.",
        "The stair is too steep."
      ],
      correctIndex: 1,
      explanation: "Stairs is plural; we use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "His means is sufficient.",
        "His means are sufficient.",
        "His mean are sufficient.",
        "His mean is sufficient."
      ],
      correctIndex: 1,
      explanation: "Means (resources, income) is often treated as plural; are sufficient."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The surroundings is quiet.",
        "The surroundings are quiet.",
        "The surrounding are quiet.",
        "The surrounding is quiet."
      ],
      correctIndex: 1,
      explanation: "Surroundings is plural; we use are."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "His earnings is high.",
        "His earning is high.",
        "His earnings are high.",
        "His earning are high."
      ],
      correctIndex: 2,
      explanation: "Earnings is plural; we say earnings are high."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The headquarters are in Manila.",
        "The headquarters is in Manila.",
        "The headquarter is in Manila.",
        "The headquarter are in Manila."
      ],
      correctIndex: 1,
      explanation: "Headquarters can be singular or plural in form; here it is treated as singular: is in Manila."
    },

    // 31–40: Notional agreement, abstract/collective senses
    {
      question: "Choose the correct sentence:",
      choices: [
        "The majority of voters is in favor.",
        "The majority of voters are in favor.",
        "The majority of voter are in favor.",
        "The majority of voters be in favor."
      ],
      correctIndex: 1,
      explanation: "When majority refers to people, we usually use a plural verb: are in favor."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The majority has already made their decision.",
        "The majority have already made their decision.",
        "The majorities has already made their decision.",
        "The majority has already made its decision them."
      ],
      correctIndex: 1,
      explanation: "Here majority is viewed as many individuals; have is natural."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "A couple of minutes is enough.",
        "A couple of minutes are enough.",
        "A couple of minute is enough.",
        "A couple of minute are enough."
      ],
      correctIndex: 1,
      explanation: "Couple of + plural noun is usually plural for time/number: are enough."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The couple is arguing again.",
        "The couple are arguing again.",
        "Both A and B can be correct, depending on meaning.",
        "Neither A nor B is ever correct."
      ],
      correctIndex: 2,
      explanation: "Couple can be treated as a unit (is) or as two people (are), depending on emphasis."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "Their family are big.",
        "Their family is big.",
        "Their families is big.",
        "Their families be big."
      ],
      correctIndex: 1,
      explanation: "Family as one household is singular; use is."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The government are introducing its new policy.",
        "The government is introducing their new policy.",
        "The government is introducing its new policy.",
        "The governments is introducing their new policy."
      ],
      correctIndex: 2,
      explanation: "Government as a unit → is introducing its new policy."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The class is handing in their assignments.",
        "The class are handing in its assignments.",
        "The classes is handing in their assignments.",
        "The class is handing in it assignments."
      ],
      correctIndex: 0,
      explanation: "Notional agreement: class (as students) with plural their is common."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The public are demanding their rights.",
        "The publics are demanding their rights.",
        "The public is demanding its right.",
        "The public demanding their rights is."
      ],
      correctIndex: 0,
      explanation: "Public can be treated as a group of individuals; are demanding their rights is common."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The media is biased.",
        "The media are biased.",
        "The medias are biased.",
        "The medium are biased."
      ],
      correctIndex: 1,
      explanation: "Media is plural (strict usage); media are biased."
    },
    {
      question: "Choose the correct sentence:",
      choices: [
        "The odds is against us.",
        "The odds are against us.",
        "The odd are against us.",
        "The odd is against us."
      ],
      correctIndex: 1,
      explanation: "Odds is plural; we say odds are against us."
    },

    // 41–50: Error-spotting – choose the sentence WITHOUT an error
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "Each of the players have a different jersey number.",
        "Each of the players has a different jersey number.",
        "Each of the player has a different jersey numbers.",
        "Each of the player have a different jersey number."
      ],
      correctIndex: 1,
      explanation: "Each is singular; has a different jersey number is correct."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "Every student and teacher were invited.",
        "Every student and teacher was invited.",
        "Every students and teacher was invited.",
        "Every student and teachers was invited."
      ],
      correctIndex: 1,
      explanation: "Every + singular nouns is treated as singular; was invited is correct."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "Many a man have tried and failed.",
        "Many a man has tried and failed.",
        "Many a men has tried and failed.",
        "Many a men have tried and failed."
      ],
      correctIndex: 1,
      explanation: "Many a + singular noun takes a singular verb: has tried."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "The furniture in this room are old.",
        "The furniture in this room is old.",
        "The furnitures in this room is old.",
        "The furniture in this room are olds."
      ],
      correctIndex: 1,
      explanation: "Furniture is uncountable and takes a singular verb: is old."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "Mathematics are an interesting subject.",
        "Mathematics is an interesting subject.",
        "The mathematic are interesting subject.",
        "The mathematics are interesting subjects."
      ],
      correctIndex: 1,
      explanation: "Mathematics is singular here; is an interesting subject is correct."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "The news are on at six o'clock.",
        "The news is on at six o'clock.",
        "The new is on at six o'clock.",
        "The news is on at six o'clocks."
      ],
      correctIndex: 1,
      explanation: "News is uncountable and takes a singular verb: is on."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "Politics are my favorite subject.",
        "Politics is my favorite subject.",
        "Politic is my favorite subject.",
        "The politics are my favorite subject."
      ],
      correctIndex: 1,
      explanation: "Politics (field) is singular; Politics is my favorite subject."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "The police is investigating the case.",
        "The police are investigating the case.",
        "The polices are investigating the case.",
        "The police are investigating the cases it."
      ],
      correctIndex: 1,
      explanation: "Police is plural; we say police are investigating."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "This kind of problems are common.",
        "These kind of problems is common.",
        "These kinds of problems are common.",
        "These kinds of problem are common."
      ],
      correctIndex: 2,
      explanation: "Kinds and problems are both plural; are common is correct."
    },
    {
      question: "Which sentence is free from error in number agreement?",
      choices: [
        "The data shows a clear trend.",
        "The data show a clear trend.",
        "The data showing a clear trend.",
        "The datas show a clear trend."
      ],
      correctIndex: 1,
      explanation: "In strict usage, data is plural and takes a plural verb: data show a clear trend."
    }
  ]
};
