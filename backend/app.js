
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config({path : "backend/configs/configs.env"});
}

// useing middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

const post = require("./routes/Post");
const User = require("./routes/User")


app.use("/api/v1", post);
app.use("/api/v1", User);

// import 
module.exports = app;