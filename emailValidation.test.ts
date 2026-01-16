const { isEMailValid } = require ("./emailValidation");

describe("Email validation", () => {
    test("Valid email", () => {
        expect(isEMailValid("abc@test.com")).toBe(true);
    });

    test("Missing the @", () => {
        expect(isEMailValid("abctest.com")).toBe(false);
    });

    test("Missing the .", () => {
        expect(isEMailValid("abc@testcom")).toBe(false);
    });

    test("End with the .", () => {
        expect(isEMailValid("abc@test.")).toBe(false);
    });

    test("Contains space ", () => {
        expect(isEMailValid("abc @test.com")).toBe(false);
    });

    test("Nothing before the @", () => {
        expect(isEMailValid("@test.com")).toBe(false);
    });

    test("Nothing after the @", () => {
        expect(isEMailValid("abc@")).toBe(false);
    });
})