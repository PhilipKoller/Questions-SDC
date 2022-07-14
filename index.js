require('newrelic');
const express = require('express')
const route = require('./Server/routes');
const app = express();
const PORT = 3000;
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/loaderio-67b2613547e507a9ca45d3af1fcccd84', (req, res) => {
  res.sendFile(path.join(__dirname, 'loaderio-67b2613547e507a9ca45d3af1fcccd84.txt'));
}
);

app.use('/qa', route);



app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
})