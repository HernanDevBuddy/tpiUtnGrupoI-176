const contenedorRecibo = document.querySelector('#contenedorRecibo')
const recibo = document.querySelector('#recibo')
const totalRecibo = document.querySelector('#totalRecibo')
const step1 = document.querySelector('#step1')
const step2 = document.querySelector('#step2')
const btnPdf = document.querySelector('#btnPdf')

// console.log(carrito);


function crearRecibo(array){
    let tempTotal = []
    for (const producto of array) {
        let subtotal = producto.cantidad * producto.precio
        recibo.innerHTML +=`
        <li class="list-group-item d-flex justify-content-between align-items-start mx-5">
                  <div class="row ms-2 me-auto">
                        <div class="col-md-2">
                            <img src="${producto.imagen}" class="img-thumbnail rounded mx-auto" alt="...">
                        </div>
                        <div class="mx-auto col-md-10">
                            <p class="fw-bold text-center">${producto.nombre}</p>
    
                            <span class="text-center offset-2">Cat: ${producto.categoria}</span>
                            <span class="text-center offset-2">Subtotal: $${subtotal}</span>
                        </div>
                  </div>
                  <span id="qtElemento" class="badge rounded-pill">${producto.cantidad}</span>
                </li>
        `
        tempTotal.push(subtotal)
    }
    let suma = 0
    for (let index = 0; index < tempTotal.length; index++) {
     suma += tempTotal[index];
    }
    totalRecibo.innerText = `TOTAL = $${suma}`
    
}
function pagar(){
    let btnPay = document.querySelectorAll(".btnStepPay")
    for (const btn of btnPay) {
        btn.addEventListener('click',function(){
        switch (step1.style.display) {
            case "none" :
                step1.style.display = "none";
                step2.style.display = "none";
                contenedorRecibo.style.display = "flex";
                break;
        
            default:
                step1.style.display = "none";
                step2.style.display = "flex";
                contenedorRecibo.style.display = "none";
                break;
        }
      
    })
}}

btnPdf.addEventListener('click',function(){
    let doc = new jsPDF();
    let suma = 0
    for (let i = 0; i < carrito.length; i++) {
        fila=carrito[i]
        doc.setFont('Courier')
        doc.text("Shots & Co", 85, 10)
        doc.text("Gracias por elegirnos, que disfrutes de la Fiesta!", 15, 25);
        // let QT = fila.cantidad.toString()
        doc.text(5, 45 + i * 10, String(fila.cantidad));
        doc.text(10, 45 + i * 10, fila.categoria);
        doc.text(40, 45 + i * 10, fila.nombre);
        let sbt = fila.precio * fila.cantidad;
        let sbtString = "$ "+sbt.toString()
        doc.text(180, 45 + i * 10, sbtString);
        
        suma += fila.precio * fila.cantidad;
    }
    let sumaString = suma.toString()
    let total = "TOTAL = $";
    let Y = 55 + carrito.length * 10;
    // console.log(Y + total + sumaString);
    doc.text(155, Y, total + sumaString);
    doc.save("Compra.pdf");
})

pagar();
crearRecibo(carrito);