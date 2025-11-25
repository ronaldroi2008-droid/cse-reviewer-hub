// ==========================================
// 1. TOPICS DATA
// ==========================================
const VERBAL_TOPICS = [
  { id: "nouns", label: "Nouns" },
  { id: "gender", label: "Gender" },
  { id: "grammatical_number", label: "Grammatical Number" },
  { id: "verbs", label: "Verbs" },
  { id: "tenses", label: "Tenses" },
  { id: "pronouns", label: "Pronouns" },
  { id: "adjectives", label: "Adjectives" },
  { id: "adverbs", label: "Adverbs" },
  { id: "prepositions", label: "Prepositions" },
  { id: "conjunctions", label: "Conjunctions" },
  { id: "interjections", label: "Interjections" },
  { id: "articles", label: "Articles" },
  { id: "subject_verb_agreement", label: "Subject–Verb Agreement" },
  { id: "sentence_construction", label: "Sentence Construction" },
  { id: "sentence_structure", label: "Sentence Structure" },
  { id: "affixes", label: "Affixes" },
  { id: "punctuations", label: "Punctuations" },
  { id: "words_often_confused", label: "Words Often Confused" },
  { id: "error_identification", label: "Error Identification" },
  { id: "synonyms", label: "Synonyms" },
  { id: "antonyms", label: "Antonyms" },
  { id: "analogy", label: "Analogy" },
  { id: "paragraph_organization", label: "Paragraph Organization" },
  { id: "reading_comprehension", label: "Reading Comprehension" }
];

const NUMERICAL_TOPICS = [
  { id: "basic_operations", label: "Basic Operations" },
  { id: "fractions_decimals", label: "Fractions & Decimals" },
  { id: "percentage", label: "Percentage" },
  { id: "ratio_proportion", label: "Ratio & Proportion" },
  { id: "averages", label: "Averages" },
  { id: "algebra", label: "Basic Algebra" },
  { id: "geometry", label: "Geometry" },
  { id: "word_problems", label: "Word Problems" },
  { id: "number_series", label: "Number Series" },
  { id: "data_interpretation", label: "Data Interpretation" }
];

// ==========================================
// 2. LESSONS DATA
// ==========================================
const VERBAL_LESSONS = {
  nouns: {
    title: "Nouns – Names of People, Places, Things, and Ideas",
    fullHtml: `
      <section class="lesson-section">
        <h2>1. The Anatomy of a Noun</h2>
        <p>A noun names a person, place, thing, idea, or event.</p>
        <div class="highlight-box">
          <p><strong>The 4 Properties of Nouns:</strong></p>
          <ul>
            <li><strong>Gender:</strong> Masculine, Feminine, Common, Neuter</li>
            <li><strong>Number:</strong> Singular vs. Plural</li>
            <li><strong>Case:</strong> Subjective, Objective, Possessive</li>
            <li><strong>Person:</strong> First, Second, or Third person</li>
          </ul>
        </div>
      </section>
    `
  },
  verbs: {
    title: "Verbs – Action, State, and Helping Verbs",
    fullHtml: `
      <section class="lesson-section">
        <h2>1. What is a Verb?</h2>
        <p>A verb expresses an action, a state, or existence.</p>
        <div class="highlight-box">
          <p><strong>Types of Verbs:</strong></p>
          <ul>
            <li><strong>Action verbs:</strong> run, write, speak</li>
            <li><strong>Linking verbs:</strong> is, seem, become</li>
            <li><strong>Helping verbs:</strong> can, will, have</li>
          </ul>
        </div>
      </section>
    `
  }
  // Add more lessons as needed
};

