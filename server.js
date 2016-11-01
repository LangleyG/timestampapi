var express = require("express");
var app = express();

app.get("/", function(request, resource){
    resource.send("Hello World!");
})

app.listen(8080, function(){
    console.log("example app listening on port 8080");
})