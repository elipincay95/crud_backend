import express from 'express';
import { connection } from './database/connect.db.js';
const app = express();
const port = 3200;
app.use(express.json());

app.get('/obtener-contacto', (req, res) => {
    const id = req.query.id;
    
});

app.post('/create-contacto', (req, res) => {
    res.send(req.body);
});

app.put('/update-contacto', (req, res) => {
    res.send('update contacto');
});

app.delete('/remover-contacto', (req, res) => {
    res.send('remover contacto');
});


connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Base de datos conectada correctamente');
});
app.listen(port, () => {
    console.log(`app escuchando en el puerto ${port}`);
});