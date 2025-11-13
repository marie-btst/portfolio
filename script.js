// ================== SCROLL TOP ==================
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================== HOVER IMAGES ==================
document.querySelectorAll('.illustration').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transition = 'transform 0.3s, box-shadow 0.3s';
    img.style.transform = 'scale(1.1) rotate(5deg)';
    img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1) rotate(0deg)';
    img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  });
});

// ================== DARK MODE ==================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");

  // Charger l'état sauvegardé
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
  }

  // Bouton dark mode
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Sauvegarder l'état
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

// ================== TEXTE ANIMATION ==================
function animateText(selector, speed = 200) {
  const element = document.querySelector(selector);
  const text = element.textContent;
  element.textContent = '';
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// Animation titre header
animateText('header h1', 180);

// ================== APPARITION AU SCROLL ==================
const faders = document.querySelectorAll('#about, #contact');

const appearOptions = {
  threshold: 0.4,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.opacity = 0;
  fader.style.transform = 'translateY(50px)';
  fader.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  appearOnScroll.observe(fader);
});

// ================== BOUTON HOVER ==================
const buttons = document.querySelectorAll('.theme-btn, #scrollTopBtn');
buttons.forEach(btn => {
  btn.addEventListener('mouseover', () => btn.style.transform = 'scale(1.1)');
  btn.addEventListener('mouseout', () => btn.style.transform = 'scale(1)');
});

// ================== FONDU AU CHARGEMENT ==================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ================== STRAVA ==================
const stravaBtn = document.getElementById("stravaBtn");
if (stravaBtn) {
  stravaBtn.addEventListener("click", () => {
    window.open("https://www.strava.com/athletes/154194099", "_blank");
  });
}

// ================== ACCORDÉON ==================
document.addEventListener("DOMContentLoaded", () => {
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const isActive = content.classList.contains("active");

      // Fermer tous les autres accordéons
      document.querySelectorAll(".accordion-content.active").forEach(openContent => {
        openContent.classList.remove("active");
        openContent.previousElementSibling.classList.remove("active");
      });

      // Ouvrir/fermer l'accordéon cliqué
      if (!isActive) {
        content.classList.add("active");
        btn.classList.add("active");
      }
    });
  });
});
