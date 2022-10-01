import React, { createContext, useContext } from 'react'
import { NewsConfig } from 'types'

const ContentContext = createContext<NewsConfig>({
  logo: '',
  menuLabel: '',
  searchLabel: '',
  title: '',
})

type ContentContextProviderProps = {
  children: React.ReactElement
  value: NewsConfig
}

export const ContentContextProvider: React.FC<ContentContextProviderProps> = ({
  children,
  value,
}) => {
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  )
}

export const useContentContext = (): NewsConfig => useContext(ContentContext)
