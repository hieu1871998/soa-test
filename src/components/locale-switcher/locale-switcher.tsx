'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { Switch } from 'react-aria-components';

export const LocaleSwitcher = () => {
	const locale = useLocale();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	const handleChange = (value: boolean) => {
		const nextLocale = value ? 'fr' : 'en';

		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	};

	const isSelected = locale === 'fr';

	return (
		<Switch
			className='group flex items-center gap-1 rounded-full text-sm text-white uppercase disabled:opacity-50 md:ml-auto'
			isSelected={isSelected}
			onChange={handleChange}
			isDisabled={isPending}
		>
			en
			<div className='flex h-4 w-7 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-white px-px shadow-inner transition duration-200 ease-in-out'>
				<span className='bg-primary group-selected:translate-x-[100%] h-3 w-3 transform rounded-full shadow-xs outline-transparent transition duration-200 ease-in-out' />
			</div>
			fr
		</Switch>
	);
};
