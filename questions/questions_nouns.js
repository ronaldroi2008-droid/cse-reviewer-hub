// questions/nouns.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data for "nouns"
window.VERBAL_QUESTION_BANK["nouns"] = {

  beginner: [
    // 1-10: Identifying Nouns (Person / Professionals / Roles)
    { 
        "question": "The ________ presided over the annual conference and addressed the stockholders' concerns.", 
        "options": ["executive", "executes", "executively", "executed"], 
        "answer": "executive", 
        "explanation": "The sentence requires a noun that refers to a person acting as the subject. 'Executive' is the correct noun form." 
    },
    { 
        "question": "In the sentence 'The diligent inspector reviewed the documents,' which word is a noun that refers to a person?", 
        "options": ["diligent", "inspector", "reviewed", "documents"], 
        "answer": "inspector", 
        "explanation": "'Inspector' is a concrete noun referring to a person, and it functions as the subject performing the action in the sentence." 
    },
    { 
        "question": "Which word in the following sentence functions as a noun representing a person? 'The local physician administered the vaccine.'", 
        "options": ["local", "administered", "vaccine", "physician"], 
        "answer": "physician", 
        "explanation": "'Physician' is a noun that means a medical doctor, which represents a person." 
    },
    { 
        "question": "The ________ submitted the financial report to the board of directors yesterday.", 
        "options": ["accountant", "accounting", "accountable", "account"], 
        "answer": "accountant", 
        "explanation": "'Accountant' is the correct noun denoting a professional person who performs the action of submitting." 
    },
    { 
        "question": "During the trial, the ________ presented a compelling argument to defend the client.", 
        "options": ["lawyer", "law", "lawful", "legally"], 
        "answer": "lawyer", 
        "explanation": "'Lawyer' is a noun that represents a person or profession. The other options are a baseline noun, an adjective, and an adverb." 
    },
    { 
        "question": "Which noun refers to a person in this sentence? 'A passionate educator inspires students to achieve their dreams.'", 
        "options": ["passionate", "educator", "inspires", "dreams"], 
        "answer": "educator", 
        "explanation": "'Educator' (teacher) is the noun in the sentence that represents a person." 
    },
    { 
        "question": "The Chief of Staff assigned a new ________ to handle the administrative tasks.", 
        "options": ["assistant", "assist", "assistance", "assisted"], 
        "answer": "assistant", 
        "explanation": "'Assistant' is a noun referring to a person. 'Assistance' is also a noun, but it refers to the abstract concept of help." 
    },
    { 
        "question": "In a democratic country, every ________ has the right to cast a vote during the elections.", 
        "options": ["citizen", "citizenship", "civic", "civilly"], 
        "answer": "citizen", 
        "explanation": "'Citizen' is a concrete noun representing an individual person, fitting the context of casting a vote." 
    },
    { 
        "question": "The ________ carefully directed the motorists away from the construction site.", 
        "options": ["officer", "official", "officially", "officiate"], 
        "answer": "officer", 
        "explanation": "'Officer' refers to the specific person/authority directing traffic. 'Official' is typically an adjective or an abstract designation." 
    },
    { 
        "question": "Which word in this sentence is a noun that refers to a person? 'The prominent scientist received an award for her research.'", 
        "options": ["prominent", "scientist", "award", "research"], 
        "answer": "scientist", 
        "explanation": "'Scientist' is a noun that refers to a person. 'Award' and 'research' are nouns for things/concepts, and 'prominent' is an adjective." 
    },

    // 11-20: Identifying Nouns (Place / Institutions / Venues)
    { 
        "question": "The international summit will be held at the newly constructed ________.", 
        "options": ["convention", "convene", "auditorium", "auditory"], 
        "answer": "auditorium", 
        "explanation": "'Auditorium' is a concrete noun that represents a physical venue or place." 
    },
    { 
        "question": "Applicants are advised to submit their credentials directly to the main ________.", 
        "options": ["office", "officially", "officiate", "officious"], 
        "answer": "office", 
        "explanation": "'Office' is a noun that refers to a specific physical location or place of business." 
    },
    { 
        "question": "Which word functions as a place noun in this sentence? 'The pristine beach attracted thousands of tourists last summer.'", 
        "options": ["pristine", "beach", "tourists", "summer"], 
        "answer": "beach", 
        "explanation": "'Beach' is a common noun that designates a geographical location or place." 
    },
    { 
        "question": "The newly built ________ offers a wide variety of books and digital archives for researchers.", 
        "options": ["library", "librarian", "literary", "liberate"], 
        "answer": "library", 
        "explanation": "'Library' is a noun representing a place, whereas 'librarian' refers to the person managing it." 
    },
    { 
        "question": "Public officials are expected to maintain order within their respective ________.", 
        "options": ["govern", "governmental", "municipality", "municipally"], 
        "answer": "municipality", 
        "explanation": "'Municipality' is a noun that refers to a distinct administrative district or place." 
    },
    { 
        "question": "The heavy downpour caused severe flooding in the metropolitan ________.", 
        "options": ["area", "aerial", "arise", "around"], 
        "answer": "area", 
        "explanation": "'Area' functions as a noun used to describe a particular geographical region, space, or place." 
    },
    { 
        "question": "Which word functions as a place noun in this sentence? 'The historical museum houses artifacts from the pre-colonial era.'", 
        "options": ["historical", "museum", "artifacts", "pre-colonial"], 
        "answer": "museum", 
        "explanation": "'Museum' is a noun that designates a specific building or location (place)." 
    },
    { 
        "question": "The delegation arrived safely at the international ________ for the cross-border conference.", 
        "options": ["airport", "airplane", "airborne", "airline"], 
        "answer": "airport", 
        "explanation": "'Airport' is the correct noun indicating a location or place. 'Airplane' is a thing, and 'airline' is an organization." 
    },
    { 
        "question": "Due to the state of emergency, citizens were advised to stay inside their ________.", 
        "options": ["reside", "residential", "residence", "resident"], 
        "answer": "residence", 
        "explanation": "'Residence' is a noun that means a dwelling or place of living. 'Resident' refers to the person." 
    },
    { 
        "question": "The dynamic team conducted their field study in a remote ________ in the north.", 
        "options": ["province", "provincial", "provincially", "provoke"], 
        "answer": "province", 
        "explanation": "'Province' is a geographical and political noun that denotes a specific territory or place." 
    },

    // 21-30: Identifying Nouns (Thing / Objects / Equipment)
    { 
        "question": "The technician replaced the broken ________ to restore the system's functionality.", 
        "options": ["component", "componental", "compose", "compositely"], 
        "answer": "component", 
        "explanation": "'Component' is a concrete noun that refers to a part or a physical object (thing)." 
    },
    { 
        "question": "Please ensure that your government-issued ________ is valid before booking the flight.", 
        "options": ["passport", "pass", "passage", "passenger"], 
        "answer": "passport", 
        "explanation": "'Passport' is a concrete noun representing a physical document or object required for travel." 
    },
    { 
        "question": "Which word functions as a noun for a thing? 'The automated vehicle successfully navigated the obstacle course.'", 
        "options": ["automated", "vehicle", "successfully", "navigated"], 
        "answer": "vehicle", 
        "explanation": "'Vehicle' is a common noun that represents a physical object or mechanical thing." 
    },
    { 
        "question": "The laboratory is equipped with state-of-the-art ________ for scientific experiments.", 
        "options": ["apparatus", "apparel", "apparent", "apparently"], 
        "answer": "apparatus", 
        "explanation": "'Apparatus' is a technical noun that refers to tools, machinery, or equipment (things)." 
    },
    { 
        "question": "He lost the official ________ containing the confidential receipts of the transaction.", 
        "options": ["document", "documentary", "documenting", "documented"], 
        "answer": "document", 
        "explanation": "'Document' is the correct noun form used to denote a physical record or piece of paper." 
    },
    { 
        "question": "The company purchased new office ________ to upgrade the workspace ergonomics.", 
        "options": ["furniture", "furnish", "furnished", "furnishing"], 
        "answer": "furniture", 
        "explanation": "'Furniture' is a collective mass noun representing physical objects like desks and chairs." 
    },
    { 
        "question": "Identify the noun representing an object: 'She carefully packed the fragile vase into the box.'", 
        "options": ["carefully", "fragile", "vase", "packed"], 
        "answer": "vase", 
        "explanation": "'Vase' is a concrete noun that refers to a specific physical object." 
    },
    { 
        "question": "The security guard inspected the contents of the suspicious ________ at the entrance.", 
        "options": ["package", "pack", "packaging", "packed"], 
        "answer": "package", 
        "explanation": "'Package' is a noun that represents a physical item or parcel (thing)." 
    },
    { 
        "question": "The printer ran out of ________ midway through the printing of the civil service reviewers.", 
        "options": ["ink", "inky", "inked", "inking"], 
        "answer": "ink", 
        "explanation": "'Ink' is a concrete material noun that refers to a physical substance." 
    },
    { 
        "question": "The committee utilized a digital ________ to record the votes accurately.", 
        "options": ["device", "devise", "devising", "devised"], 
        "answer": "device", 
        "explanation": "'Device' is a noun meaning a mechanical or electronic tool. 'Devise' is a verb meaning to plan or invent." 
    },

    // 31-40: Identifying Nouns (Abstract / Ideas / Concepts)
    { 
        "question": "________ is essential in public service to maintain the trust of the citizenry.", 
        "options": ["Integrity", "Honest", "Faithfully", "Transparent"], 
        "answer": "Integrity", 
        "explanation": "'Integrity' is an abstract noun that refers to a quality or concept, serving as the subject of the sentence." 
    },
    { 
        "question": "The agency gained recognition due to the extreme ________ of its personnel.", 
        "options": ["efficiency", "efficient", "efficiently", "efficacious"], 
        "answer": "efficiency", 
        "explanation": "'Efficiency' is the abstract noun form representing a quality. The other choices are adjectives or adverbs." 
    },
    { 
        "question": "Which abstract noun represents a quality of being brave? 'The soldiers showed immense ________ during the rescue operation.'", 
        "options": ["bravely", "brave", "bravery", "bravest"], 
        "answer": "bravery", 
        "explanation": "'Bravery' is the abstract noun form that refers to the quality of courage. 'Brave' is an adjective." 
    },
    { 
        "question": "The Constitution guarantees ________ of speech for all citizens.", 
        "options": ["free", "freedom", "freely", "freed"], 
        "answer": "freedom", 
        "explanation": "'Freedom' is an abstract noun that denotes a state of liberty, right, or concept." 
    },
    { 
        "question": "We must strive for ________ in the workplace by treating everyone fairly.", 
        "options": ["equality", "equal", "equally", "equalize"], 
        "answer": "equality", 
        "explanation": "'Equality' is an abstract noun denoting a fair state or concept. 'Equal' is an adjective, and 'equalize' is a verb." 
    },
    { 
        "question": "Identify the abstract noun in this choice selection: 'The judge made the decision based solely on justice and truth.'", 
        "options": ["judge", "decision", "justice", "solely"], 
        "answer": "justice", 
        "explanation": "While 'judge' and 'decision' are also nouns, 'justice' is a pure abstract noun representing an idea or moral concept." 
    },
    { 
        "question": "The leader's ________ inspired the entire community to participate in the project.", 
        "options": ["visionary", "vision", "visible", "visually"], 
        "answer": "vision", 
        "explanation": "'Vision' functions as an abstract noun meaning a foresight or concept. 'Visionary' is typically an adjective or a person noun." 
    },
    { 
        "question": "Working under extreme ________ can lead to errors and decreased productivity.", 
        "options": ["stressful", "stress", "stressed", "stressing"], 
        "answer": "stress", 
        "explanation": "'Stress' is used here as an abstract noun referring to a psychological or physical condition." 
    },
    { 
        "question": "Her ________ in solving complex mathematical problems amazed the evaluators.", 
        "options": ["brilliant", "brilliantly", "brilliance", "brilliantness"], 
        "answer": "brilliance", 
        "explanation": "'Brilliance' is the grammatically correct abstract noun form that indicates superior mental quality." 
    },
    { 
        "question": "The mutual ________ between the two nations led to a successful peace treaty.", 
        "options": ["understand", "understanding", "understandable", "understandably"], 
        "answer": "understanding", 
        "explanation": "'Understanding' functions as an abstract noun (gerund form) denoting shared comprehension or agreement." 
    },

    // 41-50: Proper vs Common & Pluralization Rules
    { 
        "question": "Which of the following is a Proper Noun that must always be capitalized?", 
        "options": ["government", "department", "republic", "philippines"], 
        "answer": "philippines", 
        "explanation": "'Philippines' is a proper noun because it is the specific name of a country, meaning it must always begin with a capital letter." 
    },
    { 
        "question": "Identify the sentence that correctly uses a proper noun.", 
        "options": [
            "We visited the National Museum last Friday.", 
            "We visited the national museum last Friday.", 
            "We visited the National museum last friday.", 
            "We visited the national Museum last friday."
        ], 
        "answer": "We visited the National Museum last Friday.", 
        "explanation": "Both 'National Museum' (a specific institution) and 'Friday' (a specific day of the week) are proper nouns and must be capitalized." 
    },
    { 
        "question": "Which word in the choices is a common noun? 'Dr. Jose Rizal is a renowned national hero.'", 
        "options": ["Dr. Jose Rizal", "Rizal", "hero", "national"], 
        "answer": "hero", 
        "explanation": "'Hero' is a common noun because it is a generic term for figures of admiration, unlike the specific proper name 'Dr. Jose Rizal'." 
    },
    { 
        "question": "The ________ of the Supreme Court are responsible for reviewing judicial appeals.", 
        "options": ["justices", "justice's", "justiceses", "justice"], 
        "answer": "justices", 
        "explanation": "The plural form of 'justice' (when referring to a judge) is 'justices'. An apostrophe is not needed because it is not possessive." 
    },
    { 
        "question": "Several ________ were deployed to secure the international economic forum.", 
        "options": ["agencys", "agencies", "agencies'", "agency"], 
        "answer": "agencies", 
        "explanation": "For nouns ending in a consonant + 'y', change the 'y' to 'i' and add 'es' to form the plural (agencies)." 
    },
    { 
        "question": "The office purchased three new ________ for the administrative staff.", 
        "options": ["computer", "computers", "computeres", "computers's"], 
        "answer": "computers", 
        "explanation": "The quantifier 'three' indicates a plural requirement. Regular nouns form their plural by simply adding 's' (computers)." 
    },
    { 
        "question": "Due to the storm, the heavy downpour caused multiple ________ to overflow.", 
        "options": ["ditchs", "ditches", "ditches'", "ditches"], 
        "answer": "ditches", 
        "explanation": "Nouns ending in s, x, z, ch, or sh form their plural by adding 'es' (ditches)." 
    },
    { 
        "question": "The human resource department updated the records of all female ________.", 
        "options": ["attorneys", "attornies", "attorney", "attorney's"], 
        "answer": "attorneys", 
        "explanation": "If a noun ends in a vowel + 'y' (such as -ey), you form the plural simply by adding 's' (attorneys)." 
    },
    { 
        "question": "The seminar focuses on how to manage the various ________ encountered by public servants.", 
        "options": ["crisis", "crises", "crisises", "crisis's"], 
        "answer": "crises", 
        "explanation": "'Crisis' is an irregular noun of Greek origin. Its plural form changes the '-is' ending to '-es' (crises)." 
    },
    { 
        "question": "Only five ________ are allowed inside the examination room at a time.", 
        "options": ["candidate", "candidates", "candidates'", "candidate's"], 
        "answer": "candidates", 
        "explanation": "The number 'five' modifies a plural noun. 'Candidates' is the simple plural form without possessive punctuation." 
    }
  ],

  intermediate: [
    // 1-15: Irregular Plurals
      {
        "question": "The department is evaluating alternative welfare programs designed specifically to protect marginalized ________.",
        "options": ["childs", "children", "childes", "childrens"],
        "answer": "children",
        "explanation": "'Children' is the correct irregular plural form of 'child', requiring no additional plural suffixes like '-s'."
    },
    {
        "question": "The structural safety inspection revealed that the building's foundation had shifted by several ________.",
        "options": ["foot", "foots", "feet", "feets"],
        "answer": "feet",
        "explanation": "'Feet' functions as the correct irregular plural noun for the unit of measurement 'foot'."
    },
    {
        "question": "A significant percentage of the local labor force is comprised of diligent ________ working in agricultural sectors.",
        "options": ["womans", "woman", "womens", "women"],
        "answer": "women",
        "explanation": "'Women' is the grammatically correct irregular plural form of the singular noun 'woman'."
    },
    {
        "question": "The forensic investigator noted that the dental impressions matched the victim's remaining ________.",
        "options": ["tooths", "teeth", "toothes", "teeths"],
        "answer": "teeth",
        "explanation": "The noun 'tooth' undergoes an internal vowel change to form its irregular plural state, which is 'teeth'."
    },
    {
        "question": "The health inspector reported that the laboratory facility was completely free from ________ and other pests.",
        "options": ["mouses", "mices", "mice", "mouse"],
        "answer": "mice",
        "explanation": "'Mice' is the standard irregular plural form of 'mouse'. The form 'mouses' is grammatically incorrect in this context."
    },
    {
        "question": "The constitutional mandate ensures that the state shall serve and protect the rights of all ________.",
        "options": ["persons", "people", "peoples", "persones"],
        "answer": "people",
        "explanation": "While 'persons' is used in strict legal statutes, 'people' is the standard collective plural noun representing individuals in general contexts."
    },
    {
        "question": "During the autumn season, clearing dry ________ from the drainage system prevents municipal flooding.",
        "options": ["leafs", "leaves", "leafes", "leave"],
        "answer": "leaves",
        "explanation": "Nouns ending in a voiceless consonant sound like '-f' typically change their ending to '-ves' to form the plural."
    },
    {
        "question": "The customs officer confiscated several undocumented surgical ________ from the cargo shipment.",
        "options": ["knifes", "knives", "knive", "knifves"],
        "answer": "knives",
        "explanation": "For nouns ending in '-fe' such as 'knife', the plural form requires replacing '-fe' with '-ves'."
    },
    {
        "question": "The agricultural department provided local farmers with a livestock subsidy consisting of fifty ________.",
        "options": ["sheeps", "sheep", "shoop", "sheepes"],
        "answer": "sheep",
        "explanation": "'Sheep' belongs to a category of irregular nouns that preserve an identical form in both singular and plural numbers."
    },
    {
        "question": "Environmental scientists are monitoring the migration patterns of various ________ in the protected marine sanctuary.",
        "options": ["fishs", "fish", "fishes", "fishies"],
        "answer": "fish",
        "explanation": "The plural form remains 'fish' when referring to a collective mass of individuals. 'Fishes' is only acceptable when specifically emphasizing different biological species."
    },
    {
        "question": "The civil aviation authority issued a warning regarding a flock of migratory ________ near the runway.",
        "options": ["gooses", "geese", "geeses", "goose"],
        "answer": "geese",
        "explanation": "'Geese' is the valid irregular plural designation achieved through internal mutation of the word 'goose'."
    },
    {
        "question": "Historically, pairs of domesticated ________ were utilized in rural provinces to plow agricultural lands.",
        "options": ["oxes", "oxs", "oxen", "oxens"],
        "answer": "oxen",
        "explanation": "'Oxen' represents a rare, traditional Germanic irregular plural mutation for the singular noun 'ox'."
    },
    {
        "question": "Arid regions are characterized by specialized flora, including various species of desert ________.",
        "options": ["cactuses", "cacti", "cactus", "cactii"],
        "answer": "cacti",
        "explanation": "'Cacti' is the preferred plural variation derived from classical Latin rules governing singular nouns ending in '-us'."
    },
    {
        "question": "The Department of Social Welfare and Development conducts census surveys to assist underprivileged ________.",
        "options": ["childs", "children", "childes", "childrens"],
        "answer": "children",
        "explanation": "'Children' is inherently pluralized; adding an extra '-s' is a redundant and grammatically incorrect construction."
    },
    {
        "question": "The heroic actions of the first responders saved numerous ________ during the metropolitan disaster.",
        "options": ["lifes", "lives", "live", "liffes"],
        "answer": "lives",
        "explanation": "The plural form of 'life' follows the conventional linguistic transformation where terminal '-fe' is substituted with '-ves'."
    },

    // 16-30: Countable vs Uncountable Nouns (CSE Context)
    {
        "question": "Which of the following sentences demonstrates the grammatically correct application of a countable noun?",
        "options": ["The consultant provided me with three invaluable advice.", "The relief agency distributed two packed breads to each family.", "The administrative division acquired two fleet cars for field operations.", "The regional office procured many modern furniture for the lounge."],
        "answer": "The administrative division acquired two fleet cars for field operations.",
        "explanation": "'Cars' is a standard countable noun that can be directly preceded by numerical quantifiers, unlike advice, bread, or furniture."
    },
    {
        "question": "Which of the following sentences correctly utilizes an uncountable mass noun in professional writing?",
        "options": ["The newly appointed director does not possess many money.", "The senior technical adviser possesses much valuable experience.", "The warehouse clerk verified that we bought three imported rice.", "The human resource unit gave me two urgent information."],
        "answer": "The senior technical adviser possesses much valuable experience.",
        "explanation": "'Experience' represents an abstract, non-count noun concept which must be modified by quantifiers like 'much' rather than 'many'."
    },
    {
        "question": "In governmental budgeting, which of the following items is strictly classified as an uncountable noun?",
        "options": ["apple", "water", "bottle", "cup"],
        "answer": "water",
        "explanation": "As a liquid substance, 'water' is inherently continuous and cannot be partitioned into discrete countable units without a container."
    },
    {
        "question": "Identify the countable asset noun from the choices provided below:",
        "options": ["rice", "sugar", "orange", "milk"],
        "answer": "orange",
        "explanation": "An 'orange' is a distinct physical object that can be tallied individually using cardinal numbers."
    },
    {
        "question": "Select the phrase that aligns with standard formal grammar guidelines:",
        "options": ["The laboratory required many waters for the chemical test.", "The reservoir contained much water despite the prolonged drought.", "The logistics team requested many water supplies for the delegation.", "The local community conserved much waters during the emergency."],
        "answer": "The reservoir contained much water despite the prolonged drought.",
        "explanation": "'Water' is a mass noun; therefore, the non-count singular quantifier 'much' must be utilized."
    },
    {
        "question": "Choose the expression that adheres to correct grammatical syntax regarding administrative data:",
        "options": ["The auditor found few information regarding the missing funds.", "The committee discovered little information in the preliminary brief.", "The researcher attached an information to the summary report.", "The intelligence division processed two critical informations."],
        "answer": "The committee discovered little information in the preliminary brief.",
        "explanation": "'Information' is an uncountable noun. It cannot take the indefinite article 'an', be pluralized with '-s', or be modified by 'few'."
    },
    {
        "question": "Which of the following organizational assets is classified as an uncountable collective noun?",
        "options": ["chair", "table", "furniture", "desk"],
        "answer": "furniture",
        "explanation": "While 'chair' and 'table' are individual countable items, 'furniture' is an overarching, uncountable category noun."
    },
    {
        "question": "Identify the non-count noun often referenced in customs and travel regulations:",
        "options": ["suitcase", "bag", "luggage", "box"],
        "answer": "luggage",
        "explanation": "'Luggage' aggregates individual items into an abstract mass entity, rendering it grammatically uncountable."
    },
    {
        "question": "Determine the most precise and grammatically sound sentence structure for public relations:",
        "options": ["The press secretary released a news regarding the executive order.", "The department broadcasted some news about the administrative reform.", "The media relations unit distributed two news to the journalists.", "The public information office handled many news yesterday."],
        "answer": "The department broadcasted some news about the administrative reform.",
        "explanation": "'News' is singular and uncountable despite ending in '-s'; it properly pairs with partitive quantifiers like 'some'."
    },
    {
        "question": "Which of the following queries complies fully with correct English grammar conventions?",
        "options": ["How many money do you have allocated for the project?", "How much money do you have remaining in the agency budget?", "How many fiscal penalizing moneys were collected?", "How much operational funding moneys are needed?"],
        "answer": "How much money do you have remaining in the agency budget?",
        "explanation": "'Money' is grammatically an uncountable collective noun, which mandates the interrogative modifier 'How much'."
    },
    {
        "question": "Identify the countable carbohydrate item from the perspective of standard dietary classification:",
        "options": ["bread", "flour", "bun", "dough"],
        "answer": "bun",
        "explanation": "A 'bun' is treated as a single, discrete baked unit that can be counted, whereas bread, flour, and dough are mass nouns."
    },
    {
        "question": "Which of the following environmental factors is grammatically structured as an uncountable noun?",
        "options": ["cloud", "rain", "puddle", "drop"],
        "answer": "rain",
        "explanation": "'Rain' describes a collective meteorological precipitation mass, classifying it strictly as an uncountable noun."
    },
    {
        "question": "Select the correct grammatical modifier to quantify the agricultural yield of 'rice':",
        "options": ["The warehouse contained many surplus rice.", "The cooperative distributed a few sacks of rice.", "The relief center required a little rice to complete the pack.", "The agency processed an import quota for rice."],
        "answer": "The relief center required a little rice to complete the pack.",
        "explanation": "'Rice' is a bulk mass noun. The modifier 'a little' is correctly applied to express a small quantity of an uncountable item."
    },
    {
        "question": "Choose the most appropriate quantifier for the plural countable noun 'friends':",
        "options": ["The diplomat did not receive much friends at the embassy.", "The regional director invited a little friends to the conference.", "The project manager gained a lot of friends within the community.", "The supervisor retained less friends after the policy shift."],
        "answer": "The project manager gained a lot of friends within the community.",
        "explanation": "'Friends' is plural and countable. 'A lot of' is a versatile modifier applicable to both plural countable and uncountable nouns."
    },
    {
        "question": "Which resource noun is considered uncountable under standard physical asset metrics?",
        "options": ["gold", "ring", "necklace", "jewel"],
        "answer": "gold",
        "explanation": "'Gold' represents an elemental raw material substance, which places it under the category of mass uncountable nouns."
    },

    // 31-40: Possessive Nouns (CSE Context)
    {
        "question": "Which phrase demonstrates correct singular possessive punctuation for an employee asset?",
        "options": ["The boys bike was parked outside the municipal hall.", "The boy's bike was secured near the office entrance.", "The boys's bike remained in the government compound.", "The boies bike was registered under local transport rules."],
        "answer": "The boy's bike was secured near the office entrance.",
        "explanation": "To indicate ownership for a singular noun ('boy'), attach an apostrophe followed by the letter 's'."
    },
    {
        "question": "Which sentence correctly reflects the plural possessive form for a canine unit?",
        "options": ["The dogs's bone was provided by the security department.", "The dog's bone was inspected by the veterinary officer.", "The dogs' bone structure was analyzed during the forensic trial.", "The dog bone supply was audited by the budget team."],
        "answer": "The dogs' bone structure was analyzed during the forensic trial.",
        "explanation": "For regular plural nouns that terminate in the letter 's' ('dogs'), possession is indicated by appending a solitary trailing apostrophe."
    },
    {
        "question": "What is the correct possessive formulation for an item belonging to an irregular plural demographic?",
        "options": ["The childrens' toys were donated to the state orphanage.", "The children' toys were distributed by the social worker.", "The children's toys met the international safety standards.", "The childs' toys were stored in the community center."],
        "answer": "The children's toys met the international safety standards.",
        "explanation": "Because 'children' is an irregular plural noun that does not end in 's', its possessive form requires an apostrophe followed by an 's'."
    },
    {
        "question": "The public information officer confirmed that the vehicle parked outside was ________.",
        "options": ["James' vehicle", "James's vehicle", "Jame's vehicle", "Both A and B are accepted"],
        "answer": "Both A and B are accepted",
        "explanation": "For singular proper nouns ending in an 's' sound, classical grammar accepts just the apostrophe, while modern style guides accept the apostrophe plus 's'."
    },
    {
        "question": "The collective association announced that the new faculty ________ lounge was officially open for all academic staff members.",
        "options": ["teacher's", "teachers'", "teachers's", "teacher"],
        "answer": "teachers'",
        "explanation": "Since the context implies a shared space belonging to multiple educators (plural), the correct form is 'teachers''."
    },
    {
        "question": "To secure the juvenile passport, the civil service application mandated the explicit submission of both ________ consent.",
        "options": ["parents'", "parent's", "parents's", "parents"],
        "answer": "parents'",
        "explanation": "This legal requirement refers to the joint authority of both parents (plural), necessitating a trailing apostrophe after the 's'."
    },
    {
        "question": "The quarantine officer observed that the domestic ________ microchip was registered properly.",
        "options": ["cat", "cats", "cat's", "cats'"],
        "answer": "cat's",
        "explanation": "The sentence dictates ownership by a single singular animal ('cat'), which demands an apostrophe followed by an 's'."
    },
    {
        "question": "The security personnel discovered that the ________ unattended baggage contained suspicious documents.",
        "options": ["man's", "mans'", "mens'", "mens"],
        "answer": "man's",
        "explanation": "The singular noun 'man' forms its possessive case by adding an apostrophe and an 's'."
    },
    {
        "question": "The municipal engineering department designated a specific floor area inside the government center for the exclusive construction of the ________ locker room.",
        "options": ["mens'", "mans'", "men's", "mens"],
        "answer": "men's",
        "explanation": "'Men' is an irregular plural noun. To show possession, an apostrophe and an 's' must be appended."
    },
    {
        "question": "The administrative assistant noted that her ________ official designation was executive clerk.",
        "options": ["sisters", "sister's", "sisters'", "sister"],
        "answer": "sister's",
        "explanation": "The statement points to one specific sibling, which means the singular possessive pattern ('s) must be utilized."
    },

    // 41-50: Gender & Context (CSE Context)
    {
        "question": "In royal succession law, what is the feminine noun equivalent of a 'Prince'?",
        "options": ["Queen", "Lady", "Princess", "Duchess"],
        "answer": "Princess",
        "explanation": "'Princess' is the distinct grammatical feminine noun counterpart to the masculine title 'Prince'."
    },
    {
        "question": "When filing a civil registry inheritance claim, what is the masculine counterpart for a 'Niece'?",
        "options": ["Nephew", "Uncle", "Brother", "Cousin"],
        "answer": "Nephew",
        "explanation": "'Nephew' represents the specific masculine kin relation that corresponds directly to a female 'Niece'."
    },
    {
        "question": "The livestock inspector separated the aggressive male ________ from the female cow.",
        "options": ["Horse", "Bull", "Ewe", "Mare"],
        "answer": "Bull",
        "explanation": "In bovine taxonomy, 'Bull' is the masculine noun designation, while 'Cow' is the feminine counterpart."
    },
    {
        "question": "The agricultural census categorized the breeding male chicken as a ________.",
        "options": ["Duck", "Rooster", "Drake", "Gander"],
        "answer": "Rooster",
        "explanation": "'Rooster' is the correct masculine noun used to specify a male chicken, contrasting with the female hen."
    },
    {
        "question": "The professional title 'Doctor' is classified under which grammatical gender category?",
        "options": ["Masculine noun", "Feminine noun", "Common gender noun", "Neuter noun"],
        "answer": "Common gender noun",
        "explanation": "Titles like 'Doctor' belong to the common gender category because they can represent either male or female professionals without changing form."
    },
    {
        "question": "In English grammar, an inanimate workspace object like a 'Table' is categorized as a:",
        "options": ["Masculine noun", "Feminine noun", "Common gender noun", "Neuter noun"],
        "answer": "Neuter noun",
        "explanation": "Nouns that denote non-living, inanimate things possess no biological sex and are classified as neuter."
    },
    {
        "question": "The hospitality management terminal noted that the senior ________ handled the VIP delegation.",
        "options": ["Waitress", "Waiting", "Lady waiter", "Waiteress"],
        "answer": "Waitress",
        "explanation": "'Waitress' remains the traditional, formally recognized feminine suffix modification for the noun 'Waiter'."
    },
    {
        "question": "The deceased employee's surviving paternal ________, who is the biological brother of the employee's late father, filed for secondary insurance benefits.",
        "options": ["Father", "Uncle", "Grandpa", "Nephew"],
        "answer": "Uncle",
        "explanation": "An 'Uncle' is the masculine familial counterpart representing the brother of one's parent (maternal or paternal)."
    },
    {
        "question": "The wildlife ranger documented the maternal instincts of a protective ________ in the reservation.",
        "options": ["Tiger", "Lioness", "Leopard", "Liona"],
        "answer": "Lioness",
        "explanation": "The term 'Lioness' is the distinct feminine noun applied to a female lion."
    },
    {
        "question": "To promote inclusive and gender-neutral language, the agency prefers which common gender noun?",
        "options": ["King", "Sister", "Student", "Father"],
        "answer": "Student",
        "explanation": "'Student' is a common gender noun because it neutrally encompasses both male and female learners without gender specification."
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
