/**
 * @template {string} T,U
 * @param {T} a
 * @param {U} b
 */
export function returnBothOfWhatIPassIn(a, b) {
  return {
    a,
    b,
  }
}

returnBothOfWhatIPassIn('a', 1)
