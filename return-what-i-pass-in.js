import { expectType } from 'ts-expect'

/**
 * @template T
 * @param {T} arg
 */
export default function returnWhatIPassIn(arg) {
  return arg
}

const one = returnWhatIPassIn(1)
const matt = returnWhatIPassIn('matt')

expectType(one)
expectType(matt)
