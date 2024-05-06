import { type VariantProps, tv } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-token',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/90',
			primary:
				'text-on-primary-token bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-400',
			secondary:
				'text-on-secondary-token bg-secondary-500 hover:bg-secondary-700 dark:hover:bg-secondary-400',
			tertiary:
				'text-on-tertiary-token bg-tertiary-500 hover:bg-tertiary-700 dark:hover:bg-tertiary-400',
			success:
				'text-on-success-token bg-success-500 hover:bg-success-700 dark:hover:bg-success-400',
			warning:
				'text-on-warning-token bg-warning-500 hover:bg-warning-700 dark:hover:bg-warning-400',
			error: 'text-on-error-token bg-error-500 hover:bg-error-700 dark:hover:bg-error-400',
			surface:
				'text-on-surface-token bg-surface-500 hover:bg-surface-700 dark:hover:bg-surface-400',
			outline:
				'border border-surface-500-400-token bg-inherit hover:bg-surface-300/80 dark:hover:bg-surface-500/80',
			ghost: 'bg-inherit hover:bg-surface-300/80 dark:hover:bg-surface-500/80',
			link: 'text-inherit underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10 aspect-square'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
