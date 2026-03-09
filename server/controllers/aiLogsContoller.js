import AiLog from "../model/AiLog.js";
import AppError from "../utils/AppError.js";
import mongoose from "mongoose";


export const getAllAiLogs = async (req, res, next) => {
    try{
        const aiLogs = await AiLog.find()
        res.status(200).json({
            message:"All AiLogs",
            result:aiLogs.length,
            data:aiLogs
        })
    }catch(err){
        next(err)
    }
}


export const getAiLogById = async (req, res, next) => {
    try{
        const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return next(new AppError("Invalid AiLog", 400))
        }

        const aiLog = await AiLog.findById(id).populate("productId")
        if(!aiLog)return next(new AppError("This AiLog Not Found", 404))

        res.status(200).json({
            success:true,
            message:"selected Ai Log",
            data:aiLog
        })
    }catch(err){
        next(err)
    }
}


export const deleteAiLogById = async (req, res, next) => {
    try{

        const {id} = req.params
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return next(new AppError("Invalid AiLog", 400))
        }
        
        const aiLog = await AiLog.findByIdAndDelete(id)
        if(!aiLog)return next(new AppError("This AiLog Not Found", 404))

        res.status(200).json({
            success:true,
            message:"selected AiLog Deleted",
            data:aiLog
        })


    }catch(err){
        next(err)
    }
}