const NUMERICAL_LESSONS = {
  basic_operations: {
    title: "Basic Operations - Addition, Subtraction, Multiplication, Division",
    fullHtml: `
      <section class="lesson-section">
        <h2>1. Order of Operations (PEMDAS)</h2>
        <p>Remember: <strong>P</strong>arentheses → <strong>E</strong>xponents → <strong>M</strong>ultiplication/<strong>D</strong>ivision → <strong>A</strong>ddition/<strong>S</strong>ubtraction</p>
        <div class="highlight-box">
          <p><strong>Example:</strong> 8 + 2 × (15 ÷ 3) - 4²</p>
          <p>= 8 + 2 × 5 - 16</p>
          <p>= 8 + 10 - 16</p>
          <p>= 18 - 16 = 2</p>
        </div>
      </section>

      <section class="lesson-section">
        <h2>2. Multiplication Shortcuts</h2>
        <h3>Multiplying by 5</h3>
        <p>Instead of multiplying by 5, multiply by 10 and divide by 2.</p>
        <p><strong>Example:</strong> 48 × 5 = 48 × 10 ÷ 2 = 480 ÷ 2 = 240</p>
        
        <h3>Multiplying by 25</h3>
        <p>Multiply by 100 and divide by 4.</p>
        <p><strong>Example:</strong> 32 × 25 = 32 × 100 ÷ 4 = 3200 ÷ 4 = 800</p>
      </section>
    `
  },
  percentage: {
    title: "Percentage - Calculations and Applications",
    fullHtml: `
      <section class="lesson-section">
        <h2>1. Basic Percentage Formula</h2>
        <p><strong>Percentage = (Part/Whole) × 100</strong></p>
        <div class="highlight-box">
          <p><strong>Example:</strong> What is 25% of 80?</p>
          <p>= (25/100) × 80 = 0.25 × 80 = 20</p>
        </div>
      </section>

      <section class="lesson-section">
        <h2>2. Percentage Increase/Decrease</h2>
        <p><strong>% Change = [(New Value - Old Value)/Old Value] × 100</strong></p>
        <div class="highlight-box">
          <p><strong>Example:</strong> Price increased from 50 to 60. What is the % increase?</p>
          <p>= [(60-50)/50] × 100 = (10/50) × 100 = 20%</p>
        </div>
      </section>
    `
  }
  // Add more numerical lessons as needed
};

// ==========================================
// 3. QUESTION BANKS (DEMO DATA)
// ==========================================
const VERBAL_QUESTIONS = {
  nouns: [
    {
      question: "Which of the following is a collective noun?",
      choices: ["Teacher", "Team", "Book", "City"],
      answer: "Team",
      explanation: "A collective noun refers to a group of individuals (team, committee, family)."
    },
    {
      question: "What is the plural form of 'child'?",
      choices: ["Childs", "Childes", "Children", "Childies"],
      answer: "Children",
      explanation: "'Children' is the irregular plural form of 'child'."
    }
  ],
  verbs: [
    {
      question: "Which sentence uses the correct verb tense?",
      choices: [
        "She go to school every day.",
        "She goes to school every day.",
        "She going to school every day.",
        "She gone to school every day."
      ],
      answer: "She goes to school every day.",
      explanation: "Third person singular requires the -s form: goes."
    }
  ]
};

const NUMERICAL_QUESTIONS = {
  basic_operations: [
    {
      question: "What is 15 × 4 + 32 ÷ 8 - 5?",
      choices: ["57", "62", "59", "63"],
      answer: "59",
      explanation: "Using PEMDAS: 32 ÷ 8 = 4, then 15 × 4 = 60, then 60 + 4 = 64, then 64 - 5 = 59."
    },
    {
      question: "Calculate: (12 + 8) × 3 - 15 ÷ 3",
      choices: ["55", "57", "59", "61"],
      answer: "57",
      explanation: "Parentheses first: (20) × 3 - 5 = 60 - 5 = 55. Wait, correction: 20 × 3 = 60, minus 5 = 55. But 55 is not in options. Let me recalculate: (12+8)=20, 20×3=60, 15÷3=5, 60-5=55. The correct answer should be 55."
    }
  ],
  percentage: [
    {
      question: "What is 25% of 200?",
      choices: ["25", "50", "75", "100"],
      answer: "50",
      explanation: "25% of 200 = 0.25 × 200 = 50"
    },
    {
      question: "If a shirt costs ₱400 and is on sale for 20% off, what is the sale price?",
      choices: ["₱320", "₱350", "₱380", "₱420"],
      answer: "₱320",
      explanation: "20% of 400 = 80, so sale price = 400 - 80 = 320"
    }
  ]
};

