// ==========================================
// SYNONYMS QUESTIONS - 200 ITEMS
// Levels: Beginner, Intermediate, Advanced, Expert
// ==========================================

const SYNONYMS_QUESTIONS = {

  // ==========================================
  // LEVEL 1: BEGINNER (Common Daily Words)
  // ==========================================
  beginner: [
    {
      question: "Choose the synonym for: HAPPY",
      options: ["Sad", "Joyful", "Angry", "Tired"],
      answer: "Joyful",
      explanation: "'Happy' and 'Joyful' both mean feeling pleasure or contentment."
    },
    {
      question: "Choose the synonym for: BIG",
      options: ["Small", "Tiny", "Large", "Weak"],
      answer: "Large",
      explanation: "'Big' and 'Large' both refer to something of considerable size."
    },
    {
      question: "Choose the synonym for: START",
      options: ["End", "Finish", "Begin", "Stop"],
      answer: "Begin",
      explanation: "'Start' and 'Begin' both mean to perform the first part of an action."
    },
    {
      question: "Choose the synonym for: FAST",
      options: ["Slow", "Quick", "Lazy", "Late"],
      answer: "Quick",
      explanation: "'Fast' and 'Quick' both mean moving with high speed."
    },
    {
      question: "Choose the synonym for: SCARED",
      options: ["Brave", "Afraid", "Happy", "Calm"],
      answer: "Afraid",
      explanation: "'Scared' and 'Afraid' both mean feeling fear."
    },
    {
      question: "Choose the synonym for: ANGRY",
      options: ["Mad", "Glad", "Sleepy", "Hungry"],
      answer: "Mad",
      explanation: "'Angry' and 'Mad' both mean feeling strong annoyance or hostility."
    },
    {
      question: "Choose the synonym for: BEAUTIFUL",
      options: ["Ugly", "Pretty", "Plain", "Dirty"],
      answer: "Pretty",
      explanation: "'Beautiful' and 'Pretty' both describe something pleasing to the eye."
    },
    {
      question: "Choose the synonym for: SMART",
      options: ["Dull", "Clever", "Slow", "Weak"],
      answer: "Clever",
      explanation: "'Smart' and 'Clever' both mean quick to understand or learn."
    },
    {
      question: "Choose the synonym for: RICH",
      options: ["Poor", "Wealthy", "Broke", "Cheap"],
      answer: "Wealthy",
      explanation: "'Rich' and 'Wealthy' both mean having a lot of money or assets."
    },
    {
      question: "Choose the synonym for: DIFFICULT",
      options: ["Easy", "Simple", "Hard", "Soft"],
      answer: "Hard",
      explanation: "'Difficult' and 'Hard' both mean needing much effort or skill to accomplish."
    },
    {
      question: "Choose the synonym for: WRONG",
      options: ["Right", "Correct", "Incorrect", "True"],
      answer: "Incorrect",
      explanation: "'Wrong' and 'Incorrect' both mean not true or not suitable."
    },
    {
      question: "Choose the synonym for: QUIET",
      options: ["Loud", "Silent", "Noisy", "Talkative"],
      answer: "Silent",
      explanation: "'Quiet' and 'Silent' both mean making little or no noise."
    },
    {
      question: "Choose the synonym for: GIFT",
      options: ["Loss", "Present", "Sale", "Cost"],
      answer: "Present",
      explanation: "'Gift' and 'Present' both refer to something given to someone without payment."
    },
    {
      question: "Choose the synonym for: UNDER",
      options: ["Over", "Above", "Below", "Top"],
      answer: "Below",
      explanation: "'Under' and 'Below' both indicate a lower position."
    },
    {
      question: "Choose the synonym for: LISTEN",
      options: ["Hear", "Speak", "Ignore", "Talk"],
      answer: "Hear",
      explanation: "'Listen' and 'Hear' both relate to perceiving sound, though 'listen' implies paying attention."
    },
    {
      question: "Choose the synonym for: SPEAK",
      options: ["Talk", "Listen", "Silence", "Mute"],
      answer: "Talk",
      explanation: "'Speak' and 'Talk' both mean to say words in order to convey information."
    },
    {
      question: "Choose the synonym for: CRY",
      options: ["Laugh", "Weep", "Smile", "Sing"],
      answer: "Weep",
      explanation: "'Cry' and 'Weep' both mean to shed tears."
    },
    {
      question: "Choose the synonym for: HELP",
      options: ["Hinder", "Assist", "Stop", "Block"],
      answer: "Assist",
      explanation: "'Help' and 'Assist' both mean to make it easier for someone to do something."
    },
    {
      question: "Choose the synonym for: ODD",
      options: ["Normal", "Strange", "Common", "Regular"],
      answer: "Strange",
      explanation: "'Odd' and 'Strange' both mean different from what is usual or expected."
    },
    {
      question: "Choose the synonym for: RUDE",
      options: ["Polite", "Impolite", "Nice", "Kind"],
      answer: "Impolite",
      explanation: "'Rude' and 'Impolite' both mean showing a lack of respect or manners."
    },
    {
      question: "Choose the synonym for: SAFE",
      options: ["Dangerous", "Secure", "Risky", "Harmful"],
      answer: "Secure",
      explanation: "'Safe' and 'Secure' both mean protected from danger or harm."
    },
    {
      question: "Choose the synonym for: TRUE",
      options: ["False", "Correct", "Wrong", "Fake"],
      answer: "Correct",
      explanation: "'True' and 'Correct' both mean in accordance with fact or reality."
    },
    {
      question: "Choose the synonym for: JOB",
      options: ["Hobby", "Occupation", "Game", "Rest"],
      answer: "Occupation",
      explanation: "'Job' and 'Occupation' both refer to a paid position of regular employment."
    },
    {
      question: "Choose the synonym for: TIRED",
      options: ["Energetic", "Exhausted", "Lively", "Fresh"],
      answer: "Exhausted",
      explanation: "'Tired' and 'Exhausted' both mean having drained energy, though 'exhausted' is stronger."
    },
    {
      question: "Choose the synonym for: TRASH",
      options: ["Treasure", "Garbage", "Money", "Food"],
      answer: "Garbage",
      explanation: "'Trash' and 'Garbage' both refer to waste material."
    },
    {
      question: "Choose the synonym for: CENTER",
      options: ["Edge", "Middle", "Corner", "Side"],
      answer: "Middle",
      explanation: "'Center' and 'Middle' both refer to the point equal distance from the sides."
    },
    {
      question: "Choose the synonym for: CHOOSE",
      options: ["Reject", "Select", "Ignore", "Throw"],
      answer: "Select",
      explanation: "'Choose' and 'Select' both mean to pick out as being the best or most appropriate."
    },
    {
      question: "Choose the synonym for: MISTAKE",
      options: ["Success", "Error", "Fact", "Truth"],
      answer: "Error",
      explanation: "'Mistake' and 'Error' both mean an action or judgment that is wrong."
    },
    {
      question: "Choose the synonym for: SHUT",
      options: ["Open", "Close", "Enter", "Exit"],
      answer: "Close",
      explanation: "'Shut' and 'Close' both mean to move something to cover an opening."
    },
    {
      question: "Choose the synonym for: TRIP",
      options: ["Stay", "Journey", "Sleep", "Home"],
      answer: "Journey",
      explanation: "'Trip' and 'Journey' both refer to an act of traveling from one place to another."
    },
    {
      question: "Choose the synonym for: SICK",
      options: ["Healthy", "Ill", "Strong", "Fit"],
      answer: "Ill",
      explanation: "'Sick' and 'Ill' both mean suffering from a disease or ailment."
    },
    {
      question: "Choose the synonym for: TRUST",
      options: ["Doubt", "Believe", "Fear", "Hate"],
      answer: "Believe",
      explanation: "'Trust' and 'Believe' both imply having confidence in someone's integrity."
    },
    {
      question: "Choose the synonym for: USE",
      options: ["Ignore", "Utilize", "Waste", "Save"],
      answer: "Utilize",
      explanation: "'Use' and 'Utilize' both mean to employ something for a purpose."
    },
    {
      question: "Choose the synonym for: VALUE",
      options: ["Worth", "Trash", "Cost", "Free"],
      answer: "Worth",
      explanation: "'Value' and 'Worth' both refer to the importance or usefulness of something."
    },
    {
      question: "Choose the synonym for: WANT",
      options: ["Hate", "Desire", "Have", "Own"],
      answer: "Desire",
      explanation: "'Want' and 'Desire' both mean a strong feeling of wishing for something."
    },
    {
      question: "Choose the synonym for: WEAK",
      options: ["Strong", "Frail", "Bold", "Hard"],
      answer: "Frail",
      explanation: "'Weak' and 'Frail' both mean lacking physical strength."
    },
    {
      question: "Choose the synonym for: YELL",
      options: ["Whisper", "Shout", "Talk", "Sing"],
      answer: "Shout",
      explanation: "'Yell' and 'Shout' both mean to speak in a loud voice."
    },
    {
      question: "Choose the synonym for: CRAZY",
      options: ["Sane", "Insane", "Calm", "Wise"],
      answer: "Insane",
      explanation: "'Crazy' and 'Insane' both mean mentally deranged or extremely foolish."
    },
    {
      question: "Choose the synonym for: DANGER",
      options: ["Safety", "Hazard", "Protection", "Guard"],
      answer: "Hazard",
      explanation: "'Danger' and 'Hazard' both refer to potential sources of harm."
    },
    {
      question: "Choose the synonym for: END",
      options: ["Start", "Finish", "Begin", "Go"],
      answer: "Finish",
      explanation: "'End' and 'Finish' both refer to the conclusion of something."
    },
    {
      question: "Choose the synonym for: ENEMY",
      options: ["Friend", "Foe", "Ally", "Partner"],
      answer: "Foe",
      explanation: "'Enemy' and 'Foe' both refer to an opponent or adversary."
    },
    {
      question: "Choose the synonym for: FAMOUS",
      options: ["Unknown", "Popular", "Hidden", "Secret"],
      answer: "Popular",
      explanation: "'Famous' and 'Popular' both imply being known or liked by many people."
    },
    {
      question: "Choose the synonym for: IDEA",
      options: ["Fact", "Concept", "Thing", "Object"],
      answer: "Concept",
      explanation: "'Idea' and 'Concept' both refer to a thought or plan."
    },
    {
      question: "Choose the synonym for: KEEP",
      options: ["Lose", "Hold", "Drop", "Throw"],
      answer: "Hold",
      explanation: "'Keep' and 'Hold' both imply retaining possession of something."
    },
    {
      question: "Choose the synonym for: LOVE",
      options: ["Hate", "Adore", "Dislike", "Ignore"],
      answer: "Adore",
      explanation: "'Love' and 'Adore' both express deep affection."
    },
    {
      question: "Choose the synonym for: MAKE",
      options: ["Destroy", "Create", "Break", "Kill"],
      answer: "Create",
      explanation: "'Make' and 'Create' both mean to bring something into existence."
    },
    {
      question: "Choose the synonym for: NEAT",
      options: ["Messy", "Tidy", "Dirty", "Ugly"],
      answer: "Tidy",
      explanation: "'Neat' and 'Tidy' both mean arranged in an orderly way."
    },
    {
      question: "Choose the synonym for: OLD",
      options: ["New", "Ancient", "Fresh", "Young"],
      answer: "Ancient",
      explanation: "'Old' and 'Ancient' both refer to having existed for a long time."
    },
    {
      question: "Choose the synonym for: PLACE",
      options: ["Time", "Location", "Person", "Event"],
      answer: "Location",
      explanation: "'Place' and 'Location' both refer to a particular position or point in space."
    },
    {
      question: "Choose the synonym for: STORY",
      options: ["Truth", "Tale", "Fact", "Data"],
      answer: "Tale",
      explanation: "'Story' and 'Tale' both refer to a narrative of events."
    }
  ],

  // ==========================================
  // LEVEL 2: INTERMEDIATE (Workplace & School)
  // ==========================================
  intermediate: [
    {
      question: "Choose the synonym for: ACCOMPLISH",
      options: ["Fail", "Achieve", "Give up", "Start"],
      answer: "Achieve",
      explanation: "Both mean to successfully complete a task or goal."
    },
    {
      question: "Choose the synonym for: ADMIT",
      options: ["Deny", "Confess", "Hide", "Refuse"],
      answer: "Confess",
      explanation: "Both mean to acknowledge the truth of something."
    },
    {
      question: "Choose the synonym for: ALLOW",
      options: ["Forbid", "Permit", "Stop", "Block"],
      answer: "Permit",
      explanation: "Both mean to give authorization or consent."
    },
    {
      question: "Choose the synonym for: ANNOY",
      options: ["Please", "Irritate", "Calm", "Help"],
      answer: "Irritate",
      explanation: "Both mean to make someone impatient or angry."
    },
    {
      question: "Choose the synonym for: APPROXIMATELY",
      options: ["Exactly", "About", "Precisely", "Clearly"],
      answer: "About",
      explanation: "Both mean nearly or roughly, not exactly."
    },
    {
      question: "Choose the synonym for: ARROGANT",
      options: ["Humble", "Haughty", "Shy", "Kind"],
      answer: "Haughty",
      explanation: "Both describe someone who thinks they are superior to others."
    },
    {
      question: "Choose the synonym for: AWFUL",
      options: ["Good", "Terrible", "Nice", "Pleasant"],
      answer: "Terrible",
      explanation: "Both mean extremely bad or unpleasant."
    },
    {
      question: "Choose the synonym for: AWKWARD",
      options: ["Graceful", "Clumsy", "Skilled", "Easy"],
      answer: "Clumsy",
      explanation: "Both mean lacking grace or skill in movement or manners."
    },
    {
      question: "Choose the synonym for: BAN",
      options: ["Allow", "Prohibit", "Start", "Open"],
      answer: "Prohibit",
      explanation: "Both mean to officially stop or forbid something."
    },
    {
      question: "Choose the synonym for: BARREN",
      options: ["Fertile", "Empty", "Full", "Green"],
      answer: "Empty",
      explanation: "Both describe land or places that are too poor to produce vegetation."
    },
    {
      question: "Choose the synonym for: BLEND",
      options: ["Separate", "Mix", "Divide", "Isolate"],
      answer: "Mix",
      explanation: "Both mean to combine things together."
    },
    {
      question: "Choose the synonym for: BRIEF",
      options: ["Long", "Short", "Deep", "Wide"],
      answer: "Short",
      explanation: "Both mean continuing for a small amount of time."
    },
    {
      question: "Choose the synonym for: BROAD",
      options: ["Narrow", "Wide", "Thin", "Tall"],
      answer: "Wide",
      explanation: "Both mean having great distance from side to side."
    },
    {
      question: "Choose the synonym for: CAUTIOUS",
      options: ["Careless", "Careful", "Rash", "Brave"],
      answer: "Careful",
      explanation: "Both mean avoiding potential problems or dangers."
    },
    {
      question: "Choose the synonym for: CEASE",
      options: ["Continue", "Stop", "Begin", "Go"],
      answer: "Stop",
      explanation: "Both mean to bring to an end."
    },
    {
      question: "Choose the synonym for: CLARIFY",
      options: ["Confuse", "Explain", "Hide", "Darken"],
      answer: "Explain",
      explanation: "Both mean to make a statement or situation clear."
    },
    {
      question: "Choose the synonym for: COMPETENT",
      options: ["Incapable", "Capable", "Weak", "Lazy"],
      answer: "Capable",
      explanation: "Both mean having the necessary ability to do something well."
    },
    {
      question: "Choose the synonym for: COMPLEX",
      options: ["Simple", "Complicated", "Easy", "Plain"],
      answer: "Complicated",
      explanation: "Both mean consisting of many interconnecting parts; difficult to understand."
    },
    {
      question: "Choose the synonym for: COMPLY",
      options: ["Rebel", "Obey", "Fight", "Ignore"],
      answer: "Obey",
      explanation: "Both mean to act in accordance with a wish or command."
    },
    {
      question: "Choose the synonym for: COMPREHEND",
      options: ["Misunderstand", "Understand", "Miss", "Forget"],
      answer: "Understand",
      explanation: "Both mean to grasp the meaning of something."
    },
    {
      question: "Choose the synonym for: CONCEAL",
      options: ["Reveal", "Hide", "Show", "Tell"],
      answer: "Hide",
      explanation: "Both mean to prevent something from being seen or known."
    },
    {
      question: "Choose the synonym for: CONCUR",
      options: ["Disagree", "Agree", "Argue", "Fight"],
      answer: "Agree",
      explanation: "Both mean to have the same opinion."
    },
    {
      question: "Choose the synonym for: CONDENSE",
      options: ["Expand", "Shorten", "Lengthen", "Grow"],
      answer: "Shorten",
      explanation: "Both mean to make something denser or more concise."
    },
    {
      question: "Choose the synonym for: CONFLICT",
      options: ["Peace", "Disagreement", "Harmony", "Love"],
      answer: "Disagreement",
      explanation: "Both refer to a serious difference of opinion or argument."
    },
    {
      question: "Choose the synonym for: CONNECT",
      options: ["Separate", "Join", "Break", "Cut"],
      answer: "Join",
      explanation: "Both mean to link things together."
    },
    {
      question: "Choose the synonym for: CONSCIOUS",
      options: ["Asleep", "Aware", "Dead", "Blind"],
      answer: "Aware",
      explanation: "Both mean having knowledge of or perceiving something."
    },
    {
      question: "Choose the synonym for: CONSIDERATE",
      options: ["Selfish", "Thoughtful", "Mean", "Rude"],
      answer: "Thoughtful",
      explanation: "Both mean showing concern for the needs of others."
    },
    {
      question: "Choose the synonym for: CONSTANT",
      options: ["Changing", "Continuous", "Stopping", "Ending"],
      answer: "Continuous",
      explanation: "Both mean occurring continuously over a period of time."
    },
    {
      question: "Choose the synonym for: CONTAIN",
      options: ["Release", "Hold", "Drop", "Spill"],
      answer: "Hold",
      explanation: "Both mean to have or keep something inside."
    },
    {
      question: "Choose the synonym for: CONTRIBUTE",
      options: ["Take", "Give", "Keep", "Steal"],
      answer: "Give",
      explanation: "Both mean to provide something (money, help) for a common purpose."
    },
    {
      question: "Choose the synonym for: CONVINCE",
      options: ["Doubt", "Persuade", "Force", "Stop"],
      answer: "Persuade",
      explanation: "Both mean to cause someone to believe something."
    },
    {
      question: "Choose the synonym for: COURAGE",
      options: ["Fear", "Bravery", "Weakness", "Doubt"],
      answer: "Bravery",
      explanation: "Both refer to the ability to do something that frightens one."
    },
    {
      question: "Choose the synonym for: COURTEOUS",
      options: ["Rude", "Polite", "Mean", "Rough"],
      answer: "Polite",
      explanation: "Both describe behavior that is respectful and considerate."
    },
    {
      question: "Choose the synonym for: CRITICIZE",
      options: ["Praise", "Judge", "Help", "Support"],
      answer: "Judge",
      explanation: "Both mean to indicate the faults of someone or something."
    },
    {
      question: "Choose the synonym for: CRUEL",
      options: ["Kind", "Ruthless", "Gentle", "Nice"],
      answer: "Ruthless",
      explanation: "Both describe having no pity or compassion."
    },
    {
      question: "Choose the synonym for: DAMAGE",
      options: ["Fix", "Harm", "Build", "Help"],
      answer: "Harm",
      explanation: "Both mean physical injury or impairment."
    },
    {
      question: "Choose the synonym for: DECAY",
      options: ["Grow", "Rot", "Build", "Fresh"],
      answer: "Rot",
      explanation: "Both mean to decompose or decline in quality."
    },
    {
      question: "Choose the synonym for: DECEIVE",
      options: ["Guide", "Cheat", "Help", "Tell"],
      answer: "Cheat",
      explanation: "Both mean to mislead someone or act dishonestly."
    },
    {
      question: "Choose the synonym for: DECREASE",
      options: ["Increase", "Reduce", "Grow", "Expand"],
      answer: "Reduce",
      explanation: "Both mean to make smaller or less in amount."
    },
    {
      question: "Choose the synonym for: DEFEND",
      options: ["Attack", "Protect", "Hurt", "Harm"],
      answer: "Protect",
      explanation: "Both mean to keep safe from harm or injury."
    },
    {
      question: "Choose the synonym for: DELICATE",
      options: ["Strong", "Fragile", "Hard", "Tough"],
      answer: "Fragile",
      explanation: "Both mean easily broken or damaged."
    },
    {
      question: "Choose the synonym for: DEMOLISH",
      options: ["Build", "Destroy", "Create", "Fix"],
      answer: "Destroy",
      explanation: "Both mean to pull or knock down (a building) or ruin."
    },
    {
      question: "Choose the synonym for: DEMONSTRATE",
      options: ["Hide", "Show", "Cover", "Stop"],
      answer: "Show",
      explanation: "Both mean to clearly exhibit or explain something."
    },
    {
      question: "Choose the synonym for: DENY",
      options: ["Admit", "Refuse", "Accept", "Take"],
      answer: "Refuse",
      explanation: "Both mean to say that one will not accept or grant something."
    },
    {
      question: "Choose the synonym for: DEPART",
      options: ["Arrive", "Leave", "Stay", "Come"],
      answer: "Leave",
      explanation: "Both mean to go away from a place."
    },
    {
      question: "Choose the synonym for: DEPOSIT",
      options: ["Withdraw", "Place", "Take", "Remove"],
      answer: "Place",
      explanation: "Both mean to put or set something down in a specific place."
    },
    {
      question: "Choose the synonym for: DESPISE",
      options: ["Love", "Hate", "Like", "Enjoy"],
      answer: "Hate",
      explanation: "Both express intense dislike."
    },
    {
      question: "Choose the synonym for: DESTINY",
      options: ["Choice", "Fate", "Luck", "Past"],
      answer: "Fate",
      explanation: "Both refer to events that are predetermined and inevitable."
    },
    {
      question: "Choose the synonym for: DETACH",
      options: ["Connect", "Separate", "Join", "Glue"],
      answer: "Separate",
      explanation: "Both mean to disengage or remove something."
    },
    {
      question: "Choose the synonym for: DETERMINE",
      options: ["Doubt", "Decide", "Guess", "Ignore"],
      answer: "Decide",
      explanation: "Both mean to come to a resolution or conclusion."
    }
  ],

  // ==========================================
  // LEVEL 3: ADVANCED (Civil Service / Corporate)
  // ==========================================
  advanced: [
    {
      question: "Choose the synonym for: ABANDON",
      options: ["Keep", "Forsake", "Maintain", "Save"],
      answer: "Forsake",
      explanation: "Both mean to leave or give up on someone or something."
    },
    {
      question: "Choose the synonym for: ABBREVIATE",
      options: ["Lengthen", "Condense", "Expand", "Prolong"],
      answer: "Condense",
      explanation: "Both mean to shorten a text or word."
    },
    {
      question: "Choose the synonym for: ACCELERATE",
      options: ["Decelerate", "Hasten", "Stop", "Delay"],
      answer: "Hasten",
      explanation: "Both mean to move or happen faster."
    },
    {
      question: "Choose the synonym for: ACCUMULATE",
      options: ["Disperse", "Gather", "Spend", "Waste"],
      answer: "Gather",
      explanation: "Both mean to collect or acquire an increasing quantity."
    },
    {
      question: "Choose the synonym for: ADEQUATE",
      options: ["Insufficient", "Sufficient", "Lacking", "Poor"],
      answer: "Sufficient",
      explanation: "Both mean enough to meet a need or purpose."
    },
    {
      question: "Choose the synonym for: ADHERE",
      options: ["Separate", "Stick", "Loosen", "Drop"],
      answer: "Stick",
      explanation: "Both mean to hold fast or cling to a surface or rule."
    },
    {
      question: "Choose the synonym for: ADVERSE",
      options: ["Favorable", "Unfavorable", "Helpful", "Good"],
      answer: "Unfavorable",
      explanation: "Both describe conditions that are harmful or preventing success."
    },
    {
      question: "Choose the synonym for: ADVOCATE",
      options: ["Oppose", "Support", "Ignore", "Block"],
      answer: "Support",
      explanation: "Both mean to recommend or argue for a cause."
    },
    {
      question: "Choose the synonym for: AGGRAVATE",
      options: ["Soothe", "Worsen", "Calm", "Help"],
      answer: "Worsen",
      explanation: "Both mean to make a problem or injury more serious."
    },
    {
      question: "Choose the synonym for: ALLEVIATE",
      options: ["Intensify", "Relieve", "Worsen", "Harm"],
      answer: "Relieve",
      explanation: "Both mean to make suffering or a problem less severe."
    },
    {
      question: "Choose the synonym for: AMBIGUOUS",
      options: ["Clear", "Vague", "Certain", "Definite"],
      answer: "Vague",
      explanation: "Both describe something open to more than one interpretation."
    },
    {
      question: "Choose the synonym for: AMICABLE",
      options: ["Hostile", "Friendly", "Rude", "Angry"],
      answer: "Friendly",
      explanation: "Both describe a spirit of friendliness and lack of conflict."
    },
    {
      question: "Choose the synonym for: AMPLIFY",
      options: ["Reduce", "Magnify", "Shrink", "Silence"],
      answer: "Magnify",
      explanation: "Both mean to increase the volume or intensity of something."
    },
    {
      question: "Choose the synonym for: ANGUISH",
      options: ["Joy", "Agony", "Peace", "Comfort"],
      answer: "Agony",
      explanation: "Both mean severe mental or physical pain."
    },
    {
      question: "Choose the synonym for: ANIMOSITY",
      options: ["Love", "Hostility", "Friendship", "Trust"],
      answer: "Hostility",
      explanation: "Both mean strong dislike or enmity."
    },
    {
      question: "Choose the synonym for: ANNIHILATE",
      options: ["Create", "Obliterate", "Build", "Save"],
      answer: "Obliterate",
      explanation: "Both mean to destroy utterly."
    },
    {
      question: "Choose the synonym for: ANTICIPATE",
      options: ["Doubt", "Expect", "Ignore", "Fear"],
      answer: "Expect",
      explanation: "Both mean to regard something as probable or likely to happen."
    },
    {
      question: "Choose the synonym for: APPREHEND",
      options: ["Release", "Arrest", "Free", "Ignore"],
      answer: "Arrest",
      explanation: "In a legal context, both mean to seize someone for a crime."
    },
    {
      question: "Choose the synonym for: APPROXIMATE",
      options: ["Exact", "Estimated", "Precise", "Clear"],
      answer: "Estimated",
      explanation: "Both mean roughly calculated, not exact."
    },
    {
      question: "Choose the synonym for: ARDUOUS",
      options: ["Easy", "Strenuous", "Simple", "Light"],
      answer: "Strenuous",
      explanation: "Both describe a task requiring great effort."
    },
    {
      question: "Choose the synonym for: ARTIFICIAL",
      options: ["Natural", "Synthetic", "Real", "Genuine"],
      answer: "Synthetic",
      explanation: "Both mean made by humans rather than occurring naturally."
    },
    {
      question: "Choose the synonym for: ASSERT",
      options: ["Deny", "Declare", "Hide", "Question"],
      answer: "Declare",
      explanation: "Both mean to state a fact or belief confidently."
    },
    {
      question: "Choose the synonym for: ASSESS",
      options: ["Ignore", "Evaluate", "Neglect", "Guess"],
      answer: "Evaluate",
      explanation: "Both mean to judge or determine the value/quality of something."
    },
    {
      question: "Choose the synonym for: ASTONISH",
      options: ["Bore", "Amaze", "Calm", "Expect"],
      answer: "Amaze",
      explanation: "Both mean to surprise or impress greatly."
    },
    {
      question: "Choose the synonym for: ATROCIOUS",
      options: ["Wonderful", "Dreadful", "Good", "Nice"],
      answer: "Dreadful",
      explanation: "Both mean extremely bad or unpleasant."
    },
    {
      question: "Choose the synonym for: ATTAIN",
      options: ["Fail", "Reach", "Lose", "Drop"],
      answer: "Reach",
      explanation: "Both mean to succeed in achieving something."
    },
    {
      question: "Choose the synonym for: AUTHENTIC",
      options: ["Fake", "Genuine", "False", "Copy"],
      answer: "Genuine",
      explanation: "Both mean truly what something is said to be; real."
    },
    {
      question: "Choose the synonym for: AUTHORITY",
      options: ["Servant", "Power", "Weakness", "Student"],
      answer: "Power",
      explanation: "Both refer to the right or ability to give orders."
    },
    {
      question: "Choose the synonym for: AUXILIARY",
      options: ["Main", "Supplementary", "Primary", "Sole"],
      answer: "Supplementary",
      explanation: "Both mean providing additional or backup support."
    },
    {
      question: "Choose the synonym for: AVERSION",
      options: ["Liking", "Dislike", "Love", "Desire"],
      answer: "Dislike",
      explanation: "Both mean a strong feeling of not liking something."
    },
    {
      question: "Choose the synonym for: BANAL",
      options: ["Original", "Commonplace", "Exciting", "New"],
      answer: "Commonplace",
      explanation: "Both describe something lacking in originality; boring."
    },
    {
      question: "Choose the synonym for: BENEFICIAL",
      options: ["Harmful", "Advantageous", "Bad", "Useless"],
      answer: "Advantageous",
      explanation: "Both mean resulting in good or favorable effects."
    },
    {
      question: "Choose the synonym for: BENEVOLENT",
      options: ["Cruel", "Kind", "Mean", "Selfish"],
      answer: "Kind",
      explanation: "Both describe being well-meaning and kindly."
    },
    {
      question: "Choose the synonym for: BETRAY",
      options: ["Protect", "Deceive", "Save", "Help"],
      answer: "Deceive",
      explanation: "Both involve breaking trust or misleading someone."
    },
    {
      question: "Choose the synonym for: BEWILDER",
      options: ["Clarify", "Confuse", "Explain", "Teach"],
      answer: "Confuse",
      explanation: "Both mean to cause someone to become perplexed."
    },
    {
      question: "Choose the synonym for: BIZARRE",
      options: ["Normal", "Weird", "Regular", "Common"],
      answer: "Weird",
      explanation: "Both mean very strange or unusual."
    },
    {
      question: "Choose the synonym for: BLATANT",
      options: ["Hidden", "Obvious", "Subtle", "Quiet"],
      answer: "Obvious",
      explanation: "Both describe something done openly and unashamedly."
    },
    {
      question: "Choose the synonym for: BLEAK",
      options: ["Bright", "Gloomy", "Happy", "Sunny"],
      answer: "Gloomy",
      explanation: "Both describe an area or outlook that is dark and depressing."
    },
    {
      question: "Choose the synonym for: BOISTEROUS",
      options: ["Quiet", "Noisy", "Calm", "Silent"],
      answer: "Noisy",
      explanation: "Both describe behavior that is energetic and loud."
    },
    {
      question: "Choose the synonym for: BREACH",
      options: ["Fix", "Violation", "Bridge", "Agreement"],
      answer: "Violation",
      explanation: "Both mean an act of breaking a law or agreement."
    },
    {
      question: "Choose the synonym for: BRITTLE",
      options: ["Strong", "Breakable", "Flexible", "Tough"],
      answer: "Breakable",
      explanation: "Both mean hard but liable to break or shatter easily."
    },
    {
      question: "Choose the synonym for: CANDID",
      options: ["Secretive", "Frank", "Lying", "Shy"],
      answer: "Frank",
      explanation: "Both mean truthful and straightforward."
    },
    {
      question: "Choose the synonym for: CAPTIVATE",
      options: ["Repel", "Fascinate", "Bore", "Free"],
      answer: "Fascinate",
      explanation: "Both mean to attract and hold the interest of someone."
    },
    {
      question: "Choose the synonym for: CAUTIOUS",
      options: ["Reckless", "Wary", "Brave", "Fast"],
      answer: "Wary",
      explanation: "Both mean feeling or showing caution about possible dangers."
    },
    {
      question: "Choose the synonym for: CELEBRATED",
      options: ["Unknown", "Famous", "Ignored", "Lost"],
      answer: "Famous",
      explanation: "Both mean greatly admired or known by many."
    },
    {
      question: "Choose the synonym for: CENSURE",
      options: ["Praise", "Condemn", "Approve", "Allow"],
      answer: "Condemn",
      explanation: "Both mean to express severe disapproval."
    },
    {
      question: "Choose the synonym for: CHRONIC",
      options: ["Temporary", "Persistent", "Brief", "Ending"],
      answer: "Persistent",
      explanation: "Both describe an illness or problem continuing for a long time."
    },
    {
      question: "Choose the synonym for: COHERENT",
      options: ["Confused", "Logical", "Messy", "Broken"],
      answer: "Logical",
      explanation: "Both mean clear, logical, and consistent."
    },
    {
      question: "Choose the synonym for: COLLABORATE",
      options: ["Work alone", "Cooperate", "Fight", "Ignore"],
      answer: "Cooperate",
      explanation: "Both mean to work jointly on an activity."
    },
    {
      question: "Choose the synonym for: COMMENCE",
      options: ["Stop", "Start", "End", "Finish"],
      answer: "Start",
      explanation: "Both mean to begin."
    }
  ],

  // ==========================================
  // LEVEL 4: EXPERT (Super Hard / Obscure)
  // ==========================================
  expert: [
    {
      question: "Choose the synonym for: ABATE",
      options: ["Increase", "Subside", "Prolong", "Expand"],
      answer: "Subside",
      explanation: "To abate or subside means to become less intense or widespread."
    },
    {
      question: "Choose the synonym for: ABERRATION",
      options: ["Normality", "Anomaly", "Standard", "Rule"],
      answer: "Anomaly",
      explanation: "Both refer to a departure from what is normal or expected."
    },
    {
      question: "Choose the synonym for: ABHOR",
      options: ["Adore", "Detest", "Like", "Keep"],
      answer: "Detest",
      explanation: "Both mean to regard with disgust and hatred."
    },
    {
      question: "Choose the synonym for: ACQUIESCE",
      options: ["Protest", "Comply", "Fight", "Argue"],
      answer: "Comply",
      explanation: "To acquiesce means to accept something reluctantly but without protest."
    },
    {
      question: "Choose the synonym for: ACRIMONIOUS",
      options: ["Sweet", "Bitter", "Kind", "Gentle"],
      answer: "Bitter",
      explanation: "Both describe speech or debate that is angry and bitter."
    },
    {
      question: "Choose the synonym for: ACUMEN",
      options: ["Ignorance", "Insight", "Stupidity", "Fear"],
      answer: "Insight",
      explanation: "Both refer to the ability to make good judgments and quick decisions."
    },
    {
      question: "Choose the synonym for: ADMONISH",
      options: ["Praise", "Reprimand", "Ignore", "Reward"],
      answer: "Reprimand",
      explanation: "Both mean to warn or scold someone firmly."
    },
    {
      question: "Choose the synonym for: ADROIT",
      options: ["Clumsy", "Skillful", "Slow", "Awkward"],
      answer: "Skillful",
      explanation: "Both mean clever or skillful in using the hands or mind."
    },
    {
      question: "Choose the synonym for: AESTHETIC",
      options: ["Ugly", "Artistic", "Plain", "Rough"],
      answer: "Artistic",
      explanation: "Both relate to the appreciation of beauty."
    },
    {
      question: "Choose the synonym for: ALACRITY",
      options: ["Sluggishness", "Eagerness", "Sadness", "Delay"],
      answer: "Eagerness",
      explanation: "Alacrity means brisk and cheerful readiness."
    },
    {
      question: "Choose the synonym for: ALTRUISTIC",
      options: ["Selfish", "Selfless", "Greedy", "Mean"],
      answer: "Selfless",
      explanation: "Both mean showing a disinterested and selfless concern for others."
    },
    {
      question: "Choose the synonym for: AMELIORATE",
      options: ["Worsen", "Improve", "Damage", "Hurt"],
      answer: "Improve",
      explanation: "To ameliorate means to make something bad better."
    },
    {
      question: "Choose the synonym for: AMORPHOUS",
      options: ["Shapely", "Shapeless", "Solid", "Defined"],
      answer: "Shapeless",
      explanation: "Both mean without a clearly defined shape or form."
    },
    {
      question: "Choose the synonym for: ANACHRONISTIC",
      options: ["Modern", "Outdated", "New", "Future"],
      answer: "Outdated",
      explanation: "Both mean belonging to a period other than that being portrayed (usually old-fashioned)."
    },
    {
      question: "Choose the synonym for: APATHY",
      options: ["Passion", "Indifference", "Love", "Care"],
      answer: "Indifference",
      explanation: "Both mean lack of interest, enthusiasm, or concern."
    },
    {
      question: "Choose the synonym for: APOCRYPHAL",
      options: ["True", "Fictitious", "Proven", "Real"],
      answer: "Fictitious",
      explanation: "Both describe a story of doubtful authenticity."
    },
    {
      question: "Choose the synonym for: APPEASE",
      options: ["Provoke", "Pacify", "Anger", "Ignite"],
      answer: "Pacify",
      explanation: "Both mean to quell the anger or agitation of someone."
    },
    {
      question: "Choose the synonym for: ARCANE",
      options: ["Common", "Esoteric", "Simple", "Known"],
      answer: "Esoteric",
      explanation: "Both mean understood by few; mysterious or secret."
    },
    {
      question: "Choose the synonym for: ASCETIC",
      options: ["Indulgent", "Austere", "Greedy", "Rich"],
      answer: "Austere",
      explanation: "Both describe a lifestyle characterized by severe self-discipline."
    },
    {
      question: "Choose the synonym for: ASSIDUOUS",
      options: ["Lazy", "Diligent", "Careless", "Slow"],
      answer: "Diligent",
      explanation: "Both mean showing great care and perseverance."
    },
    {
      question: "Choose the synonym for: ASSUAGE",
      options: ["Aggravate", "Soothe", "Worsen", "Start"],
      answer: "Soothe",
      explanation: "Both mean to make an unpleasant feeling less intense."
    },
    {
      question: "Choose the synonym for: AUDACIOUS",
      options: ["Timid", "Bold", "Afraid", "Quiet"],
      answer: "Bold",
      explanation: "Both mean showing a willingness to take surprisingly bold risks."
    },
    {
      question: "Choose the synonym for: AUSTERE",
      options: ["Luxurious", "Strict", "Soft", "Easy"],
      answer: "Strict",
      explanation: "Both mean severe or strict in manner, attitude, or appearance."
    },
    {
      question: "Choose the synonym for: AVARICE",
      options: ["Generosity", "Greed", "Kindness", "Poverty"],
      answer: "Greed",
      explanation: "Both mean extreme greed for wealth or material gain."
    },
    {
      question: "Choose the synonym for: BANAL",
      options: ["Unique", "Trite", "Special", "Rare"],
      answer: "Trite",
      explanation: "Both describe something so lacking in originality as to be obvious and boring."
    },
    {
      question: "Choose the synonym for: BELLIGERENT",
      options: ["Peaceful", "Aggressive", "Kind", "Calm"],
      answer: "Aggressive",
      explanation: "Both mean hostile and ready to fight."
    },
    {
      question: "Choose the synonym for: BENEFACTOR",
      options: ["Enemy", "Patron", "Opponent", "Thief"],
      answer: "Patron",
      explanation: "Both refer to a person who gives money or help to a person or cause."
    },
    {
      question: "Choose the synonym for: BENIGN",
      options: ["Harmful", "Harmless", "Fatal", "Toxic"],
      answer: "Harmless",
      explanation: "In medicine and general use, benign means gentle or not harmful."
    },
    {
      question: "Choose the synonym for: BOORISH",
      options: ["Polite", "Rude", "Gentle", "Classy"],
      answer: "Rude",
      explanation: "Both describe bad-mannered, rough, or coarse behavior."
    },
    {
      question: "Choose the synonym for: BRAZEN",
      options: ["Shy", "Shameless", "Hidden", "Modest"],
      answer: "Shameless",
      explanation: "Both mean bold and without shame."
    },
    {
      question: "Choose the synonym for: BUCOLIC",
      options: ["Urban", "Rural", "City", "Modern"],
      answer: "Rural",
      explanation: "Both relate to the pleasant aspects of the countryside."
    },
    {
      question: "Choose the synonym for: BURGEON",
      options: ["Shrink", "Flourish", "Die", "Fade"],
      answer: "Flourish",
      explanation: "Both mean to grow or develop rapidly."
    },
    {
      question: "Choose the synonym for: CACOPHONY",
      options: ["Silence", "Noise", "Music", "Harmony"],
      answer: "Noise",
      explanation: "Both refer to a harsh, discordant mixture of sounds."
    },
    {
      question: "Choose the synonym for: CAJOLE",
      options: ["Force", "Coax", "Bully", "Demand"],
      answer: "Coax",
      explanation: "Both mean to persuade someone to do something by sustained flattery."
    },
    {
      question: "Choose the synonym for: CALLOUS",
      options: ["Sensitive", "Heartless", "Kind", "Soft"],
      answer: "Heartless",
      explanation: "Both mean showing an insensitive and cruel disregard for others."
    },
    {
      question: "Choose the synonym for: CALUMNY",
      options: ["Truth", "Slander", "Praise", "Fact"],
      answer: "Slander",
      explanation: "Both mean the making of false and defamatory statements."
    },
    {
      question: "Choose the synonym for: CANDOR",
      options: ["Deceit", "Honesty", "Lies", "Secrets"],
      answer: "Honesty",
      explanation: "Both mean the quality of being open and honest."
    },
    {
      question: "Choose the synonym for: CAPRICIOUS",
      options: ["Stable", "Fickle", "Constant", "Steady"],
      answer: "Fickle",
      explanation: "Both describe changing mood or behavior suddenly."
    },
    {
      question: "Choose the synonym for: CASTIGATE",
      options: ["Reward", "Punish", "Help", "Save"],
      answer: "Punish",
      explanation: "Both mean to reprimand severely or inflict penalty."
    },
    {
      question: "Choose the synonym for: CAUSTIC",
      options: ["Soothing", "Sarcastic", "Sweet", "Nice"],
      answer: "Sarcastic",
      explanation: "In language, caustic means sarcastic in a scathing and bitter way."
    },
    {
      question: "Choose the synonym for: CELERITY",
      options: ["Slowness", "Speed", "Delay", "Drag"],
      answer: "Speed",
      explanation: "Both mean swiftness of movement."
    },
    {
      question: "Choose the synonym for: CENSURE",
      options: ["Approve", "Criticize", "Accept", "Allow"],
      answer: "Criticize",
      explanation: "To censure means to express severe disapproval."
    },
    {
      question: "Choose the synonym for: CHARLATAN",
      options: ["Expert", "Fraud", "Master", "Teacher"],
      answer: "Fraud",
      explanation: "A charlatan is a person falsely claiming to have special knowledge."
    },
    {
      question: "Choose the synonym for: CHICANERY",
      options: ["Honesty", "Trickery", "Truth", "Fairness"],
      answer: "Trickery",
      explanation: "Both mean the use of trickery to achieve a political, financial, or legal purpose."
    },
    {
      question: "Choose the synonym for: CHURLISH",
      options: ["Nice", "Rude", "Happy", "Polite"],
      answer: "Rude",
      explanation: "Churlish means rude in a mean-spirited and surly way."
    },
    {
      question: "Choose the synonym for: CIRCUMLOCUTION",
      options: ["Directness", "Wordiness", "Silence", "Briefness"],
      answer: "Wordiness",
      explanation: "Both refer to the use of many words where fewer would do."
    },
    {
      question: "Choose the synonym for: CLANDESTINE",
      options: ["Open", "Secret", "Public", "Known"],
      answer: "Secret",
      explanation: "Both describe something kept secret or done secretively."
    },
    {
      question: "Choose the synonym for: COERCE",
      options: ["Allow", "Force", "Ask", "Help"],
      answer: "Force",
      explanation: "To coerce means to persuade an unwilling person to do something by using force."
    },
    {
      question: "Choose the synonym for: COGENT",
      options: ["Weak", "Convincing", "False", "Invalid"],
      answer: "Convincing",
      explanation: "A cogent argument is clear, logical, and convincing."
    },
    {
      question: "Choose the synonym for: COLLUSION",
      options: ["Fight", "Conspiracy", "Agreement", "Honesty"],
      answer: "Conspiracy",
      explanation: "Both mean secret or illegal cooperation or conspiracy."
    }
  ]
};
