import { Request, Response, Router } from "express";
import { IUserServices, UserServices } from "../services/User.js";

export interface IUserHandler {
  Register: (req: Request, res: Response) => void;
}

export class UserHandler implements IUserHandler {
  userService: IUserServices;

  constructor() {
    this.userService = new UserServices();
  }

  Register = async (req: Request, res: Response) => {
    try {
      const result = await this.userService.RegisterUser(req.body);
      return res.status(201).json(result);
    } catch (error) {}
  };
}
