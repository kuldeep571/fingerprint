const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;






dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/fingerprint", require("./router/userrouter"));




app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}❤❤`);
  });
  