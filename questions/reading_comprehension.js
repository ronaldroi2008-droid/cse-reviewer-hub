// questions/reading_comprehension.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["reading_comprehension"] = {

  // ============================================================
  // LEVEL 1: BEGINNER (50 Items) - Explicit Details
  // ============================================================
  beginner: [
    {
      question: "Passage: The cat is sleeping on the rug. It is a sunny afternoon.\n\nQuestion: Where is the cat sleeping?",
      options: ["On the bed", "On the rug", "Outside", "In the box"],
      answer: "On the rug",
      explanation: "The text explicitly states 'on the rug'."
    },
    {
      question: "Passage: Sarah loves to eat apples. She eats one every morning.\n\nQuestion: When does Sarah eat apples?",
      options: ["At night", "At lunch", "Every morning", "Every afternoon"],
      answer: "Every morning",
      explanation: "The text explicitly states 'every morning'."
    },
    {
      question: "Passage: John has a red bicycle. He rides it to school.\n\nQuestion: What color is John's bicycle?",
      options: ["Blue", "Red", "Green", "Black"],
      answer: "Red",
      explanation: "The text explicitly says 'red bicycle'."
    },
    {
      question: "Passage: The store opens at 8:00 AM and closes at 5:00 PM.\n\nQuestion: What time does the store close?",
      options: ["8:00 AM", "5:00 PM", "12:00 PM", "6:00 PM"],
      answer: "5:00 PM",
      explanation: "The text explicitly says 'closes at 5:00 PM'."
    },
    {
      question: "Passage: Birds build nests in trees. They lay eggs in them.\n\nQuestion: What do birds lay in the nests?",
      options: ["Food", "Stones", "Eggs", "Leaves"],
      answer: "Eggs",
      explanation: "The text explicitly says 'lay eggs in them'."
    },
    {
      question: "Passage: Mr. Cruz is a teacher. He teaches Math.\n\nQuestion: What subject does Mr. Cruz teach?",
      options: ["English", "Science", "Math", "History"],
      answer: "Math",
      explanation: "The text explicitly says 'He teaches Math'."
    },
    {
      question: "Passage: It rained heavily yesterday. The streets were flooded.\n\nQuestion: What happened to the streets?",
      options: ["They were dry", "They were clean", "They were flooded", "They were busy"],
      answer: "They were flooded",
      explanation: "The text explicitly states 'The streets were flooded'."
    },
    {
      question: "Passage: Anna bought a new dress. It was blue and white.\n\nQuestion: What did Anna buy?",
      options: ["Shoes", "A bag", "A dress", "A hat"],
      answer: "A dress",
      explanation: "The text explicitly says she bought 'a new dress'."
    },
    {
      question: "Passage: Fish live in water. They use gills to breathe.\n\nQuestion: What do fish use to breathe?",
      options: ["Lungs", "Nose", "Gills", "Mouth"],
      answer: "Gills",
      explanation: "The text explicitly says 'use gills to breathe'."
    },
    {
      question: "Passage: The baker makes fresh bread. He sells it in the morning.\n\nQuestion: Who makes the bread?",
      options: ["The farmer", "The baker", "The chef", "The seller"],
      answer: "The baker",
      explanation: "The text explicitly says 'The baker makes fresh bread'."
    },
    {
      question: "Passage: The sun is a star. It gives us heat and light.\n\nQuestion: What is the sun?",
      options: ["A planet", "A moon", "A star", "A comet"],
      answer: "A star",
      explanation: "The text explicitly states 'The sun is a star'."
    },
    {
      question: "Passage: My dog's name is Spot. He has black spots on his back.\n\nQuestion: What is on the dog's back?",
      options: ["Stripes", "Black spots", "White fur", "A collar"],
      answer: "Black spots",
      explanation: "The text explicitly says 'black spots on his back'."
    },
    {
      question: "Passage: Maria likes to read books. Her favorite genre is mystery.\n\nQuestion: What is Maria's favorite genre?",
      options: ["Romance", "Sci-fi", "Mystery", "History"],
      answer: "Mystery",
      explanation: "The text explicitly says 'Her favorite genre is mystery'."
    },
    {
      question: "Passage: The bus arrived late. Many passengers were angry.\n\nQuestion: How did the passengers feel?",
      options: ["Happy", "Angry", "Sad", "Excited"],
      answer: "Angry",
      explanation: "The text explicitly says 'passengers were angry'."
    },
    {
      question: "Passage: Lemons are sour. They are yellow citrus fruits.\n\nQuestion: How do lemons taste?",
      options: ["Sweet", "Bitter", "Sour", "Salty"],
      answer: "Sour",
      explanation: "The text explicitly says 'Lemons are sour'."
    },
    {
      question: "Passage: Tom plays soccer. He is the goalkeeper.\n\nQuestion: What position does Tom play?",
      options: ["Striker", "Goalkeeper", "Defender", "Coach"],
      answer: "Goalkeeper",
      explanation: "The text explicitly says 'He is the goalkeeper'."
    },
    {
      question: "Passage: The library is quiet. People go there to study.\n\nQuestion: Why do people go to the library?",
      options: ["To eat", "To sleep", "To study", "To play"],
      answer: "To study",
      explanation: "The text explicitly says 'People go there to study'."
    },
    {
      question: "Passage: Cows eat grass. They live on farms.\n\nQuestion: What do cows eat?",
      options: ["Meat", "Grass", "Corn", "Fish"],
      answer: "Grass",
      explanation: "The text explicitly says 'Cows eat grass'."
    },
    {
      question: "Passage: The movie starts at 7:00 PM. Don't be late.\n\nQuestion: What time does the movie start?",
      options: ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"],
      answer: "7:00 PM",
      explanation: "The text explicitly says 'starts at 7:00 PM'."
    },
    {
      question: "Passage: Lisa has a twin sister named Lana. They look exactly alike.\n\nQuestion: What is Lisa's sister's name?",
      options: ["Lara", "Lana", "Lena", "Lina"],
      answer: "Lana",
      explanation: "The text explicitly says 'named Lana'."
    },
    {
      question: "Passage: Bears hibernate in winter. They sleep in caves.\n\nQuestion: Where do bears sleep?",
      options: ["In trees", "In houses", "In caves", "In water"],
      answer: "In caves",
      explanation: "The text explicitly says 'They sleep in caves'."
    },
    {
      question: "Passage: The car stopped because it ran out of gas.\n\nQuestion: Why did the car stop?",
      options: ["Flat tire", "Engine trouble", "Ran out of gas", "Traffic light"],
      answer: "Ran out of gas",
      explanation: "The text explicitly says 'because it ran out of gas'."
    },
    {
      question: "Passage: Butterflies have colorful wings. They feed on nectar.\n\nQuestion: What do butterflies feed on?",
      options: ["Leaves", "Insects", "Nectar", "Seeds"],
      answer: "Nectar",
      explanation: "The text explicitly says 'feed on nectar'."
    },
    {
      question: "Passage: Ben broke his leg. He went to the hospital.\n\nQuestion: Why did Ben go to the hospital?",
      options: ["He was sick", "He broke his leg", "To visit a friend", "He works there"],
      answer: "He broke his leg",
      explanation: "The text indicates he went because 'Ben broke his leg'."
    },
    {
      question: "Passage: The earth goes around the sun. It takes 365 days.\n\nQuestion: How long does it take for the earth to go around the sun?",
      options: ["24 hours", "30 days", "365 days", "100 years"],
      answer: "365 days",
      explanation: "The text explicitly says 'It takes 365 days'."
    },
    {
      question: "Passage: Clouds are made of water droplets. Dark clouds bring rain.\n\nQuestion: What brings rain?",
      options: ["White clouds", "Dark clouds", "Blue sky", "Wind"],
      answer: "Dark clouds",
      explanation: "The text explicitly says 'Dark clouds bring rain'."
    },
    {
      question: "Passage: Doctors help sick people. They work in clinics and hospitals.\n\nQuestion: Who helps sick people?",
      options: ["Teachers", "Doctors", "Police", "Drivers"],
      answer: "Doctors",
      explanation: "The text says 'Doctors help sick people'."
    },
    {
      question: "Passage: A triangle has three sides. A square has four.\n\nQuestion: How many sides does a triangle have?",
      options: ["Two", "Three", "Four", "Five"],
      answer: "Three",
      explanation: "The text says 'A triangle has three sides'."
    },
    {
      question: "Passage: Rice is a staple food in Asia. It is grown in paddies.\n\nQuestion: Where is rice grown?",
      options: ["In forests", "In paddies", "In deserts", "In oceans"],
      answer: "In paddies",
      explanation: "The text says 'grown in paddies'."
    },
    {
      question: "Passage: The baby is crying. She is hungry.\n\nQuestion: Why is the baby crying?",
      options: ["She is sleepy", "She is hungry", "She is cold", "She is playing"],
      answer: "She is hungry",
      explanation: "The text says 'She is hungry'."
    },
    {
      question: "Passage: Gold is expensive. Silver is cheaper than gold.\n\nQuestion: Which metal is cheaper?",
      options: ["Gold", "Silver", "Bronze", "Copper"],
      answer: "Silver",
      explanation: "The text says 'Silver is cheaper than gold'."
    },
    {
      question: "Passage: The flag is red, white, and blue. It has stars.\n\nQuestion: What colors are on the flag?",
      options: ["Green and Yellow", "Red, White, and Blue", "Black and White", "Purple and Orange"],
      answer: "Red, White, and Blue",
      explanation: "The text explicitly lists 'red, white, and blue'."
    },
    {
      question: "Passage: Spiders have eight legs. Insects have six.\n\nQuestion: How many legs do spiders have?",
      options: ["Six", "Eight", "Ten", "Four"],
      answer: "Eight",
      explanation: "The text says 'Spiders have eight legs'."
    },
    {
      question: "Passage: The coffee is too hot. I cannot drink it yet.\n\nQuestion: Why can't the speaker drink the coffee?",
      options: ["It is cold", "It is too hot", "It is sweet", "It is empty"],
      answer: "It is too hot",
      explanation: "The text says 'The coffee is too hot'."
    },
    {
      question: "Passage: Use a pencil to draw. Use an eraser to fix mistakes.\n\nQuestion: What do you use to fix mistakes?",
      options: ["Pen", "Pencil", "Eraser", "Ruler"],
      answer: "Eraser",
      explanation: "The text says 'Use an eraser to fix mistakes'."
    },
    {
      question: "Passage: The wind blew the hat away. The man chased it.\n\nQuestion: What did the man chase?",
      options: ["The wind", "The hat", "The dog", "The car"],
      answer: "The hat",
      explanation: "The text implies he chased the hat that blew away."
    },
    {
      question: "Passage: Sharks live in the ocean. They have sharp teeth.\n\nQuestion: Where do sharks live?",
      options: ["In lakes", "In rivers", "In the ocean", "In pools"],
      answer: "In the ocean",
      explanation: "The text says 'Sharks live in the ocean'."
    },
    {
      question: "Passage: Every Monday, we wear uniforms. Today is Tuesday.\n\nQuestion: Do they wear uniforms today?",
      options: ["Yes", "No", "Maybe", "Sometimes"],
      answer: "No",
      explanation: "Uniforms are for Monday. Today is Tuesday. Logical No."
    },
    {
      question: "Passage: The phone rang. Dad answered it.\n\nQuestion: Who answered the phone?",
      options: ["Mom", "Dad", "The brother", "Nobody"],
      answer: "Dad",
      explanation: "The text says 'Dad answered it'."
    },
    {
      question: "Passage: Plants need water and sunlight to grow.\n\nQuestion: What two things do plants need?",
      options: ["Water and Soil", "Sunlight and Air", "Water and Sunlight", "Food and Water"],
      answer: "Water and Sunlight",
      explanation: "The text explicitly lists 'water and sunlight'."
    },
    {
      question: "Passage: The cake tastes sweet. It has chocolate frosting.\n\nQuestion: What kind of frosting does the cake have?",
      options: ["Vanilla", "Strawberry", "Chocolate", "Lemon"],
      answer: "Chocolate",
      explanation: "The text says 'chocolate frosting'."
    },
    {
      question: "Passage: Birds can fly. Penguins are birds, but they cannot fly.\n\nQuestion: Can penguins fly?",
      options: ["Yes", "No", "Sometimes", "Only at night"],
      answer: "No",
      explanation: "The text explicitly says 'they cannot fly'."
    },
    {
      question: "Passage: Open the door. Walk outside.\n\nQuestion: What should you do first?",
      options: ["Walk outside", "Close the door", "Open the door", "Knock"],
      answer: "Open the door",
      explanation: "The sequence is Open then Walk."
    },
    {
      question: "Passage: Today is my birthday. I am turning ten.\n\nQuestion: How old is the speaker turning?",
      options: ["Nine", "Ten", "Eleven", "Twelve"],
      answer: "Ten",
      explanation: "The text says 'turning ten'."
    },
    {
      question: "Passage: The lamp is on the table. The book is under the lamp.\n\nQuestion: Where is the book?",
      options: ["On the table", "Under the table", "Under the lamp", "On the floor"],
      answer: "Under the lamp",
      explanation: "The text says 'The book is under the lamp'."
    },
    {
      question: "Passage: Winter is cold. We wear coats.\n\nQuestion: What do we wear in winter?",
      options: ["Shorts", "Sandals", "Coats", "T-shirts"],
      answer: "Coats",
      explanation: "The text says 'We wear coats'."
    },
    {
      question: "Passage: The runner ran fast. He won the race.\n\nQuestion: Did the runner win?",
      options: ["Yes", "No", "Maybe", "He lost"],
      answer: "Yes",
      explanation: "The text says 'He won the race'."
    },
    {
      question: "Passage: Giraffes are tall. They have long necks.\n\nQuestion: What kind of necks do giraffes have?",
      options: ["Short", "Thick", "Long", "Small"],
      answer: "Long",
      explanation: "The text says 'long necks'."
    },
    {
      question: "Passage: Use a spoon for soup. Use a fork for salad.\n\nQuestion: What do you use for soup?",
      options: ["Fork", "Knife", "Spoon", "Hands"],
      answer: "Spoon",
      explanation: "The text says 'Use a spoon for soup'."
    },
    {
      question: "Passage: The light is red. Cars must stop.\n\nQuestion: What must cars do?",
      options: ["Go", "Stop", "Turn", "Speed up"],
      answer: "Stop",
      explanation: "The text says 'Cars must stop'."
    }
  ],

  // ============================================================
  // LEVEL 2: INTERMEDIATE (50 Items) - Main Idea & Simple Inference
  // ============================================================
  intermediate: [
    {
      question: "Passage: The sky turned dark and the wind began to blow. Thunder rumbled in the distance. People opened their umbrellas.\n\nQuestion: What is about to happen?",
      options: ["It will snow", "It will rain", "The sun will shine", "It will be night"],
      answer: "It will rain",
      explanation: "Clues (dark sky, thunder, umbrellas) point to rain."
    },
    {
      question: "Passage: Mario studied until midnight. He woke up early to review his notes. He felt nervous but ready.\n\nQuestion: What is Mario likely preparing for?",
      options: ["A party", "A vacation", "An exam", "A game"],
      answer: "An exam",
      explanation: "Studying and reviewing notes implies an exam."
    },
    {
      question: "Passage: The restaurant was empty. The waiter looked bored. The food was cold and tasteless.\n\nQuestion: Why was the restaurant likely empty?",
      options: ["It was too expensive", "The food was bad", "It was closed", "It was early"],
      answer: "The food was bad",
      explanation: "The description 'cold and tasteless' suggests bad food explains the lack of customers."
    },
    {
      question: "Passage: Sharks are apex predators. However, they are often misunderstood. Many sharks do not attack humans unless provoked.\n\nQuestion: What is the main idea?",
      options: ["Sharks eat humans", "Sharks are dangerous", "Sharks are misunderstood", "Sharks live in oceans"],
      answer: "Sharks are misunderstood",
      explanation: "'However, they are often misunderstood' is the pivot point of the text."
    },
    {
      question: "Passage: Cellphones allow us to communicate instantly. However, they can also cause distraction during work.\n\nQuestion: What is the disadvantage mentioned?",
      options: ["They are expensive", "They break easily", "They cause distraction", "They are heavy"],
      answer: "They cause distraction",
      explanation: "The text explicitly states 'can also cause distraction'."
    },
    {
      question: "Passage: Sarah forgot her umbrella. When she arrived at the office, her clothes were soaking wet.\n\nQuestion: What was the weather like?",
      options: ["Sunny", "Windy", "Rainy", "Snowy"],
      answer: "Rainy",
      explanation: "Wet clothes + forgot umbrella = Rain."
    },
    {
      question: "Passage: Bamboo is actually a type of grass. It grows very fast and is used to build houses.\n\nQuestion: To what plant family does bamboo belong?",
      options: ["Tree", "Grass", "Flower", "Shrub"],
      answer: "Grass",
      explanation: "The text says 'Bamboo is actually a type of grass'."
    },
    {
      question: "Passage: Unlike dogs, cats are solitary hunters. They prefer to hunt alone rather than in packs.\n\nQuestion: How do cats prefer to hunt?",
      options: ["In groups", "With dogs", "Alone", "With humans"],
      answer: "Alone",
      explanation: "The text says 'prefer to hunt alone'."
    },
    {
      question: "Passage: The cactus stores water in its thick stem. This helps it survive in dry deserts.\n\nQuestion: Why does the cactus store water?",
      options: ["To look big", "To survive dry conditions", "To feed animals", "To grow flowers"],
      answer: "To survive dry conditions",
      explanation: "The text says 'helps it survive in dry deserts'."
    },
    {
      question: "Passage: Jason yawned and rubbed his eyes. He looked at the clock; it was 2:00 AM.\n\nQuestion: How does Jason feel?",
      options: ["Hungry", "Angry", "Sleepy", "Excited"],
      answer: "Sleepy",
      explanation: "Yawning and rubbing eyes at 2AM implies sleepiness."
    },
    {
      question: "Passage: Plastics take hundreds of years to decompose. This causes major pollution in oceans.\n\nQuestion: What is the effect of plastic's slow decomposition?",
      options: ["It creates food", "It causes pollution", "It cleans the water", "It saves energy"],
      answer: "It causes pollution",
      explanation: "The text states 'This causes major pollution'."
    },
    {
      question: "Passage: The library demands silence. Talking loudly disturbs others reading.\n\nQuestion: Why must you be quiet in the library?",
      options: ["The librarian is sleeping", "To avoid disturbing readers", "It is a rule", "Books are sensitive"],
      answer: "To avoid disturbing readers",
      explanation: "The text explains: 'Talking loudly disturbs others reading'."
    },
    {
      question: "Passage: Gold is a soft metal. To make jewelry, it is often mixed with copper or silver to make it harder.\n\nQuestion: Why is gold mixed with other metals?",
      options: ["To make it shiny", "To make it cheaper", "To make it harder", "To make it yellow"],
      answer: "To make it harder",
      explanation: "The text says 'to make it harder'."
    },
    {
      question: "Passage: Before the exam, eat a healthy breakfast. It gives your brain energy to think.\n\nQuestion: What is the benefit of breakfast before an exam?",
      options: ["It tastes good", "It saves time", "It gives brain energy", "It makes you sleep"],
      answer: "It gives brain energy",
      explanation: "The text says 'gives your brain energy'."
    },
    {
      question: "Passage: While the city is noisy and crowded, the countryside is peaceful and quiet.\n\nQuestion: How is the countryside described?",
      options: ["Noisy", "Crowded", "Peaceful", "Dirty"],
      answer: "Peaceful",
      explanation: "The text describes it as 'peaceful and quiet'."
    },
    {
      question: "Passage: Many people think spiders are insects. However, spiders have eight legs, while insects have six.\n\nQuestion: How are spiders different from insects?",
      options: ["They are smaller", "They have eight legs", "They fly", "They eat plants"],
      answer: "They have eight legs",
      explanation: "The text contrasts the leg count: spiders have eight."
    },
    {
      question: "Passage: Solar panels convert sunlight into electricity. They are a clean source of energy.\n\nQuestion: What do solar panels use to make power?",
      options: ["Wind", "Water", "Sunlight", "Coal"],
      answer: "Sunlight",
      explanation: "The text says 'convert sunlight into electricity'."
    },
    {
      question: "Passage: Jenny felt a lump in her throat. Tears welled up in her eyes as she waved goodbye.\n\nQuestion: What emotion is Jenny feeling?",
      options: ["Joy", "Sadness", "Anger", "Fear"],
      answer: "Sadness",
      explanation: "Lump in throat and tears while saying goodbye implies sadness."
    },
    {
      question: "Passage: Exercise strengthens muscles. It also improves heart health.\n\nQuestion: Which is NOT mentioned as a benefit?",
      options: ["Strengthens muscles", "Improves heart health", "Makes you taller", "None of the above"],
      answer: "Makes you taller",
      explanation: "Height is not mentioned in the text."
    },
    {
      question: "Passage: The chef tasted the soup. He frowned and reached for the salt.\n\nQuestion: What was wrong with the soup?",
      options: ["Too hot", "Too salty", "Lacked flavor/salt", "Too sour"],
      answer: "Lacked flavor/salt",
      explanation: "Reaching for salt implies it lacked salt."
    },
    {
      question: "Passage: Owls are nocturnal. This means they sleep during the day and hunt at night.\n\nQuestion: What does 'nocturnal' mean?",
      options: ["Eats meat", "Sleeps at night", "Active at night", "Lives in trees"],
      answer: "Active at night",
      explanation: "The text defines it: 'hunt at night'."
    },
    {
      question: "Passage: If you mix blue and yellow paint, you get green. If you add more yellow, it becomes a lighter green.\n\nQuestion: How do you make light green?",
      options: ["Add more blue", "Add more yellow", "Add white", "Add black"],
      answer: "Add more yellow",
      explanation: "The text says 'If you add more yellow, it becomes a lighter green'."
    },
    {
      question: "Passage: The factory released black smoke. Soon, the birds in the area disappeared.\n\nQuestion: What likely caused the birds to leave?",
      options: ["The noise", "The pollution/smoke", "The weather", "The food"],
      answer: "The pollution/smoke",
      explanation: "Inference: Smoke (pollution) drove the birds away."
    },
    {
      question: "Passage: Alice studied hard, yet she failed the test. She was devastated.\n\nQuestion: Why was Alice devastated?",
      options: ["She didn't study", "She failed despite studying", "The test was easy", "She was sick"],
      answer: "She failed despite studying",
      explanation: "The contrast 'yet she failed' causes the devastation."
    },
    {
      question: "Passage: Vaccines prevent diseases. They prepare the body to fight germs.\n\nQuestion: What is the function of a vaccine?",
      options: ["Cure illness", "Prevent disease", "Make you strong", "Help you sleep"],
      answer: "Prevent disease",
      explanation: "The text says 'Vaccines prevent diseases'."
    },
    {
      question: "Passage: The referee blew the whistle. The players stopped running.\n\nQuestion: What does the whistle signal?",
      options: ["Start of game", "A goal", "Stop/Pause", "Cheering"],
      answer: "Stop/Pause",
      explanation: "The players 'stopped running' after the whistle."
    },
    {
      question: "Passage: Bees collect nectar. They turn it into honey in the hive.\n\nQuestion: What is the raw material for honey?",
      options: ["Pollen", "Nectar", "Flowers", "Wax"],
      answer: "Nectar",
      explanation: "The text says 'collect nectar... turn it into honey'."
    },
    {
      question: "Passage: The movie was boring. Half the audience left before it ended.\n\nQuestion: Why did the audience leave?",
      options: ["It was late", "The movie was bad", "The fire alarm rang", "Tickets were expensive"],
      answer: "The movie was bad",
      explanation: "The text attributes leaving to the movie being 'boring'."
    },
    {
      question: "Passage: Antarctica is covered in ice. Few plants can grow there because of the extreme cold.\n\nQuestion: Why are there few plants in Antarctica?",
      options: ["No soil", "Extreme cold", "Too many animals", "No sun"],
      answer: "Extreme cold",
      explanation: "The text says 'because of the extreme cold'."
    },
    {
      question: "Passage: Keep the milk in the refrigerator. Otherwise, it will spoil.\n\nQuestion: What happens if milk is not refrigerated?",
      options: ["It freezes", "It tastes better", "It spoils", "It evaporates"],
      answer: "It spoils",
      explanation: "The text warns 'Otherwise, it will spoil'."
    },
    {
      question: "Passage: The internet is a vast source of information. However, not all of it is true.\n\nQuestion: What warning does the text give?",
      options: ["The internet is slow", "The internet is expensive", "Some info is false", "It is hard to use"],
      answer: "Some info is false",
      explanation: "The text says 'not all of it is true'."
    },
    {
      question: "Passage: Elephants have long trunks. They use them to grab food and drink water.\n\nQuestion: What is a function of the trunk mentioned?",
      options: ["Fighting", "Grabbing food", "Running", "Sleeping"],
      answer: "Grabbing food",
      explanation: "The text says 'use them to grab food'."
    },
    {
      question: "Passage: The traffic light turned yellow. The driver slowed down.\n\nQuestion: What did the driver do?",
      options: ["Stopped", "Speeded up", "Slowed down", "Honked"],
      answer: "Slowed down",
      explanation: "The text explicitly says 'driver slowed down'."
    },
    {
      question: "Passage: Recycling saves energy. It takes less energy to recycle a can than to make a new one.\n\nQuestion: Why is recycling cans better?",
      options: ["It is faster", "It saves energy", "It is cleaner", "It looks better"],
      answer: "It saves energy",
      explanation: "The text emphasizes 'It takes less energy'."
    },
    {
      question: "Passage: The desert is dry. Camels store fat in their humps to survive without food for days.\n\nQuestion: What do camels store in their humps?",
      options: ["Water", "Fat", "Milk", "Bone"],
      answer: "Fat",
      explanation: "The text explicitly says 'store fat'."
    },
    {
      question: "Passage: He checked his pockets. Empty. He checked his bag. Empty. He realized he couldn't enter his house.\n\nQuestion: What did he lose?",
      options: ["Wallet", "Phone", "Keys", "Money"],
      answer: "Keys",
      explanation: "Inference: You need keys to enter a house."
    },
    {
      question: "Passage: While coffee gives energy, too much can cause jitters.\n\nQuestion: What is a negative effect of coffee?",
      options: ["Energy", "Sleep", "Jitters", "Taste"],
      answer: "Jitters",
      explanation: "The text says 'too much can cause jitters'."
    },
    {
      question: "Passage: The bridge is old and rusty. The city decided to close it for safety.\n\nQuestion: Why was the bridge closed?",
      options: ["Traffic", "Safety concerns", "Construction", "Holiday"],
      answer: "Safety concerns",
      explanation: "The text says 'close it for safety'."
    },
    {
      question: "Passage: Diamonds are the hardest natural substance. They are used to cut glass.\n\nQuestion: Why are diamonds used to cut glass?",
      options: ["They are shiny", "They are expensive", "They are hard", "They are sharp"],
      answer: "They are hard",
      explanation: "The text links their use to being the 'hardest natural substance'."
    },
    {
      question: "Passage: Bats use echolocation to navigate. They make sounds that bounce off objects.\n\nQuestion: How do bats see in the dark?",
      options: ["Night vision", "Echolocation", "Smell", "Touch"],
      answer: "Echolocation",
      explanation: "The text says 'use echolocation'."
    },
    {
      question: "Passage: Use a helmet when biking. It protects your head in case of a fall.\n\nQuestion: What is the purpose of a helmet?",
      options: ["Style", "Speed", "Protection", "Comfort"],
      answer: "Protection",
      explanation: "The text says 'protects your head'."
    },
    {
      question: "Passage: The alarm clock didn't ring. Tom woke up late and missed the bus.\n\nQuestion: What was the first event?",
      options: ["Tom woke up late", "Alarm didn't ring", "Missed bus", "Tom ran"],
      answer: "Alarm didn't ring",
      explanation: "The cause was the alarm not ringing."
    },
    {
      question: "Passage: Unlike solids, liquids change shape to fit their container.\n\nQuestion: What changes shape?",
      options: ["Solids", "Liquids", "Gases", "Ice"],
      answer: "Liquids",
      explanation: "The text says 'liquids change shape'."
    },
    {
      question: "Passage: Mosquitoes breed in stagnant water. Emptying flower pots prevents them.\n\nQuestion: How can you stop mosquitoes?",
      options: ["Plant flowers", "Use nets", "Empty stagnant water", "Close windows"],
      answer: "Empty stagnant water",
      explanation: "The text suggests 'Emptying flower pots' (stagnant water)."
    },
    {
      question: "Passage: The boy lied about the wolf. When the wolf really came, no one believed him.\n\nQuestion: Why did no one believe the boy?",
      options: ["He spoke softly", "He lied before", "They didn't hear", "They were busy"],
      answer: "He lied before",
      explanation: "This is the moral of 'The Boy Who Cried Wolf'."
    },
    {
      question: "Passage: Stainless steel does not rust. It is used for cutlery.\n\nQuestion: What is a property of stainless steel?",
      options: ["It rusts", "It is soft", "It does not rust", "It is gold"],
      answer: "It does not rust",
      explanation: "The text says 'does not rust'."
    },
    {
      question: "Passage: Gravity pulls objects down. Without it, we would float.\n\nQuestion: What would happen without gravity?",
      options: ["We would fall", "We would float", "We would sleep", "Nothing"],
      answer: "We would float",
      explanation: "The text says 'Without it, we would float'."
    },
    {
      question: "Passage: The red light means stop. The green light means go.\n\nQuestion: What do you do at a green light?",
      options: ["Stop", "Wait", "Go", "Turn"],
      answer: "Go",
      explanation: "The text says 'green light means go'."
    },
    {
      question: "Passage: Whales are mammals, not fish. They breathe air.\n\nQuestion: How do whales breathe?",
      options: ["Water", "Air", "Gills", "Skin"],
      answer: "Air",
      explanation: "The text explicitly says 'They breathe air'."
    },
    {
      question: "Passage: The glass fell but didn't break. It was made of plastic.\n\nQuestion: Why didn't the glass break?",
      options: ["It was glass", "It was magic", "It was plastic", "It fell on pillows"],
      answer: "It was plastic",
      explanation: "The text clarifies 'It was made of plastic'."
    }
  ],

  // ============================================================
  // LEVEL 3: ADVANCED (50 Items) - Inference & Vocabulary
  // ============================================================
  advanced: [
    {
      question: "Passage: The invention of the steam engine revolutionized transportation. Before this, travel was limited by the endurance of horses. Suddenly, people could travel great distances in a fraction of the time.\n\nQuestion: What can be inferred about travel before the steam engine?",
      options: ["It was fast", "It was slow and limited", "It was non-existent", "It was expensive"],
      answer: "It was slow and limited",
      explanation: "Inferred from 'limited by endurance of horses' and 'fraction of the time' contrast."
    },
    {
      question: "Passage: His frugality was legendary. He would walk five miles to save bus fare and wore the same coat for twenty years.\n\nQuestion: What does 'frugality' mean in this context?",
      options: ["Generosity", "Laziness", "Thriftiness", "Wealth"],
      answer: "Thriftiness",
      explanation: "Saving bus fare and wearing old clothes are examples of being thrifty/frugal."
    },
    {
      question: "Passage: The manager's voice was icy. 'I expected better from you,' she said, staring at the error-filled report.\n\nQuestion: What is the tone of the manager?",
      options: ["Cheerful", "Disappointed/Cold", "Confused", "Encouraging"],
      answer: "Disappointed/Cold",
      explanation: "'Icy voice' and 'expected better' indicate disappointment and coldness."
    },
    {
      question: "Passage: Antibiotics treat bacterial infections. However, overuse can lead to resistance, making germs harder to kill.\n\nQuestion: What is the danger of using too many antibiotics?",
      options: ["They become expensive", "Bacteria become resistant", "They kill viruses", "They work too fast"],
      answer: "Bacteria become resistant",
      explanation: "The text explicitly states 'lead to resistance'."
    },
    {
      question: "Passage: While print media is declining, digital news consumption is soaring. Advertisers are shifting their budgets accordingly.\n\nQuestion: Where are advertisers likely moving their money?",
      options: ["To newspapers", "To digital platforms", "To radio", "To billboards"],
      answer: "To digital platforms",
      explanation: "Since digital news is soaring, budgets shift 'accordingly' to digital."
    },
    {
      question: "Passage: The diplomat was known for his tact. He could deliver bad news without making enemies.\n\nQuestion: What is a synonym for 'tact'?",
      options: ["Rudeness", "Diplomacy/Sensitivity", "Honesty", "Speed"],
      answer: "Diplomacy/Sensitivity",
      explanation: "The context 'deliver bad news without making enemies' defines tact."
    },
    {
      question: "Passage: The ancient city was buried under ash for centuries. Excavations revealed a frozen moment in time.\n\nQuestion: What preserved the city?",
      options: ["Water", "Ash", "Sand", "Ice"],
      answer: "Ash",
      explanation: "The text says 'buried under ash'."
    },
    {
      question: "Passage: Renewable energy sources like wind and solar are intermittent. This means we need battery storage for cloudy or calm days.\n\nQuestion: Why is battery storage needed?",
      options: ["Renewables are expensive", "Energy is constant", "Sources are not always available", "Batteries create energy"],
      answer: "Sources are not always available",
      explanation: "Intermittent means not continuous (cloudy/calm days)."
    },
    {
      question: "Passage: The senator's speech was verbose. He spoke for an hour but said very little of substance.\n\nQuestion: What does 'verbose' mean?",
      options: ["Loud", "Wordy", "Angry", "Intelligent"],
      answer: "Wordy",
      explanation: "Speaking for an hour but saying little implies wordiness."
    },
    {
      question: "Passage: In a democracy, power resides with the people. In a dictatorship, it is concentrated in one person.\n\nQuestion: What is the primary difference mentioned?",
      options: ["The economy", "The source of power", "The military", "The laws"],
      answer: "The source of power",
      explanation: "The text contrasts where power resides (people vs one person)."
    },
    {
      question: "Passage: The flora of the region is unique. Botanists visit to study plants found nowhere else.\n\nQuestion: What does 'flora' refer to?",
      options: ["Animals", "Weather", "Plants", "Rocks"],
      answer: "Plants",
      explanation: "Context clues: 'Botanists' and 'study plants'."
    },
    {
      question: "Passage: Despite the heavy criticism, the artist remained stoic. He continued painting without emotion.\n\nQuestion: What does 'stoic' mean?",
      options: ["Angry", "Unemotional/Calm", "Sad", "Excited"],
      answer: "Unemotional/Calm",
      explanation: "'Continued painting without emotion' defines stoic."
    },
    {
      question: "Passage: Inflation reduces purchasing power. A dollar today buys less than it did ten years ago.\n\nQuestion: What is the effect of inflation?",
      options: ["Money becomes more valuable", "You can buy less with the same money", "Prices go down", "Savings increase"],
      answer: "You can buy less with the same money",
      explanation: "Text says 'A dollar today buys less'."
    },
    {
      question: "Passage: The protagonist was an anti-hero. He lacked traditional heroic qualities like morality and courage.\n\nQuestion: How is the protagonist described?",
      options: ["A perfect hero", "Flawed/Lacking morals", "A villain", "A side character"],
      answer: "Flawed/Lacking morals",
      explanation: "The text says he 'lacked traditional heroic qualities'."
    },
    {
      question: "Passage: Some bacteria are aerobic, meaning they require oxygen. Others are anaerobic and die in the presence of oxygen.\n\nQuestion: What does an anaerobic bacterium need?",
      options: ["Oxygen", "No oxygen", "Sunlight", "Water"],
      answer: "No oxygen",
      explanation: "Text says they 'die in the presence of oxygen'."
    },
    {
      question: "Passage: The CEO's decision was unilateral. He did not consult the board or the employees.\n\nQuestion: What does 'unilateral' mean?",
      options: ["One-sided", "Democratic", "Collaborative", "Slow"],
      answer: "One-sided",
      explanation: "Not consulting others implies a one-sided decision."
    },
    {
      question: "Passage: E-books are convenient, but bibliophiles still prefer the smell and feel of physical pages.\n\nQuestion: Who is a 'bibliophile'?",
      options: ["A technology expert", "A book lover", "A writer", "A librarian"],
      answer: "A book lover",
      explanation: "Context: Someone who loves the physical aspects of books."
    },
    {
      question: "Passage: The desert is an arid landscape. Water is scarce, and vegetation is sparse.\n\nQuestion: What does 'arid' mean?",
      options: ["Cold", "Dry", "Wet", "Forest"],
      answer: "Dry",
      explanation: "Context clues: 'Water is scarce'."
    },
    {
      question: "Passage: The negotiations reached an impasse. Neither side was willing to compromise.\n\nQuestion: What is an 'impasse'?",
      options: ["An agreement", "A deadlock/Standstill", "A success", "A start"],
      answer: "A deadlock/Standstill",
      explanation: "Context: 'Neither side was willing to compromise'."
    },
    {
      question: "Passage: Artificial Intelligence can process data faster than humans. However, it lacks emotional intelligence and empathy.\n\nQuestion: What is a limitation of AI?",
      options: ["Speed", "Accuracy", "Emotional intelligence", "Memory"],
      answer: "Emotional intelligence",
      explanation: "The text explicitly states 'it lacks emotional intelligence'."
    },
    {
      question: "Passage: The law is ambiguous. Lawyers can interpret it in many different ways.\n\nQuestion: What does 'ambiguous' mean?",
      options: ["Clear", "Strict", "Open to interpretation", "Unfair"],
      answer: "Open to interpretation",
      explanation: "Context: 'interpret it in many different ways'."
    },
    {
      question: "Passage: His argument was fallacious. It was based on incorrect assumptions and flawed logic.\n\nQuestion: What does 'fallacious' mean?",
      options: ["Strong", "False/Flawed", "True", "Convincing"],
      answer: "False/Flawed",
      explanation: "Context: 'incorrect assumptions and flawed logic'."
    },
    {
      question: "Passage: The chemical is volatile. It evaporates quickly and can explode easily.\n\nQuestion: What does 'volatile' mean?",
      options: ["Stable", "Unstable/Explosive", "Liquid", "Safe"],
      answer: "Unstable/Explosive",
      explanation: "Context: 'evaporates quickly and can explode'."
    },
    {
      question: "Passage: She was a novice at chess. She barely knew how the pieces moved.\n\nQuestion: What is a 'novice'?",
      options: ["Expert", "Beginner", "Teacher", "Winner"],
      answer: "Beginner",
      explanation: "Context: 'barely knew how the pieces moved'."
    },
    {
      question: "Passage: The evidence corroborated the witness's story. It confirmed he was telling the truth.\n\nQuestion: What does 'corroborated' mean?",
      options: ["Contradicted", "Confirmed/Supported", "Ignored", "Changed"],
      answer: "Confirmed/Supported",
      explanation: "Context: 'confirmed he was telling the truth'."
    },
    {
      question: "Passage: The regime was totalitarian. The government controlled every aspect of public and private life.\n\nQuestion: What characterizes a totalitarian regime?",
      options: ["Freedom", "Total control", "Democracy", "Anarchy"],
      answer: "Total control",
      explanation: "Context: 'controlled every aspect'."
    },
    {
      question: "Passage: The weather was erratic. One minute it was sunny, the next it was hailing.\n\nQuestion: What does 'erratic' mean?",
      options: ["Predictable", "Unpredictable/Inconsistent", "Beautiful", "Dangerous"],
      answer: "Unpredictable/Inconsistent",
      explanation: "Context: Changing rapidly from sun to hail."
    },
    {
      question: "Passage: He was known for his altruism. He donated half his salary to charity every month.\n\nQuestion: What is 'altruism'?",
      options: ["Greed", "Selflessness", "Wealth", "Fame"],
      answer: "Selflessness",
      explanation: "Donating half salary shows concern for others (selflessness)."
    },
    {
      question: "Passage: The solution is ephemeral. It will only solve the problem for a short time.\n\nQuestion: What does 'ephemeral' mean?",
      options: ["Permanent", "Short-lived", "Effective", "Expensive"],
      answer: "Short-lived",
      explanation: "Context: 'only solve... for a short time'."
    },
    {
      question: "Passage: The debate was contentious. The candidates shouted and interrupted each other.\n\nQuestion: What does 'contentious' mean?",
      options: ["Peaceful", "Argumentative/Heated", "Boring", "Short"],
      answer: "Argumentative/Heated",
      explanation: "Context: Shouting and interrupting."
    },
    {
      question: "Passage: Her explanation was lucid. Everyone understood the complex topic immediately.\n\nQuestion: What does 'lucid' mean?",
      options: ["Confusing", "Clear", "Long", "Wrong"],
      answer: "Clear",
      explanation: "Context: 'Everyone understood... immediately'."
    },
    {
      question: "Passage: The judge was impartial. He did not favor either side.\n\nQuestion: What does 'impartial' mean?",
      options: ["Biased", "Fair/Neutral", "Strict", "Angry"],
      answer: "Fair/Neutral",
      explanation: "Context: 'did not favor either side'."
    },
    {
      question: "Passage: The stench was repugnant. People covered their noses and walked away.\n\nQuestion: What does 'repugnant' mean?",
      options: ["Pleasant", "Disgusting/Offensive", "Sweet", "Strong"],
      answer: "Disgusting/Offensive",
      explanation: "Context: People covering noses."
    },
    {
      question: "Passage: The project is viable. We have the money and the technology to do it.\n\nQuestion: What does 'viable' mean?",
      options: ["Impossible", "Feasible/Possible", "Expensive", "Risky"],
      answer: "Feasible/Possible",
      explanation: "Context: Having resources implies it can be done."
    },
    {
      question: "Passage: He acts with impunity. He breaks the rules because he knows he won't be punished.\n\nQuestion: What does 'impunity' mean?",
      options: ["Fear", "Exemption from punishment", "Carefulness", "Guilt"],
      answer: "Exemption from punishment",
      explanation: "Context: 'knows he won't be punished'."
    },
    {
      question: "Passage: The rumors were ubiquitous. You could hear them in every coffee shop and office.\n\nQuestion: What does 'ubiquitous' mean?",
      options: ["Rare", "Everywhere", "Secret", "False"],
      answer: "Everywhere",
      explanation: "Context: 'hear them in every coffee shop'."
    },
    {
      question: "Passage: The politician was pragmatic. He focused on practical solutions rather than ideals.\n\nQuestion: What does 'pragmatic' mean?",
      options: ["Idealistic", "Practical", "Dreamy", "Dishonest"],
      answer: "Practical",
      explanation: "Context: 'focused on practical solutions'."
    },
    {
      question: "Passage: The water is potable. It is safe to drink from the tap.\n\nQuestion: What does 'potable' mean?",
      options: ["Dirty", "Drinkable", "Cold", "Salty"],
      answer: "Drinkable",
      explanation: "Context: 'safe to drink'."
    },
    {
      question: "Passage: Her mood is volatile. She can be happy one moment and furious the next.\n\nQuestion: What does 'volatile' mean in this context?",
      options: ["Stable", "Unpredictable/Changeable", "Happy", "Angry"],
      answer: "Unpredictable/Changeable",
      explanation: "Context: Changing emotions rapidly."
    },
    {
      question: "Passage: The contract became void. It was no longer legally binding.\n\nQuestion: What does 'void' mean?",
      options: ["Valid", "Invalid/Empty", "New", "Signed"],
      answer: "Invalid/Empty",
      explanation: "Context: 'no longer legally binding'."
    },
    {
      question: "Passage: The soldier showed valor. He ran into fire to save his friend.\n\nQuestion: What does 'valor' mean?",
      options: ["Cowardice", "Bravery", "Speed", "Strength"],
      answer: "Bravery",
      explanation: "Running into fire to save someone implies bravery."
    },
    {
      question: "Passage: The economy is stagnant. There has been no growth for three years.\n\nQuestion: What does 'stagnant' mean?",
      options: ["Moving", "Still/Not growing", "Booming", "Falling"],
      answer: "Still/Not growing",
      explanation: "Context: 'no growth'."
    },
    {
      question: "Passage: The comments were benign. They were meant to help, not hurt.\n\nQuestion: What does 'benign' mean?",
      options: ["Harmful", "Harmless/Gentle", "Rude", "Loud"],
      answer: "Harmless/Gentle",
      explanation: "Context: 'not hurt'."
    },
    {
      question: "Passage: He was a meticulous worker. He checked every detail three times.\n\nQuestion: What does 'meticulous' mean?",
      options: ["Lazy", "Careful/Thorough", "Fast", "Careless"],
      answer: "Careful/Thorough",
      explanation: "Context: Checking details three times."
    },
    {
      question: "Passage: The loud noise was jarring. It shook everyone up.\n\nQuestion: What does 'jarring' mean?",
      options: ["Soothing", "Shocking/Disturbing", "Quiet", "Musical"],
      answer: "Shocking/Disturbing",
      explanation: "Context: 'shook everyone up'."
    },
    {
      question: "Passage: The student was diligent. He never missed an assignment.\n\nQuestion: What does 'diligent' mean?",
      options: ["Lazy", "Hardworking", "Smart", "Late"],
      answer: "Hardworking",
      explanation: "Never missing assignments implies diligence."
    },
    {
      question: "Passage: The view was panoramic. We could see the whole city from the top.\n\nQuestion: What does 'panoramic' mean?",
      options: ["Narrow", "Wide view", "Dark", "Blurry"],
      answer: "Wide view",
      explanation: "Context: 'see the whole city'."
    },
    {
      question: "Passage: The ending was ambiguous. We didn't know if the hero survived.\n\nQuestion: What does 'ambiguous' mean here?",
      options: ["Clear", "Unclear", "Happy", "Sad"],
      answer: "Unclear",
      explanation: "Context: 'didn't know if...'."
    },
    {
      question: "Passage: The toxins are lethal. One drop can kill a human.\n\nQuestion: What does 'lethal' mean?",
      options: ["Safe", "Deadly", "Tasty", "Weak"],
      answer: "Deadly",
      explanation: "Context: 'can kill'."
    },
    {
      question: "Passage: He felt apathy towards the election. He didn't care who won.\n\nQuestion: What is 'apathy'?",
      options: ["Interest", "Lack of interest", "Anger", "Joy"],
      answer: "Lack of interest",
      explanation: "Context: 'didn't care'."
    }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (50 Items) - Abstract Concepts & Complex Analysis
  // ============================================================
  expert: [
    {
      question: "Passage: Existentialism posits that individuals are free and responsible for their own development through acts of the will. It argues that life has no inherent meaning provided by the universe.\n\nQuestion: According to the text, where does life's meaning come from?",
      options: ["The universe", "God", "The individual", "Society"],
      answer: "The individual",
      explanation: "Inference: If the universe provides no meaning and individuals are responsible, meaning comes from the individual."
    },
    {
      question: "Passage: The concept of 'Tabula Rasa' suggests that humans are born without built-in mental content. Therefore, all knowledge comes from experience or perception.\n\nQuestion: Which idea does 'Tabula Rasa' oppose?",
      options: ["Learning from experience", "Innate knowledge", "Education", "Observation"],
      answer: "Innate knowledge",
      explanation: "If born without content, it opposes the idea of innate (built-in) knowledge."
    },
    {
      question: "Passage: In Machiavelli's view, it is better for a leader to be feared than loved, if one cannot be both. Fear is maintained by the dread of punishment, which never fails.\n\nQuestion: Why does Machiavelli prefer fear?",
      options: ["It is morally right", "Love is fickle; fear is reliable", "He hated people", "It is easier"],
      answer: "Love is fickle; fear is reliable",
      explanation: "Inference: 'Fear is maintained... never fails' implies reliability compared to love."
    },
    {
      question: "Passage: The utilitarian principle states that the best action is the one that maximizes overall happiness. However, critics argue this can justify harming a minority for the benefit of the majority.\n\nQuestion: What is a criticism of utilitarianism?",
      options: ["It promotes sadness", "It ignores the majority", "It can harm minorities", "It is too religious"],
      answer: "It can harm minorities",
      explanation: "The text explicitly mentions the criticism: 'justify harming a minority'."
    },
    {
      question: "Passage: Quantum entanglement describes a phenomenon where particles remain connected so that the state of one affects the other, regardless of distance. Einstein called this 'spooky action at a distance'.\n\nQuestion: What did Einstein find strange?",
      options: ["Particles are small", "Connection across distance", "Physics is wrong", "Ghosts exist"],
      answer: "Connection across distance",
      explanation: "'Spooky action at a distance' refers to the connection regardless of distance."
    },
    {
      question: "Passage: Revisionist history challenges established narratives. While often necessary to correct biases, it can be controversial when it appears to be politically motivated rather than fact-based.\n\nQuestion: When is revisionist history considered controversial?",
      options: ["When it is new", "When it corrects bias", "When it is politically motivated", "When it is written by victors"],
      answer: "When it is politically motivated",
      explanation: "The text explicitly states 'controversial when... politically motivated'."
    },
    {
      question: "Passage: The paradox of tolerance states that if a society is tolerant without limit, its ability to be tolerant will be seized or destroyed by the intolerant.\n\nQuestion: What does the paradox suggest regarding intolerance?",
      options: ["It should be tolerated", "It should not be tolerated", "It creates peace", "It is natural"],
      answer: "It should not be tolerated",
      explanation: "Inference: To preserve tolerance, society cannot tolerate the intolerant."
    },
    {
      question: "Passage: Fiscal policy involves government spending and tax. Monetary policy involves managing the money supply and interest rates. Both aim to stabilize the economy.\n\nQuestion: Which is a tool of monetary policy?",
      options: ["Taxes", "Government spending", "Interest rates", "Infrastructure"],
      answer: "Interest rates",
      explanation: "The text links 'interest rates' to Monetary policy."
    },
    {
      question: "Passage: Post-modernism challenges the idea of objective truth. It argues that reality is constructed through language and culture, making all interpretations relative.\n\nQuestion: What does post-modernism reject?",
      options: ["Language", "Culture", "Objective truth", "Art"],
      answer: "Objective truth",
      explanation: "The text states it 'challenges the idea of objective truth'."
    },
    {
      question: "Passage: The Socratic Method is a form of cooperative argumentative dialogue. It relies on asking and answering questions to stimulate critical thinking and draw out ideas.\n\nQuestion: What is the core technique of the Socratic Method?",
      options: ["Lecturing", "Asking questions", "Reading books", "Memorization"],
      answer: "Asking questions",
      explanation: "The text says 'relies on asking and answering questions'."
    },
    {
      question: "Passage: Entropy is the measure of disorder in a system. The Second Law of Thermodynamics states that the total entropy of an isolated system can never decrease over time.\n\nQuestion: What happens to disorder in an isolated system?",
      options: ["It decreases", "It stays the same", "It increases (or never decreases)", "It disappears"],
      answer: "It increases (or never decreases)",
      explanation: "Entropy (disorder) 'can never decrease', implying it tends to increase."
    },
    {
      question: "Passage: Cultural relativity is the idea that a person's beliefs should be understood based on their own culture, rather than be judged against the criteria of another.\n\nQuestion: How should we judge other cultures according to this?",
      options: ["By our own standards", "By their own standards", "By international law", "By religious texts"],
      answer: "By their own standards",
      explanation: "The text says 'based on their own culture'."
    },
    {
      question: "Passage: A laissez-faire economy is one where the government does not intervene in the market. Proponents argue this leads to efficiency, while critics cite the risk of monopolies.\n\nQuestion: What is a risk of laissez-faire?",
      options: ["Efficiency", "Government control", "Monopolies", "High taxes"],
      answer: "Monopolies",
      explanation: "The text says 'critics cite the risk of monopolies'."
    },
    {
      question: "Passage: Nihilism is the rejection of all religious and moral principles, often in the belief that life is meaningless. It is associated with extreme pessimism.\n\nQuestion: What is the central belief of Nihilism?",
      options: ["Life is beautiful", "Life is meaningless", "God exists", "Morality is absolute"],
      answer: "Life is meaningless",
      explanation: "The text states 'belief that life is meaningless'."
    },
    {
      question: "Passage: The placebo effect occurs when a patient experiences a real improvement in their condition after being given a treatment with no therapeutic value, simply because they believe it will help.\n\nQuestion: What causes the improvement in the placebo effect?",
      options: ["The medicine", "The patient's belief", "The doctor's skill", "Time"],
      answer: "The patient's belief",
      explanation: "The text says 'simply because they believe it will help'."
    },
    {
      question: "Passage: Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs or hypotheses.\n\nQuestion: What does a person with confirmation bias do?",
      options: ["Seeks opposing views", "Ignores beliefs", "Favors supporting information", "Conducts fair research"],
      answer: "Favors supporting information",
      explanation: "The text says 'confirms one's preexisting beliefs'."
    },
    {
      question: "Passage: A 'Straw Man' fallacy involves misrepresenting an opponent's argument to make it easier to attack. It avoids engaging with the actual point being made.\n\nQuestion: What characterizes a Straw Man argument?",
      options: ["Strong logic", "Personal insults", "Distortion of the opponent's view", "Fact-based rebuttal"],
      answer: "Distortion of the opponent's view",
      explanation: "The text says 'misrepresenting an opponent's argument'."
    },
    {
      question: "Passage: Occam's Razor is a problem-solving principle. It suggests that the simplest explanation is usually the correct one.\n\nQuestion: According to Occam's Razor, which explanation is preferred?",
      options: ["The most complex", "The most scientific", "The simplest", "The longest"],
      answer: "The simplest",
      explanation: "The text says 'simplest explanation is usually the correct one'."
    },
    {
      question: "Passage: In literature, a motif is a recurring element that has symbolic significance in a story. It helps produce the theme or mood.\n\nQuestion: How does a motif differ from a theme?",
      options: ["Motif is the main idea", "Motif is a recurring element", "Motif is a character", "There is no difference"],
      answer: "Motif is a recurring element",
      explanation: "Text defines motif as a 'recurring element' that helps produce the theme."
    },
    {
      question: "Passage: The tragedy of the commons is an economic problem. It occurs when individuals neglect the well-being of society in the pursuit of personal gain, depleting a shared resource.\n\nQuestion: What causes the tragedy of the commons?",
      options: ["Government regulation", "Self-interest", "Too many resources", "Cooperation"],
      answer: "Self-interest",
      explanation: "Text says 'pursuit of personal gain'."
    },
    {
      question: "Passage: Cognitive dissonance causes discomfort. To resolve this, people often reject new information that conflicts with their existing beliefs.\n\nQuestion: How do people often handle conflicting information?",
      options: ["They accept it", "They reject it", "They research it", "They ignore their beliefs"],
      answer: "They reject it",
      explanation: "Text says 'people often reject new information'."
    },
    {
      question: "Passage: Ubiquitous computing is a concept where computing is made to appear anytime and everywhere. It is often referred to as pervasive computing.\n\nQuestion: What is a synonym for ubiquitous computing?",
      options: ["Cloud computing", "Pervasive computing", "Mobile computing", "Desktop computing"],
      answer: "Pervasive computing",
      explanation: "Text explicitly says 'referred to as pervasive computing'."
    },
    {
      question: "Passage: The Dunning-Kruger effect is a cognitive bias. People with low ability at a task overestimate their ability. Conversely, experts often underestimate their competence.\n\nQuestion: Who tends to overestimate their ability?",
      options: ["Experts", "People with low ability", "Teachers", "Students"],
      answer: "People with low ability",
      explanation: "Text says 'People with low ability... overestimate'."
    },
    {
      question: "Passage: Schrödinger's cat is a thought experiment. It illustrates the paradox of quantum superposition, where a cat may be simultaneously both alive and dead.\n\nQuestion: What is the state of the cat in the experiment?",
      options: ["Alive", "Dead", "Both alive and dead", "Neither"],
      answer: "Both alive and dead",
      explanation: "Text says 'simultaneously both alive and dead'."
    },
    {
      question: "Passage: Technocracy is a system of governance where decision-makers are selected on the basis of their expertise in a given area of responsibility, particularly scientific knowledge.\n\nQuestion: Who rules in a technocracy?",
      options: ["The wealthy", "The military", "Experts/Scientists", "The people"],
      answer: "Experts/Scientists",
      explanation: "Text says 'selected on the basis of their expertise... scientific knowledge'."
    },
    {
      question: "Passage: Dogmatism is the expression of an opinion as if it were a fact. It refuses to consider other viewpoints.\n\nQuestion: What is a trait of a dogmatic person?",
      options: ["Open-mindedness", "Closed-mindedness", "Curiosity", "Scientific"],
      answer: "Closed-mindedness",
      explanation: "Text says 'refuses to consider other viewpoints'."
    },
    {
      question: "Passage: Hedonism is the pursuit of pleasure. It argues that pleasure is the highest good and proper aim of human life.\n\nQuestion: What is the goal of Hedonism?",
      options: ["Knowledge", "Pleasure", "Power", "Virtue"],
      answer: "Pleasure",
      explanation: "Text says 'pleasure is the highest good'."
    },
    {
      question: "Passage: A pyrrhic victory is a victory that inflicts such a devastating toll on the victor that it is tantamount to defeat.\n\nQuestion: Is a pyrrhic victory desirable?",
      options: ["Yes, it is a win", "No, the cost is too high", "Yes, if you survive", "No, because you lose"],
      answer: "No, the cost is too high",
      explanation: "Text says it is 'tantamount to defeat' due to the toll."
    },
    {
      question: "Passage: Solipsism is the philosophical idea that only one's own mind is sure to exist.\n\nQuestion: What does a solipsist doubt?",
      options: ["Their own mind", "The existence of the external world", "Logic", "Math"],
      answer: "The existence of the external world",
      explanation: "If *only* one's mind is sure, everything else (external world) is doubtful."
    },
    {
      question: "Passage: The Bystander Effect states that individuals are less likely to offer help to a victim when other people are present.\n\nQuestion: When are you less likely to help?",
      options: ["When alone", "When in a group", "When angry", "When skilled"],
      answer: "When in a group",
      explanation: "Text says 'when other people are present'."
    },
    {
      question: "Passage: Meritocracy is a political system in which economic goods and/or political power are vested in individual people on the basis of talent, effort, and achievement.\n\nQuestion: How do you succeed in a meritocracy?",
      options: ["Wealth", "Family connections", "Talent and effort", "Luck"],
      answer: "Talent and effort",
      explanation: "Text says 'basis of talent, effort, and achievement'."
    },
    {
      question: "Passage: Xenophobia is the fear or hatred of that which is perceived to be foreign or strange.\n\nQuestion: What is the target of xenophobia?",
      options: ["Spiders", "Heights", "Foreigners/Strangers", "The dark"],
      answer: "Foreigners/Strangers",
      explanation: "Text says 'foreign or strange'."
    },
    {
      question: "Passage: Nepotism is the practice among those with power or influence of favoring relatives or friends, especially by giving them jobs.\n\nQuestion: Hiring your brother instead of a qualified stranger is an example of?",
      options: ["Meritocracy", "Nepotism", "Democracy", "Altruism"],
      answer: "Nepotism",
      explanation: "Text defines nepotism as 'favoring relatives'."
    },
    {
      question: "Passage: A demagogue is a political leader who seeks support by appealing to the desires and prejudices of ordinary people rather than by using rational argument.\n\nQuestion: How does a demagogue gain power?",
      options: ["Logic", "Rational argument", "Emotion and prejudice", "Military force"],
      answer: "Emotion and prejudice",
      explanation: "Text says 'appealing to desires and prejudices'."
    },
    {
      question: "Passage: Ephemeral art is art that is temporary. It is not meant to last forever, like sand sculptures or ice carvings.\n\nQuestion: What is a characteristic of ephemeral art?",
      options: ["Permanent", "Temporary", "Expensive", "Digital"],
      answer: "Temporary",
      explanation: "Text says 'art that is temporary'."
    },
    {
      question: "Passage: The glass ceiling is a metaphor used to represent an invisible barrier that prevents a given demographic from rising beyond a certain level in a hierarchy.\n\nQuestion: Is the glass ceiling a physical object?",
      options: ["Yes", "No, it's a metaphor", "It is made of glass", "It is a window"],
      answer: "No, it's a metaphor",
      explanation: "Text says 'metaphor used to represent'."
    },
    {
      question: "Passage: Euphemism is a mild or indirect word or expression substituted for one considered to be too harsh or blunt.\n\nQuestion: Saying 'passed away' instead of 'died' is an example of?",
      options: ["Insult", "Euphemism", "Lie", "Metaphor"],
      answer: "Euphemism",
      explanation: "It substitutes a harsh word (died) with a mild one."
    },
    {
      question: "Passage: Procrastination is the action of delaying or postponing something. It is often linked to anxiety about the task.\n\nQuestion: Why might someone procrastinate?",
      options: ["They are lazy", "Anxiety about the task", "They have no time", "They finished it"],
      answer: "Anxiety about the task",
      explanation: "Text links it to 'anxiety about the task'."
    },
    {
      question: "Passage: The uncanny valley suggests that humanoid objects which appear almost, but not exactly, like real human beings elicit feelings of eeriness and revulsion.\n\nQuestion: When do robots look scary?",
      options: ["When they look like machines", "When they look almost human", "When they talk", "When they are broken"],
      answer: "When they look almost human",
      explanation: "Text says 'almost, but not exactly, like real human beings'."
    },
    {
      question: "Passage: Pareto Principle states that for many outcomes, roughly 80% of consequences come from 20% of causes.\n\nQuestion: What is another name for this?",
      options: ["50/50 Rule", "80/20 Rule", "Golden Rule", "Law of Averages"],
      answer: "80/20 Rule",
      explanation: "Text mentions 80% and 20%."
    },
    {
      question: "Passage: Circular reporting is a situation where a piece of information appears to come from multiple independent sources, but in reality comes from only one source.\n\nQuestion: Why is circular reporting misleading?",
      options: ["It is false", "It looks like multiple sources", "It is circular", "It is boring"],
      answer: "It looks like multiple sources",
      explanation: "Text says 'appears to come from multiple independent sources'."
    },
    {
      question: "Passage: Cognitive dissonance is the mental discomfort experienced by a person who holds two or more contradictory beliefs, ideas, or values.\n\nQuestion: What causes the discomfort?",
      options: ["Physical pain", "Contradictory beliefs", "Loud noises", "Hunger"],
      answer: "Contradictory beliefs",
      explanation: "Text says 'holds two or more contradictory beliefs'."
    },
    {
      question: "Passage: Gaslighting is a form of psychological manipulation in which a person seeks to sow seeds of doubt in a targeted individual, making them question their own memory or sanity.\n\nQuestion: What is the goal of gaslighting?",
      options: ["To light a fire", "To make someone doubt reality", "To make someone happy", "To teach a lesson"],
      answer: "To make someone doubt reality",
      explanation: "Text says 'question their own memory or sanity'."
    },
    {
      question: "Passage: Stockholm syndrome is a condition in which hostages develop a psychological alliance with their captors during captivity.\n\nQuestion: Who develops feelings for whom?",
      options: ["Captors for hostages", "Hostages for captors", "Police for hostages", "None"],
      answer: "Hostages for captors",
      explanation: "Text says 'hostages develop... alliance with their captors'."
    },
    {
      question: "Passage: The Streisand effect is a phenomenon whereby an attempt to hide, remove, or censor a piece of information has the unintended consequence of publicizing the information more widely.\n\nQuestion: What happens when you try to hide information?",
      options: ["It disappears", "It becomes more popular", "It stays secret", "It is forgotten"],
      answer: "It becomes more popular",
      explanation: "Text says 'publicizing the information more widely'."
    },
    {
      question: "Passage: Occam's Razor suggests that among competing hypotheses, the one with the fewest assumptions should be selected.\n\nQuestion: Which explanation is usually best?",
      options: ["The complex one", "The simple one", "The longest one", "The newest one"],
      answer: "The simple one",
      explanation: "Fewest assumptions implies simplicity."
    },
    {
      question: "Passage: Murphy's Law is an adage or epigram that is typically stated as: 'Anything that can go wrong will go wrong.'\n\nQuestion: What implies pessimism?",
      options: ["Cole's Law", "Murphy's Law", "Newton's Law", "Moore's Law"],
      answer: "Murphy's Law",
      explanation: "The quote 'Anything that can go wrong will go wrong' is pessimistic."
    },
    {
      question: "Passage: The mandate of heaven was the divine source of authority and the right to rule of China's early kings and emperors.\n\nQuestion: Who gave the right to rule?",
      options: ["The people", "The army", "The divine/Heaven", "The previous king"],
      answer: "The divine/Heaven",
      explanation: "Text says 'divine source of authority'."
    },
    {
      question: "Passage: Filibuster is a political procedure where one or more members of parliament or congress debate over a proposed piece of legislation so as to delay or entirely prevent a decision.\n\nQuestion: What is the purpose of a filibuster?",
      options: ["To pass laws", "To delay decisions", "To fight", "To leave early"],
      answer: "To delay decisions",
      explanation: "Text says 'delay or entirely prevent a decision'."
    },
    {
      question: "Passage: Gerrymandering is a practice intended to establish an unfair political advantage for a particular party or group by manipulating district boundaries.\n\nQuestion: What is manipulated in gerrymandering?",
      options: ["Votes", "District boundaries", "Money", "Media"],
      answer: "District boundaries",
      explanation: "Text explicitly says 'manipulating district boundaries'."
    }
  ]
};
