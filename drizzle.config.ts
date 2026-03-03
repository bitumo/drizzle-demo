import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './migrations', // migration files will be created here
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
});
