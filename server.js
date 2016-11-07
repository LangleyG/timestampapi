var express = require("express");
var app = express();
var moment = require("moment");
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.get("/:input", function(request, resource){
    var theDate;
    if(parseFloat(request.params.input)){
        theDate = moment(request.params.input, "X");
    }else{
        theDate = moment(request.params.input, "MMMM D, YYYY");
    }
    
    if(theDate.isValid()){
        resource.json({unix: theDate.format("X"), natural: theDate.format("MMMM D, YYYY")});
    }else{
        resource.json({unix: null, natural: null});
    }
});

app.listen(port, function(){
    console.log("example app listening on port "+ port);
})