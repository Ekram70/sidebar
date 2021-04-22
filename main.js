({
  plugins: ["jsdom-quokka-plugin"],
  jsdom: { html: "index.html" },
});

// Profile Image bug Should be fixed

function sidebarToggle() {
  let labels = document.querySelectorAll(".label");
  let numbers = document.querySelectorAll(".number");
  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.toggle("label-hide");
  }
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].classList.toggle("number-hide");
  }
  let setting = document.querySelectorAll(".setting");
  setting[0].classList.toggle("setting-hide");
  let menu = document.querySelectorAll(".menu");
  menu[0].classList.toggle("menu-width");
  let profile = document.querySelectorAll(".profile a");
  document
    .querySelectorAll(".menu-icon")[0]
    .classList.toggle("menu-icon-rotate");
}
