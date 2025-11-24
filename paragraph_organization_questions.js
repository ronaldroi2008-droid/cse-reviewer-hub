// ==========================================
// PARAGRAPH ORGANIZATION QUESTIONS
// Levels: Beginner, Intermediate, Advanced, Expert
// Total: 200 Items (50 per level)
// ==========================================

const PARAGRAPH_ORGANIZATION_QUESTIONS = {

  // ==========================================
  // LEVEL 1: BEGINNER (Simple Chronology & Recipes)
  // ==========================================
  beginner: [
    {
      q: "Arrange the following:\n1. The sun set behind the mountains.\n2. The sky turned orange and purple.\n3. It was a beautiful afternoon.\n4. Soon, the stars began to appear.",
      options: ["3-1-2-4", "1-2-3-4", "3-2-1-4", "4-1-2-3"],
      a: "3-1-2-4",
      exp: "Correct Order: 3-1-2-4.\n(3) Start with the general setting (Afternoon).\n(1) The main action happens (Sun set).\n(2) The visual result of sunset (Sky turned orange).\n(4) Transition to night (Stars appear)."
    },
    {
      q: "Arrange the following:\n1. Then, he put on his shoes.\n2. First, John put on his socks.\n3. Finally, he tied the laces.\n4. He was ready to go for a run.",
      options: ["2-1-3-4", "1-2-3-4", "4-3-2-1", "2-3-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nSequence: Socks (First) -> Shoes (Then) -> Laces (Finally) -> Ready (Result)."
    },
    {
      q: "Arrange the following:\n1. She added boiling water to the cup.\n2. Maria took a teabag out of the box.\n3. She put the teabag in the cup.\n4. Finally, she added a little sugar.",
      options: ["2-3-1-4", "1-2-3-4", "3-2-1-4", "2-1-3-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nSteps: Get teabag -> Put in cup -> Add water -> Add sugar."
    },
    {
      q: "Arrange the following:\n1. The seed began to sprout roots.\n2. The farmer planted a seed in the soil.\n3. Soon, a small green shoot appeared.\n4. He watered it every day.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nGrowth Cycle: Plant (2) -> Water (4) -> Roots (1) -> Shoot (3)."
    },
    {
      q: "Arrange the following:\n1. He paid for the groceries at the counter.\n2. Mark went to the supermarket.\n3. He put the bags in his car.\n4. He picked up milk, eggs, and bread.",
      options: ["2-4-1-3", "2-1-4-3", "4-2-1-3", "1-2-3-4"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nChronology: Go to market -> Pick items -> Pay -> Leave."
    },
    {
      q: "Arrange the following:\n1. The audience clapped loudly.\n2. The singer walked onto the stage.\n3. She took a bow and smiled.\n4. She sang a beautiful song.",
      options: ["2-4-3-1", "2-1-4-3", "2-4-1-3", "1-2-3-4"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nEvent Flow: Enter (2) -> Sing (4) -> Audience Claps (1) -> Bow (3). Note: Sometimes Clapping happens before Bowing."
    },
    {
      q: "Arrange the following:\n1. I brushed my teeth.\n2. I woke up at 6:00 AM.\n3. I ate my breakfast.\n4. I took a shower.",
      options: ["2-1-4-3", "2-4-1-3", "2-3-1-4", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nTypical Routine: Wake up -> Shower -> Brush -> Breakfast."
    },
    {
      q: "Arrange the following:\n1. It started to rain heavily.\n2. We decided to go for a picnic.\n3. We packed our food and drinks.\n4. We had to run back inside the house.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nStory: Plan (2) -> Prep (3) -> Conflict/Rain (1) -> Result/Run (4)."
    },
    {
      q: "Arrange the following:\n1. Then, mix the eggs and flour.\n2. First, break the eggs into a bowl.\n3. Finally, pour the mixture into a pan.\n4. Beat the eggs until fluffy.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nRecipe: Break -> Beat -> Mix -> Pour."
    },
    {
      q: "Arrange the following:\n1. She failed the exam.\n2. She did not study for the test.\n3. She felt very sad.\n4. The teacher returned the papers.",
      options: ["2-4-1-3", "1-2-3-4", "4-1-2-3", "2-1-4-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nCause & Effect: Didn't study -> Papers returned -> Failed -> Sad."
    },
    {
      q: "Arrange the following:\n1. He washed the car with soap.\n2. Dad decided to clean his car.\n3. He rinsed it with water.\n4. He dried it with a towel.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-2-1-3"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nProcess: Decide -> Wash -> Rinse -> Dry."
    },
    {
      q: "Arrange the following:\n1. The dog chased the cat.\n2. The cat ran up the tree.\n3. The dog barked at the bottom.\n4. They were playing in the garden.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "1-4-2-3"],
      a: "4-1-2-3",
      exp: "Correct Order: 4-1-2-3.\nStory: Setting (Garden) -> Chase -> Escape -> Ending."
    },
    {
      q: "Arrange the following:\n1. Put the letter in the envelope.\n2. Write your message on the paper.\n3. Seal the envelope.\n4. Place a stamp on the corner.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nSteps: Write -> Insert -> Seal -> Stamp."
    },
    {
      q: "Arrange the following:\n1. Everyone shouted 'Happy Birthday!'.\n2. The room was dark and quiet.\n3. Maria walked into the room.\n4. Suddenly, the lights turned on.",
      options: ["2-3-4-1", "1-2-3-4", "3-2-4-1", "2-4-3-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nSurprise: Dark room -> Enter -> Lights -> Shout."
    },
    {
      q: "Arrange the following:\n1. He bought a ticket at the booth.\n2. He watched the movie and ate popcorn.\n3. John went to the cinema.\n4. He found his seat inside.",
      options: ["3-1-4-2", "3-4-1-2", "1-3-4-2", "2-3-1-4"],
      a: "3-1-4-2",
      exp: "Correct Order: 3-1-4-2.\nChronology: Arrive -> Buy Ticket -> Seat -> Watch."
    },
    {
      q: "Arrange the following:\n1. The teacher asked a question.\n2. Lisa raised her hand.\n3. The teacher called her name.\n4. Lisa gave the correct answer.",
      options: ["1-2-3-4", "2-3-1-4", "1-3-2-4", "4-1-2-3"],
      a: "1-2-3-4",
      exp: "Correct Order: 1-2-3-4.\nClassroom flow: Ask -> Raise hand -> Call -> Answer."
    },
    {
      q: "Arrange the following:\n1. Mix blue and yellow paint.\n2. Get a clean canvas.\n3. You will get the color green.\n4. Paint the grass on the canvas.",
      options: ["2-1-3-4", "1-2-3-4", "2-4-1-3", "4-1-3-2"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nArt: Canvas -> Mix -> Result (Green) -> Use."
    },
    {
      q: "Arrange the following:\n1. The alarm rang loudly.\n2. He turned off the alarm.\n3. He went back to sleep.\n4. He was late for work.",
      options: ["1-2-3-4", "2-3-1-4", "1-3-2-4", "4-1-2-3"],
      a: "1-2-3-4",
      exp: "Correct Order: 1-2-3-4.\nBad morning: Ring -> Off -> Sleep -> Late."
    },
    {
      q: "Arrange the following:\n1. Open the book to page one.\n2. Sit down in a comfortable chair.\n3. Start reading the first chapter.\n4. Pick a book from the shelf.",
      options: ["4-2-1-3", "4-1-2-3", "2-4-1-3", "1-2-3-4"],
      a: "4-2-1-3",
      exp: "Correct Order: 4-2-1-3.\nReading: Pick -> Sit -> Open -> Read."
    },
    {
      q: "Arrange the following:\n1. It creates a rainbow.\n2. The sun shines through the rain.\n3. The light bends and splits into colors.\n4. It rains on a sunny day.",
      options: ["4-2-3-1", "1-2-3-4", "4-3-2-1", "2-4-3-1"],
      a: "4-2-3-1",
      exp: "Correct Order: 4-2-3-1.\nScience: Rain/Sun -> Sunlight passes -> Refraction -> Rainbow."
    },
    {
      q: "Arrange the following:\n1. She checked her shopping list.\n2. She went to the checkout counter.\n3. She put items in her cart.\n4. She entered the grocery store.",
      options: ["4-1-3-2", "1-4-3-2", "4-3-1-2", "2-4-1-3"],
      a: "4-1-3-2",
      exp: "Correct Order: 4-1-3-2.\nShopping: Enter -> List -> Cart -> Pay."
    },
    {
      q: "Arrange the following:\n1. The bird built a nest.\n2. The eggs hatched into chicks.\n3. She laid three blue eggs.\n4. She sat on them to keep them warm.",
      options: ["1-3-4-2", "1-2-3-4", "3-4-2-1", "1-4-3-2"],
      a: "1-3-4-2",
      exp: "Correct Order: 1-3-4-2.\nNature: Nest -> Lay -> Incubate -> Hatch."
    },
    {
      q: "Arrange the following:\n1. He put on his helmet.\n2. He rode his bike to the park.\n3. He checked the tires.\n4. He took his bike out of the garage.",
      options: ["4-3-1-2", "1-2-3-4", "4-1-2-3", "3-4-1-2"],
      a: "4-3-1-2",
      exp: "Correct Order: 4-3-1-2.\nSafety first: Bike out -> Check tires -> Helmet -> Ride."
    },
    {
      q: "Arrange the following:\n1. Apply shampoo to your hair.\n2. Wet your hair with water.\n3. Rinse the shampoo off.\n4. Dry your hair with a towel.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nShower: Wet -> Soap -> Rinse -> Dry."
    },
    {
      q: "Arrange the following:\n1. The crowd cheered wildly.\n2. The game ended with a goal.\n3. The players shook hands.\n4. The winning team lifted the trophy.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-4-1", "4-3-2-1"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nSports: End/Goal -> Cheer -> Handshake -> Trophy."
    },
    {
      q: "Arrange the following:\n1. He realized he lost his keys.\n2. He arrived at his front door.\n3. He searched his pockets.\n4. He had to call a locksmith.",
      options: ["2-3-1-4", "2-1-3-4", "1-2-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nEvent: Arrive -> Search -> Realization -> Consequence."
    },
    {
      q: "Arrange the following:\n1. The water turns into vapor.\n2. The sun heats the ocean.\n3. The vapor forms clouds.\n4. The rain falls from the clouds.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nWater Cycle: Heat -> Evaporation -> Condensation -> Rain."
    },
    {
      q: "Arrange the following:\n1. Press the power button.\n2. Plug the computer into the outlet.\n3. Wait for the system to boot up.\n4. Log in with your password.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTech: Plug -> Power -> Boot -> Login."
    },
    {
      q: "Arrange the following:\n1. The caterpillar eats leaves.\n2. It forms a chrysalis.\n3. A butterfly emerges.\n4. An egg is laid on a leaf.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "3-2-1-4"],
      a: "4-1-2-3",
      exp: "Correct Order: 4-1-2-3.\nInsect Life: Egg -> Eat -> Chrysalis -> Butterfly."
    },
    {
      q: "Arrange the following:\n1. Put the dirty clothes in the washer.\n2. Add detergent powder.\n3. Turn on the machine.\n4. Hang the clothes to dry.",
      options: ["1-2-3-4", "2-1-3-4", "1-3-2-4", "4-1-2-3"],
      a: "1-2-3-4",
      exp: "Correct Order: 1-2-3-4.\nLaundry: Load -> Soap -> Wash -> Dry."
    },
    {
      q: "Arrange the following:\n1. She saved money for months.\n2. She wanted a new phone.\n3. She went to the store.\n4. She bought the phone happily.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-3-2-1"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nGoal: Want -> Save -> Go -> Buy."
    },
    {
      q: "Arrange the following:\n1. The waiter brought the menu.\n2. We sat at a table.\n3. We ordered our food.\n4. We entered the restaurant.",
      options: ["4-2-1-3", "1-2-3-4", "4-1-2-3", "2-4-1-3"],
      a: "4-2-1-3",
      exp: "Correct Order: 4-2-1-3.\nRestaurant: Enter -> Sit -> Menu -> Order."
    },
    {
      q: "Arrange the following:\n1. Blow out the candles.\n2. Sing the birthday song.\n3. Light the candles on the cake.\n4. Make a wish.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      a: "3-2-4-1",
      exp: "Correct Order: 3-2-4-1.\nCake Ritual: Light -> Sing -> Wish -> Blow."
    },
    {
      q: "Arrange the following:\n1. The movie ended.\n2. The lights came on.\n3. The credits rolled on the screen.\n4. The audience walked out.",
      options: ["1-3-2-4", "1-2-3-4", "3-1-2-4", "2-1-3-4"],
      a: "1-3-2-4",
      exp: "Correct Order: 1-3-2-4.\nEnding: End -> Credits -> Lights -> Exit."
    },
    {
      q: "Arrange the following:\n1. He put the letter in the mailbox.\n2. He wrote a letter to his friend.\n3. He walked to the post office.\n4. He bought a stamp.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "4-2-3-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nMail: Write -> Go -> Stamp -> Post."
    },
    {
      q: "Arrange the following:\n1. The ambulance arrived.\n2. There was a car accident.\n3. The victim was taken to the hospital.\n4. People called for help.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nEmergency: Accident -> Call -> Arrival -> Hospital."
    },
    {
      q: "Arrange the following:\n1. She opened her gift.\n2. It was a beautiful necklace.\n3. She hugged her mother.\n4. It was her birthday.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "1-4-2-3"],
      a: "4-1-2-3",
      exp: "Correct Order: 4-1-2-3.\nGift giving: Context (Birthday) -> Open -> See -> React."
    },
    {
      q: "Arrange the following:\n1. He practiced every day.\n2. He wanted to learn guitar.\n3. He bought a guitar.\n4. He played a song for his friends.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nMusic: Want -> Buy -> Practice -> Perform."
    },
    {
      q: "Arrange the following:\n1. The bread popped up.\n2. Put the bread in the toaster.\n3. Spread butter on the toast.\n4. Push the lever down.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nToast: Insert -> Push -> Pop -> Butter."
    },
    {
      q: "Arrange the following:\n1. The referee blew the whistle.\n2. The players took their positions.\n3. The game started.\n4. The ball was kicked.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nKickoff: Positions -> Whistle -> Kick -> Game On."
    },
    {
      q: "Arrange the following:\n1. She studied hard for the test.\n2. She received an 'A'.\n3. She took the test.\n4. She was very happy.",
      options: ["1-3-2-4", "1-2-3-4", "3-1-2-4", "2-1-3-4"],
      a: "1-3-2-4",
      exp: "Correct Order: 1-3-2-4.\nGrades: Study -> Take Test -> Result -> Feeling."
    },
    {
      q: "Arrange the following:\n1. The phone rang.\n2. He answered it.\n3. He said 'Hello'.\n4. He picked up the receiver.",
      options: ["1-4-2-3", "1-2-3-4", "1-4-3-2", "4-1-2-3"],
      a: "1-4-2-3",
      exp: "Correct Order: 1-4-2-3.\nCall: Ring -> Pickup -> Connect -> Speak."
    },
    {
      q: "Arrange the following:\n1. It creates a snowman.\n2. Roll a large ball of snow.\n3. Roll a medium and small ball.\n4. Stack them on top of each other.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nBuilding: Base -> Parts -> Assemble -> Result."
    },
    {
      q: "Arrange the following:\n1. The library closes at 5 PM.\n2. She borrowed three books.\n3. She arrived at 4:30 PM.\n4. She left just in time.",
      options: ["1-3-2-4", "1-2-3-4", "3-2-1-4", "2-3-1-4"],
      a: "1-3-2-4",
      exp: "Correct Order: 1-3-2-4.\nConstraint: Info -> Arrive -> Action -> Escape."
    },
    {
      q: "Arrange the following:\n1. Put the dirty dishes in the sink.\n2. Wash them with soap.\n3. Rinse them with water.\n4. Place them on the rack to dry.",
      options: ["1-2-3-4", "2-1-3-4", "1-3-2-4", "4-1-2-3"],
      a: "1-2-3-4",
      exp: "Correct Order: 1-2-3-4.\nDishes: Sink -> Soap -> Rinse -> Dry."
    },
    {
      q: "Arrange the following:\n1. He crossed the finish line.\n2. The race began.\n3. He ran as fast as he could.\n4. He won the gold medal.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nRace: Start -> Run -> Finish -> Win."
    },
    {
      q: "Arrange the following:\n1. Add hot water.\n2. Put coffee powder in a mug.\n3. Stir well.\n4. Add sugar and milk.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "4-2-1-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nCoffee: Powder -> Water -> Additions -> Stir."
    },
    {
      q: "Arrange the following:\n1. The guests arrived.\n2. She cleaned the house.\n3. She cooked dinner.\n4. They ate together.",
      options: ["2-3-1-4", "1-2-3-4", "3-2-1-4", "1-4-2-3"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nParty: Clean -> Cook -> Arrival -> Eat."
    },
    {
      q: "Arrange the following:\n1. He saw a dentist.\n2. He had a toothache.\n3. The dentist filled the cavity.\n4. He felt much better.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "1-4-2-3"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nPain: Problem -> Visit -> Fix -> Relief."
    },
    {
      q: "Arrange the following:\n1. The plane took off.\n2. Passengers boarded the plane.\n3. They fastened their seatbelts.\n4. The plane arrived at the destination.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nFlight: Board -> Buckle -> Takeoff -> Land."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (Cause & Effect, Processes)
  // ==========================================
  intermediate: [
    {
      q: "Arrange the following:\n1. Consequently, classes were suspended.\n2. The typhoon hit the city strongly last night.\n3. Students stayed at home and waited for updates.\n4. Strong winds and heavy rains caused flooding.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\n(2) Main Event: Typhoon hits.\n(4) Detail: Flooding.\n(1) Result: Suspension.\n(3) Reaction: Students stay home."
    },
    {
      q: "Arrange the following:\n1. This leads to global warming.\n2. Carbon dioxide traps heat in the atmosphere.\n3. Human activities burn fossil fuels.\n4. As a result, polar ice caps are melting.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      a: "3-2-1-4",
      exp: "Correct Order: 3-2-1-4.\nFlow: Activity -> Mechanism -> Warming -> Melting."
    },
    {
      q: "Arrange the following:\n1. He opened the small box carefully.\n2. Inside, he found an old, rusty key.\n3. It belonged to the mysterious door in the attic.\n4. John found a box in the basement.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "2-1-3-4"],
      a: "4-1-2-3",
      exp: "Correct Order: 4-1-2-3.\nNarrative: Find box -> Open -> See contents -> Identify use."
    },
    {
      q: "Arrange the following:\n1. However, it started to rain in the afternoon.\n2. The morning was bright and sunny.\n3. We planned to play tennis outside.\n4. So, we decided to play chess indoors instead.",
      options: ["2-3-1-4", "1-2-3-4", "3-2-1-4", "2-1-3-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nContrast: Good start -> Plan -> Rain (However) -> Change plan (So)."
    },
    {
      q: "Arrange the following:\n1. This allows the plant to grow.\n2. Roots absorb water from the soil.\n3. The water travels up the stem to the leaves.\n4. Photosynthesis uses this water to make food.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nBiology: Absorb -> Transport -> Use -> Grow."
    },
    {
      q: "Arrange the following:\n1. Therefore, regular exercise is recommended.\n2. It strengthens the heart and lungs.\n3. Exercise has many health benefits.\n4. It also reduces stress and anxiety.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      a: "3-2-4-1",
      exp: "Correct Order: 3-2-4-1.\nArgument: Topic -> Benefit 1 -> Benefit 2 -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. First, identify the problem clearly.\n2. Finally, evaluate if the solution worked.\n3. Problem solving involves several steps.\n4. Then, brainstorm possible solutions.",
      options: ["3-1-4-2", "1-4-2-3", "3-4-1-2", "1-2-3-4"],
      a: "3-1-4-2",
      exp: "Correct Order: 3-1-4-2.\nSteps: Topic (3) -> First (1) -> Then (4) -> Finally (2)."
    },
    {
      q: "Arrange the following:\n1. This prevents soil erosion.\n2. Trees are vital for the environment.\n3. Their roots hold the soil together.\n4. Furthermore, they provide oxygen.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-1-2-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Mechanism -> Result -> Added Benefit."
    },
    {
      q: "Arrange the following:\n1. She applied for several jobs.\n2. Mary graduated with honors.\n3. She was hired by a top company.\n4. Eventually, she was called for an interview.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nCareer: Graduate -> Apply -> Interview -> Hired."
    },
    {
      q: "Arrange the following:\n1. The mixture is then baked in an oven.\n2. Clay is molded into a shape.\n3. This hardens it into pottery.\n4. Finally, it is painted and glazed.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nPottery: Mold -> Bake -> Harden -> Paint."
    },
    {
      q: "Arrange the following:\n1. But today, smartphones are mini-computers.\n2. Technology has evolved rapidly.\n3. In the past, phones were only for calling.\n4. We can now browse the web and take photos.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-1-2-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nEvolution: General -> Past -> Present (But) -> Detail."
    },
    {
      q: "Arrange the following:\n1. This helps maintain a healthy weight.\n2. A balanced diet includes fruits and vegetables.\n3. It also provides energy for daily activities.\n4. Eating right is essential for health.",
      options: ["4-2-3-1", "1-2-3-4", "4-3-2-1", "2-3-4-1"],
      a: "4-2-3-1",
      exp: "Correct Order: 4-2-3-1.\nTopic -> Definition -> Benefit 1 -> Benefit 2."
    },
    {
      q: "Arrange the following:\n1. The liquid turns into gas.\n2. Boiling occurs when liquid is heated.\n3. This gas escapes as steam.\n4. Bubbles form and rise to the surface.",
      options: ["2-4-1-3", "2-4-1-3", "1-2-3-4", "2-1-4-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nBoiling: Definition -> Bubbles -> Gas -> Steam."
    },
    {
      q: "Arrange the following:\n1. He trained hard for the marathon.\n2. He felt proud of his achievement.\n3. On race day, he ran steady and fast.\n4. He crossed the finish line in record time.",
      options: ["1-3-4-2", "1-2-3-4", "3-4-1-2", "1-4-3-2"],
      a: "1-3-4-2",
      exp: "Correct Order: 1-3-4-2.\nRace: Train -> Run -> Finish -> Feeling."
    },
    {
      q: "Arrange the following:\n1. This creates a vacuum inside the straw.\n2. You suck air out of the straw.\n3. Drinking with a straw involves physics.\n4. Atmospheric pressure pushes the liquid up.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-1-4-3"],
      a: "3-2-1-4",
      exp: "Correct Order: 3-2-1-4.\nPhysics: Topic -> Action -> Vacuum -> Pressure."
    },
    {
      q: "Arrange the following:\n1. However, he soon realized it was hard work.\n2. Tom wanted to build a treehouse.\n3. He gathered wood and tools.\n4. He asked his friends for help.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nProject: Idea -> Prep -> Struggle -> Solution."
    },
    {
      q: "Arrange the following:\n1. It connects people from all over the world.\n2. The internet is a vast network.\n3. Information travels in seconds.\n4. This has changed how we communicate.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nInternet: Definition -> Function -> Speed -> Impact."
    },
    {
      q: "Arrange the following:\n1. They have thick fur to keep warm.\n2. Polar bears live in the Arctic.\n3. They primarily eat seals.\n4. This helps them survive the cold.",
      options: ["2-1-4-3", "1-2-3-4", "2-3-1-4", "1-4-2-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nBear: Habitat -> Fur -> Benefit -> Diet."
    },
    {
      q: "Arrange the following:\n1. Then, clouds began to form.\n2. It was a sunny morning.\n3. Soon, a thunderstorm struck.\n4. The wind picked up speed.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "4-3-2-1"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nWeather: Sunny -> Clouds -> Wind -> Storm."
    },
    {
      q: "Arrange the following:\n1. Recycling reduces waste.\n2. We should separate paper and plastic.\n3. It also conserves natural resources.\n4. Everyone must do their part.",
      options: ["1-3-2-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "1-3-2-4",
      exp: "Correct Order: 1-3-2-4.\nEnvironment: Benefit 1 -> Benefit 2 -> Action -> Call to Action."
    },
    {
      q: "Arrange the following:\n1. He missed the bus.\n2. His alarm clock broke.\n3. He overslept by an hour.\n4. He arrived late to school.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nEvents: Alarm -> Sleep -> Bus -> Late."
    },
    {
      q: "Arrange the following:\n1. This creates energy for the cell.\n2. Mitochondria are the powerhouse of the cell.\n3. They take in nutrients.\n4. They break down these nutrients.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-3-4", "3-4-2-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nCell: Topic -> Intake -> Breakdown -> Energy."
    },
    {
      q: "Arrange the following:\n1. She drafted an outline.\n2. She submitted the final essay.\n3. She researched her topic.\n4. She wrote the first draft.",
      options: ["3-1-4-2", "1-2-3-4", "3-4-1-2", "1-3-4-2"],
      a: "3-1-4-2",
      exp: "Correct Order: 3-1-4-2.\nWriting: Research -> Outline -> Draft -> Submit."
    },
    {
      q: "Arrange the following:\n1. In contrast, summer is hot and dry.\n2. The seasons change throughout the year.\n3. Spring brings new life and rain.\n4. Winter is cold and snowy.",
      options: ["2-3-4-1", "1-2-3-4", "2-3-1-4", "2-4-1-3"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nSeasons: Topic -> Spring -> Winter -> Summer (Contrast)."
    },
    {
      q: "Arrange the following:\n1. He found a wallet on the street.\n2. He checked the ID inside.\n3. He returned it to the owner.\n4. The owner thanked him.",
      options: ["1-2-3-4", "2-1-3-4", "1-3-2-4", "4-1-2-3"],
      a: "1-2-3-4",
      exp: "Correct Order: 1-2-3-4.\nHonesty: Find -> Check -> Return -> Thanks."
    },
    {
      q: "Arrange the following:\n1. The caterpillar spins a cocoon.\n2. A butterfly emerges.\n3. An egg is laid on a leaf.\n4. It hatches into a larva.",
      options: ["3-4-1-2", "1-2-3-4", "3-1-4-2", "4-1-2-3"],
      a: "3-4-1-2",
      exp: "Correct Order: 3-4-1-2.\nLife Cycle: Egg -> Hatch -> Cocoon -> Butterfly."
    },
    {
      q: "Arrange the following:\n1. Consequently, traffic was stopped.\n2. A tree fell across the road.\n3. There was a severe storm.\n4. Drivers had to find another route.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      a: "3-2-1-4",
      exp: "Correct Order: 3-2-1-4.\nTraffic: Storm -> Tree falls -> Stop -> Detour."
    },
    {
      q: "Arrange the following:\n1. It helps you wake up fresh.\n2. Sleep is vital for health.\n3. During sleep, the body repairs itself.\n4. Lack of sleep causes fatigue.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nSleep: Topic -> Repair -> Freshness -> Contrast."
    },
    {
      q: "Arrange the following:\n1. He unpacked his bags.\n2. He checked into the hotel.\n3. He arrived at the destination.\n4. He went to the beach.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      a: "3-2-1-4",
      exp: "Correct Order: 3-2-1-4.\nVacation: Arrive -> Hotel -> Unpack -> Beach."
    },
    {
      q: "Arrange the following:\n1. First, read the instructions carefully.\n2. Success in exams requires strategy.\n3. Finally, review your answers.\n4. Then, answer the easy questions first.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nStrategy: Topic -> First -> Then -> Finally."
    },
    {
      q: "Arrange the following:\n1. She won the competition.\n2. She practiced every morning.\n3. She wanted to be a swimmer.\n4. She joined the swim team.",
      options: ["3-4-2-1", "1-2-3-4", "3-2-4-1", "4-3-2-1"],
      a: "3-4-2-1",
      exp: "Correct Order: 3-4-2-1.\nSuccess: Want -> Join -> Practice -> Win."
    },
    {
      q: "Arrange the following:\n1. The cake is ready to eat.\n2. Bake for 30 minutes.\n3. Mix ingredients in a bowl.\n4. Let it cool down.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      a: "3-2-4-1",
      exp: "Correct Order: 3-2-4-1.\nBaking: Mix -> Bake -> Cool -> Eat."
    },
    {
      q: "Arrange the following:\n1. However, he forgot his wallet.\n2. He ordered a large meal.\n3. John went to a restaurant.\n4. He had to call his wife to pay.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      a: "3-2-1-4",
      exp: "Correct Order: 3-2-1-4.\nStory: Restaurant -> Order -> Wallet Issue -> Solution."
    },
    {
      q: "Arrange the following:\n1. This makes it a global language.\n2. English is spoken in many countries.\n3. It is used in business and science.\n4. Many people learn it as a second language.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-3-4", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nLanguage: Topic -> Usage -> Learners -> Result."
    },
    {
      q: "Arrange the following:\n1. They decided to build a raft.\n2. Two friends were stranded on an island.\n3. They sailed to safety.\n4. They gathered logs and vines.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "4-2-1-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nSurvival: Stranded -> Decision -> Gather -> Escape."
    },
    {
      q: "Arrange the following:\n1. The lava cools and hardens.\n2. A volcano erupts.\n3. It forms new land/rock.\n4. Molten lava flows down the side.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nVolcano: Erupt -> Flow -> Cool -> Rock."
    },
    {
      q: "Arrange the following:\n1. She planted rose bushes.\n2. She bought gardening tools.\n3. Her garden looks beautiful now.\n4. She watered them regularly.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nGarden: Tools -> Plant -> Water -> Result."
    },
    {
      q: "Arrange the following:\n1. It pumps blood to the body.\n2. The heart is a vital organ.\n3. This blood carries oxygen.\n4. Without it, cells cannot survive.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nHeart: Topic -> Function 1 -> Function 2 -> Importance."
    },
    {
      q: "Arrange the following:\n1. He checked the weather report.\n2. He put on a raincoat.\n3. He saw that it would rain.\n4. He left the house.",
      options: ["1-3-2-4", "1-2-3-4", "1-2-4-3", "3-1-2-4"],
      a: "1-3-2-4",
      exp: "Correct Order: 1-3-2-4.\nRain: Check -> See Info -> Gear Up -> Leave."
    },
    {
      q: "Arrange the following:\n1. This creates a surplus.\n2. Sometimes supply exceeds demand.\n3. Prices usually drop.\n4. Economics relies on supply and demand.",
      options: ["4-2-1-3", "1-2-3-4", "4-1-2-3", "2-1-3-4"],
      a: "4-2-1-3",
      exp: "Correct Order: 4-2-1-3.\nEcon: Topic -> Scenario -> Result 1 (Surplus) -> Result 2 (Prices)."
    },
    {
      q: "Arrange the following:\n1. Then, the judge entered.\n2. Everyone stood up.\n3. The trial began.\n4. People were waiting in the courtroom.",
      options: ["4-1-2-3", "1-2-3-4", "4-2-1-3", "3-4-1-2"],
      a: "4-1-2-3",
      exp: "Correct Order: 4-1-2-3.\nCourt: Waiting -> Entry -> Stand -> Start."
    },
    {
      q: "Arrange the following:\n1. It provides light and heat.\n2. The sun is a star.\n3. Plants need this light to grow.\n4. Without the sun, life would end.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nSun: Definition -> Function -> Benefit -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. She saved a file.\n2. She turned on the laptop.\n3. She typed her document.\n4. She opened the word processor.",
      options: ["2-4-3-1", "1-2-3-4", "2-3-4-1", "4-2-3-1"],
      a: "2-4-3-1",
      exp: "Correct Order: 2-4-3-1.\nWork: On -> Open -> Type -> Save."
    },
    {
      q: "Arrange the following:\n1. The dog wagged its tail.\n2. He gave the dog a treat.\n3. The boy called his dog.\n4. The dog ran to him.",
      options: ["3-4-1-2", "1-2-3-4", "3-1-4-2", "2-3-4-1"],
      a: "3-4-1-2",
      exp: "Correct Order: 3-4-1-2.\nDog: Call -> Come -> Wag -> Treat."
    },
    {
      q: "Arrange the following:\n1. They set up the tent.\n2. They drove to the campsite.\n3. They made a campfire.\n4. They slept under the stars.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "1-2-4-3"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nCamping: Drive -> Tent -> Fire -> Sleep."
    },
    {
      q: "Arrange the following:\n1. He finished the race.\n2. He started running.\n3. He tied his shoes.\n4. He stretched his muscles.",
      options: ["3-4-2-1", "1-2-3-4", "3-2-4-1", "4-3-2-1"],
      a: "3-4-2-1",
      exp: "Correct Order: 3-4-2-1.\nExercise: Shoes -> Stretch -> Run -> Finish."
    },
    {
      q: "Arrange the following:\n1. The ice cream melted.\n2. It was a very hot day.\n3. She bought an ice cream cone.\n4. She didn't eat it fast enough.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-4-3", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nMelt: Heat -> Buy -> Delay -> Melt."
    },
    {
      q: "Arrange the following:\n1. He paid the bill.\n2. He checked out of the hotel.\n3. He packed his suitcase.\n4. He called a taxi.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-1-3-4"],
      a: "3-2-1-4",
      exp: "Correct Order: 3-2-1-4.\nCheckout: Pack -> Checkout -> Pay -> Taxi."
    },
    {
      q: "Arrange the following:\n1. The glass fell on the floor.\n2. It shattered into pieces.\n3. She accidentally bumped the table.\n4. She had to sweep it up.",
      options: ["3-1-2-4", "1-2-3-4", "3-2-1-4", "2-3-1-4"],
      a: "3-1-2-4",
      exp: "Correct Order: 3-1-2-4.\nBreak: Bump -> Fall -> Shatter -> Clean."
    },
    {
      q: "Arrange the following:\n1. Birds start to sing.\n2. The sun rises.\n3. People wake up.\n4. The day begins.",
      options: ["2-1-3-4", "1-2-3-4", "2-4-1-3", "4-2-1-3"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nDawn: Sun -> Birds -> People -> Day."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (Complex Logic & Pronoun Reference)
  // ==========================================
  advanced: [
    {
      q: "Arrange the following:\n1. 'It' refers to the fear of public speaking.\n2. Glossophobia is a common condition.\n3. This anxiety can hinder professional growth.\n4. Many people suffer from it without knowing.",
      options: ["2-1-4-3", "2-4-1-3", "1-2-3-4", "2-3-1-4"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\n(2) Topic. (4) Detail. (1) Clarification. (3) Consequence."
    },
    {
      q: "Arrange the following:\n1. Furthermore, it reduces the cost of production.\n2. Automation has revolutionized the industry.\n3. However, it also leads to job displacement.\n4. Machines can work faster than humans.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nTopic -> Benefit 1 -> Benefit 2 -> Contrast."
    },
    {
      q: "Arrange the following:\n1. They are often called the 'lungs of the earth'.\n2. Rainforests play a critical role in the ecosystem.\n3. This is because they absorb massive amounts of carbon dioxide.\n4. Protecting them is essential for our survival.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "1-3-2-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Metaphor -> Explanation -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. Consequently, the city was buried under ash.\n2. Residents had no time to escape.\n3. Mount Vesuvius erupted in 79 AD.\n4. It released a deadly cloud of gas and debris.",
      options: ["3-4-2-1", "1-2-3-4", "3-2-4-1", "2-3-4-1"],
      a: "3-4-2-1",
      exp: "Correct Order: 3-4-2-1.\nEvent -> Detail -> Immediate Effect -> Result."
    },
    {
      q: "Arrange the following:\n1. On the other hand, digital books are convenient.\n2. Physical books offer a tactile experience.\n3. Reading habits have changed over time.\n4. Some readers prefer the smell of paper.",
      options: ["3-2-4-1", "1-2-3-4", "3-1-2-4", "2-4-1-3"],
      a: "3-2-4-1",
      exp: "Correct Order: 3-2-4-1.\nTopic -> Side A -> Detail A -> Side B."
    },
    {
      q: "Arrange the following:\n1. This leads to a healthier lifestyle.\n2. People who cook at home consume fewer calories.\n3. Cooking is a valuable life skill.\n4. They control the ingredients they use.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      a: "3-2-4-1",
      exp: "Correct Order: 3-2-4-1.\nTopic -> Specific -> Reason -> Result."
    },
    {
      q: "Arrange the following:\n1. As a result, businesses must adapt strategies.\n2. Social media affects consumer behavior.\n3. Reviews and influencers drive sales.\n4. Marketing has shifted to digital platforms.",
      options: ["2-3-1-4", "4-2-3-1", "2-1-3-4", "4-3-1-2"],
      a: "4-2-3-1",
      exp: "Correct Order: 4-2-3-1.\nContext -> Driver -> Mechanism -> Result."
    },
    {
      q: "Arrange the following:\n1. First, gather your financial documents.\n2. Filing taxes can be stressful.\n3. Finally, submit your return before the deadline.\n4. Next, calculate your total income.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nTopic -> First -> Next -> Finally."
    },
    {
      q: "Arrange the following:\n1. These microplastics enter the food chain.\n2. Plastic pollution is a global crisis.\n3. It breaks down into tiny particles.\n4. Eventually, humans consume them.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nProblem -> Process -> Ecology -> Impact."
    },
    {
      q: "Arrange the following:\n1. He became one of the greatest physicists.\n2. Albert Einstein was born in Germany.\n3. His theory of relativity changed science.\n4. He showed an early interest in mathematics.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nBio: Birth -> Youth -> Status -> Work."
    },
    {
      q: "Arrange the following:\n1. This confirms the hypothesis.\n2. Scientists conduct an experiment.\n3. They analyze the data collected.\n4. They formulate a hypothesis.",
      options: ["4-2-3-1", "1-2-3-4", "4-3-2-1", "2-3-1-4"],
      a: "4-2-3-1",
      exp: "Correct Order: 4-2-3-1.\nMethod: Hypothesis -> Test -> Analysis -> Confirm."
    },
    {
      q: "Arrange the following:\n1. However, excessive use can be harmful.\n2. The internet provides endless information.\n3. It creates addiction and eye strain.\n4. It is a powerful tool for education.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-3-4", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nPro 1 -> Pro 2 -> Pivot -> Con."
    },
    {
      q: "Arrange the following:\n1. They perform photosynthesis to make food.\n2. Plants are producers in the food web.\n3. This energy is passed to herbivores.\n4. They capture energy from the sun.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nTopic -> Mechanism -> Action -> Result."
    },
    {
      q: "Arrange the following:\n1. Thus, voting is a civic duty.\n2. Democracy relies on participation.\n3. Citizens choose their leaders.\n4. This ensures representation.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nConcept -> Mechanism -> Benefit -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. She revised the manuscript.\n2. J.K. Rowling wrote Harry Potter.\n3. It became a worldwide phenomenon.\n4. Many publishers rejected it at first.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nCreation -> Rejection -> Revision -> Success."
    },
    {
      q: "Arrange the following:\n1. This causes sea levels to rise.\n2. Global temperatures are increasing.\n3. Coastal cities are at risk of flooding.\n4. Glaciers are melting at alarming rates.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nCause -> Effect 1 -> Effect 2 -> Result."
    },
    {
      q: "Arrange the following:\n1. He invested in stocks.\n2. He retired as a millionaire.\n3. He worked hard and saved money.\n4. The market value increased over time.",
      options: ["3-1-4-2", "1-2-3-4", "3-4-1-2", "1-3-4-2"],
      a: "3-1-4-2",
      exp: "Correct Order: 3-1-4-2.\nWork -> Invest -> Growth -> Retire."
    },
    {
      q: "Arrange the following:\n1. Therefore, we must conserve water.\n2. Fresh water is a limited resource.\n3. Only a small percentage is drinkable.\n4. Population growth strains this supply.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTopic -> Detail -> Problem -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. It is called the Red Planet.\n2. Mars captures human imagination.\n3. Scientists are exploring colonization.\n4. Its surface is covered in iron oxide.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-2-4-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nTopic -> Name -> Reason -> Future."
    },
    {
      q: "Arrange the following:\n1. She presented her findings.\n2. The committee approved her project.\n3. She conducted a survey.\n4. She analyzed the results.",
      options: ["3-4-1-2", "1-2-3-4", "3-1-4-2", "1-3-4-2"],
      a: "3-4-1-2",
      exp: "Correct Order: 3-4-1-2.\nResearch -> Analysis -> Presentation -> Approval."
    },
    {
      q: "Arrange the following:\n1. However, it requires discipline.\n2. Working from home offers flexibility.\n3. Distractions can reduce productivity.\n4. You avoid the daily commute.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nPro 1 -> Pro 2 -> Pivot -> Con."
    },
    {
      q: "Arrange the following:\n1. This leads to higher prices.\n2. Inflation is a rise in general prices.\n3. The purchasing power of money falls.\n4. It occurs when demand exceeds supply.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-3-4", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nDefinition -> Cause -> Effect -> Impact."
    },
    {
      q: "Arrange the following:\n1. They are built to withstand winds.\n2. Skyscrapers define modern cities.\n3. Engineers use steel and glass.\n4. Deep foundations support the structure.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-4-3", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTopic -> Material -> Foundation -> Feature."
    },
    {
      q: "Arrange the following:\n1. This helps identifying the suspect.\n2. Forensic science solves crimes.\n3. Experts analyze fingerprints and DNA.\n4. Evidence is collected from the scene.",
      options: ["2-4-3-1", "1-2-3-4", "2-3-4-1", "4-2-3-1"],
      a: "2-4-3-1",
      exp: "Correct Order: 2-4-3-1.\nTopic -> Step 1 -> Step 2 -> Result."
    },
    {
      q: "Arrange the following:\n1. It was signed in 1215.\n2. The Magna Carta is a historic document.\n3. It limited the power of the King.\n4. This laid the groundwork for democracy.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Date -> Function -> Legacy."
    },
    {
      q: "Arrange the following:\n1. They migrate to warmer climates.\n2. Birds sense the change in season.\n3. Winter approaches with cold winds.\n4. This journey ensures their survival.",
      options: ["3-2-1-4", "1-2-3-4", "3-1-2-4", "2-3-1-4"],
      a: "3-2-1-4",
      exp: "Correct Order: 3-2-1-4.\nContext -> Sensing -> Action -> Purpose."
    },
    {
      q: "Arrange the following:\n1. The engine converts fuel to motion.\n2. A car is a complex machine.\n3. Wheels transfer this motion to the road.\n4. Several systems work together.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nGeneral -> Systems -> Specific 1 -> Specific 2."
    },
    {
      q: "Arrange the following:\n1. Consequently, health deteriorates.\n2. Smoking damages the lungs.\n3. It introduces tar into the body.\n4. This reduces oxygen intake.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTopic -> Mechanism -> Effect -> Consequence."
    },
    {
      q: "Arrange the following:\n1. He drafted the Declaration of Independence.\n2. Thomas Jefferson was a Founding Father.\n3. He later became the 3rd President.\n4. He advocated for liberty.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nTopic -> Belief -> Action -> Later Life."
    },
    {
      q: "Arrange the following:\n1. It provides nutrients to the embryo.\n2. A seed contains a future plant.\n3. The outer coat protects it.\n4. When conditions are right, it germinates.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Part 1 -> Part 2 -> Function."
    },
    {
      q: "Arrange the following:\n1. However, not all bacteria are harmful.\n2. Bacteria are microscopic organisms.\n3. Some help in digestion.\n4. Others cause diseases.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nTopic -> Negative -> Pivot -> Positive."
    },
    {
      q: "Arrange the following:\n1. She managed the budget effectively.\n2. The project was a huge success.\n3. Alice was appointed as team leader.\n4. The team met all deadlines.",
      options: ["3-1-4-2", "1-2-3-4", "3-4-1-2", "1-3-4-2"],
      a: "3-1-4-2",
      exp: "Correct Order: 3-1-4-2.\nAppointment -> Action 1 -> Action 2 -> Result."
    },
    {
      q: "Arrange the following:\n1. This creates a sense of community.\n2. Festivals bring people together.\n3. They share food and traditions.\n4. They celebrate shared values.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTopic -> Detail 1 -> Detail 2 -> Result."
    },
    {
      q: "Arrange the following:\n1. Then, data is broken into packets.\n2. Sending an email involves steps.\n3. Finally, it arrives at the inbox.\n4. The packets travel across the network.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nTopic -> Step 1 -> Step 2 -> End."
    },
    {
      q: "Arrange the following:\n1. He painted the Mona Lisa.\n2. Leonardo da Vinci was a Renaissance man.\n3. He was also an inventor.\n4. His notebooks contain flying machine sketches.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Art -> Pivot (Also) -> Science."
    },
    {
      q: "Arrange the following:\n1. Therefore, diversity is strength.\n2. Different perspectives solve problems.\n3. Teams should include varied backgrounds.\n4. Innovation comes from new ideas.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      a: "3-2-4-1",
      exp: "Correct Order: 3-2-4-1.\nRecommendation -> Reason 1 -> Reason 2 -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. It reflects the sun's light.\n2. The moon does not produce light.\n3. We see different phases.\n4. This depends on its position.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nFact -> Mechanism -> Observation -> Explanation."
    },
    {
      q: "Arrange the following:\n1. She trained for the Olympics.\n2. She broke the world record.\n3. She started swimming at age five.\n4. She won the gold medal.",
      options: ["3-1-4-2", "1-2-3-4", "3-4-1-2", "1-3-4-2"],
      a: "3-1-4-2",
      exp: "Correct Order: 3-1-4-2.\nYouth -> Training -> Win -> Record."
    },
    {
      q: "Arrange the following:\n1. It regulates body temperature.\n2. Water is essential for life.\n3. It transports nutrients to cells.\n4. Dehydration can be fatal.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-4-1"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Function 1 -> Function 2 -> Warning."
    },
    {
      q: "Arrange the following:\n1. This led to the Great Depression.\n2. The stock market crashed in 1929.\n3. Many people lost their savings.\n4. Banks failed across the country.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nEvent -> Effect 1 -> Effect 2 -> Result."
    },
    {
      q: "Arrange the following:\n1. He wrote plays and sonnets.\n2. William Shakespeare is a famous bard.\n3. 'Hamlet' is his most famous tragedy.\n4. His works are still performed today.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Work -> Specific -> Legacy."
    },
    {
      q: "Arrange the following:\n1. It allows for instant communication.\n2. The smartphone changed society.\n3. We can access information anywhere.\n4. However, it reduces face-to-face interaction.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "4-2-1-3"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Benefit 1 -> Benefit 2 -> Drawback."
    },
    {
      q: "Arrange the following:\n1. This causes an earthquake.\n2. Tectonic plates are always moving.\n3. Sometimes they get stuck.\n4. Pressure builds until it snaps.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nContext -> Problem -> Buildup -> Release."
    },
    {
      q: "Arrange the following:\n1. She proofread for errors.\n2. She wrote the conclusion.\n3. She outlined her main points.\n4. She wrote the body paragraphs.",
      options: ["3-4-2-1", "1-2-3-4", "3-2-4-1", "1-3-4-2"],
      a: "3-4-2-1",
      exp: "Correct Order: 3-4-2-1.\nStructure: Outline -> Body -> End -> Review."
    },
    {
      q: "Arrange the following:\n1. It absorbs sunlight.\n2. Chlorophyll is a green pigment.\n3. This energy converts CO2 into sugar.\n4. It is found in the chloroplasts.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nDefinition -> Location -> Action -> Result."
    },
    {
      q: "Arrange the following:\n1. Consequently, he was promoted.\n2. He completed the difficult task.\n3. He worked overtime for weeks.\n4. His boss noticed his dedication.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      a: "3-2-4-1",
      exp: "Correct Order: 3-2-4-1.\nEffort -> Completion -> Notice -> Reward."
    },
    {
      q: "Arrange the following:\n1. This protects the rights of citizens.\n2. The Constitution is the supreme law.\n3. It establishes the government structure.\n4. No law can contradict it.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nDefinition -> Role 1 -> Role 2 -> Power."
    },
    {
      q: "Arrange the following:\n1. Then, the mixture is heated.\n2. Glass making starts with sand.\n3. It melts into a liquid.\n4. It is shaped while hot.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nStart -> Heat -> Melt -> Shape."
    },
    {
      q: "Arrange the following:\n1. He discovered penicillin.\n2. Alexander Fleming was a biologist.\n3. He noticed mold killing bacteria.\n4. This discovery saved millions.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Observation -> Discovery -> Impact."
    },
    {
      q: "Arrange the following:\n1. Gravity pulls it into a sphere.\n2. A star is born from gas and dust.\n3. Fusion begins in the core.\n4. It shines for billions of years.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nBirth -> Form -> Ignite -> Life."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (Dense text, subtle clues)
  // ==========================================
  expert: [
    {
      q: "Arrange the following:\n1. This dissonance compels the mind to resolve the conflict.\n2. Cognitive dissonance occurs when beliefs clash with actions.\n3. The individual may change their behavior to align with beliefs.\n4. Alternatively, they may justify the action to reduce discomfort.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-4-1", "1-3-4-2"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nDefinition -> Effect (Compels) -> Solution 1 -> Solution 2."
    },
    {
      q: "Arrange the following:\n1. It posits that the universe began as a singularity.\n2. The Big Bang theory explains cosmic origin.\n3. Over billions of years, it expanded and cooled.\n4. This expansion allowed matter to form stars.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "1-3-2-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Hypothesis (Posits) -> Process -> Result."
    },
    {
      q: "Arrange the following:\n1. Such policies can lead to inflation.\n2. Governments print money to pay debts.\n3. This devalues the currency.\n4. Consumers then lose purchasing power.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-3-4", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nAction -> Direct Effect -> Result -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. However, critics argue it stifles creativity.\n2. Standardized testing is a common metric.\n3. It allows for objective comparison of students.\n4. Teachers may teach only to the test.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-4-3", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Benefit -> Counterpoint -> Explanation."
    },
    {
      q: "Arrange the following:\n1. This creates a feedback loop.\n2. Melting ice reduces the earth's albedo.\n3. Less sunlight is reflected back to space.\n4. The earth absorbs more heat, melting more ice.",
      options: ["2-3-4-1", "1-2-3-4", "2-1-3-4", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTrigger -> Mechanism -> Effect -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. He advocated for non-violent resistance.\n2. Mahatma Gandhi led India to independence.\n3. His methods inspired civil rights movements globally.\n4. The Salt March was a pivotal moment in his campaign.",
      options: ["2-1-4-3", "1-2-3-4", "2-4-1-3", "1-4-2-3"],
      a: "2-1-4-3",
      exp: "Correct Order: 2-1-4-3.\nPerson -> Belief -> Specific Event -> Global Impact."
    },
    {
      q: "Arrange the following:\n1. Consequently, the population crashed.\n2. The ecosystem could not support the numbers.\n3. Deer were introduced to an island without predators.\n4. They reproduced rapidly and ate all the vegetation.",
      options: ["3-4-2-1", "1-2-3-4", "3-2-4-1", "2-3-4-1"],
      a: "3-4-2-1",
      exp: "Correct Order: 3-4-2-1.\nIntroduction -> Explosion -> Limit Reached -> Collapse."
    },
    {
      q: "Arrange the following:\n1. It requires a suspension of disbelief.\n2. Magical realism blends the mundane with the fantastic.\n3. Characters treat magic as a normal occurrence.\n4. This genre challenges our perception of reality.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nGenre -> Feature -> Requirement -> Impact."
    },
    {
      q: "Arrange the following:\n1. Thus, ethical AI is a growing field.\n2. Artificial Intelligence is advancing rapidly.\n3. Algorithms can inherit biases from data.\n4. This can lead to discriminatory outcomes.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nContext -> Problem -> Consequence -> Solution."
    },
    {
      q: "Arrange the following:\n1. The proletariat would eventually revolt.\n2. Marx believed capitalism creates inequality.\n3. They would establish a classless society.\n4. He argued that the bourgeoisie exploits workers.",
      options: ["2-4-1-3", "1-2-3-4", "2-1-4-3", "4-2-1-3"],
      a: "2-4-1-3",
      exp: "Correct Order: 2-4-1-3.\nPhilosophy -> Explanation -> Prediction -> Result."
    },
    {
      q: "Arrange the following:\n1. It acts as a barrier to UV radiation.\n2. The ozone layer is in the stratosphere.\n3. Without it, life on earth would be at risk.\n4. Chemicals like CFCs have damaged this layer.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nLocation -> Function -> Importance -> Threat."
    },
    {
      q: "Arrange the following:\n1. This concept is known as Opportunity Cost.\n2. Every decision involves a trade-off.\n3. Choosing one option means foregoing another.\n4. The value of the next best alternative is lost.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nPremise -> Action -> Consequence -> Terminology."
    },
    {
      q: "Arrange the following:\n1. They function as biological catalysts.\n2. Enzymes are proteins.\n3. They lower the activation energy of reactions.\n4. This speeds up metabolic processes.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nCategory -> Role -> Mechanism -> Result."
    },
    {
      q: "Arrange the following:\n1. However, it lacks the nuance of human thought.\n2. It can process vast amounts of data.\n3. Machine learning is a subset of AI.\n4. It identifies patterns humans might miss.",
      options: ["3-2-4-1", "1-2-3-4", "3-4-2-1", "2-3-4-1"],
      a: "3-2-4-1",
      exp: "Correct Order: 3-2-4-1.\nDefinition -> Ability 1 -> Ability 2 -> Limitation."
    },
    {
      q: "Arrange the following:\n1. This allows for specialization of labor.\n2. Globalization integrates economies.\n3. Countries trade goods they produce efficiently.\n4. Consequently, global wealth increases.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Action -> Benefit -> Outcome."
    },
    {
      q: "Arrange the following:\n1. He proposed the Heliocentric model.\n2. Nicolaus Copernicus challenged ancient astronomy.\n3. It placed the sun at the center.\n4. This contradicted the church's teachings.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nPerson -> Proposal -> Detail -> Conflict."
    },
    {
      q: "Arrange the following:\n1. Therefore, logic is the foundation of philosophy.\n2. A valid argument forces a true conclusion.\n3. If the premises are true, the result must be true.\n4. Deductive reasoning moves from general to specific.",
      options: ["4-3-2-1", "1-2-3-4", "4-2-3-1", "2-3-4-1"],
      a: "4-3-2-1",
      exp: "Correct Order: 4-3-2-1.\nDefinition -> Condition -> Result -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. This creates a 'tragedy of the commons'.\n2. Resources held in common are often abused.\n3. Individuals act in self-interest.\n4. The resource is depleted for everyone.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTopic -> Action -> Result -> Name of concept."
    },
    {
      q: "Arrange the following:\n1. It converts mechanical energy to electrical energy.\n2. A generator works on induction.\n3. A magnet rotates inside a coil of wire.\n4. This movement induces a current.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Definition -> Process -> Outcome."
    },
    {
      q: "Arrange the following:\n1. However, interpretation varies by culture.\n2. Non-verbal communication conveys emotion.\n3. Gestures and facial expressions are key.\n4. A smile in one country may mean something else in another.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Detail -> Pivot -> Example."
    },
    {
      q: "Arrange the following:\n1. This is called the 'invisible hand'.\n2. Adam Smith wrote 'The Wealth of Nations'.\n3. He argued that self-interest drives markets.\n4. It guides resources to their most valued use.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nAuthor -> Argument -> Mechanism -> Terminology."
    },
    {
      q: "Arrange the following:\n1. Consequently, biodiversity is lost.\n2. Deforestation clears land for agriculture.\n3. Habitats for countless species are destroyed.\n4. This also accelerates climate change.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nAction -> Direct Effect -> Consequence 1 -> Consequence 2."
    },
    {
      q: "Arrange the following:\n1. It suggests that space and time are linked.\n2. Einstein's General Relativity is complex.\n3. Massive objects warp this space-time fabric.\n4. This warping is what we perceive as gravity.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nSubject -> Theory -> Mechanism -> Definition."
    },
    {
      q: "Arrange the following:\n1. Therefore, skepticism is a healthy scientific attitude.\n2. Science is not a collection of facts.\n3. It is a process of constant revision.\n4. New evidence can overturn old theories.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nDefinition (Negative) -> Definition (Positive) -> Example -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. This creates a sense of depth.\n2. Perspective was a breakthrough in art.\n3. Artists began using vanishing points.\n4. Parallel lines appear to converge.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTopic -> Technique -> Detail -> Effect."
    },
    {
      q: "Arrange the following:\n1. He utilized the assembly line.\n2. Henry Ford revolutionized manufacturing.\n3. This reduced the cost of the Model T.\n4. Cars became affordable for the masses.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTopic -> Method -> Economic Effect -> Social Effect."
    },
    {
      q: "Arrange the following:\n1. It traps infrared radiation.\n2. The greenhouse effect warms the planet.\n3. Gases like CO2 act like a blanket.\n4. Without it, Earth would be too cold.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Analogy -> Mechanism -> Importance."
    },
    {
      q: "Arrange the following:\n1. This ensures no single branch becomes too powerful.\n2. The US government has a system of checks and balances.\n3. Each branch can limit the others.\n4. For example, the President can veto laws.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Action -> Goal -> Example."
    },
    {
      q: "Arrange the following:\n1. However, it raises ethical concerns.\n2. Genetic engineering allows us to modify DNA.\n3. We can cure diseases before birth.\n4. Some fear it could lead to 'designer babies'.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTechnology -> Benefit -> Pivot -> Fear."
    },
    {
      q: "Arrange the following:\n1. This led to trench warfare.\n2. World War I introduced modern weaponry.\n3. Machine guns made open charges suicidal.\n4. The front lines became static and deadly.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nContext -> Cause -> Effect -> Result."
    },
    {
      q: "Arrange the following:\n1. It is a symbol of hope.\n2. The Statue of Liberty stands in New York.\n3. It was a gift from France.\n4. Immigrants saw it as they arrived by sea.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nLocation -> Origin -> Meaning -> Audience."
    },
    {
      q: "Arrange the following:\n1. This period is known as the Great Dying.\n2. The Permian extinction was the most severe.\n3. 96% of marine species vanished.\n4. Volcanic activity is the suspected cause.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Statistic -> Name -> Cause."
    },
    {
      q: "Arrange the following:\n1. They rely on instinct and observation.\n2. Animals do not have a complex language.\n3. However, they communicate effectively.\n4. Bees, for example, dance to share locations.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nLimitation -> Contrast -> Method -> Example."
    },
    {
      q: "Arrange the following:\n1. It posits that all life is suffering.\n2. Buddhism was founded by Siddhartha Gautama.\n3. The cause of suffering is attachment.\n4. Nirvana is the cessation of this suffering.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nFounder -> Core Belief -> Reason -> Goal."
    },
    {
      q: "Arrange the following:\n1. Thus, silence can be loud.\n2. In literature, what is not said matters.\n3. Subtext conveys meaning beneath the dialogue.\n4. Readers must infer emotions from context.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTopic -> Definition -> Action -> Paradox/Conclusion."
    },
    {
      q: "Arrange the following:\n1. This creates a price floor.\n2. Minimum wage laws set a baseline income.\n3. Employers cannot pay below this rate.\n4. Debate continues on its effect on employment.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nDefinition -> Constraint -> Terminology -> Consequence/Debate."
    },
    {
      q: "Arrange the following:\n1. He used non-violent civil disobedience.\n2. Martin Luther King Jr. fought for civil rights.\n3. His 'I Have a Dream' speech is iconic.\n4. It envisioned a world without racism.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nPerson -> Method -> Event -> Vision."
    },
    {
      q: "Arrange the following:\n1. It is the resistance to flow.\n2. Viscosity is a property of fluids.\n3. Honey has high viscosity.\n4. Water has low viscosity.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nTerm -> Definition -> Example 1 -> Example 2."
    },
    {
      q: "Arrange the following:\n1. Consequently, interest rates are raised.\n2. The Central Bank aims to control inflation.\n3. This discourages borrowing.\n4. Spending slows down, cooling the economy.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nGoal -> Action -> Mechanism -> Result."
    },
    {
      q: "Arrange the following:\n1. It allows us to question existence.\n2. Philosophy is the love of wisdom.\n3. It uses logic to analyze arguments.\n4. Ultimately, it seeks the truth.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nDefinition -> Method -> Application -> Goal."
    },
    {
      q: "Arrange the following:\n1. This creates a sense of movement.\n2. Van Gogh's 'Starry Night' is a masterpiece.\n3. He used swirling brush strokes.\n4. The colors reflect his emotional state.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nSubject -> Technique -> Effect -> Interpretation."
    },
    {
      q: "Arrange the following:\n1. Therefore, correlation is not causation.\n2. Two variables may move together.\n3. However, a third factor might cause both.\n4. Ice cream sales and crime rates both rise in summer.",
      options: ["2-4-3-1", "1-2-3-4", "2-3-4-1", "4-2-3-1"],
      a: "2-4-3-1",
      exp: "Correct Order: 2-4-3-1.\nConcept -> Example -> Alternative explanation -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. It focuses on the unconscious mind.\n2. Psychoanalysis was developed by Freud.\n3. He believed dreams reveal hidden desires.\n4. Therapy involves interpreting these signals.",
      options: ["2-1-3-4", "1-2-3-4", "2-3-1-4", "3-2-1-4"],
      a: "2-1-3-4",
      exp: "Correct Order: 2-1-3-4.\nOrigin -> Focus -> Theory -> Practice."
    },
    {
      q: "Arrange the following:\n1. This is called the Doppler Effect.\n2. Sound waves compress as a source approaches.\n3. The pitch seems to become higher.\n4. As it moves away, the waves stretch out.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nMechanism 1 -> Effect 1 -> Mechanism 2 -> Name."
    },
    {
      q: "Arrange the following:\n1. It is a self-regulating system.\n2. The Gaia hypothesis views Earth as an organism.\n3. Life interacts with the inorganic environment.\n4. This maintains conditions for life to persist.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nTopic -> Explanation -> Definition -> Goal."
    },
    {
      q: "Arrange the following:\n1. However, it is prone to bias.\n2. History is often written by the victors.\n3. Their perspective dominates the narrative.\n4. Modern historians strive to uncover lost voices.",
      options: ["2-3-1-4", "1-2-3-4", "2-1-3-4", "3-2-1-4"],
      a: "2-3-1-4",
      exp: "Correct Order: 2-3-1-4.\nObservation -> Effect -> Critique -> Correction."
    },
    {
      q: "Arrange the following:\n1. This creates a shortage of goods.\n2. Price ceilings set a maximum price.\n3. Suppliers produce less at lower prices.\n4. Consumers demand more, emptying shelves.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nDefinition -> Supplier reaction -> Consumer reaction -> Result."
    },
    {
      q: "Arrange the following:\n1. It ended the age of dinosaurs.\n2. An asteroid struck the Yucatan peninsula.\n3. Dust blocked the sun for years.\n4. Plants died, collapsing the food chain.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nEvent -> Immediate Effect -> Chain Reaction -> Conclusion."
    },
    {
      q: "Arrange the following:\n1. Thus, absolute power corrupts absolutely.\n2. Totalitarian regimes suppress dissent.\n3. They control media and education.\n4. The truth becomes whatever the state says.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nTopic -> Mechanism -> Consequence -> Moral."
    },
    {
      q: "Arrange the following:\n1. It questions the nature of knowledge.\n2. Socratic irony involves feigning ignorance.\n3. This exposes the contradictions in others.\n4. Socrates used this to teach.",
      options: ["2-3-4-1", "1-2-3-4", "2-4-3-1", "3-2-4-1"],
      a: "2-3-4-1",
      exp: "Correct Order: 2-3-4-1.\nDefinition -> Mechanism -> Purpose -> Effect."
    }
  ]
};
