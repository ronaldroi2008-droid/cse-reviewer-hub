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
            console.log(`Found question bank: ${name} for topic: ${id}`);
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
// 5. QUIZ ENGINE - FIXED CHOICES RENDERING
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
        Object.values(bank).forEach(arr => { 
            if(Array.isArray(arr)) pool.push(...arr); 
        });
    } else {
        // Handle 'expert' vs 'super' key mismatch
        pool = bank[level] || [];
        if (level === 'super' && !bank.super && bank.expert) pool = bank.expert;
        if (level === 'advanced' && !bank.advanced && bank.expert) pool = bank.expert;
    }

    if (pool.length === 0) {
        alert(`No questions found for Level: ${level} in Topic: ${topicId}`);
        return;
    }

    console.log(`Found ${pool.length} questions for level: ${level}`);

    // 3. Randomize & Slice
    const questions = shuffleArray([...pool]).slice(0, count);

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
    
    console.log("Current question data:", qData); // Debug log

    // NORMALIZE QUESTION DATA - FIXED VERSION
    const q = normalizeQuestionData(qData);

    // Display Text
    const qTextEl = document.getElementById('qText');
    const qProgress = document.getElementById('qProgress');
    const qScore = document.getElementById('qScore');
    const qBar = document.getElementById('qBar');
    
    if(qTextEl) qTextEl.textContent = q.text;
    if(qProgress) qProgress.textContent = `Question ${quizState.index + 1}/${quizState.questions.length}`;
    if(qScore) qScore.textContent = `Score: ${quizState.score}`;
    if(qBar) qBar.style.width = `${((quizState.index) / quizState.questions.length) * 100}%`;

    // Render Choices - FIXED VERSION
    renderChoices(q);
}

function normalizeQuestionData(qData) {
    // Handle different question data structures
    let text = qData.q || qData.question || "Question not available";
    let choices = [];
    let correct = "";
    let correctIndex = null;
    let explanation = qData.exp || qData.explanation || "";

    // CASE 1: Standard format with options array
    if (qData.options && Array.isArray(qData.options)) {
        choices = qData.options;
        correct = qData.a || qData.answer;
        correctIndex = qData.correctIndex;
    }
    // CASE 2: Object with choice keys (a, b, c, d)
    else if (qData.a && qData.b && qData.c && qData.d) {
        choices = [qData.a, qData.b, qData.c, qData.d];
        correct = qData.answer;
    }
    // CASE 3: Array format with numerical keys
    else if (qData[1] && qData[2] && qData[3] && qData[4]) {
        choices = [qData[1], qData[2], qData[3], qData[4]];
        correct = qData.answer;
    }
    // CASE 4: Direct choices array
    else if (qData.choices && Array.isArray(qData.choices)) {
        choices = qData.choices;
        correct = qData.answer || qData.correct;
        correctIndex = qData.correctIndex;
    }
    // CASE 5: Fallback - try to find any array in the object
    else {
        Object.values(qData).forEach(value => {
            if (Array.isArray(value) && value.length >= 2) {
                choices = value;
            }
        });
        correct = qData.answer || qData.correct;
    }

    // If correctIndex is provided but no correct text, get from choices
    if (correctIndex !== null && correctIndex !== undefined && choices[correctIndex]) {
        correct = choices[correctIndex];
    }

    console.log("Normalized question:", { text, choices, correct, correctIndex, explanation });

    return {
        text,
        choices,
        correct,
        correctIndex,
        exp: explanation
    };
}

function renderChoices(q) {
    const choicesContainer = document.getElementById('qChoices');
    if(!choicesContainer) return;

    choicesContainer.innerHTML = '';

    if (!q.choices || q.choices.length === 0) {
        console.error("No choices available for question:", q);
        choicesContainer.innerHTML = '<p>No choices available</p>';
        return;
    }

    console.log(`Rendering ${q.choices.length} choices:`, q.choices);

    q.choices.forEach((choice, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-choice'; 
        btn.textContent = `${String.fromCharCode(65 + idx)}. ${choice}`; // A., B., C., D.
        btn.onclick = () => handleAnswer(btn, choice, idx, q);
        choicesContainer.appendChild(btn);
    });
}

