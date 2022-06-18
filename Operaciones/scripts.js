function ejercicio1(){
    var numero = document.getElementById("1").value;
    if(numero == ""){
        alert('Error');
    }else if(numero%2 == 0){
        alert('Par');
    }else{
        alert('Impar');
    }  
}

function ejercicio2(){
    var numero = document.getElementById("1").value;
    if(numero == ""){
        alert('Error');
    }else{
        var tabla = "";
        var i;
        for(i=1; i<=10; i++){
            tabla += numero + " x " + i + " = " + (i*numero) + "\n"; 
        }
        alert('Tabla de Multiplicar: \n' + tabla);
    }  
}

var num1 = [0];
var num2 = [0];

function ejercicio3(){
    var numero = document.getElementById("1").value;
    var numero2 = document.getElementById("2").value;
    var producto = 0;
    for (let i = 0; i < numero2; i++) {
        producto += numero;
    }
    alert('Producto: ' + numero * numero2);
}

var arreglo4 = [0];
var posicion4 = -1;

function agregarNumero4(){
    posicion4 += 1;
    arreglo4[posicion4] = document.getElementById("1").value;

    var array = "";
    for (let i = 0; i < arreglo4.length; i++) {
        array += arreglo4[i] + " ";
    }
    alert('Arreglo: ' + array);
}

function reiniciar4(){
    arreglo4 = [0];
    posicion4 = -1;
    alert('Arreglo reiniciado!');
}

function ejercicio4(){
    var mayor = 0;
    var posicion = 0;
    for (let i = 0; i < arreglo4.length; i++) {
        if( i==0 ){
            mayor = arreglo4[i];
        } else {
            if(arreglo4[i] > mayor ){
                mayor = arreglo4[i];
                posicion = i;
            }
        }
    }
    alert('Mayor : ' + mayor + '\n' + 'Posición: ' + posicion);
}


var vectorA = [0];
var posicionA = -1;
var vectorB = [0];
var posicionB = -1;
var vectorC = [0];

function agregarNumeroA(){
    posicionA += 1;
    vectorA[posicionA] = document.getElementById("1").value;

    var array = "";
    for (let i = 0; i < vectorA.length; i++) {
        array += vectorA[i] + " ";
    }
    alert('Vector A: ' + array);
}

function agregarNumeroB(){
    posicionB += 1;
    vectorB[posicionB] = document.getElementById("1").value;

    var array = "";
    for (let i = 0; i < vectorB.length; i++) {
        array += vectorB[i] + " ";
    }
    alert('Vector B: ' + array);
}

function reiniciarABC(){
    vectorA = [0];
    posicionA = -1;
    vectorB = [0];
    posicionB = -1;
    vectorC = [0];
    alert('Vectores reiniciados!');
}

function ejercicio5() {
    if(vectorA.length == vectorB.length){
        for (let i = 0; i < vectorA.length; i++) {
            vectorC[i] = parseInt(vectorA[i]) + parseInt(vectorB[i]);
        }
        imprimirResultado()
    }else{
        alert('A y B no tienen la misma longitud');
    }
}

function imprimirResultado(){
    var A = "";
    var B = "";
    var C = "";
    for (let i = 0; i < vectorA.length; i++) {
        A += vectorA[i] + " ";
        B += vectorB[i] + " ";
        C += vectorC[i] + " ";
    }
    alert('A: ' + A + '\n' + 'B: ' + B + '\n' + 'C: ' + C);
}

var arreglo6 = [0];
var posicion6 = -1;

function agregarNumero6(){
    posicion6 += 1;
    arreglo6[posicion6] = document.getElementById("1").value;

    var array = "";
    for (let i = 0; i < arreglo6.length; i++) {
        array += arreglo6[i] + " ";
    }
    alert('Arreglo: ' + array);
}

function reiniciar6(){
    arreglo6 = [0];
    posicion6 = -1;
    alert('Arreglos reiniciado!');
}

function ejercicio6(){
    var sumatoria = 0;
    for (let i = 0; i < arreglo6.length; i++) {
        sumatoria += parseInt(arreglo6[i]);
    }
    alert('Media: ' + parseFloat(parseInt(sumatoria)/arreglo6.length));
}

var arreglo7 = [""];
var posicion7 = -1;

function agregarTexto(){
    posicion7 += 1;
    arreglo7[posicion7] = document.getElementById("1").value;

    var array = "";
    for (let i = 0; i < arreglo7.length; i++) {
        array += arreglo7[i] + " ";
    }
    alert('Arreglo: ' + array);
}

function reiniciar7(){
    arreglo7 = [0];
    posicion7 = -1;
    alert('Arreglos reiniciado!');
}

function ejercicio7() {
    var resultado = "";
    for (let i = 0; i < arreglo7.length; i++) {
        resultado += "Texto " + i + "\n";
        resultado += "Longitud: " + arreglo7[i].toString().length + "\n";
        resultado += arreglo7[i].toString().toUpperCase() + "\n";
        resultado += arreglo7[i].toString().toLowerCase() + "\n\n";
    }
    alert(resultado);
}