import { fetcher } from './fetcher';
import { Pages } from './types';

export const getPages = (locale: 'en' | 'fr') => {
	return fetcher<Pages[]>(`http://api.test.soa-dev.net/api/v1/pages?lang=${locale}`);
};
