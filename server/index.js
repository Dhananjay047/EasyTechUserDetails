import express  from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from "./routes/user.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/users',userRouter);


app.get("/",(req,res)=>{
    res.send("This is home page");
})

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT,() => console.log("server running on 5000 nigga")))
    .catch((err) => console.log(err));

mongoose.set('useFindAndModify',false);