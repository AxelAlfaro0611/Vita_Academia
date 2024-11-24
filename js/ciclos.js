$(document).ready(function () {
    if ($("#ciclos-container")) {
        fillCiclos(arreglo_ciclos)
    }

});

function fillCiclos(arreglo_ciclos) {
    arreglo_ciclos.forEach((element, index) => {
        $("#ciclos-container .row").append(`
            <div class="col-sm-6 col-md-6 col-lg-3 p-2 p-md-4 text-center">
                <img src="/img/ciclos/${element.universidades[0]}.png" alt="UNMSM" height="100" class="my-2">
                <h4 class="bg-${element.universidades[0]} text-white py-1 my-0">
                    ${element.universidades.map((universidad, i) => {
                        return (i===1?'- ':'') + universidades[universidad][0]
                    }).toString().replace(/,/g, ' ')}
                </h4>
                <div class="ciclos-col p-2 p-md-3 gap-5 my-0 d-flex flex-column align-items-start rounded-bottom" style="background-color: rgb(247, 247, 247);">                                              
                    ${element.ciclos.map(ciclo => {
                        const type = ciclo.tipo;
                        ;
                        return `<a class="link-main fs-5 text-decoration-none" href="#">
                            ${type[0].toUpperCase() + type.substring(1)}</br>
                            ${universidades[element.universidades[0]][0]}
                        </a>`
                    }).toString().replace(/,/g, ' ')}                         
                </div>
            </div>
        `)
    });
}