// questions/numerical_pemdas.js
// Builds 50 PEMDAS questions per level (Beginner, Intermediate, Advanced, Expert)

window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

// ---------------------------
// Helpers
// ---------------------------

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function makeOptions(correct, spread = 5) {
  const opts = new Set();
  opts.add(correct);

  const deltas = [];
  for (let d = -spread; d <= spread; d++) deltas.push(d);
  const shuffledDeltas = shuffle(deltas);

  for (const d of shuffledDeltas) {
    if (opts.size >= 4) break;
    const cand = correct + d;
    if (cand <= 0 || cand === correct) continue;
    opts.add(cand);
  }

  let k = 1;
  while (opts.size < 4) {
    const cand = correct + spread + k;
    if (cand > 0) opts.add(cand);
    k++;
  }

  return shuffle(Array.from(opts)).map((x) => String(x));
}

function makeQuestion(expr, ans, explanation, wordingType) {
  let text;
  if (wordingType === 0) {
    text = "Evaluate the expression: " + expr;
  } else if (wordingType === 1) {
    text = "Using the order of operations, find the value of " + expr + ".";
  } else {
    text = "What is the result when you simplify " + expr + "?";
  }

  return {
    question: text,
    options: makeOptions(ans),
    answer: String(ans),
    explanation: explanation
  };
}

function generateForLevel(patternFns) {
  const questions = [];
  const count = 50; // 50 items per level

  for (let i = 0; i < count; i++) {
    const pattern = patternFns[i % patternFns.length];
    const { expr, ans, explanation } = pattern();
    const wordingType = i % 3;
    questions.push(makeQuestion(expr, ans, explanation, wordingType));
  }

  return questions;
}

// ---------------------------
// Pattern generators
// (Each returns { expr, ans, explanation })
// ---------------------------

// 1) a + b × c
function patternAddMult() {
  const a = randInt(2, 15);
  const b = randInt(2, 10);
  const c = randInt(2, 10);
  const ans = a + b * c;
  const expr = `${a} + ${b} × ${c}`;
  const explanation =
    `By PEMDAS, do multiplication first (${b} × ${c}), then add ${a}.`;
  return { expr, ans, explanation };
}

// 2) (a + b) × c
function patternParenAddThenMult() {
  const a = randInt(2, 20);
  const b = randInt(2, 20);
  const c = randInt(2, 10);
  const inside = a + b;
  const ans = inside * c;
  const expr = `(${a} + ${b}) × ${c}`;
  const explanation =
    "Add the numbers inside the parentheses first, then multiply the result by the number outside.";
  return { expr, ans, explanation };
}

// 3) a × b + c − d
function patternMultThenAddSub() {
  const a = randInt(2, 15);
  const b = randInt(2, 10);
  const c = randInt(2, 15);
  const d = randInt(1, 10);
  const ans = a * b + c - d;
  const expr = `${a} × ${b} + ${c} − ${d}`;
  const explanation =
    "Use PEMDAS: multiply first, then perform addition and subtraction from left to right.";
  return { expr, ans, explanation };
}

// 4) (a + b) ÷ c − d   (positive result)
function patternParenThenDivSub() {
  while (true) {
    const c = randInt(2, 10);
    const qv = randInt(2, 12);
    const total = qv * c;
    const a = randInt(1, total - 1);
    const b = total - a;
    const d = randInt(1, 10);
    const ans = total / c - d;

    if (ans > 0) {
      const expr = `(${a} + ${b}) ÷ ${c} − ${d}`;
      const explanation =
        "First add inside the parentheses, then divide, then subtract the last number.";
      return { expr, ans, explanation };
    }
  }
}

// 5) (a + b) × (c − d)
function patternTwoParensMult() {
  const a = randInt(1, 15);
  const b = randInt(1, 15);
  const c = randInt(10, 25);
  const d = randInt(1, 9);
  const inside1 = a + b;
  const inside2 = c - d;
  const ans = inside1 * inside2;
  const expr = `(${a} + ${b}) × (${c} − ${d})`;
  const explanation =
    "Solve each set of parentheses first, then multiply the two results.";
  return { expr, ans, explanation };
}

