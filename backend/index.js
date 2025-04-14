import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import serverless from "serverless-http";
import eventRouts from "./src/routes/event.js";
import checklistRoutes from "./src/routes/checklist.js";
import authRoutes from "./src/routes/auth.js";
import { connectToDB } from "./src/utils/db.js";

config();

const app = express();

app.use(
  cors({
    origin: "https://packpall.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(json());

app.use(async (req, res, next) => {
  await connectToDB(); // Ensures DB is connected only once per cold start
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRouts);
app.use("/api/checklists", checklistRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Serverless!");
});

export default serverless(app);
