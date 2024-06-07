import { ProjectTagType } from '../projects/types'


const getUniqueTags = (tags: ProjectTagType[]) =>
  Array.from(new Set(tags))


export default getUniqueTags
