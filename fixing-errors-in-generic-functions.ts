import { expectType } from 'ts-expect'
import type { Person } from './types'

export function remapPerson<Key extends keyof Person>(
  key: Key,
  value: Person[Key]
): Person[Key] {
  if (key === 'birthdate') {
    return new Date() as Person[Key]
  }

  return value
}

const date = remapPerson('birthdate', new Date())
const num = remapPerson('age', 42)
const name = remapPerson('name', 'John Doe')

expectType<Date>(date)
expectType<number>(num)
expectType<string>(name)
