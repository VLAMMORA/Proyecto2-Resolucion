console.log("Funcionando Archivo de variables ")

let nombre = "Pepito"
let numero = 12

console.log("El nombre es " + nombre)

//Arreglo = Lista [ , , , ]

let amigos = ["Jose","Paola","Nelson"]
//Mostrar un arreglo 
console.log(amigos[0])
//Objetos 

let Carro ={
    Marca: "BYD",
    Ruedas: 4,
    Puertas: 4,
    Color: "Rojo "
}

//Mostrar una caracterisca el objeto 
console.log(Carro.Marca)
console.log(Carro)

//Arreglo de Objetos 
//   [{},{},{} ]

let Listadecarros =[
    {
        Marca: "BYD",
        Ruedas: 4,
        Puertas: 4,
        Color: "Rojo "
    },
    {
        Marca: "HYUNDAi",
        Ruedas: 4,
        Puertas: 4,
        Color: "Rojo "
    },

    {
        Marca: "china",
        Ruedas: 4,
        Puertas: 4,
        Color: "Rojo "
    }
    ,
    {
        Marca: "Nissan",
        Ruedas: 4,
        Puertas: 4,
        Color: "Rojo "
    }

]

console.log(Listadecarros[2].Marca)
//Pintar en HTML 
let divHola3 = document.getElementById("divHola3")

divHola3.innerHTML = Listadecarros

// para convertir de Objeto a string JSON.Strintify()

divHola3.innerHTML =JSON.stringify(Listadecarros) 