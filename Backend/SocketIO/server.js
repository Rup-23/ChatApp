import { Server } from "socket.io"
import http from "http"
import express from "express"


const app = express()

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"],
    },
})

// Realtime message code goes here
export const getReceiverSocketId = (receiverId)=>{
    return users[receiverId]
}


const users = {}

// Used to listen server side events.
io.on("connection", (socket) => {
    console.log("A user connected", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId) {
        users[userId] = socket.id
        console.log("Hello", users);
    }

    // used to send the events to all connected users
    io.emit("getOnlineUsers", Object.keys(users));

    // Used to listen client side events emitted by server side (server & client)
    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users));
    })
})


export { app, io, server };