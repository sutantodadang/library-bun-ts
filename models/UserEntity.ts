import { Generated, ColumnType } from "kysely";

export interface User {
  user_id: Generated<string>;

  user_name: string;

  address: string | null;

  password: string;

  email: string;

  created_at: ColumnType<Date, string | undefined, never>;

  updated_at: ColumnType<Date, string | undefined, Date>;
}
