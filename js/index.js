$(document).ready(function() {
    $('.masInformacion').hide();
    console.log("Hola");

    $('.verMas').click(function() {
      console.log("gg");
        $('.verMas').hide();
        $('.masInformacion').show();
      });
      
      $('.verMenos').click(function() {
        $('.masInformacion').hide();
        $('.verMas').show();
      });
    

})

const baseDatosProductos = [
  {
    id: 1,
    nombre: 'Jameson Irish Whiskey 750 ml',
    descripcion: 'El Whiskey Irlandés Jameson es una mezcla de whiskies de alambique y de grano, es tan versátil como suave debido a su triple destilación.</br>Es un perfecto equilibrio de notas especiadas, de nuez y vainilla con toques de jerez dulce y la suavidad excepcional, no ahumado.',
    masInformacion: {
      alcohol: '40%',
      fabricante: 'Midleton Distillery, Co.',
      origen: 'Cork, Irlanda'
    },
    precio: 7800,
    imagen: 'https://placehold.co/500x400/png',
    categoria: 'Whiskys',
    stock: 10
  },
  {
      id: 2,
    nombre: 'Johnnie Walker Black Label Whisky 750 ml',
    descripcion: 'Johnnie Walker se da el lujo de tener acceso a los mejores whiskies de Escocia, que van desde las maltas de la costa oeste y por todo el camino hasta los más sutiles sabores de la costa este.</br>Etiqueta negra se basa en todos estos aromas para crear una mezcla única con un carácter suave, profundo y complejo. Puede ser disfrutado por sí solo, con un poco de agua o con soda o ginger ale como un trago de agua.',
    masInformacion: {
      alcohol: '40%',
      fabricante: 'Diageo Scotland Limited.',
      origen: 'Kilmarnock, Escocia, Reino Unido.'
    },
    precio: 13480,
    imagen: 'https://placehold.co/500x400/png',
    categoria: 'Whiskys',
    stock: 8
  },
  {
      id: 3,
      nombre: 'Chivas Regal 12 Años Whisky 500 ml',
      descripcion: 'Chivas Regal 12 es un whisky escocés donde se utilizan barricas diversas para una maduración de 12 años, lo que da lugar a una bebida de mayor intensidad y carácter.</br>Destacan sus aromas de hierbas silvestres, miel y frutas como manzana. Tiene notas de almendras y vainilla con un ligero sabor a manzana. Es cremoso, con un intenso sabor a miel y peras maduras, junto a notas de vainilla, avellana y caramelo, con un un final intenso y prolongado.',
      masInformacion: {
        alcohol: '40%',
        fabricante: 'Chivas Brothers',
        origen: 'Aberdeen, Escocia.'
      },
      precio: 7750,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Whiskys',
      stock: 4
  },
  {
      id: 4,
      nombre: 'Jack Daniels Whisky 750 ml',
      descripcion: 'El color, cuerpo y sabor característico del Jack Daniels se debe a un minucioso proceso que lo hace único.</br>El whisky se realiza con agua subterránea sacada de una cueva en Tennessee, además al whisky se lo somete a un proceso llamado "charcoal mellowing" que consiste en filtrarlo a través de carbón de arce sacarino que lo convierte en lo que es: un Tennessee Whisky y no en un Bourbon, licor con el que se lo confunde por su suavidad a pesar de su alta graduación alcohólica.</br>Finalmente el whisky es añejado en barriles de roble blanco que son ensamblados a mano y quemados por dentro para fundir los azucares propios de la madera y darle al Jack Daniels su sabor y color ámbar.',
      masInformacion: {
        alcohol: '40%',
        fabricante: 'Brown-Forman',
        origen: 'Lynchburg, Tennessee, Estados Unidos.'
      },
      precio: 20150,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Whiskys',
      stock: 5
  },
  {
      id: 5,
      nombre: 'Gift Pack Conservadora Corona 15 Litros + Corona x12 Cervezas 330 ml',
      descripcion: 'Conservadora Corona: Capacidad 15 litros (12 botellas de 330 ml). Manijas fuertes en los costados. Medidas: Largo: 32 cm. Ancho: 26 cm. Alto: 31 cm. Material (interior y exterior): Metal Galvanizado. Incluye destapador en el frente.</br></br>Corona Cerveza 330 ml (12 unidades): Corona Extra es única porque tiene un color inconfundible, un sabor incomparable y en definitiva no tiene igual. Si buscas momentos inolvidables Corona es sin duda para ti, porque todas y las más grandes experiencias están envasadas en la botella de la cerveza más famosa del mundo. Corona es una cerveza clara que no esconde nada, de ahí su botella transparente. Y es que cuando se usan sólo los mejores ingredientes, no hay nada que ocultar',
      masInformacion: {
        alcohol: '4.50%',
        fabricante: 'Corona',
        origen: 'Argentina'
      },
      precio: 7350,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Cervezas',
      stock: 3
  },
  {
      id: 6,
      nombre: 'Corona Cerveza 710 ml',
      descripcion: 'Corona es única porque tiene un color inconfundible, un sabor incomparable y en definitiva no tiene igual.</br>Si buscas momentos inolvidables Corona es sin duda para ti, porque todas y las más grandes experiencias están envasadas en la botella de la cerveza más famosa del mundo.</br>Corona es una cerveza clara que no esconde nada, de ahí su botella transparente. Y es que cuando se usan sólo los mejores ingredientes, no hay nada que ocultar.',
      masInformacion: {
        alcohol: '4.50%',
        fabricante: 'Corona',
        origen: 'Argentina'
      },
      precio: 820,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Cervezas',
      stock: 25
  },
  {
      id: 7,
      nombre: 'Heineken Cerveza 1 Litro',
      descripcion: 'Heineken es una cerveza lager de renombre mundial que ha sido elaborada en los Países Bajos desde 1873. Se caracteriza por su sabor suave, equilibrado y refrescante, con un aroma distintivo a lúpulo y notas sutiles de frutas.</br>Su color dorado y su espuma blanca y cremosa, la hacen una cerveza atractiva a la vista. Además, la calidad de sus ingredientes cuidadosamente seleccionados, como la cebada malteada y el lúpulo, garantizan una experiencia de sabor auténtica y consistente en cada sorbo.',
      masInformacion: {
        alcohol: '5%',
        fabricante: 'Heineken',
        origen: 'Provincia de Santa Fé, Argentina.'
      },
      precio: 615,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Cervezas',
      stock: 18
  },
  {
      id: 8,
      nombre: 'Fernet Branca 750 ml',
      descripcion: 'Producto del ingenio y la visión de Bernandino Branca, nace en 1845 una bebida única para la época. Ella es resultado de la combinación de hierbas, cortezas, raíces, frutos y cuidado artesanal, a la que su creador bautizó con el nombre de fernet. Así nació Fernet Branca.</br>Y con él un secreto, el de su elaboración. Respetado estrictamente durante más de 160 años.</br>Un cautivante secreto que va de boca en boca. De país en país. Apreciado.',
      masInformacion: {
        alcohol: '40%',
        fabricante: 'Branca',
        origen: 'Provincia de Buenos Aires, Argentina.'
      },
      precio: 2964,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Cervezas',
      stock: 22
  },
  {
      id: 9,
      nombre: 'Fernet Branca Edición Mundial Qatar 2022 750 ml',
      descripcion: 'Edición Mundial Qatar, primero: es el mismo fernet, segundo: francia...</br></br>Producto del ingenio y la visión de Bernandino Branca, nace en 1845 una bebida única para la época. Ella es resultado de la combinación de hierbas, cortezas, raíces, frutos y cuidado artesanal, a la que su creador bautizó con el nombre de fernet. Así nació Fernet Branca.</br>Y con él un secreto, el de su elaboración. Respetado estrictamente durante más de 160 años.</br>Un cautivante secreto que va de boca en boca. De país en país. Apreciado.',
      masInformacion: {
        alcohol: '40%',
        fabricante: 'Branca',
        origen: 'Provincia de Buenos Aires, Argentina.'
      },
      precio: 3150,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Cervezas',
      stock: 6
  },
  {
      id: 10,
      nombre: 'Rutini Cabernet Malbec',
      descripcion: 'Rojo rubí profundo.</br>El dúo de cepas de origen bordelés da como resultado un tinto armonioso y equilibrado: la Cabernet Sauvignon entrega su carácter corpóreo y pleno y la Malbec matiza de suaves y dulces taninos el assemblage, realzando una combinación única de aromas y sabor frutados.',
      masInformacion: {
        alcohol: '13,5%',
        fabricante: 'Rutini Wines',
        origen: 'Cabernet Sauvignon: Coquimbito, Maipú.</br>Malbec: La Consulta, Valle de Uco. Provincia de Mendoza, Argentina.'
      },
      precio: 3450,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Vinos',
      stock: 5
  },
  {
      id: 11,
      nombre: 'Luigi Bosca Malbec',
      descripcion: 'Color rojo rubí intenso.</br>Presenta aromas de frutos rojos maduros, especias y pimienta negra.</br>La intensidad de su entrada en boca se complementa con la suavidad y dulzor de los taninos. Un vino de gran cuerpo y estructura.',
      masInformacion: {
        alcohol: '13,5%',
        fabricante: 'Luigi Bosca',
        origen: 'Finca "La Linda", Vistalba. Provincia de Mendoza, Argentina.'
      },
      precio: 5100,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Vinos',
      stock: 2
  },
  {
      id: 12,
      nombre: 'Tetrabrick Toro 1 Litro',
      descripcion: 'Elaborado con uvas Tempranillo. Presenta intensos aromas y sabores frutales y especiados, con taninos suaves y un final persistente.</br>Su envase Tetra Brik, práctico y fácil de transportar, lo convierte en una opción accesible para disfrutar de un buen vino en cualquier momento, sin comprometer su calidad y sabor excepcional.',
      masInformacion: {
        alcohol: '13%',
        fabricante: 'Cooperativa Vitivinícola Fecovita',
        origen: 'Argentina.'
      },
      precio: 450,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Vinos',
      stock: 18
  },
  {
      id: 13,
      nombre: 'Tetrabrick Don Ernesto 1 Litro',
      descripcion: 'Vino tinto joven y fresco, elaborado con uvas de la variedad Tempranillo, color rojo cereza intenso y brillante, con aromas a frutos rojos y negros, con notas florales y especiadas.</br>El vino Tetrabrick Don Ernesto de 1 litro es una opción económica y accesible para disfrutar de un vino tinto joven y fresco con una buena relación calidad-precio, que se adapta a cualquier situación y paladar.',
      masInformacion: {
        alcohol: '13%',
        fabricante: 'Vinos Don Ernesto',
        origen: 'Villa del Rosario, Córdoba, Argentina.'
      },
      precio: 430,
      imagen: 'https://placehold.co/500x400/png',
      categoria: 'Vinos',
      stock: 12
  }]

  const containerProducts = document.querySelector('#containerProducts')


  for(let i = 0; i < baseDatosProductos.length; i++) {
    // console.log(baseDatosProductos[i].nombre);
    containerProducts.innerHTML += `
    
                                   <div class="producto">
                                    <img src=${baseDatosProductos[i].imagen} alt="producto">
                                    <h3>${baseDatosProductos[i].nombre}</h3>
                                    <p>${baseDatosProductos[i].descripcion}</p>
                                    <button class="verMas">Ver más</button>
                                    <p class="masInformacion">Graduacion Alcoholica: ${baseDatosProductos[i].masInformacion.alcohol}</p>
                                    <p class="masInformacion">Productor: ${baseDatosProductos[i].masInformacion.fabricante}</p>
                                    <p class="masInformacion">Origen: ${baseDatosProductos[i].masInformacion.origen}</p>
                                    <button class="verMenos masInformacion">Ver menos</button>
                                    <button class="btn">Añadir al carrito</button>
                                 </div>`
  }
















// function htmlInterfaz(array){



 
//     containerProducts.innerHTML += `
    
//                                   <div class="producto">
//                                     <img src=${array.imagen} alt="producto">
//                                     <h3>${array.nombre}</h3>
//                                     <p>${array.descripcion}</p>
//                                     <p>${array.precio}</p>
//                                     <a href="#">Ver más</a>
//                                     <button class="btn" id='${array.id}'>Añadir al carrito</button>
//                                   </div>
    
//     `
 


// }