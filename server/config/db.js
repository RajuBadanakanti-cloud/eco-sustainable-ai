import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected Successfully")
    }catch(err){
        console.log("MongoDB connection Filed!")
        console.error(err)
        process.exit(1)
    }
}

export default connectDB