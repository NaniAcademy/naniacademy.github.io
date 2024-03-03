import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: 'naniacademy.github.io',
  title: 'NaniAcademy',
  subtitle: 'If Apps Can Speak',
  lang: 'en-US',
  description: 'This blog is all about explaining programming concepts by narrating the code written.',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Durga Prasad',
    bio: 'Passionate Software Engineer',
    metadata: [
      {
        icon: "i-simple-icons-github",
        link: "https://github.com/DurgaPrasadReddyV",
      }
    ]
  },
  themeColor: '#3D4451'
}
