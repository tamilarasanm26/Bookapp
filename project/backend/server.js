import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import DbCon from './utils/db.js'

dotenv.config()
const PORT = process.env.PORT || 3000
const app=express()


//mongo db
DbCon()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(PORT,() =>{
    console.log("server run on 4000");
})