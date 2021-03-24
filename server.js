const express = require('express');
// const serveStatic = require("serve-static")
const path = require('path');
app = express();

// app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'dist'))); // app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/');
})

const port = process.env.PORT || 80;
app.listen(port);

// https://stackoverflow.com/questions/26349497/node-express-with-static-html-how-to-route-all-requests-to-index-html
