import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("hello halalZabiha")
})

app.listen(8080,()=>{
    console.log("listening on port 8080")
})

