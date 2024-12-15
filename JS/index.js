function toggleMenu() {
  var menu = document.querySelector('.header-main');
  menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
      body.classList.add(savedTheme);
      themeToggleButton.innerHTML = savedTheme === "dark-mode" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  } else {
    
    body.classList.add("light-mode");
    themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  
  themeToggleButton.addEventListener("click", () => {

      if (body.classList.contains("dark-mode")) {
          body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light-mode");
          themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
      } else {
          body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark-mode");
          themeToggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }

  });
});
