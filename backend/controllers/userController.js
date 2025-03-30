const User = require("../models/userSchema") ;
const bcrypt = require("bcryptjs") ;
const jwt = require("jsonwebtoken") ;


const signup = async (req,res)=>{
    try {
        const {name,email,password} = req.body ; 
        const existingUser = await User.findOne({email}) ;
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(201).json({ user: newUser, token });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

const login = async (req,res)=>{
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

const getUser = async (req,res)=>{
    try {
        const { id } = req.params;
        const user = await User.findById(id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { signup, login, getUser };