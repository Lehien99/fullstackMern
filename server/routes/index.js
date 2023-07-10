const express =require('express');   
const app = express();

const authRouter = require("./auth");
const postRouter = require("./post");

app.use("/auth", authRouter);
app.use("/auth", postRouter);

module.exports = app;