require('newrelic');
const express = require('express')
const route = require('./Server/routes');
//const db = require('./Database/ETL_postgres.js')
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}))

/* app.get('/qa/questions/:questionId', (req, res) => {
  const {questionId} = req.params;
  const randNum = 0;
  const randTimeInMs = randNum * 1000;
  setTimeout(() => {
    res.sendStatus(200);
    res.send(`You received a response in ${randTimeInMs}`)
  }, randTimeInMs)
}); */
app.use('/qa', route);
// use the ./Server/routes file to handle endpoints that start with /qa/questions

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
})