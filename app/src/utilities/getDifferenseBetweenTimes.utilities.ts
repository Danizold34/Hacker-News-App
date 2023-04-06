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
  const date1 = new Date(timestamps)
  const date2 = new Date()

  const diffYears = differenceInYears(date2, date1)
  const diffMonths = differenceInMonths(date2, date1) % 12
  const diffWeeks = differenceInWeeks(date2, date1) % 4
  const diffDays = differenceInDays(date2, date1) % 7
  const diffHours = differenceInHours(date2, date1) % 24
  const diffMinutes = differenceInMinutes(date2, date1) % 60
  const diffSeconds = differenceInSeconds(date2, date1)

  if (diffYears > 0) {
    return `${diffYears} year${checkIsPlural(diffYears)}`
  } else if (diffYears === 0) {
    return `${diffMonths} month${checkIsPlural(diffMonths)}`
  } else if (diffMonths === 0) {
    return `${diffWeeks} week${checkIsPlural(diffWeeks)}`
  } else if (diffWeeks === 0) {
    return `${diffDays} day${checkIsPlural(diffDays)}`
  } else if (diffDays === 0) {
    return `${diffHours} hour${checkIsPlural(diffHours)}`
  } else if (diffHours === 0) {
    return `${diffMinutes} minute${checkIsPlural(diffMinutes)}`
  } else {
    return `${diffSeconds} second${checkIsPlural(diffSeconds)}`
  }
}
