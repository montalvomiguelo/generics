/**
 * @template T
 * @param {string} url
 * @returns {Promise<T>}
 */
async function fetchData(url) {
  const data = await fetch(url).then((response) => response.json())
  return data
}

/**
 * @type {{name: string}}
 */
const data = await fetchData('https://jsonplaceholder.typicode.com/users/1')

export { data }
