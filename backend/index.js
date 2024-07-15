const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./schema/User");
const cors = require("cors");
const bcrypt = require("bcrypt");

const uri =
  "mongodb+srv://curtis:4hsEqN4C1TX4MY2g@cluster0.momr3qu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
const port = process.env.Port || 8000;

app.use(bodyParser.json());
app.use(cors());

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
  console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    country,
    referralCode,
    userName,
  } = req.body;
  if (!userName || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email,
      phone,
      password,
      country,
      referralCode,
      userName,
      isBusiness: false,
    });

    try {
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "User Already exist" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(password, email, user.password);
    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // If the password matches, authentication is successful
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/user", async (req, res) => {
  const result = await User.findBy(); 
    // const result = await User.findOne({ email: "curts@gmail.com" });
  console.log(result);
  res.send(result);
});

app.get("/user/:id", async (req, res) => {
  try {
    // Use findById to get the user by ID
    const result = await User.findById(req.params.id);
    
    if (!result) {
      return res.status(404).send({ message: "User not found" });
    }

    console.log(result);
    res.send(result);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


app.listen(port, () => {
  console.log(`App listening  on ${port}`);
});
