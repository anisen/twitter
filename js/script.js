function agregar(){
	//recuperamos texto ingresado en la tarea y limpio textarea.
	var tareas=document.getElementById('tarea').value;
	document.getElementById('tarea').value="";
    //donde estaran las tareas que recupere
	var cont =document.getElementById("contenedor");
    //creamos nodos de elementos
    var nuevaTarea=document.createElement("div");
    var textoNuevaTarea=document.createTextNode(tareas);
    var elementoContenedor=document.createElement("span");
    //asignamos padres a nodos creados
    elementoContenedor.appendChild(textoNuevaTarea);
    nuevaTarea.appendChild(elementoContenedor);
    cont.appendChild(nuevaTarea);
    //creamos checkbox e iconos, atributos y clases
    var chck=document.createElement('input');
    chck.type='checkbox';
    chck.setAttribute('class','check');
    var basura=document.createElement('span');
    basura.classList.add('fa', 'fa-trash-o');
    var cora=document.createElement('span');
    cora.classList.add('fa', 'fa-heart');
    //asignar padres a nodos
    nuevaTarea.appendChild(chck);
    nuevaTarea.appendChild(basura);
    nuevaTarea.appendChild(cora);
    //agregamos evento al hacer click para eliminar o agregar la clase "tachado" a elementoContenedor
    chck.addEventListener('click', function (){
    	elementoContenedor.classList.toggle('tachado');
    });
    //remover el icono basurero al hacer click
    basura.addEventListener('click', function(){
    	cont.removeChild(nuevaTarea);
    });
    //funcion click para el corazon
    cora.addEventListener('click', function(){
    	cora.classList.toggle('red');
    })
}







