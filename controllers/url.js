const { nanoid } =require("nanoid");
const URL=require("../models/url");
async function handleGenerateNewShortURL(req,res){
    try{
    const body=req.body;
    if(!body.url) return res.status(400).json({ error:"url is required"});

    const shortID=nanoid(8);
 
      const newURL= await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[]
    });
    return res.status(201).json({
        success: true,
            message: "Short URL created successfully",
            data: newURL
    });
 } catch(error){
    console.log("error in creation of database")
 }

}

module.exports={ handleGenerateNewShortURL };