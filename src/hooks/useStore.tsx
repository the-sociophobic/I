import { create } from 'zustand'

import { ProjectTagType } from '../projects/types'
import projects from '../projects'
import getUniqueTags from '../utils/getUniqueTags'


export type UserType = {}

export type StateType = {
  user: null | UserType
  setUser: (user: UserType) => void

  tags: ProjectTagType[]
  enabledTags: ProjectTagType[]
  setEnabledTags: (tags: ProjectTagType[]) => void
  toggleTag: (tag: ProjectTagType) => void
  enableAllTags: () => void
  
}


const useStore = create<StateType>(set => ({
  user: null,
  setUser: (user: UserType) => set({ user: user }),

  tags: getUniqueTags(
    projects.map(project => project.tags).reduce((a, b) => [...a, ...b])
  ),
  enabledTags: [],
  setEnabledTags: (tags: ProjectTagType[]) => set({ enabledTags: tags }),
  toggleTag: (tag: ProjectTagType) => set(({ enabledTags }) => ({
    enabledTags: enabledTags.find(_tag => _tag === tag) ?
      enabledTags.filter(_tag => _tag !== tag)
      :
      [...enabledTags, tag]
  })),
  enableAllTags: () => set({ enabledTags: [] }),

}))


export default useStore
