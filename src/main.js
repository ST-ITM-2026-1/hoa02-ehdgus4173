document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-bar a');
    links.forEach(link => {
        if (link.href === location.href) {
            link.classList.add('active');
        }
    });
});