
// function calcularPrecioTotal(){

//     console.log("Ingreso a funcion");

//     let cant = document.getElementById("cantidad").value;
//     let porcentaje = document.getElementById("descuento").value;

//     //Precio por cantidad de entradas
//     let precio= cant*1000;

//     //Almaceno el descuento
//     let desc = precio * porcentaje/100

//     //Almaceno el total con el descuento, precio final
//     let precioF = precio - desc;

//     document.getElementById("precioFinal").value = precioF;
    
// }

function calcularPrecio(){
    console.log("Ingreso a funcion");

    let cantidad= document.getElementById("cant").value;
    let categoria= document.getElementById("categ").value;

    if(cantidad > 0 && cantidad < 16){

        let precio = cantidad *200;

        let descuento = precio*categoria/100;

        let precioTot= precio - descuento;

        document.getElementById("total").innerHTML = "Total a pagar: $" + precioTot;

        return precioTot;

    }
    else if (cantidad > 15){
        document.getElementById("total").innerHTML = "Cantidad maxima de entradas: 15";
    }
    else if (cantidad == 0)
   {
      document.getElementById("total").innerHTML = "Total a pagar: $";
    }
}

function limpiarDatos(){
    document.getElementById("total").innerHTML = "Total a pagar: $";
}

