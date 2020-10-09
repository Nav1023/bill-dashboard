
import moment from 'moment';
export const PrintLog = (...params)=>{
  return console.log(...params);
};
export const isNumeric =(num)=>{
  return !isNaN(num);
}

export const convertToTitleCase = (str) => {
  return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
};

export const convertDateToLocal = (date = '', format) => {
  // myLog('convertDateToUTC::INPUT', date);
  let dateConvert = '';
  if (moment(date).isValid()) {
    dateConvert = moment.utc(date.toString()).local().format(format);
  }
  // myLog('convertDateToUTC::OUTPUT', dateConvert);
  return dateConvert;
};