import  express  from "express";


const router = express.Router()

router.get('/',async(req, res)=>{req.send("auth route")})

export default router ;