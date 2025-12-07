// questions/subject_verb_agreement.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["subject_verb_agreement"] = {

  // ==========================================
  // LEVEL 1: BEGINNER (50 items – CSE context but basic)
  // ==========================================
  beginner: [
    // 1-10: Basic Singular Subjects (Office / Gov Context)
    {
      question: "The clerk ____ the forms every morning.",
      options: ["check", "checks", "checking", "checked"],
      answer: "checks",
      explanation: "The subject 'clerk' is singular. In the simple present, a singular subject takes a verb with -s: 'checks'."
    },
    {
      question: "The manager ____ the meeting at 9:00 a.m.",
      options: ["open", "opens", "opening", "opened"],
      answer: "opens",
      explanation: "The subject 'manager' is singular, so we use the singular verb 'opens'."
    },
    {
      question: "The officer ____ the request carefully.",
      options: ["review", "reviews", "reviewing", "reviewed"],
      answer: "reviews",
      explanation: "'Officer' is a singular subject, so the verb must be 'reviews'."
    },
    {
      question: "The applicant ____ all the required documents.",
      options: ["submits", "submit", "submitting", "submitted"],
      answer: "submits",
      explanation: "The subject 'applicant' is singular. We say 'The applicant submits...' in the present tense."
    },
    {
      question: "The schedule ____ on the bulletin board.",
      options: ["is", "are", "be", "been"],
      answer: "is",
      explanation: "The subject 'schedule' is singular. We use the singular linking verb 'is'."
    },
    {
      question: "The employee ____ his leave form today.",
      options: ["file", "files", "filing", "filed"],
      answer: "files",
      explanation: "The subject 'employee' is singular, so we say 'files'."
    },
    {
      question: "The memo ____ clear instructions.",
      options: ["give", "gives", "giving", "gave"],
      answer: "gives",
      explanation: "The subject 'memo' is singular. Singular subjects take 'gives', not 'give'."
    },
    {
      question: "The committee chair ____ the final decision.",
      options: ["announce", "announces", "announcing", "announced"],
      answer: "announces",
      explanation: "The subject 'chair' is singular, so the verb is 'announces'."
    },
    {
      question: "The supervisor ____ satisfied with the result.",
      options: ["seem", "seems", "seeming", "seemed"],
      answer: "seems",
      explanation: "'Supervisor' is a singular subject. We use 'seems'."
    },
    {
      question: "The office ____ open from Monday to Friday.",
      options: ["is", "are", "am", "be"],
      answer: "is",
      explanation: "The subject 'office' is singular. We say 'The office is open.'"
    },

    // 11-20: Basic Plural Subjects (Office / Gov Context)
    {
      question: "The clerks ____ the forms every morning.",
      options: ["checks", "check", "checking", "checked"],
      answer: "check",
      explanation: "The subject 'clerks' is plural. Plural subjects use the base form: 'check'."
    },
    {
      question: "The managers ____ in a separate room.",
      options: ["meet", "meets", "meeting", "met"],
      answer: "meet",
      explanation: "'Managers' is plural, so we use 'meet', not 'meets'."
    },
    {
      question: "The officers ____ the complaints promptly.",
      options: ["handle", "handles", "handling", "handled"],
      answer: "handle",
      explanation: "The subject 'officers' is plural. We use 'handle'."
    },
    {
      question: "The applicants ____ in the lobby.",
      options: ["wait", "waits", "waiting", "waited"],
      answer: "wait",
      explanation: "'Applicants' is plural, so the verb is 'wait'."
    },
    {
      question: "The schedules ____ posted online.",
      options: ["are", "is", "be", "been"],
      answer: "are",
      explanation: "'Schedules' is plural. We use 'are'."
    },
    {
      question: "The employees ____ their tasks on time.",
      options: ["finish", "finishes", "finishing", "finished"],
      answer: "finish",
      explanation: "Plural subject 'employees' takes 'finish'."
    },
    {
      question: "The memos ____ clear instructions.",
      options: ["give", "gives", "giving", "gave"],
      answer: "give",
      explanation: "'Memos' is plural. We say 'The memos give clear instructions.'"
    },
    {
      question: "The committee members ____ present today.",
      options: ["are", "is", "am", "be"],
      answer: "are",
      explanation: "The true subject is 'members' (plural), so we use 'are'."
    },
    {
      question: "The supervisors ____ satisfied with the result.",
      options: ["seem", "seems", "seeming", "seemed"],
      answer: "seem",
      explanation: "'Supervisors' is plural. We use 'seem'."
    },
    {
      question: "The offices ____ closed on holidays.",
      options: ["are", "is", "am", "be"],
      answer: "are",
      explanation: "'Offices' is plural. We say 'offices are closed'."
    },

    // 21-30: 'I' and 'You' Rules (Adult / Exam Context)
    {
      question: "I ____ for the civil service exam this year.",
      options: ["apply", "applies", "applying", "applied"],
      answer: "apply",
      explanation: "Even though 'I' refers to one person, it uses the base form of the verb: 'I apply'."
    },
    {
      question: "I ____ to improve my communication skills.",
      options: ["want", "wants", "wanting", "wanted"],
      answer: "want",
      explanation: "'I' takes the base form: 'I want'."
    },
    {
      question: "I ____ my tasks before the deadline.",
      options: ["finish", "finishes", "finishing", "finished"],
      answer: "finish",
      explanation: "We say 'I finish', not 'I finishes'."
    },
    {
      question: "I ____ responsible for updating the report.",
      options: ["am", "is", "are", "be"],
      answer: "am",
      explanation: "'I' is the only subject that uses 'am'."
    },
    {
      question: "I ____ not agree with the proposal.",
      options: ["do", "does", "did", "done"],
      answer: "do",
      explanation: "In negative sentences, 'I' pairs with 'do not': 'I do not agree.'"
    },
    {
      question: "You ____ eligible for the position.",
      options: ["are", "is", "am", "be"],
      answer: "are",
      explanation: "The subject 'you' always uses 'are'."
    },
    {
      question: "You ____ to submit the form today.",
      options: ["need", "needs", "needing", "needed"],
      answer: "need",
      explanation: "We say 'You need', not 'You needs'."
    },
    {
      question: "You ____ late for the briefing yesterday.",
      options: ["were", "was", "are", "is"],
      answer: "were",
      explanation: "In the past tense, 'you' takes 'were', not 'was'."
    },
    {
      question: "Do you ____ any questions about the instructions?",
      options: ["have", "has", "having", "had"],
      answer: "have",
      explanation: "We say 'Do you have...?' The base form 'have' follows the auxiliary 'do'."
    },
    {
      question: "You ____ your work very well.",
      options: ["do", "does", "did", "done"],
      answer: "do",
      explanation: "'You' uses 'do', not 'does', in the simple present: 'You do your work well.'"
    },

    // 31-40: Do/Does and Has/Have
    {
      question: "He ____ not understand the new policy.",
      options: ["do", "does", "did", "done"],
      answer: "does",
      explanation: "Singular third person ('he') uses 'does not', not 'do not'."
    },
    {
      question: "They ____ not agree with the decision.",
      options: ["do", "does", "did", "done"],
      answer: "do",
      explanation: "Plural subject 'they' uses 'do not'."
    },
    {
      question: "She ____ a lot of experience in public service.",
      options: ["has", "have", "having", "had"],
      answer: "has",
      explanation: "'She' uses 'has', not 'have', in the present tense."
    },
    {
      question: "We ____ a meeting with the director today.",
      options: ["have", "has", "having", "had"],
      answer: "have",
      explanation: "Plural subject 'we' uses 'have'."
    },
    {
      question: "It ____ not seem urgent.",
      options: ["do", "does", "did", "done"],
      answer: "does",
      explanation: "Singular subject 'it' uses 'does not', not 'do not'."
    },
    {
      question: "____ the applicant have all the requirements?",
      options: ["Does", "Do", "Did", "Done"],
      answer: "Does",
      explanation: "Singular subject 'applicant' pairs with 'Does': 'Does the applicant have...?'"
    },
    {
      question: "____ they know the correct procedure?",
      options: ["Do", "Does", "Did", "Doing"],
      answer: "Do",
      explanation: "Plural subject 'they' uses 'Do': 'Do they know...?'"
    },
    {
      question: "The office ____ a new computer system.",
      options: ["has", "have", "having", "had"],
      answer: "has",
      explanation: "Singular subject 'office' uses 'has'."
    },
    {
      question: "We ____ received the official memo.",
      options: ["have", "has", "having", "had"],
      answer: "have",
      explanation: "Plural subject 'we' uses 'have' in the present perfect: 'We have received...'."
    },
    {
      question: "The director ____ many suggestions from the staff.",
      options: ["has", "have", "having", "had"],
      answer: "has",
      explanation: "Singular subject 'director' uses 'has'."
    },

    // 41-50: Identifying the Real Subject
    {
      question: "The list of successful applicants ____ posted on the website.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "The true subject is 'list' (singular), not 'applicants'. So we use 'is'."
    },
    {
      question: "The reports on the table ____ for the manager.",
      options: ["are", "is", "was", "be"],
      answer: "are",
      explanation: "The subject is 'reports' (plural), so the verb is 'are'."
    },
    {
      question: "The series of meetings ____ exhausting.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "The subject is 'series' (singular). We use 'is'."
    },
    {
      question: "The guidelines for the projects ____ in this folder.",
      options: ["are", "is", "was", "be"],
      answer: "are",
      explanation: "The subject is 'guidelines' (plural). We say 'guidelines are'."
    },
    {
      question: "The performance of the employees ____ improving.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "The subject is 'performance' (singular). 'Is improving' is correct."
    },
    {
      question: "The minutes of the meeting ____ approved by the chair.",
      options: ["were", "was", "is", "be"],
      answer: "were",
      explanation: "'Minutes' is treated as a plural noun, so we say 'minutes were approved'."
    },
    {
      question: "The staff in both offices ____ cooperative.",
      options: ["are", "is", "was", "be"],
      answer: "are",
      explanation: "'Staff' here refers to people in both offices (treated as plural), so we use 'are'."
    },
    {
      question: "The condition of the roads ____ getting worse.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "The subject is 'condition' (singular), so we use 'is'."
    },
    {
      question: "The endorsements from the offices ____ already filed.",
      options: ["are", "is", "was", "be"],
      answer: "are",
      explanation: "The subject 'endorsements' is plural. We say 'endorsements are'."
    },
    {
      question: "The result of the examination ____ very encouraging.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "The subject is 'result' (singular). We use 'is'."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (50 items – harder, CSE-style)
  // ==========================================
  intermediate: [
    // 1-10: Compound subjects & intervening phrases
    {
      question: "The director and his staff ____ preparing the annual report.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "Two subjects joined by 'and' (director + staff) make the subject plural. Use 'are'."
    },
    {
      question: "The committee members and the chairperson ____ agreed on the recommendation.",
      options: ["has", "have", "has been", "having"],
      answer: "have",
      explanation: "Members + chairperson = plural subject. Use 'have agreed'."
    },
    {
      question: "The guidelines for the new program ____ still unclear to some employees.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The head noun is 'guidelines' (plural), so we use 'are'."
    },
    {
      question: "The head of the divisions ____ responsible for consolidating the reports.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "The true subject is 'head' (singular), not 'divisions'. Use 'is'."
    },
    {
      question: "The minutes of the meeting ____ distributed to all concerned offices.",
      options: ["was", "were", "is", "has been"],
      answer: "were",
      explanation: "'Minutes' is treated as a plural noun here, so we use 'were'."
    },
    {
      question: "The applicant's answers on the test form ____ the panel.",
      options: ["impress", "impresses", "has impressed", "was impressing"],
      answer: "impress",
      explanation: "The subject 'answers' is plural, so the verb must be plural: 'impress'."
    },
    {
      question: "A series of trainings ____ conducted every quarter.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "The subject is 'series' (singular), not 'trainings'. We use 'is'."
    },
    {
      question: "Both the mayor and the councilors ____ invited to the forum.",
      options: ["was", "were", "has been", "is"],
      answer: "were",
      explanation: "Both + plural nouns = plural subject. Use 'were'."
    },
    {
      question: "Neither the employees nor the supervisor ____ aware of the change in policy.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "With 'neither...nor', the verb agrees with the nearer subject. 'Supervisor' is singular, so 'is'."
    },
    {
      question: "Either the files or the folder ____ misplaced.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "With 'either...or', the verb agrees with the subject nearer to it: 'folder' (singular) → 'is'."
    },

    // 11-20: Indefinite pronouns & quantifiers
    {
      question: "Each of the applicants ____ an identification card.",
      options: ["have", "has", "having", "had"],
      answer: "has",
      explanation: "'Each' is singular, so we use 'has'."
    },
    {
      question: "Everyone in the division ____ required to attend the orientation.",
      options: ["is", "are", "were", "be"],
      answer: "is",
      explanation: "'Everyone' is grammatically singular. Use 'is'."
    },
    {
      question: "None of the information ____ confidential.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "'Information' is uncountable and singular, so we use 'is'."
    },
    {
      question: "Some of the documents ____ missing.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "Here 'Some' refers to 'documents' (plural), so we use 'are'."
    },
    {
      question: "Most of the budget ____ already allocated.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "'Budget' is treated as a singular whole amount here, so 'is' is used."
    },
    {
      question: "All of the employees ____ encouraged to suggest improvements.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Employees' is plural; 'All' here is plural in meaning. Use 'are'."
    },
    {
      question: "A few of the participants ____ asking for clarification.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'A few' is plural, so we say 'are asking'."
    },
    {
      question: "Much of the work ____ done by volunteers.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "'Work' is uncountable and singular here. Use 'is'."
    },
    {
      question: "Several of the complaints ____ about delayed transactions.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Several' is plural, so we use 'are'."
    },
    {
      question: "Little of the water ____ left in the tank.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "'Water' is uncountable. 'Little' of it remains → 'is left'."
    },

    // 21-30: There/Here + relative clauses
    {
      question: "There ____ several errors in the final draft.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The real subject is 'errors' (plural), so use 'are'."
    },
    {
      question: "There ____ a misunderstanding between the two offices.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "The subject 'misunderstanding' is singular. Use 'is'."
    },
    {
      question: "Here ____ the documents you requested yesterday.",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "The subject is 'documents' (plural). So we say 'Here are the documents'."
    },
    {
      question: "On the last page of the report ____ the summary of findings.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "The subject is 'summary' (singular), not 'page' or 'findings'. Use 'is'."
    },
    {
      question: "In Annex B ____ the full list of qualified bidders.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "The subject is 'list' (singular). 'Is' is correct."
    },
    {
      question: "The officer who ____ in charge of procurement will sign the contract.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "'Who' refers to 'officer' (singular). Use 'is'."
    },
    {
      question: "The staff who ____ assigned to the project are all experienced.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Who' refers to 'staff' used as a plural group here. Use 'are'."
    },
    {
      question: "She is one of the employees who ____ always on time.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The relative clause 'who are always on time' describes 'employees' (plural), not 'she'."
    },
    {
      question: "This is one of the reports that ____ to be revised.",
      options: ["has", "have", "was", "is"],
      answer: "have",
      explanation: "'That' refers to 'reports' (plural). We say 'reports that have to be revised'."
    },
    {
      question: "He is the only one of the applicants who ____ fluent in three languages.",
      options: ["is", "are", "was", "has been"],
      answer: "is",
      explanation: "With 'the only one', the verb usually agrees with 'one'. So: 'the only one ... who is fluent'."
    },

    // 31-40: More compound/quantifier traps
    {
      question: "Not only the staff but also the director ____ present during the inspection.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The nearer subject is 'director' (singular). The verb agrees with it: 'is present'."
    },
    {
      question: "Not only the director but also the staff ____ present during the inspection.",
      options: ["is", "are", "was", "were"],
      answer: "are",
      explanation: "Now the nearer subject is 'staff' used as plural. Use 'are'."
    },
    {
      question: "Either the secretary or the assistants ____ available to answer your questions.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The nearer subject is 'assistants' (plural). Use 'are'."
    },
    {
      question: "Either the assistants or the secretary ____ available to answer your questions.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "This time the nearer subject is 'secretary' (singular). Use 'is'."
    },
    {
      question: "Each officer and employee ____ required to follow the code of conduct.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "With 'each' before a compound subject, the verb is singular: 'is required'."
    },
    {
      question: "Every document and record in this cabinet ____ confidential.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "Repeated 'every' or 'every + singular nouns joined by and' usually takes a singular verb."
    },
    {
      question: "Few ____ willing to take responsibility for the error.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Few' is plural, so the verb is plural: 'are willing'."
    },
    {
      question: "Many in the audience ____ concerned about the delay.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Many' is plural. Use 'are concerned'."
    },
    {
      question: "All of the information in this report ____ properly verified.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "'Information' is uncountable and takes a singular verb: 'is verified'."
    },
    {
      question: "Some of the equipment ____ still under warranty.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "'Equipment' is uncountable; we treat it as singular. Use 'is'."
    },

    // 41-50: Mixed structures
    {
      question: "There ____ a number of issues that need to be addressed.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The phrase 'a number of' is plural in meaning. We say 'There are a number of issues'."
    },
    {
      question: "There ____ an increasing number of complaints about the new system.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "The grammatical subject is 'an increasing number' (singular). Use 'is'."
    },
    {
      question: "Here ____ one of the documents you requested.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is 'one' (singular), so we say 'Here is one...'."
    },
    {
      question: "Here ____ several of the documents you requested.",
      options: ["is", "are", "was", "were"],
      answer: "are",
      explanation: "The subject is 'several' (plural). So: 'Here are several...'."
    },
    {
      question: "The implementation of new policies ____ created some confusion.",
      options: ["has", "have", "was", "were"],
      answer: "has",
      explanation: "The subject is 'implementation' (singular). Use 'has created'."
    },
    {
      question: "The reports that ____ submitted late will not be accepted.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'That' refers to 'reports' (plural). Use 'are submitted'."
    },
    {
      question: "The officer, together with her staff, ____ attending the seminar.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "Phrases like 'together with' do not change the number. The subject 'officer' is singular."
    },
    {
      question: "A series of consultations ____ planned before the final decision is made.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "Again, the subject is 'series' (singular). We use 'is planned'."
    },
    {
      question: "The documents in this folder ____ for internal use only.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The subject is 'documents' (plural). Use 'are'."
    },
    {
      question: "The outcome of the negotiations ____ still uncertain.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is 'outcome' (singular). We say 'is still uncertain'."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (50 items – complex SVA)
  // ==========================================
  advanced: [
    // 1-10: 'As well as', 'along with', complex noun phrases
    {
      question: "The chairperson, along with the members of the committee, ____ expected to arrive before nine.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "Phrases like 'along with' do not change the number of the subject. The subject 'chairperson' is singular."
    },
    {
      question: "The director, as well as the division heads, ____ opposed to the proposal.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "The main subject is 'director' (singular). 'As well as the division heads' is only a modifier."
    },
    {
      question: "The project evaluation, together with the financial statements, ____ submitted to the central office.",
      options: ["was", "were", "have been", "are"],
      answer: "was",
      explanation: "The core subject is 'project evaluation' (singular), so we use 'was submitted'."
    },
    {
      question: "The monitoring team, not the local partners, ____ responsible for validating the data.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "'Monitoring team' is a singular collective noun treated as one unit here."
    },
    {
      question: "The success of the programs ____ on the cooperation of all stakeholders.",
      options: ["depend", "depends", "depended", "has depended"],
      answer: "depends",
      explanation: "The subject is 'success' (singular), so we use 'depends'."
    },
    {
      question: "The increase in applications ____ the need for additional staff.",
      options: ["justify", "justifies", "justified", "have justified"],
      answer: "justifies",
      explanation: "The head noun is 'increase' (singular). Singular verbs take -s: 'justifies'."
    },
    {
      question: "The results of the survey ____ that public awareness has improved.",
      options: ["show", "shows", "showed", "has shown"],
      answer: "show",
      explanation: "'Results' is plural. We say 'the results show that...'."
    },
    {
      question: "The level of services to citizens ____ significantly over the past year.",
      options: ["has improved", "have improved", "is improving", "improve"],
      answer: "has improved",
      explanation: "The subject is 'level' (singular). We use 'has improved'."
    },
    {
      question: "The number of pending cases ____ higher than expected.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "Rule: 'The number of + plural noun' takes a singular verb."
    },
    {
      question: "A number of pending cases ____ still unresolved.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "Rule: 'A number of + plural noun' takes a plural verb."
    },

    // 11-20: Quantifiers, data/statistics, majority expressions
    {
      question: "More than one employee ____ asked about the new policy.",
      options: ["has", "have", "was", "were"],
      answer: "has",
      explanation: "Despite 'more than one', the construction is grammatically singular. Use 'has'."
    },
    {
      question: "More than two employees ____ asked about the new policy.",
      options: ["has", "have", "was", "were"],
      answer: "have",
      explanation: "With 'more than two', the sense is clearly plural. Use 'have'."
    },
    {
      question: "The data from the last quarter ____ incomplete, according to the report.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "In formal usage, 'data' is the plural of 'datum', so 'data are incomplete'."
    },
    {
      question: "Statistics ____ that unemployment has slightly decreased.",
      options: ["show", "shows", "has shown", "was showing"],
      answer: "show",
      explanation: "Here 'statistics' is used as a plural noun. 'Statistics show that…'."
    },
    {
      question: "The statistics for this year ____ encouraging.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Statistics' refers to several figures, so it is plural here."
    },
    {
      question: "The media ____ invited to cover the awarding ceremony.",
      options: ["was", "were", "has been", "is"],
      answer: "were",
      explanation: "'Media' is treated as a plural noun in formal English. Use 'were'."
    },
    {
      question: "A majority of the voters ____ in favor of the proposal.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "When 'majority' is followed by a plural noun ('voters'), we usually use a plural verb."
    },
    {
      question: "The majority of the work ____ already finished.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "Here 'work' is uncountable, treated as singular. We say 'is finished'."
    },
    {
      question: "Fifty percent of the budget ____ allocated to training activities.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "The reference is to one amount of money (budget), so the verb is singular."
    },
    {
      question: "Fifty percent of the employees ____ required to attend the seminar.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "Here 'fifty percent' refers to 'employees' (plural). Thus the verb is plural: 'are'."
    },

    // 21-30: Clauses/gerunds as subjects
    {
      question: "Ensuring that all records are accurate ____ the responsibility of every unit.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is the gerund phrase 'Ensuring that all records are accurate', which is singular."
    },
    {
      question: "Verifying the authenticity of the documents ____ a time-consuming task.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is 'Verifying the authenticity of the documents' (singular). Use 'is'."
    },
    {
      question: "What concerns the committee most ____ the lack of reliable data.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is the clause 'What concerns the committee most', which is singular in form and meaning."
    },
    {
      question: "How the funds were utilized ____ still unclear.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is the clause 'How the funds were utilized' (singular)."
    },
    {
      question: "Conducting regular training sessions ____ essential for capacity building.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The gerund 'Conducting...' functions as a singular subject. Use 'is essential'."
    },
    {
      question: "Monitoring and evaluation of the program ____ required by the funding agency.",
      options: ["is", "are", "was", "were"],
      answer: "are",
      explanation: "Two separate activities, 'Monitoring and evaluation', form a plural subject. Use 'are required'."
    },
    {
      question: "Reading and understanding the entire contract ____ the responsibility of the signatory.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "Here 'Reading and understanding the entire contract' is considered one combined activity. It takes 'is'."
    },
    {
      question: "What the report suggests ____ a complete review of the current policy.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is the clause 'What the report suggests' (singular). Use 'is'."
    },
    {
      question: "Collecting accurate statistics ____ more challenging than many people think.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject 'Collecting accurate statistics' is singular. Use 'is'."
    },
    {
      question: "Whether the project will be extended ____ still undecided.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is the clause 'Whether the project will be extended' (singular)."
    },

    // 31-40: Proximity rule & tricky compounds
    {
      question: "Either the delayed reports or the missing attachments ____ causing the problem.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The nearer subject is 'attachments' (plural), so the verb is plural: 'are causing'."
    },
    {
      question: "Either the missing attachments or the delayed report ____ causing the problem.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "Now the nearer subject is 'report' (singular), so we use 'is'."
    },
    {
      question: "Neither the long meetings nor the heavy workload ____ the main issue.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "The nearer subject 'workload' is singular in this context; we use 'is'."
    },
    {
      question: "Neither the heavy workload nor the long meetings ____ the main issue.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "Now the nearer subject 'meetings' is plural, so we use 'are'."
    },
    {
      question: "Not only the delayed deliveries but also the poor documentation ____ criticized in the audit.",
      options: ["was", "were", "has been", "is"],
      answer: "were",
      explanation: "Two plural ideas (deliveries + documentation items) are viewed as plural. Use 'were'."
    },
    {
      question: "Not only the poor documentation but also the excessive delays ____ criticized in the audit.",
      options: ["was", "were", "has been", "is"],
      answer: "were",
      explanation: "Again, we have plural problems together; the plural verb 'were' fits the sense."
    },
    {
      question: "The roles and responsibilities of each unit ____ clearly defined.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The subject is the compound 'roles and responsibilities' (plural). Use 'are'."
    },
    {
      question: "The objectives and scope of the project ____ explained in the proposal.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "Two plural nouns joined by 'and' form a plural subject."
    },
    {
      question: "The delay in the release of funds and the confusion over guidelines ____ the main causes of the problem.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "Two causes (delay + confusion) form a plural subject. Use 'are'."
    },
    {
      question: "Every officer and every employee in the department ____ reminded of the deadline.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "Repeated 'every' before each noun makes the subject grammatically singular."
    },

    // 41-50: Mixed advanced traps
    {
      question: "The use of mobile phones during official meetings ____ discouraged.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is 'use' (singular). 'Of mobile phones' is just a modifier."
    },
    {
      question: "The advantages of the new system ____ outweigh its disadvantages.",
      options: ["is", "are", "was", "has"],
      answer: "are",
      explanation: "The head noun is 'advantages' (plural). Use 'are'."
    },
    {
      question: "Only one of the participants ____ able to complete the survey on time.",
      options: ["is", "are", "was", "were"],
      answer: "was",
      explanation: "The subject is 'one' (singular). Since this is past time, use 'was'."
    },
    {
      question: "Only two of the proposals ____ considered highly feasible.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The subject is 'two' (plural). We use 'are'."
    },
    {
      question: "No set of rules ____ perfect.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The head noun is 'set' (singular). The phrase 'of rules' does not affect the verb."
    },
    {
      question: "A pair of scissors ____ kept in each workstation.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The expression 'A pair of scissors' is singular. Use 'is kept'."
    },
    {
      question: "The pair of scissors on the table ____ not working properly.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is 'pair' (singular), not 'scissors'. Use 'is'."
    },
    {
      question: "The premises of the building ____ regularly inspected for safety.",
      options: ["is", "are", "was", "were"],
      answer: "are",
      explanation: "'Premises' is always plural. Use 'are inspected'."
    },
    {
      question: "The series of seminars on leadership ____ scheduled for next month.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "'Series' is singular, so we say 'is scheduled'."
    },
    {
      question: "The series of seminars on leadership and ethics ____ scheduled for next month.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "Still the same head noun 'series' (singular), even if the title is longer. Use 'is scheduled'."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (50 items – CSE-style, very tricky)
  // ==========================================
  expert: [
    // 1-10: Fractions, percentages, majority, tricky quantifiers
    {
      question: "Only one of the proposals ____ fully aligned with the agency's mandate.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "The true subject is 'one' (singular). We say 'Only one ... is aligned'."
    },
    {
      question: "Only a few of the participants ____ willing to work overtime.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'A few' is plural. Use 'are willing'."
    },
    {
      question: "More than one irregularity ____ discovered during the audit.",
      options: ["was", "were", "have been", "are"],
      answer: "was",
      explanation: "The idiom 'more than one' normally takes a singular verb: 'was discovered'."
    },
    {
      question: "No less than ten containers ____ found to be unsealed.",
      options: ["was", "were", "has been", "is"],
      answer: "were",
      explanation: "The real subject is 'ten containers' (plural). Use 'were'."
    },
    {
      question: "No more than one copy of the contract ____ needed for filing.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "The subject is 'one copy' (singular). Use 'is'."
    },
    {
      question: "A majority of the committee ____ willing to extend the deadline.",
      options: ["is", "are", "was", "have been"],
      answer: "are",
      explanation: "Here 'majority' clearly refers to people in the committee (plural idea). We use 'are'."
    },
    {
      question: "The majority of the evidence ____ against the accused.",
      options: ["is", "are", "were", "have been"],
      answer: "is",
      explanation: "'Evidence' is uncountable. It takes a singular verb."
    },
    {
      question: "Two-thirds of the property ____ already developed.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "'Property' here is a mass noun. Even 'two-thirds' of it is treated as singular."
    },
    {
      question: "Two-thirds of the lots ____ still vacant.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "This time the reference is to 'lots' (plural). Use 'are'."
    },
    {
      question: "Fifty percent of the complaints ____ resolved within the day.",
      options: ["was", "were", "has been", "is"],
      answer: "were",
      explanation: "Here 'fifty percent' refers to 'complaints' (plural). The verb is 'were resolved'."
    },

    // 11-20: Foreign plurals, collective nouns, tricky nouns
    {
      question: "The criteria for promotion ____ clearly explained in the handbook.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Criteria' is the plural of 'criterion'. Use 'are'."
    },
    {
      question: "This criterion ____ more important than the others.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "'Criterion' is singular. Use 'is'."
    },
    {
      question: "The alumni association ____ planning a reunion next year.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "The subject is 'association' (singular), not 'alumni'. Use 'is planning'."
    },
    {
      question: "The alumni ____ encouraged to update their contact information.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Alumni' is plural. We say 'alumni are encouraged'."
    },
    {
      question: "The headquarters of the organization ____ located in the capital.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "'Headquarters' may look plural, but here it is treated as a single place. Use 'is'."
    },
    {
      question: "The premises of the new office ____ still under renovation.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Premises' is always plural in this meaning. Use 'are'."
    },
    {
      question: "The police ____ investigating the reported anomaly.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "'Police' is a plural noun. We say 'The police are investigating.'"
    },
    {
      question: "The members of the staff ____ divided on whether to change the schedule.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The actual subject is 'members' (plural). Use 'are'."
    },
    {
      question: "The data ____ being reviewed again by the technical working group.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "In careful usage, 'data' is plural. 'The data are being reviewed.'"
    },
    {
      question: "The media ____ often criticized for focusing only on negative news.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "Here 'media' is treated as a plural noun. Use 'are'."
    },

    // 21-30: Subjunctive, conditionals, advanced clauses
    {
      question: "If the budget ____ sufficient, the additional training would be possible.",
      options: ["were", "was", "is", "are"],
      answer: "were",
      explanation: "In unreal (hypothetical) conditions, we use the subjunctive 'were', even with singular subjects."
    },
    {
      question: "If the chairperson ____ here, she would clarify the instructions herself.",
      options: ["were", "was", "is", "are"],
      answer: "were",
      explanation: "Again, a hypothetical situation. The correct form is 'were', not 'was'."
    },
    {
      question: "If any of the documents ____ missing, the application will be returned.",
      options: ["is", "are", "was", "has been"],
      answer: "are",
      explanation: "The noun 'documents' is plural. We say 'If any of the documents are missing...'."
    },
    {
      question: "If each of the bidders ____ qualified, the process will move to the next stage.",
      options: ["is", "are", "was", "have been"],
      answer: "is",
      explanation: "The subject 'each' is singular. Use 'is qualified'."
    },
    {
      question: "It is imperative that the agency ____ transparent in all its transactions.",
      options: ["be", "is", "are", "was"],
      answer: "be",
      explanation: "After expressions like 'It is imperative that', we use the subjunctive base form 'be'."
    },
    {
      question: "The chairperson requested that the minutes ____ corrected before circulation.",
      options: ["be", "is", "are", "was"],
      answer: "be",
      explanation: "In that-clauses after verbs like 'request', the subjunctive 'be' is used."
    },
    {
      question: "The recommendation is that the obsolete equipment ____ replaced immediately.",
      options: ["be", "is", "are", "was"],
      answer: "be",
      explanation: "After 'is that', when giving a recommendation, we use 'be' in the subjunctive."
    },
    {
      question: "The board insisted that the report ____ submitted by Friday.",
      options: ["be", "is", "are", "was"],
      answer: "be",
      explanation: "After verbs like 'insisted', the pattern is 'that + subject + base form (be)'."
    },
    {
      question: "It was suggested that the procedure ____ reviewed before the next inspection.",
      options: ["be", "is", "are", "was"],
      answer: "be",
      explanation: "Subjunctive again: 'that the procedure be reviewed'."
    },
    {
      question: "If it ____ not for the volunteers, the project would have failed.",
      options: ["were", "was", "is", "are"],
      answer: "were",
      explanation: "The expression 'If it were not for...' uses the subjunctive 'were'."
    },

    // 31-40: Inversion & advanced word order
    {
      question: "On the desk ____ a set of forms for new applicants.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "In inverted sentences, the verb still agrees with the real subject 'set' (singular)."
    },
    {
      question: "Attached to this memo ____ a list of employees recommended for commendation.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is 'a list' (singular). We say 'Attached... is a list...'."
    },
    {
      question: "Only after the audit ____ completed were the irregularities revealed.",
      options: ["was", "were", "has", "have"],
      answer: "was",
      explanation: "The subject is 'the audit' (singular). Inverted word order does not change agreement: 'audit was completed'."
    },
    {
      question: "Rarely ____ such a comprehensive study conducted in this agency.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject 'such a comprehensive study' is singular. Use 'is'."
    },
    {
      question: "Only then ____ the committee realize the impact of its decision.",
      options: ["did", "does", "has", "had"],
      answer: "did",
      explanation: "In inversion with 'only then', we use 'did' + base form: 'did the committee realize'."
    },
    {
      question: "At no time ____ the applicants informed of the change in schedule.",
      options: ["were", "was", "are", "have"],
      answer: "were",
      explanation: "The subject 'applicants' is plural. With negative inversion, we still match the subject: 'were informed'."
    },
    {
      question: "Under no circumstances ____ staff members allowed to alter official records.",
      options: ["are", "is", "was", "has been"],
      answer: "are",
      explanation: "The subject 'staff members' is plural. Use 'are allowed'."
    },
    {
      question: "Only when the documents ____ verified can the payment be released.",
      options: ["are", "is", "was", "has been"],
      answer: "are",
      explanation: "The subject 'documents' is plural. Use 'are verified'."
    },
    {
      question: "Seldom ____ such a large budget approved without extensive discussion.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject 'such a large budget' is singular. Use 'is approved'."
    },
    {
      question: "Not until the investigation ____ completed did the public know the full story.",
      options: ["was", "were", "has", "have"],
      answer: "was",
      explanation: "The subject 'investigation' is singular. Use 'was completed'."
    },

    // 41-50: Mixed expert-level traps
    {
      question: "Gymnastics ____ strength and coordination.",
      options: ["requires", "require", "required", "has required"],
      answer: "requires",
      explanation: "Although it ends in 's', 'gymnastics' is treated as singular. We say 'Gymnastics requires...'."
    },
    {
      question: "Measles ____ considered rare in some countries but common in others.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "Disease names ending in 's' like 'measles' are usually singular."
    },
    {
      question: "Politics ____ often seen as a sensitive topic in the office.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "'Politics' as a field of study or activity is singular: 'Politics is...'."
    },
    {
      question: "The series of reports that ____ missing has finally been found.",
      options: ["was", "were", "has", "have"],
      answer: "was",
      explanation: "The subject is 'series' (singular). 'That was missing' refers to the series as one unit."
    },
    {
      question: "The series of reports that ____ submitted late have already been reviewed.",
      options: ["was", "were", "has", "is"],
      answer: "were",
      explanation: "Here 'that were submitted late' describes 'reports' (plural). So we use 'were'."
    },
    {
      question: "The committee ____ agreed that there ____ to be another round of consultation.",
      options: ["has / has", "have / have", "has / has", "has / have"],
      answer: "has / has",
      explanation: "The committee (singular) 'has agreed'; the impersonal 'there has to be' (singular idea)."
    },
    {
      question: "A number of issues ____ been raised, but the main concern ____ unresolved.",
      options: ["have / remains", "has / remain", "have / remain", "has / remains"],
      answer: "have / remains",
      explanation: "'A number of issues' (plural) → 'have been raised'; 'the main concern' (singular) → 'remains unresolved'."
    },
    {
      question: "The quality of the reports, as well as their timeliness, ____ improved this year.",
      options: ["has", "have", "was", "were"],
      answer: "has",
      explanation: "The subject is 'quality' (singular). 'As well as their timeliness' is only a modifier."
    },
    {
      question: "Neither the shortage of staff nor the lack of equipment ____ an excuse for poor service.",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject nearest the verb, 'lack of equipment', is singular. Use 'is'."
    },
    {
      question: "More than one staff member ____ reported the same incident independently.",
      options: ["has", "have", "was", "were"],
      answer: "has",
      explanation: "Again, 'more than one' takes a singular verb in standard grammar: 'has reported'."
    }
  ]
};


