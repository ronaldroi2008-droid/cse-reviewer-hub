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
  // LEVEL 3: ADVANCED (50 Items) - CSE-style Inference & Main Idea
  // ============================================================
  advanced: [
    // 1
    {
      question: "Passage: Memo: All division chiefs are requested to submit their consolidated quarterly reports on or before April 15. Late submissions will delay the preparation of the regional performance summary, which is due to central office by April 20.\n\nQuestion: Why is it important to submit reports on or before April 15?",
      options: [
        "To give more time for field work",
        "To avoid delaying the regional summary",
        "To extend the deadline to April 30",
        "To lessen the number of reports"
      ],
      answer: "To avoid delaying the regional summary",
      explanation: "The memo clearly states that late submissions will delay the regional performance summary."
    },
    // 2
    {
      question: "Passage: Announcement: Due to scheduled maintenance, the online application system will be unavailable from 1:00 AM to 5:00 AM on Saturday. Users are advised to save their work and log out before 1:00 AM to avoid data loss.\n\nQuestion: What is the main purpose of the announcement?",
      options: [
        "To promote the online system",
        "To warn users about temporary unavailability",
        "To encourage users to work at night",
        "To advertise a new feature"
      ],
      answer: "To warn users about temporary unavailability",
      explanation: "The announcement informs users about system downtime and advises them to log out."
    },
    // 3
    {
      question: "Passage: Many government agencies now use digital documents instead of printed ones. This reduces paper consumption and saves storage space. However, it also requires employees to be familiar with basic computer skills.\n\nQuestion: Which statement best summarizes the passage?",
      options: [
        "Digital documents solve all office problems.",
        "Using digital documents has both benefits and requirements.",
        "Printed documents are better than digital documents.",
        "Employees no longer need to read documents."
      ],
      answer: "Using digital documents has both benefits and requirements.",
      explanation: "The passage mentions advantages (less paper, space) and a requirement (computer skills)."
    },
    // 4
    {
      question: "Passage: The barangay held a clean-up drive along the river. Volunteers collected plastic bottles, wrappers, and other trash. After several hours, the riverbank looked much cleaner, and residents promised to dispose of their garbage properly.\n\nQuestion: What can be inferred about the barangay before the clean-up drive?",
      options: [
        "It had no river",
        "The riverbank was dirty",
        "The residents always disposed of garbage properly",
        "There was no plastic waste"
      ],
      answer: "The riverbank was dirty",
      explanation: "The clean-up drive and collected trash imply the area was dirty before."
    },
    // 5
    {
      question: "Passage: Notice: The elevator is temporarily out of service due to technical inspection. Please use the stairways located at both ends of the hallway. We apologize for the inconvenience.\n\nQuestion: What is the tone of the notice?",
      options: ["Angry", "Apologetic", "Playful", "Threatening"],
      answer: "Apologetic",
      explanation: "The phrase 'We apologize for the inconvenience' shows an apologetic tone."
    },
    // 6
    {
      question: "Passage: During the seminar, the speaker emphasized the importance of time management. She said that even small delays, if repeated daily, can result in major backlogs by the end of the month.\n\nQuestion: What is the main point of the speaker?",
      options: [
        "Seminars are important for employees.",
        "Backlogs cannot be avoided.",
        "Small daily delays can grow into big problems.",
        "Delays are acceptable if work is hard."
      ],
      answer: "Small daily delays can grow into big problems.",
      explanation: "The speaker connects small delays with major backlogs."
    },
    // 7
    {
      question: "Passage: Mr. Santos always arrives at the office before 8:00 AM, even though the official time-in is 8:30 AM. He uses the extra time to review his tasks for the day.\n\nQuestion: What can we infer about Mr. Santos?",
      options: [
        "He dislikes his work.",
        "He is a punctual and prepared employee.",
        "He often forgets his tasks.",
        "He wants to leave early."
      ],
      answer: "He is a punctual and prepared employee.",
      explanation: "Arriving early and reviewing tasks show punctuality and preparation."
    },
    // 8
    {
      question: "Passage: The orientation for new employees covered office policies, leave benefits, and code of conduct. At the end, participants signed a form to confirm that they understood the guidelines.\n\nQuestion: Why were participants asked to sign a form?",
      options: [
        "To check their handwriting",
        "To confirm their understanding of the guidelines",
        "To punish latecomers",
        "To record their ID numbers"
      ],
      answer: "To confirm their understanding of the guidelines",
      explanation: "The form is for acknowledging they understood the orientation topics."
    },
    // 9
    {
      question: "Passage: In recent years, more people have chosen to commute by bicycle instead of using cars. This reduces traffic congestion and helps improve air quality in the city.\n\nQuestion: Which of the following is an advantage of using bicycles mentioned in the passage?",
      options: [
        "Bicycles are faster than cars.",
        "Bicycles reduce traffic and improve air quality.",
        "Bicycles require no maintenance.",
        "Bicycles are always safe."
      ],
      answer: "Bicycles reduce traffic and improve air quality.",
      explanation: "The passage explicitly states these two benefits."
    },
    // 10
    {
      question: "Passage: The scholarship program is open to students who maintain a grade point average of at least 90%. Applicants must also submit a recommendation letter from their adviser.\n\nQuestion: Who is eligible to apply for the scholarship?",
      options: [
        "Any student from the school",
        "Students with at least 90% average and a recommendation letter",
        "Students with perfect attendance only",
        "Students who join school clubs"
      ],
      answer: "Students with at least 90% average and a recommendation letter",
      explanation: "Both conditions are specified in the passage."
    },
    // 11
    {
      question: "Passage: When the typhoon warning was raised to Signal No. 3, classes were immediately suspended. Parents were advised to pick up their children as soon as possible.\n\nQuestion: What can be inferred about the weather situation?",
      options: [
        "It was very dangerous.",
        "It was sunny and calm.",
        "There was only light rain.",
        "The storm had already passed."
      ],
      answer: "It was very dangerous.",
      explanation: "Signal No. 3 and suspension of classes indicate a serious weather situation."
    },
    // 12
    {
      question: "Passage: Official Announcement: Effective next month, all employees must wear their identification cards at all times within the office premises. Security personnel are authorized to remind and report those who do not comply.\n\nQuestion: What is the main reason for this policy?",
      options: [
        "To improve office security and identification",
        "To punish forgetful employees",
        "To make ID cards more expensive",
        "To reduce visitors in the office"
      ],
      answer: "To improve office security and identification",
      explanation: "Wearing IDs helps security personnel identify people in the workplace."
    },
    // 13
    {
      question: "Passage: During the pandemic, many offices adopted a work-from-home arrangement. While this reduced commuting time, some employees found it difficult to separate work and personal life.\n\nQuestion: Which statement is supported by the passage?",
      options: [
        "Work-from-home has only benefits.",
        "Work-from-home has both advantages and challenges.",
        "Work-from-home is worse than office work in all ways.",
        "Employees prefer commuting."
      ],
      answer: "Work-from-home has both advantages and challenges.",
      explanation: "The passage mentions both a benefit (less commuting) and a difficulty (work–life boundary)."
    },
    // 14
    {
      question: "Passage: The barangay captain reminded residents that segregation of waste is required. Biodegradable waste should be placed in green containers, while non-biodegradable waste should be placed in yellow containers.\n\nQuestion: Where should plastic wrappers be placed?",
      options: [
        "In green containers",
        "In yellow containers",
        "In blue containers",
        "In any container"
      ],
      answer: "In yellow containers",
      explanation: "Plastic wrappers are non-biodegradable and belong in yellow containers."
    },
    // 15
    {
      question: "Passage: Grace scanned the bulletin board and saw her name under the list of successful examinees. Her hands trembled as she called her parents to share the news.\n\nQuestion: How is Grace feeling?",
      options: ["Disappointed", "Angry", "Relieved and happy", "Confused"],
      answer: "Relieved and happy",
      explanation: "Seeing her name on the successful list and calling her parents shows joy and relief."
    },
    // 16
    {
      question: "Passage: Job Posting: We are looking for a clerk with strong attention to detail and basic knowledge of spreadsheet software. Previous government experience is an advantage but not required.\n\nQuestion: Which applicant best fits the job description?",
      options: [
        "Someone who hates computers",
        "Someone who is careless but fast",
        "Someone who is careful and knows spreadsheets",
        "Someone who refuses to work with others"
      ],
      answer: "Someone who is careful and knows spreadsheets",
      explanation: "The job requires attention to detail and spreadsheet knowledge."
    },
    // 17
    {
      question: "Passage: Many patients fail to complete their prescribed antibiotics once they feel better. This behavior can lead to stronger bacteria that are harder to treat in the future.\n\nQuestion: What is the warning given in the passage?",
      options: [
        "Do not take antibiotics.",
        "Stop antibiotics once you feel better.",
        "Incomplete antibiotic use can create stronger bacteria.",
        "All bacteria are harmless."
      ],
      answer: "Incomplete antibiotic use can create stronger bacteria.",
      explanation: "The passage explains the risk of not completing prescriptions."
    },
    // 18
    {
      question: "Passage: Liza prefers reading printed books, while her younger brother enjoys reading on a tablet. Both, however, agree that reading helps them relax after a busy day.\n\nQuestion: What is the common belief of Liza and her brother?",
      options: [
        "Reading is boring.",
        "Reading helps them relax.",
        "Tablets are better than books.",
        "Only printed books are useful."
      ],
      answer: "Reading helps them relax.",
      explanation: "Despite different formats, they both see reading as relaxing."
    },
    // 19
    {
      question: "Passage: The community health center offers free blood pressure checks every Monday morning. Many senior citizens line up early to take advantage of the service.\n\nQuestion: Why do many senior citizens arrive early?",
      options: [
        "To avoid the heat and long lines",
        "To pay their bills",
        "To attend a party",
        "To apply for a passport"
      ],
      answer: "To avoid the heat and long lines",
      explanation: "Arriving early is usually to secure a place and avoid long waiting time."
    },
    // 20
    {
      question: "Passage: While working on the report, Ana noticed several numbers that did not match the source document. Instead of ignoring them, she checked again and corrected the errors.\n\nQuestion: What quality does Ana show?",
      options: [
        "Carelessness",
        "Honesty and thoroughness",
        "Laziness",
        "Impatience"
      ],
      answer: "Honesty and thoroughness",
      explanation: "She double-checks and corrects errors rather than ignoring them."
    },
    // 21
    {
      question: "Passage: The school canteen posted a reminder that outside food is not allowed, except for students with medical conditions who have written permission.\n\nQuestion: Which student may bring outside food?",
      options: [
        "Any student who wants to save money",
        "A student with written permission for medical reasons",
        "A student who dislikes canteen food",
        "A student who is late"
      ],
      answer: "A student with written permission for medical reasons",
      explanation: "The exception is clearly stated for medical conditions with written permission."
    },
    // 22
    {
      question: "Passage: Ramon spends an hour each night reviewing his notes, even when there is no scheduled quiz. He believes that studying a little every day is better than cramming.\n\nQuestion: What habit does Ramon practice?",
      options: [
        "Last-minute studying",
        "Consistent daily review",
        "Skipping review",
        "Relying only on group work"
      ],
      answer: "Consistent daily review",
      explanation: "He reviews notes every night, not just before quizzes."
    },
    // 23
    {
      question: "Passage: The notice said that water would be interrupted from 8:00 AM to 5:00 PM for pipe repairs. Residents were advised to store enough water beforehand.\n\nQuestion: What should residents do before 8:00 AM?",
      options: [
        "Complain to the barangay",
        "Store enough water",
        "Ignore the notice",
        "Open all faucets"
      ],
      answer: "Store enough water",
      explanation: "They need water during the interruption, so they must store it earlier."
    },
    // 24
    {
      question: "Passage: In the library, Carla chose a seat near the window where it was bright and quiet. She turned off her phone to avoid distractions while reviewing.\n\nQuestion: What can be concluded about Carla?",
      options: [
        "She likes noisy places.",
        "She wants to focus on her review.",
        "She prefers chatting with friends.",
        "She dislikes the library."
      ],
      answer: "She wants to focus on her review.",
      explanation: "Choosing a quiet spot and turning off her phone shows a desire to concentrate."
    },
    // 25
    {
      question: "Passage: Public parks provide a place for families to relax, children to play, and communities to hold events. They also offer trees and open spaces that improve air quality.\n\nQuestion: What is the main idea of the passage?",
      options: [
        "Public parks are only for children.",
        "Public parks are useful for rest, activities, and the environment.",
        "Public parks should be replaced with buildings.",
        "Public parks are expensive to maintain."
      ],
      answer: "Public parks are useful for rest, activities, and the environment.",
      explanation: "The passage lists several uses and benefits of parks."
    },
    // 26
    {
      question: "Passage: The supervisor praised the team for finishing the project ahead of schedule but reminded them that accuracy is more important than speed.\n\nQuestion: What was the supervisor's main reminder?",
      options: [
        "Speed is everything.",
        "Accuracy is more important than speed.",
        "They should work slower next time.",
        "The schedule was too short."
      ],
      answer: "Accuracy is more important than speed.",
      explanation: "Despite praise for speed, the emphasis is on accuracy."
    },
    // 27
    {
      question: "Passage: During the dry season, many areas experience water shortages. Simple practices like turning off the faucet while brushing teeth and fixing leaks can help conserve water.\n\nQuestion: Which action helps conserve water according to the passage?",
      options: [
        "Taking longer showers",
        "Leaving the faucet running",
        "Fixing leaks",
        "Watering plants at noon"
      ],
      answer: "Fixing leaks",
      explanation: "The passage gives fixing leaks as a water-saving practice."
    },
    // 28
    {
      question: "Passage: The barangay newsletter is delivered once a month. It contains announcements, schedules for medical missions, and reminders about local ordinances.\n\nQuestion: What is the newsletter mainly for?",
      options: [
        "Entertainment only",
        "Spreading community information",
        "Selling products",
        "Advertising businesses only"
      ],
      answer: "Spreading community information",
      explanation: "It contains announcements, schedules, and reminders for residents."
    },
    // 29
    {
      question: "Passage: When the lights suddenly went out, Ana calmly took out her flashlight and helped guide her co-workers down the stairs.\n\nQuestion: Which word best describes Ana's behavior?",
      options: ["Panicky", "Calm and helpful", "Careless", "Angry"],
      answer: "Calm and helpful",
      explanation: "She calmly used a flashlight and guided others."
    },
    // 30
    {
      question: "Passage: The office implemented a 'no plastic' policy in meetings. Instead of bottled water, pitchers and glasses are now used.\n\nQuestion: What is the purpose of this policy?",
      options: [
        "To save electricity",
        "To reduce plastic waste",
        "To shorten meetings",
        "To make water more expensive"
      ],
      answer: "To reduce plastic waste",
      explanation: "Replacing bottled water with pitchers minimizes plastic use."
    },
    // 31
    {
      question: "Passage: A poster on the wall states: \"Report any damaged office equipment immediately to the Administrative Unit.\" Below it is a list of telephone numbers.\n\nQuestion: What are employees expected to do when they see damaged equipment?",
      options: [
        "Repair it themselves",
        "Ignore it",
        "Report it to the Administrative Unit",
        "Throw it away"
      ],
      answer: "Report it to the Administrative Unit",
      explanation: "The poster clearly instructs them to report."
    },
    // 32
    {
      question: "Passage: During the training, participants were reminded to turn off their microphones when not speaking to avoid background noise during the online session.\n\nQuestion: Why should microphones be turned off when not speaking?",
      options: [
        "To save internet data",
        "To avoid background noise",
        "To end the meeting early",
        "To hide the participants"
      ],
      answer: "To avoid background noise",
      explanation: "The passage directly states this reason."
    },
    // 33
    {
      question: "Passage: The teacher gave the class a short story to read and asked them to underline unfamiliar words. Afterward, they looked up the meanings in a dictionary.\n\nQuestion: What skill is the teacher developing?",
      options: [
        "Guessing without reading",
        "Vocabulary and dictionary use",
        "Skipping difficult words",
        "Copying from classmates"
      ],
      answer: "Vocabulary and dictionary use",
      explanation: "Underlining unfamiliar words and using a dictionary improves vocabulary."
    },
    // 34
    {
      question: "Passage: A company policy states that employees must inform their supervisor at least one day in advance when filing a leave of absence, except in emergencies.\n\nQuestion: Which situation is an exception to the one-day notice?",
      options: [
        "Planned vacation",
        "Sudden illness",
        "Travel for leisure",
        "Personal errands"
      ],
      answer: "Sudden illness",
      explanation: "Sudden illness can be considered an emergency."
    },
    // 35
    {
      question: "Passage: The local government launched a tree-planting activity along the highway to reduce noise and provide shade.\n\nQuestion: What are two purposes of planting trees mentioned in the passage?",
      options: [
        "To reduce noise and provide shade",
        "To block the road and cause traffic",
        "To remove all signs",
        "To replace electric posts"
      ],
      answer: "To reduce noise and provide shade",
      explanation: "The passage mentions these two purposes explicitly."
    },
    // 36
    {
      question: "Passage: Paolo always waits for the last week before starting his projects. As a result, he often feels stressed and sometimes misses the deadline.\n\nQuestion: What behavior causes Paolo's stress?",
      options: [
        "Starting early",
        "Over-preparing",
        "Procrastinating or delaying work",
        "Asking for help"
      ],
      answer: "Procrastinating or delaying work",
      explanation: "He waits until the last week, which is procrastination."
    },
    // 37
    {
      question: "Passage: The notice on the door reads: \"Please knock and wait for a response before entering. Some transactions require privacy.\" \n\nQuestion: Why is it important to knock first?",
      options: [
        "To test the door",
        "To check the time",
        "To respect privacy",
        "To make noise"
      ],
      answer: "To respect privacy",
      explanation: "Privacy is mentioned as the reason for the instruction."
    },
    // 38
    {
      question: "Passage: Many senior high school graduates are unsure whether to work immediately or pursue further studies. Career guidance counselors help them weigh their options by explaining possible paths and requirements.\n\nQuestion: What is the role of career guidance counselors according to the passage?",
      options: [
        "To choose a course for the students",
        "To make students work immediately",
        "To help students understand their options",
        "To force students to study abroad"
      ],
      answer: "To help students understand their options",
      explanation: "Counselors explain possible paths and requirements."
    },
    // 39
    {
      question: "Passage: The security guard politely reminded the visitor to sign the logbook before entering the building. The visitor smiled and followed the instruction.\n\nQuestion: What can be said about the visitor?",
      options: [
        "He ignored the guard.",
        "He refused to sign.",
        "He cooperated with the security procedure.",
        "He argued loudly."
      ],
      answer: "He cooperated with the security procedure.",
      explanation: "He smiled and followed the instruction."
    },
    // 40
    {
      question: "Passage: A student wrote a complaint email using all capital letters and many exclamation marks. The school administrator replied, reminding the student to use respectful language in written communication.\n\nQuestion: What lesson is highlighted in the administrator's reply?",
      options: [
        "Emails should always be short.",
        "Capital letters are required.",
        "Respectful language is important in written communication.",
        "Complaints are not allowed."
      ],
      answer: "Respectful language is important in written communication.",
      explanation: "The reply focuses on respectful language, not on banning complaints."
    },
    // 41
    {
      question: "Passage: Marvin noticed that his electric bill increased after he started using an air conditioner every afternoon. He decided to set a schedule and use it only during the hottest hours.\n\nQuestion: What conclusion did Marvin likely reach?",
      options: [
        "The electric bill is unrelated to appliance use.",
        "Using the air conditioner more increases electricity cost.",
        "Only lights affect the electric bill.",
        "Electricity is always cheap."
      ],
      answer: "Using the air conditioner more increases electricity cost.",
      explanation: "He linked his increased usage to the higher bill."
    },
    // 42
    {
      question: "Passage: The barangay organized an information drive about proper handwashing and cough etiquette to prevent the spread of illness.\n\nQuestion: What is the main goal of the information drive?",
      options: [
        "To teach residents cooking skills",
        "To prevent the spread of illness",
        "To collect barangay fees",
        "To plan a fiesta"
      ],
      answer: "To prevent the spread of illness",
      explanation: "Handwashing and cough etiquette are health measures."
    },
    // 43
    {
      question: "Passage: The office set up a suggestion box where employees can anonymously submit ideas for improving services.\n\nQuestion: Why might the suggestions be anonymous?",
      options: [
        "To increase fear",
        "To protect employees who want to give honest feedback",
        "To punish employees",
        "To reveal their identities"
      ],
      answer: "To protect employees who want to give honest feedback",
      explanation: "Anonymity encourages open and honest suggestions."
    },
    // 44
    {
      question: "Passage: During the fire drill, employees were instructed to walk quickly but not run, and to avoid using the elevators.\n\nQuestion: Why are elevators not used during a fire drill?",
      options: [
        "They are too slow.",
        "They might stop working or become dangerous during a fire.",
        "They are only for managers.",
        "They cause noise."
      ],
      answer: "They might stop working or become dangerous during a fire.",
      explanation: "Elevators are unsafe in fire situations."
    },
    // 45
    {
      question: "Passage: The cooperative offers loans with lower interest rates to its members compared to commercial banks.\n\nQuestion: What advantage do cooperative members have?",
      options: [
        "They cannot borrow money.",
        "They receive higher interest on loans.",
        "They can borrow money at lower interest rates.",
        "They must pay more fees."
      ],
      answer: "They can borrow money at lower interest rates.",
      explanation: "This benefit is clearly stated in the passage."
    },
    // 46
    {
      question: "Passage: Lea noticed that whenever she drank coffee late at night, she found it difficult to fall asleep. She decided to drink only water after 6:00 PM.\n\nQuestion: What relationship did Lea observe?",
      options: [
        "Coffee helps her sleep.",
        "Coffee at night makes it harder for her to sleep.",
        "Water keeps her awake.",
        "Time does not affect sleep."
      ],
      answer: "Coffee at night makes it harder for her to sleep.",
      explanation: "Her difficulty sleeping is linked to drinking coffee late."
    },
    // 47
    {
      question: "Passage: The barangay hall posted a sign: \"Please line up properly. First-come, first-served.\" \n\nQuestion: What system is used to serve clients?",
      options: [
        "Random selection",
        "First-come, first-served basis",
        "Highest-paying first",
        "Friends of staff first"
      ],
      answer: "First-come, first-served basis",
      explanation: "The rule is clearly written on the sign."
    },
    // 48
    {
      question: "Passage: The new employee manual explains that government workers are expected to act with integrity, avoid conflicts of interest, and serve the public fairly.\n\nQuestion: Which value is emphasized in the manual?",
      options: [
        "Self-interest",
        "Integrity and fairness",
        "Favoring relatives",
        "Personal gain"
      ],
      answer: "Integrity and fairness",
      explanation: "The passage mentions acting with integrity and serving the public fairly."
    },
    // 49
    {
      question: "Passage: During enrollment, the school prioritizes returning students in the first two days, and opens remaining slots to new students afterward.\n\nQuestion: Who is served first during enrollment?",
      options: [
        "New students",
        "Visitors",
        "Returning students",
        "Teachers' relatives"
      ],
      answer: "Returning students",
      explanation: "The passage clearly states they are prioritized in the first two days."
    },
    // 50
    {
      question: "Passage: The local tourism office installed signboards showing directions to landmarks in both the local language and English.\n\nQuestion: Why were the signboards written in two languages?",
      options: [
        "To confuse visitors",
        "To help both local residents and foreign tourists",
        "To promote English only",
        "To make signs longer"
      ],
      answer: "To help both local residents and foreign tourists",
      explanation: "Using two languages makes the signs understandable to more people."
    }
  ],

  // ============================================================
  // LEVEL 4: EXPERT (50 Items) - Longer Passages, Deeper Inference
  // ============================================================
  expert: [
    // 1
    {
      question: "Passage: In many offices, people complain that meetings consume too much time but produce few concrete decisions. Often, agendas are unclear, participants arrive unprepared, and discussions go in circles. Yet, meetings remain necessary for coordinating tasks and sharing information. The challenge is not to remove meetings entirely, but to make them more focused and purposeful.\n\nQuestion: What is the main problem described in the passage?",
      options: [
        "People dislike their co-workers.",
        "Meetings take time but lack clear results.",
        "Meetings are no longer necessary.",
        "Offices should avoid coordination."
      ],
      answer: "Meetings take time but lack clear results.",
      explanation: "The passage highlights that meetings consume time without producing concrete decisions."
    },
    // 2
    {
      question: "Passage: A new government program offers livelihood training for out-of-school youth. Some residents criticize the program, saying that it will not solve unemployment overnight. However, supporters argue that giving young people skills in baking, repair work, and basic entrepreneurship can gradually reduce joblessness in the community.\n\nQuestion: Which statement best reflects the supporters' view?",
      options: [
        "The program is useless because it is slow.",
        "Skills training can slowly help reduce unemployment.",
        "Only cash assistance can solve unemployment.",
        "Youth should not be involved in business."
      ],
      answer: "Skills training can slowly help reduce unemployment.",
      explanation: "Supporters believe skills and training will gradually lessen joblessness."
    },
    // 3
    {
      question: "Passage: In a survey of commuters, many respondents said they preferred using public transportation if it was reliable and safe. They pointed out that heavy traffic and lack of parking made private car use stressful and expensive.\n\nQuestion: What condition would make commuters more willing to use public transportation?",
      options: [
        "If it is reliable and safe",
        "If parking is free",
        "If fuel prices are low",
        "If cars become cheaper"
      ],
      answer: "If it is reliable and safe",
      explanation: "The survey reveals that reliability and safety increase willingness to use public transport."
    },
    // 4
    {
      question: "Passage: A memo reminded staff that government property, such as laptops and projectors, should not be used for personal business. Although some employees think it is harmless to use office equipment after hours, such practice may create unfair advantages and blur the line between official and private activities.\n\nQuestion: Why is using government property for personal business discouraged?",
      options: [
        "Because the equipment is old",
        "Because it may lead to unfair and improper use",
        "Because employees work too slowly",
        "Because personal business is always illegal"
      ],
      answer: "Because it may lead to unfair and improper use",
      explanation: "The memo highlights unfair advantages and blurred boundaries as reasons."
    },
    // 5
    {
      question: "Passage: During a disaster drill, some employees treated the activity as a break and continued chatting instead of listening to instructions. The safety officer reminded everyone that drills are not mere formalities; they are practiced so people will know what to do in an actual emergency.\n\nQuestion: What mistaken attitude toward drills is shown in the passage?",
      options: [
        "They are chances to learn.",
        "They are serious safety activities.",
        "They are just breaks or formalities.",
        "They are more important than real emergencies."
      ],
      answer: "They are just breaks or formalities.",
      explanation: "Employees treated the drill lightly, as if it were only a break."
    },
    // 6
    {
      question: "Passage: Some employees believe that as long as they finish their tasks, it does not matter if they arrive late. However, constant tardiness affects teamwork. When one person is late, meetings cannot start on time, and others are forced to wait, wasting valuable working hours.\n\nQuestion: What is the main argument against the employees' belief?",
      options: [
        "Finishing tasks is not important.",
        "Tardiness only affects the late person.",
        "Constant tardiness disrupts the work of others.",
        "Late workers should work from home."
      ],
      answer: "Constant tardiness disrupts the work of others.",
      explanation: "The passage explains that others are forced to wait and meetings are delayed."
    },
    // 7
    {
      question: "Passage: Online learning has made education more accessible to people who live far from schools. Nonetheless, it also exposes the unequal access to gadgets and stable internet connection. Students from low-income families may be left behind not because they lack ability, but because they lack resources.\n\nQuestion: What inequality is highlighted in the passage?",
      options: [
        "Difference in students' intelligence",
        "Difference in access to devices and internet",
        "Difference in teachers' salaries",
        "Difference in school buildings"
      ],
      answer: "Difference in access to devices and internet",
      explanation: "The passage points to gadgets and internet as the key inequality."
    },
    // 8
    {
      question: "Passage: A barangay councilor proposed a curfew for minors, arguing that it would reduce incidents of youth-related disturbances at night. Critics worry that such a policy might unfairly target working students or those who help their parents in night markets.\n\nQuestion: What concern do critics raise about the curfew?",
      options: [
        "It might be too strict on all residents.",
        "It might unfairly affect minors with legitimate reasons to be outside.",
        "It will make streets too quiet.",
        "It will increase youth disturbances."
      ],
      answer: "It might unfairly affect minors with legitimate reasons to be outside.",
      explanation: "Critics focus on working students and helpers who may be out for valid reasons."
    },
    // 9
    {
      question: "Passage: The department’s new evaluation system includes not only individual performance, but also teamwork, punctuality, and adherence to ethical standards. This means that an employee who is technically skilled but consistently rude or dishonest may still receive a low overall rating.\n\nQuestion: What is the implication of the new evaluation system?",
      options: [
        "Only technical skills matter.",
        "Behavior and ethics are part of performance.",
        "Rudeness is acceptable if you are skilled.",
        "Teamwork is not important."
      ],
      answer: "Behavior and ethics are part of performance.",
      explanation: "The passage adds teamwork and ethical standards to the criteria."
    },
    // 10
    {
      question: "Passage: A reading comprehension test asked examinees to identify the main idea and supporting details of a passage. Many respondents copied entire sentences from the text without explaining their relevance, which resulted in low scores.\n\nQuestion: What common mistake did the respondents make?",
      options: [
        "They wrote too briefly.",
        "They copied without showing understanding.",
        "They used their own words only.",
        "They skipped the main idea."
      ],
      answer: "They copied without showing understanding.",
      explanation: "They copied sentences without explaining why those were the main ideas."
    },
    // 11
    {
      question: "Passage: An office installed CCTV cameras in hallways and common areas to increase security and deter theft. Management clarified that the cameras would not be placed inside comfort rooms or private offices.\n\nQuestion: What is management trying to balance with this decision?",
      options: [
        "Security and privacy",
        "Cost and profit",
        "Lighting and ventilation",
        "Work and vacation"
      ],
      answer: "Security and privacy",
      explanation: "Cameras improve security while avoiding sensitive private areas."
    },
    // 12
    {
      question: "Passage: The teacher asked her students to read a news article from two different sources. Although the basic facts were the same, the headlines and tone were slightly different. She then asked the class why the same event might be presented differently.\n\nQuestion: What skill is the teacher encouraging?",
      options: [
        "Memorizing dates only",
        "Accepting any article without question",
        "Comparing sources and evaluating bias",
        "Ignoring all news"
      ],
      answer: "Comparing sources and evaluating bias",
      explanation: "The activity asks students to notice differences in presentation."
    },
    // 13
    {
      question: "Passage: A barangay health worker noticed that attendance in free health seminars was low. When she interviewed residents, many said the topics were important but the schedule conflicted with their work hours.\n\nQuestion: Based on the passage, what is the most practical solution to increase attendance?",
      options: [
        "Cancel all seminars",
        "Hold seminars only on weekday mornings",
        "Adjust the schedule to times convenient for residents",
        "Force residents to attend"
      ],
      answer: "Adjust the schedule to times convenient for residents",
      explanation: "The main barrier is timing, so adjusting schedules is a reasonable solution."
    },
    // 14
    {
      question: "Passage: Some people believe that government offices are always slow and inefficient. However, studies show that many delays occur because requirements submitted by clients are incomplete or incorrect.\n\nQuestion: What is one factor contributing to delays according to the passage?",
      options: [
        "Always lazy government workers",
        "Incorrect or incomplete client requirements",
        "Lack of chairs in offices",
        "High salaries of employees"
      ],
      answer: "Incorrect or incomplete client requirements",
      explanation: "The passage directly points to clients’ incomplete documents."
    },
    // 15
    {
      question: "Passage: The senior citizen queue at a government office is meant to prioritize the elderly and persons with disabilities. Occasionally, younger relatives try to take advantage of the line by claiming to transact for their older family members.\n\nQuestion: What problem does the passage describe?",
      options: [
        "Senior citizens are not allowed to line up.",
        "Some people abuse benefits meant for vulnerable groups.",
        "Young people never help their elders.",
        "Queues are unnecessary."
      ],
      answer: "Some people abuse benefits meant for vulnerable groups.",
      explanation: "Younger relatives misuse the priority lane system."
    },
    // 16
    {
      question: "Passage: A farmer who used to rely solely on one crop decided to plant vegetables and raise poultry as well. When a storm destroyed most of his rice, he still had income from eggs and vegetables.\n\nQuestion: What lesson can be drawn from the farmer's experience?",
      options: [
        "Farming is always risky and hopeless.",
        "Focusing on one source of income is best.",
        "Diversifying sources of income can reduce risk.",
        "Farmers should rely only on livestock."
      ],
      answer: "Diversifying sources of income can reduce risk.",
      explanation: "Having multiple sources helped him survive the storm losses."
    },
    // 17
    {
      question: "Passage: The office intranet included a section for frequently asked questions (FAQs). After the FAQ page was posted, the number of repetitive emails sent to the HR department significantly decreased.\n\nQuestion: What effect did the FAQ page have?",
      options: [
        "It increased confusion.",
        "It reduced repetitive questions sent to HR.",
        "It prevented employees from sending any email.",
        "It removed the HR department."
      ],
      answer: "It reduced repetitive questions sent to HR.",
      explanation: "The passage states this effect clearly."
    },
    // 18
    {
      question: "Passage: A public information campaign on proper waste disposal uses posters, radio announcements, and community meetings. Officials hope that repeating the message through different channels will lead to long-term change in behavior.\n\nQuestion: What strategy is being used in the campaign?",
      options: [
        "Using only one mode of communication",
        "Relying on punishment alone",
        "Delivering consistent messages through multiple channels",
        "Ignoring the public"
      ],
      answer: "Delivering consistent messages through multiple channels",
      explanation: "Posters, radio, and meetings represent multiple channels."
    },
    // 19
    {
      question: "Passage: When a rumor spread that the office would soon close, some employees began to panic and look for new jobs. Management later clarified that only one satellite branch would be relocated, not the entire office.\n\nQuestion: What does this situation show about rumors?",
      options: [
        "Rumors always tell the truth.",
        "Rumors can cause unnecessary fear if not verified.",
        "Rumors should always be ignored.",
        "Rumors are issued officially."
      ],
      answer: "Rumors can cause unnecessary fear if not verified.",
      explanation: "Employees panicked before management clarified the true situation."
    },
    // 20
    {
      question: "Passage: A training facilitator noticed that whenever she invited participants to share their ideas, the same few people answered. To encourage quieter participants, she introduced small group discussions before asking for answers in plenary.\n\nQuestion: What is the facilitator trying to achieve with small group discussions?",
      options: [
        "To shorten the training",
        "To limit the number of speakers",
        "To give more participants a chance to speak",
        "To avoid any sharing"
      ],
      answer: "To give more participants a chance to speak",
      explanation: "Small groups can help shy participants share before speaking in plenary."
    },
    // 21
    {
      question: "Passage: An exam question asked: \"What is the main idea of the passage?\" Many test takers chose a sentence that appeared at the beginning, even though it was only an example, not the central point.\n\nQuestion: What common misconception about main ideas is shown here?",
      options: [
        "The main idea is always in the title.",
        "The main idea is always at the end.",
        "The main idea is always the first sentence.",
        "The main idea can never be paraphrased."
      ],
      answer: "The main idea is always the first sentence.",
      explanation: "Students assumed the first sentence automatically contained the main idea."
    },
    // 22
    {
      question: "Passage: A barangay captain proudly reported that the community's crime rate had gone down after streetlights were installed in dark alleys. While it is difficult to prove a direct cause, residents say they now feel safer walking at night.\n\nQuestion: Which statement is most reasonable based on the passage?",
      options: [
        "Streetlights definitely eliminated all crime.",
        "Streetlights may have contributed to a safer environment.",
        "Streetlights have no effect on safety.",
        "Crime increased after streetlights."
      ],
      answer: "Streetlights may have contributed to a safer environment.",
      explanation: "The report and residents’ feelings support this reasonable conclusion."
    },
    // 23
    {
      question: "Passage: A policy on official travel requires employees to submit liquidations within five working days after returning from a trip. This ensures transparency and allows the office to update its financial records promptly.\n\nQuestion: What is the purpose of the five-day liquidation requirement?",
      options: [
        "To delay financial reports",
        "To confuse employees",
        "To ensure transparency and timely financial updates",
        "To prevent official travel"
      ],
      answer: "To ensure transparency and timely financial updates",
      explanation: "The passage directly states these reasons."
    },
    // 24
    {
      question: "Passage: Some people think that if an information is printed, it must be true. However, errors can appear in books, newspapers, and websites. Critical reading means checking sources, dates, and evidence before fully believing a claim.\n\nQuestion: What quality does critical reading require?",
      options: [
        "Believing everything printed",
        "Never reading anything",
        "Questioning and verifying information",
        "Memorizing all details"
      ],
      answer: "Questioning and verifying information",
      explanation: "The passage emphasizes checking sources, dates, and evidence."
    },
    // 25
    {
      question: "Passage: A job applicant claimed to be \"proficient\" in spreadsheet software, but during the exam, he struggled with basic formulas. The panel realized that some applicants exaggerate their skills in resumes.\n\nQuestion: What lesson does the panel learn from this experience?",
      options: [
        "Resumes are always accurate.",
        "Skill tests are unnecessary.",
        "Claims in resumes should be verified through testing.",
        "Spreadsheets are unimportant."
      ],
      answer: "Claims in resumes should be verified through testing.",
      explanation: "The applicant's struggle showed the need for verification."
    },
    // 26
    {
      question: "Passage: A proposal to build a small park in an empty lot received mixed reactions. Some residents welcomed the idea of green space and a playground for children. Others worried about noise and maintenance costs.\n\nQuestion: Which statement best describes the community's reaction?",
      options: [
        "Everyone supports the park.",
        "Everyone opposes the park.",
        "Residents have both positive and negative views.",
        "No one cares about the park."
      ],
      answer: "Residents have both positive and negative views.",
      explanation: "The passage mentions welcoming and worrying reactions."
    },
    // 27
    {
      question: "Passage: The office encourages employees to suggest improvements to processes. However, when suggestions are ignored without explanation, employees may stop sharing their ideas.\n\nQuestion: What consequence may result from ignoring suggestions?",
      options: [
        "Employees become more active.",
        "Employees stop giving ideas.",
        "Processes automatically improve.",
        "More suggestions are submitted."
      ],
      answer: "Employees stop giving ideas.",
      explanation: "Feeling ignored discourages future participation."
    },
    // 28
    {
      question: "Passage: A student who once failed an exam decided to treat the failure as feedback. He reviewed his errors, asked his teacher for advice, and adjusted his study habits. On the next exam, his score improved significantly.\n\nQuestion: What attitude toward failure does the student demonstrate?",
      options: [
        "Failure is permanent.",
        "Failure is a reason to give up.",
        "Failure can be used as a learning opportunity.",
        "Failure has no value."
      ],
      answer: "Failure can be used as a learning opportunity.",
      explanation: "He uses the failure to improve his future performance."
    },
    // 29
    {
      question: "Passage: A health advisory warned that posting personal information, such as full address and daily routine, on social media can make people vulnerable to crime. Users are encouraged to adjust privacy settings and think carefully before sharing.\n\nQuestion: What is the main message of the advisory?",
      options: [
        "Social media should be banned.",
        "Sharing personal details online can pose risks.",
        "Everyone must share their daily routine.",
        "Privacy settings are useless."
      ],
      answer: "Sharing personal details online can pose risks.",
      explanation: "The advisory warns about vulnerability to crime due to oversharing."
    },
    // 30
    {
      question: "Passage: A neighborhood association observed that areas with community gardens experienced less vandalism. They theorized that when residents feel ownership of a shared space, they are more likely to protect it.\n\nQuestion: What is the association's theory?",
      options: [
        "Gardens are only for decoration.",
        "Residents ignore shared spaces.",
        "A sense of ownership encourages people to care for shared spaces.",
        "Vandalism cannot be reduced."
      ],
      answer: "A sense of ownership encourages people to care for shared spaces.",
      explanation: "The passage links community gardens and reduced vandalism through ownership."
    },
    // 31
    {
      question: "Passage: In many offices, workers expect IT staff to solve all technology-related issues immediately. However, IT teams often have limited personnel and must prioritize critical problems that affect larger operations.\n\nQuestion: What misunderstanding about IT staff does the passage address?",
      options: [
        "They do not have any work.",
        "They can fix all problems instantly.",
        "They should not prioritize tasks.",
        "They are responsible only for emails."
      ],
      answer: "They can fix all problems instantly.",
      explanation: "The passage explains that IT must prioritize due to limited resources."
    },
    // 32
    {
      question: "Passage: A government office placed a suggestion box in a corner where few people pass by. Although management was proud of installing the box, almost no suggestions were received.\n\nQuestion: What factor likely contributed to the low number of suggestions?",
      options: [
        "Citizens had no ideas.",
        "The box was placed in an inconvenient and unnoticed location.",
        "The box was too big.",
        "The office had too many visitors."
      ],
      answer: "The box was placed in an inconvenient and unnoticed location.",
      explanation: "Location affects whether people see and use the box."
    },
    // 33
    {
      question: "Passage: When a new policy is introduced, some employees quickly read the memo and ask questions if they are confused. Others ignore it and later claim they were not informed.\n\nQuestion: According to the passage, what behavior leads to misunderstanding of policies?",
      options: [
        "Reading memos carefully",
        "Clarifying instructions",
        "Ignoring memos and not asking questions",
        "Taking notes during meetings"
      ],
      answer: "Ignoring memos and not asking questions",
      explanation: "Not reading or clarifying results in misunderstanding."
    },
    // 34
    {
      question: "Passage: A commuter compared the cost of using a private car and taking public transportation. When he considered fuel, parking fees, and maintenance, he realized that driving daily was more expensive than he had thought.\n\nQuestion: What realization did the commuter arrive at?",
      options: [
        "Driving is always cheaper.",
        "Public transport has no cost.",
        "The true cost of driving includes more than just fuel.",
        "Cost is not important."
      ],
      answer: "The true cost of driving includes more than just fuel.",
      explanation: "He recognized parking and maintenance as additional expenses."
    },
    // 35
    {
      question: "Passage: A teacher noticed that students who explained lessons to their classmates mastered the material better than those who only listened. She encouraged peer teaching as part of her strategy.\n\nQuestion: What principle of learning is illustrated in the passage?",
      options: [
        "Teaching others can deepen one's understanding.",
        "Listening is the only way to learn.",
        "Group work is always ineffective.",
        "Only teachers should speak in class."
      ],
      answer: "Teaching others can deepen one's understanding.",
      explanation: "Students who explained lessons learned more deeply."
    },
    // 36
    {
      question: "Passage: An environmental group distributed reusable bags at a market. At first, people accepted them politely but continued to ask for plastic bags. Only after the market started charging for plastic did most shoppers begin using the reusable ones.\n\nQuestion: What factor actually changed shoppers' behavior?",
      options: [
        "Free reusable bags alone",
        "Charging a fee for plastic bags",
        "Posters on the walls",
        "Radio advertisements"
      ],
      answer: "Charging a fee for plastic bags",
      explanation: "Behavior shifted after there was a cost to using plastic."
    },
    // 37
    {
      question: "Passage: A local health official reported that handwashing facilities in schools reduced absenteeism due to common colds and diarrhea. She cautioned, however, that facilities alone are not enough; students must also be consistently reminded to use them.\n\nQuestion: What additional requirement is needed besides facilities?",
      options: [
        "Closing schools",
        "Reminding students to practice handwashing regularly",
        "Removing soap from bathrooms",
        "Limiting water supply"
      ],
      answer: "Reminding students to practice handwashing regularly",
      explanation: "The official notes that reminders and habits are needed."
    },
    // 38
    {
      question: "Passage: A leadership workshop stressed that giving clear instructions is not enough; leaders must also listen to feedback from their team. Otherwise, they may miss important information from the frontlines.\n\nQuestion: According to the passage, what might happen if leaders do not listen?",
      options: [
        "They will always be correct.",
        "They may miss important information from their team.",
        "Their team will work harder.",
        "Communication will improve automatically."
      ],
      answer: "They may miss important information from their team.",
      explanation: "Lack of listening means losing input from people on the ground."
    },
    // 39
    {
      question: "Passage: An announcement stated that starting next month, all official communications will be sent through email instead of printed memos. Employees without regular access to email were advised to coordinate with their supervisors.\n\nQuestion: What potential problem does the announcement anticipate?",
      options: [
        "Employees will stop reading.",
        "Some employees may not have regular email access.",
        "There will be no internet in the office.",
        "Printed memos are always better."
      ],
      answer: "Some employees may not have regular email access.",
      explanation: "The advice to coordinate shows concern about access."
    },
    // 40
    {
      question: "Passage: A barangay placed trash bins in public areas, but they quickly overflowed because collection was not scheduled frequently. Residents began to complain that the bins themselves became sources of foul smell.\n\nQuestion: What problem did the barangay fail to address?",
      options: [
        "Placing bins in public areas",
        "Choosing bin colors",
        "Planning regular garbage collection",
        "Informing residents that bins exist"
      ],
      answer: "Planning regular garbage collection",
      explanation: "Overflow and smell show inadequate collection schedule."
    },
    // 41
    {
      question: "Passage: When reviewing a contract, a careful reader checks not only the main paragraphs but also the footnotes and small-print sections. Important conditions, such as penalties and hidden fees, may be found there.\n\nQuestion: What is the main advice of the passage?",
      options: [
        "Ignore small print in contracts.",
        "Rely only on verbal explanations.",
        "Read all parts of a contract, including small print.",
        "Sign contracts immediately."
      ],
      answer: "Read all parts of a contract, including small print.",
      explanation: "Footnotes and small print may contain important conditions."
    },
    // 42
    {
      question: "Passage: A student preparing for the Civil Service Exam divided his review time into short, regular sessions instead of one long session the day before the test. He also practiced answering sample questions under time pressure.\n\nQuestion: Which study strategy is illustrated?",
      options: [
        "Cramming and no practice",
        "Spaced practice and simulation of exam conditions",
        "Ignoring time limits",
        "Memorizing without review"
      ],
      answer: "Spaced practice and simulation of exam conditions",
      explanation: "He reviews regularly and practices under time pressure."
    },
    // 43
    {
      question: "Passage: In a public hearing, one resident argued against building a new health center, saying, \"We have lived without it for years, so we do not need it now.\" The chairperson responded that past survival does not mean improvements are unnecessary.\n\nQuestion: What faulty reasoning did the resident use?",
      options: [
        "If something did not exist before, it is never needed.",
        "Health services are always free.",
        "All changes are bad.",
        "Only rich people get sick."
      ],
      answer: "If something did not exist before, it is never needed.",
      explanation: "The resident assumes that because they survived without it, it is unnecessary."
    },
    // 44
    {
      question: "Passage: A company that promotes \"work–life balance\" encourages employees to take their full lunch break and discourages sending work emails late at night, except in emergencies.\n\nQuestion: What is the company trying to prevent?",
      options: [
        "Employees enjoying their work",
        "Employees resting on weekends",
        "Work intruding too much into personal time",
        "Employees taking vacations"
      ],
      answer: "Work intruding too much into personal time",
      explanation: "Limiting late-night emails protects personal time."
    },
    // 45
    {
      question: "Passage: A barangay captain noticed that community assemblies were poorly attended when scheduled on weekday afternoons. Attendance improved when meetings were moved to Saturday mornings.\n\nQuestion: What can be inferred about residents' schedules?",
      options: [
        "They are always free in the afternoon.",
        "They are likely busy on weekday afternoons.",
        "They dislike assemblies.",
        "They work only on weekends."
      ],
      answer: "They are likely busy on weekday afternoons.",
      explanation: "Higher attendance on Saturday implies weekday conflict."
    },
    // 46
    {
      question: "Passage: A workplace safety poster says: \"Reporting near-misses helps prevent future accidents.\" A near-miss is an incident where no one is hurt, but there was a real possibility of harm.\n\nQuestion: Why is reporting near-misses important?",
      options: [
        "Because only serious accidents matter",
        "Because near-misses show where problems could lead to real accidents",
        "Because workers should be punished",
        "Because reports increase paperwork only"
      ],
      answer: "Because near-misses show where problems could lead to real accidents",
      explanation: "They reveal weak points in safety before actual harm occurs."
    },
    // 47
    {
      question: "Passage: When a rumor about layoffs started spreading, one employee decided to ask her supervisor directly instead of guessing. The supervisor clarified that there were no plans for layoffs, only a reassigning of tasks.\n\nQuestion: What positive behavior did the employee demonstrate?",
      options: [
        "Spreading the rumor further",
        "Jumping to conclusions",
        "Seeking information from a reliable source",
        "Ignoring all information"
      ],
      answer: "Seeking information from a reliable source",
      explanation: "She asked her supervisor instead of relying on rumors."
    },
    // 48
    {
      question: "Passage: A public poster about dengue fever lists symptoms such as high fever, severe headache, and pain behind the eyes. It also urges residents to remove stagnant water where mosquitoes breed.\n\nQuestion: What is the dual purpose of the poster?",
      options: [
        "To sell medicine and raise taxes",
        "To inform about symptoms and promote prevention",
        "To advertise hospitals",
        "To scare children"
      ],
      answer: "To inform about symptoms and promote prevention",
      explanation: "It lists symptoms and suggests removing stagnant water."
    },
    // 49
    {
      question: "Passage: A regional director sends a memo congratulating employees for meeting their performance targets despite limited resources. She adds that the real challenge is to maintain quality of service while improving systems, not just to increase numbers.\n\nQuestion: What does the director emphasize as the real challenge?",
      options: [
        "Reducing service quality",
        "Counting more outputs only",
        "Maintaining quality while improving systems",
        "Ignoring performance targets"
      ],
      answer: "Maintaining quality while improving systems",
      explanation: "She stresses quality of service, not just quantity."
    },
    // 50
    {
      question: "Passage: A Civil Service Exam reviewer explains that in reading comprehension, there may be more than one statement that is true, but only one that directly answers the question. Test takers must read all options carefully before choosing.\n\nQuestion: What key advice does the reviewer give?",
      options: [
        "Choose the longest option.",
        "Pick the first true statement you see.",
        "Select the option that directly answers the question, even if others are true.",
        "Ignore the question and focus on the passage only."
      ],
      answer: "Select the option that directly answers the question, even if others are true.",
      explanation: "The reviewer highlights the difference between true and directly relevant options."
    }
  ]
};

