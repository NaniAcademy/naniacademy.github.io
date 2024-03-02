import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light'
  },
  {
    name: 'dracula',
    text: '🧛 Dark'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Get Started',
      link: '/blog-site/hello-world'
    },
    {
      text: 'Elements',
      link: '/blog-site/hello-world/elements'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/blog-site/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/blog-site/sitemap.xml'
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
