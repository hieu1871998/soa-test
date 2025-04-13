import { cn } from '@/utils/cn';
import { SlotsToClasses } from '@/utils/types';
import {
	TextField as AriaTextField,
	TextFieldProps as AriaTextFieldProps,
	composeRenderProps,
	ValidationResult,
} from 'react-aria-components';
import { tv, VariantProps } from 'tailwind-variants';
import { Description, FieldError, Input, Label } from '../field';

const textFieldVariants = tv({
	slots: {
		root: 'group flex items-center gap-2',
		label: '',
		input:
			'focus:border-primary disabled:text-calendar-cell-disabled-foreground disabled:bg-calendar-cell-disabled disabled:border-calendar-cell-disabled-border',
	},
	// variants: {
	// 	isFocused: {
	// 		true: {
	// 			input: fieldBorderVariants.variants.isFocusWithin.true,
	// 		},
	// 	},
	// 	isInvalid: {
	// 		true: {
	// 			input: fieldBorderVariants.variants.isInvalid.true,
	// 		},
	// 	},
	// 	isDisabled: {
	// 		true: {
	// 			input: fieldBorderVariants.variants.isDisabled.true,
	// 		},
	// 	},
	// },
});

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;
export type TextFieldSlots = keyof ReturnType<typeof textFieldVariants>;
export type TextFieldClassNames = SlotsToClasses<TextFieldSlots>;

export interface TextFieldProps extends AriaTextFieldProps, TextFieldVariants {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
	placeholder?: string;
	classNames?: TextFieldClassNames;
}

export function TextField({ label, description, errorMessage, placeholder, classNames, ...props }: TextFieldProps) {
	const { input, label: labelStyles, root } = textFieldVariants();

	return (
		<AriaTextField
			{...props}
			className={composeRenderProps(props.className, className => root({ className: cn(className, classNames?.root) }))}
		>
			{label && <Label className={labelStyles({ className: classNames?.label })}>{label}</Label>}
			<Input
				className={input({})}
				placeholder={placeholder}
			/>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaTextField>
	);
}
