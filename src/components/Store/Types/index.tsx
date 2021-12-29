import projects from '../projects'


export interface Project {
  id: number
  name: string

}

export type StateType = {
  locale: string
  ready: boolean
  projects: Project[]
}

const initialState: StateType = {
  locale: "en",
  ready: false,
  projects: projects
}


export {
  initialState
}