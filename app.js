//referencias  DOM
const inputOrigen = document.getElementById('inputOrigen');
const inputDestino = document.getElementById('inputDestino');
const mensajeCopiar = document.getElementById('mensajeCopiar');
const mensajePegar = document.getElementById('mensajePegar');

function setMensaje(el, texto, tipo ='ok'){
    el.textContent = texto;
    el.className = `mensaje ${tipo}`;
}

//fx copiado
function copiarTexto(){
    const texto = inputOrigen.value.trim();
    //tiene que validar que no este vacio

   if(!texto){
        setMensaje(mensajeCopiar, 'INGRESA PRIMERO EL TEXTO', 'warn');
        return
    } 

    //verificar soporte de la api
    if(!navigator.clipboard){
        setMensaje(mensajeCopiar, 'CLIPBOARD NO DISPONIBLE', 'err');
        return
    }

    //llamar api
    navigator.clipboard.writeText(texto)
    .then(function(){
        setMensaje(mensajeCopiar, 'TEXTO COPIADO EN EL PORTAPAPELES', 'ok');
    })
    .catch(function(error){
        setMensaje(mensajeCopiar, 'ERROR', +Error.message, 'err');
    });
}

// promesa 
// .then texto copiado en el portapapeles
// .catch falla o el navegador no me dio los permisos

function pegarTexto(){
        //verificar el soporte de la API
    if(!navigator.clipboard){
        setMensaje(mensajeCopiar, 'CLIPBOARD API NO DISPONIBLE', 'err');
        return;
    }

    // llamada api
    navigator.clipboard.readText()
        .then(function(texto){
            if(texto){
                inputDestino.value = texto;
                setMensaje(mensajePegar, 'TEXTO PEGADO CORRECTAMENTE', 'ok');
            }else { 
                setMensaje(mensajePegar, 'EL PORTAPAPELES ESTA VACIO', 'warn');
            }
        })
        .catch(function(error){
            setMensaje(mensajePegar, 'PERMISO DENEGADO', 'err');
        });
        
}