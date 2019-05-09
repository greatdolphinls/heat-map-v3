const tempData = [
  {title: 'EUR', down: 34.5, up: 60.8, value: 42.8},
  {title: 'JPY', down: 34.5, up: 60.8, value: 69.5},
  {title: 'GBP', down: 34.5, up: 60.8, value: 56.1},
  {title: 'CAD', down: 34.5, up: 60.8, value: 89.3},
  {title: 'AUD', down: 34.5, up: 60.8, value: 21.2},
  {title: 'NZD', down: 34.5, up: 60.8, value: 52.5},
  {title: 'CHF', down: 34.5, up: 60.8, value: 48.9},
  {title: 'USD', down: 34.5, up: 60.8, value: 68.5}
];

const getRandomValue = () => {
  return Math.floor(Math.random() * 1000) * 0.1;
}

const getTempData = () => {
  const result = tempData.map(data => ({
    title: data.title,
    down: getRandomValue(),
    up: getRandomValue(),
    value: getRandomValue()
  }));
  return result;
};

export {
  tempData,
  getTempData
};