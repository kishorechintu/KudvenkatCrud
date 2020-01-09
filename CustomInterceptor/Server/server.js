//import the modules
//require() is the predefined function used to import the modules
let express = require("express");
let cors = require("cors");

//create the Rest Object
let app = express(); //where is app is Rest Object

//enable the cors (Post communication)
app.use(cors());

//check Headers
//create function
//middleware in nodeJs

//checking headers at begining is called middleware ni NodeJs
let checker = (req, res, next) => {
  let all_headers = req.headers;
  if (all_headers.token === "KISHORE") {
  
    next();
  } else {
    res.send({ auth: "fail" });
  }
};

//request contains all request coming from Angular

//create REST API
app.get("/demo", [checker], (req, res) => {
  res.send({ auth: "Success" });
});

//assign the port number
app.listen(8080);
console.log("Server listening the port no : 8080");

//initially request goes to "/demo"
//demo resAPI bypass the request to "checker"
//based on the condition client receives the Response from server
