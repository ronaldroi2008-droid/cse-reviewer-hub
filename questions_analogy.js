const ANALOGY_QUESTIONS = {

  // ==========================================
  // LEVEL 1: BEGINNER (Basic Relationships) - 50 items
  // ==========================================
  beginner: [
    // ... existing 25 items ...
    {
      question: "SUN : DAY :: MOON : _______",
      options: ["Night", "Star", "Sky", "Light"],
      answer: "Night",
      explanation: "The sun appears during the day; the moon appears during the night. (Time)"
    },
    {
      question: "WINTER : COLD :: SUMMER : _______",
      options: ["Hot", "Warm", "Snow", "Rain"],
      answer: "Hot",
      explanation: "Winter is cold; summer is hot. (Season : Temperature)"
    },
    {
      question: "BEE : HONEY :: COW : _______",
      options: ["Milk", "Meat", "Grass", "Leather"],
      answer: "Milk",
      explanation: "A bee produces honey; a cow produces milk. (Animal : Product)"
    },
    {
      question: "KEYBOARD : TYPE :: MOUSE : _______",
      options: ["Click", "Scroll", "Point", "Move"],
      answer: "Click",
      explanation: "A keyboard is used to type; a mouse is used to click. (Computer Tool : Action)"
    },
    {
      question: "BREAD : BAKER :: MEAT : _______",
      options: ["Butcher", "Cook", "Farmer", "Hunter"],
      answer: "Butcher",
      explanation: "A baker makes bread; a butcher prepares meat. (Product : Worker)"
    },
    {
      question: "OCEAN : SALT WATER :: LAKE : _______",
      options: ["Fresh Water", "Deep Water", "Cold Water", "Blue Water"],
      answer: "Fresh Water",
      explanation: "An ocean has salt water; a lake has fresh water. (Water Body : Water Type)"
    },
    {
      question: "LIBRARY : BOOKS :: MUSEUM : _______",
      options: ["Artifacts", "People", "Animals", "Food"],
      answer: "Artifacts",
      explanation: "A library contains books; a museum contains artifacts. (Place : Contents)"
    },
    {
      question: "CHAIR : SIT :: BED : _______",
      options: ["Sleep", "Lie", "Rest", "Jump"],
      answer: "Sleep",
      explanation: "A chair is for sitting; a bed is for sleeping. (Furniture : Purpose)"
    },
    {
      question: "DOCTOR : STETHOSCOPE :: SCIENTIST : _______",
      options: ["Microscope", "Telescope", "Thermometer", "Scale"],
      answer: "Microscope",
      explanation: "A doctor uses a stethoscope; a scientist uses a microscope. (Professional : Tool)"
    },
    {
      question: "RED : STOP :: GREEN : _______",
      options: ["Go", "Wait", "Slow", "Caution"],
      answer: "Go",
      explanation: "Red means stop; green means go. (Traffic Light : Meaning)"
    },
    {
      question: "FLOUR : BREAD :: GRAPES : _______",
      options: ["Wine", "Juice", "Jam", "Vinegar"],
      answer: "Wine",
      explanation: "Flour is used to make bread; grapes are used to make wine. (Ingredient : Product)"
    },
    {
      question: "WHEEL : CAR :: PROPELLER : _______",
      options: ["Airplane", "Bicycle", "Train", "Boat"],
      answer: "Airplane",
      explanation: "A wheel moves a car; a propeller moves an airplane. (Part : Vehicle)"
    },
    {
      question: "HIGH : LOW :: FAST : _______",
      options: ["Slow", "Quick", "Rapid", "Swift"],
      answer: "Slow",
      explanation: "High is opposite of low; fast is opposite of slow. (Antonyms)"
    },
    {
      question: "FORK : EAT :: COMB : _______",
      options: ["Hair", "Head", "Style", "Brush"],
      answer: "Hair",
      explanation: "A fork is used to eat; a comb is used for hair. (Tool : Object)"
    },
    {
      question: "BATTERY : ENERGY :: TANK : _______",
      options: ["Water", "Fuel", "Air", "Oil"],
      answer: "Fuel",
      explanation: "A battery stores energy; a tank stores fuel. (Container : Content)"
    },
    {
      question: "FARMER : CROPS :: FISHERMAN : _______",
      options: ["Fish", "Net", "Boat", "Water"],
      answer: "Fish",
      explanation: "A farmer harvests crops; a fisherman catches fish. (Worker : Product)"
    },
    {
      question: "UMBRELLA : RAIN :: SUNGLASSES : _______",
      options: ["Sun", "Snow", "Wind", "Dark"],
      answer: "Sun",
      explanation: "An umbrella protects from rain; sunglasses protect from sun. (Item : Protection)"
    },
    {
      question: "PILOT : AIRPLANE :: CAPTAIN : _______",
      options: ["Ship", "Team", "Army", "Car"],
      answer: "Ship",
      explanation: "A pilot controls an airplane; a captain controls a ship. (Operator : Vehicle)"
    },
    {
      question: "LEAVES : TREE :: PETALS : _______",
      options: ["Flower", "Stem", "Root", "Branch"],
      answer: "Flower",
      explanation: "Leaves are part of a tree; petals are part of a flower. (Part : Whole)"
    },
    {
      question: "HARD : SOFT :: LOUD : _______",
      options: ["Quiet", "Noisy", "Sound", "Silent"],
      answer: "Quiet",
      explanation: "Hard is opposite of soft; loud is opposite of quiet. (Antonyms)"
    },
    {
      question: "MAP : LOCATION :: CALENDAR : _______",
      options: ["Date", "Time", "Year", "Month"],
      answer: "Date",
      explanation: "A map shows location; a calendar shows date. (Tool : Information)"
    },
    {
      question: "BANK : MONEY :: HOTEL : _______",
      options: ["Guests", "Food", "Rooms", "Service"],
      answer: "Guests",
      explanation: "A bank serves people with money; a hotel serves guests. (Place : People)"
    },
    {
      question: "SCISSORS : CUT :: GLUE : _______",
      options: ["Stick", "Break", "Color", "Write"],
      answer: "Stick",
      explanation: "Scissors are used to cut; glue is used to stick. (Tool : Action)"
    },
    {
      question: "MORNING : SUNRISE :: EVENING : _______",
      options: ["Sunset", "Moon", "Stars", "Dark"],
      answer: "Sunset",
      explanation: "Morning has sunrise; evening has sunset. (Time : Event)"
    },
    {
      question: "SWEET : CANDY :: SALTY : _______",
      options: ["Chips", "Chocolate", "Cake", "Ice Cream"],
      answer: "Chips",
      explanation: "Candy is sweet; chips are salty. (Taste : Food)"
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (Logic & Vocabulary) - 50 items
  // ==========================================
  intermediate: [
    // ... existing 25 items ...
    {
      question: "ANALOGY : COMPARISON :: METAPHOR : _______",
      options: ["Symbol", "Similarity", "Contrast", "Example"],
      answer: "Similarity",
      explanation: "An analogy is a type of comparison; a metaphor is a type of similarity. (Literary Term : Definition)"
    },
    {
      question: "GILLS : FISH :: LUNGS : _______",
      options: ["Mammals", "Birds", "Humans", "Animals"],
      answer: "Mammals",
      explanation: "Fish breathe through gills; mammals breathe through lungs. (Organ : Animal Group)"
    },
    {
      question: "INSULATOR : ELECTRICITY :: REFRIGERATOR : _______",
      options: ["Heat", "Cold", "Food", "Water"],
      answer: "Heat",
      explanation: "An insulator blocks electricity; a refrigerator blocks heat. (Device : Blocked Element)"
    },
    {
      question: "PEDAL : BICYCLE :: RUDDER : _______",
      options: ["Boat", "Car", "Plane", "Train"],
      answer: "Boat",
      explanation: "A pedal controls a bicycle; a rudder controls a boat. (Control : Vehicle)"
    },
    {
      question: "COMPASS : DIRECTION :: BAROMETER : _______",
      options: ["Pressure", "Temperature", "Humidity", "Wind"],
      answer: "Pressure",
      explanation: "A compass shows direction; a barometer shows pressure. (Instrument : Measurement)"
    },
    {
      question: "SYMPHONY : ORCHESTRA :: SOLO : _______",
      options: ["Singer", "Musician", "Instrument", "Performance"],
      answer: "Musician",
      explanation: "A symphony is played by an orchestra; a solo is played by one musician. (Performance : Performer)"
    },
    {
      question: "FOSSIL : PALAEONTOLOGIST :: ARTIFACT : _______",
      options: ["Archaeologist", "Historian", "Geologist", "Biologist"],
      answer: "Archaeologist",
      explanation: "A palaeontologist studies fossils; an archaeologist studies artifacts. (Scientist : Subject)"
    },
    {
      question: "MOLECULE : ATOM :: SOLAR SYSTEM : _______",
      options: ["Planet", "Star", "Sun", "Galaxy"],
      answer: "Planet",
      explanation: "A molecule contains atoms; a solar system contains planets. (System : Component)"
    },
    {
      question: "VACCINE : IMMUNITY :: VITAMIN : _______",
      options: ["Health", "Strength", "Energy", "Growth"],
      answer: "Health",
      explanation: "A vaccine provides immunity; a vitamin provides health. (Substance : Benefit)"
    },
    {
      question: "METAMORPHOSIS : CHANGE :: EVOLUTION : _______",
      options: ["Development", "Revolution", "Creation", "Destruction"],
      answer: "Development",
      explanation: "Metamorphosis is a type of change; evolution is a type of development. (Process : Type)"
    },
    {
      question: "CENSUS : POPULATION :: INVENTORY : _______",
      options: ["Goods", "Money", "Land", "Buildings"],
      answer: "Goods",
      explanation: "A census counts population; an inventory counts goods. (Count : Subject)"
    },
    {
      question: "LEVER : MECHANICAL ADVANTAGE :: PULLEY : _______",
      options: ["Lifting", "Pushing", "Turning", "Cutting"],
      answer: "Lifting",
      explanation: "A lever provides mechanical advantage; a pulley provides lifting power. (Tool : Function)"
    },
    {
      question: "HIBERNATION : WINTER :: MIGRATION : _______",
      options: ["Season", "Climate", "Food", "Habitat"],
      answer: "Season",
      explanation: "Hibernation occurs in winter; migration occurs seasonally. (Animal Behavior : Time)"
    },
    {
      question: "PHOTOSYNTHESIS : PLANTS :: RESPIRATION : _______",
      options: ["Animals", "Humans", "Mammals", "Living Things"],
      answer: "Living Things",
      explanation: "Plants perform photosynthesis; living things perform respiration. (Process : Organism)"
    },
    {
      question: "ECLIPSE : CELESTIAL :: EARTHQUAKE : _______",
      options: ["Geological", "Atmospheric", "Oceanic", "Cosmic"],
      answer: "Geological",
      explanation: "An eclipse is a celestial event; an earthquake is a geological event. (Event : Category)"
    },
    {
      question: "SYNONYM : SIMILAR :: ANTONYM : _______",
      options: ["Opposite", "Different", "Same", "Related"],
      answer: "Opposite",
      explanation: "Synonyms have similar meanings; antonyms have opposite meanings. (Word Relationship)"
    },
    {
      question: "FRACTION : DECIMAL :: PERCENTAGE : _______",
      options: ["Ratio", "Proportion", "Whole", "Part"],
      answer: "Ratio",
      explanation: "A fraction can be a decimal; a percentage is a type of ratio. (Mathematical Terms)"
    },
    {
      question: "GRAVITY : ATTRACTION :: MAGNETISM : _______",
      options: ["Polarity", "Repulsion", "Force", "Field"],
      answer: "Polarity",
      explanation: "Gravity involves attraction; magnetism involves polarity. (Physical Force : Characteristic)"
    },
    {
      question: "METAPHOR : IMPLIED :: SIMILE : _______",
      options: ["Stated", "Direct", "Obvious", "Explicit"],
      answer: "Direct",
      explanation: "A metaphor is implied comparison; a simile is direct comparison. (Literary Device : Nature)"
    },
    {
      question: "ECOSYSTEM : ENVIRONMENT :: ORGANISM : _______",
      options: ["Habitat", "Home", "Cell", "Body"],
      answer: "Habitat",
      explanation: "An ecosystem is an environment; an organism has a habitat. (Biology Terms)"
    },
    {
      question: "CATALYST : REACTION :: ENZYME : _______",
      options: ["Digestion", "Growth", "Movement", "Breathing"],
      answer: "Digestion",
      explanation: "A catalyst speeds up a reaction; an enzyme speeds up digestion. (Agent : Process)"
    },
    {
      question: "INSULIN : SUGAR :: HEMOGLOBIN : _______",
      options: ["Oxygen", "Blood", "Iron", "Cells"],
      answer: "Oxygen",
      explanation: "Insulin regulates sugar; hemoglobin carries oxygen. (Substance : Function)"
    },
    {
      question: "RENAISSANCE : REBIRTH :: ENLIGHTENMENT : _______",
      options: ["Reason", "Knowledge", "Light", "Education"],
      answer: "Reason",
      explanation: "Renaissance means rebirth; Enlightenment emphasizes reason. (Historical Period : Focus)"
    },
    {
      question: "MONARCH : ROYALTY :: PRESIDENT : _______",
      options: ["Democracy", "Republic", "Government", "Leadership"],
      answer: "Republic",
      explanation: "A monarch represents royalty; a president represents a republic. (Leader : System)"
    },
    {
      question: "HYPOTHESIS : THEORY :: EXPERIMENT : _______",
      explanation: "A hypothesis leads to a theory; an experiment leads to proof. (Scientific Process)"
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (Abstract & Specialized) - 50 items
  // ==========================================
  advanced: [
    // ... existing 25 items ...
    {
      question: "CATHARSIS : EMOTION :: THERAPY : _______",
      options: ["Healing", "Treatment", "Medicine", "Recovery"],
      answer: "Healing",
      explanation: "Catharsis releases emotion; therapy promotes healing. (Process : Outcome)"
    },
    {
      question: "PARADOX : CONTRADICTION :: DILEMMA : _______",
      options: ["Choice", "Problem", "Solution", "Question"],
      answer: "Choice",
      explanation: "A paradox involves contradiction; a dilemma involves difficult choice. (Concept : Nature)"
    },
    {
      question: "UTOPIA : IDEAL :: DYSTOPIA : _______",
      options: ["Nightmare", "Reality", "Future", "Past"],
      answer: "Nightmare",
      explanation: "Utopia represents ideal society; dystopia represents nightmare society. (Literary Concept)"
    },
    {
      question: "EMPIRICAL : OBSERVATION :: THEORETICAL : _______",
      options: ["Speculation", "Proof", "Experiment", "Data"],
      answer: "Speculation",
      explanation: "Empirical is based on observation; theoretical is based on speculation. (Knowledge Type : Basis)"
    },
    {
      question: "DICHOTOMY : DIVISION :: SPECTRUM : _______",
      options: ["Range", "Color", "Light", "Scale"],
      answer: "Range",
      explanation: "A dichotomy is a division; a spectrum is a range. (Concept : Nature)"
    },
    {
      question: "AMBIVALENCE : UNCERTAINTY :: CONVICTION : _______",
      options: ["Certainty", "Belief", "Faith", "Trust"],
      answer: "Certainty",
      explanation: "Ambivalence means uncertainty; conviction means certainty. (Mental State)"
    },
    {
      question: "ANACHRONISM : TIME :: ANOMALY : _______",
      options: ["Pattern", "Rule", "System", "Order"],
      answer: "Pattern",
      explanation: "An anachronism is out of time; an anomaly is out of pattern. (Deviation : Context)"
    },
    {
      question: "SUBJECTIVE : PERSONAL :: OBJECTIVE : _______",
      options: ["Impersonal", "General", "Universal", "Factual"],
      answer: "Impersonal",
      explanation: "Subjective is personal; objective is impersonal. (Perspective)"
    },
    {
      question: "METACOGNITION : THINKING :: METANARRATIVE : _______",
      options: ["Story", "History", "Narrative", "Plot"],
      answer: "Narrative",
      explanation: "Metacognition is thinking about thinking; metanarrative is narrative about narrative. (Meta-concept)"
    },
    {
      question: "SYMBIOSIS : MUTUALISM :: PARASITISM : _______",
      options: ["Exploitation", "Sharing", "Cooperation", "Competition"],
      answer: "Exploitation",
      explanation: "Symbiosis includes mutualism; parasitism involves exploitation. (Biological Relationship)"
    },
    {
      question: "EPISTEMOLOGY : KNOWLEDGE :: ONTOLOGY : _______",
      options: ["Existence", "Reality", "Truth", "Being"],
      answer: "Existence",
      explanation: "Epistemology studies knowledge; ontology studies existence. (Philosophical Discipline)"
    },
    {
      question: "HEGEMONY : DOMINANCE :: AUTONOMY : _______",
      options: ["Independence", "Freedom", "Control", "Power"],
      answer: "Independence",
      explanation: "Hegemony means dominance; autonomy means independence. (Political Concept)"
    },
    {
      question: "DIALECTIC : SYNTHESIS :: DIALOGUE : _______",
      options: ["Understanding", "Conversation", "Argument", "Debate"],
      answer: "Understanding",
      explanation: "Dialectic leads to synthesis; dialogue leads to understanding. (Process : Outcome)"
    },
    {
      question: "PARADIGM : FRAMEWORK :: DOGMA : _______",
      options: ["Doctrine", "Belief", "Rule", "Law"],
      answer: "Doctrine",
      explanation: "A paradigm is a framework; a dogma is a doctrine. (Concept Type)"
    },
    {
      question: "EMPATHY : UNDERSTANDING :: COMPASSION : _______",
      options: ["Action", "Feeling", "Kindness", "Help"],
      answer: "Action",
      explanation: "Empathy involves understanding; compassion involves action. (Emotional Response)"
    },
    {
      question: "ALLEGORY : SYMBOLISM :: SATIRE : _______",
      options: ["Criticism", "Humor", "Irony", "Mockery"],
      answer: "Criticism",
      explanation: "Allegory uses symbolism; satire uses criticism. (Literary Device)"
    },
    {
      question: "CIRCULAR REASONING : FALLACY :: AD HOMINEM : _______",
      options: ["Attack", "Argument", "Logic", "Reason"],
      answer: "Attack",
      explanation: "Circular reasoning is a fallacy; ad hominem is a personal attack. (Logical Fallacy)"
    },
    {
      question: "COGNITIVE DISSONANCE : CONFLICT :: CONFIRMATION BIAS : _______",
      options: ["Selection", "Preference", "Favoritism", "Choice"],
      answer: "Selection",
      explanation: "Cognitive dissonance is mental conflict; confirmation bias is selective thinking. (Psychological Concept)"
    },
    {
      question: "MACROECONOMICS : AGGREGATE :: MICROECONOMICS : _______",
      options: ["Individual", "Small", "Personal", "Specific"],
      answer: "Individual",
      explanation: "Macroeconomics studies aggregate; microeconomics studies individual. (Economic Level)"
    },
    {
      question: "QUANTITATIVE : MEASUREMENT :: QUALITATIVE : _______",
      options: ["Description", "Quality", "Characteristic", "Attribute"],
      answer: "Description",
      explanation: "Quantitative involves measurement; qualitative involves description. (Research Method)"
    },
    {
      question: "SEMANTICS : MEANING :: SYNTAX : _______",
      options: ["Structure", "Grammar", "Order", "Arrangement"],
      answer: "Structure",
      explanation: "Semantics deals with meaning; syntax deals with structure. (Linguistic Elements)"
    },
    {
      question: "PROTAGONIST : HERO :: ANTAGONIST : _______",
      options: ["Villain", "Enemy", "Opponent", "Rival"],
      answer: "Villain",
      explanation: "Protagonist is the hero; antagonist is the villain. (Literary Character)"
    },
    {
      question: "DENOTATION : LITERAL :: CONNOTATION : _______",
      options: ["Associative", "Figurative", "Symbolic", "Implied"],
      answer: "Associative",
      explanation: "Denotation is literal meaning; connotation is associative meaning. (Word Meaning)"
    },
    {
      question: "ANTHROPOMORPHISM : HUMAN :: ZOOMORPHISM : _______",
      options: ["Animal", "Nature", "God", "Machine"],
      answer: "Animal",
      explanation: "Anthropomorphism attributes human traits; zoomorphism attributes animal traits. (Literary Device)"
    },
    {
      question: "SOLIPSISM : SELF :: ALTRUISM : _______",
      options: ["Others", "Society", "Community", "World"],
      answer: "Others",
      explanation: "Solipsism focuses on self; altruism focuses on others. (Philosophical Concept)"
    }
  ],

  // ==========================================
  // LEVEL 4: SUPER (High Vocabulary & Complex Logic) - 50 items
  // ==========================================
  super: [
    // ... existing 25 items ...
    {
      question: "PERFIDIOUS : TRUST :: TREACHEROUS : _______",
      options: ["Loyalty", "Faith", "Honesty", "Allegiance"],
      answer: "Loyalty",
      explanation: "Perfidious violates trust; treacherous violates loyalty. (Adjective : Violated Quality)"
    },
    {
      question: "SAGACIOUS : WISDOM :: PRESCIENT : _______",
      options: ["Foresight", "Knowledge", "Intelligence", "Understanding"],
      answer: "Foresight",
      explanation: "Sagacious means wise; prescient means having foresight. (Adjective : Quality)"
    },
    {
      question: "VORACIOUS : HUNGER :: INSATIABLE : _______",
      options: ["Desire", "Thirst", "Appetite", "Need"],
      answer: "Desire",
      explanation: "Voracious describes hunger; insatiable describes desire. (Adjective : Object)"
    },
    {
      question: "PROLIFIC : PRODUCTIVE :: FECUND : _______",
      options: ["Fertile", "Creative", "Inventive", "Generative"],
      answer: "Fertile",
      explanation: "Prolific means productive; fecund means fertile. (Synonyms)"
    },
    {
      question: "OBSTREPEROUS : NOISY :: TURBULENT : _______",
      options: ["Chaotic", "Violent", "Stormy", "Disruptive"],
      answer: "Chaotic",
      explanation: "Obstreperous means noisy; turbulent means chaotic. (Adjective : Nature)"
    },
    {
      question: "RECALCITRANT : AUTHORITY :: INTRANSIGENT : _______",
      options: ["Compromise", "Change", "Agreement", "Cooperation"],
      answer: "Compromise",
      explanation: "Recalcitrant resists authority; intransigent resists compromise. (Adjective : Resistance)"
    },
    {
      question: "SALUBRIOUS : HEALTH :: BENEFICIAL : _______",
      options: ["Advantage", "Good", "Help", "Welfare"],
      answer: "Advantage",
      explanation: "Salubrious promotes health; beneficial provides advantage. (Adjective : Benefit)"
    },
    {
      question: "PERNICIOUS : HARM :: DETRIMENTAL : _______",
      options: ["Damage", "Injury", "Loss", "Ruin"],
      answer: "Damage",
      explanation: "Pernicious causes harm; detrimental causes damage. (Adjective : Negative Effect)"
    },
    {
      question: "MAGNANIMOUS : GENEROSITY :: MUNIFICENT : _______",
      options: ["Largesse", "Kindness", "Charity", "Giving"],
      answer: "Largesse",
      explanation: "Magnanimous shows generosity; munificent shows largesse. (Adjective : Quality)"
    },
    {
      question: "VERBOSE : WORDY :: LACONIC : _______",
      options: ["Concise", "Brief", "Short", "Succinct"],
      answer: "Concise",
      explanation: "Verbose means wordy; laconic means concise. (Antonyms)"
    },
    {
      question: "EPHEMERAL : TEMPORARY :: EVANESCENT : _______",
      options: ["Fleeting", "Brief", "Short-lived", "Momentary"],
      answer: "Fleeting",
      explanation: "Ephemeral means temporary; evanescent means fleeting. (Synonyms)"
    },
    {
      question: "UBIQUITOUS : EVERYWHERE :: OMNIPRESENT : _______",
      options: ["Universal", "All-present", "Widespread", "Pervasive"],
      answer: "All-present",
      explanation: "Ubiquitous means everywhere; omnipresent means all-present. (Synonyms)"
    },
    {
      question: "ESOTERIC : OBSCURE :: ARCANE : _______",
      options: ["Mysterious", "Secret", "Hidden", "Unknown"],
      answer: "Mysterious",
      explanation: "Esoteric means obscure; arcane means mysterious. (Synonyms)"
    },
    {
      question: "PROCRASTINATE : DELAY :: PREVARICATE : _______",
      options: ["Lie", "Deceive", "Evade", "Avoid"],
      answer: "Evade",
      explanation: "Procrastinate means to delay; prevaricate means to evade. (Verb : Meaning)"
    },
    {
      question: "VACILLATE : DECISION :: OSCILLATE : _______",
      options: ["Position", "Movement", "Direction", "Point"],
      answer: "Position",
      explanation: "Vacillate between decisions; oscillate between positions. (Verb : Object)"
    },
    {
      question: "CAPITULATE : SURRENDER :: ACQUIESCE : _______",
      options: ["Agree", "Comply", "Submit", "Yield"],
      answer: "Comply",
      explanation: "Capitulate means to surrender; acquiesce means to comply. (Verb : Meaning)"
    },
    {
      question: "EXACERBATE : WORSEN :: ALLEVIATE : _______",
      options: ["Improve", "Relieve", "Help", "Cure"],
      answer: "Relieve",
      explanation: "Exacerbate means to worsen; alleviate means to relieve. (Verb : Opposite)"
    },
    {
      question: "ABROGATE : LAW :: ANNUL : _______",
      options: ["Marriage", "Contract", "Agreement", "Treaty"],
      answer: "Marriage",
      explanation: "Abrogate a law; annul a marriage. (Verb : Object)"
    },
    {
      question: "EXTRICATE : DIFFICULTY :: DISENTANGLE : _______",
      options: ["Complication", "Problem", "Mess", "Web"],
      answer: "Complication",
      explanation: "Extricate from difficulty; disentangle from complication. (Verb : Situation)"
    },
    {
      question: "PERPETUATE : CONTINUE :: PROPAGATE : _______",
      options: ["Spread", "Multiply", "Grow", "Extend"],
      answer: "Spread",
      explanation: "Perpetuate means to continue; propagate means to spread. (Verb : Meaning)"
    },
    {
      question: "SUBJUGATE : CONTROL :: DOMINATE : _______",
      options: ["Rule", "Command", "Govern", "Lead"],
      answer: "Rule",
      explanation: "Subjugate means to control; dominate means to rule. (Verb : Meaning)"
    },
    {
      question: "CONCATENATE : LINK :: INTEGRATE : _______",
      options: ["Combine", "Join", "Unite", "Merge"],
      answer: "Combine",
      explanation: "Concatenate means to link; integrate means to combine. (Verb : Meaning)"
    },
    {
      question: "DISSEMINATE : INFORMATION :: CIRCULATE : _______",
      options: ["News", "Rumor", "Message", "Word"],
      answer: "News",
      explanation: "Disseminate information; circulate news. (Verb : Object)"
    },
    {
      question: "SUBSTANTIATE : EVIDENCE :: CORROBORATE : _______",
      options: ["Testimony", "Proof", "Fact", "Witness"],
      answer: "Testimony",
      explanation: "Substantiate with evidence; corroborate with testimony. (Verb : Support)"
    },
    {
      question: "EXTRAPOLATE : DATA :: INFER : _______",
      options: ["Information", "Clues", "Facts", "Details"],
      answer: "Clues",
      explanation: "Extrapolate from data; infer from clues. (Verb : Source)"
    }
  ]
};
