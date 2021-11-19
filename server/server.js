const express = require("express");

// const path = require("path");

const cors = require("cors");
// const { PORT, BACKEND_URL } = process.env;
const port = process.env.PORT || 8080;
require('dotenv').config();
// init the express app in order to use express methods
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Port ${port}`);
  });

