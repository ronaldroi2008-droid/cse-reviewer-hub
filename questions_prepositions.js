// questions_prepositions.js
// PREPOSITIONS QUESTION BANK – 4 LEVELS (50 items per level = 200 total)

const PREPOSITION_QUESTIONS = {
  // ==========================================
  // 1. BEGINNER – basic AT/ON/IN, place & time
  // ==========================================
  beginner: [
    // B1
    {
      question: "We usually have a meeting ___ Monday mornings.",
      choices: ["at", "in", "on", "by"],
      correctIndex: 2,
      explanation:
        "We use ON for days and for 'day + part of day' expressions: on Monday, on Monday morning."
    },
    // B2
    {
      question: "My birthday is ___ May.",
      choices: ["at", "on", "in", "by"],
      correctIndex: 2,
      explanation:
        "We use IN for months, years, and long periods: in May, in 2025, in the past."
    },
    // B3
    {
      question: "The train leaves ___ 6:30 p.m.",
      choices: ["at", "on", "in", "by"],
      correctIndex: 0,
      explanation:
        "We use AT for exact clock times: at 6:30, at noon, at midnight."
    },
    // B4
    {
      question: "They arrived ___ the airport very early.",
      choices: ["in", "on", "at", "to"],
      correctIndex: 2,
      explanation:
        "We use AT with specific points or public places: at the airport, at school, at the station."
    },
    // B5
    {
      question: "The students are ___ the classroom right now.",
      choices: ["on", "at", "in", "over"],
      correctIndex: 2,
      explanation:
        "We say IN the classroom because it is an enclosed space (in the room, in the office)."
    },
    // B6
    {
      question: "Please put your bag ___ the table.",
      choices: ["on", "in", "at", "under"],
      correctIndex: 0,
      explanation:
        "We use ON for surfaces: on the table, on the floor, on the wall."
    },
    // B7
    {
      question: "There is a carpet ___ the floor.",
      choices: ["in", "on", "at", "over"],
      correctIndex: 1,
      explanation:
        "Something that covers the surface of the floor is ON the floor, not in the floor."
    },
    // B8
    {
      question: "She lives ___ Cebu City.",
      choices: ["at", "on", "in", "into"],
      correctIndex: 2,
      explanation:
        "We use IN for cities and countries: in Cebu, in Manila, in the Philippines."
    },
    // B9
    {
      question: "I will see you ___ Friday.",
      choices: ["at", "on", "in", "by"],
      correctIndex: 1,
      explanation:
        "We use ON with days of the week and specific dates: on Friday, on July 5."
    },
    // B10
    {
      question: "The meeting starts ___ 9:00 a.m.",
      choices: ["on", "in", "at", "by"],
      correctIndex: 2,
      explanation:
        "Again, exact times use AT: at 9:00 a.m., at 3:15 p.m."
    },
    // B11
    {
      question: "They moved here ___ 2019.",
      choices: ["on", "in", "at", "by"],
      correctIndex: 1,
      explanation:
        "We use IN with years: in 2019, in 2020, in 1995."
    },
    // B12
    {
      question: "The children are playing ___ the park.",
      choices: ["in", "on", "at", "to"],
      correctIndex: 0,
      explanation:
        "We say IN the park because it is a larger open area that you are inside."
    },
    // B13
    {
      question: "There is a picture ___ the wall.",
      choices: ["in", "on", "at", "over"],
      correctIndex: 1,
      explanation:
        "We use ON the wall for things attached to or hanging from the wall."
    },
    // B14
    {
      question: "He is standing ___ the door.",
      choices: ["at", "in", "on", "over"],
      correctIndex: 0,
      explanation:
        "We often say AT the door for a specific point or position."
    },
    // B15
    {
      question: "The dog is hiding ___ the table.",
      choices: ["on", "in", "under", "over"],
      correctIndex: 2,
      explanation:
        "UNDER shows something is below and covered by something else (under the table, under the bed)."
    },
    // B16
    {
      question: "Your keys are ___ your pocket.",
      choices: ["on", "in", "at", "over"],
      correctIndex: 1,
      explanation:
        "We use IN for containers or enclosed small spaces: in your pocket, in your bag."
    },
    // B17
    {
      question: "She is sitting ___ the chair.",
      choices: ["on", "in", "at", "over"],
      correctIndex: 0,
      explanation:
        "We sit ON a chair (on the seat of the chair). We sit IN an armchair or in a wheelchair."
    },
    // B18
    {
      question: "He is sitting ___ the corner of the room.",
      choices: ["in", "on", "at", "over"],
      correctIndex: 0,
      explanation:
        "We usually say IN the corner of the room because the corner is inside the room."
    },
    // B19
    {
      question: "There is a small shop ___ the end of the street.",
      choices: ["in", "on", "at", "to"],
      correctIndex: 2,
      explanation:
        "We say AT the end of the street, AT the beginning of the road, etc."
    },
    // B20
    {
      question: "They walked ___ the river for an hour.",
      choices: ["along", "across", "through", "over"],
      correctIndex: 0,
      explanation:
        "ALONG is used when you move following the line of something (along the river, along the road)."
    },
    // B21
    {
      question: "We walked ___ the bridge to the other side.",
      choices: ["along", "across", "through", "over"],
      correctIndex: 1,
      explanation:
        "ACROSS shows movement from one side to the other (across the road, across the bridge)."
    },
    // B22
    {
      question: "The children ran ___ the house, laughing loudly.",
      choices: ["through", "along", "over", "onto"],
      correctIndex: 0,
      explanation:
        "THROUGH is used when you pass inside a space from one side to another (through the house, through the park)."
    },
    // B23
    {
      question: "She jumped ___ the car quickly.",
      choices: ["into", "onto", "in", "on"],
      correctIndex: 0,
      explanation:
        "INTO shows movement from outside to inside: into the car, into the room."
    },
    // B24
    {
      question: "The cat jumped ___ the table to get the food.",
      choices: ["into", "onto", "in", "under"],
      correctIndex: 1,
      explanation:
        "ONTO shows movement from not on the surface to on the surface: onto the table, onto the bed."
    },
    // B25
    {
      question: "We arrived ___ the station just in time.",
      choices: ["to", "in", "at", "on"],
      correctIndex: 2,
      explanation:
        "We say arrive AT a small place or point (at the station, at the office) and arrive IN a large place (in Cebu, in the Philippines)."
    },
    // B26
    {
      question: "She arrived ___ Manila early in the morning.",
      choices: ["in", "at", "on", "to"],
      correctIndex: 0,
      explanation:
        "Use arrive IN with cities and countries (arrived in Manila, in Japan)."
    },
    // B27
    {
      question: "I was born ___ 1995.",
      choices: ["on", "in", "at", "by"],
      correctIndex: 1,
      explanation:
        "Again, years take IN: in 1995, in 2001, in 1987."
    },
    // B28
    {
      question: "We usually take a vacation ___ April.",
      choices: ["on", "in", "at", "by"],
      correctIndex: 1,
      explanation:
        "Months and seasons use IN: in April, in summer, in December."
    },
    // B29
    {
      question: "The party is ___ Saturday night.",
      choices: ["at", "on", "in", "by"],
      correctIndex: 1,
      explanation:
        "We use ON for days: on Saturday night, on Thursday afternoon."
    },
    // B30
    {
      question: "I like to study ___ the morning.",
      choices: ["at", "on", "in", "by"],
      correctIndex: 2,
      explanation:
        "Parts of the day usually take IN (in the morning, in the afternoon, in the evening) except 'at night'."
    },
    // B31
    {
      question: "We usually sleep ___ night.",
      choices: ["in", "at", "on", "by"],
      correctIndex: 1,
      explanation:
        "Here we say AT night, not in night, so 'at night' is correct."
    },
    // B32
    {
      question: "The bus stops ___ front of the school.",
      choices: ["on", "at", "in", "in front of"],
      correctIndex: 3,
      explanation:
        "The expression IN FRONT OF means 'directly before' something. We say in front of the school."
    },
    // B33
    {
      question: "He is standing ___ the back of the room.",
      choices: ["on", "at", "in", "behind"],
      correctIndex: 2,
      explanation:
        "We say IN the back of the room to mean inside that area. 'Behind' would mean at the rear, but outside the room."
    },
    // B34
    {
      question: "The supermarket is ___ the bank and the pharmacy.",
      choices: ["among", "between", "behind", "under"],
      correctIndex: 1,
      explanation:
        "BETWEEN is used when something is in the middle of two distinct things (between the bank and the pharmacy)."
    },
    // B35
    {
      question: "There is a small garden ___ our house.",
      choices: ["behind", "under", "between", "across"],
      correctIndex: 0,
      explanation:
        "BEHIND means at the back of something (behind the house, behind the building)."
    },
    // B36
    {
      question: "She is sitting ___ me and Ana.",
      choices: ["among", "between", "behind", "over"],
      correctIndex: 1,
      explanation:
        "For two people, we use BETWEEN: between me and Ana."
    },
    // B37
    {
      question: "He is talking ___ his friend on the phone.",
      choices: ["to", "with", "at", "on"],
      correctIndex: 1,
      explanation:
        "In everyday English we often say 'talking with his friend' or 'talking to his friend'. Both are common, but 'with' emphasizes conversation."
    },
    // B38
    {
      question: "I am listening ___ the radio.",
      choices: ["to", "at", "on", "for"],
      correctIndex: 0,
      explanation:
        "The correct collocation is listen TO: listen to the radio, listen to music."
    },
    // B39
    {
      question: "She is waiting ___ the bus.",
      choices: ["for", "to", "at", "on"],
      correctIndex: 0,
      explanation:
        "We say wait FOR someone or something: wait for the bus, wait for my friend."
    },
    // B40
    {
      question: "We are looking ___ our lost keys.",
      choices: ["for", "at", "after", "on"],
      correctIndex: 0,
      explanation:
        "Look FOR means search: look for your keys, look for a job."
    },
    // B41
    {
      question: "Can I speak ___ the manager, please?",
      choices: ["to", "with", "at", "for"],
      correctIndex: 0,
      explanation:
        "Speak TO someone is the common pattern, especially in polite requests."
    },
    // B42
    {
      question: "The teacher is angry ___ the noisy students.",
      choices: ["about", "with", "of", "for"],
      correctIndex: 1,
      explanation:
        "We are usually angry WITH a person and angry ABOUT a situation: angry with the students about the noise."
    },
    // B43
    {
      question: "She is afraid ___ spiders.",
      choices: ["of", "for", "about", "from"],
      correctIndex: 0,
      explanation:
        "The usual collocation is afraid OF: afraid of spiders, afraid of heights."
    },
    // B44
    {
      question: "I am interested ___ learning more English.",
      choices: ["of", "in", "for", "on"],
      correctIndex: 1,
      explanation:
        "We say interested IN something: interested in English, interested in learning."
    },
    // B45
    {
      question: "He is good ___ playing the guitar.",
      choices: ["at", "in", "on", "for"],
      correctIndex: 0,
      explanation:
        "The phrase is good AT + activity: good at math, good at playing the guitar."
    },
    // B46
    {
      question: "This book belongs ___ my sister.",
      choices: ["to", "with", "for", "on"],
      correctIndex: 0,
      explanation:
        "Belong TO is the correct preposition: belongs to my sister."
    },
    // B47
    {
      question: "Please take care ___ this document.",
      choices: ["of", "for", "about", "with"],
      correctIndex: 0,
      explanation:
        "Take care OF something/someone is the correct pattern."
    },
    // B48
    {
      question: "We usually go to work ___ bus.",
      choices: ["by", "on", "in", "with"],
      correctIndex: 0,
      explanation:
        "We use BY + transport (by bus, by car, by train) when we speak in general."
    },
    // B49
    {
      question: "He got out ___ the car and walked away.",
      choices: ["of", "from", "off", "out"],
      correctIndex: 0,
      explanation:
        "We say get out OF a car/taxi, but get off a bus/train."
    },
    // B50
    {
      question: "She got ___ the bus at the city hall.",
      choices: ["out", "off", "down", "over"],
      correctIndex: 1,
      explanation:
        "We say get OFF a bus, train, or plane; and get OUT OF a car or taxi."
    }
  ],

  // ==========================================
  // 2. INTERMEDIATE – since/for, by/until, collocations
  // ==========================================
  intermediate: [
    // I1
    {
      question: "She has worked in this company ___ 2015.",
      choices: ["for", "since", "from", "during"],
      correctIndex: 1,
      explanation:
        "Use SINCE with a starting point in time: since 2015, since last week."
    },
    // I2
    {
      question: "I have known him ___ many years.",
      choices: ["since", "for", "from", "during"],
      correctIndex: 1,
      explanation:
        "Use FOR with a period of time: for many years, for two hours."
    },
    // I3
    {
      question: "We waited ___ 10:00 p.m., but he never came.",
      choices: ["by", "until", "for", "since"],
      correctIndex: 1,
      explanation:
        "UNTIL shows continuation up to a time. You waited and then stopped at 10:00 p.m."
    },
    // I4
    {
      question: "Please finish this report ___ Friday.",
      choices: ["until", "by", "for", "during"],
      correctIndex: 1,
      explanation:
        "BY shows a deadline: finish it any time before or at Friday."
    },
    // I5
    {
      question: "We usually travel abroad ___ summer.",
      choices: ["in", "on", "at", "during"],
      correctIndex: 3,
      explanation:
        "We can say in summer (general) or during summer (within that period). Here 'during summer' emphasizes the whole season."
    },
    // I6
    {
      question: "She fell asleep ___ the movie.",
      choices: ["while", "during", "for", "since"],
      correctIndex: 1,
      explanation:
        "Use DURING + noun: during the movie, during the meeting. 'While' must be followed by a clause."
    },
    // I7
    {
      question: "___ I was cooking, the phone rang.",
      choices: ["During", "While", "For", "Since"],
      correctIndex: 1,
      explanation:
        "WHILE is followed by a subject and verb: while I was cooking."
    },
    // I8
    {
      question: "There is a strong friendship ___ the three classmates.",
      choices: ["between", "among", "inside", "within"],
      correctIndex: 1,
      explanation:
        "AMONG is used for relationships inside a group, especially three or more people."
    },
    // I9
    {
      question: "This agreement is ___ the company and the union.",
      choices: ["among", "between", "around", "inside"],
      correctIndex: 1,
      explanation:
        "BETWEEN is still used with two parties or clearly separate groups."
    },
    // I10
    {
      question: "They walked slowly ___ the narrow street.",
      choices: ["along", "through", "over", "past"],
      correctIndex: 0,
      explanation:
        "ALONG means following the direction or length of something: along the street."
    },
    // I11
    {
      question: "He drove ___ the tunnel carefully.",
      choices: ["along", "through", "over", "past"],
      correctIndex: 1,
      explanation:
        "THROUGH is used when you move inside something from one side to another: through the tunnel."
    },
    // I12
    {
      question: "We walked ___ the museum without stopping.",
      choices: ["along", "through", "over", "across"],
      correctIndex: 1,
      explanation:
        "Walking inside many rooms of the museum is best expressed by THROUGH the museum."
    },
    // I13
    {
      question: "He ran ___ the street to catch the bus.",
      choices: ["across", "along", "through", "between"],
      correctIndex: 0,
      explanation:
        "ACROSS shows crossing from one side to the other: across the street."
    },
    // I14
    {
      question: "The train passed ___ several small towns.",
      choices: ["along", "through", "between", "within"],
      correctIndex: 1,
      explanation:
        "When something moves inside areas or regions, we can say it goes THROUGH them."
    },
    // I15
    {
      question: "She apologized ___ arriving late.",
      choices: ["to", "for", "about", "of"],
      correctIndex: 1,
      explanation:
        "We apologize FOR something (for being late) and apologize TO someone (to the teacher)."
    },
    // I16
    {
      question: "He apologized ___ his colleagues for the mistake.",
      choices: ["to", "for", "at", "about"],
      correctIndex: 0,
      explanation:
        "Here we need the person, so we use apologize TO + person."
    },
    // I17
    {
      question: "The project depends ___ the results of the survey.",
      choices: ["of", "on", "to", "from"],
      correctIndex: 1,
      explanation:
        "The collocation is depend ON something: depends on the results."
    },
    // I18
    {
      question: "Did you agree ___ the final decision?",
      choices: ["to", "on", "with", "about"],
      correctIndex: 2,
      explanation:
        "We agree WITH a person or idea, and we agree ON something after discussion."
    },
    // I19
    {
      question: "They finally agreed ___ a new schedule.",
      choices: ["with", "on", "to", "about"],
      correctIndex: 1,
      explanation:
        "Agree ON is used when people reach a decision or plan: agreed on a schedule."
    },
    // I20
    {
      question: "The manager is responsible ___ the monthly budget.",
      choices: ["for", "of", "to", "about"],
      correctIndex: 0,
      explanation:
        "Responsible FOR something is the standard pattern."
    },
    // I21
    {
      question: "She is in charge ___ the HR department.",
      choices: ["of", "for", "with", "on"],
      correctIndex: 0,
      explanation:
        "In charge OF is the normal preposition: in charge of the team."
    },
    // I22
    {
      question: "He is capable ___ handling difficult clients.",
      choices: ["in", "for", "of", "with"],
      correctIndex: 2,
      explanation:
        "Capable OF doing something is the correct pattern."
    },
    // I23
    {
      question: "We are waiting ___ the results of the exam.",
      choices: ["to", "for", "on", "at"],
      correctIndex: 1,
      explanation:
        "Wait FOR something or someone is the natural English expression."
    },
    // I24
    {
      question: "The children are afraid ___ the dark.",
      choices: ["of", "for", "about", "from"],
      correctIndex: 0,
      explanation:
        "Afraid OF is the usual collocation: afraid of the dark."
    },
    // I25
    {
      question: "She is proud ___ her achievements.",
      choices: ["of", "for", "about", "with"],
      correctIndex: 0,
      explanation:
        "Proud OF something: proud of her work, proud of her achievements."
    },
    // I26
    {
      question: "He is famous ___ his powerful speeches.",
      choices: ["of", "for", "about", "with"],
      correctIndex: 1,
      explanation:
        "Famous FOR something: famous for his skills, famous for his songs."
    },
    // I27
    {
      question: "She is married ___ a lawyer.",
      choices: ["with", "to", "at", "by"],
      correctIndex: 1,
      explanation:
        "Married TO someone is correct in formal English: married to a lawyer."
    },
    // I28
    {
      question: "We complained ___ the noise coming from next door.",
      choices: ["for", "about", "of", "on"],
      correctIndex: 1,
      explanation:
        "Complain ABOUT something is the standard collocation."
    },
    // I29
    {
      question: "He suffers ___ allergies every spring.",
      choices: ["of", "from", "with", "by"],
      correctIndex: 1,
      explanation:
        "Suffer FROM an illness or condition is the usual phrase."
    },
    // I30
    {
      question: "The students are working ___ a group project.",
      choices: ["on", "in", "for", "to"],
      correctIndex: 0,
      explanation:
        "Work ON something: work on a project, work on a report."
    },
    // I31
    {
      question: "I am looking forward ___ meeting you.",
      choices: ["to", "for", "on", "at"],
      correctIndex: 0,
      explanation:
        "Look forward TO + -ing is the fixed expression: looking forward to meeting you."
    },
    // I32
    {
      question: "We are interested ___ applying for the program.",
      choices: ["to", "in", "on", "for"],
      correctIndex: 1,
      explanation:
        "Interested IN + noun/gerund: interested in the job, interested in applying."
    },
    // I33
    {
      question: "She insisted ___ paying for the meal.",
      choices: ["in", "on", "at", "for"],
      correctIndex: 1,
      explanation:
        "Insist ON + -ing: insisted on paying, insisted on going."
    },
    // I34
    {
      question: "They succeeded ___ solving the problem.",
      choices: ["to", "on", "in", "at"],
      correctIndex: 2,
      explanation:
        "Succeed IN + -ing form: succeeded in solving the problem."
    },
    // I35
    {
      question: "We must concentrate ___ our main objectives.",
      choices: ["in", "on", "for", "at"],
      correctIndex: 1,
      explanation:
        "Concentrate ON something: concentrate on your work."
    },
    // I36
    {
      question: "He apologized ___ me for his rude behavior.",
      choices: ["to", "for", "at", "about"],
      correctIndex: 0,
      explanation:
        "Again, apologize TO + person, FOR + thing. Here the blank is for the person."
    },
    // I37
    {
      question: "She divided the cake ___ the children.",
      choices: ["between", "among", "around", "within"],
      correctIndex: 1,
      explanation:
        "Divide AMONG a group of people; divide BETWEEN two people is also common."
    },
    // I38
    {
      question: "The conference will take place ___ the first week of June.",
      choices: ["during", "in", "at", "on"],
      correctIndex: 0,
      explanation:
        "DURING the first week of June emphasizes that it happens at some time within that week."
    },
    // I39
    {
      question: "He has been absent ___ three days.",
      choices: ["since", "during", "for", "from"],
      correctIndex: 2,
      explanation:
        "FOR three days expresses duration; 'since three days' is incorrect."
    },
    // I40
    {
      question: "He has been absent ___ Monday.",
      choices: ["for", "since", "during", "by"],
      correctIndex: 1,
      explanation:
        "SINCE Monday shows the starting point of his absence."
    },
    // I41
    {
      question: "The new policy is effective ___ January 1.",
      choices: ["since", "from", "by", "on"],
      correctIndex: 1,
      explanation:
        "Effective FROM January 1 means it starts operating on that date."
    },
    // I42
    {
      question: "He walked ___ me without saying hello.",
      choices: ["past", "over", "along", "across"],
      correctIndex: 0,
      explanation:
        "PAST shows movement from one side of someone/something to the other side: walked past me."
    },
    // I43
    {
      question: "She leaned ___ the wall and closed her eyes.",
      choices: ["in", "on", "at", "over"],
      correctIndex: 1,
      explanation:
        "Lean ON something: lean on the wall, lean on the table."
    },
    // I44
    {
      question: "They sat ___ the shade of a big tree.",
      choices: ["under", "below", "beneath", "over"],
      correctIndex: 0,
      explanation:
        "UNDER the shade is the most common beginner-friendly choice, though 'in the shade' is also natural."
    },
    // I45
    {
      question: "The plane flew ___ the clouds.",
      choices: ["over", "on", "above", "through"],
      correctIndex: 3,
      explanation:
        "If you imagine moving inside the clouds, THROUGH the clouds is natural. 'Over the clouds' suggests higher than them."
    },
    // I46
    {
      question: "He lives ___ walking distance of the school.",
      choices: ["on", "in", "within", "inside"],
      correctIndex: 2,
      explanation:
        "WITHIN walking distance means inside the range of walking."
    },
    // I47
    {
      question: "We must stay ___ the limits of the budget.",
      choices: ["inside", "within", "in", "under"],
      correctIndex: 1,
      explanation:
        "WITHIN the limits is the common expression meaning 'not beyond'."
    },
    // I48
    {
      question: "He disappeared ___ the crowd.",
      choices: ["in", "into", "among", "between"],
      correctIndex: 2,
      explanation:
        "Among the crowd suggests he became part of the group and could not be seen clearly."
    },
    // I49
    {
      question: "She walked carefully ___ the wet floor.",
      choices: ["on", "over", "through", "along"],
      correctIndex: 0,
      explanation:
        "ON the wet floor is correct because she is on its surface."
    },
    // I50
    {
      question: "They sat quietly ___ the back row of the auditorium.",
      choices: ["in", "at", "on", "behind"],
      correctIndex: 0,
      explanation:
        "IN the back row refers to a specific row of seats; people sit in a row, in a line."
    }
  ],

  // ==========================================
  // 3. ADVANCED – collocations, exam traps
  // ==========================================
  advanced: [
    // A1
    {
      question: "Choose the sentence with the correct preposition:",
      choices: [
        "We will discuss about the proposal tomorrow.",
        "We will discuss of the proposal tomorrow.",
        "We will discuss the proposal tomorrow.",
        "We will discuss on the proposal tomorrow."
      ],
      correctIndex: 2,
      explanation:
        "Discuss already includes the idea of 'about', so it takes no preposition: discuss the proposal."
    },
    // A2
    {
      question: "Choose the most natural sentence in formal English:",
      choices: [
        "Maria married with a doctor last year.",
        "Maria married a doctor last year.",
        "Maria married to a doctor last year.",
        "Maria married with to a doctor last year."
      ],
      correctIndex: 1,
      explanation:
        "In formal English, we say 'married a doctor' or 'got married to a doctor', not 'married with a doctor'."
    },
    // A3
    {
      question: "The report consists ___ three main sections.",
      choices: ["in", "of", "from", "about"],
      correctIndex: 1,
      explanation:
        "Consist OF is the correct pattern: consists of three sections."
    },
    // A4
    {
      question: "He is capable ___ leading a large team.",
      choices: ["of", "for", "to", "in"],
      correctIndex: 0,
      explanation:
        "Capable OF doing something is the standard collocation."
    },
    // A5
    {
      question: "The manager is concerned ___ the drop in sales.",
      choices: ["of", "about", "for", "from"],
      correctIndex: 1,
      explanation:
        "Concerned ABOUT something is natural when you worry about an issue."
    },
    // A6
    {
      question: "She is similar ___ her mother in many ways.",
      choices: ["with", "to", "as", "for"],
      correctIndex: 1,
      explanation:
        "Similar TO is correct: similar to her mother."
    },
    // A7
    {
      question: "This policy is different ___ the previous one.",
      choices: ["than", "from", "with", "to"],
      correctIndex: 1,
      explanation:
        "In formal grammar, we use different FROM, not different than."
    },
    // A8
    {
      question: "They are opposed ___ the new regulations.",
      choices: ["of", "on", "to", "for"],
      correctIndex: 2,
      explanation:
        "Opposed TO something is the correct expression."
    },
    // A9
    {
      question: "The company specializes ___ digital marketing.",
      choices: ["on", "in", "at", "for"],
      correctIndex: 1,
      explanation:
        "Specialize IN a field: specializes in digital marketing."
    },
    // A10
    {
      question: "We must comply ___ all safety requirements.",
      choices: ["with", "to", "on", "for"],
      correctIndex: 0,
      explanation:
        "Comply WITH rules or requirements is standard usage."
    },
    // A11
    {
      question: "He insisted ___ being given another chance.",
      choices: ["on", "in", "for", "about"],
      correctIndex: 0,
      explanation:
        "Insist ON + -ing: insisted on being given another chance."
    },
    // A12
    {
      question: "The director approved ___ the new budget.",
      choices: ["of", "on", "for", "with"],
      correctIndex: 0,
      explanation:
        "Approve OF someone/something means to have a positive opinion. Approve (no prep) is used with official permission (approve the plan)."
    },
    // A13
    {
      question: "He is very good ___ working under pressure.",
      choices: ["for", "at", "in", "with"],
      correctIndex: 1,
      explanation:
        "Good AT + activity/skill: good at working under pressure."
    },
    // A14
    {
      question: "She is known ___ her kindness and generosity.",
      choices: ["for", "of", "by", "with"],
      correctIndex: 0,
      explanation:
        "Known FOR something: known for her talent, known for her kindness."
    },
    // A15
    {
      question: "He apologized ___ his mistake during the meeting.",
      choices: ["for", "of", "about", "to"],
      correctIndex: 0,
      explanation:
        "Apologize FOR + thing: apologized for his mistake."
    },
    // A16
    {
      question: "The judge was satisfied ___ the evidence presented.",
      choices: ["for", "at", "with", "about"],
      correctIndex: 2,
      explanation:
        "Satisfied WITH something is the usual collocation."
    },
    // A17
    {
      question: "He is fluent ___ both English and Spanish.",
      choices: ["at", "in", "with", "on"],
      correctIndex: 1,
      explanation:
        "Fluent IN a language: fluent in English."
    },
    // A18
    {
      question: "The town is famous ___ its beautiful beaches.",
      choices: ["for", "of", "by", "to"],
      correctIndex: 0,
      explanation:
        "Famous FOR something: famous for its beaches."
    },
    // A19
    {
      question: "They invested a large amount of money ___ the project.",
      choices: ["to", "for", "in", "on"],
      correctIndex: 2,
      explanation:
        "Invest IN something: invest in a project, invest in stocks."
    },
    // A20
    {
      question: "The teacher divided the class ___ four groups.",
      choices: ["to", "into", "in", "on"],
      correctIndex: 1,
      explanation:
        "Divide INTO parts or groups: divided into four groups."
    },
    // A21
    {
      question: "The contract is subject ___ approval by the board.",
      choices: ["to", "for", "on", "in"],
      correctIndex: 0,
      explanation:
        "Subject TO something means dependent on that condition."
    },
    // A22
    {
      question: "She is allergic ___ peanuts.",
      choices: ["of", "for", "to", "with"],
      correctIndex: 2,
      explanation:
        "Allergic TO something: allergic to peanuts."
    },
    // A23
    {
      question: "He accused her ___ breaking the rules.",
      choices: ["for", "of", "about", "on"],
      correctIndex: 1,
      explanation:
        "Accuse someone OF something: accused her of cheating."
    },
    // A24
    {
      question: "We warned them ___ the dangers of smoking.",
      choices: ["of", "for", "about", "from"],
      correctIndex: 2,
      explanation:
        "Warn someone ABOUT something or OF something are both used; ABOUT is more common in everyday English."
    },
    // A25
    {
      question: "She congratulated him ___ his promotion.",
      choices: ["for", "on", "about", "at"],
      correctIndex: 1,
      explanation:
        "Congratulate someone ON something: on your promotion, on your success."
    },
    // A26
    {
      question: "They apologized ___ the delay in processing the request.",
      choices: ["for", "of", "about", "over"],
      correctIndex: 0,
      explanation:
        "Apologize FOR + noun/gerund is the standard structure."
    },
    // A27
    {
      question: "The speaker referred ___ several recent studies.",
      choices: ["on", "to", "at", "for"],
      correctIndex: 1,
      explanation:
        "Refer TO something: referred to the report, referred to studies."
    },
    // A28
    {
      question: "Please refrain ___ using your phone during the exam.",
      choices: ["for", "of", "from", "about"],
      correctIndex: 2,
      explanation:
        "Refrain FROM doing something is the normal phrase."
    },
    // A29
    {
      question: "We must provide the office ___ updated information.",
      choices: ["with", "of", "for", "to"],
      correctIndex: 0,
      explanation:
        "Provide someone WITH something: provide the team with tools."
    },
    // A30
    {
      question: "The city suffers ___ heavy traffic every morning.",
      choices: ["by", "of", "from", "with"],
      correctIndex: 2,
      explanation:
        "Suffer FROM is also used with cities and societies (suffer from traffic, from pollution)."
    },
    // A31
    {
      question: "She blamed the failure ___ poor planning.",
      choices: ["for", "about", "on", "at"],
      correctIndex: 2,
      explanation:
        "Blame something ON a cause: blamed the failure on poor planning."
    },
    // A32
    {
      question: "He apologized to the client ___ the confusion.",
      choices: ["of", "about", "for", "on"],
      correctIndex: 2,
      explanation:
        "Again, apologize FOR the thing that went wrong: for the confusion."
    },
    // A33
    {
      question: "He is jealous ___ his brother's success.",
      choices: ["of", "from", "for", "about"],
      correctIndex: 0,
      explanation:
        "Jealous OF someone/something is the correct combination."
    },
    // A34
    {
      question: "The new policy applies ___ all departments.",
      choices: ["for", "in", "to", "on"],
      correctIndex: 2,
      explanation:
        "Apply TO someone/something means it is relevant for them."
    },
    // A35
    {
      question: "She is independent ___ her parents now.",
      choices: ["from", "of", "to", "about"],
      correctIndex: 0,
      explanation:
        "Independent FROM or independent OF are both possible, but from is more common in this context."
    },
    // A36
    {
      question: "The solution consists ___ three simple steps.",
      choices: ["in", "of", "from", "on"],
      correctIndex: 1,
      explanation:
        "Again, consist OF is correct here."
    },
    // A37
    {
      question: "He is interested ___ a career in public service.",
      choices: ["for", "in", "on", "at"],
      correctIndex: 1,
      explanation:
        "Interested IN something: in a career, in public service."
    },
    // A38
    {
      question: "We were surprised ___ the sudden announcement.",
      choices: ["at", "on", "by", "for"],
      correctIndex: 0,
      explanation:
        "Surprised AT or surprised BY are both acceptable; many exams prefer surprised AT the news."
    },
    // A39
    {
      question: "The city is divided ___ several districts.",
      choices: ["in", "into", "to", "for"],
      correctIndex: 1,
      explanation:
        "Divide INTO parts, sections, or districts is the correct pattern."
    },
    // A40
    {
      question: "They collaborated ___ the project with another team.",
      choices: ["on", "in", "for", "at"],
      correctIndex: 0,
      explanation:
        "Collaborate ON a project is commonly used; collaborate WITH someone ON something."
    },
    // A41
    {
      question: "She is engaged ___ improving community services.",
      choices: ["for", "on", "in", "at"],
      correctIndex: 2,
      explanation:
        "Engaged IN an activity: engaged in improving services."
    },
    // A42
    {
      question: "The committee is composed ___ five members.",
      choices: ["with", "of", "by", "from"],
      correctIndex: 1,
      explanation:
        "Composed OF is the normal expression: composed of five members."
    },
    // A43
    {
      question: "He is preoccupied ___ personal problems lately.",
      choices: ["at", "about", "with", "for"],
      correctIndex: 2,
      explanation:
        "Preoccupied WITH something: with personal problems."
    },
    // A44
    {
      question: "The success of the project relies ___ teamwork.",
      choices: ["in", "on", "to", "for"],
      correctIndex: 1,
      explanation:
        "Rely ON something or someone: relies on teamwork."
    },
    // A45
    {
      question: "Our office is adjacent ___ the city hall.",
      choices: ["to", "with", "for", "beside"],
      correctIndex: 0,
      explanation:
        "Adjacent TO is the correct formal phrase meaning 'very close to'."
    },
    // A46
    {
      question: "The company is committed ___ providing quality service.",
      choices: ["in", "for", "to", "with"],
      correctIndex: 2,
      explanation:
        "Committed TO something or to doing something: committed to providing quality service."
    },
    // A47
    {
      question: "He is obsessed ___ the idea of perfection.",
      choices: ["with", "by", "in", "for"],
      correctIndex: 0,
      explanation:
        "Obsessed WITH something: obsessed with the idea."
    },
    // A48
    {
      question: "We need to adhere ___ the new guidelines.",
      choices: ["for", "with", "to", "on"],
      correctIndex: 2,
      explanation:
        "Adhere TO rules or guidelines is the standard structure."
    },
    // A49
    {
      question: "The data is consistent ___ the earlier findings.",
      choices: ["to", "with", "for", "of"],
      correctIndex: 1,
      explanation:
        "Consistent WITH something means it matches or agrees with it."
    },
    // A50
    {
      question: "They participated ___ the community clean-up drive.",
      choices: ["on", "in", "at", "for"],
      correctIndex: 1,
      explanation:
        "Participate IN an activity: participated in the clean-up."
    }
  ],

  // ==========================================
  // 4. SUPER / HARD – error ID, subtle meaning
  // ==========================================
  super: [
    // S1
    {
      question:
        "Which sentence is CORRECT in formal written English?",
      choices: [
        "She has been working here since five years.",
        "She has been working here for five years.",
        "She has been working here during five years.",
        "She has been working here from five years."
      ],
      correctIndex: 1,
      explanation:
        "Use FOR + period of time: for five years. 'Since' needs a starting point (since 2018)."
    },
    // S2
    {
      question:
        "Which sentence uses BY and UNTIL correctly?",
      choices: [
        "I will stay in the office by 7:00 p.m. and then go home.",
        "I will stay in the office until 7:00 p.m. and then go home.",
        "I will finish the work until 7:00 p.m.",
        "I will finish the work until 7:00 p.m. and stay there by then."
      ],
      correctIndex: 1,
      explanation:
        "Stay UNTIL 7:00 p.m. (continue up to that time). 'Finish until' is incorrect; we say finish BY 7:00 p.m."
    },
    // S3
    {
      question:
        "Which sentence is the best choice for formal writing?",
      choices: [
        "There were many books off of the table.",
        "There were many books off the table.",
        "There were many books on the table.",
        "There were many books from the table."
      ],
      correctIndex: 2,
      explanation:
        "ON the table is the natural preposition here. 'Off of' is informal and not needed in exams."
    },
    // S4
    {
      question:
        "No sooner ___ the announcement than people started to complain.",
      choices: ["was made", "it was made", "had made", "had it been made"],
      correctIndex: 3,
      explanation:
        "With 'No sooner' at the beginning, we use inversion: No sooner had it been made than..."
    },
    // S5
    {
      question:
        "Hardly ___ the meeting when the fire alarm rang.",
      choices: [
        "had we started",
        "we had started",
        "had started we",
        "we have started"
      ],
      correctIndex: 0,
      explanation:
        "Hardly had we started... is the correct inverted structure (negative adverb + auxiliary + subject)."
    },
    // S6
    {
      question:
        "Scarcely ___ the report when the manager asked for changes.",
      choices: [
        "we had submitted",
        "had we submitted",
        "we submitted",
        "submitted we"
      ],
      correctIndex: 1,
      explanation:
        "Scarcely had we submitted... follows the same inversion pattern as hardly and no sooner."
    },
    // S7
    {
      question:
        "Choose the sentence where ONLY is placed correctly for the meaning 'I did nothing except sign the document.'",
      choices: [
        "Only I signed the document.",
        "I only signed the document.",
        "I signed only the document.",
        "I signed the only document."
      ],
      correctIndex: 1,
      explanation:
        "I only signed the document focuses on the action: signing was the only thing you did."
    },
    // S8
    {
      question:
        "Which underlined preposition is WRONG?\n\n'I have been responsible **for** the budget **since** January and will stay in this role **for** at least another year **by** now.'",
      choices: ["for (responsible for)", "since (since January)", "for (for at least another year)", "by (by now)"],
      correctIndex: 3,
      explanation:
        "'By now' normally refers to the present moment and does not fit with 'for at least another year'. We simply say 'for at least another year.'"
    },
    // S9
    {
      question:
        "Which sentence is MOST acceptable in a formal exam context?",
      choices: [
        "Each of the employees is responsible for his or her own performance.",
        "Each of the employees is responsible for their own performance.",
        "Each of the employees are responsible for his or her own performance.",
        "Each of the employees are responsible for their own performance."
      ],
      correctIndex: 0,
      explanation:
        "In strict formal grammar, 'Each' is singular, so we use 'is' and 'his or her'."
    },
    // S10
    {
      question:
        "Choose the sentence that uses BETWEEN and AMONG in the clearest standard way.",
      choices: [
        "The differences among the two plans are minor, but the choice between the team is difficult.",
        "The differences between the two plans are minor, but the choice among them is difficult.",
        "The differences between the two plans are minor, but the choice between them is difficult.",
        "The differences among the two plans are minor, but the choice among them is difficult."
      ],
      correctIndex: 2,
      explanation:
        "With two specific items, BETWEEN is preferred for both the differences and the choice."
    },
    // S11
    {
      question:
        "Which sentence is correct?",
      choices: [
        "The report is divided in three main parts.",
        "The report is divided into three main parts.",
        "The report is divided to three main parts.",
        "The report is divided on three main parts."
      ],
      correctIndex: 1,
      explanation:
        "Divide INTO parts is the correct expression: divided into three main parts."
    },
    // S12
    {
      question:
        "Select the sentence that is free from preposition error.",
      choices: [
        "We will discuss about the new policy in the meeting.",
        "We will discuss on the new policy in the meeting.",
        "We will discuss the new policy in the meeting.",
        "We will discuss regarding the new policy in the meeting."
      ],
      correctIndex: 2,
      explanation:
        "Again, discuss takes a direct object: discuss the new policy, without any preposition."
    },
    // S13
    {
      question:
        "Identify the error: 'The committee is composed by ten members.'",
      choices: [
        "committee",
        "is composed",
        "by",
        "ten members"
      ],
      correctIndex: 2,
      explanation:
        "We say composed OF ten members, not composed by ten members."
    },
    // S14
    {
      question:
        "Which sentence is correct?",
      choices: [
        "We arrived to the office late because of traffic.",
        "We arrived in the office late because of traffic.",
        "We arrived at the office late because of traffic.",
        "We arrived on the office late because of traffic."
      ],
      correctIndex: 2,
      explanation:
        "Arrive AT a small place or building: arrived at the office, at the station."
    },
    // S15
    {
      question:
        "Choose the sentence that uses OF correctly.",
      choices: [
        "The reason of the delay was not explained.",
        "The cause of the delay was not explained.",
        "The reason of why it happened is unclear.",
        "The reason of this is because of traffic."
      ],
      correctIndex: 1,
      explanation:
        "We say the cause OF something. For 'reason', we usually say the reason FOR something."
    },
    // S16
    {
      question:
        "Which sentence is BEST in formal English?",
      choices: [
        "He emphasized on the need for cooperation.",
        "He emphasized the need for cooperation.",
        "He emphasized about the need for cooperation.",
        "He emphasized for the need of cooperation."
      ],
      correctIndex: 1,
      explanation:
        "Emphasize takes a direct object: emphasized the need. No preposition is required."
    },
    // S17
    {
      question:
        "Select the correct sentence:",
      choices: [
        "She is married with a pilot.",
        "She is married of a pilot.",
        "She is married to a pilot.",
        "She is married by a pilot."
      ],
      correctIndex: 2,
      explanation:
        "Married TO someone is the standard pattern: married to a pilot."
    },
    // S18
    {
      question:
        "Which sentence uses DURING and WHILE correctly?",
      choices: [
        "During I was sleeping, the phone rang.",
        "While the night, it rained heavily.",
        "During the night, it rained heavily.",
        "While the rain, we stayed at home."
      ],
      correctIndex: 2,
      explanation:
        "During + noun: during the night. While + clause: while I was sleeping."
    },
    // S19
    {
      question:
        "Select the correct preposition: 'They were accused ___ cheating in the exam.'",
      choices: ["for", "of", "about", "with"],
      correctIndex: 1,
      explanation:
        "Accuse someone OF something: accused of cheating."
    },
    // S20
    {
      question:
        "Select the correct preposition: 'He was charged ___ theft.'",
      choices: ["for", "of", "with", "about"],
      correctIndex: 2,
      explanation:
        "Charged WITH a crime is the legal expression: charged with theft."
    },
    // S21
    {
      question:
        "Which sentence is correct?",
      choices: [
        "The meeting will be held on the 3rd floor, at Room 302.",
        "The meeting will be held in the 3rd floor, at Room 302.",
        "The meeting will be held at the 3rd floor, in Room 302.",
        "The meeting will be held to the 3rd floor, in Room 302."
      ],
      correctIndex: 0,
      explanation:
        "We usually say on the 3rd floor, in Room 302, or at Room 302. The sentence with 'on the 3rd floor, at Room 302' is acceptable in many exam contexts."
    },
    // S22
    {
      question:
        "Select the sentence with the correct preposition:",
      choices: [
        "According with the report, sales increased last year.",
        "According to the report, sales increased last year.",
        "According by the report, sales increased last year.",
        "According from the report, sales increased last year."
      ],
      correctIndex: 1,
      explanation:
        "We always say according TO something: according to the report."
    },
    // S23
    {
      question:
        "Which sentence uses DESPITE correctly?",
      choices: [
        "Despite of the rain, the game continued.",
        "Despite the rain, the game continued.",
        "Despite of raining, the game continued.",
        "Despite that it rained, the game continued."
      ],
      correctIndex: 1,
      explanation:
        "Despite is followed directly by a noun or -ing form, without 'of': despite the rain, despite raining."
    },
    // S24
    {
      question:
        "Which sentence uses IN SPITE OF correctly?",
      choices: [
        "In spite of it was raining, the game continued.",
        "In spite of the rain, the game continued.",
        "In spite of raining, the game continued it.",
        "In spite the rain, the game continued."
      ],
      correctIndex: 1,
      explanation:
        "In spite of + noun/-ing is correct: in spite of the rain."
    },
    // S25
    {
      question:
        "Identify the correct sentence:",
      choices: [
        "She is responsible of monitoring attendance.",
        "She is responsible to monitoring attendance.",
        "She is responsible for monitoring attendance.",
        "She is responsible at monitoring attendance."
      ],
      correctIndex: 2,
      explanation:
        "Responsible FOR something is the correct collocation."
    },
    // S26
    {
      question:
        "Select the correct sentence:",
      choices: [
        "The trainees are capable in handling complaints.",
        "The trainees are capable of handling complaints.",
        "The trainees are capable for handling complaints.",
        "The trainees are capable at handling complaints."
      ],
      correctIndex: 1,
      explanation:
        "Capable OF + -ing is the proper structure: capable of handling complaints."
    },
    // S27
    {
      question:
        "Which sentence is correct in standard English?",
      choices: [
        "He explained me the procedure in detail.",
        "He explained the procedure to me in detail.",
        "He explained about the procedure to me in detail.",
        "He explained of the procedure to me in detail."
      ],
      correctIndex: 1,
      explanation:
        "Explain something TO someone is the correct pattern: explained the procedure to me."
    },
    // S28
    {
      question:
        "Which sentence is best for formal writing?",
      choices: [
        "The manager was angry to the staff about the delay.",
        "The manager was angry with the staff about the delay.",
        "The manager was angry for the staff about the delay.",
        "The manager was angry on the staff about the delay."
      ],
      correctIndex: 1,
      explanation:
        "Angry WITH a person and angry ABOUT a situation is the common pattern."
    },
    // S29
    {
      question:
        "Choose the correct preposition: 'The town is located ___ the coast.'",
      choices: ["at", "on", "in", "over"],
      correctIndex: 1,
      explanation:
        "Towns near the sea are usually said to be ON the coast."
    },
    // S30
    {
      question:
        "Select the sentence that is free from preposition error:",
      choices: [
        "We must prevent them from to make the same mistake.",
        "We must prevent them to make the same mistake.",
        "We must prevent them from making the same mistake.",
        "We must prevent them making the same mistake from."
      ],
      correctIndex: 2,
      explanation:
        "Prevent someone FROM doing something is correct: prevent them from making the same mistake."
    },
    // S31
    {
      question:
        "Which sentence uses AMONG correctly?",
      choices: [
        "He divided the money among his two sons.",
        "He divided the money among his three sons.",
        "He divided the money among his each son.",
        "He divided the money among his both sons."
      ],
      correctIndex: 1,
      explanation:
        "Among is most natural with three or more people; between is usually used with two."
    },
    // S32
    {
      question:
        "Which sentence correctly uses a gerund after a preposition?",
      choices: [
        "She is interested in learn more about budgeting.",
        "She is interested in learning more about budgeting.",
        "She is interested to learning more about budgeting.",
        "She is interested on learning more about budgeting."
      ],
      correctIndex: 1,
      explanation:
        "After a preposition, we use the -ing form: interested in learning."
    },
    // S33
    {
      question:
        "Choose the best sentence:",
      choices: [
        "Thank you for your kind assistance to.",
        "Thank you of your kind assistance.",
        "Thank you for your kind assistance.",
        "Thank you with your kind assistance."
      ],
      correctIndex: 2,
      explanation:
        "Thank you FOR something is the correct structure: for your assistance."
    },
    // S34
    {
      question:
        "Which sentence is correct?",
      choices: [
        "She was accused for stealing office supplies.",
        "She was accused of stealing office supplies.",
        "She was accused about stealing office supplies.",
        "She was accused to stealing office supplies."
      ],
      correctIndex: 1,
      explanation:
        "Accused OF doing something is the standard legal expression."
    },
    // S35
    {
      question:
        "Identify the correct formal phrase:",
      choices: [
        "in accordance to the law",
        "in accordance with the law",
        "in accordance of the law",
        "in accordance by the law"
      ],
      correctIndex: 1,
      explanation:
        "In accordance WITH the law is the correct fixed expression."
    },
    // S36
    {
      question:
        "Choose the correct preposition: 'The changes will take effect ___ January 1.'",
      choices: ["from", "on", "in", "at"],
      correctIndex: 1,
      explanation:
        "Take effect ON a specific date: on January 1."
    },
    // S37
    {
      question:
        "Which sentence is grammatically correct?",
      choices: [
        "She took care for the children while their parents were away.",
        "She took care of the children while their parents were away.",
        "She took care with the children while their parents were away.",
        "She took care about the children while their parents were away."
      ],
      correctIndex: 1,
      explanation:
        "Take care OF someone is the correct expression."
    },
    // S38
    {
      question:
        "Select the correct sentence:",
      choices: [
        "He was satisfied from the results of the survey.",
        "He was satisfied with the results of the survey.",
        "He was satisfied about the results of the survey.",
        "He was satisfied on the results of the survey."
      ],
      correctIndex: 1,
      explanation:
        "Satisfied WITH something is the natural collocation."
    },
    // S39
    {
      question:
        "Which sentence correctly uses BESIDE vs. BESIDES?",
      choices: [
        "Beside the higher salary, the job offers good benefits.",
        "Besides the higher salary, the job offers good benefits.",
        "Besides the river, there is a small house.",
        "Beside, the higher salary the job offers good benefits."
      ],
      correctIndex: 1,
      explanation:
        "Besides (with s) means 'in addition to'. Beside (without s) means 'next to'."
    },
    // S40
    {
      question:
        "Choose the correct sentence:",
      choices: [
        "The supervisor is angry about to the new policy.",
        "The supervisor is angry to the new policy.",
        "The supervisor is angry about the new policy.",
        "The supervisor is angry on the new policy."
      ],
      correctIndex: 2,
      explanation:
        "We are angry ABOUT a situation: angry about the new policy."
    },
    // S41
    {
      question:
        "Which sentence is correct?",
      choices: [
        "He is independent of his parents financially.",
        "He is independent from his parents financially.",
        "Both A and B can be correct in many contexts.",
        "Neither A nor B is ever correct."
      ],
      correctIndex: 2,
      explanation:
        "Independent OF and independent FROM are both used; many exam keys accept either."
    },
    // S42
    {
      question:
        "Select the correct preposition: 'The factory is located ___ the outskirts of the city.'",
      choices: ["on", "at", "in", "by"],
      correctIndex: 2,
      explanation:
        "IN the outskirts of the city is the usual phrasing, meaning inside that area."
    },
    // S43
    {
      question:
        "Which sentence correctly uses OVER vs. ABOVE?",
      choices: [
        "The helicopter is flying above the city at the moment.",
        "The helicopter is flying over the city at the moment.",
        "Both sentences can be acceptable in this context.",
        "Neither sentence is acceptable."
      ],
      correctIndex: 2,
      explanation:
        "Both 'flying over the city' and 'flying above the city' can be used; most often 'over' is preferred, but both are possible."
    },
    // S44
    {
      question:
        "Choose the sentence with correct preposition:",
      choices: [
        "We must abide to the rules at all times.",
        "We must abide with the rules at all times.",
        "We must abide by the rules at all times.",
        "We must abide on the rules at all times."
      ],
      correctIndex: 2,
      explanation:
        "Abide BY the rules is the fixed expression in formal English."
    },
    // S45
    {
      question:
        "Select the correct sentence:",
      choices: [
        "The office is open from 8 a.m. to 5 p.m.",
        "The office is open since 8 a.m. to 5 p.m.",
        "The office is open for 8 a.m. to 5 p.m.",
        "The office is open during 8 a.m. to 5 p.m."
      ],
      correctIndex: 0,
      explanation:
        "From...to... is the natural way to show opening hours: from 8 a.m. to 5 p.m."
    },
    // S46
    {
      question:
        "Which sentence uses UNTIL correctly?",
      choices: [
        "I will be here by you finish the report.",
        "I will be here until you finish the report.",
        "I will be here since you finish the report.",
        "I will be here for you finish the report."
      ],
      correctIndex: 1,
      explanation:
        "Until + clause shows continuation up to that time: until you finish the report."
    },
    // S47
    {
      question:
        "Select the correct sentence:",
      choices: [
        "The success of the program is due of careful planning.",
        "The success of the program is due from careful planning.",
        "The success of the program is due to careful planning.",
        "The success of the program is due by careful planning."
      ],
      correctIndex: 2,
      explanation:
        "Due TO something is the standard phrase: due to careful planning."
    },
    // S48
    {
      question:
        "Choose the best sentence:",
      choices: [
        "Because of the traffic, we arrived late.",
        "Due to of the traffic, we arrived late.",
        "Due of the traffic, we arrived late.",
        "Because the traffic, we arrived late."
      ],
      correctIndex: 0,
      explanation:
        "Because of + noun is correct. 'Due to of' and 'due of' are incorrect."
    },
    // S49
    {
      question:
        "Select the sentence free from preposition error:",
      choices: [
        "We emphasized on the importance of time management.",
        "We emphasized the importance of time management.",
        "We emphasized about the importance of time management.",
        "We emphasized for the importance of time management."
      ],
      correctIndex: 1,
      explanation:
        "Emphasize takes a direct object: emphasized the importance, with no preposition."
    },
    // S50
    {
      question:
        "Choose the sentence that is most appropriate in formal writing:",
      choices: [
        "The incident resulted to a long investigation.",
        "The incident resulted with a long investigation.",
        "The incident resulted in a long investigation.",
        "The incident resulted on a long investigation."
      ],
      correctIndex: 2,
      explanation:
        "Result IN something is the correct pattern: resulted in a long investigation."
    }
  ]
};


