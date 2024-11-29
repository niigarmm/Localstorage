const main = document.querySelector(".main-div");
const modeBtn = document.querySelector(".mode-toggle");
const icon = document.querySelector(".fa-sun");
const gif = document.querySelector(".gif");
const langBtn = document.querySelector(".lang-toggle");
const title = document.querySelector(".title");
const parg = document.querySelector(".parg");
const langIcon = document.querySelector(".fa-language");
let currentLang = localStorage.getItem("lang") || "en";
let leftPart =  document.querySelector(".left-part");

if (currentLang === "en") {
  title.innerHTML = "A simple to do list to manage it all";
  parg.innerHTML =
    "Easily manage your personal tasks, family projects, and team’s work all in one place. Trusted by +40M people";
} else {
  title.innerHTML = "Hər şeyi idarə etmək üçün sadə bir siyahı";
  parg.innerHTML =
    "Şəxsi tapşırıqlarınızı, ailə layihələrinizi və komanda işinizi bir yerdə asanlıqla idarə edin. +40 milyon insan tərəfindən etibar edilmişdir";
}
langBtn.onclick = () => {
  currentLang = currentLang === "az" ? "en" : "az";
  localStorage.setItem("lang", currentLang);
  title.innerHTML =
    currentLang === "az"
      ? "Hər şeyi idarə etmək üçün sade bir siyahı"
      : "A simple to do list to manage it all";
  parg.innerHTML =
    currentLang === "az"
      ? "Şəxsi tapşırıqlarınızı, ailə layihələrinizi və komanda işinizi bir yerdə asanlıqla idarə edin. +40 milyon insan tərəfindən etibar edilmişdir"
      : "Easily manage your personal tasks, family projects, and team’s work all in one place. Trusted by +40M people";
};

const savedTheme = localStorage.getItem("theme") || "dark";
function applyTheme(theme) {
  if (theme === "light") {
    main.className = "dark-mode-div";
    icon.className = "fa-solid fa-moon";
    langIcon.classList.add("dark-icon");
    langIcon.classList.remove("light-lang");   
    gif.src =
      "https://i.pinimg.com/originals/84/a0/13/84a013d95aea9bb541d7ab5ffc84117e.gif";
  } else {
    langIcon.classList.add("light-lang");
    langIcon.classList.remove("dark-icon");
    main.className = "main-div";
    icon.className = "fa-solid fa-sun";
    gif.src = "image_processing20191018-26745-1vb5jmd.gif";
  }
  localStorage.setItem("theme", theme);
}

modeBtn.onclick = () => {
  const currentTheme =
    localStorage.getItem("theme") === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
};
