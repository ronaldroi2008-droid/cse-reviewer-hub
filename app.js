// app.js
document.addEventListener("DOMContentLoaded", () => {
    // ============================================================
    // 1. INITIALIZATION & SAFETY CHECKS
    // ============================================================
    
    if (typeof VERBAL_TOPICS === 'undefined') {
        console.error("Error: verbal.js is not loaded. Please check index.html");
        return;
    }

    const topicListEl = document.getElementById("topicList");
    const practiceTopicEl = document.getElementById("quizTopic"); 
    
    // Reset UI Lists
    if (topicListEl) topicListEl.innerHTML = "";
    if (practiceTopicEl) practiceTopicEl.innerHTML = "";

    // Populate Sidebar & Dropdown from VERBAL_TOPICS (from verbal.js)
    VERBAL_TOPICS.forEach((t) => {
        // Sidebar List Item
        if (topicListEl) {
            const li = document.createElement("li");
            li.className = "topic-item";
            li.innerHTML = `<button class="topic-btn" data-id="${t.id}">${t.label}</button>`;
            // Click event to load lesson
            li.querySelector("button").onclick = (e) => selectTopic(t.id, e.target);
            topicListEl.appendChild(li);
        }

        // Practice Dropdown Option
        if (practiceTopicEl) {
            const opt = document.createElement("option");
            opt.value = t.id;
            opt.textContent = t.label;
            practiceTopicEl.appendChild(opt);
        }
    });

    // Default Selection (First Topic)
    if (topicListEl && topicListEl.firstChild) {
        const firstBtn = topicListEl.firstChild.querySelector("button");
        if (firstBtn) selectTopic(VERBAL_TOPICS[0].id, firstBtn);
    }

    setupEventListeners();
});

// ============================================================
// 2. GLOBAL STATE
// ============================================================
let currentTopicId = 'nouns'; // Default
let quizState = {
    questions: [],
    index: 0,
    score: 0,
    timerId: null
};

// ============================================================
// 3. SMART VARIABLE FINDER (THE FIX)
// ============================================================

/**
 * Tries to find the variable name containing questions for a topic.
 * It checks window[NAME] for various naming patterns.
 */
function getQuestionBank(id) {
    // Normalize ID (e.g., "subject-verb-agreement" -> "SUBJECT_VERB_AGREEMENT")
    const upperID = id.toUpperCase().replace(/-/g, '_'); 
    
    // List of possible variable names to look for in the global scope
    const possibleNames = [
        `${upperID}_QUESTIONS`,             // e.g., NOUNS_QUESTIONS
        `QUESTIONS_${upperID}`,             // e.g., QUESTIONS_NOUNS
        `${id}_QUESTIONS`,                  // e.g., nouns_QUESTIONS
        id                                  // e.g., nouns (unlikely but possible)
    ];

    // Manual Overrides for unique file names
    if (id === 'gender') possibleNames.push('GENDER_NOUNS_QUESTIONS');
    if (id === 'grammatical_number') possibleNames.push('GRAMMATICAL_NUMBER_QUESTIONS');
    if (id === 'tenses') possibleNames.push('TENSES_QUESTIONS', 'VERB_TENSES_QUESTIONS');

    // Search in window object
    for (const name of possibleNames) {
        if (window[name] && typeof window[name] === 'object') {
            return window[name];
        }
    }

    console.warn(`Data not found for topic: ${id}. Checked: ${possibleNames.join(', ')}`);
    return null;
}

// ============================================================
// 4. EVENT LISTENERS & UI LOGIC
// ============================================================

