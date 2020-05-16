// Dependencies
// =============================================================
var express = require("express");
var socket = require("socket.io");

// Sets up the Express App
// =============================================================
var app = express();
var server = app.listen(8000, function(){
    console.log('listening to requests on port 8000');
})

// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)
});