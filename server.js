import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbConfig.js";
import userRoutes from "./route/user.route.js";
import blogRoutes from "./route/blog.route.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; 

dotenv.config();

dbConnect();

const app = express();
const PORT = process.env.PORT || 4000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, 
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on the ${PORT}`);
});