// 6) a + b × c ÷ d
function patternAddMultDiv() {
  let b, c, d, prod;
  while (true) {
    b = randInt(2, 10);
    c = randInt(2, 10);
    prod = b * c;
    const divisors = [];
    for (let x = 2; x <= 10; x++) {
      if (prod % x === 0) divisors.push(x);
    }
    if (divisors.length > 0) {
      d = divisors[randInt(0, divisors.length - 1)];
      break;
    }
  }
  const a = randInt(1, 20);
  const frac = prod / d;
  const ans = a + frac;
  const expr = `${a} + ${b} × ${c} ÷ ${d}`;
  const explanation =
    "Multiply and divide first from left to right, then add the result to the first number.";
  return { expr, ans, explanation };
}

// 7) a × (b + (c − d))
function patternNestedParens() {
  const a = randInt(2, 9);
  const c = randInt(5, 20);
  const d = randInt(1, 4);
  const inner = c - d;
  const b = randInt(1, 10);
  const middle = b + inner;
  const ans = a * middle;
  const expr = `${a} × (${b} + (${c} − ${d}))`;
  const explanation =
    "Start with the innermost parentheses, then the outer parentheses, and finally multiply by the number outside.";
  return { expr, ans, explanation };
}

// 8) (a + b ÷ c) × d
function patternParenDivInside() {
  const d = randInt(2, 9);
  const c = randInt(2, 9);
  const qv = randInt(1, 10);
  const b = c * qv;
  const a = randInt(1, 15);
  const inside = a + b / c;
  const ans = inside * d;
  const expr = `(${a} + ${b} ÷ ${c}) × ${d}`;
  const explanation =
    "Do the division inside the parentheses first, then add, then multiply by the number outside.";
  return { expr, ans, explanation };
}

// 9) a × (b + c) − d × e   (positive answer)
function patternTwoMultTermsPos() {
  while (true) {
    const a = randInt(2, 9);
    const b = randInt(1, 10);
    const c = randInt(1, 10);
    const d = randInt(2, 9);
    const e = randInt(1, 10);
    const left = a * (b + c);
    const right = d * e;
    const ans = left - right;

    if (ans > 0) {
      const expr = `${a} × (${b} + ${c}) − ${d} × ${e}`;
      const explanation =
        "Work out each multiplication term (with parentheses) first, then subtract the second product from the first.";
      return { expr, ans, explanation };
    }
  }
}

// ---------------------------
// Pattern sets per level
// ---------------------------

const PEMDAS_BEGINNER_PATTERNS = [
  patternAddMult,
  patternParenAddThenMult,
  patternMultThenAddSub,
  patternParenThenDivSub
];

const PEMDAS_INTERMEDIATE_PATTERNS = [
  patternAddMult,
  patternParenAddThenMult,
  patternParenThenDivSub,
  patternAddMultDiv,
  patternTwoParensMult
];

const PEMDAS_ADVANCED_PATTERNS = [
  patternAddMultDiv,
  patternTwoParensMult,
  patternNestedParens,
  patternParenDivInside,
  patternTwoMultTermsPos
];

const PEMDAS_EXPERT_PATTERNS = [
  patternNestedParens,
  patternParenDivInside,
  patternTwoMultTermsPos,
  patternAddMultDiv,
  patternTwoParensMult
];

// ---------------------------
// Build the bank (50 per level)
// ---------------------------

window.NUMERICAL_QUESTION_BANK["pemdas"] = {
  beginner: generateForLevel(PEMDAS_BEGINNER_PATTERNS),
  intermediate: generateForLevel(PEMDAS_INTERMEDIATE_PATTERNS),
  advanced: generateForLevel(PEMDAS_ADVANCED_PATTERNS),
  expert: generateForLevel(PEMDAS_EXPERT_PATTERNS)
};
