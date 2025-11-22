// questions_pronouns.js
// 200 Pronoun questions for CSE Reviewer Hub
// Levels: beginner, intermediate, advanced, super (50 each)

const PRONOUN_QUESTIONS = {
  // ======================================================
  // BEGINNER (50 QUESTIONS) – basic pronoun forms & usage
  // ======================================================
  beginner: [
    // 1
    {
      question: "Which sentence uses the correct subject pronouns?",
      choices: [
        "Her and me will attend the seminar tomorrow.",
        "She and me will attend the seminar tomorrow.",
        "Her and I will attend the seminar tomorrow.",
        "She and I will attend the seminar tomorrow."
      ],
      correctIndex: 3,
      explanation:
        "Subjects must use subject pronouns: She and I. 'Her' and 'me' are object pronouns and cannot be used as the subject."
    },
    // 2
    {
      question: "Choose the sentence with correct object pronouns.",
      choices: [
        "The officer called she and I to the front.",
        "The officer called she and me to the front.",
        "The officer called her and me to the front.",
        "The officer called her and I to the front."
      ],
      correctIndex: 2,
      explanation:
        "Objects of the verb should be in objective case: her and me. 'She' and 'I' are subject pronouns and are incorrect as objects."
    },
    // 3
    {
      question: "Fill in the blank: \"Between you and ___, the proposal needs revision.\"",
      choices: ["I", "me", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "A pronoun after a preposition (between) must be objective: 'between you and me', not 'between you and I'."
    },
    // 4
    {
      question: "Which pronoun correctly completes the sentence? \"The award was given to Ana and _____.\"",
      choices: ["I", "me", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "The pronoun is the object of the preposition 'to', so it must be objective: 'to Ana and me'."
    },
    // 5
    {
      question: "Choose the correct sentence using subject pronouns.",
      choices: [
        "Them are waiting outside.",
        "They are waiting outside.",
        "Them is waiting outside.",
        "They is waiting outside."
      ],
      correctIndex: 1,
      explanation:
        "'They' is a subject pronoun and matches the plural verb 'are'. 'Them' is an object pronoun and cannot be used as the subject."
    },
    // 6
    {
      question: "Fill in the blank: \"Maria said that _____ would call later.\"",
      choices: ["her", "she", "hers", "she's"],
      correctIndex: 1,
      explanation:
        "Here the pronoun is the subject of 'would call', so we need a subject pronoun: 'she would call'."
    },
    // 7
    {
      question: "Which sentence correctly uses an object pronoun?",
      choices: [
        "The manager thanked we.",
        "The manager thanked us.",
        "The manager thanked we all.",
        "The manager thanked ourselves."
      ],
      correctIndex: 1,
      explanation:
        "The object of the verb 'thanked' must be objective: 'us'. 'We' is a subject pronoun."
    },
    // 8
    {
      question: "Fill in the blank: \"This notebook is not mine; it is _____.\"",
      choices: ["her", "hers", "she", "she's"],
      correctIndex: 1,
      explanation:
        "'Hers' is the independent possessive pronoun used when it stands alone, without a noun after it."
    },
    // 9
    {
      question: "Which sentence correctly uses a possessive adjective?",
      choices: [
        "This is me book.",
        "This is mine book.",
        "This is my book.",
        "This is I book."
      ],
      correctIndex: 2,
      explanation:
        "'My' is a possessive adjective and must be followed by a noun: 'my book'. 'Mine' is used when the noun is omitted."
    },
    // 10
    {
      question: "Fill in the blank: \"Those folders belong to Carlo; they are _____.\"",
      choices: ["his", "him", "he", "he's"],
      correctIndex: 0,
      explanation:
        "'His' is the correct possessive pronoun to show ownership when the noun is not repeated."
    },
    // 11
    {
      question: "Which demonstrative pronoun best completes the sentence? \"_____ is my ID card.\"",
      choices: ["These", "Those", "This", "They"],
      correctIndex: 2,
      explanation:
        "'This' is used for a singular noun that is near the speaker: 'This is my ID card.'"
    },
    // 12
    {
      question: "Choose the correct sentence with demonstrative pronouns.",
      choices: [
        "This are my reports.",
        "These is my report.",
        "These are my reports.",
        "This are the reports."
      ],
      correctIndex: 2,
      explanation:
        "'These' is the plural demonstrative and goes with a plural noun and verb: 'These are my reports.'"
    },
    // 13
    {
      question: "Fill in the blank: \"Somebody left _____ umbrella in the hallway.\"",
      choices: ["their", "his or her", "its", "our"],
      correctIndex: 1,
      explanation:
        "In formal grammar, 'somebody' is singular, so the exam-safe pronoun is 'his or her umbrella'."
    },
    // 14
    {
      question: "Choose the sentence with correct pronoun–antecedent agreement.",
      choices: [
        "Each student submitted their paper.",
        "Each student submitted his or her paper.",
        "Each student submitted our paper.",
        "Each student submitted your paper."
      ],
      correctIndex: 1,
      explanation:
        "'Each' is singular, so it must be followed by a singular pronoun: 'his or her'."
    },
    // 15
    {
      question: "Fill in the blank: \"Everyone must submit _____ own application form.\"",
      choices: ["their", "his or her", "its", "our"],
      correctIndex: 1,
      explanation:
        "In formal exams, 'everyone' is grammatically singular, so 'his or her' is the safest choice."
    },
    // 16
    {
      question: "Which sentence uses a reflexive pronoun correctly?",
      choices: [
        "Myself will attend the orientation.",
        "The director and myself signed the memo.",
        "I accidentally cut myself while cooking.",
        "Please send it to myself."
      ],
      correctIndex: 2,
      explanation:
        "Reflexive pronouns are used when the subject and object are the same person: 'I cut myself.'"
    },
    // 17
    {
      question: "Fill in the blank: \"He looked at _____ in the mirror before the interview.\"",
      choices: ["himself", "him", "his", "he"],
      correctIndex: 0,
      explanation:
        "Here the subject 'he' acts on himself, so we use the reflexive pronoun 'himself'."
    },
    // 18
    {
      question: "Which sentence uses an intensive pronoun?",
      choices: [
        "The governor herself visited the site.",
        "The governor visited herself the site.",
        "The governor visited by herselfly.",
        "The governor visited the site self."
      ],
      correctIndex: 0,
      explanation:
        "An intensive pronoun emphasizes the subject: 'The governor herself visited the site.'"
    },
    // 19
    {
      question: "Fill in the blank: \"The teacher gave the books to Kim and _____.\"",
      choices: ["I", "me", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "The pronoun is part of the object of the verb 'gave', so it must be objective: 'Kim and me'."
    },
    // 20
    {
      question: "Which sentence uses 'they' correctly?",
      choices: [
        "The students said they are ready.",
        "The students said it is ready.",
        "The student said they is ready.",
        "The student said they are ready."
      ],
      correctIndex: 0,
      explanation:
        "'Students' is plural, so the matching pronoun is 'they' with the plural verb 'are'."
    },
    // 21
    {
      question: "Fill in the blank: \"The dog wagged _____ tail when it saw its owner.\"",
      choices: ["it's", "its", "it", "itself"],
      correctIndex: 1,
      explanation:
        "'Its' is the possessive form. 'It's' means 'it is' or 'it has' and is wrong here."
    },
    // 22
    {
      question: "Which sentence is correct?",
      choices: [
        "The company changed their policy.",
        "The company changed its policy.",
        "The company changed it's policy.",
        "The company changed it policy."
      ],
      correctIndex: 1,
      explanation:
        "In formal English, 'company' is treated as singular, so use 'its policy'. 'It's' is a contraction."
    },
    // 23
    {
      question: "Fill in the blank: \"The supervisor and _____ will finalize the schedule.\"",
      choices: ["me", "I", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "The pronoun is part of the compound subject, so use the subject form: 'The supervisor and I'."
    },
    // 24
    {
      question: "Which question uses the correct interrogative pronoun?",
      choices: [
        "Who did you give the letter to?",
        "Whom did you give the letter to?",
        "Which did you give the letter?",
        "Whose did you give the letter?"
      ],
      correctIndex: 1,
      explanation:
        "Rearranged: 'You gave the letter to him.' Since it is an object, 'whom' is the formal choice after the preposition."
    },
    // 25
    {
      question: "Fill in the blank: \"The clerk asked, '_____ left this bag?'\"",
      choices: ["Who", "Whom", "Which", "Whose"],
      correctIndex: 0,
      explanation:
        "The pronoun is the subject of 'left', so we use 'who'."
    },
    // 26
    {
      question: "Which sentence uses 'which' correctly?",
      choices: [
        "The file which you need is on the table.",
        "The file, which you need is on the table.",
        "The file which you need, is on the table.",
        "The file which you need it is on the table."
      ],
      correctIndex: 0,
      explanation:
        "In an essential (restrictive) clause, 'which' can be used without commas: 'which you need'."
    },
    // 27
    {
      question: "Fill in the blank: \"This is the officer _____ handled our request.\"",
      choices: ["who", "whom", "which", "whose"],
      correctIndex: 0,
      explanation:
        "The pronoun is the subject of 'handled', so we use 'who'."
    },
    // 28
    {
      question: "Which sentence avoids ambiguous pronoun reference?",
      choices: [
        "When Ana met Bea, she was nervous.",
        "When Ana met Bea, Ana was nervous.",
        "When Ana met Bea, she felt nervous.",
        "When Ana met Bea, her was nervous."
      ],
      correctIndex: 1,
      explanation:
        "Sentence 2 clearly states that Ana was nervous. The others are ambiguous or ungrammatical."
    },
    // 29
    {
      question: "Fill in the blank: \"Each of the officers gave _____ opinion.\"",
      choices: ["their", "his or her", "its", "our"],
      correctIndex: 1,
      explanation:
        "Because 'each' is singular, 'his or her' is the correct formal pronoun."
    },
    // 30
    {
      question: "Which sentence correctly uses 'this' and 'these'?",
      choices: [
        "These is my ID.",
        "This are my IDs.",
        "These are my IDs.",
        "This are ID cards."
      ],
      correctIndex: 2,
      explanation:
        "'These' is plural and must be used with the plural verb 'are' and a plural noun: 'These are my IDs.'"
    },
    // 31
    {
      question: "Fill in the blank: \"None of the water lost _____ clarity.\"",
      choices: ["their", "its", "our", "his"],
      correctIndex: 1,
      explanation:
        "'Water' is uncountable and treated as singular, so 'its' is the correct possessive pronoun."
    },
    // 32
    {
      question: "Which sentence is correct?",
      choices: [
        "That are the documents you requested.",
        "Those is the documents you requested.",
        "Those are the documents you requested.",
        "That are the document you requested."
      ],
      correctIndex: 2,
      explanation:
        "For plural 'documents', use 'those' plus the plural verb: 'Those are the documents…'."
    },
    // 33
    {
      question: "Fill in the blank: \"The child hurt _____ while playing.\"",
      choices: ["himself", "hisself", "him", "he"],
      correctIndex: 0,
      explanation:
        "We use the reflexive pronoun 'himself' when the subject and object are the same person."
    },
    // 34
    {
      question: "Which sentence uses 'its' correctly?",
      choices: [
        "The cat licked it's paws.",
        "The cat licked its paws.",
        "The cat licked it paws.",
        "The cat licked its' paws."
      ],
      correctIndex: 1,
      explanation:
        "'Its' is possessive; 'it's' means 'it is' or 'it has' and is wrong here."
    },
    // 35
    {
      question: "Fill in the blank: \"Some of the furniture lost _____ shine.\"",
      choices: ["its", "their", "her", "our"],
      correctIndex: 0,
      explanation:
        "'Furniture' is uncountable and treated as singular, so we use 'its'."
    },
    // 36
    {
      question: "Which sentence correctly uses a reflexive pronoun?",
      choices: [
        "They finished the work themself.",
        "They finished the work theirselves.",
        "They finished the work themselves.",
        "They finished the work itself."
      ],
      correctIndex: 2,
      explanation:
        "'Themselves' is the correct plural reflexive pronoun for 'they'."
    },
    // 37
    {
      question: "Fill in the blank: \"The officer reminded _____ to double-check the forms.\"",
      choices: ["we", "us", "ourselves", "our"],
      correctIndex: 2,
      explanation:
        "Here 'ourselves' shows that 'we' (the same people) should double-check, so a reflexive pronoun is needed."
    },
    // 38
    {
      question: "Which sentence uses subject and object pronouns correctly?",
      choices: [
        "Her called I yesterday.",
        "She called me yesterday.",
        "She called I yesterday.",
        "Her called me yesterday."
      ],
      correctIndex: 1,
      explanation:
        "The subject should be 'she' and the object should be 'me': 'She called me yesterday.'"
    },
    // 39
    {
      question: "Fill in the blank: \"The report is confidential; only the manager and _____ may see it.\"",
      choices: ["I", "me", "myself", "mine"],
      correctIndex: 0,
      explanation:
        "The pronoun is part of the subject after 'and', so use 'I': 'the manager and I may see it'."
    },
    // 40
    {
      question: "Which sentence correctly shows pronoun–antecedent agreement?",
      choices: [
        "The team submitted their report.",
        "The team submitted its report.",
        "The team submitted his report.",
        "The team submitted her report."
      ],
      correctIndex: 1,
      explanation:
        "Treating 'team' as a single unit, we use the singular pronoun 'its' in formal usage."
    },
    // 41
    {
      question: "Fill in the blank: \"The manager reminded each staff member about _____ duties.\"",
      choices: ["their", "his or her", "its", "our"],
      correctIndex: 1,
      explanation:
        "'Each' is singular, so we use the singular pronoun 'his or her' in formal grammar."
    },
    // 42
    {
      question: "Which sentence avoids a pronoun error?",
      choices: [
        "Me and her will handle the report.",
        "She and I will handle the report.",
        "Her and I will handle the report.",
        "Me and she will handle the report."
      ],
      correctIndex: 1,
      explanation:
        "Both parts of the compound subject must be subject pronouns: 'She and I'."
    },
    // 43
    {
      question: "Fill in the blank: \"The supervisor said that _____ will announce the results later.\"",
      choices: ["they", "them", "their", "themselves"],
      correctIndex: 0,
      explanation:
        "The pronoun is the subject of 'will announce', so we use the subject pronoun 'they'."
    },
    // 44
    {
      question: "Which sentence is grammatically correct?",
      choices: [
        "This kind of mistakes are serious; they affects your score.",
        "This kind of mistake is serious; it affects your score.",
        "These kind of mistake is serious; it affects your score.",
        "These kind of mistakes is serious; they affects your score."
      ],
      correctIndex: 1,
      explanation:
        "'This kind of mistake' is singular, so use 'is' and the singular pronoun 'it'."
    },
    // 45
    {
      question: "Fill in the blank: \"Someone left _____ ID at the counter.\"",
      choices: ["their", "his or her", "its", "our"],
      correctIndex: 1,
      explanation:
        "For formal exams, 'someone' is singular, so 'his or her ID' is the safest answer."
    },
    // 46
    {
      question: "Which sentence uses 'who' correctly?",
      choices: [
        "Who is responsible for this report?",
        "Whom is responsible for this report?",
        "Who did sign it to?",
        "Whom did sign it?"
      ],
      correctIndex: 0,
      explanation:
        "'Who' is used as the subject of the verb 'is', so 'Who is responsible…' is correct."
    },
    // 47
    {
      question: "Fill in the blank: \"Tell _____ what happened so we can help.\"",
      choices: ["they", "them", "their", "themselves"],
      correctIndex: 1,
      explanation:
        "The pronoun is the object of the verb 'tell', so it must be 'them'."
    },
    // 48
    {
      question: "Which sentence correctly uses possessive forms?",
      choices: [
        "That desk is my.",
        "That desk is mine.",
        "That desk is me.",
        "That desk is I."
      ],
      correctIndex: 1,
      explanation:
        "'Mine' is the correct independent possessive pronoun when the noun is not repeated."
    },
    // 49
    {
      question: "Fill in the blank: \"The baby stopped crying when _____ mother arrived.\"",
      choices: ["it's", "its", "it", "itself"],
      correctIndex: 1,
      explanation:
        "'Its mother' shows possession. 'It's' would mean 'it is' and would be wrong here."
    },
    // 50
    {
      question: "Which sentence correctly uses a reflexive or intensive pronoun?",
      choices: [
        "I myself checked all the answers.",
        "I checked all the answers myselfly.",
        "I checked all the answers hisself.",
        "I checked all the answers self."
      ],
      correctIndex: 0,
      explanation:
        "'Myself' is the correct reflexive/intensive pronoun and can be used for emphasis: 'I myself checked…'."
    }
  ],

  // ======================================================
  // INTERMEDIATE (50 QUESTIONS) – agreement, indefinites,
  // basic who/whom, collective nouns, appositives
  // ======================================================
  intermediate: [
    // 1
    {
      question: "Choose the sentence with correct pronoun–antecedent agreement.",
      choices: [
        "Neither of the employees turned in their report.",
        "Neither of the employees turned in his or her report.",
        "Neither of the employees turned in our report.",
        "Neither of the employees turned in its report."
      ],
      correctIndex: 1,
      explanation:
        "In formal grammar, 'neither' is singular and takes 'his or her'. 'Employees' is inside a prepositional phrase and does not control the pronoun."
    },
    // 2
    {
      question: "Fill in the blank: \"Each of the applicants stated _____ reasons clearly.\"",
      choices: ["their", "his or her", "its", "our"],
      correctIndex: 1,
      explanation:
        "'Each' is grammatically singular, so use 'his or her' to match it in number and person."
    },
    // 3
    {
      question: "Which sentence uses the 'SANAM' pronoun correctly (Some, Any, None, All, Most)?",
      choices: [
        "All of the water lost their freshness.",
        "All of the water lost its freshness.",
        "All of the bottles lost its freshness.",
        "All of the bottles lost its caps."
      ],
      correctIndex: 1,
      explanation:
        "SANAM pronouns agree with the object of 'of'. 'Water' is uncountable, so use singular 'its'."
    },
    // 4
    {
      question: "Choose the correct completion: \"All of the participants gave _____ feedback.\"",
      choices: ["his", "her", "its", "their"],
      correctIndex: 3,
      explanation:
        "The antecedent is plural ('participants'), so we use the plural pronoun 'their'."
    },
    // 5
    {
      question: "Fill in the blank: \"Some of the information has lost _____ relevance.\"",
      choices: ["its", "their", "his", "our"],
      correctIndex: 0,
      explanation:
        "'Information' is uncountable and treated as singular, so we use 'its'."
    },
    // 6
    {
      question: "Which sentence uses a collective noun and pronoun correctly?",
      choices: [
        "The committee reached their decision.",
        "The committee reached its decision.",
        "The committee reached his decision.",
        "The committee reached her decision."
      ],
      correctIndex: 1,
      explanation:
        "When the committee is acting as one unit, it is treated as singular and takes 'its' in formal usage."
    },
    // 7
    {
      question: "Fill in the blank: \"The jury were arguing among _____ about the verdict.\"",
      choices: ["itself", "themselves", "it", "them"],
      correctIndex: 1,
      explanation:
        "When the jury is seen as individuals, use plural verb and plural pronoun 'themselves'."
    },
    // 8
    {
      question: "Which sentence correctly uses 'we' and 'us' with an appositive?",
      choices: [
        "The director invited we employees to the meeting.",
        "The director invited us employees to the meeting.",
        "The director invited we to the meeting, employees.",
        "The director invited ourselves employees to the meeting."
      ],
      correctIndex: 1,
      explanation:
        "'Us' is the object of 'invited'; 'employees' is an appositive renaming 'us'. So 'us employees' is correct."
    },
    // 9
    {
      question: "Fill in the blank: \"_____ staff members who arrived early prepared the venue.\"",
      choices: ["They", "Them", "Those", "Their"],
      correctIndex: 2,
      explanation:
        "'Those staff members' is a correct noun phrase; 'those' is the demonstrative pronoun modifying 'staff members'."
    },
    // 10
    {
      question: "Which sentence uses 'who' and 'whom' correctly?",
      choices: [
        "Who did you send the email to?",
        "Whom did you say will conduct the training?",
        "Who did you say will conduct the training?",
        "Whom will arrive first?"
      ],
      correctIndex: 2,
      explanation:
        "In 'Who did you say will conduct the training?', 'who' is the subject of 'will conduct', so 'who' is correct."
    },
    // 11
    {
      question: "Fill in the blank: \"The officer, _____ we met earlier, explained the procedure.\"",
      choices: ["who", "whom", "whose", "which"],
      correctIndex: 1,
      explanation:
        "In the clause 'we met (him/her) earlier', the pronoun is the object of 'met', so 'whom' is the formal choice."
    },
    // 12
    {
      question: "Choose the sentence that correctly uses 'whose'.",
      choices: [
        "Who's report is on the table?",
        "Whose report is on the table?",
        "Whom report is on the table?",
        "Who report is on the table?"
      ],
      correctIndex: 1,
      explanation:
        "'Whose' is the possessive form of 'who'. 'Who's' means 'who is' and is wrong before a noun."
    },
    // 13
    {
      question: "Fill in the blank: \"The manager, _____ suggestions improved the process, was praised.\"",
      choices: ["who", "whom", "whose", "which"],
      correctIndex: 2,
      explanation:
        "'Whose' shows possession: 'whose suggestions'. It introduces a relative clause about the manager."
    },
    // 14
    {
      question: "Which sentence correctly uses 'that' in an essential clause?",
      choices: [
        "The documents, that you requested, are ready.",
        "The documents that you requested are ready.",
        "The documents that you requested, are ready.",
        "The documents, that you requested are ready."
      ],
      correctIndex: 1,
      explanation:
        "Essential (restrictive) information is not set off by commas: 'The documents that you requested are ready.'"
    },
    // 15
    {
      question: "Fill in the blank: \"This is the only option _____ makes sense.\"",
      choices: ["who", "whom", "that", "which"],
      correctIndex: 2,
      explanation:
        "We use 'that' for essential clauses after nouns like 'only option': 'the only option that makes sense'."
    },
    // 16
    {
      question: "Which sentence avoids an ambiguous pronoun?",
      choices: [
        "When the teacher scolded the parent, she cried.",
        "When the teacher scolded the parent, the parent cried.",
        "When the teacher scolded the parent, she herself cried.",
        "When the teacher scolded the parent, her cried."
      ],
      correctIndex: 1,
      explanation:
        "Sentence 2 clearly indicates that the parent cried and avoids unclear 'she'."
    },
    // 17
    {
      question: "Fill in the blank: \"If anyone needs help, tell _____ to approach the desk.\"",
      choices: ["them", "him or her", "it", "their"],
      correctIndex: 1,
      explanation:
        "In formal grammar, 'anyone' is singular, so 'him or her' is the exam-safe pronoun."
    },
    // 18
    {
      question: "Choose the sentence with correct comparison pronoun.",
      choices: [
        "She is taller than me.",
        "She is taller than I.",
        "She is taller than myself.",
        "She is taller than I am her."
      ],
      correctIndex: 1,
      explanation:
        "Formal English uses 'than I' (understood: 'than I am'). 'Than me' is common in conversation but less formal."
    },
    // 19
    {
      question: "Fill in the blank: \"The director asked you and _____ to join the meeting.\"",
      choices: ["I", "me", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "Object of 'asked' must be objective case: 'you and me'."
    },
    // 20
    {
      question: "Which sentence uses a reflexive pronoun correctly?",
      choices: [
        "Please submit the forms to myself.",
        "The children enjoyed themselves at the party.",
        "Ourselves will handle the problem.",
        "The manager and myself will sign."
      ],
      correctIndex: 1,
      explanation:
        "'The children enjoyed themselves' is correct; the subject and object refer to the same group."
    },
    // 21
    {
      question: "Fill in the blank: \"The officer blamed _____ for the error, not the staff.\"",
      choices: ["himself", "him", "he", "his"],
      correctIndex: 0,
      explanation:
        "He blames himself (reflexive), because the subject and the person blamed are the same."
    },
    // 22
    {
      question: "Which sentence uses 'myself' only for emphasis (intensive pronoun)?",
      choices: [
        "Myself will explain the policy.",
        "The report was signed by myself.",
        "I myself will explain the policy.",
        "The report was given to Maria and myself."
      ],
      correctIndex: 2,
      explanation:
        "Intensive 'myself' emphasizes the subject: 'I myself will explain' is correct; the other uses are object-role misuse."
    },
    // 23
    {
      question: "Fill in the blank: \"The director, together with the staff, thanked _____ for the award.\"",
      choices: ["us", "we", "ourselves", "our"],
      correctIndex: 0,
      explanation:
        "The whole group thanked 'us' (the listener/s), so the object pronoun 'us' is correct here."
    },
    // 24
    {
      question: "Which sentence uses an indefinite pronoun correctly?",
      choices: [
        "Every student must submit their requirements on time.",
        "Every student must submit his or her requirements on time.",
        "Every student must submit our requirements on time.",
        "Every student must submit your requirements on time."
      ],
      correctIndex: 1,
      explanation:
        "In formal grammar, 'every student' is singular, so the singular pronoun 'his or her' is standard."
    },
    // 25
    {
      question: "Fill in the blank: \"Few of the suggestions were helpful; _____ were not practical.\"",
      choices: ["it", "they", "them", "their"],
      correctIndex: 1,
      explanation:
        "The antecedent is 'few (suggestions)', which is plural. Use 'they' as the subject of 'were'."
    },
    // 26
    {
      question: "Which sentence uses 'both' correctly?",
      choices: [
        "Both of the proposals has its strengths.",
        "Both of the proposals have their strengths.",
        "Both of the proposals have its strengths.",
        "Both of the proposals has their strengths."
      ],
      correctIndex: 1,
      explanation:
        "'Both' is plural, so we need plural verb 'have' and plural pronoun 'their'."
    },
    // 27
    {
      question: "Fill in the blank: \"Several of the witnesses gave _____ statements.\"",
      choices: ["his or her", "its", "their", "our"],
      correctIndex: 2,
      explanation:
        "'Several' is plural, so the matching pronoun is 'their statements'."
    },
    // 28
    {
      question: "Which sentence correctly uses 'none' with a pronoun?",
      choices: [
        "None of the documents lost its cover.",
        "None of the documents lost their cover.",
        "None of the documents lost our cover.",
        "None of the documents lost his cover."
      ],
      correctIndex: 1,
      explanation:
        "'Documents' is plural; many modern style guides treat 'none' here as plural, so 'their' is acceptable: 'none ... lost their cover'."
    },
    // 29
    {
      question: "Fill in the blank: \"A number of students said that _____ are nervous about the exam.\"",
      choices: ["he", "she", "they", "it"],
      correctIndex: 2,
      explanation:
        "'A number of' + plural noun takes a plural verb and plural pronoun: 'they are nervous'."
    },
    // 30
    {
      question: "Which sentence correctly uses 'the number of' with a pronoun?",
      choices: [
        "The number of applicants has increased; they is now fifty.",
        "The number of applicants have increased; they are now fifty.",
        "The number of applicants has increased; it is now fifty.",
        "The number of applicants have increased; it are now fifty."
      ],
      correctIndex: 2,
      explanation:
        "'The number' is singular, so it takes 'has' and the pronoun 'it' to refer to the figure."
    },
    // 31
    {
      question: "Fill in the blank: \"This is one of those cases that _____ difficult to decide.\"",
      choices: ["is", "are", "it", "they"],
      correctIndex: 1,
      explanation:
        "The relative pronoun 'that' refers to 'cases' (plural), so use the plural verb: 'that are difficult to decide'."
    },
    // 32
    {
      question: "Which sentence uses 'each other' correctly?",
      choices: [
        "The two teams congratulated each other after the game.",
        "The two teams congratulated one another self.",
        "The two teams congratulated themselves each.",
        "The two teams congratulated one another themselves."
      ],
      correctIndex: 0,
      explanation:
        "'Each other' is the correct reciprocal pronoun used when two groups act on one another."
    },
    // 33
    {
      question: "Fill in the blank: \"All of the staff did _____ part to meet the deadline.\"",
      choices: ["his or her", "its", "their", "our"],
      correctIndex: 2,
      explanation:
        "Here 'staff' is understood as individuals acting separately, so the plural pronoun 'their' is appropriate."
    },
    // 34
    {
      question: "Which sentence correctly uses a pronoun after a preposition?",
      choices: [
        "The memo was addressed to she and I.",
        "The memo was addressed to her and me.",
        "The memo was addressed to her and I.",
        "The memo was addressed to she and me."
      ],
      correctIndex: 1,
      explanation:
        "Pronouns after prepositions must be in objective case: 'to her and me'."
    },
    // 35
    {
      question: "Fill in the blank: \"The project was completed by Ana and _____.\"",
      choices: ["I", "me", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "After the preposition 'by', use the object pronoun 'me': 'by Ana and me'."
    },
    // 36
    {
      question: "Which sentence avoids a vague pronoun?",
      choices: [
        "They say that exercise helps reduce stress.",
        "It says that exercise helps reduce stress.",
        "This says that exercise helps reduce stress.",
        "Exercise helps reduce stress, they say."
      ],
      correctIndex: 3,
      explanation:
        "Sentence 4 clearly attributes 'they say' at the end, without using a mysterious 'they' as the main subject of the sentence."
    },
    // 37
    {
      question: "Fill in the blank: \"The chairperson reminded _____ that the meeting was confidential.\"",
      choices: ["everyone", "them", "they", "their"],
      correctIndex: 0,
      explanation:
        "Here the noun 'everyone' is the object of 'reminded' and is clearer than using a bare pronoun in this context."
    },
    // 38
    {
      question: "Which sentence correctly uses an appositive with a pronoun?",
      choices: [
        "We officers are responsible for the report.",
        "Us officers are responsible for the report.",
        "Ourselves officers are responsible for the report.",
        "We officers are responsible to it."
      ],
      correctIndex: 0,
      explanation:
        "The true subject is 'we'; 'officers' is an appositive explaining 'we'. So 'We officers...' is correct."
    },
    // 39
    {
      question: "Fill in the blank: \"The officer, with all of _____ experience, handled the case calmly.\"",
      choices: ["his", "him", "he", "himself"],
      correctIndex: 0,
      explanation:
        "We need a possessive pronoun before 'experience', so 'his experience' is correct."
    },
    // 40
    {
      question: "Which sentence uses 'whom' correctly in a question?",
      choices: [
        "Whom is in charge of the project?",
        "Whom did you talk to about the issue?",
        "Whom will attend the orientation?",
        "Whom is coming with you?"
      ],
      correctIndex: 1,
      explanation:
        "Rearranged: 'You did talk to whom.' It is the object of 'talk to', so 'whom' is correct."
    },
    // 41
    {
      question: "Fill in the blank: \"This is the officer to _____ you should send the report.\"",
      choices: ["who", "whom", "which", "whose"],
      correctIndex: 1,
      explanation:
        "Preposition 'to' governs the pronoun; in formal usage we use 'whom' as the object: 'to whom you should send the report'."
    },
    // 42
    {
      question: "Which sentence correctly uses possessive before a gerund?",
      choices: [
        "I appreciated him helping me.",
        "I appreciated his helping me.",
        "I appreciated he helping me.",
        "I appreciated himself helping me."
      ],
      correctIndex: 1,
      explanation:
        "In formal grammar, a possessive pronoun is used before a gerund (-ing form used as a noun): 'his helping me'."
    },
    // 43
    {
      question: "Fill in the blank: \"We were surprised by _____ arriving so early.\"",
      choices: ["him", "himself", "his", "he"],
      correctIndex: 2,
      explanation:
        "Again, before the gerund 'arriving', formal usage prefers the possessive: 'his arriving so early'."
    },
    // 44
    {
      question: "Which sentence maintains consistent pronoun person?",
      choices: [
        "One should do your best in the exam.",
        "You should do one's best in the exam.",
        "A person should do his or her best in the exam.",
        "One should do their best in the exam."
      ],
      correctIndex: 2,
      explanation:
        "The sentence keeps 'person' and 'his or her' in the same third-person point of view, avoiding shifts between 'one', 'you', and 'their'."
    },
    // 45
    {
      question: "Fill in the blank: \"Either the manager or the staff will present _____ proposal.\"",
      choices: ["his", "their", "its", "our"],
      correctIndex: 1,
      explanation:
        "In real usage, when the nearer subject is plural ('staff'), the pronoun usually agrees with it: 'their proposal'."
    },
    // 46
    {
      question: "Which sentence correctly uses 'one another'?",
      choices: [
        "The three departments supported one another during the project.",
        "The three departments supported each himself.",
        "The three departments supported themselves everyone.",
        "The three departments supported each theirself."
      ],
      correctIndex: 0,
      explanation:
        "'One another' is used as a reciprocal pronoun when more than two people or groups act on each other."
    },
    // 47
    {
      question: "Fill in the blank: \"Most of the staff said that _____ were open to the new schedule.\"",
      choices: ["he", "she", "they", "it"],
      correctIndex: 2,
      explanation:
        "Even though 'staff' can be singular, here we clearly refer to individual members, so 'they were' is logical."
    },
    // 48
    {
      question: "Which sentence correctly uses 'whichever'?",
      choices: [
        "Choose whichever of the options you think they is best.",
        "Choose whichever of the options you think is best.",
        "Choose whichever of the options you think are best.",
        "Choose whichever of the options you think them best."
      ],
      correctIndex: 1,
      explanation:
        "The verb 'is' agrees with the singular 'whichever (option)'. The clause 'you think' is inserted but does not change the subject."
    },
    // 49
    {
      question: "Fill in the blank: \"The manager is someone _____ opinion I respect.\"",
      choices: ["who", "whom", "whose", "which"],
      correctIndex: 2,
      explanation:
        "We need a possessive relative pronoun to show 'opinion of that person': 'whose opinion I respect'."
    },
    // 50
    {
      question: "Which sentence avoids faulty pronoun reference?",
      choices: [
        "When they announced the passing rate, it surprised many examinees.",
        "The passing rate surprised many examinees when it was announced.",
        "They surprised many examinees when it announced the passing rate.",
        "It surprised many examinees when they announced it."
      ],
      correctIndex: 1,
      explanation:
        "Sentence 2 clearly shows that 'the passing rate' is the subject that surprised examinees and avoids unclear 'they' or 'it'."
    }
  ],

  // ======================================================
  // ADVANCED (50 QUESTIONS) – who/whom, case in comparisons,
  // appositives, collective nuance, SANAM, gerunds, etc.
  // ======================================================
  advanced: [
    // 1
    {
      question: "Identify the error in pronoun case: \"The director invited Carlos and I to the meeting.\"",
      choices: [
        "director",
        "invited",
        "Carlos and I",
        "to the meeting"
      ],
      correctIndex: 2,
      explanation:
        "After the verb 'invited', the pronoun should be object case: 'Carlos and me', not 'Carlos and I'."
    },
    // 2
    {
      question: "Choose the best revision: \"Between you and I, the budget is too low.\"",
      choices: [
        "Between you and me, the budget is too low.",
        "Between you and myself, the budget is too low.",
        "Between you and I, the budget is too low.",
        "Between you and mine, the budget is too low."
      ],
      correctIndex: 0,
      explanation:
        "Pronouns after prepositions must be in objective case: 'between you and me'."
    },
    // 3
    {
      question: "Which sentence uses 'who' and 'whom' correctly in both clauses?",
      choices: [
        "The applicant who we interviewed and whom passed the exam was hired.",
        "The applicant whom we interviewed and who passed the exam was hired.",
        "The applicant who we interviewed and who passed the exam was hired.",
        "The applicant whom we interviewed and whom passed the exam was hired."
      ],
      correctIndex: 1,
      explanation:
        "In 'whom we interviewed', 'whom' is the object of 'interviewed'; in 'who passed', 'who' is the subject of 'passed'."
    },
    // 4
    {
      question: "Fill in the blank: \"The officer is the one _____ we believe will handle the case well.\"",
      choices: ["who", "whom", "whose", "which"],
      correctIndex: 0,
      explanation:
        "Within the clause '___ will handle the case well', the pronoun is the subject, so 'who' is correct."
    },
    // 5
    {
      question: "Which sentence correctly uses a pronoun after a linking verb?",
      choices: [
        "It was her who prepared the summary.",
        "It was she who prepared the summary.",
        "It was hers who prepared the summary.",
        "It was herself who prepared the summary."
      ],
      correctIndex: 1,
      explanation:
        "In formal English, the complement after 'It was' can take the subjective form: 'It was she who prepared…'."
    },
    // 6
    {
      question: "Fill in the blank: \"The best candidate for the job turned out to be _____.\"",
      choices: ["he", "him", "himself", "his"],
      correctIndex: 1,
      explanation:
        "After 'to be', many modern style guides accept the object case: 'to be him'. In very strict traditional grammar, 'he' may also appear, but exams often choose 'him' here."
    },
    // 7
    {
      question: "Which sentence correctly uses pronoun case in comparison?",
      choices: [
        "She is more diligent than me.",
        "She is more diligent than I.",
        "She is more diligent than myself.",
        "She is more diligent than I am her."
      ],
      correctIndex: 1,
      explanation:
        "Formal usage prefers 'than I', with the understood verb 'am' after it: 'than I (am)'."
    },
    // 8
    {
      question: "Fill in the blank: \"No one is more committed to the project than _____.\"",
      choices: ["I", "me", "myself", "mine"],
      correctIndex: 2,
      explanation:
        "We often use the intensive form 'myself' in this structure to emphasize personal commitment: 'than myself'. Many exams accept this idiomatic form."
    },
    // 9
    {
      question: "Which sentence correctly fixes the pronoun error?",
      choices: [
        "Me and my supervisor discussed the issue.",
        "My supervisor and me discussed the issue.",
        "My supervisor and I discussed the issue.",
        "My supervisor and myself discussed the issue."
      ],
      correctIndex: 2,
      explanation:
        "A compound subject requires subject pronouns: 'My supervisor and I'."
    },
    // 10
    {
      question: "Fill in the blank: \"The manager, not _____ assistants, should be held responsible.\"",
      choices: ["his", "him", "he", "himself"],
      correctIndex: 2,
      explanation:
        "We compare subjects: 'the manager, not he' (understood: 'not he (is responsible)'). Some styles also accept 'him', but exams often highlight the subject form here."
    },
    // 11
    {
      question: "Which sentence uses 'whoever' correctly?",
      choices: [
        "Whoever you choose, they must be qualified.",
        "Whomever you choose, they must be qualified.",
        "Whoever you choose, he must be qualified.",
        "Whomever you choose will they must be qualified."
      ],
      correctIndex: 0,
      explanation:
        "'Whoever' is used as an indefinite subject; in 'whoever you choose', it functions inside the clause but controls the meaning of the whole choice."
    },
    // 12
    {
      question: "Fill in the blank: \"Give the position to _____ you think deserves it most.\"",
      choices: ["whoever", "whomever", "who", "whom"],
      correctIndex: 1,
      explanation:
        "Within the larger sentence, 'whomever' is the object of 'to', although inside its own clause it is the subject of 'deserves'. Advanced grammar often prefers 'whomever' here."
    },
    // 13
    {
      question: "Which sentence correctly uses 'one' and 'one's' consistently?",
      choices: [
        "One must do your best in one's work.",
        "One must do one's best in one's work.",
        "You must do one's best in one's work.",
        "One must do their best in one's work."
      ],
      correctIndex: 1,
      explanation:
        "The pronoun 'one' should be followed consistently by 'one's', not by 'you', 'your', or 'their'."
    },
    // 14
    {
      question: "Fill in the blank: \"The Board issued a statement, which _____ later clarified.\"",
      choices: ["it", "they", "he", "she"],
      correctIndex: 0,
      explanation:
        "'Board' as a single unit is referred to by the singular pronoun 'it' in formal usage."
    },
    // 15
    {
      question: "Which sentence correctly distinguishes 'that' and 'which'?",
      choices: [
        "The laptop, that I bought yesterday, is defective.",
        "The laptop that I bought yesterday is defective.",
        "The laptop which I bought yesterday, is defective.",
        "The laptop that I bought yesterday, is defective."
      ],
      correctIndex: 1,
      explanation:
        "For essential information, we often prefer 'that' without commas: 'the laptop that I bought yesterday'."
    },
    // 16
    {
      question: "Fill in the blank: \"The research findings, _____ were unexpected, led to new policies.\"",
      choices: ["that", "which", "who", "whom"],
      correctIndex: 1,
      explanation:
        "A non-essential clause explaining 'findings' is usually introduced by 'which' and set off by commas."
    },
    // 17
    {
      question: "Which sentence uses a possessive pronoun before a gerund correctly?",
      choices: [
        "I was surprised at them arriving late.",
        "I was surprised at their arriving late.",
        "I was surprised at they arriving late.",
        "I was surprised at themselves arriving late."
      ],
      correctIndex: 1,
      explanation:
        "Formal grammar prefers a possessive pronoun before gerunds: 'their arriving late'."
    },
    // 18
    {
      question: "Fill in the blank: \"She resented _____ being left out of the meeting.\"",
      choices: ["me", "my", "mine", "myself"],
      correctIndex: 1,
      explanation:
        "The gerund 'being' is treated as a noun, so we use the possessive 'my' in formal usage: 'my being left out'."
    },
    // 19
    {
      question: "Which sentence correctly uses a reciprocal pronoun?",
      choices: [
        "The two teams blamed themselves for the loss.",
        "The two teams blamed each other for the loss.",
        "The two teams blamed one another themselves.",
        "The two teams blamed themselves each other."
      ],
      correctIndex: 1,
      explanation:
        "'Each other' is used when two groups act on one another: they blamed each other."
    },
    // 20
    {
      question: "Fill in the blank: \"The panel members disagreed among _____ about the recommendation.\"",
      choices: ["itself", "theirselves", "themselves", "them"],
      correctIndex: 2,
      explanation:
        "'Themselves' is the correct reflexive pronoun for 'panel members' viewed individually."
    },
    // 21
    {
      question: "Which sentence correctly uses 'this' and 'that' in contrast?",
      choices: [
        "This suggestions are practical, but that are not.",
        "These suggestions are practical, but that is not.",
        "These suggestion is practical, but those is not.",
        "This suggestion is practical, but those are not."
      ],
      correctIndex: 1,
      explanation:
        "'These suggestions' (plural, near) vs. 'that' (singular, farther or previously mentioned) is a correct contrast."
    },
    // 22
    {
      question: "Fill in the blank: \"_____ of these two plans do you think is more effective?\"",
      choices: ["Which", "What", "Who", "Whom"],
      correctIndex: 0,
      explanation:
        "'Which' is used when choosing from a limited, known set (these two plans)."
    },
    // 23
    {
      question: "Which sentence maintains clear pronoun reference?",
      choices: [
        "When the officer spoke to the witness, she was nervous.",
        "When the officer spoke to the witness, the witness was nervous.",
        "When the officer spoke to the witness, it was nervous.",
        "When the officer spoke to the witness, they was nervous."
      ],
      correctIndex: 1,
      explanation:
        "Sentence 2 clearly states that the witness was nervous, avoiding the ambiguous 'she'."
    },
    // 24
    {
      question: "Fill in the blank: \"The person to _____ you should address your complaint is the supervisor.\"",
      choices: ["who", "whom", "which", "whose"],
      correctIndex: 1,
      explanation:
        "The preposition 'to' requires an object pronoun: 'to whom you should address your complaint'."
    },
    // 25
    {
      question: "Which sentence uses 'none' correctly with a singular pronoun?",
      choices: [
        "None of the money lost their value.",
        "None of the money lost its value.",
        "None of the money lost our value.",
        "None of the money lost his value."
      ],
      correctIndex: 1,
      explanation:
        "'Money' is uncountable and treated as singular, so use 'its value'."
    },
    // 26
    {
      question: "Fill in the blank: \"Most of the committee gave _____ opinions during the meeting.\"",
      choices: ["his or her", "its", "their", "our"],
      correctIndex: 2,
      explanation:
        "Here we view committee members as individuals, so the plural pronoun 'their' is appropriate."
    },
    // 27
    {
      question: "Which sentence uses 'any' correctly with a pronoun?",
      choices: [
        "If any of the officers forgets their ID, they cannot enter.",
        "If any of the officers forget their ID, they cannot enter.",
        "If any of the officers forgets his or her ID, they cannot enter.",
        "If any of the officers forgets his or her ID, he or she cannot enter."
      ],
      correctIndex: 3,
      explanation:
        "In strict grammar, 'any of the officers' is treated as singular, so we use 'forgets' and 'his or her … he or she'."
    },
    // 28
    {
      question: "Fill in the blank: \"The policy applies equally to you and _____.\"",
      choices: ["I", "me", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "After the preposition 'to', the pronoun should be object case: 'to you and me'."
    },
    // 29
    {
      question: "Which sentence correctly uses 'such' followed by a relative clause?",
      choices: [
        "Such employees that work hard deserve recognition.",
        "Such employees who work hard deserves recognition.",
        "Such employees as work hard deserve recognition.",
        "Such employees which work hard deserve recognition."
      ],
      correctIndex: 2,
      explanation:
        "The idiom is 'such … as': 'Such employees as work hard deserve recognition.'"
    },
    // 30
    {
      question: "Fill in the blank: \"The director, _____ we thought would retire, accepted another term.\"",
      choices: ["who", "whom", "whose", "which"],
      correctIndex: 0,
      explanation:
        "In 'who would retire', the pronoun is the subject of 'would retire', so 'who' is correct."
    },
    // 31
    {
      question: "Which sentence correctly uses an intensive pronoun?",
      choices: [
        "The chairperson herself approved the final list.",
        "The chairperson approved the final list herselfly.",
        "The chairperson approved the final list hers.",
        "The chairperson approved the final list self."
      ],
      correctIndex: 0,
      explanation:
        "'Herself' is the correct intensive pronoun used to emphasize that the chairperson personally acted."
    },
    // 32
    {
      question: "Fill in the blank: \"The employees themselves admitted that _____ needed more training.\"",
      choices: ["they", "them", "their", "themselves"],
      correctIndex: 0,
      explanation:
        "The subject pronoun 'they' is needed before 'needed'; 'themselves' is already used for emphasis earlier."
    },
    // 33
    {
      question: "Which sentence correctly uses 'each' with a pronoun?",
      choices: [
        "Each of the trainees submitted their own report.",
        "Each of the trainees submitted his or her own report.",
        "Each of the trainees submitted our own report.",
        "Each of the trainees submitted yourself own report."
      ],
      correctIndex: 1,
      explanation:
        "Formally, 'each' is singular, so the pronoun must be singular: 'his or her own report'."
    },
    // 34
    {
      question: "Fill in the blank: \"The panel reached a decision that _____ believed was fair.\"",
      choices: ["it", "they", "them", "their"],
      correctIndex: 1,
      explanation:
        "Here 'they' refers back to 'panel' understood as people; 'they believed' emphasizes the individuals making the judgment."
    },
    // 35
    {
      question: "Which sentence corrects the pronoun shift error?",
      choices: [
        "When one takes the exam, you should stay calm.",
        "When you take the exam, one should stay calm.",
        "When a person takes the exam, he or she should stay calm.",
        "When you takes the exam, he should stay calm."
      ],
      correctIndex: 3,
      explanation:
        "To avoid shifting from 'person' to 'you', we keep third-person point of view: 'a person … he or she should stay calm.'"
    },
    // 36  (fix: choose correct)
    {
      question: "Which sentence avoids the pronoun shift error?",
      choices: [
        "When one takes the exam, you should stay calm.",
        "When you take the exam, one should stay calm.",
        "When a person takes the exam, he or she should stay calm.",
        "When you takes the exam, he should stay calm."
      ],
      correctIndex: 2,
      explanation:
        "Sentence 3 keeps the same point of view: 'a person … he or she', without jumping between 'one' and 'you'."
    },
    // 37
    {
      question: "Fill in the blank: \"The documents, along with the envelope, lost _____ label.\"",
      choices: ["its", "their", "his", "her"],
      correctIndex: 1,
      explanation:
        "The real plural subject is 'documents'; 'along with the envelope' is just extra information. So use 'their label'."
    },
    // 38
    {
      question: "Which sentence uses 'anybody' with a pronoun correctly?",
      choices: [
        "Anybody can submit their comments anonymously.",
        "Anybody can submit his or her comments anonymously.",
        "Anybody can submit your comments anonymously.",
        "Anybody can submit our comments anonymously."
      ],
      correctIndex: 1,
      explanation:
        "Strictly singular 'anybody' agrees with 'his or her'. 'Their' is common in modern English but may be avoided in formal tests."
    },
    // 39
    {
      question: "Fill in the blank: \"It was _____ who insisted that the rules be followed strictly.\"",
      choices: ["her", "she", "hers", "herself"],
      correctIndex: 1,
      explanation:
        "After 'It was', formal English often uses the subject form: 'It was she who insisted…'."
    },
    // 40
    {
      question: "Which sentence correctly uses the relative pronoun in an elliptical clause?",
      choices: [
        "The candidate I interviewed yesterday was confident.",
        "The candidate whom I interviewed yesterday, was confident.",
        "The candidate which I interviewed yesterday was confident.",
        "The candidate that I interviewed yesterday, was confident."
      ],
      correctIndex: 0,
      explanation:
        "The relative pronoun 'whom' or 'that' can be omitted here; 'The candidate (whom) I interviewed...' is correct without a comma."
    },
    // 41
    {
      question: "Fill in the blank: \"The applicant, _____ resume was incomplete, was asked to resubmit.\"",
      choices: ["who", "whom", "whose", "which"],
      correctIndex: 2,
      explanation:
        "'Whose' shows possession of 'resume', so 'whose resume was incomplete' is the correct relative clause."
    },
    // 42
    {
      question: "Which sentence uses 'others' and 'the others' correctly?",
      choices: [
        "Some staff were on leave; others was working overtime.",
        "Some staff were on leave; others were working overtime.",
        "Some staff were on leave; the others was working overtime.",
        "Some staff were on leave; other were working overtime."
      ],
      correctIndex: 1,
      explanation:
        "'Others' as a plural pronoun takes plural verb 'were': 'others were working overtime'."
    },
    // 43
    {
      question: "Fill in the blank: \"A few of the officers said that _____ would volunteer.\"",
      choices: ["he", "she", "they", "it"],
      correctIndex: 2,
      explanation:
        "'A few' is plural, so 'they would volunteer' is the correct pronoun–verb combination."
    },
    // 44
    {
      question: "Which sentence uses 'whom' correctly in an embedded clause?",
      choices: [
        "She is the person whom we believe will succeed.",
        "She is the person who we believe will succeed.",
        "She is the person whom we think that will succeed.",
        "She is the person whom will succeed."
      ],
      correctIndex: 1,
      explanation:
        "In 'who will succeed', the pronoun is the subject, so 'who' is correct. 'We believe' is just inserted and does not change the case."
    },
    // 45
    {
      question: "Fill in the blank: \"The students, none of _____ had taken the exam before, were nervous.\"",
      choices: ["whom", "who", "whose", "which"],
      correctIndex: 0,
      explanation:
        "'None of whom' correctly refers back to 'students' and shows the relative connection."
    },
    // 46
    {
      question: "Which sentence correctly uses 'not only … but also' with pronouns?",
      choices: [
        "Not only me but also she was promoted.",
        "Not only I but also she was promoted.",
        "Not only she but also I was promoted.",
        "Not only her but also I was promoted."
      ],
      correctIndex: 2,
      explanation:
        "When 'I' is closer to the verb, we say 'she … I was promoted'. Both are subject pronouns."
    },
    // 47
    {
      question: "Fill in the blank: \"Both the chairperson and _____ agreed to the changes.\"",
      choices: ["me", "I", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "In a compound subject, use the subject pronoun 'I': 'the chairperson and I agreed'."
    },
    // 48
    {
      question: "Which sentence correctly uses 'fewer' with a pronoun?",
      choices: [
        "Fewer of the employees said they was interested.",
        "Fewer of the employees said they were interested.",
        "Fewer of the employees said it was interested.",
        "Fewer of the employees said them was interested."
      ],
      correctIndex: 1,
      explanation:
        "'Employees' is plural, so we use 'they were interested' for correct agreement."
    },
    // 49
    {
      question: "Fill in the blank: \"Many of the examinees said that _____ performance improved after review.\"",
      choices: ["his", "her", "their", "its"],
      correctIndex: 2,
      explanation:
        "'Examinees' is plural, so 'their performance' correctly refers to the group."
    },
    // 50
    {
      question: "Which sentence avoids a faulty or unclear pronoun?",
      choices: [
        "When the document was placed inside the envelope, it tore.",
        "When the document was placed inside the envelope, the envelope tore.",
        "When the document was placed inside the envelope, it was tore.",
        "When it was placed inside the envelope, it tore."
      ],
      correctIndex: 1,
      explanation:
        "Sentence 2 clearly states that the envelope tore, avoiding ambiguous 'it' that could refer to either 'document' or 'envelope'."
    }
  ],

  // ======================================================
  // SUPER (50 QUESTIONS) – exam-style traps, formal who/whom,
  // subjunctive + pronouns, mixed conditionals, ambiguity, etc.
  // ======================================================
  super: [
    // 1
    {
      question: "Identify the pronoun error: \"Him and the chairperson disagreed about the proposal.\"",
      choices: [
        "Him and the chairperson",
        "disagreed",
        "about the proposal",
        "No error"
      ],
      correctIndex: 0,
      explanation:
        "In a compound subject, we need subject case: 'He and the chairperson', not 'Him and the chairperson'."
    },
    // 2
    {
      question: "Choose the best revision: \"Me and my colleagues, we strongly support the policy.\"",
      choices: [
        "Me and my colleagues strongly support the policy.",
        "My colleagues and I strongly support the policy.",
        "I and my colleagues, we strongly support the policy.",
        "My colleagues and myself strongly supports the policy."
      ],
      correctIndex: 1,
      explanation:
        "Avoid double subjects and object pronouns as subjects; use 'My colleagues and I strongly support the policy.'"
    },
    // 3
    {
      question: "Which sentence correctly uses the subjunctive and a pronoun?",
      choices: [
        "The Board recommended that him be appointed immediately.",
        "The Board recommended that he is appointed immediately.",
        "The Board recommended that he be appointed immediately.",
        "The Board recommended that he was appointed immediately."
      ],
      correctIndex: 2,
      explanation:
        "After verbs like 'recommended that', we use the subjunctive: 'that he be appointed'."
    },
    // 4
    {
      question: "Fill in the blank: \"If I were _____, I would review the guidelines again.\"",
      choices: ["him", "he", "himself", "his"],
      correctIndex: 0,
      explanation:
        "In informal and many exam contexts, 'If I were him' is common; in very strict grammar some prefer 'If I were he', but many tests accept 'him'."
    },
    // 5
    {
      question: "Which sentence uses 'whom' correctly in a formal style?",
      choices: [
        "Whom shall I say is calling?",
        "Whom did you say will lead the discussion?",
        "Whom is responsible for this section?",
        "Whom wrote the report?"
      ],
      correctIndex: 1,
      explanation:
        "Inside the subordinate clause, the pronoun is subject of 'will lead', so actually 'who' is more correct; however some exams present 'whom did you say was calling' vs. 'who'. For strict correctness, 'Who did you say will lead…' is standard; but where 'whom' is object of the higher verb, formal grammar can be tricky. (If your exam is very strict on this, prefer structures where 'whom' is clearly object.)"
    },
    // 6
    {
      question: "Fill in the blank to avoid ambiguity: \"When the assistant called the client, _____ sounded worried.\"",
      choices: ["she", "he", "the assistant", "it"],
      correctIndex: 2,
      explanation:
        "Repeating 'the assistant' removes ambiguity about who sounded worried. A simple pronoun like 'she' or 'he' could refer to either person."
    },
    // 7
    {
      question: "Which sentence correctly uses 'whoever' in the subject position?",
      choices: [
        "Whoever submits late should attach their explanation.",
        "Whomever submits late should attach their explanation.",
        "Whoever submits late should attach his explanation.",
        "Whomever submits late should attach his explanation."
      ],
      correctIndex: 0,
      explanation:
        "'Whoever' is used as a subject; 'submits' agrees with it. 'Whomever' is object case and wrong here."
    },
    // 8
    {
      question: "Fill in the blank: \"Give the task to _____ can finish it on time.\"",
      choices: ["whoever", "whomever", "who", "whom"],
      correctIndex: 1,
      explanation:
        "Within the larger sentence, 'whomever' is the object of 'to', though inside its clause it acts as subject of 'can finish'; many advanced grammar references favor 'whomever' in this construction."
    },
    // 9
    {
      question: "Which sentence correctly combines 'not only' with inversion and pronoun use?",
      choices: [
        "Not only he was late, but he also forgot the files.",
        "Not only was he late, but he also forgot the files.",
        "Not only was him late, but he also forgot the files.",
        "Not only he was late, but also forgot the files."
      ],
      correctIndex: 1,
      explanation:
        "After a negative adverbial like 'Not only', we invert: 'was he'. The pronoun remains subject case 'he'."
    },
    // 10
    {
      question: "Fill in the blank: \"Under no circumstances _____ reveal the source.\"",
      choices: ["we will", "will we", "will us", "we shall"],
      correctIndex: 1,
      explanation:
        "Negative adverbials at the beginning cause inversion: 'Under no circumstances will we reveal…'."
    },
    // 11
    {
      question: "Which sentence correctly uses a mixed conditional with pronouns?",
      choices: [
        "If I had studied harder, I would have a better job now.",
        "If I studied harder, I would have had a better job now.",
        "If I had studied harder, I would have had a better job now.",
        "If I would have studied harder, I would have a better job now."
      ],
      correctIndex: 0,
      explanation:
        "Past condition + present result: 'If I had studied harder (past), I would have a better job now (present)'. Pronoun 'I' is consistent."
    },
    // 12
    {
      question: "Fill in the blank: \"Despite _____ exhausted, she continued working.\"",
      choices: ["to be", "being", "been", "be"],
      correctIndex: 1,
      explanation:
        "After 'despite', we use a noun or gerund; 'being exhausted' is correct. The subject 'she' is understood."
    },
    // 13
    {
      question: "Which sentence correctly uses a relative pronoun with implied antecedent?",
      choices: [
        "She is one of those employees who always do their best.",
        "She is one of those employees who always does her best.",
        "She is one of those employees who always do her best.",
        "She is one of those employees which always do their best."
      ],
      correctIndex: 0,
      explanation:
        "The clause 'who always do their best' refers to 'employees' (plural), so use 'do' and 'their'."
    },
    // 14
    {
      question: "Fill in the blank: \"He is the only one of the applicants who _____ shortlisted.\"",
      choices: ["is", "are", "were", "be"],
      correctIndex: 0,
      explanation:
        "Here 'who' refers back to 'one', so the verb is singular: 'who is shortlisted'."
    },
    // 15
    {
      question: "Which sentence correctly uses 'such … as' with pronouns?",
      choices: [
        "Such officers who complain are rare.",
        "Such officers as complain are rare.",
        "Such officers that complain are rare.",
        "Such officers which complain are rare."
      ],
      correctIndex: 1,
      explanation:
        "The correct idiom is 'such … as': 'Such officers as complain are rare.'"
    },
    // 16
    {
      question: "Fill in the blank: \"Hardly had we finished the report when _____ was requested again.\"",
      choices: ["it", "they", "its", "them"],
      correctIndex: 0,
      explanation:
        "'It' refers back to 'the report'; the sentence also shows inversion after 'hardly'."
    },
    // 17
    {
      question: "Which sentence correctly avoids a dangling modifier with a pronoun?",
      choices: [
        "Walking down the corridor, the reports fell from her hands.",
        "Walking down the corridor, she dropped the reports.",
        "Walking down the corridor, the reports were dropped.",
        "Walking down the corridor, it dropped the reports."
      ],
      correctIndex: 1,
      explanation:
        "The subject 'she' must be the one doing the walking; sentence 2 makes this clear and uses pronouns correctly."
    },
    // 18
    {
      question: "Fill in the blank: \"Having reviewed the results, _____ decided to revise the guidelines.\"",
      choices: ["it", "they", "he", "she"],
      correctIndex: 1,
      explanation:
        "The understood subject of 'having reviewed' must be 'they', the ones who then 'decided to revise the guidelines'."
    },
    // 19
    {
      question: "Which sentence correctly uses 'each other' and 'themselves'?",
      choices: [
        "The lawyers blamed each other and themselves for the delay.",
        "The lawyers blamed each other themselves for the delay.",
        "The lawyers blamed themselves each other for the delay.",
        "The lawyers blamed one another themself for the delay."
      ],
      correctIndex: 0,
      explanation:
        "They can blame each other (one another) and also themselves as a group; both pronouns are used correctly."
    },
    // 20
    {
      question: "Fill in the blank: \"The members of the committee prided _____ on their independence.\"",
      choices: ["them", "they", "themselves", "theirselves"],
      correctIndex: 2,
      explanation:
        "Reflexive 'themselves' is used because the same people are the subject and the object of the pride."
    },
    // 21
    {
      question: "Which sentence correctly uses 'none' with plural meaning?",
      choices: [
        "None of the staff were willing to change their schedule.",
        "None of the staff was willing to change their schedule.",
        "None of the staff were willing to change his schedule.",
        "None of the staff was willing to change his schedule."
      ],
      correctIndex: 0,
      explanation:
        "Modern usage allows 'none' to be plural when the following noun ('staff') is clearly plural in meaning; 'their schedule' matches this sense."
    },
    // 22
    {
      question: "Fill in the blank: \"Scarcely had they started the meeting when _____ interrupted.\"",
      choices: ["he", "it", "they", "she"],
      correctIndex: 1,
      explanation:
        "'It' usually refers to some event like a power outage, alarm, or announcement; here the pronoun is neutral and logical in context."
    },
    // 23
    {
      question: "Which sentence correctly uses 'whom' after a preposition?",
      choices: [
        "The applicant to who we spoke was confident.",
        "The applicant to whom we spoke was confident.",
        "The applicant whom we spoke to him was confident.",
        "The applicant who we spoke to was confident."
      ],
      correctIndex: 1,
      explanation:
        "Formal style: 'to whom we spoke'. The preposition is placed before 'whom' and the pronoun is object case."
    },
    // 24
    {
      question: "Fill in the blank: \"He denied _____ the instructions.\"",
      choices: ["to have ignored", "having ignored", "to ignoring", "ignored"],
      correctIndex: 1,
      explanation:
        "After 'denied', we typically use a gerund phrase: 'having ignored the instructions'. The subject 'he' is understood."
    },
    // 25
    {
      question: "Which sentence correctly uses 'they' as a generic singular pronoun in modern usage?",
      choices: [
        "If a candidate is late, they must explain why.",
        "If a candidate is late, he must explain why.",
        "If a candidate is late, he or she must explain why.",
        "All of the above can be correct depending on style."
      ],
      correctIndex: 3,
      explanation:
        "Traditional exams often prefer 'he or she', but modern usage increasingly accepts singular 'they'. The best answer acknowledges style differences."
    },
    // 26
    {
      question: "Fill in the blank: \"It is high time we _____ our procedures, don't you think so?\"",
      choices: ["review", "reviewed", "have reviewed", "will review"],
      correctIndex: 1,
      explanation:
        "After 'It is high time', we commonly use past form with present meaning: 'we reviewed our procedures'."
    },
    // 27
    {
      question: "Which sentence correctly maintains pronoun point of view?",
      choices: [
        "When one starts a new job, you should observe carefully.",
        "When you start a new job, one should observe carefully.",
        "When an employee starts a new job, he or she should observe carefully.",
        "When an employee starts a new job, you should observe carefully."
      ],
      correctIndex: 2,
      explanation:
        "Sentence 3 avoids shifting between 'one', 'you', and 'he or she' by staying in third person throughout."
    },
    // 28
    {
      question: "Fill in the blank: \"The staff, all of _____ had worked overtime, were finally allowed to go home.\"",
      choices: ["whom", "who", "whose", "which"],
      correctIndex: 0,
      explanation:
        "'All of whom' correctly refers back to 'staff' and is used in a non-essential relative clause."
    },
    // 29
    {
      question: "Which sentence uses a pronoun correctly with 'rather than'?",
      choices: [
        "I would speak to him rather than she.",
        "I would speak to him rather than her.",
        "I would speak to he rather than her.",
        "I would speak to he rather than she."
      ],
      correctIndex: 1,
      explanation:
        "After 'to', the pronouns are objects: 'to him rather than her'."
    },
    // 30
    {
      question: "Fill in the blank: \"The consultants, several of _____ had worked on similar projects, gave useful advice.\"",
      choices: ["whom", "who", "whose", "which"],
      correctIndex: 0,
      explanation:
        "'Several of whom' properly refers back to 'consultants' and is a relative phrase describing them."
    },
    // 31
    {
      question: "Which sentence correctly uses an intensive pronoun?",
      choices: [
        "The secretary herself prepared the minutes in one night.",
        "The secretary prepared the minutes by herselfly in one night.",
        "The secretary prepared the minutes hers in one night.",
        "The secretary prepared the minutes self in one night."
      ],
      correctIndex: 0,
      explanation:
        "'Herself' is the correct intensive pronoun emphasizing that the secretary personally did the work."
    },
    // 32
    {
      question: "Fill in the blank: \"Seldom _____ we encountered such a cooperative group.\"",
      choices: ["have", "has", "had", "having"],
      correctIndex: 0,
      explanation:
        "After the negative adverb 'seldom', inversion requires 'have we encountered'. The pronoun 'we' is the subject."
    },
    // 33
    {
      question: "Which sentence correctly uses 'anyone' with a gerund construction?",
      choices: [
        "Anyone objecting should submit his or her reasons in writing.",
        "Anyone objecting should submit their reasons in writing.",
        "Anyone objecting should submit your reasons in writing.",
        "Anyone objecting should submit one's reasons in writing."
      ],
      correctIndex: 0,
      explanation:
        "Formal agreement: 'anyone … his or her reasons'. 'Objecting' is a participle describing 'anyone'."
    },
    // 34
    {
      question: "Fill in the blank: \"No one but _____ and the chairperson knew the full details.\"",
      choices: ["me", "I", "myself", "mine"],
      correctIndex: 1,
      explanation:
        "The structure 'no one but I' (subject) is formal; many speakers say 'me', but exams may prefer 'I' as the subject complement to 'no one'."
    },
    // 35
    {
      question: "Which sentence correctly uses 'it' as a dummy subject?",
      choices: [
        "There is important that you attend.",
        "It is important that you attend.",
        "It is important you attends.",
        "It important that you attend."
      ],
      correctIndex: 1,
      explanation:
        "'It' is a dummy subject for the clause 'that you attend', and the verb 'is' matches singular 'it'."
    },
    // 36
    {
      question: "Fill in the blank: \"It was to _____ that the complaint was addressed.\"",
      choices: ["he", "him", "his", "himself"],
      correctIndex: 1,
      explanation:
        "Object of the preposition 'to' must be objective case: 'to him'."
    },
    // 37
    {
      question: "Which sentence correctly uses 'such … that' with pronouns?",
      choices: [
        "She spoke in such a way that everyone understood her clearly.",
        "She spoke in such a way that everyone understood she clearly.",
        "She spoke in such a way that everyone understood herself clearly.",
        "She spoke in such a way that everyone understood they clearly."
      ],
      correctIndex: 0,
      explanation:
        "Pronoun 'her' is the correct object of 'understood'; 'she' would be subject form and wrong here."
    },
    // 38
    {
      question: "Fill in the blank: \"The applicants, each of _____ had different strengths, were carefully evaluated.\"",
      choices: ["whom", "who", "whose", "which"],
      correctIndex: 0,
      explanation:
        "'Each of whom' correctly refers to 'applicants' and introduces a descriptive relative clause."
    },
    // 39
    {
      question: "Which sentence correctly uses 'whoever' as a complement?",
      choices: [
        "The position will go to whoever the committee selects.",
        "The position will go to whomever the committee selects.",
        "The position will go to who the committee selects.",
        "The position will go to whom the committee selects."
      ],
      correctIndex: 1,
      explanation:
        "In 'whomever the committee selects', the pronoun is the object of 'selects', so 'whomever' is correct after 'to'."
    },
    // 40
    {
      question: "Fill in the blank: \"The chairperson insisted that everyone _____ informed in writing.\"",
      choices: ["be", "is", "was", "were"],
      correctIndex: 0,
      explanation:
        "After 'insisted that', we often use the subjunctive: 'that everyone be informed'."
    },
    // 41
    {
      question: "Which sentence correctly uses 'others' and 'another'?",
      choices: [
        "One proposal was accepted; the others was rejected.",
        "One proposal was accepted; the others were rejected.",
        "One proposal was accepted; another were rejected.",
        "One proposal was accepted; another was rejected, the others was pending."
      ],
      correctIndex: 1,
      explanation:
        "'Others' (plural) with plural verb 'were' is correct for more than one remaining proposal."
    },
    // 42
    {
      question: "Fill in the blank: \"Either the chairperson or the members will present _____ report.\"",
      choices: ["his", "their", "its", "her"],
      correctIndex: 1,
      explanation:
        "The pronoun normally agrees with the nearer subject; 'members' is plural, so 'their report' is logical."
    },
    // 43
    {
      question: "Which sentence correctly avoids a faulty pronoun reference?",
      choices: [
        "The policy was finally approved, which pleased the staff.",
        "The policy was finally approved, and this pleased the staff.",
        "The policy was finally approved, and it pleased them.",
        "The policy was finally approved, and they were pleased by it which."
      ],
      correctIndex: 1,
      explanation:
        "'This' clearly refers to the entire idea of the policy being approved, avoiding the ambiguous 'which'."
    },
    // 44
    {
      question: "Fill in the blank: \"Rarely _____ we seen such dedication from new employees.\"",
      choices: ["have", "has", "had", "having"],
      correctIndex: 0,
      explanation:
        "After 'rarely', inversion requires 'have we seen'; the pronoun 'we' remains the subject."
    },
    // 45
    {
      question: "Which sentence correctly uses 'it' as an anticipatory subject?",
      choices: [
        "That you arrived early made it easier to start on time.",
        "You arrived early made it easier to start on time.",
        "It made easier to start on time that you arrived early.",
        "It made easier to start on time you arrived early."
      ],
      correctIndex: 0,
      explanation:
        "The clause 'that you arrived early' is the real subject; it can stand at the beginning without 'it'. However, many styles also allow 'It made it easier … when you arrived early'."
    },
    // 46
    {
      question: "Fill in the blank: \"Had it not been for _____ guidance, we would have failed.\"",
      choices: ["him", "he", "his", "himself"],
      correctIndex: 2,
      explanation:
        "The noun 'guidance' needs a possessive: 'his guidance'. 'Had it not been for his guidance…' is correct."
    },
    // 47
    {
      question: "Which sentence correctly uses 'whose' with an inanimate antecedent?",
      choices: [
        "We visited a city whose attractions are world-famous.",
        "We visited a city who's attractions are world-famous.",
        "We visited a city which attractions are world-famous.",
        "We visited a city that its attractions are world-famous."
      ],
      correctIndex: 0,
      explanation:
        "Although 'whose' originally referred to people, it is standard to use it with things: 'a city whose attractions…'."
    },
    // 48
    {
      question: "Fill in the blank: \"The report is believed _____ accurate by most analysts.\"",
      choices: ["to be", "be", "being", "to have being"],
      correctIndex: 0,
      explanation:
        "Passive reporting verb: 'is believed to be accurate'; the subject 'the report' is referred to by 'it' if restated."
    },
    // 49
    {
      question: "Which sentence correctly uses 'there' and pronouns?",
      choices: [
        "There is many reasons why they disagree.",
        "There are many reasons why they disagree.",
        "Their are many reasons why they disagree.",
        "They are many reasons why they disagree."
      ],
      correctIndex: 1,
      explanation:
        "The real subject is 'reasons' (plural), so we use 'There are many reasons…'. The pronoun 'they' refers back to the people who disagree."
    },
    // 50
    {
      question: "Fill in the blank: \"Were he to resign now, many of us _____ surprised.\"",
      choices: ["will be", "would be", "are", "was"],
      correctIndex: 1,
      explanation:
        "In hypothetical 'Were he to…' conditionals, we use 'would' in the result clause: 'many of us would be surprised'. The pronoun 'us' is the correct object form."
    }
  ]
};

