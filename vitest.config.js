import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        dir: "tests",
        // Enable global variables in tests to simplify test setup and usage
        globals: true,
        coverage: {
            provider: "istanbul",
        }
    }
})