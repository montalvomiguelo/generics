import { expectType } from 'ts-expect'

/**
 * @template {'hello' | 'goodbye'} T
 * @param {T} greeting
 * @returns {T extends 'hello' ? 'goodbye' : 'hello'}
 */
function youSayGoodbyeISayHello(greeting) {
  /** @type {any} */
  const result = greeting === 'goodbye' ? 'hello' : 'goodbye'
  return result
}

expectType(youSayGoodbyeISayHello('hello'))
expectType(youSayGoodbyeISayHello('goodbye'))
