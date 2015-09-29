describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.6);
  });

  it("should have an aircraft count of 0 upon creation", function() {
    expect(airport.aircraftCount.length).toEqual(0);
  });

  it("should be able to land a plane", function() {
    airport.landPlane(plane);
    expect(airport.aircraftCount.length).toEqual(1);
  });

  it("should be able to instruct a plane to take off", function() {
    airport.landPlane(plane);
    airport.landPlane(plane);
    airport.takeOffPlane(plane);
    expect(airport.aircraftCount.length).toEqual(1);
  });

  it("should not be able to land any aircraft if at full capacity", function() {
    for (i = 0; i < airport.capacity; i++) {
      airport.landPlane(plane);
    }
    expect(function(){ airport.landPlane(plane); }).toThrow("Airport at full capacity!");
  });
});

describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.4);
  });

  it("should not allow a plane to land if the weather is stormy", function() {
    expect(function(){ airport.landPlane(plane); }).toThrow("stormy!");
  });

});


