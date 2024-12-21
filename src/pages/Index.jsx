import CarouselIndex from "../components/index/CarouselIndex"
import ServicioContainer from "../components/index/ServicioContainer"
import SedeContainer from "../components/index/SedeContainer"
import AboutContainer from "../components/index/AboutContainer"

export default function Index() {
    return <div>
        <section id="carousel-container">
            <CarouselIndex/>
        </section>
        <section id="servicios-container" class="py-3 py-md-5">
            <ServicioContainer/>
        </section>
        <section id="sede-container">
            <SedeContainer/>
        </section>
        <section id="about">
            <AboutContainer/>
        </section>
    </div>
}