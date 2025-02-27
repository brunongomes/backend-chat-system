import { Router } from 'express';
import { Request, Response } from 'express';
import { Message } from '../models/Message';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Chat API' });
});

router.get('/all', async (req: Request, res: Response) => {
    try {
      const messages = await Message.find().sort({ timestamp: -1 });
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar mensagens' });
    }
});

export default router;
