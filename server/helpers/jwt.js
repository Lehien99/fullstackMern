const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_EXPIRE, ACCESS_TOKEN_SECRET } = process.env;

const generateAccessToken = (infoUser)=>{
   const {_id:userID} = infoUser;
   return jwt.sign({id:userID},ACCESS_TOKEN_SECRET,{ expiresIn: ACCESS_TOKEN_EXPIRE*1000000   });
}

module.exports = {generateAccessToken}
