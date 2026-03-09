import mongoose from "mongoose";
import Product from "../model/Product.js";
import AppError from "../utils/AppError.js";

// get All Products 

export const getAllProducts = async (req, res, next) => {
    try{
        const products = await Product.find().populate("AiLog")
        res.status(200).json({
            success:true,
            message:"All Your Products",
            results : products.length,
            products:products 
        })
    }catch(err){
        next(err)
    }
}


export const deleteProductById = async (req, res, next) => {
    try{
            const {id} = req.params
            if(!mongoose.Types.ObjectId.isValid(id)){
                return next(new AppError("Invalid Product", 400))
            }

            const product = await Product.findByIdAndDelete(id)
            if(!product)return next(new AppError("Product Not Found", 404))

            res.status(200).json({
                success:true,
                message:"Product is deleted",
                product:{
                    product_name:product.product_name,
                    description:product.description,
                    category:product.category,
                    sub_category:product.sub_category
                }
            })

    }catch(err){
        next(err)
    }
}