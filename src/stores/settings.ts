import { writable } from 'svelte/store';

export const inscribedSides = writable(6);
export const circumscribedSides = writable(4);
export const offsetCircumscribed = writable(true);
export const fillShapes = writable(true);
export const showCircle = writable(true);
export const showInscribed = writable(true);
export const showInscribedSegments = writable(false);
export const showCircumscribed = writable(true);
export const showCircumscribedSegments = writable(false);
