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

// Función para obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error al obtener usuarios." });
  }
};

// Función para obtener un usuario por ID
export const getUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    res.status(500).json({ message: "Error al obtener usuario por ID." });
  }
};

// Función para actualizar un usuario por ID
export const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { username, password } = req.body;

  try {
    const user = await UserModel.findByIdAndUpdate(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    user.username = username;
    user.password = password;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error("Error al actualizar usuario por ID:", error);
    res.status(500).json({ message: "Error al actualizar usuario por ID." });
  }
};

// Función para eliminar un usuario por ID
export const deleteUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    

    res.status(200).json({ message: "Usuario eliminado con éxito." });
  } catch (error) {
    console.error("Error al eliminar usuario por ID:", error);
    res.status(500).json({ message: "Error al eliminar usuario por ID." });
  }
};