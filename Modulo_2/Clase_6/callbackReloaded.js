function agregarHttp(url) {
    return 'http://'.concat(url);
}

function largoString(url) {
    return url.length;
}

function procesar(array, proceso){
    let nuevaLongitud = [];
    for (let i=0; i<array.length;i++){
       nuevaLongitud.push(proceso(array[i]));
    }
    return nuevaLongitud;
}

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
  let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
  console.log(largoDeElmentos); // imprime [ 14, 13 ]