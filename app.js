// ==========================================
// 1. TOPICS DATA
// ==========================================
const VERBAL_TOPICS = [
  { id: "nouns",                 label: "Nouns" },
  { id: "gender",                label: "Gender" },
  { id: "grammatical_number",    label: "Grammatical Number" },
  { id: "verbs",                 label: "Verbs" },
  { id: "tenses",                label: "Tenses" },
  { id: "pronouns",              label: "Pronouns" },
  { id: "adjectives",            label: "Adjectives" },
  { id: "adverbs",               label: "Adverbs" },
  { id: "prepositions",          label: "Prepositions" },
  { id: "conjunctions",          label: "Conjunctions" },
  { id: "interjections",         label: "Interjections" },
  { id: "articles",              label: "Articles" },
  { id: "subject_verb_agreement", label: "Subject–Verb Agreement" },
  { id: "sentence_construction",  label: "Sentence Construction" },
  { id: "sentence_structure",     label: "Sentence Structure" },
  // Other Verbal Ability topics
  { id: "affixes",               label: "Affixes" },
  { id: "punctuations",          label: "Punctuations" },
  { id: "correct_usage",         label: "Correct Usage" },
  { id: "error_identification",  label: "Error Identification" },
  { id: "synonyms",              label: "Synonyms" },
  { id: "antonyms",              label: "Antonyms" },
  { id: "analogy",               label: "Analogy" },
  { id: "paragraph_organization", label: "Paragraph Organization" },
  { id: "reading_comprehension",  label: "Reading Comprehension" }
];

// ==========================================
// 2. LESSONS DATA
// ==========================================
const LESSONS = {
  nouns: {
    title: "Nouns – Basics & Types",
    level: "All levels · CSE Verbal Ability",
    intro: "A noun is a word that names a person, place, thing, or idea. In the CSE, questions often test noun types, singular/plural forms, and usage.",
    keyPoints: [
      "A noun names a person (teacher), place (city), thing (book), or idea (freedom).",
      "Common nouns are general; Proper nouns are specific (capitalized).",
      "Concrete nouns are tangible; Abstract nouns are ideas/feelings.",
      "Countable nouns have plurals; Uncountable nouns usually don't.",
      "Collective nouns refer to groups (team, family) and can be singular or plural."
    ],
    patterns: [
      "Identify noun types (common vs proper, concrete vs abstract).",
      "Select correct singular/plural forms.",
      "Subject-verb agreement with collective nouns."
    ],
    examples: [
      {
        q: "Which is a proper noun?",
        choices: ["city", "teacher", "Manila", "river"],
        answer: "Manila",
        explanation: "It names a specific city and is capitalized."
      }
    ],
    quickTips: [
      "Check capitalization for proper nouns.",
      "Memorize uncountable nouns (furniture, information, equipment)."
    ]
  },

  gender: {
    title: "Gender of Nouns & Pronouns",
    level: "Verbal Ability · Nouns · Gender",
    intro: "Gender in English grammar classifies nouns as Masculine, Feminine, Common, or Neuter. This is crucial for pronoun-antecedent agreement.",
    keyPoints: [
      "Masculine: Refers to males (king, uncle, rooster). Pronoun: he/him.",
      "Feminine: Refers to females (queen, aunt, hen). Pronoun: she/her.",
      "Common: Either male or female (teacher, doctor, cousin, student).",
      "Neuter: Things, ideas, places (table, city, happiness). Pronoun: it/its.",
      "Collective Nouns (team, jury): Often treated as Neuter (it) in formal US English.",
      "Modern Usage: 'They/Their' is widely accepted as singular gender-neutral."
    ],
    patterns: [
      "Choosing the correct feminine/masculine pair (e.g., ram–ewe).",
      "Pronoun agreement errors (e.g., 'The bride thanked his parents' = Error).",
      "Identifying Common vs. Neuter nouns.",
      "Selecting gender-neutral terms (firefighter vs fireman)."
    ],
    examples: [
      {
        q: "Which noun is COMMON gender?",
        choices: ["King", "Actress", "Teacher", "Mother"],
        answer: "Teacher",
        explanation: "Teacher can be male or female."
      },
      {
        q: "The manager said that ____ would review the report.",
        choices: ["he", "she", "he or she", "they"],
        answer: "he or she / they",
        explanation: "For common nouns, 'he or she' is formal; 'they' is modern standard."
      }
    ],
    quickTips: [
      "If a noun is a thing/idea, it's Neuter.",
      "If a profession doesn't specify sex, it's Common.",
      "Watch out for 'The nurse lost his...' (Grammatically correct if nurse is male).",
      "Animals are often 'it' unless the sex is highlighted (bull/cow)."
    ]
  }
};