function setupEventListeners() {
    // Mode Switching (Study vs Practice)
    document.querySelectorAll('.mode-tab').forEach(btn => {
        btn.onclick = (e) => {
            // Update Tab UI
            document.querySelectorAll('.mode-tab').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const targetMode = e.target.dataset.target;
            
            // Hide/Show Sections
            document.querySelectorAll('.mode-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            const targetSection = document.getElementById(targetMode);
            if(targetSection) targetSection.classList.add('active');
        };
    });

    // Start Quiz Button
    const startBtn = document.getElementById('btnStart');
    if(startBtn) startBtn.onclick = startQuiz;

    // Next Question Button
    const nextBtn = document.getElementById('btnNext');
    if(nextBtn) nextBtn.onclick = nextQuestion;
}

function selectTopic(id, btnElement) {
    currentTopicId = id;
    // Highlight Sidebar Button
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    
    // Sync Dropdown if exists
    const dropdown = document.getElementById('quizTopic');
    if(dropdown) dropdown.value = id;

    renderLesson(id);
}

function renderLesson(id) {
    // Get lesson content from verbal.js
    const data = (typeof LESSONS !== 'undefined') ? LESSONS[id] : null;
    const titleEl = document.getElementById('lessonTitle');
    const contentEl = document.getElementById('lessonContent');
    
    // Find Label
    const topicObj = VERBAL_TOPICS.find(t => t.id === id);
    const label = topicObj ? topicObj.label : "Topic";

    if (titleEl) titleEl.textContent = data ? data.title : label;
    
    if (contentEl) {
        if (data && data.fullHtml) {
            contentEl.innerHTML = data.fullHtml; 
        } else if (data) {
            // Fallback for simple data structure
            let html = `<p>${data.intro || ''}</p>`;
            if(data.keyPoints) {
                html += `<h3>Key Points</h3><ul>${data.keyPoints.map(k => `<li>${k}</li>`).join('')}</ul>`;
            }
            contentEl.innerHTML = html;
        } else {
            contentEl.innerHTML = `<p>Review notes for <strong>${label}</strong> are available in the Practice Quiz.</p>`;
        }
    }
}

// ============================================================
// 5. QUIZ ENGINE
// ============================================================

function startQuiz() {
    // Get User Selections
    const topicSelect = document.getElementById('quizTopic');
    const levelSelect = document.getElementById('quizLevel');
    const countSelect = document.getElementById('quizCount');
    
    const topicId = topicSelect ? topicSelect.value : currentTopicId;
    const level = levelSelect ? levelSelect.value : 'beginner';
    const count = countSelect ? parseInt(countSelect.value) : 10;

    // 1. Get the Data
    const bank = getQuestionBank(topicId);

    if (!bank) {
        alert(`Data for "${topicId}" not found.\nPlease ensure the JS file for this topic is linked in index.html.`);
        return;
    }

    // 2. Filter by Level
    let pool = [];
    if (level === 'all') {
        // Combine all arrays found in the bank object
        Object.values(bank).forEach(arr => { if(Array.isArray(arr)) pool.push(...arr); });
    } else {
        // Handle 'expert' vs 'super' key mismatch
        pool = bank[level] || [];
        if (level === 'super' && !bank.super && bank.expert) pool = bank.expert;
    }

    if (pool.length === 0) {
        alert(`No questions found for Level: ${level} in Topic: ${topicId}`);
        return;
    }

    // 3. Randomize & Slice
    const questions = [...pool].sort(() => 0.5 - Math.random()).slice(0, count);

    // 4. Init State
    quizState = { questions, index: 0, score: 0 };
    
    // 5. Update UI
    const intro = document.getElementById('quizIntro');
    const active = document.getElementById('quizActive');
    const results = document.getElementById('quizResults');

    if(intro) intro.classList.add('hide');
    if(results) results.classList.add('hide');
    if(active) active.classList.remove('hide');

    renderQuestion();
}

function renderQuestion() {
    const qData = quizState.questions[quizState.index];
    
    // Normalize different data formats (q vs question, options vs choices)
    const q = {
        text: qData.q || qData.question,
        choices: qData.options || qData.choices,
        correct: qData.a || qData.answer,
        correctIndex: qData.correctIndex, 
        exp: qData.exp || qData.explanation || ""
    };

    // Display Text
    const qTextEl = document.getElementById('qText');
    const qProgress = document.getElementById('qProgress');
    const qScore = document.getElementById('qScore');
    const qBar = document.getElementById('qBar');
    
    if(qTextEl) qTextEl.textContent = q.text;
    if(qProgress) qProgress.textContent = `Question ${quizState.index + 1}/${quizState.questions.length}`;
    if(qScore) qScore.textContent = `Score: ${quizState.score}`;
    if(qBar) qBar.style.width = `${((quizState.index) / quizState.questions.length) * 100}%`;

    // Render Buttons
    const choicesContainer = document.getElementById('qChoices');
    if(choicesContainer) {
        choicesContainer.innerHTML = '';
        q.choices.forEach((choice, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-choice'; 
            btn.textContent = choice;
            btn.onclick = () => handleAnswer(btn, choice, idx, q);
            choicesContainer.appendChild(btn);
        });
    }

    // Hide Explanation & Next Button
    const explainEl = document.getElementById('qExplain');
    const nextBtn = document.getElementById('btnNext');
    if(explainEl) explainEl.classList.add('hide');
    if(nextBtn) nextBtn.classList.add('hide');
}

function handleAnswer(btn, selectedText, selectedIdx, q) {
    const nextBtn = document.getElementById('btnNext');
    if (!nextBtn.classList.contains('hide')) return; // Stop double clicks

    let isCorrect = false;
    
    // Check by Index or Text
    if (q.correctIndex !== undefined && q.correctIndex !== null) {
        isCorrect = (selectedIdx === q.correctIndex);
    } else {
        isCorrect = (selectedText === q.correct);
    }

    // Update Styles & Score
    if (isCorrect) {
        btn.classList.add('correct');
        quizState.score++;
    } else {
        btn.classList.add('incorrect');
        
        // Highlight the correct one
        const allBtns = document.querySelectorAll('.quiz-choice');
        allBtns.forEach((b, i) => {
            if ((q.correctIndex !== undefined && i === q.correctIndex) || b.textContent === q.correct) {
                b.classList.add('correct');
            }
        });
    }

    // Show Explanation
    const explainEl = document.getElementById('qExplain');
    if(explainEl) {
        explainEl.innerHTML = `<strong>${isCorrect ? "Correct!" : "Incorrect."}</strong><br>${q.exp}`;
        explainEl.classList.remove('hide');
    }

    // Show Next Button
    if(nextBtn) nextBtn.classList.remove('hide');
    
    // Update Score UI
    const qScore = document.getElementById('qScore');
    if(qScore) qScore.textContent = `Score: ${quizState.score}`;
}

function nextQuestion() {
    quizState.index++;
    if (quizState.index < quizState.questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const active = document.getElementById('quizActive');
    const results = document.getElementById('quizResults');
    const finalScore = document.getElementById('finalScore');

    if(active) active.classList.add('hide');
    if(results) results.classList.remove('hide');
    if(finalScore) finalScore.textContent = `You scored ${quizState.score} out of ${quizState.questions.length}`;
    
    // Optional: Add weak points analysis
    analyzeWeakPoints();
}

function analyzeWeakPoints() {
    const weakPointsContainer = document.getElementById('weakPointsContainer');
    if (!weakPointsContainer) return;

    // Simple weak points analysis - you can enhance this based on your data structure
    let weakPointsHTML = `<h3>Performance Analysis</h3>`;
    
    if (quizState.score >= quizState.questions.length * 0.8) {
        weakPointsHTML += `<p class="wp-good">Excellent! You have a strong understanding of this topic.</p>`;
    } else if (quizState.score >= quizState.questions.length * 0.6) {
        weakPointsHTML += `<p class="wp-good">Good job! You're on the right track.</p>`;
    } else {
        weakPointsHTML += `<p class="wp-bad">Keep practicing! Review the topics you missed.</p>`;
    }
    
    weakPointsHTML += `<p>Completion: ${Math.round((quizState.score / quizState.questions.length) * 100)}%</p>`;
    
    weakPointsContainer.innerHTML = weakPointsHTML;
}

// ============================================================
// 6. UTILITY FUNCTIONS
// ============================================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ============================================================
// 7. INITIALIZATION COMPLETE
// ============================================================

console.log("CSE Reviewer Hub - Verbal Ability App Initialized");
