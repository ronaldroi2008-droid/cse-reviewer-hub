


const PUNCTUATIONS_QUESTIONS = {
  beginner: [
    // 1–10: End Marks (Period, Question Mark, Exclamation Point)
    {
      question: "Which punctuation mark is used to end a simple statement of fact?",
      choices: ["Period (.)", "Question Mark (?)", "Exclamation Point (!)", "Comma (,)"],
      correctIndex: 0,
      explanation:
        "Rule: Declarative Sentences. A period is used to end a sentence that makes a statement or gives a mild command."
    },
    {
      question: "Which punctuation mark is required at the end of a direct question?",
      choices: ["Period (.)", "Question Mark (?)", "Exclamation Point (!)", "Comma (,)"],
      correctIndex: 1,
      explanation:
        "Rule: Interrogative Sentences. Any sentence that asks a direct question must end with a question mark."
    },
    {
      question: "Which mark is used to express strong emotion, surprise, or shouting?",
      choices: ["Period (.)", "Question Mark (?)", "Exclamation Point (!)", "Semicolon (;)"],
      correctIndex: 2,
      explanation:
        "Rule: Exclamatory Sentences. Use an exclamation point to show intensity, urgency, or strong feelings."
    },
    {
      question: "Choose the correct punctuation for this sentence: 'Where are you going__'",
      choices: [".", "?", "!", ","],
      correctIndex: 1,
      explanation: "Rule: Wh-Questions. The sentence starts with 'Where', indicating it is a question."
    },
    {
      question: "Choose the correct punctuation for this sentence: 'I love chocolate ice cream__'",
      choices: [".", "?", ",", ";"],
      correctIndex: 0,
      explanation:
        "Rule: Declarative Sentence. This is a statement of opinion, so it ends with a period."
    },
    {
      question: "Choose the correct punctuation for this warning: 'Watch out__'",
      choices: [".", "?", "!", ","],
      correctIndex: 2,
      explanation:
        "Rule: Urgency/Warning. Phrases shouted to warn someone require an exclamation point."
    },
    {
      question: "Choose the correct punctuation: 'My name is John__'",
      choices: [".", "?", "!", ":"],
      correctIndex: 0,
      explanation: "Rule: Statement. It simply states a fact, so it ends with a period."
    },
    {
      question: "Choose the correct punctuation: 'What time is it__'",
      choices: [".", "?", "!", ","],
      correctIndex: 1,
      explanation:
        "Rule: Question. It asks for information using 'What', so a question mark is needed."
    },
    {
      question:
        "Choose the correct punctuation for a command in anger: 'Stop that right now__'",
      choices: [".", "?", "!", ","],
      correctIndex: 2,
      explanation:
        "Rule: Strong Command. While commands can take periods, an angry or urgent command uses an exclamation point."
    },
    {
      question: "Choose the correct punctuation for a polite request: 'Please sit down__'",
      choices: [".", "?", "!", ","],
      correctIndex: 0,
      explanation:
        "Rule: Imperative Sentence. Polite commands or requests typically end with a period."
    },

    // 11–20: Basic Commas (Lists and Dates)
    {
      question: "Which sentence correctly uses commas to separate items in a list?",
      choices: [
        "I bought apples, oranges and, bananas.",
        "I bought apples, oranges, and bananas.",
        "I bought, apples oranges and bananas.",
        "I bought apples oranges, and bananas."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Commas in a Series. Commas are placed after each item in a list. The comma before 'and' (Oxford Comma) is standard in formal writing."
    },
    {
      question: "Where should the comma be placed in this date: 'January 1 2020'?",
      choices: ["January, 1 2020", "January 1, 2020", "January 1 2020,", "January 1, 2020,"],
      correctIndex: 1,
      explanation:
        "Rule: Date Formatting. Use a comma to separate the day of the month (1) from the year (2020)."
    },
    {
      question: "Choose the sentence that correctly lists three colors.",
      choices: [
        "Red, blue, and green",
        "Red, blue and, green",
        "Red blue, and green",
        "Red, blue, and, green"
      ],
      correctIndex: 0,
      explanation:
        "Rule: Series Comma. Use commas to separate distinct items: item 1, item 2, and item 3."
    },
    {
      question: "Which is the correct format for a city and state?",
      choices: ["Miami Florida", "Miami, Florida", "Miami; Florida", "Miami. Florida"],
      correctIndex: 1,
      explanation:
        "Rule: Geographical Names. Always use a comma to separate the city from the state (or country)."
    },
    {
      question: "Which sentence correctly lists multiple actions?",
      choices: [
        "He ran, jumped, and swam.",
        "He ran jumped and swam.",
        "He ran, jumped and, swam.",
        "He ran jumped, and swam."
      ],
      correctIndex: 0,
      explanation:
        "Rule: Series of Verbs. Just like nouns, a list of actions (verbs) requires commas to separate them."
    },
    {
      question: "How should you punctuate 'Monday May 5'?",
      choices: ["Monday, May 5", "Monday May, 5", "Monday, May, 5", "Monday May 5"],
      correctIndex: 0,
      explanation:
        "Rule: Day and Date. Use a comma to separate the specific day of the week (Monday) from the calendar date (May 5)."
    },
    {
      question: "How should you punctuate 'Manila Philippines'?",
      choices: ["Manila. Philippines", "Manila, Philippines", "Manila; Philippines", "Manila - Philippines"],
      correctIndex: 1,
      explanation:
        "Rule: Location. Use a comma to separate the specific city (Manila) from the larger region/country (Philippines)."
    },
    {
      question: "Which sentence correctly lists numbers?",
      choices: ["One, two, three.", "One two, three.", "One, two three.", "One two three."],
      correctIndex: 0,
      explanation:
        "Rule: Lists. Even numbers in a list must be separated by commas."
    },
    {
      question: "Which sentence correctly uses the Oxford Comma?",
      choices: [
        "I need a pen, a pencil, and a ruler.",
        "I need a pen a pencil, and a ruler.",
        "I need a pen, a pencil and a ruler.",
        "I need, a pen, a pencil, and a ruler."
      ],
      correctIndex: 0,
      explanation:
        "Rule: Oxford Comma. This refers to the comma placed immediately before the conjunction 'and' in a list of three or more items."
    },
    {
      question: "How should you punctuate 'Paris France'?",
      choices: ["Paris, France", "Paris France", "Paris; France", "Paris: France"],
      correctIndex: 0,
      explanation:
        "Rule: Geographical Names. Use a comma between the city and the nation."
    },

    // 21–30: Apostrophes (Possession and Contractions)
    {
      question: "Which phrase correctly shows that the toy belongs to one cat?",
      choices: ["The cats toy", "The cat's toy", "The cats' toy", "The cat is toy"],
      correctIndex: 1,
      explanation:
        "Rule: Singular Possession. To show possession for a singular noun (cat), add an apostrophe followed by 's' ('s)."
    },
    {
      question: "What is the correct contraction for 'do not'?",
      choices: ["dont", "don't", "do'nt", "d'ont"],
      correctIndex: 1,
      explanation:
        "Rule: Contractions. The apostrophe replaces the letter 'o' that was removed from 'not'."
    },
    {
      question: "Which phrase correctly shows that the food belongs to many dogs?",
      choices: ["The dog's food", "The dogs' food", "The dogs food", "The dogs's food"],
      correctIndex: 1,
      explanation:
        "Rule: Plural Possession. For plural nouns ending in 's' (dogs), add only the apostrophe at the end."
    },
    {
      question: "What is the correct contraction for 'it is'?",
      choices: ["its", "it's", "its'", "i'ts"],
      correctIndex: 1,
      explanation:
        "Rule: Contractions vs Possessive. 'It's' is the contraction for 'It is'. 'Its' (no apostrophe) indicates possession."
    },
    {
      question: "Which phrase correctly shows possession for the name 'Tom'?",
      choices: ["Tom's car", "Toms car", "Toms' car", "Tom is car"],
      correctIndex: 0,
      explanation:
        "Rule: Singular Proper Noun. Since 'Tom' is one person, add 's to show ownership."
    },
    {
      question: "What is the correct contraction for 'we are'?",
      choices: ["were", "we're", "w'ere", "we'r"],
      correctIndex: 1,
      explanation:
        "Rule: Contractions. The apostrophe replaces the letter 'a' in 'are'."
    },
    {
      question: "Which is the correct possessive form for 'the bag of the girl'?",
      choices: ["The girls bag", "The girl's bag", "The girls' bag", "The girl bag"],
      correctIndex: 1,
      explanation:
        "Rule: Singular Possession. One girl owning something requires 's."
    },
    {
      question: "What is the correct contraction for 'cannot'?",
      choices: ["can't", "cann't", "ca'nt", "cant"],
      correctIndex: 0,
      explanation:
        "Rule: Contractions. The apostrophe replaces the letters 'no' in 'not'."
    },
    {
      question: "What is the correct possessive form of 'children' (plural)?",
      choices: ["Childrens'", "Children's", "Childrens", "Childrens's"],
      correctIndex: 1,
      explanation:
        "Rule: Irregular Plural Possession. If a plural noun does not end in 's' (children), you must add 's."
    },
    {
      question: "What does the word 'They're' mean?",
      choices: ["Their", "There", "They are", "They were"],
      correctIndex: 2,
      explanation:
        "Rule: Contractions. The apostrophe takes the place of 'a', shortening 'They are'."
    },

    // 31–40: Capitalization (Basic Punctuation Rule)
    {
      question: "Which word in this list must always be capitalized?",
      choices: ["cat", "house", "monday", "blue"],
      correctIndex: 2,
      explanation:
        "Rule: Proper Nouns. Days of the week (Monday, Tuesday) are proper nouns and require capitalization."
    },
    {
      question: "Which sentence is capitalized correctly?",
      choices: ["i like dogs.", "I like dogs.", "I like Dogs.", "i Like Dogs."],
      correctIndex: 1,
      explanation:
        "Rule: Sentence Starters. Always capitalize the first word of a sentence and the pronoun 'I'."
    },
    {
      question: "Which month is written correctly?",
      choices: ["january", "January", "jAnuary", "JANUARY (in formal text)"],
      correctIndex: 1,
      explanation:
        "Rule: Proper Nouns. Months of the year must always start with a capital letter."
    },
    {
      question: "Which of these location words needs a capital letter?",
      choices: ["city", "paris", "town", "village"],
      correctIndex: 1,
      explanation:
        "Rule: Proper Nouns. 'Paris' is the specific name of a city, whereas 'city' is a common noun."
    },
    {
      question: "Which title is written correctly?",
      choices: ["Mr. Smith", "mr. Smith", "Mr. smith", "mr smith"],
      correctIndex: 0,
      explanation:
        "Rule: Titles. Honorifics (Mr., Mrs., Dr.) and surnames must be capitalized."
    },
    {
      question:
        "Which religious text is written correctly in the middle of a sentence?",
      choices: ["The Bible", "the bible", "The bible", "the Bible"],
      correctIndex: 3,
      explanation:
        "Rule: Sacred Texts. Capitalize the name 'Bible' but not the article 'the' when it is in the middle of a sentence."
    },
    {
      question: "Should the word 'english' be capitalized?",
      choices: ["Yes", "No"],
      correctIndex: 0,
      explanation:
        "Rule: Languages and Nationalities. English, Filipino, Spanish, etc., are proper adjectives/nouns and must be capitalized."
    },
    {
      question: "Which sentence uses 'Dad' correctly?",
      choices: ["My Dad is home.", "my dad is home.", "My dad is home.", "My Dad Is Home."],
      correctIndex: 2,
      explanation:
        "Rule: Family Titles. Do NOT capitalize 'dad' or 'mom' if they follow a possessive pronoun like 'my' or 'your'. Only capitalize them if used as a name (e.g., 'Hi, Dad!')."
    },
    {
      question: "Which name is capitalized correctly?",
      choices: ["Harry Potter", "Harry potter", "harry Potter", "harry potter"],
      correctIndex: 0,
      explanation:
        "Rule: Proper Names. Both the first name and the last name must be capitalized."
    },
    {
      question: "Should seasons like 'summer' be capitalized?",
      choices: ["Yes", "No"],
      correctIndex: 1,
      explanation:
        "Rule: Seasons. Unlike days and months, seasons (spring, summer, fall, winter) are generally NOT capitalized unless part of a specific title."
    },

    // 41–50: Basic Quotation Marks
    {
      question: "Which sentence correctly shows someone speaking?",
      choices: [
        "He said, I am happy.",
        "He said 'I am happy.'",
        "He said, \"I am happy.\"",
        "He said (I am happy)."
      ],
      correctIndex: 2,
      explanation:
        "Rule: Direct Speech. Use double quotation marks to enclose the exact words spoken by a person."
    },
    {
      question: "How should you punctuate: She said Hello",
      choices: [
        "She said \"Hello.\"",
        "She said, \"Hello.\"",
        "She said Hello.",
        "She said 'Hello'."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Dialogue Punctuation. Use a comma to separate the speaker tag ('She said') from the quote, and capitalize the first letter of the quote."
    },
    {
      question: "Where do quotation marks go for a phrase?",
      choices: ["\"The end\"", "The \"end\"", "The end\"", "\"The end"],
      correctIndex: 0,
      explanation:
        "Rule: Enclosing. Quotation marks must appear at the beginning AND at the end of the quoted phrase."
    },
    {
      question: "Which sentence is punctuated correctly?",
      choices: [
        "\"Stop,\" he yelled.",
        "\"Stop\", he yelled.",
        "Stop, he yelled.",
        "Stop\" he yelled."
      ],
      correctIndex: 0,
      explanation:
        "Rule: Punctuation Inside Quotes. In dialogue, the comma separating the quote from the speaker tag goes INSIDE the closing quotation mark."
    },
    {
      question: "Which is the correct way to write the title of a short story?",
      choices: ["The Lottery", "\"The Lottery\"", "The Lottery (italics)", "THE LOTTERY"],
      correctIndex: 1,
      explanation:
        "Rule: Titles of Short Works. Short stories, songs, poems, and articles are placed in quotation marks. Long works (books, movies) are italicized."
    },
    {
      question: "Which is correct if the quote is a question?",
      choices: [
        "He asked, \"Why?\"",
        "He asked \"Why\"?",
        "He asked, \"Why\"?",
        "He asked \"Why.\""
      ],
      correctIndex: 0,
      explanation:
        "Rule: Question Mark Placement. If the quoted text itself is a question, the question mark goes INSIDE the quotation marks."
    },
    {
      question: "Is this correct? \"I love you.\" said John.",
      choices: ["Yes", "No"],
      correctIndex: 1,
      explanation:
        "Rule: Commas in Dialogue. It should be: \"I love you,\" said John. Use a comma, not a period, if the sentence continues with a speaker tag."
    },
    {
      question: "Correct punctuation: \"Run!\" she screamed.",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Exclamation Points in Dialogue. An exclamation point goes inside the quotes. Unlike a period, you do NOT need to change it to a comma before the speaker tag."
    },
    {
      question: "When discussing a specific word, how should it be written?",
      choices: [
        "The word necessary is hard.",
        "The word \"necessary\" is hard.",
        "The word Necessary is hard.",
        "The word 'necessary' is hard."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Mentioning Words. Use quotation marks (or italics) when referring to a word as a word itself, rather than for its meaning."
    },
    {
      question: "Which symbols can be used as double quotation marks in English text?",
      choices: ['"', "”", "Both A and B", "'"],
      correctIndex: 2,
      explanation:
        "Rule: Typography. Both straight quotes (\") and curly quotes (”) are accepted as double quotation marks in English."
    }
  ],

  intermediate: [
    // 51–60: Commas (Compound Sentences & Intros)
    {
      question: "Which sentence correctly joins two independent clauses?",
      choices: [
        "I like tea but I like coffee.",
        "I like tea, but I like coffee.",
        "I like tea but, I like coffee.",
        "I like tea, but, I like coffee."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Compound Sentences. Use a comma before a coordinating conjunction (FANBOYS, like 'but') when it connects two complete sentences."
    },
    {
      question: "Where should the comma go in: 'However I did not go.'?",
      choices: [
        "However I did not go.",
        "However, I did not go.",
        "However; I did not go.",
        "However: I did not go."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Introductory Transitions. Use a comma after transitional words (However, Therefore, Furthermore) at the start of a sentence."
    },
    {
      question: "How should you punctuate: 'When he arrived we left.'?",
      choices: [
        "When he arrived we left.",
        "When he arrived, we left.",
        "When he arrived; we left.",
        "When, he arrived we left."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Introductory Dependent Clause. If a sentence starts with a subordinating conjunction (When, If, Because), place a comma after the dependent clause."
    },
    {
      question: "Which sentence requires a comma?",
      choices: ["I ran fast and won.", "I ran fast and I won."],
      correctIndex: 1,
      explanation:
        "Rule: Compound vs Compound Predicate. Sentence B has two subjects ('I' ran, 'I' won) so it needs a comma. Sentence A has one subject doing two things, so no comma is needed."
    },
    {
      question: "How do you punctuate a 'Yes' or 'No' answer?",
      choices: [
        "Yes I will come.",
        "Yes, I will come.",
        "Yes; I will come.",
        "Yes: I will come."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Introductory Words. Always place a comma after 'Yes' or 'No' at the beginning of a sentence."
    },
    {
      question: "Where does the comma go in: 'In the morning I run.'?",
      choices: [
        "In the morning I run.",
        "In the morning, I run.",
        "In the morning; I run.",
        "In, the morning I run."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Introductory Prepositional Phrase. A comma is generally used after a long introductory phrase to indicate a pause."
    },
    {
      question: "Which sentence correctly uses 'so'?",
      choices: [
        "She was tired so, she slept.",
        "She was tired, so she slept.",
        "She was tired so she slept.",
        "She was tired; so she slept."
      ],
      correctIndex: 1,
      explanation:
        "Rule: FANBOYS Punctuation. The comma must go BEFORE the conjunction 'so', not after it."
    },
    {
      question: "Which sentence correctly uses 'because' at the start?",
      choices: [
        "Because it rained we stayed home.",
        "Because it rained, we stayed home.",
        "Because, it rained we stayed home.",
        "Because it rained; we stayed home."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Dependent Clause First. When 'Because' starts the sentence, use a comma to separate the cause from the result."
    },
    {
      question: "Which sentence correctly uses 'because' in the middle?",
      choices: [
        "We stayed home because it rained.",
        "We stayed home, because it rained."
      ],
      correctIndex: 0,
      explanation:
        "Rule: Main Clause First. When the independent clause comes first, you generally do NOT use a comma before 'because'."
    },
    {
      question: "How do you punctuate 'Well I guess so.'?",
      choices: [
        "Well, I guess so.",
        "Well I guess so.",
        "Well; I guess so.",
        "Well. I guess so."
      ],
      correctIndex: 0,
      explanation:
        "Rule: Introductory Interjections. Use a comma after mild interjections like 'Well', 'Oh', or 'Hey' at the start of a sentence."
    },

    // 61–70: Commas (Direct Address & Interrupters)
    {
      question: "Which sentence correctly addresses someone named John?",
      choices: ["John come here.", "John, come here.", "John; come here.", "John. Come here."],
      correctIndex: 1,
      explanation:
        "Rule: Direct Address. Always use a comma to separate the name of the person you are speaking to from the rest of the sentence."
    },
    {
      question: "Where do the commas go in: 'I know Sarah that you are right.'?",
      choices: [
        "I know Sarah, that you are right.",
        "I know, Sarah, that you are right.",
        "I know Sarah that, you are right.",
        "I know, Sarah that you are right."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Direct Address in the Middle. If the name is in the middle of the sentence, use commas on BOTH sides of the name."
    },
    {
      question: "Why is the comma important in 'Let's eat, Grandma!'?",
      choices: ["It is not important.", "Without it, you are eating Grandma."],
      correctIndex: 1,
      explanation:
        "Rule: Clarity/Direct Address. Without the comma, 'Grandma' becomes the direct object (the food). With the comma, you are inviting Grandma to eat."
    },
    {
      question: "Is this punctuated correctly? 'This book, I believe, is yours.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Interrupters/Parenthetical Expressions. Phrases like 'I believe', 'however', or 'of course' that interrupt the flow should be set off by commas."
    },
    {
      question: "Which sentence correctly uses 'however' in the middle?",
      choices: [
        "He is, however, not coming.",
        "He is however, not coming.",
        "He is, however not coming.",
        "He is however not coming."
      ],
      correctIndex: 0,
      explanation:
        "Rule: Interrupters. When 'however' interrupts a single clause, place commas before and after it."
    },
    {
      question: "How do you punctuate 'No sir I didn't.'?",
      choices: [
        "No sir I didn't.",
        "No, sir, I didn't.",
        "No sir, I didn't.",
        "No, sir I didn't."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Combined Rules. Comma after 'No' (Introductory word) AND comma after 'sir' (Direct Address)."
    },
    {
      question:
        "Which sentence correctly uses commas for a non-essential clause?",
      choices: [
        "My brother who is a doctor, lives here.",
        "My brother, who is a doctor, lives here.",
        "My brother who, is a doctor lives here.",
        "My brother, who is a doctor lives here."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Non-Restrictive Clauses. If the phrase 'who is a doctor' is just extra information (you already know which brother), enclose it in commas."
    },
    {
      question:
        "Which sentence correctly implies there is only one movie named Titanic?",
      choices: ["The movie, Titanic, is sad.", "The movie Titanic is sad."],
      correctIndex: 1,
      explanation:
        "Rule: Essential (Restrictive) Appositive. Since there are many movies, the name 'Titanic' is essential to identify which one. Do NOT use commas for essential information."
    },
    {
      question: "How do you punctuate 'Edison the inventor was smart.'?",
      choices: ["Edison, the inventor, was smart.", "Edison the inventor was smart."],
      correctIndex: 0,
      explanation:
        "Rule: Non-Essential Appositive. 'The inventor' just renames Edison. Since Edison is a specific person, the description is extra, so use commas."
    },
    {
      question: "Is this correct? 'You are, of course, invited.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Parenthetical Expression. 'Of course' is a side comment interrupting the sentence, so commas are required."
    },

    // 71–80: Semicolons and Colons
    {
      question: "What is the primary function of a semicolon (;)?",
      choices: [
        "To end a sentence",
        "To join two independent clauses without a conjunction",
        "To introduce a list",
        "To show possession"
      ],
      correctIndex: 1,
      explanation:
        "Rule: Semicolon Usage. It connects two closely related sentences that are not joined by a coordinating conjunction (and, but, etc.)."
    },
    {
      question: "Is this sentence correct? 'I love ice cream; it is cold.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Semicolon Usage. Both 'I love ice cream' and 'it is cold' are complete sentences. The semicolon correctly joins them."
    },
    {
      question: "Is this sentence correct? 'I bought: apples, bananas, and pears.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 1,
      explanation:
        "Rule: Colon Misusage. Do NOT use a colon after a verb (bought) or preposition. The sentence should flow naturally without the colon."
    },
    {
      question: "Is this sentence correct? 'I need three things: pen, paper, and ink.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Colon Usage. Use a colon after a complete independent clause ('I need three things') to introduce a list."
    },
    {
      question: "Which mark fits best? 'It rained hard ____ we stayed inside.'",
      choices: [",", ";", ":", "!"],
      correctIndex: 1,
      explanation:
        "Rule: Joining Clauses. Since there is no conjunction (like 'so'), a comma would be a splice. A semicolon is the correct choice to join the clauses."
    },
    {
      question: "Is this sentence correct? 'He has one goal: to win.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Colon for Emphasis. A colon can be used to emphasize or define a word or phrase at the end of a sentence."
    },
    {
      question: "How should you punctuate the salutation in a formal business letter?",
      choices: ["Dear Sir:", "Dear Sir,", "Dear Sir;", "Dear Sir."],
      correctIndex: 0,
      explanation:
        "Rule: Business Letter Format. A colon is used after the salutation (greeting) in formal business correspondence."
    },
    {
      question: "Should you use a semicolon or a comma here? 'I went home, and I slept.'",
      choices: ["Semicolon", "Comma"],
      correctIndex: 1,
      explanation:
        "Rule: Comma with Conjunction. Since the word 'and' is present, use a comma. Use a semicolon only if you remove 'and'."
    },
    {
      question:
        "Which word often follows a semicolon? 'I studied hard; ____ I passed.'",
      choices: ["therefore", "because", "but", "so"],
      correctIndex: 0,
      explanation:
        "Rule: Conjunctive Adverbs. Words like 'therefore', 'however', and 'consequently' often follow a semicolon to transition between clauses."
    },
    {
      question: "Is this sentence correct? 'The train was late; we missed the show.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Semicolon Logic. The two clauses are closely related (cause and effect), making the semicolon an appropriate connector."
    },

    // 81–90: Hyphens and Dashes
    {
      question:
        "Which punctuation mark connects two words to create a single adjective (e.g., well-known)?",
      choices: ["Hyphen (-)", "Dash (—)", "Comma (,)", "Colon (:)"],
      correctIndex: 0,
      explanation:
        "Rule: Hyphens. A hyphen is a short line used to join words together to function as one unit."
    },
    {
      question: "Which sentence is punctuated correctly?",
      choices: [
        "He is a well known actor.",
        "He is a well-known actor.",
        "He is a well—known actor.",
        "He is a well, known actor."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Compound Modifiers. Use a hyphen when two words act as a single adjective before a noun."
    },
    {
      question: "Which mark indicates a sudden break or interruption in thought?",
      choices: ["Hyphen", "Dash (Em-dash)", "Period", "Comma"],
      correctIndex: 1,
      explanation:
        "Rule: Em-dash. The long dash (—) is used to show a strong break, interruption, or emphasis in a sentence."
    },
    {
      question: "How do you write the number 21 in words?",
      choices: ["Twenty one", "Twenty-one", "Twentyone", "Twenty–one"],
      correctIndex: 1,
      explanation:
        "Rule: Numbers. Hyphenate all compound numbers from twenty-one to ninety-nine."
    },
    {
      question: "Which prefix usage is correct?",
      choices: ["ex wife", "ex-wife", "exwife", "ex—wife"],
      correctIndex: 1,
      explanation:
        "Rule: Hyphens with Prefixes. The prefixes 'ex-', 'self-', and 'all-' always require a hyphen."
    },
    {
      question: "Is this correct? 'The book—which I lost—was found.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Em-dashes for Emphasis. Dashes can be used like parentheses to set off extra information with more emphasis."
    },
    {
      question: "Would you use a hyphen or a dash in 'A long-term plan'?",
      choices: ["Hyphen", "Dash"],
      correctIndex: 0,
      explanation:
        "Rule: Compound Adjective. 'Long-term' describes the plan, so it uses a hyphen."
    },
    {
      question: "Is this correct? 'Everything I own—books, clothes, car—is gone.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Em-dashes for Lists. Dashes can set off a list inserted in the middle of a sentence for emphasis/clarity."
    },
    {
      question: "Which is the correct spelling?",
      choices: ["Self esteem", "Self-esteem"],
      correctIndex: 1,
      explanation:
        "Rule: Prefix 'Self-'. Words starting with 'self-' (except selfish/selfless) are hyphenated."
    },
    {
      question: "Which is the correct compound adjective?",
      choices: [
        "3 year old child",
        "3-year-old child",
        "3-year old child",
        "3 year-old child"
      ],
      correctIndex: 1,
      explanation:
        "Rule: Multi-word Compounds. When a phrase like '3 years old' comes before a noun, hyphenate the entire phrase."
    },

    // 91–100: Parentheses and Brackets
    {
      question: "Which marks are used to enclose non-essential or side information?",
      choices: ["Parentheses ( )", "Brackets [ ]", "Braces { }", "Slashes / /"],
      correctIndex: 0,
      explanation:
        "Rule: Parentheses. They are used to add extra details that could be removed without changing the sentence's basic meaning."
    },
    {
      question: "Is this usage correct? 'He (John) is here.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Clarification. Parentheses can be used to clarify a pronoun or add a specific name."
    },
    {
      question:
        "Which marks are used to insert your own words into a direct quote?",
      choices: ["Parentheses ( )", "Brackets [ ]", "Braces { }", "Slashes / /"],
      correctIndex: 1,
      explanation:
        "Rule: Brackets. Use square brackets [ ] to clarify or change a word inside a quotation so it fits your sentence grammatically."
    },
    {
      question:
        "Where does the period go in this sentence: 'I saw him (yesterday)'?",
      choices: [
        "...him (yesterday).",
        "...him (yesterday.)",
        "...him .(yesterday)",
        "...him (yesterday)"
      ],
      correctIndex: 0,
      explanation:
        "Rule: Parentheses within a sentence. If the parenthetical content is part of a larger sentence, the period goes OUTSIDE the closing parenthesis."
    },
    {
      question: "Is this correct? 'He said, \"It [the car] is broken.\"'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Brackets in Quotes. This shows that the writer added '[the car]' to explain what 'It' referred to in the original quote."
    },
    {
      question: "Which creates a stronger interruption: Parentheses or Commas?",
      choices: ["Parentheses", "Commas"],
      correctIndex: 0,
      explanation:
        "Rule: Degrees of Separation. Commas are the weakest, parentheses are stronger, and dashes are the strongest/most emphatic."
    },
    {
      question: "Is this usage correct? 'The meeting (held on Zoom) was long.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Parenthetical Information. It provides extra detail about the meeting location."
    },
    {
      question: "Where does the period go if a full sentence is inside parentheses?",
      choices: ["(He didn't know.)", "(He didn't know)."],
      correctIndex: 0,
      explanation:
        "Rule: Full Parenthetical Sentence. If the parentheses contain a complete sentence that stands alone, the period goes INSIDE."
    },
    {
      question: "Identify the symbol for Parentheses:",
      choices: ["( )", "[ ]", "{ }"],
      correctIndex: 0,
      explanation:
        "Rule: Identification. Round brackets are called parentheses."
    },
    {
      question: "Identify the symbol for Brackets:",
      choices: ["( )", "[ ]", "{ }"],
      correctIndex: 1,
      explanation:
        "Rule: Identification. Square brackets are simply called brackets."
    }
  ],

  advanced: [
    // 101–110: Advanced Commas (Adjectives and Clarity)
    {
      question: "Which sentence is punctuated correctly?",
      choices: [
        "A tall dark, stranger.",
        "A tall, dark stranger.",
        "A tall, dark, stranger.",
        "A tall dark stranger."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Coordinate Adjectives. 'Tall' and 'dark' are equal in importance. If you can say 'tall AND dark', you need a comma between them."
    },
    {
      question: "Which sentence is punctuated correctly?",
      choices: ["A shiny, red car.", "A shiny red car."],
      correctIndex: 1,
      explanation:
        "Rule: Cumulative Adjectives. You cannot say 'shiny AND red car' naturally because 'red' is closely linked to 'car'. No comma is used."
    },
    {
      question:
        "Why is the comma necessary in 'For Mary, Jane is a friend.'?",
      choices: ["To separate names", "To correct grammar"],
      correctIndex: 0,
      explanation:
        "Rule: Clarity. Without the comma ('For Mary Jane is a friend'), the reader might think the person's name is 'Mary Jane'."
    },
    {
      question: "How should you punctuate 'Whatever you do do it well.'?",
      choices: [
        "Whatever you do do it well.",
        "Whatever you do, do it well."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Clarity/Repetitive Words. Use a comma to separate repetitive words like 'do do' to prevent confusion."
    },
    {
      question: "Is this correct? 'The problems are, I think, solvable.'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Interrupters. The phrase 'I think' interrupts the flow of the sentence and requires commas."
    },
    {
      question: "Should there be a comma in 'The expensive, beautiful dress'?",
      choices: ["Yes", "No"],
      correctIndex: 0,
      explanation:
        "Rule: Coordinate Adjectives. 'Expensive' and 'beautiful' are both opinions. They are coordinate, so a comma is needed."
    },
    {
      question: "Should there be a comma in 'Five little ducks'?",
      choices: ["Yes", "No"],
      correctIndex: 1,
      explanation:
        "Rule: Cumulative Adjectives. Number (Five) and Size (little) are different categories. No comma is needed."
    },
    {
      question: "How do you use 'etc.' in a list?",
      choices: ["Apples, pears, etc.", "Apples, pears etc."],
      correctIndex: 0,
      explanation:
        "Rule: Etc. Always place a comma before 'etc.' when it is the final item in a list."
    },
    {
      question: "Is this correct? 'He asked, \"Why?\"'",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Introducing Quotes. Use a comma after verbs like 'asked' or 'said' before the quotation marks."
    },
    {
      question: "Where do the commas go in 'The ending unfortunately was sad.'?",
      choices: [
        "The ending unfortunately was sad.",
        "The ending, unfortunately, was sad."
      ],
      correctIndex: 1,
      explanation:
        "Rule: Adverbial Interrupters. Words like 'unfortunately' appearing in the middle of a sentence need commas."
    },

    // 111–120: Advanced Apostrophes
    {
      question: "What is the possessive form of the name 'James'?",
      choices: ["James's", "James'", "Jameses", "Both A and B are accepted"],
      correctIndex: 3,
      explanation:
        "Rule: Singular Noun ending in 's'. Style guides differ. Academic styles (like Oxford) prefer 'James's'. Journalistic styles (AP) prefer 'James''. Both are technically correct in English."
    },
    {
      question: "What is the possessive form of 'Boss'?",
      choices: ["Boss'", "Boss's"],
      correctIndex: 1,
      explanation:
        "Rule: Singular Noun ending in 's'. Use 's. Example: The Boss's office."
    },
    {
      question: "How do you show that Tom and Jerry own the same house?",
      choices: ["Tom's and Jerry's house", "Tom and Jerry's house"],
      correctIndex: 1,
      explanation:
        "Rule: Joint Possession. If two people own one thing together, add 's ONLY to the last name."
    },
    {
      question: "How do you show that Tom and Jerry own separate houses?",
      choices: ["Tom and Jerry's houses", "Tom's and Jerry's houses"],
      correctIndex: 1,
      explanation:
        "Rule: Separate Possession. If they each own a house, add 's to BOTH names."
    },
    {
      question: "How do you write the plural of 1990 (the decade)?",
      choices: ["1990's", "1990s"],
      correctIndex: 1,
      explanation:
        "Rule: Plural Numbers. Modern standard guides (APA, Chicago) state that you should NOT use an apostrophe for plurals of years. Apostrophes denote possession."
    },
    {
      question: "What is the possessive form of 'Mother-in-law'?",
      choices: ["Mother's-in-law", "Mother-in-law's"],
      correctIndex: 1,
      explanation:
        "Rule: Compound Nouns. Always add the 's to the very END of the compound word."
    },
    {
      question: "How do you write the plural of the letter 'A'?",
      choices: ["As", "A's"],
      correctIndex: 1,
      explanation:
        "Rule: Plural Letters. Use an apostrophe to prevent confusion (so it doesn't look like the word 'As')."
    },
    {
      question: "What is the possessive of 'Everyone'?",
      choices: ["Everyones", "Everyone's"],
      correctIndex: 1,
      explanation:
        "Rule: Indefinite Pronouns. Treat 'Everyone' as a singular noun. Add 's."
    },
    {
      question: "Which is correct: 'Two weeks notice' or 'Two weeks' notice'?",
      choices: [
        "Two weeks notice",
        "Two weeks' notice",
        "Two week's notice"
      ],
      correctIndex: 1,
      explanation:
        "Rule: Possession of Time/Measure. The notice 'belongs' to the two weeks. Since 'weeks' is plural, add the apostrophe after the 's'."
    },
    {
      question: "Which is the correct idiom: 'For goodness' sake'?",
      choices: ["goodness's", "goodness'"],
      correctIndex: 1,
      explanation:
        "Rule: Idiomatic Exception. Words ending in an 's' sound (like goodness, conscience) often take only the apostrophe in 'for ... sake' phrases."
    },

    // 121–130: Advanced Quotation Marks
    {
      question: "How do you handle a quote inside another quote?",
      choices: ['"He said \'Stop\'"', 'He said "Stop"', '\'He said "Stop"\''],
      correctIndex: 0,
      explanation:
        "Rule: Nested Quotes. Use single quotation marks (' ') for a quote inside double quotation marks (\" \")."
    },
    {
      question: "How do you punctuate: \"Did he say 'Hello'\"?",
      choices: ['"Did he say \'Hello\'?"', '"Did he say \'Hello?\'"'],
      correctIndex: 0,
      explanation:
        "Rule: Question Mark Placement. The main sentence is the question ('Did he say...?'). The quoted word 'Hello' is not a question. Therefore, the question mark goes OUTSIDE the single quote but inside the double quote (if applicable) or at the end."
    },
    {
      question:
        "In American English, where do periods and commas go relative to quotation marks?",
      choices: ["Inside", "Outside"],
      correctIndex: 0,
      explanation:
        "Rule: American Style. Periods and commas ALWAYS go INSIDE the closing quotation marks."
    },
    {
      question: "Choose the correct American punctuation:",
      choices: ['"I am home,"', '"I am home",'],
      correctIndex: 0,
      explanation:
        "Rule: Comma Placement. The comma goes inside the quote."
    },
    {
      question: "Where do semicolons go relative to quotation marks?",
      choices: ["Inside", "Outside"],
      correctIndex: 1,
      explanation:
        "Rule: Semicolons and Colons. These marks always go OUTSIDE the closing quotation marks."
    },
    {
      question:
        "What do quotation marks around a single word imply? (e.g., He is a \"genius\".)",
      choices: ["Emphasis", "Irony/Sarcasm"],
      correctIndex: 1,
      explanation:
        "Rule: Scare Quotes. Using quotes around a word often implies irony, sarcasm, or that the writer does not agree with the term."
    },
    {
      question: "How do you quote a sentence fragment in American English?",
      choices: ['He said he was "tired."', 'He said he was "tired".'],
      correctIndex: 0,
      explanation:
        "Rule: Period Placement. Even if the quote is just a word or fragment, the period still goes INSIDE in American English."
    },
    {
      question: "Which punctuation introduces a long, formal quote?",
      choices: ["Comma (,)", "Colon (:)"],
      correctIndex: 1,
      explanation:
        "Rule: Block Quotes/Formal Quotes. Use a colon to introduce a long quotation or one that follows a complete independent clause."
    },
    {
      question: "How should a book title be formatted?",
      choices: ['"Harry Potter"', "Italics: Harry Potter"],
      correctIndex: 1,
      explanation:
        "Rule: Titles of Large Works. Books, movies, and albums are Italicized. Chapters and songs use Quotes."
    },
    {
      question: "How should a song title be formatted?",
      choices: ['"Imagine"', "Italics: Imagine"],
      correctIndex: 0,
      explanation:
        "Rule: Titles of Small Works. Songs, poems, and articles use Quotation Marks."
    },

    // 131–140: Advanced Dashes and Hyphens
    {
      question: "Which example shows a 'suspended hyphen'?",
      choices: ["Pre- and post-war", "Pre and post-war"],
      correctIndex: 0,
      explanation:
        "Rule: Suspended Hyphen. When two compound words share a base (pre-war and post-war), you can delete the first 'war' but keep the hyphen (Pre-)."
    },
    {
      question: "Why use a hyphen in 'Re-creation' (making again)?",
      choices: ["To look good", "To distinguish from 'Recreation' (fun)"],
      correctIndex: 1,
      explanation:
        "Rule: Clarification. A hyphen is used to avoid confusion with a word that is spelled the same but has a different meaning."
    },
    {
      question: "Should you hyphenate 'highly skilled man'?",
      choices: ["Yes (highly-skilled)", "No (highly skilled)"],
      correctIndex: 1,
      explanation:
        "Rule: Adverbs ending in -ly. Never put a hyphen between an -ly adverb and the adjective it modifies."
    },
    {
      question: "What is the difference between a Hyphen and an Em-dash?",
      choices: ["Hyphen connects words; Em-dash separates phrases", "They are the same"],
      correctIndex: 0,
      explanation:
        "Rule: Usage. Hyphens (-) join words (e.g., self-made). Em-dashes (—) act like strong commas or parentheses to show a break in thought."
    },
    {
      question: "What is the En-dash used for?",
      choices: ["Compound words", "Ranges of numbers (1990–2000)"],
      correctIndex: 1,
      explanation:
        "Rule: En-dash. The En-dash (slightly longer than a hyphen) means 'to' or 'through' when connecting numbers or dates."
    },
    {
      question: "Hyphenate: 'State of the art technology'",
      choices: ["State-of-the-art", "State of the art"],
      correctIndex: 0,
      explanation:
        "Rule: Compound Adjective. When a phrase acts as a single adjective BEFORE a noun, hyphenate it."
    },
    {
      question: "Hyphenate: 'The technology is state of the art.'",
      choices: ["State-of-the-art", "State of the art"],
      correctIndex: 1,
      explanation:
        "Rule: Predicate Adjective. Do not hyphenate compound adjectives when they come AFTER the noun."
    },
    {
      question: "How should you write 'Anti-American'?",
      choices: ["AntiAmerican", "Anti-American"],
      correctIndex: 1,
      explanation:
        "Rule: Prefixes with Proper Nouns. Always use a hyphen when a prefix is attached to a capitalized proper noun."
    },
    {
      question: "Which spelling is preferred today: 'Co-operate' or 'Cooperate'?",
      choices: ["Co-operate", "Cooperate"],
      correctIndex: 1,
      explanation:
        "Rule: Evolution of Language. Many words that used to be hyphenated (co-operate, e-mail) are now standard closed words (cooperate, email)."
    },
    {
      question: "Is 'Twenty-one' correct?",
      choices: ["Yes", "No"],
      correctIndex: 0,
      explanation:
        "Rule: Numbers. All compound numbers from 21 to 99 must be hyphenated."
    },

    // 141–150: Ellipses and Slashes
    {
      question: "What is the primary use of an ellipsis (...)?",
      choices: ["To show excitement", "To indicate omitted words in a quote"],
      correctIndex: 1,
      explanation:
        "Rule: Omission. An ellipsis shows that parts of a quotation have been removed for brevity."
    },
    {
      question: "How many dots should appear in a standard ellipsis?",
      choices: ["2", "3", "4"],
      correctIndex: 1,
      explanation:
        "Rule: Formatting. A standard ellipsis consists of exactly three dots."
    },
    {
      question: "How do you format an ellipsis at the end of a sentence?",
      choices: ["word... .", "word...."],
      correctIndex: 1,
      explanation:
        "Rule: Four Dots. Use three dots for the ellipsis plus one dot for the period."
    },
    {
      question: "What does a slash usually mean in 'He/She'?",
      choices: ["He and She", "He or She"],
      correctIndex: 1,
      explanation:
        "Rule: Options. The slash typically signifies 'or', indicating alternatives."
    },
    {
      question: "Is a slash used in dates like '1/1/2000'?",
      choices: ["Yes", "No"],
      correctIndex: 0,
      explanation:
        "Rule: Dates. Slashes are a standard shorthand for writing dates."
    },
    {
      question: "How should an ellipsis be spaced in formal writing?",
      choices: ["word...word", "word ... word"],
      correctIndex: 1,
      explanation:
        "Rule: Spacing. Most formal style guides require a space before and after the ellipsis."
    },
    {
      question: "What does a slash indicate when quoting poetry?",
      choices: ["Line break", "Stanza break"],
      correctIndex: 0,
      explanation:
        "Rule: Poetry. A slash / indicates where a new line begins in the original poem."
    },
    {
      question: "What does an ellipsis indicate in dialogue?",
      choices: ["A sudden stop", "Trailing off or hesitation"],
      correctIndex: 1,
      explanation:
        "Rule: Dialogue. An ellipsis shows a thought fading away or hesitation. (A dash shows a sudden interruption)."
    },
    {
      question: "Is the slash correct in '1/2'?",
      choices: ["Yes", "No"],
      correctIndex: 0,
      explanation:
        "Rule: Fractions. Slashes are used to write fractions."
    },
    {
      question: "Is the use of 'and/or' recommended in formal writing?",
      choices: ["Yes", "No"],
      correctIndex: 1,
      explanation:
        "Rule: Style. 'And/or' is often considered clunky in formal writing. It is better to rephrase (e.g., 'A or B, or both')."
    }
  ],

  super: [
    // 151–160: Academic Citations & Formatting
    {
      question:
        "How should the title of a book be formatted in a typed document?",
      choices: ["Italicized", "Quoted"],
      correctIndex: 0,
      explanation:
        "Rule: Major Works. Books, journals, movies, and albums are italicized."
    },
    {
      question: "How should the title of a magazine article be formatted?",
      choices: ["Italicized", "Quoted"],
      correctIndex: 1,
      explanation:
        "Rule: Minor Works. Articles, chapters, essays, and song titles are enclosed in quotation marks."
    },
    {
      question: "Which citation format uses parentheses like (Smith, 2020)?",
      choices: ["APA", "MLA (old version)", "Chicago"],
      correctIndex: 0,
      explanation:
        "Rule: Citation Styles. APA style uses the Author-Date format in parentheses."
    },
    {
      question: "How do you correctly punctuate 'et al.' (meaning 'and others')?",
      choices: ["et al", "et. al.", "et al."],
      correctIndex: 2,
      explanation:
        "Rule: Latin Abbreviations. 'et' is a whole word (and). 'al.' is an abbreviation for 'alii'. Only 'al' gets a period."
    },
    {
      question: "What is the correct punctuation for 'i.e.' (meaning 'that is')?",
      choices: ["i.e.", "ie", "i.e"],
      correctIndex: 0,
      explanation:
        "Rule: Abbreviations. Periods are required after each letter in 'i.e.'."
    },
    {
      question: "What is the correct punctuation for 'e.g.' (meaning 'for example')?",
      choices: ["e.g.", "eg"],
      correctIndex: 0,
      explanation:
        "Rule: Abbreviations. Periods are required after each letter in 'e.g.'."
    },
    {
      question:
        "Should a comma follow 'i.e.' and 'e.g.' in American English?",
      choices: ["Yes (i.e., word)", "No (i.e. word)"],
      correctIndex: 0,
      explanation:
        "Rule: Commas with Abbreviations. In standard American academic writing, a comma always follows 'i.e.' and 'e.g.'."
    },
    {
      question:
        "Where does the period go if a full sentence is inside parentheses?",
      choices: ["(Complete sentence.)", "(Complete sentence)."],
      correctIndex: 0,
      explanation:
        "Rule: Parentheses. If the parenthetical statement is a complete, standalone sentence, the period goes INSIDE."
    },
    {
      question:
        "Where does the period go if the parenthesis is at the end of a larger sentence?",
      choices: ["(end of phrase.)", "(end of phrase)."],
      correctIndex: 1,
      explanation:
        "Rule: Sentence Flow. If the parenthesis is just part of the sentence, the period goes OUTSIDE to close the whole sentence."
    },
    {
      question: "Which dash is used for number ranges (10–20)?",
      choices: ["Hyphen (-)", "En-dash (–)", "Em-dash (—)"],
      correctIndex: 1,
      explanation:
        "Rule: Ranges. The En-dash is specifically used to represent 'to' in ranges of numbers or dates."
    },

    // 161–170: Serial Comma Nuances (Clarity)
    {
      question:
        "Why is the Oxford Comma needed in: 'I love my parents, Lady Gaga and Superman'?",
      choices: ["It looks better", "To prevent ambiguity"],
      correctIndex: 1,
      explanation:
        "Rule: Clarity. Without the comma, it sounds like an appositive—meaning your parents ARE Lady Gaga and Superman. The comma clarifies they are three separate items."
    },
    {
      question:
        "In the phrase 'To my mother, Ayn Rand, and God', is the meaning clear?",
      choices: ["Yes", "No, it's ambiguous"],
      correctIndex: 0,
      explanation:
        "Rule: Ambiguity. Here, the Oxford comma works perfectly to separate the three items. Without it, it might imply 'my mother is Ayn Rand and God'."
    },
    {
      question:
        "How should you punctuate a list that already contains commas (e.g., cities and countries)?",
      choices: ["Use Semicolons", "Use Commas"],
      correctIndex: 0,
      explanation:
        "Rule: The 'Super Comma'. When list items have internal commas (Paris, France; London, England), use semicolons to separate the items to avoid confusion."
    },
    {
      question: "Should you use a comma in 'A big old house'?",
      choices: ["Yes", "No"],
      correctIndex: 1,
      explanation:
        "Rule: Cumulative Adjectives. 'Big' (size) and 'old' (age) are different categories. You cannot reverse them ('Old big house' sounds wrong). Therefore, NO comma."
    },
    {
      question: "Should you use a comma in 'A happy, lively puppy'?",
      choices: ["Yes", "No"],
      correctIndex: 0,
      explanation:
        "Rule: Coordinate Adjectives. 'Happy' and 'lively' are both opinions. You can swap them ('Lively, happy puppy'). Therefore, YES, use a comma."
    },
    {
      question:
        "Do modern style guides require a comma before 'Jr.' (e.g., John Smith Jr.)?",
      choices: ["Yes, always", "No, it is often dropped"],
      correctIndex: 1,
      explanation:
        "Rule: Modern Style. Guides like Chicago and AP now suggest dropping the comma before Jr. and Sr."
    },
    {
      question: "Do you need a comma before 'Inc.' in a company name?",
      choices: ["Yes, always", "It is optional/often dropped"],
      correctIndex: 1,
      explanation:
        "Rule: Business Style. The comma before 'Inc.' or 'LLC' is becoming optional in modern usage."
    },
    {
      question: "Is the punctuation correct: 'John Doe, Ph.D.'?",
      choices: ["Correct", "Incorrect"],
      correctIndex: 0,
      explanation:
        "Rule: Degrees/Titles. Use commas to set off degrees like Ph.D., M.D., etc., from the name."
    },
    {
      question: "Is a comma needed in 'June 2020'?",
      choices: ["Yes (June, 2020)", "No (June 2020)"],
      correctIndex: 1,
      explanation:
        "Rule: Dates. If there is no specific day (just Month and Year), NO comma is used."
    },
    {
      question: "If a sentence ends with 'etc.', do you add another period?",
      choices: ["Yes (etc..)", "No (etc.)"],
      correctIndex: 1,
      explanation:
        "Rule: Ending Sentences. If an abbreviation ending in a period (etc.) ends the sentence, do NOT add a second period."
    },

    // 171–180: Dialogue and Narrative Punctuation
    {
      question: "Which is the correct punctuation for a dialogue tag?",
      choices: ["'Stop', he said.", "'Stop,' he said."],
      correctIndex: 1,
      explanation:
        "Rule: Dialogue. The comma separating the quote from the speaker must be INSIDE the quotation marks."
    },
    {
      question: "Which sentence correctly uses an 'action tag'?",
      choices: ['"I\'m leaving," he walked out.', '"I\'m leaving." He walked out.'],
      correctIndex: 1,
      explanation:
        "Rule: Action vs Speech. 'He walked out' is an action, not a verb of speaking. Therefore, the quote gets a period, and the action starts a new sentence."
    },
    {
      question: "Which sentence correctly uses a 'speech tag'?",
      choices: ['"I\'m leaving," he said.', '"I\'m leaving." He said.'],
      correctIndex: 0,
      explanation:
        "Rule: Speech Tags. 'He said' identifies the speaker. Connect it to the quote with a comma."
    },
    {
      question: "How do you show interrupted speech?",
      choices: ['"I don\'t--" she started.', '"I don\'t..." she started.'],
      correctIndex: 0,
      explanation:
        "Rule: Interruption. An Em-dash (--) signifies an abrupt stop or interruption. Ellipses (...) signify trailing off."
    },
    {
      question: "How do you show a character trailing off in thought?",
      choices: ['"I don\'t know--"', '"I don\'t know..."'],
      correctIndex: 1,
      explanation:
        "Rule: Trailing Off. Use an ellipsis (...) when a speaker hesitates or lets their voice fade out."
    },
    {
      question: "How are internal thoughts often formatted?",
      choices: ["Italics (*What now?* he thought.)", "Quotes (\"What now?\" he thought.)"],
      correctIndex: 0,
      explanation:
        "Rule: Interior Monologue. Standard fiction style often uses Italics without quotes for direct thoughts."
    },
    {
      question: "Where does the exclamation point go in: \"Help!\" he screamed?",
      choices: ["Inside", "Outside"],
      correctIndex: 0,
      explanation:
        "Rule: Punctuation Logic. The scream belongs to the quote, so the exclamation point goes inside."
    },
    {
      question: "Punctuate this: Did he say \"Yes\"?",
      choices: ["Yes? (One mark outside)", "Yes\"? (Mark inside)"],
      correctIndex: 0,
      explanation:
        "Rule: Logic. The quote 'Yes' is not a question. The whole sentence IS. The question mark goes outside."
    },
    {
      question: "Punctuate this: He asked, \"Why?\"",
      choices: ["Why?\" (Mark inside)", "Why\"? (Mark outside)"],
      correctIndex: 0,
      explanation:
        "Rule: Logic. The quote itself is the question. The mark goes inside."
    },
    {
      question: "Punctuate: Did he ask \"Why?\"",
      choices: ["Why?\"?", "Why?\""],
      correctIndex: 1,
      explanation:
        "Rule: Double Punctuation. If the quote ends in a ? and the sentence ends in a ?, use only ONE mark (the one inside)."
    },

    // 181–190: Scientific/Mathematical Punctuation
    {
      question:
        "Which punctuation mark is used to express a ratio (e.g., 2 to 1)?",
      choices: ["Colon (:)", "Semicolon (;)"],
      correctIndex: 0,
      explanation:
        "Rule: Ratios. We use a colon to express a ratio between two numbers (2:1)."
    },
    {
      question:
        "In US English, which mark separates the hour from the minutes (12__30)?",
      choices: ["Colon (:)", "Period (.)"],
      correctIndex: 0,
      explanation:
        "Rule: Time Formats. US English uses a colon (12:30), whereas some European styles use a period (12.30)."
    },
    {
      question: "Which punctuation is used for decimals (e.g., 3__14)?",
      choices: ["Colon", "Period"],
      correctIndex: 1,
      explanation:
        "Rule: Decimals. We use a period (dot) to separate the whole number from the decimal fraction (3.14)."
    },
    {
      question:
        "What symbol is technically used to indicate a negative number?",
      choices: ["Hyphen", "En-dash", "Minus sign"],
      correctIndex: 2,
      explanation:
        "Rule: Mathematical Symbols. Technically, a 'minus sign' is distinct from a hyphen or dash, though keyboards often use the hyphen as a substitute."
    },
    {
      question: "What does the symbol '§' represent in legal documents?",
      choices: ["Paragraph", "Section"],
      correctIndex: 1,
      explanation:
        "Rule: Legal Symbols. The '§' symbol specifically denotes a 'Section' of a law or code."
    },
    {
      question: "What is the primary use of an asterisk (*) in texts?",
      choices: ["Footnote/Reference", "Emphasis"],
      correctIndex: 0,
      explanation:
        "Rule: Reference Marks. An asterisk usually signals the reader to look at the bottom of the page for a footnote."
    },
    {
      question: "Which spacing is correct for percentages?",
      choices: ["100% (No space)", "100 % (With space)"],
      correctIndex: 0,
      explanation:
        "Rule: Spacing. There should be NO space between the number and the percent sign."
    },
    {
      question: "Where is the degree symbol (°) placed relative to the number?",
      choices: ["Immediately after (90°)", "With a space (90 °)"],
      correctIndex: 0,
      explanation:
        "Rule: Degrees. The symbol follows the number immediately without a space."
    },
    {
      question:
        "In English, where is the currency symbol ($) placed relative to the amount?",
      choices: ["Before the number ($100)", "After the number (100$)"],
      correctIndex: 0,
      explanation:
        "Rule: Currency Formatting. Although we say 'one hundred dollars', we write the symbol BEFORE the number to prevent fraud/alteration."
    },
    {
      question:
        "Which dash is used to show a range of numbers (e.g., 10 to 20)?",
      choices: ["En-dash (10–20)", "Hyphen (10-20)"],
      correctIndex: 0,
      explanation:
        "Rule: Ranges. The En-dash (–), which is slightly longer than a hyphen, is the correct punctuation for 'to' or 'through' in ranges."
    },

    // 191–200: Rare/Archaic Marks & Style
    {
      question: "What is the 'Interrobang' (‽)?",
      choices: ["A mark combining ? and !", "A mark for a long pause"],
      correctIndex: 0,
      explanation:
        "Rule: Non-Standard Punctuation. The interrobang is a non-standard mark used to show excited disbelief (What‽)."
    },
    {
      question:
        "Is the Oxford Comma mandatory in all English writing?",
      choices: ["Yes, always", "No, it depends on the Style Guide"],
      correctIndex: 1,
      explanation:
        "Rule: Style Guides. The Chicago Manual of Style requires it; the AP Stylebook (Journalism) usually forbids it. It is not a universal law, but a style choice."
    },
    {
      question: "How many spaces should generally follow a period in modern typing?",
      choices: ["One space", "Two spaces"],
      correctIndex: 0,
      explanation:
        "Rule: Typography. The old typewriter rule was two spaces. Modern digital fonts require only ONE space after a period."
    },
    {
      question: "How should bullet points be punctuated?",
      choices: ["Consistent punctuation", "Random punctuation"],
      correctIndex: 0,
      explanation:
        "Rule: Consistency. If bullets are full sentences, use periods. If they are fragments, generally use no punctuation. The key is to be consistent."
    },
    {
      question: "When is the Ampersand (&) acceptable in formal text?",
      choices: ["Anytime", "Only in titles or company names"],
      correctIndex: 1,
      explanation:
        "Rule: Formality. Avoid & in sentences. Use 'and'. Only use & if it is part of a formal name (e.g., Ben & Jerry's)."
    },
    {
      question: "What is the Vertical Bar (|) used for?",
      choices: ["Computing/Math", "Literature"],
      correctIndex: 0,
      explanation:
        "Rule: Symbols. The pipe (|) is used in logic, mathematics, and computing, rarely in standard prose."
    },
    {
      question: "What does the Tilde (~) mean before a number?",
      choices: ["Approximately", "Exactly"],
      correctIndex: 0,
      explanation:
        "Rule: Symbols. ~10 means 'approximately 10' or 'about 10'."
    },
    {
      question: "What is the Caret (^) used for in proofreading?",
      choices: ["To show where something should be inserted", "To delete a word"],
      correctIndex: 0,
      explanation:
        "Rule: Editing Marks. The caret indicates missing text that needs to be added."
    },
    {
      question: "What are 'Guillemets' (« »)?",
      choices: ["French/European quotation marks", "Mathematical brackets"],
      correctIndex: 0,
      explanation:
        "Rule: International Punctuation. These are the standard quotation marks in French, Spanish, and other languages."
    },
    {
      question: "What does the Pilcrow (¶) symbol represent?",
      choices: ["A paragraph break", "A copyright"],
      correctIndex: 0,
      explanation:
        "Rule: Typography. The pilcrow marks the start of a new paragraph in editing and legal texts."
    }
  ]
};

