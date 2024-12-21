import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./src/db/index.js"

dotenv.config()
const app = express()


app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    console.log(process.env.MONGO_URI);
    res.send('Hello World!')
})
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });