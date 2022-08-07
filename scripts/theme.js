const body = document.getElementsByTagName("body")[0];
const button = document.querySelector("#toggle_theme");
const buttonImage = document.querySelector("#toggle_theme img");

const themeImage = {
  light: "assets/moon-svgrepo-com.svg",
  dark: "assets/sun-svgrepo-com.svg",
};

button.addEventListener("click", () => {
  if (body.classList.contains("light__theme")) {
    body.classList.remove("light__theme");
    body.classList.add("dark__theme");
    buttonImage.src = themeImage.dark;
  } else {
    body.classList.remove("dark__theme");
    body.classList.add("light__theme");
    buttonImage.src = themeImage.light;
  }
});
