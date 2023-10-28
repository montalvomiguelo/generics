import { expectType } from 'ts-expect'

/**
 * @template {object} T
 * @param {T} obj
 * @returns {Array<keyof T>}
 */
const typedObjectKeys = (obj) => {
  /** @type any */
  const result = Object.keys(obj)
  return result
}

const result = typedObjectKeys({ a: 1, b: 2 })

expectType(result)
