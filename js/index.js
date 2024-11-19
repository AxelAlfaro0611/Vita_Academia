$(document).ready(function () {
    if ($("#carousel-container")) {
        fillCarousel(carousel)
    }

    if ($("#servicios-container")) {
        fillServicios(servicios)
    }
});

function fillCarousel(carousel) {
    carousel.forEach((slider, index) => {
        $("#carousel .carousel-indicators").append(`
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide ${index+1}"></button>            
        `)
        $("#carousel .carousel-inner").append(`
            <div class="carousel-item ${index===0 ? 'active' : ''}">
                <img src="./img/carousel/${slider.img}" class="d-block w-100" alt="${slider.title}">
                <div class="carousel-caption d-none d-md-block bg-main">
                    <h5>${slider.title}</h5>
                    <p>${slider.description}</p>
                </div>
            </div>    
        `)
        console.log(slider.title)
    });
}

function fillServicios(servicios) {
    servicios.forEach((servicio, index) => {
        $("#servicios-container .row").append(`
            <div class="col-sm-12 col-md-6 col-lg-3 d-flex flex-column gap-4 align-items-center">
                <img class="rounded-circle" src="./img/services/${servicio.title}.jpg" width="250" alt="biblioteca">
                <h5 class="txt-main fw-bold">${servicio.title.toUpperCase()}</h5>
            </div>     
        `)
    });
}