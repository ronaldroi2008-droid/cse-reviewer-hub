// VERBAL ABILITY – topic order
const VERBAL_TOPICS = [
  // Grammatical Categories
  { id: "nouns",               label: "Nouns" },
  { id: "gender",              label: "Gender" },
  { id: "grammatical_number",  label: "Grammatical Number" },
  { id: "verbs",               label: "Verbs" },
  { id: "tenses",              label: "Tenses" },
  { id: "pronouns",            label: "Pronouns" },
  { id: "adjectives",          label: "Adjectives" },
  { id: "adverbs",             label: "Adverbs" },
  { id: "prepositions",        label: "Prepositions" },
  { id: "conjunctions",        label: "Conjunctions" },
  { id: "interjections",       label: "Interjections" },
  { id: "articles",            label: "Articles" },
  { id: "subject_verb_agreement", label: "Subject–Verb Agreement" },
  { id: "sentence_construction",  label: "Sentence Construction" },
  { id: "sentence_structure",     label: "Sentence Structure" },

  // Other Verbal Ability topics
  { id: "affixes",             label: "Affixes" },
  { id: "punctuations",        label: "Punctuations" },
  { id: "correct_usage",       label: "Correct Usage" },
  { id: "error_identification",label: "Error Identification" },
  { id: "synonyms",            label: "Synonyms" },
  { id: "antonyms",            label: "Antonyms" },
  { id: "analogy",             label: "Analogy" },
  { id: "paragraph_organization", label: "Paragraph Organization" },
  { id: "reading_comprehension",  label: "Reading Comprehension" }
];

// Basic lesson data for Study Mode
const LESSONS = {
  nouns: {
    title: "Nouns – Basics & Types",
    level: "All levels · CSE Verbal Ability",
    intro:
      "A noun is a word that names a person, place, thing, or idea. In the CSE, many questions test your understanding of noun types, singular and plural forms, countable vs. uncountable nouns, and how nouns behave in sentences.",
    keyPoints: [
      "A noun names a person, place, thing, or idea (teacher, city, book, happiness).",
      "Common nouns name general persons/things; proper nouns name specific persons/places and start with a capital letter.",
      "Concrete nouns are things you can see, touch, taste, hear, or smell; abstract nouns are ideas, feelings, or qualities.",
      "Countable nouns can be counted and have singular and plural forms; uncountable nouns do not normally have a plural form.",
      "Collective nouns refer to groups (team, family, committee). They may take singular or plural verbs depending on meaning.",
      "Nouns can function as the subject, object, complement, or object of a preposition in a sentence."
    ],
    patterns: [
      "Identify which word(s) in a sentence are nouns.",
      "Choose the correct noun type: common vs. proper, concrete vs. abstract, countable vs. uncountable.",
      "Select the correct singular or plural form of a noun in a sentence.",
      "Decide if a collective noun should take a singular or plural verb based on context.",
      "Identify the function of the noun in a sentence (subject, object, complement)."
    ],
    examples: [
      {
        q: "Which of the following is a proper noun?",
        choices: ["city", "teacher", "Manila", "river"],
        answer: "Manila",
        explanation:
          "A proper noun names a specific person, place, or thing and begins with a capital letter. \"Manila\" is a specific city."
      },
      {
        q: "Which noun in the sentence is abstract? \"Her courage inspired the whole team.\"",
        choices: ["courage", "team", "her", "inspired"],
        answer: "courage",
        explanation:
          "\"Courage\" is an abstract noun because it is a quality or idea that cannot be seen or touched."
      },
      {
        q: "Which sentence uses a countable noun correctly?",
        choices: [
          "She gave me many informations.",
          "He bought three books yesterday.",
          "We need a few furnitures.",
          "She has much friends at work."
        ],
        answer: "He bought three books yesterday.",
        explanation:
          "\"Books\" is a countable noun and can be used with numbers. The other sentences use uncountable or plural nouns incorrectly."
      }
    ],
    quickTips: [
      "Ask: \"Does this word name a person, place, thing, or idea?\" If yes, it is probably a noun.",
      "Check capitalization: proper nouns for specific names usually start with a capital letter.",
      "Remember common uncountable nouns in English (information, advice, furniture, luggage, equipment).",
      "For exam items, read carefully: some options mix adjectives, verbs, and nouns. Focus on the word's function.",
      "Practice spotting the subject and object: they are usually nouns or pronouns in the sentence."
    ]
  },

  gender: {
    title: "Gender of Nouns & Pronouns",
    level: "All levels · CSE Verbal Ability",
    intro:
      "Sa English, nouns and pronouns can show gender: masculine, feminine, common, o neuter. " +
      "Hindi lahat ng nouns may gender, pero lumalabas ito sa CSE kapag may tanong sa pronoun agreement, professions, at sexist / biased wording.",
    keyPoints: [
      "Masculine – male: father, king, prince, waiter, he, him.",
      "Feminine – female: mother, queen, princess, waitress, she, her.",
      "Common – puwedeng lalaki o babae: teacher, doctor, nurse, student, child.",
      "Neuter – walang gender (things, ideas, places): table, book, company, democracy.",
      "Pronoun agreement – dapat tugma ang gender at number ng pronoun sa noun/antecedent.",
      "Modern usage – madalas ginagamit ang they / their para maging gender-neutral."
    ],
    patterns: [
      "Identify the gender of a given noun (masculine, feminine, common, neuter).",
      "Choose the correct pronoun that agrees with the noun in number and gender.",
      "Spot the sentence with incorrect or awkward gender usage.",
      "Rewrite or choose the most gender-fair / neutral sentence."
    ],
    examples: [
      {
        q: "Which noun is common gender?",
        choices: ["King", "Actress", "Teacher", "Mother"],
        answer: "Teacher",
        explanation:
          "Common gender ang teacher dahil puwedeng tumukoy sa lalaki o babae."
      },
      {
        q: "The manager said that ____ would review the report later.",
        choices: ["he", "she", "he or she", "they"],
        answer: "he or she / they (depending on style)",
        explanation:
          "Sa exam, \"he or she\" ang traditional gender-balanced answer. Sa modern English, \"they\" is also widely accepted as a singular, gender-neutral pronoun."
      }
    ],
    quickTips: [
      "Kapag hindi alam ang gender, isipin agad: common (teacher, student, official) or use gender-neutral pronouns.",
      "Basahin nang mabagal: tugma ba ang pronoun sa noun sa gender at number?",
      "Sa profession words (doctor, engineer, nurse), iwasan ang assumption na male/female agad.",
      "Pag may choice na sexist (e.g., \"Every nurse must bring her...\"), hanapin ang mas neutral na sentence."
    ]
  }
};

