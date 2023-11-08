export type ReturnWhatIPassIn<T> = T

export type One = ReturnWhatIPassIn<1>

export type Matt = ReturnWhatIPassIn<'matt'>

export type ReturnBothOfWhatIPassin<T, U> = { a: T; b: U }

export interface Params<T, U> {
  a: T
  b: U
}

export interface User {
  firstName: string
  lastName: string
}

export type CreateSet<T = string> = Set<T>

export type Result = CreateSet

export type Person = {
  name: string
  age: number
  birthdate: Date
}

export interface Cache<T> {
  get: (key: string) => T | undefined
  set: (key: string, value: T) => void
  clone: <U>(transform: (elem: T) => U) => Cache<U>
}
