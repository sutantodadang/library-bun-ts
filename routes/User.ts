import { Router } from "express";
import { IUserHandler, UserHandler } from "../handlers/User.js";

export class UserRoutes {
  router: Router;
  userHandler: IUserHandler;

  constructor() {
    this.router = Router();
    this.userHandler = new UserHandler();
  }

  routes() {
    this.router.get("/user/register", this.userHandler.Register);
  }
}
