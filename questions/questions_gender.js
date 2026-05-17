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
        "question": "In a livestock inventory report for an agricultural cooperative, what is the correct feminine term for an adult bovine paired with a 'Bull'?",
        "options": ["Heifer", "Cow", "Mare", "Sow"],
        "answer": "Cow",
        "explanation": "A 'bull' refers to the mature male bovine, while a 'cow' is the mature female. A 'heifer' is a young female that has not yet calved."
    },
    {
        "question": "An avian assessment registry notes the presence of a 'Drake' on the wetlands. What is the specific feminine counterpart of this bird?",
        "options": ["Hen", "Duck", "Goose", "Gander"],
        "answer": "Duck",
        "explanation": "In specific avian gender terms, 'drake' is the mature male and 'duck' refers specifically to the female."
    },
    {
        "question": "A veterinary record logs a 'Stallion' as the primary sire. Which of the following nouns refers to its adult feminine counterpart?",
        "options": ["Mare", "Ewe", "Vixen", "Doe"],
        "answer": "Mare",
        "explanation": "A mature male horse is a stallion or colt (young), while an adult female horse is classified as a 'mare'."
    },
    {
        "question": "Identify the specific masculine noun for a mature bird belonging to the species *Anser anser* (Goose):",
        "options": ["Gander", "Drake", "Rooster", "Cockerel"],
        "answer": "Gander",
        "explanation": "A 'gander' is the specific term for a mature male goose, whereas 'drake' is a male duck."
    },
    {
        "question": "Wildlife conservationists are tracking a male fox. What is the correct feminine noun for a female of this species?",
        "options": ["Sow", "Vixen", "Ewe", "Doe"],
        "answer": "Vixen",
        "explanation": "A female fox is biologically and traditionally referred to as a 'vixen'."
    },
    {
        "question": "A poultry farming subsidy program documents a 'Rooster' as the flock leader. What is the accurate feminine term?",
        "options": ["Hen", "Duck", "Pen", "Cob"],
        "answer": "Hen",
        "explanation": "'Rooster' or 'cock' denotes the male chicken, while 'hen' is the female chicken."
    },
    {
        "question": "An agricultural ledger denotes a 'Ram' as the primary breeder. What is the correct term for the female sheep?",
        "options": ["Ewe", "Sow", "Doe", "Dam"],
        "answer": "Ewe",
        "explanation": "A mature male sheep is a 'ram', and its mature female counterpart is an 'ewe'."
    },
    {
        "question": "In swine production management, a 'Boar' represents the male asset. What noun is used to specify the adult female pig?",
        "options": ["Sow", "Gilt", "Heifer", "Vixen"],
        "answer": "Sow",
        "explanation": "A mature female pig is a 'sow', while a 'gilt' is a young female pig that has not yet farrowed."
    },
    {
        "question": "Which of the following represents the correct spelling and form for the feminine counterpart of a 'Tiger'?",
        "options": ["Tigeress", "Tigress", "Tigris", "Tigra"],
        "answer": "Tigress",
        "explanation": "The feminine suffix '-ess' drops the 'e' from the root word 'tiger', resulting in the standard spelling 'tigress'."
    },
    {
        "question": "Identify the masculine counterpart of the feline noun 'Lioness':",
        "options": ["Lion", "Leopard", "Cougar", "Tomcat"],
        "answer": "Lion",
        "explanation": "'Lioness' uses the feminine inflectional suffix, making 'lion' its base masculine format."
    },

    // 11-20: Human Roles & Civil Status
    {
        "question": "In traditional demographic registries, an unmarried man is designated a 'Bachelor'. What is the corresponding historical feminine term for an unmarried woman?",
        "options": ["Matron", "Spinster", "Widow", "Dowager"],
        "answer": "Spinster",
        "explanation": "Traditionally and legally, a 'bachelor' is an unmarried male, and a 'spinster' is an unmarried female of mature age."
    },
    {
        "question": "A legal brief references a 'Widower' as the sole claimant to the real estate property. This term indicates that the claimant is a:",
        "options": ["Man whose wife has deceased", "Woman whose husband has deceased", "Man who has never been married", "Divorced male official"],
        "answer": "Man whose wife has deceased",
        "explanation": "A 'widower' is a man whose spouse has died; a 'widow' is a woman whose spouse has died."
    },
    {
        "question": "A state protocol document mentions a 'Wizard' in folkloric municipal history. What is the paired feminine noun?",
        "options": ["Witch", "Sorceress", "Enchantress", "Siren"],
        "answer": "Witch",
        "explanation": "In historical gender pairs, 'witch' serves as the feminine counterpart to the masculine 'wizard'."
    },
    {
        "question": "The registry of a diplomatic gala pairs a 'Bridegroom' with which specific feminine counterpart during a civil union celebration?",
        "options": ["Bride", "Spouse", "Consort", "Matron"],
        "answer": "Bride",
        "explanation": "'Bridegroom' (or groom) is the masculine noun that pairs directly with the feminine 'bride'."
    },
    {
        "question": "An archival document references a 'Count' of the realm. What is the proper feminine nobility title associated with this rank?",
        "options": ["Countess", "Duchess", "Baroness", "Marquisa"],
        "answer": "Countess",
        "explanation": "The peerage title 'count' pairs with 'countess' as its feminine equivalent."
    },
    {
        "question": "The administrative manager acted as the 'Host' for the international civil delegation. If a female colleague filled this specific traditional role, she would be called the:",
        "options": ["Hostess", "Stewardess", "Manageress", "Directress"],
        "answer": "Hostess",
        "explanation": "'Host' is the masculine form, whereas 'hostess' is the traditional feminine inflection."
    },
    {
        "question": "In legal property management documents, what is the traditional feminine counterpart of the noun 'Master'?",
        "options": ["Mistress", "Manager", "Proprietress", "Governess"],
        "answer": "Mistress",
        "explanation": "In historical and formal property contexts, 'master' pairs with 'mistress' as the feminine head of a household or estate."
    },
    {
        "question": "A public cultural project features a monument dedicated to a 'God' of ancient mythology. What is the precise feminine word?",
        "options": ["Goddess", "Angel", "Deity", "Patroness"],
        "answer": "Goddess",
        "explanation": "'Goddess' is formed by adding the feminine suffix '-ess' to the masculine noun 'god'."
    },
    {
        "question": "A constitutional history textbook mentions the 'Emperor' who established the territorial boundaries. What is the feminine counterpart?",
        "options": ["Empress", "Tzarina", "Queen", "Regent"],
        "answer": "Empress",
        "explanation": "An 'empress' is the feminine counterpart to an 'emperor', denoting a female sovereign of an empire."
    },
    {
        "question": "A religious history archive documents the activities of a 'Monk' in a secluded monastery. What is the matching feminine noun?",
        "options": ["Nun", "Priestess", "Abbess", "Deaconess"],
        "answer": "Nun",
        "explanation": "A 'monk' is a male member of a cloistered order, while a 'nun' is the female counterpart."
    },

    // 21-30: Official Titles & Designations
    {
        "question": "A civil service workplace memorandum uses the traditional term 'Waiter'. What is its specific feminine equivalent?",
        "options": ["Waitress", "Server", "Stewardess", "Caterer"],
        "answer": "Waitress",
        "explanation": "'Waitress' is the traditional gender-specific feminine term for a food server."
    },
    {
        "question": "An airline logistics report lists a 'Steward' as the cabin safety supervisor. What is the corresponding feminine term?",
        "options": ["Stewardess", "Aviator", "Pilot", "Attendant"],
        "answer": "Stewardess",
        "explanation": "'Stewardess' is the traditional feminine term paired with the masculine 'steward'."
    },
    {
        "question": "A real estate case file states that the 'Landlady' collected the monthly lease. What is the correct masculine counterpart?",
        "options": ["Landlord", "Proprietor", "Lessor", "Bailiff"],
        "answer": "Landlord",
        "explanation": "'Landlady' is the feminine noun for a property owner who rents out spaces; 'landlord' is the masculine form."
    },
    {
        "question": "An international protocol guide notes that a 'Duke' attended the state summit. What is the corresponding feminine title?",
        "options": ["Duchess", "Countess", "Baroness", "Princess"],
        "answer": "Duchess",
        "explanation": "The feminine equivalent of a 'duke' (a high-ranking nobleman) is a 'duchess'."
    },
    {
        "question": "In the peerage systems of historical governance, what is the masculine counterpart to the title 'Lady'?",
        "options": ["Lord", "Knight", "Earl", "Gentleman"],
        "answer": "Lord",
        "explanation": "In formal nobility frameworks, the title 'lady' directly corresponds to the masculine 'lord'."
    },
    {
        "question": "An employee's emergency contact form identifies an individual as a 'Nephew'. What would be the correct feminine term if the relative were a female child of the employee's sibling?",
        "options": ["Niece", "Cousin", "Aunt", "Ward"],
        "answer": "Niece",
        "explanation": "A 'niece' is the female child of one's sibling, serving as the feminine counter-term to 'nephew'."
    },
    {
        "question": "An academic board review notes that the 'Headmaster' updated the curriculum standards. What is the traditional feminine counterpart?",
        "options": ["Headmistress", "Principal", "Superintendent", "Directress"],
        "answer": "Headmistress",
        "explanation": "'Headmaster' refers to a male school head; 'headmistress' is the traditional feminine designation."
    },
    {
        "question": "A security logbook from 1980 records the signature of a 'Policeman'. What was the gender-specific feminine counterpart used during that era?",
        "options": ["Policewoman", "Patrol officer", "Constable", "Marshal"],
        "answer": "Policewoman",
        "explanation": "'Policewoman' was the traditional gender-specific title for a female officer, corresponding to 'policeman'."
    },
    {
        "question": "A corporate marketing directory from a legacy firm lists a 'Salesman' for the region. Which terms are accepted as its traditional feminine variants?",
        "options": ["Saleswoman", "Saleslady", "Both A and B", "Vendor"],
        "answer": "Both A and B",
        "explanation": "Both 'saleswoman' and 'saleslady' have been traditionally utilized as feminine forms of 'salesman'."
    },
    {
        "question": "The press release states that the 'Spokeswoman' answered the media queries. What is the traditional masculine counterpart?",
        "options": ["Spokesman", "Speaker", "Presenter", "Orator"],
        "answer": "Spokesman",
        "explanation": "'Spokesman' is the traditional masculine counterpart to 'spokeswoman'."
    },

    // 31-40: Pronoun Antecedent Agreement (Formal Rules)
    {
        "question": "Complete the administrative statement with correct pronoun agreement: 'The regional director signed ___ official approval for the project budget yesterday.'",
        "options": ["his", "her", "their", "Any of the above depending on the context"],
        "answer": "Any of the above depending on the context",
        "explanation": "Because 'regional director' is a common gender noun, the possessive pronoun can be 'his', 'her', or 'their' (singular/gender-neutral) based on the context."
    },
    {
        "question": "Choose the most grammatically correct pronoun for a traditional formal context: 'Every single auditor must submit ___ independent evaluation report by Friday.'",
        "options": ["his or her", "their", "its", "it's"],
        "answer": "his or her",
        "explanation": "In traditional, formal grammar rules often tested in civil service exams, a singular common gender noun modified by 'every' takes the singular pronoun phrase 'his or her'."
    },
    {
        "question": "Complete the structural sentence: 'The municipal council published ___ revised operational guidelines for the fiscal year.'",
        "options": ["its", "their", "his", "her"],
        "answer": "its",
        "explanation": "'Municipal council' is a collective noun acting as a single neuter organizational unit, requiring the singular neuter possessive pronoun 'its'."
    },
    {
        "question": "Fill the blank following professional pronoun rules: 'The complainant stated that someone had left ___ security badge at the administrative desk.'",
        "options": ["his or her", "their", "its", "our"],
        "answer": "his or her",
        "explanation": "Indefinite singular pronouns like 'someone' traditionally require a singular possessive option such as 'his or her' in formal exam formats."
    },
    {
        "question": "In the sentence, 'The vessel lost ___ primary steering grid during the maritime maneuver', what possessive pronoun is traditionally used for ships in formal personification?",
        "options": ["her", "his", "its", "their"],
        "answer": "her",
        "explanation": "By long-standing maritime tradition and formal literary personification, ships are uniquely assigned the feminine pronoun 'her' or 'she'."
    },
    {
        "question": "Complete the statutory clause: 'Neither the agency chief nor the deputy officer admitted that ___ department had failed the audit.'",
        "options": ["his or her", "their", "its", "our"],
        "answer": "his or her",
        "explanation": "When singular subjects are connected by 'neither... nor', the singular pronoun rule applies, requiring the singular 'his or her'."
    },
    {
        "question": "Complete the entry: 'The witness testified that the driver lost control of ___ vehicle before impacting the concrete barrier.'",
        "options": ["his or her", "their", "its", "one's"],
        "answer": "his or her",
        "explanation": "'Driver' is a common gender singular noun; thus, traditional formal rules dictate 'his or her' to ensure gender inclusion while maintaining singular agreement."
    },
    {
        "question": "Identify the correct pronoun fit: 'The newly born infant was kept in the incubator to monitor ___ respiratory rates.'",
        "options": ["its", "his", "her", "their"],
        "answer": "its",
        "explanation": "In formal grammar, when the biological sex of an infant is unstated or irrelevant to the report, the neuter pronoun 'its' is utilized."
    },
    {
        "question": "Complete the human resource mandate: 'Each applicant must present ___ original academic transcript during the validation process.'",
        "options": ["his or her", "their", "its", "our"],
        "answer": "his or her",
        "explanation": "'Each' distributes the subject as a singular common entity, matching with the singular 'his or her' in formal standard English."
    },
    {
        "question": "Fill the blank in the policy document: 'A public officer must always protect the integrity of ___ designated office.'",
        "options": ["his or her", "their", "its", "one's"],
        "answer": "his or her",
        "explanation": "'A public officer' is singular and common gender, making 'his or her' the most standard formal choice for exam structures."
    },

    // 41-50: Contextual Gender & Neutral Expressions
    {
        "question": "Identify the gender-neutral and modern professional replacement for the occupational term 'Fireman' in official civil service codes:",
        "options": ["Firefighter", "Fire person", "Fire Marshall", "Rescue Warden"],
        "answer": "Firefighter",
        "explanation": "'Firefighter' is the universally accepted gender-neutral title that replaces the masculine-biased term 'fireman'."
    },
    {
        "question": "What is the standard gender-neutral designation used in contemporary public policy to replace 'Policeman'?",
        "options": ["Police officer", "Law enforcer", "Patrol agent", "Peace guard"],
        "answer": "Police officer",
        "explanation": "'Police officer' provides a neutral professional title suitable for any individual in law enforcement."
    },
    {
        "question": "In updated procurement protocols, the term 'Mailman' is modernly replaced by which inclusive expression?",
        "options": ["Mail carrier", "Post operator", "Letter courier", "Postal dispatcher"],
        "answer": "Mail carrier",
        "explanation": "'Mail carrier' (or postal carrier) avoids gender specifications, making it the preferred modern term."
    },
    {
        "question": "To ensure gender neutrality in civil aviation or public hospitality codes, 'Stewardess' has been systematically replaced by:",
        "options": ["Flight attendant", "Cabin server", "Air host", "In-flight operator"],
        "answer": "Flight attendant",
        "explanation": "'Flight attendant' is the standard modern gender-neutral title used across the aviation industry."
    },
    {
        "question": "Which of the following terms serves as an inclusive, gender-neutral title for a presiding official instead of 'Chairman'?",
        "options": ["Chairperson", "Chair", "Both A and B", "Presider"],
        "answer": "Both A and B",
        "explanation": "Modern professional language accepts both 'chairperson' and 'chair' as valid, gender-neutral replacements for 'chairman'."
    },
    {
        "question": "Identify the sentence that contains exactly one masculine noun, one feminine noun, and one neuter noun:",
        "options": [
            "The king gave the queen a golden ring.",
            "The supervisor assigned the clerk a new office.",
            "The uncle visited his nephew at the university.",
            "The actress met the director at the studio."
        ],
        "answer": "The king gave the queen a golden ring.",
        "explanation": "'King' is masculine, 'queen' is feminine, and 'ring' is an inanimate object (neuter). The other sentences contain common nouns or different combinations."
    },
    {
        "question": "In the administrative report sentence, 'The doctor requested an immediate audit from the nurse regarding the medical desk assets', the words 'doctor' and 'nurse' function as:",
        "options": ["Common gender nouns", "Neuter gender nouns", "Masculine nouns", "Feminine nouns"],
        "answer": "Common gender nouns",
        "explanation": "Both 'doctor' and 'nurse' designate professional roles that can be held by individuals of any gender."
    },
    {
        "question": "Examine this legal statement: 'The executor submitted the liquidation ledger to the court.' Which noun in this sentence is explicitly masculine?",
        "options": ["executor", "ledger", "court", "liquidation"],
        "answer": "executor",
        "explanation": "'Executor' is explicitly masculine (paired with the feminine 'executrix'), while 'ledger' and 'court' are neuter, and 'liquidation' is an abstract nominal process."
    },
    {
        "question": "In public relations and human resource manuals, what is the preferred gender-neutral term for 'Manpower'?",
        "options": ["Workforce", "Personnel", "Human resources", "All of the above"],
        "answer": "All of the above",
        "explanation": "'Workforce', 'personnel', and 'human resources' are all effective, modern, gender-neutral alternatives to the legacy term 'manpower'."
    },
    {
        "question": "Which noun in the following statutory text represents the neuter gender? 'The administrator reviewed the contract details inside the government facility.'",
        "options": ["administrator", "contract", "facility", "Both B and C"],
        "answer": "Both B and C",
        "explanation": "Both 'contract' (an abstract legal document) and 'facility' (a physical building structure) are non-living entities classified under the neuter gender."
    }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Inclusive Language & Agreement
  // ============================================================
  advanced: [
    // 1-10: Gender-Neutral Language
     {
        "question": "In contemporary public administration, when a position holder's gender is unspecified, which pronoun approach is preferred for inclusive legal drafting?",
        "options": ["his", "their", "its", "one's"],
        "answer": "their",
        "explanation": "Modern grammatical standards and inclusive public policy emphasize using the singular 'their' as a gender-neutral pronoun when a subject's gender is unknown or irrelevant."
    },
    {
        "question": "Complete the statutory provision using modern inclusive grammar: 'If anyone calls to challenge the assessment, tell ____ that a formal appeal must be filed.'",
        "options": ["him", "her", "them", "it"],
        "answer": "them",
        "explanation": "Indefinite pronouns such as 'anyone' or 'anybody' are single in intent but are widely paired with the gender-inclusive singular 'them' in modern professional contexts."
    },
    {
        "question": "Apply standard policy formatting to complete this directive: 'Every passenger boarding the government transit line must present ____ valid transport pass.'",
        "options": ["his", "her", "their", "its"],
        "answer": "their",
        "explanation": "'Every' syntactically signals a singular group distribution, but to ensure equal gender inclusion without clunky phrasing, modern standards favor 'their'."
    },
    {
        "question": "An administrative security report states: 'Somebody left ____ secure access token at the terminal desk.' Choose the best gender-neutral pronoun.",
        "options": ["his", "her", "their", "its"],
        "answer": "their",
        "explanation": "Because the identity and gender of the person are completely unverified, the inclusive pronoun 'their' is the standard choice."
    },
    {
        "question": "Complete the executive leadership module phrase: 'A truly objective supervisor regularly evaluates the performance metrics of ____ immediate subordinates.'",
        "options": ["his", "her", "their", "its"],
        "answer": "their",
        "explanation": "A supervisor can be of any gender identity; hence, 'their' keeps the executive evaluation guide entirely gender-neutral."
    },
    {
        "question": "According to civil service guidelines on equal opportunity documentation, how should this be structured: 'Each candidate must submit ____ comprehensive credentials.'",
        "options": ["his", "his or her", "their", "All of the above"],
        "answer": "All of the above",
        "explanation": "While legacy test formats accept 'his' (traditional masculine generic) or 'his or her' (binary inclusion), modern administrative styles heavily favor 'their'."
    },
    {
        "question": "Identify the proper pronoun to complete this official inquiry sentence: 'An investigation is underway to determine who dropped ____ clearance portfolio in the hallway.'",
        "options": ["his", "her", "their", "its"],
        "answer": "their",
        "explanation": "The relative pronoun 'who' leaves the gender completely unestablished, necessitating the use of the plural-form singular 'their'."
    },
    {
        "question": "Complete the social welfare draft agreement: 'No one enrolled in the emergency rehabilitation program should be deprived of ____ basic civil rights.'",
        "options": ["his", "her", "their", "its"],
        "answer": "their",
        "explanation": "The negative indefinite pronoun 'no one' pairs efficiently with the genderless singular 'their' to ensure absolute citizen inclusion."
    },
    {
        "question": "A legal guardianship filing states: 'The single parent brought ____ dependent ward to the regional center for verification.' Which pronoun fits best?",
        "options": ["his", "her", "their", "its"],
        "answer": "their",
        "explanation": "The noun 'parent' is of common gender, meaning it encompasses both maternal and paternal figures neutrally through the word 'their'."
    },
    {
        "question": "Fill the blank in the hospital protocol manual: 'A certified attending physician must prioritize the immediate medical concerns of ____ assigned patients.'",
        "options": ["his", "her", "their", "its"],
        "answer": "their",
        "explanation": "Medical professionals are not defined by binary gender expectations in modern documentation, making 'their' the standard inclusive possessive."
    },

    // 11-20: Modern Occupational Designations
    {
        "question": "To comply with modern gender-fair language policies in civil aviation and transport management, the historical term 'Stewardess' has been updated to:",
        "options": ["Flight attendant", "Air host", "Cabin server", "Sky marshal"],
        "answer": "Flight attendant",
        "explanation": "'Flight attendant' is an institutional, gender-neutral title that describes the function rather than the gender of the employee."
    },
    {
        "question": "Which of the following occupational titles is preferred in modern community policing frameworks to avoid gender bias?",
        "options": ["Policeman", "Patrolman", "Police officer", "Lawman"],
        "answer": "Police officer",
        "explanation": "'Police officer' effectively captures the operational rank and responsibility without specifying a male or female identity."
    },
    {
        "question": "A public works logistics proposal is being revised to remove gender-restrictive terms. What should replace the word 'Mailman'?",
        "options": ["Mail carrier", "Postman", "Letter delivery boy", "Postal clerk"],
        "answer": "Mail carrier",
        "explanation": "'Mail carrier' is the recognized, neutral term used to specify personnel handling postal distributions."
    },
    {
        "question": "In an municipal emergency services roster, what is the proper gender-fair replacement for the legacy term 'Fireman'?",
        "options": ["Firefighter", "Fire protector", "Rescue operative", "Bravest operator"],
        "answer": "Firefighter",
        "explanation": "'Firefighter' is the standard neutral nomenclature used across modern global civil safety departments."
    },
    {
        "question": "In modern dramatic arts guilds and general occupational classifications, how is the term 'Actor' now comprehensively utilized?",
        "options": ["Exclusively for male performers", "Exclusively for female performers", "For performers of any gender identity", "Only for theatrical directors"],
        "answer": "For performers of any gender identity",
        "explanation": "Modern industry standards trend toward using 'actor' as a gender-neutral noun for all dramatic performers, phase-shifting away from 'actress'."
    },
    {
        "question": "A constitutional preamble draft aims to utilize gender-neutral terminology. Which alternatives are preferred instead of 'Mankind'?",
        "options": ["Humankind", "Humanity", "Man", "Both A and B"],
        "answer": "Both A and B",
        "explanation": "Both 'humankind' and 'humanity' are accepted as fully inclusive terms that accurately describe the entire human species without male centricity."
    },
    {
        "question": "An environmental safety standard logs a chemical as a 'man-made' compound. What is the most precise and objective gender-neutral alternative?",
        "options": ["Synthetic", "Artificial", "Manufactured", "All of the above"],
        "answer": "All of the above",
        "explanation": "Terms like 'synthetic', 'artificial', and 'manufactured' provide neutral, technically accurate descriptors that eliminate 'man-made'."
    },
    {
        "question": "During a legislative panel reorganization, an official requests a gender-fair title to replace 'Chairman'. Which options are recognized as correct?",
        "options": ["Chairperson", "Chair", "Presiding officer", "All of the above"],
        "answer": "All of the above",
        "explanation": "Depending on specific internal rules, 'chairperson', 'chair', and 'presiding officer' are all valid, neutral options replacing 'chairman'."
    },
    {
        "question": "A historical commemorative resolution mentions the 'forefathers' of the nation. What is the preferred inclusive term?",
        "options": ["Ancestors", "Founders", "Pioneers", "All of the above depending on precision"],
        "answer": "All of the above depending on precision",
        "explanation": "Depending on the exact context, 'ancestors' (lineage) or 'founders/pioneers' (foundational figures) are excellent gender-fair alternatives."
    },
    {
        "question": "In commerce and trade department publications, what term should replace 'Businessman' to ensure modern professional inclusivity?",
        "options": ["Business professional", "Business person", "Executive", "All of the above"],
        "answer": "All of the above",
        "explanation": "All these expressions represent polished, non-gender-biased language suitable for modern institutional economic reports."
    },

    // 21-30: Personification & Literary Gender
    {
        "question": "In classical literature and formal poetic personification, what grammatical gender is traditionally assigned to the 'Sun'?",
        "options": ["Masculine", "Feminine", "Neuter", "Common"],
        "answer": "Masculine",
        "explanation": "In classical literary conventions, the sun is traditionally personified as a masculine entity ('he'), representing power and light."
    },
    {
        "question": "In literary allegories and mythological references, the 'Moon' is typically personified with which gender?",
        "options": ["Masculine", "Feminine", "Neuter", "Common"],
        "answer": "Feminine",
        "explanation": "The moon is historically and poetically personified as feminine ('she'), often tied to classical deities like Diana or Selene."
    },
    {
        "question": "When an essay refers to the phrase 'Mother Nature' protecting her resources, it is employing what type of traditional gender assignment?",
        "options": ["Masculine personification", "Feminine personification", "Neuter abstraction", "Common assignment"],
        "answer": "Feminine personification",
        "explanation": "'Nature' is traditionally cast as a nurturing yet powerful maternal figure, making it a classic example of feminine personification."
    },
    {
        "question": "In classic prose, such as the depiction of the 'Grim Reaper', what grammatical gender is conventionally assigned to 'Death'?",
        "options": ["Masculine", "Feminine", "Neuter", "Common"],
        "answer": "Masculine",
        "explanation": "Death is conventionally personified as masculine in Western literary tradition, represented as a stern male figure or reaper."
    },
    {
        "question": "Environmental texts sometimes personify the planet to emphasize care, calling it 'Mother Earth'. This represents which gender category?",
        "options": ["Masculine", "Feminine", "Neuter", "Common"],
        "answer": "Feminine",
        "explanation": "The planet Earth is historically and cross-culturally personified as a feminine, life-giving archetype."
    },
    {
        "question": "In Epic poetry and classical war records, how is 'War' conventionally personified?",
        "options": ["As a fierce masculine force", "As a gentle feminine presence", "As a purely neuter contract", "As a common domestic concept"],
        "answer": "As a fierce masculine force",
        "explanation": "War is traditionally personified as a aggressive masculine figure, historically linked to deities like Mars or Ares."
    },
    {
        "question": "Poetic works describing the changing seasons often depict 'Spring' as a young maiden sowing seeds. This implies what gender assignment?",
        "options": ["Masculine", "Feminine", "Neuter", "Common"],
        "answer": "Feminine",
        "explanation": "Spring is traditionally personified as feminine, symbolizing rebirth, youth, and beauty."
    },
    {
        "question": "The literary trope of 'Father Time' carrying an hourglass is an explicit personification of time into which gender?",
        "options": ["Masculine", "Feminine", "Neuter", "Common"],
        "answer": "Masculine",
        "explanation": "'Father Time' is a standard cultural and literary personification of time as an old, wise masculine figure."
    },
    {
        "question": "By long-standing maritime law custom and traditional naval jargon, how are deep-sea vessels formally referred to?",
        "options": ["By masculine pronouns (he/him)", "By feminine pronouns (she/her)", "Strictly by neuter pronouns (it)", "By plural pronouns only"],
        "answer": "By feminine pronouns (she/her)",
        "explanation": "Maritime tradition has historically personified ships and large seafaring vessels using the feminine pronouns 'she' and 'her'."
    },
    {
        "question": "When a state orator affectionately refers to their nation as the 'Motherland' or claims allegiance to 'her' laws, they are using:",
        "options": ["Masculine personification", "Feminine personification", "Neuter objective analysis", "Common designation"],
        "answer": "Feminine personification",
        "explanation": "Sovereign nations are frequently personified as feminine figures ('the motherland' or 'the daughter of democracy') in patriotic rhetoric."
    },

    // 31-40: Advanced & Technical Animal Nomenclature
    {
        "question": "An elite agricultural breeding program notes the death of a prize 'Boar'. What is the correct term for its female counterpart?",
        "options": ["Sow", "Gilt", "Bitch", "Cow"],
        "answer": "Sow",
        "explanation": "A 'boar' represents the uncastrated mature male pig, and 'sow' represents the mature breeding female."
    },
    {
        "question": "A forestry wildlife census logs a high population of 'Does' in the reserve. What is the specific masculine counterpart for this animal?",
        "options": ["Buck", "Stallion", "Bull", "Ram"],
        "answer": "Buck",
        "explanation": "A 'doe' is a mature female deer, goat, or rabbit; its masculine counterpart is a 'buck'."
    },
    {
        "question": "A livestock subsidy application requires a count of 'Ewes'. What specific animal type and gender does this track?",
        "options": ["Male goat", "Female sheep", "Male sheep", "Young horse"],
        "answer": "Female sheep",
        "explanation": "An 'ewe' is a mature female sheep, whereas a 'ram' is the mature male sheep."
    },
    {
        "question": "An equine pedigree database categorizes a young horse under three years old as a 'Colt'. What is the accurate term for a young female horse of the same age?",
        "options": ["Filly", "Mare", "Foal", "Gelding"],
        "answer": "Filly",
        "explanation": "A 'colt' is a young male horse; a 'filly' is a young female horse. A 'foal' is generic for any newborn horse."
    },
    {
        "question": "If a racehorse registry logs an animal as a 'Filly', what is the exact masculine equivalent for that developmental stage?",
        "options": ["Colt", "Stallion", "Gelding", "Sire"],
        "answer": "Colt",
        "explanation": "'Filly' (young female) pairs explicitly with 'colt' (young male) before reaching adult horse classification."
    },
    {
        "question": "What is the overarching, gender-neutral collective species name for the gendered pair 'Ram' and 'Ewe'?",
        "options": ["Sheep", "Mutton", "Bovine", "Caprine"],
        "answer": "Sheep",
        "explanation": "'Sheep' is the common/neutral species noun, while 'ram' (male) and 'ewe' (female) designate biological gender."
    },
    {
        "question": "In scientific agricultural classification, what is the overarching collective term used for the group containing 'Bulls' and 'Cows'?",
        "options": ["Cattle", "Swine", "Equine", "Poultry"],
        "answer": "Cattle",
        "explanation": "'Cattle' serves as the collective neutral plural noun for domesticated bovine animals."
    },
    {
        "question": "In professional canine registries (such as the AKC) and technical veterinary science, what is the specific technical term for an adult female dog?",
        "options": ["Bitch", "Dam", "Queen", "Vixen"],
        "answer": "Bitch",
        "explanation": "While often avoided in casual conversation, 'bitch' remains the exact, technical, and non-offensive biological term for a female canine."
    },
    {
        "question": "A specialized canine search-and-rescue team documents a 'Sire' in their pedigree chart. What is the technical counterpart term for the biological mother?",
        "options": ["Dam", "Bitch", "Queen", "Sow"],
        "answer": "Dam",
        "explanation": "In technical animal breeding records, 'sire' is the biological father and 'dam' is the biological mother."
    },
    {
        "question": "An equine ranch report classifies an animal as a 'Gelding'. What does this precise technical term signify?",
        "options": ["A castrated male horse", "A young unweaned horse", "A wild unbroken female horse", "An elite breeding stallion"],
        "answer": "A castrated male horse",
        "explanation": "A 'gelding' is a male horse that has been castrated, changing its classification from a stallion or colt."
    },

    // 41-50: Advanced Legal Suffixes & International Titles
    {
        "question": "An archival text on Imperial Russian history describes the decree of a 'Czar'. What is the correct spelling for the feminine title of this ruler?",
        "options": ["Czarina", "Czarevna", "Tsaris", "Czariss"],
        "answer": "Czarina",
        "explanation": "The title 'czar' (or tsar) takes the traditional feminine inflectional form 'czarina' (or tsarina)."
    },
    {
        "question": "A diplomatic dispatch from an Ottoman historical archive mentions a 'Sultana'. What is the corresponding masculine sovereign title?",
        "options": ["Sultan", "Caliph", "Emir", "Vizier"],
        "answer": "Sultan",
        "explanation": "'Sultana' is the feminine title or consort equivalent to the masculine ruler, the 'sultan'."
    },
    {
        "question": "A state dinner program honors a foreign dignitary holding the title 'Maharajah'. What is the correct title for his sovereign female counterpart or wife?",
        "options": ["Maharani", "Rani", "Begum", "Sultana"],
        "answer": "Maharani",
        "explanation": "The feminine equivalent of the South Asian princely title 'maharajah' is 'maharani'."
    },
    {
        "question": "In formal legal transcription involving Italian civil status, what is the masculine counterpart to the title 'Signora'?",
        "options": ["Signor", "Signorina", "Monsieur", "Senor"],
        "answer": "Signor",
        "explanation": "'Signora' is the title for a married woman, and 'signor' is the corresponding formal masculine title for a man."
    },
    {
        "question": "Review the spelling rules derived from French loanwords in legal documentation: A man engaged to be married is a 'Fiancé'. What is the correct form for an engaged woman?",
        "options": ["Fiancée", "Fiance", "Betrothed", "Bride-to-be"],
        "answer": "Fiancée",
        "explanation": "Loanwords from French retain gender distinctions in formal English: masculine uses one 'e' ('fiancé'), feminine uses two 'e's' ('fiancée')."
    },
    {
        "question": "In formal descriptive texts, a fair-haired man is described as 'Blond'. What is the traditionally accurate spelling variant reserved for a fair-haired woman?",
        "options": ["Blonde", "Blond", "Blondie", "Brunette"],
        "answer": "Blonde",
        "explanation": "In traditional adjective usage, 'blond' describes males, while 'blonde' (with an 'e') is reserved for females."
    },
    {
        "question": "A probate court file notes that a woman was legally designated in a will to administer the estate. What is the traditional feminine form of 'Executor' used in legal jurisprudence?",
        "options": ["Executrix", "Executress", "Executioner", "Administrative Agent"],
        "answer": "Executrix",
        "explanation": "Traditional legal language utilizes the Latinate feminine suffix '-trix', turning 'executor' into 'executrix'."
    },
    {
        "question": "A civil law brief references a 'Testatrix' who drafted her final wishes before passing. What is the masculine counterpart of this legal noun?",
        "options": ["Testator", "Testament", "Executor", "Trustee"],
        "answer": "Testator",
        "explanation": "A 'testator' is a man who makes a valid will; a 'testatrix' is the traditional feminine designation."
    },
    {
        "question": "An older judicial archive identifies a woman managing a bankrupt entity's assets as the 'Administratrix'. What is the standard masculine form of this title?",
        "options": ["Administrator", "Admin", "Executor", "Magistrate"],
        "answer": "Administrator",
        "explanation": "The masculine base title is 'administrator', paired with the traditional legal feminine form 'administratrix'."
    },
    {
        "question": "In classic literary romances, a highly celebrated beautiful woman is called the 'Belle' of the ball. What is the correct term for her handsome male partner or suitor?",
        "options": ["Beau", "Gentleman", "Knight", "Suitor"],
        "answer": "Beau",
        "explanation": "'Belle' stems from the French feminine word for beautiful, while 'beau' is the corresponding masculine term for a handsome male admirer or escort."
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

