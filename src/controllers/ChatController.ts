import { Server } from 'socket.io';
import { Message } from '../models/Message';

export class ChatController {
  handleSocket(socket: any, io: Server) {
    socket.on('chat message', async (data: { userId: string; message: string }) => {
      try {
        const message = new Message({ 
          user: data.userId,
          message: data.message 
        });
        
        await message.save();
        
        io.emit('chat message', { 
          ...message.toObject(), 
          user: data.userId 
        });
      } catch (error) {}
    });
  }
}
