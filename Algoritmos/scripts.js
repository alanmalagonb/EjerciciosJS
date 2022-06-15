var arreglo = [0];
var posicion = -1;

function agregarNumero(){
    posicion += 1;
    arreglo[posicion] = document.getElementById("1").value;

    var array = "";
    for (let i = 0; i < arreglo.length; i++) {
        array += arreglo[i] + " ";
    }
    alert('Arreglo: ' + array);
}

function reiniciar(){
    arreglo = [0];
    posicion = -1;
    alert('Arreglo reiniciado!')
}

function bubbleSort(){
    let len = arreglo.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(arreglo[j] > arreglo[j + 1]){
                let tmp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = tmp;
            }
        }
    }
    imprimirOrdenado();
}

function insertionSort(){
    let n = arreglo.length;
    for (let i = 1; i < n; i++) {
        let current = arreglo[i];
        let j = i-1; 
        while ((j > -1) && (current < arreglo[j])) {
            arreglo[j+1] = arreglo[j];
            j--;
        }
        arreglo[j+1] = current;
    }
    imprimirOrdenado();
}

function selectionSort(){
    let n = arreglo.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arreglo[j] < arreglo[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = arreglo[i]; 
             arreglo[i] = arreglo[min];
             arreglo[min] = tmp;      
        }
    }
    imprimirOrdenado();
}

function imprimirOrdenado(){
    var ordenado = "";
    for (let i = 0; i < arreglo.length; i++) {
        ordenado += arreglo[i] + " ";
    }
    alert('Arreglo Ordenado: ' + ordenado);
}