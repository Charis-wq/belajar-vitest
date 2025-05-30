import { describe, it, expect } from 'vitest';

describe('slow test', () => {
    it.concurrent("shoul pass",async () => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        expect(1).toBe(1);
    });
        it.concurrent("shoul pass 2",async () => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        expect(2).toBe(2);
    });
        it.concurrent("shoul pass 3",async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        expect(3).toBe(3);
    });
});