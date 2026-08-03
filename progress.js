console.log("progress.js loaded");

// ==========================================
// PROGRESS ENGINE v2.1
// ==========================================

// ==========================================
// DUPLICATE PROTECTION
// ==========================================
let isSavingProgress = false;

async function saveQuizAttempt({
    subject,
    topic,
    level,
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    durationMinutes = 0,
    wrongQuestions = []
}) {

    console.log("🚀 saveQuizAttempt() called");
    console.log("Wrong questions received:", wrongQuestions.length);

    // Guard against duplicate saves
    if (isSavingProgress) {
        console.warn("Save in progress, ignoring duplicate request.");
        return false;
    }

    isSavingProgress = true;

    try {
        const { data: { session } } = await supabaseClient.auth.getSession();

        console.log("Session:", session);

        if (!session) {
            console.warn("No active session.");
            return false;
        }

        const userId = session.user.id;
        const scorePercent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

        // ✅ Ensure wrongQuestions is an array
        const wrongQuestionsArray = Array.isArray(wrongQuestions) ? wrongQuestions : [];
        
        // ✅ Extract IDs properly
        const wrongQuestionIds = wrongQuestionsArray.map(q => {
            if (q.id !== undefined) return String(q.id);
            if (q.question) return String(q.question);
            return String(Math.random());
        });

        // ======================================
        // SAVE QUIZ ATTEMPT - WITH WRONG QUESTIONS
        // ======================================
        const { data, error } = await supabaseClient
            .from("quiz_attempts")
            .insert({
                user_id: userId,
                subject,
                topic,
                level,
                total_questions: totalQuestions,
                correct_answers: correctAnswers,
                wrong_answers: wrongAnswers,
                score_percent: scorePercent,
                duration_minutes: durationMinutes,
                completed_at: new Date().toISOString(),
                wrong_question_ids: wrongQuestionIds,
                wrong_questions_data: wrongQuestionsArray
            })
            .select();

        console.log("Insert Result:", data);
        console.log("Insert Error:", error);
        console.log("Wrong questions saved:", wrongQuestionsArray.length);

        if (error) {
            console.error("Quiz attempt failed:", error);
            return false;
        }

        console.log("Quiz attempt saved.");

        // ======================================
        // UPDATE SUMMARY WITH ERROR CHECK
        // ======================================
        const updated = await updateOverallProgress({
            userId,
            subject,
            topic,
            level,
            totalQuestions,
            correctAnswers,
            wrongAnswers,
            durationMinutes
        });

        if (!updated) {
            console.error("Progress update failed.");
            return false;
        }

        // Dispatch event for real-time dashboard updates
        try {
            document.dispatchEvent(new CustomEvent('progressUpdated', {
                detail: { subject, totalQuestions, correctAnswers, wrongAnswers }
            }));
        } catch (e) {
            // Ignore if document is not available
        }

        return true;
    } catch (err) {
        console.error(err);
        return false;
    } finally {
        isSavingProgress = false;
    }
}

// ==========================================
// UPDATE OVERALL PROGRESS
// ==========================================

