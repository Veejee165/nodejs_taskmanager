const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("../starter/db/connect")
require("dotenv").config()

app.use(express.json())

app.get("/hello",(req,res)=>{
res.send("Task manager")
})

app.use("/api/v1/tasks",tasks)

const port = 3000
const start = async ()=>{
    try{
await connectDB(process.env.URI)

app.listen(port,console.log("server is listening on port 3000"))
    }
    catch(e){console.log(e)}
}

start()
