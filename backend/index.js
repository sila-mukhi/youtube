const express= require ('express');
const cors=require("cors");
require('./db/config');
const User=require("./db/user");
const app=express();  
app.use(express.json());  //middleware
app.use(cors()); 
// app.post("/register",(req,res)=>{
//     res.send(req.body)
// }) ///used to acess data from postman

app.post("/register",async (req,res)=>{
    let user =new User(req.body); 
    let result=await user.save();
    result=result.toObject();
    delete result.password
    res.send(result)

}) 

app.post("/login", async(req,resp)=>{
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user= await User.findOne(req.body).select("-password");
    if(user){
        resp.send(user)
    }
    else{
        resp.send({result:"No User Found"})
    }
    }
    else{
        resp.send({result:"No User Found"})
    }
    
   
})


app.listen(5000);




