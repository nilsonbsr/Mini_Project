import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signup = async(req, res) => {
    try {
        // get some value from request body database
        // input from user
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if (password!== confirmPassword) {
            return res.status(400).json({error: "Passwords do not match"})
        }

        // check if the user already exists
        const user = await User.findOne({username})

        if(user) {
            return res.status(400).json({error: "Username already exists"})
        }

        // HASH PASSWORD

        // generate a random value generated to be combined with the  password before hashing. 
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password, salt)

        // https://avatar-placeholder.iran.liara.run/avatars

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?user=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?user=${username}`
        const otherProfilePic = `https://robohash.org/mail@ashallendesign.co.uk`
        

        const newUser = new User({
            fullName: fullName,
            username: username,
            password: hashedPassword,
            gender: gender,
            profilePic: gender === "male"? boyProfilePic : girlProfilePic,
        })
        if (newUser) {
            // Generate JWT token
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
            // successfully created a new user
            res.status(201).json({
                _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({error: "Invalid user data"})
        }

    } catch (error) {
        console.log("Error is signup controller: ", error.message)
        res.status(500).json({error: "Internal Server Error"})
        
    }
}

export const login= async (req, res) => {
    try{
        // get user and pass from body
        const {username, password} = req.body
        const user = await User.findOne({username: username})
        // decode password. first decode the password
        // if the password doesn't exist then return empty string
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }

        // generate the token and set cookie
        generateTokenAndSetCookie(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })



    } catch (error) {
        console.log("Error is login controller: ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const logout = (req, res) => {
   try{
    res.cookie("jwt", "", {maxAge: 0})
    res.status(200).json({message: "Logged out successfully"})

   } catch (error) {
    console.log("Error is logout controller: ", error.message)
    res.status(500).json({error: "Internal Server Error"})
   
}
}
