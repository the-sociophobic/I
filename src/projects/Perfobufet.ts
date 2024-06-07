import { ProjectType } from './types'


const Perfobufet: ProjectType[] = [
  {
    title: 'Перфобуфет',
    icon: '',
    date: '01.10.2020',
    tagSections: [
      {
        tags: ['сайт', '3д'],
        links: [
          { label: 'сайт', URL: 'https://the-sociophobic.github.io/perfobufet/' },
          { label: 'код', URL: 'https://github.com/the-sociophobic/perfobufet' },
        ],
        blocks: [
          {
            type: 'images',
            images: [
              {
                src: '',
                description: 'Главная страница'
              },
            ]
          },
          {
            type: 'text',
            text: 'Сайт театрального коллектива'
          },
        ]
      }
    ],
  },
  {
    title: 'Перфотачка',
    icon: '',
    date: '01.10.2021',
    tagSections: [
      {
        tags: ['сайт'],
        links: [
          { label: 'сайт', URL: 'https://the-sociophobic.github.io/perfotachka' },
          { label: 'код', URL: 'https://github.com/the-sociophobic/perfotachka' },
        ],
        blocks: [
          {
            type: 'images',
            images: [
              {
                src: '',
                description: 'Главная страница'
              },
            ]
          },
          {
            type: 'text',
            text: 'Сайт театрального фестиваля'
          },
        ]
      },
      {
        tags: ['видео'],
        links: [],
        blocks: [
          {
            type: 'images',
            images: [
              {
                type: 'youtube',
                src: 'https://youtu.be/rsUDJ5nEKUs',
                description: 'Съёмки'
              },
            ]
          },
          {
            type: 'text',
            text: 'Видео о перфотачке'
          },
        ]
      },
    ],
  },
  {
    title: 'ВНИМАНИЕ',
    icon: '',
    date: '01.10.2020',
    tagSections: [
      {
        tags: ['сайт'],
        links: [
          { label: 'сайт', URL: 'вниманиетмн.рф' },
          { label: 'код', URL: 'https://github.com/the-sociophobic/attention' },
        ],
        blocks: [
          {
            type: 'images',
            images: [
              {
                src: '',
                description: 'Главная страница'
              },
            ]
          },
          {
            type: 'text',
            text: 'Сайт театрального события'
          },
        ]
      }
    ],
  },
  {
    title: 'Бумфест',
    icon: '',
    date: '01.10.2020',
    tagSections: [
      {
        tags: ['сайт', '3д', 'инсталляция'],
        links: [
          { label: 'сайт', URL: 'https://the-sociophobic.github.io/boom-fest' },
          { label: 'код', URL: 'https://github.com/the-sociophobic/boom-fest' },
        ],
        blocks: [
          {
            type: 'images',
            images: [
              {
                src: '',
                description: 'Главная страница'
              },
            ]
          },
          {
            type: 'text',
            text: 'Сайт театральной инсталляции'
          },
        ]
      }
    ],
  },
]


export default Perfobufet
