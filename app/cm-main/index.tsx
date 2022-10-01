import { Field } from 'contentful'
import { Dashboard } from 'layout'
import { Main } from './Main'

type MainContainerProps = {
  fields: Field[]
}

const MainContainer: React.FC<MainContainerProps> = ({ fields }) => (
  <Dashboard>
    <Main fields={fields} />
  </Dashboard>
)

export default MainContainer
