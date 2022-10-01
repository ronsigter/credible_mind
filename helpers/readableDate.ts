import { format } from 'date-fns'

export const readableDate = (date: string | undefined): string => {
  if (!date) return '---'
  return format(new Date(date), 'LLL II, yyyy')
}
