import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';



const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))


mongoose.connect(
    "mongodb+srv://mrak090:2119ankit@ankit9100.yacutxw.mongodb.net/",
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => app.listen(4000, () => console.log("Listening")));