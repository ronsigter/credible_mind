import { Field } from 'contentful'
import { Main } from './Main'

type MainContainerProps = {
  fields: Field[]
}

const MainContainer: React.FC<MainContainerProps> = ({ fields }) => (
  <Main fields={fields} />
)

export default MainContainer
