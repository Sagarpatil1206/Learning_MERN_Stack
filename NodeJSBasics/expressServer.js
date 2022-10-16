// const express = require("express");

// const app = express();

// app.get("/api", (req, res) => {
//   res.send("Your request is getting pjjjdjdrocess...");
// });

// app.listen(8000, () => console.log("Server is running on port 8000"));

//OR
// const express = require("express");

// const app = express();

// const myMiddleware = (req, res, next) => {
//   console.log("MiddleWare Apply");
//   next();
// };

// app.use(myMiddleware);

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get( "/api" , function (req, res) {
  res.json({//we atr going to give response in json format
    users: [ //array of objects
      {     //two objects
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

// hiding this to run another server on 8000
// app.listen(8000, () => console.log("Server is running on port 8000"));

/* in networks tab in inspect we will get to know about request url*/

/* If you want to enable CORS for all the request you can simply use the cors middleware before configuring your routes

This will allow all the routes to be accessed anywhere on the web if that is what you need. So in our example, both routes will be accessible for every domain. */
