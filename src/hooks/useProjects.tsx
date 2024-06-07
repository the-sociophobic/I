import { without } from 'lodash'

import projects from '../projects'
import useStore from './useStore'


const useProjects = () => {
  const { enabledTags } = useStore()
  const filteredProjects = enabledTags.length === 0 ?
    projects
    :
    projects.filter(project =>
      without(project.tags, ...enabledTags).length < project.tags.length
  )

  return filteredProjects
}


export default useProjects
