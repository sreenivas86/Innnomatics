const mongoose= require('mongoose');


const recipeSchema=mongoose.Schema({
    name:{
        type :String,
        required:true,
        unique:true
    },
    ingredients:{
        type:String,
        required:true
    }
    , instructions:{
        type:String 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});

module.exports=mongoose.model('Recipe',recipeSchema);