import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    title:{
        type:"string",
        required:[true,"title is required"],
        trim:true,
        maxlength:[100, "task title can't exceed 100 characters"]

    },
    description:{
        type:"string",
        required:[true,"description is required"],
        trim:true,
        maxlength:[500, "description can't exceed 500 characters"],
    },
    status:{
        type:"string",
        enum:["pending", "complete", "in-progress"],
        default:"pending",
    },
    priority:{
        type:"string",
        enum:["low", "medium","high"  ],
        default:"low",
    },
    createdAt:{
        type:Date,
        default:Date.now //automatically set the creartion time
    },

})

const Task=mongoose.model("Task", taskSchema);
export default Task;