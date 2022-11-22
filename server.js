const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);


server.listen(port);


  server.get('/deneme', function (req, res) {
    res.send('PRİCE impact');
});
console.log("Runnin listening port http://localhost:" + port);

server.use(router);