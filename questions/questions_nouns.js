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
        "options": ["ditchs", "ditches", "ditches'", "ditchees"], 
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
        "question": "During the plenary session, the legislative ________ voted unanimously to pass the proposed civil service amendment bill.",
        "options": ["assembly", "congregations", "assemblies", "board of directors"],
        "answer": "assembly",
        "explanation": "'Assembly' functions as a singular collective noun designating a body of legislators acting as a single unit to pass statutes."
    },
    {
        "question": "The Bureau of Fisheries and Aquatic Resources documented a massive ________ of tuna passing through the protected marine pathway.",
        "options": ["school", "pod", "pack", "herd"],
        "answer": "school",
        "explanation": "In institutional wildlife classification, 'school' is the accurate technical collective noun utilized for fish populations."
    },
    {
        "question": "The internal affairs unit confirmed that a ________ of corrupt investigators was involved in the anomalous bidding process.",
        "options": ["cabal", "crowd", "mob", "crew"],
        "answer": "cabal",
        "explanation": "'Cabal' is a sophisticated collective noun that specifies a small group of individuals secretively plotting sinister or illegal administrative actions."
    },
    {
        "question": "Which of the following sentences adheres strictly to executive subject-verb agreement rules involving a collective noun?",
        "options": [
            "The oversight committee disagree on the structural distribution of the fiscal budget.",
            "The oversight committee disagrees on the structural distribution of the fiscal budget.",
            "The oversight committee are disagreeing on the structural distribution of the fiscal budget.",
            "The oversight committee have disagreed on the structural distribution of the fiscal budget."
        ],
        "answer": "The oversight committee disagrees on the structural distribution of the fiscal budget.",
        "explanation": "When a collective noun ('committee') acts as a single, unified entity performing a singular action, it demands a singular verb ('disagrees')."
    },
    {
        "question": "The executive director acknowledged that a ________ of distinguished medical experts was convened to analyze the outbreak data.",
        "options": ["panel", "bunch", "band", "flock"],
        "answer": "panel",
        "explanation": "In professional and state settings, 'panel' is the standard collective designation for an appointed group of specialists or experts."
    },
    {
        "question": "The strategic deployment blueprint indicates that a specialized ________ of elite naval vessels has arrived at the disputed territory.",
        "options": ["fleet", "pack", "colony", "swarm"],
        "answer": "fleet",
        "explanation": "'Fleet' is the correct collective noun denoting an organized group of military ships operating under unified military command."
    },
    {
        "question": "Identify the sentence that correctly applies an operational collective noun syntax representing divided individual actions:",
        "options": [
            "The board of trustees has signed its names on the executive employment contract.",
            "The board of trustees are signing their individual names on the executive employment contract.",
            "The board of trustees signs their names on the executive employment contract.",
            "The board of trustees is signing their names on the executive employment contract."
        ],
        "answer": "The board of trustees are signing their individual names on the executive employment contract.",
        "explanation": "When members of a collective group act individually (indicated by 'individual names'), the noun shifts to a plural concept, mandating a plural verb ('are') and plural pronoun ('their')."
    },
    {
        "question": "The multi-agency task force intercepted an illegal ________ of documents containing state secrets near the international border.",
        "options": ["cache", "bunch", "cluster", "heap"],
        "answer": "cache",
        "explanation": "'Cache' is an advanced collective noun used to define a hidden, secure collection of specialized items, supplies, or sensitive documents."
    },
    {
        "question": "The diplomatic compound requested a tight cordon of protection due to an angry ________ of protesters destabilizing the entrance gates.",
        "options": ["throng", "mob", "audience", "congregation"],
        "answer": "mob",
        "explanation": "While 'throng' signifies a dense crowd, 'mob' specifically connotes a disorderly, aggressive, or chaotic collection of individuals intent on disruption."
    },
    {
        "question": "The environmental protection agency released a memorandum regarding the seasonal migration patterns of a ________ of locusts.",
        "options": ["swarm", "herd", "pack", "brood"],
        "answer": "swarm",
        "explanation": "'Swarm' is the definitive collective noun utilized in scientific literature to describe an overwhelming, moving mass of flying insects."
    },

    // 11-20: Concrete, Abstract, and Material Nouns (Advanced CSE Context)
    {
        "question": "The anti-graft magistrate emphasized that public ________ must be upheld at all levels of government operations.",
        "options": ["integrity", "currency", "paperwork", "infrastructure"],
        "answer": "integrity",
        "explanation": "'Integrity' represents an ideal, moral value that cannot be physically perceived, classifying it strictly as an abstract noun."
    },
    {
        "question": "Which of the following elements referenced in the public works inventory is classified as a material noun?",
        "options": ["cement", "bridge", "highway", "blueprint"],
        "answer": "cement",
        "explanation": "'Cement' denotes a raw physical material substance used to create structures, whereas 'bridge' and 'highway' are concrete countable objects."
    },
    {
        "question": "The presidential award was conferred upon the senior officer to honor her exceptional ________ under severe crisis conditions.",
        "options": ["fortitude", "medallion", "uniform", "certificate"],
        "answer": "fortitude",
        "explanation": "'Fortitude' is an intangible quality of mental or emotional strength, which classifies it as an abstract noun."
    },
    {
        "question": "The procurement office purchased heavy-duty office desks composed entirely of high-grade ________.",
        "options": ["timber", "furniture", "desks", "stations"],
        "answer": "timber",
        "explanation": "'Timber' represents the fundamental raw material matter used in fabrication, making it a definitive material noun."
    },
    {
        "question": "Identify the option that exhibits a concrete asset noun followed directly by an abstract operational concept:",
        "options": [
            "computer - efficiency",
            "intellect - performance",
            "strategy - formulation",
            "steel - durability"
        ],
        "answer": "computer - efficiency",
        "explanation": "'Computer' is tangible and concrete, while 'efficiency' is an intangible performance concept, making it abstract."
    },
    {
        "question": "The judicial defense argued that the prosecutor's claims lacked substantial evidence and were based entirely on pure ________.",
        "options": ["speculation", "affidavits", "fingerprints", "documents"],
        "answer": "speculation",
        "explanation": "'Speculation' is an intellectual concept or guess that cannot be physically measured, marking it as an abstract noun."
    },
    {
        "question": "To complete the construction of the municipal water filtration grid, the engineering team required tons of raw ________.",
        "options": ["copper", "pipes", "valves", "pumps"],
        "answer": "copper",
        "explanation": "'Copper' is an elemental raw material substance, distinguishing it as a material noun from fabricated items like pipes and valves."
    },
    {
        "question": "Convert the administrative verb 'rationalize' into its formal abstract noun derivative:",
        "options": ["rationalization", "rationalizing", "rationalized", "rational"],
        "answer": "rationalization",
        "explanation": "The suffix '-ation' transforms the verb 'rationalize' into the formal abstract state noun 'rationalization'."
    },
    {
        "question": "What is the correct abstract noun formulation representing the internal state or quality of being 'sovereign'?",
        "options": ["sovereignty", "sovereignly", "sovereignties", "sovereignism"],
        "answer": "sovereignty",
        "explanation": "'Sovereignty' is the derived abstract noun that symbolizes supreme political power, authority, or independence."
    },
    {
        "question": "Select the option that converts the adjective 'resilient' into an abstract bureaucratic trait noun:",
        "options": ["resilience", "resiliently", "resiliency", "Both A and C are accepted"],
        "answer": "Both A and C are accepted",
        "explanation": "Both 'resilience' and 'resiliency' are grammatically recognized abstract nouns that denote the quality of being resilient."
    },

    // 21-30: Proper Nouns & Capitalization (Advanced CSE Context)
    {
        "question": "Which of the following legal bodies is written with the flawless application of proper noun capitalization?",
        "options": [
            "the supreme court of the Philippines",
            "the Supreme Court of the Philippines",
            "The Supreme Court Of The Philippines",
            "The Supreme Court of the philippines"
        ],
        "answer": "the Supreme Court of the Philippines",
        "explanation": "Specific names of judicial bodies are proper nouns; functional words like prepositions ('of') and articles ('the') are generally not capitalized unless beginning a sentence."
    },
    {
        "question": "Identify the geographical term that should remain lowercase because it is utilized as a general common noun direction:",
        "options": [
            "We traveled west toward the provincial capital to audit the precinct.",
            "The economic zone is influenced heavily by Western trade policies.",
            "The delegation represents the cultural heritage of the Middle West.",
            "He assigned a task force to monitor the geopolitical shifts in East Asia."
        ],
        "answer": "We traveled west toward the provincial capital to audit the precinct.",
        "explanation": "When compass points ('west') indicate pure direction rather than a specific geopolitical region, they function as common descriptors and are not capitalized."
    },
    {
        "question": "Which of the following state document titles is capitalized correctly?",
        "options": [
            "The philippine philippine Philippine Philippine Constitution of 1987",
            "the Philippine Constitution of 1987",
            "The Philippine constitution of 1987",
            "the philippine constitution of 1987"
        ],
        "answer": "the Philippine Constitution of 1987",
        "explanation": "Specific historic and organic legal documents function as proper nouns and require initial capitalization for major naming components."
    },
    {
        "question": "Determine the proper noun classification that requires strict capitalization under civil registry standards:",
        "options": ["executive order", "republic act", "Republic Act No. 11032", "presidential decree"],
        "answer": "Republic Act No. 11032",
        "explanation": "'Republic Act No. 11032' is a specific proper designation of a particular statute, unlike common generic legal classifications like 'executive order'."
    },
    {
        "question": "Which sentence satisfies all technical capitalization rules concerning corporate titles and official administrative names?",
        "options": [
            "The Undersecretary coordinated directly with the Department of Budget and Management.",
            "The undersecretary coordinated directly with the department of budget and management.",
            "The undersecretary coordinated directly with the Department of Budget and Management.",
            "The Undersecretary coordinated directly with the Department Of Budget And Management."
        ],
        "answer": "The undersecretary coordinated directly with the Department of Budget and Management.",
        "explanation": "Official agency names are proper nouns and must be capitalized. General organizational titles like 'undersecretary' remain lowercase unless followed directly by a specific proper name."
    },
    {
        "question": "Select the expression that demonstrates flawless proper noun alignment for a seasonal statutory holiday:",
        "options": ["Ninoy Aquino day", "Ninoy Aquino Day", "ninoy aquino day", "Ninoy aquino Day"],
        "answer": "Ninoy Aquino Day",
        "explanation": "All constituent words forming the formal proper designation of a national commemorative holiday must be capitalized."
    },
    {
        "question": "Which sentence features a critical capitalization error regarding an institutional program name?",
        "options": [
            "The bureau implemented the comprehensive agrarian reform program last fiscal year.",
            "The bureau implemented the Comprehensive Agrarian Reform Program last fiscal year.",
            "The regional office supports the local environmental preservation initiatives.",
            "The state university offers an advanced degree in public administration."
        ],
        "answer": "The bureau implemented the comprehensive agrarian reform program last fiscal year.",
        "explanation": "The 'Comprehensive Agrarian Reform Program' is a specific, officially legislated state program and must be treated as a proper noun with full capitalization."
    },
    {
        "question": "Identify the proper noun variant that represents a specific linguistic group rather than a generic identifier:",
        "options": ["bureaucrat", "government", "Austronesian", "municipality"],
        "answer": "Austronesian",
        "explanation": "'Austronesian' designates a specific, distinct anthropological and linguistic heritage group, classifying it as a proper noun."
    },
    {
        "question": "Which sentence contains no syntax errors and reflects immaculate capitalization concerning academic designations?",
        "options": [
            "Professor Laurel, who holds a doctorate in Economics, led the fiscal panel.",
            "professor Laurel, who holds a Doctorate in economics, led the fiscal panel.",
            "Professor Laurel, who holds a Doctorate in Economics, led the fiscal panel.",
            "Professor Laurel, who holds a doctorate in economics, led the fiscal panel."
        ],
        "answer": "Professor Laurel, who holds a doctorate in Economics, led the fiscal panel.",
        "explanation": "'Professor' is capitalized before a specific name. General degrees like 'doctorate' are lowercase, but specific academic disciplines derived from field studies or proper fields ('Economics') are capitalized in formal course classifications."
    },
    {
        "question": "Which specific commercial entity or entity asset name is formatted flawlessly?",
        "options": [
            "Government Service Insurance System",
            "government service insurance system",
            "Government service insurance system",
            "Government Service Insurance system"
        ],
        "answer": "Government Service Insurance System",
        "explanation": "As a specific government corporate entity, every key functional word in the 'Government Service Insurance System' requires an initial uppercase letter."
    },

    // 31-40: Partitives & Quantifiers with Nouns (Advanced CSE Context)
    {
        "question": "The legal advisor noted that the whistleblower provided ________ that could incriminate the erring officials.",
        "options": ["an invaluable advice", "a crucial piece of advice", "many valuable advices", "several vital advices"],
        "answer": "a crucial piece of advice",
        "explanation": "'Advice' is strictly non-count and uncountable; it cannot be pluralized with '-s' or prefixed by 'an'. It demands a partitive phrase like 'a piece of advice'."
    },
    {
        "question": "To accommodate the stranded delegates, the social welfare office requested ________ to be delivered immediately.",
        "options": ["fifty loaves of bread", "fifty breads", "fifty pieces of breads", "fifty bread packages"],
        "answer": "fifty loaves of bread",
        "explanation": "'Bread' is a mass noun entity. To mathematically specify an exact count, you must prefix it with a partitive container structure like 'loaves of'."
    },
    {
        "question": "The administrative logistics team requested a budget clearance to purchase ________ for the regional conference room.",
        "options": ["several new pieces of furniture", "several new furnitures", "many modern furnitures", "a few new structural furnitures"],
        "answer": "several new pieces of furniture",
        "explanation": "'Furniture' is an uncountable collective category. To partition it into discrete components, use the plural partitive format 'pieces of furniture'."
    },
    {
        "question": "The public information bureau disseminated ________ regarding the international trade treaty.",
        "options": ["a critical piece of news", "an urgent news", "several groundbreaking newses", "two volatile news"],
        "answer": "a critical piece of news",
        "explanation": "Although it terminates with an 's', 'news' is an uncountable mass concept that properly pairs with singular partitives like 'a piece of'."
    },
    {
        "question": "The strategic intelligence division generated ________ during the preliminary evaluation phase.",
        "options": ["a substantial amount of information", "many critical informations", "an extensive information", "several classified informations"],
        "answer": "a substantial amount of information",
        "explanation": "'Information' is completely uncountable. Quantifying its mass volume requires non-count modifiers like 'a substantial amount of'."
    },
    {
        "question": "The customs clearing agent intercepted a diplomatic traveler transporting ________ across the security line.",
        "options": ["too much undocumented luggage", "too many undocumented luggages", "several excessive luggages", "three separate illicit luggages"],
        "answer": "too much undocumented luggage",
        "explanation": "'Luggage' functions as an uncountable mass noun entity, dictating the use of the non-count intensive modifier 'much' instead of 'many'."
    },
    {
        "question": "The emergency response grid requires the installation of at least ________ before the severe weather anomaly makes landfall.",
        "options": ["two auxiliary blocks of ice", "two auxiliary ices", "two massive ice blocks", "Both A and C are accepted"],
        "answer": "Both A and C are accepted",
        "explanation": "To quantify the mass substance 'ice', you can employ the partitive 'blocks of ice' or use 'ice' as a clarifying noun adjective modifying a countable container like 'blocks'."
    },
    {
        "question": "The secretarial unit procured ________ to distribute among the members of the constitutional drafting panel.",
        "options": ["ten reams of paper", "ten papers", "ten piece of papers", "ten structural papers"],
        "answer": "ten reams of paper",
        "explanation": "As a mass material substance, 'paper' is measured professionally utilizing technical collective partitives like 'reams of'."
    },
    {
        "question": "The education department purchased ________ to be distributed to rural public classrooms.",
        "options": ["one hundred boxes of chalk", "one hundred chalks", "one hundred pieces of chalks", "one hundred individual chalk pieces"],
        "answer": "one hundred boxes of chalk",
        "explanation": "'Chalk' is fundamentally an uncountable mass material noun. Counts must be attributed to an external container modifier like 'boxes of chalk'."
    },
    {
        "question": "The human resource desk requires every fresh applicant to complete ________ as part of the initial screening process.",
        "options": ["a battery of psychological tests", "a psychological test battery", "many psychologic testing arrays", "Both A and B are accepted"],
        "answer": "Both A and B are accepted",
        "explanation": "Both options utilize valid grammatical structures—either an explicit partitive collective phrase ('a battery of...') or a compounding noun adjunct layout ('test battery')."
    },

    // 41-50: Nouns Used as Adjectives (Advanced CSE Context)
    {
        "question": "In the administrative directive phrase 'emergency evacuation blueprint', the word 'emergency' functions grammatically as:",
        "options": ["a dynamic verb", "a noun used as an adjective", "a modal modifier", "a traditional adverb"],
        "answer": "a noun used as an adjective",
        "explanation": "Although 'emergency' is inherently a noun, it sits before 'evacuation blueprint' to describe the type or purpose of the asset, acting as a noun adjunct."
    },
    {
        "question": "Identify the compound professional expression that correctly showcases a noun acting as an adjective to modify an operational asset:",
        "options": ["aviation regulatory manual", "highly regulated manual", "manually regulated aviation", "aviation regulations manual"],
        "answer": "aviation regulatory manual",
        "explanation": "'Aviation' is a noun used as an adjective (noun adjunct) that combines with the traditional adjective 'regulatory' to modify the core noun 'manual'."
    },
    {
        "question": "Which of the following professional phrases demonstrates a flawless application of a noun adjunct modifying a corporate asset?",
        "options": ["history reference book", "historical reference book", "historically referenced book", "history referencing book"],
        "answer": "history reference book",
        "explanation": "'History' and 'reference' are both distinct nouns functioning as descriptive adjectives to specify the exact category of the 'book'."
    },
    {
        "question": "In the official state address regarding 'water resource management', the word 'water' directly modifies which specific component?",
        "options": ["resource", "management", "both resource and management", "neither component"],
        "answer": "resource",
        "explanation": "In this stacked compound noun chain, 'water' modifies the secondary noun adjunct 'resource', which collectively modifies the master noun 'management'."
    },
    {
        "question": "Select the option that correctly establishes a formal noun-plus-noun compound syntax for a municipal transit vehicle:",
        "options": ["transit rail system", "transiting rail system", "railway transited system", "system rail transit"],
        "answer": "transit rail system",
        "explanation": "'Transit' and 'rail' are base nouns stacked sequentially as adjectives to define the exact nature of the overarching 'system'."
    },
    {
        "question": "The auditing firm noted that the corporate deficit was solved through a strict ________ stabilization framework.",
        "options": ["two-year", "two-years", "two years'", "two year's"],
        "answer": "two-year",
        "explanation": "When a compound measurement noun operates as an adjective before a noun, it must be hyphenated and remain strictly singular ('two-year')."
    },
    {
        "question": "In the administrative infrastructure statement 'The system suffered a massive power grid failure', the word 'power' serves as:",
        "options": ["an inherent abstract adjective", "a noun functioning as an adjective", "a progressive verb form", "a descriptive predicate adverb"],
        "answer": "a noun functioning as an adjective",
        "explanation": "'Power' is fundamentally a noun, but in this context, it describes the specific type of grid system that failed, acting as a noun adjunct."
    },
    {
        "question": "Which of the following phrases does NOT utilize a structural noun as an adjective modifier?",
        "options": ["sugar plantation", "diamond industry", "leather briefcase", "exceptionally fast"],
        "answer": "exceptionally fast",
        "explanation": "'Exceptionally fast' contains no noun adjuncts; it is comprised purely of a traditional adverb modifying a standard descriptive adjective."
    },
    {
        "question": "In the operational job description 'The senior logistics officer inspected the warehouse floor', the target word 'warehouse' is classified as:",
        "options": ["a noun used as an adjective", "the primary objective noun", "a participle adjective", "a locative adverb marker"],
        "answer": "a noun used as an adjective",
        "explanation": "'Warehouse' is a noun that specifies the location type of the 'floor', thereby serving as a noun adjunct/adjective modifier."
    },
    {
        "question": "Choose the most professional and grammatically precise arrangement using a noun adjunct for public safety equipment:",
        "options": [
            "The personnel received advanced leather safety gloves.",
            "The personnel received advanced safety leather gloves.",
            "The personnel received advanced gloves leather safety.",
            "The personnel received advanced safety's leather gloves."
        ],
        "answer": "The personnel received advanced leather safety gloves.",
        "explanation": "The noun adjuncts are stacked according to standard English order where material ('leather') precedes function/purpose ('safety') to modify the core noun 'gloves'."
    }
  ],

  
  expert: [
    // 1-10: Noun Functions
      {
        "question": "In the administrative mandate 'The newly appointed regional director's highly controversial executive decision', which component functions as the true head noun?",
        "options": ["director's", "decision", "mandate", "executive"],
        "answer": "decision",
        "explanation": "'Decision' is the core head noun of the complex noun phrase; all preceding elements act as phrases, possessives, or modifiers that describe it."
    },
    {
        "question": "Identify the exact grammatical function of the bolded noun clause in: 'The audit committee considers **what the regional office declared** a major miscalculation.'",
        "options": ["Direct Object", "Indirect Object", "Object Complement", "Subject"],
        "answer": "Direct Object",
        "explanation": "The noun clause 'what the regional office declared' receives the action of the transitive verb 'considers' directly, serving as its direct object."
    },
    {
        "question": "In the civil court ruling, 'The magistrate declared the previous bidding process a complete nullity', the noun phrase 'a complete nullity' functions as:",
        "options": ["Predicate Nominative", "Direct Object", "Object Complement", "Indirect Object"],
        "answer": "Object Complement",
        "explanation": "'A complete nullity' is an object complement because it follows the direct object ('bidding process') to rename and complete its meaning after a verb of making or declaring."
    },
    {
        "question": "Identify the structural function of the noun 'prosecutor' in the following sentence: 'The ombudsman provided the senior prosecutor a detailed matrix of the financial anomalies.'",
        "options": ["Direct Object", "Indirect Object", "Object of the Preposition", "Retained Object"],
        "answer": "Indirect Object",
        "explanation": "The noun 'prosecutor' is the indirect object because it names the recipient to whom the direct object ('matrix') was provided."
    },
    {
        "question": "In the technical report, 'The discrepancy in the automated liquidation records triggered an immediate internal inquiry', the noun 'records' is operating as:",
        "options": ["Subject", "Direct Object", "Object of a Preposition", "Appositive Modifier"],
        "answer": "Object of a Preposition",
        "explanation": "'Records' follows and is governed by the preposition 'in', making it the object of the preposition within the prepositional phrase."
    },
    {
        "question": "Identify the absolute grammatical Subject of this inverted sentence: 'Amidst intense public scrutiny and structural reforms, down from the executive penthouse marched the embattled board members.'",
        "options": ["scrutiny", "reforms", "penthouse", "members"],
        "answer": "members",
        "explanation": "Despite the inverted syntax where adverbial phrases open the sentence, 'members' is the actual subject performing the action of the verb 'marched'."
    },
    {
        "question": "In the administrative text, 'The board of trustees appointed him Officer-in-Charge during the transition period', what is the function of the pronoun 'him'?",
        "options": ["Subject Complement", "Indirect Object", "Direct Object", "Objective Retainer"],
        "answer": "Direct Object",
        "explanation": "The pronoun 'him' undergoes the direct action of the transitive verb 'appointed', while 'Officer-in-Charge' functions as its object complement."
    },
    {
        "question": "What grammatical role does the noun phrase 'an absolute prerequisite' fulfill in: 'For aspiring civil servants, passing the eligibility examination remains an absolute prerequisite.'",
        "options": ["Direct Object", "Predicate Nominative", "Object Complement", "Appositive Noun"],
        "answer": "Predicate Nominative",
        "explanation": "The phrase follows the linking verb 'remains' and renames the subject gerund phrase 'passing the eligibility examination', making it a predicate nominative."
    },
    {
        "question": "Determine the function of the noun 'agency' in the following corporate resolution: 'The primary concern of the department is the agency's operational stability.'",
        "options": ["Subject", "Predicate Nominative", "Possessive Noun Modifier", "Direct Object"],
        "answer": "Possessive Noun Modifier",
        "explanation": "The noun 'agency's' contains a possessive clitic ('s) used to modify the noun 'stability', indicating ownership or relation."
    },
    {
        "question": "In the passive voice restructuring, 'The designated committee was granted full executive authority by the council', the phrase 'full executive authority' functions as a/an:",
        "options": ["Retained Object", "Indirect Object", "Subject Modifier", "Predicate Nominative"],
        "answer": "Retained Object",
        "explanation": "When an active sentence with an indirect and direct object is made passive, the object that remains a direct object ('authority') is called a retained object."
    },

    // 11-20: Gerunds vs. Participles (Complex Verbal Nominalizations)
    {
        "question": "Which of the following sentences features an -ing verbal form acting strictly as a nominal Subject?",
        "options": [
            "The clearing agent is verifying the shipment manifests at the dock.",
            "Clearing the structural deficits proved to be an arduous administrative challenge.",
            "The clearing team presented their comprehensive liquidation report.",
            "Having cleared the backlog, the operations manager closed the portal."
        ],
        "answer": "Clearing the structural deficits proved to be an arduous administrative challenge.",
        "explanation": "'Clearing' is a gerund heading the phrase that serves as the noun subject of the main verb 'proved'."
    },
    {
        "question": "Identify the precise grammatical function of the gerund phrase in: 'The executive committee strongly recommends suspending all non-essential travel protocols.'",
        "options": ["Subject", "Direct Object", "Predicate Nominative", "Appositive"],
        "answer": "Direct Object",
        "explanation": "The gerund phrase 'suspending all non-essential travel protocols' serves as the direct object of the transitive verb 'recommends'."
    },
    {
        "question": "In the strategic proposal, 'Our immediate operational priority is optimizing the supply chain grid', the verbal 'optimizing' functions as a/an:",
        "options": ["Participle modifying priority", "Gerund functioning as a Predicate Nominative", "Action verb in the progressive aspect", "Gerund functioning as an Object Complement"],
        "answer": "Gerund functioning as a Predicate Nominative",
        "explanation": "'Optimizing' is a gerund that renames the subject 'priority' after the linking verb 'is'; it is not a progressive verb because the subject itself is not conducting the physical act of optimizing."
    },
    {
        "question": "Analyze the function of the bolded phrase: '**Implementing strict fiscal discipline** saved the local municipality from corporate bankruptcy.'",
        "options": ["Gerund Phrase acting as Subject", "Participial Phrase acting as Adjective", "Noun Clause acting as Subject", "Infinitive Phrase acting as Adverb"],
        "answer": "Gerund Phrase acting as Subject",
        "explanation": "The entire phrase functions as the singular noun subject that initiates the action of the verb 'saved'."
    },
    {
        "question": "Which of the following sentences utilizes the verbal form 'monitoring' as a traditional participle adjective rather than a nominal gerund?",
        "options": [
            "Monitoring compliance guidelines is a key responsibility of the unit.",
            "The division dedicated its entire budget to automated monitoring.",
            "The team introduced new software for monitoring network security.",
            "The monitoring committee submitted its final evaluation report to the board."
        ],
        "answer": "The monitoring committee submitted its final evaluation report to the board.",
        "explanation": "In this specific instance, 'monitoring' directly modifies the noun 'committee', classifying it as a participial adjective, not a gerund."
    },
    {
        "question": "Identify the function of the gerund phrase in: 'The team succeeded by integrating automated scripts into the system grid.'",
        "options": ["Direct Object", "Object of a Preposition", "Subject Complement", "Appositive"],
        "answer": "Object of a Preposition",
        "explanation": "The gerund phrase follows the preposition 'by', making it the object of the preposition used to denote the manner of success."
    },
    {
        "question": "In the corporate memorandum, 'Her primary administrative duty, evaluating field performance reports, requires extensive travel', the gerund phrase functions as a/an:",
        "options": ["Direct Object", "Predicate Nominative", "Appositive Phrase", "Objective Complement"],
        "answer": "Appositive Phrase",
        "explanation": "The gerund phrase 'evaluating field performance reports' sits adjacent to the noun 'duty' to explain and rename it, separated by commas, making it an appositive."
    },
    {
        "question": "What is the structural function of the gerund phrase in: 'The council found themselves accused of violating administrative transparency laws.'",
        "options": ["Subject Complement", "Object of the Preposition", "Direct Object of accused", "Adverbial Modifier"],
        "answer": "Object of the Preposition",
        "explanation": "The gerund phrase acts as the object of the preposition 'of' which anchors the descriptive prepositional phrase."
    },
    {
        "question": "Which word in the following legal text does NOT function as a noun format? 'The administrative checking of the liquidation records requires absolute concentration.'",
        "options": ["checking", "liquidation", "concentration", "requires"],
        "answer": "requires",
        "explanation": "'Requires' acts as the principal finite operational verb of the sentence, whereas 'checking' is a verbal noun, 'liquidation' is a noun adjunct, and 'concentration' is an abstract noun."
    },
    {
        "question": "Examine the verbal 'working' in the phrase: 'The working group drafted a comprehensive framework.' Is it a gerund?",
        "options": [
            "Yes, because it represents an ongoing administrative activity.",
            "No, it is a participial adjective modifying the head noun 'group'.",
            "No, it functions as the primary operational verb of the phrase.",
            "Yes, it acts as the direct object of the adjective 'advanced'."
        ],
        "answer": "No, it is a participial adjective modifying the head noun 'group'.",
        "explanation": "Because 'working' characterizes the descriptive status of the noun 'group' rather than naming an independent activity, it acts as a participle adjective."
    },

    // 21-30: Advanced Compound Nouns (Morphology & Pluralization)
    {
        "question": "Which of the following corporate or legal compound terms represents a solid, closed compound noun?",
        "options": ["boardroom", "master plan", "trade-off", "point of view"],
        "answer": "boardroom",
        "explanation": "'Boardroom' is morphologically classified as a closed or solid compound noun because its constituent roots are fused without spaces or hyphens."
    },
    {
        "question": "Select the option that represents a structurally sound hyphenated compound noun used in public governance:",
        "options": ["memorandum of agreement", "undersecretary-general", "procurement officer", "data center"],
        "answer": "undersecretary-general",
        "explanation": "'Undersecretary-general' utilizes a hyphen to link its constituent descriptive title roots, making it a hyphenated compound noun."
    },
    {
        "question": "Which compound noun formatting is categorized as an open or spaced compound noun configuration?",
        "options": ["headquarters", "warrant officer", "self-assessment", "database"],
        "answer": "warrant officer",
        "explanation": "'Warrant officer' is an open compound noun because it acts as a single semantic noun unit but retains a space between its words."
    },
    {
        "question": "What is the professionally accurate plural form of the official hyphenated compound title 'editor-in-chief'?",
        "options": ["editor-in-chiefs", "editors-in-chief", "editors-in-chiefs", "editor-ins-chief"],
        "answer": "editors-in-chief",
        "explanation": "To pluralize a complex compound noun linked by prepositions, apply the plural inflectional suffix to the principal base head noun ('editors')."
    },
    {
        "question": "Identify the correct plural form of the compound entity 'passer-by' under modern lexicographical standards:",
        "options": ["passer-bys", "passers-by", "passers-bys", "passer-bies"],
        "answer": "passers-by",
        "explanation": "The pluralizing suffix must attach to the principal noun component ('passer') rather than the modifying prepositional adverb ('by')."
    },
    {
        "question": "The department ordered three ________ of chemical solution to properly calibrate the water testing systems.",
        "options": ["bucketfuls", "bucketsful", "bucketsfuls", "bucket-fuls"],
        "answer": "bucketfuls",
        "explanation": "Noun structures terminating in the suffix '-ful' represent total measurement quantities and take their plural inflection at the very end of the word ('bucketfuls')."
    },
    {
        "question": "Choose the legally flawless plural form of the legal administrative designation 'attorney-at-law':",
        "options": ["attorney-at-laws", "attorneys-at-law", "attorneys-at-laws", "attorneys-at-the-law"],
        "answer": "attorneys-at-law",
        "explanation": "The primary semantic noun asset is 'attorney', so it must absorb the pluralizing token, yielding 'attorneys-at-law'."
    },
    {
        "question": "The newly established government committee requires the joint presence of all regional ________.",
        "options": ["chiefs of staff", "chief of staffs", "chiefs of staffs", "chieves of staff"],
        "answer": "chiefs of staff",
        "explanation": "The word 'chief' is the principal head noun within this complex phrasal title structure, requiring it to take the plural marker 's'."
    },
    {
        "question": "Which of the following words is a morphological compound noun that combines two independent noun roots to form a single financial concept?",
        "options": ["shareholder", "investment", "liquidate", "profitable"],
        "answer": "shareholder",
        "explanation": "'Shareholder' fuses two distinct nouns ('share' + 'holder') to express a unified commercial entity, making it a compound noun."
    },
    {
        "question": "Select the correct plural configuration for the technical equipment term 'go-between' when referring to multiple intermediaries:",
        "options": ["goes-between", "go-betweens", "goes-betweens", "go-betweenes"],
        "answer": "go-betweens",
        "explanation": "Because 'go-between' does not contain an explicit base noun root (it is made of a verb and adverb), the plural 's' must be affixed to the final component."
    },

    // 31-40: Appositives (Essential vs. Non-Essential & Case Alignment)
    {
        "question": "Identify the full appositive phrase in the following executive decree: 'The main administrative building, a historical landmark from the post-war era, will undergo intensive preservation.'",
        "options": [
            "The main administrative building",
            "a historical landmark from the post-war era",
            "will undergo intensive preservation",
            "historical landmark"
        ],
        "answer": "a historical landmark from the post-war era",
        "explanation": "The entire phrase stands next to the main subject noun to explain and rename it, defining its identity as an appositive phrase."
    },
    {
        "question": "In the administrative clause 'The committee consulted Dr. Alcaraz, the senior internal auditor, before finalizing the fiscal balance sheets', the phrase 'the senior internal auditor' is a/an:",
        "options": ["Adjective Clause", "Appositive Phrase", "Adverbial Modifier", "Objective Complement"],
        "answer": "Appositive Phrase",
        "explanation": "It functions as a non-essential appositive phrase because it renames and clarifies the identity of the adjacent proper noun, 'Dr. Alcaraz'."
    },
    {
        "question": "Which of the following options displays the correct punctuation layout for a sentence containing a non-essential appositive?",
        "options": [
            "The division manager Mr. Santos reviewed the procurement logs.",
            "The division manager, Mr. Santos, reviewed the procurement logs.",
            "The division manager Mr. Santos, reviewed the procurement logs.",
            "The division manager, Mr. Santos reviewed the procurement logs."
        ],
        "answer": "The division manager, Mr. Santos, reviewed the procurement logs.",
        "explanation": "When an appositive is non-essential (meaning the sentence's primary meaning remains intact without it), it must be set off on both sides by punctuation commas."
    },
    {
        "question": "Identify the core appositive noun in: 'The board members interviewed the finalist, the prominent industrial architect, yesterday afternoon.'",
        "options": ["members", "finalist", "architect", "afternoon"],
        "answer": "architect",
        "explanation": "'Architect' is the central noun within the appositive phrase that directly corresponds to and renames the object noun 'finalist'."
    },
    {
        "question": "What is the structural purpose of an appositive within high-level administrative or legal writing?",
        "options": [
            "To qualify the manner or speed of an action verb.",
            "To rename, identify, or restrict the meaning of an adjacent noun asset.",
            "To indicate the tense, aspect, or mood of a predicate structure.",
            "To connect dependent conditional clauses to parent statements."
        ],
        "answer": "To rename, identify, or restrict the meaning of an adjacent noun asset.",
        "explanation": "Appositives serve nominal functions by providing supplementary identification or critical context to nearby nouns."
    },
    {
        "question": "Non-essential (restrictive) and non-restrictive appositives differ fundamentally because non-restrictive appositives always require:",
        "options": ["Parenthetical hyphens", "Punctuation commas", "Semicolon breaks", "Prepositional prefixes"],
        "answer": "Punctuation commas",
        "explanation": "Non-restrictive appositives add non-essential info and must be isolated from the main clause using commas."
    },
    {
        "question": "Find the entire appositive structure in: 'The delegation visited Toledo, the mining hub of the central province, to verify the resource logs.'",
        "options": ["The delegation visited", "Toledo", "the mining hub of the central province", "to verify the resource logs"],
        "answer": "the mining hub of the central province",
        "explanation": "This entire noun phrase renames and describes the proper noun city 'Toledo'."
    },
    {
        "question": "Analyze the restriction property: 'The acclaimed legal scholar Joaquin Laurel authored the constitutional critique.' (Assume there are multiple acclaimed legal scholars). Is the name essential?",
        "options": [
            "Yes, it is an essential restrictive appositive and must not be enclosed in commas.",
            "No, it is non-essential and requires commas because the title is specific.",
            "Yes, because it functions as the primary predicate verb modifier.",
            "No, because proper nouns are inherently non-restrictive in all structures."
        ],
        "answer": "Yes, it is an essential restrictive appositive and must not be enclosed in commas.",
        "explanation": "Because there are multiple scholars, the specific name 'Joaquin Laurel' is absolutely essential to restrict the identity to the exact scholar being discussed. No commas should be used."
    },
    {
        "question": "Analyze the restriction property: 'My eldest daughter, Maria, handles our real estate portfolio.' (Assume I have only one eldest daughter). Is the appositive name essential?",
        "options": [
            "Yes, because names always act as essential identifiers.",
            "No, it is non-essential (non-restrictive) because 'eldest daughter' already uniquely identifies the individual.",
            "Yes, because it alters the absolute tense value of the predicate.",
            "No, because it functions as a direct object complement to portfolio."
        ],
        "answer": "No, it is non-essential (non-restrictive) because 'eldest daughter' already uniquely identifies the individual.",
        "explanation": "Since the phrase 'my eldest daughter' can only refer to one unique person, her actual name 'Maria' is extra, non-essential details and must be framed with commas."
    },
    {
        "question": "In the administrative finding 'The hazardous compound, a volatile sulfur derivative, leaked from the storage tank', the noun 'derivative' is structured as a/an:",
        "options": ["Subject Complement", "Objective Complement", "Appositive Noun", "Adverbial Adjunct"],
        "answer": "Appositive Noun",
        "explanation": "'Derivative' is the head noun of the appositive phrase that clarifies and renames the identity of the subject 'compound'."
    },

    // 41-50: Noun Clauses (Syntactic Analysis & Advanced Connectors)
    {
        "question": "Identify the complete noun clause in the following legal deposition: 'The internal audit team verified that the financial records had been systematically altered.'",
        "options": [
            "The internal audit team verified",
            "that the financial records had been systematically altered",
            "the financial records had been altered",
            "had been systematically altered"
        ],
        "answer": "that the financial records had been systematically altered",
        "explanation": "The entire clause introduced by the subordinating conjunction 'that' acts as a single noun entity serving as the direct object of 'verified'."
    },
    {
        "question": "Determine the exact grammatical function of the noun clause in: 'Whoever drafted the structural blueprint overlooked the regional zoning guidelines.'",
        "options": ["Subject of the sentence", "Direct Object of the verb", "Predicate Nominative", "Object of a Preposition"],
        "answer": "Subject of the sentence",
        "explanation": "The entire relative noun clause 'Whoever drafted the structural blueprint' acts collectively as the singular subject that executes the action of the main verb 'overlooked'."
    },
    {
        "question": "Identify the noun clause and its function in this administrative text: 'The award will be conferred upon whoever demonstrates exceptional leadership traits.'",
        "options": [
            "Clause: 'The award will be' | Function: Subject",
            "Clause: 'whoever demonstrates exceptional leadership traits' | Function: Object of a Preposition",
            "Clause: 'exceptional leadership traits' | Function: Direct Object",
            "Clause: 'whoever demonstrates' | Function: Subject Complement"
        ],
        "answer": "Clause: 'whoever demonstrates exceptional leadership traits' | Function: Object of a Preposition",
        "explanation": "The clause is the object of the preposition 'upon'. Note that 'whoever' is used because it acts as the subject within its own clause."
    },
    {
        "question": "Which of the following introductory words commonly signals the presence of a dependent noun clause rather than a relative adjective clause?",
        "options": ["because", "whether", "although", "which (modifying an item)"],
        "answer": "whether",
        "explanation": "'Whether' is a subordinating connector that introduces alternative conditions within noun clauses (e.g., 'I do not know whether he will attend')."
    },
    {
        "question": "If you replace the bolded noun clause with a simple pronoun, which option preserves the structural integrity? 'The director understands **how the automated system processes the logs**.'",
        "options": [
            "The director understands him.",
            "The director understands it.",
            "The director understands there.",
            "The director understands them."
        ],
        "answer": "The director understands it.",
        "explanation": "Because noun clauses function exactly like singular nouns or object pronouns, the clause can be completely swapped with the abstract objective pronoun 'it'."
    },
    {
        "question": "What is the structural function of the noun clause in the following legal resolution? 'The final consensus of the adjudication panel is that the contract must be voided.'",
        "options": ["Subject", "Direct Object", "Predicate Nominative", "Appositive Phrase"],
        "answer": "Predicate Nominative",
        "explanation": "The clause 'that the contract must be voided' follows the main linking verb 'is' and renames the absolute subject 'consensus', making it a predicate nominative."
    },
    {
        "question": "Analyze the bracketed clause: 'The senior official [who coordinates the trade program] signed the clearance.' Is this a noun clause?",
        "options": [
            "Yes, it acts as the direct object of the subject 'official'.",
            "No, it is an Adjective (Relative) Clause modifying the head noun 'official'.",
            "No, it functions as an Adverbial Clause showing conditional action.",
            "Yes, it is a Predicate Nominative following a silent linking asset."
        ],
        "answer": "No, it is an Adjective (Relative) Clause modifying the head noun 'official'.",
        "explanation": "Because the clause 'who coordinates the trade program' describes and limits the noun 'official', it serves an adjectival function, not a nominal one."
    },
    {
        "question": "In the administrative report, 'The board wondered why the procurement phase experienced a delay', the dependent noun clause functions as the:",
        "options": ["Subject", "Direct Object", "Indirect Object", "Subject Complement"],
        "answer": "Direct Object",
        "explanation": "The clause answers the question 'what did the board wonder?', making it the direct object of the mental action transitive verb 'wondered'."
    },
    {
        "question": "A noun clause introduced by the conjunction 'that' typically follows verbs that express which specific cognitive property?",
        "options": ["Physical kinetic force", "Mental states, beliefs, or assertions", "Temporal progression or duration", "Spatial location changes"],
        "answer": "Mental states, beliefs, or assertions",
        "explanation": "Verbs of cognition, speech, or belief (e.g., 'maintain that', 'believe that', 'state that') naturally accept noun clauses as their direct objects."
    },
    {
        "question": "Analyze the complex sentence structure: 'What the civil service commission mandates must be executed without delay.' Which statement is true?",
        "options": [
            "The term 'What' is the sole subject of the sentence.",
            "The entire clause 'What the civil service commission mandates' is the subject.",
            "The noun phrase 'civil service commission' is the global subject.",
            "The clause acts as an adverbial modifier to the verb 'executed'."
        ],
        "answer": "The entire clause 'What the civil service commission mandates' is the subject.",
        "explanation": "The entire clausal block functions as a unified nominal entity that sits before the auxiliary verb cluster 'must be executed' as its global subject."
    }
]
};
