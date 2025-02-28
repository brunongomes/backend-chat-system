import express from 'express';
import connectDB from './config/database';
import authRoutes from './routes/auth.routes';
import chatRoutes from './routes/chat.routes';
import cors from 'cors'; 

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['*']
  }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Database connection
connectDB();

export default app;
