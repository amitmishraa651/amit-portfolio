function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
	
}






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

