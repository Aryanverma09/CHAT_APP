import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import aiRoutes from './routes/ai.route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/ai', aiRoutes)


app.listen(process.env.PORT, ()=>{
    console.log("Server is running");
    
})