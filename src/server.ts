import app from './app';
import { Server } from 'socket.io';
import { ChatController } from './controllers/ChatController';

const server = app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {  
  const chatController = new ChatController();
  chatController.handleSocket(socket, io);
});

export default io;
