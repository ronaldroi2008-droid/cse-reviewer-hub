// questions/words_often_confused.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data for "words_often_confused"
window.VERBAL_QUESTION_BANK["words_often_confused"] = {

  beginner: [
    // 1-10: Your vs You're
    {
      question: "Is this ____ backpack?",
      options: ["your", "you're"],
      answer: "your",
      explanation: "Rule: Possessive Adjectives. 'Your' shows that something belongs to you. Explanation: We are asking about ownership of the backpack."
    },
    {
      question: "____ coming to the party tonight.",
      options: ["Your", "You're"],
      answer: "You're",
      explanation: "Rule: Contraction. 'You're' stands for 'You are'. Explanation: The sentence means 'You are coming to the party'."
    },
    {
      question: "What's ____ favorite color?",
      options: ["your", "you're"],
      answer: "your",
      explanation: "Rule: Possession. The color preference belongs to the person. Explanation: Use 'your' to indicate personal preference."
    },
    {
      question: "I think ____ very talented.",
      options: ["your", "you're"],
      answer: "you're",
      explanation: "Rule: Subject + Verb. The sentence needs 'You are'. Explanation: 'You're' is the contraction for 'You are'."
    },
    {
      question: "Don't forget ____ jacket.",
      options: ["your", "you're"],
      answer: "your",
      explanation: "Rule: Possession. The jacket belongs to the person. Explanation: Use 'your' to show ownership."
    },
    {
      question: "____ going to love this movie!",
      options: ["Your", "You're"],
      answer: "You're",
      explanation: "Rule: Contraction. Explanation: This means 'You are going to love this movie'."
    },
    {
      question: "Is that ____ final answer?",
      options: ["your", "you're"],
      answer: "your",
      explanation: "Rule: Possessive Adjective. Explanation: The answer belongs to the person being asked."
    },
    {
      question: "____ the best friend anyone could have.",
      options: ["Your", "You're"],
      answer: "You're",
      explanation: "Rule: Subject + Verb. Explanation: The sentence requires 'You are' to be complete."
    },
    {
      question: "Show me ____ identification.",
      options: ["your", "you're"],
      answer: "your",
      explanation: "Rule: Possession. Explanation: The identification belongs to the person."
    },
    {
      question: "I heard ____ getting a promotion.",
      options: ["your", "you're"],
      answer: "you're",
      explanation: "Rule: Contraction. Explanation: This means 'You are getting a promotion'."
    },

    // 11-20: Their vs There vs They're
    {
      question: "The students left ____ books in the classroom.",
      options: ["their", "there", "they're"],
      answer: "their",
      explanation: "Rule: Possession. 'Their' means 'belonging to them'. Explanation: The books belong to the students."
    },
    {
      question: "Put the groceries over ____.",
      options: ["their", "there", "they're"],
      answer: "there",
      explanation: "Rule: Location. 'There' refers to a place. Explanation: Pointing to where the groceries should go."
    },
    {
      question: "____ planning a surprise party.",
      options: ["Their", "There", "They're"],
      answer: "They're",
      explanation: "Rule: Contraction. 'They're' means 'They are'. Explanation: 'They are planning a surprise party'."
    },
    {
      question: "____ house is painted blue.",
      options: ["Their", "There", "They're"],
      answer: "Their",
      explanation: "Rule: Ownership. Explanation: The house belongs to them."
    },
    {
      question: "____ going to be a great concert.",
      options: ["Their", "There", "They're"],
      answer: "There",
      explanation: "Rule: Existence. 'There' is used to indicate that something exists. Explanation: 'There is going to be a great concert'."
    },
    {
      question: "I hope ____ having a good time.",
      options: ["their", "there", "they're"],
      answer: "they're",
      explanation: "Rule: Contraction. Explanation: This means 'They are having a good time'."
    },
    {
      question: "The keys are right ____ on the table.",
      options: ["their", "there", "they're"],
      answer: "there",
      explanation: "Rule: Location. Explanation: Specifying where the keys are located."
    },
    {
      question: "____ car broke down yesterday.",
      options: ["Their", "There", "They're"],
      answer: "Their",
      explanation: "Rule: Possession. Explanation: The car belongs to them."
    },
    {
      question: "____ not coming to the meeting.",
      options: ["Their", "There", "They're"],
      answer: "They're",
      explanation: "Rule: Contraction. Explanation: This means 'They are not coming'."
    },
    {
      question: "Look at ____ beautiful garden!",
      options: ["their", "there", "they're"],
      answer: "their",
      explanation: "Rule: Possession. Explanation: The garden belongs to them."
    },

    // 21-30: Its vs It's
    {
      question: "The company is known for ____ excellent customer service.",
      options: ["its", "it's"],
      answer: "its",
      explanation: "Rule: Possessive 'Its'. Explanation: The customer service belongs to the company."
    },
    {
      question: "____ been raining all day.",
      options: ["Its", "It's"],
      answer: "It's",
      explanation: "Rule: Contraction. 'It's' means 'It has'. Explanation: 'It has been raining all day'."
    },
    {
      question: "The tree lost ____ leaves in autumn.",
      options: ["its", "it's"],
      answer: "its",
      explanation: "Rule: Possession. Explanation: The leaves belong to the tree."
    },
    {
      question: "____ important to study for the test.",
      options: ["Its", "It's"],
      answer: "It's",
      explanation: "Rule: Contraction. Explanation: This means 'It is important to study'."
    },
    {
      question: "The phone has ____ own charger.",
      options: ["its", "it's"],
      answer: "its",
      explanation: "Rule: Possession. Explanation: The charger belongs specifically to the phone."
    },
    {
      question: "____ not fair that she got extra time.",
      options: ["Its", "It's"],
      answer: "It's",
      explanation: "Rule: Contraction. Explanation: This means 'It is not fair'."
    },
    {
      question: "The cat is cleaning ____ fur.",
      options: ["its", "it's"],
      answer: "its",
      explanation: "Rule: Possession. Explanation: The fur belongs to the cat."
    },
    {
      question: "____ been a long time since we met.",
      options: ["Its", "It's"],
      answer: "It's",
      explanation: "Rule: Contraction. Explanation: This means 'It has been a long time'."
    },
    {
      question: "The hotel has ____ own swimming pool.",
      options: ["its", "it's"],
      answer: "its",
      explanation: "Rule: Possession. Explanation: The swimming pool belongs to the hotel."
    },
    {
      question: "____ amazing how fast time flies.",
      options: ["Its", "It's"],
      answer: "It's",
      explanation: "Rule: Contraction. Explanation: This means 'It is amazing'."
    },

    // 31-40: To vs Too vs Two
    {
      question: "I need ____ buy some groceries.",
      options: ["to", "too", "two"],
      answer: "to",
      explanation: "Rule: Infinitive Verb. 'To' is used before a verb. Explanation: 'To buy' is the infinitive form."
    },
    {
      question: "This coffee is ____ hot to drink.",
      options: ["to", "too", "two"],
      answer: "too",
      explanation: "Rule: Adverb of Degree. 'Too' means 'excessively'. Explanation: The coffee is excessively hot."
    },
    {
      question: "I have ____ younger sisters.",
      options: ["to", "too", "two"],
      answer: "two",
      explanation: "Rule: Number. 'Two' is the number 2. Explanation: Referring to the quantity of sisters."
    },
    {
      question: "Would you like ____ come with us?",
      options: ["to", "too", "two"],
      answer: "to",
      explanation: "Rule: Infinitive. Explanation: 'To come' is the infinitive verb."
    },
    {
      question: "She's coming ____ the party ____.",
      options: ["to, too", "too, to", "two, to"],
      answer: "to, too",
      explanation: "Rule: Preposition + Adverb. Explanation: 'To' indicates direction, 'too' means 'also'."
    },
    {
      question: "It's ____ late ____ apologize.",
      options: ["too, to", "to, too", "two, to"],
      answer: "too, to",
      explanation: "Rule: Adverb + Infinitive. Explanation: 'Too' means excessively, 'to apologize' is the infinitive."
    },
    {
      question: "We need ____ more chairs for the guests.",
      options: ["to", "too", "two"],
      answer: "two",
      explanation: "Rule: Number. Explanation: Referring to the quantity of chairs needed."
    },
    {
      question: "I'm going ____ the library ____ study.",
      options: ["to, to", "too, to", "two, to"],
      answer: "to, to",
      explanation: "Rule: Preposition + Infinitive. Explanation: First 'to' indicates direction, second 'to' is for the infinitive."
    },
    {
      question: "This package is ____ heavy for me ____ carry.",
      options: ["too, to", "to, too", "two, to"],
      answer: "too, to",
      explanation: "Rule: Adverb + Infinitive. Explanation: 'Too' means excessively, 'to carry' is the infinitive."
    },
    {
      question: "There are only ____ days left until vacation.",
      options: ["to", "too", "two"],
      answer: "two",
      explanation: "Rule: Number. Explanation: Counting the number of days remaining."
    },

    // 41-50: Basic Homophones (Hear/Here, Buy/By/Bye)
    {
      question: "Can you ____ that strange noise?",
      options: ["hear", "here"],
      answer: "hear",
      explanation: "Rule: Sense of Sound. 'Hear' refers to listening. Explanation: Asking about auditory perception."
    },
    {
      question: "Please come ____ and sit down.",
      options: ["hear", "here"],
      answer: "here",
      explanation: "Rule: Location. 'Here' refers to the speaker's location. Explanation: Inviting someone to your current position."
    },
    {
      question: "I need to ____ a new laptop for school.",
      options: ["buy", "by", "bye"],
      answer: "buy",
      explanation: "Rule: Purchasing. 'Buy' means to purchase. Explanation: Referring to acquiring a new laptop."
    },
    {
      question: "The report was written ____ the research team.",
      options: ["buy", "by", "bye"],
      answer: "by",
      explanation: "Rule: Preposition of Agency. 'By' indicates who performed the action. Explanation: The research team wrote the report."
    },
    {
      question: "____! See you tomorrow!",
      options: ["Buy", "By", "Bye"],
      answer: "Bye",
      explanation: "Rule: Farewell. 'Bye' is short for 'Goodbye'. Explanation: Standard parting phrase."
    },
    {
      question: "Did you ____ that beautiful painting?",
      options: ["hear", "here"],
      answer: "hear",
      explanation: "Rule: Sense of Sound. Explanation: Asking if someone heard about the painting."
    },
    {
      question: "Your package is right ____ on the desk.",
      options: ["hear", "here"],
      answer: "here",
      explanation: "Rule: Location. Explanation: Indicating the exact location of the package."
    },
    {
      question: "We're going ____ train to Chicago.",
      options: ["buy", "by", "bye"],
      answer: "by",
      explanation: "Rule: Means of Transport. Explanation: Indicating the mode of transportation."
    },
    {
      question: "Let's ____ some snacks for the movie.",
      options: ["buy", "by", "bye"],
      answer: "buy",
      explanation: "Rule: Purchasing. Explanation: Planning to purchase snacks."
    },
    {
      question: "The decision was made ____ the committee.",
      options: ["buy", "by", "bye"],
      answer: "by",
      explanation: "Rule: Preposition of Agency. Explanation: The committee made the decision."
    }
  ],

  intermediate: [
    // 51-60: Accept vs Except
    {
      question: "I ____ your generous offer.",
      options: ["accept", "except"],
      answer: "accept",
      explanation: "Rule: Definitions. 'Accept' means to receive or agree. Explanation: Receiving the offer willingly."
    },
    {
      question: "Everyone is invited ____ Tom.",
      options: ["accept", "except"],
      answer: "except",
      explanation: "Rule: Exclusion. 'Except' means 'not including'. Explanation: Tom is excluded from the invitation."
    },
    {
      question: "The store ____s credit cards.",
      options: ["accept", "except"],
      answer: "accept",
      explanation: "Rule: Receiving. Explanation: The store takes credit cards as payment."
    },
    {
      question: "All the students passed ____ Maria.",
      options: ["accept", "except"],
      answer: "except",
      explanation: "Rule: Exclusion. Explanation: Maria is the only one who didn't pass."
    },
    {
      question: "Will you ____ my friend request?",
      options: ["accept", "except"],
      answer: "accept",
      explanation: "Rule: Agreement. Explanation: Asking someone to approve the friend request."
    },
    {
      question: "I like all vegetables ____ broccoli.",
      options: ["accept", "except"],
      answer: "except",
      explanation: "Rule: Exclusion. Explanation: Broccoli is the only vegetable not liked."
    },
    {
      question: "The university ____s applications until March.",
      options: ["accept", "except"],
      answer: "accept",
      explanation: "Rule: Receiving. Explanation: The university takes applications."
    },
    {
      question: "The museum is open daily ____ Mondays.",
      options: ["accept", "except"],
      answer: "except",
      explanation: "Rule: Exclusion. Explanation: Mondays are the only days closed."
    },
    {
      question: "She decided to ____ the job offer.",
      options: ["accept", "except"],
      answer: "accept",
      explanation: "Rule: Agreement. Explanation: Taking the job that was offered."
    },
    {
      question: "All team members attended ____ the captain.",
      options: ["accept", "except"],
      answer: "except",
      explanation: "Rule: Exclusion. Explanation: The captain was the only one absent."
    },

    // 61-70: Affect vs Effect
    {
      question: "The weather can ____ your mood significantly.",
      options: ["affect", "effect"],
      answer: "affect",
      explanation: "Rule: RAVEN (Remember Affect Verb Effect Noun). 'Affect' is usually a verb meaning to influence. Explanation: Weather influences mood."
    },
    {
      question: "The new policy had a positive ____ on morale.",
      options: ["affect", "effect"],
      answer: "effect",
      explanation: "Rule: Noun Usage. 'Effect' is a noun meaning result. Explanation: Referring to the result of the policy."
    },
    {
      question: "Lack of sleep can ____ your performance.",
      options: ["affect", "effect"],
      answer: "affect",
      explanation: "Rule: Verb Usage. Explanation: Sleep influences performance."
    },
    {
      question: "The medicine's side ____s were minimal.",
      options: ["affect", "effect"],
      answer: "effect",
      explanation: "Rule: Noun Usage. Explanation: Referring to the results of taking medicine."
    },
    {
      question: "Her speech deeply ____ed the audience.",
      options: ["affect", "effect"],
      answer: "affect",
      explanation: "Rule: Verb Usage. Explanation: The speech influenced the audience emotionally."
    },
    {
      question: "The new law will take ____ next month.",
      options: ["affect", "effect"],
      answer: "effect",
      explanation: "Rule: Idiom 'Take effect'. Explanation: The law will become operational."
    },
    {
      question: "Stress can ____ your health negatively.",
      options: ["affect", "effect"],
      answer: "affect",
      explanation: "Rule: Verb Usage. Explanation: Stress influences health."
    },
    {
      question: "The special ____s in the movie were impressive.",
      options: ["affect", "effect"],
      answer: "effect",
      explanation: "Rule: Common Noun Phrase. Explanation: Referring to visual effects in film."
    },
    {
      question: "The teacher's encouragement ____ed her confidence.",
      options: ["affect", "effect"],
      answer: "affect",
      explanation: "Rule: Verb Usage. Explanation: Encouragement influenced confidence."
    },
    {
      question: "What was the ____ of the decision?",
      options: ["affect", "effect"],
      answer: "effect",
      explanation: "Rule: Noun Usage. Explanation: Asking about the result of the decision."
    },

    // 71-80: Lose vs Loose
    {
      question: "Be careful not to ____ your passport.",
      options: ["lose", "loose"],
      answer: "lose",
      explanation: "Rule: Definitions. 'Lose' means to misplace. Explanation: Warning about misplacing the passport."
    },
    {
      question: "The screw is ____ and needs tightening.",
      options: ["lose", "loose"],
      answer: "loose",
      explanation: "Rule: Adjective Usage. 'Loose' means not tight. Explanation: The screw is not firmly attached."
    },
    {
      question: "Our team cannot afford to ____ this game.",
      options: ["lose", "loose"],
      answer: "lose",
      explanation: "Rule: Failure. Explanation: The team cannot afford to fail in the game."
    },
    {
      question: "She wore a ____ dress for comfort.",
      options: ["lose", "loose"],
      answer: "loose",
      explanation: "Rule: Adjective Usage. Explanation: The dress is not tight-fitting."
    },
    {
      question: "Did you ____ your phone again?",
      options: ["lose", "loose"],
      answer: "lose",
      explanation: "Rule: Misplacement. Explanation: Asking if the phone was misplaced."
    },
    {
      question: "The dog broke ____ from its leash.",
      options: ["lose", "loose"],
      answer: "loose",
      explanation: "Rule: 'Break loose' idiom. Explanation: The dog escaped from restraint."
    },
    {
      question: "I always ____ my keys in this messy room.",
      options: ["lose", "loose"],
      answer: "lose",
      explanation: "Rule: Misplacement. Explanation: Frequently misplacing keys."
    },
    {
      question: "The button on my shirt is ____.",
      options: ["lose", "loose"],
      answer: "loose",
      explanation: "Rule: Adjective Usage. Explanation: The button is not securely attached."
    },
    {
      question: "We might ____ our funding if we're not careful.",
      options: ["lose", "loose"],
      answer: "lose",
      explanation: "Rule: Deprivation. Explanation: Risking the loss of funding."
    },
    {
      question: "The rope was too ____ to be safe.",
      options: ["lose", "loose"],
      answer: "loose",
      explanation: "Rule: Adjective Usage. Explanation: The rope lacked proper tension."
    },

    // 81-90: Then vs Than
    {
      question: "First complete your homework, ____ you can play.",
      options: ["then", "than"],
      answer: "then",
      explanation: "Rule: Sequence of Time. 'Then' indicates what happens next. Explanation: Playing happens after homework."
    },
    {
      question: "She is taller ____ her brother.",
      options: ["then", "than"],
      answer: "than",
      explanation: "Rule: Comparison. 'Than' is used for comparisons. Explanation: Comparing heights."
    },
    {
      question: "If it rains, ____ we'll stay indoors.",
      options: ["then", "than"],
      answer: "then",
      explanation: "Rule: Conditional Logic. Explanation: 'Then' introduces the consequence."
    },
    {
      question: "This book is more interesting ____ that one.",
      options: ["then", "than"],
      answer: "than",
      explanation: "Rule: Comparison. Explanation: Comparing the interest level of two books."
    },
    {
      question: "We went to dinner and ____ to the movies.",
      options: ["then", "than"],
      answer: "then",
      explanation: "Rule: Time Sequence. Explanation: Movies happened after dinner."
    },
    {
      question: "I'd rather read ____ watch television.",
      options: ["then", "than"],
      answer: "than",
      explanation: "Rule: Preference. Explanation: Showing preference between two activities."
    },
    {
      question: "Back ____, things were very different.",
      options: ["then", "than"],
      answer: "then",
      explanation: "Rule: Time Reference. Explanation: Referring to a specific past time."
    },
    {
      question: "Your essay is better ____ mine.",
      options: ["then", "than"],
      answer: "than",
      explanation: "Rule: Comparison. Explanation: Comparing the quality of two essays."
    },
    {
      question: "We'll have lunch and ____ go shopping.",
      options: ["then", "than"],
      answer: "then",
      explanation: "Rule: Time Sequence. Explanation: Shopping happens after lunch."
    },
    {
      question: "Nothing tastes better ____ homemade pizza.",
      options: ["then", "than"],
      answer: "than",
      explanation: "Rule: Comparison. Explanation: Comparing homemade pizza to other foods."
    },

    // 91-100: Passed vs Past
    {
      question: "We ____ the library on our way to school.",
      options: ["passed", "past"],
      answer: "passed",
      explanation: "Rule: Past Tense Verb. 'Passed' is the past tense of pass. Explanation: We moved by the library."
    },
    {
      question: "In the ____, people used different technology.",
      options: ["passed", "past"],
      answer: "past",
      explanation: "Rule: Noun Usage. 'Past' refers to time before now. Explanation: Referring to previous times."
    },
    {
      question: "She ____ her driving test on the first try.",
      options: ["passed", "past"],
      answer: "passed",
      explanation: "Rule: Achievement. Explanation: She succeeded in the test."
    },
    {
      question: "The store is just ____ the traffic light.",
      options: ["passed", "past"],
      answer: "past",
      explanation: "Rule: Preposition of Movement. 'Past' means beyond. Explanation: The store is beyond the traffic light."
    },
    {
      question: "Time has ____ so quickly this year.",
      options: ["passed", "past"],
      answer: "passed",
      explanation: "Rule: Verb Usage. Explanation: Time has moved forward."
    },
    {
      question: "Let's not dwell on the ____.",
      options: ["passed", "past"],
      answer: "past",
      explanation: "Rule: Noun Usage. Explanation: Referring to previous events or times."
    },
    {
      question: "The runner ____ the finish line first.",
      options: ["passed", "past"],
      answer: "passed",
      explanation: "Rule: Movement. Explanation: The runner moved beyond the finish line."
    },
    {
      question: "Our ____ experiences shape who we are.",
      options: ["passed", "past"],
      answer: "past",
      explanation: "Rule: Adjective Usage. Explanation: Referring to previous experiences."
    },
    {
      question: "He ____ the ball to his teammate.",
      options: ["passed", "past"],
      answer: "passed",
      explanation: "Rule: Sports Action. Explanation: Throwing the ball to another player."
    },
    {
      question: "The old building has seen better days in years ____.",
      options: ["passed", "past"],
      answer: "past",
      explanation: "Rule: Time Reference. Explanation: Referring to previous years."
    }
  ],

  advanced: [
    // 101-110: Fewer vs Less
    {
      question: "There are ____ students in class today.",
      options: ["fewer", "less"],
      answer: "fewer",
      explanation: "Rule: Countable vs Uncountable. 'Fewer' for countable nouns. Explanation: Students can be counted."
    },
    {
      question: "I need ____ sugar in my coffee.",
      options: ["fewer", "less"],
      answer: "less",
      explanation: "Rule: Uncountable Noun. 'Less' for mass nouns. Explanation: Sugar cannot be counted individually."
    },
    {
      question: "We have ____ opportunities this year.",
      options: ["fewer", "less"],
      answer: "fewer",
      explanation: "Rule: Countable Noun. Explanation: Opportunities are countable."
    },
    {
      question: "Please use ____ water when showering.",
      options: ["fewer", "less"],
      answer: "less",
      explanation: "Rule: Uncountable Noun. Explanation: Water is a mass noun."
    },
    {
      question: "There were ____ cars on the road during the storm.",
      options: ["fewer", "less"],
      answer: "fewer",
      explanation: "Rule: Countable Noun. Explanation: Cars are countable objects."
    },
    {
      question: "I have ____ patience for rude behavior.",
      options: ["fewer", "less"],
      answer: "less",
      explanation: "Rule: Uncountable Noun. Explanation: Patience is an abstract quality."
    },
    {
      question: "____ people attended the meeting than expected.",
      options: ["Fewer", "Less"],
      answer: "Fewer",
      explanation: "Rule: Countable Noun. Explanation: People are countable."
    },
    {
      question: "We need ____ furniture in this small room.",
      options: ["fewer", "less"],
      answer: "less",
      explanation: "Rule: Uncountable Noun. Explanation: Furniture is treated as a mass noun."
    },
    {
      question: "There are ____ mistakes in your second draft.",
      options: ["fewer", "less"],
      answer: "fewer",
      explanation: "Rule: Countable Noun. Explanation: Mistakes are individual items."
    },
    {
      question: "I feel ____ stress since I started exercising.",
      options: ["fewer", "less"],
      answer: "less",
      explanation: "Rule: Uncountable Noun. Explanation: Stress is an abstract concept."
    },

    // 111-120: Lie vs Lay
    {
      question: "I need to ____ down for a while.",
      options: ["lie", "lay"],
      answer: "lie",
      explanation: "Rule: Intransitive vs Transitive. 'Lie' means to recline. Explanation: No object is being placed."
    },
    {
      question: "Please ____ the documents on my desk.",
      options: ["lie", "lay"],
      answer: "lay",
      explanation: "Rule: Transitive Verb. 'Lay' means to put something down. Explanation: Documents are the object being placed."
    },
    {
      question: "The cat loves to ____ in the sun.",
      options: ["lie", "lay"],
      answer: "lie",
      explanation: "Rule: Intransitive. Explanation: The cat is reclining itself."
    },
    {
      question: "Will you ____ the table for dinner?",
      options: ["lie", "lay"],
      answer: "lay",
      explanation: "Rule: Transitive. Explanation: Setting the table involves placing objects."
    },
    {
      question: "The books have ____ on that shelf for years.",
      options: ["lain", "laid"],
      answer: "lain",
      explanation: "Rule: Past Participle. 'Lain' is past participle of lie. Explanation: Books have been resting there."
    },
    {
      question: "She ____ the foundation for the new building.",
      options: ["lay", "laid"],
      answer: "laid",
      explanation: "Rule: Past Tense of Lay. Explanation: She put down the foundation."
    },
    {
      question: "I'm going to ____ on the couch and read.",
      options: ["lie", "lay"],
      answer: "lie",
      explanation: "Rule: Intransitive. Explanation: Reclining on the couch."
    },
    {
      question: "The hen ____ an egg every morning.",
      options: ["lies", "lays"],
      answer: "lays",
      explanation: "Rule: Transitive (Producing). Explanation: The hen produces eggs."
    },
    {
      question: "He has ____ in bed all morning.",
      options: ["lain", "laid"],
      answer: "lain",
      explanation: "Rule: Past Participle. Explanation: He has been reclining in bed."
    },
    {
      question: "They ____ the carpet in the living room.",
      options: ["lay", "laid"],
      answer: "laid",
      explanation: "Rule: Past Tense of Lay. Explanation: They installed the carpet."
    },

    // 121-130: Farther vs Further
    {
      question: "How much ____ do we have to drive?",
      options: ["farther", "further"],
      answer: "farther",
      explanation: "Rule: Physical Distance. 'Farther' for measurable distance. Explanation: Asking about physical driving distance."
    },
    {
      question: "We need to discuss this ____.",
      options: ["farther", "further"],
      answer: "further",
      explanation: "Rule: Metaphorical Distance. 'Further' for degree or extent. Explanation: Wanting more in-depth discussion."
    },
    {
      question: "Can you throw the ball ____?",
      options: ["farther", "further"],
      answer: "farther",
      explanation: "Rule: Physical Distance. Explanation: Asking about physical throwing distance."
    },
    {
      question: "I have nothing ____ to add.",
      options: ["farther", "further"],
      answer: "further",
      explanation: "Rule: Additional. Explanation: No more information to contribute."
    },
    {
      question: "The ____ we go, the more beautiful the scenery.",
      options: ["farther", "further"],
      answer: "farther",
      explanation: "Rule: Physical Distance. Explanation: Referring to physical travel distance."
    },
    {
      question: "For ____ information, check our website.",
      options: ["farther", "further"],
      answer: "further",
      explanation: "Rule: Additional. Explanation: More or additional information."
    },
    {
      question: "My house is ____ from school than yours.",
      options: ["farther", "further"],
      answer: "farther",
      explanation: "Rule: Physical Distance. Explanation: Comparing physical distances."
    },
    {
      question: "We need to look ____ into this matter.",
      options: ["farther", "further"],
      answer: "further",
      explanation: "Rule: Degree/Depth. Explanation: Investigating more thoroughly."
    },
    {
      question: "The store is ____ down the road.",
      options: ["farther", "further"],
      answer: "farther",
      explanation: "Rule: Physical Distance. Explanation: Referring to physical location."
    },
    {
      question: "This will ____ complicate the situation.",
      options: ["farther", "further"],
      answer: "further",
      explanation: "Rule: Verb Usage. 'Further' can be a verb. Explanation: This will advance the complication."
    },

    // 131-140: Rise vs Raise
    {
      question: "The sun will ____ at 6:00 AM tomorrow.",
      options: ["rise", "raise"],
      answer: "rise",
      explanation: "Rule: Intransitive vs Transitive. 'Rise' means to go up on its own. Explanation: The sun moves upward by itself."
    },
    {
      question: "Please ____ your hand if you have a question.",
      options: ["rise", "raise"],
      answer: "raise",
      explanation: "Rule: Transitive Verb. 'Raise' needs an object. Explanation: You are lifting your hand."
    },
    {
      question: "Bread dough needs to ____ for an hour.",
      options: ["rise", "raise"],
      answer: "rise",
      explanation: "Rule: Intransitive. Explanation: The dough expands upward naturally."
    },
    {
      question: "The company will ____ prices next month.",
      options: ["rise", "raise"],
      answer: "raise",
      explanation: "Rule: Transitive. Explanation: The company is increasing prices (object)."
    },
    {
      question: "Everyone ____ when the judge entered.",
      options: ["rose", "raised"],
      answer: "rose",
      explanation: "Rule: Past Tense of Rise. Explanation: People stood up themselves."
    },
    {
      question: "She ____ three children by herself.",
      options: ["rose", "raised"],
      answer: "raised",
      explanation: "Rule: Past Tense of Raise. Explanation: She brought up children (object)."
    },
    {
      question: "The moon ____ over the mountains.",
      options: ["rises", "raises"],
      answer: "rises",
      explanation: "Rule: Intransitive. Explanation: The moon appears to move upward."
    },
    {
      question: "We need to ____ awareness about this issue.",
      options: ["rise", "raise"],
      answer: "raise",
      explanation: "Rule: Transitive. Explanation: Increasing awareness (object)."
    },
    {
      question: "The cost of living continues to ____.",
      options: ["rise", "raise"],
      answer: "rise",
      explanation: "Rule: Intransitive. Explanation: Costs are increasing by themselves."
    },
    {
      question: "He ____ his voice to be heard.",
      options: ["rose", "raised"],
      answer: "raised",
      explanation: "Rule: Past Tense of Raise. Explanation: He increased his voice volume."
    },

    // 141-150: Advice vs Advise
    {
      question: "Can you give me some ____ about colleges?",
      options: ["advice", "advise"],
      answer: "advice",
      explanation: "Rule: Noun vs Verb. 'Advice' is the noun. Explanation: Asking for recommendations or guidance."
    },
    {
      question: "I ____ you to apply early.",
      options: ["advice", "advise"],
      answer: "advise",
      explanation: "Rule: Verb Usage. 'Advise' is the verb. Explanation: Giving a recommendation or suggestion."
    },
    {
      question: "That's excellent ____!",
      options: ["advice", "advise"],
      answer: "advice",
      explanation: "Rule: Noun Usage. Explanation: Referring to the quality of the recommendation."
    },
    {
      question: "My doctor ____d me to exercise more.",
      options: ["advice", "advise"],
      answer: "advise",
      explanation: "Rule: Verb Usage. Explanation: The doctor recommended exercise."
    },
    {
      question: "I need your ____ on this matter.",
      options: ["advice", "advise"],
      answer: "advice",
      explanation: "Rule: Noun Usage. Explanation: Asking for guidance or opinion."
    },
    {
      question: "They ____ against traveling during the storm.",
      options: ["advice", "advise"],
      answer: "advise",
      explanation: "Rule: Verb Usage. Explanation: They recommend not traveling."
    },
    {
      question: "Her ____ was very helpful.",
      options: ["advice", "advise"],
      answer: "advice",
      explanation: "Rule: Noun Usage. Explanation: Referring to the helpful recommendation."
    },
    {
      question: "What would you ____ me to do?",
      options: ["advice", "advise"],
      answer: "advise",
      explanation: "Rule: Verb Usage. Explanation: Asking for a recommendation."
    },
    {
      question: "I always follow my father's ____.",
      options: ["advice", "advise"],
      answer: "advice",
      explanation: "Rule: Noun Usage. Explanation: Referring to father's guidance."
    },
    {
      question: "The lawyer will ____ you of your rights.",
      options: ["advice", "advise"],
      answer: "advise",
      explanation: "Rule: Verb Usage. Explanation: The lawyer will inform you."
    }
  ],

  expert: [
    // 151-160: Disinterested vs Uninterested
    {
      question: "A good judge must remain ____.",
      options: ["uninterested", "disinterested"],
      answer: "disinterested",
      explanation: "Rule: Bias vs Boredom. 'Disinterested' means impartial. Explanation: Judges need to be unbiased."
    },
    {
      question: "He seemed ____ in the lecture and kept checking his phone.",
      options: ["uninterested", "disinterested"],
      answer: "uninterested",
      explanation: "Rule: Boredom. 'Uninterested' means not interested. Explanation: His behavior showed lack of interest."
    },
    {
      question: "We need a ____ party to mediate the dispute.",
      options: ["uninterested", "disinterested"],
      answer: "disinterested",
      explanation: "Rule: Impartiality. Explanation: A mediator must be neutral."
    },
    {
      question: "The children were ____ in the educational video.",
      options: ["uninterested", "disinterested"],
      answer: "uninterested",
      explanation: "Rule: Lack of Interest. Explanation: The children found it boring."
    },
    {
      question: "Her ____ analysis helped resolve the conflict.",
      options: ["uninterested", "disinterested"],
      answer: "disinterested",
      explanation: "Rule: Unbiased. Explanation: The analysis was objective and fair."
    },
    {
      question: "I'm completely ____ in sports.",
      options: ["uninterested", "disinterested"],
      answer: "uninterested",
      explanation: "Rule: Personal Interest. Explanation: Having no interest in sports."
    },
    {
      question: "The committee sought ____ advice.",
      options: ["uninterested", "disinterested"],
      answer: "disinterested",
      explanation: "Rule: Impartial Advice. Explanation: Seeking objective, unbiased advice."
    },
    {
      question: "She was ____ in continuing the conversation.",
      options: ["uninterested", "disinterested"],
      answer: "uninterested",
      explanation: "Rule: Boredom. Explanation: She didn't want to continue talking."
    },
    {
      question: "A ____ observer recorded the events.",
      options: ["uninterested", "disinterested"],
      answer: "disinterested",
      explanation: "Rule: Objective Observation. Explanation: The observer was neutral."
    },
    {
      question: "He's ____ in learning anything new.",
      options: ["uninterested", "disinterested"],
      answer: "uninterested",
      explanation: "Rule: Lack of Curiosity. Explanation: He has no desire to learn."
    },

    // 161-170: Imply vs Infer
    {
      question: "What are you trying to ____ with that statement?",
      options: ["imply", "infer"],
      answer: "imply",
      explanation: "Rule: Speaker vs Listener. 'Imply' means to suggest. Explanation: The speaker is suggesting something."
    },
    {
      question: "From her tone, I ____ that she was angry.",
      options: ["imply", "infer"],
      answer: "infer",
      explanation: "Rule: Deduction. 'Infer' means to deduce. Explanation: The listener is drawing a conclusion."
    },
    {
      question: "The data ____s a correlation between the variables.",
      options: ["imply", "infer"],
      answer: "imply",
      explanation: "Rule: Suggestion. Explanation: The data suggests a relationship."
    },
    {
      question: "What can we ____ from these results?",
      options: ["imply", "infer"],
      answer: "infer",
      explanation: "Rule: Conclusion. Explanation: Drawing conclusions from results."
    },
    {
      question: "I didn't mean to ____ that you were wrong.",
      options: ["imply", "infer"],
      answer: "imply",
      explanation: "Rule: Suggestion. Explanation: Not intending to suggest something."
    },
    {
      question: "Readers can ____ the author's meaning from context.",
      options: ["imply", "infer"],
      answer: "infer",
      explanation: "Rule: Deduction. Explanation: Readers deduce meaning."
    },
    {
      question: "His smile ____ed that he approved.",
      options: ["imply", "infer"],
      answer: "imply",
      explanation: "Rule: Suggestion. Explanation: The smile suggested approval."
    },
    {
      question: "From the evidence, we ____ that he was innocent.",
      options: ["imply", "infer"],
      answer: "infer",
      explanation: "Rule: Conclusion. Explanation: Drawing a conclusion from evidence."
    },
    {
      question: "The report ____s several possible solutions.",
      options: ["imply", "infer"],
      answer: "imply",
      explanation: "Rule: Suggestion. Explanation: The report suggests solutions."
    },
    {
      question: "It's dangerous to ____ too much from limited data.",
      options: ["imply", "infer"],
      answer: "infer",
      explanation: "Rule: Deduction. Explanation: Drawing extensive conclusions."
    },

    // 171-180: Comprise vs Compose
    {
      question: "The committee ____ seven members.",
      options: ["comprises", "composes"],
      answer: "comprises",
      explanation: "Rule: Whole to Parts. 'Comprise' means to include. Explanation: The committee includes seven members."
    },
    {
      question: "Seven members ____ the committee.",
      options: ["comprise", "compose"],
      answer: "compose",
      explanation: "Rule: Parts to Whole. 'Compose' means to make up. Explanation: The members make up the committee."
    },
    {
      question: "The book is ____d of twelve chapters.",
      options: ["comprise", "compose"],
      answer: "compose",
      explanation: "Rule: Standard Usage. Explanation: 'Is composed of' is the correct phrase."
    },
    {
      question: "Fifty states ____ the United States.",
      options: ["comprise", "compose"],
      answer: "compose",
      explanation: "Rule: Parts to Whole. Explanation: The states make up the country."
    },
    {
      question: "The collection ____ valuable artifacts.",
      options: ["comprises", "composes"],
      answer: "comprises",
      explanation: "Rule: Whole to Parts. Explanation: The collection includes artifacts."
    },
    {
      question: "Water is ____d of hydrogen and oxygen.",
      options: ["comprise", "compose"],
      answer: "compose",
      explanation: "Rule: Chemical Composition. Explanation: 'Is composed of' describes makeup."
    },
    {
      question: "The team ____ players from various countries.",
      options: ["comprises", "composes"],
      answer: "comprises",
      explanation: "Rule: Whole to Parts. Explanation: The team includes the players."
    },
    {
      question: "Various elements ____ the complex mixture.",
      options: ["comprise", "compose"],
      answer: "compose",
      explanation: "Rule: Parts to Whole. Explanation: The elements make up the mixture."
    },
    {
      question: "The apartment ____ three rooms.",
      options: ["comprises", "composes"],
      answer: "comprises",
      explanation: "Rule: Whole to Parts. Explanation: The apartment includes three rooms."
    },
    {
      question: "Three rooms ____ the apartment.",
      options: ["comprise", "compose"],
      answer: "compose",
      explanation: "Rule: Parts to Whole. Explanation: The rooms make up the apartment."
    },

    // 181-190: Principle vs Principal
    {
      question: "The school ____ announced the new policy.",
      options: ["principle", "principal"],
      answer: "principal",
      explanation: "Rule: Person vs Rule. 'Principal' means school head. Explanation: Referring to the school administrator."
    },
    {
      question: "It's against my ____ to lie.",
      options: ["principle", "principal"],
      answer: "principle",
      explanation: "Rule: Moral Rule. 'Principle' means fundamental truth. Explanation: Referring to personal moral standards."
    },
    {
      question: "The ____ amount of the loan is $10,000.",
      options: ["principle", "principal"],
      answer: "principal",
      explanation: "Rule: Finance. Explanation: Referring to the main amount of money."
    },
    {
      question: "She stands by her ____s.",
      options: ["principle", "principal"],
      answer: "principle",
      explanation: "Rule: Beliefs. Explanation: Referring to her fundamental beliefs."
    },
    {
      question: "The ____ dancer performed beautifully.",
      options: ["principle", "principal"],
      answer: "principal",
      explanation: "Rule: Main Performer. Explanation: Referring to the lead dancer."
    },
    {
      question: "The ____ of gravity explains why objects fall.",
      options: ["principle", "principal"],
      answer: "principle",
      explanation: "Rule: Scientific Law. Explanation: Referring to a fundamental scientific concept."
    },
    {
      question: "Our ____ concern is student safety.",
      options: ["principle", "principal"],
      answer: "principal",
      explanation: "Rule: Adjective 'Main'. Explanation: Referring to the primary concern."
    },
    {
      question: "He's a man of strong ____.",
      options: ["principle", "principal"],
      answer: "principle",
      explanation: "Rule: Moral Character. Explanation: Referring to strong moral standards."
    },
    {
      question: "The ____ investigator on the case.",
      options: ["principle", "principal"],
      answer: "principal",
      explanation: "Rule: Main Role. Explanation: Referring to the lead investigator."
    },
    {
      question: "Basic ____s of mathematics.",
      options: ["principle", "principal"],
      answer: "principle",
      explanation: "Rule: Fundamental Rules. Explanation: Referring to basic mathematical rules."
    },

    // 191-200: Obscure Pairs
    {
      question: "Please be ____ when discussing confidential matters.",
      options: ["discrete", "discreet"],
      answer: "discreet",
      explanation: "Rule: Spelling Nuance. 'Discreet' means careful/secretive. Explanation: Need for confidentiality requires discretion."
    },
    {
      question: "The data is divided into ____ categories.",
      options: ["discrete", "discreet"],
      answer: "discrete",
      explanation: "Rule: Distinct Parts. 'Discrete' means separate. Explanation: Categories are distinct from each other."
    },
    {
      question: "She is an ____ scientist in her field.",
      options: ["imminent", "eminent"],
      answer: "eminent",
      explanation: "Rule: Definitions. 'Eminent' means famous/respected. Explanation: Referring to a highly regarded scientist."
    },
    {
      question: "The storm's arrival is ____.",
      options: ["imminent", "eminent"],
      answer: "imminent",
      explanation: "Rule: Time. 'Imminent' means about to happen. Explanation: The storm is coming soon."
    },
    {
      question: "The teacher tried to ____ responses from the quiet students.",
      options: ["illicit", "elicit"],
      answer: "elicit",
      explanation: "Rule: Verb vs Adjective. 'Elicit' means to draw out. Explanation: Drawing out responses from students."
    },
    {
      question: "____ activities are prohibited.",
      options: ["Illicit", "Elicit"],
      answer: "Illicit",
      explanation: "Rule: Legality. 'Illicit' means illegal. Explanation: Illegal activities are forbidden."
    },
    {
      question: "We visited the state ____ building.",
      options: ["capital", "capitol"],
      answer: "capitol",
      explanation: "Rule: Building vs City. 'Capitol' is the building. Explanation: Referring to the government building."
    },
    {
      question: "Madrid is the ____ of Spain.",
      options: ["capital", "capitol"],
      answer: "capital",
      explanation: "Rule: Governing City. Explanation: Referring to the main city."
    },
    {
      question: "I need to buy some ____ for writing letters.",
      options: ["stationary", "stationery"],
      answer: "stationery",
      explanation: "Rule: Spelling Trick. 'Stationery' is paper. Explanation: Paper products for writing."
    },
    {
      question: "The car remained ____ at the red light.",
      options: ["stationary", "stationery"],
      answer: "stationary",
      explanation: "Rule: Movement. 'Stationary' means not moving. Explanation: The car was stopped."
    }
  ]
};
