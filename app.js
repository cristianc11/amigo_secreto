// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre){
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        actualizarAmigos();
    }
    else{
        alert("Por favor, inserte un nombre");
    }
}

function actualizarAmigos(){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        document.getElementById("listaAmigos").appendChild(item);
        item.innerHTML = amigos[i];
    }
}


function sortearAmigo(){
    if(amigos.length > 0){
        let indice = Math.floor(Math.random()*amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = ("Tu amigo secreto es "+amigos[indice]);
        document.getElementById("listaAmigos").innerHTML = "";
    }
    else{
        alert("Por favor, inserte al menos un nombre");
    }
}


