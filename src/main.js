document.addEventListener('DOMContentLoaded', () => {

    // Add active class to current page link
    const links = document.querySelectorAll('.nav-bar a');

    links.forEach(link => {
        if (link.href === location.href) {
            link.classList.add('active');
        }
    });

    // Hamburger button
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.querySelector('.nav-bar ul');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });




});