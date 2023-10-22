import { expectType } from 'ts-expect'

const makeSafe =
  <T extends (...args: any[]) => any>(func: T) =>
  (
    ...args: Parameters<T>
  ):
    | {
        type: 'success'
        result: ReturnType<T>
      }
    | {
        type: 'failure'
        error: Error
      } => {
    try {
      const result = func(...args)

      return {
        type: 'success',
        result,
      }
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      }
    }
  }

const fun1 = makeSafe(() => 1)
const result1 = fun1()

expectType<
  | {
      type: 'success'
      result: number
    }
  | {
      type: 'failure'
      error: Error
    }
>(result1)

const fun2 = makeSafe((a: number, b: number) => {
  if (a > b) return '1 > 2'
  throw new Error('error')
})
const result2 = fun2(1, 2)

expectType<
  | {
      type: 'success'
      result: string
    }
  | {
      type: 'failure'
      error: Error
    }
>(result2)

const fun3 = makeSafe((a: number, b: number) => {
  return `${a} ${b}`
})

const result3 = fun3(1, 2)

expectType<
  | {
      type: 'success'
      result: string
    }
  | {
      type: 'failure'
      error: Error
    }
>(result3)
