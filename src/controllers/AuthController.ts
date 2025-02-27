import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config/env';

export class AuthController {
  async handleRegister(req: Request, res: Response) {
    try {
      const { username, password, email } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = new User({ username, password: hashedPassword, email });
      await user.save();
      
      res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  async handleLogin(req: Request, res: Response): Promise<any> {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(401).json({ message: 'Usuário não cadastrado' });
      }
      
      if (!await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ id: user?._id }, config.secretKey, {
        expiresIn: '1h'
      });

      res.json({ token, userId: user?._id });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao autenticar' });
    }
  }
}
