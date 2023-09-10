function returnBothOfWhatIPassIn<T extends string, U>(a: T, b: U) {
  return {
    a,
    b,
  }
}

returnBothOfWhatIPassIn('a', 1)
