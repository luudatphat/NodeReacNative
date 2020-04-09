var express     = require("express");
var path        = require('path');
var dotenv      = require('dotenv').config();
var webpush     = require('web-push');
var bodyPares   = require('body-parser');
// var mysql       = require('mysql');

// Cách lấy key của web push
// let vapiKeys = webpush.generateVAPIDKeys();
// console.log(vapiKeys); 
var app     = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

// khai báo sử dụng  view ejs, mục view đặt ở /views
app.set("view engine", "ejs");
app.set("views", "./views"); 
app.use(express.static(path.join(__dirname, 'public'))); // Chuyển hướng thư mục 

// xuất ra kiểu json
app.use(bodyPares.urlencoded({ extended: true }))
app.use(bodyPares.json())

io.on("connection", function(socket){
    console.log('co nguoi dang ket noi' + socket.id);

    // socket.on("Client-send-data", function(data){
        // console.log(data);
        // io.emit('update')
        // trả lại tín hiệu cho tất cả mọi người
        // io.sockets.emit("Server-send-data", data+"888");

        // Gửi lại cho người nhấn
        // socket.emit("Server-send-data", data+"888");

        //gửi cho những người xung quanh
        // socket.broadcast.emit("Server-send-data", data+"888");

    // })
    socket.on("Client-send-data", function(data){
        console.log(data);
        io.emit('update')
    })

    socket.on("client-send", function(data){
        console.log(data);
        // io.emit('update')
    })
    // socket.on("Client-send-data", () =>io.emit('udapte'))
});



// Kết nối quá route
let routes = require(path.join(__dirname, 'api/routes'))
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

server.listen(process.env.POST);
console.log('Get connet' + process.env.POST);