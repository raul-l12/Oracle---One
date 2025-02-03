let amigos=[];

const inputAmigos = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const listaResultados = document.getElementById("resultado");

function agregarAmigo(){
    if(inputAmigos.value === ""){
        alert("Por favor, inserte un nombre.");
    }else{
        let validarInputAmigo = permitirSoloLetras(inputAmigos.value);
        if(validarInputAmigo){
            amigos.push(inputAmigos.value);
            recorrerArreglo();
        }else{
            alert("El nombre no cumple con las politicas, deben ser solo letras, minimo 3 y maximo 15!");
        }
      
        inputAmigos.value="";
    }
}

function recorrerArreglo(){
    listaAmigos.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML=amigos[i];
        listaAmigos.appendChild(li);
    }    
}

function sortearAmigo(){

    listaAmigos.innerHTML="";
    listaResultados.innerHTML="";

    inputAmigos.setAttribute("disabled", "disabled");
    inputAmigos.nextElementSibling.setAttribute("disabled", "disabled");
    

    if(verificarArrayAmigos()){
        let indiceAmigoSorteado = Math.floor((Math.random()*amigos.length));
        listaResultados.append(amigos[indiceAmigoSorteado]);
        amigos.splice(indiceAmigoSorteado,1);
        console.log(amigos);
    }else{
        alert("No hay amigos para sortear!");
        inputAmigos.removeAttribute("disabled");
        inputAmigos.nextElementSibling.removeAttribute("disabled");
    }
    
}

function verificarArrayAmigos(){
    return Array.isArray(amigos) && amigos.length !== 0;
}

function permitirSoloLetras(input){
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,15}$/;
    return regex.test(input);
}
