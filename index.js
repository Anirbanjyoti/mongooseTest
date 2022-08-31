const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./database/connect");
const app = express();
const port = process.env.PORT || 5000;
// Import Mongoose Router
const studentHandler = require("./routers/studentHandler");

// Middle ware initialization
app.use(cors());
app.use(express.json());

async function run() {
  try {
    //application Router
    app.use("/student", studentHandler);


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
