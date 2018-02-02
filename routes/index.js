var express = require("express");
var router  = express.Router();


//index
router.get("/", function (request, response) {
  response.sendFile('/app/views/index.html');
});


//query date
router.get("/:date", function (req, res) {
  
  var timestampValue = parseInt(req.params.date);
  var dtObj = {unix: null, natural: null};

  //Is date a number?
  if(!isNaN(timestampValue)){
    //convert to natural language
    
    var options = { month: 'long', day: 'numeric', year: 'numeric'};
    //"January 2, 2018"
    var dt = new Date(timestampValue*1000);    
    //send as response both of them (natural and unix) in a objetc.
    dtObj = {
      unix: timestampValue,
      natural: dt.toLocaleDateString('en-US', options)
    };     
   
  }else{
    //check if it's a date in a natural language
    //December%2015,%202015
    var dateString = decodeURIComponent(req.params.date);  
    
    //If so, convert it to unix timestamp
    var unixDate = Date.parse(dateString);   
    
    if(unixDate){
      dtObj = {
        unix: unixDate.toString().slice(0,10),
        natural: dateString
      };
    }
  }
  
  res.send(dtObj);
  
});


module.exports = router;