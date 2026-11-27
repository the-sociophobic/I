import { ProjectType } from './types'

import VolshebnicIcon from '../assets/img/Левфиус.png'


const RGISI: ProjectType[] = [
  {
    title: 'Etheling',
    icon: '',
    date: '01.11.2020',
    tagSections: [
      {
        tags: ['сайт', '3д'],
        links: [
          { label: 'сайт', URL: 'https://the-sociophobic.github.io/aetheling' },
          { label: 'код', URL: 'https://github.com/the-sociophobic/aetheling' },
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
            text: 'Сайт бренда'
          },
        ]
      }
    ],
  },
  {
    title: 'Young old',
    icon: '',
    date: '01.11.2020',
    tagSections: [
      {
        tags: ['сайт'],
        links: [
          { label: 'сайт', URL: 'https://the-sociophobic.github.io/young-old-schedule' },
          { label: 'код', URL: 'https://github.com/the-sociophobic/young-old-schedule' },
          { label: 'код виджета', URL: 'https://github.com/the-sociophobic/young-old-vichy' },
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
            text: 'Сайт фестиваля'
          },
        ]
      },
    ],
  },
  {
    title: 'youinteralia',
    icon: '',
    date: '01.07.2021',
    tagSections: [
      {
        tags: ['сайт'],
        links: [
          { label: 'сайт', URL: 'https://the-sociophobic.github.io/youinteralia' },
          { label: 'код', URL: 'https://github.com/the-sociophobic/youinteralia' },
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
            text: 'Сайт спектакль'
          },
        ]
      }
    ],
  },
  {
    title: 'AR-приложение «Волшебник Изумрудного Города»',
    icon: VolshebnicIcon,
    date: '01.06.2023',
    tagSections: [
      {
        tags: ['3д', 'видео'],
        links: [
          { label: 'видео', URL: 'https://vk.com/video-5923168_456239435' },
          { label: 'показы', URL: 'https://tuz-tomsk.ru/performances/volshebnik-izumrudnogo-goroda' },
        ],
        blocks: [
          {
            type: 'images',
            images: [
              {
                src: '',
                description: 'Скриншот'
              },
            ]
          },
          {
            type: 'text',
            text: 'AR-спектакль'
          },
        ]
      }
    ],
  },
  {
    title: 'Интерактивный спектакль “Лихорадка”',
    icon: '',
    date: '01.07.2024',
    tagSections: [
      {
        tags: ['бот', '3д'],
        links: [
          { label: 'бот', URL: 'https://t.me/bulgakov_walk_bot' },
        ],
        blocks: [
          {
            type: 'images',
            images: [
              {
                src: '',
                description: 'Скриншот'
              },
            ]
          },
          {
            type: 'text',
            text: 'Интерактивный спектакль внутри Telegram-бота'
          },
        ]
      }
    ],
  },
]


export default RGISI
