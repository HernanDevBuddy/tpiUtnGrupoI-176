const containerProducts = document.querySelector('#containerProducts')
const containerCarrito = document.querySelector('#containerCarrito')
const containerCategorias = document.querySelector('#containerCategorias')
const sectionProducts = document.querySelector('#sectionProducts')


function htmlProductosInterfaz(array){
  containerProducts.innerHTML = `
  <h2 class="text-center tituloH2Modificado">Nuestros Productos</h2>
  `
      for(let i = 0; i < array.length; i++) {
        containerProducts.innerHTML += `
        <div class="card col-xsm-12 col-sm-6 col-md-4 col-lg-3 text-center g-4 m-3">
          <img class="fotoProducto" src="${array[i].imagen}" alt="producto">
          <h6 class="card-title">${array[i].nombre}</h6>
          <p class="h4 precio">$${array[i].precio}</p>
          <div class="card-body">
            <p class="card-text">Graduacion Alcoholica: ${array[i].masInformacion.alcohol}</br>Productor: ${array[i].masInformacion.fabricante}</br>Origen: ${array[i].masInformacion.origen}</p>

            <div class="modal fade" id="modal${array[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content bg-dark">
                    <div class="modal-header">
                      <h4 class="modal-title fs-5 text-warning text-center" id="exampleModalLabel">${array[i].nombre}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p class="h6">${array[i].descripcion}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>              

          <div class="card-footer">
            <div class="row justify-content-center pb-2">
              <button class="btn btn-dark col-5 btnVerMas" data-bs-toggle="modal" data-bs-target="#modal${array[i].id}">Ver más</button>              
            </div>
              <button id="${array[i].id}" class="btn btn-dark btnAgregarCarrito" data-bs-toggle="modal" data-bs-target="#agr${array[i].id}">Añadir al carrito</button>
              <div class="modal fade" id="agr${array[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content bg-dark">

                  <div class="modal-header">
                    <h1 class="modal-title text-warning fs-5" id="exampleModalLabel">Añadido al Carrito.</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body">
                    Presiona en la X o cualquier lugar de la pantalla para salir.
                  </div>

                </div>
              </div>
            </div>
              </div>
         </div>`
    }
}
function agregarCarrito(array){
  let btnComprar = document.querySelectorAll(".btnAgregarCarrito")
  btnComprar.forEach(function(boton){
    boton.addEventListener('click', function(evento){
      // alert("Añadido al carrito!")
      let id = evento.target.id
      let productofilter = array.find((elemento) =>  elemento.id == id )
      let productoEnCarrito = carrito.find((elemento) => elemento.id == id);
      if(productoEnCarrito){
        productoEnCarrito.cantidad++;
      }else{
        carrito.push({
          ...productofilter,
          cantidad: 1
        });
      }
      localStorage.setItem('carrito', JSON.stringify(carrito));
    })
    
  })
}
function crearCarrito(){
  let verCarrito = document.querySelector("#verCarrito")
  verCarrito.addEventListener('click',function(){

    if (containerCarrito.style.display === "none") {
      verCarrito.innerText = "Seguir Comprando";
      containerCarrito.style.display = "block";
      containerProducts.style.display = "none";
      containerCategorias.style.display = "none";
      sectionProducts.style.display = "none";
    } else {
      verCarrito.innerText = "Ver Carrito"
      containerCarrito.style.display = "none";
      containerProducts.style.display = "flex";
      containerCategorias.style.display = "flex";
      sectionProducts.style.display = "block";
    }
    let subtotal = 0
    let tempTotal = []

    containerCarrito.innerHTML = `<h2 class="tituloH2Modificado text-center">REVISA TU PEDIDO.</h2>`

    for (let i = 0; i < carrito.length; i++) {
      subtotal= carrito[i].precio * carrito[i].cantidad;
      tempTotal.push(subtotal)

      containerCarrito.innerHTML +=`
      <div class="card mb-3 mt-3">
      <div class="row tarjetaCarrito g-0">
        <div class="col-md-2">
          <img src="${carrito[i].imagen}" class="img-thumbnail rounded mx-auto d-block" alt="...">
        </div>
        <div class="col-md-8 mt-3">
          <div class="card-body text-center">
            <h5 class="card-title mt-2 text-white">${carrito[i].nombre}</h5>
            <p class="h6 text-white precio mt-2">Precio unitario: <p class="h5 text-warning">$${carrito[i].precio}</p></p>
            <p class="h5 text-white mt-2">Cantidad: ${carrito[i].cantidad}</p>
          </div>
        </div>
        <div class="col-md-2 row justify-content-end ms-1">
          <button class="btn btn-dark mt-1 mb-1 paddingCero tamanioTexto">Borrar Producto</button>
          <button class="btn btn-dark mt-1 mb-1 paddingXCuatro">+</button>
          <button class="btn btn-dark mt-1 mb-1 paddingXCuatro">-</button>
        </div>
      </div>
    </div>
      `      
    }
    let suma = 0
    for (let index = 0; index < tempTotal.length; index++) {
     suma += tempTotal[index];
    }
    containerCarrito.innerHTML +=`
        <div class="container col-8 justify-content-center mt-2 mb-2">
        <p class="subtotal text-center">Subtotal <span>$${suma}</span></p>
        </div>
        <div class="container col-8 justify-content-center mt-2 mb-2">
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
        <div class="col-8 offset-2 mb-5">
        <a href="#" class="col-12"><button class="btn btn-success col-12">Continuar</button></a>
        </div>
        `
  })
  
}
function verCategorias() {

  let imagenCategoria = document.querySelectorAll('.img-categoria');
  for (let i = 0; i < imagenCategoria.length; i++) {
    imagenCategoria[i].addEventListener('click', function (evento) {
      let categoria = evento.target.closest('.categoria').querySelector('.card-title').innerText;
      let productosCategorizados = baseDatosProductos.filter((elemento) => elemento.categoria === categoria);
      let productosUnicos = [...new Set(productosCategorizados)]; // Eliminamos los elementos duplicados del array
      htmlProductosInterfaz(productosUnicos);
      agregarCarrito(productosUnicos);
    });
  }
}



 // Revisa si hay productos en carrito de sesiones anteriores
if(localStorage.getItem('carrito')) {
  const itemsLocalStorage = JSON.parse(localStorage.getItem('carrito'));
  itemsLocalStorage.forEach(item => carrito.push(item));
  
  // Muestra el modal al entrar en la página
  let carritoModal = document.getElementById('carritoModal');
  let modal = new bootstrap.Modal(carritoModal);
  modal.show();
}

// htmlDestacados()
crearCarrito()
verCategorias()