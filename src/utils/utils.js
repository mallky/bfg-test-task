const currentDate = new Date;

const getURL = (fromDate = 1514764800000, toDate = currentDate) => {
  return `https://api.stackexchange.com/2.2/questions?pagesize=100&fromdate=${Math.round(+fromDate / 1000)}&todate=${Math.round(+toDate / 1000)}&order=desc&sort=votes&tagged=react-redux&site=stackoverflow`;
};

export default {
  currentDate,
  getURL
};
