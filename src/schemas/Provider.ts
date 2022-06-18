import { model, Schema, Document } from 'mongoose';
import { UserInterface } from './User';

export interface ProviderInterface extends Document {
    name: string,
    cnpj: string,
    email: string,
}

const ProviderSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Nome obrigatório'],
  },
  status: {
    type: String,
    required: [true, 'Cnpj obrigatório'],
  },
  email: {
    type: String,
    required: [true, 'E-mail obrigatório'],
    unique: true,
    lowercase: true,
  },
});

export default model<ProviderInterface>('Task', ProviderSchema);
