let lab = "Lab28";

exports.useHome = (request, response, next) => {
    let state = request.session.isLoggedIn === undefined ? false : true;
    response.render('lab28', {
        titulo: lab+"-GAGM-DAW & BD",
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
    let state = request.session.isLoggedIn === undefined ? false : true;
    response.render('Recursos', {
        titulo: lab+"-Recursos-GAGM-DAW & BD",
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
    let state = request.session.isLoggedIn === undefined ? false : true;
    response.render('Err404', {
        titulo: lab+"-404-GAGM-DAW & BD",
        logged : state,
        act1: "",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("404");
    response.status(404);
};
