import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import serverless from "serverless-http";
import eventRoutes from "./src/routes/event.js";
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

// Establish database connection *once* when server starts
connectToDB()
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection failed:", err));

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/checklists", checklistRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Serverless!");
});

export default serverless(app);