$(document).ready(function () {
    if ($("#carousel-container")) {
        fillCarousel(carousel)
    }

    if ($("#servicios-container")) {
        fillServicios(servicios)
    }

    const sections = document.querySelectorAll("section"); // Asume que tus secciones son <section>
    const navLinks = document.querySelectorAll("#nav-second .nav-link");
    window.addEventListener("scroll", () => {
        let currentSection = "";
        let sectionsCurrent = [];

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
                console.log(currentSection)
            } 
        });
        navLinks.forEach((link) => {
            $(link).removeClass('link-active')
            if ((link.getAttribute("href")) === "#"+currentSection) {
                $(link).addClass("link-active");
            }
        });
    });
});

function fillCarousel() {
    for (let i = 0; i < 4; i++) {
        $("#carousel .carousel-indicators").append(`
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="${i}" class="${i===0?'active':''}" aria-current="${i===0}" aria-label="Slide ${i+1}"></button>            
        `)
        $("#carousel .carousel-inner").append(`
            <div class="carousel-item ${i===0 ? 'active' : ''}" data-bs-interval="5000">
                <img src="./img/carousel/slide${i+1}.jpg" class="d-block w-100" alt="slide${i+1}">
            </div>    
        `)
    }
}

function fillServicios(servicios) {
    servicios.forEach((servicio, index) => {
        $("#servicios-container .row").append(`
            <div class="col-sm-12 col-md-6 p-4 col-lg-3 d-flex flex-column gap-4 justify-content-center align-items-center">
                <a href=${servicio.link} class="text-decoration-none">
                    <img class="rounded-circle w-100" src="./img/services/${servicio.title}.png" alt="biblioteca">
                    <h5 class="txt-main text-center fw-bold">${servicio.title.toUpperCase().replace(/_/g, ' ')}</h5>
                </a>
            </div>     
        `)
    });
}