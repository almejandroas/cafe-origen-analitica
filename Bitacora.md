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

la decision es organzar los datos.