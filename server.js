import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import priceRoutes from "./routes/priceRoutes.js";
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(priceRoutes);

app.disable("X-Powered-By:");
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
