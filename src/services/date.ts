import { Language } from '@shared-types/index';

export const formatDate = (dateStr: string, language?: string): string => {
  const locale = language === Language.KZ ? 'kk-KZ' : 'default';
  const date = new Date(dateStr);
  const month = date.toLocaleString(locale, { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};
