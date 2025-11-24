const ERROR_IDENTIFICATION_QUESTIONS = {
  beginner: [
    // 1-10: Subject-Verb Agreement (Basic)
    {
      question: "Identify the error: 'The cat / sleep / on / the sofa.'",
      choices: ["The cat", "sleep", "on", "No error"],
      correctIndex: 1,
      explanation: "Rule: Subject-Verb Agreement. The subject 'The cat' is singular. The verb must be 'sleeps'."
    },
    {
      question: "Identify the error: 'She / do not / like / apples.'",
      choices: ["She", "do not", "like", "No error"],
      correctIndex: 1,
      explanation: "Rule: Auxiliary Verbs. Singular subject 'She' requires 'does not', not 'do not'."
    },
    {
      question: "Identify the error: 'My brother / have / a / new bike.'",
      choices: ["My brother", "have", "a", "No error"],
      correctIndex: 1,
      explanation: "Rule: Has vs Have. Singular subject 'My brother' requires 'has'."
    },
    {
      question: "Identify the error: 'They / was / happy / yesterday.'",
      choices: ["They", "was", "happy", "No error"],
      correctIndex: 1,
      explanation: "Rule: Past Tense 'Be'. Plural subject 'They' requires 'were', not 'was'."
    },
    {
      question: "Identify the error: 'He / run / very fast / every morning.'",
      choices: ["He", "run", "very fast", "No error"],
      correctIndex: 1,
      explanation: "Rule: Simple Present. Singular subject 'He' requires 'runs'."
    },
    {
      question: "Identify the error: 'We / goes / to school / by bus.'",
      choices: ["We", "goes", "to school", "No error"],
      correctIndex: 1,
      explanation: "Rule: Subject-Verb Agreement. Plural subject 'We' requires base form 'go'."
    },
    {
      question: "Identify the error: 'The students / is / reading / books.'",
      choices: ["The students", "is", "reading", "No error"],
      correctIndex: 1,
      explanation: "Rule: Plural Subjects. 'Students' is plural, so use 'are'."
    },
    {
      question: "Identify the error: 'You / am / my / best friend.'",
      choices: ["You", "am", "my", "No error"],
      correctIndex: 1,
      explanation: "Rule: Verb 'To Be'. 'You' always takes 'are', never 'am'."
    },
    {
      question: "Identify the error: 'She / washes / the dishes / every night.'",
      choices: ["She", "washes", "the dishes", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. Singular subject 'She' + 'washes' is correct."
    },
    {
      question: "Identify the error: 'John / and Mary / is / here.'",
      choices: ["John", "and Mary", "is", "No error"],
      correctIndex: 2,
      explanation: "Rule: Compound Subject. 'John and Mary' = They. Use 'are'."
    },

    // 11-20: Articles
    {
      question: "Identify the error: 'I / saw / an / dog.'",
      choices: ["I", "saw", "an", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Articles. 'Dog' starts with a consonant sound. Use 'a'."
    },
    {
      question: "Identify the error: 'She / is / a / engineer.'",
      choices: ["She", "is", "a", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Articles. 'Engineer' starts with a vowel sound. Use 'an'."
    },
    {
      question: "Identify the error: 'He wants / to be / a actor / someday.'",
      choices: ["He wants", "to be", "a actor", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Articles. 'Actor' starts with a vowel sound. Use 'an actor'."
    },
    {
      question: "Identify the error: 'The sun / rises in / a / east.'",
      choices: ["The sun", "rises in", "a", "No error"],
      correctIndex: 2,
      explanation: "Rule: Definite Article. Cardinal directions are specific. Use 'the east'."
    },
    {
      question: "Identify the error: 'Please / close / a / door behind you.'",
      choices: ["Please", "close", "a", "No error"],
      correctIndex: 2,
      explanation: "Rule: Specificity. The door behind you is specific. Use 'the door'."
    },
    {
      question: "Identify the error: 'I / have / an / uniform.'",
      choices: ["I", "have", "an", "No error"],
      correctIndex: 2,
      explanation: "Rule: Initial Sound. 'Uniform' starts with a 'Y' consonant sound. Use 'a uniform'."
    },
    {
      question: "Identify the error: 'She / eats / an / apple.'",
      choices: ["She", "eats", "an", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. 'Apple' starts with a vowel sound. 'An' is correct."
    },
    {
      question: "Identify the error: 'He / is / a / honest man.'",
      choices: ["He", "is", "a", "No error"],
      correctIndex: 2,
      explanation: "Rule: Silent H. 'Honest' starts with a vowel sound. Use 'an honest man'."
    },
    {
      question: "Identify the error: 'We / visited / the / Manila.'",
      choices: ["We", "visited", "the", "No error"],
      correctIndex: 2,
      explanation: "Rule: Proper Nouns. Cities don't take articles. Use 'visited Manila'."
    },
    {
      question: "Identify the error: 'This / is / the / best cake.'",
      choices: ["This", "is", "the", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. Superlatives like 'best' take 'the'."
    },

    // 21-30: Pronouns
    {
      question: "Identify the error: 'Me / and my friend / went / home.'",
      choices: ["Me", "and my friend", "went", "No error"],
      correctIndex: 0,
      explanation: "Rule: Subject Pronouns. 'Me' is an object. Use 'My friend and I' or 'I'."
    },
    {
      question: "Identify the error: 'Him / is / a / good student.'",
      choices: ["Him", "is", "a", "No error"],
      correctIndex: 0,
      explanation: "Rule: Subject Pronouns. 'Him' is an object. Use 'He'."
    },
    {
      question: "Identify the error: 'The teacher / gave / we / homework.'",
      choices: ["The teacher", "gave", "we", "No error"],
      correctIndex: 2,
      explanation: "Rule: Object Pronouns. The pronoun receives action. Use 'us'."
    },
    {
      question: "Identify the error: 'This book / belongs / to / my.'",
      choices: ["This book", "belongs", "to", "my"],
      correctIndex: 3,
      explanation: "Rule: Possessive Pronouns. 'My' needs a noun. Use 'me' (object) or 'mine' (possession)."
    },
    {
      question: "Identify the error: 'Us / are / going / to the park.'",
      choices: ["Us", "are", "going", "No error"],
      correctIndex: 0,
      explanation: "Rule: Subject Pronouns. 'Us' cannot be subject. Use 'We'."
    },
    {
      question: "Identify the error: 'Between / you / and / I.'",
      choices: ["Between", "you", "and", "I"],
      correctIndex: 3,
      explanation: "Rule: Prepositions. Always use object pronouns after prepositions. Use 'me'."
    },
    {
      question: "Identify the error: 'Them / boys / are / noisy.'",
      choices: ["Them", "boys", "are", "No error"],
      correctIndex: 0,
      explanation: "Rule: Demonstratives. Use 'Those boys' or 'The boys', not 'Them boys'."
    },
    {
      question: "Identify the error: 'My mom / cooked / for / he.'",
      choices: ["My mom", "cooked", "for", "he"],
      correctIndex: 3,
      explanation: "Rule: Prepositions. Use object pronoun 'him' after 'for'."
    },
    {
      question: "Identify the error: 'Is / that / bag / yours?'",
      choices: ["Is", "that", "bag", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. 'Yours' is the correct possessive form."
    },
    {
      question: "Identify the error: 'Her / likes / to / dance.'",
      choices: ["Her", "likes", "to", "No error"],
      correctIndex: 0,
      explanation: "Rule: Subject Pronouns. Use 'She', not 'Her'."
    },

    // 31-40: Prepositions
    {
      question: "Identify the error: 'I / woke up / on / 7:00 AM.'",
      choices: ["I", "woke up", "on", "No error"],
      correctIndex: 2,
      explanation: "Rule: Time. Use 'at' for specific times."
    },
    {
      question: "Identify the error: 'She / was / born / in Monday.'",
      choices: ["She", "was", "born", "in"],
      correctIndex: 3,
      explanation: "Rule: Time. Use 'on' for days of the week."
    },
    {
      question: "Identify the error: 'The cat / is / at / the table.'",
      choices: ["The cat", "is", "at", "No error"],
      correctIndex: 2,
      explanation: "Rule: Place. Objects are usually 'on' (top) or 'under' the table. 'At' implies sitting like a person."
    },
    {
      question: "Identify the error: 'I / live / on / Cebu City.'",
      choices: ["I", "live", "on", "No error"],
      correctIndex: 2,
      explanation: "Rule: Place. Use 'in' for cities/countries."
    },
    {
      question: "Identify the error: 'He / arrived / at / January.'",
      choices: ["He", "arrived", "at", "No error"],
      correctIndex: 2,
      explanation: "Rule: Time. Use 'in' for months."
    },
    {
      question: "Identify the error: 'My birthday / is / in / July 5th.'",
      choices: ["My birthday", "is", "in", "No error"],
      correctIndex: 2,
      explanation: "Rule: Time. Use 'on' for specific dates."
    },
    {
      question: "Identify the error: 'The picture / is / in / the wall.'",
      choices: ["The picture", "is", "in", "No error"],
      correctIndex: 2,
      explanation: "Rule: Place. Use 'on' for vertical surfaces."
    },
    {
      question: "Identify the error: 'See / you / in / Friday.'",
      choices: ["See", "you", "in", "No error"],
      correctIndex: 2,
      explanation: "Rule: Time. Use 'on' for days."
    },
    {
      question: "Identify the error: 'I am / good / in / Math.'",
      choices: ["I am", "good", "in", "No error"],
      correctIndex: 2,
      explanation: "Rule: Idiom. Use 'good at' for skills."
    },
    {
      question: "Identify the error: 'He is / afraid / from / dogs.'",
      choices: ["He is", "afraid", "from", "No error"],
      correctIndex: 2,
      explanation: "Rule: Collocation. Use 'afraid of'."
    },

    // 41-50: Adjectives vs Adverbs
    {
      question: "Identify the error: 'She / sings / very / good.'",
      choices: ["She", "sings", "very", "good"],
      correctIndex: 3,
      explanation: "Rule: Adverbs. Use 'well' to modify verbs. 'Good' is an adjective."
    },
    {
      question: "Identify the error: 'He / drives / very / careful.'",
      choices: ["He", "drives", "very", "careful"],
      correctIndex: 3,
      explanation: "Rule: Adverbs. Use 'carefully' to modify 'drives'."
    },
    {
      question: "Identify the error: 'The soup / tastes / badly / today.'",
      choices: ["The soup", "tastes", "badly", "No error"],
      correctIndex: 2,
      explanation: "Rule: Linking Verb. 'Tastes' links to an adjective. Use 'bad'."
    },
    {
      question: "Identify the error: 'She / speaks / soft / to the baby.'",
      choices: ["She", "speaks", "soft", "No error"],
      correctIndex: 2,
      explanation: "Rule: Adverbs. Use 'softly' to modify 'speaks'."
    },
    {
      question: "Identify the error: 'He / acts / polite / with guests.'",
      choices: ["He", "acts", "polite", "No error"],
      correctIndex: 2,
      explanation: "Rule: Adverbs. Use 'politely' to modify 'acts'."
    },
    {
      question: "Identify the error: 'This / is / a / real good movie.'",
      choices: ["This", "is", "a", "real good movie"],
      correctIndex: 3,
      explanation: "Rule: Adverbs. Use 'really good'. 'Real' is an adjective."
    },
    {
      question: "Identify the error: 'She / looks / beautiful / tonight.'",
      choices: ["She", "looks", "beautiful", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. 'Looks' is a linking verb taking the adjective 'beautiful'."
    },
    {
      question: "Identify the error: 'I / can / run / quick.'",
      choices: ["I", "can", "run", "quick"],
      correctIndex: 3,
      explanation: "Rule: Adverbs. Use 'quickly' to modify 'run'."
    },
    {
      question: "Identify the error: 'He / is / a / slowly runner.'",
      choices: ["He", "is", "a", "slowly runner"],
      correctIndex: 3,
      explanation: "Rule: Adjectives. Use 'slow' to modify the noun 'runner'."
    },
    {
      question: "Identify the error: 'They / worked / hardly / all day.'",
      choices: ["They", "worked", "hardly", "No error"],
      correctIndex: 2,
      explanation: "Rule: Meaning. 'Hardly' means 'almost not'. Use 'hard' to mean 'with effort'."
    }
  ],

  intermediate: [
    // 51-60: Subject-Verb Agreement (Intervening)
    {
      question: "Identify the error: 'The box / of chocolates / are / missing.'",
      choices: ["The box", "of chocolates", "are", "missing"],
      correctIndex: 2,
      explanation: "Rule: Intervening Phrases. Subject is 'box' (singular). Use 'is'."
    },
    {
      question: "Identify the error: 'The teacher, / along with students, / are / going.'",
      choices: ["The teacher,", "along with students,", "are", "No error"],
      correctIndex: 2,
      explanation: "Rule: Additive Phrases. 'Along with' doesn't change the singular subject 'teacher'. Use 'is'."
    },
    {
      question: "Identify the error: 'One / of the boys / have / a bike.'",
      choices: ["One", "of the boys", "have", "No error"],
      correctIndex: 2,
      explanation: "Rule: 'One of'. The subject is 'One' (singular). Use 'has'."
    },
    {
      question: "Identify the error: 'The list / of names / is / long.'",
      choices: ["The list", "of names", "is", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. Subject 'list' is singular. No error."
    },
    {
      question: "Identify the error: 'Neither / of the answers / are / correct.'",
      choices: ["Neither", "of the answers", "are", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Pronouns. 'Neither' is grammatically singular. Use 'is'."
    },
    {
      question: "Identify the error: 'The manager, / as well as clerks, / were / late.'",
      choices: ["The manager,", "as well as clerks,", "were", "No error"],
      correctIndex: 2,
      explanation: "Rule: Additive Phrases. Subject is 'manager' (singular). Use 'was'."
    },
    {
      question: "Identify the error: 'Each / of the girls / sing / beautifully.'",
      choices: ["Each", "of the girls", "sing", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Pronouns. 'Each' is singular. Use 'sings'."
    },
    {
      question: "Identify the error: 'The decision / of the judges / stand / final.'",
      choices: ["The decision", "of the judges", "stand", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subject-Verb Agreement. Subject 'decision' is singular. Use 'stands'."
    },
    {
      question: "Identify the error: 'A bouquet / of yellow roses / lend / color.'",
      choices: ["A bouquet", "of yellow roses", "lend", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subject-Verb Agreement. Subject 'bouquet' is singular. Use 'lends'."
    },
    {
      question: "Identify the error: 'The noise / of cars / annoy / me.'",
      choices: ["The noise", "of cars", "annoy", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subject-Verb Agreement. Subject 'noise' is singular. Use 'annoys'."
    },

    // 61-70: Tenses
    {
      question: "Identify the error: 'She / lived / here / since 2010.'",
      choices: ["She", "lived", "here", "since 2010"],
      correctIndex: 1,
      explanation: "Rule: Present Perfect. With 'since', use 'has lived' for continuing actions."
    },
    {
      question: "Identify the error: 'I / have seen / him / yesterday.'",
      choices: ["I", "have seen", "him", "yesterday"],
      correctIndex: 1,
      explanation: "Rule: Past Time. 'Yesterday' requires simple past 'saw', not perfect tense."
    },
    {
      question: "Identify the error: 'When we arrived, / the train / already / left.'",
      choices: ["When we arrived,", "the train", "already", "left"],
      correctIndex: 3,
      explanation: "Rule: Past Perfect. Use 'had left' because it happened BEFORE we arrived."
    },
    {
      question: "Identify the error: 'I / am knowing / him / for years.'",
      choices: ["I", "am knowing", "him", "No error"],
      correctIndex: 1,
      explanation: "Rule: Stative Verbs. 'Know' is not used in continuous forms. Use 'have known'."
    },
    {
      question: "Identify the error: 'She / has / wrote / a letter.'",
      choices: ["She", "has", "wrote", "No error"],
      correctIndex: 2,
      explanation: "Rule: Perfect Tense. After 'has', use participle 'written'."
    },
    {
      question: "Identify the error: 'I / didn't / went / to work.'",
      choices: ["I", "didn't", "went", "No error"],
      correctIndex: 2,
      explanation: "Rule: Auxiliaries. After 'didn't', use base form 'go'."
    },
    {
      question: "Identify the error: 'By next year, / I / finish / my degree.'",
      choices: ["By next year,", "I", "finish", "No error"],
      correctIndex: 2,
      explanation: "Rule: Future Perfect. Use 'will have finished' for actions completed by a future time."
    },
    {
      question: "Identify the error: 'He / has / began / the project.'",
      choices: ["He", "has", "began", "No error"],
      correctIndex: 2,
      explanation: "Rule: Participles. 'Began' is past tense. Use 'begun' with 'has'."
    },
    {
      question: "Identify the error: 'If I / know / you were coming, / I would have stayed.'",
      choices: ["If I", "know", "you were coming,", "I would have stayed"],
      correctIndex: 1,
      explanation: "Rule: Third Conditional. Use 'had known' to match 'would have stayed'."
    },
    {
      question: "Identify the error: 'She / is / sleeping / for two hours.'",
      choices: ["She", "is", "sleeping", "for two hours"],
      correctIndex: 1,
      explanation: "Rule: Perfect Continuous. Use 'has been sleeping' for actions with duration up to now."
    },

    // 71-80: Redundancy & Negatives
    {
      question: "Identify the error: 'I / don't have / no / money.'",
      choices: ["I", "don't have", "no", "No error"],
      correctIndex: 2,
      explanation: "Rule: Double Negative. Use 'any' money."
    },
    {
      question: "Identify the error: 'He / can't / hardly / see.'",
      choices: ["He", "can't", "hardly", "No error"],
      correctIndex: 1,
      explanation: "Rule: Double Negative. 'Hardly' is negative. Use 'can hardly'."
    },
    {
      question: "Identify the error: 'Please / repeat / that / again.'",
      choices: ["Please", "repeat", "that", "again"],
      correctIndex: 3,
      explanation: "Rule: Redundancy. 'Repeat' implies 'again'. Remove 'again'."
    },
    {
      question: "Identify the error: 'The / reason is / because / he was late.'",
      choices: ["The", "reason is", "because", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. Use 'The reason is THAT'."
    },
    {
      question: "Identify the error: 'She / returned / back / home.'",
      choices: ["She", "returned", "back", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'Return' implies 'back'. Remove 'back'."
    },
    {
      question: "Identify the error: 'He / hasn't / never / been there.'",
      choices: ["He", "hasn't", "never", "No error"],
      correctIndex: 2,
      explanation: "Rule: Double Negative. Use 'ever'."
    },
    {
      question: "Identify the error: 'Advance / forward / to the / next level.'",
      choices: ["Advance", "forward", "to the", "No error"],
      correctIndex: 1,
      explanation: "Rule: Redundancy. 'Advance' implies 'forward'. Remove 'forward'."
    },
    {
      question: "Identify the error: 'The / ATM machine / is / broken.'",
      choices: ["The", "ATM machine", "is", "No error"],
      correctIndex: 1,
      explanation: "Rule: Redundancy. 'M' stands for Machine. Use 'ATM' only."
    },
    {
      question: "Identify the error: 'I / could / care / less.'",
      choices: ["I", "could", "care", "less"],
      correctIndex: 1,
      explanation: "Rule: Idiom. Correct phrase is 'Couldn't care less' (meaning zero care)."
    },
    {
      question: "Identify the error: 'Irregardless / of the weather, / we / go.'",
      choices: ["Irregardless", "of the weather,", "we", "go"],
      correctIndex: 0,
      explanation: "Rule: Non-standard. Use 'Regardless'."
    },

    // 81-90: Parallelism (Intermediate)
    {
      question: "Identify the error: 'She likes / swimming, / hiking, / and to run.'",
      choices: ["She likes", "swimming,", "hiking,", "and to run"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Items must be gerunds. Use 'running'."
    },
    {
      question: "Identify the error: 'The movie / was / long, / boring, and loud noise.'",
      choices: ["The movie", "was", "long,", "boring, and loud noise"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. List needs adjectives. Use 'loud'."
    },
    {
      question: "Identify the error: 'He wants / to travel / and / working abroad.'",
      choices: ["He wants", "to travel", "and", "working abroad"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Match infinitive. Use 'work' or 'to work'."
    },
    {
      question: "Identify the error: 'She is / smart, / beautiful, / and a doctor.'",
      choices: ["She is", "smart,", "beautiful,", "and a doctor"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. 'Smart/Beautiful' are adjectives. 'Doctor' is a noun. It breaks structure."
    },
    {
      question: "Identify the error: 'You can / go by / bus or / take a train.'",
      choices: ["You can", "go by", "bus or", "take a train"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. 'Go by bus' vs 'take a train'. Better: 'go by bus or by train'."
    },
    {
      question: "Identify the error: 'To / learn is / to / growing.'",
      choices: ["To", "learn is", "to", "growing"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Match infinitives. Use 'to grow'."
    },
    {
      question: "Identify the error: 'He spoke / clearly, / eloquently, / and with confidence.'",
      choices: ["He spoke", "clearly,", "eloquently,", "and with confidence"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Needs an adverb. Use 'confidently'."
    },
    {
      question: "Identify the error: 'I prefer / reading / to / write.'",
      choices: ["I prefer", "reading", "to", "write"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. 'Prefer X to Y'. Forms must match. Use 'writing'."
    },
    {
      question: "Identify the error: 'My goals are / to save money, / buying a house, / and retiring.'",
      choices: ["My goals are", "to save money,", "buying a house,", "No error"],
      correctIndex: 2,
      explanation: "Rule: Parallelism. First item is infinitive ('to save'). Others must match. Use 'to buy'."
    },
    {
      question: "Identify the error: 'Not only / is he rich, / but also / famous.'",
      choices: ["Not only", "is he rich,", "but also", "famous"],
      correctIndex: 1,
      explanation: "Rule: Correlative Conjunctions. Structure is unbalanced. 'Is he rich' (clause) vs 'famous' (adj). Fix: 'He is not only rich but also famous'."
    },

    // 91-100: Modifiers
    {
      question: "Identify the error: 'Walking / down the street, / the trees / looked beautiful.'",
      choices: ["Walking", "down the street,", "the trees", "looked beautiful"],
      correctIndex: 2,
      explanation: "Rule: Dangling Modifier. Trees cannot walk. Subject 'I' is missing."
    },
    {
      question: "Identify the error: 'She served / sandwiches to the kids / on / paper plates.'",
      choices: ["She served", "sandwiches to the kids", "on", "paper plates"],
      correctIndex: 1,
      explanation: "Rule: Misplaced Modifier. 'On paper plates' modifies sandwiches, not kids. Move it closer to 'sandwiches'."
    },
    {
      question: "Identify the error: 'Covered / in cheese, / I ate / the pizza.'",
      choices: ["Covered", "in cheese,", "I ate", "the pizza"],
      correctIndex: 2,
      explanation: "Rule: Dangling Modifier. 'I' was not covered in cheese. The pizza was."
    },
    {
      question: "Identify the error: 'To get / a good grade, / studying / is necessary.'",
      choices: ["To get", "a good grade,", "studying", "is necessary"],
      correctIndex: 2,
      explanation: "Rule: Dangling Infinitive. 'Studying' cannot 'get' the grade. A person must be the subject."
    },
    {
      question: "Identify the error: 'Barking / loudly, / John / shouted at the dog.'",
      choices: ["Barking", "loudly,", "John", "shouted at the dog"],
      correctIndex: 2,
      explanation: "Rule: Misplaced Modifier. Implies John was barking. Correct: 'shouted at the barking dog'."
    },
    {
      question: "Identify the error: 'He / nearly drove / for / six hours.'",
      choices: ["He", "nearly drove", "for", "six hours"],
      correctIndex: 1,
      explanation: "Rule: Misplaced Modifier. 'Nearly drove' means he didn't drive. Use 'drove for nearly six hours'."
    },
    {
      question: "Identify the error: 'I / only have / five / dollars.'",
      choices: ["I", "only have", "five", "dollars"],
      correctIndex: 1,
      explanation: "Rule: Placement of 'Only'. Use 'have only five dollars'."
    },
    {
      question: "Identify the error: 'After / rotting / in the cellar, / mom threw the apples.'",
      choices: ["After", "rotting", "in the cellar,", "mom threw the apples"],
      correctIndex: 3,
      explanation: "Rule: Dangling Modifier. Implies mom was rotting. Subject must be 'apples'."
    },
    {
      question: "Identify the error: 'The woman / walked the dog / in / a bikini.'",
      choices: ["The woman", "walked the dog", "in", "a bikini"],
      correctIndex: 1,
      explanation: "Rule: Misplaced Modifier. Suggests dog is in a bikini. Rephrase: 'The woman in a bikini walked...'"
    },
    {
      question: "Identify the error: 'He / bought a horse / for his sister / called Prince.'",
      choices: ["He", "bought a horse", "for his sister", "called Prince"],
      correctIndex: 2,
      explanation: "Rule: Misplaced Modifier. Implies sister is called Prince. Place 'called Prince' next to 'horse'."
    }
  ],

  advanced: [
    // 101-110: Inversion & Subjunctive
    {
      question: "Identify the error: 'Never / I have / seen / such a thing.'",
      choices: ["Never", "I have", "seen", "No error"],
      correctIndex: 1,
      explanation: "Rule: Inversion. 'Never' at start requires 'have I seen'."
    },
    {
      question: "Identify the error: 'I suggest / that he / stops / smoking.'",
      choices: ["I suggest", "that he", "stops", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subjunctive. After 'suggest', use base form 'stop'."
    },
    {
      question: "Identify the error: 'If I / was / you, / I would accept.'",
      choices: ["If I", "was", "you,", "I would accept"],
      correctIndex: 1,
      explanation: "Rule: Subjunctive. Hypothetical 'If' uses 'were'."
    },
    {
      question: "Identify the error: 'Rarely / we do / go / to the cinema.'",
      choices: ["Rarely", "we do", "go", "No error"],
      correctIndex: 1,
      explanation: "Rule: Inversion. Negative adverb 'Rarely' requires 'do we go'."
    },
    {
      question: "Identify the error: 'It is / important that / she / is on time.'",
      choices: ["It is", "important that", "she", "is on time"],
      correctIndex: 3,
      explanation: "Rule: Subjunctive. Use base form 'be' after 'important'."
    },
    {
      question: "Identify the error: 'Not only / he is / rich, / but also famous.'",
      choices: ["Not only", "he is", "rich,", "No error"],
      correctIndex: 1,
      explanation: "Rule: Inversion. After 'Not only', use 'is he'."
    },
    {
      question: "Identify the error: 'I wish / I / know / the answer.'",
      choices: ["I wish", "I", "know", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subjunctive Wish. Use past tense 'knew' for present wish."
    },
    {
      question: "Identify the error: 'Had / I / knew, / I would have come.'",
      choices: ["Had", "I", "knew,", "No error"],
      correctIndex: 2,
      explanation: "Rule: Past Perfect. 'Had' requires participle 'known'."
    },
    {
      question: "Identify the error: 'Little / he knew / about / the surprise.'",
      choices: ["Little", "he knew", "about", "No error"],
      correctIndex: 1,
      explanation: "Rule: Inversion. 'Little' is negative here. Use 'did he know'."
    },
    {
      question: "Identify the error: 'God / blesses / the / Philippines.'",
      choices: ["God", "blesses", "the", "No error"],
      correctIndex: 1,
      explanation: "Rule: Formulaic Subjunctive. Use base form 'Bless' for wishes/prayers."
    },

    // 111-120: Advanced Pronouns
    {
      question: "Identify the error: 'Who / did you / give / the book to?'",
      choices: ["Who", "did you", "give", "No error"],
      correctIndex: 0,
      explanation: "Rule: Case. Object of preposition 'to' requires 'Whom'."
    },
    {
      question: "Identify the error: 'He is / the man / whom / I think stole it.'",
      choices: ["He is", "the man", "whom", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subject of Clause. 'Who' is the subject of 'stole'. Use 'who'."
    },
    {
      question: "Identify the error: 'Give it / to / whomever / wants it.'",
      choices: ["Give it", "to", "whomever", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subject of Clause. 'Whoever' is the subject of 'wants'. Use 'whoever'."
    },
    {
      question: "Identify the error: 'Us / students / need / more time.'",
      choices: ["Us", "students", "need", "No error"],
      correctIndex: 0,
      explanation: "Rule: Case. 'We' is the subject. Use 'We students'."
    },
    {
      question: "Identify the error: 'She is / taller / than / me.'",
      choices: ["She is", "taller", "than", "me"],
      correctIndex: 3,
      explanation: "Rule: Formal Grammar. Comparison is 'than I (am)'."
    },
    {
      question: "Identify the error: 'It was / him / who / called.'",
      choices: ["It was", "him", "who", "No error"],
      correctIndex: 1,
      explanation: "Rule: Predicate Nominative. After 'was', use subject pronoun 'he'."
    },
    {
      question: "Identify the error: 'Everyone / has / their / own opinion.'",
      choices: ["Everyone", "has", "their", "No error"],
      correctIndex: 2,
      explanation: "Rule: Singular Indefinite. Formal grammar requires 'his or her'."
    },
    {
      question: "Identify the error: 'Between / you / and / I.'",
      choices: ["Between", "you", "and", "I"],
      correctIndex: 3,
      explanation: "Rule: Object of Preposition. Use 'me'."
    },
    {
      question: "Identify the error: 'The jury / gave / their / verdict.'",
      choices: ["The jury", "gave", "their", "No error"],
      correctIndex: 2,
      explanation: "Rule: Collective Noun. 'Verdict' implies unity. Use 'its'."
    },
    {
      question: "Identify the error: 'Myself / will / handle / the project.'",
      choices: ["Myself", "will", "handle", "No error"],
      correctIndex: 0,
      explanation: "Rule: Reflexive. Cannot be subject. Use 'I'."
    },

    // 121-130: Advanced Prepositions
    {
      question: "Identify the error: 'We / discussed / about / the problem.'",
      choices: ["We", "discussed", "about", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'Discuss' means talk about. Remove 'about'."
    },
    {
      question: "Identify the error: 'She / married / with / a doctor.'",
      choices: ["She", "married", "with", "No error"],
      correctIndex: 2,
      explanation: "Rule: Idiom. Use 'married a doctor' or 'married to'."
    },
    {
      question: "Identify the error: 'I / entered / into / the room.'",
      choices: ["I", "entered", "into", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'Enter' (a physical place) doesn't take 'into'."
    },
    {
      question: "Identify the error: 'He / lacks / of / confidence.'",
      choices: ["He", "lacks", "of", "No error"],
      correctIndex: 2,
      explanation: "Rule: Verb Use. 'Lack' as a verb takes no preposition."
    },
    {
      question: "Identify the error: 'Despite / of / the rain, / we played.'",
      choices: ["Despite", "of", "the rain,", "No error"],
      correctIndex: 1,
      explanation: "Rule: Idiom. Use 'Despite' or 'In spite of'. Remove 'of'."
    },
    {
      question: "Identify the error: 'Comprised / of / many / elements.'",
      choices: ["Comprised", "of", "many", "No error"],
      correctIndex: 1,
      explanation: "Rule: Word Choice. 'Comprise' means include. Use 'Composed of'."
    },
    {
      question: "Identify the error: 'Please / await / for / instructions.'",
      choices: ["Please", "await", "for", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'Await' means wait for. Remove 'for'."
    },
    {
      question: "Identify the error: 'I / met / up / with him.'",
      choices: ["I", "met", "up", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'Met' is sufficient. 'Up' is informal."
    },
    {
      question: "Identify the error: 'Inside / of / the / box.'",
      choices: ["Inside", "of", "the", "No error"],
      correctIndex: 1,
      explanation: "Rule: Style. Remove 'of'. Use 'Inside the box'."
    },
    {
      question: "Identify the error: 'Where / are you / going / to?'",
      choices: ["Where", "are you", "going", "to?"],
      correctIndex: 3,
      explanation: "Rule: Redundancy. 'Where' implies destination. Remove 'to'."
    },

    // 131-140: Word Choice
    {
      question: "Identify the error: 'I / accept / your / preposition.'",
      choices: ["I", "accept", "your", "preposition"],
      correctIndex: 3,
      explanation: "Rule: Word Choice. Context implies 'proposition' (offer), not 'preposition' (grammar)."
    },
    {
      question: "Identify the error: 'He / lost / his / site.'",
      choices: ["He", "lost", "his", "site"],
      correctIndex: 3,
      explanation: "Rule: Homophones. Vision is 'sight', not 'site'."
    },
    {
      question: "Identify the error: 'Please / proceed / on / the next item.'",
      choices: ["Please", "proceed", "on", "No error"],
      correctIndex: 2,
      explanation: "Rule: Idiom. Use 'proceed to' or 'proceed with'."
    },
    {
      question: "Identify the error: 'I / could / care / less.'",
      choices: ["I", "could", "care", "less"],
      correctIndex: 1,
      explanation: "Rule: Idiom. Correct phrase is 'Couldn't care less'."
    },
    {
      question: "Identify the error: 'For / all / intensive / purposes.'",
      choices: ["For", "all", "intensive", "purposes"],
      correctIndex: 2,
      explanation: "Rule: Idiom. 'Intents and purposes', not 'intensive'."
    },
    {
      question: "Identify the error: 'Nip / it / in / the butt.'",
      choices: ["Nip", "it", "in", "the butt"],
      correctIndex: 3,
      explanation: "Rule: Idiom. 'Nip it in the bud' (flower)."
    },
    {
      question: "Identify the error: 'One / in / the / same.'",
      choices: ["One", "in", "the", "same"],
      correctIndex: 1,
      explanation: "Rule: Idiom. 'One and the same'."
    },
    {
      question: "Identify the error: 'Case / and / point.'",
      choices: ["Case", "and", "point", "No error"],
      correctIndex: 1,
      explanation: "Rule: Idiom. 'Case in point'."
    },
    {
      question: "Identify the error: 'Peaked / my / interest.'",
      choices: ["Peaked", "my", "interest", "No error"],
      correctIndex: 0,
      explanation: "Rule: Homophones. 'Piqued' (stimulated), not 'Peaked'."
    },
    {
      question: "Identify the error: 'By / and / large.'",
      choices: ["By", "and", "large", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. 'By and large' is a correct idiom. No error."
    }
  ],

  super: [
    // 141-150: Advanced Parallelism
    {
      question: "Identify the error: 'It was / both / a long ceremony / and tedious.'",
      choices: ["It was", "both", "a long ceremony", "and tedious"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Noun phrase (a long ceremony) vs Adjective (tedious). Fix: 'and a tedious one'."
    },
    {
      question: "Identify the error: 'He not only / passed / the test / but also the interview.'",
      choices: ["He not only", "passed", "the test", "but also the interview"],
      correctIndex: 1,
      explanation: "Rule: Correlative Position. 'Not only' is misplaced. Fix: 'He passed not only the test but also the interview'."
    },
    {
      question: "Identify the error: 'The room / was / light, airy, / and had plenty of space.'",
      choices: ["The room", "was", "light, airy,", "and had plenty of space"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. List of adjectives. Fix: 'and spacious'."
    },
    {
      question: "Identify the error: 'I like / running, / jumping, / and to swim.'",
      choices: ["I like", "running,", "jumping,", "and to swim"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Gerunds needed. Fix: 'swimming'."
    },
    {
      question: "Identify the error: 'To think / is / existing.'",
      choices: ["To think", "is", "existing", "No error"],
      correctIndex: 2,
      explanation: "Rule: Parallelism. Infinitive subject ('To think') needs infinitive compliment ('to exist')."
    },
    {
      question: "Identify the error: 'He is / a / man of wealth / and kind.'",
      choices: ["He is", "a", "man of wealth", "and kind"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Noun phrase vs Adjective. Fix: 'and kindness'."
    },
    {
      question: "Identify the error: 'The teacher / told them / to sit / and that they should listen.'",
      choices: ["The teacher", "told them", "to sit", "and that they should listen"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Infinitive vs Clause. Fix: 'to sit and listen'."
    },
    {
      question: "Identify the error: 'Either / you / pay now / or later.'",
      choices: ["Either", "you", "pay now", "or later"],
      correctIndex: 1,
      explanation: "Rule: Correlative Position. 'Either' modifies 'you'. 'Or' modifies 'later'. Unbalanced. Fix: 'You pay either now or later'."
    },
    {
      question: "Identify the error: 'She / enjoys / reading / more than to write.'",
      choices: ["She", "enjoys", "reading", "more than to write"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Gerund vs Infinitive. Fix: 'writing'."
    },
    {
      question: "Identify the error: 'The new car / is / fast, / reliable, and it saves gas.'",
      choices: ["The new car", "is", "fast,", "reliable, and it saves gas"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Adjective list. Fix: 'and fuel-efficient'."
    },

    // 151-160: Count vs Mass Nouns
    {
      question: "Identify the error: 'I have / less / friends / than you.'",
      choices: ["I have", "less", "friends", "No error"],
      correctIndex: 1,
      explanation: "Rule: Quantifiers. Friends is countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'The / amount / of people / was huge.'",
      choices: ["The", "amount", "of people", "No error"],
      correctIndex: 1,
      explanation: "Rule: Quantifiers. People is countable. Use 'number'."
    },
    {
      question: "Identify the error: 'He / has / much / books.'",
      choices: ["He", "has", "much", "No error"],
      correctIndex: 2,
      explanation: "Rule: Quantifiers. Books is countable. Use 'many'."
    },
    {
      question: "Identify the error: 'She / gave / me / a few advice.'",
      choices: ["She", "gave", "me", "a few advice"],
      correctIndex: 3,
      explanation: "Rule: Countability. Advice is uncountable. Use 'some advice'."
    },
    {
      question: "Identify the error: 'We / need / less / calories.'",
      choices: ["We", "need", "less", "No error"],
      correctIndex: 2,
      explanation: "Rule: Quantifiers. Calories is countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'There / are / less / days in February.'",
      choices: ["There", "are", "less", "No error"],
      correctIndex: 2,
      explanation: "Rule: Quantifiers. Days is countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'He / wants / a little / fries.'",
      choices: ["He", "wants", "a little", "No error"],
      correctIndex: 2,
      explanation: "Rule: Quantifiers. Fries is countable. Use 'a few'."
    },
    {
      question: "Identify the error: 'Look at / all / the / equipments.'",
      choices: ["Look at", "all", "the", "equipments"],
      correctIndex: 3,
      explanation: "Rule: Countability. Equipment is uncountable. Use 'equipment' (no s)."
    },
    {
      question: "Identify the error: 'The / news / are / bad.'",
      choices: ["The", "news", "are", "No error"],
      correctIndex: 2,
      explanation: "Rule: Singular Mass Noun. News looks plural but is singular. Use 'is'."
    },
    {
      question: "Identify the error: 'I / have / many / homeworks.'",
      choices: ["I", "have", "many", "homeworks"],
      correctIndex: 3,
      explanation: "Rule: Countability. Homework is uncountable. Use 'much homework'."
    },

    // 161-170: Comparisons
    {
      question: "Identify the error: 'She / is / the / more smart student.'",
      choices: ["She", "is", "the", "more smart student"],
      correctIndex: 3,
      explanation: "Rule: Comparative Form. Smart is one syllable. Use 'smarter' or 'smartest'."
    },
    {
      question: "Identify the error: 'He / is / the / most perfect fit.'",
      choices: ["He", "is", "the", "most perfect fit"],
      correctIndex: 3,
      explanation: "Rule: Absolute Adjectives. 'Perfect' cannot be more or most. Remove 'most'."
    },
    {
      question: "Identify the error: 'This / is / more / better.'",
      choices: ["This", "is", "more", "No error"],
      correctIndex: 2,
      explanation: "Rule: Double Comparative. 'Better' is already comparative. Remove 'more'."
    },
    {
      question: "Identify the error: 'He / is / the / most unique person.'",
      choices: ["He", "is", "the", "most unique person"],
      correctIndex: 3,
      explanation: "Rule: Absolute Adjectives. 'Unique' means one of a kind. Remove 'most'."
    },
    {
      question: "Identify the error: 'Of the / two / boys, / he is the tallest.'",
      choices: ["Of the", "two", "boys,", "he is the tallest"],
      correctIndex: 3,
      explanation: "Rule: Comparison Logic. For TWO items, use comparative 'taller'. 'Tallest' is for 3+."
    },
    {
      question: "Identify the error: 'She / is / more / prettier than her sister.'",
      choices: ["She", "is", "more", "prettier than her sister"],
      correctIndex: 2,
      explanation: "Rule: Double Comparative. 'Prettier' is enough. Remove 'more'."
    },
    {
      question: "Identify the error: 'This / square / is / rounder than that one.'",
      choices: ["This", "square", "is", "rounder than that one"],
      correctIndex: 3,
      explanation: "Rule: Logic. A square cannot be 'rounder'. Squares are not round."
    },
    {
      question: "Identify the error: 'My / house / is / the same with yours.'",
      choices: ["My", "house", "is", "the same with yours"],
      correctIndex: 3,
      explanation: "Rule: Idiom. Use 'the same as'."
    },
    {
      question: "Identify the error: 'He / is / senior / than me.'",
      choices: ["He", "is", "senior", "than me"],
      correctIndex: 3,
      explanation: "Rule: Latin Comparatives. Senior takes 'to', not 'than'."
    },
    {
      question: "Identify the error: 'This / painting / is / superior than that one.'",
      choices: ["This", "painting", "is", "superior than that one"],
      correctIndex: 3,
      explanation: "Rule: Latin Comparatives. Superior takes 'to'."
    },

    // 171-180: Mixed Advanced
    {
      question: "Identify the error: 'No sooner / I had / reached home / than it rained.'",
      choices: ["No sooner", "I had", "reached home", "than it rained"],
      correctIndex: 1,
      explanation: "Rule: Negative Inversion. Use 'had I reached'."
    },
    {
      question: "Identify the error: 'Hardly / I had / sat down / when it rang.'",
      choices: ["Hardly", "I had", "sat down", "when it rang"],
      correctIndex: 1,
      explanation: "Rule: Negative Inversion. Use 'had I sat'."
    },
    {
      question: "Identify the error: 'It is / high time / he / leaves.'",
      choices: ["It is", "high time", "he", "leaves"],
      correctIndex: 3,
      explanation: "Rule: Subjunctive/Idiom. 'It is high time' is followed by past tense 'left'."
    },
    {
      question: "Identify the error: 'I / would rather / that you / comes early.'",
      choices: ["I", "would rather", "that you", "comes early"],
      correctIndex: 3,
      explanation: "Rule: Verb Pattern. 'Would rather you' takes past tense 'came' or base 'come' depending on style, but never 'comes'."
    },
    {
      question: "Identify the error: 'He is / one of those students / who / works hard.'",
      choices: ["He is", "one of those students", "who", "works hard"],
      correctIndex: 3,
      explanation: "Rule: Antecedent Agreement. 'Who' refers to 'students' (plural). Use 'work'."
    },
    {
      question: "Identify the error: 'This / is one of the best / book / I have read.'",
      choices: ["This", "is one of the best", "book", "I have read"],
      correctIndex: 2,
      explanation: "Rule: Plural Noun. 'One of the' must be followed by a plural noun 'books'."
    },
    {
      question: "Identify the error: 'Each of the players / have / a / unique skill.'",
      choices: ["Each of the players", "have", "a", "unique skill"],
      correctIndex: 1,
      explanation: "Rule: Subject-Verb Agreement. 'Each' is singular. Use 'has'."
    },
    {
      question: "Identify the error: 'He / insisted / to pay / the bill.'",
      choices: ["He", "insisted", "to pay", "the bill"],
      correctIndex: 2,
      explanation: "Rule: Preposition + Gerund. Use 'insisted on paying'."
    },
    {
      question: "Identify the error: 'She / denied / to steal / the money.'",
      choices: ["She", "denied", "to steal", "the money"],
      correctIndex: 2,
      explanation: "Rule: Gerund. Deny takes gerund. Use 'denied stealing'."
    },
    {
      question: "Identify the error: 'We / look forward / to / see you.'",
      choices: ["We", "look forward", "to", "see you"],
      correctIndex: 3,
      explanation: "Rule: Preposition + Gerund. 'To' is a preposition here. Use 'seeing'."
    },

    // 181-190: Subjunctive & Inversion (Super)
    {
      question: "Identify the error: 'I / wish / I / was there.'",
      choices: ["I", "wish", "I", "was there"],
      correctIndex: 3,
      explanation: "Rule: Subjunctive Mood. In formal grammar, use 'were' for hypothetical wishes. 'I wish I were there'."
    },
    {
      question: "Identify the error: 'It is / vital / that he / attends.'",
      choices: ["It is", "vital", "that he", "attends"],
      correctIndex: 3,
      explanation: "Rule: Mandative Subjunctive. Use base form after vital. 'That he attend'."
    },
    {
      question: "Identify the error: 'If / I / would have / known, I would have said.'",
      choices: ["If", "I", "would have", "known, I would have said"],
      correctIndex: 2,
      explanation: "Rule: Conditionals. Never use 'would' in the 'If' clause. Use Past Perfect: 'If I had known'."
    },
    {
      question: "Identify the error: 'Had / I / went, / I would have seen it.'",
      choices: ["Had", "I", "went,", "I would have seen it"],
      correctIndex: 2,
      explanation: "Rule: Inverted Conditional. 'Had' acts as auxiliary for Past Perfect. Needs past participle 'gone', not 'went'."
    },
    {
      question: "Identify the error: 'The doctor / recommends / that / she takes a rest.'",
      choices: ["The doctor", "recommends", "that", "she takes a rest"],
      correctIndex: 3,
      explanation: "Rule: Mandative Subjunctive. Use base form 'take' after recommend."
    },
    {
      question: "Identify the error: 'If / I / was / a bird, I would fly.'",
      choices: ["If", "I", "was", "a bird, I would fly"],
      correctIndex: 2,
      explanation: "Rule: Subjunctive. Hypothetical situation. Use 'were'."
    },
    {
      question: "Identify the error: 'I / would / of / called you.'",
      choices: ["I", "would", "of", "called you"],
      correctIndex: 2,
      explanation: "Rule: Non-standard grammar. 'Could of/Would of' is a phonetic error. It is 'Would HAVE'."
    },
    {
      question: "Identify the error: 'Scarcely / I had / finished / when he entered.'",
      choices: ["Scarcely", "I had", "finished", "No error"],
      correctIndex: 1,
      explanation: "Rule: Negative Inversion. 'Scarcely' requires inversion: 'Scarcely HAD I finished'."
    },
    {
      question: "Identify the error: 'Not / until / he leaves / I will speak.'",
      choices: ["Not", "until", "he leaves", "I will speak"],
      correctIndex: 3,
      explanation: "Rule: Negative Inversion. 'Not until' phrase at start requires main clause inversion: 'will I speak'."
    },
    {
      question: "Identify the error: 'Only / by working / hard / you can succeed.'",
      choices: ["Only", "by working", "hard", "you can succeed"],
      correctIndex: 3,
      explanation: "Rule: Inversion with 'Only'. Requires 'can you succeed'."
    },

    // 191-200: Miscellaneous Tricky Rules
    {
      question: "Identify the error: 'He / works / as / a dentist.'",
      choices: ["He", "works", "as", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct usage. 'Works as' is standard. No error."
    },
    {
      question: "Identify the error: 'He / is / regarded / as being the best.'",
      choices: ["He", "is", "regarded", "as being the best"],
      correctIndex: 3,
      explanation: "Rule: Redundancy. 'Regarded as the best' is sufficient. 'Being' is superfluous."
    },
    {
      question: "Identify the error: 'The reason / is / because / he failed.'",
      choices: ["The reason", "is", "because", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'The reason is THAT', not 'because'."
    },
    {
      question: "Identify the error: 'Just / between / you / and I.'",
      choices: ["Just", "between", "you", "and I"],
      correctIndex: 3,
      explanation: "Rule: Preposition Object. 'Between' takes objective case 'me'."
    },
    {
      question: "Identify the error: 'Try / and / come / on time.'",
      choices: ["Try", "and", "come", "No error"],
      correctIndex: 1,
      explanation: "Rule: Standard usage. 'Try TO come' is the formal standard."
    },
    {
      question: "Identify the error: 'He / is / different / than me.'",
      choices: ["He", "is", "different", "than me"],
      correctIndex: 3,
      explanation: "Rule: Idiom. Standard English prefers 'different FROM'."
    },
    {
      question: "Identify the error: 'Neither / of the men / were / happy.'",
      choices: ["Neither", "of the men", "were", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Pronoun. 'Neither' is singular. Use 'was'."
    },
    {
      question: "Identify the error: 'Everybody / have / their / own problems.'",
      choices: ["Everybody", "have", "their", "No error"],
      correctIndex: 1,
      explanation: "Rule: Indefinite Pronoun. 'Everybody' is singular. Use 'has'."
    },
    {
      question: "Identify the error: 'Who / do / you / trust?'",
      choices: ["Who", "do", "you", "trust?"],
      correctIndex: 0,
      explanation: "Rule: Case. You are asking about the object of trust. Formal English requires 'Whom'."
    },
    {
      question: "Identify the error: 'Your / going / to / lose.'",
      choices: ["Your", "going", "to", "lose"],
      correctIndex: 0,
      explanation: "Rule: Contraction. 'You are going'. Use 'You're'."
    }
  ]
};
