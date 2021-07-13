const FIZZ = "Fizz";
const BUZZ = "Buzz";

export function internalFizzBuzz(n: number): string {
  let result: string = "";

  if (isMultipleOf(3)(n)) {
    result += FIZZ;
  }

  if (isMultipleOf(5)(n)) {
    result += BUZZ;
  }

  return result || n.toString();
}

function isMultipleOf(m: number) {
  return function (n: number): boolean {
    return n % m === 0;
  };
}

export function fizzBuzz(n: number): string[] {
  return [...Array(n)].map((_, i) => i + 1).map(internalFizzBuzz);
}
