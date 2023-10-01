const fetchData = async <T>(url: string) => {
  const data: T = await fetch(url).then((response) => response.json())
  return data
}

const data = await fetchData<{ name: string }>(
  'https://jsonplaceholder.typicode.com/users/1'
)

export { data }
