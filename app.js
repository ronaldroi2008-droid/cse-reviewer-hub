document.addEventListener("DOMContentLoaded", () => {
    // ============================================================
    // 1. INITIALIZATION & SAFETY CHECKS
    // ============================================================
    
    if (typeof VERBAL_TOPICS === 'undefined') {
        alert("Error: verbal.js is not loaded. Please check index.html");
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
    document.querySelectorAll('.mode-tab, .btn-mode').forEach(btn => {
        btn.onclick = (e) => {
            // Update Tab UI
            document.querySelectorAll('.mode-tab, .btn-mode').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const targetMode = e.target.dataset.target || e.target.dataset.mode;
            
            // Hide/Show Sections
            // Assumes index.html uses IDs 'study' and 'practice' or 'viewStudy' and 'viewQuiz'
            if (document.getElementById('viewStudy')) {
                document.getElementById('viewStudy').classList.add('hidden');
                document.getElementById('viewQuiz').classList.add('hidden');
            }
            if (document.getElementById('study')) document.getElementById('study').classList.remove('active');
            if (document.getElementById('practice')) document.getElementById('practice').classList.remove('active');

            // Switch Logic
            if (targetMode === 'study') {
                if(document.getElementById('study')) document.getElementById('study').classList.add('active');
                if(document.getElementById('viewStudy')) document.getElementById('viewStudy').classList.remove('hidden');
                
                // Hide Quiz Settings in Sidebar
                if(document.getElementById('quizSettings')) document.getElementById('quizSettings').classList.add('hidden');
                if(document.getElementById('topicListContainer')) document.getElementById('topicListContainer').classList.remove('hidden');
                
                renderLesson(currentTopicId);
            } else {
                if(document.getElementById('practice')) document.getElementById('practice').classList.add('active');
                if(document.getElementById('viewQuiz')) document.getElementById('viewQuiz').classList.remove('hidden');
                
                // Show Quiz Settings
                if(document.getElementById('quizSettings')) document.getElementById('quizSettings').classList.remove('hidden');
                // Optional: Hide topic list on mobile to save space
            }
        };
    });

    // Buttons
    const startBtn = document.getElementById('startQuiz') || document.getElementById('btnStart');
    if(startBtn) startBtn.onclick = startQuiz;

    const nextBtn = document.getElementById('btnNext') || document.getElementById('quiz-next');
    if(nextBtn) nextBtn.onclick = nextQuestion;
}

function selectTopic(id, btnElement) {
    currentTopicId = id;
    // Highlight Sidebar Button
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    
    // Sync Dropdown if exists
    const dropdown = document.getElementById('quizTopic') || document.getElementById('practice-topic');
    if(dropdown) dropdown.value = id;

    renderLesson(id);
}

function renderLesson(id) {
    // Get lesson content from verbal.js
    const data = (typeof LESSONS !== 'undefined') ? LESSONS[id] : null;
    const titleEl = document.getElementById('lessonTitle') || document.getElementById('lessonHeader');
    const contentEl = document.getElementById('lessonContent') || document.getElementById('lessonBody');
    
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
    const topicSelect = document.getElementById('quizTopic') || document.getElementById('practice-topic');
    const levelSelect = document.getElementById('quizLevel') || document.getElementById('practice-level');
    const countSelect = document.getElementById('quizCount') || document.getElementById('practice-count');
    
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
    const intro = document.getElementById('quizIntro') || document.getElementById('quizStartMessage');
    const active = document.getElementById('quizActive');
    const results = document.getElementById('quizResults') || document.getElementById('quizResult');

    if(intro) intro.classList.add('hidden');
    if(results) results.classList.add('hidden');
    if(active) active.classList.remove('hidden');

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
    const choicesContainer = document.getElementById('qChoices') || document.getElementById('qOptions');
    if(choicesContainer) {
        choicesContainer.innerHTML = '';
        q.choices.forEach((choice, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-choice'; 
            // Fallback style if CSS class is missing
            if(!btn.className) btn.style.cssText = "display:block; width:100%; padding:10px; margin:5px 0; cursor:pointer; text-align:left; background:#fff; border:1px solid #ccc;";
            
            btn.textContent = choice;
            btn.onclick = () => handleAnswer(btn, choice, idx, q);
            choicesContainer.appendChild(btn);
        });
    }

    // Hide Explanation & Next Button
    const explainEl = document.getElementById('qExplanation') || document.getElementById('qExplain');
    const nextBtn = document.getElementById('btnNext') || document.getElementById('quiz-next');
    if(explainEl) explainEl.classList.add('hidden');
    if(nextBtn) nextBtn.classList.add('hidden');
}

function handleAnswer(btn, selectedText, selectedIdx, q) {
    const nextBtn = document.getElementById('btnNext') || document.getElementById('quiz-next');
    if (!nextBtn.classList.contains('hidden')) return; // Stop double clicks

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
        btn.style.backgroundColor = '#d1fae5'; // Light Green
        btn.style.borderColor = '#10b981';
        quizState.score++;
    } else {
        btn.classList.add('incorrect');
        btn.style.backgroundColor = '#fee2e2'; // Light Red
        btn.style.borderColor = '#ef4444';
        
        // Highlight the correct one
        const allBtns = document.querySelectorAll('.quiz-choice, .quiz-options button');
        allBtns.forEach((b, i) => {
            if ((q.correctIndex !== undefined && i === q.correctIndex) || b.textContent === q.correct) {
                b.classList.add('correct');
                b.style.backgroundColor = '#d1fae5';
            }
        });
    }

    // Show Explanation
    const explainEl = document.getElementById('qExplanation') || document.getElementById('qExplain');
    if(explainEl) {
        explainEl.innerHTML = `<strong>${isCorrect ? "Correct!" : "Incorrect."}</strong><br>${q.exp}`;
        explainEl.classList.remove('hidden');
    }

    // Show Next Button
    if(nextBtn) nextBtn.classList.remove('hidden');
    
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
    const results = document.getElementById('quizResults') || document.getElementById('quizResult');
    const finalScore = document.getElementById('finalScore');

    if(active) active.classList.add('hidden');
    if(results) results.classList.remove('hidden');
    if(finalScore) finalScore.textContent = `You scored ${quizState.score} out of ${quizState.questions.length}`;
}

