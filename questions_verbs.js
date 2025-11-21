// questions_verbs.js
// 200 verb questions for CSE Reviewer Hub
// Levels: beginner, intermediate, advanced, super (50 each)

const VERB_QUESTIONS = {
  beginner: [
    {
      question: "Which word is the verb in this sentence? 'The children play in the park.'",
      choices: ["children", "play", "park", "the"],
      correctIndex: 1,
      explanation:
        "Play shows the action done by the children, so it is the verb."
    },
    {
      question: "Which word is the verb in this sentence? 'My father cooks dinner.'",
      choices: ["father", "cooks", "dinner", "my"],
      correctIndex: 1,
      explanation:
        "Cooks expresses the action of the subject father. It is the main verb."
    },
    {
      question: "Choose the correct verb to complete the sentence: 'She ___ to school every day.'",
      choices: ["go", "goes", "going", "gone"],
      correctIndex: 1,
      explanation:
        "For a singular third-person subject (she), we add -es: She goes to school."
    },
    {
      question: "Choose the correct verb form: 'They ___ very hard.'",
      choices: ["works", "work", "working", "worked"],
      correctIndex: 1,
      explanation:
        "They is plural, so we use the base form without -s: They work very hard."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He walk to work every morning.",
        "He walks to work every morning.",
        "He walking to work every morning.",
        "He is walk to work every morning."
      ],
      correctIndex: 1,
      explanation:
        "In the simple present, singular he takes a verb with -s: He walks to work."
    },
    {
      question: "Which word is the verb in this sentence? 'The dog barked loudly.'",
      choices: ["dog", "barked", "loudly", "the"],
      correctIndex: 1,
      explanation:
        "Barked shows the action of the dog, so it is the verb."
    },
    {
      question: "Choose the correct verb: 'I ___ a letter now.'",
      choices: ["write", "writes", "written", "wrote"],
      correctIndex: 0,
      explanation:
        "In the present tense with I, we use the base form: I write a letter."
    },
    {
      question: "Choose the correct verb: 'We ___ happy today.'",
      choices: ["is", "are", "am", "be"],
      correctIndex: 1,
      explanation:
        "We is plural, so it uses are in the present tense: We are happy."
    },
    {
      question: "Which sentence uses the verb be correctly?",
      choices: [
        "They is late.",
        "They are late.",
        "They am late.",
        "They be late."
      ],
      correctIndex: 1,
      explanation:
        "They is plural, so we use are: They are late."
    },
    {
      question: "Choose the correct verb form: 'I ___ a student.'",
      choices: ["is", "are", "am", "be"],
      correctIndex: 2,
      explanation:
        "With I in the present tense, we use am: I am a student."
    },
    {
      question: "Which word is the verb in this sentence? 'The sun rises in the east.'",
      choices: ["sun", "rises", "east", "the"],
      correctIndex: 1,
      explanation:
        "Rises is the action of the sun, so it is the verb."
    },
    {
      question: "Choose the correct verb: 'She ___ not understand the lesson.'",
      choices: ["do", "does", "did", "doing"],
      correctIndex: 1,
      explanation:
        "For she in the simple present negative, we use does not: She does not understand."
    },
    {
      question: "Choose the correct verb form: 'They ___ not like coffee.'",
      choices: ["do", "does", "did", "doing"],
      correctIndex: 0,
      explanation:
        "They is plural, so we use do not: They do not like coffee."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She do her homework every night.",
        "She does her homework every night.",
        "She doing her homework every night.",
        "She done her homework every night."
      ],
      correctIndex: 1,
      explanation:
        "Simple present with she uses does + base form: She does her homework."
    },
    {
      question: "Choose the correct verb: 'The baby ___ every morning.'",
      choices: ["cry", "cries", "crying", "cried"],
      correctIndex: 1,
      explanation:
        "For a singular subject baby, we add -es: The baby cries."
    },
    {
      question: "Which sentence uses the correct form of be in the past?",
      choices: [
        "They was happy yesterday.",
        "They were happy yesterday.",
        "They be happy yesterday.",
        "They are happy yesterday."
      ],
      correctIndex: 1,
      explanation:
        "For plural they in the past tense, use were: They were happy."
    },
    {
      question: "Choose the correct past form: 'She ___ to the market yesterday.'",
      choices: ["go", "goes", "went", "gone"],
      correctIndex: 2,
      explanation:
        "Went is the simple past of go: She went to the market yesterday."
    },
    {
      question: "Choose the correct past form: 'They ___ football last Sunday.'",
      choices: ["play", "plays", "played", "playing"],
      correctIndex: 2,
      explanation:
        "Played is the simple past of play: They played football last Sunday."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "I was at the office yesterday.",
        "I were at the office yesterday.",
        "I am at the office yesterday.",
        "I be at the office yesterday."
      ],
      correctIndex: 0,
      explanation:
        "For I in past tense, we use was: I was at the office yesterday."
    },
    {
      question: "Choose the correct present form: 'They ___ in Manila now.'",
      choices: ["is", "are", "am", "be"],
      correctIndex: 1,
      explanation:
        "They is plural, so we use are in the present tense: They are in Manila."
    },
    {
      question: "Which sentence uses a helping verb?",
      choices: [
        "She writes a letter.",
        "She is writing a letter.",
        "She wrote a letter.",
        "She will write a letter yesterday."
      ],
      correctIndex: 1,
      explanation:
        "Is writing is a verb phrase with helping verb is and main verb writing."
    },
    {
      question: "Choose the correct verb: 'I ___ going to the library.'",
      choices: ["is", "are", "am", "be"],
      correctIndex: 2,
      explanation:
        "With I + -ing, we use am: I am going to the library."
    },
    {
      question: "Which word is the verb in this sentence? 'The birds are singing.'",
      choices: ["birds", "are", "singing", "are singing"],
      correctIndex: 3,
      explanation:
        "Are singing is the complete verb phrase (helping verb are + main verb singing)."
    },
    {
      question: "Choose the correct verb: 'He ___ not know the answer.'",
      choices: ["do", "does", "did", "done"],
      correctIndex: 1,
      explanation:
        "For he in the simple present negative, we use does not: He does not know."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "They doesn't like the movie.",
        "They don't likes the movie.",
        "They don't like the movie.",
        "They does not like the movie."
      ],
      correctIndex: 2,
      explanation:
        "They is plural, so use don't + base form: They don't like the movie."
    },
    {
      question: "Choose the correct verb form: 'We ___ lunch at noon every day.'",
      choices: ["have", "has", "having", "had"],
      correctIndex: 0,
      explanation:
        "With plural we in simple present, use have: We have lunch at noon."
    },
    {
      question: "Which sentence uses a verb correctly?",
      choices: [
        "She are my best friend.",
        "She is my best friend.",
        "She am my best friend.",
        "She be my best friend."
      ],
      correctIndex: 1,
      explanation:
        "She is singular, so use is: She is my best friend."
    },
    {
      question: "Choose the correct verb: 'The train ___ at 7:00 a.m.'",
      choices: ["leave", "leaves", "leaving", "left"],
      correctIndex: 1,
      explanation:
        "Train is singular, so add -s in simple present: The train leaves at 7:00 a.m."
    },
    {
      question: "Which word is the verb in this sentence? 'Many people travel during holidays.'",
      choices: ["Many", "people", "travel", "holidays"],
      correctIndex: 2,
      explanation:
        "Travel is the action done by people, so it is the verb."
    },
    {
      question: "Choose the correct past form: 'We ___ a new project last month.'",
      choices: ["start", "starts", "started", "starting"],
      correctIndex: 2,
      explanation:
        "Started is the simple past: We started a new project last month."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She were absent yesterday.",
        "She was absent yesterday.",
        "She are absent yesterday.",
        "She is absent yesterday."
      ],
      correctIndex: 1,
      explanation:
        "She is singular, so in the past tense we use was: She was absent yesterday."
    },
    {
      question: "Choose the correct verb form: 'He ___ basketball every weekend.'",
      choices: ["play", "plays", "played", "playing"],
      correctIndex: 1,
      explanation:
        "He is singular, so use plays in the simple present: He plays basketball."
    },
    {
      question: "Which sentence uses the present continuous correctly?",
      choices: [
        "They is working now.",
        "They are working now.",
        "They am working now.",
        "They be working now."
      ],
      correctIndex: 1,
      explanation:
        "Plural they uses are + -ing: They are working now."
    },
    {
      question: "Choose the correct verb: 'I ___ already finished my homework.'",
      choices: ["has", "have", "had", "having"],
      correctIndex: 1,
      explanation:
        "With I in present perfect, use have: I have already finished my homework."
    },
    {
      question: "Which verb correctly completes the sentence? 'The flowers ___ beautiful in the garden.'",
      choices: ["looks", "look", "looking", "looked"],
      correctIndex: 1,
      explanation:
        "Flowers is plural, so we use look in the simple present: The flowers look beautiful."
    },
    {
      question: "Choose the correct verb: 'The students ___ for the exam tomorrow.'",
      choices: ["prepare", "prepares", "preparing", "prepared"],
      correctIndex: 0,
      explanation:
        "Students is plural, so use the base form: The students prepare for the exam."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "We was watching TV.",
        "We were watching TV.",
        "We is watching TV.",
        "We am watching TV."
      ],
      correctIndex: 1,
      explanation:
        "We in past continuous uses were + -ing: We were watching TV."
    },
    {
      question: "Choose the correct verb form: 'She ___ her keys yesterday.'",
      choices: ["lose", "loses", "lost", "losing"],
      correctIndex: 2,
      explanation:
        "Lost is the simple past of lose: She lost her keys yesterday."
    },
    {
      question: "Which word is the verb in this sentence? 'The teacher explains the lesson clearly.'",
      choices: ["teacher", "explains", "lesson", "clearly"],
      correctIndex: 1,
      explanation:
        "Explains is the action of the teacher, so it is the verb."
    },
    {
      question: "Choose the correct verb: 'They ___ going to the seminar.'",
      choices: ["is", "are", "am", "be"],
      correctIndex: 1,
      explanation:
        "They is plural, so use are + -ing: They are going to the seminar."
    },
    {
      question: "Which sentence uses the correct verb form?",
      choices: [
        "He don't like vegetables.",
        "He doesn't like vegetables.",
        "He didn't likes vegetables.",
        "He not like vegetables."
      ],
      correctIndex: 1,
      explanation:
        "He in simple present negative uses doesn't + base form: He doesn't like vegetables."
    },
    {
      question: "Choose the correct verb: 'We ___ a lot of fun at the party last night.'",
      choices: ["have", "has", "had", "having"],
      correctIndex: 2,
      explanation:
        "Had is the simple past of have: We had a lot of fun."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "It rain heavily yesterday.",
        "It rains heavily yesterday.",
        "It rained heavily yesterday.",
        "It raining heavily yesterday."
      ],
      correctIndex: 2,
      explanation:
        "Yesterday signals past tense, so use rained: It rained heavily yesterday."
    },
    {
      question: "Choose the correct verb: 'I ___ coffee every morning.'",
      choices: ["drink", "drinks", "drank", "drunk"],
      correctIndex: 0,
      explanation:
        "In simple present with I, use the base form: I drink coffee every morning."
    },
    {
      question: "Which word is the verb in this sentence? 'Our team won the game.'",
      choices: ["team", "won", "game", "our"],
      correctIndex: 1,
      explanation:
        "Won is the action of the team, so it is the verb."
    },
    {
      question: "Choose the correct verb form: 'She usually ___ at 6 a.m.'",
      choices: ["wake", "wakes", "woke", "woken"],
      correctIndex: 1,
      explanation:
        "She in the simple present takes wakes: She usually wakes at 6 a.m."
    },
    {
      question: "Which sentence uses the present tense correctly?",
      choices: [
        "They studies every day.",
        "They study every day.",
        "They studying every day.",
        "They studied every day."
      ],
      correctIndex: 1,
      explanation:
        "They is plural, so use study in the simple present: They study every day."
    },
    {
      question: "Choose the correct verb: 'The cat ___ under the table now.'",
      choices: ["sleep", "sleeps", "is sleeping", "slept"],
      correctIndex: 2,
      explanation:
        "Now suggests present continuous; with singular cat, use is sleeping."
    }
  ],

  intermediate: [
    {
      question: "Choose the correct verb form to complete the sentence: 'The committee ___ to meet every Monday.'",
      choices: ["decide", "decides", "deciding", "decided"],
      correctIndex: 1,
      explanation:
        "Committee is treated as a singular unit here, so we use decides."
    },
    {
      question: "Which sentence uses the past tense correctly?",
      choices: [
        "He buy a new car last week.",
        "He buys a new car last week.",
        "He bought a new car last week.",
        "He buying a new car last week."
      ],
      correctIndex: 2,
      explanation:
        "Last week indicates past time, so we use the simple past bought."
    },
    {
      question: "Choose the correct verb: 'Each of the students ___ a copy of the exam.'",
      choices: ["receive", "receives", "receiving", "received"],
      correctIndex: 1,
      explanation:
        "Each is singular, so the verb must be singular: receives."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Either Ana or her friends is coming.",
        "Either Ana or her friends are coming.",
        "Either Ana or her friends am coming.",
        "Either Ana or her friends be coming."
      ],
      correctIndex: 1,
      explanation:
        "With or, the verb agrees with the nearer subject (friends, plural), so use are."
    },
    {
      question: "Choose the correct verb form: 'The news ___ announced last night.'",
      choices: ["was", "were", "are", "have been"],
      correctIndex: 0,
      explanation:
        "News is singular in form and takes was in the past tense."
    },
    {
      question: "Which sentence uses have/has correctly?",
      choices: [
        "She have finished the report.",
        "She has finished the report.",
        "They has finished the report.",
        "They has finish the report."
      ],
      correctIndex: 1,
      explanation:
        "She is singular, so we use has; followed by the past participle finished."
    },
    {
      question: "Choose the correct verb form: 'By this time yesterday, we ___ our work.'",
      choices: ["finish", "finished", "had finished", "have finished"],
      correctIndex: 2,
      explanation:
        "By this time yesterday suggests past perfect; use had finished."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "They was informed about the changes.",
        "They were informed about the changes.",
        "They are informed about the changes yesterday.",
        "They be informed about the changes yesterday."
      ],
      correctIndex: 1,
      explanation:
        "They is plural, and in the past passive we use were + past participle informed."
    },
    {
      question: "Choose the correct verb: 'The students ___ the instructions carefully.'",
      choices: ["follows", "follow", "followed", "following"],
      correctIndex: 1,
      explanation:
        "Students is plural, and the sentence is in the present tense: follow."
    },
    {
      question: "Which sentence uses a linking verb?",
      choices: [
        "The flowers smell sweet.",
        "The flowers smell the air.",
        "The flowers smelling sweet.",
        "The flowers smelled the air."
      ],
      correctIndex: 0,
      explanation:
        "Smell acts as a linking verb connecting flowers and the adjective sweet."
    },
    {
      question: "Choose the correct verb form: 'He ___ to the office when I saw him.'",
      choices: ["goes", "was going", "is going", "going"],
      correctIndex: 1,
      explanation:
        "When I saw him (past) + ongoing action → past continuous: was going."
    },
    {
      question: "Which sentence uses the correct sequence of tenses?",
      choices: [
        "He said that he is tired yesterday.",
        "He said that he was tired yesterday.",
        "He says that he was tired yesterday.",
        "He say that he is tired yesterday."
      ],
      correctIndex: 1,
      explanation:
        "Said is past, so the reported clause also uses past: was tired."
    },
    {
      question: "Choose the correct modal verb usage:",
      choices: [
        "He can to swim very well.",
        "He can swim very well.",
        "He can swims very well.",
        "He can swimming very well."
      ],
      correctIndex: 1,
      explanation:
        "After a modal (can), we use the base form: can swim."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "You must to submit your report today.",
        "You must submitting your report today.",
        "You must submit your report today.",
        "You must submitted your report today."
      ],
      correctIndex: 2,
      explanation:
        "Must is followed by the base form: must submit."
    },
    {
      question: "Choose the correct verb form: 'If it ___ tomorrow, we will stay at home.'",
      choices: ["rains", "rained", "rain", "had rained"],
      correctIndex: 0,
      explanation:
        "First conditional: If + present simple (rains), will + base form."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The documents is on the table.",
        "The documents are on the table.",
        "The documents was on the table.",
        "The documents be on the table."
      ],
      correctIndex: 1,
      explanation:
        "Documents is plural, so use are."
    },
    {
      question: "Choose the correct verb form: 'She ___ never been to Baguio before.'",
      choices: ["has", "have", "had", "having"],
      correctIndex: 0,
      explanation:
        "Present perfect with she uses has + past participle: has never been."
    },
    {
      question: "Which sentence uses do/does correctly?",
      choices: [
        "Does they know the answer?",
        "Do he know the answer?",
        "Does he know the answer?",
        "Do she knows the answer?"
      ],
      correctIndex: 2,
      explanation:
        "For he in the present question, we use Does he + base form: Does he know."
    },
    {
      question: "Choose the correct verb: 'Neither of the answers ___ correct.'",
      choices: ["is", "are", "be", "were"],
      correctIndex: 0,
      explanation:
        "Neither is singular, so we use is."
    },
    {
      question: "Which sentence is grammatically correct?",
      choices: [
        "He don't understand the instructions.",
        "He doesn't understands the instructions.",
        "He doesn't understand the instructions.",
        "He not understand the instructions."
      ],
      correctIndex: 2,
      explanation:
        "Singular he uses doesn't + base form: doesn't understand."
    },
    {
      question: "Choose the correct verb form: 'By next year, they ___ here for ten years.'",
      choices: ["live", "lived", "have lived", "will have lived"],
      correctIndex: 3,
      explanation:
        "By next year suggests future perfect: will have lived."
    },
    {
      question: "Which sentence uses the passive voice?",
      choices: [
        "The manager approved the request.",
        "The request approved the manager.",
        "The request was approved by the manager.",
        "The manager was approving the request."
      ],
      correctIndex: 2,
      explanation:
        "Was approved by the manager is passive: subject receives the action."
    },
    {
      question: "Choose the correct verb form: 'The students ___ their projects tomorrow.'",
      choices: ["will present", "presented", "have presented", "was presenting"],
      correctIndex: 0,
      explanation:
        "Tomorrow indicates future time; use will present."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He has went to Cebu.",
        "He has gone to Cebu.",
        "He have gone to Cebu.",
        "He had went to Cebu."
      ],
      correctIndex: 1,
      explanation:
        "Past participle of go is gone; has gone is present perfect."
    },
    {
      question: "Choose the correct verb: 'Everyone in the team ___ doing their best.'",
      choices: ["are", "is", "be", "were"],
      correctIndex: 1,
      explanation:
        "Everyone is singular, so we use is."
    },
    {
      question: "Which sentence maintains correct tense consistency?",
      choices: [
        "She was cooking when the guests arrive.",
        "She cooks when the guests arrived.",
        "She was cooking when the guests arrived.",
        "She is cooking when the guests arrived."
      ],
      correctIndex: 2,
      explanation:
        "Past continuous (was cooking) matches with simple past (arrived)."
    },
    {
      question: "Choose the correct verb form: 'He promised that he ___ on time.'",
      choices: ["will be", "would be", "is", "was"],
      correctIndex: 1,
      explanation:
        "In reported speech, will usually changes to would after a past reporting verb promised."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "If I was you, I will study harder.",
        "If I were you, I would study harder.",
        "If I am you, I would study harder.",
        "If I were you, I will study harder."
      ],
      correctIndex: 1,
      explanation:
        "For unreal conditionals, we use If I were you, I would + base verb."
    },
    {
      question: "Choose the correct verb: 'The pair of shoes ___ under the bed.'",
      choices: ["is", "are", "were", "be"],
      correctIndex: 0,
      explanation:
        "Pair is the subject and is singular, so we use is."
    },
    {
      question: "Which sentence uses the correct verb form?",
      choices: [
        "The audience was clapping their hands.",
        "The audience were clapping its hands.",
        "The audience am clapping their hands.",
        "The audience be clapping their hands."
      ],
      correctIndex: 0,
      explanation:
        "Audience is treated as a singular group here, so was clapping is correct."
    },
    {
      question: "Choose the correct verb form: 'He ___ his work before he went home.'",
      choices: ["finished", "had finished", "has finished", "finishes"],
      correctIndex: 1,
      explanation:
        "Past perfect (had finished) shows the action was completed before he went home."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The drivers has protested the new policy.",
        "The drivers have protested the new policy.",
        "The drivers had protest the new policy.",
        "The drivers has protest the new policy."
      ],
      correctIndex: 1,
      explanation:
        "Drivers is plural, so use have + past participle protested."
    },
    {
      question: "Choose the correct verb: 'The teacher and the principal ___ present at the meeting.'",
      choices: ["was", "were", "is", "be"],
      correctIndex: 1,
      explanation:
        "The teacher and the principal (two people) make the subject plural; use were."
    },
    {
      question: "Which sentence uses the correct modal?",
      choices: [
        "You should to attend the orientation.",
        "You should attend the orientation.",
        "You should attending the orientation.",
        "You should attended the orientation."
      ],
      correctIndex: 1,
      explanation:
        "Should is followed by the base form: should attend."
    },
    {
      question: "Choose the correct verb form: 'The students ___ their assignments for two hours.'",
      choices: ["have been doing", "has been doing", "had been do", "have did"],
      correctIndex: 0,
      explanation:
        "Present perfect continuous with plural students: have been doing."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He suggested that she studies harder.",
        "He suggested that she study harder.",
        "He suggested that she studied harder.",
        "He suggested that she is studying harder."
      ],
      correctIndex: 1,
      explanation:
        "In that-clause after suggested, we often use the base form (subjunctive): she study."
    },
    {
      question: "Choose the correct verb form: 'The train ___ before we reached the station.'",
      choices: ["left", "had left", "has left", "was leaving"],
      correctIndex: 1,
      explanation:
        "Past perfect (had left) shows the action finished before another past action (reached)."
    },
    {
      question: "Which sentence maintains correct tense?",
      choices: [
        "While I was walking, I see a rainbow.",
        "While I walked, I was seeing a rainbow.",
        "While I was walking, I saw a rainbow.",
        "While I am walking, I saw a rainbow."
      ],
      correctIndex: 2,
      explanation:
        "Past continuous (was walking) pairs with simple past (saw) for an interrupted action."
    },
    {
      question: "Choose the correct verb: 'Several issues ___ discussed during the meeting.'",
      choices: ["was", "were", "is", "been"],
      correctIndex: 1,
      explanation:
        "Issues is plural; use were in the past passive: were discussed."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He is used to wake up early.",
        "He is used to waking up early.",
        "He used to waking up early.",
        "He used to wakes up early."
      ],
      correctIndex: 1,
      explanation:
        "Be used to is followed by a noun or -ing form: used to waking up early."
    },
    {
      question: "Choose the correct verb form: 'I wish I ___ more time to study.'",
      choices: ["have", "had", "will have", "having"],
      correctIndex: 1,
      explanation:
        "After I wish about a present unreal situation, we use the past form: had."
    },
    {
      question: "Which sentence uses the correct perfect tense?",
      choices: [
        "She have seen the movie already.",
        "She has saw the movie already.",
        "She has seen the movie already.",
        "She had sees the movie already."
      ],
      correctIndex: 2,
      explanation:
        "Present perfect with she: has + past participle seen."
    },
    {
      question: "Choose the correct verb: 'The number of participants ___ increasing every year.'",
      choices: ["are", "is", "were", "be"],
      correctIndex: 1,
      explanation:
        "The number is singular, so use is: is increasing."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "A number of students is absent.",
        "A number of students are absent.",
        "A number of students was absent.",
        "A number of students be absent."
      ],
      correctIndex: 1,
      explanation:
        "A number of + plural noun usually takes a plural verb: are absent."
    }
  ],

  advanced: [
    {
      question: "Identify the error in verb tense or form: 'She has went to the office already.'",
      choices: [
        "has",
        "went",
        "to the office",
        "already"
      ],
      correctIndex: 1,
      explanation:
        "Went should be gone (past participle). Correct form: has gone."
    },
    {
      question: "Choose the best revision: 'The report was submit by the assistant yesterday.'",
      choices: [
        "The report was submitted by the assistant yesterday.",
        "The report is submitted by the assistant yesterday.",
        "The report has submitted by the assistant yesterday.",
        "The report submitted by the assistant yesterday."
      ],
      correctIndex: 0,
      explanation:
        "Past passive needs was + past participle submitted."
    },
    {
      question: "Which sentence uses parallel verb forms correctly?",
      choices: [
        "He likes to read, writing, and to jog.",
        "He likes reading, to write, and jogging.",
        "He likes reading, writing, and jogging.",
        "He likes to read, to writing, and to jog."
      ],
      correctIndex: 2,
      explanation:
        "All items use the same form (-ing): reading, writing, jogging."
    },
    {
      question: "Choose the correct verb form: 'If she ___ the exam, she would be very happy.'",
      choices: ["passes", "passed", "had passed", "pass"],
      correctIndex: 1,
      explanation:
        "Second conditional: If + past simple (passed), would + base form."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "If they had arrive earlier, they will catch the bus.",
        "If they arrived earlier, they would have caught the bus.",
        "If they had arrived earlier, they would have caught the bus.",
        "If they arrive earlier, they would have caught the bus."
      ],
      correctIndex: 2,
      explanation:
        "Third conditional: If + past perfect (had arrived), would have + past participle (caught)."
    },
    {
      question: "Choose the correct verb: 'He insisted that she ___ the meeting.'",
      choices: ["attends", "attended", "attend", "will attend"],
      correctIndex: 2,
      explanation:
        "After insisted that, we often use the base form (subjunctive): she attend."
    },
    {
      question: "Which sentence maintains correct tense sequence?",
      choices: [
        "She said she will finish the work yesterday.",
        "She said she would finish the work today.",
        "She says she would finish the work today.",
        "She says she will finished the work today."
      ],
      correctIndex: 1,
      explanation:
        "Past said usually pairs with would for future-in-the-past: would finish."
    },
    {
      question: "Choose the correct verb form: 'By the time the train arrived, we ___ for an hour.'",
      choices: ["waited", "had been waiting", "have waited", "were waiting"],
      correctIndex: 1,
      explanation:
        "Past perfect continuous (had been waiting) shows an ongoing action before another past event."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She suggested that he goes to the doctor.",
        "She suggested that he go to the doctor.",
        "She suggested that he went to the doctor.",
        "She suggested that he going to the doctor."
      ],
      correctIndex: 1,
      explanation:
        "Subjunctive after suggested: he go (base form)."
    },
    {
      question: "Choose the correct verb: 'Hardly ___ the meeting started when the lights went out.'",
      choices: ["had", "has", "have", "having"],
      correctIndex: 0,
      explanation:
        "Hardly had the meeting started when... uses past perfect with inversion: had the meeting started."
    },
    {
      question: "Which sentence uses the passive correctly?",
      choices: [
        "The proposal was review by the committee.",
        "The proposal reviewed by the committee.",
        "The proposal was reviewed by the committee.",
        "The proposal is reviewing by the committee."
      ],
      correctIndex: 2,
      explanation:
        "Past passive: was reviewed by the committee."
    },
    {
      question: "Choose the correct verb form: 'He would rather ___ at home than go out tonight.'",
      choices: ["stay", "stays", "stayed", "staying"],
      correctIndex: 0,
      explanation:
        "Would rather is followed by the base form: would rather stay."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "She could have went with us.",
        "She could have gone with us.",
        "She could had gone with us.",
        "She could gone with us."
      ],
      correctIndex: 1,
      explanation:
        "Perfect modal: could have + past participle gone."
    },
    {
      question: "Choose the correct verb: 'The results ___ announced once the panel has decided.'",
      choices: ["will be", "are", "were", "have been"],
      correctIndex: 0,
      explanation:
        "Future passive: will be announced."
    },
    {
      question: "Which sentence avoids a faulty tense shift?",
      choices: [
        "Maria was walking to work and suddenly meets her old teacher.",
        "Maria walked to work and suddenly meets her old teacher.",
        "Maria was walking to work when she suddenly met her old teacher.",
        "Maria is walking to work and suddenly met her old teacher."
      ],
      correctIndex: 2,
      explanation:
        "Past continuous (was walking) correctly matches with simple past (met)."
    },
    {
      question: "Choose the correct verb form: 'At this time tomorrow, we ___ our exam.'",
      choices: ["take", "will take", "will be taking", "have taken"],
      correctIndex: 2,
      explanation:
        "At this time tomorrow suggests future continuous: will be taking."
    },
    {
      question: "Which sentence is grammatically correct?",
      choices: [
        "Being late, the meeting was missed by him.",
        "Being late, he missed the meeting.",
        "He missed the meeting, being late.",
        "He being late, missed the meeting."
      ],
      correctIndex: 1,
      explanation:
        "Being late must refer clearly to the subject he; 'Being late, he missed the meeting.'"
    },
    {
      question: "Choose the correct verb: 'No sooner ___ the alarm rang than everyone rushed outside.'",
      choices: ["had", "has", "have", "having"],
      correctIndex: 0,
      explanation:
        "No sooner had the alarm rang than... uses past perfect with inversion: had the alarm rang (strictly, 'rung')."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The data was analyzed by the team.",
        "The data were analyzed by the team.",
        "The data are analyze by the team.",
        "The data is analyzing by the team."
      ],
      correctIndex: 1,
      explanation:
        "In formal usage, data is plural: data were analyzed."
    },
    {
      question: "Choose the correct verb form: 'I wish I ___ the courage to speak up earlier.'",
      choices: ["have", "had", "will have", "having"],
      correctIndex: 1,
      explanation:
        "Wish about a past fact uses past perfect or simple past; here had is used to express regret."
    },
    {
      question: "Which sentence correctly uses the perfect infinitive?",
      choices: [
        "He pretended to have saw the movie.",
        "He pretended to have seen the movie.",
        "He pretended to had seen the movie.",
        "He pretended having seen the movie."
      ],
      correctIndex: 1,
      explanation:
        "Perfect infinitive: to have + past participle seen."
    },
    {
      question: "Choose the correct verb: 'If only he ___ more careful, the accident could have been avoided.'",
      choices: ["is", "was", "had been", "has been"],
      correctIndex: 2,
      explanation:
        "Regret about the past uses past perfect: had been more careful."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He denied that he has taken the money.",
        "He denied that he had taken the money.",
        "He denies that he had taken the money.",
        "He deny that he has taken the money."
      ],
      correctIndex: 1,
      explanation:
        "Denied (past) + that-clause about earlier past action: had taken."
    },
    {
      question: "Choose the correct verb form: 'They claimed that they ___ the documents already.'",
      choices: ["sent", "had sent", "have sent", "send"],
      correctIndex: 2,
      explanation:
        "Claimed about a completed recent action often uses present perfect: have sent."
    },
    {
      question: "Which sentence uses the causative correctly?",
      choices: [
        "She made him to clean the room.",
        "She had him cleaned the room.",
        "She had him clean the room.",
        "She made him cleaning the room."
      ],
      correctIndex: 2,
      explanation:
        "Causative have + object + base verb: had him clean."
    },
    {
      question: "Choose the correct verb: 'He apologized for not ___ the deadline.'",
      choices: ["meet", "meets", "meeting", "met"],
      correctIndex: 2,
      explanation:
        "After a preposition (for), we use -ing: for not meeting the deadline."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Having finish the work, they went home.",
        "Having finished the work, they went home.",
        "Having finished the work, the home was gone by them.",
        "Having finishing the work, they went home."
      ],
      correctIndex: 1,
      explanation:
        "Perfect participle: Having finished the work, they went home."
    },
    {
      question: "Choose the correct verb form: 'By 2025, the project ___ for three years.'",
      choices: ["will be running", "will have run", "will have been running", "has been running"],
      correctIndex: 2,
      explanation:
        "Future perfect continuous: will have been running for three years."
    },
    {
      question: "Which sentence has correct subject–verb agreement and tense?",
      choices: [
        "A series of lectures are scheduled next month.",
        "A series of lectures is scheduled next month.",
        "A series of lectures was schedule next month.",
        "A series of lectures were schedule next month."
      ],
      correctIndex: 1,
      explanation:
        "Series is the head noun and is singular; use is scheduled."
    },
    {
      question: "Choose the correct verb: 'Scarcely ___ we started the test when the bell rang.'",
      choices: ["had", "have", "has", "having"],
      correctIndex: 0,
      explanation:
        "Scarcely had we started... uses past perfect with inversion: had we started."
    },
    {
      question: "Which sentence correctly uses a reduced relative clause?",
      choices: [
        "The man who is standing outside is my uncle.",
        "The man standing outside is my uncle.",
        "The man stand outside is my uncle.",
        "The man who standing outside is my uncle."
      ],
      correctIndex: 1,
      explanation:
        "Standing outside reduces who is standing outside; verb form is correct."
    },
    {
      question: "Choose the correct verb form: 'He admitted ___ the mistake.'",
      choices: ["to make", "to making", "to have make", "to have making"],
      correctIndex: 1,
      explanation:
        "Admit is followed by a gerund: admitted to making the mistake."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "They had been knew each other for years before they got married.",
        "They have been knowing each other for years before they got married.",
        "They had known each other for years before they got married.",
        "They have knew each other for years before they got married."
      ],
      correctIndex: 2,
      explanation:
        "Past perfect (had known) expresses a state existing before another past event."
    },
    {
      question: "Choose the correct verb: 'The manager would prefer that the report ___ by Friday.'",
      choices: ["submits", "submitted", "be submitted", "is submitted"],
      correctIndex: 2,
      explanation:
        "In that-clause after would prefer, we often use be + past participle in a subjunctive passive: be submitted."
    },
    {
      question: "Which sentence maintains correct aspect?",
      choices: [
        "I have worked here since two years.",
        "I am working here since two years.",
        "I had worked here since two years.",
        "I have been working here for two years."
      ],
      correctIndex: 3,
      explanation:
        "For an activity continuing up to now, present perfect continuous is best: have been working for two years."
    },
    {
      question: "Choose the correct verb form: 'He stopped ___ when he saw the sign.'",
      choices: ["to talk", "talking", "to talking", "talked"],
      correctIndex: 0,
      explanation:
        "Stopped to talk means he stopped in order to talk; this fits seeing the sign."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Not only he was late, but he also forgot the files.",
        "Not only was he late, but he also forgot the files.",
        "Not only he late, but he also forgot the files.",
        "Not only was he late, but also forgot the files."
      ],
      correctIndex: 1,
      explanation:
        "After not only at the beginning, we invert: Not only was he late..."
    },
    {
      question: "Choose the correct verb: 'The supervisor demanded that the forms ___ immediately.'",
      choices: ["are submitted", "be submitted", "submitted", "submits"],
      correctIndex: 1,
      explanation:
        "After demanded that, we use the base form subjunctive; passive: be submitted."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He seems to knowing the answer.",
        "He seems know the answer.",
        "He seems to know the answer.",
        "He seem to know the answer."
      ],
      correctIndex: 2,
      explanation:
        "Seems is followed by to + base verb: seems to know."
    },
    {
      question: "Choose the correct verb form: 'Having ___ my work, I went out for a walk.'",
      choices: ["finish", "finished", "finishing", "to finish"],
      correctIndex: 1,
      explanation:
        "Perfect participle: Having finished my work, I went out for a walk."
    },
    {
      question: "Which sentence uses the future perfect correctly?",
      choices: [
        "By next week, I will finish the project.",
        "By next week, I finish the project.",
        "By next week, I will have finished the project.",
        "By next week, I am finishing the project."
      ],
      correctIndex: 2,
      explanation:
        "Future perfect: will have finished by a certain future time."
    },
    {
      question: "Choose the correct verb: 'I would have helped you if I ___ about it.'",
      choices: ["knew", "had knew", "had known", "know"],
      correctIndex: 2,
      explanation:
        "Third conditional uses past perfect in the if-clause: had known."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He apologized that he was late.",
        "He apologized for being late.",
        "He apologized to be late.",
        "He apologized of being late."
      ],
      correctIndex: 1,
      explanation:
        "Apologize for + gerund: apologized for being late."
    },
    {
      question: "Choose the correct verb form: 'The documents, together with the envelope, ___ missing.'",
      choices: ["is", "are", "was", "be"],
      correctIndex: 1,
      explanation:
        "Documents is plural; together with the envelope is a prepositional phrase; use are."
    }
  ],

  super: [
    {
      question: "Identify the error in this sentence: 'Had I know about the traffic, I would have left earlier.'",
      choices: [
        "Had I",
        "know",
        "about the traffic",
        "would have left earlier"
      ],
      correctIndex: 1,
      explanation:
        "Know should be known (past participle). Correct: Had I known about the traffic..."
    },
    {
      question: "Choose the best revision: 'The guidelines was implemented strictly last year.'",
      choices: [
        "The guidelines were implemented strictly last year.",
        "The guidelines are implemented strictly last year.",
        "The guidelines had implemented strictly last year.",
        "The guidelines has implemented strictly last year."
      ],
      correctIndex: 0,
      explanation:
        "Guidelines is plural; past passive needs were implemented."
    },
    {
      question: "Which sentence correctly avoids a dangling modifier?",
      choices: [
        "Walking down the street, the cars seemed noisy.",
        "Walking down the street, I noticed that the cars were noisy.",
        "Walking down the street, the noise of the cars bothered me.",
        "Walking down the street, the noise was loud."
      ],
      correctIndex: 1,
      explanation:
        "Walking down the street clearly refers to I, the subject of noticed."
    },
    {
      question: "Choose the correct verb form: 'I would rather you ___ this in private.'",
      choices: ["discuss", "discussed", "will discuss", "have discussed"],
      correctIndex: 1,
      explanation:
        "After would rather + subject, we often use a past form to express a present preference: you discussed."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "It is high time we call for reforms.",
        "It is high time we called for reforms.",
        "It is high time we will call for reforms.",
        "It is high time we had called for reforms."
      ],
      correctIndex: 1,
      explanation:
        "It is high time is followed by a past form to show urgency: we called."
    },
    {
      question: "Choose the correct verb: 'He acted as though he ___ everything about the case.'",
      choices: ["knows", "knew", "has known", "know"],
      correctIndex: 1,
      explanation:
        "As though + past form (knew) suggests something unreal or doubtful."
    },
    {
      question: "Which sentence uses the subjunctive correctly?",
      choices: [
        "If I was in your position, I will resign.",
        "If I were in your position, I would resign.",
        "If I were in your position, I will resign.",
        "If I was in your position, I would resign."
      ],
      correctIndex: 1,
      explanation:
        "If I were expresses an unreal condition; would resign matches the hypothetical result."
    },
    {
      question: "Choose the correct verb: 'I insist that the report ___ accurate.'",
      choices: ["is", "be", "was", "being"],
      correctIndex: 1,
      explanation:
        "After verbs like insist, we use the base-form subjunctive: be accurate."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He recommended that she takes a break.",
        "He recommended that she took a break.",
        "He recommended that she take a break.",
        "He recommended that she is taking a break."
      ],
      correctIndex: 2,
      explanation:
        "After recommended that, we use the base form: she take a break."
    },
    {
      question: "Choose the correct verb form: 'No sooner ___ the storm started than the power went out.'",
      choices: ["has", "have", "had", "having"],
      correctIndex: 2,
      explanation:
        "No sooner had the storm started than... uses past perfect with inversion."
    },
    {
      question: "Which sentence maintains proper tense and aspect?",
      choices: [
        "By the time we arrive, they will have left.",
        "By the time we arrived, they will have left.",
        "By the time we arrive, they leave.",
        "By the time we will arrive, they had left."
      ],
      correctIndex: 0,
      explanation:
        "By the time + present (arrive) pairs with future perfect (will have left)."
    },
    {
      question: "Choose the correct verb: 'He was reported ___ the documents without permission.'",
      choices: ["to have seen", "to have seeing", "to has seen", "to seen"],
      correctIndex: 0,
      explanation:
        "Reported + perfect infinitive: to have seen the documents."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Having been finished the project, they celebrated.",
        "Having finished the project, they celebrated.",
        "Having finish the project, they celebrated.",
        "Having finishing the project, they celebrated."
      ],
      correctIndex: 1,
      explanation:
        "Perfect participle: Having finished the project, they celebrated."
    },
    {
      question: "Choose the correct verb form: 'The findings, as well as the recommendation, ___ presented tomorrow.'",
      choices: ["is", "are", "was", "be"],
      correctIndex: 1,
      explanation:
        "Findings is plural; as well as the recommendation is parenthetical; use are presented."
    },
    {
      question: "Which sentence uses a cleft structure with correct verb form?",
      choices: [
        "It was the director who approve the plan.",
        "It is the director who approving the plan.",
        "It was the director who approved the plan.",
        "It were the director who approved the plan."
      ],
      correctIndex: 2,
      explanation:
        "Past cleft: It was the director who approved the plan."
    },
    {
      question: "Choose the correct verb: 'Scarcely ___ we entered the room when the phone rang.'",
      choices: ["had", "have", "has", "having"],
      correctIndex: 0,
      explanation:
        "Scarcely had we entered... uses past perfect with inversion."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He would rather that you leave now.",
        "He would rather you left now.",
        "He would rather you had leave now.",
        "He would rather you leaving now."
      ],
      correctIndex: 1,
      explanation:
        "Would rather + past form (you left) expresses a present preference/annoyance."
    },
    {
      question: "Choose the correct verb form: 'If only she ___ on time, we wouldn't have missed the flight.'",
      choices: ["had arrives", "had arrived", "has arrived", "arrived"],
      correctIndex: 1,
      explanation:
        "Past regret in if only clause: had arrived."
    },
    {
      question: "Which sentence correctly uses the perfect continuous aspect?",
      choices: [
        "He has been work here since May.",
        "He had been working here since May.",
        "He has been working here since May.",
        "He have been working here since May."
      ],
      correctIndex: 2,
      explanation:
        "Present perfect continuous: has been working here since May."
    },
    {
      question: "Choose the correct verb: 'The board decreed that the policy ___ effective immediately.'",
      choices: ["is", "be", "was", "been"],
      correctIndex: 1,
      explanation:
        "After decreed that, subjunctive be is used: the policy be effective immediately."
    },
    {
      question: "Which sentence uses a reduced adverbial clause correctly?",
      choices: [
        "After finished the work, they went home.",
        "After having finished the work, they went home.",
        "After have finished the work, they went home.",
        "After finishing the work, they have gone home."
      ],
      correctIndex: 1,
      explanation:
        "After having finished is a correct reduced form of after they had finished."
    },
    {
      question: "Choose the correct verb form: 'She denied ___ the instructions.'",
      choices: ["to ignore", "having ignored", "to have ignoring", "ignore"],
      correctIndex: 1,
      explanation:
        "Deny is often followed by having + past participle: having ignored."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "The committee decide that the event be postponed.",
        "The committee decided that the event be postponed.",
        "The committee decided that the event is postponed.",
        "The committee decided that the event was postpone."
      ],
      correctIndex: 1,
      explanation:
        "Decided that + subjunctive be postponed is correct in formal use."
    },
    {
      question: "Choose the correct verb form: 'By the time you read this, I ___ my flight.'",
      choices: ["will already take", "will have already taken", "already took", "have already took"],
      correctIndex: 1,
      explanation:
        "Future perfect: will have already taken my flight."
    },
    {
      question: "Which sentence avoids a faulty parallel structure?",
      choices: [
        "He likes to jog, swimming, and to read.",
        "He likes jogging, swimming, and reading.",
        "He likes to jog, swim, and reading.",
        "He likes jogging, to swim, and to read."
      ],
      correctIndex: 1,
      explanation:
        "All -ing forms: jogging, swimming, reading create proper parallel structure."
    },
    {
      question: "Choose the correct verb: 'Rarely ___ such dedication seen in a new employee.'",
      choices: ["has", "have", "is", "was"],
      correctIndex: 0,
      explanation:
        "Inversion with rarely: Rarely has such dedication been seen (been understood)."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He came to office without having finish his report.",
        "He came to the office without having finished his report.",
        "He came to the office without to have finished his report.",
        "He came to office without finished his report."
      ],
      correctIndex: 1,
      explanation:
        "Without having finished + object is the correct perfect participle structure."
    },
    {
      question: "Choose the correct verb form: 'They appear ___ the problem carefully.'",
      choices: ["to have studied", "have studied", "having studied", "to has studied"],
      correctIndex: 0,
      explanation:
        "Appear is followed by to have + past participle for completed action: to have studied."
    },
    {
      question: "Which sentence uses the future perfect continuous correctly?",
      choices: [
        "Next month, I will have been working here for a year.",
        "Next month, I will be working here for a year.",
        "Next month, I had been working here for a year.",
        "Next month, I have been working here for a year."
      ],
      correctIndex: 0,
      explanation:
        "Future perfect continuous: will have been working here for a year."
    },
    {
      question: "Choose the correct verb: 'Seldom ___ we faced such a difficult situation.'",
      choices: ["have", "had", "has", "having"],
      correctIndex: 0,
      explanation:
        "Inversion: Seldom have we faced such a difficult situation."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He regrets that he did not spoke up earlier.",
        "He regrets that he had not spoke up earlier.",
        "He regrets not having spoken up earlier.",
        "He regrets not to have spoken up earlier."
      ],
      correctIndex: 2,
      explanation:
        "Regret + not having + past participle spoken expresses regret about a past action."
    },
    {
      question: "Choose the correct verb form: 'The instructions state that the form ___ in black ink.'",
      choices: ["is to be filled", "is to fill", "is filled", "be filled"],
      correctIndex: 0,
      explanation:
        "State that the form is to be filled in black ink expresses requirement."
    },
    {
      question: "Which sentence uses the passive infinitive correctly?",
      choices: [
        "He expects to be promote soon.",
        "He expects to be promoted soon.",
        "He expects being promoted soon.",
        "He expects to promoted soon."
      ],
      correctIndex: 1,
      explanation:
        "Passive infinitive: to be promoted."
    },
    {
      question: "Choose the correct verb: 'I would sooner you ___ me the truth.'",
      choices: ["tell", "told", "have told", "telling"],
      correctIndex: 1,
      explanation:
        "Would sooner/sooner would you + past form (told) expresses preference about a present situation."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He appears having forgotten the instructions.",
        "He appears to have forgotten the instructions.",
        "He appears to had forgotten the instructions.",
        "He appears having forget the instructions."
      ],
      correctIndex: 1,
      explanation:
        "Appear + perfect infinitive: to have forgotten."
    },
    {
      question: "Choose the correct verb form: 'If it were not for his guidance, we ___ lost.'",
      choices: ["will be", "would be", "were", "are"],
      correctIndex: 1,
      explanation:
        "Unreal present conditional: If it were not for..., we would be lost."
    },
    {
      question: "Which sentence uses correct inversion after a negative adverbial?",
      choices: [
        "Under no circumstances we will reveal the source.",
        "Under no circumstances will we reveal the source.",
        "Under no circumstances revealed we the source.",
        "Under no circumstances will reveal we the source."
      ],
      correctIndex: 1,
      explanation:
        "Under no circumstances + auxiliary + subject + verb: will we reveal."
    },
    {
      question: "Choose the correct verb: 'Despite ___ exhausted, she continued working.'",
      choices: ["to be", "being", "been", "be"],
      correctIndex: 1,
      explanation:
        "After despite, we often use a noun or -ing form: despite being exhausted."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "He had hardly finished speaking when the audience clapped.",
        "He hardly had finished speaking when the audience clapped.",
        "Hardly he had finished speaking when the audience clapped.",
        "He had hardly finish speaking when the audience clapped."
      ],
      correctIndex: 0,
      explanation:
        "Had hardly + past participle finished is correct in this structure."
    },
    {
      question: "Choose the correct verb form: 'The project is believed ___ a success.'",
      choices: ["to be", "be", "to have be", "to being"],
      correctIndex: 0,
      explanation:
        "Believed + infinitive: believed to be a success."
    },
    {
      question: "Which sentence correctly uses a mixed conditional?",
      choices: [
        "If I had studied harder, I would have a better job now.",
        "If I studied harder, I would have a better job now.",
        "If I had studied harder, I would have had a better job now.",
        "If I would have studied harder, I would have a better job now."
      ],
      correctIndex: 0,
      explanation:
        "Past condition affecting present result: If I had studied harder (past), I would have a better job now (present)."
    },
    {
      question: "Choose the correct verb: 'He seems ___ the requirements for the position.'",
      choices: ["meeting", "to have met", "to meeted", "to be meet"],
      correctIndex: 1,
      explanation:
        "Seem + perfect infinitive for completed action: to have met the requirements."
    },
    {
      question: "Which sentence is correct?",
      choices: [
        "Were he to arrive now, we will still accept his application.",
        "Were he to arrive now, we would still accept his application.",
        "Was he to arrive now, we would still accept his application.",
        "If he to arrive now, we would still accept his application."
      ],
      correctIndex: 1,
      explanation:
        "Inversion with were he to + base verb expresses a hypothetical present; result: would still accept."
    }
  ]
};

