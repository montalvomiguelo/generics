import { expectType } from 'ts-expect'

export function returnWhatIPassIn<T>(arg: T): T {
  return arg
}

const one = returnWhatIPassIn(1)
const matt = returnWhatIPassIn('matt')

expectType<1>(one)
expectType<'matt'>(matt)
