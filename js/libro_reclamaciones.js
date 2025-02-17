$(document).ready(function () {
    EnvioInformacionReclamo();
});


function EnvioInformacionReclamo() {
    $(document).on(
        {
            submit: (e) => {
                e.preventDefault();
                Swal.fire({
                    title: "Estas seguro de continuar?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si!",
                    allowOutsideClick: false,
                    allowEscapeKey: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: "success",
                            title: "La información se envio correctamente.",
                            showConfirmButton: false,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            timer: 2000
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 2200);
                    }
                });
            },
        },
        "#envio_form_reclamo"
    )
}