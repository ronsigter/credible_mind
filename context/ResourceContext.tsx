import { useGetArticles } from 'hooks'
import { createContext, useContext, useMemo } from 'react'
import { Article, IndexParams } from 'types'

type ResourceContextProps = {
  loading: boolean
  articles: Article[]
  indexDetails: IndexParams
  searchResource: (term: string) => void
}

const ResourceContext = createContext<ResourceContextProps>({
  loading: false,
  articles: [],
  indexDetails: {
    currentPage: 0,
    totalArticles: 0,
    totalPages: 0,
  },
  searchResource: () => {},
})

export const ResourceContextProvider: React.FC = ({ children }) => {
  const articleHook = useGetArticles()

  const value = {
    ...articleHook,
  }

  return (
    <ResourceContext.Provider value={value}>
      {children}
    </ResourceContext.Provider>
  )
}

export const useResourceContext = (): ResourceContextProps =>
  useContext(ResourceContext)
