import { useCallback, useEffect, useState } from 'react'
import AlgoliaClient from 'lib/algoliaService'
import type { Article, IndexParams } from 'types'

export const useGetArticles = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [articles, setArticles] = useState<Article[]>([])
  const [indexDetails, setIndexDetails] = useState<IndexParams>({
    totalArticles: 0,
    totalPages: 0,
    currentPage: 0,
  })

  const listArticles = useCallback(async () => {
    const index = AlgoliaClient.initIndex('credible_mind')

    try {
      const articles = await index.search<Article>('')
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
    listArticles()
  }, [listArticles])

  return {
    loading,
    articles,
    indexDetails,
  }
}
