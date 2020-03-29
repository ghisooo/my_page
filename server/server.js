const express = require("express");
const path = require("path");
const app = express();

//TODO: These will be removed later.
// const cors = require("cors"); 
// const bodyParser = require("body-parser");
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) =>{
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
})

//TODO: It will be removed later.
// app.post("/",(req,res)=>{
//   const v ={
//     test : req.body.test
//   }
//   console.log(v);
//   res.send({message:"all good"});
// })

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log("Server is running on " + port);
});