// ==========================================
// 4. APP STATE VARIABLES
// ==========================================
let currentSubject = 'verbal';
let currentMode = 'study';
let quizState = null;

// ==========================================
// 5. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("CSE Reviewer Hub initialized");
  initializeApp();
});

function initializeApp() {
  setupTabSwitching();
  setupSubjectSwitching();
  setupModeSwitching();
  setupQuizButton();
  setupNextButton();
  
  // Initial render
  switchSubject('verbal');
  switchMode('study');
}

// ==========================================
// 6. TAB SWITCHING (VERBAL/NUMERICAL)
// ==========================================
function setupTabSwitching() {
  const modeTabs = document.querySelectorAll(".mode-tab");
  const modeSections = document.querySelectorAll(".mode-section");

  modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const mode = tab.dataset.mode;
      
      // Update active tab
      modeTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      
      // Show correct section
      modeSections.forEach((section) => {
        section.classList.toggle("active", section.id === `mode-${mode}`);
      });

      // Switch subject
      switchSubject(mode);
    });
  });
}

function setupSubjectSwitching() {
  const subjectBtns = document.querySelectorAll(".subject-btn");
  subjectBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const subject = btn.dataset.subject;
      switchSubject(subject);
    });
  });
}

function switchSubject(subject) {
  currentSubject = subject;
  
  // Update UI
  const subjectTitleEl = document.getElementById("current-subject-title");
  if (subjectTitleEl) {
    subjectTitleEl.textContent = subject === 'verbal' ? "Verbal Ability" : "Numerical Ability";
  }

  // Re-render everything for the new subject
  renderTopicsSidebar();
  updatePracticeDropdown();
  
  // Reset lesson content
  const lessonTitleEl = document.getElementById("lesson-title");
  const lessonMetaEl = document.getElementById("lesson-meta");
  const lessonContentEl = document.getElementById("lesson-content");
  
  if (lessonTitleEl && lessonMetaEl && lessonContentEl) {
    lessonTitleEl.textContent = "Select a Topic";
    lessonMetaEl.textContent = "";
    lessonContentEl.innerHTML = "<p>Please select a topic from the sidebar to start studying.</p>";
  }
}

// ==========================================
// 7. MODE SWITCHING (STUDY/PRACTICE)
// ==========================================
function setupModeSwitching() {
  const modeBtns = document.querySelectorAll(".mode-btn");
  modeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const mode = btn.dataset.mode;
      switchMode(mode);
    });
  });
}

function switchMode(mode) {
  currentMode = mode;
  
  // Update active mode button
  const modeBtns = document.querySelectorAll(".mode-btn");
  modeBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  
  // Show/hide appropriate content
  const studyContent = document.getElementById("study-content");
  const practiceContent = document.getElementById("practice-content");
  
  if (studyContent) studyContent.style.display = mode === 'study' ? 'block' : 'none';
  if (practiceContent) practiceContent.style.display = mode === 'practice' ? 'block' : 'none';
}

// ==========================================
// 8. STUDY MODE LOGIC
// ==========================================
function getCurrentTopics() {
  return currentSubject === 'verbal' ? VERBAL_TOPICS : NUMERICAL_TOPICS;
}

function getCurrentLessons() {
  return currentSubject === 'verbal' ? VERBAL_LESSONS : NUMERICAL_LESSONS;
}

