import express from "express";
import User from "../models/user-model.js";

const router = express.Router();

router.post("/signin", async (req, res) => {
  const { id, name, email, image } = req.body;

  const userExists = await User.findOne({ googleId: id });
  if (userExists) {
    res.json({ user: userExists });
  } else {
    User.create({
      name,
      email,
      image,
      googleId: id,
      todos: []
    })
      .then((user) => {
        console.log('From backend', user);
        res.json({ user });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  }
});

export default router;
