import { expectType } from 'ts-expect'

const getValue = <T, U extends keyof T>(obj: T, key: U) => {
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

expectType<number>(numberResult)
expectType<string>(stringResult)
expectType<boolean>(booleanResult)
