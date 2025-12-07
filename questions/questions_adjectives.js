// questions/adjectives.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["adjectives"] = {

  // ============================================================
  // LEVEL 1: BEGINNER (50 Items) - Identification & Basic Types
  // ============================================================
  beginner: [
    { question: "Which word is the adjective? 'She bought a red bag.'", options: ["She", "bought", "red", "bag"], answer: "red", explanation: "Describes the bag." },
    { question: "Which word is the adjective? 'The tall boy is my cousin.'", options: ["tall", "boy", "is", "cousin"], answer: "tall", explanation: "Describes the boy." },
    { question: "In 'four chairs', 'four' is a:", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: "Adjective", explanation: "Numeral adjective." },
    { question: "Adjective in: 'We had a delicious meal.'", options: ["We", "had", "delicious", "meal"], answer: "delicious", explanation: "Describes the meal." },
    { question: "Adjective in: 'That building is new.'", options: ["That", "building", "is", "new"], answer: "new", explanation: "Describes the building." },
    { question: "Adjective in: 'She lives in a small house.'", options: ["lives", "small", "house", "in"], answer: "small", explanation: "Describes the house." },
    { question: "Adjective in: 'My bag is heavy.'", options: ["My", "bag", "is", "heavy"], answer: "heavy", explanation: "Describes the bag." },
    { question: "Adjective in: 'They watched an exciting movie.'", options: ["They", "watched", "exciting", "movie"], answer: "exciting", explanation: "Describes the movie." },
    { question: "Adjective in: 'The streets are quiet tonight.'", options: ["streets", "are", "quiet", "tonight"], answer: "quiet", explanation: "Describes the streets." },
    { question: "Adjective in: 'She has long hair.'", options: ["She", "has", "long", "hair"], answer: "long", explanation: "Describes the hair." },
    
    // Types
    { question: "Which is a demonstrative adjective?", options: ["quickly", "those", "hers", "they"], answer: "those", explanation: "Points to specific items (those bags)." },
    { question: "Which is a possessive adjective?", options: ["hers", "their", "them", "they"], answer: "their", explanation: "Shows ownership (their house)." },
    { question: "Identify the interrogative adjective:", options: ["Which book?", "Which is it?", "Whose is that?", "What?"], answer: "Which book?", explanation: "'Which' modifies 'book'." },
    { question: "Adjective in: 'Our teacher is kind.'", options: ["Our", "teacher", "is", "kind"], answer: "kind", explanation: "Descriptive adjective." },
    { question: "Which has a proper adjective?", options: ["fresh fruit", "Filipino food", "fast car", "quiet street"], answer: "Filipino food", explanation: "Derived from proper noun Philippines." },
    { question: "Which has a numeral adjective?", options: ["some apples", "many books", "three brothers", "enough time"], answer: "three brothers", explanation: "Exact number." },
    { question: "Which is a quantitative adjective?", options: ["few", "quickly", "sing", "teacher"], answer: "few", explanation: "Shows amount." },
    { question: "Demonstrative adjective in: 'That car is expensive.'", options: ["That", "car", "is", "expensive"], answer: "That", explanation: "Points out the car." },
    { question: "Correct possessive adjective usage:", options: ["This is me pen", "This is mine pen", "This is my pen", "This is I pen"], answer: "This is my pen", explanation: "My + Noun." },
    { question: "Sentence with interrogative adjective:", options: ["What is that?", "Whose bag is this?", "Who is he?", "Where are they?"], answer: "Whose bag is this?", explanation: "'Whose' modifies 'bag'." },

    // Adj vs Adv Basics
    { question: "Choose correct usage:", options: ["She sings beautiful", "She sings beautifully", "She sings beauty", "She sings beautify"], answer: "She sings beautifully", explanation: "Adverb describing verb." },
    { question: "Correct usage after linking verb 'smells':", options: ["smells good", "smells well", "smells quickly", "smells carefully"], answer: "smells good", explanation: "Linking verb takes adjective." },
    { question: "Which is correct?", options: ["He feels badly", "He feels bad", "He feels badder", "He feels more bad"], answer: "He feels bad", explanation: "Linking verb 'feels' + adjective." },
    { question: "Correct usage:", options: ["tastes sweet", "tastes sweetly", "tastes sweetness", "tastes sweetful"], answer: "tastes sweet", explanation: "Linking verb 'tastes' + adjective." },
    { question: "Adjective in: 'He is a careful driver.'", options: ["He", "is", "careful", "driver"], answer: "careful", explanation: "Describes driver." },
    { question: "Sentence using adverb correctly:", options: ["He drives careful", "He drives carefully", "He is carefully", "He is carefully driver"], answer: "He drives carefully", explanation: "Modifies verb 'drives'." },
    { question: "Correct usage of 'good':", options: ["sings good", "is a good singer", "sings more good", "sings goodly"], answer: "is a good singer", explanation: "Good describes noun 'singer'." },
    { question: "Adjective in: 'It was a noisy classroom.'", options: ["It", "was", "noisy", "classroom"], answer: "noisy", explanation: "Describes classroom." },
    { question: "Usage of 'well' as adjective (health):", options: ["I feel well", "I feel quickly", "I feel hardly", "I feel slowly"], answer: "I feel well", explanation: "Well = healthy." },
    { question: "Which is an adjective?", options: ["quick", "quickly", "quickness", "quickerly"], answer: "quick", explanation: "Simple form." },

    // Simple Comparison
    { question: "Comparative of 'tall':", options: ["taller", "more tall", "tallest", "most tall"], answer: "taller", explanation: "Add -er." },
    { question: "Superlative of 'small':", options: ["more small", "smallest", "most small", "smaller"], answer: "smallest", explanation: "Add -est." },
    { question: "Comparative of 'beautiful':", options: ["beautifuller", "more beautiful", "most beautiful", "beautifullest"], answer: "more beautiful", explanation: "Long adjectives take 'more'." },
    { question: "Superlative of 'interesting':", options: ["more interesting", "most interesting", "interestinger", "interestingest"], answer: "most interesting", explanation: "Long adjectives take 'most'." },
    { question: "Ana is ___ than Bea.", options: ["smart", "smarter", "smartest", "more smart"], answer: "smarter", explanation: "Comparing two." },
    { question: "Comparing 3+ players:", options: ["he is the taller", "he is taller", "he is the tallest", "he is more tall"], answer: "he is the tallest", explanation: "Superlative for 3+." },
    { question: "Comparative of 'narrow':", options: ["narrow", "narrower", "narrowest", "more narrowest"], answer: "narrower", explanation: "Add -er." },
    { question: "Superlative of 'happy':", options: ["happier", "more happy", "happiest", "most happiest"], answer: "happiest", explanation: "y becomes i + est." },
    { question: "Comparative of 'hot':", options: ["hot", "more hot", "hotter", "hottest"], answer: "hotter", explanation: "Double t + er." },
    { question: "Positive degree:", options: ["better", "best", "good", "more good"], answer: "good", explanation: "Base form." },

    // Simple Order
    { question: "Natural order:", options: ["red small car", "small red car", "car small red", "red car small"], answer: "small red car", explanation: "Size before Color." },
    { question: "Natural order:", options: ["brown big bag", "big brown bag", "bag brown big", "brown bag big"], answer: "big brown bag", explanation: "Size before Color." },
    { question: "Correct order:", options: ["wooden old chair", "old wooden chair", "chair old wooden", "wooden chair old"], answer: "old wooden chair", explanation: "Age before Material." },
    { question: "Correct phrase:", options: ["Chinese interesting story", "interesting Chinese story", "story Chinese interesting", "story interesting Chinese"], answer: "interesting Chinese story", explanation: "Opinion before Origin." },
    { question: "Natural order:", options: ["plastic small bottle", "small plastic bottle", "bottle small plastic", "plastic bottle small"], answer: "small plastic bottle", explanation: "Size before Material." },
    {
      question: "Correct phrase:",
      options: ["expensive new phone", "new expensive phone", "phone expensive new", "expensive phone new"],
      answer: "expensive new phone",
      explanation: "Opinion (expensive) comes before age (new)."
    },
    { question: "Usage of 'enough':", options: ["enough tall", "tall enough", "enough is tall", "tall is enough"], answer: "tall enough", explanation: "Adj + enough." },
    { question: "Usage of 'too':", options: ["too hot", "hot too", "too is hot", "hot too much"], answer: "too hot", explanation: "Too + Adj." },
    { question: "Adjectives in 'The sky is blue and clear':", options: ["None", "One", "Two", "Three"], answer: "Two", explanation: "Blue, Clear." },
    { question: "Adjectives in 'small quiet town':", options: ["visited, town", "small, quiet", "we, town"], answer: "small, quiet", explanation: "Modifiers of town." }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Comparisons & Order
  // ============================================================
  intermediate: [
    { question: "Correct after linking verb 'smells':", options: ["smells nicely", "smells nice", "is smelling nicely", "smells quick"], answer: "smells nice", explanation: "Adj describes subject." },
    { question: "Correct adverb usage:", options: ["spoke clear", "spoke clearly", "clear spoke", "spoke more clear"], answer: "spoke clearly", explanation: "Modifies verb." },
    { question: "Formal English:", options: ["feel badly", "feel bad", "feel badlier", "feel more bad"], answer: "feel bad", explanation: "Linking verb 'feel'." },
    { question: "Usage of 'well' as adjective:", options: ["plays well", "is well (healthy)", "finished well", "writes well"], answer: "is well (healthy)", explanation: "Well = healthy (Adj)." },
    { question: "Error ID: 'The food tastes wonderfully.'", options: ["The", "food", "tastes", "wonderfully"], answer: "wonderfully", explanation: "Should be 'wonderful'." },
    { question: "Correct sentence:", options: ["sounded loudly", "sounded loud", "loud sounded", "is loudily"], answer: "sounded loud", explanation: "Linking verb." },
    { question: "Hard as adverb:", options: ["works hard", "works hardly", "is a hardly worker", "is hardly worker"], answer: "works hard", explanation: "Hard = with effort." },
    { question: "After 'seem':", options: ["seem clearly", "seem clear", "seem clearerly", "seem more clearly"], answer: "seem clear", explanation: "Linking verb." },
    { question: "Adjectives in 'cold and empty room':", options: ["room", "felt", "cold", "cold and empty"], answer: "cold and empty", explanation: "Compound adjective." },
    { question: "Correct use of 'fast':", options: ["fastly runner", "runs fast", "runs fastly", "runs more fastly"], answer: "runs fast", explanation: "Fast is both adj and adv." },
    { question: "Natural order:", options: ["leather small black bag", "small black leather bag", "black small leather bag", "leather black small bag"], answer: "small black leather bag", explanation: "Size-Color-Material." },
    { question: "Correct order:", options: ["metal old box", "old metal box", "box old metal", "metal box old"], answer: "old metal box", explanation: "Age-Material." },
    { question: "Natural phrase:", options: ["blue beautiful long dress", "long blue beautiful dress", "beautiful long blue dress", "beautiful blue long dress"], answer: "beautiful long blue dress", explanation: "Opinion-Size-Color." },
    { question: "Best order:", options: ["round small wooden table", "small wooden round table", "small round wooden table", "wooden small round table"], answer: "small round wooden table", explanation: "Size-Shape-Material." },
    { question: "Proper adjective usage:", options: ["spicy food", "Japanese food", "delicious food", "cheap food"], answer: "Japanese food", explanation: "Capitalized origin." },
    { question: "Quantitative adjective:", options: ["few", "quick", "blue", "silent"], answer: "few", explanation: "Describes amount." },
    { question: "Demonstrative adjective:", options: ["This is yours", "These books", "There is mine", "Here is hers"], answer: "These books", explanation: "Modifies 'books'." },
    { question: "Possessive adjective:", options: ["hers notebook", "her notebook", "she notebook", "she's notebook"], answer: "her notebook", explanation: "Her + Noun." },
    { question: "Interrogative adjective:", options: ["What did you say?", "Which color?", "Who called?", "When arrived?"], answer: "Which color?", explanation: "Modifies noun." },
    { question: "Proper adjective phrase:", options: ["spanish restaurant", "Spanish restaurant", "restaurant spanish", "restaurant Spain"], answer: "Spanish restaurant", explanation: "Capitalized." },
    { question: "Comparative of 'busy':", options: ["more busy", "busiest", "busier", "most busy"], answer: "busier", explanation: "y -> ier." },
    { question: "Superlative of 'busy':", options: ["busier", "busiest", "most busy", "more busy"], answer: "busiest", explanation: "y -> iest." },
    { question: "Comparative of 'good':", options: ["gooder", "more good", "better", "best"], answer: "better", explanation: "Irregular." },
    { question: "Superlative of 'bad':", options: ["badder", "worse", "worst", "most bad"], answer: "worst", explanation: "Irregular." },
    { question: "Correct comparative:", options: ["more easier", "easier than", "easiest than", "more easy than"], answer: "easier than", explanation: "No 'more'." },
    { question: "Correct superlative:", options: ["most tallest", "tallest", "taller", "more tallest"], answer: "tallest", explanation: "No 'most'." },
    { question: "With 'ever seen':", options: ["more exciting", "most exciting", "excitingest", "more excited"], answer: "most exciting", explanation: "Superlative." },
    { question: "Comparing two:", options: ["the shortest", "the shorter", "short", "most short"], answer: "the shorter", explanation: "Two items = Comparative." },
    { question: "Correct sentence:", options: ["more difficult of the two", "most difficult of the two", "more difficult test of the two", "difficultest"], answer: "more difficult test of the two", explanation: "Comparative for two." },
    { question: "Degrees of 'little':", options: ["little, littler, littlest", "little, less, least", "little, lesser, lessest", "little, more little, most little"], answer: "little, less, least", explanation: "Irregular." },
    { question: "Usage of 'enough':", options: ["enough big", "big enough", "enough is big", "big enough is"], answer: "big enough", explanation: "Adj + enough." },
    { question: "Usage of 'too':", options: ["too difficult", "difficult too", "too is difficult", "difficult too much"], answer: "too difficult", explanation: "Too + Adj." },
    { question: "Usage of 'quite':", options: ["quite boring", "boring quite", "quite lecture", "boringly quite"], answer: "quite boring", explanation: "Quite + Adj." },
    { question: "Usage of 'rather':", options: ["rather interesting", "interesting rather", "rather movie", "interestingly rather"], answer: "rather interesting", explanation: "Rather + Adj." },
    { question: "Usage of 'fairly':", options: ["fairly easy", "easy fairly", "fairly task", "easyfairly"], answer: "fairly easy", explanation: "Fairly + Adj." },
    { question: "Best sentence:", options: ["enough strong", "strong enough", "enough is strong", "strong enough is"], answer: "strong enough", explanation: "Adj + enough." },
    { question: "Expressing excess:", options: ["very hot", "too hot", "hot enough", "enough hot"], answer: "too hot", explanation: "Excessive." },
    { question: "Natural 'quite':", options: ["quite surprising", "surprising quite", "quite result", "surprising quitely"], answer: "quite surprising", explanation: "Quite + Adj." },
    { question: "Informal 'pretty':", options: ["pretty difficult", "difficult pretty", "pretty exam", "difficult prettily"], answer: "pretty difficult", explanation: "Means 'fairly'." },
    { question: "Incorrect 'enough':", options: ["old enough", "light enough", "easy enough", "enough patient"], answer: "enough patient", explanation: "Should be 'patient enough'." },
    { question: "Correct comparison:", options: ["elder of the three", "eldest of the three", "elder of three", "more elder"], answer: "eldest of the three", explanation: "Superlative for 3+." },
    { question: "Correct usage:", options: ["older than me", "older of the class", "oldest than me", "more older"], answer: "older than me", explanation: "Comparative." },
    { question: "Find error: 'most cheapest'", options: ["This is", "the most", "cheapest", "in store"], answer: "cheapest", explanation: "Double superlative." },
    { question: "Correct usage:", options: ["more qualified", "most qualified", "more qualifieder", "qualifiedest"], answer: "most qualified", explanation: "Superlative." },
    { question: "Standard English:", options: ["lesser of two", "least of two", "less of two", "most less"], answer: "lesser of two", explanation: "Adjective form." },
    { question: "Correct usage:", options: ["advice useful", "useful advice", "an useful advice", "advices useful"], answer: "useful advice", explanation: "Adj + Uncountable Noun." },
    { question: "Correct article:", options: ["an unique", "a unique", "very unique", "most unique"], answer: "a unique", explanation: "Consonant sound /y/." },
    { question: "Avoid double comparison:", options: ["more narrower", "narrower", "most narrowest", "most narrower"], answer: "narrower", explanation: "Single comparative." },
    { question: "Placement of 'almost':", options: ["almost late", "late almost", "almost was", "late for"], answer: "almost late", explanation: "Before adjective." },
    { question: "Multiple adjectives:", options: ["rainy cold night", "cold rainy night", "night cold rainy", "cold night rainy"], answer: "cold rainy night", explanation: "Temp before Weather." }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Nuances & Context
  // ============================================================
  advanced: [
    {
      question: "Find the error: 'The flowers (A) / smelled (B) / sweetly (C) / in the garden (D).'",
      options: ["The flowers", "smelled", "sweetly", "in the garden"],
      answer: "sweetly",
      explanation: "With sense verbs like 'smelled' as linking verbs, use an adjective: 'smelled sweet'."
    },
    { question: "Linking verb 'look':", options: ["looked carefully", "looked tired", "looked around", "looked through"], answer: "looked tired", explanation: "Links to adjective." },
    { question: "After 'remain':", options: ["remained quietly", "remained quiet", "remained quietlier", "remained quietful"], answer: "remained quiet", explanation: "Linking verb." },
    { question: "After 'appear':", options: ["appeared suddenly", "appeared nervous", "appeared quickly", "appeared quietly"], answer: "appeared nervous", explanation: "Links to adjective." },
    { question: "After 'feel':", options: ["feel strongly", "feel strong", "feel stronglyly", "feel more strongly"], answer: "feel strong", explanation: "Physical state." },
    { question: "Formal English:", options: ["writes neat", "writes neatly", "writes more neat", "writes neatlier"], answer: "writes neatly", explanation: "Adverb modifying verb." },
    { question: "Linking verb 'sound':", options: ["soundly passed", "sounds reasonable", "sounds clearly", "sounds beautifully"], answer: "sounds reasonable", explanation: "Adj after sound." },
    { question: "After 'grow':", options: ["grew angrily", "grew angry", "grew angryly", "grew more angrily"], answer: "grew angry", explanation: "Became angry." },
    { question: "After 'turn':", options: ["turned red", "turned quickly", "turned redly", "turned more quickly"], answer: "turned red", explanation: "Became red." },
    { question: "Correct sentence:", options: ["gone sour", "gone sourly", "gone sourer", "gone most sour"], answer: "gone sour", explanation: "Linking verb." },
    {
      question: "Best order:",
      options: ["long old narrow road", "old long narrow road", "narrow old long road", "long narrow old road"],
      answer: "long narrow old road",
      explanation: "Dimension (long, narrow) usually comes before age (old)."
    },
    { question: "Standard order:", options: ["German small red car", "small red German car", "red German small car", "German red small car"], answer: "small red German car", explanation: "Size-Color-Origin." },
    { question: "Natural phrase:", options: ["interesting new Filipino movie", "new interesting Filipino movie", "Filipino new interesting movie", "interesting Filipino new movie"], answer: "interesting new Filipino movie", explanation: "Opinion-Age-Origin." },
    { question: "Correct order:", options: ["beautiful big old stone church", "big old beautiful stone church", "old beautiful big stone church", "beautiful stone big old church"], answer: "beautiful big old stone church", explanation: "Opinion-Size-Age-Material." },
    {
      question: "Multiple adjectives:",
      options: ["small black stray dog", "stray black small dog", "black small stray dog", "stray small black dog"],
      answer: "small black stray dog",
      explanation: "Size (small) + Color (black) + Type (stray)."
    },
    { question: "Best order:", options: ["wooden lovely round table", "lovely round wooden table", "round wooden lovely table", "wooden round lovely table"], answer: "lovely round wooden table", explanation: "Opinion-Shape-Material." },
    { question: "Natural phrase:", options: ["cotton white comfortable shirt", "comfortable white cotton shirt", "white comfortable cotton shirt", "cotton comfortable white shirt"], answer: "comfortable white cotton shirt", explanation: "Opinion-Color-Material." },
    { question: "Correct phrase:", options: ["old French famous song", "famous old French song", "French famous old song", "famous French old song"], answer: "famous old French song", explanation: "Opinion-Age-Origin." },
    { question: "Usual order:", options: ["delicious small round cake", "small delicious round cake", "delicious round small cake", "round small delicious cake"], answer: "delicious small round cake", explanation: "Opinion-Size-Shape." },
    { question: "Best phrase:", options: ["heavy big old metal box", "big heavy old metal box", "old big heavy metal box", "metal heavy old big box"], answer: "big heavy old metal box", explanation: "Size-Weight-Age-Material." },
    { question: "Logically correct:", options: ["Between Maria, Ana, Liza, Maria is taller", "Between Maria, Ana, Liza, Maria is taller", "Among Maria, Ana, Liza, Maria is the tallest", "Among Maria, Ana, Liza, Maria is taller"], answer: "Among Maria, Ana, Liza, Maria is the tallest", explanation: "3+ items." },
    {
      question: "Illogical comparison:",
      options: ["better than previous", "better than previous one", "better than previous policy", "Both B and C"],
      answer: "better than previous",
      explanation: "Option A is incomplete. We must compare noun to noun (e.g., 'better than the previous one' or 'better than the previous policy')."
    },
    { question: "Correct sentence:", options: ["more better", "much better", "very more better", "betterest"], answer: "much better", explanation: "Intensifier." },
    { question: "Formal English:", options: ["most safe", "safer", "more safe", "safe"], answer: "safer", explanation: "Standard comparative." },
    { question: "Less vs Fewer:", options: ["less people", "fewer traffic", "fewer tasks", "less tasks"], answer: "fewer tasks", explanation: "Countable." },
    { question: "Correct sentence:", options: ["most eldest", "eldest", "elder than all", "more eldest"], answer: "eldest", explanation: "Superlative." },
    { question: "Correct sentence:", options: ["more preferable", "preferable", "more preferable", "most preferable"], answer: "preferable", explanation: "Absolute." },
    { question: "Grammatically acceptable:", options: ["more kinder", "kinder", "most kindest", "kindest than"], answer: "kinder", explanation: "Standard." },
    { question: "Correct forms:", options: ["far, farther, farthest", "far, more far, most far", "far, furtherer, furtherest", "far, farest, farestest"], answer: "far, farther, farthest", explanation: "Standard." },
    { question: "Best sentence:", options: ["better of three", "the better of three", "the best of three", "bestest"], answer: "the best of three", explanation: "Superlative." },
    { question: "Correct sentence:", options: ["most unique", "a unique", "very unique", "uniqueest"], answer: "a unique", explanation: "Absolute." },
    { question: "Redundancy check:", options: ["final conclusion", "conclusion", "end result", "past history"], answer: "conclusion", explanation: "Others are redundant." },
    { question: "Placement of 'only':", options: ["only one suitable", "only suitable candidate", "suitable only", "only suitable the"], answer: "only suitable candidate", explanation: "Modifier placement." },
    { question: "Correct sentence:", options: ["almost nearly missed", "nearly almost missed", "almost missed", "nearly almost last"], answer: "almost missed", explanation: "Redundant." },
    { question: "Usage of 'even':", options: ["even more difficult", "more even difficult", "difficult even more", "even was more"], answer: "even more difficult", explanation: "Intensifier." },
    { question: "Usage of 'such':", options: ["such difficult", "such a difficult", "a such difficult", "difficult such"], answer: "such a difficult", explanation: "Pattern." },
    { question: "Correct sentence:", options: ["too much tired", "too tired", "very too tired", "tired too much"], answer: "too tired", explanation: "Standard." },
    { question: "Formal 'quite':", options: ["quite good", "good quite", "quite report", "good quitely"], answer: "quite good", explanation: "Degree." },
    { question: "Punctuation:", options: ["Tired and hungry, the", "Tired and hungry the", "Tired, and hungry, the", "Tired and hungry the,"], answer: "Tired and hungry, the", explanation: "Intro phrase." },
    { question: "Adjective clause:", options: ["book that I bought", "book I bought interesting", "book which bought", "book bought I"], answer: "book that I bought", explanation: "Clause." },
    { question: "Correct sentence:", options: ["few good advices", "few good pieces of advice", "few good advice", "some advices"], answer: "few good pieces of advice", explanation: "Countable phrase." },
    { question: "Little vs Few:", options: ["little chairs", "few chairs", "few time", "little chairs time"], answer: "few chairs", explanation: "Countable." },
    { question: "Another:", options: ["another informations", "another piece of information", "other another", "anothers"], answer: "another piece of information", explanation: "Singular." },
    { question: "Each:", options: ["Each students", "Each student", "Each of student", "Each student received"], answer: "Each student", explanation: "Singular." },
    { question: "Every:", options: ["Every students", "Every of students", "Every student", "Every student passed"], answer: "Every student", explanation: "Singular." },
    { question: "No as adjective:", options: ["No people was", "No one people", "No student was", "No the student"], answer: "No student was", explanation: "Singular." },
    { question: "Same:", options: ["same exactly", "exactly same", "exact same", "same exact"], answer: "exact same", explanation: "Idiomatic." },
    { question: "Such:", options: ["such unforgettable", "such an unforgettable", "an such", "unforgettable such"], answer: "such an unforgettable", explanation: "Pattern." },
    { question: "Correct sentence:", options: ["responsible enough", "enough responsible", "enough is responsible", "responsible for enough"], answer: "responsible enough", explanation: "Post-position." },
    { question: "Reduced clause:", options: ["man standing", "man who standing", "man near standing", "man stood"], answer: "man standing", explanation: "Participle." }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (55 Items) - Error ID & Improvement
  // ============================================================
  expert: [
    // 1-15: Error Identification (Segmented)
    { 
      question: "Find the error: 'The CEO is (A) / the most smartest (B) / leader in (C) / the industry (D).'", 
      options: ["The CEO is", "the most smartest", "leader in", "the industry"], 
      answer: "the most smartest", 
      explanation: "Double superlative. Use 'the smartest' or 'the most smart'." 
    },
    { 
      question: "Find the error: 'The teacher (A) / gave him (B) / a few good (C) / advices (D).'", 
      options: ["The teacher", "gave him", "a few good", "advices"], 
      answer: "advices", 
      explanation: "'Advice' is uncountable. Use 'pieces of advice'." 
    },
    { 
      question: "Find the error: 'There is (A) / only few (B) / time left (C) / before the deadline (D).'", 
      options: ["There is", "only few", "time left", "before the deadline"], 
      answer: "only few", 
      explanation: "'Time' is uncountable. Use 'little', not 'few'." 
    },
    { 
      question: "Find the error: 'This is (A) / the more (B) / importantest point (C) / in the report (D).'", 
      options: ["This is", "the more", "importantest point", "in the report"], 
      answer: "importantest point", 
      explanation: "Use 'most important'. 'Importantest' is incorrect." 
    },
    { 
      question: "Find the error: 'She is (A) / more friendlier (B) / than (C) / her sister (D).'", 
      options: ["She is", "more friendlier", "than", "her sister"], 
      answer: "more friendlier", 
      explanation: "Redundancy. 'Friendlier' is already comparative. Remove 'more'." 
    },
    { 
      question: "Find the error: 'This is (A) / the less (B) / useful of (C) / the three tools (D).'", 
      options: ["This is", "the less", "useful of", "the three tools"], 
      answer: "the less", 
      explanation: "Comparing three or more requires the superlative 'least'." 
    },
    { 
      question: "Find the error: 'His score (A) / was (B) / more superior than (C) / the others (D).'", 
      options: ["His score", "was", "more superior than", "the others"], 
      answer: "more superior than", 
      explanation: "'Superior' is already comparative and takes 'to', not 'than'." 
    },
    { 
      question: "Find the error: 'She is (A) / the more (B) / elder of (C) / the three sisters (D).'", 
      options: ["She is", "the more", "elder of", "the three sisters"], 
      answer: "the more", 
      explanation: "Remove 'more'. Also, 'eldest' is preferred for three." 
    },
    { 
      question: "Find the error: 'That design (A) / is (B) / more unique (C) / than this one (D).'", 
      options: ["That design", "is", "more unique", "than this one"], 
      answer: "more unique", 
      explanation: "'Unique' is absolute. Something cannot be 'more' unique." 
    },
    { 
      question: "Find the error: 'She (A) / almost nearly (B) / missed (C) / the flight (D).'", 
      options: ["She", "almost nearly", "missed", "the flight"], 
      answer: "almost nearly", 
      explanation: "Redundancy. 'Almost' and 'nearly' mean the same thing." 
    },
    { 
      question: "Find the error: 'He (A) / is (B) / enough old (C) / to drive (D).'", 
      options: ["He", "is", "enough old", "to drive"], 
      answer: "enough old", 
      explanation: "Adjectives come before enough: 'old enough'." 
    },
    { 
      question: "Find the error: 'It (A) / was (B) / a so (C) / long day (D).'", 
      options: ["It", "was", "a so", "long day"], 
      answer: "a so", 
      explanation: "With a noun phrase, use 'such a': 'such a long day'." 
    },
    { 
      question: "Find the error: 'Please (A) / drive (B) / more slower (C) / here (D).'", 
      options: ["Please", "drive", "more slower", "here"], 
      answer: "more slower", 
      explanation: "Double comparative. Use 'slower' or 'more slowly'." 
    },
    { 
      question: "Find the error: 'She (A) / sings (B) / real (C) / good (D).'", 
      options: ["She", "sings", "real", "good"], 
      answer: "good", 
      explanation: "Use the adverb 'well' to modify 'sings'." 
    },
    { 
      question: "Find the error: 'The (A) / soup (B) / tastes (C) / badly (D).'", 
      options: ["The", "soup", "tastes", "badly"], 
      answer: "badly", 
      explanation: "Linking verb 'tastes' requires adjective 'bad'." 
    },

    // Sentence Improvement
    { question: "Improve: 'She is more kinder than her sister.'", options: ["kinder", "more kind", "most kinder", "kindest"], answer: "kinder", explanation: "Standard comparative." },
    { question: "Improve: 'This is the most happiest day.'", options: ["happiest", "most happy", "happier", "more happiest"], answer: "happiest", explanation: "Standard superlative." },
    { question: "Improve: 'He is elder than me.'", options: ["older than me", "elder than", "more elder", "eldest"], answer: "older than me", explanation: "General age comparison uses 'older'." },
    { question: "Improve: 'This is the less expensive of the three.'", options: ["least expensive", "lesser expensive", "less expensive", "less most"], answer: "least expensive", explanation: "Superlative for 3+." },
    { question: "Improve: 'She is the most talentedest.'", options: ["most talented", "talentedest", "most talented singer", "talentedest singer"], answer: "most talented", explanation: "Standard." },
    { question: "Improve: 'He is more superior than others.'", options: ["superior to", "more superior to", "superior than", "most superior"], answer: "superior to", explanation: "Standard form." },
    { question: "Improve: 'This is the very best solution.'", options: ["the best", "very best", "most best", "best"], answer: "the best", explanation: "Formal standard." },
    { question: "Improve: 'She is more prettier.'", options: ["prettier", "more pretty", "most prettier", "prettiest"], answer: "prettier", explanation: "Standard comparative." },
    { question: "Improve: 'This is the most ideal choice.'", options: ["ideal", "more ideal", "idealest", "most ideally"], answer: "ideal", explanation: "Absolute adjective." },
    { question: "Improve: 'The report is more complete now.'", options: ["complete", "most complete", "completer", "completely"], answer: "complete", explanation: "Absolute adjective." },

    // Reading Context
    { question: "Modify 'explanation': 'brief but clear'", options: ["He", "gave", "explanation", "brief but clear"], answer: "brief but clear", explanation: "Adjectives modifying explanation." },
    { question: "Main adjective: 'newly appointed regional director'", options: ["newly", "appointed", "regional", "director"], answer: "appointed", explanation: "Participle adj." },
    { question: "Count adjectives: 'simple, elegant black dress'", options: ["One", "Two", "Three", "Four"], answer: "Three", explanation: "Simple, elegant, black." },
    { question: "Adjective phrase: 'man with red hat'", options: ["with red hat", "man", "waved", "yesterday"], answer: "with red hat", explanation: "Describes the man." },
    { question: "Adjectives: 'tired but satisfied'", options: ["arrived", "tired", "satisfied", "tired but satisfied"], answer: "tired but satisfied", explanation: "Subject complement." },
    { question: "Modify 'proposal': 'risky'", options: ["proposal", "approved", "was", "though"], answer: "proposal", explanation: "Adjective." },
    { question: "Phrase type: 'smart enough'", options: ["Noun", "Adjective", "Adverb", "Verb"], answer: "Adjective", explanation: "Describes subject." },
    { question: "Main adjective: 'remained calm'", options: ["Facing", "difficult", "calm", "remained"], answer: "calm", explanation: "Predicate adjective." },
    { question: "Adverb modifying adj: 'extremely boring'", options: ["long", "boring", "extremely", "lecture"], answer: "extremely", explanation: "Degree." },
    { question: "Quantitative adj: 'few loyal'", options: ["Only", "few", "loyal", "end"], answer: "few", explanation: "Amount." },

    // Logic & Nuance
    { question: "Place description: 'crowded and noisy'", options: ["crowded and noisy", "crowded and noisily", "crowdedly and noisy", "crowded noisily"], answer: "crowded and noisy", explanation: "Adjectives describing a place." },
    { question: "Placement: 'almost late'", options: ["almost late", "late almost", "almost was", "late for"], answer: "almost late", explanation: "Before the adjective." },
    { question: "Reduced clause: 'interested in'", options: ["Students interested", "Students who interested", "Students interest", "Students which"], answer: "Students interested", explanation: "Passive participle." },
    { question: "Usage: 'enough information'", options: ["enough information", "information enough", "enough have", "enough informations"], answer: "enough information", explanation: "Before the noun." },
    { question: "Usage: 'too heavy'", options: ["too heavy", "heavy too", "heavy for too", "heavy too much"], answer: "too heavy", explanation: "Excessive." },
    { question: "Usage: 'clear enough'", options: ["clear enough", "enough clear", "enough are", "clear for"], answer: "clear enough", explanation: "After the adjective." },
    { question: "Comparative: 'fairer'", options: ["more fairer", "fairer", "most fairer", "the fairer"], answer: "fairer", explanation: "Standard." },
    { question: "Usage: 'too young'", options: ["too much young", "too young", "young too much", "much too young not"], answer: "too young", explanation: "Standard pattern." },
    { question: "Usage: 'such a'", options: ["such long", "such a long", "long such", "a such"], answer: "such a long", explanation: "Pattern: such a + adj + noun." },
    { question: "Complement: 'satisfactory'", options: ["satisfactory", "satisfactorily", "satisfaction", "satisfyingness"], answer: "satisfactory", explanation: "Adjective." },

    // Mixed Final
    { question: "Correct sentence: 'more friendlier'", options: ["more friendlier", "friendlier", "most friendlier", "friendliest"], answer: "friendlier", explanation: "Standard comparative." },
    { question: "Linking verb: 'tastes salty'", options: ["salty", "saltly", "salt", "saltyly"], answer: "salty", explanation: "Adjective." },
    { question: "Avoid double: 'finest'", options: ["most finest", "finest", "more finest", "finestest"], answer: "finest", explanation: "Superlative." },
    { question: "Use 'fewer':", options: ["less problems", "fewer problems", "less problem", "many less"], answer: "fewer problems", explanation: "Countable noun." },
    { question: "Correct: 'highest'", options: ["most highest", "highest", "higher", "more higher"], answer: "highest", explanation: "Superlative." },
    { question: "Correct: 'a few'", options: ["few passed", "a few passed", "every passed", "many passed"], answer: "a few passed", explanation: "Positive quantity." },
    { question: "Collocation: 'quite boring'", options: ["quite boring", "quite long", "quite and rather", "boring quite"], answer: "quite boring", explanation: "Standard." },
    {
      question: "Adjective phrase: 'in a blue shirt'",
      options: ["in a blue shirt", "in blue", "blue shirt", "with blue"],
      answer: "in a blue shirt",
      explanation: "Prepositional phrase functioning as an adjective."
    },
    { question: "Correct: 'such a nice'", options: ["so a nice", "such a nice", "such nice", "so nice"], answer: "such a nice", explanation: "Pattern: such a + adj." },
    { question: "Correct: 'many people'", options: ["much people", "many water", "many people", "much people"], answer: "many people", explanation: "Countable." }
  ]
};

