import { useState, useEffect } from 'react'

const useQuickSearch = (rawQuery: string) => {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([])

  const query = rawQuery.toLowerCase().replace(/^[#>]/, '')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        if (rawQuery.startsWith('@') && rawQuery.length > 3) {
          setProjects([])
          const response = await fetch(
            `https://api.openalex.org/authors?search=${encodeURIComponent(
              query
            )}&sort=relevance_score:desc&per-page=5`
          )
          const data = await response.json()
          setUsers(data.results)
        } else if (rawQuery.length > 3) {
          setUsers([])
          const response = await fetch(
            `https://api.openalex.org/works?page=1&per-page=5&filter=default.search:${encodeURIComponent(
              query
            )}&sort=relevance_score:desc&`
          )
          const data = await response.json()
          setProjects(data.results)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (!rawQuery.startsWith('?') || rawQuery.startsWith('@')) {
      fetchData()
    } else if (rawQuery.startsWith('?')) {
      setProjects([])
      setUsers([])
    }
  }, [rawQuery, query])

  return { loading, projects, users }
}

export default useQuickSearch
