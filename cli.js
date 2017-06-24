var WeatherAdmin = require("./WeatherAdmin");

var userType = process.argv[2];

var MyAdmin = new WeatherAdmin();

if(userType === "user"){
    var name = process.argv[3];
    var place = process.argv[4];
    MyAdmin.newSearch(name, place);

}
else if(userType === "admin"){
    MyAdmin.getData();
}