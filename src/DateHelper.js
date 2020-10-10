export const DAYS = [
  'CN',
  'Thứ 2',
  'Thứ 3',
  'Thứ 4',
  'Thứ 5',
  'Thứ 6',
  'Thứ 7',
];

export const getDay = (d) => DAYS[d.getDay()];

export const getDateString = (d) => (
  `${getDay(d)}, ngày ${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
);

export const diffDates = (dateThen, dateNow) => {
  const totalDays = Math.floor((dateNow - dateThen) / (24 * 60 * 60 * 1000));
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;
  return `${weeks} tuần, ${days} ngày`;
};
