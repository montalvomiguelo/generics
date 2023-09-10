/**
 * @template {string} T
 * @param {T} arg
 */
export default function returnWhatIPassIn(arg) {
  return arg
}

// @ts-expect-error - this should fail
const one = returnWhatIPassIn(1)
const matt = returnWhatIPassIn('matt')
