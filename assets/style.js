// Toggles dark mode and stuff.
// css-tricks.com/a-complete-guide-to-dark-mode-on-the-web

function getTheme() {
  return localStorage.getItem("theme");
}

function setTheme(theme) {
  if (theme == "light") {
    var counter = 0;
  } else {
    var counter = 1;
  }

  while (counter < 2) {
    document.documentElement.classList.toggle("dark-mode");
  }
  
  localStorage.setItem("theme", theme);
}

const preferredTheme = getTheme()

if !(preferredTheme) && (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  preferredTheme = "dark";
} else {
  preferredTheme = "light";
}

setTheme(preferredTheme);

function toggleTheme() {
  currentTheme = getTheme()
  if (currentTheme == "dark") {
    var changedTheme = "light"
  } else {
    var changedTheme = "dark"
  }

  setTheme(changedTheme)
}
