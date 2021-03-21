const http = require('http');

const requestHandler = require('./routes');

const port = process.env.PORT || 3000;

const server = http.createServer( requestHandler );

server.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`Server listening at port ${port}...`);
    }
});