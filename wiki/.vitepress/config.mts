import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Qos Wiki",
  description: "",
  head: [
    [
      'link', {
        rel: 'icon', href: '/icon.ico'
      }
    ]
  ],


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
logo: '/icon.ico',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Starter Guide', link: '/WIP' },
      { text: 'Advanaced Guide', link: '/WIP' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Starter Guide', link: '/WIP' },
          { text: 'Advanced Guide', link: '/WIP' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Amalite/BetterQosWiki' }
    ],

    search: {
      provider: 'local'
    }
  }
})
