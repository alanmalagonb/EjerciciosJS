function paresFor(){
    var pares = "";

    for(var i=1; i<=100;i++){
        if(i%2==0){
            pares+=i.toString()+" ";
        }
    }
    alert('Pares: ' + pares);
}

function sumatoriaFor(){
    var suma = 0;

    for(var i=1; i<=100;i++){
        suma+=i;
    }
    alert('Suma: ' + suma);
}

function paresWhile(){
    var pares = "";
    var i=1;
    while(i<=100){
        if(i%2==0){
            pares+=i.toString()+" ";
        }
        i++;
    }
    alert('Pares: ' + pares);
}

function sumatoriaWhile(){
    var suma = 0;
    
    var i=1;
    while(i<=100){
        suma+=i;
        i++;
    }
    alert('Suma: ' + suma);
}

function paresDoWhile(){
    var pares = "";

    var i=1;
    do{
        if(i%2==0){
            pares+=i.toString()+" ";
        }
        i++;
    } while(i<=100);
    alert('Pares: ' + pares);
}

function sumatoriaDoWhile(){
    var suma = 0;
    
    var i=1
    do{
        suma+=i;
        i++;
    } while(i<=100);
    alert('Suma: ' + suma);
}