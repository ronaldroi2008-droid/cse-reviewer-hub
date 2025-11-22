// ==========================================
// 1. TOPICS DATA
// ==========================================
const VERBAL_TOPICS = [
  { id: "nouns",                  label: "Nouns" },
  { id: "gender",                 label: "Gender" },
  { id: "grammatical_number",     label: "Grammatical Number" },
  { id: "verbs",                  label: "Verbs" },
  { id: "tenses",                 label: "Tenses" },
  { id: "pronouns",               label: "Pronouns" },
  { id: "adjectives",             label: "Adjectives" },
  { id: "adverbs",                label: "Adverbs" },
  { id: "prepositions",           label: "Prepositions" },
  { id: "conjunctions",           label: "Conjunctions" },
  { id: "interjections",          label: "Interjections" },
  { id: "articles",               label: "Articles" },
  { id: "subject_verb_agreement", label: "Subject–Verb Agreement" },
  { id: "sentence_construction",  label: "Sentence Construction" },
  { id: "sentence_structure",     label: "Sentence Structure" },
  { id: "affixes",                label: "Affixes" },
  { id: "punctuations",           label: "Punctuations" },
  { id: "correct_usage",          label: "Correct Usage" },
  { id: "error_identification",   label: "Error Identification" },
  { id: "synonyms",               label: "Synonyms" },
  { id: "antonyms",               label: "Antonyms" },
  { id: "analogy",                label: "Analogy" },
  { id: "paragraph_organization", label: "Paragraph Organization" },
  { id: "reading_comprehension",  label: "Reading Comprehension" }
];

const TOPIC_MAX_QUESTIONS = {
  nouns: 50,
  gender: 50,
  grammatical_number: 50,
  verbs: 50,
  adjectives: 50   // ← para 50 rin ang lalabas sa Adjectives
};


