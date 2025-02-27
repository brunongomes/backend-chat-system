import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/chat',
  secretKey: process.env.SECRET_KEY || '123',
};
