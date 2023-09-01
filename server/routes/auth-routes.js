import express from "express";
import User from "../models/user-model.js";

const router = express.Router();

router.get("/signin", async (req, res) => {
  console.log(req.body);
  const { id, name, email, image } = req.body;

  const userExists = await User.findOne({ googleId: id });
  if (userExists) {
    res.json({ user: userExists });
  } else {
    new User({
      googleId: id,
      name,
      email,
      image,
      todos: [],
    })
      .save()
      .then((user) => {
        res.json({ user });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  }
});

export default router;
