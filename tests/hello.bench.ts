import {describe, expect, bench} from "vitest";

describe("Benchmarking", () => {
    function sayHello(name: string){
        return `Hello ${name}!`
    }

    bench("should return name", () => {
        const result = sayHello("Charis");
        expect(result).toBe("Hello Charis!");
    });
});