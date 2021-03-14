var nombre = "";
const HeadTab = '<!DOCTYPE html> <html lang="es"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="description" content="Laboratorio 5: Fundamentos de JavaScript"> <title>Lab5 - Gonzalo García - DAW & BD</title> <link rel="stylesheet" href="stylesheet.css"> </head>';
const navTab = '<body><header id="header"><h1 id="titulo_lab">Laboratorio 5</h1 id="subtitulo_lab"><h2>FUNDAMENTOS DE JAVASCRIPT</h2></header><div class="topnav"><a href="lab5.html">Home</a>';
const endNavTab = '>Actividad</a></div><main><section>';
const endTab = '</section></body></html>';

function openDoc(nombrefunct){
    document.open("");
    document.write(HeadTab);
    document.write(navTab);
    document.write('<a class="active" onclick='+nombrefunct);
    document.write(endNavTab);
}

function tabla(){
    nombre = "tabla()";
    let input = prompt("Hasta que numero");
    openDoc(nombre);
    if (input > 0){
        document.write('<table  class="tablaAct">');
        document.write('<tr>');
        document.write('<th>Numero</th><th>Cuadrado</th><th>Cubo</th>');
        document.write('</tr>');
        for(let i=1;i<= input;i++){
            document.write('<tr>');
            document.write('<td>'+i+'</td><td>'+(Math.pow(i,2))+'</td><td>'+(Math.pow(i,3))+'</td></tf>');
            document.write('</tr>');
        }
        document.write('</table>');
        
    }else if(input <= 0){
        alert("No se aceptan numeros negativos");
    }else{
        alert("Solo se aceptan numeros");
    }
    document.write(endTab);
}

function random(){
    nombre = "random()";
    openDoc(nombre);
    let randomNumero1 = Math.round(Math.random()*10);
    let randomNumero2 = Math.round(Math.random()*10);
    let sum = randomNumero1+randomNumero2;
    var sartTime = new Date();

    let input = prompt("Cual es la suma de los siguientes numeros: "+randomNumero1+"+"+randomNumero2+"= ");
    var endTime = new Date();
    Time = endTime.getTime()-sartTime.getTime();
    if (input == sum){
        
        document.write('<p>Correcto te tardaste:</p>');
    }else{
        document.write('<p>Incorrecto te tardaste:</p>');
    }
    
    document.write((Time/1000) + " segundos");
    document.write(endTab);
}

function contador(){
    nombre = "contador()";
    openDoc(nombre);
	let aregloNumeros = new Array(10);
	let mayores = 0;
	let menores = 0;
    let ceros = 0;
    let n = 10;
    document.write('<table border = "n" >');
    document.write('<tr><th colspan=10>Numeros en el arreglo</th></tr>');

    document.write('<tr>');
    for (let i = 0; i<n; i++){
        aregloNumeros[i] = Math.round(Math.random()*10-5);
        document.write('<th>'+aregloNumeros[i]+'</th>');
        if(aregloNumeros[i] >0){
            mayores++;
        }else if(aregloNumeros[i] == 0){
            ceros++;
        }else{
            menores++;
        }
    }
    document.write('</tr>');
    document.write('</table>');
    document.write("Mayores:"+mayores+'<br>');
    document.write("Menores:"+menores+'<br>');
    document.write("Ceros:"+ceros+'<br>');
    document.write(endTab);
}

function promedios (){
    nombre = "promedios()";
    openDoc(nombre);
    let matris = [];
	let aregloNumeros = new Array(10);
    let promedio = 0;
    let rango = 1000 ;
    let m = 10;
    let n = 10;
    document.write('<table border = 11 class="tablaAct">');
    document.write('<tr><th colspan=10> Numeros en el arreglo </th> <th> Promedio </th> </tr>');
    for(let j=0;j<m;j++){
        document.write('<tr>');
        for (let i = 0; i<n; i++){
            aregloNumeros[i] = Math.round(Math.random()*rango-(rango/2));
            document.write('<th>'+aregloNumeros[i]+'</th>');
            promedio += aregloNumeros[i];
        }
        promedio = promedio/n;
        document.write('<th>'+promedio+'</th>');
        promedio = 0;
        document.write('</tr>');

    }

    document.write('</table>');
    document.write(endTab);
}

function inverso (){
    nombre = "inverso()";
    openDoc(nombre);
    let temporal=0;
    let inicialnumber = 0;
    let rango = 10000 ;
    inicialnumber  = Math.round(Math.random()*rango);
    document.write("Numero inicial: " + inicialnumber);
    while (inicialnumber != 0){
        temporal =temporal*10 + (inicialnumber%10);
        inicialnumber = (inicialnumber - (inicialnumber%10))/10;
    }
    inicialnumber = temporal;
    document.write('<br> Numero inverso: ' + inicialnumber );
    document.write(endTab);
}

function PrismaRect(alto, ancho,profundidad) {
    this.alto = alto;
    this.ancho = ancho;
    this.profundidad =profundidad;
    this.areas = [];
    this.vol = 0;
    this.calcAreas = function (){
        this.areas[0] = (this.alto * this.ancho);
        this.areas[1] = (this.alto * this.ancho);
        this.areas[2] = (this.alto * this.profundidad);
        this.areas[3] = (this.alto * this.profundidad);
        this.areas[4] = (this.ancho * this.profundidad);
        this.areas[5] = (this.ancho * this.profundidad);
    };
    this.calcVolumen = function (){
        this.vol = (this.alto * this.ancho* this.profundidad);
    };
    this.printData = function (){
        this.calcAreas();
        this.calcVolumen();

        document.write("<h3>Dimensiones:</h3>");
        document.write("<p>Alto: "+ this.alto +"</p>") ;
        document.write("<p>Ancho: "+ this.ancho +"</p>") ;
        document.write("<p>Profundidad: "+ this.profundidad +"</p>");

        document.write("<p><h3>Volumen:</h3>"+ this.vol +"</p>") ;

        document.write("<p><h3>Areas:</h3></p>");
        document.write("<p>Cara frente    -> alto por ancho:        "+this.areas[0]+"</p>") ;
        document.write("<p>Cara atras     -> alto por ancho:        "+this.areas[1]+"</p>") ;
        document.write("<p>Cara lado izq  -> alto por profundidad:  "+this.areas[2]+"</p>") ;
        document.write("<p>Cara lado der  -> alto por profundidad:  "+this.areas[3]+"</p>") ;
        document.write("<p>Base Inferior  -> ancho por profundidad: "+this.areas[4]+"</p>") ;
        document.write("<p>Cara Superior  -> ancho por profundidad: "+this.areas[5]+"</p>") ;
    };  
  }

  function areaVolPrismRect(){
    nombre = "areaVolPrismRect()";
    openDoc(nombre);
    let al = prompt("Altura");
    let an = prompt("Ancho");
    let pr = prompt("Profundidad");

    let rec = new PrismaRect(al,an,pr);
    
    rec.printData();
    document.write(endTab);
}