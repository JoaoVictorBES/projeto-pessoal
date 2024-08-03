document.querySelector('.header-ham-logo-menu').addEventListener('click', function() {
    document.querySelector('.header-menu-ham').style.display = 'block';
    document.querySelector('.header-ham-logo-menu').style.display = 'none';
    document.querySelector('.header-ham-logo-menu-close').style.display = 'block';
  });
  
  document.querySelector('.header-ham-logo-menu-close').addEventListener('click', function() {
    document.querySelector('.header-menu-ham').style.display = 'none';
    document.querySelector('.header-ham-logo-menu').style.display = 'block';
    document.querySelector('.header-ham-logo-menu-close').style.display = 'none';
  });