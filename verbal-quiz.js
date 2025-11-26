// verbal-quiz.js
// Generic Quiz Engine for Verbal Ability
// Uses a questions object shaped like:
// {
//   beginner: [ { question, options, answer, explanation }, ... ],
//   intermediate: [...],
//   advanced: [...],
//   expert: [...]
// }

// ==========================================
// STATE
// ==========================================
let currentLevel = "beginner";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let quizFinished = false;

// This should be set by the specific topic data file, e.g.:
// const CURRENT_VERBAL_QUESTIONS = SYNONYMS_QUESTIONS;
// or
// const CURRENT_VERBAL_QUESTIONS = PREPOSITIONS_QUESTIONS;
let QUESTIONS_SOURCE = typeof CURRENT_VERBAL_QUESTIONS !== "undefined"
  ? CURRENT_VERBAL_QUESTIONS
  : null;

// ==========================================
// DOM HELPERS
// ==========================================
function $(selector) {
  return document.querySelector(selector);
}

const topicLabelEl      = $("#quiz-topic-label");
const levelSelectEl     = $("#quiz-level-select");
const questionTextEl    = $("#quiz-question-text");
const optionsContainer  = $("#quiz-options");
const explanationEl     = $("#quiz-explanation");
const progressEl        = $("#quiz-progress");
const startBtn          = $("#quiz-start-btn");
const nextBtn           = $("#quiz-next-btn");

// ==========================================
// INITIALIZATION
// ==========================================
function initVerbalQuiz() {
  if (!QUESTIONS_SOURCE) {
    console.warn("No QUESTIONS_SOURCE found for verbal quiz.");
    return;
  }

  // Default level
  currentLevel = levelSelectEl ? levelSelectEl.value || "beginner" : "beginner";
  loadQuestionsForLevel(currentLevel);
  attachEventListeners();

  // Optional: Show initial state
  resetQuizUI();
}

function loadQuestionsForLevel(level) {
  currentLevel = level;

  if (!QUESTIONS_SOURCE[level] || !Array.isArray(QUESTIONS_SOURCE[level])) {
    console.warn(`No questions found for level: ${level}`);
    currentQuestions = [];
    return;
  }

  currentQuestions = [...QUESTIONS_SOURCE[level]];
  // Optional: shuffle questions
  shuffleArray(currentQuestions);

  currentIndex = 0;
  score = 0;
  quizFinished = false;
}

// Fisher–Yates shuffle
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function attachEventListeners() {
  if (levelSelectEl) {
    levelSelectEl.addEventListener("change", () => {
      loadQuestionsForLevel(levelSelectEl.value);
      resetQuizUI();
    });
  }

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startQuiz();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (quizFinished) {
        // restart quiz on same level
        loadQuestionsForLevel(currentLevel);
        startQuiz();
      } else {
        goToNextQuestion();
      }
    });
  }
}

// ==========================================
// QUIZ FLOW
// ==========================================
function startQuiz() {
  if (!currentQuestions.length) {
    questionTextEl.textContent = "No questions available for this level yet.";
    optionsContainer.innerHTML = "";
    explanationEl.textContent = "";
    progressEl.textContent = "";
    return;
  }

  score = 0;
  quizFinished = false;
  currentIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const item = currentQuestions[currentIndex];
  if (!item) {
    finishQuiz();
    return;
  }

  // Question text
  questionTextEl.textContent = item.question;

  // Clear old options
  optionsContainer.innerHTML = "";
  explanationEl.textContent = "";
  explanationEl.classList.remove("show-explanation");

  // Render options as buttons
  item.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.textContent = opt;

    btn.addEventListener("click", () => {
      handleAnswer(opt, item);
    });

    optionsContainer.appendChild(btn);
  });

  // Progress
  progressEl.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
  nextBtn.disabled = true;
  nextBtn.textContent = "Next Question";
}

function handleAnswer(selected, item) {
  const isCorrect = selected === item.answer;
  const allButtons = optionsContainer.querySelectorAll("button");

  allButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === item.answer) {
      btn.classList.add("correct-option");
    }
    if (btn.textContent === selected && !isCorrect) {
      btn.classList.add("wrong-option");
    }
  });

  if (isCorrect) {
    score += 1;
  }

  // Show explanation
  explanationEl.textContent = item.explanation || "";
  explanationEl.classList.add("show-explanation");

  // Enable Next
  nextBtn.disabled = false;

  // If last question, change button label
  if (currentIndex === currentQuestions.length - 1) {
    nextBtn.textContent = "Finish Quiz";
  }
}

function goToNextQuestion() {
  currentIndex += 1;
  if (currentIndex >= currentQuestions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  quizFinished = true;

  questionTextEl.textContent = "Quiz Finished!";
  optionsContainer.innerHTML = "";

  const percentage = currentQuestions.length
    ? Math.round((score / currentQuestions.length) * 100)
    : 0;

  explanationEl.textContent =
    `You scored ${score} out of ${currentQuestions.length} (${percentage}%).` +
    getTeacherComment(percentage);

  explanationEl.classList.add("show-explanation");

  progressEl.textContent = "Great job! You can try another level or retake this one.";
  nextBtn.disabled = false;
  nextBtn.textContent = "Retake Level";
}

function getTeacherComment(percentage) {
  if (percentage === 100) {
    return " Excellent! You mastered this level.";
  } else if (percentage >= 80) {
    return " Very good! Just review a few items to perfect your score.";
  } else if (percentage >= 60) {
    return " Good effort. Review the explanations and try again.";
  } else {
    return " Keep practicing. Review the lesson and retake the quiz.";
  }
}

function resetQuizUI() {
  questionTextEl.textContent = "Click Start Quiz to begin.";
  optionsContainer.innerHTML = "";
  explanationEl.textContent = "";
  explanationEl.classList.remove("show-explanation");
  progressEl.textContent = "";
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.textContent = "Next Question";
  }
}

// ==========================================
// AUTO-INIT ON DOM LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", initVerbalQuiz);

