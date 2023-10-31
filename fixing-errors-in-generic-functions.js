import { expectType } from 'ts-expect'

/** @typedef {import('./types').Person} Person */

/**
 * @template {keyof Person} T
 * @param {T} key
 * @param {Person[T]} value
 * @returns {Person[T]}
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
