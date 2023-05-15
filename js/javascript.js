
function calcularPrecioTotal(){

    console.log("Ingreso a funcion");

    let cant = document.getElementById("cantidad").value;
    let porcentaje = document.getElementById("descuento").value;

    //Precio por cantidad de entradas
    let precio= cant*1000;

    //Almaceno el descuento
    let desc = precio * porcentaje/100

    //Almaceno el total con el descuento, precio final
    let precioF = precio - desc;

    document.getElementById("precioFinal").value = precioF;

}