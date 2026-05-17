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
 { 
        "question": "What is the correct plural form of the irregular noun 'man'?", 
        "options": ["mans", "mens", "men", "manes"], 
        "answer": "men", 
        "explanation": "The word 'man' is an irregular Germanic noun that undergoes an internal vowel mutation (ablaut) instead of taking a regular plural suffix. The singular vowel 'a' mutates into 'e' to signify the plural form 'men'." 
    },
    { 
        "question": "Choose the grammatically accurate plural variation for the noun 'woman'.", 
        "options": ["womans", "womens", "women", "womanes"], 
        "answer": "women", 
        "explanation": "Parallel to 'man', the noun 'woman' utilizes internal stem modification for pluralization. The vowel shift alters the spelling of the final syllable to 'women', which also shifts the pronunciation of the initial syllable." 
    },
    { 
        "question": "Identify the proper plural inflection for the noun 'child'.", 
        "options": ["childs", "children", "childes", "childrens"], 
        "answer": "children", 
        "explanation": "The word 'child' forms its plural through a rare historical Germanic convention known as a 'broken plural', which appends the Germanic plural suffix '-ren' alongside an internal vowel change to yield 'children'." 
    },
    { 
        "question": "What is the correct plural form of the anatomical noun 'foot'?", 
        "options": ["foots", "feet", "feets", "futes"], 
        "answer": "feet", 
        "explanation": "'Foot' belongs to a specific class of irregular nouns that exhibit mutations in their root vowels. The double mid-vowel 'oo' systematically converts to a double high-vowel 'ee' to create the plural form 'feet'." 
    },
    { 
        "question": "Which option denotes the structurally correct plural for 'tooth'?", 
        "options": ["tooths", "teeth", "toothes", "teeths"], 
        "answer": "teeth", 
        "explanation": "The noun 'tooth' forms its plural via regressive assimilation or internal vowel mutation. The singular 'oo' sound is altered to an 'ee' sound, establishing 'teeth' as the only valid plural form without adding an '-s'." 
    },
    { 
        "question": "Select the correct plural form of the avian noun 'goose'.", 
        "options": ["gooses", "geese", "geeses", "gouse"], 
        "answer": "geese", 
        "explanation": "Following the historical patterns of linguistic mutation within English irregular count nouns, the word 'goose' shifts its primary vowel configuration from 'oo' to 'ee', giving rise to the plural term 'geese'." 
    },
    { 
        "question": "What is the proper plural translation for the rodent noun 'mouse'?", 
        "options": ["mouses", "mice", "mices", "meese"], 
        "answer": "mice", 
        "explanation": "The singular noun 'mouse' utilizes an irregular inflectional pattern involving an internal diphthong mutation. The root spelling completely shifts from '-ouse' to '-ice' to define the plural 'mice'." 
    },
    { 
        "question": "Determine the correct plural form of the livestock noun 'ox'.", 
        "options": ["oxes", "oxen", "oxs", "oxens"], 
        "answer": "oxen", 
        "explanation": "'Ox' is one of the very few surviving modern English words that retains the Old English weak plural inflection. Instead of adding an '-s' or '-es', it takes the terminal suffix '-en', rendering 'oxen'." 
    },
    { 
        "question": "What is the accurate plural form of the parasitic noun 'louse'?", 
        "options": ["louses", "lice", "licses", "louse"], 
        "answer": "lice", 
        "explanation": "Identical to the morphological paradigm observed in 'mouse/mice', the singular noun 'louse' undergoes an internal vowel and consonant shift, substituting the root to produce the plural form 'lice'." 
    },
    { 
        "question": "From a standard modern grammatical perspective, what is the accepted plural form of 'person'?", 
        "options": ["persons", "people", "peoples", "persones"], 
        "answer": "people", 
        "explanation": "While 'persons' is valid in strictly legal, statutory, and highly formal bureaucratic contexts, 'people' functions as the standard, widely accepted irregular plural equivalent of 'person' in general and academic English." 
    },
    { 
        "question": "What is the plural form of the organic noun 'leaf'?", 
        "options": ["leafs", "leaves", "leafes", "leave"], 
        "answer": "leaves", 
        "explanation": "Under the voicing rule of English plurals, many nouns that terminate in the voiceless labiodental fricative 'f' switch to a voiced labiodental fricative 'v' before adding the plural suffix '-es' (hence, 'leaves')." 
    },
    { 
        "question": "Choose the grammatically correct plural form of the wildlife noun 'wolf'.", 
        "options": ["wolfs", "wolves", "wolfes", "wolv"], 
        "answer": "wolves", 
        "explanation": "The noun 'wolf' terminates in a singular 'f'. To transform this class of nouns into a plural state, standard orthography mandates modifying the 'f' to a 'v' and subsequently attaching the sibilant suffix '-es'." 
    },
    { 
        "question": "What is the correct plural form of the utensil noun 'knife'?", 
        "options": ["knifes", "knives", "knive", "knifves"], 
        "answer": "knives", 
        "explanation": "When a singular noun ends in the voiceless sound sequence '-fe' such as 'knife', the structural rule requires changing the 'f' element into a 'v' and appending an '-es' suffix, yielding 'knives'." 
    },
    { 
        "question": "Identify the proper plural form of the marital noun 'wife'.", 
        "options": ["wifes", "wives", "wivies", "wifs"], 
        "answer": "wives", 
        "explanation": "The word 'wife' ends in '-fe'. Morphological rules dictate the conversion of the terminal fricative segment, changing the 'f' component into a 'v' followed by the addition of the standard plural marker '-es'." 
    },
    { 
        "question": "What is the correct plural form of the criminal noun 'thief'?", 
        "options": ["thiefs", "thieves", "thiefes", "thievs"], 
        "answer": "thieves", 
        "explanation": "The word 'thief' concludes with a lone 'f' preceded by a long vowel digraph. In accordance with established English phonological pluralization, the 'f' is replaced by 'v' and accompanied by '-es' to produce 'thieves'." 
    },

    // 16-30: Zero Plural (Same Form)
    { 
        "question": "What is the plural form of the agricultural noun 'sheep'?", 
        "options": ["sheeps", "sheep", "sheppes", "shoop"], 
        "answer": "sheep", 
        "explanation": "The word 'sheep' is categorized as a 'zero plural' or 'unchanged plural' noun. Due to historical Old English neuter noun structures, the singular and plural forms remain completely identical in spelling and pronunciation." 
    },
    { 
        "question": "Which option indicates the correct plural configuration for the animal noun 'deer'?", 
        "options": ["deers", "deer", "deeres", "doer"], 
        "answer": "deer", 
        "explanation": "'Deer' functions as a zero-inflection plural noun. Whether referring to a solitary organism or an entire herd, the base spelling does not accept the addition of a pluralizing suffix like '-s'." 
    },
    { 
        "question": "What is the general plural form of the aquatic noun 'fish'?", 
        "options": ["fishs", "fishes", "fish", "fishies"], 
        "answer": "fish", 
        "explanation": "In general context, 'fish' serves as a zero plural noun when referring to multiple individuals of the same type. The alternative form 'fishes' is grammatically reserved exclusively for scientific contexts denoting multiple distinct species." 
    },
    { 
        "question": "What is the plural form of the specific marine noun 'salmon'?", 
        "options": ["salmons", "salmon", "salmones", "salmen"], 
        "answer": "salmon", 
        "explanation": "Names of many game fish and edible marine life, such as 'salmon', are systematically treated as zero plurals. The word undergoes no morphological changes when transitioning from singular to plural." 
    },
    { 
        "question": "Select the correct plural convention for the predatory fish 'tuna'.", 
        "options": ["tunas", "tuna", "tunae", "tunes"], 
        "answer": "tuna", 
        "explanation": "In standard vernacular and culinary usage, 'tuna' maintains a zero plural property (e.g., 'three tuna'). While 'tunas' may appear when categorizing diverse scientific families of tuna, the collective baseline plural is unchanged." 
    },
    { 
        "question": "What is the correct plural form of the large mammal noun 'moose'?", 
        "options": ["mooses", "meese", "moose", "moos"], 
        "answer": "moose", 
        "explanation": "Unlike 'goose/geese', the word 'moose' is an loanword of Native American (Algonquian) origin and does not share the same Germanic root mutations. It operates strictly as a zero plural noun; thus, the form remains 'moose'." 
    },
    { 
        "question": "Identify the correct plural iteration of the technological noun 'aircraft'.", 
        "options": ["aircrafts", "aircraft", "aircraftes", "air-crafts"], 
        "answer": "aircraft", 
        "explanation": "Compound nouns terminating in the root word '-craft' (such as aircraft, spacecraft, or watercraft) possess an unchanging plural profile. Appending a terminal '-s' is a grammatical error." 
    },
    { 
        "question": "What is the plural form of the noun 'series'?", 
        "options": ["serieses", "series", "serie", "seri"], 
        "answer": "series", 
        "explanation": "The word 'series' is derived from Latin and is fundamentally identical in both its singular and plural numbers. The presence of the terminal 's' is part of its base morphology and not an added suffix." 
    },
    { 
        "question": "What is the proper plural form of the biological noun 'species'?", 
        "options": ["specieses", "specie", "species", "speci"], 
        "answer": "species", 
        "explanation": "The noun 'species' is a direct borrowing from Latin that functions natively as a zero plural. Dropping the 's' to form 'specie' change the meaning entirely, as 'specie' refers to coined money." 
    },
    { 
        "question": "Determine the standard plural form of the crustacean noun 'shrimp'.", 
        "options": ["shrimps", "shrimp", "shrimpes", "shramps"], 
        "answer": "shrimp", 
        "explanation": "While both formats can be found, standard collective reference to this marine animal favors the zero plural form 'shrimp' (e.g., 'a plate of shrimp'). 'Shrimps' is structurally confined to individual counts or varied species definitions." 
    },
    { 
        "question": "Evaluate the phrases below and select the grammatically flawless expression.", 
        "options": ["Two sheeps", "Two sheep", "Two sheepses", "Two ship"], 
        "answer": "Two sheep", 
        "explanation": "Because 'sheep' is a strict zero plural noun, it is grammatically restricted from receiving pluralizing suffixes. Numerical modifiers affect its quantity contextually without altering the base word." 
    },
    { 
        "question": "Which of the following sentences utilizes the correct plural adjective-noun pairing?", 
        "options": ["Many deers", "Many deer", "Many doer", "Much deer"], 
        "answer": "Many deer", 
        "explanation": "The quantitative adjective 'many' modifies plural count nouns. Since 'deer' has an unchanging plural form, 'many deer' is correct. 'Much' is incorrect because it modifies uncountable mass nouns." 
    },
    { 
        "question": "Identify the correct phrasing for a collective group of moose.", 
        "options": ["A herd of mooses", "A herd of moose", "A herd of meese", "A herd of moos"], 
        "answer": "A herd of moose", 
        "explanation": "A collective noun phrase like 'a herd of' requires a plural object noun. Since 'moose' is a zero plural term, it must retain its exact original singular format inside the prepositional phrase." 
    },
    { 
        "question": "In structural linguistics, how is the noun 'Music' definitively categorized?", 
        "options": ["Countable", "Uncountable", "Both", "Neither"], 
        "answer": "Uncountable", 
        "explanation": "'Music' is an abstract, non-count (uncountable) mass noun representing an artistic concept. It cannot be pluralized with numerals or standard plural markers unless structured through a partitive phrase like 'pieces of music'." 
    },
    { 
        "question": "How is the common workplace noun 'Furniture' classified regarding grammatical number?", 
        "options": ["Countable", "Uncountable", "Both", "Neither"], 
        "answer": "Uncountable", 
        "explanation": "'Furniture' is a non-count, collective mass noun. It is structurally incorrect to write 'furnitures' or 'three furnitures'; instead, counts must be quantified using partitive counters such as 'articles of furniture' or 'items of furniture'." 
    },

    // 31-40: Compound Nouns Pluralization
    { 
        "question": "What is the grammatically correct plural form of the hyphenated compound noun 'mother-in-law'?", 
        "options": ["mother-in-laws", "mothers-in-law", "mothers-in-laws", "mother-in-law"], 
        "answer": "mothers-in-law", 
        "explanation": "To pluralize a hyphenated compound noun containing a principal noun and a prepositional phrase, the plural suffix '-s' must be strictly appended to the principal component or head noun ('mother') which holds the core meaning." 
    },
    { 
        "question": "Choose the correct plural adaptation for the agent noun 'passer-by'.", 
        "options": ["passer-bys", "passers-by", "passers-bys", "passer-by"], 
        "answer": "passers-by", 
        "explanation": "In the compound phrase 'passer-by', 'passer' functions as the operational noun agent, while 'by' is an adverbial particle. Grammar rules mandate pluralizing the primary noun agent, resulting in 'passers-by'." 
    },
    { 
        "question": "What is the proper plural iteration for the organizational title 'editor-in-chief'?", 
        "options": ["editors-in-chief", "editor-in-chiefs", "editors-in-chiefs", "editor-in-chieves"], 
        "answer": "editors-in-chief", 
        "explanation": "The structural head of this compound title is 'editor'. The descriptive prepositional extension '-in-chief' remains static; therefore, only 'editor' receives the plural inflectional '-s'." 
    },
    { 
        "question": "Identify the correct plural form of the competitive noun 'runner-up'.", 
        "options": ["runner-ups", "runners-up", "runners-ups", "runner-up"], 
        "answer": "runners-up", 
        "explanation": "The word 'runner' is the essential noun element performing the action in this phrase, whereas 'up' is a modifying particle. Pluralizing the noun element yields the proper form 'runners-up'." 
    },
    { 
        "question": "What is the correct plural form of the measurement noun 'cupful'?", 
        "options": ["cupsful", "cupfuls", "cupsfuls", "cup-fuls"], 
        "answer": "cupfuls", 
        "explanation": "Nouns ending in the suffix '-ful' (like cupful, spoonful, or handful) are treated as consolidated single words rather than broken compounds. Consequently, the pluralizing '-s' is attached cleanly to the very end of the word ('cupfuls')." 
    },
    { 
        "question": "Select the correct plural configuration for the volume measurement 'spoonful'.", 
        "options": ["spoonsful", "spoonfuls", "spoonsfuls", "spoon-fuls"], 
        "answer": "spoonfuls", 
        "explanation": "Because 'spoonful' functions as a unified singular container-measurement term, standard morphological composition dictates that the plural marker must be placed as a terminal suffix, creating 'spoonfuls'." 
    },
    { 
        "question": "What is the correct plural form of the consolidated compound noun 'toothbrush'?", 
        "options": ["teethbrush", "toothbrushes", "teethbrushes", "toothbrushs"], 
        "answer": "toothbrushes", 
        "explanation": "For solid (unhyphenated) compound nouns, the primary plural rule dictates modifying only the final component of the word. Since the word concludes with 'brush', it takes the sibilant plural suffix to become 'toothbrushes'." 
    },
    { 
        "question": "Identify the correct plural variant for the professional noun 'fireman'.", 
        "options": ["firemans", "firemen", "firesman", "firemens"], 
        "answer": "firemen", 
        "explanation": "The terminal block of this compound noun is the irregular stem '-man'. To achieve an accurate plural state, the internal mutation rules of the base word are triggered, altering it to 'firemen'." 
    },
    { 
        "question": "What is the proper plural form of the storage unit 'bookshelf'?", 
        "options": ["bookshelfs", "bookshelves", "booksshelf", "bookshelvs"], 
        "answer": "bookshelves", 
        "explanation": "This solid compound noun concludes with 'shelf'. Following standard pluralization rules for nouns ending in an 'f' sound, the 'f' transforms into a 'v' and receives '-es', constructing 'bookshelves'." 
    },
    { 
        "question": "Choose the accurate plural form of the familial compound 'stepchild'?", 
        "options": ["stepchilds", "stepchildren", "stepschild", "stepchildes"], 
        "answer": "stepchildren", 
        "explanation": "The modifier prefix 'step-' stays invariable in compound family terms. The plural transformation is completely handled by the irregular head noun 'child', which converts into 'stepchildren'." 
    },

    // 41-50: Nouns ending in 'o'
    { 
        "question": "What is the correct plural spelling of the agricultural root crop 'potato'?", 
        "options": ["potatos", "potatoes", "potatoies", "potatose"], 
        "answer": "potatoes", 
        "explanation": "As a general linguistic rule, singular nouns that end in a consonant followed by the vowel 'o' (t + o) require the addition of the full '-es' suffix to be considered orthographically correct." 
    },
    { 
        "question": "Identify the standard plural form of the agricultural crop 'tomato'.", 
        "options": ["tomatos", "tomatoes", "tomatoies", "tomatose"], 
        "answer": "tomatoes", 
        "explanation": "The noun 'tomato' features a consonant-O ending structure (t + o). Standard written English requires adding an '-es' suffix rather than a lone '-s' to properly finalize its plural state." 
    },
    { 
        "question": "What is the correct plural representation of the iconic character noun 'hero'?", 
        "options": ["heros", "heroes", "heroies", "herose"], 
        "answer": "heroes", 
        "explanation": "The word 'hero' ends in an 'o' preceded by a consonant (r + o). It belongs to the classical category of regular nouns that mandate the implementation of the '-es' pluralizing marker." 
    },
    { 
        "question": "Which option displays the correct plural spelling of the acoustic noun 'echo'?", 
        "options": ["echos", "echoes", "echoies", "echose"], 
        "answer": "echoes", 
        "explanation": "The noun 'echo' terminates in a consonant-O configuration (h + o). To generate the valid plural noun format according to spelling principles, an '-es' must be attached." 
    },
    { 
        "question": "What is the proper plural format for the electronic device noun 'radio'?", 
        "options": ["radios", "radioes", "radioies", "radiose"], 
        "answer": "radios", 
        "explanation": "When a singular noun ends in an 'o' that is directly preceded by another vowel (i + o), the rule shifts. It strictly takes only a single terminal '-s' to establish its plural form." 
    },
    { 
        "question": "What is the correct plural form of the musical instrument noun 'piano'?", 
        "options": ["pianos", "pianoes", "pianoies", "pianose"], 
        "answer": "pianos", 
        "explanation": "Words derived from Italian musical terms or foreign loanwords ending in 'o' (such as piano, cello, or solo) serve as an exception to the consonant-O rule. They form their plural by adding only a simple '-s'." 
    },
    { 
        "question": "Select the correct plural spelling for the media graphic noun 'photo'.", 
        "options": ["photos", "photoes", "photoies", "photose"], 
        "answer": "photos", 
        "explanation": "The word 'photo' is a clipped abbreviation of the original term 'photograph'. Abbreviated or clipped words terminating in 'o' universally form their plural by appending a regular terminal '-s'." 
    },
    { 
        "question": "Determine the proper plural form of the multimedia noun 'video'.", 
        "options": ["videos", "videoes", "videoies", "videose"], 
        "answer": "videos", 
        "explanation": "The word 'video' features a vowel immediately preceding the terminal 'o' (e + o). Consistent with English spelling conventions, vowel-O combinations pluralize purely by adding a literal '-s'." 
    },
    { 
        "question": "What is the plural form of the wildlife facility noun 'zoo'?", 
        "options": ["zoos", "zooes", "zooies", "zoose"], 
        "answer": "zoos", 
        "explanation": "Nouns that terminate in a double vowel 'oo' sequence do not accept an '-es' extension. To complete its plural inflection accurately, you only append a terminal '-s'." 
    },
    { 
        "question": "Evaluate the plural options for the geological feature 'volcano' and select the most accurate judgment.", 
        "options": ["volcanos", "volcanoes", "Both A and B", "volcani"], 
        "answer": "Both A and B", 
        "explanation": "Certain English words ending in a consonant-O sequence have evolved to accept dual spelling standards. Both the regularized 'volcanos' (with an '-s') and the traditional 'volcanoes' (with an '-es') are recognized as entirely correct in dictionaries." 
    }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Foreign & Collective
  // ============================================================
  advanced: [
    // 1-15: Foreign Plurals (Latin/Greek)
    { 
        "question": "What is the grammatically accurate plural form of the Latin loanword 'datum'?", 
        "options": ["datums", "data", "datas", "date"], 
        "answer": "data", 
        "explanation": "The word 'datum' is a second-declension Latin neuter noun. In classical Latin grammatical morphology, nouns terminating in the singular suffix '-um' form their plural by substituting it with a terminal '-a', resulting in 'data'. Appending a standard English '-s' is a morphological error." 
    },
    { 
        "question": "Identify the correct plural manifestation for the evaluative noun 'criterion'.", 
        "options": ["criterions", "criteria", "criterias", "criterion"], 
        "answer": "criteria", 
        "explanation": "The noun 'criterion' is derived directly from ancient Greek. According to Greek orthographic rules preserved in English, singular nouns that end in the suffix '-on' must change their terminal marker to an '-a' in the plural form, establishing 'criteria' as the sole valid standard." 
    },
    { 
        "question": "Which of the following represents the correct plural form of 'phenomenon'?", 
        "options": ["phenomenons", "phenomena", "phenomenas", "phenomeni"], 
        "answer": "phenomena", 
        "explanation": "Parallel to the morphological profile of 'criterion', 'phenomenon' is a classical Greek loanword. To shift the word into its accurate plural state, the singular terminal '-on' is completely replaced by the plural suffix '-a', producing 'phenomena'." 
    },
    { 
        "question": "What is the proper plural configuration for the analytical noun 'analysis'?", 
        "options": ["analyses", "analysises", "analysis", "analysi"], 
        "answer": "analyses", 
        "explanation": "'Analysis' is a third-declension Greek abstract noun ending in a closed sibilant '-is'. In English grammar, loanwords belonging to this class achieve pluralization by altering the internal vowel structure, replacing the singular terminal '-is' with an '-es' suffix." 
    },
    { 
        "question": "Choose the correct plural variant of the academic noun 'thesis'.", 
        "options": ["thesises", "theses", "thesis", "thesi"], 
        "answer": "theses", 
        "explanation": "The word 'thesis' features a classical Greek inflectional pattern ending in '-is'. To establish a grammatically sound plural count, the word must undergo an internal vowel shift where the '-is' marker is replaced by the pluralizing suffix '-es'." 
    },
    { 
        "question": "What is the structurally correct plural form of the systemic noun 'crisis'?", 
        "options": ["crisises", "crises", "crisi", "cries"], 
        "answer": "crises", 
        "explanation": "Consistent with foreign structural roots of Greek origin ending in the terminal syllable '-is', the word 'crisis' forms its plural through a systematic mutation of its ending into '-es', giving rise to the formal plural 'crises'." 
    },
    { 
        "question": "Evaluate the options below and select the correct plural form for the botanical noun 'cactus'.", 
        "options": ["cactuses", "cacti", "Both A and B", "cactus"], 
        "answer": "Both A and B", 
        "explanation": "The word 'cactus' is a Latin loanword that has undergone naturalization in modern English. As a result, both the traditional Latin etymological plural 'cacti' (replacing the singular masculine '-us' with '-i') and the fully anglicized regular plural 'cactuses' (adding '-es') are recognized as valid." 
    },
    { 
        "question": "Determine the accepted plural designation for the biological organism 'fungus'.", 
        "options": ["funguses", "fungi", "Both A and B", "fungu"], 
        "answer": "Both A and B", 
        "explanation": "Due to overlapping linguistic standards in modern English, 'fungus' exhibits dual plural capabilities. The classical Latin morphological transformation shifts '-us' to '-i' to yield 'fungi', while modern anglicized standards permit 'funguses'. Both are grammatically correct." 
    },
    { 
        "question": "What is the precise plural form of the scientific noun 'nucleus'?", 
        "options": ["nucleuses", "nuclei", "nucleis", "nuclear"], 
        "answer": "nuclei", 
        "explanation": "'Nucleus' is a second-declension Latin masculine noun. In rigorous scientific, technical, and academic writing, it strictly retains its etymological pluralization rule, which requires dropping the singular suffix '-us' and replacing it with the terminal vowel '-i'." 
    },
    { 
        "question": "Identify the proper plural inflection for the psychological or physiological noun 'stimulus'.", 
        "options": ["stimuluses", "stimuli", "stimulis", "stimul"], 
        "answer": "stimuli", 
        "explanation": "Derived from classical Latin morphology, singular words ending in a masculine '-us' suffix are pluralized by converting the root termination to an '-i'. This changes 'stimulus' to 'stimuli', which is the required standard in formal English syntax." 
    },
    { 
        "question": "What is the correct plural form when referencing a group of male graduates ('alumnus')?", 
        "options": ["alumni", "alumnae", "alumnuses", "alumnas"], 
        "answer": "alumni", 
        "explanation": "'Alumnus' is a masculine singular Latin noun. To signify a plural group composed entirely of males or a mixed-gender assembly of graduates, Latin grammatical concord demands substituting the masculine '-us' with the plural suffix '-i', forming 'alumni'." 
    },
    { 
        "question": "What is the proper plural form when specifically referencing a group of female graduates ('alumna')?", 
        "options": ["alumni", "alumnae", "alumnas", "alumnus"], 
        "answer": "alumnae", 
        "explanation": "'Alumna' is a first-declension feminine singular Latin noun. Under classical gender-inflected rules preserved in English, a plural assembly composed strictly of females requires changing the singular ending '-a' to the diphthong suffix '-ae' ('alumnae')." 
    },
    { 
        "question": "Select the correct plural counterpart for the microbiological noun 'bacterium'.", 
        "options": ["bacteriums", "bacteria", "bacterias", "bacteri"], 
        "answer": "bacteria", 
        "explanation": "The word 'bacterium' is classified as a neuter Latin noun ending in the singular marker '-um'. Formal English grammar mandates dropping the '-um' suffix and replacing it with a terminal '-a' to formulate the correct collective plural 'bacteria'." 
    },
    { 
        "question": "What is the standard plural form of the communication-channel noun 'medium'?", 
        "options": ["mediums", "media", "medias", "medi"], 
        "answer": "media", 
        "explanation": "When used in the context of mass communication, data preservation, or artistic avenues, the Latin noun 'medium' forms its plural through classical inflections by changing the terminal '-um' to '-a' ('media'). 'Mediums' is restricted to spiritualists or psychics." 
    },
    { 
        "question": "Analyze the choices below and determine the correct plural representation for the noun 'index'.", 
        "options": ["indexes", "indices", "Both A and B", "index"], 
        "answer": "Both A and B", 
        "explanation": "The pluralization of 'index' depends on contextual semantics. The standard anglicized form 'indexes' is preferred when referencing alphabetical lists in literature, whereas the classical Latin plural 'indices' (changing '-ex' to '-ices') is mandatory in mathematical, financial, and statistical fields." 
    },

    // 16-30: Subject-Verb Agreement (Collective Nouns)
    { 
        "question": "The athletic team ________ winning the championship game with ease.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "Collective nouns ('team') trigger singular verb agreement when the group acts collectively as a single, unified corporate entity. Because the sentence frames the team performing one synchronized action, the singular copula 'is' is required." 
    },
    { 
        "question": "The disgruntled team ________ arguing among themselves regarding the strategy.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "Under the principle of Notional Agreement, if the members of a collective noun ('team') are acting as separate individuals or are in a state of internal division, the noun takes a plural verb ('are') and a plural reflexive pronoun ('themselves')." 
    },
    { 
        "question": "The executive committee ________ reached a unanimous decision on the annual budget.", 
        "options": ["has", "have", "are", "were"], 
        "answer": "has", 
        "explanation": "The modifier 'unanimous' indicates complete cohesion within the collective body ('committee'). Since the group is operating as a single unit, the singular present-perfect auxiliary verb 'has' must be utilized." 
    },
    { 
        "question": "The administrative staff ________ currently assembled in a formal meeting.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "In this structural layout, 'the staff' functions as a singular collective unit engaged in a single institutional event. Consequently, it must govern the singular present-tense linking verb 'is'." 
    },
    { 
        "question": "The research staff ________ working on their respective individual projects.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The inclusion of the distributive possessive adjective 'their' and the plural noun phrase 'respective individual projects' indicates that the staff members are acting independently. This distinct individuality forces a plural verb ('are')." 
    },
    { 
        "question": "The appreciative audience ________ clapping enthusiastically at the performance.", 
        "options": ["was", "were", "is", "has"], 
        "answer": "was", 
        "explanation": "'Audience' is a collective noun. Because the sentence depicts the entire crowd acting as a single mass body in past-tense progression, it links with the singular past-continuous auxiliary verb 'was'." 
    },
    { 
        "question": "The immediate family ________ eating dinner at the dining table.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "The collective family unit is performing a single shared action concurrently. Standard American and academic English syntax dictates treating this domestic collective unit with a singular verb format ('is')." 
    },
    { 
        "question": "The judicial jury ________ already given its official verdict to the judge.", 
        "options": ["has", "have", "are", "were"], 
        "answer": "has", 
        "explanation": "The choice of the singular-neuter possessive pronoun 'its' proves that the collective body 'jury' is behaving as a single legal entity. It therefore commands the singular helping verb 'has' to maintain internal clause agreement." 
    },
    { 
        "question": "The selected jury ________ severely divided in their opinions regarding the evidence.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The predicate adjective 'divided' and the plural pronoun 'their' indicate internal conflict and fragmentation among the individual members of the jury. This context triggers notional pluralization, requiring the plural verb 'are'." 
    },
    { 
        "question": "The massive crowd ________ shouting slogans outside the parliament building.", 
        "options": ["was", "were", "are", "have"], 
        "answer": "was", 
        "explanation": "The noun 'crowd' represents an undivided, single congregational mass in this context. To ensure syntactic harmony in a past-progressive continuous layout, the singular helper verb 'was' must be inserted." 
    },
    { 
        "question": "A pack of wolves ________ rapidly approaching the livestock perimeter.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "In a construction featuring a collective phrase ('A pack of wolves'), the true grammatical head of the subject phrase is the singular noun 'pack', not the plural object 'wolves' inside the prepositional modifier. A singular head noun requires the singular verb 'is'." 
    },
    { 
        "question": "A fresh bunch of grapes ________ left resting on the kitchen counter.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "The structural subject is defined by the singular noun container 'bunch'. The plural noun 'grapes' is merely an object of the prepositional phrase 'of grapes' and does not influence the number of the main verb 'is'." 
    },
    { 
        "question": "A large herd of cattle ________ currently grazing peacefully in the valley.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "The operative subject governing the sentence is the singular collective quantifier 'herd'. Despite being followed by the plural-only asset 'cattle', the grammatical number remains singular, requiring 'is'." 
    },
    { 
        "question": "The local police ________ investigating the fraudulent transaction at the agency.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "Unlike standard collective nouns, the word 'police' is a unique collective asset categorized as a 'nominal plural' or *plurale tantum*. It possesses no singular form and must *always* be accompanied by a plural verb form ('are')." 
    },
    { 
        "question": "Domesticated cattle ________ raised extensively across the northern plains.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "Similar to 'police', the livestock noun 'cattle' is inherently and structurally plural in English grammar. It cannot be paired with singular verbs; it requires the plural passive linking verb 'are'." 
    },

    // 31-40: Subject-Verb Agreement (Quantifiers & Fractions)
    { 
        "question": "Exactly half of the strawberry pie ________ consumed within minutes.", 
        "options": ["was", "were", "are", "have"], 
        "answer": "was", 
        "explanation": "With fractions, percentages, and indefinite quantifiers, the verb agreement is not determined by the fraction itself, but by the object of the prepositional phrase that follows it. Since 'pie' is singular, the verb must be singular ('was')." 
    },
    { 
        "question": "Exactly half of the baked pies ________ distributed to the community centers.", 
        "options": ["was", "were", "is", "has"], 
        "answer": "were", 
        "explanation": "Following the rule of fractional modifiers, the verb adjusts to the noun inside the prepositional phrase ('of the baked pies'). Because 'pies' is a plural count noun, it forces the selection of the plural verb 'were'." 
    },
    { 
        "question": "Some of the organic milk ________ spilled onto the clean floor.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "The quantifier 'some' modifies the mass noun 'milk'. Because mass nouns are inherently uncountable and treated as singular entities, they require a singular present-tense linking verb ('is')." 
    },
    { 
        "question": "Some of the qualified students ________ late for the civil service seminar.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "When 'some of' acts as a modifier for a plural count noun ('students'), the sentence framework recognizes a plural quantity, thereby demanding the implementation of the plural verb 'are'." 
    },
    { 
        "question": "All of the wedding cake ________ completely gone before the reception ended.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "The absolute quantifier 'all' relies on the target noun to establish grammatical number. Because 'cake' is presented here as a singular entity, the sentence commands the singular linking verb 'is'." 
    },
    { 
        "question": "All of the chocolate cookies ________ gone from the storage jar.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "Since 'all' modifies 'cookies', which is a plural count noun, the subject expression assumes a plural identity. This requires a matching plural verb 'are' to achieve syntax correctness." 
    },
    { 
        "question": "A large number of students ________ reported absent due to inclement weather.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The idiomatic phrase 'A number of' functions grammatically as an indefinite plural quantifier meaning 'several' or 'many'. It universally requires a plural count noun and dictates a plural verb ('are')." 
    },
    { 
        "question": "The total number of absent students ________ steadily increasing this semester.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "In contrast to 'a number of', the specific phrase 'The number of' isolates a single mathematical unit or statistical sum. The literal head of the sentence is the singular word 'The number', which mandates a singular verb ('is')." 
    },
    { 
        "question": "Ten thousand dollars ________ considered a substantial amount for an initial investment.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "When expressions of money, time, velocity, or distance are stated as a collective measurement or a lump sum, they are treated as a singular abstract concept. Therefore, they govern a singular verb ('is')." 
    },
    { 
        "question": "Five continuous years ________ a long duration to wait for a promotional appointment.", 
        "options": ["is", "are", "were", "have"], 
        "answer": "is", 
        "explanation": "Although 'five years' contains a plural quantitative descriptor, units of time are conceptualized as a single unified block or period of duration, which commands the use of the singular linking verb 'is'." 
    },

    // 41-50: Plural-Only Nouns
    { 
        "question": "The medical scissors ________ kept inside the sterilization room.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The tool noun 'scissors' is classified as a *plurale tantum*—a noun that exists exclusively in a plural form because it is composed of two symmetrical operational halves. It inherently demands a plural verb ('are') unless preceded by the singular counter phrase 'a pair of'." 
    },
    { 
        "question": "My prescription glasses ________ accidentally broken during the field exercise.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "Because 'glasses' refers to a two-lens garment, it is structurally plural. In the absence of the limiting singular phrase 'a pair of', it remains plural and dictates the use of the plural passive verb 'are'." 
    },
    { 
        "question": "His formal uniform pants ________ torn at the seam during the inspection.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "Articles of clothing that cover the lower extremities via two distinct leg chambers (e.g., pants, trousers, jeans) are plural-only nouns. They must always couple with plural verbs ('are')." 
    },
    { 
        "question": "The tactical binoculars ________ highly helpful for the surveillance team.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The word 'binoculars' denotes an instrument with dual structural optical tubes. It functions natively as a plural count asset and automatically triggers a plural verb structure ('are')." 
    },
    { 
        "question": "Her personal belongings ________ carefully packed inside the relocation vehicle.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "'Belongings' is a mass plural noun that lacks a singular counter-form in standard English. It is contextually and syntactically plural, requiring the plural verb 'are'." 
    },
    { 
        "question": "The commercial goods ________ safely delivered to the regional warehouse.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "When used to define physical merchandise or commodities, the noun 'goods' functions exclusively in the plural number. It cannot link with singular verbs like 'is' or 'was'; it commands 'are'." 
    },
    { 
        "question": "My athletic shorts ________ still dirty from the outdoor marathon.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The word 'shorts' belongs to the twin-legged apparel category of plural-only nouns. To maintain precise syntactic alignment under English rules, a plural verb ('are') is required." 
    },
    { 
        "question": "The surgical tweezers ________ too small to handle the delicate circuit components.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "'Tweezers' functions as an instrument consisting of two connected prongs. Like all items in this morphological class, it is fundamentally plural and commands the plural copula verb 'are'." 
    },
    { 
        "question": "The iron pliers ________ rusty due to prolonged exposure to high humidity.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "As a tool consisting of two interlocking handles, the noun 'pliers' is inherently plural in form and function. It requires a plural present-tense adjective link, which is 'are'." 
    },
    { 
        "question": "Special thanks ________ due to the director for facilitating the emergency funding.", 
        "options": ["is", "are", "was", "has"], 
        "answer": "are", 
        "explanation": "The expressive noun 'thanks' is a *plurale tantum* that possesses no singular structural baseline. In formal public notices and sentences, it must always be paired with a plural verb structure ('are')." 
    }
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

