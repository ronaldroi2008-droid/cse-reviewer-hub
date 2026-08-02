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
    durationMinutes = 0
}) {
    // Guard against duplicate saves
    if (isSavingProgress) {
        console.warn("Save in progress, ignoring duplicate request.");
        return false;
    }

    isSavingProgress = true;

    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) {
            console.warn("No active session.");
            return false;
        }

        const userId = session.user.id;
        const scorePercent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

        // ======================================
        // SAVE QUIZ ATTEMPT
        // ======================================
        const { error } = await supabaseClient
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
                completed_at: new Date().toISOString()
            });

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

        return {
            totalQuestions: questions,
            correctAnswers: correct,
            wrongAnswers: wrong,
            accuracy: questions > 0 ? Math.round((correct / questions) * 100) : 0,
            studyMinutes: minutes,
            studyHours: (minutes / 60).toFixed(1)
        };
    } catch (err) {
        console.error("Error in getOverallStats:", err);
        return null;
    }
}

// ==========================================
// GET SUBJECT STATS
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
// EXPORT FUNCTIONS (if using modules)
// ==========================================

// Uncomment if you're using ES modules
/*
export {
    saveQuizAttempt,
    updateOverallProgress,
    getOverallStats,
    getSubjectStats,
    getRecentAttempts,
    getContinueLearning,
    resetProgress,
    getWeeklyProgress
};
*/

console.log("✅ Progress Engine v2.1 Ready");