const IdentityFunctor = <S>(value: S) => {
  return {
    map: <U>(fn: (s: S) => U) => IdentityFunctor(fn(value)),
    valueOf: () => value,
  };
};

const appendIfMultipleOf = (stringToAppend: string) => (m: number) => (n: number) => (s: string): string => {
  if (n % m === 0) {
    return (s += stringToAppend);
  }
  return s;
};

const returnNOtherwise = (n: number) => (s: string): string => s || n.toString();

export function internal(n: number): string {
  return IdentityFunctor("")
    .map(appendIfMultipleOf("Fizz")(3)(n))
    .map(appendIfMultipleOf("Buzz")(5)(n))
    .map(returnNOtherwise(n))
    .valueOf();
}

export function FizzBuzz(n: number): string[] {
  return [...Array(n)].map((_, i) => i + 1).map(internal);
}
