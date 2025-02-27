# Chat System com Node.js e Socket.IO

## 📝 Sobre  
Sistema de chat em tempo real com autenticação de usuários, usando Node.js, TypeScript, Express e Socket.IO. Inclui funcionalidades de cadastro de usuário/login, envio de mensagens e persistência no MongoDB.

---

## 🚀 Features  
- **Autenticação**: Registro e login com JWT  
- **Chat em tempo real**: Comunicação via WebSocket (Socket.IO)  
- **API REST**: Endpoints para mensagens e saúde do sistema  
- **Persistência**: Armazenamento de mensagens no MongoDB  
- **TypeScript**: Tipagem forte para segurança e manutenção  

---

## 🛠 Setup  
### Pré-requisitos  
- Node.js 16+  
- MongoDB 5+

### Passo a passo  
1. **Clonar o repositório**  
   ```bash
   git clone https://github.com/brunongomes/backend-chat-system
   cd chat-system
   ```

2. **Instalar dependências**  
   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente**  
   Crie um arquivo `.env` com:  
   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/chat-system
   SECRET_KEY=your-secret-key-here
   ```

4. **Iniciar o servidor**  
   ```bash
   npm run dev
   ```

---

## 📐 Arquitetura  
### Estrutura do Projeto  
```
src/
├── config/         # Configurações de ambiente
├── controllers/    # Lógica de negócios
├── models/         # Esquemas do MongoDB
├── routes/         # Definição de rotas
├── server.ts       # Inicialização do servidor
└── app.ts          # Configuração do Express
```

### Componentes Principais  
1. **Express.js**: Framework para API REST  
2. **Socket.IO**: WebSocket para comunicação em tempo real  
3. **MongoDB**: Banco de dados NoSQL  
4. **TypeScript**: Tipagem estática e segurança  
5. **JWT**: Autenticação via tokens  

---

## 🔍 Endpoints  
### Autenticação  
| Método | Rota       | Descrição               |
|--------|------------|-------------------------|
| POST   | /auth/register | Cria novo usuário       |
| POST   | /auth/login    | Realiza login           |

### Chat  
| Método | Rota       | Descrição               |
|--------|------------|-------------------------|
| GET    | /chat/      | Verificação de saúde    |
| GET    | /chat/all   | Lista todas as mensagens|
| WebSocket | /chat | Comunicação em tempo real |

---

## 📜 License  
Distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---
