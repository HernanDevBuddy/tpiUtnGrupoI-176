const containerDestacados = document.querySelector('#containerDestacados')

function htmlDestacados(){
    let productosDestacados = [];
    for (let i = 0; i < baseDatosProductos.length; i++) {
      if(baseDatosProductos[i].destacado === true) { 
          productosDestacados.push(baseDatosProductos[i])
          containerDestacados.innerHTML += `
          <div class="card col-xsm-12 col-sm-6 col-md-4 col-lg-3 text-center g-4 m-3">
          <div class="imagen">
          <img src="${baseDatosProductos[i].imagen}" alt="producto">
          </div>
          <h5 class="card-title text-white">${baseDatosProductos[i].nombre}</h5>
          <p class="card-subtitle h5 precio text-warning">$${baseDatosProductos[i].precio}</p>
          <div class="card-body">
            <p class="card-text">Graduacion Alcoholica: ${baseDatosProductos[i].masInformacion.alcohol}</br>Productor: ${baseDatosProductos[i].masInformacion.fabricante}</br>Origen: ${baseDatosProductos[i].masInformacion.origen}</p>

            <div class="masInfo"style="display: none;">
              <button class="btn btn-dark btnVerMenos">Ver menos</button>
            </div>
            
            <div class="modal fade" id="modal${baseDatosProductos[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content bg-dark">
                  <div class="modal-header">
                    <h1 class="modal-title text-warning fs-5" id="exampleModalLabel">${baseDatosProductos[i].nombre}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <p class="h6 text-white">${baseDatosProductos[i].descripcion}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>              
          <div class="card-footer">

            <div class="row justify-content-center pb-2">
              <button class="btn btn-dark col-5 btnVerMas" data-bs-toggle="modal" data-bs-target="#modal${baseDatosProductos[i].id}">Ver más</button>              
            </div>

              <button id="${baseDatosProductos[i].id}" class="btn btn-dark btnAgregarCarrito" data-bs-toggle="modal" data-bs-target="#agr${baseDatosProductos[i].id}">Añadir al carrito</button>

              <div class="modal fade" id="agr${baseDatosProductos[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  agregarCarrito(baseDatosProductos)
  }
  
htmlDestacados();