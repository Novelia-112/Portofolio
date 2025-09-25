// --- Animasi muncul tiap section saat scroll ---
const fadeSections = document.querySelectorAll("section");

function checkFade() {
  fadeSections.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);
