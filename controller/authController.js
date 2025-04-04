import Auth from "../models/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const secret = process.env.JWT_SECRET || "uzefa"; // Use .env for security

// ✅ SIGN UP USER
export const signUp = async (req, res) => {
  const { name, email, password, avatar } = req.body;
  try {
    const oldUser = await Auth.findOne({ email });

    if (oldUser) {
      return res.status(409).json({ message: "User already exists with this email", status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await Auth.create({ name, email, password: hashedPassword, avatar });

    const token = jwt.sign({ email, id: newUser._id }, secret, { expiresIn: "7d" });

    return res.status(201).json({ message: "User added successfully", user: newUser, token, status: 201 });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message, status: 500 });
  }
};

// ✅ SIGN IN USER
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await Auth.findOne({ email });

    if (!oldUser) {
      return res.status(404).json({ message: "User not found, please sign up", status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid login credentials", status: 401 });
    }

    const token = jwt.sign({ email, id: oldUser._id }, secret, { expiresIn: "7d" });

    return res.status(200).json({ message: "Logged in successfully", user: oldUser, token, status: 200 });
  } catch (error) {
    console.error("Signin Error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message, status: 500 });
  }
};

export const findAllUsers = async (req, res) => {
  try {
    const users = await Auth.find({}, "name email avatar createdAt"); // Fetch only needed fields
    return res.status(200).json({ message: "Users fetched successfully", users, status: 200 });
  } catch (error) {
    console.error("Fetch Users Error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message, status: 500 });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await Auth.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }}


  export const getUserId=async(req,res)=>{
    const{id} =req.params
    try {
      const users =await Auth.findById(id);
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
  
    }
  }
  