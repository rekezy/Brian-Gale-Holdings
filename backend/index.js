const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./schema/User");

const uri =
  "mongodb+srv://curtis:4hsEqN4C1TX4MY2g@cluster0.momr3qu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
const port = process.env.Port || 8000;

app.use(bodyParser.json());

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Perform operations with mongoose
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.post("/register", async (req, res) => {
  const { name, email, phone, password, Businessname, registrationNumber } =
    req.body;
  const result = await User.findOne({ email });

  if (!result) {
    const user = new User({
      name: name,
      email,
      phone,
      password,
      Businessname,
      registrationNumber,
      isBusiness:
        Businessname != undefined || Businessname != "" || Businessname != null
          ? true
          : false,
    });

    try {
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "User ALreay exist" });
  }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // If the password matches, authentication is successful
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.get("/user", async (req, res) => {
  const result = await User.find();
  //   const result = await User.findOne({ email: "curts@gmail.com" });
  console.log(result);
  res.send(result);
});

app.listen(port, () => {
  console.log(`App listening  on ${port}`);
});
