var gallonsToLiters = function(gallons) {
  return gallons * 3.785;
}

var gallons = parseFloat(prompt("Gallons:"));
alert(gallons + " gallons is equal to " + gallonsToLiters(gallons) + " liters");

var tableToTea = function(tablespoons){
  return tablespoons * 3;
}
var tablespoons = parseFloat(prompt("Tablespoons:"));
alert(tablespoons + " Tablespoons is equal to " + tableToTea(tablespoons) + " teaspoons ");
