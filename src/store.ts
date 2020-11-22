import { writable } from 'svelte/store';

export const selectedCards = writable([]);
export const userCards = writable([]);
export const nickname = writable('');