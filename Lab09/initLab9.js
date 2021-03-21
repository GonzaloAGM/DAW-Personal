/*
const numDeArticulos = () => {
    numDeArticulos.length = 0;
    for(let articulo of articulos){
        numDeArticulos.push(articulo[1]);
    }
}*/

//Ejercicio 1
function promedio(){
    let prom=0;
    //let arrNum = numDeArticulos();
    let arrNum = [5,8,9,4,4,9];
    for(let n of arrNum){
        prom = prom + n;
    }
    return prom/arrNum.length;
  }
  console.log("-----------------EL promedio de articulos seleccionado en la tienda es de " + promedio() + "-------------------");

let userMensage = "Hola, no funciono el mensaje como esperaba";

//Ejercicio 2
const mensajeArchivo = (texto) =>{
    //userMensage = window.prompt("Por favor ingrese un texto");
    const file_system = require('fs');
    file_system.writeFileSync('Lab09/lab9.txt', texto);
    console.log('------------------------------Mensaje en lab.txt------------------------------------------------');
}
mensajeArchivo(userMensage);

//Ejercicio3
function contador(){
    let n = 10;
	let aregloNumeros = new Array(n);
	let mayores = 0;
	let menores = 0;
    let ceros = 0;

    for (let i = 0; i<n; i++){
        aregloNumeros[i] = Math.round(Math.random()*10-5);
        if(aregloNumeros[i] >0)     mayores++; else 
        if(aregloNumeros[i] == 0)   ceros++;   else 
                                    menores++;
    }
    console.table(aregloNumeros);
    console.log("Mayores: "+mayores);
    console.log("Menores: "+menores);
    console.log("Ceros: "+ceros);
}

contador();

//Ejercicio 4
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        "./",
        req.url === "/" ? "lab9.html" : req.url
    );

    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //console.log(`File path: ${filePath}`);
    //console.log(`Content-Type: ${contentType}`);
    //console.log(req.url);

    res.writeHead(200, {'Content-Type': contentType});

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

server.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`Server listening at port ${port}...`);
    }
});