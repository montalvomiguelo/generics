import { expectType } from 'ts-expect'

/** @template T @typedef {import('./types').Cache<T>} Cache */

/**
 * @template T
 * @param {Record<string, T>} [initialCache]
 * @returns {Cache<T>}
 */
const createCache = (initialCache) => {
  /** @type {Record<string, T>} */
  const cache = initialCache || {}

  return {
    get: (key) => cache[key],
    set: (key, value) => {
      cache[key] = value
    },
    clone: (transform) => {
      /** @type {Record<string, any>} */
      const newCache = {}

      for (const key in cache) {
        newCache[key] = transform(cache[key])
      }
      return createCache(newCache)
    },
  }
}

/** @type {Cache<number>} */
const numberCache = createCache()

numberCache.set('a', 1)
numberCache.set('b', 2)

const stringCache = numberCache.clone((elem) => {
  return String(elem)
})

const a = stringCache.get('a')

expectType(a)
