import express from 'express';
import {pool} from './db.js';
import { PORT } from './confing.js';

const app = express();

app.get('/', async(req, res) => {
    const [result] = await pool.query('select * from users');
    res.json(result);

})
app.get('/ping', async(req, res) => {
    const [result] = await pool.query('select "hello" as result')
    res.json(result[0])

})
app.get("/create", async (req, res) => {
  const [result] = await pool.query('INSERT INTO users(name) VALUES("JORGE")');
  res.json(result);
});

app.listen(PORT);