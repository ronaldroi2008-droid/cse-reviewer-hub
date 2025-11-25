// ==========================================
// 1. VERBAL TOPICS LIST
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
  { id: "words_often_confused",   label: "Words Often Confused" },
  { id: "error_identification",   label: "Error Identification" },
  { id: "synonyms",               label: "Synonyms" },
  { id: "antonyms",               label: "Antonyms" },
  { id: "analogy",                label: "Analogy" },
  { id: "paragraph_organization", label: "Paragraph Organization" },
  { id: "reading_comprehension",  label: "Reading Comprehension" }
];

// ==========================================
// 2. VERBAL LESSONS CONTENT (FULL)
// ==========================================
const VERBAL_LESSONS = {
  nouns: {
    title: "Nouns – Names of People, Places, Things",
    fullHtml: `
      <section class="lesson-section">
        <h2>1. The Anatomy of a Noun</h2>
        <p>A noun names a person, place, thing, idea, or event. But deeper than that, nouns have <strong>Properties</strong> that determine how they fit in a sentence.</p>
        <div class="highlight-box">
          <p><strong>The 4 Properties of Nouns:</strong></p>
          <ul>
            <li><strong>Gender:</strong> Masculine, Feminine, Common, Neuter.</li>
            <li><strong>Number:</strong> Singular vs. Plural.</li>
            <li><strong>Case:</strong> Subjective, Objective, Possessive.</li>
            <li><strong>Person:</strong> First, Second, or Third person.</li>
          </ul>
        </div>
      </section>
      <section class="lesson-section">
        <h2>2. Deep Dive: Count vs. Mass Nouns</h2>
        <p>Some nouns change meaning depending on whether they are countable or uncountable.</p>
        <table class="lesson-table">
          <thead><tr><th>Word</th><th>As Mass Noun</th><th>As Count Noun</th></tr></thead>
          <tbody>
            <tr><td>Paper</td><td>Material to write on.</td><td>Documents.</td></tr>
            <tr><td>Hair</td><td>All hair on head.</td><td>Individual strands.</td></tr>
            <tr><td>Glass</td><td>The material.</td><td>Drinking vessels.</td></tr>
          </tbody>
        </table>
      </section>
      <section class="lesson-section">
        <h2>3. Advanced Pluralization</h2>
        <p><strong>Compound Nouns:</strong> Pluralize the "Head Word". (e.g., <em>Mothers</em>-in-law, <em>Passers</em>-by).</p>
        <p><strong>Foreign Plurals:</strong> Datum -> Data, Crisis -> Crises, Phenomenon -> Phenomena.</p>
      </section>
    `
  },

  gender: {
    title: "Gender of Nouns",
    fullHtml: `
      <section class="lesson-section">
        <h2>Gender Categories</h2>
        <ul>
            <li><strong>Masculine:</strong> King, Uncle, Rooster, Bull.</li>
            <li><strong>Feminine:</strong> Queen, Aunt, Hen, Cow.</li>
            <li><strong>Common:</strong> Teacher, Doctor, Student, Cousin (Can be either).</li>
            <li><strong>Neuter:</strong> Table, Phone, Idea, City (No gender).</li>
        </ul>
        <p><strong>Note:</strong> In modern formal English, we often use "they/their" as a singular pronoun for Common gender nouns to avoid "he/she".</p>
      </section>
    `
  },

  grammatical_number: {
    title: "Grammatical Number",
    fullHtml: `
      <section class="lesson-section">
        <h2>Singular vs. Plural Rules</h2>
        <p>Most nouns add <strong>-s</strong> or <strong>-es</strong>. But watch out for these:</p>
        <ul>
            <li><strong>-y to -ies:</strong> Baby -> Babies (But: Toy -> Toys).</li>
            <li><strong>-f to -ves:</strong> Leaf -> Leaves, Knife -> Knives (But: Roof -> Roofs).</li>
            <li><strong>Irregular:</strong> Man -> Men, Child -> Children, Tooth -> Teeth, Mouse -> Mice.</li>
            <li><strong>No Change:</strong> Sheep, Deer, Salmon, Aircraft, Series, Species.</li>
        </ul>
      </section>
    `
  },

  verbs: {
    title: "Verbs – Action and State",
    fullHtml: `
      <section class="lesson-section">
        <h2>The Engine of the Sentence</h2>
        <p>Verbs express action or state of being.</p>
        <h3>Types of Verbs</h3>
        <ul>
            <li><strong>Action Verbs:</strong> Run, Eat, Think, Study.</li>
            <li><strong>Linking Verbs:</strong> Connect subject to description (Am, Is, Are, Was, Were, Seems, Feels).</li>
            <li><strong>Helping (Auxiliary) Verbs:</strong> Help form tenses (Have, Has, Had, Do, Does, Did, Will).</li>
        </ul>
        <h3>Transitive vs. Intransitive</h3>
        <p><strong>Transitive:</strong> Needs a direct object (e.g., "She <em>wrote</em> a letter.").</p>
        <p><strong>Intransitive:</strong> No direct object needed (e.g., "The baby <em>cried</em>.").</p>
      </section>
    `
  },

  tenses: {
    title: "Tenses of Verbs",
    fullHtml: `
      <section class="lesson-section">
        <h2>Time and Aspect</h2>
        <table class="lesson-table">
            <tr><th>Tense</th><th>Usage</th><th>Example</th></tr>
            <tr><td>Simple Present</td><td>Habit / Fact</td><td>She walks.</td></tr>
            <tr><td>Simple Past</td><td>Completed</td><td>She walked.</td></tr>
            <tr><td>Simple Future</td><td>Will happen</td><td>She will walk.</td></tr>
            <tr><td>Present Perfect</td><td>Started past, relevant now</td><td>She has walked.</td></tr>
            <tr><td>Past Perfect</td><td>Action before another past action</td><td>She had walked before...</td></tr>
        </table>
        <p><strong>Exam Tip:</strong> Watch out for time markers like "since", "for", "yesterday", "already".</p>
      </section>
    `
  },

  pronouns: {
    title: "Pronouns",
    fullHtml: `
      <section class="lesson-section">
        <h2>Cases of Pronouns</h2>
        <ul>
            <li><strong>Subjective (Doer):</strong> I, He, She, We, They, Who.</li>
            <li><strong>Objective (Receiver):</strong> Me, Him, Her, Us, Them, Whom.</li>
            <li><strong>Possessive:</strong> My, Mine, His, Hers, Theirs.</li>
        </ul>
        <h3>The Preposition Rule</h3>
        <p>ALWAYS use the Objective case after a preposition.</p>
        <p>✅ <em>Between you and <strong>me</strong>.</em></p>
        <p>❌ <em>Between you and <strong>I</strong>.</em></p>
      </section>
    `
  },

  adjectives: {
    title: "Adjectives",
    fullHtml: `
      <section class="lesson-section">
        <h2>Describing Nouns</h2>
        <p>Adjectives modify nouns or pronouns. They answer: What kind? Which one? How many?</p>
        <h3>Order of Adjectives</h3>
        <p><strong>O-S-A-S-C-O-M-P</strong></p>
        <ol>
            <li>Opinion (Beautiful)</li>
            <li>Size (Small)</li>
            <li>Age (Old)</li>
            <li>Shape (Round)</li>
            <li>Color (Red)</li>
            <li>Origin (Filipino)</li>
            <li>Material (Wooden)</li>
            <li>Purpose (Dining)</li>
        </ol>
        <p><em>Example: A beautiful small old wooden table.</em></p>
      </section>
    `
  },

  adverbs: {
    title: "Adverbs",
    fullHtml: `
      <section class="lesson-section">
        <h2>Modifying Verbs, Adjectives, Adverbs</h2>
        <p>Adverbs usually answer: How? When? Where? To what extent?</p>
        <ul>
            <li><strong>Manner:</strong> Slowly, Carefully (He runs <em>fast</em>).</li>
            <li><strong>Time:</strong> Yesterday, Now, Soon.</li>
            <li><strong>Place:</strong> Here, There, Everywhere.</li>
            <li><strong>Frequency:</strong> Always, Never, Often.</li>
        </ul>
        <p><strong>Warning:</strong> Not all words ending in -ly are adverbs (e.g., Friendly, Lonely are adjectives).</p>
      </section>
    `
  },

  prepositions: {
    title: "Prepositions",
    fullHtml: `
      <section class="lesson-section">
        <h2>Time and Place</h2>
        <h3>The Big Three: IN, ON, AT</h3>
        <table class="lesson-table">
            <tr><th>Prep</th><th>Time</th><th>Place</th></tr>
            <tr><td><strong>AT</strong></td><td>Specific Time (at 5 PM)</td><td>Specific Point (at the door)</td></tr>
            <tr><td><strong>ON</strong></td><td>Days/Dates (on Monday)</td><td>Surfaces (on the table)</td></tr>
            <tr><td><strong>IN</strong></td><td>Months/Years (in 2024)</td><td>Enclosed/General (in the box, in Manila)</td></tr>
        </table>
      </section>
    `
  },

  conjunctions: {
    title: "Conjunctions",
    fullHtml: `
      <section class="lesson-section">
        <h2>Connecting Ideas</h2>
        <h3>Coordinating (FANBOYS)</h3>
        <p>For, And, Nor, But, Or, Yet, So. Use a comma if connecting two complete sentences.</p>
        <h3>Subordinating</h3>
        <p>Connects a dependent clause to a main clause: <em>Because, Although, If, When, Since, Unless.</em></p>
        <h3>Correlative</h3>
        <p>Pairs: <em>Either...or, Neither...nor, Not only...but also.</em> (Must be parallel!)</p>
      </section>
    `
  },

  interjections: {
    title: "Interjections",
    fullHtml: `
      <section class="lesson-section">
        <h2>Expressing Emotion</h2>
        <p>Words used to express strong feeling or sudden emotion.</p>
        <ul>
            <li><em>Wow!</em> (Amazement)</li>
            <li><em>Ouch!</em> (Pain)</li>
            <li><em>Hey,</em> (Attention)</li>
        </ul>
        <p>They are not grammatically related to the rest of the sentence.</p>
      </section>
    `
  },

  articles: {
    title: "Articles (A, An, The)",
    fullHtml: `
      <section class="lesson-section">
        <h2>Determiners</h2>
        <ul>
            <li><strong>A:</strong> Before consonant sounds (A car, A university).</li>
            <li><strong>AN:</strong> Before vowel sounds (An apple, An hour, An MP3).</li>
            <li><strong>THE:</strong> Specific or unique nouns (The sun, The Philippines).</li>
        </ul>
        <p><strong>Zero Article:</strong> General plural nouns (Dogs are loyal) or Uncountable nouns (Water is essential).</p>
      </section>
    `
  },

  subject_verb_agreement: {
    title: "Subject-Verb Agreement",
    fullHtml: `
      <section class="lesson-section">
        <h2>The Golden Rules</h2>
        <ol>
            <li>Singular Subject takes Singular Verb (ends in -s). <em>The boy runs.</em></li>
            <li>Plural Subject takes Plural Verb (no -s). <em>The boys run.</em></li>
            <li><strong>Intervening Phrases:</strong> Ignore words between subject and verb. <em>The box [of chocolates] <strong>is</strong> heavy.</em></li>
            <li><strong>Indefinite Pronouns:</strong> <em>Each, Every, Everyone, Everybody</em> are ALWAYS SINGULAR.</li>
            <li><strong>Compound Subjects:</strong> "And" usually makes it plural. "Or/Nor" follows the subject closest to the verb.</li>
        </ol>
      </section>
    `
  },

  sentence_construction: {
    title: "Sentence Construction",
    fullHtml: `
      <section class="lesson-section">
        <h2>Building Better Sentences</h2>
        <p><strong>Fragments:</strong> Incomplete thoughts. (e.g., "Because he was tired.")</p>
        <p><strong>Run-ons:</strong> Two sentences joined without punctuation.</p>
        <p><strong>Parallelism:</strong> Items in a list must have the same form.</p>
        <ul>
            <li>❌ <em>She likes swimming, hiking, and to run.</em></li>
            <li>✅ <em>She likes swimming, hiking, and running.</em></li>
        </ul>
      </section>
    `
  },

  sentence_structure: {
    title: "Sentence Structure",
    fullHtml: `
      <section class="lesson-section">
        <h2>Types of Sentences</h2>
        <ul>
            <li><strong>Simple:</strong> One independent clause. <em>(I study.)</em></li>
            <li><strong>Compound:</strong> Two independent clauses + FANBOYS. <em>(I study, and I learn.)</em></li>
            <li><strong>Complex:</strong> Independent + Dependent clause. <em>(I study because I want to pass.)</em></li>
            <li><strong>Compound-Complex:</strong> Two Independent + One Dependent.</li>
        </ul>
      </section>
    `
  },

  affixes: {
    title: "Affixes (Prefixes & Suffixes)",
    fullHtml: `
      <section class="lesson-section">
        <h2>Word Building</h2>
        <h3>Prefixes (Start)</h3>
        <ul>
            <li><strong>Un-, Dis-, In-:</strong> Not / Opposite (Unhappy, Disagree).</li>
            <li><strong>Re-:</strong> Again (Rewrite).</li>
            <li><strong>Pre-:</strong> Before (Preview).</li>
        </ul>
        <h3>Suffixes (End)</h3>
        <ul>
            <li><strong>-er, -or:</strong> Person (Teacher, Actor).</li>
            <li><strong>-tion, -ment:</strong> Noun (Action, Movement).</li>
            <li><strong>-ful, -ous:</strong> Adjective (Joyful, Famous).</li>
            <li><strong>-ly:</strong> Adverb (Quickly).</li>
        </ul>
      </section>
    `
  },

  punctuations: {
    title: "Punctuations",
    fullHtml: `
      <section class="lesson-section">
        <h2>Marks of Clarity</h2>
        <ul>
            <li><strong>Comma (,):</strong> Pauses, lists, compound sentences.</li>
            <li><strong>Semicolon (;):</strong> Connects related sentences; stronger than comma.</li>
            <li><strong>Colon (:):</strong> Introduces a list or explanation.</li>
            <li><strong>Apostrophe ('):</strong> Possession (John's) or Contraction (Don't).</li>
        </ul>
      </section>
    `
  },

  words_often_confused: {
    title: "Words Often Confused",
    fullHtml: `
      <section class="lesson-section">
        <h2>Look-Alikes</h2>
        <ul>
            <li><strong>Accept</strong> (receive) vs <strong>Except</strong> (exclude).</li>
            <li><strong>Affect</strong> (verb - action) vs <strong>Effect</strong> (noun - result).</li>
            <li><strong>Its</strong> (possessive) vs <strong>It's</strong> (it is).</li>
            <li><strong>Their</strong> (possessive) vs <strong>There</strong> (place) vs <strong>They're</strong> (they are).</li>
            <li><strong>Advice</strong> (noun) vs <strong>Advise</strong> (verb).</li>
        </ul>
      </section>
    `
  },

  error_identification: {
    title: "Error Identification",
    fullHtml: `
      <section class="lesson-section">
        <h2>Spotting Mistakes</h2>
        <p>Common errors in exams:</p>
        <ol>
            <li><strong>Subject-Verb Agreement:</strong> Singular vs Plural mismatch.</li>
            <li><strong>Pronoun Agreement:</strong> "Everyone... their" (Strict grammar: his/her).</li>
            <li><strong>Redundancy:</strong> "Return back", "Repeat again".</li>
            <li><strong>Double Negatives:</strong> "Doesn't know nothing".</li>
            <li><strong>Wrong Preposition:</strong> "Married with" (Should be "to").</li>
        </ol>
      </section>
    `
  },

  synonyms: {
    title: "Synonyms",
    fullHtml: `
      <section class="lesson-section">
        <h2>Similar Meanings</h2>
        <p>Words that mean the same or nearly the same.</p>
        <ul>
            <li><strong>Important:</strong> Crucial, Vital, Essential.</li>
            <li><strong>Happy:</strong> Elated, Joyful, Content.</li>
            <li><strong>Strong:</strong> Robust, Sturdy, Potent.</li>
            <li><strong>Change:</strong> Alter, Modify, Transform.</li>
        </ul>
        <p><strong>Tip:</strong> Look at context. "Thin" is neutral, "Slim" is positive, "Skinny" is negative.</p>
      </section>
    `
  },

  antonyms: {
    title: "Antonyms",
    fullHtml: `
      <section class="lesson-section">
        <h2>Opposite Meanings</h2>
        <ul>
            <li><strong>Benevolent</strong> (Kind) ≠ <strong>Malevolent</strong> (Evil).</li>
            <li><strong>Genuine</strong> (Real) ≠ <strong>Artificial</strong> (Fake).</li>
            <li><strong>Expand</strong> ≠ <strong>Contract</strong>.</li>
            <li><strong>Obscure</strong> (Hidden) ≠ <strong>Clear</strong>.</li>
        </ul>
        <p><strong>Prefixes for Antonyms:</strong> Un-, Dis-, In-, Im-, Ir-, Non-.</p>
      </section>
    `
  },

  analogy: {
    title: "Analogy",
    fullHtml: `
      <section class="lesson-section">
        <h2>Word Relationships</h2>
        <p><strong>A : B :: C : D</strong> (A is to B as C is to D)</p>
        <h3>Common Relationships:</h3>
        <ul>
            <li><strong>Worker & Tool:</strong> Carpenter : Saw.</li>
            <li><strong>Part & Whole:</strong> Finger : Hand.</li>
            <li><strong>Synonyms:</strong> Big : Huge.</li>
            <li><strong>Antonyms:</strong> Hot : Cold.</li>
            <li><strong>Cause & Effect:</strong> Virus : Illness.</li>
        </ul>
        <p><strong>Tip:</strong> Make a "Bridge Sentence". (A carpenter uses a saw. A painter uses a brush.)</p>
      </section>
    `
  },

  paragraph_organization: {
    title: "Paragraph Organization",
    fullHtml: `
      <section class="lesson-section">
        <h2>Arranging Sentences</h2>
        <p>Task: Arrange jumbled sentences to form a logical paragraph.</p>
        <h3>Strategies:</h3>
        <ol>
            <li><strong>Find the Topic Sentence:</strong> It stands alone. Usually introduces the subject fully (names, not just "he/she").</li>
            <li><strong>Look for Signal Words:</strong> First, Next, However, Therefore, Finally.</li>
            <li><strong>General to Specific:</strong> Broad idea first, details later.</li>
            <li><strong>Noun before Pronoun:</strong> "Dr. Jose Rizal..." comes before "He...".</li>
        </ol>
      </section>
    `
  },

  reading_comprehension: {
    title: "Reading Comprehension",
    fullHtml: `
      <section class="lesson-section">
        <h2>Understanding Text</h2>
        <p><strong>Golden Rule:</strong> If it's not in the text, it's not the answer.</p>
        <h3>Question Types:</h3>
        <ul>
            <li><strong>Main Idea:</strong> Check first and last sentences.</li>
            <li><strong>Specific Details:</strong> Scan keywords.</li>
            <li><strong>Vocabulary in Context:</strong> Guess meaning from surrounding words.</li>
            <li><strong>Inference:</strong> Logical conclusion based on evidence (not opinion).</li>
        </ul>
      </section>
    `
  }
};

