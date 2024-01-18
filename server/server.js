/**
 *  Server entry-point
 *  @author Gaurav Verma
 *  @description Listens for WS connections
 */

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// allowing requests from cross origin
app.use(cors());

// Event Listner for incoming WS Connections 
io.on('connection', (socket) => {
    // console.log('Client connected');

    socket.on('login', (data) => {
        if(validateToken(data.token)) {
            console.log('Logged in');
            socket.emit('redirect', '/dashboard');
        } else {
            socket.emit('redirect','/404');
        }
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });

});

// Pseudo Auth validator
const validateToken = (token) => {
    if(token._value === 'admin') {
        return true;
    }
    return false;
}

// Configuring server to listen on port 3000 or env port.
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on PORT ${3000}`);
})

