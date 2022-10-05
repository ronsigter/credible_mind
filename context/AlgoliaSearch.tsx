import AlgoliaClient from 'lib/algoliaService'
import { SearchBox, InstantSearch } from 'react-instantsearch-hooks-web'

export const AlgoliaSearch: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <InstantSearch searchClient={AlgoliaClient} indexName='dev_news'>
      {children}
    </InstantSearch>
  )
}
