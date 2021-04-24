({
  plugins: ["jsdom-quokka-plugin"],
  jsdom: { html: "index.html" },
});

function classToggle(className, newClassName) {
  elem = document.querySelectorAll(className);
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.toggle(newClassName);
  }
}

let arrow = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  classToggle(".menu-item-link", "menu-item-link-width");
  classToggle(".menu-item-main-label", "menu-item-main-label-change");
  classToggle(".menu-item-number", "menu-item-number-change");
  classToggle(".profile-name", "profile-name-change");
  classToggle(".profile-info", "profile-info-change");
  classToggle(".setting-icon", "setting-icon-change");
  classToggle(".active-menu-label", "active-menu-label-change");
  classToggle(".submenu-label", "submenu-label-change");
  classToggle(".submenu-link", "submenu-link-change");
  classToggle(".profile", "profile-margin");
  classToggle(".profile-link", "profile-link-padding");
  classToggle(".toggle-arrow-icon", "toggle-arrow-icon-change");
});
