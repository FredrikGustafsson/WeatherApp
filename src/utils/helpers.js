function convertTemp (kelvin) {
  return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10)
}

function getDate (unixTimestmap) {
    const date = new Date(unixTimestmap * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "-" + month + "-" + day;
}

export default {
  convertTemp: convertTemp,
  getDate: getDate
};