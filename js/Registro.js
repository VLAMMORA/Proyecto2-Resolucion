function Insertar() {

    //Obtener valores del formulario
    let vuserId = document.getElementById("userId").value;
    let vtitle = document.getElementById("title").value;
    let vbody = document.getElementById("body").value;
    //debugger
    //Crear objeto de los datos del formulario 
    const Datos = {
        userId: vuserId,
        title: vtitle,
        body: vbody
    }
   // debugger
   
    //Realiza la Insercion al API por el protocolo POST
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(Datos)

    })
    .then(data=>data.json())
    .then(data=>{
        //debugger
        console.log(data)
        alert("Registro insertado exitosamente ")
    })
    .catch(error=>{
        console.error("Error al insertar ")
        alert("Error al insertar ")
    })
}