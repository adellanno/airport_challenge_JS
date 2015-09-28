describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    spyOn(airport, 'weather').and.callThrough();
    airport.weather.and.stub();
    weather = ("sunny");
  });

  it("should have an aircraft count of 0 upon creation", function() {
    expect(airport.aircraftCount.length).toEqual(0);
  });

  it("should be able to land a plane", function() {
    airport.landPlane("plane");
    expect(airport.aircraftCount.length).toEqual(1);
  });

  it("should be able to instruct a plane to take off", function() {
    airport.landPlane("plane");
    airport.landPlane("plane");
    airport.takeOffPlane("plane");
    expect(airport.aircraftCount.length).toEqual(1);
  })

  it("should not allow a plane to land if the weather is stormy", function() {
    airport.weather.and.stub();
    weather = ("sunny");
    expect(airport.landPlane("plane")).toThrow("stormy!");
  });



});