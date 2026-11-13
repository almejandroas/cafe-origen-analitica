const ventas = require("./datos");


//----------------- fUNCION PARA ENCONTRAR VALORVENDIDO SOLO POR UNIDAD----------

function valorVendido (venta){
    return venta.cantidad * venta.precio;
}

//------------------------ TOTAL VENDIDO LLAMANDO LA FUNCION VALORVENDIDO------------------

function totalVendido(ventas){
  let tot = 0;

  for(const total of ventas){

    tot = tot + valorVendido(total)
  }
  return tot;
}

//-----------FUNCIÓN PARA DEVOLVER LAS UNIDADES QUE SE VENDIERON----------

function unidadesVendidas(ventas){
  let acum = 0;

  for(const venta of ventas)
    acum = acum + venta.cantidad

  return acum;
}

//-----------Vamos a encontrar la venta mayor de todo el arreglo------------------

function ventaMayor(ventas){
  let vMayor;

  let cantMayor = valorVendido(ventas[0]);

  for (const i of ventas){
    if (cantMayor < valorVendido(i)){
      vMayor = i;
      cantMayor = valorVendido(i);
    }
  }

  return vMayor;
}

//-------------------Ticket Promedio---------------------


function promedio(ventas){
  return totalVendido(ventas)/unidadesVendidas(ventas)
}

//-------------------------------Ventas por ciudad-------------------------

function ventasPorCiudad(ventas, ciudad){
  let ventasPorCiudad = 0
  for (const venta of ventas){
      if (ciudad.toLowerCase() === venta.ciudad.trim().toLowerCase()){
        ventasPorCiudad = ventasPorCiudad + valorVendido(venta)
      }
  }

  return `Las ventas de la ciudad ${ciudad} son ${ventasPorCiudad}`

}

//-----------------------------Impresiones---------------------
console.log("El total vendido es: " + totalVendido(ventas));

console.log("Las unidades vendidas son: " + unidadesVendidas(ventas));

console.log(ventaMayor(ventas));

console.log(promedio(ventas));

console.log(ventasPorCiudad(ventas , "medellín"))



