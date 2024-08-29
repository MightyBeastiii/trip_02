import  dayjs  from "dayjs";

export function formatDate(date) {
  return dayjs(date).format('MM月DD日')
}

export function formatDateDot(date) {
  return dayjs(date).format('MM.DD')
}

export function getDiffDay(startDay, endDay) {
  return dayjs(endDay).diff(startDay,'day')
}