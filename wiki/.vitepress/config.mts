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
      { text: 'Starter Guide', link: '/markdown-examples' },
      { text: 'Advanaced Guide', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
