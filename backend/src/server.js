const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");

var corsOptions = {
  origin: "http://localhost:5000"
};
app.use(express.json());

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 5000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
