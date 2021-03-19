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

    console.log(`File path: ${filePath}`);
    console.log(`Content-Type: ${contentType}`);
    console.log(req.url);

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



//Ejercicio 1 - Arreglo de números
/*
function promedio(numeros){
  let prom=0;
  for(let n of numeros){
      prom = prom + n;
  }
  return prom/numeros.length;
}
const arregloNumeros = [1,2,3,4,5,6,7,8,10,346];
console.log(promedio(arregloNumeros));

//Ejercicio 2
function escribeTxt(texto){
  const file_system = require('fs');
  file_system.writeFileSync('lab9.txt', texto);
}
const unString = 'Ejercio2: Escribiendo un string en un archivo de texto';
escribeTxt(unString);
console.log('String escrito en lab.txt');

//Ejercicio 3
function mayor(numeross){
  let numMayor=0;
  for (let n of numeross){
      numMayor = Math.max(n,numMayor);
  }
  return numMayor;
  
}
console.log(mayor(arregloNumeros));


//ejercicio 4: pequeña aplicación web

const http = require('http');
const server = http.createServer( (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><meta charset="utf-8"><title>Laboratorio9</title></head><body>');
  response.write('<h1>Mis mascotas</h1>');
  response.write('<p>Tengo dos mascotas. Petunia y Queen.</p>');
  response.write('<h2>Petunia</h2>');
  response.write('<p>Petunia es mestiza (con genes de Rottweiler) y es la más noble y poderosa, está con nosotros desde que yo iba en secundaria y tuvo 11 cachorros hace algunos años. Los vecinos le tienen miedo pero conmigo es bien empalagosa.</p>');
  response.write('<h2>Queen Elizabeth</h2>'); 
  response.write('<p>Queen fue un regalo de mi hermano mayor a mi mamá. Se la dió con todo y nombre, y aunque a mi madre no le parecía la parte de "Elizabeth" (ya que así se llama una de mis primas), irónicamente es la única que ocupa el nombre completo cuando se enoja con ella.  Tiene apenas un año, es Bulldog, súper tragona y acariciable. Debe tener conflicto de identidad porque la llamamos por diferentes nombres, como: queena, gorda, gordita sabanera, demonio, baby, punky, aspiradora.</p>');
  response.write('<div>¿Qué mascota tienes tú?<input class="input" type="text" name="mascota"></div>');
  response.write('<a><img src="https://uploads-ssl.webflow.com/5c0923437b3820198bab7be0/5f50108002666e737c6e6817_Mascotas%20en%20condominios.jpg" alt="site logo"></a>');
  response.write('<footer>')
  response.write('<p><strong>Datos personales</strong><br>Sandra Tello Salinas<br>Matrícula A01703658<br>Correo sandratellosalinas@outlook.es</p>');
  response.write('<p>Editor utilizado <a href="https://visualstudio.microsoft.com/es/">Visual Studio Code</a></p>');
  response.write('</footer>');
  response.write('</body></html>');
  response.end();
});
server.listen(5010); */