const express = require('express');
const app = express();
const PORT = 8088;
const today = new Date()
var schema = {
  message: {type: String, required: "Message is a required field." },
  timestamp: {type: Number, required: "schema.timestamp is a required field"},
}
app.get('/demo',(req,res) => {
  res.status(200).send({
    message: 'Automate all the things!',
    timestamp: Date.now(),
    })
  res.send
})

app.post('/demo',(req,res) => {
  res.status(405).send(new Error('405 - Method not allowed'))
  res.send
})

app.delete('/demo',(req,res) => {
  res.status(405).send(new Error('405 - Method not allowed'));
  res.send
})

app.put('/demo',(req,res) => {
  res.status(405).send(new Error('405 - Method not allowed'));
  res.send
})

app.get('/',(req,res) => {
  res.set('location', '/demo');
  res.status(301).send()
})

app.listen(
  PORT,
  () => console.log(`It's alive on http://localhost:${PORT}`)
)
