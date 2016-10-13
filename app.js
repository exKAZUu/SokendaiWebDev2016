var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic('static'));
app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
