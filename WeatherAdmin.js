var weather = require("weather-js");
var inquirer = require("inquirer");

var fs = require("fs");

var WeatherAdmin = function(){
    this.again = function(){
        inquirer.prompt([{
            type:"confirm",
            name:"again",
            message:"wanna go again?"
        }]).then(function(answers){
            if (answers.again){
                promptUser();
            }
        })
    };
    this.getData = function(){
        fs.readFile("log.txt", "utf-8", function(err, data){
            if(err){
                console.log(err);
            }
            console.log(data);
        })
        this.again();
    };
    this.newSearch = function(name, place){
        weather.find({search: place, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
            console.log(JSON.stringify(result, null, 2));
            var logInfo = name+": "+place+" "+result[0].current.date+" \n";
            fs.appendFile("log.txt", logInfo); 
            this.again();
        });
    };

}



 module.exports=WeatherAdmin;  
