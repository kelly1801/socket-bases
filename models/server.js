import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server as socketServer } from "socket.io";
import { socketController } from "../sockets/controllers/controller.js";
export class Server {
  constructor() {
    this.app    = express();
    this.port   = process.env.PORT || 3000;
    this.paths  = {};
    this.server = createServer(this.app);
    this.io     = new socketServer(this.server);
    this.middlewares();
    this.routes();
// sockets events
    this.sockets()
  }

  middlewares() {
    // cors
    this.app.use(cors());
    // public folder
    this.app.use(express.static("public"));
  }

  routes() {}
  sockets() {
    this.io.on('connection', socketController)
  }
  listenPort() {
    this.server.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  }
}
