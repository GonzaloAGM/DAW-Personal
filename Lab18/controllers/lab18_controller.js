exports.useHome = (request, response, next) => {
    //filePath = path.join(__dirname,'..','views','lab14.html');
    //response.writeHead(200, {'Content-Type': contentType});
    //response.sendFile(filePath);
    let state = request.session.sesionLoginUser === undefined ? false : true;
    response.render('lab18', {
        titulo: "Lab17-GAGM-DAW & BD",
        logged : state,
        act1: "active",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("en home");
    response.status(200);
};

exports.useRecursos = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    response.render('Recursos', {
        titulo: "Lab17-Recursos-GAGM-DAW & BD",
        logged : state,
        act1: "",
        act2: "",
        act3: "",
        act4: "active",
    });
    console.log("Recursos");
    response.status(200);
};

exports.useNotFound = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    response.render('Err404', {
        titulo: "Lab17-404-GAGM-DAW & BD",
        logged : state,
        act1: "",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("404");
    response.status(404);
};
