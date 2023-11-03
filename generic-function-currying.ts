import { expectType } from 'ts-expect'

export const curryFunction =
  <T>(t: T) =>
  <U>(u: U) =>
  <V>(v: V) => {
    return {
      t,
      u,
      v,
    }
  }

const result = curryFunction(1)(2)(3)

expectType<{ t: number; u: number; v: number }>(result)
