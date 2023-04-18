var jwt = require ('jsonwebtoken');
const JWT_SECRET='hloeveryone';

const fetchuser=(req,res,next)=>{
    const token=req.headers['Authorization'];
    const token_split=token.split(' ');
    if(!token){
        res.status(401).send({message:'unauthorized'})
    }
    try{
        const data = jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    }catch(error){
        res.status(401).send({error:'Plz enter authorized data'})
    }
}