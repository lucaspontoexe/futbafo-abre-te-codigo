import { writable } from 'svelte-persistent-store/dist/session';

// export const selectedCards = writable([]);
export const userCards = writable('cards', []);
export const nickname = writable('nick', '');
export const bonusCard = writable('bonus_card', '');