// ==========================================
// 3. QUESTION BANK (50 Items per Level for Gender)
// ==========================================
const GENDER_QUESTIONS = {
  beginner: [
    // 1-10
    { question: "Which noun is MASCULINE gender?", choices: ["A. queen", "B. mother", "C. king", "D. sister"], correctIndex: 2, explanation: "King is a male ruler." },
    { question: "Which noun is FEMININE gender?", choices: ["A. uncle", "B. actor", "C. lioness", "D. husband"], correctIndex: 2, explanation: "Lioness is the female lion." },
    { question: "Which noun is COMMON gender?", choices: ["A. girl", "B. doctor", "C. table", "D. queen"], correctIndex: 1, explanation: "Doctor can be male or female." },
    { question: "Which noun is NEUTER gender?", choices: ["A. aunt", "B. driver", "C. school", "D. nephew"], correctIndex: 2, explanation: "School is a place/thing." },
    { question: "What is the FEMININE form of 'actor'?", choices: ["A. actress", "B. actrice", "C. actora", "D. actrix"], correctIndex: 0, explanation: "Actress is the traditional feminine form." },
    { question: "What is the MASCULINE form of 'princess'?", choices: ["A. prince", "B. king", "C. duke", "D. emperor"], correctIndex: 0, explanation: "Prince matches Princess." },
    { question: "Which pair is correct?", choices: ["A. nephew – niece", "B. niece – nun", "C. king – prince", "D. husband – bride"], correctIndex: 0, explanation: "Nephew (male) and Niece (female)." },
    { question: "Which noun is FEMININE?", choices: ["A. widower", "B. bridegroom", "C. bride", "D. monk"], correctIndex: 2, explanation: "Bride is a woman about to be married." },
    { question: "Which noun is COMMON gender?", choices: ["A. engineer", "B. policeman", "C. waitress", "D. queen"], correctIndex: 0, explanation: "Engineer is a profession for any gender." },
    { question: "Which noun is NEUTER?", choices: ["A. hero", "B. mother", "C. computer", "D. waitress"], correctIndex: 2, explanation: "Computer is an object." },
    // 11-20
    { question: "Feminine of 'lion'?", choices: ["A. lioness", "B. lionette", "C. tigress", "D. she-lion"], correctIndex: 0, explanation: "Lioness." },
    { question: "Which noun is MASCULINE?", choices: ["A. mare", "B. ewe", "C. stallion", "D. hen"], correctIndex: 2, explanation: "Stallion is a male horse." },
    { question: "Which noun is FEMININE?", choices: ["A. widower", "B. wizard", "C. actress", "D. bachelor"], correctIndex: 2, explanation: "Actress." },
    { question: "Which noun is COMMON?", choices: ["A. nurse", "B. aunt", "C. king", "D. bride"], correctIndex: 0, explanation: "Nurse can be male or female." },
    { question: "Which noun is NEUTER?", choices: ["A. river", "B. father", "C. queen", "D. actress"], correctIndex: 0, explanation: "River is an inanimate thing." },
    { question: "Feminine of 'host'?", choices: ["A. hostess", "B. hoster", "C. hostress", "D. hostlady"], correctIndex: 0, explanation: "Hostess." },
    { question: "Masculine of 'nun'?", choices: ["A. monk", "B. priestess", "C. sister", "D. lady"], correctIndex: 0, explanation: "Monk." },
    { question: "Sentence with NEUTER subject?", choices: ["A. The queen spoke.", "B. The teacher asked.", "C. The table broke.", "D. The waiter served."], correctIndex: 2, explanation: "Table is neuter." },
    { question: "Which noun is COMMON?", choices: ["A. child", "B. niece", "C. queen", "D. tiger"], correctIndex: 0, explanation: "Child is unspecified gender." },
    { question: "Which noun is FEMININE?", choices: ["A. emperor", "B. empress", "C. duke", "D. host"], correctIndex: 1, explanation: "Empress." },
    // 21-30
    { question: "Which noun is MASCULINE?", choices: ["A. aunt", "B. bride", "C. father", "D. niece"], correctIndex: 2, explanation: "Father is male." },
    { question: "Which noun is FEMININE?", choices: ["A. uncle", "B. brother", "C. niece", "D. king"], correctIndex: 2, explanation: "Niece is female." },
    { question: "Which noun is COMMON?", choices: ["A. policeman", "B. actress", "C. reporter", "D. queen"], correctIndex: 2, explanation: "Reporter covers both genders." },
    { question: "Which noun is NEUTER?", choices: ["A. boy", "B. girl", "C. cupboard", "D. widow"], correctIndex: 2, explanation: "Cupboard is a thing." },
    { question: "Feminine of 'tiger'?", choices: ["A. tigress", "B. tigeress", "C. tigrina", "D. tigrette"], correctIndex: 0, explanation: "Tigress." },
    { question: "Masculine of 'cow'?", choices: ["A. bull", "B. ram", "C. stag", "D. drake"], correctIndex: 0, explanation: "Bull." },
    { question: "Correct pair?", choices: ["A. horse-duck", "B. rooster-hen", "C. lion-cow", "D. bull-mare"], correctIndex: 1, explanation: "Rooster (male) and Hen (female)." },
    { question: "Which noun is FEMININE?", choices: ["A. emperor", "B. prince", "C. empress", "D. drake"], correctIndex: 2, explanation: "Empress." },
    { question: "Which noun is NEUTER?", choices: ["A. mountain", "B. king", "C. niece", "D. uncle"], correctIndex: 0, explanation: "Mountain." },
    { question: "Which noun is COMMON?", choices: ["A. employee", "B. queen", "C. bride", "D. widower"], correctIndex: 0, explanation: "Employee." },
    // 31-40
    { question: "Which noun is MASCULINE?", choices: ["A. mare", "B. nun", "C. stallion", "D. goose"], correctIndex: 2, explanation: "Stallion." },
    { question: "Which noun is FEMININE?", choices: ["A. monk", "B. nun", "C. wizard", "D. widower"], correctIndex: 1, explanation: "Nun." },
    { question: "Which noun is NEUTER?", choices: ["A. pencil", "B. father", "C. bridegroom", "D. host"], correctIndex: 0, explanation: "Pencil." },
    { question: "Which noun is COMMON?", choices: ["A. cousin", "B. widow", "C. king", "D. queen"], correctIndex: 0, explanation: "Cousin." },
    { question: "Feminine of 'waiter'?", choices: ["A. waiteress", "B. waitrix", "C. waitress", "D. waitlady"], correctIndex: 2, explanation: "Waitress." },
    { question: "Masculine of 'goose'?", choices: ["A. gander", "B. drake", "C. bull", "D. ram"], correctIndex: 0, explanation: "Gander." },
    { question: "Which noun is FEMININE?", choices: ["A. king", "B. husband", "C. bride", "D. uncle"], correctIndex: 2, explanation: "Bride." },
    { question: "Which noun is COMMON?", choices: ["A. officer", "B. duchess", "C. nun", "D. stallion"], correctIndex: 0, explanation: "Officer." },
    { question: "Which noun is NEUTER?", choices: ["A. flower", "B. actress", "C. sister", "D. king"], correctIndex: 0, explanation: "Flower." },
    { question: "Which noun is MASCULINE?", choices: ["A. niece", "B. aunt", "C. mare", "D. uncle"], correctIndex: 3, explanation: "Uncle." },
    // 41-50
    { question: "Correct pair?", choices: ["A. actor-princeness", "B. prince-princess", "C. lion-lionet", "D. host-hostman"], correctIndex: 1, explanation: "Prince and Princess." },
    { question: "Which noun is COMMON?", choices: ["A. singer", "B. queen", "C. empress", "D. nun"], correctIndex: 0, explanation: "Singer." },
    { question: "Which noun is NEUTER?", choices: ["A. city", "B. father", "C. niece", "D. bride"], correctIndex: 0, explanation: "City." },
    { question: "Which noun is FEMININE?", choices: ["A. tiger", "B. bull", "C. mare", "D. stag"], correctIndex: 2, explanation: "Mare (female horse)." },
    { question: "Which noun is MASCULINE?", choices: ["A. empress", "B. widow", "C. bride", "D. emperor"], correctIndex: 3, explanation: "Emperor." },
    { question: "Which noun is COMMON?", choices: ["A. guest", "B. bridegroom", "C. queen", "D. widow"], correctIndex: 0, explanation: "Guest." },
    { question: "Which noun is NEUTER?", choices: ["A. country", "B. actress", "C. mother", "D. uncle"], correctIndex: 0, explanation: "Country." },
    { question: "Feminine of 'wizard'?", choices: ["A. wizardess", "B. witch", "C. wizardine", "D. wizardette"], correctIndex: 1, explanation: "Witch." },
    { question: "Which noun is COMMON?", choices: ["A. neighbour", "B. duchess", "C. king", "D. bride"], correctIndex: 0, explanation: "Neighbour." },
    { question: "Which noun is NEUTER?", choices: ["A. idea", "B. daughter", "C. uncle", "D. widow"], correctIndex: 0, explanation: "Idea is abstract neuter." }
  ],

  intermediate: [
    // 1-10
    { question: "Which noun is COMMON in this list?", choices: ["A. widow", "B. husband", "C. parent", "D. queen"], correctIndex: 2, explanation: "Parent is mother or father." },
    { question: "Correct pair?", choices: ["A. duke-dutchess", "B. duke-duchess", "C. duke-princess", "D. duke-lady"], correctIndex: 1, explanation: "Duke and Duchess." },
    { question: "Which noun is NEUTER?", choices: ["A. mechanic", "B. professor", "C. building", "D. bride"], correctIndex: 2, explanation: "Building." },
    { question: "Feminine of 'prince'?", choices: ["A. princess", "B. princes", "C. princeess", "D. princesse"], correctIndex: 0, explanation: "Princess." },
    { question: "Masculine of 'niece'?", choices: ["A. nephew", "B. cousin", "C. uncle", "D. brother"], correctIndex: 0, explanation: "Nephew." },
    { question: "Which is a COMMON-GENDER job?", choices: ["A. fireman", "B. policeman", "C. firefighter", "D. chairman"], correctIndex: 2, explanation: "Firefighter is gender-neutral." },
    { question: "In 'female engineer', what is the gender of 'engineer'?", choices: ["A. feminine", "B. masculine", "C. common", "D. neuter"], correctIndex: 2, explanation: "Engineer is common; 'female' is just an adjective." },
    { question: "Which noun is MASCULINE?", choices: ["A. duchess", "B. widow", "C. bride", "D. groom"], correctIndex: 3, explanation: "Groom." },
    { question: "Which noun is FEMININE?", choices: ["A. landlord", "B. waiter", "C. hostess", "D. prince"], correctIndex: 2, explanation: "Hostess." },
    { question: "Correct use of 'it'?", choices: ["A. The teacher gave its instructions.", "B. The dog wagged its tail.", "C. The mother carried its baby.", "D. The king gave its speech."], correctIndex: 1, explanation: "Animals can be 'it'." },
    // 11-20
    { question: "Gender agreement error?", choices: ["A. The nurse forgot her bag.", "B. The king gave his orders.", "C. The bride wore his favorite dress.", "D. The actor thanked his audience."], correctIndex: 2, explanation: "Bride is female; should be 'her' dress." },
    { question: "Which noun is COMMON?", choices: ["A. manager", "B. daughter", "C. king", "D. stallion"], correctIndex: 0, explanation: "Manager." },
    { question: "Incorrect pair?", choices: ["A. king-queen", "B. husband-wife", "C. tiger-tigress", "D. rooster-duck"], correctIndex: 3, explanation: "Rooster pairs with Hen, not Duck." },
    { question: "Which noun is NEUTER?", choices: ["A. violin", "B. singer", "C. niece", "D. uncle"], correctIndex: 0, explanation: "Violin." },
    { question: "Gender-neutral for 'policeman'?", choices: ["A. policewoman", "B. officer", "C. policemen", "D. man"], correctIndex: 1, explanation: "Officer." },
    { question: "Traditional FEMININE of 'god'?", choices: ["A. bridegroom", "B. god", "C. goddess", "D. emperor"], correctIndex: 2, explanation: "Goddess." },
    { question: "Which noun is COMMON?", choices: ["A. baby", "B. queen", "C. bride", "D. empress"], correctIndex: 0, explanation: "Baby can be he or she." },
    { question: "Correct masculine match?", choices: ["A. The queen took his seat.", "B. The husband forgot her keys.", "C. The uncle said he would visit.", "D. The actress said he was nervous."], correctIndex: 2, explanation: "Uncle -> He." },
    { question: "Best gender-neutral option?", choices: ["A. Each student must bring his pen.", "B. Each student must bring her pen.", "C. Each student must bring his or her pen.", "D. Each student must bring their pen."], correctIndex: 3, explanation: "'Their' is widely accepted as singular neutral." },
    { question: "Which noun is NEUTER?", choices: ["A. democracy", "B. nephew", "C. waitress", "D. widow"], correctIndex: 0, explanation: "Democracy." },
    // 21-30
    { question: "Correct feminine usage?", choices: ["A. The king wore her crown.", "B. The queen gave her speech.", "C. The prince shared her thoughts.", "D. The emperor forgot her lines."], correctIndex: 1, explanation: "Queen -> Her." },
    { question: "Which noun is COMMON?", choices: ["A. widow", "B. head teacher", "C. prince", "D. bride"], correctIndex: 1, explanation: "Head teacher." },
    { question: "Gender of 'doctor' in 'She is a doctor'?", choices: ["A. feminine", "B. masculine", "C. common", "D. neuter"], correctIndex: 2, explanation: "The word 'doctor' is common gender." },
    { question: "Incorrect pair?", choices: ["A. landlord-landlady", "B. host-hostess", "C. uncle-aunt", "D. stag-ewe"], correctIndex: 3, explanation: "Stag (deer) pairs with Hind/Doe; Ewe pairs with Ram." },
    { question: "Correct use of 'its'?", choices: ["A. The river changed its course.", "B. The queen changed its clothes.", "C. The boy changed its shirt.", "D. The singer changed its song."], correctIndex: 0, explanation: "River -> It." },
    { question: "Which is common gender?", choices: ["A. the", "B. new", "C. manager", "D. none"], correctIndex: 2, explanation: "Manager." },
    { question: "Gender error?", choices: ["A. The prince greeted his guests.", "B. The bride thanked her parents.", "C. The queen forgot his lines.", "D. The host welcomed his audience."], correctIndex: 2, explanation: "Queen -> Her (not His)." },
    { question: "Neutral for 'businessman'?", choices: ["A. businesswoman", "B. businessperson", "C. businessgentleman", "D. businessmate"], correctIndex: 1, explanation: "Businessperson." },
    { question: "Neutral job title?", choices: ["A. mailman", "B. stewardess", "C. flight attendant", "D. chairman"], correctIndex: 2, explanation: "Flight attendant." },
    { question: "Which is NEUTER?", choices: ["A. machine", "B. finished", "C. its", "D. work"], correctIndex: 0, explanation: "Machine." },
    // 31-40
    { question: "Which noun is COMMON?", choices: ["A. pilot", "B. empress", "C. widow", "D. husband"], correctIndex: 0, explanation: "Pilot." },
    { question: "Grammatically correct?", choices: ["A. Every mother loves his children.", "B. Every father loves her children.", "C. Every father loves his children.", "D. Every mother loves its children."], correctIndex: 2, explanation: "Father -> His." },
    { question: "Unbiased job title?", choices: ["A. The fireman did his duty.", "B. The policewoman wrote her report.", "C. The firefighter did their duty.", "D. The chairman ended the meeting."], correctIndex: 2, explanation: "Firefighter + Their." },
    { question: "Gender of 'judge' in 'female judge'?", choices: ["A. feminine", "B. masculine", "C. common", "D. neuter"], correctIndex: 2, explanation: "Judge is common." },
    { question: "Correct pair?", choices: ["A. ram-ewe", "B. ram-hen", "C. ram-goose", "D. ram-mare"], correctIndex: 0, explanation: "Ram (sheep) and Ewe." },
    { question: "Avoiding gender specifics?", choices: ["A. If a driver is careless, he crashes.", "B. ...she crashes.", "C. ...he or she crashes.", "D. If a driver is careless, they will cause accidents."], correctIndex: 3, explanation: "They." },
    { question: "Which noun is NEUTER?", choices: ["A. honesty", "B. prince", "C. nun", "D. duchess"], correctIndex: 0, explanation: "Honesty." },
    { question: "Agreement error?", choices: ["A. The nun said her prayers.", "B. The monk said his prayers.", "C. The bridegroom thanked her parents.", "D. The widow shared her story."], correctIndex: 2, explanation: "Bridegroom -> His." },
    { question: "Common gender in 'Student thanked teacher'?", choices: ["A. student", "B. teacher", "C. both", "D. none"], correctIndex: 2, explanation: "Both are common." },
    { question: "Best neutral phrase?", choices: ["A. male nurse", "B. lady doctor", "C. women drivers", "D. healthcare worker"], correctIndex: 3, explanation: "Healthcare worker." },
    // 41-50
    { question: "Which noun is NEUTER?", choices: ["A. company", "B. actress", "C. nephew", "D. mother"], correctIndex: 0, explanation: "Company." },
    { question: "Correct 'its'?", choices: ["A. The team celebrated its victory.", "B. The mother celebrated its birthday.", "C. The actor forgot its lines.", "D. The bride lost its veil."], correctIndex: 0, explanation: "Team (collective) -> Its." },
    { question: "Most neutral?", choices: ["A. Each clerk bring his notebook.", "B. Each clerk bring her notebook.", "C. Each clerk bring his or her notebook.", "D. Each clerk must bring their notebook."], correctIndex: 3, explanation: "Their." },
    { question: "Which noun is COMMON?", choices: ["A. author", "B. empress", "C. queen", "D. nun"], correctIndex: 0, explanation: "Author." },
    { question: "Which noun is NEUTER?", choices: ["A. democracy", "B. princess", "C. uncle", "D. widow"], correctIndex: 0, explanation: "Democracy." },
    { question: "Correct pair?", choices: ["A. King and empress", "B. Emperor and duchess", "C. Emperor and empress", "D. Prince and widow"], correctIndex: 2, explanation: "Emperor and Empress." },
    { question: "Neutral job title?", choices: ["A. mailman", "B. chairman", "C. saleslady", "D. sales representative"], correctIndex: 3, explanation: "Sales representative." },
    { question: "Which noun is COMMON?", choices: ["A. leader", "B. queen", "C. husband", "D. actress"], correctIndex: 0, explanation: "Leader." },
    { question: "Which noun is NEUTER?", choices: ["A. ocean", "B. bride", "C. nun", "D. nephew"], correctIndex: 0, explanation: "Ocean." },
    { question: "Common gender list?", choices: ["A. boy, girl", "B. aunt, uncle", "C. parent, child", "D. king, queen"], correctIndex: 2, explanation: "Parent and Child." }
  ],

  advanced: [
    // 1-10
    { question: "Correct gender agreement?", choices: ["A. Every father wants the best for her children.", "B. Every mother wants the best for his children.", "C. Every father wants the best for his children.", "D. Every mother loves his child."], correctIndex: 2, explanation: "Father -> His." },
    { question: "Common gender here: 'The principal called the parents'?", choices: ["A. principal", "B. parents", "C. called", "D. parents'"], correctIndex: 0, explanation: "Principal is common." },
    { question: "Best neutral job title?", choices: ["A. The chairman... his", "B. The chairperson... their", "C. The chairlady... her", "D. The chairman... her"], correctIndex: 1, explanation: "Chairperson + Their." },
    { question: "Correct traditional pair?", choices: ["A. host-hostess", "B. host-hoster", "C. host-hostee", "D. host-hostrix"], correctIndex: 0, explanation: "Host-Hostess." },
    { question: "Correct formal common gender?", choices: ["A. The child forgot his or her bag.", "B. ...his bag (if she was careful).", "C. ...her bag (if he was careful).", "D. ...its bag."], correctIndex: 0, explanation: "His or her is formally safe." },
    { question: "Issue with 'The nurse said he would return'?", choices: ["A. Grammar error", "B. Stereotype expectation", "C. Nurse is neuter", "D. He is never used"], correctIndex: 1, explanation: "It is grammatically correct; any issue is social/stereotype." },
    { question: "Common noun with safe pronoun?", choices: ["A. If a student is late, he must report.", "B. ...she must report.", "C. ...he or she must report.", "D. ...it must report."], correctIndex: 2, explanation: "He or she matches 'student' formally." },
    { question: "Correct 'it' usage?", choices: ["A. The baby cried because it was hungry.", "B. The teacher graded its papers.", "C. The king gave its speech.", "D. The mother carried its child."], correctIndex: 0, explanation: "Baby can be 'it' if sex is unspecified." },
    { question: "Neuter but poetic 'she'?", choices: ["A. country", "B. captain", "C. sailor", "D. queen"], correctIndex: 0, explanation: "Country/Ship is neuter but poetically feminine." },
    { question: "Best unbiased sentence?", choices: ["A. Every manager... his", "B. Every manager... her", "C. Every manager... his or her", "D. Every manager should treat their staff fairly."], correctIndex: 3, explanation: "Their." },
    // 11-20
    { question: "Which noun is COMMON?", choices: ["A. widow", "B. bachelor", "C. teacher", "D. empress"], correctIndex: 2, explanation: "Teacher." },
    { question: "Incorrect match?", choices: ["A. bridegroom-bride", "B. husband-wife", "C. wizard-witch", "D. emperor-duchess"], correctIndex: 3, explanation: "Emperor pairs with Empress, not Duchess." },
    { question: "Agreement error?", choices: ["A. The queen... her", "B. The widow... her", "C. The prince thanked her parents.", "D. The bride... her"], correctIndex: 2, explanation: "Prince -> His." },
    { question: "Which noun is NEUTER?", choices: ["A. honesty", "B. host", "C. widow", "D. king"], correctIndex: 0, explanation: "Honesty." },
    { question: "Common gender context?", choices: ["A. The policeman issued his report.", "B. The actress thanked fans.", "C. The doctor examined the patient.", "D. The queen waved."], correctIndex: 2, explanation: "Doctor is common." },
    { question: "Traditional feminine noun?", choices: ["A. chairman", "B. waitress", "C. actor", "D. queen"], correctIndex: 1, explanation: "Waitress." },
    { question: "Singular 'they' usage?", choices: ["A. If an applicant is late, they may lose his chance.", "B. ...lose their chance.", "C. ...lose her chance.", "D. ...lose its chance."], correctIndex: 1, explanation: "They + Their." },
    { question: "Which noun is MASCULINE?", choices: ["A. mare", "B. goose", "C. nun", "D. drake"], correctIndex: 3, explanation: "Drake (male duck)." },
    { question: "Abstract NEUTER subject?", choices: ["A. Her bravery impressed the team.", "B. The king...", "C. The bride...", "D. The queen..."], correctIndex: 0, explanation: "Bravery." },
    { question: "Collective noun 'jury'?", choices: ["A. The jury gave its verdict.", "B. ...his verdict.", "C. ...her verdict.", "D. ...their verdict (each woman)."], correctIndex: 0, explanation: "Jury -> Its (as a unit)." },
    // 21-30
    { question: "Best unbiased sentence?", choices: ["A. Every clerk... his", "B. Every clerk... her", "C. Every clerk... his or her", "D. Every clerk should bring their folder."], correctIndex: 3, explanation: "Their." },
    { question: "Remove bias: 'The chairman will give his report'?", choices: ["A. Chairperson... his", "B. Chairperson... her", "C. The chair will give their report.", "D. Chairman... her"], correctIndex: 2, explanation: "Chair + Their." },
    { question: "Common gender + neutral pronoun?", choices: ["A. Student... he", "B. Student... she", "C. Student... he or she", "D. If a student is late, they must explain."], correctIndex: 3, explanation: "They." },
    { question: "Agreement error?", choices: ["A. Duchess... her", "B. Actor... his", "C. Emperor... his", "D. The prince apologized to her parents."], correctIndex: 3, explanation: "Prince -> His." },
    { question: "Correct 'it' for neuter?", choices: ["A. Teacher left its book", "B. Baby cried because it was hungry", "C. Queen... its", "D. Driver... its"], correctIndex: 1, explanation: "Baby -> It." },
    { question: "Best general rule?", choices: ["A. Leader... his", "B. Leader... her", "C. Leader... his or her", "D. A leader must give their followers instructions."], correctIndex: 3, explanation: "Their." },
    { question: "Which noun is COMMON?", choices: ["A. candidate", "B. must", "C. application", "D. submit"], correctIndex: 0, explanation: "Candidate." },
    { question: "Neutral job title?", choices: ["A. salesman", "B. saleslady", "C. sales representative... their", "D. sale man"], correctIndex: 2, explanation: "Sales representative." },
    { question: "Committee as neuter?", choices: ["A. Committee... his", "B. Committee... her", "C. The committee gave its opinion.", "D. Committee... their (individuals)"], correctIndex: 2, explanation: "Committee -> Its." },
    { question: "Formal unbiased?", choices: ["A. Lawyer... his", "B. Lawyer... her", "C. Lawyer... his or her", "D. A lawyer must keep their client's secrets."], correctIndex: 3, explanation: "Their." },
    // 31-40
    { question: "Neuter but poetic 'she'?", choices: ["A. ship", "B. actress", "C. bride", "D. queen"], correctIndex: 0, explanation: "Ship." },
    { question: "Matched pair?", choices: ["A. Emperor-Duchess", "B. Emperor-Empress", "C. Emperor-Widow", "D. Emperor-Niece"], correctIndex: 1, explanation: "Emperor-Empress." },
    { question: "Double common gender?", choices: ["A. Policeman-boy", "B. Actress-director", "C. The manager met the client.", "D. Bride-groom"], correctIndex: 2, explanation: "Manager and Client." },
    { question: "Inappropriate 'it'?", choices: ["A. Dog wagged tail", "B. Baby dropped toy", "C. The manager gave its decision.", "D. Company changed policy"], correctIndex: 2, explanation: "Manager (human adult) cannot be 'it'." },
    { question: "Neutral for 'stewardess'?", choices: ["A. Stewardess", "B. Hostess", "C. Flight attendant", "D. Air-lady"], correctIndex: 2, explanation: "Flight attendant." },
    { question: "Grammatically correct neutral?", choices: ["A. Student... he", "B. Student... she", "C. Student... he or she", "D. Every student thinks they are right."], correctIndex: 3, explanation: "They." },
    { question: "Avoid assuming nurse is female?", choices: ["A. Nurse... she", "B. Nurse... he", "C. The nurse said he or she would return.", "D. Nurse... it"], correctIndex: 2, explanation: "He or she." },
    { question: "Jury as neuter?", choices: ["A. Jury announced its verdict.", "B. ...his", "C. ...her", "D. ...their"], correctIndex: 0, explanation: "Its." },
    { question: "Gender error?", choices: ["A. Widow... her", "B. Widower... his", "C. Empress... her", "D. The bride thanked his parents."], correctIndex: 3, explanation: "Bride -> Her." },
    { question: "Neutral for 'someone'?", choices: ["A. Tell him", "B. Tell her", "C. Tell him or her", "D. If someone calls, tell them I am busy."], correctIndex: 3, explanation: "Them." },
    // 41-50
    { question: "Common gender?", choices: ["A. engineer", "B. driver", "C. both engineer and driver", "D. none"], correctIndex: 2, explanation: "Both." },
    { question: "Formal unbiased?", choices: ["A. Voter... his", "B. Voter... her", "C. Voter... his or her", "D. Each voter must cast their ballot."], correctIndex: 3, explanation: "Their." },
    { question: "Unnecessary gender marking?", choices: ["A. Lady doctor", "B. Male nurse", "C. The doctor examined the patient.", "D. Woman lawyer"], correctIndex: 2, explanation: "Doctor (no need for lady/male)." },
    { question: "Neuter nouns only?", choices: ["A. King/Queen", "B. The table and chair were moved.", "C. Nurse/Patient", "D. Waiter/Hostess"], correctIndex: 1, explanation: "Table and Chair." },
    { question: "Neutral for 'fireman'?", choices: ["A. Fireman", "B. Firewoman", "C. The firefighter checked their equipment.", "D. Firegentleman"], correctIndex: 2, explanation: "Firefighter." },
    { question: "Unbiased?", choices: ["A. Judge... his", "B. Judge... her", "C. Judge... his or her", "D. A judge must base their decision on law."], correctIndex: 3, explanation: "Their." },
    { question: "Neuter abstract noun?", choices: ["A. freedom", "B. citizen", "C. every", "D. important"], correctIndex: 0, explanation: "Freedom." },
    { question: "Singular 'they'?", choices: ["A. Each participant... their", "B. ...his", "C. ...her", "D. ...its"], correctIndex: 0, explanation: "Their." },
    { question: "Correct 'its'?", choices: ["A. Company... their", "B. The company changed its policy.", "C. Company... his", "D. Company... her"], correctIndex: 1, explanation: "Company -> Its." },
    { question: "Final check common gender?", choices: ["A. king", "B. uncle", "C. cousin", "D. rooster"], correctIndex: 2, explanation: "Cousin." }
  ],

  super: [
    // 1-10
    { question: "Most inclusive?", choices: ["A. Worker... his", "B. Worker... her", "C. Worker... his or her", "D. Every worker must follow their supervisor's instructions."], correctIndex: 3, explanation: "Their." },
    { question: "Remove bias 'Chairman... his'?", choices: ["A. Chair... his", "B. The chair announced their decision.", "C. Chairwoman... her", "D. Chairman... her"], correctIndex: 1, explanation: "Chair + Their." },
    { question: "Avoid unnecessary marking?", choices: ["A. Lady engineer", "B. Woman pilot", "C. The engineer inspected the bridge.", "D. Girl doctor"], correctIndex: 2, explanation: "Engineer (alone)." },
    { question: "Least appropriate formal?", choices: ["A. Sign their name", "B. Sign his or her name", "C. Sign his name", "D. Sign the applicant's name (repetitive)"], correctIndex: 3, explanation: "Repeating noun is awkward." },
    { question: "Staff as neuter?", choices: ["A. The staff gave its recommendation.", "B. ...his", "C. ...her", "D. ...their (plural)"], correctIndex: 0, explanation: "Staff -> Its (singular unit)." },
    { question: "Modern 'they'?", choices: ["A. Employee... he", "B. ...she", "C. ...he or she", "D. If an employee is late, they must explain."], correctIndex: 3, explanation: "They." },
    { question: "Avoid stereotype?", choices: ["A. Nurse... her", "B. Nurse... his", "C. The nurse put their tools away.", "D. Nurse... its"], correctIndex: 2, explanation: "Their." },
    { question: "Best neutral rewrite?", choices: ["A. Policeman... his", "B. Policewoman... her", "C. The officer must always help their community.", "D. Policeman/woman... his/her"], correctIndex: 2, explanation: "Officer + Their." },
    { question: "Neuter abstract subject?", choices: ["A. Justice demands fairness.", "B. Judge...", "C. Woman...", "D. King..."], correctIndex: 0, explanation: "Justice." },
    { question: "Serious error?", choices: ["A. Empress... her", "B. Emperor... his", "C. The bridegroom said her farewell.", "D. Bride... her"], correctIndex: 2, explanation: "Bridegroom -> His." },
    // 11-20
    { question: "Neutral marital status?", choices: ["A. Husband/Wife?", "B. Are you single or married?", "C. Widower/Widow?", "D. Bride/Groom?"], correctIndex: 1, explanation: "Single/Married applies to all." },
    { question: "Neutral for 'housewife'?", choices: ["A. Houseworker", "B. Homemaker", "C. Homewoman", "D. Houselady"], correctIndex: 1, explanation: "Homemaker." },
    { question: "Gov't guideline style?", choices: ["A. Taxpayer... his", "B. Taxpayer... her", "C. Taxpayer... his or her", "D. A taxpayer must file their return."], correctIndex: 3, explanation: "Their." },
    { question: "Avoid ref to sex?", choices: ["A. Male teacher", "B. Lady officer", "C. The teacher arrived late.", "D. Woman officer"], correctIndex: 2, explanation: "Teacher." },
    { question: "Company as neuter?", choices: ["A. The company increased its capital.", "B. ...their", "C. ...his", "D. ...her"], correctIndex: 0, explanation: "Its." },
    { question: "Policy statement?", choices: ["A. Manager... his", "B. Manager... her", "C. Manager... his or her", "D. Every manager must listen to their staff."], correctIndex: 3, explanation: "Their." },
    { question: "Critiqued 'they'?", choices: ["A. Each applicant must submit their documents.", "B. Workers... their", "C. Students... their", "D. Judges... their"], correctIndex: 0, explanation: "Some strict guides dislike singular 'they' with 'each', but it's common now." },
    { question: "Inappropriate label?", choices: ["A. Nurse", "B. The female nurse assisted.", "C. Doctor", "D. Nurse and doctor"], correctIndex: 1, explanation: "Female nurse is redundant/biased." },
    { question: "Avoid all labels?", choices: ["A. Chairman... his", "B. The chair thanked their committee.", "C. Chairwoman... her", "D. Chairman... her"], correctIndex: 1, explanation: "Chair + Their." },
    { question: "Least biased?", choices: ["A. Policeman... his", "B. Policewoman... her", "C. A police officer must obey their orders.", "D. Policeman/woman... his/her"], correctIndex: 2, explanation: "Officer + Their." },
    // 21-30
    { question: "Neuter abstract noun?", choices: ["A. Liberty... she", "B. Liberty is priceless; it cannot be bought.", "C. Liberty... he", "D. Liberty... they"], correctIndex: 1, explanation: "Liberty -> It." },
    { question: "Audience as collective neuter?", choices: ["A. Audience... his", "B. ...her", "C. The audience showed its appreciation.", "D. ...their"], correctIndex: 2, explanation: "Its." },
    { question: "Modern inclusive?", choices: ["A. Borrower... his", "B. ...her", "C. ...his or her", "D. Every borrower must return their book."], correctIndex: 3, explanation: "Their." },
    { question: "Avoid sex assumption?", choices: ["A. Lady guard", "B. Male guard", "C. The security guard checked bags.", "D. Man guard"], correctIndex: 2, explanation: "Security guard." },
    { question: "Least suitable official?", choices: ["A. The chairman and his staff...", "B. Chair... their", "C. Chairperson... their", "D. Chair and staff"], correctIndex: 0, explanation: "Chairman + His is biased." },
    { question: "Indefinite pronoun 'anybody'?", choices: ["A. Tell him", "B. Tell her", "C. Tell him or her", "D. If anybody calls, tell them to wait."], correctIndex: 3, explanation: "Them." },
    { question: "Parliament as neuter?", choices: ["A. ...his", "B. ...her", "C. Parliament expressed its opinion.", "D. ...their"], correctIndex: 2, explanation: "Its." },
    { question: "Concise neutral?", choices: ["A. Teacher... his", "B. Teacher... her", "C. Teacher... his or her", "D. A teacher should respect their students."], correctIndex: 3, explanation: "Their." },
    { question: "Organization as neuter?", choices: ["A. ...his", "B. ...her", "C. The organization revised its policy.", "D. ...their"], correctIndex: 2, explanation: "Its." },
    { question: "Final check common gender?", choices: ["A. nephew", "B. niece", "C. cousin", "D. duke"], correctIndex: 2, explanation: "Cousin." },
    // 31-40 (Fillers to ensure bank solidity - reusing concepts with new phrasing)
    { question: "Inclusive form?", choices: ["A. Every citizen -> his", "B. Every citizen -> her", "C. Every citizen -> their", "D. Every citizen -> his/her"], correctIndex: 2, explanation: "Their." },
    { question: "Which noun is COMMON?", choices: ["A. spouse", "B. husband", "C. wife", "D. groom"], correctIndex: 0, explanation: "Spouse." },
    { question: "Which noun is NEUTER?", choices: ["A. knowledge", "B. scholar", "C. teacher", "D. student"], correctIndex: 0, explanation: "Knowledge." },
    { question: "Correct pair?", choices: ["A. Fox - Vixen", "B. Fox - Cow", "C. Fox - Hen", "D. Fox - Doe"], correctIndex: 0, explanation: "Fox and Vixen." },
    { question: "Feminine of 'Administrator'?", choices: ["A. Administratress", "B. Administratrix", "C. Adminlady", "D. She-admin"], correctIndex: 1, explanation: "Administratrix (legal/formal)." },
    { question: "Masculine of 'Spinster'?", choices: ["A. Bachelor", "B. Groom", "C. Monk", "D. Widower"], correctIndex: 0, explanation: "Bachelor." },
    { question: "Which is NEUTER?", choices: ["A. Philippines", "B. Filipino", "C. Filipina", "D. Pinoy"], correctIndex: 0, explanation: "Philippines (country/place)." },
    { question: "Which is COMMON?", choices: ["A. sibling", "B. brother", "C. sister", "D. uncle"], correctIndex: 0, explanation: "Sibling." },
    { question: "Correct usage?", choices: ["A. The team lost their game.", "B. The team lost its game.", "C. Both A and B are acceptable.", "D. Neither."], correctIndex: 2, explanation: "Collective nouns can be singular (unit) or plural (members)." },
    { question: "Neutral for 'man-made'?", choices: ["A. synthetic / artificial", "B. woman-made", "C. human-made", "D. person-made"], correctIndex: 0, explanation: "Synthetic or artificial." },
    // 41-50
    { question: "Which is FEMININE?", choices: ["A. Czarina", "B. Czar", "C. King", "D. Earl"], correctIndex: 0, explanation: "Czarina." },
    { question: "Which is MASCULINE?", choices: ["A. Count", "B. Countess", "C. Baroness", "D. Nun"], correctIndex: 0, explanation: "Count." },
    { question: "Which is COMMON?", choices: ["A. relative", "B. aunt", "C. uncle", "D. niece"], correctIndex: 0, explanation: "Relative." },
    { question: "Which is NEUTER?", choices: ["A. bravery", "B. brave man", "C. heroine", "D. hero"], correctIndex: 0, explanation: "Bravery." },
    { question: "Gender of 'baby' if unknown?", choices: ["A. He", "B. She", "C. It", "D. They"], correctIndex: 2, explanation: "It (traditional) or They (modern)." },
    { question: "Masculine of 'Doe'?", choices: ["A. Buck", "B. Bull", "C. Ram", "D. Boar"], correctIndex: 0, explanation: "Buck (deer)." },
    { question: "Feminine of 'Boar'?", choices: ["A. Sow", "B. Cow", "C. Ewe", "D. Mare"], correctIndex: 0, explanation: "Sow (pig)." },
    { question: "Which is COMMON?", choices: ["A. therapist", "B. king", "C. queen", "D. prince"], correctIndex: 0, explanation: "Therapist." },
    { question: "Which is NEUTER?", choices: ["A. government", "B. governor", "C. governess", "D. mayor"], correctIndex: 0, explanation: "Government." },
    { question: "Final Item: Neutral pronoun?", choices: ["A. They", "B. He", "C. She", "D. It"], correctIndex: 0, explanation: "They is the standard neutral for people." }
  ]
};

