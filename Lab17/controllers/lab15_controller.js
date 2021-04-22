exports.useHome = (request, response, next) => {
    //filePath = path.join(__dirname,'..','views','lab14.html');
    //response.writeHead(200, {'Content-Type': contentType});
    //response.sendFile(filePath);
    response.render('lab15', {
        titulo: "Lab15-GAGM-DAW & BD",
        act1: "active",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("en home");
    response.status(200);
};

exports.useRecursos = (request, response, next) => {
    response.render('Recursos', {
        titulo: "Lab15-Recursos-GAGM-DAW & BD",
        act1: "",
        act2: "",
        act3: "",
        act4: "active",
    });
    console.log("Recursos");
    response.status(200);
};

exports.useNotFound = (request, response, next) => {
    response.render('Err404', {
        titulo: "Lab15-404-GAGM-DAW & BD",
        act1: "",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("404");
    response.status(404);
};
