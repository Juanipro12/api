import User from "../models/userModel.js"
import bcrypt from "bcrypt"

export const getUser = async(req,res) => {
    const {userId} = req.body
    const user = await User.findById(userId)
    if(!user) return res.sendStatus(404)
    res.send(user)
}
export const insertUser = async(req,res) => {
    const {name,email,password} = req.body
    const passwordHash = bcrypt.hashSync(password,10)
    if(passwordHash !== ''){
        const newUser  = new User({name,email,password:passwordHash})
        await newUser.save()
        res.send(newUser)
    }
}
export const updateUser = async(req,res) => {
    const { userId, password, newUserData } = req.body;
  
    const validate = await validatePassword(userId, password)
    if(!validate.success){
        return res.status(401).json({ error: validate.message });
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, newUserData, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user information' });
    }
}
export const deleteUser = async(req,res) => {
    const { userId, password } = req.body;
    const validate = await validatePassword(userId, password)
    if(!validate.success){
        return res.status(404).json({ error: validate.message });
    }
    await User.findByIdAndDelete(userId)

    return res.sendStatus(204)
}

const validatePassword = async (userId, password) =>{
    const user = await User.findById(userId);

    if (!user) {
      return { success: false, message: 'User not found' };
    }
  
    const validPassword = await bcrypt.compare(password, user.password);
  
    if (!validPassword) {
      return { success: false, message: 'Invalid password' };
    }
  
    return { success: true };
}