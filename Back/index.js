const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//routes
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
.then(()=>{
    console.log("Connected to the Database");
})
.catch(err => {
    console.log("err =", err);
});;

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/users", userRoute);
app.use("/auth", authRoute);


app.listen(8080, () => {
    console.log('Server is runing on port 8080 !');
})