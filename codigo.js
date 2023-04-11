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




// window.addEventListener('load', ()=>{
//     let validadorFormlario = new FormValidator('formularioDatos',[{
//         name:'nombre',
//         display:'Nombre',
//         rules:'required|alpha|min_length[5]'
//     },
//     {
//         name:'apellido',
//         display:'Apellido',
//         rules:'required|alpha|min_length[5]'
//     },
//     {
//         name:'correo',
//         display:'Correo',
//         rules:'required|valid_email'
//     },
//     {
//         name:'numero',
//         display:'Numero',
//         rules:'required|exact_length[10]|numeric'
//     },
//     {
//         name:'sitioweb',
//         display:'Sitio web',
//         rules:'valid_url'
//     }], function(errores, evento){
//         if(errores.length){
//             let mensaje='';

//             errores.forEach(function(campo, indice, arreglo){
//             mensaje+=`${campo.message}</br>`;
//         });
//             document.querySelector('#resultadoValidacion').innerHTML=mensaje;
//     }
// });
// });

