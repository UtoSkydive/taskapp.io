(function () {
// !  variables
var lista=document.getElementById("lista"),
    tareaInput=document.getElementById("tareaInput"),
    btnNuevaTarea=document.getElementById("btn-agregar");

// !funciones
var agregarTarea=function() {
    var tarea=tareaInput.value,
        nuevaTarea=document.createElement("li"),
        enlace=document.createElement("a"),
        contenido=document.createTextNode(tarea);
        if (tarea==="") {
            tareaInput.setAttribute("placeholder","Agrega una tarea Valida");
            tareaInput.className="error";
            return false;
            //  **  con return false se sale de la funcion y no ejecuta lo de abajo
        }
        // !agregamos el contenido al enlace
        enlace.appendChild(contenido);
        //! establecemos un atribtuto href al a para q sea clickeable
        enlace.setAttribute("href","#");
        //!Agregmos el enlae  a la nueva tarea(li)
        nuevaTarea.appendChild(enlace)
        // !agregamos nueva tarea a la list
        lista.appendChild(nuevaTarea);
        // !limpiamos el input
        tareaInput.value="";
        BorrarElemnts();
}
var comprobarInput=function(){
    tareaInput.className="";
    tareaInput.setAttribute("placeholder","Agrega una tarea")

}
var eliminarTarea=function(){



this.parentNode.removeChild(this)

}


// Eventos
// !Agregar atrea
btnNuevaTarea.addEventListener("click",agregarTarea);
    
//! Comprobar input

tareaInput.addEventListener("click",comprobarInput);
// !Boorando elemntos de la list
function BorrarElemnts() {
    for (let i= 0; i <= lista.children.length-1; i++) {
       lista.children[i].addEventListener("click",eliminarTarea)
       
       
    }
    
}

}());