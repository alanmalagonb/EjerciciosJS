function votar(){
    var edad = document.getElementById("1").value;
    if(edad >= 18){
        alert('Puedes Votar');
    }
}

function mayorTres(){
    var dato1 = parseInt(document.getElementById("1").value);
    var dato2 = parseInt(document.getElementById("2").value);
    var dato3 = parseInt(document.getElementById("3").value);

    var mayor = 0;

    if( dato1 >= dato2 && dato1 >= dato3){
        mayor = dato1;
    } else if (dato2 >= dato1 && dato2 >= dato3){
        mayor = dato2;
    } else {
        mayor = dato3;
    }
    alert('El mayor es ' + mayor);
}

function ejemploSwitch(){
    var dato1 = document.getElementById("1").value;
    switch (dato1.toUpperCase()){
        case 'JOSE' : alert('Hola ' +dato1);
        break;
        case 'ASUNCION' : alert('Hola ' +dato1);
        break;
        case 'MARIA' : alert('Hola ' +dato1);
        break;
        default: alert('Error ' +dato1);
        break;
    }
}