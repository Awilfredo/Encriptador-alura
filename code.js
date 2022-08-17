let expRegTexto = new RegExp('^[a-z]+[a-z!?\\s]*$');
let expRegBlanco= new RegExp('^[\\s]+$');
var btnEncriptar= document.getElementById('encriptar');
var btnDesencriptar=document.getElementById('desencriptar');
var btnCopiar=document.getElementById('btnCopiar');
btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick=desencriptar;
btnCopiar.onclick=copiarTexto;


function encriptar() {
    var texto= document.getElementById('texto').value;
    if(texto!="" && expRegTexto.test(texto)){
        var encriptado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        document.getElementById('textoResultado').innerHTML=encriptado;  
        ocultar();        
    }else if(texto==""){
        textoIncorrecto();
        document.getElementById('textoResultado').innerHTML="Ningún mensaje fue encontrado";  
    } else if(!expRegBlanco.test(texto)){
        textoIncorrecto();
    } else{
        limpiarTexto();
        textoIncorrecto();
        document.getElementById('textoResultado').innerHTML="Ningún mensaje fue encontrado";  
    }      
}

function desencriptar() {
    var texto= document.getElementById('texto').value;
    if(texto!="" && expRegTexto.test(texto)){
        var encriptado = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        document.getElementById('textoResultado').innerHTML=encriptado; 
        ocultar();
    }else if(texto==""){
        textoIncorrecto();
        document.getElementById('textoResultado').innerHTML="Ningún mensaje fue encontrado";  
    } else if(!expRegBlanco.test(texto)){
        textoIncorrecto();
    } else{
        limpiarTexto();
        textoIncorrecto();
        document.getElementById('textoResultado').innerHTML="Ningún mensaje fue encontrado";  
    }      
} 


function limpiarTexto(){
    var campoTexto=document.getElementById('texto');
    campoTexto.value="";
    campoTexto.focus();
}

function textoIncorrecto(){
    const dibujo=document.getElementById('dibujo');
    dibujo.classList.toggle("d-none", false);
    document.getElementById('textoResultado').innerHTML="El texto ingresado es incorrecto.";    
    const mensaje= document.getElementById('mensaje');
    mensaje.classList.toggle('d-none', false);
    const copiarbtn= document.getElementById('btnCopiar');
    copiarbtn.classList.toggle('d-none', true);
}


function copiarTexto(){
    var texto = document.getElementById("textoResultado");
    var inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", texto.innerHTML);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
}


function ocultar(){
    const dibujo=document.getElementById('dibujo');
    dibujo.classList.toggle("d-none", true);
    const copiarbtn= document.getElementById('btnCopiar');
    copiarbtn.classList.toggle('d-none', false);
    const mensaje= document.getElementById('mensaje');
    mensaje.classList.toggle('d-none', true);
}

