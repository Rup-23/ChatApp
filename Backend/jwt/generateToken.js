import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userId,res)=>{
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn:"10d"
    });
    res.cookie("jwt",token,{
        httpOnly:true,  //  prevent from xss attact 
        secure:true,
        sameSite:"strict"  // prevent from csrf attact 
    });
  
}

export default createTokenAndSaveCookie;