// questions/gender.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["gender"] = {

  // ============================================================
  // LEVEL 1: BEGINNER (50 Items) - Basic Identification
  // ============================================================
  beginner: [
    // 1-10: Masculine
  {
        "question": "Which of the following nouns belongs strictly to the masculine gender?",
        "options": ["Beneficiary", "Chairman", "Liaison", "Colleague"],
        "answer": "Chairman",
        "explanation": "'Chairman' explicitly denotes a male presiding officer, while the other choices are gender-neutral or common nouns."
    },
    {
        "question": "Select the noun that represents a masculine counterpart in traditional legal and estate terms:",
        "options": ["Matriarch", "Executor", "Executrix", "Administrative Aide"],
        "answer": "Executor",
        "explanation": "'Executor' is the traditional masculine term for a person appointed to carry out a will, whereas 'executrix' is its feminine equivalent."
    },
    {
        "question": "Which of the following options refers to a male member of a religious or administrative order?",
        "options": ["Nun", "Abbess", "Friar", "Deaconess"],
        "answer": "Friar",
        "explanation": "'Friar' specifically refers to a male member of a religious order, making it a masculine noun."
    },
    {
        "question": "Identify the masculine noun often used in formal hereditary or corporate successions:",
        "options": ["Heiress", "Scion", "Benefactress", "Patroness"],
        "answer": "Scion",
        "explanation": "While 'scion' can be broad, in traditional formal gender pairs of inheritance, it aligns with a male descendant, distinct from feminine terms like 'heiress'."
    },
    {
        "question": "Which noun refers specifically to a male spouse or partner in formal domestic law?",
        "options": ["Consort", "Spouse", "Husband", "Dependent"],
        "answer": "Husband",
        "explanation": "'Husband' is a gender-specific masculine noun denoting a male partner in marriage."
    },
    {
        "question": "Select the masculine noun used to describe a male monarch or sovereign leader:",
        "options": ["Empress", "Dauphine", "Emperor", "Regent"],
        "answer": "Emperor",
        "explanation": "'Emperor' is the masculine title for a sovereign ruler of an empire."
    },
    {
        "question": "Which of the following terms is a masculine noun denoting a male graduate or former student?",
        "options": ["Alumna", "Alumnus", "Alumnae", "Alumni"],
        "answer": "Alumnus",
        "explanation": "'Alumnus' is the singular masculine form; 'alumna' is feminine, while 'alumni' is the plural form."
    },
    {
        "question": "Find the masculine noun among these specific occupational titles:",
        "options": ["Seamstress", "Hostess", "Steward", "Midwife"],
        "answer": "Steward",
        "explanation": "'Steward' is the masculine form for a person who manages property or provisions, whereas 'stewardess' or 'seamstress' are feminine."
    },
    {
        "question": "Which noun represents the masculine gender in formal social greetings?",
        "options": ["Gentleman", "Matron", "Duenna", "Mademoiselle"],
        "answer": "Gentleman",
        "explanation": "'Gentleman' is the formal masculine noun used to address or refer to a man."
    },
    {
        "question": "Select the masculine term from this list of specific family relations:",
        "options": ["Niece", "Nephew", "Cousin", "Sibling"],
        "answer": "Nephew",
        "explanation": "'Nephew' is a masculine noun referring to the son of one's sibling, whereas 'niece' is feminine."
    },

    // 11-20: Feminine Nouns (Professional & Social Contexts)
    {
        "question": "Which of the following terms is classified under the feminine gender?",
        "options": ["Proprietor", "Proprietress", "Ombudsman", "Commissioner"],
        "answer": "Proprietress",
        "explanation": "The suffix '-tress' in 'proprietress' explicitly indicates a female owner of a business property."
    },
    {
        "question": "Select the feminine noun that represents a female sovereign or ruler:",
        "options": ["Sultan", "Tzar", "Queen", "Marquis"],
        "answer": "Queen",
        "explanation": "'Queen' is the distinct feminine noun for a female monarch."
    },
    {
        "question": "Identify the feminine noun used in legal or official donor roles:",
        "options": ["Benefactor", "Benefactress", "Trustee", "Guarantor"],
        "answer": "Benefactress",
        "explanation": "'Benefactress' is the specific feminine noun for a woman who provides financial support or gifts."
    },
    {
        "question": "Which of the following nouns refers exclusively to a female sibling?",
        "options": ["Brother", "Sister", "Kinship", "Relative"],
        "answer": "Sister",
        "explanation": "'Sister' is the feminine noun for a female sibling sharing the same parentage."
    },
    {
        "question": "Find the feminine noun associated with a female head of a family or clan:",
        "options": ["Patriarch", "Matriarch", "Governor", "Director"],
        "answer": "Matriarch",
        "explanation": "A 'matriarch' is a woman who is the head of a family, tribe, or organizational hierarchy."
    },
    {
        "question": "Which noun represents the feminine equivalent of a male hero in literary or historical contexts?",
        "options": ["Protagonist", "Heroine", "Champion", "Ideologue"],
        "answer": "Heroine",
        "explanation": "'Heroine' specifically refers to a female main character or a woman admired for her courage."
    },
    {
        "question": "Select the feminine noun used to address a woman of high administrative or diplomatic standing:",
        "options": ["Sir", "Mister", "Madam", "Excellency"],
        "answer": "Madam",
        "explanation": "'Madam' is a formal, polite feminine noun used as a salutation for a woman."
    },
    {
        "question": "Which of the following terms is a feminine noun indicating a female deity or divine figure?",
        "options": ["Goddess", "Angel", "Clergy", "Patron"],
        "answer": "Goddess",
        "explanation": "'Goddess' is the feminine form of the noun 'god'."
    },
    {
        "question": "Identify the feminine occupational noun from the choices below:",
        "options": ["Aviator", "Host", "Waitress", "Conductor"],
        "answer": "Waitress",
        "explanation": "'Waitress' refers specifically to a female server in a commercial dining establishment."
    },
    {
        "question": "Which noun refers to a female member of a religious community living in a convent?",
        "options": ["Monk", "Nun", "Priest", "Abbot"],
        "answer": "Nun",
        "explanation": "A 'nun' is a female member of a religious community, serving as the feminine counterpart to a monk."
    },

    // 21-30: Neuter Gender (Inanimate Objects, Places, & Systems)
    {
        "question": "Which of the following nouns belongs to the neuter gender category?",
        "options": ["Manager", "Document", "Auditor", "Consultant"],
        "answer": "Document",
        "explanation": "'Document' is an inanimate object and does not possess biological sex, classifying it as a neuter noun."
    },
    {
        "question": "Select the neuter noun that represents an organizational infrastructure:",
        "options": ["Committee", "Building", "Secretary", "Chairman"],
        "answer": "Building",
        "explanation": "While 'committee' is a collective noun composed of people, a physical 'building' is strictly an inanimate object (neuter gender)."
    },
    {
        "question": "Which word is an example of a neuter noun representing a piece of office technology?",
        "options": ["Operator", "Technician", "Computer", "Programmer"],
        "answer": "Computer",
        "explanation": "A 'computer' is a mechanical device, making it a neuter noun."
    },
    {
        "question": "Find the neuter noun that describes an administrative workplace setting:",
        "options": ["Office", "Officer", "Official", "Officiant"],
        "answer": "Office",
        "explanation": "An 'office' is a physical location or abstract entity, which falls under the neuter gender category."
    },
    {
        "question": "Which of the following abstract nouns belongs to the neuter gender?",
        "options": ["Leader", "Policy", "Director", "Supervisor"],
        "answer": "Policy",
        "explanation": "A 'policy' is an abstract framework or concept; because it is non-living, it is classified as neuter."
    },
    {
        "question": "Select the neuter noun that represents a formal financial tool:",
        "options": ["Accountant", "Collector", "Ledger", "Cashier"],
        "answer": "Ledger",
        "explanation": "A 'ledger' is a physical book or digital file used for financial records, making it a neuter noun."
    },
    {
        "question": "Which noun is considered neuter because it refers to a municipal or public asset?",
        "options": ["Citizen", "Mayor", "Vehicle", "Pedestrian"],
        "answer": "Vehicle",
        "explanation": "A 'vehicle' is a mechanical apparatus for transport, categorized under the neuter gender."
    },
    {
        "question": "Find the neuter noun associated with an institutional facility:",
        "options": ["Principal", "Student", "University", "Instructor"],
        "answer": "University",
        "explanation": "A 'university' is an educational institution or property, which means it holds a neuter gender."
    },
    {
        "question": "Which of the following nouns represents an objective piece of communication?",
        "options": ["Sender", "Recipient", "Memorandum", "Messenger"],
        "answer": "Memorandum",
        "explanation": "A 'memorandum' is a written official message, making it an inanimate object of the neuter gender."
    },
    {
        "question": "Select the neuter noun that represents a physical piece of office equipment:",
        "options": ["Desk", "Clerk", "Typist", "Stenographer"],
        "answer": "Desk",
        "explanation": "A 'desk' is an item of furniture, placing it firmly in the neuter gender group."
    },

    // 31-40: Common Gender (Ambiguous Professional Titles)
    {
        "question": "Which of the following professional titles is classified under the common gender?",
        "options": ["Prince", "Dutchess", "Accountant", "Actor"],
        "answer": "Accountant",
        "explanation": "'Accountant' is a common gender noun because it can refer to either a male or a female professional."
    },
    {
        "question": "Select the common gender noun used to describe an authorized medical professional:",
        "options": ["Physician", "Actor", "Hostess", "Seamstress"],
        "answer": "Physician",
        "explanation": "A 'physician' can be either male or female, making it a common gender designation."
    },
    {
        "question": "Which noun implies that the individual could be of either biological gender?",
        "options": ["Widower", "Applicant", "Bride", "Groom"],
        "answer": "Applicant",
        "explanation": "An 'applicant' is a person who applies for a position, regardless of whether they are male or female."
    },
    {
        "question": "Find the common gender noun that refers to a person representing a legal client:",
        "options": ["Attorney", "Executrix", "King", "Waitress"],
        "answer": "Attorney",
        "explanation": "An 'attorney' is a legal practitioner of any gender, which defines it as a common noun."
    },
    {
        "question": "Which of the following terms is a common gender noun meaning a person who evaluates records?",
        "options": ["Auditor", "Proprietress", "Chairman", "Heroine"],
        "answer": "Auditor",
        "explanation": "An 'auditor' can be a man or a woman, classifying the title under the common gender."
    },
    {
        "question": "Select the common gender title used for an educational administrator:",
        "options": ["Headmaster", "Headmistress", "Superintendent", "Emperor"],
        "answer": "Superintendent",
        "explanation": "Unlike 'headmaster' (male) or 'headmistress' (female), 'superintendent' applies neutrally to any gender."
    },
    {
        "question": "Which noun refers to a person under the supervision of a business manager?",
        "options": ["Employee", "Actor", "Stewardess", "Baron"],
        "answer": "Employee",
        "explanation": "An 'employee' refers broadly to any worker in a corporate grid, male or female."
    },
    {
        "question": "Find the common gender noun that designates a person who visits an agency or office:",
        "options": ["Host", "Client", "Landlady", "Widower"],
        "answer": "Client",
        "explanation": "A 'client' is a general customer or service recipient, which means the term fits the common gender profile."
    },
    {
        "question": "Which of the following words is a common gender noun representing a public safety officer?",
        "options": ["Officer", "Actor", "Waitress", "Bride"],
        "answer": "Officer",
        "explanation": "An 'officer' can be a male or female member of law enforcement or administration."
    },
    {
        "question": "Select the common gender noun used to identify a person who lives adjacent to your property:",
        "options": ["Neighbor", "Brother", "Sister", "Groom"],
        "answer": "Neighbor",
        "explanation": "A 'neighbor' can be a person of any gender who resides nearby."
    },

    // 41-50: Gender Pairing & Professional Matching
    {
        "question": "What is the professionally accurate feminine counterpart of the noun 'Executor'?",
        "options": ["Executrix", "Executioner", "Executive", "Executors"],
        "answer": "Executrix",
        "explanation": "In traditional legal language, an 'executrix' is a female executor of an estate or will."
    },
    {
        "question": "What is the proper masculine match for the feminine royal title 'Empress'?",
        "options": ["Emperor", "Empire", "Knight", "Prince"],
        "answer": "Emperor",
        "explanation": "The masculine equivalent of an 'empress' is an 'emperor'."
    },
    {
        "question": "What is the feminine equivalent of the business title 'Proprietor'?",
        "options": ["Proprietress", "Property", "Partner", "Proprietary"],
        "answer": "Proprietress",
        "explanation": "A female business owner or proprietor is formally referred to as a 'proprietress'."
    },
    {
        "question": "What is the masculine equivalent of the singular educational title 'Alumna'?",
        "options": ["Alumnus", "Alumni", "Alumnae", "Alum"],
        "answer": "Alumnus",
        "explanation": "'Alumnus' is the correct masculine singular form for a former graduate student."
    },
    {
        "question": "What is the feminine counterpart for the corporate title 'Steward'?",
        "options": ["Stewardess", "Steward", "Manager", "Assistant"],
        "answer": "Stewardess",
        "explanation": "'Stewardess' is the traditional feminine counterpart of 'steward' in logistics or administrative management."
    },
    {
        "question": "What is the masculine counterpart of the feminine kinship noun 'Niece'?",
        "options": ["Nephew", "Uncle", "Brother", "Cousin"],
        "answer": "Nephew",
        "explanation": "The male child of one's sibling is a 'nephew', which matches the feminine 'niece'."
    },
    {
        "question": "What is the feminine counterpart of the traditional formal noun 'Benefactor'?",
        "options": ["Benefactress", "Beneficiary", "Benefit", "Donor"],
        "answer": "Benefactress",
        "explanation": "A female supporter or donor who awards a grant is called a 'benefactress'."
    },
    {
        "question": "What is the masculine equivalent of the religious noun 'Nun'?",
        "options": ["Monk", "Priest", "Friar", "Abbot"],
        "answer": "Monk",
        "explanation": "A 'monk' is the masculine counterpart to a 'nun' within cloistered religious orders."
    },
    {
        "question": "What is the feminine counterpart of the legal status noun 'Widower'?",
        "options": ["Widow", "Wife", "Spouse", "Matron"],
        "answer": "Widow",
        "explanation": "A woman whose spouse has deceased is called a 'widow', making it the feminine match for 'widower'."
    },
    {
        "question": "What is the formal masculine counterpart for the polite greeting 'Madam'?",
        "options": ["Sir", "Mister", "Gentleman", "Officer"],
        "answer": "Sir",
        "explanation": "In corporate and government correspondence, 'Madam' is paired directly with 'Sir'."
    }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Animals, Roles & Pronouns
  // ============================================================
  intermediate: [
    // 1-10: Animal Genders
    {
      question: "What is the feminine of 'Bull'?",
      options: ["Cow", "Heifer", "Mare", "Sow"],
      answer: "Cow",
      explanation: "A 'bull' is a male bovine; the adult female is called a 'cow'."
    },
    {
      question: "What is the masculine of 'Hen'?",
      options: ["Rooster", "Drake", "Gander", "Ram"],
      answer: "Rooster",
      explanation: "A 'hen' is a female chicken; the male chicken is a 'rooster'."
    },
    {
      question: "What is the feminine of 'Horse' (stallion)?",
      options: ["Mare", "Ewe", "Vixen", "Doe"],
      answer: "Mare",
      explanation: "The male horse is a stallion; the adult female horse is a 'mare'."
    },
    {
      question: "What is the masculine of 'Duck'?",
      options: ["Drake", "Goose", "Gander", "Swan"],
      answer: "Drake",
      explanation: "In this pair, 'duck' is female and 'drake' is the male."
    },
    {
      question: "What is the feminine of 'Fox'?",
      options: ["Vixen", "Sow", "Ewe", "Doe"],
      answer: "Vixen",
      explanation: "A female fox is called a 'vixen'."
    },
    {
      question: "What is the masculine of 'Goose'?",
      options: ["Gander", "Drake", "Rooster", "Bull"],
      answer: "Gander",
      explanation: "'Goose' is the female; the male bird is called a 'gander'."
    },
    {
      question: "What is the feminine of 'Ram' (Sheep)?",
      options: ["Ewe", "Sow", "Doe", "Mare"],
      answer: "Ewe",
      explanation: "A 'ram' is a male sheep; the female sheep is an 'ewe'."
    },
    {
      question: "What is the masculine of 'Sow' (Pig)?",
      options: ["Boar", "Bull", "Ram", "Drake"],
      answer: "Boar",
      explanation: "A 'sow' is a female pig; the male pig is a 'boar'."
    },
    {
      question: "What is the feminine of 'Tiger'?",
      options: ["Tigress", "Tigeress", "Tigra", "Tigris"],
      answer: "Tigress",
      explanation: "We form the feminine by adding '-ess': 'tiger' → 'tigress'."
    },
    {
      question: "What is the masculine of 'Lioness'?",
      options: ["Lion", "Tiger", "Leopard", "Cat"],
      answer: "Lion",
      explanation: "'Lioness' is the female; the male is simply 'lion'."
    },

    // 11-20: Human Roles
    {
      question: "What is the feminine of 'Bachelor'?",
      options: ["Spinster", "Wife", "Widow", "Lady"],
      answer: "Spinster",
      explanation: "Traditionally, 'bachelor' is an unmarried man and 'spinster' an unmarried woman."
    },
    {
      question: "What is the masculine of 'Witch'?",
      options: ["Wizard", "Warlock", "Sorcerer", "Magician"],
      answer: "Wizard",
      explanation: "A female magic-user is a witch; the common male term is 'wizard'."
    },
    {
      question: "What is the feminine of 'Monk'?",
      options: ["Nun", "Priestess", "Sister", "Lady"],
      answer: "Nun",
      explanation: "A 'monk' is male; the religious female counterpart is a 'nun'."
    },
    {
      question: "What is the masculine of 'Bride'?",
      options: ["Bridegroom", "Groom", "Husband", "Bachelor"],
      answer: "Bridegroom",
      explanation: "The traditional male term paired with 'bride' is 'bridegroom' (or simply 'groom')."
    },
    {
      question: "What is the feminine of 'Count'?",
      options: ["Countess", "Princess", "Duchess", "Baroness"],
      answer: "Countess",
      explanation: "The female title corresponding to 'count' is 'countess'."
    },
    {
      question: "What is the masculine of 'Hostess'?",
      options: ["Host", "Waiter", "Steward", "Manager"],
      answer: "Host",
      explanation: "'Hostess' is female; the male term is 'host'."
    },
    {
      question: "What is the feminine of 'God'?",
      options: ["Goddess", "Angel", "Saint", "Spirit"],
      answer: "Goddess",
      explanation: "The feminine form of 'god' is 'goddess'."
    },
    {
      question: "What is the masculine of 'Empress'?",
      options: ["Emperor", "King", "Tsar", "Sultan"],
      answer: "Emperor",
      explanation: "The male ruler parallel to 'empress' is 'emperor'."
    },
    {
      question: "What is the feminine of 'Master'?",
      options: ["Mistress", "Miss", "Mrs", "Lady"],
      answer: "Mistress",
      explanation: "In old usage, 'master' pairs with 'mistress' as the feminine."
    },
    {
      question: "What is the masculine of 'Widow'?",
      options: ["Widower", "Bachelor", "Single", "Husband"],
      answer: "Widower",
      explanation: "A 'widow' has lost her husband; a 'widower' has lost his wife."
    },

    // 21-30: Titles
    {
      question: "What is the feminine of 'Waiter'?",
      options: ["Waitress", "Server", "Stewardess", "Maid"],
      answer: "Waitress",
      explanation: "The traditional feminine form is 'waitress'."
    },
    {
      question: "What is the masculine of 'Stewardess'?",
      options: ["Steward", "Pilot", "Waiter", "Host"],
      answer: "Steward",
      explanation: "'Stewardess' is female; the matching male term is 'steward'."
    },
    {
      question: "What is the feminine of 'Duke'?",
      options: ["Duchess", "Countess", "Princess", "Lady"],
      answer: "Duchess",
      explanation: "The female title paired with 'duke' is 'duchess'."
    },
    {
      question: "What is the masculine of 'Lady'?",
      options: ["Lord", "Gentleman", "Sir", "Knight"],
      answer: "Lord",
      explanation: "In nobility, 'lady' corresponds to 'lord'."
    },
    {
      question: "What is the feminine of 'Nephew'?",
      options: ["Niece", "Cousin", "Sister", "Aunt"],
      answer: "Niece",
      explanation: "A 'nephew' is a brother's or sister's son; a 'niece' is their daughter."
    },
    {
      question: "What is the masculine of 'Landlady'?",
      options: ["Landlord", "Owner", "Master", "Host"],
      answer: "Landlord",
      explanation: "'Landlady' is a female property owner; 'landlord' is the male counterpart."
    },
    {
      question: "What is the feminine of 'Headmaster'?",
      options: ["Headmistress", "Principal", "Teacher", "Lady"],
      answer: "Headmistress",
      explanation: "'Headmaster' is male; 'headmistress' is the female form."
    },
    {
      question: "What is the masculine of 'Policewoman'?",
      options: ["Policeman", "Police officer", "Cop", "Sergeant"],
      answer: "Policeman",
      explanation: "'Policewoman' is female; 'policeman' is the male form."
    },
    {
      question: "What is the feminine of 'Salesman'?",
      options: ["Saleswoman", "Saleslady", "Both A and B", "Seller"],
      answer: "Both A and B",
      explanation: "Both 'saleswoman' and 'saleslady' can be used as feminine forms."
    },
    {
      question: "What is the masculine of 'Spokeswoman'?",
      options: ["Spokesman", "Speaker", "Talker", "Reporter"],
      answer: "Spokesman",
      explanation: "'Spokeswoman' pairs with 'spokesman' as the male form."
    },

    // 31-40: Pronouns (Basic)
    {
      question: "The boy lost ___ ball.",
      options: ["his", "her", "its", "their"],
      answer: "his",
      explanation: "We use 'his' as the possessive pronoun for 'boy'."
    },
    {
      question: "The girl finished ___ homework.",
      options: ["her", "his", "its", "their"],
      answer: "her",
      explanation: "We use 'her' as the possessive pronoun for 'girl'."
    },
    {
      question: "The dog wagged ___ tail.",
      options: ["its", "his", "her", "their"],
      answer: "its",
      explanation: "For an animal of unknown sex, we often use 'its'."
    },
    {
      question: "The teacher asked the student to bring ___ book.",
      options: ["his or her", "its", "it", "she"],
      answer: "his or her",
      explanation: "'Student' can be male or female, so 'his or her' is used in traditional grammar."
    },
    {
      question: "My mother loves ___ garden.",
      options: ["her", "his", "its", "their"],
      answer: "her",
      explanation: "'Mother' is feminine, so we use 'her'."
    },
    {
      question: "The king wore ___ crown.",
      options: ["his", "her", "its", "their"],
      answer: "his",
      explanation: "'King' is masculine, so the possessive pronoun is 'his'."
    },
    {
      question: "The car has lost ___ shine.",
      options: ["its", "his", "her", "their"],
      answer: "its",
      explanation: "A car is an object, so we use 'its'."
    },
    {
      question: "The baby is crying for ___ mother.",
      options: ["its", "his", "her", "their"],
      answer: "its",
      explanation: "When the baby's sex is not specified, traditional grammar uses 'its'."
    },
    {
      question: "Every girl must clean ___ room.",
      options: ["her", "his", "its", "their"],
      answer: "her",
      explanation: "We use 'her' with 'every girl'."
    },
    {
      question: "Every boy must bring ___ lunch.",
      options: ["his", "her", "its", "their"],
      answer: "his",
      explanation: "We use 'his' with 'every boy'."
    },

    // 41-50: Context
    {
      question: "Which word is masculine? 'The mare and the stallion ran.'",
      options: ["mare", "stallion", "ran", "the"],
      answer: "stallion",
      explanation: "A 'stallion' is a male horse."
    },
    {
      question: "Which word is feminine? 'The ewe and the ram grazed.'",
      options: ["ewe", "ram", "grazed", "the"],
      answer: "ewe",
      explanation: "An 'ewe' is a female sheep."
    },
    {
      question: "Identify the neuter noun: 'He put the computer on the desk.'",
      options: ["He", "computer", "desk", "Both B and C"],
      answer: "Both B and C",
      explanation: "'Computer' and 'desk' are both objects and therefore neuter."
    },
    {
      question: "Identify the common gender noun: 'The doctor called the nurse.'",
      options: ["doctor", "nurse", "Both A and B", "called"],
      answer: "Both A and B",
      explanation: "Both 'doctor' and 'nurse' can refer to males or females."
    },
    {
      question: "In 'The ship struck an iceberg', ships are sometimes referred to as:",
      options: ["he", "she", "it", "they"],
      answer: "she",
      explanation: "By tradition, ships are often personified and called 'she'."
    },
    {
      question: "Gender-neutral term for 'Fireman'?",
      options: ["Firefighter", "Firewoman", "Fire person", "Burner"],
      answer: "Firefighter",
      explanation: "'Firefighter' is the standard gender-neutral term."
    },
    {
      question: "Gender-neutral term for 'Policeman'?",
      options: ["Police officer", "Cop", "Guard", "Detective"],
      answer: "Police officer",
      explanation: "'Police officer' is a widely accepted gender-neutral title."
    },
    {
      question: "Gender-neutral term for 'Mailman'?",
      options: ["Mail carrier", "Postman", "Mail boy", "Letter man"],
      answer: "Mail carrier",
      explanation: "'Mail carrier' is a neutral term that can refer to any gender."
    },
    {
      question: "Gender-neutral term for 'Stewardess'?",
      options: ["Flight attendant", "Plane server", "Air host", "Flyer"],
      answer: "Flight attendant",
      explanation: "'Flight attendant' is the neutral, modern term."
    },
    {
      question: "Gender-neutral term for 'Chairman'?",
      options: ["Chairperson", "Chair", "Both A and B", "Chairlady"],
      answer: "Both A and B",
      explanation: "Both 'chairperson' and 'chair' can be used for any gender."
    }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Inclusive Language & Agreement
  // ============================================================
  advanced: [
    // 1-10: Gender-Neutral Language
    {
      question: "The student lost ____ book. (Gender unknown)",
      options: ["his", "her", "their", "its"],
      answer: "their",
      explanation: "When the student's gender is unknown, 'their' is a natural gender-neutral pronoun."
    },
    {
      question: "If anyone calls, tell ____ I am busy.",
      options: ["him", "her", "them", "it"],
      answer: "them",
      explanation: "Indefinite pronouns like 'anyone' are often followed by the singular 'them'."
    },
    {
      question: "Every passenger must hold ____ ticket.",
      options: ["his", "her", "their", "its"],
      answer: "their",
      explanation: "To include all genders, we can say: 'Every passenger must hold their ticket.'"
    },
    {
      question: "Somebody left ____ umbrella here.",
      options: ["his", "her", "their", "its"],
      answer: "their",
      explanation: "We do not know the person's gender, so 'their umbrella' is used."
    },
    {
      question: "A good leader listens to ____ team.",
      options: ["his", "her", "their", "its"],
      answer: "their",
      explanation: "A leader may be male or female, so 'their team' is inclusive."
    },
    {
      question: "Each candidate must submit ____ resume.",
      options: ["his", "his or her", "their", "All of the above"],
      answer: "All of the above",
      explanation: "Traditional style uses 'his' or 'his or her'; modern style often prefers 'their'."
    },
    {
      question: "Who dropped ____ wallet?",
      options: ["his", "her", "their", "its"],
      answer: "their",
      explanation: "We do not know who it was, so 'their' is the inclusive choice."
    },
    {
      question: "No one should lose ____ hope.",
      options: ["his", "her", "their", "its"],
      answer: "their",
      explanation: "We often pair 'no one' with 'their' to avoid assuming gender."
    },
    {
      question: "The parent brought ____ child to school.",
      options: ["his", "her", "their", "its"],
      answer: "their",
      explanation: "'Parent' can be any gender, so 'their child' is gender-neutral."
    },
    {
      question: "Usually, a doctor cares for ____ patients.",
      options: ["his", "her", "their", "its"],
      answer: "their",
      explanation: "Since doctors can be any gender, 'their patients' is inclusive."
    },

    // 11-20: Modern Usage
    {
      question: "Which term is preferred over 'Stewardess'?",
      options: ["Flight attendant", "Air lady", "Plane host", "Steward"],
      answer: "Flight attendant",
      explanation: "'Flight attendant' is the standard modern, gender-neutral title."
    },
    {
      question: "Instead of 'Policeman', use:",
      options: ["Cop", "Police officer", "Patrolman", "Guard"],
      answer: "Police officer",
      explanation: "'Police officer' clearly describes the role without mentioning gender."
    },
    {
      question: "Instead of 'Mailman', use:",
      options: ["Mail carrier", "Postman", "Mail boy", "Letter man"],
      answer: "Mail carrier",
      explanation: "'Mail carrier' is a neutral term for the person delivering mail."
    },
    {
      question: "Instead of 'Fireman', use:",
      options: ["Firefighter", "Fire person", "Burner", "Rescuer"],
      answer: "Firefighter",
      explanation: "'Firefighter' names the job without referring to gender."
    },
    {
      question: "The term 'Actor' is now often used for:",
      options: ["Males only", "Females only", "Both males and females", "Neither"],
      answer: "Both males and females",
      explanation: "In modern usage, 'actor' can refer to performers of any gender."
    },
    {
      question: "Neutral form of 'Mankind'?",
      options: ["Humankind", "Man", "Humanity", "Both A and C"],
      answer: "Both A and C",
      explanation: "'Humankind' and 'humanity' both avoid suggesting only males."
    },
    {
      question: "Instead of 'Man-made', use:",
      options: ["Synthetic", "Artificial", "Manufactured", "All of the above"],
      answer: "All of the above",
      explanation: "'Synthetic', 'artificial', or 'manufactured' are all neutral alternatives."
    },
    {
      question: "Instead of 'Chairman', use:",
      options: ["Chairperson", "Chair", "Head", "All of the above"],
      answer: "All of the above",
      explanation: "Any of 'chairperson', 'chair', or 'head' may be used without gender reference."
    },
    {
      question: "Instead of 'Forefathers', use:",
      options: ["Ancestors", "Dads", "Old men", "History"],
      answer: "Ancestors",
      explanation: "'Ancestors' is neutral and includes both male and female ancestors."
    },
    {
      question: "Instead of 'Businessman', use:",
      options: ["Business person", "Executive", "Business professional", "All of the above"],
      answer: "All of the above",
      explanation: "All these alternatives can describe a person in business without naming gender."
    },

    // 21-30: Personification
    {
      question: "In poetry, the 'Sun' is:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Masculine",
      explanation: "In traditional English poetry, the sun is often personified as 'he'."
    },
    {
      question: "In poetry, the 'Moon' is:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Feminine",
      explanation: "The moon is often personified as 'she' or as a feminine figure."
    },
    {
      question: "In poetry, 'Nature' is:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Feminine",
      explanation: "Nature is frequently called 'Mother Nature', so it is treated as feminine."
    },
    {
      question: "In poetry, 'Death' is:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Masculine",
      explanation: "Death is often pictured as a male figure, such as the 'grim reaper'."
    },
    {
      question: "In poetry, 'Earth' is:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Feminine",
      explanation: "The Earth is commonly personified as 'Mother Earth', which is feminine."
    },
    {
      question: "In poetry, 'War' is:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Masculine",
      explanation: "War is often imagined as a fierce male spirit in literature."
    },
    {
      question: "In poetry, 'Spring' is:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Feminine",
      explanation: "Spring is sometimes pictured as a young maiden, so it is treated as feminine."
    },
    {
      question: "In poetry, 'Time' is:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Masculine",
      explanation: "Time is personified as 'Father Time', which is masculine."
    },
    {
      question: "Ships/boats are traditionally:",
      options: ["He", "She", "It", "They"],
      answer: "She",
      explanation: "By long tradition, ships and boats are referred to as 'she'."
    },
    {
      question: "Countries (affectionately) are:",
      options: ["Masculine", "Feminine", "Neuter", "Common"],
      answer: "Feminine",
      explanation: "People often speak of their country as 'the motherland' or 'she'."
    },

    // 31-40: Specific Animals
    {
      question: "Feminine of 'Boar'?",
      options: ["Sow", "Doe", "Mare", "Hen"],
      answer: "Sow",
      explanation: "A 'boar' is a male pig; the female pig is called a 'sow'."
    },
    {
      question: "Masculine of 'Doe'?",
      options: ["Buck", "Bull", "Ram", "Stallion"],
      answer: "Buck",
      explanation: "A 'doe' is a female deer; the male deer is called a 'buck'."
    },
    {
      question: "Masculine of 'Ewe'?",
      options: ["Ram", "Buck", "Boar", "Bull"],
      answer: "Ram",
      explanation: "An 'ewe' is a female sheep; the male sheep is called a 'ram'."
    },
    {
      question: "Feminine of 'Colt'?",
      options: ["Filly", "Mare", "Foal", "Doe"],
      answer: "Filly",
      explanation: "A 'colt' is a young male horse; the young female horse is a 'filly'."
    },
    {
      question: "Masculine of 'Filly'?",
      options: ["Colt", "Foal", "Stallion", "Gelding"],
      answer: "Colt",
      explanation: "A 'filly' is a young female horse; the young male horse is a 'colt'."
    },
    {
      question: "Neutral term for 'Ram/Ewe'?",
      options: ["Sheep", "Goat", "Lamb", "Flock"],
      answer: "Sheep",
      explanation: "'Ram' and 'ewe' are male and female; the general name for the animal is 'sheep'."
    },
    {
      question: "Neutral term for 'Bull/Cow'?",
      options: ["Cattle", "Oxen", "Bovine", "All of the above"],
      answer: "Cattle",
      explanation: "'Bull' and 'cow' are male and female; together they are usually called 'cattle'."
    },
    {
      question: "Feminine of 'Dog' (technical)?",
      options: ["Bitch", "Dam", "Queen", "Sow"],
      answer: "Bitch",
      explanation: "In technical animal terminology, the female dog is called a 'bitch'."
    },
    {
      question: "Masculine of 'Bitch'?",
      options: ["Dog", "Sire", "Hound", "Wolf"],
      answer: "Dog",
      explanation: "In this pair, 'bitch' is the female; 'dog' is the usual word for the male."
    },
    {
      question: "What is a 'Gelding'?",
      options: ["Male horse (castrated)", "Female horse", "Young horse", "Wild horse"],
      answer: "Male horse (castrated)",
      explanation: "A 'gelding' is a male horse that has been castrated."
    },

    // 41-50: Titles
    {
      question: "Feminine of 'Czar'?",
      options: ["Czarina", "Queen", "Empress", "Duchess"],
      answer: "Czarina",
      explanation: "The female title corresponding to 'czar' is 'czarina'."
    },
    {
      question: "Masculine of 'Sultana'?",
      options: ["Sultan", "King", "Prince", "Rajah"],
      answer: "Sultan",
      explanation: "'Sultana' is the female title; 'sultan' is the male ruler."
    },
    {
      question: "Feminine of 'Maharajah'?",
      options: ["Maharani", "Princess", "Rani", "Lady"],
      answer: "Maharani",
      explanation: "The wife or female counterpart of a maharajah is a 'maharani'."
    },
    {
      question: "Masculine of 'Signora'?",
      options: ["Signor", "Sir", "Monsieur", "Senor"],
      answer: "Signor",
      explanation: "In Italian, 'signora' is for a woman and 'signor' is for a man."
    },
    {
      question: "Feminine of 'Fiancé'?",
      options: ["Fiancée", "Bride", "Wife", "Betrothed"],
      answer: "Fiancée",
      explanation: "'Fiancé' is a man who is engaged; 'fiancée' (two e's) is a woman who is engaged."
    },
    {
      question: "Masculine of 'Blonde'?",
      options: ["Blond", "Brunette", "Dark", "Fair"],
      answer: "Blond",
      explanation: "'Blonde' is often used for a fair-haired woman; 'blond' (without e) is used for a man."
    },
    {
      question: "Feminine of 'Executor'?",
      options: ["Executrix", "Executer", "Executioner", "Executor"],
      answer: "Executrix",
      explanation: "'Executrix' is the traditional feminine form of 'executor'."
    },
    {
      question: "Masculine of 'Testatrix'?",
      options: ["Testator", "Testament", "Tester", "Testy"],
      answer: "Testator",
      explanation: "A 'testator' is a man who makes a will; 'testatrix' is the older feminine form."
    },
    {
      question: "Feminine of 'Administrator'?",
      options: ["Administratrix", "Admin", "Secretary", "Boss"],
      answer: "Administratrix",
      explanation: "'Administratrix' is the traditional feminine form of 'administrator'."
    },
    {
      question: "Masculine of 'Belle'?",
      options: ["Beau", "Boy", "Handsome", "Gent"],
      answer: "Beau",
      explanation: "A 'belle' is a beautiful woman; her male admirer or counterpart can be called a 'beau'."
    }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (50 Items) - Obscure & Technical
  // ============================================================
  expert: [
    // 1-15: Obscure Animals
    {
      question: "Masculine of 'Pen' (Swan)?",
      options: ["Drake", "Cob", "Gander", "Buck"],
      answer: "Cob",
      explanation: "A female swan is called a 'pen'; the male swan is called a 'cob'."
    },
    {
      question: "Feminine of 'Cob'?",
      options: ["Hen", "Sow", "Pen", "Goose"],
      answer: "Pen",
      explanation: "A 'cob' is a male swan; the female swan is called a 'pen'."
    },
    {
      question: "Masculine of 'Jill' (Ferret)?",
      options: ["Jack", "Tom", "Buck", "Hob"],
      answer: "Hob",
      explanation: "A female ferret is a 'jill'; the male ferret is called a 'hob'."
    },
    {
      question: "Feminine of 'Tod' (Fox)?",
      options: ["Vixen", "Sow", "Doe", "Jill"],
      answer: "Vixen",
      explanation: "A 'tod' is a male fox; the female fox is called a 'vixen'."
    },
    {
      question: "Masculine of 'Tabby' (Cat)?",
      options: ["Gib", "Jack", "Tom", "Boar"],
      answer: "Tom",
      explanation: "In traditional usage, the male cat is often called a 'tom'."
    },
    {
      question: "Feminine of 'Hart' (Red Deer)?",
      options: ["Doe", "Roe", "Sow", "Hind"],
      answer: "Hind",
      explanation: "A 'hart' is an old term for a male red deer; the female is a 'hind'."
    },
    {
      question: "Masculine of 'Hind'?",
      options: ["Stag", "Hart", "Buck", "Bull"],
      answer: "Hart",
      explanation: "A 'hind' is a female red deer; the male is called a 'hart'."
    },
    {
      question: "Masculine of 'Jenny' (Donkey)?",
      options: ["Jack", "Tom", "Dick", "Harry"],
      answer: "Jack",
      explanation: "A 'jenny' is a female donkey; the male donkey is called a 'jack'."
    },
    {
      question: "Feminine of 'Billy' (Goat)?",
      options: ["Doe", "Sow", "Nanny", "Ewe"],
      answer: "Nanny",
      explanation: "A 'billy' is a male goat; the female goat is called a 'nanny'."
    },
    {
      question: "Masculine of 'Nanny' (Goat)?",
      options: ["Buck", "Ram", "Bull", "Billy"],
      answer: "Billy",
      explanation: "A 'nanny' is a female goat; the male goat is called a 'billy'."
    },
    {
      question: "Gender of a 'Drone' (Bee)?",
      options: ["Female", "Male", "Neuter", "Common"],
      answer: "Male",
      explanation: "In a hive, a 'drone' is a male bee."
    },
    {
      question: "Feminine of 'Tiercel' (Hawk)?",
      options: ["Hen", "Sow", "Formel", "Pen"],
      answer: "Formel",
      explanation: "A 'tiercel' is a male hawk; the female hawk can be called a 'formel'."
    },
    {
      question: "Masculine of 'Cygnet'?",
      options: ["Cob", "Pen", "Drake", "None (Young Swan)"],
      answer: "None (Young Swan)",
      explanation: "'Cygnet' is the word for a young swan and does not indicate male or female."
    },
    {
      question: "Feminine of 'Buck' (Rabbit)?",
      options: ["Doe", "Sow", "Hen", "Vixen"],
      answer: "Doe",
      explanation: "A 'buck' is a male rabbit; the female rabbit is called a 'doe'."
    },
    {
      question: "Masculine of 'Queen' (Cat)?",
      options: ["King", "Sire", "Tom", "Jack"],
      answer: "Tom",
      explanation: "A breeding female cat may be called a 'queen'; the male cat is called a 'tom'."
    },

    // 16-30: Archaic & Foreign
    {
      question: "Masculine of 'Marquise'?",
      options: ["Duke", "Earl", "Marquis", "Baron"],
      answer: "Marquis",
      explanation: "A 'marquise' is a noblewoman; the male title is 'marquis'."
    },
    {
      question: "Feminine of 'Viceroy'?",
      options: ["Queen", "Countess", "Lady", "Vicereine"],
      answer: "Vicereine",
      explanation: "The female counterpart of a 'viceroy' can be called a 'vicereine'."
    },
    {
      question: "Masculine of 'Abbess'?",
      options: ["Abbot", "Monk", "Priest", "Bishop"],
      answer: "Abbot",
      explanation: "An 'abbess' leads a convent of nuns; the male leader is an 'abbot'."
    },
    {
      question: "Feminine of 'Prior'?",
      options: ["Prioress", "Nun", "Sister", "Mother"],
      answer: "Prioress",
      explanation: "The female head of a convent corresponding to a 'prior' is a 'prioress'."
    },
    {
      question: "Masculine of 'Spinster' (in traditional grammar)?",
      options: ["Spinner", "Weaver", "Bachelor", "Husband"],
      answer: "Bachelor",
      explanation: "In traditional grammar pairs, an unmarried man is a 'bachelor' and an unmarried woman a 'spinster'."
    },
    {
      question: "Feminine of 'Prosecutor'?",
      options: ["Prosecuter", "Lawyer", "Attorney", "Prosecutrix"],
      answer: "Prosecutrix",
      explanation: "'Prosecutrix' is the older feminine form of 'prosecutor'."
    },
    {
      question: "Masculine of 'Aviatrix'?",
      options: ["Pilot", "Aviator", "Flyer", "Captain"],
      answer: "Aviator",
      explanation: "An 'aviatrix' is a female pilot; the traditional male term is 'aviator'."
    },
    {
      question: "Feminine of 'Equerry'?",
      options: ["Equerress", "Lady", "None/Equerry", "Dame"],
      answer: "None/Equerry",
      explanation: "'Equerry' is now used for both men and women, so it has no special feminine form."
    },
    {
      question: "Masculine of 'Prima Donna'?",
      options: ["Tenor", "Primo Uomo", "Singer", "Star"],
      answer: "Primo Uomo",
      explanation: "In opera, the male equivalent of the 'prima donna' can be called 'primo uomo'."
    },
    {
      question: "Feminine of 'Alumnus'?",
      options: ["Alumni", "Alumnae", "Graduate", "Alumna"],
      answer: "Alumna",
      explanation: "A male graduate is an 'alumnus'; a female graduate is an 'alumna'."
    },
    {
      question: "Plural masculine of 'Alumnus'?",
      options: ["Alumnus", "Alumni", "Alumnas", "Alumnae"],
      answer: "Alumni",
      explanation: "The Latin plural of 'alumnus' (masculine) is 'alumni'."
    },
    {
      question: "Plural feminine of 'Alumna'?",
      options: ["Alumnas", "Alumni", "Alumnae", "Alumnus"],
      answer: "Alumnae",
      explanation: "The Latin plural of 'alumna' (feminine) is 'alumnae'."
    },
    {
      question: "Feminine of 'Sorcerer'?",
      options: ["Witch", "Sorceress", "Wizard", "Warlock"],
      answer: "Sorceress",
      explanation: "The traditional feminine form of 'sorcerer' is 'sorceress'."
    },
    {
      question: "Feminine of 'Prophet'?",
      options: ["Seer", "Visionary", "Lady", "Prophetess"],
      answer: "Prophetess",
      explanation: "A female prophet can be called a 'prophetess' in older usage."
    },
    {
      question: "Masculine of 'Diva'?",
      options: ["Singer", "Tenor", "Divo", "Star"],
      answer: "Divo",
      explanation: "A celebrated male singer may be called a 'divo' (male form of 'diva')."
    },

    // 31-40: Complex Agreement
    {
      question: "Agreement: 'Neither the manager nor the employees could find ____ keys.'",
      options: ["their", "his", "her", "its"],
      answer: "their",
      explanation: "The nearer subject is 'employees' (plural), so 'their keys' is natural."
    },
    {
      question: "Agreement: 'Neither the employees nor the manager could find ____ keys.'",
      options: ["their", "his or her", "its", "our"],
      answer: "his or her",
      explanation: "Here the nearer subject is 'manager' (singular), so we use 'his or her'."
    },
    {
      question: "Agreement: 'The jury gave ____ verdict.'",
      options: ["their", "his", "its", "her"],
      answer: "its",
      explanation: "When we treat 'jury' as one unit, we use the singular pronoun 'its'."
    },
    {
      question: "Agreement: 'The jury were divided in ____ opinions.'",
      options: ["its", "his", "her", "their"],
      answer: "their",
      explanation: "Here 'jury' is seen as individuals, so we use the plural 'their opinions'."
    },
    {
      question: "'Gentle reader' addresses:",
      options: ["Men only", "Both genders", "Women only", "Critics"],
      answer: "Both genders",
      explanation: "The phrase 'gentle reader' is a polite form of address to all readers."
    },
    {
      question: "Which is an 'epicene' noun?",
      options: ["King", "Queen", "Teacher", "Boy"],
      answer: "Teacher",
      explanation: "An epicene noun like 'teacher' has one form for both sexes."
    },
    {
      question: "Gender of 'Baby' (unknown sex)?",
      options: ["Masculine", "Feminine", "Common", "Neuter (It)"],
      answer: "Neuter (It)",
      explanation: "In traditional grammar, if we do not know whether the baby is a boy or a girl, we may refer to the baby as 'it', which is treated as neuter."
    },
    {
      question: "'Man is mortal' refers to:",
      options: ["Specific masculine", "Neuter", "Generic masculine (Humanity)", "Adjective"],
      answer: "Generic masculine (Humanity)",
      explanation: "Here 'man' stands for 'human beings in general', not only males."
    },
    {
      question: "Which avoids bias?",
      options: [
        "A nurse must be patient with his patients.",
        "Nurses must be patient with their patients.",
        "A nurse must be patient with her patients.",
        "A nurse must be patient with its patients."
      ],
      answer: "Nurses must be patient with their patients.",
      explanation: "Using the plural 'nurses' and 'their' avoids assuming that all nurses are male or female."
    },
    {
      question: "Pronoun 'one' is:",
      options: ["Masculine", "Feminine", "Neuter", "Gender neutral"],
      answer: "Gender neutral",
      explanation: "The pronoun 'one' can refer to any person and does not mark gender."
    },

    // 41-50: Trivia
    {
      question: "Suffix '-ess' (as in 'princess') came mainly from:",
      options: ["German", "French/Latin", "Greek", "Spanish"],
      answer: "French/Latin",
      explanation: "Many feminine endings in '-ess' in English came through French from Latin."
    },
    {
      question: "Suffix '-ster' (as in 'spinster') was originally:",
      options: ["Masculine", "Neuter", "Feminine", "Common"],
      answer: "Feminine",
      explanation: "Historically, '-ster' was a feminine agent ending, as in 'spinster'."
    },
    {
      question: "Which word is sometimes applied metaphorically to males, even though it is female in origin?",
      options: ["Bull", "Ram", "Stag", "Siren"],
      answer: "Siren",
      explanation: "A 'siren' is a female figure in myth, but the word can be used figuratively for seductive males too."
    },
    {
      question: "'Widower' is unusual because:",
      options: ["It is shorter", "No feminine form exists", "It derives from the feminine form", "It comes from Latin"],
      answer: "It derives from the feminine form",
      explanation: "The male form 'widower' is built from the base 'widow', which is originally feminine."
    },
    {
      question: "English mainly uses which type of gender system?",
      options: ["Grammatical gender", "Common gender", "No gender", "Natural gender"],
      answer: "Natural gender",
      explanation: "English usually follows natural gender, based on real-world sex rather than word endings."
    },
    {
      question: "Which ship name below is treated as masculine by its name, even though ships are usually 'she'?",
      options: ["The Titanic", "The Bismarck", "The Queen Mary", "The Elizabeth"],
      answer: "The Bismarck",
      explanation: "The warship 'Bismarck' is named after a male statesman, though ships are still referred to as 'she'."
    },
    {
      question: "Masculine of 'Amazon'?",
      options: ["Warrior", "Soldier", "No specific equivalent", "Spartan"],
      answer: "No specific equivalent",
      explanation: "There is no exact male counterpart to 'Amazon' in traditional usage."
    },
    {
      question: "'Hero' today is often treated as:",
      options: ["Masculine only", "Common gender", "Neuter", "Archaic"],
      answer: "Common gender",
      explanation: "In modern English, 'hero' is sometimes used for any brave person, not only males."
    },
    {
      question: "Feminine of 'Tsar'?",
      options: ["Tsara", "Queen", "Duchess", "Tsarina"],
      answer: "Tsarina",
      explanation: "The female title corresponding to 'tsar' is 'tsarina'."
    },
    {
      question: "Why is Justice often shown as a woman with scales?",
      options: ["Greek God Zeus", "Random choice", "Roman Goddess Justitia", "Because of judges"],
      answer: "Roman Goddess Justitia",
      explanation: "The image comes from the Roman goddess Justitia, who symbolizes justice."
    }
  ]
};

