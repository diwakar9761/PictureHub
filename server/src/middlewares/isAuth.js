import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    
    try {
        let {token} = req.cookies
        if (!token) {
            return res.status(400).json({message: "Token Expired, please login to continue!"})
        }

        const isValidToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!isValidToken) {
            return res.status(400).json({message: "Invalid Token, please login to continue!"})
        }

        req.userId = isValidToken.id
        next()
    } catch (error) {
        return res.status(500).json({message: "Authentication error!"})
    }
}

export default isAuth;



