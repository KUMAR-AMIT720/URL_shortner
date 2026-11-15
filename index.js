const express =require("express");
const app=express();
const PORT=8001;
const {mongodbconnection}=require("./connections");

const router=require("./routes/url");
app.use(express.json());
mongodbconnection("mongodb://127.0.0.1:27017/URL_shortner");
app.use("/api",router);


app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})
