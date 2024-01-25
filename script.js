function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Funktion zum Umschalten zwischen Dark Mode und Light Mode
  function toggleDarkMode() {
    var bodyElement = document.body;
    bodyElement.classList.toggle("darkmode");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var modeSwitchButton = document.getElementById("modeSwitch");
    if (modeSwitchButton) {
      modeSwitchButton.addEventListener("click", toggleDarkMode);
    }
  });
  