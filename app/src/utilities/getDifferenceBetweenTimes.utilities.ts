import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns'

const checkIsPlural = (time: number) => (time > 1 ? 's' : '')

export const getDifferenceBetweenTimes = (timestamps: number) => {
  const date1 = new Date(timestamps * 1000)
  const date2 = new Date()

  const units = {
    year: differenceInYears(date2, date1),
    month: differenceInMonths(date2, date1) % 12,
    week: differenceInWeeks(date2, date1) % 4,
    day: differenceInDays(date2, date1) % 7,
    hour: differenceInHours(date2, date1) % 24,
    minute: differenceInMinutes(date2, date1) % 60,
    second: differenceInSeconds(date2, date1),
  }

  for (const [unit, value] of Object.entries(units)) {
    if (value > 0) {
      return `${value} ${unit}${checkIsPlural(value)}`
    }
  }

  return '0 seconds'
}
