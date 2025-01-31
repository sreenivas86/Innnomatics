import React, { useState } from "react";

function AddRecipe(){
    const [name,setName]=useState('');
    const [ingrediants,setingrediats]=useState('');
    const [instruction,setInstructions]=useState('');
    return (
        <div>
            <h1>Add recipe</h1>
            <input type="text" id="name" className="name" onChange={(e)=>{setName(e.target)}}/>
            <input type="text" id="ingrediants" onChange={(e)=>{setingrediats(e.target)}} />
            <input type="text" id="instruction" onChange={(e)=>{setInstructions(e.target)}}/>

        </div>
    );
}