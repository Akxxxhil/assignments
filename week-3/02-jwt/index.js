const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtPassword = 'secret';

const emailschema=zod.string().email();
const passwordschema=zod.string().min(6);
function signJwt(username, password) {
    const usersresponse=emailschema.safeParse(username)
    const passwordresponse=passwordschema.safeParse(password)
    if(!usersresponse.success || !passwordresponse.success){
        return null;
    }
    
  const result=jwt.sign({
    username
    },jwtPassword)

    return result;
}

 
function verifyJwt(token) {
    let ans=true;
  try{
    jwt.verify(token,jwtPassword)

  }
  catch(e){
    ans=false

  }
  return ans;
}


function decodeJwt(token) {
    const decoding=jwt.decode(token);
    if(decoding){
        return true;
    }
    else{
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
