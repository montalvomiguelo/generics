import { expectType } from 'ts-expect'

function youSayGoodbyeISayHello<T extends 'hello' | 'goodbye'>(greeting: T) {
  return (greeting === 'goodbye' ? 'hello' : 'goodbye') as T extends 'hello'
    ? 'goodbye'
    : 'hello'
}

expectType<'goodbye'>(youSayGoodbyeISayHello('hello'))
expectType<'hello'>(youSayGoodbyeISayHello('goodbye'))
