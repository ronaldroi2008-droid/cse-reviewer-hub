const PUNCTUATIONS_QUESTIONS = {
  beginner: [
    // 1-10: End Marks (Period, Question Mark, Exclamation Point)
    { question: "Which mark ends a simple statement?", choices: [".", "?", "!", ","], correctIndex: 0, explanation: "Rule: The Period (.) is used to end declarative sentences (statements) and imperative sentences (commands)." },
    { question: "Which mark ends a question?", choices: [".", "?", "!", ","], correctIndex: 1, explanation: "Rule: The Question Mark (?) is used at the end of a direct question." },
    { question: "Which mark shows strong emotion?", choices: [".", "?", "!", ";"], correctIndex: 2, explanation: "Rule: The Exclamation Point (!) is used to express strong feelings, surprise, or shouting." },
    { question: "Choose the correct punctuation: 'Where are you going__'", choices: [".", "?", "!", ","], correctIndex: 1, explanation: "Rule: Interrogative Sentence. This sentence asks for information, so it needs a question mark." },
    { question: "Choose the correct punctuation: 'I love ice cream__'", choices: [".", "?", ",", ";"], correctIndex: 0, explanation: "Rule: Declarative Sentence. This is a simple statement of fact/opinion, so it ends with a period." },
    { question: "Choose the correct punctuation: 'Watch out__'", choices: [".", "?", "!", ","], correctIndex: 2, explanation: "Rule: Exclamatory/Imperative. This is a warning shouted with urgency, so it needs an exclamation point." },
    { question: "Choose the correct punctuation: 'My name is John__'", choices: [".", "?", "!", ":"], correctIndex: 0, explanation: "Rule: Statement. It ends with a period." },
    { question: "Choose the correct punctuation: 'What time is it__'", choices: [".", "?", "!", ","], correctIndex: 1, explanation: "Rule: Wh-Question. It asks for time, so it requires a question mark." },
    { question: "Choose the correct punctuation: 'Stop that right now__'", choices: [".", "?", "!", ","], correctIndex: 2, explanation: "Rule: Strong Command. This conveys anger or urgency, requiring an exclamation point." },
    { question: "Choose the correct punctuation: 'Please sit down__'", choices: [".", "?", "!", ","], correctIndex: 0, explanation: "Rule: Polite Command. Imperative sentences usually end with a period unless shouted." },

    // 11-20: Basic Commas (Lists and Dates)
    { question: "Which sentence uses commas correctly in a list?", choices: ["I bought apples, oranges and, bananas.", "I bought apples, oranges, and bananas.", "I bought, apples oranges and bananas.", "I bought apples oranges, and bananas."], correctIndex: 1, explanation: "Rule: Commas in a Series. Use commas to separate items in a list. The comma before 'and' (Oxford Comma) is preferred." },
    { question: "Where does the comma go? 'January 1 2020'", choices: ["January, 1 2020", "January 1, 2020", "January 1 2020,", "January 1, 2020,"], correctIndex: 1, explanation: "Rule: Dates. Use a comma to separate the day of the month from the year." },
    { question: "Choose the correct list: 'Red blue and green'", choices: ["Red, blue, and green", "Red, blue and, green", "Red blue, and green", "Red, blue, and, green"], correctIndex: 0, explanation: "Rule: Series Comma. Separate three or more items with commas." },
    { question: "Choose the correct city/state format.", choices: ["Miami Florida", "Miami, Florida", "Miami; Florida", "Miami. Florida"], correctIndex: 1, explanation: "Rule: Places. Use a comma to separate the city from the state or country." },
    { question: "Which sentence lists actions correctly?", choices: ["He ran, jumped, and swam.", "He ran jumped and swam.", "He ran, jumped and, swam.", "He ran jumped, and swam."], correctIndex: 0, explanation: "Rule: Series of Verbs. Commas separate multiple actions performed by the subject." },
    { question: "Punctuate: 'Monday May 5'", choices: ["Monday, May 5", "Monday May, 5", "Monday, May, 5", "Monday May 5"], correctIndex: 0, explanation: "Rule: Days and Dates. Use a comma to separate the day of the week from the month." },
    { question: "Punctuate: 'Manila Philippines'", choices: ["Manila. Philippines", "Manila, Philippines", "Manila; Philippines", "Manila - Philippines"], correctIndex: 1, explanation: "Rule: City and Country. Use a comma to separate them." },
    { question: "Which is correct?", choices: ["One, two, three.", "One two, three.", "One, two three.", "One two three."], correctIndex: 0, explanation: "Rule: Listing numbers. Use commas to separate items." },
    { question: "Punctuate: 'I need a pen a pencil and a ruler.'", choices: ["I need a pen, a pencil, and a ruler.", "I need a pen a pencil, and a ruler.", "I need a pen, a pencil and a ruler.", "Both A and C"], correctIndex: 3, explanation: "Rule: Both are acceptable. A uses the Oxford comma (formal/preferred); C does not (informal). In multiple choice, usually, the Oxford comma version is the 'best' choice if available alone, but here both are valid styles." },
    { question: "Punctuate: 'Paris France'", choices: ["Paris, France", "Paris France", "Paris; France", "Paris: France"], correctIndex: 0, explanation: "Rule: Place names. City, Country." },

    // 21-30: Apostrophes (Possession and Contractions)
    { question: "Which shows possession?", choices: ["The cats toy", "The cat's toy", "The cats' toy (one cat)", "The cat is toy"], correctIndex: 1, explanation: "Rule: Singular Possession. Add 's to a singular noun (cat) to show ownership." },
    { question: "What is the contraction for 'do not'?", choices: ["dont", "don't", "do'nt", "d'ont"], correctIndex: 1, explanation: "Rule: Contractions. The apostrophe replaces the missing letter 'o'." },
    { question: "Which shows the plural possessive (many dogs)?", choices: ["The dog's food", "The dogs' food", "The dogs food", "The dogs's food"], correctIndex: 1, explanation: "Rule: Plural Possession ending in 's'. Just add an apostrophe after the 's'." },
    { question: "What is the contraction for 'it is'?", choices: ["its", "it's", "its'", "i'ts"], correctIndex: 1, explanation: "Rule: Contractions. 'It's' = It is. 'Its' (no apostrophe) is possessive." },
    { question: "Which is correct?", choices: ["Tom's car", "Toms car", "Toms' car", "Tom is car"], correctIndex: 0, explanation: "Rule: Singular Proper Noun. Add 's to show Tom owns the car." },
    { question: "What is the contraction for 'we are'?", choices: ["were", "we're", "w'ere", "we'r"], correctIndex: 1, explanation: "Rule: Contractions. The apostrophe replaces the 'a' in 'are'." },
    { question: "Which is correct for 'the bag of the girl'?", choices: ["The girls bag", "The girl's bag", "The girls' bag", "The girl bag"], correctIndex: 1, explanation: "Rule: Singular Possession. One girl -> Girl's." },
    { question: "Contraction for 'cannot':", choices: ["can't", "cann't", "ca'nt", "cant"], correctIndex: 0, explanation: "Rule: Contractions. Replaces 'no'." },
    { question: "Possessive of 'Children':", choices: ["Childrens'", "Children's", "Childrens", "Childrens's"], correctIndex: 1, explanation: "Rule: Irregular Plural Possession. If the plural doesn't end in 's' (children), add 's." },
    { question: "Meaning of 'They're':", choices: ["Their", "There", "They are", "They were"], correctIndex: 2, explanation: "Rule: Contractions. They're = They are." },

    // 31-40: Capitalization (Basic Punctuation Rule)
    { question: "Which word should be capitalized?", choices: ["cat", "house", "monday", "blue"], correctIndex: 2, explanation: "Rule: Proper Nouns. Days of the week (Monday) are proper nouns and must be capitalized." },
    { question: "Choose the correct sentence:", choices: ["i like dogs.", "I like dogs.", "I like Dogs.", "i Like Dogs."], correctIndex: 1, explanation: "Rule: First Word. Always capitalize the first word of a sentence and the pronoun 'I'." },
    { question: "Which month is written correctly?", choices: ["january", "January", "jAnuary", "JANUARY (in normal text)"], correctIndex: 1, explanation: "Rule: Proper Nouns. Months must start with a capital letter." },
    { question: "Which needs a capital letter?", choices: ["city", "paris", "town", "village"], correctIndex: 1, explanation: "Rule: Proper Nouns. 'Paris' is a specific name of a city." },
    { question: "Correct: 'mr. smith'", choices: ["Mr. Smith", "mr. Smith", "Mr. smith", "mr smith"], correctIndex: 0, explanation: "Rule: Titles and Names. Capitalize titles (Mr.) and surnames (Smith)." },
    { question: "Which is correct?", choices: ["The Bible", "the bible", "The bible", "the Bible"], correctIndex: 0, explanation: "Rule: Sacred Texts. Names of sacred books are capitalized." },
    { question: "Capitalize 'english'?", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: Languages. Languages and nationalities (English, Filipino) are always capitalized." },
    { question: "Correct sentence:", choices: ["My Dad is home.", "my dad is home.", "My dad is home.", "My Dad Is Home."], correctIndex: 2, explanation: "Rule: Kinship Names. Only capitalize 'Dad' if used as a name (Hi, Dad!). If preceded by 'my/your' (my dad), it is lowercase." },
    { question: "Correct: 'harry potter'", choices: ["Harry Potter", "Harry potter", "harry Potter", "harry potter"], correctIndex: 0, explanation: "Rule: Proper Names. Capitalize both first and last names." },
    { question: "Capitalize 'summer'?", choices: ["Yes", "No"], correctIndex: 1, explanation: "Rule: Seasons. Seasons (summer, winter) are generally NOT capitalized unless part of a title." },

    // 41-50: Basic Quotation Marks
    { question: "Which shows someone speaking?", choices: ["He said, I am happy.", "He said 'I am happy.'", "He said, \"I am happy.\"", "He said (I am happy)."], correctIndex: 2, explanation: "Rule: Direct Speech. Use double quotation marks around the exact words spoken." },
    { question: "Punctuate: She said Hello", choices: ["She said \"Hello.\"", "She said, \"Hello.\"", "She said Hello.", "She said 'Hello'."], correctIndex: 1, explanation: "Rule: Dialogue. Use a comma to separate the speaker tag from the quote, and put the period inside the quotes." },
    { question: "Where do quotation marks go?", choices: ["\"The end\"", "The \"end\"", "The end\"", "\"The end"], correctIndex: 0, explanation: "Rule: Enclosing. Quotes must open and close around the phrase." },
    { question: "Choose the correct sentence.", choices: ["\"Stop,\" he yelled.", "\"Stop\", he yelled.", "Stop, he yelled.", "Stop\" he yelled."], correctIndex: 0, explanation: "Rule: Comma placement. Commas usually go INSIDE the quotation marks in dialogue." },
    { question: "Which indicates a title of a short story?", choices: ["The Lottery", "\"The Lottery\"", "The Lottery (italics)", "THE LOTTERY"], correctIndex: 1, explanation: "Rule: Titles. Short works (short stories, songs, poems) use quotation marks. Long works (books) use italics." },
    { question: "Correct: He asked \"Why?\"", choices: ["He asked, \"Why?\"", "He asked \"Why\"?", "He asked, \"Why\"?", "He asked \"Why.\""], correctIndex: 0, explanation: "Rule: Question Mark placement. If the quote is a question, the question mark goes INSIDE." },
    { question: "Is this correct? \"I love you.\" said John.", choices: ["Yes", "No"], correctIndex: 1, explanation: "Rule: Comma vs Period. It should be: \"I love you,\" said John." },
    { question: "Correct: \"Run!\" she screamed.", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Exclamation points go inside the quote, and no comma is needed if an exclamation is used." },
    { question: "Use quotes for specific words: The word ____ is hard to spell.", choices: ["necessary", "\"necessary\"", "Necessary", "'necessary'"], correctIndex: 1, explanation: "Rule: Mentioning words. Use quotes when referring to a word as a word itself." },
    { question: "Opening quotes look like: ", choices: ["\"", "”", "Both", "'"], correctIndex: 2, explanation: "Rule: Typography. Straight or curly double quotes are accepted." }
  ],

  intermediate: [
    // 51-60: Commas (Compound Sentences & Intros)
    { question: "Which is correct?", choices: ["I like tea but I like coffee.", "I like tea, but I like coffee.", "I like tea but, I like coffee.", "I like tea, but, I like coffee."], correctIndex: 1, explanation: "Rule: Compound Sentences. Use a comma before a coordinating conjunction (FANBOYS) connecting two independent clauses." },
    { question: "Punctuate: 'However I did not go.'", choices: ["However I did not go.", "However, I did not go.", "However; I did not go.", "However: I did not go."], correctIndex: 1, explanation: "Rule: Introductory Words. Use a comma after transition words like 'However' at the start of a sentence." },
    { question: "Correct: 'When he arrived we left.'", choices: ["When he arrived we left.", "When he arrived, we left.", "When he arrived; we left.", "When, he arrived we left."], correctIndex: 1, explanation: "Rule: Introductory Dependent Clause. If a dependent clause comes first (When...), separate it with a comma." },
    { question: "Which needs a comma?", choices: ["I ran fast and won.", "I ran fast and I won."], correctIndex: 1, explanation: "Rule: Compound vs Simple. Sentence B has two independent clauses ('I ran', 'I won') -> needs comma. Sentence A has one subject ('I') -> no comma." },
    { question: "Punctuate: 'Yes I will come.'", choices: ["Yes I will come.", "Yes, I will come.", "Yes; I will come.", "Yes: I will come."], correctIndex: 1, explanation: "Rule: Intro Words. Use a comma after Yes/No answers." },
    { question: "Correct: 'In the morning I run.'", choices: ["In the morning I run.", "In the morning, I run.", "In the morning; I run.", "In, the morning I run."], correctIndex: 1, explanation: "Rule: Introductory Prepositional Phrase. A comma is customary after a long introductory phrase." },
    { question: "Which is correct?", choices: ["She was tired so, she slept.", "She was tired, so she slept.", "She was tired so she slept.", "She was tired; so she slept."], correctIndex: 1, explanation: "Rule: FANBOYS. Comma goes BEFORE 'so'." },
    { question: "Correct: 'Because it rained we stayed home.'", choices: ["Because it rained we stayed home.", "Because it rained, we stayed home.", "Because, it rained we stayed home.", "Because it rained; we stayed home."], correctIndex: 1, explanation: "Rule: Dependent clause first -> Comma needed." },
    { question: "Correct: 'We stayed home because it rained.'", choices: ["We stayed home because it rained.", "We stayed home, because it rained."], correctIndex: 0, explanation: "Rule: Main clause first -> Usually NO comma needed." },
    { question: "Punctuate: 'Well I guess so.'", choices: ["Well, I guess so.", "Well I guess so.", "Well; I guess so.", "Well. I guess so."], correctIndex: 0, explanation: "Rule: Intro Interjections. Comma after 'Well'." },

    // 61-70: Commas (Direct Address & Interrupters)
    { question: "Correct: 'John come here.'", choices: ["John come here.", "John, come here.", "John; come here.", "John. Come here."], correctIndex: 1, explanation: "Rule: Direct Address. Always use commas to set off the name of the person being spoken to." },
    { question: "Correct: 'I know Sarah that you are right.'", choices: ["I know Sarah, that you are right.", "I know, Sarah, that you are right.", "I know Sarah that, you are right.", "I know, Sarah that you are right."], correctIndex: 1, explanation: "Rule: Direct Address. If the name is in the middle, use commas on BOTH sides." },
    { question: "Correct: 'Let's eat Grandma!'", choices: ["Let's eat Grandma!", "Let's eat, Grandma!"], correctIndex: 1, explanation: "Rule: Direct Address/Clarity. Without the comma, you are eating Grandma!" },
    { question: "Punctuate: 'This book, I believe, is yours.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Interrupters/Parenthetical. 'I believe' interrupts the flow, so it is enclosed in commas." },
    { question: "Correct: 'He is however not coming.'", choices: ["He is, however, not coming.", "He is however, not coming.", "He is, however not coming.", "He is however not coming."], correctIndex: 0, explanation: "Rule: Interrupters. Transition words in the middle need commas." },
    { question: "Correct: 'No sir I didn't.'", choices: ["No sir I didn't.", "No, sir, I didn't.", "No sir, I didn't.", "No, sir I didn't."], correctIndex: 1, explanation: "Rule: Direct Address + Intro Word. Comma after 'No', Comma after 'sir'." },
    { question: "Correct: 'My brother who is a doctor lives here.' (Non-essential)", choices: ["My brother who is a doctor, lives here.", "My brother, who is a doctor, lives here.", "My brother who, is a doctor lives here.", "My brother, who is a doctor lives here."], correctIndex: 1, explanation: "Rule: Non-Essential Appositive. If 'who is a doctor' is extra info, put commas around it." },
    { question: "Correct: 'The movie Titanic is sad.' (Essential)", choices: ["The movie, Titanic, is sad.", "The movie Titanic is sad."], correctIndex: 1, explanation: "Rule: Essential Appositive. Since there are many movies, the name 'Titanic' is essential to know which one. No commas." },
    { question: "Correct: 'Edison the inventor was smart.'", choices: ["Edison, the inventor, was smart.", "Edison the inventor was smart."], correctIndex: 0, explanation: "Rule: Non-essential Appositive. 'The inventor' just renames Edison. Commas needed." },
    { question: "Correct: 'You are, of course, invited.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Interrupter. 'Of course' is set off by commas." },

    // 71-80: Semicolons and Colons
    { question: "When do you use a semicolon (;)?", choices: ["To end a sentence", "To join two independent clauses without a conjunction", "To introduce a list", "To show possession"], correctIndex: 1, explanation: "Rule: Semicolons connect closely related independent clauses." },
    { question: "Correct: 'I love ice cream; it is cold.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Semicolon usage. Both parts are full sentences." },
    { question: "Correct: 'I bought: apples, bananas, and pears.'", choices: ["Correct", "Incorrect"], correctIndex: 1, explanation: "Rule: Colons. Do not use a colon after a verb (bought). Correct: 'I bought apples...'" },
    { question: "Correct: 'I need three things: pen, paper, and ink.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Colons. Use a colon after a complete independent clause to introduce a list." },
    { question: "Choose: 'It rained hard ____ we stayed inside.'", choices: [",", ";", ":", "!"], correctIndex: 1, explanation: "Rule: Joining Clauses. Use a semicolon if there is no 'and/but/so'." },
    { question: "Correct: 'He has one goal: to win.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Colons. Used for emphasis or defining the 'one goal'." },
    { question: "Correct: 'Dear Sir:' in a business letter.", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Business Letters. Use a colon after the salutation." },
    { question: "Semicolon or Comma? 'I went home, and I slept.'", choices: ["Semicolon", "Comma"], correctIndex: 1, explanation: "Rule: Comma + Conjunction. If you use 'and', use a comma. If you delete 'and', use a semicolon." },
    { question: "Semicolon with transition: 'I studied hard; ____ I passed.'", choices: ["therefore", "because", "but", "so"], correctIndex: 0, explanation: "Rule: Conjunctive Adverbs. Words like 'therefore' or 'however' follow a semicolon." },
    { question: "Correct: 'The train was late; we missed the show.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Semicolon joining related thoughts." },

    // 81-90: Hyphens and Dashes
    { question: "What connects two words to make one adjective? (e.g., well-known)", choices: ["Hyphen (-)", "Dash (—)", "Comma (,)", "Colon (:)"], correctIndex: 0, explanation: "Rule: Hyphens join compound words." },
    { question: "Correct: 'He is a well known actor.'", choices: ["well known", "well-known", "well—known", "well, known"], correctIndex: 1, explanation: "Rule: Compound Adjectives. Use a hyphen when the adjective comes before the noun." },
    { question: "What indicates a sudden break in thought?", choices: ["Hyphen", "Dash (Em-dash)", "Period", "Comma"], correctIndex: 1, explanation: "Rule: Em-dash. It shows an interruption or emphasis." },
    { question: "Correct: 'Twenty-one'", choices: ["Twenty one", "Twenty-one", "Twentyone", "Twenty–one"], correctIndex: 1, explanation: "Rule: Numbers. Hyphenate numbers from twenty-one to ninety-nine." },
    { question: "Correct: 'My ex-wife'", choices: ["ex wife", "ex-wife", "exwife", "ex—wife"], correctIndex: 1, explanation: "Rule: Prefixes. 'Ex-', 'self-', and 'all-' usually take hyphens." },
    { question: "Correct: 'The book—which I lost—was found.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Dashes. Used like parentheses to set off extra info with emphasis." },
    { question: "Hyphen or Dash? 'A long-term plan'", choices: ["Hyphen", "Dash"], correctIndex: 0, explanation: "Rule: Compound adjective." },
    { question: "Correct: 'Everything I own—books, clothes, car—is gone.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Dashes for emphasis/lists within a sentence." },
    { question: "Correct: 'Self esteem'", choices: ["Self esteem", "Self-esteem"], correctIndex: 1, explanation: "Rule: Prefix 'Self-' requires a hyphen." },
    { question: "Correct: '3-year-old child'", choices: ["3 year old", "3-year-old", "3-year old", "3 year-old"], correctIndex: 1, explanation: "Rule: Compound modifier. When 'number-noun-old' modifies a noun, hyphenate all parts." },

    // 91-100: Parentheses and Brackets
    { question: "What encloses non-essential information?", choices: ["( )", "[ ]", "{ }", "/ /"], correctIndex: 0, explanation: "Rule: Parentheses (Round brackets) allow you to whisper extra facts." },
    { question: "Correct: 'He (John) is here.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Parentheses clarify the pronoun." },
    { question: "What encloses words added to a quote?", choices: ["( )", "[ ]", "{ }", "/ /"], correctIndex: 1, explanation: "Rule: Brackets [ ]. Use them to add your own words/explanation inside someone else's quote." },
    { question: "Punctuation with Parentheses: 'I saw him (yesterday).'", choices: ["(yesterday).", "(yesterday.)", ".(yesterday)", "(yesterday)"], correctIndex: 0, explanation: "Rule: If the parentheses are part of a sentence, the period goes OUTSIDE." },
    { question: "Correct: 'He said, \"It [the car] is broken.\"'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Brackets clarify 'It' inside the quote." },
    { question: "Parentheses vs Commas: Which is more formal/interruptive?", choices: ["Parentheses", "Commas"], correctIndex: 0, explanation: "Rule: Parentheses create a stronger break/separation than commas." },
    { question: "Use parentheses for: 'The meeting (held on Zoom) was long.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Extra info." },
    { question: "Full sentence in parentheses: '(He didn't know.)'", choices: ["(He didn't know.)", "(He didn't know)."], correctIndex: 0, explanation: "Rule: If the parentheses contain a full separate sentence, the period goes INSIDE." },
    { question: "Which symbols are Parentheses?", choices: ["( )", "[ ]", "{ }"], correctIndex: 0, explanation: "Rule: Identification." },
    { question: "Which symbols are Brackets?", choices: ["( )", "[ ]", "{ }"], correctIndex: 1, explanation: "Rule: Identification." }
  ],

  advanced: [
    // 101-110: Advanced Commas (Adjectives and Clarity)
    { question: "Punctuate: 'A tall dark stranger.'", choices: ["A tall dark, stranger.", "A tall, dark stranger.", "A tall, dark, stranger.", "A tall dark stranger."], correctIndex: 1, explanation: "Rule: Coordinate Adjectives. 'Tall' and 'dark' are equal descriptions. If you can put 'and' between them (Tall and dark), use a comma." },
    { question: "Punctuate: 'A shiny red car.'", choices: ["A shiny, red car.", "A shiny red car."], correctIndex: 1, explanation: "Rule: Cumulative Adjectives. You can't say 'Shiny and red car' naturally (Color is intrinsic). No comma." },
    { question: "Punctuate: 'For Mary, Jane is a friend.'", choices: ["For Mary, Jane is a friend.", "For Mary Jane is a friend."], correctIndex: 0, explanation: "Rule: Clarity. The comma prevents misreading 'Mary Jane' as one person." },
    { question: "Punctuate: 'Whatever you do, do it well.'", choices: ["Whatever you do do it well.", "Whatever you do, do it well."], correctIndex: 1, explanation: "Rule: Clarity/Dependent Clause. Separates the confusing repetition of 'do do'." },
    { question: "Correct: 'The problems are, I think, solvable.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Interrupters. Parenthetical expression set off by commas." },
    { question: "Punctuate: 'The expensive, beautiful dress.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Coordinate Adjectives. 'Expensive and beautiful' makes sense, so use a comma." },
    { question: "Punctuate: 'Five little ducks.'", choices: ["Five, little ducks.", "Five little ducks."], correctIndex: 1, explanation: "Rule: Numbers/Size. These are cumulative. No comma." },
    { question: "Comma with 'etc.': 'Apples, pears, etc.'", choices: ["Apples, pears, etc.", "Apples, pears etc."], correctIndex: 0, explanation: "Rule: Etc. A comma usually precedes 'etc.' in a list." },
    { question: "Correct: 'He asked, \"Why?\"'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Comma introducing quote." },
    { question: "Punctuate: 'The ending, unfortunately, was sad.'", choices: ["The ending unfortunately was sad.", "The ending, unfortunately, was sad."], correctIndex: 1, explanation: "Rule: Adverbial Interrupter." },

    // 111-120: Advanced Apostrophes
    { question: "Possessive of 'James':", choices: ["James's", "James'", "Jameses", "Both A and B"], correctIndex: 3, explanation: "Rule: Singular Noun ending in 's'. Both 'James's' (academic style) and 'James'' (journalistic style) are accepted. 'James's' is generally preferred in formal guides." },
    { question: "Possessive of 'Boss':", choices: ["Boss'", "Boss's"], correctIndex: 1, explanation: "Rule: Singular ending in 's'. Use 's. The Boss's office." },
    { question: "Joint possession (Tom and Jerry share a house):", choices: ["Tom's and Jerry's house", "Tom and Jerry's house"], correctIndex: 1, explanation: "Rule: Joint Possession. Add 's only to the LAST noun." },
    { question: "Separate possession (Tom has a house, Jerry has a house):", choices: ["Tom and Jerry's houses", "Tom's and Jerry's houses"], correctIndex: 1, explanation: "Rule: Separate Possession. Add 's to BOTH nouns." },
    { question: "Plural of dates (1990s):", choices: ["1990's", "1990s"], correctIndex: 1, explanation: "Rule: Plural Numbers. Modern style guides (APA, Chicago) say NO apostrophe for plurals of years (1990s). Apostrophe is for possession." },
    { question: "Possessive of 'Mother-in-law':", choices: ["Mother's-in-law", "Mother-in-law's"], correctIndex: 1, explanation: "Rule: Compound Nouns. Add 's to the END of the word." },
    { question: "Plural of 'A':", choices: ["As", "A's"], correctIndex: 1, explanation: "Rule: Plural Letters. Use an apostrophe to prevent confusion (so it doesn't look like the word 'As')." },
    { question: "Possessive of 'Everyone':", choices: ["Everyones", "Everyone's"], correctIndex: 1, explanation: "Rule: Indefinite Pronouns. Treat as singular noun. Add 's." },
    { question: "Correct: 'Two weeks' notice'", choices: ["Two weeks notice", "Two weeks' notice", "Two week's notice"], correctIndex: 1, explanation: "Rule: Time/Measure Possession. Plural 'weeks' needs the apostrophe after the s." },
    { question: "Correct: 'For goodness' sake'", choices: ["goodness's", "goodness'"], correctIndex: 1, explanation: "Rule: Idiom exception. Words ending in 's' sound often take only the apostrophe in 'for ... sake' phrases." },

    // 121-130: Advanced Quotation Marks
    { question: "Quote within a quote:", choices: ["\"He said 'Stop'\"", "\"He said \"Stop\"\"", "'He said \"Stop\"'"], correctIndex: 0, explanation: "Rule: Nested Quotes. Use single quotes (' ') inside double quotes (\" \")." },
    { question: "Punctuate: \"Did he say 'Hello'?\"", choices: ["\"Did he say 'Hello'?\"", "\"Did he say 'Hello?'\""], correctIndex: 0, explanation: "Rule: Question Mark Logic. The whole sentence is the question, not the quote 'Hello'. So ? goes OUTSIDE the single quote but inside double? Wait. Actually: \"Did he say 'Hello'?\" (The main sentence is the question). The ? goes outside the single quote, inside the double quote." },
    { question: "British vs American: Punctuation inside/outside?", choices: ["American: Inside", "American: Outside"], correctIndex: 0, explanation: "Rule: In American English, periods and commas always go INSIDE quotation marks." },
    { question: "Correct American Style: \"I am home,\"", choices: ["\"I am home,\"", "\"I am home\","], correctIndex: 0, explanation: "Rule: Comma inside." },
    { question: "Semicolons and Quotes:", choices: ["\"I tried\"; he said.", "\"I tried;\" he said."], correctIndex: 0, explanation: "Rule: Semicolons/Colons always go OUTSIDE quotation marks." },
    { question: "Scare Quotes (Irony):", choices: ["He is a \"genius\".", "He is a 'genius'."], correctIndex: 0, explanation: "Rule: Use double quotes for irony or highlighting a term." },
    { question: "Quoting a sentence fragment:", choices: ["He said he was \"tired.\"", "He said he was \"tired\"."], correctIndex: 0, explanation: "Rule: American English puts the period inside, even for fragments." },
    { question: "Introductory Colon:", choices: ["He said: \"Go.\"", "He said; \"Go.\""], correctIndex: 0, explanation: "Rule: Use a colon to introduce a long or formal quote." },
    { question: "Quote vs Italics: Book Title", choices: ["\"Harry Potter\"", "_Harry Potter_"], correctIndex: 1, explanation: "Rule: Major works (books) are Italicized (or underlined). Chapters are in Quotes." },
    { question: "Quote vs Italics: Song Title", choices: ["\"Imagine\"", "_Imagine_"], correctIndex: 0, explanation: "Rule: Minor works (songs) are in Quotes." },

    // 131-140: Advanced Dashes and Hyphens
    { question: "Suspended Hyphen:", choices: ["Pre- and post-war", "Pre and post-war"], correctIndex: 0, explanation: "Rule: Suspended Hyphen. Use a hyphen after the first part (Pre-) if it shares the base word (war)." },
    { question: "Re-creation vs Recreation", choices: ["Re-creation (create again)", "Recreation (play)"], correctIndex: 0, explanation: "Rule: Clarifying Hyphens. Use a hyphen to avoid confusion with a different word." },
    { question: "Adverb ending in -ly:", choices: ["A highly-skilled man", "A highly skilled man"], correctIndex: 1, explanation: "Rule: No Hyphen. Never hyphenate an -ly adverb modifying an adjective." },
    { question: "Em-dash usage:", choices: ["word-word", "word—word"], correctIndex: 1, explanation: "Rule: Em-dash (long) is for breaks. Hyphen (short) is for compound words." },
    { question: "En-dash usage:", choices: ["1990-2000", "1990–2000"], correctIndex: 1, explanation: "Rule: En-dash (medium). Used for ranges (numbers, dates). It means 'to'." },
    { question: "Hyphenate: 'State of the art technology'", choices: ["State-of-the-art", "State of the art"], correctIndex: 0, explanation: "Rule: Compound Adjective. Hyphenate when it comes before the noun." },
    { question: "Hyphenate: 'The technology is state of the art.'", choices: ["State-of-the-art", "State of the art"], correctIndex: 1, explanation: "Rule: Predicate Adjective. Do not hyphenate when it comes after the noun." },
    { question: "Correct: 'Anti-American'", choices: ["AntiAmerican", "Anti-American"], correctIndex: 1, explanation: "Rule: Prefix + Proper Noun. Always hyphenate." },
    { question: "Correct: 'Co-operate' or 'Cooperate'?", choices: ["Co-operate", "Cooperate"], correctIndex: 1, explanation: "Rule: Modern Usage. Common words often drop the hyphen. 'Cooperate' is standard now, though 'Co-operate' is archaic." },
    { question: "Correct: 'Twenty-one'", choices: ["Twenty one", "Twenty-one"], correctIndex: 1, explanation: "Rule: Compound Numbers always hyphenated." },

    // 141-150: Ellipses and Slashes
    { question: "What indicates omitted words?", choices: ["...", "---", "***"], correctIndex: 0, explanation: "Rule: Ellipsis (...) shows words have been removed from a quote." },
    { question: "How many dots in an ellipsis?", choices: ["2", "3", "4"], correctIndex: 1, explanation: "Rule: Three dots." },
    { question: "Ellipsis at the end of a sentence:", choices: ["word... .", "word...."], correctIndex: 1, explanation: "Rule: Four dots. 3 for ellipsis + 1 for the period." },
    { question: "Slash meaning: 'He/She'", choices: ["He and She", "He or She"], correctIndex: 1, explanation: "Rule: Slash usually means 'or'." },
    { question: "Slash in dates: '1/1/2000'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Standard date format." },
    { question: "Spacing with ellipsis: 'word ... word'", choices: ["Space before and after", "No spaces"], correctIndex: 0, explanation: "Rule: Formal style usually requires spaces (word ... word)." },
    { question: "Slash in poetry:", choices: ["Line break", "Or", "And"], correctIndex: 0, explanation: "Rule: A slash / indicates a line break when quoting poetry linearly." },
    { question: "Trailing off thought:", choices: ["I don't know...", "I don't know—"], correctIndex: 0, explanation: "Rule: Ellipsis indicates trailing off/hesitation. Dash indicates abrupt stop." },
    { question: "Fraction: 1/2", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Slashes used for fractions." },
    { question: "and/or", choices: ["Acceptable", "Avoid in formal writing"], correctIndex: 1, explanation: "Rule: Style. While used, 'and/or' is often disliked in formal writing. Choose one or rephrase." }
  ],

  super: [
    // 151-160: Academic Citations & Formatting
    { question: "Punctuation for Book Titles:", choices: ["Italics", "Quotes"], correctIndex: 0, explanation: "Rule: Large works (Books, Movies, Albums) are Italicized." },
    { question: "Punctuation for Article Titles:", choices: ["Italics", "Quotes"], correctIndex: 1, explanation: "Rule: Small works (Articles, Songs, Chapters) use Quotation Marks." },
    { question: "Citation: (Smith, 2020)", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: APA Style parenthetical citation." },
    { question: "Punctuate: 'et al.'", choices: ["et al", "et. al.", "et al."], correctIndex: 2, explanation: "Rule: Latin abbreviations. 'et' is a word (and), 'al.' is an abbreviation (alii). Only 'al' gets a period." },
    { question: "Punctuate: 'i.e.' (that is)", choices: ["i.e.", "ie"], correctIndex: 0, explanation: "Rule: Abbreviations take periods." },
    { question: "Punctuate: 'e.g.' (for example)", choices: ["e.g.", "eg"], correctIndex: 0, explanation: "Rule: Abbreviations take periods." },
    { question: "Comma after 'i.e.'?", choices: ["i.e. word", "i.e., word"], correctIndex: 1, explanation: "Rule: In US English, usually follow 'i.e.' and 'e.g.' with a comma." },
    { question: "Period inside parenthesis? (Complete sentence.)", choices: ["(Complete sentence.)", "(Complete sentence)."], correctIndex: 0, explanation: "Rule: If the parentheses contain a full sentence, period goes inside." },
    { question: "Period inside parenthesis? Sentence ends (with a phrase).", choices: ["(with a phrase.)", "(with a phrase)."], correctIndex: 1, explanation: "Rule: If the parenthesis is part of the sentence, period goes outside." },
    { question: "Which dash for number ranges (10–20)?", choices: ["Hyphen (-)", "En-dash (–)", "Em-dash (—)"], correctIndex: 1, explanation: "Rule: En-dash is specifically for ranges." },

    // 161-170: Serial Comma Nuances (Clarity)
    { question: "Ambiguous: 'I love my parents, Lady Gaga and Superman.'", choices: ["Oxford Comma needed", "Correct"], correctIndex: 0, explanation: "Rule: Without the Oxford comma, it implies your parents ARE Lady Gaga and Superman (Appositive). Use: 'parents, Lady Gaga, and Superman.'" },
    { question: "Ambiguous: 'To my mother, Ayn Rand, and God.'", choices: ["Clear", "Ambiguous"], correctIndex: 0, explanation: "Rule: Here the Oxford comma separates the three distinct items clearly." },
    { question: "Punctuate: 'The highlights were the clown, the acrobat, and the lion.'", choices: ["Comma before and", "No comma before and"], correctIndex: 0, explanation: "Rule: Oxford comma is preferred for clarity in lists." },
    { question: "List of phrases with commas: 'I visited Paris, France; London, England; and Rome, Italy.'", choices: ["Use Semicolons", "Use Commas"], correctIndex: 0, explanation: "Rule: 'Super Comma'. When items in a list already contain commas (City, Country), separate the items with Semicolons." },
    { question: "Coordinate adjectives test: 'A big old house'", choices: ["A big, old house", "A big old house"], correctIndex: 1, explanation: "Rule: Order of Adjectives. 'Big' and 'Old' are different categories (Size/Age). No comma." },
    { question: "Coordinate adjectives test: 'A happy, lively puppy'", choices: ["Comma", "No Comma"], correctIndex: 0, explanation: "Rule: Both are opinions/descriptions. You can swap them: 'Lively, happy puppy'. Comma needed." },
    { question: "Comma before 'Jr.'?", choices: ["John Smith, Jr.", "John Smith Jr."], correctIndex: 1, explanation: "Rule: Modern style guides (like Chicago) are dropping the comma before Jr." },
    { question: "Comma before 'Inc.'?", choices: ["Apple, Inc.", "Apple Inc."], correctIndex: 1, explanation: "Rule: Often optional/dropped in modern business writing." },
    { question: "Name followed by degree: 'John Doe, Ph.D.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Use commas to set off titles/degrees." },
    { question: "Date: 'June 2020'", choices: ["June, 2020", "June 2020"], correctIndex: 1, explanation: "Rule: No comma between Month and Year if no Day is specified." },

    // 171-180: Dialogue and Narrative Punctuation
    { question: "'Stop', he said.", choices: ["Correct", "Incorrect"], correctIndex: 1, explanation: "Rule: Comma goes INSIDE quotes: 'Stop,' he said." },
    { question: "Action tag: \"I'm leaving.\" He walked out.", choices: ["\"I'm leaving,\" he walked out.", "\"I'm leaving.\" He walked out."], correctIndex: 1, explanation: "Rule: 'He walked out' is an action, not a speech tag. Use a period." },
    { question: "Speech tag: \"I'm leaving,\" he said.", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: 'He said' is a speech tag. Use a comma." },
    { question: "Interrupted speech: \"I don't--\" she started.", choices: ["Em-dash", "Ellipsis"], correctIndex: 0, explanation: "Rule: Em-dash shows abrupt interruption. Ellipsis shows trailing off." },
    { question: "Trailing off: \"I don't know...\"", choices: ["Em-dash", "Ellipsis"], correctIndex: 1, explanation: "Rule: Ellipsis shows hesitation." },
    { question: "Thinking: *What now?* he thought.", choices: ["Italics", "Quotes"], correctIndex: 0, explanation: "Rule: Internal thought is often formatted in Italics without quotes." },
    { question: "Screaming: \"Help!\" he screamed.", choices: ["Exclamation inside", "Exclamation outside"], correctIndex: 0, explanation: "Rule: Punctuation belongs to the quote." },
    { question: "Questioning quote: Did he say \"Yes\"?", choices: ["? Outside", "? Inside"], correctIndex: 0, explanation: "Rule: The whole sentence is the question." },
    { question: "Quoted Question: He asked, \"Why?\"", choices: ["? Outside", "? Inside"], correctIndex: 1, explanation: "Rule: The quote itself is the question." },
    { question: "Quote inside question: Did he ask \"Why?\"?", choices: ["Drop the second ?", "Keep both ?"], correctIndex: 0, explanation: "Rule: If the quote ends in ? and the sentence is a ?, use only one mark (the one inside)." },

    // 181-190: Scientific/Mathematical Punctuation
    { question: "Ratio: 2:1", choices: ["Colon", "Semicolon"], correctIndex: 0, explanation: "Rule: Use colons for ratios." },
    { question: "Time: 12:30", choices: ["Colon", "Period"], correctIndex: 0, explanation: "Rule: US usage employs colons for time." },
    { question: "Decimal: 3.14", choices: ["Colon", "Period"], correctIndex: 1, explanation: "Rule: Decimals use periods." },
    { question: "Negative number: -5", choices: ["Hyphen", "En-dash", "Minus sign"], correctIndex: 2, explanation: "Rule: Technically a minus sign, but often typed as a hyphen." },
    { question: "Section sign: §", choices: ["Paragraph", "Section"], correctIndex: 1, explanation: "Rule: Legal symbol." },
    { question: "Asterisk *", choices: ["Footnote", "Emphasis"], correctIndex: 0, explanation: "Rule: Indicates a footnote or reference." },
    { question: "Formatting: '100%' vs '100 %'", choices: ["No space", "Space"], correctIndex: 0, explanation: "Rule: No space between number and percent sign." },
    { question: "Degrees: '90°'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: Degree symbol follows the number immediately." },
    { question: "Money: '$100'", choices: ["Before", "After"], correctIndex: 0, explanation: "Rule: Currency symbols go before the number in English." },
    { question: "Number range: 10–20", choices: ["En-dash", "Hyphen"], correctIndex: 0, explanation: "Rule: En-dash for ranges." },

    // 191-200: Rare/Archaic Marks & Style
    { question: "Interrobang: ‽", choices: ["Question+Exclamation", "Pause"], correctIndex: 0, explanation: "Rule: Non-standard mark combining ? and !." },
    { question: "Oxford Comma debate:", choices: ["Required everywhere", "Style dependent"], correctIndex: 1, explanation: "Rule: It depends on the style guide (Chicago requires it; AP often forbids it), but it adds clarity." },
    { question: "Single space or Double space after period?", choices: ["Single", "Double"], correctIndex: 0, explanation: "Rule: Modern typography standard is ONE space after a period." },
    { question: "Bullet points punctuation:", choices: ["Consistent punctuation", "Random"], correctIndex: 0, explanation: "Rule: If bullets are sentences, use periods. If fragments, usually no periods. Be consistent." },
    { question: "Ampersand (&):", choices: ["Formal writing", "Titles/Logos only"], correctIndex: 1, explanation: "Rule: Avoid & in formal text unless part of a company name (AT&T)." },
    { question: "Vertical Bar (|):", choices: ["Pipe", "Slash"], correctIndex: 0, explanation: "Rule: Called a pipe, used in computing/math." },
    { question: "Tilde (~):", choices: ["Approximately", "Exact"], correctIndex: 0, explanation: "Rule: ~10 means 'approximately 10'." },
    { question: "Caret (^):", choices: ["Insertion", "Deletion"], correctIndex: 0, explanation: "Rule: Proofreading mark to insert something." },
    { question: "Guillemets (« »):", choices: ["French quotes", "English quotes"], correctIndex: 0, explanation: "Rule: Quotation marks used in other languages." },
    { question: "Pilcrow (¶):", choices: ["Paragraph mark", "Section mark"], correctIndex: 0, explanation: "Rule: Symbol for a paragraph break." }
  ]
};
