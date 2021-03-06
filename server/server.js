const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const multer = require("multer");

import { serverPort } from "../etc/config.json";

import * as db from "./utils/DataBaseUtils";

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors({ origin: "*" }));

const Users = require("./routes/Users");
const Tasks = require("./routes/Tasks");
const Comments = require("./routes/Comments");
const Images = require("./routes/Images");

app.use("/users", Users);
app.use("/tasks", Tasks);
app.use("/comments", Comments);
app.use("/images", Images);

app.listen(serverPort, function() {
  console.log(`Server is up and running on port ${serverPort}`);
});
