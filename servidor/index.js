const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());



const api = require("./src/data/guns.json");


app.get("/", (req, res) =>{
    res.send(api);
});



app.listen(8080, () =>{
    console.log("Porta rodando na 8080");
})