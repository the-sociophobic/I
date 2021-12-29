import { Project } from './Types'


const projects: Project[] = [
  {
    name: 'a'
  }
].map((proj, index) => ({
  ...proj,
  id: index
}))


export default projects