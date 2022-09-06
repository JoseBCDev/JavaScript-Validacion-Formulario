//VARIABLES

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

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
         console.log('si hay algo');
    }else{
        e.target.classList.add('border','border-red-500');
        mostrarError();
    }
}

function mostrarError(){
    //CREAMOS UN ELEMENTO P Y LE DAMOS TEXTO Y DISEÑO
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error');

    
    //CALCULAMOS CUANTAS CLASES TIENE EL DOCUMENTO '.ERROR'
    const errores = document.querySelectorAll('.error');
    // SI TIENE MÁS DE 0 SIGNIFICA Q DIO VARIAS VECES, SINO SE AGREGA POR PRIMERA VEZ EL MENSAJE
    if(errores.length === 0)
    {
        formulario.appendChild(mensajeError);
    }else{

    }
}
