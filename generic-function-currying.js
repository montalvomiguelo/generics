import { expectType } from 'ts-expect'

/**
 * @template T
 * @param {T} t
 */
export const curryFunction =
  (t) =>
  /**
   * @template U
   * @param {U} u
   */
  (u) =>
  /**
   * @template V
   * @param {V} v
   */
  (v) => {
    return {
      t,
      u,
      v,
    }
  }

const result = curryFunction(1)(2)(3)

expectType(result)
