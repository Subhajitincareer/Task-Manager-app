import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const  userSchema =new mongoose.Schema(
    {
        name:{
            type:"string",
            required:true,
        },
        email:{
            type:"string",
            required:[true, "password is required"],
            unique:true,
      
        },
        password:{
            type:"string",
            required:true,
            minlength:[6,"password must be at least 6 characters"]

        }

    }
);

userSchema.pre(
    'save', async  function (next)  {
        if (this.isModified("password")){
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    }

)
const User=mongoose.model("User", userSchema)
export default User;