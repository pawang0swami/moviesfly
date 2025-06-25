const Data =require ("../db/data")
const Users1 = require("../db/users");
require("../db/connect");
const cors = require("cors");

const express= require('express')
const app = express()

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.post ("/singup",async(req, resp)=>{
let user2 = new Users1(req.body);
  let result = await user2.save();
  // result = result.toObject();
 console.log(result);
  resp.send(result);
  // delete result.password;
})
app.get("/data",async(req,resp)=>{
   let r= await Data.find()
    resp.send(r)
})

app.post("/data",async(req,resp)=>{
  let d=new Data(req.body)
  let d1=await d.save()
  resp.send(d1)
 console.log(d1);

})

app.post("/login",async(req,resp)=>{
  // let d= await Users1.find()
 
  let user = await Users1.findOne(req.body).select("password");
   resp.send(user)
})
    



app. listen (4010,()=>{
    console.log("ok")
})