export const fetchOpenAlexWork = async (id: string) => {
  const response = await fetch(`https://api.openalex.org/works/W${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data from OpenAlex API')
  }
  const data = await response.json()
  return data
}

export const fetchOpenAlexWorks = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch data from OpenAlex API')
  }
  const data = await response.json()
  return data.results
}

export const fetchOpenAlexAuthor = async (id: string) => {
  const response = await fetch(`https://api.openalex.org/people/A${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data from OpenAlex API')
  }
  const data = await response.json()
  return data
}
