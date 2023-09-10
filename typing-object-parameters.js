/**
 * @template T, U
 * @param {import('./types').Params<T, U>} params
 */
function returnBothOfWhatIPassIn(params) {
  return { a: params.a, b: params.b }
}

const result = returnBothOfWhatIPassIn({ a: 'a', b: 1 })
