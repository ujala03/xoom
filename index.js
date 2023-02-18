const app = required("express")();
const server = require("http").createServer(app);
const cors= require("cors");

const io = require("socket.io")(server,{});