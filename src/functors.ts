import * as R from "ramda";

const FIZZ = "Fizz";
const BUZZ = "Buzz";

function IdentityFunctor<S>(value: S) {
  return {
    value,
    map: <U>(fn: (s: S) => U) => IdentityFunctor(fn(value)),
    valueOf: () => value,
  };
}

const appendIfMultipleOf = R.curry(function (stringToAppend: string, m: number, n: number, s: string): string {
  if (n % m === 0) {
    return (s += stringToAppend);
  }
  return s;
});

function returnNOtherwise(n: number) {
  return function (s: string): string {
    if (s == "") {
      return "" + n;
    }
    return s;
  };
}

export function internalFizzBuzz(n: number): string {
  return IdentityFunctor("")
    .map(appendIfMultipleOf(FIZZ)(3)(n))
    .map(appendIfMultipleOf(BUZZ)(5)(n))
    .map(returnNOtherwise(n))
    .valueOf();
}

export function fizzBuzz(n: number): string[] {
  return [...Array(n)].map((_, i) => i + 1).map(internalFizzBuzz);
}
