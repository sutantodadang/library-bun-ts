import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { User } from "../models/UserEntity.js";

export interface Database {
  user: User;
}

export const dbPostgres = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: "localhost",
      database: "library-bun-express",
      password: "postgres",
      user: "postgres",
    }),
  }),
});
