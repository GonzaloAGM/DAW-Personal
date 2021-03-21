console.log("hola desde node!");

const file_system = require('fs');

file_system.writeFileSync('carros.txt', 'Ferrari');

const arreglo = [3522, 1998, 2020, 4500, 5555, 6666, 34, 20, 2, 134, 10];

for (let item of arreglo) {
    setTimeout( () => {
      console.log(item);  
    }, item);
}

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log('Honda');
    console.log('Hola desde el servidor web');
    console.log(request.url);
    console.log('Prius C');

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>');
    response.write('<h1>Hola desde el servidor web</h1>');
    response.write('</body></html>');
    response.end();
});

server.listen(3000);