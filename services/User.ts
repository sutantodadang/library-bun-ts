import { User } from "../models/UserEntity.js";
import { IUserRepository, UserRepository } from "../repositories/User.js";

export interface IUserServices {
  RegisterUser: (user: User) => Promise<string>;
}

export class UserServices implements IUserServices {
  userRepo: IUserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  RegisterUser = async (user: User): Promise<string> => {
    const result = await this.userRepo.InsertUser(user);

    return result;
  };
}
