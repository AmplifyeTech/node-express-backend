import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import {routerInstance} from './routes/index.js';



const app = express(); // Creating an express object
 // Setting an port for this application

const morganMiddleware = morgan('dev'); // 'dev' format provides details
app.use(morganMiddleware); // Using morgan middleware to log all requests
//Routes

app.use(cors())
app.use(express.json());
app.use(bodyParser.json({ limit: '500mb' }));  // Ensure this is also set
app.use(bodyParser.urlencoded({ limit: '500mb',extended: true }));

app.use('/api', routerInstance);

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to the API' });
});

export default app;