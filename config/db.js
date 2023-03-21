import session from "express-session";
import MySQLStore from "express-mysql-session";
import dotenv from "dotenv";
dotenv.config();

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE,
};

const MySQLStoreClass = MySQLStore(session);

const sessionStore = new MySQLStoreClass(options);

export { sessionStore };
