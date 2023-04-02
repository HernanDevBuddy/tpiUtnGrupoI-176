window.addEventListener('load', ()=>{
    let validadorFormlario = new FormValidator('formularioDatos',[{
        name:'nombre',
        display:'Nombre',
        rules:'required|min_length[10]'
    },
    {
        name:'apellido',
        display:'Apellido',
        rules:'required|min_length[10]'
    },
    {
        name:'correo',
        display:'Correo',
        rules:'required|valid_email'
    },
    {
        name:'linkEmpresa',
        display:'LinkEmpresa',
        rules:'valid_url'
    }], function(errores, evento){
        if(errores.length){
            let mensaje='';

            errores.forEach(function(campo, indice, arreglo){
            mensaje+=`${campo.message}</br>`;
        });
            document.querySelector('#resultadoValidacion').innerHTML=mensaje;
    }
});
});