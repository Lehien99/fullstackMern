require('dotenv').config()
const express =require('express');   
const app = express();
const mongoose = require('mongoose')

const {DB_USERNAME, DB_PASSWORD} = process.env;

app.use(express.json())


const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@mern-learnit.rnvidwa.mongodb.net/?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false 

        })
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}


connectDB();

const apiRouter = require("./routes/index");
app.get('/',(req,res)=>{
  res.send('hello word')
})
app.use("/api", apiRouter);
const PORT = 5000

app.listen(PORT, () =>console.log(`Server listening on ${PORT}`))