import { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

export const User = model('User', userSchema);
