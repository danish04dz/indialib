import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/connectDB.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/',(req,res)=>{
    res.send({message:'hello world'});

})

const startServer=async()=>{
    try {
        // connect data base

        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=> console.log("server started on port 8080"));

        
    } catch (error) {
        console.log(error);
        
    }
}

startServer();