document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.getElementById("navbarToggle");
    const navbar = document.querySelector(".navbar");

    navbarToggle.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const serviceList = card.querySelector('.services-list');
        serviceList.style.display = serviceList.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active'); // Agrega o quita la clase "active"
    });
});








