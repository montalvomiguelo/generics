import { expectType } from 'ts-expect'

const typedObjectKeys = <T extends string>(obj: Record<T, number>) => {
  return Object.keys(obj) as Array<T>
}

const result = typedObjectKeys({ a: 1, b: 2 })

expectType<Array<'a' | 'b'>>(result)
