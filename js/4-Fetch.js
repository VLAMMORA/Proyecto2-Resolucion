console.log("Funcionando archivo fetch ")

//Creamos La funcion
function LlamarAPI() {
    
console.log("Llamando a la funcion ")
//Llamar al API 
//Pasos
// 1- Se coloca Fetch con el API
//2- Se usa Then para poner la variable data en formato JSON
//3- Se usa then para mostrar en consola la data 
fetch("https://jsonplaceholder.typicode.com/users/")
.then(data=> data.json())
.then(data=>{

    console.log(data)
    CrearTabla(data)

})

}

//Usamos la funcion 
LlamarAPI()

//Creamos la tabla y ponemos un parametro "Datos" que sera toda la informacion del API
function CrearTabla(Datos) {
 //llamamos el ID
 let tablahtml = document.getElementById("tablahtml")   
 //Colocamos el template 
 let contenidoHTML

 //Reemplazados Datos.Propiedad que queremos mostrar 
 // Iteramos sobre el array de objetos
 Datos.forEach(element => {
    
// Colocamos el template para cada objeto
contenidoHTML = `
<tr>
    <td>${element.id}</td> 
    <td>${element.name}</td>
    <td>${element.email}</td>
</tr> 

`
//Insertamos el template en el DIV 
tablahtml.innerHTML += contenidoHTML
 });
  

}