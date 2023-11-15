import { expectType } from 'ts-expect'

/**
 * @template T
 * @template {keyof T} U
 * @param {T} obj
 * @param {U} key
 */
const getValue = (obj, key) => {
  return obj[key]
}

const obj = {
  a: 1,
  b: 'some-string',
  c: true,
}

const numberResult = getValue(obj, 'a')
const stringResult = getValue(obj, 'b')
const booleanResult = getValue(obj, 'c')

expectType(numberResult)
expectType(stringResult)
expectType(booleanResult)
