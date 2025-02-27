import mongoose from 'mongoose';
import { config } from './env';

const connectDB = async () => {
  try {
    await mongoose.connect(`${config.mongoURI}?authSource=admin&dbName=chat-system`);
    console.log('✅ Conectado ao MongoDB');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
