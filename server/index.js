const mysql=require('mysql2')
const express=require('express')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const port =5500;




const db=mysql.createConnection
({
    user:"root",
    host:"localhost",
    password:'25332',
    database:"WealthApp"
}) 

app.post('/register',(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;
    db.query("select * from WealthApp where Username=?",[username],
    (err,result)=>
    {
     if(err)
     {res.send("Username already taken")}    
    else
    {db.query("insert into WealthApp(Username,password) values(?,?)",[username,password],
    (err,result)=>{
        res.send("Username registered")

    })
    }
    })
    
})
app.post('/login',(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;
    db.query("select * from WealthApp WHERE Username=?",[username],
    (err,result)=>{
        if(err)
        {
            res.send('Username not found please Register your account')
        }
        else 
        {
            db.query("select * from WealthApp where Password=?",[password],
            (err,result)=>
            {
                if(err)
                {
                    res.send("Username or Password is incorrect")
                }
                else 
                {
                    res.send("Successfully Logined")
                }

            })
        }
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log("running")}
    })
