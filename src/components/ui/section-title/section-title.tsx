import { cn } from '@/utils/cn';
import { TextProps } from 'react-aria-components';
import { ClassValue } from 'tailwind-variants';

export interface SectionTitleProps extends TextProps {
	classNames?: {
		root?: ClassValue;
		title?: ClassValue;
		decoration?: ClassValue;
	};
	decorationDisabled?: boolean;
}

export const SectionTitle = ({ children, className, classNames, decorationDisabled, ...props }: SectionTitleProps) => {
	return (
		<div className={cn('flex items-center justify-center gap-10 self-stretch', className, classNames?.root)}>
			{!decorationDisabled && <Decoration className={classNames?.decoration} />}
			<h1
				{...props}
				className={cn(
					'text-primary max-w-full shrink-0 self-stretch text-center text-2xl leading-normal font-semibold text-wrap whitespace-pre-line uppercase md:text-[2rem] lg:text-[2.5rem] xl:text-[3.25rem] xl:leading-[3.75rem]',
					classNames?.title
				)}
			>
				{children}
			</h1>
			{!decorationDisabled && <Decoration className={classNames?.decoration} />}
		</div>
	);
};

const Decoration = ({ className }: { className?: ClassValue }) => {
	return <div className={cn('bg-separator border-separator h-0 w-full border md:border-2', className)} />;
};
