export function linearSearch(n1: number[], n2: number): boolean {
  for (let i = 0; i < n1.length; i++) {
    if (n1[i] === n2) {
      return true;
    }
  }
  return false;
}
console.log(linearSearch([0, 2, 59, 88], 100));
console.log(linearSearch([0, 2, 59, 88], 88));
console.log(linearSearch([2, 5, 85, 120], 2));
