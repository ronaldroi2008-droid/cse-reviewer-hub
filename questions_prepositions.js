// prepositions.js
// 200 Civil Service–style questions on PREPOSITIONS with detailed explanations.
// Structure is simple so you can reuse it in your CSE Reviewer Hub.

const PREPOSITION_QUESTIONS = [
  // =========================
  // LEVEL 1 – BASIC PLACE & TIME
  // =========================
  {
    id: "PREP_L1_Q01",
    level: 1,
    question: "The book is ___ the table.",
    options: ["in", "on", "at", "over"],
    answer: "on",
    explanation:
      "Rule: We use “on” when something is touching or resting on a surface. The book is resting on the flat surface of the table, so we say “on the table.” “In” is used for inside an enclosed space, “at” for a general point or location, and “over” suggests above something, not necessarily touching it."
  },
  {
    id: "PREP_L1_Q02",
    level: 1,
    question: "She lives ___ Manila.",
    options: ["in", "at", "on", "into"],
    answer: "in",
    explanation:
      "Rule: We use “in” with cities, countries, and large areas. Manila is a city, so the natural expression is “in Manila.” We do not usually say “at Manila” for living or residing, “on Manila” is incorrect, and “into” expresses movement to the inside, not a place of residence."
  },
  {
    id: "PREP_L1_Q03",
    level: 1,
    question: "They arrived ___ 8:00 a.m.",
    options: ["in", "on", "at", "by"],
    answer: "at",
    explanation:
      "Rule: We use “at” for exact clock times (at 7:30, at midnight, at 8:00 a.m.). The sentence refers to a specific time, so “at 8:00 a.m.” is correct. “In” and “on” are not used with specific clock times, and “by 8:00 a.m.” would mean any time before or not later than 8:00, which changes the meaning."
  },
  {
    id: "PREP_L1_Q04",
    level: 1,
    question: "My birthday is ___ June.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "Rule: We use “in” for months, years, seasons, and longer periods of time. Since June is a month, we say “in June.” We use “on” for specific days or dates (on June 5), “at” for clock times or some fixed holidays (at 3 p.m., at Christmas), and “by” expresses a deadline, which is not the idea here."
  },
  {
    id: "PREP_L1_Q05",
    level: 1,
    question: "We have a meeting ___ Monday.",
    options: ["in", "on", "at", "by"],
    answer: "on",
    explanation:
      "Rule: We use “on” for days of the week and specific dates. The word “Monday” is a day, so the correct phrase is “on Monday.” “In Monday” and “at Monday” are incorrect. “By Monday” means not later than Monday, which expresses a deadline, not the day an event happens."
  },
  {
    id: "PREP_L1_Q06",
    level: 1,
    question: "The cat is hiding ___ the bed.",
    options: ["on", "at", "under", "over"],
    answer: "under",
    explanation:
      "Rule: We use “under” when something is below and possibly covered or protected by something else. The cat is below the bed, so we say “under the bed.” “On the bed” means on top of it, “at the bed” is not natural here, and “over the bed” suggests something above it but not touching."
  },
  {
    id: "PREP_L1_Q07",
    level: 1,
    question: "The picture is hanging ___ the wall.",
    options: ["in", "on", "at", "over"],
    answer: "on",
    explanation:
      "Rule: We say that pictures, posters, and clocks are “on the wall” because they are attached to the surface of the wall. “In the wall” suggests something inside the material, “at the wall” is unusual for this meaning, and “over the wall” would mean above or on the other side of the wall."
  },
  {
    id: "PREP_L1_Q08",
    level: 1,
    question: "She waited ___ the bus stop for an hour.",
    options: ["on", "at", "in", "by"],
    answer: "at",
    explanation:
      "Rule: We use “at” for specific points or locations, such as at the bus stop, at the door, at the corner. The bus stop is a specific point where the bus arrives, so “at the bus stop” is natural. “On the bus stop” and “in the bus stop” sound wrong here, and “by the bus stop” means near the bus stop, not necessarily waiting at it."
  },
  {
    id: "PREP_L1_Q09",
    level: 1,
    question: "The children are playing ___ the park.",
    options: ["at", "in", "on", "over"],
    answer: "in",
    explanation:
      "Rule: We use “in” for enclosed or defined areas, such as in the park, in the garden, in the classroom. A park is an area with boundaries, so we say “in the park.” “At the park” is possible but less specific (focus on the place as a point), and “on the park” or “over the park” are incorrect for this meaning."
  },
  {
    id: "PREP_L1_Q10",
    level: 1,
    question: "He is sitting ___ the corner of the room.",
    options: ["in", "on", "at", "to"],
    answer: "in",
    explanation:
      "Rule: We say “in the corner of the room” when we talk about a position inside the room where two walls meet. The person is physically located within that corner space, so “in the corner” is correct. “At the corner” is more common for street corners or outdoor locations (at the corner of the street). “On the corner” is used for buildings located on a street corner (a shop on the corner), and “to the corner” expresses movement toward the corner, not a fixed position."
  },
  {
    id: "PREP_L1_Q11",
    level: 1,
    question: "She put the keys ___ her bag.",
    options: ["into", "onto", "at", "over"],
    answer: "into",
    explanation:
      "Rule: We use “into” to show movement from outside to inside an enclosed space. The keys are moving from outside the bag to the inside, so we say “into her bag.” “Onto” means movement to a surface, “at” is just a point and does not show movement, and “over” suggests above or across, not inside."
  },
  {
    id: "PREP_L1_Q12",
    level: 1,
    question: "There is a pen ___ your hand.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "Rule: When you are holding something, we usually say it is “in your hand.” The pen is inside the space formed by your fingers and palm, so “in your hand” is correct. “On your hand” suggests something resting on top of your hand, “at your hand” is not natural, and “by your hand” means near your hand but not being held."
  },
  {
    id: "PREP_L1_Q13",
    level:1,
    question: "The ball is ___ the two boxes.",
    options: ["between", "among", "in", "over"],
    answer: "between",
    explanation:
      "Rule: We use “between” when something is in the middle of two separate things or people. Here, there are two boxes, so we say “between the two boxes.” “Among” is used for being in the middle of many things or a group, “in” is too general, and “over” means above, not in the middle."
  },
  {
    id: "PREP_L1_Q14",
    level: 1,
    question: "The school is ___ the church.",
    options: ["near", "in", "on", "into"],
    answer: "near",
    explanation:
      "Rule: We use “near” to show that one place is close to another but not necessarily touching it. The sentence describes a short distance, so “near the church” is correct. “In the church” means inside the building, “on the church” is wrong, and “into the church” shows movement inside, not location."
  },
  {
    id: "PREP_L1_Q15",
    level: 1,
    question: "The dog is hiding ___ the house.",
    options: ["behind", "under", "over", "in front of"],
    answer: "behind",
    explanation:
      "Rule: We use “behind” when something is at the back of another thing and often not immediately visible from the front. If the dog is at the back of the house, we say “behind the house.” “Under the house” means below it, “over the house” means above, and “in front of the house” means on the front side, not at the back."
  },
  {
    id: "PREP_L1_Q16",
    level: 1,
    question: "Please stand ___ the class and introduce yourself.",
    options: ["in front of", "behind", "between", "over"],
    answer: "in front of",
    explanation:
      "Rule: We use “in front of” to describe a position directly before someone or something, facing them. When you talk to a class, you stand facing the students, so you stand “in front of the class.” “Behind the class” means at the back, “between the class” is incorrect, and “over the class” does not fit here."
  },
  {
    id: "PREP_L1_Q17",
    level: 1,
    question: "The plane is flying ___ the clouds.",
    options: ["above", "under", "between", "inside"],
    answer: "above",
    explanation:
      "Rule: We use “above” when something is at a higher level than something else, not necessarily touching it. The plane is higher than the clouds, so “above the clouds” is correct. “Under the clouds” is lower than the clouds, “between the clouds” suggests being in the gap of two clouds, and “inside the clouds” would mean it is surrounded by them."
  },
  {
    id: "PREP_L1_Q18",
    level: 1,
    question: "Write your name ___ the top of the page.",
    options: ["at", "on", "in", "over"],
    answer: "at",
    explanation:
      "Rule: We use “at the top” and “at the bottom” to talk about positions on an imaginary line or edge. The instruction focuses on the edge of the page, so we say “at the top of the page.” “On the top” is possible but usually followed by “of something” to talk about surfaces, and “in” and “over” are incorrect here."
  },
  {
    id: "PREP_L1_Q19",
    level: 1,
    question: "There is a stop sign ___ the end of the street.",
    options: ["at", "in", "on", "to"],
    answer: "at",
    explanation:
      "Rule: We use “at” to talk about specific points, such as at the end of the street, at the corner, at the entrance. The sign is located at a specific point—the end—so “at the end of the street” is correct. “In the end of the street” is not standard, “on the end” is uncommon here, and “to the end” suggests movement toward that point."
  },
  {
    id: "PREP_L1_Q20",
    level: 1,
    question: "The store is ___ from the bank.",
    options: ["across", "in", "on", "into"],
    answer: "across",
    explanation:
      "Rule: We use “across from” to mean directly opposite on the other side of a street or space. The usual phrase is “across from the bank.” Although this question only shows “across,” we understand it as “across from the bank.” “In,” “on,” and “into” do not express the idea of being opposite."
  },
  {
    id: "PREP_L1_Q21",
    level: 1,
    question: "The bank is ___ the post office.",
    options: ["next to", "above", "into", "behind"],
    answer: "next to",
    explanation:
      "Rule: “Next to” means immediately beside something, with nothing or very little space between them. The bank is right beside the post office, so “next to” is correct. “Above” would mean higher than it, “behind” means at the back, and “into” suggests movement, not location."
  },
  {
    id: "PREP_L1_Q22",
    level: 1,
    question: "The bird is sitting ___ the tree branch.",
    options: ["on", "in", "at", "over"],
    answer: "on",
    explanation:
      "Rule: When something rests on a narrow surface like a branch, we still use “on.” The bird is touching and supported by the branch, so we say “on the branch.” “In the branch” is incorrect, “at the branch” is not natural, and “over the branch” means above it, not sitting on it."
  },
  {
    id: "PREP_L1_Q23",
    level: 1,
    question: "Your shoes are ___ the chair.",
    options: ["under", "on", "in", "at"],
    answer: "under",
    explanation:
      "Rule: “Under” means below something, often partly hidden or protected by it. The shoes are below the chair, so “under the chair” is correct. “On the chair” means on the seat, “in the chair” is not natural for shoes, and “at the chair” does not clearly show their position."
  },
  {
    id: "PREP_L1_Q24",
    level: 1,
    question: "We usually eat dinner ___ night.",
    options: ["in", "on", "at", "by"],
    answer: "at",
    explanation:
      "Rule: We say “at night” when referring to nighttime in general. So the natural phrase is “eat dinner at night.” “In the night” is possible but usually for a specific moment (I woke up in the night), “on night” is wrong, and “by night” means using night as a time reference for travel or action (travel by night)."
  },
  {
    id: "PREP_L1_Q25",
    level: 1,
    question: "Flowers bloom ___ spring.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "Rule: We use “in” for seasons such as in spring, in summer, in autumn, in winter. The sentence refers to a season, so “in spring” is correct. “On spring” and “at spring” are incorrect, and “by spring” would mean not later than spring, which changes the meaning."
  },
  {
    id: "PREP_L1_Q26",
    level: 1,
    question: "I usually wake up early ___ the morning.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "Rule: We say “in the morning,” “in the afternoon,” and “in the evening” for general times of day. So we say “in the morning.” “On the morning” is used only with specific days (on the morning of May 1st), “at the morning” is wrong, and “by the morning” suggests a deadline before morning."
  },
  {
    id: "PREP_L1_Q27",
    level: 1,
    question: "The class starts ___ noon.",
    options: ["at", "in", "on", "by"],
    answer: "at",
    explanation:
      "Rule: “At” is used with exact times, including special times like noon and midnight. So we say “at noon.” “In noon” and “on noon” are incorrect, and “by noon” means not later than noon, which changes the meaning from start time to deadline."
  },
  {
    id: "PREP_L1_Q28",
    level: 1,
    question: "We go to church ___ Sundays.",
    options: ["in", "on", "at", "by"],
    answer: "on",
    explanation:
      "Rule: We use “on” with days of the week, even when they are plural (on Sundays, on Mondays). Therefore, “on Sundays” is correct. “In Sundays” and “at Sundays” are wrong, and “by Sundays” would express a deadline, not a regular habit."
  },
  {
    id: "PREP_L1_Q29",
    level: 1,
    question: "They moved to Cebu ___ 2020.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "Rule: We use “in” with years (in 2020, in 1998). So “in 2020” is correct. “On 2020” and “at 2020” are incorrect, and “by 2020” means not later than 2020, which suggests a deadline instead of the time something happened."
  },
  {
    id: "PREP_L1_Q30",
    level: 1,
    question: "He was born ___ May 5, 1995.",
    options: ["in", "on", "at", "by"],
    answer: "on",
    explanation:
      "Rule: We use “on” for specific dates (on May 5, on 10 June 1990). So “on May 5, 1995” is correct. “In May 5” and “at May 5” are wrong. We do say “in May” when we only mention the month, but once we add the exact date, we use “on.”"
  },
  {
    id: "PREP_L1_Q31",
    level: 1,
    question: "My parents are ___ home right now.",
    options: ["at", "in", "on", "into"],
    answer: "at",
    explanation:
      "Rule: We commonly say “at home” to express that someone is in their own house. It focuses on the idea of being there rather than inside the building’s structure. “In home” is incorrect; we say “in the house” instead. “On home” and “into home” do not work in this context."
  },
  {
    id: "PREP_L1_Q32",
    level: 1,
    question: "She is ___ the kitchen, cooking dinner.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "Rule: We use “in” for rooms and enclosed spaces (in the kitchen, in the bedroom, in the office). She is inside the kitchen, so “in the kitchen” is correct. “On the kitchen” is wrong, “at the kitchen” is unusual for being inside, and “by the kitchen” suggests nearby, not inside."
  },
  {
    id: "PREP_L1_Q33",
    level: 1,
    question: "The car is parked ___ the garage.",
    options: ["in", "on", "at", "over"],
    answer: "in",
    explanation:
      "Rule: We say “in the garage” because the car is inside an enclosed space. “On the garage” would mean on top of it, “at the garage” is possible but focuses on the location as a point rather than being inside, and “over the garage” means above it."
  },
  {
    id: "PREP_L1_Q34",
    level: 1,
    question: "There is a clock ___ the wall.",
    options: ["on", "in", "at", "by"],
    answer: "on",
    explanation:
      "Rule: Objects like clocks, calendars, and pictures that are attached to a wall are usually described as being “on the wall.” “In the wall” suggests something built into it (like a safe), “at the wall” is not natural here, and “by the wall” only means near the wall."
  },
  {
    id: "PREP_L1_Q35",
    level: 1,
    question: "I left my phone ___ the bed.",
    options: ["on", "in", "under", "at"],
    answer: "on",
    explanation:
      "Rule: When an object rests on a flat surface, we use “on.” The phone is resting on top of the bed, so we say “on the bed.” “In the bed” is used for people under the covers, “under the bed” is below, and “at the bed” is not a common expression."
  },
  {
    id: "PREP_L1_Q36",
    level: 1,
    question: "The teacher is standing ___ the door.",
    options: ["at", "on", "in", "over"],
    answer: "at",
    explanation:
      "Rule: We often use “at the door” to mean standing in the doorway or very near it. It focuses on a specific point. “On the door” would mean touching the door’s surface, “in the door” is unusual, and “over the door” means above the door, like a sign or decoration."
  },
  {
    id: "PREP_L1_Q37",
    level: 1,
    question: "We stayed ___ a hotel during our trip.",
    options: ["at", "in", "on", "by"],
    answer: "at",
    explanation:
      "Rule: We normally say “stay at a hotel” when referring to using the hotel as accommodation. “In a hotel” is also possible but “stay at a hotel” is the standard collocation. “On a hotel” and “by a hotel” are not correct for talking about where you stayed."
  },
  {
    id: "PREP_L1_Q38",
    level: 1,
    question: "I put the milk ___ the fridge.",
    options: ["in", "on", "at", "into"],
    answer: "in",
    explanation:
      "Rule: When something ends up inside an enclosed space, we say “in the fridge.” Even if there is movement involved, the final location is “in the fridge.” “Into the fridge” focuses more on the movement itself. “On the fridge” means on top of it, and “at the fridge” is not used for storage."
  },
  {
    id: "PREP_L1_Q39",
    level: 1,
    question: "She stood ___ the window, looking outside.",
    options: ["by", "on", "in", "under"],
    answer: "by",
    explanation:
      "Rule: We use “by” to show that someone is very close to something (by the window, by the door). She is next to the window, so “by the window” is correct. “On the window” refers to the surface (like a sticker), “in the window” suggests inside an opening, and “under the window” is below it."
  },
  {
    id: "PREP_L1_Q40",
    level: 1,
    question: "I saw him ___ the mall yesterday.",
    options: ["at", "in", "on", "by"],
    answer: "at",
    explanation:
      "Rule: We often use “at the mall” when talking about being in or around that place as a location point. “In the mall” is also possible, but “at the mall” is the more common expression in everyday speech. “On the mall” and “by the mall” are not natural for where you met someone."
  },
  {
    id: "PREP_L1_Q41",
    level: 1,
    question: "The restaurant is ___ Main Street.",
    options: ["on", "in", "at", "into"],
    answer: "on",
    explanation:
      "Rule: We usually say a building is “on” a street (on Main Street, on Elm Street). “In Main Street” is unusual in most varieties of English, “at Main Street” would need a number (at 25 Main Street), and “into Main Street” describes movement onto the street, not a building’s location."
  },
  {
    id: "PREP_L1_Q42",
    level: 1,
    question: "They live ___ the third floor of the building.",
    options: ["on", "in", "at", "over"],
    answer: "on",
    explanation:
      "Rule: We use “on” for floors of a building (on the first floor, on the second floor). So “on the third floor” is correct. “In the third floor” is not standard; we might say “in an apartment on the third floor.” “At the third floor” and “over the third floor” are incorrect."
  },
  {
    id: "PREP_L1_Q43",
    level: 1,
    question: "We all sat ___ the table for dinner.",
    options: ["around", "over", "between", "into"],
    answer: "around",
    explanation:
      "Rule: We use “around” when people or things are in a circular or surrounding position. When family members sit so they surround the table, we say they sit “around the table.” “Over the table” means above it, “between the table” doesn’t make sense, and “into the table” is completely wrong here."
  },
  {
    id: "PREP_L1_Q44",
    level: 1,
    question: "The dog ran ___ the house when it started to rain.",
    options: ["into", "onto", "over", "under"],
    answer: "into",
    explanation:
      "Rule: “Into” describes movement from outside to inside an enclosed space. The dog was outside and then went inside the house, so “ran into the house” is correct. “Onto the house” would mean onto the roof, “over the house” means above, and “under the house” means below it."
  },
  {
    id: "PREP_L1_Q45",
    level: 1,
    question: "He walked ___ the room without saying a word.",
    options: ["out of", "into", "on", "over"],
    answer: "out of",
    explanation:
      "Rule: “Out of” shows movement from inside to outside a place. He was inside the room and then left, so he walked “out of the room.” “Into the room” is the opposite direction, “on the room” and “over the room” are incorrect."
  },
  {
    id: "PREP_L1_Q46",
    level: 1,
    question: "She jumped ___ the fence to get her ball.",
    options: ["over", "under", "on", "into"],
    answer: "over",
    explanation:
      "Rule: “Over” is used for movement from one side to another at a higher level, usually by going above something. She jumps from one side of the fence to the other, so “jumped over the fence” is correct. “Under the fence” would mean crawling beneath it, “on the fence” means resting on it, and “into the fence” suggests colliding with it."
  },
  {
    id: "PREP_L1_Q47",
    level: 1,
    question: "They walked ___ the beach at sunset.",
    options: ["along", "across", "over", "into"],
    answer: "along",
    explanation:
      "Rule: “Along” means from one end to another following the length of something (along the road, along the river, along the beach). They followed the shoreline, so “along the beach” is correct. “Across” means from one side to another through it, “over” suggests above, and “into” suggests entering."
  },
  {
    id: "PREP_L1_Q48",
    level: 1,
    question: "We sat ___ the tree to enjoy the shade.",
    options: ["under", "on", "over", "into"],
    answer: "under",
    explanation:
      "Rule: “Under” is used when something is below another object, often protected by it. They sat below the tree to get shade from its branches and leaves, so “under the tree” is correct. “On the tree” would mean on the branches, “over the tree” means above it, and “into the tree” is not natural here."
  },
  {
    id: "PREP_L1_Q49",
    level: 1,
    question: "Your keys are ___ your desk.",
    options: ["on", "in", "under", "at"],
    answer: "on",
    explanation:
      "Rule: We use “on” for objects lying on a flat surface. The keys are resting on top of the desk, so we say “on your desk.” “In your desk” would mean inside a drawer, “under your desk” means below it, and “at your desk” refers to being near or sitting at the desk."
  },
  {
    id: "PREP_L1_Q50",
    level: 1,
    question: "The cat is ___ the box.",
    options: ["inside", "on", "under", "over"],
    answer: "inside",
    explanation:
      "Rule: “Inside” emphasizes being completely within the limits of something. The cat is fully within the box, so “inside the box” is correct. “On the box” would mean on top of it, “under the box” is below it, and “over the box” means above it."
  },

  // =========================
  // LEVEL 2 – TIME, DURATION & MOVEMENT
  // =========================
  {
    id: "PREP_L2_Q01",
    level: 2,
    question: "I have lived in this city ___ 2018.",
    options: ["since", "for", "during", "from"],
    answer: "since",
    explanation:
      "Rule: We use “since” with a specific starting point in time (since 2018, since Monday, since last year). It shows when something began and continues up to now. “For” is used with a length of time (for three years), “during” is used with a period (during the holiday), and “from” is normally paired with “to” or “until.”"
  },
  {
    id: "PREP_L2_Q02",
    level: 2,
    question: "She has worked here ___ three years.",
    options: ["for", "since", "during", "from"],
    answer: "for",
    explanation:
      "Rule: We use “for” with a duration or length of time (for three years, for two hours). The sentence talks about how long she has worked, so “for three years” is correct. “Since three years” is wrong because ‘since’ needs a specific starting point, “during three years” is unnatural, and “from three years” is incomplete."
  },
  {
    id: "PREP_L2_Q03",
    level: 2,
    question: "We met many times ___ the summer.",
    options: ["during", "for", "since", "by"],
    answer: "during",
    explanation:
      "Rule: We use “during” to talk about something happening in a specific period of time (during the summer, during the meeting). The focus is on when the events happened within that period, so “during the summer” is correct. “For the summer” focuses on the whole duration, “since the summer” needs a starting point continuing to now, and “by the summer” is about a deadline."
  },
  {
    id: "PREP_L2_Q04",
    level: 2,
    question: "He waited ___ two hours for the bus.",
    options: ["for", "since", "at", "on"],
    answer: "for",
    explanation:
      "Rule: Again, “for” is used with a period of time to show duration. He waited for the bus for two hours. “Since two hours” is incorrect, “at two hours” is not used this way, and “on two hours” is not grammatical here."
  },
  {
    id: "PREP_L2_Q05",
    level: 2,
    question: "We must finish this report ___ Friday.",
    options: ["by", "until", "on", "since"],
    answer: "by",
    explanation:
      "Rule: “By” is used to show a deadline—no later than a certain time. “By Friday” means the report must be done on or before Friday. “Until Friday” suggests continuing an action up to Friday, “on Friday” simply states the day it will happen, and “since Friday” means starting from Friday in the past, which does not fit."
  },
  {
    id: "PREP_L2_Q06",
    level: 2,
    question: "The store is open ___ 9 p.m.",
    options: ["until", "by", "since", "during"],
    answer: "until",
    explanation:
      "Rule: “Until” is used to show that something continues up to a certain time. “Open until 9 p.m.” means the store remains open and then closes at 9. “By 9 p.m.” would mean not later than 9, but does not describe continuous opening, “since 9 p.m.” would be the starting time, and “during 9 p.m.” is incorrect."
  },
  {
    id: "PREP_L2_Q07",
    level: 2,
    question: "She walked ___ the park to get home.",
    options: ["through", "over", "under", "into"],
    answer: "through",
    explanation:
      "Rule: “Through” means from one side of an area to the other, passing inside it (through the park, through the tunnel). She uses the park as a path, so she walks “through the park.” “Over the park” suggests above, “under the park” is not logical, and “into the park” means entering but not necessarily crossing it."
  },
  {
    id: "PREP_L2_Q08",
    level: 2,
    question: "The dog ran ___ the road and nearly got hit.",
    options: ["across", "along", "around", "into"],
    answer: "across",
    explanation:
      "Rule: “Across” means from one side to the other side of something (across the road, across the river). The dog moved from one side of the road to the other, so “across the road” is correct. “Along the road” means in the same direction as the road, “around the road” is odd, and “into the road” only focuses on entering the road."
  },
  {
    id: "PREP_L2_Q09",
    level: 2,
    question: "They walked ___ the river, enjoying the view.",
    options: ["along", "across", "over", "through"],
    answer: "along",
    explanation:
      "Rule: “Along” means following the length or direction of something (along the river, along the beach). So “walked along the river” is correct. “Across the river” means from one side to the other, “over the river” suggests a bridge, and “through the river” suggests going in the water."
  },
  {
    id: "PREP_L2_Q10",
    level: 2,
    question: "She quickly climbed ___ the stairs.",
    options: ["up", "over", "through", "across"],
    answer: "up",
    explanation:
      "Rule: “Up” is used for movement to a higher place (up the stairs, up the hill). Climbing the stairs involves moving to a higher level, so “up the stairs” is correct. “Over the stairs” suggests above them, “through the stairs” is not logical, and “across the stairs” doesn’t fit the sense of climbing."
  },

  // (… CONTINUATION NOTE …
  // To stay within the message limits, we’ll keep Level 2–4 in the
  // same structure. You can copy-paste this pattern and extend it.
  // Below is the REST of Level 2 plus full Level 3 and 4, still
  // reaching a total of 200 questions with detailed explanations.)

  {
    id: "PREP_L2_Q11",
    level: 2,
    question: "He jumped ___ the bus just before it left.",
    options: ["onto", "into", "over", "across"],
    answer: "onto",
    explanation:
      "Rule: “Onto” describes movement to a surface (onto the bus step, onto the table). When we jump to board a bus, we step onto it, so “jumped onto the bus” is correct. “Into” emphasizes entering an enclosed space, “over the bus” means above it, and “across the bus” is incorrect."
  },
  {
    id: "PREP_L2_Q12",
    level: 2,
    question: "He got ___ the car and drove away.",
    options: ["into", "onto", "over", "through"],
    answer: "into",
    explanation:
      "Rule: “Get into” is used for entering a car or small vehicle (get into a car, get into a taxi). It focuses on going inside. “Onto” is used for surfaces or larger vehicles like buses or trains, “over” and “through” are not used with this meaning."
  },
  {
    id: "PREP_L2_Q13",
    level: 2,
    question: "She got ___ the bus at the city center.",
    options: ["off", "out", "away", "down"],
    answer: "off",
    explanation:
      "Rule: We say “get on / get off” for buses, trains, and planes. When leaving the bus, we say “get off the bus.” “Get out” is more common with cars, “away” doesn’t fit this structure, and “down” alone is incorrect here."
  },
  {
    id: "PREP_L2_Q14",
    level: 2,
    question: "Please fill ___ this form carefully.",
    options: ["in", "on", "out", "over"],
    answer: "in",
    explanation:
      "Rule: The phrasal verb “fill in” means to complete a form by writing information in the blanks. So we say “fill in this form.” “Fill on” and “fill over” are not used, while “fill out” is also possible in many dialects but is not one of the given correct options here."
  },
  {
    id: "PREP_L2_Q15",
    level: 2,
    question: "He walked ___ the door without knocking.",
    options: ["through", "over", "into", "under"],
    answer: "through",
    explanation:
      "Rule: “Through” is used when you pass from one side of an opening to the other side. The door is an opening in the wall, so walking “through the door” makes sense. “Into the door” sounds like he hit the door, “over the door” means above it, and “under the door” is below it."
  },
  {
    id: "PREP_L2_Q16",
    level: 2,
    question: "He walked ___ the room and sat down.",
    options: ["into", "onto", "over", "under"],
    answer: "into",
    explanation:
      "Rule: “Into” shows movement from outside to inside. He was outside the room and then entered, so he walked “into the room.” “Onto” means movement to a surface, “over” suggests above, and “under” means below, none of which describe entering the room."
  },
  {
    id: "PREP_L2_Q17",
    level: 2,
    question: "The kids are running ___ the yard.",
    options: ["around", "across", "between", "into"],
    answer: "around",
    explanation:
      "Rule: “Around” means in circles or in different directions within an area. The children are moving in different directions inside the yard, so “running around the yard” is correct. “Across the yard” emphasizes moving from one side to the other, “between the yard” is incorrect, and “into the yard” suggests only entering."
  },
  {
    id: "PREP_L2_Q18",
    level: 2,
    question: "We drove ___ the tunnel slowly.",
    options: ["through", "over", "across", "around"],
    answer: "through",
    explanation:
      "Rule: “Through” is used when you move from one side of an enclosed space to the other side (through the tunnel, through the forest). “Over the tunnel” would indicate going above it, “across the tunnel” is not usual, and “around the tunnel” means going around the outside."
  },
  {
    id: "PREP_L2_Q19",
    level: 2,
    question: "He walked ___ the street without looking.",
    options: ["across", "along", "around", "into"],
    answer: "across",
    explanation:
      "Rule: Walking “across the street” means from one side of the street to the other. That is the typical phrase. “Along the street” means in the same direction as the street, “around the street” is unnatural, and “into the street” only shows entering it."
  },
  {
    id: "PREP_L2_Q20",
    level: 2,
    question: "They walked ___ the riverbank, hand in hand.",
    options: ["along", "across", "over", "through"],
    answer: "along",
    explanation:
      "Rule: Again, “along” means following the length of something. A riverbank has a length you can walk beside, so “along the riverbank” is correct. “Across,” “over,” and “through” would change the meaning and not fit the idea of walking beside it."
  },
  {
    id: "PREP_L2_Q21",
    level: 2,
    question: "I will see you ___ the morning of Monday.",
    options: ["on", "in", "at", "by"],
    answer: "on",
    explanation:
      "Rule: With a specific day plus “morning/afternoon/evening,” we use “on” (on Monday morning, on the morning of May 5). So “on the morning of Monday” is correct. “In the morning of Monday” is not natural, “at the morning” is wrong, and “by the morning” is a deadline."
  },
  {
    id: "PREP_L2_Q22",
    level: 2,
    question: "He fell asleep ___ the movie.",
    options: ["during", "for", "since", "by"],
    answer: "during",
    explanation:
      "Rule: “During” is used to say that something happened in the middle of another event or period (during the movie, during the meeting). So he fell asleep while the movie was playing. “For the movie” refers to how long something lasted, “since the movie” needs a starting point, and “by the movie” is incorrect."
  },
  {
    id: "PREP_L2_Q23",
    level: 2,
    question: "She studied hard ___ the exam week.",
    options: ["during", "for", "since", "from"],
    answer: "during",
    explanation:
      "Rule: Exam week is a period of time. We use “during” to show that her studying happened in that period. “For exam week” is unclear, “since exam week” would need to show continuation from then, and “from exam week” is incomplete without ‘to’."
  },
  {
    id: "PREP_L2_Q24",
    level: 2,
    question: "You should take this medicine ___ meals.",
    options: ["after", "during", "since", "at"],
    answer: "after",
    explanation:
      "Rule: The common instruction is “after meals” or “before meals.” Here, “after meals” is the natural expression. “During meals” is less common for medicine, “since meals” is wrong, and “at meals” is not a standard phrase."
  },
  {
    id: "PREP_L2_Q25",
    level: 2,
    question: "___ the end of the day, I was very tired.",
    options: ["By", "At", "In", "On"],
    answer: "By",
    explanation:
      "Rule: “By the end of the day” means not later than the time the day finishes, and it emphasizes a result reached at that time. “At the end of the day” can also be used, but it tends to mean the exact final moment. The more natural exam answer here is “By the end of the day, I was very tired,” showing the state reached over time."
  },
  {
    id: "PREP_L2_Q26",
    level: 2,
    question: "We usually go on vacation ___ May.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "Rule: Months take the preposition “in” (in May, in July). So “in May” is correct. “On May” needs a specific date (on May 5), “at May” is incorrect, and “by May” expresses a deadline."
  },
  {
    id: "PREP_L2_Q27",
    level: 2,
    question: "They will arrive ___ the afternoon.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "Rule: We use “in” with parts of the day in general (in the morning, in the afternoon, in the evening). So “in the afternoon” is correct. “On the afternoon” is only used with a specific date (on the afternoon of May 5), “at the afternoon” is wrong, and “by the afternoon” is a deadline."
  },
  {
    id: "PREP_L2_Q28",
    level: 2,
    question: "We stayed in the office ___ 10 p.m.",
    options: ["until", "by", "since", "during"],
    answer: "until",
    explanation:
      "Rule: “Until” shows that the action continued up to a specific time. They stayed there up to 10 p.m., so “until 10 p.m.” is correct. “By 10 p.m.” suggests a deadline, “since 10 p.m.” would be a starting point, and “during 10 p.m.” is incorrect."
  },
  {
    id: "PREP_L2_Q29",
    level: 2,
    question: "He has been sick ___ last week.",
    options: ["since", "for", "during", "from"],
    answer: "since",
    explanation:
      "Rule: “Since” is used with a specific starting point (since last week, since Monday). The sickness started at that point and continues, so “since last week” is correct. “For last week” is not correct for ongoing duration, “during last week” describes something that happened at some time in that week but not necessarily continuing, and “from last week” is incomplete without ‘to’."
  },
  {
    id: "PREP_L2_Q30",
    level: 2,
    question: "She has worked here ___ ten years.",
    options: ["for", "since", "during", "by"],
    answer: "for",
    explanation:
      "Rule: When we talk about how long something has lasted, we use “for” + a time period (for ten years, for two hours). So “for ten years” is correct. “Since ten years” is wrong, “during ten years” is awkward, and “by ten years” does not express duration."
  },

  // (Level 2 continued: 31–50)
  {
    id: "PREP_L2_Q31",
    level: 2,
    question: "He stayed in Manila ___ the whole month.",
    options: ["for", "during", "since", "to"],
    answer: "for",
    explanation:
      "Rule: “For” with ‘the whole month’ emphasizes the duration. “Stayed for the whole month” is natural. “During the whole month” is possible but usually we say “during the month” without ‘whole.’ “Since the whole month” and “to the whole month” are incorrect."
  },
  {
    id: "PREP_L2_Q32",
    level: 2,
    question: "We were stuck in traffic ___ two hours.",
    options: ["for", "since", "by", "in"],
    answer: "for",
    explanation:
      "Rule: Again, a length of time uses “for” (for two hours). The sentence describes how long they were stuck, so “for two hours” is correct. “Since two hours” is incorrect, “by two hours” is wrong, and “in two hours” means something different (it will be done in two hours = after two hours)."
  },
  {
    id: "PREP_L2_Q33",
    level: 2,
    question: "___ the beginning, it was hard to understand.",
    options: ["At", "In", "On", "By"],
    answer: "At",
    explanation:
      "Rule: We often use the fixed phrase “at the beginning” when we refer to the start of something. So “At the beginning, it was hard…” is correct. “In the beginning” is also possible but is more literary or general; exam-style English usually prefers “at the beginning” here. “On the beginning” and “by the beginning” are incorrect."
  },
  {
    id: "PREP_L2_Q34",
    level: 2,
    question: "I will call you ___ lunchtime.",
    options: ["at", "in", "on", "by"],
    answer: "at",
    explanation:
      "Rule: We use “at” for specific times and meal times (at 1 p.m., at noon, at lunchtime). So “at lunchtime” is correct. “In lunchtime” and “on lunchtime” are wrong, and “by lunchtime” is a deadline."
  },
  {
    id: "PREP_L2_Q35",
    level: 2,
    question: "He finished the project ___ three days.",
    options: ["in", "for", "during", "since"],
    answer: "in",
    explanation:
      "Rule: “In + period” can mean how long it took to complete something (finished in three days). So “in three days” is correct. “For three days” would emphasize duration but not completion, “during three days” is unnatural, and “since three days” is incorrect."
  },
  {
    id: "PREP_L2_Q36",
    level: 2,
    question: "We will leave ___ two hours.",
    options: ["in", "for", "during", "since"],
    answer: "in",
    explanation:
      "Rule: “In + time period” can also refer to the future, meaning ‘after’ that amount of time has passed. “Leave in two hours” = we will go after two hours. “For two hours” describes duration, “during two hours” is not standard, and “since two hours” is incorrect."
  },
  {
    id: "PREP_L2_Q37",
    level: 2,
    question: "She usually works ___ night.",
    options: ["at", "in", "on", "by"],
    answer: "at",
    explanation:
      "Rule: As in Level 1, “at night” is the usual phrase for nighttime in general. “In night” and “on night” are incorrect, and “by night” has a special meaning (travel by night) but does not fit a regular work schedule as clearly as “at night.”"
  },
  {
    id: "PREP_L2_Q38",
    level: 2,
    question: "He often travels ___ business.",
    options: ["on", "for", "in", "at"],
    answer: "on",
    explanation:
      "Rule: The fixed expression is “on business” when someone travels for work reasons. So we say “travels on business.” “For business” is also heard, but “on business” is the common idiom tested in exams. “In business” and “at business” have different or no meanings in this context."
  },
  {
    id: "PREP_L2_Q39",
    level: 2,
    question: "We arrived ___ the airport very early.",
    options: ["at", "in", "on", "to"],
    answer: "at",
    explanation:
      "Rule: We use “arrive at” for small places or specific points (at the airport, at the station, at the hotel) and “arrive in” for larger places like cities and countries. An airport is a specific location, so “arrived at the airport” is correct. “Arrived to the airport” is not standard."
  },
  {
    id: "PREP_L2_Q40",
    level: 2,
    question: "They arrived ___ Japan yesterday.",
    options: ["in", "at", "on", "to"],
    answer: "in",
    explanation:
      "Rule: We use “arrive in” with countries and big cities (arrive in Japan, arrive in Manila). So “arrived in Japan” is correct. “Arrived at Japan” is not standard, “arrived to Japan” is incorrect, and “arrived on Japan” is wrong."
  },
  {
    id: "PREP_L2_Q41",
    level: 2,
    question: "She walked ___ me without saying hello.",
    options: ["past", "over", "under", "through"],
    answer: "past",
    explanation:
      "Rule: “Past” means moving from one side of a person or thing to the other, passing them. She walks “past me” when she goes by my side. “Over me” would mean above, “under me” below, and “through me” is impossible in reality."
  },
  {
    id: "PREP_L2_Q42",
    level: 2,
    question: "We drove ___ the city to avoid traffic.",
    options: ["around", "through", "into", "over"],
    answer: "around",
    explanation:
      "Rule: Driving “around the city” means using roads around the outside of the city to avoid going through the center. “Through the city” would be the direct route, “into the city” is just entering it, and “over the city” suggests flying above it."
  },
  {
    id: "PREP_L2_Q43",
    level: 2,
    question: "She looked ___ her bag for the keys.",
    options: ["through", "over", "on", "under"],
    answer: "through",
    explanation:
      "Rule: “Look through” something means search inside it carefully (look through a bag, look through a drawer). She searches inside her bag, so “through her bag” is correct. “Look over” means review, “look on” and “look under” would change the meaning."
  },
  {
    id: "PREP_L2_Q44",
    level: 2,
    question: "The teacher walked ___ the classroom, checking the students’ work.",
    options: ["around", "over", "under", "across"],
    answer: "around",
    explanation:
      "Rule: “Around” shows movement to different parts of a place. The teacher moves from desk to desk, so “around the classroom” is correct. “Over,” “under,” and “across” do not describe this kind of movement inside a room."
  },
  {
    id: "PREP_L2_Q45",
    level: 2,
    question: "He fell ___ his bike and hurt his knee.",
    options: ["off", "from", "out", "down"],
    answer: "off",
    explanation:
      "Rule: The common expression is “fall off” something you are on (fall off a bike, fall off a ladder). So “fell off his bike” is correct. “From his bike” is possible but less common, “out” and “down” alone are incomplete without a preposition of origin."
  },
  {
    id: "PREP_L2_Q46",
    level: 2,
    question: "She leaned ___ the wall while waiting.",
    options: ["against", "on", "over", "under"],
    answer: "against",
    explanation:
      "Rule: “Lean against” is the natural phrase when your body is supported by a vertical surface. So we say “leaned against the wall.” “Lean on the wall” can also be used but “against” is more precise and is the exam-style answer. “Over” and “under” do not fit."
  },
  {
    id: "PREP_L2_Q47",
    level: 2,
    question: "He threw the ball ___ the window by accident.",
    options: ["through", "over", "into", "across"],
    answer: "through",
    explanation:
      "Rule: “Through” shows movement from one side of an opening to the other side. The ball passes through the open space of the window, so “through the window” is correct. “Over the window” means above it, “into the window” sounds like it hit the glass, and “across the window” is unusual."
  },
  {
    id: "PREP_L2_Q48",
    level: 2,
    question: "I walked ___ the hill to reach the top.",
    options: ["up", "over", "around", "through"],
    answer: "up",
    explanation:
      "Rule: To reach the top of a hill, you move “up” the hill. “Over the hill” would suggest going beyond to the other side, “around the hill” means circling it, and “through the hill” is only possible with a tunnel."
  },
  {
    id: "PREP_L2_Q49",
    level: 2,
    question: "We walked ___ the bridge to the other side of the river.",
    options: ["across", "along", "through", "over"],
    answer: "across",
    explanation:
      "Rule: You usually walk “across a bridge” when you go from one side of a river to the other. “Along the bridge” means walking from one end toward the other but doesn’t emphasize crossing the river, and “over the bridge” is less specific and not the best exam choice. “Through” is wrong here."
  },
  {
    id: "PREP_L2_Q50",
    level: 2,
    question: "He walked ___ the edge of the cliff carefully.",
    options: ["along", "across", "over", "through"],
    answer: "along",
    explanation:
      "Rule: The edge of the cliff is a line or long boundary, so “along the edge” is correct. “Across the edge” is awkward, “over the edge” suggests falling off, and “through the edge” is not logical."
  },

    // =========================
  // LEVEL 3 – ADVANCE (Collocations: adjectives & verbs with prepositions)
  // =========================
  {
    id: "PREP_L3_Q01",
    level: 3,
    question: "She is very good ___ solving puzzles.",
    options: ["at", "of", "for", "in"],
    answer: "at",
    explanation:
      "We use 'good at' to show skill or ability in an activity. We do not say 'good of solving' or 'good for solving' here, and 'good in solving' is not the natural collocation."
  },
  {
    id: "PREP_L3_Q02",
    level: 3,
    question: "He is interested ___ learning Japanese.",
    options: ["in", "on", "at", "for"],
    answer: "in",
    explanation:
      "The correct collocation is 'interested in' when we talk about things that attract our attention or curiosity. 'Interested on/at/for' are not standard in this meaning."
  },
  {
    id: "PREP_L3_Q03",
    level: 3,
    question: "They are proud ___ their achievements.",
    options: ["of", "for", "about", "with"],
    answer: "of",
    explanation:
      "We say 'proud of' something or someone. 'Proud for' and 'proud about' are sometimes heard but 'proud of' is the standard and most natural form."
  },
  {
    id: "PREP_L3_Q04",
    level: 3,
    question: "I am afraid ___ heights.",
    options: ["of", "from", "about", "for"],
    answer: "of",
    explanation:
      "The usual expression is 'afraid of' when we talk about something that scares us. 'Afraid from' or 'afraid about' sound unnatural in this context."
  },
  {
    id: "PREP_L3_Q05",
    level: 3,
    question: "She is responsible ___ organizing the event.",
    options: ["for", "of", "about", "with"],
    answer: "for",
    explanation:
      "We use 'responsible for' to show what someone is in charge of. 'Responsible of/about/with' are not correct in this standard structure."
  },
  {
    id: "PREP_L3_Q06",
    level: 3,
    question: "This book is full ___ useful information.",
    options: ["of", "with", "for", "about"],
    answer: "of",
    explanation:
      "We usually say 'full of' to show that something contains a lot of something. 'Full with' is not common and sounds incorrect in standard English."
  },
  {
    id: "PREP_L3_Q07",
    level: 3,
    question: "Manila is famous ___ its historic sites.",
    options: ["for", "of", "about", "with"],
    answer: "for",
    explanation:
      "We say 'famous for' to show the reason why a place or person is well known. 'Famous of/about/with' are not standard collocations in this meaning."
  },
  {
    id: "PREP_L3_Q08",
    level: 3,
    question: "The teacher is very strict ___ her students.",
    options: ["with", "to", "for", "at"],
    answer: "with",
    explanation:
      "We say 'strict with someone' when talking about a person you discipline. 'Strict to' and 'strict for' are not the usual choices in this context."
  },
  {
    id: "PREP_L3_Q09",
    level: 3,
    question: "The two proposals are different ___ each other.",
    options: ["from", "than", "of", "with"],
    answer: "from",
    explanation:
      "The common pattern is 'different from'. 'Different than' appears in some varieties of English, but 'different from' is safest and most widely accepted, especially in exams."
  },
  {
    id: "PREP_L3_Q10",
    level: 3,
    question: "She is married ___ a doctor.",
    options: ["to", "with", "at", "for"],
    answer: "to",
    explanation:
      "We say 'married to someone'. We do not say 'married with someone' to indicate the person you married."
  },
  {
    id: "PREP_L3_Q11",
    level: 3,
    question: "He is very similar ___ his brother.",
    options: ["to", "with", "from", "at"],
    answer: "to",
    explanation:
      "We use 'similar to' to compare people or things. 'Similar with' and 'similar from' are incorrect in standard English."
  },
  {
    id: "PREP_L3_Q12",
    level: 3,
    question: "I am tired ___ waiting for the bus.",
    options: ["of", "from", "about", "with"],
    answer: "of",
    explanation:
      "We use 'tired of' when we are bored or frustrated with something. 'Tired from' is used for physical exhaustion, so it would not match 'waiting' in this sense."
  },
  {
    id: "PREP_L3_Q13",
    level: 3,
    question: "We are excited ___ the upcoming trip.",
    options: ["about", "for", "on", "in"],
    answer: "about",
    explanation:
      "The natural collocation is 'excited about' something. 'Excited for' is sometimes used in casual speech, but 'excited about' is more formal and widely accepted."
  },
  {
    id: "PREP_L3_Q14",
    level: 3,
    question: "She is worried ___ her final exam.",
    options: ["about", "for", "of", "with"],
    answer: "about",
    explanation:
      "We say 'worried about' something. 'Worried for' is possible but usually when you are concerned for someone’s safety, not about a test."
  },
  {
    id: "PREP_L3_Q15",
    level: 3,
    question: "He is capable ___ solving difficult problems.",
    options: ["of", "for", "at", "about"],
    answer: "of",
    explanation:
      "The standard phrase is 'capable of' plus an -ing verb or noun. 'Capable for/at/about' do not form the usual collocation."
  },
  {
    id: "PREP_L3_Q16",
    level: 3,
    question: "Many children are dependent ___ their parents.",
    options: ["on", "to", "of", "for"],
    answer: "on",
    explanation:
      "We say 'dependent on' when something or someone needs another to function. 'Dependent to/of/for' are not correct in this structure."
  },
  {
    id: "PREP_L3_Q17",
    level: 3,
    question: "She is allergic ___ seafood.",
    options: ["to", "with", "for", "at"],
    answer: "to",
    explanation:
      "The usual pattern is 'allergic to' something. 'Allergic with/for/at' are not correct collocations."
  },
  {
    id: "PREP_L3_Q18",
    level: 3,
    question: "Students are often interested ___ science and technology.",
    options: ["in", "on", "at", "for"],
    answer: "in",
    explanation:
      "'Interested in' is the correct combination. 'Interested on/at/for' are incorrect when speaking about areas of interest."
  },
  {
    id: "PREP_L3_Q19",
    level: 3,
    question: "She is satisfied ___ her test results.",
    options: ["with", "by", "for", "of"],
    answer: "with",
    explanation:
      "We use 'satisfied with' to express contentment. 'Satisfied by' can appear in some contexts, but 'satisfied with' is the standard in most exam sentences."
  },
  {
    id: "PREP_L3_Q20",
    level: 3,
    question: "He is disappointed ___ the final score.",
    options: ["with", "at", "in", "for"],
    answer: "with",
    explanation:
      "'Disappointed with' is commonly used for results or things. 'Disappointed in' is often used for people, and 'disappointed at' is less common in modern speech."
  },
  {
    id: "PREP_L3_Q21",
    level: 3,
    question: "She is angry ___ her friend for lying.",
    options: ["with", "to", "for", "about"],
    answer: "with",
    explanation:
      "We say 'angry with someone' and 'angry about something'. Here, the focus is on the person (her friend), so 'with' is correct."
  },
  {
    id: "PREP_L3_Q22",
    level: 3,
    question: "The manager is angry ___ the delay in production.",
    options: ["about", "with", "of", "for"],
    answer: "about",
    explanation:
      "Here the focus is on the situation, so we use 'angry about something'. 'Angry with' would shift the focus to a person rather than the delay."
  },
  {
    id: "PREP_L3_Q23",
    level: 3,
    question: "I am familiar ___ her previous work.",
    options: ["with", "to", "about", "for"],
    answer: "with",
    explanation:
      "We say 'familiar with' when we know or recognize something. 'Familiar to' is also possible but usually describes how something appears to others (The name is familiar to me)."
  },
  {
    id: "PREP_L3_Q24",
    level: 3,
    question: "The director is responsible ___ the whole department.",
    options: ["for", "of", "about", "to"],
    answer: "for",
    explanation:
      "Again, 'responsible for' shows what someone manages or controls. 'Responsible to' is used for the person or authority you report to."
  },
  {
    id: "PREP_L3_Q25",
    level: 3,
    question: "We are ready ___ the meeting.",
    options: ["for", "to", "at", "with"],
    answer: "for",
    explanation:
      "We use 'ready for' a noun and 'ready to' with a verb. Here, 'meeting' is a noun, so 'ready for the meeting' is correct."
  },
  {
    id: "PREP_L3_Q26",
    level: 3,
    question: "She apologized ___ being late.",
    options: ["for", "about", "of", "with"],
    answer: "for",
    explanation:
      "We say 'apologize for' plus a noun or -ing verb to explain the reason. 'Apologize about' is less common and sounds weaker."
  },
  {
    id: "PREP_L3_Q27",
    level: 3,
    question: "He apologized ___ his boss for the error.",
    options: ["to", "for", "at", "with"],
    answer: "to",
    explanation:
      "We 'apologize to someone' and 'apologize for something'. Here, the blank is followed by a person (his boss), so 'to' is correct."
  },
  {
    id: "PREP_L3_Q28",
    level: 3,
    question: "We complained ___ the manager about the noise.",
    options: ["to", "at", "for", "on"],
    answer: "to",
    explanation:
      "We 'complain to someone' (the person who receives the complaint) and 'complain about something'. So 'complained to the manager' is correct."
  },
  {
    id: "PREP_L3_Q29",
    level: 3,
    question: "They complained ___ the loud music next door.",
    options: ["about", "for", "of", "on"],
    answer: "about",
    explanation:
      "We 'complain about' the problem or situation. 'Complaint of' exists as a noun phrase but the verb form here needs 'about'."
  },
  {
    id: "PREP_L3_Q30",
    level: 3,
    question: "You must listen carefully ___ your parents.",
    options: ["to", "at", "for", "with"],
    answer: "to",
    explanation:
      "The verb 'listen' is almost always followed by 'to' when we say who or what we are listening to. 'Listen at/for/with' are used in other, less common patterns."
  },
  {
    id: "PREP_L3_Q31",
    level: 3,
    question: "He laughed ___ the joke.",
    options: ["at", "to", "on", "about"],
    answer: "at",
    explanation:
      "We 'laugh at' something that is funny. 'Laugh to/on/about' do not form the basic collocation here."
  },
  {
    id: "PREP_L3_Q32",
    level: 3,
    question: "She smiled ___ me and walked away.",
    options: ["at", "to", "on", "with"],
    answer: "at",
    explanation:
      "We normally say 'smile at' someone. 'Smile to' is sometimes used, but 'smiled at me' is the standard expression."
  },
  {
    id: "PREP_L3_Q33",
    level: 3,
    question: "We are looking ___ my missing keys.",
    options: ["for", "at", "to", "on"],
    answer: "for",
    explanation:
      "'Look for' means to search for something. 'Look at' means to direct your eyes toward something, which is a different meaning."
  },
  {
    id: "PREP_L3_Q34",
    level: 3,
    question: "Please look ___ your little brother while I am away.",
    options: ["after", "for", "at", "into"],
    answer: "after",
    explanation:
      "'Look after' means to take care of someone. 'Look for' means search, 'look at' means watch, and 'look into' means investigate."
  },
  {
    id: "PREP_L3_Q35",
    level: 3,
    question: "They are waiting ___ the bus.",
    options: ["for", "to", "at", "on"],
    answer: "for",
    explanation:
      "We usually 'wait for' a person or thing. 'Wait at' can show location (wait at the bus stop), but the object here is the bus, so 'for' is needed."
  },
  {
    id: "PREP_L3_Q36",
    level: 3,
    question: "I do not agree ___ that decision.",
    options: ["with", "to", "on", "about"],
    answer: "with",
    explanation:
      "We 'agree with someone' and also 'agree with a statement or decision'. 'Agree to' is used with proposals or plans you accept."
  },
  {
    id: "PREP_L3_Q37",
    level: 3,
    question: "We all agree ___ your plan.",
    options: ["with", "to", "on", "about"],
    answer: "with",
    explanation:
      "Here we are accepting the plan, and both 'agree with your plan' and 'agree on your plan' are possible, but the more direct collocation tested in many exams is 'agree with your plan'."
  },
  {
    id: "PREP_L3_Q38",
    level: 3,
    question: "He applied ___ the job yesterday.",
    options: ["for", "to", "at", "on"],
    answer: "for",
    explanation:
      "We 'apply for' a job, course, or opportunity. 'Apply to' is used with the institution (apply to the company), but here the object is 'the job'."
  },
  {
    id: "PREP_L3_Q39",
    level: 3,
    question: "This pen belongs ___ Anna.",
    options: ["to", "with", "for", "of"],
    answer: "to",
    explanation:
      "We use 'belong to' to show ownership. 'Belong with' can be used in special contexts (it belongs with that set), but 'belong to' is correct here."
  },
  {
    id: "PREP_L3_Q40",
    level: 3,
    question: "You can always rely ___ me.",
    options: ["on", "in", "at", "with"],
    answer: "on",
    explanation:
      "We 'rely on' someone or something when we depend on them. 'Rely in/at/with' are not correct in this structure."
  },
  {
    id: "PREP_L3_Q41",
    level: 3,
    question: "Success depends ___ hard work and discipline.",
    options: ["on", "of", "to", "in"],
    answer: "on",
    explanation:
      "The fixed expression is 'depend on'. 'Depend of/to/in' are incorrect forms in this meaning."
  },
  {
    id: "PREP_L3_Q42",
    level: 3,
    question: "The course consists ___ three main modules.",
    options: ["of", "from", "in", "with"],
    answer: "of",
    explanation:
      "'Consist of' is the correct pattern to list the parts that make up a whole. 'Consist from/in/with' are not standard in this basic sense."
  },
  {
    id: "PREP_L3_Q43",
    level: 3,
    question: "Many people suffer ___ stress at work.",
    options: ["from", "of", "by", "for"],
    answer: "from",
    explanation:
      "We usually say 'suffer from' a disease or problem. 'Suffer of/by/for' are not standard collocations in this context."
  },
  {
    id: "PREP_L3_Q44",
    level: 3,
    question: "She succeeded ___ passing the exam on her first try.",
    options: ["in", "at", "on", "for"],
    answer: "in",
    explanation:
      "We say 'succeed in' doing something. 'Succeed at' can also appear with certain activities, but 'succeed in passing' is the usual pattern with a verb."
  },
  {
    id: "PREP_L3_Q45",
    level: 3,
    question: "She insisted ___ paying for dinner.",
    options: ["on", "in", "at", "for"],
    answer: "on",
    explanation:
      "We use 'insist on' when we strongly demand or choose something. 'Insist in/at/for' are not the correct prepositions with this verb."
  },
  {
    id: "PREP_L3_Q46",
    level: 3,
    question: "He focuses ___ his studies before the exam.",
    options: ["on", "in", "at", "to"],
    answer: "on",
    explanation:
      "We say 'focus on' something. 'Focus in/at/to' are not the standard collocations here."
  },
  {
    id: "PREP_L3_Q47",
    level: 3,
    question: "The teacher congratulated us ___ our good results.",
    options: ["on", "for", "about", "to"],
    answer: "on",
    explanation:
      "We use 'congratulate someone on' something. 'Congratulate for' is common in some usage but 'congratulated us on our results' is the exam-safe form."
  },
  {
    id: "PREP_L3_Q48",
    level: 3,
    question: "I often dream ___ traveling around the world.",
    options: ["of", "about", "with", "for"],
    answer: "of",
    explanation:
      "Both 'dream of' and 'dream about' can be used, but 'dream of doing something' is the classic pattern for long-term wishes and ambitions."
  },
  {
    id: "PREP_L3_Q49",
    level: 3,
    question: "Please remind me ___ the meeting tomorrow.",
    options: ["about", "of", "for", "on"],
    answer: "about",
    explanation:
      "We say 'remind someone about something' to make sure they do not forget it. 'Remind of' is used more for making someone remember a person or thing in a different sense (That song reminds me of my childhood)."
  },
  {
    id: "PREP_L3_Q50",
    level: 3,
    question: "This rule applies ___ all employees.",
    options: ["to", "for", "at", "on"],
    answer: "to",
    explanation:
      "We say 'apply to' when a rule or law affects someone or something. 'Apply for' is used when requesting something (apply for a job)."
  },

  // =========================
  // LEVEL 4 – SUPER (Idiomatic / complex prepositional phrases)
  // =========================
  {
    id: "PREP_L4_Q01",
    level: 4,
    question: "___ the heavy traffic, we still arrived early.",
    options: ["In spite of", "Because of", "Instead of", "According to"],
    answer: "In spite of",
    explanation:
      "'In spite of' introduces a contrast: something happens even though there is an obstacle. Because the result is positive (arrived early) and the situation is negative (heavy traffic), 'In spite of' is the best choice."
  },
  {
    id: "PREP_L4_Q02",
    level: 4,
    question: "The match was canceled ___ the storm.",
    options: ["due to", "instead of", "apart from", "in front of"],
    answer: "due to",
    explanation:
      "'Due to' gives the reason or cause of something. Here, the storm is the cause of the cancellation, so 'due to the storm' is correct."
  },
  {
    id: "PREP_L4_Q03",
    level: 4,
    question: "___ the report, sales increased last year.",
    options: ["According to", "In spite of", "Apart from", "Instead of"],
    answer: "According to",
    explanation:
      "'According to' is used when we report information from a source such as a report, survey, or person. It means 'as stated by' the report."
  },
  {
    id: "PREP_L4_Q04",
    level: 4,
    question: "She is in charge ___ the marketing department.",
    options: ["of", "for", "with", "at"],
    answer: "of",
    explanation:
      "The fixed expression is 'in charge of' something, meaning responsible for managing it. 'In charge for/with/at' are incorrect forms."
  },
  {
    id: "PREP_L4_Q05",
    level: 4,
    question: "In addition ___ his salary, he receives a housing allowance.",
    options: ["to", "for", "with", "on"],
    answer: "to",
    explanation:
      "'In addition to' means 'as well as' or 'plus'. It introduces another item that is added to what was already mentioned."
  },
  {
    id: "PREP_L4_Q06",
    level: 4,
    question: "Many people lost their jobs ___ the economic crisis.",
    options: ["as a result of", "in front of", "in spite of", "apart from"],
    answer: "as a result of",
    explanation:
      "'As a result of' introduces the cause that produced a particular outcome. The economic crisis caused job losses, so this phrase fits perfectly."
  },
  {
    id: "PREP_L4_Q07",
    level: 4,
    question: "He stood ___ the audience and gave his speech.",
    options: ["in front of", "in charge of", "instead of", "in case of"],
    answer: "in front of",
    explanation:
      "'In front of' describes a position facing or before someone or something. He is standing where the audience can see him clearly."
  },
  {
    id: "PREP_L4_Q08",
    level: 4,
    question: "She offered to work overtime ___ extra pay.",
    options: ["in exchange for", "in case of", "in spite of", "instead of"],
    answer: "in exchange for",
    explanation:
      "'In exchange for' is used when you give or do something and receive something else in return. Here she gives extra work and receives extra pay."
  },
  {
    id: "PREP_L4_Q09",
    level: 4,
    question: "With regard ___ your question, we will answer it tomorrow.",
    options: ["to", "of", "for", "at"],
    answer: "to",
    explanation:
      "The correct phrase is 'with regard to' meaning 'concerning' or 'about'. 'With regard of/for/at' are incorrect."
  },
  {
    id: "PREP_L4_Q10",
    level: 4,
    question: "The new policy is in line ___ international standards.",
    options: ["with", "to", "of", "for"],
    answer: "with",
    explanation:
      "'In line with' means 'matching' or 'consistent with'. We always say 'in line with', not 'in line to/of/for' in this sense."
  },
  {
    id: "PREP_L4_Q11",
    level: 4,
    question: "He continued his research ___ the expense of his health.",
    options: ["at", "on", "in", "by"],
    answer: "at",
    explanation:
      "'At the expense of' means that something is gained but something else is harmed or lost. Here, his health suffered while his research continued."
  },
  {
    id: "PREP_L4_Q12",
    level: 4,
    question: "Smokers are often at risk ___ developing serious diseases.",
    options: ["of", "for", "to", "with"],
    answer: "of",
    explanation:
      "The standard phrase is 'at risk of' something. It shows a danger or possibility of a negative outcome."
  },
  {
    id: "PREP_L4_Q13",
    level: 4,
    question: "___ fire, do not use the elevator.",
    options: ["In case of", "According to", "In spite of", "By means of"],
    answer: "In case of",
    explanation:
      "'In case of' is used on notices and instructions to show what to do when a particular situation happens (for example, in case of emergency)."
  },
  {
    id: "PREP_L4_Q14",
    level: 4,
    question: "___ terms of cost, this option is the cheapest.",
    options: ["In", "On", "At", "By"],
    answer: "In",
    explanation:
      "The fixed expression is 'in terms of' when we choose a particular aspect to talk about, such as cost, quality, or time."
  },
  {
    id: "PREP_L4_Q15",
    level: 4,
    question: "Most of us are in favor ___ stricter traffic rules.",
    options: ["of", "for", "to", "with"],
    answer: "of",
    explanation:
      "'In favor of' means that you support something. We do not say 'in favor for/to/with' in this meaning."
  },
  {
    id: "PREP_L4_Q16",
    level: 4,
    question: "She spoke ___ behalf of the entire team.",
    options: ["on", "in", "at", "by"],
    answer: "on",
    explanation:
      "The phrase 'on behalf of' means 'representing' someone. We always use 'on', not 'in/at/by', in this expression."
  },
  {
    id: "PREP_L4_Q17",
    level: 4,
    question: "Her views are in contrast ___ his more traditional opinions.",
    options: ["to", "with", "for", "of"],
    answer: "to",
    explanation:
      "'In contrast to' is the usual fixed expression showing a clear difference between two things."
  },
  {
    id: "PREP_L4_Q18",
    level: 4,
    question: "We chose to walk ___ taking a taxi.",
    options: ["instead of", "in case of", "apart from", "out of"],
    answer: "instead of",
    explanation:
      "'Instead of' introduces an alternative that replaces another option. Here, walking replaces taking a taxi."
  },
  {
    id: "PREP_L4_Q19",
    level: 4,
    question: "Apart ___ a few spelling mistakes, your essay is excellent.",
    options: ["from", "of", "to", "for"],
    answer: "from",
    explanation:
      "'Apart from' means 'except for' or 'besides'. It is used to show an exception to a general statement."
  },
  {
    id: "PREP_L4_Q20",
    level: 4,
    question: "The printer is out ___ order again.",
    options: ["of", "from", "for", "on"],
    answer: "of",
    explanation:
      "The fixed phrase 'out of order' means 'not working properly'. 'Out from order' or 'out for order' do not exist in this sense."
  },
  {
    id: "PREP_L4_Q21",
    level: 4,
    question: "The situation quickly got out ___ control.",
    options: ["of", "from", "for", "on"],
    answer: "of",
    explanation:
      "We say 'out of control' when something cannot be managed or controlled. 'Out from control' is not a correct expression."
  },
  {
    id: "PREP_L4_Q22",
    level: 4,
    question: "The students were under ___ to finish the project on time.",
    options: ["pressure", "risk", "control", "order"],
    answer: "pressure",
    explanation:
      "Here we use the phrase 'under pressure', meaning they feel stress or strong demands. The other phrases do not fit the context."
  },
  {
    id: "PREP_L4_Q23",
    level: 4,
    question: "I am feeling a bit under ___ today.",
    options: ["the weather", "control", "pressure", "the table"],
    answer: "the weather",
    explanation:
      "'Under the weather' is an idiom meaning slightly sick or unwell. It does not literally refer to the weather above us."
  },
  {
    id: "PREP_L4_Q24",
    level: 4,
    question: "The train left exactly ___ time.",
    options: ["on", "in", "at", "by"],
    answer: "on",
    explanation:
      "'On time' means at the planned or correct time. 'In time' has a different meaning: early enough to do something."
  },
  {
    id: "PREP_L4_Q25",
    level: 4,
    question: "We arrived just ___ time to see the beginning of the show.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "'In time' means early enough for something, often just before it starts. 'On time' would focus on being exactly at the scheduled time, not 'just before'."
  },
  {
    id: "PREP_L4_Q26",
    level: 4,
    question: "From now ___, we will hold meetings every Monday.",
    options: ["on", "up", "in", "to"],
    answer: "on",
    explanation:
      "'From now on' means starting at this moment and continuing into the future. It is a fixed phrase."
  },
  {
    id: "PREP_L4_Q27",
    level: 4,
    question: "Attendance is limited ___ 50 participants.",
    options: ["to", "for", "at", "on"],
    answer: "to",
    explanation:
      "'Limit something to' a number shows the maximum allowed. 'Limited for/at/on' do not carry this meaning."
  },
  {
    id: "PREP_L4_Q28",
    level: 4,
    question: "As ___ today, the new rules are officially in effect.",
    options: ["of", "for", "at", "on"],
    answer: "of",
    explanation:
      "The phrase 'as of today' means 'starting from today'. 'As for' has a different meaning ('regarding'), and 'as at/as on' are rare and not used in this basic exam style."
  },
  {
    id: "PREP_L4_Q29",
    level: 4,
    question: "The prize is out ___ reach for most people.",
    options: ["of", "from", "for", "on"],
    answer: "of",
    explanation:
      "'Out of reach' means it is impossible or very difficult to get. 'Out from reach' is not a standard phrase."
  },
  {
    id: "PREP_L4_Q30",
    level: 4,
    question: "Please keep in touch ___ us after you graduate.",
    options: ["with", "to", "for", "at"],
    answer: "with",
    explanation:
      "The idiom is 'keep in touch with' someone, meaning to maintain communication. 'Keep in touch to/for/at' are incorrect."
  },
  {
    id: "PREP_L4_Q31",
    level: 4,
    question: "Many volunteers joined the search ___ the missing child.",
    options: ["for", "of", "to", "about"],
    answer: "for",
    explanation:
      "We say 'search for' a person or thing we are trying to find. 'Search of/to/about' are not correct with this direct object."
  },
  {
    id: "PREP_L4_Q32",
    level: 4,
    question: "The organization is in need ___ additional funding.",
    options: ["of", "for", "to", "from"],
    answer: "of",
    explanation:
      "The phrase 'in need of' means 'requiring' something. 'In need for' is less natural and not the standard form."
  },
  {
    id: "PREP_L4_Q33",
    level: 4,
    question: "The machine is operated ___ means of a remote control.",
    options: ["by", "with", "on", "in"],
    answer: "by",
    explanation:
      "The full expression is 'by means of', which explains the method used to do something. 'With means of' is not correct."
  },
  {
    id: "PREP_L4_Q34",
    level: 4,
    question: "He spoke to the group ___ the basis of his long experience.",
    options: ["on", "at", "by", "for"],
    answer: "on",
    explanation:
      "'On the basis of' introduces the foundation or reason for a statement or decision. It is the fixed expression used in formal English."
  },
  {
    id: "PREP_L4_Q35",
    level: 4,
    question: "This number represents the cost ___ average per person.",
    options: ["on", "in", "at", "by"],
    answer: "on",
    explanation:
      "The phrase 'on average' means when you consider the usual or typical value. 'In average' and 'at average' are incorrect."
  },
  {
    id: "PREP_L4_Q36",
    level: 4,
    question: "She broke the vase ___ purpose.",
    options: ["on", "by", "in", "at"],
    answer: "on",
    explanation:
      "'On purpose' means intentionally, not by accident. 'By purpose' or 'in purpose' are not standard expressions."
  },
  {
    id: "PREP_L4_Q37",
    level: 4,
    question: "I deleted the file ___ mistake.",
    options: ["by", "on", "at", "in"],
    answer: "by",
    explanation:
      "We say 'by mistake' to mean that something happened unintentionally. 'On mistake' and 'in mistake' are incorrect."
  },
  {
    id: "PREP_L4_Q38",
    level: 4,
    question: "We need to pay the bill ___ advance.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "'In advance' means before a particular time or event. It is the fixed prepositional phrase used for early payment or booking."
  },
  {
    id: "PREP_L4_Q39",
    level: 4,
    question: "Please explain your plan in more ___.",
    options: ["detail", "advance", "control", "favor"],
    answer: "detail",
    explanation:
      "The phrase 'in detail' means with a lot of specific information. The other nouns do not form correct idioms here."
  },
  {
    id: "PREP_L4_Q40",
    level: 4,
    question: "___ the long run, education is a very good investment.",
    options: ["In", "On", "At", "By"],
    answer: "In",
    explanation:
      "We say 'in the long run' to talk about the distant future or long-term results. 'On/at/by the long run' are incorrect."
  },
  {
    id: "PREP_L4_Q41",
    level: 4,
    question: "We do not have the final figures ___ present.",
    options: ["at", "in", "on", "by"],
    answer: "at",
    explanation:
      "The phrase 'at present' means 'right now' or 'currently'. 'In present' and 'on present' are not used in this meaning."
  },
  {
    id: "PREP_L4_Q42",
    level: 4,
    question: "He is busy with another task ___ the moment.",
    options: ["at", "in", "on", "by"],
    answer: "at",
    explanation:
      "'At the moment' is another way to say 'right now'. 'In the moment' exists but has a different, more emotional meaning ('living in the moment')."
  },
  {
    id: "PREP_L4_Q43",
    level: 4,
    question: "___ least, let us try to be honest with each other.",
    options: ["At", "In", "On", "By"],
    answer: "At",
    explanation:
      "The phrase is 'at least', used to introduce the minimum acceptable level. 'In/on/by least' are incorrect."
  },
  {
    id: "PREP_L4_Q44",
    level: 4,
    question: "You should sleep eight hours ___ most nights.",
    options: ["on", "in", "at", "by"],
    answer: "on",
    explanation:
      "'On most nights' is the natural expression showing frequency across many nights. 'In/at/by most nights' do not work here."
  },
  {
    id: "PREP_L4_Q45",
    level: 4,
    question: "I spoke to the manager ___ person about the problem.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "The idiom 'in person' means face-to-face, not by phone or email. 'On/at/by person' are incorrect."
  },
  {
    id: "PREP_L4_Q46",
    level: 4,
    question: "They are not allowed to leave the country ___ any circumstances.",
    options: ["under", "in", "on", "by"],
    answer: "under",
    explanation:
      "The phrase 'under no circumstances' or 'under any circumstances' is used for strong rules. 'In/on/by any circumstances' is not standard."
  },
  {
    id: "PREP_L4_Q47",
    level: 4,
    question: "The two sides are still at odds ___ each other.",
    options: ["with", "to", "for", "at"],
    answer: "with",
    explanation:
      "'At odds with' someone means to be in disagreement or conflict. The preposition 'with' is required in this idiom."
  },
  {
    id: "PREP_L4_Q48",
    level: 4,
    question: "The project was completed ___ collaboration with local partners.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "'In collaboration with' describes working together with others. The preposition 'in' is part of the fixed phrase."
  },
  {
    id: "PREP_L4_Q49",
    level: 4,
    question: "He acted ___ accordance with the law.",
    options: ["in", "on", "at", "by"],
    answer: "in",
    explanation:
      "The fixed phrase 'in accordance with' means in agreement with, or following, a rule or law."
  },
  {
    id: "PREP_L4_Q50",
    level: 4,
    question: "___ general, people here are very friendly.",
    options: ["In", "On", "At", "By"],
    answer: "In",
    explanation:
      "We use 'in general' to talk about something that is usually true overall. 'On/at/by general' are incorrect in this expression."
  }

];

