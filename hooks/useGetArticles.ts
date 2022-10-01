import { useCallback, useEffect, useState } from 'react'
import AlgoliaClient from 'lib/algoliaService'
import type { Article, IndexParams } from 'types'

type UseGetArticles = {
  loading: boolean
  articles: Article[]
  indexDetails: IndexParams
  searchResource: (term: string) => Promise<void>
}

export const useGetArticles = (): UseGetArticles => {
  const [loading, setLoading] = useState<boolean>(false)
  const [articles, setArticles] = useState<Article[]>([])
  const [indexDetails, setIndexDetails] = useState<IndexParams>({
    totalArticles: 0,
    totalPages: 0,
    currentPage: 0,
  })

  const searchResource = useCallback(async (term: string): Promise<void> => {
    const index = AlgoliaClient.initIndex('dev_news')

    try {
      const articles = await index.search<Article>(term)
      setIndexDetails({
        totalArticles: articles.nbHits,
        totalPages: articles.nbPages,
        currentPage: articles.page,
      })
      setArticles(articles?.hits || [])
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    setLoading(true)
    searchResource('')
  }, [searchResource])

  return {
    loading,
    articles,
    indexDetails,
    searchResource,
  }
}
