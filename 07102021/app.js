const tareasFunc = require('./tareas');

let accion = process.argv[2];
let tareas = tareasFunc.leerArchivo();

console.log('\n********************');
console.log(accion);
console.log('********************\n');

switch(accion){
	case 'listar':
		console.log('Listado de tareas');
		console.log('-----------------');

		//ciclo para listar las tareas

		imprimirTareas(tareas);

		break;
	case 'crear':
		//crear una nueva tarea
		const nuevaTarea = {
			titulo: process.argv[3], estado: 'pendiente'
		}

		imprimirTareas(tareasFunc.guardarTarea(nuevaTarea));

		break;
	case 'filtrar':
		tareasFunc.filtrarTarea(process.argv[3]);
		break;
	case undefined:
		console.log('Pasame una accion');
		break;
	default:
		console.log('No entiendo nada');
		break;
}

function imprimirTareas(tareasImp){
	tareasImp.forEach(function(valor, indice){
		console.log("titulo: "+valor.titulo+" estado: "+valor.estado)
	});
}