const GENDER_QUESTIONS = {
  beginner: [
    // 1-10: Identifying Masculine Nouns
    { question: "Which word is a masculine noun?", choices: ["Mother", "Father", "Sister", "Aunt"], correctIndex: 1, explanation: '"Father" is a male parent.' },
    { question: "Select the masculine noun:", choices: ["Queen", "King", "Princess", "Lady"], correctIndex: 1, explanation: '"King" is a male ruler.' },
    { question: "Which noun refers to a male?", choices: ["Niece", "Uncle", "Daughter", "Grandma"], correctIndex: 1, explanation: '"Uncle" is the brother of a parent (male).' },
    { question: "Find the masculine noun:", choices: ["Son", "Daughter", "Wife", "Mother"], correctIndex: 0, explanation: '"Son" is a male child.' },
    { question: "Which word is masculine?", choices: ["Widow", "Widower", "Bride", "Girl"], correctIndex: 1, explanation: '"Widower" is a man whose wife has died.' },
    { question: "Select the male animal:", choices: ["Hen", "Cow", "Bull", "Duck"], correctIndex: 2, explanation: '"Bull" is a male bovine.' },
    { question: "Which is masculine?", choices: ["Boy", "Girl", "Lady", "Madam"], correctIndex: 0, explanation: '"Boy" is a male child.' },
    { question: "Find the masculine noun:", choices: ["Husband", "Wife", "Mother", "Madam"], correctIndex: 0, explanation: '"Husband" is a male spouse.' },
    { question: "Which noun is masculine?", choices: ["Actor", "Actress", "Heroine", "Waitress"], correctIndex: 0, explanation: '"Actor" is traditionally male (though now used for both).' },
    { question: "Select the masculine word:", choices: ["Gentleman", "Lady", "Woman", "Madam"], correctIndex: 0, explanation: '"Gentleman" refers to a man.' },

    // 11-20: Identifying Feminine Nouns
    { question: "Which word is a feminine noun?", choices: ["Brother", "Uncle", "Sister", "Father"], correctIndex: 2, explanation: '"Sister" is a female sibling.' },
    { question: "Select the feminine noun:", choices: ["Rooster", "Hen", "Bull", "Drake"], correctIndex: 1, explanation: '"Hen" is a female chicken.' },
    { question: "Which noun refers to a female?", choices: ["Nephew", "Niece", "Son", "King"], correctIndex: 1, explanation: '"Niece" is the daughter of a sibling (female).' },
    { question: "Find the feminine noun:", choices: ["Grandfather", "Grandmother", "Uncle", "Dad"], correctIndex: 1, explanation: '"Grandmother" is a female grandparent.' },
    { question: "Which word is feminine?", choices: ["Prince", "Princess", "Duke", "Lord"], correctIndex: 1, explanation: '"Princess" is a female royal.' },
    { question: "Select the female animal:", choices: ["Lion", "Lioness", "Tiger", "Leopard"], correctIndex: 1, explanation: '"Lioness" is a female lion.' },
    { question: "Which is feminine?", choices: ["Lad", "Lass", "Boy", "Man"], correctIndex: 1, explanation: '"Lass" is a girl or young woman.' },
    { question: "Find the feminine noun:", choices: ["Landlord", "Landlady", "Man", "Sir"], correctIndex: 1, explanation: '"Landlady" is a woman who rents out land/building.' },
    { question: "Which noun is feminine?", choices: ["Hero", "Heroine", "Actor", "Waiter"], correctIndex: 1, explanation: '"Heroine" is a female hero.' },
    { question: "Select the feminine word:", choices: ["Monk", "Nun", "Priest", "Friar"], correctIndex: 1, explanation: '"Nun" is a female member of a religious order.' },

    // 21-30: Identifying Neuter Nouns (Objects)
    { question: "Which noun is neuter gender?", choices: ["Baby", "Table", "Mother", "Rooster"], correctIndex: 1, explanation: '"Table" is an object (no gender).' },
    { question: "Select the neuter noun:", choices: ["Computer", "Teacher", "Doctor", "Nurse"], correctIndex: 0, explanation: '"Computer" is a non-living thing.' },
    { question: "Which word is neuter?", choices: ["Boy", "School", "Girl", "Man"], correctIndex: 1, explanation: '"School" is a place/thing.' },
    { question: "Find the neuter noun:", choices: ["Tree", "Cat", "Dog", "Horse"], correctIndex: 0, explanation: 'Plants like "Tree" are usually considered neuter.' },
    { question: "Which is neuter?", choices: ["Phone", "Father", "Aunt", "Son"], correctIndex: 0, explanation: '"Phone" is an object.' },
    { question: "Select the neuter noun:", choices: ["Ball", "Player", "Coach", "Referee"], correctIndex: 0, explanation: '"Ball" is an object.' },
    { question: "Which word refers to a thing?", choices: ["Chair", "Student", "Principal", "Janitor"], correctIndex: 0, explanation: '"Chair" is neuter.' },
    { question: "Find the neuter noun:", choices: ["River", "Swimmer", "Fish", "Crab"], correctIndex: 0, explanation: '"River" is a thing/place.' },
    { question: "Which noun has no gender?", choices: ["Book", "Author", "Writer", "Poet"], correctIndex: 0, explanation: '"Book" is an inanimate object.' },
    { question: "Select the neuter noun:", choices: ["Car", "Driver", "Mechanic", "Passenger"], correctIndex: 0, explanation: '"Car" is a machine/object.' },

    // 31-40: Identifying Common Nouns (Either Male or Female)
    { question: "Which noun is common gender?", choices: ["King", "Queen", "Teacher", "Boy"], correctIndex: 2, explanation: 'A "Teacher" can be male or female.' },
    { question: "Select the common noun:", choices: ["Mother", "Parent", "Father", "Sister"], correctIndex: 1, explanation: 'A "Parent" can be a mother or father.' },
    { question: "Which word implies either gender?", choices: ["Doctor", "Actress", "Nun", "Monk"], correctIndex: 0, explanation: 'A "Doctor" can be a man or woman.' },
    { question: "Find the common gender noun:", choices: ["Friend", "Boyfriend", "Girlfriend", "Husband"], correctIndex: 0, explanation: '"Friend" applies to both genders.' },
    { question: "Which is common gender?", choices: ["Baby", "Boy", "Man", "Woman"], correctIndex: 0, explanation: 'A "Baby" can be a boy or a girl.' },
    { question: "Select the common noun:", choices: ["Student", "Headmaster", "Headmistress", "King"], correctIndex: 0, explanation: '"Student" is gender-neutral.' },
    { question: "Which word is common gender?", choices: ["Cousin", "Uncle", "Aunt", "Niece"], correctIndex: 0, explanation: '"Cousin" can be male or female.' },
    { question: "Find the common gender noun:", choices: ["Guest", "Hostess", "Landlady", "Waiter"], correctIndex: 0, explanation: '"Guest" applies to both.' },
    { question: "Which is common gender?", choices: ["Neighbor", "Man", "Gentleman", "Lady"], correctIndex: 0, explanation: '"Neighbor" can be anyone.' },
    { question: "Select the common noun:", choices: ["Enemy", "King", "Prince", "Duke"], correctIndex: 0, explanation: '"Enemy" applies to both genders.' },

    // 41-50: Basic Matching
    { question: "What is the feminine of 'Boy'?", choices: ["Girl", "Woman", "Lady", "Aunt"], correctIndex: 0, explanation: "Boy - Girl." },
    { question: "What is the masculine of 'Mother'?", choices: ["Father", "Uncle", "Grandpa", "Brother"], correctIndex: 0, explanation: "Mother - Father." },
    { question: "What is the feminine of 'Husband'?", choices: ["Wife", "Spouse", "Partner", "Girl"], correctIndex: 0, explanation: "Husband - Wife." },
    { question: "What is the masculine of 'Sister'?", choices: ["Brother", "Cousin", "Father", "Uncle"], correctIndex: 0, explanation: "Sister - Brother." },
    { question: "What is the feminine of 'King'?", choices: ["Queen", "Princess", "Duchess", "Lady"], correctIndex: 0, explanation: "King - Queen." },
    { question: "What is the masculine of 'Aunt'?", choices: ["Uncle", "Father", "Nephew", "Brother"], correctIndex: 0, explanation: "Aunt - Uncle." },
    { question: "What is the feminine of 'Son'?", choices: ["Daughter", "Niece", "Sister", "Mother"], correctIndex: 0, explanation: "Son - Daughter." },
    { question: "What is the masculine of 'Grandmother'?", choices: ["Grandfather", "Father", "Uncle", "Brother"], correctIndex: 0, explanation: "Grandmother - Grandfather." },
    { question: "What is the feminine of 'Man'?", choices: ["Woman", "Girl", "Lady", "Person"], correctIndex: 0, explanation: "Man - Woman." },
    { question: "What is the masculine of 'Madam'?", choices: ["Sir", "Mister", "Boy", "Man"], correctIndex: 0, explanation: "Madam - Sir." }
  ],

  intermediate: [
    // 1-10: Animal Genders
    { question: "What is the feminine of 'Bull'?", choices: ["Cow", "Heifer", "Mare", "Sow"], correctIndex: 0, explanation: "Bull (Male) - Cow (Female)." },
    { question: "What is the masculine of 'Hen'?", choices: ["Rooster", "Drake", "Gander", "Ram"], correctIndex: 0, explanation: "Hen (Female) - Rooster (Male)." },
    { question: "What is the feminine of 'Horse' (specifically a stallion)?", choices: ["Mare", "Ewe", "Vixen", "Doe"], correctIndex: 0, explanation: "Stallion (Male) - Mare (Female)." },
    { question: "What is the masculine of 'Duck'?", choices: ["Drake", "Goose", "Gander", "Swan"], correctIndex: 0, explanation: "Duck (Female) - Drake (Male)." },
    { question: "What is the feminine of 'Fox'?", choices: ["Vixen", "Sow", "Ewe", "Doe"], correctIndex: 0, explanation: "Fox (Male) - Vixen (Female)." },
    { question: "What is the masculine of 'Goose'?", choices: ["Gander", "Drake", "Rooster", "Bull"], correctIndex: 0, explanation: "Goose (Female) - Gander (Male)." },
    { question: "What is the feminine of 'Ram' (Sheep)?", choices: ["Ewe", "Sow", "Doe", "Mare"], correctIndex: 0, explanation: "Ram (Male) - Ewe (Female)." },
    { question: "What is the masculine of 'Sow' (Pig)?", choices: ["Boar", "Bull", "Ram", "Drake"], correctIndex: 0, explanation: "Sow (Female) - Boar (Male)." },
    { question: "What is the feminine of 'Tiger'?", choices: ["Tigress", "Tigeress", "Tigra", "Tigris"], correctIndex: 0, explanation: "Tiger (Male) - Tigress (Female)." },
    { question: "What is the masculine of 'Lioness'?", choices: ["Lion", "Tiger", "Leopard", "Cat"], correctIndex: 0, explanation: "Lioness (Female) - Lion (Male)." },

    // 11-20: Human Roles & Titles (Set 1)
    { question: "What is the feminine of 'Bachelor'?", choices: ["Spinster", "Wife", "Widow", "Lady"], correctIndex: 0, explanation: "Bachelor (Unmarried man) - Spinster (Unmarried woman)." },
    { question: "What is the masculine of 'Witch'?", choices: ["Wizard", "Warlock", "Sorcerer", "Magician"], correctIndex: 0, explanation: "Witch (Female) - Wizard (Male)." },
    { question: "What is the feminine of 'Monk'?", choices: ["Nun", "Priestess", "Sister", "Lady"], correctIndex: 0, explanation: "Monk (Male) - Nun (Female)." },
    { question: "What is the masculine of 'Bride'?", choices: ["Bridegroom", "Groom", "Husband", "Bachelor"], correctIndex: 0, explanation: "Bride (Female) - Bridegroom or Groom (Male)." },
    { question: "What is the feminine of 'Count'?", choices: ["Countess", "Princess", "Duchess", "Baroness"], correctIndex: 0, explanation: "Count (Male) - Countess (Female)." },
    { question: "What is the masculine of 'Hostess'?", choices: ["Host", "Waiter", "Steward", "Manager"], correctIndex: 0, explanation: "Hostess (Female) - Host (Male)." },
    { question: "What is the feminine of 'God'?", choices: ["Goddess", "Angel", "Saint", "Spirit"], correctIndex: 0, explanation: "God (Male) - Goddess (Female)." },
    { question: "What is the masculine of 'Empress'?", choices: ["Emperor", "King", "Tsar", "Sultan"], correctIndex: 0, explanation: "Empress (Female) - Emperor (Male)." },
    { question: "What is the feminine of 'Master'?", choices: ["Mistress", "Miss", "Mrs", "Lady"], correctIndex: 0, explanation: "Master (Male) - Mistress (Female)." },
    { question: "What is the masculine of 'Widow'?", choices: ["Widower", "Bachelor", "Single", "Husband"], correctIndex: 0, explanation: "Widow (Female) - Widower (Male)." },

    // 21-30: Human Roles & Titles (Set 2)
    { question: "What is the feminine of 'Waiter'?", choices: ["Waitress", "Server", "Stewardess", "Maid"], correctIndex: 0, explanation: "Waiter (Male) - Waitress (Female)." },
    { question: "What is the masculine of 'Stewardess'?", choices: ["Steward", "Pilot", "Waiter", "Host"], correctIndex: 0, explanation: "Stewardess (Female) - Steward (Male)." },
    { question: "What is the feminine of 'Duke'?", choices: ["Duchess", "Countess", "Princess", "Lady"], correctIndex: 0, explanation: "Duke (Male) - Duchess (Female)." },
    { question: "What is the masculine of 'Lady'?", choices: ["Lord", "Gentleman", "Sir", "Knight"], correctIndex: 0, explanation: "Lady (Female) - Lord (Male) in titles, or Gentleman in general." },
    { question: "What is the feminine of 'Nephew'?", choices: ["Niece", "Cousin", "Sister", "Aunt"], correctIndex: 0, explanation: "Nephew (Male) - Niece (Female)." },
    { question: "What is the masculine of 'Landlady'?", choices: ["Landlord", "Owner", "Master", "Host"], correctIndex: 0, explanation: "Landlady (Female) - Landlord (Male)." },
    { question: "What is the feminine of 'Headmaster'?", choices: ["Headmistress", "Principal", "Teacher", "Lady"], correctIndex: 0, explanation: "Headmaster (Male) - Headmistress (Female)." },
    { question: "What is the masculine of 'Policewoman'?", choices: ["Policeman", "Police officer", "Cop", "Sergeant"], correctIndex: 0, explanation: "Policewoman (Female) - Policeman (Male)." },
    { question: "What is the feminine of 'Salesman'?", choices: ["Saleswoman", "Saleslady", "Both A and B", "Seller"], correctIndex: 2, explanation: "Both Saleswoman and Saleslady are used." },
    { question: "What is the masculine of 'Spokeswoman'?", choices: ["Spokesman", "Speaker", "Talker", "Reporter"], correctIndex: 0, explanation: "Spokeswoman (Female) - Spokesman (Male)." },

    // 31-40: Pronoun Agreement (Basic)
    { question: "The boy lost ___ ball.", choices: ["his", "her", "its", "their"], correctIndex: 0, explanation: "Boy is masculine -> his." },
    { question: "The girl finished ___ homework.", choices: ["her", "his", "its", "their"], correctIndex: 0, explanation: "Girl is feminine -> her." },
    { question: "The dog wagged ___ tail.", choices: ["its", "his", "her", "their"], correctIndex: 0, explanation: "Animals (general) are usually 'it/its'." },
    { question: "The teacher asked the student to bring ___ book.", choices: ["his or her", "its", "it", "she"], correctIndex: 0, explanation: "Student is common gender -> his or her." },
    { question: "My mother loves ___ garden.", choices: ["her", "his", "its", "their"], correctIndex: 0, explanation: "Mother is feminine -> her." },
    { question: "The king wore ___ crown.", choices: ["his", "her", "its", "their"], correctIndex: 0, explanation: "King is masculine -> his." },
    { question: "The car has lost ___ shine.", choices: ["its", "his", "her", "their"], correctIndex: 0, explanation: "Car is neuter -> its." },
    { question: "The baby is crying for ___ mother.", choices: ["its", "his", "her", "their"], correctIndex: 0, explanation: "Babies (when gender is unknown) can be referred to as 'its'." },
    { question: "Every girl must clean ___ room.", choices: ["her", "his", "its", "their"], correctIndex: 0, explanation: "Girl is feminine -> her." },
    { question: "Every boy must bring ___ lunch.", choices: ["his", "her", "its", "their"], correctIndex: 0, explanation: "Boy is masculine -> his." },

    // 41-50: Contextual Identification
    { question: "Which word is masculine? 'The mare and the stallion ran.'", choices: ["mare", "stallion", "ran", "the"], correctIndex: 1, explanation: '"Stallion" is the male horse.' },
    { question: "Which word is feminine? 'The ewe and the ram grazed.'", choices: ["ewe", "ram", "grazed", "the"], correctIndex: 0, explanation: '"Ewe" is the female sheep.' },
    { question: "Identify the neuter noun: 'He put the computer on the desk.'", choices: ["He", "computer", "desk", "Both B and C"], correctIndex: 3, explanation: "Both computer and desk are inanimate objects." },
    { question: "Identify the common noun: 'The doctor called the nurse.'", choices: ["doctor", "nurse", "Both A and B", "called"], correctIndex: 2, explanation: "Both doctor and nurse can be male or female." },
    { question: "In 'The ship struck an iceberg', ships are sometimes poetically referred to as:", choices: ["he", "she", "it", "they"], correctIndex: 1, explanation: "Ships/Vehicles are traditionally personified as feminine (she)." },
    { question: "Which is the gender-neutral term for 'Fireman'?", choices: ["Firefighter", "Firewoman", "Fire person", "Burner"], correctIndex: 0, explanation: '"Firefighter" applies to all genders.' },
    { question: "Which is the gender-neutral term for 'Policeman'?", choices: ["Police officer", "Cop", "Guard", "Detective"], correctIndex: 0, explanation: '"Police officer" is the standard neutral term.' },
    { question: "Which is the gender-neutral term for 'Mailman'?", choices: ["Mail carrier", "Post person", "Letter bringer", "Mail boy"], correctIndex: 0, explanation: '"Mail carrier" or "Postal worker".' },
    { question: "Which is the gender-neutral term for 'Stewardess'?", choices: ["Flight attendant", "Plane server", "Air host", "Flyer"], correctIndex: 0, explanation: '"Flight attendant" is the modern term.' },
    { question: "Which is the gender-neutral term for 'Chairman'?", choices: ["Chairperson", "Chair", "Both A and B", "Chairlady"], correctIndex: 2, explanation: "Chairperson or simply 'The Chair' are used." }
  ],
    

    
  advanced: [
    // 1-10: Gender-Neutral Language (Singular 'They')
    { question: "The student lost ____ book. (Gender unknown)", choices: ["his", "her", "their", "its"], correctIndex: 2, explanation: 'Singular "their" is now standard for unknown gender.' },
    { question: "If anyone calls, tell ____ I am busy.", choices: ["him", "her", "them", "it"], correctIndex: 2, explanation: '"Anyone" is singular indefinite, but "them" is used as the neutral pronoun.' },
    { question: "Every passenger must hold ____ ticket.", choices: ["his", "her", "their", "its"], correctIndex: 2, explanation: 'Using "their" avoids assuming the gender of "passenger".' },
    { question: "Somebody left ____ umbrella here.", choices: ["his", "her", "their", "its"], correctIndex: 2, explanation: '"Their" is the preferred gender-neutral possessive.' },
    { question: "A good leader listens to ____ team.", choices: ["his", "her", "their", "its"], correctIndex: 2, explanation: '"Leader" can be any gender; "their" is inclusive.' },
    { question: "Each candidate must submit ____ resume.", choices: ["his", "his or her", "their", "All of the above"], correctIndex: 3, explanation: 'All are grammatically defensible, though "their" or "his or her" are preferred over generic "his".' },
    { question: "Who dropped ____ wallet?", choices: ["his", "her", "their", "its"], correctIndex: 2, explanation: 'We don\'t know the gender of "who".' },
    { question: "No one should lose ____ hope.", choices: ["his", "her", "their", "its"], correctIndex: 2, explanation: '"Their" works best for indefinite "No one".' },
    { question: "The parent brought ____ child to school.", choices: ["his", "her", "their", "its"], correctIndex: 2, explanation: '"Parent" is common gender.' },
    { question: "Usually, a doctor cares for ____ patients.", choices: ["his", "her", "their", "its"], correctIndex: 2, explanation: 'Avoids stereotyping doctors as male.' },

    // 11-20: Modern Usage vs. Traditional (Shift to Neutral)
    { question: "Which term is now preferred over 'Stewardess'?", choices: ["Flight attendant", "Air lady", "Plane host", "Steward"], correctIndex: 0, explanation: 'Gender-neutral job title.' },
    { question: "Instead of 'Policeman', we should use:", choices: ["Cop", "Police officer", "Patrolman", "Guard"], correctIndex: 1, explanation: 'Formal gender-neutral title.' },
    { question: "Instead of 'Mailman', we use:", choices: ["Mail carrier", "Postman", "Mail boy", "Letter man"], correctIndex: 0, explanation: 'Neutral term.' },
    { question: "Instead of 'Fireman', we use:", choices: ["Firefighter", "Fire person", "Burner", "Rescuer"], correctIndex: 0, explanation: 'Neutral term.' },
    { question: "The term 'Actor' is now often used for:", choices: ["Males only", "Females only", "Both males and females", "Neither"], correctIndex: 2, explanation: 'Many female performers prefer "Actor" over "Actress".' },
    { question: "Which is the gender-neutral form of 'Mankind'?", choices: ["Humankind", "Man", "Humanity", "Both A and C"], correctIndex: 3, explanation: 'Both Humankind and Humanity are inclusive.' },
    { question: "Instead of 'Man-made', use:", choices: ["Synthetic", "Artificial", "Manufactured", "All of the above"], correctIndex: 3, explanation: 'These avoid the gendered word "man".' },
    { question: "Instead of 'Chairman', use:", choices: ["Chairperson", "Chair", "Head", "All of the above"], correctIndex: 3, explanation: 'All are neutral alternatives.' },
    { question: "Instead of 'Forefathers', use:", choices: ["Ancestors", "Dads", "Old men", "History"], correctIndex: 0, explanation: '"Ancestors" includes men and women.' },
    { question: "Instead of 'Businessman', use:", choices: ["Business person", "Executive", "Business professional", "All of the above"], correctIndex: 3, explanation: 'Neutral alternatives.' },

    // 21-30: Personification (Poetic Gender)
    { question: "In poetry, the 'Sun' is often personified as:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 0, explanation: 'The Sun (power/strength) is traditionally masculine (He).' },
    { question: "In poetry, the 'Moon' is often personified as:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 1, explanation: 'The Moon (beauty/gentleness) is traditionally feminine (She).' },
    { question: "In poetry, 'Nature' is often personified as:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 1, explanation: '"Mother Nature" (She).' },
    { question: "In poetry, 'Death' is often personified as:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 0, explanation: 'Death is often depicted as masculine (Grim Reaper/He).' },
    { question: "In poetry, 'Earth' is often personified as:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 1, explanation: '"Mother Earth" (She).' },
    { question: "In poetry, 'War' is often personified as:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 0, explanation: 'War (aggression) is traditionally masculine.' },
    { question: "In poetry, 'Spring' is often personified as:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 1, explanation: 'Associated with birth/fertility (She).' },
    { question: "In poetry, 'Time' is often personified as:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 0, explanation: '"Father Time" (He).' },
    { question: "Ships and boats are traditionally referred to as:", choices: ["He", "She", "It", "They"], correctIndex: 1, explanation: 'Tradition dictates ships are feminine.' },
    { question: "Countries, when referred to with affection, are often:", choices: ["Masculine", "Feminine", "Neuter", "Common"], correctIndex: 1, explanation: 'E.g., "Philippines, my motherland... she is beautiful."' },

    // 31-40: Specific Animal Terms (Advanced)
    { question: "What is the feminine of 'Boar'?", choices: ["Sow", "Doe", "Mare", "Hen"], correctIndex: 0, explanation: 'Boar (Male Pig) - Sow (Female Pig).' },
    { question: "What is the masculine of 'Doe'?", choices: ["Buck", "Bull", "Ram", "Stallion"], correctIndex: 0, explanation: 'Buck (Male Deer) - Doe (Female Deer).' },
    { question: "What is the masculine of 'Ewe'?", choices: ["Ram", "Buck", "Boar", "Bull"], correctIndex: 0, explanation: 'Ram (Male Sheep) - Ewe (Female Sheep).' },
    { question: "What is the feminine of 'Colt'?", choices: ["Filly", "Mare", "Foal", "Doe"], correctIndex: 0, explanation: 'Colt (Young Male Horse) - Filly (Young Female Horse).' },
    { question: "What is the masculine of 'Filly'?", choices: ["Colt", "Foal", "Stallion", "Gelding"], correctIndex: 0, explanation: 'See above.' },
    { question: "What is the gender-neutral term for 'Ram/Ewe'?", choices: ["Sheep", "Goat", "Lamb", "Flock"], correctIndex: 0, explanation: 'Sheep is the species name.' },
    { question: "What is the gender-neutral term for 'Bull/Cow'?", choices: ["Cattle", "Oxen", "Bovine", "All of the above"], correctIndex: 3, explanation: 'Refers to the group or species.' },
    { question: "What is the feminine of 'Dog' (specifically)?", choices: ["Bitch", "Dam", "Queen", "Sow"], correctIndex: 0, explanation: 'Technical term for female dog.' },
    { question: "What is the masculine of 'Bitch'?", choices: ["Dog", "Sire", "Hound", "Wolf"], correctIndex: 0, explanation: 'In breeding terms, Dog = Male, Bitch = Female.' },
    { question: "What is a 'Gelding'?", choices: ["Male horse (castrated)", "Female horse", "Young horse", "Wild horse"], correctIndex: 0, explanation: 'A castrated male horse.' },

    // 41-50: Human Titles (Advanced)
    { question: "Feminine of 'Czar'?", choices: ["Czarina", "Queen", "Empress", "Duchess"], correctIndex: 0, explanation: 'Russian royal title.' },
    { question: "Masculine of 'Sultana'?", choices: ["Sultan", "King", "Prince", "Rajah"], correctIndex: 0, explanation: 'Arabic royal title.' },
    { question: "Feminine of 'Maharajah'?", choices: ["Maharani", "Princess", "Rani", "Lady"], correctIndex: 0, explanation: 'Indian royal title.' },
    { question: "Masculine of 'Signora'?", choices: ["Signor", "Sir", "Monsieur", "Senor"], correctIndex: 0, explanation: 'Italian title.' },
    { question: "Feminine of 'Fiancé'?", choices: ["Fiancée", "Bride", "Wife", "Betrothed"], correctIndex: 0, explanation: 'French loanword spelling difference.' },
    { question: "Masculine of 'Blonde'?", choices: ["Blond", "Brunette", "Dark", "Fair"], correctIndex: 0, explanation: 'Blond (Male) vs Blonde (Female) - though distinction is fading.' },
    { question: "Feminine of 'Executor'?", choices: ["Executrix", "Executer", "Executioner", "Executor"], correctIndex: 0, explanation: 'Legal term (though Executor is now often used for both).' },
    { question: "Masculine of 'Testatrix'?", choices: ["Testator", "Testament", "Tester", "Testy"], correctIndex: 0, explanation: 'Legal term: one who makes a will.' },
    { question: "Feminine of 'Administrator'?", choices: ["Administratrix", "Admin", "Secretary", "Boss"], correctIndex: 0, explanation: 'Archaic/Legal feminine form.' },
    { question: "Masculine of 'Belle'?", choices: ["Beau", "Boy", "Handsome", "Gent"], correctIndex: 0, explanation: 'Beau (Male admirer) - Belle (Beautiful woman).' }
  ],

  super: [
    // 1-15: Obscure Animal Genders
    { question: "What is the masculine of 'Pen' (Swan)?", choices: ["Cob", "Drake", "Gander", "Buck"], correctIndex: 0, explanation: 'Cob (Male Swan) - Pen (Female Swan).' },
    { question: "What is the feminine of 'Cob'?", choices: ["Pen", "Hen", "Sow", "Goose"], correctIndex: 0, explanation: 'See above.' },
    { question: "What is the masculine of 'Jill' (Ferret/Polecat)?", choices: ["Hob", "Jack", "Tom", "Buck"], correctIndex: 0, explanation: 'Hob (Male Ferret) - Jill (Female Ferret).' },
    { question: "What is the feminine of 'Tod' (Fox)?", choices: ["Vixen", "Sow", "Doe", "Jill"], correctIndex: 0, explanation: 'Tod is another term for a male fox.' },
    { question: "What is the masculine of 'Tabby' (Cat)?", choices: ["Tom", "Gib", "Jack", "Boar"], correctIndex: 0, explanation: 'Tom (Male Cat) - Tabby/Queen (Female Cat).' },
    { question: "What is the feminine of 'Hart' (Red Deer)?", choices: ["Hind", "Doe", "Roe", "Sow"], correctIndex: 0, explanation: 'Hart (Male Red Deer > 5 yrs) - Hind (Female).' },
    { question: "What is the masculine of 'Hind'?", choices: ["Hart", "Stag", "Buck", "Bull"], correctIndex: 0, explanation: 'See above.' },
    { question: "What is the masculine of 'Jenny' (Donkey)?", choices: ["Jack", "Tom", "Dick", "Harry"], correctIndex: 0, explanation: 'Jack (Male Donkey) - Jenny (Female Donkey).' },
    { question: "What is the feminine of 'Billy' (Goat)?", choices: ["Nanny", "Doe", "Sow", "Ewe"], correctIndex: 0, explanation: 'Billy (Male Goat) - Nanny (Female Goat).' },
    { question: "What is the masculine of 'Nanny' (Goat)?", choices: ["Billy", "Buck", "Ram", "Bull"], correctIndex: 0, explanation: 'See above.' },
    { question: "What is the gender of a 'Drone' (Bee)?", choices: ["Male", "Female", "Neuter", "Common"], correctIndex: 0, explanation: 'Drones are male bees; Workers/Queens are female.' },
    { question: "What is the feminine of 'Tiercel' (Hawk)?", choices: ["Formel", "Hen", "Sow", "Pen"], correctIndex: 0, explanation: 'Tiercel (Male Hawk) - Formel (Female Hawk - archaic/falconry).' },
    { question: "What is the masculine of 'Cygnet'?", choices: ["None (Young Swan)", "Cob", "Pen", "Drake"], correctIndex: 0, explanation: 'Cygnet is a young swan of either gender.' },
    { question: "What is the feminine of 'Buck' (Rabbit)?", choices: ["Doe", "Sow", "Hen", "Vixen"], correctIndex: 0, explanation: 'Rabbits use Buck (Male) and Doe (Female).' },
    { question: "What is the masculine of 'Queen' (Cat)?", choices: ["Tom", "King", "Sire", "Jack"], correctIndex: 0, explanation: 'In breeding, a female cat is a Queen.' },

    // 16-30: Archaic, Foreign, & Legal Terms
    { question: "Masculine of 'Marquise'?", choices: ["Marquis", "Duke", "Earl", "Baron"], correctIndex: 0, explanation: 'French noble title.' },
    { question: "Feminine of 'Viceroy'?", choices: ["Vicereine", "Queen", "Countess", "Lady"], correctIndex: 0, explanation: 'Wife of a viceroy or a woman in the position.' },
    { question: "Masculine of 'Abbess'?", choices: ["Abbot", "Monk", "Priest", "Bishop"], correctIndex: 0, explanation: 'Head of an abbey.' },
    { question: "Feminine of 'Prior'?", choices: ["Prioress", "Nun", "Sister", "Mother"], correctIndex: 0, explanation: 'Head of a priory.' },
    { question: "Masculine of 'Spinster' (Historically)?", choices: ["Spinner", "Bachelor", "Weaver", "Husband"], correctIndex: 0, explanation: 'Originally "Spinner" was male, "Spinster" female. Later Spinster meant unmarried woman.' },
    { question: "Feminine of 'Prosecutor'?", choices: ["Prosecutrix", "Prosecuter", "Lawyer", "Attorney"], correctIndex: 0, explanation: 'Legal archaic feminine.' },
    { question: "Masculine of 'Aviatrix'?", choices: ["Aviator", "Pilot", "Flyer", "Captain"], correctIndex: 0, explanation: 'Old term for female pilot.' },
    { question: "Feminine of 'Equerry'?", choices: ["None/Equerry", "Equerress", "Lady", "Dame"], correctIndex: 0, explanation: 'Traditionally male role, now common gender.' },
    { question: "Masculine of 'Prima Donna'?", choices: ["Primo Uomo", "Tenor", "Singer", "Star"], correctIndex: 0, explanation: 'Italian opera term: First Lady vs First Man.' },
    { question: "Feminine of 'Alumnus'?", choices: ["Alumna", "Alumni", "Alumnae", "Graduate"], correctIndex: 0, explanation: 'Latin singular feminine.' },
    { question: "Plural Masculine of 'Alumnus'?", choices: ["Alumni", "Alumnus", "Alumnas", "Alumnae"], correctIndex: 0, explanation: 'Latin plural masculine.' },
    { question: "Plural Feminine of 'Alumna'?", choices: ["Alumnae", "Alumnas", "Alumni", "Alumnus"], correctIndex: 0, explanation: 'Latin plural feminine.' },
    { question: "Masculine of 'Sorcerer'?", choices: ["Sorcerer", "Witch", "Wizard", "Warlock"], correctIndex: 0, explanation: 'Technically Sorcerer is male, Sorceress is female.' },
    { question: "Feminine of 'Prophet'?", choices: ["Prophetess", "Seer", "Visionary", "Lady"], correctIndex: 0, explanation: 'Prophetess.' },
    { question: "Masculine of 'Diva'?", choices: ["Divo", "Singer", "Tenor", "Star"], correctIndex: 0, explanation: 'Rarely used, but Divo is the male equivalent.' },

    // 31-40: Complex Grammar & Agreement
    { question: "Agreement: 'Neither the manager nor the employees could find ____ keys.'", choices: ["their", "his", "her", "its"], correctIndex: 0, explanation: 'Verb/Pronoun agrees with the closer noun (employees = plural).' },
    { question: "Agreement: 'Neither the employees nor the manager could find ____ keys.'", choices: ["his or her", "their", "its", "our"], correctIndex: 0, explanation: 'Agrees with closer noun (manager = singular).' },
    { question: "Agreement: 'The jury gave ____ verdict.'", choices: ["its", "their", "his", "her"], correctIndex: 0, explanation: 'Jury acting as a single unit = its.' },
    { question: "Agreement: 'The jury were divided in ____ opinions.'", choices: ["their", "its", "his", "her"], correctIndex: 0, explanation: 'Jury acting as individuals = their.' },
    { question: "The phrase 'Gentle reader' historically addresses:", choices: ["Both genders", "Men only", "Women only", "Critics"], correctIndex: 0, explanation: 'A common gender address in older literature.' },
    { question: "Which is an 'Epicene' noun?", choices: ["Teacher", "King", "Queen", "Boy"], correctIndex: 0, explanation: 'Epicene nouns have one form for both sexes (e.g., Teacher, Doctor).' },
    { question: "What is the gender of 'Baby' when the sex is unknown?", choices: ["Neuter (It)", "Masculine", "Feminine", "Common"], correctIndex: 0, explanation: 'Grammatically acceptable to use "it" for babies/animals if sex is unknown.' },
    { question: "In the sentence 'Man is mortal', 'Man' functions as:", choices: ["Generic masculine (Humanity)", "Specific masculine", "Neuter", "Adjective"], correctIndex: 0, explanation: 'Refers to all human beings.' },
    { question: "Which sentence avoids gender bias best?", choices: ["A nurse must be patient with her patients.", "A nurse must be patient with his patients.", "Nurses must be patient with their patients.", "A nurse must be patient with its patients."], correctIndex: 2, explanation: 'Pluralizing is the smoothest way to avoid "his/her" clumsiness.' },
    { question: "The pronoun 'One' (e.g., One must do one's best) is:", choices: ["Gender neutral", "Masculine", "Feminine", "Neuter"], correctIndex: 0, explanation: 'Formal gender-neutral pronoun.' },

    // 41-50: Etymology & Niche Trivia
    { question: "The suffix '-ess' (e.g., Actress) is of what origin?", choices: ["French/Latin", "German", "Greek", "Spanish"], correctIndex: 0, explanation: 'Derived from French -esse.' },
    { question: "The suffix '-ster' (e.g., Spinster) was originally:", choices: ["Feminine", "Masculine", "Neuter", "Common"], correctIndex: 0, explanation: 'In Old English, -ster was a feminine agent suffix (e.g., Bakester).' },
    { question: "Which word is traditionally feminine but applies to males metaphorically?", choices: ["Siren", "Bull", "Ram", "Stag"], correctIndex: 0, explanation: 'A "Siren" is a female creature, sometimes used for tempting people.' },
    { question: "The word 'Widower' is unique because:", choices: ["It derives from the feminine form", "It is shorter than the feminine", "It has no feminine", "It is Latin"], correctIndex: 0, explanation: 'Usually feminine adds a suffix (Waitress), but here Masculine adds suffix to Feminine (Widow -> Widower).' },
    { question: "In grammar, English has 'Natural Gender', whereas Spanish has:", choices: ["Grammatical Gender", "Neutral Gender", "Common Gender", "No Gender"], correctIndex: 0, explanation: 'In Spanish, table is feminine (la mesa); in English, gender is based on biology (Natural).' },
    { question: "Which ship name is masculine?", choices: ["The Bismarck", "The Titanic", "The Queen Mary", "The Elizabeth"], correctIndex: 0, explanation: 'German battleships were often referred to as "He" by their captains, unlike the usual "She".' },
    { question: "What is the masculine of 'Amazon' (Warrior woman)?", choices: ["No specific equivalent", "Warrior", "Soldier", "Spartan"], correctIndex: 0, explanation: 'Amazon specifically refers to a female warrior tribe.' },
    { question: "The term 'Hero' was originally masculine. The feminine is 'Heroine'. Today 'Hero' is:", choices: ["Common gender", "Still masculine only", "Neuter", "Archaic"], correctIndex: 0, explanation: 'Women are often called Heroes now.' },
    { question: "What is the feminine of 'Tsar'?", choices: ["Tsarina", "Tsara", "Queen", "Duchess"], correctIndex: 0, explanation: 'Russian Empress.' },
    { question: "Final Question: 'Justice' is often personified as a woman holding scales. Why?", choices: ["Based on Roman Goddess Justitia", "Based on Greek God Zeus", "Arbitrary choice", "Because women are judges"], correctIndex: 0, explanation: 'Historical mythological personification.' }
  ]
};
  
