import express from "express"
import { deleteAiLogById, getAiLogById, getAllAiLogs } from "../controllers/aiLogsContoller.js"

const routes = express.Router()

routes.route("/").get(getAllAiLogs)
routes.route("/:id").get(getAiLogById)
routes.route("/:id").delete(deleteAiLogById)

export default routes