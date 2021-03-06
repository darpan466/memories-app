import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
//
const app = express();
//
dotenv.config();
app.use(express.json({limit: "30mb"}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/posts", postRoutes); 
app.get("/", (req, res) => {
    res.send("Hello to memories API.");
});
//
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;
//
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(err => console.log(err));
//


