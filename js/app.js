//VARIABLES

btnEnviar = document.querySelector('#enviar');

eventListeners(); //FUNCION SE INICIA, CUANDO SE CARGA LA PAGINA

//FUNCION CREADA PARA EL ARRANQUE DE LA PAGINA
function eventListeners(){
    document.addEventListener('DOMContentLoaded',IniciarApp)
}
//FUNCIONES

function IniciarApp()
{
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
    console.log(btnEnviar);
}

