// questions/paragraph_organization.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["paragraph_organization"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (Simple Chronology & Recipes)
  // ==========================================
  beginner: [
    {
      question: "Arrange the following:\n1. The sun set behind the mountains.\n2. The sky turned orange and purple.\n3. It was a beautiful afternoon.\n4. Soon, the stars began to appear.",
      options: ["3-1-2-4", "1-2-3-4", "3-2-1-4", "4-1-2-3"],
      answer: "3-1-2-4",
      explanation: "Correct Order: 3-1-2-4.\n(3) Start with the general setting (Afternoon).\n(1) The main action happens (Sun set).\n(2) The visual result of sunset (Sky turned orange).\n(4) Transition to night (Stars appear)."
    },
    {
      question: "Arrange the following:\n1. Then, he put on his shoes.\n2. First, John put on his socks.\n3. Finally, he tied the laces.\n4. He was ready to go for a run.",
      options: ["2-1-3-4", "1-2-3-4", "4-3-2-1", "2-3-1-4"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nSequence: Socks (First) -> Shoes (Then) -> Laces (Finally) -> Ready (Result)."
    },
    {
      question: "Arrange the following:\n1. She added boiling water to the cup.\n2. Maria took a teabag out of the box.\n3. She put the teabag in the cup.\n4. Finally, she added a little sugar.",
      options: ["2-3-1-4", "1-2-3-4", "3-2-1-4", "2-1-3-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nSteps: Get teabag -> Put in cup -> Add water -> Add sugar."
    },
    {
      question: "Arrange the following:\n1. The seed began to sprout roots.\n2. The farmer planted a seed in the soil.\n3. Soon, a small green shoot appeared.\n4. He watered it every day.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nGrowth Cycle: Plant (2) -> Water (4) -> Roots (1) -> Shoot (3)."
    },
    {
      question: "Arrange the following:\n1. He paid for the groceries at the counter.\n2. Mark went to the supermarket.\n3. He put the bags in his car.\n4. He picked up milk, eggs, and bread.",
      options: ["2-4-1-3", "2-1-4-3", "4-2-1-3", "1-2-3-4"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nChronology: Go to market -> Pick items -> Pay -> Leave."
    },
    {
      question: "Arrange the following:\n1. The audience clapped loudly.\n2. The singer walked onto the stage.\n3. She took a bow and smiled.\n4. She sang a beautiful song.",
      options: ["2-4-3-1", "2-1-4-3", "2-4-1-3", "1-2-3-4"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nEvent Flow: Enter (2) -> Sing (4) -> Audience Claps (1) -> Bow (3). Note: Sometimes Clapping happens before Bowing."
    },
    {
      question: "Arrange the following:\n1. I brushed my teeth.\n2. I woke up at 6:00 AM.\n3. I ate my breakfast.\n4. I took a shower.",
      options: ["2-1-4-3", "2-4-1-3", "2-3-1-4", "4-2-1-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nTypical Routine: Wake up -> Shower -> Brush -> Breakfast."
    },
    {
      question: "Arrange the following:\n1. It started to rain heavily.\n2. We decided to go for a picnic.\n3. We packed our food and drinks.\n4. We had to run back inside the house.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nStory: Plan (2) -> Prep (3) -> Conflict/Rain (1) -> Result/Run (4)."
    },
    {
      question: "Arrange the following:\n1. Then, mix the eggs and flour.\n2. First, break the eggs into a bowl.\n3. Finally, pour the mixture into a pan.\n4. Beat the eggs until fluffy.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nRecipe: Break -> Beat -> Mix -> Pour."
    },
    {
      question: "Arrange the following:\n1. She failed the exam.\n2. She did not study for the test.\n3. She felt very sad.\n4. The teacher returned the papers.",
      options: ["2-4-1-3", "1-2-3-4", "4-1-2-3", "2-1-4-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nCause & Effect: Didn't study -> Papers returned -> Failed -> Sad."
    },
    {
      question: "Arrange the following:\n1. He washed the car with soap.\n2. Dad decided to clean his car.\n3. He rinsed it with water.\n4. He dried it with a towel.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-2-1-3"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nProcess: Decide -> Wash -> Rinse -> Dry."
    },
    {
      question: "Arrange the following:\n1. The dog chased the cat.\n2. The cat ran up the tree.\n3. The dog barked at the bottom.\n4. They were playing in the garden.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "1-4-2-3"],
      answer: "4-1-2-3",
      explanation: "Correct Order: 4-1-2-3.\nStory: Setting (Garden) -> Chase -> Escape -> Ending."
    },
    {
      question: "Arrange the following:\n1. Put the letter in the envelope.\n2. Write your message on the paper.\n3. Seal the envelope.\n4. Place a stamp on the corner.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nSteps: Write -> Insert -> Seal -> Stamp."
    },
    {
      question: "Arrange the following:\n1. Everyone shouted 'Happy Birthday!'.\n2. The room was dark and quiet.\n3. Maria walked into the room.\n4. Suddenly, the lights turned on.",
      options: ["2-3-4-1", "1-2-3-4", "3-2-4-1", "2-4-3-1"],
      answer: "2-3-4-1",
      explanation: "Correct Order: 2-3-4-1.\nSurprise: Dark room -> Enter -> Lights -> Shout."
    },
    {
      question: "Arrange the following:\n1. He bought a ticket at the booth.\n2. He watched the movie and ate popcorn.\n3. John went to the cinema.\n4. He found his seat inside.",
      options: ["3-1-4-2", "3-4-1-2", "1-3-4-2", "2-3-1-4"],
      answer: "3-1-4-2",
      explanation: "Correct Order: 3-1-4-2.\nChronology: Arrive -> Buy Ticket -> Seat -> Watch."
    },
    {
      question: "Arrange the following:\n1. The teacher asked a question.\n2. Lisa raised her hand.\n3. The teacher called her name.\n4. Lisa gave the correct answer.",
      options: ["1-2-3-4", "2-3-1-4", "1-3-2-4", "4-1-2-3"],
      answer: "1-2-3-4",
      explanation: "Correct Order: 1-2-3-4.\nClassroom flow: Ask -> Raise hand -> Call -> Answer."
    },
    {
      question: "Arrange the following:\n1. Mix blue and yellow paint.\n2. Get a clean canvas.\n3. You will get the color green.\n4. Paint the grass on the canvas.",
      options: ["2-1-3-4", "1-2-3-4", "2-4-1-3", "4-1-3-2"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nArt: Canvas -> Mix -> Result (Green) -> Use."
    },
    {
      question: "Arrange the following:\n1. The alarm rang loudly.\n2. He turned off the alarm.\n3. He went back to sleep.\n4. He was late for work.",
      options: ["1-2-3-4", "2-3-1-4", "1-3-2-4", "4-1-2-3"],
      answer: "1-2-3-4",
      explanation: "Correct Order: 1-2-3-4.\nBad morning: Ring -> Off -> Sleep -> Late."
    },
    {
      question: "Arrange the following:\n1. Open the book to page one.\n2. Sit down in a comfortable chair.\n3. Start reading the first chapter.\n4. Pick a book from the shelf.",
      options: ["4-2-1-3", "4-1-2-3", "2-4-1-3", "1-2-3-4"],
      answer: "4-2-1-3",
      explanation: "Correct Order: 4-2-1-3.\nReading: Pick -> Sit -> Open -> Read."
    },
    {
      question: "Arrange the following:\n1. It creates a rainbow.\n2. The sun shines through the rain.\n3. The light bends and splits into colors.\n4. It rains on a sunny day.",
      options: ["4-2-3-1", "1-2-3-4", "4-3-2-1", "2-4-3-1"],
      answer: "4-2-3-1",
      explanation: "Correct Order: 4-2-3-1.\nScience: Rain/Sun -> Sunlight passes -> Refraction -> Rainbow."
    },
    {
      question: "Arrange the following:\n1. She checked her shopping list.\n2. She went to the checkout counter.\n3. She put items in her cart.\n4. She entered the grocery store.",
      options: ["4-1-3-2", "1-4-3-2", "4-3-1-2", "2-4-1-3"],
      answer: "4-1-3-2",
      explanation: "Correct Order: 4-1-3-2.\nShopping: Enter -> List -> Cart -> Pay."
    },
    {
      question: "Arrange the following:\n1. The bird built a nest.\n2. The eggs hatched into chicks.\n3. She laid three blue eggs.\n4. She sat on them to keep them warm.",
      options: ["1-3-4-2", "1-2-3-4", "3-4-2-1", "1-4-3-2"],
      answer: "1-3-4-2",
      explanation: "Correct Order: 1-3-4-2.\nNature: Nest -> Lay -> Incubate -> Hatch."
    },
    {
      question: "Arrange the following:\n1. He put on his helmet.\n2. He rode his bike to the park.\n3. He checked the tires.\n4. He took his bike out of the garage.",
      options: ["4-3-1-2", "1-2-3-4", "4-1-2-3", "3-4-1-2"],
      answer: "4-3-1-2",
      explanation: "Correct Order: 4-3-1-2.\nSafety first: Bike out -> Check tires -> Helmet -> Ride."
    },
    {
      question: "Arrange the following:\n1. Apply shampoo to your hair.\n2. Wet your hair with water.\n3. Rinse the shampoo off.\n4. Dry your hair with a towel.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nShower: Wet -> Soap -> Rinse -> Dry."
    },
    {
      question: "Arrange the following:\n1. The crowd cheered wildly.\n2. The game ended with a goal.\n3. The players shook hands.\n4. The winning team lifted the trophy.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-4-1", "4-3-2-1"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nSports: End/Goal -> Cheer -> Handshake -> Trophy."
    },
    {
      question: "Arrange the following:\n1. He realized he lost his keys.\n2. He arrived at his front door.\n3. He searched his pockets.\n4. He had to call a locksmith.",
      options: ["2-3-1-4", "2-1-3-4", "1-2-3-4", "3-2-1-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nEvent: Arrive -> Search -> Realization -> Consequence."
    },
    {
      question: "Arrange the following:\n1. The water turns into vapor.\n2. The sun heats the ocean.\n3. The vapor forms clouds.\n4. The rain falls from the clouds.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nWater Cycle: Heat -> Evaporation -> Condensation -> Rain."
    },
    {
      question: "Arrange the following:\n1. Press the power button.\n2. Plug the computer into the outlet.\n3. Wait for the system to boot up.\n4. Log in with your password.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nTech: Plug -> Power -> Boot -> Login."
    },
    {
      question: "Arrange the following:\n1. The caterpillar eats leaves.\n2. It forms a chrysalis.\n3. A butterfly emerges.\n4. An egg is laid on a leaf.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "3-2-1-4"],
      answer: "4-1-2-3",
      explanation: "Correct Order: 4-1-2-3.\nInsect Life: Egg -> Eat -> Chrysalis -> Butterfly."
    },
    {
      question: "Arrange the following:\n1. Put the dirty clothes in the washer.\n2. Add detergent powder.\n3. Turn on the machine.\n4. Hang the clothes to dry.",
      options: ["1-2-3-4", "2-1-3-4", "1-3-2-4", "4-1-2-3"],
      answer: "1-2-3-4",
      explanation: "Correct Order: 1-2-3-4.\nLaundry: Load -> Soap -> Wash -> Dry."
    },
    {
      question: "Arrange the following:\n1. She saved money for months.\n2. She wanted a new phone.\n3. She went to the store.\n4. She bought the phone happily.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nGoal: Want -> Save -> Go -> Buy."
    },
    {
      question: "Arrange the following:\n1. The waiter brought the menu.\n2. We sat at a table.\n3. We ordered our food.\n4. We entered the restaurant.",
      options: ["4-2-1-3", "1-2-3-4", "4-1-2-3", "2-4-1-3"],
      answer: "4-2-1-3",
      explanation: "Correct Order: 4-2-1-3.\nRestaurant: Enter -> Sit -> Menu -> Order."
    },
    {
      question: "Arrange the following:\n1. Blow out the candles.\n2. Sing the birthday song.\n3. Light the candles on the cake.\n4. Make a wish.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      answer: "3-2-4-1",
      explanation: "Correct Order: 3-2-4-1.\nCake Ritual: Light -> Sing -> Wish -> Blow."
    },
    {
      question: "Arrange the following:\n1. The movie ended.\n2. The lights came on.\n3. The credits rolled on the screen.\n4. The audience walked out.",
      options: ["1-3-2-4", "1-2-3-4", "3-1-2-4", "2-1-3-4"],
      answer: "1-3-2-4",
      explanation: "Correct Order: 1-3-2-4.\nEnding: End -> Credits -> Lights -> Exit."
    },
    {
      question: "Arrange the following:\n1. He put the letter in the mailbox.\n2. He wrote a letter to his friend.\n3. He walked to the post office.\n4. He bought a stamp.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "4-2-3-1"],
      answer: "2-3-4-1",
      explanation: "Correct Order: 2-3-4-1.\nMail: Write -> Go -> Stamp -> Post."
    },
    {
      question: "Arrange the following:\n1. The ambulance arrived.\n2. There was a car accident.\n3. The victim was taken to the hospital.\n4. People called for help.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nEmergency: Accident -> Call -> Arrival -> Hospital."
    },
    {
      question: "Arrange the following:\n1. She opened her gift.\n2. It was a beautiful necklace.\n3. She hugged her mother.\n4. It was her birthday.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "1-4-2-3"],
      answer: "4-1-2-3",
      explanation: "Correct Order: 4-1-2-3.\nGift giving: Context (Birthday) -> Open -> See -> React."
    },
    {
      question: "Arrange the following:\n1. He practiced every day.\n2. He wanted to learn guitar.\n3. He bought a guitar.\n4. He played a song for his friends.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nMusic: Want -> Buy -> Practice -> Perform."
    },
    {
      question: "Arrange the following:\n1. The bread popped up.\n2. Put the bread in the toaster.\n3. Spread butter on the toast.\n4. Push the lever down.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nToast: Insert -> Push -> Pop -> Butter."
    },
    {
      question: "Arrange the following:\n1. The referee blew the whistle.\n2. The players took their positions.\n3. The game started.\n4. The ball was kicked.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      answer: "2-1-4-3",
      explanation: "Correct Order: 2-1-4-3.\nKickoff: Positions -> Whistle -> Kick -> Game On."
    },
    {
      question: "Arrange the following:\n1. She studied hard for the test.\n2. She received an 'A'.\n3. She took the test.\n4. She was very happy.",
      options: ["1-3-2-4", "1-2-3-4", "3-1-2-4", "2-1-3-4"],
      answer: "1-3-2-4",
      explanation: "Correct Order: 1-3-2-4.\nGrades: Study -> Take Test -> Result -> Feeling."
    },
    {
      question: "Arrange the following:\n1. The phone rang.\n2. He answered it.\n3. He said 'Hello'.\n4. He picked up the receiver.",
      options: ["1-4-2-3", "1-2-3-4", "1-4-3-2", "4-1-2-3"],
      answer: "1-4-2-3",
      explanation: "Correct Order: 1-4-2-3.\nCall: Ring -> Pickup -> Connect -> Speak."
    },
    {
      question: "Arrange the following:\n1. It creates a snowman.\n2. Roll a large ball of snow.\n3. Roll a medium and small ball.\n4. Stack them on top of each other.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      answer: "2-3-4-1",
      explanation: "Correct Order: 2-3-4-1.\nBuilding: Base -> Parts -> Assemble -> Result."
    },
    {
      question: "Arrange the following:\n1. The library closes at 5 PM.\n2. She borrowed three books.\n3. She arrived at 4:30 PM.\n4. She left just in time.",
      options: ["1-3-2-4", "1-2-3-4", "3-2-1-4", "2-3-1-4"],
      answer: "1-3-2-4",
      explanation: "Correct Order: 1-3-2-4.\nConstraint: Info -> Arrive -> Action -> Escape."
    },
    {
      question: "Arrange the following:\n1. Put the dirty dishes in the sink.\n2. Wash them with soap.\n3. Rinse them with water.\n4. Place them on the rack to dry.",
      options: ["1-2-3-4", "2-1-3-4", "1-3-2-4", "4-1-2-3"],
      answer: "1-2-3-4",
      explanation: "Correct Order: 1-2-3-4.\nDishes: Sink -> Soap -> Rinse -> Dry."
    },
    {
      question: "Arrange the following:\n1. He crossed the finish line.\n2. The race began.\n3. He ran as fast as he could.\n4. He won the gold medal.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nRace: Start -> Run -> Finish -> Win."
    },
    {
      question: "Arrange the following:\n1. Add hot water.\n2. Put coffee powder in a mug.\n3. Stir well.\n4. Add sugar and milk.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "4-2-1-3"],
      answer: "2-1-4-3",
      explanation: "Correct Order: 2-1-4-3.\nCoffee: Powder -> Water -> Additions -> Stir."
    },
    {
      question: "Arrange the following:\n1. The guests arrived.\n2. She cleaned the house.\n3. She cooked dinner.\n4. They ate together.",
      options: ["2-3-1-4", "1-2-3-4", "3-2-1-4", "1-4-2-3"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nParty: Clean -> Cook -> Arrival -> Eat."
    },
    {
      question: "Arrange the following:\n1. He saw a dentist.\n2. He had a toothache.\n3. The dentist filled the cavity.\n4. He felt much better.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "1-4-2-3"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nPain: Problem -> Visit -> Fix -> Relief."
    },
    {
      question: "Arrange the following:\n1. The plane took off.\n2. Passengers boarded the plane.\n3. They fastened their seatbelts.\n4. The plane arrived at the destination.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nFlight: Board -> Buckle -> Takeoff -> Land."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (Cause & Effect, Processes)
  // ==========================================
  intermediate: [
    {
      question: "Arrange the following:\n1. Consequently, classes were suspended.\n2. The typhoon hit the city strongly last night.\n3. Students stayed at home and waited for updates.\n4. Strong winds and heavy rains caused flooding.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\n(2) Main Event: Typhoon hits.\n(4) Detail: Flooding.\n(1) Result: Suspension.\n(3) Reaction: Students stay home."
    },
    {
      question: "Arrange the following:\n1. This leads to global warming.\n2. Carbon dioxide traps heat in the atmosphere.\n3. Human activities burn fossil fuels.\n4. As a result, polar ice caps are melting.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      answer: "3-2-1-4",
      explanation: "Correct Order: 3-2-1-4.\nFlow: Activity -> Mechanism -> Warming -> Melting."
    },
    {
      question: "Arrange the following:\n1. He opened the small box carefully.\n2. Inside, he found an old, rusty key.\n3. It belonged to the mysterious door in the attic.\n4. John found a box in the basement.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "2-1-3-4"],
      answer: "4-1-2-3",
      explanation: "Correct Order: 4-1-2-3.\nNarrative: Find box -> Open -> See contents -> Identify use."
    },
    {
      question: "Arrange the following:\n1. However, it started to rain in the afternoon.\n2. The morning was bright and sunny.\n3. We planned to play tennis outside.\n4. So, we decided to play chess indoors instead.",
      options: ["2-3-1-4", "1-2-3-4", "3-2-1-4", "2-1-3-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nContrast: Good start -> Plan -> Rain (However) -> Change plan (So)."
    },
    {
      question: "Arrange the following:\n1. This allows the plant to grow.\n2. Roots absorb water from the soil.\n3. The water travels up the stem to the leaves.\n4. Photosynthesis uses this water to make food.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      answer: "2-3-4-1",
      explanation: "Correct Order: 2-3-4-1.\nBiology: Absorb -> Transport -> Use -> Grow."
    },
    {
      question: "Arrange the following:\n1. Therefore, regular exercise is recommended.\n2. It strengthens the heart and lungs.\n3. Exercise has many health benefits.\n4. It also reduces stress and anxiety.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      answer: "3-2-4-1",
      explanation: "Correct Order: 3-2-4-1.\nArgument: Topic -> Benefit 1 -> Benefit 2 -> Conclusion."
    },
    {
      question: "Arrange the following:\n1. First, identify the problem clearly.\n2. Finally, evaluate if the solution worked.\n3. Problem solving involves several steps.\n4. Then, brainstorm possible solutions.",
      options: ["3-1-4-2", "1-4-2-3", "3-4-1-2", "1-2-3-4"],
      answer: "3-1-4-2",
      explanation: "Correct Order: 3-1-4-2.\nSteps: Topic (3) -> First (1) -> Then (4) -> Finally (2)."
    },
    {
      question: "Arrange the following:\n1. This prevents soil erosion.\n2. Trees are vital for the environment.\n3. Their roots hold the soil together.\n4. Furthermore, they provide oxygen.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-1-2-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nTopic -> Mechanism -> Result -> Added Benefit."
    },
    {
      question: "Arrange the following:\n1. She applied for several jobs.\n2. Mary graduated with honors.\n3. She was hired by a top company.\n4. Eventually, she was called for an interview.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      answer: "2-1-4-3",
      explanation: "Correct Order: 2-1-4-3.\nCareer: Graduate -> Apply -> Interview -> Hired."
    },
    {
      question: "Arrange the following:\n1. The mixture is then baked in an oven.\n2. Clay is molded into a shape.\n3. This hardens it into pottery.\n4. Finally, it is painted and glazed.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nPottery: Mold -> Bake -> Harden -> Paint."
    },
    {
      question: "Arrange the following:\n1. But today, smartphones are mini-computers.\n2. Technology has evolved rapidly.\n3. In the past, phones were only for calling.\n4. We can now browse the web and take photos.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-1-2-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nEvolution: General -> Past -> Present (But) -> Detail."
    },
    {
      question: "Arrange the following:\n1. This helps maintain a healthy weight.\n2. A balanced diet includes fruits and vegetables.\n3. It also provides energy for daily activities.\n4. Eating right is essential for health.",
      options: ["4-2-3-1", "1-2-3-4", "4-3-2-1", "2-3-4-1"],
      answer: "4-2-3-1",
      explanation: "Correct Order: 4-2-3-1.\nTopic -> Definition -> Benefit 1 -> Benefit 2."
    },
    {
      question: "Arrange the following:\n1. The liquid turns into gas.\n2. Boiling occurs when liquid is heated.\n3. This gas escapes as steam.\n4. Bubbles form and rise to the surface.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nBoiling: Definition -> Bubbles -> Gas -> Steam."
    },
    {
      question: "Arrange the following:\n1. He trained hard for the marathon.\n2. He felt proud of his achievement.\n3. On race day, he ran steady and fast.\n4. He crossed the finish line in record time.",
      options: ["1-3-4-2", "1-2-3-4", "3-4-1-2", "1-4-3-2"],
      answer: "1-3-4-2",
      explanation: "Correct Order: 1-3-4-2.\nRace: Train -> Run -> Finish -> Feeling."
    },
    {
      question: "Arrange the following:\n1. This creates a vacuum inside the straw.\n2. You suck air out of the straw.\n3. Drinking with a straw involves physics.\n4. Atmospheric pressure pushes the liquid up.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-1-4-3"],
      answer: "3-2-1-4",
      explanation: "Correct Order: 3-2-1-4.\nPhysics: Topic -> Action -> Vacuum -> Pressure."
    },
    {
      question: "Arrange the following:\n1. However, he soon realized it was hard work.\n2. Tom wanted to build a treehouse.\n3. He gathered wood and tools.\n4. He asked his friends for help.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nProject: Idea -> Prep -> Struggle -> Solution."
    },
    {
      question: "Arrange the following:\n1. It connects people from all over the world.\n2. The internet is a vast network.\n3. Information travels in seconds.\n4. This has changed how we communicate.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nInternet: Definition -> Function -> Speed -> Impact."
    },
    {
      question: "Arrange the following:\n1. They have thick fur to keep warm.\n2. Polar bears live in the Arctic.\n3. They primarily eat seals.\n4. This helps them survive the cold.",
      options: ["2-1-4-3", "1-2-3-4", "2-3-1-4", "1-4-2-3"],
      answer: "2-1-4-3",
      explanation: "Correct Order: 2-1-4-3.\nBear: Habitat -> Fur -> Benefit -> Diet."
    },
    {
      question: "Arrange the following:\n1. Then, clouds began to form.\n2. It was a sunny morning.\n3. Soon, a thunderstorm struck.\n4. The wind picked up speed.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "4-3-2-1"],
      answer: "2-1-4-3",
      explanation: "Correct Order: 2-1-4-3.\nWeather: Sunny -> Clouds -> Wind -> Storm."
    },
    {
      question: "Arrange the following:\n1. Recycling reduces waste.\n2. We should separate paper and plastic.\n3. It also conserves natural resources.\n4. Everyone must do their part.",
      options: ["1-3-2-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      answer: "1-3-2-4",
      explanation: "Correct Order: 1-3-2-4.\nEnvironment: Benefit 1 -> Benefit 2 -> Action -> Call to Action."
    },
    {
      question: "Arrange the following:\n1. He missed the bus.\n2. His alarm clock broke.\n3. He overslept by an hour.\n4. He arrived late to school.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nEvents: Alarm -> Sleep -> Bus -> Late."
    },
    {
      question: "Arrange the following:\n1. This creates energy for the cell.\n2. Mitochondria are the powerhouse of the cell.\n3. They take in nutrients.\n4. They break down these nutrients.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-3-4", "3-4-2-1"],
      answer: "2-3-4-1",
      explanation: "Correct Order: 2-3-4-1.\nCell: Topic -> Intake -> Breakdown -> Energy."
    },
    {
      question: "Arrange the following:\n1. She drafted an outline.\n2. She submitted the final essay.\n3. She researched her topic.\n4. She wrote the first draft.",
      options: ["3-1-4-2", "1-2-3-4", "3-4-1-2", "1-3-4-2"],
      answer: "3-1-4-2",
      explanation: "Correct Order: 3-1-4-2.\nWriting: Research -> Outline -> Draft -> Submit."
    },
    {
      question: "Arrange the following:\n1. In contrast, summer is hot and dry.\n2. The seasons change throughout the year.\n3. Spring brings new life and rain.\n4. Winter is cold and snowy.",
      options: ["2-3-4-1", "1-2-3-4", "2-3-1-4", "2-4-1-3"],
      answer: "2-3-4-1",
      explanation: "Correct Order: 2-3-4-1.\nSeasons: Topic -> Spring -> Winter -> Summer (Contrast)."
    },
    {
      question: "Arrange the following:\n1. He found a wallet on the street.\n2. He checked the ID inside.\n3. He returned it to the owner.\n4. The owner thanked him.",
      options: ["1-2-3-4", "2-1-3-4", "1-3-2-4", "4-1-2-3"],
      answer: "1-2-3-4",
      explanation: "Correct Order: 1-2-3-4.\nHonesty: Find -> Check -> Return -> Thanks."
    },
    {
      question: "Arrange the following:\n1. The caterpillar spins a cocoon.\n2. A butterfly emerges.\n3. An egg is laid on a leaf.\n4. It hatches into a larva.",
      options: ["3-4-1-2", "1-2-3-4", "3-1-4-2", "4-1-2-3"],
      answer: "3-4-1-2",
      explanation: "Correct Order: 3-4-1-2.\nLife Cycle: Egg -> Hatch -> Cocoon -> Butterfly."
    },
    {
      question: "Arrange the following:\n1. Consequently, traffic was stopped.\n2. A tree fell across the road.\n3. There was a severe storm.\n4. Drivers had to find another route.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      answer: "3-2-1-4",
      explanation: "Correct Order: 3-2-1-4.\nTraffic: Storm -> Tree falls -> Stop -> Detour."
    },
    {
      question: "Arrange the following:\n1. It helps you wake up fresh.\n2. Sleep is vital for health.\n3. During sleep, the body repairs itself.\n4. Lack of sleep causes fatigue.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      answer: "2-3-1-4",
      explanation: "Correct Order: 2-3-1-4.\nSleep: Topic -> Repair -> Freshness -> Contrast."
    },
    {
      question: "Arrange the following:\n1. He unpacked his bags.\n2. He checked into the hotel.\n3. He arrived at the destination.\n4. He went to the beach.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      answer: "3-2-1-4",
      explanation: "Correct Order: 3-2-1-4.\nVacation: Arrive -> Hotel -> Unpack -> Beach."
    },
    {
      question: "Arrange the following:\n1. First, read the instructions carefully.\n2. Success in exams requires strategy.\n3. Finally, review your answers.\n4. Then, answer the easy questions first.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      answer: "2-1-4-3",
      explanation: "Correct Order: 2-1-4-3.\nStrategy: Topic -> First -> Then -> Finally."
    },
    {
      question: "Arrange the following:\n1. She won the competition.\n2. She practiced every morning.\n3. She wanted to be a swimmer.\n4. She joined the swim team.",
      options: ["3-4-2-1", "1-2-3-4", "3-2-4-1", "4-3-2-1"],
      answer: "3-4-2-1",
      explanation: "Correct Order: 3-4-2-1.\nSuccess: Want -> Join -> Practice -> Win."
    },
    {
      question: "Arrange the following:\n1. The cake is ready to eat.\n2. Bake for 30 minutes.\n3. Mix ingredients in a bowl.\n4. Let it cool down.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      answer: "3-2-4-1",
      explanation: "Correct Order: 3-2-4-1.\nBaking: Mix -> Bake -> Cool -> Eat."
    },
    {
      question: "Arrange the following:\n1. However, he forgot his wallet.\n2. He ordered a large meal.\n3. John went to a restaurant.\n4. He had to call his wife to pay.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      answer: "3-2-1-4",
      explanation: "Correct Order: 3-2-1-4.\nStory: Restaurant -> Order -> Wallet Issue -> Solution."
    },
    {
      question: "Arrange the following:\n1. This makes it a global language.\n2. English is spoken in many countries.\n3. It is used in business and science.\n4. Many people learn it as a second language.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-3-4", "3-2-4-1"],
      answer: "2-3-4-1",
      explanation: "Correct Order: 2-3-4-1.\nLanguage: Topic -> Usage -> Learners -> Result."
    },
    {
      question: "Arrange the following:\n1. They decided to build a raft.\n2. Two friends were stranded on an island.\n3. They sailed to safety.\n4. They gathered logs and vines.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "4-2-1-3"],
      answer: "2-1-4-3",
      explanation: "Correct Order: 2-1-4-3.\nSurvival: Stranded -> Decision -> Gather -> Escape."
    },
    {
      question: "Arrange the following:\n1. The lava cools and hardens.\n2. A volcano erupts.\n3. It forms new land/rock.\n4. Molten lava flows down the side.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      answer: "2-4-1-3",
      explanation: "Correct Order: 2-4-1-3.\nVolcano: Erupt -> Flow -> Cool -> Rock."
    },
    {
      question: "Arrange the following:\n1. She planted rose bushes.\n2. She bought gardening tools.\n3. Her garden looks beautiful now.\n4. She watered them regularly.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      answer: "2-1-4-3",
      explanation: "Correct Order: 2-1-4-3.\nGarden: Tools -> Plant -> Water -> Result."
    },
    {
      question: "Arrange the following:\n1. It pumps blood to the body.\n2. The heart is a vital organ.\n3. This blood carries oxygen.\n4. Without it, cells cannot survive.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nHeart: Topic -> Function 1 -> Function 2 -> Importance."
    },
    {
      question: "Arrange the following:\n1. He checked the weather report.\n2. He put on a raincoat.\n3. He saw that it would rain.\n4. He left the house.",
      options: ["1-3-2-4", "1-2-3-4", "1-2-4-3", "3-1-2-4"],
      answer: "1-3-2-4",
      explanation: "Correct Order: 1-3-2-4.\nRain: Check -> See Info -> Gear Up -> Leave."
    },
    {
      question: "Arrange the following:\n1. This creates a surplus.\n2. Sometimes supply exceeds demand.\n3. Prices usually drop.\n4. Economics relies on supply and demand.",
      options: ["4-2-1-3", "1-2-3-4", "4-1-2-3", "2-1-3-4"],
      answer: "4-2-1-3",
      explanation: "Correct Order: 4-2-1-3.\nEcon: Topic -> Scenario -> Result 1 (Surplus) -> Result 2 (Prices)."
    },
    {
      question: "Arrange the following:\n1. Then, the judge entered.\n2. Everyone stood up.\n3. The trial began.\n4. People were waiting in the courtroom.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "3-4-1-2"],
      answer: "4-1-2-3",
      explanation: "Correct Order: 4-1-2-3.\nCourt: Waiting -> Entry -> Stand -> Start."
    },
    {
      question: "Arrange the following:\n1. It provides light and heat.\n2. The sun is a star.\n3. Plants need this light to grow.\n4. Without the sun, life would end.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nSun: Definition -> Function -> Benefit -> Conclusion."
    },
    {
      question: "Arrange the following:\n1. She saved a file.\n2. She turned on the laptop.\n3. She typed her document.\n4. She opened the word processor.",
      options: ["2-4-3-1", "1-2-3-4", "2-3-4-1", "4-2-3-1"],
      answer: "2-4-3-1",
      explanation: "Correct Order: 2-4-3-1.\nWork: On -> Open -> Type -> Save."
    },
    {
      question: "Arrange the following:\n1. The dog wagged its tail.\n2. He gave the dog a treat.\n3. The boy called his dog.\n4. The dog ran to him.",
      options: ["3-4-1-2", "1-2-3-4", "3-1-4-2", "2-3-4-1"],
      answer: "3-4-1-2",
      explanation: "Correct Order: 3-4-1-2.\nDog: Call -> Come -> Wag -> Treat."
    },
    {
      question: "Arrange the following:\n1. They set up the tent.\n2. They drove to the campsite.\n3. They made a campfire.\n4. They slept under the stars.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "1-2-4-3"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nCamping: Drive -> Tent -> Fire -> Sleep."
    },
    {
      question: "Arrange the following:\n1. He finished the race.\n2. He started running.\n3. He tied his shoes.\n4. He stretched his muscles.",
      options: ["3-4-2-1", "1-2-3-4", "3-2-4-1", "4-3-2-1"],
      answer: "3-4-2-1",
      explanation: "Correct Order: 3-4-2-1.\nExercise: Shoes -> Stretch -> Run -> Finish."
    },
    {
      question: "Arrange the following:\n1. The ice cream melted.\n2. It was a very hot day.\n3. She bought an ice cream cone.\n4. She didn't eat it fast enough.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-4-3", "3-2-4-1"],
      answer: "2-3-4-1",
      explanation: "Correct Order: 2-3-4-1.\nMelt: Heat -> Buy -> Delay -> Melt."
    },
    {
      question: "Arrange the following:\n1. He paid the bill.\n2. He checked out of the hotel.\n3. He packed his suitcase.\n4. He called a taxi.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-1-3-4"],
      answer: "3-2-1-4",
      explanation: "Correct Order: 3-2-1-4.\nCheckout: Pack -> Checkout -> Pay -> Taxi."
    },
    {
      question: "Arrange the following:\n1. The glass fell on the floor.\n2. It shattered into pieces.\n3. She accidentally bumped the table.\n4. She had to sweep it up.",
      options: ["3-1-2-4", "1-2-3-4", "3-2-1-4", "2-3-1-4"],
      answer: "3-1-2-4",
      explanation: "Correct Order: 3-1-2-4.\nBreak: Bump -> Fall -> Shatter -> Clean."
    },
    {
      question: "Arrange the following:\n1. Birds start to sing.\n2. The sun rises.\n3. People wake up.\n4. The day begins.",
      options: ["2-1-3-4", "1-2-3-4", "2-4-1-3", "4-2-1-3"],
      answer: "2-1-3-4",
      explanation: "Correct Order: 2-1-3-4.\nDawn: Sun -> Birds -> People -> Day."
    }
  ]
};
