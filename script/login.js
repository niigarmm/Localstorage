const userName = document.querySelector(".user-name");
const userPw = document.querySelector(".user-pass");
const link = document.querySelector(".link");
const register = document.querySelector(".register");
const langBtn = document.querySelector(".lang-toggle");
const langIcon = document.querySelector(".fa-language");
let currentLang = localStorage.getItem("lang") || "en";
const modeBtn = document.querySelector(".mode-toggle");
const icon = document.querySelector(".fa-sun");
const title = document.querySelectorAll("h1");
const page = document.querySelectorAll(".page");
const parg = document.querySelectorAll(".parg");

const lang = {
  en: {
    title: ["Todo App", "Login To Your Account"],
    page: ["Sign Up Free!", "Forgot Password?","Login With Email"],
    parg: [
      "Login using your social media account",
      "Facebook",
      "Twitter",
      "Linkedin",
      "Google Plus",
      "Dont you have account?",
      "Remember Me",
    ],
  },
  az: {
    title: ["Todo Proqrami", "Hesabına daxil ol"],
    page: [
        "Ödənişsiz Daxil olun!",
      "Parolu unutmusan?",
      "Email ilə daxil olun",
      
    ],
    parg: [
      "Sosial Media hesabları ilə daxil olun",
      "Facebook",
      "Twitter",
      "Linkedin",
      "Google Plus",
      "Hələ də hesabıın yoxdur?",
      "Məni Xatırla!",
    ],
  },
};

if (currentLang === "en") {
  lang.en.title.map((item, index) => {
    title[index].innerHTML = item;
  });
  lang.en.page.map((item, index) => {
    page[index].innerHTML = item;
  });
  lang.en.parg.map((item, index) => {
    parg[index].innerHTML = item;
  });
} else {
  lang.az.title.map((item, index) => {
    title[index].innerHTML = item;
  });
  lang.az.page.map((item, index) => {
    page[index].innerHTML = item;
  });
  lang.az.parg.map((item, index) => {
    parg[index].innerHTML = item;
  });
}
langBtn.onclick = () => {
  console.log("salam");
  currentLang = currentLang === "en" ? "az" : "en";
  localStorage.setItem("lang", currentLang);

  title.forEach((item, index) => {
    item.innerHTML =
      currentLang === "en" ? lang.en.title[index] : lang.az.title[index];
  });
  parg.forEach((item, index) => {
    item.innerHTML =
      currentLang === "en" ? lang.en.parg[index] : lang.az.parg[index];
  });
  page.forEach((item, index) => {
    item.innerHTML =
      currentLang === "en" ? lang.en.page[index] : lang.az.page[index];
  });
};

link.onclick = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    if (
      userName.value === storedUser.email &&
      userPw.value === storedUser.password
    ) {
      window.location.href = "./todo.html";
    } else {
      alert("Incorrect email or password.");
    }
  } else {
    alert("ERROR");
  }
};

const savedTheme = localStorage.getItem("theme") || "dark";
function applyTheme(theme) {
  if (theme === "light") {
    register.className = "dark-mode-div";
    icon.className = "fa-solid fa-moon";
    langIcon.classList.add("dark-icon");
    langIcon.classList.remove("light-lang");
  } else {
    langIcon.classList.add("light-lang");
    langIcon.classList.remove("dark-icon");
    register.className = "register";
    icon.className = "fa-solid fa-sun";
  }
  localStorage.setItem("theme", theme);
}

modeBtn.onclick = () => {
  const currentTheme =
    localStorage.getItem("theme") === "light" ? "dark" : "light";
  applyTheme(currentTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
});
