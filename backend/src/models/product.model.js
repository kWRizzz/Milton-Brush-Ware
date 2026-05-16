const mongoose = require("mongoose")

const userProductSchema= new mongoose.Schema({
    product:[
        {
            type:String,
            required:true
        }
    ],
    price:{
        type:Number,
        required:true,
        min:0
    },
    discount:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

module.exports=mongoose.model("product",userProductSchema)