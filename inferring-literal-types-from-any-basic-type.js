import { expectType } from 'ts-expect'

/**
 * @template {string | number} T
 * @param {T} t
 */
export const inferItemLiteral = (t) => {
  return {
    output: t,
  }
}

const result1 = inferItemLiteral('a')
const result2 = inferItemLiteral(123)

expectType(result1)
expectType(result2)
