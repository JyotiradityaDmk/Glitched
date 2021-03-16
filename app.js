const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    // Animate Links
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
    });
}

navSlide();

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    });
    
});