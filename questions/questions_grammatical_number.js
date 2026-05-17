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
   { 
        "question": "What is the plural form of the regular noun 'cat'?", 
        "options": ["cates", "cats", "catss", "catties"], 
        "answer": "cats", 
        "explanation": "In English grammar, the standard rule for converting most regular count nouns from singular to plural is simply adding the suffix '-s' to the base form of the word." 
    },
    { 
        "question": "Identify the correct plural inflection for the noun 'book' from the options below.", 
        "options": ["bookes", "books", "bookies", "book"], 
        "answer": "books", 
        "explanation": "The word 'book' is a regular distinctive count noun. It strictly adheres to the primary morphological rule of pluralization, which requires only the addition of the literal suffix '-s'." 
    },
    { 
        "question": "Which of the following is the grammatically correct plural form of 'dog'?", 
        "options": ["dogs", "doges", "doggies", "doggs"], 
        "answer": "dogs", 
        "explanation": "To establish subject-noun pluralization for standard regular entities such as 'dog', the base word is kept intact while appending a terminal '-s'." 
    },
    { 
        "question": "What is the correct plural form of the word 'apple'?", 
        "options": ["apples", "applies", "applees", "appless"], 
        "answer": "apples", 
        "explanation": "When a regular noun already ends in a silent or terminal 'e' like 'apple', the plural form is achieved mechanically by attaching a single '-s' at the very end of the word." 
    },
    { 
        "question": "Choose the correct plural representation of the vehicle noun 'car'.", 
        "options": ["carrs", "cares", "cars", "caries"], 
        "answer": "cars", 
        "explanation": "The word 'car' is a standard singular noun. It does not possess an irregular stem change, meaning it transforms into a plural form solely through the addition of a final '-s'." 
    },
    { 
        "question": "What is the plural form of the botanical noun 'tree'?", 
        "options": ["trees", "treeses", "trese", "treies"], 
        "answer": "trees", 
        "explanation": "Nouns that terminate in a double vowel like '-ee' follow the absolute standard parameter of pluralization, which dictates adding a lone terminal '-s' without dropping any existing letters." 
    },
    { 
        "question": "Which of the following correctly denotes more than one 'table'?", 
        "options": ["tabless", "tables", "tablies", "tabels"], 
        "answer": "tables", 
        "explanation": "The noun 'table' is a regular concrete object ending in 'e'. Its grammatical plural configuration requires nothing more than appending the letter '-s'." 
    },
    { 
        "question": "Select the correct plural counterpart for the noun 'girl'.", 
        "options": ["girles", "girls", "girlys", "girless"], 
        "answer": "girls", 
        "explanation": "'Girl' functions as a basic regular count noun. To express a plural quantity of this subject, standard English orthography mandates adding the suffix '-s'." 
    },
    { 
        "question": "What is the proper plural form of the writing instrument 'pencil'?", 
        "options": ["penciles", "pencill", "pencils", "pencillies"], 
        "answer": "pencils", 
        "explanation": "The noun 'pencil' is classified as a regular singular noun ending in a consonant. It forms its plural strictly by adding the terminal letter '-s' without doubling the final consonant." 
    },
    { 
        "question": "Determine the correct plural configuration for the common noun 'cup'.", 
        "options": ["cupes", "cups", "cupps", "cupies"], 
        "answer": "cups", 
        "explanation": "As a standard monosyllabic regular noun, 'cup' follows the basic morphological rule where a plural state is designated by appending an '-s' to the base form." 
    },

    // 11-20: Plurals ending in -es
    { 
        "question": "What is the plural form of the container noun 'box'?", 
        "options": ["boxs", "boxes", "boxies", "boxses"], 
        "answer": "boxes", 
        "explanation": "Under English orthographic rules, nouns that end in the sibilant sounds/letters 'x', 's', 'z', 'ch', or 'sh' must take the suffix '-es' to facilitate natural pronunciation when pluralized." 
    },
    { 
        "question": "Which option represents the correct plural spelling of the mass transit vehicle 'bus'?", 
        "options": ["buss", "buses", "busies", "buse"], 
        "answer": "buses", 
        "explanation": "The singular noun 'bus' finishes with a sibilant 's'. Words terminating in a single 's' require the implementation of an '-es' suffix to preserve phonetical and structural clarity in their plural state." 
    },
    { 
        "question": "What is the accurate plural form of the timekeeping instrument 'watch'?", 
        "options": ["watchs", "watches", "watchies", "watch"], 
        "answer": "watches", 
        "explanation": "The word 'watch' ends with the digraph 'ch', producing a sibilant sound. Grammatical guidelines dictate that an '-es' must be appended to nouns with this ending to create a distinct plural syllable." 
    },
    { 
        "question": "Identify the proper plural manifestation of the tool noun 'brush'.", 
        "options": ["brushs", "brushes", "brushies", "brushse"], 
        "answer": "brushes", 
        "explanation": "Because the noun 'brush' concludes with the phonetical digraph 'sh', it belongs to the class of words that demand an '-es' suffix rather than a lone '-s' to establish a valid plural form." 
    },
    { 
        "question": "What is the correct plural form of the transparent container 'glass'?", 
        "options": ["glass", "glases", "glasses", "glassies"], 
        "answer": "glasses", 
        "explanation": "When a singular noun terminates in a double 's' ('-ss'), appending a third 's' is syntactically invalid. Instead, the suffix '-es' is integrated to distinctly formulate the plural noun." 
    },
    { 
        "question": "Choose the grammatically correct plural representation of the wildlife animal 'fox'.", 
        "options": ["foxs", "foxes", "foxies", "foxen"], 
        "answer": "foxes", 
        "explanation": "Singular nouns ending in the variable letter 'x' produce a sharp sibilant sound. To ensure proper syllabic structure in a plural context, the '-es' suffix must be consistently applied." 
    },
    { 
        "question": "What is the appropriate plural form for the tableware noun 'dish'?", 
        "options": ["dishs", "dishes", "dishies", "dishess"], 
        "answer": "dishes", 
        "explanation": "The base word 'dish' features a terminal 'sh' ending. Morphological parameters necessitate that words with this specific phoneme add '-es' to form their respective plurals." 
    },
    { 
        "question": "Which of the following is the correct pluralized form of the architectural noun 'church'?", 
        "options": ["churchs", "churches", "churchies", "chirches"], 
        "answer": "churches", 
        "explanation": "The word 'church' ends with a sibilant 'ch' channelling. To construct the plural form accurately and preserve phonetic cadence, the '-es' morphological extension is mandatory." 
    },
    { 
        "question": "Select the proper spelling for the plural form of the apparel item 'dress'.", 
        "options": ["dreses", "dresses", "dresss", "dressies"], 
        "answer": "dresses", 
        "explanation": "The noun 'dress' contains a terminal geminate consonant pattern ('-ss'). The established linguistic protocol requires adding '-es' to cleanly transition the word into its plural state." 
    },
    { 
        "question": "What is the plural form of the educational group noun 'class'?", 
        "options": ["classes", "classs", "classies", "clases"], 
        "answer": "classes", 
        "explanation": "Nouns ending in an explicit '-ss' sequence require the auxiliary vowel-consonant suffix '-es' to legally generate a plural count format in written English." 
    },

    // 21-30: Plurals ending in -y
    { 
        "question": "What is the correct plural form of the infant noun 'baby'?", 
        "options": ["babys", "babies", "babyes", "babeys"], 
        "answer": "babies", 
        "explanation": "When a singular count noun ends in a consonant followed by a 'y' (b + y), the grammatical standard dictates dropping the terminal 'y', replacing it with an 'i', and then adding the suffix '-es'." 
    },
    { 
        "question": "Which option demonstrates the correct plural format for the urban noun 'city'?", 
        "options": ["citys", "cities", "cityes", "citties"], 
        "answer": "cities", 
        "explanation": "The structure of 'city' features a consonant-vowel layout ending in a consonant plus 'y' (t + y). Pluralizing this configuration demands converting the 'y' to an 'i' prior to appending '-es'." 
    },
    { 
        "question": "What is the correct plural transformation for the common noun 'boy'?", 
        "options": ["boies", "boys", "boyes", "boyies"], 
        "answer": "boys", 
        "explanation": "If a singular noun finishes with a vowel directly preceding a 'y' (o + y), the structural change rule does not apply. Instead, you simply append a regular terminal '-s' to retain morphological validity." 
    },
    { 
        "question": "Identify the proper plural spelling of the plaything noun 'toy'.", 
        "options": ["toys", "toies", "toyes", "toyies"], 
        "answer": "toys", 
        "explanation": "The noun 'toy' contains a preceding vowel anchor before its terminal letter (o + y). Consequently, the standard procedure is to add a literal '-s' to manifest its plural form." 
    },
    { 
        "question": "What is the correct plural counterpart for the formal noun 'lady'?", 
        "options": ["ladys", "ladies", "ladyes", "ladees"], 
        "answer": "ladies", 
        "explanation": "The lexical structure of 'lady' establishes a consonant followed by a terminal 'y' (d + y). Grammatical protocol commands substituting the 'y' with an 'i' and reinforcing it with an '-es' suffix." 
    },
    { 
        "question": "Which of the following is the accurate plural representation of the event noun 'party'?", 
        "options": ["partys", "parties", "partyes", "partees"], 
        "answer": "parties", 
        "explanation": "Because 'party' yields a consonant plus 'y' terminal layout (t + y), spelling conventions require changing the 'y' into an 'i' and adding '-es' to successfully create the plural noun." 
    },
    { 
        "question": "What is the correct plural form of the opening instrument 'key'?", 
        "options": ["kies", "keys", "keyes", "keies"], 
        "answer": "keys", 
        "explanation": "The word 'key' concludes with a explicit vowel-consonant layout where a vowel directly leads into a 'y' (e + y). In this specific scenario, the word requires only a terminal '-s' to achieve pluralization." 
    },
    { 
        "question": "Choose the correct plural form for the temporal unit noun 'day'.", 
        "options": ["daies", "days", "dayes", "dais"], 
        "answer": "days", 
        "explanation": "The noun 'day' contains a vowel right before the ending 'y' (a + y). Standard syntax states that vowel-to-y pairings do not undergo stem modification; they merely take a closing '-s'." 
    },
    { 
        "question": "What is the plural form of the insect noun 'fly'?", 
        "options": ["flys", "flies", "flyes", "flyies"], 
        "answer": "flies", 
        "explanation": "The monosyllabic noun 'fly' ends in a consonant-y relationship (l + y). To adjust this word to signify a plural quantity, the 'y' is eliminated in favor of an 'ies' clustering." 
    },
    { 
        "question": "Determine the proper plural structure of the animal noun 'monkey'.", 
        "options": ["monkies", "monkeys", "monkeyes", "monkies"], 
        "answer": "monkeys", 
        "explanation": "The terminal configuration of 'monkey' shows a vowel preceding the letter 'y' (e + y). Thus, it adheres strictly to the regular format where you only apply an '-s' suffix at the baseline." 
    },

    // 31-40: Singular vs Plural Recognition
    { 
        "question": "In the context of grammatical number, which of the following words is strictly singular?", 
        "options": ["cats", "dog", "birds", "ants"], 
        "answer": "dog", 
        "explanation": "The noun 'dog' lacks any plural inflectional suffixes or markers, meaning it represents a singular baseline entity. All other choices possess the standard pluralizing '-s' suffix." 
    },
    { 
        "question": "Which of the provided options represents a plural entity?", 
        "options": ["apple", "banana", "grapes", "melon"], 
        "answer": "grapes", 
        "explanation": "The lexical item 'grapes' features the terminal plural indicator '-s', signifying multiple units of the fruit. The other choices exist purely in their singular base forms." 
    },
    { 
        "question": "Analyze the selections and isolate the specific word that functions as a plural noun.", 
        "options": ["Teacher", "Student", "Schools", "Class"], 
        "answer": "Schools", 
        "explanation": "'Schools' is the lone option altered by a plural inflectional suffix. 'Teacher' and 'Student' are individual common nouns, while 'Class' is a singular collective noun." 
    },
    { 
        "question": "Identify the word below that is distinctly categorized as a singular noun.", 
        "options": ["Desks", "Chair", "Pencils", "Erasers"], 
        "answer": "Chair", 
        "explanation": "'Chair' is a singular count noun representing exactly one physical seat. 'Desks', 'Pencils', and 'Erasers' are clearly pluralized through their distinct trailing '-s' markers." 
    },
    { 
        "question": "Which of the following irregular or regular options is NOT plural in meaning?", 
        "options": ["Mice", "Teeth", "Foot", "Geese"], 
        "answer": "Foot", 
        "explanation": "'Foot' is a singular anatomical noun. It is an irregular noun that uses mutation (internal vowel change) to form its plural counterpart, which is 'feet'. 'Mice', 'Teeth', and 'Geese' are already pluralized stems." 
    },
    { 
        "question": "Evaluate the words below and determine which option is NOT a singular noun.", 
        "options": ["Man", "Women", "Child", "Tooth"], 
        "answer": "Women", 
        "explanation": "'Women' is an irregular plural noun representing multiple adult females (singular: 'woman'). 'Man', 'Child', and 'Tooth' are entirely singular baseline lexical items." 
    },
    { 
        "question": "Select the word that represents a correct pluralization involving a stem alteration.", 
        "options": ["Leaf", "Leaves", "Life", "Loaf"], 
        "answer": "Leaves", 
        "explanation": "The word 'leaves' is the correct plural form of the singular noun 'leaf'. Nouns ending in an '-f' or '-fe' sound typically convert the 'f' to a 'v' before adding the mandatory plural suffix '-es'." 
    },
    { 
        "question": "Which of the following choices represents a singular noun form?", 
        "options": ["Knives", "Wives", "Life", "Shelves"], 
        "answer": "Life", 
        "explanation": "'Life' is a singular noun. Its plural alternative is 'lives'. The options 'knives', 'wives', and 'shelves' are already in their processed plural states where the original 'f/fe' was dropped for 'ves'." 
    },
    { 
        "question": "From a technical grammatical standpoint, how is the noun 'Information' categorized?", 
        "options": ["Singular (Uncountable)", "Plural", "Both", "Neither"], 
        "answer": "Singular (Uncountable)", 
        "explanation": "'Information' is classified as an abstract non-count (uncountable) mass noun. Uncountable nouns do not possess a standard plural form and are strictly treated with singular structural properties and verbs." 
    },
    { 
        "question": "Determine the proper noun classification for the element 'Water'.", 
        "options": ["Singular (Uncountable)", "Plural", "Both", "Neither"], 
        "answer": "Singular (Uncountable)", 
        "explanation": "'Water' is a concrete material mass noun. Because it cannot be broken down into individual separate units to be counted, it is inherently uncountable and follows singular syntax." 
    },

    // 41-50: Basic Subject-Verb Agreement
    { 
        "question": "The cat ________ sleeping soundly on the couch.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "According to the fundamental rules of Subject-Verb Agreement, a singular subject ('the cat') must link with a singular present-tense helping verb ('is'). 'Are' and 'were' are reserved for plural subjects." 
    },
    { 
        "question": "The dogs ________ barking at the strangers outside the gate.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The subject 'the dogs' is explicitly plural as denoted by its ending. Therefore, it requires a plural present-tense auxiliary verb ('are') to ensure standard syntactical concordance." 
    },
    { 
        "question": "She ________ a highly dedicated public servant in her municipality.", 
        "options": ["are", "is", "were", "be"], 
        "answer": "is", 
        "explanation": "The word 'She' functions as a third-person singular personal pronoun. It dictates the utilization of the singular form of the linking verb 'to be', which is 'is' in the present tense." 
    },
    { 
        "question": "They ________ lifelong friends who met during the university freshman orientation.", 
        "options": ["is", "are", "was", "am"], 
        "answer": "are", 
        "explanation": "The pronoun 'They' represents a third-person plural subject entity. To satisfy basic grammar constraints, it must align with the plural auxiliary or linking verb 'are'." 
    },
    { 
        "question": "The reference book ________ left open on the main study table.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "The subject of the sentence is 'the book', which is singular. It requires a corresponding singular verb ('is') to properly complete the passive state-of-being construction." 
    },
    { 
        "question": "The blue ink pens ________ kept inside the drawer for safekeeping.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The operational head noun in the subject phrase is the plural entity 'pens'. Plural head nouns require a matching plural verb formulation ('are') to remain structurally sound." 
    },
    { 
        "question": "My older brother ________ remarkably tall compared to the rest of the family.", 
        "options": ["are", "is", "were", "have"], 
        "answer": "is", 
        "explanation": "The familial subject 'brother' denotes a single individual. Under the core guidelines of sentence construction, singular subjects are strictly bound to singular verbs like 'is'." 
    },
    { 
        "question": "We ________ extremely happy to announce the official release of the exam results.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The personal pronoun 'We' functions as a first-person plural subject. In present-tense declarations, it requires the plural copula linking verb 'are' to achieve grammatical harmony." 
    },
    { 
        "question": "He ________ to school every morning to save on transport allowances.", 
        "options": ["walk", "walks", "walking", "walked"], 
        "answer": "walks", 
        "explanation": "In the simple present tense, singular third-person subjects ('He', 'She', 'It') necessitate that the main action verb carries an '-s' or '-es' inflectional suffix (hence, 'walks')." 
    },
    { 
        "question": "They ________ to school together as a routine form of physical exercise.", 
        "options": ["walk", "walks", "walking", "walked"], 
        "answer": "walk", 
        "explanation": "When executing a sentence in the simple present tense with a plural subject ('They'), the operational rule dictates using the base or uninflected form of the verb ('walk') without any trailing sibilant sounds." 
    }
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
    { question: "What is the plural of 'tuna'?", options: ["tunas", "tuna", "tunae", "tunes"], answer: "tuna", explanation: "In general use, 'tuna' is a zero plural (one tuna, two tuna). 'Tunas' can be used for kinds of tuna." },
    { question: "What is the plural of 'moose'?", options: ["mooses", "meese", "moose", "moos"], answer: "moose", explanation: "Moose stays the same." },
    { question: "What is the plural of 'aircraft'?", options: ["aircrafts", "aircraft", "aircraftes", "air-crafts"], answer: "aircraft", explanation: "Aircraft stays the same." },
    { question: "What is the plural of 'series'?", options: ["serieses", "series", "serie", "seri"], answer: "series", explanation: "Series is the same in singular and plural." },
    { question: "What is the plural of 'species'?", options: ["specieses", "specie", "species", "speci"], answer: "species", explanation: "Species is the same in singular and plural." },
    { question: "What is the plural of 'shrimp'?", options: ["shrimps", "shrimp", "shrimpes", "shramps"], answer: "shrimp", explanation: "'Shrimp' is commonly a zero plural (one shrimp, two shrimp). 'Shrimps' is sometimes used for different species." },
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
    { question: "Two hours ___ passed.", options: ["has", "have", "is", "are"], answer: "have", explanation: "Subject 'hours' is plural here, so we say 'Two hours have passed.'." },
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