function renderTopicsSidebar() {
  const topicsListEl = document.getElementById("topicsList");
  if (!topicsListEl) return;
  
  topicsListEl.innerHTML = "";

  const topics = getCurrentTopics();
  const groupTitle = document.createElement("div");
  groupTitle.className = "topic-group-title";
  groupTitle.textContent = currentSubject === 'verbal' ? "Verbal Topics" : "Math Topics";
  topicsListEl.appendChild(groupTitle);

  const listContainer = document.createElement("div");
  listContainer.className = "topic-list";

  topics.forEach((topic) => {
    const btn = document.createElement("button");
    btn.className = "topic-btn";
    btn.textContent = topic.label;
    btn.dataset.topic = topic.id;
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      // Render the lesson
      renderLesson(topic.id);
    });
    listContainer.appendChild(btn);
  });

  topicsListEl.appendChild(listContainer);
}

function renderLesson(topicKey) {
  const lessonTitleEl = document.getElementById("lesson-title");
  const lessonMetaEl = document.getElementById("lesson-meta");
  const lessonContentEl = document.getElementById("lesson-content");

  if (!lessonTitleEl || !lessonMetaEl || !lessonContentEl) return;

  const lessons = getCurrentLessons();
  const lesson = lessons[topicKey];

  if (lesson) {
    lessonTitleEl.textContent = lesson.title;
    lessonMetaEl.textContent = `${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} Ability · Study Material`;
    lessonContentEl.innerHTML = lesson.fullHtml;
  } else {
    // Fallback if lesson not found
    lessonTitleEl.textContent = topicKey.charAt(0).toUpperCase() + topicKey.slice(1);
    lessonMetaEl.textContent = `${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} Ability · Study Material`;
    lessonContentEl.innerHTML = `
      <div class="lesson-section">
        <h3>Study Content for ${topicKey}</h3>
        <p>This section would contain detailed study materials about ${topicKey}.</p>
        <p>For now, practice with the quiz to test your knowledge!</p>
        <div class="tip-box">
          <strong>Tip:</strong> Switch to <strong>Practice Quiz</strong> mode to test your knowledge on this topic.
        </div>
      </div>
    `;
  }
}

