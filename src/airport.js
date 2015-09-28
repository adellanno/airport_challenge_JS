function Airport() {
  this.aircraftCount = [];
};

Airport.prototype.landPlane = function(plane) {
  this.aircraftCount.push(plane);
};

Airport.prototype.takeOffPlane = function(plane) {
  this.aircraftCount.pop(plane);
};