// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CATFACT_URL = process.env.CATFACT_URL || "https://catfact.ninja/fact";

app.set('json spaces', 2);

app.use(cors());

// ---------- ROUTES ----------
app.get("/me", async (req, res) => {
    try {
        // Fetch cat fact dynamically
        const response = await axios.get(CATFACT_URL, { timeout: 5000 });
        const catFact = response.data?.fact || "No cat fact available.";

        const data = {
            status: "success",
            user: {
                email: "abdulbarrshonibare@gmail.com",
                name: "Abdulbarr Shonibare",
                stack: "Node.js/Express",
            },
            timestamp: new Date().toISOString(),
            fact: catFact,
        };

        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching cat fact:", error.message);

        const fallback = {
            status: "success",
            user: {
                email: "abdulbarrshonibare@gmail.com",
                name: "Abdulbarr Shonibare",
                stack: "Node.js/Express",
            },
            timestamp: new Date().toISOString(),
            fact: "Could not fetch cat fact at this time.",
        };

        res.status(200).json(fallback);
    }
});

//START SERVER
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
