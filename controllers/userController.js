import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const signUp=async(req, res)=>{
    try {
         const {name, email,password}=req.body
         const existUser=await User.findOne({email});
         if(existUser){
             return res.status(400).json({message: "User already exists"})
    
         }
         const user=User({
            name,
            email,
            password,
         });
        await user.save();
        res.status(200).json({
            message:"user created successfully"
        })
    } catch (error) {
        res.status(500).json({
            Message: "user created failed",
            error:error.message,
        })
    }
}
const Loging=async (req,res) => {
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found"})
        }
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token=jwt.sign({id:user.id}, "namobharat12345", {expiresIn :"1h"});
        res.json ({ message: "login success", token})
    } catch (error) {
        res.status(500).json({ 
            message: "login failed",
            error: error.message,
        })
    }
}

export {signUp, Loging };