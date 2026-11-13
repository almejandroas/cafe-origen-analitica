Diccionario de datos: id: number
    fecha: string
    cliente: string
    producto: string
    ciudad: string
    cantidad: number
    precio: number

Casos borde detectado: en clientes se repiten varias veces el mismo tipo de cliente.
En las ciudades, no hay una organización del tipo de datos, porque hay unos en mayuscula, otros en minuscula, otros tienen tildes y entre otros casos de sensitive case.
Cantidades, hay buna cantidad en 0 que significa que no vendio nada 

la decision es organzar los datos, darle un orden y que se puedan identificar.


punto 2

en pseudocodigo

nos piden :
cuanto se vendio (total de ventas).
Cantidad de unidadese (cuanto salió).
venta mayor 
promedio de compra (dividir el total frente a la cantidad).

1. Algoritmo Cuanto se vendio(ventas)
    entero acum = 0, i
    para (i = 0 hasta ventas.lenght - 1, i++)
     acum = acum + ventas.precio[i]* ventas.cantidad[i]
    fin para
    return acum

2. Algoritmo Venta más grande(ventas)
    Real vMY = ventas.precio[0]*ventas.precio[0]
    Entero i
    para (i = 1 hasta ventas.lenght - 1, i++)
        si vMY < ventas.precio[i]*ventas.precio[i] entonces
            vMY = ventas.precio[i]*ventas.precio[i]
        fin si
    fin para
    return vMy

3. Algoritmo Cantidad vendio(ventas)
    entero acum = 0, i
    para (i = 0 hasta ventas.lenght - 1, i++)
        acum = acum + ventas.cantidad[i]
    fin para
    return acum

4. Algoritmo promedioTicket(Ventas)
    Real prom
    Real Tot = Cuanto se vendio(ventas)
    Entero Cantidad = Cantidad vendio(ventas)

    prom = Tot / Cantidad

    return prom




