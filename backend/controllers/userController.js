const User =require('../models/User');

const bcrypt=require('bcrypt');


const register= async (req,res)=>{
    const {email,password}=req.body;
    try {
        const password1=bcrypt.hash(password,10);
        const user= await User.create({
            email,
            password:password1
        })
       return res.status(201).send("Registered successfully !")
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal server Error")
        
    }
    
}
const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.fidnOne({email});
        if(user && bcrypt.compare(password,user.password)){
            return res.status(200).json(user);
        }
        return res.status(404).send('user not found');
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal server error !")
    }
}

module.exports={register, login};