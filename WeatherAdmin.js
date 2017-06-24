var weather = require("weather-js");

var fs = require("fs");

var WeatherAdmin = function(){
    this.getData = function(){
        fs.readFile("log.txt", "utf-8", function(err, data){
            if(err){
                console.log(err);
            }
            console.log(data);
        })
    };
    this.newSearch = function(name, place){
        weather.find({search: place, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
            console.log(JSON.stringify(result, null, 2));
            var logInfo = name+": "+place+" "+result[0].current.date+" \n";
            fs.appendFile("log.txt", logInfo); 
        });
    };

}


 module.exports=WeatherAdmin;  
