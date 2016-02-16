// $("#main").append("Louis Amira")

// var awesomeThoughts = "I am Louis and I am AWESOME";

// console.log(awesomeThoughts);

var name = "Louis Amira";
var role = "Product Partnerships Manager";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
