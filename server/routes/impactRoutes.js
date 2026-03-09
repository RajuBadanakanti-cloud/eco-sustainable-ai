import express from "express"
import { generateImpact } from "../controllers/impactController.js"

const router = express.Router()

router.post("/", generateImpact)

export default router