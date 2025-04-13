import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import eventRouts from "./routes/event.js";
import checklistRoutes from "./routes/checklist.js"
import authRoutes from "./routes/auth.js";
import auth from "./middleware/auth.js";

config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
