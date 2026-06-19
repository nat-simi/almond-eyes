// =========================
// SET YOUR BIRTHDAY DATE HERE
// Format: YYYY-MM-DD
// =========================
const birthdayDate = new Date("2026-07-01T00:00:00").getTime();

// =========================
// COUNTDOWN ELEMENTS
// =========================
const countdownEl = document.getElementById("countdown");
const heroSection = document.querySelector(".hero");
const lockedOverlay = document.getElementById("locked");

// =========================
// UPDATE COUNTDOWN EVERY SECOND
// =========================
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  if (countdownEl) {
    countdownEl.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

  // If countdown is finished
  if (distance < 0) {
    clearInterval(timer);

    if (countdownEl) {
      countdownEl.innerHTML = "🎉 HAPPY BIRTHDAY 🎉";
    }

    // Unlock website
    if (lockedOverlay) {
      lockedOverlay.style.display = "none";
    }

    document.body.classList.add("unlocked");
  }
}, 1000);

// =========================
// FADE-IN ANIMATION ON SCROLL
// =========================
const fadeElements = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
  fadeElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =========================
// OPTIONAL: SIMPLE CLICK EFFECT
// =========================
document.addEventListener("click", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
});
