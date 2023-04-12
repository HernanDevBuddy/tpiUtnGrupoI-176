const containerProducts = document.querySelector('#containerProducts')
const containerCarrito = document.querySelector('#containerCarrito')
const containerDestacados = document.querySelector('#containerDestacados')
const containerCategorias = document.querySelector('#containerCategorias')


function htmlProductosInterfaz(array){
  containerProducts.innerHTML = ''
      for(let i = 0; i < array.length; i++) {
        containerProducts.innerHTML += `
        <div class="card col-xsm-12 col-sm-6 col-md-4 col-lg-3 text-center g-4 m-3">
          <img class="fotoProducto pt-2" src="${array[i].imagen}" alt="producto">
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
  console.log('Hola');
}
function crearCarrito(){
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
          <img src="${carrito[i].imagen}" class="img-thumbnail rounded mx-auto d-block" alt="...">
        </div>
        <div class="col-md-8 mt-3">
          <div class="card-body text-center">
            <h6 class="card-title mt-2">${carrito[i].nombre}</h6>
            <p class="text-dark h5 precio mt-2">Precio unitario: $${carrito[i].precio}</p>
            <p class="text-dark h5 mt-2">Cantidad: ${carrito[i].cantidad}</p>
          </div>
        </div>
        <div class="col-md-2 row justify-content-end ms-1">
          <button class="btn btn-dark mt-2 mb-2">Borrar Producto</button>
          <button class="btn btn-dark mt-2 mb-2">+</button>
          <button class="btn btn-dark mt-2 mb-2">-</button>
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
  
}
function htmlDestacados(){
  let productosDestacados = [];
  for (let i = 0; i < baseDatosProductos.length; i++) {
    if(baseDatosProductos[i].destacado === true) { 
        productosDestacados.push(baseDatosProductos[i])
        containerDestacados.innerHTML += `
        <div class="card col-xsm-12 col-sm-6 col-md-4 col-lg-3 text-center g-4 m-3">
          <img class="pt-2" src="${baseDatosProductos[i].imagen}" alt="producto">
          <h6 class="card-title">${baseDatosProductos[i].nombre}</h6>
          <p class="card-subtitle h5 precio">$${baseDatosProductos[i].precio}</p>
          <div class="card-body">
            <p class="card-text">Graduacion Alcoholica: ${baseDatosProductos[i].masInformacion.alcohol}</br>Productor: ${baseDatosProductos[i].masInformacion.fabricante}</br>Origen: ${baseDatosProductos[i].masInformacion.origen}</p>
            <div class="masInfo"style="display: none;">
              <p class="h6">${baseDatosProductos[i].descripcion}</p>
              <button class="btn btn-dark btnVerMenos">Ver menos</button>
            </div>
          </div>              
          <div class="card-footer">
            <div class="row justify-content-center pb-2">
              <button class="btn btn-dark col-5 btnVerMas">Ver más</button>              
            </div>
              <button id="${baseDatosProductos[i].id}" class="btn btn-dark btnAgregarCarrito">Añadir al carrito</button>
              </div>
         </div>`
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

    }else{
      continue
    }
  }
  agregarCarrito(productosDestacados)
}
function verCategorias() {

  let tagsCategorias = document.querySelectorAll('.categoria');
  for (let i = 0; i < tagsCategorias.length; i++) {
    tagsCategorias[i].addEventListener('click', function (evento) {
      let categoria = evento.target.closest('.categoria').querySelector('.card-title').innerText;
      let productosCategorizados = baseDatosProductos.filter((elemento) => elemento.categoria === categoria);
      let productosUnicos = [...new Set(productosCategorizados)]; // Eliminamos los elementos duplicados del array
      htmlProductosInterfaz(productosUnicos);
      agregarCarrito(productosUnicos);
    });
  }

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

  let navCategoria = document.querySelectorAll('.navCategoria');
  for (let i = 0; i < imagenCategoria.length; i++) {
    navCategoria[i].addEventListener('click', function (evento) {
      let categoria = evento.target.innerText;
      let productosCategorizados = baseDatosProductos.filter((elemento) => elemento.categoria === categoria);
      let productosUnicos = [...new Set(productosCategorizados)]; // Eliminamos los elementos duplicados del array
      htmlProductosInterfaz(productosUnicos);
      agregarCarrito(productosUnicos);
    });
  }
}


if(localStorage.getItem('carrito')) {
  const itemsLocalStorage = JSON.parse(localStorage.getItem('carrito'));
  itemsLocalStorage.forEach(item => carrito.push(item));
  alert('Tienes Productos en tu Carrito!')
}

crearCarrito()
htmlDestacados()
verCategorias()