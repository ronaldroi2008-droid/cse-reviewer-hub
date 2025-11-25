
const TOPIC_MAX_QUESTIONS = {
  nouns: 50,
  gender: 50,
  grammatical_number: 50,
  verbs: 50,
  adjectives: 50,
  conjunctions: 50,
  interjections: 50,
  articles: 50,
  subject_verb_agreement: 50,
  sentence_construction: 50,
  sentence_structure: 50,
  error_identification: 50,
  affixes: 50,
  punctuations: 50,
  synonyms: 50,
  antonyms:50,
  analogy: 50,
  words_often_confused: 50,
  paragraph_organization: 50,
  reading_comprehension: 50,
  prepositions: 50
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

    // SPECIAL CASE: kung may fullHtml
    if (data.fullHtml) {
      lessonContentEl.innerHTML = data.fullHtml;
      return;
    }

    // Default path
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

 function getQuestionBank(topic) {
  console.log("Loading question bank for topic:", topic);
  
  switch (topic) {
    case "nouns": 
      // Check both possible variable names
      if (typeof NOUNS_QUESTIONS !== 'undefined') return NOUNS_QUESTIONS;
      if (typeof NOUN_QUESTIONS !== 'undefined') return NOUN_QUESTIONS;
      return null;
    
    case "gender": 
      if (typeof GENDER_NOUNS_QUESTIONS !== 'undefined') return GENDER_NOUNS_QUESTIONS;
      if (typeof GENDER_QUESTIONS !== 'undefined') return GENDER_QUESTIONS;
      return null;
    
    case "grammatical_number": 
      return typeof GRAMMATICAL_NUMBER_QUESTIONS !== 'undefined' ? GRAMMATICAL_NUMBER_QUESTIONS : null;
    
    case "verbs": 
      if (typeof VERBS_QUESTIONS !== 'undefined') return VERBS_QUESTIONS;
      if (typeof VERB_QUESTIONS !== 'undefined') return VERB_QUESTIONS;
      return null;
    
    case "tenses": 
      if (typeof TENSES_QUESTIONS !== 'undefined') return TENSES_QUESTIONS;
      if (typeof TENSE_QUESTIONS !== 'undefined') return TENSE_QUESTIONS;
      return null;

  case "reading_comprehension": 
      if (typeof READING_COMPREHENSION_QUESTIONS !== 'undefined') return READING_COMPREHENSION_QUESTIONS;
      return null;
    
    
    case "pronouns": 
      if (typeof PRONOUNS_QUESTIONS !== 'undefined') return PRONOUNS_QUESTIONS;
      if (typeof PRONOUN_QUESTIONS !== 'undefined') return PRONOUN_QUESTIONS;
      return null;
    
    case "adjectives": 
      if (typeof ADJECTIVES_QUESTIONS !== 'undefined') return ADJECTIVES_QUESTIONS;
      if (typeof ADJECTIVE_QUESTIONS !== 'undefined') return ADJECTIVE_QUESTIONS;
      return null;
    
    case "adverbs": 
      if (typeof ADVERBS_QUESTIONS !== 'undefined') return ADVERBS_QUESTIONS;
      if (typeof ADVERB_QUESTIONS !== 'undefined') return ADVERB_QUESTIONS;
      return null;
    
    case "prepositions": 
      if (typeof PREPOSITIONS_QUESTIONS !== 'undefined') return PREPOSITIONS_QUESTIONS;
      if (typeof PREPOSITION_QUESTIONS !== 'undefined') return PREPOSITION_QUESTIONS;
      return null;
    
    case "conjunctions": 
      if (typeof CONJUNCTIONS_QUESTIONS !== 'undefined') return CONJUNCTIONS_QUESTIONS;
      if (typeof CONJUNCTION_QUESTIONS !== 'undefined') return CONJUNCTION_QUESTIONS;
      return null;
    
    case "interjections": 
      if (typeof INTERJECTIONS_QUESTIONS !== 'undefined') return INTERJECTIONS_QUESTIONS;
      if (typeof INTERJECTION_QUESTIONS !== 'undefined') return INTERJECTION_QUESTIONS;
      return null;
    
    case "articles": 
      if (typeof ARTICLES_QUESTIONS !== 'undefined') return ARTICLES_QUESTIONS;
      if (typeof ARTICLE_QUESTIONS !== 'undefined') return ARTICLE_QUESTIONS;
      return null;
    
    case "subject_verb_agreement": 
      if (typeof SUBJECT_VERB_AGREEMENT_QUESTIONS !== 'undefined') return SUBJECT_VERB_AGREEMENT_QUESTIONS;
      return null;
    
    case "sentence_construction": 
      if (typeof SENTENCE_CONSTRUCTION_QUESTIONS !== 'undefined') return SENTENCE_CONSTRUCTION_QUESTIONS;
      return null;
    
    case "sentence_structure": 
      if (typeof SENTENCE_STRUCTURE_QUESTIONS !== 'undefined') return SENTENCE_STRUCTURE_QUESTIONS;
      return null;
    
    case "error_identification": 
      if (typeof ERROR_IDENTIFICATION_QUESTIONS !== 'undefined') return ERROR_IDENTIFICATION_QUESTIONS;
      return null;
    
    case "affixes": 
      if (typeof AFFIXES_QUESTIONS !== 'undefined') return AFFIXES_QUESTIONS;
      return null;
    
    case "synonyms": 
      if (typeof SYNONYMS_QUESTIONS !== 'undefined') return SYNONYMS_QUESTIONS;
      return null;
    
    case "antonyms": 
      if (typeof ANTONYMS_QUESTIONS !== 'undefined') return ANTONYMS_QUESTIONS;
      return null;
    
    case "analogy": 
      if (typeof ANALOGY_QUESTIONS !== 'undefined') return ANALOGY_QUESTIONS;
      return null;
    
    case "punctuations": 
      if (typeof PUNCTUATIONS_QUESTIONS !== 'undefined') return PUNCTUATIONS_QUESTIONS;
      return null;
    
    case "words_often_confused": 
      if (typeof WORDS_OFTEN_CONFUSED_QUESTIONS !== 'undefined') return WORDS_OFTEN_CONFUSED_QUESTIONS;
      return null;
    
    case "paragraph_organization": 
      if (typeof PARAGRAPH_ORGANIZATION_QUESTIONS !== 'undefined') return PARAGRAPH_ORGANIZATION_QUESTIONS;
      return null;
    
    default: 
      console.log("Topic not found:", topic);
      return null;
  }
}
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
    
    // Kunin ang current question object
    let q = quizState.questions[quizState.currentIndex];

    // --- UNIVERSAL DATA NORMALIZER (Fix for the Error) ---
    // Ito ang mag-aayos ng data bago gamitin para hindi mag-error ang forEach
    
    // 1. Kung galing sa Analogy file na may { q, a, options, exp }
    if (q.q && q.a && q.options) {
        q.question = q.q;           // Ilipat ang 'q' sa 'question'
        q.choices = q.options;      // Ilipat ang 'options' sa 'choices'
        q.answer = q.a;             // Ilipat ang 'a' sa 'answer'
        q.explanation = q.exp;      // Ilipat ang 'exp' sa 'explanation'
        q.correctIndex = q.options.indexOf(q.a); // Hanapin ang index ng tamang sagot
    }
    // 2. Kung galing sa ibang file na may { question, answer, options } (Long format)
    else if (q.options && q.answer && !q.choices) {
        q.choices = q.options;
        q.correctIndex = q.options.indexOf(q.answer);
    }
    
    // Safety Check: Kung wala pa ring choices, mag-error ito, kaya lagyan ng empty array
    if (!Array.isArray(q.choices)) {
        console.error("Critical Error: Question data format is invalid", q);
        q.choices = []; // Prevents crash on forEach
    }
    // -----------------------------------------------------

    quizState.answered = false;
    quizProgressEl.textContent = `Question ${quizState.currentIndex + 1} of ${quizState.questions.length}`;
    updateProgressFill();

    // Display Question Text
    quizQuestionEl.textContent = q.question || "Question text missing";
    
    // Reset UI
    quizChoicesEl.innerHTML = "";
    quizExplanationEl.classList.add("hide");
    quizNextBtn.classList.add("hide");

    // Create Buttons (This is where it was crashing)
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

    if (!Array.isArray(quizState.wrongAnswers)) {
      quizState.wrongAnswers = [];
    }
    quizState.wrongAnswers.push({
      question: q.question,
      yourAnswer: "(Time's up)",
      correctAnswer: q.choices[q.correctIndex],
      explanation: q.explanation
    });

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
  stopCurrentTimer();
  const topic = practiceTopicEl.value;
  const level = practiceLevelEl.value;
  const count = parseInt(practiceCountEl.value, 10);
  const timer = timerModeEl.value;
  const weakNotes = practiceWeakEl.value.trim();

  console.log("=== DEBUG QUIZ START ===");
  console.log("Topic:", topic);
  console.log("Level:", level);
  
  const bank = getQuestionBank(topic);
  console.log("Question bank:", bank);
  
  if (!bank) {
    alert("Questions for this topic are not yet available. Please ensure the Question files are loaded.");
    return;
  }

  const pool = bank[level];
  console.log("Level pool:", pool);
  console.log("Pool length:", pool ? pool.length : 0);
  
  if (!pool || pool.length === 0) {
    alert(`No questions found for ${level} level.`);
    return;
  }

  // Debug first question structure
  if (pool[0]) {
    console.log("First question structure:", pool[0]);
    console.log("Question:", pool[0].question);
    console.log("Choices:", pool[0].choices || pool[0].options);
    console.log("Correct index:", pool[0].correctIndex);
    console.log("Answer:", pool[0].answer);
  }

  const selectedQuestions = shuffleArray(pool).slice(0, count);
  console.log("Selected questions:", selectedQuestions);

  // Continue with your existing quiz setup...
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
            <h3>Weak Points (Review)</h3>
            <ol class="weakpoints-list">
              ${wrongItems.map((item, idx) => `
                <li class="weakpoint-item">
                  <p class="wp-question"><strong>Q${idx + 1}.</strong> ${item.question}</p>
                  <p class="wp-your-answer"><span class="wp-label">Your answer:</span> <span class="wp-bad">${item.yourAnswer}</span></p>
                  <p class="wp-correct-answer"><span class="wp-label">Correct answer:</span> <span class="wp-good">${item.correctAnswer}</span></p>
                  <p class="wp-explanation">${item.explanation}</p>
                </li>
              `).join("")}
            </ol>
          </div>
        `;
      } else {
        summaryHtml += `<div class="weakpoints-card"><h3>No Weak Points 🎉</h3><p class="muted">Perfect score!</p></div>`;
      }

      quizQuestionEl.innerHTML = summaryHtml;
      quizChoicesEl.innerHTML = "";
      quizExplanationEl.classList.add("hide");
      quizNextBtn.classList.add("hide");

      const restartBtn = document.createElement("button");
      restartBtn.className = "mode-btn active";
      restartBtn.style.marginTop = "20px";
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
});
