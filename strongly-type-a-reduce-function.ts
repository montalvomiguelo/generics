import { expectType } from 'ts-expect'

const array = [
  {
    name: 'John',
  },
  {
    name: 'Steve',
  },
]

const obj = array.reduce<Record<string, { name: string }>>((accum, item) => {
  accum[item.name] = item
  return accum
}, {})

expectType<Record<string, { name: string }>>(obj)
