import mongoose from "mongoose";

const aiLogSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
        prompt:{
            type:String,
            trim:true,
            required:true
        },
        response:{
            type:Object,
            trim:true,
            required:true 
        }
}, {timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals:true}})



const AiLog = mongoose.model("AiLog", aiLogSchema)
export default AiLog