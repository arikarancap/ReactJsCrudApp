const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/TaskRoute")
const app = express();

const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(() => {
    console.log("Datatabase Connected Succesfully...")
})
    .catch(err => console.log("Error connecting Database...", err))

// app.get('/', (req, res) => {
//     res.send("Your Code is Working Never Ever Give Up...");
// })

app.use("/api",routes);
app.listen(PORT, () => console.log(`Listening port connected to ${PORT} Server`))