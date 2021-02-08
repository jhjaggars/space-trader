import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./planets/router'));
app.use('/api', require('./merchants/router'));
app.use('/api', require('./players/router'));

module.exports = app;