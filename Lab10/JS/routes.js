const fs = require('fs');
const path = require('path');
const file_system = require('fs');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'noLeasEsto'}];


const requestHandler = (req, res) => {
    let specificPath = "";
    let notFound = false;

    //Asignar filePath de donde recuperar el archivo html, lo que contenga dentro de él
    if(req.url === "/"){
        specificPath = "HTML/lab10.html";
    }else if(req.url === "/RegPssw"){
        specificPath = "HTML/RegPssw.html";
    }else if(req.url === "/ValidaPssw"){
        specificPath = "HTML/ValidaPssw.html";
    }else if(req.url === "/Recursos"){
        specificPath = "HTML/Recursos.html";
    }else{
        specificPath = req.url;
        notFound = true;
    }

    let filePath = path.join(
        __dirname,
        "../",
        specificPath
    );

    //Abre el archivo de la forma correcta
    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            notFound = false;
            break;
        case '.js':
            contentType = 'text/javascript';
            notFound = false;
            break;
        case '.json':
            contentType = 'application/json';
            notFound = false;
            break;
        case '.png':
            contentType = 'image/png';
            notFound = false;
            break;
        case '.jpg':
            contentType = 'image/jpg';
            notFound = false;
            break;
    }

    //console.log(`File path: ${filePath}`);
    //console.log(`Content-Type: ${contentType}`);
    //console.log(req.url);
    if(notFound === true){
        filePath = path.join(
            __dirname,
            "../",
            "HTML/Err404.html"
        );
    }
    
    //Aqui se hace el manejo de rutas
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
        console.log("en home");
        res.statusCode = 200;
        
    }
    else if(req.url === "/RegPssw" && req.method === "GET"){
        res.writeHead(200, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
        console.log("Reg pass");
        console.log(usuarios);
        res.statusCode = 200;

    }
    else if(req.url === "/RegPssw" && req.method === "POST"){
        const datos = [];
          req.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
          });
          return req.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            //console.log(datos_completos);
            const username = datos_completos.split('=')[1].split('&')[0];
            const pass = datos_completos.split('=')[2].split('&')[0];
            usuarios.push({nombreUsuario: username, contrasena: pass});
            let user = "";
            user = "nombreUsuario: '" + username + "', contrasena: '" + pass + "\n";
            file_system.writeFileSync('Lab10/login.txt', user, { 
                encoding: "utf8", 
                flag: "a+"
              });
            //console.log(usuarios);
            res.statusCode = 302;
            res.setHeader('Location', "/");
            res.end();
          });

    }
    else if(req.url === "/ValidaPssw" && req.method === "GET"){
        res.writeHead(200, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
        console.log("val pass");
        console.log(usuarios);
        res.statusCode = 200;

    }
    else if(req.url === "/ValidaPssw" && req.method === "POST"){
        const datos = [];
          req.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
          });
          return req.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            //console.log(datos_completos);
            const username = datos_completos.split('=')[1].split('&')[0];
            const pass = datos_completos.split('=')[2].split('&')[0];
            const data = file_system.readFileSync('Lab10/login.txt');
            if(data.includes("nombreUsuario: '"+ username +"', contrasena: '"+ pass)){
                console.log("Acceso concedido");
                res.statusCode = 302;
            }else{
                console.log("Acceso denegado");
                res.statusCode = 302;
            }
            res.setHeader('Location', "/");
            res.end();
          });

    }
    else if(req.url === "/Recursos"){
        res.writeHead(200, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        console.log("Recursos");
        res.statusCode = 200;
        readStream.pipe(res);

    }
    else if(notFound === true){
        res.writeHead(404, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        console.log("404");
        readStream.pipe(res);

    }
    else{
        res.writeHead(200, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

    }
};

module.exports = requestHandler;