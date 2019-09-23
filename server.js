const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('T-800 deployed'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('SkyNet is Active'));
