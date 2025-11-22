const NOUN_QUESTIONS = {
  beginner: [
    // 1-10: Identifying Nouns (Person)
    { question: "Which word is a noun?", choices: ["quickly", "happy", "table", "outside"], correctIndex: 2, explanation: '"Table" is a noun because it names a thing.' },
    { question: 'Which word is a noun in this sentence: "The boy runs fast"?', choices: ["boy", "runs", "fast", "the"], correctIndex: 0, explanation: '"Boy" is a noun; it names a person.' },
    { question: "Which of the following is a person noun?", choices: ["library", "teacher", "city", "river"], correctIndex: 1, explanation: '"Teacher" names a person.' },
    { question: "Find the noun: 'The baby sleeps.'", choices: ["The", "baby", "sleeps", "quietly"], correctIndex: 1, explanation: '"Baby" is the person in the sentence.' },
    { question: "Which word names a person?", choices: ["sister", "blue", "jump", "under"], correctIndex: 0, explanation: '"Sister" is a person.' },
    { question: "Select the noun: 'My doctor is kind.'", choices: ["My", "doctor", "is", "kind"], correctIndex: 1, explanation: '"Doctor" names a person.' },
    { question: "Which is a noun?", choices: ["sing", "loudly", "uncle", "soft"], correctIndex: 2, explanation: '"Uncle" is a noun (person).' },
    { question: "Identify the noun: 'A driver drives the bus.'", choices: ["driver", "drives", "the", "fast"], correctIndex: 0, explanation: '"Driver" is a person noun.' },
    { question: "Which word is a noun?", choices: ["friend", "play", "funny", "always"], correctIndex: 0, explanation: '"Friend" is a noun.' },
    { question: "Find the noun: 'The king sat down.'", choices: ["sat", "king", "down", "The"], correctIndex: 1, explanation: '"King" is a person noun.' },

    // 11-20: Identifying Nouns (Place)
    { question: "Which word is a place noun?", choices: ["honesty", "mountain", "sing", "blue"], correctIndex: 1, explanation: '"Mountain" names a place.' },
    { question: "Find the place noun: 'We went to the park.'", choices: ["We", "went", "park", "to"], correctIndex: 2, explanation: '"Park" is a place.' },
    { question: "Which is a place?", choices: ["apple", "school", "run", "red"], correctIndex: 1, explanation: '"School" is a place.' },
    { question: "Select the noun: 'The city is big.'", choices: ["The", "city", "is", "big"], correctIndex: 1, explanation: '"City" is a place noun.' },
    { question: "Which word names a place?", choices: ["kitchen", "jump", "happy", "spoon"], correctIndex: 0, explanation: '"Kitchen" is a room/place.' },
    { question: "Identify the place: 'Let's go to the beach.'", choices: ["Let's", "go", "beach", "the"], correctIndex: 2, explanation: '"Beach" is a place.' },
    { question: "Which is a noun?", choices: ["garden", "swim", "slowly", "sad"], correctIndex: 0, explanation: '"Garden" is a place noun.' },
    { question: "Find the noun: 'The library is quiet.'", choices: ["library", "quiet", "is", "The"], correctIndex: 0, explanation: '"Library" is a place.' },
    { question: "Which word is a place?", choices: ["store", "run", "eat", "hot"], correctIndex: 0, explanation: '"Store" is a place.' },
    { question: "Identify the noun: 'My house is white.'", choices: ["My", "house", "is", "white"], correctIndex: 1, explanation: '"House" is a place noun.' },

    // 21-30: Identifying Nouns (Thing)
    { question: "Which word names a thing?", choices: ["run", "pencil", "happy", "slow"], correctIndex: 1, explanation: '"Pencil" is a thing.' },
    { question: "Find the noun: 'The car is red.'", choices: ["The", "car", "is", "red"], correctIndex: 1, explanation: '"Car" is a thing.' },
    { question: "Which is a thing?", choices: ["eat", "sleep", "ball", "walk"], correctIndex: 2, explanation: '"Ball" is a thing.' },
    { question: "Select the noun: 'I have a new phone.'", choices: ["I", "have", "new", "phone"], correctIndex: 3, explanation: '"Phone" is a thing.' },
    { question: "Which word is a noun?", choices: ["apple", "jump", "green", "under"], correctIndex: 0, explanation: '"Apple" is a thing.' },
    { question: "Identify the thing: 'The chair is hard.'", choices: ["The", "chair", "is", "hard"], correctIndex: 1, explanation: '"Chair" is a thing.' },
    { question: "Which is a noun?", choices: ["shoe", "go", "fast", "up"], correctIndex: 0, explanation: '"Shoe" is a thing.' },
    { question: "Find the noun: 'Read the book.'", choices: ["Read", "the", "book", "loudly"], correctIndex: 2, explanation: '"Book" is a thing.' },
    { question: "Which word names a thing?", choices: ["cup", "sing", "nice", "they"], correctIndex: 0, explanation: '"Cup" is a thing.' },
    { question: "Select the noun: 'The computer is on.'", choices: ["The", "computer", "is", "on"], correctIndex: 1, explanation: '"Computer" is a thing.' },

    // 31-40: Identifying Nouns (Idea/Abstract - Basic)
    { question: "Which of the following is an idea (abstract) noun?", choices: ["happiness", "chair", "garden", "window"], correctIndex: 0, explanation: '"Happiness" is a feeling/idea.' },
    { question: "Find the abstract noun: 'Love is important.'", choices: ["Love", "is", "important", "very"], correctIndex: 0, explanation: '"Love" is an idea or feeling.' },
    { question: "Which is an idea?", choices: ["table", "freedom", "pen", "dog"], correctIndex: 1, explanation: '"Freedom" is an idea.' },
    { question: "Select the noun: 'Her beauty is famous.'", choices: ["Her", "beauty", "is", "famous"], correctIndex: 1, explanation: '"Beauty" is an abstract noun.' },
    { question: "Which word is an abstract noun?", choices: ["hope", "door", "cat", "tree"], correctIndex: 0, explanation: '"Hope" is a feeling/idea.' },
    { question: "Find the noun: 'We want peace.'", choices: ["We", "want", "peace", "now"], correctIndex: 2, explanation: '"Peace" is an abstract noun.' },
    { question: "Which is a noun?", choices: ["anger", "angry", "angrily", "red"], correctIndex: 0, explanation: '"Anger" is the name of the feeling (noun).' },
    { question: "Identify the abstract noun: 'Time flies fast.'", choices: ["Time", "flies", "fast", "very"], correctIndex: 0, explanation: '"Time" is an abstract concept.' },
    { question: "Which word is a noun?", choices: ["bravery", "brave", "bravely", "strong"], correctIndex: 0, explanation: '"Bravery" is a quality/noun.' },
    { question: "Find the noun: 'It gives me joy.'", choices: ["It", "gives", "me", "joy"], correctIndex: 3, explanation: '"Joy" is a feeling/noun.' },

    // 41-50: Proper vs Common & Simple Plurals
    { question: "Which is a Proper Noun (specific name)?", choices: ["city", "London", "town", "village"], correctIndex: 1, explanation: '"London" is the specific name of a city.' },
    { question: "Which is a Common Noun?", choices: ["Superman", "Batman", "hero", "Spiderman"], correctIndex: 2, explanation: '"Hero" is a general term, not a specific name.' },
    { question: "Select the Proper Noun:", choices: ["man", "boy", "John", "guy"], correctIndex: 2, explanation: '"John" is a specific name.' },
    { question: "Which needs a capital letter?", choices: ["river", "nile", "water", "lake"], correctIndex: 1, explanation: '"Nile" is a proper noun (Name of a river).' },
    { question: "What is the plural of 'cat'?", choices: ["cat", "cats", "cates", "catss"], correctIndex: 1, explanation: 'Add "s" to make "cat" plural.' },
    { question: "What is the plural of 'dog'?", choices: ["dogs", "doges", "dog", "doggies"], correctIndex: 0, explanation: 'Add "s" to make "dog" plural.' },
    { question: "What is the plural of 'box'?", choices: ["boxs", "boxes", "boxies", "box"], correctIndex: 1, explanation: 'Add "es" to words ending in x.' },
    { question: "What is the plural of 'bus'?", choices: ["buss", "buses", "busses", "busies"], correctIndex: 1, explanation: 'Add "es" to words ending in s.' },
    { question: "What is the plural of 'baby'?", choices: ["babys", "babyes", "babies", "babe"], correctIndex: 2, explanation: 'Change "y" to "i" and add "es".' },
    { question: "Which is singular?", choices: ["cups", "cup", "cuppes", "caps"], correctIndex: 1, explanation: '"Cup" is one item.' }
  ],

  intermediate: [
    // 1-15: Irregular Plurals
    { question: "Which of the following is an irregular plural noun?", choices: ["cars", "books", "children", "houses"], correctIndex: 2, explanation: '"Children" is the irregular plural of "child".' },
    { question: "Which plural form is correct?", choices: ["foot", "foots", "feet", "feets"], correctIndex: 2, explanation: '"Feet" is the plural of "foot".' },
    { question: "Which plural noun is correct?", choices: ["womans", "woman", "womens", "women"], correctIndex: 3, explanation: '"Women" is the plural of "woman".' },
    { question: "What is the plural of 'tooth'?", choices: ["tooths", "teeth", "toothes", "teeths"], correctIndex: 1, explanation: '"Teeth" is the plural of "tooth".' },
    { question: "What is the plural of 'mouse'?", choices: ["mouses", "mices", "mice", "mouse"], correctIndex: 2, explanation: '"Mice" is the plural of "mouse".' },
    { question: "What is the plural of 'person'?", choices: ["persons", "people", "peoples", "persones"], correctIndex: 1, explanation: '"People" is the most common plural of "person".' },
    { question: "What is the plural of 'leaf'?", choices: ["leafs", "leaves", "leafes", "leave"], correctIndex: 1, explanation: 'Nouns ending in "f" often change to "ves".' },
    { question: "What is the plural of 'knife'?", choices: ["knifes", "knives", "knive", "knifves"], correctIndex: 1, explanation: 'Change "fe" to "ves".' },
    { question: "What is the plural of 'sheep'?", choices: ["sheeps", "sheep", "shoop", "sheepes"], correctIndex: 1, explanation: '"Sheep" stays the same in plural.' },
    { question: "What is the plural of 'fish'?", choices: ["fishs", "fish", "fishes", "fishies"], correctIndex: 1, explanation: '"Fish" usually stays the same (unless talking about species).' },
    { question: "What is the plural of 'goose'?", choices: ["gooses", "geese", "geeses", "goose"], correctIndex: 1, explanation: '"Geese" is the plural of "goose".' },
    { question: "What is the plural of 'ox'?", choices: ["oxes", "oxs", "oxen", "oxens"], correctIndex: 2, explanation: '"Oxen" is the plural of "ox".' },
    { question: "What is the plural of 'cactus'?", choices: ["cactuses", "cacti", "cactus", "cactii"], correctIndex: 1, explanation: '"Cacti" is the plural of "cactus".' },
    { question: "What is the plural of 'child'?", choices: ["childs", "children", "childes", "childrens"], correctIndex: 1, explanation: '"Children" is correct.' },
    { question: "What is the plural of 'life'?", choices: ["lifes", "lives", "live", "liffes"], correctIndex: 1, explanation: 'Change "fe" to "ves".' },

    // 16-30: Countable vs Uncountable Nouns
    { question: "Which sentence uses a countable noun correctly?", choices: ["He gave me three advice.", "She bought two breads.", "I have two cars.", "We have many furniture."], correctIndex: 2, explanation: '"Cars" is countable.' },
    { question: "Which sentence uses an uncountable noun correctly?", choices: ["She has many money.", "He has much experience.", "We bought three rice.", "They gave me two information."], correctIndex: 1, explanation: '"Experience" (as knowledge) is uncountable; use "much".' },
    { question: "Which word is an uncountable noun?", choices: ["apple", "water", "bottle", "cup"], correctIndex: 1, explanation: '"Water" is a liquid and uncountable.' },
    { question: "Which word is a countable noun?", choices: ["rice", "sugar", "orange", "milk"], correctIndex: 2, explanation: '"Orange" can be counted (one orange, two oranges).' },
    { question: "Select the correct phrase:", choices: ["many waters", "much water", "many water", "much waters"], correctIndex: 1, explanation: 'Use "much" with uncountable nouns like "water".' },
    { question: "Select the correct phrase:", choices: ["few information", "little information", "an information", "two informations"], correctIndex: 1, explanation: 'Use "little" with uncountable nouns.' },
    { question: "Which noun is uncountable?", choices: ["chair", "table", "furniture", "desk"], correctIndex: 2, explanation: '"Furniture" is a collective uncountable noun.' },
    { question: "Which noun is uncountable?", choices: ["suitcase", "bag", "luggage", "box"], correctIndex: 2, explanation: '"Luggage" is uncountable.' },
    { question: "Correct usage:", choices: ["I have a news.", "I have some news.", "I have two news.", "I have many news."], correctIndex: 1, explanation: '"News" is uncountable; use "some".' },
    { question: "Which is correct?", choices: ["How many money do you have?", "How much money do you have?", "How many moneys?", "How much moneys?"], correctIndex: 1, explanation: '"Money" is uncountable, so use "How much".' },
    { question: "Identify the countable noun:", choices: ["bread", "flour", "bun", "dough"], correctIndex: 2, explanation: '"Bun" is countable.' },
    { question: "Identify the uncountable noun:", choices: ["cloud", "rain", "puddle", "drop"], correctIndex: 1, explanation: '"Rain" is uncountable.' },
    { question: "Choose the correct quantifier for 'rice':", choices: ["many", "a few", "a little", "an"], correctIndex: 2, explanation: '"Rice" is uncountable, use "a little".' },
    { question: "Choose the correct quantifier for 'friends':", choices: ["much", "a little", "a lot of", "less"], correctIndex: 2, explanation: '"Friends" is countable, "a lot of" works (or many).' },
    { question: "Which is uncountable?", choices: ["gold", "ring", "necklace", "jewel"], correctIndex: 0, explanation: '"Gold" is a material/uncountable.' },

    // 31-40: Possessive Nouns
    { question: "Which shows correct possession?", choices: ["The boys bike", "The boy's bike", "The boys's bike", "The boies bike"], correctIndex: 1, explanation: '"Boy" is singular, so add apostrophe + s.' },
    { question: "Which shows possession for plural 'dogs'?", choices: ["The dogs's bone", "The dog's bone", "The dogs' bone", "The dog bone"], correctIndex: 2, explanation: 'For plural ending in s, just add apostrophe.' },
    { question: "Correct possession for 'children':", choices: ["The childrens' toys", "The children' toys", "The children's toys", "The childs' toys"], correctIndex: 2, explanation: '"Children" is plural but no "s", so add apostrophe + s.' },
    { question: "Whose car is it? It is ___ car.", choices: ["James'", "James's", "Jame's", "Both A and B are accepted"], correctIndex: 3, explanation: 'For names ending in s, both "James\'" and "James\'s" are often accepted.' },
    { question: "The ___ room is clean. (Plural)", choices: ["teacher's", "teachers'", "teachers's", "teacher"], correctIndex: 1, explanation: 'Plural "teachers" + apostrophe.' },
    { question: "This is my ___ house.", choices: ["parents'", "parent's", "parents's", "parents"], correctIndex: 0, explanation: 'Usually refers to two parents, so plural possessive.' },
    { question: "The ___ tail is long.", choices: ["cat", "cats", "cat's", "cats'"], correctIndex: 2, explanation: 'One cat owning a tail.' },
    { question: "The ___ bag is blue.", choices: ["man's", "mans'", "mens'", "mens"], correctIndex: 0, explanation: 'Singular man + \'s.' },
    { question: "The ___ restroom. (Plural)", choices: ["mens'", "mans'", "men's", "mens"], correctIndex: 2, explanation: 'Irregular plural "men" + \'s.' },
    { question: "My ___ name is Sarah.", choices: ["sisters", "sister's", "sisters'", "sister"], correctIndex: 1, explanation: 'One sister + \'s.' },

    // 41-50: Gender & Context
    { question: "What is the feminine noun for 'Prince'?", choices: ["Queen", "Lady", "Princess", "Duchess"], correctIndex: 2, explanation: '"Princess" is the female equivalent.' },
    { question: "What is the masculine noun for 'Niece'?", choices: ["Nephew", "Uncle", "Brother", "Cousin"], correctIndex: 0, explanation: '"Nephew" is the male equivalent.' },
    { question: "What is the feminine noun for 'Bull'?", choices: ["Horse", "Cow", "Ewe", "Mare"], correctIndex: 1, explanation: '"Cow" is the female of "Bull".' },
    { question: "What is the masculine noun for 'Hen'?", choices: ["Duck", "Rooster", "Drake", "Gander"], correctIndex: 1, explanation: '"Rooster" is the male of "Hen".' },
    { question: "The word 'Doctor' is a:", choices: ["Masculine noun", "Feminine noun", "Common gender noun", "Neuter noun"], correctIndex: 2, explanation: 'Doctors can be male or female.' },
    { question: "The word 'Table' is a:", choices: ["Masculine noun", "Feminine noun", "Common gender noun", "Neuter noun"], correctIndex: 3, explanation: 'In English, objects are neuter.' },
    { question: "What is the feminine of 'Waiter'?", choices: ["Waitress", "Waiting", "Lady waiter", "Waiteress"], correctIndex: 0, explanation: '"Waitress" is the traditional feminine form.' },
    { question: "What is the masculine of 'Aunt'?", choices: ["Father", "Uncle", "Grandpa", "Nephew"], correctIndex: 1, explanation: '"Uncle" corresponds to "Aunt".' },
    { question: "What is the feminine of 'Lion'?", choices: ["Tiger", "Lioness", "Leopard", "Liona"], correctIndex: 1, explanation: '"Lioness" is the female lion.' },
    { question: "Which word can refer to both male and female?", choices: ["King", "Sister", "Student", "Father"], correctIndex: 2, explanation: '"Student" is a common gender noun.' }
  ],
  
  
  advanced: [
    // 1-10: Noun Functions (Subject, Object, Predicate Nominative)
    { question: 'In the phrase "the old wooden bridge", which word is the head noun?', choices: ["the", "old", "wooden", "bridge"], correctIndex: 3, explanation: '"Bridge" is the head noun; the others describe it.' },
    { question: 'Identify the function of "cake" in: "She baked a cake."', choices: ["Subject", "Direct Object", "Indirect Object", "Predicate Nominative"], correctIndex: 1, explanation: 'It receives the action of baking directly.' },
    { question: 'Identify the function of "teacher" in: "He is a teacher."', choices: ["Subject", "Direct Object", "Indirect Object", "Predicate Nominative"], correctIndex: 3, explanation: 'It follows a linking verb (is) and renames the subject.' },
    { question: 'Identify the function of "John" in: "She gave John a book."', choices: ["Subject", "Direct Object", "Indirect Object", "Object of Preposition"], correctIndex: 2, explanation: 'John is the recipient of the direct object (book).' },
    { question: 'In "The dog in the yard barked", "yard" is the:', choices: ["Subject", "Direct Object", "Object of the Preposition", "Appositive"], correctIndex: 2, explanation: 'It follows the preposition "in".' },
    { question: 'Identify the Subject: "Under the bridge lived a troll."', choices: ["Under", "bridge", "lived", "troll"], correctIndex: 3, explanation: 'The sentence is inverted. The troll is the one living.' },
    { question: 'Identify the Direct Object: "The committee elected him chairman."', choices: ["committee", "elected", "him", "chairman"], correctIndex: 2, explanation: '"Him" receives the action of electing.' },
    { question: 'In "They elected him chairman", "chairman" is the:', choices: ["Direct Object", "Indirect Object", "Object Complement", "Subject"], correctIndex: 2, explanation: '"Chairman" renames or describes the direct object "him".' },
    { question: 'Identify the Predicate Nominative: "My favorite sport is swimming."', choices: ["My", "favorite", "sport", "swimming"], correctIndex: 3, explanation: 'It renames the subject after a linking verb.' },
    { question: 'Identify the Indirect Object: "Throw me the ball."', choices: ["Throw", "me", "the", "ball"], correctIndex: 1, explanation: '"Me" is the one receiving the ball.' },

    // 11-20: Gerunds (Verbs acting as Nouns)
    { question: "Which word is a Gerund acting as a noun?", choices: ["running (verb)", "run", "Running (is fun)", "ran"], correctIndex: 2, explanation: 'In "Running is fun", running acts as the subject.' },
    { question: 'Identify the gerund: "I enjoy reading."', choices: ["I", "enjoy", "reading", "none"], correctIndex: 2, explanation: '"Reading" is a noun form derived from a verb.' },
    { question: 'In "Swimming is good exercise", "Swimming" functions as:', choices: ["Verb", "Adjective", "Noun (Subject)", "Adverb"], correctIndex: 2, explanation: 'It is the subject of the sentence.' },
    { question: 'Identify the Gerund Phrase: "Eating vegetables is healthy."', choices: ["Eating", "Eating vegetables", "is healthy", "vegetables"], correctIndex: 1, explanation: 'The whole phrase acts as the subject.' },
    { question: "Which sentence contains a gerund?", choices: ["He is sleeping.", "Sleeping is vital.", "He sleeps well.", "I will sleep."], correctIndex: 1, explanation: '"Sleeping" is the subject (noun).' },
    { question: 'Function of the gerund in: "He hates waiting."', choices: ["Subject", "Direct Object", "Predicate Nominative", "Appositive"], correctIndex: 1, explanation: 'It receives the action of hating.' },
    { question: 'Function of the gerund in: "Her passion is dancing."', choices: ["Subject", "Direct Object", "Predicate Nominative", "Object of Preposition"], correctIndex: 2, explanation: 'Renames the subject "passion".' },
    { question: 'Function of the gerund in: "He is afraid of flying."', choices: ["Subject", "Direct Object", "Object of Preposition", "Indirect Object"], correctIndex: 2, explanation: 'Follows the preposition "of".' },
    { question: "Which word is NOT a noun?", choices: ["Freedom", "Flying (in 'Flying is safe')", "Quickly", "Decision"], correctIndex: 2, explanation: '"Quickly" is an adverb.' },
    { question: "Is 'Walking' a noun in: 'The walking dead'?", choices: ["Yes", "No, it's an adjective (participle)", "No, it's a verb", "Maybe"], correctIndex: 1, explanation: 'Here it describes the dead, so it acts as an adjective.' },

    // 21-30: Compound Nouns
    { question: "Which is a closed compound noun?", choices: ["ice cream", "mother-in-law", "toothpaste", "post office"], correctIndex: 2, explanation: 'Written as one word.' },
    { question: "Which is a hyphenated compound noun?", choices: ["basketball", "full moon", "check-in", "swimming pool"], correctIndex: 2, explanation: 'Uses a hyphen.' },
    { question: "Which is an open compound noun?", choices: ["firefly", "bus stop", "dry-cleaning", "bedroom"], correctIndex: 1, explanation: 'Written as two separate words.' },
    { question: "Plural of 'mother-in-law':", choices: ["mother-in-laws", "mothers-in-law", "mothers-in-laws", "mother-in-law"], correctIndex: 1, explanation: 'Pluralize the main noun (mother).' },
    { question: "Plural of 'passer-by':", choices: ["passer-bys", "passers-by", "passers-bys", "passer-bies"], correctIndex: 1, explanation: 'Pluralize the main person (passer).' },
    { question: "Plural of 'spoonful':", choices: ["spoonsful", "spoonfuls", "spoons-ful", "spoonsfuls"], correctIndex: 1, explanation: 'For measurement amounts ending in -ful, add s at the end.' },
    { question: "Plural of 'attorney-at-law':", choices: ["attorney-at-laws", "attorneys-at-law", "attorneys-at-laws", "attorney-at-law"], correctIndex: 1, explanation: 'Pluralize the main noun (attorney).' },
    { question: "Plural of 'chief of staff':", choices: ["chief of staffs", "chiefs of staff", "chiefs of staffs", "chieves of staff"], correctIndex: 1, explanation: 'Pluralize the head (chief).' },
    { question: "Which is a compound noun?", choices: ["sun", "flower", "sunflower", "sunny"], correctIndex: 2, explanation: 'Combination of sun + flower.' },
    { question: "Plural of 'merry-go-round':", choices: ["merries-go-round", "merry-go-rounds", "merry-goes-round", "merry-go-round"], correctIndex: 1, explanation: 'No clear main noun, so pluralize the end.' },

    // 31-40: Appositives
    { question: 'Identify the appositive: "My brother, David, is here."', choices: ["My", "brother", "David", "here"], correctIndex: 2, explanation: '"David" renames "brother".' },
    { question: 'In "The book, a bestseller, is sold out," the phrase "a bestseller" is an:', choices: ["Adjective Clause", "Appositive Phrase", "Adverbial Phrase", "Infinitive"], correctIndex: 1, explanation: 'It renames the noun "book".' },
    { question: 'Which sentence uses an appositive correctly?', choices: ["Mr. Smith, the teacher, is nice.", "Mr. Smith the teacher is nice.", "Mr. Smith, is nice.", "The teacher, is Mr. Smith."], correctIndex: 0, explanation: 'Non-essential appositives need commas.' },
    { question: 'Identify the appositive: "Edison, the inventor, was smart."', choices: ["Edison", "inventor", "smart", "was"], correctIndex: 1, explanation: '"The inventor" renames Edison.' },
    { question: 'Function of the appositive noun:', choices: ["To express action", "To rename another noun", "To show possession", "To connect clauses"], correctIndex: 1, explanation: 'Appositives rename or identify nearby nouns.' },
    { question: "Appositives are usually separated by:", choices: ["Periods", "Commas", "Semicolons", "Colons"], correctIndex: 1, explanation: 'Commas set off non-essential appositives.' },
    { question: "Find the appositive: 'We visited Paris, the capital of France.'", choices: ["We", "visited", "Paris", "the capital of France"], correctIndex: 3, explanation: 'Renames Paris.' },
    { question: "Is the appositive essential? 'My friend John is here.' (I have many friends)", choices: ["Yes", "No"], correctIndex: 0, explanation: 'Essential (no commas) because it specifies WHICH friend.' },
    { question: "Is the appositive essential? 'My husband, Mark, is here.' (I have one husband)", choices: ["Yes", "No"], correctIndex: 1, explanation: 'Non-essential (uses commas) because the name isn\'t needed to identify him.' },
    { question: 'In "The insect, a cockroach, crawled away," "cockroach" is:', choices: ["Subject", "Object", "Appositive", "Verb"], correctIndex: 2, explanation: 'Renames "insect".' },

    // 41-50: Noun Clauses (Introduction)
    { question: 'Identify the noun clause: "I know what you did."', choices: ["I know", "what you did", "you did", "know what"], correctIndex: 1, explanation: 'The clause acts as the direct object.' },
    { question: 'Function of the noun clause in: "What you said is true."', choices: ["Subject", "Object", "Adjective", "Adverb"], correctIndex: 0, explanation: 'The whole clause is the subject.' },
    { question: 'Identify the noun clause: "Give it to whoever wants it."', choices: ["Give it", "to whoever", "whoever wants it", "wants it"], correctIndex: 2, explanation: 'Acts as the object of the preposition "to".' },
    { question: 'Noun clauses often start with:', choices: ["If, because, since", "Who, what, that, how", "And, but, or", "In, on, at"], correctIndex: 1, explanation: 'Relative pronouns/adverbs start noun clauses.' },
    { question: 'Replace the noun clause with a pronoun: "I know [where he lives]."', choices: ["I know him.", "I know it.", "I know that.", "I know there."], correctIndex: 1, explanation: 'Noun clauses function like nouns/pronouns.' },
    { question: 'Function of the clause in: "My hope is that we win."', choices: ["Subject", "Direct Object", "Predicate Nominative", "Appositive"], correctIndex: 2, explanation: 'Follows linking verb "is".' },
    { question: "Is this a noun clause? 'The man [who called] is angry.'", choices: ["Yes", "No, it's an Adjective clause", "No, it's an Adverb clause", "No, it's a Verb"], correctIndex: 1, explanation: 'It describes "the man", so it is an adjective clause.' },
    { question: 'In "I wonder how he did it," the clause is the:', choices: ["Subject", "Direct Object", "Indirect Object", "Predicate Nominative"], correctIndex: 1, explanation: 'Receives the action of wondering.' },
    { question: 'The word "that" usually introduces a noun clause when it follows a:', choices: ["Noun", "Verb (mental action)", "Preposition", "Adjective"], correctIndex: 1, explanation: 'E.g., I think that..., I believe that...' },
    { question: 'Analyze: "Whoever wins gets the prize."', choices: ["'Whoever' is the subject", "'Whoever wins' is the subject", "'Prize' is the subject", "'Gets' is the subject"], correctIndex: 1, explanation: 'The entire clause is the subject.' }
  ],

  super: [
    // 1-15: Tricky Subject-Verb Agreement & Collective Nouns
    { question: "Choose the correct sentence:", choices: ["The committee have submitted its report.", "The committee has submitted its report.", "The committee have submitted their report it.", "The committee has submitted their report."], correctIndex: 1, explanation: 'Committee acting as one unit takes a singular verb and pronoun (has/its).' },
    { question: "Choose the correct sentence:", choices: ["The committee are arguing among themselves.", "The committee is arguing among themselves.", "The committee is arguing among itself.", "The committee arguing."], correctIndex: 0, explanation: 'When members act individually (arguing), use plural verb.' },
    { question: "My family ___ from Brazil.", choices: ["come", "comes", "are coming", "were coming"], correctIndex: 1, explanation: 'Family as a unit is singular.' },
    { question: "The police ___ investigating.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: '"Police" is always plural in English.' },
    { question: "The news ___ bad today.", choices: ["are", "is", "were", "have been"], correctIndex: 1, explanation: '"News" looks plural but is singular.' },
    { question: "Mathematics ___ difficult for some.", choices: ["are", "is", "were", "be"], correctIndex: 1, explanation: 'Fields of study ending in "s" are singular.' },
    { question: "The scissors ___ on the table.", choices: ["is", "are", "was", "be"], correctIndex: 1, explanation: '"Scissors" is a plural noun (implies two parts).' },
    { question: "A pair of scissors ___ on the table.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: '"Pair" is the subject, which is singular.' },
    { question: "Ten dollars ___ a high price.", choices: ["is", "are", "were", "am"], correctIndex: 0, explanation: 'Money amounts spoken as a total sum are singular.' },
    { question: "The staff ___ in a meeting.", choices: ["is", "are", "was", "has"], correctIndex: 0, explanation: 'Staff as a unit is singular.' },
    { question: "The staff ___ disagreeing on the proposal.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: 'Individual members disagreeing requires plural.' },
    { question: "Economics ___ my major.", choices: ["are", "is", "were", "have"], correctIndex: 1, explanation: 'Field of study = singular.' },
    { question: "Measles ___ a contagious disease.", choices: ["are", "is", "were", "have"], correctIndex: 1, explanation: 'Disease names ending in s are usually singular.' },
    { question: "The cattle ___ grazing.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: '"Cattle" is always plural.' },
    { question: "Everyone ___ here.", choices: ["are", "is", "were", "have"], correctIndex: 1, explanation: 'Indefinite pronouns (everyone, anyone) are singular.' },

    // 16-30: Foreign/Latin Plurals & Tricky Singulars
    { question: "What is the plural of 'criterion'?", choices: ["criterions", "criteria", "criterias", "criterion"], correctIndex: 1, explanation: 'Greek origin irregular plural.' },
    { question: "What is the plural of 'phenomenon'?", choices: ["phenomenons", "phenomena", "phenomenas", "phenomeni"], correctIndex: 1, explanation: 'Greek origin irregular plural.' },
    { question: "What is the plural of 'alumnus' (male)?", choices: ["alumnuses", "alumni", "alumnae", "alumnum"], correctIndex: 1, explanation: 'Latin masculine plural.' },
    { question: "What is the plural of 'alumna' (female)?", choices: ["alumnas", "alumni", "alumnae", "alumnus"], correctIndex: 2, explanation: 'Latin feminine plural.' },
    { question: "What is the plural of 'datum'?", choices: ["datums", "data", "datas", "date"], correctIndex: 1, explanation: '"Data" is technically the plural of "datum".' },
    { question: "What is the plural of 'analysis'?", choices: ["analyses", "analysises", "analysises", "analysi"], correctIndex: 0, explanation: 'Change "is" to "es".' },
    { question: "What is the plural of 'crisis'?", choices: ["crisises", "crises", "crisi", "cries"], correctIndex: 1, explanation: 'Change "is" to "es".' },
    { question: "What is the plural of 'radius'?", choices: ["radiuses", "radii", "radees", "radi"], correctIndex: 1, explanation: 'Latin "us" changes to "ii".' },
    { question: "What is the plural of 'nucleus'?", choices: ["nucleuses", "nuclei", "nucleis", "nuclear"], correctIndex: 1, explanation: 'Latin "us" changes to "i".' },
    { question: "What is the plural of 'appendix'?", choices: ["appendixes", "appendices", "Both A and B", "appendi"], correctIndex: 2, explanation: 'Both are accepted, but appendices is more formal.' },
    { question: "Singular of 'bacteria':", choices: ["bacterium", "bacterias", "bacteri", "bacteria"], correctIndex: 0, explanation: 'Bacteria is plural; Bacterium is singular.' },
    { question: "Singular of 'media':", choices: ["medium", "medias", "medi", "media"], correctIndex: 0, explanation: 'Media is plural; Medium is singular.' },
    { question: "Plural of 'syllabus':", choices: ["syllabi", "syllabuses", "Both A and B", "syllab"], correctIndex: 2, explanation: 'Both Latin (syllabi) and English (syllabuses) forms are used.' },
    { question: "Plural of 'index':", choices: ["indexes", "indices", "Both A and B", "index"], correctIndex: 2, explanation: 'Indexes (lists), Indices (math).' },
    { question: "Plural of 'series':", choices: ["serieses", "serie", "series", "seri"], correctIndex: 2, explanation: 'Series is the same in singular and plural.' },

    // 31-40: Possession Nuances (Joint vs Separate)
    { question: "___ car is new. (Owned by both Ben and Jerry jointly)", choices: ["Ben's and Jerry's", "Ben and Jerry's", "Ben's and Jerry", "Ben and Jerrys'"], correctIndex: 1, explanation: 'Joint possession: add \'s only to the last name.' },
    { question: "___ hair colors are different. (Owned separately)", choices: ["Susan and Mary's", "Susan's and Mary's", "Susan and Marys'", "Susans and Marys"], correctIndex: 1, explanation: 'Separate possession: add \'s to both names.' },
    { question: "My ___ house is big. (One boss)", choices: ["boss's", "boss'", "bosses", "Both A and B"], correctIndex: 3, explanation: 'Both styles are accepted for singular nouns ending in s.' },
    { question: "I met ___ sister.", choices: ["a friend of my", "a friend of mine", "a friend of me", "friend of mine"], correctIndex: 1, explanation: 'Double genitive structure (of + possessive pronoun).' },
    { question: "It is ___ fault.", choices: ["nobody's", "nobodies", "nobodys", "nobody"], correctIndex: 0, explanation: 'Indefinite pronouns take an apostrophe s.' },
    { question: "For ___ sake!", choices: ["goodness'", "goodness's", "goodnes", "goodn's"], correctIndex: 0, explanation: 'Fixed expression: usually just apostrophe.' },
    { question: "The ___ wife.", choices: ["Prince of Wales's", "Prince's of Wales", "Prince of Wales'", "Both A and C"], correctIndex: 3, explanation: 'Possessive attaches to the end of the full title.' },
    { question: "Possessive of 'someone else':", choices: ["someone's else", "someone else's", "someone elses'", "someone elses"], correctIndex: 1, explanation: 'Add \'s to the end of the phrase.' },
    { question: "The ___ decision.", choices: ["editor-in-chief's", "editor's-in-chief", "editors-in-chief", "editor-in-chiefs"], correctIndex: 0, explanation: 'Possessive goes at the end of compound noun.' },
    { question: "Three ___ time.", choices: ["month's", "months'", "months's", "months"], correctIndex: 1, explanation: 'Plural time expression: months + apostrophe.' },

    // 41-50: Advanced Syntax & Nominalization
    { question: "Identify the nominalization (Verb turned into Noun):", choices: ["He reacted quickly.", "His reaction was quick.", "He acts fast.", "Reacting is fast."], correctIndex: 1, explanation: '"Reaction" is the noun form of the verb "react".' },
    { question: "Attributive Noun usage: Which is correct?", choices: ["A table's leg", "A table leg", "A leg of table", "Leg table"], correctIndex: 1, explanation: 'For inanimate objects, we often use the noun as an adjective (Attributive Noun).' },
    { question: 'In "The poor need help," "The poor" is:', choices: ["Adjective", "Noun phrase acting as plural subject", "Adverb", "Verb"], correctIndex: 1, explanation: 'Adjective functioning as a collective noun.' },
    { question: "Choose the correct noun phrase order:", choices: ["The red big beautiful ball", "The beautiful big red ball", "The big beautiful red ball", "The red beautiful big ball"], correctIndex: 1, explanation: 'Order of adjectives: Opinion-Size-Age-Shape-Color-Origin-Material-Purpose.' },
    { question: 'What type of noun is "Self-esteem"?', choices: ["Simple", "Compound", "Proper", "Collective"], correctIndex: 1, explanation: 'Hyphenated compound noun.' },
    { question: 'In "I consider him a genius", "genius" is:', choices: ["Direct Object", "Object Complement", "Indirect Object", "Appositive"], correctIndex: 1, explanation: 'Completes the thought about the object "him".' },
    { question: "Which sentence uses a 'Noun Adjunct'?", choices: ["The soup is chicken.", "It is a chicken soup.", "The soup has chicken.", "Chicken is good."], correctIndex: 1, explanation: '"Chicken" acts as an adjective modifying "soup".' },
    { question: "Correct form:", choices: ["Five-year-old boy", "Five-years-old boy", "Five-years-olds boy", "Five-year-olds boy"], correctIndex: 0, explanation: 'Compound modifiers before a noun are singular and hyphenated.' },
    { question: "Correct form:", choices: ["Two dozen eggs", "Two dozens eggs", "Two dozens of eggs", "Two dozen of egg"], correctIndex: 0, explanation: 'Dozen stays singular after a number.' },
    {
  question: "In the sentence 'Physics is my favorite.', the word 'Physics' is:",
  choices: [
    "Plural form, Singular meaning",
    "Plural form, Plural meaning",
    "Singular form, Singular meaning",
    "Singular form, Plural meaning"
  ],
  correctIndex: 0,
  explanation: "It looks plural because of -s but it is treated as a singular subject."
}

  ]
};

