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

};

function calculateVertical(beginning, destination) {
  return Math.abs((beginning - destination) * 264)
};
