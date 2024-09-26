const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-commerce")


// const mysql= require('mysql');
// const con= mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:"",
//     database:"node"
// });
// con.connect((err)=>{
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log("connected");
//     }
// });
// module.exports=con;