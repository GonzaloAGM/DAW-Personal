const fs = require('fs');
const path = require('path');

const requestHandler = (req, res) => {
    let specificPath = "";
    let notFound = false;
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

    console.log(`File path: ${filePath}`);
    console.log(`Content-Type: ${contentType}`);
    console.log(req.url);

    res.writeHead(200, {'Content-Type': contentType});

    const readStream = fs.createReadStream(filePath);

    //Aqui se hace el manejo de rutas
    if(req.url === "/"){
        console.log("en home");
    }else if(req.url === "/RegPssw"){
        console.log("Reg pass");
    }else if(req.url === "/ValidaPssw"){
        console.log("val pass");
    }else if(req.url === "/Recursos"){
        console.log("Recursos");
    }else if(notFound === true){
        console.log("404");
    }

    readStream.pipe(res);
};

module.exports = requestHandler;