// ==========================================
// 4. DOM / APP LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const modeTabs = document.querySelectorAll(".mode-tab");
  const modeSections = document.querySelectorAll(".mode-section");

  // Study Elements
  const topicsListEl = document.getElementById("topicsList");
  const lessonTitleEl = document.getElementById("lesson-title");
  const lessonMetaEl = document.getElementById("lesson-meta");
  const lessonContentEl = document.getElementById("lesson-content");

  // Practice Elements
  const practiceTopicEl = document.getElementById("practice-topic");
  const practiceLevelEl = document.getElementById("practice-level");
  const practiceCountEl = document.getElementById("practice-count");
  const timerModeEl = document.getElementById("timer-mode");
  const practiceWeakEl = document.getElementById("practice-weak");
  const startQuizBtn = document.getElementById("start-quiz-btn");

  // Quiz Active Elements
  const quizProgressEl = document.getElementById("quiz-progress");
  const quizTimerEl = document.getElementById("quiz-timer");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");
  const quizOutputEl = document.getElementById("quiz-output");
  const quizProgressFillEl = document.getElementById("quiz-progress-fill");

  // --- Tab Switching ---
  modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const mode = tab.dataset.mode;
      modeTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      modeSections.forEach((section) => {
        section.classList.toggle("active", section.id === `mode-${mode}`);
      });
    });
  });

  // --- Study Mode Logic ---
  function renderTopicsSidebar(activeId = "nouns") {
    if (!topicsListEl) return;
    topicsListEl.innerHTML = "";
    
    // Optional: Group by category? For now, flat list based on VERBAL_TOPICS
    const groupTitle = document.createElement("div");
    groupTitle.className = "topic-group-title";
    groupTitle.textContent = "Parts of Speech";
    topicsListEl.appendChild(groupTitle);

    const listContainer = document.createElement("div");
    listContainer.className = "topic-list";

    VERBAL_TOPICS.forEach(t => {
      const btn = document.createElement("button");
      btn.className = "topic-btn" + (t.id === activeId ? " active" : "");
      btn.textContent = t.label;
      btn.dataset.topic = t.id;
      btn.addEventListener("click", () => {
        renderTopicsSidebar(t.id);
        renderLesson(t.id);
      });
      listContainer.appendChild(btn);
    });
    topicsListEl.appendChild(listContainer);
  }

  function renderLesson(topicKey) {
    const data = LESSONS[topicKey];
    if (!data) {
      lessonTitleEl.textContent = "Coming soon";
      lessonMetaEl.textContent = "Content under development";
      lessonContentEl.innerHTML = "<p>This lesson is being updated. Please try <strong>Nouns</strong> or <strong>Gender</strong>.</p>";
      return;
    }

    lessonTitleEl.textContent = data.title;
    lessonMetaEl.textContent = data.level;
    
    let html = `<div class="lesson-section"><p>${data.intro}</p></div>`;

    if (data.keyPoints) {
      html += `<div class="lesson-section"><div class="lesson-section-title">Key Points</div><ul>${data.keyPoints.map(k=>`<li>${k}</li>`).join('')}</ul></div>`;
    }
    if (data.patterns) {
      html += `<div class="lesson-section"><div class="lesson-section-title">Exam Patterns</div><ul>${data.patterns.map(p=>`<li>${p}</li>`).join('')}</ul></div>`;
    }
    if (data.examples) {
      html += `<div class="lesson-section"><div class="lesson-section-title">Examples</div>`;
      data.examples.forEach(ex => {
        html += `<div class="lesson-example">
          <strong>Q:</strong> ${ex.q}<br>
          ${ex.choices ? `<em>Choices: ${ex.choices.join(', ')}</em><br>` : ''}
          <strong>Ans:</strong> ${ex.answer}<br>
          <small>${ex.explanation}</small>
        </div>`;
      });
      html += `</div>`;
    }
    if (data.quickTips) {
      html += `<div class="lesson-section"><div class="lesson-section-title">Quick Tips</div><ul>${data.quickTips.map(t=>`<li>${t}</li>`).join('')}</ul></div>`;
    }

    lessonContentEl.innerHTML = html;
  }

  // Init Sidebar
  renderTopicsSidebar("nouns");
  renderLesson("nouns");


  // --- Practice Mode Logic ---
  
  // Populate Select
  if (practiceTopicEl) {
    practiceTopicEl.innerHTML = "";
    VERBAL_TOPICS.forEach(topic => {
      // Only add if we actually have questions for it, or just add all
      // For now, we add all, but quiz will fail gracefully if no bank
      const opt = document.createElement("option");
      opt.value = topic.id;
      opt.textContent = topic.label;
      practiceTopicEl.appendChild(opt);
    });
    // Set default to Nouns or Gender
    practiceTopicEl.value = "nouns";
  }

  let quizState = null;

  function getQuestionBank(topic) {
    if (topic === "gender") return GENDER_QUESTIONS;
    // Placeholder for nouns if you have it, otherwise null
    if (topic === "nouns") return null; // Or add NOUNS_QUESTIONS here
    return null;
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function updateProgressFill(percentOverride) {
    if (!quizProgressFillEl) return;
    let pct = percentOverride;
    if (typeof pct !== 'number' && quizState) {
      pct = (quizState.currentIndex / quizState.questions.length) * 100;
    }
    quizProgressFillEl.style.width = `${Math.max(0, Math.min(100, pct || 0))}%`;
  }

  function updateStats() {
    if (!quizState) return;
    quizOutputEl.innerHTML = `
      <div class="stats-panel">
        <div class="stat-item"><span>Correct</span><span>${quizState.correct}</span></div>
        <div class="stat-item"><span>Incorrect</span><span>${quizState.incorrect}</span></div>
        <div class="stat-item"><span>Left</span><span>${quizState.questions.length - quizState.currentIndex}</span></div>
      </div>`;
  }

  function startTimer() {
    if (quizState.timerId) clearInterval(quizState.timerId);
    const mode = quizState.timerMode;
    if (mode === "off") {
      quizTimerEl.textContent = "Time: --";
      return;
    }
    
    quizState.timeLeft = parseInt(mode);
    quizTimerEl.textContent = `Time: ${quizState.timeLeft}s`;
    
    quizState.timerId = setInterval(() => {
      quizState.timeLeft--;
      quizTimerEl.textContent = `Time: ${quizState.timeLeft}s`;
      if (quizState.timeLeft <= 0) {
        clearInterval(quizState.timerId);
        handleTimeout();
      }
    }, 1000);
  }

  function showQuestion() {
    if (!quizState) return;
    const q = quizState.questions[quizState.currentIndex];
    quizState.answered = false;
    
    quizProgressEl.textContent = `Question ${quizState.currentIndex + 1} of ${quizState.questions.length}`;
    updateProgressFill();
    
    quizQuestionEl.textContent = q.question;
    quizChoicesEl.innerHTML = "";
    quizExplanationEl.classList.add("hide");
    quizNextBtn.classList.add("hide");

    q.choices.forEach((choice, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-choice";
      btn.textContent = choice;
      btn.addEventListener("click", () => handleAnswer(idx));
      quizChoicesEl.appendChild(btn);
    });

    updateStats();
    startTimer();
  }

  function handleAnswer(idx) {
    if (quizState.answered) return;
    quizState.answered = true;
    clearInterval(quizState.timerId);

    const q = quizState.questions[quizState.currentIndex];
    const btns = quizChoicesEl.querySelectorAll("button");

    if (idx === q.correctIndex) {
      quizState.correct++;
      btns[idx].classList.add("correct");
    } else {
      quizState.incorrect++;
      btns[idx].classList.add("incorrect");
      btns[q.correctIndex].classList.add("correct");
    }

    quizExplanationEl.textContent = q.explanation;
    quizExplanationEl.classList.remove("hide");
    
    quizNextBtn.textContent = (quizState.currentIndex < quizState.questions.length - 1) 
      ? "Next Question" : "See Results";
    quizNextBtn.classList.remove("hide");
    updateStats();
  }

  function handleTimeout() {
    if (quizState.answered) return;
    quizState.answered = true;
    
    const q = quizState.questions[quizState.currentIndex];
    const btns = quizChoicesEl.querySelectorAll("button");
    
    quizState.incorrect++;
    btns[q.correctIndex].classList.add("correct");
    
    quizExplanationEl.textContent = "Time's up! " + q.explanation;
    quizExplanationEl.classList.remove("hide");
    
    quizNextBtn.textContent = (quizState.currentIndex < quizState.questions.length - 1) 
      ? "Next Question" : "See Results";
    quizNextBtn.classList.remove("hide");
    updateStats();
  }

  startQuizBtn.addEventListener("click", () => {
    const topic = practiceTopicEl.value;
    const level = practiceLevelEl.value;
    const count = parseInt(practiceCountEl.value);
    const timer = timerModeEl.value;

    const bank = getQuestionBank(topic);
    if (!bank) {
      alert("Questions for this topic are not yet available (Only Gender is fully active).");
      return;
    }
    const pool = bank[level];
    if (!pool || pool.length === 0) {
      alert(`No questions found for ${level} level.`);
      return;
    }

    // Setup Quiz
    const selectedQuestions = shuffleArray(pool).slice(0, count);
    
    quizState = {
      questions: selectedQuestions,
      currentIndex: 0,
      correct: 0,
      incorrect: 0,
      timerMode: timer,
      timeLeft: 0,
      timerId: null,
      answered: false
    };

    // UI Transition
    startQuizBtn.disabled = true;
    practiceTopicEl.disabled = true;
    showQuestion();
  });

  quizNextBtn.addEventListener("click", () => {
    if (quizState.currentIndex < quizState.questions.length - 1) {
      quizState.currentIndex++;
      showQuestion();
    } else {
      // Finish
      updateProgressFill(100);
      quizQuestionEl.innerHTML = `<h3>Quiz Complete!</h3><p>Score: ${quizState.correct} / ${quizState.questions.length}</p>`;
      quizChoicesEl.innerHTML = "";
      quizExplanationEl.classList.add("hide");
      quizNextBtn.classList.add("hide");
      
      // Enable controls
      startQuizBtn.disabled = false;
      practiceTopicEl.disabled = false;
      
      // Restart button
      const restartBtn = document.createElement("button");
      restartBtn.className = "mode-btn active"; // re-use style
      restartBtn.style.marginTop = "20px";
      restartBtn.textContent = "Take Another Quiz";
      restartBtn.onclick = () => {
        quizQuestionEl.textContent = "Select settings to start.";
        restartBtn.remove();
      };
      quizChoicesEl.appendChild(restartBtn);
    }
  });
});
