console.log("Funcionando archivo main ")


let ListadoHeroes=[
    {
        nombre: "Spider-Man",
        bio:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi voluptate magni quam architecto voluptatum corrupti corporis neque quibusdam ipsum nobis, sed mollitia in consectetur facilis officiis quis quas dolorem?",
        img:"assets/Img/spiderman.png",
        fecha:"01/01/1990",
        Universo:"Marvel"   //DC o Marvel 

    },
    {
        nombre: "Batman",
        bio:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi voluptate magni quam architecto voluptatum corrupti corporis neque quibusdam ipsum nobis, sed mollitia in consectetur facilis officiis quis quas dolorem?",
        img:"assets/Img/batman.png",
        fecha:"01/01/1980",
        Universo:"DC"   //DC o Marvel 

    },

    {
        nombre: "Hulk",
        bio:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi voluptate magni quam architecto voluptatum corrupti corporis neque quibusdam ipsum nobis, sed mollitia in consectetur facilis officiis quis quas dolorem?",
        img:"assets/Img/hulk.png",
        fecha:"01/01/1970",
        Universo:"Marvel"   //DC o Marvel 

    },
    {
        nombre: "Aquaman",
        bio:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi voluptate magni quam architecto voluptatum corrupti corporis neque quibusdam ipsum nobis, sed mollitia in consectetur facilis officiis quis quas dolorem?",
        img:"assets/Img/aquaman.png",
        fecha:"01/01/1970",
        Universo:"DC"   //DC o Marvel 

    }
]

console.log(ListadoHeroes[0])
console.log(ListadoHeroes)

//INNER HTML 
//1 - Obtener el ID del elemento HTML divHola
//2- poner una varible con el mismo nombre del ID
//3- llenar la variable con el siguiente comando
//document.getelementbyid("X").innerhtml = HOLA

let Divheroe = document.getElementById("Divheroe")
console.log(Divheroe)
Divheroe.innerHTML += JSON.stringify(ListadoHeroes) // Visualizar el Objeto a TEXTO 

//Ejemplo pude meter HTML en una variable 
//Elemento HTML 







