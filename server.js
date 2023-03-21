import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { sessionStore } from "./config/db.js";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import priceRoutes from "./routes/priceRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { allowCrossDomain } from "./middleware/cors.js";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(allowCrossDomain);
app.use(
  session({
    key: "sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      sameSite: "none",
      httpOnly: true,
      secure: false,
      maxAge: 1000000000, // 11 days
    },
    store: sessionStore, // mysql
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(priceRoutes);
app.use(userRoutes);

app.disable("X-Powered-By:");
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
