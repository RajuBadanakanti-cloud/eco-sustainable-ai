import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import helmet from "helmet"
import connectDB from "./config/db.js"
connectDB() // db connection
import productRoutes from "./routes/productRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import aiLogRoutes from "./routes/aiLogRoutes.js"
import impactRoutes from "./routes/impactRoutes.js"
import errorMiddleWare from "./middleware/errorMiddleware.js"

// -----------------------
const app = express()
app.use(helmet())
app.use(cors({
    origin: ["https://eco-sustainable-ai.vercel.app", "http://localhost:5173"], 
    credentials: true,
}))
app.use(express.json()) 
app.use("/api/products", productRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/aiLog", aiLogRoutes)
app.use("/api/impact", impactRoutes)
// ---------------------------------------------------- 
app.get("/", (req, res, next) => {
    res.send("<h1>Ai Integration (Groq)</h1>")
})

app.use(errorMiddleWare) // error handling middle ware

// -----------------------------------------------------
export default app 