// server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './utils/db.js';
import homeRouter from './routes/homeRoute.js';
import serviceRoute from './routes/serviceRoute.js';
import festivalRoute from './routes/festivalRoute.js';
import studioRoute from './routes/studio.js';
import contatcRoute from './routes/contact.js';
import formRoute from './routes/form.js';

// dotenv.config();

const app = express();
const port = process.env.Port || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

connectDB();
app.use('/api/home', homeRouter );
app.use('/api/service', serviceRoute);
app.use('/api/festival', festivalRoute);
app.use('/api/studio', studioRoute);
app.use('/api/contact', contatcRoute);
app.use('/api/form', formRoute);




app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
