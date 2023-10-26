import { expectType } from 'ts-expect'

/**
 * @template {Record<string, string>} T
 * @param {T} classes
 * @returns {(type: keyof T, ...otherClasses: string[]) => string}
 */
const createClassNamesFactory =
  (classes) =>
  (type, ...otherClasses) => {
    const classList = [classes[type], ...otherClasses]
    return classList.join(' ')
  }

const getBg = createClassNamesFactory({
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
})

expectType(getBg('primary'))
