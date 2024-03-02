import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'naniacademy.github.io/blog-site',
  title: 'NaniAcademy',
  subtitle: 'If Apps Can Speak',
  lang: 'en-US',
  description: 'This blog is all about explaining programming concepts by narrating the code written.',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Durga Prasad',
    status: '🌸',
    bio: 'Passionate Software Engineer'
  },
  themeColor: '#3D4451'
}
