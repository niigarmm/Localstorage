let input = document.querySelector("input");
let ul = document.querySelector("ul");
let form = document.querySelector("form");
let list = document.querySelector(".right-part");
let result = document.querySelector(".result-p");
let clear = document.querySelector(".clear");
const todo = document.querySelector(".todo");
const langBtn = document.querySelector(".lang-toggle");
const langIcon = document.querySelector(".fa-language");
let currentLang = localStorage.getItem("lang") || "en";
const modeBtn = document.querySelector(".mode-toggle");
const icon = document.querySelector(".fa-sun");
const bird = document.querySelector(".bird");
const title = document.querySelector("h1");
const parg = document.querySelectorAll(".parg");
const button = document.querySelector(".clear");


const TODO_LIST_KEY = "myTodoList";
document.addEventListener("DOMContentLoaded", () => {
  const savedTask = JSON.parse(localStorage.getItem(TODO_LIST_KEY)) || [];
  savedTask.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = task;
    const btn = document.createElement("button");
    const edit = document.createElement("button");
    const editIcon = document.createElement("i");
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-trash");
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square");
    btn.setAttribute("class", "remove");
    edit.setAttribute("class", "editbtn");
    li.innerHTML = input.value;
    btn.setAttribute("type", "button");
    edit.setAttribute("type", "button");
    clear.setAttribute("type", "button");
    li.setAttribute("data-aos", "flip-right");
    edit.append(editIcon);
    btn.append(icon);
    li.appendChild(edit);
    li.appendChild(btn);
    // let count = ul.querySelectorAll("li").length;
    input.value = "";
    // result.innerHTML = `You have ${count} task`;
    // var audio = new Audio("zapsplat_cartoon_pop_bubble_etc_001_45556.mp3");
    // audio.play();
    edit.onclick = () => {
      const currentText = li.textContent;
      const textera = document.createElement("textarea");
      textera.setAttribute("class", "textera");
      li.innerHTML = "";
      textera.value = currentText;
      li.appendChild(textera);

      const saveBtn = document.createElement("button");
      saveBtn.innerHTML = "Save";
      saveBtn.setAttribute("class", "savebtn");
      li.appendChild(saveBtn);
      saveBtn.onclick = () => {
        const updatedText = textera.value;
        if (updatedText) {
          li.innerHTML = updatedText; // Yeni mətni tətbiq et
          li.appendChild(edit); // Redaktə düyməsini qaytar
          li.appendChild(btn); // Sil düyməsini qaytar
        } else {
          alert("Task cannot be empty!");
        }
      };
    };
    btn.onclick = () => {
      li.remove();
      btn.remove();
      updateTaskCount();
      var audio = new Audio("zapsplat_cartoon_pop_bubble_etc_001_45556.mp3");
      audio.play();
      // count -= 1;
      // result.innerHTML = `You have ${count} task`;
    };
    clear.onclick = () => {
      ul.innerHTML = "";
      localStorage.setItem("nigar", "salam");
      localStorage.removeItem("myTodoList");
      updateTaskCount();
      var audio = new Audio("zapsplat_cartoon_pop_bubble_etc_001_45556.mp3");
      audio.play();
      // result.innerHTML = `You have ${count} tasks`;
    };
    ul.appendChild(li);
  });
  console.log(savedTask); 
  updateTaskCount();
});
form.onsubmit = (e) => {
  e.preventDefault();
  if (!input.value) {
    alert("Fill the input");
  } else {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const edit = document.createElement("button");
    const editIcon = document.createElement("i");
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-trash");
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square");
    btn.setAttribute("class", "remove");
    edit.setAttribute("class", "editbtn");
    const tasks = JSON.parse(localStorage.getItem(TODO_LIST_KEY)) || [];
    tasks.push(input.value);
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(tasks));
    li.innerHTML = input.value;
    btn.setAttribute("type", "button");
    edit.setAttribute("type", "button");
    clear.setAttribute("type", "button");
    li.setAttribute("data-aos", "flip-right");
    edit.append(editIcon);
    btn.append(icon);
    ul.appendChild(li);
    li.appendChild(edit);
    li.appendChild(btn);
    // let count = ul.querySelectorAll("li").length;
    input.value = "";
    // result.innerHTML = `You have ${count} task`;
    var audio = new Audio("zapsplat_cartoon_pop_bubble_etc_001_45556.mp3");
    audio.play();
    updateTaskCount();
    edit.onclick = () => {
      const currentText = li.textContent;
      const textera = document.createElement("textarea");
      textera.setAttribute("class", "textera");
      li.innerHTML = "";
      textera.value = currentText;
      li.appendChild(textera);
  
      const saveBtn = document.createElement("button");
      saveBtn.innerHTML = "Save";
      saveBtn.setAttribute("class", "savebtn");
      li.appendChild(saveBtn);
      saveBtn.onclick = () => {
        const updatedText = textera.value;
        if (updatedText) {
          li.innerHTML = updatedText; // Yeni mətni tətbiq et
          li.appendChild(edit); // Redaktə düyməsini qaytar
          li.appendChild(btn); // Sil düyməsini qaytar
        } else {
          alert("Task cannot be empty!");
        }
      };
    };
    btn.onclick = () => {
      li.remove();
      btn.remove();
      updateTaskCount();
      var audio = new Audio("zapsplat_cartoon_pop_bubble_etc_001_45556.mp3");
      audio.play();
      localStorage.removeItem("myTodoList");
      // count -= 1;
      // result.innerHTML = `You have ${count} task`;
    };
    clear.onclick = () => {
      ul.innerHTML = "";
      updateTaskCount();
      var audio = new Audio("zapsplat_cartoon_pop_bubble_etc_001_45556.mp3");
      audio.play();
      // result.innerHTML = `You have ${count} tasks`;
    };
  }
};


