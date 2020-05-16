// Dependencies
// =============================================================
let express = require("express");
let socket = require("socket.io");

// Sets up the Express App
// =============================================================
let app = express();
let server = app.listen(8000, function(){
    console.log('listening to requests on port 8000');
})


//Static files
app.use(express.static('public'));

//Socket setup
let io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)
});