//Variable
let mensaje = "Derechos reservados"
//Creacion de la funcion 

function CrearFooter(variable1) {
    //Capturar el div 
let divFooter = document.getElementById("divFooter")
let contenidoHTML

contenidoHTML =`

<footer class="footer fixed-bottom bg-dark text-white text-center ">
    <div class="container">
 
        <p>&copy; ${variable1}</p>
    </div>
  </footer>

`
 divFooter.innerHTML += contenidoHTML 
}

//llamdo a la funcion 

CrearFooter(mensaje)


