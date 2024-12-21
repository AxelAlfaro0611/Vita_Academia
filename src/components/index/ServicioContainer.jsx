import { useState } from "react";
import Servicio from "../Servicio";

export default function ServicioContainer() {

    const [servicios, setServicios] = useState([
        'pizarra_interactiva',                    
        'tutoría personalizada',            
        'psicopedagogia',            
        'aula_virtual',            
    ])

    return <div id="servicios-container" class="py-3 py-md-5">
        <h2 class="text-center txt-main">Servicios</h2>
        <div class="container py-2 py-md-5 px-5 px-md-0">
            <div class="row justify-content-center">
                {servicios.map(servicio => {
                    return <Servicio nombre={servicio}/>
                })}
            </div>
        </div>
    </div>
}