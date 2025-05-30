import { describe,assert,expect,it } from "vitest";

function sayHello(name: string): string {
    return `Hello ${name}!`
};

describe("sayHello", () => {
    it("should return name ", () => {
        expect(sayHello("Charis")).to.be.a("string", "Hallo Charis!")
        assert.equal(sayHello("Charis"),"Hello Charis!")
    });
})