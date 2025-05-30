import { describe, expect, it, vi } from "vitest";

describe("mocking", () => {
    function sayHello(name: string, callback: (message: string) => void) {
        callback("Hello" + name);
    }

    it("shoul mocking test", () => {
        const callback = vi.fn();
        sayHello("Charis", callback);

        expect(callback).toBeCalledWith("HelloCharis");
    });
});