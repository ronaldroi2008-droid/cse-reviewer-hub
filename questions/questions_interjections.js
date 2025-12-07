// questions/interjections.js

// 1. Safety Check
window.VERBAL_QUESTION_BANK = window.VERBAL_QUESTION_BANK || {};

// 2. Inject Data
window.VERBAL_QUESTION_BANK["interjections"] = {

  // ============================================
  // LEVEL 1: BEGINNER (50 Items)
  // ============================================
  beginner: [
    { question: "You drop a heavy book on your toe. What do you say?", options: ["Wow!", "Ouch!", "Yum!", "Hooray!"], answer: "Ouch!", explanation: "'Ouch!' is the universal interjection for sudden physical pain. 'Wow' is for surprise, and 'Hooray' is for celebration." },
    { question: "You see a huge, beautiful rainbow. What do you say?", options: ["Yuck!", "Ouch!", "Wow!", "Shh!"], answer: "Wow!", explanation: "'Wow!' expresses amazement or admiration. You wouldn't say 'Yuck' unless you hate rainbows!" },
    { question: "You meet a friend on the street. How do you greet them?", options: ["Hi!", "Ouch!", "Boo!", "Yuck!"], answer: "Hi!", explanation: "'Hi!' or 'Hello!' are standard greeting interjections. 'Boo' is used to scare someone." },
    { question: "You taste a lemon that is very sour. What might you say?", options: ["Mmm!", "Yuck!", "Hooray!", "Shh!"], answer: "Yuck!", explanation: "'Yuck!' (or sometimes 'Eww') expresses strong distaste or disgust. 'Mmm' is for something delicious." },
    { question: "You want the class to be quiet. What do you say?", options: ["Hey!", "Shh!", "Wow!", "Yay!"], answer: "Shh!", explanation: "'Shh!' is the sound used to ask for silence. 'Hey' is used to get attention, but not necessarily for silence." },
    { question: "Your team just won the game! What do you shout?", options: ["Alas!", "Hooray!", "Ouch!", "Phew!"], answer: "Hooray!", explanation: "'Hooray!' (or 'Yay!') is a shout of joy and victory. 'Alas' is for sadness." },
    { question: "You almost slipped on the floor but caught yourself. What do you say?", options: ["Phew!", "Yum!", "Hooray!", "Hello!"], answer: "Phew!", explanation: "'Phew!' expresses relief that something bad (like falling) didn't happen." },
    { question: "You taste a delicious chocolate cake. What do you say?", options: ["Yuck!", "Mmm!", "Ouch!", "Eww!"], answer: "Mmm!", explanation: "'Mmm!' indicates that something tastes or smells very good." },
    { question: "You accidentally bumped into someone. What do you say?", options: ["Oops!", "Yay!", "Wow!", "Yum!"], answer: "Oops!", explanation: "'Oops!' is used when you make a small mistake or have a minor accident." },
    { question: "Someone jumps out from behind a door to scare you. What do you scream?", options: ["Ahhh!", "Mmm!", "Phew!", "Shh!"], answer: "Ahhh!", explanation: "'Ahhh!' is a scream of fear or shock. 'Phew' is what you say *after* you realize you are safe." },

    // 11-20: Context Matching
    { question: "Which interjection is used to get someone's attention?", options: ["Hey!", "Yum!", "Ouch!", "Alas!"], answer: "Hey!", explanation: "'Hey!' is a common way to call out to someone to get their attention." },
    { question: "Which interjection shows that you are cold?", options: ["Brrr!", "Mmm!", "Ow!", "Ha!"], answer: "Brrr!", explanation: "'Brrr!' is the sound we make when we are shivering from the cold." },
    { question: "Which interjection shows you agree with someone?", options: ["Uh-huh", "Uh-uh", "Eww", "Ouch"], answer: "Uh-huh", explanation: "'Uh-huh' (intonation goes up) means Yes/Agreed. 'Uh-uh' means No." },
    { question: "Which interjection shows you are thinking?", options: ["Um...", "Bang!", "Zap!", "Ouch!"], answer: "Um...", explanation: "'Um...' or 'Er...' are hesitation sounds we use while thinking of what to say next." },
    { question: "Which interjection expresses laughter?", options: ["Ha-ha!", "Boo-hoo!", "Ouch!", "Yuck!"], answer: "Ha-ha!", explanation: "'Ha-ha!' represents the sound of laughter. 'Boo-hoo' represents crying." },
    { question: "Which interjection is used when you make a mistake?", options: ["Whoops!", "Yum!", "Bravo!", "Hush!"], answer: "Whoops!", explanation: "'Whoops!' (similar to Oops) acknowledges a minor error." },
    { question: "Which interjection do you use when something smells bad?", options: ["Eww!", "Mmm!", "Wow!", "Yay!"], answer: "Eww!", explanation: "'Eww!' or 'Phew!' indicates a bad smell or something gross." },
    { question: "Which interjection implies you are tired?", options: ["Yawn", "Bingo", "Hooray", "Bam"], answer: "Yawn", explanation: "While 'Yawn' is a verb, it is often written as an interjection to show boredom or tiredness." },
    { question: "Which interjection shows you understand something now?", options: ["Aha!", "Ouch!", "Eww!", "Shh!"], answer: "Aha!", explanation: "'Aha!' is the sound of sudden realization or discovery." },
    { question: "Which interjection is used to scare someone?", options: ["Boo!", "Hi!", "Ops!", "Ah!"], answer: "Boo!", explanation: "'Boo!' is the classic sound used to startle someone." },

    // 21-30: Sentence Placement (Start of sentence)
    { question: "____! That hurts!", options: ["Ouch", "Yum", "Yay", "Mmm"], answer: "Ouch", explanation: "Context implies pain." },
    { question: "____, look at that giant bird!", options: ["Wow", "Ouch", "Yuck", "Boo"], answer: "Wow", explanation: "Context implies amazement." },
    { question: "____! I passed the test!", options: ["Yay", "Alas", "Ouch", "Shh"], answer: "Yay", explanation: "Context implies celebration." },
    { question: "____, be quiet, the baby is sleeping.", options: ["Shh", "Hey", "Wow", "Bam"], answer: "Shh", explanation: "Context implies a request for silence." },
    { question: "____! This soup is gross.", options: ["Yuck", "Mmm", "Wow", "Yay"], answer: "Yuck", explanation: "Context implies disgust." },
    { question: "____, I didn't mean to break it.", options: ["Oops", "Hooray", "Yum", "Bravo"], answer: "Oops", explanation: "Context implies an accident." },
    { question: "____! It's freezing out here.", options: ["Brrr", "Ouch", "Mmm", "Ha"], answer: "Brrr", explanation: "Context implies cold." },
    { question: "____! Don't touch that hot stove!", options: ["Hey", "Mmm", "Yay", "Yawn"], answer: "Hey", explanation: "'Hey!' acts as a warning here to get attention quickly." },
    { question: "____, that smells like fresh cookies.", options: ["Mmm", "Yuck", "Ouch", "Eww"], answer: "Mmm", explanation: "Context implies a good smell." },
    { question: "____! We are going to be late.", options: ["Oh no", "Yay", "Yum", "Haha"], answer: "Oh no", explanation: "'Oh no' expresses worry or negative realization." },

    // 31-40: Identification
    { question: "Which word in this sentence is an interjection? 'Wow, that is a huge tower!'", options: ["Wow", "That", "Huge", "Tower"], answer: "Wow", explanation: "'Wow' is the word expressing emotion and is not grammatically connected to the rest of the sentence." },
    { question: "Identify the interjection: 'Ouch! I bit my tongue.'", options: ["Ouch", "I", "Bit", "Tongue"], answer: "Ouch", explanation: "'Ouch' is the exclamation of pain." },
    { question: "Identify the interjection: 'Hey, wait for me.'", options: ["Hey", "Wait", "For", "Me"], answer: "Hey", explanation: "'Hey' is the call for attention." },
    { question: "Identify the interjection: 'Yuck, I hate broccoli.'", options: ["Yuck", "I", "Hate", "Broccoli"], answer: "Yuck", explanation: "'Yuck' expresses the emotion of disgust." },
    { question: "Identify the interjection: 'Oops, I dropped my pen.'", options: ["Oops", "Dropped", "My", "Pen"], answer: "Oops", explanation: "'Oops' acknowledges the mistake." },
    { question: "Identify the interjection: 'Hurray, it is snowing!'", options: ["Hurray", "It", "Is", "Snowing"], answer: "Hurray", explanation: "'Hurray' expresses the joy." },
    { question: "Identify the interjection: 'Shh, the movie is starting.'", options: ["Shh", "Movie", "Is", "Starting"], answer: "Shh", explanation: "'Shh' is the command for silence." },
    { question: "Identify the interjection: 'Phew, that was close.'", options: ["Phew", "That", "Was", "Close"], answer: "Phew", explanation: "'Phew' expresses relief." },
    { question: "Identify the interjection: 'Hi, how are you?'", options: ["Hi", "How", "Are", "You"], answer: "Hi", explanation: "'Hi' is the greeting." },
    { question: "Identify the interjection: 'Oh, I see now.'", options: ["Oh", "I", "See", "Now"], answer: "Oh", explanation: "'Oh' expresses the realization." },

    // 41-50: True or False Basics
    { question: "Interjections are used to express strong emotion.", options: ["True", "False"], answer: "True", explanation: "True. That is their primary purpose." },
    { question: "Interjections are grammatically connected to the rest of the sentence.", options: ["True", "False"], answer: "False", explanation: "False. Interjections can be removed without changing the grammar of the sentence." },
    { question: "'House' is an interjection.", options: ["True", "False"], answer: "False", explanation: "False. 'House' is a noun." },
    { question: "'Ouch' is a noun.", options: ["True", "False"], answer: "False", explanation: "False. 'Ouch' is an interjection." },
    { question: "Interjections can stand alone as one word sentences.", options: ["True", "False"], answer: "True", explanation: "True. Example: 'Wow!'" },
    { question: "You usually use an exclamation mark (!) after a strong interjection.", options: ["True", "False"], answer: "True", explanation: "True. Exclamation marks show strong feeling." },
    { question: "'Run' is an interjection.", options: ["True", "False"], answer: "False", explanation: "False. 'Run' is a verb." },
    { question: "'Alas' is a modern slang interjection.", options: ["True", "False"], answer: "False", explanation: "False. 'Alas' is formal and archaic (old)." },
    { question: "Interjections are more common in speaking than in formal writing.", options: ["True", "False"], answer: "True", explanation: "True. We use them constantly in conversation." },
    { question: "An interjection always has to be at the start of a sentence.", options: ["True", "False"], answer: "False", explanation: "False. While common at the start, they can appear in the middle or end (e.g., 'It hurts, ouch!')." }
  ],

  // ============================================
  // LEVEL 2: INTERMEDIATE (50 Items)
  // ============================================
  intermediate: [
    // 1-10: Punctuation
    { question: "Choose the correct punctuation for mild emotion: 'Oh__ I see what you mean.'", options: [".", ",", "!", "?"], answer: ",", explanation: "For mild interjections that flow into the sentence, we use a comma." },
    { question: "Choose the correct punctuation for strong emotion: 'Wow__ You won the lottery!'", options: [",", ";", "!", "."], answer: "!", explanation: "Strong emotions require an exclamation mark." },
    { question: "Which sentence is punctuated correctly?", options: ["Hey! come back.", "Hey, come back.", "Hey. Come back.", "Hey? Come back."], answer: "Hey, come back.", explanation: "'Hey' here is a mild call for attention, so a comma is appropriate. If it were a shout of anger, an exclamation mark would be used, but the next letter would be capitalized." },
    { question: "Select the correct punctuation: 'Ouch__ That bee stung me!'", options: ["!", ",", ".", "?"], answer: "!", explanation: "Sudden pain is usually a strong emotion, so an exclamation mark is best." },
    { question: "Select the correct punctuation: 'Well__ I suppose we can go.'", options: ["!", ",", "?", "."], answer: ",", explanation: "'Well' here indicates hesitation or a mild transition, so a comma is used." },
    { question: "Select the correct punctuation: 'Help__ I'm falling!'", options: [",", ".", "!", "?"], answer: "!", explanation: "'Help' is an urgent cry, requiring an exclamation mark." },
    { question: "Select the correct punctuation: 'No__ I don't want to.'", options: [",", "!", "?", ";"], answer: ",", explanation: "A simple refusal usually takes a comma unless shouted." },
    { question: "Select the correct punctuation: 'Yes__ That is correct.'", options: [",", "?", "!", ";"], answer: ",", explanation: "Mild agreement uses a comma." },
    { question: "Select the correct punctuation: 'Fire__ Run for your lives!'", options: [",", ".", "!", "?"], answer: "!", explanation: "'Fire' is a warning of danger, implying strong emotion/volume." },
    { question: "Select the correct punctuation: 'Ah__ now I understand.'", options: [",", "!", "?", "."], answer: ",", explanation: "A mild realization uses a comma." },

    // 11-20: Nuance and Specific Meanings
    { question: "What does 'Aww' usually express?", options: ["Anger", "Adoration or Pity", "Fear", "Hunger"], answer: "Adoration or Pity", explanation: "'Aww' is used for something cute (adoration) or something sad (pity)." },
    { question: "What does 'Eek' express?", options: ["Sudden fear (usually of something small)", "Hunger", "Tiredness", "Agreement"], answer: "Sudden fear (usually of something small)", explanation: "'Eek!' is a high-pitched sound often made when seeing a spider or mouse." },
    { question: "What does 'Ugh' express?", options: ["Joy", "Frustration or Annoyance", "Surprise", "Relief"], answer: "Frustration or Annoyance", explanation: "'Ugh' shows annoyance, frustration, or disgust." },
    { question: "What does 'Uh-oh' express?", options: ["Victory", "Concern that something is wrong", "Happiness", "Sleepiness"], answer: "Concern that something is wrong", explanation: "'Uh-oh' signals a mistake or a looming problem." },
    { question: "What does 'Duh' express?", options: ["Intelligence", "That something is obvious", "Sadness", "Pain"], answer: "That something is obvious", explanation: "'Duh' is a sarcastic interjection implying the answer was obvious or the person is being silly." },
    { question: "What does 'Psst' express?", options: ["A secret call for attention", "Anger", "Laughter", "Pain"], answer: "A secret call for attention", explanation: "'Psst' is a sound used to whisper to someone to get their attention discreetly." },
    { question: "What does 'Tut-tut' (tsk-tsk) express?", options: ["Approval", "Disapproval or Disappointment", "Happiness", "Fear"], answer: "Disapproval or Disappointment", explanation: "The clicking sound 'tsk-tsk' shows you disapprove of something." },
    { question: "What does 'Bravo' express?", options: ["Sadness", "Approval for a performance", "Pain", "Silence"], answer: "Approval for a performance", explanation: "'Bravo' is shouted to praise a performance (like a play or concert)." },
    { question: "What does 'Gee' express?", options: ["Mild surprise or enthusiasm", "Anger", "Disgust", "Terror"], answer: "Mild surprise or enthusiasm", explanation: "'Gee' (short for Jesus historically, but now mild) expresses wonder or surprise." },
    { question: "What does 'Gosh' express?", options: ["Mild surprise", "Extreme anger", "Hunger", "Sleep"], answer: "Mild surprise", explanation: "'Gosh' is a mild way to show surprise (euphemism for God)." },

    // 21-30: Fill in the blank (Intermediate Context)
    { question: "____, I think I left my keys in the car.", options: ["Hooray", "Dang", "Yum", "Yay"], answer: "Dang", explanation: "'Dang' (or Darn) expresses mild annoyance at a mistake." },
    { question: "____! Watch out for that car!", options: ["Look out", "Hello", "Mmm", "Aha"], answer: "Look out", explanation: "'Look out' acts as an imperative interjection warning of danger." },
    { question: "____, I didn't know you were coming.", options: ["Oh", "Ouch", "Yuck", "Shh"], answer: "Oh", explanation: "'Oh' expresses mild surprise or realization." },
    { question: "____, that's a really sad story.", options: ["Alas", "Yay", "Bingo", "Hooray"], answer: "Alas", explanation: "'Alas' fits a sorrowful context." },
    { question: "____! You hit the nail right on the head.", options: ["Bingo", "Ouch", "Ugh", "Phew"], answer: "Bingo", explanation: "'Bingo!' is used when someone gets an answer exactly right." },
    { question: "____, are you sure that's safe?", options: ["Er", "Yay", "Yum", "Hooray"], answer: "Er", explanation: "'Er' shows hesitation or doubt." },
    { question: "____! Stop doing that.", options: ["Hey", "Mmm", "Wow", "Ah"], answer: "Hey", explanation: "'Hey' is used to demand someone stop an action." },
    { question: "____, it's finally the weekend.", options: ["Thank goodness", "Ouch", "Yuck", "Oops"], answer: "Thank goodness", explanation: "'Thank goodness' is a phrase functioning as an interjection of relief." },
    { question: "____! That was a close call.", options: ["Whew", "Yum", "Bingo", "Aha"], answer: "Whew", explanation: "'Whew' (or Phew) indicates relief after danger." },
    { question: "____? I couldn't hear you.", options: ["Huh", "Wow", "Ouch", "Yay"], answer: "Huh", explanation: "'Huh?' is used to ask someone to repeat something." },

    // 31-40: Identification in Sentences
    { question: "Identify the interjection: 'Good grief, this is taking forever.'", options: ["Good grief", "This", "Taking", "Forever"], answer: "Good grief", explanation: "'Good grief' is a multi-word interjection expressing frustration." },
    { question: "Identify the interjection: 'Oh dear, I broke the vase.'", options: ["Oh dear", "Broke", "Vase", "I"], answer: "Oh dear", explanation: "'Oh dear' expresses dismay or worry." },
    { question: "Identify the interjection: 'For heaven's sake, hurry up!'", options: ["For heaven's sake", "Hurry", "Up", "You"], answer: "For heaven's sake", explanation: "This phrase functions entirely as an interjection of annoyance." },
    { question: "Identify the interjection: 'Well done! You passed.'", options: ["Well done", "You", "Passed", "None"], answer: "Well done", explanation: "'Well done' acts as an interjection of praise." },
    { question: "Identify the interjection: 'Congratulations! You won.'", options: ["Congratulations", "You", "Won", "None"], answer: "Congratulations", explanation: "'Congratulations' functions as an interjection here." },
    { question: "Identify the interjection: 'My goodness, you have grown.'", options: ["My goodness", "You", "Have", "Grown"], answer: "My goodness", explanation: "'My goodness' expresses surprise." },
    { question: "Identify the interjection: 'Holy cow, look at that!'", options: ["Holy cow", "Look", "At", "That"], answer: "Holy cow", explanation: "'Holy cow' is a slang interjection for amazement." },
    { question: "Identify the interjection: 'Man, I am tired.'", options: ["Man", "I", "Am", "Tired"], answer: "Man", explanation: "'Man' here is not a noun referring to a male, but an interjection of feeling." },
    { question: "Identify the interjection: 'Boy, it is hot today.'", options: ["Boy", "It", "Is", "Hot"], answer: "Boy", explanation: "Similar to 'Man', 'Boy' is used to emphasize the statement." },
    { question: "Identify the interjection: 'Listen, I need help.'", options: ["Listen", "I", "Need", "Help"], answer: "Listen", explanation: "'Listen' is an imperative verb acting as an interjection to gain focus." },

    // 41-50: Multiple Meanings
    { question: "The word 'Well' can mean all of these EXCEPT:", options: ["Hesitation", "A deep hole with water", "Surprise (Well!)", "Pain"], answer: "Pain", explanation: "'Well' can be a noun (water), or an interjection of hesitation or surprise. It is NOT used for pain." },
    { question: "The word 'Oh' can express:", options: ["Surprise", "Disappointment", "Realization", "All of the above"], answer: "All of the above", explanation: "'Oh' is one of the most versatile interjections, changing meaning based on tone." },
    { question: "The word 'Hey' can be used to:", options: ["Greet someone", "Get attention", "Protest ('Hey! That's mine')", "All of the above"], answer: "All of the above", explanation: "'Hey' is multi-functional." },
    { question: "The word 'Why' can be an interjection when:", options: ["Asking a question", "Expressing surprise ('Why, it's you!')", "Explaining a reason", "None of the above"], answer: "Expressing surprise ('Why, it's you!')", explanation: "When 'Why' is not asking a question but showing surprise, it is an interjection." },
    { question: "Can sounds like 'Grrr' be written as interjections?", options: ["Yes", "No"], answer: "Yes", explanation: "Yes, onomatopoeic sounds are often treated as interjections in writing." },
    { question: "Does 'Good morning' function as an interjection phrase?", options: ["Yes", "No"], answer: "Yes", explanation: "Yes, greetings are a type of interjection (social formulas)." },
    { question: "Is 'Please' considered an interjection?", options: ["Sometimes", "Never", "Always a verb", "Always a noun"], answer: "Sometimes", explanation: "'Please' is technically an adverb (short for 'if it pleases you'), but it functions often like an interjection in social usage." },
    { question: "What does 'Meh' mean?", options: ["Excitement", "Indifference/Unimpressed", "Anger", "Love"], answer: "Indifference/Unimpressed", explanation: "'Meh' is a modern interjection showing you don't care or it's just average." },
    { question: "What does 'Yo' mean?", options: ["Casual greeting", "Goodbye", "Sadness", "Pain"], answer: "Casual greeting", explanation: "'Yo' is a very casual slang greeting or call for attention." },
    { question: "What does 'Ahem' mean?", options: ["Clearing throat to get attention", "Sleeping", "Running", "Eating"], answer: "Clearing throat to get attention", explanation: "'Ahem' is the sound of clearing the throat, used to politely get attention." }
  ],

  // ============================================
  // LEVEL 3: ADVANCED (50 Items)
  // ============================================
  advanced: [
    // 1-10: Advanced Vocabulary (Archaic/Formal)
    { question: "What does 'Alas' express?", options: ["Joy", "Grief or Pity", "Anger", "Surprise"], answer: "Grief or Pity", explanation: "'Alas' is an archaic word used to express sorrow, grief, or pity (e.g., 'Alas, he is gone')." },
    { question: "What does 'Eureka' express?", options: ["Pain", "Triumph/Discovery", "Fear", "Disgust"], answer: "Triumph/Discovery", explanation: "'Eureka' (Greek for 'I have found it') is used when celebrating a sudden discovery." },
    { question: "What does 'Huzzah' express?", options: ["Celebration", "Anger", "Confusion", "Sadness"], answer: "Celebration", explanation: "'Huzzah' is an old-fashioned shout of joy or approval." },
    { question: "What does 'Fie' express?", options: ["Disgust or Disapproval", "Happiness", "Sleepiness", "Hunger"], answer: "Disgust or Disapproval", explanation: "'Fie' is a very old term used to express disgust or outrage (e.g., 'Fie on you!')." },
    { question: "What does 'Lo' mean?", options: ["Look/Behold", "Low down", "Go away", "Hello"], answer: "Look/Behold", explanation: "'Lo' is used to draw attention to something amazing (e.g., 'Lo and behold')." },
    { question: "What does 'Hark' mean?", options: ["Listen", "Speak", "Run", "Stop"], answer: "Listen", explanation: "'Hark' is an archaic command meaning 'Listen!' (e.g., 'Hark! The herald angels sing')." },
    { question: "What does 'Pshaw' express?", options: ["Disbelief or Impatience", "Joy", "Fear", "Pain"], answer: "Disbelief or Impatience", explanation: "'Pshaw' is a sound of contempt or impatience, dismissing someone's statement." },
    { question: "What does 'Adieu' mean?", options: ["Hello", "Goodbye", "Please", "Thanks"], answer: "Goodbye", explanation: "French for 'Goodbye' (literally 'to God'), often used in English literature." },
    { question: "What does 'Encore' mean?", options: ["Stop", "Again/More", "Leave", "Bad"], answer: "Again/More", explanation: "Shouted at the end of a performance to ask the artist to play more." },
    { question: "What does 'Touché' acknowledge?", options: ["A hit in fencing or a clever point in an argument", "A mistake", "Pain", "Victory"], answer: "A hit in fencing or a clever point in an argument", explanation: "Used to admit that your opponent has made a good point in a debate." },

    // 11-20: Subtle Contexts (Tone)
    { question: "Which 'Well' shows indignation? '____! I never expected such rudeness.'", options: ["Well", "Oh", "Ah", "Hmm"], answer: "Well", explanation: "Here, 'Well' is used to express shock or offense." },
    { question: "Which interjection suggests you are comforting someone?", options: ["There, there", "Tut-tut", "Hear, hear", "Well, well"], answer: "There, there", explanation: "'There, there' is a phrase used to soothe a crying child or upset person." },
    { question: "Which interjection suggests skepticism?", options: ["Yeah, right", "Hooray", "Yippee", "Bravo"], answer: "Yeah, right", explanation: "'Yeah, right' (often sarcastic) functions as an interjection of disbelief." },
    { question: "What does 'Hear, hear!' mean in a formal setting?", options: ["Listen to the music", "I agree/Applause", "Be quiet", "Speak louder"], answer: "I agree/Applause", explanation: "Used in Parliament or speeches to show strong agreement with the speaker." },
    { question: "What does 'Hem and haw' refer to?", options: ["Hesitating while speaking", "Sewing", "Laughing", "Crying"], answer: "Hesitating while speaking", explanation: "It refers to using interjections like 'hmm' and 'er' to avoid giving a direct answer." },
    { question: "What does 'For shame' express?", options: ["Scolding someone", "Praising someone", "Thanking someone", "Greeting someone"], answer: "Scolding someone", explanation: "'For shame' is an interjectional phrase used to criticize bad behavior." },
    { question: "What does 'My word' express?", options: ["Mild surprise", "Anger", "Ownership", "Silence"], answer: "Mild surprise", explanation: "'My word' is a polite, slightly old-fashioned way to show surprise." },
    { question: "What does 'Bless you' express?", options: ["Politeness after a sneeze", "Anger", "Hunger", "Confusion"], answer: "Politeness after a sneeze", explanation: "A reflexive social interjection used when someone sneezes." },
    { question: "What does 'Cheers' mean in British English?", options: ["Thanks / To your health", "Boo", "Help", "Stop"], answer: "Thanks / To your health", explanation: "'Cheers' can mean 'Thank you', 'Goodbye', or a toast before drinking." },
    { question: "What does 'Rubbish' express as an interjection?", options: ["Disagreement/Disbelief", "Agreement", "Happiness", "Sadness"], answer: "Disagreement/Disbelief", explanation: "Calling 'Rubbish!' is a way of saying someone is speaking nonsense." },

    // 21-30: Grammatical Independence
    { question: "In 'Oh, I didn't see you', 'Oh' is grammatically related to 'I'.", options: ["True", "False"], answer: "False", explanation: "False. Interjections are grammatically independent. They do not modify the subject or verb." },
    { question: "Can a noun phrase act as an interjection? (e.g., 'Good heavens!')", options: ["Yes", "No"], answer: "Yes", explanation: "Yes. Phrases often lose their literal meaning and become emotional markers." },
    { question: "Which is a 'Volitive' interjection (expresses a wish/command)?", options: ["Shh!", "Ouch!", "Wow!", "Oops!"], answer: "Shh!", explanation: "'Shh' commands silence. The others express emotion (Emotive) or realization (Cognitive)." },
    { question: "Which is an 'Emotive' interjection?", options: ["Yuck!", "Shh!", "Psst!", "Look out!"], answer: "Yuck!", explanation: "'Yuck' expresses an internal emotion (disgust). The others are directed at other people." },
    { question: "Which is a 'Cognitive' interjection (related to thinking)?", options: ["Aha!", "Ouch!", "Yum!", "Hooray!"], answer: "Aha!", explanation: "'Aha!' relates to the thought process (realization)." },
    { question: "In 'No, I won't go', 'No' acts as:", options: ["An interjection/Particle", "A verb", "A noun", "An adjective"], answer: "An interjection/Particle", explanation: "Yes/No are often classified as interjections or polarity particles." },
    { question: "The word 'Like' in 'It was, like, really big' acts as:", options: ["A filler/interjection", "A verb", "A preposition", "A noun"], answer: "A filler/interjection", explanation: "In this slang usage, 'like' is a filler without grammatical weight, similar to 'um'." },
    { question: "Can swearing/cursing be considered interjections?", options: ["Yes", "No"], answer: "Yes", explanation: "Yes, grammatically, curse words used to express anger/pain function exactly like interjections." },
    { question: "What is an 'Ejaculation' in grammar terms?", options: ["A sudden short exclamation", "A long sentence", "A question", "A verb"], answer: "A sudden short exclamation", explanation: "In linguistic terms, an ejaculation is a sudden emotional utterance (synonym for interjection)." },
    { question: "Is 'Goodbye' an interjection?", options: ["Yes", "No"], answer: "Yes", explanation: "Yes. It evolved from 'God be with ye' but now functions as a standard social interjection." },

    // 31-40: Fill in the blank (Advanced Tone)
    { question: "____! I can't believe you did that.", options: ["Why", "Ouch", "Mmm", "Yum"], answer: "Why", explanation: "Using 'Why' here expresses shock or indignation." },
    { question: "____, that's the way the cookie crumbles.", options: ["Well", "Ouch", "Yuck", "Eek"], answer: "Well", explanation: "'Well' acts as a resigned acceptance here." },
    { question: "____, I suppose you're right.", options: ["Sigh", "Bang", "Zap", "Pow"], answer: "Sigh", explanation: "Writing 'Sigh' indicates reluctant agreement or weariness." },
    { question: "____! That's absolute nonsense!", options: ["Bah", "Yum", "Yay", "Mmm"], answer: "Bah", explanation: "'Bah' (like Scrooge's 'Bah Humbug') expresses dismissal or disgust." },
    { question: "____, we meet again.", options: ["So", "Ouch", "Yuck", "Oops"], answer: "So", explanation: "'So' is often used to open a confrontation or summary." },
    { question: "____! Get out of here!", options: ["Scram", "Yum", "Wow", "Aha"], answer: "Scram", explanation: "'Scram' is an imperative verb acting as a rude interjection." },
    { question: "____, what have we here?", options: ["Well, well", "Tut-tut", "There, there", "Hear, hear"], answer: "Well, well", explanation: "'Well, well' indicates intriguing discovery." },
    { question: "____! You frightened me.", options: ["Heavens", "Yum", "Hooray", "Bravo"], answer: "Heavens", explanation: "'Heavens' is a shortened form of 'Good Heavens', expressing shock." },
    { question: "____! That's a good idea.", options: ["Say", "Ouch", "Eww", "Phew"], answer: "Say", explanation: "'Say' (as in 'Say, that's nice') is an American colloquialism to introduce a thought." },
    { question: "____, I'm boring you.", options: ["Alas", "Hooray", "Yippee", "Bam"], answer: "Alas", explanation: "'Alas' is the only one fitting a sad/regretful tone." },

    // 41-50: Identifying Tone
    { question: "Tone of 'Oh, really?'", options: ["Can be Sarcastic or Interested", "Always Angry", "Always Happy", "Always Sad"], answer: "Can be Sarcastic or Interested", explanation: "It depends entirely on intonation." },
    { question: "Tone of 'Whatever.'", options: ["Dismissive/Rude", "Happy", "Excited", "Loving"], answer: "Dismissive/Rude", explanation: "Used to show you don't care, often rudely." },
    { question: "Tone of 'Excuse me!'", options: ["Polite OR Indignant", "Always polite", "Always angry", "Always happy"], answer: "Polite OR Indignant", explanation: "Can be used to pass someone (polite) or when offended (indignant)." },
    { question: "Tone of 'Come on!'", options: ["Encouragement OR Disbelief", "Always angry", "Always sad", "Always happy"], answer: "Encouragement OR Disbelief", explanation: "Can mean 'You can do it!' or 'I don't believe you!'." },
    { question: "Tone of 'Not again!'", options: ["Frustration", "Joy", "Hunger", "Sleep"], answer: "Frustration", explanation: "Used when something annoying happens repeatedly." },
    { question: "Tone of 'As if!'", options: ["Sarcastic disbelief", "Agreement", "Happiness", "Fear"], answer: "Sarcastic disbelief", explanation: "Slang for 'That is impossible/untrue'." },
    { question: "Tone of 'You don't say!'", options: ["Sarcastic or Genuine Surprise", "Anger", "Sadness", "Pain"], answer: "Sarcastic or Genuine Surprise", explanation: "Often used sarcastically when something is obvious." },
    { question: "Tone of 'Get out!'", options: ["Disbelief (Slang) or Anger", "Happiness", "Sadness", "Boredom"], answer: "Disbelief (Slang) or Anger", explanation: "Can mean 'Leave!' or 'I don't believe you!' (e.g., Elaine from Seinfeld)." },
    { question: "Tone of 'Shut up!'", options: ["Rudeness or Disbelief (Slang)", "Politeness", "Agreement", "Love"], answer: "Rudeness or Disbelief (Slang)", explanation: "Can mean 'Be quiet' or 'No way!'" },
    { question: "Tone of 'Bless your heart.'", options: ["Sympathy (or condescension in the South)", "Anger", "Fear", "Disgust"], answer: "Sympathy (or condescension in the South)", explanation: "In Southern US English, it can be sweet or passively insulting." }
  ],

  // ============================================
  // LEVEL 4: EXPERT (50 Items)
  // ============================================
  expert: [
    // 1-10: Etymology & Obscure Interjections
    { question: "The interjection 'Zounds' is a corruption of:", options: ["God's Wounds", "Zeus's Hounds", "Sounds", "Zoo Sounds"], answer: "God's Wounds", explanation: "It is an archaic oath representing 'God's Wounds' (referring to the crucifixion), used to express surprise or anger." },
    { question: "The interjection 'Gad' or 'Egad' refers to:", options: ["God", "Dad", "Goat", "Good"], answer: "God", explanation: "It is a 'minced oath' (a polite substitute) used to avoid saying the name 'God' directly in vain." },
    { question: "The interjection 'Blimey' (British) comes from:", options: ["God blind me", "Blind mice", "Limey", "Blue me"], answer: "God blind me", explanation: "It is a contraction of the phrase 'God blind me', used to express strong surprise." },
    { question: "The interjection 'Strewth' comes from:", options: ["God's Truth", "True Story", "Strength", "Straw"], answer: "God's Truth", explanation: "'Strewth' is archaic British slang for 'God's Truth', used to express shock or disbelief." },
    { question: "The interjection 'Gadzooks' comes from:", options: ["God's Hooks", "God's Books", "Gadgets", "Zookeepers"], answer: "God's Hooks", explanation: "It refers to 'God's Hooks' (the nails of the cross), functioning as a mild oath of surprise." },
    { question: "The interjection 'Cripes' is a substitute for:", options: ["Christ", "Crisps", "Cry", "Crepes"], answer: "Christ", explanation: "It is a polite substitute ('minced oath') to avoid saying 'Christ' directly when frustrated." },
    { question: "The word 'Hail' (e.g., Hail, Caesar!) means:", options: ["Be healthy/Salute", "Ice rain", "Stop", "Goodbye"], answer: "Be healthy/Salute", explanation: "It comes from Old Norse/English meaning 'Be Healthy'. It is used as a salute or greeting." },
    { question: "The interjection 'Prithee' is short for:", options: ["I pray thee", "Pretty thee", "Pride thee", "Pay thee"], answer: "I pray thee", explanation: "'Prithee' is an archaic way of saying 'Please' (literally: 'I pray thee' or 'I ask you')." },
    { question: "The interjection 'Lackaday' expresses:", options: ["Sorrow (Alack the day)", "Laziness", "Happiness", "Confusion"], answer: "Sorrow (Alack the day)", explanation: "It is short for 'Alack the day' (Shame on the day), used to express regret or sorrow." },
    { question: "The interjection 'Heigh-ho' expresses:", options: ["Boredom or Weariness", "Excitement", "Anger", "Fear"], answer: "Boredom or Weariness", explanation: "This sound is often used to show a sigh of resignation, boredom, or disappointment." },

    // 11-20: Dialectal & Cultural
    { question: "In Scottish English, 'Och' is similar to:", options: ["Oh / Ah", "No", "Yes", "Goodbye"], answer: "Oh / Ah", explanation: "'Och' is a Scottish interjection used to express surprise, pain, or annoyance (e.g., 'Och aye')." },
    { question: "In Canadian English, which interjection is iconic?", options: ["Eh?", "Innit?", "Right?", "Hey?"], answer: "Eh?", explanation: "'Eh?' is used at the end of sentences to ask for agreement, confirmation, or repetition." },
    { question: "In British English, 'Ta' means:", options: ["Thanks", "Goodbye", "Yes", "No"], answer: "Thanks", explanation: "'Ta' is a common, casual slang word for 'Thank you' in Britain and Australia." },
    { question: "In Australian English, 'Crikey' expresses:", options: ["Surprise/Amazement", "Sadness", "Sleep", "Hunger"], answer: "Surprise/Amazement", explanation: "Made famous by Steve Irwin, 'Crikey' is an exclamation of surprise or amazement." },
    { question: "In American Southern English, 'Howdy' is short for:", options: ["How do you do?", "How is daddy?", "How day?", "How die?"], answer: "How do you do?", explanation: "It is a friendly rural greeting derived from the formal phrase 'How do you do?'." },
    { question: "The interjection 'Oy' or 'Oi' is used to:", options: ["Get attention (often aggressively)", "Sleep", "Eat", "Cry"], answer: "Get attention (often aggressively)", explanation: "Common in British/Australian English, 'Oi!' is a sharp shout to get someone's attention." },
    { question: "In Jewish culture/Yiddish, 'Oy vey' expresses:", options: ["Dismay or Exasperation", "Joy", "Hello", "Goodbye"], answer: "Dismay or Exasperation", explanation: "It literally translates to 'Oh, woe', used to express frustration, grief, or dismay." },
    { question: "The interjection 'Aloha' serves as:", options: ["Hello and Goodbye", "Only Hello", "Only Goodbye", "Thank you"], answer: "Hello and Goodbye", explanation: "In Hawaiian culture, 'Aloha' functions as both a greeting (Hello) and a farewell (Goodbye)." },
    { question: "In Japanese/Anime culture, 'Kawaii' is an adjective often used as an interjection meaning:", options: ["Cute!", "Scary!", "Fast!", "Stop!"], answer: "Cute!", explanation: "It is exclaimed when seeing something adorable or lovely." },
    { question: "The nautical interjection 'Ahoy' is used to:", options: ["Hail a ship or person", "Say goodbye", "Warn of sinking", "Ask for food"], answer: "Hail a ship or person", explanation: "Sailors use 'Ahoy' to call out to another ship or to get attention." },

    // 21-30: Onomatopoeia as Interjections
    { question: "Which sound represents an explosion?", options: ["Kaboom", "Swoosh", "Plop", "Buzz"], answer: "Kaboom", explanation: "'Kaboom' mimics the loud sound of a blast or explosion." },
    { question: "Which sound represents movement through air?", options: ["Whoosh", "Thud", "Splash", "Crunch"], answer: "Whoosh", explanation: "'Whoosh' mimics the sound of wind or an object flying fast." },
    { question: "Which sound represents hitting water?", options: ["Splash", "Bang", "Zap", "Honk"], answer: "Splash", explanation: "'Splash' mimics the sound of an object striking liquid." },
    { question: "Which sound represents a heavy object falling?", options: ["Thud", "Ping", "Sizzle", "Chirp"], answer: "Thud", explanation: "'Thud' mimics the dull, heavy sound of an impact on the ground." },
    { question: "Which sound represents electricity or speed?", options: ["Zap", "Moo", "Quack", "Drip"], answer: "Zap", explanation: "'Zap' mimics the sharp sound of an electrical strike or sudden beam." },
    { question: "Which sound represents eating crisply?", options: ["Crunch", "Slurp", "Gulp", "Hiss"], answer: "Crunch", explanation: "'Crunch' mimics the noise of biting into something hard." },
    { question: "Which sound represents drinking liquid?", options: ["Slurp", "Crunch", "Bang", "Pop"], answer: "Slurp", explanation: "'Slurp' mimics the sucking sound made while drinking." },
    { question: "Which sound represents something disappearing?", options: ["Poof", "Thud", "Clank", "Meow"], answer: "Poof", explanation: "'Poof' mimics the sudden, soft sound of something vanishing like smoke." },
    { question: "Which sound represents a metallic hit?", options: ["Clank/Clang", "Thump", "Swish", "Hush"], answer: "Clank/Clang", explanation: "'Clank' or 'Clang' mimics the ringing sound of metal hitting metal." },
    { question: "Which sound represents a clock?", options: ["Tick-tock", "Ding-dong", "Beep", "Honk"], answer: "Tick-tock", explanation: "'Tick-tock' mimics the rhythmic mechanical sound of a clock." },

    // 31-40: Linguistic Categories (Super Technical)
    {
  question: "Which statement about interjections is TRUE?",
  options: [
    "New interjections can easily enter the language",
    "They always agree with the subject in number and person",
    "They must show tense like regular verbs",
    "They have to follow normal word order in the sentence"
  ],
  answer: "New interjections can easily enter the language",
  explanation: "Languages constantly create new interjections (for example 'D'oh!', 'Meh', 'Yo'), even though interjections are a small special word class."
},

    { question: "An interjection that mimics a sound is called:", options: ["Onomatopoeic", "Alphabetic", "Numeric", "Symbiotic"], answer: "Onomatopoeic", explanation: "Onomatopoeic words (like 'Bang' or 'Meow') are words that sound like what they describe." },
    { question: "Primary Interjections are words that:", options: ["Are only used as interjections (e.g., Ouch)", "Are nouns used as interjections", "Are verbs", "Are adjectives"], answer: "Are only used as interjections (e.g., Ouch)", explanation: "Primary interjections (like 'Ouch', 'Phew', 'Oops') have no other meaning. Secondary interjections (like 'Good heavens') come from other words." },
    { question: "Secondary Interjections are:", options: ["Words from other classes used as interjections (e.g., 'Help!')", "Sounds like 'Ouch'", "Numbers", "Letters"], answer: "Words from other classes used as interjections (e.g., 'Help!')", explanation: "These are Nouns, Verbs, or Adjectives (e.g., 'Great!', 'Help!', 'Fire!') that function as exclamations." },
    { question: "A 'Minced Oath' is:", options: ["A softened swear word (e.g., Gosh instead of God)", "A type of meat", "A political promise", "A lie"], answer: "A softened swear word (e.g., Gosh instead of God)", explanation: "In linguistics, a 'minced oath' is a euphemism used to replace a profane or blasphemous word (e.g., 'Fudge' instead of the F-word)." },
    { question: "Which of these is a 'Phatic' interjection?", options: ["Uh-huh (Checking contact)", "Ouch", "Wow", "Alas"], answer: "Uh-huh (Checking contact)", explanation: "Phatic expressions (like 'Mmhmm' or 'Really?') are used just to keep the conversation going and show you are listening." },
    { question: "The word 'Bazinga' is an example of:", options: ["A pop-culture neologism interjection", "An archaic word", "A French word", "A Latin word"], answer: "A pop-culture neologism interjection", explanation: "It was coined in the TV show 'The Big Bang Theory', showing how pop culture creates new interjections." },
    { question: "In comics, interjections are often contained in:", options: ["Speech bubbles / Burst balloons", "Footnotes", "Titles", "Margins"], answer: "Speech bubbles / Burst balloons", explanation: "The jagged, explosive-looking bubbles usually indicate shouting, loud noises, or strong interjections." },
    { question: "Which interjection is a palindrome?", options: ["Wow", "Ouch", "Hey", "Alas"], answer: "Wow", explanation: "'Wow' is spelled the same backward and forward." },
    { question: "The hesitation sound 'Um' is technically called a:", options: ["Filler", "Stopper", "Blocker", "Breaker"], answer: "Filler", explanation: "Linguists call these 'fillers' or 'discourse markers' because they fill the silence while the brain is thinking." },

    // 41-50: Literary Usage
    { question: "In Shakespeare, 'Ho!' is used to:", options: ["Call attention or summon", "Laugh", "Sleep", "Cry"], answer: "Call attention or summon", explanation: "'Ho!' (as in 'What ho!') is an archaic shout used to call someone's attention, similar to 'Hey!' today." },
    { question: "The phrase 'Humbug' acts as an interjection meaning:", options: ["Deception/Nonsense", "Candy", "Bug", "Music"], answer: "Deception/Nonsense", explanation: "Scrooge famously shouted 'Bah! Humbug!' to reject the Christmas spirit. 'Humbug' literally means deceptive nonsense or something fake." },
    { question: "Sherlock Holmes might say 'Elementary!' as an interjection of:", options: ["Dismissive confidence", "Confusion", "Fear", "Pain"], answer: "Dismissive confidence", explanation: "Holmes uses this to tell Watson that the solution is simple, basic, or obvious." },
    { question: "Homer Simpson's catchphrase 'D'oh!' expresses:", options: ["Annoyed realization of a mistake", "Joy", "Fear", "Love"], answer: "Annoyed realization of a mistake", explanation: "Homer says 'D'oh!' whenever he makes a stupid mistake. It became so famous that it was officially added to the Oxford English Dictionary!" },
    { question: "The interjection 'Bother!' (used by Winnie the Pooh) expresses:", options: ["Mild annoyance", "Extreme rage", "Happiness", "Hunger"], answer: "Mild annoyance", explanation: "'Bother' is a very mild, polite British complaint used when something goes slightly wrong." },
    { question: "In older texts, 'Fie, foh, and fum' are associated with:", options: ["Giants", "Fairies", "Elves", "Knights"], answer: "Giants", explanation: "These are the nonsense angry sounds made by the Giant in the fairy tale 'Jack and the Beanstalk'." },
    { question: "The word 'Hail' in 'Hail Mary' acts as:", options: ["A greeting/Salutation", "Weather", "Goodbye", "Question"], answer: "A greeting/Salutation", explanation: "'Hail' is an archaic way of saying 'Hello' or 'Greetings'. The prayer 'Ave Maria' translates to 'Hail (Greetings), Mary'." },
    { question: "Which author coined the interjection 'Yahoo' (as a noun/creature)?", options: ["Jonathan Swift", "Shakespeare", "Dickens", "Twain"], answer: "Jonathan Swift", explanation: "Jonathan Swift invented the word 'Yahoo' in his book *Gulliver's Travels* to describe brutish creatures. Today, we use it as a shout of excitement." },
    { question: "The interjection 'Eureka' is associated with which scientist?", options: ["Archimedes", "Einstein", "Newton", "Tesla"], answer: "Archimedes", explanation: "Legend says Archimedes shouted 'Eureka!' (I have found it!) after discovering the principle of water displacement in his bath." },
    { question: "The interjection 'Checkmate' comes from:", options: ["Chess", "Poker", "Tennis", "Football"], answer: "Chess", explanation: "It is the shout of victory in Chess. It comes from the Persian phrase 'Shah Mat', meaning 'The King is dead/helpless'." }
  ]
};
