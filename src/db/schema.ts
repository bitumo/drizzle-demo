import { sql } from 'drizzle-orm';
import { int, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
  status: text('status', { enum: ['active', 'suspended', 'deleted'] })
    .notNull()
    .default('active'),
  lastActiveAt: integer('last_active_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  createdAt: text('created_at')
    .notNull()
    .default(sql`(datetime('now', 'localtime'))`), // local timezone
  updatedAt: text('updated_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`), // UTC timezone
});
