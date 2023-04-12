window.addEventListener('load', () => {
    let form = document.querySelector('#formularioDatos');
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let validadorFormulario = new FormValidator(form, [
            {
                name:'nombre',
                display:'Nombre',
                rules:'required|alpha|min_length[5]'
            },
            {
                name:'apellido',
                display:'Apellido',
                rules:'required|alpha|min_length[5]'
            },
            {
                name:'numero',
                display:'Numero',
                rules:'required||numeric|exact_length[10]'
            },
            {
                name:'correo',
                display:'Correo',
                rules:'required|valid_email'
            },
            {
                name:'sitioweb',
                display:'Sitio web',
                rules:'valid_url'
            }
        ], (errores, evento) => {
            if(errores.length){
                let mensajes = '';
                errores.forEach((campo, indice, arreglo) => {
                    mensajes += `<div class="error-message ${campo.name}-error">${campo.message}</div>`;
                });
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el formulario',
                    html: mensajes
                });
            } else {
                Swal.fire({
                    icon: 'question',
                    title: '¿Estás seguro de enviar los datos?',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, enviar',
                    cancelButtonText: 'No, cancelar'
                }).then((resultado) => {
                    if (resultado.isConfirmed) {
                        form.submit();
                    }
                });
            }
        });
    });
});

const contactoForm=document.querySelector("#contactoForm");
const abrirForm=document.querySelector("#abrirForm");

function mostrarForm(){
   document.querySelector("#contactoForm").style.display='block'
   document.querySelector('#ocultarNoso').style.display='none'
 }
 function ocultarForm(){
   document.querySelector("#contactoForm").style.display='none'
   document.querySelector('#ocultarNoso').style.display='block'
 }



