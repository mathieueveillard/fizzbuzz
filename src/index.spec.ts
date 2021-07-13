import { fizzBuzz, internalFizzBuzz } from ".";

describe("Test of internalFizzBuzz()", function () {
  describe("Should return n by default", () => {
    it("should return '2' for n = 2", () => {
      expect(internalFizzBuzz(2)).toEqual("2");
    });

    it("should return '4' for n = 4", () => {
      expect(internalFizzBuzz(4)).toEqual("4");
    });
  });

  describe("If n is a multiple of 3, return 'Fizz'", () => {
    it("should return 'Fizz' for n = 3", () => {
      expect(internalFizzBuzz(3)).toEqual("Fizz");
    });

    it("should return 'Fizz' for n = 6", () => {
      expect(internalFizzBuzz(6)).toEqual("Fizz");
    });
  });

  describe("If n is a multiple of 5, return 'Buzz'", () => {
    it("should return 'Buzz' for n = 5", () => {
      expect(internalFizzBuzz(5)).toEqual("Buzz");
    });

    it("should return 'Buzz' for n = 10", () => {
      expect(internalFizzBuzz(10)).toEqual("Buzz");
    });
  });

  describe("If n is a multiple of 3 and 5, return 'FizzBuzz'", () => {
    it("should return 'FizzBuzz' for n = 3 * 5", () => {
      expect(internalFizzBuzz(3 * 5)).toEqual("FizzBuzz");
    });

    it("should return 'FizzBuzz' for n = 3 * 5 * 2", () => {
      expect(internalFizzBuzz(3 * 5 * 2)).toEqual("FizzBuzz");
    });
  });
});

describe("Test of fizzBuzz()", function () {
  it("fizzBuzz(1) should return ['1']", function () {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  it("fizzBuzz(2) should return ['1', '2']", function () {
    expect(fizzBuzz(2)).toEqual(["1", "2"]);
  });

  it("fizzBuzz(10) should return...", function () {
    expect(fizzBuzz(10)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]);
  });
});
