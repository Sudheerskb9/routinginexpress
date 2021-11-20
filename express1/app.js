const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello from the server");
});
app.get("/about",(req,res)=>{
res.send("hello from the about");
});
app.get("/contact",(req,res)=>{
    res.send("Welcome to the contact");
});
app.get("/temp",(req,res)=>{
res.send("you are on the temp");
});
app.listen(8000,()=>{
    console.log("listing the port at 8000");
});