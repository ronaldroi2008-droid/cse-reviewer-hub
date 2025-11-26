// verbal-quiz.js
// Generic quiz engine for Verbal Ability
// Requires a global object: CURRENT_VERBAL_QUESTIONS with levels:
// { beginner: [...], intermediate: [...], advanced: [...], expert: [...] }

"use strict";

// ==========================================
// STATE
// ==========================================
let currentLevel = "beginner";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let quizFinished = false;

// Detect questions source
let QUESTIONS_SOURCE =
  typeof CURRENT_VERBAL_QUESTIONS !== "undefined"
    ? CURRENT_VERBAL_QUESTIONS
    : null;

// ==========================================
// DOM HELPERS
// ==========================================
function $(selector) {
  return document.querySelector(selector);
}

const topicLabelEl     = $("#quiz-topic-label");
const levelSelectEl    = $("#quiz-level-select");
const questionTextEl   = $("#quiz-question-text");
const optionsContainer = $("#quiz-options");
const explanationEl    = $("#quiz-explanation");
const progressEl       = $("#quiz-progress");
const startBtn         = $("#quiz-start-btn");
const nextBtn          = $("#quiz-next-btn");

// ==========================================
// INITIALIZATION
// ==========================================
function initVerbalQuiz() {
  if (!QUESTIONS_SOURCE) {
    console.warn("verbal-quiz.js: No CURRENT_VERBAL_QUESTIONS found.");
    if (questionTextEl) {
      questionTextEl.textContent = "Quiz data not loaded yet.";
    }
    return;
  }

  // Default level from select (if present)
  currentLevel = levelSelectEl ? levelSelectEl.value || "beginner" : "beginner";
  loadQuestionsForLevel(currentLevel);
  attachQuizEventListeners();
  resetQuizUI();
}

function loadQuestionsForLevel(level) {
  currentLevel = level;

  if (!QUESTIONS_SOURCE[level] || !Array.isArray(QUESTIONS_SOURCE[level])) {
    console.warn(`No questions found for level: ${level}`);
    currentQuestions = [];
    if (questionTextEl) {
      questionTextEl.textContent = "No questions found for this level yet.";
    }
    if (optionsContainer) optionsContainer.innerHTML = "";
    if (explanationEl) explanationEl.textContent = "";
    if (progressEl) progressEl.textContent = "";
    return;
  }

  currentQuestions = [...QUESTIONS_SOURCE[level]];
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
function attachQuizEventListeners() {
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
        // Retake same level
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
    if (questionTextEl) {
      questionTextEl.textContent =
        "No questions available for this level yet.";
    }
    if (optionsContainer) optionsContainer.innerHTML = "";
    if (explanationEl) explanationEl.textContent = "";
    if (progressEl) progressEl.textContent = "";
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

  if (questionTextEl) {
    questionTextEl.textContent = item.question;
  }

  if (optionsContainer) {
    optionsContainer.innerHTML = "";
  }

  if (explanationEl) {
    explanationEl.textContent = "";
    explanationEl.classList.remove("show-explanation");
  }

  // Render options
  item.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.textContent = opt;

    btn.addEventListener("click", () => {
      handleAnswer(opt, item);
    });

    optionsContainer.appendChild(btn);
  });

  if (progressEl) {
    progressEl.textContent = `Question ${
      currentIndex + 1
    } of ${currentQuestions.length}`;
  }

  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.textContent =
      currentIndex === currentQuestions.length - 1
        ? "Finish Quiz"
        : "Next Question";
  }
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

  if (explanationEl) {
    explanationEl.textContent = item.explanation || "";
    explanationEl.classList.add("show-explanation");
  }

  if (nextBtn) {
    nextBtn.disabled = false;
    if (currentIndex === currentQuestions.length - 1) {
      nextBtn.textContent = "Finish Quiz";
    }
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

  const total = currentQuestions.length || 0;
  const percentage = total ? Math.round((score / total) * 100) : 0;

  if (questionTextEl) {
    questionTextEl.textContent = "Quiz Finished!";
  }
  if (optionsContainer) {
    optionsContainer.innerHTML = "";
  }

  if (explanationEl) {
    explanationEl.textContent =
      `You scored ${score} out of ${total} (${percentage}%).` +
      getTeacherComment(percentage);
    explanationEl.classList.add("show-explanation");
  }

  if (progressEl) {
    progressEl.textContent =
      "Great job! You can try another level or retake this one.";
  }
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.textContent = "Retake Level";
  }
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
  if (questionTextEl) {
    questionTextEl.textContent = "Click Start Quiz to begin.";
  }
  if (optionsContainer) {
    optionsContainer.innerHTML = "";
  }
  if (explanationEl) {
    explanationEl.textContent = "";
    explanationEl.classList.remove("show-explanation");
  }
  if (progressEl) {
    progressEl.textContent = "";
  }
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.textContent = "Next Question";
  }
}

// ==========================================
// AUTO-INIT
// ==========================================
document.addEventListener("DOMContentLoaded", initVerbalQuiz);

