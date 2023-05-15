
    
/* DESPLEGA EL FORM CUANDO PRESIONA EL LINK CONTACTO */
 let openContacto = document.querySelector('.contacto');
 let formulario = document.querySelector('.form');
 /* CIERRA EL FORM CUANDO PRESIONA EL BOTON ENVIAR */
 let closeContacto = document.querySelector('.form_submit');
 /* CIERRA AL PRESIONAR EL BOTON CANCELAR */ 
 let cancelar = document.querySelector('.cancelar'); 

 /* CAPTURA EL EVENTO CLICK PARA MOSTRAR EL FORM */ 
 openContacto.addEventListener('click', (e)=>{
    e.preventDefault();
    /* AGREGA LA CLASE FORM--SHOW AL DIV PRINCIPAL PARA MOSTRAR EL FORMULARIO */
    formulario.classList.add('form--show'); 

});


 
 /* CAPTURA EL EVENTO CLICK PARA CERRAR EL FORM */ 
 closeContacto.addEventListener('click', (e)=>{
     e.preventDefault();
     alert('Gracias por su compra');
      /* REMUEVE LA CLASE FORM--SHOW PARA CERRAR EL FORM */
     formulario.classList.remove('form--show');
 });
 
 /* EVENTO CANCELAR */ 
 cancelar.addEventListener('click', (e)=>{
     e.preventDefault();
     alert('Compra Cancelada');
     /* REMUEVE LA CLASE FORM--SHOW PARA CERRAR EL FORM */
     formulario.classList.remove('form--show'); 
 });

