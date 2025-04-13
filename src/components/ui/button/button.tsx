'use client';

import { cn } from '@/utils/cn';
import { SlotsToClasses } from '@/utils/types';
import { Button as AriaButton, composeRenderProps, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
	slots: {
		root: 'group inline-flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-out',
		label: 'font-medium capitalize transition-all duration-300 ease-out',
		section: 'text-2xl',
		rightSection: '',
		leftSection: '',
	},
	variants: {
		variant: {
			primary: {
				root: 'bg-primary text-primary-foreground hover:bg-primary-hover gap-2 px-10 py-3',
				label: '',
			},
			secondary: { root: '' },
			reserve: {
				root: 'bg-primary hover:bg-primary-hover text-primary-foreground h-10 shrink-0 gap-2 px-4 py-2.5',
			},
			'reserve-secondary': {
				root: 'text-secondary-foreground hover:bg-secondary-hover shrink-0 gap-2 bg-white px-3 py-2 text-sm leading-4 md:px-4 md:py-2.5 md:text-base md:leading-5',
				section: 'text-base md:text-xl',
			},
			ghost: {
				root: 'hover:bg-primary bg-transparent text-xl text-white',
			},
			activity: {
				root: 'bg-secondary border-activity-border gap-2 border px-4 py-1.5 md:py-2',
				label: 'text-secondary-foreground text-sm',
				section: 'text-secondary-foreground text-xl',
			},
			envoyer: {
				root: 'bg-primary text-primary-foreground hover:bg-primary-hover gap-2 px-4 py-2',
			},
		},
		size: {
			md: {},
			sm: {},
			icon: {
				root: 'size-8 rounded-full p-1.5',
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type ButtonSlots = keyof ReturnType<typeof buttonVariants>;
export type ButtonClassNames = SlotsToClasses<ButtonSlots>;

export interface ButtonProps extends AriaButtonProps, ButtonVariants {
	classNames?: ButtonClassNames;
	rightSection?: React.ReactNode;
	leftSection?: React.ReactNode;
}

export const Button = ({
	classNames,
	variant = 'primary',
	children,
	rightSection,
	leftSection,
	size = 'md',
	...props
}: ButtonProps) => {
	const {
		root,
		label,
		section,
		rightSection: rightStyles,
		leftSection: leftStyles,
	} = buttonVariants({ variant, size });

	return (
		<AriaButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				root({ ...renderProps, className: cn(className, classNames?.root) })
			)}
			data-variant={variant}
			data-size={size}
		>
			{values => (
				<>
					{leftSection ? (
						<span className={section({ className: rightStyles({ className: classNames?.rightSection }) })}>
							{leftSection}
						</span>
					) : null}
					<span className={label({ className: classNames?.label })}>
						{typeof children === 'function' ? children(values) : children}
					</span>
					{rightSection ? (
						<span className={section({ className: leftStyles({ className: classNames?.leftSection }) })}>
							{rightSection}
						</span>
					) : null}
				</>
			)}
		</AriaButton>
	);
};
