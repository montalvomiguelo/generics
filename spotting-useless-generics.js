import { expectType } from 'ts-expect'

/**
 * @template {{ a: unknown, b: unknown }} T
 * @param {T} params
 * @returns {[T['a'], T['b']]}
 */
const returnBothOfWhatIPassIn = (params) => {
  return [params.a, params.b]
}

const result = returnBothOfWhatIPassIn({
  a: 'a',
  b: 1,
})

expectType(result)
