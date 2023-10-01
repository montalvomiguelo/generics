/**
 * @template T
 * @return {Set<T>}
 */
export const createSet = () => {
  return new Set()
}

/** @type {Set<string>} */
const stringSet = createSet()
/** @type {Set<number>} */
const numberSet = createSet()
/** @type {Set<unknown>} */
const unknownSet = createSet()
