function Plane() {
  this.isFlying = true;
}

Plane.prototype.land = function() {
  this.isFlying = false;
};

// Plane.prototype.flying = function() {
//   true;
// };

