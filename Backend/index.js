import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());
app.use(cors());

const db_name = "Project"; // name of your database
const MONGODB_URL = "mongodb+srv://Bhavesh_v:bhavesh2503@cluster0.g5a6c.mongodb.net/"; // Add your MongoDB URL

let db;
let client;

// Connect to MongoDB once
(async () => {
  try {
    client = new MongoClient(MONGODB_URL);
    await client.connect();
    db = client.db(db_name);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
})();

// User Registration route
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await db.collection('Login_Credentials').findOne({ email }); //name of your collection
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists!" });
    }

    // Create a new user and save to MongoDB
    const newUser = { username, email, password };
    await db.collection('Login_Credentials').insertOne(newUser); //name of your collection

    res.status(201).json({ msg: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error!" });
  }
});

// User Login route
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await db.collection('Login_Credentials').findOne({ email }); //name of your collection
    if (!user) {
      return res.status(400).json({ msg: "User not found!" });
    }

    // Compare password directly (no hashing)
    if (user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials!" });
    }

    // Respond with user info
    res.json({
      msg: "Logged in successfully!",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error!" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));