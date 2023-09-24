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
type CreateSet<T = string> = Set<T>
type Result = CreateSet
