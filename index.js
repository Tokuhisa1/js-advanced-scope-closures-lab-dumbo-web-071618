function produceDrivingRange(range) {
  // Returns a function that then calculates whether a given trip is within
  // range
  return function(start, end) {
    const distance = parseInt(end) - parseInt(start);
    const deviation = Math.abs(distance - range);

    if (distance > range) {
      return `${deviation} blocks out of range`;
    }

    if (distance < range) {
      return `within range by ${deviation}`
    }
  }
}

function produceTipCalculator(percent) {
  // Returns a function that then calculates a tip
  return function(total) {
    return percent * total;
  }
}

function createDriver() {
  // Returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
  let driverId = 0;
  return function Driver(name) {
    this.id = ++driverId;
    this.name = name;
  }
}
