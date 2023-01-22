import { Kysely } from "kysely";
import { Database, dbPostgres } from "../db/database.js";
import { User } from "../models/UserEntity.js";

export interface IUserRepository {
  InsertUser: (user: User) => Promise<string>;
}

export class UserRepository implements IUserRepository {
  db: Kysely<Database>;

  constructor() {
    this.db = dbPostgres;
  }

  InsertUser = async (user: User): Promise<string> => {
    const query = await this.db
      .insertInto("user")
      .values({
        email: user.email,
        password: user.password,
        user_name: user.user_name,
        address: user.address,
      })
      .returning("user_id")
      .executeTakeFirst();

    if (!query?.user_id) {
      return "";
    }

    return query?.user_id;
  };
}
