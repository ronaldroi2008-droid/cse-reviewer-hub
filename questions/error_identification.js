// questions/error_identification.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["error_identification"] = {

  beginner: [
    {
      question: "Identify the error: 'The cat / sleep / on / the sofa.'",
      options: ["The cat", "sleep", "on", "No error"],
      answer: "sleep",
      explanation: "Rule: Subject-Verb Agreement. The subject 'The cat' is singular (one cat). Therefore, the verb must have an 's'. It should be 'sleeps'."
    },
    {
      question: "Identify the error: 'She / do not / like / apples.'",
      options: ["She", "do not", "like", "No error"],
      answer: "do not",
      explanation: "Rule: Auxiliary Verbs. The subject 'She' is singular. We use 'does not' for singular subjects, not 'do not'."
    },
    {
      question: "Identify the error: 'My brother / have / a / new bike.'",
      options: ["My brother", "have", "a", "No error"],
      answer: "have",
      explanation: "Rule: Has vs Have. The subject 'My brother' is singular (He). He takes 'has', while I/You/We/They take 'have'."
    },
    {
      question: "Identify the error: 'They / was / happy / yesterday.'",
      options: ["They", "was", "happy", "No error"],
      answer: "was",
      explanation: "Rule: To Be (Past Tense). The subject 'They' is plural. The past plural form of 'be' is 'were', not 'was'."
    },
    {
      question: "Identify the error: 'He / run / very fast / every morning.'",
      options: ["He", "run", "very fast", "No error"],
      answer: "run",
      explanation: "Rule: Simple Present Tense. For a singular subject 'He', the verb must end in 's'. It should be 'runs'."
    },
    {
      question: "Identify the error: 'We / goes / to school / by bus.'",
      options: ["We", "goes", "to school", "No error"],
      answer: "goes",
      explanation: "Rule: Subject-Verb Agreement. The subject 'We' is plural. It requires the base form 'go', not 'goes'."
    },
    {
      question: "Identify the error: 'The students / is / reading / books.'",
      options: ["The students", "is", "reading", "No error"],
      answer: "is",
      explanation: "Rule: Plural Subjects. 'Students' is plural. The helping verb must be 'are', not 'is'."
    },
    {
      question: "Identify the error: 'You / am / my / best friend.'",
      options: ["You", "am", "my", "No error"],
      answer: "am",
      explanation: "Rule: Verb 'To Be'. The pronoun 'You' always takes 'are', never 'am'. 'Am' is only for 'I'."
    },
    {
      question: "Identify the error: 'She / washes / the dishes / every night.'",
      options: ["She", "washes", "the dishes", "No error"],
      answer: "No error",
      explanation: "Rule: Correct Sentence. The subject 'She' is singular, and the verb 'washes' agrees correctly. There is no error."
    },
    {
      question: "Identify the error: 'John / and Mary / is / here.'",
      options: ["John", "and Mary", "is", "No error"],
      answer: "is",
      explanation: "Rule: Compound Subjects. 'John and Mary' creates a plural subject (They). Therefore, the verb must be 'are'."
    },
    {
      question: "Identify the error: 'I / saw / an / dog.'",
      options: ["I", "saw", "an", "No error"],
      answer: "an",
      explanation: "Rule: Indefinite Articles. The word 'dog' starts with a consonant sound /d/. We use 'a', not 'an'."
    },
    {
      question: "Identify the error: 'She / is / a / engineer.'",
      options: ["She", "is", "a", "No error"],
      answer: "a",
      explanation: "Rule: Indefinite Articles. The word 'engineer' starts with a vowel sound /e/. We use 'an', not 'a'."
    },
    {
      question: "Identify the error: 'He wants / to be / a actor / someday.'",
      options: ["He wants", "to be", "a actor", "No error"],
      answer: "a actor",
      explanation: "Rule: Indefinite Articles. 'Actor' starts with a vowel sound. It should be 'an actor'."
    },
    {
      question: "Identify the error: 'The sun / rises in / a / east.'",
      options: ["The sun", "rises in", "a", "No error"],
      answer: "a",
      explanation: "Rule: Definite Articles with Directions. We say 'the east', not 'a east', because directions are unique specific points."
    },
    {
      question: "Identify the error: 'Please / close / a / door behind you.'",
      options: ["Please", "close", "a", "No error"],
      answer: "a",
      explanation: "Rule: Specificity. When referring to a specific door that both speakers know about (the one behind you), use 'the'."
    },
    {
      question: "Identify the error: 'I / have / an / uniform.'",
      options: ["I", "have", "an", "No error"],
      answer: "an",
      explanation: "Rule: Initial Sounds. 'Uniform' starts with a 'Y' sound (/juː/), which is a consonant sound. Use 'a uniform'."
    },
    {
      question: "Identify the error: 'She / eats / an / apple.'",
      options: ["She", "eats", "an", "No error"],
      answer: "No error",
      explanation: "Rule: Correct Sentence. 'Apple' starts with a vowel sound, so 'an' is correct. No error."
    },
    {
      question: "Identify the error: 'He / is / a / honest man.'",
      options: ["He", "is", "a", "No error"],
      answer: "a",
      explanation: "Rule: Silent Letters. 'Honest' starts with a silent 'H', making an 'O' vowel sound. Use 'an honest man'."
    },
    {
      question: "Identify the error: 'We / visited / the / Manila.'",
      options: ["We", "visited", "the", "No error"],
      answer: "the",
      explanation: "Rule: Proper Nouns (Cities). Cities generally do not take 'the'. We say 'visited Manila'."
    },
    {
      question: "Identify the error: 'This / is / the / best cake.'",
      options: ["This", "is", "the", "No error"],
      answer: "No error",
      explanation: "Rule: Correct Sentence. Superlatives ('best') require 'the'. No error."
    },
    {
      question: "Identify the error: 'Me / and my friend / went / home.'",
      options: ["Me", "and my friend", "went", "No error"],
      answer: "Me",
      explanation: "Rule: Subject Pronouns. 'Me' is an object pronoun and cannot be the subject. Use 'My friend and I' or 'I'."
    },
    {
      question: "Identify the error: 'Him / is / a / good student.'",
      options: ["Him", "is", "a", "No error"],
      answer: "Him",
      explanation: "Rule: Subject Pronouns. 'Him' is an object pronoun. The subject form is 'He'."
    },
    {
      question: "Identify the error: 'The teacher / gave / we / homework.'",
      options: ["The teacher", "gave", "we", "No error"],
      answer: "we",
      explanation: "Rule: Object Pronouns. The pronoun is receiving the giving action. Use 'us', not 'we'."
    },
    {
      question: "Identify the error: 'This book / belongs / to / my.'",
      options: ["This book", "belongs", "to", "my"],
      answer: "my",
      explanation: "Rule: Possessive Pronouns vs Adjectives. 'My' is an adjective that needs a noun (my book). At the end of a sentence, use the pronoun 'mine' or object 'me'."
    },
    {
      question: "Identify the error: 'Us / are / going / to the park.'",
      options: ["Us", "are", "going", "No error"],
      answer: "Us",
      explanation: "Rule: Subject Pronouns. 'Us' is an object. The subject must be 'We'."
    },
    {
      question: "Identify the error: 'Between / you / and / I.'",
      options: ["Between", "you", "and I", "No error"],
      answer: "and I",
      explanation: "Rule: Prepositions. Prepositions (like 'between') are always followed by object pronouns. Use 'me', not 'I'."
    },
    {
      question: "Identify the error: 'Them / boys / are / noisy.'",
      options: ["Them", "boys", "are", "No error"],
      answer: "Them",
      explanation: "Rule: Demonstrative Adjectives. Do not use the object pronoun 'Them' to modify a noun. Use 'Those boys' or just 'The boys'."
    },
    {
      question: "Identify the error: 'My mom / cooked / for / he.'",
      options: ["My mom", "cooked", "for", "he"],
      answer: "he",
      explanation: "Rule: Object of Preposition. After 'for', use the object pronoun 'him'."
    },
    {
      question: "Identify the error: 'Is / that / bag / yours?'",
      options: ["Is", "that", "bag", "No error"],
      answer: "No error",
      explanation: "Rule: Correct Sentence. 'Yours' is the correct possessive pronoun. No error."
    },
    {
      question: "Identify the error: 'Her / likes / to / dance.'",
      options: ["Her", "likes", "to", "No error"],
      answer: "Her",
      explanation: "Rule: Subject Pronouns. 'Her' cannot be a subject. Use 'She'."
    },
    {
      question: "Identify the error: 'I / woke up / on / 7:00 AM.'",
      options: ["I", "woke up", "on", "No error"],
      answer: "on",
      explanation: "Rule: Prepositions of Time. For specific clock times, use 'at', not 'on'."
    },
    {
      question: "Identify the error: 'She / was / born / in Monday.'",
      options: ["She", "was", "born", "in"],
      answer: "in",
      explanation: "Rule: Prepositions of Time. For days of the week, use 'on', not 'in'."
    },
    {
      question: "Identify the error: 'The cat / is / at / the table.'",
      options: ["The cat", "is", "at", "No error"],
      answer: "at",
      explanation: "Rule: Usage. While 'at' is possible if seated like a human, usually objects/animals are 'on' (top) or 'under' the table."
    },
    {
      question: "Identify the error: 'I / live / on / Cebu City.'",
      options: ["I", "live", "on", "No error"],
      answer: "on",
      explanation: "Rule: Prepositions of Place. For cities, countries, and provinces, use 'in'."
    },
    {
      question: "Identify the error: 'He / arrived / at / January.'",
      options: ["He", "arrived", "at", "No error"],
      answer: "at",
      explanation: "Rule: Prepositions of Time. For months, years, and long periods, use 'in'."
    },
    {
      question: "Identify the error: 'My birthday / is / in / July 5th.'",
      options: ["My birthday", "is", "in", "No error"],
      answer: "in",
      explanation: "Rule: Prepositions of Time. When the specific date (day) is given, use 'on'. (e.g., 'in July' but 'on July 5th')."
    },
    {
      question: "Identify the error: 'The picture / is / in / the wall.'",
      options: ["The picture", "is", "in", "No error"],
      answer: "in",
      explanation: "Rule: Surfaces. For vertical or horizontal surfaces, use 'on'."
    },
    {
      question: "Identify the error: 'See / you / in / Friday.'",
      options: ["See", "you", "in", "No error"],
      answer: "in",
      explanation: "Rule: Days. Use 'on' for days of the week."
    },
    {
      question: "Identify the error: 'I am / good / in / Math.'",
      options: ["I am", "good", "in", "No error"],
      answer: "in",
      explanation: "Rule: Collocations. The correct idiom for ability is 'good at', not 'good in'."
    },
    {
      question: "Identify the error: 'He is / afraid / from / dogs.'",
      options: ["He is", "afraid", "from", "No error"],
      answer: "from",
      explanation: "Rule: Collocations. The adjective 'afraid' is always followed by 'of'."
    },
    {
      question: "Identify the error: 'She / sings / very / good.'",
      options: ["She", "sings", "very", "good"],
      answer: "good",
      explanation: "Rule: Adverbs. 'Good' is an adjective. To modify the verb 'sings', use the adverb 'well'."
    },
    {
      question: "Identify the error: 'He / drives / very / careful.'",
      options: ["He", "drives", "very", "careful"],
      answer: "careful",
      explanation: "Rule: Adverbs. To modify the verb 'drives', use the adverb 'carefully'."
    },
    {
      question: "Identify the error: 'The soup / tastes / badly / today.'",
      options: ["The soup", "tastes", "badly", "No error"],
      answer: "badly",
      explanation: "Rule: Linking Verbs. 'Tastes' is a linking verb describing the noun 'soup'. Use the adjective 'bad', not the adverb 'badly'."
    },
    {
      question: "Identify the error: 'She / speaks / soft / to the baby.'",
      options: ["She", "speaks", "soft", "No error"],
      answer: "soft",
      explanation: "Rule: Adverbs. To modify 'speaks', use the adverb 'softly'."
    },
    {
      question: "Identify the error: 'He / acts / polite / with guests.'",
      options: ["He", "acts", "polite", "No error"],
      answer: "polite",
      explanation: "Rule: Adverbs. He acts in a certain way. Use 'politely'."
    },
    {
      question: "Identify the error: 'This / is / a / real good movie.'",
      options: ["This", "is", "a", "real good movie"],
      answer: "real good movie",
      explanation: "Rule: Adverbs of Degree. 'Real' is an adjective. To modify the adjective 'good', use the adverb 'really'."
    },
    {
      question: "Identify the error: 'She / looks / beautiful / tonight.'",
      options: ["She", "looks", "beautiful", "No error"],
      answer: "No error",
      explanation: "Rule: Correct Sentence. 'Looks' is a linking verb here, so the adjective 'beautiful' is correct."
    },
    {
      question: "Identify the error: 'I / can / run / quick.'",
      options: ["I", "can", "run", "quick"],
      answer: "quick",
      explanation: "Rule: Adverbs. Modify the action 'run' with the adverb 'quickly'."
    },
    {
      question: "Identify the error: 'He / is / a / slowly runner.'",
      options: ["He", "is", "a", "slowly runner"],
      answer: "slowly runner",
      explanation: "Rule: Adjectives. To modify the noun 'runner', use the adjective 'slow', not the adverb 'slowly'."
    },
    {
      question: "Identify the error: 'They / worked / hardly / all day.'",
      options: ["They", "worked", "hardly", "No error"],
      answer: "hardly",
      explanation: "Rule: Word Choice. 'Hardly' means 'almost not'. To mean 'with effort', use 'hard'."
    }
  ],

  intermediate: [
    {
      question: "Identify the error: 'The box / of chocolates / are / missing.'",
      options: ["The box", "of chocolates", "are", "No error"],
      answer: "are",
      explanation: "Rule: Intervening Phrases. The subject is 'box' (singular), not 'chocolates'. The verb must be 'is'."
    },
    {
      question: "Identify the error: 'The teacher, / along with students, / are / going.'",
      options: ["The teacher,", "along with students,", "are", "No error"],
      answer: "are",
      explanation: "Rule: Additive Phrases. Phrases like 'along with' do NOT make the subject plural. The subject is 'teacher' (singular), so use 'is'."
    },
    {
      question: "Identify the error: 'One / of the boys / have / a bike.'",
      options: ["One", "of the boys", "have", "No error"],
      answer: "have",
      explanation: "Rule: 'One of'. The subject is 'One' (singular). Use 'has'."
    },
    {
      question: "Identify the error: 'The list / of names / is / long.'",
      options: ["The list", "of names", "is", "No error"],
      answer: "No error",
      explanation: "Rule: Correct Sentence. The subject 'list' is singular, and 'is' is singular. No error."
    },
    {
      question: "Identify the error: 'Neither / of the answers / are / correct.'",
      options: ["Neither", "of the answers", "are", "No error"],
      answer: "are",
      explanation: "Rule: Indefinite Pronouns. 'Neither' is grammatically singular in formal English. Use 'is'."
    },
    {
      question: "Identify the error: 'The manager, / as well as clerks, / were / late.'",
      options: ["The manager,", "as well as clerks,", "were", "No error"],
      answer: "were",
      explanation: "Rule: Additive Phrases. 'As well as' does not change the singular subject 'manager'. Use 'was'."
    },
    {
      question: "Identify the error: 'Each / of the girls / sing / beautifully.'",
      options: ["Each", "of the girls", "sing", "No error"],
      answer: "sing",
      explanation: "Rule: Indefinite Pronouns. 'Each' is singular. The verb must be 'sings'."
    },
    {
      question: "Identify the error: 'The decision / of the judges / stand / final.'",
      options: ["The decision", "of the judges", "stand", "No error"],
      answer: "stand",
      explanation: "Rule: Subject-Verb Agreement. Subject 'decision' is singular. Use 'stands'."
    },
    {
      question: "Identify the error: 'A bouquet / of yellow roses / lend / color.'",
      options: ["A bouquet", "of yellow roses", "lend", "No error"],
      answer: "lend",
      explanation: "Rule: Intervening Phrase. Subject 'bouquet' is singular. Use 'lends'."
    },
    {
      question: "Identify the error: 'The noise / of cars / annoy / me.'",
      options: ["The noise", "of cars", "annoy", "No error"],
      answer: "annoy",
      explanation: "Rule: Subject-Verb Agreement. Subject 'noise' is singular. Use 'annoys'."
    },
    {
      question: "Identify the error: 'She / lived / here / since 2010.'",
      options: ["She", "lived", "here", "since 2010"],
      answer: "lived",
      explanation: "Rule: Present Perfect. The action continues to the present (indicated by 'since'). Use 'has lived'."
    },
    {
      question: "Identify the error: 'I / have seen / him / yesterday.'",
      options: ["I", "have seen", "him", "yesterday"],
      answer: "have seen",
      explanation: "Rule: Past Time Markers. 'Yesterday' specifies a finished time. Use simple past 'saw', not present perfect."
    },
    {
      question: "Identify the error: 'When we arrived, / the train / already / left.'",
      options: ["When we arrived,", "the train", "already", "left"],
      answer: "left",
      explanation: "Rule: Past Perfect. The train leaving happened BEFORE we arrived. Use 'had left'."
    },
    {
      question: "Identify the error: 'I / am knowing / him / for years.'",
      options: ["I", "am knowing", "him", "No error"],
      answer: "am knowing",
      explanation: "Rule: Stative Verbs. 'Know' is a stative verb and cannot be continuous. Use 'have known'."
    },
    {
      question: "Identify the error: 'She / has / wrote / a letter.'",
      options: ["She", "has", "wrote", "No error"],
      answer: "wrote",
      explanation: "Rule: Past Participle. With 'has', use the participle 'written', not the simple past 'wrote'."
    },
    {
      question: "Identify the error: 'I / didn't / went / to work.'",
      options: ["I", "didn't", "went", "No error"],
      answer: "went",
      explanation: "Rule: Auxiliary 'Did'. After 'did/didn't', use the base form of the verb. Use 'go'."
    },
    {
      question: "Identify the error: 'By next year, / I / finish / my degree.'",
      options: ["By next year,", "I", "finish", "No error"],
      answer: "finish",
      explanation: "Rule: Future Perfect. 'By next year' implies an action completed in the future. Use 'will have finished'."
    },
    {
      question: "Identify the error: 'He / has / began / the project.'",
      options: ["He", "has", "began", "No error"],
      answer: "began",
      explanation: "Rule: Irregular Verbs. Base: Begin, Past: Began, Participle: Begun. With 'has', use 'begun'."
    },
    {
      question: "Identify the error: 'If I / know / you were coming, / I would have stayed.'",
      options: ["If I", "know", "you were coming,", "I would have stayed"],
      answer: "know",
      explanation: "Rule: Third Conditional. The result is 'would have stayed', so the condition must be Past Perfect: 'had known'."
    },
    {
      question: "Identify the error: 'She / is / sleeping / for two hours.'",
      options: ["She", "is", "sleeping", "No error"],
      answer: "is",
      explanation: "Rule: Present Perfect Continuous. An action starting in the past and continuing for a duration. Use 'has been sleeping'."
    },
    {
      question: "Identify the error: 'I / don't have / no / money.'",
      options: ["I", "don't have", "no", "No error"],
      answer: "no",
      explanation: "Rule: Double Negative. 'Don't' is already negative. Use 'any' instead of 'no'."
    },
    {
      question: "Identify the error: 'He / can't / hardly / see.'",
      options: ["He", "can't", "hardly", "No error"],
      answer: "can't",
      explanation: "Rule: Double Negative. 'Hardly' is considered negative. Use 'can hardly see'."
    },
    {
      question: "Identify the error: 'Please / repeat / that / again.'",
      options: ["Please", "repeat", "that", "again"],
      answer: "again",
      explanation: "Rule: Redundancy. 'Repeat' means to say again. 'Again' is unnecessary."
    },
    {
      question: "Identify the error: 'The / reason is / because / he was late.'",
      options: ["The", "reason is", "because", "No error"],
      answer: "because",
      explanation: "Rule: Redundancy. 'The reason is' should be followed by 'that', not 'because'."
    },
    {
      question: "Identify the error: 'She / returned / back / home.'",
      options: ["She", "returned", "back", "No error"],
      answer: "back",
      explanation: "Rule: Redundancy. 'Return' means go back. Delete 'back'."
    },
    {
      question: "Identify the error: 'He / hasn't / never / been there.'",
      options: ["He", "hasn't", "never", "No error"],
      answer: "never",
      explanation: "Rule: Double Negative. Use 'ever' instead of 'never' with 'hasn't'."
    },
    {
      question: "Identify the error: 'Advance / forward / to the / next level.'",
      options: ["Advance", "forward", "to the", "No error"],
      answer: "forward",
      explanation: "Rule: Redundancy. 'Advance' means move forward. Delete 'forward'."
    },
    {
      question: "Identify the error: 'The / ATM machine / is / broken.'",
      options: ["The", "ATM machine", "is", "No error"],
      answer: "ATM machine",
      explanation: "Rule: RAS Syndrome (Redundant Acronym Syndrome). The 'M' in ATM stands for Machine. Just say 'The ATM is broken'."
    },
    {
      question: "Identify the error: 'I / could / care / less.'",
      options: ["I", "could", "care", "less"],
      answer: "could",
      explanation: "Rule: Idiom Logic. If you 'could' care less, you care a little. The correct phrase for zero care is 'couldn't care less'."
    },
    {
      question: "Identify the error: 'Irregardless / of the weather, / we / go.'",
      options: ["Irregardless", "of the weather,", "we", "go"],
      answer: "Irregardless",
      explanation: "Rule: Non-standard word. 'Irregardless' is a double negative. Use 'Regardless'."
    },
    {
      question: "Identify the error: 'She likes / swimming, / hiking, / and to run.'",
      options: ["She likes", "swimming,", "hiking,", "and to run"],
      answer: "and to run",
      explanation: "Rule: Parallelism. Items in a list must match. Gerunds are used (swimming, hiking), so the last must be 'running'."
    },
    {
      question: "Identify the error: 'The movie / was / long, / boring, and loud noise.'",
      options: ["The movie", "was", "long,", "boring, and loud noise"],
      answer: "boring, and loud noise",
      explanation: "Rule: Parallelism. The list consists of adjectives (long, boring). The last item should be an adjective: 'loud'."
    },
    {
      question: "Identify the error: 'He wants / to travel / and / working abroad.'",
      options: ["He wants", "to travel", "and", "working abroad"],
      answer: "working abroad",
      explanation: "Rule: Parallelism. Match infinitives. 'To travel' and 'to work' (or just 'work')."
    },
    {
      question: "Identify the error: 'She is / smart, / beautiful, / and a doctor.'",
      options: ["She is", "smart,", "beautiful,", "and a doctor"],
      answer: "and a doctor",
      explanation: "Rule: Parallelism. Adjective, Adjective, Adjective. 'and professional' would fit better."
    },
    {
      question: "Identify the error: 'You can / go by / bus or / take a train.'",
      options: ["You can", "go by", "bus or", "take a train"],
      answer: "take a train",
      explanation: "Rule: Parallelism. 'By bus' matches 'by train'. Better: 'go by bus or by train'."
    },
    {
      question: "Identify the error: 'To / learn is / to / growing.'",
      options: ["To", "learn is", "to", "growing"],
      answer: "growing",
      explanation: "Rule: Parallelism. Infinitive 'To learn' matches infinitive 'to grow'."
    },
    {
      question: "Identify the error: 'He spoke / clearly, / eloquently, / and with confidence.'",
      options: ["He spoke", "clearly,", "eloquently,", "and with confidence"],
      answer: "and with confidence",
      explanation: "Rule: Parallelism. Adverb, Adverb, Adverb. Use 'confidently'."
    },
    {
      question: "Identify the error: 'I prefer / reading / to / write.'",
      options: ["I prefer", "reading", "to", "write"],
      answer: "write",
      explanation: "Rule: Verb Patterns. 'Prefer X to Y'. 'Reading' is a gerund, so use 'writing'."
    },
    {
      question: "Identify the error: 'My goals are / to save money, / buying a house, / and retiring.'",
      options: ["My goals are", "to save money,", "buying a house,", "No error"],
      answer: "buying a house,",
      explanation: "Rule: Parallelism. The first item is an infinitive 'to save'. The rest must match. Use 'to buy'."
    },
    {
      question: "Identify the error: 'Not only / is he rich, / but also / famous.'",
      options: ["Not only", "is he rich,", "but also", "famous"],
      answer: "is he rich,",
      explanation: "Rule: Correlative Conjunctions. Structure is unbalanced. 'Not only IS HE rich' (inverted) vs 'but HE IS also famous'. Fix: 'He is not only rich but also famous'."
    },
    {
      question: "Identify the error: 'Walking / down the street, / the trees / looked beautiful.'",
      options: ["Walking", "down the street,", "the trees", "looked beautiful"],
      answer: "the trees",
      explanation: "Rule: Dangling Modifier. 'Walking' implies a person, but the subject 'the trees' cannot walk. The subject 'I' is missing."
    },
    {
      question: "Identify the error: 'She served / sandwiches to the kids / on / paper plates.'",
      options: ["She served", "sandwiches to the kids", "on", "paper plates"],
      answer: "sandwiches to the kids",
      explanation: "Rule: Misplaced Modifier. 'On paper plates' modifies the sandwiches, not the kids. Order: 'She served sandwiches on paper plates to the kids'."
    },
    {
      question: "Identify the error: 'Covered / in cheese, / I ate / the pizza.'",
      options: ["Covered", "in cheese,", "I ate", "the pizza"],
      answer: "I ate",
      explanation: "Rule: Dangling Modifier. This implies 'I' was covered in cheese. Correct: 'I ate the pizza covered in cheese'."
    },
    {
      question: "Identify the error: 'To get / a good grade, / studying / is necessary.'",
      options: ["To get", "a good grade,", "studying", "is necessary"],
      answer: "studying",
      explanation: "Rule: Dangling Infinitive. 'To get a grade' is a goal for a person. 'Studying' is the subject. It needs a person: 'To get a good grade, YOU must study'."
    },
    {
      question: "Identify the error: 'Barking / loudly, / John / shouted at the dog.'",
      options: ["Barking", "loudly,", "John", "shouted at the dog"],
      answer: "John",
      explanation: "Rule: Misplaced Modifier. Implies John was barking. Correct: 'John shouted at the loudly barking dog'."
    },
    {
      question: "Identify the error: 'He / nearly drove / for / six hours.'",
      options: ["He", "nearly drove", "for", "six hours"],
      answer: "nearly drove",
      explanation: "Rule: Misplaced Limiting Modifier. 'Nearly drove' implies he didn't drive at all. Correct: 'He drove for nearly six hours'."
    },
    {
      question: "Identify the error: 'I / only have / five / dollars.'",
      options: ["I", "only have", "five", "dollars"],
      answer: "only have",
      explanation: "Rule: Placement of Only. Precise usage: 'I have only five dollars'."
    },
    {
      question: "Identify the error: 'After / rotting / in the cellar, / mom threw the apples.'",
      options: ["After", "rotting", "in the cellar,", "mom threw the apples"],
      answer: "mom threw the apples",
      explanation: "Rule: Dangling Modifier. Implies Mom was rotting. Correct: 'Mom threw out the apples rotting in the cellar'."
    },
    {
      question: "Identify the error: 'The woman / walked the dog / in / a bikini.'",
      options: ["The woman", "walked the dog", "in", "a bikini"],
      answer: "walked the dog",
      explanation: "Rule: Ambiguity/Misplaced Modifier. Did the dog have the bikini? Place 'In a bikini' closer to 'The woman'."
    },
    {
      question: "Identify the error: 'He / bought a horse / for his sister / called Prince.'",
      options: ["He", "bought a horse", "for his sister", "called Prince"],
      answer: "for his sister",
      explanation: "Rule: Misplaced Modifier. Implies the sister is called Prince. Correct: 'He bought a horse called Prince for his sister'."
    }
  ],

  advanced: [
    {
      question: "Identify the error: 'Never / I have / seen / such a thing.'",
      options: ["Never", "I have", "seen", "No error"],
      answer: "I have",
      explanation: "Rule: Negative Inversion. When starting with 'Never', invert the subject and auxiliary: 'Never have I seen'."
    },
    {
      question: "Identify the error: 'I suggest / that he / stops / smoking.'",
      options: ["I suggest", "that he", "stops", "No error"],
      answer: "stops",
      explanation: "Rule: Mandative Subjunctive. After 'suggest', use the base form. 'That he stop smoking'."
    },
    {
      question: "Identify the error: 'If I / was / you, / I would accept.'",
      options: ["If I", "was", "you,", "I would accept"],
      answer: "was",
      explanation: "Rule: Hypothetical Subjunctive. In 'If' clauses representing unreal situations, use 'were' for all subjects. 'If I were you'."
    },
    {
      question: "Identify the error: 'Rarely / we do / go / to the cinema.'",
      options: ["Rarely", "we do", "go", "No error"],
      answer: "we do",
      explanation: "Rule: Inversion. Negative adverb 'Rarely' requires inversion: 'Rarely do we go'."
    },
    {
      question: "Identify the error: 'It is / important that / she / is on time.'",
      options: ["It is", "important that", "she", "is on time"],
      answer: "is on time",
      explanation: "Rule: Subjunctive. After adjectives of necessity, use base form. 'That she be on time'."
    },
    {
      question: "Identify the error: 'Not only / he is / rich, / but also famous.'",
      options: ["Not only", "he is", "rich,", "No error"],
      answer: "he is",
      explanation: "Rule: Inversion. After 'Not only', invert: 'is he'."
    },
    {
      question: "Identify the error: 'I wish / I / know / the answer.'",
      options: ["I wish", "I", "know", "No error"],
      answer: "know",
      explanation: "Rule: Wish Structures. Wishes about the present use the past tense. 'I wish I knew'."
    },
    {
      question: "Identify the error: 'Had / I / knew, / I would have come.'",
      options: ["Had", "I", "knew,", "No error"],
      answer: "knew,",
      explanation: "Rule: Past Perfect. 'Had' requires the past participle 'known', not 'knew'."
    },
    {
      question: "Identify the error: 'Little / he knew / about / the surprise.'",
      options: ["Little", "he knew", "about", "No error"],
      answer: "he knew",
      explanation: "Rule: Inversion. 'Little' acts as a negative adverb here. 'Little did he know'."
    },
    {
      question: "Identify the error: 'God / blesses / the / Philippines.'",
      options: ["God", "blesses", "the", "No error"],
      answer: "blesses",
      explanation: "Rule: Formulaic Subjunctive. In prayers/wishes, use the base form: 'God bless the Philippines'."
    },
    {
      question: "Identify the error: 'Who / did you / give / the book to?'",
      options: ["Who", "did you", "give", "No error"],
      answer: "Who",
      explanation: "Rule: Formal Case. The pronoun is the object of 'to'. Formal English requires 'Whom'."
    },
    {
      question: "Identify the error: 'He is / the man / whom / I think stole it.'",
      options: ["He is", "the man", "whom", "No error"],
      answer: "whom",
      explanation: "Rule: Subject of Clause. Ignore 'I think'. The clause is 'who stole it' (Subject). Use 'who'."
    },
    {
      question: "Identify the error: 'Give it / to / whomever / wants it.'",
      options: ["Give it", "to", "whomever", "No error"],
      answer: "whomever",
      explanation: "Rule: Subject of Clause. The pronoun is the subject of 'wants'. Use 'whoever'."
    },
    {
      question: "Identify the error: 'Us / students / need / more time.'",
      options: ["Us", "students", "need", "No error"],
      answer: "Us",
      explanation: "Rule: Appositives. The pronoun is the subject. Use 'We students'."
    },
    {
      question: "Identify the error: 'She is / taller / than / me.'",
      options: ["She is", "taller", "than", "me"],
      answer: "me",
      explanation: "Rule: Comparative Ellipsis. Formal grammar completes the sentence 'than I (am)'. Use 'I'."
    },
    {
      question: "Identify the error: 'It was / him / who / called.'",
      options: ["It was", "him", "who", "No error"],
      answer: "him",
      explanation: "Rule: Predicate Nominative. After 'to be', usage requires the subject pronoun. 'It was he'."
    },
    {
      question: "Identify the error: 'Everyone / has / their / own opinion.'",
      options: ["Everyone", "has", "their", "No error"],
      answer: "their",
      explanation: "Rule: Singular Indefinite. Formal exams often require 'his or her' for 'Everyone'."
    },
    {
      question: "Identify the error: 'Between / you / and / I.'",
      options: ["Between", "you", "and", "I"],
      answer: "I",
      explanation: "Rule: Object of Preposition. Use 'me'."
    },
    {
      question: "Identify the error: 'The jury / gave / their / verdict.'",
      options: ["The jury", "gave", "their", "No error"],
      answer: "their",
      explanation: "Rule: Collective Nouns. If the jury acts as one unit, use 'its'."
    },
    {
      question: "Identify the error: 'Myself / will / handle / the project.'",
      options: ["Myself", "will", "handle", "No error"],
      answer: "Myself",
      explanation: "Rule: Reflexive Pronouns. Cannot be a subject. Use 'I'."
    },
    {
      question: "Identify the error: 'We / discussed / about / the problem.'",
      options: ["We", "discussed", "about", "No error"],
      answer: "about",
      explanation: "Rule: Transitive Verb. 'Discuss' means 'talk about'. Adding 'about' is redundant. Delete it."
    },
    {
      question: "Identify the error: 'She / married / with / a doctor.'",
      options: ["She", "married", "with", "No error"],
      answer: "with",
      explanation: "Rule: Preposition Error. Use 'married a doctor' or 'is married to a doctor'."
    },
    {
      question: "Identify the error: 'I / entered / into / the room.'",
      options: ["I", "entered", "into", "No error"],
      answer: "into",
      explanation: "Rule: Transitive Verb. 'Enter' (a place) does not take 'into'. Just 'entered the room'."
    },
    {
      question: "Identify the error: 'He / lacks / of / confidence.'",
      options: ["He", "lacks", "of", "No error"],
      answer: "of",
      explanation: "Rule: Verb vs Noun. 'Lack' (verb) takes no preposition. Here it is a verb. Delete 'of'."
    },
    {
      question: "Identify the error: 'Despite / of / the rain, / we played.'",
      options: ["Despite", "of", "the rain,", "No error"],
      answer: "of",
      explanation: "Rule: Preposition Error. Use 'Despite' alone OR 'In spite of'. Never 'Despite of'."
    },
    {
      question: "Identify the error: 'Comprised / of / many / elements.'",
      options: ["Comprised", "of", "many", "No error"],
      answer: "Comprised",
      explanation: "Rule: Word Choice. 'Comprise' means 'include'. Do not use 'of'. Alternatively, use 'Composed of'."
    },
    {
      question: "Identify the error: 'Please / await / for / further instructions.'",
      options: ["Please", "await", "for", "No error"],
      answer: "for",
      explanation: "Rule: Transitive Verb. 'Await' means 'wait for'. Adding 'for' is redundant."
    },
    {
      question: "Identify the error: 'I / met / up / with him.'",
      options: ["I", "met", "up", "No error"],
      answer: "up",
      explanation: "Rule: Redundancy. 'Met him' is sufficient. 'Met up with' is informal."
    },
    {
      question: "Identify the error: 'Inside / of / the / box.'",
      options: ["Inside", "of", "the", "No error"],
      answer: "of",
      explanation: "Rule: Preposition Style. 'Inside the box' is preferred. Drop 'of'."
    },
    {
      question: "Identify the error: 'Where / are you / going / to?'",
      options: ["Where", "are you", "going", "to?"],
      answer: "to?",
      explanation: "Rule: Redundancy. 'Where are you going?' implies destination. 'To' is unnecessary."
    },
    {
      question: "Identify the error: 'I / accept / your / preposition.'",
      options: ["I", "accept", "your", "preposition"],
      answer: "preposition",
      explanation: "Rule: Malapropism. Context suggests 'proposition' (offer), not 'preposition' (grammar word)."
    },
    {
      question: "Identify the error: 'He / lost / his / site.'",
      options: ["He", "lost", "his", "site"],
      answer: "site",
      explanation: "Rule: Homophones. He lost his vision, which is 'sight', not 'site' (location)."
    },
    {
      question: "Identify the error: 'Please / proceed / with / the next item.'",
      options: ["Please", "proceed", "with", "No error"],
      answer: "with",
      explanation: "Rule: Preposition. 'Proceed to' implies moving to a new point. 'Proceed with' means continue doing."
    },
    {
      question: "Identify the error: 'I / could / care / less.'",
      options: ["I", "could", "care", "less"],
      answer: "could",
      explanation: "Rule: Idiom. 'Could care less' implies you care a little. The correct phrase is 'Couldn't care less'."
    },
    {
      question: "Identify the error: 'For / all / intensive / purposes.'",
      options: ["For", "all", "intensive", "purposes"],
      answer: "intensive",
      explanation: "Rule: Malapropism. The idiom is 'For all intents and purposes', not 'intensive'."
    },
    {
      question: "Identify the error: 'Nip / it / in / the butt.'",
      options: ["Nip", "it", "in", "the butt"],
      answer: "the butt",
      explanation: "Rule: Idiom. The phrase refers to a flower bud. It is 'Nip it in the bud'."
    },
    {
      question: "Identify the error: 'One / in / the / same.'",
      options: ["One", "in", "the", "same"],
      answer: "in",
      explanation: "Rule: Idiom. The phrase is 'One and the same'."
    },
    {
      question: "Identify the error: 'Case / and / point.'",
      options: ["Case", "and", "point", "No error"],
      answer: "and",
      explanation: "Rule: Idiom. The correct phrase is 'Case in point'."
    },
    {
      question: "Identify the error: 'Peaked / my / interest.'",
      options: ["Peaked", "my", "interest", "No error"],
      answer: "Peaked",
      explanation: "Rule: Homophones. 'Piqued' means to stimulate. 'Peaked' means reached a high point."
    },
    {
      question: "Identify the error: 'By / and / large.'",
      options: ["By", "and", "large", "No error"],
      answer: "No error",
      explanation: "Rule: Correct Idiom. 'By and large' means on the whole. No error."
    },
    {
      question: "Identify the error: 'It was / both / a long ceremony / and tedious.'",
      options: ["It was", "both", "a long ceremony", "and tedious"],
      answer: "and tedious",
      explanation: "Rule: Parallelism. 'Both' is followed by Noun Phrase. 'And' must follow with Noun Phrase. 'Tedious' is Adjective."
    },
    {
      question: "Identify the error: 'He not only / passed / the test / but also the interview.'",
      options: ["He not only", "passed", "the test", "but also the interview"],
      answer: "passed",
      explanation: "Rule: Correlative Position. 'Not only' precedes verb 'passed', so 'but also' must precede a verb."
    },
    {
      question: "Identify the error: 'The room / was / light, airy, / and had plenty of space.'",
      options: ["The room", "was", "light, airy,", "and had plenty of space"],
      answer: "and had plenty of space",
      explanation: "Rule: Parallel Lists. Adjective, Adjective, and [Clause]. Fix: 'and spacious'."
    },
    {
      question: "Identify the error: 'I like / running, / jumping, / and to swim.'",
      options: ["I like", "running,", "jumping,", "and to swim"],
      answer: "and to swim",
      explanation: "Rule: Parallel Forms. Gerund, Gerund, Infinitive. Fix: 'swimming'."
    },
    {
      question: "Identify the error: 'To think / is / existing.'",
      options: ["To think", "is", "existing", "No error"],
      answer: "existing",
      explanation: "Rule: Parallelism. Infinitive subject ('To think') needs infinitive compliment ('to exist')."
    },
    {
      question: "Identify the error: 'He is / a / man of wealth / and kind.'",
      options: ["He is", "a", "man of wealth", "and kind"],
      answer: "and kind",
      explanation: "Rule: Parallelism. Noun phrase vs Adjective. Fix: 'and kindness'."
    },
    {
      question: "Identify the error: 'The teacher / told them / to sit / and that they should listen.'",
      options: ["The teacher", "told them", "to sit", "and that they should listen"],
      answer: "and that they should listen",
      explanation: "Rule: Parallelism. Infinitive vs Clause. Fix: 'to sit and listen'."
    },
    {
      question: "Identify the error: 'Either / you / pay now / or later.'",
      options: ["Either", "you", "pay now", "or later"],
      answer: "you",
      explanation: "Rule: Correlative Placement. 'Either' comes before 'you' (Pronoun). 'Or' before 'later' (Adverb). Fix: 'You pay either now or later'."
    },
    {
      question: "Identify the error: 'She / enjoys / reading / more than to write.'",
      options: ["She", "enjoys", "reading", "more than to write"],
      answer: "more than to write",
      explanation: "Rule: Parallel Comparison. Gerund vs Infinitive. Fix: 'writing'."
    },
    {
      question: "Identify the error: 'The new car / is / fast, / reliable, and it saves gas.'",
      options: ["The new car", "is", "fast,", "reliable, and it saves gas"],
      answer: "reliable, and it saves gas",
      explanation: "Rule: List Structure. Adj, Adj, Clause. Fix: 'and fuel-efficient'."
    }
  ],

  expert: [
    {
      question: "Identify the error: 'I have / less / friends / than you.'",
      options: ["I have", "less", "friends", "No error"],
      answer: "less",
      explanation: "Rule: Quantifiers. Friends are countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'The / amount / of people / was huge.'",
      options: ["The", "amount", "of people", "No error"],
      answer: "amount",
      explanation: "Rule: Quantifiers. 'Amount' is for uncountable. 'Number' is for countable. Use 'number'."
    },
    {
      question: "Identify the error: 'He / has / much / books.'",
      options: ["He", "has", "much", "No error"],
      answer: "much",
      explanation: "Rule: Quantifiers. Books are countable. Use 'many'."
    },
    {
      question: "Identify the error: 'She / gave / me / a few advice.'",
      options: ["She", "gave", "me", "a few advice"],
      answer: "a few advice",
      explanation: "Rule: Countability. Advice is uncountable. Use 'some advice'."
    },
    {
      question: "Identify the error: 'We / need / less / calories.'",
      options: ["We", "need", "less", "No error"],
      answer: "less",
      explanation: "Rule: Quantifiers. Calories are countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'There / are / less / days in February.'",
      options: ["There", "are", "less", "No error"],
      answer: "less",
      explanation: "Rule: Quantifiers. Days are countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'He / wants / a little / fries.'",
      options: ["He", "wants", "a little", "No error"],
      answer: "a little",
      explanation: "Rule: Quantifiers. Fries are countable. Use 'a few'."
    },
    {
      question: "Identify the error: 'Look at / all / the / equipments.'",
      options: ["Look at", "all", "the", "equipments"],
      answer: "equipments",
      explanation: "Rule: Uncountable Nouns. Equipment has no plural form. Remove 's'."
    },
    {
      question: "Identify the error: 'The / news / are / bad.'",
      options: ["The", "news", "are", "No error"],
      answer: "are",
      explanation: "Rule: Uncountable Nouns. 'News' ends in S but is singular. Use 'is'."
    },
    {
      question: "Identify the error: 'I / have / many / homeworks.'",
      options: ["I", "have", "many", "homeworks"],
      answer: "homeworks",
      explanation: "Rule: Uncountable Nouns. Homework is uncountable. Use 'much homework'."
    },
    {
      question: "Identify the error: 'She / is / the / more smart student.'",
      options: ["She", "is", "the", "more smart student"],
      answer: "more smart student",
      explanation: "Rule: Comparison Form. One-syllable adjectives take -er/-est. Use 'smarter' or 'smartest'."
    },
    {
      question: "Identify the error: 'He / is / the / most perfect fit.'",
      options: ["He", "is", "the", "most perfect fit"],
      answer: "most perfect fit",
      explanation: "Rule: Absolute Adjectives. 'Perfect' is absolute. Remove 'most'."
    },
    {
      question: "Identify the error: 'This / is / more / better.'",
      options: ["This", "is", "more", "No error"],
      answer: "more",
      explanation: "Rule: Double Comparative. 'Better' is already comparative. Remove 'more'."
    },
    {
      question: "Identify the error: 'He / is / the / most unique person.'",
      options: ["He", "is", "the", "most unique person"],
      answer: "most unique person",
      explanation: "Rule: Absolute Adjectives. 'Unique' means one of a kind. Remove 'most'."
    },
    {
      question: "Identify the error: 'Of the / two / boys, / he is the tallest.'",
      options: ["Of the", "two", "boys,", "he is the tallest"],
      answer: "he is the tallest",
      explanation: "Rule: Comparing Two. Use 'taller' for two items."
    },
    {
      question: "Identify the error: 'She / is / more / prettier than her sister.'",
      options: ["She", "is", "more", "prettier than her sister"],
      answer: "more",
      explanation: "Rule: Double Comparative. 'Prettier' is comparative. Remove 'more'."
    },
    {
      question: "Identify the error: 'This / square / is / rounder than that one.'",
      options: ["This", "square", "is", "rounder than that one"],
      answer: "rounder than that one",
      explanation: "Rule: Logical Comparison. Squares cannot be round."
    },
    {
      question: "Identify the error: 'My / house / is / the same with yours.'",
      options: ["My", "house", "is", "the same with yours"],
      answer: "the same with yours",
      explanation: "Rule: Idiom. The correct phrase is 'the same as yours'."
    },
    {
      question: "Identify the error: 'He / is / senior / than me.'",
      options: ["He", "is", "senior", "than me"],
      answer: "than me",
      explanation: "Rule: Latin Comparatives. Senior takes 'to', not 'than'."
    },
    {
      question: "Identify the error: 'This / painting / is / superior than that one.'",
      options: ["This", "painting", "is", "superior than that one"],
      answer: "superior than that one",
      explanation: "Rule: Latin Comparatives. Use 'superior to'."
    },
    {
      question: "Identify the error: 'Being / rainy, / we / stayed home.'",
      options: ["Being", "rainy,", "we", "No error"],
      answer: "Being",
      explanation: "Rule: Dangling Participle. 'Being rainy' implies 'We were rainy'. Fix: 'Since it was rainy'."
    },
    {
      question: "Identify the error: 'At / the / age / of four, my father died.'",
      options: ["At", "the", "age", "of four, my father died"],
      answer: "of four, my father died",
      explanation: "Rule: Dangling Modifier. This implies the father died when *he* was four. Fix: 'When I was four'."
    },
    {
      question: "Identify the error: 'Cycling / uphill, / the / view was amazing.'",
      options: ["Cycling", "uphill,", "the", "No error"],
      answer: "the",
      explanation: "Rule: Dangling Modifier. The view was not cycling. Fix: 'Cycling uphill, I thought...'."
    },
    {
      question: "Identify the error: 'Students / who study / often / get good grades.'",
      options: ["Students", "who study", "often", "get good grades"],
      answer: "often",
      explanation: "Rule: Squinting Modifier. Does 'often' modify 'study' or 'get'? Ambiguous."
    },
    {
      question: "Identify the error: 'Running / quickly / improves / health.'",
      options: ["Running", "quickly", "improves", "No error"],
      answer: "quickly",
      explanation: "Rule: Squinting Modifier. Is the running done quickly? Or does it quickly improve health?"
    },
    {
      question: "Identify the error: 'After / biting / the postman, / the police took the dog away.'",
      options: ["After", "biting", "the postman,", "the police took the dog away"],
      answer: "the police took the dog away",
      explanation: "Rule: Dangling Modifier. Implies the police bit the postman."
    },
    {
      question: "Identify the error: 'Lying / in the sun, / the heat / was oppressive.'",
      options: ["Lying", "in the sun,", "the heat", "No error"],
      answer: "the heat",
      explanation: "Rule: Dangling Modifier. The heat was not lying in the sun."
    },
    {
      question: "Identify the error: 'While / reading / the book, / the phone rang.'",
      options: ["While", "reading", "the book,", "No error"],
      answer: "the phone rang.",
      explanation: "Rule: Dangling Modifier. The phone was not reading."
    },
    {
      question: "Identify the error: 'To / please / the boss, / work must be done.'",
      options: ["To", "please", "the boss,", "work must be done"],
      answer: "work must be done",
      explanation: "Rule: Dangling Infinitive. 'Work' cannot please. A person must be the subject."
    },
    {
      question: "Identify the error: 'Without / knowing / his name, / it was hard to introduce him.'",
      options: ["Without", "knowing", "his name,", "it was hard to introduce him"],
      answer: "it was hard to introduce him",
      explanation: "Rule: Dangling Modifier. 'It' did not know his name."
    }
  ]
};
