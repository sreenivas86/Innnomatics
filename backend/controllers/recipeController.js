const Recipe = require("../models/Recipe");


const addRecipe= async(req,res)=>{
    const {name,ingredients,instructions}=req.body;
    try {
        const recipe= await Recipe.create({
            name,
            ingredients,
            instructions,
            user:req.params.id
        })
        res.status(201).send('recipe added')
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internall sever error');
    }
}
//get all recipies users

const getrecipes=async (req,res)=>{
    try {
        const recipeis=await Recipe.find();
        res.status(200).json(recipeis)
    } catch (error) {
        console.log(error.message)
       return res.status(500).send("Internal server error");
    }
} 
const deleteRecipe=async (req,res)=>{
    try {
        const id=req.params.id;
        const recipe= await Recipe.findByIdAndDelete(id);
        return res.status(200).send('successfully deleted')

    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal error');
    }
}
module.exports={deleteRecipe,addRecipe,getrecipes}