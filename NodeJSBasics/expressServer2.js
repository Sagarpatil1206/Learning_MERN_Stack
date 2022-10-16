const express = require("express");
const cors = require("cors");
const morgan =require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/api", function (req, res) {
  res.json({
    //we atr going to give response in json format
    users: [
      //array of objects
      {
        //two objects
        name: "Sagar",
        age: 20,
      },
      {
        name: "Rohan",
        age: 35,
      },
    ],
  });
});

app.listen(8000, () => console.log("Right now Server is running on port 8000"));
