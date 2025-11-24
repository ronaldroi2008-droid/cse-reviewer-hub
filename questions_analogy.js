// ==========================================
// ANALOGY QUESTIONS - 200 ITEMS
// Levels: Beginner, Intermediate, Advanced, Super
// ==========================================

const ANALOGY_QUESTIONS = {

  // ==========================================
  // LEVEL 1: BEGINNER (Basic Relationships)
  // ==========================================
  beginner: [
    {
      question: "BIRD : FLY :: FISH : _______",
      options: ["Walk", "Swim", "Run", "Jump"],
      answer: "Swim",
      explanation: "A bird moves by flying; a fish moves by swimming. (Action)"
    },
    {
      question: "HOT : COLD :: UP : _______",
      options: ["Down", "Left", "Right", "Top"],
      answer: "Down",
      explanation: "Hot is the opposite of cold; up is the opposite of down. (Antonyms)"
    },
    {
      question: "CAT : KITTEN :: DOG : _______",
      options: ["Puppy", "Calf", "Cub", "Foal"],
      answer: "Puppy",
      explanation: "A kitten is a baby cat; a puppy is a baby dog. (Young)"
    },
    {
      question: "EYE : SEE :: EAR : _______",
      options: ["Smell", "Touch", "Hear", "Taste"],
      answer: "Hear",
      explanation: "Eyes are used to see; ears are used to hear. (Function)"
    },
    {
      question: "HUNGRY : EAT :: THIRSTY : _______",
      options: ["Sleep", "Drink", "Run", "Play"],
      answer: "Drink",
      explanation: "When you are hungry, you eat; when you are thirsty, you drink. (Condition : Action)"
    },
    {
      question: "CAR : ROAD :: TRAIN : _______",
      options: ["Sky", "Water", "Track", "Station"],
      answer: "Track",
      explanation: "A car travels on a road; a train travels on a track. (Vehicle : Location)"
    },
    {
      question: "FINGER : HAND :: TOE : _______",
      options: ["Foot", "Leg", "Arm", "Head"],
      answer: "Foot",
      explanation: "A finger is part of a hand; a toe is part of a foot. (Part to Whole)"
    },
    {
      question: "TEACHER : SCHOOL :: DOCTOR : _______",
      options: ["Hospital", "House", "Bank", "Park"],
      answer: "Hospital",
      explanation: "A teacher works in a school; a doctor works in a hospital. (Worker : Workplace)"
    },
    {
      question: "HAPPY : SMILE :: SAD : _______",
      options: ["Laugh", "Cry", "Jump", "Sing"],
      answer: "Cry",
      explanation: "When you are happy, you smile; when you are sad, you cry. (Emotion : Expression)"
    },
    {
      question: "PEN : WRITE :: KNIFE : _______",
      options: ["Eat", "Cut", "Draw", "Wash"],
      answer: "Cut",
      explanation: "A pen is used to write; a knife is used to cut. (Tool : Action)"
    },
    {
      question: "DAY : NIGHT :: LIGHT : _______",
      options: ["Sun", "Bright", "Dark", "Star"],
      answer: "Dark",
      explanation: "Day is the opposite of night; light is the opposite of dark. (Antonyms)"
    },
    {
      question: "SHOE : FOOT :: HAT : _______",
      options: ["Hand", "Head", "Neck", "Leg"],
      answer: "Head",
      explanation: "A shoe is worn on the foot; a hat is worn on the head. (Item : Body Part)"
    },
    {
      question: "LEMON : YELLOW :: LIME : _______",
      options: ["Red", "Blue", "Green", "Orange"],
      answer: "Green",
      explanation: "A lemon is yellow; a lime is green. (Object : Color)"
    },
    {
      question: "ONE : SINGLE :: TWO : _______",
      options: ["Double", "Triple", "Half", "Square"],
      answer: "Double",
      explanation: "Single means one; double means two. (Number definitions)"
    },
    {
      question: "MORNING : BREAKFAST :: EVENING : _______",
      options: ["Lunch", "Snack", "Dinner", "Coffee"],
      answer: "Dinner",
      explanation: "Breakfast is eaten in the morning; dinner is eaten in the evening. (Time : Meal)"
    },
    {
      question: "COW : MOO :: DUCK : _______",
      options: ["Bark", "Meow", "Quack", "Roar"],
      answer: "Quack",
      explanation: "A cow makes the sound moo; a duck makes the sound quack. (Animal : Sound)"
    },
    {
      question: "ICE : COLD :: FIRE : _______",
      options: ["Hot", "Cool", "Wet", "Hard"],
      answer: "Hot",
      explanation: "Ice is inherently cold; fire is inherently hot. (Object : Characteristic)"
    },
    {
      question: "BOOK : READ :: TV : _______",
      options: ["Listen", "Watch", "Play", "Eat"],
      answer: "Watch",
      explanation: "You read a book; you watch TV. (Object : Action)"
    },
    {
      question: "MAN : WOMAN :: BOY : _______",
      options: ["Girl", "Lady", "Child", "Baby"],
      answer: "Girl",
      explanation: "Man is the male adult, Woman is female; Boy is male child, Girl is female. (Gender)"
    },
    {
      question: "FEATHER : LIGHT :: ROCK : _______",
      options: ["Soft", "Heavy", "Smooth", "White"],
      answer: "Heavy",
      explanation: "A feather is light (weight); a rock is heavy. (Object : Property)"
    },
    {
      question: "NOSE : SMELL :: TONGUE : _______",
      options: ["Touch", "Taste", "See", "Hear"],
      answer: "Taste",
      explanation: "The nose is used to smell; the tongue is used to taste. (Sense Organ : Sense)"
    },
    {
      question: "CARPENTER : HAMMER :: PAINTER : _______",
      options: ["Pen", "Brush", "Spoon", "Knife"],
      answer: "Brush",
      explanation: "A carpenter uses a hammer; a painter uses a brush. (Worker : Tool)"
    },
    {
      question: "GOOD : BAD :: RIGHT : _______",
      options: ["Correct", "Left", "Wrong", "True"],
      answer: "Wrong",
      explanation: "Good is the opposite of bad; right is the opposite of wrong. (Antonyms)"
    },
    {
      question: "WATER : LIQUID :: ROCK : _______",
      options: ["Gas", "Solid", "Air", "Soft"],
      answer: "Solid",
      explanation: "Water is a liquid; a rock is a solid. (State of Matter)"
    },
    {
      question: "CLOCK : TIME :: RULER : _______",
      options: ["Weight", "Length", "Speed", "Heat"],
      answer: "Length",
      explanation: "A clock measures time; a ruler measures length. (Tool : Measurement)"
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (Logic & Vocabulary)
  // ==========================================
  intermediate: [
    {
      question: "SCALE : WEIGHT :: THERMOMETER : _______",
      options: ["Length", "Volume", "Temperature", "Time"],
      answer: "Temperature",
      explanation: "A scale measures weight; a thermometer measures temperature. (Tool : Measurement)"
    },
    {
      question: "AUTHOR : BOOK :: ARCHITECT : _______",
      options: ["Painting", "Building", "Song", "Law"],
      answer: "Building",
      explanation: "An author designs/creates a book; an architect designs a building. (Creator : Creation)"
    },
    {
      question: "ACTOR : SCRIPT :: MUSICIAN : _______",
      options: ["Stage", "Score", "Instrument", "Concert"],
      answer: "Score",
      explanation: "An actor follows a script; a musician follows a score (sheet music). (Artist : Guide)"
    },
    {
      question: "REFEREE : SPORTS :: JUDGE : _______",
      options: ["Court", "Law", "Jail", "Police"],
      answer: "Court",
      explanation: "A referee officiates in sports; a judge officiates in court. (Worker : Workplace/Context)"
    },
    {
      question: "CHAPTER : BOOK :: ROOM : _______",
      options: ["Door", "Window", "House", "Floor"],
      answer: "House",
      explanation: "A chapter is a section of a book; a room is a section of a house. (Part : Whole)"
    },
    {
      question: "SCULPTOR : STONE :: BLACKSMITH : _______",
      options: ["Wood", "Iron", "Clay", "Glass"],
      answer: "Iron",
      explanation: "A sculptor works with stone; a blacksmith works with iron/metal. (Worker : Material)"
    },
    {
      question: "PEBBLE : BOULDER :: TWIG : _______",
      options: ["Leaf", "Branch", "Root", "Seed"],
      answer: "Branch",
      explanation: "A pebble is a small version of a boulder; a twig is a small version of a branch. (Degree/Size)"
    },
    {
      question: "OPTIMIST : HOPE :: PESSIMIST : _______",
      options: ["Love", "Doubt", "Joy", "Faith"],
      answer: "Doubt",
      explanation: "An optimist is full of hope; a pessimist is full of doubt/gloom. (Person : Characteristic)"
    },
    {
      question: "CANDLE : WAX :: TIRE : _______",
      options: ["Rubber", "Road", "Wheel", "Car"],
      answer: "Rubber",
      explanation: "A candle is made of wax; a tire is made of rubber. (Object : Material)"
    },
    {
      question: "STANZA : POEM :: ACT : _______",
      options: ["Song", "Play", "Book", "Movie"],
      answer: "Play",
      explanation: "A stanza is a section of a poem; an act is a section of a play. (Part : Whole)"
    },
    {
      question: "FRAME : PICTURE :: FENCE : _______",
      options: ["Gate", "Yard", "Wall", "Road"],
      answer: "Yard",
      explanation: "A frame surrounds a picture; a fence surrounds a yard. (Object : Enclosure)"
    },
    {
      question: "BOTANY : PLANTS :: ASTRONOMY : _______",
      options: ["Animals", "Stars", "Rocks", "History"],
      answer: "Stars",
      explanation: "Botany is the study of plants; astronomy is the study of stars. (Discipline : Subject)"
    },
    {
      question: "LION : CARNIVORE :: COW : _______",
      options: ["Omnivore", "Herbivore", "Predator", "Mammal"],
      answer: "Herbivore",
      explanation: "A lion is a carnivore (meat-eater); a cow is a herbivore (plant-eater). (Animal : Diet)"
    },
    {
      question: "WALLET : MONEY :: ENVELOPE : _______",
      options: ["Stamp", "Letter", "Mailbox", "Paper"],
      answer: "Letter",
      explanation: "A wallet holds money; an envelope holds a letter. (Container : Content)"
    },
    {
      question: "ORCHARD : FRUIT TREES :: VINEYARD : _______",
      options: ["Vegetables", "Grapes", "Flowers", "Wheat"],
      answer: "Grapes",
      explanation: "An orchard grows fruit trees; a vineyard grows grapes. (Place : Crop)"
    },
    {
      question: "CONSTELLATION : STARS :: ARCHIPELAGO : _______",
      options: ["Mountains", "Islands", "Lakes", "Cities"],
      answer: "Islands",
      explanation: "A constellation is a group of stars; an archipelago is a group of islands. (Collective Noun)"
    },
    {
      question: "SOLDIER : REGIMENT :: PLAYER : _______",
      options: ["Game", "Team", "Coach", "Ball"],
      answer: "Team",
      explanation: "A soldier is part of a regiment; a player is part of a team. (Individual : Group)"
    },
    {
      question: "MICROSCOPE : SMALL :: TELESCOPE : _______",
      options: ["Close", "Distant", "Large", "Bright"],
      answer: "Distant",
      explanation: "A microscope magnifies small things; a telescope magnifies distant things. (Tool : Object type)"
    },
    {
      question: "VIOLIN : BOW :: GUITAR : _______",
      options: ["String", "Pick", "Finger", "Wood"],
      answer: "Pick",
      explanation: "A violin is played with a bow; a guitar is often played with a pick. (Instrument : Playing Tool)"
    },
    {
      question: "SHEEP : FLOCK :: FISH : _______",
      options: ["Pack", "School", "Herd", "Swarm"],
      answer: "School",
      explanation: "A group of sheep is a flock; a group of fish is a school. (Collective Noun)"
    },
    {
      question: "NOVELIST : WRITE :: DIRECTOR : _______",
      options: ["Act", "Film", "Paint", "Sing"],
      answer: "Film",
      explanation: "A novelist writes; a director films (or directs a film). (Worker : Action)"
    },
    {
      question: "MONARCHY : KING :: DEMOCRACY : _______",
      options: ["Dictator", "President", "Queen", "Soldier"],
      answer: "President",
      explanation: "A monarchy is led by a King; a democracy is led by a President. (System : Leader)"
    },
    {
      question: "SNAKE : REPTILE :: FROG : _______",
      options: ["Mammal", "Amphibian", "Fish", "Insect"],
      answer: "Amphibian",
      explanation: "A snake is a reptile; a frog is an amphibian. (Animal : Class)"
    },
    {
      question: "WHISPER : SPEAK :: TIPTOE : _______",
      options: ["Run", "Walk", "Jump", "Stand"],
      answer: "Walk",
      explanation: "To whisper is to speak softly; to tiptoe is to walk softly. (Manner : Action)"
    },
    {
      question: "BRAKE : STOP :: ACCELERATOR : _______",
      options: ["Start", "Go", "Turn", "Slow"],
      answer: "Go",
      explanation: "The brake makes the car stop; the accelerator makes the car go/speed up. (Part : Function)"
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (Abstract & Specialized)
  // ==========================================
  advanced: [
    {
      question: "CANDID : SECRETIVE :: FRANK : _______",
      options: ["Honest", "Open", "Dishonest", "Direct"],
      answer: "Dishonest",
      explanation: "Candid is the opposite of secretive; frank (synonym for candid) is the opposite of dishonest. (Antonyms)"
    },
    {
      question: "ODOMETER : DISTANCE :: ALTIMETER : _______",
      options: ["Speed", "Depth", "Height", "Weight"],
      answer: "Height",
      explanation: "An odometer measures distance; an altimeter measures height/altitude. (Instrument : Function)"
    },
    {
      question: "VIRUS : INFLUENZA :: BACTERIA : _______",
      options: ["Health", "Antibiotic", "Infection", "Tuberculosis"],
      answer: "Tuberculosis",
      explanation: "Influenza is caused by a virus; Tuberculosis is caused by bacteria. (Cause : Specific Disease)"
    },
    {
      question: "FRAGILE : CRACK :: PLIABLE : _______",
      options: ["Break", "Bend", "Hard", "Shatter"],
      answer: "Bend",
      explanation: "Something fragile will crack/break; something pliable will bend. (Characteristic : Reaction)"
    },
    {
      question: "ARCHIPELAGO : ISLAND :: MOUNTAIN RANGE : _______",
      options: ["Peak", "Hill", "Valley", "River"],
      answer: "Peak",
      explanation: "An archipelago is a chain of islands; a mountain range is a chain of peaks. (Collective : Individual)"
    },
    {
      question: "TAVERN : INNKEEPER :: SCHOOL : _______",
      options: ["Student", "Principal", "Teacher", "Janitor"],
      answer: "Principal",
      explanation: "An innkeeper runs a tavern; a principal runs a school. (Head of Establishment : Establishment)"
    },
    {
      question: "TECTONICS : GEOLOGY :: SYNTAX : _______",
      options: ["Math", "Grammar", "Biology", "Physics"],
      answer: "Grammar",
      explanation: "Tectonics is a sub-field of geology; syntax is a sub-field of grammar/linguistics. (Sub-field : Field)"
    },
    {
      question: "TACITURN : TALKATIVE :: ALOOF : _______",
      options: ["Friendly", "Quiet", "Distant", "Cold"],
      answer: "Friendly",
      explanation: "Taciturn is the opposite of talkative; aloof is the opposite of friendly. (Antonyms)"
    },
    {
      question: "PHILATELIST : STAMPS :: NUMISMATIST : _______",
      options: ["Coins", "Maps", "Books", "Antiques"],
      answer: "Coins",
      explanation: "A philatelist collects stamps; a numismatist collects coins. (Collector : Item)"
    },
    {
      question: "MITIGATE : SEVERE :: QUALIFY : _______",
      options: ["General", "Specific", "Hard", "Easy"],
      answer: "General",
      explanation: "To mitigate makes something less severe; to qualify makes a statement less general. (Action : Opposite State)"
    },
    {
      question: "EMBEZZLE : FUNDS :: PLAGIARIZE : _______",
      options: ["Money", "Words", "People", "Books"],
      answer: "Words",
      explanation: "Embezzle is stealing funds; plagiarize is stealing words/ideas. (Action : Object)"
    },
    {
      question: "EPAULET : SHOULDER :: RING : _______",
      options: ["Finger", "Ear", "Arm", "Neck"],
      answer: "Finger",
      explanation: "An epaulet is a decoration worn on the shoulder; a ring is worn on the finger. (Item : Location)"
    },
    {
      question: "PIG : STY :: HORSE : _______",
      options: ["Barn", "Coop", "Stable", "Nest"],
      answer: "Stable",
      explanation: "A pig lives in a sty; a horse lives in a stable. (Animal : Habitat)"
    },
    {
      question: "INDIGENT : WEALTHY :: NATIVE : _______",
      options: ["Local", "Foreign", "Poor", "Rich"],
      answer: "Foreign",
      explanation: "Indigent is the opposite of wealthy; native is the opposite of foreign. (Antonyms)"
    },
    {
      question: "KEROSENE : FUEL :: WHEAT : _______",
      options: ["Bread", "Food", "Liquid", "Gas"],
      answer: "Food",
      explanation: "Kerosene is a type of fuel; wheat is a type of food. (Item : Category)"
    },
    {
      question: "GULLIBLE : DUPED :: MALLEABLE : _______",
      options: ["Broken", "Shaped", "Hardened", "Sold"],
      answer: "Shaped",
      explanation: "Someone gullible is easily duped; something malleable is easily shaped. (Characteristic : Action)"
    },
    {
      question: "COBBLER : SHOES :: CARTOGRAPHER : _______",
      options: ["Carts", "Maps", "Books", "Houses"],
      answer: "Maps",
      explanation: "A cobbler makes/fixes shoes; a cartographer makes maps. (Worker : Product)"
    },
    {
      question: "OBSEQUIOUS : FAWN :: PARSIMONIOUS : _______",
      options: ["Spend", "Hoard", "Talk", "Eat"],
      answer: "Hoard",
      explanation: "An obsequious person fawns (flatters); a parsimonious person hoards (saves). (Characteristic : Action)"
    },
    {
      question: "DIRGE : FUNERAL :: JINGLE : _______",
      options: ["Church", "Commercial", "Movie", "Play"],
      answer: "Commercial",
      explanation: "A dirge is a song for a funeral; a jingle is a song for a commercial. (Music : Context)"
    },
    {
      question: "HERMIT : RECLUSE :: SYCOPHANT : _______",
      options: ["Leader", "Flatterer", "Teacher", "Spy"],
      answer: "Flatterer",
      explanation: "Hermit and recluse are synonyms; sycophant and flatterer are synonyms. (Synonyms)"
    },
    {
      question: "LOGIC : REASONING :: ETHICS : _______",
      options: ["Behavior", "Science", "Math", "Art"],
      answer: "Behavior",
      explanation: "Logic deals with reasoning; ethics deals with behavior/morals. (Subject : Focus)"
    },
    {
      question: "EPILOGUE : NOVEL :: DESSERT : _______",
      options: ["Appetizer", "Meal", "Lunch", "Drink"],
      answer: "Meal",
      explanation: "An epilogue comes at the end of a novel; dessert comes at the end of a meal. (Part : Sequence)"
    },
    {
      question: "DRILL : BORE :: SIEVE : _______",
      options: ["Sift", "Cut", "Hold", "Mix"],
      answer: "Sift",
      explanation: "A drill is used to bore (holes); a sieve is used to sift. (Tool : Action)"
    },
    {
      question: "QUORUM : VOTE :: MAJORITY : _______",
      options: ["Win", "Lose", "Draw", "Speak"],
      answer: "Win",
      explanation: "You need a quorum to vote; you need a majority to win (an election). (Requirement : Result)"
    },
    {
      question: "DICTATOR : AUTHORITY :: SNIPER : _______",
      options: ["Gun", "Accuracy", "War", "Fear"],
      answer: "Accuracy",
      explanation: "A dictator relies on authority; a sniper relies on accuracy. (Person : Primary Trait)"
    }
  ],

  // ==========================================
  // LEVEL 4: SUPER (High Vocabulary & Complex Logic)
  // ==========================================
  super: [
    {
      question: "EPHEMERAL : ENDURING :: TRANSIENT : _______",
      options: ["Permanent", "Short", "Fleeting", "Quick"],
      answer: "Permanent",
      explanation: "Ephemeral is opposite to enduring; transient is opposite to permanent. (Antonyms with high vocabulary)"
    },
    {
      question: "DIDACTIC : TEACH :: HORTATORY : _______",
      options: ["Listen", "Urge", "Plant", "Learn"],
      answer: "Urge",
      explanation: "Didactic means intended to teach; hortatory means intended to urge/encourage. (Adjective : Function)"
    },
    {
      question: "SOPORIFIC : SLEEP :: MNEMONIC : _______",
      options: ["Brain", "Memory", "Speech", "Movement"],
      answer: "Memory",
      explanation: "A soporific aids sleep; a mnemonic aids memory. (Substance/Tool : Effect)"
    },
    {
      question: "LACONIC : WORDS :: PARSIMONIOUS : _______",
      options: ["Time", "Money", "Friends", "Enemies"],
      answer: "Money",
      explanation: "Laconic means using few words; parsimonious means spending little money. (Trait : Object conserved)"
    },
    {
      question: "APOCRYPHAL : AUTHENTICITY :: NEBULOUS : _______",
      options: ["Definition", "Space", "Color", "Truth"],
      answer: "Definition",
      explanation: "Apocryphal lacks authenticity; nebulous lacks definition/clarity. (Adjective : Lacking quality)"
    },
    {
      question: "TAUTOLOGY : REPETITIVE :: OXYMORON : _______",
      options: ["True", "False", "Contradictory", "Long"],
      answer: "Contradictory",
      explanation: "A tautology is inherently repetitive; an oxymoron is inherently contradictory. (Term : Definition)"
    },
    {
      question: "MERCENARY : MONEY :: VINDICTIVE : _______",
      options: ["Love", "Revenge", "Peace", "Power"],
      answer: "Revenge",
      explanation: "A mercenary is motivated by money; a vindictive person is motivated by revenge. (Person : Motivation)"
    },
    {
      question: "LUGUBRIOUS : SORROWFUL :: EUPHORIC : _______",
      options: ["Happy", "Angry", "Dead", "Quiet"],
      answer: "Happy",
      explanation: "Lugubrious is extremely sorrowful; euphoric is extremely happy. (Synonyms - Extreme degree)"
    },
    {
      question: "COMPENDIUM : SUMMARY :: ANTHOLOGY : _______",
      options: ["Collection", "Poem", "Book", "Art"],
      answer: "Collection",
      explanation: "A compendium is a summary; an anthology is a collection (of works). (Synonyms/Definition)"
    },
    {
      question: "METICULOUS : DETAILS :: DOGMATIC : _______",
      options: ["Animals", "Beliefs", "Laws", "Science"],
      answer: "Beliefs",
      explanation: "Meticulous is strict about details; dogmatic is strict about beliefs/doctrine. (Trait : Focus)"
    },
    {
      question: "PALIMPSEST : REUSE :: HEIRLOOM : _______",
      options: ["Sell", "Inherit", "Break", "Buy"],
      answer: "Inherit",
      explanation: "A palimpsest is a document reused; an heirloom is an item inherited. (Object : Process)"
    },
    {
      question: "INDELIBLE : ERASE :: INEFFABLE : _______",
      options: ["See", "Touch", "Utter", "Hear"],
      answer: "Utter",
      explanation: "Indelible cannot be erased; ineffable cannot be uttered/described. (Adjective : Impossible Action)"
    },
    {
      question: "ICONOCLAST : TRADITION :: ANARCHIST : _______",
      options: ["Peace", "Government", "War", "Religion"],
      answer: "Government",
      explanation: "An iconoclast attacks tradition; an anarchist attacks government. (Person : Target)"
    },
    {
      question: "PANEGYRIC : PRAISE :: ELEGY : _______",
      options: ["Life", "Lament", "Song", "Speech"],
      answer: "Lament",
      explanation: "A panegyric expresses praise; an elegy expresses lament (sorrow). (Literary Form : Expression)"
    },
    {
      question: "INTRANSIGENT : FLEXIBILITY :: STOLID : _______",
      options: ["Weight", "Height", "Emotion", "Speed"],
      answer: "Emotion",
      explanation: "Intransigent lacks flexibility; stolid lacks emotion. (Adjective : Lacking Quality)"
    },
    {
      question: "DESICCATE : MOISTURE :: DARKEN : _______",
      options: ["Light", "Color", "Shape", "Size"],
      answer: "Light",
      explanation: "To desiccate removes moisture; to darken removes light. (Verb : Removal)"
    },
    {
      question: "PULCHRITUDE : BEAUTY :: INDOLENCE : _______",
      options: ["Laziness", "Energy", "Work", "Pain"],
      answer: "Laziness",
      explanation: "Pulchritude is a synonym for beauty; indolence is a synonym for laziness. (High-level Synonyms)"
    },
    {
      question: "DIAPHANOUS : OPAQUE :: LIMPID : _______",
      options: ["Clear", "Murky", "Liquid", "Soft"],
      answer: "Murky",
      explanation: "Diaphanous (sheer) is opposite to opaque; limpid (clear) is opposite to murky. (Antonyms)"
    },
    {
      question: "APOSTATE : RELIGION :: TRAITOR : _______",
      options: ["Law", "Country", "Job", "School"],
      answer: "Country",
      explanation: "An apostate abandons their religion; a traitor abandons their country. (Person : Abandoned Group)"
    },
    {
      question: "QUIXOTIC : IDEALISTIC :: MACHINATION : _______",
      options: ["Simple", "Plotting", "Fast", "Good"],
      answer: "Plotting",
      explanation: "Quixotic means unrealistically idealistic; machination means scheming/plotting. (Word : Definition)"
    },
    {
      question: "AMELIORATE : IMPROVE :: OSSIFY : _______",
      options: ["Break", "Harden", "Soften", "Dissolve"],
      answer: "Harden",
      explanation: "Ameliorate means to improve; ossify means to harden (turn to bone). (Verb : Meaning)"
    },
    {
      question: "OBFUSCATE : CLARITY :: ENERVATE : _______",
      options: ["Energy", "Sleep", "Food", "Light"],
      answer: "Energy",
      explanation: "To obfuscate reduces clarity; to enervate reduces energy/strength. (Action : Reduced Quality)"
    },
    {
      question: "EXCULPATE : BLAME :: EXTIRPATE : _______",
      options: ["Add", "Destroy", "Plant", "Build"],
      answer: "Destroy",
      explanation: "Exculpate removes blame; extirpate removes/destroys completely. (Verb : Action)"
    },
    {
      question: "EQUIVOCATE : DECEIVE :: FILIBUSTER : _______",
      options: ["Pass", "Delay", "Vote", "Law"],
      answer: "Delay",
      explanation: "One equivocates to deceive; one filibusters to delay (legislation). (Action : Purpose)"
    },
    {
      question: "MAVERICK : CONFORMITY :: HERETIC : _______",
      options: ["Orthodoxy", "Science", "Law", "Truth"],
      answer: "Orthodoxy",
      explanation: "A maverick rejects conformity; a heretic rejects orthodoxy. (Person : Rejection)"
    }
  ]
};
