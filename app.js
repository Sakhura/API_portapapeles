//referencias  DOM
const inputOrigen = document.getElementById('inputOrigen');
const inputDestino = document.getElementById('inputDestino');
const mensajeCopiar = document.getElementById('mensajeCopiar');
const inputOrmensajePegarigen = document.getElementById('mensajePegar');

function setMensaje(el, texto, tipo ='ok'){
    el.textContent = texto;
    el.className = `mensaje ${tipo}`;
}

//fx copiado
function copiarTexto(){
    const texto = inputOrigen.value.trim();
    //tiene que validar que no este vacio

    if(texto){
        setMensaje(msgCopiar, 'INGRESA PRIMERO EL TEXTO', 'warn');
        return
    }

    //verificar soporte de la api
    if(!navigator.clipboard){
        setMensaje(msgCopiar, 'CLIPBOARD NO DISPONIBLE', 'err');
        return
    }

    //llamar api
    navigator.clipboard.writeText(texto)
    .then(function(){
        setMensaje(msgCopiar, 'TEXTO COPIADO EN EL PORTAPAPELES', 'ok');
    })
    .catch(function(error){
        setMensaje(msgCopiar, 'ERROR', +Error.message, 'err');
    });
}

// promesa 
// .then texto copiado en el portapapeles
// .catch falla o el navegador no me dio los permisos

function pegarTexto(){
        //verificar el soporte de la API
    if(!navigator.clipboard){
        setMensaje(msgCopiar, 'CLIPBOARD API NO DISPONIBLE', 'err');
        return;
    }

    // llamada api
    navigator.clipboard.readText(texto)
        .then(function(texto){
            if(texto){
                inputDestino.value = texto;
                setMensaje(msgPegar, 'TEXTO PEGADO CORRECTAMENTE', 'ok');
            }else { 
                setMensaje(msgPegar, 'EL PORTAPAPELES ESTA VACIO', 'warn');
            }
        })
        .catch(function(error){
            setMensaje(msgPegar, 'PERMISO DENEGADO', 'err');
        });
        
}