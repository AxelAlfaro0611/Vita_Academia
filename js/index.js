$(document).ready(function () {
    if ($("#carousel-container")) {
        fillCarousel(carousel)
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