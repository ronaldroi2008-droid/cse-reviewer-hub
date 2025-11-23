const SENTENCE_STRUCTURE_QUESTIONS = {
  beginner: [
    // 1-10: Identifying the Subject
    { question: "Identify the subject: 'The enormous elephant slept.'", choices: ["The enormous elephant", "slept", "elephant slept", "enormous"], correctIndex: 0, explanation: "Rule: The Complete Subject includes the main noun (elephant) and all its modifiers (The enormous)." },
    { question: "Identify the subject: 'My sister and I went to the park.'", choices: ["My sister", "I", "My sister and I", "the park"], correctIndex: 2, explanation: "Rule: Compound Subject. When the sentence is about two people joined by 'and', both form the complete subject." },
    { question: "Identify the subject: 'Under the bed hid the cat.'", choices: ["Under the bed", "hid", "the cat", "bed"], correctIndex: 2, explanation: "Rule: Inverted Sentence. The subject is who or what is doing the action. The 'cat' is the one hiding." },
    { question: "Identify the subject: 'Shut the door.'", choices: ["The door", "Shut", "(You)", "No subject"], correctIndex: 2, explanation: "Rule: Imperative Sentences. In commands, the subject is the implied 'You'." },
    { question: "Identify the subject: 'Swimming is fun.'", choices: ["Swimming", "is", "fun", "is fun"], correctIndex: 0, explanation: "Rule: Gerund Subjects. A gerund (verb ending in -ing) can act as the noun subject of a sentence." },
    { question: "Identify the subject: 'Where is the library?'", choices: ["Where", "is", "the library", "library"], correctIndex: 2, explanation: "Rule: Questions. Turn the question into a statement ('The library is where') to find the subject." },
    { question: "Identify the subject: 'There are five apples.'", choices: ["There", "are", "five apples", "apples"], correctIndex: 2, explanation: "Rule: 'There' is never the subject. The subject comes after the verb in 'There are' sentences." },
    { question: "Identify the subject: 'The girl in the red dress waved.'", choices: ["The girl", "The girl in the red dress", "red dress", "waved"], correctIndex: 1, explanation: "Rule: Complete Subject. It includes the noun 'girl' and the prepositional phrase modifying it." },
    { question: "Identify the subject: 'Slowly, the old man stood up.'", choices: ["Slowly", "the old man", "man", "stood up"], correctIndex: 1, explanation: "Rule: The subject is the person performing the action (stood), regardless of the adverb at the start." },
    { question: "Identify the subject: 'Rain falls.'", choices: ["Rain", "falls", "Rain falls", "None"], correctIndex: 0, explanation: "Rule: Simple Subject. 'Rain' is the noun performing the verb 'falls'." },

    // 11-20: Identifying the Predicate (Verb Phrase)
    { question: "Identify the predicate: 'Birds fly.'", choices: ["Birds", "fly", "Birds fly", "None"], correctIndex: 1, explanation: "Rule: The predicate is the part of the sentence that tells what the subject does (fly)." },
    { question: "Identify the complete predicate: 'She reads books every night.'", choices: ["reads", "reads books", "reads books every night", "She"], correctIndex: 2, explanation: "Rule: Complete Predicate. It includes the verb (reads) and all the words that modify or complete it." },
    { question: "Identify the simple predicate (verb): 'The dog ran fast.'", choices: ["The dog", "ran", "fast", "ran fast"], correctIndex: 1, explanation: "Rule: Simple Predicate. It is just the main verb or verb phrase, without modifiers." },
    { question: "Identify the predicate: 'He has been working hard.'", choices: ["He", "has been working", "has been working hard", "working"], correctIndex: 2, explanation: "Rule: Complete Predicate. Includes the verb phrase 'has been working' and the adverb 'hard'." },
    { question: "Identify the verb phrase: 'I am going to school.'", choices: ["am", "going", "am going", "to school"], correctIndex: 2, explanation: "Rule: Verb Phrases. Includes the auxiliary verb (am) and the main participle (going)." },
    { question: "Identify the predicate: 'They are happy.'", choices: ["They", "are", "are happy", "happy"], correctIndex: 2, explanation: "Rule: Predicate with Linking Verb. Includes the verb 'are' and the adjective 'happy'." },
    { question: "Identify the predicate: 'The sun rises in the east.'", choices: ["The sun", "rises", "rises in the east", "in the east"], correctIndex: 2, explanation: "Rule: Complete Predicate. Everything that is not the subject is the predicate." },
    { question: "Identify the predicate: 'John and Mary swam.'", choices: ["John", "Mary", "John and Mary", "swam"], correctIndex: 3, explanation: "Rule: Simple Predicate. The action performed by the compound subject." },
    { question: "Identify the predicate: 'Always check your answers.'", choices: ["Always", "check", "check your answers", "Always check your answers"], correctIndex: 3, explanation: "Rule: Predicate in Commands. Since the subject is implied (You), the entire visible sentence is the predicate." },
    { question: "Identify the verb: 'He should have known better.'", choices: ["should", "have", "known", "should have known"], correctIndex: 3, explanation: "Rule: Complex Verb Phrase. Includes modals (should) and auxiliaries (have) plus the main verb (known)." },

    // 21-30: Identifying Direct Objects
    { question: "Identify the Direct Object: 'She ate an apple.'", choices: ["She", "ate", "an apple", "apple"], correctIndex: 2, explanation: "Rule: Direct Object. It receives the action of the verb. What did she eat? An apple." },
    { question: "Identify the Direct Object: 'He kicked the ball.'", choices: ["He", "kicked", "the ball", "ball"], correctIndex: 2, explanation: "Rule: Direct Object. Subject + Verb + What? (The ball)." },
    { question: "Identify the Direct Object: 'I wrote a letter.'", choices: ["I", "wrote", "a letter", "letter"], correctIndex: 2, explanation: "Rule: Direct Object answers 'What?' or 'Whom?' after the verb." },
    { question: "Identify the Direct Object: 'They love music.'", choices: ["They", "love", "music", "No object"], correctIndex: 2, explanation: "Rule: Direct Object. What do they love? Music." },
    { question: "Identify the Direct Object: 'Mom cooked dinner.'", choices: ["Mom", "cooked", "dinner", "No object"], correctIndex: 2, explanation: "Rule: Direct Object. What did Mom cook? Dinner." },
    { question: "Identify the Direct Object: 'He helps his friends.'", choices: ["He", "helps", "his friends", "friends"], correctIndex: 2, explanation: "Rule: Direct Object answers 'Whom?' after the verb." },
    { question: "Identify the Direct Object: 'She brought gifts.'", choices: ["She", "brought", "gifts", "No object"], correctIndex: 2, explanation: "Rule: Direct Object. What did she bring? Gifts." },
    { question: "Identify the Direct Object: 'We watched a movie.'", choices: ["We", "watched", "a movie", "movie"], correctIndex: 2, explanation: "Rule: Direct Object. What did we watch? A movie." },
    { question: "Identify the Direct Object: 'The teacher teaches English.'", choices: ["The teacher", "teaches", "English", "No object"], correctIndex: 2, explanation: "Rule: Direct Object. What does the teacher teach? English." },
    { question: "Identify the Direct Object: 'Birds build nests.'", choices: ["Birds", "build", "nests", "No object"], correctIndex: 2, explanation: "Rule: Direct Object. What do birds build? Nests." },

    // 31-40: Identifying Prepositional Phrases
    { question: "Identify the phrase: 'The cat is on the roof.'", choices: ["The cat", "is", "on the roof", "roof"], correctIndex: 2, explanation: "Rule: Prepositional Phrase. Starts with a preposition (on) and ends with a noun (roof)." },
    { question: "Identify the phrase: 'She walked into the room.'", choices: ["She walked", "into the room", "the room", "into"], correctIndex: 1, explanation: "Rule: Prepositional Phrase. Preposition (into) + Object (the room)." },
    { question: "Identify the phrase: 'We met at noon.'", choices: ["We met", "at noon", "noon", "at"], correctIndex: 1, explanation: "Rule: Prepositional Phrase. Preposition (at) + Object (noon)." },
    { question: "Identify the phrase: 'The gift is for you.'", choices: ["The gift", "is", "for you", "you"], correctIndex: 2, explanation: "Rule: Prepositional Phrase. Preposition (for) + Object (you)." },
    { question: "Identify the phrase: 'He ran under the bridge.'", choices: ["He ran", "under the bridge", "the bridge", "under"], correctIndex: 1, explanation: "Rule: Prepositional Phrase. Preposition (under) + Object (the bridge)." },
    { question: "Identify the phrase: 'A girl with blue eyes.'", choices: ["A girl", "with blue eyes", "blue eyes", "eyes"], correctIndex: 1, explanation: "Rule: Prepositional Phrase acting as an adjective modifying 'girl'." },
    { question: "Identify the phrase: 'After the game, we ate.'", choices: ["After the game", "we ate", "the game", "After"], correctIndex: 0, explanation: "Rule: Prepositional Phrase of time." },
    { question: "Identify the phrase: 'The book is by the window.'", choices: ["The book", "is", "by the window", "window"], correctIndex: 2, explanation: "Rule: Prepositional Phrase of place." },
    { question: "Identify the phrase: 'He lives near the school.'", choices: ["He lives", "near the school", "the school", "near"], correctIndex: 1, explanation: "Rule: Prepositional Phrase. Preposition (near) + Object (the school)." },
    { question: "Identify the phrase: 'Go down the stairs.'", choices: ["Go", "down the stairs", "the stairs", "down"], correctIndex: 1, explanation: "Rule: Prepositional Phrase of direction." },

    // 41-50: Independent vs Dependent Clauses (Basic)
    { question: "Identify the independent clause: 'If it rains, we will stay home.'", choices: ["If it rains", "we will stay home", "stay home", "None"], correctIndex: 1, explanation: "Rule: Independent Clauses can stand alone as a sentence. 'We will stay home' makes sense alone." },
    { question: "Identify the dependent clause: 'When I grow up, I want to be a pilot.'", choices: ["When I grow up", "I want to be", "a pilot", "I want to be a pilot"], correctIndex: 0, explanation: "Rule: Dependent Clauses start with subordinating conjunctions (When) and cannot stand alone." },
    { question: "Identify the independent clause: 'She smiled because she was happy.'", choices: ["She smiled", "because she was happy", "she was happy", "because"], correctIndex: 0, explanation: "Rule: 'She smiled' is a complete thought." },
    { question: "Identify the dependent clause: 'Since you asked, I will tell you.'", choices: ["Since you asked", "I will tell you", "tell you", "I will"], correctIndex: 0, explanation: "Rule: Starts with 'Since' and leaves the thought incomplete." },
    { question: "Is this clause independent? 'Although it was cold.'", choices: ["Yes", "No"], correctIndex: 1, explanation: "Rule: It starts with 'Although', making it dependent." },
    { question: "Is this clause independent? 'The sun is shining.'", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: It has a subject and verb and expresses a complete thought." },
    { question: "Identify the dependent clause: 'I will help you unless I am busy.'", choices: ["I will help you", "unless I am busy", "I am busy", "help you"], correctIndex: 1, explanation: "Rule: Starts with the subordinator 'unless'." },
    { question: "Identify the independent clause: 'While he slept, the phone rang.'", choices: ["While he slept", "the phone rang", "phone rang", "he slept"], correctIndex: 1, explanation: "Rule: 'The phone rang' is a complete sentence on its own." },
    { question: "Is this clause independent? 'Before we leave.'", choices: ["Yes", "No"], correctIndex: 1, explanation: "Rule: Dependent because of 'Before'." },
    { question: "Is this clause independent? 'He opened the door.'", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: Complete thought." }
  ],

  intermediate: [
    // 51-60: Simple Sentences
    { question: "What type of sentence is this? 'The dog barked loudly.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 0, explanation: "Rule: A Simple Sentence has one independent clause and no dependent clauses." },
    { question: "What type of sentence is this? 'John and Mary walked to school.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 0, explanation: "Rule: Simple Sentence. It has a compound subject (John and Mary), but still only one independent clause." },
    { question: "What type of sentence is this? 'We ate pizza and drank soda.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 0, explanation: "Rule: Simple Sentence. It has a compound predicate (ate... and drank...), but represents one subject's actions." },
    { question: "Identify the Simple Sentence:", choices: ["I run, and she swims.", "I run fast.", "Because I run.", "I run when I can."], correctIndex: 1, explanation: "Rule: Only 'I run fast' has a single independent clause with no connectors." },
    { question: "Is 'The big red car stopped suddenly' a simple sentence?", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: Yes, length doesn't matter; clauses matter. It has one subject and one verb." },
    { question: "What type of sentence? 'Birds fly south for the winter.'", choices: ["Simple", "Compound", "Complex", "Run-on"], correctIndex: 0, explanation: "Rule: One independent clause." },
    { question: "What type of sentence? 'My mother cooks dinner every night.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 0, explanation: "Rule: One subject, one verb phrase." },
    { question: "What type of sentence? 'In the morning, the birds sing.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 0, explanation: "Rule: The introductory phrase doesn't make it complex. It's still one independent clause." },
    { question: "What type of sentence? 'Tom reads books and watches movies.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 0, explanation: "Rule: Simple with compound verb." },
    { question: "What type of sentence? 'Rain falls.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 0, explanation: "Rule: Minimum requirement for a simple sentence (S+V)." },

    // 61-70: Compound Sentences (FANBOYS)
    { question: "What type of sentence is this? 'I like tea, but he likes coffee.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 1, explanation: "Rule: Compound Sentence. Two independent clauses joined by a coordinator (but)." },
    { question: "What type of sentence is this? 'She cooked, and he cleaned.'", choices: ["Simple", "Compound", "Complex", "Simple"], correctIndex: 1, explanation: "Rule: Compound. 'She cooked' (Indep) + and + 'he cleaned' (Indep)." },
    { question: "Identify the Compound Sentence:", choices: ["I run fast.", "I run, so I am tired.", "I run because I like it.", "Running is fun."], correctIndex: 1, explanation: "Rule: 'So' is a coordinating conjunction joining two independent ideas." },
    { question: "What type of sentence? 'You can stay, or you can go.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 1, explanation: "Rule: Joined by 'or'." },
    { question: "What type of sentence? 'He was tired, yet he kept working.'", choices: ["Simple", "Compound", "Complex", "Run-on"], correctIndex: 1, explanation: "Rule: Joined by 'yet'." },
    { question: "Which word makes this compound? 'It rained, ____ we stayed home.'", choices: ["so", "because", "if", "when"], correctIndex: 0, explanation: "Rule: 'So' is a FANBOYS conjunction used for compound sentences. The others create complex sentences." },
    { question: "What type of sentence? 'I wanted to go; however, I was too busy.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 1, explanation: "Rule: Compound sentences can be joined by a semicolon and a conjunctive adverb (however)." },
    { question: "What type of sentence? 'The car broke down; we walked home.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 1, explanation: "Rule: Two independent clauses joined by a semicolon form a compound sentence." },
    { question: "What type of sentence? 'She is smart, for she reads a lot.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 1, explanation: "Rule: 'For' is a coordinating conjunction here (meaning because)." },
    { question: "Identify the Compound Sentence:", choices: ["While I slept, he worked.", "I slept, and he worked.", "I slept because he worked.", "I sleeping and working."], correctIndex: 1, explanation: "Rule: 'And' joins two independent clauses." },

    // 71-80: Complex Sentences (Subordinating Conjunctions)
    { question: "What type of sentence is this? 'When the bell rings, you can go.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 2, explanation: "Rule: Complex Sentence. One independent clause + One dependent clause (starting with 'When')." },
    { question: "What type of sentence is this? 'I will help you if you ask.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 2, explanation: "Rule: Complex. 'If you ask' is a dependent clause." },
    { question: "Identify the Complex Sentence:", choices: ["I like cats, but I hate dogs.", "I like cats because they are cute.", "I like cats and dogs.", "I like cats."], correctIndex: 1, explanation: "Rule: 'Because' creates a dependent clause, making the sentence complex." },
    { question: "What type of sentence? 'Although it rained, we played soccer.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 2, explanation: "Rule: Starts with 'Although' (Dependent)." },
    { question: "What type of sentence? 'The man who called is my uncle.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 2, explanation: "Rule: Contains a relative clause ('who called'), which is a type of dependent clause." },
    { question: "What type of sentence? 'Since you are here, please help.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 2, explanation: "Rule: 'Since' creates a dependent clause." },
    { question: "What type of sentence? 'We ate before we left.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 2, explanation: "Rule: 'Before' acts as a subordinator here." },
    { question: "Which word makes this complex? '____ it was cold, we went out.'", choices: ["Although", "But", "And", "So"], correctIndex: 0, explanation: "Rule: 'Although' creates a dependent clause." },
    { question: "What type of sentence? 'She is the one that I told you about.'", choices: ["Simple", "Compound", "Complex", "Fragment"], correctIndex: 2, explanation: "Rule: 'That I told you about' is a relative clause." },
    { question: "Identify the Complex Sentence:", choices: ["He ran fast.", "He ran, and he won.", "He ran until he dropped.", "He ran fast and won."], correctIndex: 2, explanation: "Rule: 'Until he dropped' is dependent." },

    // 81-90: Compound-Complex Sentences
    { question: "What type of sentence is this? 'When the music stopped, she sat down, and everyone clapped.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 3, explanation: "Rule: Compound-Complex. Dependent (When...) + Independent (She sat...) + Independent (Everyone clapped)." },
    { question: "Structure Analysis: 'I wanted to go, but I stayed home because I was sick.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 3, explanation: "Rule: Two independent clauses (joined by 'but') and one dependent clause ('because...')." },
    { question: "What type of sentence? 'If you study, you will pass, and you will be happy.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 3, explanation: "Rule: Dependent (If...) + Independent + Independent." },
    { question: "What type of sentence? 'He left because he was angry, so I didn't see him.'", choices: ["Compound", "Complex", "Compound-Complex", "Simple"], correctIndex: 2, explanation: "Rule: Independent + Dependent (because...) + Independent (so...)." },
    { question: "Identify the Compound-Complex sentence:", choices: ["I like dogs.", "I like dogs, and they like me.", "I like dogs because they are loyal.", "I like dogs because they are loyal, and they like me."], correctIndex: 3, explanation: "Rule: Contains 'because' (Dependent) and 'and' (Compound)." },
    { question: "What type of sentence? 'Though he was rich, he was unhappy, yet he never complained.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 3, explanation: "Rule: Dependent (Though...) + Independent + Independent." },
    { question: "What type of sentence? 'The sun shone, and the birds sang as we walked.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 3, explanation: "Rule: Independent + Independent + Dependent (as...)." },
    { question: "Structure: 'Before the movie started, we bought popcorn, and we found our seats.'", choices: ["Compound-Complex", "Complex", "Compound", "Simple"], correctIndex: 0, explanation: "Rule: One dependent, two independent." },
    { question: "What type of sentence? 'I don't know where he is, but I hope he is safe.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 3, explanation: "Rule: Independent + Dependent (where...) + Independent + Dependent (implied 'that' he is safe). It combines compound structure with noun clauses." },
    { question: "Identify the type: 'Because I love you, I will help you, or I will find someone who can.'", choices: ["Simple", "Compound", "Complex", "Compound-Complex"], correctIndex: 3, explanation: "Rule: Dependent + Independent + Independent." },

    // 91-100: Sentence Fragments (Errors)
    { question: "Is this a sentence or a fragment? 'Because I was tired.'", choices: ["Sentence", "Fragment"], correctIndex: 1, explanation: "Rule: Fragment. It starts with a subordinator and has no independent clause." },
    { question: "Is this a sentence or a fragment? 'The boy in the car.'", choices: ["Sentence", "Fragment"], correctIndex: 1, explanation: "Rule: Fragment. It has a subject but no verb (predicate)." },
    { question: "Is this a sentence or a fragment? 'Running down the street.'", choices: ["Sentence", "Fragment"], correctIndex: 1, explanation: "Rule: Fragment. It lacks a subject and a finite verb." },
    { question: "Is this a sentence or a fragment? 'Wait.'", choices: ["Sentence", "Fragment"], correctIndex: 0, explanation: "Rule: Sentence. This is an imperative (command) with implied subject 'You'." },
    { question: "Is this a sentence or a fragment? 'Which is why I left.'", choices: ["Sentence", "Fragment"], correctIndex: 1, explanation: "Rule: Fragment. Relative clauses cannot stand alone." },
    { question: "Is this a sentence or a fragment? 'For example, the dog.'", choices: ["Sentence", "Fragment"], correctIndex: 1, explanation: "Rule: Fragment. No verb." },
    { question: "Is this a sentence or a fragment? 'Even though he tried.'", choices: ["Sentence", "Fragment"], correctIndex: 1, explanation: "Rule: Fragment. Dependent clause." },
    { question: "Is this a sentence or a fragment? 'John worked.'", choices: ["Sentence", "Fragment"], correctIndex: 0, explanation: "Rule: Sentence. It has a subject and a verb." },
    { question: "Is this a sentence or a fragment? 'Such as apples and oranges.'", choices: ["Sentence", "Fragment"], correctIndex: 1, explanation: "Rule: Fragment. Phrase only." },
    { question: "Is this a sentence or a fragment? 'Having finished the work.'", choices: ["Sentence", "Fragment"], correctIndex: 1, explanation: "Rule: Fragment. Participial phrase only." }
  ],

  advanced: [
    // 101-110: Run-on Sentences and Comma Splices
    { question: "Identify the error: 'I love summer it is warm.'", choices: ["Fragment", "Run-on", "Correct"], correctIndex: 1, explanation: "Rule: Run-on (Fused Sentence). Two independent clauses are joined with nothing between them." },
    { question: "Identify the error: 'I love summer, it is warm.'", choices: ["Fragment", "Comma Splice", "Correct"], correctIndex: 1, explanation: "Rule: Comma Splice. You cannot join two independent clauses with just a comma." },
    { question: "How to fix: 'It rained, we stayed home.'", choices: ["It rained we stayed home.", "It rained; we stayed home.", "It rained, we stayed home.", "Rained we stayed."], correctIndex: 1, explanation: "Rule: Fix splices with a semicolon, a period, or a conjunction." },
    { question: "Is this correct? 'He ran fast, however he lost.'", choices: ["Yes", "No"], correctIndex: 1, explanation: "Rule: Comma Splice. 'However' is a conjunctive adverb, not a conjunction. It needs a semicolon before it (; however,)." },
    { question: "Is this correct? 'He ran fast; however, he lost.'", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: Correct use of semicolon and conjunctive adverb." },
    { question: "Identify the error: 'The car stopped the engine died.'", choices: ["Fragment", "Run-on", "Correct"], correctIndex: 1, explanation: "Rule: Fused Sentence." },
    { question: "Which sentence is punctuated correctly?", choices: ["I like tea I like coffee.", "I like tea, I like coffee.", "I like tea; I like coffee.", "I like tea, coffee."], correctIndex: 2, explanation: "Rule: Semicolons join independent clauses." },
    { question: "Fix the run-on: 'She is smart she studies hard.'", choices: ["She is smart, she studies hard.", "She is smart because she studies hard.", "She is smart she studies.", "Smart she studies."], correctIndex: 1, explanation: "Rule: Adding a subordinator (because) fixes the run-on by making one clause dependent." },
    { question: "Is this a run-on? 'I went to the store and bought milk.'", choices: ["Yes", "No"], correctIndex: 1, explanation: "Rule: No. This is a simple sentence with a compound verb. It is correct." },
    { question: "Is this a run-on? 'I went to the store, and I bought milk.'", choices: ["Yes", "No"], correctIndex: 1, explanation: "Rule: No. The comma + 'and' correctly joins two clauses." },

    // 111-120: Clause Functions (Noun, Adjective, Adverb)
    { question: "What is the function of the capitalized clause? 'I know WHAT YOU DID.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 0, explanation: "Rule: Noun Clauses act as the object (or subject) of the sentence. I know [something]." },
    { question: "Function of clause: 'The man WHO IS STANDING THERE is my dad.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 1, explanation: "Rule: Adjective (Relative) Clauses describe a noun (The man)." },
    { question: "Function of clause: 'I will go WHEREVER YOU GO.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 2, explanation: "Rule: Adverb Clauses modify the verb (go) and tell where." },
    { question: "Function of clause: 'THAT HE LIED is surprising.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 0, explanation: "Rule: Noun Clause acting as the Subject." },
    { question: "Function of clause: 'This is the house THAT JACK BUILT.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 1, explanation: "Rule: Adjective Clause modifying 'house'." },
    { question: "Function of clause: 'BECAUSE IT WAS LATE, we left.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 2, explanation: "Rule: Adverb Clause of reason." },
    { question: "Function of clause: 'I wonder IF IT WILL RAIN.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 0, explanation: "Rule: Noun Clause acting as the object of 'wonder'." },
    { question: "Function of clause: 'The time WHEN WE MET was magical.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 1, explanation: "Rule: Adjective Clause modifying 'time'." },
    { question: "Function of clause: 'He acts AS IF HE IS RICH.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 2, explanation: "Rule: Adverb Clause of manner." },
    { question: "Function of clause: 'Give it to WHOEVER WANTS IT.'", choices: ["Noun Clause", "Adjective Clause", "Adverb Clause"], correctIndex: 0, explanation: "Rule: Noun Clause acting as the object of the preposition 'to'." },

    // 121-130: Restrictive vs Non-Restrictive Clauses
    { question: "Which sentence needs commas?", choices: ["My brother who lives in Paris is visiting.", "My brother John who lives in Paris is visiting."], correctIndex: 1, explanation: "Rule: Non-Restrictive. If you name him (John), the clause 'who lives in Paris' is extra info and needs commas." },
    { question: "Correct punctuation: 'The car, which is red, is mine.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: 'Which' clauses are usually non-restrictive (extra info) and take commas." },
    { question: "Correct punctuation: 'The car that is red is mine.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: 'That' clauses are restrictive (essential info) and do NOT take commas." },
    { question: "Choose the essential clause sentence:", choices: ["The players, who are tired, can rest.", "The players who are tired can rest."], correctIndex: 1, explanation: "Rule: Restrictive. Only the specific players who are tired can rest, not all players." },
    { question: "Choose the non-essential clause sentence:", choices: ["My mom, who is a nurse, is kind.", "My mom who is a nurse is kind."], correctIndex: 0, explanation: "Rule: You only have one mom. The fact she is a nurse is extra info, so use commas." },
    { question: "Rule check: 'Which' uses commas, 'That' does not.", choices: ["True", "False"], correctIndex: 0, explanation: "Rule: General style rule for relative clauses." },
    { question: "Is the clause restrictive? 'Students who study pass.'", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: Yes, it restricts the meaning to ONLY those students who study." },
    { question: "Is the clause restrictive? 'Mr. Smith, who is 50, retired.'", choices: ["Yes", "No"], correctIndex: 1, explanation: "Rule: No, Mr. Smith is already identified. His age is extra info." },
    { question: "Punctuate: 'Paris which is in France is beautiful.'", choices: ["Paris, which is in France, is beautiful.", "Paris which is in France is beautiful."], correctIndex: 0, explanation: "Rule: Paris is a proper noun (unique). The clause is non-restrictive." },
    { question: "Punctuate: 'The book that I read was good.'", choices: ["The book, that I read, was good.", "The book that I read was good."], correctIndex: 1, explanation: "Rule: Restrictive 'That'. No commas." },

    // 131-140: Dangling and Misplaced Modifiers (Structure Focus)
    { question: "Identify the error: 'Walking down the street, the trees looked scary.'", choices: ["Run-on", "Dangling Modifier", "Fragment"], correctIndex: 1, explanation: "Rule: Dangling Modifier. The phrase 'Walking...' modifies the subject 'trees', which is logically impossible." },
    { question: "Fix the error: 'Walking down the street, the trees looked scary.'", choices: ["Walking down the street, I thought the trees looked scary.", "The trees looked scary walking down the street.", "Walking down the street, trees were scary.", "Scary trees walking down the street."], correctIndex: 0, explanation: "Rule: The subject immediately following the comma must be the doer of the action (I was walking)." },
    { question: "Identify the correct structure:", choices: ["She served cake to the kids on paper plates.", "She served cake on paper plates to the kids."], correctIndex: 1, explanation: "Rule: Misplaced Modifier. 'On paper plates' should modify 'cake', not 'kids'." },
    { question: "Identify the error: 'To receive a degree, studying is necessary.'", choices: ["Dangling Modifier", "Run-on"], correctIndex: 0, explanation: "Rule: Dangling Modifier. 'Studying' cannot receive a degree. A person must be the subject." },
    { question: "Fix the error: 'To receive a degree, studying is necessary.'", choices: ["To receive a degree, one must study.", "Studying is necessary to receive a degree.", "To receive a degree, studying.", "Degree received by studying."], correctIndex: 0, explanation: "Rule: Insert the logical subject (one/you/student) after the modifier." },
    { question: "Identify the correct structure:", choices: ["I saw a dog with three legs.", "I saw a dog driving my car with three legs."], correctIndex: 0, explanation: "Rule: Ensure the modifier 'with three legs' clearly modifies 'dog'." },
    { question: "Identify the error: 'Covered in sauce, I ate the pasta.'", choices: ["Dangling Modifier", "Correct"], correctIndex: 0, explanation: "Rule: Dangling. It implies 'I' was covered in sauce." },
    { question: "Fix: 'Covered in sauce, I ate the pasta.'", choices: ["I ate the pasta covered in sauce.", "Covered in sauce, the pasta ate me.", "I ate the pasta, covered in sauce.", "I ate the covered in sauce pasta."], correctIndex: 0, explanation: "Rule: Move 'covered in sauce' next to 'pasta'." },
    { question: "Identify the correct structure:", choices: ["He nearly drove for 5 hours.", "He drove for nearly 5 hours."], correctIndex: 1, explanation: "Rule: Misplaced Limiting Modifier. 'Nearly' should modify '5 hours'." },
    { question: "Identify the correct structure:", choices: ["Eaten by mosquitoes, we left the park.", "We left the park eaten by mosquitoes."], correctIndex: 0, explanation: "Rule: 'Eaten by mosquitoes' modifies 'We'. This is correct." },

    // 141-150: Appositives and Phrases
    { question: "Identify the appositive: 'My brother, a dentist, is here.'", choices: ["My brother", "a dentist", "is here", "here"], correctIndex: 1, explanation: "Rule: Appositives. A noun phrase that renames the noun beside it." },
    { question: "Punctuate: 'The insect a cockroach crawled away.'", choices: ["The insect, a cockroach, crawled away.", "The insect a cockroach, crawled away."], correctIndex: 0, explanation: "Rule: Non-essential appositives are set off by commas." },
    { question: "Identify the appositive: 'Edison, the inventor, was smart.'", choices: ["Edison", "the inventor", "was smart", "smart"], correctIndex: 1, explanation: "Rule: Renames 'Edison'." },
    { question: "Is the appositive essential? 'My friend Bob is here.' (I have many friends)", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: Restrictive Appositive. Since you have many friends, the name 'Bob' is essential to know which one." },
    { question: "Identify the phrase type: 'To run fast is hard.'", choices: ["Infinitive Phrase", "Gerund Phrase", "Prepositional Phrase"], correctIndex: 0, explanation: "Rule: Infinitive Phrase. Starts with 'To' + Verb." },
    { question: "Identify the phrase type: 'Running is fun.'", choices: ["Infinitive Phrase", "Gerund Phrase", "Appositive"], correctIndex: 1, explanation: "Rule: Gerund Phrase. Starts with Verb-ing acting as a noun." },
    { question: "Identify the phrase type: 'The dog, lost and hungry, cried.'", choices: ["Adjective Phrase", "Noun Phrase", "Verb Phrase"], correctIndex: 0, explanation: "Rule: Adjective Phrase describing the dog." },
    { question: "Identify the phrase type: 'He wants to go home.'", choices: ["Infinitive Phrase", "Prepositional Phrase", "Participial Phrase"], correctIndex: 0, explanation: "Rule: 'To go home' is an infinitive phrase acting as the object." },
    { question: "Identify the phrase type: 'Driven by hunger, he stole.'", choices: ["Participial Phrase", "Gerund Phrase", "Infinitive Phrase"], correctIndex: 0, explanation: "Rule: Participial Phrase. Past participle 'Driven' acts as an adjective modifying 'he'." },
    { question: "Combine using an appositive: 'John is a teacher. He is nice.'", choices: ["John, a teacher, is nice.", "John is a nice teacher.", "John the teacher nice.", "A teacher is John nice."], correctIndex: 0, explanation: "Rule: Appositive structure." }
  ],

  super: [
    // 151-160: Parallelism (Lists and Correlatives)
    { question: "Choose the parallel sentence:", choices: ["I like running, swimming, and to hike.", "I like running, swimming, and hiking.", "I like to run, swimming, and hiking.", "I like running, to swim, and hike."], correctIndex: 1, explanation: "Rule: Parallelism. All items in a list must use the same grammatical form (Gerunds)." },
    { question: "Choose the parallel sentence:", choices: ["She is smart, funny, and has kindness.", "She is smart, funny, and kind.", "She is smart, fun, and kindness.", "She is smart, funny, and a kind person."], correctIndex: 1, explanation: "Rule: Adjectives must match adjectives." },
    { question: "Choose the parallel sentence:", choices: ["He wants to travel and to learn.", "He wants to travel and learning.", "He wants traveling and to learn.", "He wants travel and learn."], correctIndex: 0, explanation: "Rule: Infinitive matches Infinitive." },
    { question: "Choose the parallel sentence:", choices: ["Not only is he rich, but he is also famous.", "Not only is he rich, but also famous.", "Not only he is rich, but he is also famous.", "Not only rich, but he is famous."], correctIndex: 0, explanation: "Rule: Correlative Conjunctions. 'Not only [Clause/Phrase]' must balance 'but also [Clause/Phrase]'." },
    { question: "Fix the structure: 'She likes cooking, jogging, and to read.'", choices: ["She likes cooking, jogging, and reading.", "She likes to cook, jog, and reading.", "She likes cooking, to jog, and reading.", "She likes cook, jog, read."], correctIndex: 0, explanation: "Rule: Parallel Gerunds." },
    { question: "Choose the parallel sentence:", choices: ["The movie was long, boring, and it was loud.", "The movie was long, boring, and loud.", "The movie was long, boring, and loudly.", "The movie was length, boredom, and loud."], correctIndex: 1, explanation: "Rule: Adjective list." },
    { question: "Choose the parallel sentence:", choices: ["You can go by bus or by train.", "You can go by bus or train.", "You can go by bus or on a train.", "Both A and B."], correctIndex: 3, explanation: "Rule: You can repeat the preposition (by... by...) or omit it in the second item if it applies to both." },
    { question: "Choose the parallel sentence:", choices: ["To think is to be.", "Thinking is to be.", "To think is being.", "Thought is being."], correctIndex: 0, explanation: "Rule: Infinitive matches Infinitive." },
    { question: "Choose the parallel sentence:", choices: ["He spoke clearly and with confidence.", "He spoke clearly and confidently.", "He spoke clear and confident.", "He spoke clearly and confident."], correctIndex: 1, explanation: "Rule: Adverb matches Adverb." },
    { question: "Choose the parallel sentence:", choices: ["The teacher told them to sit down and listen.", "The teacher told them to sit down and to listen.", "Both are correct.", "None."], correctIndex: 2, explanation: "Rule: Parallelism. You can repeat 'to' or omit it for the second verb in a pair." },

    // 161-170: Inverted Sentence Structures
    { question: "Identify the structure: 'Never have I seen such a sight.'", choices: ["Standard", "Inverted"], correctIndex: 1, explanation: "Rule: Negative Inversion. Adverb (Never) + Aux (have) + Subject (I)." },
    { question: "Identify the structure: 'Into the room walked the teacher.'", choices: ["Standard", "Inverted"], correctIndex: 1, explanation: "Rule: Locative Inversion. Prepositional Phrase + Verb + Subject." },
    { question: "Rewrite normally: 'Rarely do we eat out.'", choices: ["We rarely eat out.", "We do rarely eat out.", "Rarely we eat out.", "We eat out rarely do."], correctIndex: 0, explanation: "Rule: Standard order puts the subject first." },
    { question: "Choose the correct inversion:", choices: ["Seldom he sleeps.", "Seldom does he sleep.", "Seldom sleeps he.", "Seldom he does sleep."], correctIndex: 1, explanation: "Rule: Negative Adverb + Aux + Subject." },
    { question: "Choose the correct inversion:", choices: ["Little did he know.", "Little he knew.", "Little known he.", "Little did he knew."], correctIndex: 0, explanation: "Rule: 'Little' requires 'did' auxiliary inversion." },
    { question: "Choose the correct inversion:", choices: ["Had I known, I would have come.", "Have I known, I would have come.", "Did I know, I would come.", "Had I knew, I would come."], correctIndex: 0, explanation: "Rule: Conditional Inversion (3rd Conditional). Replaces 'If I had known'." },
    { question: "Choose the correct inversion:", choices: ["Here comes the bus.", "Here the bus comes.", "Comes here the bus.", "Bus comes here."], correctIndex: 0, explanation: "Rule: Inversion after 'Here/There' with a noun subject." },
    { question: "Choose the correct inversion:", choices: ["Here it comes.", "Here comes it.", "It comes here.", "Comes it here."], correctIndex: 0, explanation: "Rule: Pronoun subjects (it) are NOT inverted after Here/There. 'Here it comes' is correct." },
    { question: "Choose the correct inversion:", choices: ["Not only is she smart, but she is kind.", "Not only she is smart, but she is kind.", "Not only smart is she, but kind.", "Not only she smart, but kind."], correctIndex: 0, explanation: "Rule: Inversion after 'Not only'." },
    { question: "Choose the correct inversion:", choices: ["On the hill stood a castle.", "On the hill a castle stood.", "Stood a castle on the hill.", "A castle on the hill stood."], correctIndex: 0, explanation: "Rule: Locative Inversion for emphasis." },

    // 171-180: Cleft Sentences (It-clefts and Wh-clefts)
    { question: "Identify the structure: 'It was John who called.'", choices: ["Simple", "Cleft Sentence", "Compound"], correctIndex: 1, explanation: "Rule: It-Cleft. Used to emphasize a specific element (John)." },
    { question: "Rewrite for emphasis: 'I need water.'", choices: ["What I need is water.", "Water is need.", "I need is water.", "Need I water."], correctIndex: 0, explanation: "Rule: Wh-Cleft (Pseudo-cleft). 'What I need is...'" },
    { question: "Rewrite for emphasis: 'She broke the vase.'", choices: ["It was she who broke the vase.", "She was the one broke the vase.", "The vase broke she.", "Breaking the vase was she."], correctIndex: 0, explanation: "Rule: It-Cleft emphasizes the subject." },
    { question: "Rewrite for emphasis: 'We met in Paris.'", choices: ["It was in Paris that we met.", "It was Paris where we met.", "Paris was we met.", "In Paris we met."], correctIndex: 0, explanation: "Rule: It-Cleft emphasizing the prepositional phrase." },
    { question: "Identify the structure: 'All I want is you.'", choices: ["Wh-Cleft", "It-Cleft", "Simple"], correctIndex: 0, explanation: "Rule: 'All' acts like 'What' in this cleft structure." },
    { question: "Correct this cleft: 'What I did was ran.'", choices: ["What I did was run.", "What I did was ran.", "What I did run.", "What I did was running."], correctIndex: 0, explanation: "Rule: After 'What I did was...', use the base infinitive or 'to' infinitive." },
    { question: "Rewrite: 'The smoke caused the alarm.'", choices: ["It was the smoke that caused the alarm.", "The smoke caused it, the alarm.", "What caused the alarm the smoke.", "The alarm caused by smoke."], correctIndex: 0, explanation: "Rule: It-Cleft." },
    { question: "Which emphasizes the time?", choices: ["It was yesterday that he arrived.", "He arrived yesterday.", "Yesterday he arrived.", "He arrived."], correctIndex: 0, explanation: "Rule: Cleft sentence provides the strongest emphasis." },
    { question: "Complete: 'It is ____ who is responsible.'", choices: ["I", "me", "my", "mine"], correctIndex: 0, explanation: "Rule: Formal grammar requires the subject pronoun (I) after 'It is'." },
    { question: "Complete: 'It is ____ whom I love.'", choices: ["he", "him", "his", "himself"], correctIndex: 1, explanation: "Rule: Object pronoun (him) because it is the object of 'love'." },

    // 181-190: Absolute Phrases (Advanced)
    { question: "Identify the Absolute Phrase: 'The sun having set, we went home.'", choices: ["The sun having set", "we went home", "having set", "we went"], correctIndex: 0, explanation: "Rule: Noun + Participle grammatically independent from the main sentence." },
    { question: "Combine: 'The game was over. The crowd cheered.'", choices: ["The game being over, the crowd cheered.", "The game was over, the crowd cheered.", "Crowd cheered game over.", "Game over crowd cheered."], correctIndex: 0, explanation: "Rule: Absolute phrase construction." },
    { question: "Correct: 'Weather permitting, we will go.'", choices: ["Correct", "Incorrect"], correctIndex: 0, explanation: "Rule: 'Weather permitting' is a standard absolute phrase." },
    { question: "Identify the Absolute Phrase: 'He stood there, his eyes closed.'", choices: ["He stood there", "his eyes closed", "stood there", "eyes closed"], correctIndex: 1, explanation: "Rule: Noun (eyes) + Participle (closed) modifying the whole sentence." },
    { question: "Structure: 'Her work finished, she left.'", choices: ["Absolute Phrase", "Dangling Modifier", "Run-on"], correctIndex: 0, explanation: "Rule: Absolute Phrase. 'Her work' is the subject of the participle 'finished'." },
    { question: "Difference: 'Walking home, I saw a cat.' vs 'The bus late, I walked home.'", choices: ["Participial Phrase vs Absolute Phrase", "Absolute Phrase vs Participial Phrase"], correctIndex: 0, explanation: "Rule: Participial phrases modify the subject (I). Absolute phrases have their own subject (Bus)." },
    { question: "Combine: 'His hands were shaking. He opened the letter.'", choices: ["His hands shaking, he opened the letter.", "Shaking hands, he opened the letter.", "Hands shaking he opened.", "He opened the letter his hands shaking."], correctIndex: 0, explanation: "Rule: Absolute phrase construction." },
    { question: "Is this correct? 'God willing, I will pass.'", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: Standard absolute idiom." },
    { question: "Is this correct? 'The test being difficult, I failed.'", choices: ["Yes", "No"], correctIndex: 0, explanation: "Rule: Implied participle 'being' (The test [being] difficult)." },
    { question: "Identify the Absolute Phrase: 'Dinner ready, we sat down.'", choices: ["Dinner ready", "we sat down", "sat down", "Dinner"], correctIndex: 0, explanation: "Rule: Noun + Adjective (implied participle 'being')." },

    // 191-200: Subjunctive Mood (Structure Focus)
    { question: "Correct: 'I suggest that he ____ study.'", choices: ["study", "studies", "studied", "studying"], correctIndex: 0, explanation: "Rule: Mandative Subjunctive. Use the Base Form." },
    { question: "Correct: 'If I ____ a bird, I would fly.'", choices: ["was", "were", "am", "be"], correctIndex: 1, explanation: "Rule: Hypothetical Subjunctive. Always use 'were'." },
    { question: "Correct: 'It is vital that she ____ present.'", choices: ["be", "is", "was", "are"], correctIndex: 0, explanation: "Rule: Subjunctive after 'vital'." },
    { question: "Correct: 'God ____ America.'", choices: ["bless", "blesses", "blessed", "blessing"], correctIndex: 0, explanation: "Rule: Formulaic Subjunctive (Wish/Prayer)." },
    { question: "Correct: 'I wish I ____ the answer.'", choices: ["know", "knew", "known", "knowing"], correctIndex: 1, explanation: "Rule: Subjunctive Wish. Shift tense back (Present -> Past)." },
    { question: "Correct: 'I demand that the truth ____ told.'", choices: ["be", "is", "was", "are"], correctIndex: 0, explanation: "Rule: Passive Subjunctive (be + past participle)." },
    { question: "Correct: 'If need ____.'", choices: ["be", "is", "was", "are"], correctIndex: 0, explanation: "Rule: Idiomatic Subjunctive." },
    { question: "Correct: 'Come what ____.'", choices: ["may", "might", "will", "can"], correctIndex: 0, explanation: "Rule: Idiomatic Subjunctive." },
    { question: "Correct: 'I move that the meeting ____ adjourned.'", choices: ["be", "is", "was", "are"], correctIndex: 0, explanation: "Rule: Parliamentary Procedure Subjunctive." },
    { question: "Correct: 'Long ____ the King.'", choices: ["live", "lives", "lived", "living"], correctIndex: 0, explanation: "Rule: Formulaic Subjunctive." }
  ]
};
