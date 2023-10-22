import { expectType } from 'ts-expect'

/**
 * @template {any[]} T, U
 * @param {(...args: T) => U} func
 * @returns {(...args: T) => { type: 'success', result: U } | { type: 'failure', error: Error }}
 */
const makeSafe =
  (func) =>
  (...args) => {
    try {
      /** @type U */
      const result = func(...args)

      return {
        type: 'success',
        result,
      }
    } catch (e) {
      return {
        type: 'failure',
        error: new Error(),
      }
    }
  }

const fun1 = makeSafe(() => 1)
const result1 = fun1()

expectType(result1)

/**
 * @param {number} a
 * @param {number} b
 */
const _fun2 = (a, b) => {
  if (a > b) return '1 > 2'
  throw new Error('error')
}
const fun2 = makeSafe(_fun2)
const result2 = fun2(1, 2)

expectType(result2)

/**
 * @param {number} a
 * @param {number} b
 */
const _fun3 = (a, b) => {
  return `${a} ${b}`
}
const fun3 = makeSafe(_fun3)

const result3 = fun3(1, 2)

expectType(result3)
