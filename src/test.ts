export function superAmazingFunction (input: number): number {
  return input / 2;
}

export function madSetThing (numbers: number[]): boolean {
  let numberSet = new Set(numbers);
  return numbers.length === numberSet.size;
}