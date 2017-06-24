var WeatherAdmin = require("./WeatherAdmin");
var inquirer = require("inquirer");

var MyAdmin = new WeatherAdmin();

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
                //again();
            })


        }
        else if(answers.userType === "admin"){
            MyAdmin.getData();
            //again();
        }
        
    })
}

promptUser();

/*var userType = process.argv[2];

if(userType === "user"){
    var name = process.argv[3];
    var place = process.argv[4];
    MyAdmin.newSearch(name, place);

}
else if(userType === "admin"){
    MyAdmin.getData();
}*/