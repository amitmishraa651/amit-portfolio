// function toggleMobileMenu(){
// 	document.getElementById("menu").classList.toggle("active");
	
// }




// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-line");
// });

// const scrollRevealOption = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
// };

// ScrollReveal().reveal(".header__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".header__content h2", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".header__content h1", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".header__content h3", {
//   ...scrollRevealOption,
//   delay: 1500,
// });
// ScrollReveal().reveal(".header__content p", {
//   ...scrollRevealOption,
//   delay: 2000,
// });
// ScrollReveal().reveal(".header__btns", {
//   ...scrollRevealOption,
//   delay: 2500,
// });
// ScrollReveal().reveal(" .section__subheader", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(" .section__header", {
//   ...scrollRevealOption,
//   delay: 1000,
// });

// ScrollReveal().reveal(".journey__grid > div > div", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// const mixer = mixitup(".portfolio__grid");

// ScrollReveal().reveal(" .section__header", {
//   ...scrollRevealOption,
// });





document.addEventListener("DOMContentLoaded", function () {
    var mixer = mixitup('.portfolio__grid', {
        selectors: {
            target: '.portfolio__card'
        },
        animation: {
            duration: 300
        }
    });

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('mixitup-control-active'));
            this.classList.add('mixitup-control-active');
        });
    });
});

