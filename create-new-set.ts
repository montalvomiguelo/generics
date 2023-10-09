import { expectType } from 'ts-expect'

export const createSet = <T>() => {
  return new Set<T>()
}

const stringSet = createSet<string>()
const numberSet = createSet<number>()
const unknownSet = createSet()

expectType<Set<string>>(stringSet)
expectType<Set<number>>(numberSet)
expectType<Set<unknown>>(unknownSet)
