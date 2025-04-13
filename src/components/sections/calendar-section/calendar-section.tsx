'use client';

import { SectionTitle } from '@/components/ui/section-title';
import { SendIcon } from '@/icons/send';
import { Bloc2_2 } from '@/lib/types';
import { CalendarDate } from '@internationalized/date';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { DateValue } from 'react-aria-components';
import { Button } from '../../ui/button';
import { FilePicker } from '../../ui/file-picker';
import { TextField } from '../../ui/text-field';

// Workaround for hydration error in calendar cell.
const Calendar = dynamic(() => import('../../ui/calendar').then(mod => mod.Calendar), { ssr: false });

const disabledDates = [new CalendarDate(2025, 1, 28), new CalendarDate(2025, 1, 29), new CalendarDate(2025, 2, 4)];

export const CalendarSection = ({ data }: { data: Bloc2_2 }) => {
	const [files, setFiles] = useState<string[] | null>(null);

	const isDateUnavailable = (date: DateValue) => disabledDates.some(interval => date.compare(interval) === 0);

	const handleSelect = (fileList: FileList | null) => {
		if (fileList) {
			const files = Array.from(fileList);
			const filenames = files.map(file => file.name);

			setFiles(filenames);
		}
	};

	return (
		<section className='px-4 pt-18 pb-8 md:px-8 md:pt-20 md:pb-0 lg:pt-19.5 xl:pt-35 xl:pb-15'>
			<div className='mx-auto flex max-w-[77.5rem] flex-col gap-6'>
				<SectionTitle>{data.title}</SectionTitle>
				<Calendar
					className='w-full'
					isDateUnavailable={isDateUnavailable}
				/>
				<div className='flex flex-col gap-2'>
					<TextField
						classNames={{
							label: 'w-20',
						}}
						label={data.btn_1[0]}
						placeholder={data.btn_1[1]}
					/>
					<TextField
						classNames={{
							label: 'w-20',
						}}
						label={data.btn_2[0]}
						placeholder={data.btn_2[1]}
					/>
					<TextField
						classNames={{
							label: 'w-20',
						}}
						label={data.btn_3}
						placeholder='Entrez votre nom'
					/>
					<FilePicker
						files={files}
						localeData={data.btn_4}
						onSelect={handleSelect}
					/>
				</div>
				<div className='ml-auto grid w-full grid-cols-2 gap-4 md:w-fit'>
					<Button
						variant='reserve-secondary'
						className='border-secondary-foreground/30 border text-base md:w-40'
					>
						{data.btn_5}
					</Button>
					<Button
						variant='envoyer'
						className='md:w-40'
						rightSection={<SendIcon />}
					>
						{data.btn_6}
					</Button>
				</div>
			</div>
		</section>
	);
};
