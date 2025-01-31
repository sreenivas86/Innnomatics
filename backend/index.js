const express =require('express');
const { default: mongoose } = require('mongoose');
const dotenv=require('dotenv').config();

mongoose.connect(process.env.DB_URL).then(()=>{console.log('connected')}).catch((err)=>{console.log(err)})
const app=express();
app.use(express.json());
app.use('/user',require('./routes/userRoutes'))
app.use('/recipe',require('./routes/userRoutes'))

app.get('/',(req,res)=>{
    res.send("this is our app");
})
app.listen("4000",()=>{
    console.log('Server started')
})