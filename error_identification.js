const ERROR_IDENTIFICATION_QUESTIONS = {
  beginner: [
    // 1-10: Subject-Verb Agreement (Basic)
    {
      question: "Identify the error: 'The cat / sleep / on / the sofa.'",
      choices: ["The cat", "sleep", "on", "No error"],
      correctIndex: 1,
      explanation: "Rule: Subject-Verb Agreement. The subject 'The cat' is singular (one cat). Therefore, the verb must have an 's'. It should be 'sleeps'."
    },
    {
      question: "Identify the error: 'She / do not / like / apples.'",
      choices: ["She", "do not", "like", "No error"],
      correctIndex: 1,
      explanation: "Rule: Auxiliary Verbs. The subject 'She' is singular. We use 'does not' for singular subjects, not 'do not'."
    },
    {
      question: "Identify the error: 'My brother / have / a / new bike.'",
      choices: ["My brother", "have", "a", "No error"],
      correctIndex: 1,
      explanation: "Rule: Has vs Have. The subject 'My brother' is singular (He). He takes 'has', while I/You/We/They take 'have'."
    },
    {
      question: "Identify the error: 'They / was / happy / yesterday.'",
      choices: ["They", "was", "happy", "No error"],
      correctIndex: 1,
      explanation: "Rule: To Be (Past Tense). The subject 'They' is plural. The past plural form of 'be' is 'were', not 'was'."
    },
    {
      question: "Identify the error: 'He / run / very fast / every morning.'",
      choices: ["He", "run", "very fast", "No error"],
      correctIndex: 1,
      explanation: "Rule: Simple Present Tense. For a singular subject 'He', the verb must end in 's'. It should be 'runs'."
    },
    {
      question: "Identify the error: 'We / goes / to school / by bus.'",
      choices: ["We", "goes", "to school", "No error"],
      correctIndex: 1,
      explanation: "Rule: Subject-Verb Agreement. The subject 'We' is plural. It requires the base form 'go', not 'goes'."
    },
    {
      question: "Identify the error: 'The students / is / reading / books.'",
      choices: ["The students", "is", "reading", "No error"],
      correctIndex: 1,
      explanation: "Rule: Plural Subjects. 'Students' is plural. The helping verb must be 'are', not 'is'."
    },
    {
      question: "Identify the error: 'You / am / my / best friend.'",
      choices: ["You", "am", "my", "No error"],
      correctIndex: 1,
      explanation: "Rule: Verb 'To Be'. The pronoun 'You' always takes 'are', never 'am'. 'Am' is only for 'I'."
    },
    {
      question: "Identify the error: 'She / washes / the dishes / every night.'",
      choices: ["She", "washes", "the dishes", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. The subject 'She' is singular, and the verb 'washes' agrees correctly. There is no error."
    },
    {
      question: "Identify the error: 'John / and Mary / is / here.'",
      choices: ["John", "and Mary", "is", "No error"],
      correctIndex: 2,
      explanation: "Rule: Compound Subjects. 'John and Mary' creates a plural subject (They). Therefore, the verb must be 'are'."
    },

    // 11-20: Articles (A, An, The)
    {
      question: "Identify the error: 'I / saw / an / dog.'",
      choices: ["I", "saw", "an", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Articles. The word 'dog' starts with a consonant sound /d/. We use 'a', not 'an'."
    },
    {
      question: "Identify the error: 'She / is / a / engineer.'",
      choices: ["She", "is", "a", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Articles. The word 'engineer' starts with a vowel sound /e/. We use 'an', not 'a'."
    },
    {
      question: "Identify the error: 'He wants / to be / a actor / someday.'",
      choices: ["He wants", "to be", "a actor", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Articles. 'Actor' starts with a vowel sound. It should be 'an actor'."
    },
    {
      question: "Identify the error: 'The sun / rises in / a / east.'",
      choices: ["The sun", "rises in", "a", "No error"],
      correctIndex: 2,
      explanation: "Rule: Definite Articles with Directions. We say 'the east', not 'a east', because directions are unique specific points."
    },
    {
      question: "Identify the error: 'Please / close / a / door behind you.'",
      choices: ["Please", "close", "a", "No error"],
      correctIndex: 2,
      explanation: "Rule: Specificity. When referring to a specific door that both speakers know about (the one behind you), use 'the'."
    },
    {
      question: "Identify the error: 'I / have / an / uniform.'",
      choices: ["I", "have", "an", "No error"],
      correctIndex: 2,
      explanation: "Rule: Initial Sounds. 'Uniform' starts with a 'Y' sound (/juː/), which is a consonant sound. Use 'a uniform'."
    },
    {
      question: "Identify the error: 'She / eats / an / apple.'",
      choices: ["She", "eats", "an", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. 'Apple' starts with a vowel sound, so 'an' is correct. No error."
    },
    {
      question: "Identify the error: 'He / is / a / honest man.'",
      choices: ["He", "is", "a", "No error"],
      correctIndex: 2,
      explanation: "Rule: Silent Letters. 'Honest' starts with a silent 'H', making an 'O' vowel sound. Use 'an honest man'."
    },
    {
      question: "Identify the error: 'We / visited / the / Manila.'",
      choices: ["We", "visited", "the", "No error"],
      correctIndex: 2,
      explanation: "Rule: Proper Nouns (Cities). Cities generally do not take 'the'. We say 'visited Manila'."
    },
    {
      question: "Identify the error: 'This / is / the / best cake.'",
      choices: ["This", "is", "the", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. Superlatives ('best') require 'the'. No error."
    },

    // 21-30: Pronouns (Basic Case)
    {
      question: "Identify the error: 'Me / and my friend / went / home.'",
      choices: ["Me", "and my friend", "went", "No error"],
      correctIndex: 0,
      explanation: "Rule: Subject Pronouns. 'Me' is an object pronoun and cannot be the subject. Use 'My friend and I' or 'I'."
    },
    {
      question: "Identify the error: 'Him / is / a / good student.'",
      choices: ["Him", "is", "a", "No error"],
      correctIndex: 0,
      explanation: "Rule: Subject Pronouns. 'Him' is an object pronoun. The subject form is 'He'."
    },
    {
      question: "Identify the error: 'The teacher / gave / we / homework.'",
      choices: ["The teacher", "gave", "we", "No error"],
      correctIndex: 2,
      explanation: "Rule: Object Pronouns. The pronoun is receiving the giving action. Use 'us', not 'we'."
    },
    {
      question: "Identify the error: 'This book / belongs / to / my.'",
      choices: ["This book", "belongs", "to", "my"], // Corrected choices array to have 4 options + No error logic
      correctIndex: 3,
      explanation: "Rule: Possessive Pronouns vs Adjectives. 'My' is an adjective that needs a noun (my book). At the end of a sentence, use the pronoun 'mine' or object 'me'."
    },
    {
      question: "Identify the error: 'Us / are / going / to the park.'",
      choices: ["Us", "are", "going", "No error"],
      correctIndex: 0,
      explanation: "Rule: Subject Pronouns. 'Us' is an object. The subject must be 'We'."
    },
    {
      question: "Identify the error: 'Between / you / and / I.'",
      choices: ["Between", "you", "and I", "No error"], // Combined due to short sentence structure
      correctIndex: 2,
      explanation: "Rule: Prepositions. Prepositions (like 'between') are always followed by object pronouns. Use 'me', not 'I'."
    },
    {
      question: "Identify the error: 'Them / boys / are / noisy.'",
      choices: ["Them", "boys", "are", "No error"],
      correctIndex: 0,
      explanation: "Rule: Demonstrative Adjectives. Do not use the object pronoun 'Them' to modify a noun. Use 'Those boys' or just 'The boys'."
    },
    {
      question: "Identify the error: 'My mom / cooked / for / he.'",
      choices: ["My mom", "cooked", "for", "he"], // "he" is part 4 error
      correctIndex: 3,
      explanation: "Rule: Object of Preposition. After 'for', use the object pronoun 'him'."
    },
    {
      question: "Identify the error: 'Is / that / bag / yours?'",
      choices: ["Is", "that", "bag", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. 'Yours' is the correct possessive pronoun. No error."
    },
    {
      question: "Identify the error: 'Her / likes / to / dance.'",
      choices: ["Her", "likes", "to", "No error"],
      correctIndex: 0,
      explanation: "Rule: Subject Pronouns. 'Her' cannot be a subject. Use 'She'."
    },

    // 31-40: Prepositions (Time/Place)
    {
      question: "Identify the error: 'I / woke up / on / 7:00 AM.'",
      choices: ["I", "woke up", "on", "No error"],
      correctIndex: 2,
      explanation: "Rule: Prepositions of Time. For specific clock times, use 'at', not 'on'."
    },
    {
      question: "Identify the error: 'She / was / born / in Monday.'",
      choices: ["She", "was", "born", "in"], // 'in' is the error
      correctIndex: 3,
      explanation: "Rule: Prepositions of Time. For days of the week, use 'on', not 'in'."
    },
    {
      question: "Identify the error: 'The cat / is / at / the table.'",
      choices: ["The cat", "is", "at", "No error"],
      correctIndex: 2,
      explanation: "Rule: Usage. While 'at' is possible if seated like a human, usually objects/animals are 'on' (top) or 'under' the table. In exams, 'on' is the standard expectation for placement."
    },
    {
      question: "Identify the error: 'I / live / on / Cebu City.'",
      choices: ["I", "live", "on", "No error"],
      correctIndex: 2,
      explanation: "Rule: Prepositions of Place. For cities, countries, and provinces, use 'in'."
    },
    {
      question: "Identify the error: 'He / arrived / at / January.'",
      choices: ["He", "arrived", "at", "No error"],
      correctIndex: 2,
      explanation: "Rule: Prepositions of Time. For months, years, and long periods, use 'in'."
    },
    {
      question: "Identify the error: 'My birthday / is / in / July 5th.'",
      choices: ["My birthday", "is", "in", "No error"],
      correctIndex: 2,
      explanation: "Rule: Prepositions of Time. When the specific date (day) is given, use 'on'. (e.g., 'in July' but 'on July 5th')."
    },
    {
      question: "Identify the error: 'The picture / is / in / the wall.'",
      choices: ["The picture", "is", "in", "No error"],
      correctIndex: 2,
      explanation: "Rule: Surfaces. For vertical or horizontal surfaces, use 'on'."
    },
    {
      question: "Identify the error: 'See / you / in / Friday.'",
      choices: ["See", "you", "in", "No error"],
      correctIndex: 2,
      explanation: "Rule: Days. Use 'on' for days of the week."
    },
    {
      question: "Identify the error: 'I am / good / in / Math.'",
      choices: ["I am", "good", "in", "No error"],
      correctIndex: 2,
      explanation: "Rule: Collocations. The correct idiom for ability is 'good at', not 'good in'."
    },
    {
      question: "Identify the error: 'He is / afraid / from / dogs.'",
      choices: ["He is", "afraid", "from", "No error"],
      correctIndex: 2,
      explanation: "Rule: Collocations. The adjective 'afraid' is always followed by 'of'."
    },

    // 41-50: Adjectives vs Adverbs
    {
      question: "Identify the error: 'She / sings / very / good.'",
      choices: ["She", "sings", "very", "good"], // "good" is the error
      correctIndex: 3,
      explanation: "Rule: Adverbs. 'Good' is an adjective. To modify the verb 'sings', use the adverb 'well'."
    },
    {
      question: "Identify the error: 'He / drives / very / careful.'",
      choices: ["He", "drives", "very", "careful"],
      correctIndex: 3,
      explanation: "Rule: Adverbs. To modify the verb 'drives', use the adverb 'carefully'."
    },
    {
      question: "Identify the error: 'The soup / tastes / badly / today.'",
      choices: ["The soup", "tastes", "badly", "No error"],
      correctIndex: 2,
      explanation: "Rule: Linking Verbs. 'Tastes' is a linking verb describing the noun 'soup'. Use the adjective 'bad', not the adverb 'badly'."
    },
    {
      question: "Identify the error: 'She / speaks / soft / to the baby.'",
      choices: ["She", "speaks", "soft", "No error"],
      correctIndex: 2,
      explanation: "Rule: Adverbs. To modify 'speaks', use the adverb 'softly'."
    },
    {
      question: "Identify the error: 'He / acts / polite / with guests.'",
      choices: ["He", "acts", "polite", "No error"],
      correctIndex: 2,
      explanation: "Rule: Adverbs. He acts in a certain way. Use 'politely'."
    },
    {
      question: "Identify the error: 'This / is / a / real good movie.'",
      choices: ["This", "is", "a", "real good movie"], // "real" is part of last choice here for context or split it
      correctIndex: 3,
      explanation: "Rule: Adverbs of Degree. 'Real' is an adjective. To modify the adjective 'good', use the adverb 'really'."
    },
    {
      question: "Identify the error: 'She / looks / beautiful / tonight.'",
      choices: ["She", "looks", "beautiful", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Sentence. 'Looks' is a linking verb here, so the adjective 'beautiful' is correct."
    },
    {
      question: "Identify the error: 'I / can / run / quick.'",
      choices: ["I", "can", "run", "quick"],
      correctIndex: 3,
      explanation: "Rule: Adverbs. Modify the action 'run' with the adverb 'quickly'."
    },
    {
      question: "Identify the error: 'He / is / a / slowly runner.'",
      choices: ["He", "is", "a", "slowly runner"],
      correctIndex: 3,
      explanation: "Rule: Adjectives. To modify the noun 'runner', use the adjective 'slow', not the adverb 'slowly'."
    },
    {
      question: "Identify the error: 'They / worked / hardly / all day.'",
      choices: ["They", "worked", "hardly", "No error"],
      correctIndex: 2,
      explanation: "Rule: Word Choice. 'Hardly' means 'almost not'. To mean 'with effort', use 'hard'."
    }
  ],

  intermediate: [
    // 51-60: Subject-Verb Agreement (Intervening Phrases)
    {
      question: "Identify the error: 'The box / of chocolates / are / missing.'",
      choices: ["The box", "of chocolates", "are", "No error"],
      correctIndex: 2,
      explanation: "Rule: Intervening Phrases. The subject is 'box' (singular), not 'chocolates'. The verb must be 'is'."
    },
    {
      question: "Identify the error: 'The teacher, / along with students, / are / going.'",
      choices: ["The teacher,", "along with students,", "are", "No error"],
      correctIndex: 2,
      explanation: "Rule: Additive Phrases. Phrases like 'along with' do NOT make the subject plural. The subject is 'teacher' (singular), so use 'is'."
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
      explanation: "Rule: Correct Sentence. The subject 'list' is singular, and 'is' is singular. No error."
    },
    {
      question: "Identify the error: 'Neither / of the answers / are / correct.'",
      choices: ["Neither", "of the answers", "are", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Pronouns. 'Neither' is grammatically singular in formal English. Use 'is'."
    },
    {
      question: "Identify the error: 'The manager, / as well as clerks, / were / late.'",
      choices: ["The manager,", "as well as clerks,", "were", "No error"],
      correctIndex: 2,
      explanation: "Rule: Additive Phrases. 'As well as' does not change the singular subject 'manager'. Use 'was'."
    },
    {
      question: "Identify the error: 'Each / of the girls / sing / beautifully.'",
      choices: ["Each", "of the girls", "sing", "No error"],
      correctIndex: 2,
      explanation: "Rule: Indefinite Pronouns. 'Each' is singular. The verb must be 'sings'."
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
      explanation: "Rule: Intervening Phrase. Subject 'bouquet' is singular. Use 'lends'."
    },
    {
      question: "Identify the error: 'The noise / of cars / annoy / me.'",
      choices: ["The noise", "of cars", "annoy", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subject-Verb Agreement. Subject 'noise' is singular. Use 'annoys'."
    },

    // 61-70: Tenses (Past Perfect & Present Perfect)
    {
      question: "Identify the error: 'She / lived / here / since 2010.'",
      choices: ["She", "lived", "here", "since 2010"], // "lived" is error
      correctIndex: 1,
      explanation: "Rule: Present Perfect. The action continues to the present (indicated by 'since'). Use 'has lived'."
    },
    {
      question: "Identify the error: 'I / have seen / him / yesterday.'",
      choices: ["I", "have seen", "him", "yesterday"],
      correctIndex: 1,
      explanation: "Rule: Past Time Markers. 'Yesterday' specifies a finished time. Use simple past 'saw', not present perfect."
    },
    {
      question: "Identify the error: 'When we arrived, / the train / already / left.'",
      choices: ["When we arrived,", "the train", "already", "left"],
      correctIndex: 3,
      explanation: "Rule: Past Perfect. The train leaving happened BEFORE we arrived. Use 'had left'."
    },
    {
      question: "Identify the error: 'I / am knowing / him / for years.'",
      choices: ["I", "am knowing", "him", "No error"],
      correctIndex: 1,
      explanation: "Rule: Stative Verbs. 'Know' is a stative verb and cannot be continuous. Use 'have known'."
    },
    {
      question: "Identify the error: 'She / has / wrote / a letter.'",
      choices: ["She", "has", "wrote", "No error"],
      correctIndex: 2,
      explanation: "Rule: Past Participle. With 'has', use the participle 'written', not the simple past 'wrote'."
    },
    {
      question: "Identify the error: 'I / didn't / went / to work.'",
      choices: ["I", "didn't", "went", "No error"],
      correctIndex: 2,
      explanation: "Rule: Auxiliary 'Did'. After 'did/didn't', use the base form of the verb. Use 'go'."
    },
    {
      question: "Identify the error: 'By next year, / I / finish / my degree.'",
      choices: ["By next year,", "I", "finish", "No error"],
      correctIndex: 2,
      explanation: "Rule: Future Perfect. 'By next year' implies an action completed in the future. Use 'will have finished'."
    },
    {
      question: "Identify the error: 'He / has / began / the project.'",
      choices: ["He", "has", "began", "No error"],
      correctIndex: 2,
      explanation: "Rule: Irregular Verbs. Base: Begin, Past: Began, Participle: Begun. With 'has', use 'begun'."
    },
    {
      question: "Identify the error: 'If I / know / you were coming, / I would have stayed.'",
      choices: ["If I", "know", "you were coming,", "I would have stayed"],
      correctIndex: 1,
      explanation: "Rule: Third Conditional. The result is 'would have stayed', so the condition must be Past Perfect: 'had known'."
    },
    {
      question: "Identify the error: 'She / is / sleeping / for two hours.'",
      choices: ["She", "is", "sleeping", "No error"],
      correctIndex: 1,
      explanation: "Rule: Present Perfect Continuous. An action starting in the past and continuing for a duration. Use 'has been sleeping'."
    },

    // 71-80: Double Negatives & Redundancies
    {
      question: "Identify the error: 'I / don't have / no / money.'",
      choices: ["I", "don't have", "no", "No error"],
      correctIndex: 2,
      explanation: "Rule: Double Negative. 'Don't' is already negative. Use 'any' instead of 'no'."
    },
    {
      question: "Identify the error: 'He / can't / hardly / see.'",
      choices: ["He", "can't", "hardly", "No error"],
      correctIndex: 1,
      explanation: "Rule: Double Negative. 'Hardly' is considered negative. Use 'can hardly see'."
    },
    {
      question: "Identify the error: 'Please / repeat / that / again.'",
      choices: ["Please", "repeat", "that", "again"],
      correctIndex: 3,
      explanation: "Rule: Redundancy. 'Repeat' means to say again. 'Again' is unnecessary."
    },
    {
      question: "Identify the error: 'The / reason is / because / he was late.'",
      choices: ["The", "reason is", "because", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'The reason is' should be followed by 'that', not 'because'."
    },
    {
      question: "Identify the error: 'She / returned / back / home.'",
      choices: ["She", "returned", "back", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'Return' means go back. Delete 'back'."
    },
    {
      question: "Identify the error: 'He / hasn't / never / been there.'",
      choices: ["He", "hasn't", "never", "No error"],
      correctIndex: 2,
      explanation: "Rule: Double Negative. Use 'ever' instead of 'never' with 'hasn't'."
    },
    {
      question: "Identify the error: 'Advance / forward / to the / next level.'",
      choices: ["Advance", "forward", "to the", "No error"],
      correctIndex: 1,
      explanation: "Rule: Redundancy. 'Advance' means move forward. Delete 'forward'."
    },
    {
      question: "Identify the error: 'The / ATM machine / is / broken.'",
      choices: ["The", "ATM machine", "is", "No error"],
      correctIndex: 1,
      explanation: "Rule: RAS Syndrome (Redundant Acronym Syndrome). The 'M' in ATM stands for Machine. Just say 'The ATM is broken'."
    },
    {
      question: "Identify the error: 'I / could / care / less.'",
      choices: ["I", "could", "care", "less"],
      correctIndex: 1,
      explanation: "Rule: Idiom Logic. If you 'could' care less, you care a little. The correct phrase for zero care is 'couldn't care less'."
    },
    {
      question: "Identify the error: 'Irregardless / of the weather, / we / go.'",
      choices: ["Irregardless", "of the weather,", "we", "go"],
      correctIndex: 0,
      explanation: "Rule: Non-standard word. 'Irregardless' is a double negative. Use 'Regardless'."
    },

    // 81-90: Parallelism (Intermediate)
    {
      question: "Identify the error: 'She likes / swimming, / hiking, / and to run.'",
      choices: ["She likes", "swimming,", "hiking,", "and to run"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Items in a list must match. Gerunds are used (swimming, hiking), so the last must be 'running'."
    },
    {
      question: "Identify the error: 'The movie / was / long, / boring, and loud noise.'",
      choices: ["The movie", "was", "long,", "boring, and loud noise"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. The list consists of adjectives (long, boring). The last item should be an adjective: 'loud'."
    },
    {
      question: "Identify the error: 'He wants / to travel / and / working abroad.'",
      choices: ["He wants", "to travel", "and", "working abroad"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Match infinitives. 'To travel' and 'to work' (or just 'work')."
    },
    {
      question: "Identify the error: 'She is / smart, / beautiful, / and a doctor.'",
      choices: ["She is", "smart,", "beautiful,", "and a doctor"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Adjective, Adjective, Adjective. 'and professional' would fit better."
    },
    {
      question: "Identify the error: 'You can / go by / bus or / take a train.'",
      choices: ["You can", "go by", "bus or", "take a train"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. 'By bus' matches 'by train'. Better: 'go by bus or by train'."
    },
    {
      question: "Identify the error: 'To / learn is / to / growing.'",
      choices: ["To", "learn is", "to", "growing"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Infinitive 'To learn' matches infinitive 'to grow'."
    },
    {
      question: "Identify the error: 'He spoke / clearly, / eloquently, / and with confidence.'",
      choices: ["He spoke", "clearly,", "eloquently,", "and with confidence"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. Adverb, Adverb, Adverb. Use 'confidently'."
    },
    {
      question: "Identify the error: 'I prefer / reading / to / write.'",
      choices: ["I prefer", "reading", "to", "write"],
      correctIndex: 3,
      explanation: "Rule: Verb Patterns. 'Prefer X to Y'. 'Reading' is a gerund, so use 'writing'."
    },
    {
      question: "Identify the error: 'My goals are / to save money, / buying a house, / and retiring.'",
      choices: ["My goals are", "to save money,", "buying a house,", "No error"],
      correctIndex: 2,
      explanation: "Rule: Parallelism. The first item is an infinitive 'to save'. The rest must match. Use 'to buy'."
    },
    {
      question: "Identify the error: 'Not only / is he rich, / but also / famous.'",
      choices: ["Not only", "is he rich,", "but also", "famous"],
      correctIndex: 1,
      explanation: "Rule: Correlative Conjunctions. Structure is unbalanced. 'Not only IS HE rich' (inverted) vs 'but HE IS also famous'. Fix: 'He is not only rich but also famous'."
    },

    // 91-100: Modifiers (Misplaced/Dangling)
    {
      question: "Identify the error: 'Walking / down the street, / the trees / looked beautiful.'",
      choices: ["Walking", "down the street,", "the trees", "looked beautiful"],
      correctIndex: 2,
      explanation: "Rule: Dangling Modifier. 'Walking' implies a person, but the subject 'the trees' cannot walk. The subject 'I' is missing."
    },
    {
      question: "Identify the error: 'She served / sandwiches to the kids / on / paper plates.'",
      choices: ["She served", "sandwiches to the kids", "on", "paper plates"],
      correctIndex: 1,
      explanation: "Rule: Misplaced Modifier. 'On paper plates' modifies the sandwiches, not the kids. Order: 'She served sandwiches on paper plates to the kids'."
    },
    {
      question: "Identify the error: 'Covered / in cheese, / I ate / the pizza.'",
      choices: ["Covered", "in cheese,", "I ate", "the pizza"],
      correctIndex: 2,
      explanation: "Rule: Dangling Modifier. This implies 'I' was covered in cheese. Correct: 'I ate the pizza covered in cheese'."
    },
    {
      question: "Identify the error: 'To get / a good grade, / studying / is necessary.'",
      choices: ["To get", "a good grade,", "studying", "is necessary"],
      correctIndex: 2,
      explanation: "Rule: Dangling Infinitive. 'To get a grade' is a goal for a person. 'Studying' is the subject. It needs a person: 'To get a good grade, YOU must study'."
    },
    {
      question: "Identify the error: 'Barking / loudly, / John / shouted at the dog.'",
      choices: ["Barking", "loudly,", "John", "shouted at the dog"],
      correctIndex: 2,
      explanation: "Rule: Misplaced Modifier. Implies John was barking. Correct: 'John shouted at the loudly barking dog'."
    },
    {
      question: "Identify the error: 'He / nearly drove / for / six hours.'",
      choices: ["He", "nearly drove", "for", "six hours"],
      correctIndex: 1,
      explanation: "Rule: Misplaced Limiting Modifier. 'Nearly drove' implies he didn't drive at all. Correct: 'He drove for nearly six hours'."
    },
    {
      question: "Identify the error: 'I / only have / five / dollars.'",
      choices: ["I", "only have", "five", "dollars"],
      correctIndex: 1,
      explanation: "Rule: Placement of Only. Precise usage: 'I have only five dollars'."
    },
    {
      question: "Identify the error: 'After / rotting / in the cellar, / mom threw the apples.'",
      choices: ["After", "rotting", "in the cellar,", "mom threw the apples"],
      correctIndex: 3,
      explanation: "Rule: Dangling Modifier. Implies Mom was rotting. Correct: 'Mom threw out the apples rotting in the cellar'."
    },
    {
      question: "Identify the error: 'The woman / walked the dog / in / a bikini.'",
      choices: ["The woman", "walked the dog", "in", "a bikini"],
      correctIndex: 1,
      explanation: "Rule: Ambiguity/Misplaced Modifier. Did the dog have the bikini? Place 'In a bikini' closer to 'The woman'."
    },
    {
      question: "Identify the error: 'He / bought a horse / for his sister / called Prince.'",
      choices: ["He", "bought a horse", "for his sister", "called Prince"],
      correctIndex: 2,
      explanation: "Rule: Misplaced Modifier. Implies the sister is called Prince. Correct: 'He bought a horse called Prince for his sister'."
    }
  ],

  advanced: [
    // 101-110: Inversion & Subjunctive
    {
      question: "Identify the error: 'Never / I have / seen / such a thing.'",
      choices: ["Never", "I have", "seen", "No error"],
      correctIndex: 1,
      explanation: "Rule: Negative Inversion. When starting with 'Never', invert the subject and auxiliary: 'Never have I seen'."
    },
    {
      question: "Identify the error: 'I suggest / that he / stops / smoking.'",
      choices: ["I suggest", "that he", "stops", "No error"],
      correctIndex: 2,
      explanation: "Rule: Mandative Subjunctive. After 'suggest', use the base form. 'That he stop smoking'."
    },
    {
      question: "Identify the error: 'If I / was / you, / I would accept.'",
      choices: ["If I", "was", "you,", "I would accept"],
      correctIndex: 1,
      explanation: "Rule: Hypothetical Subjunctive. In 'If' clauses representing unreal situations, use 'were' for all subjects. 'If I were you'."
    },
    {
      question: "Identify the error: 'Rarely / we do / go / to the cinema.'",
      choices: ["Rarely", "we do", "go", "No error"],
      correctIndex: 1,
      explanation: "Rule: Inversion. Negative adverb 'Rarely' requires inversion: 'Rarely do we go'."
    },
    {
      question: "Identify the error: 'It is / important that / she / is on time.'",
      choices: ["It is", "important that", "she", "is on time"],
      correctIndex: 3,
      explanation: "Rule: Subjunctive. After adjectives of necessity, use base form. 'That she be on time'."
    },
    {
      question: "Identify the error: 'Not only / he is / rich, / but also famous.'",
      choices: ["Not only", "he is", "rich,", "No error"],
      correctIndex: 1,
      explanation: "Rule: Inversion. After 'Not only', invert: 'is he'."
    },
    {
      question: "Identify the error: 'I wish / I / know / the answer.'",
      choices: ["I wish", "I", "know", "No error"],
      correctIndex: 2,
      explanation: "Rule: Wish Structures. Wishes about the present use the past tense. 'I wish I knew'."
    },
    {
      question: "Identify the error: 'Had / I / knew, / I would have come.'",
      choices: ["Had", "I", "knew,", "No error"],
      correctIndex: 2,
      explanation: "Rule: Past Perfect. 'Had' requires the past participle 'known', not 'knew'."
    },
    {
      question: "Identify the error: 'Little / he knew / about / the surprise.'",
      choices: ["Little", "he knew", "about", "No error"],
      correctIndex: 1,
      explanation: "Rule: Inversion. 'Little' acts as a negative adverb here. 'Little did he know'."
    },
    {
      question: "Identify the error: 'God / blesses / the / Philippines.'",
      choices: ["God", "blesses", "the", "No error"],
      correctIndex: 1,
      explanation: "Rule: Formulaic Subjunctive. In prayers/wishes, use the base form: 'God bless the Philippines'."
    },

    // 111-120: Advanced Pronouns (Who/Whom, etc.)
    {
      question: "Identify the error: 'Who / did you / give / the book to?'",
      choices: ["Who", "did you", "give", "No error"],
      correctIndex: 0,
      explanation: "Rule: Formal Case. The pronoun is the object of 'to'. Formal English requires 'Whom'."
    },
    {
      question: "Identify the error: 'He is / the man / whom / I think stole it.'",
      choices: ["He is", "the man", "whom", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subject of Clause. Ignore 'I think'. The clause is 'who stole it' (Subject). Use 'who'."
    },
    {
      question: "Identify the error: 'Give it / to / whomever / wants it.'",
      choices: ["Give it", "to", "whomever", "No error"],
      correctIndex: 2,
      explanation: "Rule: Subject of Clause. The pronoun is the subject of 'wants'. Use 'whoever'."
    },
    {
      question: "Identify the error: 'Us / students / need / more time.'",
      choices: ["Us", "students", "need", "No error"],
      correctIndex: 0,
      explanation: "Rule: Appositives. The pronoun is the subject. Use 'We students'."
    },
    {
      question: "Identify the error: 'She is / taller / than / me.'",
      choices: ["She is", "taller", "than", "me"],
      correctIndex: 3,
      explanation: "Rule: Comparative Ellipsis. Formal grammar completes the sentence 'than I (am)'. Use 'I'."
    },
    {
      question: "Identify the error: 'It was / him / who / called.'",
      choices: ["It was", "him", "who", "No error"],
      correctIndex: 1,
      explanation: "Rule: Predicate Nominative. After 'to be', usage requires the subject pronoun. 'It was he'."
    },
    {
      question: "Identify the error: 'Everyone / has / their / own opinion.'",
      choices: ["Everyone", "has", "their", "No error"],
      correctIndex: 2,
      explanation: "Rule: Singular Indefinite. Formal exams often require 'his or her' for 'Everyone'."
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
      explanation: "Rule: Collective Nouns. If the jury acts as one unit, use 'its'."
    },
    {
      question: "Identify the error: 'Myself / will / handle / the project.'",
      choices: ["Myself", "will", "handle", "No error"],
      correctIndex: 0,
      explanation: "Rule: Reflexive Pronouns. Cannot be a subject. Use 'I'."
    },

    // 121-130: Advanced Prepositions
    {
      question: "Identify the error: 'We / discussed / about / the problem.'",
      choices: ["We", "discussed", "about", "No error"],
      correctIndex: 2,
      explanation: "Rule: Transitive Verb. 'Discuss' means 'talk about'. Adding 'about' is redundant. Delete it."
    },
    {
      question: "Identify the error: 'She / married / with / a doctor.'",
      choices: ["She", "married", "with", "No error"],
      correctIndex: 2,
      explanation: "Rule: Preposition Error. Use 'married a doctor' or 'is married to a doctor'."
    },
    {
      question: "Identify the error: 'I / entered / into / the room.'",
      choices: ["I", "entered", "into", "No error"],
      correctIndex: 2,
      explanation: "Rule: Transitive Verb. 'Enter' (a place) does not take 'into'. Just 'entered the room'."
    },
    {
      question: "Identify the error: 'He / lacks / of / confidence.'",
      choices: ["He", "lacks", "of", "No error"],
      correctIndex: 2,
      explanation: "Rule: Verb vs Noun. 'Lack' (verb) takes no preposition. Here it is a verb. Delete 'of'."
    },
    {
      question: "Identify the error: 'Despite / of / the rain, / we played.'",
      choices: ["Despite", "of", "the rain,", "No error"],
      correctIndex: 1,
      explanation: "Rule: Preposition Error. Use 'Despite' alone OR 'In spite of'. Never 'Despite of'."
    },
    {
      question: "Identify the error: 'Comprised / of / many / elements.'",
      choices: ["Comprised", "of", "many", "No error"],
      correctIndex: 1,
      explanation: "Rule: Word Choice. 'Comprise' means 'include'. Do not use 'of'. Alternatively, use 'Composed of'."
    },
    {
      question: "Identify the error: 'Please / await / for / further instructions.'",
      choices: ["Please", "await", "for", "No error"],
      correctIndex: 2,
      explanation: "Rule: Transitive Verb. 'Await' means 'wait for'. Adding 'for' is redundant."
    },
    {
      question: "Identify the error: 'I / met / up / with him.'",
      choices: ["I", "met", "up", "No error"],
      correctIndex: 2,
      explanation: "Rule: Redundancy. 'Met him' is sufficient. 'Met up with' is informal."
    },
    {
      question: "Identify the error: 'Inside / of / the / box.'",
      choices: ["Inside", "of", "the", "No error"],
      correctIndex: 1,
      explanation: "Rule: Preposition Style. 'Inside the box' is preferred. Drop 'of'."
    },
    {
      question: "Identify the error: 'Where / are you / going / to?'",
      choices: ["Where", "are you", "going", "to?"],
      correctIndex: 3,
      explanation: "Rule: Redundancy. 'Where are you going?' implies destination. 'To' is unnecessary."
    },

    // 131-140: Word Choice & Idioms
    {
      question: "Identify the error: 'I / accept / your / preposition.'",
      choices: ["I", "accept", "your", "preposition"],
      correctIndex: 3,
      explanation: "Rule: Malapropism. Context suggests 'proposition' (offer), not 'preposition' (grammar word)."
    },
    {
      question: "Identify the error: 'He / lost / his / site.'",
      choices: ["He", "lost", "his", "site"],
      correctIndex: 3,
      explanation: "Rule: Homophones. He lost his vision, which is 'sight', not 'site' (location)."
    },
    {
      question: "Identify the error: 'Please / proceed / with / the next item.'",
      choices: ["Please", "proceed", "with", "No error"],
      correctIndex: 2,
      explanation: "Rule: Preposition. 'Proceed to' implies moving to a new point. 'Proceed with' means continue doing."
    },
    {
      question: "Identify the error: 'I / could / care / less.'",
      choices: ["I", "could", "care", "less"],
      correctIndex: 1,
      explanation: "Rule: Idiom. 'Could care less' implies you care a little. The correct phrase is 'Couldn't care less'."
    },
    {
      question: "Identify the error: 'For / all / intensive / purposes.'",
      choices: ["For", "all", "intensive", "purposes"],
      correctIndex: 2,
      explanation: "Rule: Malapropism. The idiom is 'For all intents and purposes', not 'intensive'."
    },
    {
      question: "Identify the error: 'Nip / it / in / the butt.'",
      choices: ["Nip", "it", "in", "the butt"],
      correctIndex: 3,
      explanation: "Rule: Idiom. The phrase refers to a flower bud. It is 'Nip it in the bud'."
    },
    {
      question: "Identify the error: 'One / in / the / same.'",
      choices: ["One", "in", "the", "same"],
      correctIndex: 1,
      explanation: "Rule: Idiom. The phrase is 'One and the same'."
    },
    {
      question: "Identify the error: 'Case / and / point.'",
      choices: ["Case", "and", "point", "No error"],
      correctIndex: 1,
      explanation: "Rule: Idiom. The correct phrase is 'Case in point'."
    },
    {
      question: "Identify the error: 'Peaked / my / interest.'",
      choices: ["Peaked", "my", "interest", "No error"],
      correctIndex: 0,
      explanation: "Rule: Homophones. 'Piqued' means to stimulate. 'Peaked' means reached a high point."
    },
    {
      question: "Identify the error: 'By / and / large.'",
      choices: ["By", "and", "large", "No error"],
      correctIndex: 3,
      explanation: "Rule: Correct Idiom. 'By and large' means on the whole. No error."
    },

    // 141-150: Advanced Parallelism
    {
      question: "Identify the error: 'It was / both / a long ceremony / and tedious.'",
      choices: ["It was", "both", "a long ceremony", "and tedious"],
      correctIndex: 3,
      explanation: "Rule: Parallelism. 'Both' is followed by Noun Phrase. 'And' must follow with Noun Phrase. 'Tedious' is Adjective."
    },
    {
      question: "Identify the error: 'He not only / passed / the test / but also the interview.'",
      choices: ["He not only", "passed", "the test", "but also the interview"],
      correctIndex: 1,
      explanation: "Rule: Correlative Position. 'Not only' precedes verb 'passed', so 'but also' must precede a verb."
    },
    {
      question: "Identify the error: 'The room / was / light, airy, / and had plenty of space.'",
      choices: ["The room", "was", "light, airy,", "and had plenty of space"],
      correctIndex: 3,
      explanation: "Rule: Parallel Lists. Adjective, Adjective, and [Clause]. Fix: 'and spacious'."
    },
    {
      question: "Identify the error: 'I like / running, / jumping, / and to swim.'",
      choices: ["I like", "running,", "jumping,", "and to swim"],
      correctIndex: 3,
      explanation: "Rule: Parallel Forms. Gerund, Gerund, Infinitive. Fix: 'swimming'."
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
      explanation: "Rule: Correlative Placement. 'Either' comes before 'you' (Pronoun). 'Or' before 'later' (Adverb). Fix: 'You pay either now or later'."
    },
    {
      question: "Identify the error: 'She / enjoys / reading / more than to write.'",
      choices: ["She", "enjoys", "reading", "more than to write"],
      correctIndex: 3,
      explanation: "Rule: Parallel Comparison. Gerund vs Infinitive. Fix: 'writing'."
    },
    {
      question: "Identify the error: 'The new car / is / fast, / reliable, and it saves gas.'",
      choices: ["The new car", "is", "fast,", "reliable, and it saves gas"],
      correctIndex: 3,
      explanation: "Rule: List Structure. Adj, Adj, Clause. Fix: 'and fuel-efficient'."
    }
  ],

  super: [
    // 151-160: Count vs Mass Noun Nuances
    {
      question: "Identify the error: 'I have / less / friends / than you.'",
      choices: ["I have", "less", "friends", "No error"],
      correctIndex: 1,
      explanation: "Rule: Quantifiers. Friends are countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'The / amount / of people / was huge.'",
      choices: ["The", "amount", "of people", "No error"],
      correctIndex: 1,
      explanation: "Rule: Quantifiers. 'Amount' is for uncountable. 'Number' is for countable. Use 'number'."
    },
    {
      question: "Identify the error: 'He / has / much / books.'",
      choices: ["He", "has", "much", "No error"],
      correctIndex: 2,
      explanation: "Rule: Quantifiers. Books are countable. Use 'many'."
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
      explanation: "Rule: Quantifiers. Calories are countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'There / are / less / days in February.'",
      choices: ["There", "are", "less", "No error"],
      correctIndex: 2,
      explanation: "Rule: Quantifiers. Days are countable. Use 'fewer'."
    },
    {
      question: "Identify the error: 'He / wants / a little / fries.'",
      choices: ["He", "wants", "a little", "No error"],
      correctIndex: 2,
      explanation: "Rule: Quantifiers. Fries are countable. Use 'a few'."
    },
    {
      question: "Identify the error: 'Look at / all / the / equipments.'",
      choices: ["Look at", "all", "the", "equipments"],
      correctIndex: 3,
      explanation: "Rule: Uncountable Nouns. Equipment has no plural form. Remove 's'."
    },
    {
      question: "Identify the error: 'The / news / are / bad.'",
      choices: ["The", "news", "are", "No error"],
      correctIndex: 2,
      explanation: "Rule: Uncountable Nouns. 'News' ends in S but is singular. Use 'is'."
    },
    {
      question: "Identify the error: 'I / have / many / homeworks.'",
      choices: ["I", "have", "many", "homeworks"],
      correctIndex: 3,
      explanation: "Rule: Uncountable Nouns. Homework is uncountable. Use 'much homework'."
    },

    // 161-170: Comparatives & Superlatives
    {
      question: "Identify the error: 'She / is / the / more smart student.'",
      choices: ["She", "is", "the", "more smart student"],
      correctIndex: 3,
      explanation: "Rule: Comparison Form. One-syllable adjectives take -er/-est. Use 'smarter' or 'smartest'."
    },
    {
      question: "Identify the error: 'He / is / the / most perfect fit.'",
      choices: ["He", "is", "the", "most perfect fit"],
      correctIndex: 3,
      explanation: "Rule: Absolute Adjectives. 'Perfect' is absolute. Remove 'most'."
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
      explanation: "Rule: Comparing Two. Use 'taller' for two items."
    },
    {
      question: "Identify the error: 'She / is / more / prettier than her sister.'",
      choices: ["She", "is", "more", "prettier than her sister"],
      correctIndex: 2,
      explanation: "Rule: Double Comparative. 'Prettier' is comparative. Remove 'more'."
    },
    {
      question: "Identify the error: 'This / square / is / rounder than that one.'",
      choices: ["This", "square", "is", "rounder than that one"],
      correctIndex: 3,
      explanation: "Rule: Logical Comparison. Squares cannot be round."
    },
    {
      question: "Identify the error: 'My / house / is / the same with yours.'",
      choices: ["My", "house", "is", "the same with yours"],
      correctIndex: 3,
      explanation: "Rule: Idiom. The correct phrase is 'the same as yours'."
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
      explanation: "Rule: Latin Comparatives. Use 'superior to'."
    },

    // 171-180: Dangling & Squinting Modifiers (Super)
    {
      question: "Identify the error: 'Being / rainy, / we / stayed home.'",
      choices: ["Being", "rainy,", "we", "No error"],
      correctIndex: 0,
      explanation: "Rule: Dangling Participle. 'Being rainy' implies 'We were rainy'. Fix: 'Since it was rainy'."
    },
    {
      question: "Identify the error: 'At / the / age / of four, my father died.'",
      choices: ["At", "the", "age", "of four, my father died"],
      correctIndex: 3,
      explanation: "Rule: Dangling Modifier. This implies the father died when *he* was four. Fix: 'When I was four'."
    },
    {
      question: "Identify the error: 'Cycling / uphill, / the / view was amazing.'",
      choices: ["Cycling", "uphill,", "the", "No error"],
      correctIndex: 2,
      explanation: "Rule: Dangling Modifier. The view was not cycling. Fix: 'Cycling uphill, I thought...'."
    },
    {
      question: "Identify the error: 'Students / who study / often / get good grades.'",
      choices: ["Students", "who study", "often", "get good grades"],
      correctIndex: 2,
      explanation: "Rule: Squinting Modifier. Does 'often' modify 'study' or 'get'? Ambiguous."
    },
    {
      question: "Identify the error: 'Running / quickly / improves / health.'",
      choices: ["Running", "quickly", "improves", "No error"],
      correctIndex: 1,
      explanation: "Rule: Squinting Modifier. Is the running done quickly? Or does it quickly improve health?"
    },
    {
      question: "Identify the error: 'After / biting / the postman, / the police took the dog away.'",
      choices: ["After", "biting", "the postman,", "the police took the dog away"],
      correctIndex: 3,
      explanation: "Rule: Dangling Modifier. Implies the police bit the postman."
    },
    {
      question: "Identify the error: 'Lying / in the sun, / the heat / was oppressive.'",
      choices: ["Lying", "in the sun,", "the heat", "No error"],
      correctIndex: 2,
      explanation: "Rule: Dangling Modifier. The heat was not lying in the sun."
    },
    {
      question: "Identify the error: 'While / reading / the book, / the phone rang.'",
      choices: ["While", "reading", "the book,", "No error"],
      correctIndex: 3,
      explanation: "Rule: Dangling Modifier. The phone was not reading."
    },
    {
      question: "Identify the error: 'To / please / the boss, / work must be done.'",
      choices: ["To", "please", "the boss,", "work must be done"],
      correctIndex: 3,
      explanation: "Rule: Dangling Infinitive. 'Work' cannot please. A person must be the subject."
    },
    {
      question: "Identify the error: 'Without / knowing / his name, / it was hard to introduce him.'",
      choices: ["Without", "knowing", "his name,", "it was hard to introduce him"],
      correctIndex: 3,
      explanation: "Rule: Dangling Modifier. 'It' did not know his name."
    },

    // 181-190: Subjunctive & Inversion (Super)
    {
      question: "Identify the error: 'I / wish / I / was there.'",
      choices: ["I", "wish", "I", "was there"],
      correctIndex: 3,
      explanation: "Rule: Subjunctive Mood. In formal grammar, use 'were' for hypothetical wishes."
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
      choices: ["Had", "I", "went,", "No error"],
      correctIndex: 2,
      explanation: "Rule: Inverted Conditional. 'Had' acts as auxiliary for Past Perfect. Needs past participle 'gone'."
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
      choices: ["I", "would", "of", "No error"],
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
      explanation: "Rule: Negative Inversion. 'Not until' requires inversion: 'will I speak'."
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
