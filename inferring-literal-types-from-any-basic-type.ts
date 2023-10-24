import { expectType } from 'ts-expect'

export const inferItemLiteral = <T extends number | string>(t: T) => {
  return {
    output: t,
  }
}

const result1 = inferItemLiteral('a')
const result2 = inferItemLiteral(123)

expectType<{ output: 'a' }>(result1)
expectType<{ output: 123 }>(result2)
