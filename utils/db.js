import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema.js';
const sql = neon(process.env.NEON_DATABASE_UR);
export const db=drizzle(sql,{schema});