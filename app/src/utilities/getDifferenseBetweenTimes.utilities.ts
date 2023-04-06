import { differenceInYears, differenceInMonths, differenceInWeeks, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns'



export const getDifferenceBetweenTimes = (timestamps: number) =>{
    const date1 = new Date(timestamps)
    const date2 = new Date()
    
    const diffYears = differenceInYears(date2, date1)
    const diffMonths = differenceInMonths(date2, date1) % 12
    const diffWeeks = differenceInWeeks(date2, date1) % 4
    const diffDays = differenceInDays(date2, date1) % 7
    const diffHours = differenceInHours(date2, date1) % 24
    const diffMinutes = differenceInMinutes(date2, date1) % 60


  
    return {

        diffYears,diffMonths,diffWeeks,diffDays,diffHours,diffMinutes
    }
}