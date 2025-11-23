const CONJUNCTION_QUESTIONS = {
  beginner: [
 {
      id: "conj_beg_1",
      question: "I like coffee ___ I don't like tea.",
      options: ["and", "but", "or", "so"],
      answer: "but",
      explanation: "“But” is used to show a contrast between liking coffee and not liking tea."
    },
    {
      id: "conj_beg_2",
      question: "She is tired ___ she will go to bed early.",
      options: ["so", "but", "or", "yet"],
      answer: "so",
      explanation: "“So” introduces the result of being tired: she will go to bed early."
    },
    {
      id: "conj_beg_3",
      question: "Do you want rice ___ noodles for lunch?",
      options: ["and", "but", "or", "so"],
      answer: "or",
      explanation: "“Or” is used when giving a choice between two options."
    },
    {
      id: "conj_beg_4",
      question: "My brother ___ my sister are both teachers.",
      options: ["or", "and", "but", "so"],
      answer: "and",
      explanation: "“And” joins two equal nouns that share the same verb."
    },
    {
      id: "conj_beg_5",
      question: "It was raining, ___ we stayed inside.",
      options: ["and", "but", "so", "or"],
      answer: "so",
      explanation: "“So” shows the result of the rain: they stayed inside."
    },
    {
      id: "conj_beg_6",
      question: "She studied hard, ___ she still failed the test.",
      options: ["so", "and", "or", "yet"],
      answer: "yet",
      explanation: "“Yet” shows an unexpected contrast between studying hard and failing."
    },
    {
      id: "conj_beg_7",
      question: "I will call you ___ I arrive home.",
      options: ["although", "because", "when", "so"],
      answer: "when",
      explanation: "“When” is a time conjunction that shows at what time the call will happen."
    },
    {
      id: "conj_beg_8",
      question: "We stayed at home ___ it was very cold outside.",
      options: ["because", "when", "if", "or"],
      answer: "because",
      explanation: "“Because” introduces the reason for staying at home."
    },
    {
      id: "conj_beg_9",
      question: "You can have tea ___ coffee, but not both.",
      options: ["and", "or", "so", "yet"],
      answer: "or",
      explanation: "“Or” is used to express one option or the other, not both."
    },
    {
      id: "conj_beg_10",
      question: "She wanted to go out, ___ she had a lot of work to do.",
      options: ["and", "so", "but", "or"],
      answer: "but",
      explanation: "“But” shows contrast between wanting to go out and having work to do."
    },
    {
      id: "conj_beg_11",
      question: "I will help you ___ you ask politely.",
      options: ["so", "if", "but", "when"],
      answer: "if",
      explanation: "“If” introduces a condition: help will be given only if you ask politely."
    },
    {
      id: "conj_beg_12",
      question: "He went to the store ___ bought some milk.",
      options: ["or", "but", "and", "so"],
      answer: "and",
      explanation: "“And” adds another action that he did after going to the store."
    },
    {
      id: "conj_beg_13",
      question: "She didn't call me ___ send me a message.",
      options: ["or", "and", "but", "so"],
      answer: "or",
      explanation: "In a negative sentence, “or” is used to join two actions that did not happen."
    },
    {
      id: "conj_beg_14",
      question: "I stayed awake ___ I was very sleepy.",
      options: ["so", "because", "although", "and"],
      answer: "although",
      explanation: "“Although” shows contrast between being sleepy and staying awake."
    },
    {
      id: "conj_beg_15",
      question: "We can go to the park ___ we can watch a movie at home.",
      options: ["so", "and", "or", "but"],
      answer: "or",
      explanation: "“Or” is used to present two possible activities."
    },
    {
      id: "conj_beg_16",
      question: "She went to the doctor ___ she was feeling sick.",
      options: ["because", "so", "or", "but"],
      answer: "because",
      explanation: "“Because” introduces the reason for going to the doctor."
    },
    {
      id: "conj_beg_17",
      question: "He is poor ___ he is honest.",
      options: ["so", "and", "but", "or"],
      answer: "but",
      explanation: "“But” contrasts being poor with being honest."
    },
    {
      id: "conj_beg_18",
      question: "I will wait here ___ you come back.",
      options: ["until", "so", "or", "but"],
      answer: "until",
      explanation: "“Until” shows the time limit for the waiting."
    },
    {
      id: "conj_beg_19",
      question: "Close the window ___ the room will be cold.",
      options: ["because", "and", "or", "but"],
      answer: "or",
      explanation: "“Or” shows what will happen if the window is not closed."
    },
    {
      id: "conj_beg_20",
      question: "He was hungry, ___ he ate a sandwich.",
      options: ["and", "but", "so", "or"],
      answer: "so",
      explanation: "“So” introduces the result of being hungry."
    },
    {
      id: "conj_beg_21",
      question: "She sings ___ she plays the guitar.",
      options: ["and", "because", "or", "but"],
      answer: "and",
      explanation: "“And” joins two actions she can do."
    },
    {
      id: "conj_beg_22",
      question: "We cannot start the meeting ___ the manager arrives.",
      options: ["when", "while", "until", "so"],
      answer: "until",
      explanation: "“Until” shows that the meeting can start only after the manager arrives."
    },
    {
      id: "conj_beg_23",
      question: "He likes to read ___ to write stories.",
      options: ["or", "and", "but", "so"],
      answer: "and",
      explanation: "“And” is used because he likes both activities."
    },
    {
      id: "conj_beg_24",
      question: "I went to bed early ___ I was very tired.",
      options: ["but", "although", "because", "or"],
      answer: "because",
      explanation: "“Because” gives the reason for going to bed early."
    },
    {
      id: "conj_beg_25",
      question: "We can stay here ___ we can go home now.",
      options: ["and", "but", "or", "so"],
      answer: "or",
      explanation: "“Or” presents the choice between staying and going home."
    },
    {
      id: "conj_beg_26",
      question: "The baby cried ___ he was hungry.",
      options: ["so", "because", "but", "and"],
      answer: "because",
      explanation: "“Because” introduces the reason the baby cried."
    },
    {
      id: "conj_beg_27",
      question: "I brought an umbrella ___ it might rain.",
      options: ["because", "although", "if", "and"],
      answer: "because",
      explanation: "“Because” explains why the umbrella was brought."
    },
    {
      id: "conj_beg_28",
      question: "She smiled ___ she was happy.",
      options: ["but", "because", "or", "yet"],
      answer: "because",
      explanation: "“Because” gives the reason for her smile."
    },
    {
      id: "conj_beg_29",
      question: "He failed the exam, ___ he didn't study enough.",
      options: ["so", "but", "because", "or"],
      answer: "because",
      explanation: "“Because” shows the reason for failing the exam."
    },
    {
      id: "conj_beg_30",
      question: "I will call you ___ I finish my work.",
      options: ["or", "when", "but", "so"],
      answer: "when",
      explanation: "“When” indicates the time the call will be made."
    },
    {
      id: "conj_beg_31",
      question: "She was sick, ___ she still went to school.",
      options: ["so", "but", "because", "or"],
      answer: "but",
      explanation: "“But” contrasts being sick with still going to school."
    },
    {
      id: "conj_beg_32",
      question: "You must hurry, ___ you will miss the bus.",
      options: ["or", "and", "because", "but"],
      answer: "or",
      explanation: "“Or” shows the negative result if you do not hurry."
    },
    {
      id: "conj_beg_33",
      question: "He is tall ___ strong.",
      options: ["or", "so", "and", "but"],
      answer: "and",
      explanation: "“And” adds another positive quality to describe him."
    },
    {
      id: "conj_beg_34",
      question: "I stayed at home ___ it was raining heavily.",
      options: ["so", "because", "but", "or"],
      answer: "because",
      explanation: "“Because” gives the reason for staying at home."
    },
    {
      id: "conj_beg_35",
      question: "They were tired, ___ they continued working.",
      options: ["so", "but", "because", "and"],
      answer: "but",
      explanation: "“But” shows contrast between being tired and continuing to work."
    },
    {
      id: "conj_beg_36",
      question: "She passed the test ___ she studied every day.",
      options: ["because", "so", "or", "but"],
      answer: "because",
      explanation: "“Because” explains why she passed the test."
    },
    {
      id: "conj_beg_37",
      question: "I will help you ___ I can.",
      options: ["but", "if", "when", "or"],
      answer: "if",
      explanation: "“If” expresses the condition under which help will be given."
    },
    {
      id: "conj_beg_38",
      question: "We will go out ___ the rain stops.",
      options: ["if", "although", "because", "or"],
      answer: "if",
      explanation: "“If” shows that going out depends on the rain stopping."
    },
    {
      id: "conj_beg_39",
      question: "I like apples ___ I don't like bananas.",
      options: ["and", "but", "or", "so"],
      answer: "but",
      explanation: "“But” is used to contrast two different preferences."
    },
    {
      id: "conj_beg_40",
      question: "She cleaned the house ___ cooked dinner.",
      options: ["or", "but", "so", "and"],
      answer: "and",
      explanation: "“And” joins two actions she did."
    },
    {
      id: "conj_beg_41",
      question: "He didn't go to work ___ he was sick.",
      options: ["because", "so", "but", "or"],
      answer: "because",
      explanation: "“Because” explains why he didn't go to work."
    },
    {
      id: "conj_beg_42",
      question: "I will come to your party ___ I finish my project on time.",
      options: ["if", "so", "and", "yet"],
      answer: "if",
      explanation: "“If” shows that coming to the party depends on finishing the project."
    },
    {
      id: "conj_beg_43",
      question: "She was scared, ___ she entered the dark room.",
      options: ["so", "but", "because", "or"],
      answer: "but",
      explanation: "“But” contrasts being scared with still entering the dark room."
    },
    {
      id: "conj_beg_44",
      question: "He opened the window ___ fresh air could come in.",
      options: ["so", "but", "or", "and"],
      answer: "so",
      explanation: "“So” shows the purpose or result of opening the window."
    },
    {
      id: "conj_beg_45",
      question: "We will stay home ___ watch a movie.",
      options: ["so", "and", "but", "or"],
      answer: "and",
      explanation: "“And” connects two actions they will do at home."
    },
    {
      id: "conj_beg_46",
      question: "She can speak English ___ Spanish.",
      options: ["but", "or", "and", "so"],
      answer: "and",
      explanation: "“And” joins the two languages she can speak."
    },
    {
      id: "conj_beg_47",
      question: "You should study hard, ___ you might fail the exam.",
      options: ["and", "or", "so", "because"],
      answer: "or",
      explanation: "“Or” introduces the possible consequence if you do not study."
    },
    {
      id: "conj_beg_48",
      question: "He was late ___ there was heavy traffic.",
      options: ["but", "because", "so", "and"],
      answer: "because",
      explanation: "“Because” gives the reason he was late."
    },
    {
      id: "conj_beg_49",
      question: "She didn't buy the dress ___ it was too expensive.",
      options: ["because", "so", "but", "or"],
      answer: "because",
      explanation: "“Because” explains why she didn't buy the dress."
    },
    {
      id: "conj_beg_50",
      question: "I like swimming ___ I don't like diving.",
      options: ["and", "or", "but", "so"],
      answer: "but",
      explanation: "“But” contrasts liking one activity and not liking the other."
    }   
  ],

  // ============================================
  // 50 INTERMEDIATE QUESTIONS – CONJUNCTIONS
  // ============================================
  intermediate: [
    {
      id: "conj_int_1",
      question: "_______ he was very tired, he continued working.",
      options: ["Although", "Because", "So", "If"],
      answer: "Although",
      explanation: "“Although” is used to show contrast between being tired and still continuing to work."
    },
    {
      id: "conj_int_2",
      question: "She will pass the exam _______ she studies hard.",
      options: ["if", "although", "because", "so"],
      answer: "if",
      explanation: "“If” introduces the condition that she must study hard to pass."
    },
    {
      id: "conj_int_3",
      question: "He stayed at home _______ the weather was bad.",
      options: ["because", "although", "while", "until"],
      answer: "because",
      explanation: "“Because” gives the reason why he stayed at home."
    },
    {
      id: "conj_int_4",
      question: "_______ the rain stopped, the children went outside.",
      options: ["When", "Because", "If", "So"],
      answer: "When",
      explanation: "“When” is a time conjunction showing that the children went out after the rain stopped."
    },
    {
      id: "conj_int_5",
      question: "He likes to read novels _______ he dislikes poetry.",
      options: ["but", "and", "so", "or"],
      answer: "but",
      explanation: "“But” shows contrast between liking novels and disliking poetry."
    },
    {
      id: "conj_int_6",
      question: "You cannot enter the building _______ you have an ID card.",
      options: ["unless", "because", "although", "so"],
      answer: "unless",
      explanation: "“Unless” means “except if,” showing the condition for entering."
    },
    {
      id: "conj_int_7",
      question: "We left early _______ we could avoid the traffic.",
      options: ["so that", "although", "while", "if"],
      answer: "so that",
      explanation: "“So that” expresses purpose: they left early in order to avoid traffic."
    },
    {
      id: "conj_int_8",
      question: "_______ he was not feeling well, he went to work.",
      options: ["Although", "Because", "So", "If"],
      answer: "Although",
      explanation: "“Although” shows contrast between not feeling well and still going to work."
    },
    {
      id: "conj_int_9",
      question: "She did not attend the meeting _______ she had an emergency.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” gives the reason why she did not attend the meeting."
    },
    {
      id: "conj_int_10",
      question: "We waited in the lobby _______ the manager arrived.",
      options: ["until", "because", "if", "so"],
      answer: "until",
      explanation: "“Until” indicates that the waiting continued up to the time the manager arrived."
    },
    {
      id: "conj_int_11",
      question: "He speaks softly _______ everyone can understand him.",
      options: ["so that", "although", "because", "if"],
      answer: "so that",
      explanation: "“So that” shows purpose: he speaks softly in order for everyone to understand."
    },
    {
      id: "conj_int_12",
      question: "She was angry _______ she did not show it.",
      options: ["but", "so", "because", "or"],
      answer: "but",
      explanation: "“But” contrasts being angry with not showing it."
    },
    {
      id: "conj_int_13",
      question: "You can borrow my laptop _______ you return it tomorrow.",
      options: ["provided that", "although", "because", "so"],
      answer: "provided that",
      explanation: "“Provided that” sets a condition that must be met to borrow the laptop."
    },
    {
      id: "conj_int_14",
      question: "I will not go out _______ it stops raining.",
      options: ["until", "so", "because", "although"],
      answer: "until",
      explanation: "“Until” shows that going out depends on the rain stopping."
    },
    {
      id: "conj_int_15",
      question: "She smiled _______ she was nervous inside.",
      options: ["although", "because", "so", "if"],
      answer: "although",
      explanation: "“Although” shows contrast between smiling and feeling nervous."
    },
    {
      id: "conj_int_16",
      question: "He missed the flight _______ he left home late.",
      options: ["because", "although", "until", "if"],
      answer: "because",
      explanation: "“Because” explains why he missed the flight."
    },
    {
      id: "conj_int_17",
      question: "_______ you work hard, you will achieve your goals.",
      options: ["If", "Because", "Although", "While"],
      answer: "If",
      explanation: "“If” introduces the condition for achieving goals."
    },
    {
      id: "conj_int_18",
      question: "The students were quiet _______ the teacher was speaking.",
      options: ["while", "because", "so", "although"],
      answer: "while",
      explanation: "“While” indicates two actions happening at the same time."
    },
    {
      id: "conj_int_19",
      question: "She did not get the job _______ she had good qualifications.",
      options: ["although", "because", "so", "if"],
      answer: "although",
      explanation: "“Although” shows contrast between not getting the job and having good qualifications."
    },
    {
      id: "conj_int_20",
      question: "Bring your umbrella _______ it rains later.",
      options: ["in case", "because", "until", "although"],
      answer: "in case",
      explanation: "“In case” is used to show precaution for a possible future situation."
    },
    {
      id: "conj_int_21",
      question: "He stayed calm _______ everyone around him was panicking.",
      options: ["while", "because", "so", "if"],
      answer: "while",
      explanation: "“While” contrasts his calm behavior with others panicking at the same time."
    },
    {
      id: "conj_int_22",
      question: "We can go hiking _______ the weather is good tomorrow.",
      options: ["if", "although", "because", "so"],
      answer: "if",
      explanation: "“If” shows hiking is conditional on good weather."
    },
    {
      id: "conj_int_23",
      question: "He failed the test _______ he did not review the lessons.",
      options: ["because", "although", "while", "so"],
      answer: "because",
      explanation: "“Because” shows the reason he failed."
    },
    {
      id: "conj_int_24",
      question: "I will join the contest _______ my parents allow me.",
      options: ["if", "because", "when", "although"],
      answer: "if",
      explanation: "“If” introduces the condition of parental permission."
    },
    {
      id: "conj_int_25",
      question: "The child kept crying _______ he lost his toy.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” explains why the child kept crying."
    },
    {
      id: "conj_int_26",
      question: "He turned off his phone _______ he could focus on his work.",
      options: ["so that", "although", "because", "if"],
      answer: "so that",
      explanation: "“So that” expresses the purpose of turning off his phone."
    },
    {
      id: "conj_int_27",
      question: "We arrived early _______ we could get good seats.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” shows that arriving early was done to get good seats."
    },
    {
      id: "conj_int_28",
      question: "She kept studying _______ she was very tired.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” emphasizes the contrast between being tired and continuing to study."
    },
    {
      id: "conj_int_29",
      question: "I will not sign the document _______ I read it carefully.",
      options: ["until", "because", "so", "although"],
      answer: "until",
      explanation: "“Until” indicates that signing will happen only after reading carefully."
    },
    {
      id: "conj_int_30",
      question: "He took a taxi _______ he would not be late.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” shows purpose: he took a taxi to avoid being late."
    },
    {
      id: "conj_int_31",
      question: "She cannot leave the office _______ her boss gives permission.",
      options: ["until", "because", "so", "although"],
      answer: "until",
      explanation: "“Until” shows that leaving is not allowed before permission is given."
    },
    {
      id: "conj_int_32",
      question: "_______ he apologized, she refused to forgive him.",
      options: ["Although", "Because", "So", "If"],
      answer: "Although",
      explanation: "“Although” shows contrast between him apologizing and her refusing to forgive."
    },
    {
      id: "conj_int_33",
      question: "We need to hurry _______ we will miss the beginning of the show.",
      options: ["or", "and", "because", "although"],
      answer: "or",
      explanation: "“Or” shows the negative consequence of not hurrying."
    },
    {
      id: "conj_int_34",
      question: "You should check your answers _______ you submit the test.",
      options: ["before", "so", "although", "because"],
      answer: "before",
      explanation: "“Before” indicates the correct order of actions."
    },
    {
      id: "conj_int_35",
      question: "He will call you _______ he arrives at the hotel.",
      options: ["when", "because", "if", "although"],
      answer: "when",
      explanation: "“When” is used to show the time he will call."
    },
    {
      id: "conj_int_36",
      question: "She saved money _______ she could buy a new laptop.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” shows the purpose of saving money."
    },
    {
      id: "conj_int_37",
      question: "They canceled the picnic _______ it started to rain.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” explains why the picnic was canceled."
    },
    {
      id: "conj_int_38",
      question: "You will not succeed _______ you work hard.",
      options: ["unless", "because", "when", "so"],
      answer: "unless",
      explanation: "“Unless” means “if not,” showing the need to work hard to succeed."
    },
    {
      id: "conj_int_39",
      question: "She stayed calm _______ the situation was very serious.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” shows strong contrast between calmness and seriousness."
    },
    {
      id: "conj_int_40",
      question: "He reads the news every day _______ he can stay informed.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” expresses the purpose of reading the news."
    },
    {
      id: "conj_int_41",
      question: "We will stay indoors _______ the storm is over.",
      options: ["until", "because", "if", "although"],
      answer: "until",
      explanation: "“Until” indicates staying indoors up to the end of the storm."
    },
    {
      id: "conj_int_42",
      question: "He looks confident _______ he is actually very nervous.",
      options: ["although", "because", "so", "if"],
      answer: "although",
      explanation: "“Although” shows contrast between appearance and reality."
    },
    {
      id: "conj_int_43",
      question: "She will not speak _______ she is asked a question.",
      options: ["unless", "because", "when", "so"],
      answer: "unless",
      explanation: "“Unless” means she will speak only if she is asked."
    },
    {
      id: "conj_int_44",
      question: "_______ the lights went out, we continued the meeting.",
      options: ["Even though", "Because", "So", "If"],
      answer: "Even though",
      explanation: "“Even though” shows contrast between the power outage and continuing the meeting."
    },
    {
      id: "conj_int_45",
      question: "I will lend you the book _______ you promise to return it.",
      options: ["if", "because", "although", "so"],
      answer: "if",
      explanation: "“If” shows that lending the book depends on the promise."
    },
    {
      id: "conj_int_46",
      question: "He whispered _______ he did not want to wake the baby.",
      options: ["because", "so", "although", "if"],
      answer: "because",
      explanation: "“Because” gives the reason he whispered."
    },
    {
      id: "conj_int_47",
      question: "She goes jogging every morning _______ it is raining.",
      options: ["unless", "if", "although", "because"],
      answer: "unless",
      explanation: "“Unless” here means she will jog except when it is raining."
    },
    {
      id: "conj_int_48",
      question: "We turned down the music _______ the neighbors complained.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” shows the reason for turning down the music."
    },
    {
      id: "conj_int_49",
      question: "He went to bed early _______ he had to get up at 4 a.m.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” explains why he went to bed early."
    },
    {
      id: "conj_int_50",
      question: "She wore a coat _______ it was very cold outside.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” introduces the reason for wearing a coat."
    }
  ],

  // ============================================
  // 50 ADVANCED QUESTIONS – CONJUNCTIONS
  // ============================================
  advanced: [
    {
      id: "conj_adv_1",
      question: "She is not only intelligent _______ also very hardworking.",
      options: ["but", "and", "or", "so"],
      answer: "but",
      explanation: "The correlative conjunction pair is “not only … but also.”"
    },
    {
      id: "conj_adv_2",
      question: "Either you submit the report today _______ you will miss the deadline.",
      options: ["or", "and", "but", "so"],
      answer: "or",
      explanation: "“Either … or” is used to show two alternative possibilities."
    },
    {
      id: "conj_adv_3",
      question: "She is both kind _______ generous.",
      options: ["and", "or", "but", "so"],
      answer: "and",
      explanation: "“Both … and” is the correct correlative pair."
    },
    {
      id: "conj_adv_4",
      question: "Neither the manager _______ the staff knew about the change.",
      options: ["or", "and", "but", "so"],
      answer: "or",
      explanation: "“Neither … nor” is the correct correlative conjunction pair."
    },
    {
      id: "conj_adv_5",
      question: "Whether you agree _______ not, the decision has been made.",
      options: ["or", "and", "but", "so"],
      answer: "or",
      explanation: "“Whether … or” is used to show two alternatives, both leading to the same result."
    },
    {
      id: "conj_adv_6",
      question: "He speaks slowly _______ clearly, so everyone understands him.",
      options: ["and", "or", "but", "yet"],
      answer: "and",
      explanation: "“And” joins two positive adverbs describing how he speaks."
    },
    {
      id: "conj_adv_7",
      question: "The project is behind schedule, _______ we need to work overtime.",
      options: ["so", "but", "because", "although"],
      answer: "so",
      explanation: "“So” introduces the necessary consequence of the delay."
    },
    {
      id: "conj_adv_8",
      question: "The plan was excellent; _______ it was not executed properly.",
      options: ["however", "because", "so", "if"],
      answer: "however",
      explanation: "“However” shows contrast between an excellent plan and poor execution."
    },
    {
      id: "conj_adv_9",
      question: "He is older _______ he looks.",
      options: ["than", "as", "like", "while"],
      answer: "than",
      explanation: "“Than” is used in comparisons after comparative adjectives like “older.”"
    },
    {
      id: "conj_adv_10",
      question: "She acted _______ she owned the place.",
      options: ["as if", "because", "so that", "until"],
      answer: "as if",
      explanation: "“As if” introduces a comparison to an unreal or imaginary situation."
    },
    {
      id: "conj_adv_11",
      question: "He works _______ he were the only person responsible.",
      options: ["as if", "because", "although", "so"],
      answer: "as if",
      explanation: "“As if” shows he behaves in a way that suggests something that is not literally true."
    },
    {
      id: "conj_adv_12",
      question: "Hardly had he arrived _______ the meeting started.",
      options: ["when", "than", "before", "because"],
      answer: "when",
      explanation: "In this inversion pattern, “Hardly … when” is the correct pair."
    },
    {
      id: "conj_adv_13",
      question: "Scarcely had she finished speaking _______ the phone rang.",
      options: ["when", "than", "because", "if"],
      answer: "when",
      explanation: "The fixed expression is “Scarcely … when” or “Scarcely … had … when.”"
    },
    {
      id: "conj_adv_14",
      question: "No sooner had they left _______ it began to rain.",
      options: ["than", "when", "because", "if"],
      answer: "than",
      explanation: "“No sooner … than” is the correct correlative conjunction pattern."
    },
    {
      id: "conj_adv_15",
      question: "He is as tall _______ his brother.",
      options: ["as", "than", "like", "while"],
      answer: "as",
      explanation: "“As … as” is the correct pattern for equal comparison."
    },
    {
      id: "conj_adv_16",
      question: "She did not know _______ to laugh or cry.",
      options: ["whether", "either", "neither", "both"],
      answer: "whether",
      explanation: "“Whether” introduces two possible reactions: to laugh or cry."
    },
    {
      id: "conj_adv_17",
      question: "He worked hard _______ he could support his family.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” expresses his purpose in working hard."
    },
    {
      id: "conj_adv_18",
      question: "We will finish the task, _______ it takes all night.",
      options: ["even if", "because", "so", "when"],
      answer: "even if",
      explanation: "“Even if” emphasizes determination despite a possible difficulty."
    },
    {
      id: "conj_adv_19",
      question: "He refused to quit, _______ the situation seemed hopeless.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” highlights strong contrast between appearance and his decision."
    },
    {
      id: "conj_adv_20",
      question: "She kept quiet _______ she disagreed with the decision.",
      options: ["although", "because", "so", "if"],
      answer: "although",
      explanation: "“Although” shows a contrast between disagreement and remaining quiet."
    },
    {
      id: "conj_adv_21",
      question: "You must follow the instructions exactly, _______ you may damage the device.",
      options: ["or", "and", "so", "but"],
      answer: "or",
      explanation: "“Or” introduces the negative consequence of not following instructions."
    },
    {
      id: "conj_adv_22",
      question: "Not only did she finish early, _______ she also helped her teammates.",
      options: ["but", "and", "so", "or"],
      answer: "but",
      explanation: "The correct form is “Not only … but also …” even with inversion."
    },
    {
      id: "conj_adv_23",
      question: "He stayed home, _______ he was feeling unwell.",
      options: ["for", "so", "and", "yet"],
      answer: "for",
      explanation: "Here, “for” is a coordinating conjunction meaning “because.”"
    },
    {
      id: "conj_adv_24",
      question: "I will call you later _______ I have some free time.",
      options: ["when", "because", "although", "so"],
      answer: "when",
      explanation: "“When” introduces the time condition for calling."
    },
    {
      id: "conj_adv_25",
      question: "She hid the letter _______ no one could find it.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” explains the purpose of hiding the letter."
    },
    {
      id: "conj_adv_26",
      question: "He acts _______ he knew everything.",
      options: ["as if", "because", "so that", "until"],
      answer: "as if",
      explanation: "“As if” is used to show behavior that suggests something that is not necessarily true."
    },
    {
      id: "conj_adv_27",
      question: "She sings better _______ she did last year.",
      options: ["than", "as", "like", "while"],
      answer: "than",
      explanation: "“Than” is used after a comparative form like “better.”"
    },
    {
      id: "conj_adv_28",
      question: "You can pay in cash _______ by credit card.",
      options: ["or", "and", "but", "so"],
      answer: "or",
      explanation: "“Or” expresses a choice between two payment methods."
    },
    {
      id: "conj_adv_29",
      question: "Both the manager _______ the employees attended the training.",
      options: ["and", "or", "but", "so"],
      answer: "and",
      explanation: "“Both … and” joins two subjects that share the same verb."
    },
    {
      id: "conj_adv_30",
      question: "Neither the documents _______ the samples have arrived.",
      options: ["nor", "or", "and", "but"],
      answer: "nor",
      explanation: "“Neither … nor” joins two negative items."
    },
    {
      id: "conj_adv_31",
      question: "He failed the test, _______ he had studied all night.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” shows strong contrast between studying and failing."
    },
    {
      id: "conj_adv_32",
      question: "We stayed indoors _______ the storm passed.",
      options: ["until", "because", "if", "although"],
      answer: "until",
      explanation: "“Until” shows that they stayed inside up to the time the storm ended."
    },
    {
      id: "conj_adv_33",
      question: "He did not complain, _______ he was clearly disappointed.",
      options: ["although", "because", "so", "if"],
      answer: "although",
      explanation: "“Although” contrasts his lack of complaint with his disappointment."
    },
    {
      id: "conj_adv_34",
      question: "You will receive the bonus _______ you meet all your targets.",
      options: ["if", "because", "although", "so"],
      answer: "if",
      explanation: "“If” gives the condition to receive the bonus."
    },
    {
      id: "conj_adv_35",
      question: "She speaks Spanish _______ fluent English.",
      options: ["as well as", "and", "or", "but"],
      answer: "as well as",
      explanation: "“As well as” adds extra information in a slightly more formal way than “and.”"
    },
    {
      id: "conj_adv_36",
      question: "He stayed late at the office _______ he could finish the report.",
      options: ["so that", "although", "because", "if"],
      answer: "so that",
      explanation: "“So that” expresses his purpose in staying late."
    },
    {
      id: "conj_adv_37",
      question: "The results were worse _______ we expected.",
      options: ["than", "as", "like", "while"],
      answer: "than",
      explanation: "“Than” is the conjunction used in comparisons with comparatives like “worse.”"
    },
    {
      id: "conj_adv_38",
      question: "We will start the meeting _______ everyone has arrived.",
      options: ["after", "because", "if", "although"],
      answer: "after",
      explanation: "“After” shows the time relationship between arrival and starting the meeting."
    },
    {
      id: "conj_adv_39",
      question: "He talks as though he _______ the answer.",
      options: ["knew", "knows", "know", "knowing"],
      answer: "knew",
      explanation: "“As though” or “as if” are often followed by a past form to show an unreal situation."
    },
    {
      id: "conj_adv_40",
      question: "The more you practice, _______ you will improve.",
      options: ["the more", "so", "than", "because"],
      answer: "the more",
      explanation: "In this structure, “The more … the more …” is the correct correlative pattern."
    },
    {
      id: "conj_adv_41",
      question: "She decided to stay, _______ it was getting late.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” shows contrast between the time and her decision to stay."
    },
    {
      id: "conj_adv_42",
      question: "He will continue working _______ he finishes the project.",
      options: ["until", "because", "if", "although"],
      answer: "until",
      explanation: "“Until” shows that he will work up to the time the project is finished."
    },
    {
      id: "conj_adv_43",
      question: "She did not stop practicing, _______ she was tired.",
      options: ["although", "because", "so", "if"],
      answer: "although",
      explanation: "“Although” shows contrast between her tiredness and her continuous practice."
    },
    {
      id: "conj_adv_44",
      question: "We will travel next month _______ we can get a discount.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” expresses the purpose of traveling next month."
    },
    {
      id: "conj_adv_45",
      question: "He stayed positive, _______ the situation was difficult.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” emphasizes contrast between his attitude and the situation."
    },
    {
      id: "conj_adv_46",
      question: "We arrived late _______ the traffic was heavy.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” introduces the reason for arriving late."
    },
    {
      id: "conj_adv_47",
      question: "She will join us for dinner _______ she finishes work early.",
      options: ["if", "because", "although", "so"],
      answer: "if",
      explanation: "“If” shows a condition for her joining the dinner."
    },
    {
      id: "conj_adv_48",
      question: "He did not hesitate, _______ he knew the risks.",
      options: ["although", "because", "so", "if"],
      answer: "although",
      explanation: "“Although” contrasts his lack of hesitation with his knowledge of the risks."
    },
    {
      id: "conj_adv_49",
      question: "You may leave early _______ you finish all your tasks.",
      options: ["provided that", "because", "although", "so"],
      answer: "provided that",
      explanation: "“Provided that” introduces a condition that must be satisfied."
    },
    {
      id: "conj_adv_50",
      question: "She speaks more confidently now _______ she used to.",
      options: ["than", "as", "like", "while"],
      answer: "than",
      explanation: "“Than” is used to compare her current confidence with the past."
    }
  ],

  // ============================================
  // 50 SUPER LEVEL QUESTIONS – CONJUNCTIONS
  // (Harder contrasts, correlative pairs, subtle logic)
  // ============================================
  super: [
    {
      id: "conj_sup_1",
      question: "Not only was the presentation informative, _______ it was also entertaining.",
      options: ["but", "and", "so", "or"],
      answer: "but",
      explanation: "The correct correlative pattern is “not only … but also ….”"
    },
    {
      id: "conj_sup_2",
      question: "He kept working _______ everyone else had already gone home.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” shows strong contrast between his action and others leaving."
    },
    {
      id: "conj_sup_3",
      question: "We will approve your request _______ you submit the required documents.",
      options: ["provided that", "although", "because", "so"],
      answer: "provided that",
      explanation: "“Provided that” introduces a strict condition for approval."
    },
    {
      id: "conj_sup_4",
      question: "She behaves _______ she had never made a mistake in her life.",
      options: ["as if", "because", "so that", "before"],
      answer: "as if",
      explanation: "“As if” is used to describe behavior that suggests something that is not really true."
    },
    {
      id: "conj_sup_5",
      question: "No sooner had the meeting ended _______ they began to argue.",
      options: ["than", "when", "because", "if"],
      answer: "than",
      explanation: "The fixed expression is “No sooner … than ….”"
    },
    {
      id: "conj_sup_6",
      question: "Hardly had he finished his speech _______ the audience started clapping.",
      options: ["when", "than", "because", "if"],
      answer: "when",
      explanation: "“Hardly … when …” is the correct combination in this inversion structure."
    },
    {
      id: "conj_sup_7",
      question: "Scarcely had we sat down _______ the lights went out.",
      options: ["when", "than", "because", "if"],
      answer: "when",
      explanation: "“Scarcely … when …” is a common pattern to show something happened immediately after."
    },
    {
      id: "conj_sup_8",
      question: "The more you read, _______ you understand complex texts.",
      options: ["the better", "so", "than", "because"],
      answer: "the better",
      explanation: "The structure is “The more … the better …” to show proportional increase."
    },
    {
      id: "conj_sup_9",
      question: "He refused to give up, _______ the odds were against him.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” emphasizes a strong contrast between the odds and his decision."
    },
    {
      id: "conj_sup_10",
      question: "You will continue to receive support _______ you follow the guidelines carefully.",
      options: ["as long as", "because", "although", "so"],
      answer: "as long as",
      explanation: "“As long as” expresses a condition that must continue to be met."
    },
    {
      id: "conj_sup_11",
      question: "She treated him _______ he were her own brother.",
      options: ["as if", "because", "so that", "until"],
      answer: "as if",
      explanation: "“As if” introduces a comparison to an unreal or imagined situation."
    },
    {
      id: "conj_sup_12",
      question: "He is not so much careless _______ he is overconfident.",
      options: ["as", "than", "like", "while"],
      answer: "as",
      explanation: "The expression “not so much A as B” means B is a more accurate description."
    },
    {
      id: "conj_sup_13",
      question: "He left early, _______ he had a long journey ahead of him.",
      options: ["for", "so", "but", "or"],
      answer: "for",
      explanation: "Here, “for” acts as a coordinating conjunction meaning “because.”"
    },
    {
      id: "conj_sup_14",
      question: "We must act now, _______ it may be too late.",
      options: ["or", "and", "so", "because"],
      answer: "or",
      explanation: "“Or” presents the negative consequence of not acting now."
    },
    {
      id: "conj_sup_15",
      question: "He decided to stay, _______ his friends encouraged him to leave.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” shows contrast between advice and his decision."
    },
    {
      id: "conj_sup_16",
      question: "She kept smiling, _______ she was deeply worried.",
      options: ["although", "because", "so", "if"],
      answer: "although",
      explanation: "“Although” contrasts her outward expression with her inner feelings."
    },
    {
      id: "conj_sup_17",
      question: "You will not understand the problem _______ you look at it from another angle.",
      options: ["unless", "because", "when", "so"],
      answer: "unless",
      explanation: "“Unless” means “if not,” showing a necessary change in perspective."
    },
    {
      id: "conj_sup_18",
      question: "She will attend the seminar _______ it is directly related to her work.",
      options: ["only if", "because", "so", "although"],
      answer: "only if",
      explanation: "“Only if” introduces a strict condition for attending."
    },
    {
      id: "conj_sup_19",
      question: "They continued the project _______ they had lost their main sponsor.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” shows contrast between losing the sponsor and continuing."
    },
    {
      id: "conj_sup_20",
      question: "He speaks to everyone _______ they were old friends.",
      options: ["as if", "because", "so that", "when"],
      answer: "as if",
      explanation: "“As if” is used to describe a way of speaking that suggests familiarity."
    },
    {
      id: "conj_sup_21",
      question: "She will not sign the contract _______ her lawyer reviews it.",
      options: ["until", "because", "so", "if"],
      answer: "until",
      explanation: "“Until” shows that signing will only happen after the review."
    },
    {
      id: "conj_sup_22",
      question: "We decided to postpone the event _______ the weather forecast was terrible.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” introduces the reason for postponing."
    },
    {
      id: "conj_sup_23",
      question: "He kept working, _______ he was clearly exhausted.",
      options: ["though", "because", "so", "if"],
      answer: "though",
      explanation: "“Though” at the end or middle of a sentence can show contrast."
    },
    {
      id: "conj_sup_24",
      question: "They will support the proposal, _______ it benefits the community.",
      options: ["provided that", "because", "although", "so"],
      answer: "provided that",
      explanation: "“Provided that” sets a condition for their support."
    },
    {
      id: "conj_sup_25",
      question: "She writes more clearly now _______ she did before.",
      options: ["than", "as", "like", "while"],
      answer: "than",
      explanation: "“Than” is used in comparative structures like “more clearly than ….”"
    },
    {
      id: "conj_sup_26",
      question: "_______ we leave now, we will arrive before sunset.",
      options: ["If", "Because", "Although", "So"],
      answer: "If",
      explanation: "“If” introduces a time/condition relationship for arriving before sunset."
    },
    {
      id: "conj_sup_27",
      question: "He answered as though he _______ all the details.",
      options: ["knew", "knows", "knowing", "know"],
      answer: "knew",
      explanation: "“As though” often takes a past form to suggest an unreal or uncertain situation."
    },
    {
      id: "conj_sup_28",
      question: "The committee will approve the plan _______ it meets the safety standards.",
      options: ["if", "because", "although", "so"],
      answer: "if",
      explanation: "“If” expresses the condition for approval."
    },
    {
      id: "conj_sup_29",
      question: "She remained calm, _______ the situation was becoming dangerous.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” emphasizes the contrast between calmness and danger."
    },
    {
      id: "conj_sup_30",
      question: "He continued to smile _______ everything was going wrong.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” highlights strong contrast."
    },
    {
      id: "conj_sup_31",
      question: "You can stay here _______ you keep the noise down.",
      options: ["as long as", "because", "although", "so"],
      answer: "as long as",
      explanation: "“As long as” shows a continuing condition for staying."
    },
    {
      id: "conj_sup_32",
      question: "He worked as a volunteer _______ he gained valuable experience.",
      options: ["and", "so", "but", "or"],
      answer: "and",
      explanation: "“And” joins two positive outcomes of the same situation."
    },
    {
      id: "conj_sup_33",
      question: "She spoke softly, _______ the baby was sleeping.",
      options: ["for", "so", "but", "or"],
      answer: "for",
      explanation: "“For” explains the reason, similar to “because.”"
    },
    {
      id: "conj_sup_34",
      question: "He will accept the job offer _______ the terms are fair.",
      options: ["provided that", "because", "although", "so"],
      answer: "provided that",
      explanation: "“Provided that” is used for conditions that must be satisfied."
    },
    {
      id: "conj_sup_35",
      question: "She writes not so much to earn money _______ to express herself.",
      options: ["as", "than", "like", "while"],
      answer: "as",
      explanation: "“Not so much A as B” means the second part is the main reason."
    },
    {
      id: "conj_sup_36",
      question: "He studies hard, _______ he knows the exam will be difficult.",
      options: ["for", "so", "but", "or"],
      answer: "for",
      explanation: "“For” here means “because,” giving the reason for studying."
    },
    {
      id: "conj_sup_37",
      question: "They will not proceed _______ they receive written confirmation.",
      options: ["unless", "because", "when", "so"],
      answer: "unless",
      explanation: "“Unless” means they will proceed only if they receive confirmation."
    },
    {
      id: "conj_sup_38",
      question: "He walks as though he _______ all the time in the world.",
      options: ["had", "has", "having", "have"],
      answer: "had",
      explanation: "“As though” often uses a past form to suggest an unreal impression."
    },
    {
      id: "conj_sup_39",
      question: "We will continue the discussion _______ everyone agrees on a solution.",
      options: ["until", "because", "if", "so"],
      answer: "until",
      explanation: "“Until” indicates that the discussion will last up to a certain point in time."
    },
    {
      id: "conj_sup_40",
      question: "She stayed behind _______ she could finish the paperwork.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” expresses her purpose in staying behind."
    },
    {
      id: "conj_sup_41",
      question: "We will go for a walk _______ the rain stops.",
      options: ["after", "because", "although", "so"],
      answer: "after",
      explanation: "“After” shows the time sequence of events."
    },
    {
      id: "conj_sup_42",
      question: "He joined the organization _______ he believed in its mission.",
      options: ["because", "although", "so", "if"],
      answer: "because",
      explanation: "“Because” gives the reason for joining."
    },
    {
      id: "conj_sup_43",
      question: "They listened carefully _______ they could understand every detail.",
      options: ["so that", "because", "although", "if"],
      answer: "so that",
      explanation: "“So that” expresses purpose for listening carefully."
    },
    {
      id: "conj_sup_44",
      question: "He answered every question, _______ some of them were very difficult.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” contrasts his success with the difficulty of the questions."
    },
    {
      id: "conj_sup_45",
      question: "The team succeeded _______ many people had doubted them.",
      options: ["though", "because", "so", "if"],
      answer: "though",
      explanation: "“Though” here highlights contrast between doubt and success."
    },
    {
      id: "conj_sup_46",
      question: "We decided to stay indoors _______ the storm passed.",
      options: ["until", "because", "if", "although"],
      answer: "until",
      explanation: "“Until” shows they stayed inside up to the end of the storm."
    },
    {
      id: "conj_sup_47",
      question: "He will continue his studies _______ he finds a suitable opportunity abroad.",
      options: ["unless", "because", "when", "so"],
      answer: "unless",
      explanation: "“Unless” means he will only stop if he finds an opportunity abroad."
    },
    {
      id: "conj_sup_48",
      question: "She kept working, _______ she had already reached her target.",
      options: ["even though", "because", "so", "if"],
      answer: "even though",
      explanation: "“Even though” shows contrast between achieving the target and still working."
    },
    {
      id: "conj_sup_49",
      question: "He will take the job _______ the salary is competitive.",
      options: ["provided that", "because", "although", "so"],
      answer: "provided that",
      explanation: "“Provided that” introduces a condition for accepting the job."
    },
    {
      id: "conj_sup_50",
      question: "The more they insisted, _______ he became.",
      options: ["the more stubborn", "so", "than", "because"],
      answer: "the more stubborn",
      explanation: "The correlative pattern “The more … the more …” shows a proportional relationship."
    }
  ]
};

