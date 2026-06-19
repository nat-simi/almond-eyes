const birthdayDate = new Date("2026-06-27T00:00:00").getTime();

const countdownEl = document.getElementById("countdown");
const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  if (countdownEl) {
    countdownEl.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
  }

  if (distance < 0) {
    clearInterval(timer);
    unlock();
  }
}, 1000);

function unlock() {
  lockScreen.style.opacity = "0";
  lockScreen.style.transform = "scale(1.1)";
  lockScreen.style.transition = "1.5s ease";

  setTimeout(() => {
    lockScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    animateReveal();
    confetti();
  }, 1500);
}

function animateReveal() {
  const items = document.querySelectorAll(".fade-in");

  const reveal = () => {
    items.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
}

/* simple cinematic confetti */
function confetti() {
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.width = "6px";
    c.style.height = "6px";
    c.style.background = ["#ff4fd8","#9b59b6","#fff","#7f5af0"][Math.floor(Math.random()*4)];
    c.style.left = Math.random()*100+"vw";
    c.style.top = "-10px";
    c.style.zIndex = 9999;
    document.body.appendChild(c);

    let fall = setInterval(() => {
      c.style.top = c.offsetTop + 4 + "px";
      if (c.offsetTop > window.innerHeight) {
        c.remove();
        clearInterval(fall);
      }
    }, 20);
  }
}
