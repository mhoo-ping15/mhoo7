// ======================== column-experience ===================================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".column-experience");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  elements.forEach(el => observer.observe(el));
});





// // ===========================================================
// window.addEventListener("load", () => {
// const path = document.getElementById("animatedPath");
// const length = path.getTotalLength();
// path.style.strokeDasharray = length;
// path.style.strokeDashoffset = length;
// // Trigger animation
// path.style.animation = "drawPath 5s ease forwards";
// });

// // ===========================================================

// const wrappers = document.querySelectorAll('.fadein-title .letter-fadein');
// const parent = document.getElementById('textSection');

// function isInViewport(el) {
// const rect = el.getBoundingClientRect();
// return (
// rect.top < window.innerHeight &&
// rect.bottom > 0
// );
// }

// function handleScroll() {
// if (isInViewport(parent)) {
// wrappers.forEach((el, i) => {
//   el.style.transitionDelay = `${i * 100}ms`;
//   el.classList.add('visible');
// });
// } else {
// wrappers.forEach(el => {
//   el.classList.remove('visible');
//   el.style.transitionDelay = '0ms';
// });
// }
// }

// window.addEventListener('scroll', handleScroll);
// handleScroll(); // run on load

