// Scroll fade-in effect
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section-bg");
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});
