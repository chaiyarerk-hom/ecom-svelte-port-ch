import { writable } from "svelte/store";

function createCart() {
    const { subscribe, set, update } = writable(0);
    return {
        subscribe,
        increment: (addValue: number) => update(n => n + addValue),
        decrement: (minusValue: number) => update(n => n - minusValue),
        set: (value: number) => set(value),
        reset: () => set(0)
    };
}

export const countCart = createCart();