// ==========================================
// 3. NUMERICAL DATA
// ==========================================
const NUMERICAL_TOPICS = [
    { id: 'integers', label: 'Integers & Operations' },
    { id: 'pemdas', label: 'PEMDAS / MDAS' },
    { id: 'fractions', label: 'Fractions & Decimals' },
    { id: 'percent', label: 'Percentage, Rate, Base' },
    { id: 'ratio', label: 'Ratio & Proportion' },
    { id: 'num_series', label: 'Number Series' },
    { id: 'wp_age', label: 'Word Problems: Age' },
    { id: 'wp_work', label: 'Word Problems: Work' },
    { id: 'wp_distance', label: 'Word Problems: Distance' }
];

// Numerical Lessons Placeholder
const NUMERICAL_LESSONS = {
    integers: { 
        title: "Integers & Operations", 
        fullHtml: "<p>Lesson about positive and negative numbers coming soon.</p>" 
    },
    pemdas: { 
        title: "PEMDAS", 
        fullHtml: "<p>Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction.</p>" 
    }
};

// ==========================================
// 4. APP LOGIC (CORE)
// ==========================================

let currentSubject = 'verbal'; 
let currentActiveTopicId = null;
let quizState = null;

document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const modeTabs = document.querySelectorAll(".mode-tab");
  const modeSections = document.querySelectorAll(".mode-section");

  // Header Elements
  const subjectTitleEl = document.getElementById("current-subject-title");
  const btnVerbal = document.getElementById("btn-verbal");
  const btnNumerical = document.getElementById("btn-numerical");

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

  // --- 1. SUBJECT SWITCHING LOGIC ---
  
  window.switchSubject = function(subject) {
      currentSubject = subject;
      
      if(subject === 'verbal') {
          btnVerbal.classList.add('active');
          btnNumerical.classList.remove('active');
          subjectTitleEl.textContent = "Verbal Ability · Reviewer";
      } else {
          btnVerbal.classList.remove('active');
          btnNumerical.classList.add('active');
          subjectTitleEl.textContent = "Numerical Ability · Reviewer";
      }

      renderTopicsSidebar();
      updatePracticeDropdown();

      lessonTitleEl.textContent = "Select a Topic";
      lessonMetaEl.textContent = "";
      lessonContentEl.innerHTML = "<p>Please select a topic from the sidebar to start studying.</p>";
  };

  function getCurrentTopics() {
      return currentSubject === 'verbal' ? VERBAL_TOPICS : NUMERICAL_TOPICS;
  }

  // --- 2. TAB SWITCHING ---
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

  // --- 3. STUDY MODE LOGIC ---
  function renderTopicsSidebar() {
    if (!topicsListEl) return;
    topicsListEl.innerHTML = "";

    const topics = getCurrentTopics();

    const groupTitle = document.createElement("div");
    groupTitle.className = "topic-group-title";
    groupTitle.textContent = currentSubject === 'verbal' ? "Verbal Topics" : "Math Topics";
    topicsListEl.appendChild(groupTitle);

    const listContainer = document.createElement("div");
    listContainer.className = "topic-list";

    topics.forEach((t) => {
      const btn = document.createElement("button");
      btn.className = "topic-btn";
      btn.textContent = t.label;
      btn.dataset.topic = t.id;
      btn.addEventListener("click", () => {
        document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderLesson(t.id);
      });
      listContainer.appendChild(btn);
    });

    topicsListEl.appendChild(listContainer);
  }

  function renderLesson(topicKey) {
    let lessonData = null;
    
    if (currentSubject === 'verbal') {
        if (typeof VERBAL_LESSONS !== 'undefined') lessonData = VERBAL_LESSONS[topicKey];
    } else {
        lessonData = NUMERICAL_LESSONS[topicKey];
    }

    if (!lessonData) {
      lessonTitleEl.textContent = topicKey.toUpperCase();
      lessonMetaEl.textContent = currentSubject.toUpperCase();
      lessonContentEl.innerHTML = '<p><em>Lesson content is under development. Please try the Practice Quiz.</em></p>';
      return;
    }

    lessonTitleEl.textContent = lessonData.title || topicKey;
    lessonMetaEl.textContent = `${currentSubject.toUpperCase()} · ${lessonData.level || 'Review'}`;

    if (lessonData.fullHtml) {
      lessonContentEl.innerHTML = lessonData.fullHtml;
    } else {
      let html = "";
      if (lessonData.intro) html += `<div class="lesson-section"><p>${lessonData.intro}</p></div>`;
      if (lessonData.keyPoints) {
          html += `<div class="lesson-section"><h3>Key Points</h3><ul>${lessonData.keyPoints.map(k => `<li>${k}</li>`).join('')}</ul></div>`;
      }
      lessonContentEl.innerHTML = html;
    }
  }

  // --- 4. PRACTICE MODE LOGIC ---

  function updatePracticeDropdown() {
      if (!practiceTopicEl) return;
      practiceTopicEl.innerHTML = "";
      
      const topics = getCurrentTopics();
      topics.forEach((topic) => {
        const opt = document.createElement("option");
        opt.value = topic.id;
        opt.textContent = topic.label;
        practiceTopicEl.appendChild(opt);
      });
      
      if (topics.length > 0) practiceTopicEl.value = topics[0].id;
  }

  function getQuestionBank(topic) {
    if (currentSubject === 'verbal') {
        switch (topic) {
            case "nouns": return (typeof NOUN_QUESTIONS !== 'undefined') ? NOUN_QUESTIONS : null;
            case "gender": return (typeof GENDER_QUESTIONS !== 'undefined') ? GENDER_QUESTIONS : null;
            case "grammatical_number": return (typeof GRAMMATICAL_NUMBER_QUESTIONS !== 'undefined') ? GRAMMATICAL_NUMBER_QUESTIONS : null;
            case "verbs": return (typeof VERB_QUESTIONS !== 'undefined') ? VERB_QUESTIONS : null;
            case "tenses": return (typeof TENSE_QUESTIONS !== 'undefined') ? TENSE_QUESTIONS : null;
            case "pronouns": return (typeof PRONOUN_QUESTIONS !== 'undefined') ? PRONOUN_QUESTIONS : null;
            case "adjectives": return (typeof ADJECTIVE_QUESTIONS !== 'undefined') ? ADJECTIVE_QUESTIONS : null;
            case "adverbs": return (typeof ADVERB_QUESTIONS !== 'undefined') ? ADVERB_QUESTIONS : null;
            case "prepositions": return (typeof PREPOSITION_QUESTIONS !== 'undefined') ? PREPOSITION_QUESTIONS : null;
            case "conjunctions": return (typeof CONJUNCTION_QUESTIONS !== 'undefined') ? CONJUNCTION_QUESTIONS : null;
            case "interjections": return (typeof INTERJECTION_QUESTIONS !== 'undefined') ? INTERJECTION_QUESTIONS : null;
            case "articles": return (typeof ARTICLE_QUESTIONS !== 'undefined') ? ARTICLE_QUESTIONS : null;
            case "subject_verb_agreement": return (typeof SUBJECT_VERB_AGREEMENT_QUESTIONS !== 'undefined') ? SUBJECT_VERB_AGREEMENT_QUESTIONS : null;
            case "sentence_construction": return (typeof SENTENCE_CONSTRUCTION_QUESTIONS !== 'undefined') ? SENTENCE_CONSTRUCTION_QUESTIONS : null;
            case "sentence_structure": return (typeof SENTENCE_STRUCTURE_QUESTIONS !== 'undefined') ? SENTENCE_STRUCTURE_QUESTIONS : null;
            case "error_identification": return (typeof ERROR_IDENTIFICATION_QUESTIONS !== 'undefined') ? ERROR_IDENTIFICATION_QUESTIONS : null;
            case "affixes": return (typeof AFFIXES_QUESTIONS !== 'undefined') ? AFFIXES_QUESTIONS : null;
            case "synonyms": return (typeof SYNONYMS_QUESTIONS !== 'undefined') ? SYNONYMS_QUESTIONS : null;
            case "antonyms": return (typeof ANTONYMS_QUESTIONS !== 'undefined') ? ANTONYMS_QUESTIONS : null;
            case "analogy": return (typeof ANALOGY_QUESTIONS !== 'undefined') ? ANALOGY_QUESTIONS : null;
            case "punctuations": return (typeof PUNCTUATIONS_QUESTIONS !== 'undefined') ? PUNCTUATIONS_QUESTIONS : null;
            case "words_often_confused": return (typeof WORDS_OFTEN_CONFUSED_QUESTIONS !== 'undefined') ? WORDS_OFTEN_CONFUSED_QUESTIONS : null;
            case "paragraph_organization": return (typeof PARAGRAPH_ORGANIZATION_QUESTIONS !== 'undefined') ? PARAGRAPH_ORGANIZATION_QUESTIONS : null;
            case "reading_comprehension": return (typeof READING_COMPREHENSION_QUESTIONS !== 'undefined') ? READING_COMPREHENSION_QUESTIONS : null;
            default: return null;
        }
    } else {
        switch (topic) {
            case "integers": return (typeof INTEGERS_QUESTIONS !== 'undefined') ? INTEGERS_QUESTIONS : null;
            case "pemdas": return (typeof PEMDAS_QUESTIONS !== 'undefined') ? PEMDAS_QUESTIONS : null;
            case "num_series": return (typeof NUMBER_SERIES_QUESTIONS !== 'undefined') ? NUMBER_SERIES_QUESTIONS : null;
            case "fractions": return (typeof FRACTIONS_QUESTIONS !== 'undefined') ? FRACTIONS_QUESTIONS : null;
            case "percent": return (typeof PERCENT_QUESTIONS !== 'undefined') ? PERCENT_QUESTIONS : null;
            case "wp_age": return (typeof WP_AGE_QUESTIONS !== 'undefined') ? WP_AGE_QUESTIONS : null;
            case "wp_work": return (typeof WP_WORK_QUESTIONS !== 'undefined') ? WP_WORK_QUESTIONS : null;
            default: return null;
        }
    }
  }

  // --- 5. QUIZ LOGIC ---

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
    quizProgressFillEl.style.width = `${Math.max(0, Math.min(100, pct || 0))}%`;
  }

  function updateStats() {
    if (!quizState || !quizState.questions) return;
    const total = quizState.questions.length;
    const answered = quizState.correct + quizState.incorrect;
    const left = total - answered;
    quizOutputEl.innerHTML = `
      <div class="stats-panel">
        <div class="stat-item"><span>Correct</span><span>${quizState.correct}</span></div>
        <div class="stat-item"><span>Incorrect</span><span>${quizState.incorrect}</span></div>
        <div class="stat-item"><span>Left</span><span>${left}</span></div>
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
    
    let q = quizState.questions[quizState.currentIndex];

    // --- DATA NORMALIZATION ---
    if (q.q && q.a && q.options) {
        q.question = q.q;
        q.choices = q.options;
        q.answer = q.a;
        q.explanation = q.exp;
        q.correctIndex = q.options.indexOf(q.a);
    }
    else if (q.options && q.answer && !q.choices) {
        q.choices = q.options;
        q.correctIndex = q.options.indexOf(q.answer);
    }
    
    if (!Array.isArray(q.choices)) {
        console.error("Error: Question data is invalid", q);
        q.choices = []; 
    }

    quizState.answered = false;
    quizProgressEl.textContent = `Question ${quizState.currentIndex + 1} of ${quizState.questions.length}`;
    updateProgressFill();

    quizQuestionEl.textContent = q.question || "Question text missing";
    
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
    const isCorrect = idx === q.correctIndex;

    if (isCorrect) {
      quizState.correct++;
      btns[idx].classList.add("correct");
    } else {
      quizState.incorrect++;
      btns[idx].classList.add("incorrect");
      if (btns[q.correctIndex]) {
        btns[q.correctIndex].classList.add("correct");
      }
      if (!Array.isArray(quizState.wrongAnswers)) {
        quizState.wrongAnswers = [];
      }
      quizState.wrongAnswers.push({
        question: q.question,
        yourAnswer: q.choices[idx],
        correctAnswer: q.choices[q.correctIndex],
        explanation: q.explanation
      });
    }

    quizExplanationEl.textContent = q.explanation || "No explanation available.";
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

    if (!Array.isArray(quizState.wrongAnswers)) {
      quizState.wrongAnswers = [];
    }
    quizState.wrongAnswers.push({
      question: q.question,
      yourAnswer: "(Time's up)",
      correctAnswer: q.choices[q.correctIndex],
      explanation: q.explanation
    });

    quizExplanationEl.textContent = "Time's up! " + (q.explanation || "");
    quizExplanationEl.classList.remove("hide");

    quizNextBtn.textContent =
      quizState.currentIndex < quizState.questions.length - 1
        ? "Next Question"
        : "See Results";
    quizNextBtn.classList.remove("hide");
    updateStats();
  }

  startQuizBtn.addEventListener("click", () => {
    stopCurrentTimer();
    const topic = practiceTopicEl.value;
    const level = practiceLevelEl.value;
    const count = parseInt(practiceCountEl.value, 10);
    const timer = timerModeEl.value;
    const weakNotes = practiceWeakEl.value.trim();

    const bank = getQuestionBank(topic);
    
    if (!bank) {
      alert("Questions for this topic are not yet available or the file is not loaded.");
      return;
    }

    let pool = [];
    
    if (Array.isArray(bank)) {
        pool = bank; 
    } else if (bank[level]) {
        pool = bank[level]; 
    } else {
        Object.values(bank).forEach(arr => {
            if(Array.isArray(arr)) pool = pool.concat(arr);
        });
    }
    
    if (!pool || pool.length === 0) {
      alert(`No questions found for this topic/level.`);
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
      weakNotes,
      wrongAnswers: []
    };

    showQuestion();
  });

  quizNextBtn.addEventListener("click", () => {
    if (!quizState) return;

    if (quizState.currentIndex < quizState.questions.length - 1) {
      quizState.currentIndex++;
      showQuestion();
    } else {
      stopCurrentTimer();
      updateProgressFill(100);

      const total = quizState.questions.length;
      const correct = quizState.correct;
      const incorrect = quizState.incorrect;
      const left = total - (correct + incorrect);
      const wrongItems = Array.isArray(quizState.wrongAnswers) ? quizState.wrongAnswers : [];

      let summaryHtml = `
        <div class="result-card">
          <h2>Quiz Complete!</h2>
          <p class="result-score">Score: <strong>${correct} / ${total}</strong></p>
          <div class="stat-grid">
            <div class="stat"><div class="stat-label">Correct</div><div class="stat-value success">${correct}</div></div>
            <div class="stat"><div class="stat-label">Incorrect</div><div class="stat-value danger">${incorrect}</div></div>
            <div class="stat"><div class="stat-label">Left</div><div class="stat-value">${left}</div></div>
          </div>
        </div>
      `;

      if (wrongItems.length > 0) {
        summaryHtml += `
          <div class="weakpoints-card">
            <h3>Review Wrong Answers</h3>
            <ol class="weakpoints-list">
              ${wrongItems.map((item, idx) => `
                <li class="weakpoint-item">
                  <p class="wp-question"><strong>Q.</strong> ${item.question}</p>
                  <p class="wp-your-answer"><span class="wp-label">You:</span> <span class="wp-bad">${item.yourAnswer}</span></p>
                  <p class="wp-correct-answer"><span class="wp-label">Correct:</span> <span class="wp-good">${item.correctAnswer}</span></p>
                  <p class="wp-explanation">${item.explanation || ''}</p>
                </li>
              `).join("")}
            </ol>
          </div>
        `;
      } else {
        summaryHtml += `<div class="weakpoints-card"><h3>Perfect! 🎉</h3><p class="muted">Great job.</p></div>`;
      }

      quizQuestionEl.innerHTML = summaryHtml;
      quizChoicesEl.innerHTML = "";
      quizExplanationEl.classList.add("hide");
      quizNextBtn.classList.add("hide");

      const restartBtn = document.createElement("button");
      restartBtn.className = "btn-primary";
      restartBtn.style.marginTop = "20px";
      restartBtn.style.width = "100%";
      restartBtn.textContent = "Take Another Quiz";
      restartBtn.onclick = () => {
        quizState = null;
        quizQuestionEl.textContent = "Ready when you are. Set up your quiz on the left.";
        restartBtn.remove();
        quizOutputEl.innerHTML = `<div class="stats-panel"><div class="stat-item"><span>Correct</span><span>0</span></div><div class="stat-item"><span>Incorrect</span><span>0</span></div></div>`;
        updateProgressFill(0);
      };
      quizChoicesEl.appendChild(restartBtn);
    }
  });

  // --- INITIALIZATION ---
  window.switchSubject('verbal');
});
