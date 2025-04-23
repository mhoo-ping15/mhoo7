

function on() {
    // document.getElementById("overlay").style.display = "block";
    // document.getElementById("overlay").classList.add("active");
    
    const overlay = document.getElementById("overlay");

    // ✨ First, set display so it's visible
    overlay.style.display = "block";

    // ✨ Wait for display update before applying the fade-in class
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
    });

    document.body.classList.add("overlay-active"); // Add this line

  }


function off() {
    // document.getElementById("overlay").style.display = "none";
    // document.getElementById("overlay").classList.remove("active");
    
    const overlay = document.getElementById("overlay");

    // ✨ Remove fade-in class (triggers fade-out)
    overlay.classList.remove("visible");

    // ✨ After fade-out transition ends, hide it fully
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500); // ⏱️ must match CSS transition duration

    document.body.classList.remove("overlay-active"); // Add this line

  }


window.addEventListener('scroll', () => {
    const banner = document.getElementById('banner');
    if (window.scrollY > 300) {
      banner.classList.add('visible');
    } else {
      banner.classList.remove('visible');
    }
  });


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



