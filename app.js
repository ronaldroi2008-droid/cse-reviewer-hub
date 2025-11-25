// ==========================================
// 1. VERBAL DATA (EXISTING)
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

// Ang iyong LESSONS object (Pinanatili ko ito, mahaba kaya 'di ko na inulit lahat dito sa preview)
// NOTE: Siguraduhin na nandito pa rin yung mahabang const LESSONS = { ... } mo.
// Kung nawala, ibalik mo galing sa previous backup mo. 
// Para sa code na ito, gagamitin natin ang variable na 'VERBAL_LESSONS' para malinaw.
// I-rename natin ang dating 'LESSONS' to 'VERBAL_LESSONS' para safe.

const VERBAL_LESSONS = {
    // ... PASTE MO DITO YUNG BUONG CONTENT NG LESSONS MO DATI ...
    // Dahil sobrang haba, assumed na nandito na ito.
    // Example:
    nouns: { title: "Nouns", fullHtml: "<p>Lesson content...</p>" },
    gender: { title: "Gender", fullHtml: "<p>Lesson content...</p>" },
    // ... at iba pa ...
};
// FALLBACK: Kung hindi mo ma-rename, okay lang, gagamit tayo ng logic later.


// ==========================================
// 2. NUMERICAL DATA (NEW)
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

// Placeholders for Numerical Lessons (Pwede mong lagyan ng laman later)
const NUMERICAL_LESSONS = {
    integers: { 
        title: "Integers & Operations", 
        fullHtml: "<p>Lesson about positive and negative numbers coming soon.</p>" 
    },
    pemdas: { 
        title: "PEMDAS", 
        fullHtml: "<p>Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction.</p>" 
    },
    // Add more here...
};


// ==========================================
// 3. APP LOGIC (UPDATED & FIXED)
// ==========================================

