import { writable } from 'svelte/store';

export const inscribedSides = writable(6);
export const circumscribedSides = writable(4);
export const isCircumscribedAngleOffset = writable(true);
export const isShapeFillVisible = writable(true);
export const isCircleVisible = writable(true);
export const isInscribedVisible = writable(true);
export const isInscribedSegmentsVisible = writable(false);
export const isCircumscribedVisible = writable(true);
export const isCircumscribedSegmentsVisible = writable(false);
