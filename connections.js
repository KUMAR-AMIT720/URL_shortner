
const mongoose=require("mongoose");
async function mongodbconnection(url){
   try{
       await mongoose.connect(url);
       console.log("mongodb connected");
   } catch (error) {
    console.log("mongodb connection error",error);
   }
};

module.exports={ mongodbconnection };
