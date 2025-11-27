// questions_punctuations.js - COMPLETE FIXED VERSION
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

window.VERBAL_QUESTION_BANK["punctuation"] = {
  beginner: [
    // 1–10: End Marks (Period, Question Mark, Exclamation Point)
    {
      question: "Which punctuation mark is used to end a simple statement of fact?",
      options: ["Period (.)", "Question Mark (?)", "Exclamation Point (!)", "Comma (,)"],
      answer: "Period (.)",
      explanation: "Rule: Declarative Sentences. A period is used to end a sentence that makes a statement or gives a mild command."
    },
    {
      question: "Which punctuation mark is required at the end of a direct question?",
      options: ["Period (.)", "Question Mark (?)", "Exclamation Point (!)", "Comma (,)"],
      answer: "Question Mark (?)",
      explanation: "Rule: Interrogative Sentences. Any sentence that asks a direct question must end with a question mark."
    },
    {
      question: "Which mark is used to express strong emotion, surprise, or shouting?",
      options: ["Period (.)", "Question Mark (?)", "Exclamation Point (!)", "Semicolon (;)"],
      answer: "Exclamation Point (!)",
      explanation: "Rule: Exclamatory Sentences. Use an exclamation point to show intensity, urgency, or strong feelings."
    },
    {
      question: "Choose the correct punctuation for this sentence: 'Where are you going__'",
      options: [".", "?", "!", ","],
      answer: "?",
      explanation: "Rule: Wh-Questions. The sentence starts with 'Where', indicating it is a question."
    },
    {
      question: "Choose the correct punctuation for this sentence: 'I love chocolate ice cream__'",
      options: [".", "?", ",", ";"],
      answer: ".",
      explanation: "Rule: Declarative Sentence. This is a statement of opinion, so it ends with a period."
    },
    {
      question: "Choose the correct punctuation for this warning: 'Watch out__'",
      options: [".", "?", "!", ","],
      answer: "!",
      explanation: "Rule: Urgency/Warning. Phrases shouted to warn someone require an exclamation point."
    },
    {
      question: "Choose the correct punctuation: 'My name is John__'",
      options: [".", "?", "!", ":"],
      answer: ".",
      explanation: "Rule: Statement. It simply states a fact, so it ends with a period."
    },
    {
      question: "Choose the correct punctuation: 'What time is it__'",
      options: [".", "?", "!", ","],
      answer: "?",
      explanation: "Rule: Question. It asks for information using 'What', so a question mark is needed."
    },
    {
      question: "Choose the correct punctuation for a command in anger: 'Stop that right now__'",
      options: [".", "?", "!", ","],
      answer: "!",
      explanation: "Rule: Strong Command. While commands can take periods, an angry or urgent command uses an exclamation point."
    },
    {
      question: "Choose the correct punctuation for a polite request: 'Please sit down__'",
      options: [".", "?", "!", ","],
      answer: ".",
      explanation: "Rule: Imperative Sentence. Polite commands or requests typically end with a period."
    },

    // 11–20: Basic Commas (Lists and Dates)
    {
      question: "Which sentence correctly uses commas to separate items in a list?",
      options: [
        "I bought apples, oranges and, bananas.",
        "I bought apples, oranges, and bananas.",
        "I bought, apples oranges and bananas.",
        "I bought apples oranges, and bananas."
      ],
      answer: "I bought apples, oranges, and bananas.",
      explanation: "Rule: Commas in a Series. Commas are placed after each item in a list. The comma before 'and' (Oxford Comma) is standard in formal writing."
    },
    {
      question: "Where should the comma be placed in this date: 'January 1 2020'?",
      options: ["January, 1 2020", "January 1, 2020", "January 1 2020,", "January 1, 2020,"],
      answer: "January 1, 2020",
      explanation: "Rule: Date Formatting. Use a comma to separate the day of the month (1) from the year (2020)."
    },
    {
      question: "Choose the sentence that correctly lists three colors.",
      options: [
        "Red, blue, and green",
        "Red, blue and, green",
        "Red blue, and green",
        "Red, blue, and, green"
      ],
      answer: "Red, blue, and green",
      explanation: "Rule: Series Comma. Use commas to separate distinct items: item 1, item 2, and item 3."
    },
    {
      question: "Which is the correct format for a city and state?",
      options: ["Miami Florida", "Miami, Florida", "Miami; Florida", "Miami. Florida"],
      answer: "Miami, Florida",
      explanation: "Rule: Geographical Names. Always use a comma to separate the city from the state (or country)."
    },
    {
      question: "Which sentence correctly lists multiple actions?",
      options: [
        "He ran, jumped, and swam.",
        "He ran jumped and swam.",
        "He ran, jumped and, swam.",
        "He ran jumped, and swam."
      ],
      answer: "He ran, jumped, and swam.",
      explanation: "Rule: Series of Verbs. Just like nouns, a list of actions (verbs) requires commas to separate them."
    },
    {
      question: "How should you punctuate 'Monday May 5'?",
      options: ["Monday, May 5", "Monday May, 5", "Monday, May, 5", "Monday May 5"],
      answer: "Monday, May 5",
      explanation: "Rule: Day and Date. Use a comma to separate the specific day of the week (Monday) from the calendar date (May 5)."
    },
    {
      question: "How should you punctuate 'Manila Philippines'?",
      options: ["Manila. Philippines", "Manila, Philippines", "Manila; Philippines", "Manila - Philippines"],
      answer: "Manila, Philippines",
      explanation: "Rule: Location. Use a comma to separate the specific city (Manila) from the larger region/country (Philippines)."
    },
    {
      question: "Which sentence correctly lists numbers?",
      options: ["One, two, three.", "One two, three.", "One, two three.", "One two three."],
      answer: "One, two, three.",
      explanation: "Rule: Lists. Even numbers in a list must be separated by commas."
    },
    {
      question: "Which sentence correctly uses the Oxford Comma?",
      options: [
        "I need a pen, a pencil, and a ruler.",
        "I need a pen a pencil, and a ruler.",
        "I need a pen, a pencil and a ruler.",
        "I need, a pen, a pencil, and a ruler."
      ],
      answer: "I need a pen, a pencil, and a ruler.",
      explanation: "Rule: Oxford Comma. This refers to the comma placed immediately before the conjunction 'and' in a list of three or more items."
    },
    {
      question: "How should you punctuate 'Paris France'?",
      options: ["Paris, France", "Paris France", "Paris; France", "Paris: France"],
      answer: "Paris, France",
      explanation: "Rule: Geographical Names. Use a comma between the city and the nation."
    },

    // 21–30: Apostrophes (Possession and Contractions)
    {
      question: "Which phrase correctly shows that the toy belongs to one cat?",
      options: ["The cats toy", "The cat's toy", "The cats' toy", "The cat is toy"],
      answer: "The cat's toy",
      explanation: "Rule: Singular Possession. To show possession for a singular noun (cat), add an apostrophe followed by 's' ('s)."
    },
    {
      question: "What is the correct contraction for 'do not'?",
      options: ["dont", "don't", "do'nt", "d'ont"],
      answer: "don't",
      explanation: "Rule: Contractions. The apostrophe replaces the letter 'o' that was removed from 'not'."
    },
    {
      question: "Which phrase correctly shows that the food belongs to many dogs?",
      options: ["The dog's food", "The dogs' food", "The dogs food", "The dogs's food"],
      answer: "The dogs' food",
      explanation: "Rule: Plural Possession. For plural nouns ending in 's' (dogs), add only the apostrophe at the end."
    },
    {
      question: "What is the correct contraction for 'it is'?",
      options: ["its", "it's", "its'", "i'ts"],
      answer: "it's",
      explanation: "Rule: Contractions vs Possessive. 'It's' is the contraction for 'It is'. 'Its' (no apostrophe) indicates possession."
    },
    {
      question: "Which phrase correctly shows possession for the name 'Tom'?",
      options: ["Tom's car", "Toms car", "Toms' car", "Tom is car"],
      answer: "Tom's car",
      explanation: "Rule: Singular Proper Noun. Since 'Tom' is one person, add 's to show ownership."
    },
    {
      question: "What is the correct contraction for 'we are'?",
      options: ["were", "we're", "w'ere", "we'r"],
      answer: "we're",
      explanation: "Rule: Contractions. The apostrophe replaces the letter 'a' in 'are'."
    },
    {
      question: "Which is the correct possessive form for 'the bag of the girl'?",
      options: ["The girls bag", "The girl's bag", "The girls' bag", "The girl bag"],
      answer: "The girl's bag",
      explanation: "Rule: Singular Possession. One girl owning something requires 's."
    },
    {
      question: "What is the correct contraction for 'cannot'?",
      options: ["can't", "cann't", "ca'nt", "cant"],
      answer: "can't",
      explanation: "Rule: Contractions. The apostrophe replaces the letters 'no' in 'not'."
    },
    {
      question: "What is the correct possessive form of 'children' (plural)?",
      options: ["Childrens'", "Children's", "Childrens", "Childrens's"],
      answer: "Children's",
      explanation: "Rule: Irregular Plural Possession. If a plural noun does not end in 's' (children), you must add 's."
    },
    {
      question: "What does the word 'They're' mean?",
      options: ["Their", "There", "They are", "They were"],
      answer: "They are",
      explanation: "Rule: Contractions. The apostrophe takes the place of 'a', shortening 'They are'."
    },

    // 31–40: Capitalization (Basic Punctuation Rule)
    {
      question: "Which word in this list must always be capitalized?",
      options: ["cat", "house", "monday", "blue"],
      answer: "monday",
      explanation: "Rule: Proper Nouns. Days of the week (Monday, Tuesday) are proper nouns and require capitalization."
    },
    {
      question: "Which sentence is capitalized correctly?",
      options: ["i like dogs.", "I like dogs.", "I like Dogs.", "i Like Dogs."],
      answer: "I like dogs.",
      explanation: "Rule: Sentence Starters. Always capitalize the first word of a sentence and the pronoun 'I'."
    },
    {
      question: "Which month is written correctly?",
      options: ["january", "January", "jAnuary", "JANUARY (in formal text)"],
      answer: "January",
      explanation: "Rule: Proper Nouns. Months of the year must always start with a capital letter."
    },
    {
      question: "Which of these location words needs a capital letter?",
      options: ["city", "paris", "town", "village"],
      answer: "paris",
      explanation: "Rule: Proper Nouns. 'Paris' is the specific name of a city, whereas 'city' is a common noun."
    },
    {
      question: "Which title is written correctly?",
      options: ["Mr. Smith", "mr. Smith", "Mr. smith", "mr smith"],
      answer: "Mr. Smith",
      explanation: "Rule: Titles. Honorifics (Mr., Mrs., Dr.) and surnames must be capitalized."
    },
    {
      question: "Which religious text is written correctly in the middle of a sentence?",
      options: ["The Bible", "the bible", "The bible", "the Bible"],
      answer: "the Bible",
      explanation: "Rule: Sacred Texts. Capitalize the name 'Bible' but not the article 'the' when it is in the middle of a sentence."
    },
    {
      question: "Should the word 'english' be capitalized?",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: "Rule: Languages and Nationalities. English, Filipino, Spanish, etc., are proper adjectives/nouns and must be capitalized."
    },
    {
      question: "Which sentence uses 'Dad' correctly?",
      options: ["My Dad is home.", "my dad is home.", "My dad is home.", "My Dad Is Home."],
      answer: "My dad is home.",
      explanation: "Rule: Family Titles. Do NOT capitalize 'dad' or 'mom' if they follow a possessive pronoun like 'my' or 'your'. Only capitalize them if used as a name (e.g., 'Hi, Dad!')."
    },
    {
      question: "Which name is capitalized correctly?",
      options: ["Harry Potter", "Harry potter", "harry Potter", "harry potter"],
      answer: "Harry Potter",
      explanation: "Rule: Proper Names. Both the first name and the last name must be capitalized."
    },
    {
      question: "Should seasons like 'summer' be capitalized?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "Rule: Seasons. Unlike days and months, seasons (spring, summer, fall, winter) are generally NOT capitalized unless part of a specific title."
    },

    // 41–50: Basic Quotation Marks
    {
      question: "Which sentence correctly shows someone speaking?",
      options: [
        "He said, I am happy.",
        "He said 'I am happy.'",
        "He said, \"I am happy.\"",
        "He said (I am happy)."
      ],
      answer: "He said, \"I am happy.\"",
      explanation: "Rule: Direct Speech. Use double quotation marks to enclose the exact words spoken by a person."
    },
    {
      question: "How should you punctuate: She said Hello",
      options: [
        "She said \"Hello.\"",
        "She said, \"Hello.\"",
        "She said Hello.",
        "She said 'Hello'."
      ],
      answer: "She said, \"Hello.\"",
      explanation: "Rule: Dialogue Punctuation. Use a comma to separate the speaker tag ('She said') from the quote, and capitalize the first letter of the quote."
    },
    {
      question: "Where do quotation marks go for a phrase?",
      options: ["\"The end\"", "The \"end\"", "The end\"", "\"The end"],
      answer: "\"The end\"",
      explanation: "Rule: Enclosing. Quotation marks must appear at the beginning AND at the end of the quoted phrase."
    },
    {
      question: "Which sentence is punctuated correctly?",
      options: [
        "\"Stop,\" he yelled.",
        "\"Stop\", he yelled.",
        "Stop, he yelled.",
        "Stop\" he yelled."
      ],
      answer: "\"Stop,\" he yelled.",
      explanation: "Rule: Punctuation Inside Quotes. In dialogue, the comma separating the quote from the speaker tag goes INSIDE the closing quotation mark."
    },
    {
      question: "Which is the correct way to write the title of a short story?",
      options: ["The Lottery", "\"The Lottery\"", "The Lottery (italics)", "THE LOTTERY"],
      answer: "\"The Lottery\"",
      explanation: "Rule: Titles of Short Works. Short stories, songs, poems, and articles are placed in quotation marks. Long works (books, movies) are italicized."
    },
    {
      question: "Which is correct if the quote is a question?",
      options: [
        "He asked, \"Why?\"",
        "He asked \"Why\"?",
        "He asked, \"Why\"?",
        "He asked \"Why.\""
      ],
      answer: "He asked, \"Why?\"",
      explanation: "Rule: Question Mark Placement. If the quoted text itself is a question, the question mark goes INSIDE the quotation marks."
    },
    {
      question: "Is this correct? \"I love you.\" said John.",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "Rule: Commas in Dialogue. It should be: \"I love you,\" said John. Use a comma, not a period, if the sentence continues with a speaker tag."
    },
    {
      question: "Correct punctuation: \"Run!\" she screamed.",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Exclamation Points in Dialogue. An exclamation point goes inside the quotes. Unlike a period, you do NOT need to change it to a comma before the speaker tag."
    },
    {
      question: "When discussing a specific word, how should it be written?",
      options: [
        "The word necessary is hard.",
        "The word \"necessary\" is hard.",
        "The word Necessary is hard.",
        "The word 'necessary' is hard."
      ],
      answer: "The word \"necessary\" is hard.",
      explanation: "Rule: Mentioning Words. Use quotation marks (or italics) when referring to a word as a word itself, rather than for its meaning."
    },
    {
      question: "Which symbols can be used as double quotation marks in English text?",
      options: ['"', "”", "Both A and B", "'"],
      answer: "Both A and B",
      explanation: "Rule: Typography. Both straight quotes (\") and curly quotes (”) are accepted as double quotation marks in English."
    }
  ],

  intermediate: [
    // 51–60: Commas (Compound Sentences & Intros)
    {
      question: "Which sentence correctly joins two independent clauses?",
      options: [
        "I like tea but I like coffee.",
        "I like tea, but I like coffee.",
        "I like tea but, I like coffee.",
        "I like tea, but, I like coffee."
      ],
      answer: "I like tea, but I like coffee.",
      explanation: "Rule: Compound Sentences. Use a comma before a coordinating conjunction (FANBOYS, like 'but') when it connects two complete sentences."
    },
    {
      question: "Where should the comma go in: 'However I did not go.'?",
      options: [
        "However I did not go.",
        "However, I did not go.",
        "However; I did not go.",
        "However: I did not go."
      ],
      answer: "However, I did not go.",
      explanation: "Rule: Introductory Transitions. Use a comma after transitional words (However, Therefore, Furthermore) at the start of a sentence."
    },
    {
      question: "How should you punctuate: 'When he arrived we left.'?",
      options: [
        "When he arrived we left.",
        "When he arrived, we left.",
        "When he arrived; we left.",
        "When, he arrived we left."
      ],
      answer: "When he arrived, we left.",
      explanation: "Rule: Introductory Dependent Clause. If a sentence starts with a subordinating conjunction (When, If, Because), place a comma after the dependent clause."
    },
    {
      question: "Which sentence requires a comma?",
      options: ["I ran fast and won.", "I ran fast and I won."],
      answer: "I ran fast and I won.",
      explanation: "Rule: Compound vs Compound Predicate. Sentence B has two subjects ('I' ran, 'I' won) so it needs a comma. Sentence A has one subject doing two things, so no comma is needed."
    },
    {
      question: "How do you punctuate a 'Yes' or 'No' answer?",
      options: [
        "Yes I will come.",
        "Yes, I will come.",
        "Yes; I will come.",
        "Yes: I will come."
      ],
      answer: "Yes, I will come.",
      explanation: "Rule: Introductory Words. Always place a comma after 'Yes' or 'No' at the beginning of a sentence."
    },
    {
      question: "Where does the comma go in: 'In the morning I run.'?",
      options: [
        "In the morning I run.",
        "In the morning, I run.",
        "In the morning; I run.",
        "In, the morning I run."
      ],
      answer: "In the morning, I run.",
      explanation: "Rule: Introductory Prepositional Phrase. A comma is generally used after a long introductory phrase to indicate a pause."
    },
    {
      question: "Which sentence correctly uses 'so'?",
      options: [
        "She was tired so, she slept.",
        "She was tired, so she slept.",
        "She was tired so she slept.",
        "She was tired; so she slept."
      ],
      answer: "She was tired, so she slept.",
      explanation: "Rule: FANBOYS Punctuation. The comma must go BEFORE the conjunction 'so', not after it."
    },
    {
      question: "Which sentence correctly uses 'because' at the start?",
      options: [
        "Because it rained we stayed home.",
        "Because it rained, we stayed home.",
        "Because, it rained we stayed home.",
        "Because it rained; we stayed home."
      ],
      answer: "Because it rained, we stayed home.",
      explanation: "Rule: Dependent Clause First. When 'Because' starts the sentence, use a comma to separate the cause from the result."
    },
    {
      question: "Which sentence correctly uses 'because' in the middle?",
      options: [
        "We stayed home because it rained.",
        "We stayed home, because it rained."
      ],
      answer: "We stayed home because it rained.",
      explanation: "Rule: Main Clause First. When the independent clause comes first, you generally do NOT use a comma before 'because'."
    },
    {
      question: "How do you punctuate 'Well I guess so.'?",
      options: [
        "Well, I guess so.",
        "Well I guess so.",
        "Well; I guess so.",
        "Well. I guess so."
      ],
      answer: "Well, I guess so.",
      explanation: "Rule: Introductory Interjections. Use a comma after mild interjections like 'Well', 'Oh', or 'Hey' at the start of a sentence."
    },

    // 61–70: Commas (Direct Address & Interrupters)
    {
      question: "Which sentence correctly addresses someone named John?",
      options: ["John come here.", "John, come here.", "John; come here.", "John. Come here."],
      answer: "John, come here.",
      explanation: "Rule: Direct Address. Always use a comma to separate the name of the person you are speaking to from the rest of the sentence."
    },
    {
      question: "Where do the commas go in: 'I know Sarah that you are right.'?",
      options: [
        "I know Sarah, that you are right.",
        "I know, Sarah, that you are right.",
        "I know Sarah that, you are right.",
        "I know, Sarah that you are right."
      ],
      answer: "I know, Sarah, that you are right.",
      explanation: "Rule: Direct Address in the Middle. If the name is in the middle of the sentence, use commas on BOTH sides of the name."
    },
    {
      question: "Why is the comma important in 'Let's eat, Grandma!'?",
      options: ["It is not important.", "Without it, you are eating Grandma."],
      answer: "Without it, you are eating Grandma.",
      explanation: "Rule: Clarity/Direct Address. Without the comma, 'Grandma' becomes the direct object (the food). With the comma, you are inviting Grandma to eat."
    },
    {
      question: "Is this punctuated correctly? 'This book, I believe, is yours.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Interrupters/Parenthetical Expressions. Phrases like 'I believe', 'however', or 'of course' that interrupt the flow should be set off by commas."
    },
    {
      question: "Which sentence correctly uses 'however' in the middle?",
      options: [
        "He is, however, not coming.",
        "He is however, not coming.",
        "He is, however not coming.",
        "He is however not coming."
      ],
      answer: "He is, however, not coming.",
      explanation: "Rule: Interrupters. When 'however' interrupts a single clause, place commas before and after it."
    },
    {
      question: "How do you punctuate 'No sir I didn't.'?",
      options: [
        "No sir I didn't.",
        "No, sir, I didn't.",
        "No sir, I didn't.",
        "No, sir I didn't."
      ],
      answer: "No, sir, I didn't.",
      explanation: "Rule: Combined Rules. Comma after 'No' (Introductory word) AND comma after 'sir' (Direct Address)."
    },
    {
      question: "Which sentence correctly uses commas for a non-essential clause?",
      options: [
        "My brother who is a doctor, lives here.",
        "My brother, who is a doctor, lives here.",
        "My brother who, is a doctor lives here.",
        "My brother, who is a doctor lives here."
      ],
      answer: "My brother, who is a doctor, lives here.",
      explanation: "Rule: Non-Restrictive Clauses. If the phrase 'who is a doctor' is just extra information (you already know which brother), enclose it in commas."
    },
    {
      question: "Which sentence correctly implies there is only one movie named Titanic?",
      options: ["The movie, Titanic, is sad.", "The movie Titanic is sad."],
      answer: "The movie Titanic is sad.",
      explanation: "Rule: Essential (Restrictive) Appositive. Since there are many movies, the name 'Titanic' is essential to identify which one. Do NOT use commas for essential information."
    },
    {
      question: "How do you punctuate 'Edison the inventor was smart.'?",
      options: ["Edison, the inventor, was smart.", "Edison the inventor was smart."],
      answer: "Edison, the inventor, was smart.",
      explanation: "Rule: Non-Essential Appositive. 'The inventor' just renames Edison. Since Edison is a specific person, the description is extra, so use commas."
    },
    {
      question: "Is this correct? 'You are, of course, invited.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Parenthetical Expression. 'Of course' is a side comment interrupting the sentence, so commas are required."
    },

    // 71–80: Semicolons and Colons
    {
      question: "What is the primary function of a semicolon (;)?",
      options: [
        "To end a sentence",
        "To join two independent clauses without a conjunction",
        "To introduce a list",
        "To show possession"
      ],
      answer: "To join two independent clauses without a conjunction",
      explanation: "Rule: Semicolon Usage. It connects two closely related sentences that are not joined by a coordinating conjunction (and, but, etc.)."
    },
    {
      question: "Is this sentence correct? 'I love ice cream; it is cold.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Semicolon Usage. Both 'I love ice cream' and 'it is cold' are complete sentences. The semicolon correctly joins them."
    },
    {
      question: "Is this sentence correct? 'I bought: apples, bananas, and pears.'",
      options: ["Correct", "Incorrect"],
      answer: "Incorrect",
      explanation: "Rule: Colon Misusage. Do NOT use a colon after a verb (bought) or preposition. The sentence should flow naturally without the colon."
    },
    {
      question: "Is this sentence correct? 'I need three things: pen, paper, and ink.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Colon Usage. Use a colon after a complete independent clause ('I need three things') to introduce a list."
    },
    {
      question: "Which mark fits best? 'It rained hard ____ we stayed inside.'",
      options: [",", ";", ":", "!"],
      answer: ";",
      explanation: "Rule: Joining Clauses. Since there is no conjunction (like 'so'), a comma would be a splice. A semicolon is the correct choice to join the clauses."
    },
    {
      question: "Is this sentence correct? 'He has one goal: to win.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Colon for Emphasis. A colon can be used to emphasize or define a word or phrase at the end of a sentence."
    },
    {
      question: "How should you punctuate the salutation in a formal business letter?",
      options: ["Dear Sir:", "Dear Sir,", "Dear Sir;", "Dear Sir."],
      answer: "Dear Sir:",
      explanation: "Rule: Business Letter Format. A colon is used after the salutation (greeting) in formal business correspondence."
    },
    {
      question: "Should you use a semicolon or a comma here? 'I went home, and I slept.'",
      options: ["Semicolon", "Comma"],
      answer: "Comma",
      explanation: "Rule: Comma with Conjunction. Since the word 'and' is present, use a comma. Use a semicolon only if you remove 'and'."
    },
    {
      question: "Which word often follows a semicolon? 'I studied hard; ____ I passed.'",
      options: ["therefore", "because", "but", "so"],
      answer: "therefore",
      explanation: "Rule: Conjunctive Adverbs. Words like 'therefore', 'however', and 'consequently' often follow a semicolon to transition between clauses."
    },
    {
      question: "Is this sentence correct? 'The train was late; we missed the show.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Semicolon Logic. The two clauses are closely related (cause and effect), making the semicolon an appropriate connector."
    },

    // 81–90: Hyphens and Dashes
    {
      question: "Which punctuation mark connects two words to create a single adjective (e.g., well-known)?",
      options: ["Hyphen (-)", "Dash (—)", "Comma (,)", "Colon (:)"],
      answer: "Hyphen (-)",
      explanation: "Rule: Hyphens. A hyphen is a short line used to join words together to function as one unit."
    },
    {
      question: "Which sentence is punctuated correctly?",
      options: [
        "He is a well known actor.",
        "He is a well-known actor.",
        "He is a well—known actor.",
        "He is a well, known actor."
      ],
      answer: "He is a well-known actor.",
      explanation: "Rule: Compound Modifiers. Use a hyphen when two words act as a single adjective before a noun."
    },
    {
      question: "Which mark indicates a sudden break or interruption in thought?",
      options: ["Hyphen", "Dash (Em-dash)", "Period", "Comma"],
      answer: "Dash (Em-dash)",
      explanation: "Rule: Em-dash. The long dash (—) is used to show a strong break, interruption, or emphasis in a sentence."
    },
    {
      question: "How do you write the number 21 in words?",
      options: ["Twenty one", "Twenty-one", "Twentyone", "Twenty–one"],
      answer: "Twenty-one",
      explanation: "Rule: Numbers. Hyphenate all compound numbers from twenty-one to ninety-nine."
    },
    {
      question: "Which prefix usage is correct?",
      options: ["ex wife", "ex-wife", "exwife", "ex—wife"],
      answer: "ex-wife",
      explanation: "Rule: Hyphens with Prefixes. The prefixes 'ex-', 'self-', and 'all-' always require a hyphen."
    },
    {
      question: "Is this correct? 'The book—which I lost—was found.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Em-dashes for Emphasis. Dashes can be used like parentheses to set off extra information with more emphasis."
    },
    {
      question: "Would you use a hyphen or a dash in 'A long-term plan'?",
      options: ["Hyphen", "Dash"],
      answer: "Hyphen",
      explanation: "Rule: Compound Adjective. 'Long-term' describes the plan, so it uses a hyphen."
    },
    {
      question: "Is this correct? 'Everything I own—books, clothes, car—is gone.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Em-dashes for Lists. Dashes can set off a list inserted in the middle of a sentence for emphasis/clarity."
    },
    {
      question: "Which is the correct spelling?",
      options: ["Self esteem", "Self-esteem"],
      answer: "Self-esteem",
      explanation: "Rule: Prefix 'Self-'. Words starting with 'self-' (except selfish/selfless) are hyphenated."
    },
    {
      question: "Which is the correct compound adjective?",
      options: [
        "3 year old child",
        "3-year-old child",
        "3-year old child",
        "3 year-old child"
      ],
      answer: "3-year-old child",
      explanation: "Rule: Multi-word Compounds. When a phrase like '3 years old' comes before a noun, hyphenate the entire phrase."
    },

    // 91–100: Parentheses and Brackets
    {
      question: "Which marks are used to enclose non-essential or side information?",
      options: ["Parentheses ( )", "Brackets [ ]", "Braces { }", "Slashes / /"],
      answer: "Parentheses ( )",
      explanation: "Rule: Parentheses. They are used to add extra details that could be removed without changing the sentence's basic meaning."
    },
    {
      question: "Is this usage correct? 'He (John) is here.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Clarification. Parentheses can be used to clarify a pronoun or add a specific name."
    },
    {
      question: "Which marks are used to insert your own words into a direct quote?",
      options: ["Parentheses ( )", "Brackets [ ]", "Braces { }", "Slashes / /"],
      answer: "Brackets [ ]",
      explanation: "Rule: Brackets. Use square brackets [ ] to clarify or change a word inside a quotation so it fits your sentence grammatically."
    },
    {
      question: "Where does the period go in this sentence: 'I saw him (yesterday)'?",
      options: [
        "...him (yesterday).",
        "...him (yesterday.)",
        "...him .(yesterday)",
        "...him (yesterday)"
      ],
      answer: "...him (yesterday).",
      explanation: "Rule: Parentheses within a sentence. If the parenthetical content is part of a larger sentence, the period goes OUTSIDE the closing parenthesis."
    },
    {
      question: "Is this correct? 'He said, \"It [the car] is broken.\"'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Brackets in Quotes. This shows that the writer added '[the car]' to explain what 'It' referred to in the original quote."
    },
    {
      question: "Which creates a stronger interruption: Parentheses or Commas?",
      options: ["Parentheses", "Commas"],
      answer: "Parentheses",
      explanation: "Rule: Degrees of Separation. Commas are the weakest, parentheses are stronger, and dashes are the strongest/most emphatic."
    },
    {
      question: "Is this usage correct? 'The meeting (held on Zoom) was long.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Parenthetical Information. It provides extra detail about the meeting location."
    },
    {
      question: "Where does the period go if a full sentence is inside parentheses?",
      options: ["(He didn't know.)", "(He didn't know)."],
      answer: "(He didn't know.)",
      explanation: "Rule: Full Parenthetical Sentence. If the parentheses contain a complete sentence that stands alone, the period goes INSIDE."
    },
    {
      question: "Identify the symbol for Parentheses:",
      options: ["( )", "[ ]", "{ }"],
      answer: "( )",
      explanation: "Rule: Identification. Round brackets are called parentheses."
    },
    {
      question: "Identify the symbol for Brackets:",
      options: ["( )", "[ ]", "{ }"],
      answer: "[ ]",
      explanation: "Rule: Identification. Square brackets are simply called brackets."
    }
  ],

  advanced: [
    // 101–110: Advanced Commas (Adjectives and Clarity)
    {
      question: "Which sentence is punctuated correctly?",
      options: [
        "A tall dark, stranger.",
        "A tall, dark stranger.",
        "A tall, dark, stranger.",
        "A tall dark stranger."
      ],
      answer: "A tall, dark stranger.",
      explanation: "Rule: Coordinate Adjectives. 'Tall' and 'dark' are equal in importance. If you can say 'tall AND dark', you need a comma between them."
    },
    {
      question: "Which sentence is punctuated correctly?",
      options: ["A shiny, red car.", "A shiny red car."],
      answer: "A shiny red car.",
      explanation: "Rule: Cumulative Adjectives. You cannot say 'shiny AND red car' naturally because 'red' is closely linked to 'car'. No comma is used."
    },
    {
      question: "Why is the comma necessary in 'For Mary, Jane is a friend.'?",
      options: ["To separate names", "To correct grammar"],
      answer: "To separate names",
      explanation: "Rule: Clarity. Without the comma ('For Mary Jane is a friend'), the reader might think the person's name is 'Mary Jane'."
    },
    {
      question: "How should you punctuate 'Whatever you do do it well.'?",
      options: [
        "Whatever you do do it well.",
        "Whatever you do, do it well."
      ],
      answer: "Whatever you do, do it well.",
      explanation: "Rule: Clarity/Repetitive Words. Use a comma to separate repetitive words like 'do do' to prevent confusion."
    },
    {
      question: "Is this correct? 'The problems are, I think, solvable.'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Interrupters. The phrase 'I think' interrupts the flow of the sentence and requires commas."
    },
    {
      question: "Should there be a comma in 'The expensive, beautiful dress'?",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: "Rule: Coordinate Adjectives. 'Expensive' and 'beautiful' are both opinions. They are coordinate, so a comma is needed."
    },
    {
      question: "Should there be a comma in 'Five little ducks'?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "Rule: Cumulative Adjectives. Number (Five) and Size (little) are different categories. No comma is needed."
    },
    {
      question: "How do you use 'etc.' in a list?",
      options: ["Apples, pears, etc.", "Apples, pears etc."],
      answer: "Apples, pears, etc.",
      explanation: "Rule: Etc. Always place a comma before 'etc.' when it is the final item in a list."
    },
    {
      question: "Is this correct? 'He asked, \"Why?\"'",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Introducing Quotes. Use a comma after verbs like 'asked' or 'said' before the quotation marks."
    },
    {
      question: "Where do the commas go in 'The ending unfortunately was sad.'?",
      options: [
        "The ending unfortunately was sad.",
        "The ending, unfortunately, was sad."
      ],
      answer: "The ending, unfortunately, was sad.",
      explanation: "Rule: Adverbial Interrupters. Words like 'unfortunately' appearing in the middle of a sentence need commas."
    },

    // 111–120: Advanced Apostrophes
    {
      question: "What is the possessive form of the name 'James'?",
      options: ["James's", "James'", "Jameses", "Both A and B are accepted"],
      answer: "Both A and B are accepted",
      explanation: "Rule: Singular Noun ending in 's'. Style guides differ. Academic styles (like Oxford) prefer 'James's'. Journalistic styles (AP) prefer 'James''. Both are technically correct in English."
    },
    {
      question: "What is the possessive form of 'Boss'?",
      options: ["Boss'", "Boss's"],
      answer: "Boss's",
      explanation: "Rule: Singular Noun ending in 's'. Use 's. Example: The Boss's office."
    },
    {
      question: "How do you show that Tom and Jerry own the same house?",
      options: ["Tom's and Jerry's house", "Tom and Jerry's house"],
      answer: "Tom and Jerry's house",
      explanation: "Rule: Joint Possession. If two people own one thing together, add 's ONLY to the last name."
    },
    {
      question: "How do you show that Tom and Jerry own separate houses?",
      options: ["Tom and Jerry's houses", "Tom's and Jerry's houses"],
      answer: "Tom's and Jerry's houses",
      explanation: "Rule: Separate Possession. If they each own a house, add 's to BOTH names."
    },
    {
      question: "How do you write the plural of 1990 (the decade)?",
      options: ["1990's", "1990s"],
      answer: "1990s",
      explanation: "Rule: Plural Numbers. Modern standard guides (APA, Chicago) state that you should NOT use an apostrophe for plurals of years. Apostrophes denote possession."
    },
    {
      question: "What is the possessive form of 'Mother-in-law'?",
      options: ["Mother's-in-law", "Mother-in-law's"],
      answer: "Mother-in-law's",
      explanation: "Rule: Compound Nouns. Always add the 's to the very END of the compound word."
    },
    {
      question: "How do you write the plural of the letter 'A'?",
      options: ["As", "A's"],
      answer: "A's",
      explanation: "Rule: Plural Letters. Use an apostrophe to prevent confusion (so it doesn't look like the word 'As')."
    },
    {
      question: "What is the possessive of 'Everyone'?",
      options: ["Everyones", "Everyone's"],
      answer: "Everyone's",
      explanation: "Rule: Indefinite Pronouns. Treat 'Everyone' as a singular noun. Add 's."
    },
    {
      question: "Which is correct: 'Two weeks notice' or 'Two weeks' notice'?",
      options: [
        "Two weeks notice",
        "Two weeks' notice",
        "Two week's notice"
      ],
      answer: "Two weeks' notice",
      explanation: "Rule: Possession of Time/Measure. The notice 'belongs' to the two weeks. Since 'weeks' is plural, add the apostrophe after the 's'."
    },
    {
      question: "Which is the correct idiom: 'For goodness' sake'?",
      options: ["goodness's", "goodness'"],
      answer: "goodness'",
      explanation: "Rule: Idiomatic Exception. Words ending in an 's' sound (like goodness, conscience) often take only the apostrophe in 'for ... sake' phrases."
    },

    // 121–130: Advanced Quotation Marks
    {
      question: "How do you handle a quote inside another quote?",
      options: ['"He said \'Stop\'"', 'He said "Stop"', '\'He said "Stop"\''],
      answer: '"He said \'Stop\'"',
      explanation: "Rule: Nested Quotes. Use single quotation marks (' ') for a quote inside double quotation marks (\" \")."
    },
    {
      question: "How do you punctuate: \"Did he say 'Hello'\"?",
      options: ['"Did he say \'Hello\'?"', '"Did he say \'Hello?\'"'],
      answer: '"Did he say \'Hello\'?"',
      explanation: "Rule: Question Mark Placement. The main sentence is the question ('Did he say...?'). The quoted word 'Hello' is not a question. Therefore, the question mark goes OUTSIDE the single quote but inside the double quote (if applicable) or at the end."
    },
    {
      question: "In American English, where do periods and commas go relative to quotation marks?",
      options: ["Inside", "Outside"],
      answer: "Inside",
      explanation: "Rule: American Style. Periods and commas ALWAYS go INSIDE the closing quotation marks."
    },
    {
      question: "Choose the correct American punctuation:",
      options: ['"I am home,"', '"I am home",'],
      answer: '"I am home,"',
      explanation: "Rule: Comma Placement. The comma goes inside the quote."
    },
    {
      question: "Where do semicolons go relative to quotation marks?",
      options: ["Inside", "Outside"],
      answer: "Outside",
      explanation: "Rule: Semicolons and Colons. These marks always go OUTSIDE the closing quotation marks."
    },
    {
      question: "What do quotation marks around a single word imply? (e.g., He is a \"genius\".)",
      options: ["Emphasis", "Irony/Sarcasm"],
      answer: "Irony/Sarcasm",
      explanation: "Rule: Scare Quotes. Using quotes around a word often implies irony, sarcasm, or that the writer does not agree with the term."
    },
    {
      question: "How do you quote a sentence fragment in American English?",
      options: ['He said he was "tired."', 'He said he was "tired".'],
      answer: 'He said he was "tired."',
      explanation: "Rule: Period Placement. Even if the quote is just a word or fragment, the period still goes INSIDE in American English."
    },
    {
      question: "Which punctuation introduces a long, formal quote?",
      options: ["Comma (,)", "Colon (:)"],
      answer: "Colon (:)",
      explanation: "Rule: Block Quotes/Formal Quotes. Use a colon to introduce a long quotation or one that follows a complete independent clause."
    },
    {
      question: "How should a book title be formatted?",
      options: ['"Harry Potter"', "Italics: Harry Potter"],
      answer: "Italics: Harry Potter",
      explanation: "Rule: Titles of Large Works. Books, movies, and albums are Italicized. Chapters and songs use Quotes."
    },
    {
      question: "How should a song title be formatted?",
      options: ['"Imagine"', "Italics: Imagine"],
      answer: '"Imagine"',
      explanation: "Rule: Titles of Small Works. Songs, poems, and articles use Quotation Marks."
    },

    // 131–140: Advanced Dashes and Hyphens
    {
      question: "Which example shows a 'suspended hyphen'?",
      options: ["Pre- and post-war", "Pre and post-war"],
      answer: "Pre- and post-war",
      explanation: "Rule: Suspended Hyphen. When two compound words share a base (pre-war and post-war), you can delete the first 'war' but keep the hyphen (Pre-)."
    },
    {
      question: "Why use a hyphen in 'Re-creation' (making again)?",
      options: ["To look good", "To distinguish from 'Recreation' (fun)"],
      answer: "To distinguish from 'Recreation' (fun)",
      explanation: "Rule: Clarification. A hyphen is used to avoid confusion with a word that is spelled the same but has a different meaning."
    },
    {
      question: "Should you hyphenate 'highly skilled man'?",
      options: ["Yes (highly-skilled)", "No (highly skilled)"],
      answer: "No (highly skilled)",
      explanation: "Rule: Adverbs ending in -ly. Never put a hyphen between an -ly adverb and the adjective it modifies."
    },
    {
      question: "What is the difference between a Hyphen and an Em-dash?",
      options: ["Hyphen connects words; Em-dash separates phrases", "They are the same"],
      answer: "Hyphen connects words; Em-dash separates phrases",
      explanation: "Rule: Usage. Hyphens (-) join words (e.g., self-made). Em-dashes (—) act like strong commas or parentheses to show a break in thought."
    },
    {
      question: "What is the En-dash used for?",
      options: ["Compound words", "Ranges of numbers (1990–2000)"],
      answer: "Ranges of numbers (1990–2000)",
      explanation: "Rule: En-dash. The En-dash (slightly longer than a hyphen) means 'to' or 'through' when connecting numbers or dates."
    },
    {
      question: "Hyphenate: 'State of the art technology'",
      options: ["State-of-the-art", "State of the art"],
      answer: "State-of-the-art",
      explanation: "Rule: Compound Adjective. When a phrase acts as a single adjective BEFORE a noun, hyphenate it."
    },
    {
      question: "Hyphenate: 'The technology is state of the art.'",
      options: ["State-of-the-art", "State of the art"],
      answer: "State of the art",
      explanation: "Rule: Predicate Adjective. Do not hyphenate compound adjectives when they come AFTER the noun."
    },
    {
      question: "How should you write 'Anti-American'?",
      options: ["AntiAmerican", "Anti-American"],
      answer: "Anti-American",
      explanation: "Rule: Prefixes with Proper Nouns. Always use a hyphen when a prefix is attached to a capitalized proper noun."
    },
    {
      question: "Which spelling is preferred today: 'Co-operate' or 'Cooperate'?",
      options: ["Co-operate", "Cooperate"],
      answer: "Cooperate",
      explanation: "Rule: Evolution of Language. Many words that used to be hyphenated (co-operate, e-mail) are now standard closed words (cooperate, email)."
    },
    {
      question: "Is 'Twenty-one' correct?",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: "Rule: Numbers. All compound numbers from 21 to 99 must be hyphenated."
    },

    // 141–150: Ellipses and Slashes
    {
      question: "What is the primary use of an ellipsis (...)?",
      options: ["To show excitement", "To indicate omitted words in a quote"],
      answer: "To indicate omitted words in a quote",
      explanation: "Rule: Omission. An ellipsis shows that parts of a quotation have been removed for brevity."
    },
    {
      question: "How many dots should appear in a standard ellipsis?",
      options: ["2", "3", "4"],
      answer: "3",
      explanation: "Rule: Formatting. A standard ellipsis consists of exactly three dots."
    },
    {
      question: "How do you format an ellipsis at the end of a sentence?",
      options: ["word... .", "word...."],
      answer: "word....",
      explanation: "Rule: Four Dots. Use three dots for the ellipsis plus one dot for the period."
    },
    {
      question: "What does a slash usually mean in 'He/She'?",
      options: ["He and She", "He or She"],
      answer: "He or She",
      explanation: "Rule: Options. The slash typically signifies 'or', indicating alternatives."
    },
    {
      question: "Is a slash used in dates like '1/1/2000'?",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: "Rule: Dates. Slashes are a standard shorthand for writing dates."
    },
    {
      question: "How should an ellipsis be spaced in formal writing?",
      options: ["word...word", "word ... word"],
      answer: "word ... word",
      explanation: "Rule: Spacing. Most formal style guides require a space before and after the ellipsis."
    },
    {
      question: "What does a slash indicate when quoting poetry?",
      options: ["Line break", "Stanza break"],
      answer: "Line break",
      explanation: "Rule: Poetry. A slash / indicates where a new line begins in the original poem."
    },
    {
      question: "What does an ellipsis indicate in dialogue?",
      options: ["A sudden stop", "Trailing off or hesitation"],
      answer: "Trailing off or hesitation",
      explanation: "Rule: Dialogue. An ellipsis shows a thought fading away or hesitation. (A dash shows a sudden interruption)."
    },
    {
      question: "Is the slash correct in '1/2'?",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: "Rule: Fractions. Slashes are used to write fractions."
    },
    {
      question: "Is the use of 'and/or' recommended in formal writing?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "Rule: Style. 'And/or' is often considered clunky in formal writing. It is better to rephrase (e.g., 'A or B, or both')."
    }
  ],

  expert: [
    // 151–160: Academic Citations & Formatting
    {
      question: "How should the title of a book be formatted in a typed document?",
      options: ["Italicized", "Quoted"],
      answer: "Italicized",
      explanation: "Rule: Major Works. Books, journals, movies, and albums are italicized."
    },
    {
      question: "How should the title of a magazine article be formatted?",
      options: ["Italicized", "Quoted"],
      answer: "Quoted",
      explanation: "Rule: Minor Works. Articles, chapters, essays, and song titles are enclosed in quotation marks."
    },
    {
      question: "Which citation format uses parentheses like (Smith, 2020)?",
      options: ["APA", "MLA (old version)", "Chicago"],
      answer: "APA",
      explanation: "Rule: Citation Styles. APA style uses the Author-Date format in parentheses."
    },
    {
      question: "How do you correctly punctuate 'et al.' (meaning 'and others')?",
      options: ["et al", "et. al.", "et al."],
      answer: "et al.",
      explanation: "Rule: Latin Abbreviations. 'et' is a whole word (and). 'al.' is an abbreviation for 'alii'. Only 'al' gets a period."
    },
    {
      question: "What is the correct punctuation for 'i.e.' (meaning 'that is')?",
      options: ["i.e.", "ie", "i.e"],
      answer: "i.e.",
      explanation: "Rule: Abbreviations. Periods are required after each letter in 'i.e.'."
    },
    {
      question: "What is the correct punctuation for 'e.g.' (meaning 'for example')?",
      options: ["e.g.", "eg"],
      answer: "e.g.",
      explanation: "Rule: Abbreviations. Periods are required after each letter in 'e.g.'."
    },
    {
      question: "Should a comma follow 'i.e.' and 'e.g.' in American English?",
      options: ["Yes (i.e., word)", "No (i.e. word)"],
      answer: "Yes (i.e., word)",
      explanation: "Rule: Commas with Abbreviations. In standard American academic writing, a comma always follows 'i.e.' and 'e.g.'."
    },
    {
      question: "Where does the period go if a full sentence is inside parentheses?",
      options: ["(Complete sentence.)", "(Complete sentence)."],
      answer: "(Complete sentence.)",
      explanation: "Rule: Parentheses. If the parenthetical statement is a complete, standalone sentence, the period goes INSIDE."
    },
    {
      question: "Where does the period go if the parenthesis is at the end of a larger sentence?",
      options: ["(end of phrase.)", "(end of phrase)."],
      answer: "(end of phrase).",
      explanation: "Rule: Sentence Flow. If the parenthesis is just part of the sentence, the period goes OUTSIDE to close the whole sentence."
    },
    {
      question: "Which dash is used for number ranges (10–20)?",
      options: ["Hyphen (-)", "En-dash (–)", "Em-dash (—)"],
      answer: "En-dash (–)",
      explanation: "Rule: Ranges. The En-dash is specifically used to represent 'to' in ranges of numbers or dates."
    },

    // 161–170: Serial Comma Nuances (Clarity)
    {
      question: "Why is the Oxford Comma needed in: 'I love my parents, Lady Gaga and Superman'?",
      options: ["It looks better", "To prevent ambiguity"],
      answer: "To prevent ambiguity",
      explanation: "Rule: Clarity. Without the comma, it sounds like an appositive—meaning your parents ARE Lady Gaga and Superman. The comma clarifies they are three separate items."
    },
    {
      question: "In the phrase 'To my mother, Ayn Rand, and God', is the meaning clear?",
      options: ["Yes", "No, it's ambiguous"],
      answer: "Yes",
      explanation: "Rule: Ambiguity. Here, the Oxford comma works perfectly to separate the three items. Without it, it might imply 'my mother is Ayn Rand and God'."
    },
    {
      question: "How should you punctuate a list that already contains commas (e.g., cities and countries)?",
      options: ["Use Semicolons", "Use Commas"],
      answer: "Use Semicolons",
      explanation: "Rule: The 'Super Comma'. When list items have internal commas (Paris, France; London, England), use semicolons to separate the items to avoid confusion."
    },
    {
      question: "Should you use a comma in 'A big old house'?",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "Rule: Cumulative Adjectives. 'Big' (size) and 'old' (age) are different categories. You cannot reverse them ('Old big house' sounds wrong). Therefore, NO comma."
    },
    {
      question: "Should you use a comma in 'A happy, lively puppy'?",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: "Rule: Coordinate Adjectives. 'Happy' and 'lively' are both opinions. You can swap them ('Lively, happy puppy'). Therefore, YES, use a comma."
    },
    {
      question: "Do modern style guides require a comma before 'Jr.' (e.g., John Smith Jr.)?",
      options: ["Yes, always", "No, it is often dropped"],
      answer: "No, it is often dropped",
      explanation: "Rule: Modern Style. Guides like Chicago and AP now suggest dropping the comma before Jr. and Sr."
    },
    {
      question: "Do you need a comma before 'Inc.' in a company name?",
      options: ["Yes, always", "It is optional/often dropped"],
      answer: "It is optional/often dropped",
      explanation: "Rule: Business Style. The comma before 'Inc.' or 'LLC' is becoming optional in modern usage."
    },
    {
      question: "Is the punctuation correct: 'John Doe, Ph.D.'?",
      options: ["Correct", "Incorrect"],
      answer: "Correct",
      explanation: "Rule: Degrees/Titles. Use commas to set off degrees like Ph.D., M.D., etc., from the name."
    },
    {
      question: "Is a comma needed in 'June 2020'?",
      options: ["Yes (June, 2020)", "No (June 2020)"],
      answer: "No (June 2020)",
      explanation: "Rule: Dates. If there is no specific day (just Month and Year), NO comma is used."
    },
    {
      question: "If a sentence ends with 'etc.', do you add another period?",
      options: ["Yes (etc..)", "No (etc.)"],
      answer: "No (etc.)",
      explanation: "Rule: Ending Sentences. If an abbreviation ending in a period (etc.) ends the sentence, do NOT add a second period."
    },

    // 171–180: Dialogue and Narrative Punctuation
    {
      question: "Which is the correct punctuation for a dialogue tag?",
      options: ["'Stop', he said.", "'Stop,' he said."],
      answer: "'Stop,' he said.",
      explanation: "Rule: Dialogue. The comma separating the quote from the speaker must be INSIDE the quotation marks."
    },
    {
      question: "Which sentence correctly uses an 'action tag'?",
      options: ['"I\'m leaving," he walked out.', '"I\'m leaving." He walked out.'],
      answer: '"I\'m leaving." He walked out.',
      explanation: "Rule: Action vs Speech. 'He walked out' is an action, not a verb of speaking. Therefore, the quote gets a period, and the action starts a new sentence."
    },
    {
      question: "Which sentence correctly uses a 'speech tag'?",
      options: ['"I\'m leaving," he said.', '"I\'m leaving." He said.'],
      answer: '"I\'m leaving," he said.',
      explanation: "Rule: Speech Tags. 'He said' identifies the speaker. Connect it to the quote with a comma."
    },
    {
      question: "How do you show interrupted speech?",
      options: ['"I don\'t--" she started.', '"I don\'t..." she started.'],
      answer: '"I don\'t--" she started.',
      explanation: "Rule: Interruption. An Em-dash (--) signifies an abrupt stop or interruption. Ellipses (...) signify trailing off."
    },
    {
      question: "How do you show a character trailing off in thought?",
      options: ['"I don\'t know--"', '"I don\'t know..."'],
      answer: '"I don\'t know..."',
      explanation: "Rule: Trailing Off. Use an ellipsis (...) when a speaker hesitates or lets their voice fade out."
    },
    {
      question: "How are internal thoughts often formatted?",
      options: ["Italics (*What now?* he thought.)", "Quotes (\"What now?\" he thought.)"],
      answer: "Italics (*What now?* he thought.)",
      explanation: "Rule: Interior Monologue. Standard fiction style often uses Italics without quotes for direct thoughts."
    },
    {
      question: "Where does the exclamation point go in: \"Help!\" he screamed?",
      options: ["Inside", "Outside"],
      answer: "Inside",
      explanation: "Rule: Punctuation Logic. The scream belongs to the quote, so the exclamation point goes inside."
    },
    {
      question: "Punctuate this: Did he say \"Yes\"?",
      options: ["Yes? (One mark outside)", "Yes\"? (Mark inside)"],
      answer: "Yes? (One mark outside)",
      explanation: "Rule: Logic. The quote 'Yes' is not a question. The whole sentence IS. The question mark goes outside."
    },
    {
      question: "Punctuate this: He asked, \"Why?\"",
      options: ["Why?\" (Mark inside)", "Why\"? (Mark outside)"],
      answer: "Why?\" (Mark inside)",
      explanation: "Rule: Logic. The quote itself is the question. The mark goes inside."
    },
    {
      question: "Punctuate: Did he ask \"Why?\"",
      options: ["Why?\"?", "Why?\""],
      answer: "Why?\"",
      explanation: "Rule: Double Punctuation. If the quote ends in a ? and the sentence ends in a ?, use only ONE mark (the one inside)."
    },

    // 181–190: Scientific/Mathematical Punctuation
    {
      question: "Which punctuation mark is used to express a ratio (e.g., 2 to 1)?",
      options: ["Colon (:)", "Semicolon (;)"],
      answer: "Colon (:)",
      explanation: "Rule: Ratios. We use a colon to express a ratio between two numbers (2:1)."
    },
    {
      question: "In US English, which mark separates the hour from the minutes (12__30)?",
      options: ["Colon (:)", "Period (.)"],
      answer: "Colon (:)",
      explanation: "Rule: Time Formats. US English uses a colon (12:30), whereas some European styles use a period (12.30)."
    },
    {
      question: "Which punctuation is used for decimals (e.g., 3__14)?",
      options: ["Colon", "Period"],
      answer: "Period",
      explanation: "Rule: Decimals. We use a period (dot) to separate the whole number from the decimal fraction (3.14)."
    },
    {
      question: "What symbol is technically used to indicate a negative number?",
      options: ["Hyphen", "En-dash", "Minus sign"],
      answer: "Minus sign",
      explanation: "Rule: Mathematical Symbols. Technically, a 'minus sign' is distinct from a hyphen or dash, though keyboards often use the hyphen as a substitute."
    },
    {
      question: "What does the symbol '§' represent in legal documents?",
      options: ["Paragraph", "Section"],
      answer: "Section",
      explanation: "Rule: Legal Symbols. The '§' symbol specifically denotes a 'Section' of a law or code."
    },
    {
      question: "What is the primary use of an asterisk (*) in texts?",
      options: ["Footnote/Reference", "Emphasis"],
      answer: "Footnote/Reference",
      explanation: "Rule: Reference Marks. An asterisk usually signals the reader to look at the bottom of the page for a footnote."
    },
    {
      question: "Which spacing is correct for percentages?",
      options: ["100% (No space)", "100 % (With space)"],
      answer: "100% (No space)",
      explanation: "Rule: Spacing. There should be NO space between the number and the percent sign."
    },
    {
      question: "Where is the degree symbol (°) placed relative to the number?",
      options: ["Immediately after (90°)", "With a space (90 °)"],
      answer: "Immediately after (90°)",
      explanation: "Rule: Degrees. The symbol follows the number immediately without a space."
    },
    {
      question: "In English, where is the currency symbol ($) placed relative to the amount?",
      options: ["Before the number ($100)", "After the number (100$)"],
      answer: "Before the number ($100)",
      explanation: "Rule: Currency Formatting. Although we say 'one hundred dollars', we write the symbol BEFORE the number to prevent fraud/alteration."
    },
    {
      question: "Which dash is used to show a range of numbers (e.g., 10 to 20)?",
      options: ["En-dash (10–20)", "Hyphen (10-20)"],
      answer: "En-dash (10–20)",
      explanation: "Rule: Ranges. The En-dash (–), which is slightly longer than a hyphen, is the correct punctuation for 'to' or 'through' in ranges."
    },

    // 191–200: Rare/Archaic Marks & Style
    {
      question: "What is the 'Interrobang' (‽)?",
      options: ["A mark combining ? and !", "A mark for a long pause"],
      answer: "A mark combining ? and !",
      explanation: "Rule: Non-Standard Punctuation. The interrobang is a non-standard mark used to show excited disbelief (What‽)."
    },
    {
      question: "Is the Oxford Comma mandatory in all English writing?",
      options: ["Yes, always", "No, it depends on the Style Guide"],
      answer: "No, it depends on the Style Guide",
      explanation: "Rule: Style Guides. The Chicago Manual of Style requires it; the AP Stylebook (Journalism) usually forbids it. It is not a universal law, but a style choice."
    },
    {
      question: "How many spaces should generally follow a period in modern typing?",
      options: ["One space", "Two spaces"],
      answer: "One space",
      explanation: "Rule: Typography. The old typewriter rule was two spaces. Modern digital fonts require only ONE space after a period."
    },
    {
      question: "How should bullet points be punctuated?",
      options: ["Consistent punctuation", "Random punctuation"],
      answer: "Consistent punctuation",
      explanation: "Rule: Consistency. If bullets are full sentences, use periods. If they are fragments, generally use no punctuation. The key is to be consistent."
    },
    {
      question: "When is the Ampersand (&) acceptable in formal text?",
      options: ["Anytime", "Only in titles or company names"],
      answer: "Only in titles or company names",
      explanation: "Rule: Formality. Avoid & in sentences. Use 'and'. Only use & if it is part of a formal name (e.g., Ben & Jerry's)."
    },
    {
      question: "What is the Vertical Bar (|) used for?",
      options: ["Computing/Math", "Literature"],
      answer: "Computing/Math",
      explanation: "Rule: Symbols. The pipe (|) is used in logic, mathematics, and computing, rarely in standard prose."
    },
    {
      question: "What does the Tilde (~) mean before a number?",
      options: ["Approximately", "Exactly"],
      answer: "Approximately",
      explanation: "Rule: Symbols. ~10 means 'approximately 10' or 'about 10'."
    },
    {
      question: "What is the Caret (^) used for in proofreading?",
      options: ["To show where something should be inserted", "To delete a word"],
      answer: "To show where something should be inserted",
      explanation: "Rule: Editing Marks. The caret indicates missing text that needs to be added."
    },
    {
      question: "What are 'Guillemets' (« »)?",
      options: ["French/European quotation marks", "Mathematical brackets"],
      answer: "French/European quotation marks",
      explanation: "Rule: International Punctuation. These are the standard quotation marks in French, Spanish, and other languages."
    },
    {
      question: "What does the Pilcrow (¶) symbol represent?",
      options: ["A paragraph break", "A copyright"],
      answer: "A paragraph break",
      explanation: "Rule: Typography. The pilcrow marks the start of a new paragraph in editing and legal texts."
    }
  ]
};
