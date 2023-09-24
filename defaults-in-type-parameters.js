/**
 * @template [T=string]
 * @returns {Set<T>}
 */
export function createSet() {
  return new Set()
}

/** @type {Set<number>} */
const numberSet = createSet()
/** @type {Set<string>} */
const stringSet = createSet()
const otherStringSet = createSet()
