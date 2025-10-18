import { Language } from '@shared-types/index';

import config from '@config/index';

export const formatDate = (dateStr: string, language: string, withoutMonth?: boolean): string => {
  const isKazakh = language === Language.KZ;
  const date = new Date(dateStr);
  const month = withoutMonth
    ? null
    : isKazakh
    ? config.monthsInKazakh[date.getMonth()].slice(0, 3)
    : date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return month ? `${month} ${year}` : year.toString();
};
