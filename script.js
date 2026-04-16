const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.setAttribute("data-theme", "light");
}

const updateToggleIcon = () => {
  if (!themeToggle) return;
  const lightMode = root.getAttribute("data-theme") === "light";
  themeToggle.textContent = lightMode ? "☀️" : "🌙";
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const lightMode = root.getAttribute("data-theme") === "light";
    if (lightMode) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    updateToggleIcon();
  });
}

updateToggleIcon();
