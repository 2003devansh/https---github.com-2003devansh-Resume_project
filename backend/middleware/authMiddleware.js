const jwt = require('jsonwebtoken') ;

const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Unauthorized" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
}

module.exports = auth ;