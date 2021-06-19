import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test'  : '.env.development',
});

const serverPort = process.env.SERVER_PORT
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbSchema = process.env.DB_SCHEMA
const dbDialect = process.env.DB_DIALECT
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

export const config = {
  serverPort,
  dbHost,
  dbPort: parseInt(dbPort as string),
  dbSchema,
  dbDialect,
  dbUser,
  dbPassword
}