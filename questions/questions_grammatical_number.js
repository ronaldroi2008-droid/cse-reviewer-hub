// questions/grammatical_number.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["grammatical_number"] = {

  // ============================================================
  // LEVEL 1: BEGINNER (50 Items) - Basic Plurals & Recognition
  // ============================================================
  beginner: [
    // 1-10: Regular Plurals (-s)
    { question: "What is the plural of 'cat'?", options: ["cates", "cats", "catss", "catties"], answer: "cats", explanation: "For most regular nouns, we simply add 's' to the end." },
    { question: "What is the plural of 'book'?", options: ["bookes", "books", "bookies", "book"], answer: "books", explanation: "Just add 's' to form the plural of 'book'." },
    { question: "What is the plural of 'dog'?", options: ["dogs", "doges", "doggies", "doggs"], answer: "dogs", explanation: "Add 's' to regular nouns like 'dog'." },
    { question: "What is the plural of 'apple'?", options: ["apples", "applies", "applees", "appless"], answer: "apples", explanation: "Simply add 's' to words ending in 'e' like 'apple'." },
    { question: "What is the plural of 'car'?", options: ["carrs", "cares", "cars", "caries"], answer: "cars", explanation: "Add 's' to 'car' to make it plural." },
    { question: "What is the plural of 'tree'?", options: ["trees", "treeses", "trese", "treies"], answer: "trees", explanation: "Add 's' to 'tree'." },
    { question: "What is the plural of 'table'?", options: ["tabless", "tables", "tablies", "tabels"], answer: "tables", explanation: "Add 's' to 'table'." },
    { question: "What is the plural of 'girl'?", options: ["girles", "girls", "girlys", "girless"], answer: "girls", explanation: "Add 's' to 'girl'." },
    { question: "What is the plural of 'pencil'?", options: ["penciles", "pencill", "pencils", "pencillies"], answer: "pencils", explanation: "Add 's' to 'pencil'." },
    { question: "What is the plural of 'cup'?", options: ["cupes", "cups", "cupps", "cupies"], answer: "cups", explanation: "Add 's' to 'cup'." },

    // 11-20: Plurals ending in -es
    { question: "What is the plural of 'box'?", options: ["boxs", "boxes", "boxies", "boxses"], answer: "boxes", explanation: "Nouns ending in 'x' usually take '-es' in the plural." },
    { question: "What is the plural of 'bus'?", options: ["buss", "buses", "busies", "buse"], answer: "buses", explanation: "Nouns ending in 's' take '-es'." },
    { question: "What is the plural of 'watch'?", options: ["watchs", "watches", "watchies", "watch"], answer: "watches", explanation: "Nouns ending in 'ch' take '-es'." },
    { question: "What is the plural of 'brush'?", options: ["brushs", "brushes", "brushies", "brushse"], answer: "brushes", explanation: "Nouns ending in 'sh' take '-es'." },
    { question: "What is the plural of 'glass'?", options: ["glass", "glases", "glasses", "glassies"], answer: "glasses", explanation: "Nouns ending in 'ss' take '-es'." },
    { question: "What is the plural of 'fox'?", options: ["foxs", "foxes", "foxies", "foxen"], answer: "foxes", explanation: "Words ending in 'x' need '-es' to be plural." },
    { question: "What is the plural of 'dish'?", options: ["dishs", "dishes", "dishies", "dishess"], answer: "dishes", explanation: "Words ending in 'sh' add '-es'." },
    { question: "What is the plural of 'church'?", options: ["churchs", "churches", "churchies", "chirches"], answer: "churches", explanation: "Words ending in 'ch' add '-es'." },
    { question: "What is the plural of 'dress'?", options: ["dreses", "dresses", "dresss", "dressies"], answer: "dresses", explanation: "Words ending in 'ss' add '-es'." },
    { question: "What is the plural of 'class'?", options: ["classes", "classs", "classies", "clases"], answer: "classes", explanation: "Words ending in 'ss' add '-es'." },

    // 21-30: Plurals ending in -y
    { question: "What is the plural of 'baby'?", options: ["babys", "babies", "babyes", "babys"], answer: "babies", explanation: "If a word ends in a consonant + y, change 'y' to 'i' and add 'es'." },
    { question: "What is the plural of 'city'?", options: ["citys", "cities", "cityes", "citties"], answer: "cities", explanation: "Consonant + y (t+y) becomes 'ies'." },
    { question: "What is the plural of 'boy'?", options: ["boies", "boys", "boyes", "boies"], answer: "boys", explanation: "If a word ends in a vowel + y (o+y), just add 's'." },
    { question: "What is the plural of 'toy'?", options: ["toys", "toies", "toyes", "toyies"], answer: "toys", explanation: "Vowel + y (o+y), just add 's'." },
    { question: "What is the plural of 'lady'?", options: ["ladys", "ladies", "ladyes", "ladees"], answer: "ladies", explanation: "Consonant + y (d+y) becomes 'ies'." },
    { question: "What is the plural of 'party'?", options: ["partys", "parties", "partyes", "partees"], answer: "parties", explanation: "Consonant + y becomes 'ies'." },
    { question: "What is the plural of 'key'?", options: ["kies", "keys", "keyes", "keies"], answer: "keys", explanation: "Vowel + y (e+y), just add 's'." },
    { question: "What is the plural of 'day'?", options: ["daies", "days", "dayes", "dais"], answer: "days", explanation: "Vowel + y, just add 's'." },
    { question: "What is the plural of 'fly' (insect)?", options: ["flys", "flies", "flyes", "flyies"], answer: "flies", explanation: "Consonant + y becomes 'ies'." },
    { question: "What is the plural of 'monkey'?", options: ["monkies", "monkeys", "monkeyes", "monkies"], answer: "monkeys", explanation: "Vowel + y (e+y), just add 's'." },

    // 31-40: Singular vs Plural Recognition
    { question: "Which word is singular?", options: ["cats", "dog", "birds", "ants"], answer: "dog", explanation: "'Dog' refers to only one animal." },
    { question: "Which word is plural?", options: ["apple", "banana", "grapes", "melon"], answer: "grapes", explanation: "'Grapes' ends in s, referring to more than one." },
    { question: "Identify the plural noun.", options: ["Teacher", "Student", "Schools", "Class"], answer: "Schools", explanation: "'Schools' is the only plural word here." },
    { question: "Identify the singular noun.", options: ["Desks", "Chair", "Pencils", "Erasers"], answer: "Chair", explanation: "'Chair' is singular." },
    { question: "Which is NOT plural?", options: ["Mice", "Teeth", "Foot", "Geese"], answer: "Foot", explanation: "'Foot' is singular. The plural is 'feet'." },
    { question: "Which is NOT singular?", options: ["Man", "Women", "Child", "Tooth"], answer: "Women", explanation: "'Women' is plural. The singular is 'woman'." },
    { question: "Choose the plural word.", options: ["Leaf", "Leaves", "Life", "Loaf"], answer: "Leaves", explanation: "'Leaves' is the plural of 'leaf'." },
    { question: "Choose the singular word.", options: ["Knives", "Wives", "Life", "Shelves"], answer: "Life", explanation: "'Life' is singular." },
    { question: "Is 'Information' singular or plural?", options: ["Singular (Uncountable)", "Plural", "Both", "Neither"], answer: "Singular (Uncountable)", explanation: "Information is an uncountable noun and is treated as singular." },
    { question: "Is 'Water' singular or plural?", options: ["Singular (Uncountable)", "Plural", "Both", "Neither"], answer: "Singular (Uncountable)", explanation: "Water is a mass noun, treated as singular." },

    // 41-50: Basic Subject-Verb Agreement
    { question: "The cat ___ sleeping.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Singular subject 'cat' takes singular verb 'is'." },
    { question: "The dogs ___ barking.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Plural subject 'dogs' takes plural verb 'are'." },
    { question: "She ___ a teacher.", options: ["are", "is", "were", "be"], answer: "is", explanation: "Singular subject 'She' takes 'is'." },
    { question: "They ___ friends.", options: ["is", "are", "was", "am"], answer: "are", explanation: "Plural subject 'They' takes 'are'." },
    { question: "The book ___ on the table.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Singular subject 'book' takes 'is'." },
    { question: "The pens ___ blue.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Plural subject 'pens' takes 'are'." },
    { question: "My brother ___ tall.", options: ["are", "is", "were", "have"], answer: "is", explanation: "Singular subject 'brother' takes 'is'." },
    { question: "We ___ happy.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Plural subject 'We' takes 'are'." },
    { question: "He ___ to school.", options: ["walk", "walks", "walking", "walked"], answer: "walks", explanation: "Singular subject 'He' takes the verb with 's' (walks)." },
    { question: "They ___ to school.", options: ["walk", "walks", "walking", "walked"], answer: "walk", explanation: "Plural subject 'They' takes the base verb (walk)." }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Irregulars & Countability
  // ============================================================
  intermediate: [
    // 1-15: Irregular Plurals
    { question: "What is the plural of 'man'?", options: ["mans", "mens", "men", "manes"], answer: "men", explanation: "Irregular plural: 'a' changes to 'e'." },
    { question: "What is the plural of 'woman'?", options: ["womans", "womens", "women", "womanes"], answer: "women", explanation: "Irregular plural: 'woman' becomes 'women'." },
    { question: "What is the plural of 'child'?", options: ["childs", "children", "childes", "childrens"], answer: "children", explanation: "Child -> Children." },
    { question: "What is the plural of 'foot'?", options: ["foots", "feet", "feets", "futes"], answer: "feet", explanation: "Foot -> Feet." },
    { question: "What is the plural of 'tooth'?", options: ["tooths", "teeth", "toothes", "teeths"], answer: "teeth", explanation: "Tooth -> Teeth." },
    { question: "What is the plural of 'goose'?", options: ["gooses", "geese", "geeses", "gouse"], answer: "geese", explanation: "Goose -> Geese." },
    { question: "What is the plural of 'mouse'?", options: ["mouses", "mice", "mices", "meese"], answer: "mice", explanation: "Mouse -> Mice." },
    { question: "What is the plural of 'ox'?", options: ["oxes", "oxen", "oxs", "oxens"], answer: "oxen", explanation: "Ox -> Oxen." },
    { question: "What is the plural of 'louse'?", options: ["louses", "lice", "licses", "louse"], answer: "lice", explanation: "Louse -> Lice." },
    { question: "What is the plural of 'person'?", options: ["persons", "people", "peoples", "persones"], answer: "people", explanation: "'People' is the most common plural, though 'persons' exists in formal contexts." },
    { question: "What is the plural of 'leaf'?", options: ["leafs", "leaves", "leafes", "leave"], answer: "leaves", explanation: "Nouns ending in 'f' often change to 'ves'." },
    { question: "What is the plural of 'wolf'?", options: ["wolfs", "wolves", "wolfes", "wolv"], answer: "wolves", explanation: "Wolf -> Wolves." },
    { question: "What is the plural of 'knife'?", options: ["knifes", "knives", "knive", "knifves"], answer: "knives", explanation: "Knife -> Knives." },
    { question: "What is the plural of 'wife'?", options: ["wifes", "wives", "wivies", "wifs"], answer: "wives", explanation: "Wife -> Wives." },
    { question: "What is the plural of 'thief'?", options: ["thiefs", "thieves", "thiefes", "thievs"], answer: "thieves", explanation: "Thief -> Thieves." },

    // 16-30: Zero Plural (Same Form)
    { question: "What is the plural of 'sheep'?", options: ["sheeps", "sheep", "sheppes", "shoop"], answer: "sheep", explanation: "Sheep stays the same." },
    { question: "What is the plural of 'deer'?", options: ["deers", "deer", "deeres", "doer"], answer: "deer", explanation: "Deer stays the same." },
    { question: "What is the plural of 'fish' (general)?", options: ["fishs", "fishes", "fish", "fishies"], answer: "fish", explanation: "Fish usually stays the same (Fishes is used for different species)." },
    { question: "What is the plural of 'salmon'?", options: ["salmons", "salmon", "salmones", "salmen"], answer: "salmon", explanation: "Salmon stays the same." },
    { question: "What is the plural of 'tuna'?", options: ["tunas", "tuna", "tunae", "tunes"], answer: "tuna", explanation: "Tuna usually stays the same in context of food/fishing." },
    { question: "What is the plural of 'moose'?", options: ["mooses", "meese", "moose", "moos"], answer: "moose", explanation: "Moose stays the same." },
    { question: "What is the plural of 'aircraft'?", options: ["aircrafts", "aircraft", "aircraftes", "air-crafts"], answer: "aircraft", explanation: "Aircraft stays the same." },
    { question: "What is the plural of 'series'?", options: ["serieses", "series", "serie", "seri"], answer: "series", explanation: "Series is the same in singular and plural." },
    { question: "What is the plural of 'species'?", options: ["specieses", "specie", "species", "speci"], answer: "species", explanation: "Species is the same in singular and plural." },
    { question: "What is the plural of 'shrimp'?", options: ["shrimps", "shrimp", "shrimpes", "shramps"], answer: "shrimp", explanation: "Shrimp is often used as a zero plural." },
    { question: "Which is correct?", options: ["Two sheeps", "Two sheep", "Two sheepses", "Two ship"], answer: "Two sheep", explanation: "Sheep never takes an 's'." },
    { question: "Which is correct?", options: ["Many deers", "Many deer", "Many doer", "Much deer"], answer: "Many deer", explanation: "Deer never takes an 's'." },
    { question: "Which is correct?", options: ["A herd of mooses", "A herd of moose", "A herd of meese", "A herd of moos"], answer: "A herd of moose", explanation: "Moose is always moose." },
    { question: "Is 'Music' countable or uncountable?", options: ["Countable", "Uncountable", "Both", "Neither"], answer: "Uncountable", explanation: "Music is uncountable." },
    { question: "Is 'Furniture' countable or uncountable?", options: ["Countable", "Uncountable", "Both", "Neither"], answer: "Uncountable", explanation: "Furniture is uncountable." },

    // 31-40: Compound Nouns Pluralization
    { question: "What is the plural of 'mother-in-law'?", options: ["mother-in-laws", "mothers-in-law", "mothers-in-laws", "mother-in-law"], answer: "mothers-in-law", explanation: "Pluralize the main person (mother), not the law." },
    { question: "What is the plural of 'passer-by'?", options: ["passer-bys", "passers-by", "passers-bys", "passer-by"], answer: "passers-by", explanation: "Pluralize the person (passer)." },
    { question: "What is the plural of 'editor-in-chief'?", options: ["editors-in-chief", "editor-in-chiefs", "editors-in-chiefs", "editor-in-chieves"], answer: "editors-in-chief", explanation: "Pluralize the main word (editor)." },
    { question: "What is the plural of 'runner-up'?", options: ["runner-ups", "runners-up", "runners-ups", "runner-up"], answer: "runners-up", explanation: "Pluralize the person (runner)." },
    { question: "What is the plural of 'cupful'?", options: ["cupsful", "cupfuls", "cupsfuls", "cup-fuls"], answer: "cupfuls", explanation: "For measurements ending in -ful, add 's' at the end." },
    { question: "What is the plural of 'spoonful'?", options: ["spoonsful", "spoonfuls", "spoonsfuls", "spoon-fuls"], answer: "spoonfuls", explanation: "Add 's' to the end: Spoonfuls." },
    { question: "What is the plural of 'toothbrush'?", options: ["teethbrush", "toothbrushes", "teethbrushes", "toothbrushs"], answer: "toothbrushes", explanation: "Pluralize the end of the compound word." },
    { question: "What is the plural of 'fireman'?", options: ["firemans", "firemen", "firesman", "firemens"], answer: "firemen", explanation: "Man changes to Men." },
    { question: "What is the plural of 'bookshelf'?", options: ["bookshelfs", "bookshelves", "booksshelf", "bookshelvs"], answer: "bookshelves", explanation: "Shelf changes to Shelves." },
    { question: "What is the plural of 'stepchild'?", options: ["stepchilds", "stepchildren", "stepschild", "stepchildes"], answer: "stepchildren", explanation: "Child changes to Children." },

    // 41-50: Nouns ending in 'o'
    { question: "What is the plural of 'potato'?", options: ["potatos", "potatoes", "potatoies", "potatose"], answer: "potatoes", explanation: "Add '-es' to potato." },
    { question: "What is the plural of 'tomato'?", options: ["tomatos", "tomatoes", "tomatoies", "tomatose"], answer: "tomatoes", explanation: "Add '-es' to tomato." },
    { question: "What is the plural of 'hero'?", options: ["heros", "heroes", "heroies", "herose"], answer: "heroes", explanation: "Add '-es' to hero." },
    { question: "What is the plural of 'echo'?", options: ["echos", "echoes", "echoies", "echose"], answer: "echoes", explanation: "Add '-es' to echo." },
    { question: "What is the plural of 'radio'?", options: ["radios", "radioes", "radioies", "radiose"], answer: "radios", explanation: "For musical/tech terms ending in 'o', usually just add 's'." },
    { question: "What is the plural of 'piano'?", options: ["pianos", "pianoes", "pianoies", "pianose"], answer: "pianos", explanation: "Just add 's' to piano." },
    { question: "What is the plural of 'photo'?", options: ["photos", "photoes", "photoies", "photose"], answer: "photos", explanation: "Just add 's' to photo." },
    { question: "What is the plural of 'video'?", options: ["videos", "videoes", "videoies", "videose"], answer: "videos", explanation: "Just add 's' to video." },
    { question: "What is the plural of 'zoo'?", options: ["zoos", "zooes", "zooies", "zoose"], answer: "zoos", explanation: "Just add 's' to zoo." },
    { question: "What is the plural of 'volcano'?", options: ["volcanos", "volcanoes", "Both A and B", "volcani"], answer: "Both A and B", explanation: "Both 'volcanos' and 'volcanoes' are accepted." }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Foreign & Collective
  // ============================================================
  advanced: [
    // 1-15: Foreign Plurals (Latin/Greek)
    { question: "What is the plural of 'datum'?", options: ["datums", "data", "datas", "date"], answer: "data", explanation: "Data is the Latin plural of datum." },
    { question: "What is the plural of 'criterion'?", options: ["criterions", "criteria", "criterias", "criterion"], answer: "criteria", explanation: "Criteria is the Greek plural of criterion." },
    { question: "What is the plural of 'phenomenon'?", options: ["phenomenons", "phenomena", "phenomenas", "phenomeni"], answer: "phenomena", explanation: "Phenomena is the Greek plural." },
    { question: "What is the plural of 'analysis'?", options: ["analyses", "analysises", "analysis", "analysi"], answer: "analyses", explanation: "Change 'is' to 'es': Analyses." },
    { question: "What is the plural of 'thesis'?", options: ["thesises", "theses", "thesis", "thesi"], answer: "theses", explanation: "Change 'is' to 'es': Theses." },
    { question: "What is the plural of 'crisis'?", options: ["crisises", "crises", "crisi", "cries"], answer: "crises", explanation: "Change 'is' to 'es': Crises." },
    { question: "What is the plural of 'cactus'?", options: ["cactuses", "cacti", "Both A and B", "cactus"], answer: "Both A and B", explanation: "Both Cacti (Latin) and Cactuses (English) are accepted." },
    { question: "What is the plural of 'fungus'?", options: ["funguses", "fungi", "Both A and B", "fungu"], answer: "Both A and B", explanation: "Both Fungi and Funguses are accepted." },
    { question: "What is the plural of 'nucleus'?", options: ["nucleuses", "nuclei", "nucleis", "nuclear"], answer: "nuclei", explanation: "Nucleus -> Nuclei." },
    { question: "What is the plural of 'stimulus'?", options: ["stimuluses", "stimuli", "stimulis", "stimul"], answer: "stimuli", explanation: "Stimulus -> Stimuli." },
    { question: "What is the plural of 'alumnus' (male)?", options: ["alumni", "alumnae", "alumnuses", "alumnas"], answer: "alumni", explanation: "Alumnus -> Alumni." },
    { question: "What is the plural of 'alumna' (female)?", options: ["alumni", "alumnae", "alumnas", "alumnus"], answer: "alumnae", explanation: "Alumna -> Alumnae." },
    { question: "What is the plural of 'bacterium'?", options: ["bacteriums", "bacteria", "bacterias", "bacteri"], answer: "bacteria", explanation: "Bacterium -> Bacteria." },
    { question: "What is the plural of 'medium'?", options: ["mediums", "media", "medias", "medi"], answer: "media", explanation: "Medium -> Media (e.g., Social Media)." },
    { question: "What is the plural of 'index'?", options: ["indexes", "indices", "Both A and B", "index"], answer: "Both A and B", explanation: "Indexes (books) or Indices (math)." },

    // 16-30: Subject-Verb Agreement (Collective Nouns)
    { question: "The team ___ winning the game.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Team acting as one unit -> singular verb 'is'." },
    { question: "The team ___ arguing among themselves.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Team members acting individually -> plural verb 'are'." },
    { question: "The committee ___ reached a decision.", options: ["has", "have", "are", "were"], answer: "has", explanation: "Acting as a unit -> singular 'has'." },
    { question: "The staff ___ in a meeting.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Staff as a unit -> singular 'is'." },
    { question: "The staff ___ working on their own projects.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Individual actions -> plural 'are'." },
    { question: "The audience ___ clapping.", options: ["was", "were", "is", "has"], answer: "was", explanation: "Audience as a whole -> singular 'was'." },
    { question: "The family ___ eating dinner.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Family as a unit -> singular 'is'." },
    { question: "The jury ___ given its verdict.", options: ["has", "have", "are", "were"], answer: "has", explanation: "Unit -> singular 'has'." },
    { question: "The jury ___ divided in their opinions.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Divided/Individual -> plural 'are'." },
    { question: "The crowd ___ shouting.", options: ["was", "were", "are", "have"], answer: "was", explanation: "Crowd as a unit -> singular 'was'." },
    { question: "A pack of wolves ___ approaching.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Subject is 'pack' (singular) -> 'is'." },
    { question: "A bunch of grapes ___ on the table.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Subject is 'bunch' (singular) -> 'is'." },
    { question: "A herd of cattle ___ grazing.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Subject is 'herd' (singular) -> 'is'." },
    { question: "The police ___ here.", options: ["is", "are", "was", "has"], answer: "are", explanation: "'Police' is always plural -> 'are'." },
    { question: "Cattle ___ raised on the farm.", options: ["is", "are", "was", "has"], answer: "are", explanation: "'Cattle' is always plural -> 'are'." },

    // 31-40: Subject-Verb Agreement (Quantifiers & Fractions)
    { question: "Half of the pie ___ eaten.", options: ["was", "were", "are", "have"], answer: "was", explanation: "Pie is singular/uncountable -> 'was'." },
    { question: "Half of the pies ___ eaten.", options: ["was", "were", "is", "has"], answer: "were", explanation: "Pies is plural -> 'were'." },
    { question: "Some of the milk ___ spilled.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Milk is uncountable -> 'is'." },
    { question: "Some of the students ___ late.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Students is plural -> 'are'." },
    { question: "All of the cake ___ gone.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Cake is singular here -> 'is'." },
    { question: "All of the cookies ___ gone.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Cookies is plural -> 'are'." },
    { question: "A number of students ___ absent.", options: ["is", "are", "was", "has"], answer: "are", explanation: "'A number of' takes a PLURAL verb -> 'are'." },
    { question: "The number of students ___ increasing.", options: ["is", "are", "were", "have"], answer: "is", explanation: "'The number of' takes a SINGULAR verb -> 'is'." },
    { question: "Ten dollars ___ a lot of money.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Money/Time/Distance as a unit -> singular 'is'." },
    { question: "Five years ___ a long time.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Time as a unit -> singular 'is'." },

    // 41-50: Plural-Only Nouns
    { question: "The scissors ___ sharp.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Scissors is plural -> 'are'." },
    { question: "My glasses ___ broken.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Glasses is plural -> 'are'." },
    { question: "His pants ___ torn.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Pants is plural -> 'are'." },
    { question: "The binoculars ___ helpful.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Binoculars is plural -> 'are'." },
    { question: "Her belongings ___ packed.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Belongings is plural -> 'are'." },
    { question: "The goods ___ delivered.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Goods is plural -> 'are'." },
    { question: "My shorts ___ dirty.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Shorts is plural -> 'are'." },
    { question: "The tweezers ___ small.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Tweezers is plural -> 'are'." },
    { question: "The pliers ___ rusty.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Pliers is plural -> 'are'." },
    { question: "Thanks ___ due to him.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Thanks is plural -> 'are'." }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (50 Items) - Advanced Nuances
  // ============================================================
  expert: [
    // 1-15: Tricky Subject-Verb Agreement (Proximity & Indefinite)
    { question: "Either the boy or the girls ___ playing.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Either/Or: Agree with the closest noun (girls) -> 'are'." },
    { question: "Either the girls or the boy ___ playing.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Either/Or: Agree with the closest noun (boy) -> 'is'." },
    { question: "Neither the manager nor the employees ___ present.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Neither/Nor: Agree with closest (employees) -> 'are'." },
    { question: "Neither the employees nor the manager ___ present.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Neither/Nor: Agree with closest (manager) -> 'is'." },
    { question: "Each of the students ___ a book.", options: ["have", "has", "are", "were"], answer: "has", explanation: "'Each' is singular -> 'has'." },
    { question: "Everyone ___ welcome.", options: ["is", "are", "were", "have"], answer: "is", explanation: "'Everyone' is singular -> 'is'." },
    { question: "Somebody ___ knocking.", options: ["is", "are", "were", "have"], answer: "is", explanation: "'Somebody' is singular -> 'is'." },
    { question: "Nobody ___ the answer.", options: ["know", "knows", "knowing", "known"], answer: "knows", explanation: "'Nobody' is singular -> 'knows'." },
    { question: "Many a student ___ tried.", options: ["have", "has", "are", "were"], answer: "has", explanation: "'Many a' is followed by a singular noun and verb -> 'has'." },
    { question: "Bread and butter ___ my favorite breakfast.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Compound subject forming ONE idea -> singular 'is'." },
    { question: "Gold and silver ___ precious metals.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Two distinct items -> plural 'are'." },
    { question: "The teacher, along with the students, ___ coming.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Ignore phrases like 'along with'. Subject is 'teacher' (singular) -> 'is'." },
    { question: "The students, as well as the teacher, ___ coming.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Ignore 'as well as'. Subject is 'students' (plural) -> 'are'." },
    { question: "One of the boxes ___ open.", options: ["is", "are", "were", "have"], answer: "is", explanation: "'One' is the subject -> singular 'is'." },
    { question: "The only one of the students who ___ passing is John.", options: ["is", "are", "were", "have"], answer: "is", explanation: "'The only one' -> singular 'is'." },

    // 16-30: Abstract & Mass Nouns Logic
    { question: "Measles ___ dangerous.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Disease names ending in s -> singular 'is'." },
    { question: "Mumps ___ painful.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Disease names -> singular 'is'." },
    { question: "Physics ___ interesting.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Subjects ending in s -> singular 'is'." },
    { question: "Politics ___ a dirty game.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Activities ending in s -> singular 'is'." },
    { question: "The news ___ shocking.", options: ["is", "are", "were", "have"], answer: "is", explanation: "News -> singular 'is'." },
    { question: "Furniture ___ expensive.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Furniture is uncountable -> singular 'is'." },
    { question: "Luggage ___ heavy.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Luggage is uncountable -> singular 'is'." },
    { question: "Knowledge ___ power.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Abstract noun -> singular 'is'." },
    { question: "Advice ___ helpful.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Abstract noun -> singular 'is'." },
    { question: "Traffic ___ bad today.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Mass noun -> singular 'is'." },
    { question: "My hair ___ long.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Hair (on head) is uncountable -> singular 'is'." },
    { question: "Two hairs ___ in my soup.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Individual strands -> plural 'are'." },
    { question: "Paper ___ made from wood.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Material -> singular 'is'." },
    { question: "Legal papers ___ signed.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Documents -> plural 'are'." },
    { question: "Iron ___ a metal.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Material -> singular 'is'." },

    // 31-50: Advanced Singular/Plural Nuances
    { question: "The jury ___ given its verdict.", options: ["has", "have", "are", "were"], answer: "has", explanation: "Unit -> 'has'." },
    { question: "The jury ___ divided.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Individuals -> 'are'." },
    { question: "Fish ___ swimming.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Multiple fish -> 'are'." },
    { question: "There ___ many reasons.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Subject is 'reasons' (after verb) -> 'are'." },
    { question: "There ___ a reason.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Subject is 'reason' -> 'is'." },
    { question: "Here ___ the bus.", options: ["come", "comes", "coming", "came"], answer: "comes", explanation: "Subject 'bus' -> 'comes'." },
    { question: "Here ___ the buses.", options: ["come", "comes", "coming", "came"], answer: "come", explanation: "Subject 'buses' -> 'come'." },
    { question: "Three miles ___ a long way.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Distance as unit -> 'is'." },
    { question: "Fifty pesos ___ not enough.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Money as unit -> 'is'." },
    { question: "Two hours ___ passed.", options: ["has", "have", "is", "are"], answer: "has", explanation: "Time as unit -> 'has'." },
    { question: "Statistics (the subject) ___ difficult.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Field of study -> 'is'." },
    { question: "Statistics (the data) ___ misleading.", options: ["is", "are", "was", "has"], answer: "are", explanation: "Facts/Data -> 'are'." },
    { question: "A pair of shoes ___ stolen.", options: ["was", "were", "are", "have"], answer: "was", explanation: "Subject is 'pair' -> 'was'." },
    { question: "The shoes ___ stolen.", options: ["was", "were", "is", "has"], answer: "were", explanation: "Subject is 'shoes' -> 'were'." },
    { question: "My family ___ here.", options: ["is", "are", "were", "have"], answer: "is", explanation: "Unit -> 'is'." },
    { question: "The rich ___ taxes.", options: ["pay", "pays", "paying", "paid"], answer: "pay", explanation: "'The rich' = Rich people (plural) -> 'pay'." },
    { question: "The poor ___ help.", options: ["need", "needs", "needing", "needed"], answer: "need", explanation: "'The poor' = Poor people (plural) -> 'need'." },
    { question: "The blind ___ guided.", options: ["is", "are", "was", "has"], answer: "are", explanation: "'The blind' = Blind people -> 'are'." },
    { question: "The French ___ good food.", options: ["love", "loves", "loving", "loved"], answer: "love", explanation: "'The French' = French people -> 'love'." },
    { question: "The Chinese ___ diligent.", options: ["is", "are", "was", "has"], answer: "are", explanation: "'The Chinese' = Chinese people -> 'are'." }
  ]
};
