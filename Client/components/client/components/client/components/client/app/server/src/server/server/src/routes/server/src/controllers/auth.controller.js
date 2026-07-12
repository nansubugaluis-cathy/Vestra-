import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export const register=async(req,res)=>{

try{

const{

name,

email,

password

}=req.body;

const hashedPassword=await bcrypt.hash(password,12);

return res.status(201).json({

success:true,

message:"Registration successful",

user:{

name,

email,

password:hashedPassword

}

});

}catch(error){

return res.status(500).json({

message:error.message

});

}

};

export const login=async(req,res)=>{

try{

const{

email

}=req.body;

const token=jwt.sign(

{email},

process.env.JWT_SECRET,

{

expiresIn:process.env.JWT_EXPIRES_IN

}

);

return res.json({

success:true,

token

});

}catch(error){

return res.status(500).json({

message:error.message

});

}

};
