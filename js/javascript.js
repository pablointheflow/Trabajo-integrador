
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

        document.getElementById("subtotal").innerHTML = "Total a pagar: $" + precioTot;

        return precioTot;

    }
    else if (cantidad > 15){
        document.getElementById("subtotal").innerHTML = "Cantidad maxima de entradas: 15";
    }
    else if (cantidad == 0)
   {
      document.getElementById("subtotal").innerHTML = "Total a pagar: $";
    }
}

function limpiarDatos(){
    document.getElementById("subtotal").innerHTML = "Total a pagar: $";
}

function resumenDatos(){
    

    let nomb = document.getElementById("nombre").value;
    let ape = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let cant = document.getElementById("cant").value + " entrada(s)";
    let total = "Total a abonar: $" + calcularPrecio();

    let datos = [nomb,ape,email,cant, total];

    console.log(datos);
    
    document.getElementById("datosConfirmar").innerHTML = "";
    
    const divModal = document.getElementById("datosConfirmar");

    if(nomb == ""){
        console.log("Falta nombre")
        const divNom = document.createElement("div");
        divNom.textContent="Ingrese su nombre";
        divModal.appendChild(divNom);

    }
    else if(ape==""){
        const divApe = document.createElement("div");
        divApe.textContent="Ingrese su apellido";
        divModal.appendChild(divApe);

    }
    else if(email==""){
        const divEmail = document.createElement("div");
        divEmail.textContent="Ingrese su email";
        divModal.appendChild(divEmail);
    }
    else if(cant == " entrada(s)"){
        const divCant = document.createElement("div");
        divCant.textContent="Ingrese cantidad de entradas";
        divModal.appendChild(divCant);
    }
    else {
        console.log("Ingreso correcto if");

       for(i=0; i < datos.length; i++) {
        
        let div = document.createElement("div");

        div.textContent=datos[i];

        divModal.appendChild(div);
            
        console.log(datos[i]);
        

    };

    

}
}