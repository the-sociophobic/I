import { FC } from 'react'

import { TagsSelectorTagType } from '../../projects/types'


export type TagsOneProps = {
  tag: TagsSelectorTagType
  type?: 'enabled' | 'disabled'
  onClick?: () => void
}


const TagsOne: FC<TagsOneProps> = ({
  tag,
  type,
  onClick
}) => {
  return (
    <div
      className={`TagsOne TagsOne--${type}`}
      onClick={onClick}
    >
      {tag}
    </div>
  )
}


export default TagsOne
