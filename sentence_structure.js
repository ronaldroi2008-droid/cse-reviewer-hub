const SENTENCE_STRUCTURE_QUESTIONS = {
  beginner: [
    // 1-10: Identifying the Subject
    { 
      question: "Identify the subject: 'The enormous elephant slept.'", 
      choices: ["The enormous elephant", "slept", "elephant slept", "enormous"], 
      correctIndex: 0, 
      explanation: "Rule: Complete Subject. The complete subject includes the main noun (elephant) plus all the words that describe it (The enormous). Therefore, 'The enormous elephant' is the correct answer." 
    },
    { 
      question: "Identify the subject: 'My sister and I went to the park.'", 
      choices: ["My sister", "I", "My sister and I", "the park"], 
      correctIndex: 2, 
      explanation: "Rule: Compound Subject. When a sentence is about two or more people acting together (joined by 'and'), the subject includes all of them. 'My sister and I' are the ones who went to the park." 
    },
    { 
      question: "Identify the subject: 'Under the bed hid the cat.'", 
      choices: ["Under the bed", "hid", "the cat", "bed"], 
      correctIndex: 2, 
      explanation: "Rule: Inverted Sentence Subject. In sentences starting with a prepositional phrase (Under the bed), ask 'Who or what hid?'. The answer is 'the cat', so that is the subject." 
    },
    { 
      question: "Identify the subject: 'Shut the door.'", 
      choices: ["The door", "Shut", "(You)", "No subject"], 
      correctIndex: 2, 
      explanation: "Rule: Implied Subject in Imperatives. In commands or requests, the subject is usually not written. It is understood to be '(You)'—the person being spoken to." 
    },
    { 
      question: "Identify the subject: 'Swimming is fun.'", 
      choices: ["Swimming", "is", "fun", "is fun"], 
      correctIndex: 0, 
      explanation: "Rule: Gerund as Subject. A gerund (verb ending in -ing) can function as a noun. Here, 'Swimming' is the activity being described as fun, so it is the subject." 
    },
    { 
      question: "Identify the subject: 'Where is the library?'", 
      choices: ["Where", "is", "the library", "library"], 
      correctIndex: 2, 
      explanation: "Rule: Finding Subject in Questions. Rearrange the question into a statement: 'The library is where.' This makes it clear that 'the library' is the topic/subject." 
    },
    { 
      question: "Identify the subject: 'There are five apples.'", 
      choices: ["There", "are", "five apples", "apples"], 
      correctIndex: 2, 
      explanation: "Rule: 'There' is Not a Subject. In 'There is/are' sentences, 'There' is just a placeholder. The real subject is what exists: 'five apples'." 
    },
    { 
      question: "Identify the subject: 'The girl in the red dress waved.'", 
      choices: ["The girl", "The girl in the red dress", "red dress", "waved"], 
      correctIndex: 1, 
      explanation: "Rule: Complete Subject with Modifiers. The subject includes the main noun 'girl' and the entire phrase modifying her ('in the red dress'). It tells us exactly which girl waved." 
    },
    { 
      question: "Identify the subject: 'Slowly, the old man stood up.'", 
      choices: ["Slowly", "the old man", "man", "stood up"], 
      correctIndex: 1, 
      explanation: "Rule: Subject Identification. Adverbs like 'Slowly' are not part of the subject. We look for who performed the action 'stood up'. The answer is 'the old man'." 
    },
    { 
      question: "Identify the subject: 'Rain falls.'", 
      choices: ["Rain", "falls", "Rain falls", "None"], 
      correctIndex: 0, 
      explanation: "Rule: Simple Subject. In this basic sentence, 'Rain' is the noun that performs the action 'falls', making it the subject." 
    },

    // 11-20: Identifying the Predicate (Verb Phrase)
    { 
      question: "Identify the predicate: 'Birds fly.'", 
      choices: ["Birds", "fly", "Birds fly", "None"], 
      correctIndex: 1, 
      explanation: "Rule: Simple Predicate. The predicate tells what the subject does. Here, the subject is 'Birds', and the action they do is 'fly'." 
    },
    { 
      question: "Identify the complete predicate: 'She reads books every night.'", 
      choices: ["reads", "reads books", "reads books every night", "She"], 
      correctIndex: 2, 
      explanation: "Rule: Complete Predicate. This includes the verb ('reads') and all the words that complete its meaning ('books every night'). It tells the full story of what she does." 
    },
    { 
      question: "Identify the simple predicate (verb): 'The dog ran fast.'", 
      choices: ["The dog", "ran", "fast", "ran fast"], 
      correctIndex: 1, 
      explanation: "Rule: Simple Predicate vs Complete Predicate. The simple predicate is just the main verb itself. 'Ran' is the verb; 'fast' is an adverb describing it." 
    },
    { 
      question: "Identify the predicate: 'He has been working hard.'", 
      choices: ["He", "has been working", "has been working hard", "working"], 
      correctIndex: 2, 
      explanation: "Rule: Complete Predicate with Verb Phrase. The predicate includes the entire verb phrase ('has been working') plus the adverb ('hard')." 
    },
    { 
      question: "Identify the verb phrase: 'I am going to school.'", 
      choices: ["am", "going", "am going", "to school"], 
      correctIndex: 2, 
      explanation: "Rule: Verb Phrases. A verb phrase consists of the helping verb ('am') and the main verb ('going'). 'To school' is a prepositional phrase, not part of the verb." 
    },
    { 
      question: "Identify the predicate: 'They are happy.'", 
      choices: ["They", "are", "are happy", "happy"], 
      correctIndex: 2, 
      explanation: "Rule: Predicate with Linking Verb. The predicate starts with the verb ('are') and includes the adjective ('happy') that describes the subject." 
    },
    { 
      question: "Identify the predicate: 'The sun rises in the east.'", 
      choices: ["The sun", "rises", "rises in the east", "in the east"], 
      correctIndex: 2, 
      explanation: "Rule: Subject vs Predicate Division. The sentence is divided into the Subject ('The sun') and everything else is the Predicate ('rises in the east')." 
    },
    { 
      question: "Identify the predicate: 'John and Mary swam.'", 
      choices: ["John", "Mary", "John and Mary", "swam"], 
      correctIndex: 3, 
      explanation: "Rule: Simple Predicate with Compound Subject. Even though there are two people, the action they performed is just one word: 'swam'." 
    },
    { 
      question: "Identify the predicate: 'Always check your answers.'", 
      choices: ["Always", "check", "check your answers", "Always check your answers"], 
      correctIndex: 3, 
      explanation: "Rule: Predicate in Imperatives. Since the subject '(You)' is hidden, the entire visible sentence constitutes the complete predicate." 
    },
    { 
      question: "Identify the verb: 'He should have known better.'", 
      choices: ["should", "have", "known", "should have known"], 
      correctIndex: 3, 
      explanation: "Rule: Complex Verb Strings. The verb phrase includes all auxiliaries ('should', 'have') and the main verb ('known'). All three words form the verb." 
    },

    // 21-30: Identifying Direct Objects
    { 
      question: "Identify the Direct Object: 'She ate an apple.'", 
      choices: ["She", "ate", "an apple", "apple"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object Identification. The direct object receives the action. Ask 'She ate WHAT?'. The answer is 'an apple'." 
    },
    { 
      question: "Identify the Direct Object: 'He kicked the ball.'", 
      choices: ["He", "kicked", "the ball", "ball"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object Identification. Ask 'He kicked WHAT?'. The answer is 'the ball', which receives the kicking action." 
    },
    { 
      question: "Identify the Direct Object: 'I wrote a letter.'", 
      choices: ["I", "wrote", "a letter", "letter"], 
      correctIndex: 2, 
      explanation: "Rule: Finding the Object. Subject (I) + Verb (wrote) + WHAT? (a letter). 'A letter' is the direct object." 
    },
    { 
      question: "Identify the Direct Object: 'They love music.'", 
      choices: ["They", "love", "music", "No object"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object with Abstract Nouns. Ask 'They love WHAT?'. The answer is 'music'." 
    },
    { 
      question: "Identify the Direct Object: 'Mom cooked dinner.'", 
      choices: ["Mom", "cooked", "dinner", "No object"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object. The verb is 'cooked'. The thing being cooked is 'dinner', making it the direct object." 
    },
    { 
      question: "Identify the Direct Object: 'He helps his friends.'", 
      choices: ["He", "helps", "his friends", "friends"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object (People). The object answers 'Whom?' as well as 'What?'. 'He helps WHOM?'. Answer: 'his friends'." 
    },
    { 
      question: "Identify the Direct Object: 'She brought gifts.'", 
      choices: ["She", "brought", "gifts", "No object"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object. 'Gifts' is the noun receiving the action of being brought." 
    },
    { 
      question: "Identify the Direct Object: 'We watched a movie.'", 
      choices: ["We", "watched", "a movie", "movie"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object. 'A movie' is the thing being watched." 
    },
    { 
      question: "Identify the Direct Object: 'The teacher teaches English.'", 
      choices: ["The teacher", "teaches", "English", "No object"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object. The subject teaches something specific. That specific thing ('English') is the direct object." 
    },
    { 
      question: "Identify the Direct Object: 'Birds build nests.'", 
      choices: ["Birds", "build", "nests", "No object"], 
      correctIndex: 2, 
      explanation: "Rule: Direct Object. 'Nests' are the things being built by the birds." 
    },

    // 31-40: Identifying Prepositional Phrases
    { 
      question: "Identify the phrase: 'The cat is on the roof.'", 
      choices: ["The cat", "is", "on the roof", "roof"], 
      correctIndex: 2, 
      explanation: "Rule: Prepositional Phrase Structure. It starts with a preposition ('on') and ends with its object ('the roof'). 'On the roof' tells us where." 
    },
    { 
      question: "Identify the phrase: 'She walked into the room.'", 
      choices: ["She walked", "into the room", "the room", "into"], 
      correctIndex: 1, 
      explanation: "Rule: Prepositional Phrase. 'Into' is the preposition, and 'the room' is the object. Together they form 'into the room'." 
    },
    { 
      question: "Identify the phrase: 'We met at noon.'", 
      choices: ["We met", "at noon", "noon", "at"], 
      correctIndex: 1, 
      explanation: "Rule: Prepositional Phrase of Time. 'At' is the preposition + 'noon' is the object -> 'at noon'." 
    },
    { 
      question: "Identify the phrase: 'The gift is for you.'", 
      choices: ["The gift", "is", "for you", "you"], 
      correctIndex: 2, 
      explanation: "Rule: Prepositional Phrase. 'For' indicates purpose/receiver, and 'you' is the object. The phrase is 'for you'." 
    },
    { 
      question: "Identify the phrase: 'He ran under the bridge.'", 
      choices: ["He ran", "under the bridge", "the bridge", "under"], 
      correctIndex: 1, 
      explanation: "Rule: Prepositional Phrase of Place. 'Under' connects the action to 'the bridge'. The phrase is 'under the bridge'." 
    },
    { 
      question: "Identify the phrase: 'A girl with blue eyes.'", 
      choices: ["A girl", "with blue eyes", "blue eyes", "eyes"], 
      correctIndex: 1, 
      explanation: "Rule: Adjectival Prepositional Phrase. The phrase 'with blue eyes' describes the noun 'girl', acting like an adjective." 
    },
    { 
      question: "Identify the phrase: 'After the game, we ate.'", 
      choices: ["After the game", "we ate", "the game", "After"], 
      correctIndex: 0, 
      explanation: "Rule: Introductory Prepositional Phrase. 'After' is the preposition, 'the game' is the object. It tells when we ate." 
    },
    { 
      question: "Identify the phrase: 'The book is by the window.'", 
      choices: ["The book", "is", "by the window", "window"], 
      correctIndex: 2, 
      explanation: "Rule: Prepositional Phrase of Location. 'By' means near. The phrase is 'by the window'." 
    },
    { 
      question: "Identify the phrase: 'He lives near the school.'", 
      choices: ["He lives", "near the school", "the school", "near"], 
      correctIndex: 1, 
      explanation: "Rule: Prepositional Phrase. 'Near' is the preposition, 'the school' is the object. Phrase: 'near the school'." 
    },
    { 
      question: "Identify the phrase: 'Go down the stairs.'", 
      choices: ["Go", "down the stairs", "the stairs", "down"], 
      correctIndex: 1, 
      explanation: "Rule: Prepositional Phrase of Direction. 'Down' indicates direction relative to 'the stairs'. Phrase: 'down the stairs'." 
    },

    // 41-50: Independent vs Dependent Clauses (Basic)
    { 
      question: "Identify the independent clause: 'If it rains, we will stay home.'", 
      choices: ["If it rains", "we will stay home", "stay home", "None"], 
      correctIndex: 1, 
      explanation: "Rule: Independent Clause Definition. An independent clause expresses a complete thought and can stand alone. 'We will stay home' is complete. 'If it rains' is incomplete (dependent)." 
    },
    { 
      question: "Identify the dependent clause: 'When I grow up, I want to be a pilot.'", 
      choices: ["When I grow up", "I want to be", "a pilot", "I want to be a pilot"], 
      correctIndex: 0, 
      explanation: "Rule: Dependent Clause Markers. Clauses starting with subordinating conjunctions like 'When' depend on another clause. 'When I grow up' leaves the thought unfinished." 
    },
    { 
      question: "Identify the independent clause: 'She smiled because she was happy.'", 
      choices: ["She smiled", "because she was happy", "she was happy", "because"], 
      correctIndex: 0, 
      explanation: "Rule: Complete Thought. 'She smiled' makes sense on its own. 'Because she was happy' explains the reason but is a dependent clause." 
    },
    { 
      question: "Identify the dependent clause: 'Since you asked, I will tell you.'", 
      choices: ["Since you asked", "I will tell you", "tell you", "I will"], 
      correctIndex: 0, 
      explanation: "Rule: Identifying Subordinators. The word 'Since' makes the clause dependent. 'Since you asked' requires more information to be complete." 
    },
    { 
      question: "Is this clause independent? 'Although it was cold.'", 
      choices: ["Yes", "No"], 
      correctIndex: 1, 
      explanation: "Rule: Subordinating Conjunctions. 'Although' makes the clause dependent. It implies 'something else happened', so it cannot stand alone (No)." 
    },
    { 
      question: "Is this clause independent? 'The sun is shining.'", 
      choices: ["Yes", "No"], 
      correctIndex: 0, 
      explanation: "Rule: Independent Clause. It has a subject (The sun), a verb (is shining), and expresses a complete thought (Yes)." 
    },
    { 
      question: "Identify the dependent clause: 'I will help you unless I am busy.'", 
      choices: ["I will help you", "unless I am busy", "I am busy", "help you"], 
      correctIndex: 1, 
      explanation: "Rule: Subordinating Conjunctions. 'Unless' introduces a condition. 'Unless I am busy' is the dependent clause." 
    },
    { 
      question: "Identify the independent clause: 'While he slept, the phone rang.'", 
      choices: ["While he slept", "the phone rang", "phone rang", "he slept"], 
      correctIndex: 1, 
      explanation: "Rule: Independent Clause. 'The phone rang' is a complete sentence. 'While he slept' is a time clause that depends on the main action." 
    },
    { 
      question: "Is this clause independent? 'Before we leave.'", 
      choices: ["Yes", "No"], 
      correctIndex: 1, 
      explanation: "Rule: Incompleteness. 'Before we leave' creates an expectation of what happens next. It is dependent (No)." 
    },
    { 
      question: "Is this clause independent? 'He opened the door.'", 
      choices: ["Yes", "No"], 
      correctIndex: 0, 
      explanation: "Rule: Complete Sentence. Subject (He) + Verb (opened) + Object (the door). It stands alone perfectly (Yes)." 
    }
  ],

  intermediate: [
    // 51-60: Simple Sentences
    { 
      question: "What type of sentence is this? 'The dog barked loudly.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 0, 
      explanation: "Rule: Simple Sentence Definition. A simple sentence contains exactly one independent clause and no dependent clauses. 'The dog barked loudly' is one complete thought." 
    },
    { 
      question: "What type of sentence is this? 'John and Mary walked to school.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 0, 
      explanation: "Rule: Compound Subject in Simple Sentence. Having two subjects (John and Mary) doesn't make it a compound sentence. Since there is only one predicate (walked to school), it remains Simple." 
    },
    { 
      question: "What type of sentence is this? 'We ate pizza and drank soda.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 0, 
      explanation: "Rule: Compound Predicate in Simple Sentence. The subject 'We' did two things (ate and drank), but it's still one continuous thought about 'We'. This is a Simple sentence." 
    },
    { 
      question: "Identify the Simple Sentence:", 
      choices: ["I run, and she swims.", "I run fast.", "Because I run.", "I run when I can."], 
      correctIndex: 1, 
      explanation: "Rule: Single Independent Clause. 'I run fast' is the only option with just one subject and verb and no connecting words like 'and' or 'because'." 
    },
    { 
      question: "Is 'The big red car stopped suddenly' a simple sentence?", 
      choices: ["Yes", "No"], 
      correctIndex: 0, 
      explanation: "Rule: Length vs Structure. A sentence can be long and still be Simple. It has one subject (The big red car) and one verb (stopped)." 
    },
    { 
      question: "What type of sentence? 'Birds fly south for the winter.'", 
      choices: ["Simple", "Compound", "Complex", "Run-on"], 
      correctIndex: 0, 
      explanation: "Rule: One Clause. This sentence has one subject (Birds) and one verb (fly), expressing a single complete fact. It is Simple." 
    },
    { 
      question: "What type of sentence? 'My mother cooks dinner every night.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 0, 
      explanation: "Rule: Structure Analysis. S (My mother) + V (cooks) + O (dinner). No conjunctions joining clauses. It is Simple." 
    },
    { 
      question: "What type of sentence? 'In the morning, the birds sing.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 0, 
      explanation: "Rule: Introductory Phrases. 'In the morning' is just a prepositional phrase, not a clause. The main part 'the birds sing' is one independent clause. So, Simple." 
    },
    { 
      question: "What type of sentence? 'Tom reads books and watches movies.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 0, 
      explanation: "Rule: Simple with Compound Verb. Tom does two things (reads and watches), but since he is the only subject, it is a Simple sentence." 
    },
    { 
      question: "What type of sentence? 'Rain falls.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 0, 
      explanation: "Rule: Minimum Requirement. Even with just two words (Subject + Verb), if it expresses a complete thought, it is a Simple sentence." 
    },

    // 61-70: Compound Sentences (FANBOYS)
    { 
      question: "What type of sentence is this? 'I like tea, but he likes coffee.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Compound Sentence Definition. It joins two independent clauses ('I like tea' + 'he likes coffee') using a coordinating conjunction ('but')." 
    },
    { 
      question: "What type of sentence is this? 'She cooked, and he cleaned.'", 
      choices: ["Simple", "Compound", "Complex", "Simple"], 
      correctIndex: 1, 
      explanation: "Rule: FANBOYS. The word 'and' connects two complete sentences ('She cooked' / 'he cleaned'). This makes it Compound." 
    },
    { 
      question: "Identify the Compound Sentence:", 
      choices: ["I run fast.", "I run, so I am tired.", "I run because I like it.", "Running is fun."], 
      correctIndex: 1, 
      explanation: "Rule: Identifying Coordinators. 'So' is a FANBOYS conjunction that connects cause ('I run') and effect ('I am tired'). This creates a Compound sentence." 
    },
    { 
      question: "What type of sentence? 'You can stay, or you can go.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Coordinator 'Or'. Since 'You can stay' and 'you can go' are both independent clauses joined by 'or', it is Compound." 
    },
    { 
      question: "What type of sentence? 'He was tired, yet he kept working.'", 
      choices: ["Simple", "Compound", "Complex", "Run-on"], 
      correctIndex: 1, 
      explanation: "Rule: Coordinator 'Yet'. 'Yet' functions like 'but' here, joining two complete contrasting thoughts. Thus, Compound." 
    },
    { 
      question: "Which word makes this compound? 'It rained, ____ we stayed home.'", 
      choices: ["so", "because", "if", "when"], 
      correctIndex: 0, 
      explanation: "Rule: FANBOYS vs Subordinators. 'So' is the only option that is a Coordinating Conjunction (FANBOYS). The others create Complex sentences." 
    },
    { 
      question: "What type of sentence? 'I wanted to go; however, I was too busy.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Semicolons in Compound Sentences. Two independent clauses can be joined by a semicolon (;) and a conjunctive adverb ('however'). This structure is Compound." 
    },
    { 
      question: "What type of sentence? 'The car broke down; we walked home.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Semicolon Usage. A semicolon alone can join two related independent clauses. Since both parts stand alone, it is Compound." 
    },
    { 
      question: "What type of sentence? 'She is smart, for she reads a lot.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Coordinator 'For'. Here, 'for' means 'because'. Since it acts as a coordinating conjunction joining two clauses, the sentence is Compound." 
    },
    { 
      question: "Identify the Compound Sentence:", 
      choices: ["While I slept, he worked.", "I slept, and he worked.", "I slept because he worked.", "I sleeping and working."], 
      correctIndex: 1, 
      explanation: "Rule: Connector Types. 'While' and 'because' create Complex sentences. 'And' creates a Compound sentence by joining two equal clauses." 
    },

    // 71-80: Complex Sentences (Subordinating Conjunctions)
    { 
      question: "What type of sentence is this? 'When the bell rings, you can go.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 2, 
      explanation: "Rule: Complex Sentence Definition. A complex sentence has one independent clause ('you can go') and at least one dependent clause ('When the bell rings')." 
    },
    { 
      question: "What type of sentence is this? 'I will help you if you ask.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 2, 
      explanation: "Rule: Conditionals as Complex Sentences. 'If you ask' is a dependent clause (condition). 'I will help you' is independent. Thus, Complex." 
    },
    { 
      question: "Identify the Complex Sentence:", 
      choices: ["I like cats, but I hate dogs.", "I like cats because they are cute.", "I like cats and dogs.", "I like cats."], 
      correctIndex: 1, 
      explanation: "Rule: Subordinators. 'Because' introduces a dependent clause. This dependency makes the sentence Complex. (Option A is Compound)." 
    },
    { 
      question: "What type of sentence? 'Although it rained, we played soccer.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 2, 
      explanation: "Rule: Concession Clauses. 'Although' is a subordinating conjunction. 'Although it rained' cannot stand alone, making the sentence Complex." 
    },
    { 
      question: "What type of sentence? 'The man who called is my uncle.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 2, 
      explanation: "Rule: Relative Clauses. The clause 'who called' describes 'The man'. Relative clauses are dependent clauses, so the sentence is Complex." 
    },
    { 
      question: "What type of sentence? 'Since you are here, please help.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 2, 
      explanation: "Rule: Subordinator 'Since'. The sentence starts with a dependent clause ('Since you are here'), attached to a main command ('please help'). It is Complex." 
    },
    { 
      question: "What type of sentence? 'We ate before we left.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 2, 
      explanation: "Rule: Time Clauses. 'Before we left' is a dependent time clause modifying 'ate'. One Indep + One Dep = Complex." 
    },
    { 
      question: "Which word makes this complex? '____ it was cold, we went out.'", 
      choices: ["Although", "But", "And", "So"], 
      correctIndex: 0, 
      explanation: "Rule: Choosing Connectors. 'But', 'And', and 'So' are coordinating conjunctions (Compound). 'Although' is subordinating, creating a Complex sentence." 
    },
    { 
      question: "What type of sentence? 'She is the one that I told you about.'", 
      choices: ["Simple", "Compound", "Complex", "Fragment"], 
      correctIndex: 2, 
      explanation: "Rule: Relative Clause 'That'. The clause 'that I told you about' depends on the main clause to identify 'the one'. Thus, Complex." 
    },
    { 
      question: "Identify the Complex Sentence:", 
      choices: ["He ran fast.", "He ran, and he won.", "He ran until he dropped.", "He ran fast and won."], 
      correctIndex: 2, 
      explanation: "Rule: 'Until'. 'Until he dropped' is a dependent clause of time. Option B is Compound ('and'). Option C uses a subordinator, making it Complex." 
    },

    // 81-90: Compound-Complex Sentences
    { 
      question: "What type of sentence is this? 'When the music stopped, she sat down, and everyone clapped.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 3, 
      explanation: "Rule: Compound-Complex Components. It has one dependent clause ('When the music stopped') AND two independent clauses ('she sat down', 'everyone clapped')." 
    },
    { 
      question: "Structure Analysis: 'I wanted to go, but I stayed home because I was sick.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 3, 
      explanation: "Rule: Analyzing Clauses. 'I wanted to go' (Indep) + 'but' + 'I stayed home' (Indep) + 'because I was sick' (Dep). Two Indep + One Dep = Compound-Complex." 
    },
    { 
      question: "What type of sentence? 'If you study, you will pass, and you will be happy.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 3, 
      explanation: "Rule: Mix of Structures. 'If you study' (Dep) + 'you will pass' (Indep) + 'and' + 'you will be happy' (Indep). Compound-Complex." 
    },
    { 
      question: "What type of sentence? 'He left because he was angry, so I didn't see him.'", 
      choices: ["Compound", "Complex", "Compound-Complex", "Simple"], 
      correctIndex: 2, 
      explanation: "Rule: Clause Breakdown. 'He left' (Indep) + 'because he was angry' (Dep) + 'so I didn't see him' (Indep). Contains both subordination and coordination." 
    },
    { 
      question: "Identify the Compound-Complex sentence:", 
      choices: ["I like dogs.", "I like dogs, and they like me.", "I like dogs because they are loyal.", "I like dogs because they are loyal, and they like me."], 
      correctIndex: 3, 
      explanation: "Rule: Formula. Compound-Complex = At least 2 Main Clauses + At least 1 Dependent Clause. Only the last option fits this formula." 
    },
    { 
      question: "What type of sentence? 'Though he was rich, he was unhappy, yet he never complained.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 3, 
      explanation: "Rule: Structure. 'Though he was rich' (Dep) starts the sentence. 'He was unhappy' (Indep) and 'he never complained' (Indep) follow, joined by 'yet'." 
    },
    { 
      question: "What type of sentence? 'The sun shone, and the birds sang as we walked.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 3, 
      explanation: "Rule: Structure. 'The sun shone' (Indep) + 'and' + 'the birds sang' (Indep) + 'as we walked' (Dep). Matches Compound-Complex." 
    },
    { 
      question: "Structure: 'Before the movie started, we bought popcorn, and we found our seats.'", 
      choices: ["Compound-Complex", "Complex", "Compound", "Simple"], 
      correctIndex: 0, 
      explanation: "Rule: Structure. 'Before the movie started' (Dep). 'We bought popcorn' (Indep). 'We found our seats' (Indep). This is Compound-Complex." 
    },
    { 
      question: "What type of sentence? 'I don't know where he is, but I hope he is safe.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 3, 
      explanation: "Rule: Embedded Clauses. 'Where he is' is a dependent noun clause. 'I don't know [it]' is independent. 'I hope [that] he is safe' is another independent clause structure. Thus, Compound-Complex." 
    },
    { 
      question: "Identify the type: 'Because I love you, I will help you, or I will find someone who can.'", 
      choices: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      correctIndex: 3, 
      explanation: "Rule: Complexity. Starts with Dep clause ('Because...'). Followed by two Indep clauses ('I will help', 'I will find') joined by 'or'. Compound-Complex." 
    },

    // 91-100: Sentence Fragments (Errors)
    { 
      question: "Is this a sentence or a fragment? 'Because I was tired.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Fragment (Dependent Clause). A clause starting with a subordinator like 'Because' cannot stand alone. It needs a main clause to be complete." 
    },
    { 
      question: "Is this a sentence or a fragment? 'The boy in the car.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Fragment (Missing Verb). This phrase has a subject ('The boy'), but it doesn't tell us what the boy is doing or being. It lacks a predicate." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Running down the street.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Fragment (Participial Phrase). 'Running' is an action, but there is no subject performing it and no helping verb. It's just a phrase." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Wait.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 0, 
      explanation: "Rule: Imperative Sentence. Even though it is one word, 'Wait' is a complete sentence because the subject '(You)' is implied." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Which is why I left.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Fragment (Relative Clause). 'Which' connects to a previous thought. On its own, 'Which is why I left' does not express a complete, independent idea." 
    },
    { 
      question: "Is this a sentence or a fragment? 'For example, the dog.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Fragment (Phrase). This is a transitional phrase followed by a noun. It lacks a verb and a complete thought." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Even though he tried.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Fragment (Subordinate Clause). 'Even though' implies a contrast with a main idea. Without the main idea, the thought is incomplete." 
    },
    { 
      question: "Is this a sentence or a fragment? 'John worked.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 0, 
      explanation: "Rule: Complete Sentence. It has a subject ('John') and a verb ('worked'). It expresses a complete thought, however short." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Such as apples and oranges.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Fragment (List/Phrase). 'Such as' introduces examples but does not form a complete sentence with a subject and verb." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Having finished the work.'", 
      choices: ["Sentence", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Fragment (Participial Phrase). This describes a person (who finished the work), but the sentence stops before mentioning that person or what they did next." 
    }
  ],

  advanced: [
    // 101-110: Run-on Sentences and Comma Splices
    { 
      question: "Identify the error: 'I love summer it is warm.'", 
      choices: ["Fragment", "Run-on", "Correct"], 
      correctIndex: 1, 
      explanation: "Rule: Fused Sentence (Run-on). Two independent clauses ('I love summer' / 'it is warm') are stuck together with NO punctuation. This is a grammar error." 
    },
    { 
      question: "Identify the error: 'I love summer, it is warm.'", 
      choices: ["Fragment", "Comma Splice", "Correct"], 
      correctIndex: 1, 
      explanation: "Rule: Comma Splice. A comma is too 'weak' to join two independent clauses by itself. You need a period, a semicolon, or a conjunction." 
    },
    { 
      question: "How to fix: 'It rained, we stayed home.'", 
      choices: ["It rained we stayed home.", "It rained; we stayed home.", "It rained, we stayed home.", "Rained we stayed."], 
      correctIndex: 1, 
      explanation: "Rule: Fixing Splices. Use a semicolon (;) to join two closely related independent clauses without a conjunction." 
    },
    { 
      question: "Is this correct? 'He ran fast, however he lost.'", 
      choices: ["Yes", "No"], 
      correctIndex: 1, 
      explanation: "Rule: Conjunctive Adverbs. 'However' is not a conjunction like 'but'. It requires a semicolon before it and a comma after it (; however,) to connect clauses." 
    },
    { 
      question: "Is this correct? 'He ran fast; however, he lost.'", 
      choices: ["Yes", "No"], 
      correctIndex: 0, 
      explanation: "Rule: Correct Punctuation. The semicolon separates the clauses, and the comma follows the transition word 'however'. This is correct." 
    },
    { 
      question: "Identify the error: 'The car stopped the engine died.'", 
      choices: ["Fragment", "Run-on", "Correct"], 
      correctIndex: 1, 
      explanation: "Rule: Run-on. Two thoughts ('The car stopped' and 'the engine died') run into each other without punctuation." 
    },
    { 
      question: "Which sentence is punctuated correctly?", 
      choices: ["I like tea I like coffee.", "I like tea, I like coffee.", "I like tea; I like coffee.", "I like tea, coffee."], 
      correctIndex: 2, 
      explanation: "Rule: Semicolon Usage. 'I like tea' and 'I like coffee' are independent sentences. A semicolon is a grammatically correct way to join them." 
    },
    { 
      question: "Fix the run-on: 'She is smart she studies hard.'", 
      choices: ["She is smart, she studies hard.", "She is smart because she studies hard.", "She is smart she studies.", "Smart she studies."], 
      correctIndex: 1, 
      explanation: "Rule: Subordination. By adding 'because', you turn the second clause into a dependent clause. This creates a correct Complex sentence." 
    },
    { 
      question: "Is this a run-on? 'I went to the store and bought milk.'", 
      choices: ["Yes", "No"], 
      correctIndex: 1, 
      explanation: "Rule: Compound Verb. This is NOT a run-on. One subject ('I') performs two actions ('went' and 'bought'). No comma is needed." 
    },
    { 
      question: "Is this a run-on? 'I went to the store, and I bought milk.'", 
      choices: ["Yes", "No"], 
      correctIndex: 1, 
      explanation: "Rule: Compound Sentence. This is NOT a run-on because the two clauses are correctly joined by a comma and the conjunction 'and'." 
    },

    // 111-120: Clause Functions (Noun, Adjective, Adverb)
    { 
      question: "What is the function of the capitalized clause? 'I know WHAT YOU DID.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 0, 
      explanation: "Rule: Noun Clauses. The clause 'what you did' acts as the direct object of the verb 'know'. Only nouns (or noun clauses) act as objects." 
    },
    { 
      question: "Function of clause: 'The man WHO IS STANDING THERE is my dad.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 1, 
      explanation: "Rule: Adjective Clauses. The clause describes 'The man'. Since it modifies a noun, it functions as an adjective." 
    },
    { 
      question: "Function of clause: 'I will go WHEREVER YOU GO.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 2, 
      explanation: "Rule: Adverb Clauses. The clause modifies the verb 'go' by telling *where*. Modifying a verb is the job of an adverb." 
    },
    { 
      question: "Function of clause: 'THAT HE LIED is surprising.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 0, 
      explanation: "Rule: Noun Clause as Subject. The entire clause 'That he lied' is the Subject of the sentence. Therefore, it is a Noun Clause." 
    },
    { 
      question: "Function of clause: 'This is the house THAT JACK BUILT.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 1, 
      explanation: "Rule: Adjective Clause. 'That Jack built' tells us *which* house. It modifies the noun 'house'." 
    },
    { 
      question: "Function of clause: 'BECAUSE IT WAS LATE, we left.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 2, 
      explanation: "Rule: Adverb Clause of Reason. The clause tells *why* we left. It modifies the action 'left'." 
    },
    { 
      question: "Function of clause: 'I wonder IF IT WILL RAIN.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 0, 
      explanation: "Rule: Noun Clause as Object. 'If it will rain' is the thing being wondered about. It is the direct object of 'wonder'." 
    },
    { 
      question: "Function of clause: 'The time WHEN WE MET was magical.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 1, 
      explanation: "Rule: Adjective Clause. The clause modifies the noun 'time'. It tells us *which* time." 
    },
    { 
      question: "Function of clause: 'He acts AS IF HE IS RICH.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 2, 
      explanation: "Rule: Adverb Clause of Manner. The clause describes *how* he acts. Modifying the verb 'acts' makes it an Adverb Clause." 
    },
    { 
      question: "Function of clause: 'Give it to WHOEVER WANTS IT.'", 
      choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      correctIndex: 0, 
      explanation: "Rule: Noun Clause as Object of Preposition. The entire clause 'whoever wants it' acts as the object of the preposition 'to'." 
    },

    // 121-130: Restrictive vs Non-Restrictive Clauses
    { 
      question: "Which sentence needs commas?", 
      choices: ["My brother who lives in Paris is visiting.", "My brother John who lives in Paris is visiting."], 
      correctIndex: 1, 
      explanation: "Rule: Non-Restrictive Appositives. If you say 'My brother John', you have already identified him by name. The clause 'who lives in Paris' becomes extra information, so it requires commas." 
    },
    { 
      question: "Correct punctuation: 'The car, which is red, is mine.'", 
      choices: ["Correct", "Incorrect"], 
      correctIndex: 0, 
      explanation: "Rule: 'Which' Clauses. In US grammar, 'which' typically introduces non-restrictive (non-essential) clauses, which must be set off by commas." 
    },
    { 
      question: "Correct punctuation: 'The car that is red is mine.'", 
      choices: ["Correct", "Incorrect"], 
      correctIndex: 0, 
      explanation: "Rule: 'That' Clauses. 'That' introduces restrictive (essential) clauses. No commas are used because the clause is needed to identify the car." 
    },
    { 
      question: "Choose the essential clause sentence:", 
      choices: ["The players, who are tired, can rest.", "The players who are tired can rest."], 
      correctIndex: 1, 
      explanation: "Rule: Essential (Restrictive) Meaning. The second sentence means ONLY the tired players can rest. The first sentence implies ALL players are tired." 
    },
    { 
      question: "Choose the non-essential clause sentence:", 
      choices: ["My mom, who is a nurse, is kind.", "My mom who is a nurse is kind."], 
      correctIndex: 0, 
      explanation: "Rule: Unique Subjects. Since you only have one mom, identifying her is not necessary. The clause 'who is a nurse' is extra info, so use commas." 
    },
    { 
      question: "Rule check: 'Which' uses commas, 'That' does not.", 
      choices: ["True", "False"], 
      correctIndex: 0, 
      explanation: "Rule: Relative Pronoun Usage. Generally, 'which' is for non-defining clauses (with commas) and 'that' is for defining clauses (no commas)." 
    },
    { 
      question: "Is the clause restrictive? 'Students who study pass.'", 
      choices: ["Yes", "No"], 
      correctIndex: 0, 
      explanation: "Rule: Restrictive Logic. We are not talking about ALL students, only the subset 'who study'. The clause restricts the meaning." 
    },
    { 
      question: "Is the clause restrictive? 'Mr. Smith, who is 50, retired.'", 
      choices: ["Yes", "No"], 
      correctIndex: 1, 
      explanation: "Rule: Proper Nouns. Mr. Smith is already a specific person. His age is just extra detail, so the clause is non-restrictive." 
    },
    { 
      question: "Punctuate: 'Paris which is in France is beautiful.'", 
      choices: ["Paris, which is in France, is beautiful.", "Paris which is in France is beautiful."], 
      correctIndex: 0, 
      explanation: "Rule: Non-Restrictive Proper Noun. Everyone knows where Paris is. The clause 'which is in France' adds nothing to the identification, so it needs commas." 
    },
    { 
      question: "Punctuate: 'The book that I read was good.'", 
      choices: ["The book, that I read, was good.", "The book that I read was good."], 
      correctIndex: 1, 
      explanation: "Rule: Restrictive 'That'. The clause 'that I read' tells us WHICH book. It is essential, so no commas." 
    },

    // 131-140: Dangling and Misplaced Modifiers
    { 
      question: "Identify the error: 'Walking down the street, the trees looked scary.'", 
      choices: ["Run-on", "Dangling Modifier", "Fragment"], 
      correctIndex: 1, 
      explanation: "Rule: Dangling Modifier. The phrase 'Walking down the street' implies an action. The subject immediately following it ('the trees') must be the one doing the walking. Trees don't walk, so the modifier dangles." 
    },
    { 
      question: "Fix the error: 'Walking down the street, the trees looked scary.'", 
      choices: ["Walking down the street, I thought the trees looked scary.", "The trees looked scary walking down the street.", "Walking down the street, trees were scary.", "Scary trees walking down the street."], 
      correctIndex: 0, 
      explanation: "Rule: Logical Subject. We fix the error by inserting 'I' as the subject. 'Walking down the street, I...' makes sense because 'I' can walk." 
    },
    { 
      question: "Identify the correct structure:", 
      choices: ["She served cake to the kids on paper plates.", "She served cake on paper plates to the kids."], 
      correctIndex: 1, 
      explanation: "Rule: Misplaced Modifier. In the first sentence, 'on paper plates' is next to 'kids', implying the kids are sitting on plates. Moving the phrase next to 'cake' fixes the meaning." 
    },
    { 
      question: "Identify the error: 'To receive a degree, studying is necessary.'", 
      choices: ["Dangling Modifier", "Run-on"], 
      correctIndex: 0, 
      explanation: "Rule: Dangling Infinitive. 'To receive a degree' is an action/goal. 'Studying' cannot receive a degree. A person must be the subject." 
    },
    { 
      question: "Fix the error: 'To receive a degree, studying is necessary.'", 
      choices: ["To receive a degree, one must study.", "Studying is necessary to receive a degree.", "To receive a degree, studying.", "Degree received by studying."], 
      correctIndex: 0, 
      explanation: "Rule: Inserting Subject. By changing the subject to 'one' (or a student), the opening phrase 'To receive a degree' logically applies to that subject." 
    },
    { 
      question: "Identify the correct structure:", 
      choices: ["I saw a dog with three legs.", "I saw a dog driving my car with three legs."], 
      correctIndex: 0, 
      explanation: "Rule: Modifier Placement. The first sentence places 'with three legs' next to 'dog', which is logical. The second sentence makes it sound like the car has three legs or the driving is done with legs." 
    },
    { 
      question: "Identify the error: 'Covered in sauce, I ate the pasta.'", 
      choices: ["Dangling Modifier", "Correct"], 
      correctIndex: 0, 
      explanation: "Rule: Dangling Participle. The modifier 'Covered in sauce' is placed next to 'I'. This implies the speaker is covered in sauce, not the pasta." 
    },
    { 
      question: "Fix: 'Covered in sauce, I ate the pasta.'", 
      choices: ["I ate the pasta covered in sauce.", "Covered in sauce, the pasta ate me.", "I ate the pasta, covered in sauce.", "I ate the covered in sauce pasta."], 
      correctIndex: 0, 
      explanation: "Rule: Moving Modifier. By placing 'covered in sauce' directly after 'pasta', the description clearly applies to the food." 
    },
    { 
      question: "Identify the correct structure:", 
      choices: ["He nearly drove for 5 hours.", "He drove for nearly 5 hours."], 
      correctIndex: 1, 
      explanation: "Rule: Limiting Modifiers. 'Nearly' modifies the word next to it. 'Nearly drove' means he almost started but didn't. 'Nearly 5 hours' means he drove for about 4 hours and 50 minutes." 
    },
    { 
      question: "Identify the correct structure:", 
      choices: ["Eaten by mosquitoes, we left the park.", "We left the park eaten by mosquitoes."], 
      correctIndex: 0, 
      explanation: "Rule: Participial Phrase. 'Eaten by mosquitoes' describes a state. It logically modifies 'We'. The second option implies the park was eaten." 
    },

    // 141-150: Appositives and Phrases
    { 
      question: "Identify the appositive: 'My brother, a dentist, is here.'", 
      choices: ["My brother", "a dentist", "is here", "here"], 
      correctIndex: 1, 
      explanation: "Rule: Appositive Definition. An appositive is a noun or noun phrase that renames another noun right beside it. 'A dentist' renames 'My brother'." 
    },
    { 
      question: "Punctuate: 'The insect a cockroach crawled away.'", 
      choices: ["The insect, a cockroach, crawled away.", "The insect a cockroach, crawled away."], 
      correctIndex: 0, 
      explanation: "Rule: Punctuation of Appositives. 'A cockroach' provides extra info about 'The insect'. It is non-essential, so it should be enclosed in commas." 
    },
    { 
      question: "Identify the appositive: 'Edison, the inventor, was smart.'", 
      choices: ["Edison", "the inventor", "was smart", "smart"], 
      correctIndex: 1, 
      explanation: "Rule: Renaming Nouns. 'The inventor' is the appositive because it renames the proper noun 'Edison'." 
    },
    { 
      question: "Is the appositive essential? 'My friend Bob is here.' (I have many friends)", 
      choices: ["Yes", "No"], 
      correctIndex: 0, 
      explanation: "Rule: Restrictive Appositive. Because you have many friends, the name 'Bob' is necessary to identify WHICH friend. Therefore, it is essential (no commas)." 
    },
    { 
      question: "Identify the phrase type: 'To run fast is hard.'", 
      choices: ["Infinitive Phrase", "Gerund Phrase", "Prepositional Phrase"], 
      correctIndex: 0, 
      explanation: "Rule: Infinitive Phrase. A phrase starting with 'To' + Verb (To run) is an infinitive phrase." 
    },
    { 
      question: "Identify the phrase type: 'Running is fun.'", 
      choices: ["Infinitive Phrase", "Gerund Phrase", "Appositive"], 
      correctIndex: 1, 
      explanation: "Rule: Gerund Phrase. A verb ending in -ing that functions as a noun ('Running') starts a gerund phrase." 
    },
    { 
      question: "Identify the phrase type: 'The dog, lost and hungry, cried.'", 
      choices: ["Adjective Phrase", "Noun Phrase", "Verb Phrase"], 
      correctIndex: 0, 
      explanation: "Rule: Adjective Phrase. The phrase 'lost and hungry' describes the noun 'dog', functioning as an adjective." 
    },
    { 
      question: "Identify the phrase type: 'He wants to go home.'", 
      choices: ["Infinitive Phrase", "Prepositional Phrase", "Participial Phrase"], 
      correctIndex: 0, 
      explanation: "Rule: Object Function. 'To go home' is an infinitive phrase acting as the direct object of 'wants'." 
    },
    { 
      question: "Identify the phrase type: 'Driven by hunger, he stole.'", 
      choices: ["Participial Phrase", "Gerund Phrase", "Infinitive Phrase"], 
      correctIndex: 0, 
      explanation: "Rule: Participial Phrase. It starts with a past participle ('Driven') and acts as an adjective modifying 'he'." 
    },
    { 
      question: "Combine using an appositive: 'John is a teacher. He is nice.'", 
      choices: ["John, a teacher, is nice.", "John is a nice teacher.", "John the teacher nice.", "A teacher is John nice."], 
      correctIndex: 0, 
      explanation: "Rule: Appositive Construction. We take the noun phrase 'a teacher' and place it directly after 'John' inside commas to combine the sentences efficiently." 
    }
  ],

  super: [
    // 151-160: Parallelism (Lists and Correlatives)
    { 
      question: "Choose the parallel sentence:", 
      choices: ["I like running, swimming, and to hike.", "I like running, swimming, and hiking.", "I like to run, swimming, and hiking.", "I like running, to swim, and hike."], 
      correctIndex: 1, 
      explanation: "Rule: Parallel Structure in Lists. All items in a list must share the same grammatical form. Here, they are all gerunds: running, swimming, hiking." 
    },
    { 
      question: "Choose the parallel sentence:", 
      choices: ["She is smart, funny, and has kindness.", "She is smart, funny, and kind.", "She is smart, fun, and kindness.", "She is smart, funny, and a kind person."], 
      correctIndex: 1, 
      explanation: "Rule: Parallel Adjectives. The list contains adjectives describing 'She'. 'Smart' (adj), 'funny' (adj), and 'kind' (adj). 'Kindness' is a noun, breaking the pattern." 
    },
    { 
      question: "Choose the parallel sentence:", 
      choices: ["He wants to travel and to learn.", "He wants to travel and learning.", "He wants traveling and to learn.", "He wants travel and learn."], 
      correctIndex: 0, 
      explanation: "Rule: Parallel Infinitives. The structure is 'He wants [to verb]'. Both items must be infinitives: 'to travel' and 'to learn'." 
    },
    { 
      question: "Choose the parallel sentence:", 
      choices: ["Not only is he rich, but he is also famous.", "Not only is he rich, but also famous.", "Not only he is rich, but he is also famous.", "Not only rich, but he is famous."], 
      correctIndex: 0, 
      explanation: "Rule: Correlative Conjunction Balance. 'Not only' should follow the same structure as 'but also'. Here, we balance clauses: 'is he rich' (inverted) and 'he is also famous'. Or phrases: 'Not only rich but also famous'." 
    },
    { 
      question: "Fix the structure: 'She likes cooking, jogging, and to read.'", 
      choices: ["She likes cooking, jogging, and reading.", "She likes to cook, jog, and reading.", "She likes cooking, to jog, and reading.", "She likes cook, jog, read."], 
      correctIndex: 0, 
      explanation: "Rule: Fixing Faulty Parallelism. The first two items are gerunds (cooking, jogging). The third must also be a gerund (reading)." 
    },
    { 
      question: "Choose the parallel sentence:", 
      choices: ["The movie was long, boring, and it was loud.", "The movie was long, boring, and loud.", "The movie was long, boring, and loudly.", "The movie was length, boredom, and loud."], 
      correctIndex: 1, 
      explanation: "Rule: Parallel Adjectives. The sentence lists qualities of the movie. 'Long', 'boring', and 'loud' are all adjectives." 
    },
    { 
      question: "Choose the parallel sentence:", 
      choices: ["You can go by bus or by train.", "You can go by bus or train.", "You can go by bus or on a train.", "Both A and B."], 
      correctIndex: 3, 
      explanation: "Rule: Preposition Parallelism. You can repeat the preposition ('by bus or by train') or let the first one cover both ('by bus or train'). Both are correct." 
    },
    { 
      question: "Choose the parallel sentence:", 
      choices: ["To think is to be.", "Thinking is to be.", "To think is being.", "Thought is being."], 
      correctIndex: 0, 
      explanation: "Rule: Balancing Subject and Complement. If the subject is an infinitive ('To think'), the subject complement should also be an infinitive ('to be')." 
    },
    { 
      question: "Choose the parallel sentence:", 
      choices: ["He spoke clearly and with confidence.", "He spoke clearly and confidently.", "He spoke clear and confident.", "He spoke clearly and confident."], 
      correctIndex: 1, 
      explanation: "Rule: Parallel Adverbs. 'Clearly' is an adverb ending in -ly. The parallel match is 'confidently', another adverb ending in -ly." 
    },
    { 
      question: "Choose the parallel sentence:", 
      choices: ["The teacher told them to sit down and listen.", "The teacher told them to sit down and to listen.", "Both are correct.", "None."], 
      correctIndex: 2, 
      explanation: "Rule: Ellipsis in Parallelism. When using infinitives in a list ('to sit'), you can repeat the 'to' ('to listen') or omit it ('listen'). Both styles are grammatically acceptable." 
    },

    // 161-170: Inverted Sentence Structures
    { 
      question: "Identify the structure: 'Never have I seen such a sight.'", 
      choices: ["Standard", "Inverted"], 
      correctIndex: 1, 
      explanation: "Rule: Negative Inversion. When a sentence begins with a negative adverb (Never), the subject and auxiliary verb swap places ('have I' instead of 'I have')." 
    },
    { 
      question: "Identify the structure: 'Into the room walked the teacher.'", 
      choices: ["Standard", "Inverted"], 
      correctIndex: 1, 
      explanation: "Rule: Locative Inversion. When placing a location phrase ('Into the room') at the start for emphasis, the verb ('walked') often comes before the subject ('the teacher')." 
    },
    { 
      question: "Rewrite normally: 'Rarely do we eat out.'", 
      choices: ["We rarely eat out.", "We do rarely eat out.", "Rarely we eat out.", "We eat out rarely do."], 
      correctIndex: 0, 
      explanation: "Rule: Standard Word Order. The normal order is Subject ('We') + Adverb ('rarely') + Verb ('eat out'). Inversion is for emphasis." 
    },
    { 
      question: "Choose the correct inversion:", 
      choices: ["Seldom he sleeps.", "Seldom does he sleep.", "Seldom sleeps he.", "Seldom he does sleep."], 
      correctIndex: 1, 
      explanation: "Rule: Auxiliary Inversion. With negative adverbs like 'Seldom', we must use an auxiliary verb ('does') before the subject ('he')." 
    },
    { 
      question: "Choose the correct inversion:", 
      choices: ["Little did he know.", "Little he knew.", "Little known he.", "Little did he knew."], 
      correctIndex: 0, 
      explanation: "Rule: Inversion with 'Little'. 'Little' (meaning 'not much') triggers inversion. We add 'did' for the past tense. Base verb 'know' follows 'did'." 
    },
    { 
      question: "Choose the correct inversion:", 
      choices: ["Had I known, I would have come.", "Have I known, I would have come.", "Did I know, I would come.", "Had I knew, I would come."], 
      correctIndex: 0, 
      explanation: "Rule: Conditional Inversion (3rd). Instead of 'If I had known', we can drop 'If' and invert the auxiliary 'Had' and subject 'I'." 
    },
    { 
      question: "Choose the correct inversion:", 
      choices: ["Here comes the bus.", "Here the bus comes.", "Comes here the bus.", "Bus comes here."], 
      correctIndex: 0, 
      explanation: "Rule: Inversion with 'Here/There'. When the subject is a noun ('the bus'), the verb usually comes before it after 'Here'." 
    },
    { 
      question: "Choose the correct inversion:", 
      choices: ["Here it comes.", "Here comes it.", "It comes here.", "Comes it here."], 
      correctIndex: 0, 
      explanation: "Rule: No Inversion with Pronouns. When the subject is a pronoun ('it'), we DO NOT invert after 'Here'. 'Here it comes' is correct." 
    },
    { 
      question: "Choose the correct inversion:", 
      choices: ["Not only is she smart, but she is kind.", "Not only she is smart, but she is kind.", "Not only smart is she, but kind.", "Not only she smart, but kind."], 
      correctIndex: 0, 
      explanation: "Rule: Inversion with Correlatives. The first clause after 'Not only' must be inverted: 'is she smart' (Aux + Subject + Adj)." 
    },
    { 
      question: "Choose the correct inversion:", 
      choices: ["On the hill stood a castle.", "On the hill a castle stood.", "Stood a castle on the hill.", "A castle on the hill stood."], 
      correctIndex: 0, 
      explanation: "Rule: Locative Inversion. To paint a picture, we put the place first ('On the hill'), then the verb ('stood'), then the subject ('a castle')." 
    },

    // 171-180: Cleft Sentences (It-clefts and Wh-clefts)
    { 
      question: "Identify the structure: 'It was John who called.'", 
      choices: ["Simple", "Cleft Sentence", "Compound"], 
      correctIndex: 1, 
      explanation: "Rule: Cleft Sentences. A cleft sentence splits a simple sentence into two clauses to emphasize one part. The structure 'It was [John] who...' emphasizes that John (not someone else) did the action." 
    },
    { 
      question: "Rewrite for emphasis: 'I need water.'", 
      choices: ["What I need is water.", "Water is need.", "I need is water.", "Need I water."], 
      correctIndex: 0, 
      explanation: "Rule: Wh-Cleft (Pseudo-cleft). This structure emphasizes the object. Pattern: [Wh-clause] + [be] + [emphasized word]. 'What I need' + 'is' + 'water'." 
    },
    { 
      question: "Rewrite for emphasis: 'She broke the vase.'", 
      choices: ["It was she who broke the vase.", "She was the one broke the vase.", "The vase broke she.", "Breaking the vase was she."], 
      correctIndex: 0, 
      explanation: "Rule: It-Cleft Subject Emphasis. We use 'It was' + [Subject] + 'who/that'. Note that formal grammar uses the subjective pronoun 'she' (It was she), not 'her'." 
    },
    { 
      question: "Rewrite for emphasis: 'We met in Paris.'", 
      choices: ["It was in Paris that we met.", "It was Paris where we met.", "Paris was we met.", "In Paris we met."], 
      correctIndex: 0, 
      explanation: "Rule: It-Cleft Prepositional Emphasis. We are emphasizing the location 'in Paris'. Structure: 'It was' + [in Paris] + 'that' + [we met]." 
    },
    { 
      question: "Identify the structure: 'All I want is you.'", 
      choices: ["Wh-Cleft", "It-Cleft", "Simple"], 
      correctIndex: 0, 
      explanation: "Rule: 'All' Clefts. Sentences starting with 'All' (meaning 'The only thing') function like Wh-clefts. 'All I want' acts as the subject clause." 
    },
    { 
      question: "Correct this cleft: 'What I did was ran.'", 
      choices: ["What I did was run.", "What I did was ran.", "What I did run.", "What I did was running."], 
      correctIndex: 0, 
      explanation: "Rule: Pseudo-cleft Verbs. When the focus is on the action ('What I did'), the verb after 'was' should be the base form (run) or infinitive (to run), not the past tense (ran)." 
    },
    { 
      question: "Rewrite: 'The smoke caused the alarm.'", 
      choices: ["It was the smoke that caused the alarm.", "The smoke caused it, the alarm.", "What caused the alarm the smoke.", "The alarm caused by smoke."], 
      correctIndex: 0, 
      explanation: "Rule: It-Cleft Construction. To emphasize the subject 'The smoke', we wrap it in the structure: 'It + be + [The smoke] + that + [caused the alarm]'. This highlights exactly WHAT caused the alarm." 
    },
    { 
      question: "Which emphasizes the time?", 
      choices: ["It was yesterday that he arrived.", "He arrived yesterday.", "Yesterday he arrived.", "He arrived."], 
      correctIndex: 0, 
      explanation: "Rule: Cleft Emphasis. While other options mention the time, only the It-Cleft ('It was yesterday that...') structurally forces the reader to focus on the specific time he arrived." 
    },
    { 
      question: "Complete: 'It is ____ who is responsible.'", 
      choices: ["I", "me", "my", "mine"], 
      correctIndex: 0, 
      explanation: "Rule: Pronouns in Clefts. After the verb 'to be' (is/was), formal grammar requires the Subject Pronoun (I, He, She), not the Object Pronoun (me, him, her). 'It is I' is formally correct." 
    },
    { 
      question: "Complete: 'It is ____ whom I love.'", 
      choices: ["he", "him", "his", "himself"], 
      correctIndex: 1, 
      explanation: "Rule: Objects in Clefts. Here, the pronoun is the object of the verb 'love' (I love him). Therefore, we use the Object Pronoun 'him' (or 'whom' in the relative clause)." 
    },

    // 181-190: Absolute Phrases (Advanced)
    { 
      question: "Identify the Absolute Phrase: 'The sun having set, we went home.'", 
      choices: ["The sun having set", "we went home", "having set", "we went"], 
      correctIndex: 0, 
      explanation: "Rule: Absolute Phrase Identification. This phrase consists of a noun ('The sun') and a participle ('having set'). It modifies the whole sentence but has no grammatical connection to the main subject." 
    },
    { 
      question: "Combine: 'The game was over. The crowd cheered.'", 
      choices: ["The game being over, the crowd cheered.", "The game was over, the crowd cheered.", "Crowd cheered game over.", "Game over crowd cheered."], 
      correctIndex: 0, 
      explanation: "Rule: Absolute Construction. We can combine the sentences by changing the first one into an absolute phrase. 'The game was over' becomes 'The game being over'. It sets the context." 
    },
    { 
      question: "Correct: 'Weather permitting, we will go.'", 
      choices: ["Correct", "Incorrect"], 
      correctIndex: 0, 
      explanation: "Rule: Idiomatic Absolutes. 'Weather permitting' is a standard, correct absolute phrase meaning 'If the weather permits'." 
    },
    { 
      question: "Identify the Absolute Phrase: 'He stood there, his eyes closed.'", 
      choices: ["He stood there", "his eyes closed", "stood there", "eyes closed"], 
      correctIndex: 1, 
      explanation: "Rule: Noun + Participle. 'His eyes' is the noun, 'closed' is the participle. This phrase describes the manner in which he stood." 
    },
    { 
      question: "Structure: 'Her work finished, she left.'", 
      choices: ["Absolute Phrase", "Dangling Modifier", "Run-on"], 
      correctIndex: 0, 
      explanation: "Rule: Absolute Phrase vs Dangling. This is NOT dangling because the phrase has its own subject ('Her work'). It doesn't rely on 'she' to be the subject. It is a correct Absolute Phrase." 
    },
    { 
      question: "Difference: 'Walking home, I saw a cat.' vs 'The bus late, I walked home.'", 
      choices: ["Participial Phrase vs Absolute Phrase", "Absolute Phrase vs Participial Phrase"], 
      correctIndex: 0, 
      explanation: "Rule: Distinction. 'Walking home' is a Participial Phrase modifying 'I'. 'The bus late' is an Absolute Phrase because it has its own subject ('bus') different from 'I'." 
    },
    { 
      question: "Combine: 'His hands were shaking. He opened the letter.'", 
      choices: ["His hands shaking, he opened the letter.", "Shaking hands, he opened the letter.", "Hands shaking he opened.", "He opened the letter his hands shaking."], 
      correctIndex: 0, 
      explanation: "Rule: Absolute Formation. Drop the verb 'were'. 'His hands were shaking' becomes the absolute phrase 'His hands shaking'." 
    },
    { 
      question: "Is this correct? 'God willing, I will pass.'", 
      choices: ["Yes", "No"], 
      correctIndex: 0, 
      explanation: "Rule: Set Phrases. 'God willing' is a correct absolute construction used to express hope." 
    },
    { 
      question: "Is this correct? 'The test difficult, I failed.'", 
      choices: ["Yes", "No"], 
      correctIndex: 0, 
      explanation: "Rule: Implied Being. In absolute phrases with adjectives, the participle 'being' is often omitted. 'The test [being] difficult' is grammatically sound." 
    },
    { 
      question: "Identify the Absolute Phrase: 'Dinner ready, we sat down.'", 
      choices: ["Dinner ready", "we sat down", "sat down", "Dinner"], 
      correctIndex: 0, 
      explanation: "Rule: Noun + Adjective Absolute. 'Dinner' is the noun, 'ready' is the adjective. It implies 'Dinner being ready'." 
    },

    // 191-200: Subjunctive Mood (Structure Focus)
    { 
      question: "Correct: 'I suggest that he ____ study.'", 
      choices: ["study", "studies", "studied", "studying"], 
      correctIndex: 0, 
      explanation: "Rule: Mandative Subjunctive. After verbs of suggestion (suggest, recommend, propose), the 'that' clause uses the Base Form of the verb. 'He study' (not 'studies')." 
    },
    { 
      question: "Correct: 'If I ____ a bird, I would fly.'", 
      choices: ["was", "were", "am", "be"], 
      correctIndex: 1, 
      explanation: "Rule: Hypothetical Subjunctive. In 'If' clauses stating something untrue (I am not a bird), use 'were' for all subjects, including 'I'." 
    },
    { 
      question: "Correct: 'It is vital that she ____ present.'", 
      choices: ["be", "is", "was", "are"], 
      correctIndex: 0, 
      explanation: "Rule: Subjunctive with Adjectives. After adjectives of necessity (vital, essential, important), use the Base Form 'be', not 'is'." 
    },
    { 
      question: "Correct: 'God ____ America.'", 
      choices: ["bless", "blesses", "blessed", "blessing"], 
      correctIndex: 0, 
      explanation: "Rule: Formulaic Subjunctive. Phrases expressing a wish or prayer often use the subjunctive. 'God bless' acts as 'May God bless'." 
    },
    { 
      question: "Correct: 'I wish I ____ the answer.'", 
      choices: ["know", "knew", "known", "knowing"], 
      correctIndex: 1, 
      explanation: "Rule: Subjunctive 'Wish'. When wishing for something in the present, shift the tense one step back to the Past ('knew')." 
    },
    { 
      question: "Correct: 'I demand that the truth ____ told.'", 
      choices: ["be", "is", "was", "are"], 
      correctIndex: 0, 
      explanation: "Rule: Passive Subjunctive. 'Demand that' triggers the subjunctive. The passive form uses Base Be ('be') + Past Participle ('told')." 
    },
    { 
      question: "Correct: 'If need ____.'", 
      choices: ["be", "is", "was", "are"], 
      correctIndex: 0, 
      explanation: "Rule: Fixed Idiom. 'If need be' is a set phrase preserving the old subjunctive form meaning 'if it is necessary'." 
    },
    { 
      question: "Correct: 'Come what ____.'", 
      choices: ["may", "might", "will", "can"], 
      correctIndex: 0, 
      explanation: "Rule: Idiomatic Subjunctive. 'Come what may' means 'regardless of what happens'. It is a fixed expression." 
    },
    { 
      question: "Correct: 'I move that the meeting ____ adjourned.'", 
      choices: ["be", "is", "was", "are"], 
      correctIndex: 0, 
      explanation: "Rule: Parliamentary Procedure. Formal motions use the mandative subjunctive: 'move that... be'." 
    },
    { 
      question: "Correct: 'Long ____ the King.'", 
      choices: ["live", "lives", "lived", "living"], 
      correctIndex: 0, 
      explanation: "Rule: Optative Subjunctive. This expresses a wish ('May the King live long'). We use the base form 'live'." 
    }
  ]
};
