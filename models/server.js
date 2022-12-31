import express from "express";
import cors from "cors";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {};

  
    this.middlewares();
    this.routes();
  }





  middlewares() {
    // cors
    this.app.use(cors());
    // public folder
    this.app.use(express.static("public"));
 
  }

  routes() {}

  listenPort() {
    this.app.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  }
}
