export type ProjectType = {
  title: string
  icon: string
  date: string

  tagSections: ProjectTagSectionType[]
}

export type ProjectTagType =
  | 'сайт'
  | 'UX'
  | '3д'
  | 'актёр'
  | 'режиссёр'
  | 'продюсер'
  | 'организатор'
  | 'бот'
  | 'видео'
  | 'инсталляция'

export const projectTagValues: ProjectTagType[] = [
  'сайт',
  'UX',
  '3д',
  'актёр',
  'режиссёр',
  'продюсер',
  'организатор',
  'бот',
  'видео',
  'инсталляция'
]

export type TagsSelectorTagType = ProjectTagType | 'Все'

export type ProjectTagSectionLinkType = {
  label: string
  URL: string
}

export type ProjectTagSectionType = {
  tags: ProjectTagType[]
  links: ProjectTagSectionLinkType[]
  blocks: ProjectTagSectionBlockType[]
}

export type ProjectTagSectionBlockType = {
  type: 'h1' | 'text' | 'images'
  h1?: string
  text?: string
  images?: ProjectSectionImageType[]
}

export type ProjectSectionImageType = {
  type?: 'youtube'
  src: string
  description?: string
}

export type ProjectMappedType = ProjectType & {
  tags: ProjectTagType[]
}
