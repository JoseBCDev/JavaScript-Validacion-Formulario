//VARIABLES

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//APLICAMOS EXPRESIONES REGULARES de emailregex.com
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       

eventListeners(); //FUNCION SE INICIA, CUANDO SE CARGA LA PAGINA

//FUNCION CREADA PARA EL ARRANQUE DE LA PAGINA
function eventListeners(){
    document.addEventListener('DOMContentLoaded',IniciarApp);

    email.addEventListener('blur',validarFormulario);

    asunto.addEventListener('blur',validarFormulario);

    mensaje.addEventListener('blur',validarFormulario);
}
//FUNCIONES

function IniciarApp()
{
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function validarFormulario(e)
{
 
    if(e.target.value.length > 0){

        const error = document.querySelector('p.error');

        if(error){
            error.remove();
        }
        

        e.target.classList.remove('border','border-red-500'); //REMOVEMOS LA CLASE BORDE ROJO
        e.target.classList.add('border','border-green-500'); //AGREGAMOS CLASE BORDE VERDE
        
         console.log('si hay algo');
    }else{
         e.target.classList.remove('border','border-green-500'); //REMOVEMOS CLASE BORDE VERDE
        e.target.classList.add('border','border-red-500');//AGREGAMOS CLASE BORDE ROJO
        
        mostrarError('Todos los campos son obligatorios');
    }
   //CALCULAMOS SI ES DE TIPO EMAIL O NO
    if(e.target.type === 'email'){
        //VERIFICAMOS SI EL CAMPO EMAIL, CONTIENE LOS CARACTERES DE EMAIL
         if(er.test(e.target.value))
        {
            const error = document.querySelector('p.error');

            if(error){
            error.remove();
             }
        
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');  
        }else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');  
            mostrarError('Email no válido');
        }

    }
    //NO SE PUEDE UTILIZAR e.target.value porque es dinamico, para asegurar q verifique el correo se 
        // utiliza email.value
    if(er.test(email.value) && asunto.value !== '' && mensaje.value !==''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }
}

function mostrarError(mensaje){
    //CREAMOS UN ELEMENTO P Y LE DAMOS TEXTO Y DISEÑO
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error');

    
    //CALCULAMOS CUANTAS CLASES TIENE EL DOCUMENTO '.ERROR'
    const errores = document.querySelectorAll('.error');
    // SI TIENE MÁS DE 0 SIGNIFICA Q DIO VARIAS VECES, SINO SE AGREGA POR PRIMERA VEZ EL MENSAJE
    if(errores.length === 0)
    {
        formulario.appendChild(mensajeError);
    }
}