// Question banks for practice mode
const GENDER_QUESTIONS = {
  beginner: [
    {
      question: "Which noun is feminine gender?",
      choices: ["King", "Prince", "Actress", "Waiter"],
      correctIndex: 2,
      explanation: "Actress is feminine gender as it refers to a female performer."
    },
    {
      question: "The doctor said that ____ would call later.",
      choices: ["he", "she", "he or she", "they"],
      correctIndex: 2,
      explanation: "When gender is unknown, 'he or she' is the most appropriate choice in formal writing."
    }
  ],
  intermediate: [
    {
      question: "Every student must bring ____ own materials.",
      choices: ["his", "her", "his or her", "their"],
      correctIndex: 2,
      explanation: "When referring to individuals of unknown gender, 'his or her' maintains proper agreement."
    }
  ],
  advanced: [
    {
      question: "Identify the gender-neutral sentence:",
      choices: [
        "Each employee must submit his report by Friday.",
        "Every nurse should complete her training.",
        "A manager should ensure his team is productive.",
        "The applicant should bring their identification."
      ],
      correctIndex: 3,
      explanation: "Using 'their' as a singular gender-neutral pronoun is widely accepted in modern English."
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  // ========== Mode tabs ==========
  const modeTabs = document.querySelectorAll(".mode-tab");
  const modeSections = document.querySelectorAll(".mode-section");

  modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const mode = tab.dataset.mode; // "study" or "practice"

      modeTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      modeSections.forEach((section) => {
        section.classList.toggle("active", section.id === `mode-${mode}`);
      });
    });
  });

  // ========== Study Mode: Dynamic Topics Sidebar ==========
  const topicsListEl = document.getElementById("topicsList");
  const lessonTitleEl = document.getElementById("lesson-title");
  const lessonMetaEl = document.getElementById("lesson-meta");
  const lessonContentEl = document.getElementById("lesson-content");

  function renderTopicsSidebar(activeId = "nouns") {
    if (!topicsListEl) return;
    
    topicsListEl.innerHTML = "";
    VERBAL_TOPICS.forEach(t => {
      const btn = document.createElement("button");
      btn.className = "topic-btn" + (t.id === activeId ? " active" : "");
      btn.textContent = t.label;
      btn.dataset.topic = t.id;
      btn.addEventListener("click", () => {
        renderTopicsSidebar(t.id);
        renderLesson(t.id);
      });
      topicsListEl.appendChild(btn);
    });
  }

  function renderLesson(topicKey) {
    const data = LESSONS[topicKey];

    if (!data) {
      lessonTitleEl.textContent = "Coming soon";
      lessonMetaEl.textContent = "Lesson content for this topic will be added in the next update.";
      lessonContentEl.innerHTML = "<p>For now, focus on available lessons and drill the practice questions.</p>";
      return;
    }

    lessonTitleEl.textContent = data.title || "Lesson";
    lessonMetaEl.textContent = data.level || "";

    let html = "";

    if (data.intro) {
      html += `
        <div class="lesson-section">
          <p>${data.intro}</p>
        </div>
      `;
    }

    if (data.keyPoints && data.keyPoints.length) {
      html += `
        <div class="lesson-section">
          <div class="lesson-section-title">Key Points</div>
          <ul>
            ${data.keyPoints.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    if (data.patterns && data.patterns.length) {
      html += `
        <div class="lesson-section">
          <div class="lesson-section-title">How it appears in the CSE</div>
          <ul>
            ${data.patterns.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    if (data.examples && data.examples.length) {
      html += `
        <div class="lesson-section">
          <div class="lesson-section-title">Sample Questions</div>
          ${data.examples
            .map(
              (ex) => `
            <div class="lesson-example">
              <strong>Question:</strong><br>${ex.q}<br><br>
              ${
                ex.choices && ex.choices.length
                  ? `<strong>Choices:</strong><br>${ex.choices.join("<br>")}<br><br>`
                  : ""
              }
              <strong>Answer:</strong> ${ex.answer}<br>
              <strong>Explanation:</strong> ${ex.explanation}
            </div>
          `
            )
            .join("")}
        </div>
      `;
    }

    if (data.quickTips && data.quickTips.length) {
      html += `
        <div class="lesson-section">
          <div class="lesson-section-title">Quick Tips</div>
          <ul>
            ${data.quickTips.map((t) => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    lessonContentEl.innerHTML = html;
  }

  // Initialize Study Mode
  renderTopicsSidebar("nouns");
  renderLesson("nouns");

  // ========== Practice Mode: quiz engine ==========
  const practiceTopicEl = document.getElementById("practice-topic");
  const practiceLevelEl = document.getElementById("practice-level");
  const practiceCountEl = document.getElementById("practice-count");
  const timerModeEl = document.getElementById("timer-mode");
  const practiceWeakEl = document.getElementById("practice-weak");
  const startQuizBtn = document.getElementById("start-quiz-btn");

  const quizProgressEl = document.getElementById("quiz-progress");
  const quizTimerEl = document.getElementById("quiz-timer");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizChoicesEl = document.getElementById("quiz-choices");
  const quizExplanationEl = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next");
  const quizOutputEl = document.getElementById("quiz-output");
  const quizProgressFillEl = document.getElementById("quiz-progress-fill");

  // Populate practice topic dropdown
  if (practiceTopicEl) {
    VERBAL_TOPICS.forEach(topic => {
      const option = document.createElement("option");
      option.value = topic.id;
      option.textContent = topic.label;
      practiceTopicEl.appendChild(option);
    });
  }

  let quizState = null;

  function labelForTopic(topic) {
    const found = VERBAL_TOPICS.find(t => t.id === topic);
    return found ? found.label : topic;
  }

  function labelForLevel(level) {
    switch (level) {
      case "beginner":
        return "Beginner";
      case "intermediate":
        return "Intermediate";
      case "advanced":
        return "Advanced";
      case "super":
        return "Super / Hard";
      default:
        return level;
    }
  }

  function getQuestionBank(topic) {
    if (topic === "gender") return GENDER_QUESTIONS;
    // Add more question banks as they become available
    return null;
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
    if (!quizState) {
      quizProgressFillEl.style.width = "0%";
      return;
    }
    let percent;
    if (typeof percentOverride === "number") {
      percent = percentOverride;
    } else {
      const total = quizState.questions.length || 1;
      percent = (quizState.currentIndex / total) * 100;
    }
    quizProgressFillEl.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }

  function updateStatsPanel() {
    if (!quizState) return;
    const total = quizState.questions.length;
    const correct = quizState.correct;
    const incorrect = quizState.incorrect;
    const unanswered = total - correct - incorrect;

    quizOutputEl.innerHTML = `
      <div class="stats-panel">
        <div class="stat-item"><span>Correct</span><span>${correct}</span></div>
        <div class="stat-item"><span>Incorrect</span><span>${incorrect}</span></div>
        <div class="stat-item"><span>Unanswered</span><span>${unanswered}</span></div>
      </div>
    `;
  }

  function clearTimer() {
    if (quizState && quizState.timerId) {
      clearInterval(quizState.timerId);
      quizState.timerId = null;
    }
  }

  function startTimerForQuestion() {
    clearTimer();
    if (!quizState) return;

    const seconds = parseInt(quizState.timerMode, 10);
    if (!seconds) {
      quizTimerEl.textContent = "Time left: --";
      return;
    }

    quizState.timeLeft = seconds;
    quizTimerEl.textContent = `Time left: ${quizState.timeLeft}s`;

    quizState.timerId = setInterval(() => {
      quizState.timeLeft -= 1;
      if (quizState.timeLeft <= 0) {
        clearTimer();
        quizTimerEl.textContent = "Time left: 0s";
        handleTimeout();
      } else {
        quizTimerEl.textContent = `Time left: ${quizState.timeLeft}s`;
      }
    }, 1000);
  }

  function showExplanation(text) {
    if (!text) {
      quizExplanationEl.classList.add("hide");
      quizExplanationEl.textContent = "";
      return;
    }
    quizExplanationEl.textContent = text;
    quizExplanationEl.classList.remove("hide");
  }

  function showQuestion() {
    if (!quizState) return;

    const q = quizState.questions[quizState.currentIndex];
    quizState.answeredCurrent = false;

    quizProgressEl.textContent = `Question ${
      quizState.currentIndex + 1
    } of ${quizState.questions.length}`;
    updateProgressFill();

    quizQuestionEl.textContent = q.question;
    quizChoicesEl.innerHTML = "";
    showExplanation("");
    quizNextBtn.classList.add("hide");

    q.choices.forEach((choiceText, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-choice";
      btn.textContent = choiceText;
      btn.addEventListener("click", () => handleChoice(index));
      quizChoicesEl.appendChild(btn);
    });

    startTimerForQuestion();
  }

  function lockChoices() {
    const buttons = quizChoicesEl.querySelectorAll(".quiz-choice");
    buttons.forEach((b) => {
      b.disabled = true;
    });
    return buttons;
  }

  function handleChoice(selectedIndex) {
    if (!quizState || quizState.answeredCurrent) return;
    quizState.answeredCurrent = true;
    clearTimer();

    const q = quizState.questions[quizState.currentIndex];
    const buttons = lockChoices();

    if (selectedIndex === q.correctIndex) {
      quizState.correct += 1;
      if (buttons[selectedIndex]) {
        buttons[selectedIndex].classList.add("correct");
      }
    } else {
      quizState.incorrect += 1;
      if (buttons[selectedIndex]) {
        buttons[selectedIndex].classList.add("incorrect");
      }
      if (buttons[q.correctIndex]) {
        buttons[q.correctIndex].classList.add("correct");
      }
    }

    if (q.explanation) {
      showExplanation(q.explanation);
    }

    quizNextBtn.textContent =
      quizState.currentIndex === quizState.questions.length - 1
        ? "Finish quiz"
        : "Next question";
    quizNextBtn.classList.remove("hide");

    updateStatsPanel();
  }

  function handleTimeout() {
    if (!quizState || quizState.answeredCurrent) return;
    quizState.answeredCurrent = true;

    const q = quizState.questions[quizState.currentIndex];
    const buttons = lockChoices();

    quizState.incorrect += 1;

    if (buttons[q.correctIndex]) {
      buttons[q.correctIndex].classList.add("correct");
    }

    const text = q.explanation
      ? "Time is up. " + q.explanation
      : "Time is up for this item.";
    showExplanation(text);

    quizNextBtn.textContent =
      quizState.currentIndex === quizState.questions.length - 1
        ? "Finish quiz"
        : "Next question";
    quizNextBtn.classList.remove("hide");

    updateStatsPanel();
  }

  function finishQuiz() {
    if (!quizState) return;
    clearTimer();

    const total = quizState.questions.length;
    const correct = quizState.correct;
    const incorrect = quizState.incorrect;
    const unanswered = total - correct - incorrect;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    quizProgressEl.textContent = "Quiz finished";
    updateProgressFill(100);

    quizQuestionEl.innerHTML = `
      <div class="quiz-results-heading">
        <div class="score-main">${correct} / ${total} correct</div>
        <div class="score-sub">${percent}%</div>
        <div class="score-topic">
          ${labelForTopic(quizState.topic)} · ${labelForLevel(quizState.level)}
        </div>
      </div>
    `;
    quizChoicesEl.innerHTML = "";
    quizNextBtn.classList.add("hide");

    quizOutputEl.innerHTML = `
      <div class="stats-panel">
        <div class="stat-item"><span>Correct</span><span>${correct}</span></div>
        <div class="stat-item"><span>Incorrect</span><span>${incorrect}</span></div>
        <div class="stat-item"><span>Unanswered</span><span>${unanswered}</span></div>
        ${
          quizState.weakPoints
            ? `<div class="stat-item"><span>Focus</span><span>${quizState.weakPoints}</span></div>`
            : ""
        }
      </div>
      <button id="restart-quiz-btn" class="btn-secondary full-width restart-btn">
        ↺ Take another quiz
      </button>
    `;

    showExplanation(
      percent >= 85
        ? "Solid! Handa ka na sa mas mahirap na items. Pwede ka nang mag-move on sa ibang topic."
        : percent >= 70
        ? "Good score! Balikan ang mga maling items at ulitin mo ang quiz."
        : "Ok lang yan. Balik ka sa Study Mode, basahin ang lesson, then ulitin ang practice."
    );

    const restartBtn = document.getElementById("restart-quiz-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        quizState = null;
        startQuizBtn.disabled = false;
        practiceTopicEl.disabled = false;
        practiceLevelEl.disabled = false;
        practiceCountEl.disabled = false;

        quizQuestionEl.innerHTML =
          'Ready when you are. Set up your quiz on the left and press <strong>"Start practice quiz"</strong>.';
        quizChoicesEl.innerHTML = "";
        showExplanation("");
        quizNextBtn.classList.add("hide");
        quizProgressEl.textContent = "Question 0 of 0";
        quizTimerEl.textContent = "Time left: --";
        updateProgressFill(0);

        quizOutputEl.innerHTML = `
          <div class="stats-panel">
            <div class="stat-item"><span>Correct</span><span>0</span></div>
            <div class="stat-item"><span>Incorrect</span><span>0</span></div>
            <div class="stat-item"><span>Unanswered</span><span>0</span></div>
          </div>
        `;
      });
    }
  }

  quizNextBtn.addEventListener("click", () => {
    if (!quizState) return;
    if (quizState.currentIndex < quizState.questions.length - 1) {
      quizState.currentIndex += 1;
      showQuestion();
    } else {
      finishQuiz();
    }
  });

  startQuizBtn.addEventListener("click", () => {
    const topic = practiceTopicEl.value;
    const level = practiceLevelEl.value;
    const count = parseInt(practiceCountEl.value, 10) || 10;
    const timerMode = timerModeEl.value; // "off" or seconds
    const weakPoints = practiceWeakEl.value.trim();

    const bank = getQuestionBank(topic);
    if (!bank) {
      quizOutputEl.textContent =
        "Question bank for this topic is not ready yet.";
      return;
    }

    const pool = bank[level] || [];
    if (!pool.length) {
      quizOutputEl.textContent =
        "Wala pang questions sa level na ito para sa napiling topic.";
      return;
    }

    const items = shuffleArray(pool).slice(0, Math.min(count, pool.length));

    quizState = {
      topic,
      level,
      questions: items,
      currentIndex: 0,
      correct: 0,
      incorrect: 0,
      timerMode,
      timerId: null,
      timeLeft: null,
      answeredCurrent: false,
      weakPoints
    };

    startQuizBtn.disabled = true;
    practiceTopicEl.disabled = true;
    practiceLevelEl.disabled = true;
    practiceCountEl.disabled = true;

    quizProgressEl.textContent = `Question 1 of ${items.length}`;
    quizTimerEl.textContent = "Time left: --";
    updateProgressFill(0);
    updateStatsPanel();
    showQuestion();
  });
});
