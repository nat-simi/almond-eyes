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

  // =========================
  // UNLOCK EVENT
  // =========================
  if (distance < 0) {
    clearInterval(timer);
    unlockExperience();
  }

}, 1000);

// =========================
// UNLOCK EXPERIENCE
// =========================
function unlockExperience() {

  // fade out lock screen
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
// SCROLL REVEAL (100 CARDS ANIMATION)
// =========================
function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  const reveal = () => {
    elements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
}

// =========================
// CONFETTI EFFECT (CINEMATIC)
// =========================
function startConfetti() {
  const duration = 3500;
  const end = Date.now() + duration;

  const colors = ["#ff4fd8", "#9b59b6", "#ffffff", "#7f5af0", "#ffcc70"];

  const interval = setInterval(() => {
    if (Date.now() > end) {
      return clearInterval(interval);
    }

    createConfetti(colors);
  }, 80);
}

function createConfetti(colors) {
  const confetti = document.createElement("div");

  confetti.style.position = "fixed";
  confetti.style.width = "6px";
  confetti.style.height = "6px";
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.top = "-10px";
  confetti.style.zIndex = "9999";
  confetti.style.borderRadius = "50%";
  confetti.style.opacity = "0.9";

  document.body.appendChild(confetti);

  const fall = setInterval(() => {
    confetti.style.top = confetti.offsetTop + 4 + "px";

    if (confetti.offsetTop > window.innerHeight) {
      confetti.remove();
      clearInterval(fall);
    }
  }, 16);
}

// =========================
// SAFETY: INIT STATE
// =========================
window.addEventListener("load", () => {
  if (mainContent) {
    mainContent.classList.add("hidden");
  }
});
