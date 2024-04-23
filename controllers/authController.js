import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";
export const registerController = async (req, res) => {
  try {
    const { name, email, address, phone, password } = req.body;
    // validation
    if (!name) {
      res.send({ error: "not a valid name" });
    }
    if (!email) {
      res.send({ error: "not a valid email" });
    }
    if (!address) {
      res.send({ error: "not a valid address" });
    }
    if (!phone) {
      res.send({ error: "not a valid phone" });
    }
    if (!password) {
      res.send({ error: "not a valid password" });
    }

    // ?check existing user

    // const existingUser = await userModel.findOne({ email: email });
    // if (existingUser) {
    //   return res.send({
    //     sucess: true,
    //     message: "already a user pls login",
    //   });
    // }

    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "user register successfullt",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "error in registration",
      success: false,
      error,
    });
  }
};