// Global State
let currentSubject = 'verbal'; // Default
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
  
  // Function to switch subject
  window.switchSubject = function(subject) {
      currentSubject = subject;
      
      // Update Buttons UI
      if(subject === 'verbal') {
          btnVerbal.classList.add('active');
          btnNumerical.classList.remove('active');
          subjectTitleEl.textContent = "Verbal Ability · Reviewer";
      } else {
          btnVerbal.classList.remove('active');
          btnNumerical.classList.add('active');
          subjectTitleEl.textContent = "Numerical Ability · Reviewer";
      }

      // Refresh Topics List (Study Mode)
      renderTopicsSidebar();
      
      // Refresh Dropdown (Practice Mode)
      updatePracticeDropdown();

      // Reset Lesson View
      lessonTitleEl.textContent = "Select a Topic";
      lessonMetaEl.textContent = "";
      lessonContentEl.innerHTML = "<p>Please select a topic from the sidebar to start studying.</p>";
  };

  // Helper to get current topics array
  function getCurrentTopics() {
      return currentSubject === 'verbal' ? VERBAL_TOPICS : NUMERICAL_TOPICS;
  }

  // --- 2. TAB SWITCHING (Study vs Practice) ---
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
        // Remove active class from others
        document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderLesson(t.id);
      });
      listContainer.appendChild(btn);
    });

    topicsListEl.appendChild(listContainer);
  }

  function renderLesson(topicKey) {
    // Determine which lesson object to use
    // Note: Assuming 'LESSONS' (old verbal) or 'VERBAL_LESSONS' exists
    let lessonData = null;
    
    if (currentSubject === 'verbal') {
        // Check both old 'LESSONS' variable and new 'VERBAL_LESSONS' just in case
        if (typeof VERBAL_LESSONS !== 'undefined') lessonData = VERBAL_LESSONS[topicKey];
        else if (typeof LESSONS !== 'undefined') lessonData = LESSONS[topicKey];
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

    // Render HTML content
    if (lessonData.fullHtml) {
      lessonContentEl.innerHTML = lessonData.fullHtml;
    } else {
      // Build from parts (intro, keyPoints, etc.) if fullHtml is missing
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
      
      // Select first option by default
      if (topics.length > 0) practiceTopicEl.value = topics[0].id;
  }

  // Question Bank Retriever
  function getQuestionBank(topic) {
    console.log(`Fetching questions for: ${currentSubject} - ${topic}`);
    
    // VERBAL MAPPING
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
    } 
    // NUMERICAL MAPPING
    else {
        switch (topic) {
            case "integers": return (typeof INTEGERS_QUESTIONS !== 'undefined') ? INTEGERS_QUESTIONS : null;
            case "pemdas": return (typeof PEMDAS_QUESTIONS !== 'undefined') ? PEMDAS_QUESTIONS : null;
            case "num_series": return (typeof NUMBER_SERIES_QUESTIONS !== 'undefined') ? NUMBER_SERIES_QUESTIONS : null;
            case "fractions": return (typeof FRACTIONS_QUESTIONS !== 'undefined') ? FRACTIONS_QUESTIONS : null;
            case "percent": return (typeof PERCENT_QUESTIONS !== 'undefined') ? PERCENT_QUESTIONS : null;
            case "wp_age": return (typeof WP_AGE_QUESTIONS !== 'undefined') ? WP_AGE_QUESTIONS : null;
            // Add more cases as you create more question files
            default: return null;
        }
    }
  }

  // --- 5. QUIZ EXECUTION LOGIC ---

  let quizState = null;

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
    
    // Get current question object
    let q = quizState.questions[quizState.currentIndex];

    // --- DATA NORMALIZATION (Fix for different file formats) ---
    // Analogy Format (q, a, options, exp)
    if (q.q && q.a && q.options) {
        q.question = q.q;
        q.choices = q.options;
        q.answer = q.a;
        q.explanation = q.exp;
        q.correctIndex = q.options.indexOf(q.a);
    }
    // Standard Format (question, answer, options)
    else if (q.options && q.answer && !q.choices) {
        q.choices = q.options;
        q.correctIndex = q.options.indexOf(q.answer);
    }
    
    // Safety Check for empty choices
    if (!Array.isArray(q.choices)) {
        console.error("Error: Question data is invalid", q);
        q.choices = []; 
    }
    // -----------------------------------------------------

    quizState.answered = false;
    quizProgressEl.textContent = `Question ${quizState.currentIndex + 1} of ${quizState.questions.length}`;
    updateProgressFill();

    // Display Question
    quizQuestionEl.textContent = q.question || "Question text missing";
    
    // Reset UI
    quizChoicesEl.innerHTML = "";
    quizExplanationEl.classList.add("hide");
    quizNextBtn.classList.add("hide");

    // Create Choices
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
    // Highlight correct answer
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

    // 1. Get Questions
    const bank = getQuestionBank(topic);
    
    if (!bank) {
      alert("Questions for this topic are not yet available or the file is not loaded.");
      return;
    }

    // 2. Filter by Level (if applicable) or use all
    let pool = [];
    
    // Check if bank is an Array (Simple format) or Object (Level format)
    if (Array.isArray(bank)) {
        pool = bank; // Just use the whole array
    } else if (bank[level]) {
        pool = bank[level]; // Use specific level
    } else {
        // Fallback: Combine all levels if specific level not found
        Object.values(bank).forEach(arr => {
            if(Array.isArray(arr)) pool = pool.concat(arr);
        });
    }
    
    if (!pool || pool.length === 0) {
      alert(`No questions found for this topic/level.`);
      return;
    }

    // 3. Shuffle and Slice
    const selectedQuestions = shuffleArray(pool).slice(0, count);

    // 4. Init Quiz State
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

    // 5. Start
    showQuestion();
  });

  quizNextBtn.addEventListener("click", () => {
    if (!quizState) return;

    if (quizState.currentIndex < quizState.questions.length - 1) {
      quizState.currentIndex++;
      showQuestion();
    } else {
      // FINISH QUIZ
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
      restartBtn.className = "btn-primary"; // Styled button
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
  // Default to Verbal
  window.switchSubject('verbal');
});
