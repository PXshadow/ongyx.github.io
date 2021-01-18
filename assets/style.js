// Toggles dark mode and stuff.
// css-tricks.com/a-complete-guide-to-dark-mode-on-the-web


function toggleTheme() {
  document.documentElement.classList.toggle("dark-mode");
}

function getTheme() {
  return localStorage.getItem("theme");
}

function setTheme(theme) {
  if (theme == getTheme()) {
    return;
  }
  toggleTheme();
  localStorage.setItem("theme", theme);
}

var preferredTheme = getTheme();

if (!preferredTheme) {  // check whether it has been set before
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    preferredTheme = "dark";
  } else {
    preferredTheme = "light";
  }
}

setTheme(preferredTheme);
