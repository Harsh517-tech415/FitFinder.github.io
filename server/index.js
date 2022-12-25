const mysql=require('mysql2')
const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const app=express()
app.use(express.json())
app.use(cors(
    {
        origin:['http://localhost:3000'],
        methods:['GET','POST'],
        credentials:true
    }
    ))
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(session({
        key:"userid",
        secret:'mlpknobjivuhcgyxtfzdresawq',
        saveUninitialized:false,
        cookie:{
            expires:60*60*24,
        }
    }))
    
    const port =5500;
    const db=mysql.createConnection
({
    user:"root",
    host:"localhost",
    password:'25332',
    database:"Wealthapp",
    port:5500
}) 

app.post('/register',(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;
    db.query("select * from Wealthapp where Username=?",[username],
    (err,result)=>
    {
     if(err)
     {res.send("Username already taken")}    
    else
    {db.query("insert into Wealthapp(Username,password) values(?,?)",[username,password],
    (err,result)=>{
        res.send("Username registered")

    })
    }
    })
    
})

app.get('/login',(req,res)=>{
    if(req.session.user)
    {
        res.send({loggedIn:true,user:req.session.user})
    }
    else
    {
        res.send({loggedIn:false})
    }
})
app.post('/login',(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;
   if(username.length>0 && password.length>0){
    db.query("select * from Wealthapp WHERE Username=?",[username],
    (err,result)=>{
        if(err)
        {
            res.send('Username not found please Register your account')
        }
        else
        {
            db.query("select * from Wealthapp where Password=?",[password],
            (err,result)=>
            {
                if(err)
                {
                    res.send("Username or Password is incorrect")
                }
                else 
                {
                    req.session.user=[username,password]
                    res.send("Successfully Logined")
                }

            })
        }
    })}
    else {
        res.send("Please enter username and password")
    }
})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log("running")}
    })
