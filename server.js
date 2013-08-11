var io=require('socket.io');
var http=require('http');
http.globalAgent.maxSockets = 20;
http.Agent.maxSockets = 20;
var server = http.createServer().listen(
    8440);
var options = {
    transports: [
         'xhr-polling'
    ],
    'force new connection': true
};
io = io.listen(server,options);
var connections=0;

io.sockets.on('connection', function(socket) {
    connections++;

    console.log((connections) + " connected!");

});