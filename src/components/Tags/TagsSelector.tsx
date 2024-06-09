import { FC } from 'react'

import TagsOne from './TagsOne'
import useTags from '../../hooks/useTags'
import { ProjectTagType } from '../../projects/types'


export type TagsSelectorProps = {
  className?: string
  shownTags?: ProjectTagType[]
  showAllButton?: boolean
}


const TagsSelector: FC<TagsSelectorProps> = ({
  className,
  shownTags,
  showAllButton
}) => {
  const {
    allTags,
    enabledTags,
    toggleTag,
    enableAllTags
  } = useTags()

  return (
    <div className={`${className} d-flex flex-wrap`}>
      {showAllButton &&
        <TagsOne
          tag={'Все'}
          type={enabledTags.length === 0 ? 'enabled' : 'disabled'}
          onClick={() => enableAllTags()}
        />
      }
      {(shownTags || allTags).map(tag =>
        <TagsOne
          key={tag}
          tag={tag}
          type={enabledTags.includes(tag) ? 'enabled' : 'disabled'}
          onClick={() => toggleTag(tag)}
        />
      )}
    </div>
  )
}


export default TagsSelector
