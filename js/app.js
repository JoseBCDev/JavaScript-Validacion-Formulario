//VARIABLES

btnEnviar = document.querySelector('#enviar');

email = document.querySelector('#email');
asunto = document.querySelector('#asunto');
mensaje = document.querySelector('#mensaje');

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
         console.log('no hay algo');
    }else{
        e.target.classList.add('border','border-red-500');
    }
 
}

