'use client';

import { PaperclipIcon } from '@/icons/paperclip';
import { Bloc2_2 } from '@/lib/types';
import { FileTrigger, FileTriggerProps } from 'react-aria-components';
import { Button } from '../button';
import { Description, Label } from '../field';

interface FilePickerProps extends FileTriggerProps {
	files: string[] | null;
	localeData?: Bloc2_2['btn_4'];
	onSelect?: (fileList: FileList | null) => void;
}

export const FilePicker = ({ files, onSelect, localeData = [], ...props }: FilePickerProps) => {
	return (
		<div className='flex gap-2'>
			<Label className='w-20'>{localeData[0]}</Label>
			<FileTrigger
				onSelect={onSelect}
				acceptedFileTypes={['application/pdf']}
			>
				<Button
					variant='secondary'
					data-hasfiles={files ? files.length > 0 : false}
					className='text-selected-file overflow-hidden rounded-none text-base font-medium'
					classNames={{
						label: 'flex flex-col md:flex-row items-start gap-1 md:gap-4',
					}}
				>
					<span className='inline-flex w-full items-center gap-1'>
						{files ? (
							<>
								<PaperclipIcon className='text-base' />
								<span className='line-clamp-1 flex-1 overflow-hidden'>{files.join(', ')}</span>
							</>
						) : (
							localeData[1]
						)}
					</span>
					<Description className='text-nowrap'>{`(*${localeData[2]})`}</Description>
				</Button>
			</FileTrigger>
		</div>
	);
};
