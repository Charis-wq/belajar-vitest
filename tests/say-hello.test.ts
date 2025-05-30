import { describe, expect, it } from "vitest";
import{sayHello} from "../src/say-hello";

describe("sayHello", () => {
    it(" Should Say Hello", () => {
        const result = sayHello("Charis")
        expect(result).toBe("Hello Charis")
    });
});