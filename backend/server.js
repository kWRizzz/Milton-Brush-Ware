const express =require("express")
const cookieparser= require("cookie-parser")
const cors= require("cors")
const dotenv= require("dotenv")

dotenv.config()

const app= express()
const PORT=process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.use(cors())

app.listen(prompt,()=>{
    console.log("Server on");
})