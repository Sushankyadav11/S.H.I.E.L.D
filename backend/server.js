require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Use MongoDB connection from .env file
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// 🔹 Define Schema & Model
const screenTimeSchema = new mongoose.Schema({
    site: String,
    timeSpent: Number,
    timestamp: { type: Date, default: Date.now }
});

const ScreenTime = mongoose.model("ScreenTime", screenTimeSchema);

// 🔹 API to Receive Screen Time Data
app.post("/sync", async (req, res) => {
    try {
        const siteData = Object.entries(req.body).map(([site, time]) => ({
            site, timeSpent: time
        }));
        await ScreenTime.insertMany(siteData);
        console.log("📌 Data saved to MongoDB:", siteData);
        res.json({ message: "✅ Data synced successfully" });
    } catch (error) {
        res.status(500).json({ error: "❌ Failed to store data" });
    }
});

// 🔹 API to Fetch Stored Data
app.get("/data", async (req, res) => {
    try {
        const data = await ScreenTime.find({});
        console.log("📌 MongoDB Returned:", data);
        res.json(data);
    } catch (error) {
        console.error("❌ Failed to fetch data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📌 Available routes:`);
    console.log(`📌 GET /data`);
});
