// Simple scroll animation
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
