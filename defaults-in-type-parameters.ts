import { expectType } from 'ts-expect'

export const createSet = <T = string>() => {
  return new Set<T>()
}

const numberSet = createSet<number>()
const stringSet = createSet<string>()
const otherStringSet = createSet()

expectType<Set<number>>(numberSet)
expectType<Set<string>>(stringSet)
expectType<Set<string>>(otherStringSet)
