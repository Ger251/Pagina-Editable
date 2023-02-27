function direccion (){  location.href = "modificador.html";};
const user = document.getElementById("name"); 
let pass = document.getElementById("password");
let form = document.getElementById("form");
let oculto = document.querySelector (".oculto");
let inco =document.getElementById("inco");
let valida = document.getElementById("valida"); 

function mayus(){
    var x = user.value.toUpperCase() ;
    return x ;
};
function validacion(){
    if (mayus() == "GERMAN" && pass.value=="123") {
        direccion();
        visibilidad = true;
        sessionStorage.visible = visibilidad;              
    }
     else{ inco.style.display = "block"
     }     
};
function usuarioIncorrecto(){
    inco.style.display = "none"
};
valida?.addEventListener("click",validacion);
function muestra(){   
    if (sessionStorage.getItem ("visible") == "true") {    
       oculto.classList.remove("oculto");
    }   
};
muestra(); 
//-----------------------------CODIGO DEL ACCESO-------------------------------------------//
let titulo = document.getElementsByClassName("titulos")
let subTitulo = document.getElementsByClassName("sub-titulos")
let img1 = document.getElementById("img1")

function tituloColor(a){
    for (let i = 0; i < titulo.length; i++) {
       titulo[i].style.color = a;
     }
}

let divFoto = document.getElementById("div-img");
let file = document.getElementById('file')
function cambia(n){
    divFoto.style.backgroundImage = "url(/Img/"+n+")"
}


function cambiaImg(n){
     
    img1.src = "/Img/"+  n

}
//-------------------------------ALGUNAS FUNCIONES UTILES----------------------------------//






