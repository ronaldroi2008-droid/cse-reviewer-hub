// questions/numerical_pemdas.js
// 200 PEMDAS questions (50 per level) with full step-by-step explanations.

(function () {
  window.NUMERICAL_QUESTION_BANK = window.NUMERICAL_QUESTION_BANK || {};

  // ---------------------------------------------
  // Utilities
  // ---------------------------------------------
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
    return array;
  }

  function makeDistractors(correct, n) {
    const distractors = new Set();
    const deltas = [2, -2, 3, -3, 5, -5, 10, -10, 4, -4, 6, -6];
    let i = 0;

    while (distractors.size < n && i < 50) {
      const d = deltas[i % deltas.length];
      const cand = correct + d;
      if (cand > 0 && cand !== correct) {
        distractors.add(cand);
      }
      i++;
    }

    let k = 1;
    while (distractors.size < n) {
      const cand = correct + (k % 2 === 0 ? k : -k);
      if (cand > 0 && cand !== correct) {
        distractors.add(cand);
      }
      k++;
    }

    return Array.from(distractors);
  }

  function buildQuestionObject(expr, explanation, correct) {
    const distractors = makeDistractors(correct, 3);
    const options = shuffle([correct].concat(distractors)).map(String);
    return {
      question: `Evaluate: ${expr}`,
      options,
      answer: String(correct),
      explanation
    };
  }

  // ---------------------------------------------
  // BEGINNER (simple parentheses + MDAS)
  // ---------------------------------------------

  function makeBeginnerQ1() {
    // a + b × (c − d)
    const a = rand(3, 20);
    const b = rand(2, 9);
    const c = rand(7, 20);
    const d = rand(1, c - 1);
    const inside = c - d;
    const mult = b * inside;
    const result = a + mult;
    const expr = `${a} + ${b} × (${c} − ${d})`;

    const explanation = `Step 1: Work inside the parentheses first: ${c} − ${d} = ${inside}, so the expression becomes ${a} + ${b} × ${inside}.
Step 2: Multiply next: ${b} × ${inside} = ${mult}, so now we have ${a} + ${mult}.
Step 3: Finally, add: ${a} + ${mult} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function makeBeginnerQ2() {
    // (a + b) × c
    const a = rand(2, 15);
    const b = rand(2, 15);
    const c = rand(2, 9);
    const inside = a + b;
    const result = inside * c;
    const expr = `(${a} + ${b}) × ${c}`;

    const explanation = `Step 1: Add inside the parentheses first: ${a} + ${b} = ${inside}.
Step 2: Then multiply the result by ${c}: ${inside} × ${c} = ${result}.
So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function makeBeginnerQ3() {
    // a − b × (c + d)
    let a, b, c, d, inside, mult, result;
    do {
      a = rand(40, 120);
      b = rand(2, 5);
      c = rand(2, 10);
      d = rand(2, 10);
      inside = c + d;
      mult = b * inside;
      result = a - mult;
    } while (result <= 0);

    const expr = `${a} − ${b} × (${c} + ${d})`;

    const explanation = `Step 1: Work inside the parentheses first: ${c} + ${d} = ${inside}, so the expression becomes ${a} − ${b} × ${inside}.
Step 2: Multiply next: ${b} × ${inside} = ${mult}, so now we have ${a} − ${mult}.
Step 3: Finally, subtract: ${a} − ${mult} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function genBeginner(count) {
    const generators = [makeBeginnerQ1, makeBeginnerQ2, makeBeginnerQ3];
    const questions = [];
    for (let i = 0; i < count; i++) {
      const g = generators[i % generators.length];
      questions.push(g());
    }
    return questions;
  }

  // ---------------------------------------------
  // INTERMEDIATE (more steps, include ÷)
  // ---------------------------------------------

  function makeIntermediateQ1() {
    // (a + b) × c ÷ d, with c multiple of d
    const d = rand(2, 5);
    const k = rand(2, 6);
    const c = d * k;
    const a = rand(2, 20);
    const b = rand(2, 20);

    const add = a + b;
    const mult = add * c;
    const result = mult / d;

    const expr = `(${a} + ${b}) × ${c} ÷ ${d}`;

    const explanation = `Step 1: Add inside the parentheses: ${a} + ${b} = ${add}.
Step 2: Multiply this sum by ${c}: ${add} × ${c} = ${mult}.
Step 3: Now divide by ${d}: ${mult} ÷ ${d} = ${result}.
So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function makeIntermediateQ2() {
    // a + b × c − d  (no parentheses, use PEMDAS)
    let a, b, c, d, mult, temp, result;
    do {
      a = rand(10, 80);
      b = rand(2, 9);
      c = rand(2, 9);
      d = rand(2, 20);
      mult = b * c;
      temp = a + mult;
      result = temp - d;
    } while (result <= 0);

    const expr = `${a} + ${b} × ${c} − ${d}`;

    const explanation = `Step 1: Do multiplication before addition and subtraction: ${b} × ${c} = ${mult}, so the expression becomes ${a} + ${mult} − ${d}.
Step 2: Work from left to right. First add: ${a} + ${mult} = ${temp}, so now we have ${temp} − ${d}.
Step 3: Finally, subtract: ${temp} − ${d} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function makeIntermediateQ3() {
    // (a − b) × c + d
    const a = rand(25, 60);
    const b = rand(5, a - 5);
    const c = rand(2, 9);
    const d = rand(2, 20);

    const inside = a - b;
    const mult = inside * c;
    const result = mult + d;

    const expr = `(${a} − ${b}) × ${c} + ${d}`;

    const explanation = `Step 1: Subtract inside the parentheses first: ${a} − ${b} = ${inside}.
Step 2: Multiply the result by ${c}: ${inside} × ${c} = ${mult}.
Step 3: Finally, add ${d}: ${mult} + ${d} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function makeIntermediateQ4() {
    // a + (b + c) × d
    const a = rand(5, 40);
    const b = rand(2, 15);
    const c = rand(2, 15);
    const d = rand(2, 9);

    const inside = b + c;
    const mult = inside * d;
    const result = a + mult;

    const expr = `${a} + (${b} + ${c}) × ${d}`;

    const explanation = `Step 1: Add inside the parentheses: ${b} + ${c} = ${inside}, so the expression becomes ${a} + ${inside} × ${d}.
Step 2: Multiply next: ${inside} × ${d} = ${mult}, so now we have ${a} + ${mult}.
Step 3: Finally, add: ${a} + ${mult} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function genIntermediate(count) {
    const generators = [
      makeIntermediateQ1,
      makeIntermediateQ2,
      makeIntermediateQ3,
      makeIntermediateQ4
    ];
    const questions = [];
    for (let i = 0; i < count; i++) {
      const g = generators[i % generators.length];
      questions.push(g());
    }
    return questions;
  }

  // ---------------------------------------------
  // ADVANCED (multi-step with parentheses + ÷)
  // ---------------------------------------------

  function makeAdvancedQ1() {
    // ((a + b) × c − d) ÷ e
    let a, b, c, e, result, temp, d;
    while (true) {
      a = rand(5, 30);
      b = rand(5, 30);
      c = rand(2, 8);
      e = rand(2, 6);
      result = rand(5, 40);
      temp = (a + b) * c;
      d = temp - result * e;
      if (d > 0 && d < temp) break;
    }

    const step1 = a + b;
    const step2 = step1 * c;
    const step3 = step2 - d;
    const expr = `((${a} + ${b}) × ${c} − ${d}) ÷ ${e}`;

    const explanation = `Step 1: Add inside the inner parentheses: ${a} + ${b} = ${step1}.
Step 2: Multiply this sum by ${c}: ${step1} × ${c} = ${step2}.
Step 3: Subtract ${d}: ${step2} − ${d} = ${step3}.
Step 4: Finally, divide by ${e}: ${step3} ÷ ${e} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function makeAdvancedQ2() {
    // (a + b × (c − d)) ÷ e
    let a, b, c, d, e, inside, result, base, mult;
    while (true) {
      b = rand(2, 9);
      c = rand(10, 30);
      d = rand(1, 9);
      inside = c - d;
      e = rand(2, 6);
      result = rand(4, 30);
      base = result * e;
      mult = b * inside;
      a = base - mult;
      if (a > 0) break;
    }

    const expr = `(${a} + ${b} × (${c} − ${d})) ÷ ${e}`;

    const explanation = `Step 1: Work inside the inner parentheses first: ${c} − ${d} = ${inside}.
Step 2: Multiply next: ${b} × ${inside} = ${mult}.
Step 3: Add ${a}: ${a} + ${mult} = ${base}.
Step 4: Finally, divide by ${e}: ${base} ÷ ${e} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function makeAdvancedQ3() {
    // (a × (b + c) + d) ÷ e
    let a, b, c, d, e, inner, baseMult, result, total;
    while (true) {
      b = rand(3, 15);
      c = rand(3, 15);
      inner = b + c;
      e = rand(2, 6);
      a = rand(2, 9);
      baseMult = a * inner;
      result = rand(5, 30);
      total = result * e;
      d = total - baseMult;
      if (d > 0) break;
    }

    const expr = `(${a} × (${b} + ${c}) + ${d}) ÷ ${e}`;

    const explanation = `Step 1: Work inside the parentheses: ${b} + ${c} = ${inner}.
Step 2: Multiply by ${a}: ${a} × ${inner} = ${baseMult}.
Step 3: Add ${d}: ${baseMult} + ${d} = ${total}.
Step 4: Finally, divide by ${e}: ${total} ÷ ${e} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function makeAdvancedQ4() {
    // (a × b + c × d) ÷ e
    let a, b, c, d, e, part1, part2, total;
    while (true) {
      a = rand(2, 12);
      b = rand(2, 12);
      c = rand(2, 12);
      d = rand(2, 12);
      e = rand(2, 6);
      part1 = a * b;
      part2 = c * d;
      total = part1 + part2;
      if (total % e === 0) break;
    }

    const result = total / e;
    const expr = `(${a} × ${b} + ${c} × ${d}) ÷ ${e}`;

    const explanation = `Step 1: Multiply the first pair: ${a} × ${b} = ${part1}.
Step 2: Multiply the second pair: ${c} × ${d} = ${part2}.
Step 3: Add the two products: ${part1} + ${part2} = ${total}.
Step 4: Finally, divide by ${e}: ${total} ÷ ${e} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function genAdvanced(count) {
    const generators = [
      makeAdvancedQ1,
      makeAdvancedQ2,
      makeAdvancedQ3,
      makeAdvancedQ4
    ];
    const questions = [];
    for (let i = 0; i < count; i++) {
      const g = generators[i % generators.length];
      questions.push(g());
    }
    return questions;
  }

  // ---------------------------------------------
  // EXPERT (longer chains, mix of () × ÷ + −)
  // ---------------------------------------------

  function makeExpertQ1() {
    // ((a + b × (c − d)) ÷ e) + f
    let a, b, c, d, e, f, inside, mult, baseInside, afterDiv, finalResult;
    while (true) {
      b = rand(2, 9);
      c = rand(15, 40);
      d = rand(1, 10);
      inside = c - d;
      e = rand(2, 6);
      afterDiv = rand(4, 25);
      f = rand(2, 15);
      baseInside = afterDiv * e;
      mult = b * inside;
      a = baseInside - mult;
      if (a > 0) {
        finalResult = afterDiv + f;
        break;
      }
    }

    const expr = `((${a} + ${b} × (${c} − ${d})) ÷ ${e}) + ${f}`;

    const explanation = `Step 1: Work inside the inner parentheses: ${c} − ${d} = ${inside}.
Step 2: Multiply next: ${b} × ${inside} = ${mult}.
Step 3: Add ${a}: ${a} + ${mult} = ${baseInside}.
Step 4: Divide by ${e}: ${baseInside} ÷ ${e} = ${afterDiv}.
Step 5: Finally, add ${f}: ${afterDiv} + ${f} = ${finalResult}. So the value of the expression is ${finalResult}.`;

    return buildQuestionObject(expr, explanation, finalResult);
  }

  function makeExpertQ2() {
    // a + (b × (c + d) ÷ e) − f
    let a, b, c, d, e, f, inner, product, mid, resultFinal;
    while (true) {
      c = rand(5, 20);
      d = rand(5, 20);
      inner = c + d;
      e = rand(2, 6);
      b = rand(2, 9);
      product = b * inner;
      if (product % e !== 0) continue;
      mid = product / e;
      f = rand(2, 20);
      resultFinal = rand(10, 60);
      a = resultFinal + f - mid;
      if (a > 0) break;
    }

    const expr = `${a} + (${b} × (${c} + ${d}) ÷ ${e}) − ${f}`;

    const explanation = `Step 1: Add inside the parentheses: ${c} + ${d} = ${inner}.
Step 2: Multiply by ${b}: ${b} × ${inner} = ${product}.
Step 3: Divide by ${e}: ${product} ÷ ${e} = ${mid}.
Step 4: Add this to ${a}: ${a} + ${mid} = ${a + mid}.
Step 5: Subtract ${f}: ${a + mid} − ${f} = ${resultFinal}. So the value of the expression is ${resultFinal}.`;

    return buildQuestionObject(expr, explanation, resultFinal);
  }

  function makeExpertQ3() {
    // (a × b − c × d) ÷ e + f
    let a, b, c, d, e, f, part1, part2, diff, afterDiv, finalResult;
    while (true) {
      a = rand(3, 15);
      b = rand(3, 15);
      c = rand(2, 12);
      d = rand(2, 12);
      part1 = a * b;
      part2 = c * d;
      diff = part1 - part2;
      if (diff <= 0) continue;
      e = rand(2, 6);
      if (diff % e !== 0) continue;
      afterDiv = diff / e;
      f = rand(2, 20);
      finalResult = afterDiv + f;
      break;
    }

    const expr = `(${a} × ${b} − ${c} × ${d}) ÷ ${e} + ${f}`;

    const explanation = `Step 1: Multiply the first pair: ${a} × ${b} = ${part1}.
Step 2: Multiply the second pair: ${c} × ${d} = ${part2}.
Step 3: Subtract the products: ${part1} − ${part2} = ${diff}.
Step 4: Divide by ${e}: ${diff} ÷ ${e} = ${afterDiv}.
Step 5: Finally, add ${f}: ${afterDiv} + ${f} = ${finalResult}. So the value of the expression is ${finalResult}.`;

    return buildQuestionObject(expr, explanation, finalResult);
  }

  function makeExpertQ4() {
    // (a + b) × (c − d) ÷ e
    let a, b, c, d, e, inner1, inner2, product, result;
    while (true) {
      a = rand(5, 30);
      b = rand(5, 30);
      c = rand(20, 50);
      d = rand(5, 15);
      inner1 = a + b;
      inner2 = c - d;
      if (inner2 <= 0) continue;
      product = inner1 * inner2;
      e = rand(2, 10);
      if (product % e !== 0) continue;
      result = product / e;
      break;
    }

    const expr = `(${a} + ${b}) × (${c} − ${d}) ÷ ${e}`;

    const explanation = `Step 1: Add in the first parentheses: ${a} + ${b} = ${inner1}.
Step 2: Subtract in the second parentheses: ${c} − ${d} = ${inner2}.
Step 3: Multiply the two results: ${inner1} × ${inner2} = ${product}.
Step 4: Finally, divide by ${e}: ${product} ÷ ${e} = ${result}. So the value of the expression is ${result}.`;

    return buildQuestionObject(expr, explanation, result);
  }

  function genExpert(count) {
    const generators = [
      makeExpertQ1,
      makeExpertQ2,
      makeExpertQ3,
      makeExpertQ4
    ];
    const questions = [];
    for (let i = 0; i < count; i++) {
      const g = generators[i % generators.length];
      questions.push(g());
    }
    return questions;
  }

  // ---------------------------------------------
  // REGISTER PEMDAS BANK (50 per level = 200)
  // ---------------------------------------------
  const pemdasBank = {
    beginner: genBeginner(50),
    intermediate: genIntermediate(50),
    advanced: genAdvanced(50),
    expert: genExpert(50)
  };

  window.NUMERICAL_QUESTION_BANK["pemdas"] = pemdasBank;
})();
