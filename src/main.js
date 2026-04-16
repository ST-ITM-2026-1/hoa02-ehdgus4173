

document.addEventListener('DOMContentLoaded', init);


function init() {
    const navHTML = `
        <nav class="nav-bar">
            <a href="home.html" id="logo">
                <img src="../assets/logo.png" alt="ST_logo" height="45">
            </a>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="skill.html">Skills</a></li>
                <li><a href="github.html">Github</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="nav-actions">
                <button id="theme-toggle">Dark</button>
                <div id="hamburger-btn"><span></span><span></span><span></span></div>
            </div>
        </nav>`;
    document.querySelector('header').innerHTML = navHTML;

    const footerHTML = `
        <p>Email: ehdgus4173@gmail.com</p>
        <span>&middot;</span>
        <p>GitHub: <a href="https://github.com/ehdgus4173" target="_blank">github.com/ehdgus4173</a></p>
        <span style="display:block;width:100%;text-align:center;margin-top:0.4rem;font-size:0.78rem;opacity:0.5;">&copy; 2026 Donghyun Lim</span>`;
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


    // Theme button
    const themeToggleBtn = document.getElementById("theme-toggle");

    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
        themeToggleBtn.textContent = "Light";
    }

    themeToggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        const currentDark = document.documentElement.classList.contains("dark");

        if (currentDark) {
            themeToggleBtn.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggleBtn.textContent = "Dark";
            localStorage.setItem("theme", "light");
        }


    });

    // filter buttons for Project page
    const filterBtns = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".project-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            // console.log(filter);

            items.forEach(item => {
                if (filter === "all" || item.dataset.category === filter) {
                    item.style.display = "block";
                    // console.log(item.querySelector("h4"));
                } else {
                    item.style.display = "none";
                }
            });

        })
    });
}






