const typedText = document.getElementById("typed-text");

const phrases = ["builds LLM systems", "designs agent workflows", "writes Python & Go", "cuts review time"];
const typingDelay = 90;
const erasingDelay = 40;
const holdDelay = 1500;
const nextPhraseDelay = 350;

let phraseIndex = 0;
let charIndex = 0;
let erasing = false;

function tick() {
  const phrase = phrases[phraseIndex];
  charIndex += erasing ? -1 : 1;
  typedText.textContent = phrase.slice(0, charIndex);

  let delay = erasing ? erasingDelay : typingDelay;
  if (!erasing && charIndex === phrase.length) {
    erasing = true;
    delay = holdDelay;
  } else if (erasing && charIndex === 0) {
    erasing = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = nextPhraseDelay;
  }
  setTimeout(tick, delay);
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (typedText && !prefersReducedMotion) {
  charIndex = typedText.textContent.length;
  erasing = true;
  setTimeout(tick, holdDelay);
}
