const express = require("express");
const morgan  = require("morgan");
const colors = require("colors");
const dotnev = require("dotenv");
const path = require("path");

//dotenv config
dotnev.config();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get("/", (req,res) => {

    res.status(200).send({
       message:"server running",
    });
});


//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

//port
const port = process.env.PORT || 5000

//listen post
app.listen(port, () => {
  console.log(`Server Running on port ${process.env.PORT}`
  .bgCyan.white
  );
});
