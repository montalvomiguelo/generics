function returnWhatIPassIn<T extends string>(arg: T): T {
  return arg
}

// @ts-expect-error - this should fail
const one = returnWhatIPassIn(1)
const matt = returnWhatIPassIn('matt')
