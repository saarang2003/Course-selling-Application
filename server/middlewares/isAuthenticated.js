import jwt from 'jsonwebtoken';
import express from 'express';

const isAuthenticated = async(req, res, next) =>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message : 'User Authentication failed',
                success : false,
            })
        }

        const decode = jwt.verify(token , process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({
              message: "Invalid token",
              success: false,
            });
          }
          req.id = decode.userId;
          next();

    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticated;