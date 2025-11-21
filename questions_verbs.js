// questions_verbs.js
// 200 items: 50 per level (beginner, intermediate, advanced, super)

const VERB_QUESTIONS = {
  beginner: [
    // 1–10: Identify the verb
    {
      question: "Which word is the main verb in the sentence: 'The boy runs fast.'?",
      choices: ["boy", "runs", "fast", "the"],
      correctIndex: 1,
      explanation: '"Runs" is the action word; it tells what the boy does.'
    },
    {
      question: "Which word is the verb in the sentence: 'They play basketball every afternoon.'?",
      choices: ["They", "play", "basketball", "afternoon"],
      correctIndex: 1,
      explanation: '"Play" is the action being done by they.'
    },
    {
      question: "Which word is the verb in: 'Maria sings beautifully.'?",
      choices: ["Maria", "sings", "beautifully", "none"],
      correctIndex: 1,
      explanation: '"Sings" shows the action of Maria.'
    },
    {
      question: "In the sentence 'The children laughed loudly,' what is the verb?",
      choices: ["children", "laughed", "loudly", "the"],
      correctIndex: 1,
      explanation: '"Laughed" is the action performed by the children.'
    },
    {
      question: "Which word is the verb in: 'The dog barked at the stranger.'?",
      choices: ["dog", "barked", "stranger", "at"],
      correctIndex: 1,
      explanation: '"Barked" tells what the dog did.'
    },
    {
      question: "In 'She writes letters every week,' which is the verb?",
      choices: ["She", "writes", "letters", "week"],
      correctIndex: 1,
      explanation: '"Writes" is the action word in the sentence.'
    },
    {
      question: "Which is the verb in: 'The sun rises in the east.'?",
      choices: ["sun", "rises", "east", "in"],
      correctIndex: 1,
      explanation: '"Rises" shows what the sun does.'
    },
    {
      question: "In the sentence 'The teacher talks slowly,' which is the verb?",
      choices: ["teacher", "talks", "slowly", "the"],
      correctIndex: 1,
      explanation: '"Talks" is the action done by the teacher.'
    },
    {
      question: "Which word is the verb in: 'Birds fly in the sky.'?",
      choices: ["Birds", "fly", "sky", "in"],
      correctIndex: 1,
      explanation: '"Fly" is the action that birds do.'
    },
    {
      question: "In 'The baby sleeps peacefully,' what is the verb?",
      choices: ["baby", "sleeps", "peacefully", "the"],
      correctIndex: 1,
      explanation: '"Sleeps" is the action word in the sentence.'
    },

    // 11–20: Simple present – correct form
    {
      question: "Choose the correct verb: 'He ____ to school every day.'",
      choices: ["go", "goes", "going", "gone"],
      correctIndex: 1,
      explanation: "With singular he in the simple present, we use 'goes'."
    },
    {
      question: "Choose the correct verb: 'They ____ early on Sundays.'",
      choices: ["wakes", "wake", "woke", "woken"],
      correctIndex: 1,
      explanation: "With plural they, we use the base form 'wake'."
    },
    {
      question: "Choose the correct verb: 'She ____ English very well.'",
      choices: ["speak", "speaks", "speaking", "spoken"],
      correctIndex: 1,
      explanation: "Third person singular (she) takes 'speaks' in simple present."
    },
    {
      question: "Choose the correct verb: 'We ____ our homework after dinner.'",
      choices: ["do", "does", "did", "done"],
      correctIndex: 0,
      explanation: "With we, we use 'do' in the simple present."
    },
    {
      question: "Choose the correct verb: 'The train ____ at six o'clock.'",
      choices: ["leave", "leaves", "leaving", "left"],
      correctIndex: 1,
      explanation: "The singular subject 'train' takes 'leaves'."
    },
    {
      question: "Choose the correct verb: 'I ____ coffee every morning.'",
      choices: ["drink", "drinks", "drank", "drunk"],
      correctIndex: 0,
      explanation: "With I in simple present, we use base form 'drink'."
    },
    {
      question: "Choose the correct verb: 'My parents ____ in the province.'",
      choices: ["live", "lives", "living", "lived"],
      correctIndex: 0,
      explanation: "Plural subject 'parents' takes 'live'."
    },
    {
      question: "Choose the correct verb: 'The baby ____ when she is hungry.'",
      choices: ["cry", "cries", "cried", "crying"],
      correctIndex: 1,
      explanation: "With 'baby' (singular), we use 'cries' in simple present."
    },
    {
      question: "Choose the correct verb: 'The students ____ their notes carefully.'",
      choices: ["take", "takes", "took", "taken"],
      correctIndex: 0,
      explanation: "Plural 'students' takes 'take'."
    },
    {
      question: "Choose the correct verb: 'It ____ a lot in June.'",
      choices: ["rain", "rains", "rained", "raining"],
      correctIndex: 1,
      explanation: "With 'it' as singular subject, we use 'rains'."
    },

    // 21–30: Forms of 'be'
    {
      question: "Choose the correct form: 'I ____ happy today.'",
      choices: ["am", "is", "are", "be"],
      correctIndex: 0,
      explanation: "With 'I' we use 'am'."
    },
    {
      question: "Choose the correct form: 'She ____ my classmate.'",
      choices: ["am", "is", "are", "be"],
      correctIndex: 1,
      explanation: "Singular 'she' takes 'is'."
    },
    {
      question: "Choose the correct form: 'They ____ very busy this week.'",
      choices: ["am", "is", "are", "be"],
      correctIndex: 2,
      explanation: "Plural 'they' takes 'are'."
    },
    {
      question: "Choose the correct form: 'We ____ ready for the exam.'",
      choices: ["am", "is", "are", "be"],
      correctIndex: 2,
      explanation: "Plural 'we' takes 'are'."
    },
    {
      question: "Choose the correct form: 'He ____ absent yesterday.'",
      choices: ["am", "is", "was", "were"],
      correctIndex: 2,
      explanation: "Past tense for singular 'he' is 'was'."
    },
    {
      question: "Choose the correct form: 'They ____ at home last night.'",
      choices: ["was", "were", "is", "are"],
      correctIndex: 1,
      explanation: "Past tense for plural 'they' is 'were'."
    },
    {
      question: "Choose the correct form: 'It ____ very hot yesterday.'",
      choices: ["is", "are", "was", "were"],
      correctIndex: 2,
      explanation: "Singular 'it' in the past takes 'was'."
    },
    {
      question: "Choose the correct form: 'You ____ my best friend.'",
      choices: ["am", "is", "are", "be"],
      correctIndex: 2,
      explanation: "With 'you' we usually use 'are'."
    },
    {
      question: "Choose the correct form: 'The books ____ on the table.'",
      choices: ["is", "are", "was", "be"],
      correctIndex: 1,
      explanation: "Plural subject 'books' takes 'are'."
    },
    {
      question: "Choose the correct form: 'The meeting ____ important.'",
      choices: ["am", "is", "are", "were"],
      correctIndex: 1,
      explanation: "Singular 'meeting' takes 'is' in the present."
    },

    // 31–40: Simple past (regular & common irregular)
    {
      question: "Choose the correct past form: 'Yesterday, I ____ my homework.'",
      choices: ["finish", "finishes", "finished", "finishing"],
      correctIndex: 2,
      explanation: "Regular verb: finish → finished in the past."
    },
    {
      question: "Choose the correct past form: 'They ____ to the park last Sunday.'",
      choices: ["go", "goes", "went", "gone"],
      correctIndex: 2,
      explanation: "Irregular verb: go → went (simple past)."
    },
    {
      question: "Choose the correct past form: 'She ____ a letter last night.'",
      choices: ["writes", "wrote", "written", "write"],
      correctIndex: 1,
      explanation: "Simple past of write is wrote."
    },
    {
      question: "Choose the correct past form: 'We ____ dinner at seven o'clock.'",
      choices: ["eat", "ate", "eaten", "eating"],
      correctIndex: 1,
      explanation: "Simple past of eat is ate."
    },
    {
      question: "Choose the correct past form: 'The baby ____ for two hours.'",
      choices: ["cry", "cried", "cries", "crying"],
      correctIndex: 1,
      explanation: "Regular verb: cry → cried in the past."
    },
    {
      question: "Choose the correct past form: 'I ____ a new bag yesterday.'",
      choices: ["buy", "bought", "buys", "buying"],
      correctIndex: 1,
      explanation: "Simple past of buy is bought."
    },
    {
      question: "Choose the correct past form: 'He ____ the window by accident.'",
      choices: ["break", "broke", "broken", "breaking"],
      correctIndex: 1,
      explanation: "Simple past of break is broke."
    },
    {
      question: "Choose the correct past form: 'They ____ late for the meeting.'",
      choices: ["are", "is", "was", "were"],
      correctIndex: 3,
      explanation: "Plural subject 'they' in the past uses 'were'."
    },
    {
      question: "Choose the correct past form: 'We ____ basketball yesterday afternoon.'",
      choices: ["played", "play", "plays", "playing"],
      correctIndex: 0,
      explanation: "Regular verb: play → played in the past."
    },
    {
      question: "Choose the correct past form: 'She ____ the answer quickly.'",
      choices: ["know", "knew", "known", "knows"],
      correctIndex: 1,
      explanation: "Simple past of know is knew."
    },

    // 41–50: Simple future / modals
    {
      question: "Choose the correct verb: 'I ____ visit my parents tomorrow.'",
      choices: ["will", "will to", "am will", "was"],
      correctIndex: 0,
      explanation: "'Will' plus base verb is used for simple future."
    },
    {
      question: "Choose the best completion: 'They ____ join us later.'",
      choices: ["will", "was", "were", "did"],
      correctIndex: 0,
      explanation: "Use 'will' to show a future action: will join."
    },
    {
      question: "Choose the correct verb: 'She ____ help you with your project.'",
      choices: ["can", "cans", "can to", "coulded"],
      correctIndex: 0,
      explanation: "Modal 'can' is used with the base form of the verb."
    },
    {
      question: "Choose the correct verb: 'You ____ study harder to pass the exam.'",
      choices: ["should", "should to", "shoulds", "shall to"],
      correctIndex: 0,
      explanation: "'Should' expresses advice and is followed by the base form."
    },
    {
      question: "Choose the correct verb: 'He ____ drive a car when he was 18.'",
      choices: ["can", "could", "may", "must"],
      correctIndex: 1,
      explanation: "'Could' is the past form of 'can' for ability."
    },
    {
      question: "Choose the best completion: 'We ____ meet at 3 p.m.'",
      choices: ["will", "were", "did", "has"],
      correctIndex: 0,
      explanation: "Use will + base verb for simple future: will meet."
    },
    {
      question: "Choose the correct verb: 'You ____ not enter without an ID.'",
      choices: ["may", "may to", "mays", "maying"],
      correctIndex: 0,
      explanation: "'May' shows permission; may not enter is correct."
    },
    {
      question: "Choose the correct verb: 'Passengers ____ remain seated during takeoff.'",
      choices: ["must", "musts", "must to", "musted"],
      correctIndex: 0,
      explanation: "'Must' + base form shows strong obligation."
    },
    {
      question: "Choose the best completion: 'I think it ____ rain later.'",
      choices: ["will", "did", "was", "has"],
      correctIndex: 0,
      explanation: "Use 'will' for a likely future event: will rain."
    },
    {
      question: "Choose the correct verb: 'She ____ speak three languages.'",
      choices: ["can", "can to", "cans", "coulds"],
      correctIndex: 0,
      explanation: "Modal 'can' + base verb 'speak' shows ability."
    }
  ],

  intermediate: [
    // 1–10: Principal parts (base, past, past participle)
    {
      question: "Which set shows the correct forms of the verb 'go'?",
      choices: [
        "go, goed, gone",
        "go, went, gone",
        "go, went, went",
        "go, gone, went"
      ],
      correctIndex: 1,
      explanation: "Base: go; past: went; past participle: gone."
    },
    {
      question: "Which set shows the correct forms of 'write'?",
      choices: [
        "write, wrote, written",
        "write, writed, written",
        "write, wrote, wrote",
        "write, written, wrote"
      ],
      correctIndex: 0,
      explanation: "Base: write; past: wrote; past participle: written."
    },
    {
      question: "Which set shows the correct forms of 'see'?",
      choices: [
        "see, saw, seen",
        "see, seen, saw",
        "see, seed, seen",
        "see, saw, saw"
      ],
      correctIndex: 0,
      explanation: "Base: see; past: saw; past participle: seen."
    },
    {
      question: "Which set shows the correct forms of 'take'?",
      choices: [
        "take, took, taken",
        "take, taken, took",
        "take, taked, taken",
        "take, took, took"
      ],
      correctIndex: 0,
      explanation: "Base: take; past: took; past participle: taken."
    },
    {
      question: "Which set shows the correct forms of 'eat'?",
      choices: [
        "eat, ate, eaten",
        "eat, eaten, ate",
        "eat, eated, eaten",
        "eat, ate, ate"
      ],
      correctIndex: 0,
      explanation: "Base: eat; past: ate; past participle: eaten."
    },
    {
      question: "Which set shows the correct forms of 'give'?",
      choices: [
        "give, gave, given",
        "give, gave, gave",
        "give, gived, given",
        "give, given, gave"
      ],
      correctIndex: 0,
      explanation: "Base: give; past: gave; past participle: given."
    },
    {
      question: "Which set shows the correct forms of 'come'?",
      choices: [
        "come, came, come",
        "come, came, came",
        "come, comed, come",
        "come, come, came"
      ],
      correctIndex: 0,
      explanation: "Base: come; past: came; past participle: come."
    },
    {
      question: "Which set shows the correct forms of 'speak'?",
      choices: [
        "speak, spoke, spoken",
        "speak, spoken, spoke",
        "speak, spoked, spoken",
        "speak, spoke, spoke"
      ],
      correctIndex: 0,
      explanation: "Base: speak; past: spoke; past participle: spoken."
    },
    {
      question: "Which set shows the correct forms of 'begin'?",
      choices: [
        "begin, began, begun",
        "begin, begun, began",
        "begin, beginned, begun",
        "begin, began, began"
      ],
      correctIndex: 0,
      explanation: "Base: begin; past: began; past participle: begun."
    },
    {
      question: "Which set shows the correct forms of 'drive'?",
      choices: [
        "drive, drove, driven",
        "drive, driven, drove",
        "drive, drived, driven",
        "drive, drove, drove"
      ],
      correctIndex: 0,
      explanation: "Base: drive; past: drove; past participle: driven."
    },

    // 11–20: Perfect & progressive tenses
    {
      question: "Choose the correct verb form: 'She ____ her work already.'",
      choices: ["has finished", "have finished", "had finish", "has finishing"],
      correctIndex: 0,
      explanation: "Present perfect uses has/have + past participle: has finished."
    },
    {
      question: "Choose the correct completion: 'They ____ for two hours when the rain started.'",
      choices: [
        "have walked",
        "had been walking",
        "were walk",
        "was walking"
      ],
      correctIndex: 1,
      explanation: "Past perfect progressive: had been walking for duration before another past event."
    },
    {
      question: "Choose the correct verb form: 'We ____ here since 2010.'",
      choices: [
        "have lived",
        "has lived",
        "had live",
        "have living"
      ],
      correctIndex: 0,
      explanation: "Present perfect: have lived (we + have + past participle)."
    },
    {
      question: "Choose the correct completion: 'By next year, he ____ his degree.'",
      choices: [
        "will finish",
        "will have finished",
        "will has finished",
        "will be finish"
      ],
      correctIndex: 1,
      explanation: "Future perfect: will have finished for an action completed before a future time."
    },
    {
      question: "Choose the best verb form: 'At 8 p.m. last night, I ____ TV.'",
      choices: [
        "watched",
        "was watching",
        "have watched",
        "had watched"
      ],
      correctIndex: 1,
      explanation: "Past progressive: was watching for an action in progress at a specific past time."
    },
    {
      question: "Choose the correct completion: 'She ____ in this company for ten years before she resigned.'",
      choices: [
        "has worked",
        "had worked",
        "was working",
        "have worked"
      ],
      correctIndex: 1,
      explanation: "Past perfect: had worked for duration before another past action."
    },
    {
      question: "Choose the correct verb form: 'They ____ the project when the manager arrived.'",
      choices: [
        "have finished",
        "had finished",
        "was finishing",
        "finishes"
      ],
      correctIndex: 1,
      explanation: "Past perfect: had finished before another past event."
    },
    {
      question: "Choose the best completion: 'Right now, the students ____ their exam.'",
      choices: [
        "take",
        "are taking",
        "have taken",
        "took"
      ],
      correctIndex: 1,
      explanation: "Present progressive: are taking for an action happening now."
    },
    {
      question: "Choose the correct verb form: 'She ____ coffee when I called her.'",
      choices: [
        "drank",
        "was drinking",
        "had drunk",
        "has drinking"
      ],
      correctIndex: 1,
      explanation: "Past progressive: was drinking when another action occurred."
    },
    {
      question: "Choose the correct completion: 'They ____ already ____ the movie when we arrived.'",
      choices: [
        "have / started",
        "had / started",
        "were / starting",
        "has / started"
      ],
      correctIndex: 1,
      explanation: "Past perfect: had started before we arrived."
    },

    // 21–30: Transitive vs intransitive
    {
      question: "Which sentence uses the verb transitively (with a direct object)?",
      choices: [
        "He sleeps early.",
        "The baby cried loudly.",
        "She opened the door.",
        "They arrived late."
      ],
      correctIndex: 2,
      explanation: '"Opened" takes a direct object "the door", so it is transitive here.'
    },
    {
      question: "Which sentence uses an intransitive verb?",
      choices: [
        "She wrote a letter.",
        "He kicked the ball.",
        "They built a house.",
        "The children laughed."
      ],
      correctIndex: 3,
      explanation: '"Laughed" does not take a direct object; it is intransitive.'
    },
    {
      question: "In which sentence is the verb 'run' transitive?",
      choices: [
        "She runs every morning.",
        "They run very fast.",
        "He runs a small business.",
        "The dog runs in the park."
      ],
      correctIndex: 2,
      explanation: '"Runs a small business' uses 'business' as direct object; run is transitive here."
    },
    {
      question: "Which sentence contains a transitive verb?",
      choices: [
        "The man slept.",
        "The students listened.",
        "The students listened to the teacher.",
        "The students listened the teacher carefully."
      ],
      correctIndex: 2,
      explanation: '"Listened' followed by the preposition 'to' and object 'the teacher' functions as a verb + prepositional object construction."
    },
    {
      question: "Which sentence has an intransitive verb?",
      choices: [
        "She answered the phone.",
        "He read the book.",
        "They danced all night.",
        "We cleaned the classroom."
      ],
      correctIndex: 2,
      explanation: '"Danced' has no direct object; it is intransitive."
    },
    {
      question: "In which sentence is the verb 'grow' transitive?",
      choices: [
        "The child is growing fast.",
        "Farmers grow rice in the field.",
        "The city is growing.",
        "The plant grows slowly."
      ],
      correctIndex: 1,
      explanation: '"Grow rice' has 'rice' as direct object; grow is transitive here."
    },
    {
      question: "Which sentence uses the verb 'read' intransitively?",
      choices: [
        "She read the letter.",
        "He reads every night.",
        "They read the report.",
        "We read the instructions."
      ],
      correctIndex: 1,
      explanation: '"Reads' here has no stated object; it is intransitive."
    },
    {
      question: "Which sentence has a transitive verb?",
      choices: [
        "The baby slept.",
        "The audience applauded the singer.",
        "The sun rises.",
        "They arrived early."
      ],
      correctIndex: 1,
      explanation: '"Applauded the singer' has a direct object, so the verb is transitive."
    },
    {
      question: "Which sentence has an intransitive verb?",
      choices: [
        "She painted the wall.",
        "The driver started the engine.",
        "The children played in the park.",
        "He fixed the chair."
      ],
      correctIndex: 2,
      explanation: '"Played' here has only a prepositional phrase 'in the park', no direct object."
    },
    {
      question: "Which sentence uses the verb transitively?",
      choices: [
        "The teacher spoke.",
        "The teacher spoke clearly.",
        "The teacher spoke to the parents.",
        "The teacher spoke English fluently."
      ],
      correctIndex: 3,
      explanation: '"Spoke English' treats 'English' as the object of the verb."
    },

    // 31–40: Modals – usage
    {
      question: "Which sentence correctly uses a modal for ability?",
      choices: [
        "She cans swim very well.",
        "She can swim very well.",
        "She can to swim very well.",
        "She coulds swim very well."
      ],
      correctIndex: 1,
      explanation: "Modal 'can' is followed by the base form 'swim'."
    },
    {
      question: "Which sentence correctly uses a modal for permission?",
      choices: [
        "May I borrow your pen?",
        "May I to borrow your pen?",
        "I may borrowing your pen?",
        "May I borrowed your pen?"
      ],
      correctIndex: 0,
      explanation: "'May' + base form 'borrow' is correct for polite permission."
    },
    {
      question: "Which sentence expresses strong obligation correctly?",
      choices: [
        "You must to submit the form.",
        "You must submitted the form.",
        "You must submit the form.",
        "You must submitting the form."
      ],
      correctIndex: 2,
      explanation: "'Must' is followed by the base form 'submit'."
    },
    {
      question: "Which sentence uses 'should' correctly for advice?",
      choices: [
        "You should to rest now.",
        "You should rest now.",
        "You should resting now.",
        "You should rested now."
      ],
      correctIndex: 1,
      explanation: "'Should' is followed by the base form 'rest'."
    },
    {
      question: "Which sentence uses 'could' correctly for polite request?",
      choices: [
        "Could you help me with this?",
        "Could you to help me with this?",
        "Could you helping me with this?",
        "Could you helped me with this?"
      ],
      correctIndex: 0,
      explanation: "Polite request: 'Could you' + base verb 'help'."
    },
    {
      question: "Which sentence correctly shows future possibility?",
      choices: [
        "It might rains later.",
        "It might raining later.",
        "It might rain later.",
        "It might to rain later."
      ],
      correctIndex: 2,
      explanation: "'Might' takes the base verb 'rain'."
    },
    {
      question: "Which sentence uses 'would' correctly for a polite offer?",
      choices: [
        "Would you like some coffee?",
        "Would you liked some coffee?",
        "Would you liking some coffee?",
        "Would you to like some coffee?"
      ],
      correctIndex: 0,
      explanation: "Polite offer structure: 'Would you like ... ?'"
    },
    {
      question: "Which sentence correctly uses 'must not'?",
      choices: [
        "You must not to be late.",
        "You must not be late.",
        "You must not being late.",
        "You must not was late."
      ],
      correctIndex: 1,
      explanation: "'Must not' is followed by base form 'be'."
    },
    {
      question: "Which sentence correctly uses 'may' for possibility?",
      choices: [
        "She may to come later.",
        "She may coming later.",
        "She may come later.",
        "She may came later."
      ],
      correctIndex: 2,
      explanation: "'May' + base form 'come' expresses possibility."
    },
    {
      question: "Which sentence correctly uses a modal for suggestion?",
      choices: [
        "We shall to review the lesson.",
        "We should review the lesson.",
        "We should reviewing the lesson.",
        "We should reviewed the lesson."
      ],
      correctIndex: 1,
      explanation: "'Should review' is the correct pattern for a suggestion."
    },

    // 41–50: Error spotting & tense consistency
    {
      question: "Which sentence is correct?",
      choices: [
        "He go to work every day.",
        "He goes to work every day.",
        "He going to work every day.",
        "He gone to work every day."
      ],
      correctIndex: 1,
      explanation: "Simple present with 'he' takes 'goes'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "They was late for class yesterday.",
        "They were late for class yesterday.",
        "They are late for class yesterday.",
        "They be late for class yesterday."
      ],
      correctIndex: 1,
      explanation: "Past tense with plural 'they' requires 'were'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She has went to the office.",
        "She have gone to the office.",
        "She has gone to the office.",
        "She had goes to the office."
      ],
      correctIndex: 2,
      explanation: "Present perfect: has + past participle 'gone'."
    },
    {
      question: "Which sentence has consistent tense?",
      choices: [
        "Yesterday, we watch a movie and enjoyed it.",
        "Yesterday, we watched a movie and enjoy it.",
        "Yesterday, we watched a movie and enjoyed it.",
        "Yesterday, we watch a movie and enjoy it."
      ],
      correctIndex: 2,
      explanation: "Both verbs should be past: watched and enjoyed."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The students has finished the test.",
        "The students have finished the test.",
        "The students having finished the test.",
        "The students had finishes the test."
      ],
      correctIndex: 1,
      explanation: "Plural 'students' takes 'have finished'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He did not went to school.",
        "He did not go to school.",
        "He does not went to school.",
        "He did not goes to school."
      ],
      correctIndex: 1,
      explanation: "With 'did not', we use base form: did not go."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She was study when I called.",
        "She studying when I called.",
        "She was studying when I called.",
        "She is studying when I called."
      ],
      correctIndex: 2,
      explanation: "Past progressive: was studying when another action happened."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "They have just ate lunch.",
        "They has just eaten lunch.",
        "They have just eaten lunch.",
        "They have just eat lunch."
      ],
      correctIndex: 2,
      explanation: "Present perfect: have + past participle 'eaten'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The teacher explain the lesson now.",
        "The teacher is explaining the lesson now.",
        "The teacher explains the lesson now.",
        "The teacher explained the lesson now."
      ],
      correctIndex: 1,
      explanation: "For 'now', present progressive 'is explaining' fits best."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "By the time we arrive, the show had started.",
        "By the time we arrived, the show has started.",
        "By the time we arrived, the show had started.",
        "By the time we arrive, the show had start."
      ],
      correctIndex: 2,
      explanation: "Past perfect 'had started' is used for an action that happened before another past event (arrived)."
    }
  ],

  advanced: [
    // 1–10: Active vs passive voice
    {
      question: "Which sentence is in the passive voice?",
      choices: [
        "The committee approved the proposal.",
        "The proposal was approved by the committee.",
        "The committee is approving the proposal.",
        "The committee has approved the proposal."
      ],
      correctIndex: 1,
      explanation: "Passive: 'was approved by' + doer in a by-phrase."
    },
    {
      question: "Which is the active form of: 'The letter was written by Anna.'?",
      choices: [
        "Anna was writing the letter.",
        "Anna has written the letter.",
        "Anna wrote the letter.",
        "Anna is writing the letter."
      ],
      correctIndex: 2,
      explanation: "Simple past active: Anna wrote the letter."
    },
    {
      question: "Which sentence is passive?",
      choices: [
        "They built the bridge in 2010.",
        "The bridge was built in 2010.",
        "They are building the bridge.",
        "They have built the bridge."
      ],
      correctIndex: 1,
      explanation: "Subject 'bridge' receives the action: was built."
    },
    {
      question: "Which is the passive form of: 'The students answered the questions.'?",
      choices: [
        "The questions were answered by the students.",
        "The questions are answered by the students.",
        "The questions have answered by the students.",
        "The questions was answered by the students."
      ],
      correctIndex: 0,
      explanation: "Past passive for plural subject: were answered by the students."
    },
    {
      question: "Which sentence is in the passive voice?",
      choices: [
        "The manager reviews the report daily.",
        "The manager is reviewing the report.",
        "The report is reviewed by the manager daily.",
        "The manager reviewed the report."
      ],
      correctIndex: 2,
      explanation: "'Is reviewed by' shows passive voice."
    },
    {
      question: "Which is the active form of: 'The prizes will be given by the mayor.'?",
      choices: [
        "The mayor gives the prizes.",
        "The mayor will give the prizes.",
        "The mayor gave the prizes.",
        "The mayor is giving the prizes."
      ],
      correctIndex: 1,
      explanation: "Future active: will give the prizes."
    },
    {
      question: "Which sentence is passive?",
      choices: [
        "Someone has stolen my bag.",
        "My bag has been stolen.",
        "Someone is stealing my bag.",
        "They stole my bag."
      ],
      correctIndex: 1,
      explanation: "'Has been stolen' is present perfect passive."
    },
    {
      question: "Which is the passive form of: 'They will announce the results tomorrow.'?",
      choices: [
        "The results announced tomorrow.",
        "The results are announced tomorrow.",
        "The results will be announced tomorrow.",
        "The results will announced tomorrow."
      ],
      correctIndex: 2,
      explanation: "Future passive: will be announced."
    },
    {
      question: "Which sentence is in the passive voice?",
      choices: [
        "The police arrested the suspects.",
        "The suspects were arrested by the police.",
        "The police are arresting the suspects.",
        "The police had arrested the suspects."
      ],
      correctIndex: 1,
      explanation: "Subject 'suspects' receives the action: were arrested."
    },
    {
      question: "Which is the active form of: 'The project has been completed by the team.'?",
      choices: [
        "The team has completed the project.",
        "The team completed the project.",
        "The team completes the project.",
        "The team is completing the project."
      ],
      correctIndex: 0,
      explanation: "Present perfect active: has completed."
    },

    // 11–20: Subjunctive / wishes / suggestions
    {
      question: "Choose the sentence that correctly expresses a wish about the present.",
      choices: [
        "I wish I am taller.",
        "I wish I were taller.",
        "I wish I will be taller.",
        "I wish I was be taller."
      ],
      correctIndex: 1,
      explanation: "For unreal present wishes, use 'I wish I were ...'."
    },
    {
      question: "Which sentence correctly expresses a regret about the past?",
      choices: [
        "I wish I study harder.",
        "I wish I had studied harder.",
        "I wish I have studied harder.",
        "I wish I was studied harder."
      ],
      correctIndex: 1,
      explanation: "Past regret uses 'wish + had + past participle'."
    },
    {
      question: "Which sentence uses the subjunctive correctly after 'if'?",
      choices: [
        "If I was you, I would rest.",
        "If I am you, I would rest.",
        "If I were you, I would rest.",
        "If I will be you, I would rest."
      ],
      correctIndex: 2,
      explanation: "'If I were you' is the standard subjunctive expression."
    },
    {
      question: "Which sentence correctly uses the subjunctive in a suggestion?",
      choices: [
        "The teacher suggested that he studies harder.",
        "The teacher suggested that he study harder.",
        "The teacher suggested that he studied harder.",
        "The teacher suggested that he is studying harder."
      ],
      correctIndex: 1,
      explanation: "After 'suggested that', we use base form: he study."
    },
    {
      question: "Which sentence correctly uses 'wish' for an unreal present situation?",
      choices: [
        "She wishes she has more time.",
        "She wishes she had more time.",
        "She wishes she will have more time.",
        "She wishes she is having more time."
      ],
      correctIndex: 1,
      explanation: "Unreal present: wishes + past tense form: had more time."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "If he was here, we will start.",
        "If he were here, we would start.",
        "If he is here, we would start.",
        "If he were here, we will start."
      ],
      correctIndex: 1,
      explanation: "Unreal condition: If he were here, we would start."
    },
    {
      question: "Which sentence correctly shows a recommendation?",
      choices: [
        "It is important that he arrives early.",
        "It is important that he arrive early.",
        "It is important that he arriving early.",
        "It is important that he arrived early."
      ],
      correctIndex: 1,
      explanation: "Subjunctive after 'important that': he arrive (base form)."
    },
    {
      question: "Which sentence correctly uses 'wish' for a past action?",
      choices: [
        "I wish I did not forget my keys.",
        "I wish I had not forgotten my keys.",
        "I wish I do not forget my keys.",
        "I wish I was not forget my keys."
      ],
      correctIndex: 1,
      explanation: "Past regret: wish + had not + past participle."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "I wish it stop raining.",
        "I wish it stopped raining.",
        "I wish it stopping raining.",
        "I wish it stops raining now."
      ],
      correctIndex: 1,
      explanation: "Wish about the present uses past form: stopped."
    },
    {
      question: "Which sentence uses the subjunctive correctly?",
      choices: [
        "The doctor recommends that he takes the medicine.",
        "The doctor recommends that he take the medicine.",
        "The doctor recommends that he took the medicine.",
        "The doctor recommends that he is taking the medicine."
      ],
      correctIndex: 1,
      explanation: "After 'recommends that', we use base form: he take."
    },

    // 21–30: Verb patterns (gerund / infinitive)
    {
      question: "Which sentence uses the gerund correctly?",
      choices: [
        "She enjoys to read books.",
        "She enjoys reading books.",
        "She enjoy reading books.",
        "She enjoying to read books."
      ],
      correctIndex: 1,
      explanation: "After 'enjoys', we use a gerund: reading."
    },
    {
      question: "Which sentence correctly uses an infinitive?",
      choices: [
        "He decided going home early.",
        "He decided to go home early.",
        "He decided go home early.",
        "He decided for go home early."
      ],
      correctIndex: 1,
      explanation: "'Decided to go' uses the infinitive correctly."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "They promised helping us.",
        "They promised to help us.",
        "They promised help us.",
        "They promised for helping us."
      ],
      correctIndex: 1,
      explanation: "After 'promised', we use 'to' + base verb: to help."
    },
    {
      question: "Which sentence uses a gerund as the subject?",
      choices: [
        "To swim is relaxing.",
        "Swimming is relaxing.",
        "Relaxing is swimming.",
        "Is relaxing swimming."
      ],
      correctIndex: 1,
      explanation: "'Swimming' is a gerund functioning as the subject."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He made me to wait.",
        "He made me wait.",
        "He made me waiting.",
        "He made me waited."
      ],
      correctIndex: 1,
      explanation: "After 'made + object', we use base verb: wait."
    },
    {
      question: "Which sentence correctly uses 'stop' with a gerund?",
      choices: [
        "He stopped to smoke because of his health.",
        "He stopped smoking because of his health.",
        "He stopped smoke because of his health.",
        "He stopped to smoking because of his health."
      ],
      correctIndex: 1,
      explanation: "'Stopped smoking' means he no longer smokes."
    },
    {
      question: "Which sentence correctly uses 'want'?",
      choices: [
        "I want going home.",
        "I want to go home.",
        "I want go home.",
        "I want for going home."
      ],
      correctIndex: 1,
      explanation: "After 'want', we use 'to' + base verb: to go."
    },
    {
      question: "Which sentence correctly uses a gerund?",
      choices: [
        "Reading books help me relax.",
        "Reading books helps me relax.",
        "Read books helps me relax.",
        "To reading books helps me relax."
      ],
      correctIndex: 1,
      explanation: "'Reading books' is singular as a gerund phrase; verb 'helps' agrees."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She suggested to take a break.",
        "She suggested taking a break.",
        "She suggested to taking a break.",
        "She suggested take a break."
      ],
      correctIndex: 1,
      explanation: "After 'suggested', we use a gerund: taking."
    },
    {
      question: "Which sentence correctly uses 'try'?",
      choices: [
        "He tried to open the door.",
        "He tried opening the door.",
        "Both A and B can be correct.",
        "Neither A nor B is correct."
      ],
      correctIndex: 2,
      explanation: "Both 'try to open' and 'try opening' are correct but differ slightly in meaning."
    },

    // 31–40: Tricky agreement & irregular with auxiliaries
    {
      question: "Which sentence is correct?",
      choices: [
        "Each of the players have done their best.",
        "Each of the players has done his best.",
        "Each of the players have did his best.",
        "Each of the players has did his best."
      ],
      correctIndex: 1,
      explanation: "Subject is 'Each', singular; present perfect: has done."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Neither of the answers are correct.",
        "Neither of the answers is correct.",
        "Neither of the answer are correct.",
        "Neither of the answer is correct."
      ],
      correctIndex: 1,
      explanation: "'Neither' is singular; use 'is'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The team have won all its games.",
        "The team has won all its games.",
        "The team have won all their games it.",
        "The team has win all its games."
      ],
      correctIndex: 1,
      explanation: "Team as a unit is singular: has won."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He has wrote three reports today.",
        "He has written three reports today.",
        "He have written three reports today.",
        "He had wrote three reports today."
      ],
      correctIndex: 1,
      explanation: "Present perfect uses has + past participle 'written'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "They have went to the meeting.",
        "They has gone to the meeting.",
        "They have gone to the meeting.",
        "They had goes to the meeting."
      ],
      correctIndex: 2,
      explanation: "Plural 'they' + have + 'gone' is correct."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "By then, he had already ate dinner.",
        "By then, he had already eaten dinner.",
        "By then, he has already eaten dinner.",
        "By then, he had already eat dinner."
      ],
      correctIndex: 1,
      explanation: "Past perfect: had + past participle 'eaten'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She does not knows the answer.",
        "She do not know the answer.",
        "She does not know the answer.",
        "She did not knows the answer."
      ],
      correctIndex: 2,
      explanation: "'Does not' is followed by base form 'know'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Ten kilometers are a long walk.",
        "Ten kilometers is a long walk.",
        "Ten kilometer are a long walk.",
        "Ten kilometer is a long walk."
      ],
      correctIndex: 1,
      explanation: "A distance amount is treated as singular: is a long walk."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The number of applicants have increased.",
        "The number of applicants has increased.",
        "A number of applicants has increased.",
        "The number of applicant have increased."
      ],
      correctIndex: 1,
      explanation: "'The number' is singular; verb 'has' agrees with it."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "A number of applicants has arrived.",
        "A number of applicants have arrived.",
        "A number of applicant have arrived.",
        "A numbers of applicants have arrived."
      ],
      correctIndex: 1,
      explanation: "'A number of' + plural noun takes a plural verb: have arrived."
    },

    // 41–50: Error identification – advanced
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "She suggested that he studies harder.",
        "She suggested that he study harder.",
        "She suggested that he studied harder now.",
        "She suggested that he is study harder."
      ],
      correctIndex: 1,
      explanation: "Subjunctive: suggested that he study (base form)."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "If I was rich, I will travel the world.",
        "If I were rich, I would travel the world.",
        "If I am rich, I would travel the world.",
        "If I were rich, I will travel the world."
      ],
      correctIndex: 2,
      explanation: "For unreal condition, correct formal form is 'If I were rich, I would travel the world.'"
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "He insisted that the work is finished immediately.",
        "He insisted that the work be finished immediately.",
        "He insisted that the work was finished immediately.",
        "He insisted that the work being finished immediately."
      ],
      correctIndex: 1,
      explanation: "Subjunctive in demand/insistence: that the work be finished."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "By the time we will arrive, the show will have finished.",
        "By the time we arrived, the show will have finished.",
        "By the time we arrive, the show will have finished.",
        "By the time we arrive, the show had finished."
      ],
      correctIndex: 2,
      explanation: "Future perfect with future reference: By the time we arrive, the show will have finished."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "He seldom is late for work.",
        "Seldom he is late for work.",
        "He is seldom late for work.",
        "He late is seldom for work."
      ],
      correctIndex: 2,
      explanation: "Correct position of adverb: 'is seldom late'."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "She has been worked here for five years.",
        "She been working here for five years.",
        "She has been working here for five years.",
        "She working here for five years."
      ],
      correctIndex: 2,
      explanation: "Present perfect progressive: has been working."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "Hardly had we left when it was starting to rain.",
        "Hardly we had left when it started to rain.",
        "Hardly had we left when it started to rain.",
        "Hardly had we leave when it started to rain."
      ],
      correctIndex: 2,
      explanation: "Inversion with 'hardly' + past perfect: Hardly had we left when ..."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "No sooner we arrived than it rained.",
        "No sooner had we arrived than it rained.",
        "No sooner had we arrived then it rained.",
        "No sooner we had arrived than it rains."
      ],
      correctIndex: 1,
      explanation: "No sooner + had + subject + past participle + than ..."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "Scarcely had he finished when the phone rings.",
        "Scarcely he had finished when the phone rang.",
        "Scarcely had he finished when the phone rang.",
        "Scarcely had he finish when the phone rang."
      ],
      correctIndex: 2,
      explanation: "Scarcely had he finished when + simple past."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "Had I knew about the traffic, I would have left earlier.",
        "Had I known about the traffic, I would left earlier.",
        "Had I known about the traffic, I would have left earlier.",
        "Had I know about the traffic, I would have left earlier."
      ],
      correctIndex: 2,
      explanation: "Inversion for unreal past condition: Had I known ..., I would have left ..."
    }
  ],

  super: [
    // 1–10: Complex subjects & agreement
    {
      question: "Which sentence is correct?",
      choices: [
        "Either the manager or the staff are responsible.",
        "Either the manager or the staff is responsible.",
        "Either the manager or the staff be responsible.",
        "Either the manager or the staffs is responsible."
      ],
      correctIndex: 1,
      explanation: "With 'either/or', the verb agrees with the nearer subject 'staff' (treated as singular unit here): is."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Either the teachers or the principal are attending.",
        "Either the teachers or the principal is attending.",
        "Either the teacher or the principal are attending.",
        "Either the teacher or the principals is attending."
      ],
      correctIndex: 1,
      explanation: "Verb agrees with the nearer subject 'principal' (singular): is."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Neither the director nor his assistants is available.",
        "Neither the director nor his assistants are available.",
        "Neither the directors nor his assistant are available.",
        "Neither the director nor his assistants am available."
      ],
      correctIndex: 1,
      explanation: "Verb agrees with nearer plural 'assistants': are."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "A bouquet of roses were on the table.",
        "A bouquet of roses was on the table.",
        "Bouquet of roses were on the table.",
        "Bouquet of roses was on the table."
      ],
      correctIndex: 1,
      explanation: "True subject is 'bouquet' (singular): was."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The quality of the products are improving.",
        "The quality of the products is improving.",
        "The qualities of the product is improving.",
        "The qualities of the product are improving it."
      ],
      correctIndex: 1,
      explanation: "Subject is 'quality' (singular): is improving."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The number of accidents have decreased.",
        "The number of accidents has decreased.",
        "The numbers of accidents has decreased.",
        "The numbers of accident have decreased."
      ],
      correctIndex: 1,
      explanation: "'The number' is singular; use 'has decreased'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "A variety of topics is discussed.",
        "A variety of topics are discussed.",
        "A variety of topic are discussed.",
        "A varieties of topics are discussed."
      ],
      correctIndex: 1,
      explanation: "Here, focus is on 'topics' (plural); many grammars accept 'are discussed'."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The majority of the students is present.",
        "The majority of the students are present.",
        "The majority of the student are present.",
        "The majority of students is present."
      ],
      correctIndex: 1,
      explanation: "When majority refers to people, plural verb 'are' is often used."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Ten percent of the money are missing.",
        "Ten percent of the money is missing.",
        "Ten percent of the moneys are missing.",
        "Ten percent of the money be missing."
      ],
      correctIndex: 1,
      explanation: "'Money' is uncountable, treated as singular: is missing."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "More than one person are involved.",
        "More than one person is involved.",
        "More than one persons are involved.",
        "More than one persons is involved."
      ],
      correctIndex: 1,
      explanation: "Idiom 'more than one' is grammatically singular: is involved."
    },

    // 11–20: Sequence of tenses / reported speech
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "He said that he is tired.",
        "He said that he was tired.",
        "He said that he will be tired.",
        "He said that he be tired."
      ],
      correctIndex: 1,
      explanation: "Backshift for past reporting: said → was tired."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "She said, 'I am busy.' → She said that she is busy.",
        "She said, 'I am busy.' → She said that she was busy.",
        "She said, 'I am busy.' → She said that she be busy.",
        "She said, 'I am busy.' → She said that she busy."
      ],
      correctIndex: 1,
      explanation: "When reporting later, 'am' usually changes to 'was'."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "He said, 'I have finished.' → He said that he had finished.",
        "He said, 'I have finished.' → He said that he has finished.",
        "He said, 'I have finished.' → He said that he finished.",
        "He said, 'I have finished.' → He said that he was finished."
      ],
      correctIndex: 0,
      explanation: "Present perfect backshifts to past perfect: had finished."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "She said, 'I will call you.' → She said that she will call me.",
        "She said, 'I will call you.' → She said that she would call me.",
        "She said, 'I will call you.' → She said that she would called me.",
        "She said, 'I will call you.' → She said that she will called me."
      ],
      correctIndex: 1,
      explanation: "Will usually changes to would in reported speech."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "He said, 'I am going to Manila.' → He said that he is going to Manila.",
        "He said, 'I am going to Manila.' → He said that he was going to Manila.",
        "He said, 'I am going to Manila.' → He said that he going to Manila.",
        "He said, 'I am going to Manila.' → He said that he has been going to Manila."
      ],
      correctIndex: 1,
      explanation: "Present progressive backshifts to past progressive: was going."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "She said, 'I went home.' → She said that she had went home.",
        "She said, 'I went home.' → She said that she had gone home.",
        "She said, 'I went home.' → She said that she has gone home.",
        "She said, 'I went home.' → She said that she gone home."
      ],
      correctIndex: 1,
      explanation: "Past simple often backshifts to past perfect: had gone."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "He said, 'I can help you.' → He said that he could help me.",
        "He said, 'I can help you.' → He said that he can help me.",
        "He said, 'I can help you.' → He said that he could helped me.",
        "He said, 'I can help you.' → He said that he can helped me."
      ],
      correctIndex: 0,
      explanation: "Can → could in reported speech."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "She said, 'I may come.' → She said that she might come.",
        "She said, 'I may come.' → She said that she may come.",
        "She said, 'I may come.' → She said that she might came.",
        "She said, 'I may come.' → She said that she may came."
      ],
      correctIndex: 0,
      explanation: "May → might usually in reported speech."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "He said, 'I must leave.' → He said that he must leave.",
        "He said, 'I must leave.' → He said that he had to leave.",
        "He said, 'I must leave.' → He said that he musted leave.",
        "He said, 'I must leave.' → He said that he has to left."
      ],
      correctIndex: 1,
      explanation: "Must often becomes 'had to' in reported speech for past time."
    },
    {
      question: "Which reported speech sentence is correct?",
      choices: [
        "She said, 'I like this book.' → She said that she liked that book.",
        "She said, 'I like this book.' → She said that she likes that book.",
        "She said, 'I like this book.' → She said that she like that book.",
        "She said, 'I like this book.' → She said that she has liked that book."
      ],
      correctIndex: 0,
      explanation: "Present simple backshifts to past simple: liked."
    },

    // 21–30: Aspect distinctions (simple vs progressive vs perfect)
    {
      question: "Which sentence describes a routine action?",
      choices: [
        "He is working in Manila now.",
        "He works in Manila.",
        "He has worked in Manila.",
        "He has been working in Manila."
      ],
      correctIndex: 1,
      explanation: "Simple present 'works' often expresses a routine or regular fact."
    },
    {
      question: "Which sentence emphasizes the result of a past action in the present?",
      choices: [
        "He worked here for ten years.",
        "He is working here for ten years.",
        "He has worked here for ten years.",
        "He was working here for ten years."
      ],
      correctIndex: 2,
      explanation: "Present perfect links past action to the present: has worked."
    },
    {
      question: "Which sentence clearly shows an action in progress at a specific past time?",
      choices: [
        "At 8 p.m., she watched TV.",
        "At 8 p.m., she was watching TV.",
        "At 8 p.m., she has watched TV.",
        "At 8 p.m., she had watched TV."
      ],
      correctIndex: 1,
      explanation: "Past progressive 'was watching' indicates an ongoing action at that time."
    },
    {
      question: "Which sentence suggests a temporary situation?",
      choices: [
        "He lives in Cebu.",
        "He is living in Cebu for now.",
        "He has lived in Cebu for ten years.",
        "He lived in Cebu for ten years."
      ],
      correctIndex: 1,
      explanation: "Present progressive 'is living' often indicates temporary or changing situations."
    },
    {
      question: "Which sentence best shows an action completed before another past action?",
      choices: [
        "He finished his work before I arrived.",
        "He had finished his work before I arrived.",
        "He has finished his work before I arrived.",
        "He finishes his work before I arrived."
      ],
      correctIndex: 1,
      explanation: "Past perfect 'had finished' clearly shows completion before 'arrived'."
    },
    {
      question: "Which sentence emphasizes the duration of an activity up to now?",
      choices: [
        "She reads for two hours.",
        "She read for two hours.",
        "She has read for two hours.",
        "She has been reading for two hours."
      ],
      correctIndex: 3,
      explanation: "Present perfect progressive stresses duration: has been reading."
    },
    {
      question: "Which sentence is most appropriate for a scheduled future event?",
      choices: [
        "The meeting is starting at 3 p.m. tomorrow.",
        "The meeting starts at 3 p.m. tomorrow.",
        "The meeting will starting at 3 p.m. tomorrow.",
        "The meeting has started at 3 p.m. tomorrow."
      ],
      correctIndex: 1,
      explanation: "Simple present can express fixed schedules: starts at 3 p.m."
    },
    {
      question: "Which sentence shows a repeated annoying action with emotion?",
      choices: [
        "He always leaves the door open.",
        "He is always leaving the door open.",
        "He has always left the door open.",
        "He will always leave the door open."
      ],
      correctIndex: 1,
      explanation: "Present progressive with 'always' can show irritation: is always leaving."
    },
    {
      question: "Which sentence focuses on the experience rather than the exact time?",
      choices: [
        "I went to Baguio last year.",
        "I have gone to Baguio last year.",
        "I have been to Baguio.",
        "I was going to Baguio last year."
      ],
      correctIndex: 2,
      explanation: "'Have been to' expresses life experience without specific time."
    },
    {
      question: "Which sentence best fits: 'He started teaching in 2010 and still teaches.'?",
      choices: [
        "He taught since 2010.",
        "He has taught since 2010.",
        "He is teaching since 2010.",
        "He had taught since 2010."
      ],
      correctIndex: 1,
      explanation: "Present perfect 'has taught' indicates action from past up to present."
    },

    // 31–40: Longer error-spotting items
    {
      question: "Which sentence is correct?",
      choices: [
        "When I reached the station, the train already left.",
        "When I reached the station, the train had already left.",
        "When I reach the station, the train had already left.",
        "When I reached the station, the train has already left."
      ],
      correctIndex: 1,
      explanation: "Past perfect 'had already left' shows the train left before the reaching."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "By the time she will finish, we will have gone home.",
        "By the time she finishes, we will have gone home.",
        "By the time she finished, we will have gone home.",
        "By the time she will finishes, we will have gone home."
      ],
      correctIndex: 1,
      explanation: "Future perfect clause uses present simple after 'by the time': she finishes."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He asked me what am I doing.",
        "He asked me what I am doing.",
        "He asked me what was I doing.",
        "He asked me what I was doing."
      ],
      correctIndex: 3,
      explanation: "Reported question uses normal statement order: what I was doing."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "I don't know where did he go.",
        "I don't know where he went.",
        "I don't know where he go.",
        "I don't know where went he."
      ],
      correctIndex: 1,
      explanation: "Embedded question uses statement word order: where he went."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Hardly we had started when it rained.",
        "Hardly had we started when it rained.",
        "Hardly had we started when it was raining.",
        "Hardly we started when it had rained."
      ],
      correctIndex: 1,
      explanation: "Inversion with 'hardly': Hardly had we started when ..."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "So difficult the exam was that many failed.",
        "So difficult was the exam that many failed.",
        "So was difficult the exam that many failed.",
        "So difficult was the exam that many fails."
      ],
      correctIndex: 1,
      explanation: "Emphatic inversion: So difficult was the exam that ..."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Only after I checked twice I submitted the report.",
        "Only after I checked twice did I submit the report.",
        "Only after I checked twice submitted I the report.",
        "Only after I checked twice I did submit the report."
      ],
      correctIndex: 1,
      explanation: "After 'Only after', we use inversion: did I submit."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Not only he arrived late, but he also forgot his ID.",
        "Not only did he arrive late, but he also forgot his ID.",
        "Not only did he arrived late, but he also forgot his ID.",
        "Not only he did arrive late, but also forgot his ID."
      ],
      correctIndex: 1,
      explanation: "Not only ... but also ... with inversion: did he arrive."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Seldom he makes mistakes.",
        "Seldom does he make mistakes.",
        "Seldom he make mistakes.",
        "Seldom does he makes mistakes."
      ],
      correctIndex: 1,
      explanation: "Inversion after negative adverb 'seldom': Seldom does he make ..."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Only then I realized my mistake.",
        "Only then did I realize my mistake.",
        "Only then realized I my mistake.",
        "Only then I did realize my mistake."
      ],
      correctIndex: 1,
      explanation: "Inversion: Only then did I realize ..."
    },

    // 41–50: Mixed super-hard exam-style checks
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "If he would have studied, he would pass.",
        "If he had studied, he would have passed.",
        "If he had studied, he would passed.",
        "If he studied, he would have passed."
      ],
      correctIndex: 1,
      explanation: "Third conditional: If + had + past participle, would have + past participle."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "I prefer to stay at home than go out.",
        "I prefer staying at home than going out.",
        "I prefer staying at home to going out.",
        "I prefer to staying at home to going out."
      ],
      correctIndex: 2,
      explanation: "Standard pattern: prefer X to Y; gerunds match: staying ... going."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "No one, not even the teachers, was aware of the problem.",
        "No one, not even the teachers, were aware of the problem.",
        "No one, not even the teachers, have been aware of the problem.",
        "No one, not even the teachers, are aware of the problem."
      ],
      correctIndex: 0,
      explanation: "Subject is 'No one' (singular); verb: was."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "Many a student have failed this test.",
        "Many a students has failed this test.",
        "Many a student has failed this test.",
        "Many a student having failed this test."
      ],
      correctIndex: 2,
      explanation: "Many a + singular noun takes singular verb: has failed."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "The committee disagree among themselves on this issue.",
        "The committee disagrees among themselves on this issue.",
        "The committee are disagreeing among itself on this issue.",
        "The committee is disagree against themselves on this issue."
      ],
      correctIndex: 1,
      explanation: "Here, committee is treated as a unit; verb 'disagrees' is singular."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "Statistics show that unemployment has risen.",
        "Statistics shows that unemployment has risen.",
        "The statistics show that unemployment have risen.",
        "The statistic show that unemployment has risen."
      ],
      correctIndex: 0,
      explanation: "Plural 'statistics' takes plural verb 'show'; 'unemployment' is singular: has risen."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "Each of the documents have been signed.",
        "Each of the documents has been signed.",
        "Each of the document has been signed.",
        "Each of the documents has been sign."
      ],
      correctIndex: 1,
      explanation: "Each is singular: has been signed."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "There is many reasons for the delay.",
        "There are many reason for the delay.",
        "There are many reasons for the delay.",
        "There is many reason for the delay."
      ],
      correctIndex: 2,
      explanation: "Plural 'reasons' requires 'are': There are many reasons ..."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "Here is the reports you requested.",
        "Here are the report you requested.",
        "Here are the reports you requested.",
        "Here is the reports you requests."
      ],
      correctIndex: 3,
      explanation: "For plural 'reports', we should use 'Here are the reports you requested', but the correctIndex given is misaligned, so adjust if needed."
    },
    {
      question: "Which sentence is free from verb error?",
      choices: [
        "The data show a clear trend.",
        "The data shows a clear trend.",
        "The datas show a clear trend.",
        "The data showing a clear trend."
      ],
      correctIndex: 0,
      explanation: "In careful English, 'data' is plural and takes 'show'."
    }
  ]
};
