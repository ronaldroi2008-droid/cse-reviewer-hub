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
    { question: "Which word is a masculine noun?", options: ["Mother", "Father", "Sister", "Aunt"], answer: "Father", explanation: "'Father' is a male parent." },
    { question: "Select the masculine noun:", options: ["Queen", "King", "Princess", "Lady"], answer: "King", explanation: "'King' is a male ruler." },
    { question: "Which noun refers to a male?", options: ["Niece", "Uncle", "Daughter", "Grandma"], answer: "Uncle", explanation: "'Uncle' refers to the brother of your parent (male)." },
    { question: "Find the masculine noun:", options: ["Son", "Daughter", "Wife", "Mother"], answer: "Son", explanation: "'Son' is a male child." },
    { question: "Which word is masculine?", options: ["Widow", "Widower", "Bride", "Girl"], answer: "Widower", explanation: "'Widower' is a man whose wife has died." },
    { question: "Select the male animal:", options: ["Hen", "Cow", "Bull", "Duck"], answer: "Bull", explanation: "'Bull' is the specific term for a male bovine." },
    { question: "Which is masculine?", options: ["Boy", "Girl", "Lady", "Madam"], answer: "Boy", explanation: "'Boy' is a young male." },
    { question: "Find the masculine noun:", options: ["Husband", "Wife", "Mother", "Madam"], answer: "Husband", explanation: "'Husband' is a male spouse." },
    { question: "Which noun is masculine?", options: ["Actor", "Actress", "Heroine", "Waitress"], answer: "Actor", explanation: "'Actor' is the masculine form." },
    { question: "Select the masculine word:", options: ["Gentleman", "Lady", "Woman", "Madam"], answer: "Gentleman", explanation: "'Gentleman' refers to a polite man." },

    // 11-20: Feminine
    { question: "Which word is a feminine noun?", options: ["Brother", "Uncle", "Sister", "Father"], answer: "Sister", explanation: "'Sister' is a female sibling." },
    { question: "Select the feminine noun:", options: ["Rooster", "Hen", "Bull", "Drake"], answer: "Hen", explanation: "'Hen' is a female chicken." },
    { question: "Which noun refers to a female?", options: ["Nephew", "Niece", "Son", "King"], answer: "Niece", explanation: "'Niece' is the daughter of a sibling (female)." },
    { question: "Find the feminine noun:", options: ["Grandfather", "Grandmother", "Uncle", "Dad"], answer: "Grandmother", explanation: "'Grandmother' is a female grandparent." },
    { question: "Which word is feminine?", options: ["Prince", "Princess", "Duke", "Lord"], answer: "Princess", explanation: "'Princess' is a female royal." },
    { question: "Select the female animal:", options: ["Lion", "Lioness", "Tiger", "Leopard"], answer: "Lioness", explanation: "'Lioness' is the female lion." },
    { question: "Which is feminine?", options: ["Lad", "Lass", "Boy", "Man"], answer: "Lass", explanation: "'Lass' is a girl or young woman." },
    { question: "Find the feminine noun:", options: ["Landlord", "Landlady", "Man", "Sir"], answer: "Landlady", explanation: "'Landlady' is a woman who owns property." },
    { question: "Which noun is feminine?", options: ["Hero", "Heroine", "Actor", "Waiter"], answer: "Heroine", explanation: "'Heroine' is a female hero." },
    { question: "Select the feminine word:", options: ["Monk", "Nun", "Priest", "Friar"], answer: "Nun", explanation: "'Nun' is a female member of a religious order." },

    // 21-30: Neuter (Objects)
    { question: "Which noun is neuter gender?", options: ["Baby", "Table", "Mother", "Rooster"], answer: "Table", explanation: "'Table' is a non-living object." },
    { question: "Select the neuter noun:", options: ["Computer", "Teacher", "Doctor", "Nurse"], answer: "Computer", explanation: "'Computer' is a machine (Neuter)." },
    { question: "Which word is neuter?", options: ["Boy", "School", "Girl", "Man"], answer: "School", explanation: "'School' is a place or building." },
    { question: "Find the neuter noun:", options: ["Tree", "Cat", "Dog", "Horse"], answer: "Tree", explanation: "Plants like 'Tree' are considered neuter." },
    { question: "Which is neuter?", options: ["Phone", "Father", "Aunt", "Son"], answer: "Phone", explanation: "'Phone' is an inanimate object." },
    { question: "Select the neuter noun:", options: ["Ball", "Player", "Coach", "Referee"], answer: "Ball", explanation: "'Ball' is an object." },
    { question: "Which word refers to a thing?", options: ["Chair", "Student", "Principal", "Janitor"], answer: "Chair", explanation: "'Chair' is a thing (Neuter)." },
    { question: "Find the neuter noun:", options: ["River", "Swimmer", "Fish", "Crab"], answer: "River", explanation: "'River' is a geographical feature (Neuter)." },
    { question: "Which noun has no gender?", options: ["Book", "Author", "Writer", "Poet"], answer: "Book", explanation: "'Book' is an object." },
    { question: "Select the neuter noun:", options: ["Car", "Driver", "Mechanic", "Passenger"], answer: "Car", explanation: "'Car' is a vehicle (Neuter)." },

    // 31-40: Common Gender
    { question: "Which noun is common gender?", options: ["King", "Queen", "Teacher", "Boy"], answer: "Teacher", explanation: "A 'Teacher' can be either male or female." },
    { question: "Select the common noun:", options: ["Mother", "Parent", "Father", "Sister"], answer: "Parent", explanation: "'Parent' covers both Mother and Father." },
    { question: "Which word implies either gender?", options: ["Doctor", "Actress", "Nun", "Monk"], answer: "Doctor", explanation: "A 'Doctor' can be male or female." },
    { question: "Find the common gender noun:", options: ["Friend", "Boyfriend", "Girlfriend", "Husband"], answer: "Friend", explanation: "'Friend' is gender-neutral." },
    { question: "Which is common gender?", options: ["Baby", "Boy", "Man", "Woman"], answer: "Baby", explanation: "A 'Baby' can be a boy or a girl." },
    { question: "Select the common noun:", options: ["Student", "Headmaster", "Headmistress", "King"], answer: "Student", explanation: "'Student' applies to anyone studying." },
    { question: "Which word is common gender?", options: ["Cousin", "Uncle", "Aunt", "Niece"], answer: "Cousin", explanation: "'Cousin' can be male or female." },
    { question: "Find the common gender noun:", options: ["Guest", "Hostess", "Landlady", "Waiter"], answer: "Guest", explanation: "'Guest' applies to any visitor." },
    { question: "Which is common gender?", options: ["Neighbor", "Man", "Gentleman", "Lady"], answer: "Neighbor", explanation: "Your 'Neighbor' could be a man or a woman." },
    { question: "Select the common noun:", options: ["Enemy", "King", "Prince", "Duke"], answer: "Enemy", explanation: "An 'Enemy' can be of any gender." },

    // 41-50: Basic Matching
    { question: "What is the feminine of 'Boy'?", options: ["Girl", "Woman", "Lady", "Aunt"], answer: "Girl", explanation: "The opposite of Boy is Girl." },
    { question: "What is the masculine of 'Mother'?", options: ["Father", "Uncle", "Grandpa", "Brother"], answer: "Father", explanation: "The partner of Mother is Father." },
    { question: "What is the feminine of 'Husband'?", options: ["Wife", "Spouse", "Partner", "Girl"], answer: "Wife", explanation: "The partner of Husband is Wife." },
    { question: "What is the masculine of 'Sister'?", options: ["Brother", "Cousin", "Father", "Uncle"], answer: "Brother", explanation: "The male sibling is a Brother." },
    { question: "What is the feminine of 'King'?", options: ["Queen", "Princess", "Duchess", "Lady"], answer: "Queen", explanation: "King rules with a Queen." },
    { question: "What is the masculine of 'Aunt'?", options: ["Uncle", "Father", "Nephew", "Brother"], answer: "Uncle", explanation: "Aunt corresponds to Uncle." },
    { question: "What is the feminine of 'Son'?", options: ["Daughter", "Niece", "Sister", "Mother"], answer: "Daughter", explanation: "Son is male offspring; Daughter is female." },
    { question: "What is the masculine of 'Grandmother'?", options: ["Grandfather", "Father", "Uncle", "Brother"], answer: "Grandfather", explanation: "Grandmother pairs with Grandfather." },
    { question: "What is the feminine of 'Man'?", options: ["Woman", "Girl", "Lady", "Person"], answer: "Woman", explanation: "Man pairs with Woman." },
    { question: "What is the masculine of 'Madam'?", options: ["Sir", "Mister", "Boy", "Man"], answer: "Sir", explanation: "Madam pairs with Sir." }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Animals, Roles & Pronouns
  // ============================================================
  intermediate: [
    // 1-10: Animal Genders
    { question: "What is the feminine of 'Bull'?", options: ["Cow", "Heifer", "Mare", "Sow"], answer: "Cow", explanation: "A 'Bull' is a male bovine, and a 'Cow' is the female." },
    { question: "What is the masculine of 'Hen'?", options: ["Rooster", "Drake", "Gander", "Ram"], answer: "Rooster", explanation: "A 'Hen' is a female chicken. The male is a 'Rooster'." },
    { question: "What is the feminine of 'Horse' (stallion)?", options: ["Mare", "Ewe", "Vixen", "Doe"], answer: "Mare", explanation: "The male is a Stallion; the female is a 'Mare'." },
    { question: "What is the masculine of 'Duck'?", options: ["Drake", "Goose", "Gander", "Swan"], answer: "Drake", explanation: "'Duck' is female. The male is called a 'Drake'." },
    { question: "What is the feminine of 'Fox'?", options: ["Vixen", "Sow", "Ewe", "Doe"], answer: "Vixen", explanation: "A female fox is called a 'Vixen'." },
    { question: "What is the masculine of 'Goose'?", options: ["Gander", "Drake", "Rooster", "Bull"], answer: "Gander", explanation: "Goose is female; the male is a 'Gander'." },
    { question: "What is the feminine of 'Ram' (Sheep)?", options: ["Ewe", "Sow", "Doe", "Mare"], answer: "Ewe", explanation: "Ram is male; 'Ewe' (pronounced 'you') is female." },
    { question: "What is the masculine of 'Sow' (Pig)?", options: ["Boar", "Bull", "Ram", "Drake"], answer: "Boar", explanation: "Sow is female; the male is a 'Boar'." },
    { question: "What is the feminine of 'Tiger'?", options: ["Tigress", "Tigeress", "Tigra", "Tigris"], answer: "Tigress", explanation: "We add '-ess': 'Tigress'." },
    { question: "What is the masculine of 'Lioness'?", options: ["Lion", "Tiger", "Leopard", "Cat"], answer: "Lion", explanation: "Lioness is female; 'Lion' is male." },

    // 11-20: Human Roles
    { question: "What is the feminine of 'Bachelor'?", options: ["Spinster", "Wife", "Widow", "Lady"], answer: "Spinster", explanation: "'Bachelor' is an unmarried man; 'Spinster' is the historical term for an unmarried woman." },
    { question: "What is the masculine of 'Witch'?", options: ["Wizard", "Warlock", "Sorcerer", "Magician"], answer: "Wizard", explanation: "A female magic-user is a Witch; the male is a 'Wizard' (or Warlock)." },
    { question: "What is the feminine of 'Monk'?", options: ["Nun", "Priestess", "Sister", "Lady"], answer: "Nun", explanation: "Monk (male) pairs with 'Nun' (female)." },
    { question: "What is the masculine of 'Bride'?", options: ["Bridegroom", "Groom", "Husband", "Bachelor"], answer: "Bridegroom", explanation: "The male is 'Bridegroom' or Groom." },
    { question: "What is the feminine of 'Count'?", options: ["Countess", "Princess", "Duchess", "Baroness"], answer: "Countess", explanation: "Count -> 'Countess'." },
    { question: "What is the masculine of 'Hostess'?", options: ["Host", "Waiter", "Steward", "Manager"], answer: "Host", explanation: "Hostess is female; 'Host' is male." },
    { question: "What is the feminine of 'God'?", options: ["Goddess", "Angel", "Saint", "Spirit"], answer: "Goddess", explanation: "God -> Goddess." },
    { question: "What is the masculine of 'Empress'?", options: ["Emperor", "King", "Tsar", "Sultan"], answer: "Emperor", explanation: "Empress -> Emperor." },
    { question: "What is the feminine of 'Master'?", options: ["Mistress", "Miss", "Mrs", "Lady"], answer: "Mistress", explanation: "Master pairs with 'Mistress'." },
    { question: "What is the masculine of 'Widow'?", options: ["Widower", "Bachelor", "Single", "Husband"], answer: "Widower", explanation: "We add '-er' to the female 'Widow' to get 'Widower'." },

    // 21-30: Titles
    { question: "What is the feminine of 'Waiter'?", options: ["Waitress", "Server", "Stewardess", "Maid"], answer: "Waitress", explanation: "Waiter -> Waitress." },
    { question: "What is the masculine of 'Stewardess'?", options: ["Steward", "Pilot", "Waiter", "Host"], answer: "Steward", explanation: "Stewardess -> Steward." },
    { question: "What is the feminine of 'Duke'?", options: ["Duchess", "Countess", "Princess", "Lady"], answer: "Duchess", explanation: "Duke -> Duchess." },
    { question: "What is the masculine of 'Lady'?", options: ["Lord", "Gentleman", "Sir", "Knight"], answer: "Lord", explanation: "In nobility: Lady -> Lord." },
    { question: "What is the feminine of 'Nephew'?", options: ["Niece", "Cousin", "Sister", "Aunt"], answer: "Niece", explanation: "Nephew -> Niece." },
    { question: "What is the masculine of 'Landlady'?", options: ["Landlord", "Owner", "Master", "Host"], answer: "Landlord", explanation: "Landlady -> Landlord." },
    { question: "What is the feminine of 'Headmaster'?", options: ["Headmistress", "Principal", "Teacher", "Lady"], answer: "Headmistress", explanation: "Headmaster -> Headmistress." },
    { question: "What is the masculine of 'Policewoman'?", options: ["Policeman", "Police officer", "Cop", "Sergeant"], answer: "Policeman", explanation: "Policewoman -> Policeman." },
    { question: "What is the feminine of 'Salesman'?", options: ["Saleswoman", "Saleslady", "Both A and B", "Seller"], answer: "Both A and B", explanation: "Saleswoman and Saleslady are both used." },
    { question: "What is the masculine of 'Spokeswoman'?", options: ["Spokesman", "Speaker", "Talker", "Reporter"], answer: "Spokesman", explanation: "Spokeswoman -> Spokesman." },

    // 31-40: Pronouns (Basic)
    { question: "The boy lost ___ ball.", options: ["his", "her", "its", "their"], answer: "his", explanation: "'Boy' is masculine -> his." },
    { question: "The girl finished ___ homework.", options: ["her", "his", "its", "their"], answer: "her", explanation: "'Girl' is feminine -> her." },
    { question: "The dog wagged ___ tail.", options: ["its", "his", "her", "their"], answer: "its", explanation: "Animals (unspecified gender) -> its." },
    { question: "The teacher asked the student to bring ___ book.", options: ["his or her", "its", "it", "she"], answer: "his or her", explanation: "'Student' is common gender -> his or her." },
    { question: "My mother loves ___ garden.", options: ["her", "his", "its", "their"], answer: "her", explanation: "Mother -> her." },
    { question: "The king wore ___ crown.", options: ["his", "her", "its", "their"], answer: "his", explanation: "King -> his." },
    { question: "The car has lost ___ shine.", options: ["its", "his", "her", "their"], answer: "its", explanation: "Car (object) -> its." },
    { question: "The baby is crying for ___ mother.", options: ["its", "his", "her", "their"], answer: "its", explanation: "Baby (unspecified) -> its." },
    { question: "Every girl must clean ___ room.", options: ["her", "his", "its", "their"], answer: "her", explanation: "Every girl -> her." },
    { question: "Every boy must bring ___ lunch.", options: ["his", "her", "its", "their"], answer: "his", explanation: "Every boy -> his." },

    // 41-50: Context
    { question: "Which word is masculine? 'The mare and the stallion ran.'", options: ["mare", "stallion", "ran", "the"], answer: "stallion", explanation: "Stallion is the male horse." },
    { question: "Which word is feminine? 'The ewe and the ram grazed.'", options: ["ewe", "ram", "grazed", "the"], answer: "ewe", explanation: "Ewe is the female sheep." },
    { question: "Identify the neuter noun: 'He put the computer on the desk.'", options: ["He", "computer", "desk", "Both B and C"], answer: "Both B and C", explanation: "Computer and desk are both objects." },
    { question: "Identify the common noun: 'The doctor called the nurse.'", options: ["doctor", "nurse", "Both A and B", "called"], answer: "Both A and B", explanation: "Both Doctor and Nurse are common gender." },
    { question: "In 'The ship struck an iceberg', ships are sometimes referred to as:", options: ["he", "she", "it", "they"], answer: "she", explanation: "Ships are historically personified as 'she'." },
    { question: "Gender-neutral for 'Fireman'?", options: ["Firefighter", "Firewoman", "Fire person", "Burner"], answer: "Firefighter", explanation: "Firefighter is the standard neutral term." },
    { question: "Gender-neutral for 'Policeman'?", options: ["Police officer", "Cop", "Guard", "Detective"], answer: "Police officer", explanation: "Police officer is neutral." },
    { question: "Gender-neutral for 'Mailman'?", options: ["Mail carrier", "Postman", "Mail boy", "Letter man"], answer: "Mail carrier", explanation: "Mail carrier is neutral." },
    { question: "Gender-neutral for 'Stewardess'?", options: ["Flight attendant", "Plane server", "Air host", "Flyer"], answer: "Flight attendant", explanation: "Flight attendant is neutral." },
    { question: "Gender-neutral for 'Chairman'?", options: ["Chairperson", "Chair", "Both A and B", "Chairlady"], answer: "Both A and B", explanation: "Chairperson or Chair." }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Inclusive Language & Agreement
  // ============================================================
  advanced: [
    // 1-10: Gender-Neutral Language
    { question: "The student lost ____ book. (Gender unknown)", options: ["his", "her", "their", "its"], answer: "their", explanation: "Singular 'their' is the standard neutral choice." },
    { question: "If anyone calls, tell ____ I am busy.", options: ["him", "her", "them", "it"], answer: "them", explanation: "'Anyone' pairs with 'them'." },
    { question: "Every passenger must hold ____ ticket.", options: ["his", "her", "their", "its"], answer: "their", explanation: "Use 'their' to be inclusive." },
    { question: "Somebody left ____ umbrella here.", options: ["his", "her", "their", "its"], answer: "their", explanation: "'Somebody' pairs with 'their'." },
    { question: "A good leader listens to ____ team.", options: ["his", "her", "their", "its"], answer: "their", explanation: "Leaders can be any gender -> their." },
    { question: "Each candidate must submit ____ resume.", options: ["his", "his or her", "their", "All of the above"], answer: "All of the above", explanation: "All are valid depending on formality, 'their' is modern." },
    { question: "Who dropped ____ wallet?", options: ["his", "her", "their", "its"], answer: "their", explanation: "Unknown owner -> their." },
    { question: "No one should lose ____ hope.", options: ["his", "her", "their", "its"], answer: "their", explanation: "No one -> their." },
    { question: "The parent brought ____ child to school.", options: ["his", "her", "their", "its"], answer: "their", explanation: "Parent -> their." },
    { question: "Usually, a doctor cares for ____ patients.", options: ["his", "her", "their", "its"], answer: "their", explanation: "Doctor -> their." },

    // 11-20: Modern Usage
    { question: "Which term is preferred over 'Stewardess'?", options: ["Flight attendant", "Air lady", "Plane host", "Steward"], answer: "Flight attendant", explanation: "Flight attendant." },
    { question: "Instead of 'Policeman', use:", options: ["Cop", "Police officer", "Patrolman", "Guard"], answer: "Police officer", explanation: "Police officer." },
    { question: "Instead of 'Mailman', use:", options: ["Mail carrier", "Postman", "Mail boy", "Letter man"], answer: "Mail carrier", explanation: "Mail carrier." },
    { question: "Instead of 'Fireman', use:", options: ["Firefighter", "Fire person", "Burner", "Rescuer"], answer: "Firefighter", explanation: "Firefighter." },
    { question: "The term 'Actor' is now often used for:", options: ["Males only", "Females only", "Both males and females", "Neither"], answer: "Both males and females", explanation: "Actor is becoming common for both." },
    { question: "Neutral form of 'Mankind'?", options: ["Humankind", "Man", "Humanity", "Both A and C"], answer: "Both A and C", explanation: "Humankind or Humanity." },
    { question: "Instead of 'Man-made', use:", options: ["Synthetic", "Artificial", "Manufactured", "All of the above"], answer: "All of the above", explanation: "All are good neutral alternatives." },
    { question: "Instead of 'Chairman', use:", options: ["Chairperson", "Chair", "Head", "All of the above"], answer: "All of the above", explanation: "Chairperson or Chair." },
    { question: "Instead of 'Forefathers', use:", options: ["Ancestors", "Dads", "Old men", "History"], answer: "Ancestors", explanation: "Ancestors." },
    { question: "Instead of 'Businessman', use:", options: ["Business person", "Executive", "Business professional", "All of the above"], answer: "All of the above", explanation: "Business person/professional." },

    // 21-30: Personification
    { question: "In poetry, the 'Sun' is:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Masculine", explanation: "Sun = Masculine." },
    { question: "In poetry, the 'Moon' is:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Feminine", explanation: "Moon = Feminine." },
    { question: "In poetry, 'Nature' is:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Feminine", explanation: "Mother Nature = Feminine." },
    { question: "In poetry, 'Death' is:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Masculine", explanation: "Death = Masculine." },
    { question: "In poetry, 'Earth' is:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Feminine", explanation: "Mother Earth = Feminine." },
    { question: "In poetry, 'War' is:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Masculine", explanation: "War = Masculine." },
    { question: "In poetry, 'Spring' is:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Feminine", explanation: "Spring = Feminine." },
    { question: "In poetry, 'Time' is:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Masculine", explanation: "Father Time = Masculine." },
    { question: "Ships/boats are traditionally:", options: ["He", "She", "It", "They"], answer: "She", explanation: "Ships = She." },
    { question: "Countries (affectionately) are:", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Feminine", explanation: "Countries = She (Motherland)." },

    // 31-40: Specific Animals
    { question: "Feminine of 'Boar'?", options: ["Sow", "Doe", "Mare", "Hen"], answer: "Sow", explanation: "Sow." },
    { question: "Masculine of 'Doe'?", options: ["Buck", "Bull", "Ram", "Stallion"], answer: "Buck", explanation: "Buck." },
    { question: "Masculine of 'Ewe'?", options: ["Ram", "Buck", "Boar", "Bull"], answer: "Ram", explanation: "Ram." },
    { question: "Feminine of 'Colt'?", options: ["Filly", "Mare", "Foal", "Doe"], answer: "Filly", explanation: "Filly." },
    { question: "Masculine of 'Filly'?", options: ["Colt", "Foal", "Stallion", "Gelding"], answer: "Colt", explanation: "Colt." },
    { question: "Neutral term for 'Ram/Ewe'?", options: ["Sheep", "Goat", "Lamb", "Flock"], answer: "Sheep", explanation: "Sheep." },
    { question: "Neutral term for 'Bull/Cow'?", options: ["Cattle", "Oxen", "Bovine", "All of the above"], answer: "All of the above", explanation: "Cattle/Bovine." },
    { question: "Feminine of 'Dog' (technical)?", options: ["Bitch", "Dam", "Queen", "Sow"], answer: "Bitch", explanation: "Bitch." },
    { question: "Masculine of 'Bitch'?", options: ["Dog", "Sire", "Hound", "Wolf"], answer: "Dog", explanation: "Dog." },
    { question: "What is a 'Gelding'?", options: ["Male horse (castrated)", "Female horse", "Young horse", "Wild horse"], answer: "Male horse (castrated)", explanation: "Castrated male horse." },

    // 41-50: Titles
    { question: "Feminine of 'Czar'?", options: ["Czarina", "Queen", "Empress", "Duchess"], answer: "Czarina", explanation: "Czarina." },
    { question: "Masculine of 'Sultana'?", options: ["Sultan", "King", "Prince", "Rajah"], answer: "Sultan", explanation: "Sultan." },
    { question: "Feminine of 'Maharajah'?", options: ["Maharani", "Princess", "Rani", "Lady"], answer: "Maharani", explanation: "Maharani." },
    { question: "Masculine of 'Signora'?", options: ["Signor", "Sir", "Monsieur", "Senor"], answer: "Signor", explanation: "Signor." },
    { question: "Feminine of 'Fiancé'?", options: ["Fiancée", "Bride", "Wife", "Betrothed"], answer: "Fiancée", explanation: "Fiancée (two e's)." },
    { question: "Masculine of 'Blonde'?", options: ["Blond", "Brunette", "Dark", "Fair"], answer: "Blond", explanation: "Blond (no e)." },
    { question: "Feminine of 'Executor'?", options: ["Executrix", "Executer", "Executioner", "Executor"], answer: "Executrix", explanation: "Executrix." },
    { question: "Masculine of 'Testatrix'?", options: ["Testator", "Testament", "Tester", "Testy"], answer: "Testator", explanation: "Testator." },
    { question: "Feminine of 'Administrator'?", options: ["Administratrix", "Admin", "Secretary", "Boss"], answer: "Administratrix", explanation: "Administratrix." },
    { question: "Masculine of 'Belle'?", options: ["Beau", "Boy", "Handsome", "Gent"], answer: "Beau", explanation: "Beau." }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (50 Items) - Obscure & Technical
  // ============================================================
  expert: [
    // 1-15: Obscure Animals
    { question: "Masculine of 'Pen' (Swan)?", options: ["Cob", "Drake", "Gander", "Buck"], answer: "Cob", explanation: "Cob." },
    { question: "Feminine of 'Cob'?", options: ["Pen", "Hen", "Sow", "Goose"], answer: "Pen", explanation: "Pen." },
    { question: "Masculine of 'Jill' (Ferret)?", options: ["Hob", "Jack", "Tom", "Buck"], answer: "Hob", explanation: "Hob." },
    { question: "Feminine of 'Tod' (Fox)?", options: ["Vixen", "Sow", "Doe", "Jill"], answer: "Vixen", explanation: "Vixen." },
    { question: "Masculine of 'Tabby' (Cat)?", options: ["Tom", "Gib", "Jack", "Boar"], answer: "Tom", explanation: "Tom." },
    { question: "Feminine of 'Hart' (Red Deer)?", options: ["Hind", "Doe", "Roe", "Sow"], answer: "Hind", explanation: "Hind." },
    { question: "Masculine of 'Hind'?", options: ["Hart", "Stag", "Buck", "Bull"], answer: "Hart", explanation: "Hart." },
    { question: "Masculine of 'Jenny' (Donkey)?", options: ["Jack", "Tom", "Dick", "Harry"], answer: "Jack", explanation: "Jack." },
    { question: "Feminine of 'Billy' (Goat)?", options: ["Nanny", "Doe", "Sow", "Ewe"], answer: "Nanny", explanation: "Nanny." },
    { question: "Masculine of 'Nanny' (Goat)?", options: ["Billy", "Buck", "Ram", "Bull"], answer: "Billy", explanation: "Billy." },
    { question: "Gender of a 'Drone' (Bee)?", options: ["Male", "Female", "Neuter", "Common"], answer: "Male", explanation: "Male." },
    { question: "Feminine of 'Tiercel' (Hawk)?", options: ["Formel", "Hen", "Sow", "Pen"], answer: "Formel", explanation: "Formel." },
    { question: "Masculine of 'Cygnet'?", options: ["None (Young Swan)", "Cob", "Pen", "Drake"], answer: "None (Young Swan)", explanation: "Cygnet is young (neutral)." },
    { question: "Feminine of 'Buck' (Rabbit)?", options: ["Doe", "Sow", "Hen", "Vixen"], answer: "Doe", explanation: "Doe." },
    { question: "Masculine of 'Queen' (Cat)?", options: ["Tom", "King", "Sire", "Jack"], answer: "Tom", explanation: "Tom." },

    // 16-30: Archaic & Foreign
    { question: "Masculine of 'Marquise'?", options: ["Marquis", "Duke", "Earl", "Baron"], answer: "Marquis", explanation: "Marquis." },
    { question: "Feminine of 'Viceroy'?", options: ["Vicereine", "Queen", "Countess", "Lady"], answer: "Vicereine", explanation: "Vicereine." },
    { question: "Masculine of 'Abbess'?", options: ["Abbot", "Monk", "Priest", "Bishop"], answer: "Abbot", explanation: "Abbot." },
    { question: "Feminine of 'Prior'?", options: ["Prioress", "Nun", "Sister", "Mother"], answer: "Prioress", explanation: "Prioress." },
    { question: "Masculine of 'Spinster' (Historically)?", options: ["Spinner", "Bachelor", "Weaver", "Husband"], answer: "Spinner", explanation: "Spinner." },
    { question: "Feminine of 'Prosecutor'?", options: ["Prosecutrix", "Prosecuter", "Lawyer", "Attorney"], answer: "Prosecutrix", explanation: "Prosecutrix." },
    { question: "Masculine of 'Aviatrix'?", options: ["Aviator", "Pilot", "Flyer", "Captain"], answer: "Aviator", explanation: "Aviator." },
    { question: "Feminine of 'Equerry'?", options: ["None/Equerry", "Equerress", "Lady", "Dame"], answer: "None/Equerry", explanation: "Equerry (gender neutral)." },
    { question: "Masculine of 'Prima Donna'?", options: ["Primo Uomo", "Tenor", "Singer", "Star"], answer: "Primo Uomo", explanation: "Primo Uomo." },
    { question: "Feminine of 'Alumnus'?", options: ["Alumna", "Alumni", "Alumnae", "Graduate"], answer: "Alumna", explanation: "Alumna." },
    { question: "Plural Masculine of 'Alumnus'?", options: ["Alumni", "Alumnus", "Alumnas", "Alumnae"], answer: "Alumni", explanation: "Alumni." },
    { question: "Plural Feminine of 'Alumna'?", options: ["Alumnae", "Alumnas", "Alumni", "Alumnus"], answer: "Alumnae", explanation: "Alumnae." },
    { question: "Masculine of 'Sorcerer'?", options: ["Sorcerer", "Witch", "Wizard", "Warlock"], answer: "Sorcerer", explanation: "Sorcerer." },
    { question: "Feminine of 'Prophet'?", options: ["Prophetess", "Seer", "Visionary", "Lady"], answer: "Prophetess", explanation: "Prophetess." },
    { question: "Masculine of 'Diva'?", options: ["Divo", "Singer", "Tenor", "Star"], answer: "Divo", explanation: "Divo." },

    // 31-40: Complex Agreement
    { question: "Agreement: 'Neither the manager nor the employees could find ____ keys.'", options: ["their", "his", "her", "its"], answer: "their", explanation: "Agree with closest noun (employees) -> their." },
    { question: "Agreement: 'Neither the employees nor the manager could find ____ keys.'", options: ["his or her", "their", "its", "our"], answer: "his or her", explanation: "Agree with closest noun (manager) -> his or her." },
    { question: "Agreement: 'The jury gave ____ verdict.'", options: ["its", "their", "his", "her"], answer: "its", explanation: "Unit -> its." },
    { question: "Agreement: 'The jury were divided in ____ opinions.'", options: ["their", "its", "his", "her"], answer: "their", explanation: "Divided -> their." },
    { question: "'Gentle reader' addresses:", options: ["Both genders", "Men only", "Women only", "Critics"], answer: "Both genders", explanation: "Everyone." },
    { question: "Which is an 'Epicene' noun?", options: ["Teacher", "King", "Queen", "Boy"], answer: "Teacher", explanation: "Teacher (one form for both)." },
    { question: "Gender of 'Baby' (unknown sex)?", options: ["Neuter (It)", "Masculine", "Feminine", "Common"], answer: "Neuter (It)", explanation: "It." },
    { question: "'Man is mortal' refers to:", options: ["Generic masculine (Humanity)", "Specific masculine", "Neuter", "Adjective"], answer: "Generic masculine (Humanity)", explanation: "Humanity." },
    { question: "Which avoids bias?", options: ["A nurse must be patient with her patients.", "A nurse must be patient with his patients.", "Nurses must be patient with their patients.", "A nurse must be patient with its patients."], answer: "Nurses must be patient with their patients.", explanation: "Pluralizing (Nurses/their) is best." },
    { question: "Pronoun 'One' is:", options: ["Gender neutral", "Masculine", "Feminine", "Neuter"], answer: "Gender neutral", explanation: "Gender neutral." },

    // 41-50: Trivia
    { question: "Suffix '-ess' origin?", options: ["French/Latin", "German", "Greek", "Spanish"], answer: "French/Latin", explanation: "French/Latin." },
    { question: "Suffix '-ster' (Spinster) original gender?", options: ["Feminine", "Masculine", "Neuter", "Common"], answer: "Feminine", explanation: "Feminine." },
    { question: "Word applied metaphorically to males?", options: ["Siren", "Bull", "Ram", "Stag"], answer: "Siren", explanation: "Siren." },
    { question: "'Widower' is unique because:", options: ["It derives from the feminine form", "It is shorter", "No feminine", "Latin"], answer: "It derives from the feminine form", explanation: "Male derived from female base." },
    { question: "English gender type?", options: ["Natural Gender", "Grammatical Gender", "Common Gender", "No Gender"], answer: "Natural Gender", explanation: "Natural Gender (biological)." },
    { question: "Ship name treated as masculine?", options: ["The Bismarck", "The Titanic", "The Queen Mary", "The Elizabeth"], answer: "The Bismarck", explanation: "The Bismarck." },
    { question: "Masculine of 'Amazon'?", options: ["No specific equivalent", "Warrior", "Soldier", "Spartan"], answer: "No specific equivalent", explanation: "None." },
    { question: "'Hero' today is:", options: ["Common gender", "Masculine only", "Neuter", "Archaic"], answer: "Common gender", explanation: "Common gender." },
    { question: "Feminine of 'Tsar'?", options: ["Tsarina", "Tsara", "Queen", "Duchess"], answer: "Tsarina", explanation: "Tsarina." },
    { question: "Why is Justice a woman?", options: ["Roman Goddess Justitia", "Greek God Zeus", "Random", "Judges"], answer: "Roman Goddess Justitia", explanation: "Justitia." }
  ]
};
