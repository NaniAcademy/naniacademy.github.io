import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'dracula',
    text: '🧛 Dark'
  },
  {
    name: 'cmyk',
    text: '🖨 Light'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'GitHub',
      ink: 'https://github.com/NaniAcademy'
    },
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    },
    {
      text: "Source Code",
      link: "https://github.com/NaniAcademy/naniacademy.github.io"
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
