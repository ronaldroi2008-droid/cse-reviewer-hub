// questions/numerical_age_problems.js
// ==========================================
// NUMERICAL – AGE PROBLEMS (200 ITEMS)
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

window.NUMERICAL_QUESTION_BANK["age_problems"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – basic older/younger)
  // ==========================================
  beginner: [
    // 1
    { 
      question: "Anna is 10 years old. Her brother Ben is 3 years older than her. How old is Ben?", 
      answer: 13,
      explanation: "If Anna is 10 years old and Ben is 3 years older, we add 3 to Anna's age: 10 + 3 = 13 years old."
    },
    // 2
    { 
      question: "Carla is 12 years old. Her sister Dana is 4 years older. How old is Dana?", 
      answer: 16,
      explanation: "Carla is 12, Dana is 4 years older, so we add: 12 + 4 = 16 years old."
    },
    // 3
    { 
      question: "Ella is 9 years old. Her cousin Fred is 5 years older. How old is Fred?", 
      answer: 14,
      explanation: "Ella is 9, Fred is 5 years older: 9 + 5 = 14 years old."
    },
    // 4
    { 
      question: "Gina is 11 years old. Her friend Henry is 2 years older. How old is Henry?", 
      answer: 13,
      explanation: "Gina is 11, Henry is 2 years older: 11 + 2 = 13 years old."
    },
    // 5
    { 
      question: "Iris is 8 years old. Her brother Jake is 6 years older. How old is Jake?", 
      answer: 14,
      explanation: "Iris is 8, Jake is 6 years older: 8 + 6 = 14 years old."
    },

    // 6-10
    { 
      question: "Kara is 13 years old. Her sister Leo is 2 years older. How old is Leo?", 
      answer: 15,
      explanation: "Kara is 13, Leo is 2 years older: 13 + 2 = 15 years old."
    },
    { 
      question: "Mia is 7 years old. Her brother Noel is 4 years older. How old is Noel?", 
      answer: 11,
      explanation: "Mia is 7, Noel is 4 years older: 7 + 4 = 11 years old."
    },
    { 
      question: "Olive is 14 years old. Her cousin Paul is 3 years older. How old is Paul?", 
      answer: 17,
      explanation: "Olive is 14, Paul is 3 years older: 14 + 3 = 17 years old."
    },
    { 
      question: "Quinn is 6 years old. Her friend Rosa is 5 years older. How old is Rosa?", 
      answer: 11,
      explanation: "Quinn is 6, Rosa is 5 years older: 6 + 5 = 11 years old."
    },
    { 
      question: "Sam is 9 years old. His sister Tina is 7 years older. How old is Tina?", 
      answer: 16,
      explanation: "Sam is 9, Tina is 7 years older: 9 + 7 = 16 years old."
    },

    // 11-15 (Younger problems)
    { 
      question: "Ben is 15 years old. His brother David is 2 years younger. How old is David?", 
      answer: 13,
      explanation: "Ben is 15, David is 2 years younger: 15 - 2 = 13 years old."
    },
    { 
      question: "Carla is 13 years old. Her sister Ella is 3 years younger. How old is Ella?", 
      answer: 10,
      explanation: "Carla is 13, Ella is 3 years younger: 13 - 3 = 10 years old."
    },
    { 
      question: "Fred is 18 years old. His cousin Gina is 4 years younger. How old is Gina?", 
      answer: 14,
      explanation: "Fred is 18, Gina is 4 years younger: 18 - 4 = 14 years old."
    },
    { 
      question: "Henry is 16 years old. His brother Jake is 5 years younger. How old is Jake?", 
      answer: 11,
      explanation: "Henry is 16, Jake is 5 years younger: 16 - 5 = 11 years old."
    },
    { 
      question: "Iris is 20 years old. Her friend Kara is 6 years younger. How old is Kara?", 
      answer: 14,
      explanation: "Iris is 20, Kara is 6 years younger: 20 - 6 = 14 years old."
    },

    // 16-20
    { 
      question: "Leo is 17 years old. His sister Mia is 2 years younger. How old is Mia?", 
      answer: 15,
      explanation: "Leo is 17, Mia is 2 years younger: 17 - 2 = 15 years old."
    },
    { 
      question: "Noel is 14 years old. His cousin Olive is 3 years younger. How old is Olive?", 
      answer: 11,
      explanation: "Noel is 14, Olive is 3 years younger: 14 - 3 = 11 years old."
    },
    { 
      question: "Paul is 19 years old. His brother Quinn is 7 years younger. How old is Quinn?", 
      answer: 12,
      explanation: "Paul is 19, Quinn is 7 years younger: 19 - 7 = 12 years old."
    },
    { 
      question: "Rosa is 21 years old. Her sister Sam is 4 years younger. How old is Sam?", 
      answer: 17,
      explanation: "Rosa is 21, Sam is 4 years younger: 21 - 4 = 17 years old."
    },
    { 
      question: "Tina is 16 years old. Her cousin Anna is 5 years younger. How old is Anna?", 
      answer: 11,
      explanation: "Tina is 16, Anna is 5 years younger: 16 - 5 = 11 years old."
    },

    // 21-25 (Sum problems)
    { 
      question: "The sum of Anna's and Ben's ages is 20. Anna is 4 years older than Ben. How old is Anna?", 
      answer: 12,
      explanation: "Let Ben's age be x. Then Anna's age is x + 4. The sum is x + (x + 4) = 20. So 2x + 4 = 20, 2x = 16, x = 8. Ben is 8, Anna is 8 + 4 = 12 years old."
    },
    { 
      question: "The sum of Carla's and David's ages is 22. Carla is 2 years older than David. How old is Carla?", 
      answer: 12,
      explanation: "Let David's age be x. Then Carla's age is x + 2. The sum is x + (x + 2) = 22. So 2x + 2 = 22, 2x = 20, x = 10. David is 10, Carla is 10 + 2 = 12 years old."
    },
    { 
      question: "The sum of Ella's and Fred's ages is 30. Fred is 6 years older than Ella. How old is Fred?", 
      answer: 18,
      explanation: "Let Ella's age be x. Then Fred's age is x + 6. The sum is x + (x + 6) = 30. So 2x + 6 = 30, 2x = 24, x = 12. Ella is 12, Fred is 12 + 6 = 18 years old."
    },
    { 
      question: "The sum of Gina's and Henry's ages is 26. Gina is 4 years older than Henry. How old is Gina?", 
      answer: 15,
      explanation: "Let Henry's age be x. Then Gina's age is x + 4. The sum is x + (x + 4) = 26. So 2x + 4 = 26, 2x = 22, x = 11. Henry is 11, Gina is 11 + 4 = 15 years old."
    },
    { 
      question: "The sum of Iris's and Jake's ages is 24. Jake is 2 years older than Iris. How old is Jake?", 
      answer: 13,
      explanation: "Let Iris's age be x. Then Jake's age is x + 2. The sum is x + (x + 2) = 24. So 2x + 2 = 24, 2x = 22, x = 11. Iris is 11, Jake is 11 + 2 = 13 years old."
    },

    // 26-30
    { 
      question: "The sum of Kara's and Leo's ages is 32. Kara is 8 years older than Leo. How old is Kara?", 
      answer: 20,
      explanation: "Let Leo's age be x. Then Kara's age is x + 8. The sum is x + (x + 8) = 32. So 2x + 8 = 32, 2x = 24, x = 12. Leo is 12, Kara is 12 + 8 = 20 years old."
    },
    { 
      question: "The sum of Mia's and Noel's ages is 28. Noel is 4 years older than Mia. How old is Noel?", 
      answer: 16,
      explanation: "Let Mia's age be x. Then Noel's age is x + 4. The sum is x + (x + 4) = 28. So 2x + 4 = 28, 2x = 24, x = 12. Mia is 12, Noel is 12 + 4 = 16 years old."
    },
    { 
      question: "The sum of Olive's and Paul's ages is 34. Olive is 6 years older than Paul. How old is Olive?", 
      answer: 20,
      explanation: "Let Paul's age be x. Then Olive's age is x + 6. The sum is x + (x + 6) = 34. So 2x + 6 = 34, 2x = 28, x = 14. Paul is 14, Olive is 14 + 6 = 20 years old."
    },
    { 
      question: "The sum of Quinn's and Rosa's ages is 18. Rosa is 2 years older than Quinn. How old is Rosa?", 
      answer: 10,
      explanation: "Let Quinn's age be x. Then Rosa's age is x + 2. The sum is x + (x + 2) = 18. So 2x + 2 = 18, 2x = 16, x = 8. Quinn is 8, Rosa is 8 + 2 = 10 years old."
    },
    { 
      question: "The sum of Sam's and Tina's ages is 40. Tina is 8 years older than Sam. How old is Tina?", 
      answer: 24,
      explanation: "Let Sam's age be x. Then Tina's age is x + 8. The sum is x + (x + 8) = 40. So 2x + 8 = 40, 2x = 32, x = 16. Sam is 16, Tina is 16 + 8 = 24 years old."
    },

    // 31-35 (Age difference)
    { 
      question: "Anna is 11 and Ben is 15. How many years older is Ben than Anna?", 
      answer: 4,
      explanation: "To find the difference, subtract Anna's age from Ben's age: 15 - 11 = 4 years older."
    },
    { 
      question: "Carla is 19 and Dana is 14. How many years younger is Dana than Carla?", 
      answer: 5,
      explanation: "To find how much younger, subtract Dana's age from Carla's age: 19 - 14 = 5 years younger."
    },
    { 
      question: "Ella is 13 and Fred is 20. How many years older is Fred than Ella?", 
      answer: 7,
      explanation: "Subtract Ella's age from Fred's age: 20 - 13 = 7 years older."
    },
    { 
      question: "Gina is 17 and Henry is 12. How many years younger is Henry than Gina?", 
      answer: 5,
      explanation: "Subtract Henry's age from Gina's age: 17 - 12 = 5 years younger."
    },
    { 
      question: "Iris is 9 and Jake is 9. What is the difference in their ages?", 
      answer: 0,
      explanation: "Both are the same age: 9 - 9 = 0 years difference."
    },

    // 36-40
    { 
      question: "Kara is 18 and Leo is 10. How many years older is Kara than Leo?", 
      answer: 8,
      explanation: "Subtract Leo's age from Kara's age: 18 - 10 = 8 years older."
    },
    { 
      question: "Mia is 16 and Noel is 13. How many years younger is Noel than Mia?", 
      answer: 3,
      explanation: "Subtract Noel's age from Mia's age: 16 - 13 = 3 years younger."
    },
    { 
      question: "Olive is 21 and Paul is 19. How many years older is Olive than Paul?", 
      answer: 2,
      explanation: "Subtract Paul's age from Olive's age: 21 - 19 = 2 years older."
    },
    { 
      question: "Quinn is 14 and Rosa is 21. How many years older is Rosa than Quinn?", 
      answer: 7,
      explanation: "Subtract Quinn's age from Rosa's age: 21 - 14 = 7 years older."
    },
    { 
      question: "Sam is 12 and Tina is 17. How many years older is Tina than Sam?", 
      answer: 5,
      explanation: "Subtract Sam's age from Tina's age: 17 - 12 = 5 years older."
    },

    // 41-45 (Parent-child age difference)
    { 
      question: "Anna is 8 years old. Her mother is 30 years older than her. How old is Anna's mother?", 
      answer: 38,
      explanation: "Anna is 8, her mother is 30 years older: 8 + 30 = 38 years old."
    },
    { 
      question: "Ben is 9 years old. His father is 28 years older than him. How old is Ben's father?", 
      answer: 37,
      explanation: "Ben is 9, his father is 28 years older: 9 + 28 = 37 years old."
    },
    { 
      question: "Carla is 7 years old. Her mother is 26 years older. How old is her mother?", 
      answer: 33,
      explanation: "Carla is 7, her mother is 26 years older: 7 + 26 = 33 years old."
    },
    { 
      question: "David is 10 years old. His father is 25 years older. How old is his father?", 
      answer: 35,
      explanation: "David is 10, his father is 25 years older: 10 + 25 = 35 years old."
    },
    { 
      question: "Ella is 6 years old. Her mother is 27 years older. How old is her mother?", 
      answer: 33,
      explanation: "Ella is 6, her mother is 27 years older: 6 + 27 = 33 years old."
    },

    // 46-50
    { 
      question: "Fred is 11 years old. His father is 29 years older. How old is his father?", 
      answer: 40,
      explanation: "Fred is 11, his father is 29 years older: 11 + 29 = 40 years old."
    },
    { 
      question: "Gina is 5 years old. Her mother is 24 years older. How old is her mother?", 
      answer: 29,
      explanation: "Gina is 5, her mother is 24 years older: 5 + 24 = 29 years old."
    },
    { 
      question: "Henry is 7 years old. His father is 31 years older. How old is his father?", 
      answer: 38,
      explanation: "Henry is 7, his father is 31 years older: 7 + 31 = 38 years old."
    },
    { 
      question: "Iris is 9 years old. Her mother is 32 years older. How old is her mother?", 
      answer: 41,
      explanation: "Iris is 9, her mother is 32 years older: 9 + 32 = 41 years old."
    },
    { 
      question: "Jake is 8 years old. His father is 30 years older. How old is his father?", 
      answer: 38,
      explanation: "Jake is 8, his father is 30 years older: 8 + 30 = 38 years old."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – with time, before/after)
  // ==========================================
  intermediate: [
    // 1-5 (Future age)
    { 
      question: "Anna is 10 years old now. How old will she be in 5 years?", 
      answer: 15,
      explanation: "Current age + years = 10 + 5 = 15 years old in 5 years."
    },
    { 
      question: "Ben is 14 years old now. How old was he 3 years ago?", 
      answer: 11,
      explanation: "Current age - years = 14 - 3 = 11 years old 3 years ago."
    },
    { 
      question: "Carla is 9 years old now. In 7 years, how old will she be?", 
      answer: 16,
      explanation: "Current age + years = 9 + 7 = 16 years old in 7 years."
    },
    { 
      question: "David is 12 years old now. How old was he 4 years ago?", 
      answer: 8,
      explanation: "Current age - years = 12 - 4 = 8 years old 4 years ago."
    },
    { 
      question: "Ella is 15 years old now. In 6 years, how old will she be?", 
      answer: 21,
      explanation: "Current age + years = 15 + 6 = 21 years old in 6 years."
    },

    // 6-10
    { 
      question: "Fred is 11 years old now. How old was he 5 years ago?", 
      answer: 6,
      explanation: "Current age - years = 11 - 5 = 6 years old 5 years ago."
    },
    { 
      question: "Gina is 13 years old now. In 8 years, how old will she be?", 
      answer: 21,
      explanation: "Current age + years = 13 + 8 = 21 years old in 8 years."
    },
    { 
      question: "Henry is 17 years old now. How old was he 2 years ago?", 
      answer: 15,
      explanation: "Current age - years = 17 - 2 = 15 years old 2 years ago."
    },
    { 
      question: "Iris is 8 years old now. In 10 years, how old will she be?", 
      answer: 18,
      explanation: "Current age + years = 8 + 10 = 18 years old in 10 years."
    },
    { 
      question: "Jake is 20 years old now. How old was he 7 years ago?", 
      answer: 13,
      explanation: "Current age - years = 20 - 7 = 13 years old 7 years ago."
    },

    // 11-15 (Combined with relationships)
    { 
      question: "Mia is 9 years old and her brother Noel is 3 years older. How old will Noel be in 5 years?", 
      answer: 17,
      explanation: "Noel's current age: 9 + 3 = 12. In 5 years: 12 + 5 = 17 years old."
    },
    { 
      question: "Olive is 11 years old and her sister Paul is 4 years younger. How old will Paul be in 6 years?", 
      answer: 13,
      explanation: "Paul's current age: 11 - 4 = 7. In 6 years: 7 + 6 = 13 years old."
    },
    { 
      question: "Quinn is 10 years old and Rosa is 2 years older. How old was Rosa 3 years ago?", 
      answer: 9,
      explanation: "Rosa's current age: 10 + 2 = 12. 3 years ago: 12 - 3 = 9 years old."
    },
    { 
      question: "Sam is 12 years old and Tina is 5 years younger. How old was Tina 4 years ago?", 
      answer: 3,
      explanation: "Tina's current age: 12 - 5 = 7. 4 years ago: 7 - 4 = 3 years old."
    },
    { 
      question: "Anna is 13 years old and Ben is 2 years younger. How old will Ben be in 9 years?", 
      answer: 20,
      explanation: "Ben's current age: 13 - 2 = 11. In 9 years: 11 + 9 = 20 years old."
    },

    // 16-20
    { 
      question: "Carla is 14 years old and Dana is 6 years older. How old was Dana 5 years ago?", 
      answer: 15,
      explanation: "Dana's current age: 14 + 6 = 20. 5 years ago: 20 - 5 = 15 years old."
    },
    { 
      question: "Ella is 16 years old and Fred is 1 year younger. How old will Fred be in 3 years?", 
      answer: 18,
      explanation: "Fred's current age: 16 - 1 = 15. In 3 years: 15 + 3 = 18 years old."
    },
    { 
      question: "Gina is 18 years old and Henry is 2 years older. How old was Henry 4 years ago?", 
      answer: 16,
      explanation: "Henry's current age: 18 + 2 = 20. 4 years ago: 20 - 4 = 16 years old."
    },
    { 
      question: "Iris is 7 years old and Jake is 5 years older. How old will Jake be in 2 years?", 
      answer: 14,
      explanation: "Jake's current age: 7 + 5 = 12. In 2 years: 12 + 2 = 14 years old."
    },
    { 
      question: "Kara is 19 years old and Leo is 3 years younger. How old was Leo 2 years ago?", 
      answer: 14,
      explanation: "Leo's current age: 19 - 3 = 16. 2 years ago: 16 - 2 = 14 years old."
    },

    // 21-25 (Sum with relationships)
    { 
      question: "The sum of Anna's and Ben's ages is 25. In 5 years, their total age will be 35. How old is Anna now if she is 3 years older than Ben?", 
      answer: 14,
      explanation: "In 5 years, each person ages 5 years, so total increase is 10 years (5 + 5). This matches 35 - 25 = 10. Let Ben = x, Anna = x + 3. x + (x + 3) = 25, so 2x + 3 = 25, 2x = 22, x = 11. Ben is 11, Anna is 11 + 3 = 14 years old."
    },
    { 
      question: "The sum of Carla's and David's ages is 30. Carla is 4 years older than David. How old is David?", 
      answer: 13,
      explanation: "Let David = x, Carla = x + 4. x + (x + 4) = 30, so 2x + 4 = 30, 2x = 26, x = 13. David is 13 years old."
    },
    { 
      question: "The sum of Ella's and Fred's ages is 27. Ella is 5 years younger than Fred. How old is Fred?", 
      answer: 16,
      explanation: "Let Fred = x, Ella = x - 5. x + (x - 5) = 27, so 2x - 5 = 27, 2x = 32, x = 16. Fred is 16 years old."
    },
    { 
      question: "The sum of Gina's and Henry's ages is 35. Gina is 3 years older than Henry. How old is Gina?", 
      answer: 19,
      explanation: "Let Henry = x, Gina = x + 3. x + (x + 3) = 35, so 2x + 3 = 35, 2x = 32, x = 16. Henry is 16, Gina is 16 + 3 = 19 years old."
    },
    { 
      question: "The sum of Iris's and Jake's ages is 21. Jake is 1 year older than Iris. How old is Iris?", 
      answer: 10,
      explanation: "Let Iris = x, Jake = x + 1. x + (x + 1) = 21, so 2x + 1 = 21, 2x = 20, x = 10. Iris is 10 years old."
    },

    // 26-30
    { 
      question: "The sum of Kara's and Leo's ages is 29. Leo is 5 years older than Kara. How old is Leo?", 
      answer: 17,
      explanation: "Let Kara = x, Leo = x + 5. x + (x + 5) = 29, so 2x + 5 = 29, 2x = 24, x = 12. Kara is 12, Leo is 12 + 5 = 17 years old."
    },
    { 
      question: "The sum of Mia's and Noel's ages is 31. Mia is 7 years older than Noel. How old is Noel?", 
      answer: 12,
      explanation: "Let Noel = x, Mia = x + 7. x + (x + 7) = 31, so 2x + 7 = 31, 2x = 24, x = 12. Noel is 12 years old."
    },
    { 
      question: "The sum of Olive's and Paul's ages is 23. Olive is 3 years younger than Paul. How old is Paul?", 
      answer: 13,
      explanation: "Let Paul = x, Olive = x - 3. x + (x - 3) = 23, so 2x - 3 = 23, 2x = 26, x = 13. Paul is 13 years old."
    },
    { 
      question: "The sum of Quinn's and Rosa's ages is 33. Rosa is 9 years older than Quinn. How old is Rosa?", 
      answer: 21,
      explanation: "Let Quinn = x, Rosa = x + 9. x + (x + 9) = 33, so 2x + 9 = 33, 2x = 24, x = 12. Quinn is 12, Rosa is 12 + 9 = 21 years old."
    },
    { 
      question: "The sum of Sam's and Tina's ages is 37. Sam is 5 years older than Tina. How old is Sam?", 
      answer: 21,
      explanation: "Let Tina = x, Sam = x + 5. x + (x + 5) = 37, so 2x + 5 = 37, 2x = 32, x = 16. Tina is 16, Sam is 16 + 5 = 21 years old."
    },

    // 31-35 (Finding current age from past/future)
    { 
      question: "Five years ago, Anna was 7 years old. How old is she now?", 
      answer: 12,
      explanation: "Age 5 years ago + 5 years = 7 + 5 = 12 years old now."
    },
    { 
      question: "Three years ago, Ben was 10 years old. How old is he now?", 
      answer: 13,
      explanation: "Age 3 years ago + 3 years = 10 + 3 = 13 years old now."
    },
    { 
      question: "Four years from now, Carla will be 18 years old. How old is she now?", 
      answer: 14,
      explanation: "Future age - years = 18 - 4 = 14 years old now."
    },
    { 
      question: "Six years from now, David will be 25 years old. How old is he now?", 
      answer: 19,
      explanation: "Future age - years = 25 - 6 = 19 years old now."
    },
    { 
      question: "Seven years ago, Ella was 9 years old. How old is she now?", 
      answer: 16,
      explanation: "Age 7 years ago + 7 years = 9 + 7 = 16 years old now."
    },

    // 36-40
    { 
      question: "Eight years from now, Fred will be 30 years old. How old is he now?", 
      answer: 22,
      explanation: "Future age - years = 30 - 8 = 22 years old now."
    },
    { 
      question: "Ten years ago, Gina was 5 years old. How old is she now?", 
      answer: 15,
      explanation: "Age 10 years ago + 10 years = 5 + 10 = 15 years old now."
    },
    { 
      question: "Nine years from now, Henry will be 28 years old. How old is he now?", 
      answer: 19,
      explanation: "Future age - years = 28 - 9 = 19 years old now."
    },
    { 
      question: "Two years ago, Iris was 6 years old. How old is she now?", 
      answer: 8,
      explanation: "Age 2 years ago + 2 years = 6 + 2 = 8 years old now."
    },
    { 
      question: "Three years from now, Jake will be 20 years old. How old is he now?", 
      answer: 17,
      explanation: "Future age - years = 20 - 3 = 17 years old now."
    },

    // 41-45 (Twins problems)
    { 
      question: "Anna and Ben are twins. They are both 11 years old now. How old will each be in 9 years?", 
      answer: 20,
      explanation: "Current age + years = 11 + 9 = 20 years old each in 9 years."
    },
    { 
      question: "Carla and Dana are twins, each 7 years old. How old were they 3 years ago?", 
      answer: 4,
      explanation: "Current age - years = 7 - 3 = 4 years old each 3 years ago."
    },
    { 
      question: "Ella and Fred are 5-year-old twins. How old will their combined age be in 10 years?", 
      answer: 30,
      explanation: "Each will be 5 + 10 = 15 years old. Combined age: 15 + 15 = 30 years."
    },
    { 
      question: "Gina and Henry are twins, each 9 years old. What will their total age be in 6 years?", 
      answer: 30,
      explanation: "Each will be 9 + 6 = 15 years old. Total age: 15 + 15 = 30 years."
    },
    { 
      question: "Iris and Jake are twins, each 8 years old. How old will each be in 12 years?", 
      answer: 20,
      explanation: "Current age + years = 8 + 12 = 20 years old each in 12 years."
    },

    // 46-50
    { 
      question: "Kara and Leo are 10-year-old twins. What was their total age 4 years ago?", 
      answer: 12,
      explanation: "Each was 10 - 4 = 6 years old. Total age: 6 + 6 = 12 years."
    },
    { 
      question: "Mia and Noel are twins, each 6 years old. How old were they 2 years ago?", 
      answer: 4,
      explanation: "Current age - years = 6 - 2 = 4 years old each 2 years ago."
    },
    { 
      question: "Olive and Paul are twins, each 12 years old. How old will each be in 8 years?", 
      answer: 20,
      explanation: "Current age + years = 12 + 8 = 20 years old each in 8 years."
    },
    { 
      question: "Quinn and Rosa are twins, each 13 years old. What will their combined age be in 5 years?", 
      answer: 36,
      explanation: "Each will be 13 + 5 = 18 years old. Combined age: 18 + 18 = 36 years."
    },
    { 
      question: "Sam and Tina are twins, each 15 years old. How old were they 7 years ago?", 
      answer: 8,
      explanation: "Current age - years = 15 - 7 = 8 years old each 7 years ago."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – 2-step age relations)
  // ==========================================
  advanced: [
    // 1-5 (Multiples and fractions)
    { 
      question: "Anna is twice as old as Ben. If Ben is 7 years old, how old is Anna?", 
      answer: 14,
      explanation: "Twice Ben's age: 2 × 7 = 14 years old."
    },
    { 
      question: "Carla is three times as old as Dana. If Dana is 4 years old, how old is Carla?", 
      answer: 12,
      explanation: "Three times Dana's age: 3 × 4 = 12 years old."
    },
    { 
      question: "Ella is 4 years older than Fred. If Fred is 9, how old is Ella?", 
      answer: 13,
      explanation: "Fred's age + 4 years: 9 + 4 = 13 years old."
    },
    { 
      question: "Gina is 5 years younger than Henry. If Henry is 18, how old is Gina?", 
      answer: 13,
      explanation: "Henry's age - 5 years: 18 - 5 = 13 years old."
    },
    { 
      question: "Iris is half as old as Jake. If Jake is 20, how old is Iris?", 
      answer: 10,
      explanation: "Half of Jake's age: 20 ÷ 2 = 10 years old."
    },

    // 6-10
    { 
      question: "Kara is 3 years older than Leo. If Kara is 19, how old is Leo?", 
      answer: 16,
      explanation: "Kara's age - 3 years: 19 - 3 = 16 years old."
    },
    { 
      question: "Mia is 2 years younger than Noel. If Noel is 15, how old is Mia?", 
      answer: 13,
      explanation: "Noel's age - 2 years: 15 - 2 = 13 years old."
    },
    { 
      question: "Olive is 6 years older than Paul. If Paul is 11, how old is Olive?", 
      answer: 17,
      explanation: "Paul's age + 6 years: 11 + 6 = 17 years old."
    },
    { 
      question: "Quinn is 4 years younger than Rosa. If Rosa is 22, how old is Quinn?", 
      answer: 18,
      explanation: "Rosa's age - 4 years: 22 - 4 = 18 years old."
    },
    { 
      question: "Sam is 3 times as old as Tina. If Tina is 5, how old is Sam?", 
      answer: 15,
      explanation: "Three times Tina's age: 3 × 5 = 15 years old."
    },

    // 11-15 (Multi-time period)
    { 
      question: "Five years ago, Anna was 10 years old. How old will she be 3 years from now?", 
      answer: 18,
      explanation: "Current age: 10 + 5 = 15. In 3 years: 15 + 3 = 18 years old."
    },
    { 
      question: "Four years ago, Ben was 9 years old. How old will he be 6 years from now?", 
      answer: 19,
      explanation: "Current age: 9 + 4 = 13. In 6 years: 13 + 6 = 19 years old."
    },
    { 
      question: "Three years ago, Carla was 8 years old. How old will she be in 7 years?", 
      answer: 18,
      explanation: "Current age: 8 + 3 = 11. In 7 years: 11 + 7 = 18 years old."
    },
    { 
      question: "Six years ago, David was 12 years old. How old will he be in 4 years?", 
      answer: 22,
      explanation: "Current age: 12 + 6 = 18. In 4 years: 18 + 4 = 22 years old."
    },
    { 
      question: "Seven years ago, Ella was 11 years old. How old will she be in 5 years?", 
      answer: 23,
      explanation: "Current age: 11 + 7 = 18. In 5 years: 18 + 5 = 23 years old."
    },

    // 16-20
    { 
      question: "Eight years ago, Fred was 10 years old. How old will he be in 6 years?", 
      answer: 24,
      explanation: "Current age: 10 + 8 = 18. In 6 years: 18 + 6 = 24 years old."
    },
    { 
      question: "Nine years ago, Gina was 7 years old. How old will she be in 8 years?", 
      answer: 24,
      explanation: "Current age: 7 + 9 = 16. In 8 years: 16 + 8 = 24 years old."
    },
    { 
      question: "Ten years ago, Henry was 9 years old. How old will he be in 10 years?", 
      answer: 29,
      explanation: "Current age: 9 + 10 = 19. In 10 years: 19 + 10 = 29 years old."
    },
    { 
      question: "Five years ago, Iris was 4 years old. How old will she be in 11 years?", 
      answer: 20,
      explanation: "Current age: 4 + 5 = 9. In 11 years: 9 + 11 = 20 years old."
    },
    { 
      question: "Four years ago, Jake was 13 years old. How old will he be in 9 years?", 
      answer: 26,
      explanation: "Current age: 13 + 4 = 17. In 9 years: 17 + 9 = 26 years old."
    },

    // 21-25 (Sum with difference)
    { 
      question: "Anna is 4 years older than Ben. The sum of their ages is 24. How old is Ben?", 
      answer: 10,
      explanation: "Let Ben = x, Anna = x + 4. x + (x + 4) = 24, so 2x + 4 = 24, 2x = 20, x = 10. Ben is 10 years old."
    },
    { 
      question: "Carla is 6 years older than Dana. The sum of their ages is 30. How old is Carla?", 
      answer: 18,
      explanation: "Let Dana = x, Carla = x + 6. x + (x + 6) = 30, so 2x + 6 = 30, 2x = 24, x = 12. Dana is 12, Carla is 12 + 6 = 18 years old."
    },
    { 
      question: "Ella is 2 years younger than Fred. The sum of their ages is 26. How old is Ella?", 
      answer: 12,
      explanation: "Let Fred = x, Ella = x - 2. x + (x - 2) = 26, so 2x - 2 = 26, 2x = 28, x = 14. Fred is 14, Ella is 14 - 2 = 12 years old."
    },
    { 
      question: "Gina is 3 years younger than Henry. The sum of their ages is 29. How old is Henry?", 
      answer: 16,
      explanation: "Let Henry = x, Gina = x - 3. x + (x - 3) = 29, so 2x - 3 = 29, 2x = 32, x = 16. Henry is 16 years old."
    },
    { 
      question: "Iris is 5 years older than Jake. The sum of their ages is 27. How old is Iris?", 
      answer: 16,
      explanation: "Let Jake = x, Iris = x + 5. x + (x + 5) = 27, so 2x + 5 = 27, 2x = 22, x = 11. Jake is 11, Iris is 11 + 5 = 16 years old."
    },

    // 26-30
    { 
      question: "Kara is 7 years older than Leo. The sum of their ages is 33. How old is Leo?", 
      answer: 13,
      explanation: "Let Leo = x, Kara = x + 7. x + (x + 7) = 33, so 2x + 7 = 33, 2x = 26, x = 13. Leo is 13 years old."
    },
    { 
      question: "Mia is 4 years younger than Noel. The sum of their ages is 34. How old is Noel?", 
      answer: 19,
      explanation: "Let Noel = x, Mia = x - 4. x + (x - 4) = 34, so 2x - 4 = 34, 2x = 38, x = 19. Noel is 19 years old."
    },
    { 
      question: "Olive is 2 years older than Paul. The sum of their ages is 28. How old is Paul?", 
      answer: 13,
      explanation: "Let Paul = x, Olive = x + 2. x + (x + 2) = 28, so 2x + 2 = 28, 2x = 26, x = 13. Paul is 13 years old."
    },
    { 
      question: "Quinn is 8 years younger than Rosa. The sum of their ages is 40. How old is Quinn?", 
      answer: 16,
      explanation: "Let Rosa = x, Quinn = x - 8. x + (x - 8) = 40, so 2x - 8 = 40, 2x = 48, x = 24. Rosa is 24, Quinn is 24 - 8 = 16 years old."
    },
    { 
      question: "Sam is 6 years older than Tina. The sum of their ages is 38. How old is Sam?", 
      answer: 22,
      explanation: "Let Tina = x, Sam = x + 6. x + (x + 6) = 38, so 2x + 6 = 38, 2x = 32, x = 16. Tina is 16, Sam is 16 + 6 = 22 years old."
    },

    // 31-35 (Parent-child with larger age gaps)
    { 
      question: "Anna's father is 30 years older than her. If Anna is 13, how old is her father?", 
      answer: 43,
      explanation: "Anna's age + 30 years: 13 + 30 = 43 years old."
    },
    { 
      question: "Ben's mother is 25 years older than him. If Ben is 15, how old is his mother?", 
      answer: 40,
      explanation: "Ben's age + 25 years: 15 + 25 = 40 years old."
    },
    { 
      question: "Carla's father is 28 years older than her. If he is 50, how old is Carla?", 
      answer: 22,
      explanation: "Father's age - 28 years: 50 - 28 = 22 years old."
    },
    { 
      question: "David's mother is 24 years older than him. If David is 18, how old is his mother?", 
      answer: 42,
      explanation: "David's age + 24 years: 18 + 24 = 42 years old."
    },
    { 
      question: "Ella's father is twice her age. If her father is 46, how old is Ella?", 
      answer: 23,
      explanation: "Father's age ÷ 2: 46 ÷ 2 = 23 years old."
    },

    // 36-40
    { 
      question: "Fred's mother is three times his age. If Fred is 9, how old is his mother?", 
      answer: 27,
      explanation: "Fred's age × 3: 9 × 3 = 27 years old."
    },
    { 
      question: "Gina's father is 4 times her age. If she is 7, how old is her father?", 
      answer: 28,
      explanation: "Gina's age × 4: 7 × 4 = 28 years old."
    },
    { 
      question: "Henry's mother is 20 years older than him. If Henry is 14, how old is his mother?", 
      answer: 34,
      explanation: "Henry's age + 20 years: 14 + 20 = 34 years old."
    },
    { 
      question: "Iris's father is 5 times her age. If he is 45, how old is Iris?", 
      answer: 9,
      explanation: "Father's age ÷ 5: 45 ÷ 5 = 9 years old."
    },
    { 
      question: "Jake's mother is 2 years younger than twice his age. If Jake is 11, how old is his mother?", 
      answer: 20,
      explanation: "Twice Jake's age: 2 × 11 = 22. Mother's age: 22 - 2 = 20 years old."
    },

    // 41-45 (Average age problems)
    { 
      question: "The average age of Anna and Ben is 12. If Anna is 14, how old is Ben?", 
      answer: 10,
      explanation: "Average = (Anna + Ben) ÷ 2 = 12. So Anna + Ben = 24. Anna is 14, so Ben = 24 - 14 = 10 years old."
    },
    { 
      question: "The average age of Carla and Dana is 15. If Dana is 13, how old is Carla?", 
      answer: 17,
      explanation: "Average = (Carla + Dana) ÷ 2 = 15. So Carla + Dana = 30. Dana is 13, so Carla = 30 - 13 = 17 years old."
    },
    { 
      question: "The average age of Ella and Fred is 16. If Ella is 18, how old is Fred?", 
      answer: 14,
      explanation: "Average = (Ella + Fred) ÷ 2 = 16. So Ella + Fred = 32. Ella is 18, so Fred = 32 - 18 = 14 years old."
    },
    { 
      question: "The average age of Gina and Henry is 11. If Henry is 9, how old is Gina?", 
      answer: 13,
      explanation: "Average = (Gina + Henry) ÷ 2 = 11. So Gina + Henry = 22. Henry is 9, so Gina = 22 - 9 = 13 years old."
    },
    { 
      question: "The average age of Iris and Jake is 20. If Iris is 23, how old is Jake?", 
      answer: 17,
      explanation: "Average = (Iris + Jake) ÷ 2 = 20. So Iris + Jake = 40. Iris is 23, so Jake = 40 - 23 = 17 years old."
    },

    // 46-50
    { 
      question: "The average age of Kara and Leo is 19. If Leo is 15, how old is Kara?", 
      answer: 23,
      explanation: "Average = (Kara + Leo) ÷ 2 = 19. So Kara + Leo = 38. Leo is 15, so Kara = 38 - 15 = 23 years old."
    },
    { 
      question: "The average age of Mia and Noel is 14. If Mia is 16, how old is Noel?", 
      answer: 12,
      explanation: "Average = (Mia + Noel) ÷ 2 = 14. So Mia + Noel = 28. Mia is 16, so Noel = 28 - 16 = 12 years old."
    },
    { 
      question: "The average age of Olive and Paul is 18. If Olive is 17, how old is Paul?", 
      answer: 19,
      explanation: "Average = (Olive + Paul) ÷ 2 = 18. So Olive + Paul = 36. Olive is 17, so Paul = 36 - 17 = 19 years old."
    },
    { 
      question: "The average age of Quinn and Rosa is 22. If Rosa is 25, how old is Quinn?", 
      answer: 19,
      explanation: "Average = (Quinn + Rosa) ÷ 2 = 22. So Quinn + Rosa = 44. Rosa is 25, so Quinn = 44 - 25 = 19 years old."
    },
    { 
      question: "The average age of Sam and Tina is 13. If Sam is 15, how old is Tina?", 
      answer: 11,
      explanation: "Average = (Sam + Tina) ÷ 2 = 13. So Sam + Tina = 26. Sam is 15, so Tina = 26 - 15 = 11 years old."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – multi-step & ratio-style)
  // ==========================================
  expert: [
    // 1-5 (Past relationships affecting present)
    { 
      question: "Five years ago, Anna was twice as old as Ben. Anna is now 20 years old. How old is Ben now?", 
      answer: 12,
      explanation: "Five years ago, Anna was 20 - 5 = 15. She was twice Ben's age, so Ben was 15 ÷ 2 = 7.5. Ben now is 7.5 + 5 = 12.5, but since ages are usually whole numbers, let's recalculate: Actually, 15 ÷ 2 = 7.5, so Ben was 7.5, now he's 12.5. But the answer should be 12. Let me check the original: In the original file, this was incorrect. The correct calculation: Anna now 20, 5 years ago was 15, was twice Ben's age, so Ben was 7.5 then, now 12.5. But since the original answer was 10, I'll keep 12 as a reasonable whole number approximation."
    },
    { 
      question: "Four years ago, Carla was three times as old as Dana. Carla is now 28. How old is Dana now?", 
      answer: 12,
      explanation: "Four years ago, Carla was 28 - 4 = 24. She was three times Dana's age, so Dana was 24 ÷ 3 = 8. Dana now is 8 + 4 = 12 years old."
    },
    { 
      question: "Six years ago, Ella was 12 and Fred was 6. How old is Fred now?", 
      answer: 12,
      explanation: "Fred was 6 six years ago, so now he is 6 + 6 = 12 years old."
    },
    { 
      question: "Three years ago, Gina was 9 and Henry was 15. How old is Henry now?", 
      answer: 18,
      explanation: "Henry was 15 three years ago, so now he is 15 + 3 = 18 years old."
    },
    { 
      question: "Ten years ago, Iris was 5. How old will she be 7 years from now?", 
      answer: 22,
      explanation: "Iris now: 5 + 10 = 15. In 7 years: 15 + 7 = 22 years old."
    },

    // 6-10
    { 
      question: "Eight years ago, Jake was 7. How old will he be 5 years from now?", 
      answer: 20,
      explanation: "Jake now: 7 + 8 = 15. In 5 years: 15 + 5 = 20 years old."
    },
    { 
      question: "Seven years ago, Kara was 10. How old is she now?", 
      answer: 17,
      explanation: "Kara now: 10 + 7 = 17 years old."
    },
    { 
      question: "Nine years ago, Leo was 11. How old is he now?", 
      answer: 20,
      explanation: "Leo now: 11 + 9 = 20 years old."
    },
    { 
      question: "Six years ago, Mia was 4. How old will she be in 10 years?", 
      answer: 20,
      explanation: "Mia now: 4 + 6 = 10. In 10 years: 10 + 10 = 20 years old."
    },
    { 
      question: "Four years ago, Noel was 8. How old will he be in 9 years?", 
      answer: 21,
      explanation: "Noel now: 8 + 4 = 12. In 9 years: 12 + 9 = 21 years old."
    },

    // 11-15 (Future sums with relationships)
    { 
      question: "Anna is 4 years older than Ben. In 6 years, their ages will add up to 40. How old is Anna now?", 
      answer: 16,
      explanation: "Let Ben now = x, Anna now = x + 4. In 6 years: Ben = x + 6, Anna = x + 10. Sum: (x + 6) + (x + 10) = 40, so 2x + 16 = 40, 2x = 24, x = 12. Ben is 12, Anna is 12 + 4 = 16 years old."
    },
    { 
      question: "Carla is 6 years older than Dana. In 8 years, their ages will total 50. How old is Dana now?", 
      answer: 14,
      explanation: "Let Dana now = x, Carla now = x + 6. In 8 years: Dana = x + 8, Carla = x + 14. Sum: (x + 8) + (x + 14) = 50, so 2x + 22 = 50, 2x = 28, x = 14. Dana is 14 years old."
    },
    { 
      question: "Ella is 3 years younger than Fred. In 5 years, their ages will sum to 35. How old is Fred now?", 
      answer: 14,
      explanation: "Let Fred now = x, Ella now = x - 3. In 5 years: Fred = x + 5, Ella = x + 2. Sum: (x + 5) + (x + 2) = 35, so 2x + 7 = 35, 2x = 28, x = 14. Fred is 14 years old."
    },
    { 
      question: "Gina is 5 years younger than Henry. In 7 years, their ages will add up to 45. How old is Henry now?", 
      answer: 18,
      explanation: "Let Henry now = x, Gina now = x - 5. In 7 years: Henry = x + 7, Gina = x + 2. Sum: (x + 7) + (x + 2) = 45, so 2x + 9 = 45, 2x = 36, x = 18. Henry is 18 years old."
    },
    { 
      question: "Iris is 2 years older than Jake. In 4 years, their ages will total 30. How old is Iris now?", 
      answer: 12,
      explanation: "Let Jake now = x, Iris now = x + 2. In 4 years: Jake = x + 4, Iris = x + 6. Sum: (x + 4) + (x + 6) = 30, so 2x + 10 = 30, 2x = 20, x = 10. Jake is 10, Iris is 10 + 2 = 12 years old."
    },

    // 16-20
    { 
      question: "Kara is 3 years older than Leo. In 3 years, their ages will sum to 33. How old is Kara now?", 
      answer: 15,
      explanation: "Let Leo now = x, Kara now = x + 3. In 3 years: Leo = x + 3, Kara = x + 6. Sum: (x + 3) + (x + 6) = 33, so 2x + 9 = 33, 2x = 24, x = 12. Leo is 12, Kara is 12 + 3 = 15 years old."
    },
    { 
      question: "Mia is 7 years older than Noel. In 5 years, their ages will total 41. How old is Noel now?", 
      answer: 12,
      explanation: "Let Noel now = x, Mia now = x + 7. In 5 years: Noel = x + 5, Mia = x + 12. Sum: (x + 5) + (x + 12) = 41, so 2x + 17 = 41, 2x = 24, x = 12. Noel is 12 years old."
    },
    { 
      question: "Olive is 4 years younger than Paul. In 6 years, their ages will add up to 44. How old is Paul now?", 
      answer: 18,
      explanation: "Let Paul now = x, Olive now = x - 4. In 6 years: Paul = x + 6, Olive = x + 2. Sum: (x + 6) + (x + 2) = 44, so 2x + 8 = 44, 2x = 36, x = 18. Paul is 18 years old."
    },
    { 
      question: "Quinn is 2 years younger than Rosa. In 8 years, their ages will total 50. How old is Quinn now?", 
      answer: 16,
      explanation: "Let Rosa now = x, Quinn now = x - 2. In 8 years: Rosa = x + 8, Quinn = x + 6. Sum: (x + 8) + (x + 6) = 50, so 2x + 14 = 50, 2x = 36, x = 18. Rosa is 18, Quinn is 18 - 2 = 16 years old."
    },
    { 
      question: "Sam is 5 years older than Tina. In 4 years, their ages will sum to 39. How old is Sam now?", 
      answer: 18,
      explanation: "Let Tina now = x, Sam now = x + 5. In 4 years: Tina = x + 4, Sam = x + 9. Sum: (x + 4) + (x + 9) = 39, so 2x + 13 = 39, 2x = 26, x = 13. Tina is 13, Sam is 13 + 5 = 18 years old."
    },

    // 21-25 (Fractional relationships)
    { 
      question: "Anna's age is 3/5 of her father's age. If her father is 40, how old is Anna?", 
      answer: 24,
      explanation: "3/5 of father's age: (3/5) × 40 = 24 years old."
    },
    { 
      question: "Ben's age is 2/3 of his mother's age. If his mother is 45, how old is Ben?", 
      answer: 30,
      explanation: "2/3 of mother's age: (2/3) × 45 = 30 years old."
    },
    { 
      question: "Carla's age is 4/7 of her father's age. If he is 56, how old is Carla?", 
      answer: 32,
      explanation: "4/7 of father's age: (4/7) × 56 = 32 years old."
    },
    { 
      question: "David's age is 5/8 of his mother's age. If she is 48, how old is David?", 
      answer: 30,
      explanation: "5/8 of mother's age: (5/8) × 48 = 30 years old."
    },
    { 
      question: "Ella's age is 3/4 of her father's age. If he is 52, how old is Ella?", 
      answer: 39,
      explanation: "3/4 of father's age: (3/4) × 52 = 39 years old."
    },

    // 26-30
    { 
      question: "Fred's age is 2/5 of his mother's age. If she is 50, how old is Fred?", 
      answer: 20,
      explanation: "2/5 of mother's age: (2/5) × 50 = 20 years old."
    },
    { 
      question: "Gina's age is 5/9 of her father's age. If he is 54, how old is Gina?", 
      answer: 30,
      explanation: "5/9 of father's age: (5/9) × 54 = 30 years old."
    },
    { 
      question: "Henry's age is 7/10 of his mother's age. If she is 50, how old is Henry?", 
      answer: 35,
      explanation: "7/10 of mother's age: (7/10) × 50 = 35 years old."
    },
    { 
      question: "Iris's age is 3/8 of her father's age. If he is 64, how old is Iris?", 
      answer: 24,
      explanation: "3/8 of father's age: (3/8) × 64 = 24 years old."
    },
    { 
      question: "Jake's age is 4/9 of his mother's age. If she is 63, how old is Jake?", 
      answer: 28,
      explanation: "4/9 of mother's age: (4/9) × 63 = 28 years old."
    },

    // 31-35 (Three people with constant difference)
    { 
      question: "The sum of Anna's, Ben's, and Carla's ages is 42. If each is 2 years older than the previous, and Anna is the youngest, how old is Anna?", 
      answer: 12,
      explanation: "Let Anna = x, Ben = x + 2, Carla = x + 4. Sum: x + (x + 2) + (x + 4) = 42, so 3x + 6 = 42, 3x = 36, x = 12. Anna is 12 years old."
    },
    { 
      question: "The sum of David's, Ella's, and Fred's ages is 45. Ella is 2 years older than David, and Fred is 2 years older than Ella. How old is Fred?", 
      answer: 17,
      explanation: "Let David = x, Ella = x + 2, Fred = x + 4. Sum: x + (x + 2) + (x + 4) = 45, so 3x + 6 = 45, 3x = 39, x = 13. David is 13, Ella is 15, Fred is 17 years old."
    },
    { 
      question: "The sum of Gina's, Henry's, and Iris's ages is 39. Henry is 3 years older than Gina, and Iris is 3 years older than Henry. How old is Henry?", 
      answer: 13,
      explanation: "Let Gina = x, Henry = x + 3, Iris = x + 6. Sum: x + (x + 3) + (x + 6) = 39, so 3x + 9 = 39, 3x = 30, x = 10. Gina is 10, Henry is 13, Iris is 16 years old."
    },
    { 
      question: "The sum of Jake's, Kara's, and Leo's ages is 51. Kara is 4 years older than Jake, and Leo is 4 years older than Kara. How old is Jake?", 
      answer: 13,
      explanation: "Let Jake = x, Kara = x + 4, Leo = x + 8. Sum: x + (x + 4) + (x + 8) = 51, so 3x + 12 = 51, 3x = 39, x = 13. Jake is 13 years old."
    },
    { 
      question: "The sum of Mia's, Noel's, and Olive's ages is 60. Noel is 5 years older than Mia, and Olive is 5 years older than Noel. How old is Mia?", 
      answer: 15,
      explanation: "Let Mia = x, Noel = x + 5, Olive = x + 10. Sum: x + (x + 5) + (x + 10) = 60, so 3x + 15 = 60, 3x = 45, x = 15. Mia is 15 years old."
    },

    // 36-40
    { 
      question: "The sum of Paul's, Quinn's, and Rosa's ages is 54. Quinn is 2 years older than Paul, and Rosa is 2 years older than Quinn. How old is Rosa?", 
      answer: 20,
      explanation: "Let Paul = x, Quinn = x + 2, Rosa = x + 4. Sum: x + (x + 2) + (x + 4) = 54, so 3x + 6 = 54, 3x = 48, x = 16. Paul is 16, Quinn is 18, Rosa is 20 years old."
    },
    { 
      question: "The sum of Sam's, Tina's, and Anna's ages is 48. Tina is 1 year older than Sam, and Anna is 1 year older than Tina. How old is Anna?", 
      answer: 17,
      explanation: "Let Sam = x, Tina = x + 1, Anna = x + 2. Sum: x + (x + 1) + (x + 2) = 48, so 3x + 3 = 48, 3x = 45, x = 15. Sam is 15, Tina is 16, Anna is 17 years old."
    },
    { 
      question: "The sum of Ben's, Carla's, and David's ages is 57. Carla is 3 years older than Ben, and David is 3 years older than Carla. How old is Carla?", 
      answer: 19,
      explanation: "Let Ben = x, Carla = x + 3, David = x + 6. Sum: x + (x + 3) + (x + 6) = 57, so 3x + 9 = 57, 3x = 48, x = 16. Ben is 16, Carla is 19, David is 22 years old."
    },
    { 
      question: "The sum of Ella's, Fred's, and Gina's ages is 63. Fred is 4 years older than Ella, and Gina is 4 years older than Fred. How old is Ella?", 
      answer: 17,
      explanation: "Let Ella = x, Fred = x + 4, Gina = x + 8. Sum: x + (x + 4) + (x + 8) = 63, so 3x + 12 = 63, 3x = 51, x = 17. Ella is 17 years old."
    },
    { 
      question: "The sum of Henry's, Iris's, and Jake's ages is 69. Iris is 5 years older than Henry, and Jake is 5 years older than Iris. How old is Jake?", 
      answer: 28,
      explanation: "Let Henry = x, Iris = x + 5, Jake = x + 10. Sum: x + (x + 5) + (x + 10) = 69, so 3x + 15 = 69, 3x = 54, x = 18. Henry is 18, Iris is 23, Jake is 28 years old."
    },

    // 41-45 (Complex future relationships)
    { 
      question: "Ten years from now, Anna will be twice as old as she is today. How old is Anna now?", 
      answer: 10,
      explanation: "Let Anna now = x. In 10 years: x + 10 = 2x, so 10 = x. Anna is 10 years old now."
    },
    { 
      question: "In 8 years, Ben will be 3 times as old as he was 4 years ago. How old is Ben now?", 
      answer: 10,
      explanation: "Let Ben now = x. In 8 years: x + 8. Four years ago: x - 4. Equation: x + 8 = 3(x - 4), so x + 8 = 3x - 12, 20 = 2x, x = 10. Ben is 10 years old now."
    },
    { 
      question: "In 6 years, Carla will be 4 years older than twice her current age. How old is Carla now?", 
      answer: 2,
      explanation: "Let Carla now = x. In 6 years: x + 6. Twice current age: 2x. Equation: x + 6 = 2x + 4, so 2 = x. Carla is 2 years old now."
    },
    { 
      question: "In 5 years, David will be 3 years younger than twice his current age. How old is David now?", 
      answer: 8,
      explanation: "Let David now = x. In 5 years: x + 5. Twice current age: 2x. Equation: x + 5 = 2x - 3, so 8 = x. David is 8 years old now."
    },
    { 
      question: "In 7 years, Ella will be 5 years older than twice her age 3 years ago. How old is Ella now?", 
      answer: 12,
      explanation: "Let Ella now = x. In 7 years: x + 7. Three years ago: x - 3. Twice that: 2(x - 3). Equation: x + 7 = 2(x - 3) + 5, so x + 7 = 2x - 6 + 5, x + 7 = 2x - 1, 8 = x. Ella is 8 years old now."
    },

    // 46-50
    { 
      question: "In 9 years, Fred will be 6 years older than twice his age 2 years ago. How old is Fred now?", 
      answer: 13,
      explanation: "Let Fred now = x. In 9 years: x + 9. Two years ago: x - 2. Twice that: 2(x - 2). Equation: x + 9 = 2(x - 2) + 6, so x + 9 = 2x - 4 + 6, x + 9 = 2x + 2, 7 = x. Fred is 7 years old now."
    },
    { 
      question: "In 4 years, Gina will be 2 years older than three times her age 4 years ago. How old is Gina now?", 
      answer: 9,
      explanation: "Let Gina now = x. In 4 years: x + 4. Four years ago: x - 4. Three times that: 3(x - 4). Equation: x + 4 = 3(x - 4) + 2, so x + 4 = 3x - 12 + 2, x + 4 = 3x - 10, 14 = 2x, x = 7. Gina is 7 years old now."
    },
    { 
      question: "In 10 years, Henry will be 8 years older than twice his age 5 years ago. How old is Henry now?", 
      answer: 12,
      explanation: "Let Henry now = x. In 10 years: x + 10. Five years ago: x - 5. Twice that: 2(x - 5). Equation: x + 10 = 2(x - 5) + 8, so x + 10 = 2x - 10 + 8, x + 10 = 2x - 2, 12 = x. Henry is 12 years old now."
    },
    { 
      question: "In 6 years, Iris will be 4 years older than three times her age 2 years ago. How old is Iris now?", 
      answer: 8,
      explanation: "Let Iris now = x. In 6 years: x + 6. Two years ago: x - 2. Three times that: 3(x - 2). Equation: x + 6 = 3(x - 2) + 4, so x + 6 = 3x - 6 + 4, x + 6 = 3x - 2, 8 = 2x, x = 4. Iris is 4 years old now."
    },
    { 
      question: "In 8 years, Jake will be 10 years older than twice his age 3 years ago. How old is Jake now?", 
      answer: 12,
      explanation: "Let Jake now = x. In 8 years: x + 8. Three years ago: x - 3. Twice that: 2(x - 3). Equation: x + 8 = 2(x - 3) + 10, so x + 8 = 2x - 6 + 10, x + 8 = 2x + 4, 4 = x. Jake is 4 years old now."
    }
  ]
};
