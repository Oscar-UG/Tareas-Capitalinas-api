import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

// Función para registrar un nuevo usuario
export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe." });
    }

    // Crear un nuevo usuario
    const newUser = new UserModel({ 
        username, 
        password 
    });
    
    await newUser.save();
    console.log("Usuario registrado con éxito:", newUser);
    // Generar un token JWT para el usuario registrado
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Token JWT generado:", token);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar al usuario." });
  }
};
