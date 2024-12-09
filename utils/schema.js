import { json, pgTable, PgVarchar, serial, text,varchar } from 'drizzle-orm/pg-core';
export const User = pgTable('users', {
  id: serial('id').primaryKey(),
  jsonResponse: text('jsonResponse').notNull(),
  jobPosition: varchar('jobPosition').notNull(),
  jobDesc: varchar('jobDesc').notNull(),
  jobExperience: varchar('jobExperience').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt'),
  userId: varchar('userId').notNull(),
});