import { composeTailwindRenderProps } from '@/utils/aria';
import { cn } from '@/utils/cn';
import {
	FieldErrorProps,
	Group,
	GroupProps,
	InputProps,
	LabelProps,
	FieldError as RACFieldError,
	Input as RACInput,
	Label as RACLabel,
	Text,
	TextProps,
	composeRenderProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';

export function Label(props: LabelProps) {
	return (
		<RACLabel
			{...props}
			className={cn('w-fit cursor-default text-base', props.className)}
		/>
	);
}

export function Description(props: TextProps) {
	return (
		<Text
			{...props}
			slot='description'
			className={cn('text-sm leading-normal font-normal tracking-[-0.098px] text-[#999]', props.className)}
		/>
	);
}

export function FieldError(props: FieldErrorProps) {
	return (
		<RACFieldError
			{...props}
			className={composeTailwindRenderProps(props.className, 'text-sm text-red-600 forced-colors:text-[Mark]')}
		/>
	);
}

export const fieldBorderVariants = tv({
	variants: {
		isFocusWithin: {
			false: 'border-gray-300 dark:border-zinc-500 forced-colors:border-[ButtonBorder]',
			true: 'border-gray-600 dark:border-zinc-300 forced-colors:border-[Highlight]',
		},
		isInvalid: {
			true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]',
		},
		isDisabled: {
			true: 'border-gray-200 dark:border-zinc-700 forced-colors:border-[GrayText]',
		},
	},
});

export const fieldGroupVariants = tv({
	base: 'group flex h-9 items-center overflow-hidden rounded-lg border-2 bg-white dark:bg-zinc-900 forced-colors:bg-[Field]',
	variants: fieldBorderVariants.variants,
});

export function FieldGroup(props: GroupProps) {
	return (
		<Group
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				fieldGroupVariants({ ...renderProps, className })
			)}
		/>
	);
}

export function Input(props: InputProps) {
	return (
		<RACInput
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				'border-secondary-foreground/30 shadow-primary flex min-h-10 flex-1 items-center gap-3 rounded-full border bg-white px-4 py-2 text-sm outline-0 md:gap-3 md:py-3 md:text-base'
			)}
		/>
	);
}
