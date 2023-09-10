export type ReturnWhatIPassIn<T> = T
export type One = ReturnWhatIPassIn<1>
export type Matt = ReturnWhatIPassIn<'matt'>
export type ReturnBothOfWhatIPassin<T, U> = { a: T; b: U }
