// import sites from './sites'
import TochkaDostupa from './TochkaDostupa'
import Perfobufet from './Perfobufet'

import { ProjectMappedType } from './types'
import getUniqueTags from '../utils/getUniqueTags'


const projects: ProjectMappedType[] = [
  ...TochkaDostupa,
  ...Perfobufet
].map(project => ({
  ...project,
  tags: getUniqueTags(
    project.tagSections
      .map(tagSection => tagSection.tags)
      .reduce((a, b) => [...a, ...b])
  )
}))


export default projects
