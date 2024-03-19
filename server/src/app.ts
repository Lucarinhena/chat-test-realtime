import express from "express";
import { Server, createServer } from "http";
import { Server as Io } from "socket.io";

export default class App {
  public app: express.Application;
  public server: Server;
  private socketIo: Io;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.socketIo = new Io(this.server, {
      cors: {
        origin: "*",
      },
    });
    this.socketIo.on("connection", (socket) => {
      console.log("Usuário Conectado", socket.id);
      this.socketIo.sockets

      socket.on("disconnect", (reason) => {
        console.log("Usuário Desconectado", socket.id);
      });

      socket.on("set_username", (username) => {
        socket.data.username = username
      });

      socket.on("message", (text) => {
        this.socketIo.emit('receive_message', {
          text,
          authorId:socket.id,
          author: socket.data.username
        } )
      });
    });
  }
}
