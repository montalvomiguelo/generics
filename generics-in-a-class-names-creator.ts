import { expectType } from 'ts-expect'

const createClassNamesFactory =
  <T extends Record<string, string>>(classes: T) =>
  (type: keyof T, ...otherClasses: string[]) => {
    const classList = [classes[type], ...otherClasses]
    return classList.join(' ')
  }

const getBg = createClassNamesFactory({
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
})

expectType<string>(getBg('primary'))
