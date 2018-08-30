const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(express.static(__dirname + '/dist/liveArtDesign/'));
//app.get('/', (req, res) => res.sendFile("./dist/liveArtDesign/index.htlm"));
//app.get('/galery', (req, res) => res.sendFile("./dist/liveArtDesign/index.htlm"));

app.get('/', (req, res) => res.sendFile(__dirname + '/dist/liveArtDesign/index.html'));
app.get('/galery', (req, res) => res.sendFile(__dirname + '/dist/liveArtDesign/index.html'));


server.listen(port, () => console.log(`Server is running on port ${port}.`));
