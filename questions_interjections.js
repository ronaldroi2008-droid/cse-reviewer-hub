const INTERJECTION_QUESTIONS = {
  beginner: [
    // 1-10: Basic Emotions (Pain, Surprise, Greeting)
    { question: "You drop a heavy book on your toe. What do you say?", choices: ["Wow!", "Ouch!", "Yum!", "Hooray!"], correctIndex: 1, explanation: "'Ouch!' is the universal interjection for sudden physical pain. 'Wow' is for surprise, and 'Hooray' is for celebration." },
    { question: "You see a huge, beautiful rainbow. What do you say?", choices: ["Yuck!", "Ouch!", "Wow!", "Shh!"], correctIndex: 2, explanation: "'Wow!' expresses amazement or admiration. You wouldn't say 'Yuck' unless you hate rainbows!" },
    { question: "You meet a friend on the street. How do you greet them?", choices: ["Hi!", "Ouch!", "Boo!", "Yuck!"], correctIndex: 0, explanation: "'Hi!' or 'Hello!' are standard greeting interjections. 'Boo' is used to scare someone." },
    { question: "You taste a lemon that is very sour. What might you say?", choices: ["Mmm!", "Yuck!", "Hooray!", "Shh!"], correctIndex: 1, explanation: "'Yuck!' (or sometimes 'Eww') expresses strong distaste or disgust. 'Mmm' is for something delicious." },
    { question: "You want the class to be quiet. What do you say?", choices: ["Hey!", "Shh!", "Wow!", "Yay!"], correctIndex: 1, explanation: "'Shh!' is the sound used to ask for silence. 'Hey' is used to get attention, but not necessarily for silence." },
    { question: "Your team just won the game! What do you shout?", choices: ["Alas!", "Hooray!", "Ouch!", "Phew!"], correctIndex: 1, explanation: "'Hooray!' (or 'Yay!') is a shout of joy and victory. 'Alas' is for sadness." },
    { question: "You almost slipped on the floor but caught yourself. What do you say?", choices: ["Phew!", "Yum!", "Hooray!", "Hello!"], correctIndex: 0, explanation: "'Phew!' expresses relief that something bad (like falling) didn't happen." },
    { question: "You taste a delicious chocolate cake. What do you say?", choices: ["Yuck!", "Mmm!", "Ouch!", "Eww!"], correctIndex: 1, explanation: "'Mmm!' indicates that something tastes or smells very good." },
    { question: "You accidentally bumped into someone. What do you say?", choices: ["Oops!", "Yay!", "Wow!", "Yum!"], correctIndex: 0, explanation: "'Oops!' is used when you make a small mistake or have a minor accident." },
    { question: "Someone jumps out from behind a door to scare you. What do you scream?", choices: ["Ahhh!", "Mmm!", "Phew!", "Shh!"], correctIndex: 0, explanation: "'Ahhh!' is a scream of fear or shock. 'Phew' is what you say *after* you realize you are safe." },

    // 11-20: Context Matching
    { question: "Which interjection is used to get someone's attention?", choices: ["Hey!", "Yum!", "Ouch!", "Alas!"], correctIndex: 0, explanation: "'Hey!' is a common way to call out to someone to get their attention." },
    { question: "Which interjection shows that you are cold?", choices: ["Brrr!", "Mmm!", "Ow!", "Ha!"], correctIndex: 0, explanation: "'Brrr!' is the sound we make when we are shivering from the cold." },
    { question: "Which interjection shows you agree with someone?", choices: ["Uh-huh", "Uh-uh", "Eww", "Ouch"], correctIndex: 0, explanation: "'Uh-huh' (intonation goes up) means Yes/Agreed. 'Uh-uh' means No." },
    { question: "Which interjection shows you are thinking?", choices: ["Um...", "Bang!", "Zap!", "Ouch!"], correctIndex: 0, explanation: "'Um...' or 'Er...' are hesitation sounds we use while thinking of what to say next." },
    { question: "Which interjection expresses laughter?", choices: ["Ha-ha!", "Boo-hoo!", "Ouch!", "Yuck!"], correctIndex: 0, explanation: "'Ha-ha!' represents the sound of laughter. 'Boo-hoo' represents crying." },
    { question: "Which interjection is used when you make a mistake?", choices: ["Whoops!", "Yum!", "Bravo!", "Hush!"], correctIndex: 0, explanation: "'Whoops!' (similar to Oops) acknowledges a minor error." },
    { question: "Which interjection do you use when something smells bad?", choices: ["Eww!", "Mmm!", "Wow!", "Yay!"], correctIndex: 0, explanation: "'Eww!' or 'Phew!' indicates a bad smell or something gross." },
    { question: "Which interjection implies you are tired?", choices: ["Yawn", "Bingo", "Hooray", "Bam"], correctIndex: 0, explanation: "While 'Yawn' is a verb, it is often written as an interjection to show boredom or tiredness." },
    { question: "Which interjection shows you understand something now?", choices: ["Aha!", "Ouch!", "Eww!", "Shh!"], correctIndex: 0, explanation: "'Aha!' is the sound of sudden realization or discovery." },
    { question: "Which interjection is used to scare someone?", choices: ["Boo!", "Hi!", "Ops!", "Ah!"], correctIndex: 0, explanation: "'Boo!' is the classic sound used to startle someone." },

    // 21-30: Sentence Placement (Start of sentence)
    { question: "____! That hurts!", choices: ["Ouch", "Yum", "Yay", "Mmm"], correctIndex: 0, explanation: "Context implies pain." },
    { question: "____, look at that giant bird!", choices: ["Wow", "Ouch", "Yuck", "Boo"], correctIndex: 0, explanation: "Context implies amazement." },
    { question: "____! I passed the test!", choices: ["Yay", "Alas", "Ouch", "Shh"], correctIndex: 0, explanation: "Context implies celebration." },
    { question: "____, be quiet, the baby is sleeping.", choices: ["Shh", "Hey", "Wow", "Bam"], correctIndex: 0, explanation: "Context implies a request for silence." },
    { question: "____! This soup is gross.", choices: ["Yuck", "Mmm", "Wow", "Yay"], correctIndex: 0, explanation: "Context implies disgust." },
    { question: "____, I didn't mean to break it.", choices: ["Oops", "Hooray", "Yum", "Bravo"], correctIndex: 0, explanation: "Context implies an accident." },
    { question: "____! It's freezing out here.", choices: ["Brrr", "Ouch", "Mmm", "Ha"], correctIndex: 0, explanation: "Context implies cold." },
    { question: "____! Don't touch that hot stove!", choices: ["Hey", "Mmm", "Yay", "Yawn"], correctIndex: 0, explanation: "'Hey!' acts as a warning here to get attention quickly." },
    { question: "____, that smells like fresh cookies.", choices: ["Mmm", "Yuck", "Ouch", "Eww"], correctIndex: 0, explanation: "Context implies a good smell." },
    { question: "____! We are going to be late.", choices: ["Oh no", "Yay", "Yum", "Haha"], correctIndex: 0, explanation: "'Oh no' expresses worry or negative realization." },

    // 31-40: Identification
    { question: "Which word in this sentence is an interjection? 'Wow, that is a huge tower!'", choices: ["Wow", "That", "Huge", "Tower"], correctIndex: 0, explanation: "'Wow' is the word expressing emotion and is not grammatically connected to the rest of the sentence." },
    { question: "Identify the interjection: 'Ouch! I bit my tongue.'", choices: ["Ouch", "I", "Bit", "Tongue"], correctIndex: 0, explanation: "'Ouch' is the exclamation of pain." },
    { question: "Identify the interjection: 'Hey, wait for me.'", choices: ["Hey", "Wait", "For", "Me"], correctIndex: 0, explanation: "'Hey' is the call for attention." },
    { question: "Identify the interjection: 'Yuck, I hate broccoli.'", choices: ["Yuck", "I", "Hate", "Broccoli"], correctIndex: 0, explanation: "'Yuck' expresses the emotion of disgust." },
    { question: "Identify the interjection: 'Oops, I dropped my pen.'", choices: ["Oops", "Dropped", "My", "Pen"], correctIndex: 0, explanation: "'Oops' acknowledges the mistake." },
    { question: "Identify the interjection: 'Hurray, it is snowing!'", choices: ["Hurray", "It", "Is", "Snowing"], correctIndex: 0, explanation: "'Hurray' expresses the joy." },
    { question: "Identify the interjection: 'Shh, the movie is starting.'", choices: ["Shh", "Movie", "Is", "Starting"], correctIndex: 0, explanation: "'Shh' is the command for silence." },
    { question: "Identify the interjection: 'Phew, that was close.'", choices: ["Phew", "That", "Was", "Close"], correctIndex: 0, explanation: "'Phew' expresses relief." },
    { question: "Identify the interjection: 'Hi, how are you?'", choices: ["Hi", "How", "Are", "You"], correctIndex: 0, explanation: "'Hi' is the greeting." },
    { question: "Identify the interjection: 'Oh, I see now.'", choices: ["Oh", "I", "See", "Now"], correctIndex: 0, explanation: "'Oh' expresses the realization." },

    // 41-50: True or False Basics
    { question: "Interjections are used to express strong emotion.", choices: ["True", "False"], correctIndex: 0, explanation: "True. That is their primary purpose." },
    { question: "Interjections are grammatically connected to the rest of the sentence.", choices: ["True", "False"], correctIndex: 1, explanation: "False. Interjections can be removed without changing the grammar of the sentence." },
    { question: "'House' is an interjection.", choices: ["True", "False"], correctIndex: 1, explanation: "False. 'House' is a noun." },
    { question: "'Ouch' is a noun.", choices: ["True", "False"], correctIndex: 1, explanation: "False. 'Ouch' is an interjection." },
    { question: "Interjections can stand alone as one word sentences.", choices: ["True", "False"], correctIndex: 0, explanation: "True. Example: 'Wow!'" },
    { question: "You usually use an exclamation mark (!) after a strong interjection.", choices: ["True", "False"], correctIndex: 0, explanation: "True. Exclamation marks show strong feeling." },
    { question: "'Run' is an interjection.", choices: ["True", "False"], correctIndex: 1, explanation: "False. 'Run' is a verb." },
    { question: "'Alas' is a modern slang interjection.", choices: ["True", "False"], correctIndex: 1, explanation: "False. 'Alas' is formal and archaic (old)." },
    { question: "Interjections are more common in speaking than in formal writing.", choices: ["True", "False"], correctIndex: 0, explanation: "True. We use them constantly in conversation." },
    { question: "An interjection always has to be at the start of a sentence.", choices: ["True", "False"], correctIndex: 1, explanation: "False. While common at the start, they can appear in the middle or end (e.g., 'It hurts, ouch!')." }
  ],

  intermediate: [
    // 1-10: Punctuation (Comma vs Exclamation)
    { question: "Choose the correct punctuation for mild emotion: 'Oh__ I see what you mean.'", choices: [".", ",", "!", "?"], correctIndex: 1, explanation: "For mild interjections that flow into the sentence, we use a comma." },
    { question: "Choose the correct punctuation for strong emotion: 'Wow__ You won the lottery!'", choices: [",", ";", "!", "."], correctIndex: 2, explanation: "Strong emotions require an exclamation mark." },
    { question: "Which sentence is punctuated correctly?", choices: ["Hey! come back.", "Hey, come back.", "Hey. Come back.", "Hey? Come back."], correctIndex: 1, explanation: "'Hey' here is a mild call for attention, so a comma is appropriate. If it were a shout of anger, an exclamation mark would be used, but the next letter would be capitalized." },
    { question: "Select the correct punctuation: 'Ouch__ That bee stung me!'", choices: ["!", ",", ".", "?"], correctIndex: 0, explanation: "Sudden pain is usually a strong emotion, so an exclamation mark is best." },
    { question: "Select the correct punctuation: 'Well__ I suppose we can go.'", choices: ["!", ",", "?", "."], correctIndex: 1, explanation: "'Well' here indicates hesitation or a mild transition, so a comma is used." },
    { question: "Select the correct punctuation: 'Help__ I'm falling!'", choices: [",", ".", "!", "?"], correctIndex: 2, explanation: "'Help' is an urgent cry, requiring an exclamation mark." },
    { question: "Select the correct punctuation: 'No__ I don't want to.'", choices: [",", "!", "?", ";"], correctIndex: 0, explanation: "A simple refusal usually takes a comma unless shouted." },
    { question: "Select the correct punctuation: 'Yes__ That is correct.'", choices: [",", "?", "!", ";"], correctIndex: 0, explanation: "Mild agreement uses a comma." },
    { question: "Select the correct punctuation: 'Fire__ Run for your lives!'", choices: [",", ".", "!", "?"], correctIndex: 2, explanation: "'Fire' is a warning of danger, implying strong emotion/volume." },
    { question: "Select the correct punctuation: 'Ah__ now I understand.'", choices: [",", "!", "?", "."], correctIndex: 0, explanation: "A mild realization uses a comma." },

    // 11-20: Nuance and Specific Meanings
    { question: "What does 'Aww' usually express?", choices: ["Anger", "Adoration or Pity", "Fear", "Hunger"], correctIndex: 1, explanation: "'Aww' is used for something cute (adoration) or something sad (pity)." },
    { question: "What does 'Eek' express?", choices: ["Sudden fear (usually of something small)", "Hunger", "Tiredness", "Agreement"], correctIndex: 0, explanation: "'Eek!' is a high-pitched sound often made when seeing a spider or mouse." },
    { question: "What does 'Ugh' express?", choices: ["Joy", "Frustration or Annoyance", "Surprise", "Relief"], correctIndex: 1, explanation: "'Ugh' shows annoyance, frustration, or disgust." },
    { question: "What does 'Uh-oh' express?", choices: ["Victory", "Concern that something is wrong", "Happiness", "Sleepiness"], correctIndex: 1, explanation: "'Uh-oh' signals a mistake or a looming problem." },
    { question: "What does 'Duh' express?", choices: ["Intelligence", "That something is obvious", "Sadness", "Pain"], correctIndex: 1, explanation: "'Duh' is a sarcastic interjection implying the answer was obvious or the person is being silly." },
    { question: "What does 'Psst' express?", choices: ["A secret call for attention", "Anger", "Laughter", "Pain"], correctIndex: 0, explanation: "'Psst' is a sound used to whisper to someone to get their attention discreetly." },
    { question: "What does 'Tut-tut' (tsk-tsk) express?", choices: ["Approval", "Disapproval or Disappointment", "Happiness", "Fear"], correctIndex: 1, explanation: "The clicking sound 'tsk-tsk' shows you disapprove of something." },
    { question: "What does 'Bravo' express?", choices: ["Sadness", "Approval for a performance", "Pain", "Silence"], correctIndex: 1, explanation: "'Bravo' is shouted to praise a performance (like a play or concert)." },
    { question: "What does 'Gee' express?", choices: ["Mild surprise or enthusiasm", "Anger", "Disgust", "Terror"], correctIndex: 0, explanation: "'Gee' (short for Jesus historically, but now mild) expresses wonder or surprise." },
    { question: "What does 'Gosh' express?", choices: ["Mild surprise", "Extreme anger", "Hunger", "Sleep"], correctIndex: 0, explanation: "'Gosh' is a mild way to show surprise (euphemism for God)." },

    // 21-30: Fill in the blank (Intermediate Context)
    { question: "____, I think I left my keys in the car.", choices: ["Hooray", "Dang", "Yum", "Yay"], correctIndex: 1, explanation: "'Dang' (or Darn) expresses mild annoyance at a mistake." },
    { question: "____! Watch out for that car!", choices: ["Look out", "Hello", "Mmm", "Aha"], correctIndex: 0, explanation: "'Look out' acts as an imperative interjection warning of danger." },
    { question: "____, I didn't know you were coming.", choices: ["Oh", "Ouch", "Yuck", "Shh"], correctIndex: 0, explanation: "'Oh' expresses mild surprise or realization." },
    { question: "____, that's a really sad story.", choices: ["Alas", "Yay", "Bingo", "Hooray"], correctIndex: 0, explanation: "'Alas' fits a sorrowful context." },
    { question: "____! You hit the nail right on the head.", choices: ["Bingo", "Ouch", "Ugh", "Phew"], correctIndex: 0, explanation: "'Bingo!' is used when someone gets an answer exactly right." },
    { question: "____, are you sure that's safe?", choices: ["Er", "Yay", "Yum", "Hooray"], correctIndex: 0, explanation: "'Er' shows hesitation or doubt." },
    { question: "____! Stop doing that.", choices: ["Hey", "Mmm", "Wow", "Ah"], correctIndex: 0, explanation: "'Hey' is used to demand someone stop an action." },
    { question: "____, it's finally the weekend.", choices: ["Thank goodness", "Ouch", "Yuck", "Oops"], correctIndex: 0, explanation: "'Thank goodness' is a phrase functioning as an interjection of relief." },
    { question: "____! That was a close call.", choices: ["Whew", "Yum", "Bingo", "Aha"], correctIndex: 0, explanation: "'Whew' (or Phew) indicates relief after danger." },
    { question: "____? I couldn't hear you.", choices: ["Huh", "Wow", "Ouch", "Yay"], correctIndex: 0, explanation: "'Huh?' is used to ask someone to repeat something." },

    // 31-40: Identification in Sentences
    { question: "Identify the interjection: 'Good grief, this is taking forever.'", choices: ["Good grief", "This", "Taking", "Forever"], correctIndex: 0, explanation: "'Good grief' is a multi-word interjection expressing frustration." },
    { question: "Identify the interjection: 'Oh dear, I broke the vase.'", choices: ["Oh dear", "Broke", "Vase", "I"], correctIndex: 0, explanation: "'Oh dear' expresses dismay or worry." },
    { question: "Identify the interjection: 'For heaven's sake, hurry up!'", choices: ["For heaven's sake", "Hurry", "Up", "You"], correctIndex: 0, explanation: "This phrase functions entirely as an interjection of annoyance." },
    { question: "Identify the interjection: 'Well done! You passed.'", choices: ["Well done", "You", "Passed", "None"], correctIndex: 0, explanation: "'Well done' acts as an interjection of praise." },
    { question: "Identify the interjection: 'Congratulations! You won.'", choices: ["Congratulations", "You", "Won", "None"], correctIndex: 0, explanation: "'Congratulations' functions as an interjection here." },
    { question: "Identify the interjection: 'My goodness, you have grown.'", choices: ["My goodness", "You", "Have", "Grown"], correctIndex: 0, explanation: "'My goodness' expresses surprise." },
    { question: "Identify the interjection: 'Holy cow, look at that!'", choices: ["Holy cow", "Look", "At", "That"], correctIndex: 0, explanation: "'Holy cow' is a slang interjection for amazement." },
    { question: "Identify the interjection: 'Man, I am tired.'", choices: ["Man", "I", "Am", "Tired"], correctIndex: 0, explanation: "'Man' here is not a noun referring to a male, but an interjection of feeling." },
    { question: "Identify the interjection: 'Boy, it is hot today.'", choices: ["Boy", "It", "Is", "Hot"], correctIndex: 0, explanation: "Similar to 'Man', 'Boy' is used to emphasize the statement." },
    { question: "Identify the interjection: 'Listen, I need help.'", choices: ["Listen", "I", "Need", "Help"], correctIndex: 0, explanation: "'Listen' is an imperative verb acting as an interjection to gain focus." },

    // 41-50: Multiple Meanings
    { question: "The word 'Well' can mean all of these EXCEPT:", choices: ["Hesitation", "A deep hole with water", "Surprise (Well!)", "Pain"], correctIndex: 3, explanation: "'Well' can be a noun (water), or an interjection of hesitation or surprise. It is NOT used for pain." },
    { question: "The word 'Oh' can express:", choices: ["Surprise", "Disappointment", "Realization", "All of the above"], correctIndex: 3, explanation: "'Oh' is one of the most versatile interjections, changing meaning based on tone." },
    { question: "The word 'Hey' can be used to:", choices: ["Greet someone", "Get attention", "Protest ('Hey! That's mine')", "All of the above"], correctIndex: 3, explanation: "'Hey' is multi-functional." },
    { question: "The word 'Why' can be an interjection when:", choices: ["Asking a question", "Expressing surprise ('Why, it's you!')", "Explaining a reason", "None of the above"], correctIndex: 1, explanation: "When 'Why' is not asking a question but showing surprise, it is an interjection." },
    { question: "Can sounds like 'Grrr' be written as interjections?", choices: ["Yes", "No"], correctIndex: 0, explanation: "Yes, onomatopoeic sounds are often treated as interjections in writing." },
    { question: "Does 'Good morning' function as an interjection phrase?", choices: ["Yes", "No"], correctIndex: 0, explanation: "Yes, greetings are a type of interjection (social formulas)." },
    { question: "Is 'Please' considered an interjection?", choices: ["Sometimes", "Never", "Always a verb", "Always a noun"], correctIndex: 0, explanation: "'Please' is technically an adverb (short for 'if it pleases you'), but it functions often like an interjection in social usage." },
    { question: "What does 'Meh' mean?", choices: ["Excitement", "Indifference/Unimpressed", "Anger", "Love"], correctIndex: 1, explanation: "'Meh' is a modern interjection showing you don't care or it's just average." },
    { question: "What does 'Yo' mean?", choices: ["Casual greeting", "Goodbye", "Sadness", "Pain"], correctIndex: 0, explanation: "'Yo' is a very casual slang greeting or call for attention." },
    { question: "What does 'Ahem' mean?", choices: ["Clearing throat to get attention", "Sleeping", "Running", "Eating"], correctIndex: 0, explanation: "'Ahem' is the sound of clearing the throat, used to politely get attention." }
  ],

  advanced: [
    // 1-10: Advanced Vocabulary (Archaic/Formal)
    { question: "What does 'Alas' express?", choices: ["Joy", "Grief or Pity", "Anger", "Surprise"], correctIndex: 1, explanation: "'Alas' is an archaic word used to express sorrow, grief, or pity (e.g., 'Alas, he is gone')." },
    { question: "What does 'Eureka' express?", choices: ["Pain", "Triumph/Discovery", "Fear", "Disgust"], correctIndex: 1, explanation: "'Eureka' (Greek for 'I have found it') is used when celebrating a sudden discovery." },
    { question: "What does 'Huzzah' express?", choices: ["Celebration", "Anger", "Confusion", "Sadness"], correctIndex: 0, explanation: "'Huzzah' is an old-fashioned shout of joy or approval." },
    { question: "What does 'Fie' express?", choices: ["Disgust or Disapproval", "Happiness", "Sleepiness", "Hunger"], correctIndex: 0, explanation: "'Fie' is a very old term used to express disgust or outrage (e.g., 'Fie on you!')." },
    { question: "What does 'Lo' mean?", choices: ["Look/Behold", "Low down", "Go away", "Hello"], correctIndex: 0, explanation: "'Lo' is used to draw attention to something amazing (e.g., 'Lo and behold')." },
    { question: "What does 'Hark' mean?", choices: ["Listen", "Speak", "Run", "Stop"], correctIndex: 0, explanation: "'Hark' is an archaic command meaning 'Listen!' (e.g., 'Hark! The herald angels sing')." },
    { question: "What does 'Pshaw' express?", choices: ["Disbelief or Impatience", "Joy", "Fear", "Pain"], correctIndex: 0, explanation: "'Pshaw' is a sound of contempt or impatience, dismissing someone's statement." },
    { question: "What does 'Adieu' mean?", choices: ["Hello", "Goodbye", "Please", "Thanks"], correctIndex: 1, explanation: "French for 'Goodbye' (literally 'to God'), often used in English literature." },
    { question: "What does 'Encore' mean?", choices: ["Stop", "Again/More", "Leave", "Bad"], correctIndex: 1, explanation: "Shouted at the end of a performance to ask the artist to play more." },
    { question: "What does 'Touché' acknowledge?", choices: ["A hit in fencing or a clever point in an argument", "A mistake", "Pain", "Victory"], correctIndex: 0, explanation: "Used to admit that your opponent has made a good point in a debate." },

    // 11-20: Subtle Contexts (Tone)
    { question: "Which 'Well' shows indignation? '____! I never expected such rudeness.'", choices: ["Well", "Oh", "Ah", "Hmm"], correctIndex: 0, explanation: "Here, 'Well' is used to express shock or offense." },
    { question: "Which interjection suggests you are comforting someone?", choices: ["There, there", "Tut-tut", "Hear, hear", "Well, well"], correctIndex: 0, explanation: "'There, there' is a phrase used to soothe a crying child or upset person." },
    { question: "Which interjection suggests skepticism?", choices: ["Yeah, right", "Hooray", "Yippee", "Bravo"], correctIndex: 0, explanation: "'Yeah, right' (often sarcastic) functions as an interjection of disbelief." },
    { question: "What does 'Hear, hear!' mean in a formal setting?", choices: ["Listen to the music", "I agree/Applause", "Be quiet", "Speak louder"], correctIndex: 1, explanation: "Used in Parliament or speeches to show strong agreement with the speaker." },
    { question: "What does 'Hem and haw' refer to?", choices: ["Hesitating while speaking", "Sewing", "Laughing", "Crying"], correctIndex: 0, explanation: "It refers to using interjections like 'hmm' and 'er' to avoid giving a direct answer." },
    { question: "What does 'For shame' express?", choices: ["Scolding someone", "Praising someone", "Thanking someone", "Greeting someone"], correctIndex: 0, explanation: "'For shame' is an interjectional phrase used to criticize bad behavior." },
    { question: "What does 'My word' express?", choices: ["Mild surprise", "Anger", "Ownership", "Silence"], correctIndex: 0, explanation: "'My word' is a polite, slightly old-fashioned way to show surprise." },
    { question: "What does 'Bless you' express?", choices: ["Politeness after a sneeze", "Anger", "Hunger", "Confusion"], correctIndex: 0, explanation: "A reflexive social interjection used when someone sneezes." },
    { question: "What does 'Cheers' mean in British English?", choices: ["Thanks / To your health", "Boo", "Help", "Stop"], correctIndex: 0, explanation: "'Cheers' can mean 'Thank you', 'Goodbye', or a toast before drinking." },
    { question: "What does 'Rubbish' express as an interjection?", choices: ["Disagreement/Disbelief", "Agreement", "Happiness", "Sadness"], correctIndex: 0, explanation: "Calling 'Rubbish!' is a way of saying someone is speaking nonsense." },

    // 21-30: Grammatical Independence
    { question: "In 'Oh, I didn't see you', 'Oh' is grammatically related to 'I'.", choices: ["True", "False"], correctIndex: 1, explanation: "False. Interjections are grammatically independent. They do not modify the subject or verb." },
    { question: "Can a noun phrase act as an interjection? (e.g., 'Good heavens!')", choices: ["Yes", "No"], correctIndex: 0, explanation: "Yes. Phrases often lose their literal meaning and become emotional markers." },
    { question: "Which is a 'Volitive' interjection (expresses a wish/command)?", choices: ["Shh!", "Ouch!", "Wow!", "Oops!"], correctIndex: 0, explanation: "'Shh' commands silence. The others express emotion (Emotive) or realization (Cognitive)." },
    { question: "Which is an 'Emotive' interjection?", choices: ["Yuck!", "Shh!", "Psst!", "Look out!"], correctIndex: 0, explanation: "'Yuck' expresses an internal emotion (disgust). The others are directed at other people." },
    { question: "Which is a 'Cognitive' interjection (related to thinking)?", choices: ["Aha!", "Ouch!", "Yum!", "Hooray!"], correctIndex: 0, explanation: "'Aha!' relates to the thought process (realization)." },
    { question: "In 'No, I won't go', 'No' acts as:", choices: ["An interjection/Particle", "A verb", "A noun", "An adjective"], correctIndex: 0, explanation: "Yes/No are often classified as interjections or polarity particles." },
    { question: "The word 'Like' in 'It was, like, really big' acts as:", choices: ["A filler/interjection", "A verb", "A preposition", "A noun"], correctIndex: 0, explanation: "In this slang usage, 'like' is a filler without grammatical weight, similar to 'um'." },
    { question: "Can swearing/cursing be considered interjections?", choices: ["Yes", "No"], correctIndex: 0, explanation: "Yes, grammatically, curse words used to express anger/pain function exactly like interjections." },
    { question: "What is an 'Ejaculation' in grammar terms?", choices: ["A sudden short exclamation", "A long sentence", "A question", "A verb"], correctIndex: 0, explanation: "In linguistic terms, an ejaculation is a sudden emotional utterance (synonym for interjection)." },
    { question: "Is 'Goodbye' an interjection?", choices: ["Yes", "No"], correctIndex: 0, explanation: "Yes. It evolved from 'God be with ye' but now functions as a standard social interjection." },

    // 31-40: Fill in the blank (Advanced Tone)
    { question: "____! I can't believe you did that.", choices: ["Why", "Ouch", "Mmm", "Yum"], correctIndex: 0, explanation: "Using 'Why' here expresses shock or indignation." },
    { question: "____, that's the way the cookie crumbles.", choices: ["Well", "Ouch", "Yuck", "Eek"], correctIndex: 0, explanation: "'Well' acts as a resigned acceptance here." },
    { question: "____, I suppose you're right.", choices: ["Sigh", "Bang", "Zap", "Pow"], correctIndex: 0, explanation: "Writing 'Sigh' indicates reluctant agreement or weariness." },
    { question: "____! That's absolute nonsense!", choices: ["Bah", "Yum", "Yay", "Mmm"], correctIndex: 0, explanation: "'Bah' (like Scrooge's 'Bah Humbug') expresses dismissal or disgust." },
    { question: "____, we meet again.", choices: ["So", "Ouch", "Yuck", "Oops"], correctIndex: 0, explanation: "'So' is often used to open a confrontation or summary." },
    { question: "____! Get out of here!", choices: ["Scram", "Yum", "Wow", "Aha"], correctIndex: 0, explanation: "'Scram' is an imperative verb acting as a rude interjection." },
    { question: "____, what have we here?", choices: ["Well, well", "Tut-tut", "There, there", "Hear, hear"], correctIndex: 0, explanation: "'Well, well' indicates intriguing discovery." },
    { question: "____! You frightened me.", choices: ["Heavens", "Yum", "Hooray", "Bravo"], correctIndex: 0, explanation: "'Heavens' is a shortened form of 'Good Heavens', expressing shock." },
    { question: "____! That's a good idea.", choices: ["Say", "Ouch", "Eww", "Phew"], correctIndex: 0, explanation: "'Say' (as in 'Say, that's nice') is an American colloquialism to introduce a thought." },
    { question: "____, I'm boring you.", choices: ["Alas", "Hooray", "Yippee", "Bam"], correctIndex: 0, explanation: "'Alas' is the only one fitting a sad/regretful tone." },

    // 41-50: Identifying Tone
    { question: "Tone of 'Oh, really?'", choices: ["Can be Sarcastic or Interested", "Always Angry", "Always Happy", "Always Sad"], correctIndex: 0, explanation: "It depends entirely on intonation." },
    { question: "Tone of 'Whatever.'", choices: ["Dismissive/Rude", "Happy", "Excited", "Loving"], correctIndex: 0, explanation: "Used to show you don't care, often rudely." },
    { question: "Tone of 'Excuse me!'", choices: ["Polite OR Indignant", "Always polite", "Always angry", "Always happy"], correctIndex: 0, explanation: "Can be used to pass someone (polite) or when offended (indignant)." },
    { question: "Tone of 'Come on!'", choices: ["Encouragement OR Disbelief", "Always angry", "Always sad", "Always happy"], correctIndex: 0, explanation: "Can mean 'You can do it!' or 'I don't believe you!'." },
    { question: "Tone of 'Not again!'", choices: ["Frustration", "Joy", "Hunger", "Sleep"], correctIndex: 0, explanation: "Used when something annoying happens repeatedly." },
    { question: "Tone of 'As if!'", choices: ["Sarcastic disbelief", "Agreement", "Happiness", "Fear"], correctIndex: 0, explanation: "Slang for 'That is impossible/untrue'." },
    { question: "Tone of 'You don't say!'", choices: ["Sarcastic or Genuine Surprise", "Anger", "Sadness", "Pain"], correctIndex: 0, explanation: "Often used sarcastically when something is obvious." },
    { question: "Tone of 'Get out!'", choices: ["Disbelief (Slang) or Anger", "Happiness", "Sadness", "Boredom"], correctIndex: 0, explanation: "Can mean 'Leave!' or 'I don't believe you!' (e.g., Elaine from Seinfeld)." },
    { question: "Tone of 'Shut up!'", choices: ["Rudeness or Disbelief (Slang)", "Politeness", "Agreement", "Love"], correctIndex: 0, explanation: "Can mean 'Be quiet' or 'No way!'" },
    { question: "Tone of 'Bless your heart.'", choices: ["Sympathy (or condescension in the South)", "Anger", "Fear", "Disgust"], correctIndex: 0, explanation: "In Southern US English, it can be sweet or passively insulting." }
  ],

  super: [
    // 1-10: Etymology & Obscure Interjections
    { question: "The interjection 'Zounds' is a corruption of:", choices: ["God's Wounds", "Zeus's Hounds", "Sounds", "Zoo Sounds"], correctIndex: 0, explanation: "An archaic oath referring to the wounds of Christ on the cross." },
    { question: "The interjection 'Gad' or 'Egad' refers to:", choices: ["God", "Dad", "Goat", "Good"], correctIndex: 0, explanation: "It is a 'minced oath' to avoid taking the Lord's name in vain." },
    { question: "The interjection 'Blimey' (British) comes from:", choices: ["God blind me", "Blind mice", "Limey", "Blue me"], correctIndex: 0, explanation: "A contraction of 'God blind me'." },
    { question: "The interjection 'Strewth' comes from:", choices: ["God's Truth", "True Story", "Strength", "Straw"], correctIndex: 0, explanation: "Archaic/British slang for 'God's Truth'." },
    { question: "The interjection 'Gadzooks' comes from:", choices: ["God's Hooks", "God's Books", "Gadgets", "Zookeepers"], correctIndex: 0, explanation: "Refers to the nails (hooks) of the crucifixion." },
    { question: "The interjection 'Cripes' is a substitute for:", choices: ["Christ", "Crisps", "Cry", "Crepes"], correctIndex: 0, explanation: "Another minced oath." },
    { question: "The word 'Hail' (e.g., Hail, Caesar!) means:", choices: ["Be healthy/Salute", "Ice rain", "Stop", "Goodbye"], correctIndex: 0, explanation: "From Old Norse/English meaning 'Healthy'." },
    { question: "The interjection 'Prithee' is short for:", choices: ["I pray thee", "Pretty thee", "Pride thee", "Pay thee"], correctIndex: 0, explanation: "Archaic way of saying 'Please' (I ask you)." },
    { question: "The interjection 'Lackaday' expresses:", choices: ["Sorrow (Alack the day)", "Laziness", "Happiness", "Confusion"], correctIndex: 0, explanation: "Short for 'Alack the day', expressing regret." },
    { question: "The interjection 'Heigh-ho' expresses:", choices: ["Boredom or Weariness", "Excitement", "Anger", "Fear"], correctIndex: 0, explanation: "Often used to show a sigh of resignation or boredom." },

    // 11-20: Dialectal & Cultural
    { question: "In Scottish English, 'Och' is similar to:", choices: ["Oh / Ah", "No", "Yes", "Goodbye"], correctIndex: 0, explanation: "Used for surprise, pain, or annoyance (e.g., 'Och aye')." },
    { question: "In Canadian English, which interjection is iconic?", choices: ["Eh?", "Innit?", "Right?", "Hey?"], correctIndex: 0, explanation: "'Eh?' is used to ask for agreement or repetition." },
    { question: "In British English, 'Ta' means:", choices: ["Thanks", "Goodbye", "Yes", "No"], correctIndex: 0, explanation: "Casual slang for Thank you." },
    { question: "In Australian English, 'Crikey' expresses:", choices: ["Surprise/Amazement", "Sadness", "Sleep", "Hunger"], correctIndex: 0, explanation: "Made famous by Steve Irwin, used for surprise." },
    { question: "In American Southern English, 'Howdy' is short for:", choices: ["How do you do?", "How is daddy?", "How day?", "How die?"], correctIndex: 0, explanation: "A greeting." },
    { question: "The interjection 'Oy' or 'Oi' is used to:", choices: ["Get attention (often aggressively)", "Sleep", "Eat", "Cry"], correctIndex: 0, explanation: "Common in British/Australian English (e.g., 'Oi! You there!')." },
    { question: "In Jewish culture/Yiddish, 'Oy vey' expresses:", choices: ["Dismay or Exasperation", "Joy", "Hello", "Goodbye"], correctIndex: 0, explanation: "Means 'Oh woe'." },
    { question: "The interjection 'Aloha' serves as:", choices: ["Hello and Goodbye", "Only Hello", "Only Goodbye", "Thank you"], correctIndex: 0, explanation: "Hawaiian greeting used for both arrival and departure." },
    { question: "In Japanese/Anime culture, 'Kawaii' is an adjective often used as an interjection meaning:", choices: ["Cute!", "Scary!", "Fast!", "Stop!"], correctIndex: 0, explanation: "Exclaimed when seeing something adorable." },
    { question: "The nautical interjection 'Ahoy' is used to:", choices: ["Hail a ship or person", "Say goodbye", "Warn of sinking", "Ask for food"], correctIndex: 0, explanation: "The traditional greeting at sea." },

    // 21-30: Onomatopoeia as Interjections
    { question: "Which sound represents an explosion?", choices: ["Kaboom", "Swoosh", "Plop", "Buzz"], correctIndex: 0, explanation: "Onomatopoeia for a blast." },
    { question: "Which sound represents movement through air?", choices: ["Whoosh", "Thud", "Splash", "Crunch"], correctIndex: 0, explanation: "Sound of wind or fast movement." },
    { question: "Which sound represents hitting water?", choices: ["Splash", "Bang", "Zap", "Honk"], correctIndex: 0, explanation: "Impact with liquid." },
    { question: "Which sound represents a heavy object falling?", choices: ["Thud", "Ping", "Sizzle", "Chirp"], correctIndex: 0, explanation: "Dull heavy sound." },
    { question: "Which sound represents electricity or speed?", choices: ["Zap", "Moo", "Quack", "Drip"], correctIndex: 0, explanation: "Sudden strike." },
    { question: "Which sound represents eating crisply?", choices: ["Crunch", "Slurp", "Gulp", "Hiss"], correctIndex: 0, explanation: "Sound of biting something hard." },
    { question: "Which sound represents drinking liquid?", choices: ["Slurp", "Crunch", "Bang", "Pop"], correctIndex: 0, explanation: "Sucking sound while drinking." },
    { question: "Which sound represents something disappearing?", choices: ["Poof", "Thud", "Clank", "Meow"], correctIndex: 0, explanation: "Magical disappearance." },
    { question: "Which sound represents a metallic hit?", choices: ["Clank/Clang", "Thump", "Swish", "Hush"], correctIndex: 0, explanation: "Metal on metal." },
    { question: "Which sound represents a clock?", choices: ["Tick-tock", "Ding-dong", "Beep", "Honk"], correctIndex: 0, explanation: "Rhythmic mechanical sound." },

    // 31-40: Linguistic Categories (Super Technical)
    { question: "Interjections are part of which word class category?", choices: ["Open Class", "Closed Class", "Verbs", "Pronouns"], correctIndex: 0, explanation: "They are 'Open Class' because we can invent new ones (like 'D'oh!' or 'Meh') easily." },
    { question: "An interjection that mimics a sound is called:", choices: ["Onomatopoeic", "Alphabetic", "Numeric", "Symbiotic"], correctIndex: 0, explanation: "Words like 'Bang' or 'Meow'." },
    { question: "Primary Interjections are words that:", choices: ["Are only used as interjections (e.g., Ouch)", "Are nouns used as interjections", "Are verbs", "Are adjectives"], correctIndex: 0, explanation: "Primary interjections (Ouch, Phew) have no other meaning. Secondary interjections (Good heavens) come from other words." },
    { question: "Secondary Interjections are:", choices: ["Words from other classes used as interjections (e.g., 'Help!')", "Sounds like 'Ouch'", "Numbers", "Letters"], correctIndex: 0, explanation: "Nouns, verbs, or adjectives used as exclamations." },
    { question: "A 'Minced Oath' is:", choices: ["A softened swear word (e.g., Gosh instead of God)", "A type of meat", "A political promise", "A lie"], correctIndex: 0, explanation: "Linguistic term for euphemisms used to avoid swearing." },
    { question: "Which of these is a 'Phatic' interjection?", choices: ["Uh-huh (Checking contact)", "Ouch", "Wow", "Alas"], correctIndex: 0, explanation: "Phatic expressions are used to maintain social connection rather than convey information (e.g., 'Mmhmm' on the phone)." },
    { question: "The word 'Bazinga' is an example of:", choices: ["A pop-culture neologism interjection", "An archaic word", "A French word", "A Latin word"], correctIndex: 0, explanation: "Coined in 'The Big Bang Theory', showing how new interjections enter language." },
    { question: "In comics, interjections are often contained in:", choices: ["Speech bubbles / Burst balloons", "Footnotes", "Titles", "Margins"], correctIndex: 0, explanation: "The jagged bubbles indicate shouting/loud noises." },
    { question: "Which interjection is a palindrome?", choices: ["Wow", "Ouch", "Hey", "Alas"], correctIndex: 0, explanation: "Reads the same backward and forward." },
    { question: "The hesitation sound 'Um' is technically called a:", choices: ["Filler", "Stopper", "Blocker", "Breaker"], correctIndex: 0, explanation: "Linguists call these 'fillers' or 'discourse markers'." },

    // 41-50: Literary Usage
    { question: "In Shakespeare, 'Ho!' is used to:", choices: ["Call attention or summon", "Laugh", "Sleep", "Cry"], correctIndex: 0, explanation: "Example: 'What ho!'" },
    { question: "The phrase 'Humbug' acts as an interjection meaning:", choices: ["Deception/Nonsense", "Candy", "Bug", "Music"], correctIndex: 0, explanation: "Famous from 'A Christmas Carol' by Dickens." },
    { question: "Sherlock Holmes might say 'Elementary!' as an interjection of:", choices: ["Dismissive confidence", "Confusion", "Fear", "Pain"], correctIndex: 0, explanation: "Meaning the solution is simple." },
    { question: "Homer Simpson's catchphrase 'D'oh!' expresses:", choices: ["Annoyed realization of a mistake", "Joy", "Fear", "Love"], correctIndex: 0, explanation: "Added to the Oxford English Dictionary." },
    { question: "The interjection 'Bother!' (used by Winnie the Pooh) expresses:", choices: ["Mild annoyance", "Extreme rage", "Happiness", "Hunger"], correctIndex: 0, explanation: "A very mild, polite British complaint." },
    { question: "In older texts, 'Fie, foh, and fum' are associated with:", choices: ["Giants", "Fairies", "Elves", "Knights"], correctIndex: 0, explanation: "From Jack and the Beanstalk." },
    { question: "The word 'Hail' in 'Hail Mary' acts as:", choices: ["A greeting/Salutation", "Weather", "Goodbye", "Question"], correctIndex: 0, explanation: "Ave Maria (Hail Mary)." },
    { question: "Which author coined the interjection 'Yahoo' (as a noun/creature)?", choices: ["Jonathan Swift", "Shakespeare", "Dickens", "Twain"], correctIndex: 0, explanation: "In 'Gulliver's Travels', Yahoos were crude creatures. It later became an interjection of excitement." },
    { question: "The interjection 'Eureka' is associated with which scientist?", choices: ["Archimedes", "Einstein", "Newton", "Tesla"], correctIndex: 0, explanation: "Legend says he shouted it in the bath upon discovering displacement." },
    { question: "The interjection 'Checkmate' comes from:", choices: ["Chess", "Poker", "Tennis", "Football"], correctIndex: 0, explanation: "Used to announce victory (The King is dead)." }
  ]
};
