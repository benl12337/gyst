import express from "express";
import modulesRouter from "./routes/modules.mjs";
import cors from 'cors';

import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS for localhost:5173
app.use(cors({origin: 'http://localhost:5173'}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome, Ben!");
});

app.use("/modules", modulesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
