const links = document.querySelectorAll('.navegacao a');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navegacao li a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const li = link.parentElement;
        li.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            li.classList.add('active');
        }
    });
});

