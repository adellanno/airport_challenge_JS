function Airport() {
  this.aircraftCount = [];
  this.capacity = 20;
};

Airport.prototype.landPlane = function(plane) {
  if (this.weather() == "stormy") {
    throw "stormy!";
  }
  else if (this.fullCapacity()) {
    throw "Airport at full capacity!";
  }
  else {
    this.aircraftCount.push(plane);
  }
};

Airport.prototype.takeOffPlane = function(plane) {
  this.aircraftCount.pop(plane);
};

Airport.prototype.weather = function() {
  if (Math.random() > 0.5) {
    return "sunny";
  }
    return "stormy";
};

Airport.prototype.fullCapacity = function() {
  if (this.aircraftCount.length >= this.capacity) {
    return true;
  }
    return false;
};

  // console.log(this);