async function updateOverallProgress({
    userId,
    subject,
    topic,
    level,
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    durationMinutes
}) {
    try {
        const { data, error } = await supabaseClient
            .from("user_progress")
            .select("*")
            .eq("user_id", userId)
            .eq("subject", subject)
            .eq("topic", topic)
            .eq("level", level)
            .maybeSingle();

        if (error) {
            console.error("Error fetching progress:", error);
            return false;
        }

        // ======================================
        // INSERT NEW RECORD
        // ======================================
        if (!data) {
            const { error: insertError } = await supabaseClient
                .from("user_progress")
                .insert({
                    user_id: userId,
                    subject,
                    topic,
                    level,
                    questions_answered: totalQuestions,
                    correct_answers: correctAnswers,
                    wrong_answers: wrongAnswers,
                    study_minutes: durationMinutes,
                    last_studied: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                });

            if (insertError) {
                console.error("Error creating progress:", insertError);
                return false;
            }

            console.log("Progress created.");
            return true;
        }

        // ======================================
        // UPDATE EXISTING RECORD
        // ======================================
        const { error: updateError } = await supabaseClient
            .from("user_progress")
            .update({
                questions_answered: data.questions_answered + totalQuestions,
                correct_answers: data.correct_answers + correctAnswers,
                wrong_answers: data.wrong_answers + wrongAnswers,
                study_minutes: data.study_minutes + durationMinutes,
                last_studied: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq("id", data.id);

        if (updateError) {
            console.error("Error updating progress:", updateError);
            return false;
        }

        console.log("Overall progress updated.");
        return true;
    } catch (err) {
        console.error("Error in updateOverallProgress:", err);
        return false;
    }
}

// ==========================================
// GET OVERALL STATS
// ==========================================

async function getOverallStats() {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) return null;

        const { data, error } = await supabaseClient
            .from("user_progress")
            .select("*")
            .eq("user_id", session.user.id);

        if (error) {
            console.error("Error fetching stats:", error);
            return null;
        }

        let questions = 0;
        let correct = 0;
        let wrong = 0;
        let minutes = 0;

        data.forEach(row => {
            questions += row.questions_answered || 0;
            correct += row.correct_answers || 0;
            wrong += row.wrong_answers || 0;
            minutes += row.study_minutes || 0;
        });

        // Calculate streak from recent attempts
        const streak = await getCurrentStreak(session.user.id);

        return {
            totalQuestions: questions,
            correctAnswers: correct,
            wrongAnswers: wrong,
            accuracy: questions > 0 ? Math.round((correct / questions) * 100) : 0,
            studyMinutes: minutes,
            studyHours: (minutes / 60).toFixed(1),
            streak: streak || 0
        };
    } catch (err) {
        console.error("Error in getOverallStats:", err);
        return null;
    }
}

// ==========================================
// GET CURRENT STREAK
// ==========================================

async function getCurrentStreak(userId) {
    try {
        const { data, error } = await supabaseClient
            .from("quiz_attempts")
            .select("completed_at")
            .eq("user_id", userId)
            .order("completed_at", { ascending: false });

        if (error || !data || data.length === 0) {
            return 0;
        }

        let streak = 0;
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        for (let attempt of data) {
            const attemptDate = new Date(attempt.completed_at);
            attemptDate.setHours(0, 0, 0, 0);
            
            const diffDays = Math.floor((currentDate - attemptDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays === streak) {
                streak++;
            } else if (diffDays > streak) {
                break;
            }
        }

        return streak;
    } catch (err) {
        console.error("Error calculating streak:", err);
        return 0;
    }
}

// ==========================================
// GET SUBJECT STATS (for Level 2 Dashboard)
// ==========================================

async function getSubjectStatsFromDB(subject) {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) return null;

        const { data, error } = await supabaseClient
            .from("user_progress")
            .select("*")
            .eq("user_id", session.user.id)
            .eq("subject", subject);

        if (error) {
            console.error(`Error fetching ${subject} stats:`, error);
            return null;
        }

        let totalQ = 0, correct = 0, wrong = 0, minutes = 0;
        data.forEach(row => {
            totalQ += row.questions_answered || 0;
            correct += row.correct_answers || 0;
            wrong += row.wrong_answers || 0;
            minutes += row.study_minutes || 0;
        });

        return {
            subject,
            totalQuestions: totalQ,
            correctAnswers: correct,
            wrongAnswers: wrong,
            accuracy: totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0,
            studyMinutes: minutes,
            studyHours: (minutes / 60).toFixed(1)
        };
    } catch (error) {
        console.error(`Error in getSubjectStatsFromDB for ${subject}:`, error);
        return null;
    }
}

// ==========================================
// GET SUBJECT STATS (Legacy - returns array)
// ==========================================

async function getSubjectStats(subject) {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) return [];

        const { data, error } = await supabaseClient
            .from("user_progress")
            .select("*")
            .eq("user_id", session.user.id)
            .eq("subject", subject);

        if (error) {
            console.error("Error fetching subject stats:", error);
            return [];
        }

        return data || [];
    } catch (err) {
        console.error("Error in getSubjectStats:", err);
        return [];
    }
}

// ==========================================
// GET RECENT ATTEMPTS
// ==========================================

async function getRecentAttempts(limit = 5) {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) return [];

        const { data, error } = await supabaseClient
            .from("quiz_attempts")
            .select("*")
            .eq("user_id", session.user.id)
            .order("completed_at", { ascending: false })
            .limit(limit);

        if (error) {
            console.error("Error fetching recent attempts:", error);
            return [];
        }

        return data || [];
    } catch (err) {
        console.error("Error in getRecentAttempts:", err);
        return [];
    }
}

