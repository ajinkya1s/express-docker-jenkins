var express =  require("express");
var empsRouter = require("./routes/product");

var app =  express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/product", empsRouter);

app.listen(9898,'0.0.0.0', ()=>{
    console.log("Server Started on 9898..");
});