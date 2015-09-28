describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should have an aircraft count of 0 upon creation", function(){
    expect(airport.aircraftCount.length).toEqual(0);
  });



});