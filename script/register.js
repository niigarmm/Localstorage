const nameIn = document.querySelector(".name");
const emailIn = document.querySelector(".email");
const passIn = document.querySelector(".pass");
const btn = document.querySelector(".check");
const register = document.querySelector(".register");
const langBtn = document.querySelector(".lang-toggle");
const langIcon = document.querySelector(".fa-language");
const modeBtn = document.querySelector(".mode-toggle");
const icon = document.querySelector(".fa-sun");
const title = document.querySelectorAll("h1");
const page = document.querySelectorAll(".page");
const parg = document.querySelectorAll(".parg");
let currentLang = localStorage.getItem("lang") || "en";

const lang = {
  en: {
    title: ["Todo App", "Register To Your Account"],
    page: ["Sign İn!", "Forgot Password?", "Register"],
    parg: [
      "Register using your social media account",
      "Facebook",
      "Twitter",
      "Linkedin",
      "Google Plus",
      "Dont you have account?",
      "Remember Me",
    ],
  },
  az: {
    title: ["Todo Proqrami", "Hesabından qeydiyyatdan keç"],
    page: [
      "Daxil olun!",
      "Parolu unutmusan?",
      "Qeydiyyatdan keç",
    ],
    parg: [
      "Sosial Media hesabları ilə qeydiyyatdan keç",
      "Facebook",
      "Twitter",
      "Linkedin",
      "Google Plus",
      "Hesabin var?",
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

const savedTheme = localStorage.getItem("theme") || "dark";
function applyTheme(theme) {
  if (theme === "light") {
    register.className = "dark-mode-div";
    icon.className = "fa-solid fa-moon";
    icon.style.color = "black"
    langIcon.classList.add("dark-icon");
    langIcon.classList.remove("light-lang");
  } else {
    langIcon.classList.add("light-lang");
    langIcon.classList.remove("dark-icon");
    register.className = "register";
    icon.className = "fa-solid fa-sun";
    icon.style.color = "white"
  }
  localStorage.setItem("theme", theme);
}

modeBtn.onclick = () => {
  const currentTheme =
    localStorage.getItem("theme") === "light" ? "dark" : "light";
  applyTheme(currentTheme);
};

btn.onclick = () => {
  const name = nameIn.value;
  const email = emailIn.value;
  const password = passIn.value;

  if (name && email && password) {
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    // localStorage.setItem("storedUser.name", name);
    alert("Registration successful! You can now log in.");
    window.location.href = "../html/login.html";
  } else {
    alert("Please fill in all fields.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
});

