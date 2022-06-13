const express =  require("express");
const mysql =  require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser")
const isEmpty = require("lodash/isEmpty");

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




const PORT = 5003;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
