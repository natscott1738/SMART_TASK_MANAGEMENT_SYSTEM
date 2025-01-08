import jwt from 'jsonwebtoken';
import User from '../models/user.js'

const protectRoute = async (req, res, next) => {
    try {
        let token = req.cookie.token;

        if(token){
            const decodedToken= jwt.verify(token, process.env.JWT_SECRET);

            const resp = await User.findById(decodedToken.UserId).select("isAdmin email");

            req.user = {
                email: resp.email,
                isAdmin: resp.isAdmin,
                userId: decodedToken.userId,
            };

            next();
        }


    } catch (error) {
        console.log(error);
        return res
            .status(401)
            .json({ status: false, message: "Not authorized. Please try logging in again."});
        
        
    }
};

const isAdminRoute = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json({
        status: false,
        message: "Not authorized as admin. Try logging in as admin.",
      });
    }
  };
  
  export { isAdminRoute, protectRoute };