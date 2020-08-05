import express from 'express';
import cors from 'cors';
import routes from './routes';

// aplicação
const app = express();

// para o express entender o json
app.use(cors());
app.use(express.json());
app.use(routes);

// ouvir requisições HTTP com a porta utilizada
app.listen(3333);