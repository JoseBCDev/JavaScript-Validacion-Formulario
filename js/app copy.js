
//VARIABLES

const btnEnviar = document.querySelector('#enviar');

const btnReset = document.querySelector('#resetBtn');

const email = document.querySelector('#email');

const asunto = document.querySelector('#asunto');

const mensaje = document.querySelector('#mensaje');

const formulario = document.querySelector('#enviar-mail');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
funcioninicial();

function funcioninicial()
{
    //iniciar el formulario
    document.addEventListener('DOMContentLoaded',iniciarApp);

    //Validacion del formulario
    email.addEventListener('blur',validacionform);
    asunto.addEventListener('blur',validacionform);
    mensaje.addEventListener('blur',validacionform);

    //Envia el email
    formulario.addEventListener('submit',enviarEmail);

    //reiniciar
    btnReset.addEventListener('click',resetearform);
}


//FUNCIONES

function iniciarApp() {
   btnEnviar.disabled = true;
   btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}


function validacionform(e) {
    
    if(e.target.value.length > 0)
    {
        const error = document.querySelector('p.error');
        if(error)
        {
            error.remove();  
        }

        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
        
    }else{
        
        e.target.classList.remove('border','border-green-500');
         e.target.classList.add('border','border-red-500');
       /*  e.target.style.borderBottomColor = 'red'; */

       mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email')
    {
        //BASICO const resultado = e.target.value.indexOf('@');
        if(er.test(e.target.value))
        {
            const error = document.querySelector('p.error');
            if(error)
            {
                error.remove();  
            }
            
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');

        }
        else{
            mostrarError('El Email no es valido');
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
        }
    }

    if(er.test(email.value) && mensaje.value !=='' && asunto.value !=='')
    {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500', 'background-red-100','text-red-500','p-3','mt-5','text-center','error');

    const error = document.querySelectorAll('.error');
    if(error.length===0)
    {
        formulario.appendChild(mensajeError);
    }
    
}

function enviarEmail(e)
{
    e.preventDefault();
    
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(()=>{
        spinner.style.display = 'none';

        //texto parrafo
        const parrafo = document.createElement('p');
        parrafo.textContent='Mensaje se envio correctamente';
        parrafo.classList.add('text-center','p-4','my-10','bg-green-500','text-white','font-bold','uppercase');

        formulario.insertBefore(parrafo,spinner);

        setTimeout(()=>{
            parrafo.remove();

            resetearform();
        },4000);

    },3000);
}

function resetearform() {
    formulario.reset();
    iniciarApp();
}