function updateTaskCount() {
  const count = ul.querySelectorAll("li").length;
  result.innerHTML = `You have ${count} task`;
}

const lang = {
  en: {
    parg: ["UserName:", "Today's task", "Schedule Task", "Setting"],
  },
  az: {
    parg: ["Ad", "Günün tapşırıgi", "Tapşırıq cədvəli", "Ayarlar"],
  },
};

if (currentLang === "en") {
  lang.en.parg.map((item, index) => {
    parg[index].innerHTML = item;
  });
  title.innerHTML = "Today's task";
  button.innerHTML = "Clear";
} else {
  lang.az.parg.map((item, index) => {
    parg[index].innerHTML = item;
  });
  title.innerHTML = "Günün tapşırıgi";
  button.innerHTML = "Təmizlə";
}
langBtn.onclick = () => {
  console.log("salam");
  currentLang = currentLang === "en" ? "az" : "en";
  localStorage.setItem("lang", currentLang);

  parg.forEach((item, index) => {
    item.innerHTML =
      currentLang === "en" ? lang.en.parg[index] : lang.az.parg[index];
  });
  title.innerHTML = currentLang === "az" ? "Günün tapşırıgi" : "Today's task";
  button.innerHTML = currentLang === "az" ? "Təmizlə" : "Clear";
};

const savedTheme = localStorage.getItem("theme") || "dark";
function applyTheme(theme) {
  if (theme === "light") {
    todo.className = "dark-mode-div";
    bird.src =
      "https://i.pinimg.com/originals/84/a0/13/84a013d95aea9bb541d7ab5ffc84117e.gif";
    bird.setAttribute("class", "light-bird");
    icon.className = "fa-solid fa-moon";
    icon.style.color = "black";
    langIcon.classList.add("dark-icon");
    langIcon.classList.remove("light-lang");
  } else {
    langIcon.classList.add("light-lang");
    langIcon.classList.remove("dark-icon");
    todo.className = "todo";
    icon.style.color = "white";
    icon.className = "fa-solid fa-sun";
    bird.src = "image_processing20191018-26745-1vb5jmd.gif";
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