// ==========================================
// GET CONTINUE LEARNING
// ==========================================

async function getContinueLearning() {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) return null;

        const { data, error } = await supabaseClient
            .from("quiz_attempts")
            .select("*")
            .eq("user_id", session.user.id)
            .order("completed_at", { ascending: false })
            .limit(1)
            .maybeSingle();

        if (error) {
            console.error("Error fetching continue learning:", error);
            return null;
        }

        return data;
    } catch (err) {
        console.error("Error in getContinueLearning:", err);
        return null;
    }
}

// ==========================================
// RESET USER PROGRESS (Improved)
// ==========================================

async function resetProgress() {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) {
            console.warn("No active session.");
            return false;
        }

        const userId = session.user.id;
        let hasError = false;

        // Delete progress records
        const progressResult = await supabaseClient
            .from("user_progress")
            .delete()
            .eq("user_id", userId);

        if (progressResult.error) {
            console.error("Error deleting progress:", progressResult.error);
            hasError = true;
        }

        // Delete quiz attempts
        const attemptsResult = await supabaseClient
            .from("quiz_attempts")
            .delete()
            .eq("user_id", userId);

        if (attemptsResult.error) {
            console.error("Error deleting quiz attempts:", attemptsResult.error);
            hasError = true;
        }

        if (hasError) {
            console.warn("Progress reset completed with errors.");
            return false;
        }

        console.log("Progress reset completed successfully.");
        return true;
    } catch (err) {
        console.error("Error in resetProgress:", err);
        return false;
    }
}

// ==========================================
// GET WEEKLY PROGRESS (New Feature)
// ==========================================

async function getWeeklyProgress() {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) return null;

        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const { data, error } = await supabaseClient
            .from("quiz_attempts")
            .select("*")
            .eq("user_id", session.user.id)
            .gte("completed_at", sevenDaysAgo.toISOString())
            .order("completed_at", { ascending: false });

        if (error) {
            console.error("Error fetching weekly progress:", error);
            return null;
        }

        return data || [];
    } catch (err) {
        console.error("Error in getWeeklyProgress:", err);
        return null;
    }
}

// ==========================================
// GET ALL SUBJECTS STATS (For Level 2 Dashboard)
// ==========================================

async function getAllSubjectsStats() {
    try {
        const subjects = ['Verbal', 'Numerical', 'Analytical', 'Clerical', 'General'];
        const results = {};
        
        for (const subject of subjects) {
            const stats = await getSubjectStatsFromDB(subject);
            results[subject] = stats;
        }
        
        return results;
    } catch (error) {
        console.error("Error in getAllSubjectsStats:", error);
        return null;
    }
}

// ==========================================
// FIX WRONG QUESTIONS DATA (Run once to fix existing data)
// ==========================================

async function fixWrongQuestionsData() {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) return;

        const { data, error } = await supabaseClient
            .from("quiz_attempts")
            .select("*")
            .eq("user_id", session.user.id)
            .not('wrong_questions_data', 'is', null)
            .order('completed_at', { ascending: false });

        if (error) {
            console.error("Error fetching attempts to fix:", error);
            return;
        }

        for (const attempt of data) {
            let fixedData = attempt.wrong_questions_data;
            
            // If it's a string, try to parse it
            if (typeof fixedData === 'string') {
                try {
                    fixedData = JSON.parse(fixedData);
                } catch (e) {
                    console.log(`Skipping attempt ${attempt.id} - invalid JSON`);
                    continue;
                }
            }
            
            // If it's not an array, skip
            if (!Array.isArray(fixedData)) {
                console.log(`Skipping attempt ${attempt.id} - not an array`);
                continue;
            }
            
            // Update with proper array
            const { error: updateError } = await supabaseClient
                .from("quiz_attempts")
                .update({
                    wrong_questions_data: fixedData,
                    wrong_question_ids: fixedData.map(q => String(q.id || q.question))
                })
                .eq("id", attempt.id);
                
            if (updateError) {
                console.error(`Error fixing attempt ${attempt.id}:`, updateError);
            } else {
                console.log(`✅ Fixed attempt ${attempt.id}`);
            }
        }
        
        console.log("✅ Finished fixing wrong questions data");
    } catch (error) {
        console.error("Error in fixWrongQuestionsData:", error);
    }
}

// ==========================================
// EXPORT FUNCTIONS (if using modules)
// ==========================================

console.log("✅ Progress Engine v2.1 Ready");