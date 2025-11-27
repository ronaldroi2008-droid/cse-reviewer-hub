Narito ang naayos na bersyon ng iyong `sentence_structure.js` file na sumusunod sa parehong format ng `adverbs.js`:

```javascript
// questions/sentence_structure.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["sentence_structure"] = {
  beginner: [
    // 1-10: Identifying the Subject
    { 
      question: "Identify the subject: 'The enormous elephant slept.'", 
      options: ["The enormous elephant", "slept", "elephant slept", "enormous"], 
      answer: "The enormous elephant", 
      explanation: "Rule: Complete Subject. The complete subject includes the main noun (elephant) plus all the words that describe it (The enormous). Therefore, 'The enormous elephant' is the correct answer." 
    },
    { 
      question: "Identify the subject: 'My sister and I went to the park.'", 
      options: ["My sister", "I", "My sister and I", "the park"], 
      answer: "My sister and I", 
      explanation: "Rule: Compound Subject. When a sentence is about two or more people acting together (joined by 'and'), the subject includes all of them. 'My sister and I' are the ones who went to the park." 
    },
    { 
      question: "Identify the subject: 'Under the bed hid the cat.'", 
      options: ["Under the bed", "hid", "the cat", "bed"], 
      answer: "the cat", 
      explanation: "Rule: Inverted Sentence Subject. In sentences starting with a prepositional phrase (Under the bed), ask 'Who or what hid?'. The answer is 'the cat', so that is the subject." 
    },
    { 
      question: "Identify the subject: 'Shut the door.'", 
      options: ["The door", "Shut", "(You)", "No subject"], 
      answer: "(You)", 
      explanation: "Rule: Implied Subject in Imperatives. In commands or requests, the subject is usually not written. It is understood to be '(You)'—the person being spoken to." 
    },
    { 
      question: "Identify the subject: 'Swimming is fun.'", 
      options: ["Swimming", "is", "fun", "is fun"], 
      answer: "Swimming", 
      explanation: "Rule: Gerund as Subject. A gerund (verb ending in -ing) can function as a noun. Here, 'Swimming' is the activity being described as fun, so it is the subject." 
    },
    { 
      question: "Identify the subject: 'Where is the library?'", 
      options: ["Where", "is", "the library", "library"], 
      answer: "the library", 
      explanation: "Rule: Finding Subject in Questions. Rearrange the question into a statement: 'The library is where.' This makes it clear that 'the library' is the topic/subject." 
    },
    { 
      question: "Identify the subject: 'There are five apples.'", 
      options: ["There", "are", "five apples", "apples"], 
      answer: "five apples", 
      explanation: "Rule: 'There' is Not a Subject. In 'There is/are' sentences, 'There' is just a placeholder. The real subject is what exists: 'five apples'." 
    },
    { 
      question: "Identify the subject: 'The girl in the red dress waved.'", 
      options: ["The girl", "The girl in the red dress", "red dress", "waved"], 
      answer: "The girl in the red dress", 
      explanation: "Rule: Complete Subject with Modifiers. The subject includes the main noun 'girl' and the entire phrase modifying her ('in the red dress'). It tells us exactly which girl waved." 
    },
    { 
      question: "Identify the subject: 'Slowly, the old man stood up.'", 
      options: ["Slowly", "the old man", "man", "stood up"], 
      answer: "the old man", 
      explanation: "Rule: Subject Identification. Adverbs like 'Slowly' are not part of the subject. We look for who performed the action 'stood up'. The answer is 'the old man'." 
    },
    { 
      question: "Identify the subject: 'Rain falls.'", 
      options: ["Rain", "falls", "Rain falls", "None"], 
      answer: "Rain", 
      explanation: "Rule: Simple Subject. In this basic sentence, 'Rain' is the noun that performs the action 'falls', making it the subject." 
    },

    // 11-20: Identifying the Predicate (Verb Phrase)
    { 
      question: "Identify the predicate: 'Birds fly.'", 
      options: ["Birds", "fly", "Birds fly", "None"], 
      answer: "fly", 
      explanation: "Rule: Simple Predicate. The predicate tells what the subject does. Here, the subject is 'Birds', and the action they do is 'fly'." 
    },
    { 
      question: "Identify the complete predicate: 'She reads books every night.'", 
      options: ["reads", "reads books", "reads books every night", "She"], 
      answer: "reads books every night", 
      explanation: "Rule: Complete Predicate. This includes the verb ('reads') and all the words that complete its meaning ('books every night'). It tells the full story of what she does." 
    },
    { 
      question: "Identify the simple predicate (verb): 'The dog ran fast.'", 
      options: ["The dog", "ran", "fast", "ran fast"], 
      answer: "ran", 
      explanation: "Rule: Simple Predicate vs Complete Predicate. The simple predicate is just the main verb itself. 'Ran' is the verb; 'fast' is an adverb describing it." 
    },
    { 
      question: "Identify the predicate: 'He has been working hard.'", 
      options: ["He", "has been working", "has been working hard", "working"], 
      answer: "has been working hard", 
      explanation: "Rule: Complete Predicate with Verb Phrase. The predicate includes the entire verb phrase ('has been working') plus the adverb ('hard')." 
    },
    { 
      question: "Identify the verb phrase: 'I am going to school.'", 
      options: ["am", "going", "am going", "to school"], 
      answer: "am going", 
      explanation: "Rule: Verb Phrases. A verb phrase consists of the helping verb ('am') and the main verb ('going'). 'To school' is a prepositional phrase, not part of the verb." 
    },
    { 
      question: "Identify the predicate: 'They are happy.'", 
      options: ["They", "are", "are happy", "happy"], 
      answer: "are happy", 
      explanation: "Rule: Predicate with Linking Verb. The predicate starts with the verb ('are') and includes the adjective ('happy') that describes the subject." 
    },
    { 
      question: "Identify the predicate: 'The sun rises in the east.'", 
      options: ["The sun", "rises", "rises in the east", "in the east"], 
      answer: "rises in the east", 
      explanation: "Rule: Subject vs Predicate Division. The sentence is divided into the Subject ('The sun') and everything else is the Predicate ('rises in the east')." 
    },
    { 
      question: "Identify the predicate: 'John and Mary swam.'", 
      options: ["John", "Mary", "John and Mary", "swam"], 
      answer: "swam", 
      explanation: "Rule: Simple Predicate with Compound Subject. Even though there are two people, the action they performed is just one word: 'swam'." 
    },
    { 
      question: "Identify the predicate: 'Always check your answers.'", 
      options: ["Always", "check", "check your answers", "Always check your answers"], 
      answer: "Always check your answers", 
      explanation: "Rule: Predicate in Imperatives. Since the subject '(You)' is hidden, the entire visible sentence constitutes the complete predicate." 
    },
    { 
      question: "Identify the verb: 'He should have known better.'", 
      options: ["should", "have", "known", "should have known"], 
      answer: "should have known", 
      explanation: "Rule: Complex Verb Strings. The verb phrase includes all auxiliaries ('should', 'have') and the main verb ('known'). All three words form the verb." 
    },

    // 21-30: Identifying Direct Objects
    { 
      question: "Identify the Direct Object: 'She ate an apple.'", 
      options: ["She", "ate", "an apple", "apple"], 
      answer: "an apple", 
      explanation: "Rule: Direct Object Identification. The direct object receives the action. Ask 'She ate WHAT?'. The answer is 'an apple'." 
    },
    { 
      question: "Identify the Direct Object: 'He kicked the ball.'", 
      options: ["He", "kicked", "the ball", "ball"], 
      answer: "the ball", 
      explanation: "Rule: Direct Object Identification. Ask 'He kicked WHAT?'. The answer is 'the ball', which receives the kicking action." 
    },
    { 
      question: "Identify the Direct Object: 'I wrote a letter.'", 
      options: ["I", "wrote", "a letter", "letter"], 
      answer: "a letter", 
      explanation: "Rule: Finding the Object. Subject (I) + Verb (wrote) + WHAT? (a letter). 'A letter' is the direct object." 
    },
    { 
      question: "Identify the Direct Object: 'They love music.'", 
      options: ["They", "love", "music", "No object"], 
      answer: "music", 
      explanation: "Rule: Direct Object with Abstract Nouns. Ask 'They love WHAT?'. The answer is 'music'." 
    },
    { 
      question: "Identify the Direct Object: 'Mom cooked dinner.'", 
      options: ["Mom", "cooked", "dinner", "No object"], 
      answer: "dinner", 
      explanation: "Rule: Direct Object. The verb is 'cooked'. The thing being cooked is 'dinner', making it the direct object." 
    },
    { 
      question: "Identify the Direct Object: 'He helps his friends.'", 
      options: ["He", "helps", "his friends", "friends"], 
      answer: "his friends", 
      explanation: "Rule: Direct Object (People). The object answers 'Whom?' as well as 'What?'. 'He helps WHOM?'. Answer: 'his friends'." 
    },
    { 
      question: "Identify the Direct Object: 'She brought gifts.'", 
      options: ["She", "brought", "gifts", "No object"], 
      answer: "gifts", 
      explanation: "Rule: Direct Object. 'Gifts' is the noun receiving the action of being brought." 
    },
    { 
      question: "Identify the Direct Object: 'We watched a movie.'", 
      options: ["We", "watched", "a movie", "movie"], 
      answer: "a movie", 
      explanation: "Rule: Direct Object. 'A movie' is the thing being watched." 
    },
    { 
      question: "Identify the Direct Object: 'The teacher teaches English.'", 
      options: ["The teacher", "teaches", "English", "No object"], 
      answer: "English", 
      explanation: "Rule: Direct Object. The subject teaches something specific. That specific thing ('English') is the direct object." 
    },
    { 
      question: "Identify the Direct Object: 'Birds build nests.'", 
      options: ["Birds", "build", "nests", "No object"], 
      answer: "nests", 
      explanation: "Rule: Direct Object. 'Nests' are the things being built by the birds." 
    },

    // 31-40: Identifying Prepositional Phrases
    { 
      question: "Identify the phrase: 'The cat is on the roof.'", 
      options: ["The cat", "is", "on the roof", "roof"], 
      answer: "on the roof", 
      explanation: "Rule: Prepositional Phrase Structure. It starts with a preposition ('on') and ends with its object ('the roof'). 'On the roof' tells us where." 
    },
    { 
      question: "Identify the phrase: 'She walked into the room.'", 
      options: ["She walked", "into the room", "the room", "into"], 
      answer: "into the room", 
      explanation: "Rule: Prepositional Phrase. 'Into' is the preposition, and 'the room' is the object. Together they form 'into the room'." 
    },
    { 
      question: "Identify the phrase: 'We met at noon.'", 
      options: ["We met", "at noon", "noon", "at"], 
      answer: "at noon", 
      explanation: "Rule: Prepositional Phrase of Time. 'At' is the preposition + 'noon' is the object -> 'at noon'." 
    },
    { 
      question: "Identify the phrase: 'The gift is for you.'", 
      options: ["The gift", "is", "for you", "you"], 
      answer: "for you", 
      explanation: "Rule: Prepositional Phrase. 'For' indicates purpose/receiver, and 'you' is the object. The phrase is 'for you'." 
    },
    { 
      question: "Identify the phrase: 'He ran under the bridge.'", 
      options: ["He ran", "under the bridge", "the bridge", "under"], 
      answer: "under the bridge", 
      explanation: "Rule: Prepositional Phrase of Place. 'Under' connects the action to 'the bridge'. The phrase is 'under the bridge'." 
    },
    { 
      question: "Identify the phrase: 'A girl with blue eyes.'", 
      options: ["A girl", "with blue eyes", "blue eyes", "eyes"], 
      answer: "with blue eyes", 
      explanation: "Rule: Adjectival Prepositional Phrase. The phrase 'with blue eyes' describes the noun 'girl', acting like an adjective." 
    },
    { 
      question: "Identify the phrase: 'After the game, we ate.'", 
      options: ["After the game", "we ate", "the game", "After"], 
      answer: "After the game", 
      explanation: "Rule: Introductory Prepositional Phrase. 'After' is the preposition, 'the game' is the object. It tells when we ate." 
    },
    { 
      question: "Identify the phrase: 'The book is by the window.'", 
      options: ["The book", "is", "by the window", "window"], 
      answer: "by the window", 
      explanation: "Rule: Prepositional Phrase of Location. 'By' means near. The phrase is 'by the window'." 
    },
    { 
      question: "Identify the phrase: 'He lives near the school.'", 
      options: ["He lives", "near the school", "the school", "near"], 
      answer: "near the school", 
      explanation: "Rule: Prepositional Phrase. 'Near' is the preposition, 'the school' is the object. Phrase: 'near the school'." 
    },
    { 
      question: "Identify the phrase: 'Go down the stairs.'", 
      options: ["Go", "down the stairs", "the stairs", "down"], 
      answer: "down the stairs", 
      explanation: "Rule: Prepositional Phrase of Direction. 'Down' indicates direction relative to 'the stairs'. Phrase: 'down the stairs'." 
    },

    // 41-50: Independent vs Dependent Clauses (Basic)
    { 
      question: "Identify the independent clause: 'If it rains, we will stay home.'", 
      options: ["If it rains", "we will stay home", "stay home", "None"], 
      answer: "we will stay home", 
      explanation: "Rule: Independent Clause Definition. An independent clause expresses a complete thought and can stand alone. 'We will stay home' is complete. 'If it rains' is incomplete (dependent)." 
    },
    { 
      question: "Identify the dependent clause: 'When I grow up, I want to be a pilot.'", 
      options: ["When I grow up", "I want to be", "a pilot", "I want to be a pilot"], 
      answer: "When I grow up", 
      explanation: "Rule: Dependent Clause Markers. Clauses starting with subordinating conjunctions like 'When' depend on another clause. 'When I grow up' leaves the thought unfinished." 
    },
    { 
      question: "Identify the independent clause: 'She smiled because she was happy.'", 
      options: ["She smiled", "because she was happy", "she was happy", "because"], 
      answer: "She smiled", 
      explanation: "Rule: Complete Thought. 'She smiled' makes sense on its own. 'Because she was happy' explains the reason but is a dependent clause." 
    },
    { 
      question: "Identify the dependent clause: 'Since you asked, I will tell you.'", 
      options: ["Since you asked", "I will tell you", "tell you", "I will"], 
      answer: "Since you asked", 
      explanation: "Rule: Identifying Subordinators. The word 'Since' makes the clause dependent. 'Since you asked' requires more information to be complete." 
    },
    { 
      question: "Is this clause independent? 'Although it was cold.'", 
      options: ["Yes", "No"], 
      answer: "No", 
      explanation: "Rule: Subordinating Conjunctions. 'Although' makes the clause dependent. It implies 'something else happened', so it cannot stand alone (No)." 
    },
    { 
      question: "Is this clause independent? 'The sun is shining.'", 
      options: ["Yes", "No"], 
      answer: "Yes", 
      explanation: "Rule: Independent Clause. It has a subject (The sun), a verb (is shining), and expresses a complete thought (Yes)." 
    },
    { 
      question: "Identify the dependent clause: 'I will help you unless I am busy.'", 
      options: ["I will help you", "unless I am busy", "I am busy", "help you"], 
      answer: "unless I am busy", 
      explanation: "Rule: Subordinating Conjunctions. 'Unless' introduces a condition. 'Unless I am busy' is the dependent clause." 
    },
    { 
      question: "Identify the independent clause: 'While he slept, the phone rang.'", 
      options: ["While he slept", "the phone rang", "phone rang", "he slept"], 
      answer: "the phone rang", 
      explanation: "Rule: Independent Clause. 'The phone rang' is a complete sentence. 'While he slept' is a time clause that depends on the main action." 
    },
    { 
      question: "Is this clause independent? 'Before we leave.'", 
      options: ["Yes", "No"], 
      answer: "No", 
      explanation: "Rule: Incompleteness. 'Before we leave' creates an expectation of what happens next. It is dependent (No)." 
    },
    { 
      question: "Is this clause independent? 'He opened the door.'", 
      options: ["Yes", "No"], 
      answer: "Yes", 
      explanation: "Rule: Complete Sentence. Subject (He) + Verb (opened) + Object (the door). It stands alone perfectly (Yes)." 
    }
  ],

  intermediate: [
    // 51-60: Simple Sentences
    { 
      question: "What type of sentence is this? 'The dog barked loudly.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Simple", 
      explanation: "Rule: Simple Sentence Definition. A simple sentence contains exactly one independent clause and no dependent clauses. 'The dog barked loudly' is one complete thought." 
    },
    { 
      question: "What type of sentence is this? 'John and Mary walked to school.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Simple", 
      explanation: "Rule: Compound Subject in Simple Sentence. Having two subjects (John and Mary) doesn't make it a compound sentence. Since there is only one predicate (walked to school), it remains Simple." 
    },
    { 
      question: "What type of sentence is this? 'We ate pizza and drank soda.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Simple", 
      explanation: "Rule: Compound Predicate in Simple Sentence. The subject 'We' did two things (ate and drank), but it's still one continuous thought about 'We'. This is a Simple sentence." 
    },
    { 
      question: "Identify the Simple Sentence:", 
      options: ["I run, and she swims.", "I run fast.", "Because I run.", "I run when I can."], 
      answer: "I run fast.", 
      explanation: "Rule: Single Independent Clause. 'I run fast' is the only option with just one subject and verb and no connecting words like 'and' or 'because'." 
    },
    { 
      question: "Is 'The big red car stopped suddenly' a simple sentence?", 
      options: ["Yes", "No"], 
      answer: "Yes", 
      explanation: "Rule: Length vs Structure. A sentence can be long and still be Simple. It has one subject (The big red car) and one verb (stopped)." 
    },
    { 
      question: "What type of sentence? 'Birds fly south for the winter.'", 
      options: ["Simple", "Compound", "Complex", "Run-on"], 
      answer: "Simple", 
      explanation: "Rule: One Clause. This sentence has one subject (Birds) and one verb (fly), expressing a single complete fact. It is Simple." 
    },
    { 
      question: "What type of sentence? 'My mother cooks dinner every night.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Simple", 
      explanation: "Rule: Structure Analysis. S (My mother) + V (cooks) + O (dinner). No conjunctions joining clauses. It is Simple." 
    },
    { 
      question: "What type of sentence? 'In the morning, the birds sing.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Simple", 
      explanation: "Rule: Introductory Phrases. 'In the morning' is just a prepositional phrase, not a clause. The main part 'the birds sing' is one independent clause. So, Simple." 
    },
    { 
      question: "What type of sentence? 'Tom reads books and watches movies.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Simple", 
      explanation: "Rule: Simple with Compound Verb. Tom does two things (reads and watches), but since he is the only subject, it is a Simple sentence." 
    },
    { 
      question: "What type of sentence? 'Rain falls.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Simple", 
      explanation: "Rule: Minimum Requirement. Even with just two words (Subject + Verb), if it expresses a complete thought, it is a Simple sentence." 
    },

    // 61-70: Compound Sentences (FANBOYS)
    { 
      question: "What type of sentence is this? 'I like tea, but he likes coffee.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Compound", 
      explanation: "Rule: Compound Sentence Definition. It joins two independent clauses ('I like tea' + 'he likes coffee') using a coordinating conjunction ('but')." 
    },
    { 
      question: "What type of sentence is this? 'She cooked, and he cleaned.'", 
      options: ["Simple", "Compound", "Complex", "Simple"], 
      answer: "Compound", 
      explanation: "Rule: FANBOYS. The word 'and' connects two complete sentences ('She cooked' / 'he cleaned'). This makes it Compound." 
    },
    { 
      question: "Identify the Compound Sentence:", 
      options: ["I run fast.", "I run, so I am tired.", "I run because I like it.", "Running is fun."], 
      answer: "I run, so I am tired.", 
      explanation: "Rule: Identifying Coordinators. 'So' is a FANBOYS conjunction that connects cause ('I run') and effect ('I am tired'). This creates a Compound sentence." 
    },
    { 
      question: "What type of sentence? 'You can stay, or you can go.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Compound", 
      explanation: "Rule: Coordinator 'Or'. Since 'You can stay' and 'you can go' are both independent clauses joined by 'or', it is Compound." 
    },
    { 
      question: "What type of sentence? 'He was tired, yet he kept working.'", 
      options: ["Simple", "Compound", "Complex", "Run-on"], 
      answer: "Compound", 
      explanation: "Rule: Coordinator 'Yet'. 'Yet' functions like 'but' here, joining two complete contrasting thoughts. Thus, Compound." 
    },
    { 
      question: "Which word makes this compound? 'It rained, ____ we stayed home.'", 
      options: ["so", "because", "if", "when"], 
      answer: "so", 
      explanation: "Rule: FANBOYS vs Subordinators. 'So' is the only option that is a Coordinating Conjunction (FANBOYS). The others create Complex sentences." 
    },
    { 
      question: "What type of sentence? 'I wanted to go; however, I was too busy.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Compound", 
      explanation: "Rule: Semicolons in Compound Sentences. Two independent clauses can be joined by a semicolon (;) and a conjunctive adverb ('however'). This structure is Compound." 
    },
    { 
      question: "What type of sentence? 'The car broke down; we walked home.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Compound", 
      explanation: "Rule: Semicolon Usage. A semicolon alone can join two related independent clauses. Since both parts stand alone, it is Compound." 
    },
    { 
      question: "What type of sentence? 'She is smart, for she reads a lot.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Compound", 
      explanation: "Rule: Coordinator 'For'. Here, 'for' means 'because'. Since it acts as a coordinating conjunction joining two clauses, the sentence is Compound." 
    },
    { 
      question: "Identify the Compound Sentence:", 
      options: ["While I slept, he worked.", "I slept, and he worked.", "I slept because he worked.", "I sleeping and working."], 
      answer: "I slept, and he worked.", 
      explanation: "Rule: Connector Types. 'While' and 'because' create Complex sentences. 'And' creates a Compound sentence by joining two equal clauses." 
    },

    // 71-80: Complex Sentences (Subordinating Conjunctions)
    { 
      question: "What type of sentence is this? 'When the bell rings, you can go.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Complex", 
      explanation: "Rule: Complex Sentence Definition. A complex sentence has one independent clause ('you can go') and at least one dependent clause ('When the bell rings')." 
    },
    { 
      question: "What type of sentence is this? 'I will help you if you ask.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Complex", 
      explanation: "Rule: Conditionals as Complex Sentences. 'If you ask' is a dependent clause (condition). 'I will help you' is independent. Thus, Complex." 
    },
    { 
      question: "Identify the Complex Sentence:", 
      options: ["I like cats, but I hate dogs.", "I like cats because they are cute.", "I like cats and dogs.", "I like cats."], 
      answer: "I like cats because they are cute.", 
      explanation: "Rule: Subordinators. 'Because' introduces a dependent clause. This dependency makes the sentence Complex. (Option A is Compound)." 
    },
    { 
      question: "What type of sentence? 'Although it rained, we played soccer.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Complex", 
      explanation: "Rule: Concession Clauses. 'Although' is a subordinating conjunction. 'Although it rained' cannot stand alone, making the sentence Complex." 
    },
    { 
      question: "What type of sentence? 'The man who called is my uncle.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Complex", 
      explanation: "Rule: Relative Clauses. The clause 'who called' describes 'The man'. Relative clauses are dependent clauses, so the sentence is Complex." 
    },
    { 
      question: "What type of sentence? 'Since you are here, please help.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Complex", 
      explanation: "Rule: Subordinator 'Since'. The sentence starts with a dependent clause ('Since you are here'), attached to a main command ('please help'). It is Complex." 
    },
    { 
      question: "What type of sentence? 'We ate before we left.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Complex", 
      explanation: "Rule: Time Clauses. 'Before we left' is a dependent time clause modifying 'ate'. One Indep + One Dep = Complex." 
    },
    { 
      question: "Which word makes this complex? '____ it was cold, we went out.'", 
      options: ["Although", "But", "And", "So"], 
      answer: "Although", 
      explanation: "Rule: Choosing Connectors. 'But', 'And', and 'So' are coordinating conjunctions (Compound). 'Although' is subordinating, creating a Complex sentence." 
    },
    { 
      question: "What type of sentence? 'She is the one that I told you about.'", 
      options: ["Simple", "Compound", "Complex", "Fragment"], 
      answer: "Complex", 
      explanation: "Rule: Relative Clause 'That'. The clause 'that I told you about' depends on the main clause to identify 'the one'. Thus, Complex." 
    },
    { 
      question: "Identify the Complex Sentence:", 
      options: ["He ran fast.", "He ran, and he won.", "He ran until he dropped.", "He ran fast and won."], 
      answer: "He ran until he dropped.", 
      explanation: "Rule: 'Until'. 'Until he dropped' is a dependent clause of time. Option B is Compound ('and'). Option C uses a subordinator, making it Complex." 
    },

    // 81-90: Compound-Complex Sentences
    { 
      question: "What type of sentence is this? 'When the music stopped, she sat down, and everyone clapped.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Compound-Complex Components. It has one dependent clause ('When the music stopped') AND two independent clauses ('she sat down', 'everyone clapped')." 
    },
    { 
      question: "Structure Analysis: 'I wanted to go, but I stayed home because I was sick.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Analyzing Clauses. 'I wanted to go' (Indep) + 'but' + 'I stayed home' (Indep) + 'because I was sick' (Dep). Two Indep + One Dep = Compound-Complex." 
    },
    { 
      question: "What type of sentence? 'If you study, you will pass, and you will be happy.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Mix of Structures. 'If you study' (Dep) + 'you will pass' (Indep) + 'and' + 'you will be happy' (Indep). Compound-Complex." 
    },
    { 
      question: "What type of sentence? 'He left because he was angry, so I didn't see him.'", 
      options: ["Compound", "Complex", "Compound-Complex", "Simple"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Clause Breakdown. 'He left' (Indep) + 'because he was angry' (Dep) + 'so I didn't see him' (Indep). Contains both subordination and coordination." 
    },
    { 
      question: "Identify the Compound-Complex sentence:", 
      options: ["I like dogs.", "I like dogs, and they like me.", "I like dogs because they are loyal.", "I like dogs because they are loyal, and they like me."], 
      answer: "I like dogs because they are loyal, and they like me.", 
      explanation: "Rule: Formula. Compound-Complex = At least 2 Main Clauses + At least 1 Dependent Clause. Only the last option fits this formula." 
    },
    { 
      question: "What type of sentence? 'Though he was rich, he was unhappy, yet he never complained.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Structure. 'Though he was rich' (Dep) starts the sentence. 'He was unhappy' (Indep) and 'he never complained' (Indep) follow, joined by 'yet'." 
    },
    { 
      question: "What type of sentence? 'The sun shone, and the birds sang as we walked.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Structure. 'The sun shone' (Indep) + 'and' + 'the birds sang' (Indep) + 'as we walked' (Dep). Matches Compound-Complex." 
    },
    { 
      question: "Structure: 'Before the movie started, we bought popcorn, and we found our seats.'", 
      options: ["Compound-Complex", "Complex", "Compound", "Simple"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Structure. 'Before the movie started' (Dep). 'We bought popcorn' (Indep). 'We found our seats' (Indep). This is Compound-Complex." 
    },
    { 
      question: "What type of sentence? 'I don't know where he is, but I hope he is safe.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Embedded Clauses. 'Where he is' is a dependent noun clause. 'I don't know [it]' is independent. 'I hope [that] he is safe' is another independent clause structure. Thus, Compound-Complex." 
    },
    { 
      question: "Identify the type: 'Because I love you, I will help you, or I will find someone who can.'", 
      options: ["Simple", "Compound", "Complex", "Compound-Complex"], 
      answer: "Compound-Complex", 
      explanation: "Rule: Complexity. Starts with Dep clause ('Because...'). Followed by two Indep clauses ('I will help', 'I will find') joined by 'or'. Compound-Complex." 
    },

    // 91-100: Sentence Fragments (Errors)
    { 
      question: "Is this a sentence or a fragment? 'Because I was tired.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Fragment", 
      explanation: "Rule: Fragment (Dependent Clause). A clause starting with a subordinator like 'Because' cannot stand alone. It needs a main clause to be complete." 
    },
    { 
      question: "Is this a sentence or a fragment? 'The boy in the car.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Fragment", 
      explanation: "Rule: Fragment (Missing Verb). This phrase has a subject ('The boy'), but it doesn't tell us what the boy is doing or being. It lacks a predicate." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Running down the street.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Fragment", 
      explanation: "Rule: Fragment (Participial Phrase). 'Running' is an action, but there is no subject performing it and no helping verb. It's just a phrase." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Wait.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Sentence", 
      explanation: "Rule: Imperative Sentence. Even though it is one word, 'Wait' is a complete sentence because the subject '(You)' is implied." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Which is why I left.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Fragment", 
      explanation: "Rule: Fragment (Relative Clause). 'Which' connects to a previous thought. On its own, 'Which is why I left' does not express a complete, independent idea." 
    },
    { 
      question: "Is this a sentence or a fragment? 'For example, the dog.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Fragment", 
      explanation: "Rule: Fragment (Phrase). This is a transitional phrase followed by a noun. It lacks a verb and a complete thought." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Even though he tried.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Fragment", 
      explanation: "Rule: Fragment (Subordinate Clause). 'Even though' implies a contrast with a main idea. Without the main idea, the thought is incomplete." 
    },
    { 
      question: "Is this a sentence or a fragment? 'John worked.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Sentence", 
      explanation: "Rule: Complete Sentence. It has a subject ('John') and a verb ('worked'). It expresses a complete thought, however short." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Such as apples and oranges.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Fragment", 
      explanation: "Rule: Fragment (List/Phrase). 'Such as' introduces examples but does not form a complete sentence with a subject and verb." 
    },
    { 
      question: "Is this a sentence or a fragment? 'Having finished the work.'", 
      options: ["Sentence", "Fragment"], 
      answer: "Fragment", 
      explanation: "Rule: Fragment (Participial Phrase). This describes a person (who finished the work), but the sentence stops before mentioning that person or what they did next." 
    }
  ],

  advanced: [
    // 101-110: Run-on Sentences and Comma Splices
    { 
      question: "Identify the error: 'I love summer it is warm.'", 
      options: ["Fragment", "Run-on", "Correct"], 
      answer: "Run-on", 
      explanation: "Rule: Fused Sentence (Run-on). Two independent clauses ('I love summer' / 'it is warm') are stuck together with NO punctuation. This is a grammar error." 
    },
    { 
      question: "Identify the error: 'I love summer, it is warm.'", 
      options: ["Fragment", "Comma Splice", "Correct"], 
      answer: "Comma Splice", 
      explanation: "Rule: Comma Splice. A comma is too 'weak' to join two independent clauses by itself. You need a period, a semicolon, or a conjunction." 
    },
    { 
      question: "How to fix: 'It rained, we stayed home.'", 
      options: ["It rained we stayed home.", "It rained; we stayed home.", "It rained, we stayed home.", "Rained we stayed."], 
      answer: "It rained; we stayed home.", 
      explanation: "Rule: Fixing Splices. Use a semicolon (;) to join two closely related independent clauses without a conjunction." 
    },
    { 
      question: "Is this correct? 'He ran fast, however he lost.'", 
      options: ["Yes", "No"], 
      answer: "No", 
      explanation: "Rule: Conjunctive Adverbs. 'However' is not a conjunction like 'but'. It requires a semicolon before it and a comma after it (; however,) to connect clauses." 
    },
    { 
      question: "Is this correct? 'He ran fast; however, he lost.'", 
      options: ["Yes", "No"], 
      answer: "Yes", 
      explanation: "Rule: Correct Punctuation. The semicolon separates the clauses, and the comma follows the transition word 'however'. This is correct." 
    },
    { 
      question: "Identify the error: 'The car stopped the engine died.'", 
      options: ["Fragment", "Run-on", "Correct"], 
      answer: "Run-on", 
      explanation: "Rule: Run-on. Two thoughts ('The car stopped' and 'the engine died') run into each other without punctuation." 
    },
    { 
      question: "Which sentence is punctuated correctly?", 
      options: ["I like tea I like coffee.", "I like tea, I like coffee.", "I like tea; I like coffee.", "I like tea, coffee."], 
      answer: "I like tea; I like coffee.", 
      explanation: "Rule: Semicolon Usage. 'I like tea' and 'I like coffee' are independent sentences. A semicolon is a grammatically correct way to join them." 
    },
    { 
      question: "Fix the run-on: 'She is smart she studies hard.'", 
      options: ["She is smart, she studies hard.", "She is smart because she studies hard.", "She is smart she studies.", "Smart she studies."], 
      answer: "She is smart because she studies hard.", 
      explanation: "Rule: Subordination. By adding 'because', you turn the second clause into a dependent clause. This creates a correct Complex sentence." 
    },
    { 
      question: "Is this a run-on? 'I went to the store and bought milk.'", 
      options: ["Yes", "No"], 
      answer: "No", 
      explanation: "Rule: Compound Verb. This is NOT a run-on. One subject ('I') performs two actions ('went' and 'bought'). No comma is needed." 
    },
    { 
      question: "Is this a run-on? 'I went to the store, and I bought milk.'", 
      options: ["Yes", "No"], 
      answer: "No", 
      explanation: "Rule: Compound Sentence. This is NOT a run-on because the two clauses are correctly joined by a comma and the conjunction 'and'." 
    },

    // 111-120: Clause Functions (Noun, Adjective, Adverb)
    { 
      question: "What is the function of the capitalized clause? 'I know WHAT YOU DID.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Noun Clause", 
      explanation: "Rule: Noun Clauses. The clause 'what you did' acts as the direct object of the verb 'know'. Only nouns (or noun clauses) act as objects." 
    },
    { 
      question: "Function of clause: 'The man WHO IS STANDING THERE is my dad.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Adjective Clause", 
      explanation: "Rule: Adjective Clauses. The clause describes 'The man'. Since it modifies a noun, it functions as an adjective." 
    },
    { 
      question: "Function of clause: 'I will go WHEREVER YOU GO.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Adverb Clause", 
      explanation: "Rule: Adverb Clauses. The clause modifies the verb 'go' by telling *where*. Modifying a verb is the job of an adverb." 
    },
    { 
      question: "Function of clause: 'THAT HE LIED is surprising.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Noun Clause", 
      explanation: "Rule: Noun Clause as Subject. The entire clause 'That he lied' is the Subject of the sentence. Therefore, it is a Noun Clause." 
    },
    { 
      question: "Function of clause: 'This is the house THAT JACK BUILT.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Adjective Clause", 
      explanation: "Rule: Adjective Clause. 'That Jack built' tells us *which* house. It modifies the noun 'house'." 
    },
    { 
      question: "Function of clause: 'BECAUSE IT WAS LATE, we left.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Adverb Clause", 
      explanation: "Rule: Adverb Clause of Reason. The clause tells *why* we left. It modifies the action 'left'." 
    },
    { 
      question: "Function of clause: 'I wonder IF IT WILL RAIN.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Noun Clause", 
      explanation: "Rule: Noun Clause as Object. 'If it will rain' is the thing being wondered about. It is the direct object of 'wonder'." 
    },
    { 
      question: "Function of clause: 'The time WHEN WE MET was magical.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Adjective Clause", 
      explanation: "Rule: Adjective Clause. The clause modifies the noun 'time'. It tells us *which* time." 
    },
    { 
      question: "Function of clause: 'He acts AS IF HE IS RICH.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Adverb Clause", 
      explanation: "Rule: Adverb Clause of Manner. The clause describes *how* he acts. Modifying the verb 'acts' makes it an Adverb Clause." 
    },
    { 
      question: "Function of clause: 'Give it to WHOEVER WANTS IT.'", 
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], 
      answer: "Noun Clause", 
      explanation: "Rule: Noun Clause as Object of Preposition. The entire clause 'whoever wants it' acts as the object of the preposition 'to'." 
    },

    // 121-130: Restrictive vs Non-Restrictive Clauses
    { 
      question: "Which sentence needs commas?", 
      options: ["My brother who lives in Paris is visiting.", "My brother John who lives in Paris is visiting."], 
      answer: "My brother John who lives in Paris is visiting.", 
      explanation: "Rule: Non-Restrictive Appositives. If you say 'My brother John', you have already identified him by name. The clause 'who lives in Paris' becomes extra information, so it requires commas." 
    },
    { 
      question: "Correct punctuation: 'The car, which is red, is mine.'", 
      options: ["Correct", "Incorrect"], 
      answer: "Correct", 
      explanation: "Rule: 'Which' Clauses. In US grammar, 'which' typically introduces non-restrictive (non-essential) clauses, which must be set off by commas." 
    },
    { 
      question: "Correct punctuation: 'The car that is red is mine.'", 
      options: ["Correct", "Incorrect"], 
      answer: "Correct", 
      explanation: "Rule: 'That' Clauses. 'That' introduces restrictive (essential) clauses. No commas are used because the clause is needed to identify the car." 
    },
    { 
      question: "Choose the essential clause sentence:", 
      options: ["The players, who are tired, can rest.", "The players who are tired can rest."], 
      answer: "The players who are tired can rest.", 
      explanation: "Rule: Essential (Restrictive) Meaning. The second sentence means ONLY the tired players can rest. The first sentence implies ALL players are tired." 
    },
    { 
      question: "Choose the non-essential clause sentence:", 
      options: ["My mom, who is a nurse, is kind.", "My mom who is a nurse is kind."], 
      answer: "My mom, who is a nurse, is kind.", 
      explanation: "Rule: Unique Subjects. Since you only have one mom, identifying her is not necessary. The clause 'who is a nurse' is extra info, so use commas." 
    },
    { 
      question: "Rule check: 'Which' uses commas, 'That' does not.", 
      options: ["True", "False"], 
      answer: "True", 
      explanation: "Rule: Relative Pronoun Usage. Generally, 'which' is for non-defining clauses (with commas) and 'that' is for defining clauses (no commas)." 
    },
    { 
      question: "Is the clause restrictive? 'Students who study pass.'", 
      options: ["Yes", "No"], 
      answer: "Yes", 
      explanation: "Rule: Restrictive Logic. We are not talking about ALL students, only the subset 'who study'. The clause restricts the meaning." 
    },
    { 
      question: "Is the clause restrictive? 'Mr. Smith, who is 50, retired.'", 
      options: ["Yes", "No"], 
      answer: "No", 
      explanation: "Rule: Proper Nouns. Mr. Smith is already a specific person. His age is just extra detail, so the clause is non-restrictive." 
    },
    { 
      question: "Punctuate: 'Paris which is in France is beautiful.'", 
      options: ["Paris, which is in France, is beautiful.", "Paris which is in France is beautiful."], 
      answer: "Paris, which is in France, is beautiful.", 
      explanation: "Rule: Non-Restrictive Proper Noun. Everyone knows where Paris is. The clause 'which is in France' adds nothing to the identification, so it needs commas." 
    },
    { 
      question: "Punctuate: 'The book that I read was good.'", 
      options: ["The book, that I read, was good.", "The book that I read was good."], 
      answer: "The book that I read was good.", 
      explanation: "Rule: Restrictive 'That'. The clause 'that I read' tells us WHICH book. It is essential, so no commas." 
    },

    // 131-140: Dangling and Misplaced Modifiers
    { 
      question: "Identify the error: 'Walking down the street, the trees looked scary.'", 
      options: ["Run-on", "Dangling Modifier", "Fragment"], 
      answer: "Dangling Modifier", 
      explanation: "Rule: Dangling Modifier. The phrase 'Walking down the street' implies an action. The subject immediately following it ('the trees') must be the one doing the walking. Trees don't walk, so the modifier dangles." 
    },
    { 
      question: "Fix the error: 'Walking down the street, the trees looked scary.'", 
      options: ["Walking down the street, I thought the trees looked scary.", "The trees looked scary walking down the street.", "Walking down the street, trees were scary.", "Scary trees walking down the street."], 
      answer: "Walking down the street, I thought the trees looked scary.", 
      explanation: "Rule: Logical Subject. We fix the error by inserting 'I' as the subject. 'Walking down the street, I...' makes sense because 'I' can walk." 
    },
    { 
      question: "Identify the correct structure:", 
      options: ["She served cake to the kids on paper plates.", "She served cake on paper plates to the kids."], 
      answer: "She served cake on paper plates to the kids.", 
      explanation: "Rule: Misplaced Modifier. In the first sentence, 'on paper plates' is next to 'kids', implying the kids are sitting on plates. Moving the phrase next to 'cake' fixes the meaning." 
    },
    { 
      question: "Identify the error: 'To receive a degree, studying is necessary.'", 
      options: ["Dangling Modifier", "Run-on"], 
      answer: "Dangling Modifier", 
      explanation: "Rule: Dangling Infinitive. 'To receive a degree' is an action/goal. 'Studying' cannot receive a degree. A person must be the subject." 
    },
    { 
      question: "Fix the error: 'To receive a degree, studying is necessary.'", 
      options: ["To receive a degree, one must study.", "Studying is necessary to receive a degree.", "To receive a degree, studying.", "Degree received by studying."], 
      answer: "To receive a degree, one must study.", 
      explanation: "Rule: Inserting Subject. By changing the subject to 'one' (or a student), the opening phrase 'To receive a degree' logically applies to that subject." 
    },
    { 
      question: "Identify the correct structure:", 
      options: ["I saw a dog with three legs.", "I saw a dog driving my car with three legs."], 
      answer: "I saw a dog with three legs.", 
      explanation: "Rule: Modifier Placement. The first sentence places 'with three legs' next to 'dog', which is logical. The second sentence makes it sound like the car has three legs or the driving is done with legs." 
    },
    { 
      question: "Identify the error: 'Covered in sauce, I ate the pasta.'", 
      options: ["Dangling Modifier", "Correct"], 
      answer: "Dangling Modifier", 
      explanation: "Rule: Dangling Participle. The modifier 'Covered in sauce' is placed next to 'I'. This implies the speaker is covered in sauce, not the pasta." 
    },
    { 
      question: "Fix: 'Covered in sauce, I ate the pasta.'", 
      options: ["I ate the pasta covered in sauce.", "Covered in sauce, the pasta ate me.", "I ate the pasta, covered in sauce.", "I ate the covered in sauce pasta."], 
      answer: "I ate the pasta covered in sauce.", 
      explanation: "Rule: Moving Modifier. By placing 'covered in sauce' directly after 'pasta', the description clearly applies to the food." 
    },
    { 
      question: "Identify the correct structure:", 
      options: ["He nearly drove for 5 hours.", "He drove for nearly 5 hours."], 
      answer: "He drove for nearly 5 hours.", 
      explanation: "Rule: Limiting Modifiers. 'Nearly' modifies the word next to it. 'Nearly drove' means he almost started but didn't. 'Nearly 5 hours' means he drove for about 4 hours and 50 minutes." 
    },
    { 
      question: "Identify the correct structure:", 
      options: ["Eaten by mosquitoes, we left the park.", "We left the park eaten by mosquitoes."], 
      answer: "Eaten by mosquitoes, we left the park.", 
      explanation: "Rule: Participial Phrase. 'Eaten by mosquitoes' describes a state. It logically modifies 'We'. The second option implies the park was eaten." 
    },

    // 141-150: Appositives and Phrases
    { 
      question: "Identify the appositive: 'My brother, a dentist, is here.'", 
      options: ["My brother", "a dentist", "is here", "here"], 
      answer: "a dentist", 
      explanation: "Rule: Appositive Definition. An appositive is a noun or noun phrase that renames another noun right beside it. 'A dentist' renames 'My brother'." 
    },
    { 
      question: "Punctuate: 'The insect a cockroach crawled away.'", 
      options: ["The insect, a cockroach, crawled away.", "The insect a cockroach, crawled away."], 
      answer: "The insect, a cockroach, crawled away.", 
      explanation: "Rule: Punctuation of Appositives. 'A cockroach' provides extra info about 'The insect'. It is non-essential, so it should be enclosed in commas." 
    },
    { 
      question: "Identify the appositive: 'Edison, the inventor, was smart.'", 
      options: ["Edison", "the inventor", "was smart", "smart"], 
      answer: "the inventor", 
      explanation: "Rule: Renaming Nouns. 'The inventor' is the appositive because it renames the proper noun 'Edison'." 
    },
    { 
      question: "Is the appositive essential? 'My friend Bob is here.' (I have many friends)", 
      options: ["Yes", "No"], 
      answer: "Yes", 
      explanation: "Rule: Restrictive Appositive. Because you have many friends, the name 'Bob' is necessary to identify WHICH friend. Therefore, it is essential (no commas)." 
    },
    { 
      question: "Identify the phrase type: 'To run fast is hard.'", 
      options: ["Infinitive Phrase", "Gerund Phrase", "Prepositional Phrase"], 
      answer: "Infinitive Phrase", 
      explanation: "Rule: Infinitive Phrase. A phrase starting with 'To' + Verb (To run) is an infinitive phrase." 
    },
    { 
      question: "Identify the phrase type: 'Running is fun.'", 
      options: ["Infinitive Phrase", "Gerund Phrase", "Appositive"], 
      answer: "Gerund Phrase", 
      explanation: "Rule: Gerund Phrase. A verb ending in -ing that functions as a noun ('Running') starts a gerund phrase." 
    },
    { 
      question: "Identify the phrase type: 'The dog, lost and hungry, cried.'", 
      options: ["Adjective Phrase", "Noun Phrase", "Verb Phrase"], 
      answer: "Adjective Phrase", 
      explanation: "Rule: Adjective Phrase. The phrase 'lost and hungry' describes the noun 'dog', functioning as an adjective." 
    },
    { 
      question: "Identify the phrase type: 'He wants to go home.'", 
      options: ["Infinitive Phrase", "Prepositional Phrase", "Participial Phrase"], 
      answer: "Infinitive Phrase", 
      explanation: "Rule: Object Function. 'To go home' is an infinitive phrase acting as the direct object of 'wants'." 
    },
    { 
      question: "Identify the phrase type: 'Driven by hunger, he stole.'", 
      options: ["Participial Phrase", "Gerund Phrase", "Infinitive Phrase"], 
      answer: "Participial Phrase", 
      explanation: "Rule: Participial Phrase. It starts with a past participle ('Driven') and acts as an adjective modifying 'he'." 
    },
    { 
      question: "Combine using an appositive: 'John is a teacher. He is nice.'", 
      options: ["John, a teacher, is nice.", "John is a nice teacher.", "John the teacher nice.", "A teacher is John nice."], 
      answer: "John, a teacher, is nice.", 
      explanation: "Rule: Appositive Construction. We take the noun phrase 'a teacher' and place it directly after 'John' inside commas to combine the sentences efficiently." 
    }
  ],

  expert: [
    // 151-160: Parallelism (Lists and Correlatives)
    { 
      question: "Choose the parallel sentence:", 
      options: ["I like running, swimming, and to hike.", "I like running, swimming, and hiking.", "I like to run, swimming, and hiking.", "I like running, to swim, and hike."], 
      answer: "I like running, swimming, and hiking.", 
      explanation: "Rule: Parallel Structure in Lists. All items in a list must share the same grammatical form. Here, they are all gerunds: running, swimming, hiking." 
    },
    { 
      question: "Choose the parallel sentence:", 
      options: ["She is smart, funny, and has kindness.", "She is smart, funny, and kind.", "She is smart, fun, and kindness.", "She is smart, funny, and a kind person."], 
      answer: "She is smart, funny, and kind.", 
      explanation: "Rule: Parallel Adjectives. The list contains adjectives describing 'She'. 'Smart' (adj), 'funny' (adj), and 'kind' (adj). 'Kindness' is a noun, breaking the pattern." 
    },
    { 
      question: "Choose the parallel sentence:", 
      options: ["He wants to travel and to learn.", "He wants to travel and learning.", "He wants traveling and to learn.", "He wants travel and learn."], 
      answer: "He wants to travel and to learn.", 
      explanation: "Rule: Parallel Infinitives. The structure is 'He wants [to verb]'. Both items must be infinitives: 'to travel' and 'to learn'." 
    },
    { 
      question: "Choose the parallel sentence:", 
      options: ["Not only is he rich, but he is also famous.", "Not only is he rich, but also famous.", "Not only he is rich, but he is also famous.", "Not only rich, but he is famous."], 
      answer: "Not only is he rich, but he is also famous.", 
      explanation: "Rule: Correlative Conjunction Balance. 'Not only' should follow the same structure as 'but also'. Here, we balance clauses: 'is he rich' (inverted) and 'he is also famous'. Or phrases: 'Not only rich but also famous'." 
    },
    { 
      question: "Fix the structure: 'She likes cooking, jogging, and to read.'", 
      options: ["She likes cooking, jogging, and reading.", "She likes to cook, jog, and reading.", "She likes cooking, to jog, and reading.", "She likes cook, jog, read."], 
      answer: "She likes cooking, jogging, and reading.", 
      explanation: "Rule: Fixing Faulty Parallelism. The first two items are gerunds (cooking, jogging). The third must also be a gerund (reading)." 
    },
    { 
      question: "Choose the parallel sentence:", 
      options: ["The movie was long, boring, and it was loud.", "The movie was long, boring, and loud.", "The movie was long, boring, and loudly.", "The movie was length, boredom, and loud."], 
      answer: "The movie was long, boring, and loud.", 
      explanation: "Rule: Parallel Adjectives. The sentence lists qualities of the movie. 'Long', 'boring', and 'loud' are all adjectives." 
    },
    { 
      question: "Choose the parallel sentence:", 
      options: ["You can go by bus or by train.", "You can go by bus or train.", "You can go by bus or on a train.", "Both A and B."], 
      answer: "Both A and B.", 
      explanation: "Rule: Preposition Parallelism. You can repeat the preposition ('by bus or by train') or let the first one cover both ('by bus or train'). Both are correct." 
    },
    { 
      question: "Choose the parallel sentence:", 
      options: ["To think is to be.", "Thinking is to be.", "To think is being.", "Thought is being."], 
      answer: "To think is to be.", 
      explanation: "Rule: Balancing Subject and Complement. If the subject is an infinitive ('To think'), the subject complement should also be an infinitive ('to be')." 
    },
    { 
      question: "Choose the parallel sentence:", 
      options: ["He spoke clearly and with confidence.", "He spoke clearly and confidently.", "He spoke clear and confident.", "He spoke clearly and confident."], 
      answer: "He spoke clearly and confidently.", 
      explanation: "Rule: Parallel Adverbs. 'Clearly' is an adverb ending in -ly. The parallel match is 'confidently', another adverb ending in -ly." 
    },
    { 
      question: "Choose the parallel sentence:", 
      options: ["The teacher told them to sit down and listen.", "The teacher told them to sit down and to listen.", "Both are correct.", "None."], 
      answer: "Both are correct.", 
      explanation: "Rule: Ellipsis in Parallelism. When using infinitives in a list ('to sit'), you can repeat the 'to' ('to listen') or omit it ('listen'). Both styles are grammatically acceptable." 
    },

    // 161-170: Inverted Sentence Structures
    { 
      question: "Identify the structure: 'Never have I seen such a sight.'", 
      options: ["Standard", "Inverted"], 
      answer: "Inverted", 
      explanation: "Rule: Negative Inversion. When a sentence begins with a negative adverb (Never), the subject and auxiliary verb swap places ('have I' instead of 'I have')." 
    },
    { 
      question: "Identify the structure: 'Into the room walked the teacher.'", 
      options: ["Standard", "Inverted"], 
      answer: "Inverted", 
      explanation: "Rule: Locative Inversion. When placing a location phrase ('Into the room') at the start for emphasis, the verb ('walked') often comes before the subject ('the teacher')." 
    },
    { 
      question: "Rewrite normally: 'Rarely do we eat out.'", 
      options: ["We rarely eat out.", "We do rarely eat out.", "Rarely we eat out.", "We eat out rarely do."], 
      answer: "We rarely eat out.", 
      explanation: "Rule: Standard Word Order. The normal order is Subject ('We') + Adverb ('rarely') + Verb ('eat out'). Inversion is for emphasis." 
    },
    { 
      question: "Choose the correct inversion:", 
      options: ["Seldom he sleeps.", "Seldom does he sleep.", "Seldom sleeps he.", "Seldom he does sleep."], 
      answer: "Seldom does he sleep.", 
      explanation: "Rule: Auxiliary Inversion. With negative adverbs like 'Seldom', we must use an auxiliary verb ('does') before the subject ('he')." 
    },
    { 
      question: "Choose the correct inversion:", 
      options: ["Little did he know.", "Little he knew.", "Little known he.", "Little did he knew."], 
      answer: "Little did he know.", 
      explanation: "Rule: Inversion with 'Little'. 'Little' (meaning 'not much') triggers inversion. We add 'did' for the past tense. Base verb 'know' follows 'did'." 
    },
    { 
      question: "Choose the correct inversion:", 
      options: ["Had I known, I would have come.", "Have I known, I would have come.", "Did I know, I would come.", "Had I knew, I would come."], 
      answer: "Had I known, I would have come.", 
      explanation: "Rule: Conditional Inversion (3rd). Instead of 'If I had known', we can drop 'If' and invert the auxiliary 'Had' and subject 'I'." 
    },
    { 
      question: "Choose the correct inversion:", 
      options: ["Here comes the bus.", "Here the bus comes.", "Comes here the bus.", "Bus comes here."], 
      answer: "Here comes the bus.", 
      explanation: "Rule: Inversion with 'Here/There'. When the subject is a noun ('the bus'), the verb usually comes before it after 'Here'." 
    },
    { 
      question: "Choose the correct inversion:", 
      options: ["Here it comes.", "Here comes it.", "It comes here.", "Comes it here."], 
      answer: "Here it comes.", 
      explanation: "Rule: No Inversion with Pronouns. When the subject is a pronoun ('it'), we DO NOT invert after 'Here'. 'Here it comes' is correct." 
    },
    { 
      question: "Choose the correct inversion:", 
      options: ["Not only is she smart, but she is kind.", "Not only she is smart, but she is kind.", "Not only smart is she, but kind.", "Not only she smart, but kind."], 
      answer: "Not only is she smart, but she is kind.", 
      explanation: "Rule: Inversion with Correlatives. The first clause after 'Not only' must be inverted: 'is she smart' (Aux + Subject + Adj)." 
    },
    { 
      question: "Choose the correct inversion:", 
      options: ["On the hill stood a castle.", "On the hill a castle stood.", "Stood a castle on the hill.", "A castle on the hill stood."], 
      answer: "On the hill stood a castle.", 
      explanation: "Rule: Locative Inversion. To paint a picture, we put the place first ('On the hill'), then the verb ('stood'), then the subject ('a castle')." 
    },

    // 171-180: Cleft Sentences (It-clefts and Wh-clefts)
   { 
      question: "Identify the structure: 'All I want is you.'", 
      options: ["Simple", "Cleft Sentence", "Fragment"], 
      answer: "Cleft Sentence", 
      explanation: "Rule: Wh-Cleft Variation. 'All I want' functions like 'What I want'. This structure emphasizes the object 'you'." 
    },
    { 
      question: "Rewrite for emphasis: 'I saw him yesterday.'", 
      options: ["It was yesterday that I saw him.", "Yesterday I saw him.", "I saw him was yesterday.", "Him I saw yesterday."], 
      answer: "It was yesterday that I saw him.", 
      explanation: "Rule: It-Cleft Time Emphasis. We emphasize the time 'yesterday'. Structure: 'It was' + [yesterday] + 'that' + [I saw him]." 
    },
    { 
      question: "Choose the correct cleft: 'What I enjoy is reading.'", 
      options: ["Correct", "Incorrect"], 
      answer: "Correct", 
      explanation: "Rule: Wh-Cleft Structure. This correctly emphasizes the activity 'reading'. The pattern 'What + subject + verb + is + emphasized element' is proper." 
    },
    { 
      question: "Choose the correct cleft: 'It was the dog that barked.'", 
      options: ["Correct", "Incorrect"], 
      answer: "Correct", 
      explanation: "Rule: It-Cleft with 'That'. Both 'who' (for people) and 'that' (for things/animals) are acceptable in informal English for it-clefts." 
    },
    { 
      question: "Rewrite for emphasis: 'The problem is the cost.'", 
      options: ["What the problem is is the cost.", "The cost is the problem.", "It is the cost that is the problem.", "Both B and C."], 
      answer: "Both B and C.", 
      explanation: "Rule: Multiple Emphasis Options. You can emphasize through word order ('The cost is the problem') or use an it-cleft ('It is the cost that is the problem'). Both work." 
    },

    // 181-190: Ellipsis and Substitution
    { 
      question: "Identify the ellipsis: 'John can play piano; Mary can, too.'", 
      options: ["play piano", "Mary", "can", "too"], 
      answer: "play piano", 
      explanation: "Rule: Verb Phrase Ellipsis. After 'can', the words 'play piano' are omitted but understood from the previous clause. The full form would be 'Mary can play piano, too.'" 
    },
    { 
      question: "Complete the ellipsis: 'I like coffee, and she does ___ .'", 
      options: ["like", "too", "so", "as well"], 
      answer: "too", 
      explanation: "Rule: Ellipsis with 'do'. The verb 'like' is omitted. We use 'too', 'so', or 'as well' to indicate the same action. 'She does too' = 'She likes coffee too.'" 
    },
    { 
      question: "Identify the substitution: 'This car is old; I want a new one.'", 
      options: ["car", "old", "one", "new"], 
      answer: "one", 
      explanation: "Rule: Substitution with 'One'. 'One' substitutes for 'car' to avoid repetition. We say 'a new one' instead of 'a new car'." 
    },
    { 
      question: "Choose the correct ellipsis: 'She works harder than he ___.'", 
      options: ["works", "does", "is", "do"], 
      answer: "does", 
      explanation: "Rule: Comparative Ellipsis. In comparisons, we use an auxiliary verb ('does') to stand in for the main verb ('works'). 'Than he does' = 'than he works'." 
    },
    { 
      question: "Identify the substitution: 'I might go, but if I do, I'll be late.'", 
      options: ["go", "might", "do", "but"], 
      answer: "do", 
      explanation: "Rule: 'Do' as Pro-form. 'Do' substitutes for the entire verb phrase 'go'. 'If I do' = 'If I go'." 
    },
    { 
      question: "Complete: 'He said he would call, and he ___ .'", 
      options: ["would", "did", "does", "will"], 
      answer: "did", 
      explanation: "Rule: Ellipsis in Reported Speech. 'Did' substitutes for 'called'. The full sentence is 'and he called'." 
    },
    { 
      question: "Identify the ellipsis: 'She can come tomorrow if she wants to ___ .'", 
      options: ["come", "tomorrow", "wants", "she"], 
      answer: "come", 
      explanation: "Rule: Infinitive Ellipsis. After 'wants to', the verb 'come' is omitted but understood. 'If she wants to' = 'If she wants to come'." 
    },
    { 
      question: "Choose the correct substitution: 'My phone is broken; I need to buy ___.'", 
      options: ["it", "one", "that", "this"], 
      answer: "one", 
      explanation: "Rule: 'One' for Indefinite Reference. When referring to a different item of the same type (not the same specific phone), we use 'one'." 
    },
    { 
      question: "Complete: 'Are you coming?' 'I think ___ .'", 
      options: ["yes", "so", "coming", "I"], 
      answer: "so", 
      explanation: "Rule: 'So' for Clause Substitution. 'I think so' = 'I think I am coming.' 'So' substitutes for the entire idea." 
    },
    { 
      question: "Identify the ellipsis: 'She plays guitar; he, violin.'", 
      options: ["plays", "she", "guitar", "he"], 
      answer: "plays", 
      explanation: "Rule: Gapping. In parallel structures, the verb can be omitted from the second clause. 'He, violin' = 'He plays violin'." 
    },

    // 191-200: Advanced Sentence Combining and Rhetorical Structures
    { 
      question: "Combine: 'The man is tired. He worked all day.'", 
      options: ["The man who worked all day is tired.", "The man is tired because he worked all day.", "Working all day, the man is tired.", "All of the above."], 
      answer: "All of the above.", 
      explanation: "Rule: Multiple Combination Methods. You can use a relative clause (A), a subordinating conjunction (B), or a participial phrase (C). All are grammatically correct." 
    },
    { 
      question: "Create a periodic sentence:", 
      options: ["After a long day at work, the tired man went home.", "The tired man went home after a long day at work.", "The man went home tired after work.", "Home went the tired man."], 
      answer: "After a long day at work, the tired man went home.", 
      explanation: "Rule: Periodic Sentence. A periodic sentence builds suspense by placing the main clause at the end. The core meaning 'the man went home' comes after the descriptive elements." 
    },
    { 
      question: "Identify the rhetorical structure: 'Ask not what your country can do for you...'", 
      options: ["Parallelism", "Chiasmus", "Anaphora", "Periodic"], 
      answer: "Chiasmus", 
      explanation: "Rule: Chiasmus. This is a reversal structure: 'ask not what your country can do for you — ask what you can do for your country'. The elements are reversed in the second half." 
    },
    { 
      question: "Combine for emphasis: 'He was poor. He was honest.'", 
      options: ["Though he was poor, he was honest.", "He was poor but honest.", "Despite his poverty, he maintained his honesty.", "All of the above."], 
      answer: "All of the above.", 
      explanation: "Rule: Contrast Combination. All options correctly show the contrast between poverty and honesty using different grammatical structures (subordination, coordination, and prepositional phrase)." 
    },
    { 
      question: "Create a balanced sentence: 'To err is human...'", 
      options: ["...to forgive is divine.", "...forgiving is divine.", "...divine is to forgive.", "...forgiveness is divine."], 
      answer: "...to forgive is divine.", 
      explanation: "Rule: Balanced Structure. The famous quote maintains parallel infinitive structure: 'To err is human, to forgive is divine.' Both halves use the same grammatical pattern." 
    },
    { 
      question: "Identify the structure: 'The bigger they are, the harder they fall.'", 
      options: ["Comparative Correlative", "Simple", "Complex", "Compound"], 
      answer: "Comparative Correlative", 
      explanation: "Rule: Comparative Correlative. This structure uses 'the + comparative... the + comparative' to show a proportional relationship between two things." 
    },
    { 
      question: "Combine using absolute phrase: 'The weather being perfect, ...'", 
      options: ["...we went for a picnic.", "...the picnic was fun.", "...a picnic we had.", "...perfect weather for picnic."], 
      answer: "...we went for a picnic.", 
      explanation: "Rule: Absolute Phrase Completion. An absolute phrase (noun + participle) must attach to an independent clause that it modifies. 'The weather being perfect' describes the circumstances of 'we went for a picnic'." 
    },
    { 
      question: "Create a cumulative sentence:", 
      options: ["He walked slowly, dragging his feet, looking at the ground.", "Slowly, dragging his feet, looking at the ground, he walked.", "Dragging his feet, he walked slowly, looking at the ground.", "All of the above."], 
      answer: "He walked slowly, dragging his feet, looking at the ground.", 
      explanation: "Rule: Cumulative Sentence. A cumulative sentence starts with the main clause ('He walked slowly') and accumulates descriptive phrases after it." 
    },
    { 
      question: "Identify the rhetorical device: 'We shall fight on the beaches, we shall fight on the landing grounds...'", 
      options: ["Anaphora", "Epistrophe", "Parallelism", "Both A and C"], 
      answer: "Both A and C", 
      explanation: "Rule: Anaphora and Parallelism. This uses anaphora (repetition at the beginning: 'we shall fight') AND parallelism (same grammatical structure repeated)." 
    },
    { 
      question: "Combine for sophistication: 'The storm ended. We surveyed the damage.'", 
      options: ["When the storm ended, we surveyed the damage.", "The storm having ended, we surveyed the damage.", "With the storm ended, we surveyed the damage.", "All of the above."], 
      answer: "All of the above.", 
      explanation: "Rule: Advanced Combination Techniques. All options show different ways to combine these ideas using subordination (A), absolute phrase (B), and prepositional phrase with past participle (C)." 
    }
  ]
};