function handleAnswer(btn, selectedText, selectedIdx, q) {
    const nextBtn = document.getElementById('btnNext');
    if (!nextBtn.classList.contains('hide')) return; // Stop double clicks

    let isCorrect = false;
    
    // Check by Index or Text - IMPROVED LOGIC
    if (q.correctIndex !== undefined && q.correctIndex !== null) {
        isCorrect = (selectedIdx === q.correctIndex);
        console.log(`Checking by index: ${selectedIdx} === ${q.correctIndex} = ${isCorrect}`);
    } else {
        // Normalize both texts for comparison (trim, lowercase)
        const normalizedSelected = selectedText.trim().toLowerCase();
        const normalizedCorrect = q.correct.trim().toLowerCase();
        isCorrect = normalizedSelected === normalizedCorrect;
        console.log(`Checking by text: "${normalizedSelected}" === "${normalizedCorrect}" = ${isCorrect}`);
    }

    // Update Styles & Score
    if (isCorrect) {
        btn.classList.add('correct');
        quizState.score++;
        console.log("Correct answer! Score:", quizState.score);
    } else {
        btn.classList.add('incorrect');
        console.log("Incorrect answer");
        
        // Highlight the correct one
        const allBtns = document.querySelectorAll('.quiz-choice');
        allBtns.forEach((b, i) => {
            let isThisCorrect = false;
            
            if (q.correctIndex !== undefined && q.correctIndex !== null) {
                isThisCorrect = (i === q.correctIndex);
            } else {
                const btnText = b.textContent.replace(/^[A-Z]\.\s/, '').trim().toLowerCase();
                const correctText = q.correct.trim().toLowerCase();
                isThisCorrect = btnText === correctText;
            }
            
            if (isThisCorrect) {
                b.classList.add('correct');
            }
        });
    }

    // Show Explanation
    const explainEl = document.getElementById('qExplain');
    if(explainEl) {
        explainEl.innerHTML = `<strong>${isCorrect ? "✓ Correct!" : "✗ Incorrect."}</strong><br>${q.exp || 'No explanation available.'}`;
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
    
    const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
    if(finalScore) finalScore.textContent = `You scored ${quizState.score} out of ${quizState.questions.length} (${percentage}%)`;
    
    // Add weak points analysis
    analyzeWeakPoints();
}

function analyzeWeakPoints() {
    const weakPointsContainer = document.getElementById('weakPointsContainer');
    if (!weakPointsContainer) return;

    const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
    let weakPointsHTML = `<h3 style="margin-bottom: 1rem;">Performance Analysis</h3>`;
    
    if (percentage >= 90) {
        weakPointsHTML += `<p class="wp-good" style="color: var(--success);">🎉 Excellent! You have mastered this topic!</p>`;
    } else if (percentage >= 75) {
        weakPointsHTML += `<p class="wp-good" style="color: var(--success);">👍 Good job! You have a solid understanding.</p>`;
    } else if (percentage >= 60) {
        weakPointsHTML += `<p style="color: var(--warning);">📚 Fair! Keep practicing to improve.</p>`;
    } else {
        weakPointsHTML += `<p class="wp-bad" style="color: var(--error);">💪 Needs work! Review the topics and try again.</p>`;
    }
    
    weakPointsHTML += `
        <div style="margin-top: 1rem; padding: 1rem; background: var(--accent-soft); border-radius: 0.5rem;">
            <p><strong>Completion:</strong> ${percentage}%</p>
            <p><strong>Correct Answers:</strong> ${quizState.score}</p>
            <p><strong>Total Questions:</strong> ${quizState.questions.length}</p>
        </div>
    `;
    
    weakPointsContainer.innerHTML = weakPointsHTML;
}

// ============================================================
// 6. UTILITY FUNCTIONS
// ============================================================

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ============================================================
// 7. DEBUG FUNCTION - Check available question banks
// ============================================================

function debugQuestionBanks() {
    console.log("=== AVAILABLE QUESTION BANKS ===");
    VERBAL_TOPICS.forEach(topic => {
        const bank = getQuestionBank(topic.id);
        if (bank) {
            console.log(`✓ ${topic.id}:`, Object.keys(bank));
        } else {
            console.log(`✗ ${topic.id}: NOT FOUND`);
        }
    });
}

// Run debug on load
setTimeout(debugQuestionBanks, 1000);

// ============================================================
// 8. INITIALIZATION COMPLETE
// ============================================================

console.log("CSE Reviewer Hub - Verbal Ability App Initialized");
