require('dotenv').config()

const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
const  User = require("./schema/usersSchema")
const mongoose = require('mongoose')

const app = express()
const port = process.env.Port || 8000


//mongodb 
const dbURI  = "mongodb+srv://themediamarket5:<password>@cluster0.momr3qu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const dbURI  = process.env.MONGO_URL




// middleware 
app.use(bodyParser.json())


//connecting to mongodb
mongoose.connect(dbURI)
.then(() => console.log('Mongobd connect at brian holding collection'))
.catch(err => console.log(err))


app.get('/', (req, res) =>  {
  res.send("This is  a node application")
});


app.post('/user', (req, res) => {
  res.json({msgg: 'user uploaded'})
})

app.put('/user/:id', ( req, res) => {
  res.json({messg: "User have been updated"})
})
app.delete('/user/:id', (req, res) => {
  res.json({messg:'User has been deleted'})
})













// Stripe payment integration
app.post("/processpayment", async (req, res) => {
  try {
     // Mock payment data from the client (replace this with actual data from your frontend)
     const { cardNumber, cardExpiry, cardCVV, amount } = req.body;

         // Make API call to the payment gateway 
  }catch{}
});

app.listen(port, () =>  {
  console.log(`App listening  on ${port}`)
})



