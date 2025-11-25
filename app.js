// ==========================================
// 1. VERBAL TOPICS LIST
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

// ==========================================
// 2. NUMERICAL TOPICS
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

// ==========================================
// 3. APP STATE VARIABLES
// ==========================================
let currentSubject = 'verbal';
let currentActiveTopicId = null;
let quizState = null;

// ==========================================
// 4. INITIALIZATION WHEN PAGE LOADS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("CSE Reviewer initialized");
  
  // Initialize the app
  initializeApp();
});

function initializeApp() {
  // Set up tab switching
  setupTabSwitching();
  
  // Initialize subject
  switchSubject('verbal');
  
  // Set up quiz button
  setupQuizButton();
  
  // Set up next button
  setupNextButton();
}

// ==========================================
// 5. SUBJECT SWITCHING LOGIC
// ==========================================
function switchSubject(subject) {
  currentSubject = subject;
  
  // Update UI
  const btnVerbal = document.getElementById("btn-verbal");
  const btnNumerical = document.getElementById("btn-numerical");
  const subjectTitleEl = document.getElementById("current-subject-title");
  
  if (subject === 'verbal') {
    btnVerbal.classList.add('active');
    btnNumerical.classList.remove('active');
    subjectTitleEl.textContent = "Verbal Ability · Reviewer";
  } else {
    btnVerbal.classList.remove('active');
    btnNumerical.classList.add('active');
    subjectTitleEl.textContent = "Numerical Ability · Reviewer";
  }

  // Update the UI
  renderTopicsSidebar();
  updatePracticeDropdown();
  
  // Reset lesson content
  const lessonTitleEl = document.getElementById("lesson-title");
  const lessonMetaEl = document.getElementById("lesson-meta");
  const lessonContentEl = document.getElementById("lesson-content");
  
  lessonTitleEl.textContent = "Select a Topic";
  lessonMetaEl.textContent = "";
  lessonContentEl.innerHTML = "<p>Please select a topic from the sidebar to start studying.</p>";
}

function getCurrentTopics() {
  return currentSubject === 'verbal' ? VERBAL_TOPICS : NUMERICAL_TOPICS;
}

// ==========================================
// 6. TAB SWITCHING
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
    });
  });
}

// ==========================================
// 7. STUDY MODE LOGIC
// ==========================================
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

  // For now, show a simple message - you can expand this later
  lessonTitleEl.textContent = topicKey.charAt(0).toUpperCase() + topicKey.slice(1);
  lessonMetaEl.textContent = `${currentSubject.toUpperCase()} · Study Material`;
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

// ==========================================
// 8. PRACTICE MODE LOGIC
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
// 9. QUIZ LOGIC - THE MOST IMPORTANT PART
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
  // This function tries to find questions for the selected topic
  // It looks for global variables that match the topic name
  
  // For Verbal topics, we look for variables like NOUNS_QUESTIONS, VERBS_QUESTIONS, etc.
  const topicKey = topic.toUpperCase() + '_QUESTIONS';
  
  if (typeof window[topicKey] !== 'undefined') {
    console.log(`Found questions for: ${topic}`);
    return window[topicKey];
  }
  
  // If no specific questions found, return demo questions
  console.log(`No questions found for ${topic}, using demo questions`);
  return getDemoQuestions(topic);
}

