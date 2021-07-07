import { writable } from "svelte/store";

export const authToken = writable("");

export const rootUrl = writable("http://localhost:3000");

export const dataLog = writable([]);