// ==========================================
// 2. LESSONS DATA
// ==========================================
const LESSONS = {
  nouns: {
    title: "Nouns – The Ultimate Reviewer (Deep Dive)",
    level: "Verbal Ability · Nouns · CSE Grammar",
    fullHtml: `
  <section class="lesson-section">
    <h2>1. The Anatomy of a Noun</h2>
    <p>A noun names a person, place, thing, idea, or event. But deeper than that, nouns have <strong>Properties</strong> that determine how they fit in a sentence.</p>
    <div class="highlight-box">
      <p><strong>The 4 Properties of Nouns:</strong></p>
      <ul>
        <li><strong>Gender:</strong> Masculine, Feminine, Common (teacher), Neuter (table).</li>
        <li><strong>Number:</strong> Singular vs. Plural.</li>
        <li><strong>Case:</strong> Subjective, Objective, Possessive.</li>
        <li><strong>Person:</strong> First, Second, or Third person.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section">
    <h2>2. Deep Dive: Count vs. Mass Nouns (The Shifters)</h2>
    <p>Some nouns change meaning depending on whether they are countable or uncountable.</p>
    <table class="lesson-table">
      <thead>
        <tr>
          <th>Word</th>
          <th>As Mass Noun (Uncountable)</th>
          <th>As Count Noun (Pluralizable)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Paper</strong></td>
          <td>Material to write on.<br><em>"I need some paper."</em></td>
          <td>Documents or newspapers.<br><em>"I lost my important papers."</em></td>
        </tr>
        <tr>
          <td><strong>Hair</strong></td>
          <td>All hair on the head.<br><em>"Her hair is black."</em></td>
          <td>Individual strands.<br><em>"There are two gray hairs in my soup."</em></td>
        </tr>
        <tr>
          <td><strong>Glass</strong></td>
          <td>The material.<br><em>"Windows are made of glass."</em></td>
          <td>Drinking vessels or eyewear.<br><em>"I drank three glasses of water."</em></td>
        </tr>
        <tr>
          <td><strong>Iron</strong></td>
          <td>The metal.<br><em>"Steel contains iron."</em></td>
          <td>Device for clothes.<br><em>"We have two flat irons."</em></td>
        </tr>
        <tr>
          <td><strong>Room</strong></td>
          <td>Space.<br><em>"Is there enough room for me?"</em></td>
          <td>Partitioned areas.<br><em>"The house has five rooms."</em></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="lesson-section">
    <h2>3. Advanced Pluralization Rules</h2>
    
    <h3>3.1 The Tricky "-O" Endings</h3>
    <p>Not all nouns ending in "o" take "-es". This is a memorization game.</p>
    <ul>
      <li><strong>Add -ES (Usually heroes/potatoes):</strong> <em>Heroes, Tomatoes, Potatoes, Echoes, Torpedoes, Vetos, Mosquitoes.</em></li>
      <li><strong>Add -S (Usually musical/tech terms):</strong> <em>Pianos, Solos, Photos, Radios, Studios, Videos, Logos, Memos.</em></li>
      <li><strong>Both are accepted:</strong> <em>Volcanoes/Volcanos, Mangoes/Mangos, Tornadoes/Tornados.</em></li>
    </ul>

    <h3>3.2 Compound Nouns (The "Head Word" Rule)</h3>
    <p>Find the main word/person being described.</p>
    <ul>
      <li><em>Attorney-at-law</em> → <strong>Attorneys</strong>-at-law</li>
      <li><em>Passer-by</em> → <strong>Passers</strong>-by</li>
      <li><em>Major General</em> → Major <strong>Generals</strong> (General is the noun, Major is the adjective)</li>
      <li><em>Poet Laureate</em> → <strong>Poets</strong> Laureate</li>
    </ul>
    <p><strong>BUT: No clear noun? Add 's' at the end.</strong></p>
    <ul>
      <li><em>Merry-go-round</em> → Merry-go-rounds</li>
      <li><em>Grown-up</em> → Grown-ups</li>
    </ul>

    <h3>3.3 The "Same Form" Nouns (Zero Plural)</h3>
    <p>Singular and Plural are identical.</p>
    <ul>
      <li><em>Sheep, Deer, Moose, Swine, Aircraft, Spacecraft, Series, Species, Corps (pronounced 'kors').</em></li>
      <li>Note: <em>Fish</em> is plural for same species. <em>Fishes</em> refers to different species types.</li>
    </ul>
  </section>

  <section class="lesson-section">
    <h2>4. Subject-Verb Agreement: The "Killer" Questions</h2>
    <p>This is where most examinees fail. Pay close attention.</p>

    <h3>4.1 Intervening Phrases (Ignore them!)</h3>
    <p>Do not be distracted by words between the subject and the verb.</p>
    <ul>
      <li><em>The <strong>box</strong> [of chocolates] <strong>is</strong> missing.</em> (Subject is Box, not chocolates).</li>
      <li><em>The <strong>politician</strong>, [together with his wife and kids], <strong>has</strong> arrived.</em></li>
      <li>Phrases starting with <em>along with, as well as, together with, accompanied by, in addition to</em> DO NOT make the subject plural.</li>
    </ul>

    <h3>4.2 "And" vs. "One Idea"</h3>
    <p>Usually, "and" makes the subject plural. BUT, if the two nouns form <strong>one single idea/dish</strong>, use Singular.</p>
    <ul>
      <li><em>Bread and butter <strong>is</strong> my favorite breakfast.</em> (One meal).</li>
      <li><em>Fish and chips <strong>is</strong> popular in the UK.</em></li>
      <li><em><strong>BUT:</strong> Bread and butter <strong>were</strong> bought separately.</em> (Two distinct items).</li>
    </ul>

    <h3>4.3 Fractions and Percentages</h3>
    <p>The verb depends on the <strong>Object of the Preposition</strong> (what comes after "of").</p>
    <ul>
      <li><em>Fifty percent of the <strong>pie is</strong> eaten.</em> (Pie = Singular).</li>
      <li><em>Fifty percent of the <strong>pies are</strong> eaten.</em> (Pies = Plural).</li>
      <li><em>One-third of the <strong>students are</strong> absent.</em></li>
      <li><em>All of the <strong>water is</strong> gone.</em></li>
    </ul>

    <h3>4.4 "Here" and "There" (Inverted Sentences)</h3>
    <p>In sentences starting with Here/There, the subject comes <strong>after</strong> the verb.</p>
    <ul>
      <li><em>There <strong>is</strong> a <strong>problem</strong>.</em></li>
      <li><em>There <strong>are</strong> many <strong>reasons</strong>.</em></li>
      <li><em>Here <strong>comes</strong> the <strong>bus</strong>.</em></li>
    </ul>
  </section>

  <section class="lesson-section">
    <h2>5. Noun Cases (Nominative, Objective, Possessive)</h2>
    <p>Understanding cases helps you choose between I/Me, He/Him, Who/Whom.</p>

    <h3>5.1 Nominative Case (Subject)</h3>
    <p>The noun is doing the action or is the subject complement.</p>
    <ul>
      <li><em><strong>Maria</strong> sings.</em> (Subject)</li>
      <li><em>The winner is <strong>Maria</strong>.</em> (Predicate Nominative - follows "is/was/are").</li>
    </ul>

    <h3>5.2 Objective Case (Receiver)</h3>
    <p>The noun receives action or follows a preposition.</p>
    <ul>
      <li><em>I saw <strong>Maria</strong>.</em> (Direct Object)</li>
      <li><em>I gave <strong>Maria</strong> a gift.</em> (Indirect Object)</li>
      <li><em>I sat next to <strong>Maria</strong>.</em> (Object of Preposition)</li>
    </ul>

    <h3>5.3 Possessive Case (Ownership)</h3>
    <p><strong>The "Joint Ownership" Rule:</strong></p>
    <ul>
      <li><em>Ben and Benjie's car.</em> (They share ONE car).</li>
      <li><em>Ben's and Benjie's cars.</em> (They have TWO separate cars).</li>
    </ul>
  </section>

  <section class="lesson-section">
    <h2>6. Specialized Collective Nouns</h2>
    <p>Exams sometimes test vocabulary by asking for the specific collective noun.</p>
    <ul class="two-column-list">
      <li>A <strong>pride</strong> of lions</li>
      <li>A <strong>murder</strong> of crows</li>
      <li>A <strong>school/shoal</strong> of fish</li>
      <li>A <strong>pack</strong> of wolves</li>
      <li>A <strong>gaggle</strong> of geese</li>
      <li>A <strong>parliament</strong> of owls</li>
      <li>A <strong>convocation</strong> of eagles</li>
      <li>A <strong>troop</strong> of monkeys</li>
    </ul>
  </section>

  <section class="lesson-section">
    <h2>7. Final "Look-Alike" Warnings</h2>
    <p>Don't confuse these:</p>
    <ul>
      <li><strong>Advice</strong> (Noun) vs. <strong>Advise</strong> (Verb).</li>
      <li><strong>Prophecy</strong> (Noun) vs. <strong>Prophesy</strong> (Verb).</li>
      <li><strong>Effect</strong> (Noun/Result) vs. <strong>Affect</strong> (Verb/Influence).</li>
      <li><strong>Stationary</strong> (Not moving) vs. <strong>Stationery</strong> (Paper/Envelopes).</li>
    </ul>
  </section>
    `
  },

  verbs: {
    title: "Verbs – Action, State, Helping Verbs, and Consistent Tense",
    level: "Verbal Ability · Verbs & Tenses · CSE Grammar",
    intro:
      "A verb is the engine of the sentence. It tells what the subject does (action), what it is, or what state it is in. In English, verbs change their form to show time (tense), number (singular/plural), and aspect (simple, progressive, perfect). In the Civil Service Exam, verb questions usually appear in subject–verb agreement, correct tense, error identification, sentence improvement, and reading comprehension items.",
    keyPoints: [
      // 1. Basic definition and types
      "A verb expresses an action, a state, or existence. Without a verb, a group of words cannot form a complete sentence.",
      "Action verbs show what someone or something does: physical actions (run, write, speak) or mental actions (think, believe, decide).",
      "Linking verbs connect the subject to a word that describes or renames it: be (am, is, are, was, were), become, seem, appear, look, feel, sound, taste.",
      "Helping (auxiliary) verbs come before the main verb to form different tenses, voices, and questions: be (am, is, are, was, were), have (has, have, had), do (do, does, did), modals (can, could, may, might, must, will, would, shall, should).",
      "",
      // 2. Regular vs irregular & principal parts
      "Regular verbs form the past tense and past participle by adding -ed or -d: walk → walked → walked; clean → cleaned → cleaned.",
      "Irregular verbs change in different ways and must be memorized: go → went → gone; eat → ate → eaten; take → took → taken; write → wrote → written.",
      "The three principal parts of a verb are: base form (go), past tense (went), and past participle (gone). These are used to build all common tenses.",
      "",
      // 3. Verb phrases and transitive / intransitive
      "A verb phrase consists of one or more helping verbs plus a main verb: has finished, will be going, should have been done.",
      "Transitive verbs take a direct object (She wrote a letter. They bought a car.); intransitive verbs do not need an object to complete the meaning (He slept. The baby cried.).",
      "Some verbs can be either transitive or intransitive depending on how they are used: She runs a small shop (transitive). She runs every morning (intransitive).",
      "",
      // 4. Agreement and tense consistency
      "Verbs must agree with the subject in number and person: singular subject → singular verb (He runs); plural subject → plural verb (They run).",
      "The verb be has special forms for agreement: I am, you are, he/she/it is, we/you/they are; past forms: I/he/she/it was; you/we/they were.",
      "Tense shows time: present (they work), past (they worked), future (they will work). Aspect shows whether an action is finished or ongoing (simple, progressive, perfect).",
      "Keep the tense consistent within a sentence or paragraph unless the time clearly changes. Unnecessary tense shifts are common exam errors.",
      "",
      // 5. Modals and common exam traps
      "Modal verbs (can, could, may, might, must, will, would, shall, should) always use the base form of the main verb: can go, should study, must finish, will take.",
      "Do/does/did are helping verbs for questions and negatives in simple tenses: Do you understand? She does not agree. They did not come.",
      "Common exam errors include wrong verb forms (has went, did went, is finish, have saw) and wrong agreement (He go, They goes, The list of items are long)."
    ],
    patterns: [
      "Choosing the correct form of be (am/is/are/was/were) to match a singular or plural subject in the correct time frame.",
      "Selecting the correct past tense or past participle of irregular verbs in sentences with has/have/had or in passive voice.",
      "Identifying action verbs, linking verbs, and helping verbs in exam-style underlined portions.",
      "Deciding if a verb is transitive or intransitive, and checking if a direct object is used correctly.",
      "Using modals correctly to express ability, permission, obligation, advice, possibility, and polite requests (can, may, must, should, could, would).",
      "Spotting tense shift errors where the sentence suddenly jumps from past to present or future without a clear reason.",
      "Correcting sentences where the auxiliary is wrong or missing (She do not knows → She does not know; He have finished → He has finished)."
    ],
    examples: [
      {
        q: "In the sentence 'The students are studying for the exam,' what is the complete verb phrase and which word is the main verb?",
        choices: [
          "Complete verb: are; main verb: are",
          "Complete verb: studying; main verb: studying",
          "Complete verb: are studying; main verb: studying",
          "Complete verb: are studying; main verb: are"
        ],
        answer: "Complete verb: are studying; main verb: studying",
        explanation:
          "The helping verb are combines with the main verb studying to form the verb phrase are studying. The main verb is the word that carries the main meaning (studying)."
      },
      {
        q: "Which sentence uses a linking verb correctly?",
        choices: [
          "She looked happily the movie.",
          "She looked happy after the movie.",
          "She looked the movie happily.",
          "She looked at happy movie."
        ],
        answer: "She looked happy after the movie.",
        explanation:
          "In this sentence, looked acts as a linking verb connecting she to the adjective happy, which describes her state. The other sentences use looked incorrectly or form ungrammatical phrases."
      },
      {
        q: "Which sentence uses the correct past participle with a helping verb?",
        choices: [
          "She has went to the office.",
          "She has gone to the office.",
          "She had went to the office.",
          "She have gone to the office."
        ],
        answer: "She has gone to the office.",
        explanation:
          "The past participle of go is gone, not went. With has/have/had, we use the past participle: has gone, have gone, had gone. The subject she is singular, so we use has, not have."
      },
      {
        q: "Which sentence shows a transitive verb with a direct object?",
        choices: [
          "He slept on the sofa.",
          "The baby cried loudly.",
          "She wrote a letter.",
          "They arrived early."
        ],
        answer: "She wrote a letter.",
        explanation:
          "Wrote is a transitive verb here because it has a direct object (a letter). In the other sentences, the verbs slept, cried, and arrived do not have direct objects, so they are intransitive in those contexts."
      },
      {
        q: "Which sentence uses the modal verb correctly for a past possibility?",
        choices: [
          "He can to finish the work yesterday.",
          "He could finished the work yesterday.",
          "He could have finished the work yesterday.",
          "He can have finished the work yesterday ago."
        ],
        answer: "He could have finished the work yesterday.",
        explanation:
          "Could have + past participle (finished) is used to talk about a past possibility or something that was possible but did not happen, or that we are imagining. After could/can/may/might/must, always use the base form or the perfect form (have + past participle), not a simple past alone."
      },
      {
        q: "Which pair shows the correct subject–verb agreement in the present tense?",
        choices: [
          "He walk to work every day.",
          "They walks to work every day.",
          "She walks to work every day.",
          "They walks to works every day."
        ],
        answer: "She walks to work every day.",
        explanation:
          "In the simple present, a singular third-person subject (he, she, it) takes a verb with -s (walks). A plural subject (they) uses the base form (walk). Therefore, She walks is correct; They walk would also be correct, but they walks is wrong."
      },
      {
        q: "Which sentence maintains consistent verb tense?",
        choices: [
          "Yesterday, we visited the museum and learn many things.",
          "Yesterday, we visit the museum and learned many things.",
          "Yesterday, we visited the museum and learned many things.",
          "Yesterday, we are visiting the museum and learned many things."
        ],
        answer: "Yesterday, we visited the museum and learned many things.",
        explanation:
          "The time marker yesterday is past, so both verbs should be in the simple past tense: visited and learned. The other sentences mix past and present forms without a good reason, which is a common exam error."
      },
      {
        q: "Which sentence uses the auxiliary do correctly?",
        choices: [
          "She do not like spicy food.",
          "She does not likes spicy food.",
          "She does not like spicy food.",
          "She did not liked spicy food."
        ],
        answer: "She does not like spicy food.",
        explanation:
          "With does not, the main verb must be in the base form (like). The correct structure is does not like. We do not say do not likes or did not liked in standard English."
      }
    ],
    quickTips: [
      "Always identify the subject first, then match the verb in number and person (singular/plural, I/you/he/they).",
      "With has, have, or had, always use the past participle (has gone, have seen, had taken), not the simple past (has went, have saw).",
      "After modal verbs (can, could, may, might, must, will, would, shall, should), use the base form of the verb: can go, must finish, should study.",
      "Be careful with linking verbs (am, is, are, was, were, seem, become, look, feel). They are followed by adjectives or nouns, not adverbs: She is happy (not She is happily).",
      "Check sentences with There is/There are by looking at the real subject after the verb: There is a book. / There are many books.",
      "Avoid unnecessary tense shifts. If you start narrating in the past (I walked into the room), keep using the past unless the time clearly changes.",
      "Memorize the most common irregular verbs that appear in exams: go–went–gone, come–came–come, take–took–taken, give–gave–given, write–wrote–written, see–saw–seen, eat–ate–eaten, speak–spoke–spoken."
    ]
  },

  tenses: {
    title: "Tenses – Time, Aspect, and Consistent Use",
    level: "Verbal Ability · Verbs & Tenses · CSE Grammar",
    intro:
      "Tense tells us WHEN an action happens (past, present, future), while aspect tells us HOW the action happens (simple, continuous/progressive, perfect, perfect continuous). In the Civil Service Exam, tense questions usually test correct form (has gone vs had gone), tense consistency in a sentence or paragraph, and the difference between similar tenses like past simple vs present perfect, or past perfect vs past simple.",
    keyPoints: [
      // 1. Core idea
      "Tense = time (past, present, future). Aspect = how the action unfolds (simple, continuous, perfect, perfect continuous). Example: 'I study' (simple present), 'I am studying' (present continuous), 'I have studied' (present perfect), 'I have been studying' (present perfect continuous).",
      "Simple tenses focus on facts, habits, finished events, and scheduled events. Continuous tenses focus on actions in progress. Perfect tenses connect two different times. Perfect continuous tenses show an action that started earlier and continues up to another time.",

      // 2. Simple tenses
      "Simple Present: used for habits, general truths, fixed schedules, and permanent situations. Examples: 'She works in Cebu.' 'The sun rises in the east.' 'The meeting starts at 8:00 a.m.'",
      "Simple Past: used for finished actions at a specific time in the past, usually with time markers like yesterday, last week, a year ago, in 2019. Example: 'They visited Baguio last year.'",
      "Simple Future (will + base verb): used for decisions made at the moment of speaking, promises, offers, predictions without strong evidence. Example: 'I will call you later.'",

      // 3. Continuous / Progressive
      "Present Continuous (am/is/are + -ing): used for actions happening now, temporary actions, or definite future arrangements. Examples: 'She is studying now.' 'I am staying with my cousin this week.' 'We are meeting the client tomorrow.'",
      "Past Continuous (was/were + -ing): used for an action that was in progress at a particular time in the past, often interrupted by another shorter action in the simple past. Example: 'I was reading when the phone rang.'",
      "Future Continuous (will be + -ing): used for actions that will be in progress at a specific time in the future. Example: 'At 10 a.m. tomorrow, I will be taking the exam.'",

      // 4. Perfect tenses
      "Present Perfect (has/have + past participle): connects past and present. Used for (a) experiences at an unspecified time (I have visited Manila), (b) recent events with present result (She has lost her keys), and (c) actions that started in the past and continue until now when used with for/since (He has lived here for five years).",
      "Past Perfect (had + past participle): used for an action that was completed before another past action or time. Example: 'He had left when I arrived.' Here, leaving happened first; arriving happened second.",
      "Future Perfect (will have + past participle): used for actions that will be completed before a certain future time. Example: 'By next month, we will have finished the project.'",

      // 5. Perfect continuous
      "Present Perfect Continuous (has/have been + -ing): used for actions that started in the past and continue up to now, often emphasizing duration. Example: 'She has been studying for three hours.'",
      "Past Perfect Continuous (had been + -ing): used for longer past actions that continued up to another point in the past. Example: 'They had been working all day before they finally rested.'",
      "Future Perfect Continuous (will have been + -ing): used to emphasize the length of an activity up to a future time. Example: 'By next year, I will have been working here for ten years.'",

      // 6. Consistency & common exam traps
      "Tense Consistency: In one sentence or paragraph, keep the tense consistent unless the time clearly changes. Mixing past and present without reason is a common error (Wrong: 'Yesterday I go to town and bought groceries.').",
      "Time Markers: Words like yesterday, last week, in 2010, ago usually go with simple past; words like since, for, already, yet, ever, never often go with perfect tenses; words like now, at the moment, currently often go with continuous tenses.",
      "Reported Speech: In reported statements, present tenses often shift back if the reporting verb is in the past. Example: 'I am tired,' she said → She said that she was tired.",
      "Conditionals use specific tense patterns: If + present, will + base (real future); If + past, would + base (unreal present); If + past perfect, would have + past participle (unreal past).",
      "Common Errors: mixing up past simple and present perfect (I have seen it yesterday ❌), using past perfect without a second past action, and using continuous where simple is better (I am knowing him for years ❌)."
    ],
    patterns: [
      "Choosing the correct tense based on time expressions (yesterday, already, since 2010, now, by next year).",
      "Correcting sentences that shift tenses without a clear reason (especially in narratives and paragraph improvement items).",
      "Distinguishing between simple past and present perfect in context, especially with or without specific time markers.",
      "Using past perfect only when there are two past actions and one happened before the other.",
      "Identifying incorrect continuous forms (I am knowing, she is having a car) and replacing them with the simple form where needed.",
      "Choosing proper tense combinations in conditionals (If-clauses), time clauses (when, after, before), and reported speech.",
      "Recognizing which future form to use: will, be going to, present continuous, or future perfect."
    ],
    examples: [
      {
        q: "Which sentence uses the correct tense with the time marker yesterday?",
        choices: [
          "I have seen the report yesterday.",
          "I saw the report yesterday.",
          "I am seeing the report yesterday.",
          "I had seen the report yesterday."
        ],
        answer: "I saw the report yesterday.",
        explanation:
          "Yesterday refers to a specific time in the past, so we use the simple past: saw. Present perfect (have seen) is usually not used with specific past time expressions like yesterday, last week, in 2010."
      },
      {
        q: "Choose the best sentence to talk about an experience with no specific time:",
        choices: [
          "I went to Palawan.",
          "I have gone to Palawan yesterday.",
          "I have been to Palawan.",
          "I was going to Palawan last year."
        ],
        answer: "I have been to Palawan.",
        explanation:
          "When the exact time is not mentioned and we talk about life experience, we use the present perfect (have been). 'Yesterday' or 'last year' would require simple past (I went...)."
      },
      {
        q: "Which sentence correctly uses the past perfect?",
        choices: [
          "By the time I arrived, he left.",
          "By the time I arrived, he had left.",
          "By the time I had arrived, he left.",
          "By the time I had arrived, he had left yesterday."
        ],
        answer: "By the time I arrived, he had left.",
        explanation:
          "There are two past actions: he left and I arrived. The earlier action uses the past perfect (had left); the later action uses the simple past (arrived)."
      },
      {
        q: "Which sentence shows an action in progress interrupted by another past action?",
        choices: [
          "I was eating dinner when the phone rang.",
          "I ate dinner when the phone was ringing.",
          "I have eaten dinner when the phone rang.",
          "I am eating dinner when the phone rang."
        ],
        answer: "I was eating dinner when the phone rang.",
        explanation:
          "This pattern (past continuous + simple past) shows one action in progress (was eating) interrupted by a shorter completed action (rang). This is a very common CSE exam pattern."
      },
      {
        q: "Which sentence correctly expresses a situation that started in the past and continues up to now?",
        choices: [
          "She lives here since 2015.",
          "She lived here since 2015.",
          "She has lived here since 2015.",
          "She had lived here since 2015."
        ],
        answer: "She has lived here since 2015.",
        explanation:
          "For an action that began in the past and still continues, we use the present perfect (has/have + past participle) with since/for. 'Has lived' shows the action from 2015 up to the present."
      },
      {
        q: "Choose the correct future form: 'By next month, we ___ this training.'",
        choices: [
          "will finish",
          "will have finished",
          "are finishing",
          "finished"
        ],
        answer: "will have finished",
        explanation:
          "By next month refers to a deadline in the future. We use the future perfect (will have + past participle) to show that an action will be completed before that time: will have finished."
      },
      {
        q: "Which sentence maintains consistent tense?",
        choices: [
          "Last night, I watch TV and fell asleep.",
          "Last night, I watched TV and fall asleep.",
          "Last night, I watched TV and fell asleep.",
          "Last night, I am watching TV and fell asleep."
        ],
        answer: "Last night, I watched TV and fell asleep.",
        explanation:
          "Last night signals past time. Both verbs should be in the simple past: watched and fell. Mixing watch/fall with past forms is incorrect."
      },
      {
        q: "Choose the correct conditional sentence:",
        choices: [
          "If it will rain, we will stay at home.",
          "If it rained, we will stay at home.",
          "If it rains, we will stay at home.",
          "If it is raining yesterday, we will stay at home."
        ],
        answer: "If it rains, we will stay at home.",
        explanation:
          "Real future conditionals use If + simple present (rains) and will + base verb (will stay). We do not use will directly after if."
      }
    ],
    quickTips: [
      "Look at time expressions first (yesterday, now, since, by next year). They are strong clues for which tense to use.",
      "For experiences with no specific time, use present perfect (have/has + past participle). For finished actions at a known time in the past, use simple past.",
      "Use past perfect only when there are two different past times and you need to show which action happened first.",
      "Continuous tenses (-ing) are often used with now, at the moment, currently, and while. Simple tenses are used for habits and facts.",
      "Avoid mixing present and past in one sentence unless there is a really clear reason. The Civil Service Exam loves to test tense consistency errors.",
      "Memorize common irregular verb forms (go–went–gone, see–saw–seen, take–took–taken, write–wrote–written) because they appear in many tense questions.",
      "In conditionals, beware of using will after if. Use: If + present (If it rains), will + base verb (we will stay). For unreal situations, use If + past (If I were rich), would + base (I would travel)."
    ]
  },

  pronouns: {
    title: "Pronouns – The Complete Master Guide",
    level: "Verbal Ability · Pronouns · CSE Grammar",
    intro: `
      A pronoun replaces a noun (the antecedent). While basic pronouns are easy, the Civil Service Exam tests specific “formal grammar” rules that often differ from casual speech.
      
      This guide covers the three pillars of Pronoun Proficiency:
      1. Case (The I/Me/My rule)
      2. Agreement (Singular/Plural consistency)
      3. Reference (Clarity)
    `,
    keyPoints: [
      "**1. The Three Cases (Must Memorize):**",
      "   - **Subjective (Doer):** I, He, She, We, They, Who. (Use for subjects: 'SHE and I left.')",
      "   - **Objective (Receiver):** Me, Him, Her, Us, Them, Whom. (Use for objects: 'Call HIM and ME.')",
      "   - **Possessive (Owner):** My/Mine, His, Her/Hers, Their/Theirs, Whose. (Use for ownership: 'That is THEIRS.')",
      "",
      "**2. The Preposition Rule (Crucial):**",
      "   - Any pronoun following a preposition (between, with, to, from, for, about) MUST be Objective.",
      "   - CORRECT: 'Between you and ME.'",
      "   - CORRECT: 'For YOU and HER.'",
      "   - WRONG: 'Between you and I.' (Common error!)",
      "",
      "**3. Indefinite Pronouns - The 'Singular' List:**",
      "   - These are ALWAYS singular in formal grammar: Each, Every, Everyone, Everybody, Anyone, Anybody, Someone, Somebody, No one, Nobody, Either, Neither.",
      "   - Rule: Use singular verbs and pronouns.",
      "   - Example: 'Everyone has his or her own style.' (Not 'their' in strict exams.)",
      "",
      "**4. Indefinite Pronouns - The 'SANAM' Rule (Tricky!):**",
      "   - The pronouns Some, Any, None, All, Most (SANAM) can be Singular OR Plural.",
      "   - Rule: Look at the noun in the 'of' phrase that follows.",
      "   - Countable Noun = Plural: 'All of the apples ARE gone.'",
      "   - Uncountable Noun = Singular: 'All of the water IS gone.'",
      "",
      "**5. Collective Nouns (Team, Jury, Committee, Family):**",
      "   - As a Unit: If the group acts as one, use Singular. (e.g., 'The jury has reached its decision.')",
      "   - As Individuals: If members act separately, use Plural. (e.g., 'The jury are arguing among themselves.')",
      "",
      "**6. Relative Pronouns (Who vs. Whom vs. That vs. Which):**",
      "   - Who: Subject (like 'he'). 'He is the one who called.'",
      "   - Whom: Object (like 'him'). 'He is the one whom I met.'",
      "   - That: Essential clauses (no commas). 'The car that I bought.'",
      "   - Which: Non-essential clauses (with commas). 'The car, which is red, is fast.'"
    ],
    patterns: [
      "Compound Subject Test: 'Juan and I/Me went.' Remove 'Juan' → '(I) went' is correct → 'Juan and I'.",
      "Appositive Pronoun: '(We/Us) teachers love coffee.' Remove 'teachers' → 'We love coffee.' → 'We teachers' is correct.",
      "Than/As Comparison Trap: 'She is taller than I/Me.' Complete: 'She is taller than I am.' → 'I' is formally correct for exams.",
      "Ambiguous Reference: Avoid unclear 'he/she/they'. Make sure every pronoun clearly refers to only one noun."
    ],
    examples: [
      {
        q: "Which sentence is grammatically correct regarding indefinite pronouns?",
        choices: [
          "None of the cake are left.",
          "None of the students is here.",
          "None of the cake is left.",
          "None of the students was given their grades."
        ],
        answer: "None of the cake is left.",
        explanation:
          "SANAM rule: 'None' can be singular or plural. Look at the 'of' phrase. 'Of the cake' (cake is uncountable) → singular verb 'is'. 'None of the cake are' is wrong. For 'None of the students', we usually use 'are' in modern English."
      },
      {
        q: "Choose the correct pronoun: 'The supervisor asked ______ employees to work overtime.'",
        choices: ["we", "us", "ourselves", "they"],
        answer: "us",
        explanation:
          "Test without 'employees': 'The supervisor asked us.' 'Asked' takes an object, so we use objective 'us', not 'we'. Therefore, 'us employees' is correct."
      },
      {
        q: "Identify the error: 'Me and her are going to the mall later.'",
        choices: ["Me and her", "are going", "to the", "mall later"],
        answer: "Me and her",
        explanation:
          "Compound subject needs subjective case: 'She and I are going.' 'Me and her' uses objective case for subjects, which is incorrect in formal grammar."
      },
      {
        q: "Select the correct sentence regarding collective nouns.",
        choices: [
          "The committee have signed its report.",
          "The committee has signed their report.",
          "The committee has signed its report.",
          "The committee have signed their report."
        ],
        answer: "The committee has signed its report.",
        explanation:
          "Here, the committee acts as one unit (signing one report). Treat it as singular: singular verb 'has' + singular pronoun 'its'."
      },
      {
        q: "Who vs. Whom: '______ did you vote for in the election?'",
        choices: ["Who", "Whom", "Which", "That"],
        answer: "Whom",
        explanation:
          "Turn it into a statement: 'You voted for _____.' You would say 'You voted for him', not 'he'. 'Him' = object → use 'whom'."
      }
    ],
    quickTips: [
      "After prepositions (to, for, with, between, about), always use objective case: 'to him', 'with her', 'between you and me'.",
      "Each, every, either, neither, anyone, everyone are singular. Use singular verbs and pronouns in strict exam grammar.",
      "Use 'myself' only if 'I' is already in the sentence: 'I hurt myself.' Don't use 'myself' just to sound formal.",
      "In comparisons with than/as, silently complete the sentence: 'He is taller than I (am).' This helps you pick the correct pronoun.",
      "For very formal answers, avoid ambiguous 'they' if the exam requires 'his or her', but remember singular 'they' is common in modern usage."
    ]
  },

  grammatical_number: {
    title: "Grammatical Number – Singular, Plural, and Agreement",
    level: "Verbal Ability · Nouns & Pronouns · Number",
    intro:
      "Grammatical number tells us whether a word refers to one (singular) or more than one (plural) person, place, thing, or idea. In English, this affects the form of nouns (book/books), pronouns (this/these, it/they), and verbs (plays/play). In the Civil Service Exam, many questions quietly test your understanding of number: choosing correct plural forms, distinguishing countable from uncountable nouns, and making sure that subjects, verbs, and pronouns agree with each other in number.",
    keyPoints: [
      "A singular noun names one person, place, thing, or idea (student, city, idea). A plural noun refers to more than one (students, cities, ideas).",
      "Regular plurals are usually formed by adding -s or -es (book → books, bus → buses, box → boxes).",
      "Some plurals change spelling and must be memorized (child → children, foot → feet, mouse → mice, person → people).",
      "A few nouns have the same form in singular and plural (deer, sheep, fish, series, species). The number is shown by the verb or context.",
      "Countable nouns can be counted and have both singular and plural forms (one apple, two apples). Uncountable nouns usually do not have a normal plural and refer to mass or abstract ideas (rice, water, furniture, information, news).",
      "Different quantifiers are used for countable and uncountable nouns: many/few for countable; much/little for uncountable.",
      "Subject–verb agreement: a singular subject takes a singular verb (usually ending in -s), while a plural subject takes a plural verb (usually without -s).",
      "Indefinite pronouns such as each, every, everyone, someone, and nobody are grammatically singular and take singular verbs (Everyone is, Each has).",
      "Collective nouns (team, jury, family, committee, staff) can be singular or plural depending on whether the group is acting as one unit or as individuals.",
      "Pronouns must match their antecedent in number: this/that with singular, these/those with plural, it with singular things, they with plural things or people. Modern English also uses singular they/their for gender-neutral reference."
    ],
    patterns: [
      "Choosing the correct plural form of a noun, including irregular plurals and nouns with changing spelling (y → ies, f/fe → ves).",
      "Identifying whether a noun in a sentence is countable or uncountable and selecting the correct quantifier (many vs much, few vs little).",
      "Checking subject–verb agreement in sentences where the true subject is hidden by prepositional phrases (The box of apples is heavy).",
      "Deciding whether a collective noun should be treated as singular or plural based on the meaning of the sentence.",
      "Matching pronouns with their nouns in number and sometimes person (this/these, that/those, it/they, he or she/they).",
      "Error identification: spotting wrong plurals (childrens, informations, datas), incorrect verb forms (Each of the boys are), and wrong quantifiers (much books, many money)."
    ],
    examples: [
      {
        q: "Which is the correct plural form?",
        choices: ["lifes", "lives", "lifees", "life's"],
        answer: "lives",
        explanation:
          "Many nouns ending in -f or -fe form the plural by changing -f/-fe to -ves. The correct plural of life is lives (like wife → wives, leaf → leaves)."
      },
      {
        q: "Choose the correct sentence:",
        choices: [
          "Each of the players are ready.",
          "Each of the players is ready.",
          "Each of the player are ready.",
          "Each of the player is ready."
        ],
        answer: "Each of the players is ready.",
        explanation:
          "The subject is Each, which is grammatically singular and requires a singular verb (is). The phrase of the players is a prepositional phrase and does not change the number of the subject."
      },
      {
        q: "Which sentence uses an uncountable noun correctly?",
        choices: [
          "She gave me many informations.",
          "She gave me much information.",
          "She gave me two informations.",
          "She gave me an information."
        ],
        answer: "She gave me much information.",
        explanation:
          "Information is uncountable in standard English. It does not normally have a plural form and does not use many. We use much information or a lot of information instead."
      },
      {
        q: "Select the correct verb form:",
        choices: [
          "The box of apples are heavy.",
          "The box of apples is heavy.",
          "The boxes of apple is heavy.",
          "The boxes of apple was heavy."
        ],
        answer: "The box of apples is heavy.",
        explanation:
          "The true subject is box (singular), not apples. Prepositional phrases like of apples only describe the subject and do not control the verb. Singular subject box needs the singular verb is."
      },
      {
        q: "Which sentence has correct subject–verb agreement?",
        choices: [
          "The students in the class was noisy.",
          "The student in the class were noisy.",
          "The students in the class were noisy.",
          "The student in the class are noisy."
        ],
        answer: "The students in the class were noisy.",
        explanation:
          "The subject is students (plural), so the verb must be plural (were). The phrase in the class is a prepositional phrase and does not affect the number of the subject."
      },
      {
        q: "Which sentence uses the correct pronoun?",
        choices: [
          "This books are expensive.",
          "These book is expensive.",
          "This book is expensive.",
          "These book are expensive."
        ],
        answer: "This book is expensive.",
        explanation:
          "Use this with a singular noun (book) and a singular verb (is). Use these with plural nouns (books) and plural verbs (are). The correct singular combination is This book is expensive."
      }
    ],
    quickTips: [
      "Always identify the real subject of the sentence first, then choose the verb. Ignore prepositional phrases like of the students, in the classroom, or with their friends when deciding on the verb form.",
      "Memorize the most common irregular plurals (man/men, woman/women, child/children, tooth/teeth, foot/feet, mouse/mice, person/people). They appear frequently in grammar exams.",
      "Remember that information, advice, news, furniture, luggage, equipment, and traffic are uncountable in standard English. Do not use them with many or with a plural -s.",
      "If you are unsure about using his or her, make the noun plural and use they/their instead. For example: Each student must submit his or her paper → Students must submit their papers.",
      "Watch out for double plurals or invented plurals such as childrens, peoples (when you mean people), and datas. In most contexts, child → children, person → people, data is already plural.",
      "In exam questions about subject–verb agreement, be careful with sentences that start with phrases like There is/There are or that use collective nouns. Always match the verb with the real, closest subject."
    ]
  },

  gender: {
    title: "Gender of Nouns & Pronouns",
    level: "Verbal Ability · Nouns · Gender",
    intro:
      "Gender in English grammar classifies nouns as Masculine, Feminine, Common, or Neuter. This is crucial for pronoun–antecedent agreement.",
    keyPoints: [
      "Masculine: Refers to males (king, uncle, rooster). Pronoun: he/him.",
      "Feminine: Refers to females (queen, aunt, hen). Pronoun: she/her.",
      "Common: Either male or female (teacher, doctor, cousin, student).",
      "Neuter: Things, ideas, places (table, city, happiness). Pronoun: it/its.",
      "Collective nouns (team, jury) are often treated as neuter (it) when viewed as one unit.",
      "Modern usage: 'They/Their' is widely accepted as singular gender-neutral."
    ],
    patterns: [
      "Choosing the correct feminine/masculine pair (e.g., ram–ewe).",
      "Spotting pronoun agreement errors (e.g., 'The bride thanked his parents' = error).",
      "Identifying common vs. neuter nouns.",
      "Selecting gender-neutral terms (firefighter vs. fireman)."
    ],
    examples: [
      {
        q: "Which noun is COMMON gender?",
        choices: ["King", "Actress", "Teacher", "Mother"],
        answer: "Teacher",
        explanation: "Teacher can be male or female."
      },
      {
        q: "The manager said that ____ would review the report.",
        choices: ["he", "she", "he or she", "they"],
        answer: "he or she / they",
        explanation:
          "For common nouns, 'he or she' is formal; 'they' is modern standard in many contexts."
      }
    ],
    quickTips: [
      "If a noun is a thing or idea, it is usually neuter (it).",
      "If a profession doesn't specify sex, treat it as common gender.",
      "Be careful with sentences like 'The nurse lost his...' – check meaning and context.",
      "Animals are often 'it' unless the sex is highlighted (bull/cow, rooster/hen)."
    ]
  },

  adjectives: {
    title: "Adjectives – Describing, Comparing, and Limiting Nouns",
    level: "Verbal Ability · Adjectives · CSE Grammar",
    intro:
      "An adjective describes or gives more information about a noun or pronoun. It can tell us what kind, which one, how many, or how much. In the Civil Service Exam, adjectives are often tested through error identification, sentence improvement, correct usage, and comparison of adjectives.",
    keyPoints: [
      // 1. Basic role and questions
      "An adjective modifies a noun or pronoun. It answers questions like: What kind? Which one? How many? How much?",
      "Examples: a busy street (What kind?), that building (Which one?), three students (How many?), little time (How much?).",
      "Adjectives usually come before a noun (a small house) or after a linking verb (The house is small).",

      // 2. Positions of adjectives
      "Attributive position: the adjective comes before the noun. Example: a beautiful garden, an honest officer.",
      "Predicative position: the adjective comes after a linking verb like be, seem, become, look, feel. Example: The garden is beautiful. The officer seems honest.",
      "Only adjectives (not adverbs) follow linking verbs when they describe the subject. Example: She feels bad (not badly) about the result.",

      // 3. Types of adjectives
      "Descriptive adjectives: tell quality or characteristic (strong, kind, expensive, noisy).",
      "Quantitative adjectives: show quantity or amount (some, much, little, enough). Often used with uncountable nouns (some water, little time).",
      "Numeral adjectives: show exact number or order (three books, first prize, second chance).",
      "Demonstrative adjectives: point out specific nouns (this, that, these, those). Example: this report, those files.",
      "Possessive adjectives: show ownership (my, your, his, her, its, our, their). Example: my folder, their office.",
      "Interrogative adjectives: used in questions (which, what, whose) before a noun. Example: Which book? Whose application form?",
      "Proper adjectives: formed from proper nouns and usually capitalized (Filipino culture, English grammar, Asian country).",

      // 4. Adjectives vs. adverbs (very common exam trap)
      "Adjectives describe nouns and pronouns (She is careful, a careful driver). Adverbs usually describe verbs, adjectives, or other adverbs (She drives carefully).",
      "Good is an adjective (She is a good singer). Well is usually an adverb (She sings well), but can also be an adjective meaning in good health (I am well now).",
      "Fast, hard, and late can be both adjectives and adverbs without -ly. Examples: a fast car (adjective) / drive fast (adverb); a hard task (adjective) / work hard (adverb).",
      "Avoid using an adverb after a linking verb when describing the subject. Use an adjective instead: The soup tastes good (not tastes well).",

      // 5. Order of adjectives (when there are many)
      "When several adjectives appear before a noun, there is a natural order in English: Opinion (lovely) – Size (small) – Age (old) – Shape (round) – Color (red) – Origin (Filipino) – Material (wooden) – Purpose (sleeping as in sleeping bag).",
      "Example: a beautiful small old brown wooden chair (not a wooden old beautiful brown small chair).",
      "In exams, you may need to choose which combination sounds natural or correct based on this order.",

      // 6. Degrees of comparison
      "Adjectives have three degrees: Positive (big), Comparative (bigger), and Superlative (biggest). These are used to compare one, two, or more than two things.",
      "Use the positive degree when there is no comparison: The task is difficult. She is tall.",
      "Use the comparative degree to compare two people or things, usually with than: taller than, more careful than, less expensive than.",
      "Use the superlative degree to compare three or more, usually with the or among: the tallest in the group, the most careful worker, the least expensive option.",

      // 7. Forming comparatives and superlatives
      "One-syllable adjectives usually add -er and -est: tall → taller → tallest; fast → faster → fastest.",
      "Two-syllable adjectives ending in y usually change y to i and add -er / -est: happy → happier → happiest; easy → easier → easiest.",
      "Many two-syllable and most longer adjectives use more and most instead of -er and -est: beautiful → more beautiful → most beautiful; careful → more careful → most careful.",
      "Do not double the comparative: avoid phrases like more better, more kinder, most highest. Use either the -er form or more, but not both.",

      // 8. Irregular adjectives (must memorize)
      "Common irregular comparisons: good → better → best; bad → worse → worst; little → less → least; many/much → more → most; far → farther/further → farthest/furthest.",
      "These forms do not follow the regular -er/-est pattern and are frequently tested in exams.",

      // 9. Consistency and logic in comparisons
      "When comparing two people or things, use the comparative degree and often include than (He is taller than his brother).",
      "When comparing more than two, use the superlative with the (She is the most experienced member of the team).",
      "Be sure that comparisons are logical and complete. Example: This policy is better than the previous one (not better than the previous).",

      // 10. Common exam traps
      "Using adjectives instead of adverbs with action verbs (She speaks clear ❌ → She speaks clearly ✅).",
      "Using adverbs instead of adjectives after linking verbs (The food tastes wonderfully ❌ → The food tastes wonderful ✅).",
      "Incorrect double comparatives or superlatives (more better, most highest, more superior).",
      "Using wrong degree in context (among three candidates, say the best, not the better)."
    ],
    patterns: [
      "Choosing whether an adjective or an adverb is needed, especially after linking verbs (is, seems, looks, feels).",
      "Identifying correct and incorrect degrees of comparison in sentences (better vs best, more beautiful vs most beautiful).",
      "Arranging multiple adjectives in a natural, standard order before a noun (opinion–size–age–color–origin–material–purpose).",
      "Correcting sentences with double comparisons such as more better or most cheapest.",
      "Selecting the correct irregular comparative or superlative form (worse vs worst, further vs farthest).",
      "Error identification involving adjective–noun agreement and logical comparison (comparing a thing with itself or using the wrong reference)."
    ],
    examples: [
      {
        q: "Which sentence uses the adjective correctly after a linking verb?",
        choices: [
          "The soup tastes wonderfully.",
          "The soup tastes wonderful.",
          "The soup is tasting wonderfully.",
          "The soup tasted very carefully."
        ],
        answer: "The soup tastes wonderful.",
        explanation:
          "Tastes is a linking verb here (like is or seems), so it should be followed by an adjective that describes the soup (wonderful), not an adverb (wonderfully). The other options either use the wrong form or add an unrelated adverb."
      },
      {
        q: "Which sentence shows the correct degree of comparison?",
        choices: [
          "This is the more difficult exam I have taken.",
          "This exam is more difficult than the last one.",
          "This exam is the most more difficult one.",
          "This exam is difficult than the last one."
        ],
        answer: "This exam is more difficult than the last one.",
        explanation:
          "We are comparing two exams (this exam and the last one), so we use the comparative form more difficult followed by than. The first sentence incorrectly uses the superlative structure with more, the third has a double comparison (most more difficult), and the fourth omits more before difficult."
      },
      {
        q: "Which is the correct sentence using irregular comparisons?",
        choices: [
          "Her performance is more better this year.",
          "Her performance is better this year.",
          "Her performance is best this year among the two.",
          "Her performance is gooder this year."
        ],
        answer: "Her performance is better this year.",
        explanation:
          "Good has an irregular comparative form better, not more better or gooder. We do not combine more with better because that would be a double comparative. The phrase best is superlative and is normally used when comparing three or more."
      },
      {
        q: "Which sentence uses adjective order in the most natural way?",
        choices: [
          "She bought a wooden small beautiful table.",
          "She bought a beautiful small wooden table.",
          "She bought a small wooden beautiful table.",
          "She bought a wooden beautiful small table."
        ],
        answer: "She bought a beautiful small wooden table.",
        explanation:
          "The natural order is: Opinion (beautiful) – Size (small) – Material (wooden) – Noun (table). The correct sentence follows this pattern. The others sound unnatural or confusing to native speakers and will be considered wrong in formal exams."
      },
      {
        q: "Which sentence correctly compares more than two people?",
        choices: [
          "Of the three siblings, Ana is the taller.",
          "Of the three siblings, Ana is taller.",
          "Of the three siblings, Ana is the tallest.",
          "Of the three siblings, Ana is more tall."
        ],
        answer: "Of the three siblings, Ana is the tallest.",
        explanation:
          "We use the superlative degree when comparing three or more: Ana is the tallest. The comparative taller is used only to compare two. More tall is not the standard form; we use taller for short adjectives like tall."
      },
      {
        q: "Which sentence correctly distinguishes adjective and adverb?",
        choices: [
          "He is a carefully driver.",
          "He drives very careful.",
          "He is a careful driver.",
          "He drives very good."
        ],
        answer: "He is a careful driver.",
        explanation:
          "Careful is an adjective and should be used to describe the noun driver (a careful driver). Carefully is an adverb and should be used to describe how he drives (He drives carefully). Good is an adjective; the adverb form is well (He drives very well)."
      }
    ],
    quickTips: [
      "Remember: adjectives describe nouns or pronouns; adverbs usually describe verbs, adjectives, or other adverbs.",
      "After linking verbs like be, seem, appear, feel, look, taste, and sound, use adjectives (The plan looks good), not adverbs.",
      "For comparisons with two items, use the comparative (taller than, more careful than). For three or more, use the superlative (the tallest, the most careful).",
      "Avoid double comparisons such as more better, more superior, and most highest. Use either -er/-est or more/most, not both.",
      "Memorize common irregular forms: good–better–best; bad–worse–worst; little–less–least; many/much–more–most.",
      "When you see several adjectives before a noun in a test question, check if the order follows the usual pattern: opinion, size, age, color, origin, material, purpose."
    ]
  },

  // ==========================================
  // Adverbs – Full Expanded Lesson
  // ==========================================
  adverbs: {
    title: "Adverbs – How, When, Where, and How Often",
    level: "Verbal Ability · Adverbs · CSE Grammar",
    intro:
      "An adverb is a modifier. It adds detail to a sentence by answering how, when, where, how often, or to what degree something happens. In the Civil Service Exam, adverbs are tested through usage, position, comparison, and common traps with adjectives.",
    fullHtml: `
  <section class="lesson-section">
    <h2>1. What is an Adverb?</h2>
    <p>
      An <strong>adverb</strong> is a "modifier." It adds detail to a sentence by answering specific questions about how, when, where, or to what degree something happens.
    </p>
    <div class="highlight-box">
      <p><strong>The 3 Jobs of an Adverb:</strong></p>
      <ol>
        <li><strong>Modifies a Verb:</strong> <em>He runs <strong>fast</strong>.</em> (How does he run?)</li>
        <li><strong>Modifies an Adjective:</strong> <em>She is <strong>extremely</strong> smart.</em> (How smart?)</li>
        <li><strong>Modifies another Adverb:</strong> <em>The project is moving <strong>quite</strong> slowly.</em> (How slowly?)</li>
      </ol>
    </div>
  </section>

  <section class="lesson-section">
    <h2>2. The 7 Types of Adverbs</h2>
    <p>To master adverbs, you must recognize the different categories. Each answers a specific question.</p>

    <h3>2.1 Adverbs of Manner (How?)</h3>
    <p>Describes the behavior or way an action is performed. Usually follows the verb or object.</p>
    <ul>
      <li><em>The soldiers fought <strong>bravely</strong>.</em></li>
      <li><em>Please handle the glass <strong>carefully</strong>.</em></li>
    </ul>

    <h3>2.2 Adverbs of Place (Where?)</h3>
    <p>Describes location or direction.</p>
    <ul>
      <li><em>Please come <strong>here</strong>.</em></li>
      <li><em>The children are playing <strong>upstairs</strong>.</em></li>
      <li><em>He walked <strong>away</strong>.</em></li>
    </ul>

    <h3>2.3 Adverbs of Time (When?)</h3>
    <p>Describes when an action happened or for how long.</p>
    <ul>
      <li><em>I will call you <strong>later</strong>.</em></li>
      <li><em>We have <strong>already</strong> eaten.</em></li>
      <li><em>I haven't seen him <strong>lately</strong>.</em></li>
    </ul>

    <h3>2.4 Adverbs of Frequency (How often?)</h3>
    <p><strong>Definite Frequency:</strong> Exact timing (daily, weekly, yearly).</p>
    <ul>
      <li><em>We get paid <strong>monthly</strong>.</em></li>
    </ul>
    <p><strong>Indefinite Frequency:</strong> Vague timing (always, seldom, often, never).</p>
    <ul>
      <li><em>She <strong>rarely</strong> complains.</em></li>
    </ul>

    <h3>2.5 Adverbs of Degree (To what extent?)</h3>
    <p>Increases or decreases the intensity of the word it modifies.</p>
    <ul>
      <li><em>It is <strong>too</strong> cold outside.</em> (Negative intensity)</li>
      <li><em>She is <strong>very</strong> talented.</em> (High intensity)</li>
      <li><em>I <strong>barely</strong> know him.</em> (Low intensity)</li>
    </ul>

    <h3>2.6 Adverbs of Certainty (Probability)</h3>
    <p>Expresses how sure the speaker is.</p>
    <ul>
      <li><em><strong>Surely</strong>, you are joking.</em></li>
      <li><em>He is <strong>probably</strong> sleeping.</em></li>
      <li><em>I will <strong>definitely</strong> be there.</em></li>
    </ul>

    <h3>2.7 Conjunctive Adverbs (Connectors)</h3>
    <p>These connect two independent clauses or sentences. They show relationship, logic, or transition.</p>
    <p><strong>Common examples:</strong> <em>however, therefore, moreover, consequently, meanwhile, otherwise.</em></p>
    <div class="alert-box">
      <strong>Punctuation Rule:</strong> Use a semicolon (;) before and a comma (,) after.
    </div>
    <ul>
      <li><em>I studied hard; <strong>however</strong>, I failed the test.</em></li>
      <li><em>It was raining; <strong>therefore</strong>, the game was canceled.</em></li>
    </ul>
  </section>

  <section class="lesson-section">
    <h2>3. The Order of Adverbs (Syntax)</h2>
    <p>When you have multiple adverbs in one sentence, you cannot just place them anywhere. You must follow the <strong>Royal Order of Adverbs</strong>.</p>

    <h3>3.1 The Standard Order: M - P - T</h3>
    <p><strong>Manner</strong> → <strong>Place</strong> → <strong>Time</strong></p>
    <table class="lesson-table">
      <thead>
        <tr>
          <th>Subject + Verb</th>
          <th>Manner (How)</th>
          <th>Place (Where)</th>
          <th>Time (When)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>She sang</td>
          <td>beautifully</td>
          <td>at the concert</td>
          <td>last night.</td>
        </tr>
        <tr>
          <td>He swam</td>
          <td>enthusiastically</td>
          <td>in the pool</td>
          <td>this morning.</td>
        </tr>
      </tbody>
    </table>
    <p><em>Incorrect: She sang last night at the concert beautifully.</em> ✖</p>

    <h3>3.2 Movement Verbs (P - M - T)</h3>
    <p>If the verb indicates <strong>movement</strong> (go, run, drive, fly), Place often comes before Manner.</p>
    <ul>
      <li><em>He went <strong>to the hospital</strong> (Place) <strong>hurriedly</strong> (Manner).</em></li>
    </ul>
  </section>

  <section class="lesson-section">
    <h2>4. Tricky Rules & Common Exam Traps</h2>

    <h3>4.1 The "-ly" Adjective Trap</h3>
    <p>Not all words ending in <strong>-ly</strong> are adverbs. Some are adjectives.</p>
    <p><strong>Examples of Adjectives ending in -ly:</strong> <em>friendly, lovely, lonely, ugly, silly, deadly, costly.</em></p>
    <ul>
      <li>✖ <em>He spoke <strong>friendlily</strong>.</em> (This word does not exist!)</li>
      <li>✔ <em>He spoke <strong>in a friendly manner/way</strong>.</em></li>
      <li>✖ <em>She looks <strong>lovelily</strong>.</em> (Wrong)</li>
      <li>✔ <em>She looks <strong>lovely</strong>.</em> (Correct - 'looks' is a linking verb taking an adjective).</li>
    </ul>

    <h3>4.2 Flat Adverbs (Adjectives and Adverbs look the same)</h3>
    <p>Some words act as both adjectives and adverbs without adding -ly.</p>
    <table class="lesson-table">
      <thead>
        <tr>
          <th>Word</th>
          <th>As Adjective (Modifies Noun)</th>
          <th>As Adverb (Modifies Verb)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Fast</strong></td>
          <td>He is a <strong>fast</strong> runner.</td>
          <td>He runs <strong>fast</strong>. (Not fastly)</td>
        </tr>
        <tr>
          <td><strong>Hard</strong></td>
          <td>This is a <strong>hard</strong> rock.</td>
          <td>He hit the ball <strong>hard</strong>.</td>
        </tr>
        <tr>
          <td><strong>Late</strong></td>
          <td>The bus is <strong>late</strong>.</td>
          <td>He arrived <strong>late</strong>.</td>
        </tr>
        <tr>
          <td><strong>Straight</strong></td>
          <td>Draw a <strong>straight</strong> line.</td>
          <td>Go <strong>straight</strong> home.</td>
        </tr>
      </tbody>
    </table>

    <h3>4.3 Placement of "Only" (Focus Adverbs)</h3>
    <p>The position of the word <strong>only</strong> changes the meaning of the sentence completely.</p>
    <ul>
      <li><em><strong>Only</strong> I hit him in the eye.</em> (No one else did it).</li>
      <li><em>I <strong>only</strong> hit him in the eye.</em> (I didn't kick or scratch him, just hit).</li>
      <li><em>I hit <strong>only</strong> him in the eye.</em> (I didn't hit anyone else).</li>
      <li><em>I hit him <strong>only</strong> in the eye.</em> (I didn't hit his nose or mouth).</li>
    </ul>
  </section>

  <section class="lesson-section">
    <h2>5. Comparison of Adverbs</h2>
    <p>Like adjectives, adverbs have three degrees: Positive, Comparative, and Superlative.</p>

    <h3>5.1 Regular Adverbs (-ly)</h3>
    <p>Use <strong>more</strong> and <strong>most</strong>.</p>
    <ul>
      <li>Carefully → More carefully → Most carefully</li>
      <li>Slowly → More slowly → Most slowly</li>
    </ul>

    <h3>5.2 Short Adverbs (No -ly)</h3>
    <p>Add <strong>-er</strong> and <strong>-est</strong>.</p>
    <ul>
      <li>Fast → Faster → Fastest</li>
      <li>Hard → Harder → Hardest</li>
      <li>Soon → Sooner → Soonest</li>
    </ul>

    <h3>5.3 Irregular Adverbs</h3>
    <table class="lesson-table">
      <thead>
        <tr>
          <th>Positive</th>
          <th>Comparative</th>
          <th>Superlative</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Well</td>
          <td>Better</td>
          <td>Best</td>
        </tr>
        <tr>
          <td>Badly</td>
          <td>Worse</td>
          <td>Worst</td>
        </tr>
        <tr>
          <td>Little</td>
          <td>Less</td>
          <td>Least</td>
        </tr>
        <tr>
          <td>Far</td>
          <td>Farther (distance) / Further (degree)</td>
          <td>Farthest / Furthest</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="lesson-section">
    <h2>6. Advanced: Negative Inversion</h2>
    <p>In formal English and exams, if a sentence starts with a <strong>negative adverb</strong>, the subject and auxiliary verb are inverted (switched).</p>
    <p><strong>Negative Adverbs:</strong> <em>Never, Rarely, Seldom, Scarcely, Barely, No sooner.</em></p>
    <ul>
      <li><strong>Normal:</strong> <em>I have <strong>never</strong> seen such a mess.</em></li>
      <li><strong>Inverted:</strong> <em><strong>Never</strong> have I seen such a mess.</em></li>
    </ul>
    <ul>
      <li><strong>Normal:</strong> <em>He <strong>rarely</strong> goes to church.</em></li>
      <li><strong>Inverted:</strong> <em><strong>Rarely</strong> does he go to church.</em> (Note the addition of "does")</li>
    </ul>
  </section>

  <section class="lesson-section">
    <h2>7. Summary Checklist</h2>
    <ul class="check-list">
      <li>Does it answer How, When, Where, or How often? It's an adverb.</li>
      <li>Does it modify a Noun? It's an <strong>Adjective</strong>.</li>
      <li>Does it modify a Verb/Adj/Adv? It's an <strong>Adverb</strong>.</li>
      <li>"Good" is an adjective. "Well" is an adverb (unless talking about health).</li>
      <li>"Hardly" means "almost not," not "with effort."</li>
      <li>"Fastly" is not a word. Use "Fast."</li>
    </ul>
  </section>
    `
  },

  // ==========================================
  // PREPOSITIONS – STUDY NOTES (for Study Mode)
  // ==========================================
  prepositions: {
    title: "Prepositions – The Complete Master Guide",
    level: "Verbal Ability · Prepositions · CSE Grammar",
    fullHtml: `
      <section class="lesson-section">
        <h2>1. What is a preposition?</h2>
        <p>A preposition is a small word that shows the relationship between another word in the sentence and its object. It almost always has an <strong>object</strong> (usually a noun, pronoun, or gerund).</p>
        <p>It often shows relationships of:</p>
        <ul>
          <li><strong>Time</strong> (when?)</li>
          <li><strong>Place</strong> (where?)</li>
          <li><strong>Direction</strong> (where to?)</li>
          <li><strong>Reason</strong> (why?)</li>
          <li><strong>Manner</strong> (how?)</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Structure:</strong><br>
          Preposition + Object = <em>Prepositional Phrase</em></p>
        </div>
        <p><strong>Example:</strong> "The book is <em>on</em> (prep) <em>the table</em> (object)." → <em>on the table</em> (phrase)</p>
      </section>

      <section class="lesson-section">
        <h2>2. Prepositions Cheat Sheet</h2>
        <h3>A. Place (Where?)</h3>
        <p><em>in, on, at, under, above, behind, between, among, inside, near, beside, across, opposite.</em></p>
        
        <h3>B. Time (When?)</h3>
        <p><em>at, on, in, by, before, after, during, until, since, for.</em></p>
        
        <h3>C. Direction (Where to?)</h3>
        <p><em>to, into, onto, towards, through, across, along, over, past.</em></p>
        
        <h3>D. Other Groups</h3>
        <ul>
          <li><strong>Reason:</strong> for, because of, due to</li>
          <li><strong>Agent:</strong> by (The book was written <em>by</em> Jose.)</li>
          <li><strong>Topic:</strong> about, regarding, concerning</li>
        </ul>
      </section>

      <section class="lesson-section">
        <h2>3. AT, ON, IN (The "Big Three")</h2>
        
        <h3>3A. Time Rules</h3>
        <table class="lesson-table">
          <tr>
            <th>Preposition</th>
            <th>Usage</th>
            <th>Examples</th>
          </tr>
          <tr>
            <td><strong>AT</strong></td>
            <td>Specific, Exact Time</td>
            <td>at 5:00, at noon, at night, at the moment</td>
          </tr>
          <tr>
            <td><strong>ON</strong></td>
            <td>Days & Dates</td>
            <td>on Monday, on July 5, on my birthday, on Christmas Day</td>
          </tr>
          <tr>
            <td><strong>IN</strong></td>
            <td>Long Periods</td>
            <td>in 2025, in July, in the morning, in the past</td>
          </tr>
        </table>
        <p><strong>Common Errors:</strong><br>
        ❌ <em>on 1995</em> → ✅ <strong>in 1995</strong><br>
        ❌ <em>at Monday</em> → ✅ <strong>on Monday</strong></p>

        <h3>3B. Place Rules</h3>
        <table class="lesson-table">
          <tr>
            <th>Preposition</th>
            <th>Usage</th>
            <th>Examples</th>
          </tr>
          <tr>
            <td><strong>AT</strong></td>
            <td>Specific Point</td>
            <td>at home, at the bus stop, at the door, at school</td>
          </tr>
          <tr>
            <td><strong>IN</strong></td>
            <td>Enclosed Space / City / Country</td>
            <td>in the room, in the box, in Cebu, in the Philippines</td>
          </tr>
          <tr>
            <td><strong>ON</strong></td>
            <td>Surface</td>
            <td>on the table, on the wall, on the floor, on the screen</td>
          </tr>
        </table>
        <p><strong>Common Errors:</strong><br>
        ❌ <em>on the room</em> → ✅ <strong>in the room</strong><br>
        ❌ <em>in the table</em> → ✅ <strong>on the table</strong></p>
      </section>

      <section class="lesson-section">
        <h2>4. SINCE vs. FOR</h2>
        <p>This is a very common exam topic regarding the <strong>Present Perfect Tense</strong>.</p>
        <ul>
          <li><strong>FOR</strong> (Duration): Shows <em>how long</em>. <br>
          <em>Examples: for two hours, for five days, for many years.</em></li>
          
          <li><strong>SINCE</strong> (Starting Point): Shows <em>when it started</em>.<br>
          <em>Examples: since 2010, since last week, since 6:00 a.m.</em></li>
        </ul>
        <p><strong>Pattern:</strong><br>
        ❌ <em>I have lived here for 2010.</em><br>
        ✅ <em>I have lived here <strong>since</strong> 2010.</em></p>
      </section>

      <section class="lesson-section">
        <h2>5. BY vs. UNTIL</h2>
        <ul>
          <li><strong>BY</strong> (Deadline): "Not later than." The action happens before or at that moment.<br>
          <em>"Finish this by 5:00."</em></li>
          
          <li><strong>UNTIL</strong> (Continuation): "Up to that time." The action continues and stops at that moment.<br>
          <em>"I waited until 5:00."</em></li>
        </ul>
      </section>

      <section class="lesson-section">
        <h2>6. DURING vs. WHILE</h2>
        <ul>
          <li><strong>DURING + Noun:</strong> <em>during the meeting, during the night.</em></li>
          <li><strong>WHILE + Clause (Subject+Verb):</strong> <em>while I was studying, while he was sleeping.</em></li>
        </ul>
        <p>❌ <em>during I was studying</em> → ✅ <em>while I was studying</em></p>
      </section>

      <section class="lesson-section">
        <h2>7. Direction & Movement</h2>
        <ul>
          <li><strong>TO:</strong> Movement toward a specific place. <em>(Go to school)</em></li>
          <li><strong>INTO:</strong> From outside to inside. <em>(Walked into the room)</em></li>
          <li><strong>ONTO:</strong> From off to on top of. <em>(Jumped onto the table)</em></li>
          <li><strong>THROUGH:</strong> Passing inside something. <em>(Drive through the tunnel)</em></li>
          <li><strong>ALONG:</strong> Parallel movement. <em>(Walk along the beach)</em></li>
        </ul>
      </section>

      <section class="lesson-section">
        <h2>8. BETWEEN vs. AMONG</h2>
        <ul>
          <li><strong>BETWEEN:</strong> Usually for <strong>TWO</strong> items or distinct individuals.<br>
          <em>"Between you and me." "Between the three distinct buildings."</em></li>
          
          <li><strong>AMONG:</strong> For a group where individuals are not separated.<br>
          <em>"Among friends." "Among the trees."</em></li>
        </ul>
      </section>

      <section class="lesson-section">
        <h2>9. Common Combinations (Collocations)</h2>
        <p>Exams test which preposition naturally pairs with a verb or adjective.</p>
        
        <h3>Verb + Preposition</h3>
        <ul class="two-column-list">
          <li>Depend <strong>on</strong></li>
          <li>Listen <strong>to</strong></li>
          <li>Wait <strong>for</strong></li>
          <li>Apologize <strong>for</strong></li>
          <li>Belong <strong>to</strong></li>
          <li>Suffer <strong>from</strong></li>
          <li>Look <strong>at</strong> (see)</li>
          <li>Look <strong>for</strong> (search)</li>
          <li>Look <strong>after</strong> (care)</li>
        </ul>
        <p>❌ <em>I will wait you.</em> → ✅ <em>I will wait <strong>for</strong> you.</em></p>

        <h3>Adjective + Preposition</h3>
        <ul class="two-column-list">
          <li>Good <strong>at</strong> (skill)</li>
          <li>Interested <strong>in</strong></li>
          <li>Afraid <strong>of</strong></li>
          <li>Famous <strong>for</strong></li>
          <li>Similar <strong>to</strong></li>
          <li>Different <strong>from</strong> (Not 'than')</li>
          <li>Angry <strong>with</strong> (person)</li>
          <li>Angry <strong>about</strong> (thing)</li>
        </ul>
      </section>

      <section class="lesson-section">
        <h2>10. The Gerund Rule</h2>
        <p>If you put a verb after a preposition, it MUST be in the <strong>-ING</strong> form (Gerund).</p>
        <ul>
          <li><em>Interested in <strong>learning</strong>.</em> (Not 'learn')</li>
          <li><em>Good at <strong>drawing</strong>.</em></li>
          <li><em>Before <strong>going</strong>.</em></li>
        </ul>
      </section>

      <section class="lesson-section">
        <h2>11. Common Filipino/Exam Errors</h2>
        <ol>
          <li><strong>No Prep before Next/Last/This:</strong><br>
          ❌ <em>See you on next week.</em><br>
          ✅ <em>See you <strong>next week</strong>.</em></li>
          
          <li><strong>Discuss/Marry:</strong> These verbs do not need prepositions.<br>
          ❌ <em>Discuss about the topic.</em> → ✅ <em><strong>Discuss</strong> the topic.</em><br>
          ❌ <em>Married with him.</em> → ✅ <em>Married <strong>him</strong> (or to him).</em></li>
          
          <li><strong>Off of:</strong> In formal English, remove 'of'.<br>
          ❌ <em>Off of the table.</em> → ✅ <em><strong>Off</strong> the table.</em></li>
        </ol>
      </section>

      <section class="lesson-section">
        <h2>12. Final Exam Strategy</h2>
        <ul class="check-list">
          <li>Check for <strong>Subject-Verb Agreement</strong> even if there is a prepositional phrase in the middle.</li>
          <li>If the sentence has <strong>"has/have" (Present Perfect)</strong>, check if you need <strong>Since</strong> or <strong>For</strong>.</li>
          <li>Memorize the "Big Three": <strong>AT</strong> (Exact), <strong>ON</strong> (Days/Surface), <strong>IN</strong> (General/Enclosed).</li>
        </ul>
      </section>
    `
  }
};

