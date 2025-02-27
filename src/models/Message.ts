import { model, Schema } from 'mongoose';

const messageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const Message = model('Message', messageSchema);
