const AFFIXES_QUESTIONS = {
  beginner: [
    // 1-10: Prefix 'Un-' (Not/Reverse)
    { question: "What does 'unhappy' mean?", choices: ["Very happy", "Not happy", "Happy again", "Too happy"], correctIndex: 1, explanation: "Rule: The prefix 'un-' means 'not' or 'opposite of'. Explanation: Therefore, 'unhappy' simply means 'not happy'." },
    { question: "If you 'untie' a knot, what do you do?", choices: ["Tie it tighter", "Tie it again", "Reverse the tying", "Cut it"], correctIndex: 2, explanation: "Rule: The prefix 'un-' indicates reversal of an action. Explanation: To 'untie' means to reverse the action of tying." },
    { question: "Which word means 'not kind'?", choices: ["Rekind", "Unkind", "Diskind", "Imkind"], correctIndex: 1, explanation: "Rule: 'Un-' is the standard negative prefix for 'kind'. Explanation: 'Unkind' is the correct opposite." },
    { question: "What does 'unsafe' mean?", choices: ["Dangerous (Not safe)", "Very safe", "Safe again", "Locked"], correctIndex: 0, explanation: "Rule: 'Un-' means 'not'. Explanation: Something that is 'unsafe' is not safe, meaning it is dangerous." },
    { question: "Choose the word for 'not fair'.", choices: ["Disfair", "Misfair", "Unfair", "Nonfair"], correctIndex: 2, explanation: "Rule: Collocation. Explanation: The correct prefix for 'fair' is 'un-'. 'Unfair' means unjust." },
    { question: "What does 'unlock' mean?", choices: ["Lock again", "Open the lock", "Break the lock", "Lock tighter"], correctIndex: 1, explanation: "Rule: Reversal. Explanation: 'Un-' reverses the action. 'Unlock' means to undo the locking mechanism." },
    { question: "What does 'unknown' mean?", choices: ["Famous", "Not known", "Known deeply", "Smart"], correctIndex: 1, explanation: "Rule: 'Un-' means 'not'. Explanation: If something is 'unknown', people do not know about it." },
    { question: "Which word means 'not real'?", choices: ["Unreal", "Disreal", "Inreal", "Misreal"], correctIndex: 0, explanation: "Rule: Negative Prefix. Explanation: 'Unreal' describes something imaginary or false." },
    { question: "What does 'unhealthy' mean?", choices: ["Sick/Not good for health", "Very strong", "Fit", "Exercising"], correctIndex: 0, explanation: "Rule: 'Un-' means 'not'. Explanation: 'Unhealthy' means not having good health." },
    { question: "If a room is 'untidy', it is:", choices: ["Clean", "Messy (Not tidy)", "Empty", "New"], correctIndex: 1, explanation: "Rule: 'Un-' means 'not'. Explanation: 'Tidy' means neat. 'Untidy' means not neat, or messy." },

    // 11-20: Prefix 'Re-' (Again)
    { question: "What does 'redo' mean?", choices: ["Do not do", "Do again", "Do badly", "Do before"], correctIndex: 1, explanation: "Rule: The prefix 're-' means 'again'. Explanation: 'Redo' means to do the task a second time." },
    { question: "If you 'replay' a video, you:", choices: ["Stop it", "Play it again", "Delete it", "Record it"], correctIndex: 1, explanation: "Rule: 'Re-' means 'back' or 'again'. Explanation: You play the video again." },
    { question: "What does 'rewrite' mean?", choices: ["Write clearly", "Write again", "Stop writing", "Write incorrectly"], correctIndex: 1, explanation: "Rule: 'Re-' means 'again'. Explanation: To 'rewrite' is to write the text one more time." },
    { question: "Which word means 'build again'?", choices: ["Unbuild", "Rebuild", "Disbuild", "Prebuild"], correctIndex: 1, explanation: "Rule: Repetition. Explanation: 'Rebuild' means to construct something again after it was damaged." },
    { question: "What does 'reappear' mean?", choices: ["Vanish", "Appear again", "Appear first", "Never appear"], correctIndex: 1, explanation: "Rule: 'Re-' means 'again'. Explanation: It means to become visible again after disappearing." },
    { question: "If you 'refill' a cup, you:", choices: ["Empty it", "Fill it again", "Break it", "Wash it"], correctIndex: 1, explanation: "Rule: 'Re-' means 'again'. Explanation: You fill the cup a second time." },
    { question: "What does 'reopen' mean?", choices: ["Close", "Open again", "Lock", "Break"], correctIndex: 1, explanation: "Rule: 'Re-' means 'again'. Explanation: A store might 'reopen' after being closed for renovation." },
    { question: "What does 'review' mean?", choices: ["View again/Look over", "View first", "Not view", "View badly"], correctIndex: 0, explanation: "Rule: 'Re-' + 'View'. Explanation: To look at something again to study or check it." },
    { question: "If you 'retell' a story, you:", choices: ["Forget it", "Tell it again", "Write it", "Lie"], correctIndex: 1, explanation: "Rule: 'Re-' means 'again'. Explanation: You narrate the story another time." },
    { question: "What does 'reuse' mean?", choices: ["Throw away", "Use again", "Buy new", "Break"], correctIndex: 1, explanation: "Rule: 'Re-' means 'again'. Explanation: To use an item more than once (e.g., reuse a bag)." },

    // 21-30: Suffix '-er' (Doer/Comparison)
    { question: "A 'teacher' is someone who:", choices: ["Teaches", "Is taught", "Hates school", "Buys books"], correctIndex: 0, explanation: "Rule: The suffix '-er' indicates a person who does the action. Explanation: Teach + er = One who teaches." },
    { question: "What does 'baker' mean?", choices: ["Bread", "One who bakes", "An oven", "Flour"], correctIndex: 1, explanation: "Rule: Doer Suffix. Explanation: Bake + er = A person who bakes." },
    { question: "Which word means 'one who runs'?", choices: ["Running", "Runful", "Runner", "Runist"], correctIndex: 2, explanation: "Rule: '-er' creates the agent noun. Explanation: Run + er = Runner (Note the double 'n')." },
    { question: "In 'faster', the suffix '-er' shows:", choices: ["A person", "Comparison", "Past tense", "Plural"], correctIndex: 1, explanation: "Rule: Comparative Adjectives. Explanation: When attached to an adjective, '-er' means 'more'. Faster = More fast." },
    { question: "What is a 'painter'?", choices: ["A painting", "Paint", "One who paints", "A brush"], correctIndex: 2, explanation: "Rule: Doer Suffix. Explanation: Paint + er = The person doing the painting." },
    { question: "Which word means 'more tall'?", choices: ["Tallest", "Taller", "More tall", "Tallful"], correctIndex: 1, explanation: "Rule: Comparative. Explanation: For short adjectives, add '-er' to compare two things." },
    { question: "A 'player' is:", choices: ["A game", "One who plays", "A toy", "A field"], correctIndex: 1, explanation: "Rule: Doer Suffix. Explanation: Play + er = The person playing." },
    { question: "Which word is a comparative adjective?", choices: ["Stronger", "Singer", "Teacher", "Writer"], correctIndex: 0, explanation: "Rule: Context. Explanation: 'Singer', 'Teacher', and 'Writer' are nouns (people). 'Stronger' describes a quality comparing two things." },
    { question: "What does 'shorter' mean?", choices: ["Very short", "More short than something else", "A short person", "Shortest"], correctIndex: 1, explanation: "Rule: Comparative. Explanation: It compares the height/length of two things." },
    { question: "A 'driver' is someone who:", choices: ["Walks", "Drives", "Fixes cars", "Buys cars"], correctIndex: 1, explanation: "Rule: Doer Suffix. Explanation: Drive + er = One who drives." },

    // 31-40: Suffix '-est' (Superlative)
    { question: "What does 'fastest' mean?", choices: ["Fast", "Faster", "The most fast", "Slow"], correctIndex: 2, explanation: "Rule: Superlative Suffix '-est'. Explanation: It means 'the most' of a quality among three or more things." },
    { question: "Which word means 'most cold'?", choices: ["Colder", "Coldest", "Coldly", "Coldness"], correctIndex: 1, explanation: "Rule: Superlative. Explanation: Cold + est = Coldest." },
    { question: "What is the superlative of 'big'?", choices: ["Bigger", "Bigly", "Biggest", "More big"], correctIndex: 2, explanation: "Rule: Superlative Spelling. Explanation: Big + est = Biggest (double the consonant)." },
    { question: "If you are the 'youngest', you are:", choices: ["Older than one person", "The most young in the group", "Not young", "A baby"], correctIndex: 1, explanation: "Rule: Superlative. Explanation: It compares you to everyone else in the group." },
    { question: "Which word means 'most sweet'?", choices: ["Sweeter", "Sweetest", "Sweetful", "Sweetly"], correctIndex: 1, explanation: "Rule: Superlative. Explanation: Sweet + est = Sweetest." },
    { question: "The 'highest' mountain is:", choices: ["Higher than one other", "The most high of all", "Low", "Flat"], correctIndex: 1, explanation: "Rule: Superlative '-est' means 'most'." },
    { question: "What is the superlative of 'strong'?", choices: ["Stronger", "Strongly", "Strongest", "Strength"], correctIndex: 2, explanation: "Rule: Add '-est' for the highest degree." },
    { question: "Which word means 'most smart'?", choices: ["Smarter", "Smartest", "Smartly", "Smartness"], correctIndex: 1, explanation: "Rule: Superlative form of smart." },
    { question: "If a room is the 'cleanest', it is:", choices: ["Messy", "Cleaner than one room", "The most clean of all", "Dirty"], correctIndex: 2, explanation: "Rule: Superlative usage." },
    { question: "What does 'oldest' imply?", choices: ["Comparison of two", "Comparison of three or more", "No comparison", "Future tense"], correctIndex: 1, explanation: "Rule: Superlatives (-est) compare 3+ items. Comparatives (-er) compare 2." },

    // 41-50: Suffixes '-s/-es' (Plural) and '-ed' (Past)
    { question: "What does 'cats' mean?", choices: ["One cat", "More than one cat", "Cat ownership", "Baby cat"], correctIndex: 1, explanation: "Rule: Plural Suffix '-s'. Explanation: It indicates more than one." },
    { question: "Change 'box' to plural.", choices: ["Boxs", "Boxes", "Boxies", "Boxen"], correctIndex: 1, explanation: "Rule: '-es' Ending. Explanation: Words ending in x, s, ch, sh add '-es' for plural." },
    { question: "What does 'walked' show?", choices: ["Happening now", "Happened in the past", "Will happen", "A person who walks"], correctIndex: 1, explanation: "Rule: Past Tense Suffix '-ed'. Explanation: It indicates the action is finished." },
    { question: "Which is the past tense of 'jump'?", choices: ["Jumping", "Jumps", "Jumped", "Jumper"], correctIndex: 2, explanation: "Rule: Regular Past Tense. Explanation: Add '-ed' to the base verb." },
    { question: "Change 'baby' to plural.", choices: ["Babys", "Babies", "Babyes", "Babe"], correctIndex: 1, explanation: "Rule: Y to I. Explanation: If a noun ends in consonant+y, change y to i and add -es." },
    { question: "What does 'played' mean?", choices: ["Playing now", "Will play", "Did play (past)", "Player"], correctIndex: 2, explanation: "Rule: '-ed' indicates past action." },
    { question: "Plural of 'bus':", choices: ["Buss", "Buses", "Busies", "Buse"], correctIndex: 1, explanation: "Rule: Words ending in 's' take '-es'." },
    { question: "Which word shows an action happening right now?", choices: ["Cooked", "Cooks", "Cooking", "Cooker"], correctIndex: 2, explanation: "Rule: Suffix '-ing'. Explanation: This is the progressive participle." },
    { question: "Plural of 'dish':", choices: ["Dishs", "Dishes", "Dishies", "Dishez"], correctIndex: 1, explanation: "Rule: Words ending in 'sh' take '-es'." },
    { question: "What does 'wanted' mean?", choices: ["Want now", "Wanted in the past", "Will want", "Wanting"], correctIndex: 1, explanation: "Rule: Regular past tense '-ed'." }
  ],

  intermediate: [
    // 51-60: Prefix 'Dis-' (Not/Opposite) & 'Mis-' (Wrong)
    { question: "What does 'disagree' mean?", choices: ["Agree strongly", "Not agree", "Agree again", "Agree before"], correctIndex: 1, explanation: "Rule: Prefix 'dis-' means 'not' or 'opposite of'. Explanation: Disagree is the opposite of agree." },
    { question: "If you 'misunderstand', you:", choices: ["Understand perfectly", "Understand wrongly", "Do not understand", "Understand again"], correctIndex: 1, explanation: "Rule: Prefix 'mis-' means 'wrongly' or 'badly'. Explanation: You understood, but in the wrong way." },
    { question: "What does 'disconnect' mean?", choices: ["Connect again", "Break the connection", "Connect wrongly", "Connect tightly"], correctIndex: 1, explanation: "Rule: 'Dis-' means removal or reversal. Explanation: To break the link." },
    { question: "Which word means 'spell wrongly'?", choices: ["Unspell", "Disspell", "Misspell", "Respell"], correctIndex: 2, explanation: "Rule: 'Mis-' means wrong. Explanation: Mis + spell = Spell wrongly." },
    { question: "What does 'dislike' mean?", choices: ["Like very much", "Not like", "Like again", "Like wrongly"], correctIndex: 1, explanation: "Rule: 'Dis-' creates the opposite. Explanation: To not like something." },
    { question: "If a leader 'misleads' you, they:", choices: ["Guide you correctly", "Guide you wrongly/deceive", "Do not guide", "Guide again"], correctIndex: 1, explanation: "Rule: 'Mis-' means wrongly. Explanation: To lead someone in the wrong direction." },
    { question: "What does 'dishonest' mean?", choices: ["Very honest", "Not honest", "Honest sometimes", "Funny"], correctIndex: 1, explanation: "Rule: 'Dis-' means not. Explanation: Someone who lies or cheats." },
    { question: "What does 'misbehave' mean?", choices: ["Behave well", "Behave badly", "Not behave", "Behave again"], correctIndex: 1, explanation: "Rule: 'Mis-' means badly. Explanation: To act in a bad way." },
    { question: "What does 'disappear' mean?", choices: ["Show up", "Vanish (Cease to appear)", "Appear again", "Appear wrongly"], correctIndex: 1, explanation: "Rule: 'Dis-' reverses the action. Explanation: The opposite of appear." },
    { question: "If you 'misuse' a tool, you:", choices: ["Use it correctly", "Use it for the wrong purpose", "Do not use it", "Break it"], correctIndex: 1, explanation: "Rule: 'Mis-' means wrongly. Explanation: Using something incorrectly." },

    // 61-70: Prefix 'Pre-' (Before) & 'Im-' (Not)
    { question: "What does 'preview' mean?", choices: ["View after", "View before", "View again", "View wrongly"], correctIndex: 1, explanation: "Rule: Prefix 'pre-' means 'before'. Explanation: To see something before it is officially shown." },
    { question: "What does 'impossible' mean?", choices: ["Very possible", "Not possible", "Possible again", "Easy"], correctIndex: 1, explanation: "Rule: 'Im-' is a variation of 'in-' (not) used before b, m, p. Explanation: Not possible." },
    { question: "If you 'prepay', you pay:", choices: ["After", "Before", "Again", "Never"], correctIndex: 1, explanation: "Rule: 'Pre-' means in advance. Explanation: Paying beforehand." },
    { question: "Which word means 'not polite'?", choices: ["Unpolite", "Dispolite", "Impolite", "Nonpolite"], correctIndex: 2, explanation: "Rule: Use 'im-' before words starting with 'p'. Explanation: Impolite." },
    { question: "What is a 'preface'?", choices: ["The end of a book", "The introduction (before the text)", "The cover", "The title"], correctIndex: 1, explanation: "Rule: 'Pre-' means before. Explanation: An introduction written at the beginning of a book." },
    { question: "What does 'impatient' mean?", choices: ["Not patient", "Very patient", "Sick", "Happy"], correctIndex: 0, explanation: "Rule: 'Im-' means not (before 'p'). Explanation: Lacking patience." },
    { question: "What does 'predict' mean?", choices: ["Say after", "Say before/Foretell", "Say again", "Say wrongly"], correctIndex: 1, explanation: "Rule: 'Pre-' (before) + 'dict' (say). Explanation: To say what will happen in the future." },
    { question: "What does 'immature' mean?", choices: ["Not mature", "Very mature", "Old", "Wise"], correctIndex: 0, explanation: "Rule: 'Im-' means not (before 'm'). Explanation: Acting like a child/not fully grown." },
    { question: "If something is 'prehistoric', it is:", choices: ["Modern", "Before written history", "Future", "Written"], correctIndex: 1, explanation: "Rule: 'Pre-' means before. Explanation: The time before recorded history." },
    { question: "What does 'imbalance' mean?", choices: ["Perfect balance", "Lack of balance", "New balance", "Heavy"], correctIndex: 1, explanation: "Rule: 'Im-' means not/lack of. Explanation: Not balanced." },

    // 71-80: Suffix '-ful' (Full of) & '-less' (Without)
    { question: "What does 'fearless' mean?", choices: ["Full of fear", "Without fear", "A little scared", "Scary"], correctIndex: 1, explanation: "Rule: Suffix '-less' means 'without'. Explanation: Brave; having no fear." },
    { question: "What does 'careful' mean?", choices: ["Without care", "Full of care", "Careless", "Fast"], correctIndex: 1, explanation: "Rule: Suffix '-ful' means 'full of' or 'having'. Explanation: Taking care." },
    { question: "If a situation is 'hopeless', it has:", choices: ["Much hope", "No hope", "New hope", "Fun"], correctIndex: 1, explanation: "Rule: '-less' means without. Explanation: Despairing." },
    { question: "What does 'painful' mean?", choices: ["Causing pain", "No pain", "Happy", "Numb"], correctIndex: 0, explanation: "Rule: '-ful' means characterized by. Explanation: Full of pain or hurting." },
    { question: "What does 'homeless' mean?", choices: ["Has a big home", "Has no home", "Stays home", "Loves home"], correctIndex: 1, explanation: "Rule: '-less' means without. Explanation: Having no place to live." },
    { question: "What does 'joyful' mean?", choices: ["Sad", "Full of joy", "Without joy", "Angry"], correctIndex: 1, explanation: "Rule: '-ful' means full of. Explanation: Very happy." },
    { question: "If a machine is 'useless', it:", choices: ["Works well", "Has no use/doesn't work", "Is used often", "Is new"], correctIndex: 1, explanation: "Rule: '-less' means without. Explanation: Not serving any purpose." },
    { question: "What does 'colorful' mean?", choices: ["Black and white", "Full of colors", "Pale", "Dark"], correctIndex: 1, explanation: "Rule: '-ful' means full of. Explanation: Bright and having many colors." },
    { question: "What does 'endless' mean?", choices: ["Short", "Having no end", "Stopping", "Final"], correctIndex: 1, explanation: "Rule: '-less' means without. Explanation: Going on forever." },
    { question: "What does 'powerful' mean?", choices: ["Weak", "Having great power", "Losing", "Small"], correctIndex: 1, explanation: "Rule: '-ful' means full of. Explanation: Strong." },

    // 81-90: Suffix '-ly' (Adverbs) & '-y' (Adjectives)
    { question: "Change 'slow' to an adverb.", choices: ["Slowing", "Slowful", "Slowly", "Slowest"], correctIndex: 2, explanation: "Rule: Suffix '-ly' turns adjectives into adverbs. Explanation: Describes how something is done." },
    { question: "If it is 'rainy', there is:", choices: ["No rain", "Rain", "Sun", "Snow"], correctIndex: 1, explanation: "Rule: Suffix '-y' turns nouns into adjectives meaning 'characterized by'. Explanation: Characterized by rain." },
    { question: "What does 'happily' describe?", choices: ["A noun", "A verb (how action is done)", "A place", "A time"], correctIndex: 1, explanation: "Rule: '-ly' creates adverbs of manner. Explanation: Done in a happy way." },
    { question: "Turn 'dirt' into an adjective.", choices: ["Dirtly", "Dirty", "Dirtful", "Dirtless"], correctIndex: 1, explanation: "Rule: Add '-y' to form the adjective. Explanation: Covered in dirt." },
    { question: "What does 'loudly' mean?", choices: ["Quiet", "In a loud way", "Loudness", "Speaker"], correctIndex: 1, explanation: "Rule: Adverb formation. Explanation: With a lot of volume." },
    { question: "If something is 'messy', it is:", choices: ["Clean", "Disordered", "New", "Empty"], correctIndex: 1, explanation: "Rule: '-y' adjective. Explanation: Full of mess." },
    { question: "Change 'quick' to an adverb.", choices: ["Quicker", "Quickest", "Quickly", "Quickness"], correctIndex: 2, explanation: "Rule: Add '-ly'. Explanation: Done with speed." },
    { question: "What does 'cloudy' mean?", choices: ["Clear sky", "Full of clouds", "Blue", "Night"], correctIndex: 1, explanation: "Rule: '-y' adjective. Explanation: Covered with clouds." },
    { question: "What does 'badly' mean?", choices: ["Good", "In a bad way", "Evil", "Not bad"], correctIndex: 1, explanation: "Rule: Adverb of manner. Explanation: Done poorly." },
    { question: "Turn 'sun' into an adjective.", choices: ["Sunly", "Sunny", "Sunful", "Sunless"], correctIndex: 1, explanation: "Rule: Add '-y' (and double the consonant). Explanation: Bright with sunlight." },

    // 91-100: Suffix '-ness' & '-ment' (Nouns)
    { question: "Change 'happy' to a noun.", choices: ["Happyly", "Happiness", "Happyment", "Happiful"], correctIndex: 1, explanation: "Rule: Suffix '-ness' turns adjectives into abstract nouns. Explanation: The state of being happy." },
    { question: "What is 'enjoyment'?", choices: ["A verb", "An adjective", "A noun", "An adverb"], correctIndex: 2, explanation: "Rule: Suffix '-ment' turns verbs into nouns. Explanation: The act or state of enjoying." },
    { question: "What does 'darkness' mean?", choices: ["Light", "The state of being dark", "Paint", "Night"], correctIndex: 1, explanation: "Rule: '-ness' creates a noun of quality. Explanation: Absence of light." },
    { question: "Change 'move' to a noun.", choices: ["Moveness", "Movement", "Moving", "Mover"], correctIndex: 1, explanation: "Rule: '-ment' creates a noun of action. Explanation: The act of moving." },
    { question: "What is 'kindness'?", choices: ["Being kind", "A kind person", "To be kind", "Not kind"], correctIndex: 0, explanation: "Rule: '-ness' = quality/state. Explanation: The quality of being generous." },
    { question: "What does 'agreement' mean?", choices: ["To agree", "The act of agreeing", "Disagreed", "Argue"], correctIndex: 1, explanation: "Rule: '-ment' = result/action. Explanation: A contract or shared opinion." },
    { question: "Change 'weak' to a noun.", choices: ["Weakly", "Weakment", "Weakness", "Weaker"], correctIndex: 2, explanation: "Rule: '-ness' for qualities. Explanation: The state of being weak." },
    { question: "What is 'government'?", choices: ["To govern", "The system governing a state", "Governor", "Rule"], correctIndex: 1, explanation: "Rule: '-ment' creates the entity/system noun." },
    { question: "What does 'sickness' mean?", choices: ["To vomit", "The state of being ill", "Healthy", "Doctor"], correctIndex: 1, explanation: "Rule: '-ness' = state/condition. Explanation: Illness." },
    { question: "What is 'improvement'?", choices: ["Getting worse", "Staying same", "The act of getting better", "Prove"], correctIndex: 2, explanation: "Rule: '-ment' = process/result. Explanation: Making something better." }
  ],

  advanced: [
    // 101-110: Prefix 'Inter-' (Between) & 'Trans-' (Across)
    { question: "What does 'international' mean?", choices: ["Within one nation", "Between nations", "No nations", "New nation"], correctIndex: 1, explanation: "Rule: Prefix 'inter-' means 'between' or 'among'. Explanation: Involving two or more countries." },
    { question: "What does 'transport' mean?", choices: ["Stay", "Carry across/from place to place", "Port", "Build"], correctIndex: 1, explanation: "Rule: Prefix 'trans-' means 'across' or 'beyond'. Explanation: To move people/goods across distances." },
    { question: "If lines 'intersect', they:", choices: ["Run parallel", "Cut across each other", "Stop", "Curve"], correctIndex: 1, explanation: "Rule: 'Inter-' means between. Explanation: To cross or meet at a point." },
    { question: "What does 'transatlantic' mean?", choices: ["In the Atlantic", "Across the Atlantic Ocean", "Under the ocean", "Near the ocean"], correctIndex: 1, explanation: "Rule: 'Trans-' means across. Explanation: Crossing the Atlantic." },
    { question: "What is an 'interview'?", choices: ["A view inside", "A meeting between people", "A solo speech", "A movie"], correctIndex: 1, explanation: "Rule: 'Inter-' means between. Explanation: A meeting where people view/assess each other." },
    { question: "What does 'translate' mean?", choices: ["Write", "Speak", "Change from one language to another", "Read"], correctIndex: 2, explanation: "Rule: 'Trans-' means change/across. Explanation: Carrying meaning across languages." },
    { question: "What does 'interact' mean?", choices: ["Act alone", "Act with one another", "Stop acting", "Watch"], correctIndex: 1, explanation: "Rule: 'Inter-' means together/between. Explanation: To communicate or react with others." },
    { question: "If you 'transfer' money, you:", choices: ["Keep it", "Move it across accounts", "Spend it", "Lose it"], correctIndex: 1, explanation: "Rule: 'Trans-' means move/across. Explanation: Moving from one place to another." },
    { question: "What does 'interstate' mean?", choices: ["Inside a state", "Between states", "No state", "City"], correctIndex: 1, explanation: "Rule: 'Inter-' means between. Explanation: Connecting different states (e.g., a highway)." },
    { question: "What does 'transform' mean?", choices: ["Keep shape", "Change shape/form", "Destroy", "Build"], correctIndex: 1, explanation: "Rule: 'Trans-' means change. Explanation: To change the form or appearance completely." },

    // 111-120: Prefix 'Super-' (Above) & 'Anti-' (Against)
    { question: "What does 'superhuman' mean?", choices: ["Normal human", "Below human", "Above/Beyond human abilities", "Animal"], correctIndex: 2, explanation: "Rule: Prefix 'super-' means 'above', 'beyond', or 'extra'. Explanation: Having powers beyond normal humans." },
    { question: "What is an 'antibiotic'?", choices: ["Promotes life", "Fights against bacteria/life", "A robot", "A biology book"], correctIndex: 1, explanation: "Rule: Prefix 'anti-' means 'against'. Explanation: A medicine that destroys bacteria (anti-life of germs)." },
    { question: "What does 'supervise' mean?", choices: ["Look from above/oversee", "Ignore", "Work hard", "Vision"], correctIndex: 0, explanation: "Rule: 'Super-' means over. Explanation: To watch over people working." },
    { question: "What does 'antisocial' mean?", choices: ["Very friendly", "Against society/unfriendly", "Social media", "Crowded"], correctIndex: 1, explanation: "Rule: 'Anti-' means against. Explanation: Avoiding social interaction." },
    { question: "What is a 'supermarket'?", choices: ["A small shop", "A large market (above normal)", "A bad market", "Online store"], correctIndex: 1, explanation: "Rule: 'Super-' indicates size/scale. Explanation: A very large grocery store." },
    { question: "What creates 'antibodies'?", choices: ["The body, to fight germs", "Viruses", "Food", "Exercise"], correctIndex: 0, explanation: "Rule: 'Anti-' means against. Explanation: Proteins made to fight foreign substances." },
    { question: "What does 'superior' mean?", choices: ["Lower rank", "Higher rank/quality", "Equal", "Bad"], correctIndex: 1, explanation: "Rule: 'Super-' implies higher status. Explanation: Above average or higher in authority." },
    { question: "What is 'antifreeze'?", choices: ["Makes things freeze", "Prevents freezing", "Ice", "Water"], correctIndex: 1, explanation: "Rule: 'Anti-' means prevent/against. Explanation: Liquid used to stop engines from freezing." },
    { question: "What does 'supernatural' mean?", choices: ["Natural", "Beyond the laws of nature", "Fake", "Science"], correctIndex: 1, explanation: "Rule: 'Super-' means beyond. Explanation: Phenomena like ghosts or magic." },
    { question: "What acts as an 'antidote'?", choices: ["Poison", "Remedy against poison", "Disease", "Food"], correctIndex: 1, explanation: "Rule: 'Anti-' means counteracting. Explanation: A medicine taken to counteract a poison." },

    // 121-130: Suffix '-tion/-sion' (Noun) & '-ible/-able' (Adjective)
    { question: "Change 'educate' to a noun.", choices: ["Educate", "Education", "Educable", "Educating"], correctIndex: 1, explanation: "Rule: Suffix '-tion' creates nouns of action. Explanation: The process of educating." },
    { question: "If something is 'visible', it:", choices: ["Can be seen", "Cannot be seen", "Sees well", "Is blind"], correctIndex: 0, explanation: "Rule: Suffix '-ible' means 'able to be'. Explanation: Able to be seen." },
    { question: "What is 'decision'?", choices: ["To decide", "The act of deciding", "Decidable", "Decided"], correctIndex: 1, explanation: "Rule: '-sion' creates nouns from verbs. Explanation: A conclusion reached after thinking." },
    { question: "If something is 'breakable', it:", choices: ["Is broken", "Can be broken", "Will not break", "Is hard"], correctIndex: 1, explanation: "Rule: '-able' means 'capable of'. Explanation: Capable of breaking." },
    { question: "What is 'imagination'?", choices: ["To imagine", "Real", "The ability to imagine", "Image"], correctIndex: 2, explanation: "Rule: '-tion' creates abstract nouns. Explanation: The mental faculty of creating ideas." },
    { question: "If water is 'drinkable', it is:", choices: ["Safe to drink", "Poison", "Liquid", "Hot"], correctIndex: 0, explanation: "Rule: '-able' = fit for. Explanation: Fit to be consumed." },
    { question: "What is 'confusion'?", choices: ["To confuse", "State of being confused", "Clear", "Fact"], correctIndex: 1, explanation: "Rule: '-sion' creates state nouns. Explanation: Lack of understanding." },
    { question: "If sound is 'audible', it:", choices: ["Can be heard", "Is silent", "Is loud", "Is music"], correctIndex: 0, explanation: "Rule: '-ible' + 'aud' (hear). Explanation: Able to be heard." },
    { question: "What does 'action' mean?", choices: ["To act", "Doing something", "Lazy", "Actor"], correctIndex: 1, explanation: "Rule: '-tion' turns verb 'act' into noun 'action'." },
    { question: "If a shirt is 'washable', you:", choices: ["Throw it away", "Can wash it", "Cannot wash it", "Wear it once"], correctIndex: 1, explanation: "Rule: '-able' = can be. Explanation: Capable of being washed." },

    // 131-140: Suffix '-ity' (State) & '-ance/-ence' (Quality)
    { question: "What is 'purity'?", choices: ["Pure", "State of being pure", "To purify", "Dirt"], correctIndex: 1, explanation: "Rule: Suffix '-ity' creates abstract nouns of quality. Explanation: The condition of being pure." },
    { question: "What does 'importance' mean?", choices: ["Important", "State of being important", "Ignore", "Value"], correctIndex: 1, explanation: "Rule: Suffix '-ance' creates nouns from adjectives ending in -ant. Explanation: Significance." },
    { question: "What is 'activity'?", choices: ["Act", "State of being active", "Lazy", "Sleep"], correctIndex: 1, explanation: "Rule: '-ity' creates nouns. Explanation: The condition of things happening." },
    { question: "What implies 'silence'?", choices: ["Noise", "State of being silent", "To speak", "Loud"], correctIndex: 1, explanation: "Rule: '-ence' creates nouns from -ent adjectives. Explanation: Complete quiet." },
    { question: "What is 'ability'?", choices: ["Able", "Capacity to do something", "Weakness", "Skill"], correctIndex: 1, explanation: "Rule: '-ity' turns 'able' into 'ability'. Explanation: The power to do something." },
    { question: "What does 'difference' mean?", choices: ["Same", "State of being different", "To differ", "Copy"], correctIndex: 1, explanation: "Rule: '-ence' noun. Explanation: Dissimilarity." },
    { question: "What is 'creativity'?", choices: ["Create", "Imitation", "Use of imagination", "Painting"], correctIndex: 2, explanation: "Rule: '-ity' noun. Explanation: The ability to create." },
    { question: "What does 'acceptance' mean?", choices: ["To refuse", "Action of accepting", "Gift", "Letter"], correctIndex: 1, explanation: "Rule: '-ance' noun. Explanation: The act of agreeing to something." },
    { question: "What is 'stupidity'?", choices: ["Smart", "State of being stupid", "A joke", "School"], correctIndex: 1, explanation: "Rule: '-ity' noun. Explanation: Lack of intelligence." },
    { question: "What does 'confidence' mean?", choices: ["Shy", "Belief in oneself", "Secret", "Loud"], correctIndex: 1, explanation: "Rule: '-ence' noun. Explanation: Self-assurance." },

    // 141-150: Mixed Affixes (Context)
    { question: "Complete: 'He acted child____.' (Like a child)", choices: ["-ish", "-ous", "-ment", "-tion"], correctIndex: 0, explanation: "Rule: Suffix '-ish' means 'having the qualities of'. Explanation: Childish means like a child." },
    { question: "Complete: 'The water is colordo____.' (No color)", choices: ["-ful", "-less", "-ness", "-able"], correctIndex: 1, explanation: "Rule: '-less' means without. Explanation: Colorless." },
    { question: "Complete: 'Please ____connect the cable.' (Remove)", choices: ["Re-", "Dis-", "Un-", "Mis-"], correctIndex: 1, explanation: "Rule: 'Dis-' is the standard prefix for 'connect' to mean separate. Explanation: Disconnect." },
    { question: "Complete: 'She is a famous art____.' (Person)", choices: ["-er", "-ist", "-or", "-ian"], correctIndex: 1, explanation: "Rule: '-ist' is a specialist. Explanation: Artist." },
    { question: "Complete: '____marine.' (Under the sea)", choices: ["Trans-", "Sub-", "Super-", "Inter-"], correctIndex: 1, explanation: "Rule: 'Sub-' means under. Explanation: Submarine." },
    { question: "Complete: 'Danger____.' (Full of danger)", choices: ["-ous", "-ful", "-able", "-ive"], correctIndex: 0, explanation: "Rule: '-ous' means 'full of'. Explanation: Dangerous." },
    { question: "Complete: '____cycle.' (Two wheels)", choices: ["Uni-", "Tri-", "Bi-", "Multi-"], correctIndex: 2, explanation: "Rule: 'Bi-' means two. Explanation: Bicycle." },
    { question: "Complete: 'Brother____.' (State of being brothers)", choices: ["-ship", "-hood", "-ness", "-ment"], correctIndex: 1, explanation: "Rule: '-hood' indicates a state of being or relationship. Explanation: Brotherhood." },
    { question: "Complete: '____angle.' (Three sides)", choices: ["Tri-", "Bi-", "Quad-", "Uni-"], correctIndex: 0, explanation: "Rule: 'Tri-' means three. Explanation: Triangle." },
    { question: "Complete: 'Friend____.' (Relationship)", choices: ["-hood", "-ship", "-ness", "-ment"], correctIndex: 1, explanation: "Rule: '-ship' indicates a state or relationship. Explanation: Friendship." }
  ],

  super: [
    // 151-160: Scientific/Latin Prefixes (Omni, Bene, Mal, Circum)
    { question: "What does 'omnipotent' mean?", choices: ["All-knowing", "All-powerful", "Everywhere", "Weak"], correctIndex: 1, explanation: "Rule: Prefix 'omni-' means 'all', root 'potent' means 'power'. Explanation: Having unlimited power." },
    { question: "What does 'beneficial' mean?", choices: ["Harmful", "Good/Helpful", "Bad", "Neutral"], correctIndex: 1, explanation: "Rule: Prefix 'bene-' means 'good' or 'well'. Explanation: Producing good results." },
    { question: "What does 'malfunction' mean?", choices: ["Function well", "Function badly/fail", "New function", "Stop"], correctIndex: 1, explanation: "Rule: Prefix 'mal-' means 'bad' or 'badly'. Explanation: To fail to work correctly." },
    { question: "What does 'circumvent' mean?", choices: ["Go straight", "Go around/Avoid", "Stop", "Help"], correctIndex: 1, explanation: "Rule: Prefix 'circum-' means 'around'. Explanation: To find a way around an obstacle." },
    { question: "What does 'omnipresent' mean?", choices: ["Present everywhere", "Nowhere", "Powerful", "Knowing"], correctIndex: 0, explanation: "Rule: 'Omni-' means all. Explanation: Present in all places at all times." },
    { question: "What is a 'benefactor'?", choices: ["Enemy", "Someone who gives help/money", "Factory", "Worker"], correctIndex: 1, explanation: "Rule: 'Bene-' means good. Explanation: A person who does good for others." },
    { question: "What does 'malicious' mean?", choices: ["Kind", "Intending harm/bad", "Delicious", "Sweet"], correctIndex: 1, explanation: "Rule: 'Mal-' means bad. Explanation: Intending to do harm." },
    { question: "What does 'circumnavigate' mean?", choices: ["Sail across", "Sail all the way around", "Sail straight", "Sink"], correctIndex: 1, explanation: "Rule: 'Circum-' means around. Explanation: To travel all the way around something (like the world)." },
    { question: "What does 'omniscient' mean?", choices: ["All-powerful", "All-knowing", "All-seeing", "Present"], correctIndex: 1, explanation: "Rule: 'Omni-' (all) + 'sci' (know). Explanation: Knowing everything." },
    { question: "What is a 'malady'?", choices: ["A song", "A disease/illness", "A lady", "A cure"], correctIndex: 1, explanation: "Rule: 'Mal-' indicates bad condition. Explanation: A sickness or ailment." },

    // 161-170: Advanced Suffixes (-ology, -ism, -cracy, -osis)
    { question: "What is 'biology'?", choices: ["Study of numbers", "Study of life", "Study of earth", "Study of stars"], correctIndex: 1, explanation: "Rule: Suffix '-ology' means 'study of'. 'Bio' means life. Explanation: The science of life." },
    { question: "What implies 'democracy'?", choices: ["Rule by one", "Rule by the people", "Rule by god", "No rule"], correctIndex: 1, explanation: "Rule: Suffix '-cracy' means 'rule' or 'government'. 'Demos' means people. Explanation: Government by the people." },
    { question: "What is 'optimism'?", choices: ["Eye doctor", "Belief in the best outcome", "Pessimism", "Study of light"], correctIndex: 1, explanation: "Rule: Suffix '-ism' creates a noun describing a belief or philosophy. Explanation: Hopefulness and confidence about the future." },
    { question: "What is 'hypnosis'?", choices: ["Sleep state", "Abnormal state/condition", "Study of hips", "Drug"], correctIndex: 1, explanation: "Rule: Suffix '-osis' indicates a condition, process, or disease. Explanation: An induced state of consciousness." },
    { question: "What is 'theology'?", choices: ["Study of theory", "Study of god/religion", "Study of theater", "Belief"], correctIndex: 1, explanation: "Rule: 'Theo' (god) + '-ology' (study). Explanation: Study of the nature of God." },
    { question: "What is 'bureaucracy'?", choices: ["Government by officials", "Rule by kings", "Freedom", "Chaos"], correctIndex: 0, explanation: "Rule: '-cracy' (rule). Explanation: System of government with many departments/officials." },
    { question: "What is 'heroism'?", choices: ["A hero", "Heroic conduct/qualities", "Killing a hero", "Saving"], correctIndex: 1, explanation: "Rule: '-ism' indicates quality/behavior. Explanation: Great bravery." },
    { question: "What is 'psychosis'?", choices: ["Mind study", "Severe mental disorder", "Therapy", "Doctor"], correctIndex: 1, explanation: "Rule: '-osis' (diseased/abnormal condition). Explanation: Loss of contact with reality." },
    { question: "What is 'geology'?", choices: ["Study of geometry", "Study of the earth", "Study of maps", "Study of gas"], correctIndex: 1, explanation: "Rule: 'Geo' (earth) + '-ology'. Explanation: Science of the earth's structure." },
    { question: "What is 'capitalism'?", choices: ["Big letters", "Economic system", "Government city", "Money"], correctIndex: 1, explanation: "Rule: '-ism' (system/theory). Explanation: Economic system based on private ownership." },

    // 171-180: Etymology and Roots (Port, Spect, Dict, Scrib)
    { question: "The root 'port' means:", choices: ["Door", "Carry", "Part", "Water"], correctIndex: 1, explanation: "Rule: Latin root 'port'. Explanation: Found in transPORT (carry across), PORTable (able to be carried)." },
    { question: "The root 'spect' means:", choices: ["Speak", "Look/See", "Ghost", "Build"], correctIndex: 1, explanation: "Rule: Latin root 'spect'. Explanation: Found in inSPECT (look into), SPECTator (one who looks)." },
    { question: "The root 'dict' means:", choices: ["Read", "Say/Speak", "Lead", "Copy"], correctIndex: 1, explanation: "Rule: Latin root 'dict'. Explanation: Found in DICTate (say aloud), preDICT (say before)." },
    { question: "The root 'scrib/script' means:", choices: ["Cut", "Write", "Read", "Play"], correctIndex: 1, explanation: "Rule: Latin root 'scrib'. Explanation: Found in SCRIBble (write carelessly), deSCRIPTion (writing about)." },
    { question: "The root 'aud' means:", choices: ["See", "Hear", "Gold", "Old"], correctIndex: 1, explanation: "Rule: Latin root 'aud'. Explanation: Found in AUDio (sound), AUDience (listeners)." },
    { question: "The root 'chron' means:", choices: ["Color", "Time", "Sick", "Metal"], correctIndex: 1, explanation: "Rule: Greek root 'chron'. Explanation: Found in CHRONic (lasting a long time), CHRONology (order of time)." },
    { question: "The root 'phon' means:", choices: ["Light", "Sound", "Phone", "Distance"], correctIndex: 1, explanation: "Rule: Greek root 'phon'. Explanation: Found in telePHONe (far sound), symPHONy (sounds together)." },
    { question: "The root 'vis/vid' means:", choices: ["Life", "See", "Divide", "Conquer"], correctIndex: 1, explanation: "Rule: Latin root 'vis'. Explanation: Found in VISion (sight), VIDeo (something seen)." },
    { question: "The root 'auto' means:", choices: ["Car", "Self", "Fast", "Automatic"], correctIndex: 1, explanation: "Rule: Greek root 'auto'. Explanation: Found in AUTOgraph (self signature), AUTObiography (self life story)." },
    { question: "The root 'bio' means:", choices: ["Two", "Life", "Book", "Earth"], correctIndex: 1, explanation: "Rule: Greek root 'bio'. Explanation: Found in BIOlogy (study of life), BIOgraphy (life story)." },

    // 181-190: Tricky Look-Alikes & Nuances
    { question: "Difference between 'Uninterested' and 'Disinterested'?", choices: ["Same meaning", "Uninterested = Bored; Disinterested = Unbiased", "Uninterested = Unbiased; Disinterested = Bored", "Both mean excited"], correctIndex: 1, explanation: "Rule: Specific usage. Explanation: 'Uninterested' means not interested. 'Disinterested' means impartial/neutral (like a judge)." },
    { question: "What does 'Amoral' mean compared to 'Immoral'?", choices: ["Amoral = Very good", "Amoral = Lacking moral sense; Immoral = Knowing but doing wrong", "Same thing", "Amoral = Loving"], correctIndex: 1, explanation: "Rule: Prefix nuance. 'A-' means without (no concept of right/wrong). 'Im-' means not (violating standards)." },
    { question: "Suffix '-able' vs '-ible': It is 'Sens____'.", choices: ["-able", "-ible", "-uble", "-eble"], correctIndex: 1, explanation: "Rule: Root word test. If the root is not a full word (sens-), usually use '-ible'. Sensible." },
    { question: "Suffix '-able' vs '-ible': It is 'Depend____'.", choices: ["-able", "-ible", "-eble", "-oble"], correctIndex: 0, explanation: "Rule: Root word test. If the root is a full word (Depend), usually use '-able'. Dependable." },
    { question: "Prefix 'Fore-' vs 'For-': '____get'.", choices: ["Fore-", "For-", "Four-", "Fro-"], correctIndex: 1, explanation: "Rule: Spelling. 'For-' usually indicates prohibition/abstention. Forget." },
    { question: "Prefix 'Fore-' vs 'For-': '____head'.", choices: ["Fore-", "For-", "Four-", "Fro-"], correctIndex: 0, explanation: "Rule: 'Fore-' means front/before. Forehead." },
    { question: "Meaning of 'Biennial'?", choices: ["Twice a year", "Every two years", "Every year", "For two years"], correctIndex: 1, explanation: "Rule: 'Bi-' + 'enn' (year). Explanation: Occurring every two years. (Twice a year is Biannual)." },
    { question: "Meaning of 'Semi-annual'?", choices: ["Every two years", "Half-yearly (Twice a year)", "Partly annual", "Never"], correctIndex: 1, explanation: "Rule: 'Semi-' means half. Explanation: Occurring every half year (twice a year)." },
    { question: "Prefix 'Hyper-' vs 'Hypo-': '____thermia' (Too hot).", choices: ["Hyper-", "Hypo-", "Hydro-", "High-"], correctIndex: 0, explanation: "Rule: 'Hyper-' means over/excessive. 'Hypo-' means under. Hyperthermia is overheating." },
    { question: "Prefix 'Hyper-' vs 'Hypo-': '____dermic' (Under skin).", choices: ["Hyper-", "Hypo-", "Hydro-", "Low-"], correctIndex: 1, explanation: "Rule: 'Hypo-' means under. Hypodermic needle." },

    // 191-200: Suffixes that Change Parts of Speech (Grammar Logic)
    { question: "Turn 'Beauty' (Noun) into a Verb.", choices: ["Beautiful", "Beautify", "Beautifully", "Beautiness"], correctIndex: 1, explanation: "Rule: Suffix '-ify' creates verbs meaning 'to make'. Explanation: To make beautiful." },
    { question: "Turn 'Deep' (Adj) into a Verb.", choices: ["Deeply", "Deepness", "Deepen", "Depth"], correctIndex: 2, explanation: "Rule: Suffix '-en' creates verbs. Explanation: To make deep." },
    { question: "Turn 'Apology' (Noun) into a Verb.", choices: ["Apologize", "Apologist", "Apologetic", "Apologying"], correctIndex: 0, explanation: "Rule: Suffix '-ize' creates verbs. Explanation: To make an apology." },
    { question: "Turn 'Investigate' (Verb) into a Noun (Person).", choices: ["Investigation", "Investigative", "Investigator", "Investigating"], correctIndex: 2, explanation: "Rule: Suffix '-or' indicates the doer. Explanation: One who investigates." },
    { question: "Turn 'Simply' (Adv) into a Verb.", choices: ["Simpleness", "Simple", "Simplify", "Simplicity"], correctIndex: 2, explanation: "Rule: Suffix '-ify' creates verbs. Explanation: To make simple." },
    { question: "Turn 'Dark' (Adj) into a Noun.", choices: ["Darken", "Darkly", "Darkness", "Darked"], correctIndex: 2, explanation: "Rule: Suffix '-ness' creates nouns from adjectives. Explanation: The state of being dark." },
    { question: "Turn 'Act' (Verb) into an Adjective.", choices: ["Action", "Active", "Actor", "Acted"], correctIndex: 1, explanation: "Rule: Suffix '-ive' creates adjectives. Explanation: Doing something." },
    { question: "Turn 'Music' (Noun) into an Adjective.", choices: ["Musician", "Musical", "Musically", "Musics"], correctIndex: 1, explanation: "Rule: Suffix '-al' means 'related to'. Explanation: Related to music." },
    { question: "Turn 'Friend' (Noun) into an Adjective.", choices: ["Friendly", "Friendship", "Befriend", "Friends"], correctIndex: 0, explanation: "Rule: Suffix '-ly' on a noun usually makes an adjective. Explanation: Acting like a friend." },
    { question: "Turn 'Critic' (Person) into a Verb.", choices: ["Critical", "Criticism", "Criticize", "Critically"], correctIndex: 2, explanation: "Rule: Suffix '-ize' creates verbs. Explanation: To act as a critic." }
  ]
};
