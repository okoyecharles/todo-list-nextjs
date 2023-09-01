import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
  googleId: String,
  todos: []
});

const User = mongoose.model('user', userSchema);
export default User; 