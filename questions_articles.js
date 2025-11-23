const ARTICLE_QUESTIONS = {
  beginner: [
    // 1-10: Basic 'A' vs 'An' (Consonant vs Vowel Sounds)
    { question: "I saw ___ cat in the street.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'cat' starts with a consonant sound (C) and we are talking about one generic cat." },
    { question: "She is eating ___ apple.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'apple' starts with a vowel sound (A)." },
    { question: "He is ___ engineer.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'engineer' starts with a vowel sound (E)." },
    { question: "I need ___ new phone.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'new' starts with a consonant sound (N)." },
    { question: "It is ___ orange.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'orange' starts with a vowel sound (O)." },
    { question: "Do you have ___ umbrella?", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'umbrella' starts with a vowel sound (U - 'uh')." },
    { question: "He works in ___ bank.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'bank' starts with a consonant sound (B)." },
    { question: "She wants to buy ___ car.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'car' starts with a consonant sound (C)." },
    { question: "There is ___ elephant in the zoo.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'elephant' starts with a vowel sound (E)." },
    { question: "I have ___ dog.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'dog' starts with a consonant sound (D)." },

    // 11-20: Tricky 'A' vs 'An' (Silent Letters & Y-sounds)
    { question: "He will arrive in ___ hour.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'hour' starts with a silent 'H'. It sounds like 'our' (vowel sound)." },
    { question: "It is ___ honor to meet you.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because the 'H' in 'honor' is silent. It starts with an 'O' sound." },
    { question: "She goes to ___ university.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'university' starts with a 'Y' sound ('yoo-niversity'), which is a consonant sound." },
    { question: "He wears ___ uniform.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'uniform' starts with a 'Y' sound ('yoo-niform')." },
    { question: "This is ___ useful book.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'useful' starts with a 'Y' sound ('yoo-seful')." },
    { question: "He is ___ honest man.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because the 'H' in 'honest' is silent." },
    { question: "I saw ___ unicorn in the movie.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'unicorn' starts with a 'Y' sound ('yoo-nicorn')." },
    { question: "She is ___ European girl.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'European' starts with a 'Y' sound ('yoo-ropean')." },
    { question: "It was ___ one-way street.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'one' starts with a 'W' sound ('won'), which is a consonant sound." },
    { question: "I have ___ MBA degree.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because the letter 'M' is pronounced 'em', starting with a vowel sound." },

    // 21-30: Basic 'The' (Unique Things)
    { question: "Look at ___ moon!", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' because there is only one moon relative to Earth (Unique)." },
    { question: "___ sun is hot today.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' because there is only one sun in our solar system." },
    { question: "___ sky is blue.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' because the sky is a unique environment." },
    { question: "The bird flew across ___ world.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' because there is only one world we live in." },
    { question: "He serves in ___ army.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We usually use 'the' with organized services like the army, the police, or the navy." },
    { question: "I want to speak to ___ manager.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' because we imply a specific person (the manager of this specific place)." },
    { question: "Please close ___ door.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' because both the speaker and listener know which specific door is being referred to." },
    { question: "Can you pass ___ salt, please?", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' because we are talking about the specific salt on the table." },
    { question: "___ President will speak tonight.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' for unique titles within a country (The President, The Prime Minister)." },
    { question: "Turn off ___ light.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' because we are referring to the specific light in the room." },

    // 31-40: Basic Plurals & Uncountables (Zero Article)
    { question: "I love ___ cats.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article (Zero Article) when talking about plural nouns in general." },
    { question: "___ water is essential for life.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article for general uncountable nouns like water." },
    { question: "___ dogs are loyal animals.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article because we are generalizing about all dogs." },
    { question: "Do you like ___ music?", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article for abstract, uncountable nouns like music in general." },
    { question: "She drinks ___ milk every day.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article because 'milk' is uncountable and we aren't specifying which milk." },
    { question: "___ gold is expensive.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article for materials and substances in general." },
    { question: "I hate ___ spiders.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article for plural nouns when talking about the whole category." },
    { question: "___ birds can fly.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article for general statements about plural nouns." },
    { question: "He collects ___ stamps.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article for plural objects in general." },
    { question: "___ sugar is sweet.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use no article for general uncountable substances." },

    // 41-50: Jobs and Professions
    { question: "My mother is ___ teacher.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' when stating someone's profession." },
    { question: "He wants to be ___ artist.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'artist' starts with a vowel sound." },
    { question: "Are you ___ student?", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' for singular professions/roles." },
    { question: "He is ___ doctor.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' for professions." },
    { question: "She works as ___ accountant.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'accountant' starts with a vowel." },
    { question: "John is ___ waiter.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Standard use of 'a' for jobs." },
    { question: "I am ___ architect.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "Standard use of 'an' for vowel-starting jobs." },
    { question: "He is ___ famous actor.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We use 'a' because 'famous' starts with a consonant." },
    { question: "She is ___ honest lawyer.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "We use 'an' because 'honest' starts with a vowel sound." },
    { question: "They are ___ engineers.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We use NO article because 'engineers' is plural. 'A/An' is only for singular nouns." }
  ],

  intermediate: [
    // 1-10: First Mention vs Second Mention
    { question: "I bought a shirt. ___ shirt is blue.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We use 'The' because we mentioned the shirt in the previous sentence. It is now specific." },
    { question: "I saw a dog. ___ dog was barking.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Second mention rule: When we talk about it again, it becomes 'The'." },
    { question: "She has a son and a daughter. ___ daughter is a doctor.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We use 'The' because we are referring to the specific daughter mentioned before." },
    { question: "There is an apple on the desk. ___ apple is for you.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We identify the specific apple mentioned in the first sentence." },
    { question: "I went to a restaurant. ___ restaurant was very expensive.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Second mention makes the noun specific." },
    { question: "He planted a tree. ___ tree grew very tall.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Referring back to the specific tree planted." },
    { question: "I read a book. ___ book was boring.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Referring back to the specific book." },
    { question: "We stayed in a hotel. ___ hotel had a pool.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Referring back to the specific hotel." },
    { question: "I found a coin. ___ coin was old.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Referring back to the specific coin." },
    { question: "She baked a cake. ___ cake tasted delicious.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Referring back to the specific cake." },

    // 11-20: Specific vs General (Uncountable/Plural)
    { question: "___ sugar in this coffee is too much.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We use 'The' because we are talking about specific sugar (the sugar *in this coffee*), not sugar in general." },
    { question: "___ milk is good for your bones.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "We use no article because we are talking about milk in general." },
    { question: "___ children in that park are playing.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We use 'The' because we are specifying *which* children (the ones in that park)." },
    { question: "___ children love toys.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "We use no article because we are making a general statement about all children." },
    { question: "___ life is beautiful.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "We use no article for abstract concepts like 'Life' in general." },
    { question: "___ life of Shakespeare was fascinating.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We use 'The' because it is specific: the life *of Shakespeare*." },
    { question: "I like ___ coffee.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "General preference for the substance." },
    { question: "___ coffee I drank this morning was cold.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Specific coffee (the one I drank)." },
    { question: "___ history is interesting.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "General subject." },
    { question: "___ history of the Philippines is complex.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Specific history (of a specific place)." },

    // 21-30: Instruments vs Sports
    { question: "Can you play ___ guitar?", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' with musical instruments." },
    { question: "I love playing ___ football.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We do NOT use articles with sports or games." },
    { question: "She plays ___ piano very well.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Musical instruments take 'the'." },
    { question: "Let's play ___ chess.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "No article for board games or sports." },
    { question: "He is learning ___ violin.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Instrument = 'the'." },
    { question: "Do you play ___ tennis?", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Sport = No article." },
    { question: "He plays ___ drums.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Instrument = 'the'." },
    { question: "They play ___ basketball every Sunday.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Sport = No article." },
    { question: "She wants to learn ___ flute.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Instrument = 'the'." },
    { question: "We play ___ poker on Fridays.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Game = No article." },

    // 31-40: Time Expressions & Directions
    { question: "I work in ___ morning.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Standard expression: 'In the morning' (also 'in the afternoon', 'in the evening')." },
    { question: "She sleeps at ___ night.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Exception! We say 'At night' without 'the'." },
    { question: "The sun rises in ___ East.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' with cardinal points (North, South, East, West)." },
    { question: "My house is on ___ left.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "We use 'the' with directions like 'the left' or 'the right'." },
    { question: "See you in ___ afternoon.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Standard expression: 'In the afternoon'." },
    { question: "We travel to ___ North.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Cardinal point = 'the'." },
    { question: "At ___ noon, we eat lunch.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We say 'At noon' or 'At midnight' without an article." },
    { question: "In ___ evening, I watch TV.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Standard expression: 'In the evening'." },
    { question: "Look to ___ right.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Direction = 'the'." },
    { question: "By ___ sunset, we must be home.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Expressions like 'by sunset', 'at sunrise', 'at dawn' usually take no article." },

    // 41-50: School/Home/Work (Function vs Place)
    { question: "I am going to ___ home.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We do not use an article with 'home' when used with verbs of movement (go home, come home)." },
    { question: "He is at ___ work.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Standard expression: 'At work' takes no article." },
    { question: "Students go to ___ school to learn.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "When we go for the *primary purpose* (learning), we use no article." },
    { question: "Her mother went to ___ school to meet the teacher.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Here, the mother is visiting the *specific building*, not studying there, so we use 'the'." },
    { question: "He is in ___ bed (sleeping).", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "When used for its purpose (sleeping), we say 'in bed'." },
    { question: "The cat is on ___ bed.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Here we refer to the specific furniture item, so we use 'the'." },
    { question: "They go to ___ church on Sundays.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "For religious worship, we say 'go to church'." },
    { question: "The tourists visited ___ church.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "They are visiting the building for sightseeing, not worship, so we use 'the'." },
    { question: "He is in ___ class.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Meaning he is studying/attending a lesson." },
    { question: "I left my bag in ___ class.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Referring to the specific room." }
  ],

  advanced: [
    // 1-10: Geographical Names (Countries & Cities)
    { question: "We visited ___ France.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Most countries (singular names) do NOT take an article." },
    { question: "She lives in ___ Philippines.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Countries with plural names (islands, states) take 'The' (The Philippines, The Netherlands)." },
    { question: "He is from ___ USA.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Countries with words like 'United', 'Republic', or 'Kingdom' take 'The'." },
    { question: "They went to ___ Paris.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Cities generally do NOT take an article." },
    { question: "___ United Kingdom is in Europe.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We use 'The' because of the word 'Kingdom'." },
    { question: "___ Mount Everest is the highest peak.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "Individual mountains do NOT take 'the'. (But mountain ranges do!)." },
    { question: "They crossed ___ Atlantic Ocean.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Oceans and seas always take 'The'." },
    { question: "___ Lake Taal is beautiful.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "Individual lakes do NOT take 'the'." },
    { question: "___ Nile River is long.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Rivers always take 'The'." },
    { question: "___ Alps are in Europe.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Mountain *ranges* (plural) take 'The'." },

    // 11-20: Geographical Names Part 2
    { question: "She lives in ___ New York.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Cities and states usually take zero article." },
    { question: "We went to ___ Sahara Desert.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Deserts take 'The'." },
    { question: "___ Republic of China.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Includes the word 'Republic', so it takes 'The'." },
    { question: "___ Asia is a large continent.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "Continents do NOT take an article." },
    { question: "___ Bahamas is a popular destination.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Plural island group name, so it takes 'The'." },
    { question: "___ Madagascar is an island.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "Singular islands do NOT take 'the'." },
    { question: "___ Pacific Ocean.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Oceans take 'The'." },
    { question: "___ Mount Fuji.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "Individual mountain = No article." },
    { question: "___ Andes Mountains.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Mountain range = 'The'." },
    { question: "___ South Africa.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "Country name = No article." },

    // 21-30: Superlatives & Ordinals
    { question: "He is ___ best student.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Superlative adjectives (best, tallest, fastest) always take 'The'." },
    { question: "This is ___ most expensive car.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Superlative 'most' requires 'The'." },
    { question: "I live on ___ second floor.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Ordinal numbers (first, second, third) usually take 'The'." },
    { question: "Who was ___ first person to land on the moon?", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Ordinal number 'first' takes 'The'." },
    { question: "She is ___ tallest girl in class.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Superlative 'tallest' takes 'The'." },
    { question: "Monday is ___ first day of the week.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Ordinal number = 'The'." },
    { question: "That was ___ worst movie ever.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Superlative 'worst' takes 'The'." },
    { question: "He is ___ only child.", choices: ["a", "an", "the", "-"], correctIndex: 1, explanation: "Trick! Here 'only' starts with a vowel, and we are describing him as 'an only child' (a category). However, if saying 'The only one', it changes." },
    { question: "You are ___ only person I know here.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "When 'only' implies uniqueness in a specific group, we use 'The'." },
    { question: "It is ___ most interesting book.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Superlative = 'The'." },

    // 31-40: "The" with Adjectives (The Rich, The Poor)
    { question: "___ rich should help ___ poor.", choices: ["The / the", "A / a", "- / -", "The / -"], correctIndex: 0, explanation: "When we use an adjective to represent a whole group of people (The rich people), we use 'The' + Adjective." },
    { question: "___ elderly need respect.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "'The elderly' refers to all elderly people as a group." },
    { question: "The government should help ___ unemployed.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "'The unemployed' refers to the group of all unemployed people." },
    { question: "___ French are famous for their food.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "When referring to the nationality as a whole people, we use 'The'." },
    { question: "___ blind communicate using Braille.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Refers to all blind people as a group." },
    { question: "___ injured were taken to the hospital.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Refers to the specific group of injured people." },
    { question: "___ young have a lot of energy.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Refers to young people collectively." },
    { question: "___ homeless need shelter.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Refers to homeless people collectively." },
    { question: "___ Japanese are very polite.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Refers to the Japanese people as a nation." },
    { question: "He is ___ Japanese.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Trick! Here 'Japanese' is an adjective describing 'He'. We don't say 'He is a Japanese' (usually rude/incorrect). We say 'He is Japanese' (Adjective) or 'He is a Japanese person'." },

    // 41-50: Materials vs Specific Items
    { question: "This table is made of ___ wood.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Materials (wood, plastic, metal) take no article." },
    { question: "___ wood in this table is expensive.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We use 'The' because we are talking about the specific wood used in *this* table." },
    { question: "She likes wearing ___ silk.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Material in general." },
    { question: "___ silk she bought is soft.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Specific silk she bought." },
    { question: "___ paper is made from trees.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "General material." },
    { question: "I need ___ paper to write on.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Here 'a paper' can mean 'a newspaper' or 'a document'. If meaning a sheet, usually 'a piece of paper'." },
    { question: "___ glass is fragile.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "General material." },
    { question: "He broke ___ glass.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Here 'a glass' refers to the drinking vessel (countable object), not the material." },
    { question: "Do you like ___ iron?", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Referring to the metal/element." },
    { question: "I have ___ iron at home.", choices: ["an", "a", "the", "-"], correctIndex: 0, explanation: "Referring to the tool for pressing clothes (Countable)." }
  ],

  super: [
    // 1-10: Diseases and Health
    { question: "He has ___ flu.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "With common infections like 'flu' or 'measles', we traditionally use 'the' (the flu, the measles). However, modern usage sometimes drops it, but 'the' is historically correct." },
    { question: "He has ___ cancer.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Serious diseases (Cancer, Diabetes, Heart Disease) generally take NO article." },
    { question: "She caught ___ cold.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "We say 'a cold' or 'a headache' (common ailments)." },
    { question: "I have ___ headache.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Common ailment = 'a'." },
    { question: "He suffers from ___ asthma.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Chronic medical conditions usually take no article." },
    { question: "She has ___ toothache.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Aches (toothache, stomachache) often take 'a'." },
    { question: "___ mumps is a painful disease.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Like 'the measles', 'the mumps' often takes 'the' in traditional English." },
    { question: "He had ___ heart attack.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Specific medical event = 'a'." },
    { question: "___ pneumonia is dangerous.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "Serious/Scientific disease names = No article." },
    { question: "He has ___ high blood pressure.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Medical condition = No article." },

    // 11-20: Meals (General vs Specific)
    { question: "We had ___ breakfast at 7 AM.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "We do not use articles with names of meals (breakfast, lunch, dinner) when speaking generally." },
    { question: "It was ___ delicious breakfast.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "When we describe the meal with an adjective (delicious, good), we use 'a'." },
    { question: "___ dinner we had last night was great.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "We use 'The' because we are specifying *which* dinner (the one last night)." },
    { question: "Did you have ___ lunch?", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "General meal = No article." },
    { question: "They invited us to ___ dinner.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "General meal = No article." },
    { question: "He made ___ nice lunch for us.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Adjective + Meal = 'a'." },
    { question: "___ lunch is ready.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "General announcement of the meal." },
    { question: "I don't eat ___ supper.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "General habit." },
    { question: "After ___ tea, we went out.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Referring to the meal time (British usage)." },
    { question: "The wedding feast was ___ dinner to remember.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Describing it as 'a specific type' of dinner." },

    // 21-30: Transport and Communication (By...)
    { question: "We went there by ___ car.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "When using 'by' + transport (by car, by bus, by train), we use NO article." },
    { question: "We went in ___ car.", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "When using 'in' or 'on', we MUST use an article (in a car, on a bus)." },
    { question: "She travels by ___ train.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "By + transport = No article." },
    { question: "He is on ___ bus.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Preposition 'on' requires an article (usually 'the' if specific, or 'a')." },
    { question: "Contact me by ___ email.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Means of communication using 'by' takes no article." },
    { question: "I heard it on ___ radio.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Media usually takes 'the' (the radio, the internet). Exception: TV." },
    { question: "I saw it on ___ TV.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Exception! We say 'on TV' or 'on television' without an article. But we say 'on the radio'." },
    { question: "Turn off ___ television.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Here we mean the physical device/machine, so we use 'the'." },
    { question: "He goes to school on ___ foot.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Idiom: 'On foot' (walking) takes no article." },
    { question: "She arrived by ___ taxi.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "By + transport = No article." },

    // 31-40: Special Locations (Prison, Hospital, University)
    { question: "The criminal was sent to ___ prison.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "When going for the institution's primary purpose (to be a prisoner), we use NO article." },
    { question: "The lawyer went to ___ prison to meet his client.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "The lawyer is a visitor, not a prisoner, so he goes to 'the' specific building." },
    { question: "He had an accident and was taken to ___ hospital.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "In British English, 'to hospital' (as a patient) takes no article. (Note: American English often uses 'the')." },
    { question: "I went to ___ hospital to visit my aunt.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Visitor = 'the'." },
    { question: "She is studying at ___ university.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Function of studying = No article." },
    { question: "The package was delivered to ___ university.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Specific location/building = 'The'." },
    { question: "Children go to ___ bed at 9 PM.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Purpose of sleeping = No article." },
    { question: "Don't jump on ___ bed.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Physical furniture = 'The'." },
    { question: "He is in ___ class.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Attending a lesson." },
    { question: "The meeting is in ___ Class 3B.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Proper names of rooms/classes usually take no article." },

    // 41-50: Unique Idioms and Exceptions
    { question: "He was appointed ___ chairman.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Verbs like 'appoint', 'elect', or 'make' usually take NO article before the unique title/position." },
    { question: "They elected him ___ President.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Unique role following 'elect' takes no article." },
    { question: "___ Queen Elizabeth was famous.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "Title + Name (Queen Elizabeth, Doctor Smith, President Lincoln) takes NO article." },
    { question: "___ Queen visited the city.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Title alone (without the name) takes 'The'." },
    { question: "I like ___ spring.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Seasons (spring, summer) generally take no article, though 'the spring' is also possible. Zero is common for general statements." },
    { question: "In ___ 1990s.", choices: ["a", "an", "the", "-"], correctIndex: 2, explanation: "Decades take 'The' (The 90s, The 1990s)." },
    { question: "He plays ___ Romeo in the play.", choices: ["a", "an", "the", "- (No article)"], correctIndex: 3, explanation: "Names of characters/people take no article." },
    { question: "Do you have ___ Sherlock Holmes in your library?", choices: ["a", "an", "the", "-"], correctIndex: 0, explanation: "Idiom: This means 'A copy of a book by/about Sherlock Holmes', not the person himself." },
    { question: "___ man is a social animal.", choices: ["A", "An", "The", "- (No article)"], correctIndex: 3, explanation: "When 'Man' refers to the human species/mankind, we use NO article." },
    { question: "___ Hague is a city in the Netherlands.", choices: ["A", "An", "The", "-"], correctIndex: 2, explanation: "Exception! Some cities naturally keep 'The' in their name (The Hague, The Vatican)." }
  ]
};
