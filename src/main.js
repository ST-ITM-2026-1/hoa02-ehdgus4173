document.addEventListener('DOMContentLoaded', () => {

    const navHTML = `
<nav class="nav-bar">
    <a href="home.html" id="logo">
        <img src="../assets/logo.png" alt="ST_logo" height="45">
    </a>
    <div id="hamburger-btn"><span></span><span></span><span></span></div>
    <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="skill.html">Skills</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>`;
    document.querySelector('header').innerHTML = navHTML;

    const footerHTML = `
<p>Email: ehdgus4173@gmail.com</p>
<p>&copy; 2026 Donghyun Lim</p>
<p>GitHub: <a href="https://github.com/ehdgus4173" target="_blank">ehdgus4173</a></p>`;
    document.querySelector('footer').innerHTML = footerHTML;

    // Add active class to current page link
    const links = document.querySelectorAll('.nav-bar ul a');

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