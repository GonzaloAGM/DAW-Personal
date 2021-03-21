const fs = require('fs');
const { url } = require('inspector');
const path = require('path');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
    let specificPath = "";
    let notFound = false;

    if(req.url === "/"){
        specificPath = "lab10.html";
    }else if(req.url === "/RegPssw"){
        specificPath = "RegPssw.html";
    }else if(req.url === "/ValidaPssw"){
        specificPath = "ValidaPssw.html";
    }else if(req.url === "/Recursos"){
        specificPath = "Recursos.html";
    }else{
        notFound = true;
        specificPath = re.url;
    }

    let filePath = path.join(
        __dirname,
        "/HTML",
        specificPath
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
};

server.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`Server listening at port ${port}...`);
    }
});

module.exports = requestHandler;