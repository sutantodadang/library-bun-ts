import express, { Request, Response } from "express";
import { UserRoutes } from "./routes/User.js";

class Server {
  app = express();

  port = 7777;

  applyMiddleware() {
    this.app.use(express.json());
  }

  applyRoutes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "ok",
        timestamp: new Date(),
      });
    });
    this.app.use("/v1", new UserRoutes().routes);
  }

  start() {
    this.applyMiddleware();

    this.applyRoutes();

    this.app.listen(this.port, () =>
      console.log(`listening on port ${this.port}`)
    );
  }
}

const app = new Server();
app.start();
