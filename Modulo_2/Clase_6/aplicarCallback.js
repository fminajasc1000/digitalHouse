function doble(numero){
    return numero *2;
}
function triple(numero){
    return numero *3;
} 

function aplicarCallback (numero, callback ) {
    return callback (numero);
} 

console.log(aplicarCallback  ( 5, doble ));
console.log (aplicarCallback  ( 5, triple ));