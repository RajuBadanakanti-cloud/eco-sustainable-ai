import express from "express"
import { deleteProductById, getAllProducts } from "../controllers/productsController.js"

const routes = express.Router()

routes.route("/").get(getAllProducts)
routes.route("/:id").delete(deleteProductById)


export default routes