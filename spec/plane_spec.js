describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be flying upon creation", function(){
    expect(plane.isFlying).toBe(true);
  });

  it("should respond to land", function() {
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it("should respond to take off", function() {
    plane.takeOff();
    expect(plane.isFlying).toBe(true);
  });













});