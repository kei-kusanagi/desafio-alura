var botonEncriptar = document.querySelector(".boton-encriptar")
var botonDesncriptar = document.querySelector(".boton-desencriptar")
var searchImage = document.querySelector(".searchImage")
var textoEncriptado = document.querySelector(".textoEncriptado")
var resultado = document.querySelector(".resultado")
var boton_copiar = document.querySelector(".boton_copiar")

botonEncriptar.oncick = encriptar;
botonDesncriptar.onclick = desencriptar;

function encriptar(){
    // esconderMostrar();
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    // esconderMostrar();
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante(){
    searchImage.classList.add("ocultar");
    textoEncriptado.classList.add("ocultar");
    boton_copiar.classList.add("mostrar");
}


function esconderMostrar(){
    var x = document.getElementById('searchImage');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        

    } else {
        x.style.display = 'none';
        
    }
    var x = document.getElementById('textoEncriptado');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        

    } else {
        x.style.display = 'block';
        
    }
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal= textoFinal + "ai";
        }
        else if (texto[i] == "e"){
            textoFinal= textoFinal + "enter";
        }
        
        else if (texto[i] == "i"){
            textoFinal= textoFinal + "imes";
        }
        else if (texto[i] == "o"){
            textoFinal= textoFinal + "ober";
        }
        else if (texto[i] == "u"){
            textoFinal= textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal+texto[i];
        }
    }
    return textoFinal;

}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal= textoFinal + "a";
            i = i + 1;
        }
        else if (texto[i] == "e"){
            textoFinal= textoFinal + "e";
            i = i + 4;
        }
        
        else if (texto[i] == "i"){
            textoFinal= textoFinal + "i";
            i = i + 3;
        }
        else if (texto[i] == "o"){
            textoFinal= textoFinal + "o";
            i = i + 3;
        }
        else if (texto[i] == "u"){
            textoFinal= textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal+texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".boton_copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
      // Mostrar el mensaje
    var message = document.createElement("div");
    message.textContent = "Texto copiado en el portapapeles";
    message.style.background = "rgba(10, 56, 113, 0.8)";
    message.style.color =  "#ffffff";
    message.style.position = "fixed";
    message.style.bottom = "0vh";
    message.style.left = "50%";
    message.style.borderRadius = "10px";
    message.style.transform = "translate(-50%, -50%)";
    message.style.margin = "8px";
    message.style.textAlign = "center";
    document.body.appendChild(message);

    setTimeout(function() {
        document.body.removeChild(message);
    }, 1000);
    })


function verificarTexto(texto) {
    var regex = /[A-ZÁÉÍÓÚÜ]/;
    var acentos = /[áéíóúü]/i;
    
    if (regex.test(texto) || acentos.test(texto)) {
        return false;
    } else {
        return true;
    }
}
    

    var cajaTexto = document.querySelector(".cajatexto");
    cajaTexto.addEventListener("input", function () {
        var texto = cajaTexto.value;
        var esValido = verificarTexto(texto);
    
        if (esValido == false) {
            var message_acento = document.createElement("div");
            message_acento.textContent = "Texto no válido";
            message_acento.style.background = "rgba(10, 56, 113, 0.8)";
            message_acento.style.color =  "#ffffff";
            message_acento.style.position = "fixed";
            message_acento.style.bottom = "0vh";
            message_acento.style.left = "50%";
            message_acento.style.borderRadius = "10px";
            message_acento.style.transform = "translate(-50%, -50%)";
            message_acento.style.margin = "8px";
            message_acento.style.textAlign = "center";
            document.body.appendChild(message_acento);
                    // Ocultar los botones
            if (botonEncriptar && botonDesncriptar) {
                botonEncriptar.style.visibility = "hidden";
                botonDesncriptar.style.visibility = "hidden";
            }
            } else {
            console.log("El texto es válido");
                // Mostrar los botones
                if (botonEncriptar && botonDesncriptar) {
                    botonEncriptar.style.visibility = "visible";
                    botonDesncriptar.style.visibility = "visible";
                }
            }
        });