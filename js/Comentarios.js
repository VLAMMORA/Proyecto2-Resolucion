function LlamarAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(datos=>datos.json())
    .then(datos=>{

        console.log(datos)
        //LLamamos a la tabla 
        Creartabla(datos)
    })
}
LlamarAPI()

function Creartabla(datos) {
    let table2 = document.getElementById("table2")
    datos.forEach(element => {
        let ContenidoHTML = `
        
        <tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
        </tr>        
        `
     table2.innerHTML +=ContenidoHTML

    });


}