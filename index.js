function distanceFromHqInBlocks(pickup) {
  if (pickup >= 42)
  {return pickup - 42}
  else if (pickup < 42)
  {return 42 - pickup}
};

function distanceFromHqInFeet(pickup) {
  const distance = distanceFromHqInBlocks(pickup);
  return distance * 264;
};

function distanceTravelledInFeet(starting, ending) {
  return calculateVertical(starting, ending);
};

function calculatesFarePrice(start, destination) {
  const distance = calculateVertical(start, destination);
  if (distance < 400) {
    return 'This trip is free.'
  }
  else if (distance > 400 && distance < 2000) {
    return distance * .02
  }
};

function calculateVertical(beginning, destination) {
  return Math.abs((beginning - destination) * 264)
};
