import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import eventRouts from "./src/routes/event.js";
import checklistRoutes from "./src/routes/checklist.js"
import authRoutes from "./src/routes/auth.js";
import serverless from "serverless-http";

config()
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(
  {
    origin: "https://packpall-9113dw2d8-smitgajera10s-projects.vercel.app", // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true // if you're sending cookies or authorization headers
  }
));
app.use(json());
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRouts);
app.use("/api/checklists", checklistRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


export default serverless(app);