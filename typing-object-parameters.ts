import { expectType } from 'ts-expect'

export function returnBothOfWhatIPassIn<T, U>(params: { a: T; b: U }) {
  return {
    first: params.a,
    second: params.b,
  }
}

const result = returnBothOfWhatIPassIn({ a: 'a', b: 1 })

expectType<{ first: string; second: number }>(result)
