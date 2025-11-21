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

// ==========================================
// 2. LESSONS DATA
// ==========================================
const LESSONS = {
  nouns: {
    title: "Nouns – Basics & Types",
    level: "All levels · CSE Verbal Ability",
    intro:
      "A noun is a word that names a person, place, thing, or idea. In the CSE, questions often test noun types, singular/plural forms, and usage.",
    keyPoints: [
      "A noun names a person (teacher), place (city), thing (book), or idea (freedom).",
      "Common nouns are general; proper nouns are specific and capitalized.",
      "Concrete nouns are tangible; abstract nouns are ideas or feelings.",
      "Countable nouns have plurals; uncountable nouns usually do not.",
      "Collective nouns refer to groups (team, family) and can be singular or plural depending on meaning."
    ],
    patterns: [
      "Identify noun types (common vs proper, concrete vs abstract).",
      "Select correct singular/plural forms.",
      "Subject–verb agreement with collective nouns."
    ],
    examples: [
      {
        q: "Which is a proper noun?",
        choices: ["city", "teacher", "Manila", "river"],
        answer: "Manila",
        explanation: "It names a specific city and is capitalized."
      }
    ],
    quickTips: [
      "Check capitalization for proper nouns.",
      "Memorize common uncountable nouns (furniture, information, equipment)."
    ]
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
        q: "Choose the correct pronoun:",
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

    lessonTitleEl.textContent = data.title;
    lessonMetaEl.textContent = data.level;

    let html = `<div class="lesson-section"><p>${data.intro}</p></div>`;

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

  // === FIX 1: helper para tumigil ang current timer (kung meron) ===
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
        <div class="stat-item"><span>Incorrect</span><span>${quizState.incorrect}</span></div>
        <div class="stat-item"><span>Left</span><span>${
          quizState.questions.length - quizState.currentIndex
        }</span></div>
      </div>`;
  }

  function startTimer() {
    if (!quizState) return;
    // dati: if (quizState.timerId) clearInterval(quizState.timerId);
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
    // === FIX 2: puwede mag-start ng bagong quiz kahit nasa gitna ka pa ===
    // Itigil muna ang lumang timer kung may dating quiz
    stopCurrentTimer();

    const topic = practiceTopicEl.value;
    const level = practiceLevelEl.value;
    const count = parseInt(practiceCountEl.value, 10);
    const timer = timerModeEl.value;
    const weakNotes = practiceWeakEl.value.trim(); // di pa ginagamit, pero pwede sa future

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

    // === FIX 3: huwag nang i-disable ang Start at Topic ===
    // startQuizBtn.disabled = true;
    // practiceTopicEl.disabled = true;

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

      // startQuizBtn.disabled = false;
      // practiceTopicEl.disabled = false;

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

