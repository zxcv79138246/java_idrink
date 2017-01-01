var jsonServer = require('json-server')
var bodyParser = require('body-parser')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()


server.use(middlewares)
//bodyParser

server.use('/api', router);

server.listen(9487, function () {
  console.log('JSON Server 9487 is running');
})