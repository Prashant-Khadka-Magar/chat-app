import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js"
import userRoutes from './routes/user.route.js'


dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', userRoutes)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
