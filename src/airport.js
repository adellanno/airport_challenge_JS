function Airport() {
  this.aircraftCount = [];
};

Airport.prototype.landPlane = function(plane) {
  this.aircraftCount.push(plane);
};