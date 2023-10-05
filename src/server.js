import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { globalRouter, authRouter, roomsRouter, privatsRouter } from './routes/index.js';
import { errorsMidleware } from './middlewares/index.js';

import { dbConnect } from './services/dbConnect.js';


const PORT = process.env.SERVER_PORT || 8080;
const server = express();
const startupDevMode = server.get('env') === 'development';
const formatsLogger = startupDevMode ? 'dev' : 'short';
const clientURL = startupDevMode
  ? process.env.TEST_URL
  : process.env.CLIENT_URL;

dbConnect();

server.use(logger(formatsLogger));
server.use(cors({
  origin: clientURL,
  credentials: true
}));
server.use(express.json());

server.use('/', globalRouter);
server.use('/auth', authRouter);
server.use('/rooms', roomsRouter);
server.use('/private', privatsRouter);

server.use(errorsMidleware);

server.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
