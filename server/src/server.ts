import  "dotenv/config";
import mongoose from "mongoose";

import express from "express";
const app = express();


app.get("/",(req,res) => {
res.send("Hello, World");
});

const port  = process.env.PORT;
console.log("Server running on port: " + port);