import { writable } from 'svelte/store';

export const inscribedSides = writable(6);
export const circumscribedSides = writable(4);
export const offsetCircumscribed = writable(true);