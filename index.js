const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Middle ware
app.use(cors());
app.use(express.json());

// Database connection with mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ov3k2vn.mongodb.net/?retryWrites=true&w=majority/mongooseTest`, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>console.log(`Mongodb Connected Successfully with Mongoose`))
// .catch(console.dir)

// DB_USER=moongooseTest
// DB_PASS=0PAMOSj9oHXHPyf3

async function run() {
  try {


    // 

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Mongoose Connect with mongodb");
});

app.listen(port, () => {
  console.log(`Mongoose app listening on port ${port}`);
});
