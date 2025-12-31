const GRAMMATICAL_NUMBER_QUESTIONS = {
  /* =========================
     BEGINNER (50)
     Focus: basic plurals + basic SVA
     ========================= */
  beginner: [
    // 1–10 Regular plurals (-s)
    { question: "What is the plural of 'cat'?", choices: ["cates", "cats", "catss", "catties"], correctIndex: 1, explanation: "Regular nouns form plurals by adding 's'." },
    { question: "What is the plural of 'book'?", choices: ["bookes", "books", "bookies", "book"], correctIndex: 1, explanation: "Add 's' to make it plural." },
    { question: "What is the plural of 'dog'?", choices: ["dogs", "doges", "doggies", "doggs"], correctIndex: 0, explanation: "Dog → dogs." },
    { question: "What is the plural of 'apple'?", choices: ["apples", "applies", "applees", "appless"], correctIndex: 0, explanation: "Apple → apples." },
    { question: "What is the plural of 'car'?", choices: ["carrs", "cares", "cars", "caries"], correctIndex: 2, explanation: "Car → cars." },
    { question: "What is the plural of 'tree'?", choices: ["trees", "treeses", "trese", "treies"], correctIndex: 0, explanation: "Tree → trees." },
    { question: "What is the plural of 'cup'?", choices: ["cupes", "cups", "cupps", "cupies"], correctIndex: 1, explanation: "Cup → cups." },
    { question: "What is the plural of 'chair'?", choices: ["chairs", "chairss", "chaires", "chairies"], correctIndex: 0, explanation: "Chair → chairs." },
    { question: "What is the plural of 'pencil'?", choices: ["penciles", "pencils", "pencill", "pencillies"], correctIndex: 1, explanation: "Pencil → pencils." },
    { question: "What is the plural of 'desk'?", choices: ["desks", "deskes", "deskies", "deskses"], correctIndex: 0, explanation: "Desk → desks." },

    // 11–20 -es plurals (s, x, z, ch, sh)
    { question: "What is the plural of 'box'?", choices: ["boxs", "boxes", "boxies", "boxses"], correctIndex: 1, explanation: "Words ending in x add '-es'." },
    { question: "What is the plural of 'bus'?", choices: ["buss", "buses", "busies", "buse"], correctIndex: 1, explanation: "Words ending in s add '-es'." },
    { question: "What is the plural of 'watch'?", choices: ["watchs", "watches", "watchies", "watch"], correctIndex: 1, explanation: "Words ending in ch add '-es'." },
    { question: "What is the plural of 'dish'?", choices: ["dishs", "dishes", "dishies", "dishess"], correctIndex: 1, explanation: "Words ending in sh add '-es'." },
    { question: "What is the plural of 'glass'?", choices: ["glass", "glases", "glasses", "glassies"], correctIndex: 2, explanation: "Words ending in ss add '-es'." },
    { question: "What is the plural of 'church'?", choices: ["churchs", "churches", "churchies", "chirches"], correctIndex: 1, explanation: "Church → churches." },
    { question: "What is the plural of 'brush'?", choices: ["brushs", "brushes", "brushies", "brushse"], correctIndex: 1, explanation: "Brush → brushes." },
    { question: "What is the plural of 'class'?", choices: ["classes", "classs", "classies", "clases"], correctIndex: 0, explanation: "Class → classes." },
    { question: "What is the plural of 'fox'?", choices: ["foxs", "foxes", "foxies", "foxen"], correctIndex: 1, explanation: "Fox → foxes." },
    { question: "What is the plural of 'quiz'?", choices: ["quizes", "quizzes", "quizs", "quizies"], correctIndex: 1, explanation: "Quiz → quizzes." },

    // 21–30 -y plurals
    { question: "What is the plural of 'baby'?", choices: ["babys", "babies", "babyes", "babbies"], correctIndex: 1, explanation: "Consonant + y → change y to i + es." },
    { question: "What is the plural of 'city'?", choices: ["citys", "cities", "cityes", "citties"], correctIndex: 1, explanation: "City → cities." },
    { question: "What is the plural of 'lady'?", choices: ["ladys", "ladies", "ladyes", "ladees"], correctIndex: 1, explanation: "Lady → ladies." },
    { question: "What is the plural of 'party'?", choices: ["partys", "parties", "partyes", "partees"], correctIndex: 1, explanation: "Party → parties." },
    { question: "What is the plural of 'story'?", choices: ["storys", "stories", "storyes", "storeys"], correctIndex: 1, explanation: "Story → stories." },
    { question: "What is the plural of 'boy'?", choices: ["boies", "boys", "boyes", "bois"], correctIndex: 1, explanation: "Vowel + y → add 's'." },
    { question: "What is the plural of 'toy'?", choices: ["toys", "toies", "toyes", "toyies"], correctIndex: 0, explanation: "Toy → toys." },
    { question: "What is the plural of 'key'?", choices: ["kies", "keys", "keyes", "keies"], correctIndex: 1, explanation: "Key → keys." },
    { question: "What is the plural of 'day'?", choices: ["daies", "days", "dayes", "dais"], correctIndex: 1, explanation: "Day → days." },
    { question: "What is the plural of 'monkey'?", choices: ["monkies", "monkeys", "monkeyes", "monkeis"], correctIndex: 1, explanation: "Monkey → monkeys." },

    // 31–40 Identify singular/plural
    { question: "Which word is singular?", choices: ["cats", "dog", "birds", "ants"], correctIndex: 1, explanation: "Dog is one." },
    { question: "Which word is plural?", choices: ["apple", "banana", "grapes", "melon"], correctIndex: 2, explanation: "Grapes means more than one." },
    { question: "Identify the plural noun.", choices: ["Teacher", "Student", "Schools", "Class"], correctIndex: 2, explanation: "Schools is plural." },
    { question: "Identify the singular noun.", choices: ["Desks", "Chair", "Pencils", "Erasers"], correctIndex: 1, explanation: "Chair is singular." },
    { question: "Which is NOT plural?", choices: ["Mice", "Teeth", "Foot", "Geese"], correctIndex: 2, explanation: "Foot is singular." },
    { question: "Which is NOT singular?", choices: ["Man", "Women", "Child", "Tooth"], correctIndex: 1, explanation: "Women is plural." },
    { question: "Choose the plural word.", choices: ["Leaf", "Leaves", "Life", "Loaf"], correctIndex: 1, explanation: "Leaves is plural." },
    { question: "Choose the singular word.", choices: ["Knives", "Wives", "Life", "Shelves"], correctIndex: 2, explanation: "Life is singular." },
    { question: "Is 'water' singular or plural?", choices: ["Singular (uncountable)", "Plural", "Both", "Neither"], correctIndex: 0, explanation: "Water is uncountable and treated as singular." },
    { question: "Is 'information' singular or plural?", choices: ["Singular (uncountable)", "Plural", "Both", "Neither"], correctIndex: 0, explanation: "Information is uncountable → singular." },

    // 41–50 Basic subject–verb agreement
    { question: "The cat ___ sleeping.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Singular subject → is." },
    { question: "The dogs ___ barking.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Plural subject → are." },
    { question: "He ___ to school every day.", choices: ["walk", "walks", "walking", "walked"], correctIndex: 1, explanation: "He (singular) takes -s." },
    { question: "They ___ to school every day.", choices: ["walk", "walks", "walking", "walked"], correctIndex: 0, explanation: "They (plural) use base verb." },
    { question: "The book ___ on the table.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Book is singular → is." },
    { question: "The pens ___ blue.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Pens plural → are." },
    { question: "She ___ happy.", choices: ["are", "is", "were", "be"], correctIndex: 1, explanation: "She (singular) → is." },
    { question: "We ___ ready.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "We (plural) → are." },
    { question: "I ___ tired.", choices: ["is", "are", "am", "be"], correctIndex: 2, explanation: "I takes 'am'." },
    { question: "The students ___ in class.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Students plural → are." }
  ],

  /* =========================
     INTERMEDIATE (50)
     Focus: irregular/zero plural, -f/-fe, compound nouns, -o, basic collective
     ========================= */
  intermediate: [
    // 1–10 Irregular plurals
    { question: "What is the plural of 'man'?", choices: ["mans", "mens", "men", "manes"], correctIndex: 2, explanation: "Man → men." },
    { question: "What is the plural of 'woman'?", choices: ["womans", "womens", "women", "womanes"], correctIndex: 2, explanation: "Woman → women." },
    { question: "What is the plural of 'child'?", choices: ["childs", "children", "childes", "childrens"], correctIndex: 1, explanation: "Child → children." },
    { question: "What is the plural of 'foot'?", choices: ["foots", "feet", "feets", "futes"], correctIndex: 1, explanation: "Foot → feet." },
    { question: "What is the plural of 'tooth'?", choices: ["tooths", "teeth", "toothes", "teeths"], correctIndex: 1, explanation: "Tooth → teeth." },
    { question: "What is the plural of 'goose'?", choices: ["gooses", "geese", "geeses", "gouse"], correctIndex: 1, explanation: "Goose → geese." },
    { question: "What is the plural of 'mouse'?", choices: ["mouses", "mice", "mices", "meese"], correctIndex: 1, explanation: "Mouse → mice." },
    { question: "What is the plural of 'ox'?", choices: ["oxes", "oxen", "oxs", "oxens"], correctIndex: 1, explanation: "Ox → oxen." },
    { question: "What is the plural of 'louse'?", choices: ["louses", "lice", "licses", "louse"], correctIndex: 1, explanation: "Louse → lice." },
    { question: "What is the plural of 'person' (common)?", choices: ["persons", "people", "peoples", "persones"], correctIndex: 1, explanation: "Common plural is 'people'." },

    // 11–20 -f/-fe → -ves (common cases)
    { question: "What is the plural of 'leaf'?", choices: ["leafs", "leaves", "leafes", "leave"], correctIndex: 1, explanation: "Leaf → leaves." },
    { question: "What is the plural of 'wolf'?", choices: ["wolfs", "wolves", "wolfes", "wolv"], correctIndex: 1, explanation: "Wolf → wolves." },
    { question: "What is the plural of 'knife'?", choices: ["knifes", "knives", "knive", "knifves"], correctIndex: 1, explanation: "Knife → knives." },
    { question: "What is the plural of 'wife'?", choices: ["wifes", "wives", "wivies", "wifs"], correctIndex: 1, explanation: "Wife → wives." },
    { question: "What is the plural of 'thief'?", choices: ["thiefs", "thieves", "thiefes", "thievs"], correctIndex: 1, explanation: "Thief → thieves." },
    { question: "What is the plural of 'shelf'?", choices: ["shelfs", "shelves", "shelvies", "shelfes"], correctIndex: 1, explanation: "Shelf → shelves." },
    { question: "What is the plural of 'life'?", choices: ["lifes", "lives", "lifees", "livies"], correctIndex: 1, explanation: "Life → lives." },
    { question: "What is the plural of 'half'?", choices: ["halfs", "halves", "halfes", "halvies"], correctIndex: 1, explanation: "Half → halves." },
    { question: "What is the plural of 'calf'?", choices: ["calfs", "calves", "calfes", "calvies"], correctIndex: 1, explanation: "Calf → calves." },
    { question: "What is the plural of 'loaf'?", choices: ["loafs", "loaves", "loafes", "lovies"], correctIndex: 1, explanation: "Loaf → loaves." },

    // 21–30 Zero plural / same form
    { question: "What is the plural of 'sheep'?", choices: ["sheeps", "sheep", "sheppes", "shoop"], correctIndex: 1, explanation: "Sheep stays the same." },
    { question: "What is the plural of 'deer'?", choices: ["deers", "deer", "deeres", "doer"], correctIndex: 1, explanation: "Deer stays the same." },
    { question: "What is the plural of 'fish' (general number)?", choices: ["fishs", "fishes", "fish", "fishies"], correctIndex: 2, explanation: "Fish often stays the same." },
    { question: "What is the plural of 'salmon'?", choices: ["salmons", "salmon", "salmones", "salmen"], correctIndex: 1, explanation: "Salmon stays the same." },
    { question: "What is the plural of 'tuna' (food)?", choices: ["tunas", "tuna", "tunae", "tunes"], correctIndex: 1, explanation: "Tuna often stays the same in food context." },
    { question: "What is the plural of 'moose'?", choices: ["mooses", "meese", "moose", "moos"], correctIndex: 2, explanation: "Moose stays the same." },
    { question: "What is the plural of 'aircraft'?", choices: ["aircrafts", "aircraft", "aircraftes", "air-crafts"], correctIndex: 1, explanation: "Aircraft stays the same." },
    { question: "What is the plural of 'series'?", choices: ["serieses", "series", "serie", "seri"], correctIndex: 1, explanation: "Series is same in singular and plural." },
    { question: "What is the plural of 'species'?", choices: ["specieses", "specie", "species", "speci"], correctIndex: 2, explanation: "Species stays the same." },
    { question: "What is the plural of 'shrimp' (common use)?", choices: ["shrimps", "shrimp", "shrimpes", "shramps"], correctIndex: 1, explanation: "Shrimp is often used as a zero plural." },

    // 31–40 Compound nouns
    { question: "What is the plural of 'mother-in-law'?", choices: ["mother-in-laws", "mothers-in-law", "mothers-in-laws", "mother-in-law"], correctIndex: 1, explanation: "Pluralize the main noun: mothers-in-law." },
    { question: "What is the plural of 'passer-by'?", choices: ["passer-bys", "passers-by", "passers-bys", "passer-by"], correctIndex: 1, explanation: "Passer is pluralized: passers-by." },
    { question: "What is the plural of 'editor-in-chief'?", choices: ["editors-in-chief", "editor-in-chiefs", "editors-in-chiefs", "editor-in-chieves"], correctIndex: 0, explanation: "Editors-in-chief is correct." },
    { question: "What is the plural of 'runner-up'?", choices: ["runner-ups", "runners-up", "runners-ups", "runner-up"], correctIndex: 1, explanation: "Runners-up is correct." },
    { question: "What is the plural of 'cupful'?", choices: ["cupsful", "cupfuls", "cupsfuls", "cup-fuls"], correctIndex: 1, explanation: "Common plural: cupfuls." },
    { question: "What is the plural of 'spoonful'?", choices: ["spoonsful", "spoonfuls", "spoonsfuls", "spoon-fuls"], correctIndex: 1, explanation: "Spoonfuls is common plural." },
    { question: "What is the plural of 'stepchild'?", choices: ["stepchilds", "stepchildren", "stepschild", "stepchildes"], correctIndex: 1, explanation: "Child → children." },
    { question: "What is the plural of 'fireman'?", choices: ["firemans", "firemen", "firesman", "firemens"], correctIndex: 1, explanation: "Man → men." },
    { question: "What is the plural of 'toothbrush'?", choices: ["teethbrush", "toothbrushes", "teethbrushes", "toothbrushs"], correctIndex: 1, explanation: "Pluralize the end: toothbrushes." },
    { question: "What is the plural of 'bookshelf'?", choices: ["bookshelfs", "bookshelves", "booksshelf", "bookshelvs"], correctIndex: 1, explanation: "Shelf → shelves." },

    // 41–50 Nouns ending in -o (common school rules)
    { question: "What is the plural of 'potato'?", choices: ["potatos", "potatoes", "potatoies", "potatose"], correctIndex: 1, explanation: "Potato → potatoes." },
    { question: "What is the plural of 'tomato'?", choices: ["tomatos", "tomatoes", "tomatoies", "tomatose"], correctIndex: 1, explanation: "Tomato → tomatoes." },
    { question: "What is the plural of 'hero'?", choices: ["heros", "heroes", "heroies", "herose"], correctIndex: 1, explanation: "Hero → heroes." },
    { question: "What is the plural of 'echo'?", choices: ["echos", "echoes", "echoies", "echose"], correctIndex: 1, explanation: "Echo → echoes." },
    { question: "What is the plural of 'radio'?", choices: ["radios", "radioes", "radioies", "radiose"], correctIndex: 0, explanation: "Radio → radios (common exception)." },
    { question: "What is the plural of 'piano'?", choices: ["pianos", "pianoes", "pianoies", "pianose"], correctIndex: 0, explanation: "Piano → pianos." },
    { question: "What is the plural of 'photo'?", choices: ["photos", "photoes", "photoies", "photose"], correctIndex: 0, explanation: "Photo → photos." },
    { question: "What is the plural of 'video'?", choices: ["videos", "videoes", "videoies", "videose"], correctIndex: 0, explanation: "Video → videos." },
    { question: "What is the plural of 'zoo'?", choices: ["zoos", "zooes", "zooies", "zoose"], correctIndex: 0, explanation: "Zoo → zoos." },
    { question: "What is the plural of 'volcano' (common)?", choices: ["volcanos", "volcanoes", "Both A and B", "volcani"], correctIndex: 1, explanation: "Common classroom answer: volcanoes." }
  ],

  /* =========================
     ADVANCED (50)
     Focus: foreign plurals + collective nouns + quantifiers + plural-only
     ========================= */
  advanced: [
    // 1–15 Foreign plurals (Latin/Greek)
    { question: "What is the plural of 'datum'?", choices: ["datums", "data", "datas", "date"], correctIndex: 1, explanation: "Datum → data." },
    { question: "What is the plural of 'criterion'?", choices: ["criterions", "criteria", "criterias", "criterion"], correctIndex: 1, explanation: "Criterion → criteria." },
    { question: "What is the plural of 'phenomenon'?", choices: ["phenomenons", "phenomena", "phenomenas", "phenomeni"], correctIndex: 1, explanation: "Phenomenon → phenomena." },
    { question: "What is the plural of 'analysis'?", choices: ["analyses", "analysises", "analysis", "analysi"], correctIndex: 0, explanation: "Analysis → analyses." },
    { question: "What is the plural of 'thesis'?", choices: ["thesises", "theses", "thesis", "thesi"], correctIndex: 1, explanation: "Thesis → theses." },
    { question: "What is the plural of 'crisis'?", choices: ["crisises", "crises", "crisi", "cries"], correctIndex: 1, explanation: "Crisis → crises." },
    { question: "What is the plural of 'bacterium'?", choices: ["bacteriums", "bacteria", "bacterias", "bacteri"], correctIndex: 1, explanation: "Bacterium → bacteria." },
    { question: "What is the plural of 'medium'?", choices: ["mediums", "media", "medias", "medi"], correctIndex: 1, explanation: "Medium → media." },
    { question: "What is the plural of 'index' (math/science)?", choices: ["indexes", "indices", "indexs", "indexies"], correctIndex: 1, explanation: "Index → indices (common in math/science)." },
    { question: "What is the plural of 'nucleus'?", choices: ["nucleuses", "nuclei", "nucleis", "nuclear"], correctIndex: 1, explanation: "Nucleus → nuclei." },
    { question: "What is the plural of 'stimulus'?", choices: ["stimuluses", "stimuli", "stimulis", "stimul"], correctIndex: 1, explanation: "Stimulus → stimuli." },
    { question: "What is the plural of 'alumnus'?", choices: ["alumni", "alumnae", "alumnuses", "alumnas"], correctIndex: 0, explanation: "Alumnus → alumni." },
    { question: "What is the plural of 'alumna'?", choices: ["alumni", "alumnae", "alumnas", "alumnus"], correctIndex: 1, explanation: "Alumna → alumnae." },
    { question: "What is the plural of 'appendix'?", choices: ["appendixes", "appendices", "Both A and B", "appendixs"], correctIndex: 2, explanation: "Appendixes and appendices are accepted." },
    { question: "What is the plural of 'cactus'?", choices: ["cactuses", "cacti", "Both A and B", "cactus"], correctIndex: 2, explanation: "Cacti and cactuses are accepted." },

    // 16–30 Collective nouns (unit vs individuals)
    { question: "The team ___ winning the game.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Team as one unit → is." },
    { question: "The team ___ arguing among themselves.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Members acting separately → are." },
    { question: "The committee ___ reached a decision.", choices: ["has", "have", "are", "were"], correctIndex: 0, explanation: "Committee as a unit → has." },
    { question: "The committee ___ divided in their opinions.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Divided members → are." },
    { question: "The audience ___ clapping loudly.", choices: ["was", "were", "are", "have"], correctIndex: 0, explanation: "Audience as a unit → was." },
    { question: "The family ___ having dinner.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Family as a unit → is." },
    { question: "The family ___ disagreeing about the plan.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Individuals disagreeing → are." },
    { question: "A pack of wolves ___ approaching.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Subject is 'pack' (singular) → is." },
    { question: "A herd of cattle ___ grazing.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Subject is 'herd' → is." },
    { question: "A bunch of grapes ___ on the table.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Subject is 'bunch' → is." },
    { question: "The jury ___ given its verdict.", choices: ["has", "have", "are", "were"], correctIndex: 0, explanation: "Jury as a unit → has." },
    { question: "The jury ___ divided in their opinions.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Divided members → are." },
    { question: "The staff ___ in a meeting.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "As one group → is." },
    { question: "The staff ___ working on separate tasks.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Separate actions → are." },
    { question: "The crowd ___ cheering.", choices: ["was", "were", "are", "have"], correctIndex: 0, explanation: "Crowd as a unit → was." },

    // 31–40 Quantifiers/fractions
    { question: "Some of the milk ___ spilled.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Milk is uncountable → is." },
    { question: "Some of the students ___ late.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Students plural → are." },
    { question: "All of the cake ___ gone.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Cake (mass noun) → is." },
    { question: "All of the cookies ___ gone.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Cookies plural → are." },
    { question: "Half of the pie ___ eaten.", choices: ["was", "were", "are", "have"], correctIndex: 0, explanation: "Pie singular → was." },
    { question: "Half of the pies ___ eaten.", choices: ["was", "were", "is", "has"], correctIndex: 1, explanation: "Pies plural → were." },
    { question: "A number of students ___ absent.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "'A number of' → plural verb." },
    { question: "The number of students ___ increasing.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "'The number of' → singular verb." },
    { question: "Ten dollars ___ enough for lunch.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Money as a unit → is." },
    { question: "Five years ___ a long time.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Time as a unit → is." },

    // 41–50 Plural-only nouns
    { question: "The scissors ___ sharp.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Scissors is plural → are." },
    { question: "My glasses ___ broken.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Glasses (eyewear) is plural → are." },
    { question: "His pants ___ torn.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Pants is plural → are." },
    { question: "The binoculars ___ helpful.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Binoculars is plural → are." },
    { question: "Her belongings ___ packed.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Belongings is plural → are." },
    { question: "The goods ___ delivered.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Goods is plural → are." },
    { question: "My shorts ___ dirty.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Shorts is plural → are." },
    { question: "The tweezers ___ small.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Tweezers is plural → are." },
    { question: "The pliers ___ rusty.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Pliers is plural → are." },
    { question: "These trousers ___ too long.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Trousers is plural → are." }
  ],

  /* =========================
     EXPERT (50)
     Focus: proximity, indefinite, mass vs count, inversion, special 's' nouns
     ========================= */
  expert: [
    // 1–15 Proximity (either/or, neither/nor)
    { question: "Either the boy or the girls ___ playing.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Verb agrees with the nearer subject (girls)." },
    { question: "Either the girls or the boy ___ playing.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Verb agrees with the nearer subject (boy)." },
    { question: "Neither the manager nor the employees ___ present.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Nearest subject 'employees' → are." },
    { question: "Neither the employees nor the manager ___ present.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Nearest subject 'manager' → is." },
    { question: "Not only the teachers but also the student ___ responsible.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Nearest subject 'student' → is." },
    { question: "Not only the student but also the teachers ___ responsible.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Nearest subject 'teachers' → are." },
    { question: "Either my sister or my brothers ___ going.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Nearest subject 'brothers' → are." },
    { question: "Either my brothers or my sister ___ going.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Nearest subject 'sister' → is." },
    { question: "Neither the dogs nor the cat ___ hungry.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Nearest subject 'cat' → is." },
    { question: "Neither the cat nor the dogs ___ hungry.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Nearest subject 'dogs' → are." },
    { question: "Either the coach or the players ___ late.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Nearest subject 'players' → are." },
    { question: "Either the players or the coach ___ late.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Nearest subject 'coach' → is." },
    { question: "Neither the teacher nor the students ___ ready.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Nearest subject 'students' → are." },
    { question: "Neither the students nor the teacher ___ ready.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Nearest subject 'teacher' → is." },
    { question: "Either the manager or the assistants ___ available.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Nearest subject 'assistants' → are." },

    // 16–25 Indefinite pronouns (always singular)
    { question: "Each of the students ___ a book.", choices: ["have", "has", "are", "were"], correctIndex: 1, explanation: "'Each' is singular → has." },
    { question: "Everyone ___ welcome.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Everyone is singular → is." },
    { question: "Somebody ___ knocking.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Somebody is singular → is." },
    { question: "Nobody ___ the answer.", choices: ["know", "knows", "knowing", "known"], correctIndex: 1, explanation: "Nobody is singular → knows." },
    { question: "Anyone ___ join the club.", choices: ["can", "canes", "cans", "canned"], correctIndex: 0, explanation: "Anyone pairs with singular verb form: can." },
    { question: "Someone ___ left a bag here.", choices: ["have", "has", "are", "were"], correctIndex: 1, explanation: "Someone is singular → has." },
    { question: "Everybody ___ excited.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Everybody is singular → is." },
    { question: "Each student ___ a seat.", choices: ["have", "has", "are", "were"], correctIndex: 1, explanation: "Each is singular → has." },
    { question: "Every one of the boys ___ present.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Every one is singular → is." },
    { question: "Many a student ___ tried.", choices: ["have", "has", "are", "were"], correctIndex: 1, explanation: "'Many a' takes singular verb → has." },

    // 26–35 Special nouns ending in -s (singular)
    { question: "Mathematics ___ my favorite subject.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Subject name ending in -s is singular." },
    { question: "Physics ___ difficult for some students.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Physics (subject) → is." },
    { question: "Economics ___ taught in senior high school.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Economics (subject) → is." },
    { question: "Politics ___ sometimes controversial.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Politics (activity/field) → is." },
    { question: "The news ___ surprising.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "News is treated as singular → is." },
    { question: "Measles ___ dangerous.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Disease names ending in -s are singular." },
    { question: "Mumps ___ painful.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Mumps is singular." },
    { question: "Rickets ___ a disease.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Rickets is singular." },
    { question: "Billiards ___ a game.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Billiards (game) → is." },
    { question: "The Philippines ___ an archipelago.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Country name is singular → is." },

    // 36–50 Mass vs count + inversion + units + “the + adjective”
    { question: "Furniture ___ expensive.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Furniture is uncountable → is." },
    { question: "Luggage ___ heavy.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Luggage is uncountable → is." },
    { question: "My hair ___ long.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Hair (mass) → is." },
    { question: "Two hairs ___ on the floor.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Hairs = individual strands → are." },
    { question: "There ___ many reasons.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Verb agrees with 'reasons' → are." },
    { question: "There ___ a reason.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Verb agrees with 'reason' → is." },
    { question: "Here ___ the bus.", choices: ["come", "comes", "coming", "came"], correctIndex: 1, explanation: "Bus (singular) → comes." },
    { question: "Here ___ the buses.", choices: ["come", "comes", "coming", "came"], correctIndex: 0, explanation: "Buses (plural) → come." },
    { question: "Five kilometers ___ a long distance.", choices: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Distance as a unit → is." },
    { question: "Two hours ___ passed.", choices: ["has", "have", "is", "are"], correctIndex: 0, explanation: "Time as a unit → has." },
    { question: "The rich ___ taxes.", choices: ["pay", "pays", "paying", "paid"], correctIndex: 0, explanation: "'The rich' = rich people (plural) → pay." },
    { question: "The poor ___ help.", choices: ["need", "needs", "needing", "needed"], correctIndex: 0, explanation: "'The poor' = poor people (plural) → need." },
    { question: "The police ___ here.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Police is always plural → are." },
    { question: "Cattle ___ grazing.", choices: ["is", "are", "was", "has"], correctIndex: 1, explanation: "Cattle is plural → are." },
    { question: "A pair of shoes ___ missing.", choices: ["was", "were", "are", "have"], correctIndex: 0, explanation: "Pair (singular) → was." }
  ]
};
