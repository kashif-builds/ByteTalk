// // This is our Node server which will handle socket IO connection
// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
const cors = require('cors');
// const io = require('socket.io');



const io = require('socket.io')(8000, {
    cors: {
        origin: "*"
    }
});

const users = {};
io.on('connection', socket => {
    socket.on('newuserjoined', name=>{
        console.log('New User', name);
        users[socket.id] = name;
        console.log(users);
        socket.broadcast.emit('user-joined', name);
    })
    socket.on('sendmessage', message => {
        console.log(message);
        socket.broadcast.emit('chat-message', message);
    })

    
    socket.on('userMessage', (message)=>{
        socket.broadcast.emit('message', message);
    });
    socket.on('disconnect', ()=>{
        socket.broadcast.emit('userdisconnected', user = users[socket.id]);
        delete users[socket.id];
    })
});












    /*Express
    http.listen(8000, function () {
        console.log("The server started succesfully!") 
    }) */
