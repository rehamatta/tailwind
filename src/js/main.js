const html = document.documentElement;
const button = document.querySelector(".dark-mode");

function setMode(mode) {
  html.className = mode;
  localStorage.setItem("mode", mode);

  button.innerHTML =
    mode === "dark"
      ? `<i class="fa-solid fa-sun"></i>`
      : `<i class="fa-solid fa-moon"></i>`;
}

const savedMode = localStorage.getItem("mode") || "light";
setMode(savedMode);

button.addEventListener("click", () => {
  const currentMode = html.classList.contains("dark") ? "light" : "dark";
  setMode(currentMode);
});
