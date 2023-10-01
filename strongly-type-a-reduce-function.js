const array = [
  {
    name: 'John',
  },
  {
    name: 'Steve',
  },
]

/** type {Record<string, { name: string }>} */
const acc = {}
const obj = array.reduce((accum, item) => {
  accum[item.name] = item
  return accum
}, acc)
