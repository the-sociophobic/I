import { useEffect } from 'react'

import useStore from './useStore'
import useParams from './useParams'
import { ProjectTagType, projectTagValues } from '../projects/types'


const useTags = () => {
  const {
    tags,
    enabledTags,
    setEnabledTags,
    toggleTag,
    enableAllTags
  } = useStore()

  const { paramsState, setParamsStateLike, setParams } = useParams()
  useEffect(() => {
    setEnabledTags(
      Object.keys(paramsState)
        .filter(key => projectTagValues.includes(key as ProjectTagType)) as ProjectTagType[]
    )
  }, [])

  const toggleTagWithParams = (tag: ProjectTagType) => {
    if (enabledTags.includes(tag))
      setParamsStateLike({ [tag]: undefined })
    else
      setParamsStateLike({ [tag]: '' })

    toggleTag(tag)
  }
  const enableAllTagsWithParams = () => {
    enableAllTags()
    setParams({})
  }

  return ({
    allTags: tags,
    enabledTags,
    toggleTag: toggleTagWithParams,
    enableAllTags: enableAllTagsWithParams
  })
}


export default useTags