function getDemoQuestions(topic) {
  // Return demo questions when real questions aren't available
  return [
    {
      question: `What is the main focus of ${topic} in English grammar?`,
      choices: [
        "Grammar rules and structure",
        "Vocabulary building and word usage", 
        "Reading comprehension skills",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: `${topic} covers various aspects of language learning including grammar, vocabulary, and comprehension.`
    },
    {
      question: `Which of the following is most important for mastering ${topic}?`,
      choices: [
        "Memorizing all the rules",
        "Understanding the concepts and patterns",
        "Practicing regularly with examples",
        "Both B and C"
      ],
      answer: "Both B and C",
      explanation: `Understanding concepts and regular practice are key to mastering ${topic}.`
    },
    {
      question: `In ${topic}, what should you do when you encounter a difficult question?`,
      choices: [
        "Skip it immediately",
        "Guess randomly",
        "Eliminate wrong answers first",
        "Spend all your time on it"
      ],
      answer: "Eliminate wrong answers first",
      explanation: `Eliminating obviously wrong answers improves your chances even when you're unsure.`
    },
    {
      question: `How can you improve your skills in ${topic}?`,
      choices: [
        "Practice with sample questions",
        "Review basic concepts regularly",
        "Learn from your mistakes",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: `Consistent practice, concept review, and learning from errors are all effective strategies.`
    }
  ];
}

function startQuiz() {
  console.log("Starting quiz...");
  
  // Stop any existing timer
  stopCurrentTimer();
  
  // Get quiz settings
  const topic = document.getElementById("practice-topic").value;
  const level = document.getElementById("practice-level").value;
  const count = parseInt(document.getElementById("practice-count").value, 10);
  const timer = document.getElementById("timer-mode").value;

  // Get questions
  const bank = getQuestionBank(topic);
  
  if (!bank || bank.length === 0) {
    alert("No questions available for this topic. Using demo questions.");
    // Use demo questions as fallback
    const demoQuestions = getDemoQuestions(topic);
    initializeQuiz(demoQuestions.slice(0, count), timer);
    return;
  }

  // Select questions based on count
  const selectedQuestions = shuffleArray(bank).slice(0, count);
  initializeQuiz(selectedQuestions, timer);
}

function initializeQuiz(questions, timerMode) {
  // Set up quiz state
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
  
  // Show first question
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
  const quizProgressEl = document.getElementById("quiz-progress");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");

  // Reset state
  quizState.answered = false;
  
  // Update UI
  quizProgressEl.textContent = `Question ${quizState.currentIndex + 1} of ${quizState.questions.length}`;
  updateProgressFill();

  quizQuestionEl.textContent = q.question;
  
  quizChoicesEl.innerHTML = "";
  quizExplanationEl.classList.add("hide");
  quizNextBtn.classList.add("hide");

  // Add choice buttons
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
  
  const btns = quizChoicesEl.querySelectorAll("button");
  const correctIndex = q.choices.indexOf(q.answer);
  const isCorrect = selectedIndex === correctIndex;

  // Update scores and UI
  if (isCorrect) {
    quizState.correct++;
    btns[selectedIndex].classList.add("correct");
  } else {
    quizState.incorrect++;
    btns[selectedIndex].classList.add("incorrect");
    btns[correctIndex].classList.add("correct");
    
    // Track wrong answer
    quizState.wrongAnswers.push({
      question: q.question,
      yourAnswer: q.choices[selectedIndex],
      correctAnswer: q.answer,
      explanation: q.explanation
    });
  }

  // Show explanation
  quizExplanationEl.textContent = q.explanation;
  quizExplanationEl.classList.remove("hide");

  // Show next button
  quizNextBtn.textContent = quizState.currentIndex < quizState.questions.length - 1 
    ? "Next Question" 
    : "See Results";
  quizNextBtn.classList.remove("hide");
  
  updateStats();
}

function handleTimeout() {
  if (!quizState || quizState.answered) return;
  
  quizState.answered = true;

  const q = quizState.questions[quizState.currentIndex];
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");
  
  const btns = quizChoicesEl.querySelectorAll("button");
  const correctIndex = q.choices.indexOf(q.answer);

  // Mark as incorrect due to timeout
  quizState.incorrect++;
  btns[correctIndex].classList.add("correct");
  
  // Track wrong answer
  quizState.wrongAnswers.push({
    question: q.question,
    yourAnswer: "(Time's up)",
    correctAnswer: q.answer,
    explanation: q.explanation
  });

  // Show explanation
  quizExplanationEl.textContent = "Time's up! " + q.explanation;
  quizExplanationEl.classList.remove("hide");

  // Show next button
  quizNextBtn.textContent = quizState.currentIndex < quizState.questions.length - 1 
    ? "Next Question" 
    : "See Results";
  quizNextBtn.classList.remove("hide");
  
  updateStats();
}

function handleNextQuestion() {
  if (!quizState) return;

  if (quizState.currentIndex < quizState.questions.length - 1) {
    // Go to next question
    quizState.currentIndex++;
    showQuestion();
  } else {
    // Show results
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

  // Update progress bar to 100%
  if (quizProgressFillEl) {
    quizProgressFillEl.style.width = "100%";
  }

  const total = quizState.questions.length;
  const correct = quizState.correct;
  const percentage = Math.round((correct / total) * 100);

  // Create results HTML
  let resultsHtml = `
    <div class="result-card">
      <h2>Quiz Complete!</h2>
      <div class="result-score">
        <div class="score-circle">
          <span class="score-percent">${percentage}%</span>
        </div>
        <p>You got <strong>${correct} out of ${total}</strong> questions correct</p>
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

  // Add wrong answers review if any
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

  // Update UI
  quizQuestionEl.innerHTML = resultsHtml;
  quizChoicesEl.innerHTML = "";
  quizExplanationEl.classList.add("hide");
  quizNextBtn.classList.add("hide");

  // Add restart button
  const restartBtn = document.createElement("button");
  restartBtn.className = "btn-primary";
  restartBtn.style.marginTop = "20px";
  restartBtn.style.width = "100%";
  restartBtn.textContent = "Take Another Quiz";
  restartBtn.onclick = () => {
    // Reset quiz state
    quizState = null;
    
    // Reset UI
    quizQuestionEl.textContent = "Ready when you are. Set up your quiz on the left.";
    restartBtn.remove();
    
    // Reset scores
    updateStats();
    if (quizProgressFillEl) {
      quizProgressFillEl.style.width = "0%";
    }
  };
  
  quizChoicesEl.appendChild(restartBtn);
}

// Make switchSubject available globally
window.switchSubject = switchSubject;
      
     
