function Airport() {
  this.aircraftCount = [];
};

Airport.prototype.landPlane = function(plane) {
  if (this.weather == "sunny" ) {
    this.aircraftCount.push(plane);
  } else {
    throw "sunny!";
  }
};

Airport.prototype.takeOffPlane = function(plane) {
  this.aircraftCount.pop(plane);
};

Airport.prototype.weather = function() {
  this.weather =  Random(100) > 2 ? "sunny" : "stormy";
};