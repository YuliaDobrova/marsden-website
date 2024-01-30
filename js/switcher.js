const darkTheme = {
  accent: "#92abf6",
  text: "#fff",
  bgd: "#222527",
};

const lightTheme = {
  accent: "#4169e1",
  text: "#464646",
  bgd: "#EBEBEB",
};

let currentTheme = "dark";

const element = document.documentElement;

function switchTheme() {
  const container = document.querySelector(".container");

  if (currentTheme === "dark") {
    element.style.setProperty("--theme-accent", lightTheme.accent);
    element.style.setProperty("--theme-text", lightTheme.text);
    element.style.setProperty("--theme-bgd", lightTheme.bgd);
    element.style.setProperty("--theme-modal-bgd", lightTheme.modalBgd);
    element.style.setProperty("--theme-btn-text", lightTheme.btnText);

    container.classList.add("light");

    currentTheme = "light";
  } else {
    element.style.setProperty("--theme-accent", darkTheme.accent);
    element.style.setProperty("--theme-text", darkTheme.text);
    element.style.setProperty("--theme-bgd", darkTheme.bgd);
    element.style.setProperty("--theme-modal-bgd", darkTheme.modalBgd);
    element.style.setProperty("--theme-btn-text", darkTheme.btnText);

    container.classList.remove("light");

    currentTheme = "dark";
  }
}

const themeSwitch = document.querySelector("#theme-switch");

themeSwitch.addEventListener("change", switchTheme);
