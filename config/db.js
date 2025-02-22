import mongoose from "mongoose";


export const connectDB = async () => {
    try {

        const connections = await mongoose.connect("mongodb://localhost:27017/taskManagerDB");
    console.log(`MongoDB connected: ${connections.connection.host}`);
} catch (error) {
        console.log(`MongoDB connection error: ${error}`);
    }
   
}