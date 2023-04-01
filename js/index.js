const containerProducts = document.querySelector('#containerProducts')
const containerCarrito = document.querySelector('#containerCarrito')


function htmlProductosInterfaz(array){
      for(let i = 0; i < array.length; i++) {
        containerProducts.innerHTML += `
        <div class="card col-xsm-12 col-sm-6 col-md-4 col-lg-3 text-center g-4 m-3">
          <img class="pt-2" src="https://placehold.co/300" alt="producto">
          <h6 class="card-title">${array[i].nombre}</h6>
          <p class="card-subtitle h5 precio">$${array[i].precio}</p>
          <div class="card-body">
            <p class="card-text">Graduacion Alcoholica: ${array[i].masInformacion.alcohol}</br>Productor: ${array[i].masInformacion.fabricante}</br>Origen: ${array[i].masInformacion.origen}</p>
            <div class="masInfo"style="display: none;">
              <p class="h6">${array[i].descripcion}</p>
              <button class="btn btn-dark btnVerMenos">Ver menos</button>
            </div>
          </div>              
          <div class="card-footer">
            <div class="row justify-content-center pb-2">
              <button class="btn btn-dark col-5 btnVerMas">Ver más</button>              
            </div>
              <button id="${array[i].id}" class="btn btn-dark btnAgregarCarrito">Añadir al carrito</button>
              </div>
         </div>`
    }
    let botonesMasInfo = document.querySelectorAll(".btnVerMas");
    let botonesMenosInfo = document.querySelectorAll(".btnVerMenos");
    
    function mostrarOcultarInfo(event) {
      let card = event.target.closest(".card");
      let masInfo = card.querySelector(".masInfo");
      let verMas = card.querySelector(".btnVerMas");
    
      if (masInfo.style.display === "none") {
        masInfo.style.display = "block";
        verMas.style.display = "none";
      } else {
        masInfo.style.display = "none";
        verMas.style.display = "block";
      }
    }
    
    botonesMasInfo.forEach((boton) =>
      boton.addEventListener("click", mostrarOcultarInfo)
    );
    botonesMenosInfo.forEach((boton) =>
      boton.addEventListener("click", mostrarOcultarInfo)
    );
}

function crearCarrito(){
  let btnComprar = document.querySelectorAll(".btnAgregarCarrito")
  let verCarrito = document.querySelector("#verCarrito")
  let carritoText = document.querySelector('#carritoText')
  verCarrito.addEventListener('click',function(){

    if (containerCarrito.style.display === "none") {
      carritoText.innerText = "Seguir Comprando";
      containerCarrito.style.display = "block";
      containerProducts.style.display = "none";
    } else {
      carritoText.innerText = "Ver Carrito"
      containerCarrito.style.display = "none";
      containerProducts.style.display = "flex";
    }
    
    containerCarrito.innerHTML = ''
    for (let i = 0; i < carrito.length; i++) {
      containerCarrito.innerHTML +=`
        <div class="card mb-3 mt-3">
          <div class="row g-0">
            <div class="col-md-2">
              <img src="https://placehold.co/200" class="img-thumbnail rounded mx-auto d-block" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h6 class="card-title">${carrito[i].nombre}</h6>
                <p class="h5 precio">$${carrito[i].precio}</p>
                <p class="h5">Cantidad:${carrito[i].cantidad}</p>
                <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
              </div>
            </div>
            <div class="col-md-2 row justify-content-center">
              <button class="btn btn-warning mt-2 mb-2">Borrar</button>
              <button class="btn btn-warning mt-2 mb-2">Sumar 1</button>
              <button class="btn btn-warning mt-2 mb-2">Restar 1</button>
            </div>
          </div>
        </div>
      `
    }
    containerCarrito.innerHTML +=`
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
  
  btnComprar.forEach(function(boton){
    boton.addEventListener('click', function(evento){
      // alert("Añadido al carrito!")
      let id = evento.target.id
      let productofilter = baseDatosProductos.find((elemento) =>  elemento.id == id )
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


      
      console.log(carrito)
    })
    
  })
}

if (localStorage.getItem('carrito')) {
  const itemsLocalStorage = JSON.parse(localStorage.getItem('carrito'));
  itemsLocalStorage.forEach(item => carrito.push(item));
  alert('Tienes Productos en tu Carrito!')
}

htmlProductosInterfaz(baseDatosProductos)
crearCarrito()

  // -------------------------------------------------------




















//   const carrito = [];

// function agregarAlCarrito(event) {
//   const card = event.target.closest(".card");
//   const nombreProducto = card.querySelector(".card-title").textContent;
//   const precioProducto = parseInt(card.querySelector(".precio").textContent);
//   const cantidadProducto = parseInt(card.querySelector(".cantidad").value);

//   const producto = {
//     nombre: nombreProducto,
//     precio: precioProducto,
//     cantidad: cantidadProducto,
//   };

//   carrito.push(producto);
//   actualizarCarrito();
// }

// function actualizarCarrito() {
//   const carritoContainer = document.querySelector("#carritoContainer");

//   let total = 0;
//   let html = "";
//   carrito.forEach((producto) => {
//     total += producto.precio * producto.cantidad;
//     html += `
//       <div class="row mb-2">
//         <div class="col-6">${producto.nombre}</div>
//         <div class="col-3">${producto.precio}€</div>
//         <div class="col-3">${producto.cantidad}</div>
//       </div>`;
//   });

//   html += `<div class="row">
//     <div class="col-9">Total:</div>
//     <div class="col-3">${total}€</div>
//   </div>`;

//   carritoContainer.innerHTML = html;
// }

// const botonesAgregarCarrito = document.querySelectorAll(".btnAgregarCarrito");
// botonesAgregarCarrito.forEach((boton) =>
//   boton.addEventListener("click", agregarAlCarrito)
// );
