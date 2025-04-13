'use client';

import { ChevronLeftIcon } from '@/icons/chevron-left';
import { ChevronRightIcon } from '@/icons/chevron-right';
import { cn } from '@/utils/cn';
import {
	Calendar as AriaCalendar,
	CalendarGridHeader as AriaCalendarGridHeader,
	CalendarProps as AriaCalendarProps,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarHeaderCell,
	composeRenderProps,
	DateValue,
	Heading,
	Text,
	useLocale,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Button } from '../button';

const cellVariants = tv({
	slots: {
		root: 'group p-1',
		inner:
			'border-primary bg-calendar-cell text-secondary-foreground group-disabled:text-calendar-cell-disabled-foreground! group-disabled:bg-calendar-cell-disabled! group-disabled:border-calendar-cell-disabled-border! group-selected:bg-primary group-selected:text-white group-unavailable:bg-calendar-cell-unavailable group-unavailable:border-calendar-cell-unavailable-border group-unavailable:text-calendar-cell-unavailable-foreground group-unavailable:cursor-not-allowed flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-lg border p-2 group-disabled:cursor-not-allowed md:p-3 xl:px-4 xl:py-2',
	},
});

export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'visibleDuration'> {
	errorMessage?: string;
}

export const Calendar = <T extends DateValue>({ errorMessage, className, ...props }: CalendarProps<T>) => {
	const { root: cellRoot, inner: cellInner } = cellVariants({});

	return (
		<AriaCalendar
			{...props}
			className={composeRenderProps(className, className =>
				cn(
					'border-secondary-foreground/30 shadow-primary flex flex-col gap-6 rounded-2xl border p-4 md:p-6 xl:px-8',
					className
				)
			)}
		>
			<CalendarHeader />
			<CalendarGrid className='w-full border-spacing-2'>
				<CalendarGridHeader />
				<CalendarGridBody>
					{date => (
						<CalendarCell
							date={date}
							className={cellRoot({})}
						>
							<div className={cellInner({})}>
								<p className='text-center text-sm leading-5 font-semibold tracking-[-0.098px] md:text-lg lg:text-xl lg:leading-5 lg:tracking-[-0.14px] xl:leading-6'>
									{date.day.toString()}
								</p>
								<p className='text-calendar-primary group-unavailable:text-calendar-cell-unavailable-subtitle group-selected:text-white hidden w-16 text-center text-base leading-4.5 font-normal tracking-[-0.112px] group-disabled:invisible md:block lg:text-lg'>
									<span className='group-unavailable:hidden inline'>{`Libre `}</span>
									<span className='group-unavailable:inline hidden'>Occupé</span>
								</p>
							</div>
						</CalendarCell>
					)}
				</CalendarGridBody>
			</CalendarGrid>
			{errorMessage && (
				<Text
					slot='errorMessage'
					className='text-sm text-red-600'
				>
					{errorMessage}
				</Text>
			)}
		</AriaCalendar>
	);
};

export const CalendarHeader = () => {
	const { direction } = useLocale();

	return (
		<header className='flex w-full items-center justify-center gap-2 px-1'>
			<Button
				variant='ghost'
				size='icon'
				slot='previous'
				className='text-primary hover:text-white'
			>
				{direction === 'rtl' ? (
					<ChevronRightIcon
						className=''
						aria-hidden
					/>
				) : (
					<ChevronLeftIcon aria-hidden />
				)}
			</Button>
			<Heading className='text-secondary-foreground min-w-28 text-center text-base leading-6 font-medium tracking-[-0.7%]' />
			<Button
				variant='ghost'
				size='icon'
				slot='next'
				className='text-primary hover:text-white'
			>
				{direction === 'rtl' ? <ChevronLeftIcon aria-hidden /> : <ChevronRightIcon aria-hidden />}
			</Button>
		</header>
	);
};

export const CalendarGridHeader = () => {
	return (
		<AriaCalendarGridHeader>
			{day => (
				<CalendarHeaderCell className='text-secondary-foreground pb-1.5 text-sm leading-6 font-semibold tracking-[-0.098px] md:text-base'>
					{day}
				</CalendarHeaderCell>
			)}
		</AriaCalendarGridHeader>
	);
};
