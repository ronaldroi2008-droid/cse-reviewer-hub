// questions/error_identification.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["error_identification"] = {

  beginner: [
    {
    "question": "Identify the error: 'The cat / sleep / on / the sofa.'",
    "options": ["The cat", "sleep", "on", "No error"],
    "answer": "sleep",
    "explanation": "The sentence reads: 'The cat sleep on the sofa.' In the Simple Present Tense, a singular third-person subject (he, she, it, or a singular noun like 'the cat') requires a verb ending in -s or -es. Since 'The cat' is singular, the verb 'sleep' must be changed to 'sleeps.' Corrected sentence: 'The cat sleeps on the sofa.'"
  },
  {
    "question": "Identify the error: 'She / do not / like / apples.'",
    "options": ["She", "do not", "like", "No error"],
    "answer": "do not",
    "explanation": "The sentence reads: 'She do not like apples.' When forming a negative sentence in the Simple Present Tense, the auxiliary verb must agree with the subject. 'Do not' is used with plural or first/second person subjects (I, you, we, they). Since 'She' is a singular third-person subject, the correct auxiliary is 'does not.' Corrected sentence: 'She does not like apples.'"
  },
  {
    "question": "Identify the error: 'They / was / happy / yesterday.'",
    "options": ["They", "was", "happy", "No error"],
    "answer": "was",
    "explanation": "The sentence reads: 'They was happy yesterday.' The verb 'to be' in the Simple Past Tense has two forms: 'was' for singular subjects (I, he, she, it) and 'were' for plural subjects (we, you, they). Since 'They' is plural, 'was' is incorrect and must be replaced with 'were.' Corrected sentence: 'They were happy yesterday.'"
  },
  {
    "question": "Identify the error: 'She / is / a / engineer.'",
    "options": ["She", "is", "a", "No error"],
    "answer": "a",
    "explanation": "The sentence reads: 'She is a engineer.' The indefinite articles 'a' and 'an' depend on the sound — not the spelling — of the word that follows. 'A' is used before words that begin with a consonant sound, while 'an' is used before words that begin with a vowel sound. The word 'engineer' begins with a vowel sound /ɛ/, so the correct article is 'an.' Corrected sentence: 'She is an engineer.'"
  },
  {
    "question": "Identify the error: 'I / woke up / on / 7:00 AM.'",
    "options": ["I", "woke up", "on", "No error"],
    "answer": "on",
    "explanation": "The sentence reads: 'I woke up on 7:00 AM.' Prepositions of time follow a specific pattern: 'at' is used for exact clock times, 'on' is used for days and dates, and 'in' is used for months, years, and longer periods. Since 7:00 AM is a specific time on the clock, the correct preposition is 'at.' Corrected sentence: 'I woke up at 7:00 AM.'"
  },
  {
    "question": "Identify the error: 'My brother / have / a / new bike.'",
    "options": ["My brother", "have", "a", "No error"],
    "answer": "have",
    "explanation": "The sentence reads: 'My brother have a new bike.' For subject-verb agreement with the verb 'have' in the present tense, plural subjects and 'I/you' use 'have', while singular third-person subjects use 'has'. Since 'My brother' is singular, it must be changed to 'has'. Corrected sentence: 'My brother has a new bike.'"
  },
  {
    "question": "Identify the error: 'He / run / very fast / every morning.'",
    "options": ["He", "run", "very fast", "No error"],
    "answer": "run",
    "explanation": "The sentence reads: 'He run very fast every morning.' In the simple present tense, regular action verbs must take an '-s' or '-es' suffix when paired with a singular third-person subject like 'He'. Therefore, 'run' must be corrected to 'runs'. Corrected sentence: 'He runs very fast every morning.'"
  },
  {
    "question": "Identify the error: 'We / goes / to school / by bus.'",
    "options": ["We", "goes", "to school", "No error"],
    "answer": "goes",
    "explanation": "The sentence reads: 'We goes to school by bus.' The subject 'We' is plural. Plural subjects require the base form of the verb without '-s' or '-es' in the simple present tense. Thus, 'goes' should be changed to 'go'. Corrected sentence: 'We go to school by bus.'"
  },
  {
    "question": "Identify the error: 'The students / is / reading / books.'",
    "options": ["The students", "is", "reading", "No error"],
    "answer": "is",
    "explanation": "The sentence reads: 'The students is reading books.' The subject 'The students' is plural, indicating more than one person. The plural form of the verb 'to be' in the present continuous tense is 'are', not 'is'. Corrected sentence: 'The students are reading books.'"
  },
  {
    "question": "Identify the error: 'You / am / my / best friend.'",
    "options": ["You", "am", "my", "No error"],
    "answer": "am",
    "explanation": "The sentence reads: 'You am my best friend.' The present tense 'to be' verb 'am' is strictly reserved for the first-person singular pronoun 'I'. The pronoun 'You' always pairs with 'are', whether it refers to one person or multiple people. Corrected sentence: 'You are my best friend.'"
  },
  {
    "question": "Identify the error: 'She / washes / the dishes / every night.'",
    "options": ["She", "washes", "the dishes", "No error"],
    "answer": "No error",
    "explanation": "The sentence reads: 'She washes the dishes every night.' The subject 'She' is a third-person singular pronoun, which correctly pairs with the singular verb form 'washes' ending in '-es'. The rest of the sentence is grammatically sound, meaning there is no error."
  },
  {
    "question": "Identify the error: 'John / and Mary / is / here.'",
    "options": ["John", "and Mary", "is", "No error"],
    "answer": "is",
    "explanation": "The sentence reads: 'John and Mary is here.' The subject consists of two individuals linked by 'and', making it a compound plural subject equivalent to 'They'. A plural subject requires the plural verb 'are' instead of the singular 'is'. Corrected sentence: 'John and Mary are here.'"
  },
  {
    "question": "Identify the error: 'I / saw / an / dog.'",
    "options": ["I", "saw", "an", "No error"],
    "answer": "an",
    "explanation": "The sentence reads: 'I saw an dog.' The word 'dog' begins with a consonant sound (/d/). The indefinite article 'an' is only used before words starting with vowel sounds, whereas 'a' is used before consonant sounds. Corrected sentence: 'I saw a dog.'"
  },
  {
    "question": "Identify the error: 'He wants / to be / a actor / someday.'",
    "options": ["He wants", "to be", "a actor", "No error"],
    "answer": "a actor",
    "explanation": "The sentence reads: 'He wants to be a actor someday.' The noun 'actor' begins with the short vowel sound /æ/. Therefore, it must be preceded by the indefinite article 'an' instead of 'a'. Corrected sentence: 'He wants to be an actor someday.'"
  },
  {
    "question": "Identify the error: 'The sun / rises in / a / east.'",
    "options": ["The sun", "rises in", "a", "No error"],
    "answer": "a",
    "explanation": "The sentence reads: 'The sun rises in a east.' Geographical directions like east, west, north, and south refer to specific, unique points or areas. Therefore, they require the definite article 'the' instead of 'a'. Corrected sentence: 'The sun rises in the east.'"
  },
  {
    "question": "Identify the error: 'Please / close / a / door behind you.'",
    "options": ["Please", "close", "a", "No error"],
    "answer": "a",
    "explanation": "The sentence reads: 'Please close a door behind you.' Because the phrase specifies 'behind you', it points to one specific door that both the speaker and the listener can identify. Specific or unique items must use the definite article 'the'. Corrected sentence: 'Please close the door behind you.'"
  },
  {
    "question": "Identify the error: 'I / have / an / uniform.'",
    "options": ["I", "have", "an", "No error"],
    "answer": "an",
    "explanation": "The sentence reads: 'I have an uniform.' While 'uniform' starts with the vowel letter 'u', it is pronounced with the initial consonant sound /juː/ (like 'you'). Since article choice depends on sound, 'a' must be used instead of 'an'. Corrected sentence: 'I have a uniform.'"
  },
  {
    "question": "Identify the error: 'She / eats / an / apple.'",
    "options": ["She", "eats", "an", "No error"],
    "answer": "No error",
    "explanation": "The sentence reads: 'She eats an apple.' The singular subject 'She' matches the singular verb 'eats'. Furthermore, the article 'an' is correctly used before 'apple', which starts with a vowel sound. The sentence has no error."
  },
  {
    "question": "Identify the error: 'He / is / a / honest man.'",
    "options": ["He", "is", "a", "No error"],
    "answer": "a",
    "explanation": "The sentence reads: 'He is a honest man.' In the word 'honest', the letter 'h' is silent, meaning the word begins with the vowel sound /ɒ/. Because it sounds like it starts with a vowel, it requires the article 'an'. Corrected sentence: 'He is an honest man.'"
  },
  {
    "question": "Identify the error: 'We / visited / the / Manila.'",
    "options": ["We", "visited", "the", "No error"],
    "answer": "the",
    "explanation": "The sentence reads: 'We visited the Manila.' As a general rule in English grammar, singular proper nouns designated as names of cities, provinces, or states do not take an article before them. The word 'the' must be removed. Corrected sentence: 'We visited Manila.'"
  },
  {
    "question": "Identify the error: 'This / is / the / best cake.'",
    "options": ["This", "is", "the", "No error"],
    "answer": "No error",
    "explanation": "The sentence reads: 'This is the best cake.' The word 'best' is a superlative adjective. Superlative adjectives describe a unique item at the highest limit of a scale, meaning they must always be preceded by the definite article 'the'. There is no error."
  },
  {
    "question": "Identify the error: 'Me / and my friend / went / home.'",
    "options": ["Me", "and my friend", "went", "No error"],
    "answer": "Me",
    "explanation": "The sentence reads: 'Me and my friend went home.' The pronoun forms part of the compound subject performing the action. 'Me' is an object pronoun; the subjective case 'I' must be used instead. By polite convention, 'I' also comes second. Corrected sentence: 'My friend and I went home.'"
  },
  {
    "question": "Identify the error: 'Him / is / a / good student.'",
    "options": ["Him", "is", "a", "No error"],
    "answer": "Him",
    "explanation": "The sentence reads: 'Him is a good student.' 'Him' functions as an objective pronoun, which means it can only receive an action. Because this word acts as the main subject performing the state of being, it must be changed to the subject pronoun 'He'. Corrected sentence: 'He is a good student.'"
  },
  {
    "question": "Identify the error: 'The teacher / gave / we / homework.'",
    "options": ["The teacher", "gave", "we", "No error"],
    "answer": "we",
    "explanation": "The sentence reads: 'The teacher gave we homework.' In this clause, the pronoun functions as the indirect object receiving the action of the verb 'gave'. 'We' is a subject pronoun; the correct object pronoun to use here is 'us'. Corrected sentence: 'The teacher gave us homework.'"
  },
  {
    "question": "Identify the error: 'This book / belongs / to / my.'",
    "options": ["This book", "belongs", "to", "my"],
    "answer": "my",
    "explanation": "The sentence reads: 'This book belongs to my.' The word 'my' is a possessive adjective, which means it must immediately precede a noun (e.g., 'my book'). To stand alone at the end of a clause without a noun, a possessive pronoun like 'mine' is required. Corrected sentence: 'This book belongs to mine.'"
  },
  {
    "question": "Identify the error: 'Us / are / going / to the park.'",
    "options": ["Us", "are", "going", "No error"],
    "answer": "Us",
    "explanation": "The sentence reads: 'Us are going to the park.' The word 'Us' is placed at the beginning of the sentence to serve as the subject. However, 'us' is an object pronoun. The proper first-person plural subject pronoun is 'We'. Corrected sentence: 'We are going to the park.'"
  },
  {
    "question": "Identify the error: 'Between / you / and / I.'",
    "options": ["Between", "you", "and I", "No error"],
    "answer": "and I",
    "explanation": "The phrase reads: 'Between you and I.' The word 'between' is a preposition. In English grammar, any pronoun following a preposition must be in the objective case. While 'you' remains the same, 'I' is a subject pronoun and must be changed to 'me'. Corrected phrase: 'Between you and me.'"
  },
  {
    "question": "Identify the error: 'Them / boys / are / noisy.'",
    "options": ["Them", "boys", "are", "No error"],
    "answer": "Them",
    "explanation": "The sentence reads: 'Them boys are noisy.' 'Them' is an object pronoun and cannot be used to point out or modify a noun directly. To modify and point to the plural noun 'boys', you must use a demonstrative adjective like 'Those'. Corrected sentence: 'Those boys are noisy.'"
  },
  {
    "question": "Identify the error: 'My mom / cooked / for / he.'",
    "options": ["My mom", "cooked", "for", "he"],
    "answer": "he",
    "explanation": "The sentence reads: 'My mom cooked for he.' The word 'for' operates as a preposition. Pronouns acting as the object of a preposition must use objective forms. The subjective pronoun 'he' must be changed to its objective form, 'him'. Corrected sentence: 'My mom cooked for him.'"
  },
  {
    "question": "Identify the error: 'Is / that / bag / yours?'",
    "options": ["Is", "that", "bag", "No error"],
    "answer": "No error",
    "explanation": "The sentence reads: 'Is that bag yours?' The sentence is structured as a proper question. 'Yours' functions correctly here as a independent possessive pronoun indicating ownership without needing a following noun. There is no error."
  },
  {
    "question": "Identify the error: 'Her / likes / to / dance.'",
    "options": ["Her", "likes", "to", "No error"],
    "answer": "Her",
    "explanation": "The sentence reads: 'Her likes to dance.' The pronoun functions as the main subject performing the action of liking. 'Her' is either an object pronoun or a possessive adjective. It must be replaced by the subject pronoun 'She'. Corrected sentence: 'She likes to dance.'"
  },
  {
    "question": "Identify the error: 'She / was / born / in Monday.'",
    "options": ["She", "was", "born", "in"],
    "answer": "in",
    "explanation": "The sentence reads: 'She was born in Monday.' When choosing prepositions of time, specific calendar days of the week require the preposition 'on'. The preposition 'in' is wider and reserved for months, seasons, or years. Corrected sentence: 'She was born on Monday.'"
  },
  {
    "question": "Identify the error: 'The cat / is / at / the table.'",
    "options": ["The cat", "is", "at", "No error"],
    "answer": "at",
    "explanation": "The sentence reads: 'The cat is at the table.' While 'at the table' is common for humans eating or working, animals or inanimate items are positioned spatially relative to surfaces. The cat would typically be 'on' or 'under' the table. Corrected sentence: 'The cat is on the table.'"
  },
  {
    "question": "Identify the error: 'I / live / on / Cebu City.'",
    "options": ["I", "live", "on", "No error"],
    "answer": "on",
    "explanation": "The sentence reads: 'I live on Cebu City.' For standard spatial boundaries like cities, states, and countries, English requires the preposition 'in' to indicate enclosed location. 'On' is used for streets or surfaces. Corrected sentence: 'I live in Cebu City.'"
  },
  {
    "question": "Identify the error: 'He / arrived / at / January.'",
    "options": ["He", "arrived", "at", "No error"],
    "answer": "at",
    "explanation": "The sentence reads: 'He arrived at January.' Months of the year represent extended blocks of time rather than specific clock points. Therefore, they require the preposition 'in' instead of 'at'. Corrected sentence: 'He arrived in January.'"
  },
  {
    "question": "Identify the error: 'My birthday / is / in / July 5th.'",
    "options": ["My birthday", "is", "in", "No error"],
    "answer": "in",
    "explanation": "The sentence reads: 'My birthday is in July 5th.' Although months on their own take 'in' (e.g., in July), adding a specific day makes the entire phrase a specific date. Calendar dates always take the preposition 'on'. Corrected sentence: 'My birthday is on July 5th.'"
  },
  {
    "question": "Identify the error: 'The picture / is / in / the wall.'",
    "options": ["The picture", "is", "in", "No error"],
    "answer": "in",
    "explanation": "The sentence reads: 'The picture is in the wall.' A wall is a flat, vertical surface. To describe an object attached to or supported by any surface, English uses the preposition 'on'. 'In the wall' implies it is embedded inside the structure. Corrected sentence: 'The picture is on the wall.'"
  },
  {
    "question": "Identify the error: 'See / you / in / Friday.'",
    "options": ["See", "you", "in", "No error"],
    "answer": "in",
    "explanation": "The sentence reads: 'See you in Friday.' In English expressions concerning time, days of the week always take the preposition 'on'. The preposition 'in' cannot be paired directly with a single day. Corrected sentence: 'See you on Friday.'"
  },
  {
    "question": "Identify the error: 'I am / good / in / Math.'",
    "options": ["I am", "good", "in", "No error"],
    "answer": "in",
    "explanation": "The sentence reads: 'I am good in Math.' When expressing proficiency, talent, or skill in a certain subject or activity, the adjective 'good' idiomatically pairs with the preposition 'at', not 'in'. Corrected sentence: 'I am good at Math.'"
  },
  {
    "question": "Identify the error: 'He is / afraid / from / dogs.'",
    "options": ["He is", "afraid", "from", "No error"],
    "answer": "from",
    "explanation": "The sentence reads: 'He is afraid from dogs.' The adjective 'afraid' has a fixed prepositional collocation in English. It must always be followed by the preposition 'of' when specifying the source of fear. Corrected sentence: 'He is afraid of dogs.'"
  },
  {
    "question": "Identify the error: 'She / sings / very / good.'",
    "options": ["She", "sings", "very", "good"],
    "answer": "good",
    "explanation": "The sentence reads: 'She sings very good.' The word 'good' is an adjective used to describe nouns. To describe or modify an action verb like 'sings', you must use the corresponding adverb, which is 'well'. Corrected sentence: 'She sings very well.'"
  },
  {
    "question": "Identify the error: 'He / drives / very / careful.'",
    "options": ["He", "drives", "very", "careful"],
    "answer": "careful",
    "explanation": "The sentence reads: 'He drives very careful.' 'Careful' is an adjective meant to describe nouns. Because it is being used to modify the action verb 'drives', it needs to be transformed into an adverb by adding '-ly'. Corrected sentence: 'He drives very carefully.'"
  },
  {
    "question": "Identify the error: 'The soup / tastes / badly / today.'",
    "options": ["The soup", "tastes", "badly", "No error"],
    "answer": "badly",
    "explanation": "The sentence reads: 'The soup tastes badly today.' The verb 'tastes' functions here as a linking verb connecting the subject to a state of being, rather than an intentional action. Linking verbs must be followed by adjectives ('bad'), not adverbs ('badly'). Corrected sentence: 'The soup tastes bad today.'"
  },
  {
    "question": "Identify the error: 'She / speaks / soft / to the baby.'",
    "options": ["She", "speaks", "soft", "No error"],
    "answer": "soft",
    "explanation": "The sentence reads: 'She speaks soft to the baby.' The word 'soft' is an adjective. Since its structural role in this sentence is to describe how the action verb 'speaks' is performed, it must take the adverbial form 'softly'. Corrected sentence: 'She speaks softly to the baby.'"
  },
  {
    "question": "Identify the error: 'He / acts / polite / with guests.'",
    "options": ["He", "acts", "polite", "No error"],
    "answer": "polite",
    "explanation": "The sentence reads: 'He acts polite with guests.' The word 'polite' is an adjective. Because it describes the manner in which the subject performs the action verb 'acts', it must be converted to the adverb 'politely'. Corrected sentence: 'He acts politely with guests.'"
  },
  {
    "question": "Identify the error: 'This / is / a / real good movie.'",
    "options": ["This", "is", "a", "real good movie"],
    "answer": "real good movie",
    "explanation": "The sentence reads: 'This is a real good movie.' The word 'good' is an adjective modifying 'movie'. To modify an adjective, you must use an adverb of degree. 'Real' is an adjective; its adverb form 'really' is required here. Corrected sentence: 'This is a really good movie.'"
  },
  {
    "question": "Identify the error: 'She / looks / beautiful / tonight.'",
    "options": ["She", "looks", "beautiful", "No error"],
    "answer": "No error",
    "explanation": "The sentence reads: 'She looks beautiful tonight.' In this context, 'looks' serves as a linking verb describing the physical appearance of the subject. Linking verbs are correctly paired with adjectives ('beautiful') rather than adverbs. There is no error."
  },
  {
    "question": "Identify the error: 'I / can / run / quick.'",
    "options": ["I", "can", "run", "quick"],
    "answer": "quick",
    "explanation": "The sentence reads: 'I can run quick.' The word 'quick' is primarily an adjective. To modify the physical action verb 'run' in standard grammar, the adverbial form 'quickly' should be used. Corrected sentence: 'I can run quickly.'"
  },
  {
    "question": "Identify the error: 'He / is / a / slowly runner.'",
    "options": ["He", "is", "a", "slowly runner"],
    "answer": "slowly runner",
    "explanation": "The sentence reads: 'He is a slowly runner.' The word 'runner' is a noun. Nouns can only be modified by adjectives. 'Slowly' is an adverb; it must be changed back to its adjective form, 'slow'. Corrected sentence: 'He is a slow runner.'"
  },
  {
    "question": "Identify the error: 'They / worked / hardly / all day.'",
    "options": ["They", "worked", "hardly", "No error"],
    "answer": "hardly",
    "explanation": "The sentence reads: 'They worked hardly all day.' The adverb 'hardly' means 'almost not at all', which contradicts the context of working all day. To mean 'with great effort or energy', the adverb form is simply 'hard'. Corrected sentence: 'They worked hard all day.'"
  }
  ],

  intermediate: [
    {
    "question": "Identify the error: 'The box / of chocolates / are / missing.'",
    "options": ["The box", "of chocolates", "are", "No error"],
    "answer": "are",
    "explanation": "The sentence reads: 'The box of chocolates are missing.' In subject-verb agreement, intervening prepositional phrases like 'of chocolates' do not change the number of the true subject. The true subject is 'The box', which is singular. Therefore, the plural verb 'are' must be replaced with the singular verb 'is'. Corrected sentence: 'The box of chocolates is missing.'"
  },
  {
    "question": "Identify the error: 'The teacher, / along with students, / are / going.'",
    "options": ["The teacher,", "along with students,", "are", "No error"],
    "answer": "are",
    "explanation": "The sentence reads: 'The teacher, along with students, are going.' Additive phrases introduced by expressions such as 'along with', 'as well as', or 'together with' are not part of the grammatical subject. The true subject is 'The teacher', which is singular, requiring the singular verb 'is' instead of 'are'. Corrected sentence: 'The teacher, along with students, is going.'"
  },
  {
    "question": "Identify the error: 'One / of the boys / have / a bike.'",
    "options": ["One", "of the boys", "have", "No error"],
    "answer": "have",
    "explanation": "The sentence reads: 'One of the boys have a bike.' The subject of the sentence is the indefinite pronoun 'One', not the plural noun 'boys' found inside the prepositional modifier. Since 'One' is strictly singular, it requires the singular present tense verb 'has'. Corrected sentence: 'One of the boys has a bike.'"
  },
  {
    "question": "Identify the error: 'The list / of names / is / long.'",
    "options": ["The list", "of names", "is", "No error"],
    "answer": "No error",
    "explanation": "The sentence reads: 'The list of names is long.' The grammatical subject is 'The list', which is singular. The prepositional phrase 'of names' modifies the subject but does not alter its number. The singular verb 'is' correctly matches the singular subject 'list'. The sentence is completely error-free."
  },
  {
    "question": "Identify the error: 'Neither / of the answers / are / correct.'",
    "options": ["Neither", "of the answers", "are", "No error"],
    "answer": "are",
    "explanation": "The sentence reads: 'Neither of the answers are correct.' In formal English, the distributive indefinite pronoun 'Neither' means 'not the one and not the other'. It functions as a singular subject and must take a singular verb. Therefore, 'are' should be changed to 'is'. Corrected sentence: 'Neither of the answers is correct.'"
  },
  {
    "question": "Identify the error: 'The manager, / as well as clerks, / were / late.'",
    "options": ["The manager,", "as well as clerks,", "were", "No error"],
    "answer": "were",
    "explanation": "The sentence reads: 'The manager, as well as clerks, were late.' The phrase 'as well as clerks' is a parenthetical addition and does not make the subject compound. The main subject remains 'The manager', which is singular. Thus, the plural past verb 'were' must be replaced with 'was'. Corrected sentence: 'The manager, as well as clerks, was late.'"
  },
  {
    "question": "Identify the error: 'Each / of the girls / sing / beautifully.'",
    "options": ["Each", "of the girls", "sing", "No error"],
    "answer": "sing",
    "explanation": "The sentence reads: 'Each of the girls sing beautifully.' The word 'Each' is a singular indefinite pronoun that considers members of a group individually. Even though 'girls' is plural, the verb must agree with 'Each'. In the present tense, singular subjects require a verb ending in '-s', so 'sing' must be 'sings'. Corrected sentence: 'Each of the girls sings beautifully.'"
  },
  {
    "question": "Identify the error: 'The decision / of the judges / stand / final.'",
    "options": ["The decision", "of the judges", "stand", "No error"],
    "answer": "stand",
    "explanation": "The sentence reads: 'The decision of the judges stand final.' The plural noun 'judges' is the object of a preposition and cannot act as the subject. The true subject is 'The decision', which is a singular third-person noun. It requires the singular verb form 'stands'. Corrected sentence: 'The decision of the judges stands final.'"
  },
  {
    "question": "Identify the error: 'A bouquet / of yellow roses / lend / color.'",
    "options": ["A bouquet", "of yellow roses", "lend", "No error"],
    "answer": "lend",
    "explanation": "The sentence reads: 'A bouquet of yellow roses lend color.' The subject is 'A bouquet', which is a singular collective noun phrase acting as a unit. The plural noun 'roses' inside the descriptive phrase does not affect the verb. The verb must be changed from 'lend' to 'lends'. Corrected sentence: 'A bouquet of yellow roses lends color.'"
  },
  {
    "question": "Identify the error: 'The noise / of cars / annoy / me.'",
    "options": ["The noise", "of cars", "annoy", "No error"],
    "answer": "annoy",
    "explanation": "The sentence reads: 'The noise of cars annoy me.' The verb must agree with the head noun of the subject phrase, which is 'noise' (singular and uncountable), rather than the adjacent plural noun 'cars'. A singular subject requires the third-person verb form 'annoys'. Corrected sentence: 'The noise of cars annoys me.'"
  },
  {
    "question": "Identify the error: 'She / lived / here / since 2010.'",
    "options": ["She", "lived", "here", "since 2010"],
    "answer": "lived",
    "explanation": "The sentence reads: 'She lived here since 2010.' The time marker 'since 2010' indicates an action that began in the past and continues up to the present moment. This requires the present perfect tense rather than the simple past. Therefore, 'lived' should be replaced with 'has lived'. Corrected sentence: 'She has lived here since 2010.'"
  },
  {
    "question": "Identify the error: 'I / have seen / him / yesterday.'",
    "options": ["I", "have seen", "him", "yesterday"],
    "answer": "have seen",
    "explanation": "The sentence reads: 'I have seen him yesterday.' The adverb 'yesterday' specifies a distinct, completely finished point in past time. The present perfect tense ('have seen') cannot be paired with specific past time markers. It must be replaced with the simple past tense 'saw'. Corrected sentence: 'I saw him yesterday.'"
  },
  {
    "question": "Identify the error: 'When we arrived, / the train / already / left.'",
    "options": ["When we arrived,", "the train", "already", "left"],
    "answer": "left",
    "explanation": "The sentence reads: 'When we arrived, the train already left.' When describing two interrelated actions in the past, the action that happened prior to the other must be expressed in the past perfect tense. Since the train left before the arrival, 'left' must be changed to 'had already left'. Corrected sentence: 'When we arrived, the train had already left.'"
  },
  {
    "question": "Identify the error: 'I / am knowing / him / for years.'",
    "options": ["I", "am knowing", "him", "No error"],
    "answer": "am knowing",
    "explanation": "The sentence reads: 'I am knowing him for years.' The verb 'know' is a stative verb that represents a state of mind rather than a physical action, meaning it cannot be used in continuous or progressive forms. Combined with the duration 'for years', it should use the present perfect form 'have known'. Corrected sentence: 'I have known him for years.'"
  },
  {
    "question": "Identify the error: 'She / has / wrote / a letter.'",
    "options": ["She", "has", "wrote", "No error"],
    "answer": "wrote",
    "explanation": "The sentence reads: 'She has wrote a letter.' The perfect aspect requires an auxiliary verb ('has') combined with the past participle form of the main verb. 'Wrote' is the simple past form of the irregular verb 'write'. It must be changed to its past participle form, 'written'. Corrected sentence: 'She has written a letter.'"
  },
  {
    "question": "Identify the error: 'I / didn't / went / to work.'",
    "options": ["I", "didn't", "went", "No error"],
    "answer": "went",
    "explanation": "The sentence reads: 'I didn't went to work.' In English negative structures utilizing the past auxiliary 'did' or 'didn't', the tense is already carried by the auxiliary. The main verb that follows must remain in its base form. Therefore, 'went' must be changed to 'go'. Corrected sentence: 'I didn't go to work.'"
  },
  {
    "question": "Identify the error: 'By next year, / I / finish / my degree.'",
    "options": ["By next year,", "I", "finish", "No error"],
    "answer": "finish",
    "explanation": "The sentence reads: 'By next year, I finish my degree.' The phrase 'By next year' sets a future deadline for a completed task. To show that an action will be completed prior to a specific point in the future, the future perfect tense ('will have finished') must be used instead of the simple present. Corrected sentence: 'By next year, I will have finished my degree.'"
  },
  {
    "question": "Identify the error: 'He / has / began / the project.'",
    "options": ["He", "has", "began", "No error"],
    "answer": "began",
    "explanation": "The sentence reads: 'He has began the project.' The auxiliary verb 'has' forms the present perfect tense and must be followed by a past participle. The principal forms of this irregular verb are 'begin' (base), 'began' (past), and 'begun' (past participle). Thus, 'began' must be corrected to 'begun'. Corrected sentence: 'He has begun the project.'"
  },
  {
    "question": "Identify the error: 'If I / know / you were coming, / I would have stayed.'",
    "options": ["If I", "know", "you were coming,", "I would have stayed"],
    "answer": "know",
    "explanation": "The sentence reads: 'If I know you were coming, I would have stayed.' This is a third conditional sentence expressing a hypothetical past situation. The main clause uses 'would have stayed', meaning the conditional 'if' clause must utilize the past perfect tense ('had known') instead of the simple present 'know'. Corrected sentence: 'If I had known you were coming, I would have stayed.'"
  },
  {
    "question": "Identify the error: 'She / is / sleeping / for two hours.'",
    "options": ["She", "is", "sleeping", "No error"],
    "answer": "is",
    "explanation": "The sentence reads: 'She is sleeping for two hours.' The addition of 'for two hours' emphasizes the duration of an ongoing action that started in the past. The present continuous tense ('is sleeping') cannot express duration over time; the present perfect continuous form 'has been sleeping' is required. Corrected sentence: 'She has been sleeping for two hours.'"
  },
  {
    "question": "Identify the error: 'I / don't have / no / money.'",
    "options": ["I", "don't have", "no", "No error"],
    "answer": "no",
    "explanation": "The sentence reads: 'I don't have no money.' This sentence contains a double negative, as 'don't' (do not) and 'no' are both negative elements that cancel each other out in standard English. To maintain the negative meaning properly, 'no' must be switched to the determiner 'any'. Corrected sentence: 'I don't have any money.'"
  },
  {
    "question": "Identify the error: 'He / can't / hardly / see.'",
    "options": ["He", "can't", "hardly", "No error"],
    "answer": "can't",
    "explanation": "The sentence reads: 'He can't hardly see.' The word 'hardly' possesses a restrictive, inherently negative grammatical weight meaning 'almost not at all'. Pairing it with the negative contraction 'can't' creates an ungrammatical double negative. 'Can't' should be changed to the positive auxiliary 'can'. Corrected sentence: 'He can hardly see.'"
  },
  {
    "question": "Identify the error: 'Please / repeat / that / again.'",
    "options": ["Please", "repeat", "that", "again"],
    "answer": "again",
    "explanation": "The sentence reads: 'Please repeat that again.' The definition of the verb 'repeat' is to say, do, or produce something once more. Adding the adverb 'again' at the end creates an unnecessary grammatical redundancy. The word 'again' should be deleted. Corrected sentence: 'Please repeat that.'"
  },
  {
    "question": "Identify the error: 'The / reason is / because / he was late.'",
    "options": ["The", "reason is", "because", "No error"],
    "answer": "because",
    "explanation": "The sentence reads: 'The reason is because he was late.' The phrase 'The reason is' inherently introduces a cause, making the subordinating conjunction 'because' redundant. In formal writing, the linking verb 'is' should introduce a noun clause beginning with 'that'. Corrected sentence: 'The reason is that he was late.'"
  },
  {
    "question": "Identify the error: 'She / returned / back / home.'",
    "options": ["She", "returned", "back", "No error"],
    "answer": "back",
    "explanation": "The sentence reads: 'She returned back home.' The definition of the verb 'return' is to go or come back to a place. Including the directional adverb 'back' directly duplicates the meaning already built into the verb, resulting in pleonasm. The word 'back' must be removed. Corrected sentence: 'She returned home.'"
  },
  {
    "question": "Identify the error: 'He / hasn't / never / been there.'",
    "options": ["He", "hasn't", "never", "No error"],
    "answer": "never",
    "explanation": "The sentence reads: 'He hasn't never been there.' This represents a double negative conflict caused by combining the contraction 'hasn't' (has not) with the negative adverb 'never'. To correct this sentence while keeping its intent, 'never' should be replaced with 'ever'. Corrected sentence: 'He hasn't ever been there.'"
  },
  {
    "question": "Identify the error: 'Advance / forward / to the / next level.'",
    "options": ["Advance", "forward", "to the", "No error"],
    "answer": "forward",
    "explanation": "The sentence reads: 'Advance forward to the next level.' The verb 'advance' means to move forward in a purposeful way. Using the word 'forward' alongside it is completely redundant since one cannot advance backward. Eliminating 'forward' streamlines the sentence. Corrected sentence: 'Advance to the next level.'"
  },
  {
    "question": "Identify the error: 'The / ATM machine / is / broken.'",
    "options": ["The", "ATM machine", "is", "No error"],
    "answer": "ATM machine",
    "explanation": "The sentence reads: 'The ATM machine is broken.' This is an instance of Redundant Acronym Syndrome (RAS). The letter 'M' in the acronym ATM already stands for 'Machine' (Automated Teller Machine). Saying 'ATM machine' is equivalent to saying 'Automated Teller Machine machine'. Corrected sentence: 'The ATM is broken.'"
  },
  {
    "question": "Identify the error: 'I / could / care / less.'",
    "options": ["I", "could", "care", "less"],
    "answer": "could",
    "explanation": "The phrase reads: 'I could care less.' Taken literally, saying you 'could' care less implies that you still care a certain amount. To idiomatically convey that you have absolutely no interest or care left, you must use the negative contraction 'couldn't'. Corrected sentence: 'I couldn't care less.'"
  },
  {
    "question": "Identify the error: 'Irregardless / of the weather, / we / go.'",
    "options": ["Irregardless", "of the weather,", "we", "go"],
    "answer": "Irregardless",
    "explanation": "The sentence reads: 'Irregardless of the weather, we go.' The word 'Irregardless' is considered non-standard because the prefix 'ir-' and the suffix '-less' are both negative, creating a redundant structure. The standard adverb to use is 'Regardless'. Corrected sentence: 'Regardless of the weather, we go.'"
  },
  {
    "question": "Identify the error: 'She likes / swimming, / hiking, / and to run.'",
    "options": ["She likes", "swimming,", "hiking,", "and to run"],
    "answer": "and to run",
    "explanation": "The sentence reads: 'She likes swimming, hiking, and to run.' The rules of parallel structure demand that coordinate elements in a series share the same grammatical form. The first two items are gerunds ('swimming', 'hiking'), so the final item must match them as a gerund ('running') instead of an infinitive. Corrected sentence: 'She likes swimming, hiking, and running.'"
  },
  {
    "question": "Identify the error: 'The movie / was / long, / boring, and loud noise.'",
    "options": ["The movie", "was", "long,", "boring, and loud noise"],
    "answer": "boring, and loud noise",
    "explanation": "The sentence reads: 'The movie was long, boring, and loud noise.' The predicate adjectives 'long' and 'boring' establish a pattern describing the movie's attributes. The phrase 'loud noise' breaks parallelism because it is a noun phrase. It must be converted into a matching adjective, 'loud'. Corrected sentence: 'The movie was long, boring, and loud.'"
  },
  {
    "question": "Identify the error: 'He wants / to travel / and / working abroad.'",
    "options": ["He wants", "to travel", "and", "working abroad"],
    "answer": "working abroad",
    "explanation": "The sentence reads: 'He wants to travel and working abroad.' The infinitive verb 'wants' connects to a coordinated list of compound objects. The first item uses the infinitive form 'to travel', meaning the second element must also match as a base form verb ('work') instead of a gerund phrase. Corrected sentence: 'He wants to travel and work abroad.'"
  },
  {
    "question": "Identify the error: 'She is / smart, / beautiful, / and a doctor.'",
    "options": ["She is", "smart,", "beautiful,", "and a doctor"],
    "answer": "and a doctor",
    "explanation": "The sentence reads: 'She is smart, beautiful, and a doctor.' This list links elements to the subject using the copular verb 'is'. The first two descriptive terms are adjectives ('smart', 'beautiful'). Introducing the noun phrase 'a doctor' violates parallelism. It should match the previous elements by using an adjective like 'professional', or the sentence must be rephrased. Corrected sentence: 'She is smart, beautiful, and professional.'"
  },
  {
    "question": "Identify the error: 'You can / go by / bus or / take a train.'",
    "options": ["You can", "go by", "bus or", "take a train"],
    "answer": "take a train",
    "explanation": "The sentence reads: 'You can go by bus or take a train.' For ideal balancing and parallel symmetry, prepositional choices or phrasing structures should match across coordinating conjunctions. 'By bus' should match with 'by train' to sustain identical grammatical construction. Corrected sentence: 'You can go by bus or by train.'"
  },
  {
    "question": "Identify the error: 'To / learn is / to / growing.'",
    "options": ["To", "learn is", "to", "growing"],
    "answer": "growing",
    "explanation": "The sentence reads: 'To learn is to growing.' This sentence matches two abstract ideas across the linking verb 'is'. The subject is an infinitive phrase ('To learn'). To keep parallel structural balance, the predicate completion must be an infinitive ('to grow') rather than a gerund component. Corrected sentence: 'To learn is to grow.'"
  },
  {
    "question": "Identify the error: 'He spoke / clearly, / eloquently, / and with confidence.'",
    "options": ["He spoke", "clearly,", "eloquently,", "and with confidence"],
    "answer": "and with confidence",
    "explanation": "The sentence reads: 'He spoke clearly, eloquently, and with confidence.' The action verb 'spoke' is modified by a series of manners. The first two descriptors are adverbs ('clearly', 'eloquently'). The prepositional phrase 'with confidence' disrupts this parallel series and must be changed to the adverb 'confidently'. Corrected sentence: 'He spoke clearly, eloquently, and confidently.'"
  },
  {
    "question": "Identify the error: 'I prefer / reading / to / write.'",
    "options": ["I prefer", "reading", "to", "write"],
    "answer": "write",
    "explanation": "The sentence reads: 'I prefer reading to write.' The verb pattern for 'prefer' comparing two activities utilizes the formula 'prefer [gerund] to [gerund]'. Since the first object is the gerund 'reading', the item following the preposition 'to' must also be the gerund 'writing'. Corrected sentence: 'I prefer reading to writing.'"
  },
  {
    "question": "Identify the error: 'My goals are / to save money, / buying a house, / and retiring.'",
    "options": ["My goals are", "to save money,", "buying a house,", "No error"],
    "answer": "buying a house,",
    "explanation": "The sentence reads: 'My goals are to save money, buying a house, and retiring.' The initial goal listed uses an infinitive structure ('to save'). To establish parallelism across the series, the subsequent gerund structures must be reformatted into infinitives ('to buy' and 'to retire'). Corrected sentence: 'My goals are to save money, to buy a house, and to retire.'"
  },
  {
    "question": "Identify the error: 'Not only / is he rich, / but also / famous.'",
    "options": ["Not only", "is he rich,", "but also", "famous"],
    "answer": "is he rich,",
    "explanation": "The sentence reads: 'Not only is he rich, but also famous.' Correlative conjunctions like 'not only... but also' must connect grammatically identical elements. Placing the clause 'is he rich' directly after the first part requires a matching clause later. Moving the verb to the front balances the adjectives. Corrected sentence: 'He is not only rich but also famous.'"
  },
  {
    "question": "Identify the error: 'Walking / down the street, / the trees / looked beautiful.'",
    "options": ["Walking", "down the street,", "the trees", "looked beautiful"],
    "answer": "the trees",
    "explanation": "The sentence reads: 'Walking down the street, the trees looked beautiful.' This sentence contains a dangling modifier. The opening phrase 'Walking down the street' describes an action, but the subject that immediately follows is 'the trees'. This implies the trees themselves were walking, which is illogical. A human subject like 'I' or 'we' must be introduced. Corrected sentence: 'Walking down the street, I thought the trees looked beautiful.'"
  },
  {
    "question": "Identify the error: 'She served / sandwiches to the kids / on / paper plates.'",
    "options": ["She served", "sandwiches to the kids", "on", "paper plates"],
    "answer": "sandwiches to the kids",
    "explanation": "The sentence reads: 'She served sandwiches to the kids on paper plates.' This structure contains a misplaced modifier, because the prepositional phrase 'on paper plates' is positioned next to 'the kids', making it sound as if the children were sitting on the plates. The modifier must be placed closer to 'sandwiches'. Corrected sentence: 'She served sandwiches on paper plates to the kids.'"
  },
  {
    "question": "Identify the error: 'Covered / in cheese, / I ate / the pizza.'",
    "options": ["Covered", "in cheese,", "I ate", "the pizza"],
    "answer": "I ate",
    "explanation": "The sentence reads: 'Covered in cheese, I ate the pizza.' The introductory modifier 'Covered in cheese' naturally attaches to the nearest noun phrase, which is 'I'. This creates a dangling/misplaced modifier suggesting that the speaker was covered in cheese. The phrase must be relocated next to 'the pizza'. Corrected sentence: 'I ate the pizza covered in cheese.'"
  },
  {
    "question": "Identify the error: 'To get / a good grade, / studying / is necessary.'",
    "options": ["To get", "a good grade,", "studying", "is necessary"],
    "answer": "studying",
    "explanation": "The sentence reads: 'To get a good grade, studying is necessary.' The introductory infinitive phrase 'To get a good grade' states an intention or action that can only be performed by a person. However, the subject provided is the abstract action 'studying'. A logical agent or person must be the subject of the clause. Corrected sentence: 'To get a good grade, you must study.'"
  },
  {
    "question": "Identify the error: 'Barking / loudly, / John / shouted at the dog.'",
    "options": ["Barking", "loudly,", "John", "shouted at the dog"],
    "answer": "John",
    "explanation": "The sentence reads: 'Barking loudly, John shouted at the dog.' The participial phrase 'Barking loudly' modifies the closest noun phrase, which is 'John'. This creates a highly confusing image where John is the one barking. The modifier must be reframed to clearly describe the dog. Corrected sentence: 'John shouted at the dog that was barking loudly.'"
  },
  {
    "question": "Identify the error: 'He / nearly drove / for / six hours.'",
    "options": ["He", "nearly drove", "for", "six hours"],
    "answer": "nearly drove",
    "explanation": "The sentence reads: 'He nearly drove for six hours.' The limiting modifier 'nearly' is misplaced. Placing it before 'drove' implies that he almost started driving but never actually did. To accurately reflect that he did drive, but the duration was just under six hours, 'nearly' must modify the time. Corrected sentence: 'He drove for nearly six hours.'"
  },
  {
    "question": "Identify the error: 'I / only have / five / dollars.'",
    "options": ["I", "only have", "five", "dollars"],
    "answer": "only have",
    "explanation": "The sentence reads: 'I only have five dollars.' In strict formal grammar, the placement of the word 'only' must be positioned directly before the specific word or phrase it intends to limit. Placing it before 'have' modifies the action of possession itself rather than limiting the quantity of the money. Corrected sentence: 'I have only five dollars.'"
  },
  {
    "question": "Identify the error: 'After / rotting / in the cellar, / mom threw the apples.'",
    "options": ["After", "rotting", "in the cellar,", "mom threw the apples"],
    "answer": "mom threw the apples",
    "explanation": "The sentence reads: 'After rotting in the cellar, mom threw the apples.' The opening modifying clause 'After rotting in the cellar' specifies a condition that applies to the noun that immediately follows. Because 'mom' is placed right after the comma, it falsely asserts that Mom was rotting. The apples must be the subject. Corrected sentence: 'After the apples rotted in the cellar, mom threw them away.'"
  },
  {
    "question": "Identify the error: 'The woman / walked the dog / in / a bikini.'",
    "options": ["The woman", "walked the dog", "in", "a bikini"],
    "answer": "walked the dog",
    "explanation": "The sentence reads: 'The woman walked the dog in a bikini.' This phrasing creates ambiguity due to a misplaced modifier. Because 'in a bikini' is positioned right next to 'the dog', it implies the dog was wearing the bikini. To fix this, the descriptive phrase should be placed directly next to 'The woman'. Corrected sentence: 'The woman in a bikini walked the dog.'"
  },
  {
    "question": "Identify the error: 'He / bought a horse / for his sister / called Prince.'",
    "options": ["He", "bought a horse", "for his sister", "called Prince"],
    "answer": "for his sister",
    "explanation": "The sentence reads: 'He bought a horse for his sister called Prince.' The modifying phrase 'called Prince' is misplaced because it sits adjacent to 'his sister', which structurally suggests that the sister is named Prince. To align the meaning correctly, the name phrase must follow the word 'horse'. Corrected sentence: 'He bought a horse called Prince for his sister.'"
  }
  ],

  advanced: [
     {
    "question": "Identify the error: 'Never / I have / seen / such a thing.'",
    "options": ["Never", "I have", "seen", "No error"],
    "answer": "I have",
    "explanation": "The sentence reads: 'Never I have seen such a thing.' Under the rules of negative inversion, when a sentence begins with an emphatic negative adverb or restrictive word like 'Never', 'Seldom', or 'Rarely', the subject and the auxiliary verb must be inverted. Therefore, the subject-verb order 'I have' must be changed to the inverted form 'have I'. Corrected sentence: 'Never have I seen such a thing.'"
  },
  {
    "question": "Identify the error: 'I suggest / that he / stops / smoking.'",
    "options": ["I suggest", "that he", "stops", "No error"],
    "answer": "stops",
    "explanation": "The sentence reads: 'I suggest that he stops smoking.' The verb 'suggest' triggers the mandative subjunctive mood in the dependent 'that' clause, which is used to express demands, suggestions, or necessities. The subjunctive mood requires the bare base form of the verb, regardless of the subject. Therefore, the third-person singular form 'stops' must be changed to 'stop'. Corrected sentence: 'I suggest that he stop smoking.'"
  },
  {
    "question": "Identify the error: 'If I / was / you, / I would accept.'",
    "options": ["If I", "was", "you,", "I would accept"],
    "answer": "was",
    "explanation": "The sentence reads: 'If I was you, I would accept.' This sentence is a second conditional structure expressing a hypothetical, counterfactual, or unreal present situation. In formal English, the hypothetical subjunctive mood requires the use of 'were' for all subjects, including first and third-person singular pronouns ('I', 'he', 'she', 'it'). Thus, 'was' must be changed to 'were'. Corrected sentence: 'If I were you, I would accept.'"
  },
  {
    "question": "Identify the error: 'Rarely / we do / go / to the cinema.'",
    "options": ["Rarely", "we do", "go", "No error"],
    "answer": "we do",
    "explanation": "The sentence reads: 'Rarely we do go to the cinema.' The restrictive adverb 'Rarely' placed at the very beginning of the sentence mandates subject-auxiliary inversion to maintain proper rhetorical structure. The standard word order 'we do' must be inverted so that the auxiliary verb precedes the subject pronoun. Corrected sentence: 'Rarely do we go to the cinema.'"
  },
  {
    "question": "Identify the error: 'It is / important that / she / is on time.'",
    "options": ["It is", "important that", "she", "is on time"],
    "answer": "is on time",
    "explanation": "The sentence reads: 'It is important that she is on time.' The adjective 'important' introduces a clause expressing necessity or urgency, which triggers the subjunctive mood. The subjunctive form of the verb 'to be' is always 'be', regardless of the subject tense or person. Therefore, the indicative form 'is' must be replaced with the base form 'be'. Corrected sentence: 'It is important that she be on time.'"
  },
  {
    "question": "Identify the error: 'Not only / he is / rich, / but also famous.'",
    "options": ["Not only", "he is", "rich,", "No error"],
    "answer": "he is",
    "explanation": "The sentence reads: 'Not only he is rich, but also famous.' When the correlative conjunction phrase 'Not only' introduces a main clause at the beginning of a sentence, it acts as a negative element that triggers a mandatory subject-verb inversion. The declarative ordering 'he is' must be inverted into the interrogative-style structure 'is he'. Corrected sentence: 'Not only is he rich, but also famous.'"
  },
  {
    "question": "Identify the error: 'I wish / I / know / the answer.'",
    "options": ["I wish", "I", "know", "No error"],
    "answer": "know",
    "explanation": "The sentence reads: 'I wish I know the answer.' Expressions using the verb 'wish' to describe a desire for a different reality in the present require the past subjunctive mood to show that the situation is hypothetical or unfulfilled. The simple present tense 'know' must be changed to the simple past tense form 'knew'. Corrected sentence: 'I wish I knew the answer.'"
  },
  {
    "question": "Identify the error: 'Had / I / knew, / I would have come.'",
    "options": ["Had", "I", "knew,", "No error"],
    "answer": "knew,",
    "explanation": "The sentence reads: 'Had I knew, I would have come.' This sentence uses an inverted third conditional structure to express a past hypothesis. The past perfect inversion begins with the auxiliary 'Had', which must be paired with the past participle form of the main verb. The simple past form 'knew' must be changed to the past participle 'known'. Corrected sentence: 'Had I known, I would have come.'"
  },
  {
    "question": "Identify the error: 'Little / he knew / about / the surprise.'",
    "options": ["Little", "he knew", "about", "No error"],
    "answer": "he knew",
    "explanation": "The sentence reads: 'Little he knew about the surprise.' The word 'Little' is used here as a restrictive or negative adverb at the opening of the clause, which requires a subject-auxiliary inversion. To invert a simple past verb like 'knew', you must introduce the past auxiliary 'did' and return the main verb to its base form. Corrected sentence: 'Little did he know about the surprise.'"
  },
  {
    "question": "Identify the error: 'God / blesses / the / Philippines.'",
    "options": ["God", "blesses", "the", "No error"],
    "answer": "blesses",
    "explanation": "The sentence reads: 'God blesses the Philippines.' While 'blesses' is correct in a standard indicative sentence describing a regular action, this specific phrasing functions as a formulaic or optative subjunctive expression used in prayers, blessings, or traditional wishes. Formulaic subjunctives require the bare base form of the verb, meaning 'blesses' must be changed to 'bless'. Corrected sentence: 'God bless the Philippines.'"
  },
  {
    "question": "Identify the error: 'Who / did you / give / the book to?'",
    "options": ["Who", "did you", "give", "No error"],
    "answer": "Who",
    "explanation": "The sentence reads: 'Who did you give the book to?' In strict formal grammar, pronouns that serve as the object of a verb or a preposition must use the objective case. Here, the pronoun is the grammatical object of the terminal preposition 'to' (i.e., 'you did give the book to [someone]'). Therefore, the subjective pronoun 'Who' must be changed to the objective form 'Whom'. Corrected sentence: 'Whom did you give the book to?'"
  },
  {
    "question": "Identify the error: 'He is / the man / whom / I think stole it.'",
    "options": ["He is", "the man", "whom", "No error"],
    "answer": "whom",
    "explanation": "The sentence reads: 'He is the man whom I think stole it.' To determine the correct pronoun case, parenthetical insertions like 'I think', 'I believe', or 'we suspect' should be set aside. The relative pronoun functions as the true subject of the dependent clause verb 'stole' ('[who] stole it'). Because a subject requires the nominative case, the objective pronoun 'whom' must be corrected to 'who'. Corrected sentence: 'He is the man who I think stole it.'"
  },
  {
    "question": "Identify the error: 'Give it / to / whomever / wants it.'",
    "options": ["Give it", "to", "whomever", "No error"],
    "answer": "whomever",
    "explanation": "The sentence reads: 'Give it to whomever wants it.' Although the pronoun immediately follows the preposition 'to', it actually functions as the subject for the verb 'wants' inside the relative clause ('[whoever] wants it'). The rule of grammar dictating that a relative clause subject must be in the nominative case overrides the preposition's object rule. Thus, 'whomever' must be changed to 'whoever'. Corrected sentence: 'Give it to whoever wants it.'"
  },
  {
    "question": "Identify the error: 'Us / students / need / more time.'",
    "options": ["Us", "students", "need", "No error"],
    "answer": "Us",
    "explanation": "The sentence reads: 'Us students need more time.' The phrase 'Us students' serves as the complete compound subject of the verb 'need'. When a pronoun is modified by an appositive noun like 'students', the pronoun must maintain the case required by its syntactic position. Dropping the noun 'students' reveals that 'Us need' is incorrect; it must use the nominative pronoun 'We'. Corrected sentence: 'We students need more time.'"
  },
  {
    "question": "Identify the error: 'She is / taller / than / me.'",
    "options": ["She is", "taller", "than", "me"],
    "answer": "me",
    "explanation": "The sentence reads: 'She is taller than me.' In strict formal grammar, the word 'than' functions as a conjunction introducing an elliptical clause of comparison where the verb is omitted but understood (i.e., 'than I am'). Because the pronoun is the subject of this implied clause, it must use the nominative case 'I' instead of the objective case 'me'. Corrected sentence: 'She is taller than I.'"
  },
  {
    "question": "Identify the error: 'It was / him / who / called.'",
    "options": ["It was", "him", "who", "No error"],
    "answer": "him",
    "explanation": "The sentence reads: 'It was him who called.' The pronoun follows the past tense form of the linking verb 'to be' ('was'). In formal or classical grammar rules, a pronoun following a copular verb must be a predicate nominative, which matches the subjective case of the main sentence subject. Therefore, the objective pronoun 'him' must be changed to 'he'. Corrected sentence: 'It was he who called.'"
  },
  {
    "question": "Identify the error: 'Everyone / has / their / own opinion.'",
    "options": ["Everyone", "has", "their", "No error"],
    "answer": "their",
    "explanation": "The sentence reads: 'Everyone has their own opinion.' The indefinite pronoun 'Everyone' is grammatically singular and requires a singular verb ('has'). To maintain absolute singular agreement throughout the sentence in traditional formal examinations, the possessive pronoun modifying 'opinion' must also be singular. The plural 'their' should be updated to the singular construction 'his or her'. Corrected sentence: 'Everyone has his or her own opinion.'"
  },
  {
    "question": "Identify the error: 'Between / you / and / I.'",
    "options": ["Between", "you", "and", "I"],
    "answer": "I",
    "explanation": "The phrase reads: 'Between you and I.' The word 'Between' is a preposition, and all pronouns paired with it inside a prepositional phrase must function as compound objects of the preposition. Objects must always be in the objective case. While 'you' is the same in both cases, the nominative pronoun 'I' must be changed to the objective pronoun 'me'. Corrected sentence: 'Between you and me.'"
  },
  {
    "question": "Identify the error: 'The jury / gave / their / verdict.'",
    "options": ["The jury", "gave", "their", "No error"],
    "answer": "their",
    "explanation": "The sentence reads: 'The jury gave their verdict.' 'The jury' is a collective noun. When a collective noun acts together as a single, unanimous, and cohesive institutional unit, it is treated as singular. Consequently, any pronouns referring back to it must also be singular. The plural pronoun 'their' should be changed to the singular neutral pronoun 'its'. Corrected sentence: 'The jury gave its verdict.'"
  },
  {
    "question": "Identify the error: 'Myself / will / handle / the project.'",
    "options": ["Myself", "will", "handle", "No error"],
    "answer": "Myself",
    "explanation": "The sentence reads: 'Myself will handle the project.' Intensive or reflexive pronouns ending in '-self' cannot be used as the independent grammatical subject of a sentence, as they require a preceding noun or pronoun antecedent in the same clause to refer back to. The reflexive pronoun 'Myself' must be replaced with the standard nominative subject pronoun 'I'. Corrected sentence: 'I will handle the project.'"
  },
  {
    "question": "Identify the error: 'We / discussed / about / the problem.'",
    "options": ["We", "discussed", "about", "No error"],
    "answer": "about",
    "explanation": "The sentence reads: 'We discussed about the problem.' The word 'discuss' is a transitive verb that directly carries the meaning of 'to talk about' or 'to debate'. Because the prepositional concept of 'about' is already embedded inside the meaning of the verb itself, adding 'about' immediately after create an ungrammatical redundancy. The word 'about' should be deleted. Corrected sentence: 'We discussed the problem.'"
  },
  {
    "question": "Identify the error: 'She / married / with / a doctor.'",
    "options": ["She", "married", "with", "No error"],
    "answer": "with",
    "explanation": "The sentence reads: 'She married with a doctor.' In this sentence structure, 'marry' functions as an active transitive verb, meaning it requires a direct object without an intervening preposition. Using the preposition 'with' is an ungrammatical idiom transfer error. To correct it, 'with' should be removed, or the sentence must be rephrased using the passive state 'was married to'. Corrected sentence: 'She married a doctor.'"
  },
  {
    "question": "Identify the error: 'I / entered / into / the room.'",
    "options": ["I", "entered into the room.", "into", "No error"],
    "answer": "into",
    "explanation": "The sentence reads: 'I entered into the room.' When 'enter' refers to physically moving into a literal geographical space or structure, it is a transitive verb that takes a direct object immediately without prepositions. The phrase 'entered into' is reserved for metaphorical references like entering into an agreement or a contract. The word 'into' must be dropped. Corrected sentence: 'I entered the room.'"
  },
  {
    "question": "Identify the error: 'He / lacks / of / confidence.'",
    "options": ["He", "lacks", "of", "No error"],
    "answer": "of",
    "explanation": "The sentence reads: 'He lacks of confidence.' It is vital to separate the noun form from the verb form. The noun phrase 'a lack of' requires a preposition, but here, 'lacks' is acting directly as the main active verb of the subject 'He'. Active transitive verbs take direct objects without modifiers, so the preposition 'of' is incorrect and must be deleted. Corrected sentence: 'He lacks confidence.'"
  },
  {
    "question": "Identify the error: 'Despite / of / the rain, / we played.'",
    "options": ["Despite", "of", "the rain,", "No error"],
    "answer": "of",
    "explanation": "The sentence reads: 'Despite of the rain, we played.' This is a common prepositional confusion error. English possesses two distinct concessive phrases: the three-word phrase 'In spite of' and the single-word preposition 'Despite'. Combining the two into 'Despite of' is ungrammatical. The word 'of' must be removed. Corrected sentence: 'Despite the rain, we played.'"
  },
  {
    "question": "Identify the error: 'Comprised / of / many / elements.'",
    "options": ["Comprised", "of", "many", "No error"],
    "answer": "Comprised",
    "explanation": "The phrase reads: 'Comprised of many elements.' The verb 'comprise' literally means 'to contain', 'to include', or 'to embrace' as a whole. A classic rule of style states that the whole comprises its parts, meaning 'comprised' cannot be followed by 'of' in the active voice. To fix this, you can change the word to 'Composed' (which pairs with 'of') or use 'comprise' actively. Corrected sentence: 'Composed of many elements.'"
  },
  {
    "question": "Identify the error: 'Please / await / for / further instructions.'",
    "options": ["Please", "await", "for", "No error"],
    "answer": "for",
    "explanation": "The sentence reads: 'Please await for further instructions.' The verb 'await' is a transitive verb that means 'to wait for'. Adding the preposition 'for' after 'await' duplicates the internal definition of the verb. You must either use the transitive verb alone ('await further instructions') or switch to the intransitive verb phrase ('wait for further instructions'). Corrected sentence: 'Please await further instructions.'"
  },
  {
    "question": "Identify the error: 'I / met / up / with him.'",
    "options": ["I", "met", "up", "No error"],
    "answer": "up",
    "explanation": "The sentence reads: 'I met up with him.' In traditional, highly formal grammar, the verb 'meet' is fully self-sufficient when describing an encounter with a person. Adding the phrasal particles 'up with' creates a redundant and colloquial phrasal construction that is generally avoided in rigorous writing. Dropping 'up with' or simply 'up' clarifies the clause. Corrected sentence: 'I met him.'"
  },
  {
    "question": "Identify the error: 'Inside / of / the / box.'",
    "options": ["Inside", "of", "the", "No error"],
    "answer": "of",
    "explanation": "The phrase reads: 'Inside of the box.' The word 'Inside' functions perfectly as a self-contained preposition when defining physical containment. Adding the secondary preposition 'of' directly after it is an unnecessary structural addition that does not add any semantic meaning. Standard formal writing styles require dropping 'of'. Corrected sentence: 'Inside the box.'"
  },
  {
    "question": "Identify the error: 'Where / are you / going / to?'",
    "options": ["Where", "are you", "going", "to?"],
    "answer": "to?",
    "explanation": "The sentence reads: 'Where are you going to?' The interrogative adverb 'Where' inherently asks for and encompasses a destination or direction (meaning 'to what place'). Adding the preposition 'to' at the absolute end of the question is completely redundant and creates a pleonastic error. The word 'to' must be omitted. Corrected sentence: 'Where are you going?'"
  },
  {
    "question": "Identify the error: 'I / accept / your / preposition.'",
    "options": ["I", "accept", "your", "preposition"],
    "answer": "preposition",
    "explanation": "The sentence reads: 'I accept your preposition.' This is a malapropism error involving word choice. A 'preposition' is a grammatical term used to link nouns and pronouns. The context of accepting an offer, plan, or business idea requires the noun 'proposition'. Corrected sentence: 'I accept your proposition.'"
  },
  {
    "question": "Identify the error: 'He / lost / his / site.'",
    "options": ["He", "lost", "his", "site"],
    "answer": "site",
    "explanation": "The sentence reads: 'He lost his site.' This is a homophone error. The noun 'site' refers to a physical location, place, or website. In the context of losing one's physical vision or ability to see, the correct spelling is the homophone 'sight'. Corrected sentence: 'He lost his sight.'"
  },
  {
    "question": "Identify the error: 'Please / proceed / with / the next item.'",
    "options": ["Please", "proceed", "with", "No error"],
    "answer": "No error",
    "explanation": "The sentence reads: 'Please proceed with the next item.' This sentence is entirely correct. The verb 'proceed' changes its meaning based on its preposition: 'proceed to' means to move forward physically or transition to a new location/step, while 'proceed with' is the exact idiomatic match for continuing an ongoing activity or task. There is no error."
  },
  {
    "question": "Identify the error: 'I / could / care / less.'",
    "options": ["I", "could", "care", "less"],
    "answer": "could",
    "explanation": "The phrase reads: 'I could care less.' This is a widely misused idiom. Taken literally, saying you 'could' care less implies that you still possess some level of care or concern. To correctly convey the idiomatic meaning that you have absolutely zero interest or care, you must use the negative contraction 'couldn't'. Corrected sentence: 'I couldn't care less.'"
  },
  {
    "question": "Identify the error: 'For / all / intensive / purposes.'",
    "options": ["For", "all", "intensive", "purposes"],
    "answer": "intensive",
    "explanation": "The phrase reads: 'For all intensive purposes.' This is an example of an eggcorn or a phonetic malapropism. The correct, established legal and idiomatic phrase is 'For all intents and purposes', which means 'in every practical sense'. The adjective 'intensive' is incorrect here. Corrected sentence: 'For all intents and purposes.'"
  },
  {
    "question": "Identify the error: 'Nip / it / in / the butt.'",
    "options": ["Nip", "it", "in", "the butt"],
    "answer": "the butt",
    "explanation": "The phrase reads: 'Nip it in the butt.' This idiom stems from horticulture, where a gardener cuts off a flower 'bud' early on to stop it from growing further, symbolizing stopping a problem before it develops. The correct word is 'bud', not the anatomy word 'butt'. Corrected sentence: 'Nip it in the bud.'"
  },
  {
    "question": "Identify the error: 'One / in / the / same.'",
    "options": ["One", "in", "the", "same"],
    "answer": "in",
    "explanation": "The phrase reads: 'One in the same.' This is a common phonetic error. The phrase is used to show that two things are actually identical or the exact same entity. The correct coordinating conjunction to link them is 'and', making the proper idiom 'One and the same'. Corrected sentence: 'One and the same.'"
  },
  {
    "question": "Identify the error: 'Case / and / point.'",
    "options": ["Case", "and", "point", "No error"],
    "answer": "and",
    "explanation": "The phrase reads: 'Case and point.' This is an incorrect alteration of a standard idiom used to indicate that a perfect illustrative example is being presented. The correct idiomatic preposition to link these words is 'in'. Corrected phrase: 'Case in point.'"
  },
  {
    "question": "Identify the error: 'Peaked / my / interest.'",
    "options": ["Peaked", "my", "interest", "No error"],
    "answer": "Peaked",
    "explanation": "The phrase reads: 'Peaked my interest.' This is a homophone error. The verb 'peak' means to reach a highest physical point or maximum value. To describe the act of exciting, stimulating, or arousing a feeling like curiosity or interest, formal English requires the verb 'pique'. Corrected sentence: 'Piqued my interest.'"
  },
  {
    "question": "Identify the error: 'By / and / large.'",
    "options": ["By", "and", "large", "No error"],
    "answer": "No error",
    "explanation": "The phrase reads: 'By and large.' This expression originated as a nautical term but has evolved into a completely correct standard English idiom meaning 'on the whole', 'mostly', or 'generally speaking'. The phrasing is entirely accurate as written, so the correct option is No error."
  },
  {
    "question": "Identify the error: 'It was / both / a long ceremony / and tedious.'",
    "options": ["It was", "both", "a long ceremony", "and tedious"],
    "answer": "and tedious",
    "explanation": "The sentence reads: 'It was both a long ceremony and tedious.' The correlative conjunction 'both... and' requires strict parallel structure for the elements it links. 'Both' is followed by the noun phrase 'a long ceremony', which means 'and' must be followed by a matching noun phrase. Since 'tedious' is an adjective, it breaks parallelism. Corrected sentence: 'It was both long and tedious.'"
  },
  {
    "question": "Identify the error: 'He not only / passed / the test / but also the interview.'",
    "options": ["He not only", "passed", "the test", "but also the interview"],
    "answer": "passed",
    "explanation": "The sentence reads: 'He not only passed the test but also the interview.' The elements linked by 'not only... but also' must be balanced. As written, 'not only' sits before the verb 'passed', but 'but also' sits directly before a noun phrase ('the interview'). To balance the sentence, 'not only' should be moved past the verb so that it balances two noun phrases. Corrected sentence: 'He passed not only the test but also the interview.'"
  },
  {
    "question": "Identify the error: 'The room / was / light, airy, / and had plenty of space.'",
    "options": ["The room", "was", "light, airy,", "and had plenty of space"],
    "answer": "and had plenty of space",
    "explanation": "The sentence reads: 'The room was light, airy, and had plenty of space.' The sentence links features to the subject using a serial list. The first two descriptors are adjectives ('light', 'airy'), but the third item abruptly switches to a full verbal predicate phrase ('had plenty of space'). To maintain parallel form, the final element must be an adjective. Corrected sentence: 'The room was light, airy, and spacious.'"
  },
  {
    "question": "Identify the error: 'I like / running, / jumping, / and to swim.'",
    "options": ["I like", "running,", "jumping,", "and to swim"],
    "answer": "and to swim",
    "explanation": "The sentence reads: 'I like running, jumping, and to swim.' Parallel structure dictates that all items listed in a series must share the same grammatical form. The list begins with two gerunds ('running', 'jumping'), so the final item must match them as a gerund rather than changing into an infinitive phrase. Corrected sentence: 'I like running, jumping, and swimming.'"
  },
  {
    "question": "Identify the error: 'To think / is / existing.'",
    "options": ["To think", "is", "existing", "No error"],
    "answer": "existing",
    "explanation": "The sentence reads: 'To think is existing.' When equating two conceptual actions across a copular verb like 'is', the grammatical forms of the subject and the predicate nominative must be parallel. The subject is an infinitive ('To think'), so the complement must also be an infinitive rather than a gerund. Corrected sentence: 'To think is to exist.'"
  },
  {
    "question": "Identify the error: 'He is / a / man of wealth / and kind.'",
    "options": ["He is", "a", "man of wealth", "and kind"],
    "answer": "and kind",
    "explanation": "The sentence reads: 'He is a man of wealth and kind.' The conjunction 'and' connects descriptors for the noun 'man'. The first descriptive element is a prepositional noun phrase ('of wealth'), but the second is a standalone adjective ('kind'). To establish parallelism, both modifiers should match in form, such as using two noun phrases. Corrected sentence: 'He is a man of wealth and kindness.'"
  },
  {
    "question": "Identify the error: 'The teacher / told them / to sit / and that they should listen.'",
    "options": ["The teacher", "told them", "to sit", "and that they should listen"],
    "answer": "and that they should listen",
    "explanation": "The sentence reads: 'The teacher told them to sit and that they should listen.' The verb 'told' introduces a series of compound commands. The first command utilizes an infinitive structure ('to sit'), meaning the second item linked by 'and' must also use an infinitive form instead of switching to a full dependent 'that' clause. Corrected sentence: 'The teacher told them to sit and listen.'"
  },
  {
    "question": "Identify the error: 'Either / you / pay now / or later.'",
    "options": ["Either", "you", "pay now", "or later"],
    "answer": "you",
    "explanation": "The sentence reads: 'Either you pay now or later.' Correlative conjunction pairs like 'Either... or' must be placed directly before the parallel terms they contrast. Here, 'or' precedes a time adverb ('later'), but 'Either' is placed all the way before the pronoun 'you'. Moving the position of 'either' fixes the balance. Corrected sentence: 'You pay either now or later.'"
  },
  {
    "question": "Identify the error: 'She / enjoys / reading / more than to write.'",
    "options": ["She", "enjoys", "reading", "more than to write"],
    "answer": "more than to write",
    "explanation": "The sentence reads: 'She enjoys reading more than to write.' In comparative sentences, the two activities being compared across the phrase 'more than' must be in parallel form. Since the first activity is the gerund 'reading', the second activity must match as a gerund rather than an infinitive. Corrected sentence: 'She enjoys reading more than writing.'"
  },
  {
    "question": "Identify the error: 'The new car / is / fast, / reliable, and it saves gas.'",
    "options": ["The new car", "is", "fast,", "reliable, and it saves gas"],
    "answer": "reliable, and it saves gas",
    "explanation": "The sentence reads: 'The new car is fast, reliable, and it saves gas.' The linking verb 'is' introduces a series of descriptors for 'The new car'. The first two entries are simple adjectives ('fast', 'reliable'), but the third entry disrupts this pattern by introducing an independent clause. The final entry must be converted into an adjective. Corrected sentence: 'The new car is fast, reliable, and fuel-efficient.'"
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
