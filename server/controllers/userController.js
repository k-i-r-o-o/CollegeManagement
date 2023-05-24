const jwt=require('jsonwebtoken');
const User = require('../models/userModel')

const createToken = (_id)=>{
return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}

// login a user
const loginUser = async (req, res) => {
    const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)
    
    // create token here!!!!!!!!!!!!!!!!!!
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }