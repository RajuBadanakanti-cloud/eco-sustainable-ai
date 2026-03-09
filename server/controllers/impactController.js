import Product from "../model/Product.js"
import generateImpactReport from "../services/impactService.js"
import AppError from "../utils/AppError.js"
import mongoose from "mongoose"

export const generateImpact  = async (req, res, next) => {
    try{
        const {productId, quantity} = req.body
        if(!productId || !quantity)return next(new AppError("Please Provide ProductId and quantity", 400))

        if(quantity <= 0)return next(new AppError("Quantity must be greterthen 0", 400))

        if(!mongoose.Types.ObjectId.isValid(productId)){
            return next(new AppError("Invalid Product",400))
        }

        const product = await Product.findById(productId)
        if(!product)return next(new AppError("Product not found", 404))

            // impact report from service >>
            const impact = generateImpactReport(product, Number(quantity))

            res.status(200).json({
                success:true,
                message:"Product Impact",
                product:product.product_name,
                quantity,
                impact
            })

    }catch(err){
        next(err)
    }
}