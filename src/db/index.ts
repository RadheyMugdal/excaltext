import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { neon } from "@neondatabase/serverless";

const sql = neon(
  "postgresql://neondb_owner:eqGsI4k6mXFi@ep-withered-butterfly-a5j1eutn-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require?connect_timeout=20"
);

export const db = drizzle(sql, { schema });
