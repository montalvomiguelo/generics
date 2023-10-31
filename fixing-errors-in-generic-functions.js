import { expectType } from 'ts-expect'

/**
 * @template {keyof import('./types').Person} T
 * @param {T} key
 * @param {import('./types').Person[T]} value
 * @returns {import('./types').Person[T]}
 */
export function remapPerson(key, value) {
  if (key === 'birthdate') {
    /** @type {any} */
    const date = new Date()
    return date
  }

  return value
}

const date = remapPerson('birthdate', new Date())
const num = remapPerson('age', 42)
const name = remapPerson('name', 'John Doe')

expectType(date)
expectType(num)
expectType(name)
