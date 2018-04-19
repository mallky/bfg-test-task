const currentDate = new Date;

const getURL = (fromDate = 1514764800000, toDate = currentDate) => {
  return `https://api.stackexchange.com/2.2/questions?pagesize=100&fromdate=${Math.round(+fromDate / 1000)}&todate=${Math.round(+toDate / 1000)}&order=desc&sort=votes&tagged=react-redux&site=stackoverflow`;
};

const getData = (fromDate, addData) => {
  fetch(getURL(fromDate))
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const neededData = data.items.filter((item) => {

        return /react-redux/i.test(item.title);
      });
      addData(neededData);
    });
};

export default {
  currentDate,
  getData
};
