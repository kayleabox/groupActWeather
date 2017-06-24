var WeatherAdmin = require("./WeatherAdmin");
var inquirer = require("inquirer");

var MyAdmin = new WeatherAdmin(askAgain);

function promptUser(){
    inquirer.prompt([{
        type:"list",
        name:"userType",
        message:"what type of user are you?",
        choices:["user", "admin"]
    }]).then(function(answers){
        if(answers.userType === "user"){

            inquirer.prompt([
                {
                    type:"input",
                    name:"name",
                    message:"what is your name?"
                },
                {
                    type:"input",
                    name:"place",
                    message:"where do you want the weather?"
                }
            ]).then(function(answers){
                MyAdmin.newSearch(answers.name, answers.place);
            })


        }
        else if(answers.userType === "admin"){
            MyAdmin.getData();
        }
 
        
    })


}

promptUser();

function askAgain(){
    inquirer.prompt([{
        type:"confirm",
        name:"again",
        message:"wanna go again?"
    }]).then(function(answers){
        if(answers.again){
            promptUser();
        }
    })
}