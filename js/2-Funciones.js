console.log("Archivo funciones activo ")

//INNER HTML 
//1 - Obtener el ID del elemento HTML divHola
//2- poner una varible con el mismo nombre del ID
//3- llenar la variable con el siguiente comando
//document.getelementbyid("X").innerhtml = HOLA

//Opcion 1
let divHola = document.getElementById("divHola").innerHTML = "Hola mundo desde JS "

console.log(divHola)

//opcion 2 

let divhola2 = document.getElementById("divHola2")

divhola2.innerHTML = "Hola mundo 2 desde JS "

console.log(divhola2)

//Opcion 3 

function VerHTMl() {
    //se llama el div
    let divgato = document.getElementById("divgato")
    // Contenido 
    var contenido
    
    contenido += `
    
    <h2>titulo</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis dolorem sapiente eos molestias iure minus? Minus possimus quo aut ducimus iusto accusamus magni corporis adipisci. Labore accusamus minima dicta!</p>
    
    
    `
    //se ingresa el contenido al div 
    divgato.innerHTML = contenido 
}

//se ejecuta la funcion 
VerHTMl()
