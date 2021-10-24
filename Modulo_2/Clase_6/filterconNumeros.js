let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let desaprobados  = estudiantes.filter(function(elemento){
    if(elemento.promedio<6){
        return elemento;
    }
});

let aprobados = estudiantes.filter(function(elemento){
    if(elemento.promedio>6){
        return elemento;
    }
});

console.log(desaprobados);
console.log(aprobados);