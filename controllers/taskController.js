import Task from "../models/task.js"

const createTask =async(req, res)=>{
    try {
        const {title, description, status,priority, createdAt   }=req.body
        const task=new Task({
            title,
            description,
            status,
            priority,
            createdAt,



        })
     await  task.save()
     res.status(200).json({
        message: 'Task saved successfully',
     })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}


const getTask=async (req, res) => {
    const tasks=await Task.find();
    res.json(tasks)
}

const updateTask=async (req, res) => {
    try {
        const taskId=req.params.id;
        const updatedTask=await Task.findByIdAndUpdate(taskId, req.body, {new: true});
        res.json(updatedTask)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 }




const deleteTask=async (req, res) => {
    try {
        const taskId=req.params.id;
        await Task.findByIdAndDelete(taskId);
        res.json({message: "Task deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}


export {
    createTask,
    getTask,
    updateTask,
    deleteTask,
 
}