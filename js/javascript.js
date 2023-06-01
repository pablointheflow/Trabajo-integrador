
//FUNCION PARA CALCULAR EL PRECIO TOTAL DE ENTRADAS
function calcularPrecio(){
    console.log("Ingreso a funcion");

    let cantidad= document.getElementById("cant").value;
    let categoria= document.getElementById("categ").value;

    //COMPRUEBO QUE INGRESE HASTA 15 ENTRADAS
    if(cantidad > 0 && cantidad < 16){

        
        let precio = cantidad *200;

        let descuento = precio*categoria/100;

        let precioTot= precio - descuento;

        document.getElementById("subtotal").innerHTML = "Total a pagar: $" + precioTot;

        //RETORNO EL TOTAL PARA USAR EN LA FUNCIÓN RESUMENDATOS()
        return precioTot;

    }
    else if (cantidad > 15){
        document.getElementById("subtotal").innerHTML = "Cantidad maxima de entradas: 15";
    }
    else if (cantidad == 0)
   {
    //RESETEO EL DIV CON EL TEXTO
      document.getElementById("subtotal").innerHTML = "Total a pagar: $";
    }
}

//RESETEO EL DIV CON EL TEXTO ADENTRO
function limpiarDatos(){
    document.getElementById("subtotal").innerHTML = "Total a pagar: $";
}


function resumenDatos(){
    
    //GUARDO EN VARIABLES LOS DATOS DEL CLIENTE
    let nomb = document.getElementById("nombre").value;
    let ape = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let cant = document.getElementById("cant").value + " entrada(s)";
    let total = "Total a abonar: $" + calcularPrecio();

    //GUARDO EN UN ARRAY LOS DATOS
    let datos = [nomb,ape,email,cant, total];

    console.log(datos);
    
    //RESETEO EL DIV PARA MOSTRAR LOS DATOS NUEVOS
    document.getElementById("datosConfirmar").innerHTML = "";
    
    //GUARDO EN DIVMODAL EL DIV DE LA VENTANA MODAL
    const divModal = document.getElementById("datosConfirmar");

    //COMPRUEBO EL INGRESO DE LOS DATOS
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
    /////

    else {
        console.log("Ingreso correcto if");
        //RECORRO EL ARRAY DATOS PARA MOSTRAR LOS DATOS EN LA VENTANA MODAL
       for(i=0; i < datos.length; i++) {

        let div = document.createElement("div");

        div.textContent=datos[i];

        divModal.appendChild(div);
            
        console.log(datos[i]);
        

    };

    

}
}