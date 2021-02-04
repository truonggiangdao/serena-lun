export const DAYS = [
  'CN',
  'Thứ 2',
  'Thứ 3',
  'Thứ 4',
  'Thứ 5',
  'Thứ 6',
  'Thứ 7',
];

const MONTH_DAYS = [
  31, // 1
  28, // 2
  31, // 3
  30, // 4
  31, // 5
  30, // 6
  31, // 7
  31, // 8
  30, // 9
  31, // 10
  30, // 11
  31, // 12
];

export const getDay = (d) => DAYS[d.getDay()];

export const getDateString = (d) => (
  `${getDay(d)}, ngày ${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
);

const dayDiff = (dateThen, dateNow) => {
  return Math.floor((dateNow - dateThen) / (24 * 60 * 60 * 1000));
}

export const diffDates = (dateThen, dateNow) => {
  const totalDays = dayDiff(dateThen, dateNow);
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;
  return `${weeks} tuần, ${days} ngày`;
};

export const diffMonths = (dateThen, dateNow) => {
  const dayThen = dateThen.getDate();
  const dayNow = dateNow.getDate();
  const monthThen = dateThen.getMonth();
  const monthNow = dateNow.getMonth();
  const monthDiff = (monthNow >= monthThen) ? (monthNow - monthThen) : ((12 - monthThen) + monthNow);
  if (dayNow >= dayThen) {
    const days = dayNow - dayThen;
    return `${monthDiff} tháng, ${days} ngày`;
  } else {
    const monthThenDays = MONTH_DAYS[monthThen];
    const days = (monthThenDays - dayThen) + dayNow;
    return `${monthDiff-1} tháng, ${days} ngày`;
  }
};
