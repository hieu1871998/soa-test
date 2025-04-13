import { type ClassValue } from 'tailwind-variants';

/**
 * This Typescript utility transform a list of slots into a list of {slot: classes}.
 *
 * Taken from `@heroui`.
 */
export type SlotsToClasses<S extends string> = Partial<Record<S, Exclude<ClassValue, 0n>>>;
