export default function Servicio({nombre}) {
    return <div class="col-sm-12 col-md-6 p-4 col-lg-3 d-flex flex-column gap-4 justify-content-center align-items-center">
        <a href="#" class="text-decoration-none">
            <img class="rounded-circle w-100" src={`/services/${nombre}.png`} alt={nombre}/>
            <h5 class="txt-main text-center mt-3 fw-bold">{nombre.toUpperCase().replace(/_/g, ' ')}</h5>
        </a>
    </div> 
}