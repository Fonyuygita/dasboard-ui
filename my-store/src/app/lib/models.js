import mongoose from "mongoose";

// create user schema

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:23
    },

    email:{
type:String,
required:true,
unique:true,

    },
    password:{
        type:String,
        required:true,
    },

    img:{
        type:String
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

   

    isActive:{
        type:Boolean,
        default:true
    },

    phone:{
        type:String,
    },

    address:{
        type:String
    }

}, {timestamps:true})


const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        
    },
    desc:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    },

    img:{
        type:String
    },

    quantity:{
        type:Number,
        required:true,
        min:0
    },

    color:{
        type:String,
    },

    stock:{
        type:Number,
        required:true,
        min:0
    }

}, {timestamps:true})


export const Users=mongoose.models.User ||  mongoose.model("User", userSchema);
export const Products=mongoose.models.Product ||  mongoose.model("Product", productSchema);
