document.getElementById('navbar-toggle').addEventListener('click', function () {
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('show');
  });

  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    // Verifica se o modo escuro está ativado no localStorage
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
    }

    // Alterna o modo escuro/claro ao clicar no botão
    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        // Salva a preferência no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'true');
        } else {
            localStorage.setItem('dark-mode', 'false');
        }
    });
});
