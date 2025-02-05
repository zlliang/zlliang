import { format as defaultFormat } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export const format: typeof defaultFormat = (date, formatStr, options) => {
  return defaultFormat(date, formatStr, { locale: options?.locale || zhCN })
}
