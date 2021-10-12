//leer un archivo con el modulo js
const fs = require('fs')

function leerArchivo(){
	const archivo = fs.readFileSync('tareas.json','utf-8');
	return JSON.parse(archivo);
}

function guardarArchivo(tareas){
	let tareasJSON = JSON.stringify(tareas);
	fs.writeFileSync('tareas.json', tareasJSON);
}

function guardarTarea(tarea){
	let tareasActuales = leerArchivo();
	tareasActuales.push(tarea);
	guardarArchivo(tareasActuales);
	return tareasActuales;
}

function filtrarTarea(filtro){
	let tareasActuales = leerArchivo();
	//console.log(tareasActuales);
	tareasActuales.forEach(function(valor, indice){
		if(valor.estado == filtro){
			console.log("Filtro: "+filtro+" - titulo: "+valor.titulo+" estado: "+valor.estado)
		}
	});

	return tareasActuales;
}

module.exports = {
	guardarTarea,
	leerArchivo,
	filtrarTarea
};