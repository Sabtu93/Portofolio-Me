// ==========================================================
// Tahun otomatis di footer
// ==========================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ==========================================================
// Header berubah saat scroll
// ==========================================================
const header = document.getElementById("site-header");
const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ==========================================================
// Toggle menu mobile
// ==========================================================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
});

// Tutup menu mobile saat salah satu link diklik
navMenu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ==========================================================
// Highlight link navigasi sesuai section yang sedang dilihat
// ==========================================================
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__link");

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const match = link.getAttribute("href") === `#${id}`;
    link.style.color = match ? "var(--color-text)" : "";
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

function moveSlide(event, direction) {
  if (event) event.preventDefault();

  const container = event.target.closest('.work__featured-visual');
  const track = container.querySelector('.slider-track');
  const slides = container.querySelectorAll('.slide');
  
  let currentIndex = parseInt(track.dataset.index || '0', 10);
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex >= totalSlides) {
    currentIndex = 0; 
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1; 
  }

  track.dataset.index = currentIndex;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}