import { expectType } from 'ts-expect'

/**
 * @template T
 * @param {string} url
 */
async function fetchData(url) {
  /** @type {T} */
  const data = await fetch(url).then((response) => response.json())
  return data
}

/**
 * @type {{name: string}}
 */
const data = await fetchData('https://jsonplaceholder.typicode.com/users/1')

expectType(data)
