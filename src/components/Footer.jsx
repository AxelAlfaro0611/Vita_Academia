import SocialMedia from "./SocialMedia"
export default function Footer() {
    return <footer id="contacto" class="bg-main p-2 p-md-5">
    <div class="container px-3 px-md-5">
      <div class="row">
        <div class="col-sm-6 py-2">
          <h2 class="txt-second mb-2">Contáctanos</h2>
          <p class="text-white d-inline d-md-block">
            Visítanos en:              
          </p>
          <SocialMedia row={true}/>
        </div>
        <div class="col-sm-6 py-2">
          
            <h2 class="txt-second mb-2">Informes</h2>
            <p class="text-white">
              Si deseas conocer información de nuestros ciclos o servicios comunícate a nuestro número.
            </p>
            <p class="text-white fw-bold">Teléfono: <span class="fw-normal fs-5">908 935 924 - 919 499 187</span></p>                            
          
        </div>
      </div>
    </div>
</footer>
}