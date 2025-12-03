// questions/analytical_cognitive_reasoning.js
// ==========================================
// ANALYTICAL – COGNITIVE REASONING (200 ITEMS TARGET)
// Beginner: 50 items – Basic logic, order, patterns, conclusions
// ==========================================

window.ANALYTICAL_QUESTION_BANK = window.ANALYTICAL_QUESTION_BANK || {};

window.ANALYTICAL_QUESTION_BANK["cognitive_reasoning"] = {
  // ==========================================
  // LEVEL 1: BEGINNER (50 ITEMS)
  // ==========================================
  beginner: [
    // 1
    {
      question: `A is taller than B. B is taller than C. Who is the tallest?`,
      options: ["A", "B", "C", "Cannot be determined"],
      answer: "A",
      explanation: `From the statements: A > B and B > C, so A is taller than both B and C.`
    },

    // 2
    {
      question: `A is older than B. C is younger than B. Who is the youngest?`,
      options: ["A", "B", "C", "Cannot be determined"],
      answer: "C",
      explanation: `If C is younger than B, and B is younger than A, C is the youngest.`
    },

    // 3
    {
      question: `In a line of four people, from left to right: Ana, Ben, Carlo, Dina. Who is standing between Ana and Carlo?`,
      options: ["Ana", "Ben", "Carlo", "Dina"],
      answer: "Ben",
      explanation: `Order: Ana – Ben – Carlo – Dina. The person between Ana and Carlo is Ben.`
    },

    // 4
       {
      question: `If all roses are flowers and some flowers are red, which of the following may be true based on the statements?`,
      options: [
        "All flowers are roses",
        "Some roses are red",
        "No roses are red",
        "All red things are roses"
      ],
      answer: "Some roses are red",
      explanation: `All roses are within the set of flowers, and some flowers are red, so it is possible (though not certain) that some roses are among the red flowers.`
    },

    // 5
    {
      question: `All teachers in a school wear ID cards. Maria does not wear an ID card. What can you conclude?`,
      options: [
        "Maria is a teacher",
        "Maria is not a teacher",
        "Maria is a student",
        "Conclusion cannot be made"
      ],
      answer: "Maria is not a teacher",
      explanation: `If ALL teachers wear IDs and Maria does NOT, she cannot be a teacher.`
    },

    // 6
    {
      question: `Statement: All cats are animals. Some animals are pets. Which conclusion is correct?`,
      options: [
        "All pets are cats",
        "Some cats may be pets",
        "No cats are pets",
        "All animals are cats"
      ],
      answer: "Some cats may be pets",
      explanation: `Cats are part of the animal group, and some animals are pets, so it's possible that some cats are in the pet group.`
    },

    // 7
    {
      question: `Four friends — Lito, Mia, Nena, and Odie — sit in a row. Lito is at the left end. Odie is at the right end. Mia sits next to Lito. Who sits next to Odie?`,
      options: ["Lito", "Mia", "Nena", "Cannot be determined"],
      answer: "Nena",
      explanation: `Order: Lito – Mia – Nena – Odie. So Nena is next to Odie.`
    },

    // 8
    {
      question: `Joy is facing north. She turns 90° to her right, then 90° to her right again. Which direction is she facing now?`,
      options: ["North", "South", "East", "West"],
      answer: "South",
      explanation: `From north, a right turn → east; another right turn → south.`
    },

    // 9
       // 9
    {
      question: `Eric is facing east. He turns 90° to his left, then 90° to his left again. Which direction is he facing now?`,
      options: ["East", "West", "North", "South"],
      answer: "West",
      explanation: `From east, left turn → north; another left turn → west.`
    },


    // 10
    {
      question: `Which of the following is the odd one out?`,
      options: ["Dog", "Cat", "Cow", "Rose"],
      answer: "Rose",
      explanation: `Dog, cat, and cow are animals; rose is a plant.`
    },

    // 11
    {
      question: `Which of the following is the odd one out?`,
      options: ["Monday", "Tuesday", "Friday", "January"],
      answer: "January",
      explanation: `Monday, Tuesday, and Friday are days of the week; January is a month.`
    },

    // 12
    {
      question: `Which of the following is the odd one out?`,
      options: ["2, 4, 6", "3, 5, 7", "8, 10, 12", "14, 16, 18"],
      answer: "3, 5, 7",
      explanation: `All groups contain even numbers except 3, 5, 7 which are all odd.`
    },

    // 13
    {
      question: `Find the next letter in the series: A, C, E, G, ?`,
      options: ["H", "I", "J", "K"],
      answer: "I",
      explanation: `Each letter jumps 2 positions: A(+2)C(+2)E(+2)G(+2)I.`
    },

    // 14
    {
      question: `Find the next letter in the series: Z, X, V, T, ?`,
      options: ["S", "R", "Q", "P"],
      answer: "R",
      explanation: `Going backward in the alphabet by 2 letters: Z, X, V, T, R.`
    },

    // 15
    {
      question: `Which pair follows the same pattern as: HOT : COLD?`,
      options: ["UP : DOWN", "LEFT : RIGHT", "DAY : MORNING", "BLUE : COLOR"],
      answer: "UP : DOWN",
      explanation: `HOT and COLD are opposites. UP and DOWN are also opposites.`
    },

    // 16
  
    {
      question: `In a certain code, CAT is written as DBU (each letter is shifted +1). How is DOG written in the same code?`,
      options: ["EPG", "EPH", "DPE", "FPG"],
      answer: "EPH",
      explanation: `D→E, O→P, G→H. So DOG becomes EPH.`
    },

    // 17
    {
      question: `If 1 = A, 2 = B, 3 = C, and so on, what word is represented by 3–1–2?`,
      options: ["ABC", "CAB", "CBA", "BAC"],
      answer: "CAB",
      explanation: `3→C, 1→A, 2→B, so the word is CAB.`
    },

    // 18
    {
      question: `Statement: Some students are tall. All tall people like sports.  
Which conclusion is best?`,
      options: [
        "All students like sports",
        "Some students like sports",
        "No students like sports",
        "All sports players are tall"
      ],
      answer: "Some students like sports",
      explanation: `Some students are in the tall group, and all tall people like sports, so some students like sports.`
    },

    // 19
    {
      question: `Statement: All engineers are good in math. Carlo is not good in math.  
What can you conclude?`,
      options: [
        "Carlo is an engineer",
        "Carlo is not an engineer",
        "Carlo hates math",
        "No conclusion possible"
      ],
      answer: "Carlo is not an engineer",
      explanation: `If ALL engineers are good in math, and Carlo is NOT, he cannot belong to the engineer group.`
    },

    // 20
    {
      question: `If the opposite of TRUE is FALSE, what is the opposite of INCREASE?`,
      options: ["RAISE", "GROW", "DECREASE", "ADD"],
      answer: "DECREASE",
      explanation: `INCREASE and DECREASE are opposites.`
    },

    // 21
    {
      question: `Liza ranks 5th from the top and 6th from the bottom in her class. How many students are in the class?`,
      options: ["9", "10", "11", "12"],
      answer: "10",
      explanation: `Total = (position from top) + (position from bottom) − 1 = 5 + 6 − 1 = 10.`
    },

    // 22
    {
      question: `In a family:  
• Anna is the mother of Ben.  
• Ben is the brother of Carla.  
What is the relationship of Anna to Carla?`,
      options: ["Aunt", "Mother", "Sister", "Grandmother"],
      answer: "Mother",
      explanation: `If Anna is Ben’s mother and Ben is Carla’s brother, Anna is also Carla’s mother.`
    },

    // 23
       {
      question: `JOHN is coded as KPIO. How is MARY coded using the same pattern?`,
      options: ["NBSZ", "NBSD", "NBSA", "NBQZ"],
      answer: "NBSZ",
      explanation: `Each letter shifts +1: J→K, O→P, H→I, N→O. So M→N, A→B, R→S, Y→Z → NBSZ.`
    },


    // 24
    {
      question: `Which of the following groups of words are all fruits?`,
      options: [
        "Apple, Carrot, Mango",
        "Banana, Guava, Papaya",
        "Tomato, Cabbage, Orange",
        "Potato, Grape, Celery"
      ],
      answer: "Banana, Guava, Papaya",
      explanation: `Banana, guava, and papaya are all fruits.`
    },

    // 25
    {
      question: `Arrange the words in logical order:  
1. Seed  
2. Plant  
3. Fruit  
4. Flower`,
      options: [
        "1, 2, 3, 4",
        "1, 2, 4, 3",
        "2, 1, 4, 3",
        "2, 4, 3, 1"
      ],
      answer: "1, 2, 4, 3",
      explanation: `Seed → plant → flower → fruit is the natural growth order.`
    },

    // 26
    {
      question: `Arrange the words in logical order:  
1. Primary School  
2. College  
3. High School  
4. Kindergarten`,
      options: [
        "4, 1, 3, 2",
        "1, 4, 3, 2",
        "4, 3, 1, 2",
        "1, 3, 4, 2"
      ],
      answer: "4, 1, 3, 2",
      explanation: `Kindergarten → primary school → high school → college.`
    },

    // 27
    {
      question: `Which conclusion follows from the statement:  
"No cars are bicycles."`,
      options: [
        "Some cars are bicycles",
        "All bicycles are cars",
        "Cars and bicycles are different vehicles",
        "Cars are faster than bicycles"
      ],
      answer: "Cars and bicycles are different vehicles",
      explanation: `The statement says they do not overlap, so they are different groups of vehicles.`
    },

    // 28
    {
      question: `If yesterday was Monday, what day will it be tomorrow?`,
      options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      answer: "Wednesday",
      explanation: `If yesterday = Monday, today = Tuesday, tomorrow = Wednesday.`
    },

    // 29
    {
      question: `A bus leaves every 30 minutes. The first trip is at 6:00 AM. What time is the 4th trip?`,
      options: ["6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM"],
      answer: "7:30 AM",
      explanation: `Trips: 6:00, 6:30, 7:00, 7:30 → 4th trip is 7:30 AM.`
    },

    // 30
    {
      question: `Four shapes are given: circle, square, triangle, cube. Which is different in type?`,
      options: ["Circle", "Square", "Triangle", "Cube"],
      answer: "Cube",
      explanation: `Circle, square, and triangle are flat (2D); cube is solid (3D).`
    },

    // 31
    {
      question: `Which of the following lists things from lightest to heaviest (usually)?`,
      options: [
        "Stone, Feather, Truck",
        "Feather, Stone, Truck",
        "Truck, Stone, Feather",
        "Stone, Truck, Feather"
      ],
      answer: "Feather, Stone, Truck",
      explanation: `Feather is very light, stone heavier, truck heaviest.`
    },

    // 32
    {
      question: `If a clock shows 3:00, where is the hour hand pointing?`,
      options: ["At 12", "Between 2 and 3", "At 3", "Between 3 and 4"],
      answer: "At 3",
      explanation: `Exactly 3:00 means the hour hand points at 3.`
    },

    // 33
    {
      question: `Statement: Some nurses are men. All nurses are trained.  
Which is certainly true?`,
      options: [
        "Some trained people are men",
        "All trained people are nurses",
        "All men are nurses",
        "No men are trained"
      ],
      answer: "Some trained people are men",
      explanation: `Some nurses are men, and all nurses are trained → some trained people are men.`
    },

    // 34
      // 34
    {
      question: `Which of the following is arranged in correct alphabetical order?`,
      options: [
        "Ant, Bat, Cat",
        "Cat, Car, Cup",
        "Dog, Deer, Duck",
        "Fan, Face, Fanatic"
      ],
      answer: "Ant, Bat, Cat",
      explanation: `Ant (A), Bat (B), Cat (C) is in proper A–Z order.`
    },


    // 35
    {
      question: `Which one does NOT belong to the group?  
Pen, Pencil, Eraser, Plate`,
      options: ["Pen", "Pencil", "Eraser", "Plate"],
      answer: "Plate",
      explanation: `Pen, pencil, and eraser are writing tools; plate is not.`
    },

    // 36
    {
      question: `If BLUE is coded as 2541 and BLOW is coded as 2547, which digit represents W?`,
      options: ["1", "4", "5", "7"],
      answer: "7",
      explanation: `Comparing BLUE (2541) and BLOW (2547), only W is new and is coded as 7.`
    },

    // 37
    {
      question: `In a certain code, 3 1 2 means "I like apples".  
1 4 5 means "I like oranges".  
Which number stands for "like"?`,
      options: ["1", "2", "3", "4"],
      answer: "1",
      explanation: `Common words: "I like" appear in both phrases. Common number is 1, so 1 = like (or I). Given typical pattern, 1 is the shared word.`
    },

    // 38
    {
      question: `Which of the following is a valid conclusion?  
Premise: All lawyers are professionals. Some professionals are teachers.`,
      options: [
        "Some lawyers are teachers",
        "All teachers are lawyers",
        "Some professionals may be lawyers",
        "All professionals are lawyers"
      ],
      answer: "Some professionals may be lawyers",
      explanation: `Lawyers ⊆ professionals, so lawyers are part of the professional group.`
    },

    // 39
    {
      question: `A number is doubled and then 4 is added. The result is 18. What is the original number?`,
      options: ["6", "7", "8", "9"],
      answer: "7",
      explanation: `Let x be the number: 2x + 4 = 18 → 2x = 14 → x = 7.`
    },

    // 40
    {
      question: `Which of the following sentences shows cause and effect?`,
      options: [
        "She studied hard, so she passed the exam.",
        "She studied hard and went to the mall.",
        "She passed the exam and celebrated.",
        "She passed the exam or she failed."
      ],
      answer: "She studied hard, so she passed the exam.",
      explanation: `Studying hard (cause) leads to passing the exam (effect).`
    },

    // 41
    {
      question: `Two statements:  
1. Some books are pens.  
2. All pens are blue.  
Which conclusion is correct?`,
      options: [
        "Some books are blue",
        "All books are blue",
        "No books are blue",
        "Pens are not blue"
      ],
      answer: "Some books are blue",
      explanation: `Books that are also pens belong to the blue group, so some books are blue.`
    },

    // 42
    {
      question: `Which of the following is the best conclusion?  
"All doctors are educated. Some educated people are rich."`,
      options: [
        "All doctors are rich",
        "Some doctors may be rich",
        "No doctors are rich",
        "All rich people are doctors"
      ],
      answer: "Some doctors may be rich",
      explanation: `Doctors belong to educated; some educated people are rich, so some doctors may be in the rich group.`
    },

    // 43
    {
      question: `Tom walks 3 km east, then 4 km north. Which of the following is TRUE?`,
      options: [
        "He is 7 km from the start",
        "He is 5 km from the start",
        "He is 1 km from the start",
        "He returned to the start"
      ],
      answer: "He is 5 km from the start",
      explanation: `It forms a right triangle: distance = √(3² + 4²) = 5 km.`
    },

    // 44
    {
      question: `Which option completes the pattern?  
2, 4, 8, 16, ?`,
      options: ["18", "20", "24", "32"],
      answer: "32",
      explanation: `Each term is ×2: 2, 4, 8, 16, 32.`
    },

    // 45
    {
      question: `Which option completes the pattern?  
5, 10, 15, 20, ?`,
      options: ["22", "25", "30", "35"],
      answer: "25",
      explanation: `Add 5 each time: 5, 10, 15, 20, 25.`
    },

    // 46
    {
      question: `Which of the following is an example of deductive reasoning?`,
      options: [
        "I saw three black birds, so all birds are black.",
        "All squares are rectangles. This figure is a square. So it is a rectangle.",
        "My friend likes apples, so everyone likes apples.",
        "Yesterday it rained, so today it will rain."
      ],
      answer: "All squares are rectangles. This figure is a square. So it is a rectangle.",
      explanation: `This uses a general rule applied to a specific case — classic deduction.`
    },

    // 47
    {
      question: `If ALL A are B, and ALL B are C, which conclusion is correct?`,
      options: [
        "All C are A",
        "Some C are not A",
        "All A are C",
        "No A are C"
      ],
      answer: "All A are C",
      explanation: `If A ⊆ B and B ⊆ C, then A ⊆ C.`
    },

    // 48
    {
      question: `Phrase pattern: big : small = tall : ?`,
      options: ["Short", "Thin", "Wide", "Long"],
      answer: "Short",
      explanation: `Big is opposite of small; tall is opposite of short.`
    },

    // 49
    {
      question: `If 2 + 2 = 4 and 3 + 3 = 6, then which statement follows the same pattern?`,
      options: ["4 + 4 = 9", "5 + 5 = 10", "6 + 6 = 11", "7 + 7 = 20"],
      answer: "5 + 5 = 10",
      explanation: `All correct equations follow normal addition; only 5 + 5 = 10 is true.`
    },

    // 50
    {
      question: `Which of the following is the BEST example of logical thinking in daily life?`,
      options: [
        "Studying only when you feel like it",
        "Checking the weather before planning a picnic",
        "Buying something because it is popular",
        "Following others without question"
      ],
      answer: "Checking the weather before planning a picnic",
      explanation: `You use information (weather) to make a decision — that is logical reasoning.`
    }
  ],

 // questions/analytical_cognitive_reasoning.js
// ==========================================
// ANALYTICAL – COGNITIVE REASONING (200 ITEMS TARGET)
// Beginner: 50 items – Basic logic, order, patterns, conclusions
// ==========================================


  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 ITEMS)
  // ==========================================
  intermediate: [
    // 1
    {
      question: `In a row of people facing north, Liza is 3rd from the left and 5th from the right. How many people are in the row?`,
      options: ["7", "8", "9", "10"],
      answer: "7",
      explanation: `Total = left position + right position − 1 = 3 + 5 − 1 = 7.`
    },

    // 2
    {
      question: `Five friends — Ana, Ben, Carlo, Dina, and Emil — sit in a row.  
Ana is somewhere to the left of Carlo. Dina is to the right of Carlo.  
Ben is at one end.  
If Ben is at the left end, who must be at the right end?`,
      options: ["Ana", "Carlo", "Dina", "Emil"],
      answer: "Dina",
      explanation: `With Ben at the left end and Dina to the right of Carlo, Dina ends up at the rightmost position.`
    },

    // 3
    {
      question: `Six boxes are stacked vertically: A is above B, C is below B, D is above A, E is below C, and F is at the very bottom. Which box is at the top?`,
      options: ["A", "B", "D", "E"],
      answer: "D",
      explanation: `Order from top: D, A, B, C, E, F.`
    },

    // 4
    {
      question: `Ryan walks 4 km east, then 3 km north, then 4 km west. How far is he from his starting point?`,
      options: ["1 km", "3 km", "4 km", "5 km"],
      answer: "3 km",
      explanation: `East 4 then west 4 cancel out; he is 3 km north from the start.`
    },

    // 5
    {
      question: `A person faces south. He turns 45° clockwise, then 90° counterclockwise. Which direction is he now facing?`,
      options: ["East", "West", "Southwest", "Southeast"],
      answer: "Southeast",
           explanation: `From south, a 45° clockwise turn points to southwest. From southwest, a 90° counterclockwise turn points to southeast.`
    },

    // 6
    {
      question: `In a family, P is the father of Q and R. Q is the sister of R. R is the father of S. What is the relationship of P to S?`,
      options: ["Father", "Uncle", "Grandfather", "Cousin"],
      answer: "Grandfather",
      explanation: `P is parent of R, and R is parent of S, so P is the grandparent of S.`
    },

    // 7
    {
      question: `A is the mother of B. C is the father of B. D is the brother of C. What is D's relationship to A?`,
      options: ["Brother", "Brother-in-law", "Cousin", "Uncle"],
      answer: "Brother-in-law",
      explanation: `D is C's brother, so to A (C's wife), D is a brother-in-law.`
    },

    // 8
    {
      question: `Statement: All doctors are professionals. Some professionals are artists.  
Which conclusion is valid?`,
      options: [
        "Some doctors are artists",
        "Some artists are doctors",
        "Some professionals may be doctors",
        "All artists are doctors"
      ],
      answer: "Some professionals may be doctors",
      explanation: `Doctors belong to the professional group; professionals may include doctors and artists.`
    },

    // 9
    {
      question: `Statement: No athletes are lazy. Some students are athletes.  
Which conclusion is correct?`,
      options: [
        "Some students are not lazy",
        "All students are not lazy",
        "Some lazy people are athletes",
        "No students are athletes"
      ],
      answer: "Some students are not lazy",
      explanation: `Students who are athletes cannot be lazy, so those students are not lazy.`
    },

    // 10
    {
      question: `If all A are B, and some B are C, which statement must be true?`,
      options: [
        "All C are A",
        "Some A may be C",
        "No C are A",
        "All B are A"
      ],
      answer: "Some A may be C",
      explanation: `A is inside B; some B are C, so there may be overlap between A and C.`
    },

    // 11
    {
      question: `Which pair has the same relationship as: AUTHOR : BOOK?`,
      options: [
        "Singer : Song",
        "Teacher : Student",
        "Driver : Road",
        "Chef : Restaurant"
      ],
      answer: "Singer : Song",
      explanation: `An author creates a book; a singer creates or performs a song.`
    },

    // 12
    {
      question: `Which pair is NOT an example of opposites?`,
      options: [
        "Increase : Decrease",
        "Hot : Cold",
        "Near : Far",
        "Happy : Joyful"
      ],
      answer: "Happy : Joyful",
      explanation: `Increase/decrease, hot/cold, near/far are opposites; happy/joyful are similar.`
    },

    // 13
    {
      question: `Find the missing number: 3, 6, 12, 24, ?`,
      options: ["36", "40", "48", "60"],
      answer: "48",
      explanation: `Each term is doubled: ×2 each step.`
    },

    // 14
    {
      question: `Find the missing number: 2, 5, 10, 17, ?`,
      options: ["24", "25", "26", "27"],
      answer: "26",
      explanation: `Differences: +3, +5, +7, +9, so next is 17 + 9 = 26.`
    },

    // 15
    {
      question: `A code language:  
FOOD → GPPE  
Using the same pattern, what is BOOK?`,
      options: ["CPPL", "CPLL", "COOP", "BPPL"],
      answer: "CPPL",
      explanation: `Each letter is shifted +1: B→C, O→P, O→P, K→L.`
    },

    // 16
    {
      question: `In a certain code, PEN is written as 741 and NET is written as 139.  
The common letter is N. Which digit stands for N?`,
      options: ["1", "3", "4", "7"],
      answer: "1",
      explanation: `Both words contain N, and both codes share digit 1, so N = 1.`
    },

    // 17
    {
      question: `Choose the odd one out:  
(4, 9, 16), (25, 36, 49), (2, 3, 4), (64, 81, 100)`,
      options: [
        "(4, 9, 16)",
        "(25, 36, 49)",
        "(2, 3, 4)",
        "(64, 81, 100)"
      ],
      answer: "(2, 3, 4)",
      explanation: `All other groups are perfect squares; 2, 3, 4 are not all perfect squares.`
    },

    // 18
    {
      question: `Choose the odd one out:  
South, East, Right, West`,
      options: ["South", "East", "Right", "West"],
      answer: "Right",
      explanation: `South, east, and west are directions; "right" is relative orientation.`
    },

    // 19
    {
      question: `A shop sells pens, pencils, erasers, and rulers.  
If every pen buyer also buys a ruler, and Carlo bought a ruler but no pencil, what can we conclude?`,
      options: [
        "Carlo bought a pen",
        "Carlo did not buy a pen",
        "Carlo must buy an eraser",
        "Conclusion cannot be made"
      ],
      answer: "Conclusion cannot be made",
      explanation: `Buying a ruler does not guarantee buying a pen; only pen buyers must buy rulers.`
    },

    // 20
    {
      question: `Three statements:  
1. Some cats are black.  
2. All black things are cute.  
3. All cute things are expensive.  
Which is true?`,
      options: [
        "Some cats are expensive",
        "All cats are expensive",
        "No black cats are expensive",
        "Cats are never cute"
      ],
      answer: "Some cats are expensive",
      explanation: `Black cats are cute and all cute things are expensive, so some cats are expensive.`
    },

    // 21
    {
      question: `Mike's rank from the top of a class is 12th and from the bottom is 19th. How many students are in the class?`,
      options: ["29", "30", "31", "32"],
      answer: "30",
      explanation: `Total = 12 + 19 − 1 = 30.`
    },

    // 22
    {
      question: `In an exam, Ana scored more than Ben but less than Carlo. Dina scored less than Ben. Who scored the highest?`,
      options: ["Ana", "Ben", "Carlo", "Dina"],
      answer: "Carlo",
      explanation: `Order: Carlo > Ana > Ben > Dina. Carlo has the highest score.`
    },

    // 23
    {
      question: `Four numbers are: 3, 5, 8, and X.  
The average (mean) is 7. What is X?`,
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: `Sum = 7 × 4 = 28. 3 + 5 + 8 = 16, so X = 28 − 16 = 12.`
    },

    // 24
    {
      question: `If today is Thursday, what day will it be 10 days from now?`,
      options: ["Saturday", "Sunday", "Monday", "Tuesday"],
      answer: "Sunday",
      explanation: `10 ÷ 7 = 1 remainder 3; move 3 days ahead: Thursday → Friday → Saturday → Sunday.`
    },

    // 25
    {
      question: `A train leaves every 40 minutes. The first trip is at 6:00 AM.  
What time is the 5th trip?`,
      options: ["8:00 AM", "8:20 AM", "8:40 AM", "9:00 AM"],
      answer: "8:40 AM",
      explanation: `Trips: 6:00, 6:40, 7:20, 8:00, 8:40.`
    },

    // 26
    {
      question: `Arrange these in logical order:  
1. College  
2. Kindergarten  
3. Job  
4. High School  
5. Primary School`,
      options: [
        "2, 5, 4, 1, 3",
        "2, 5, 1, 4, 3",
        "5, 2, 4, 1, 3",
        "2, 4, 5, 1, 3"
      ],
      answer: "2, 5, 4, 1, 3",
      explanation: `Kindergarten → primary → high school → college → job.`
    },

    // 27
    {
      question: `Arrange events in logical order:  
1. Interview  
2. Application  
3. Job offer  
4. Job search`,
      options: [
        "4, 2, 1, 3",
        "2, 4, 1, 3",
        "4, 1, 2, 3",
        "2, 1, 4, 3"
      ],
      answer: "4, 2, 1, 3",
      explanation: `Job search → application → interview → job offer.`
    },

    // 28
    {
      question: `If 2★3 = 2² + 3 = 7 and 3★4 = 3² + 4 = 13, what is 4★5?`,
      options: ["16", "21", "24", "29"],
      answer: "21",
      explanation: `4★5 = 4² + 5 = 16 + 5 = 21.`
    },

    // 29
    {
      question: `If @ is defined as a@b = a + 2b, what is 4@7?`,
      options: ["11", "14", "18", "24"],
      answer: "18",
      explanation: `4@7 = 4 + 2×7 = 4 + 14 = 18.`
    },

    // 30
     // 30
    {
      question: `In a code language, each vowel is replaced by the next vowel in the sequence A–E–I–O–U (A→E, E→I, I→O, O→U, U→A). Consonants stay the same. How is "MATE" written in this code?`,
      options: ["METI", "MITA", "MATE", "MITE"],
      answer: "METI",
      explanation: `M and T are consonants, so they stay the same. A→E and E→I, so "MATE" becomes "METI".`
    },


    // 31
    {
      question: `Three friends — Jon, Ken, and Leo — have different pets: cat, dog, bird.  
Jon does not have a dog. Ken does not have a cat.  
Who has the bird?`,
      options: ["Jon", "Ken", "Leo", "Cannot be determined"],
      answer: "Leo",
      explanation: `If Jon ≠ dog and Ken ≠ cat, assign Jon→cat, Ken→dog, Leo→bird.`
    },

    // 32
    {
      question: `A number is increased by 20% and then decreased by 20%. What happens to the number?`,
      options: [
        "Returns to original",
        "Becomes 4% less",
        "Becomes 4% more",
        "Becomes 20% less"
      ],
      answer: "Becomes 4% less",
      explanation: `Multiply by 1.2 then 0.8 → 0.96 of original (4% less).`
    },

    // 33
    {
      question: `Which of the following is a valid inference?  
"Many office workers use computers."`,
      options: [
        "All office workers use computers",
        "Some office workers use computers",
        "No office workers avoid computers",
        "Computers are only for offices"
      ],
      answer: "Some office workers use computers",
      explanation: `"Many" at least means "some".`
    },

    // 34
    {
      question: `If all mangoes are fruits and some fruits are green, which statement is definitely true?`,
      options: [
        "All mangoes are green",
        "Some mangoes may be green",
        "No mango is green",
        "All green things are mangoes"
      ],
      answer: "Some mangoes may be green",
      explanation: `Mangoes are inside fruits; some fruits are green, so some mangoes could be green.`
    },

    // 35
    {
      question: `In a game, each correct answer gives 4 points and each wrong answer gives −1 point.  
If a student answered 15 questions and scored 45 points, how many correct answers did he have?`,
      options: ["9", "10", "11", "12"],
      answer: "12",
      explanation: `Let c = correct, w = wrong. c + w = 15, 4c − w = 45. Solve to get c = 12.`
    },

    // 36
    {
      question: `Choose the best conclusion:  
"All drivers must have a license. Some licensed people are teachers."`,
      options: [
        "Some drivers are teachers",
        "All teachers are drivers",
        "Some drivers may be teachers",
        "No teachers can drive"
      ],
      answer: "Some drivers may be teachers",
      explanation: `Drivers ⊆ licensed, some licensed = teachers → possible overlap.`
    },

    // 37
    {
      question: `Choose the odd one out:  
Triangle, Rectangle, Circle, Cube`,
      options: ["Triangle", "Rectangle", "Circle", "Cube"],
      answer: "Cube",
      explanation: `Cube is 3D; others are 2D shapes.`
    },

    // 38
    {
      question: `Choose the odd one out:  
Doctor, Nurse, Patient, Dentist`,
      options: ["Doctor", "Nurse", "Patient", "Dentist"],
      answer: "Patient",
      explanation: `Doctor, nurse, and dentist are medical professionals; patient is not.`
    },

    // 39
    {
      question: `Find the next term: AB, BC, CD, DE, ?`,
      options: ["EF", "FG", "DF", "CE"],
      answer: "EF",
      explanation: `Each pair shifts one letter forward in the alphabet.`
    },

    // 40
    {
      question: `Find the next term: AZ, BY, CX, DW, ?`,
      options: ["EV", "EU", "FV", "FU"],
      answer: "EV",
      explanation: `First letter moves forward (A,B,C,D,E); second moves backward (Z,Y,X,W,V).`
    },

    // 41
    {
      question: `If "RAIN" is coded as 18-1-9-14 (using A=1, B=2, ...), what is "SUN"?`,
      options: ["19-21-13", "19-20-14", "19-21-14", "18-21-14"],
      answer: "19-21-14",
      explanation: `S=19, U=21, N=14.`
    },

    // 42
    {
      question: `Statement: "If it rains, the picnic will be cancelled."  
Which is a valid contrapositive?`,
      options: [
        "If the picnic is cancelled, then it rained.",
        "If the picnic is not cancelled, then it did not rain.",
        "If it does not rain, the picnic is not cancelled.",
        "If it rains, the picnic is not cancelled."
      ],
      answer: "If the picnic is not cancelled, then it did not rain.",
      explanation: `Contrapositive of "If P then Q" is "If not Q then not P".`
    },

    // 43
    {
      question: `A statement: "All hardworking students pass the exam."  
Which is a valid conclusion?`,
      options: [
        "All who passed are hardworking",
        "Some who passed may not be hardworking",
        "No hardworking student fails",
        "Some hardworking students fail"
      ],
      answer: "No hardworking student fails",
      explanation: `If all hardworking pass, then none of them fail.`
    },

    // 44
    {
      question: `If 6 % 3 = 15 and 8 % 4 = 24, where a % b = a × b − b, what is 10 % 5?`,
      options: ["45", "50", "55", "60"],
      answer: "45",
      explanation: `10 % 5 = 10×5 − 5 = 50 − 5 = 45.`
    },

    // 45
    {
      question: `A sequence follows the rule: multiply by 2 and subtract 1.  
Starting from 3: 3, 5, 9, 17, ?`,
      options: ["31", "33", "35", "37"],
      answer: "33",
      explanation: `3×2−1=5; 5×2−1=9; 9×2−1=17; 17×2−1=33.`
    },

    // 46
    {
      question: `Two buses leave the same station at the same time.  
Bus A goes north at 40 km/h, Bus B goes east at 30 km/h.  
After 2 hours, approximately how far apart are they?`,
      options: ["50 km", "70 km", "80 km", "100 km"],
      answer: "100 km",
      explanation: `Distances: 80 km north, 60 km east; separation = √(80²+60²)=100 km.`
    },

    // 47
    {
      question: `Which is the best example of inductive reasoning?`,
      options: [
        "Using a formula to solve all similar problems",
        "Observing a pattern in numbers and guessing the next term",
        "Applying a law that always holds",
        "Using a proven theorem"
      ],
      answer: "Observing a pattern in numbers and guessing the next term",
      explanation: `Inductive reasoning moves from specific examples to a general guess.`
    },

    // 48
    {
      question: `Which statement is an assumption in:  
"She must be a teacher because she is carrying many test papers."`,
      options: [
        "Only teachers carry test papers",
        "Teachers never carry test papers",
        "Students often carry test papers",
        "Test papers are always heavy"
      ],
      answer: "Only teachers carry test papers",
      explanation: `The reasoning assumes that carrying test papers uniquely identifies a teacher.`
    },

    // 49
    {
      question: `A and B always tell the truth. C always lies.  
C says: "A said that B is lying."  
What can you conclude?`,
      options: [
        "A called B a liar",
        "A did not say B is lying",
        "B is lying",
        "No conclusion"
      ],
      answer: "A did not say B is lying",
      explanation: `C lies, so his statement about what A said is false.`
    },

    // 50
    {
      question: `Which is the BEST example of critical thinking in daily life?`,
      options: [
        "Believing any information shared by friends",
        "Checking several sources before sharing news online",
        "Forwarding a message because it is viral",
        "Agreeing with the majority without thinking"
      ],
      answer: "Checking several sources before sharing news online",
      explanation: `Critical thinking involves verifying information before accepting or spreading it.`
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 ITEMS)
  // ==========================================
  advanced: [
    // 1
    {
      question: `Five students — A, B, C, D, and E — sit in a row facing north.  
• C is not at any end.  
• D is to the right of C.  
• A is to the left of B.  
• E is at one of the ends.  
If A is second from the left, who is in the middle?`,
      options: ["A", "B", "C", "D"],
      answer: "C",
      explanation: `Possible arrangement: E, A, C, D, B. C is in the middle.`
    },

    // 2
    {
      question: `Six people — P, Q, R, S, T, and U — sit around a circular table facing the center.  
• P is between Q and R.  
• T is second to the left of R.  
• S is opposite Q.  
If U is to the immediate right of Q, who is to the left of P?`,
      options: ["Q", "R", "S", "T"],
      answer: "Q",
      explanation: `Drawing the circle with the given constraints leads to Q on P's left.`
    },

    // 3
    {
      question: `A, B, C, D, and E are standing in a straight line facing north, not necessarily in that order.  
• B is somewhere between A and C.  
• D is to the immediate right of C.  
• E is at the far right.  
Who is at the far left?`,
      options: ["A", "B", "C", "D"],
      answer: "A",
      explanation: `Line: A, B, C, D, E satisfies all conditions.`
    },

    // 4
    {
      question: `A person walks 5 km north, then 12 km east, then 5 km south. How far is he from his starting point?`,
      options: ["10 km", "12 km", "13 km", "17 km"],
      answer: "12 km",
      explanation: `Net movement: 12 km east, north-south cancels (5 up, 5 down).`
    },

    // 5
       {
      question: `A man is facing east. He turns 135° clockwise, then 90° counterclockwise. Which direction is he facing now?`,
      options: ["North", "South", "West", "Southeast"],
      answer: "Southeast",
      explanation: `From east, a 135° clockwise turn points to southwest. Turning 90° counterclockwise from southwest points to southeast.`
    },


    // 6
    {
      question: `Four persons — J, K, L, and M — are of different ages.  
• J is older than K.  
• L is younger than M.  
• M is younger than J.  
Which of the following is definitely true?`,
      options: [
        "J is the oldest",
        "K is the youngest",
        "L is younger than J",
        "M is older than J"
      ],
      answer: "L is younger than J",
      explanation: `M < J and L < M imply L < J.`
    },

    // 7
    {
      question: `In a family of six — P, Q, R, S, T, and U:  
• P is married to Q.  
• R is their son.  
• S is P's brother.  
• T is Q's sister.  
• U is S's wife.  
What is the relationship of U to R?`,
      options: ["Mother", "Aunt", "Grandmother", "Cousin"],
      answer: "Aunt",
      explanation: `S is R's uncle; S's wife U is R's aunt.`
    },

    // 8
    {
      question: `Statement: "All engineers are good at math. Some engineers are musicians."  
Which conclusion is valid?`,
      options: [
        "All musicians are engineers",
        "Some musicians are good at math",
        "No musician is good at math",
        "All who are good at math are engineers"
      ],
      answer: "Some musicians are good at math",
      explanation: `Engineers are good at math; some engineers are musicians, so some musicians are good at math.`
    },

    // 9
    {
      question: `Statement: "Some teachers are strict. All strict people are feared."  
Which conclusion is valid?`,
      options: [
        "All teachers are feared",
        "Some teachers are feared",
        "No teacher is feared",
        "All feared people are teachers"
      ],
      answer: "Some teachers are feared",
      explanation: `Strict teachers are feared, so at least some teachers are feared.`
    },

    // 10
    {
      question: `If all A are B, some B are C, and no C are D, which statement must be true?`,
      options: [
        "Some A are C",
        "No A are C",
        "Some B are not D",
        "All B are D"
      ],
      answer: "Some B are not D",
      explanation: `Since some B are C and no C are D, those B are not D.`
    },

    // 11
    {
      question: `Choose the figure that does NOT belong to the group:  
1) Triangle  
2) Square  
3) Pentagon  
4) Circle`,
      options: ["Triangle", "Square", "Pentagon", "Circle"],
      answer: "Circle",
      explanation: `Others have straight sides; circle has no straight sides.`
    },

    // 12
    {
      question: `Which group of words shows the same type of relationship as:  
KEY : LOCK?`,
      options: [
        "Chalk : Blackboard",
        "Password : Account",
        "Pen : Paper",
        "Knife : Spoon"
      ],
      answer: "Password : Account",
      explanation: `Key opens a lock; password opens an account.`
    },

    // 13
    {
      question: `Find the missing number: 1, 4, 9, 16, 25, ?`,
      options: ["30", "32", "35", "36"],
      answer: "36",
      explanation: `Squares: 1², 2², 3², 4², 5², 6².`
    },

    // 14
    {
      question: `Find the missing number: 2, 6, 12, 20, 30, ?`,
      options: ["36", "40", "42", "44"],
      answer: "42",
      explanation: `Differences: +4, +6, +8, +10, next +12 → 30+12=42.`
    },

    // 15
    
       {
      question: `In a code, every consonant moves two letters forward, and every vowel moves one letter backward.  
What is the code for "DOG"?`,
      options: ["FNI", "FNE", "FPG", "EPH"],
      answer: "FNI",
      explanation: `D (consonant) → F (two forward), O (vowel) → N (one backward), G (consonant) → I (two forward), so DOG becomes FNI.`
    },


    // 16
    {
      question: `In another code, AB = 4, BC = 6, CD = 8, so EF = ?  
Rule: XY = (position of X + position of Y).`,
      options: ["10", "11", "12", "13"],
      answer: "11",
      explanation: `E=5, F=6, so EF=5+6=11.`
    },

    // 17
    {
      question: `Three statements:  
1. No cats are dogs.  
2. Some pets are cats.  
3. Some pets are dogs.  
Which is true?`,
      options: [
        "Some pets are neither cats nor dogs",
        "All pets are cats or dogs",
        "No pets are cats",
        "No pets are dogs"
      ],
      answer: "Some pets are neither cats nor dogs",
      explanation: `Since some pets are cats and some are dogs but the sets are disjoint, other kinds of pets may exist.`
    },

    // 18
    {
      question: `If "APPLE" is coded as 50 using A=1, B=2, ..., Z=26 and adding all letter values, how is "DOG" coded?`,
      options: ["19", "22", "26", "30"],
      answer: "26",
      explanation: `D=4, O=15, G=7; total = 4+15+7=26.`
    },

    // 19
    {
      question: `A teacher says: "If you study, you will pass."  
Which of the following is a valid contrapositive?`,
      options: [
        "If you pass, then you studied.",
        "If you did not pass, then you did not study.",
        "If you did not study, you will pass.",
        "If you pass, you did not study."
      ],
      answer: "If you did not pass, then you did not study.",
      explanation: `Contrapositive of "If P then Q" is "If not Q then not P".`
    },

    // 20
    {
      question: `Choose the best inference:  
"Most employees in this company are under 40."`,
      options: [
        "All employees are under 40",
        "Some employees are under 40",
        "No employees are under 40",
        "Exactly half are under 40"
      ],
      answer: "Some employees are under 40",
      explanation: `"Most" implies at least "some".`
    },

    // 21
    {
      question: `Two trains leave the same station at the same time.  
One goes north at 60 km/h, the other south at 80 km/h.  
How far apart are they after 2 hours?`,
      options: ["120 km", "200 km", "240 km", "280 km"],
      answer: "280 km",
      explanation: `North train: 120 km; south train: 160 km; total separation 280 km.`
    },

    // 22
    {
      question: `A sequence is defined as: a₁ = 2, and aₙ = aₙ₋₁ + 3.  
What is a₆?`,
      options: ["14", "15", "16", "17"],
      answer: "17",
      explanation: `2, 5, 8, 11, 14, 17 → a₆ = 17.`
    },

    // 23
      {
      question: `If a star ★ b = (a × b) + (a + b), what is 3 ★ 4?`,
      options: ["19", "21", "23", "25"],
      answer: "19",
      explanation: `Using the rule a★b = a×b + (a + b): 3★4 = 3×4 + (3 + 4) = 12 + 7 = 19.`
    },


    // 24
    {
      question: `Three boxes are labeled APPLES, ORANGES, and MIXED.  
Each label is wrong.  
If you can pick one fruit from one box only, from which box should you pick to correctly relabel all boxes?`,
      options: ["APPLES", "ORANGES", "MIXED", "Any box"],
      answer: "MIXED",
      explanation: `Since all labels are wrong, the MIXED box contains only one type; this reveals the correct arrangement.`
    },

    // 25
    {
      question: `Which is the best example of a false cause fallacy?`,
      options: [
        "I got sick after eating ice cream, so ice cream always makes people sick.",
        "I failed because I did not study.",
        "The streets are wet because it rained.",
        "She passed because she prepared well."
      ],
      answer: "I got sick after eating ice cream, so ice cream always makes people sick.",
      explanation: `It assumes one event always causes another based on a single case.`
    },

    // 26
    {
      question: `A statement: "Every square is a rectangle, but not every rectangle is a square."  
Which statement is true?`,
      options: [
        "Squares and rectangles are the same",
        "Squares form a subset of rectangles",
        "Rectangles form a subset of squares",
        "Squares and rectangles never overlap"
      ],
      answer: "Squares form a subset of rectangles",
      explanation: `All squares meet the definition of rectangles.`
    },

    // 27
     // 27
    {
      question: `Three persons — X, Y, Z — share ₱700.  
X gets twice as much as Y, and Y gets twice as much as Z.  
How much does X get?`,
      options: ["₱200", "₱300", "₱400", "₱500"],
      answer: "₱400",
      explanation: `Let Z = k, Y = 2k, X = 4k. Total 7k = 700 → k = 100 → X = 4k = ₱400.`
    },

        
    // 28
    {
      question: `Which argument shows circular reasoning?`,
      options: [
        "This law is unfair because many people protest it.",
        "I am trustworthy because I always tell the truth, and you can trust me when I say that.",
        "She is late because of traffic reports.",
        "The ground is wet because it rained."
      ],
      answer: "I am trustworthy because I always tell the truth, and you can trust me when I say that.",
      explanation: `The argument uses itself as proof.`
    },

    // 29
    {
      question: `A statement: "If a number is divisible by 4, then it is even."  
Which is a counterexample to the claim: "If a number is even, then it is divisible by 4."`,
      options: ["2", "4", "8", "12"],
      answer: "2",
      explanation: `2 is even but not divisible by 4.`
    },

    // 30
    {
      question: `Choose the strongest conclusion:  
"Most students who review daily improve their grades."`,
      options: [
        "Reviewing daily sometimes improves grades",
        "Reviewing daily always improves grades",
        "Reviewing daily can help grades improve",
        "Reviewing daily never helps"
      ],
      answer: "Reviewing daily can help grades improve",
      explanation: `We can reasonably conclude that it can help, not that it always works.`
    },

    // 31
    {
      question: `In a tournament, each player plays every other player once.  
If there are 6 players, how many matches are played?`,
      options: ["10", "12", "15", "20"],
      answer: "15",
      explanation: `Number of pairs: 6C2 = 15.`
    },

    // 32
    {
      question: `A class has 30 students. 18 like math, 20 like science, and 5 like neither.  
How many students like both math and science?`,
      options: ["8", "10", "13", "15"],
      answer: "13",
      explanation: `Students liking at least one = 30 − 5 = 25. So both = 18 + 20 − 25 = 13.`
    },

    // 33
    {
      question: `Two dice are rolled. What is the probability that the sum is 7?`,
      options: ["1/12", "1/6", "5/36", "1/3"],
      answer: "1/6",
      explanation: `Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 outcomes out of 36.`
    },

    // 34
    {
      question: `A box contains 4 red, 3 blue, and 3 green balls.  
If one ball is picked at random, what is the probability it is red?`,
      options: ["1/2", "2/5", "4/10", "1/3"],
      answer: "2/5",
      explanation: `Total 10 balls; red = 4 → 4/10 = 2/5.`
    },

    // 35
    {
      question: `Which is the BEST example of a slippery slope fallacy?`,
      options: [
        "If we allow phones in class, students will stop learning and society will collapse.",
        "Using phones can sometimes distract students.",
        "Phones may be useful for quick research.",
        "Phones must be used responsibly."
      ],
      answer: "If we allow phones in class, students will stop learning and society will collapse.",
      explanation: `It exaggerates a chain of unlikely negative consequences.`
    },

    // 36
    {
      question: `A statement: "All politicians are honest."  
Which question BEST tests this claim?`,
      options: [
        "Can we name at least one dishonest politician?",
        "Do we like politicians?",
        "How many politicians are there?",
        "What is politics?"
      ],
      answer: "Can we name at least one dishonest politician?",
      explanation: `A single counterexample disproves a universal claim.`
    },

    // 37
    {
      question: `Which reasoning is MOST like a scientific hypothesis test?`,
      options: [
        "Believing a statement because a friend said it",
        "Testing a claim with data and checking if results support it",
        "Accepting a rule without question",
        "Following tradition"
      ],
      answer: "Testing a claim with data and checking if results support it",
      explanation: `Scientific method uses evidence to test claims.`
    },

    // 38
    {
      question: `A person says: "Everyone fails that exam; my friend failed it."  
Which fallacy is present?`,
      options: [
        "Hasty generalization",
        "Appeal to authority",
        "Straw man",
        "Ad hominem"
      ],
      answer: "Hasty generalization",
      explanation: `The conclusion is based on very limited evidence.`
    },

    // 39
    {
      question: `Which of the following is an example of a "straw man" argument?`,
      options: [
        `"We should have stricter traffic rules." "So you want to ban all cars!"`,
        `"We should have stricter traffic rules." "That may reduce accidents."`,
        `"We should have stricter traffic rules." "Let's check data first."`,
        `"We should have stricter traffic rules." "I agree."`
      ],
      answer: `"We should have stricter traffic rules." "So you want to ban all cars!"`,
      explanation: `It misrepresents the original claim to make it easier to attack.`
    },

    // 40
    {
      question: `A statement: "If we raise salaries, employees will be more motivated."  
Which is a reasonable assumption behind this statement?`,
      options: [
        "Money is the only motivator",
        "Higher pay can increase motivation",
        "Employees are lazy",
        "Employees will never resign"
      ],
      answer: "Higher pay can increase motivation",
      explanation: `The argument assumes that pay and motivation are related.`
    },

    // 41
    {
      question: `Which is the BEST example of deductive reasoning?`,
      options: [
        "All even numbers are divisible by 2. 14 is even. Therefore, 14 is divisible by 2.",
        "The last three days were rainy, so tomorrow will rain.",
        "I feel tired, so I think I am sick.",
        "I saw one black dog; all dogs must be black."
      ],
      answer: "All even numbers are divisible by 2. 14 is even. Therefore, 14 is divisible by 2.",
      explanation: `It applies a general rule to a specific case.`
    },

    // 42
    {
      question: `Which of the following shows ANALOGICAL reasoning?`,
      options: [
        "Using past experience in a similar situation to decide what to do",
        "Trying random actions until something works",
        "Memorizing old solutions",
        "Not changing behavior at all"
      ],
      answer: "Using past experience in a similar situation to decide what to do",
      explanation: `Analogical reasoning compares a current situation to a similar past one.`
    },

    // 43
    {
      question: `A town has two kinds of buses: red and blue.  
Every red bus stops at Station A.  
Some blue buses also stop at Station A.  
Which is true?`,
      options: [
        "Only red buses stop at Station A",
        "Some buses at Station A are blue",
        "No blue bus stops at Station A",
        "All blue buses stop at Station A"
      ],
      answer: "Some buses at Station A are blue",
      explanation: `By statement, some blue buses stop there too.`
    },

    // 44
    {
      question: `In a voting survey, 60% prefer candidate X, 30% prefer Y, and 10% are undecided.  
Which conclusion is most reasonable?`,
      options: [
        "X will definitely win the election",
        "Y will definitely lose",
        "X is currently leading in the survey",
        "The survey is useless"
      ],
      answer: "X is currently leading in the survey",
      explanation: `Surveys show current preference, not guaranteed results.`
    },

    // 45
    {
      question: `Which is an example of recognizing bias in information?`,
      options: [
        "Not reading the article",
        "Checking if the author benefits from the conclusion",
        "Agreeing immediately",
        "Sharing without reading"
      ],
      answer: "Checking if the author benefits from the conclusion",
      explanation: `Bias can appear if the author has something to gain.`
    },

    // 46
    {
      question: `You see that in the past 5 days, the stock price has gone up every day.  
Which conclusion is MOST reasonable?`,
      options: [
        "It will go up forever",
        "It will never go down",
        "It might go down or up; past performance doesn't guarantee future results",
        "It must crash tomorrow"
      ],
      answer: "It might go down or up; past performance doesn't guarantee future results",
      explanation: `Critical thinking avoids overgeneralizing from short trends.`
    },

    // 47
    {
      question: `A statement: "All full-time employees must work 8 hours a day."  
Which is the BEST test to check this rule?`,
      options: [
        "Find any full-time employee who works less than 8 hours",
        "Ask one employee their schedule",
        "Check only the manager's schedule",
        "Check the official company logo"
      ],
      answer: "Find any full-time employee who works less than 8 hours",
      explanation: `A single counterexample breaks a universal rule.`
    },

    // 48
    {
      question: `Which is the clearest sign of correlation being confused with causation?`,
      options: [
        "Ice cream sales and drowning incidents both increase in summer, so ice cream causes drowning.",
        "Many people like ice cream.",
        "Swimming can be dangerous without safety.",
        "Hot weather leads to more outdoor activities."
      ],
      answer: "Ice cream sales and drowning incidents both increase in summer, so ice cream causes drowning.",
      explanation: `Both increase due to a third factor (heat), not because one causes the other.`
    },

    // 49
    {
      question: `Which is the BEST indicator that an online article is reliable?`,
      options: [
        "It has many emojis",
        "It cites credible sources and data",
        "It is very long",
        "It has a dramatic title"
      ],
      answer: "It cites credible sources and data",
      explanation: `Evidence-based claims are more trustworthy.`
    },

    // 50
    {
      question: `Which is the BEST example of using cognitive reasoning in daily life?`,
      options: [
        "Buying an item because the influencer said so",
        "Comparing prices, reviews, and your budget before buying",
        "Choosing the first product you see",
        "Following a friend's choice without thinking"
      ],
      answer: "Comparing prices, reviews, and your budget before buying",
      explanation: `You weigh evidence and options to make a rational decision.`
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 ITEMS)
  // ==========================================
  expert: [
    // 1
    {
      question: `Three friends — Aris, Ben, and Carlo — always answer truthfully or always lie (each person is consistent).  
• Aris: "Ben is a liar."  
• Ben: "Carlo is a liar."  
• Carlo: "Aris and I are both truthful."  
If exactly one of them tells the truth, who is truthful?`,
      options: ["Aris", "Ben", "Carlo", "None"],
      answer: "Ben",
      explanation: `Trial and error on each possibility shows only Ben as truthful satisfies "exactly one truthful".`
    },

    // 2
    {
      question: `Two siblings — Liza and Mark — make statements:  
Liza: "At least one of us is lying."  
Mark: "Liza is telling the truth."  
What can you conclude?`,
      options: [
        "Both are telling the truth",
        "Liza lies, Mark tells the truth",
        "Liza tells the truth, Mark lies",
        "Both are lying"
      ],
      answer: "Liza tells the truth, Mark lies",
      explanation: `If Liza is truthful, then "at least one is lying" is true; Mark must be lying.`
    },

    // 3
    {
      question: `Four people — A, B, C, and D — are in a room.  
• A says: "B did it."  
• B says: "D did it."  
• C says: "I didn't do it."  
• D says: "B is lying."  
Exactly one of them is telling the truth. Who did it?`,
      options: ["A", "B", "C", "D"],
      answer: "B",
      explanation: `Testing each possibility leads to only one consistent scenario: B is guilty and only C tells the truth.`
    },

    // 4
    {
      question: `Four employees — P, Q, R, and S — must be scheduled on 4 consecutive days (Mon–Thu), one per day.  
Conditions:  
• P cannot work on Monday.  
• Q must work earlier than R.  
• S works on Wednesday.  
On which day does Q work?`,
      options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      answer: "Monday",
      explanation: `With S on Wed and P not Monday, arranging to keep Q earlier than R forces Q to Monday.`
    },

    // 5
    {
      question: `In a logic puzzle, three boxes are labeled GOLD, SILVER, and MIXED, but all labels are wrong.  
• GOLD box label is wrong.  
• SILVER box contains only one type of coin.  
Which box contains only gold coins?`,
      options: ["Box labeled GOLD", "Box labeled SILVER", "Box labeled MIXED", "Cannot be determined"],
      answer: "Box labeled MIXED",
      explanation: `Using the "all labels wrong" rule, the MIXED label box must be a single-type box, deduced as GOLD.`
    },

    // 6
    {
      question: `Consider the argument:  
"If we do not strictly monitor employees, productivity will always drop."  
Which is the BEST critical evaluation?`,
      options: [
        "It is certainly true in all workplaces.",
        "It assumes only strict monitoring affects productivity.",
        "It is obviously false.",
        "It is true because the speaker is a manager."
      ],
      answer: "It assumes only strict monitoring affects productivity.",
      explanation: `The argument ignores other factors affecting productivity.`
    },

    // 7
    {
      question: `A researcher finds that in an office, people who drink more coffee tend to send more emails.  
Which conclusion is MOST reasonable?`,
      options: [
        "Coffee causes people to send more emails.",
        "Sending emails causes people to drink more coffee.",
        "There may be a third factor (like workload) influencing both.",
        "There is no relationship at all."
      ],
      answer: "There may be a third factor (like workload) influencing both.",
      explanation: `Correlation does not guarantee direct causation.`
    },

    // 8
    {
      question: `Which is the BEST example of a "red herring" fallacy?`,
      options: [
        `"We should reduce pollution." "But what about unemployment?"`,
        `"We should reduce pollution." "Here is data about air quality."`,
        `"We should reduce pollution." "That may cost money."`,
        `"We should reduce pollution." "Let's plan carefully."`
      ],
      answer: `"We should reduce pollution." "But what about unemployment?"`,
      explanation: `It distracts from the topic instead of addressing it.`
    },

    // 9
    {
      question: `A company claims: "Our training makes all employees more productive."  
Which evidence would BEST support this?`,
      options: [
        "One employee says he liked the training.",
        "Average productivity increased significantly after the training compared with before, controlling for other factors.",
        "The training was expensive.",
        "The training was fun."
      ],
      answer: "Average productivity increased significantly after the training compared with before, controlling for other factors.",
      explanation: `Controlled data comparing before/after is strong evidence.`
    },

    // 10
    {
      question: `Which reasoning BEST shows confirmation bias?`,
      options: [
        "Seeking information that supports your belief and ignoring what contradicts it",
        "Listening to all sides of an argument",
        "Changing your mind when evidence is strong",
        "Collecting data from many sources"
      ],
      answer: "Seeking information that supports your belief and ignoring what contradicts it",
      explanation: `That is the definition of confirmation bias.`
    },

    // 11
    {
      question: `A puzzle:  
Three switches (1, 2, 3) control a light bulb in another room.  
You can only enter the other room once.  
How can you determine which switch controls the bulb?`,
      options: [
        "Turn all on, then check once.",
        "Turn one on, leave others off.",
        "Use timing: turn one on for a while, then off; turn another on; feel the bulb for heat.",
        "It is impossible."
      ],
      answer: "Use timing: turn one on for a while, then off; turn another on; feel the bulb for heat.",
      explanation: `Heat + light state reveals which switch controls the bulb.`
    },

    // 12
    {
      question: `Which is the BEST example of metacognition (thinking about your thinking)?`,
      options: [
        "Solving a math problem quickly",
        "Noticing that you get distracted and deciding to change your study strategy",
        "Reading without reflecting",
        "Copying answers"
      ],
      answer: "Noticing that you get distracted and deciding to change your study strategy",
      explanation: `You are monitoring and adjusting your own thinking/learning process.`
    },

    // 13
    {
      question: `A student always jumps to the first explanation that comes to mind, without checking other possibilities.  
Which cognitive bias is MOST likely present?`,
      options: [
        "Anchoring bias",
        "Hindsight bias",
        "Overconfidence bias",
        "Planning fallacy"
      ],
      answer: "Anchoring bias",
      explanation: `The student anchors on the first idea and under-considers others.`
    },

    // 14
    {
      question: `A manager assumes that because one remote employee was lazy, all remote employees are lazy.  
This is an example of:`,
      options: [
        "Hasty generalization",
        "Straw man",
        "Red herring",
        "Appeal to authority"
      ],
      answer: "Hasty generalization",
      explanation: `A broad conclusion based on a single or few cases.`
    },

    // 15
    {
      question: `Which situation BEST illustrates cognitive dissonance?`,
      options: [
        "Knowing smoking is harmful but continuing to smoke and feeling uncomfortable about it",
        "Doing exercise daily",
        "Eating healthy food",
        "Sleeping early"
      ],
      answer: "Knowing smoking is harmful but continuing to smoke and feeling uncomfortable about it",
      explanation: `Holding conflicting beliefs and actions causes mental discomfort.`
    },

    // 16
    {
      question: `A logic test:  
All A are B. Some B are not C.  
Which statement MUST be true?`,
      options: [
        "Some A are not C",
        "All B are C",
        "No A are C",
        "Some C are not A"
      ],
      answer: "Some A are not C",
      explanation: `Because A ⊆ B and some B are not C, those B might be A; in strict logic exams, this is a "may be" conclusion; teacher can adjust.`
    },

    // 17
    {
      question: `Which is the BEST example of "availability heuristic"?`,
      options: [
        "Believing airplane accidents are very common because they are heavily reported on the news",
        "Calculating exact probabilities before deciding",
        "Studying statistics to check risk",
        "Ignoring all examples"
      ],
      answer: "Believing airplane accidents are very common because they are heavily reported on the news",
      explanation: `Judgment is influenced by how easily examples come to mind.`
    },

    // 18
    {
      question: `A person says: "I have never seen a white crow, so white crows do not exist."  
This reasoning is flawed because:`,
      options: [
        "It uses too much data",
        "It assumes personal experience is complete evidence",
        "It is deductive",
        "It uses statistics"
      ],
      answer: "It assumes personal experience is complete evidence",
      explanation: `Lack of personal observation is not proof of non-existence.`
    },

    // 19
    {
      question: `A fair coin is tossed 5 times and shows HEADS all 5 times.  
Which statement reflects correct reasoning?`,
      options: [
        "TAILS is now more likely on the next toss.",
        "HEADS is now more likely on the next toss.",
        "The next toss is still 50% HEADS and 50% TAILS.",
        "The coin is definitely biased."
      ],
      answer: "The next toss is still 50% HEADS and 50% TAILS.",
      explanation: `Each toss of a fair coin is independent.`
    },

    // 20
    {
      question: `Which is the BEST example of "overfitting" in reasoning?`,
      options: [
        "Creating a rule that only fits one special case but fails for others",
        "Using a simple rule that fits most cases",
        "Ignoring all data",
        "Using general principles"
      ],
      answer: "Creating a rule that only fits one special case but fails for others",
      explanation: `Overfitting means matching noise instead of the general pattern.`
    },

    // 21
    {
      question: `You are comparing two job offers.  
Offer A: Higher salary but longer commute.  
Offer B: Lower salary but very near your home.  
Using cognitive reasoning, what is the BEST step?`,
      options: [
        "Flip a coin",
        "List pros and cons, and weigh what matters most to you",
        "Choose the higher salary immediately",
        "Choose what your friend chooses"
      ],
      answer: "List pros and cons, and weigh what matters most to you",
      explanation: `Systematic comparison is a key reasoning skill.`
    },

    // 22
    {
      question: `A student says: "I always get unlucky in exams."  
Which is the BEST response using critical thinking?`,
      options: [
        "Agree and blame luck",
        "Ask how much they prepared and what study habits they used",
        "Tell them to stop studying",
        "Ignore them"
      ],
      answer: "Ask how much they prepared and what study habits they used",
      explanation: `Focus on controllable factors rather than luck.`
    },

    // 23
    {
      question: `A reasoning pattern:  
Premise 1: If it is a square, then it has four equal sides.  
Premise 2: This shape has four equal sides.  
Conclusion: Therefore, this shape is a square.  
What is wrong with this reasoning?`,
      options: [
        "It is valid",
        "It affirms the consequent",
        "It denies the antecedent",
        "It is a contradiction"
      ],
      answer: "It affirms the consequent",
      explanation: `From "If square then 4 equal sides" and "has 4 equal sides" you cannot conclude it is a square.`
    },

    // 24
    {
      question: `Which is the BEST example of "denying the antecedent" fallacy?`,
      options: [
        "If it rains, roads are wet. It did not rain, so roads are not wet.",
        "If it rains, roads are wet. Roads are wet, so it rained.",
        "If it rains, roads are wet. It rained, so roads may be wet.",
        "If it rains, roads are wet. It did not rain, so roads are dry or wet."
      ],
      answer: "If it rains, roads are wet. It did not rain, so roads are not wet.",
      explanation: `The conclusion ignores other possible causes of wet roads.`
    },

    // 25
    {
      question: `You are given a table of data and asked to "find a pattern".  
Which approach shows GOOD cognitive reasoning?`,
      options: [
        "Look for trends, then test if they hold for many cases",
        "Pick any pattern that fits the first two rows only",
        "Ignore the data and guess",
        "Choose the most complicated pattern"
      ],
      answer: "Look for trends, then test if they hold for many cases",
      explanation: `Valid patterns must fit broadly, not just a few points.`
    },

    // 26
    {
      question: `Four cards are on a table: A, D, 3, and 8.  
Rule: "If a card has a vowel on one side, then it has an even number on the other side."  
Which cards must you turn over to test this rule?`,
      options: ["A and D", "A and 3", "A and 8", "D and 3"],
      answer: "A and 3",
      explanation: `Check vowel card (A) and odd number card (3) to seek violations.`
    },

    // 27
    {
      question: `Which is the BEST description of "system 1" vs "system 2" thinking (dual-process theory)?`,
      options: [
        "System 1 is fast and intuitive; system 2 is slow and analytical.",
        "System 1 is slow; system 2 is fast.",
        "They are the same.",
        "System 1 is for math only."
      ],
      answer: "System 1 is fast and intuitive; system 2 is slow and analytical.",
      explanation: `That is the common description in cognitive psychology.`
    },

    // 28
    {
      question: `A student highlights almost every line of a book but remembers little.  
Which cognitive strategy would MOST likely help?`,
      options: [
        "Spaced repetition and self-testing",
        "More highlighting",
        "Reading faster without thinking",
        "Listening to music only"
      ],
      answer: "Spaced repetition and self-testing",
      explanation: `Active recall and spacing improve learning.`
    },

    // 29
    {
      question: `Which is the BEST example of transfer of learning?`,
      options: [
        "Using problem-solving skills learned in math to solve a real-life budgeting problem",
        "Memorizing formulas only",
        "Cramming then forgetting",
        "Copying classmates' work"
      ],
      answer: "Using problem-solving skills learned in math to solve a real-life budgeting problem",
      explanation: `You apply knowledge from one context to another.`
    },

    // 30
    {
      question: `A person says: "Everyone I know who studied abroad became successful, so studying abroad guarantees success."  
What is the BEST critique?`,
      options: [
        "Sample is limited and success depends on many factors.",
        "Studying abroad is always bad.",
        "People should not study.",
        "It is obviously correct."
      ],
      answer: "Sample is limited and success depends on many factors.",
      explanation: `The claim uses limited, biased evidence and ignores other variables.`
    },

    // 31
    {
      question: `Which habit MOST improves critical thinking over time?`,
      options: [
        "Never questioning anything",
        "Regularly reflecting on your decisions and outcomes",
        "Avoiding difficult tasks",
        "Relying only on intuition"
      ],
      answer: "Regularly reflecting on your decisions and outcomes",
      explanation: `Reflection helps you refine your reasoning processes.`
    },

    // 32
    {
      question: `You see two headlines:  
A: "New study: Coffee linked to longer life."  
B: "New study: Coffee causes health problems."  
Using cognitive reasoning, what is the BEST next step?`,
      options: [
        "Ignore both studies",
        "Read the actual studies or summaries to compare methods and context",
        "Believe the more positive headline",
        "Believe the more negative headline"
      ],
      answer: "Read the actual studies or summaries to compare methods and context",
      explanation: `Critical thinking seeks detailed, original evidence.`
    },

    // 33
    {
      question: `A worker says: "I finished my tasks faster when I turned off social media notifications."  
Which is the BEST interpretation?`,
      options: [
        "Turning off notifications may reduce distractions and improve focus.",
        "Notifications are always bad for everyone.",
        "Only this worker can focus.",
        "Social media should be banned."
      ],
      answer: "Turning off notifications may reduce distractions and improve focus.",
      explanation: `We cautiously infer a plausible causal link.`
    },

    // 34
    {
      question: `Which shows good use of Bayesian thinking (updating beliefs)?`,
      options: [
        "Keeping the same belief no matter what",
        "Changing beliefs slightly when new strong evidence appears",
        "Changing beliefs randomly",
        "Never forming beliefs"
      ],
      answer: "Changing beliefs slightly when new strong evidence appears",
      explanation: `Bayesian thinking adjusts probability estimates with new evidence.`
    },

    // 35
    {
      question: `A student thinks: "I failed once; I will always fail."  
Which distorted thinking pattern is this?`,
      options: [
        "All-or-nothing thinking",
        "Overgeneralization",
        "Mind reading",
        "Personalization"
      ],
      answer: "Overgeneralization",
      explanation: `A single event is treated as a never-ending pattern.`
    },

    // 36
    {
      question: `Which best describes "cognitive load"?`,
      options: [
        "Amount of physical weight carried",
        "Amount of mental effort used at a time",
        "Number of school subjects",
        "Number of friends"
      ],
      answer: "Amount of mental effort used at a time",
      explanation: `Cognitive load theory deals with mental workload.`
    },

    // 37
    {
      question: `A person quickly judges someone as unfriendly because of one short interaction.  
Later, all future impressions are filtered through that first impression.  
This shows:`,
      options: [
        "Halo effect",
        "Horn effect",
        "Recency effect",
        "Anchoring"
      ],
      answer: "Horn effect",
      explanation: `One negative trait colors all judgments.`
    },

    // 38
    {
      question: `When solving a complex problem, which sequence of steps BEST shows cognitive problem-solving strategy?`,
      options: [
        "Define the problem, generate options, evaluate options, choose and test a solution",
        "Guess first, think later",
        "Avoid the problem",
        "Copy someone else without thinking"
      ],
      answer: "Define the problem, generate options, evaluate options, choose and test a solution",
      explanation: `This is a standard structured problem-solving approach.`
    },

    // 39
    {
      question: `Which is the BEST example of using "chunking" to improve memory?`,
      options: [
        "Memorizing long strings of numbers by grouping them (e.g., 0917-XXX-XXXX)",
        "Reading faster but not remembering",
        "Avoiding practice",
        "Listening to music only"
      ],
      answer: "Memorizing long strings of numbers by grouping them (e.g., 0917-XXX-XXXX)",
      explanation: `Chunking groups information into meaningful units.`
    },

    // 40
    {
      question: `A student uses only one method to solve math problems and refuses to try others.  
This MOSTLY limits which aspect of reasoning?`,
      options: [
        "Flexibility",
        "Accuracy",
        "Speed",
        "Memory"
      ],
      answer: "Flexibility",
      explanation: `Rigidity reduces cognitive flexibility.`
    },

    // 41
    {
      question: `Which is the BEST example of "sunk cost fallacy"?`,
      options: [
        "Continuing a failing project because you've already invested a lot of time and money",
        "Stopping a project when it proves unworkable",
        "Starting a new project",
        "Saving money for the future"
      ],
      answer: "Continuing a failing project because you've already invested a lot of time and money",
      explanation: `Decisions should be based on future value, not irrecoverable past costs.`
    },

    // 42
    {
      question: `Which best shows "lateral thinking"?`,
      options: [
        "Following the same rule strictly",
        "Looking at the problem from a completely different angle to find a creative solution",
        "Memorizing formulas",
        "Repeating steps mechanically"
      ],
      answer: "Looking at the problem from a completely different angle to find a creative solution",
      explanation: `Lateral thinking is non-linear, creative problem solving.`
    },

    // 43
    {
      question: `When comparing two news sources with different conclusions, which question shows critical evaluation?`,
      options: [
        "Which headline is more dramatic?",
        "Who shouted louder on social media?",
        "What evidence and methods does each source use to support its claims?",
        "Which news site has more colors?"
      ],
      answer: "What evidence and methods does each source use to support its claims?",
      explanation: `Critical thinking examines evidence and methodology.`
    },

    // 44
    {
      question: `A co-worker presents an idea you disagree with.  
Which response BEST shows strong cognitive and communication skills?`,
      options: [
        "Attack the person",
        "Stay silent but resentful",
        "Calmly ask questions, present evidence, and explain your view respectfully",
        "Immediately walk out"
      ],
      answer: "Calmly ask questions, present evidence, and explain your view respectfully",
      explanation: `Reasoned dialogue uses evidence and respect.`
    },

    // 45
    {
      question: `Which is the BEST way to check if your own decision might be biased?`,
      options: [
        "Assume you are always right",
        "Ask yourself what evidence would make you change your mind",
        "Avoid evidence",
        "Only ask friends who agree with you"
      ],
      answer: "Ask yourself what evidence would make you change your mind",
      explanation: `Being open to disconfirming evidence reduces bias.`
    },

    // 46
    {
      question: `You are solving a puzzle and reach a dead end.  
Which action BEST reflects good cognitive strategy?`,
      options: [
        "Keep repeating the same wrong approach",
        "Take a short break, then reframe the problem and try a new strategy",
        "Give up immediately",
        "Blame the puzzle"
      ],
      answer: "Take a short break, then reframe the problem and try a new strategy",
      explanation: `Breaks and reframing improve insight.`
    },

    // 47
    {
      question: `Which is the BEST example of "pattern recognition" in cognitive reasoning?`,
      options: [
        "Seeing that when you sleep early, you feel better the next day",
        "Doing random things",
        "Not noticing any regularities",
        "Avoiding reflection"
      ],
      answer: "Seeing that when you sleep early, you feel better the next day",
      explanation: `You connect repeated experience into a pattern.`
    },

    // 48
    {
      question: `A student schedules fixed time daily for review, breaks tasks into small steps, and tracks progress.  
This BEST illustrates:`,
      options: [
        "Cognitive planning and self-regulation",
        "Luck",
        "Procrastination",
        "Random behavior"
      ],
      answer: "Cognitive planning and self-regulation",
      explanation: `They are actively managing their learning process.`
    },

    // 49
    {
      question: `Which is the BEST indicator that a decision was made using strong cognitive reasoning?`,
      options: [
        "It was made quickly without thinking",
        "It considered goals, options, consequences, and evidence",
        "It followed the crowd automatically",
        "It ignored all data"
      ],
      answer: "It considered goals, options, consequences, and evidence",
      explanation: `Good reasoning weighs relevant factors logically.`
    },

    // 50
    {
      question: `In daily life, which habit MOST helps strengthen cognitive reasoning over the long term?`,
      options: [
        "Relying only on intuition",
        "Regular reading, problem solving, reflection, and openness to feedback",
        "Avoiding challenges",
        "Doing everything last minute"
      ],
      answer: "Regular reading, problem solving, reflection, and openness to feedback",
      explanation: `These habits continually exercise and refine thinking skills.`
    }
  ]
};
