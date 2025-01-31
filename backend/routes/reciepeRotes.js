const express=require('express');
const router =express.Router();
const {deleteRecipe,addRecipe,getrecipes}=require('../controllers/recipeController')

router.post('/add',addRecipe);
router.get('/get-all',getrecipes)
router.delete('/delete',deleteRecipe);

module.exports=router;
