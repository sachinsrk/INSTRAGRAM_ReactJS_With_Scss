const jwt = require('jsonwebtoken');
const JWT_Token = 'srk011g21'


const fetchuser = (req,res,next)=>{
 //fetch the user from the jwt token and add id to req object
 const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMTk3ZDcyOWYyY2Q3MzhjOTc3N2NmIn0sImlhdCI6MTY1NjMyMjU1MH0.XL-o4Ply_6ZPd0jQycihMF6daOdLbFTj9z4qRNL27JU';
 if(!token){
    res.status(401).send({error: "Token not found"})
 }  
 try{
 const data = jwt.verify(token,JWT_Token);
 req.user = data.user;
 next();
 } catch(error){

    res.status(500).send("Please authentitace using valid token")
 }

}

module.exports = fetchuser;