// ==========================================
// 3. APP LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const modeTabs = document.querySelectorAll(".mode-tab");
  const modeSections = document.querySelectorAll(".mode-section");

  // Study Elements
  const topicsListEl = document.getElementById("topicsList");
  const lessonTitleEl = document.getElementById("lesson-title");
  const lessonMetaEl = document.getElementById("lesson-meta");
  const lessonContentEl = document.getElementById("lesson-content");

  // Practice Elements
  const practiceTopicEl = document.getElementById("practice-topic");
  const practiceLevelEl = document.getElementById("practice-level");
  const practiceCountEl = document.getElementById("practice-count");
  const timerModeEl = document.getElementById("timer-mode");
  const practiceWeakEl = document.getElementById("practice-weak");
  const startQuizBtn = document.getElementById("start-quiz-btn");

  // Quiz Active Elements
  const quizProgressEl = document.getElementById("quiz-progress");
  const quizTimerEl = document.getElementById("quiz-timer");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");
  const quizOutputEl = document.getElementById("quiz-output");
  const quizProgressFillEl = document.getElementById("quiz-progress-fill");

  // --- Tab Switching ---
  modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const mode = tab.dataset.mode;
      modeTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      modeSections.forEach((section) => {
        section.classList.toggle("active", section.id === `mode-${mode}`);
      });
    });
  });

  // --- Study Mode Logic ---
  function renderTopicsSidebar(activeId = "nouns") {
    if (!topicsListEl) return;
    topicsListEl.innerHTML = "";

    const groupTitle = document.createElement("div");
    groupTitle.className = "topic-group-title";
    groupTitle.textContent = "Verbal Ability Topics";
    topicsListEl.appendChild(groupTitle);

    const listContainer = document.createElement("div");
    listContainer.className = "topic-list";

    VERBAL_TOPICS.forEach((t) => {
      const btn = document.createElement("button");
      btn.className = "topic-btn" + (t.id === activeId ? " active" : "");
      btn.textContent = t.label;
      btn.dataset.topic = t.id;
      btn.addEventListener("click", () => {
        renderTopicsSidebar(t.id);
        renderLesson(t.id);
      });
      listContainer.appendChild(btn);
    });

    topicsListEl.appendChild(listContainer);
  }

  function renderLesson(topicKey) {
    const data = LESSONS[topicKey];
    if (!data) {
      lessonTitleEl.textContent = "Coming soon";
      lessonMetaEl.textContent = "Content under development";
      lessonContentEl.innerHTML =
        '<p>This lesson is being updated. Please try <strong>Nouns</strong> or <strong>Gender</strong> for now.</p>';
      return;
    }

    lessonTitleEl.textContent = data.title || "Verbal Ability Topic";
    lessonMetaEl.textContent = data.level || "CSE Verbal Ability";

    // SPECIAL CASE: kung may fullHtml (gaya ng Adverbs / Prepositions), diretso natin i-render
    if (data.fullHtml) {
      lessonContentEl.innerHTML = data.fullHtml;
      return;
    }

    // Default path para sa ibang lessons (Nouns, Verbs, etc.)
    let html = "";
    if (data.intro) {
      html += `<div class="lesson-section"><p>${data.intro}</p></div>`;
    }

    if (data.keyPoints) {
      html += `
        <div class="lesson-section">
          <div class="lesson-section-title">Key Points</div>
          <ul>${data.keyPoints.map((k) => `<li>${k}</li>`).join("")}</ul>
        </div>`;
    }

    if (data.patterns) {
      html += `
        <div class="lesson-section">
          <div class="lesson-section-title">Exam Patterns</div>
          <ul>${data.patterns.map((p) => `<li>${p}</li>`).join("")}</ul>
        </div>`;
    }

    if (data.examples) {
      html += `<div class="lesson-section">
        <div class="lesson-section-title">Examples</div>`;
      data.examples.forEach((ex) => {
        html += `
          <div class="lesson-example">
            <strong>Q:</strong> ${ex.q}<br />
            ${
              ex.choices
                ? `<em>Choices: ${ex.choices.join(", ")}</em><br />`
                : ""
            }
            <strong>Ans:</strong> ${ex.answer}<br />
            <small>${ex.explanation}</small>
          </div>`;
      });
      html += `</div>`;
    }

    if (data.quickTips) {
      html += `
        <div class="lesson-section">
          <div class="lesson-section-title">Quick Tips</div>
          <ul>${data.quickTips.map((t) => `<li>${t}</li>`).join("")}</ul>
        </div>`;
    }

    lessonContentEl.innerHTML = html;
  }

  // Init Study Mode
  renderTopicsSidebar("nouns");
  renderLesson("nouns");

  // --- Practice Mode Logic ---

  // Helper: kunin question bank depende sa topic
  function getQuestionBank(topic) {
    switch (topic) {
      case "nouns":
        return NOUN_QUESTIONS;
      case "gender":
        return GENDER_QUESTIONS;
      case "grammatical_number":
        return GRAMMATICAL_NUMBER_QUESTIONS;
      case "verbs":
        return VERB_QUESTIONS;
      case "tenses":
        return TENSE_QUESTIONS;
      case "pronouns":
        return PRONOUN_QUESTIONS;
      case "adjectives":
        return ADJECTIVE_QUESTIONS;
      case "adverbs":
        return ADVERB_QUESTIONS;
      // prepositions questions pwede mong idagdag dito later:
      // case "prepositions":
      //   return PREPOSITION_QUESTIONS;
      default:
        return null;
    }
  }

  // Populate topic select
  if (practiceTopicEl) {
    practiceTopicEl.innerHTML = "";
    VERBAL_TOPICS.forEach((topic) => {
      const opt = document.createElement("option");
      opt.value = topic.id;
      opt.textContent = topic.label;
      practiceTopicEl.appendChild(opt);
    });
    practiceTopicEl.value = "nouns";
  }

  let quizState = null;

  // Helper para tumigil ang current timer (kung meron)
  function stopCurrentTimer() {
    if (quizState && quizState.timerId) {
      clearInterval(quizState.timerId);
      quizState.timerId = null;
    }
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function updateProgressFill(percentOverride) {
    if (!quizProgressFillEl) return;
    let pct = percentOverride;
    if (typeof pct !== "number" && quizState) {
      pct = (quizState.currentIndex / quizState.questions.length) * 100;
    }
    quizProgressFillEl.style.width = `${Math.max(
      0,
      Math.min(100, pct || 0)
    )}%`;
  }

  function updateStats() {
    if (!quizState) return;
    quizOutputEl.innerHTML = `
      <div class="stats-panel">
        <div class="stat-item"><span>Correct</span><span>${quizState.correct}</span></div>
        <div class="stat-item"><span>Incorrect</span><span>${
          quizState.incorrect
        }</span></div>
        <div class="stat-item"><span>Left</span><span>${
          quizState.questions.length - quizState.currentIndex
        }</span></div>
      </div>`;
  }

  function startTimer() {
    if (!quizState) return;
    stopCurrentTimer();

    const mode = quizState.timerMode;
    if (mode === "off") {
      quizTimerEl.textContent = "Time: --";
      return;
    }

    quizState.timeLeft = parseInt(mode, 10);
    quizTimerEl.textContent = `Time: ${quizState.timeLeft}s`;

    quizState.timerId = setInterval(() => {
      quizState.timeLeft--;
      quizTimerEl.textContent = `Time: ${quizState.timeLeft}s`;
      if (quizState.timeLeft <= 0) {
        clearInterval(quizState.timerId);
        handleTimeout();
      }
    }, 1000);
  }

  function showQuestion() {
    if (!quizState) return;
    const q = quizState.questions[quizState.currentIndex];
    quizState.answered = false;

    quizProgressEl.textContent = `Question ${
      quizState.currentIndex + 1
    } of ${quizState.questions.length}`;
    updateProgressFill();

    quizQuestionEl.textContent = q.question;
    quizChoicesEl.innerHTML = "";
    quizExplanationEl.classList.add("hide");
    quizNextBtn.classList.add("hide");

    q.choices.forEach((choice, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-choice";
      btn.textContent = choice;
      btn.addEventListener("click", () => handleAnswer(idx));
      quizChoicesEl.appendChild(btn);
    });

    updateStats();
    startTimer();
  }

  function handleAnswer(idx) {
    if (!quizState || quizState.answered) return;
    quizState.answered = true;
    if (quizState.timerId) clearInterval(quizState.timerId);

    const q = quizState.questions[quizState.currentIndex];
    const btns = quizChoicesEl.querySelectorAll("button");

    if (idx === q.correctIndex) {
      quizState.correct++;
      btns[idx].classList.add("correct");
    } else {
      quizState.incorrect++;
      btns[idx].classList.add("incorrect");
      if (btns[q.correctIndex]) {
        btns[q.correctIndex].classList.add("correct");
      }
    }

    quizExplanationEl.textContent = q.explanation;
    quizExplanationEl.classList.remove("hide");

    quizNextBtn.textContent =
      quizState.currentIndex < quizState.questions.length - 1
        ? "Next Question"
        : "See Results";
    quizNextBtn.classList.remove("hide");
    updateStats();
  }

  function handleTimeout() {
    if (!quizState || quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentIndex];
    const btns = quizChoicesEl.querySelectorAll("button");

    quizState.incorrect++;
    if (btns[q.correctIndex]) {
      btns[q.correctIndex].classList.add("correct");
    }

    quizExplanationEl.textContent = "Time's up! " + q.explanation;
    quizExplanationEl.classList.remove("hide");

    quizNextBtn.textContent =
      quizState.currentIndex < quizState.questions.length - 1
        ? "Next Question"
        : "See Results";
    quizNextBtn.classList.remove("hide");
    updateStats();
  }

  startQuizBtn.addEventListener("click", () => {
    // puwede mag-start ng bagong quiz kahit nasa gitna ka pa
    stopCurrentTimer();

    const topic = practiceTopicEl.value;
    const level = practiceLevelEl.value;
    const count = parseInt(practiceCountEl.value, 10);
    const timer = timerModeEl.value;
    const weakNotes = practiceWeakEl.value.trim(); // reserved for future

    const bank = getQuestionBank(topic);
    if (!bank) {
      alert(
        "Questions for this topic are not yet available. For now, try Nouns or Gender."
      );
      return;
    }

    const pool = bank[level];
    if (!pool || pool.length === 0) {
      alert(`No questions found for ${level} level.`);
      return;
    }

    const selectedQuestions = shuffleArray(pool).slice(0, count);

    quizState = {
      questions: selectedQuestions,
      currentIndex: 0,
      correct: 0,
      incorrect: 0,
      timerMode: timer,
      timeLeft: 0,
      timerId: null,
      answered: false,
      weakNotes
    };

    showQuestion();
  });

  quizNextBtn.addEventListener("click", () => {
    if (!quizState) return;

    if (quizState.currentIndex < quizState.questions.length - 1) {
      quizState.currentIndex++;
      showQuestion();
    } else {
      // Finish quiz
      updateProgressFill(100);
      quizQuestionEl.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p>Score: ${quizState.correct} / ${quizState.questions.length}</p>
      `;
      quizChoicesEl.innerHTML = "";
      quizExplanationEl.classList.add("hide");
      quizNextBtn.classList.add("hide");

      const restartBtn = document.createElement("button");
      restartBtn.className = "mode-btn active";
      restartBtn.style.marginTop = "20px";
      restartBtn.textContent = "Take Another Quiz";
      restartBtn.onclick = () => {
        quizQuestionEl.textContent =
          "Ready when you are. Set up your quiz on the left and press “Start practice quiz”.";
        restartBtn.remove();
        quizOutputEl.innerHTML = `
          <div class="stats-panel">
            <div class="stat-item"><span>Correct</span><span>0</span></div>
            <div class="stat-item"><span>Incorrect</span><span>0</span></div>
            <div class="stat-item"><span>Unanswered</span><span>0</span></div>
          </div>`;
        updateProgressFill(0);
      };
      quizChoicesEl.appendChild(restartBtn);
    }
  });
});

