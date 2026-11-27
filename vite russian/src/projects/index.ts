// import { format } from 'date-fns'
// import { ru, enUS } from 'date-fns/locale'

// import sites from './sites'
import TochkaDostupa from './TochkaDostupa'
import Perfobufet from './Perfobufet'
import RGISI from './RGISI'
import Crypto from './Crypto'
import Nihilists from './Nihilists'

import { ProjectMappedType } from './types'
import getUniqueTags from '../utils/getUniqueTags'
import { months } from '../utils/dictionary/date'


const projects: ProjectMappedType[] = [
  ...TochkaDostupa,
  ...Perfobufet,
  ...RGISI,
  ...Crypto,
  ...Nihilists,
].map(project => {
  const [day, monthNumber, year] = project.date.split('.')
  const month = months[parseInt(monthNumber) - 1]
  const dateObj = new Date(`${monthNumber}.${day}.${year}`)
  const datetime = dateObj.getTime() + ''

  return ({
    ...project,
    tags: getUniqueTags(
      project.tagSections
        .map(tagSection => tagSection.tags)
        .reduce((a, b) => [...a, ...b])
    ),
    // date: format(dateObj, 'MMMM yyyy', { locale: ru }),
    date: `${month} ${year}`,
    datetime
  })
}).sort((a, b) => b.datetime.localeCompare(a.datetime))


export default projects
