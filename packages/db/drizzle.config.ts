import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const nonPoolingUrl = process.env.POSTGRES_URL!.replace(":6543", ":5432");

export default {
  schema: "./schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: nonPoolingUrl },
  tablesFilter: ["t3turbo_*"],
} satisfies Config;
