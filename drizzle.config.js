import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url:'postgresql://users_owner:U6jk9SKhvOmd@ep-noisy-field-a5vfdef6.us-east-2.aws.neon.tech/users?sslmode=require',
  },
});