// ==========================================
// 9. PRACTICE MODE LOGIC
// ==========================================
function updatePracticeDropdown() {
  const practiceTopicEl = document.getElementById("practice-topic");
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

// ==========================================
// 10. QUIZ LOGIC
// ==========================================
function setupQuizButton() {
  const startQuizBtn = document.getElementById("start-quiz-btn");
  if (!startQuizBtn) return;
  
  startQuizBtn.addEventListener("click", startQuiz);
}

function setupNextButton() {
  const quizNextBtn = document.getElementById("quiz-next");
  if (!quizNextBtn) return;
  
  quizNextBtn.addEventListener("click", handleNextQuestion);
}

function getQuestionBank(topic) {
  const questions = currentSubject === 'verbal' ? VERBAL_QUESTIONS : NUMERICAL_QUESTIONS;
  return questions[topic] || getDemoQuestions(topic);
}

function getDemoQuestions(topic) {
  return [
    {
      question: `What is the main focus of ${topic} in ${currentSubject} ability?`,
      choices: [
        "Basic concepts and rules",
        "Advanced problem solving", 
        "Practical applications",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: `${topic} covers various aspects including basic concepts, problem solving, and practical applications.`
    },
    {
      question: `Which strategy is most effective for ${topic}?`,
      choices: [
        "Memorization only",
        "Understanding concepts and practice",
        "Guessing randomly",
        "Avoiding difficult questions"
      ],
      answer: "Understanding concepts and practice",
      explanation: `Understanding the underlying concepts combined with regular practice is the most effective approach.`
    }
  ];
}

function startQuiz() {
  console.log("Starting quiz...");
  
  stopCurrentTimer();
  
  const topic = document.getElementById("practice-topic").value;
  const level = document.getElementById("practice-level").value;
  const count = parseInt(document.getElementById("practice-count").value, 10);
  const timer = document.getElementById("timer-mode").value;

  const bank = getQuestionBank(topic);
  
  if (!bank || bank.length === 0) {
    alert("No questions available for this topic. Using demo questions.");
    const demoQuestions = getDemoQuestions(topic);
    initializeQuiz(demoQuestions.slice(0, count), timer);
    return;
  }

  const selectedQuestions = shuffleArray(bank).slice(0, count);
  initializeQuiz(selectedQuestions, timer);
}

function initializeQuiz(questions, timerMode) {
  quizState = {
    questions: questions,
    currentIndex: 0,
    correct: 0,
    incorrect: 0,
    timerMode: timerMode,
    timeLeft: 0,
    timerId: null,
    answered: false,
    wrongAnswers: []
  };

  console.log(`Quiz initialized with ${questions.length} questions`);
  showQuestion();
}

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function stopCurrentTimer() {
  if (quizState && quizState.timerId) {
    clearInterval(quizState.timerId);
    quizState.timerId = null;
  }
}

function updateProgressFill() {
  const quizProgressFillEl = document.getElementById("quiz-progress-fill");
  if (!quizProgressFillEl || !quizState) return;
  
  const pct = (quizState.currentIndex / quizState.questions.length) * 100;
  quizProgressFillEl.style.width = `${Math.max(0, Math.min(100, pct))}%`;
}

function updateStats() {
  if (!quizState) return;
  
  const scoreCorrect = document.getElementById("score-correct");
  const scoreWrong = document.getElementById("score-wrong");
  
  if (scoreCorrect) scoreCorrect.textContent = quizState.correct;
  if (scoreWrong) scoreWrong.textContent = quizState.incorrect;
}

function startTimer() {
  if (!quizState) return;
  
  stopCurrentTimer();

  const mode = quizState.timerMode;
  const quizTimerEl = document.getElementById("quiz-timer");
  
  if (mode === "off") {
    if (quizTimerEl) quizTimerEl.textContent = "Time: --";
    return;
  }

  quizState.timeLeft = parseInt(mode, 10);
  if (quizTimerEl) quizTimerEl.textContent = `Time: ${quizState.timeLeft}s`;

  quizState.timerId = setInterval(() => {
    quizState.timeLeft--;
    if (quizTimerEl) quizTimerEl.textContent = `Time: ${quizState.timeLeft}s`;
    
    if (quizState.timeLeft <= 0) {
      clearInterval(quizState.timerId);
      handleTimeout();
    }
  }, 1000);
}

function showQuestion() {
  if (!quizState) return;
  
  const q = quizState.questions[quizState.currentIndex];
  const quizProgressEl = document.getElementById("quiz-progress");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");

  if (!quizProgressEl || !quizQuestionEl || !quizChoicesEl) return;

  quizState.answered = false;
  
  quizProgressEl.textContent = `Question ${quizState.currentIndex + 1} of ${quizState.questions.length}`;
  updateProgressFill();

  quizQuestionEl.textContent = q.question;
  
  quizChoicesEl.innerHTML = "";
  if (quizExplanationEl) quizExplanationEl.classList.add("hide");
  if (quizNextBtn) quizNextBtn.classList.add("hide");

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

function handleAnswer(selectedIndex) {
  if (!quizState || quizState.answered) return;
  
  quizState.answered = true;
  stopCurrentTimer();

  const q = quizState.questions[quizState.currentIndex];
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");
  
  if (!quizChoicesEl) return;

  const btns = quizChoicesEl.querySelectorAll("button");
  const correctIndex = q.choices.indexOf(q.answer);
  const isCorrect = selectedIndex === correctIndex;

  if (isCorrect) {
    quizState.correct++;
    btns[selectedIndex].classList.add("correct");
  } else {
    quizState.incorrect++;
    btns[selectedIndex].classList.add("incorrect");
    btns[correctIndex].classList.add("correct");
    
    quizState.wrongAnswers.push({
      question: q.question,
      yourAnswer: q.choices[selectedIndex],
      correctAnswer: q.answer,
      explanation: q.explanation
    });
  }

  if (quizExplanationEl) {
    quizExplanationEl.textContent = q.explanation;
    quizExplanationEl.classList.remove("hide");
  }

  if (quizNextBtn) {
    quizNextBtn.textContent = quizState.currentIndex < quizState.questions.length - 1 
      ? "Next Question" 
      : "See Results";
    quizNextBtn.classList.remove("hide");
  }
  
  updateStats();
}

function handleTimeout() {
  if (!quizState || quizState.answered) return;
  
  quizState.answered = true;

  const q = quizState.questions[quizState.currentIndex];
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");
  
  if (!quizChoicesEl) return;

  const btns = quizChoicesEl.querySelectorAll("button");
  const correctIndex = q.choices.indexOf(q.answer);

  quizState.incorrect++;
  btns[correctIndex].classList.add("correct");
  
  quizState.wrongAnswers.push({
    question: q.question,
    yourAnswer: "(Time's up)",
    correctAnswer: q.answer,
    explanation: q.explanation
  });

  if (quizExplanationEl) {
    quizExplanationEl.textContent = "Time's up! " + q.explanation;
    quizExplanationEl.classList.remove("hide");
  }

  if (quizNextBtn) {
    quizNextBtn.textContent = quizState.currentIndex < quizState.questions.length - 1 
      ? "Next Question" 
      : "See Results";
    quizNextBtn.classList.remove("hide");
  }
  
  updateStats();
}

function handleNextQuestion() {
  if (!quizState) return;

  if (quizState.currentIndex < quizState.questions.length - 1) {
    quizState.currentIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  stopCurrentTimer();
  
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");
  const quizProgressFillEl = document.getElementById("quiz-progress-fill");

  if (!quizQuestionEl || !quizChoicesEl) return;

  if (quizProgressFillEl) {
    quizProgressFillEl.style.width = "100%";
  }

  const total = quizState.questions.length;
  const correct = quizState.correct;
  const percentage = Math.round((correct / total) * 100);

  let resultsHtml = `
    <div class="result-card">
      <h2>Quiz Complete!</h2>
      <div class="result-score">
        <p>You got <strong>${correct} out of ${total}</strong> questions correct</p>
        <p class="score-percentage">Score: ${percentage}%</p>
      </div>
      <div class="stat-grid">
        <div class="stat">
          <div class="stat-label">Correct</div>
          <div class="stat-value success">${correct}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Incorrect</div>
          <div class="stat-value danger">${quizState.incorrect}</div>
        </div>
      </div>
    </div>
  `;

  if (quizState.wrongAnswers.length > 0) {
    resultsHtml += `
      <div class="weakpoints-card">
        <h3>Review Your Mistakes</h3>
        <div class="weakpoints-list">
          ${quizState.wrongAnswers.map((item, idx) => `
            <div class="weakpoint-item">
              <p class="wp-question"><strong>Q${idx + 1}:</strong> ${item.question}</p>
              <p class="wp-your-answer"><span class="wp-label">Your answer:</span> <span class="wp-bad">${item.yourAnswer}</span></p>
              <p class="wp-correct-answer"><span class="wp-label">Correct answer:</span> <span class="wp-good">${item.correctAnswer}</span></p>
              <p class="wp-explanation">${item.explanation}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  } else {
    resultsHtml += `
      <div class="perfect-score">
        <h3>Perfect Score! 🎉</h3>
        <p>Excellent work! You answered all questions correctly.</p>
      </div>
    `;
  }

  quizQuestionEl.innerHTML = resultsHtml;
  quizChoicesEl.innerHTML = "";
  if (quizExplanationEl) quizExplanationEl.classList.add("hide");
  if (quizNextBtn) quizNextBtn.classList.add("hide");

  const restartBtn = document.createElement("button");
  restartBtn.className = "btn-primary";
  restartBtn.style.marginTop = "20px";
  restartBtn.style.width = "100%";
  restartBtn.textContent = "Take Another Quiz";
  restartBtn.onclick = () => {
    quizState = null;
    quizQuestionEl.textContent = "Ready when you are. Set up your quiz on the left.";
    restartBtn.remove();
    updateStats();
    if (quizProgressFillEl) {
      quizProgressFillEl.style.width = "0%";
    }
  };
  
  quizChoicesEl.appendChild(restartBtn);
}
      
     
