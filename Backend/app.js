const express = require('express');
const path = require('path');
const app = express();
const upload = require('./multerConfig');

const PORT = 3000;

app.post('/upload', upload.single('pdf'), (req, res) => {
    res.send('Archivo subido correctamente');
    });

app.get('/pdf/:filename', (req, res) => {
    const filename = req.params.filename;
    
    const filePath = path.join(__dirname, 'uploads', filename);
    
    res.sendFile(filePath, (err) => {
        if (err) {
        if (err.code === 'ENOENT') {
            res.status(404).send('Archivo no encontrado');
        } else {
            res.status(500).send('Error al procesar la solicitud');
        }
        }
    });
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    }
);