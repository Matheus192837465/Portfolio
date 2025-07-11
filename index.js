window.addEventListener('scroll', function () {
    // 1. Pega todas as seções que têm a classe 'home'
    const sections = document.querySelectorAll('.home');
    // 2. Pega todos os itens do menu
    const navLinks = document.querySelectorAll('.navegacao li');
    let current = '';

    // 3. Para cada seção, verifica se ela está no topo da tela
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // Ajuste de 120px, pode mudar se necessário
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id'); // Guarda o id da seção atual
        }
    });

    // 4. Para cada item do menu, remove a classe active
    navLinks.forEach(li => {
        li.classList.remove('active');
        const a = li.querySelector('a');
        // 5. Se o link do menu corresponde à seção atual, adiciona a classe active
        if (a && a.getAttribute('href') === '#' + current) {
            li.classList.add('active');
        }
    });
});

