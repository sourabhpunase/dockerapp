const express= require('express')

const app= express();

app.get ("/",(req,res)=>{
    res.json({message:"Hello from Docker"});

})
app.listen(3200,()=>console.log("server running at 3200"))