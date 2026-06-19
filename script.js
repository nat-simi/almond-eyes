
// =========================
// BIRTHDAY DATE
// =========================
const birthdayDate = new Date("2026-06-27T00:00:00").getTime();

// =========================
// ELEMENTS
// =========================
const countdownEl = document.getElementById("countdown");
const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");

// =========================
// COUNTDOWN TIMER
// =========================
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (countdownEl) {
    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  if (distance < 0) {
    clearInterval(timer);
    unlockSite();
  }

}, 1000);

// =========================
// UNLOCK ANIMATION
// =========================
function unlockSite() {
  lockScreen.style.transition = "1.5s ease";
  lockScreen.style.opacity = "0";
  lockScreen.style.transform = "scale(1.1)";

  setTimeout(() => {
    lockScreen.style.display = "none";
    mainContent.classList.remove("hidden");

    revealOnScroll();
    startConfetti();
  }, 1500);
}

// =========================
// SCROLL REVEAL
// =========================
function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  const reveal = () => {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
}

// =========================
// CONFETTI EFFECT
// =========================
function startConfetti() {
  const end = Date.now() + 3000;

  const colors = ["#ff4fd8", "#9b59b6", "#ffffff", "#7f5af0"];

  const interval = setInterval(() => {
    if (Date.now() > end) return clearInterval(interval);

    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "6px";
    confetti.style.height = "6px";
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    let fall = setInterval(() => {
      confetti.style.top = confetti.offsetTop + 4 + "px";

      if (confetti.offsetTop > window.innerHeight) {
        confetti.remove();
        clearInterval(fall);
      }
    }, 16);

  }, 80);
}

// =========================
// 💖 100 PERFECT LOVE MESSAGES
// =========================
const reasons = [
"Your smile is the first thing I ever want to see every day",
"You make my heart feel safe without saying a word",
"The way you exist feels like peace I never knew I needed",
"You are the most beautiful part of my life story",
"I love how you don’t even realize how special you are",

"You make ordinary moments feel magical",
"Your voice feels like comfort to my soul",
"You are my calm in every storm",
"I feel at home whenever I think of you",
"You are the reason my heart feels full",

"You make love feel soft and easy",
"You are my favorite thought at any time of the day",
"I love how naturally you bring me peace",
"You are my emotional safe space",
"You make everything in life feel lighter",

"You are the warmth I didn’t know I was missing",
"I love how you stay in my mind without trying",
"You are my happiness without effort",
"You make silence feel beautiful",
"You are my favorite kind of feeling",

"You are the reason I believe in love again",
"You make my heart act differently in the best way",
"I love how real and pure you are",
"You are my softest emotion",
"You make my world feel complete",

"You are my peace when everything feels loud",
"I love how your presence changes my mood",
"You are my safe place in human form",
"You make my life feel meaningful",
"You are my favorite reason to smile",

"You are the calm I always search for",
"I love how you exist so beautifully",
"You are my emotional home",
"You make my heart choose you every time",
"You are my sweetest addiction",

"You are my favorite part of reality",
"You make everything feel worth it",
"You are the reason my days feel better",
"I love your energy without explanation",
"You are my forever comfort",

"You are my heart’s favorite place to rest",
"You make love feel natural and real",
"You are my peaceful thought",
"I love how you complete my emotions",
"You are my constant happiness",

"You are the reason I look forward to tomorrow",
"You make every bad day better",
"You are my emotional light",
"I love how you make me feel understood",
"You are my safe love",

"You are my favorite human feeling",
"You make my heart smile randomly",
"You are my inner peace",
"I love how deeply I feel you",
"You are my beautiful coincidence",

"You are my forever mood",
"You make life softer just by existing",
"You are my emotional balance",
"I love how you feel like destiny",
"You are my sweetest truth",

"You are my favorite reason to breathe calmly",
"You make everything around me better",
"You are my heart’s happiness",
"I love how you stay with me in thoughts",
"You are my safe emotion",

"You are my most beautiful habit",
"You make my soul feel lighter",
"You are my favorite connection",
"I love how you feel like home",
"You are my emotional anchor",

"You are my reason to believe in good things",
"You make my world feel stable",
"You are my favorite kind of love",
"I love how you feel like forever",
"You are my deepest comfort",

"You are my heart’s softest place",
"You make everything feel right",
"You are my emotional spark",
"I love how you make me better",
"You are my favorite reality",

"You are my peace in human form",
"You make my heart choose you endlessly",
"You are my forever feeling",
"I love you in ways I cannot explain",
"You are my everything ❤️"
];

// =========================
// RENDER 100 CARDS
// =========================
const grid = document.getElementById("reasonsGrid");

if (grid) {
  reasons.forEach(text => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.innerText = text;
    grid.appendChild(card);
  });
}

// =========================
// INIT
// =========================
window.addEventListener("load", () => {
  if (mainContent) mainContent.classList.add("hidden");
});

